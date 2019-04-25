! function(t, e) {
    for (var n in e) t[n] = e[n]
}(this, function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function(t, e, n) {
    t.exports = n(18)
}, , , , , , function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t) {
        var e = this;
        return new Promise(function(n, i) {
            window.PoWaSettings = (0, A.extendDeep)({}, D, window.PoWaSettings), PoWaSettings.client = PoWaSettings.client || (0, A.sniffClient)(), PoWaSettings.videoSupport = PoWaSettings.videoSupport || (0, A.getVideoSupport)();
            var o = PoWaSettings.client;
            o.isWindows && o.isIE && 11 == o.version && (PoWaSettings.videoSupport.hlsJS = !1);
            var a = (0, A.extend)({}, O, t);
            a.id = a.id.replace ? a.id.replace(/(^#)/, "") : a.id;
            var r = function() {
                N.set(e, a), n()
            };
            a.autoplay ? (0, A.canAutoplay)(a.muted).then(r).catch(function() {
                "muted" === a.autoplayFallback ? (0, A.canAutoplay)(!0).then(function() {
                    a.muted = !0, r()
                }).catch(function() {
                    a.autoplay = !1, r()
                }) : (a.autoplay = !1, r())
            }) : r()
        })
    }

    function a() {
        var t = N.get(this),
            e = (0, h.$)("#" + t.id);
        return e.css((0, A.extend)({}, (0, A.notEmpty)(t.style) ? t.style : A.DEFAULT_STYLE, {
            paddingBottom: 100 * (t.aspectRatio || A.SIXTEEN_BY_NINE) + "%"
        }, A.REQUIRED_STYLE)), L.set(this, e), e
    }

    function r() {
        var t = I.get(this),
            e = M.get(this),
            n = N.get(this),
            i = L.get(this);
        if (i && (n.$promo || (0, A.notEmpty)(n.promo))) {
            var o = n.$promo ? n.$promo : new w.PoWaShot({
                id: n.id,
                data: n.promo,
                style: PoWaSettings.promo.style,
                template: PoWaSettings.promo.template,
                promoVideo: n.promoVideo
            });
            return (0, A.extend)(T, w.PoWaShot.EVENTS), (0, m.forEach)(w.PoWaShot.EVENTS, function(n) {
                o.on(n, function(i) {
                    if (i = i.detail ? i.detail : i, n === w.PoWaShot.EVENTS.PROMO_RENDER && !e[T.POWA_READY]) {
                        var o = i.visible;
                        t.once(T.POWA_READY, function() {
                            return t.trigger(w.PoWaShot.EVENTS.PROMO_RENDER, {
                                visible: o
                            })
                        })
                    }
                    t.trigger(n, i), n === w.PoWaShot.EVENTS.PROMO_CUSTOM && t.trigger(i.type, i)
                })
            }), window.powaData && window.powaData[n.uuid] && window.powaData[n.uuid].showErrorPane === !0 ? o.show() : n.autoplay && !n.$promo && o.hide(), i.append(o), R.set(this, o), o
        }
    }

    function s() {
        var t = M.get(this),
            e = N.get(this),
            n = PoWaSettings.videoSupport;
        if (t.stream = e.stream ? e.stream : n.hls || n.hlsJS ? e.video.streams[0] : (0, m.reject)(e.video.streams, function(t) {
                return t.toLowerCase().endsWith(".m3u8")
            })[0], e.stream && delete e.stream, e.debug && console.debug("stream", t.stream), !t.stream) throw "no streams"
    }

    function l() {
        var t = this,
            e = M.get(this),
            n = N.get(this),
            i = I.get(this),
            o = L.get(this);
        if (o) {
            var a = o.attr("id").replace("powa", "powa-player"),
                r = e.stream && e.stream.toLowerCase().endsWith(".m3u8") && !PoWaSettings.videoSupport.hls ? "" : e.stream,
                s = new g.PoWaPlayer({
                    controls: n.controls,
                    debug: n.debug,
                    id: a,
                    muted: n.muted,
                    frontload: !n.prerollOnly,
                    preload: n.preload,
                    stashVolume: n.stashVolume,
                    video: r,
                    volume: n.volume
                });
            return (0, m.forEach)(g.PoWaPlayer.EVENTS, function(t) {
                var e = g.PoWaPlayer.powaDown(t);
                s.on(t, function(t) {
                    return i.trigger(e, t.detail ? t.detail : t)
                }), n.on && n.on[e] && "function" == typeof n.on[e] && i.on(e, n.on[e])
            }), i.on(T.START, function(e) {
                var i = W.get(t);
                if (i) {
                    var o = n.adTag();
                    i.getStatus().isPreloading ? t.startAd() : t.powaUpAdTag ? t.once(T.AD_REQUEST, t.startAd) : o ? t.loadAd(o, !1, t.startAd) : s.play()
                } else s.play()
            }), i.on(T.RESUSCITATE, function(e) {
                var o = C.get(t);
                o && (o.destroy(), C.set(t, null)), i.once(T.LOADED, t.play), t.loadVideo(n.video)
            }), o.append(s), j.set(this, s), s
        }
    }

    function u() {
        var t = this;
        return new Promise(function(e, n) {
            var i = I.get(t),
                o = N.get(t),
                a = j.get(t),
                r = new _.PoWaSub({
                    onOff: i,
                    $player: a,
                    externalEvents: {
                        FIRST_FRAME: T.FIRST_FRAME
                    },
                    ready: e,
                    stashSubtitles: o.stashSubtitles,
                    subtitles: o.subtitles,
                    track: o.track,
                    tracks: o.video.tracks
                });
            o.track && delete o.track, (0, m.forEach)(_.PoWaSub.EVENTS, function(t) {
                r.on(t, function(e) {
                    return i.trigger(t, e.detail ? e.detail : e)
                })
            }), r.once(_.PoWaSub.EVENTS.SUBS_DESTROYED, function() {
                return V.set(t, null)
            }), V.set(t, r)
        })
    }

    function c(t) {
        var e = PoWaSettings.videoSupport;
        return t.toLowerCase().endsWith("m3u8") && !e.hls && e.hlsJS
    }

    function d() {
        function t(t, e) {
            var r = this,
                s = (0, A.fetchLocal)("powaLevel", 0);
            s = s ? s - 1 : s;
            var l = new Hls({
                capLevelToPlayerSize: !0,
                maxBufferLength: 10,
                maxMaxBufferLength: 60,
                maxBufferSize: 10485760,
                startLevel: s,
                liveDurationInfinity: !0,
                debug: a.debug
            });
            l.once = l.once || function(t, e) {
                var n = arguments,
                    i = function i() {
                        l.off(t, i), e(n)
                    };
                l.on(t, i)
            }, l.loadStream && console.debug("[" + S + "][HLS] ### hls.loadStream ALREADY EXISTS ###"), l.loadStream = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.noop;
                a.debug && console.debug("[" + S + "][HLS] load src: " + t), n.once(T.LOADED, e), l.loadSource(t)
            };
            var u = !0;
            l.on("hlsLevelSwitching", function(t, e) {
                e = (0, m.pick)(e, ["bitrate", "height", "level", "width"]), Object.assign(o, e), u ? (a.debug && console.debug("[" + S + "][HLS] initial level", e), u = !1, n.trigger(T.HLS_INITIAL_LEVEL, e)) : (a.debug && console.debug("[" + S + "][HLS] level switch", e), (0, A.stashLocal)({
                    powaLevel: e.level
                }), n.trigger(T.HLS_LEVEL_SWITCH, e))
            }), l.on(Hls.Events.ERROR, function(t, e) {
                var i = Object.assign({}, e);
                i.context = Object.assign({}, e.context), i.context.loader = null, i.loader = Object.assign({}, e.loader), i.loader.context = null, i.thrownBy = "hlsjs", n.trigger("HLS:" + i.type + ":" + i.details, i), e.fatal && "bufferAppendError" !== e.details && n.trigger(T.ERROR, i)
            }), l.on(Hls.Events.MEDIA_ATTACHED, function() {
                a.debug && console.debug("[" + S + "][HLS] attached"), l.on(Hls.Events.MANIFEST_PARSED, function(t, e) {
                    a.debug && console.debug("[" + S + "][HLS] manifest loaded, " + e.levels.length + " quality levels"), n.trigger(T.LOADED, e)
                }), l.loadStream(o.stream, t)
            }), l.on(Hls.Events.SUBTITLE_TRACKS_UPDATED, function(t, e) {
                var n = V.get(r);
                n && n.subsEmbedded(l, e.subtitleTracks)
            }), l.on(Hls.Events.SUBTITLE_TRACK_SWITCH, function(t, e) {
                var n = V.get(r);
                n && n.subsSwitch(e.id)
            }), l.on(Hls.Events.SUBTITLE_TRACK_LOADED, function(t, e) {
                var n = V.get(r);
                n && n.subsLoaded(e)
            }), l.attachMedia(i.elements[0]), C.set(this, l)
        }
        var e = this,
            n = I.get(this),
            i = j.get(this),
            o = M.get(this),
            a = N.get(this);
        return new Promise(function(n, i) {
            "function" == typeof window.Hls && o.stream.endsWith(".m3u8") ? t.call(e, n, i) : c(o.stream) ? (0, A.promiseScript)(a.hlsJSURL).then(function(o) {
                t.call(e, n, i)
            }).catch(i) : n()
        })
    }

    function p() {
        var t = this;
        return new Promise(function(e, n) {
            var i = N.get(t);
            if (i.ads && !W.get(t)) {
                var o = I.get(t),
                    a = j.get(t),
                    r = i.adHacks ? b.PoWaSellGoogimaHacks : y.PoWaSellGoogima;
                if (a) {
                    var s = (0, A.extend)({
                        $container: L.get(t),
                        $player: a,
                        adBar: i.adBar,
                        autoplay: i.autoplay,
                        debug: i.debug,
                        id: i.id,
                        allowTimeout: !i.prerollOnly,
                        ready: function(n) {
                            W.set(t, n), (0, A.extend)(T, r.EVENTS), (0, A.extend)(P, r.STATES), L.get(t).on("resize", function(e) {
                                var n = W.get(t);
                                n && n.resize(e)
                            }), n.on(T.AD_LOADED, function(t) {
                                a.pause()
                            }), n.on(T.AD_MUTE, function(t) {
                                return a.mute(t.detail.muted)
                            }), n.on(T.AD_CLICK, function(e) {
                                var n = W.get(t);
                                n && n.pause(), i.debug && console.debug("mobile: " + (PoWaSettings.client.isMobile ? "✓" : "✗") + " tablet: " + (PoWaSettings.client.isTablet ? "✓" : "✗") + " adClick:", e)
                            }), n.on(T.AD_END, function(e) {
                                var n = C.get(t),
                                    i = M.get(t),
                                    o = function() {
                                        a.play()
                                    };
                                a.getStatus().state !== g.PoWaPlayer.STATES.SKIPPED && (n && i.stream.toLowerCase().endsWith(".m3u8") ? a.clear(function() {
                                    n.loadStream(i.stream, o)
                                }) : o())
                            }), n.on(T.AD_DESTROYED, function() {
                                return W.set(t, null)
                            }), (0, m.forEach)(r.EVENTS, function(t) {
                                n.on(t, function(e) {
                                    return o.trigger(t, e.detail)
                                }), i.advertising && i.advertising.on && i.advertising.on[t] && "function" == typeof i.advertising.on[t] && o.on(t, i.advertising.on[t])
                            }), e(n)
                        },
                        setupError: function(n, i) {
                            var a = M.get(t);
                            o.trigger(r.EVENTS.AD_SETUP_ERROR, n), a.adBlocked = i.getStatus().state === r.STATES.AD_BLOCKED, e()
                        }
                    }, i.advertising, PoWaSettings.advertising);
                    new r(s)
                }
            } else e()
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PoWa = void 0;
    var f = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        h = n(7),
        g = n(11),
        m = n(9),
        v = n(10),
        w = n(12),
        y = n(13),
        b = n(16),
        _ = n(17),
        A = n(8),
        S = "PoWa",
        E = "1.5.7",
        k = "1914be4f",
        T = (0, A.extend)({
            ALL: "*",
            AUTOPLAY: "autoplay",
            HLS_INITIAL_LEVEL: "hlsInitialLevel",
            HLS_LEVEL_SWITCH: "hlsLevelSwitch",
            POWA_READY: "powaReady",
            POWA_RENDER: "powaRender",
            POWA_ERROR: "powaError",
            RESIZE: "resize",
            SETUP_ERROR: "setupError"
        }, (0, m.map)(g.PoWaPlayer.EVENTS, g.PoWaPlayer.powaDown), _.PoWaSub.EVENTS),
        P = (0, A.extend)({}, g.PoWaPlayer.STATES),
        x = 1e3,
        D = {
            promo: {
                size: "medium"
            }
        },
        O = {
            id: "",
            debug: !0,
            autoShowPromo: x / 3,
            hlsJSURL: "https://cdn.jsdelivr.net/hls.js/latest/hls.min.js",
            controls: !0,
            autoplay: !1,
            preload: "metadata",
            stashSubtitles: !0,
            stashVolume: !0,
            ready: console.debug,
            error: console.error,
            blurb: !1
        },
        C = new WeakMap,
        I = new WeakMap,
        M = new WeakMap,
        N = new WeakMap,
        L = new WeakMap,
        R = new WeakMap,
        j = new WeakMap,
        W = new WeakMap,
        V = new WeakMap,
        B = function() {
            function t() {
                var e = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, t), ["loadVideo", "loadAd", "startAd", "skipAd", "pause", "play", "togglePlay", "seekTime", "seekPosition", "jumpForward", "jumpBack", "mute", "volume", "showPromo", "hidePromo", "showControls", "hideControls", "showSubtitles", "hideSubtitles", "toggleSubtitles", "getStatus", "on", "off", "once", "onceIf", "until", "trigger"].map(function(t) {
                    return e[t] = e[t].bind(e)
                }), M.set(this, {});
                var c = new v.PoWaOnPoWaOff;
                I.set(this, c), o.call(this, n).then(function() {
                    a.call(e), r.call(e), s.call(e), l.call(e)
                }).then(function() {
                    return u.call(e)
                }).then(function() {
                    return d.call(e)
                }).then(function() {
                    return p.call(e)
                }).then(function() {
                    var t = M.get(e),
                        n = N.get(e),
                        i = R.get(e);
                    c.on(T.PROMO_PLAY, function() {
                        var t = j.get(e),
                            n = W.get(e);
                        n && n.initialUserAction(), t && t.play()
                    }), c.on(T.AD_FIRST_FRAME, i.hide), c.on(T.PLAY, i.hide), c.on(T.END, function() {
                        if (n.autoShowPromo) {
                            var o = function() {
                                e.getStatus().running || (i.show(), t.autoShowPromoTimeout = null)
                            };
                            t.autoShowPromoTimeout = setTimeout(o, n.autoShowPromo)
                        }
                    }), t[T.POWA_READY] = !0, n.ready(e), I.get(e).trigger(T.POWA_READY, e), n.autoplay && (I.get(e).trigger(T.AUTOPLAY), e.play())
                }).catch(function(t) {
                    n.error(t), I.get(e).trigger(T.POWA_ERROR, t)
                })
            }
            return f(t, null, [{
                key: "MODULE",
                get: function() {
                    return S
                }
            }, {
                key: "EVENTS",
                get: function() {
                    return T
                }
            }, {
                key: "STATES",
                get: function() {
                    return P
                }
            }, {
                key: "VERSION",
                get: function() {
                    return E
                }
            }, {
                key: "BUILD",
                get: function() {
                    return k
                }
            }]), f(t, [{
                key: "loadVideo",
                value: function(t) {
                    var e = this,
                        n = C.get(this),
                        i = R.get(this),
                        o = j.get(this),
                        a = V.get(this),
                        r = M.get(this),
                        l = N.get(this),
                        f = W.get(this),
                        h = function() {
                            var t = function() {
                                l.video !== r.loadVideo && (o.clearStarted(), l.video = r.loadVideo), delete r.loadVideo, s.call(e), u.call(e).then(function() {
                                    c(r.stream) ? n ? p.call(e).then(function() {
                                        return n.loadStream(r.stream)
                                    }).catch(function() {
                                        return n.loadStream(r.stream)
                                    }) : (f && (f.destroy(), W.set(e, null)), d.call(e).then(function() {
                                        return p.call(e)
                                    }).catch(function(t) {
                                        console.error(t)
                                    })) : (n && (n.destroy(), C.set(e, null)), p.call(e).then(function() {
                                        return o.load(r.stream)
                                    }).catch(function() {
                                        return o.load(r.stream)
                                    }))
                                })
                            };
                            f && f.clearStatus(), o.getStatus().state === g.PoWaPlayer.STATES.SKIPPED ? o.skip(t) : o.clear(t), i.update(l.video.promo)
                        };
                    l.debug && console.debug("[" + S + "][load]", t), this.getStatus().running && o.setSkipped(), a && (l.subtitles = a.showing(), a.destroy());
                    var m = !!r.loadVideo;
                    r.loadVideo = t, m || (f && f.isRunning() ? (f.once(T.AD_END, h), f.skip()) : h())
                }
            }, {
                key: "loadAd",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A.noop,
                        o = N.get(this),
                        a = W.get(this);
                    o.debug && console.debug("[" + S + "][loadAd] - " + t), PoWaSettings.powaUp = PoWaSettings.powaUp || {}, PoWaSettings.powaUp.adTag = PoWaSettings.powaUp.adTag || [], t && a && (this.powaUpAdTag = !0, PoWaSettings.powaUp.adTag.reduce(function(t, e) {
                        return t.then(function(t) {
                            return e(t, {
                                id: o.id
                            })
                        })
                    }, Promise.resolve(t)).then(function(t) {
                        e.powaUpAdTag = !1, a.requestAds(t, n, o.adTimeouts), i()
                    }))
                }
            }, {
                key: "startAd",
                value: function() {
                    var t = N.get(this),
                        e = j.get(this),
                        n = W.get(this);
                    t.debug && console.debug("[" + S + "][startAd]"), n ? n.startAd() : e.play()
                }
            }, {
                key: "skipAd",
                value: function(t) {
                    var e = N.get(this),
                        n = W.get(this);
                    e.debug && console.debug("[" + S + "][skipAd]"), n && n.isRunning() && n.skip(t)
                }
            }, {
                key: "pause",
                value: function() {
                    var t = N.get(this),
                        e = W.get(this);
                    t.debug && console.debug("[" + S + "][pause]"), e && e.isRunning() ? e.pause() : j.get(this).pause()
                }
            }, {
                key: "play",
                value: function() {
                    var t = M.get(this),
                        e = N.get(this),
                        n = W.get(this);
                    e.debug && console.debug("[" + S + "][play]"), t.autoShowPromoTimeout && (clearTimeout(t.autoShowPromoTimeout), t.autoShowPromoTimeout = null), n && n.isRunning() ? n.play() : (n && n.initialUserAction(), j.get(this).play())
                }
            }, {
                key: "togglePlay",
                value: function() {
                    j.get(this).togglePlay()
                }
            }, {
                key: "seekTime",
                value: function(t) {
                    j.get(this).seekTime(t)
                }
            }, {
                key: "seekPosition",
                value: function(t) {
                    j.get(this).seekPosition(t)
                }
            }, {
                key: "jumpForward",
                value: function(t) {
                    j.get(this).jumpForward(t)
                }
            }, {
                key: "jumpBack",
                value: function(t) {
                    j.get(this).jumpBack(t)
                }
            }, {
                key: "mute",
                value: function(t, e) {
                    j.get(this).mute(t, e)
                }
            }, {
                key: "volume",
                value: function(t) {
                    j.get(this).volume(t)
                }
            }, {
                key: "showPromo",
                value: function() {
                    var t = N.get(this);
                    t.debug && console.debug("[" + S + "][showPromo]"), R.get(this).show()
                }
            }, {
                key: "hidePromo",
                value: function() {
                    var t = N.get(this);
                    t.debug && console.debug("[" + S + "][hidePromo]"), R.get(this).hide()
                }
            }, {
                key: "showControls",
                value: function() {
                    var t = N.get(this);
                    t.controls && j.get(this).setControls(!0)
                }
            }, {
                key: "hideControls",
                value: function() {
                    j.get(this).setControls(!1)
                }
            }, {
                key: "showSubtitles",
                value: function(t) {
                    var e = N.get(this),
                        n = V.get(this);
                    e.subtitles = t, n && n.show(t)
                }
            }, {
                key: "hideSubtitles",
                value: function() {
                    var t = V.get(this);
                    t && t.hide()
                }
            }, {
                key: "toggleSubtitles",
                value: function() {
                    var t = V.get(this);
                    t && (t.showing() ? t.hide() : t.show())
                }
            }, {
                key: "getStatus",
                value: function() {
                    var t = M.get(this),
                        e = N.get(this),
                        n = j.get(this),
                        i = W.get(this),
                        o = V.get(this),
                        a = i ? i.getStatus() : {},
                        r = n ? n.getStatus() : {},
                        s = o ? o.getStatus() : {},
                        l = {
                            running: !!(r.running || a.running || (0, A.notEmpty)(a) && a.state === P.AD_CLICKED && r.state === P.IDLE),
                            playing: !!(r.state === P.PLAYING || (0, A.notEmpty)(a) && a.state === P.AD_PLAYING),
                            state: a.running ? a.state : (0, A.notEmpty)(r) ? r.state : (0, A.notEmpty)(a) ? a.state : null
                        },
                        u = (0, m.chain)(t).pick(["adBlocked", "bitrate", "height", "level", "stream", "width"]).compact().value();
                    return Object.assign(l, u), (0, A.notEmpty)(r) && (0, A.extend)(l, {
                        time: r.time,
                        muted: r.muted,
                        volume: r.volume,
                        duration: r.duration
                    }), (0, A.notEmpty)(a) && (0, A.extend)(l, {
                        adStatus: a,
                        adRunning: a.running,
                        adTime: a.timing.duration - (a.timing.remaining >= 0 ? a.timing.remaining : a.timing.lastRemaining),
                        adDuration: a.timing.duration
                    }), (0, A.notEmpty)(s) && (s.showing = void 0 === s.showing && e.subtitles ? e.subtitles : s.showing ? s.showing : null, l.subtitles = s), l
                }
            }, {
                key: "on",
                value: function(t, e, n) {
                    I.get(this).on(t, e)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    I.get(this).off(t, e)
                }
            }, {
                key: "once",
                value: function(t, e, n) {
                    I.get(this).once(t, e)
                }
            }, {
                key: "onceIf",
                value: function(t, e, n, i) {
                    I.get(this).onceIf(t, e, n)
                }
            }, {
                key: "until",
                value: function(t, e, n, i) {
                    I.get(this).until(t, e, n)
                }
            }, {
                key: "trigger",
                value: function(t) {
                    I.get(this).trigger(t)
                }
            }]), t
        }();
    e.PoWa = B, window.PoWa = B
}, function(t, e, n) {
    "use strict";

    function i(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t) {
        return new k(t)
    }

    function r(t) {
        var e = this;
        t.forEach(function(t) {
            var n = e,
                i = _.get(n),
                o = A.get(n),
                a = t.contentRect.width,
                r = t.contentRect.height ? t.contentRect.height : t.target.offsetHeight;
            _.set(n, a), A.set(n, r);
            var s = (0, v.isFullscreen)();
            b.get(n).trigger("resize", {
                width: a,
                height: r,
                oldWidth: i,
                oldHeight: o,
                fullscreen: s
            })
        })
    }

    function s() {
        S = null, E.size && (E.forEach(function(t) {
            var e = _.get(t),
                n = A.get(t),
                i = t.width(),
                o = t.height();
            if (e !== i || n !== o) {
                var a = (0, v.isFullscreen)();
                _.set(t, i), A.set(t, o), b.get(t).trigger("resize", {
                    width: i,
                    height: o,
                    oldWidth: e,
                    oldHeight: n,
                    fullscreen: a
                })
            }
        }), S = requestAnimationFrame(s))
    }

    function l(t) {
        var e = this,
            n = b.get(this);
        n.on("resize", t), E.add(this), _.set(this, this.width()), A.set(this, this.height()), window.ResizeObserver ? (this.ro || (this.ro = new window.ResizeObserver(r.bind(this))), this.elements.forEach(function(t) {
            return e.ro.observe(t)
        })) : S || (S = requestAnimationFrame(s))
    }

    function u(t) {
        var e = this,
            n = b.get(this);
        n.off("resize", t), this.ro && this.elements.forEach(function(t) {
            return e.ro.unobserve(t)
        }), n.length("resize") || E.delete(this)
    }

    function c(t) {
        var e = this;
        this.isInDOM() ? t() : window.MutationObserver ? (this._bodyObserver = new MutationObserver(function(n) {
            e.isInDOM() && (e._bodyObserver.disconnect(), t())
        }), this._bodyObserver.observe(document.body, {
            childList: !0,
            subtree: !0
        })) : requestAnimationFrame(function() {
            return c.call(e, t)
        })
    }

    function d(t, e) {
        return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
    }

    function p(t, e) {
        t.classList ? t.classList.add(e) : d(t, e) || (t.className += " " + e)
    }

    function f(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("\\b" + e + "\\b", "g"), "")
    }

    function h(t, e) {
        t.classList.toggle(e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PoWaPack = void 0;
    var g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        m = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }();
    e.$ = a;
    var v = n(8),
        w = n(10),
        y = {
            ADDED_TO_DOM: "addedToDOM",
            RESIZE: "resize"
        },
        b = new WeakMap,
        _ = new WeakMap,
        A = new WeakMap,
        S = void 0,
        E = new Set,
        k = e.PoWaPack = function() {
            function t() {
                var e = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    a = arguments[1];
                if (o(this, t), ["add", "append", "after", "attr", "createDomNode", "find", "getElement", "getElements", "hasClass", "addClass", "removeClass", "toggleClass", "removeAttr", "html", "css", "parent", "children", "width", "height", "offset", "position", "isInDOM", "show", "hide", "visible", "empty", "detach", "filter", "which", "forEach", "map", "reduce", "on", "off", "once", "onceIf", "until", "trigger"].map(function(t) {
                        return e[t] = e[t].bind(e)
                    }), b.set(this, new w.PoWaOnPoWaOff), this.elements = [], n = "string" == typeof n ? n.trim() : n, (0, v.isHTMLElement)(n)) this.elements.push(n);
                else if (n instanceof NodeList) this.elements = [].concat(i(n));
                else if (n.length && "<" === n[0]) {
                    var r;
                    (r = this.elements).push.apply(r, i(this.createDomNode(n)))
                } else if (n.length && "#" === n[0]) this.elements.push(this.getElement(n, a));
                else {
                    var s;
                    (s = this.elements).push.apply(s, i(this.getElements(n, a)))
                }
            }
            return m(t, null, [{
                key: "EVENTS",
                get: function() {
                    return y
                }
            }]), m(t, [{
                key: "add",
                value: function(e) {
                    var n = this;
                    e = e instanceof t ? e : new t(e), e.elements.forEach(function(t) {
                        return n.elements.push(t)
                    })
                }
            }, {
                key: "append",
                value: function(e) {
                    var n = this;
                    e = e instanceof t ? e : new t(e), this.elements.length ? e.elements.forEach(function(t) {
                        return n.elements[n.elements.length - 1].appendChild(t)
                    }) : e.elements.forEach(function(t) {
                        return n.elements.push(t)
                    })
                }
            }, {
                key: "after",
                value: function(e) {
                    var n = this;
                    e = e instanceof t ? e : new t(e), this.elements.length ? (e.elements.reverse(), e.elements.forEach(function(t) {
                        var e = n.elements[n.elements.length - 1];
                        e.parentNode.insertBefore(t, e.nextSibling)
                    }), e.elements.reverse()) : e.elements.forEach(function(t) {
                        return n.elements.push(t)
                    })
                }
            }, {
                key: "attr",
                value: function(t, e) {
                    return "undefined" == typeof e && this.elements.length ? this.elements[0].getAttribute(t) : void(e === !0 && this.elements.length ? this.elements.forEach(function(e) {
                        return e.setAttribute(t, "")
                    }) : e === !1 && this.elements.length ? this.elements.forEach(function(e) {
                        return e.removeAttribute(t)
                    }) : this.elements.forEach(function(n) {
                        return n.setAttribute(t, e)
                    }))
                }
            }, {
                key: "removeAttr",
                value: function(t) {
                    this.elements.forEach(function(e) {
                        return e.removeAttribute(t)
                    })
                }
            }, {
                key: "createDomNode",
                value: function(t) {
                    if ("string" == typeof t) {
                        var e = document.createElement("div");
                        p(e, "powapack-husk"), e.innerHTML = t;
                        var n = e.childNodes;
                        return Array.prototype.slice.call(n)
                    }
                }
            }, {
                key: "detach",
                value: function() {
                    this.elements.forEach(function(t) {
                        t.parentNode && t.parentNode.removeChild(t)
                    })
                }
            }, {
                key: "getElement",
                value: function(t, e) {
                    return (e || document).querySelector(t)
                }
            }, {
                key: "getElements",
                value: function(t, e) {
                    if (!t) return [];
                    var n = (e || document).querySelectorAll(t);
                    return Array.prototype.slice.call(n)
                }
            }, {
                key: "hasClass",
                value: function(t) {
                    var e = this.elements.map(function(e) {
                        return d(e, t)
                    });
                    return 0 === e.length ? void 0 : 1 === e.length ? e[0] : e
                }
            }, {
                key: "addClass",
                value: function(t) {
                    this.elements.forEach(function(e) {
                        return p(e, t)
                    })
                }
            }, {
                key: "removeClass",
                value: function(t) {
                    this.elements.forEach(function(e) {
                        return f(e, t)
                    })
                }
            }, {
                key: "toggleClass",
                value: function(t) {
                    this.elements.forEach(function(e) {
                        return h(e, t)
                    })
                }
            }, {
                key: "html",
                value: function(t) {
                    if (this.elements.length) {
                        if (!t) return this.elements[0].innerHTML;
                        this.elements[0].innerHTML = t
                    }
                }
            }, {
                key: "css",
                value: function(t) {
                    var e = this,
                        n = function(n) {
                            if ("object" === g(t[n])) {
                                var i = e.find(n);
                                i.css(t[n])
                            } else e.elements.forEach(function(e) {
                                return e.style[n] = t[n]
                            })
                        };
                    for (var i in t) n(i)
                }
            }, {
                key: "parent",
                value: function() {
                    return this.elements.length ? new t(this.elements[0].parentNode) : null
                }
            }, {
                key: "children",
                value: function() {
                    return this.elements.length ? new t(this.elements[0].childNodes) : null
                }
            }, {
                key: "width",
                value: function() {
                    return this.elements.length ? this.elements[0].offsetWidth : null
                }
            }, {
                key: "height",
                value: function() {
                    return this.elements.length ? this.elements[0].offsetHeight : null
                }
            }, {
                key: "offset",
                value: function() {
                    if (!this.elements.length) return null;
                    var t = this.elements[0].getBoundingClientRect();
                    return {
                        top: t.top + window.pageYOffset,
                        left: t.left + window.pageXOffset
                    }
                }
            }, {
                key: "position",
                value: function() {
                    return this.elements.length ? {
                        top: this.elements[0].offsetTop,
                        left: this.elements[0].offsetLeft
                    } : null
                }
            }, {
                key: "isInDOM",
                value: function() {
                    return this.elements.length ? this.reduce(function(t, e) {
                        return t && document.body.contains(e)
                    }, !0) : null
                }
            }, {
                key: "find",
                value: function(e) {
                    e = e.replace(/\s/g, "");
                    var n = [];
                    if (1 === this.elements.length) return new t(e, this.elements[0]);
                    if (this.elements.forEach(function(i) {
                            return n.push(new t(e, i))
                        }), n.length) {
                        var o = void 0;
                        return n.forEach(function(t) {
                            if (o) {
                                var e;
                                (e = o.elements).push.apply(e, i(t.elements))
                            } else o = t
                        }), o
                    }
                }
            }, {
                key: "show",
                value: function() {
                    return this.elements.reduce(function(t, e) {
                        return e instanceof HTMLElement && "none" === e.style.display ? (e.style.display = e.getAttribute("data-display") || "block", !0) : t
                    }, !1)
                }
            }, {
                key: "hide",
                value: function() {
                    return this.elements.reduce(function(t, e) {
                        if (e instanceof HTMLElement) {
                            var n = "none" !== e.style.display ? e.style.display : e.currentStyle && e.currentStyle.display ? e.currentStyle.display : getComputedStyle(e).display;
                            return "none" !== n ? (e.setAttribute("data-display", e.style.display), e.style.display = "none", !0) : t
                        }
                        return t
                    }, !1)
                }
            }, {
                key: "visible",
                value: function() {
                    return this.elements.reduce(function(t, e) {
                        return e instanceof HTMLElement ? t && "none" !== e.style.display : t
                    }, !0)
                }
            }, {
                key: "empty",
                value: function() {
                    this.elements.forEach(function(t) {
                        return t.innerHTML = ""
                    })
                }
            }, {
                key: "filter",
                value: function(t) {
                    return this.elements.filter(t)
                }
            }, {
                key: "which",
                value: function(t) {
                    return this.elements.find(t)
                }
            }, {
                key: "forEach",
                value: function(t) {
                    return this.elements.forEach(t), this
                }
            }, {
                key: "map",
                value: function(t) {
                    return this.elements.map(t)
                }
            }, {
                key: "reduce",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null != this.elements[0] ? this.elements[0] : 0;
                    return this.elements.reduce(t, e)
                }
            }, {
                key: "on",
                value: function(t, e) {
                    if (t && e) switch (t) {
                        case y.RESIZE:
                            l.call(this, e);
                            break;
                        case y.ADDED_TO_DOM:
                            c.call(this, e);
                            break;
                        default:
                            this.elements.forEach(function(n) {
                                return n.addEventListener(t, e)
                            })
                    }
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if (t && e) switch (t) {
                        case y.RESIZE:
                            u.call(this, e);
                            break;
                        case y.ADDED_TO_DOM:
                            break;
                        default:
                            this.elements.forEach(function(n) {
                                return n.removeEventListener(t, e)
                            })
                    }
                }
            }, {
                key: "once",
                value: function(t, e) {
                    var n = this,
                        i = arguments;
                    if (t && e) {
                        var o = function o() {
                            n.off(t, o), e(i)
                        };
                        this.on(t, o)
                    }
                }
            }, {
                key: "onceIf",
                value: function(t, e, n) {
                    var i = arguments,
                        o = this;
                    if (t && n) {
                        var a = function a() {
                            e(i) && (o.off(t, a), n(i))
                        };
                        this.on(t, a)
                    }
                }
            }, {
                key: "until",
                value: function(t, e, n) {
                    var i = arguments,
                        o = this;
                    if (t && n) {
                        var a = function a() {
                            n(i), e(i) && o.off(t, a)
                        };
                        this.on(t, a)
                    }
                }
            }, {
                key: "trigger",
                value: function(t, e) {
                    if (t) {
                        var n = new CustomEvent(t, {
                            detail: e
                        });
                        this.elements.forEach(function(t) {
                            return t.dispatchEvent(n)
                        })
                    }
                }
            }]), t
        }()
}, function(t, e, n) {
    "use strict";

    function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function o(t) {
        "loading" !== document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
    }

    function a(t) {
        return JSON.parse(JSON.stringify(t))
    }

    function r() {}

    function s(t) {
        return setTimeout(t, 0)
    }

    function l() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.location.search,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "=",
            i = {};
        return t.replace(/(^\?)/, "").split(e).forEach(function(t) {
            t = t.split(n), i[t[0]] = t[1]
        }), i
    }

    function u() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.location.search,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "=";
        return (0, it.map)(l(t, e, n), E)
    }

    function c(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "=";
        return (0, it.reduce)(t, function(t, i, o) {
            return i = "object" === ("undefined" == typeof i ? "undefined" : nt(i)) ? JSON.stringify(i) : i, "" + t + (t ? e : "") + o + n + encodeURIComponent(i)
        }, "")
    }

    function d(t) {
        return t.replace(ot, "")
    }

    function p() {
        function t() {
            var t = window.MediaSource || window.WebKitMediaSource,
                e = window.SourceBuffer || window.WebKitSourceBuffer,
                n = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                i = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
            return n && i
        }
        D(window, "PoWaSettings.client", z, !1);
        var e = document.createElement("video"),
            n = !!e.canPlayType;
        if (n) {
            var i = {
                ogg: e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
                h264: e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
                webm: e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""),
                vp9: e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""),
                hls: e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""),
                hlsJS: t()
            };
            return window.PoWaSettings.client.isAndroid && i.hlsJS && (i.hls = !1), i
        }
        return !1
    }

    function f(t) {
        function e(t) {
            var e = {},
                n = /^data-/;
            return (0, it.forEach)(t, function(t, i) {
                n.test(i) && (i = i.substr(5), e[k(i)] = t)
            }), e
        }
        return t.dataset ? t.dataset : (t.dataset = e(t.attributes), t.dataset)
    }

    function h(t) {
        for (var e = "", n = 0; n < t; n++) e += "A";
        return e
    }

    function g() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return new Promise(function(e, n) {
            var i = document.createElement("video");
            if (PoWaSettings.client = PoWaSettings.client || z(), PoWaSettings.client.isIOS && !t) return void n();
            t && (i.muted = "muted"), i.src = at, i.setAttribute("playsinline", ""), document.body.appendChild(i);
            var o = i.play(),
                a = function() {
                    document.body.removeChild(i), i.src = "", i.load()
                };
            o ? o.then(function() {
                a(), e()
            }).catch(function() {
                a(), n()
            }) : (a(), e())
        })
    }

    function m(t) {
        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
        return n.forEach(function(e) {
            (0, it.forEach)(e, function(n, i) {
                e.hasOwnProperty(i) && (t[i] = n)
            })
        }), t
    }

    function v(t) {
        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
        return n.forEach(function(e) {
            (0, it.forEach)(e, function(n, i) {
                e.hasOwnProperty(i) && (w(n) && w(t[i]) ? v(t[i], n) : t[i] = n)
            })
        }), t
    }

    function w(t) {
        return !(!t || "object" !== ("undefined" == typeof t ? "undefined" : nt(t)) || Array.isArray(t))
    }

    function y(t) {
        return !t || 0 === Object.keys(t).length
    }

    function b(t) {
        return w(t) && Object.keys(t).length
    }

    function _(t, e) {
        return t && t.hasOwnProperty(e)
    }

    function A(t) {
        return t = "string" == typeof t ? t : JSON.stringify(t), t.split("").reduce(function(t, e) {
            return t = 31 * t + e.charCodeAt(0), t & t
        }, 0)
    }

    function S() {
        return !!(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen)
    }

    function E(t) {
        return "string" != typeof t ? t : "true" === t.toLowerCase() || "false" !== t.toLowerCase() && ("null" === t.toLowerCase() ? null : "undefined" === t.toLowerCase() ? void 0 : isNaN(Number(t)) ? rt.test(t) || st.test(t) ? JSON.parse(decodeURIComponent(t)) : t : Number(t))
    }

    function k(t) {
        return t.replace(lt, function(t) {
            return t.toLowerCase()
        }).replace(ct, function(t, e) {
            return e.toUpperCase()
        })
    }

    function T(t) {
        return t.replace(lt, function(t) {
            return t.toLowerCase()
        }).replace(ut, function(t, e, n) {
            return e + "-" + n.toLowerCase()
        })
    }

    function P(t) {
        var e = k(t);
        return e[0].toUpperCase() + e.slice(1)
    }

    function x() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
        if (e = "string" == typeof e ? e.replace(dt, ".").split(".").filter(function(t) {
                return !!t
            }) : e, e.length) {
            var i = e.shift();
            return i in t && void 0 !== t[i] ? x(t[i], e, n) : n
        }
        return void 0 !== t ? t : n
    }

    function D() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = arguments[2],
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        e = "string" == typeof e ? e.replace(dt, ".").split(".").filter(function(t) {
            return !!t
        }) : e;
        var o = e.shift();
        return e.length ? (t[o] = t[o] ? t[o] : isNaN(e[0]) ? {} : [], D(t[o], e, n, i)) : (t[o] = i || void 0 === t[o] ? "function" == typeof n ? n() : n : t[o], t[o])
    }

    function O(t) {
        var e = window.open(t, "_blank");
        e.focus()
    }

    function C(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r,
            i = document.querySelector('script[src="' + t + '"]');
        if (i && i.hasAttribute("data-powa-script")) i.hasAttribute("data-load") ? e() : i.hasAttribute("data-error") ? n() : (i.addEventListener("load", e), i.addEventListener("error", n));
        else {
            i = document.createElement("script");
            var o = document.getElementsByTagName("script")[0];
            o.parentNode.insertBefore(i, o), i.addEventListener("error", function() {
                i.setAttribute("data-error", !0), n()
            }), i.addEventListener("load", function() {
                i.setAttribute("data-load", !0), e()
            }), i.setAttribute("data-powa-script", !0), i.type = "text/javascript", i.async = !0, i.src = t
        }
    }

    function I(t) {
        return new Promise(function(e, n) {
            return C(t, e, n)
        })
    }

    function M(t, e) {
        var n = document.createElement("style");
        if (n.type = "text/css", n.appendChild(document.createTextNode(t)), e) {
            var i = document.querySelector("style#" + e);
            i && i.parentNode.removeChild(i), n.id = e
        }
        document.head.appendChild(n)
    }

    function N(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        if (document.querySelector('link[href="' + t + '"]')) return void e();
        var i = document.createElement("link"),
            o = document.getElementsByTagName("head")[0];
        o.appendChild(i), i.onerror = n, i.onload = e, i.type = "text/css", i.rel = "stylesheet", i.href = t
    }

    function L(t) {
        return new Promise(function(e, n) {
            return N(t, e, n)
        })
    }

    function R(t) {
        var e = t.id || ++pt,
            n = t.callbackParam || "cb",
            o = "powaResolvees" + e,
            a = "powaCallback" + e,
            r = "powaScript" + e;
        if (window[o] = window[o] || [], "function" == typeof t.resolve && window[o].push(t.resolve), !window[a]) {
            window[a] = function(t) {
                delete window[a];
                var e = document.getElementById(r);
                e.parentNode.removeChild(e), window[o].forEach(function(e) {
                    return e(t)
                }), delete window[o]
            };
            var s = c(m(i({}, n, a), t.data)),
                l = document.createElement("script");
            l.onerror = t.reject, l.id = r, l.src = "" + t.url + (t.url.includes("?") ? "&" : "?") + s, document.body.appendChild(l)
        }
    }

    function j(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r,
            i = new XMLHttpRequest;
        return i.onreadystatechange = function() {
            i.readyState > 3 && (ft.test(i.status) ? e(i.responseText) : n(i))
        }, i.onerror = function() {
            return n(i)
        }, i.open("GET", t), i.timeout = gt, i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.send(), i
    }

    function W(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r,
            o = new XMLHttpRequest;
        return o.onreadystatechange = function() {
                o.readyState > 3 && (ft.test(o.status) ? n(o.responseText) : i(o))
            }, o.onerror = function() {
                return i(o)
            }, o.open("POST", t), o.timeout = gt, o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            o.setRequestHeader("Content-Type", "application/json"), o.send(JSON.stringify(e)), o
    }

    function V(t, e) {
        if (!t) return null;
        if ("object" === ("undefined" == typeof t ? "undefined" : nt(t)))(0, it.forEach)(t, function(t, e) {
            return V(e, t)
        });
        else try {
            return localStorage.setItem(t, e), !0
        } catch (t) {
            return !1
        }
    }

    function B(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!t) return e;
        try {
            var i = localStorage.getItem(t);
            if (null !== i) return n ? i : E(i);
            throw i
        } catch (t) {
            return e
        }
    }

    function U(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            i = t.match(e);
        return i && i.length > n ? i[n] : ""
    }

    function z(t) {
        if (!t && b(ht)) return ht;
        if (t = t ? t : window.navigator && navigator.userAgent ? navigator.userAgent : "") {
            var e = /ipod|iphone|ipad/i.test(t),
                n = /android/i.test(t),
                i = /silk/i.test(t),
                o = /CrOS/i.test(t),
                a = /windows phone/i.test(t),
                r = !a && /windows/i.test(t),
                s = !e && !i && /macintosh/i.test(t),
                l = !n && /linux/i.test(t),
                u = U(t, /edge\/(\d+(\.\d+)?)/i),
                c = U(t, /version\/(\d+(\.\d+)?)/i),
                d = /tablet|ipad/i.test(t) || i,
                p = !d && (/[^-]mobi/i.test(t) || n),
                f = document.documentElement.ontouchstart;
            ht = {
                version: c,
                isAndroid: n,
                isIOS: e,
                isKindle: !1,
                isLinux: l,
                isMac: s,
                isChromeOs: o,
                isWindows: r,
                isWindowsPhone: a,
                isAndroidBrowser: !1,
                isChrome: !1,
                isFirefox: !1,
                isIE: !1,
                isSafari: !1,
                isSamsungBrowser: !1,
                isSilk: i,
                isMobile: p,
                isTablet: d,
                isTouch: f,
                isWebView: !1,
                isIframe: window.top !== window.self
            }, a ? m(ht, {
                browserName: "explorer",
                version: u ? u : U(t, /iemobile\/(\d+(\.\d+)?)/i),
                isIE: !0
            }) : /msie|trident/i.test(t) ? m(ht, {
                browserName: "explorer",
                version: U(t, /(?:msie |rv:)(\d+(\.\d+)?)/i),
                isIE: !0
            }) : /chrome.+? edge/i.test(t) ? m(ht, {
                browserName: "edge",
                version: u,
                isIE: !0
            }) : /firefox/i.test(t) ? m(ht, {
                browserName: "firefox",
                version: U(t, /firefox[ \/](\d+(\.\d+)?)/i),
                isFirefox: !0
            }) : i ? m(ht, {
                browserName: "silk",
                version: U(t, /silk\/(\d+(\.\d+)?)/i),
                isKindle: !0
            }) : /samsungbrowser/i.test(t) ? m(ht, {
                browserName: "samsung",
                version: U(t, /samsungbrowser\/(\d+(\.\d+)?)/i),
                isSamsungBrowser: !0,
                isWebView: /\swv\)/i.test(t)
            }) : /chrome/i.test(t) ? m(ht, {
                browserName: "chrome",
                version: U(t, /chrome\/(\d+(\.\d+)?)/i),
                isChrome: !0,
                isWebView: /\swv\)/i.test(t)
            }) : n ? m(ht, {
                browserName: "android",
                version: c,
                isAndroidBrowser: !0
            }) : /CriOS/i.test(t) ? m(ht, {
                browserName: "chrome-ios",
                version: c ? c : U(t, / OS (\d+)/i),
                isChrome: !0,
                isWebView: !c
            }) : /safari|applewebkit/i.test(t) ? m(ht, {
                browserName: "safari",
                version: c ? c : U(t, / OS (\d+)/i),
                isSafari: !0,
                isWebView: !c
            }) : e && m(ht, {
                browserName: "safari",
                version: c ? c : U(t, / OS (\d+)/i),
                isSafari: !0,
                isWebView: !c
            }), ht.browserName = ht.browserName, ht.version = Number(ht.version)
        }
        return ht
    }

    function F(t) {
        var e = Math.floor(t / 3600),
            n = Math.floor(t / 60) - 60 * e,
            i = Math.floor(t % 60),
            o = e ? e + ":" : "",
            a = e && n < 10 ? "0" + n + ":" : n + ":",
            r = i < 10 ? "0" + i : i;
        return "" + o + a + r
    }

    function $(t, e, n) {
        return t.includes("//") ? "//cdn-www.infobae.arcpublishing.com/resizer/?op=resize&url=" + encodeURIComponent(t) + "&mode=crop&w=" + (e || 640) + (n ? "&h=" + n : "") + "&q=99" : t
    }

    function Y(t) {
        var e = "; " + document.cookie,
            n = e.split("; " + t + "=");
        if (2 == n.length) return n.pop().split(";").shift()
    }

    function H(t, e, n) {
        var i = new Date;
        i.setTime(i.getTime() + 864e5 * n), document.cookie = t + "=" + e + ";path=/;expires=" + i.toGMTString()
    }

    function Q(t) {
        H(t, "", -1)
    }

    function q(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5,
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!t) return null;
        var o = t.getBoundingClientRect(),
            a = t.offsetWidth || t.offsetHeight || t.getClientRects().length;
        return !(i && !a) && (o.top + t.offsetHeight * e >= 0 && o.bottom - t.offsetHeight * e <= (window.innerHeight || document.documentElement.clientHeight) && (!n || o.left >= 0) && (!n || o.right <= (window.innerWidth || document.documentElement.clientWidth)) || o.top < 0 && o.bottom > (window.innerHeight || document.documentElement.clientHeight))
    }

    function G() {
        var t = "powatest";
        try {
            return localStorage.setItem(t, t), localStorage.removeItem(t), !0
        } catch (t) {
            return !1
        }
    }

    function K(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    }

    function Z(t, e, n) {
        return t >= e && t <= n
    }

    function X(t) {
        return "function" == typeof Number.isInteger ? Number.isInteger(t) : "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }

    function J() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.self !== window.top ? document.referrer : window.location.href;
        try {
            if (t = t.split("/")[2], t = t.split(":")[0]) {
                var e = t.split("."),
                    n = e.length,
                    i = "co" === e[n - 2] ? 3 : 2;
                if (n >= i) {
                    for (var o = []; i;) o.push(e[n - i]), i--;
                    t = o.join(".")
                }
            }
        } catch (t) {
            console.debug(t)
        }
        return t
    }

    function tt() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.self !== window.top ? document.referrer : window.location.href;
        try {
            t = t.split("/")[2], t = t.split(":")[0]
        } catch (t) {
            console.debug(t)
        }
        return t
    }

    function et(t) {
        if (!t) return !1;
        if (t instanceof HTMLElement) return !0;
        if ("object" === ("undefined" == typeof t ? "undefined" : nt(t))) {
            var e = (t + "").replace("[object ", "").replace("]", "");
            return e.startsWith("HTML") && e.endsWith("Element")
        }
        return !1
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.DEFAULT_STYLE = e.REQUIRED_STYLE = e.SIXTEEN_BY_NINE = e.ONE_SECOND = e.hasFont = e.canaryAudioMP4 = void 0;
    var nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.onReady = o, e.clone = a, e.noop = r, e.nextTick = s, e.getQueryStringParameters = l, e.getQueryStringObj = u, e.querystringify = c, e.protocolAgnosticURL = d, e.getVideoSupport = p, e.ensureDataset = f, e.A = h, e.canAutoplay = g, e.extend = m, e.extendDeep = v, e.isObject = w, e.isEmpty = y, e.notEmpty = b, e.has = _, e.hash = A, e.isFullscreen = S, e.parseString = E, e.camelCase = k, e.kabobCase = T, e.snakeCase = P, e.get = x, e.set = D, e.openInNewTab = O, e.loadScript = C, e.promiseScript = I, e.addCSS = M, e.loadCSS = N, e.promiseCSS = L, e.getJSONP = R, e.ajaxGET = j, e.ajaxPOST = W, e.stashLocal = V, e.fetchLocal = B, e.getCapturingGroup = U, e.sniffClient = z, e.formatTime = F, e.resizeImage = $, e.getCookie = Y, e.setCookie = H, e.deleteCookie = Q, e.isElementInViewport = q, e.isLocalStorageSupported = G, e.getRandomNumber = K, e.isNumWithin = Z, e.isInteger = X, e.getEmbedDomain = J, e.getEmbedHostname = tt, e.isHTMLElement = et;
    var it = n(9),
        ot = /^http:/,
        at = e.canaryAudioMP4 = "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/w" + h(358) + "3pw" + h(122) + "cCEQBSCkG//" + h(358) + "Deng" + h(123) + "cAAAAsJtb292AAAAbG12aGQ" + h(19) + "PoAAAALwABAAAB" + h(17) + "Q" + h(20) + "E" + h(18) + "E" + h(41) + "DAAAB7HRyYWsAAABcdGtoZAAAAAM" + h(15) + "I" + h(9) + "Lw" + h(15) + "QEAAAAAAQ" + h(20) + "E" + h(18) + "E" + h(19) + "CRlZHRzAAAAHGVsc3Q" + h(10) + "QAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQ" + h(18) + "KxEAAAIAFXEAAAAAAAtaGRscg" + h(10) + "c291bg" + h(15) + "FNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhk" + h(15) + "kZGluZgAAABxkcmVm" + h(10) + "EAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNk" + h(10) + "EAAABXbXA0YQ" + h(9) + "B" + h(13) + "gAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cw" + h(9) + "BAAAAAgAABAAAAAAcc3RzYw" + h(9) + "BAAAAAQAAAAIAAAABAAAAHHN0c3o" + h(15) + "IAAAFzAAABdAAAABRzdGNv" + h(10) + "EAAAAsAAAAYnVkdGEAAABabWV0YQ" + h(9) + "haGRscg" + h(10) + "bWRpcmFwcGw" + h(16) + "taWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE=",
        rt = /^{.*}$/,
        st = /^\[.*\]$/,
        lt = /^[A-Z]/,
        ut = /(\S+?)([A-Z]+)/g,
        ct = /-([a-z]?)/g,
        dt = /[\[\]]/g,
        pt = (e.hasFont = function() {
            function t(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                    i = document.createElement("span");
                i.innerHTML = Array(100).join("wi"), i.style.cssText = "position: absolute !important; width: auto !important; font-size: 128px !important; left: -99999px !important;", i.style.fontFamily = t, document.body && document.body.appendChild(i), setTimeout(function() {
                    var t = i.offsetWidth;
                    document.body.removeChild(i), e(t)
                }, n)
            }
            var e = ["monospace", "serif", "sans-serif"],
                n = [];
            return e.forEach(function(e) {
                    t(e, function(t) {
                        return n.push({
                            font: e,
                            width: t
                        })
                    }, 0)
                }),
                function(e, i) {
                    var o = [];
                    n.forEach(function(a) {
                        t(e + ", " + a.font, function(t) {
                            o.push(t !== a.width), o.length === n.length && i(o.reduce(function(t, e) {
                                return t || e
                            }, !1))
                        })
                    })
                }
        }(), 0),
        ft = /^2\d\d$/,
        ht = {},
        gt = e.ONE_SECOND = 1e3,
        mt = e.SIXTEEN_BY_NINE = 9 / 16;
    e.REQUIRED_STYLE = Object.freeze({
        position: "relative"
    }), e.DEFAULT_STYLE = Object.freeze({
        background: "#000",
        height: 0,
        overflow: "hidden",
        paddingBottom: 100 * mt + "%"
    })
}, function(t, e) {
    "use strict";

    function n(t) {
        var e = {
            value: function() {
                return t
            }
        };
        return s(y, function(n, i) {
            e[i] = function() {
                return t = n.apply(void 0, [t].concat(Array.prototype.slice.call(arguments))), e
            }
        }), e
    }

    function i(t) {
        return a(t, function(t) {
            return !!t
        })
    }

    function o(t, e) {
        if (Array.isArray(t)) {
            for (var n = t.length, i = 0; i < n; i++)
                if (t[i] === e) return !0
        } else
            for (var o in t)
                if (t[o] === e) return !0;
        return !1
    }

    function a(t, e) {
        var n = {};
        return Array.isArray(t) ? t.filter(e) : (s(t, function(t, i) {
            e(t, i) && (n[i] = t)
        }), n)
    }

    function r(t, e) {
        if (Array.isArray(t)) return t.find(e);
        for (var n in t)
            if (e(t[n])) return t[n]
    }

    function s(t, e) {
        if (Array.isArray(t)) t.forEach(e);
        else
            for (var n in t) e(t[n], n, t);
        return t
    }

    function l(t, e) {
        var n = {};
        return s(t, function(t) {
            var i = "string" == typeof e ? t[e] : e(t);
            n[i] = n[i] || [], n[i].push(t)
        }), n
    }

    function u(t) {
        return t
    }

    function c(t, e) {
        var n = {};
        return Array.isArray(t) ? t.map(e) : (s(t, function(i, o) {
            n[o] = e(i, o, t)
        }), n)
    }

    function d() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments[1],
            n = -(1 / 0);
        if (e) {
            var i = -(1 / 0);
            s(t, function(t, o, a) {
                var r = e(t, o, a);
                (r > i || r === -(1 / 0) && n === -(1 / 0)) && (n = t, i = r)
            })
        } else s(t, function(t) {
            return n = t > n ? t : n
        });
        return n
    }

    function p() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments[1],
            n = 1 / 0;
        if (e) {
            var i = 1 / 0;
            s(t, function(t, o, a) {
                var r = e(t, o, a);
                (r < i || r === 1 / 0 && n === 1 / 0) && (n = t, i = r)
            })
        } else s(t, function(t) {
            return n = t < n ? t : n
        });
        return n
    }

    function f(t, e) {
        var n = {};
        return s(t, function(t, i) {
            o(e, i) || (n[i] = t)
        }), n
    }

    function h(t, e) {
        var n = {};
        return e.forEach(function(e) {
            t.hasOwnProperty(e) && (n[e] = t[e])
        }), n
    }

    function g(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
        return Array.from(Array(t), function(t, n) {
            return e(n)
        })
    }

    function m() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null != t[0] ? t[0] : 0;
        return Array.isArray(t) ? t.reduce(e, n) : (s(t, function(t, i, o) {
            n = e(n, t, i, o)
        }), n)
    }

    function v(t, e) {
        return a(t, function(t, n, i) {
            return !e(t, n, i)
        })
    }

    function w(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
        return !!r(t, e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.chain = n, e.compact = i, e.contains = o, e.filter = a, e.find = r, e.forEach = s, e.groupBy = l, e.identity = u, e.map = c, e.max = d, e.min = p, e.omit = f, e.pick = h, e.range = g, e.reduce = m, e.reject = v, e.some = w;
    var y = e._ = {
        compact: i,
        contains: o,
        filter: a,
        find: r,
        forEach: s,
        groupBy: l,
        identity: u,
        map: c,
        max: d,
        min: p,
        omit: f,
        pick: h,
        range: g,
        reduce: m,
        reject: v,
        some: w
    }
}, function(t, e) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }();
    e.PoWaOnPoWaOff = function() {
        function t() {
            n(this, t), this.events = {}
        }
        return i(t, [{
            key: "on",
            value: function(t, e, n) {
                t && e && (n = n || e, this.events[t] = this.events[t] || new Map, this.events[t].set(e, e.bind(n)))
            }
        }, {
            key: "off",
            value: function(t, e) {
                this.events[t] && this.events[t].delete(e)
            }
        }, {
            key: "once",
            value: function(t, e, n) {
                var i = this;
                if (n = n || e, t && e) {
                    var o = function n() {
                        i.off(t, n), e.apply(void 0, arguments)
                    };
                    this.on(t, o, n)
                }
            }
        }, {
            key: "onceIf",
            value: function(t, e, n, i) {
                var o = this;
                if (i = i || n, t && e && n) {
                    var a = function i() {
                        e.apply(void 0, arguments) && (o.off(t, i), n.apply(void 0, arguments))
                    };
                    this.on(t, a, i)
                }
            }
        }, {
            key: "until",
            value: function(t, e, n, i) {
                var o = this;
                if (i = i || n, t && e && n) {
                    var a = function i() {
                        n.apply(void 0, arguments), e.apply(void 0, arguments) && o.off(t, i)
                    };
                    this.on(t, a, i)
                }
            }
        }, {
            key: "trigger",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.events["*"] && this.events["*"].forEach(function(n) {
                    try {
                        n(e, t)
                    } catch (t) {
                        console.warn(t)
                    }
                }), this.events[t] && this.events[t].forEach(function(n) {
                    try {
                        n(e, t)
                    } catch (t) {
                        console.warn(t)
                    }
                })
            }
        }, {
            key: "length",
            value: function(t) {
                return this.events[t] ? this.events[t].size : 0
            }
        }]), t
    }()
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function r(t) {
        var e = t.replace(h, "");
        return e = e[0].toLowerCase() + e.slice(1)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PoWaPlayer = void 0;
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        l = n(9),
        u = n(8),
        c = n(7),
        d = "PoWaPlayer",
        p = {
            BROKEN_PROMISE: "powaBrokenPromise",
            COMPLETE: "powaComplete",
            END: "powaEnd",
            ERROR: "powaError",
            FIRST_DOWNLOAD: "powaFirstDownload",
            FIRST_FRAME: "powaFirstFrame",
            LOAD: "powaLoad",
            LOADED_DATA: "powaLoadedData",
            LOADED_METADATA: "powaLoadedMetadata",
            LOAD_START: "powaLoadStart",
            LOADED: "powaLoaded",
            MEDIA_CLICK: "powaMediaClick",
            MEDIA_START: "powaMediaStart",
            MUTED: "powaMuted",
            PAUSE: "powaPause",
            PLAY: "powaPlay",
            PROGRESS: "powaProgress",
            READY: "powaReady",
            RESUSCITATE: "powaResuscitate",
            SKIP: "powaSkip",
            STALLED: "powaStalled",
            START: "powaStart",
            TIME: "powaTime",
            VOLUME: "powaVolume"
        },
        f = {
            1: "MEDIA_ERR_ABORTED",
            2: "MEDIA_ERR_NETWORK",
            3: "MEDIA_ERR_DECODE",
            4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
        },
        h = /^powa/,
        g = (0, l.map)(p, r),
        m = {
            ENDED: "ended",
            ERROR: "error",
            IDLE: "idle",
            PAUSED: "paused",
            PLAYING: "playing",
            SKIPPED: "skipped",
            BUFFERING: "buffering"
        },
        v = Object.freeze({
            debug: !0,
            debugExclusions: ["progress", "timeupdate"],
            dnr: 1,
            jumpDelta: 15,
            preload: "metadata",
            stashVolume: !0,
            ready: function() {
                console.debug("[" + d + "] ready")
            },
            setupError: console.error
        }),
        w = Object.freeze({
            backgroundColor: "black",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        }),
        y = function(t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, e);
                var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, '<video class="powa-video"></video>'));
                if (n.media = n.elements[0], n.setDefaultStyle(), ["_setupPlayerEvents", "setDefaultStyle", "clear", "clearStarted", "_setSneakyStart", "_unsetSneakyStart", "load", "pause", "_play", "play", "togglePlay", "seekTime", "seekPosition", "jumpForward", "jumpBack", "mute", "volume", "setSkipped", "skip", "setControls", "getStatus", "_playerEventHandler", "_resuscitate", "_endedHandler", "_errorHandler", "_loadeddataHandler", "_loadedmetadataHandler", "_loadstartHandler", "_pauseHandler", "_playHandler", "_playingHandler", "_progressHandler", "_volumechangeHandler", "_stalledHandler", "_timeupdateHandler"].map(function(t) {
                        return n[t] = n[t].bind(n)
                    }), n.settings = (0, u.extend)({}, v, t), n.clearStarted(), n.state = m.IDLE, n.debug = n.settings.debug, n.debugExclusions = n.settings.debugExclusions, n._setupPlayerEvents(), n.attr("id", t.id), n.attr("crossOrigin", "anonymous"), n.attr("playsinline", !0), n.attr("x-webkit-airplay", "deny"), n.attr("controlslist", "nodownload"), n.attr("preload", n.settings.preload), n.setControls(n.settings.controls), n.settings.volume = (0, u.get)(n, "settings.volume", (0, u.fetchLocal)("powaVolume", 1)), n.settings.muted = (0, u.get)(n, "settings.muted", (0, u.fetchLocal)("powaMuted", !1)), n.volume(n.settings.volume), n.mute(n.settings.muted), n.stream = n.settings.video, n.settings.frontload && n.stream) {
                    var a = n.settings.debug ? function() {
                        console.debug("[" + d + "][constructor] set src: " + n.settings.preload + " - " + n.stream)
                    } : u.noop;
                    n.load(n.stream, a)
                }
                return n
            }
            return a(e, t), s(e, null, [{
                key: "powaDown",
                value: function(t) {
                    var e = t.replace(h, "");
                    return e = e[0].toLowerCase() + e.slice(1)
                }
            }, {
                key: "MODULE",
                get: function() {
                    return d
                }
            }, {
                key: "EVENTS",
                get: function() {
                    return p
                }
            }, {
                key: "STATES",
                get: function() {
                    return m
                }
            }]), s(e, [{
                key: "_setupPlayerEvents",
                value: function() {
                    var t = this;
                    ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"].map(function(e) {
                        return t.on(e, t._playerEventHandler)
                    }), this.on("click", function(e) {
                        t.trigger(p.MEDIA_CLICK, (0, u.extend)(t.getStatus(), {
                            type: p.MEDIA_CLICK,
                            event: e
                        }))
                    })
                }
            }, {
                key: "setDefaultStyle",
                value: function() {
                    this.css(w)
                }
            }, {
                key: "_playerEventHandler",
                value: function(t) {
                    this.debug && !this.debugExclusions.includes(t.type) && console.debug("[" + d + "] " + t.type, t), this["_" + t.type + "Handler"] && this["_" + t.type + "Handler"](t)
                }
            }, {
                key: "_endedHandler",
                value: function(t) {
                    this.state = m.ENDED, this.trigger(p.COMPLETE, (0, u.extend)(this.getStatus(), {
                        type: g.COMPLETE,
                        event: t
                    })), this._ended(g.COMPLETE)
                }
            }, {
                key: "_resuscitate",
                value: function(t) {
                    return !1
                }
            }, {
                key: "_errorHandler",
                value: function(t) {
                    this.state = m.ERROR;
                    var e = t && t.srcElement && t.srcElement.src ? t.srcElement.src : null,
                        n = t && t.srcElement && t.srcElement.error && t.srcElement.error.code ? t.srcElement.error.code : null,
                        i = (0, u.extend)(this.getStatus(), {
                            stream: e,
                            code: n,
                            mediaError: n ? f[n] : null,
                            type: g.ERROR,
                            event: t,
                            thrownBy: "html5"
                        });
                    null === n && "undefined" == typeof t.nonBlocking && (i.nonBlocking = !0), console.error(p.ERROR, i), this._resuscitate(i) ? (this.resuscitate++, this.trigger(p.RESUSCITATE, i)) : (this.trigger(p.ERROR, i), this._ended(g.ERROR))
                }
            }, {
                key: "_loadeddataHandler",
                value: function(t) {
                    this.trigger(p.LOADED_DATA, (0, u.extend)(this.getStatus(), {
                        type: g.LOADED_DATA,
                        event: t
                    }))
                }
            }, {
                key: "_loadedmetadataHandler",
                value: function(t) {
                    this.trigger(p.LOADED_METADATA, (0, u.extend)(this.getStatus(), {
                        type: g.LOADED_METADATA,
                        event: t
                    }))
                }
            }, {
                key: "_loadstartHandler",
                value: function(t) {
                    if (this.clearing) this.state = m.IDLE, this.clearing = !1;
                    else {
                        var e = this.getStatus();
                        this.trigger(p.LOAD_START, (0, u.extend)(e, {
                            type: g.LOAD_START,
                            event: t
                        })), this.media.src && !this.media.src.startsWith("blob:") && (this.state = m.IDLE, this.trigger(p.LOADED, (0, u.extend)(e, {
                            type: g.LOADED,
                            event: t
                        })))
                    }
                }
            }, {
                key: "_pauseHandler",
                value: function(t) {
                    this.state = this.state === m.SKIPPED ? m.SKIPPED : m.PAUSED, this.trigger(p.PAUSE, (0, u.extend)(this.getStatus(), {
                        type: g.PAUSE,
                        event: t
                    }))
                }
            }, {
                key: "_playHandler",
                value: function(t) {
                    this.started && this.mediaStarted && this.state !== m.PLAYING && (this.state = m.PLAYING, this.trigger(p.PLAY, (0, u.extend)(this.getStatus(), {
                        type: g.PLAY,
                        event: t
                    })))
                }
            }, {
                key: "_playingHandler",
                value: function(t) {
                    this._playHandler(t)
                }
            }, {
                key: "_progressHandler",
                value: function(t) {
                    if (this.firstDownload && (this.firstDownload = !1, this.trigger(p.FIRST_DOWNLOAD, {
                            type: g.FIRST_DOWNLOAD
                        })), this.media.buffered && this.media.buffered.length) {
                        var e = this.media.buffered.end(this.media.buffered.length - 1) / this.media.duration;
                        this.trigger(p.PROGRESS, (0, u.extend)(this.getStatus(), {
                            type: g.PROGRESS,
                            progress: e,
                            event: t
                        }))
                    }
                }
            }, {
                key: "_stalledHandler",
                value: function(t) {
                    this.trigger(p.STALLED, (0, u.extend)(this.getStatus(), {
                        type: g.STALLED,
                        event: t
                    }))
                }
            }, {
                key: "_timeupdateHandler",
                value: function(t) {
                    if (this.started && this.mediaStarted) {
                        var e = this.getStatus();
                        this.firstFrame && e.duration && e.time > 0 && (this.firstFrame = !1, this.trigger(p.FIRST_FRAME, (0, u.extend)(e, {
                            type: g.FIRST_FRAME
                        }))), this.trigger(p.TIME, (0, u.extend)(e, {
                            type: g.TIME,
                            event: t
                        }))
                    }
                }
            }, {
                key: "_volumechangeHandler",
                value: function(t) {
                    if (!this.sneakyStart) {
                        var e = this.getStatus();
                        this.settings.stashVolume && (0, u.stashLocal)({
                            powaVolume: e.volume,
                            powaMuted: e.muted
                        });
                        var n = this.settings.muted !== e.muted,
                            i = this.settings.volume !== e.volume;
                        n && (this.attr("muted", e.muted), this.settings.muted = e.muted, this.trigger(p.MUTED, (0, u.extend)(e, {
                            type: g.MUTED,
                            event: t
                        }))), i && (this.settings.volume = e.volume, this.trigger(p.VOLUME, (0, u.extend)(e, {
                            type: g.VOLUME,
                            event: t
                        })))
                    }
                }
            }, {
                key: "_waitingHandler",
                value: function(t) {
                    this.state = m.BUFFERING, this.trigger(p.WAITING, (0, u.extend)(this.getStatus(), {
                        type: g.WAITING,
                        event: t
                    }))
                }
            }, {
                key: "_ended",
                value: function(t, e) {
                    this.debug && !this.debugExclusions.includes(p.END) && console.debug("[" + d + "] " + p.END, t), this.state = m.IDLE, this.trigger(p.END, (0, u.extend)(this.getStatus(), {
                        status: t
                    }, e))
                }
            }, {
                key: "clear",
                value: function(t) {
                    this.debug && console.debug("[" + d + "][clear]"), this.media.load(), this.media.src ? (this.clearing = !0, this.once("loadstart", t)) : t()
                }
            }, {
                key: "clearStarted",
                value: function() {
                    this.started = !1, this.mediaStarted = !1, this.firstDownload = !0, this.firstFrame = !0, this.resuscitate = 0
                }
            }, {
                key: "_setSneakyStart",
                value: function() {
                    var t = this.media.muted;
                    this.sneakyStart = {
                        muted: t
                    }, this.mute(!0), this.css({
                        opacity: 0
                    })
                }
            }, {
                key: "_unsetSneakyStart",
                value: function() {
                    this.sneakyStart && (this.mute(this.sneakyStart.muted), this.css({
                        opacity: 100
                    }), this.sneakyStart = null)
                }
            }, {
                key: "load",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.noop;
                    this.debug && console.debug("[" + d + "][load]", t), this.trigger(p.LOAD, (0, u.extend)(this.getStatus(), {
                        type: g.LOAD,
                        url: t
                    })), t !== this.stream && (this.clearStarted(), this.stream = t), this.on(p.LOADED, e), this.media.load(), this.attr("src", t)
                }
            }, {
                key: "pause",
                value: function() {
                    this.debug && console.debug("[" + d + "][pause]"), this.media.pause()
                }
            }, {
                key: "_play",
                value: function() {
                    var t = this,
                        e = this.media.play();
                    if (void 0 !== e) {
                        var n = null;
                        n = setTimeout(function() {
                            t.trigger(p.BROKEN_PROMISE, (0, u.extend)(t.getStatus(), {
                                type: g.BROKEN_PROMISE
                            })), t.pause(), t._play()
                        }, 5 * u.ONE_SECOND);
                        var i = function() {
                            return clearTimeout(n)
                        };
                        e.then(i).catch(i)
                    }
                }
            }, {
                key: "play",
                value: function() {
                    this.debug && console.debug("[" + d + "][play]"), this.started ? this.mediaStarted ? this._play() : (this.mediaStarted = !0, this._unsetSneakyStart(), this.trigger(p.MEDIA_START, (0, u.extend)(this.getStatus(), {
                        type: p.MEDIA_START
                    })), this.stream ? this.load(this.stream, this._play) : this._play(), this.getStatus().source || this._errorHandler({
                        message: "No streams found at media start",
                        nonBlocking: !1
                    })) : (this.started = !0, this._setSneakyStart(), this._play(), this.trigger(p.START, (0, u.extend)(this.getStatus(), {
                        type: g.START
                    })))
                }
            }, {
                key: "togglePlay",
                value: function() {
                    this.media.paused ? this.play() : this.pause()
                }
            }, {
                key: "seekTime",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.debug && console.debug("[" + d + "][seekTime]"), this.media.currentTime = t
                }
            }, {
                key: "seekPosition",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.debug && console.debug("[" + d + "][seekPosition]"), this.media.currentTime = this.media.duration * t
                }
            }, {
                key: "jumpForward",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.settings.jumpDelta;
                    this.media.currentTime = this.media.currentTime + t
                }
            }, {
                key: "jumpBack",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.settings.jumpDelta;
                    this.media.currentTime = this.media.currentTime - t
                }
            }, {
                key: "mute",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.media.muted,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.settings.stashVolume;
                    this.settings.stashVolume = e, this.media.muted = t, this.attr("muted", t)
                }
            }, {
                key: "volume",
                value: function(t) {
                    this.media.volume = t
                }
            }, {
                key: "setSkipped",
                value: function() {
                    this.state = m.SKIPPED, this.pause()
                }
            }, {
                key: "skip",
                value: function(t) {
                    var e = this;
                    this.debug && console.debug("[" + d + "][skip]"), this.state = m.SKIPPED;
                    var n = this.getStatus();
                    this.trigger(p.SKIP, (0, u.extend)(n, {
                        type: g.SKIP
                    })), this.clear(function() {
                        e._ended(g.SKIP, (0, l.pick)(n, ["time", "duration"])), t()
                    })
                }
            }, {
                key: "setControls",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.attr("controls");
                    t ? this.attr("controls", !0) : this.removeAttr("controls")
                }
            }, {
                key: "getStatus",
                value: function() {
                    return {
                        controls: this.media.controls,
                        duration: this.media.duration,
                        mediaStarted: this.mediaStarted,
                        muted: this.sneakyStart ? this.sneakyStart.muted : this.media.muted,
                        running: this.state === m.PAUSED || this.state === m.PLAYING,
                        source: this.media.src,
                        started: this.started,
                        state: this.state,
                        time: this.media.currentTime,
                        volume: this.media.volume
                    }
                }
            }]), e
        }(c.PoWaPack);
    e.PoWaPlayer = y
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function r(t) {
        return '<div class="powa-shot" id="' + t.id + '-powa-shot"></div>'
    }

    function s(t) {
        var e = "▶ Play",
            n = '\n\t\t<div class="powa-shot-image powa-shot-click" style="background-image: url(\'' + t.image + '\')">\n\t\t\t<div class="powa-shot-title">' + (t.title ? t.title : "") + '</div>\n\t\t\t<div class="powa-shot-play-btn powa-shot-click powa-shot-click-play">' + (t.playText ? t.playText : e) + "</div>\n\t\t</div>";
        return n.trim()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PoWaShot = void 0;
    var l = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        u = n(7),
        c = n(9),
        d = n(8),
        p = {
            PROMO_CLICK: "promoClick",
            PROMO_CUSTOM: "promoCustom",
            PROMO_HOVER: "promoHover",
            PROMO_PLAY: "promoPlay",
            PROMO_RENDER: "promoRender",
            PROMO_TOUCH: "promoTouch"
        },
        f = {
            debug: !1
        },
        h = {
            backgroundColor: "black",
            zIndex: 1,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0px",
            left: "0px",
            overflow: "hidden",
            backgroundSize: "cover",
            backgroundPosition: "center",
            ".powa-shot-image": {
                width: "100%",
                height: "100%",
                overflow: "hidden",
                backgroundSize: "cover",
                backgroundPosition: "center"
            },
            ".powa-shot-title": {
                fontSize: "xx-large",
                color: "#EEE",
                textShadow: "2px 2px 3px rgba(0,0,0, 0.8)",
                position: "absolute",
                top: "30px",
                left: "30px"
            },
            ".powa-shot-play-btn": {
                cursor: "pointer",
                fontSize: "xx-large",
                color: "#EEE",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "#111",
                position: "absolute",
                bottom: "30px",
                left: "30px"
            }
        },
        g = {
            click: {
                dotClassName: ".powa-shot-click",
                customRE: /^powa-shot-(click-\w*)/,
                event: p.PROMO_CLICK
            },
            mouseenter: {
                dotClassName: ".powa-shot-hover",
                customRE: /^powa-shot-(hover-\w*)/,
                event: p.PROMO_HOVER
            },
            mouseleave: {
                dotClassName: ".powa-shot-hover",
                customRE: /^powa-shot-(hover-\w*)/,
                event: p.PROMO_HOVER
            },
            touchstart: {
                dotClassName: ".powa-shot-touch",
                customRE: /^powa-shot-(touch-\w*)/,
                event: p.PROMO_TOUCH
            },
            touchend: {
                dotClassName: ".powa-shot-touch",
                customRE: /^powa-shot-(touch-\w*)/,
                event: p.PROMO_TOUCH
            }
        };
    e.PoWaShot = function(t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, e);
            var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r(t)));
            return n.settings = (0, d.extend)({}, f, t), ["_eventHandler", "update"].map(function(t) {
                n[t] = n[t].bind(n)
            }), n.on(u.PoWaPack.EVENTS.ADDED_TO_DOM, function() {
                n.trigger(p.PROMO_RENDER, {
                    visible: n.visible()
                })
            }), n.update(Object.assign({}, t.data, {
                promoVideo: t.promoVideo
            })), n
        }
        return a(e, t), l(e, null, [{
            key: "EVENTS",
            get: function() {
                return p
            }
        }]), l(e, [{
            key: "_eventHandler",
            value: function(t) {
                var e = this;
                if (!t.powaShotHandled) {
                    t.powaShotHandled = !0;
                    var n = g[t.type],
                        i = t.currentTarget && t.currentTarget.classList ? Array.from(t.currentTarget.classList) : t.currentTarget && t.currentTarget.className ? t.currentTarget.className.split(" ") : [],
                        o = (0, c.reduce)(i, function(t, e) {
                            var i = (0, d.getCapturingGroup)(e, n.customRE);
                            return i && t.push(i), t
                        }, []);
                    o.length ? (0, c.forEach)(o, function(n) {
                        var i = "promo" + (0, d.snakeCase)(n);
                        "promoClickPlay" === i ? e.trigger(p.PROMO_PLAY, {
                            type: p.PROMO_PLAY,
                            event: t
                        }) : e.trigger(p.PROMO_CUSTOM, {
                            type: i,
                            event: t
                        })
                    }) : this.trigger(n.event, {
                        type: n.event,
                        event: t
                    })
                }
            }
        }, {
            key: "update",
            value: function() {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (this.html(this.settings.template ? this.settings.template(e) : s(e)), !this.settings.template || this.settings.style) {
                    var n = this.settings.style || h;
                    this.css(n)
                }(0, c.forEach)(g, function(e, n) {
                    t.$interactables = t.find(e.dotClassName), t.$interactables.on(n, t._eventHandler)
                })
            }
        }]), e
    }(u.PoWaPack)
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PoWaSellGoogima = void 0;
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        s = function t(e, n, i) {
            null === e && (e = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(e);
                return null === a ? void 0 : t(a, n, i)
            }
            if ("value" in o) return o.value;
            var r = o.get;
            if (void 0 !== r) return r.call(i)
        },
        l = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        u = n(14),
        c = n(9),
        d = n(8),
        p = "PoWaSellGoogima",
        f = {
            AD_COMPANIONS: "adCompanions",
            AD_COMPLETE: "adComplete",
            AD_CLICK: "adClick",
            AD_DESTROYED: "adDestroyed",
            AD_END: "adEnd",
            AD_ERROR: "adError",
            AD_FIRST_FRAME: "adFirstFrame",
            AD_IMPRESSION: "adImpression",
            AD_READY: "adReady",
            AD_LOADED: "adLoaded",
            AD_WAITING: "adWaiting",
            AD_MUTE: "adMute",
            AD_PAUSE: "adPause",
            AD_PLAY: "adPlay",
            AD_SETUP_ERROR: "adSetupError",
            AD_SKIP: "adSkip",
            AD_START: "adStart",
            AD_START_REQUEST: "adStartRequest",
            AD_TIME: "adTime",
            AD_REQUEST: "adRequest",
            AD_REQUEST_TIMEOUT: "adRequestTimeout",
            CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
            CONTENT_RESUME_REQUESTED: "contentResumeRequested"
        },
        h = {
            AD_REQUESTED: "adRequested",
            AD_PLAYING: "adPlaying",
            AD_PAUSED: "adPaused",
            AD_START_REQUESTED: "adStartRequested",
            AD_BLOCKED: "adBlocked",
            AD_CLICKED: "adClicked",
            AD_DESTROYED: "adDestroyed",
            AD_ENDED: "adEnded",
            AD_ERROR: "adError",
            AD_IDLE: "adIdle",
            AD_SKIPPED: "adSkipped"
        },
        g = "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
        m = 1e3,
        v = (0, d.getQueryStringParameters)(),
        w = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = {};
            t.adTimeouts ? e = t.adTimeouts : window.PoWaSettings && PoWaSettings.advertising && (e = t.isPreloading ? PoWaSettings.advertising.prefetchAdTimeouts : PoWaSettings.advertising.adTimeouts);
            var n = e.vastLoadTimeout,
                i = v.vastLoadTimeout || n || 5;
            return i * m
        },
        y = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = {};
            t.adTimeouts ? e = t.adTimeouts : window.PoWaSettings && PoWaSettings.advertising && (e = t.isPreloading ? PoWaSettings.advertising.prefetchAdTimeouts : PoWaSettings.advertising.adTimeouts);
            var n = e.loadVideoTimeout,
                i = v.loadVideoTimeout || n || -1;
            return i * m
        },
        b = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = {};
            t.adTimeouts ? e = t.adTimeouts : window.PoWaSettings && PoWaSettings.advertising && (e = t.isPreloading ? PoWaSettings.advertising.prefetchAdTimeouts : PoWaSettings.advertising.adTimeouts);
            var n = e.requestAdsTimeout,
                i = v.adTimeoutLength || n || 8;
            return i * m
        },
        _ = {
            debug: !1,
            adCompanions: {
                width: 300,
                height: 200,
                selectionCriteria: {
                    creativeType: "All",
                    resourceType: "All",
                    sizeCriteria: "IgnoreSize"
                }
            },
            locale: "",
            vpaidEnabled: !0,
            ready: function() {
                console.debug("[" + p + "] ready")
            },
            setupError: console.error
        },
        A = function(t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                i(this, e);
                var a = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, (0, d.extend)({}, _, t), (0, d.extend)(f, n), h));
                ["_setupPoWaSellGoogima", "_setupIMA", "_onAdsManagerLoaded", "_processAdsManager", "_eventHandler", "_allAdsCompletedHandler", "_completeHandler", "_errorHandler", "_loadedHandler", "_muteHandler", "_pauseHandler", "_resumeHandler", "_skipHandler", "_startHandler", "_volumeChangeHandler", "_adEnded", "_timeCheck", "_adCompanionCheck", "_onContentPauseRequested", "_onContentResumeRequested", "destroy", "requestAds", "startAd", "startAdTimeout", "clearAdTimeout", "contentEnded", "initialUserAction", "pause", "play", "skip", "isRunning", "isMuted", "mute", "resize", "clearStatus", "getStatus"].map(function(t) {
                    a[t] = a[t].bind(a)
                }), a.clearStatus();
                var s = new Promise(function(t, e) {
                    var n = window.google && "object" === r(google.ima);
                    n ? t() : (0, d.loadScript)(g, t, e)
                });
                return s.then(function() {
                    a._setupPoWaSellGoogima(t), a._setupIMA(t), t.ready(a)
                }).catch(function(e) {
                    a.state = h.AD_BLOCKED, t.setupError({
                        error: e,
                        message: "Probable ad blocker"
                    }, a)
                }), a
            }
            return a(e, t), l(e, null, [{
                key: "MODULE",
                get: function() {
                    return p
                }
            }]), l(e, [{
                key: "_setupPoWaSellGoogima",
                value: function(t) {
                    if (!this.settings.$player) throw this.state = h.AD_ERROR, {
                        error: "missing player",
                        message: "Video player element required"
                    };
                    this.$player = this.settings.$player, this.customClickDiv = t.customClickDiv
                }
            }, {
                key: "_setupIMA",
                value: function(t) {
                    var e = (0, d.get)(PoWaSettings, "advertising.maxRedirects");
                    e && google.ima.settings.setNumRedirects(e), this.settings.vpaidEnabled && google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), this.settings.locale && google.ima.settings.setLocale(this.settings.locale), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0), this.adDisplayContainer = new google.ima.AdDisplayContainer(this.$adContainer.elements[0], this.$player.elements[0], this.customClickDiv), this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer), this.adsManager = null, this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this._onAdsManagerLoaded, !1, this), this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this._errorHandler, !1, this)
                }
            }, {
                key: "_onAdsManagerLoaded",
                value: function(t) {
                    var e = new google.ima.AdsRenderingSettings;
                    e.loadVideoTimeout = this.loadVideoTimeout, e.restoreCustomPlaybackStateOnAdBreakComplete = !0, e.enablePreloading = !0, this.adsManager = t.getAdsManager(this.$player.elements[0], e), this._processAdsManager()
                }
            }, {
                key: "_processAdsManager",
                value: function() {
                    var t = this;
                    this.adsManager.isCustomClickTrackingUsed() && (this.customClickDiv.style.display = "table"), this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this._onContentPauseRequested, !1, this), this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this._onContentResumeRequested, !1, this), this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this._errorHandler, !1, this), (0, c.forEach)(google.ima.AdEvent.Type, function(e) {
                        return t.adsManager.addEventListener(e, t._eventHandler, !1, t)
                    }), this.adReady = !0, this.trigger(f.AD_READY, {
                        type: f.AD_READY,
                        adMeta: this.adMeta
                    })
                }
            }, {
                key: "_eventHandler",
                value: function(t) {
                    var e = t.getAd();
                    this.settings.debug && console.debug("[" + p + "] " + t.type, e), this["_" + t.type + "Handler"] && this["_" + t.type + "Handler"](e, t)
                }
            }, {
                key: "_allAdsCompletedHandler",
                value: function(t) {
                    var e = this.state === h.AD_CLICKED ? f.AD_CLICK : this.state === h.AD_SKIPPED ? f.AD_SKIP : f.AD_COMPLETE;
                    this.state = h.AD_ENDED, this._adEnded(e)
                }
            }, {
                key: "_clickHandler",
                value: function(t) {
                    this.state = h.AD_CLICKED;
                    var e = {
                        duration: this.timing.duration,
                        remaining: this.timing.remaining,
                        skippable: this.adsManager.getAdSkippableState()
                    };
                    this.trigger(f.AD_CLICK, {
                        type: f.AD_CLICK,
                        adMeta: Object.assign({
                            adTimeoutLength: this.adTimeoutLength,
                            isPreloading: this.isPreloading
                        }, this.adMeta),
                        event: e
                    })
                }
            }, {
                key: "_completeHandler",
                value: function(t) {
                    this.state = h.AD_ENDED, this.trigger(f.AD_COMPLETE, {
                        type: f.AD_COMPLETE,
                        adMeta: Object.assign({
                            adTimeoutLength: this.adTimeoutLength,
                            adTagRequest: this.adTagRequest,
                            isPreloading: this.isPreloading
                        }, this.adMeta)
                    })
                }
            }, {
                key: "_durationChangeHandler",
                value: function(t) {
                    var e = this.timing.duration;
                    this.timing.duration = t.getDuration(), this.trigger(f.AD_DURATION_CHANGE, {
                        type: f.AD_DURATION_CHANGE,
                        oldDuration: e,
                        duration: this.timing.duration
                    })
                }
            }, {
                key: "_errorHandler",
                value: function(t) {
                    var e = this.state;
                    this.$player.pause();
                    var n = t.getError();
                    this.state = h.AD_ERROR;
                    var i = {
                        priorState: e,
                        error: n.toString(),
                        event: t,
                        type: f.AD_ERROR,
                        adMeta: Object.assign({
                            adTimeoutLength: this.adTimeoutLength,
                            adTagRequest: this.adTagRequest,
                            isPreloading: this.isPreloading
                        }, this.adMeta)
                    };
                    this.trigger(f.AD_ERROR, i), e === h.AD_START_REQUESTED && (this._onContentResumeRequested(f.AD_ERROR), this._adEnded(f.AD_ERROR))
                }
            }, {
                key: "_impressionHandler",
                value: function(t, e) {
                    this.trigger(f.AD_IMPRESSION, {
                        type: f.AD_IMPRESSION,
                        adMeta: Object.assign({
                            adTimeoutLength: this.adTimeoutLength,
                            adTagRequest: this.adTagRequest,
                            isPreloading: this.isPreloading
                        }, this.adMeta)
                    })
                }
            }, {
                key: "_loadedHandler",
                value: function(t, e) {
                    var n = this.$player.getStatus();
                    n.muted ? this.adsManager.setVolume(0) : this.adsManager.setVolume(n.volume), this.adMeta = e.getAdData() || {}, this.timing = {
                        duration: t.getDuration(),
                        firstFrame: !0,
                        lastRemaining: null,
                        remaining: this.adsManager.getRemainingTime()
                    }, this.trigger(f.AD_LOADED, {
                        type: f.AD_LOADED,
                        adMeta: Object.assign({
                            adTimeoutLength: this.adTimeoutLength,
                            adTagRequest: this.adTagRequest,
                            isPreloading: this.isPreloading
                        }, this.adMeta)
                    }), t.isLinear() || this._onContentResumeRequested("adNotLinear")
                }
            }, {
                key: "_muteHandler",
                value: function() {}
            }, {
                key: "_pauseHandler",
                value: function(t) {
                    this.state = h.AD_PAUSED, this.trigger(f.AD_PAUSE, {
                        type: f.AD_PAUSE,
                        adMeta: Object.assign({
                            adTagRequest: this.adTagRequest,
                            isPreloading: this.isPreloading
                        }, this.adMeta)
                    })
                }
            }, {
                key: "_resumeHandler",
                value: function(t) {
                    this.state = h.AD_PLAYING, this.trigger(f.AD_PLAY, {
                        type: f.AD_PLAY,
                        adMeta: Object.assign({
                            adTagRequest: this.adTagRequest,
                            isPreloading: this.isPreloading
                        }, this.adMeta)
                    })
                }
            }, {
                key: "_skipHandler",
                value: function(t) {
                    this.state = h.AD_SKIPPED;
                    var e = {
                        duration: this.timing.duration,
                        remaining: this.timing.remaining,
                        skippable: this.adsManager.getAdSkippableState()
                    };
                    this.trigger(f.AD_SKIP, {
                        adMeta: Object.assign({
                            adTagRequest: this.adTagRequest,
                            isPreloading: this.isPreloading
                        }, this.adMeta),
                        type: f.AD_SKIP,
                        event: e
                    })
                }
            }, {
                key: "_startHandler",
                value: function(t) {
                    this.state = h.AD_PLAYING, (0, d.extend)(this.adMeta, {
                        muted: this.isMuted()
                    }), this.clearAdTimeout(), this.trigger(f.AD_PLAY, {
                        type: f.AD_PLAY,
                        adMeta: Object.assign({
                            adTagRequest: this.adTagRequest,
                            isPreloading: this.isPreloading
                        }, this.adMeta)
                    }), this.trigger(f.AD_START, {
                        type: f.AD_START,
                        adMeta: Object.assign({
                            adTimeoutLength: this.adTimeoutLength,
                            adTagRequest: this.adTagRequest,
                            isPreloading: this.isPreloading
                        }, this.adMeta)
                    }), this._timeCheck(), this._adCompanionCheck(t)
                }
            }, {
                key: "_volumeChangeHandler",
                value: function(t) {
                    this.trigger(f.AD_MUTE, {
                        type: f.AD_MUTE,
                        muted: this.isMuted()
                    })
                }
            }, {
                key: "_adEnded",
                value: function(t) {
                    this.settings.debug && console.debug("[" + p + "] " + f.AD_END, {
                        status: t
                    }), this.clearAdTimeout(), this.trigger(f.AD_END, {
                        type: f.AD_END,
                        adMeta: Object.assign({
                            adTagRequest: this.adTagRequest,
                            isPreloading: this.isPreloading,
                            adStartTO: this.adStartTO
                        }, this.adMeta),
                        status: t
                    }), this.hide()
                }
            }, {
                key: "_timeCheck",
                value: function() {
                    this.timing.lastRemaining = this.timing.remaining;
                    var t = this.adsManager.getRemainingTime();
                    this.timing.remaining = Number(t.toFixed(3)), this.timing.elapsed = this.timing.duration - this.timing.remaining, this.timing.elapsed = Number(this.timing.elapsed.toFixed(3));
                    var e = 1e3 * (this.timing.remaining % 1).toFixed(3);
                    e = e > 100 ? e : 100, this.timing.remaining >= 0 && this.timing.remaining !== this.timing.lastRemaining && (this.timing.firstFrame && (this.timing.firstFrame = !1, this.trigger(f.AD_FIRST_FRAME, {
                        adMeta: this.adMeta,
                        type: f.AD_FIRST_FRAME
                    })), this.trigger(f.AD_TIME, {
                        duration: this.timing.duration,
                        elapsed: this.timing.elapsed,
                        remaining: this.timing.remaining,
                        type: f.AD_TIME
                    })), this.timing.remaining > 0 && (this.timing._timeCheckTO = setTimeout(this._timeCheck, e))
                }
            }, {
                key: "_adCompanionCheck",
                value: function(t) {
                    var e = new google.ima.CompanionAdSelectionSettings;
                    (0, c.forEach)(this.settings.adCompanions.selectionCriteria, function(t, n) {
                        return e[n] = t
                    });
                    var n = t.getCompanionAds(this.settings.adCompanions.width, this.settings.adCompanions.height, e);
                    n && n.length && (n = (0, c.map)(n, function(t) {
                        return {
                            type: t.getContentType(),
                            width: t.getWidth(),
                            height: t.getHeight(),
                            content: t.getContent()
                        }
                    }), this.trigger(f.AD_COMPANIONS, {
                        type: f.AD_COMPANIONS,
                        adCompanions: n
                    }))
                }
            }, {
                key: "_onContentPauseRequested",
                value: function() {
                    this.trigger(f.CONTENT_PAUSE_REQUESTED, {
                        type: f.CONTENT_PAUSE_REQUESTED,
                        adMeta: Object.assign({
                            adTagRequest: this.adTagRequest,
                            isPreloading: this.isPreloading
                        }, this.adMeta)
                    })
                }
            }, {
                key: "_onContentResumeRequested",
                value: function() {
                    this.trigger(f.CONTENT_RESUME_REQUESTED, {
                        type: f.CONTENT_RESUME_REQUESTED,
                        adMeta: Object.assign({}, this.adMeta, {
                            adTagRequest: this.adTagRequest,
                            isPreloading: this.isPreloading,
                            adStartTO: this.adStartTO
                        })
                    }), this.hide()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.settings.debug && console.debug("[" + p + "][destroy]"), this.mute(!0), this.adsManager && this.adsManager.destroy(), this.detach(), this.adsLoader = null, this.adsManager = null, this.adDisplayContainer = null, this.state = h.AD_DESTROYED, this._adEnded(this.state), this.trigger(f.AD_DESTROYED, {
                        type: f.AD_DESTROYED
                    })
                }
            }, {
                key: "requestAds",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments[2];
                    this.settings.debug && console.debug("[" + p + "][requestAds] " + t), this.state = h.AD_REQUESTED, this.adTagRequest = t, this.isPreloading = e, this.vastLoadTimeout = w({
                        isPreloading: e,
                        adTimeouts: n
                    }), this.loadVideoTimeout = y({
                        isPreloading: e,
                        adTimeouts: n
                    }), this.adTimeoutLength = b({
                        isPreloading: e,
                        adTimeouts: n
                    });
                    var i = new google.ima.AdsRequest;
                    i.adTagUrl = t, i.linearAdSlotWidth = this.$player.width(), i.linearAdSlotHeight = this.$player.height(), i.nonLinearAdSlotWidth = this.$player.width(), i.nonLinearAdSlotHeight = this.$player.height(), i.vastLoadTimeout = this.vastLoadTimeout, this.$player.getStatus().muted && i.setAdWillPlayMuted(!0), this.settings.autoplay && (this.settings.autoplay = !1, i.setAdWillAutoPlay(!0)), this.adsLoader.requestAds(i), this.trigger(f.AD_REQUEST, {
                        adMeta: Object.assign({}, this.adMeta, {
                            adTimeoutLength: this.adTimeoutLength,
                            vastLoadTimeout: this.vastLoadTimeout,
                            loadVideoTimeout: this.loadVideoTimeout
                        }),
                        type: f.AD_REQUEST
                    })
                }
            }, {
                key: "startAd",
                value: function() {
                    var t = this;
                    if (this.settings.debug && console.debug("[" + p + "][startAd]"), this.adTagRequest && this.state !== h.AD_ERROR) {
                        this.startAdTimeout(), this.state = h.AD_START_REQUESTED, this.trigger(f.AD_WAITING, {
                            type: f.AD_WAITING,
                            adMeta: Object.assign({}, this.adMeta, {
                                adTimeoutLength: this.adTimeoutLength,
                                adTagRequest: this.adTagRequest,
                                isPreloading: this.isPreloading,
                                vastLoadTimeout: this.vastLoadTimeout,
                                loadVideoTimeout: this.loadVideoTimeout
                            })
                        }), this.show();
                        var e = function() {
                            t.$player.clear(function() {
                                var e = void 0,
                                    n = void 0;
                                e = t.$player.width(), n = t.$player.height(), t.adsManager ? (t.adsManager.init(e, n, (0, d.isFullscreen)() ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL), t.adsManager.start(), t.trigger(f.AD_START_REQUEST, {
                                    type: f.AD_START_REQUEST,
                                    adMeta: t.adMeta,
                                    adsManager: t.adsManager,
                                    adContainer: t.$adContainer.elements[0],
                                    viewMode: (0, d.isFullscreen)() ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL,
                                    adTimeoutLength: t.adTimeoutLength
                                })) : (0, d.nextTick)(t.destroy), delete t.adReady
                            })
                        };
                        if (this.adReady) e();
                        else {
                            var n = this.adTagRequest;
                            this.once(f.AD_READY, function() {
                                var i = t.getStatus();
                                i.adTagRequest === n && e()
                            })
                        }
                    } else this._adEnded(f.AD_ERROR)
                }
            }, {
                key: "startAdTimeout",
                value: function() {
                    var t = this;
                    if (this.settings.allowTimeout) {
                        var e = this.adTimeoutLength ? this.adTimeoutLength : (0, d.get)(PoWaSettings, "advertising.adTimeouts.requestAdsTimeout") * m;
                        this.adStartTO = setTimeout(function() {
                            t.trigger(f.AD_REQUEST_TIMEOUT, {
                                adMeta: Object.assign({}, t.adMeta, {
                                    adTimeoutLength: t.adTimeoutLength,
                                    adTagRequest: t.adTagRequest,
                                    isPreloading: t.isPreloading,
                                    vastLoadTimeout: t.vastLoadTimeout,
                                    loadVideoTimeout: t.loadVideoTimeout
                                }),
                                type: f.AD_REQUEST_TIMEOUT
                            }), t.destroy()
                        }, e)
                    }
                }
            }, {
                key: "clearAdTimeout",
                value: function() {
                    clearTimeout(this.adStartTO), this.adStartTO = null
                }
            }, {
                key: "initialUserAction",
                value: function() {
                    this.settings.debug && console.debug("[" + p + "][initialUserAction]"), this.adDisplayContainer.initialize()
                }
            }, {
                key: "contentEnded",
                value: function() {
                    this.settings.debug && console.debug("[" + p + "][contentEnded]"), this.adsLoader.contentComplete()
                }
            }, {
                key: "pause",
                value: function() {
                    this.settings.debug && console.debug("[" + p + "][pause]"), this.adsManager && this.adsManager.pause()
                }
            }, {
                key: "play",
                value: function() {
                    this.settings.debug && console.debug("[" + p + "][play]"), this.adsManager && this.adsManager.resume()
                }
            }, {
                key: "skip",
                value: function(t) {
                    if (this.settings.debug && console.debug("[" + p + "][skip]"), this.adsManager) {
                        var e = {
                            duration: this.timing.duration,
                            remaining: this.timing.remaining,
                            skippable: this.adsManager.getAdSkippableState()
                        };
                        this.state = this.state === h.AD_CLICKED ? h.AD_CLICKED : h.AD_SKIPPED, this.adsManager.stop(), this.trigger(f.AD_SKIP, {
                            adMeta: Object.assign({}, this.adMeta, {
                                adTagRequest: this.adTagRequest,
                                adTimeoutLength: this.adTimeoutLength,
                                isPreloading: this.isPreloading
                            }),
                            type: f.AD_SKIP,
                            skipMethod: t,
                            event: e
                        })
                    }
                }
            }, {
                key: "isRunning",
                value: function() {
                    var t = [h.AD_PLAYING, h.AD_PAUSED, h.AD_CLICKED, h.AD_START_REQUESTED];
                    return this.isPreloading || t.push(h.AD_REQUESTED), t.includes(this.state)
                }
            }, {
                key: "isMuted",
                value: function() {
                    return this.adsManager ? !this.adsManager.getVolume() : null
                }
            }, {
                key: "mute",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !this.isMuted();
                    this.settings.debug && console.debug("[" + p + "][mute] " + t), this.adsManager && this.adsManager.setVolume(t ? 0 : this.$player.getStatus().volume || 1)
                }
            }, {
                key: "resize",
                value: function(t) {
                    this.settings.debug && console.debug("[" + p + "][resize] " + t), t = s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "resize", this).call(this, t), this.adsManager && this.adsManager.resize(t.width, t.height, t.fullscreen ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL)
                }
            }, {
                key: "clearStatus",
                value: function() {
                    var t = (0, d.get)(this, "timing._timeCheckTO", null);
                    clearTimeout(t), this.adMeta = {}, this.adTagRequest = "", this.isPreloading = !1, this.state = h.AD_IDLE, this.timing = {
                        _timeCheckTO: null,
                        duration: null,
                        firstFrame: null,
                        lastRemaining: null,
                        remaining: null
                    }
                }
            }, {
                key: "getStatus",
                value: function() {
                    return {
                        adMeta: this.adMeta,
                        adReady: !!this.adReady,
                        adTagRequest: this.adTagRequest,
                        muted: this.isMuted(),
                        running: this.isRunning(),
                        state: this.state,
                        timing: this.timing,
                        isPreloading: this.isPreloading
                    }
                }
            }]), e
        }(u.PoWaSell);
    e.PoWaSellGoogima = A
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function r() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return '<div id="' + (t.id ? t.id : "undefined") + '-powa-sell"></div>'
    }

    function s(t) {
        return '<div id="powa-sell-ad-container-' + t.id + '"></div>'
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PoWaSell = void 0;
    var l = function t(e, n, i) {
            null === e && (e = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(e);
                return null === a ? void 0 : t(a, n, i)
            }
            if ("value" in o) return o.value;
            var r = o.get;
            if (void 0 !== r) return r.call(i)
        },
        u = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        c = n(7),
        d = n(9),
        p = n(8),
        f = n(15),
        h = "PoWaSell",
        g = {},
        m = {},
        v = {
            ready: function() {
                console.debug("[" + h + "] ready")
            },
            setupError: console.error,
            adBar: {
                shrinkAd: function(t, e) {
                    var n = t.height * (e.width / e.height) / 2;
                    return {
                        top: t.height,
                        right: n,
                        bottom: 0,
                        left: n
                    }
                },
                shrinkAdCSS: function(t) {
                    return {
                        top: t.top + "px",
                        left: t.left + "px",
                        width: t.width + "px",
                        height: t.height + "px"
                    }
                }
            }
        },
        w = {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0px",
            left: "0px"
        },
        y = {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: "0px",
            top: "0px"
        };
    e.PoWaSell = function(t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments[1],
                a = arguments[2];
            i(this, e);
            var l = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r(t)));
            return l.css(w), l.hide(), (0, p.extend)(g, n), (0, p.extend)(m, a), t.adBar = t.adBar === !0 ? v.adBar : t.adBar ? (0, p.extend)({}, v.adBar, t.adBar) : null, l.settings = (0, p.extend)({}, v, t), ["_setupPoWaSell", "_setupAdBar", "show", "hide", "_resizeForAdBar", "resize", "showSkip"].map(function(t) {
                l[t] = l[t].bind(l)
            }), l._setupPoWaSell(), l._setupAdBar(), l.$adContainer = (0, c.$)(s(l.settings)), l.$adContainer.css(y), l.append(l.$adContainer), l
        }
        return a(e, t), u(e, null, [{
            key: "MODULE",
            get: function() {
                return h
            }
        }, {
            key: "EVENTS",
            get: function() {
                return g
            }
        }, {
            key: "STATES",
            get: function() {
                return m
            }
        }]), u(e, [{
            key: "_setupPoWaSell",
            value: function() {
                if (this.settings.$container) this.settings.$container.append(this);
                else {
                    if (!this.settings.id) throw {
                        error: "missing container",
                        message: "Element ID of container or PoWaPack wrapped container element required"
                    };
                    this.settings.id = this.settings.id.replace(/(^#)/, "");
                    var t = (0, c.$)("#" + this.settings.id);
                    t.append(this)
                }
            }
        }, {
            key: "_setupAdBar",
            value: function() {
                var t = this;
                this.settings.adBar && ((0, p.extend)(g, f.PoWaSellBar.EVENTS), this.$powaSellBar = new f.PoWaSellBar((0, p.extend)({}, {
                    id: this.settings.id
                }, this.settings.adBar)), this.$powaSellBar.on(g.AD_BAR_PAUSE, function() {
                    return t.pause()
                }), this.$powaSellBar.on(g.AD_BAR_PLAY, function() {
                    return t.play()
                }), this.$powaSellBar.on(g.AD_BAR_SKIP, function() {
                    return t.skip()
                }), this.$powaSellBar.on(g.AD_BAR_MUTE, function(e) {
                    return t.mute()
                }), this.$powaSellBar.on(g.AD_BAR_HIDE, this._resizeForAdBar), this.$powaSellBar.on(g.AD_BAR_SHOW, this._resizeForAdBar), (0, d.forEach)(f.PoWaSellBar.EVENTS, function(e) {
                    t.$powaSellBar.on(e, function(n) {
                        return t.trigger(e, n)
                    })
                }), (0, d.forEach)(g, function(e) {
                    t.$powaSellBar[e] && t.on(e, t.$powaSellBar[e])
                }), this.append(this.$powaSellBar))
            }
        }, {
            key: "show",
            value: function() {
                l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this), this._resizeForAdBar()
            }
        }, {
            key: "hide",
            value: function() {
                l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "hide", this).call(this), this.$player && this.$player.setDefaultStyle()
            }
        }, {
            key: "_resizeForAdBar",
            value: function() {
                this.$powaSellBar && this.settings.adBar && this.settings.adBar.shrinkAd && this.resize({
                    fullscreen: (0, p.isFullscreen)(),
                    height: this.height(),
                    width: this.width()
                })
            }
        }, {
            key: "resize",
            value: function(t) {
                if (this.settings.debug && console.debug("[" + h + "][resize] " + t), this.$powaSellBar && this.settings.adBar && this.settings.adBar.shrinkAd && this.settings.adBar.shrinkAdCSS) {
                    var e = this.settings.adBar.shrinkAd({
                        height: this.$powaSellBar.height(),
                        width: this.$powaSellBar.width()
                    }, t);
                    (0, p.extend)(e, {
                        height: t.height - (e.top + e.bottom),
                        width: t.width - (e.left + e.right)
                    });
                    var n = this.settings.adBar.shrinkAdCSS(e);
                    return this.$player.css(n), this.$adContainer.css(n), e
                }
                return t
            }
        }, {
            key: "showSkip",
            value: function() {
                this.$powaSellBar && this.$powaSellBar.showSkip()
            }
        }]), e
    }(c.PoWaPack)
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PoWaSellBar = void 0;
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        s = n(7),
        l = n(8),
        u = n(9),
        c = "PoWaSellBar",
        d = {
            AD_BAR_HIDE: "adBarHide",
            AD_BAR_MUTE: "adBarMute",
            AD_BAR_PAUSE: "adBarPause",
            AD_BAR_PLAY: "adBarPlay",
            AD_BAR_SHOW: "adBarShow",
            AD_BAR_SKIP: "adBarSkip"
        },
        p = {
            skipOffset: 15,
            skipThreshold: 2,
            adBarTemplate: function(t) {
                return '<div\n\t\t\tclass="powa-ad-bar"\n\t\t\tid="' + t.id + '-ad-bar"\n\t\t\tstyle="width: 100%; height: 22px; position: absolute; top: 0px; left: 0px; pointer-events: auto; font-family: Helvetica; background-color: #000; background-color: rgba(0,0,0, 0.7); z-index: 2;"\n\t\t>\n\t\t\t<img id="' + t.id + '-ad-play" style="position: absolute; left: 0px; top: 0px; width: auto; margin: 0; padding: 0;">\n\t\t\t<img id="' + t.id + '-ad-mute" style="position: absolute; left: 25px; top: 1px; width: auto; margin: 0; padding: 0;">\n\t\t\t<span id="' + t.id + '-ad-countdown" style="color: white; font-size: 14px; font-weight: 400; position: absolute; left: 50px; top: 3px; line-height: normal; margin: 0; padding: 0;"></span>\n\t\t\t<span id="' + t.id + '-ad-skip-container" class="skip-ad-container" style="width: 100%">\n\t\t\t\t<span id="' + t.id + '-ad-skip-countdown" style="color: white; font-size: 14px; font-weight: 400; position: absolute; top: 4px; right: 5px; line-height: normal; margin: 0; padding: 0;"></span>\n\t\t\t\t<span id="' + t.id + '-ad-skip" style="color: white; font-size: 14px; font-weight: 400; position: absolute; top: 3px; right: 5px; cursor: pointer; line-height: normal; margin: 0; padding: 0;">Skip</span>\n\t\t\t</span>\n\t\t</div>'
            },
            adCountdownTemplate: function(t) {
                return "This ad will end in " + Math.ceil(t.remaining) + " seconds"
            },
            adSkipCountdownTemplate: function(t) {
                return "You can skip this ad in " + Math.ceil(t.skipOffset - (t.duration - t.remaining)) + " seconds"
            },
            checkSizing: function(t) {
                var e = 5,
                    n = t.$adBar,
                    i = t.$adMuteControl,
                    o = t.$adCountdown,
                    a = t.$adSkipCountdown,
                    r = t.$adSkipControl,
                    s = o.position().left + o.width() + e,
                    l = i.position().left + i.width() + e,
                    u = a.width() ? a.position().left : r.width() ? r.position().left : 0;
                (n.width() < s || u && s > u) && o.hide(), a.width() && l > a.position().left && a.hide()
            }
        },
        f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAIAAADNQonCAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAJ9JREFUOE+t1G0RgCAMAFAaEIEoRCEKUYhCFCIQQXe3O9QJG5vyz3M89oE698s6rOs6HQRDKo9d4yGlFGPc5OZEzhle1FpDCCLEEdgZ4Lz3DCQTENF7h9JWyhaB6UBd0wYpCIRKKaQuNYF1QYNGXRaCDEtNtNZIRxQEyV9dyLuLCmI1yy2Cv1EyId5rgRA/rXvAfCKfCMN/C/qtOpILPgG3iNE9V6J34wAAAABJRU5ErkJggg==",
        h = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAIAAADNQonCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAF1JREFUOE9jYKAK+E8uQNgONIEMp6DognPs7e3rkYC8vDzQaCCJLAhUA7EPuxFApch+gqgGksiCQDWjRkADZDQsECljpIQFFbIZSVkee06lyAgyyq39+/eTZCU+xQDTtEcPk8Cw2gAAAABJRU5ErkJggg==",
        g = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAJVJREFUOE/tk1ENwCAMREEJEpCABCQgAQlIQQoSkIIEdkkXtizA6PjdfTT8vHLptbLWKj5JSim+wSe1DmutrbXkkgeHEACg8mB8mHMGOYONMWjc5JzDJ957wl5gMtaUUgKM+sODqLYG1o0qxrg07dF1IOpSykvOk9NSSlHg7PVsTWEB4u121xHvqh4tLvg+z8U3bf6WDjULsaN9YNkfAAAAAElFTkSuQmCC",
        m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAIAAADtKeFkAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAOhJREFUOE+lk1ERhCAQQCWBEYhABCMYgQhGMAIRjGIEIxjBCNy72RvOw0XU48NBZx/7dhdN0zQxRp4PljHmTT3jvxS7dV27rqsqOOf6vpewH54XVgihbdvSKeM4EsNT4UmOQkmEtMuySA6d50gyk/8oMgyDfKzwYnUUmabpKu+9hz+KoLBtWz2/dEi6mIlYa+d5PqsfeeFTF1URXJT+y6fE71VLoyHmM+m0y3iEicBcHY3Ck4oj0qKd8PRf7YjCl24eNXN/stHc4KUKykkiMou8/ur/g8hZ/6v8PuBJ/iK/v+EX9zLdf9cL1wScCm37SQgAAAAASUVORK5CYII=";
    e.PoWaSellBar = function(t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, e);
            var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t.adBarTemplate ? t.adBarTemplate(t) : p.adBarTemplate(t)));
            return n.hide(), n.settings = (0, l.extend)({}, p, t), n.settings.id = t.id.replace(/(^#)/, ""), ["_updateControls", "_togglePause", "_skip", "_toggleMute", "_checkSizing", "adStart", "adTime", "adPause", "adPlay", "adComplete", "adMute", "showSkip"].map(function(t) {
                n[t] = n[t].bind(n)
            }), n.$adPlayControl = n.find("#" + t.id + "-ad-play"), n.$adMuteControl = n.find("#" + t.id + "-ad-mute"), n.$adCountdown = n.find("#" + t.id + "-ad-countdown"), n.$adSkipContainer = n.find("#" + t.id + "-ad-skip-container"), n.$adSkipCountdown = n.find("#" + t.id + "-ad-skip-countdown"), n.$adSkipControl = n.find("#" + t.id + "-ad-skip"), n.$adSkipCountdown.hide(), n.$adSkipControl.hide(), n.on("resize", n._checkSizing), n.$adPlayControl.on("click", n._togglePause), n.$adMuteControl.on("click", n._toggleMute), n.$adSkipControl.on("click", n._skip), n.muted = !1, n.paused = !1, n._updateControls(), n
        }
        return a(e, t), r(e, null, [{
            key: "MODULE",
            get: function() {
                return c
            }
        }, {
            key: "EVENTS",
            get: function() {
                return d
            }
        }]), r(e, [{
            key: "_updateControls",
            value: function() {
                this.$adPlayControl.attr("src", this.paused ? f : h), this.$adMuteControl.attr("src", this.muted ? m : g)
            }
        }, {
            key: "_togglePause",
            value: function() {
                this.paused ? this.trigger(d.AD_BAR_PLAY) : this.trigger(d.AD_BAR_PAUSE)
            }
        }, {
            key: "_skip",
            value: function() {
                this.trigger(d.AD_BAR_SKIP)
            }
        }, {
            key: "_toggleMute",
            value: function() {
                this.trigger(d.AD_BAR_MUTE, {
                    muted: !this.muted
                })
            }
        }, {
            key: "_checkSizing",
            value: function() {
                this.settings.checkSizing && this.settings.checkSizing({
                    $adBar: this,
                    $adPlayControl: this.$adPlayControl,
                    $adMuteControl: this.$adMuteControl,
                    $adCountdown: this.$adCountdown,
                    $adSkipCountdown: this.$adSkipCountdown,
                    $adSkipControl: this.$adSkipControl
                })
            }
        }, {
            key: "adStart",
            value: function(t) {
                this.show(), this.paused = !1, this.muted = (0, l.get)(t, "detail.adMeta.muted"), this.$adSkipControl.hide(), this._updateControls(), this.trigger(d.AD_BAR_SHOW)
            }
        }, {
            key: "adTime",
            value: function(t) {
                var e = (0, l.extend)((0, u.pick)(this.settings, ["skipOffset", "skipThreshold"]), t.detail),
                    n = e.skipOffset + e.skipThreshold;
                this.$adCountdown.html(this.settings.adCountdownTemplate(e)), this.$adCountdown.show(), e.duration > n && (e.duration - e.remaining > e.skipOffset ? this.showSkip() : (this.$adSkipCountdown.html(this.settings.adSkipCountdownTemplate(e)), this.$adSkipCountdown.show())), this._checkSizing()
            }
        }, {
            key: "adPause",
            value: function(t) {
                this.paused = !0, this._updateControls()
            }
        }, {
            key: "adPlay",
            value: function(t) {
                this.paused = !1, this._updateControls()
            }
        }, {
            key: "adComplete",
            value: function(t) {
                this.hide(), this.trigger(d.AD_BAR_HIDE)
            }
        }, {
            key: "adMute",
            value: function(t) {
                this.muted = !!t.detail.muted, this._updateControls()
            }
        }, {
            key: "showSkip",
            value: function() {
                this.$adSkipCountdown.hide(), this.$adSkipControl.show()
            }
        }]), e
    }(s.PoWaPack)
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PoWaSellGoogimaHacks = void 0;
    var r = function t(e, n, i) {
            null === e && (e = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(e, n);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(e);
                return null === a ? void 0 : t(a, n, i)
            }
            if ("value" in o) return o.value;
            var r = o.get;
            if (void 0 !== r) return r.call(i)
        },
        s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        l = n(8),
        u = n(13),
        c = 1e3,
        d = "PoWaSellGoogimaHacks",
        p = {
            AD_COMPANIONS: "adCompanions",
            AD_COMPLETE: "adComplete",
            AD_CLICK: "adClick",
            AD_DESTROYED: "adDestroyed",
            AD_DURATION_CHANGE: "adDurationChange",
            AD_END: "adEnd",
            AD_ERROR: "adError",
            AD_FIRST_FRAME: "adFirstFrame",
            AD_LOADED: "adLoaded",
            AD_WAITING: "adWaiting",
            AD_MUTE: "adMute",
            AD_PAUSE: "adPause",
            AD_PLAY: "adPlay",
            AD_SETUP_ERROR: "adSetupError",
            AD_SKIP: "adSkip",
            AD_START: "adStart",
            AD_START_UNREPORTED: "adStartUnreported",
            AD_TIME: "adTime"
        },
        f = {
            adStartTimelimit: 3
        },
        h = new WeakMap;
    e.PoWaSellGoogimaHacks = function(t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, e);
            var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, (0, l.extend)({}, f, t), p));
            return ["_loadedHandler", "_pauseHandler", "_resumeHandler", "_timeCheck", "clearStatus"].map(function(t) {
                n[t] = n[t].bind(n)
            }), n
        }
        return a(e, t), s(e, null, [{
            key: "MODULE",
            get: function() {
                return d
            }
        }]), s(e, [{
            key: "_loadedHandler",
            value: function(t, n) {
                r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_loadedHandler", this).call(this, t, n);
                var i = h.get(this);
                i.adStarted = !1;
                var o = Date.now();
                i.shadowTimer = {
                    lastTime: o,
                    elapsed: 0,
                    start: o
                }
            }
        }, {
            key: "_pauseHandler",
            value: function(t) {
                var n = Date.now(),
                    i = h.get(this);
                i.shadowTimer.elapsed += (n - i.shadowTimer.lastTime) / c, i.shadowTimer.elapsed = Number(i.shadowTimer.elapsed.toFixed(3)), i.shadowTimer.lastTime = n, this.timing.remaining = this.timing.duration - i.shadowTimer.elapsed, this.timing.remaining = Number(this.timing.remaining.toFixed(3)), r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_pauseHandler", this).call(this, t)
            }
        }, {
            key: "_resumeHandler",
            value: function(t) {
                h.get(this).shadowTimer.lastTime = Date.now(), r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "_resumeHandler", this).call(this, t)
            }
        }, {
            key: "_timeCheck",
            value: function() {
                var t = Date.now(),
                    e = h.get(this);
                this.timing.lastRemaining = this.timing.remaining;
                var n = this.adsManager.getRemainingTime();
                if (n = "number" == typeof n ? Number(n.toFixed(3)) : -1, !e.adStarted) {
                    var i = (t - e.shadowTimer.start) / c;
                    n >= 0 && n !== this.timing.lastRemaining ? e.adStarted = !0 : i > this.settings.adStartTimelimit && (e.adStarted = !0, this.trigger(p.AD_START_UNREPORTED, {
                        type: p.AD_START_UNREPORTED,
                        elapsed: i
                    }))
                }
                if (n > this.timing.duration) {
                    var o = this.timing.duration;
                    this.timing.duration = n + e.shadowTimer.elapsed, this.trigger(p.AD_DURATION_CHANGE, {
                        type: p.AD_DURATION_CHANGE,
                        oldDuration: o,
                        duration: this.timing.duration
                    })
                }
                e.adStarted && this.state === u.PoWaSellGoogima.STATES.AD_PLAYING && (e.shadowTimer.elapsed += (t - e.shadowTimer.lastTime) / c, e.shadowTimer.elapsed = Number(e.shadowTimer.elapsed.toFixed(3)), e.shadowTimer.lastTime = t, this.timing.remaining = this.timing.duration - e.shadowTimer.elapsed, this.timing.remaining = Number(this.timing.remaining.toFixed(3)));
                var a = 1e3 * (this.timing.remaining % 1).toFixed(3);
                a = a > 100 ? a : 100, e.adStarted ? this.timing.remaining >= 0 && this.timing.remaining !== this.timing.lastRemaining && (this.timing.firstFrame && (this.timing.firstFrame = !1, this.trigger(p.AD_FIRST_FRAME, {
                    adMeta: this.adMeta,
                    type: p.AD_FIRST_FRAME
                })), this.trigger(p.AD_TIME, {
                    duration: this.timing.duration,
                    elapsed: e.shadowTimer.elapsed,
                    remaining: this.timing.remaining,
                    type: p.AD_TIME
                })) : this.state === u.PoWaSellGoogima.STATES.AD_PLAYING && (e.shadowTimer.lastTime = t), this.isRunning() && this.timing.remaining > 0 && (this.timing._timeCheckTO = setTimeout(this._timeCheck, a))
            }
        }, {
            key: "clearStatus",
            value: function() {
                r(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "clearStatus", this).call(this), h.set(this, {
                    adStarted: !1,
                    remainingTimeUnchanged: 0,
                    shadowTimer: {
                        lastTime: null,
                        elapsed: null,
                        start: null
                    }
                })
            }
        }]), e
    }(u.PoWaSellGoogima)
}, function(t, e, n) {
    "use strict";

    function i(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s(t) {
        var e = '<track src="' + (t.src || t.url || "") + '" label="' + (t.label || "English") + '" srclang="' + (t.srclang || "en") + '" kind="' + (t.kind || "subtitles") + '"></track>';
        return e.trim()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PoWaSub = void 0;
    var l = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                    i && t(e, i), e
            }
        }(),
        u = n(8),
        c = n(7),
        d = n(10),
        p = n(9),
        f = "PoWaSub",
        h = {
            SUBS_AVAILABLE: "subsAvailable",
            SUBS_UNAVAILABLE: "subsUnavailable",
            SUBS_ENABLED: "subsEnabled",
            SUBS_DISABLED: "subsDisabled",
            SUBS_DESTROYED: "subsDestroyed"
        },
        g = {
            debug: !1,
            subtitles: null,
            defaultLabel: "English",
            ready: function() {
                console.debug("[" + f + "] ready")
            },
            setupError: console.error
        },
        m = {};
    e.PoWaSub = function(t) {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o(this, e);
            var n = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, ""));
            return n.css(m), ["destroy", "setupHandlers", "firstFrame", "subsEmbedded", "subsSwitch", "subsLoaded", "stashSettings", "watchSettings", "getTextTracks", "createTracks", "load", "show", "hide", "getSubtitles", "showing", "getStatus", "on", "off", "once", "onceIf", "until", "trigger"].map(function(t) {
                return n[t] = n[t].bind(n)
            }), n.settings = (0, u.extend)({}, g, t), n.settings.label = n.settings.subtitles || (0, u.fetchLocal)("powaSubtitles", null), n.onOff = new d.PoWaOnPoWaOff, n.setupHandlers(), n.settings.ready(), n
        }
        return r(e, t), l(e, null, [{
            key: "MODULE",
            get: function() {
                return f
            }
        }, {
            key: "EVENTS",
            get: function() {
                return h
            }
        }]), l(e, [{
            key: "destroy",
            value: function() {
                this.settings.onOff.off(this.settings.externalEvents.FIRST_FRAME, this.firstFrame), this.raf && (cancelAnimationFrame(this.raf), this.raf = null), this.detach(), this.trigger(h.SUBS_DESTROYED, this)
            }
        }, {
            key: "setupHandlers",
            value: function() {
                this.ignoreSubSwitch = !0, this.settings.onOff.on(this.settings.externalEvents.FIRST_FRAME, this.firstFrame)
            }
        }, {
            key: "firstFrame",
            value: function() {
                var t = this;
                if (this.initialState = !0, this.mediaStarted = !0, (0, u.get)(this, "embeddedTracks.length")) this.show(this.settings.label), this.trigger(h.SUBS_AVAILABLE, this.getSubtitles());
                else if (this.getTextTracks().length) this.show(this.settings.label), this.watchSettings(), this.trigger(h.SUBS_AVAILABLE, this.getSubtitles());
                else {
                    var e = this.createTracks(this.settings.tracks);
                    e.length ? (this.load(e), this.trigger(h.SUBS_AVAILABLE, this.getSubtitles()), requestAnimationFrame(function() {
                        t.show(t.settings.label), t.watchSettings()
                    })) : this.trigger(h.SUBS_UNAVAILABLE)
                }
            }
        }, {
            key: "subsEmbedded",
            value: function(t, e) {
                this.hls = t, this.embeddedTracks = e
            }
        }, {
            key: "subsSwitch",
            value: function(t) {
                this.mediaStarted && this.stashSettings((0, u.get)(this, "embeddedTracks[" + t + "].name", null))
            }
        }, {
            key: "subsLoaded",
            value: function(t) {
                this.mediaStarted || (this.hls.subtitleTrack = -1)
            }
        }, {
            key: "stashSettings",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    e = !1;
                if (t !== this.settings.label) {
                    var n = this.getSubtitles(),
                        i = n.includes(t),
                        o = n.includes(this.settings.label);
                    (i || null === t && o) && ((0, u.stashLocal)("powaSubtitles", t), this.settings.label = t, e = !0)
                }(this.initialState || e) && (this.initialState = !1, this.settings.label ? this.trigger(h.SUBS_ENABLED, this.settings.label) : this.trigger(h.SUBS_DISABLED))
            }
        }, {
            key: "watchSettings",
            value: function() {
                this.settings.stashSubtitles && (this.stashSettings(this.showing()), this.raf = requestAnimationFrame(this.watchSettings))
            }
        }, {
            key: "getTextTracks",
            value: function() {
                var t = this.settings.$player.elements[0],
                    e = t.textTracks ? [].concat(i(t.textTracks)) : [];
                return e.filter(function(t) {
                    return t.label && t.language
                })
            }
        }, {
            key: "createTracks",
            value: function() {
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return (0, p.chain)(this.settings.tracks).filter(function(t) {
                    return "WEB_VTT" === t.format
                }).map(s).value()
            }
        }, {
            key: "load",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                (0, u.isObject)(this.settings.track) ? t.push(s(this.settings.track)): "string" == typeof this.settings.track && t.push(s({
                    src: this.settings.track
                })), (0, p.forEach)(t, this.add), this.settings.$player.append(this)
            }
        }, {
            key: "show",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSubtitles()[0] || null;
                if (this.hls && (0, u.get)(this, "embeddedTracks.length")) {
                    var e = this.embeddedTracks.reduce(function(e, n) {
                        return n.name === t ? n.id : e
                    }, -1);
                    this.hls.subtitleTrack = e
                } else this.getTextTracks().forEach(function(e) {
                    return e.mode = e.label === t ? "showing" : "disabled"
                })
            }
        }, {
            key: "hide",
            value: function() {
                this.hls && (0, u.get)(this, "embeddedTracks.length") ? this.hls.subtitleTrack = -1 : this.getTextTracks().forEach(function(t) {
                    return t.mode = "disabled"
                })
            }
        }, {
            key: "getSubtitles",
            value: function() {
                var t = this.getTextTracks();
                return t.length ? t.map(function(t) {
                    return t.label
                }) : (0, u.get)(this, "embeddedTracks.length") ? this.embeddedTracks.map(function(t) {
                    return t.name
                }) : this.map(function(t) {
                    return t.label
                })
            }
        }, {
            key: "showing",
            value: function() {
                var t = this.getTextTracks();
                return t.length ? t.reduce(function(t, e) {
                    return "showing" === e.mode ? e.label : t
                }, null) : void 0
            }
        }, {
            key: "getStatus",
            value: function() {
                return {
                    subtitles: this.getSubtitles(),
                    showing: this.showing()
                }
            }
        }, {
            key: "on",
            value: function(t, e, n) {
                this.onOff.on(t, e)
            }
        }, {
            key: "off",
            value: function(t, e) {
                this.onOff.off(t, e)
            }
        }, {
            key: "once",
            value: function(t, e, n) {
                this.onOff.once(t, e)
            }
        }, {
            key: "onceIf",
            value: function(t, e, n, i) {
                this.onOff.onceIf(t, e, n)
            }
        }, {
            key: "until",
            value: function(t, e, n, i) {
                this.onOff.until(t, e, n)
            }
        }, {
            key: "trigger",
            value: function(t, e) {
                this.onOff.trigger(t, e)
            }
        }]), e
    }(c.PoWaPack)
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
    }

    function o(t, e) {
        t.classList ? t.classList.add(e) : i(t, e) || (t.className += " " + e)
    }

    function a(t, e) {
        t.forEach(function(t, n) {
            if (!i(t, u.PROCESSED)) {
                o(t, u.PROCESSED), e && t.setAttribute("data-autorun", !0);
                var a = window.PoWaSettings.decorator || r.noop;
                Promise.resolve(a(t, n)).then(function() {
                    new l.PoWaDriveWapo(t)
                })
            }
        })
    }
    n(19);
    var r = n(8),
        s = n(9),
        l = n(126);
    n(137), window.PoWaSettings = window.PoWaSettings || {};
    var u = {
            PLAYER_CONTAINER: "powa",
            PROCESSED: "powa-processed"
        },
        c = (0, s.map)(u, function(t) {
            return "." + t
        });
    window.powaBoot = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (window.PoWaSettings.videoSupport = window.PoWaSettings.videoSupport || (0, r.getVideoSupport)(), window.PoWaSettings.videoSupport) {
            var e = document.querySelectorAll(c.PLAYER_CONTAINER);
            e = Array.prototype.slice.call(e), e = e.filter(function(t) {
                return !i(t, u.PROCESSED)
            }), e = e.filter(function(t) {
                return "1" !== t.getAttribute("data-skip-processing")
            }), e.length ? window.PoWa ? a(e, t) : (0, r.loadScript)("https://cdn.polyfill.io/v2/polyfill.min.js?features=es6,Array.prototype.includes", function() {
                a(e, t)
            }, console.error) : console.warn("No '" + c.PLAYER_CONTAINER + "' elements found")
        } else console.warn("Browser does not support HTML5 video!")
    }, window.powaBoot(!0), "pwa" === window.wp_site && (window.postTvProcessEmbeds = function() {
        function t() {
            var t = document.querySelectorAll(".wpv-player, .posttv-video-embed, .posttv-player-video");
            Array.prototype.forEach.call(t, function(t, e) {
                t.classList.add("powa"), t.setAttribute("data-org", "wapo"), t.setAttribute("data-ad-bar", "true"), "1" === t.getAttribute("data-show-endscreen") && t.setAttribute("data-playthrough", "true"), "1" === t.getAttribute("data-show-caption") && t.setAttribute("data-blurb", "1")
            })
        }
        t(), "function" == typeof window.powaBoot && window.powaBoot()
    }, window.postTvProcessEmbeds(), window.__e = window.__e || [], window.wp_pb && window.wp_pb.StaticMethods && window.wp_pb.StaticMethods.isPageHydrated && window.wp_pb.StaticMethods.isPageHydrated() && window.powaBoot(), window.__e.push(["shamble", function() {
        window.powaBoot()
    }]))
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    n(20), n(90), n(99), n(102), n(104), n(106), n(108), n(111), n(113), n(118), n(120);
    var o = n(122),
        a = i(o);
    "Promise" in window || (window.Promise = a.default),
        function() {
            function t(t, e) {
                e = e || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
            }
            return "function" != typeof window.CustomEvent && (t.prototype = window.Event.prototype, void(window.CustomEvent = t))
        }(), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
            var e = this;
            if (!document.documentElement.contains(e)) return null;
            do {
                if (e.matches(t)) return e;
                e = e.parentElement || e.parentNode
            } while (null !== e && 1 === e.nodeType);
            return null
        })
}, function(t, e, n) {
    n(21), n(41), n(69), t.exports = n(40).WeakMap
}, function(t, e, n) {
    "use strict";
    var i = n(22),
        o = {};
    o[n(24)("toStringTag")] = "z", o + "" != "[object z]" && n(28)(Object.prototype, "toString", function() {
        return "[object " + i(this) + "]"
    }, !0)
}, function(t, e, n) {
    var i = n(23),
        o = n(24)("toStringTag"),
        a = "Arguments" == i(function() {
            return arguments
        }()),
        r = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        };
    t.exports = function(t) {
        var e, n, s;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = r(e = Object(t), o)) ? n : a ? i(e) : "Object" == (s = i(e)) && "function" == typeof e.callee ? "Arguments" : s
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e, n) {
    var i = n(25)("wks"),
        o = n(27),
        a = n(26).Symbol,
        r = "function" == typeof a,
        s = t.exports = function(t) {
            return i[t] || (i[t] = r && a[t] || (r ? a : o)("Symbol." + t))
        };
    s.store = i
}, function(t, e, n) {
    var i = n(26),
        o = "__core-js_shared__",
        a = i[o] || (i[o] = {});
    t.exports = function(t) {
        return a[t] || (a[t] = {})
    }
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e) {
    var n = 0,
        i = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
    }
}, function(t, e, n) {
    var i = n(26),
        o = n(29),
        a = n(39),
        r = n(27)("src"),
        s = "toString",
        l = Function[s],
        u = ("" + l).split(s);
    n(40).inspectSource = function(t) {
        return l.call(t)
    }, (t.exports = function(t, e, n, s) {
        var l = "function" == typeof n;
        l && (a(n, "name") || o(n, "name", e)), t[e] !== n && (l && (a(n, r) || o(n, r, t[e] ? "" + t[e] : u.join(String(e)))), t === i ? t[e] = n : s ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
    })(Function.prototype, s, function() {
        return "function" == typeof this && this[r] || l.call(this)
    })
}, function(t, e, n) {
    var i = n(30),
        o = n(38);
    t.exports = n(34) ? function(t, e, n) {
        return i.f(t, e, o(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var i = n(31),
        o = n(33),
        a = n(37),
        r = Object.defineProperty;
    e.f = n(34) ? Object.defineProperty : function(t, e, n) {
        if (i(t), e = a(e, !0), i(n), o) try {
            return r(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var i = n(32);
    t.exports = function(t) {
        if (!i(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    t.exports = !n(34) && !n(35)(function() {
        return 7 != Object.defineProperty(n(36)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    t.exports = !n(35)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var i = n(32),
        o = n(26).document,
        a = i(o) && i(o.createElement);
    t.exports = function(t) {
        return a ? o.createElement(t) : {}
    }
}, function(t, e, n) {
    var i = n(32);
    t.exports = function(t, e) {
        if (!i(t)) return t;
        var n, o;
        if (e && "function" == typeof(n = t.toString) && !i(o = n.call(t))) return o;
        if ("function" == typeof(n = t.valueOf) && !i(o = n.call(t))) return o;
        if (!e && "function" == typeof(n = t.toString) && !i(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e) {
    var n = t.exports = {
        version: "2.4.0"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e, n) {
    for (var i = n(42), o = n(28), a = n(26), r = n(29), s = n(45), l = n(24), u = l("iterator"), c = l("toStringTag"), d = s.Array, p = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], f = 0; f < 5; f++) {
        var h, g = p[f],
            m = a[g],
            v = m && m.prototype;
        if (v) {
            v[u] || r(v, u, d), v[c] || r(v, c, g), s[g] = d;
            for (h in i) v[h] || o(v, h, i[h], !0)
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(43),
        o = n(44),
        a = n(45),
        r = n(46);
    t.exports = n(49)(Array, "Array", function(t, e) {
        this._t = r(t), this._i = 0, this._k = e
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]])
    }, "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
}, function(t, e, n) {
    var i = n(24)("unscopables"),
        o = Array.prototype;
    void 0 == o[i] && n(29)(o, i, {}), t.exports = function(t) {
        o[i][t] = !0
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var i = n(47),
        o = n(48);
    t.exports = function(t) {
        return i(o(t))
    }
}, function(t, e, n) {
    var i = n(23);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == i(t) ? t.split("") : Object(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    "use strict";
    var i = n(50),
        o = n(51),
        a = n(28),
        r = n(29),
        s = n(39),
        l = n(45),
        u = n(54),
        c = n(66),
        d = n(67),
        p = n(24)("iterator"),
        f = !([].keys && "next" in [].keys()),
        h = "@@iterator",
        g = "keys",
        m = "values",
        v = function() {
            return this
        };
    t.exports = function(t, e, n, w, y, b, _) {
        u(n, e, w);
        var A, S, E, k = function(t) {
                if (!f && t in D) return D[t];
                switch (t) {
                    case g:
                        return function() {
                            return new n(this, t)
                        };
                    case m:
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            T = e + " Iterator",
            P = y == m,
            x = !1,
            D = t.prototype,
            O = D[p] || D[h] || y && D[y],
            C = O || k(y),
            I = y ? P ? k("entries") : C : void 0,
            M = "Array" == e ? D.entries || O : O;
        if (M && (E = d(M.call(new t)), E !== Object.prototype && (c(E, T, !0), i || s(E, p) || r(E, p, v))), P && O && O.name !== m && (x = !0, C = function() {
                return O.call(this)
            }), i && !_ || !f && !x && D[p] || r(D, p, C), l[e] = C, l[T] = v, y)
            if (A = {
                    values: P ? C : k(m),
                    keys: b ? C : k(g),
                    entries: I
                }, _)
                for (S in A) S in D || a(D, S, A[S]);
            else o(o.P + o.F * (f || x), e, A);
        return A
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var i = n(26),
        o = n(40),
        a = n(29),
        r = n(28),
        s = n(52),
        l = "prototype",
        u = function(t, e, n) {
            var c, d, p, f, h = t & u.F,
                g = t & u.G,
                m = t & u.S,
                v = t & u.P,
                w = t & u.B,
                y = g ? i : m ? i[e] || (i[e] = {}) : (i[e] || {})[l],
                b = g ? o : o[e] || (o[e] = {}),
                _ = b[l] || (b[l] = {});
            g && (n = e);
            for (c in n) d = !h && y && void 0 !== y[c], p = (d ? y : n)[c], f = w && d ? s(p, i) : v && "function" == typeof p ? s(Function.call, p) : p, y && r(y, c, p, t & u.U), b[c] != p && a(b, c, f), v && _[c] != p && (_[c] = p)
        };
    i.core = o, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function(t, e, n) {
    var i = n(53);
    t.exports = function(t, e, n) {
        if (i(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function(n, i, o) {
                    return t.call(e, n, i, o)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e, n) {
    "use strict";
    var i = n(55),
        o = n(38),
        a = n(66),
        r = {};
    n(29)(r, n(24)("iterator"), function() {
        return this
    }), t.exports = function(t, e, n) {
        t.prototype = i(r, {
            next: o(1, n)
        }), a(t, e + " Iterator")
    }
}, function(t, e, n) {
    var i = n(31),
        o = n(56),
        a = n(64),
        r = n(63)("IE_PROTO"),
        s = function() {},
        l = "prototype",
        u = function() {
            var t, e = n(36)("iframe"),
                i = a.length,
                o = "<",
                r = ">";
            for (e.style.display = "none", n(65).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(o + "script" + r + "document.F=Object" + o + "/script" + r), t.close(), u = t.F; i--;) delete u[l][a[i]];
            return u()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (s[l] = i(t), n = new s, s[l] = null, n[r] = t) : n = u(), void 0 === e ? n : o(n, e)
    }
}, function(t, e, n) {
    var i = n(30),
        o = n(31),
        a = n(57);
    t.exports = n(34) ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, r = a(e), s = r.length, l = 0; s > l;) i.f(t, n = r[l++], e[n]);
        return t
    }
}, function(t, e, n) {
    var i = n(58),
        o = n(64);
    t.exports = Object.keys || function(t) {
        return i(t, o)
    }
}, function(t, e, n) {
    var i = n(39),
        o = n(46),
        a = n(59)(!1),
        r = n(63)("IE_PROTO");
    t.exports = function(t, e) {
        var n, s = o(t),
            l = 0,
            u = [];
        for (n in s) n != r && i(s, n) && u.push(n);
        for (; e.length > l;) i(s, n = e[l++]) && (~a(u, n) || u.push(n));
        return u
    }
}, function(t, e, n) {
    var i = n(46),
        o = n(60),
        a = n(62);
    t.exports = function(t) {
        return function(e, n, r) {
            var s, l = i(e),
                u = o(l.length),
                c = a(r, u);
            if (t && n != n) {
                for (; u > c;)
                    if (s = l[c++], s != s) return !0
            } else
                for (; u > c; c++)
                    if ((t || c in l) && l[c] === n) return t || c || 0;
            return !t && -1
        }
    }
}, function(t, e, n) {
    var i = n(61),
        o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(i(t), 9007199254740991) : 0
    }
}, function(t, e) {
    var n = Math.ceil,
        i = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
    }
}, function(t, e, n) {
    var i = n(61),
        o = Math.max,
        a = Math.min;
    t.exports = function(t, e) {
        return t = i(t), t < 0 ? o(t + e, 0) : a(t, e)
    }
}, function(t, e, n) {
    var i = n(25)("keys"),
        o = n(27);
    t.exports = function(t) {
        return i[t] || (i[t] = o(t))
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
    t.exports = n(26).document && document.documentElement
}, function(t, e, n) {
    var i = n(30).f,
        o = n(39),
        a = n(24)("toStringTag");
    t.exports = function(t, e, n) {
        t && !o(t = n ? t : t.prototype, a) && i(t, a, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    var i = n(39),
        o = n(68),
        a = n(63)("IE_PROTO"),
        r = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = o(t), i(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? r : null
    }
}, function(t, e, n) {
    var i = n(48);
    t.exports = function(t) {
        return Object(i(t))
    }
}, function(t, e, n) {
    "use strict";
    var i, o = n(70)(0),
        a = n(28),
        r = n(74),
        s = n(75),
        l = n(78),
        u = n(32),
        c = r.getWeak,
        d = Object.isExtensible,
        p = l.ufstore,
        f = {},
        h = function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        },
        g = {
            get: function(t) {
                if (u(t)) {
                    var e = c(t);
                    return e === !0 ? p(this).get(t) : e ? e[this._i] : void 0
                }
            },
            set: function(t, e) {
                return l.def(this, t, e)
            }
        },
        m = t.exports = n(85)("WeakMap", h, g, l, !0, !0);
    7 != (new m).set((Object.freeze || Object)(f), 7).get(f) && (i = l.getConstructor(h), s(i.prototype, g), r.NEED = !0, o(["delete", "has", "get", "set"], function(t) {
        var e = m.prototype,
            n = e[t];
        a(e, t, function(e, o) {
            if (u(e) && !d(e)) {
                this._f || (this._f = new i);
                var a = this._f[t](e, o);
                return "set" == t ? this : a
            }
            return n.call(this, e, o)
        })
    }))
}, function(t, e, n) {
    var i = n(52),
        o = n(47),
        a = n(68),
        r = n(60),
        s = n(71);
    t.exports = function(t, e) {
        var n = 1 == t,
            l = 2 == t,
            u = 3 == t,
            c = 4 == t,
            d = 6 == t,
            p = 5 == t || d,
            f = e || s;
        return function(e, s, h) {
            for (var g, m, v = a(e), w = o(v), y = i(s, h, 3), b = r(w.length), _ = 0, A = n ? f(e, b) : l ? f(e, 0) : void 0; b > _; _++)
                if ((p || _ in w) && (g = w[_], m = y(g, _, v), t))
                    if (n) A[_] = m;
                    else if (m) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return g;
                case 6:
                    return _;
                case 2:
                    A.push(g)
            } else if (c) return !1;
            return d ? -1 : u || c ? c : A
        }
    }
}, function(t, e, n) {
    var i = n(72);
    t.exports = function(t, e) {
        return new(i(t))(e)
    }
}, function(t, e, n) {
    var i = n(32),
        o = n(73),
        a = n(24)("species");
    t.exports = function(t) {
        var e;
        return o(t) && (e = t.constructor, "function" != typeof e || e !== Array && !o(e.prototype) || (e = void 0), i(e) && (e = e[a], null === e && (e = void 0))), void 0 === e ? Array : e
    }
}, function(t, e, n) {
    var i = n(23);
    t.exports = Array.isArray || function(t) {
        return "Array" == i(t)
    }
}, function(t, e, n) {
    var i = n(27)("meta"),
        o = n(32),
        a = n(39),
        r = n(30).f,
        s = 0,
        l = Object.isExtensible || function() {
            return !0
        },
        u = !n(35)(function() {
            return l(Object.preventExtensions({}))
        }),
        c = function(t) {
            r(t, i, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        d = function(t, e) {
            if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!a(t, i)) {
                if (!l(t)) return "F";
                if (!e) return "E";
                c(t)
            }
            return t[i].i
        },
        p = function(t, e) {
            if (!a(t, i)) {
                if (!l(t)) return !0;
                if (!e) return !1;
                c(t)
            }
            return t[i].w
        },
        f = function(t) {
            return u && h.NEED && l(t) && !a(t, i) && c(t), t
        },
        h = t.exports = {
            KEY: i,
            NEED: !1,
            fastKey: d,
            getWeak: p,
            onFreeze: f
        }
}, function(t, e, n) {
    "use strict";
    var i = n(57),
        o = n(76),
        a = n(77),
        r = n(68),
        s = n(47),
        l = Object.assign;
    t.exports = !l || n(35)(function() {
        var t = {},
            e = {},
            n = Symbol(),
            i = "abcdefghijklmnopqrst";
        return t[n] = 7, i.split("").forEach(function(t) {
            e[t] = t
        }), 7 != l({}, t)[n] || Object.keys(l({}, e)).join("") != i
    }) ? function(t, e) {
        for (var n = r(t), l = arguments.length, u = 1, c = o.f, d = a.f; l > u;)
            for (var p, f = s(arguments[u++]), h = c ? i(f).concat(c(f)) : i(f), g = h.length, m = 0; g > m;) d.call(f, p = h[m++]) && (n[p] = f[p]);
        return n
    } : l
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    "use strict";
    var i = n(79),
        o = n(74).getWeak,
        a = n(31),
        r = n(32),
        s = n(80),
        l = n(81),
        u = n(70),
        c = n(39),
        d = u(5),
        p = u(6),
        f = 0,
        h = function(t) {
            return t._l || (t._l = new g)
        },
        g = function() {
            this.a = []
        },
        m = function(t, e) {
            return d(t.a, function(t) {
                return t[0] === e
            })
        };
    g.prototype = {
        get: function(t) {
            var e = m(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!m(this, t)
        },
        set: function(t, e) {
            var n = m(this, t);
            n ? n[1] = e : this.a.push([t, e])
        },
        delete: function(t) {
            var e = p(this.a, function(e) {
                return e[0] === t
            });
            return ~e && this.a.splice(e, 1), !!~e
        }
    }, t.exports = {
        getConstructor: function(t, e, n, a) {
            var u = t(function(t, i) {
                s(t, u, e, "_i"), t._i = f++, t._l = void 0, void 0 != i && l(i, n, t[a], t)
            });
            return i(u.prototype, {
                delete: function(t) {
                    if (!r(t)) return !1;
                    var e = o(t);
                    return e === !0 ? h(this).delete(t) : e && c(e, this._i) && delete e[this._i]
                },
                has: function(t) {
                    if (!r(t)) return !1;
                    var e = o(t);
                    return e === !0 ? h(this).has(t) : e && c(e, this._i)
                }
            }), u
        },
        def: function(t, e, n) {
            var i = o(a(e), !0);
            return i === !0 ? h(t).set(e, n) : i[t._i] = n, t
        },
        ufstore: h
    }
}, function(t, e, n) {
    var i = n(28);
    t.exports = function(t, e, n) {
        for (var o in e) i(t, o, e[o], n);
        return t
    }
}, function(t, e) {
    t.exports = function(t, e, n, i) {
        if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e, n) {
    var i = n(52),
        o = n(82),
        a = n(83),
        r = n(31),
        s = n(60),
        l = n(84),
        u = {},
        c = {},
        e = t.exports = function(t, e, n, d, p) {
            var f, h, g, m, v = p ? function() {
                    return t
                } : l(t),
                w = i(n, d, e ? 2 : 1),
                y = 0;
            if ("function" != typeof v) throw TypeError(t + " is not iterable!");
            if (a(v)) {
                for (f = s(t.length); f > y; y++)
                    if (m = e ? w(r(h = t[y])[0], h[1]) : w(t[y]), m === u || m === c) return m
            } else
                for (g = v.call(t); !(h = g.next()).done;)
                    if (m = o(g, w, h.value, e), m === u || m === c) return m
        };
    e.BREAK = u, e.RETURN = c
}, function(t, e, n) {
    var i = n(31);
    t.exports = function(t, e, n, o) {
        try {
            return o ? e(i(n)[0], n[1]) : e(n)
        } catch (e) {
            var a = t.return;
            throw void 0 !== a && i(a.call(t)), e
        }
    }
}, function(t, e, n) {
    var i = n(45),
        o = n(24)("iterator"),
        a = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (i.Array === t || a[o] === t)
    }
}, function(t, e, n) {
    var i = n(22),
        o = n(24)("iterator"),
        a = n(45);
    t.exports = n(40).getIteratorMethod = function(t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || a[i(t)]
    }
}, function(t, e, n) {
    "use strict";
    var i = n(26),
        o = n(51),
        a = n(28),
        r = n(79),
        s = n(74),
        l = n(81),
        u = n(80),
        c = n(32),
        d = n(35),
        p = n(86),
        f = n(66),
        h = n(87);
    t.exports = function(t, e, n, g, m, v) {
        var w = i[t],
            y = w,
            b = m ? "set" : "add",
            _ = y && y.prototype,
            A = {},
            S = function(t) {
                var e = _[t];
                a(_, t, "delete" == t ? function(t) {
                    return !(v && !c(t)) && e.call(this, 0 === t ? 0 : t)
                } : "has" == t ? function(t) {
                    return !(v && !c(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function(t) {
                    return v && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                } : "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t), this
                } : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this
                })
            };
        if ("function" == typeof y && (v || _.forEach && !d(function() {
                (new y).entries().next()
            }))) {
            var E = new y,
                k = E[b](v ? {} : -0, 1) != E,
                T = d(function() {
                    E.has(1)
                }),
                P = p(function(t) {
                    new y(t)
                }),
                x = !v && d(function() {
                    for (var t = new y, e = 5; e--;) t[b](e, e);
                    return !t.has(-0)
                });
            P || (y = e(function(e, n) {
                u(e, y, t);
                var i = h(new w, e, y);
                return void 0 != n && l(n, m, i[b], i), i
            }), y.prototype = _, _.constructor = y), (T || x) && (S("delete"), S("has"), m && S("get")), (x || k) && S(b), v && _.clear && delete _.clear
        } else y = g.getConstructor(e, t, m, b), r(y.prototype, n), s.NEED = !0;
        return f(y, t), A[t] = y, o(o.G + o.W + o.F * (y != w), A), v || g.setStrong(y, t, m), y
    }
}, function(t, e, n) {
    var i = n(24)("iterator"),
        o = !1;
    try {
        var a = [7][i]();
        a.return = function() {
            o = !0
        }, Array.from(a, function() {
            throw 2
        })
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !o) return !1;
        var n = !1;
        try {
            var a = [7],
                r = a[i]();
            r.next = function() {
                return {
                    done: n = !0
                }
            }, a[i] = function() {
                return r
            }, t(a)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    var i = n(32),
        o = n(88).set;
    t.exports = function(t, e, n) {
        var a, r = e.constructor;
        return r !== n && "function" == typeof r && (a = r.prototype) !== n.prototype && i(a) && o && o(t, a), t
    }
}, function(t, e, n) {
    var i = n(32),
        o = n(31),
        a = function(t, e) {
            if (o(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {
            try {
                i = n(52)(Function.call, n(89).f(Object.prototype, "__proto__").set, 2), i(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return a(t, n), e ? t.__proto__ = n : i(t, n), t
            }
        }({}, !1) : void 0),
        check: a
    }
}, function(t, e, n) {
    var i = n(77),
        o = n(38),
        a = n(46),
        r = n(37),
        s = n(39),
        l = n(33),
        u = Object.getOwnPropertyDescriptor;
    e.f = n(34) ? u : function(t, e) {
        if (t = a(t), e = r(e, !0), l) try {
            return u(t, e)
        } catch (t) {}
        if (s(t, e)) return o(!i.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    n(21), n(91), n(41), n(93), n(96), t.exports = n(40).Set
}, function(t, e, n) {
    "use strict";
    var i = n(92)(!0);
    n(49)(String, "String", function(t) {
        this._t = String(t), this._i = 0
    }, function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = i(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    })
}, function(t, e, n) {
    var i = n(61),
        o = n(48);
    t.exports = function(t) {
        return function(e, n) {
            var a, r, s = String(o(e)),
                l = i(n),
                u = s.length;
            return l < 0 || l >= u ? t ? "" : void 0 : (a = s.charCodeAt(l), a < 55296 || a > 56319 || l + 1 === u || (r = s.charCodeAt(l + 1)) < 56320 || r > 57343 ? t ? s.charAt(l) : a : t ? s.slice(l, l + 2) : (a - 55296 << 10) + (r - 56320) + 65536)
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(94);
    t.exports = n(85)("Set", function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(t) {
            return i.def(this, t = 0 === t ? 0 : t, t)
        }
    }, i)
}, function(t, e, n) {
    "use strict";
    var i = n(30).f,
        o = n(55),
        a = n(79),
        r = n(52),
        s = n(80),
        l = n(48),
        u = n(81),
        c = n(49),
        d = n(44),
        p = n(95),
        f = n(34),
        h = n(74).fastKey,
        g = f ? "_s" : "size",
        m = function(t, e) {
            var n, i = h(e);
            if ("F" !== i) return t._i[i];
            for (n = t._f; n; n = n.n)
                if (n.k == e) return n
        };
    t.exports = {
        getConstructor: function(t, e, n, c) {
            var d = t(function(t, i) {
                s(t, d, e, "_i"), t._i = o(null), t._f = void 0, t._l = void 0, t[g] = 0, void 0 != i && u(i, n, t[c], t)
            });
            return a(d.prototype, {
                clear: function() {
                    for (var t = this, e = t._i, n = t._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete e[n.i];
                    t._f = t._l = void 0, t[g] = 0
                },
                delete: function(t) {
                    var e = this,
                        n = m(e, t);
                    if (n) {
                        var i = n.n,
                            o = n.p;
                        delete e._i[n.i], n.r = !0, o && (o.n = i), i && (i.p = o), e._f == n && (e._f = i), e._l == n && (e._l = o), e[g]--
                    }
                    return !!n
                },
                forEach: function(t) {
                    s(this, d, "forEach");
                    for (var e, n = r(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f;)
                        for (n(e.v, e.k, this); e && e.r;) e = e.p
                },
                has: function(t) {
                    return !!m(this, t)
                }
            }), f && i(d.prototype, "size", {
                get: function() {
                    return l(this[g])
                }
            }), d
        },
        def: function(t, e, n) {
            var i, o, a = m(t, e);
            return a ? a.v = n : (t._l = a = {
                i: o = h(e, !0),
                k: e,
                v: n,
                p: i = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = a), i && (i.n = a), t[g]++, "F" !== o && (t._i[o] = a)), t
        },
        getEntry: m,
        setStrong: function(t, e, n) {
            c(t, e, function(t, e) {
                this._t = t, this._k = e, this._l = void 0
            }, function() {
                for (var t = this, e = t._k, n = t._l; n && n.r;) n = n.p;
                return t._t && (t._l = n = n ? n.n : t._t._f) ? "keys" == e ? d(0, n.k) : "values" == e ? d(0, n.v) : d(0, [n.k, n.v]) : (t._t = void 0, d(1))
            }, n ? "entries" : "values", !n, !0), p(e)
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(26),
        o = n(30),
        a = n(34),
        r = n(24)("species");
    t.exports = function(t) {
        var e = i[t];
        a && e && !e[r] && o.f(e, r, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e, n) {
    var i = n(51);
    i(i.P + i.R, "Set", {
        toJSON: n(97)("Set")
    })
}, function(t, e, n) {
    var i = n(22),
        o = n(98);
    t.exports = function(t) {
        return function() {
            if (i(this) != t) throw TypeError(t + "#toJSON isn't generic");
            return o(this)
        }
    }
}, function(t, e, n) {
    var i = n(81);
    t.exports = function(t, e) {
        var n = [];
        return i(t, !1, n.push, n, e), n
    }
}, function(t, e, n) {
    n(21), n(91), n(41), n(100), n(101), t.exports = n(40).Map
}, function(t, e, n) {
    "use strict";
    var i = n(94);
    t.exports = n(85)("Map", function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function(t) {
            var e = i.getEntry(this, t);
            return e && e.v
        },
        set: function(t, e) {
            return i.def(this, 0 === t ? 0 : t, e)
        }
    }, i, !0)
}, function(t, e, n) {
    var i = n(51);
    i(i.P + i.R, "Map", {
        toJSON: n(97)("Map")
    })
}, function(t, e, n) {
    n(103), t.exports = n(40).Array.includes
}, function(t, e, n) {
    "use strict";
    var i = n(51),
        o = n(59)(!0);
    i(i.P, "Array", {
        includes: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(43)("includes")
}, function(t, e, n) {
    n(105), t.exports = n(40).Array.find
}, function(t, e, n) {
    "use strict";
    var i = n(51),
        o = n(70)(5),
        a = "find",
        r = !0;
    a in [] && Array(1)[a](function() {
        r = !1
    }), i(i.P + i.F * r, "Array", {
        find: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(43)(a)
}, function(t, e, n) {
    n(107), t.exports = n(40).Array.findIndex
}, function(t, e, n) {
    "use strict";
    var i = n(51),
        o = n(70)(6),
        a = "findIndex",
        r = !0;
    a in [] && Array(1)[a](function() {
        r = !1
    }), i(i.P + i.F * r, "Array", {
        findIndex: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(43)(a)
}, function(t, e, n) {
    n(91), n(109), t.exports = n(40).Array.from
}, function(t, e, n) {
    "use strict";
    var i = n(52),
        o = n(51),
        a = n(68),
        r = n(82),
        s = n(83),
        l = n(60),
        u = n(110),
        c = n(84);
    o(o.S + o.F * !n(86)(function(t) {
        Array.from(t)
    }), "Array", {
        from: function(t) {
            var e, n, o, d, p = a(t),
                f = "function" == typeof this ? this : Array,
                h = arguments.length,
                g = h > 1 ? arguments[1] : void 0,
                m = void 0 !== g,
                v = 0,
                w = c(p);
            if (m && (g = i(g, h > 2 ? arguments[2] : void 0, 2)), void 0 == w || f == Array && s(w))
                for (e = l(p.length), n = new f(e); e > v; v++) u(n, v, m ? g(p[v], v) : p[v]);
            else
                for (d = w.call(p), n = new f; !(o = d.next()).done; v++) u(n, v, m ? r(d, g, [o.value, v], !0) : o.value);
            return n.length = v, n
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(30),
        o = n(38);
    t.exports = function(t, e, n) {
        e in t ? i.f(t, e, o(0, n)) : t[e] = n
    }
}, function(t, e, n) {
    n(112), t.exports = n(40).Object.assign
}, function(t, e, n) {
    var i = n(51);
    i(i.S + i.F, "Object", {
        assign: n(75)
    })
}, function(t, e, n) {
    n(114), t.exports = n(40).String.includes
}, function(t, e, n) {
    "use strict";
    var i = n(51),
        o = n(115),
        a = "includes";
    i(i.P + i.F * n(117)(a), "String", {
        includes: function(t) {
            return !!~o(this, t, a).indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, n) {
    var i = n(116),
        o = n(48);
    t.exports = function(t, e, n) {
        if (i(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(o(t))
    }
}, function(t, e, n) {
    var i = n(32),
        o = n(23),
        a = n(24)("match");
    t.exports = function(t) {
        var e;
        return i(t) && (void 0 !== (e = t[a]) ? !!e : "RegExp" == o(t))
    }
}, function(t, e, n) {
    var i = n(24)("match");
    t.exports = function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (n) {
            try {
                return e[i] = !1, !"/./" [t](e)
            } catch (t) {}
        }
        return !0
    }
}, function(t, e, n) {
    n(119), t.exports = n(40).String.endsWith
}, function(t, e, n) {
    "use strict";
    var i = n(51),
        o = n(60),
        a = n(115),
        r = "endsWith",
        s = "" [r];
    i(i.P + i.F * n(117)(r), "String", {
        endsWith: function(t) {
            var e = a(this, t, r),
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = o(e.length),
                l = void 0 === n ? i : Math.min(o(n), i),
                u = String(t);
            return s ? s.call(e, u, l) : e.slice(l - u.length, l) === u
        }
    })
}, function(t, e, n) {
    n(121), t.exports = n(40).String.startsWith
}, function(t, e, n) {
    "use strict";
    var i = n(51),
        o = n(60),
        a = n(115),
        r = "startsWith",
        s = "" [r];
    i(i.P + i.F * n(117)(r), "String", {
        startsWith: function(t) {
            var e = a(this, t, r),
                n = o(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                i = String(t);
            return s ? s.call(e, i, n) : e.slice(n, n + i.length) === i
        }
    })
}, function(t, e, n) {
    (function(e) {
        ! function(n) {
            function i() {}

            function o(t, e) {
                return function() {
                    t.apply(e, arguments)
                }
            }

            function a(t) {
                if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(t, this)
            }

            function r(t, e) {
                for (; 3 === t._state;) t = t._value;
                return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void a._immediateFn(function() {
                    var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                    if (null === n) return void(1 === t._state ? s : l)(e.promise, t._value);
                    var i;
                    try {
                        i = n(t._value)
                    } catch (t) {
                        return void l(e.promise, t)
                    }
                    s(e.promise, i)
                }))
            }

            function s(t, e) {
                try {
                    if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if (e instanceof a) return t._state = 3, t._value = e, void u(t);
                        if ("function" == typeof n) return void d(o(n, e), t)
                    }
                    t._state = 1, t._value = e, u(t)
                } catch (e) {
                    l(t, e)
                }
            }

            function l(t, e) {
                t._state = 2, t._value = e, u(t)
            }

            function u(t) {
                2 === t._state && 0 === t._deferreds.length && a._immediateFn(function() {
                    t._handled || a._unhandledRejectionFn(t._value)
                });
                for (var e = 0, n = t._deferreds.length; e < n; e++) r(t, t._deferreds[e]);
                t._deferreds = null
            }

            function c(t, e, n) {
                this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
            }

            function d(t, e) {
                var n = !1;
                try {
                    t(function(t) {
                        n || (n = !0, s(e, t))
                    }, function(t) {
                        n || (n = !0, l(e, t))
                    })
                } catch (t) {
                    if (n) return;
                    n = !0, l(e, t)
                }
            }
            var p = setTimeout;
            a.prototype.catch = function(t) {
                return this.then(null, t)
            }, a.prototype.then = function(t, e) {
                var n = new this.constructor(i);
                return r(this, new c(t, e, n)), n
            }, a.all = function(t) {
                return new a(function(e, n) {
                    function i(t, r) {
                        try {
                            if (r && ("object" == typeof r || "function" == typeof r)) {
                                var s = r.then;
                                if ("function" == typeof s) return void s.call(r, function(e) {
                                    i(t, e)
                                }, n)
                            }
                            o[t] = r, 0 === --a && e(o)
                        } catch (t) {
                            n(t)
                        }
                    }
                    if (!t || "undefined" == typeof t.length) throw new TypeError("Promise.all accepts an array");
                    var o = Array.prototype.slice.call(t);
                    if (0 === o.length) return e([]);
                    for (var a = o.length, r = 0; r < o.length; r++) i(r, o[r])
                })
            }, a.resolve = function(t) {
                return t && "object" == typeof t && t.constructor === a ? t : new a(function(e) {
                    e(t)
                })
            }, a.reject = function(t) {
                return new a(function(e, n) {
                    n(t)
                })
            }, a.race = function(t) {
                return new a(function(e, n) {
                    for (var i = 0, o = t.length; i < o; i++) t[i].then(e, n)
                })
            }, a._immediateFn = "function" == typeof e && function(t) {
                e(t)
            } || function(t) {
                p(t, 0)
            }, a._unhandledRejectionFn = function(t) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
            }, a._setImmediateFn = function(t) {
                a._immediateFn = t
            }, a._setUnhandledRejectionFn = function(t) {
                a._unhandledRejectionFn = t
            }, "undefined" != typeof t && t.exports ? t.exports = a : n.Promise || (n.Promise = a)
        }(this)
    }).call(e, n(123).setImmediate)
}, function(t, e, n) {
    function i(t, e) {
        this._id = t, this._clearFn = e
    }
    var o = Function.prototype.apply;
    e.setTimeout = function() {
        return new i(o.call(setTimeout, window, arguments), clearTimeout)
    }, e.setInterval = function() {
        return new i(o.call(setInterval, window, arguments), clearInterval)
    }, e.clearTimeout = e.clearInterval = function(t) {
        t && t.close()
    }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
        this._clearFn.call(window, this._id)
    }, e.enroll = function(t, e) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = e
    }, e.unenroll = function(t) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
    }, e._unrefActive = e.active = function(t) {
        clearTimeout(t._idleTimeoutId);
        var e = t._idleTimeout;
        e >= 0 && (t._idleTimeoutId = setTimeout(function() {
            t._onTimeout && t._onTimeout()
        }, e))
    }, n(124), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
}, function(t, e, n) {
    (function(t, e) {
        ! function(t, n) {
            "use strict";

            function i(t) {
                "function" != typeof t && (t = new Function("" + t));
                for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                var i = {
                    callback: t,
                    args: e
                };
                return g[h] = i, f(h), h++
            }

            function o(t) {
                delete g[t]
            }

            function a(t) {
                var e = t.callback,
                    i = t.args;
                switch (i.length) {
                    case 0:
                        e();
                        break;
                    case 1:
                        e(i[0]);
                        break;
                    case 2:
                        e(i[0], i[1]);
                        break;
                    case 3:
                        e(i[0], i[1], i[2]);
                        break;
                    default:
                        e.apply(n, i)
                }
            }

            function r(t) {
                if (m) setTimeout(r, 0, t);
                else {
                    var e = g[t];
                    if (e) {
                        m = !0;
                        try {
                            a(e)
                        } finally {
                            o(t), m = !1
                        }
                    }
                }
            }

            function s() {
                f = function(t) {
                    e.nextTick(function() {
                        r(t)
                    })
                }
            }

            function l() {
                if (t.postMessage && !t.importScripts) {
                    var e = !0,
                        n = t.onmessage;
                    return t.onmessage = function() {
                        e = !1
                    }, t.postMessage("", "*"), t.onmessage = n, e
                }
            }

            function u() {
                var e = "setImmediate$" + Math.random() + "$",
                    n = function(n) {
                        n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && r(+n.data.slice(e.length))
                    };
                t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), f = function(n) {
                    t.postMessage(e + n, "*")
                }
            }

            function c() {
                var t = new MessageChannel;
                t.port1.onmessage = function(t) {
                    var e = t.data;
                    r(e)
                }, f = function(e) {
                    t.port2.postMessage(e)
                }
            }

            function d() {
                var t = v.documentElement;
                f = function(e) {
                    var n = v.createElement("script");
                    n.onreadystatechange = function() {
                        r(e), n.onreadystatechange = null, t.removeChild(n), n = null
                    }, t.appendChild(n)
                }
            }

            function p() {
                f = function(t) {
                    setTimeout(r, 0, t)
                }
            }
            if (!t.setImmediate) {
                var f, h = 1,
                    g = {},
                    m = !1,
                    v = t.document,
                    w = Object.getPrototypeOf && Object.getPrototypeOf(t);
                w = w && w.setTimeout ? w : t, "[object process]" === {}.toString.call(t.process) ? s() : l() ? u() : t.MessageChannel ? c() : v && "onreadystatechange" in v.createElement("script") ? d() : p(), w.setImmediate = i, w.clearImmediate = o
            }
        }("undefined" == typeof self ? "undefined" == typeof t ? this : t : self)
    }).call(e, function() {
        return this
    }(), n(125))
}, function(t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(t) {
        if (c === setTimeout) return setTimeout(t, 0);
        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
        try {
            return c(t, 0)
        } catch (e) {
            try {
                return c.call(null, t, 0)
            } catch (e) {
                return c.call(this, t, 0)
            }
        }
    }

    function a(t) {
        if (d === clearTimeout) return clearTimeout(t);
        if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);
        try {
            return d(t)
        } catch (e) {
            try {
                return d.call(null, t)
            } catch (e) {
                return d.call(this, t)
            }
        }
    }

    function r() {
        g && f && (g = !1, f.length ? h = f.concat(h) : m = -1, h.length && s())
    }

    function s() {
        if (!g) {
            var t = o(r);
            g = !0;
            for (var e = h.length; e;) {
                for (f = h, h = []; ++m < e;) f && f[m].run();
                m = -1, e = h.length
            }
            f = null, g = !1, a(t)
        }
    }

    function l(t, e) {
        this.fun = t, this.array = e
    }

    function u() {}
    var c, d, p = t.exports = {};
    ! function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            c = n
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
            d = i
        }
    }();
    var f, h = [],
        g = !1,
        m = -1;
    p.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        h.push(new l(t, e)), 1 !== h.length || g || o(s)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = u, p.addListener = u, p.once = u, p.off = u, p.removeListener = u, p.removeAllListeners = u, p.emit = u, p.prependListener = u, p.prependOnceListener = u, p.listeners = function(t) {
        return []
    }, p.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, p.cwd = function() {
        return "/"
    }, p.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, p.umask = function() {
        return 0
    }
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function r() {
        function t() {
            var t = 0;
            try {
                t = parseInt(localStorage.getItem("videoplays"))
            } catch (t) {
                console.error(t)
            }
            return isNaN(t) ? 0 : t
        }

        function e(t) {
            try {
                localStorage.setItem("videoplays", t)
            } catch (t) {
                console.error(t)
            }
        }
        var n = t();
        n++, e(n)
    }

    function s() {
        window._cbv_strategies = window._cbv_strategies || [], window._cbv_strategies.push(A.WapoStrategy)
    }

    function l(t) {
        t = t || [], Object.keys(P).forEach(function(e) {
            t.indexOf(e) === -1 && P[e] && (0, S.loadScript)(P[e], function(t) {}, function(t) {
                console.error(e + " failed to load", t)
            })
        })
    }

    function u(t) {
        t.forEach(function(t) {
            (0, S.loadCSS)(t)
        })
    }

    function c() {
        var t = [{
            class: "fa",
            fontFamily: "FontAwesome"
        }];
        return p(t)
    }

    function d() {
        var t = (0, S.get)(window, "wp_meta_data.isPWA") === !0 || "pwa" === window.wp_site,
            e = (0, S.get)(window, "wp_meta_data.isHomepage") === !0,
            n = 0 === (0, S.get)(window, "wp_pb.pageName", "").indexOf("article");
        return !(t || e || n) || T
    }

    function p(t) {
        var e = void 0;
        return t.forEach(function(t) {
            var n = void 0;
            document.querySelector(".wpv-font-canary." + t.class) ? n = document.querySelector(".wpv-font-canary." + t.class) : (n = document.createElement("div"), n.className = "wpv-font-canary " + t.class, n.style.position = "absolute", n.style.width = "auto", n.style.left = "-99999px", n.innerHTML = "test", document.body.appendChild(n));
            var i = getComputedStyle(n).fontFamily,
                o = i ? i.split(",") : [];
            t.isAvailable = o[0].indexOf(t.fontFamily) > -1, e = "undefined" != typeof e ? e && t.isAvailable : t.isAvailable
        }), e
    }

    function f(t) {
        function e() {
            a && (a.className = "powa-shot-click powa-shot-click-play fa fa-spinner fa-spin powa-shot-play-btn-icon")
        }

        function n() {
            a && (a.className = "powa-shot-click powa-shot-click-play fa fa-play powa-shot-play-btn-icon")
        }
        var i = this,
            o = new b.PoWaPack(this.element),
            a = this.element.querySelector(".powa-shot-play-btn-icon");
        this.on("play", function(t) {
            o.elements[0].classList.add("playing"), n()
        }), this.on("promoPlay", function(t) {
            e()
        }), this.on("start", function(t) {
            r(), e()
        }), this.on("adLoaded", function(t) {
            o.addClass("ad-playing");
            var e = o.find("video"),
                n = "live" === i.getVideoData().video_type;
            e.elements.length && (n || i.hideControls(), e.textTracks && e.textTracks[0] && (e.textTracks[0].oldMode = e.textTracks[0].mode, e.textTracks[0].mode = "hidden"))
        }), this.on("adEnd", function(t) {
            o.removeClass("ad-playing");
            var e = o.find("video"),
                n = "live" === i.getVideoData().video_type,
                a = o.find(".powa-live-video-controls");
            e.elements.length && (n || ((0, S.parseString)(i.element.dataset.customCtrls) ? a.css({
                display: "none"
            }) : i.showControls()), e.textTracks && e.textTracks[0] && e.textTracks[0].oldMode && (e.textTracks[0].mode = e.textTracks[0].oldMode, e.textTracks[0].oldMode = void 0))
        }), this.on("end", function(t) {
            o.elements[0].classList.remove("playing")
        }), o.on("click", function(t) {
            k && w.call(i)
        })
    }

    function h(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.offsetWidth;
        n < e.xSmall ? (t.classList.remove(D.small), t.classList.remove(D.large), t.classList.remove(D.xLarge), t.classList.add(D.xSmall)) : n < e.small ? (t.classList.remove(D.xSmall), t.classList.remove(D.large), t.classList.remove(D.xLarge), t.classList.add(D.small)) : n < e.large ? (t.classList.remove(D.xSmall), t.classList.remove(D.small), t.classList.remove(D.xLarge), t.classList.add(D.large)) : (t.classList.remove(D.xSmall), t.classList.remove(D.small), t.classList.remove(D.large), t.classList.add(D.xLarge))
    }

    function g(t) {
        var e = window.PoWaSettings.client || (0, S.sniffClient)();
        window.self !== window.top && e.isIOS && t.classList.add("powa-ios"), e.isMobile && t.classList.add(O);
        var n = e.isMobile ? "mobile" : e.isTablet ? "tablet" : "deskweb";
        t.setAttribute("data-device-class", n), (e.isIOS || e.isSafari) && e.version >= 11 && t.classList.add("powa-saf11-controls")
    }

    function m(t) {
        h(t), g(t)
    }

    function v(t) {
        try {
            new _.PoWaAnalyticsWapo(this, {
                prerollOnly: t.prerollOnly,
                autoinit: t.autoinit,
                autoplay: t.autoplay,
                mpulse: t.mpulse
            })
        } catch (t) {
            console.error(t)
        }
        f.call(this, t)
    }

    function w() {
        var t = document.querySelector("#" + this.element.id + "-powa-blurb"),
            e = document.createElement("div");
        e.classList.add("powa-qa"), e.innerHTML = "Ad Request Timeout Length: " + window.PoWaSettings.advertising.requestAdsTimeout, t && t.appendChild(e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PoWaDriveWapo = void 0;
    var y = n(127),
        b = n(7),
        _ = n(129),
        A = n(136),
        S = n(8),
        E = (0, S.getQueryStringParameters)().ptvqa,
        k = "true" === E || "1" === E,
        T = (0, S.isObject)(window.Fusion),
        P = {},
        x = T ? "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" : "https://www.washingtonpost.com/pb/resources/assets/fonts/custom/latest/css/icons.css",
        D = {
            xSmall: "xSmall",
            small: "small",
            large: "large",
            xLarge: "xLarge"
        },
        O = "mobile-player",
        C = {
            xSmall: 421,
            small: 769,
            large: 1438
        };
    window.addEventListener("resize", function(t) {
        Array.prototype.forEach.call(document.getElementsByClassName("powa"), function(t) {
            h(t, C)
        })
    });
    e.PoWaDriveWapo = function(t) {
        function e(t) {
            i(this, e);
            var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            n.element = t;
            var a = t.hasAttribute("data-promo-video") && "false" !== t.getAttribute("data-promo-video"),
                r = "1" === t.getAttribute("data-autoinit") || "true" === t.getAttribute("data-autoinit"),
                p = !a && ("1" === t.getAttribute("data-autoplay") || "true" === t.getAttribute("data-autoplay")),
                f = "1" === t.getAttribute("data-preroll-only") || "true" === t.getAttribute("data-preroll-only"),
                h = "0" === t.getAttribute("data-playthrough") || "false" === t.getAttribute("data-playthrough"),
                g = "1" === t.getAttribute("data-mpulse") || "true" === t.getAttribute("data-mpulse");
            window.addEventListener("powaRender", function(t) {
                t.detail.id === n.getID() && v.call(n, {
                    prerollOnly: f,
                    autoinit: r,
                    autoplay: p,
                    disablePlaythrough: h,
                    mpulse: g
                })
            }), m(t);
            var w = [];
            d() && !c() && w.push(x), u(w);
            var y = f ? ["comscore", "chartbeat"] : null;
            return l(y), !y && s(), n
        }
        return a(e, t), e
    }(y.PoWaDrive)
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t) {
        var e = t.getAttribute("id");
        if (!e) {
            var n = (0, B.map)(t.dataset, U.parseString);
            e = "powa-" + (n.uuid ? n.uuid : Date.now()), t.setAttribute("id", e)
        }
    }

    function a(t) {
        return (0, U.isHTMLElement)(t) ? ((0, U.ensureDataset)(t), o(t), t) : null
    }

    function r() {
        window.PoWaSettings = window.PoWaSettings || {}, PoWaSettings = (0, U.extend)({}, G, PoWaSettings), PoWaSettings.client = PoWaSettings.client || (0, U.sniffClient)()
    }

    function s(t) {
        function e(e) {
            var n = (0, B.find)(o.playlist, function(e) {
                return e.uuid === t._id
            });
            n && (n.error = !0), i((0, U.extend)({
                error: "incomplete video data",
                videoData: t
            }, e))
        }
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.noop,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : U.noop,
            o = X.get(this);
        t = (0, U.extend)({}, K, t), t._id ? t.headlines.basic ? t.streams.length ? t.promo_image.url ? n(t) : e({
            message: "video data missing image"
        }) : e({
            message: "video data missing streams"
        }) : e({
            message: "video data missing title"
        }) : e({
            message: "video data missing uuid"
        })
    }

    function l(t) {
        function e(t) {
            return t ? (0, B.chain)(t).reject(function(t) {
                return t.bitrate > o[r]
            }).map(function(t) {
                return (0, U.extend)(t, {
                    bitrate: isNaN(t.bitrate) ? 0 : t.bitrate,
                    height: isNaN(t.height) ? 0 : t.height,
                    width: isNaN(t.width) ? 0 : t.width
                })
            }).max(function(t) {
                return t.bitrate || t.height + t.width
            }).value() : {}
        }
        if (!t) return null;
        var n = p(t);
        if ("live" === t.video_type) return {
            promo: n,
            title: n.title,
            image: n.image,
            streams: t.streams.map(function(t) {
                return t.url
            })
        };
        var i = t.streams,
            o = PoWaSettings.maxBitrate,
            a = PoWaSettings.streamPreference,
            r = PoWaSettings.client.isMobile ? "mobile" : PoWaSettings.client.isTablet ? "tablet" : "desktop",
            s = (0, B.groupBy)(i, function(t) {
                return (0, B.find)(a, function(e) {
                    return t.url.endsWith(e)
                })
            }),
            l = PoWaSettings.streamURIFilter || B.identity,
            f = (0, B.chain)(a).map(function(t) {
                return e(s[t])
            }).compact().map(function(t) {
                return (0, U.notEmpty)(t) ? t.url : null
            }).compact().map(function(e) {
                return l(e, t)
            }).compact().value();
        return (0, U.extend)({
            streams: f
        }, {
            promo: n
        }, d(t), c(t), u(t))
    }

    function u(t) {
        return {
            tracks: !t.additional_properties.doNotShowTranscripts && (0, U.get)(t, "subtitles.urls.length") && (0, B.some)(t.subtitles.urls, function(t) {
                return "WEB_VTT" === t.format
            }) ? t.subtitles.urls : null
        }
    }

    function c(t) {
        return {
            title: t.headlines.basic
        }
    }

    function d(t) {
        var e = (0, B.find)(t.additional_properties.imageResizerUrls, function(t) {
            return t && t.size && t.size === PoWaSettings.promo.size
        });
        return {
            image: (0, U.protocolAgnosticURL)(PoWaSettings.promo.resized !== !1 && e && e.url ? e.url : PoWaSettings.imageResizer(t.promo_image))
        }
    }

    function p(t) {
        return (0, U.extend)({
            videoData: t
        }, d(t), c(t))
    }

    function f() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            e = X.get(this),
            n = J.get(this),
            i = this.player ? this.player.getStatus() : {},
            o = {
                videoData: this.videoData,
                id: J.get(this).elementID,
                isPreloadingAds: t || i.adStatus && i.adStatus.isPreloading,
                isPlaythrough: e.videoStarts > 1,
                muted: i.muted,
                settings: n
            };
        return o
    }

    function h() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        switch ("undefined" == typeof t ? "undefined" : L(t)) {
            case "function":
                return t(f.call(this, e));
            case "string":
                return t.startsWith("window.") ? (t = t.replace("window.", ""), t = (0, U.get)(window, t), t ? h.call(this, t, e) : "") : t;
            default:
                return ""
        }
    }

    function g() {
        var t = X.get(this),
            e = J.get(this);
        if (e.element.dataset.adCompanion) {
            var n = e.element.dataset.adCompanion.replace(/^#/, "");
            t.$adCompanionContainer = (0, R.$)("#" + n)
        }
    }

    function m(t) {
        var e = J.get(this),
            n = new CustomEvent("powaError", {
                detail: {
                    error: t,
                    id: (0, U.get)(e, "elementID"),
                    powa: this
                }
            }),
            i = document.querySelector("body");
        i.dispatchEvent(n), window.dispatchEvent(n)
    }

    function v() {
        var t = this,
            e = Z.get(this),
            n = X.get(this),
            i = J.get(this),
            o = {
                onAdCompanions: function(t) {
                    n.$adCompanionContainer && n.$adCompanionContainer.elements[0] && t.adCompanions.length && n.$adCompanionContainer.append((0, R.$)(t.adCompanions[0].content))
                },
                onAdEnd: function() {
                    n.$adCompanionContainer && n.$adCompanionContainer.empty && n.$adCompanionContainer.empty()
                },
                onComplete: function() {
                    this.next()
                },
                onEnd: function(t) {
                    var e = window.powas[i.elementID];
                    (0, U.has)(i, "powaTrack") && (0, U.stashLocal)("powaTrack", i.powaTrack), (0, U.fetchLocal)("powaTrack", !1) ? (e.powaTracked = e.powaTracked || [], e.powaTracked.push(e.powaTrack)) : e.powaTracked = e.powaTrack, e.powaTrack = [{
                        event: "powaTrackClear",
                        timestamp: Date.now()
                    }]
                },
                onError: function() {
                    var t = this,
                        e = (0, B.find)(n.playlist, function(e) {
                            return e.uuid === t.videoData._id
                        });
                    e && (e.error = !0), this.next()
                },
                onNextClick: this.next,
                onPrevClick: this.prev,
                onStart: function() {
                    var t = this,
                        e = (0, B.find)(n.playlist, function(e) {
                            return e.uuid === t.videoData._id
                        });
                    e && (e.played = !0), n.videoStarts++
                }
            };
        (0, B.forEach)(Y, function(n) {
            var i = "on" + (n[0].toUpperCase() + n.slice(1));
            o[i] && e.on(n, o[i].bind(t))
        })
    }

    function w(t) {
        var e = t.uuid,
            n = t.env;
        return "function" == typeof PoWaSettings.videoAPI ? PoWaSettings.videoAPI({
            uuid: e,
            env: n,
            type: "video"
        }) : PoWaSettings.videoAPI.uuid + e
    }

    function y(t) {
        var e = t.playlist,
            n = t.env;
        return PoWaSettings.videoAPI({
            playlist: e,
            env: n,
            type: "playlist"
        })
    }

    function b(t) {
        return window.powaData = window.powaData || {}, t && t._id && (powaData[t._id] = t), t
    }

    function _(t) {
        var e = J.get(this);
        return new Promise(function(n, i) {
            var o = !e.element.dataset.hasOwnProperty("bandito") || (0, U.parseString)(e.element.dataset.bandito);
            o && !e.autoplay && PoWaSettings.banditoAPI && (0, U.get)(t, "additional_properties.useVariants") ? (0, U.ajaxGET)(PoWaSettings.banditoAPI({
                type: "variant",
                videoID: (0, U.get)(t, "additional_properties.videoId")
            }), function(e) {
                if (e = e ? JSON.parse(e) : null, e = e.length ? e[0] : null) {
                    t.additional_properties.variant = e;
                    var i = (0, U.get)(e, "winner_title"),
                        o = (0, U.get)(e, "winner_thumbnail");
                    i && (t.headlines.basic = i), o && (o.endsWith(".mp4") ? (t.additional_properties.gifAsThumbnail = !0, t.streams.push({
                        stream_type: "gif-mp4",
                        url: o
                    })) : t.promo_image.url = o)
                }
                n(t)
            }, function() {
                return n(t)
            }) : n(t)
        })
    }

    function A() {
        var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return new Promise(function(n, i) {
            var o = X.get(t);
            e = Array.isArray(e) ? e : [e];
            var a = function(t) {
                    return {
                        uuid: t._id,
                        played: !1,
                        error: !1
                    }
                },
                r = e.map(function(e) {
                    return _.call(t, e)
                });
            Promise.all(r).then(function(t) {
                var e = (0, B.chain)(t).map(b).map(a).value();
                o.playlist = o.playlist || [], o.playlist = (0, B.find)(o.playlist, function(e) {
                    return e.uuid === t[0]._id
                }) ? o.playlist : e, n(t[0])
            }).catch()
        })
    }

    function S(t) {
        var e = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.noop,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : U.noop,
            o = function(t) {
                A.call(e, t).then(n)
            },
            a = J.get(this);
        window.powaData = window.powaData || {};
        var r = t.uuid,
            s = t.playlist;
        if (r && powaData[r]) o(powaData[r]);
        else {
            var l = a.api || a.env,
                u = r ? w({
                    uuid: r,
                    env: l
                }) : y({
                    playlist: s,
                    env: l
                }),
                c = r || s;
            c = c.replace(/\W/g, ""), (0, U.getJSONP)({
                id: c,
                url: u,
                resolve: function(t) {
                    t = t.playlistItems || t, t.length ? o(t) : i({
                        uuid: r,
                        error: "no video data",
                        message: "No video data available for " + r + "."
                    })
                },
                reject: i,
                callbackParam: "cb"
            })
        }
    }

    function E(t) {
        var e = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.noop,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : U.noop;
        s.call(this, t, function(t) {
            e.player ? (e.videoData = t, e.player.once(PoWa.EVENTS.LOADED, n), e.player.loadVideo(l(t))) : I.call(e, t)
        }, i)
    }

    function k(t) {
        console.error("[" + z + "] error - " + (t.message || t)), Z.get(this).trigger("error", t), this.player || m.call(this, t)
    }

    function T() {
        var t = this,
            e = Z.get(this),
            n = J.get(this);
        this.player.on("*", function(e, n) {
            n === Y.START && Object.assign(e, M.call(t)), Z.get(t).trigger(n, e)
        }), e.on("*", function(t, e) {
            if (!n.debugExclusions.includes(e)) {
                var i = window.powas[n.elementID].powaTrack,
                    o = Date.now(),
                    a = i[i.length - 1].timestamp,
                    r = i[0].timestamp;
                i.push({
                    data: t,
                    delta: (o - a) / U.ONE_SECOND,
                    event: e,
                    time: (o - r) / U.ONE_SECOND,
                    timestamp: o
                }), n.debug && console.warn(e, t)
            }
        })
    }

    function P() {
        var t = J.get(this);
        window.powas = window.powas || {}, window.powas[t.elementID] = window.powas[t.elementID] || {}, window.powas[t.elementID].powa = this, window.powas[t.elementID].powaTrack = [{
            event: "constructed",
            timestamp: Date.now()
        }]
    }

    function x() {
        var t = J.get(this),
            e = X.get(this);
        if (!e.reportedPoWaRender) {
            e.reportedPoWaRender = !0;
            var n = new CustomEvent(PoWa.EVENTS.POWA_RENDER, {
                    detail: {
                        id: t.elementID,
                        powa: this
                    }
                }),
                i = window.powas[t.elementID].powaTrack,
                o = i[i.length - 1].timestamp,
                a = Date.now();
            i.push({
                event: PoWa.EVENTS.POWA_RENDER,
                timestamp: a,
                time: (a - o) / U.ONE_SECOND
            }), window.dispatchEvent(n)
        }
    }

    function D(t) {
        var e = this,
            n = J.get(this),
            i = p(this.videoData),
            o = (0, U.extend)({
                adTag: function() {
                    var t = e.player.getStatus(),
                        n = t.adStatus && !t.adStatus.isPreloading;
                    return n ? h.call(e) : null
                },
                debug: !1,
                id: n.elementID,
                hlsJSURL: (0, j.hlsJSURL)(window.PoWaSettings.org),
                video: l(this.videoData),
                ready: function(t) {
                    e.player = t, v.call(e), T.call(e), x.call(e);
                    var i = new CustomEvent(PoWa.EVENTS.POWA_READY, {
                        detail: {
                            id: n.elementID,
                            powa: e
                        }
                    });
                    n.autoinitAds && e.player.loadAd(h.call(e, q, !0), !0);
                    var o = document.querySelector("body");
                    o.dispatchEvent(i), window.dispatchEvent(i)
                },
                error: function(t) {
                    m.call(e, t)
                },
                poster: i.image,
                autoplay: !1,
                promo: i,
                ads: !0,
                adHacks: !0
            }, (0, B.map)(n.element.dataset, U.parseString), t);
        o.id = n.elementID, o.debug = n.element.dataset.debug === H.DEBUG.FULL, o.controls = !o.customCtrls, !(0, U.has)(o, "muted") && !(0, U.has)(o, "volume") || (0, U.has)(o, "stashVolume") || (o.stashVolume = !1), (0, U.has)(o, "subtitles") && !(0, U.has)(o, "stashSubtitles") && (o.stashSubtitles = !1), new PoWa(o)
    }

    function O() {
        var t = X.get(this);
        (0, B.forEach)(tt.get(this), function(e) {
            var n = e.event,
                i = e.eventHandler;
            return t.$promo.off(n, i)
        }), tt.set(this, null), D.call(this, {
            autoplay: !0,
            $container: t.$container,
            $promo: t.$promo
        })
    }

    function C() {
        var t = this,
            e = Z.get(this),
            n = X.get(this),
            i = J.get(this),
            o = p(this.videoData);
        n.$container = (0, R.$)(i.element), n.$container.css((0, U.extend)({}, (0, U.notEmpty)(i.style) ? i.style : U.DEFAULT_STYLE, {
            paddingBottom: 100 * (i.aspectRatio || U.SIXTEEN_BY_NINE) + "%"
        }, U.REQUIRED_STYLE)), n.$promo = new W.PoWaShot({
            id: i.elementID,
            data: o,
            style: PoWaSettings.promo.style,
            template: PoWaSettings.promo.template
        }), tt.set(this, (0, B.map)(W.PoWaShot.EVENTS, function(i) {
            var o = function(n) {
                n = n.detail ? n.detail : n, i === W.PoWaShot.EVENTS.PROMO_RENDER && x.call(t), e.trigger(i, n), i === W.PoWaShot.EVENTS.PROMO_CUSTOM && e.trigger(n.type, n), i === W.PoWaShot.EVENTS.PROMO_PLAY && O.call(t)
            };
            return n.$promo.on(i, o), {
                event: i,
                eventHandler: o
            }
        })), n.$container.append(n.$promo)
    }

    function I(t) {
        var e = J.get(this);
        this.videoData = t, g.call(this), PoWaSettings.videoSupport = PoWaSettings.videoSupport || (0, U.getVideoSupport)();
        var n = (0, U.get)(PoWaSettings, "videoSupport.hls"),
            i = !(e.autoinit !== H.AUTOINIT.NATIVE_HLS || !n) || e.autoinit === !0;
        i ? D.call(this) : C.call(this)
    }

    function M() {
        var t = this.getPlaylist(),
            e = this.getVideoData() || {},
            n = t.findIndex(function(t) {
                return t.uuid === e._id
            });
        return {
            playlistMeta: {
                length: t.length,
                currentIndex: n,
                first: 0 === n,
                last: n === t.length - 1
            }
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PoWaDrive = void 0;
    var N = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
    n(6);
    var R = n(7),
        j = n(128),
        W = n(12),
        V = n(10),
        B = n(9),
        U = n(8),
        z = "PoWaDrive",
        F = "1.5.7",
        $ = "1914be4f",
        Y = (0, U.extend)({
            NEXT_CLICK: "nextClick",
            NEXT: "next",
            PREV_CLICK: "prevClick",
            PREV: "prev",
            PLAYLIST: "playlist"
        }, PoWa.EVENTS),
        H = Object.freeze({
            AUTOINIT: {
                TRUE: !0,
                FALSE: !1,
                NATIVE_HLS: "native-hls"
            },
            DEBUG: {
                TRUE: !0,
                FALSE: !1,
                FULL: "full"
            }
        }),
        Q = Object.freeze({
            autoinit: H.AUTOINIT.NATIVE_HLS,
            debug: H.DEBUG.FALSE,
            debugExclusions: ["time", "adTime", "progress"]
        }),
        q = "window.PoWaSettings.advertising.adTag",
        G = Object.freeze({
            advertising: {},
            imageResizer: function(t) {
                return t.url
            },
            maxBitrate: {
                mobile: 300,
                tablet: 600,
                desktop: 2e3
            },
            promo: {
                size: "medium"
            },
            streamPreference: ["_master.m3u8", "_mobile.m3u8", ".m3u8", ".mp4", ".webm"]
        }),
        K = Object.freeze({
            additional_properties: {
                imageResizerUrls: []
            },
            headlines: {},
            promo_image: {},
            streams: [],
            subtitles: {
                urls: []
            }
        }),
        Z = new WeakMap,
        X = new WeakMap,
        J = new WeakMap,
        tt = new WeakMap,
        et = function() {
            function t(e) {
                var n = this;
                if (i(this, t), ["getElement", "getID", "getDataset", "getVideoData", "getPlaylist", "setPlaylist", "loadVideo", "getAdTagConfig", "getAdTag", "loadAd", "startAd", "skipAd", "play", "pause", "togglePlay", "seekTime", "seekPosition", "jumpForward", "jumpBack", "mute", "volume", "next", "prev", "showPromo", "hidePromo", "showControls", "hideControls", "showSubtitles", "hideSubtitles", "toggleSubtitles", "getStatus", "trigger", "on", "off", "once", "onceIf", "until"].map(function(t) {
                        return n[t] = n[t].bind(n)
                    }), Z.set(this, new V.PoWaOnPoWaOff), e = a(e), !e) return k.call(this, {
                    error: "invalid element",
                    message: "PoWa element is invalid"
                }), null;
                var o = (0, U.extend)({}, Q, (0, B.map)(e.dataset, U.parseString), {
                    element: e,
                    elementID: e.id
                });
                if (o.env = o.env || (0, j.getEnv)(), o.debug = o.debug === H.DEBUG.TRUE || o.debug === H.DEBUG.FULL, X.set(this, {
                        videoStarts: 0
                    }), J.set(this, o), P.call(this), r.call(this), o.uuid) S.call(this, {
                    uuid: o.uuid
                }, function(t) {
                    s.call(n, t, I.bind(n), k.bind(n))
                }, k.bind(this));
                else if (o.playlist) {
                    var l = o.playlist;
                    S.call(this, {
                        playlist: l
                    }, function(t) {
                        s.call(n, t, I.bind(n), k.bind(n))
                    }, k.bind(this))
                } else k.call(this, {
                    error: "missing stream ID",
                    message: '"data-uuid" not provided.'
                })
            }
            return N(t, null, [{
                key: "VERSION",
                get: function() {
                    return F
                }
            }, {
                key: "BUILD",
                get: function() {
                    return $
                }
            }]), N(t, [{
                key: "getElement",
                value: function() {
                    return J.get(this).element
                }
            }, {
                key: "getID",
                value: function() {
                    return J.get(this).elementID
                }
            }, {
                key: "getVideoData",
                value: function() {
                    return this.videoData
                }
            }, {
                key: "getDataset",
                value: function() {
                    return (0, U.ensureDataset)(J.get(this).element)
                }
            }, {
                key: "getPlaylist",
                value: function() {
                    var t = X.get(this).playlist;
                    return (0, B.forEach)(t, function(t) {
                        powaData[t.uuid] && (t.videoData = powaData[t.uuid])
                    }), t
                }
            }, {
                key: "setPlaylist",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = Z.get(this),
                        n = X.get(this);
                    Array.isArray(t) && (n.playlist = (0, B.chain)(t).map(function(t) {
                        var e = "string" == typeof t ? t : t._id;
                        if (e) return "object" === ("undefined" == typeof t ? "undefined" : L(t)) && (powaData[e] = t), {
                            uuid: e,
                            played: !1,
                            error: !1
                        }
                    }).compact().value(), e.trigger(Y.PLAYLIST, Object.assign({
                        type: Y.PLAYLIST,
                        playlist: n.playlist
                    }, M.call(this))))
                }
            }, {
                key: "loadVideo",
                value: function(t) {
                    var e = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.noop,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : U.noop,
                        o = function(t) {
                            k.call(e, t), i(t)
                        };
                    switch ("undefined" == typeof t ? "undefined" : L(t)) {
                        case "string":
                            this.videoData && t === this.videoData._id ? n() : S.call(this, {
                                uuid: t
                            }, function(t) {
                                E.call(e, t, n, o)
                            }, o);
                            break;
                        case "object":
                            this.videoData && t._id === this.videoData._id ? n() : E.call(this, t, n, o)
                    }
                }
            }, {
                key: "getAdTagConfig",
                value: function() {
                    return f.call(this)
                }
            }, {
                key: "getAdTag",
                value: function() {
                    return h.call(this)
                }
            }, {
                key: "loadAd",
                value: function(t) {
                    this.player && this.player.loadAd(t)
                }
            }, {
                key: "startAd",
                value: function() {
                    this.player && this.player.startAd()
                }
            }, {
                key: "skipAd",
                value: function(t) {
                    this.player && this.player.skipAd(t)
                }
            }, {
                key: "play",
                value: function() {
                    this.player ? this.player.play() : O.call(this)
                }
            }, {
                key: "pause",
                value: function() {
                    this.player && this.player.pause()
                }
            }, {
                key: "togglePlay",
                value: function() {
                    this.player ? this.player.togglePlay() : O.call(this)
                }
            }, {
                key: "seekTime",
                value: function(t) {
                    this.player && this.player.seekTime(t)
                }
            }, {
                key: "seekPosition",
                value: function(t) {
                    this.player && this.player.seekPosition(t)
                }
            }, {
                key: "jumpForward",
                value: function(t) {
                    this.player && this.player.jumpForward(t)
                }
            }, {
                key: "jumpBack",
                value: function(t) {
                    this.player && this.player.jumpBack(t)
                }
            }, {
                key: "mute",
                value: function(t, e) {
                    this.player && this.player.mute(t, e)
                }
            }, {
                key: "volume",
                value: function(t) {
                    this.player && this.player.volume(t)
                }
            }, {
                key: "next",
                value: function() {
                    var t = this,
                        e = X.get(this);
                    if (e.playlist && e.playlist.length > 1) {
                        var n = e.playlist.findIndex(function(e) {
                            return e.uuid === t.videoData._id
                        });
                        if (n >= 0) {
                            var i = n + 1;
                            return i < e.playlist.length && (this.loadVideo(e.playlist[i].uuid, this.player.play), Z.get(this).trigger("next"), !0)
                        }
                    }
                }
            }, {
                key: "prev",
                value: function() {
                    var t = this,
                        e = X.get(this);
                    if (e.playlist && e.playlist.length > 1) {
                        var n = e.playlist.findIndex(function(e) {
                            return e.uuid === t.videoData._id
                        });
                        if (n >= 0) {
                            var i = n - 1;
                            return i >= 0 && (this.loadVideo(e.playlist[i].uuid, this.player.play), Z.get(this).trigger("next"), !0)
                        }
                    }
                }
            }, {
                key: "showPromo",
                value: function() {
                    this.player && this.player.showPromo()
                }
            }, {
                key: "hidePromo",
                value: function() {
                    this.player && this.player.hidePromo()
                }
            }, {
                key: "showControls",
                value: function() {
                    this.player && this.player.showControls()
                }
            }, {
                key: "hideControls",
                value: function() {
                    this.player && this.player.hideControls()
                }
            }, {
                key: "showSubtitles",
                value: function(t) {
                    this.player && this.player.showSubtitles(t)
                }
            }, {
                key: "hideSubtitles",
                value: function() {
                    this.player && this.player.hideSubtitles()
                }
            }, {
                key: "toggleSubtitles",
                value: function() {
                    this.player && this.player.toggleSubtitles()
                }
            }, {
                key: "getStatus",
                value: function() {
                    var t = this.player ? this.player.getStatus() : {},
                        e = M.call(this);
                    return (0, U.extend)(t, e)
                }
            }, {
                key: "on",
                value: function(t, e, n) {
                    Z.get(this).on(t, e)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    Z.get(this).off(t, e)
                }
            }, {
                key: "once",
                value: function(t, e, n) {
                    Z.get(this).once(t, e)
                }
            }, {
                key: "onceIf",
                value: function(t, e, n, i) {
                    Z.get(this).onceIf(t, e, n)
                }
            }, {
                key: "until",
                value: function(t, e, n, i) {
                    Z.get(this).until(t, e, n)
                }
            }, {
                key: "trigger",
                value: function(t, e) {
                    Z.get(this).trigger(t, e)
                }
            }]), t
        }();
    e.PoWaDrive = et
}, function(t, e, n) {
    "use strict";

    function i() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "powaBoot.js",
            e = document.querySelectorAll('script[src*="' + t + '"]'),
            n = e.length && e[0].src ? e[0].src.toLowerCase() : "",
            i = n ? n.split("//")[1].split("/").slice(1) : [],
            o = i.reduce(function(e, n, i) {
                return n.includes(t.toLowerCase()) ? i : e
            }, 0);
        return 0 === o ? "prod" : "js" === i[o - 1] ? "local" : i[o - 1]
    }

    function o() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wapo",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i(),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0.11.0";
        if ("wapo" === t) return c[t] + "/_vendor/hlsjs/" + n + "/hls.min.js";
        switch (e) {
            case "local":
                return "https://cdn.jsdelivr.net/hls.js/latest/hls.min.js";
            case "prod":
                return c[t] + "/" + e + "/hls.min.js";
            default:
                return c[t] + "/" + e + "/hls.min.js"
        }
    }

    function a() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wapo",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i();
        switch (e) {
            case "local":
                return "/orgs/" + t + ".js";
            case "prod":
                return c[t] + "/" + e + "/" + t + ".js";
            default:
                return c[t] + "/" + e + "/" + t + ".js"
        }
    }

    function r() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wapo",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i();
        switch (e) {
            case "local":
                return "/js/powaBoot.js";
            case "prod":
                return c[t] + "/" + e + "/powaBoot.js";
            default:
                return c[t] + "/" + e + "/powaBoot.js"
        }
    }

    function s() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wapo",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i();
        switch (e) {
            case "local":
                return "/js/powa.js";
            case "prod":
                return c[t] + "/" + e + "/powa.js";
            default:
                return c[t] + "/" + e + "/powa.js"
        }
    }

    function l() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wapo",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i();
        switch (e) {
            case "local":
                return "/powaEmbed.html";
            case "prod":
                return c[t] + "/" + e + "/powaEmbed.html";
            default:
                return c[t] + "/" + e + "/powaEmbed.html"
        }
    }

    function u() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wapo",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i();
        switch (e) {
            case "local":
                return "/powaPlaylist.html";
            case "prod":
                return c[t] + "/" + e + "/powaPlaylist.html";
            default:
                return c[t] + "/" + e + "/powaPlaylist.html"
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getEnv = i, e.hlsJSURL = o, e.orgDataURL = a, e.powaBootURL = r, e.powaSourceURL = s, e.powaEmbedURL = l, e.powaPlaylistURL = u, n(19);
    var c = {
        adn: "https://d3hx2fmdmxvu47.cloudfront.net",
        demo: "https://d328y0m0mtvzqc.cloudfront.net",
        gruponacion: "https://d2d765ytpxgyaz.cloudfront.net",
        mco: "https://dv90bhm02uda6.cloudfront.net",
        staging: "https://d20bvihs725teq.cloudfront.net",
        tgam: "https://d6e4eccju4kk3.cloudfront.net",
        therealnews: "https://d4sgk931q91k0.cloudfront.net",
        wapo: "https://d1pz6dax0t5mop.cloudfront.net"
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t) {
        var e = "";
        if (this.nextClick ? e += ",event155" : this.prevClick && (e += ",event156"), this.shouldSendEvent142) {
            var n = this.playerStep > 0 ? ",event145=" + this.playerStep : "";
            e += ",event142," + n
        }
        return this.tracker.trackingData.isPreloadingAds && 0 === this.playCounter ? e += ",event126" : this.playCounter > 0 && (e += ",event127"), "" + t + e
    }

    function r() {
        var t = this;
        this.progress = new Map, S.forEach(function(e) {
            return t.progress.set(e, !1)
        })
    }

    function s() {
        window.chartbeatVideoLoaded || (0, y.loadScript)(T, function(t) {}, function(t) {
            console.error(t)
        }), window.chartbeatVideoLoaded = !0
    }

    function l() {
        var t = this;
        if (!this.pulseInterval) {
            var e = function() {
                    t.tracker.send("event400", Object.assign({}, {
                        ytState: t.powa.getStatus().state
                    }))
                },
                n = (0, y.get)(window, "PoWaSettings.analyticsConfig.event400.pingInterval", 6e4);
            e(), this.pulseInterval = setInterval(e, n)
        }
    }

    function u(t, e) {
        var n = this;
        if (!this.powa.getElement().classList.contains("powa-preview") && "live-bar" !== this.powa.getDataset().playerType) {
            "true" !== this.powa.getDataset().event400 || this.pulseInterval || l.call(this);
            for (var i = e > E ? 1 : 2, o = 100 * t / e, r = parseInt(e / 4), s = 0; s < S.length; s++) o - i < S[s] && S[s] < o + i && !this.progress.get(S[s]) && ! function() {
                n.progress.set(S[s], !0);
                var t = n.powa.getStatus(),
                    i = n.powa.getVideoData() || {},
                    o = "live" === i.video_type,
                    l = (0, y.isElementInViewport)(n.el),
                    u = (0, w.pick)(t, ["bitrate", "height", "level", "width"]);
                switch ((0, y.isEmpty)(u) && (u = (0, w.chain)(i.streams).filter(function(e) {
                    return e.url === t.stream
                }).max(function(t) {
                    return t.bitrate
                }).pick(["bitrate", "height", "width"]).value()), S[s]) {
                    case 0:
                        var d = {
                                isVisible: l,
                                pingCount: n.pingCount,
                                prerollAdError: n.prerollAdError,
                                playerCounter: n.playCounter,
                                lastEvent: n.currentEvent
                            },
                            f = g.call(n, d);
                        if (0 == n.playCounter) try {
                            n.videoEl = n.videoEl || n.el.querySelector(".powa-video")
                        } catch (t) {}
                        var h = 0 == n.playCounter ? p.call(n) : {},
                            m = "";
                        n.powaObj.discovery && (m = n.powaObj.discovery.tracking ? "," + n.powaObj.discovery.tracking : "", delete n.powaObj.discovery.tracking), n.playerStep++, n.timeMarkers.event9 = Date.now(), n.playCounter > 0 ? n.tracker.send(a.call(n, "event9,event116=" + parseInt(e) + ",event118" + m), Object.assign({
                            promoType: (0, v.getPromoType)(n.powa)
                        }, d, f, n.tracker.trackingData, v.formatAdMeta.call(n, n.adMeta), c.call(n, n.timeMarkers.event9), h, u)) : o ? n.tracker.send(a.call(n, "event9," + m), Object.assign({
                            promoType: (0, v.getPromoType)(n.powa)
                        }, d, f, v.formatAdMeta.call(n, n.adMeta), n.tracker.trackingData, c.call(n, n.timeMarkers.event9), h)) : n.tracker.send(a.call(n, "event9,event116=" + parseInt(e) + m), Object.assign({
                            promoType: (0, v.getPromoType)(n.powa)
                        }, d, f, v.formatAdMeta.call(n, n.adMeta), n.tracker.trackingData, c.call(n, n.timeMarkers.event9), h, u)), n.currentEvent = "event9", n.timeMarkers = {}, n.prerollAdError = void 0;
                        break;
                    case 25:
                        if (!o) {
                            var b = {
                                isVisible: l
                            };
                            n.tracker.send(a.call(n, "event10,event117=" + r), Object.assign({}, b, g.call(n, b), n.tracker.trackingData, u))
                        }
                        n.playerStep++, n.currentEvent = "event10";
                        break;
                    case 50:
                        if (!o) {
                            var _ = {
                                isVisible: l
                            };
                            n.tracker.send(a.call(n, "event11,event117=" + r), Object.assign({}, _, g.call(n, _), n.tracker.trackingData, u))
                        }
                        n.playerStep++, n.currentEvent = "event11";
                        break;
                    case 75:
                        if (!o) {
                            var A = {
                                isVisible: l
                            };
                            n.tracker.send(a.call(n, "event12,event117=" + r), Object.assign({}, A, g.call(n, A), n.tracker.trackingData, u))
                        }
                        n.playerStep++, n.currentEvent = "event12";
                        break;
                    case 100:
                        n.tracker.send(a.call(n, "event13,event117=" + r), Object.assign({}, {
                            isVisible: l,
                            lastEvent: n.currentEvent
                        }, g.call(n, {
                            isVisible: l
                        }), n.tracker.trackingData, u)), n.playerStep++, n.currentEvent = "event13", n.playCounter++
                }
            }()
        }
    }

    function c(t) {
        var e = {};
        this.timeMarkers.lastEvent ? (e.timeSinceLastEvent = t - this.timeMarkers.lastEvent, this.timeMarkers.lastEvent = t) : this.timeMarkers.lastEvent = t;
        try {
            0 === window.performance.timing.domInteractive ? e.timeSinceDomContentLoaded = 0 : "number" == typeof window.performance.timing.domInteractive && (e.timeSinceDomContentLoaded = Date.now() - window.performance.timing.domInteractive)
        } catch (t) {
            console.warn(t)
        }
        var n = (0, y.getCookie)("RT") || "",
            i = (0, y.getQueryStringParameters)(n);
        e.mpulseId = i.si ? i.si : "undefined", e.controls = !window.PoWaSettings.client.isIE && this.el.hasAttribute("data-custom-ctrls") ? "custom" : "native";
        var o = new Date,
            a = new Date(o);
        o.setUTCHours(0, 0, 0, 0);
        var r = a.getTime() - o.getTime(),
            s = r / 1e3 / 60;
        return e.timeInterval = 5 * Math.floor(s / 5 + 1), this.timeMarkers.event9999 && (e.timeSincePlayerError = t - this.timeMarkers.event9999), this.timeMarkers.event9999_01 && (e.timeSinceVideoTimeout = t - this.timeMarkers.event9999_01), this.timeMarkers.event30 && (e.timeSincePlayerReady = t - this.timeMarkers.event30), this.timeMarkers.event32 && (e.timeSinceAdRequest = t - this.timeMarkers.event32), this.timeMarkers.event33 && (e.timeSinceAdResponse = t - this.timeMarkers.event33), this.timeMarkers.event34 && (e.timeSinceAdSkip = t - this.timeMarkers.event34), this.timeMarkers.event7 && (e.timeSinceAdStart = t - this.timeMarkers.event7), this.timeMarkers.event8 && (e.timeSinceAdEnd = t - this.timeMarkers.event8), this.timeMarkers.event33_1 && (e.timeSinceAdWaiting = t - this.timeMarkers.event33_1), this.timeMarkers.event32_2 && (e.timeSinceAdReady = t - this.timeMarkers.event32_2), this.timeMarkers.event9996_2 && (e.timeSinceNoAdInResponse = t - this.timeMarkers.event9996_2), this.timeMarkers.playerStart && (e.timeSincePlayerStart = t - this.timeMarkers.playerStart), this.timeMarkers.tabVisible && (e.timeSinceTabVisible = t - this.timeMarkers.tabVisible), this.timeMarkers.tabHidden && (e.timeSinceTabHidden = t - this.timeMarkers.tabHidden), (0, y.get)(this, "videoAnalytics.timeMarkers.promoClick") && (e.timeSincePromoClick = t - (0, y.get)(this, "videoAnalytics.timeMarkers.promoClick")), e
    }

    function d(t) {
        "adMute" === t.type ? t.muted || O ? t.muted && !C && (C = !0, this.tracker.send(a.call(this, "event143"))) : (O = !0, this.tracker.send(a.call(this, "event144"))) : this.powa.getStatus().state && "adPlaying" !== this.powa.getStatus().state && (t.muted || x ? t.muted && !D && (D = !0, this.tracker.send(a.call(this, "event128"))) : (x = !0, this.tracker.send(a.call(this, "event73"))))
    }

    function p() {
        function t(t) {
            return t.map(function(t) {
                return {
                    delta: t.delta,
                    event: t.event,
                    time: t.time,
                    timestamp: t.timestamp
                }
            })
        }
        var e = this.powa.getID(),
            n = {};
        try {
            var i = window.powas[e].powaTrack;
            n.powaTrack = JSON.stringify(t(i)), n.stalledCount = i.reduce(function(t, e) {
                return "stalled" === e.event ? t + 1 : t
            }, 0), n.stalledTime = i.reduce(function(t, e) {
                return "stalled" === e.event ? t + e.delta : t
            }, 0), n.mostLatent = i.slice(1 + i.findIndex(function(t) {
                return "promoPlay" === t.event || "autoplay" === t.event
            })).reduce(function(t, e) {
                return e.delta > t.delta ? e : t
            }, {
                event: "null",
                delta: 0
            }).event
        } catch (t) {
            n = {
                parsePoWaTrackError: t
            }
        }
        return n
    }

    function f() {
        var t = this,
            e = !1,
            n = !1,
            i = !1,
            o = !1;
        this.opts.prerollOnly || this.powa.once("start", function(t) {
            s()
        }), this.powa.on("muted", d.bind(this)), this.powa.on("adMute", d.bind(this)), this.powa.on("nextClick", function(e) {
            t.nextClick = !0
        }), this.powa.on("prevClick", function(e) {
            t.prevClick = !0
        }), this.powa.on("time", function(e) {
            e.time > .1 && window.clearInterval(t.pingInterval);
            var n = e.time,
                i = e.duration;
            i && u.call(t, n, i)
        }), this.powa.on("trackProgress", function(e) {
            var n = e.time,
                i = e.duration;
            i && u.call(t, n, i)
        }), this.powa.on("start", function(a) {
            if (window.clearInterval(t.pingInterval), t.adMeta = null, t.adPlayed = null, t.adTimeout = null, t.playerStep = 0, 0 === t.playCounter && !t.opts.prerollOnly) {
                var s = t.powa.getID();
                window.powas && window.powas[s] && (window.powas[s].viewportAutoplayAllowedOnPlayer = t.tracker.trackingData.articleAutoplay), m.WapoVideoTracker.initChartbeatTracking(t.powaObj)
            }
            t.tracker.setComscoreTag(), r.call(t);
            var l = !1;
            t.pingInterval = window.setInterval(function() {
                t.pingCount >= (0, y.get)(window, "PoWaSettings.analyticsConfig.event500.maxRuns", 8) ? (window.clearInterval(t.pingInterval), t.powa.trigger(k.PLAYER_WAITING_ERROR), l || (t.timeMarkers.event9999_01 = Date.now(), t.tracker.send("event9999_01", Object.assign({}, {
                    isVisible: (0, y.isElementInViewport)(t.el)
                }, c.call(t, Date.now()), p.call(t)))), l = !0) : t.tracker.send("event500", Object.assign({}, {
                    isVisible: (0, y.isElementInViewport)(t.el),
                    pingCount: ++t.pingCount
                }))
            }, (0, y.get)(window, "PoWaSettings.analyticsConfig.event500.pingInterval", 2e3)), 1 == _.default.allowedOnPlayer(t.el, t.powa.getVideoData(), t.powa) && t.tracker.send("event142"), t.timeMarkers.playerStart = Date.now(), t.playerStarted = !0, e = !1, n = !1, i = !1, o = !1
        }), this.powa.on("play", function(e) {
            t.tracker.send("onPlay");
            var n = {
                isVisible: (0, y.isElementInViewport)(t.el),
                pingCount: t.pingCount,
                lastEvent: t.currentEvent
            };
            i && !o && (t.tracker.send(a.call(t, "event137"), Object.assign({}, g.call(t, n), v.formatAdMeta.call(t, e.adMeta), n)), o = !0)
        }), this.powa.on("firstFrame", function(e) {
            var n = t.powa.getDataset().playerType;
            if (!n || "live-bar" !== n) {
                var i = {
                    isVisible: (0, y.isElementInViewport)(t.el),
                    pingCount: t.pingCount,
                    lastEvent: t.currentEvent
                };
                t.opts.autoplay ? (t.tracker.send(a.call(t, "event75"), g.call(t, i)), t.trackerEnabled = !1) : e.duration && u.call(t, 0, t.powa.getVideoData().duration / y.ONE_SECOND)
            }
        }), this.powa.on("pause", function(e) {
            t.tracker.send("onPause");
            var n = {
                    isVisible: (0, y.isElementInViewport)(t.el),
                    pingCount: t.pingCount,
                    lastEvent: t.currentEvent
                },
                o = void 0;
            try {
                o = t.powa.getStatus().time
            } catch (t) {
                o = 0
            }!i && o > 0 && (t.tracker.send(a.call(t, "event136"), Object.assign({}, g.call(t, n), v.formatAdMeta.call(t, e.adMeta), n)), i = !0)
        }), this.powa.on("complete", function(e) {
            t.tracker.setComscoreTag(), t.tracker.send("onComplete"), t.nextClick = !1, t.prevClick = !1
        }), this.powa.on("adStart", function(e) {
            window.clearInterval(t.pingInterval);
            var n = void 0;
            try {
                n = t.powa.getStatus().adDuration
            } catch (t) {
                console.error(t)
            }
            if (!(0, v.isBlankAd)(e.adMeta)) {
                t.playerStep++;
                var i = {
                        isVisible: (0, y.isElementInViewport)(t.el),
                        pingCount: t.pingCount,
                        lastEvent: t.currentEvent
                    },
                    o = Date.now();
                t.tracker.send(a.call(t, "event7"), Object.assign({}, g.call(t, i), v.formatAdMeta.call(t, e.adMeta), i, c.call(t, o))), t.currentEvent = "event7", t.tracker.send("adPlay", {
                    adDuration: n
                }), t.timeMarkers.event7 = o
            }
        }), this.powa.on("adImpression", function(e) {
            if (!(0, v.isBlankAd)(e.adMeta)) {
                var n = {
                        isVisible: (0, y.isElementInViewport)(t.el),
                        pingCount: t.pingCount
                    },
                    i = Date.now();
                t.tracker.send(a.call(t, "event7_1"), Object.assign({}, g.call(t, n), v.formatAdMeta.call(t, e.adMeta), c.call(t, i)))
            }
        }), this.powa.on("adClick", function(e) {
            if (!(0, v.isBlankAd)(e.adMeta)) {
                var n = Date.now(),
                    i = e.event && e.event.duration - e.event.remaining;
                t.tracker.send("event7_3", Object.assign({}, {
                    adElapsed: i
                }, g.call(t), v.formatAdMeta.call(t, e.adMeta), c.call(t, n)))
            }
        }), this.powa.on("adComplete", function(e) {
            if (!(0, v.isBlankAd)(e.adMeta)) {
                var n = void 0;
                try {
                    n = t.powa.getStatus().adDuration
                } catch (t) {
                    console.error(t)
                }
                t.playerStep++;
                var i = {
                        isVisible: (0, y.isElementInViewport)(t.el),
                        lastEvent: t.currentEvent
                    },
                    o = Date.now();
                t.tracker.send(a.call(t, "event8"), Object.assign({}, g.call(t, i), i, v.formatAdMeta.call(t, e.adMeta), c.call(t, o))), t.tracker.send("adEnd", {
                    adDuration: n
                }), t.currentEvent = "event8", t.timeMarkers.event8 = o
            }
        }), this.powa.on("fullscreen", function(e) {
            var n = {
                isVisible: (0, y.isElementInViewport)(t.el),
                pingCount: t.pingCount,
                lastEvent: t.currentEvent
            };
            t.tracker.send(a.call(t, "event166"), Object.assign({}, g.call(t, n), n))
        }), this.powa.on("adSkip", function(e) {
            if (!(0, v.isBlankAd)(e.adMeta)) {
                var n = {
                        isVisible: (0, y.isElementInViewport)(t.el),
                        adElapsed: o
                    },
                    i = Date.now(),
                    o = e.event && e.event.duration - e.event.remaining,
                    a = "switchplay-clicked" === e.skipMethod;
                a ? t.tracker.send("event34,event165", Object.assign({}, n, v.formatAdMeta.call(t, e.adMeta), g.call(t, n), c.call(t, i))) : t.tracker.send("event34", Object.assign({}, n, v.formatAdMeta.call(t, e.adMeta), g.call(t, n), c.call(t, i))), t.timeMarkers.event34 = i
            }
        }), this.powa.on("adRequest", function(e) {
            if (!(0, v.isBlankAd)(e.adMeta)) {
                t.adRequestMeta = e.adMeta;
                var n = {
                        isVisible: (0, y.isElementInViewport)(t.el)
                    },
                    i = Date.now();
                t.tracker.send("event32", Object.assign({}, n, v.formatAdMeta.call(t, e.adMeta), g.call(t, n), c.call(t, i))), t.timeMarkers.event32 = i
            }
        }), this.powa.on("adReady", function(e) {
            if (!(0, v.isBlankAd)(e.adMeta)) {
                var n = {
                        isVisible: (0, y.isElementInViewport)(t.el)
                    },
                    i = Date.now();
                t.tracker.send("event32_2", Object.assign({}, n, v.formatAdMeta.call(t, e.adMeta), g.call(t, n), c.call(t, i))), t.timeMarkers.event32_2 = i
            }
        }), this.powa.on("adLoaded", function(e) {
            if (!(0, v.isBlankAd)(e.adMeta)) {
                var n = {
                        isVisible: (0, y.isElementInViewport)(t.el),
                        pingCount: t.pingCount
                    },
                    i = Date.now();
                t.tracker.send("event33", Object.assign({}, n, v.formatAdMeta.call(t, e.adMeta), g.call(t), c.call(t, i))), t.timeMarkers.event33 = i
            }
        }), this.powa.on("adWaiting", function(e) {
            if (!(0, v.isBlankAd)(e.adMeta)) {
                var n = {
                        isVisible: (0, y.isElementInViewport)(t.el),
                        pingCount: t.pingCount
                    },
                    i = Date.now();
                t.tracker.send("event33_1", Object.assign({}, n, v.formatAdMeta.call(t, e.adMeta), g.call(t, n), c.call(t, i))), t.timeMarkers.event33_1 = i
            }
        }), this.powa.on("adRequestTimeout", function(e) {
            if (!(0, v.isBlankAd)(e.adMeta)) {
                var n = 0 == t.playCounter ? p.call(t) : {};
                t.adTimeout = !0;
                var i = {
                        isVisible: (0, y.isElementInViewport)(t.el)
                    },
                    o = Date.now();
                t.tracker.send("event32_1", Object.assign({}, i, v.formatAdMeta.call(t, e.adMeta), g.call(t, i), {
                    powaTrack: n.powaTrack
                }, c.call(t, o)))
            }
        }), this.powa.on("upNextDismissed", function(e) {
            t.tracker.send("event167", Object.assign({}, g.call(t)))
        }), this.powa.on("upNextClicked", function(e) {
            t.tracker.send("event168", Object.assign({}, g.call(t)))
        }), this.powa.on("upNextImpression", function(e) {
            t.tracker.send("event169", Object.assign({}, g.call(t)))
        }), this.powa.on("error", function(e) {
            if (!t.fatalFlags.player) {
                var n = e && e.nonBlocking ? "event9991_04" : t.playerStarted ? t.errorCount++ > 50 ? "event9999_deluge" : "event9999" : "event9999_preload",
                    i = void 0;
                try {
                    i = JSON.stringify(e)
                } catch (t) {}
                var o = void 0;
                try {
                    o = t.el.querySelector("video.powa-video").error.message
                } catch (t) {}
                t.timeMarkers.event9999 = Date.now(), t.tracker.send(n, Object.assign({
                    errorText: i,
                    errorMessage: o,
                    errorType: e && e.type,
                    errorDetails: e && e.type,
                    isVisible: (0, y.isElementInViewport)(t.el),
                    errorCount: t.errorCount,
                    promoType: (0, v.getPromoType)(t.powa)
                }, c.call(t, Date.now()))), e && e.fatal && (t.fatalFlags.player = !0)
            }
        }), this.powa.on("adError", function(e) {
            if (!(0, v.isBlankAd)(e.adMeta)) {
                var n = Date.now();
                t.prerollAdError = e && e.error, e.error && e.error.indexOf("402") > -1 ? t.tracker.send("event9996_1", Object.assign({}, v.formatAdMeta.call(t, e.adMeta), {
                    isVisible: (0, y.isElementInViewport)(t.el),
                    errorText: e && e.error,
                    prerollAdError: t.prerollAdError
                })) : e.error && e.error.indexOf("AdError 303: No Ads VAST response after one or more Wrappers") > -1 ? (t.timeMarkers.event9996_2 = n, t.tracker.send("event9996_2", Object.assign({}, v.formatAdMeta.call(t, e.adMeta), {
                    isVisible: (0, y.isElementInViewport)(t.el),
                    errorText: e && e.error,
                    prerollAdError: t.prerollAdError
                }))) : t.tracker.send("event9996", Object.assign({}, v.formatAdMeta.call(t, e.adMeta), {
                    isVisible: (0, y.isElementInViewport)(t.el),
                    errorText: e && e.error,
                    prerollAdError: t.prerollAdError
                }))
            }
        }), this.powa.on("loaded", function(e) {
            h.call(t)
        }), this.powa.on("adPause", function(n) {
            var i = {
                isVisible: (0, y.isElementInViewport)(t.el),
                pingCount: t.pingCount,
                lastEvent: t.currentEvent
            };
            e || t.tracker.send(a.call(t, "event140"), Object.assign({}, g.call(t), v.formatAdMeta.call(t, n.adMeta), i)), e = !0
        }), this.powa.on("adPlay", function(i) {
            var o = {
                isVisible: (0, y.isElementInViewport)(t.el),
                pingCount: t.pingCount,
                lastEvent: t.currentEvent
            };
            e && !n && t.tracker.send(a.call(t, "event141"), Object.assign({}, g.call(t, o), v.formatAdMeta.call(t, i.adMeta), o)), e && (n = !0)
        }), Array.prototype.forEach.call(this.el.querySelectorAll(".powa-shot-sharing-button"), function(e) {
            e.addEventListener("click", function(n) {
                var i = e.getAttribute("data-social"),
                    o = {
                        isVisible: (0, y.isElementInViewport)(t.el),
                        evtAction: i,
                        evtGroup: "share-posttv",
                        evtModule: "share-overlay"
                    };
                t.tracker.send("event6", Object.assign({}, g.call(t, o), o))
            })
        }), this.powa.on(PoWa.EVENTS.POWA_READY, function(e) {
            try {
                t.currentEvent = "event30", t.tracker.send("event30", Object.assign({}, g.call(t), c.call(t, Date.now()))), t.timeMarkers.event30 = Date.now()
            } catch (t) {
                console.warn(t)
            }
        }), this.powa.once("powaBucket", function(e) {
            if (window.event139Sent) return !0;
            var n = (0, y.get)(window, "PoWaSettings.buckets.promoBucket"),
                i = n.displayName + ":" + n._bucket + ":" + n.getFacet();
            t.timeMarkers.event139 = Date.now(), t.tracker.send("event139", Object.assign({
                bucketData: i
            }, g.call(t))), t.currentEvent = "event139", window.event139Sent = !0
        }), this.el.addEventListener("stickyClose", function(e) {
            t.tracker.send("event129,event148=" + e.detail, g.call(t, {
                stickyEngaged: e.detail,
                sticky: !0
            }))
        }, !1), "undefined" != typeof document.hidden && document.addEventListener("visibilitychange", function() {
            document.hidden ? t.timeMarkers.tabHidden = Date.now() : t.timeMarkers.tabVisible = Date.now()
        }, !1)
    }

    function h() {
        var t = this.powa.getVideoData(),
            e = {
                events: P,
                queue: window.PoWaSettings.queueEvents
            };
        this.opts.prerollOnly ? e.flags = {
            sendToComscore: !1,
            sendToNielsen: !1,
            sendToVideotracker: !1,
            sendToOmniture: !1,
            sendToNewRelic: !1,
            sendToMpulse: !1
        } : this.opts.mpulse && (e.flags = {
            sendToMpulse: !0
        });
        var n = (0, v.getTrackingData)(Object.assign({}, t, {
            el: this.el,
            playCounter: this.playCounter
        }));
        this.tracker ? this.tracker.updateTrackingData(n) : this.tracker = new m.WapoVideoTracker(e, n), this.trackerEnabled = !this.opts.autoplay, this.errorCount = this.errorCount || 0
    }

    function g(t) {
        var e = this.tracker && this.tracker.trackingData || {},
            n = this.powa && this.powa.getVideoData() || {},
            i = this.powa ? this.powa.getStatus() : {},
            o = i.adStatus && i.adStatus.adTagRequest;
        if (void 0 === o) {
            var a = this.powa.getAdTagConfig();
            o = (0, A.getWapoAdTag)(a)
        }
        this.adMeta = (0, y.notEmpty)(this.adMeta) ? this.adMeta : i.adStatus && i.adStatus.adMeta ? i.adStatus.adMeta : null, this.adPlayed = this.adPlayed ? this.adPlayed : "adPlaying" === i.state || null;
        var r = Object.assign({
                adTag: o,
                sticky: this.el.classList.contains("sticky")
            }, t, e, n),
            s = {
                blankAd: (0, v.isBlankAd)(this.adMeta),
                adPlayed: this.adPlayed,
                prerollAdError: this.prerollAdError,
                reason: localStorage.getItem("ptvadsreason"),
                timeout: this.adTimeout
            };
        return (0, v.formatEvars)(r, this.powa, this.playCounter, s)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PoWaAnalyticsWapo = void 0;
    var m = n(130),
        v = n(133),
        w = n(9),
        y = n(8),
        b = n(135),
        _ = i(b),
        A = n(134),
        S = [0, 25, 50, 75, 100],
        E = 120,
        k = {
            PLAYER_WAITING_ERROR: "playerWaitingError"
        },
        T = "https://static.chartbeat.com/js/chartbeat_video.js";
    window.chartbeatVideoLoaded = window.chartbeatVideoLoaded || !1;
    var P = {
            event5_2: {
                name: "Promo Rendered",
                newrelic: !0
            },
            event6: {
                name: "Share Button Clicked",
                videotracker: !0,
                omniture: !0,
                nielsen: !0
            },
            event7: {
                name: "Video Ad Start",
                omniture: !0,
                videotracker: !0,
                nielsen: !0,
                newrelic: !0,
                mpulse: !0
            },
            event7_1: {
                name: "Video Ad Impression",
                videotracker: !0,
                newrelic: !0
            },
            event7_3: {
                name: "Video Ad Click",
                videotracker: !0,
                newrelic: !0
            },
            event8: {
                name: "Video Ad Complete",
                omniture: !0,
                videotracker: !0,
                nielsen: !0,
                newrelic: !0
            },
            event9: {
                name: "Video Start",
                omniture: !0,
                videotracker: !0,
                nielsen: !0,
                newrelic: !0,
                mpulse: !0
            },
            event10: {
                name: "Video 25% complete",
                omniture: !0,
                videotracker: !0
            },
            event11: {
                name: "Video 50% complete",
                omniture: !0,
                videotracker: !0
            },
            event12: {
                name: "Video 75% complete",
                omniture: !0,
                videotracker: !0
            },
            event13: {
                name: "Video Complete",
                omniture: !0,
                videotracker: !0
            },
            event30: {
                name: "Player Ready",
                newrelic: !0,
                videotracker: !0
            },
            event32: {
                name: "Ad Request Made",
                newrelic: !0,
                videotracker: !0
            },
            event32_1: {
                name: "Ad Request Timeout",
                newrelic: !0,
                videotracker: !0,
                mpulse: !0
            },
            event32_2: {
                name: "Ad Ready",
                newrelic: !0,
                videotracker: !0
            },
            event33: {
                name: "Ad Tag Received",
                newrelic: !0,
                videotracker: !0
            },
            event33_1: {
                name: "Waiting For Ad Start",
                newrelic: !0,
                videotracker: !0
            },
            event34: {
                name: "Skip Ad Button Clicked",
                newrelic: !0,
                videotracker: !0,
                omniture: !0,
                nielsen: !0
            },
            event73: {
                name: "Unmute",
                videotracker: !0,
                newrelic: !0,
                omniture: !0
            },
            event128: {
                name: "Mute",
                videotracker: !0,
                newrelic: !0,
                omniture: !0
            },
            event75: {
                name: "Autoplay",
                omniture: !0,
                newrelic: !0,
                videotracker: !0
            },
            event129: {
                name: "Sticky Player Close",
                omniture: !0
            },
            event136: {
                name: "User Pause Video",
                omniture: !0
            },
            event137: {
                name: "User Unpause Video",
                omniture: !0
            },
            event139: {
                name: "Bucket Allocated",
                omniture: !0,
                videotracker: !0
            },
            event140: {
                name: "Pause Preroll",
                omniture: !0
            },
            event141: {
                name: "Unpause Preroll",
                omniture: !0
            },
            event142: {
                name: "Autoplay Article",
                newrelic: !0,
                videotracker: !0
            },
            event143: {
                name: "Mute Preroll",
                omniture: !0
            },
            event144: {
                name: "Unmute Preroll",
                omniture: !0
            },
            event165: {
                name: "Switchplay Button Clicked",
                newrelic: !0,
                videotracker: !0,
                omniture: !0
            },
            event166: {
                name: "Fullscreen Engaged",
                omniture: !0,
                newrelic: !0,
                videotracker: !0
            },
            event400: {
                name: "YT State",
                videotracker: !0
            },
            event167: {
                name: "Up Next Button Is Dismissed",
                newrelic: !0,
                omniture: !0
            },
            event168: {
                name: "Up Next Button Clicked",
                newrelic: !0,
                omniture: !0
            },
            event169: {
                name: "Up Next Button Shown",
                newrelic: !0,
                omniture: !0
            },
            event500: {
                name: "Player Waiting",
                videotracker: !0
            },
            event9996: {
                name: "Video ad error",
                videotracker: !0,
                newrelic: !0
            },
            event9996_1: {
                name: "Ad Timeout",
                videotracker: !0,
                newrelic: !0
            },
            event9996_2: {
                name: "No Ads in response",
                videotracker: !0,
                newrelic: !0
            },
            event999: {
                name: "Cannot retrieve videoData",
                videotracker: !0
            },
            event9990: {
                name: "Playback timeout",
                videotracker: !0
            },
            event9991_01: {
                name: "Error loading plugin",
                videotracker: !0
            },
            event9991_02: {
                name: "Error loading skin",
                videotracker: !0
            },
            event9991_03: {
                name: "Could not load plugin.  File not found",
                videotracker: !0
            },
            event9993: {
                name: "Player buffered",
                videotracker: !0
            },
            event9992: {
                name: "Player buffering",
                videotracker: !0
            },
            event9995: {
                name: "Missing streams",
                videotracker: !0
            },
            event9994: {
                name: "Setup error",
                videotracker: !0,
                newrelic: !0
            },
            event9995_02: {
                name: "Video is using youtube",
                videotracker: !0
            },
            event9999: {
                name: "Video Error",
                videotracker: !0,
                newrelic: !0,
                mpulse: !0
            },
            event9999_preload: {
                name: "Video Error before start",
                videotracker: !0,
                newrelic: !0,
                mpulse: !0
            },
            event9999_deluge: {
                name: "Video Error deluge",
                videotracker: !0,
                newrelic: !0
            },
            event9999_01: {
                name: "Video Timeout",
                videotracker: !0,
                newrelic: !0,
                mpulse: !0
            },
            event9991_04: {
                name: "Non-blocking error",
                videotracker: !0
            },
            event126: {
                name: "Prefetch Flag",
                videotracker: !0,
                newrelic: !0,
                omniture: !0
            },
            event127: {
                name: "Playthrough Flag",
                videotracker: !0,
                omniture: !0
            },
            onPause: {
                name: "stop",
                comscore: !0
            },
            adPlay: {
                name: "adPlay",
                comscore: !0
            },
            adEnd: {
                name: "stop",
                comscore: !0
            },
            onPlay: {
                name: "play",
                comscore: !0
            },
            onComplete: {
                name: "stop",
                comscore: !0
            }
        },
        x = !1,
        D = !1,
        O = !1,
        C = !1;
    e.PoWaAnalyticsWapo = function t(e, n) {
        var i = this;
        if (o(this, t), !e) throw "No PoWaDrive given";
        var a = e.getID();
        if (!window.powas && !window.powas[a]) throw "No PoWa exists with id " + a;
        this.opts = n || {}, this.progress, this.el = document.getElementById(a), this.videoEl, this.playerStep, this.powa = e, this.powaObj = window.powas[a], this.playCounter = 0, this.timeMarkers = {}, this.fatalFlags = {
            player: !1,
            ads: !1
        }, this.adMeta, this.adPlayed, this.adTimeout, this.shouldSendEvent142 = 1 == _.default.allowedOnPlayer(this.el, this.powa.getVideoData(), this.powa), h.call(this), this.pingInterval, this.pingCount = 0;
        try {
            this.tracker.send("event5_2", Object.assign({
                width: this.el.offsetWidth
            }, c.call(this, Date.now())))
        } catch (t) {
            console.warn(t)
        }
        f.call(this), this.el.va ? this.videoAnalytics = this.el.va : e.once("videoAnalyticsReady", function(t) {
            i.videoAnalytics = t.va
        })
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a() {
        for (; this.queue.length;) this.trackFromQueue(this.queue.shift())
    }

    function r() {
        var t = this;
        this.trackingInterval && window.clearInterval(this.trackingInterval), this.queue = [], this.trackingInterval = window.setInterval(function() {
            a.call(t)
        }, l.TRACKER_INTERVAL)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.WapoVideoTracker = void 0;
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        l = n(131),
        u = n(8),
        c = n(132),
        d = i(c);
    e.WapoVideoTracker = function() {
        function t(e, n) {
            var i = this;
            o(this, t), this.queueFlag = e.queue || !1, this.options = Object.assign({}, l.DEFAULT_OPTIONS, e), this.options.flags = Object.assign({}, l.DEFAULT_FLAGS, e.flags), this.trackingData = Object.assign({}, l.DEFAULT_TRACKINGDATA, n), this.options.flags.sendToMpulse && (this.mpulse = new d.default), this.queueFlag && (r.call(this), window.addEventListener("beforeunload", function(t) {
                a.call(i)
            })), this.setComscoreTag(), this.debugTracking = "1" === (0, u.getQueryStringParameters)().wpvDebugTracking || "true" === (0, u.getQueryStringParameters)().wpvDebugTracking
        }
        return s(t, null, [{
            key: "initChartbeatTracking",
            value: function(t) {
                var e = window._cbv || (window._cbv = []);
                window._sf_async_config && (window._sf_async_config.autoDetect = !1), e.push(t)
            }
        }]), s(t, [{
            key: "canOmniture",
            value: function() {
                return window.s && "function" == typeof window.s.sendDataToOmniture
            }
        }, {
            key: "setComscoreTag",
            value: function() {
                window.ns_ && "function" == typeof window.ns_.StreamingTag && (this.comscoreTag = new window.ns_.StreamingTag({
                    customerC2: "3005617"
                }))
            }
        }, {
            key: "updateTrackingData",
            value: function(t) {
                Object.assign(this.trackingData, t)
            }
        }, {
            key: "trackFromQueue",
            value: function(t) {
                this.track(t.config, t.event, t.e, t.myTrackingData)
            }
        }, {
            key: "track",
            value: function(t, e, n, i) {
                t.omniture === !0 && this.options.flags.sendToOmniture && this.sendDataToOmniture(t.name, e, i), t.videotracker === !0 && this.options.flags.sendToVideotracker && this.sendDataToVideotracker(t.name, n, i), t.comscore === !0 && this.options.flags.sendToComscore && this.sendDataToComscore(t.name, n, i), t.nielsen === !0 && this.options.flags.sendToNielsen && this.sendDataToNielsen(t.name, n, i), t.newrelic === !0 && this.options.flags.sendToNewRelic && this.sendDataToNewrelic(t.name, n, i), t.mpulse === !0 && this.options.flags.sendToMpulse && this.sendDataToMpulse(t.name, n, i)
            }
        }, {
            key: "enqueue",
            value: function(t, e, n, i) {
                this.queue.push({
                    config: t,
                    event: e,
                    e: n,
                    myTrackingData: i
                })
            }
        }, {
            key: "send",
            value: function(t, e) {
                var n = "string" == typeof t ? t.split(",")[0] : t,
                    i = this.options.events[n] || {},
                    o = Object.assign({}, this.trackingData, e, {
                        evtTime: Date.now()
                    });
                this.debugTracking && console.debug("debug send", i, t, n, e), this.queueFlag ? this.enqueue(i, t, n, o) : this.track(i, t, n, o)
            }
        }, {
            key: "sendDataToOmniture",
            value: function(t, e, n) {
                if (!this.canOmniture()) return !1;
                var i = Object.assign({}, this.getEvarsFromTrackingData(this.trackingData), n);
                window.s.sendDataToOmniture(t, e, i, {
                    wait: !0
                })
            }
        }, {
            key: "getEvarsFromTrackingData",
            value: function(t) {
                var e = {},
                    n = Object.keys(l.OMNITURE_EVARS);
                return n.forEach(function(n) {
                    var i = l.OMNITURE_EVARS[n];
                    t[i] && (e[n] = t[i])
                }), Object.assign({}, l.OMNITURE_EVARS, e)
            }
        }, {
            key: "sendDataToVideotracker",
            value: function(t, e, n) {
                var i = Object.assign({}, n, {
                    evtName: t,
                    evtType: "string" == typeof e ? e : e[0] || ""
                });
                i.hidden = document.hidden, i.visibilityState = document.visibilityState;
                var o = window.URLSearchParams ? new URLSearchParams("") : null;
                Object.keys(i).forEach(function(t, e) {
                    /mediaUrl|adMeta|lastEvent|powaTrack/.test(t) ? delete i[t] : o && o.append(t, i[t])
                }), navigator.sendBeacon && o ? navigator.sendBeacon(l.VIDEOTRACKER_URL + "?" + o.toString()) : (0, u.getJSONP)({
                    url: l.VIDEOTRACKER_URL,
                    resolve: function(t) {
                        t.length || console.error("Could not send to video tracker")
                    },
                    reject: function(t) {
                        return console.error("Could not send to video tracker")
                    },
                    callbackParam: "cbVideoTracker",
                    id: "tracker-" + Date.now(),
                    data: i
                })
            }
        }, {
            key: "sendDataToComscore",
            value: function(t, e, n) {
                function i() {
                    return {
                        ns_st_ci: n.videoId || "*null",
                        ns_st_cl: n.durationInSeconds * l.ONE_SECOND || "*null",
                        ns_st_st: "*null",
                        ns_st_pu: "*null",
                        ns_st_pr: "*null",
                        ns_st_ep: "*null",
                        ns_st_sn: "*null",
                        ns_st_en: "*null",
                        ns_st_ge: "*null",
                        ns_st_ti: "*null",
                        ns_st_ia: "*null",
                        ns_st_ce: "*null",
                        ns_st_ddt: "*null",
                        ns_st_tdt: "*null",
                        c3: "*null",
                        c4: "*null",
                        c6: "*null"
                    }
                }

                function o() {
                    return {
                        ns_st_cl: n.adDuration * l.ONE_SECOND || "*null"
                    }
                }
                if (window.ns_ && "function" == typeof window.ns_.StreamingTag) switch (this.comscoreTag || (this.comscoreTag = this.setComscoreTag()), t) {
                    case "play":
                        this.comscoreTag.playVideoContentPart(i());
                        break;
                    case "adPlay":
                        this.comscoreTag.playVideoAdvertisement(o());
                        break;
                    case "stop":
                        this.comscoreTag.stop()
                }
            }
        }, {
            key: "sendDataToNielsen",
            value: function(t, e, n) {
                if ("event9" === e) {
                    var i = "ci=us-904793",
                        o = "&c6=vc,b01",
                        a = "&cc=1",
                        r = "&rnd=" + Math.ceil(1e9 * Math.random()),
                        s = "&tl=dav0-" + encodeURIComponent(n.title || ""),
                        l = "&cg=" + encodeURIComponent(n.category || ""),
                        u = "//secure-us.imrworldwide.com/cgi-bin/m?" + i + o + a + r + s + l,
                        c = new Image;
                    c.src = u
                }
            }
        }, {
            key: "sendDataToNewrelic",
            value: function(t, e, n) {
                if (window.newrelic && "function" == typeof window.newrelic.addPageAction) {
                    var i = Object.assign({}, n, {
                        evtType: "string" == typeof e ? e : e[0] || ""
                    });
                    i.hidden = document.hidden, i.visibilityState = document.visibilityState, window.newrelic.addPageAction(t, i)
                }
            }
        }, {
            key: "sendDataToMpulse",
            value: function(t, e, n) {
                if (!window.BOOMR || n.playCounter > 0) return void(this.debugTracking && console.debug("No BOOMR on page or playthrough video"));
                this.debugTracking && console.debug("Add event to mpulse", e, n);
                var i = {},
                    o = void 0;
                switch (e) {
                    case "event9":
                        o = "videoStart";
                        break;
                    case "event7":
                        o = "videoAdStart";
                        break;
                    case "event32_1":
                        o = "adReqTimeout";
                        break;
                    case "event9999_01":
                        o = "videoTimeout";
                        break;
                    case "event125":
                        o = "promoClick";
                        break;
                    case "event9999":
                        o = "videoError";
                        break;
                    case "event9999_preload":
                        o = "videoErrorPreload"
                }
                switch (o) {
                    case "promoClick":
                        i[o] = n.timeSinceDomContentLoaded || 0;
                        break;
                    case "videoStart":
                        i[o] = (n.timeSinceAdEnd ? n.timeSinceAdEnd : n.timeSincePromoClick) || 0;
                        break;
                    case "videoError":
                        i[o] = n.timeSincePlayerStart || 0;
                        break;
                    case "videoErrorPreload":
                        i[o] = n.timeSincePlayerReady || 0;
                        break;
                    default:
                        i[o] = n.timeSincePromoClick || 0
                }
                this.mpulse.addEvent(n.videoId, i, n)
            }
        }]), t
    }()
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.VIDEOTRACKER_URL = "//videotracker.washingtonpost.com/index.html", e.ONE_SECOND = 1e3, e.DEFAULT_OPTIONS = {
        events: {}
    }, e.DEFAULT_FLAGS = {
        sendToComscore: !0,
        sendToNielsen: !0,
        sendToVideotracker: !0,
        sendToOmniture: !0,
        sendToNewRelic: !0,
        sendToMpulse: !1
    }, e.DEFAULT_TRACKINGDATA = {
        page: void 0,
        channel: void 0,
        title: void 0,
        type: void 0,
        adDuration: void 0,
        playerType: void 0
    }, e.OMNITURE_EVARS = {
        eVar8: "producer",
        eVar12: "videoId",
        eVar13: "title",
        eVar17: "videoType",
        eVar42: "videoSource",
        eVar47: "subsection",
        eVar49: "playerType",
        eVar58: "washingtonpost.com"
    }, e.MPULSE_INTERVAL = 15e3, e.TRACKER_INTERVAL = 15e3, e.MPULSE_FILTERS = ["nthVideoOnPage", "playerType", "templateName", "eVar48", "timeInterval", "cdn", "streamType"]
}, function(t, e, n) {
    "use strict";

    function i(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
        return Array.from(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a() {
        var t = this;
        window.mpulseInterval = window.setInterval(function() {
            Object.keys(window.mpulseEvents).forEach(function(e) {
                t.setDimensionsByUuid(e);
                var n = t.popEventsForUuid(e);
                if (window.BOOMR && window.BOOMR.sendTimers && window.BOOMR.sendMetrics && n.length) {
                    console.debug("Sending mpulse events", e, n);
                    var i = t.formatTimersToSend(n);
                    window.BOOMR.sendTimers(i);
                    var o = t.formatMetricsToSend(n);
                    window.BOOMR.sendMetrics(o)
                }
            })
        }, l.MPULSE_INTERVAL)
    }

    function r(t, e) {
        return "templateName" === t && e.indexOf("article") > -1 ? e : "eVar48" === t ? e.split(":").pop(1) : e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        l = n(131),
        u = function() {
            function t() {
                o(this, t), window.mpulseEvents = window.mpulseEvents || {}, !window.mpulseInterval && a.call(this)
            }
            return s(t, [{
                key: "createUuid",
                value: function(t, e) {
                    return window.mpulseEvents[t] = {}, window.mpulseEvents[t].params = e || {}, window.mpulseEvents[t].eventsWaiting = [], window.mpulseEvents[t]
                }
            }, {
                key: "getByUuid",
                value: function(t) {
                    return window.mpulseEvents[t] ? window.mpulseEvents[t] : null
                }
            }, {
                key: "addEvent",
                value: function(t, e, n) {
                    var i = this.getByUuid(t);
                    i ? i.params = n || {} : i = this.createUuid(t, n), i && i.eventsWaiting.push(e)
                }
            }, {
                key: "formatTimersToSend",
                value: function(t) {
                    return Object.assign.apply(Object, [{}].concat(i(t)))
                }
            }, {
                key: "formatMetricsToSend",
                value: function(t) {
                    var e = {};
                    return t.forEach(function(t) {
                        Object.keys(t).forEach(function(t) {
                            e[t] = 1
                        })
                    }), e
                }
            }, {
                key: "popEventsForUuid",
                value: function(t) {
                    var e = this.getByUuid(t);
                    if (e && e.eventsWaiting) {
                        var n = e.eventsWaiting;
                        return e.eventsWaiting = [], n
                    }
                    return null
                }
            }, {
                key: "setDimensionsByParams",
                value: function(t) {
                    l.MPULSE_FILTERS.forEach(function(e) {
                        var n = e;
                        switch (e) {
                            case "templateName":
                                n = "template";
                                break;
                            case "eVar48":
                                n = "adState"
                        }
                        window["mpulseVideo_" + n] = t[e] || 0 == t[e] ? r(e, t[e]) : "undefined"
                    })
                }
            }, {
                key: "setDimensionsByUuid",
                value: function(t) {
                    var e = this.getByUuid(t);
                    e && e.params && this.setDimensionsByParams(e.params)
                }
            }]), t
        }();
    e.default = u
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t) {
        return t.isChrome ? "chrome" : t.isSafari ? "safari" : t.isSilk ? "silk" : t.isIE ? "ie" : t.isFirefox ? "firefox" : t.isAndroindBrowser ? "android" : t.isSamsungBrowser ? "samsung" : ""
    }

    function a(t) {
        return t.isAndroid ? "android" : t.isKindle ? "kindle" : t.isMac ? "mac" : t.isLinux ? "linux" : t.isIOS ? "ios" : t.isWindows ? "windows" : t.isChromeOs ? "chromeOS" : ""
    }

    function r(t) {
        var e = t || "16:9",
            n = e.split(":");
        return n.length > 1 && parseInt(n[0]) < parseInt(n[1]) ? "vertical" : "horizontal"
    }

    function s(t) {
        var e = void 0;
        try {
            var n = window != window.parent ? window.parent : window,
                i = t.getBoundingClientRect(),
                o = n.pageYOffset || document.documentElement.scrollTop;
            e = i.top + o
        } catch (t) {}
        return e
    }

    function l() {
        return "amp" === L && /freshcontent=1/.test(document.referrer) ? "ampfresh" : "amp" === L ? "amphtml" : L ? L : window.self === window.top && document.domain.indexOf("washingtonpost.com") > -1 ? "www.washingtonpost.com" : window.self !== window.top && "document.domain" == document.domain && document.domain === window.top.document.domain ? "www.washingtonpost.com" : void 0;
    }

    function u(t, e) {
        var n = "The Washington Post";
        return e === n && t ? "editors credit" : "None"
    }

    function c(t, e) {
        for (var n = t.element, i = (0, O.get)(window, "wp_meta_data.trackInlineElements") ? "imp-enabled:" : ""; n && n !== document.body;)
            if (n = n.parentElement, n && n.classList.contains(e)) return "" + i + n.getAttribute("data-elm-loc")
    }

    function d(t, e, n) {
        var i = new Date(e).toLocaleDateString("en-US"),
            o = t ? t.toLowerCase() + ":" : "";
        return o + "video - " + i + " - " + n
    }

    function p() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "powaBoot.js";
        return document.querySelector('script[src*="' + t + '"]')
    }

    function f(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "powaBoot.js",
            n = t && t.src ? t.src.toLowerCase() : "",
            i = n ? n.split("//")[1].split("/").slice(1) : [],
            o = i.reduce(function(t, n, i) {
                return n.indexOf(e.toLowerCase()) > -1 ? i : t
            }, 0);
        return 0 === o ? "prod" : "js" === i[o - 1] ? "local" : i[o - 1]
    }

    function h(t) {
        var e = t && t.src ? t.src.toLowerCase() : "",
            n = (0, O.getQueryStringParameters)(e && e.split("?")[1] ? e.split("?")[1] : "");
        return n._ ? n._ : "none"
    }

    function g(t) {
        return t ? t.getAttribute("data-loaded-by") : null
    }

    function m(t) {
        if (t) {
            if (/akamai/.test(t)) return "akamai";
            if (/posttv\.com|cloudfront.net/.test(t)) return "cloudfront"
        }
        return (0, O.get)(window, "PoWaSettings.akamaiBucket") && (0, O.get)(window, "PoWaSettings.akamaiBucket").in() ? "akamai" : "cloudfront"
    }

    function v(t) {
        var e = window.powas[t],
            n = e.powa.getStatus().stream || "";
        return n.split(".").pop()
    }

    function w(t) {
        var e = window.powas[t],
            n = e.powa.getStatus().stream || "";
        return n.split("/")[2]
    }

    function y(t, e) {
        if (window != window.parent) return null;
        var n = !(!t || !t.isVisible),
            i = "";
        return "undefined" != typeof t.nthVideoOnPage && "undefined" != typeof t.offsetTop && (i += t.nthVideoOnPage + ":" + Math.floor(t.offsetTop), i += t.sticky || t.stickyEngaged ? ":sticky" : n ? ":inview" : ":notinview"), i
    }

    function b() {
        return (0, O.isEmpty)(window.PoWaSettings.autoplayDetection) ? "na" : window.PoWaSettings.autoplayDetection && (window.PoWaSettings.autoplayDetection.allowed || window.PoWaSettings.autoplayDetection.mutedAllowed) ? "true" : "false"
    }

    function _(t) {
        var e = (0, O.get)(window, "PoWaSettings.buckets[" + t + "]");
        if (!e) return "";
        var n = t,
            i = e._bucket,
            o = e.getFacet() || "false",
            a = e.getPrefix();
        return n + ":" + i + ":" + o + ":" + a
    }

    function A(t) {
        var e = new Date(t);
        return e.getTime()
    }

    function S() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = {},
            n = p();
        try {
            var i = window.PoWaSettings.client,
                u = a(i),
                c = i.isMobile ? "mobile" : i.isTablet ? "tablet" : "desktop";
            e = Object.assign(e, {
                browser: o(i),
                browserVersion: i.version,
                os: u,
                webview: i.isWebview,
                deviceType: c
            })
        } catch (t) {
            console.warn("Error when accessing window.PoWaSettings", t)
        }
        try {
            e = Object.assign(e, {
                shape: r(t.el.getAttribute("data-aspect-ratio")),
                timeoutSkip: 1 == t.el.getAttribute("data-ad-timed-out"),
                autorun: !!t.el.getAttribute("data-autorun"),
                nthVideoOnPage: parseInt(t.el.getAttribute("data-nth-video-on-page")),
                offsetTop: s(t.el),
                sticky: !!t.el.classList.contains("wpv-sticky-engaged"),
                isPreloadingAds: "1" === t.el.getAttribute("data-autoinit-ads") || "true" === t.el.getAttribute("data-autoinit-ads"),
                initOnScroll: "true" === t.el.dataset.initOnScroll,
                loadedBy: t.el.dataset.loadedBy,
                loadedByReason: t.el.dataset.loadedByReason
            })
        } catch (t) {
            console.warn("Error when attempting to grab root powa element", t)
        }
        var d = window; //!= window.parent ? window.parent : window; // see if iframe
        if ("undefined" != typeof d.s) try {
            e = Object.assign(e, {
                page: d.s.pageName,
                channel: d.s.channel,
                type: d.s.prop3
            })
        } catch (t) {
            console.warn("Error when accessing window.s", t)
        }
        try {
            var y = window.powas[t.el.id].powa,
                b = y.getStatus(),
                _ = N.default.allowedOnPlayer(t.el, t, y);
            e = Object.assign(e, {
                adDuration: b.adDuration ? b.adDuration : void 0,
                articleAutoplay: _
            })
        } catch (t) {
            console.warn("Error when accessing player")
        }
        return Object.assign(e, {
            vendor: "PoWa",
            title: t.headlines && t.headlines.basic ? t.headlines.basic : "",
            videoId: t._id || "",
            videoName: t.headlines && t.headlines.basic ? t.headlines.basic : "",
            videoType: "live" === t.video_type ? "livestream" : "video",
            videoSource: t.source && t.source.name || "",
            dateFirstPublished: A(t.first_publish_date),
            dateLastPublished: A(t.last_updated_date),
            creativeType: "",
            subsection: t.additional_properties && t.additional_properties.subsection ? t.additional_properties.subsection : "",
            url: window.location.href.split("?")[0],
            urlQueryString: window.location.search.split("?")[1],
            urlHash: window.location.hash.split("#")[1],
            HTTP_REFERER: document.referrer,
            playerType: window.powas[t.el.id].powa.getDataset().playerType,
            xWpSplit: (0, O.getCookie)("X-WP-Split") || "",
            isSignedIn: 1 == (0, O.getCookie)("rplsb"),
            durationInSeconds: t.duration ? t.duration / 1e3 : 0,
            embedContext: L,
            site: l(),
            isIframe: window.PoWaSettings.client.isIframe,
            coastguard: window.coastguard ? 1 : 0,
            templateName: window.wp_pb && window.wp_pb.pageName || "",
            playCounter: t.playCounter,
            haveNewRelic: "object" === D(window.newrelic),
            ptvenv: f(n),
            cachetoken: h(n),
            powaLoadedVia: g(n),
            powaVersion: window.PoWa && window.PoWa.VERSION,
            powaBuild: window.PoWa && window.PoWa.BUILD,
            streamType: v(t.el.id),
            streamDomain: w(t.el.id),
            streamName: (0, O.get)(t, "additional_properties.streamName"),
            cdn: m(w(t.el.id)),
            akamaiUploaded: (0, O.get)(t, "additional_properties.akamaiUploaded", !1)
        }), Object.keys(e).forEach(function(t, n) {
            null !== e[t] && void 0 !== e[t] && "" !== e[t] || delete e[t]
        }), e
    }

    function E(t) {
        function e() {
            var t = n.adWrapperCreativeIds || [],
                e = n.creativeId || "";
            return t.push(e), t.filter(function(t) {
                return !!t
            }).join(",")
        }
        var n = t || {};
        return {
            vpaid: n.vpaid,
            numberOfRedirects: n.adWrapperIds ? n.adWrapperIds.length : "",
            adTimeoutLength: n.adTimeoutLength || "",
            adId: n.adId || "",
            adQueryId: n.adQueryId || "",
            creativeId: e(),
            title: n.title || "",
            description: n.description || "",
            mediaUrl: n.mediaUrl,
            adSystem: n.adSystem || "",
            adMeta: JSON.stringify(n),
            isPreloadingAd: n.isPreloading,
            adWrapperSystems: (0, O.get)(n, "adWrapperSystems", []).join(",")
        }
    }

    function k(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = arguments[3],
            o = arguments[4],
            a = arguments[5],
            r = "";
        return o && (r += Math.round(o) + ":"), r += "undefined" != typeof t.adTag ? "" === t.adTag ? "noad" : i && "undefined" != typeof a && a < 1 ? "prefetched" : "notfetched" : "undefined", r += n.blankAd ? ":reqblank" : n.adPlayed ? ":reqshow" : n.prerollAdError ? ":error" : e && e.element && t && !(0, I.getAdAllowed)(e.element, t) ? ":noreq" : n.timeout ? ":reqTimeout" : ":undefined"
    }

    function T(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            o = {},
            a = "",
            r = "";
        r = e && e.getStatus().adDuration;
        try {
            a = t.credits.by[0].name
        } catch (t) {}
        if (!a) try {
            a = t.additional_properties.lastPublishedBy.name + " " + t.additional_properties.lastPublishedBy.lastname
        } catch (t) {}
        var s = d(t.subsection, t.dateLastPublished, t.title);
        return Object.assign({}, o, {
            eVar5: _("promoBucket"),
            eVar8: a,
            eVar13: s,
            eVar36: y(t, e),
            eVar37: parseInt(t.duration / C.ONE_SECOND) + ":" + t.shape,
            eVar41: t.additional_properties && t.additional_properties.videoCategory || "",
            eVar43: u(a, t.videoSource),
            eVar44: t.os + " " + t.browser + " " + t.browserVersion,
            eVar48: k(t, e, i, t.isPreloadingAds, r, n),
            eVar48Debug: !!e + ", " + (e && !!e.player) + ", " + (e && e.player && D(e.player.adTag)),
            eVar49: t.playerType,
            eVar46: b(),
            eVar50: "powa:html5",
            eVar56: c(e, "inline-video"),
            eVar58: window.self !== window.top ? l() : "",
            prop50: c(e, "inline-video")
        })
    }

    function P() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = ["715998959", "138210079292", "716945960", "138228291976", "138260680661"];
        return t && "string" == typeof t.creativeId ? e.includes(t.creativeId) : null
    }

    function x(t) {
        var e = void 0;
        try {
            e = t.element.querySelector(".powa-shot-image").getAttribute("data-promo-type")
        } catch (t) {}
        return e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.embedContext = void 0;
    var D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.getTrackingData = S, e.formatAdMeta = E, e.formatEvars = T, e.isBlankAd = P, e.getPromoType = x;
    var O = n(8),
        C = n(131),
        I = n(134),
        M = n(135),
        N = i(M),
        L = e.embedContext = function() {
            return window.wp_meta_data && window.wp_meta_data.isPWA === !0 ? "pwa" : "pwa" === window.wp_site ? "pwa" : /^(fbInstant|amp|pwa)$/.test((0, O.getQueryStringParameters)().embedContext) ? (0, O.getQueryStringParameters)().embedContext.toLowerCase() : ""
        }()
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a() {
        var t = 0;
        try {
            t = parseInt(localStorage.getItem("videoplays"))
        } catch (t) {
            console.error(t)
        }
        return isNaN(t) ? 0 : t
    }

    function r() {
        var t = a();
        return t % 1 === 0
    }

    function s(t) {
        var e = (0, h.getEmbedDomain)(),
            n = (0, h.getEmbedHostname)();
        return !!/washingtonpost\.com|localhost|thelily\.com|arcpublishing\.com|wpprivate\.com/.test(e) || (!!/www-washingtonpost-com\.cdn\.ampproject\.org|wpit\.nile\.works/.test(n) || (0, h.get)(t, "additional_properties.advertising.allowPrerollOnDomain") === !0)
    }

    function l(t) {
        console.debug("[shouldPlayAd]", t);
        try {
            localStorage.setItem("ptvadsreason", t)
        } catch (t) {
            console.error(t)
        }
    }

    function u(t) {
        var e = document.getElementById(t.id),
            n = t.videoData,
            i = "1" === e.getAttribute("data-preroll-only"),
            o = e.adSettings || {};
        return PoWaSettings.queryStringObj.adSetZone ? PoWaSettings.queryStringObj.adSetZone : y ? b : i && o.adSetZone ? o.adSetZone : n.additional_properties.videoAdZone
    }

    function c(t) {
        var e = a(),
            n = document.getElementById(t.id),
            i = t.videoData,
            o = "1" === n.getAttribute("data-preroll-only"),
            c = "1" === n.getAttribute("data-skip-ad");
        if (c) return "";
        var d = (0, h.get)(window, "powas[" + t.id + "].powa"),
            p = d.getDataset(),
            f = n.offsetWidth,
            g = n.offsetHeight,
            w = m.default.allowedOnPlayer(n, i, d),
            y = void 0;
        w !== !0 && w !== !1 || (y = m.default.isSocialMatch() ? "social" : m.default.isSearchMatch() ? "search" : "");
        try {
            if (PoWaSettings.queryStringObj.hasOwnProperty("bypassBlockPreroll") === !1 && "function" == typeof window.blockPreroll && window.blockPreroll(i) === !0) return l("false, blocked by blockPreroll()"), ""
        } catch (t) {
            console.error(t)
        }
        if ("block" === v) return l("false, ptvads block", this), "";
        var b = window.wp_meta_data && window.wp_meta_data.clavis && Array.isArray(window.wp_meta_data.clavis.keywords) ? window.wp_meta_data.clavis.keywords : void 0,
            A = i && i.streams && i.streams[0] ? i.streams[0].height / i.streams[0].width : .5625;
        if (PoWaSettings.queryStringObj.adTag) return l("true, adTag querystring param"), decodeURIComponent(PoWaSettings.queryStringObj.adTag);
        if (o) {
            var S = n.adSettings || {};
            S.articleAutoplay = !1, S.adSetZone = u(t), b && (S.haystack = S.haystack || [], S.haystack.push(b)), S.aspectRatio = A, S.playerWidth = f, S.playerHeight = g, S.muted = t.muted, S.embedVidPos = p.nthVideoOnPage;
            var E = new _(S).getAdTagUrl();
            return l("true, is preroll plugin", {
                adTagUrl: E
            }), E
        }
        if ((0, h.get)(i, "additional_properties.playVideoAds") === !1) return l("false, disabled in data"), "";
        if (!s(i)) return l("false, disabled in advertising"), "";
        var k = (0, h.get)(t, "settings.adTimeouts.requestAdsTimeout") ? (0, h.get)(t, "settings.adTimeouts.requestAdsTimeout") : t.isPreloadingAds ? PoWaSettings.advertising.prefetchAdTimeouts.requestAdsTimeout : PoWaSettings.advertising.adTimeouts.requestAdsTimeout,
            T = u(t);
        "" === T && (T = "live" === (0, h.get)(i, "video_type") ? "wpni.video.live" : "wpni.video.oodef");
        var P = "";
        if (T && T.split("/")[1]) {
            var x = T.split("/");
            T = x[0];
            for (var D = 1; D < x.length; D++) P += "/" + x[D]
        }
        var O = p.playerType,
            C = "live" === t.videoData.video_type ? "live" : "vod";
        O = O + "," + C;
        var I = {
                uuid: t.videoData && t.videoData._id,
                adSetZone: T,
                primarySiteNode: P,
                haystack: [i.headlines.basic, i.description && i.description.basic, b],
                tubeMogul: !1,
                requestAdsTimeout: k,
                aspectRatio: A,
                isPreloadingAds: t.isPreloadingAds,
                isPlaythrough: t.isPlaythrough,
                articleAutoplay: w,
                articleAutoplayType: y,
                muted: t.muted,
                playerWidth: f,
                playerHeight: g,
                playerType: O,
                embedVidPos: p.nthVideoOnPage
            },
            M = new _(I).getAdTagUrl();
        return "force" === v ? (l("true, ptvads force"), M) : r() ? (l("true, due for ad", {
            videosPlayed: e,
            adTagUrl: M
        }), M) : (l("false, not due for ad", {
            videosPlayed: e
        }), "")
    }

    function d(t, e) {
        if (!t && !e) throw "Invlalid params to determine is ad is allowed";
        var n = "1" === t.getAttribute("data-preroll-only");
        return "block" !== v && (!!PoWaSettings.queryStringObj.adTag || (!!n || (0, h.get)(e, "additional_properties.playVideoAds") !== !1 && (!!s(e) && ("force" === v || !!r()))))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        f = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }();
    e.getAdSetZone = u, e.getWapoAdTag = c, e.getAdAllowed = d;
    var h = n(8),
        g = n(135),
        m = i(g);
    window.PoWaSettings = window.PoWaSettings || {}, PoWaSettings.queryStringObj = PoWaSettings.queryStringObj || (0, h.getQueryStringObj)();
    var v = PoWaSettings.queryStringObj.ptvads;
    try {
        v = v || localStorage.getItem("ptvadsMode")
    } catch (t) {
        console.error(t)
    }
    var w = (0, h.getCookie)("wapo_actmgmt") || "",
        y = /.*\|NOADS.*/.test(w),
        b = y ? "wpni.video.premiumtest" : null,
        _ = function() {
            function t(e) {
                o(this, t), this.options = Object.assign({
                    adSetZone: "wpni.video.oodef",
                    primarySiteNode: "",
                    allowAdSetPostfix: !0,
                    haystack: [],
                    adTagSuffix: "vid=15,30",
                    tubeMogul: !0,
                    isPrefetching: !1
                }, e), this.queryString = (0, h.getQueryStringParameters)(), this.referrerUrl = window.self !== window.top ? document.referrer : window.location.href, this.isTablet = "object" === p(window.isMobile) ? window.isMobile.tablet() : /iPad/i.test(navigator.userAgent), this.isMobile = "object" === p(window.isMobile) ? window.isMobile.any() && !this.isTablet : /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent), this.localStorageSupport = (0, h.isLocalStorageSupported)(), this.custParamChunks = this.getCustParamChunks()
            }
            return f(t, [{
                key: "getDecoratedAdSetZone",
                value: function() {
                    var t = this.options.adSetZone;
                    return this.options.allowAdSetPostfix && t.indexOf("_") === -1 && t.indexOf("/") === -1 && (t += this.getAdSetPostfix()), this.options.primarySiteNode && (t += this.options.primarySiteNode), t
                }
            }, {
                key: "getDFPChunks",
                value: function() {
                    return ["sz=640x480", "iu=" + encodeURIComponent("/701/" + this.getDecoratedAdSetZone()), "ciu_szs=300x250", "cust_params=" + encodeURIComponent(this.custParamChunks.join("&")), "impl=s", "gdfp_req=1", "env=vp", "output=vast", "unviewed_position_start=1", "url=%5bREFERRER_URL%5d", "description_url=%5bREFERRER_URL%5d&", "correlator=" + (new Date).getTime(), "vad_type=linear"]
                }
            }, {
                key: "getAdTagUrl",
                value: function() {
                    return this.queryString.hasOwnProperty("bypassBlockPreroll") === !1 && "function" == typeof window.blockPreroll && window.blockPreroll() === !0 ? "" : "//pubads.g.doubleclick.net/gampad/ads?" + this.getDFPChunks().join("&")
                }
            }, {
                key: "getCustParamChunks",
                value: function() {
                    var t = [],
                        e = this.getExclusionCategories(this.options.haystack);
                    e && e.length > 0 && t.push("excl_cat=" + e), this.options.adTagSuffix && t.push(this.options.adTagSuffix), t.push("jw_pt=html5"), t.push("vid_pt=" + this.options.playerType), t.push("vid_id=" + (this.options.uuid || "")), this.options.tubeMogul === !1 && t.push("tm=0");
                    var n = this.getAdTargeting();
                    n.ksg && t.push("ksg=" + n.ksg), n.ct && t.push("ct=" + n.ct), n.ca && t.push("ca=" + n.ca), console.debug("ad_to=" + this.options.requestAdsTimeout), this.options.requestAdsTimeout && t.push("ad_to=" + this.options.requestAdsTimeout);
                    var i = (0, h.getEmbedDomain)(),
                        o = /washingtonpost\.com/.test(i),
                        a = (0, h.getEmbedHostname)(),
                        r = /www-washingtonpost-com\.cdn\.ampproject\.org/.test(a);
                    if (i) {
                        var s = o || r ? "" : "other,",
                            l = r ? a : i;
                        t.push("embed_domain=" + s + l)
                    }
                    "number" == typeof this.options.aspectRatio && t.push("shape=" + (this.options.aspectRatio > 1 ? "vertical" : "horizontal")), this.options.isPreloadingAds ? t.push("pf=y" + (this.options.isPlaythrough ? "-playthrough" : "-click")) : t.push("pf=n" + (this.options.isPlaythrough ? "-playthrough" : "-click"));
                    var u = (0, h.getCookie)("wp_gdpr") || "";
                    "1" != u && "1|1" != u || t.push("wp_gdpr=consent");
                    var c = (0, h.getCookie)("wapo_actmgmt") || "";
                    /.*\|NOADS.*/.test(c) && t.push("premium_test=1");
                    var d = this.getWpvidAutoplay();
                    null !== d && t.push("wpvid_autoplay=" + d), "undefined" != typeof this.options.muted && t.push("muted=" + (this.options.muted ? "y" : "n")), this.options.playerWidth && t.push("widthVal=" + this.options.playerWidth), this.options.playerHeight && t.push("heightVal=" + this.options.playerHeight);
                    var p = (0, h.get)(window, "wp_meta_data.contentName[0]", window.commercialNode);
                    return p && t.push("embed_section=" + p), this.options.embedVidPos && t.push("embed_vid_pos=" + this.options.embedVidPos), t
                }
            }, {
                key: "getWpvidAutoplay",
                value: function() {
                    if ("undefined" != typeof this.options.articleAutoplay && null !== this.options.articleAutoplay) {
                        if (m.default.excludeFromPage()) return "exclude";
                        if (m.default.isExempt()) {
                            var t = this.options.articleAutoplayType ? "_" + this.options.articleAutoplayType : "";
                            return "false" + t
                        }
                        return !this.options.articleAutoplayType || this.options.articleAutoplay !== !0 && this.options.articleAutoplay !== !1 ? this.options.articleAutoplay : this.options.articleAutoplay + "_" + this.options.articleAutoplayType
                    }
                    return null
                }
            }, {
                key: "getExclusionCategories",
                value: function(t) {
                    var e = void 0;
                    try {
                        window.vidExclusions && t.length > 0 && (e = window.vidExclusions(t))
                    } catch (t) {
                        self.debug && console.error("Unable to find exclusion categories", t)
                    }
                    return e && e.length > 0 ? e.join(",") : void 0
                }
            }, {
                key: "getAdTargeting",
                value: function() {
                    var t = this.getCaValue();
                    return {
                        ksg: this.localStorageSupport && localStorage.getItem("kxsegs") ? localStorage.getItem("kxsegs") : window.Krux && window.Krux.segments ? window.Krux.segments.join(",") : void 0,
                        ct: window.wp_meta_data && window.wp_meta_data.clavis && window.wp_meta_data.clavis.ct ? window.wp_meta_data.clavis.ct.join(",") : void 0,
                        ca: t ? t.join(",") : void 0
                    }
                }
            }, {
                key: "getCaValue",
                value: function() {
                    var t = [],
                        e = [],
                        n = [],
                        i = [],
                        o = this.getCookie;
                    if (this.localStorageSupport) {
                        if (localStorage.getItem("targeting_aux_map")) {
                            e = localStorage.getItem("targeting_aux_map").split(","), t.concat(e);
                            for (var a = 0; a < e.length; a++) t.push(e[a].toString().toLowerCase())
                        }
                        if (localStorage.getItem("usersegmentsAdops")) {
                            var r = localStorage.getItem("usersegmentsAdops").substr(1),
                                s = r.substr(0, r.length - 1),
                                l = "";
                            n = s.split(",");
                            for (var u = 0; u < n.length; u++) "1" === n[u].charAt(n[u].length - 1) && (l = n[u].substr(0, n[u].length - 3).substr(1), i.push(l));
                            for (var c = 0; c < i.length; c++) t.push(i[c])
                        }
                    } else if (o("targeting_aux_map")) {
                        e = o("targeting_aux_map").split(","), t.concat(e);
                        for (var d = 0; d < e.length; d++) t.push(e[d].toString().toLowerCase())
                    } else if (o("0668") && o("0862") && o("6136") && o("8936") && o("9868") && o("7204") && o("2467") && o("6362") && o("3552") && o("3433") && o("7543") && o("8636") && o("5723") && o("2748") && o("5263") && o("3522")) {
                        "1" === o("0668") && n.push("0668"), "1" === o("0862") && n.push("0862"), "1" === o("6136") && n.push("6136"), "1" === o("8936") && n.push("8936"), "1" === o("9868") && n.push("9868"), "1" === o("7204") && n.push("7204"), "1" === o("2467") && n.push("2467"), "1" === o("6362") && n.push("6362"), "1" === o("3552") && n.push("3552"), "1" === o("3433") && n.push("3433"), "1" === o("7543") && n.push("7543"), "1" === o("8636") && n.push("8636"), "1" === o("5723") && n.push("5723"), "1" === o("2748") && n.push("2748"), "1" === o("5263") && n.push("5263"), "1" === o("3522") && n.push("3522");
                        for (var p = 0; p < n.length; p++) t.push(n[p])
                    }
                    if (window.wp_meta_data && window.wp_meta_data.clavis && window.wp_meta_data.clavis.auxiliaries)
                        for (var f = 0; f < window.wp_meta_data.clavis.auxiliaries.length; f++) t.push(window.wp_meta_data.clavis.auxiliaries[f].toString().toLowerCase());
                    return t
                }
            }, {
                key: "getCookie",
                value: function(t) {
                    for (var e = t + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                        for (var o = n[i];
                            " " == o.charAt(0);) o = o.substring(1, o.length);
                        if (0 == o.indexOf(e)) return o.substring(e.length, o.length)
                    }
                    return null
                }
            }, {
                key: "getAdSetPostfix",
                value: function() {
                    return /^fbInstant$/.test(this.queryString.embedContext) ? "_fb" : /^amp$/.test(this.queryString.embedContext) ? "_amp" : this.isTablet ? "_tablet" : this.isMobile ? "_mweb" : ""
                }
            }]), t
        }()
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        a = n(9),
        r = n(8),
        s = {
            VIEWABLE: "powaViewable"
        },
        l = (0, a.map)((0, r.getQueryStringParameters)(), r.parseString),
        u = l.autoplay,
        c = 0 != u && "0" !== u && (1 == u || "1" === u || null),
        d = l.muted,
        p = 0 != d && "0" !== d && (1 == d || "1" === d || null),
        f = "function" == typeof window.wpvidAutoplayDisabled && window.wpvidAutoplayDisabled(),
        h = !0,
        g = !0,
        m = function() {
            function t(e) {
                if (i(this, t), !e.id && !e.powa) throw "Invalid settings to setup Viewport Autoplay";
                this.start = this.start.bind(this), this.init = this.init.bind(this), this._el = document.getElementById(e.id), this._powa = e.powa;
                var n = t.allowedOnPlayer(this._el, (0, r.get)(this._powa, "videoData"), this._powa);
                this._el.dataset.viewportAutoplayAllowed = n, n === !0 && (/complete|interactive|loaded/.test(document.readyState) ? this.init() : document.addEventListener("DOMContentLoaded", this.init, !1))
            }
            return o(t, [{
                key: "init",
                value: function() {
                    (0, r.isElementInViewport)(this._el) ? this.start(): this._powa.once(s.VIEWABLE, this.start)
                }
            }, {
                key: "start",
                value: function() {
                    var t = this;
                    window.PoWaSettings.ViewportAutoplayEngaged = !0, this._powa.play(), (PoWaSettings.client.isMobile || PoWaSettings.client.isTablet) && this._powa.once(PoWa.EVENTS.MEDIA_CLICK, function(e) {
                        t._powa.mute()
                    })
                }
            }], [{
                key: "excludeFromPage",
                value: function() {
                    var t = (0, r.get)(window, "wp_pb.pageName") || l.pageName || "";
                    return !(t.startsWith("article") && "article-enterprise" !== t)
                }
            }, {
                key: "getReferrer",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    t = t || l.referrer || document.referrer;
                    try {
                        window.URL && (t = new URL(t).origin + "/")
                    } catch (t) {}
                    return t
                }
            }, {
                key: "isSocialMatch",
                value: function(e) {
                    var n = (0, r.get)(window, "PoWaSettings.ViewportAutoplaySettings.social"),
                        i = (0, r.get)(l, "allowAutoplaySocial", n);
                    if (i === !1) return !1;
                    e = e || t.getReferrer();
                    var o = (0, r.get)(window, "PoWaSettings.ViewportAutoplaySettings.socialRegexes") || ["facebook.com", "/t.co/", "reddit.com", "linkedin.com", "youtube.com", "digg.com"];
                    return (0, a.reduce)(o, function(t, n) {
                        return t || new RegExp(n).test(e)
                    }, !1)
                }
            }, {
                key: "isSearchMatch",
                value: function(e) {
                    var n = (0, r.get)(window, "PoWaSettings.ViewportAutoplaySettings.search"),
                        i = (0, r.get)(l, "allowAutoplaySearch", n);
                    if (i === !1) return !1;
                    e = e || t.getReferrer();
                    var o = (0, r.get)(window, "PoWaSettings.ViewportAutoplaySettings.searchRegexes") || ["www.google.*", "news.google.*", "com.google", "search.yahoo.com", "www.bing.com", "duckduckgo.com"];
                    return (0, a.reduce)(o, function(t, n) {
                        return t || new RegExp(n).test(e)
                    }, !1)
                }
            }, {
                key: "isExempt",
                value: function() {
                    var e = t.getReferrer(),
                        n = t.isSocialMatch(e) || t.isSearchMatch(e),
                        i = 1 == (0, r.getCookie)("rplsb");
                    return !n || i
                }
            }, {
                key: "allowedOnPage",
                value: function() {
                    if ("boolean" == typeof c) return c;
                    var e = (0, r.get)(window, "PoWaSettings.ViewportAutoplaySettings.mobile"),
                        n = (0, r.get)(l, "allowAutoplayMobile", e) === !0,
                        i = t.isExempt();
                    PoWaSettings.client = PoWaSettings.client || (0, r.sniffClient)();
                    var o = (!(PoWaSettings.client.isMobile || PoWaSettings.client.isTablet) || n) && !PoWaSettings.client.isIE,
                        a = (0, r.get)(window, "wp_pb.pageName") || l.pageName || "",
                        s = a.startsWith("article") && "article-enterprise" !== a && "article-lite" !== a;
                    return !i && o && s
                }
            }, {
                key: "allowedOnPlayer",
                value: function(e, n, i) {
                    e && n && i || console.warn("allowedOnPlayer() missing either el or videojson or powa, may not function correctly");
                    var o = e.getAttribute("data-nth-video-on-page"),
                        a = "function" == typeof window.wpvidAutoplayDisabled && window.wpvidAutoplayDisabled(),
                        s = (0, r.get)(n, "additional_properties.advertising.enableAutoPreview", !1) === !1;
                    if (i) {
                        var l = i.getStatus().stream;
                        if (l && l.includes("wapovod.akamaized.net")) return "akamai-disable"
                    }
                    return t.allowedOnPage() ? "true" == e.getAttribute("data-viewport-autoplay") ? a ? "ops-disable" : !s || "editorial-disable" : "false_" + (parseInt(o) + 1) : "0" !== o && null
                }
            }, {
                key: "getAdTimeoutOverride",
                value: function(t) {
                    for (var e = (0, r.get)(window, "PoWaSettings.ViewportAutoplaySettings.adTimeoutOverrides"), n = (0, r.get)(window, "wp_meta_data.commercialNode"), i = (0, r.get)(t, "additional_properties.subsection"), o = (0, r.get)(t, "additional_properties.videoAdZone"), a = void 0, s = 0; s < e.length; s++) {
                        var l = e[s],
                            u = new RegExp(l.regex, "i");
                        if (l.type.includes("section") && (u.test(n) || u.test(i))) {
                            a = l;
                            break
                        }
                        if (l.type.includes("adSetZone") && u.test(o)) {
                            a = l;
                            break
                        }
                    }
                    return a ? a.autoplayAdTimeouts : null
                }
            }]), t
        }();
    e.default = m, window.PoWaSettings = window.PoWaSettings || {}, PoWaSettings.autoplay = function() {
        return f ? "ops-disable" : "boolean" == typeof c ? c : (!window.wp_pb || "video-leaf-page" !== window.wp_pb.pageName) && ("function" == typeof m.allowedOnPage ? m.allowedOnPage() : h)
    }, PoWaSettings.muted = function() {
        return !f && ("boolean" == typeof p ? p : (!window.wp_pb || "video-leaf-page" !== window.wp_pb.pageName) && ("function" == typeof m.allowedOnPage ? m.allowedOnPage() : g))
    }
}, function(t, e) {
    "use strict";

    function n(t) {
        this._player = t, this._startedPlayTs, this._lastPlayTs, this._totaTimeSincePlay = 0, this._sawPreroll = !1, this._complete = !1;
        var e = this;
        t && (t.powa.on("start", function(t) {
            e._startedPlayTs = Date.now()
        }), t.powa.on("play", function(t) {
            e._lastPlayTs = Date.now()
        }), t.powa.on("complete", function(t) {
            e._complete = !0
        }), t.powa.on("adStart", function(t) {
            e._sawPreroll = !0
        }))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.WapoStrategy = n, n.ContentType = {
        AD: "ad",
        CONTENT: "ct"
    }, n.AdPosition = {
        PREROLL: "a1",
        MIDROLL: "a2",
        POSTROLL: "a3",
        OVERLAY: "a4",
        SPECIAL: "a5"
    }, n.VideoState = {
        UNPLAYED: "s1",
        PLAYED: "s2",
        STOPPED: "s3",
        COMPLETED: "s4"
    }, n.prototype.isReady = function() {
        return "undefined" != typeof this._player
    }, n.prototype.getTitle = function() {
        try {
            return this._player.powa.getVideoData().headlines.basic
        } catch (t) {
            return ""
        }
    }, n.prototype.getVideoPath = function() {
        try {
            return this._player.powa.getVideoData()._id
        } catch (t) {
            return ""
        }
    }, n.prototype.getContentType = function() {
        try {
            return this._player.powa.getStatus().adStatus.running ? n.ContentType.AD : n.ContentType.CONTENT
        } catch (t) {
            return n.ContentType.CONTENT
        }
    }, n.prototype.getAdPosition = function() {
        return n.AdPosition.PREROLL
    }, n.prototype.getTotalDuration = function() {
        try {
            return this._player.powa.getVideoData().duration
        } catch (t) {
            return 0
        }
    }, n.prototype.getState = function() {
        if (this._complete) return n.VideoState.COMPLETED;
        try {
            var t = this._player.powa.getStatus().state;
            switch (t) {
                case "playing":
                    return n.VideoState.PLAYED;
                case "paused":
                    return n.VideoState.STOPPED;
                case "idle":
                    return n.VideoState.UNPLAYED
            }
        } catch (t) {
            return ""
        }
    }, n.prototype.getCurrentPlayTime = function() {
        try {
            return this._player.powa.getStatus().time
        } catch (t) {
            return 0
        }
    }, n.prototype.getBitrate = function() {}, n.prototype.getThumbnailPath = function() {
        try {
            return this._player.powa.element.querySelector(".powa-shot-image").style.backgroundImage.replace(/^url\("/, "").replace(/"\)$/, "")
        } catch (t) {
            return ""
        }
    }, n.prototype.getPlayerType = function() {
        try {
            return this._player.powa.getVideoData().type
        } catch (t) {
            return ""
        }
    }, n.prototype.getViewStartTime = function() {
        return this._startedPlayTs ? Date.now() - this._startedPlayTs : 0
    }, n.prototype.getViewPlayTime = function() {
        try {
            if ("playing" === this._player.powa.getState() && this._lastPlayTs) return this._totaTimeSincePlay + Date.now() - this._lastPlayTs
        } catch (t) {
            return this._totaTimeSincePlay
        }
    }, n.prototype.getViewAdPlayTime = function() {
        return this._sawPreroll && this._lastPlayTs ? Date.now() - this._startedPlayTs : 0
    }, n.verify = function(t) {
        return t && "object" === i(t.powa) && "object" === i(t.powa.getVideoData())
    }
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o() {
        function t(t) {
            var e = void 0,
                n = void 0;
            document.querySelector(".wpv-font-canary." + t.class) ? n = document.querySelector(".wpv-font-canary." + t.class) : (n = document.createElement("div"), n.className = "wpv-font-canary " + t.class, n.style.position = "absolute", n.style.width = "auto", n.style.left = "-99999px", n.innerHTML = "test", document.body.appendChild(n));
            var i = getComputedStyle(n).fontFamily,
                o = i ? i.split(",") : [];
            return t.isAvailable = o[0].indexOf(t.fontFamily) > -1, e = "undefined" != typeof fontsAvailable ? e && t.isAvailable : t.isAvailable
        }

        function e() {
            var t = !!document.querySelector('.powa[data-check-for-wapo-fonts="false"]');
            return !(F || $ || Y || t)
        }
        var n = R.ARTICLE_PAGE_RESET + V.VIDEO_GLOBAL;
        return (0, l.addCSS)(n, "powa-wapo"), e() && (t({
            class: "franklin-light",
            fontFamily: "FranklinITCProLight"
        }) || (0, l.addCSS)(B.FRANKLIN_ITC_LIGHT, "powa-font-light"), t({
            class: "franklin-bold",
            fontFamily: "FranklinITCProBold"
        }) || (0, l.addCSS)(B.FRANKLIN_ITC_BOLD, "powa-font-bold")), !0
    }

    function a() {
        function t(t) {
            var e = document.createElement("link");
            e.rel = "dns-prefetch", e.href = t, document.head.appendChild(e)
        }
        return t("https://videos.posttv.com/"), !0
    }
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        s = n(9),
        l = n(8),
        u = n(7),
        c = n(134),
        d = n(138),
        p = n(139),
        f = n(140),
        h = n(141),
        g = n(142),
        m = n(143),
        v = i(m),
        w = n(171),
        y = i(w),
        b = n(172),
        _ = i(b),
        A = n(173),
        S = i(A),
        E = n(175),
        k = n(176),
        T = i(k),
        P = n(177),
        x = i(P),
        D = n(178),
        O = n(179),
        C = i(O),
        I = n(174),
        M = i(I),
        N = n(135),
        L = i(N),
        R = n(180),
        j = n(181),
        W = n(182),
        V = n(183),
        B = n(184);
    n(185), window.PoWaSettings = window.PoWaSettings || {}, PoWaSettings.VERSION = PoWaSettings.VERSION || "1.5.7", PoWaSettings.BUILD = PoWaSettings.BUILD || "1914be4f", PoWaSettings.client = PoWaSettings.client || (0, l.sniffClient)(), PoWaSettings.autoplayDetection = {}, PoWaSettings.queryStringObj = PoWaSettings.queryStringObj || (0, l.getQueryStringObj)(), PoWaSettings.hashStringObj = PoWaSettings.hashStringObj || (window.location.hash ? (0, l.getQueryStringObj)(window.location.hash.substring(1)) : {});
    var U = (0, l.get)(window, "wp_pb.pageName", "").startsWith("video"),
        z = (0, l.isObject)(window.Fusion),
        F = (0, l.get)(window, "wp_meta_data.isPWA") === !0 || "pwa" === window.wp_site,
        $ = (0, l.get)(window, "wp_meta_data.isHomepage") === !0,
        Y = (0, l.get)(window, "wp_pb.pageName", "").startsWith("article"),
        H = (0, l.get)(window, "wp_pb.pageName", "").startsWith("primetime"),
        Q = "front" === (0, l.get)(window, "wp_meta_data.contentType", ""),
        q = (0, l.get)(window, "wp_pb.pageName", "").startsWith("front-elections-2018"),
        G = (0, l.getCookie)("wp_gdpr") || "",
        K = G.startsWith("1"),
        Z = "https://www.washingtonpost.com/wp-stat/advertising/pseudo-static/vidExclusions/vid_exclusions.min.js",
        X = "This video is currently not available";
    PoWaSettings.wapoStyled = PoWaSettings.wapoStyled || o(), PoWaSettings.playerBackgroundImg = "https://www.washingtonpost.com/player/prod/img/wp_grey.jpg", PoWaSettings.dnsPrefetched = PoWaSettings.dnsPrefetched || a(), PoWaSettings.queueEvents = !1, PoWaSettings.advertising = PoWaSettings.advertising || {
        adBar: !0,
        adTag: function(t) {
            return (0, c.getWapoAdTag)(t)
        },
        adTimeouts: {
            vastLoadTimeout: 3,
            loadVideoTimeout: 3,
            requestAdsTimeout: 3
        },
        prefetchAdTimeouts: {
            vastLoadTimeout: 10,
            loadVideoTimeout: 10,
            requestAdsTimeout: 3
        },
        autoplayAdTimeouts: {
            vastLoadTimeout: 5,
            loadVideoTimeout: 5,
            requestAdsTimeout: 5
        }
    }, PoWaSettings.imageResizer = PoWaSettings.imageResizer || function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 800,
            n = t.url,
            i = void 0 === n ? "https://www.washingtonpost.com/posttv/resources/img/posttv/posttv_error_black.jpg" : n,
            o = t.height,
            a = void 0 === o ? 9 : o,
            r = t.width,
            s = void 0 === r ? 16 : r,
            l = t.keepAnimation,
            u = void 0 !== l && l,
            c = void 0,
            d = void 0,
            p = void 0;
        return s > a ? (p = a / s, c = e, d = Math.round(e * p)) : (p = s / a, d = e, c = Math.round(e * p)), i.endsWith(".gif") && u ? "https://www.washingtonpost.com/pbox.php?url=" + i + "&op=noop" : "https://www.washingtonpost.com/wp-apps/imrs.php?src=" + i + "&w=" + c + "&h=" + d
    }, PoWaSettings.org = PoWaSettings.org || "wapo", PoWaSettings.buckets = PoWaSettings.buckets || {};
    var J = !!Y;
    J ? (0, l.addCSS)(j.PANE_PLAY_BUTTON_CENTER, "powa-pane-center") : (0, l.addCSS)(j.PANE_GLOBAL, "powa-pane"), PoWaSettings.pane = PoWaSettings.pane || {
        template: function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = e.videoData || {},
                t = void 0;
            return t = PoWaSettings.videoSupport.hlsJS === !1 && "" === PoWaSettings.videoSupport.hls && "live" === n.video_type ? '\n\t\t\t<div class="powa-shot-masthead">\n\t\t\t<div class="powa-shot-title shadow franklin-light">' + (e.title ? e.title : "") + "</div>\n\t\t\t</div>" : '\n\t\t\t<div class="powa-shot-masthead">\n\t\t\t\t<div class="powa-shot-title shadow franklin-light">' + (e.title ? e.title : "") + "</div>\n\t\t\t</div>", t.trim()
        }
    };
    var tt = (0, l.get)(window, "wp_pb.pageName", "").indexOf("article") > -1 && null == document.querySelector(".pb-f-posttv-sticky-player-powa");
    PoWaSettings.promo = PoWaSettings.promo || {
        size: "medium",
        style: {},
        template: function(t) {
            function e(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "gif-mp4";
                if (!p) return null;
                var n = (0, s.reject)(t.streams, function(t) {
                        return t.stream_type !== e || t.url.includes("//wapovod.akamaized.net/")
                    }) || [],
                    i = n.reverse()[0];
                return i ? i.url : null
            }

            function n(t, e) {
                if (!t) return {};
                var n = function(t, e) {
                        return (0, s.chain)(t).reject(function(t) {
                            return t.width < e
                        }).min(function(t) {
                            return t.width
                        }).compact().value()
                    },
                    i = function(t, e) {
                        return (0, s.chain)(t).reject(function(t) {
                            return t.width >= e
                        }).max(function(t) {
                            return t.width
                        }).compact().value()
                    },
                    o = n(t, e);
                return (0, l.isEmpty)(o) && (o = i(t, e)), o
            }

            function i(t) {
                var i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    o = (0, l.get)(t, "videoData"),
                    a = (0, l.get)(o, "promo_image.url"),
                    r = a && a.endsWith(".gif") ? a : null,
                    s = (0, l.get)(o, "streams"),
                    u = s && (0, l.get)(o, "additional_properties.gifAsThumbnail") ? e(o, "gif") : null,
                    c = (0, l.get)(o, "additional_properties.imageResizerUrls"),
                    d = n(c, f);
                return h ? h : r ? PoWaSettings.imageResizer({
                    url: r,
                    keepAnimation: !0
                }) : i && u ? PoWaSettings.imageResizer({
                    url: u,
                    keepAnimation: !0
                }) : d && d.url ? d.url : PoWaSettings.imageResizer((0, l.get)(o, "promo_image"))
            }

            function o(t) {
                if (c) return '<i class="powa-shot-click powa-shot-click-play fa fa-play powa-shot-play-btn-icon" aria-hidden="true"></i>';
                var e = '<span class="powa-custom-btn-text franklin-bold">' + ("live" === d ? "LIVE" : "") + "</span> ",
                    n = "live" === d ? "" : (0, l.get)(t, "videoData.duration") ? '<span class="franklin-light powa-shot-duration">' + (0, l.formatTime)(t.videoData.duration / l.ONE_SECOND) + "</span>" : null;
                return '<i class="powa-shot-click powa-shot-click-play fa fa-play powa-shot-play-btn-icon ' + ("live" === d ? "live" : "") + '" aria-hidden="true"></i>' + (e ? " " + e : "") + (n ? " " + n : "")
            }

            function a(t) {
                return c ? ((0, l.addCSS)(W.PROMO_PLAY_BUTTON_CENTER, "powa-play-center"), "live" === d ? '\n\t\t\t\t\t\t<div class="powa-shot-live-badge franklin-light">LIVE</div>\n\t\t\t\t\t\t<div class="powa-shot-image powa-shot-click powa-shot-click-play" style="background-image: url(\'' + i(t, t.promoVideo !== !1) + "')\">\n\t\t\t\t\t\t\t" + PoWaSettings.pane.template(t) + '\n\t\t\t\t\t\t\t<div class="powa-shot-btn-wrapper">\n\t\t\t\t\t\t\t\t<div class="powa-shot-play-btn powa-shot-click powa-shot-click-play">' + o(t) + '</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class="powa-shot-logo" data-logo="' + t.logo + '"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t' : '\n\t\t\t\t\t\t<div class="powa-shot-image powa-shot-click powa-shot-click-play" style="background-image: url(\'' + i(t, t.promoVideo !== !1) + "')\">\n\t\t\t\t\t\t\t" + PoWaSettings.pane.template(t) + '\n\t\t\t\t\t\t\t<div class="powa-shot-btn-wrapper">\n\t\t\t\t\t\t\t\t<div class="powa-shot-play-btn powa-shot-click powa-shot-click-play">' + o(t) + '</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class="powa-shot-logo" data-logo="' + t.logo + '"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t') : ((0, l.addCSS)(W.PROMO_GLOBAL, "powa-promo-global"), '\n\t\t\t\t\t<div class="powa-shot-image powa-shot-click powa-shot-click-play" style="background-image: url(\'' + i(t, t.promoVideo !== !1) + "')\">\n\t\t\t\t\t\t" + PoWaSettings.pane.template(t) + '\n\t\t\t\t\t\t<div class="powa-shot-play-btn powa-shot-click powa-shot-click-play ' + ("live" === d ? "live" : "") + '">' + o(t) + '</div>\n\t\t\t\t\t\t<div class="powa-shot-logo" data-logo="' + t.logo + '"></div>\n\t\t\t\t\t</div>\n\t\t\t\t');
            }

            function r(t) {
                var e = i(t, !1);
                if (c) return (0, l.addCSS)(W.PROMO_PLAY_BUTTON_CENTER, "powa-play-center"), "live" === d ? '\n\t\t\t\t\t\t<div class="powa-shot-live-badge franklin-light">LIVE</div>\n\n\t\t\t\t\t\t<div class="powa-shot-image powa-shot-click powa-shot-click-play" style="background-image: url(\'' + e + '\')" data-promo-type="gif-mp4">\n\t\t\t\t\t\t\t' + PoWaSettings.pane.template(t) + '\n\t\t\t\t\t\t\t<video class="powa-shot-promo-video" src="' + t.promoVideo + '" playsinline muted autoplay loop></video>\n\t\t\t\t\t\t\t<div class="powa-shot-btn-wrapper">\n\t\t\t\t\t\t\t\t<div class="powa-shot-play-btn powa-shot-click powa-shot-click-play">' + o(t) + '</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="powa-shot-logo" data-logo="' + t.logo + '"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t' : '\n\t\t\t\t\t\t<div class="powa-shot-image powa-shot-click powa-shot-click-play" style="background-image: url(\'' + e + '\')" data-promo-type="gif-mp4">\n\t\t\t\t\t\t\t' + PoWaSettings.pane.template(t) + '\n\t\t\t\t\t\t\t<video class="powa-shot-promo-video" src="' + t.promoVideo + '" playsinline muted autoplay loop></video>\n\t\t\t\t\t\t\t<div class="powa-shot-btn-wrapper">\n\t\t\t\t\t\t\t\t<div class="powa-shot-play-btn powa-shot-click powa-shot-click-play">' + o(t) + '</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="powa-shot-logo" data-logo="' + t.logo + '"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t';
                (0, l.addCSS)(W.PROMO_GLOBAL, "powa-promo-global");
                var n = i(t, !1);
                return '\n\t\t\t\t\t<div class="powa-shot-image powa-shot-click powa-shot-click-play" style="background-image: url(\'' + n + '\')" data-promo-type="gif-mp4">\n\t\t\t\t\t\t' + PoWaSettings.pane.template(t) + '\n\t\t\t\t\t\t<video class="powa-shot-promo-video" src="' + t.promoVideo + '" playsinline muted autoplay loop></video>\n\t\t\t\t\t\t<div class="powa-shot-play-btn powa-shot-click powa-shot-click-play">' + o(t) + '</div>\n\t\t\t\t\t\t<div class="powa-shot-logo" data-logo="' + t.logo + '"></div>\n\t\t\t\t\t</div>\n\t\t\t\t'
            }

            function u(t) {
                return window.powaData[(0, l.get)(t, "videoData._id")].showErrorPane = !0, (0, l.addCSS)(j.PROMO_UNSUPPORTED_ERROR, "powa-unsupported-error"), '\n\t\t\t\t<div class="powa-unsupported-error franklin-light" style="background-image: url(\'' + i(t) + '\')">\n\t\t\t\t\t<div>We’re sorry. Your browser does not support live video streaming.<br>Please try a different browser.</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="powa-shot-image" style="background-image: url(\'' + i(t) + '\')">\n\t\t\t\t\t<div class="powa-shot-logo" data-logo="' + t.logo + '"></div>\n\t\t\t\t</div>\n\t\t\t'
            }
            var c = !(!Y && !z),
                d = (0, l.get)(t.videoData, "video_type"),
                p = !0,
                f = 800,
                h = void 0;
            if (this.id) {
                var g = (0, l.get)(window, "powas[" + this.id + "].powa"),
                    m = g.getDataset();
                "false" === m.promoVideo && (p = !1);
                var v = g.getElement();
                f = v.offsetWidth, m.img && (h = m.img), m.imgMedium && f > 400 && (h = m.imgMedium)
            }
            window.matchMedia("(prefers-reduced-motion)").matches && (p = !1), (0, l.has)(PoWaSettings.queryStringObj, "gifAllowed") && (p = (0, l.get)(PoWaSettings.queryStringObj, "gifAllowed")), t.logo = "The Washington Post" === (0, l.get)(t, "videoData.source.name") ? "wapo-" + (0, l.get)(t, "videoData.additional_properties.videoCategory") : "", t.promoVideo = t.promoVideo || e((0, l.get)(t, "videoData", {}));
            var w = (0, l.get)(PoWaSettings.queryStringObj, "wpv_showLiveError", "live" === (0, l.get)(t, "videoData.video_type") && !PoWaSettings.videoSupport.hls && !PoWaSettings.videoSupport.hlsJS);
            return w ? u(t) : t.promoVideo && (0, l.get)(t, "videoData.additional_properties.gifAsThumbnail") ? r(t) : a(t)
        }
    };
    var et = ["_master.m3u8", "_mobile.m3u8", ".m3u8", ".mp4", ".webm"],
        nt = [".mp4", ".webm"],
        it = (0, l.has)(PoWaSettings.queryStringObj, "hlsBucket") ? PoWaSettings.queryStringObj.hlsBucket ? et : nt : PoWaSettings.client.isSamsungBrowser ? nt : null;
    PoWaSettings.streamPreference = PoWaSettings.streamPreference ? PoWaSettings.streamPreference : it ? it : et, PoWaSettings.maxBitrate = PoWaSettings.maxBitrate || {
        mobile: 300,
        tablet: 600,
        desktop: 1200
    }, PoWaSettings.banditoAPI = PoWaSettings.banditoAPI || function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        switch (t.type) {
            case "variant":
                return "https://www.washingtonpost.com/bandito/tests-pb/?ids=" + t.videoID + "&meta=1";
            case "served":
                return "https://loxodo-ct.ext.nile.works/api/save-event";
            case "clicked":
                return "https://loxodo-ct.ext.nile.works/api/save-event"
        }
    }, PoWaSettings.videoAPI = PoWaSettings.videoAPI || function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = (0, l.getEmbedDomain)();
        if (PoWaSettings.queryStringObj.wpvInternalApi) return "http://internal-posttv-api-internal-unpublished-1793588436.us-east-1.elb.amazonaws.com/posttv-api/api/v1/ansvideos/findByUuid?uuid=" + t.uuid + "&domain=" + e;
        if (PoWaSettings.queryStringObj.wpvImpact) return "https://pb-impact.washingtonpost.com/videojson/" + t.uuid + ".json?outputType=videojsonp&src=" + e + "&recommendedPlaylist=" + ("recommended" === t.type ? 1 : 0);
        if (PoWaSettings.queryStringObj.wpvBeta) return "https://www.washingtonpost.com/posttv-beta/ans/findByUuid/" + t.uuid + "?" + (t.playlist ? "&recommendedPlaylist=1" : "") + "&src=" + e;
        if (PoWaSettings.queryStringObj.qa1) return "https://videoapi-qa.washingtonpost.com/posttv-api-qa1/api/v1/ansvideos/findByUuid?uuid=" + t.uuid + "&domain=" + e;
        if ("sandbox" === t.env) switch (t.type || "video") {
            case "playlist":
                return "https://video-api.sandbox.washpost.arcpublishing.com/api/v1/ans/playlists/findByPlaylist?name=" + t.playlist + "&domain=" + e;
            case "recommended":
                return PoWaSettings.videoAPI({
                    uuid: t.uuid,
                    env: "sandbox"
                }) + "&recommendedPlaylist=1";
            case "video":
                return "https://video-api.sandbox.washpost.arcpublishing.com/api/v1/ansvideos/findByUuid?uuid=" + t.uuid + "&domain=" + e;
            case "videos":
                var n = t.uuids.reduce(function(t, e) {
                    return (t.length ? "&" : "") + "uuids=" + e
                }, "");
                return "https://video-api.sandbox.washpost.arcpublishing.com/api/v1/ansvideos/findByUuids?" + n + "&domain=" + e
        } else switch (t.type || "video") {
            case "playlist":
                return "https://posttvapi.washingtonpost.com/posttv-api/api/v1/ans/playlists/findByPlaylist?name=" + t.playlist + "&domain=" + e;
            case "recommended":
                return PoWaSettings.videoAPI({
                    uuid: t.uuid
                }) + "&recommendedPlaylist=1";
            case "video":
                return "https://www.washingtonpost.com/video/ans/findByUuid/" + t.uuid + "?src=" + e;
            case "videos":
                var i = t.uuids.reduce(function(t, e) {
                    return "" + t + (t ? "&" : "") + "uuids=" + e
                }, "");
                return "https://posttvapi.washingtonpost.com/posttv-api/api/v1/ansvideos/findByUuids?" + i + "&domain=" + e
        }
    }, PoWaSettings.powaRenderListening = PoWaSettings.powaRenderListening || window.addEventListener("powaRender", function(t) {
        var e = (0, l.get)(t, "detail.id"),
            n = (0, l.get)(t, "detail.powa"),
            i = n.getElement(),
            o = PoWaSettings.queryStringObj.wpv_debug || i.getAttribute("data-debug"),
            a = "1" === o || "true" === o,
            r = i && i.getAttribute("data-blurb");
        r && new y.default({
            id: e,
            powa: n
        });
        var s = a || "bandito" === PoWaSettings.queryStringObj.wpv_debug || "bandito" === i.dataset.debug;
        new d.Bandito({
            id: e,
            powa: n,
            debug: s
        }), new E.CloudfrontTracker({
            id: e
        }), new M.default({
            id: e,
            powa: n,
            debug: a
        }), new D.VideoAnalytics({
            id: e,
            powa: n
        })
    }) || !0, PoWaSettings.powaReadyListening = PoWaSettings.powaReadyListening || window.addEventListener("powaReady", function(t) {
        function e() {
            function t() {
                var t;
                try {
                    t = document.getElementById("slug_fixedBottom").getElementsByTagName("iframe")[0]
                } catch (t) {}
                return t
            }

            function e() {
                try {
                    t().contentWindow.document.querySelector("#poe-toggle").style.display = "initial"
                } catch (t) {}
            }

            function n() {
                try {
                    t().contentWindow.document.querySelector("#poe-toggle").style.display = "none"
                } catch (t) {}
            }
            o.on("stickyEngaged", function(e) {
                try {
                    var i = t().contentWindow.document.querySelector(".poe-container--expanded #poe-toggle");
                    if (i) {
                        var o = document.querySelector(".powa-wrap.mobile .powa-wrap-inner");
                        o && o.classList.add("extra")
                    }
                    i.click(), n()
                } catch (t) {}
            }), o.on("stickyDisengaged", function(t) {
                e()
            })
        }

        function n() {
            var t = "live" === u.video_type;
            t || new _.default({
                id: i,
                powa: o,
                videoData: u
            }), r.customCtrls ? (a.removeAttribute("controls"), o.hideControls(), new v.default({
                id: i,
                powa: o,
                scrubber: !0,
                volume: !0,
                fullscreen: !0,
                share: !0,
                progress: !0,
                overlay: !0,
                extras: ["cc"]
            })) : o.showControls()
        }
        var i = (0, l.get)(t, "detail.id"),
            o = (0, l.get)(t, "detail.powa"),
            a = o.getElement(),
            r = (0, s.map)(a.dataset, l.parseString),
            u = o.getVideoData(),
            c = "1" === a.dataset.prerollOnly;
        e(), (0, l.get)(r, "ads") !== !1 && (new f.Moat({
            powa: o,
            moatID: "washingtonpostjsvideo715452244896",
            slicers: function(t) {
                var e = PoWaSettings.queryStringObj.adSetZone || (0, l.get)(u, "additional_properties.videoAdZone");
                c && (0, l.get)(a, "adSettings.adSetZone") && (e = a.adSettings.adSetZone);
                var n = r.autoplay || a.dataset.viewportAutoplayAllowed;
                return {
                    zMoatPT: a.dataset.playerType,
                    zMoatTO: t.adTimeoutLength,
                    zMoatSub: e,
                    zMoatSI: a.classList.contains("wpv-sticky-engaged").toString(),
                    zMoatSR: n ? "autoplay" : "click-to-play",
                    zMoatVP: r.nthVideoOnPage
                }
            }
        }), K || new p.IAS({
            powa: o,
            iasID: "8221"
        })), new g.Discovery({
            id: i,
            powa: o
        });
        var d = (0, l.get)(window, "PoWaSettings.buckets.promoBucket.newAllocation", !1);
        d && o.trigger("powaBucket"), new h.Playthrough({
            id: i,
            powa: o,
            playthroughFetchPercentage: .5
        });
        var m = "live" === u.video_type && r.autoplay && r.muted && (r.preview || PoWaSettings.queryStringObj.powaPreview);
        if (m) {
            var w = {
                id: i,
                powa: o,
                onWatch: function() {
                    n(), o.mute(!1), o.volume(1), o.trigger("play"), o.trigger("trackProgress", 0, u.duration / 1e3)
                }
            };
            r.customBtnText && (w.playtext = r.customBtnText), new x.default(w)
        } else o.getStatus().running ? n() : F || $ || Y || H || Q || q ? o.once("start", n) : n();
        r.viewportAutoplay && new L.default({
            id: i,
            powa: o
        }), (0, l.canAutoplay)(!1).then(function() {
            PoWaSettings.autoplayDetection.allowed = !0
        }).catch(function() {
            (0, l.canAutoplay)(!0).then(function() {
                PoWaSettings.autoplayDetection.mutedAllowed = !0
            })
        })
    }) || !0, PoWaSettings.powaErrorListening = PoWaSettings.powaErrorListening || window.addEventListener("powaError", function(t) {
        var e = t.detail.id,
            n = X,
            i = document.getElementById(e);
        U ? new T.default({
            id: e,
            msg: n
        }) : (0, u.$)(i).once("click", function(t) {
            new T.default({
                id: e,
                msg: n
            })
        })
    }) || !0, PoWaSettings.safari11Hacks = !1, PoWaSettings.decorator = PoWaSettings.decorator || function(t, e) {
        function n(t) {
            var e = 3,
                n = 0,
                i = function t(i) {
                    return !document.getElementById(i) || n >= e ? i : (n++, t(i + "-" + (0, l.getRandomNumber)(1, 1e3)))
                };
            return i(t)
        }

        function i() {
            var e = t,
                n = "posttv-embed" + (u ? "-" + u : "");
            return e.getAttribute("data-player-type") ? n = e.getAttribute("data-player-type") : "true" === e.getAttribute("data-discovery") ? n = "posttv-embed-playlist" : (0, l.get)(window, "window.wp_meta_data.isHomepage") === !0 ? n = "posttv-embed-hp" : window.self !== window.top ? n = "posttv-embed-iframe" : window.wp_pb && /video-leaf-page/.test(window.wp_pb.pageName) && (n = "posttv-leaf"), n
        }
        if (!t.dataset.decorated) {
            t.dataset.decorated = !0, null === t.getAttribute("data-autoinit") && (Y && 0 === e ? t.setAttribute("data-autoinit", !0) : Y ? t.setAttribute("data-autoinit", "native-hls") : t.setAttribute("data-autoinit", !0));
            var o = void 0;
            if ("undefined" != typeof t.dataset.nthVideoOnPage) o = (0, l.parseString)(t.dataset.nthVideoOnPage);
            else if ("undefined" != typeof PoWaSettings.hashStringObj.nthVideoOnPage) o = PoWaSettings.hashStringObj.nthVideoOnPage;
            else {
                var a = document.getElementsByClassName("powa");
                o = [].slice.call(a).indexOf(t)
            }
            if (t.setAttribute("data-nth-video-on-page", o), t.setAttribute("data-mpulse", !0), t.setAttribute("data-preload", "metadata"), !t.getAttribute("id")) {
                var s = n("powa-" + t.dataset.uuid + "-" + o);
                t.setAttribute("id", s)
            }
            var u = function() {
                return window.wp_meta_data && window.wp_meta_data.isPWA === !0 ? "pwa" : "pwa" === window.wp_site ? "pwa" : /^(fbInstant|amp|pwa)$/.test(PoWaSettings.queryStringObj.embedContext) ? PoWaSettings.queryStringObj.embedContext.toLowerCase() : ""
            }();
            if (t.setAttribute("data-player-type", i()), "explorer" === PoWaSettings.client.browserName ? t.setAttribute("data-custom-ctrls", !1) : (0, l.has)(t.dataset, "customCtrls") || t.setAttribute("data-custom-ctrls", !0), null === t.getAttribute("data-autoplay")) {
                var c = !PoWaSettings.client.isMobile && !PoWaSettings.client.isTablet;
                c && "true" === t.getAttribute("data-autoplay-on-desktop") && t.setAttribute("data-autoplay", !0)
            }
            var d = (0, l.get)(PoWaSettings.queryStringObj, "wpv_debug", !1),
                p = (0, l.get)(PoWaSettings.queryStringObj, "wpv_autoinit", !0),
                f = (0, l.get)(PoWaSettings.queryStringObj, "wpv_autoinitAds", !0),
                h = 0 === o,
                g = t.getAttribute("data-viewport-autoplay"),
                m = null === g || "undefined" == typeof g,
                v = (0, l.get)(window, "PoWaSettings.advertising.autoplayAdTimeouts", {});
            if ("true" === t.getAttribute("data-autoplay") && t.setAttribute("data-ad-timeouts", JSON.stringify(v)), f && null === t.getAttribute("data-autoinit-ads") && h && (d && console.debug("setting data-autoinit-ads=1"), t.setAttribute("data-autoinit-ads", 1)), d && t.setAttribute("data-debug", d), "function" == typeof window.wpvidAutoplayDisabled && window.wpvidAutoplayDisabled()) t.setAttribute("data-sticky-player", "0");
            else {
                var w = parseFloat(t.dataset.aspectRatio),
                    y = w > .56 && w < .57;
                (1 == PoWaSettings.queryStringObj.forceSticky || tt && h && y && "0" !== t.dataset.stickyPlayer) && new S.default({
                    id: t.getAttribute("id"),
                    bg: PoWaSettings.playerBackgroundImg
                })
            }
            var b = (0, l.get)(window, "PoWaSettings.client"),
                _ = !b.isMobile && !b.isTablet;
            "posttv-leaf" === t.dataset.playerType ? t.setAttribute("data-autoplay-fallback", "false") : null === t.getAttribute("data-autoplay-fallback") && _ && t.setAttribute("data-autoplay-fallback", "muted");
            var A = (0, l.getCookie)("rplampr") || "",
                E = A.toLowerCase().indexOf("premium") > -1 || (0, l.get)(window, "wp_meta_data.isPremium") === !0;
            return (E || (0, l.has)(PoWaSettings.queryStringObj, "no_preroll")) && t.setAttribute("data-ads", !1), new Promise(function(e, n) {
                function i() {
                    return new Promise(function(e, n) {
                        var i = "true" === t.dataset.initOnScroll || F || $ || Y || H || Q || q;
                        "posttv-embed-hp-rightrail" !== t.dataset.playerType || window.IntersectionObserver || (i = !1);
                        var o = !1,
                            a = !0;
                        if (i && !(0, l.isElementInViewport)(t, 0, o, a)) {
                            t.dataset.initOnScroll = !0;
                            var r = new M.default({
                                id: t.id,
                                offsetTop: 100,
                                debug: d,
                                viewableThreshold: 0,
                                lookLeftAndRight: o,
                                checkIfVisible: a,
                                onViewable: function() {
                                    r && r.destroy(), e()
                                }
                            })
                        } else e()
                    })
                }

                function o(e) {
                    return new Promise(function(n, i) {
                        if (window.powaData = window.powaData || {}, window.powaData[e]) return void n(window.powaData[e]);
                        var o = t.dataset.env || t.dataset.api,
                            a = PoWaSettings.videoAPI({
                                uuid: e,
                                env: o,
                                type: "video"
                            });
                        (0, l.getJSONP)({
                            url: a,
                            resolve: function(t) {
                                window.powaData[e] = t[0], n(window.powaData[e])
                            },
                            reject: i,
                            callbackParam: "cb",
                            id: e.replace(/-/g, "")
                        })
                    })
                }

                function a(t, e) {
                    var n = (0, l.get)(e, "additional_properties.viewportAutoplayConfig");
                    if (n) {
                        if ("string" == typeof n) try {
                            n = JSON.parse(n)
                        } catch (t) {
                            console.debug("invalid autoplay config json")
                        }
                        PoWaSettings.ViewportAutoplaySettings = n
                    }
                    if (p && null === t.getAttribute("data-preroll-only") && h && L.default.allowedOnPage() === !0 && m) {
                        t.setAttribute("data-viewport-autoplay", !0), t.setAttribute("data-muted", window.PoWaSettings.muted());
                        var i = L.default.getAdTimeoutOverride(e),
                            o = Object.assign(v, i);
                        t.setAttribute("data-ad-timeouts", JSON.stringify(o))
                    }
                }
                i().then(function() {
                    return Promise.all(["function" != typeof window.vidExclusions ? (0, l.promiseScript)(Z).catch(l.noop) : void 0, "object" !== r(window.VideoAnalytics) ? (0, l.promiseScript)(D.VIDEO_ANALYTICS_URL).catch(l.noop) : void 0, o(t.dataset.uuid).then(function(e) {
                        return a(t, e)
                    }).catch(l.noop)])
                }).then(e).catch(e)
            })
        }
    }, PoWaSettings.ViewportAutoplaySettings = PoWaSettings.ViewportAutoplaySettings || {
        search: !0,
        searchRegexes: ["www.google.*", "news.google.*", "com.google", "search.yahoo.com", "www.bing.com", "duckduckgo.com"],
        social: !0,
        socialRegexes: ["facebook.com", "/t.co/", "reddit.com", "linkedin.com", "youtube.com", "digg.com"],
        mobile: !0
    }, window.ViewportAutoplayAllowedOnPage = L.default.allowedOnPage(), PoWaSettings.analyticsConfig = PoWaSettings.analyticsConfig || {
        event400: {
            pingInterval: (0, l.get)(window, "PoWaSettings.queryStringObj.livePulseInterval", 6e4)
        },
        event500: {
            pingInterval: (0, l.get)(window, "PoWaSettings.queryStringObj.event500Interval", 2e3),
            maxRuns: (0, l.get)(window, "PoWaSettings.queryStringObj.event500maxRuns", 8)
        }
    }, PoWaSettings.powaUp = PoWaSettings.powaUp || {}, PoWaSettings.powaUp.adTag = PoWaSettings.powaUp.adTag || [], PoWaSettings.powaUp.adTag.push(function(t, e) {
        if (K) return t;
        var n = e.id,
            i = (0, l.get)(window, "powas[" + n + "].powa"),
            o = i.getDataset(),
            a = i.getVideoData(),
            r = (0, l.get)(PoWaSettings.queryStringObj, "wpv_debug", o.debug),
            s = (0, c.getAdSetZone)({
                id: n,
                videoData: a
            });
        return "function" == typeof window.directToDFPCheck && window.directToDFPCheck(s) === !0 ? t : "wpni.video.premiumtest" === s ? t : (C.default.isZeus() || Y || $ || (r && console.debug("[APS] init APS"), C.default.init({
            pubId: 3041
        })), C.default.clearBid(e.id), i.once(PoWa.EVENTS.START, function() {
            return C.default.clearBid(e.id)
        }), r && C.default.isA9Init() === !1 && console.warn("[APS] warning: APS not initialized"), new Promise(function(n, o) {
            r && console.debug("[APS] fetching bid");
            var a = {
                    timeout: PoWaSettings.queryStringObj.apsTimeout ? PoWaSettings.queryStringObj.apsTimeout : 1500,
                    powa: i
                },
                s = Date.now();
            C.default.fetchBid(a).then(function(i) {
                var o = Date.now();
                if (r) {
                    var l = o - s;
                    console.debug("[APS] received bid", i), console.debug("[APS] time to cb:", l, a.timeout < l ? "exceeded timeout" : "")
                }
                C.default.stashBid(e.id, i);
                try {
                    var u = new URL(t);
                    u.searchParams.set("scp", i.encodedQsParams), n(u.toString())
                } catch (e) {
                    n("" + t + (i && i.encodedQsParams ? "&scp=" + i.encodedQsParams : ""))
                }
            }).catch(function() {
                return n(t)
            })
        }))
    })
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Bandito = void 0;
    var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        a = n(8),
        r = "BANDITO",
        s = Object.freeze({
            debug: !1
        });
    e.Bandito = function() {
        function t(e) {
            var n = this;
            return i(this, t), this.settings = (0, a.extend)({}, s, e), ["_handlePromoRender", "_handlePromoViewable", "_track", "_variantImpression", "_variantClick"].forEach(function(t) {
                return n[t] = n[t].bind(n)
            }), this.id = e.id, this.powa = e.powa, this.variant = (0, a.get)(this.powa.getVideoData(), "additional_properties.variant"), this.variant ? (this.settings.debug && console.debug("[" + r + "][constructor] has variant", this.variant), this.promoRendered = !1, this.promoViewable = !1, this.powa.on("promoRender", this._handlePromoRender), this.powa.once("powaViewable", this._handlePromoViewable), void 0) : (this.settings.debug && console.debug("[" + r + "][constructor] no variant"), null)
        }
        return o(t, [{
            key: "_handlePromoRender",
            value: function(t) {
                this.settings.debug && console.debug("[" + r + "][_handlePromoRender] " + (t.visible ? "VISIBLE" : "HIDDEN")), t.visible && (this.promoRendered = !0, this.promoViewable && this._variantImpression())
            }
        }, {
            key: "_handlePromoViewable",
            value: function() {
                this.settings.debug && console.debug("[" + r + "][_handlePromoViewable]"), this.promoViewable = !0, this.promoRendered && this._variantImpression()
            }
        }, {
            key: "_variantImpression",
            value: function() {
                this.settings.debug && console.debug("[" + r + "][_variantImpression]" + (this.variant.winner_title ? " title: " + this.variant.winner_title : "") + (this.variant.winner_thumbnail ? " thumbnail: " + this.variant.winner_thumbnail : ""));
                var t = "served",
                    e = {
                        event: t,
                        test_id: this.variant._id,
                        variant_id: this.variant.winner
                    };
                this.powa.once("promoPlay", this._variantClick), this._track(t, e)
            }
        }, {
            key: "_variantClick",
            value: function() {
                this.settings.debug && console.debug("[" + r + "][_variantClick]");
                var t = "clicked",
                    e = {
                        event: t,
                        test_id: this.variant._id,
                        variant_id: this.variant.winner
                    };
                this._track(t, e)
            }
        }, {
            key: "_track",
            value: function(t, e) {
                this.settings.debug && console.debug("[" + r + "][_track] " + t, e);
                var n = this.settings.debug ? console.debug : a.noop,
                    i = this.settings.debug ? console.debug : a.noop;
                (0, a.ajaxPOST)(PoWaSettings.banditoAPI({
                    type: t
                }), e, n, i)
            }
        }]), t
    }()
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        return {}
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IAS = void 0;
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        r = n(8),
        s = "https://static.adsafeprotected.com/vans-adapter-google-ima.js",
        l = !1;
    e.IAS = function() {
        function t(e) {
            return i(this, t), e.powa && e.iasID ? (this.powa = e.powa, this.iasID = e.iasID, this.customFields = e.customFields || o, this.adStartRequest = this.adStartRequest.bind(this), this.powa.on(PoWa.EVENTS.AD_START_REQUEST, this.adStartRequest), window.googleImaVansAdapter || l || (l = !0, (0, r.loadScript)(s, r.noop, console.error)), void 0) : null
        }
        return a(t, [{
            key: "adStartRequest",
            value: function(t) {
                var e = t.adContainer,
                    n = t.adMeta,
                    i = t.adsManager,
                    o = t.viewMode;
                if (window.googleImaVansAdapter) {
                    var a = Object.assign(this.customFields(n, o), {
                        anId: this.iasID,
                        campId: e.offsetWidth + "x" + e.offsetHeight
                    });
                    googleImaVansAdapter.init(window.google, i, e, a)
                }
            }
        }]), t
    }()
}, function(t, e) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e, n) {
        if (!1 === e.hasOwnProperty("partnerCode")) return !1;
        var i = document.createElement("script");
        n = n || t && ("undefined" != typeof t.O ? t.O.parentNode : document.body) || document.body;
        var o = [],
            a = {
                adsManager: t,
                ids: e,
                imaSDK: !0,
                events: [],
                dispatchEvent: function(t) {
                    var e = this.sendEvent,
                        n = this.events;
                    e ? (n && (n.push(t), t = n), e(t)) : n.push(t)
                }
            },
            r = {
                complete: "AdVideoComplete",
                firstquartile: "AdVideoFirstQuartile",
                impression: "AdImpression",
                loaded: "AdLoaded",
                midpoint: "AdVideoMidpoint",
                pause: "AdPaused",
                skip: "AdSkipped",
                start: "AdVideoStart",
                thirdquartile: "AdVideoThirdQuartile",
                volumeChange: "AdVolumeChange"
            };
        if (google && google.ima && t) {
            var s, l = "_moatApi" + Math.floor(1e8 * Math.random());
            for (s in google.ima.AdEvent.Type) {
                var u = function(e) {
                    if (a.sendEvent) {
                        for (e = o.length - 1; 0 <= e; e--) t.removeEventListener(o[e].type, o[e].func);
                        a.sendEvent(a.events)
                    } else a.events.push({
                        type: r[e.type] || e.type,
                        adVolume: t.getVolume()
                    })
                };
                t.addEventListener(google.ima.AdEvent.Type[s], u), o.push({
                    type: google.ima.AdEvent.Type[s],
                    func: u
                })
            }
        }
        l = "undefined" != typeof l ? l : "";
        var c, d;
        try {
            c = n.ownerDocument, d = c.defaultView || c.parentWindow
        } catch (t) {
            c = document, d = window
        }
        return d[l] = a, i.type = "text/javascript", n && n.appendChild(i), i.src = "https://z.moatads.com/" + e.partnerCode + "/moatvideo.js#" + l, a
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }();
    e.Moat = function() {
        function t(e) {
            return n(this, t), e.powa && e.moatID ? (this.settings = e, this.powa = e.powa, this.moatID = e.moatID, this.adStartRequest = this.adStartRequest.bind(this), this.powa.on(PoWa.EVENTS.AD_START_REQUEST, this.adStartRequest), void 0) : null
        }
        return o(t, [{
            key: "adStartRequest",
            value: function(t) {
                var e = this.settings.slicers ? this.settings.slicers(t) : {},
                    n = t.adsManager,
                    o = t.adContainer,
                    a = t.viewMode,
                    r = Object.assign({
                        partnerCode: this.moatID,
                        viewMode: a
                    }, e);
                i(n, r, o)
            }
        }]), t
    }()
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Playthrough = void 0;
    var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        a = n(8),
        r = n(9),
        s = "Playthrough",
        l = Object.freeze({
            playthroughFetchPercentage: null,
            playthroughFetchTime: null,
            error: console.error
        });
    e.Playthrough = function() {
        function t(e) {
            var n = this;
            i(this, t), this.settings = (0, a.extend)({}, l, e), this.dataset = this.settings.powa ? this.settings.powa.getElement().dataset : {}, this.dataset = (0, r.map)(this.dataset, a.parseString);
            var o = (0, a.get)(e.powa.getVideoData(), "additional_properties.embedContinuousPlay");
            return this.dataset.playthrough && o && (this.settings.playthroughFetchTime || this.settings.playthroughFetchPercentage) ? (["setupListeners", "recommendedURL", "fetchRecommendedPlaylist", "loadRecommendedPlaylist", "time"].forEach(function(t) {
                return n[t] = n[t].bind(n)
            }), this.id = e.id, this.powa = e.powa, this.loaded = !1, this.setupListeners(), void 0) : (this.settings.playthroughFetchTime || this.settings.playthroughFetchPercentage || console.warn("[" + s + "][WARN] neither 'playthroughFetchTime' nor 'playthroughFetchPercentage' configured"), null)
        }
        return o(t, [{
            key: "setupListeners",
            value: function() {
                var t = this;
                (0, r.forEach)(PoWa.EVENTS, function(e) {
                    t[e] && t.powa.on(e, t[e])
                }), this.powa.on("loadRecommendedPlaylist", function(e) {
                    t.loadRecommendedPlaylist()
                })
            }
        }, {
            key: "recommendedURL",
            value: function(t) {
                return PoWaSettings.videoAPI({
                    uuid: t,
                    type: "recommended",
                    env: this.dataset.env
                })
            }
        }, {
            key: "fetchRecommendedPlaylist",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.noop,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.noop;
                (0, a.getJSONP)({
                    url: this.recommendedURL(t),
                    resolve: function(i) {
                        i.length ? e(i) : n({
                            uuid: t,
                            error: "Failed recommendedPlaylist API call",
                            message: "No video data available for " + t + "."
                        })
                    },
                    reject: n,
                    callbackParam: "cb",
                    id: t.replace(/-/g, "")
                })
            }
        }, {
            key: "loadRecommendedPlaylist",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.powa.setPlaylist,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.settings.error;
                this.loaded || (this.loaded = !0, this.powa.off(PoWa.EVENTS.TIME, this.time), this.fetchRecommendedPlaylist((0, a.get)(this, "powa.videoData._id"), t, e))
            }
        }, {
            key: "time",
            value: function t(e) {
                var n = e.duration,
                    t = e.time;
                t && n && (this.settings.playthroughFetchTime && t >= this.settings.playthroughFetchTime || t / n >= this.settings.playthroughFetchPercentage) && this.loadRecommendedPlaylist()
            }
        }]), t
    }()
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t) {
        var e = (0, h.find)(t.additional_properties.imageResizerUrls, function(t) {
                return t && t.size && t.size === PoWaSettings.promo.size
            }),
            n = e && e.url ? e.url : PoWaSettings.imageResizer(t.promo_image);
        return n.replace(T, "")
    }

    function a(t, e, n) {
        function i() {
            var s = Date.now();
            if (s >= o + n) t.scrollLeft = e;
            else {
                var l = (s - o) / n;
                t.scrollLeft = a + r * l, requestAnimationFrame(i)
            }
        }
        var o = Date.now(),
            a = t.scrollLeft,
            r = e - a;
        requestAnimationFrame(i)
    }

    function r(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = '\n\t\t<div class="' + S.PLAYLIST_ITEM + '" id="' + (S.PLAYLIST_ITEM + "_" + t._id) + '" data-uuid="' + t._id + '">\n\t\t\t<div class="powa-discovery-playlist-item-promo" style="background-image: url(\'' + o(t) + '\')">\n\t\t\t\t<div class="powa-discovery-playlist-item-overlay">\n\t\t\t\t\t<div class="powa-discovery-playlist-item-playing powa-discovery-hidden">Now Playing</div>\n\t\t\t\t\t<div class="powa-discovery-playlist-item-duration">' + (0, p.formatTime)(t.duration / p.ONE_SECOND) + '</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="powa-discovery-playlist-item-blurb ' + (e ? "franklin-bold" : "") + '">' + t.headlines.basic + "</div>\n\t\t</div>\n\t";
        return n.trim()
    }

    function s() {
        return '<div class="powa-discovery-extras-break"></div>'
    }

    function l(t) {
        t = Array.isArray(t) ? t : [t];
        var e = t.reduce(function(t, e, n) {
                return "" + t + (t ? s() : "") + r(e, 0 === n)
            }, ""),
            n = '\n\t\t<div class="powa-discovery-chapter">\n\t\t\t<div id="chapter-playlist_' + t[0]._id + '" class="powa-discovery-chapter-playlist">' + e + "</div>\n\t\t</div>\n\t\t";
        return n.trim()
    }

    function u() {
        return '<div class="powa-discovery-chapter-break"></div>'
    }

    function c(t) {
        var e = t.playlistItems.reduce(function(t, e, n) {
                return "" + t + (t ? u() : "") + l([e])
            }, ""),
            n = '\n\t\t<div class="powa-discovery franklin-light">\n\t\t\t<div class="powa-discovery-header">\n\t\t\t\t<div class="powa-discovery-title franklin-bold">' + t.playlistName + '</div>\n\t\t\t\t<div class="powa-discovery-controls">\n\t\t\t\t\t<div class="powa-discovery-control powa-discovery-control-left"><i class="powa-discovery-control-icon fa fa-arrow-left"></i></div>\n\t\t\t\t\t<div class="powa-discovery-control powa-discovery-control-right"><i class="powa-discovery-control-icon fa fa-arrow-right"></i></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="powa-discovery-playlist-wrapper">\n\t\t\t\t<div class="powa-discovery-playlist">\n\t\t\t\t\t' + e + "\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t";
        return n.trim()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Discovery = void 0;
    var d = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        p = n(8),
        f = n(7),
        h = n(9),
        g = "event121",
        m = "event122",
        v = 20,
        w = p.ONE_SECOND / 2,
        y = p.ONE_SECOND / 2,
        b = '\n\t.franklin-bold {\n\t    font-family: "FranklinITCProBold", "Helvetica Neue Bold", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;\n\t}\n\n\t.franklin-light {\n\t    font-family: "FranklinITCProLight", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;\n\t}\n\n\t.powa-discovery-hidden {\n\t\tdisplay: none;\n\t}\n\n\t.powa-discovery-tinted {\n\t\tbackground: rgba(0,0,0, 0.5);\n\t}\n\n\t.powa-discovery {\n\t\tbackground-color: #FAFAFA;\n\t\tborder: 1px solid #E1E1E1;\n\t\tborder-radius: 0 0 4px 4px;\n\t\tbox-sizing: border-box;\n\t\tcolor: #222222;\n\t\tfont-size: 14px;\n\t\tpadding-bottom: ' + v + "px;\n\t}\n\n\t.powa-discovery-header {\n\t\tbox-sizing: border-box;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tfont-size: 18px;\n\t\tpadding: " + v + "px;\n\t\twidth: 100%;\n\t}\n\n\t.powa-discovery-title {\n\t}\n\n\t.powa-discovery-controls {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t}\n\n\t.powa-discovery-control {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t.powa-discovery-control-icon {\n\t\tcursor: pointer;\n\t\tmargin: 0 " + v / 2 + "px;\n\t}\n\n\t.powa-discovery-control-left {\n\t\tjustify-content: flex-end;\n\t}\n\n\t.powa-discovery-control-right {\n\t\tjustify-content: flex-start;\n\t}\n\n\t.powa-discovery-playlist-wrapper {\n\t\toverflow-x: scroll;\n\t}\n\n\t.powa-discovery-playlist {\n\t\tdisplay: flex;\n\t\twidth: auto;\n\t}\n\n\t.powa-discovery-chapter {\n\t\tpadding-right: " + v + "px;\n\t}\n\n\t.powa-discovery-chapter:first-of-type {\n\t\tpadding-left: 15px;\n\t}\n\n\t.powa-discovery-chapter:last-of-type {\n\t\tpadding-right: 15px;\n\t}\n\n\t.powa-discovery-chapter-break {\n\t\tbackground-color: black;\n\t\tborder-radius: 1px;\n\t\theight: auto;\n\t\tmargin-right: " + v + "px;\n\t\tpadding: 1px;\n\t}\n\n\t.powa-discovery-extras-break {\n\t\tbackground-color: darkgray;\n\t\tborder-radius: 1px;\n\t\theight: 84px;\n\t\tmargin-right: " + v + "px;\n\t\tpadding-right: 1px;\n\t}\n\n\t.powa-discovery-chapter-playlist {\n\t\tdisplay: flex;\n\t}\n\n\t.powa-discovery-playlist-item {\n\t\tmargin-right: " + v + "px;\n\t\twidth: 150px;\n\t\ttransition: all " + w / p.ONE_SECOND + "s;\n\t}\n\n\t.powa-discovery-playlist-item:last-child {\n\t\tmargin-right: 0;\n\t}\n\n\t.powa-discovery-playlist-item-hidden {\n\t\topacity: 0;\n\t\twidth: 0;\n\t}\n\n\t.powa-discovery-playlist-item-promo {\n\t\tcursor: pointer;\n\t\tmargin-bottom: " + v / 2 + "px;\n\t\twidth: 100%;\n\t\theight: 84px;\n\t\tbackground-size: cover;\n\t\tbackground-position: center;\n\t}\n\n\t.powa-discovery-playlist-item-overlay {\n\t\tdisplay: flex;\n\t\talign-items: flex-end;\n\t\theight: 100%;\n\t\tcolor: white;\n\t\tfont-size: 12px;\n\t\tline-height: 20px;\n\t\ttext-shadow: 1px 1px 5px black;\n\t}\n\n\t.powa-discovery-playlist-item-playing {\n\t\tmargin-left: 10px;\n\t\tmargin-bottom: 8px;\n\t}\n\n\t.powa-discovery-playlist-item-duration {\n\t\tmargin-left: 10px;\n\t\tmargin-bottom: 8px;\n\t}\n\n\t.powa-discovery-playlist-item-blurb {\n\t\ttransition: opacity " + y / p.ONE_SECOND + "s;\n\t\tline-height: 17px;\n\t\tmargin: 0;\n\t\twidth: 100%;\n\t}\n\n\t.powa-discovery-playlist-item-blurb-hidden {\n\t\topacity: 0;\n\t}\n\n\t@media only screen and (min-width: 480px) {\n\t\t.powa-discovery {\n\t\t\tfont-size: 16px;\n\t\t}\n\n\t\t.powa-discovery-chapter:first-of-type {\n\t\t\tpadding-left: " + v + "px;\n\t\t}\n\n\t\t.powa-discovery-chapter:last-of-type {\n\t\t\tpadding-right: " + v + "px;\n\t\t}\n\n\t\t.powa-discovery-extras-break {\n\t\t\theight: 101px;\n\t\t}\n\n\t\t.powa-discovery-playlist-item {\n\t\t\twidth: 180px;\n\t\t}\n\n\t\t.powa-discovery-playlist-item-promo {\n\t\t\theight: 101px;\n\t\t}\n\n\t\t.powa-discovery-playlist-item-duration {\n\t\t\tfont-size: 13px;\n\t\t}\n\n\t\t.powa-discovery-playlist-item-blurb {\n\t\t\tline-height: 20px;\n\t\t}\n\t}\n",
        _ = '\n\t@font-face {\n\t\tfont-family: "FranklinITCProBold";\n\t\tsrc: url("https://d1pz6dax0t5mop.cloudfront.net/fonts/Franklin-ITC-Pro-Bold/e9e4c4dc-e548-4fef-9aa1-80c9cd0f02ce-2.eot");\n\t\tsrc: url("https://d1pz6dax0t5mop.cloudfront.net/fonts/Franklin-ITC-Pro-Bold/e9e4c4dc-e548-4fef-9aa1-80c9cd0f02ce-2.eot?") format("embedded-opentype"),\n\t\t\turl("https://d1pz6dax0t5mop.cloudfront.net/fonts/Franklin-ITC-Pro-Bold/e9e4c4dc-e548-4fef-9aa1-80c9cd0f02ce-3.woff") format("woff"),\n\t\t\turl("https://d1pz6dax0t5mop.cloudfront.net/fonts/Franklin-ITC-Pro-Bold/e9e4c4dc-e548-4fef-9aa1-80c9cd0f02ce-1.ttf") format("truetype"),\n\t\t\turl("https://d1pz6dax0t5mop.cloudfront.net/fonts/Franklin-ITC-Pro-Bold/e9e4c4dc-e548-4fef-9aa1-80c9cd0f02ce-4.svg#web") format("svg");\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t}\n\n\t@font-face {\n\t\tfont-family: "FranklinITCProLight";\n\t\tsrc: url("https://d1pz6dax0t5mop.cloudfront.net/fonts/Franklin-ITC-Pro-Light/b147bee6-eb48-46e1-86e1-2538a46794b6-2.eot");\n\t\tsrc: url("https://d1pz6dax0t5mop.cloudfront.net/fonts/Franklin-ITC-Pro-Light/b147bee6-eb48-46e1-86e1-2538a46794b6-2.eot?") format("embedded-opentype"),\n\t\t\turl("https://d1pz6dax0t5mop.cloudfront.net/fonts/Franklin-ITC-Pro-Light/b147bee6-eb48-46e1-86e1-2538a46794b6-3.woff") format("woff"),\n\t\t\turl("https://d1pz6dax0t5mop.cloudfront.net/fonts/Franklin-ITC-Pro-Light/b147bee6-eb48-46e1-86e1-2538a46794b6-1.ttf") format("truetype"),\n\t\t\turl("https://d1pz6dax0t5mop.cloudfront.net/fonts/Franklin-ITC-Pro-Light/b147bee6-eb48-46e1-86e1-2538a46794b6-4.svg#web") format("svg");\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t}\n',
        A = Object.freeze({
            error: console.error
        }),
        S = Object.freeze({
            PLAYLIST_ITEM: "powa-discovery-playlist-item"
        }),
        E = Object.freeze((0, h.map)(S, function(t) {
            return "." + t
        })),
        k = Object.freeze({}),
        T = /^http:/;
    e.Discovery = function() {
        function t(e) {
            var n = this;
            return i(this, t), this.settings = (0, p.extend)({}, A, e), this.dataset = this.settings.powa ? this.settings.powa.getElement().dataset : {}, this.dataset = (0, h.map)(this.dataset, p.parseString), this.dataset.discovery ? ((0, p.addCSS)(b), ["ensureFonts", "setTracking", "setNowPlaying", "checkForExtras", "onStart", "playlistURL", "fetchPlaylist", "extrasURL", "fetchExtras", "handlePlaylist", "createUI", "playlistItemClickHandler", "controlLeftClicked", "controlRightClicked", "handleEvents"].forEach(function(t) {
                return n[t] = n[t].bind(n)
            }), this.id = e.id, this.powa = e.powa, this.$player = (0, f.$)("#" + this.id), this.powaObj = window.powas[this.id], this.powaObj.discovery = {}, this.fetchPlaylist(this.dataset.playlist, function(t) {
                n.handlePlaylist(t), n.createUI(t), n.handleEvents(), n.onStart()
            }, this.settings.error), this.ensureFonts(), void 0) : null
        }
        return d(t, [{
            key: "ensureFonts",
            value: function() {
                var t = !1;
                (0, p.hasFont)("FranklinITCProBold", function(e) {
                    e || t || (t = !0, (0, p.addCSS)(_))
                }), (0, p.hasFont)("FranklinITCProLight", function(e) {
                    e || t || (t = !0, (0, p.addCSS)(_))
                })
            }
        }, {
            key: "setTracking",
            value: function(t) {
                this.powaObj.discovery.tracking = this.playlist.reduce(function(e, n) {
                    var i = n.videoData,
                        o = n.extras;
                    return e ? e : t === i._id ? g : o.reduce(function(e, n) {
                        return e ? e : t === n._id ? m : ""
                    }, "")
                }, "")
            }
        }, {
            key: "setNowPlaying",
            value: function(t) {
                var e = this.$discovery.find(".powa-discovery-playlist-item-playing"),
                    n = this.$discovery.find("#powa-discovery-playlist-item_" + t),
                    i = this.$discovery.find(".powa-discovery-playlist-item-overlay .powa-discovery-tinted"),
                    o = this.$discovery.find(".powa-discovery-playlist-item-duration .powa-discovery-hidden");
                i.removeClass("powa-discovery-tinted"), o.removeClass("powa-discovery-hidden"), e.addClass("powa-discovery-hidden"), n.find(".powa-discovery-playlist-item-overlay").addClass("powa-discovery-tinted"), n.find(".powa-discovery-playlist-item-duration").addClass("powa-discovery-hidden"), n.find(".powa-discovery-playlist-item-playing").removeClass("powa-discovery-hidden")
            }
        }, {
            key: "checkForExtras",
            value: function(t) {
                var e = this,
                    n = this.playlist.find(function(e) {
                        var n = e.videoData,
                            i = e.extras;
                        return n._id === t && !i.length
                    });
                if (n)
                    if ((0, p.get)(n, "videoData.related_content.basic")) {
                        var i = n.videoData.related_content.basic.filter(function(t) {
                            return t.referent && "video" === t.referent.type
                        }).map(function(t) {
                            return t.referent.id
                        });
                        i.length ? this.fetchExtras(i, function(i) {
                            n.extras = i, e.powa.setPlaylist(e.playlist.reduce(function(t, e) {
                                var n = [e.videoData].concat(e.extras);
                                return t.concat(n)
                            }, []));
                            var o = (0, f.$)(i.reduce(function(t, e) {
                                return "" + t + s() + r(e)
                            }, ""));
                            o.on("click", e.playlistItemClickHandler);
                            var a = o.find(".powa-discovery-playlist-item-blurb"),
                                l = (0, f.$)("#chapter-playlist_" + t);
                            a.hide(), a.addClass("powa-discovery-playlist-item-blurb-hidden"), o.addClass("powa-discovery-playlist-item-hidden"), requestAnimationFrame(function() {
                                l.append(o), requestAnimationFrame(function() {
                                    o.removeClass("powa-discovery-playlist-item-hidden"), setTimeout(function() {
                                        return requestAnimationFrame(function() {
                                            a.show(), requestAnimationFrame(function() {
                                                return a.removeClass("powa-discovery-playlist-item-blurb-hidden")
                                            })
                                        })
                                    }, w)
                                })
                            })
                        }) : console.debug("no extras")
                    } else console.debug("no related content")
            }
        }, {
            key: "onStart",
            value: function() {
                var t = this;
                this.powa.on(PoWa.EVENTS.START, function(e) {
                    var n = (0, p.get)(t.powa, "videoData._id");
                    n && (t.setTracking(n), t.setNowPlaying(n), t.checkForExtras(n))
                })
            }
        }, {
            key: "playlistURL",
            value: function(t) {
                return PoWaSettings.videoAPI({
                    playlist: t,
                    type: "playlist",
                    env: this.dataset.api || this.dataset.env
                })
            }
        }, {
            key: "fetchPlaylist",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.noop,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.noop;
                (0, p.getJSONP)({
                    url: this.playlistURL(t),
                    resolve: function(i) {
                        i.playlistItems && i.playlistItems.length ? e(i) : n({
                            playlistID: t,
                            error: "Failed playlist API call",
                            message: "No playlistItems available for '" + t + "'."
                        })
                    },
                    reject: n,
                    callbackParam: "cb",
                    id: t.replace(/\W/g, "")
                })
            }
        }, {
            key: "extrasURL",
            value: function(t) {
                return PoWaSettings.videoAPI({
                    uuids: t,
                    type: "videos",
                    env: this.dataset.api || this.dataset.env
                })
            }
        }, {
            key: "fetchExtras",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.noop,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.noop;
                (0, p.getJSONP)({
                    url: this.extrasURL(t),
                    resolve: function(i) {
                        i.length ? e(i) : n({
                            uuids: t,
                            error: "Failed extras API call",
                            message: "No data available for '" + t + "'."
                        })
                    },
                    reject: n,
                    callbackParam: "cb",
                    id: (0, p.hash)(t)
                })
            }
        }, {
            key: "handlePlaylist",
            value: function(t) {
                this.powa.setPlaylist(t.playlistItems), this.playlist = t.playlistItems.map(function(t) {
                    return {
                        videoData: t,
                        extras: []
                    }
                })
            }
        }, {
            key: "createUI",
            value: function(t) {
                this.$discovery = (0, f.$)(c(t)), this.$discovery.css((0, p.extend)({
                    width: this.$player.width + "px"
                }, k)), this.$scroller = this.$discovery.find(".powa-discovery-playlist-wrapper"), this.$controlLeft = this.$discovery.find(".powa-discovery-control-left"), this.$controlRight = this.$discovery.find(".powa-discovery-control-right"), this.$player.after(this.$discovery)
            }
        }, {
            key: "playlistItemClickHandler",
            value: function(t) {
                var e = t.currentTarget.getAttribute("data-uuid");
                e && this.powa.loadVideo(e, this.powa.play)
            }
        }, {
            key: "controlLeftClicked",
            value: function() {
                var t = this.$discovery.elements[0].getBoundingClientRect().left,
                    e = this.$discovery.find(E.PLAYLIST_ITEM),
                    n = e.width(),
                    i = e.elements.reduce(function(e, i) {
                        var o = i.getBoundingClientRect().left - t + window.pageXOffset;
                        return o >= -n && o < v ? o : e
                    }, 0),
                    o = this.$scroller.elements[0],
                    r = o.scrollLeft + i - 3 * v;
                a(o, r, p.ONE_SECOND / 4)
            }
        }, {
            key: "controlRightClicked",
            value: function() {
                var t = this.$discovery.elements[0].getBoundingClientRect().left,
                    e = this.$discovery.find(E.PLAYLIST_ITEM),
                    n = e.width(),
                    i = e.elements.reduce(function(e, i) {
                        var o = i.getBoundingClientRect().left - t + window.pageXOffset;
                        return o >= -v && o < n ? o : e
                    }, 0),
                    o = this.$scroller.elements[0],
                    r = o.scrollLeft + i + n - v;
                a(o, r, p.ONE_SECOND / 4)
            }
        }, {
            key: "handleEvents",
            value: function() {
                var t = this;
                this.$player.on(PoWa.EVENTS.RESIZE, function(e) {
                    return t.$discovery.css({
                        width: e.width + "px"
                    })
                });
                var e = this.$discovery.find(E.PLAYLIST_ITEM);
                e.on("click", this.playlistItemClickHandler), this.$controlLeft.on("click", this.controlLeftClicked), this.$controlRight.on("click", this.controlRightClicked)
            }
        }]), t
    }()
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t) {
        return N.has(t) || N.set(t, {}), N.get(t)
    }

    function r(t) {
        var e = this;
        a(this).timeout && window.clearTimeout(a(this).timeout), a(this)._$bar.addClass("active"), a(this).timeout = window.setTimeout(function() {
            a(e)._$bar.removeClass("active")
        }, t)
    }

    function s() {
        (0, d.addCSS)(m.default, "powa-controls"), this.hideNativeControls()
    }

    function l() {
        var t = this;
        a(this)._$bar = (0, p.$)(h.default), (M.isMobile || M.isTablet) && a(this)._$bar.addClass("mobile"), a(this)._$el.append(a(this)._$bar), a(this)._$ctrls = a(this)._$bar.find(".powa-ctrls");
        var e = a(this)._$bar.find(".powa-overlay-wrap"),
            n = a(this)._$ctrls.find(".powa-ctrls-left"),
            i = a(this)._$ctrls.find(".powa-ctrls-right");
        a(this)._Components.forEach(function(o) {
            var r = o.getEl();
            r.hasClass("ctrls-left") ? n.append(r) : r.hasClass("ctrls-right") ? i.append(r) : r.hasClass("ctrls-overlay") ? e.append(r) : a(t)._$ctrls.append(r)
        })
    }

    function u() {
        var t = this;
        a(this)._Components.forEach(function(t) {
            return t.setup()
        }), a(this)._powa.on(window.PoWa.EVENTS.AD_START, function(e) {
            a(t)._$bar.addClass("powa-ctrls-hide")
        }), a(this)._powa.on(window.PoWa.EVENTS.END, function(e) {
            a(t)._$bar.addClass("powa-ctrls-hide")
        }), a(this)._powa.on(window.PoWa.EVENTS.PLAY, function(e) {
            a(t)._$bar.removeClass("powa-ctrls-hide"), a(t)._$bar.removeClass("powa-pause");
            var n = "live" === (0, d.get)(a(t)._powa.getVideoData(), "video_type");
            n ? a(t)._$bar.addClass("live") : a(t)._$bar.removeClass("live")
        }), a(this)._powa.on(window.PoWa.EVENTS.PAUSE, function(e) {
            a(t)._$bar.addClass("powa-pause")
        }), a(this)._powa.on(window.PoWa.EVENTS.START, function(e) {
            var n = "live" === (0, d.get)(a(t)._powa.getVideoData(), "video_type");
            n ? a(t)._$bar.addClass("live") : a(t)._$bar.removeClass("live")
        }), a(this)._$ctrls.on("click", function(t) {
            t.stopPropagation()
        }), a(this)._$bar.on("click", function(e) {
            e.stopPropagation(), M.isMobile ? a(t)._$bar.hasClass("active") || a(t)._$bar.hasClass("powa-pause") ? (window.clearTimeout(a(t).timeout), r.call(t, L), a(t)._powa.togglePlay()) : r.call(t, L) : a(t)._powa.togglePlay()
        }), M.isMobile && window.addEventListener("click", function(e) {
            window.clearTimeout(a(t).timeout), a(t)._$bar.removeClass("active")
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var c = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        d = n(8),
        p = n(7),
        f = n(144),
        h = i(f),
        g = n(145),
        m = i(g),
        v = n(146),
        w = i(v),
        y = n(150),
        b = i(y),
        _ = n(153),
        A = i(_),
        S = n(156),
        E = i(S),
        k = n(159),
        T = i(k),
        P = n(162),
        x = i(P),
        D = n(165),
        O = i(D),
        C = n(168),
        I = i(C),
        M = (0, d.sniffClient)(),
        N = new WeakMap,
        L = 3e3,
        R = function() {
            function t(e) {
                if (o(this, t), !e.id && !e.powa) throw "Invalid settings to setup Scrubber";
                a(this)._$el = (0, p.$)("#" + e.id), a(this)._$videoEl = a(this)._$el.find("video"), a(this)._powa = e.powa, a(this)._Components = [], e.playPause && !M.isMobile && a(this)._Components.push(new b.default(e)), e.progress && a(this)._Components.push(new O.default(e)), e.fullscreen && a(this)._Components.push(new A.default(e)), e.volume && a(this)._Components.push(new E.default(e)), e.share && a(this)._Components.push(new T.default(e)), e.extras && a(this)._Components.push(new x.default(e)), e.scrubber && !e.live && a(this)._Components.push(new w.default(e)), e.overlay && a(this)._Components.push(new I.default(e)), s.call(this), l.call(this), u.call(this)
            }
            return c(t, [{
                key: "hideNativeControls",
                value: function() {
                    a(this)._$videoEl.removeAttr("controls")
                }
            }, {
                key: "showNativeControls",
                value: function() {
                    a(this)._$videoEl.attr("controls", "controls"), a(this)._$videoEl.attr("playsinline", "playsinline")
                }
            }, {
                key: "hide",
                value: function() {
                    a(this)._$bar.addClass("off")
                }
            }, {
                key: "show",
                value: function() {
                    a(this)._$bar.removeClass("off")
                }
            }]), t
        }();
    e.default = R
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = '\n    <div class="powa-custom-ctrls powa-ctrls-hide">\n        <div class="powa-overlay-wrap"></div>\n        <div class="powa-ctrls">\n            <div class="powa-ctrls-top">\n                <div class="powa-ctrls-left"></div>\n                <div class="powa-ctrls-right"></div>\n            </div>\n        </div>\n    </div>\n';
    e.default = n.trim()
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = "\n    .powa-custom-ctrls {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n    }\n\n    .powa-custom-ctrls {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n    }\n\n    .powa.xSmall .powa-custom-ctrls.live .powa-ctrls-left {\n        width: 100%;\n        justify-content: space-between;\n    }\n\n    .powa-ctrls {\n        z-index: 1;\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        color: white;\n    }\n\n    .powa-ctrls.mobile {\n        display: none;\n    }\n\n    .powa-ctrls.mobile.active, .powa-ctrls.mobile.powa-pause {\n        display: block;\n    }\n\n    .powa.fullscreen .powa-custom-ctrls {\n        /*display: none;*/\n    }\n\n    .powa-ctrls .fa {\n        font-size: 20px;\n        text-shadow: none;\n    }\n\n    .powa-wrap.mobile.sticky {\n        font-size: 16px;\n    }\n\n    .powa-ctrls-left, .powa-ctrls-right {\n        display: flex;\n    }\n\n    .powa-ctrls-top {\n        display: none;\n    }\n\n    .powa-custom-ctrls:not(.mobile):hover .powa-ctrls .powa-ctrls-top {\n        display: flex;\n    }\n\n\t.powa-custom-ctrls.active.mobile .powa-ctrls .powa-ctrls-top, .powa-custom-ctrls.powa-pause .powa-ctrls .powa-ctrls-top {\n\t\tdisplay: flex;\n    }\n    \n    .powa-custom-ctrls.fullscreen:not(.active) .powa-custom-ctrls {\n\t\tdisplay: none;\n    }\n    \n    .powa.fullscreen .powa-custom-ctrls, .powa.fullscreen .powa-custom-ctrls.active {\n        /*display: none;*/\n    }\n\n    .powa-ctrls-top {\n        justify-content: space-between;\n        padding: 10px 12px;\n    }\n\n    .powa.xSmall .powa-ctrls-left {\n        width: 100%;\n    }\n\n    .powa-ctrls-right .ctrls-item {\n        margin-right: 3px;\n    }\n\n    .ctrls-item {\n        text-align: center;\n        width: 40px;\n        cursor: pointer;\n        position: relative;\n    }\n\n    .powa-ctrls-icon {\n        line-height: 30px;\n        width: 40px;\n    }\n\n    .powa-wrap.sticky .powa-ctrls-icon {\n        width: 32px;\n    }\n\n    .powa-wrap.sticky.mobile .powa-ctrls-icon {\n        height: 24px;\n        line-height: 24px;\n    }\n\n    .powa-ctrls-popup {\n        display: none;\n    }\n\n    .powa-ctrls-hide {\n        display: none;\n    }\n\n    .powa.xSmall .powa-ctrls-top {\n        padding: 5px 8px;\n    }\n\n    .powa-ctrls-right .ctrls-item {\n        margin-right: 15px;\n    }\n\n    .powa-ctrls-right .ctrls-item:last-child {\n        margin-right: 0\n    }\n\n    .powa-ctrls-top {\n        padding:12px;\n    }\n\n    .powa-wrap.sticky.mobile .powa-ctrls-top {\n        padding: 6px;\n    }\n"
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        l = n(147),
        u = i(l),
        c = n(148),
        d = i(c),
        p = n(149),
        f = i(p),
        h = n(7),
        g = n(8),
        m = function(t) {
            function e(t) {
                o(this, e);
                var n = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return (0, g.addCSS)(f.default, "powa-controls-scrubber"), n._$el = (0, h.$)(d.default), n._$scrubber = n._$el.find(".powa-ctrls-scrubber"), n
            }
            return r(e, t), s(e, [{
                key: "setup",
                value: function() {
                    var t = this,
                        e = !1,
                        n = void 0;
                    this._powa.on("time", function(n) {
                        e || t._$scrubber.css({
                            width: n.time / n.duration * 100 + "%"
                        })
                    }), this._$el.on("click", function(e) {
                        var n = t._$scrubber.elements[0].getBoundingClientRect(),
                            i = n.left,
                            o = e.clientX - i,
                            a = o / t._$el.elements[0].offsetWidth;
                        t._powa.seekPosition(a)
                    }), this._$el.on("touchstart", function(t) {
                        e = !0
                    }), this._$el.on("touchend", function(i) {
                        if (e && n) {
                            var o = t._$scrubber.elements[0].getBoundingClientRect(),
                                a = o.left,
                                r = (n.touches[0].clientX - a) / t._$el.elements[0].offsetWidth;
                            t._powa.seekPosition(r)
                        }
                        e = !1
                    }), this._$el.on("touchmove", function(i) {
                        if (n = i, e) {
                            var o = t._$scrubber.elements[0].getBoundingClientRect(),
                                a = o.left,
                                r = i.clientX - a,
                                s = r / t._$el.elements[0].offsetWidth;
                            t._$scrubber.css({
                                width: 100 * s + "%"
                            })
                        }
                    }), this._$el.on("mousedown", function(t) {
                        e = !0
                    }), this._$el.on("mouseup", function(n) {
                        if (e) {
                            var i = t._$scrubber.elements[0].getBoundingClientRect(),
                                o = i.left,
                                a = n.clientX - o,
                                r = a / t._$el.elements[0].offsetWidth;
                            t._powa.seekPosition(r)
                        }
                        e = !1
                    }), this._$el.on("mousemove", function(n) {
                        if (e) {
                            var i = t._$scrubber.elements[0].getBoundingClientRect(),
                                o = i.left,
                                a = n.clientX - o,
                                r = a / t._$el.elements[0].offsetWidth;
                            t._$scrubber.css({
                                width: 100 * r + "%"
                            })
                        }
                    }), this._$el.on("mouseleave", function(n) {
                        if (e) {
                            var i = t._$scrubber.elements[0].getBoundingClientRect(),
                                o = i.left,
                                a = n.clientX - o,
                                r = a / t._$el.elements[0].offsetWidth;
                            t._powa.seekPosition(r), e = !1
                        }
                    })
                }
            }, {
                key: "getEl",
                value: function() {
                    return this._$el
                }
            }]), e
        }(u.default);
    e.default = m
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        a = n(7),
        r = function() {
            function t(e) {
                i(this, t), this._id = e.id, this._powa = e.powa, this._$powaEl = (0, a.$)("#" + e.id), this._video = this._$powaEl.find(".powa-video").elements[0]
            }
            return o(t, [{
                key: "setup",
                value: function() {}
            }, {
                key: "getEl",
                value: function() {}
            }]), t
        }();
    e.default = r
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = '\n\t<div class="powa-ctrls-scrubber-wrap">\n\t\t<div class="powa-ctrls-scrubber">\n\t\t\t<div class="powa-ctrls-scrubber-head"></div>\n\t\t</div>\n\t</div>\n';
    e.default = n.trim()
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = "\n\t.powa-custom-ctrls.live .powa-ctrls-scrubber-wrap {\n\t\tdisplay: none;\n\t} \n\t\n\t.powa-custom-ctrls:not(.mobile):hover .powa-ctrls-scrubber-wrap {\n\t\theight: 16px;\n\t}\n\n\t.powa.fullscreen:not(.active) .powa-ctrls-scrubber-wrap {\n\t\tdisplay: none;\n\t}\n\n\t/* new rules for fs */\n\t.powa.fullscreen:not(.active) .powa-custom-ctrls {\n\t\tdisplay: none;\n\t}\n\n\t.powa-custom-ctrls.mobile:not(.active):not(.powa-pause) .powa-ctrls-scrubber-wrap {\n\t\tdisplay: none;\n\t}\n\n\t.powa-custom-ctrls.active.mobile .powa-ctrls-scrubber-wrap, .powa-custom-ctrls.powa-pause .powa-ctrls-scrubber-wrap {\n\t\theight: 16px;\n\t}\n\n\t.powa-ctrls-scrubber-wrap {\n\t\twidth: 100%;\n\t\theight: 5px;\n\t\tbackground: rgba(0, 0, 0, 0.7);\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t}\n\n\t/*.powa-custom-ctrls:not(.pause):hover .powa-ctrls-scrubber-wrap {\n\t\tbackground: rgba(0, 0, 0, 1);\n\t}*/\n\n\t.powa-ctrls-scrubber {\n\t\tposition: relative;\n\t\tbackground: rgba(255, 255, 255, .7);\n\t\theight: 100%;\n\t\twidth: 0%;\n\t}\n\n\t.powa-ctrls-scrubber-head {\n\t\tdisplay: none;\n\t\twidth: 16px;\n\t\theight: 16px;\n\t\tborder-radius: 50%;\n\t\tbackground: white;\n\t\tright: -8px;\n\t\tposition: absolute;\n\t}\n\n\t.powa-custom-ctrls:not(.mobile):hover .powa-ctrls-scrubber-head, .powa-custom-ctrls.active .powa-ctrls-scrubber-head, .powa-custom-ctrls.powa-pause .powa-ctrls-scrubber-head {\n\t\tdisplay: block;\n\t}\n"
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        l = n(147),
        u = i(l),
        c = n(151),
        d = i(c),
        p = n(152),
        f = i(p),
        h = n(7),
        g = n(8),
        m = function(t) {
            function e(t) {
                o(this, e);
                var n = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return (0, g.addCSS)(f.default, "powa-controls-playpause"), n._$el = (0, h.$)(d.default), n._$playPause = n._$el.find(".powa-ctrls-play"), n
            }
            return r(e, t), s(e, [{
                key: "setup",
                value: function() {
                    var t = this,
                        e = !0,
                        n = (0, g.get)(window, "PoWaSettings.client");
                    this._$playPause.on("click", function(i) {
                        n.isFirefox && e ? (t._powa.play(), e = !1) : t._powa.togglePlay()
                    }), this._powa.on(window.PoWa.EVENTS.PLAY, function(i) {
                        n.isFirefox && e ? (t._$playPause.addClass("fa-play"), t._$playPause.removeClass("fa-pause")) : (t._$playPause.removeClass("fa-play"), t._$playPause.addClass("fa-pause"))
                    }), this._powa.on(window.PoWa.EVENTS.PAUSE, function(e) {
                        t._$playPause.addClass("fa-play"), t._$playPause.removeClass("fa-pause")
                    })
                }
            }, {
                key: "getEl",
                value: function() {
                    return this._$el
                }
            }]), e
        }(u.default);
    e.default = m
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = '\n    <div class="powa-ctrls-play-wrap ctrls-left ctrls-item">\n        <i class="fa fa-play powa-ctrls-play powa-ctrls-icon" aria-hidden="true"></i>\n    </div>\n';
    e.default = n.trim()
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = "\n    .powa-ctrls.mobile .powa-ctrls-play-wrap {\n        display: none;\n    }\n"
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s() {
        return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
    }

    function l(t) {
        if ((0, v.isFullscreen)()) {
            var e = s();
            e && e.classList.contains("powa") && (this._powa.trigger(y.FULLSCREEN), this._$powaEl.addClass("fullscreen"), this._$fullscreen.removeClass("fa-expand"), this._$fullscreen.addClass("fa-compress"), !w.isSafari || w.isMobile || w.isTablet || this._$powaEl.addClass("fullscreen-safari"))
        } else this._$powaEl.hasClass("fullscreen") && (this._powa.trigger(y.EXIT_FULLSCREEN), this._$powaEl.removeClass("fullscreen"), this._$powaEl.removeClass("fullscreen-safari"), this._$fullscreen.removeClass("fa-compress"), this._$fullscreen.addClass("fa-expand"))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        c = n(147),
        d = i(c),
        p = n(154),
        f = i(p),
        h = n(155),
        g = i(h),
        m = n(7),
        v = n(8);
    PoWaSettings.client = PoWaSettings.client || (0, v.sniffClient)();
    var w = PoWaSettings.client,
        y = (0, v.extend)({
            FULLSCREEN: "fullscreen",
            EXIT_FULLSCREEN: "exitfullscreen"
        }, window.PoWa.EVENTS),
        b = function(t) {
            function e(t) {
                o(this, e);
                var n = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return (0, v.addCSS)(g.default, "powa-controls-fullscreen"), n._$el = (0, m.$)(f.default), n._$fullscreen = n._$el.find(".powa-ctrls-fullscreen"), n
            }
            return r(e, t), u(e, [{
                key: "setup",
                value: function() {
                    var t = this;
                    document.addEventListener("webkitfullscreenchange", l.bind(this), !1), document.addEventListener("mozfullscreenchange", l.bind(this), !1), document.addEventListener("fullscreenchange", l.bind(this), !1), document.addEventListener("MSFullscreenChange", l.bind(this), !1), this._$fullscreen.on("click", function(e) {
                        if ((0, v.isFullscreen)()) document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
                        else {
                            var n = t._$powaEl.elements[0];
                            (w.isMobile || w.isTablet) && (n = t._video), n.requestFullscreen ? n.requestFullscreen() : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.webkitRequestFullScreen ? n.webkitRequestFullScreen() : n.msRequestFullscreen ? n.msRequestFullscreen() : n.webkitEnterFullscreen && n.webkitEnterFullscreen()
                        }
                    }), this._$powaEl.on("mousemove", function(e) {
                        t._$powaEl.hasClass("fullscreen") && (t._timeout && window.clearTimeout(t._timeout), t._$powaEl.addClass("active"), t._timeout = window.setTimeout(function() {
                            t._$powaEl.removeClass("active")
                        }, 1500))
                    })
                }
            }, {
                key: "getEl",
                value: function() {
                    return this._$el
                }
            }]), e
        }(d.default);
    e.default = b
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = '\n\t<div class="powa-ctrls-fullscreen-wrap ctrls-right ctrls-item">\n\t\t<i class="fa fa-expand powa-ctrls-fullscreen powa-ctrls-icon" aria-hidden="true"></i>\n\t</div>\n';
    e.default = n.trim()
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = "\n\n    .powa-ctrls-fullscreen-wrap {\n        align-self: center;\n        height: 30px;\n        line-height: 30px;\n    }\n\n    .powa-wrap.sticky.mobile .powa-ctrls-fullscreen-wrap {\n        line-height: 24px;\n        height: 24px;\n        margin-right: 0;\n    }\n\n    /* rules from chrome's built-in stylesheet for fullscreen elements */\n    /* it's the only way we could get custom scrubber working on desktop safari fullscreen */\n    .powa.fullscreen-safari {\n        object-fit: contain;\n        position: fixed !important;\n        top: 0px !important;\n        right: 0px !important;\n        bottom: 0px !important;\n        left: 0px !important;\n        box-sizing: border-box !important;\n        min-width: 0px !important;\n        max-width: none !important;\n        min-height: 0px !important;\n        max-height: none !important;\n        width: 100% !important;\n        height: 100% !important;\n        transform: none !important;\n        margin: 0px !important;\n    }\n"
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s(t) {
        if (t >= this._$track.height()) this.mute();
        else if (t > 0 && this._$track.height() > t) {
            var e = t / this._$track.height() * 100;
            this._$head.css({
                top: t - 6 + "px"
            }), this._$track.css({
                background: "linear-gradient(#4D4D4D " + e + "%, #B3B3B3 " + e + "%)"
            }), this._$track.trigger("change", {
                value: (100 - e) / 100
            })
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var l = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        u = n(147),
        c = i(u),
        d = n(157),
        p = i(d),
        f = n(158),
        h = i(f),
        g = n(7),
        m = n(8),
        v = function(t) {
            function e(t) {
                o(this, e);
                var n = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return (0, m.addCSS)(h.default, "powa-controls-volume"), n._$el = (0, g.$)(p.default), n._$volume = n._$el.find(".powa-ctrls-volume"), n._$track = n._$el.find(".powa-range-track"), n._$head = n._$el.find(".powa-range-head"), n
            }
            return r(e, t), l(e, [{
                key: "mute",
                value: function() {
                    this._$volume.removeClass("volume-up"), this._$volume.addClass("volume-off"), this._$head.css({
                        top: "calc(100% - 8px)"
                    }), this._$track.css({
                        background: "linear-gradient(#4D4D4D 100%, #B3B3B3 100%)"
                    })
                }
            }, {
                key: "unMute",
                value: function() {
                    this._$volume.removeClass("volume-off"), this._$volume.addClass("volume-up"), this._$head.css({
                        top: "-8px"
                    }), this._$track.css({
                        background: "linear-gradient(#4D4D4D 0%, #B3B3B3 0%)"
                    })
                }
            }, {
                key: "setup",
                value: function() {
                    var t = this,
                        e = this._powa.getStatus() || {},
                        n = !1,
                        i = void 0;
                    this._$track.on("change", function(e) {
                        var n = e.detail.value;
                        0 == n ? (t._$volume.removeClass("volume-up"), t._$volume.addClass("volume-off")) : (t._$volume.addClass("volume-up"), t._$volume.removeClass("volume-off"), t._powa.mute(!1)), t._powa.volume(n)
                    }), this._$track.on("click", function(e) {
                        var n = t._$track.elements[0].getBoundingClientRect(),
                            i = n.top,
                            o = e.clientY - i;
                        s.call(t, o)
                    }), this._$track.on("touchstart", function(t) {
                        n = !0
                    }), this._$track.on("touchend", function(e) {
                        if (n && i) {
                            var o = t._$track.elements[0].getBoundingClientRect(),
                                a = o.top,
                                r = i.touches[0].clientY - a;
                            s.call(t, r)
                        }
                        n = !1
                    }), this._$track.on("touchmove", function(e) {
                        if (i = e, n) {
                            var o = t._$track.elements[0].getBoundingClientRect(),
                                a = o.top,
                                r = i.touches[0].clientY - a;
                            s.call(t, r)
                        }
                    }), this._$track.on("mousedown", function(t) {
                        n = !0
                    }), this._$track.on("mouseup", function(e) {
                        if (n) {
                            var i = t._$track.elements[0].getBoundingClientRect(),
                                o = i.top,
                                a = e.clientY - o;
                            s.call(t, a)
                        }
                        n = !1
                    }), this._$track.on("mousemove", function(e) {
                        if (n) {
                            var i = t._$track.elements[0].getBoundingClientRect(),
                                o = i.top,
                                a = e.clientY - o;
                            s.call(t, a)
                        }
                    }), this._$volume.on("click", function(e) {
                        t._$volume.hasClass("volume-up") ? (t._powa.mute(!0), t._$track.trigger("change", {
                            value: 0
                        }), t._$head.css({
                            top: "calc(100% - 8px)"
                        }), t._$track.css({
                            background: "linear-gradient(#4D4D4D 100%, #B3B3B3 100%)"
                        })) : (t._powa.mute(!1), t._powa.volume(1), t._$track.trigger("change", {
                            value: 1
                        }), t._$head.css({
                            top: "-8px"
                        }), t._$track.css({
                            background: "linear-gradient(#4D4D4D 0%, #B3B3B3 0%)"
                        }))
                    }), this._powa.on(window.PoWa.EVENTS.MUTED, function(e) {
                        0 == e.volume || e.muted ? t.mute() : e.muted || t.unMute()
                    }), 0 !== e.volume && e.muted !== !0 || this.mute()
                }
            }, {
                key: "getEl",
                value: function() {
                    return this._$el
                }
            }]), e
        }(c.default);
    e.default = v
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = '\n    <div class="powa-ctrls-volume-wrap ctrls-left ctrls-item">\n        <div class="powa-ctrls-volume-inner-wrap ctrls-item">\n            <div class="powa-ctrls-volume-popup powa-ctrls-popup">\n                <div class="powa-range-track">\n                    <div class="powa-range-head"></div>\n                </div>\n            </div>\n            <div class="powa-ctrls-volume powa-ctrls-icon volume-up">\n                <img class="volume-on" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMCAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHRpdGxlPnZvbF9vbjwvdGl0bGU+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgo8ZyBpZD0iU3ltYm9scyI+Cgk8ZyBpZD0idm9sdW1lIj4KCQk8cGF0aCBpZD0idm9sX29uIiBjbGFzcz0ic3QwIiBkPSJNNSw1djEwbDcsNVYwTDUsNXogTTAsMTVWNWgzdjEwSDB6IE0xNiw1LjFMMTcuMyw0QzE5LDUuNCwyMCw3LjQsMjAsOS41YzAsMi4xLTEsNC4xLTIuNyw1LjUKCQkJTDE2LDEzLjljMS4zLTEuMSwyLjItMi43LDIuMi00LjRDMTguMiw3LjgsMTcuMyw2LjIsMTYsNS4xeiBNMTQsN2wxLjMtMUMxNi4zLDYuOSwxNyw4LjEsMTcsOS41YzAsMS40LTAuNywyLjYtMS44LDMuNUwxNCwxMgoJCQljMC44LTAuNiwxLjItMS41LDEuMi0yLjVDMTUuMiw4LjUsMTQuOCw3LjcsMTQsN3oiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K" alt="volume">\n                <img class="volume-off" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5tdXRlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJtdXRlIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTQuOTgzNzg5MjUsNSBMNC45ODM3ODkyNSwxNSBMMTEuOTgzNzg5MiwyMCBMMTEuOTgzNzg5MiwwIEw0Ljk4Mzc4OTI1LDUgWiBNMTYuODIyNDE5Miw5LjEwNzQzNDY5IEwxOC44MzM5MTAxLDYuNzEwMjMzMTUgTDIwLjA1OTU4MTMsNy43Mzg2OTMzNCBMMTcuODY2NzQ1MSwxMC4zNTIwMTM4IEwyMC4wNTk1ODEzLDEyLjk2NTMzNDIgTDE4LjgzMzkxMDEsMTMuOTkzNzk0NCBMMTYuODIyNDE5MiwxMS41OTY1OTI4IEwxNC44MTA5MjgzLDEzLjk5Mzc5NDQgTDEzLjU4NTI1NzEsMTIuOTY1MzM0MiBMMTUuNzc4MDkzNCwxMC4zNTIwMTM4IEwxMy41ODUyNTcxLDcuNzM4NjkzMzQgTDE0LjgxMDkyODMsNi43MTAyMzMxNSBMMTYuODIyNDE5Miw5LjEwNzQzNDY5IFogTTAsMTUgTDAsNSBMMyw1IEwzLDE1IEwwLDE1IFoiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="mute">\n            </div>\n        </div>\n    </div>\n';
    e.default = n.trim()
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = "\n\n    .powa-ctrls-volume-inner-wrap {\n        border-radius: 3px;\n    }\n\n    .powa-ctrls-volume-popup {\n        justify-content: center;\n        align-items: center;\n        height: 140px;\n        padding: 18px 0 12px 0;\n    }\n\n    .powa.xSmall .powa-ctrls-volume-popup{\n\t\theight: 80px;\n\t}\n\n    .powa-ctrls-volume-inner-wrap.ctrls-item:hover {\n        position: absolute;\n        bottom: 0;\n    }\n\n    .powa-custom-ctrls:not(.mobile) .powa-ctrls-volume-inner-wrap.ctrls-item:hover {\n        background-color: rgba(0, 0, 0, .7);\n    }\n\n    .powa-custom-ctrls:not(.mobile) .powa-ctrls-volume-inner-wrap.ctrls-item:hover .powa-ctrls-volume-popup {\n        display: flex;\n    }\n\n    .powa-ctrls-volume {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 30px;\n    }\n\n    .powa-ctrls-volume img {\n        height: 18px;\n    }\n\n    .powa-range-track {\n        height: 100%;\n        width: 6px;\n        background: #B3B3B3;\n        position: relative;\n        border-radius: 6px;\n    }\n\n    .powa-range-head {\n        height: 12px;\n        width: 12px;\n        border-radius: 50%;\n        background: white;\n        position: absolute;\n        left: -50%;\n    }\n\n    .volume-up .volume-off {\n        display: none;\n    }\n\n    .volume-off .volume-on {\n        display: none;\n    }\n"
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s(t) {
        this._$social.forEach(function(e) {
            e.setAttribute("data-social-url", t.short_url), e.setAttribute("data-social-title", t.headlines.basic)
        })
    }

    function l(t) {
        var e = t.description ? t.description.basic : t.subheadlines ? t.subheadlines.basic : "";
        return "" + encodeURIComponent(e + " " + t.short_url)
    }

    function u(t) {
        this._$email.attr("href", "mailto:?subject=" + encodeURIComponent(t.headlines.basic) + "&body=" + l(t))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var c = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        d = n(147),
        p = i(d),
        f = n(160),
        h = i(f),
        g = n(161),
        m = i(g),
        v = n(7),
        w = n(8),
        y = {
            INSTRUCTION_PERMALINK: "CLICK TO COPY PERMALINK",
            INSTRUCTION_EMBED_CODE: "CLICK TO COPY EMBED CODE",
            COPIED: "COPIED TO CLIPBOARD"
        },
        b = function(t) {
            function e(t) {
                o(this, e);
                var n = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return (0, w.addCSS)(m.default, "powa-controls-share"), n._powa = t.powa, n._$el = (0, v.$)((0, h.default)(window.powas[n._id].powa.getVideoData())), n._$social = n._$el.find(".powa-ctrls-social"), n._$email = n._$el.find(".powa-ctrls-email"), n._$embed = n._$el.find(".powa-ctrl-embed"), n._$input = n._$el.find(".powa-ctrl-embed-input"), n._$embedMsg = n._$el.find(".embed-msg"), n._$permalinkMsg = n._$el.find(".permalink-msg"), n._$permalink = n._$el.find(".powa-ctrls-permalink"), n
            }
            return r(e, t), c(e, [{
                key: "setup",
                value: function() {
                    var t = this;
                    this._powa.on(window.PoWa.EVENTS.START, function(e) {
                        var n = window.powas[t._id].powa.getVideoData();
                        s.call(t, n), u.call(t, n)
                    }), this._$permalink.on("click", function(e) {
                        var n = window.powas[t._id].powa.getVideoData();
                        t._$input.elements[0].value = "https://www.washingtonpost.com/video" + n.canonical_url, t._$input.elements[0].select(), document.execCommand("copy"), t._$permalinkMsg.html(y.COPIED)
                    }), this._$embed.on("click", function(e) {
                        var n = window.powas[t._id].powa.getVideoData();
                        t._$input.elements[0].value = "<iframe width='480' height='290' scrolling='no' src='https://www.washingtonpost.com/video/c/embed/" + n._id + "' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>", t._$input.elements[0].select(), document.execCommand("copy"), t._$embedMsg.html(y.COPIED)
                    }), this._$social.on("mouseout", function(e) {
                        t._$embedMsg.html(y.INSTRUCTION_EMBED_CODE), t._$permalinkMsg.html(y.INSTRUCTION_PERMALINK)
                    }), this._$social.on("click", function(t) {
                        try {
                            var e = void 0,
                                n = "width=550, height=450, top=" + (screen.height / 2 - 225) + ", left=" + (screen.width / 2 - 275),
                                i = t.target.getAttribute("data-social"),
                                o = t.target.getAttribute("data-social-url"),
                                a = t.target.getAttribute("data-social-title");
                            switch (i) {
                                case "facebook":
                                    e = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(o);
                                    break;
                                case "twitter":
                                    e = "https://twitter.com/share?url=" + encodeURIComponent(o) + "&text=" + encodeURIComponent(a);
                                    break;
                                case "google":
                                    e = "https://plus.google.com/share?url=" + encodeURIComponent(o);
                                    break;
                                default:
                                    return
                            }
                            window.open(e, "_blank", n)
                        } catch (t) {
                            console.error(t)
                        }
                    })
                }
            }, {
                key: "getEl",
                value: function() {
                    return this._$el
                }
            }]), e
        }(p.default);
    e.default = b
}, function(t, e) {
    "use strict";

    function n(t) {
        function e(t) {
            var e = t.description ? t.description.basic : t.subheadlines ? t.subheadlines.basic : "";
            return "" + encodeURIComponent(e + " " + t.short_url)
        }
        var n = '\n\t\t<div class="powa-ctrls-share-wrap ctrls-right ctrls-item">\n\t\t\t<div class="powa-ctrls-share-inner-wrap ctrls-item">\n\t\t\t\t<div class="powa-ctrls-share-popup powa-ctrls-popup">\n\t\t\t\t\t<div class="powa-ctrl-embed-popout-wrap powa-ctrls-permalink">\n\t\t\t\t\t\t<div class="powa-ctrl-embed-popout permalink-msg franklin-light">\n\t\t\t\t\t\t\tCLICK TO COPY PERMALINK\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<i class="fa fa-link powa-ctrls-permalink powa-ctrls-icon powa-ctrls-social" aria-hidden="true"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<i class="fa fa-twitter-square powa-ctrls-icon powa-ctrls-social" data-social="twitter" data-social-url="' + t.short_url + '" data-share-title="' + t.headlines.basic + '" aria-hidden="true"></i>\n\t\t\t\t\t<i class="fa fa-facebook-square powa-ctrls-icon powa-ctrls-social" data-social="facebook" data-social-url="' + t.short_url + '" data-share-title="' + t.headlines.basic + '" aria-hidden="true"></i>\n\t\t\t\t\t<div class="powa-ctrl-embed-popout-wrap powa-ctrl-embed">\n\t\t\t\t\t\t<div class="powa-ctrl-embed-popout embed-msg franklin-light">\n\t\t\t\t\t\t\tCLICK TO COPY EMBED CODE\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<i class="fa fa-code powa-ctrls-social powa-ctrls-icon" aria-hidden="true"></i>\n\t\t\t\t\t\t<input class="powa-ctrl-embed-input" type="text" value=""/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a class="powa-ctrls-email" href="mailto:?subject=' + encodeURIComponent(t.headlines.basic) + "&body=" + e(t) + '">\n\t\t\t\t\t\t<i class="fa fa-envelope powa-ctrls-icon powa-ctrls-social" data-social="email" data-social-url="' + t.short_url + '" data-share-title="' + t.headlines.basic + '" aria-hidden="true"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<i class="fa fa-share powa-ctrls-share powa-ctrls-icon" aria-hidden="true"></i>\n\t\t\t</div>\n\t\t</div>\n\t';
        return n.trim()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = '\n    .powa[data-allow-share="false"] .powa-ctrls-share-wrap {\n        display: none;\n    }\n\n    .powa-custom-ctrls.live .powa-ctrls-share-wrap {\n        display: none;\n    }\n\n    .powa-ctrls-share-inner-wrap.ctrls-item {\n        position: absolute;\n        bottom: 0;\n    }\n\n    .powa-ctrls-share-inner-wrap.ctrls-item:hover {\n        background-color: rgba(0, 0, 0, .7);\n    }\n\n    .powa-ctrls-share-inner-wrap.ctrls-item:hover .powa-ctrls-share-popup {\n        display: block;\n    }\n\n    .powa-ctrls-share-inner-wrap {\n        border-radius: 3px;\n    }\n\n    .fa.powa-ctrls-share {\n        font-size: 20px;\n        line-height: 30px;\n    }\n\n    .powa-wrap.sticky.mobile .fa.powa-ctrls-share {\n        line-height: 24px;\n        height: 24px;\n        font-size: 16px;\n    }\n\n    .powa-ctrls-social {\n        color: #d3d3d3;\n        text-shadow: none;\n    }\n\n    .powa-ctrls-social:hover {\n        color: white;\n    }\n\n    .powa-custom-ctrls.mobile .powa-ctrl-embed-popout-wrap, .powa-custom-ctrls.mobile .powa-ctrls-permalink {\n        display: none;\n    }\n\n    .powa-ctrl-embed-popout {\n        position: absolute;\n        width: 180px;\n        height: 30px;\n        left: -180px;\n        background-color: rgba(0, 0, 0, .7);\n        border-radius-top-left: 3px;\n        border-radius-bottom-left: 3px;\n        display: none;\n        font-size: 12px;\n        line-height: 30px;\n        font-weight: bolder;\n        text-shadow: none;\n    }\n\n    .powa-wrap.sticky.mobile .powa-ctrl-embed-popout {\n        line-height: 24px;\n        height: 24px;\n    }\n\n    .powa-ctrl-embed-popout-wrap:hover .powa-ctrl-embed-popout {\n        display: block;\n    }\n\n    .powa-ctrl-embed-input {\n        position: fixed;\n        left: -9999px;\n        top: -9999px;\n        height: 2em;\n        width: 2em;\n    }\n\n    .powa-wrap.sticky .powa-ctrls-share-wrap {\n\t\tdisplay: none;\n    }\n    \n    .powa-ctrls-share-inner-wrap.ctrls-item:hover powa-ctrls .fa {\n        display:block;\n    }\n\n    .powa-ctrls-share-inner-wrap.ctrls-item:hover .powa-ctrls-share-popup {\n        padding-top:8px;\n    }\n\n    .powa-ctrls-share-inner-wrap.ctrls-item:hover .powa-ctrls-share-popup .powa-ctrls-icon {\n        margin-bottom: 4px;\n    }\n'
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        l = n(147),
        u = i(l),
        c = n(163),
        d = i(c),
        p = n(164),
        f = i(p),
        h = n(7),
        g = n(8),
        m = n(9),
        v = function(t) {
            function e(t) {
                o(this, e);
                var n = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return ["getEl", "ccClick", "subsAvailable", "subsUnavailable", "subsEnabled", "subsDisabled"].map(function(t) {
                    return n[t] = n[t].bind(n)
                }), (0, g.addCSS)(f.default, "powa-controls-extras"), n._$el = (0, h.$)((0, d.default)(t.extras)), n._$cc = n._$el.find(".powa-ctrls-cc"), n._$ccDisabled = n._$cc.find(".cc-disabled"), n._$ccEnabled = n._$cc.find(".cc-enabled"), n._$cc.on("click", n.ccClick), (0, m.forEach)(window.PoWa.EVENTS, function(t) {
                    n[t] && n._powa.on(t, n[t])
                }), n
            }
            return r(e, t), s(e, [{
                key: "getEl",
                value: function() {
                    return this._$el
                }
            }, {
                key: "ccClick",
                value: function() {
                    this._powa.toggleSubtitles()
                }
            }, {
                key: "subsAvailable",
                value: function(t) {
                    this._$el.show()
                }
            }, {
                key: "subsUnavailable",
                value: function() {
                    this._$el.hide()
                }
            }, {
                key: "subsEnabled",
                value: function(t) {
                    this._$ccEnabled.addClass("on"), this._$ccDisabled.removeClass("on")
                }
            }, {
                key: "subsDisabled",
                value: function() {
                    this._$ccEnabled.removeClass("on"), this._$ccDisabled.addClass("on")
                }
            }]), e
        }(u.default);
    e.default = v
}, function(t, e) {
    "use strict";

    function n() {
        return '\n\t\t<div class="powa-ctrls-icon powa-ctrls-cc">\n\t\t\t<img class="on cc-disabled" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5DQzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJvcHRpb25zIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTA0LjAwMDAwMCwgLTIxNy4wMDAwMDApIj4KICAgICAgICA8ZyBpZD0iU3RhY2tlZC1Hcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MDQuMDAwMDAwLCAxNzcuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTIsNDIuNDkyNTc1MyBMMiw1Ny41MDc0MjQ3IEMyLDU3Ljc3Njg4NzcgMi4yMjM2ODY4LDU4IDIuNTAwNTAxNjUsNTggTDIxLjQ5OTQ5ODQsNTggQzIxLjc3NDIxOCw1OCAyMiw1Ny43NzUyOTc5IDIyLDU3LjUwNzQyNDcgTDIyLDQyLjQ5MjU3NTMgQzIyLDQyLjIyMzExMjMgMjEuNzc2MzEzMiw0MiAyMS40OTk0OTg0LDQyIEwyLjUwMDUwMTY1LDQyIEMyLjIyNTc4MTk5LDQyIDIsNDIuMjI0NzAyMSAyLDQyLjQ5MjU3NTMgWiBNMCw0Mi40OTI1NzUzIEMwLDQxLjExNTk2NCAxLjEyNTM3OTQ0LDQwIDIuNTAwNTAxNjUsNDAgTDIxLjQ5OTQ5ODQsNDAgQzIyLjg4MDQ4NzMsNDAgMjQsNDEuMTE4MTQyMiAyNCw0Mi40OTI1NzUzIEwyNCw1Ny41MDc0MjQ3IEMyNCw1OC44ODQwMzYgMjIuODc0NjIwNiw2MCAyMS40OTk0OTg0LDYwIEwyLjUwMDUwMTY1LDYwIEMxLjExOTUxMjcyLDYwIDAsNTguODgxODU3OCAwLDU3LjUwNzQyNDcgTDAsNDIuNDkyNTc1MyBaIE04LjA4NjE3NjQ3LDU0LjEyIEM2LjAyMjE3NjQ3LDU0LjEyIDQuNjE4MTc2NDcsNTIuNTYgNC42MTgxNzY0Nyw1MC4xMzYgQzQuNjE4MTc2NDcsNDcuNCA1Ljk5ODE3NjQ3LDQ1Ljg2NCA4LjEzNDE3NjQ3LDQ1Ljg2NCBDOS45NzAxNzY0Nyw0NS44NjQgMTEuMDAyMTc2NSw0Ni45MDggMTEuMzE0MTc2NSw0OC42NiBMOS40MzAxNzY0Nyw0OC45NiBDOS4yODYxNzY0Nyw0Ny45NjQgOC45ODYxNzY0Nyw0Ny4zNzYgOC4xNDYxNzY0Nyw0Ny4zNzYgQzcuMjU4MTc2NDcsNDcuMzc2IDYuNzQyMTc2NDcsNDguMjA0IDYuNzQyMTc2NDcsNTAuMDQgQzYuNzQyMTc2NDcsNTEuNzQ0IDcuMTk4MTc2NDcsNTIuNjMyIDguMTk0MTc2NDcsNTIuNjMyIEM5LjAzNDE3NjQ3LDUyLjYzMiA5LjQ0MjE3NjQ3LDUyLjEwNCA5LjU5ODE3NjQ3LDUxLjAzNiBMMTEuMzk4MTc2NSw1MS4zMzYgQzExLjAxNDE3NjUsNTMuMTg0IDkuODk4MTc2NDcsNTQuMTIgOC4wODYxNzY0Nyw1NC4xMiBaIE0xNi4xODAxNzY1LDU0LjEyIEMxNC4xMTYxNzY1LDU0LjEyIDEyLjcxMjE3NjUsNTIuNTYgMTIuNzEyMTc2NSw1MC4xMzYgQzEyLjcxMjE3NjUsNDcuNCAxNC4wOTIxNzY1LDQ1Ljg2NCAxNi4yMjgxNzY1LDQ1Ljg2NCBDMTguMDY0MTc2NSw0NS44NjQgMTkuMDk2MTc2NSw0Ni45MDggMTkuNDA4MTc2NSw0OC42NiBMMTcuNTI0MTc2NSw0OC45NiBDMTcuMzgwMTc2NSw0Ny45NjQgMTcuMDgwMTc2NSw0Ny4zNzYgMTYuMjQwMTc2NSw0Ny4zNzYgQzE1LjM1MjE3NjUsNDcuMzc2IDE0LjgzNjE3NjUsNDguMjA0IDE0LjgzNjE3NjUsNTAuMDQgQzE0LjgzNjE3NjUsNTEuNzQ0IDE1LjI5MjE3NjUsNTIuNjMyIDE2LjI4ODE3NjUsNTIuNjMyIEMxNy4xMjgxNzY1LDUyLjYzMiAxNy41MzYxNzY1LDUyLjEwNCAxNy42OTIxNzY1LDUxLjAzNiBMMTkuNDkyMTc2NSw1MS4zMzYgQzE5LjEwODE3NjUsNTMuMTg0IDE3Ljk5MjE3NjUsNTQuMTIgMTYuMTgwMTc2NSw1NC4xMiBaIiBpZD0iQ0MiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="cc disabled">\n\t\t\t<img class="cc-enabled" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Im9wdGlvbnMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MDQuMDAwMDAwLCAtMjE3LjAwMDAwMCkiPgogICAgICAgIDxnIGlkPSJTdGFja2VkLUdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwNC4wMDAwMDAsIDE3Ny4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA0MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDIuNDkyNTc1MzUgQzAsMS4xMTU5NjQgMS4xMjUzNzk0NCwwIDIuNTAwNTAxNjUsMCBMMjEuNDk5NDk4NCwwIEMyMi44ODA0ODczLDAgMjQsMS4xMTgxNDIyIDI0LDIuNDkyNTc1MzUgTDI0LDE3LjUwNzQyNDcgQzI0LDE4Ljg4NDAzNiAyMi44NzQ2MjA2LDIwIDIxLjQ5OTQ5ODQsMjAgTDIuNTAwNTAxNjUsMjAgQzEuMTE5NTEyNzIsMjAgMCwxOC44ODE4NTc4IDAsMTcuNTA3NDI0NyBMMCwyLjQ5MjU3NTM1IFoiIGlkPSJDQyIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYuMTgwMTc2NSwxNC4xMiBDMTQuMTE2MTc2NSwxNC4xMiAxMi43MTIxNzY1LDEyLjU2IDEyLjcxMjE3NjUsMTAuMTM2IEMxMi43MTIxNzY1LDcuNCAxNC4wOTIxNzY1LDUuODY0IDE2LjIyODE3NjUsNS44NjQgQzE4LjA2NDE3NjUsNS44NjQgMTkuMDk2MTc2NSw2LjkwOCAxOS40MDgxNzY1LDguNjYgTDE3LjUyNDE3NjUsOC45NiBDMTcuMzgwMTc2NSw3Ljk2NCAxNy4wODAxNzY1LDcuMzc2IDE2LjI0MDE3NjUsNy4zNzYgQzE1LjM1MjE3NjUsNy4zNzYgMTQuODM2MTc2NSw4LjIwNCAxNC44MzYxNzY1LDEwLjA0IEMxNC44MzYxNzY1LDExLjc0NCAxNS4yOTIxNzY1LDEyLjYzMiAxNi4yODgxNzY1LDEyLjYzMiBDMTcuMTI4MTc2NSwxMi42MzIgMTcuNTM2MTc2NSwxMi4xMDQgMTcuNjkyMTc2NSwxMS4wMzYgTDE5LjQ5MjE3NjUsMTEuMzM2IEMxOS4xMDgxNzY1LDEzLjE4NCAxNy45OTIxNzY1LDE0LjEyIDE2LjE4MDE3NjUsMTQuMTIgWiBNOC4wODYxNzY0NywxNC4xMiBDNi4wMjIxNzY0NywxNC4xMiA0LjYxODE3NjQ3LDEyLjU2IDQuNjE4MTc2NDcsMTAuMTM2IEM0LjYxODE3NjQ3LDcuNCA1Ljk5ODE3NjQ3LDUuODY0IDguMTM0MTc2NDcsNS44NjQgQzkuOTcwMTc2NDcsNS44NjQgMTEuMDAyMTc2NSw2LjkwOCAxMS4zMTQxNzY1LDguNjYgTDkuNDMwMTc2NDcsOC45NiBDOS4yODYxNzY0Nyw3Ljk2NCA4Ljk4NjE3NjQ3LDcuMzc2IDguMTQ2MTc2NDcsNy4zNzYgQzcuMjU4MTc2NDcsNy4zNzYgNi43NDIxNzY0Nyw4LjIwNCA2Ljc0MjE3NjQ3LDEwLjA0IEM2Ljc0MjE3NjQ3LDExLjc0NCA3LjE5ODE3NjQ3LDEyLjYzMiA4LjE5NDE3NjQ3LDEyLjYzMiBDOS4wMzQxNzY0NywxMi42MzIgOS40NDIxNzY0NywxMi4xMDQgOS41OTgxNzY0NywxMS4wMzYgTDExLjM5ODE3NjUsMTEuMzM2IEMxMS4wMTQxNzY1LDEzLjE4NCA5Ljg5ODE3NjQ3LDE0LjEyIDguMDg2MTc2NDcsMTQuMTIgWiIgaWQ9IlBhdGgiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt="cc enabled">\n\t\t</div>\n\t'
    }

    function i(t) {
        var e = "";
        return t.forEach(function(t) {
            switch (t) {
                case "cc":
                    e += n();
                    break;
                case "hd":
                    e += '<i class="fa fa-cc powa-ctrls-icon" aria-hidden="true"></i>'
            }
        }), e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(t) {
        var e = "";
        return e = t.length > 1 ? '\n\t\t\t<div class="powa-ctrls-extras-wrap ctrls-right ctrls-item">\n\t\t\t\t<div class="powa-ctrls-extras-inner-wrap ctrls-item">\n\t\t\t\t\t<div class="powa-ctrls-extras-popup powa-ctrls-popup">\n\t\t\t\t\t\t' + i(t) + '\n\t\t\t\t\t</div>\n\t\t\t\t\t<i class="fa fa-share powa-ctrls-icon" aria-hidden="true"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t' : '\n\t\t\t<div class="powa-ctrls-extras-wrap ctrls-right ctrls-item">\n\t\t\t\t' + n() + "\n\t\t\t</div>\n\t\t", e.trim()
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = "\n\n\t.powa-wrap.sticky.mobile .powa-ctrls-extras-wrap {\n\t\tdisplay: none;\n\t}\n\n\t.powa-ctrls-extras-inner-wrap.ctrls-item {\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t}\n\n\t.powa-ctrls-extras-inner-wrap.ctrls-item:hover {\n\t\tbackground-color: rgba(0, 0, 0, .7);\n\t}\n\n\t.powa-ctrls-extras-inner-wrap.ctrls-item:hover .powa-ctrls-extras-popup {\n\t\tdisplay: block;\n\t}\n\n\t.powa-ctrls-cc img {\n\t\tdisplay: none;\n\t}\n\n\t.powa-ctrls-cc img.on {\n\t\tdisplay: block;\n\t\twidth: 26px;\n\t\theight: 30px;\n\t}\n\n\t.powa-ctrls-cc img.on {\n\t\twidth: 26px;\n\t\theight: 28px;\n\t}\n"
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        l = n(147),
        u = i(l),
        c = n(166),
        d = i(c),
        p = n(167),
        f = i(p),
        h = n(7),
        g = n(8),
        m = function(t) {
            function e(t) {
                o(this, e);
                var n = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return (0, g.addCSS)(f.default, "powa-controls-progress"), n._$el = (0, h.$)(d.default), n._$progress = n._$el.find(".powa-ctrls-progress"), n.onTimeHandler = n.onTime.bind(n), n
            }
            return r(e, t), s(e, [{
                key: "showProgress",
                value: function(t) {
                    t ? (this._$progress.html("LIVE"), this._$el.removeClass("powa-ctrls-hide"), this._$progress.addClass("live"), this._powa.off(window.PoWa.EVENTS.TIME, this.onTimeHandler)) : (this._$progress.removeClass("live"), this._powa.on(window.PoWa.EVENTS.TIME, this.onTimeHandler))
                }
            }, {
                key: "onTime",
                value: function(t) {
                    this._$el.removeClass("powa-ctrls-hide"), t.time && t.duration && this._$progress.html((0, g.formatTime)(Math.floor(t.time)) + " / " + (0, g.formatTime)(Math.floor(t.duration)))
                }
            }, {
                key: "setup",
                value: function() {
                    var t = this;
                    this.showProgress("live" === (0, g.get)(this._powa.getVideoData(), "video_type")), this._powa.on("start", function(e) {
                        t.showProgress("live" === (0, g.get)(t._powa.getVideoData(), "video_type"))
                    })
                }
            }, {
                key: "getEl",
                value: function() {
                    return this._$el
                }
            }]), e
        }(u.default);
    e.default = m
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = '\n\t<div class="powa-ctrls-progress-wrap ctrls-left powa-ctrls-hide">\n\t\t<div class="franklin-light powa-ctrls-progress"></div>\n\t</div>\n';
    e.default = n.trim()
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = "\n\n    .powa-wrap.sticky.mobile .powa-ctrls-progress-wrap {\n        display: none;\n    }\n\n    .powa.xSmall .powa-ctrls-progress.live { \n        font-size: 13px;\n        letter-spacing: 1px; \n    }\n\n    .powa-ctrls-progress-wrap {\n        display: flex;\n        align-items: center;\n    }\n\n    .powa-ctrls-progress {\n        height: 30px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100px;\n        font-size: 15px;\n        text-shadow: none;\n    }\n\n    .powa.xSmall .powa-ctrls-progress.live { \n        font-size: 13px;\n        letter-spacing: 1px; \n    }\n\n    .powa-ctrls-progress.live {\n        letter-spacing: 1px;\n        width: 42px;\n        background-color: #E10C16;\n        border-radius: 3px;\n        cursor: default;\n        height: 26px;\n    }\n\n"
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s(t) {
        if (t.length > 1) {
            var e = t.first ? "ghost" : "show",
                n = t.last ? "ghost" : "show";
            this._$next.attr("data-display", n), this._$prev.attr("data-display", e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var l = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        u = n(147),
        c = i(u),
        d = n(169),
        p = i(d),
        f = n(170),
        h = i(f),
        g = n(7),
        m = n(8);
    (0, m.addCSS)(h.default, "powa-controls-overlay");
    var v = function(t) {
        function e(t) {
            o(this, e);
            var n = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
            return n._$el = (0, g.$)(p.default), n._$icon = n._$el.find(".powa-overlay-icon"), n._$title = n._$el.find(".ctrls-overlay-top"), n._$next = n._$el.find(".powa-overlay-next"), n._$prev = n._$el.find(".powa-overlay-prev"), n._powa = t.powa, n
        }
        return r(e, t), l(e, [{
            key: "setup",
            value: function() {
                var t = this;
                this._powa.on(window.PoWa.EVENTS.START, function(e) {
                    t._$title.html((0, m.get)(t._powa.getVideoData(), "headlines.basic", "")), s.call(t, e.playlistMeta)
                }), this._powa.on(window.PoWa.EVENTS.PAUSE, function(e) {
                    t._$icon.removeClass("fa-pause"), t._$icon.addClass("fa-play"), t._powa.trigger("loadRecommendedPlaylist")
                }), this._powa.on(window.PoWa.EVENTS.PLAY, function(e) {
                    t._$icon.removeClass("fa-play"), t._$icon.addClass("fa-pause")
                }), this._powa.on("playlist", function(e) {
                    s.call(t, e.playlistMeta)
                }), this._$next.on("click", function(e) {
                    e.stopPropagation(), t._powa.trigger("nextClick")
                }), this._$prev.on("click", function(e) {
                    e.stopPropagation(), t._powa.trigger("prevClick")
                })
            }
        }, {
            key: "getEl",
            value: function() {
                return this._$el
            }
        }]), e
    }(c.default);
    e.default = v
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = '\n\t<div class="powa-overlay ctrls-overlay">\n\t\t<div class="ctrls-overlay-center">\n\t\t\t<i class="fa fa-step-backward powa-overlay-prev" data-display="ghost" aria-hidden="true"></i>\n\t\t\t<i class="fa fa-pause powa-overlay-icon" aria-hidden="true"></i>\n\t\t\t<i class="fa fa-step-forward powa-overlay-next" data-display="ghost" aria-hidden="true"></i>\n\t\t</div>\n\t\t<div class="ctrls-overlay-top franklin-light"></div>\n\t</div>\n';
    e.default = n.trim()
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = '\n    .powa[data-show-title="false"] .ctrls-overlay-top {\n        display: none;\n    }\n\n    .powa-custom-ctrls:not(.mobile):hover .powa-overlay {\n        display: block;\n    }\n\n    .powa-custom-ctrls.mobile.active .powa-overlay, .powa-custom-ctrls.powa-pause .powa-overlay {\n        display: block;\n    }\n\n    .ctrls-overlay-center {\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        justify-content: center;\n        align-items: center;\n        display: flex;\n    }\n\n    .powa-wrap-inner.sticky .powa-overlay-wrap .ctrls-overlay .ctrls-overlay-center {\n        height:unset;\n        bottom: calc(15px + 35%);\n        z-index: 100;\n    }\n\n    .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-icon {\n        font-size: 45px;\n        margin-top:4px;\n        cursor: pointer;\n        font-size: 2.3em;\n    }\n\n    .ctrls-overlay-center .powa-overlay-icon {\n        margin-left: 40px;\n        margin-right: 40px;\n    }\n\n    .powa.xSmall .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-icon {\n        width: 4%;\n        min-width: 40px;\n        margin: 0 calc(22px + 2%) 0 calc(26px + 2%);\n        font-size: 1.75em;\n        line-height: 0;\n        text-align: center;\n    }\n\n    .powa-wrap-inner.sticky .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-icon {\n        width: 10%;\n        min-width:20px;\n        font-size:1.75em;\n        margin: 0 calc(16px + 4%) 0 calc(20px + 4%);\n    }\n\n    .powa-wrap.sticky .powa-overlay-icon {\n        width: 10%;\n        min-width:20px;\n        font-size:2em;\n        margin: 0 calc(12px + 5%) 0 calc(16px + 5%)\n    }\n\n    .powa-custom-ctrls.mobile.active .powa-overlay-icon, .powa-custom-ctrls.powa-pause .powa-overlay-icon {\n        display: block;\n    }\n\n    .powa-wrap.sticky .ctrls-overlay-top {\n        display: none;\n    }\n\n    .ctrls-overlay-top {\n        padding: 15px 20px;\n        font-size: 16px;\n        line-height: 20px;\n        text-shadow: none;\n        text-align: left;\n    }\n\n    .powa.small .ctrls-overlay-top {\n        font-size: 16px;\n        line-height: 1.4;\n    }\n\n    .powa-overlay {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        color: white;\n        display: none;\n        background-image: linear-gradient(-180deg, rgba(0,0,0,0.70) 9%, rgba(0,0,0,0.25) 28%, rgba(0,0,0,0.25) 59%, rgba(0,0,0,0.70) 89%);\n    }\n\n    .powa-overlay-prev[data-display="ghost"], .powa-overlay-next[data-display="ghost"] {\n        visibility: hidden;\n    }\n\n    .powa-overlay-prev.fa, .powa-overlay-next.fa {\n        margin-top: 4px;\n        font-size: 32px;\n        cursor: pointer;\n    }\n\n    .powa.xSmall .powa-overlay-prev, .powa.xSmall .powa-overlay-next {\n        margin-top: 0px;\n        font-size: 1.3em;\n    }\n\n    .powa.xSmall .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-next,\n    .powa.xSmall .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-prev {\n        margin-top:0;\n        font-size: 1.5em;\n    }\n\n    .powa-wrap.sticky .powa.xSmall .powa-overlay-next,\n    .powa-wrap.sticky .powa.xSmall .powa-overlay-next {\n        font-size:1.3em;\n    }\n\n    /* Minor default adjustments */\n    .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-icon {\n        width: 4%;\n        min-width:40px;\n        margin: 0 calc(22px + 2%) 0 calc(26px + 2%);\n        font-size: 2.5em;\n        line-height: 0;\n        text-align: center;\n    }\n\n    /* Adjusts sizing and margin of prev/next button */\n    .powa-wrap-inner.sticky .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-next,\n    .powa-wrap-inner.sticky .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-prev {\n        margin-top:0;\n        font-size:1.6em;\n    }\n    /* Adjusts padding of controls */\n    .powa-wrap-inner.sticky .powa-ctrls .powa-ctrls-top {\n        padding:6px 8px;\n    }\n    /* Hides progress indicator */\n    .powa-wrap-inner.sticky .powa-ctrls .powa-ctrls-top .powa-ctrls-progress-wrap {\n        display:none;\n    }\n    /* Adjusts positioning of individual items within set of controls */\n    .powa-wrap-inner.sticky .powa-ctrls .powa-ctrls-top .powa-ctrls-item {\n        line-height: 32px;\n        width:32px;\n    }\n\n    /* Minor adjustments 2018-10-29 */\n    /* Small */\n    .powa.small .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-icon {\n        margin-top:0;\n        font-size: 2.5em;\n    }\n    .powa.small .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-next,\n    .powa.small .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-prev {\n        margin-top:0;\n        font-size: 1.75em;\n    }\n\n    /* Large */\n    .powa.large .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-icon {\n        margin-top:0;\n        font-size: 3em;\n    }\n    .powa.large .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-next,\n    .powa.large .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-prev {\n        margin-top:0;\n        font-size: 2em;\n    }\n\n\n    /* Sticky */\n    .powa-wrap-inner.sticky .powa-custom-ctrls .ctrls-overlay-center .powa-overlay-icon {\n        font-size:2em;\t/* adjusted from previous value */\n    }\n    .powa-wrap-inner.sticky .powa-overlay-wrap .ctrls-overlay .ctrls-overlay-center {\n        bottom: calc(20px + 35%); /* adjusted from previous value */\n    }\n'
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t) {
        var e = '\n\t\t<div class="powa-blurb-wrap powa-blurb inline-video-caption franklin-light" id="blurb-' + t + '">\n\t\t\t<p>\n\t\t\t\t<span class="powa-tease franklin-light"></span>\n\t\t\t\t<span class="powa-byline franklin-light"></span>\n\t\t\t</p>\n\t\t</div>\n\t';
        return e.trim()
    }

    function a() {
        var t = this;
        this._powa.on("start", function(e) {
            t.update()
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        s = n(8),
        l = n(7),
        u = "\n\t.powa-blurb-wrap.pb-caption {\n\t\tpadding: 0;\n\t\tline-height: 1.25em;\n\t\tmargin: 0;\n\t}\n\t.powa-blurb-wrap.powa-blurb.inline-video-caption p {\n\t\tline-height: 1.25em;\n\t}\n\t.powa-blurb-wrap p {\n\t\tpadding: 0;\n\t\tfont-size: 15px !important;\n\t\tmargin: 0;\n\t\tcolor: #6e6e6e;\n\t\tline-height: 1.25em !important;\n\t}\n\t.powa-blurb-wrap p .xLarge {\n\t\tfont-size: 16px;\n\t}\n\t.powa-tease .xLarge {\n\t\tfont-size: 16px;\n\t}\n\t.inline-video-caption {\n\t\tdisplay: none !important;\n\t}\n\t.powa-blurb.inline-video-caption {\n\t\tdisplay: block !important;\n\t}\n\t.powa-article-wrapper .powa-blurb {\n\t\tmargin-top: 10px;\n\t}\n",
        c = function() {
            function t(e) {
                if (i(this, t), !e.id && !e.powa) throw "Invalid settings to setup Blurb";
                (0, s.addCSS)(u, "powa-blurb"), this._powa = e.powa, this._settings = e, this._$powaEl = (0, l.$)(e.powa.getElement()), this._$el = (0, l.$)(o(e.id)), this._$tease = this._$el.find(".powa-tease"), this._$byline = this._$el.find(".powa-byline"), this.update();
                var n = document.getElementById("blurb-" + e.id);
                if (!n) {
                    var r = this._$powaEl.elements[0].closest(".inline-content.inline-video");
                    r ? r.appendChild(this._$el.elements[0]) : this._$powaEl.after(this._$el)
                }
                a.call(this)
            }
            return r(t, [{
                key: "update",
                value: function() {
                    for (var t = this._powa.getVideoData(), e = t.description && t.description.basic || "", n = t.credits && t.credits.by || [], i = t.credits && t.credits.by && t.credits.by[0].org, o = "The Washington Post" === i && !t.additional_properties.gifAsThumbnail, a = o && t.promo_image.credits.by && t.promo_image.credits.by[0].name || "", r = [], s = 0; s < n.length; s++) n[s].name && r.push(n[s].name), n[s].org && !i && (i = n[s].org);
                    var l = r.length > 0 && a ? "Video: " : "",
                        u = r.length > 0 && a ? "/Photo: " : a ? "Photo: " : "",
                        c = "" + l + r.join(", ") + u + a;
                    i && (c.length > 0 && (c += "/"), c += "" + i), this.updateTease(e), this.updateByline(c)
                }
            }, {
                key: "updateTease",
                value: function(t) {
                    this._$tease.html(t)
                }
            }, {
                key: "updateByline",
                value: function(t) {
                    this._$byline.html("(" + t + ")")
                }
            }]), t
        }();
    e.default = c
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o() {
        var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "white", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0.9", '\n\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 528 528"><style type="text/css">  \n\t.st0{fill:#FFFFFF;}\n\t</style><switch><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" width="1" height="1"/><path class="st0" d="M263 4.5C120.5 4.5 4.5 120.5 4.5 263c0 142.5 116 258.5 258.5 258.5 142.5 0 258.5-116 258.5-258.5C521.5 120.5 405.5 4.5 263 4.5zM310.7 347l-47.5 47.5 16.1 16.1 75-75L278 259.5l-16.1 16.1 48.7 48.7L34 323.7C28.7 303.9 26 283.5 26 263 26 132.3 132.3 26 263 26c49.7 0 97.3 15.3 137.6 44.2 38.5 27.6 67.6 65.3 84.2 109.3L216.7 179l47.5-47.5 -16.1-16.1 -75 75 76.2 76.2 16.1-16.1 -48.7-48.7 275.2 0.5c5.3 19.8 7.9 40.3 7.9 60.7 0 63.2-24.7 122.7-69.5 167.5C385.7 475.3 326.2 500 263 500c-49.7 0-97.3-15.3-137.6-44.2 -38.5-27.6-67.6-65.3-84.2-109.3L310.7 347z"/></switch></svg>');
        return t.trim()
    }

    function a() {
        var t = '\n\t\t<div class="powa-switchplay-wrapper franklin-light">\n\t\t\t<div class="powa-switchplay-btn">\n\t\t\t\t<div class="powa-switchplay-svg">' + o() + '</div>\n\t\t\t\t<div class="powa-switchplay-text"> Switch to play ad in article</div>\n\t\t\t</div>\n\t\t</div>\n\t';
        return t.trim()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        s = n(8),
        l = n(7),
        u = "\n\t.powa-switchplay-wrapper {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\tposition: absolute;\n\t\tright: 30px; \n\t\tbottom: 15px;\n\t\tfont-size: 16px;\n\t\tfont-weight: 400;\n\t}\n\t.powa-switchplay-btn {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tborder: 2px solid white;\n\t\tborder-radius: 2px;\n\t\tbackground-color: rgba(0,0,0,.75);\n\t\tcolor: white;\n\t\tpadding: 6px 8px 6px 6px;\n\t\tcursor: pointer;\n\t}\n\t.powa-switchplay-btn svg path {\n\t\tfill: white;\n\t}\n\t.powa-switchplay-btn:hover {\n\t\tbackground: rgba(103, 96, 96, 0.7);\n\t}\n\t.powa-switchplay-svg {\n\t\theight: 30px;\n\t\twidth: 30px;\n\t}\n\t.powa-switchplay-text {\n\t\tpadding-left: 4px;\n\t}\n\n\t@media only screen and (max-width: 480px) {\n\t\t.powa-switchplay-wrapper {\n\t\t\tfont-size: 13px;\n\t\t}\n\n\t\t.powa-switchplay-btn {\n\t\t\tpadding: 4px 6px 4px 4px;\n\t\t}\n\n\t\t.powa-switchplay-svg {\n\t\t\theight: 25px;\n\t\t\twidth: 25px;\n\t\t}\n\t}\n",
        c = function() {
            function t(e) {
                if (i(this, t), !e.id && !e.powa) throw "Invalid settings to setup Switchplay";
                (0, s.addCSS)(u, "powa-switchplay"), this.powa = e.powa, this.settings = e, this.$powaEl = (0, l.$)(e.powa.getElement()), this.$el = (0, l.$)(a()), this.$btn = this.$el.find(".powa-switchplay-btn"), this.adLoaded = this.adLoaded.bind(this), this.hideSwitchplay = this.hideSwitchplay.bind(this), this.handleClick = this.handleClick.bind(this), this.powa.on("adLoaded", this.adLoaded)
            }
            return r(t, [{
                key: "adLoaded",
                value: function(t) {
                    var e = this,
                        n = t.adMeta.mediaUrl,
                        i = (0, s.get)(window, "wp_pb.pageName", "").startsWith("article");
                    if (n.endsWith("_switchplay.mp4") && i) {
                        var o = this.$powaEl.find("#" + this.settings.id + "-ad-skip-container");
                        o && o.hide();
                        var a = function(t) {
                                return !(t.elapsed < 6)
                            },
                            r = function(t) {
                                t.elapsed > 6 && (e.$powaEl.append(e.$el), e.powa.trigger("switchplayBtnShow"), e.powa.on("adSkip", function(t) {
                                    function n(t) {
                                        var e, n = document.querySelectorAll(".wp-inline-bb");
                                        if (n.length)
                                            for (e = 0; e < n.length; e++) n[e].setAttribute("data-refresh", "off"), n[e].setTargeting(t)
                                    }
                                    window.preroll = {};
                                    var i = e.powa.getDataset().playerType,
                                        o = "live" === e.settings.videoData.video_type ? ",live" : ",vod";
                                    i = "playerType" + o;
                                    var a = t.adMeta.adId,
                                        r = t.event.duration,
                                        s = r - t.event.remaining;
                                    window.preroll = {
                                        preroll_id: a,
                                        playerType: i,
                                        adDuration: r,
                                        adTimestamp: s
                                    }, n({
                                        preroll_id: a
                                    }), e.powa.trigger("switchplayClick", {
                                        adId: a,
                                        adTimestamp: s,
                                        playerType: i
                                    })
                                }), e.powa.on("adEnd", e.hideSwitchplay), e.$btn.on("click", e.handleClick))
                            };
                        this.powa.until("adTime", a, r)
                    }
                }
            }, {
                key: "hideSwitchplay",
                value: function() {
                    this.$el.hide()
                }
            }, {
                key: "handleClick",
                value: function() {
                    this.powa.skipAd("switchplay-clicked")
                }
            }]), t
        }();
    e.default = c
}, function(t, e, n) {
    "use strict";

    function i(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t) {
        var e = document.createElement("div");
        return e.id = "powa-sticky-" + t, e.classList.add(g.WRAP), this._bg && (e.style.backgroundImage = 'url("' + this._bg + '")'), window.PoWaSettings.client.isMobile && e.classList.add(g.MOBILE), e
    }

    function r() {
        var t = document.createElement("div"),
            e = document.createElement("div"),
            n = document.createElement("span"),
            i = document.createElement("i");
        return t.classList.add(g.INNER_WRAP), e.classList.add(g.CLOSE_BTN, g.FRANKLIN_BOLD), i.classList.add("fa", "fa-times"), n.innerHTML = m, e.appendChild(n), e.appendChild(i), t.appendChild(e), this._$closeButton = (0, p.$)(e), t
    }

    function s() {
        var t = a.call(this, this._id),
            e = r.call(this),
            n = document.querySelector("#" + this._id);
        return n.parentNode.insertBefore(t, n), t.appendChild(n), n.parentNode.insertBefore(e, n), e.appendChild(n), this._$innerWrap = (0, p.$)(e), (0, p.$)(t)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var l = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        u = n(8),
        c = n(174),
        d = i(c),
        p = n(7);
    window.PoWaSettings.queryStringObj = window.PoWaSettings.queryStringObj || (0, u.getQueryStringObj)(), window.PoWaSettings.client = window.PoWaSettings.client || (0, u.sniffClient)();
    var f = 1 == window.PoWaSettings.queryStringObj.disableSticky,
        h = {
            VIEWABLE: "powaViewable",
            NOT_VIEWABLE: "powaNotViewable",
            STICKY_ENGAGED: "stickyEngaged",
            STICKY_DISENGAGED: "stickyDisengaged",
            STICKY_CLOSE: "stickyClose"
        },
        g = {
            STICKY: "sticky",
            WRAP: "powa-wrap",
            INNER_WRAP: "powa-wrap-inner",
            CLOSE_BTN: "powa-wrap-inner-close",
            MOBILE: "mobile",
            FRANKLIN_BOLD: "franklin-bold",
            POWA_SHOT: "powa-shot"
        },
        m = "Close",
        v = "\n\n\t@keyframes bring-me-in {\n\t\t0% {\n\t\t\tbottom: -400px;\n\t\t}\n\t\t100% {\n\t\t\tbottom: 13px;\n\t\t}\n\t}\n\n\t@keyframes bring-me-in-mobile {\n\t\t0% {\n\t\t\tbottom: -400px;\n\t\t}\n\t\t100% {\n\t\t\tbottom: 60px;\n\t\t}\n\t}\n\n\t.powa-wrap-inner.sticky {\n\t\tposition: fixed !important;\n\t\tright: 13px;\n\t\tz-index: 2147483647;\n\t\tanimation: bring-me-in .5s;\n\t\tmin-width: 250px !important;\n\t\tmax-width: 492px !important;\n\t\twidth: 33% !important;\n\t\tbottom: 13px;\n\t}\n\n\t.powa-wrap.mobile .powa-wrap-inner.sticky {\n\t\tanimation: bring-me-in-mobile .5s;\n\t\twidth: 200px !important;\n\t\tbottom: 60px;\n\t}\n\n\t.powa-wrap.mobile .powa-wrap-inner.sticky.extra {\n\t\tbottom: 65px;\n\t}\n\n\t.powa-wrap-inner-close {\n\t\tfont-size: 14px;\n\t\tline-height: 22px;\n\t\tdisplay: none;\n\t\tcursor: pointer;\n\t\tbackground: #333;\n\t\tpadding: 7px 11px;\n\t\tcolor: #fff;\n\t\tborder-radius: 5px 5px 0 0;\n\t\t-moz-box-shadow: 0 2px 2px #696969;\n\t\t-webkit-box-shadow: 0 2px 2px #696969;\n\t\tbox-shadow: 0 2px 2px #696969;\n\t}\n\n\t.powa-wrap-inner-close i {\n\t\tpadding-left: .5em;\n\t}\n\n\t.powa-wrap-inner.sticky .powa-wrap-inner-close {\n\t\tdisplay: inline-block;\n\t}\n\n\t.powa-wrap-inner.sticky .powa-wrap-inner-close span {\n\t\tdisplay:none;\n\t}\n\n\t.powa-wrap-inner.sticky .powa-wrap-inner-close i {\n\t\tpadding: .25em;\n\t\tfont-size: 1.25em;\n\t}\n\n\t.powa-wrap.sticky {\n\t\twidth: 100%;\n\t\tpadding-bottom: 56.25%;\n\t\tbackground-color: #d3d3d3;\n\t\tbackground-size: cover;\n\t\tbackground-color: black;\n\t}\n";
    (0, u.addCSS)(v, "powa-sticky");
    var w = function() {
        function t(e) {
            var n = this;
            if (o(this, t), !e.powa && !e.id) throw "Could not set up sticky player with insufficient settings";
            this._id = e.id, this._bg = e.bg, this.optedOut = !1, this.isSticky = !1, this._stickyEngagedTimeStamp = null, f || (this._$wrap = s.call(this), window.powas && window.powas[this._id] ? (this._setup(), this.setupListeners()) : window.addEventListener("powaReady", function(t) {
                t.detail.id === n._id && (n.setup(), n.setupListeners())
            }))
        }
        return l(t, [{
            key: "engageSticky",
            value: function() {
                this.isSticky = !0, this._powa.trigger(h.STICKY_ENGAGED), this._stickyEngagedTimeStamp || (this._stickyEngagedTimeStamp = Date.now()), this._$wrap.addClass(g.STICKY), this._$innerWrap.addClass(g.STICKY), (0, p.$)(this._powa.getElement()).addClass(g.STICKY)
            }
        }, {
            key: "disengageSticky",
            value: function() {
                this.isSticky = !1, this._powa.trigger(h.STICKY_DISENGAGED), this._$wrap.removeClass(g.STICKY), this._$innerWrap.removeClass(g.STICKY), (0, p.$)(this._powa.getElement()).removeClass(g.STICKY)
            }
        }, {
            key: "trackClose",
            value: function() {
                this._powa.getElement().dispatchEvent(new CustomEvent(h.STICKY_CLOSE, {
                    detail: Math.floor((Date.now() - this._stickyEngagedTimeStamp) / 1e3)
                }))
            }
        }, {
            key: "setup",
            value: function() {
                this._powa = window.powas[this._id].powa, new d.default({
                    id: this._$wrap.attr("id"),
                    powaPack: this._$wrap,
                    offsetTop: 0,
                    viewableThreshold: .5
                })
            }
        }, {
            key: "setupListeners",
            value: function() {
                var t = this;
                this._$wrap.on(h.VIEWABLE, function(e) {
                    t.isSticky && t.disengageSticky()
                }), this._$wrap.on(h.NOT_VIEWABLE, function(e) {
                    t._powa.getStatus().playing && !t.optedOut && t.engageSticky()
                }), this._$closeButton.on("click", function(e) {
                    t.trackClose(), t.optedOut = !0, t._powa.pause(), t.disengageSticky()
                })
            }
        }]), t
    }();
    e.default = w
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e, n) {
        var i, o, a, r = null,
            s = 0;
        n || (n = {});
        var l = function() {
            s = n.leading === !1 ? 0 : Date.now(), r = null, a = t.apply(i, o), r || (i = o = null)
        };
        return function() {
            var u = Date.now();
            s || n.leading !== !1 || (s = u);
            var c = e - (u - s);
            return i = this, o = arguments, c <= 0 || c > e ? (r && (clearTimeout(r), r = null), s = u, a = t.apply(i, o), r || (i = o = null)) : r || n.trailing === !1 || (r = setTimeout(l, c)), a
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        r = n(8),
        s = {
            VIEWABLE: "powaViewable",
            NOT_VIEWABLE: "powaNotViewable"
        },
        l = .5,
        u = "PoWaViewable",
        c = function() {
            function t(e) {
                if (i(this, t), !e.id) throw "Invalid settings to setup PoWaViewable";
                this._powa = e.powa, this._id = e.id, this._el = document.getElementById(e.id), this._powaPack = e.powaPack, e.offsetTop && (this._lookout = this._initLookout(e.offsetTop, "top")), this.debug = e.debug, this.onViewable = e.onViewable, this.viewableThreshold = e.viewableThreshold || l, this.lookLeftAndRight = (0, r.get)(e, "lookLeftAndRight", !0), this.checkIfVisible = (0, r.get)(e, "checkIfVisible", !1), (0, r.isElementInViewport)(this._el, this.viewableThreshold, this.lookLeftAndRight, this.checkIfVisible) ? this.trigger() : this._lookout && (0, r.isElementInViewport)(this._lookout, this.viewableThreshold, this.lookLeftAndRight, this.checkIfVisible) && this.trigger(), window.IntersectionObserver ? (this.handleIntersectionBound = this.handleIntersection.bind(this), this.observer = new IntersectionObserver(this.handleIntersectionBound, {
                    threshold: this.viewableThreshold
                }), this.observer.observe(this._el), this._lookout && this.observer.observe(this._lookout)) : (this.handleScrollBound = o(this.handleScroll.bind(this), 100), window.addEventListener("scroll", this.handleScrollBound, !1))
            }
            return a(t, [{
                key: "handleIntersection",
                value: function(t, e) {
                    var n = this;
                    this.debug && console.debug("[" + u + "] handleIntersection", t);
                    var i = t.map(function(t) {
                        return t.intersectionRatio >= n.viewableThreshold
                    }).reduce(function(t, e) {
                        return t || e
                    });
                    i ? (this.inFrame = !0, this.trigger()) : this.inFrame && (this.inFrame = !1, this.triggerOut())
                }
            }, {
                key: "handleScroll",
                value: function(t) {
                    this.debug && console.debug("[" + u + "] handleScroll()"), !this._started && (0, r.isElementInViewport)(this._el, this.viewableThreshold, this.lookLeftAndRight, this.checkIfVisible) ? this.trigger() : this._lookout && (0, r.isElementInViewport)(this._lookout, this.viewableThreshold, this.lookLeftAndRight, this.checkIfVisible) ? this.trigger() : (0, r.isElementInViewport)(this._lookout, this.viewableThreshold, this.lookLeftAndRight, this.checkIfVisible) || this.triggerOut()
                }
            }, {
                key: "trigger",
                value: function() {
                    this.debug && console.debug("[" + u + "] trigger()"), this._powaPack && this._powaPack.trigger(s.VIEWABLE), this._powa && this._powa.trigger(s.VIEWABLE), this._el.setAttribute("data-viewable-fired", !0), "function" == typeof this.onViewable && this.onViewable()
                }
            }, {
                key: "triggerOut",
                value: function() {
                    this.debug && console.debug("[" + u + "] triggerOut()"), this._powaPack && this._powaPack.trigger(s.NOT_VIEWABLE), this._powa && this._powa.trigger(s.NOT_VIEWABLE)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.debug && console.debug("[" + u + "] destroy()"), this.observer && (this.observer.unobserve(this._el), this._lookout && this.observer.unobserve(this._lookout)), this.handleScrollBound && window.removeEventListener("scroll", this.handleScrollBound, !1)
                }
            }, {
                key: "_initLookout",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        n = document.createElement("div");
                    return n.id = this._id + "-lookout-" + e, n.className = "powa-lookout", n.style.position = "relative", n.style[e] = "-" + t + "px", this._el.appendChild(n), n
                }
            }]), t
        }();
    e.default = c
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CloudfrontTracker = void 0;
    var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        a = n(8),
        r = "https://d1d3jupgwm7m5r.cloudfront.net/prod/cloudfrontVideoTracker.png";
    e.CloudfrontTracker = function() {
        function t() {
            var e = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, t), this.settings = n, this.id = this.settings.id, window.addEventListener("powaReady", function(t) {
                (0, a.get)(t, "detail.id") === e.id && (e.powa = t.detail.powa, e.powa.on("start", e.sendToCloudfrontTracker))
            })
        }
        return o(t, [{
            key: "sendToCloudfrontTracker",
            value: function(t) {
                var e = Date.now(),
                    n = window.PoWaSettings.org,
                    i = "?org=" + n + "&event=" + t.type + "&timestamp=" + e,
                    o = "" + r + i,
                    a = new Image;
                a.src = o
            }
        }]), t
    }()
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o() {
        var t = '\n\t\t<div class="powa-message">\n\t\t\t<p class="powa-message-content franklin-light">/p>\n\t\t</div>\n\t';
        return t.trim()
    }

    function a() {
        var t = this;
        this._powa.on("playerWaitingError", function(e) {
            t.setMessage("Your connection is too slow to play the video"), t.show(), t._powa.on("play", function(e) {
                t._powa.pause()
            })
        })
    }

    function r(t) {
        var e = (0, u.$)("#" + this.settings.id);
        e.append(this._$el)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        l = n(8),
        u = n(7),
        c = "\n\t.powa-message {\n\t\tdisplay: none;\n\t\tposition: absolute;\n\t\tz-index: 2;\n\t\tbackground: rgba(0, 0, 0, .6);\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t.powa-message.on {\n\t\tdisplay: flex;\n\t}\n\n\t.powa-message-content {\n\t\tcolor: white;\n\t\tfont-size: 20px;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\ttext-shadow: none;\n\t}\n";
    (0, l.addCSS)(c, "powa-message");
    var d = function() {
        function t(e) {
            if (i(this, t), !e.id) throw "Invalid settings to setup Message";
            this.settings = e, this._powa = e.powa, this._$el = (0, u.$)(o()), this._$message = this._$el.find(".powa-message-content"), r.call(this), this._powa && a.call(this), e.msg && (this.setMessage(e.msg), this.show())
        }
        return s(t, [{
            key: "show",
            value: function() {
                this._$el.addClass("on")
            }
        }, {
            key: "hide",
            value: function() {
                this._$el.removeClass("on")
            }
        }, {
            key: "setMessage",
            value: function(t) {
                this._$message.html(t)
            }
        }]), t
    }();
    e.default = d
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t) {
        return '\n\t\t<div class="powa-preview">\n\t\t\t<div class="powa-preview-button franklin-bold">\n\t\t\t\t<i class="fa fa-volume-up"></i>\n\t\t\t\t' + (t.playtext || "Listen") + "\n\t\t\t</div>\n\t\t</div>\n\t"
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = n(8),
        r = n(7),
        s = "\n\t.powa-preview {\n\t\tz-index: 1;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tposition: absolute;\n\t\ttop: 0px;\n\t\tleft: 0px;\n\t\toverflow: hidden;\n\t\tbackground-size: cover;\n\t\tbackground-position: center;\n\t\ttext-shadow: rgba(0,0,0,.01) 0 0 1px;\n\t\tcursor: pointer;\n\t}\n\n\t.powa-preview .powa-preview-button {\n\t\tfont-size: 15px;\n\t\tline-height: 16px;\n\t\tcolor: #EEE;\n\t\tpadding: 15px 20px;\n\t\tborder-radius: 4px;\n\t\tbackground-color: rgba(0,0,0,.6);\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tmargin: 20px;\n\t\t-webkit-font-smoothing: antialiased;\n\t}\n\n\t.powa-preview:hover .powa-preview-button {\n\t\tbackground-color: rgba(0,0,0,1);\n\t}\n\n\t.powa-preview i {\n\t\tpadding-right: 0.5em;\n\t}\n",
        l = function t() {
            var e = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            i(this, t), this.id = n.id, this.powa = n.powa, this.$el = (0, r.$)("#" + n.id), this.debug = "boolean" == typeof n.debug && n.debug, (0, a.addCSS)(s, "powa-preview"), this.html = o(n), this.$el.append(this.html), this.$el.addClass("powa-preview"), this.$preview = this.$el.find(".powa-preview"), this.$preview.on("click", function() {
                if (e.$el.removeClass("powa-preview"), e.$preview.hide(), e.powa.trigger("previewClicked"), "function" == typeof n.onWatch) try {
                    n.onWatch()
                } catch (t) {} else e.powa.mute(!1), e.powa.volume(1), e.powa.showControls()
            })
        };
    e.default = l
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.VideoAnalytics = e.VIDEO_ANALYTICS_URL = e.VIDEO_ANALYTICS_ENV = void 0;
    var o = n(8),
        a = n(9);
    window.PoWaSettings = window.PoWaSettings || {}, PoWaSettings.queryStringObj = PoWaSettings.queryStringObj || (0, o.getQueryStringObj)();
    var r = e.VIDEO_ANALYTICS_ENV = PoWaSettings.queryStringObj.vaEnv ? PoWaSettings.queryStringObj.vaEnv.replace(/\W/g, "") : "prod";
    e.VIDEO_ANALYTICS_URL = "https://d2p9l91d5g68ru.cloudfront.net/VideoAnalytics/" + r + "/VideoAnalytics.js", e.VideoAnalytics = function t(e) {
        i(this, t);
        var n = e.id,
            r = e.powa,
            s = e.powa.getElement(),
            l = (0, a.map)(s.dataset, o.parseString);
        window.VideoAnalytics && (l.videoAnalyticsId ? (this.va = window.VideoAnalytics.init(l.videoAnalyticsId), this.va.registerPoWa(n)) : this.va = window.VideoAnalytics.init(n, {
            powaId: n
        }), s.va = this.va, r.trigger("videoAnalyticsReady", {
            va: this.va
        }))
    }
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        a = n(8);
    PoWaSettings.APS = PoWaSettings.APS || {};
    var r = {
            FETCHED: "apsFetched",
            TIMEOUT: "apsTimeout"
        },
        s = function() {
            function t() {
                i(this, t)
            }
            return o(t, null, [{
                key: "init",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    ! function(t, e, n, i, o, a, r) {
                        function s(n, i) {
                            e[t]._Q.push([n, i])
                        }
                        e[t] || (e[t] = {
                            init: function() {
                                s("i", arguments)
                            },
                            fetchBids: function() {
                                s("f", arguments)
                            },
                            setDisplayBids: function() {},
                            targetingKeys: function() {
                                return []
                            },
                            _Q: []
                        }, a = n.createElement(i), a.async = !0, a.src = o, r = n.getElementsByTagName(i)[0], r.parentNode.insertBefore(a, r))
                    }("apstag", window, document, "script", "https://c.amazon-adsystem.com/aax2/apstag.js"), window.apstag.init({
                        pubID: t.pubId,
                        videoAdServer: "DFP",
                        bidTimeout: t.timeout || 500
                    })
                }
            }, {
                key: "isZeus",
                value: function() {
                    return !!window.wpAd
                }
            }, {
                key: "isA9Init",
                value: function() {
                    var t = void 0;
                    try {
                        t = window.apstag.debug("getState").config
                    } catch (t) {}
                    return (0, a.notEmpty)(t)
                }
            }, {
                key: "fetchBid",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.timeout || 1500,
                        n = Date.now();
                    return new Promise(function(i, o) {
                        var a = setTimeout(function() {
                            i();
                            var e = Date.now();
                            t.powa.trigger(r.TIMEOUT, {
                                timeSinceBidRequest: e - n
                            })
                        }, e);
                        window.apstag.fetchBids({
                            slots: [{
                                slotID: "videoSlot",
                                mediaType: "video"
                            }],
                            timeout: e
                        }, function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            clearTimeout(a);
                            var o = e.filter(function(t) {
                                    return "video" === t.mediaType
                                }),
                                s = Date.now();
                            t.powa.trigger(r.FETCHED, {
                                timeSinceBidRequest: s - n,
                                bidReturned: !!o[0]
                            }), o[0] ? i(o[0]) : i()
                        })
                    })
                }
            }, {
                key: "stashBid",
                value: function(t, e) {
                    PoWaSettings.APS[t] = e
                }
            }, {
                key: "getBid",
                value: function(t) {
                    return PoWaSettings.APS[t]
                }
            }, {
                key: "clearBid",
                value: function(t) {
                    delete PoWaSettings.APS[t]
                }
            }]), t
        }();
    e.default = s
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.ARTICLE_PAGE_RESET = "\n\t.powa * {\n\t\ttext-shadow: none !important\n\t}\n\n\t/* blurb stuff -- need to override StoryAdapter's blurb elements and CSS */\n\t.inline-video-caption {\n\t\tdisplay: none !important;\n\t}\n\t.powa-blurb.inline-video-caption {\n\t\tdisplay: block !important;\n\t}\n\t.powa-article-wrapper .powa-blurb {\n\t\tmargin-top: 10px;\n\t}\n\t.powa-blurb-wrap.pb-caption {\n\t\tpadding: 0;\n\t\tline-height: 16px;\n\t\tmargin: 0;\n\t}\n", e.VARS = {
        PLAYER_ROOT: "https://www.washingtonpost.com/player"
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.PANE_PLAY_BUTTON_CENTER = '\n.powa.playing .powa-shot-masthead {\n\tdisplay: none;\t\t\n}\n.powa:not(.mobile-player):not(.playing):hover .powa-shot-masthead {\n\tdisplay: flex;\n}\n.powa.playing.show-pane .powa-shot-masthead {\n\tdisplay: flex;\n}\n.powa.ad-playing .powa-shot-masthead {\n\tdisplay: none !important;\n}\n.powa-shot-masthead {\n\tbox-sizing: border-box;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tbackground: linear-gradient(to bottom,rgba(0,0,0,.5) 0,rgba(0,0,0,0) 100%);\n\tpadding: 24px;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tz-index: 2;\n\tpadding:3% calc(80px + 5%) 20px 3%;\n}\n.powa.small .powa-shot-masthead {\n\tpadding:3% calc(70px + 5%) 20px 3.5%;\n}\n.powa.xSmall .powa-shot-masthead {\n\tpadding:3% calc(60px + 5%) 20px 3.5%;\n}\n.powa.mobile-player .powa-shot-masthead {\n\tpadding: 14px 18px;\n}\n.powa.playing .powa-shot-masthead {\n\tdisplay: none;\n}\n.powa[data-show-title="false"] .powa-shot-title {\n\tdisplay: none;\n}\n.powa[data-show-share="false"] .powa-shot-sharing {\n\tdisplay: none;\n}\n.powa[data-show-share="false"] .powa-shot-masthead {\n\tjustify-content: flex-start;\n}\n.powa[data-show-title="false"][data-show-share="false"] .powa-shot-masthead,\n.powa[data-show-title="false"][data-show-share="false"]:hover .powa-shot-masthead{\n\tdisplay: none;\n}\n.powa-shot-title {\n\tfont-size: 19px;\n\t\tcolor:#ffffff;\n\t\twidth: inherit;\n\t\tmargin-right: 0;\n\t\ttext-align: left;\n\t\ttext-shadow: 0 0 1px rgba(0,0,0,.5);\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\tline-height: 25px;\n}\n.powa-shot-sharing-item {\n\tcursor: pointer;\n\ttext-shadow: none;\n\tfont-size: 16px;\n}\n.powa-shot-sharing {\n\tdisplay: flex;\n\tcolor: #EEE;\n\twidth: 25%;\n\tjustify-content: flex-end;\n\tmargin-left: 1rem;\n}\n.powa-shot-sharing i {\n\tfont-weight: bold;\n}\n.powa-sharing-social-item i {\n\tfont-weight: 400;\n}\n.powa-sharing-social-item i:hover {\n\tfont-weight: 900;\n}\n.powa-shot-sharing-social {\n\tmargin: 0 20px;\n}\n.powa-shot-sharing-social-popup i:hover {\n\tcolor: white;\n\topacity: 1;\n}\n.powa-shot-tooltip {\n\tposition: absolute;\n\ttransform: translateX(-60%);\n\twhite-space: nowrap;\n\tcolor: #EEE;\n\tbackground: rgb(44, 108, 180);\n\tborder-radius: 3px;\n}\n.powa-shot-sharing-embed-popup {\n\tpadding: 10px;\n}\n.powa-shot-tooltip {\n\tdisplay: none;\n}\n.powa-shot-tooltip-triangle {\n\tcontent: \' \';\n\twidth: 0;\n\theight: 0;\n\tborder-left: 5px solid transparent;\n\tborder-right: 5px solid transparent;\n\tborder-bottom: 10px solid #2C6CB4;\n\tposition: relative;\n\tdisplay: block;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\topacity: .9;\n\tdisplay: none;\n}\n/* hide certain elements when player is small */\n.powa.small .powa-shot-sharing-title {\n\tdisplay: none;\n}\n.powa.small .powa-shot-title {\n\tfont-size: 18px;\n\tline-height: 23px;\n}\n.powa.small .powa-shot-sharing {\n\twidth: 15%;\n\tfont-size: 16px;\n}\n.powa.mobile-player .powa-shot-sharing-embed {\n\tdisplay: none;\n}\n.powa.xSmall .powa-shot-title {\n\tfont-size: 16px;\n\tline-height: 21px;\n}\n\n.powa.mobile-player .powa-shot-title {\n\twidth: 100%;\n\tfont-size: 16px;\n\tline-height: 21px;\n}\n\n/* Safari 11\'s native controls include controls at top-left & sometimes top-right -- adjust the pane so that those controls are clickable */\n.powa.playing.native-controls.powa-saf11-controls .powa-shot-masthead {\n\tbackground: none;\n\tposition: relative;\n\ttop: 45px;\n\tpadding: 0 20px;\n}\n.powa.playing.native-controls.powa-saf11-controls .powa-shot-sharing {\n\tposition: relative;\n\ttop: -20px;\n}\n.powa.playing.native-controls.powa-saf11-controls .shadow {\n\ttext-shadow: 1px 1px 0 black;\n}\n.powa.playing.native-controls.powa-saf11-controls.mobile-player .powa-shot-title,\n.powa.playing.native-controls.powa-saf11-controls.mobile-player .powa-shot-sharing,\n.powa.playing.native-controls.powa-saf11-controls[data-device-class="tablet"] .powa-shot-title,\n.powa.playing.native-controls.powa-saf11-controls[data-device-class="tablet"] .powa-shot-sharing {\n\tfont-size: 14px;\n\ttop: 0;\n}\n.powa-shot-tooltip span {\n\tbackground: #0D1F34;\n\tcolor: #eee;\n\tborder-radius: 0 3px 3px 0;\n\theight: 30px;\n\tline-height: 30px;\n\tdisplay: inline-block;\n\tpadding: 0 16px;\n\tcursor: pointer;\n}\n\n.powa-wrap.sticky.mobile .powa-shot-tooltip span {\n\tline-height: 24px;\n\theight: 24px;\n}\n\n.powa-shot-tooltip ul {\n\tlist-style-type: none;\n\tpadding: 0;\n\tmargin: 0;\n}\n.powa-sharing-social-item {\n\tdisplay: inline-block;\n\tpadding: 10px 14px 10px 0;\n\tfont-size: 18px;\n\tcursor: pointer;\n\tcolor: #FFF;\n\tmargin: 0 !important;\n}\n.powa-sharing-button {\n\tcolor: #EEE !important;\n\tborder: none !important;\n}\n.powa-shot-tooltip ul li:first-child {\n\tpadding: 10px 14px;\n}\n.powa-shot-sharing-embed-code {\n\tborder: none;\n\tborder-radius: 3px 0 0 3px;\n\tfont-size: 14px;\n\theight: 30px;\n\tline-height: 30px;\n\tcolor: #000;\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\tvertical-align: middle;\n}\n\n.powa-wrap.sticky.mobile .powa-shot-sharing-embed-code {\n\tline-height: 24px;\n\theight: 24px;\n}\n\n.powa-shot-copy {\n\tvertical-align: middle;\n}\n.powa-shot-copy:hover {\n\tcolor: white;\n}\n.powa-ios .powa-mail-wrap {\n\tdisplay: none;\n}\n', e.PANE_GLOBAL = '\n.powa.playing .powa-shot-masthead {\n\tdisplay: none;\t\t\n}\n.powa:not(.mobile-player):not(.playing):hover .powa-shot-masthead {\n\tdisplay: flex;\n}\n.powa.playing.show-pane .powa-shot-masthead {\n\tdisplay: flex;\n}\n.powa.ad-playing .powa-shot-masthead {\n\tdisplay: none !important;\n}\n.powa-shot-masthead {\n\tbox-sizing: border-box;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tbackground: linear-gradient(to bottom,rgba(0,0,0,.5) 0,rgba(0,0,0,0) 100%);\n\tpadding: 20px;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tz-index: 2;\n}\n.powa.mobile-player .powa-shot-masthead {\n\tpadding: 15px;\n}\n.powa.playing .powa-shot-masthead {\n\tdisplay: none;\n}\n.powa[data-show-title="false"] .powa-shot-title {\n\tdisplay: none;\n}\n.powa[data-show-share="false"] .powa-shot-sharing {\n\tdisplay: none;\n}\n.powa[data-show-share="false"] .powa-shot-masthead {\n\tjustify-content: flex-start;\n}\n.powa[data-show-title="false"][data-show-share="false"] .powa-shot-masthead,\n.powa[data-show-title="false"][data-show-share="false"]:hover .powa-shot-masthead{\n\tdisplay: none;\n}\n.powa-shot-title {\n\tfont-size: 19px;\n\t\tcolor:#ffffff;\n\t\twidth: 80%;\n\t\tmargin-right: 0;\n\t\ttext-align: left;\n\t\ttext-shadow: 0 0 1px rgba(0,0,0,.5);\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\tline-height: 25px;\n}\n.powa-shot-sharing-item {\n\tcursor: pointer;\n\ttext-shadow: none;\n\tfont-size: 16px;\n}\n.powa-shot-sharing {\n\tdisplay: flex;\n\tcolor: #EEE;\n\twidth: 25%;\n\tjustify-content: flex-end;\n\tmargin-left: 1rem;\n}\n.powa-shot-sharing i {\n\tfont-weight: bold;\n}\n.powa-sharing-social-item i {\n\tfont-weight: 400;\n}\n.powa-sharing-social-item i:hover {\n\tfont-weight: 900;\n}\n.powa-shot-sharing-social {\n\tmargin: 0 20px;\n}\n.powa-shot-sharing-social-popup i:hover {\n\tcolor: white;\n\topacity: 1;\n}\n.powa-shot-tooltip {\n\tposition: absolute;\n\ttransform: translateX(-60%);\n\twhite-space: nowrap;\n\tcolor: #EEE;\n\tbackground: rgb(44, 108, 180);\n\tborder-radius: 3px;\n}\n.powa-shot-sharing-embed-popup {\n\tpadding: 10px;\n}\n.powa-shot-tooltip {\n\tdisplay: none;\n}\n.powa-shot-tooltip-triangle {\n\tcontent: \' \';\n\twidth: 0;\n\theight: 0;\n\tborder-left: 5px solid transparent;\n\tborder-right: 5px solid transparent;\n\tborder-bottom: 10px solid #2C6CB4;\n\tposition: relative;\n\tdisplay: block;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\topacity: .9;\n\tdisplay: none;\n}\n/* hide certain elements when player is small */\n.powa.small .powa-shot-sharing-title {\n\tdisplay: none;\n}\n.powa.small .powa-shot-title {\n\twidth: 100%;\n\tfont-size: 18px;\n\tline-height: 24px;\n}\n.powa.small .powa-shot-sharing {\n\twidth: 15%;\n\tfont-size: 16px;\n}\n.powa.mobile-player .powa-shot-sharing-embed {\n\tdisplay: none;\n}\n.powa.xSmall .powa-shot-title {\n\twidth: 100%;\n\tfont-size: 16px;\n\tline-height: 21px;\n}\n\n.powa.mobile-player .powa-shot-title {\n\twidth: 100%;\n\tfont-size: 16px;\n\tline-height: 21px;\n}\n\n/* Safari 11\'s native controls include controls at top-left & sometimes top-right -- adjust the pane so that those controls are clickable */\n.powa.playing.native-controls.powa-saf11-controls .powa-shot-masthead {\n\tbackground: none;\n\tposition: relative;\n\ttop: 45px;\n\tpadding: 0 20px;\n}\n.powa.playing.native-controls.powa-saf11-controls .powa-shot-sharing {\n\tposition: relative;\n\ttop: -20px;\n}\n.powa.playing.native-controls.powa-saf11-controls .shadow {\n\ttext-shadow: 1px 1px 0 black;\n}\n.powa.playing.native-controls.powa-saf11-controls.mobile-player .powa-shot-title,\n.powa.playing.native-controls.powa-saf11-controls.mobile-player .powa-shot-sharing,\n.powa.playing.native-controls.powa-saf11-controls[data-device-class="tablet"] .powa-shot-title,\n.powa.playing.native-controls.powa-saf11-controls[data-device-class="tablet"] .powa-shot-sharing {\n\tfont-size: 14px;\n\ttop: 0;\n}\n.powa-shot-tooltip span {\n\tbackground: #0D1F34;\n\tcolor: #eee;\n\tborder-radius: 0 3px 3px 0;\n\theight: 30px;\n\tline-height: 30px;\n\tdisplay: inline-block;\n\tpadding: 0 16px;\n\tcursor: pointer;\n}\n\n.powa-wrap.sticky.mobile .powa-shot-tooltip span {\n\tline-height: 24px;\n\theight: 24px;\n}\n\n.powa-shot-tooltip ul {\n\tlist-style-type: none;\n\tpadding: 0;\n\tmargin: 0;\n}\n.powa-sharing-social-item {\n\tdisplay: inline-block;\n\tpadding: 10px 14px 10px 0;\n\tfont-size: 18px;\n\tcursor: pointer;\n\tcolor: #FFF;\n\tmargin: 0 !important;\n}\n.powa-sharing-button {\n\tcolor: #EEE !important;\n\tborder: none !important;\n}\n.powa-shot-tooltip ul li:first-child {\n\tpadding: 10px 14px;\n}\n.powa-shot-sharing-embed-code {\n\tborder: none;\n\tborder-radius: 3px 0 0 3px;\n\tfont-size: 14px;\n\theight: 30px;\n\tline-height: 30px;\n\tcolor: #000;\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\tvertical-align: middle;\n}\n\n.powa-wrap.sticky.mobile .powa-shot-sharing-embed-code {\n\tline-height: 24px;\n\theight: 24px;\n}\n\n.powa-shot-copy {\n\tvertical-align: middle;\n}\n.powa-shot-copy:hover {\n\tcolor: white;\n}\n.powa-ios .powa-mail-wrap {\n\tdisplay: none;\n}\n',
        e.PROMO_UNSUPPORTED_ERROR = "\n\t.powa-unsupported-error {\n\t\tposition: absolute;\n\t\tz-index: 2;\n\t\tbackground-position: center;\n\t\tbackground-size: cover;\n\t\t-webkit-box-align: center;\n\t\t\t-ms-flex-align: center;\n\t\t\t\talign-items: center;\n\t\t-webkit-box-pack: center;\n\t\t\t-ms-flex-pack: center;\n\t\t\t\tjustify-content: center;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: -webkit-box;\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: flex;\n\t\ttext-align: center;\n\t}\n\n\t.powa-unsupported-error div {\n\t\tcolor: white;\n\t\tfont-size: 20px;\n\t\tmargin: 0;\n\t\twidth: 90%;\n\t\tpadding: 20px 30px;\n\t\ttext-shadow: none;\n\t\tline-height: 1.3em;\n\t\tbackground-color: rgba(0,0,0,0.7);\n\t\tborder-radius: 10px;\n\t}\n"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PROMO_GLOBAL = e.PROMO_PLAY_BUTTON_CENTER = void 0;
    var i = n(180);
    e.PROMO_PLAY_BUTTON_CENTER = '\n.powa-shot-image {\n\tbackground-color: #000;\n\tz-index: 1;\n\theight: 100%;\n\twidth: 100%;\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\toverflow: hidden;\n\tbackground-size: cover;\n\tbackground-position: center;\n\ttext-shadow: rgba(0,0,0,.01) 0 0 1px;\n}\n.powa-shot-image {\n\t-webkit-font-smoothing: antialiased;\n\t-webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;\n}\n.powa[data-custom-btn-text] .powa-custom-btn-text {\n\tpadding-right: .3rem;\n}\n.powa[data-hide-btn="true"] .powa-shot-play-btn {\n\tdisplay: none;\n}\n.powa-shot-btn-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: absolute;\n}\n.powa-shot-play-btn {\n\tfont-size: 28px;\n    width: 9%;\n    height: 16%;\n    min-height: 70px;\n    min-width: 70px;\n    max-height: 84px;\n    max-width: 84px;\n\tcursor: pointer;\n\tcolor: #EEE;\n\tborder-radius: 6px;\n\tbackground-color: rgba(0,0,0,.8);\n\tposition: relative;\n\tmargin: 0;\n\tbox-shadow: 0 15px 80px 0 rgba(255,255,255,0.25);\n\tdisplay:-webkit-box;\n\tdisplay:-ms-flexbox;\n\tdisplay:flex;\n\t-webkit-box-align: center;\n\t\t-ms-flex-align: center;\n\t\t\talign-items: center;\n\t-webkit-box-pack: center;\n\t\t-ms-flex-pack: center;\n\t\t\tjustify-content: center;\n}\n.powa-shot-play-btn-text {\n\tmargin-right: 4px;\n\tmargin-left: 6px;\n}\n.powa-shot-play-btn:hover {\n\tbackground-color: #000;\n}\n.powa-shot-logo {\n\tbackground-size: 50px;\n\tbackground-repeat: no-repeat;\n\twidth: 50px;\n\theight: 50px;\n\tdisplay: inline-block;\n\tmargin: 20px;\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\tz-index: 2;\n}\n.powa-shot-logo[data-logo="wapo-analysis"] {\n\tbackground-image: url("' + i.VARS.PLAYER_ROOT + '/prod/img/WP_Analysis_200.png");\n}\n.powa-shot-logo[data-logo="wapo-opinion"] {\n\tbackground-image: url("' + i.VARS.PLAYER_ROOT + '/prod/img/WP_Opinion_200.png");\n}\n.powa-shot-logo[data-logo="wapo-perspective"] {\n\tbackground-image: url("' + i.VARS.PLAYER_ROOT + '/prod/img/WP_Perspective_200.png");\n}\n.powa-shot-logo[data-logo="wapo-review"] {\n\tbackground-image: url("' + i.VARS.PLAYER_ROOT + '/prod/img/WP_Review_200.png");\n}\n.powa-shot-logo[data-logo="wusa9"] {\n\tbackground-image: url("' + i.VARS.PLAYER_ROOT + '/prod/img/wusa9_2.png");\n\tbackground-size: 84px;\n\theight: 20px;\n\twidth: 84px;\n}\nvideo.powa-shot-promo-video::-webkit-media-controls {\n\tdisplay: none;\n}\n.powa-shot-live-badge {\n\tposition: absolute;\n\tz-index: 3;\n\tright: 0;\n\tfont-size: 20px;\n\tbackground-color: #E10C16;\n\tcolor: #FFFFFF;\t\n\tfont-weight: bold;\n\tletter-spacing: 2.5px;\n\ttext-align: center;\n\tmargin: 3% 3% 0 0;\n\tpadding: 3px 9px;\n\tborder-radius: 4px;\n}\n.powa.small .powa-shot-live-badge {\n    font-size: 17px;\n    letter-spacing: 2.5px;\n\tpadding: 1px 8px;\n\tmargin: 3.5% 3.5% 0 0;\n}\n.powa.xSmall .powa-shot-live-badge {\n    font-size: 13px;\n    letter-spacing: 2px;\n\tpadding: 1px 6px;\n\tmargin: 3.5% 3.5% 0 0;\n\tborder-radius: 3px;\n}\n.powa.small .powa-shot-play-btn {\n\tmargin:0;\n\tfont-size: 20px;\n\t width: 9%;\n\t height: 16%;\n\t min-height: 60px;\n\t min-width: 60px;\n\t max-height: 84px;\n\t max-width: 84px;\n }\n.powa.small .powa-shot-play-btn-icon {\n    line-height: 1.2em\n }\n.powa.xSmall .powa-shot-play-btn {\n    margin:0;\n    font-size: 20px;\n    width: 46px;\n    height: 46px;\n    min-height: 46px;\n    min-width: 46px;\n    max-height: 46px;\n    max-width: 46px;\n    margin-top: 6px;\n}\n.powa.xSmall .powa-shot-play-btn-icon {\n    line-height: 1.2em;\n    margin-left: 2px;\n }\n', e.PROMO_GLOBAL = '\n.powa-shot-image {\n\tbackground-color: #000;\n\tz-index: 1;\n\theight: 100%;\n\twidth: 100%;\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\toverflow: hidden;\n\tbackground-size: cover;\n\tbackground-position: center;\n\ttext-shadow: rgba(0,0,0,.01) 0 0 1px;\n}\n.powa-shot-image {\n\t-webkit-font-smoothing: antialiased;\n\t-webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;\n}\n.powa[data-custom-btn-text] .powa-custom-btn-text {\n\tpadding-right: .3rem;\n}\n.flex-item .powa[data-custom-btn-text] .powa-custom-btn-text {\n\tfont-family: "FranklinITCProBold", "HelveticaNeue", "Helvetica Neue Light","Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;\n}\n.powa[data-duration-or-live="false"] .powa-shot-duration {\n\tdisplay: none;\n}\n.powa[data-hide-btn="true"] .powa-shot-play-btn {\n\tdisplay: none;\n}\n.powa-shot-play-btn {\n\tcursor: pointer;\n\tfont-size: 16px;\n\tline-height: 20px;\n\tcolor: #EEE;\n\tpadding: 15px 20px;\n\tborder-radius: 4px;\n\tbackground-color: rgba(0,0,0,.6);\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\tmargin: 20px;\n}\n.powa-shot-play-btn.live {\n\tbackground-color: #E10C16;\n\tcolor: #FFFFFF;\t\n\tfont-family: "Franklin ITC Std";\t\t\n\tfont-weight: bold;\n}\n.powa-shot-play-btn-icon {\n\twidth: 16px;\n}\n.powa-shot-play-btn-text {\n\tmargin-right: 4px;\n\tmargin-left: 6px;\n}\n.powa-shot-play-btn:hover {\n\tbackground-color: #000;\n}\n.powa-shot-play-btn.live:hover {\n\tbackground-color: #FF0000;\n}\n.powa-shot-logo {\n\tbackground-size: 50px;\n\tbackground-repeat: no-repeat;\n\twidth: 50px;\n\theight: 50px;\n\tdisplay: inline-block;\n\tmargin: 20px;\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\tz-index: 2;\n}\n.powa-shot-logo[data-logo="wapo-analysis"] {\n\tbackground-image: url("' + i.VARS.PLAYER_ROOT + '/prod/img/WP_Analysis_200.png");\n}\n.powa-shot-logo[data-logo="wapo-opinion"] {\n\tbackground-image: url("' + i.VARS.PLAYER_ROOT + '/prod/img/WP_Opinion_200.png");\n}\n.powa-shot-logo[data-logo="wapo-perspective"] {\n\tbackground-image: url("' + i.VARS.PLAYER_ROOT + '/prod/img/WP_Perspective_200.png");\n}\n.powa-shot-logo[data-logo="wapo-review"] {\n\tbackground-image: url("' + i.VARS.PLAYER_ROOT + '/prod/img/WP_Review_200.png");\n}\n.powa-shot-logo[data-logo="wusa9"] {\n\tbackground-image: url("' + i.VARS.PLAYER_ROOT + '/prod/img/wusa9_2.png");\n\tbackground-size: 84px;\n\theight: 20px;\n\twidth: 84px;\n}\nvideo.powa-shot-promo-video::-webkit-media-controls {\n\tdisplay: none;\n}\n.powa.small .powa-shot-play-btn {\n\tpadding: 12px 16px;\n}\n.powa.xSmall .powa-shot-play-btn {\n\tpadding: 12px 16px;\n}\n.powa.mobile-player .powa-shot-play-btn {\n\tmargin: 15px;\n}\n'
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    e.VIDEO_GLOBAL = "\n\t.powa video {\n\t\ttext-shadow: none;\n\t\tbackground-color: black;\n\t\tposition: absolute;\n\t\ttop: 0px;\n\t\tleft: 0px;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\t.powa video::cue {\n\t\ttext-shadow: none;\n\t\toutline: none;\n\t\ttext-decoration: none;\n\t\tfont-family: FranklinITCProLight;\n\t}\n\t.powa.fullscreen video {\n\t\twidth: 100% !important;\n\t\theight: 100% !important;\n\t}\n\n\t/* Necessary because some ad scripts disable this globally via *::-webkit-media-controls-panel { display:none !important; -webkit-appearance:none } */\n\n\t/* Native controls would appear while ads were playing. */\n\t.powa.ad-playing video::-webkit-media-controls-panel {\n\t\tdisplay: none !important;\n\t}\n\n\t.powa.ad-playing video::-webkit-media-controls-panel {\n\t\tdisplay: none !important;\n\t}\n\n\t.powa.custom-controls video::-webkit-media-controls {\n\t\tdisplay: none !important;\n\t}\n\n\t.powa.native-controls video::-webkit-media-controls {\n\t\tdisplay: flex;\n\t}\n"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.FRANKLIN_ITC_LIGHT = e.FRANKLIN_ITC_BOLD = void 0;
    var i = n(180);
    e.FRANKLIN_ITC_BOLD = '\n\t@font-face {\n\t\tfont-family: "FranklinITCProBold";\n\t\tsrc: url("' + i.VARS.PLAYER_ROOT + '/fonts/Franklin-ITC-Pro-Bold/e9e4c4dc-e548-4fef-9aa1-80c9cd0f02ce-2.eot");\n\t\tsrc: url("' + i.VARS.PLAYER_ROOT + '/fonts/Franklin-ITC-Pro-Bold/e9e4c4dc-e548-4fef-9aa1-80c9cd0f02ce-2.eot?") format("embedded-opentype"),\n\t\t\turl("' + i.VARS.PLAYER_ROOT + '/fonts/Franklin-ITC-Pro-Bold/e9e4c4dc-e548-4fef-9aa1-80c9cd0f02ce-3.woff") format("woff"),\n\t\t\turl("' + i.VARS.PLAYER_ROOT + '/fonts/Franklin-ITC-Pro-Bold/e9e4c4dc-e548-4fef-9aa1-80c9cd0f02ce-1.ttf") format("truetype"),\n\t\t\turl("' + i.VARS.PLAYER_ROOT + '/fonts/Franklin-ITC-Pro-Bold/e9e4c4dc-e548-4fef-9aa1-80c9cd0f02ce-4.svg#web") format("svg");\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t}\n\t.franklin-bold {\n\t\tfont-family: "FranklinITCProBold", "Helvetica Neue Bold", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;\n\t}', e.FRANKLIN_ITC_LIGHT = '\n\t@font-face {\n\t\tfont-family: "FranklinITCProLight";\n\t\tsrc: url("' + i.VARS.PLAYER_ROOT + '/fonts/Franklin-ITC-Pro-Light/b147bee6-eb48-46e1-86e1-2538a46794b6-2.eot");\n\t\tsrc: url("' + i.VARS.PLAYER_ROOT + '/fonts/Franklin-ITC-Pro-Light/b147bee6-eb48-46e1-86e1-2538a46794b6-2.eot?") format("embedded-opentype"),\n\t\t\turl("' + i.VARS.PLAYER_ROOT + '/fonts/Franklin-ITC-Pro-Light/b147bee6-eb48-46e1-86e1-2538a46794b6-3.woff") format("woff"),\n\t\t\turl("' + i.VARS.PLAYER_ROOT + '/fonts/Franklin-ITC-Pro-Light/b147bee6-eb48-46e1-86e1-2538a46794b6-1.ttf") format("truetype"),\n\t\t\turl("' + i.VARS.PLAYER_ROOT + '/fonts/Franklin-ITC-Pro-Light/b147bee6-eb48-46e1-86e1-2538a46794b6-4.svg#web") format("svg");\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t}\n\t.franklin-light {\n\t\tfont-family: "FranklinITCProLight", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;\n\t}'
}, function(t, e) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        i = i || {};
    window.ns_ = window.ns_ || i;
    try {
        window.localStorage
    } catch (t) {
        var o
    }
    var i = i || {};
    i.PlatformAPIs = i.PlatformAPIs || {
        Standard: 0,
        Trilithium: 1,
        AppleTV: 2,
        Chromecast: 3
    }, i.Utils = i.Utils || function() {
        return {
            uid: function() {
                var t = 1;
                return function() {
                    return +new Date + "_" + t++
                }
            }(),
            filter: function(t, e) {
                var n = {};
                for (var i in e) e.hasOwnProperty(i) && t(e[i]) && (n[i] = e[i]);
                return n
            },
            extend: function(t) {
                var e, n = arguments.length;
                t = t || {};
                for (var i = 1; i < n; i++)
                    if (e = arguments[i])
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                return t
            },
            getString: function(t, e) {
                var n = String(t);
                return null == t ? e || "na" : n
            },
            getLong: function(t, e) {
                var n = Number(t);
                return null == t || isNaN(n) ? e || 0 : n
            },
            getInteger: function(t, e) {
                var n = Number(t);
                return null == t || isNaN(n) ? e || 0 : n
            },
            getBoolean: function(t, e) {
                var n = "true" == String(t).toLowerCase();
                return null == t ? e || !1 : n
            },
            isNotEmpty: function(t) {
                return "undefined" != typeof t && null != t && "undefined" != typeof t.length && t.length > 0
            },
            indexOf: function(t, e) {
                var n = -1;
                return this.forEach(e, function(e, i) {
                    e == t && (n = i)
                }), n
            },
            forEach: function(t, e, n) {
                try {
                    if ("function" == typeof e)
                        if (n = "undefined" != typeof n ? n : null, "number" != typeof t.length || "undefined" == typeof t[0]) {
                            var i = "undefined" != typeof t.__proto__;
                            for (var o in t) t.hasOwnProperty(o) && (!i || i && "undefined" == typeof t.__proto__[o]) && "function" != typeof t[o] && e.call(n, t[o], o)
                        } else
                            for (var a = 0, r = t.length; a < r; a++) e.call(n, t[a], a)
                } catch (t) {}
            },
            regionMatches: function(t, e, n, i, o) {
                if (e < 0 || i < 0 || e + o > t.length || i + o > n.length) return !1;
                for (; --o >= 0;) {
                    var a = t.charAt(e++),
                        r = n.charAt(i++);
                    if (a != r) return !1
                }
                return !0
            },
            size: function(t) {
                var e = 0;
                for (var n in t) t.hasOwnProperty(n) && e++;
                return e
            },
            log: function(t, e) {
                if ("undefined" != typeof e && e && "undefined" != typeof console && console) {
                    var n = new Date,
                        i = n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds();
                    console.log(i, t)
                }
            },
            isTrue: function(t) {
                return "undefined" != typeof t && ("string" == typeof t ? (t = t.toLowerCase(), "true" === t || "1" === t || "on" === t) : !!t)
            },
            toString: function(t) {
                if ("undefined" == typeof t) return "undefined";
                if ("string" == typeof t) return t;
                if ("[object Array]" === Object.prototype.toString.call(t)) return t.join(",");
                if (this.size(t) > 0) {
                    var e = "";
                    for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
                    return e
                }
                return t.toString()
            },
            exists: function(t) {
                return "undefined" != typeof t && null != t
            },
            firstGreaterThan0: function() {
                for (var t = 0, e = arguments.length; t < e; t++) {
                    var n = arguments[t];
                    if (n > 0) return n
                }
                return 0
            },
            cloneObject: function(t) {
                if (null == t || "object" != ("undefined" == typeof t ? "undefined" : n(t))) return t;
                var e = function() {
                    function t() {}

                    function e(e) {
                        return "object" == ("undefined" == typeof e ? "undefined" : n(e)) ? (t.prototype = e, new t) : e
                    }

                    function i(t) {
                        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e])
                    }

                    function o() {
                        this.copiedObjects = [];
                        var t = this;
                        this.recursiveDeepCopy = function(e) {
                            return t.deepCopy(e)
                        }, this.depth = 0
                    }

                    function a(t, e) {
                        var n = new o;
                        return e && (n.maxDepth = e), n.deepCopy(t)
                    }

                    function r(t) {
                        return "undefined" != typeof window && window && window.Node ? t instanceof Node : t === document || "number" == typeof t.nodeType && t.attributes && t.childNodes && t.cloneNode
                    }
                    var s = [];
                    return i.prototype = {
                        constructor: i,
                        canCopy: function() {
                            return !1
                        },
                        create: function(t) {},
                        populate: function(t, e, n) {}
                    }, o.prototype = {
                        constructor: o,
                        maxDepth: 256,
                        cacheResult: function(t, e) {
                            this.copiedObjects.push([t, e])
                        },
                        getCachedResult: function(t) {
                            for (var e = this.copiedObjects, n = e.length, i = 0; i < n; i++)
                                if (e[i][0] === t) return e[i][1]
                        },
                        deepCopy: function(t) {
                            if (null === t) return null;
                            if ("object" != ("undefined" == typeof t ? "undefined" : n(t))) return t;
                            var e = this.getCachedResult(t);
                            if (e) return e;
                            for (var i = 0; i < s.length; i++) {
                                var o = s[i];
                                if (o.canCopy(t)) return this.applyDeepCopier(o, t)
                            }
                            throw new Error("Unable to clone the following object " + t)
                        },
                        applyDeepCopier: function(t, e) {
                            var n = t.create(e);
                            if (this.cacheResult(e, n), this.depth++, this.depth > this.maxDepth) throw new Error("Maximum recursion depth exceeded.");
                            return t.populate(this.recursiveDeepCopy, e, n), this.depth--, n
                        }
                    }, a.DeepCopier = i, a.deepCopiers = s, a.register = function(t) {
                        t instanceof i || (t = new i(t)), s.unshift(t)
                    }, a.register({
                        canCopy: function() {
                            return !0
                        },
                        create: function(t) {
                            return t instanceof t.constructor ? e(t.constructor.prototype) : {}
                        },
                        populate: function(t, e, n) {
                            for (var i in e) e.hasOwnProperty(i) && (n[i] = t(e[i]));
                            return n
                        }
                    }), a.register({
                        canCopy: function(t) {
                            return t instanceof Array
                        },
                        create: function(t) {
                            return new t.constructor
                        },
                        populate: function(t, e, n) {
                            for (var i = 0; i < e.length; i++) n.push(t(e[i]));
                            return n
                        }
                    }), a.register({
                        canCopy: function(t) {
                            return t instanceof Date
                        },
                        create: function(t) {
                            return new Date(t)
                        }
                    }), a.register({
                        canCopy: function(t) {
                            return r(t)
                        },
                        create: function(t) {
                            return t === document ? document : t.cloneNode(!1)
                        },
                        populate: function(t, e, n) {
                            if (e === document) return document;
                            if (e.childNodes && e.childNodes.length)
                                for (var i = 0; i < e.childNodes.length; i++) {
                                    var o = t(e.childNodes[i]);
                                    n.appendChild(o)
                                }
                        }
                    }), {
                        deepCopy: a
                    }
                }();
                return e.deepCopy(t)
            },
            safeGet: function(t, e) {
                return e = this.exists(e) ? e : "", this.exists(t) ? t : e
            },
            getBrowserName: function() {
                if ("undefined" == typeof navigator || !navigator.hasOwnProperty("userAgent") || !navigator.hasOwnProperty("appName")) return "";
                var t, e, n = navigator.userAgent,
                    i = navigator.appName;
                return (e = n.indexOf("Opera")) != -1 || (e = n.indexOf("OPR/")) != -1 ? i = "Opera" : (e = n.indexOf("Android")) != -1 ? i = "Android" : (e = n.indexOf("Chrome")) != -1 ? i = "Chrome" : (e = n.indexOf("Safari")) != -1 ? i = "Safari" : (e = n.indexOf("Firefox")) != -1 ? i = "Firefox" : (e = n.indexOf("IEMobile")) != -1 ? i = "Internet Explorer Mobile" : "Microsoft Internet Explorer" == i || "Netscape" == i ? i = "Internet Explorer" : (t = n.lastIndexOf(" ") + 1) < (e = n.lastIndexOf("/")) && (i = n.substring(t, e), i.toLowerCase() == i.toUpperCase() && (i = navigator.appName)), i
            },
            getBrowserFullVersion: function() {
                if ("undefined" == typeof navigator || !navigator.hasOwnProperty("userAgent") || !navigator.hasOwnProperty("appName") || !navigator.hasOwnProperty("appVersion")) return "";
                var t, e, n, i, o = navigator.userAgent,
                    a = navigator.appName,
                    r = "" + parseFloat(navigator.appVersion);
                return (e = o.indexOf("Opera")) != -1 ? (r = o.substring(e + 6), (e = o.indexOf("Version")) != -1 && (r = o.substring(e + 8))) : (e = o.indexOf("OPR/")) != -1 ? r = o.substring(e + 4) : (e = o.indexOf("Android")) != -1 ? r = o.substring(e + 11) : (e = o.indexOf("Chrome")) != -1 ? r = o.substring(e + 7) : (e = o.indexOf("Safari")) != -1 ? (r = o.substring(e + 7), (e = o.indexOf("Version")) != -1 && (r = o.substring(e + 8))) : (e = o.indexOf("Firefox")) != -1 ? r = o.substring(e + 8) : "Microsoft Internet Explorer" == a ? (i = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"), null != i.exec(o) && (r = parseFloat(RegExp.$1))) : "Netscape" == a ? (i = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), null != i.exec(o) && (r = parseFloat(RegExp.$1))) : o.lastIndexOf(" ") + 1 < (e = o.lastIndexOf("/")) && (r = o.substring(e + 1)), r = r.toString(), (n = r.indexOf(";")) != -1 && (r = r.substring(0, n)), (n = r.indexOf(" ")) != -1 && (r = r.substring(0, n)), (n = r.indexOf(")")) != -1 && (r = r.substring(0, n)), t = parseInt("" + r, 10), isNaN(t) && (r = "" + parseFloat(navigator.appVersion)), r
            },
            browserAcceptsLargeURLs: function() {
                return "undefined" == typeof window || (null === window.ActiveXObject || !0)
            }
        }
    }(), i.StreamSense = i.StreamSense || function() {
        function t(t, e) {
            var i = t || "",
                o = "undefined",
                r = b.comScore || b.sitestat || function(t) {
                    var e, i, r, s, l, u = "comScore=",
                        c = _.cookie,
                        d = "",
                        p = "indexOf",
                        f = "substring",
                        h = "length",
                        g = a.browserAcceptsLargeURLs() ? T.URL_LENGTH_LIMIT : T.RESTRICTED_URL_LENGTH_LIMIT,
                        v = "&ns_",
                        w = "&",
                        y = b.encodeURIComponent || escape;
                    if (c[p](u) + 1)
                        for (s = 0, r = c.split(";"), l = r[h]; s < l; s++) i = r[s][p](u), i + 1 && (d = w + unescape(r[s][f](i + u[h])));
                    t += v + "_t=" + +new Date + v + "c=" + (_.characterSet || _.defaultCharset || "") + d, t.length > g && t.indexOf(w) > 0 && (e = t.substr(0, g - 8).lastIndexOf(w), t = (t.substring(0, e) + v + "cut=" + y(t.substring(e + 1))).substr(0, g)), m.httpGet(t), ("undefined" == typeof ns_p ? "undefined" : n(ns_p)) === o && (ns_p = {
                        src: t
                    }), ns_p.lastMeasurement = t
                };
            if (("undefined" == typeof e ? "undefined" : n(e)) !== o) {
                var s = [],
                    l = b.encodeURIComponent || escape;
                for (var u in e) e.hasOwnProperty(u) && s.push(l(u) + "=" + l(e[u]));
                /[\?\&]$/.test(i) || (i += "&"), i += s.join("&")
            }
            return r(i)
        }

        function e(t, e) {
            for (var n, i = b.encodeURIComponent || escape, o = [], r = T.LABELS_ORDER, s = t.split("?"), l = s[0], u = s[1], c = u.split("&"), d = 0, p = c.length; d < p; d++) {
                var f = c[d].split("="),
                    h = unescape(f[0]),
                    g = unescape(f[1]);
                h && (e[h] = g)
            }
            for (var m = {}, v = 0, w = r.length; v < w; v++) {
                var y = r[v];
                if (e.hasOwnProperty(y)) {
                    var A = e[y];
                    "undefined" != typeof A && null != A && (m[y] = !0, o.push(i(y) + "=" + i(e[y])))
                }
            }
            for (var S in e)
                if (e.hasOwnProperty(S)) {
                    if (m[S]) continue;
                    var E = e[S];
                    "undefined" != typeof E && null != E && o.push(i(S) + "=" + i(e[S]))
                } n = l + "?" + o.join("&"), n = n + (n.indexOf("&c8=") < 0 ? "&c8=" + i(_.title) : "") + (n.indexOf("&c7=") < 0 ? "&c7=" + i(_.URL) : "") + (n.indexOf("&c9=") < 0 ? "&c9=" + i(_.referrer) : "");
            var k = a.browserAcceptsLargeURLs() ? T.URL_LENGTH_LIMIT : T.RESTRICTED_URL_LENGTH_LIMIT;
            if (n.length > k && n.indexOf("&") > 0) {
                var P = n.substr(0, k - 8).lastIndexOf("&");
                n = (n.substring(0, P) + "&ns_cut=" + i(n.substring(P + 1))).substr(0, k)
            }
            return n
        }
        var a = i.Utils,
            r = function() {
                var t = "cs_";
                return function() {
                    var e = "undefined" != typeof o ? o : {};
                    a.extend(this, {
                        get: function(n) {
                            return e[t + n]
                        },
                        set: function(n, i) {
                            e[t + n] = i
                        },
                        has: function(n) {
                            return t + n in e
                        },
                        remove: function(n) {
                            delete e[t + n]
                        },
                        clear: function() {
                            for (var t in e) e.hasOwnProperty(t) && delete e[t]
                        }
                    })
                }
            }(),
            s = function() {
                var t = "cs_",
                    e = function() {
                        var e = "undefined" != typeof atv && "undefined" != typeof atv.localStorage && atv.localStorage || null;
                        a.extend(this, {
                            get: function(n) {
                                return e && n && e.getItem(t + n) || null
                            },
                            set: function(n, i) {
                                e && n && (e[t + n] = i)
                            },
                            has: function(n) {
                                return e && n && null != e.getItem(t + n) || !1
                            },
                            remove: function(n) {
                                e && n && e.removeItem(t + n)
                            },
                            clear: function() {}
                        })
                    };
                return e
            }(),
            l = function(t, e) {
                if ("undefined" != typeof Image) {
                    var n = new Image;
                    n.onload = function() {
                        e && e(200), n = null
                    }, n.onerror = function() {
                        e && e(), n = null
                    }, n.src = t
                }
            },
            u = function(t, e, n) {
                "undefined" != typeof XMLHttpRequest && n && "undefined" != typeof setTimeout && setTimeout(n, 0);
                var i = new XMLHttpRequest;
                i.open("POST", t, !0), i.onreadystatechange = function() {
                    4 === i.readyState && (n && n(i.status), i = null)
                }, i.send(e)
            },
            c = function(t, e, n) {
                n && "undefined" != typeof setTimeout && setTimeout(n, 0)
            },
            d = function() {
                function t(t) {
                    var e = u + t;
                    p[e] = "", f[e] = []
                }

                function e(t, e) {
                    var n = u + t;
                    p[n] += h + s(e), f[n].push(e)
                }

                function n(t, e) {
                    var n = u + t,
                        i = f[n];
                    i.splice(a.indexOf(e, i), 1);
                    for (var o = [], r = 0, l = i.length; r < l; r++) o.push(s(i[r]));
                    p[n] = o.join(h), delete p[c + t + e]
                }

                function i(t, e, n) {
                    p[c + t + e] = n
                }

                function r(t, e) {
                    return p[c + t + e]
                }
                var s = "undefined" != typeof encodeURIComponent ? encodeURIComponent : escape,
                    l = "undefined" != typeof decodeURIComponent ? decodeURIComponent : unescape,
                    u = "cs_dir_",
                    c = "cs_file_",
                    p = "undefined" != typeof o ? o : {},
                    f = {},
                    h = "|";
                return {
                    dir: function(t) {
                        var e = u + t,
                            n = f[e];
                        if (n) return n.slice();
                        var i = p[e];
                        if (i) {
                            i = i.split(h), n = [];
                            for (var o = 0, a = i.length; o < a; o++) i[o].length > 0 && n.push(l(i[o]));
                            return f[e] = n, n.slice()
                        }
                        return null
                    },
                    append: function(t, e, n) {
                        var i = d.read(t, e);
                        i ? i += n : i = n, d.write(t, e, i)
                    },
                    write: function(n, o, r) {
                        var s = d.dir(n);
                        s || (t(n), s = []), a.indexOf(o, s) == -1 && e(n, o), i(n, o, r)
                    },
                    deleteFile: function(t, e) {
                        var i = d.dir(t);
                        return !!i && (a.indexOf(e, i) != -1 && (n(t, e), !0))
                    },
                    read: function(t, e) {
                        var n = d.dir(t);
                        return n ? a.indexOf(e, n) == -1 ? null : r(t, e) : null
                    }
                }
            }(),
            p = function() {
                return {
                    dir: function() {
                        return null
                    },
                    append: function(t, e, n) {},
                    write: function(t, e, n) {},
                    deleteFile: function() {
                        return !1
                    },
                    read: function() {
                        return null
                    }
                }
            }(),
            f = function(t, e) {
                "undefined" != typeof engine && e && "undefined" != typeof setTimeout && setTimeout(e, 0);
                var n = engine.createHttpClient(),
                    i = n.createRequest("GET", t, null);
                i.start(), e && setTimeout(e, 0)
            },
            h = function(t, e) {
                if ("undefined" != typeof atv && "function" == typeof atv.setTimeout) {
                    "undefined" != typeof XMLHttpRequest && e && atv.setTimeout(e, 0);
                    var n = new XMLHttpRequest;
                    n.open("GET", t, !0), n.onreadystatechange = function() {
                        4 === n.readyState && (e && e(n.status), n = null)
                    }, n.send()
                }
            },
            g = function(t, e, n) {
                if ("undefined" != typeof atv && "function" == typeof atv.setTimeout) {
                    "undefined" != typeof XMLHttpRequest && n && atv.setTimeout(n, 0);
                    var i = new XMLHttpRequest;
                    i.open("POST", t, !0), i.onreadystatechange = function() {
                        4 === i.readyState && (n && n(i.status), i = null)
                    }, i.send(e)
                }
            },
            m = function() {
                return {
                    PLATFORM: "generic",
                    httpGet: l,
                    httpPost: c,
                    Storage: r,
                    IO: p,
                    getCrossPublisherId: function() {
                        return null
                    },
                    getAppName: function() {
                        return Constants.UNKNOWN_VALUE
                    },
                    getAppVersion: function() {
                        return Constants.UNKNOWN_VALUE
                    },
                    getVisitorId: function() {
                        return this.getDeviceName() + +new Date + ~~(1e3 * Math.random())
                    },
                    getVisitorIdSuffix: function() {
                        return "72"
                    },
                    getDeviceName: function() {
                        return ""
                    },
                    getPlatformVersion: function() {
                        return ""
                    },
                    getPlatformName: function() {
                        return "js"
                    },
                    getRuntimeName: function() {
                        return ""
                    },
                    getRuntimeVersion: function() {
                        return ""
                    },
                    getResolution: function() {
                        return ""
                    },
                    getLanguage: function() {
                        return ""
                    },
                    getPackageName: function() {
                        return ""
                    },
                    isConnectionAvailable: function() {
                        return !0
                    },
                    isCompatible: function() {
                        return !0
                    },
                    autoSelect: function() {},
                    setPlatformAPI: function() {},
                    isCrossPublisherIdChanged: function() {
                        return !1
                    },
                    setTimeout: function(t) {
                        function e(e, n, i) {
                            return t.apply(this, arguments)
                        }
                        return e.toString = function() {
                            return t.toString()
                        }, e
                    }(function(t, e, n) {
                        return setTimeout(t, e, n)
                    }),
                    clearTimeout: function(t) {
                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e.toString = function() {
                            return t.toString()
                        }, e
                    }(function(t) {
                        return clearTimeout(t)
                    }),
                    getDeviceArchitecture: function() {
                        return Constants.UNKNOWN_VALUE
                    },
                    getConnectionType: function() {
                        return Constants.UNKNOWN_VALUE
                    },
                    getDeviceJailBrokenFlag: function() {
                        return Constants.UNKNOWN_VALUE
                    }
                }
            }(),
            v = function() {
                function t() {
                    return "undefined" != typeof engine && "undefined" != typeof engine.stats
                }

                function e() {
                    return a.isNotEmpty(engine.stats.device.id) ? engine.stats.device.id : a.isNotEmpty(engine.stats.network.mac) ? engine.stats.network.mac : null
                }

                function n() {
                    if (null == i) {
                        var t = e();
                        null != t ? (i = t, o = "31", s = t) : (i = +new Date + ~~(1e3 * Math.random()), o = "72", s = null)
                    }
                }
                var i = null,
                    o = null,
                    s = null;
                return {
                    PLATFORM: "trilithium",
                    httpGet: f,
                    httpPost: c,
                    Storage: r,
                    IO: p,
                    getCrossPublisherId: function() {
                        return n(), s
                    },
                    getAppName: function() {
                        return a.isNotEmpty(engine.stats.application.name) ? engine.stats.application.name : Constants.UNKNOWN_VALUE
                    },
                    getAppVersion: function() {
                        return a.isNotEmpty(engine.stats.application.version) ? engine.stats.application.version : Constants.UNKNOWN_VALUE
                    },
                    getVisitorId: function() {
                        return n(), i
                    },
                    getVisitorIdSuffix: function() {
                        return o
                    },
                    getDeviceName: function() {
                        return a.safeGet(engine.stats.device.platform, "")
                    },
                    getPlatformVersion: function() {
                        return a.safeGet(engine.stats.device.version, "")
                    },
                    getPlatformName: function() {
                        return "js"
                    },
                    getRuntimeName: function() {
                        return "trilithium"
                    },
                    getRuntimeVersion: function() {
                        return ""
                    },
                    getResolution: function() {
                        return "undefined" != typeof screen && "undefined" != typeof screen.height && "undefined" != typeof screen.width ? screen.height + "x" + screen.width : ""
                    },
                    getLanguage: function() {
                        return ""
                    },
                    getPackageName: function() {
                        return ""
                    },
                    isConnectionAvailable: function() {
                        return !0
                    },
                    isCompatible: t
                }
            }(),
            w = function() {
                function t() {
                    return "undefined" == typeof window && "undefined" != typeof atv
                }

                function e() {
                    null == n && ("undefined" != typeof atv && "undefined" != typeof atv.device && atv.device.idForVendor ? (n = a.safeGet(atv.device.idForVendor, ""), i = "62") : (n = +new Date + ~~(1e3 * Math.random()), i = "72"), o = null)
                }
                var n = null,
                    i = null,
                    o = null;
                return {
                    PLATFORM: "atv",
                    httpGet: h,
                    httpPost: g,
                    Storage: s,
                    IO: p,
                    getCrossPublisherId: function() {
                        return e(), o
                    },
                    getAppName: function() {
                        return Constants.UNKNOWN_VALUE
                    },
                    getAppVersion: function() {
                        return Constants.UNKNOWN_VALUE
                    },
                    getVisitorId: function() {
                        return e(), n
                    },
                    getVisitorIdSuffix: function() {
                        return i
                    },
                    getDeviceName: function() {
                        return "Apple TV"
                    },
                    getPlatformVersion: function() {
                        return "undefined" != typeof atv && "undefined" != typeof atv.device && a.safeGet(atv.device.softwareVersion, "")
                    },
                    getPlatformName: function() {
                        return "js"
                    },
                    getRuntimeName: function() {
                        return "atv"
                    },
                    getRuntimeVersion: function() {
                        return "undefined" != typeof atv && "undefined" != typeof atv.device && a.safeGet(atv.device.softwareVersion, "")
                    },
                    getResolution: function() {
                        return "undefined" != typeof atv.device && "undefined" != typeof atv.device.screenFrame && "undefined" != typeof atv.device.screenFrame.height && "undefined" != typeof atv.device.screenFrame.width ? atv.device.screenFrame.height + "x" + atv.device.screenFrame.width : ""
                    },
                    getLanguage: function() {
                        return "undefined" != typeof atv && "undefined" != typeof atv.device && a.safeGet(atv.device.language, "")
                    },
                    getPackageName: function() {
                        return ""
                    },
                    isConnectionAvailable: function() {
                        return !0
                    },
                    setTimeout: function(t, e, n) {
                        return "undefined" != typeof atv && "undefined" != typeof atv.setTimeout && atv.setTimeout(t, e, n)
                    },
                    clearTimeout: function(t) {
                        return "undefined" != typeof atv && "undefined" != typeof atv.clearTimeout && atv.clearTimeout(t)
                    },
                    isCompatible: t
                }
            }(),
            y = function() {
                function t() {
                    return "undefined" != typeof window && "undefined" != typeof document
                }
                return {
                    PLATFORM: "chromecast",
                    httpGet: l,
                    httpPost: u,
                    Storage: r,
                    IO: d,
                    getCrossPublisherId: function() {
                        return null
                    },
                    getAppName: function() {
                        return "undefined" != typeof document && document.title || Constants.UNKNOWN_VALUE
                    },
                    getAppVersion: function() {
                        return Constants.UNKNOWN_VALUE
                    },
                    getVisitorId: function() {
                        return +new Date + ~~(1e3 * Math.random())
                    },
                    getVisitorIdSuffix: function() {
                        return "72"
                    },
                    getDeviceName: function() {
                        return "chromecast"
                    },
                    getPlatformVersion: function() {
                        return "5"
                    },
                    getPlatformName: function() {
                        return "js"
                    },
                    getRuntimeName: function() {
                        return "html"
                    },
                    getRuntimeVersion: function() {
                        return a.safeGet(a.getBrowserName() + " " + a.getBrowserFullVersion(), Constants.UNKNOWN_VALUE)
                    },
                    getResolution: function() {
                        var t = "undefined" != typeof window && a.exists(window.screen) && a.exists(window.screen.availWidth) ? window.screen.availWidth : 0,
                            e = "undefined" != typeof window && a.exists(window.screen) && a.exists(window.screen.availHeight) ? window.screen.availHeight : 0;
                        return t > 0 && e > 0 ? t + "x" + e : ""
                    },
                    getLanguage: function() {
                        return "undefined" != typeof window && a.exists(window.navigator) && a.safeGet(window.navigator.language, "") || ""
                    },
                    getPackageName: function() {
                        return "undefined" != typeof castReceiverManager && castReceiverManager.getApplicationData && "function" == typeof castReceiverManager.getApplicationData && castReceiverManager.getApplicationData().namespaces && castReceiverManager.getApplicationData().namespaces[0] || ""
                    },
                    isConnectionAvailable: function() {
                        return "undefined" != typeof window && a.exists(window.navigator) && a.safeGet(window.navigator.onLine, !0) || !0
                    },
                    isCompatible: t,
                    getConnectionType: function() {
                        return Constants.UNKNOWN_VALUE
                    }
                }
            }();
        m.autoSelect = function() {
            v.isCompatible() ? i.Utils.extend(m, v) : w.isCompatible() && i.Utils.extend(m, w)
        }, m.setPlatformAPI = function(t) {
            var e = !1;
            switch (t) {
                case i.PlatformAPIs.Trilithium:
                    i.Utils.extend(m, v), e = !0;
                    break;
                case i.PlatformAPIs.AppleTV:
                    i.Utils.extend(m, w), e = !0;
                    break;
                case i.PlatformAPIs.Chromecast:
                    a.extend(m, y), e = !0
            }
            e && (m.autoSelect = function() {})
        };
        var b, _, A = "undefined" != typeof window && "undefined" != typeof document;
        A ? (b = window, _ = document) : (b = {}, _ = {
            location: {
                href: ""
            },
            title: "",
            URL: "",
            referrer: "",
            cookie: ""
        });
        var a = a || {};
        a.filterMap = function(t, e) {
            for (var n in t) t.hasOwnProperty(n) && a.indexOf(n, e) == -1 && delete t[n]
        }, a.getKeys = function(t, e) {
            var n, i = [];
            for (n in t)(!e || e.test(n)) && t.hasOwnProperty(n) && (i[i.length] = n);
            return i
        };
        var S = function() {
                var t = ["play", "pause", "end", "buffer", "keep-alive", "hb", "custom", "ad_play", "ad_pause", "ad_end", "ad_click"];
                return {
                    PLAY: 0,
                    PAUSE: 1,
                    END: 2,
                    BUFFER: 3,
                    KEEP_ALIVE: 4,
                    HEART_BEAT: 5,
                    CUSTOM: 6,
                    AD_PLAY: 7,
                    AD_PAUSE: 8,
                    AD_END: 9,
                    AD_CLICK: 10,
                    toString: function(e) {
                        return t[e]
                    }
                }
            }(),
            E = function() {
                var t = [S.END, S.PLAY, S.PAUSE, S.BUFFER];
                return {
                    IDLE: 0,
                    PLAYING: 1,
                    PAUSED: 2,
                    BUFFERING: 3,
                    toEventType: function(e) {
                        return t[e]
                    }
                }
            }(),
            k = {
                ADPLAY: S.AD_PLAY,
                ADPAUSE: S.AD_PAUSE,
                ADEND: S.AD_END,
                ADCLICK: S.AD_CLICK
            },
            T = {
                STREAMSENSE_VERSION: "4.1505.18",
                DEFAULT_PLAYERNAME: "streamsense",
                DEFAULT_HEARTBEAT_INTERVAL: [{
                    playingtime: 6e4,
                    interval: 1e4
                }, {
                    playingtime: null,
                    interval: 6e4
                }],
                DEFAULT_KEEP_ALIVE_INTERVAL: 12e5,
                DEFAULT_PAUSED_ON_BUFFERING_INTERVAL: 500,
                C1_VALUE: "19",
                C10_VALUE: "js",
                NS_AP_C12M_VALUE: "1",
                NS_NC_VALUE: "1",
                PAGE_NAME_LABEL: "name",
                RESTRICTED_URL_LENGTH_LIMIT: 2048,
                URL_LENGTH_LIMIT: 4096,
                LABELS_ORDER: ["c1", "c2", "ca2", "cb2", "cc2", "cd2", "ns_site", "ca_ns_site", "cb_ns_site", "cc_ns_site", "cd_ns_site", "ns_vsite", "ca_ns_vsite", "cb_ns_vsite", "cc_ns_vsite", "cd_ns_vsite", "ns_ap_an", "ca_ns_ap_an", "cb_ns_ap_an", "cc_ns_ap_an", "cd_ns_ap_an", "ns_ap_pn", "ns_ap_pv", "c12", "ca12", "cb12", "cc12", "cd12", "ns_ak", "ns_ap_hw", "name", "ns_ap_ni", "ns_ap_ec", "ns_ap_ev", "ns_ap_device", "ns_ap_id", "ns_ap_csf", "ns_ap_bi", "ns_ap_pfm", "ns_ap_pfv", "ns_ap_ver", "ca_ns_ap_ver", "cb_ns_ap_ver", "cc_ns_ap_ver", "cd_ns_ap_ver", "ns_ap_sv", "ns_ap_cv", "ns_type", "ca_ns_type", "cb_ns_type", "cc_ns_type", "cd_ns_type", "ns_radio", "ns_nc", "ns_ap_ui", "ca_ns_ap_ui", "cb_ns_ap_ui", "cc_ns_ap_ui", "cd_ns_ap_ui", "ns_ap_gs", "ns_st_sv", "ns_st_pv", "ns_st_it", "ns_st_id", "ns_st_ec", "ns_st_sp", "ns_st_sq", "ns_st_cn", "ns_st_ev", "ns_st_po", "ns_st_cl", "ns_st_el", "ns_st_pb", "ns_st_hc", "ns_st_mp", "ca_ns_st_mp", "cb_ns_st_mp", "cc_ns_st_mp", "cd_ns_st_mp", "ns_st_mv", "ca_ns_st_mv", "cb_ns_st_mv", "cc_ns_st_mv", "cd_ns_st_mv", "ns_st_pn", "ns_st_tp", "ns_st_pt", "ns_st_pa", "ns_st_ad", "ns_st_li", "ns_st_ci", "ns_ap_jb", "ns_ap_res", "ns_ap_sd", "ns_ap_po", "ns_ap_ot", "ns_ap_c12m", "cs_c12u", "ns_ap_install", "ns_ap_updated", "ns_ap_lastrun", "ns_ap_cs", "ns_ap_runs", "ns_ap_usage", "ns_ap_fg", "ns_ap_ft", "ns_ap_dft", "ns_ap_bt", "ns_ap_dbt", "ns_ap_dit", "ns_ap_as", "ns_ap_das", "ns_ap_it", "ns_ap_uc", "ns_ap_aus", "ns_ap_daus", "ns_ap_us", "ns_ap_dus", "ns_ap_ut", "ns_ap_oc", "ns_ap_uxc", "ns_ap_uxs", "ns_ap_lang", "ns_ap_ar", "ns_ap_miss", "ns_ts", "ns_st_ca", "ns_st_cp", "ns_st_er", "ca_ns_st_er", "cb_ns_st_er", "cc_ns_st_er", "cd_ns_st_er", "ns_st_pe", "ns_st_ui", "ca_ns_st_ui", "cb_ns_st_ui", "cc_ns_st_ui", "cd_ns_st_ui", "ns_st_bc", "ns_st_bt", "ns_st_bp", "ns_st_pc", "ns_st_pp", "ns_st_br", "ns_st_ub", "ns_st_vo", "ns_st_ws", "ns_st_pl", "ns_st_pr", "ns_st_ep", "ns_st_ty", "ns_st_ct", "ns_st_cs", "ns_st_ge", "ns_st_st", "ns_st_dt", "ns_st_de", "ns_st_pu", "ns_st_cu", "ns_st_fee", "ns_ap_i1", "ns_ap_i2", "ns_ap_i3", "ns_ap_i4", "ns_ap_i5", "ns_ap_i6", "ns_ap_referrer", "ns_clid", "ns_campaign", "ns_source", "ns_mchannel", "ns_linkname", "ns_fee", "gclid", "utm_campaign", "utm_source", "utm_medium", "utm_term", "utm_content", "c3", "ca3", "cb3", "cc3", "cd3", "c4", "ca4", "cb4", "cc4", "cd4", "c5", "ca5", "cb5", "cc5", "cd5", "c6", "ca6", "cb6", "cc6", "cd6", "c10", "c11", "c13", "c14", "c15", "c16", "c7", "c8", "c9", "ns_ap_er"]
            },
            P = function() {
                return function() {
                    function t(t, e) {
                        var i = e[t];
                        null != i && (n[t] = i)
                    }
                    var e, n, i = this,
                        o = 0,
                        r = 0,
                        s = 0,
                        l = 0,
                        u = 0,
                        c = 0;
                    a.extend(this, {
                        reset: function(t) {
                            null != t && t.length > 0 ? a.filterMap(n, t) : n = {}, n.hasOwnProperty("ns_st_cl") || (n.ns_st_cl = "0"), n.hasOwnProperty("ns_st_pn") || (n.ns_st_pn = "1"), n.hasOwnProperty("ns_st_tp") || (n.ns_st_tp = "1"), i.setPauses(0), i.setStarts(0), i.setBufferingTime(0), i.setBufferingTimestamp(-1), i.setPlaybackTime(0), i.setPlaybackTimestamp(-1)
                        },
                        setLabels: function(t, e) {
                            null != t && a.extend(n, t), i.setRegisters(n, e)
                        },
                        getLabels: function() {
                            return n
                        },
                        setLabel: function(t, e) {
                            var n = {};
                            n[t] = e, i.setLabels(n, null)
                        },
                        getLabel: function(t) {
                            return n[t]
                        },
                        getClipId: function() {
                            return ("undefined" == typeof e || null == e) && i.setClipId("1"), e
                        },
                        setClipId: function(t) {
                            e = t
                        },
                        setRegisters: function(e, n) {
                            var a = e.ns_st_cn;
                            null != a && (i.setClipId(a), delete e.ns_st_cn), a = e.ns_st_bt, null != a && (s = Number(a), delete e.ns_st_bt), t("ns_st_cl", e), t("ns_st_pn", e), t("ns_st_tp", e), t("ns_st_ub", e), t("ns_st_br", e), n != E.PLAYING && null != n || (a = e.ns_st_sq, null != a && (r = Number(a), delete e.ns_st_sq)), n != E.BUFFERING && (a = e.ns_st_pt, null != a && (u = Number(a), delete e.ns_st_pt)), n != E.PAUSED && n != E.IDLE && null != n || (a = e.ns_st_pc, null != a && (o = Number(a), delete e.ns_st_pc))
                        },
                        createLabels: function(t, e) {
                            var n = e || {};
                            return n.ns_st_cn = i.getClipId(), n.ns_st_bt = String(i.getBufferingTime()), t != S.PLAY && null != t || (n.ns_st_sq = String(r)), t != S.PAUSE && t != S.END && t != S.KEEP_ALIVE && t != S.HEART_BEAT && null != t || (n.ns_st_pt = String(i.getPlaybackTime()), n.ns_st_pc = String(o)), a.extend(n, i.getLabels()), n
                        },
                        incrementPauses: function() {
                            o++
                        },
                        incrementStarts: function() {
                            r++
                        },
                        getBufferingTime: function() {
                            var t = s;
                            return l >= 0 && (t += +new Date - l), t
                        },
                        setBufferingTime: function(t) {
                            s = t
                        },
                        getPlaybackTime: function() {
                            var t = u;
                            return c >= 0 && (t += +new Date - c), t
                        },
                        setPlaybackTime: function(t) {
                            u = t
                        },
                        getPlaybackTimestamp: function() {
                            return c
                        },
                        setPlaybackTimestamp: function(t) {
                            c = t
                        },
                        getBufferingTimestamp: function() {
                            return l
                        },
                        setBufferingTimestamp: function(t) {
                            l = t
                        },
                        getPauses: function() {
                            return o
                        },
                        setPauses: function(t) {
                            o = t
                        },
                        getStarts: function() {
                            return r
                        },
                        setStarts: function(t) {
                            r = t
                        }
                    }), n = {}, i.reset()
                }
            }(),
            x = function() {
                return function() {
                    var t, e, n = this,
                        i = null,
                        o = 0,
                        r = 0,
                        s = 0,
                        l = 0,
                        u = 0,
                        c = 0,
                        d = !1;
                    a.extend(this, {
                        reset: function(t) {
                            null != t && t.length > 0 ? a.filterMap(e, t) : e = {}, n.setPlaylistId(+new Date + "_" + c), n.setBufferingTime(0), n.setPlaybackTime(0), n.setPauses(0), n.setStarts(0), n.setRebufferCount(0), d = !1
                        },
                        setLabels: function(t, i) {
                            null != t && a.extend(e, t), n.setRegisters(e, i)
                        },
                        getLabels: function() {
                            return e
                        },
                        setLabel: function(t, e) {
                            var i = {};
                            i[t] = e, n.setLabels(i, null)
                        },
                        getLabel: function(t) {
                            return e[t]
                        },
                        getClip: function() {
                            return i
                        },
                        getPlaylistId: function() {
                            return t
                        },
                        setPlaylistId: function(e) {
                            t = e
                        },
                        setRegisters: function(e, n) {
                            var i = e.ns_st_sp;
                            null != i && (o = Number(i), delete e.ns_st_sp), i = e.ns_st_bc, null != i && (s = Number(i), delete e.ns_st_bc), i = e.ns_st_bp, null != i && (l = Number(i), delete e.ns_st_bp), i = e.ns_st_id, null != i && (t = i, delete e.ns_st_id), n != E.BUFFERING && (i = e.ns_st_pa, null != i && (u = Number(i), delete e.ns_st_pa)), n != E.PAUSED && n != E.IDLE && null != n || (i = e.ns_st_pp, null != i && (r = Number(i), delete e.ns_st_pp))
                        },
                        createLabels: function(e, i) {
                            var l = i || {};
                            return l.ns_st_bp = String(n.getBufferingTime()), l.ns_st_sp = String(o), l.ns_st_id = String(t), s > 0 && (l.ns_st_bc = String(s)), e != S.PAUSE && e != S.END && e != S.KEEP_ALIVE && e != S.HEART_BEAT && null != e || (l.ns_st_pa = String(n.getPlaybackTime()), l.ns_st_pp = String(r)), e != S.PLAY && null != e || n.didFirstPlayOccurred() || (l.ns_st_pb = "1", n.setFirstPlayOccurred(!0)), a.extend(l, n.getLabels()), l
                        },
                        incrementStarts: function() {
                            o++
                        },
                        incrementPauses: function() {
                            r++, i.incrementPauses()
                        },
                        setPlaylistCounter: function(t) {
                            c = t
                        },
                        incrementPlaylistCounter: function() {
                            c++
                        },
                        addPlaybackTime: function(t) {
                            if (i.getPlaybackTimestamp() >= 0) {
                                var e = t - i.getPlaybackTimestamp();
                                i.setPlaybackTimestamp(-1), i.setPlaybackTime(i.getPlaybackTime() + e), n.setPlaybackTime(n.getPlaybackTime() + e)
                            }
                        },
                        addBufferingTime: function(t) {
                            if (i.getBufferingTimestamp() >= 0) {
                                var e = t - i.getBufferingTimestamp();
                                i.setBufferingTimestamp(-1), i.setBufferingTime(i.getBufferingTime() + e), n.setBufferingTime(n.getBufferingTime() + e)
                            }
                        },
                        getBufferingTime: function() {
                            var t = l;
                            return i.getBufferingTimestamp() >= 0 && (t += +new Date - i.getBufferingTimestamp()), t
                        },
                        setBufferingTime: function(t) {
                            l = t
                        },
                        getPlaybackTime: function() {
                            var t = u;
                            return i.getPlaybackTimestamp() >= 0 && (t += +new Date - i.getPlaybackTimestamp()), t
                        },
                        setPlaybackTime: function(t) {
                            u = t
                        },
                        getStarts: function() {
                            return o
                        },
                        setStarts: function(t) {
                            o = t
                        },
                        getPauses: function() {
                            return r
                        },
                        setPauses: function(t) {
                            r = t
                        },
                        getRebufferCount: function() {
                            return s
                        },
                        incrementRebufferCount: function() {
                            s++
                        },
                        setRebufferCount: function(t) {
                            s = t
                        },
                        didFirstPlayOccurred: function() {
                            return d
                        },
                        setFirstPlayOccurred: function(t) {
                            d = t
                        }
                    }), i = new P, e = {}, n.reset()
                }
            }(),
            D = function() {
                var o = function(n, o, r) {
                    function s(t) {
                        var e = 0;
                        if (null != ft)
                            for (var n = 0; n < ft.length; n++) {
                                var i = ft[n],
                                    o = i.playingtime;
                                if (!o || t < o) {
                                    e = i.interval;
                                    break
                                }
                            }
                        return e
                    }

                    function l() {
                        p();
                        var t = s(dt.getClip().getPlaybackTime());
                        if (t > 0) {
                            var e = mt > 0 ? mt : t;
                            J = m.setTimeout(d, e)
                        }
                        mt = 0
                    }

                    function u() {
                        p();
                        var t = s(dt.getClip().getPlaybackTime());
                        mt = t - dt.getClip().getPlaybackTime() % t, null != J && p()
                    }

                    function c() {
                        mt = 0, wt = 0, vt = 0
                    }

                    function d() {
                        vt++;
                        var t = U(S.HEART_BEAT, null);
                        D(t), mt = 0, l()
                    }

                    function p() {
                        null != J && (m.clearTimeout(J), J = null)
                    }

                    function f() {
                        g(), X = m.setTimeout(h, ht)
                    }

                    function h() {
                        var t = U(S.KEEP_ALIVE, null);
                        D(t), ct++, f()
                    }

                    function g() {
                        null != X && (m.clearTimeout(X), X = null)
                    }

                    function v() {
                        y(), at.isPauseOnBufferingEnabled() && N(E.PAUSED) && (Z = m.setTimeout(w, gt))
                    }

                    function w() {
                        if (tt == E.PLAYING) {
                            dt.incrementRebufferCount(), dt.incrementPauses();
                            var t = U(S.PAUSE, null);
                            D(t), ct++, tt = E.PAUSED
                        }
                    }

                    function y() {
                        null != Z && (m.clearTimeout(Z), Z = null)
                    }

                    function b(t) {
                        return t == E.PLAYING || t == E.PAUSED
                    }

                    function _() {
                        Q && (m.clearTimeout(Q), Q = null)
                    }

                    function A(t) {
                        return t == S.PLAY ? E.PLAYING : t == S.PAUSE ? E.PAUSED : t == S.BUFFER ? E.BUFFERING : t == S.END ? E.IDLE : null
                    }

                    function k(t, e, n) {
                        if (_(), n) Q = m.setTimeout(function(t, e) {
                            return function() {
                                k(t, e)
                            }
                        }(t, e), n);
                        else if (j(t)) {
                            var i = V(),
                                o = lt,
                                r = R(e),
                                s = o >= 0 ? r - o : 0;
                            I(V(), e), M(t, e), B(V()), W(t);
                            for (var l = 0, u = ot.length; l < u; l++) ot[l](i, t, e, s);
                            P(e), dt.setRegisters(e, t), dt.getClip().setRegisters(e, t);
                            var c = U(E.toEventType(t), e);
                            a.extend(c, e), N(G) && (D(c), tt = G, ct++)
                        }
                    }

                    function P(t) {
                        var e = t.ns_st_mp;
                        null != e && (et = e, delete t.ns_st_mp), e = t.ns_st_mv, null != e && (nt = e, delete t.ns_st_mv), e = t.ns_st_ec, null != e && (ct = Number(e), delete t.ns_st_ec)
                    }

                    function D(t, n) {
                        void 0 === n && (n = !0), n && C(t);
                        var i = at.getPixelURL();
                        if (K) {
                            if (!O()) {
                                var o = bt.am,
                                    a = bt.et,
                                    r = o.newApplicationMeasurement(K, a.HIDDEN, t, i);
                                K.getQueue().offer(r)
                            }
                        } else i && m.httpGet(e(i, t))
                    }

                    function O() {
                        var t = K.getAppContext(),
                            e = K.getSalt(),
                            n = K.getPixelURL();
                        return null == t || null == e || 0 == e.length || null == n || 0 == n.length
                    }

                    function C(t) {
                        it = U(null), a.extend(it, t)
                    }

                    function I(t, e) {
                        var n = R(e);
                        if (t == E.PLAYING) dt.addPlaybackTime(n), u(), g();
                        else if (t == E.BUFFERING) dt.addBufferingTime(n), y();
                        else if (t == E.IDLE) {
                            var i = a.getKeys(dt.getClip().getLabels());
                            dt.getClip().reset(i)
                        }
                    }

                    function M(t, e) {
                        var n = R(e);
                        ut = L(e), t == E.PLAYING ? (l(), f(), dt.getClip().setPlaybackTimestamp(n), N(t) && (dt.getClip().incrementStarts(), dt.getStarts() < 1 && dt.setStarts(1))) : t == E.PAUSED ? N(t) && dt.incrementPauses() : t == E.BUFFERING ? (dt.getClip().setBufferingTimestamp(n), pt && v()) : t == E.IDLE && c()
                    }

                    function N(t) {
                        return (t != E.PAUSED && t != E.IDLE || tt != E.IDLE && null != tt) && (t != E.BUFFERING && tt != t)
                    }

                    function L(t) {
                        var e = -1;
                        return t.hasOwnProperty("ns_st_po") && (e = a.getInteger(t.ns_st_po)), e
                    }

                    function R(t) {
                        var e = -1;
                        return t.hasOwnProperty("ns_ts") && (e = Number(t.ns_ts)), e
                    }

                    function j(t) {
                        return null != t && V() != t
                    }

                    function W(t) {
                        G = t, lt = +new Date
                    }

                    function V() {
                        return G
                    }

                    function B(t) {
                        q = t
                    }

                    function U() {
                        var t, e;
                        1 == arguments.length ? (t = E.toEventType(G), e = arguments[0]) : (t = arguments[0], e = arguments[1]);
                        var n = {};
                        if ("undefined" != typeof document) {
                            var i = document;
                            n.c7 = i.URL, n.c8 = i.title, n.c9 = i.referrer
                        }
                        return null != e && a.extend(n, e), n.hasOwnProperty("ns_ts") || (n.ns_ts = String(+new Date)), null != t && !n.hasOwnProperty("ns_st_ev") && (n.ns_st_ev = S.toString(t)), a.extend(n, at.getLabels()), z(t, n), dt.createLabels(t, n), dt.getClip().createLabels(t, n), n.hasOwnProperty("ns_st_mp") || (n.ns_st_mp = et), n.hasOwnProperty("ns_st_mv") || (n.ns_st_mv = nt), n.hasOwnProperty("ns_st_ub") || (n.ns_st_ub = "0"), n.hasOwnProperty("ns_st_br") || (n.ns_st_br = "0"), n.hasOwnProperty("ns_st_pn") || (n.ns_st_pn = "1"), n.hasOwnProperty("ns_st_tp") || (n.ns_st_tp = "1"), n.hasOwnProperty("ns_st_it") || (n.ns_st_it = "c"), n.ns_st_sv = T.STREAMSENSE_VERSION, n.ns_type = "hidden", n
                    }

                    function z(t, e) {
                        var n = e || {};
                        if (n.ns_st_ec = String(ct), !n.hasOwnProperty("ns_st_po")) {
                            var i = ut,
                                o = R(n);
                            (t == S.PLAY || t == S.KEEP_ALIVE || t == S.HEART_BEAT || null == t && G == E.PLAYING) && (i += o - dt.getClip().getPlaybackTimestamp()), n.ns_st_po = a.getInteger(i)
                        }
                        return t == S.HEART_BEAT && (n.ns_st_hc = String(vt)), n
                    }

                    function F(t) {
                        var e = R(t);
                        e < 0 && (t.ns_ts = String(+new Date))
                    }

                    function $(t, e, n) {
                        e = e || {}, e.ns_st_ad = 1, t >= S.AD_PLAY && t <= S.AD_CLICK && at.notify(t, e, n)
                    }

                    function Y(t, e) {
                        at.notify(S.CUSTOM, t, e)
                    }
                    var H, Q, q, G, K, Z, X, J, tt, et, nt, it, ot, at = this,
                        rt = 500,
                        st = null,
                        lt = 0,
                        ut = 0,
                        ct = 0,
                        dt = null,
                        pt = !0,
                        ft = T.DEFAULT_HEARTBEAT_INTERVAL,
                        ht = T.DEFAULT_KEEP_ALIVE_INTERVAL,
                        gt = T.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL,
                        mt = 0,
                        vt = 0,
                        wt = 0,
                        yt = !1,
                        bt = {};
                    r ? m.setPlatformAPI(r) : m.autoSelect(), a.extend(this, {
                        reset: function(t) {
                            dt.reset(t), dt.setPlaylistCounter(0), dt.setPlaylistId(+new Date + "_1"), dt.getClip().reset(t), null == t || t.isEmpty() ? H = {} : a.filterMap(H, t), ct = 1, vt = 0, u(), c(), g(), y(), _(), G = E.IDLE, q = null, lt = -1, tt = null, et = T.DEFAULT_PLAYERNAME, nt = T.STREAMSENSE_VERSION, it = null
                        },
                        setPauseOnBufferingInterval: function(t) {
                            gt = t
                        },
                        getPauseOnBufferingInterval: function() {
                            return gt
                        },
                        setKeepAliveInterval: function(t) {
                            ht = t
                        },
                        getKeepAliveInterval: function() {
                            return ht
                        },
                        setHeartbeatIntervals: function(t) {
                            ft = t
                        },
                        notify: function() {
                            var t, e, n, i;
                            if (e = arguments[0], 3 == arguments.length ? (n = arguments[1], i = arguments[2]) : (n = {}, i = arguments[1]), S.toString(e)) {
                                t = A(e);
                                var o = a.extend({}, n);
                                if (F(o), o.hasOwnProperty("ns_st_po") || (o.ns_st_po = a.getInteger(i).toString()), e == S.PLAY || e == S.PAUSE || e == S.BUFFER || e == S.END) at.isThrottlingEnabled() && b(G) && b(t) && (G != E.PLAYING || t != E.PAUSED || Q) ? k(t, o, rt) : k(t, o);
                                else {
                                    var r = U(e, o);
                                    a.extend(r, o), D(r, !1), ct++
                                }
                            }
                        },
                        getLabels: function() {
                            return H
                        },
                        getState: function() {
                            return G
                        },
                        setLabels: function(t) {
                            for (var e in t) t.hasOwnProperty(e) && at.setLabel(e, t[e])
                        },
                        getLabel: function(t) {
                            return H[t]
                        },
                        setLabel: function(t, e) {
                            null == e ? delete H[t] : H[t] = e
                        },
                        setPixelURL: function(t) {
                            if (null == t || 0 == t.length) return null;
                            var e = decodeURIComponent || unescape,
                                n = t.indexOf("?");
                            if (n >= 0) {
                                if (n < t.length - 1) {
                                    for (var i = t.substring(n + 1).split("&"), o = 0, a = i.length; o < a; o++) {
                                        var r = i[o],
                                            s = r.split("=");
                                        2 == s.length ? at.setLabel(s[0], e(s[1])) : 1 == s.length && at.setLabel(T.PAGE_NAME_LABEL, e(s[0]))
                                    }
                                    t = t.substring(0, n + 1)
                                }
                            } else t += "?";
                            return st = t
                        },
                        getPixelURL: function() {
                            return st ? st : "undefined" != typeof ns_p && "string" == typeof ns_p.src ? st = ns_p.src.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : "string" == typeof ns_pixelUrl ? st = ns_pixelUrl.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : null
                        },
                        isPauseOnBufferingEnabled: function() {
                            return pt
                        },
                        setPauseOnBufferingEnabled: function(t) {
                            pt = t
                        },
                        isThrottlingEnabled: function() {
                            return yt
                        },
                        setThrottlingEnabled: function(t) {
                            yt = t
                        },
                        setThrottlingDelay: function(t) {
                            t && t > 0 && (rt = t)
                        },
                        getThrottlingDelay: function() {
                            return rt
                        },
                        setClip: function(t, e) {
                            var n = !1;
                            return G == E.IDLE && (dt.getClip().reset(), dt.getClip().setLabels(t, null), e && dt.incrementStarts(), n = !0), n
                        },
                        setPlaylist: function(t) {
                            var e = !1;
                            return G == E.IDLE && (dt.incrementPlaylistCounter(), dt.reset(), dt.getClip().reset(), dt.setLabels(t, null), e = !0), e
                        },
                        importState: function(t) {
                            reset();
                            var e = a.extend({}, t);
                            dt.setRegisters(e, null), dt.getClip().setRegisters(e, null), P(e), ct++
                        },
                        exportState: function() {
                            return it
                        },
                        getVersion: function() {
                            return T.STREAMSENSE_VERSION
                        },
                        addListener: function(t) {
                            ot.push(t)
                        },
                        removeListener: function(t) {
                            ot.splice(a.indexOf(t, ot), 1)
                        },
                        getClip: function() {
                            return dt.getClip()
                        },
                        getPlaylist: function() {
                            return dt
                        },
                        setHttpGet: function(t) {
                            "function" == typeof t && (m.httpGet = t)
                        },
                        setHttpPost: function(t) {
                            "function" == typeof t && (m.httpPost = t)
                        }
                    }), a.extend(this, {
                        adNotify: $,
                        customNotify: Y,
                        viewNotify: function(e, n) {
                            e = e || at.getPixelURL(), e && t(e, n)
                        }
                    }), i.comScore && (bt = i.comScore.exports, K = bt.c()), H = {}, ct = 1, G = E.IDLE, dt = new x, Z = null, pt = !0, J = null, vt = 0, c(), X = null, Q = null, yt = !1, tt = null, ut = 0, ot = [], at.reset(), n && at.setLabels(n), o && at.setPixelURL(o)
                };
                return function(t) {
                    function e(t, e) {
                        return E[T] || r(t, e)
                    }

                    function o() {
                        T = -1;
                        for (var t = 0; t <= k; t++)
                            if (E.hasOwnProperty(String(t))) {
                                T = t;
                                break
                            } return i.StreamSense.activeIndex = T, T
                    }

                    function r(t, e) {
                        return t = t || null, e = e || null, t && "object" == ("undefined" == typeof t ? "undefined" : n(t)) && (e = t, t = null), E[++k] = new i.StreamSense(e, t), o(), E[k]
                    }

                    function s() {
                        var t = !1,
                            e = T;
                        if ("number" == typeof arguments[0] && isFinite(arguments[0])) e = arguments[0];
                        else if (arguments[0] instanceof i.StreamSense)
                            for (var n in E)
                                if (E.hasOwnProperty(n) && E[n] === arguments[0]) {
                                    e = n;
                                    break
                                } return E.hasOwnProperty(String(e)) && (t = E[e], delete E[e], t.reset(), o()), t
                    }

                    function l(t) {
                        return t = t || {}, e().setPlaylist(t), e().getPlaylist()
                    }

                    function u(t, n, i) {
                        return t = t || {}, "number" == typeof n && (t.ns_st_cn = n), e().setClip(t, i), e().getClip()
                    }

                    function c(t, n, i) {
                        return "undefined" != typeof t && (i = i || null, n = n || {}, e().notify(t, n, i))
                    }

                    function d(t) {
                        "undefined" != typeof t && e().setLabels(t)
                    }

                    function p() {
                        return e().getLabels()
                    }

                    function f(t) {
                        "undefined" != typeof t && e().getPlaylist().setLabels(t)
                    }

                    function h() {
                        return e().getPlaylist().getLabels()
                    }

                    function g(t) {
                        "undefined" != typeof t && e().getClip().setLabels(t)
                    }

                    function m() {
                        return e().getClip().getLabels()
                    }

                    function v(t) {
                        return e().reset(t || {})
                    }

                    function w(t) {
                        return e().getPlaylist().reset(t || {})
                    }

                    function y(t) {
                        return e().getClip().reset(t || {})
                    }

                    function b(t) {
                        return t = t || {}, e().viewNotify(null, t)
                    }

                    function _(t, n) {
                        return arguments.length > 2 && (t = arguments[1], n = arguments[2]), t = t || {}, "number" == typeof n && (t.ns_st_po = n), e().customNotify(t, n)
                    }

                    function A() {
                        return e().exportState()
                    }

                    function S(t) {
                        e().importState(t)
                    }
                    var E = {},
                        k = -1,
                        T = -1;
                    a.extend(t, {
                        activeIndex: T,
                        newInstance: r,
                        new: r,
                        destroyInstance: s,
                        destroy: s,
                        newPlaylist: l,
                        newClip: u,
                        notify: c,
                        setLabels: d,
                        getLabels: p,
                        setPlaylistLabels: f,
                        getPlaylistLabels: h,
                        setClipLabels: g,
                        getClipLabels: m,
                        resetInstance: v,
                        resetPlaylist: w,
                        resetClip: y,
                        viewEvent: b,
                        customEvent: _,
                        exportState: A,
                        importState: S
                    })
                }(o), o
            }();
        return D.AdEvents = k, D.PlayerEvents = S, D.InternalStates = E, D.getPlatformAPI = function() {
            return m
        }, D
    }(), i.StreamingTag = i.StreamingTag || function() {
        var t = i.Utils,
            e = i.StreamSense,
            n = i.StreamSense.PlayerEvents,
            o = (i.StreamSense.AdEvents, i.StreamSense.InternalStates || null),
            a = null != i.StreamSense.InternalStates;
        return function() {
            var r = function(r) {
                function s() {
                    if (a)
                        if (i.comScore) _ = new e, _.setLabel("ns_st_it", "r");
                        else if (t.exists(r))
                        if (A = t.isTrue(r.debug), t.exists(r.customerC2) && r.customerC2.length > 0) {
                            var n = r.secure ? "https://sb" : "http" + ("s" == document.location.href.charAt(4) ? "s://sb" : "://b");
                            _ = new e, _.setPixelURL(n + ".scorecardresearch.com/p?c1=2"), _.setLabel("c2", r.customerC2), _.setLabel("ns_st_it", "r")
                        } else A && console && console.log("Warning: customerC2 is not provided (or incorrect) in the StreamingTag configuration.")
                }

                function l(e) {
                    return t.exists(e) || (e = {}), t.exists(e.ns_st_ci) || (e.ns_st_ci = "0"), t.exists(e.c3) || (e.c3 = "*null"), t.exists(e.c4) || (e.c4 = "*null"), t.exists(e.c6) || (e.c6 = "*null"), e
                }

                function u(t) {
                    return v > 0 && t >= v ? w += t - v : w = 0, w
                }

                function c(t) {
                    _.getState() != o.IDLE && _.getState() != o.PAUSED ? _.notify(n.END, u(t)) : _.getState() == o.PAUSED && _.notify(n.END, w)
                }

                function d(t) {
                    return p("ns_st_ci", y, t) && p("c3", y, t) && p("c4", y, t) && p("c6", y, t)
                }

                function p(e, n, i) {
                    if (t.exists(e) && t.exists(n) && t.exists(i)) {
                        var o = n[e],
                            a = i[e];
                        return t.exists(o) && t.exists(a) && o === a
                    }
                    return !1
                }

                function f(e, i) {
                    c(e), m++;
                    var o = {
                        ns_st_cn: m,
                        ns_st_pn: "1",
                        ns_st_tp: "0"
                    };
                    t.extend(o, i), _.setClip(o), y = i, v = e, w = 0, _.notify(n.PLAY, w)
                }

                function h(e) {
                    var i = +new Date;
                    c(i), m++, e = l(e);
                    var o = {
                        ns_st_cn: m,
                        ns_st_pn: "1",
                        ns_st_tp: "1",
                        ns_st_ad: "1"
                    };
                    t.extend(o, e), _.setClip(o), w = 0, _.notify(n.PLAY, w), v = i, b = !1
                }

                function g(t, e) {
                    var i = +new Date;
                    t = l(t), E == S.None && (E = e), b && E == e && d(t) ? (_.getClip().setLabels(t), _.getState() != o.PLAYING && (v = i, _.notify(n.PLAY, w))) : f(i, t), b = !0, E = e
                }
                var m = 0,
                    v = 0,
                    w = 0,
                    y = null,
                    b = !1,
                    _ = null,
                    A = !1,
                    S = {
                        None: 0,
                        AudioContent: 1,
                        VideoContent: 2
                    },
                    E = S.None;
                t.extend(this, {
                    playAdvertisement: function() {
                        if (_) {
                            A && console && console.warn("Calling deprecated function 'playAdvertisement'. Please call 'playVideoAdvertisement' or 'playAudioAdvertisement' functions instead.");
                            var t = {
                                ns_st_ct: "va"
                            };
                            h(t)
                        }
                    },
                    playVideoAdvertisement: function(e) {
                        if (_) {
                            var n = {
                                ns_st_ct: "va"
                            };
                            e && t.extend(n, e), h(n)
                        }
                    },
                    playAudioAdvertisement: function(e) {
                        if (_) {
                            var n = {
                                ns_st_ct: "aa"
                            };
                            e && t.extend(n, e), h(n)
                        }
                    },
                    playContentPart: function(e) {
                        if (_) {
                            A && console && console.warn("Calling deprecated function 'playContentPart'. Please call 'playVideoContentPart' or 'playAudioContentPart' functions instead.");
                            var n = {
                                ns_st_ct: "vc"
                            };
                            e && t.extend(n, e), g(n, S.VideoContent)
                        }
                    },
                    playVideoContentPart: function(e) {
                        if (_) {
                            var n = {
                                ns_st_ct: "vc"
                            };
                            e && t.extend(n, e), g(n, S.VideoContent)
                        }
                    },
                    playAudioContentPart: function(e) {
                        if (_) {
                            var n = {
                                ns_st_ct: "ac"
                            };
                            e && t.extend(n, e), g(n, S.AudioContent)
                        }
                    },
                    stop: function() {
                        if (_) {
                            var t = +new Date;
                            _.notify(n.PAUSE, u(t))
                        }
                    }
                }), s()
            };
            return function(t) {}(r), r
        }()
    }()
}]));