! function e(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.dmp = n() : t.dmp = n()
}(window, function() {
    return (window.dmpJsonp = window.dmpJsonp || []).push([
        ["main"], {
            "+JeM": function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = {
                    loadPlayer: function e(t) {
                        n.e("theme_neon").then(function(e) {
                            return t(), n("hAcQ")
                        }.bind(null, n)).catch(n.oe)
                    }
                }
            },
            0: function(e, t, n) {
                n("HUEl"), n("kEZz"), n("/AAz"), n("S3Yi"), n("Xcch"), n("Zrx9"), n("vDqi"), n("jYEY"), n("2HEe"), n("VVxe"), n("I9rU"), n("Pu/1"), n("J9Y1"), n("Gytx"), n("ML/J"), n("GWRO"), n("aUJv"), n("fvjX"), n("TdMD"), n("peh1"), n("BkRI"), n("mwIZ"), n("YO3V"), n("44Ds"), n("QkVN"), n("DzJC"), n("v8eK"), e.exports = n("eA4M")
            },
            "2JqG": function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function i(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                t.__esModule = !0;
                var o = n("i/kS"),
                    a = r(o),
                    l = n("CIFZ"),
                    u = n("Hp9M"),
                    E = r(u),
                    s = n("xk4V"),
                    c = r(s),
                    _ = function() {
                        function e() {
                            i(this, e), this.autoplayCapability = !0, this.uuid = (0, c.default)(), this.timezoneOffset = 60 * (new Date).getTimezoneOffset() * 1e3 * -1
                        }
                        return e.prototype.setPlayerType = function e(t) {
                            this.playerType = t
                        }, e.prototype.setAutoplayCapability = function e(t) {
                            this.autoplayCapability = t
                        }, e.prototype.getContextForNeon = function e() {
                            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                n = {
                                    info: {
                                        visitor: this.sanitizeObject({
                                            id: a.default.context("v1st"),
                                            user_xid: a.default.context("reader_id"),
                                            traffic_segment: a.default.context("visitor_group"),
                                            ip: null,
                                            as_number: a.default.context("as_number"),
                                            continent: a.default.context("continent"),
                                            country: a.default.context("country"),
                                            city: null,
                                            referer: a.default.getReferer(),
                                            onsite: a.default.isOnsite(),
                                            timezone_offset: this.timezoneOffset,
                                            visit_id: E.default.get("neon_visit_id") || null,
                                            visit_number: E.default.get("neon_visit_number") || null
                                        }),
                                        player: this.sanitizeObject({
                                            type: this.playerType,
                                            version: a.default.context("player_version"),
                                            integration: a.default.context("integration"),
                                            secure: a.default.context("secure"),
                                            env: a.default.context("env"),
                                            embedder: a.default.getEmbedder(),
                                            autoplay: a.default.settings("autoplay.enable") && this.autoplayCapability,
                                            instance_uuid: this.uuid
                                        }),
                                        browser: this.sanitizeObject({
                                            user_agent: a.default.window().navigator.userAgent,
                                            os_family: a.default.context("device.os_family"),
                                            os_name: a.default.context("device.os_name"),
                                            ua_family: a.default.context("device.ua_family"),
                                            ua_name: a.default.context("device.ua_name"),
                                            flash_version: "N/A",
                                            locale: a.default.context("locale")
                                        }),
                                        app: this.sanitizeObject({
                                            id: a.default.settings("app", null),
                                            type: a.default.context("client_type", null),
                                            is_native: a.default.context("is_native_app")
                                        }),
                                        device: this.sanitizeObject({
                                            type: a.default.context("device.type")
                                        }),
                                        publisher: this.sanitizeObject({
                                            xid: a.default.context("publisher_xid")
                                        }),
                                        consent: (0, l.consentGetAsDailyFormat)()
                                    }
                                };
                            if (!t) {
                                var r = ["id", "user_xid", "ip", "visit_id", "visit_number"];
                                r.forEach(function(e) {
                                    delete n.info.visitor[e]
                                })
                            }
                            return n
                        }, e.prototype.sanitizeObject = function e(t) {
                            for (var n in t) null !== t[n] && void 0 !== t[n] && "" !== t[n] || delete t[n];
                            return t
                        }, e
                    }();
                t.default = new _
            },
            "5EtW": function(e, t, n) {
                "use strict";

                function r(e) {
                    return ~[o, a, l].indexOf(e)
                }

                function i(e) {
                    return r(e) ? e : l
                }
                t.__esModule = !0, t.exists = r, t.getOrigin = i;
                var o = t.CONTEXT = "context",
                    a = t.METADATA = "metadata",
                    l = t.RUNTIME = "runtime"
            },
            "6YTB": function(e, t, n) {
                "use strict";

                function r() {
                    var e = document.createElement("video"),
                        t = !1;
                    try {
                        t = !!e.canPlayType, t && (t = {}, t.mp4 = e.canPlayType("video/mp4").replace(/^no$/, ""), t.mp4H264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), t.hls = e.canPlayType("application/x-mpegURL").replace(/^no$/, ""), t.hlsH264 = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
                    } catch (e) {}
                    return t
                }
                t.__esModule = !0;
                var i = t.video = r()
            },
            "7ydS": function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = {};
                    if (!(e instanceof Object) || Array.isArray(e)) throw new Error("keyMirror(...): Argument must be an object.");
                    for (var r in e) e.hasOwnProperty(r) && (n[r] = "" + t + r);
                    return n
                }
            },
            "8yjK": function(e, t, n) {
                "use strict";
                n.d(t, "e", function() {
                    return r
                }), n.d(t, "k", function() {
                    return i
                }), n.d(t, "j", function() {
                    return o
                }), n.d(t, "g", function() {
                    return a
                }), n.d(t, "h", function() {
                    return l
                }), n.d(t, "i", function() {
                    return u
                }), n.d(t, "c", function() {
                    return E
                }), n.d(t, "a", function() {
                    return s
                }), n.d(t, "b", function() {
                    return c
                }), n.d(t, "d", function() {
                    return _
                }), n.d(t, "f", function() {
                    return d
                });
                var r = 13,
                    i = 1,
                    o = 2,
                    a = 3,
                    l = 4,
                    u = 5,
                    E = "migration",
                    s = 10,
                    c = 11,
                    _ = 105,
                    d = "euconsent"
            },
            "9Bq9": function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function i(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }

                function o(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function a(e, t) {
                    return new T(e, t)
                }
                t.__esModule = !0, t.createDispatcher = a;
                var l = n("Ly+z"),
                    u = i(l),
                    E = n("cGXy"),
                    s = n("znKg"),
                    c = r(s),
                    _ = n("MS60"),
                    d = r(_),
                    f = n("i/kS"),
                    p = r(f),
                    A = n("2JqG"),
                    R = r(A),
                    D = d.default.get("Bootstrapper"),
                    T = function() {
                        function e(t, n) {
                            o(this, e), this.player = t, this.playerEmitter = n
                        }
                        return e.prototype.bindPlayerEventListeners = function e() {
                            var t = this;
                            this.playerEmitter.on(c.default.DEBUG_UPDATED, function(e, n) {
                                t.dispatchFromPlayer(u.DEBUG, {
                                    info: n
                                })
                            }), this.playerEmitter.on(c.default.VIDEO_LOADED_METADATA, function() {
                                t.player.ended = !1, t.dispatchFromPlayer(u.LOADED_METADATA)
                            }), this.playerEmitter.on([c.default.VIDEO_SELECTED, c.default.CONTENT_OFFAIR].join(" "), function(e, r) {
                                var i = r.metadata,
                                    o = void 0 === i ? null : i;
                                t.player.video = n(o), t.dispatchFromPlayer(u.VIDEO_CHANGE, t.player.video)
                            }), this.playerEmitter.on(c.default.VIDEO_TIME_UPDATE, function(e, n) {
                                var r = n.time;
                                r = t.ensureNumber(r), t.player.currentTime = r, t.dispatchFromPlayer(t.player.adRunning ? u.AD_TIME_UPDATE : u.TIME_UPDATE, {
                                    time: r
                                })
                            }), this.playerEmitter.on(c.default.VIDEO_BUFFER_UPDATE, function(e, n) {
                                var r = n.buffer;
                                r = t.ensureNumber(r), t.player.bufferedTime = r, t.dispatchFromPlayer(u.PROGRESS, {
                                    time: r
                                })
                            }), this.playerEmitter.on(c.default.VIDEO_DURATION_CHANGE, function(e, n) {
                                var r = n.duration;
                                r = t.ensureNumber(r), t.player.duration = r, t.dispatchFromPlayer(u.DURATION_CHANGE, {
                                    duration: r
                                })
                            }), this.playerEmitter.on(c.default.FULLSCREEN_ENTERED, function() {
                                t.player.fullscreen = !0, t.dispatchFromPlayer(u.FULLSCREEN_CHANGE, {
                                    fullscreen: t.player.fullscreen
                                })
                            }), this.playerEmitter.on(c.default.FULLSCREEN_EXITED, function() {
                                t.player.fullscreen = !1, t.dispatchFromPlayer(u.FULLSCREEN_CHANGE, {
                                    fullscreen: t.player.fullscreen
                                })
                            }), this.playerEmitter.on(c.default.VIDEO_VOLUME_CHANGED, function(e, n) {
                                var r = n.volume,
                                    i = n.muted,
                                    o = n.internal;
                                r = t.ensureNumber(r), t.player.volume = r, t.player.muted = i, o || t.dispatchFromPlayer(u.VOLUME_CHANGE, {
                                    volume: r,
                                    muted: i
                                })
                            }), this.playerEmitter.on(c.default.QUALITY_CHANGED, function(e, n) {
                                var r = n.quality;
                                t.player.quality = r.name, t.dispatchFromPlayer(u.QUALITY_CHANGE, {
                                    quality: t.player.quality
                                })
                            }), this.playerEmitter.on(c.default.QUALITIES_AVAILABLE, function(e, n) {
                                var r = n.qualities;
                                t.player.qualities = r.map(function(e) {
                                    var t = e.name;
                                    return t
                                }), t.dispatchFromPlayer(u.QUALITIES_AVAILABLE, {
                                    qualities: t.player.qualities
                                })
                            }), this.playerEmitter.on(c.default.SUBTITLES_AVAILABLE, function(e, n) {
                                var r = n.subtitles;
                                t.player.subtitles = r, t.dispatchFromPlayer(u.SUBTITLES_AVAILABLE, {
                                    subtitles: r
                                })
                            }), this.playerEmitter.on(c.default.SUBTITLE_CHANGE_CONFIRMED, function(e, n) {
                                var r = n.code;
                                t.player.subtitle = r, t.dispatchFromPlayer(u.SUBTITLE_CHANGE, {
                                    subtitle: r
                                })
                            }), this.playerEmitter.on(c.default.PLAYBACK_READY, function() {
                                t.dispatchFromPlayer(u.PLAYBACK_READY)
                            }), this.playerEmitter.on(c.default.VIDEO_PLAYING, function() {
                                t.player.adRunning || t.dispatchFromPlayer(u.PLAYING)
                            }), this.playerEmitter.on(c.default.VIDEO_PLAY, function() {
                                t.player.paused = !1, t.dispatchFromPlayer(t.player.adRunning ? u.AD_PLAY : u.PLAY)
                            }), this.playerEmitter.on(c.default.VIDEO_PAUSE, function() {
                                t.player.paused = !0, t.dispatchFromPlayer(t.player.adRunning ? u.AD_PAUSE : u.PAUSE)
                            }), this.playerEmitter.on(c.default.VIDEO_START, function(e, n) {
                                var r = n.replay;
                                t.dispatchFromPlayer(u.VIDEO_START, {
                                    replay: r
                                })
                            }), this.playerEmitter.on(c.default.VIDEO_ENDED, function() {
                                t.dispatchFromPlayer(u.VIDEO_END)
                            }), this.playerEmitter.on(c.default.VIDEO_SEEKING, function(e, n) {
                                var r = n.time;
                                r = t.ensureNumber(r), t.player.seeking = !0, t.dispatchFromPlayer(u.SEEKING, {
                                    time: r
                                })
                            }), this.playerEmitter.on(c.default.VIDEO_SEEKED, function(e, n) {
                                var r = n.time;
                                r = t.ensureNumber(r), t.player.seeking = !1, t.dispatchFromPlayer(u.SEEKED, {
                                    time: r
                                })
                            }), this.playerEmitter.on(c.default.VIDEO_WAITING, function() {
                                t.dispatchFromPlayer(u.WAITING)
                            }), this.playerEmitter.on(c.default.ERROR_DISPLAY_REQUESTED, function(e, n) {
                                var r = n.code,
                                    i = n.title,
                                    o = n.text;
                                t.dispatchFromPlayer(u.ERROR, {
                                    code: r,
                                    title: i,
                                    message: o
                                })
                            }), this.playerEmitter.on(c.default.AD_SDK_READY, function(e, n) {
                                var r = n.position,
                                    i = function e() {
                                        t.playerEmitter.off(c.default.LOAD_VIDEO, e), t.playerEmitter.off(c.default.AD_LOADED, o), t.playerEmitter.off(c.default.AD_ERROR, o)
                                    },
                                    o = function e() {
                                        i(), t.dispatchFromPlayer(u.AD_RESPONDED)
                                    };
                                t.playerEmitter.on(c.default.LOAD_VIDEO, i), t.playerEmitter.on(c.default.AD_LOADED, o), t.playerEmitter.on(c.default.AD_ERROR, o), t.dispatchFromPlayer(u.AD_REQUESTED, {
                                    position: r
                                })
                            }), this.playerEmitter.on(c.default.AD_LINEAR_STARTED, function(e, n) {
                                var r = n.type,
                                    i = n.position;
                                t.player.adRunning = !0, t.dispatchFromPlayer(u.AD_START, {
                                    type: r,
                                    position: i
                                })
                            }), this.playerEmitter.on(c.default.AD_LINEAR_STOPPED, function(e, n) {
                                var r = n.type,
                                    i = n.position;
                                t.player.adRunning && (t.player.adRunning = !1, t.dispatchFromPlayer(u.AD_END, {
                                    type: r,
                                    position: i
                                }))
                            }), this.playerEmitter.on(c.default.LOAD_VIDEO, function() {
                                t.playerEmitter.off(c.default.SEQUENCE_ENDED, i), t.player.reset()
                            }), this.playerEmitter.on(c.default.SHARE_PANE_ACTION, function(e, n) {
                                var r = n.type;
                                t.dispatchFromPlayer(u.SHARE_PANE_ACTION, {
                                    type: r
                                })
                            }), this.playerEmitter.on(c.default.EXPAND_PLAYER_SIZE_REQUESTED, function() {
                                t.dispatchFromPlayer(u.EXPAND_PLAYER_SIZE_REQUESTED)
                            }), this.playerEmitter.on(c.default.REDUCE_PLAYER_SIZE_REQUESTED, function() {
                                t.dispatchFromPlayer(u.REDUCE_PLAYER_SIZE_REQUESTED)
                            }), this.playerEmitter.on(c.default.EMBED_REQUESTED, function() {
                                t.dispatchFromPlayer(u.EMBED_REQUESTED)
                            }), this.playerEmitter.on(c.default.REPORT_ISSUE_REQUESTED, function(e, n) {
                                var r = n.id,
                                    i = n.techno;
                                t.dispatchFromPlayer(u.REPORT_ISSUE_REQUESTED, {
                                    config: p.default.get(),
                                    videoId: r,
                                    techno: i
                                })
                            });
                            var n = function e(t) {
                                    if (!t) return null;
                                    var n = t.access_id.substring(0, 1),
                                        r = p.default.context("onsite") || ["x", "k"].includes(n);
                                    return {
                                        videoId: r ? t.access_id : t.id,
                                        title: r ? t.title : void 0
                                    }
                                },
                                r = function e() {
                                    t.player.started = !0, t.dispatchFromPlayer(u.START), t.playerEmitter.on(c.default.SEQUENCE_ENDED, i)
                                },
                                i = function e() {
                                    t.player.ended = !0, t.dispatchFromPlayer(u.END), t.playerEmitter.off(c.default.SEQUENCE_ENDED, e)
                                };
                            this.playerEmitter.on(c.default.SEQUENCE_STARTED, r), this.playerEmitter.on(c.default.FULLSCREEN_TOGGLE_REQUESTED, function() {
                                t.dispatchFromPlayer(u.FULLSCREEN_TOGGLE_REQUESTED)
                            }), this.playerEmitter.on(c.default.CONTROLS_CHANGED, function(e, n) {
                                var r = n.controls;
                                t.player.controls = r, t.dispatchFromPlayer(u.CONTROLS_CHANGE, {
                                    controls: r
                                })
                            }), this.playerEmitter.on(c.default.SCALE_MODE_CHANGED, function(e, n) {
                                var r = n.scaleMode;
                                t.player.scaleMode = r, t.dispatchFromPlayer(u.SCALE_MODE_CHANGE, {
                                    scaleMode: r
                                })
                            }), this.playerEmitter.on(c.default.MENU_DID_SHOW, function() {
                                t.dispatchFromPlayer(u.MENU_DID_SHOW)
                            }), this.playerEmitter.on(c.default.MENU_DID_HIDE, function() {
                                t.dispatchFromPlayer(u.MENU_DID_HIDE)
                            }), this.playerEmitter.on(c.default.SHARE_REQUESTED, function(e, n) {
                                var r = n.url,
                                    i = n.shortUrl;
                                t.dispatchFromPlayer(u.SHARE_REQUESTED, {
                                    url: r,
                                    shortUrl: i
                                })
                            }), this.playerEmitter.on(c.default.COMPONENTS_READY, function() {
                                D.log("Player loaded"), t.player.apiReady = !0, D.log("trigger '" + u.API_READY.name + "'"), p.default.context("in_house") || p.default.settings("pubtool", "").length > 0 ? t.dispatchFromPlayer(u.API_READY, R.default.getContextForNeon(!1)) : t.dispatchFromPlayer(u.API_READY)
                            }), this.playerEmitter.on(c.default.PRESENTATION_MODE_CHANGED, function(e, n) {
                                var r = n.mode;
                                t.player.presentationMode = r, t.dispatchFromPlayer(u.PRESENTATION_MODE_CHANGE, {
                                    mode: r
                                })
                            }), this.playerEmitter.on(c.default.WATCH_LATER_REQUESTED, function(e, n) {
                                var r = n.state;
                                t.dispatchFromPlayer(u.WATCH_LATER_REQUESTED, {
                                    state: r
                                })
                            }), this.playerEmitter.on(c.default.LIKE_REQUESTED, function(e, n) {
                                var r = n.state;
                                t.dispatchFromPlayer(u.LIKE_REQUESTED, {
                                    state: r
                                })
                            }), this.playerEmitter.on(c.default.ADD_TO_COLLECTION_REQUESTED, function() {
                                t.dispatchFromPlayer(u.ADD_TO_COLLECTION_REQUESTED)
                            }), this.playerEmitter.on(c.default.GESTURE_START, function() {
                                t.dispatchFromPlayer(u.GESTURE_START)
                            }), this.playerEmitter.on(c.default.GESTURE_END, function() {
                                t.dispatchFromPlayer(u.GESTURE_END)
                            }), this.playerEmitter.on(c.default.INFO_REQUESTED, function(e, n) {
                                var r = n.url,
                                    i = n.infoType;
                                t.dispatchFromPlayer(u.INFO_REQUESTED, {
                                    url: r,
                                    infoType: i
                                })
                            }), this.playerEmitter.on(c.default.CHROMECAST_REQUESTED, function() {
                                t.dispatchFromPlayer(u.CHROMECAST_REQUESTED)
                            }), this.playerEmitter.on(c.default.WATERMARK_REQUESTED, function() {
                                t.dispatchFromPlayer(u.WATERMARK_REQUESTED)
                            }), this.playerEmitter.on(c.default.AD_COMPANIONS_RECEIVED, function(e, n) {
                                var r = n.companionAds;
                                t.dispatchFromPlayer(u.AD_COMPANIONS_RECEIVED, {
                                    companionAds: r
                                })
                            }), this.playerEmitter.on(c.default.CONTENT_SIZE_CHANGED, function(e, n) {
                                t.dispatchFromPlayer(u.CONTENT_SIZE_CHANGE, n)
                            })
                        }, e.prototype.dispatchFromPlayer = function e(t, n) {
                            this.player.dispatchFromPlayer(t, n)
                        }, e.prototype.triggerToPlayer = function e(t, n) {
                            this.playerEmitter.trigger(t, Object.assign({}, n, {
                                interactionType: E.API
                            }))
                        }, e.prototype.ensureNumber = function e(t) {
                            return parseFloat(t) || 0
                        }, e
                    }()
            },
            CIFZ: function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, "getCmpVersion", function() {
                    return d
                }), n.d(t, "dailyVendorListToCmpVersion", function() {
                    return f
                }), n.d(t, "consentGetDialogTimeoutInSeconds", function() {
                    return A
                }), n.d(t, "consentIsFeatureEnabled", function() {
                    return R
                }), n.d(t, "consentIsMenuEnabled", function() {
                    return D
                }), n.d(t, "consentReadCookie", function() {
                    return T
                }), n.d(t, "consentClearCache", function() {
                    return m
                }), n.d(t, "consentIsAdvertisingSelectionAllowed", function() {
                    return h
                }), n.d(t, "consentIsPersonalisationAllowed", function() {
                    return y
                }), n.d(t, "consetIsContentSelectionAllowed", function() {
                    return P
                }), n.d(t, "consentIsMeasurementAllowed", function() {
                    return O
                }), n.d(t, "consentIsStorageAllowed", function() {
                    return I
                }), n.d(t, "consentGetAsDailyFormat", function() {
                    return N
                }), n.d(t, "consentTimeout", function() {
                    return g
                }), n.d(t, "consentHasReachedTimeout", function() {
                    return L
                }), n.d(t, "consentLoad", function() {
                    return v
                }), n.d(t, "consentWriteBothCookie", function() {
                    return C
                }), n.d(t, "consentGetManageURL", function() {
                    return b
                });
                var r = n("Zrx9"),
                    i = n("i/kS"),
                    o = n.n(i),
                    a = n("Hp9M"),
                    l = n.n(a),
                    u = n("8yjK"),
                    E = n("leIk"),
                    s = n("EA38"),
                    c = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    },
                    _ = r.default.define("Consent", "Tan"),
                    d = function e() {
                        var t = Object(s.c)(),
                            n = o.a.isGKEnabled("PV5_GDPR_MIGRATION_V3");
                        return t && n ? 3 : t ? 2 : 1
                    },
                    f = function e(t) {
                        var n = t.globalVendorListVersion;
                        return n > 82 ? 3 : 2
                    },
                    p = !1,
                    A = function e() {
                        return o.a.metadata("consent.timeout") || o.a.context("consent.timeout")
                    },
                    R = function e() {
                        return l.a.enabled && o.a.context("consent.enable")
                    },
                    D = function e() {
                        return R() && !o.a.isOnsite()
                    },
                    T = function e() {
                        return R() && Object(E.c)() ? Object(E.d)() : null
                    },
                    m = function e() {
                        Object(E.a)()
                    },
                    S = function e(t) {
                        var n = T();
                        return !!n && n.allowedPurposeIds.indexOf(t) > -1
                    },
                    h = function e() {
                        return S(u.g)
                    },
                    y = function e() {
                        return S(u.j)
                    },
                    P = function e() {
                        return S(u.h)
                    },
                    O = function e() {
                        return S(u.i)
                    },
                    I = function e() {
                        return S(u.k)
                    },
                    N = function e() {
                        return R() ? c({
                            ad: h(),
                            xp: P(),
                            audience: O()
                        }, o.a.isGKEnabled("PV5_GDPR_IAB") ? {
                            storage: I(),
                            perso: y()
                        } : {}) : c({
                            ad: null,
                            xp: null,
                            audience: null
                        }, o.a.isGKEnabled("PV5_GDPR_IAB") ? {
                            storage: null,
                            perso: null
                        } : {})
                    },
                    g = function e() {
                        _.log("timeout, consent will be asked again later"), p = !0
                    },
                    L = function e() {
                        return p
                    },
                    v = function e() {
                        return Object(s.d)()
                    },
                    C = function e(t) {
                        _.log("store daily consent with", t), Object(E.e)(t), Object(s.c)() && (_.log("store iab consent with", t), Object(s.e)(t))
                    },
                    b = function e() {
                        return "//www.dailymotion.com/legal/consent?consent_from=web_embed_player_banner"
                    }
            },
            CJtR: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.__esModule = !0;
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = n("i/kS"),
                    a = r(o),
                    l = null;
                t.default = {
                    init: function e() {
                        var t = this;
                        l || (l = a.default.window());
                        var n = a.default.get("origin");
                        return this.origin = "string" == typeof n && -1 !== n.search(/^https?:\/\//gi) ? n : "*", this.rootNode = a.default.rootNode(), $(l).on("message.postMessageApi", function() {
                            return t.receiveMessage.apply(t, arguments)
                        }), this
                    },
                    destroy: function e() {
                        $(l).off("message.postMessageApi"), l = null, this.origin = null, this.rootNode = null
                    },
                    postMessage: function e(t) {
                        l.parent.postMessage(t, this.origin)
                    },
                    receiveMessage: function e(t) {
                        var n, r = void 0,
                            o = void 0;
                        if (t = null != t ? t.originalEvent : void 0, t && t.source === l.parent && ("*" === this.origin || t.origin === this.origin) && t.data && ("string" != typeof t.data || !t.data.match(/^event=/))) {
                            if ("object" === i(t.data)) {
                                var a = t.data;
                                r = a.command;
                                var u = a.parameters;
                                o = void 0 === u ? [] : u, this.rootNode.api("--api-warning", {
                                    mode: "postMessage",
                                    deprecated: "object",
                                    method: r
                                })
                            } else if ("string" == typeof t.data) try {
                                var E = JSON.parse(t.data);
                                r = E.command, o = E.parameters
                            } catch (e) {
                                var s = void 0,
                                    c = t.data.split("=");
                                r = c[0], s = c[1], o = s ? [s] : [], this.rootNode.api("--api-warning", {
                                    mode: "postMessage",
                                    deprecated: "string",
                                    method: r
                                })
                            }
                            return (n = this.rootNode).api.apply(n, [r].concat(o)), !1
                        }
                    }
                }
            },
            EA38: function(e, t, n) {
                "use strict";
                n.d(t, "c", function() {
                    return p
                }), n.d(t, "a", function() {
                    return D
                }), n.d(t, "b", function() {
                    return m
                }), n.d(t, "d", function() {
                    return y
                }), n.d(t, "e", function() {
                    return P
                });
                var r = n("gqE+"),
                    i = n.n(r),
                    o = n("vDqi"),
                    a = n.n(o),
                    l = n("i/kS"),
                    u = n.n(l),
                    E = n("Hp9M"),
                    s = n.n(E),
                    c = n("8yjK"),
                    _ = n("CIFZ"),
                    d = function() {
                        function e(e, t) {
                            var n = [],
                                r = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var a = e[Symbol.iterator](), l; !(r = (l = a.next()).done) && (n.push(l.value), !t || n.length !== t); r = !0);
                            } catch (e) {
                                i = !0, o = e
                            } finally {
                                try {
                                    !r && a.return && a.return()
                                } finally {
                                    if (i) throw o
                                }
                            }
                            return n
                        }
                        return function(t, n) {
                            if (Array.isArray(t)) return t;
                            if (Symbol.iterator in Object(t)) return e(t, n);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                    }(),
                    f = "/",
                    p = function e() {
                        return u.a.isGKEnabled("PV5_GDPR_IAB")
                    },
                    A = function e() {
                        return !!p() && Boolean(s.a.get(c.f))
                    },
                    R = function e() {
                        if (!p()) return {};
                        if (!A()) return {};
                        var t = s.a.get(c.f),
                            n = new r.ConsentString(t);
                        return {
                            version: n.getCmpVersion(),
                            allowedPurposeIds: n.getPurposesAllowed(),
                            allowedVendorIds: n.getVendorsAllowed()
                        }
                    },
                    D = function e() {
                        return A() ? s.a.get(c.f) : "opt-out"
                    },
                    T = function e(t) {
                        var n = t.screenId,
                            i = t.cmpVersion,
                            o = t.allowedPurposeIds,
                            a = void 0 === o ? [] : o,
                            l = t.allowedVendorIds,
                            E = void 0 === l ? [] : l,
                            s = t.globalVendorList;
                        n = 0;
                        var _ = new r.ConsentString;
                        return _.setGlobalVendorList(s), _.setCmpId(c.d), _.setCmpVersion(i), _.setConsentScreen(0), _.setConsentLanguage(u.a.context("locale").slice(0, 2)), _.setPurposesAllowed(a), _.setVendorsAllowed(E), _
                    },
                    m = function e(t) {
                        var n = t.globalVendorList,
                            i = void 0;
                        i = A() ? new r.ConsentString(s.a.get(c.f)) : T({
                            cmpVersion: Object(_.getCmpVersion)(),
                            allowedPurposeIds: [],
                            allowedVendorIds: [],
                            globalVendorList: n
                        });
                        var o = i,
                            a = o.version,
                            l = o.cmpId,
                            u = o.cmpVersion,
                            E = o.allowedVendorIds,
                            d = o.vendorListVersion,
                            f = o.maxVendorId,
                            p = o.allowedPurposeIds,
                            R = o.created,
                            D = o.lastUpdated,
                            m = o.consentScreen,
                            S = o.consentLanguage;
                        return {
                            version: a,
                            cmp_id: l,
                            cmp_version: u,
                            allowed_vendor_ids: E,
                            vendor_list_version: d,
                            max_vendor_id: f,
                            allowed_purpose_ids: p,
                            created: R,
                            last_updated: D,
                            consent_screen: m,
                            consent_language: S
                        }
                    },
                    S = function e() {
                        return a.a.get("https://vendorlist.consensu.org/vendorlist.json").then(function(e) {
                            var t = e.data;
                            return t
                        })
                    },
                    h = function e() {
                        return a.a.get(u.a.context("consent.pubvendors_url")).then(function(e) {
                            var t = e.data;
                            return t
                        })
                    },
                    y = function e() {
                        return Promise.all([S(), h()]).then(function(e) {
                            var t = d(e, 2),
                                n = t[0],
                                r = t[1];
                            return {
                                globalVendorList: n,
                                dailyVendorList: r
                            }
                        })
                    },
                    P = function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.screenId,
                            r = t.cmpVersion,
                            i = t.expirationDate,
                            o = t.allowedPurposeIds,
                            a = t.allowedVendorIds,
                            l = t.globalVendorList,
                            E = T({
                                screenId: n,
                                cmpVersion: r,
                                allowedPurposeIds: o,
                                allowedVendorIds: a,
                                globalVendorList: l
                            }),
                            _ = E.getConsentString(),
                            d = {
                                expires: i,
                                domain: u.a.context("cookie_root_domain"),
                                path: "/",
                                secure: !1
                            };
                        s.a.set(c.f, _, d)
                    }
            },
            LwNu: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.__esModule = !0, t.isGooglePreviewBot = t.isWindowsPhone = t.isIphone = t.isSonyBraviaTv = t.isChromiumWebview = t.isAndroidStockBrowser = t.isAndroidWebview = t.isVivaldi = t.isChromium = t.isOpera = t.isOperaTv = t.isChromeMobile = t.isChrome = t.isFirefoxMobile = t.isFirefox = t.isSafariMobile = t.isSafari = t.isEdge = t.isIE = t.isTizen = t.isWindows = t.isIos = t.isBlackberry = t.isAndroid = t.isTv = t.isTablet = t.isMobile = t.isDesktop = t.getOsVersion = t.getBrowserVersion = t.getUAName = t.getUAFamily = t.getOsFamily = t.getOsName = t.getType = void 0;
                var i = n("i/kS"),
                    o = r(i),
                    a = "undefined" != typeof navigator && null !== navigator ? navigator.userAgent : void 0,
                    l = function e(t) {
                        return function() {
                            var e = o.default.context("device");
                            return e ? t(e) : void 0
                        }
                    },
                    u = t.getType = l(function(e) {
                        return e.type
                    }),
                    E = t.getOsName = l(function(e) {
                        return e.os_name
                    }),
                    s = t.getOsFamily = l(function(e) {
                        return e.os_family
                    }),
                    c = t.getUAFamily = l(function(e) {
                        return e.ua_family
                    }),
                    _ = t.getUAName = l(function(e) {
                        return e.ua_name
                    }),
                    d = null,
                    f = t.getBrowserVersion = function e() {
                        if (null == d) {
                            var t = _(),
                                n = t ? t.match(/(\d+(\.\d+)*)/) : void 0;
                            d = n ? n[0] : ""
                        }
                        return d
                    },
                    p = null,
                    A = t.getOsVersion = function e() {
                        if (null == p) {
                            var t = E(),
                                n = t ? t.match(/(\d+(\.\d+)*)/) : void 0;
                            n ? p = n[0] : "iOS" === t && (n = a.match(/Version\/(\d+(\.\d+)*)/), p = n ? n[1] : void 0), p || (p = "999")
                        }
                        return p
                    },
                    R = t.isDesktop = function e() {
                        return "desktop" === u()
                    },
                    D = t.isMobile = function e() {
                        return "mobile" === u()
                    },
                    T = t.isTablet = function e() {
                        return "tablet" === u()
                    },
                    m = t.isTv = function e() {
                        return "tv" === u()
                    },
                    S = t.isAndroid = function e() {
                        return "Android" === s()
                    },
                    h = t.isBlackberry = function e() {
                        return "BlackBerry OS" === s()
                    },
                    y = t.isIos = function e() {
                        return "iOS" === s()
                    },
                    P = t.isWindows = function e() {
                        return "Windows" === s()
                    },
                    O = t.isTizen = function e() {
                        return "Tizen" === s()
                    },
                    I = t.isIE = function e() {
                        return "IE" === c()
                    },
                    N = t.isEdge = function e() {
                        return "Microsoft Edge" === c()
                    },
                    g = t.isSafari = function e() {
                        return "Safari" === c()
                    },
                    L = t.isSafariMobile = function e() {
                        return "Safari mobile" === c()
                    },
                    v = t.isFirefox = function e() {
                        return "Firefox" === c()
                    },
                    C = t.isFirefoxMobile = function e() {
                        return "Firefox mobile" === c()
                    },
                    b = t.isChrome = function e() {
                        return "Chrome" === c()
                    },
                    M = t.isChromeMobile = function e() {
                        return "Chrome Mobile" === c()
                    },
                    U = t.isOperaTv = function e() {
                        return "Opera TV Store" === c()
                    },
                    V = t.isOpera = function e() {
                        return "Opera" === c()
                    },
                    w = t.isChromium = function e() {
                        return "Chromium" === c()
                    },
                    G = t.isVivaldi = function e() {
                        return "Vivaldi" === c()
                    },
                    H = t.isAndroidWebview = function e() {
                        return S() && o.default.context("is_webview") || "Android webview" === c()
                    },
                    F = null,
                    x = t.isAndroidStockBrowser = function e() {
                        if (null == F) {
                            var t = a.match(/AppleWebKit\/([\d.]+)/) || [],
                                n = null != t[1] ? parseFloat(t[1]) : null;
                            F = S() && D() && null != n && n < 537
                        }
                        return F
                    },
                    Q = null,
                    Y = t.isChromiumWebview = function e() {
                        if (null == Q) {
                            var t = a.match(/Version\/([\d.]+) Chrome\/([\d.]+)/) || [],
                                n = null !== t[1];
                            Q = S() && D() && n
                        }
                        return Q
                    },
                    k = null,
                    B = t.isSonyBraviaTv = function e() {
                        return null === k && (k = !!a && null !== a.match(/BRAVIA/)), k
                    },
                    W = t.isIphone = function e() {
                        return D() && y()
                    },
                    K = t.isWindowsPhone = function e() {
                        return D() && P()
                    },
                    j = t.isGooglePreviewBot = function e() {
                        return /Google Web Preview/.test(a)
                    }
            },
            "Ly+z": function(e, t, n) {
                "use strict";
                t.__esModule = !0;
                var r = t.AD_END = {
                        name: "ad_end",
                        isPublic: !0
                    },
                    i = t.AD_PAUSE = {
                        name: "ad_pause",
                        isPublic: !0
                    },
                    o = t.AD_PLAY = {
                        name: "ad_play",
                        isPublic: !0
                    },
                    a = t.AD_START = {
                        name: "ad_start",
                        isPublic: !0
                    },
                    l = t.AD_TIME_UPDATE = {
                        name: "ad_timeupdate",
                        isPublic: !0
                    },
                    u = t.AD_COMPANIONS_RECEIVED = {
                        name: "ad_companions",
                        isPublic: !0
                    },
                    E = t.ADD_TO_COLLECTION_REQUESTED = {
                        name: "add_to_collection_requested",
                        isPublic: !0
                    },
                    s = t.API_READY = {
                        name: "apiready",
                        isPublic: !0
                    },
                    c = t.CHROMECAST_REQUESTED = {
                        name: "chromecast_requested",
                        isPublic: !0
                    },
                    _ = t.CONTROLS_CHANGE = {
                        name: "controlschange",
                        isPublic: !0
                    },
                    d = t.DEBUG = {
                        name: "debug",
                        isPublic: !0
                    },
                    f = t.DURATION_CHANGE = {
                        name: "durationchange",
                        isPublic: !0
                    },
                    p = t.END = {
                        name: "end",
                        isPublic: !0
                    },
                    A = t.ERROR = {
                        name: "error",
                        isPublic: !0
                    },
                    R = t.FULLSCREEN_CHANGE = {
                        name: "fullscreenchange",
                        isPublic: !0
                    },
                    D = t.FULLSCREEN_TOGGLE_REQUESTED = {
                        name: "fullscreen_toggle_requested",
                        isPublic: !0
                    },
                    T = t.GESTURE_END = {
                        name: "gesture_end",
                        isPublic: !0
                    },
                    m = t.GESTURE_START = {
                        name: "gesture_start",
                        isPublic: !0
                    },
                    S = t.INFO_REQUESTED = {
                        name: "info_requested",
                        isPublic: !0
                    },
                    h = t.LIKE_REQUESTED = {
                        name: "like_requested",
                        isPublic: !0
                    },
                    y = t.LOADED_METADATA = {
                        name: "loadedmetadata",
                        isPublic: !0
                    },
                    P = t.MENU_DID_HIDE = {
                        name: "menu_did_hide",
                        isPublic: !0
                    },
                    O = t.MENU_DID_SHOW = {
                        name: "menu_did_show",
                        isPublic: !0
                    },
                    I = t.PAUSE = {
                        name: "pause",
                        isPublic: !0
                    },
                    N = t.PLAY = {
                        name: "play",
                        isPublic: !0
                    },
                    g = t.PLAYBACK_READY = {
                        name: "playback_ready",
                        isPublic: !0
                    },
                    L = t.PLAYING = {
                        name: "playing",
                        isPublic: !0
                    },
                    v = t.PRESENTATION_MODE_CHANGE = {
                        name: "presentationmodechange",
                        isPublic: !0
                    },
                    C = t.PROGRESS = {
                        name: "progress",
                        isPublic: !0
                    },
                    b = t.QUALITIES_AVAILABLE = {
                        name: "qualitiesavailable",
                        isPublic: !0
                    },
                    M = t.QUALITY_CHANGE = {
                        name: "qualitychange",
                        isPublic: !0
                    },
                    U = t.SEEKED = {
                        name: "seeked",
                        isPublic: !0
                    },
                    V = t.SEEKING = {
                        name: "seeking",
                        isPublic: !0
                    },
                    w = t.SHARE_REQUESTED = {
                        name: "share_requested",
                        isPublic: !0
                    },
                    G = t.START = {
                        name: "start",
                        isPublic: !0
                    },
                    H = t.SUBTITLE_CHANGE = {
                        name: "subtitlechange",
                        isPublic: !0
                    },
                    F = t.SUBTITLES_AVAILABLE = {
                        name: "subtitlesavailable",
                        isPublic: !0
                    },
                    x = t.TIME_UPDATE = {
                        name: "timeupdate",
                        isPublic: !0
                    },
                    Q = t.VIDEO_END = {
                        name: "video_end",
                        isPublic: !0,
                        deprecated: "ended"
                    },
                    Y = t.VIDEO_CHANGE = {
                        name: "videochange",
                        isPublic: !0
                    },
                    k = t.VIDEO_START = {
                        name: "video_start",
                        isPublic: !0,
                        deprecated: "started"
                    },
                    B = t.VOLUME_CHANGE = {
                        name: "volumechange",
                        isPublic: !0
                    },
                    W = t.WAITING = {
                        name: "waiting",
                        isPublic: !0
                    },
                    K = t.WATCH_LATER_REQUESTED = {
                        name: "watch_later_requested",
                        isPublic: !0
                    },
                    j = t.WATERMARK_REQUESTED = {
                        name: "watermark_requested",
                        isPublic: !0
                    },
                    q = t.SCALE_MODE_CHANGE = {
                        name: "scalemodechange",
                        isPublic: !0
                    },
                    X = t.AD_REQUESTED = {
                        name: "ad_requested",
                        isPublic: !1
                    },
                    z = t.AD_RESPONDED = {
                        name: "ad_responded",
                        isPublic: !1
                    },
                    Z = t.EMBED_REQUESTED = {
                        name: "embedRequested",
                        isPublic: !1
                    },
                    J = t.EXPAND_PLAYER_SIZE_REQUESTED = {
                        name: "expandPlayerRequested",
                        isPublic: !1
                    },
                    $ = t.REDUCE_PLAYER_SIZE_REQUESTED = {
                        name: "reducePlayerRequested",
                        isPublic: !1
                    },
                    ee = t.REPORT_ISSUE_REQUESTED = {
                        name: "reportIssueRequested",
                        isPublic: !1
                    },
                    te = t.SHARE_PANE_ACTION = {
                        name: "shareAction",
                        isPublic: !1
                    },
                    ne = t.CONTENT_SIZE_CHANGE = {
                        name: "contentsizechange",
                        isPublic: !1
                    }
            },
            MS60: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.__esModule = !0;
                var i = n("LwNu"),
                    o = n("Zrx9"),
                    a = r(o),
                    l = ["darkslateblue", "gray", "purple"];
                l.forEach(function(e) {
                    a.default.style(e, {
                        background: e
                    })
                });
                var u = a.default.get("Bootstrapper") || a.default.define("Bootstrapper", "purple");
                a.default.get("API") || u.define("API", "purple"), a.default.get("fban") || a.default.define("fban", "darkslateblue"), a.default.get("Timestamp") || a.default.define("Timestamp", "gray"), a.default.customConf = function(e) {
                    var t = !((0, i.isIE)() || (0, i.isOperaTv)() || (0, i.isAndroidStockBrowser)()),
                        n = "";
                    switch (e) {
                        case !0:
                        case !1:
                        case void 0:
                            a.default.config({
                                enabled: !!e,
                                styled: t
                            });
                            break;
                        default:
                            a.default.config({
                                enabled: !0,
                                styled: t
                            }), "-" === e.charAt(0) ? (e = e.substring(1), n = "exclude") : n = "include";
                            var r = e.split(",").join("|");
                            a.default.filter[n](new RegExp(r, "i"))
                    }
                }, t.default = a.default
            },
            NfI8: function(e, t, n) {
                "use strict";
                (function(e) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    t.__esModule = !0;
                    var i = n("i/kS"),
                        o = r(i),
                        a = null;
                    t.default = {
                        init: function e() {
                            return a || (a = o.default.window()), this.messageQueue = [], this.messageQueueTimer = null, a.player = o.default.rootNode(), this
                        },
                        postMessage: function t(n) {
                            var r = this;
                            /event=qualitiesavailable.*/.test(n) || e.nextTick(function() {
                                r.messageQueue.push(n), r.messageQueueTimer || (r.messageQueueTimer = a.setInterval(function() {
                                    r.unqueueMessage()
                                }, 0))
                            })
                        },
                        unqueueMessage: function e() {
                            var t = this.messageQueue.shift();
                            0 === this.messageQueue.length && (this.messageQueueTimer = a.clearInterval(this.messageQueueTimer)), a.location.href = "dmevent://none?" + t
                        },
                        destroy: function e() {
                            a = null, this.messageQueue = [], this.messageQueueTimer = null
                        }
                    }
                }).call(this, n("8oxB"))
            },
            R4kO: function(e, t, n) {
                "use strict";
                (function(e) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function i(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return t.default = e, t
                    }

                    function o(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    t.__esModule = !0, n("MS60");
                    var a = n("cGXy"),
                        l = i(a),
                        u = n("XE2b"),
                        E = n("znKg"),
                        s = r(E),
                        c = n("ztlV"),
                        _ = r(c),
                        d = n("seQv"),
                        f = r(d),
                        p = n("Zrx9"),
                        A = r(p),
                        R = n("i/kS"),
                        D = r(R),
                        T = n("9Bq9"),
                        m = n("dI6/"),
                        S = n("WXR7"),
                        h = r(S),
                        y = n("mNSH"),
                        P = r(y),
                        O = n("ezEM"),
                        I = r(O),
                        N = n("2JqG"),
                        g = r(N),
                        L = n("vGgs"),
                        v = r(L),
                        C = n("ruZz"),
                        b = r(C),
                        M = A.default.get("Bootstrapper"),
                        U = A.default.get("API"),
                        V = function() {
                            function t(e, n) {
                                var r = this;
                                o(this, t), this._rootNode_ = e, D.default.set(this._rootNode_, n), A.default.customConf(D.default.settings("logger")), M.log("Player version:", D.default.context("player_version")), M.groupCollapsed("Starting player bootstrapper..."), M.log("Settings:", D.default.settings()), M.log("Context:", D.default.context()), P.default.defineProperties(this._rootNode_, {
                                    adRunning: {
                                        get: function e() {
                                            return r.adRunning
                                        }
                                    },
                                    autoplay: {
                                        get: function e() {
                                            return r.autoplay
                                        }
                                    },
                                    bufferedTime: {
                                        get: function e() {
                                            return r.bufferedTime
                                        }
                                    },
                                    duration: {
                                        get: function e() {
                                            return r.duration
                                        }
                                    },
                                    ended: {
                                        get: function e() {
                                            return r.ended
                                        }
                                    },
                                    error: {
                                        get: function e() {
                                            return r.error
                                        }
                                    },
                                    paused: {
                                        get: function e() {
                                            return r.paused
                                        }
                                    },
                                    presentationMode: {
                                        get: function e() {
                                            return r.presentationMode
                                        }
                                    },
                                    qualities: {
                                        get: function e() {
                                            return r.qualities
                                        }
                                    },
                                    ready: {
                                        get: function e() {
                                            return r.apiReady
                                        }
                                    },
                                    seeking: {
                                        get: function e() {
                                            return r.seeking
                                        }
                                    },
                                    subtitles: {
                                        get: function e() {
                                            return r.subtitles
                                        }
                                    },
                                    type: {
                                        get: function e() {
                                            return r.type
                                        }
                                    },
                                    video: {
                                        get: function e() {
                                            return r.video
                                        }
                                    },
                                    muted: {
                                        get: function e() {
                                            return r.muted
                                        },
                                        set: function e(t) {
                                            return r.api("muted", t)
                                        }
                                    },
                                    volume: {
                                        get: function e() {
                                            return r.volume
                                        },
                                        set: function e(t) {
                                            return r.api("volume", t)
                                        }
                                    },
                                    currentTime: {
                                        get: function e() {
                                            return r.currentTime
                                        },
                                        set: function e(t) {
                                            return r.api("seek", t)
                                        }
                                    },
                                    quality: {
                                        get: function e() {
                                            return r.quality
                                        },
                                        set: function e(t) {
                                            return r.api("quality", t)
                                        }
                                    },
                                    subtitle: {
                                        get: function e() {
                                            return r.subtitle
                                        },
                                        set: function e(t) {
                                            return r.api("subtitle", t)
                                        }
                                    },
                                    fullscreen: {
                                        get: function e() {
                                            return r.fullscreen
                                        },
                                        set: function e(t) {
                                            return r.api("fullscreen", t)
                                        }
                                    },
                                    controls: {
                                        get: function e() {
                                            return r.controls
                                        },
                                        set: function e(t) {
                                            return r.api("controls", t)
                                        }
                                    },
                                    chromecast: {
                                        get: function e() {
                                            return r.chromecast
                                        },
                                        set: function e(t) {
                                            return r.api("chromecast", t)
                                        }
                                    },
                                    scaleMode: {
                                        get: function e() {
                                            return r.scaleMode
                                        },
                                        set: function e(t) {
                                            return r.api("scaleMode", t)
                                        }
                                    },
                                    api: {
                                        get: function e() {
                                            return function() {
                                                return r.api.apply(r, arguments)
                                            }
                                        }
                                    },
                                    load: {
                                        get: function e() {
                                            return function() {
                                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                                return r.api.apply(r, ["load"].concat(t))
                                            }
                                        }
                                    },
                                    play: {
                                        get: function e() {
                                            return function() {
                                                return r.api("play")
                                            }
                                        }
                                    },
                                    pause: {
                                        get: function e() {
                                            return function() {
                                                return r.api("pause")
                                            }
                                        }
                                    },
                                    togglePlay: {
                                        get: function e() {
                                            return function() {
                                                return r.api("toggle-play")
                                            }
                                        }
                                    },
                                    seek: {
                                        get: function e() {
                                            return function() {
                                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                                return r.api.apply(r, ["seek"].concat(t))
                                            }
                                        }
                                    },
                                    mute: {
                                        get: function e() {
                                            return function() {
                                                return r.api("mute")
                                            }
                                        }
                                    },
                                    unmute: {
                                        get: function e() {
                                            return function() {
                                                return r.api("unmute")
                                            }
                                        }
                                    },
                                    toggleMuted: {
                                        get: function e() {
                                            return function() {
                                                return r.api("toggle-muted")
                                            }
                                        }
                                    },
                                    watchOnSite: {
                                        get: function e() {
                                            return function() {
                                                return r.api("watch-on-site")
                                            }
                                        }
                                    },
                                    setProp: {
                                        get: function e() {
                                            return function() {
                                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                                return r.api.apply(r, ["set-prop"].concat(t))
                                            }
                                        }
                                    },
                                    notifyFullscreenChanged: {
                                        get: function e() {
                                            return function() {
                                                return r.api("notifyFullscreenChanged")
                                            }
                                        }
                                    },
                                    notifyWatchLaterChanged: {
                                        get: function e() {
                                            return function() {
                                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                                return r.api.apply(r, ["notifyWatchLaterChanged"].concat(t))
                                            }
                                        }
                                    },
                                    notifyLikeChanged: {
                                        get: function e() {
                                            return function() {
                                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                                return r.api.apply(r, ["notifyLikeChanged"].concat(t))
                                            }
                                        }
                                    },
                                    catchUserAction: {
                                        get: function e() {
                                            return function() {
                                                return h.default.catchUserAction(r._rootNode_, r._rootNode_.querySelector("#dmp_Video"))
                                            }
                                        }
                                    }
                                }), I.default.emulateAddEventListenerOn(this._rootNode_), D.default.settings("api") ? (M.log("Initializing player API"), this.playerApi = new _.default) : M.log("Player API disabled"), b.default.inject().then(function(e) {
                                    var t = e.playerInstance,
                                        n = e.type;
                                    g.default.setPlayerType(n), r.playerDispatcher = (0, T.createDispatcher)(r, t), r.playerDispatcher.bindPlayerEventListeners(), f.default.init(t), "html5" === n && v.default.init(t), r.type = n, M.groupEnd()
                                })
                            }
                            return t.initClass = function e() {
                                this.prototype.started = !1, this.prototype.ended = !1, this.prototype.muted = !1, this.prototype.volume = 1, this.prototype.paused = !0, this.prototype.type = null, this.prototype.apiReady = !1, this.prototype.autoplay = !1, this.prototype.currentTime = 0, this.prototype.bufferedTime = 0, this.prototype.duration = NaN, this.prototype.seeking = !1, this.prototype.error = null, this.prototype.fullscreen = !1, this.prototype.chromecast = !1, this.prototype.controls = null, this.prototype.adRunning = !1, this.prototype.qualities = [], this.prototype.quality = null, this.prototype.subtitles = [], this.prototype.subtitle = null, this.prototype.presentationMode = "inline", this.prototype.scaleMode = "fit", this.prototype.video = null
                            }, t.prototype.rootNode = function e() {
                                return this._rootNode_
                            }, t.prototype.dispatchFromPlayer = function t(n, r) {
                                var i = this;
                                e.nextTick(function() {
                                    -1 === ["ad_timeupdate", "timeupdate", "progress"].indexOf(n.name) && M.log(">>> dispatchEvent", n.name), I.default.dispatchEvent(i._rootNode_, n.name, r)
                                }), n.isPublic && null != this.playerApi && (-1 === ["ad_timeupdate", "timeupdate", "progress"].indexOf(n.name) && U.log("<", n.name, r), this.playerApi.postMessage(n.name, r)), null != n.deprecated && this.dispatchFromPlayer({
                                    name: n.deprecated,
                                    isPublic: n.isPublic
                                }, r)
                            }, t.prototype.triggerToPlayer = function e(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                n.interactionType = l.API, this.playerDispatcher.triggerToPlayer(t, n)
                            }, t.prototype.getAPIWarnNotRecommendedError = function e(t) {
                                var n = void 0;
                                switch (t) {
                                    case "play":
                                    case "toggle-play":
                                        n = "autoplay";
                                        break;
                                    case "seek":
                                        n = "start";
                                        break;
                                    case "quality":
                                        n = "quality";
                                        break;
                                    case "muted":
                                    case "toggle-muted":
                                        n = "muted";
                                        break;
                                    default:
                                        n = !1
                                }
                                return {
                                    method: t,
                                    parameter: n
                                }
                            }, t.prototype.reset = function e() {
                                this.ended = !1, this.currentTime = 0, this.bufferedTime = 0, this.duration = NaN, this.seeking = !1, this.adRunning = !1, this.qualities = [], this.quality = null, this.subtitles = [], this.subtitle = null, this.video = null
                            }, t.prototype.api = function e(t, n, r) {
                                var i = void 0;
                                if (this.apiReady) switch (!this.started && (i = this.getAPIWarnNotRecommendedError(t)).parameter && this.triggerToPlayer(s.default.ERROR_PLAYER, (0, m.createError)({
                                    code: u.API_WARN_NOT_RECOMMENDED,
                                    extra: i,
                                    message: t
                                })), "volume" !== t && "seek" !== t || (n = parseFloat(n)), -1 !== ["fullscreen", "muted", "controls", "notifyWatchLaterChanged", "notifyLikeChanged", "chromecast"].indexOf(t) && (n = "1" === n || 1 === n || "true" === n || !0 === n), U.log(">", t, n, r), t) {
                                    case "play":
                                        this.triggerToPlayer(s.default.PLAY_REQUESTED);
                                        break;
                                    case "pause":
                                        this.triggerToPlayer(s.default.PAUSE_REQUESTED);
                                        break;
                                    case "volume":
                                        this.triggerToPlayer(s.default.VOLUME_CHANGE_REQUESTED, {
                                            volume: n
                                        });
                                        break;
                                    case "seek":
                                        this.triggerToPlayer(s.default.SEEK_REQUESTED, {
                                            time: n
                                        });
                                        break;
                                    case "toggle-play":
                                        this.triggerToPlayer(s.default.TOGGLE_PLAYBACK_REQUESTED);
                                        break;
                                    case "toggle-muted":
                                        this.api("muted", !this.muted);
                                        break;
                                    case "toggle-controls":
                                        this.api("controls", !this.controls);
                                        break;
                                    case "mute":
                                        this.api("muted", !0);
                                        break;
                                    case "unmute":
                                        this.api("muted", !1);
                                        break;
                                    case "muted":
                                        this.triggerToPlayer(s.default.VOLUME_CHANGE_REQUESTED, {
                                            muted: n
                                        });
                                        break;
                                    case "fullscreen":
                                        n !== this.fullscreen && this.triggerToPlayer(s.default.FULLSCREEN_TOGGLE_REQUESTED);
                                        break;
                                    case "chromecast":
                                        this.chromecast = n, this.triggerToPlayer(s.default.CHROMECAST_CHANGE_REQUESTED, {
                                            chromecast: n
                                        });
                                        break;
                                    case "controls":
                                        this.triggerToPlayer(s.default.CONTROLS_CHANGE_REQUESTED, {
                                            controls: n
                                        });
                                        break;
                                    case "scaleMode":
                                        this.triggerToPlayer(s.default.SCALE_MODE_CHANGE_REQUESTED, {
                                            scaleMode: n
                                        });
                                        break;
                                    case "quality":
                                        var o = "default" === n ? {
                                            adaptive: !0,
                                            qualityName: "480"
                                        } : {
                                            adaptive: !1,
                                            qualityName: n
                                        };
                                        this.triggerToPlayer(s.default.QUALITY_CHANGE_REQUESTED, o);
                                        break;
                                    case "subtitle":
                                        this.triggerToPlayer(s.default.SUBTITLE_CHANGE_REQUESTED, {
                                            code: n
                                        });
                                        break;
                                    case "load":
                                        this.triggerToPlayer(s.default.LOAD_VIDEO, null != r ? {
                                            xid: n,
                                            settings: r
                                        } : {
                                            xid: n
                                        });
                                        break;
                                    case "watch-on-site":
                                        this.triggerToPlayer(s.default.WATCH_ON_SITE_REQUESTED);
                                        break;
                                    case "--api-warning":
                                        null != n.deprecated && "postMessage" === n.mode ? this.triggerToPlayer(s.default.ERROR_PLAYER, (0, m.createError)({
                                            code: u.API_WARN_DEPRECATED_POSTMESSAGE,
                                            extra: {
                                                mode: n
                                            },
                                            message: n.method
                                        })) : M.warn("Unhandled API warning: " + t);
                                        break;
                                    case "set-prop":
                                        this.triggerToPlayer(s.default.API_SET_PROP, {
                                            prop: n,
                                            value: r
                                        });
                                        break;
                                    case "notifyFullscreenChanged":
                                        this.triggerToPlayer(s.default.NOTIFY_FULLSCREEN_CHANGED);
                                        break;
                                    case "notifyWatchLaterChanged":
                                        this.triggerToPlayer(s.default.WATCH_LATER_CHANGED, {
                                            state: n
                                        });
                                        break;
                                    case "notifyLikeChanged":
                                        this.triggerToPlayer(s.default.LIKE_CHANGED, {
                                            state: n
                                        });
                                        break;
                                    default:
                                        this.triggerToPlayer(s.default.ERROR_PLAYER, (0, m.createError)({
                                            code: u.API_ERR_UNKNOWN_METHOD,
                                            extra: {
                                                method: t
                                            },
                                            message: t
                                        })), M.error("Invalid API method: " + t)
                                } else window.console && window.console.error && "function" == typeof window.console.error && window.console.error(u.API_ERR_PLAYER_NOT_READY + " : Dailymotion player is not ready yet.\n          You should wait for the `apiready` event before calling `" + t + "(" + (n || "") + ")` method.\n          See: https://developer.dailymotion.com/player#player-api-events")
                            }, t
                        }();
                    V.initClass(), t.default = V
                }).call(this, n("8oxB"))
            },
            WXR7: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = {
                    catchUserAction: function e(t, n) {
                        if (void 0 === t) throw new Error("`catchUserAction()` can not be called without a rootNode element");
                        if (void 0 === n) throw new Error("`catchUserAction()` can not be called without a videoTag element");
                        if ("1" !== t.getAttribute("data-got-user-action") && "function" == typeof n.play && "function" == typeof n.pause) {
                            var r = n.paused,
                                i = n.play();
                            t.setAttribute("data-got-user-action", "1"), void 0 !== i && "function" == typeof i.catch && i.catch(function() {}), r && n.pause()
                        }
                    }
                }
            },
            XE2b: function(e, t, n) {
                "use strict";

                function r(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }

                function i(e) {
                    return void 0 !== E[e]
                }

                function o(e) {
                    return i(e) ? e : E.PLAYER_ERR_UNKNOWN
                }

                function a(e) {
                    switch (e.code) {
                        case e.MEDIA_ERR_ABORTED:
                            return E.MEDIA_ERR_ABORTED;
                        case e.MEDIA_ERR_NETWORK:
                            return E.MEDIA_ERR_NETWORK;
                        case e.MEDIA_ERR_DECODE:
                            return E.MEDIA_ERR_DECODE;
                        case e.MEDIA_ERR_SRC_NOT_SUPPORTED:
                            return E.MEDIA_ERR_SRC_NOT_SUPPORTED;
                        default:
                            return E.PLAYER_ERR_UNKNOWN
                    }
                }

                function l(e) {
                    return s.includes(e)
                }
                t.__esModule = !0;
                var u = n("XbsG");
                Object.keys(u).forEach(function(e) {
                    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: function t() {
                            return u[e]
                        }
                    })
                }), t.exists = i, t.getCode = o, t.mediaErrorCodeToString = a, t.isDiscarded = l;
                var E = r(u),
                    s = [E.MEDIA_ERR_ABORTED, E.AD_DIRECTOR_XHR_CALL_FAILED, E.AD_DIRECTOR_INVALID_VMAP, E.API_ERR_UNKNOWN_METHOD, E.API_ERR_PLAYER_NOT_READY, E.API_WARN_DEPRECATED_POSTMESSAGE, E.API_WARN_NOT_RECOMMENDED, E.FBAN_ERR_MISSING_PLACEMENT_ID, E.FBAN_ERR_UNEXPECTED, E.PLAYER_ERR_VR360_NOT_AVAILABLE]
            },
            XbsG: function(e, t, n) {
                "use strict";
                t.__esModule = !0;
                var r = t.DM001 = "DM001",
                    i = t.DM002 = "DM002",
                    o = t.DM003 = "DM003",
                    a = t.DM004 = "DM004",
                    l = t.DM005 = "DM005",
                    u = t.DM006 = "DM006",
                    E = t.DM007 = "DM007",
                    s = t.DM008 = "DM008",
                    c = t.DM009 = "DM009",
                    _ = t.DM010 = "DM010",
                    d = t.DM011 = "DM011",
                    f = t.DM012 = "DM012",
                    p = t.DM013 = "DM013",
                    A = t.DM014 = "DM014",
                    R = t.DM015 = "DM015",
                    D = t.DM016 = "DM016",
                    T = t.DM017 = "DM017",
                    m = t.DM018 = "DM018",
                    S = t.AD_DIRECTOR_INVALID_VMAP = "AD_DIRECTOR_INVALID_VMAP",
                    h = t.AD_DIRECTOR_XHR_CALL_FAILED = "AD_DIRECTOR_XHR_CALL_FAILED",
                    y = t.API_ERR_PLAYER_NOT_READY = "API_ERR_PLAYER_NOT_READY",
                    P = t.API_ERR_UNKNOWN_METHOD = "API_ERR_UNKNOWN_METHOD",
                    O = t.API_WARN_DEPRECATED_POSTMESSAGE = "API_WARN_DEPRECATED_POSTMESSAGE",
                    I = t.API_WARN_NOT_RECOMMENDED = "API_WARN_NOT_RECOMMENDED",
                    N = t.FBAN_ERR_MISSING_PLACEMENT_ID = "FBAN_ERR_MISSING_PLACEMENT_ID",
                    g = t.FBAN_ERR_UNEXPECTED = "FBAN_ERR_UNEXPECTED",
                    L = t.MEDIA_ERR_ABORTED = "MEDIA_ERR_ABORTED",
                    v = t.MEDIA_ERR_DECODE = "MEDIA_ERR_DECODE",
                    C = t.MEDIA_ERR_NETWORK = "MEDIA_ERR_NETWORK",
                    b = t.MEDIA_ERR_SRC_NOT_SUPPORTED = "MEDIA_ERR_SRC_NOT_SUPPORTED",
                    M = t.PLAYER_ERR_CDN_RESOLVER_FAILED = "PLAYER_ERR_CDN_RESOLVER_FAILED",
                    U = t.PLAYER_ERR_CHUNK_LOADING_FAILED = "PLAYER_ERR_CHUNK_LOADING_FAILED",
                    V = t.PLAYER_ERR_DEVICE_NOT_SUPPORTED = "PLAYER_ERR_DEVICE_NOT_SUPPORTED",
                    w = t.PLAYER_ERR_NO_STREAM = "PLAYER_ERR_NO_STREAM",
                    G = t.PLAYER_ERR_STREAM_BLOCKED = "PLAYER_ERR_STREAM_BLOCKED",
                    H = t.PLAYER_ERR_UNEXPECTED = "PLAYER_ERR_UNEXPECTED",
                    F = t.PLAYER_ERR_UNKNOWN = "PLAYER_ERR_UNKNOWN",
                    x = t.PLAYER_ERR_VIDEO_NOT_SUPPORTED = "PLAYER_ERR_VIDEO_NOT_SUPPORTED",
                    Q = t.PLAYER_ERR_VR360_NOT_AVAILABLE = "PLAYER_ERR_VR360_NOT_AVAILABLE",
                    Y = t.PLAYER_ERR_XHR_CALL_FAILED = "PLAYER_ERR_XHR_CALL_FAILED",
                    k = t.PLAYER_PAYMENT_TYPE_NOT_SUPPORTED = "PLAYER_PAYMENT_TYPE_NOT_SUPPORTED",
                    B = t.PRIVATE_VIDEOS_NOT_SUPPORTED = "PRIVATE_VIDEOS_NOT_SUPPORTED",
                    W = t.QUALITY_SWITCHER_ERROR = "QUALITY_SWITCHER_ERROR"
            },
            ajXv: function(e, t, n) {
                "use strict";
                t.__esModule = !0;
                var r = null,
                    i = {
                        log: function e(t, n) {
                            "function" == typeof r && r(t, n)
                        },
                        setCallback: function e(t) {
                            r = t
                        }
                    };
                t.default = i
            },
            cGXy: function(e, t, n) {
                "use strict";
                t.__esModule = !0;
                var r = t.USER = "user",
                    i = t.API = "api",
                    o = t.PROGRAMMATIC = "programmatic",
                    a = [r, i, o],
                    l = t.exists = function e(t) {
                        return a.indexOf(t) > -1
                    }
            },
            "dI6/": function(e, t, n) {
                "use strict";

                function r(e) {
                    var t = e.from,
                        n = e.type,
                        r = e.code,
                        l = e.extra,
                        u = e.title,
                        E = e.message;
                    return {
                        from: (0, o.getOrigin)(t),
                        type: (0, a.getType)(n, r),
                        code: (0, i.getCode)(r),
                        extra: l,
                        title: u,
                        message: E
                    }
                }
                t.__esModule = !0, t.createError = r;
                var i = n("XE2b"),
                    o = n("5EtW"),
                    a = n("hzzU")
            },
            eA4M: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function i(e, t) {
                    if (u.Timestamp.saveEnd(u.DMP_CREATE_CALL), u.Timestamp.save(u.PLAYER_CREATION), s.default.isPerfMarkMeasureEnabled() && (performance.measure("request-response", "requestStart", "responseStart"), performance.measure("response to boot start time", "responseStart", "bootstrapper definition start")), "string" == typeof e && (e = document.getElementById(e)), 1 !== (null !== e ? e.nodeType : void 0)) throw new Error("Invalid first argument sent to DM.player(), requires a HTML element or element id: " + e);
                    if (null === t || "object" !== (void 0 === t ? "undefined" : l(t))) throw new Error("Missing `config` parameter for DM.player()");
                    return (0, d.installRequiredFeatures)(function() {
                        var r = n("R4kO").default;
                        new r(e, t)
                    }), e
                }

                function o(e) {
                    _.default.setCallback(e)
                }

                function a() {
                    return f.video.mp4H264
                }
                t.__esModule = !0;
                var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                t.create = i, t.onAdLog = o, t.isHtml5Available = a;
                var u = n("hHG0"),
                    E = n("i/kS"),
                    s = r(E),
                    c = n("ajXv"),
                    _ = r(c),
                    d = n("jAMH"),
                    f = n("6YTB");
                u.Timestamp.saveEnd(u.BOOTSTRAPPER_DEFINITION), u.Timestamp.save(u.DMP_CREATE_CALL), $.ajaxPrefilter(function(e) {
                    e.crossDomain && (e.contents.script = !1)
                })
            },
            ezEM: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.__esModule = !0;
                var i = n("mNSH"),
                    o = r(i);
                t.default = {
                    _EVENT_HANDLERS: {},
                    emulateAddEventListenerOn: function e(t) {
                        var n = this;
                        !t.addEventListener && t.attachEvent && o.default.defineProperty(t, "addEventListener", {
                            get: function e() {
                                return function(e, r, i) {
                                    "on" + e in t ? t.attachEvent("on" + e, r, i) : (e in n._EVENT_HANDLERS || (n._EVENT_HANDLERS[e] = []), n._EVENT_HANDLERS[e].push(r))
                                }
                            }
                        })
                    },
                    dispatchEvent: function e(t, n, r) {
                        var i = void 0,
                            o = o || {
                                bubbles: !1,
                                cancelable: !1,
                                detail: r
                            };
                        if ("function" == typeof CustomEvent) i = new CustomEvent(n, o);
                        else if (document.createEvent) try {
                            i = document.createEvent("CustomEvent"), i.initCustomEvent(n, o.bubbles, o.cancelable, o.detail)
                        } catch (e) {
                            i = document.createEvent("Event"), i.initEvent(n, o.bubbles, o.cancelable)
                        } else i = document.createEventObject(), i.eventType = n, i.detail = o.detail;
                        t.dispatchEvent ? t.dispatchEvent(i) : t.fireEvent && ("on" + n in t ? t.fireEvent("on" + n, i) : n in this._EVENT_HANDLERS && Array.from(this._EVENT_HANDLERS[n]).map(function(e) {
                            return e(n)
                        }))
                    }
                }
            },
            hHG0: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var i;
                t.__esModule = !0, t.Timestamp = t.VIDEO_SELECTED_TO_TIMEUPDATE_FIRST = t.VIDEO_SELECTED_TO_PLAYBACK_READY = t.HLS_MANIFEST_SECOND_CALL = t.HLS_MANIFEST_FIRST_CALL = t.AD_DIRECTOR_RESPONSE_TIME = t.AUTOPLAY_RESOLUTION = t.CONFIG_METADATA_LOAD = t.PLAYER_CREATION = t.DMP_CREATE_CALL = t.BOOTSTRAPPER_DEFINITION = void 0;
                var o = n("MS60"),
                    a = r(o),
                    l = n("i/kS"),
                    u = r(l),
                    E = a.default.get("Timestamp"),
                    s = t.BOOTSTRAPPER_DEFINITION = "bootstrapper definition",
                    c = t.DMP_CREATE_CALL = "dmp create call",
                    _ = t.PLAYER_CREATION = "player creation",
                    d = t.CONFIG_METADATA_LOAD = "config metadata load",
                    f = t.AUTOPLAY_RESOLUTION = "autoplay resolution",
                    p = t.AD_DIRECTOR_RESPONSE_TIME = "ad director response time",
                    A = t.HLS_MANIFEST_FIRST_CALL = "hls manifest first call",
                    R = t.HLS_MANIFEST_SECOND_CALL = "hls manifest second call",
                    D = t.VIDEO_SELECTED_TO_PLAYBACK_READY = "video selected to playback ready",
                    T = t.VIDEO_SELECTED_TO_TIMEUPDATE_FIRST = "video selected to timeupdate first",
                    m = (i = {}, i[s] = u.default.window().dmp_start_time, i),
                    S = {},
                    h = 6e4,
                    y = t.Timestamp = {
                        save: function e(t) {
                            m[t] = performance.now(), u.default.isPerfMarkMeasureEnabled() && performance.mark(t + " start")
                        },
                        saveEnd: function e(t) {
                            if (m[t]) {
                                if (S[t] = performance.now() - m[t], delete m[t], E.log(t + ": took " + Math.round(S[t]) + " ms"), u.default.isPerfMarkMeasureEnabled()) {
                                    performance.mark(t + " end");
                                    try {
                                        performance.measure(t, t + " start", t + " end")
                                    } catch (e) {
                                        E.warn(e)
                                    }
                                }
                            } else E.warn("Can't compute timestamp '" + t + "'. Call Timestamp.save('" + t + "') before")
                        },
                        hasSavedStart: function e(t) {
                            return m[t]
                        },
                        timeElapsed: function e(t) {
                            return void 0 !== S[t] ? Math.min(Math.round(S[t]), 6e4) : (E.error("No time elapsed for timestamp '" + t + "'. Call save('" + t + "') / saveEnd('" + t + "') before"), -1)
                        },
                        safeDiff: function e(t, n, r) {
                            return null == t || null == n || t > n ? null : Math.min(Math.round(n - t), r)
                        },
                        promiseTimeElapsed: function e(t) {
                            var n = t.promise,
                                r = t.label;
                            return y.save(r), n.then(function(e) {
                                return y.saveEnd(r), e
                            }, function(e) {
                                throw y.saveEnd(r), e
                            })
                        }
                    }
            },
            hzzU: function(e, t, n) {
                "use strict";

                function r(e) {
                    return ~[a, l, u, E].indexOf(e)
                }

                function i(e, t) {
                    if (r(e)) return e;
                    switch (t) {
                        case o.DM003:
                        case o.DM018:
                            return a;
                        default:
                            return E
                    }
                }
                t.__esModule = !0, t.UNKNOWN = t.PASSWORD_PROTECTED = t.MEDIA = t.LIVE = void 0, t.exists = r, t.getType = i;
                var o = n("XE2b"),
                    a = t.LIVE = "LIVE",
                    l = t.MEDIA = "MEDIA",
                    u = t.PASSWORD_PROTECTED = "password_protected",
                    E = t.UNKNOWN = "UNKNOWN"
            },
            "i/kS": function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function i(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function o(e) {
                    if (!e.context) throw new Error("context is mandatory");
                    if (!e.settings) throw new Error("settings are mandatory");
                    return -1 === ["postMessage", "nativeBridge", "location"].indexOf(e.settings.api) && (e.settings.api = E.DEFAULT_SETTINGS.api), e.settings.autoplay && void 0 === e.settings.autoplay.enable && !0 === e.settings.autoplay.mute && (e.settings.autoplay = {
                        enable: !0,
                        mute: !0
                    }), e
                }
                t.__esModule = !0;
                var a = n("Hp9M"),
                    l = r(a),
                    u = n("iRXQ"),
                    E = function() {
                        function e() {
                            i(this, e), this.reset()
                        }
                        return e.initClass = function e() {
                            this.DEFAULT_CONTEXT = {
                                device: null,
                                init_start_time: (new Date).getTime(),
                                translations: {},
                                v1st: null,
                                advertising: {
                                    stack: "dm"
                                }
                            }, this.DEFAULT_SETTINGS = {
                                advertising: {
                                    enable: !0
                                },
                                api: !1,
                                autoplay: {
                                    enable: !1,
                                    mute: !1
                                },
                                chromeless: !1,
                                collections: {
                                    enable: !1
                                },
                                controls: !0,
                                chromecast: {
                                    action: "use_built_in"
                                },
                                shortcuts: !0,
                                expand: {
                                    enable: !1,
                                    state: "normal"
                                },
                                fullscreen: {
                                    enable: !0,
                                    state: "normal",
                                    action: "toggle_fullscreen"
                                },
                                html: null,
                                id: null,
                                like: {
                                    enable: !1
                                },
                                locale: "en",
                                logger: !1,
                                ui: {
                                    highlight: null,
                                    logo: !0,
                                    start_screen_info: !0
                                },
                                mute: !1,
                                mse: !0,
                                nativeui: !1,
                                quality: null,
                                reporting: {
                                    enable: !0,
                                    estat: {
                                        enable: !0
                                    },
                                    xiti: {
                                        enable: !0
                                    }
                                },
                                sharing: {
                                    enable: !0
                                },
                                theme: null,
                                watchlater: {
                                    enable: !1
                                }
                            }
                        }, e.prototype.reset = function t() {
                            this._context = $.extend(!0, {}, e.DEFAULT_CONTEXT), this._settings = $.extend(!0, {}, e.DEFAULT_SETTINGS), this._metadata = {}, this._queue = {}, this._rootNode = null, this._isConfigSet = !1, this._externalNeonInfo = {
                                info: {}
                            }
                        }, e.prototype.set = function e(t, n) {
                            if (this._isConfigSet) throw new Error("Config already set, cannot modify it.");
                            this._rootNode = t, n = o(n), $.extend(!0, this._context, n.context), $.extend(!0, this._settings, n.settings), $.extend(!0, this._metadata, n.metadata), $.extend(!0, this._queue, n.queue), this._context.v1st || (this._context.v1st = l.default.get("v1st") || null), this._isConfigSet = !0
                        }, e.prototype.get = function e(t) {
                            return void 0 === t ? {
                                context: this._context,
                                settings: this._settings,
                                metadata: this._metadata,
                                queue: this._queue
                            } : (Array.isArray(t) || (t = t.split(".")), -1 !== ["context", "settings", "metadata"].indexOf(t[0]) ? this[t.shift()](t) : t in this._context ? this._context[t] : t in this._settings ? this._settings[t] : t in this._metadata ? this._metadata[t] : void 0)
                        }, e.prototype.context = function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                            return this._recursiveLookupProperty(t, this._context, n)
                        }, e.prototype.settings = function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                            return this._recursiveLookupProperty(t, this._settings, n)
                        }, e.prototype.metadata = function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                            return this._recursiveLookupProperty(t, this._metadata, n)
                        }, e.prototype.queue = function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                            return this._recursiveLookupProperty(t, this._queue, n)
                        }, e.prototype._recursiveLookupProperty = function e(t, n) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                            if ("string" == typeof t && (t = t.split(".")), null == t || 0 === t.length) return n;
                            if (t.length > 1) {
                                var i = t.shift();
                                return null != n[i] ? this._recursiveLookupProperty(t, n[i], r) : r
                            }
                            return null != n[t[0]] ? n[t[0]] : r
                        }, e.prototype.updateMetadata = function e(t) {
                            this._metadata = t
                        }, e.prototype.errorState = function e(t) {
                            this._context.error = t
                        }, e.prototype.isGKEnabled = function e(t) {
                            var n = this.context("gatekeepers", []);
                            return -1 !== n.indexOf(t)
                        }, e.prototype.isLiveStatusEnabled = function e() {
                            return !0
                        }, e.prototype.isVR360Enabled = function e() {
                            return null != this.metadata("vr", null)
                        }, e.prototype.isDVREnabled = function e() {
                            return this.metadata("live_dvr_window", 0) > 0
                        }, e.prototype.isVideoSeekable = function e() {
                            return !("live" === this.metadata("stream_type") && 0 === this.metadata("live_dvr_window", 0))
                        }, e.prototype.isAdPauseEnable = function e() {
                            return this.isGKEnabled("PV5_AD_PAUSE") && "inline" === this.context("integration") && "desktop" === this.context("device.type")
                        }, e.prototype.isDailymotionNativeApp = function e() {
                            var t = this.context("is_native_app", null);
                            return null === t ? 0 === this.context("client_embedder").search(/^com\.dailymotion\./) : t && this.context("onsite")
                        }, e.prototype.isAdStackIMA = function e() {
                            return "ima" === this.context("advertising.stack") || this.metadata("advertising.ima.url")
                        }, e.prototype.isPerfMarkMeasureEnabled = function e() {
                            return performance.mark && performance.measure && (this.window().location.search.indexOf("logger=") > -1 || this.window().location.search.indexOf("perf=1") > -1)
                        }, e.prototype.getTopDomain = function e() {
                            var t = "";
                            try {
                                if ("" === window.top.location.href) throw new Error("top location not available");
                                t = window.top.location.href
                            } catch (e) {
                                var n = window.location.ancestorOrigins;
                                n && n.length > 0 && (t = n[n.length - 1])
                            }
                            if ("" !== t) {
                                var r = (0, u.parse)(t);
                                t = r.hostname
                            }
                            return t
                        }, e.prototype.getEmbedder = function e() {
                            return this.context("embedder", null)
                        }, e.prototype.getReferer = function e() {
                            return this.context("referer", null)
                        }, e.prototype.isOnsite = function e() {
                            return this.context("onsite")
                        }, e.prototype.setExternalNeonInfo = function e(t) {
                            this._externalNeonInfo = t
                        }, e.prototype.getExternalNeonInfo = function e() {
                            return this._externalNeonInfo
                        }, e.prototype.hasMetadata = function e() {
                            return 0 !== Object.keys(this._metadata).length
                        }, e.prototype.rootNode = function e() {
                            return this._rootNode
                        }, e.prototype.window = function(e) {
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }(function() {
                            return window
                        }), e.prototype.document = function(e) {
                            function t() {
                                return e.apply(this, arguments)
                            }
                            return t.toString = function() {
                                return e.toString()
                            }, t
                        }(function() {
                            return document
                        }), e
                    }();
                E.initClass(), t.default = new E
            },
            iRXQ: function(e, t, n) {
                "use strict";

                function r(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }

                function i(e) {
                    return Array.isArray(e) ? e : Array.from(e)
                }

                function o(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function a(e) {
                    var t = e.match(_);
                    if (t) {
                        var n = i(t),
                            o = n.slice(1);
                        return new(Function.prototype.bind.apply(d, [null].concat(r(o))))
                    }
                    return null
                }

                function l() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = {};
                    if ("" === e) return n;
                    var r = e.substring(1).split(/[;&]/);
                    return r.forEach(function(e) {
                        e = e.split("=");
                        var r = decodeURIComponent(e[0]),
                            i = decodeURIComponent(e[1]);
                        !0 === t ? n[r] = i : (n[r] || (n[r] = []), n[r].push(i))
                    }), n
                }

                function u(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = document.createElement("a");
                    return r.href = e, n && r.hash ? e = e.substr(0, e.indexOf("#")) + (r.search.length ? "&" : "?") + t + r.hash : e += (r.search.length ? "&" : "?") + t, r.href = "", e
                }

                function E(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return Object.entries(t).filter(function(e) {
                        var t = s(e, 2),
                            n = t[1];
                        return null != n
                    }).reduce(function(e, t) {
                        var r = s(t, 2),
                            i = r[0],
                            o = r[1];
                        return u(e, i + "=" + encodeURIComponent(o), n)
                    }, e)
                }
                n.r(t), n.d(t, "parse", function() {
                    return a
                }), n.d(t, "parseQueryString", function() {
                    return l
                }), n.d(t, "appendQueryStringParameter", function() {
                    return u
                }), n.d(t, "appendEncodedQueryParameters", function() {
                    return E
                });
                var s = function() {
                        function e(e, t) {
                            var n = [],
                                r = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var a = e[Symbol.iterator](), l; !(r = (l = a.next()).done) && (n.push(l.value), !t || n.length !== t); r = !0);
                            } catch (e) {
                                i = !0, o = e
                            } finally {
                                try {
                                    !r && a.return && a.return()
                                } finally {
                                    if (i) throw o
                                }
                            }
                            return n
                        }
                        return function(t, n) {
                            if (Array.isArray(t)) return t;
                            if (Symbol.iterator in Object(t)) return e(t, n);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                    }(),
                    c = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    _ = new RegExp(/^(?:(https?:)\/\/(([^:\/]+)(:[^\/]+)?))?([^#?]*)(\\?[^#]*)?(#.*)?$/),
                    d = function() {
                        function e(t, n, r, i) {
                            var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                                l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "",
                                u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "";
                            o(this, e), this.protocol = t, this.host = n, this.hostname = r, this.port = i, this.pathname = a, this.search = l, this.hash = u, this.href = this.protocol ? this.protocol + "//" + this.host + this.pathname + this.search + this.hash : this.host ? "//" + this.host + this.pathname + this.search + this.hash : this.pathname + this.search + this.hash
                        }
                        return c(e, [{
                            key: "params",
                            value: function e(t) {
                                return null == this._params && (this._params = l(this.search)), t ? this._params[t] ? this._params[t][0] : null : this._params
                            }
                        }]), e
                    }()
            },
            jAMH: function(e, t, n) {
                "use strict";

                function r() {
                    var e = Array.prototype,
                        t = e.find,
                        n = e.findIndex,
                        r = e.includes,
                        i = Array.from,
                        o = Number.isInteger,
                        a = Object.assign,
                        l = Object.entries,
                        u = window,
                        E = u.Promise,
                        s = u.Set;
                    return t && n && r && i && o && a && l && E && E.prototype.finally && s
                }

                function i(e) {
                    if (r()) e();
                    else {
                        var t = document.createElement("script");
                        t.src = n.p + "dmp.polyfill.97c53d8ff1fbd366de76.js", t.onload = e, document.head.appendChild(t)
                    }
                }

                function o(e) {
                    "function" != typeof window.IntersectionObserver ? n.e("intersection-observer").then(n.t.bind(null, "Wr5T", 7)).then(e) : e()
                }
                t.__esModule = !0;
                var a = t.installRequiredFeatures = function e(t) {
                    i(function() {
                        o(t)
                    })
                }
            },
            leIk: function(e, t, n) {
                "use strict";
                n.d(t, "a", function() {
                    return _
                }), n.d(t, "c", function() {
                    return f
                }), n.d(t, "d", function() {
                    return T
                }), n.d(t, "e", function() {
                    return m
                }), n.d(t, "b", function() {
                    return S
                });
                var r = n("8yjK"),
                    i = n("i/kS"),
                    o = n.n(i),
                    a = n("Hp9M"),
                    l = n.n(a),
                    u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    E = "consent",
                    s = "/",
                    c = !1,
                    _ = function e() {
                        c = !1
                    },
                    d = function e() {
                        var t = l.a.get("consent");
                        if (t && t.length > 0) try {
                            var n = JSON.parse(t);
                            if ("object" === (void 0 === n ? "undefined" : u(n))) return n
                        } catch (e) {
                            return null
                        }
                        return null
                    },
                    f = function e() {
                        return !!c || Boolean(d())
                    },
                    p = {
                        storage: r.k,
                        ad: r.g,
                        audience: r.i,
                        xp: r.h,
                        perso: r.j
                    },
                    A = function e(t) {
                        return p[t]
                    },
                    R = function e(t, n) {
                        var r = {};
                        return Object.keys(p).forEach(function(e) {
                            r[e] = t.indexOf(A(e)) > -1
                        }), 1 === n && (delete r.storage, delete r.perso), r
                    },
                    D = function e(t) {
                        var n = [];
                        return t && Object.keys(p).forEach(function(e) {
                            t[e] && n.push(A(e))
                        }), n.sort()
                    },
                    T = function e() {
                        var t = d();
                        return t ? {
                            version: t.v,
                            creationDate: new Date(1e3 * t.ts),
                            allowedPurposeIds: D(t.consent),
                            allowedVendorIds: []
                        } : {}
                    },
                    m = function e(t) {
                        var n = t.cmpVersion,
                            r = t.expirationDate,
                            i = t.allowedPurposeIds;
                        c = !0;
                        var a = {
                                v: n,
                                ts: Math.round((new Date).getTime() / 1e3),
                                consent: R(i, n)
                            },
                            u = {
                                expires: r,
                                domain: o.a.context("cookie_root_domain"),
                                path: "/",
                                secure: !1
                            };
                        l.a.set("consent", JSON.stringify(a), u)
                    },
                    S = function e() {
                        if (f()) {
                            var t = T(),
                                n = t.allowedPurposeIds;
                            return n.indexOf(r.g) > -1 ? "opt-in" : "opt-out"
                        }
                        return "opt-out"
                    }
            },
            mJa9: function(e, t, n) {
                "use strict";
                (function(e) {
                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    t.__esModule = !0;
                    var i = n("Zrx9"),
                        o = r(i),
                        a = n("i/kS"),
                        l = r(a),
                        u = o.default.get("API"),
                        E = null,
                        s = {
                            init: function e() {
                                return E || (E = l.default.window()), E.player = l.default.rootNode(), this
                            },
                            postMessage: function t(n) {
                                e.nextTick(function() {
                                    if (E.dmpNativeBridge && "function" == typeof E.dmpNativeBridge.triggerEvent) E.dmpNativeBridge.triggerEvent(n);
                                    else try {
                                        E.external.notify("dmevent:" + n)
                                    } catch (e) {
                                        u.error("[NativeBridge] Could not find any native bridge object.")
                                    }
                                })
                            },
                            destroy: function e() {
                                E = null
                            }
                        };
                    t.default = s
                }).call(this, n("8oxB"))
            },
            mNSH: function(e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = {
                    defineProperty: function e(t, n, r) {
                        if (Object.defineProperty) try {
                                Object.defineProperty(t, n, r)
                            } catch (e) {} else if (t.__defineGetter__ && t.__defineSetter__) r.get && t.__defineGetter__.call(t, n, r.get), r.set && t.__defineSetter__.call(t, n, r.set);
                            else if ("function" == typeof t.attachEvent) {
                            var i = t[n],
                                o = function e() {
                                    return r.get.apply(t, [i])
                                },
                                a = function e(n) {
                                    i = r.set.apply(t, [n])
                                },
                                l = function e(r) {
                                    r.propertyName === n && (t.detachEvent("onpropertychange", e), a(t[n]), t[n] = o, t[n].toString = o, t.attachEvent("onpropertychange", e))
                                };
                            t[n] = o, t[n].toString = o, t.attachEvent("onpropertychange", l)
                        }
                    },
                    defineProperties: function e(t, n) {
                        if (t !== Object(t)) throw TypeError("Object.defineProperties called on non-object");
                        for (var r in n) {
                            var i = n[r];
                            Object.prototype.hasOwnProperty.call(n, r) && this.defineProperty(t, r, i)
                        }
                        return t
                    }
                }
            },
            ruZz: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function i(e) {
                    d.log("Injecting HTML5 Player..."), l.default.loadPlayer(function() {
                        return e.resolve({
                            playerInstance: $(c.default.rootNode()),
                            type: "html5"
                        })
                    })
                }
                t.__esModule = !0;
                var o = n("XE2b"),
                    a = n("+JeM"),
                    l = r(a),
                    u = n("MS60"),
                    E = r(u),
                    s = n("i/kS"),
                    c = r(s),
                    _ = n("6YTB"),
                    d = E.default.get("Bootstrapper");
                t.default = {
                    html5VideoAvailable: function e() {
                        return _.video.mp4H264
                    },
                    inject: function e() {
                        var t = $.Deferred();
                        return this.html5VideoAvailable() || c.default.errorState(o.PLAYER_ERR_VIDEO_NOT_SUPPORTED), i(t), t.promise()
                    }
                }
            },
            seQv: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.__esModule = !0;
                var i = n("znKg"),
                    o = r(i);
                t.default = {
                    detect: function e() {
                        this.div && 0 !== this.div.innerHTML.length && 0 !== this.div.clientHeight || this.playerEmitter.trigger(o.default.AD_BLOCKER_DETECTED), null != this.div && $.contains(document.body, this.div) && document.body.removeChild(this.div), this.playerEmitter.off(o.default.VIDEO_START, this.boundDetect)
                    },
                    init: function e(t) {
                        this.playerEmitter = t, this.div = document.createElement("div"), this.div.className = "ad_box", this.div.innerHTML = "&nbsp;", this.div.style.position = "absolute", this.div.style.top = 0, this.div.style.left = 0, document.body.appendChild(this.div), this.boundDetect = this.detect.bind(this), this.playerEmitter.on(o.default.VIDEO_START, this.boundDetect)
                    }
                }
            },
            vGgs: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function i() {
                    return new Promise(function(e, t) {
                        var n = d.default.window();
                        n.anPrebidAsyncInit = function() {
                            "function" == typeof n.AudienceNetworkPrebid ? e(n.AudienceNetworkPrebid) : t(new Error("AudienceNetworkPrebid doesn't exists")), n.anPrebidAsyncInit = null
                        }
                    })
                }

                function o() {
                    if (!d.default.isGKEnabled("PV5_LITE_PLAYER")) {
                        var e = d.default.document(),
                            t = "an-prebid",
                            n = e.getElementsByTagName("script")[0];
                        if (!e.getElementById(t)) {
                            var r = e.createElement("script");
                            r.id = t, r.src = "https://connect.facebook.net/en_US/AudienceNetworkPrebidLite.js", R.log("Injecting prebid script"), n.parentNode.insertBefore(r, n)
                        }
                    }
                }

                function a(e, t) {
                    var n = d.default.context("cookie_root_domain"),
                        r = 9e5,
                        i = new Date;
                    i.setTime(i.getTime() + 9e5), R.log("Saving placementID|prebidToken:", e + "|" + t), p.default.set("fban", e + "|" + t, {
                        domain: n,
                        expires: i.toUTCString()
                    })
                }
                t.__esModule = !0;
                var l = n("XE2b"),
                    u = n("znKg"),
                    E = r(u),
                    s = n("Zrx9"),
                    c = r(s),
                    _ = n("i/kS"),
                    d = r(_),
                    f = n("Hp9M"),
                    p = r(f),
                    A = n("dI6/"),
                    R = c.default.get("fban"),
                    D = {
                        init: function e(t) {
                            this.playerEmitter = t, this.boundOnVideoSelected = this.onVideoSelected.bind(this), this.playerEmitter.on(E.default.VIDEO_SELECTED, this.boundOnVideoSelected), this.audienceNetworkPrebidReady = i(), R.log("(early load)"), o()
                        },
                        destroy: function e() {
                            this.playerEmitter.off(E.default.VIDEO_SELECTED, this.boundOnVideoSelected), this.playerEmitter = null, this.boundOnVideoSelected = null, this.audienceNetworkPrebidReady = null
                        },
                        onVideoSelected: function e() {
                            var t = this,
                                n = d.default.metadata("advertising.fb_placement_id", !1);
                            if (!n) return R.warn("Missing placementID"), void this.playerEmitter.trigger(E.default.ERROR_PLAYER, (0, A.createError)({
                                code: l.FBAN_ERR_MISSING_PLACEMENT_ID,
                                message: "Missing placementID"
                            }));
                            this.audienceNetworkPrebidReady.then(function(e) {
                                var t = new e(n);
                                t.getProfile(function(e) {
                                    "nobid" !== e.token ? a(n, e.token) : R.log('Prebid script returned "nobid"')
                                })
                            }).catch(function(e) {
                                R.error(l.FBAN_ERR_UNEXPECTED, e), t.playerEmitter.trigger(E.default.ERROR_PLAYER, (0, A.createError)({
                                    code: l.FBAN_ERR_UNEXPECTED,
                                    message: e.message
                                }))
                            })
                        }
                    };
                t.default = D
            },
            znKg: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                t.__esModule = !0;
                var i = n("7ydS"),
                    o = r(i);
                t.default = (0, o.default)({
                    ACTIVE_ELEMENT_CHANGED: null,
                    ACTIVE_ELEMENT_POINTER_DOWN: null,
                    AD_BLOCKER_DETECTED: null,
                    AD_ERROR: null,
                    AD_FETCH_REQUESTED: null,
                    AD_STACK_ERROR: null,
                    AD_IMPRESSION: null,
                    AD_LINEAR_REQUESTED: null,
                    AD_LINEAR_WILL_START: null,
                    AD_LINEAR_STARTED: null,
                    AD_LINEAR_STOPPED: null,
                    AD_LINEAR_SLOT_ENDED: null,
                    AD_LINEAR_SLOT_STARTED: null,
                    AD_LOADED: null,
                    AD_LOG: null,
                    AD_MANAGER_READY: null,
                    AD_NONLINEAR_SLOT_ENDED: null,
                    AD_NONLINEAR_SLOT_STARTED: null,
                    AD_NONLINEAR_STARTED: null,
                    AD_NONLINEAR_STOPPED: null,
                    AD_NONLINEAR_WILL_START: null,
                    AD_VERTICAL_STARTED: null,
                    AD_VERTICAL_STOPPED: null,
                    AD_VERTICAL_WILL_START: null,
                    AD_SDK_READY: null,
                    AD_VIDEO_COMPLETE: null,
                    AD_VIDEO_SKIPPABLE_REMAINING_TIME: null,
                    AD_VIDEO_SKIPPABLE_STATE: null,
                    AD_VIDEO_START: null,
                    AD_COMPANIONS_RECEIVED: null,
                    ADD_TO_COLLECTION_REQUESTED: null,
                    AIRPLAY_AVAILABLE: null,
                    AIRPLAY_NOT_AVAILABLE: null,
                    AIRPLAY_REQUESTED: null,
                    AIRPLAY_WIRELESS_STATE: null,
                    ALERT_PANE_WILL_CLOSE: null,
                    ALERT_PANE_WILL_OPEN: null,
                    API_SET_PROP: null,
                    AUTOPLAY_RESOLUTION: null,
                    BREAKPOINT_CHANGED: null,
                    CAN_PLAY_ONE_SOURCE: null,
                    CHROMECAST_CHANGE_REQUESTED: null,
                    CHROMECAST_LAUNCH_REQUESTED: null,
                    CHROMECAST_MEDIA_STATUS_UPDATE: null,
                    CHROMECAST_NOT_AVAILABLE: null,
                    CHROMECAST_PREPARE_FOR_REMOTE: null,
                    CHROMECAST_READY: null,
                    CHROMECAST_REMOTE_ENABLED: null,
                    CHROMECAST_REMOTE_SCREEN_DISPLAYED: null,
                    CHROMECAST_REQUESTED: null,
                    CHROMECAST_SESSION_AVAILABLE: null,
                    CHROMECAST_SESSION_CREATED: null,
                    CHROMECAST_SESSION_STOPPED: null,
                    CHROMECAST_USER_CANCEL: null,
                    CLOSE_DRAWER_REQUESTED: null,
                    CLOSE_SHARE_PANE_REQUESTED: null,
                    CLOSE_SHORTCUTS_PANE_REQUESTED: null,
                    COMING_UP_CANCELLED: null,
                    COMPONENTS_READY: null,
                    CONSENT_DIALOG_CLOSED: null,
                    CONTENT_OFFAIR: null,
                    CONTENT_SIZE_CHANGED: null,
                    CONTROL_BAR_UPDATED: null,
                    CONTROLS_WILL_HIDE: null,
                    CONTROLS_WILL_SHOW: null,
                    CONTROLS_CHANGE_REQUESTED: null,
                    CONTROLS_CHANGED: null,
                    COOKIE_SYNC_DONE: null,
                    CUE_ZONE_ENTERED: null,
                    CUE_ZONE_LEFT: null,
                    CUE_ZONE_REGISTER_GROUP: null,
                    CUE_ZONE_UNREGISTER_GROUP: null,
                    DEBUG_UPDATE_REQUESTED: null,
                    DEBUG_UPDATED: null,
                    DISABLE_TOOLTIP_REQUESTED: null,
                    DOCK_UPDATED: null,
                    DRAWER_BUTTON_ENABLED: null,
                    DRAWER_CLOSED: null,
                    DRAWER_ITEM_HIDDEN: null,
                    DRAWER_ITEM_VISIBLE: null,
                    DRAWER_OPENED: null,
                    DRAWER_UPDATED: null,
                    EMBED_REQUESTED: null,
                    ENABLE_TOOLTIP_REQUESTED: null,
                    ERROR_DISPLAY_REQUESTED: null,
                    ERROR_PLAYER: null,
                    EXPAND_PLAYER_SIZE_REQUESTED: null,
                    FAT_UI_TOGGLED: null,
                    FOCUS_FIRST_MENUITEM_REQUESTED: null,
                    FULLSCREEN_BUTTON_ENABLED: null,
                    FULLSCREEN_ENTERED: null,
                    FULLSCREEN_ERROR: null,
                    FULLSCREEN_EXITED: null,
                    FULLSCREEN_SUPPORTED: null,
                    FULLSCREEN_TOGGLE_REQUESTED: null,
                    GESTURE_END: null,
                    GESTURE_START: null,
                    GOT_CONSENT: null,
                    HIDE_FILMSTRIP_REQUESTED: null,
                    HIDE_MENU_REQUESTED: null,
                    HIDE_TOOLTIP_REQUESTED: null,
                    HMR_RELOAD_HIGHLIGHT: null,
                    IMAGE_PRELOAD_ERROR: null,
                    IMAGE_PRELOADED: null,
                    INFO_REQUESTED: null,
                    LIKE_CHANGED: null,
                    LIKE_REQUESTED: null,
                    LIVE_AUDIENCE: null,
                    LIVE_EDGE_DELAY_CHANGED: null,
                    LIVE_STATUS: null,
                    LIVE_DVR_IS_CURRENT_TIME_REQUESTED: null,
                    LIVE_DVR_IS_CURRENT_TIME_DISPATCHED: null,
                    LOAD_VIDEO: null,
                    MENU_DID_HIDE: null,
                    MENU_DID_SHOW: null,
                    MINI_UI_UPDATED: null,
                    MODAL_WILL_CLOSE: null,
                    MODAL_WILL_OPEN: null,
                    MOUSE_ENTERED_PLAYER: null,
                    MOUSE_LEFT_PLAYER: null,
                    MOUSE_MOVED_OVER_PLAYER: null,
                    MOUSE_MOVED_OUTSIDE_PLAYER: null,
                    POINTER_DRAG_START: null,
                    POINTER_DRAGGING: null,
                    POINTER_DRAG_END: null,
                    NOTIFY_FULLSCREEN_CHANGED: null,
                    OPEN_DRAWER_REQUESTED: null,
                    OPEN_SHARE_PANE_REQUESTED: null,
                    PARTNERLOGO_CLICKED: null,
                    PASSWORD_REQUIRED: null,
                    PASSWORD_SUBMITTED: null,
                    PAUSE_REQUESTED: null,
                    PIP_BUTTON_ENABLED: null,
                    PIP_SUPPORTED: null,
                    PLAY_REQUESTED: null,
                    PLAYBACK_READY: null,
                    PLAYER_SIZE_CHANGED: null,
                    SHOW_CURSOR: null,
                    HIDE_CURSOR: null,
                    PREPARE_NEXT_SEQUENCE_STARTED: null,
                    PRESENT_CONTROLS_REQUESTED: null,
                    PRESENTATION_MODE_CHANGED: null,
                    PRESENTATION_MODE_TOGGLE_REQUESTED: null,
                    PRESSED_0: null,
                    PRESSED_1: null,
                    PRESSED_2: null,
                    PRESSED_3: null,
                    PRESSED_4: null,
                    PRESSED_5: null,
                    PRESSED_6: null,
                    PRESSED_7: null,
                    PRESSED_8: null,
                    PRESSED_9: null,
                    PRESSED_COMBO_SHIFT_PA: null,
                    PRESSED_DOWN: null,
                    PRESSED_ENTER: null,
                    PRESSED_ESC: null,
                    PRESSED_F: null,
                    PRESSED_LEFT: null,
                    PRESSED_M: null,
                    PRESSED_QUESTION: null,
                    PRESSED_RIGHT: null,
                    PRESSED_SHIFT_A: null,
                    PRESSED_SHIFT_LEFT: null,
                    PRESSED_SHIFT_P: null,
                    PRESSED_SHIFT_RIGHT: null,
                    PRESSED_SPACE: null,
                    PRESSED_UP: null,
                    QUALITIES_AVAILABLE: null,
                    QUALITY_CHANGE_CONFIRMED: null,
                    QUALITY_CHANGE_REQUESTED: null,
                    QUALITY_CHANGED: null,
                    QUALITY_STATS_REQUESTED: null,
                    QUALITY_STATS_RESPONDED: null,
                    REDUCE_PLAYER_SIZE_REQUESTED: null,
                    REPORT_ISSUE_REQUESTED: null,
                    RETINA_FONT_ENABLED: null,
                    SCHEDULED_CONTENT_PANE_WILL_CLOSE: null,
                    SCHEDULED_CONTENT_PANE_WILL_OPEN: null,
                    SEEK_BAR_BLUR: null,
                    SEEK_BAR_FOCUS: null,
                    SEEK_BAR_IN_PROGRESS: null,
                    SEEK_BAR_INTERACTION_CHANGED: null,
                    SEEK_BAR_MOUSE_MOVE: null,
                    SEEK_BAR_POSITION_UPDATED: null,
                    SEEK_REQUESTED: null,
                    SEQUENCE_ENDED: null,
                    SEQUENCE_READY: null,
                    SEQUENCE_STARTED: null,
                    SHARE_REQUESTED: null,
                    SHARE_PANE_ACTION: null,
                    SHOW_CONSENT_DIALOG: null,
                    SHOW_FILMSTRIP_REQUESTED: null,
                    SHOW_MENU_CONTENT_REQUESTED: null,
                    SHOW_MENU_REQUESTED: null,
                    SHOW_TOOLTIP_REQUESTED: null,
                    SKIP_AD_REQUESTED: null,
                    SPEED_CHANGE_CONFIRMED: null,
                    SPEED_CHANGE_REQUESTED: null,
                    START_VIEW_WILL_CLOSE: null,
                    START_VIEW_WILL_OPEN: null,
                    STAT_INFO_READY: null,
                    STAT_PLUGIN_READY: null,
                    STREAM_TECH_CHANGE: null,
                    SUBTITLE_CHANGE_CONFIRMED: null,
                    SUBTITLE_CHANGE_REQUESTED: null,
                    SUBTITLE_TEXT_UPDATED: null,
                    SUBTITLES_AVAILABLE: null,
                    TOGGLE_DRAWER_REQUESTED: null,
                    TOGGLE_MENU_REQUESTED: null,
                    TOGGLE_PLAYBACK_REQUESTED: null,
                    UP_LEFT: null,
                    UP_RIGHT: null,
                    UPDATE_TOOLTIP_REQUESTED: null,
                    VERTICAL_AD_CAPABILITY_REQUESTED: null,
                    VERTICAL_AD_CAPABILITY_DISPATCHED: null,
                    VERTICAL_AD_PLAYABILITY_REQUESTED: null,
                    VERTICAL_AD_PLAYABILITY_DISPATCHED: null,
                    VIDEO_BUFFER_UPDATE: null,
                    VIDEO_BUFFERING: null,
                    VIDEO_CAN_PLAY: null,
                    VIDEO_DURATION_CHANGE: null,
                    VIDEO_ENDED: null,
                    VIDEO_INTERRUPT_REQUESTED: null,
                    VIDEO_LOADED_DATA: null,
                    VIDEO_LOADED_METADATA: null,
                    VIDEO_OVERLAY_SIZE_CHANGED: null,
                    VIDEO_PAUSE: null,
                    VIDEO_PLAY: null,
                    VIDEO_PLAYING: null,
                    VIDEO_REBUFFERING: null,
                    VIDEO_RESUME_REQUESTED: null,
                    VIDEO_SEEKED: null,
                    VIDEO_SEEKING: null,
                    VIDEO_SELECTED: null,
                    VIDEO_SLOT_ENDED: null,
                    VIDEO_SLOT_STARTED: null,
                    VIDEO_START: null,
                    VIDEO_STEADYPLAY: null,
                    VIDEO_TAPPED: null,
                    VIDEO_TIME_UPDATE: null,
                    VIDEO_VOLUME_CHANGED: null,
                    VIDEO_WAITING: null,
                    VMAP_RECEIVED: null,
                    VOLUME_CHANGE_REQUESTED: null,
                    VPAID_AD_STARTED: null,
                    VPAID_AD_STOPPED: null,
                    VPAID_VERTICAL_AD_STOPPED: null,
                    VPAID_VERTICAL_AD_STARTED: null,
                    VPAID_AD_SKIPPED: null,
                    VR360_DRAGGING: null,
                    WATCH_LATER_CHANGED: null,
                    WATCH_LATER_REQUESTED: null,
                    WATCH_ON_SITE_REQUESTED: null,
                    WATERMARK_REQUESTED: null,
                    SCALE_MODE_CHANGE_REQUESTED: null,
                    SCALE_MODE_CHANGED: null,
                    VMAP_REQUESTED: null
                }, "dmp_")
            },
            ztlV: function(e, t, n) {
                "use strict";

                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function i(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                t.__esModule = !0;
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    a = n("Zrx9"),
                    l = r(a),
                    u = n("i/kS"),
                    E = r(u),
                    s = n("NfI8"),
                    c = r(s),
                    _ = n("mJa9"),
                    d = r(_),
                    f = n("CJtR"),
                    p = r(f),
                    A = l.default.get("API"),
                    R = {
                        location: c.default,
                        nativeBridge: d.default,
                        postMessage: p.default
                    },
                    D = function() {
                        function e() {
                            i(this, e);
                            var t = E.default.settings("api");
                            if (this.api = null, !1 !== t) {
                                var n = R[t] ? t : "postMessage";
                                this.api = R[n].init(), A.log("External mode: " + n)
                            } else A.log("No external API enabled")
                        }
                        return e.prototype.postMessage = function e(t, n) {
                            n = Object.assign({}, n), n && n.id && A.error("postMessage must not be called with an 'id' property: " + n.id);
                            var r = E.default.settings("apimode", "queryString"),
                                i = null;
                            "queryString" === r ? i = this.serializeFromQS(t, n) : "json" === r && (i = this.serializeFromJSON(t, n)), A.log("Sending event", i), this.api.postMessage(i)
                        }, e.prototype.serializeFromQS = function e(t, n) {
                            var r = n ? $.param(n) : "",
                                i = "event=" + t;
                            return E.default.settings("id") && (i += "&id=" + E.default.settings("id")), "" !== r && (i += "&" + r), i
                        }, e.prototype.serializeFromJSON = function e(t, n) {
                            return "object" !== (void 0 === n ? "undefined" : o(n)) && (n = {}), n.event = t, E.default.settings("id") && (n.id = E.default.settings("id")), JSON.stringify(n)
                        }, e
                    }();
                t.default = D
            }
        },
        [
            [0, "manifest", "vendor"]
        ]
    ])
});