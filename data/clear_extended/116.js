/* common */
(function() {
    Myspace = Myspace || {}, Myspace.APIPlayer = function(a) {
        function i(a) {
            var c = [].splice.call(arguments, 1);
            h[a] && h[a].forEach(function(a) {
                a.apply(b, c)
            })
        }

        function j(a) {
            d !== a && (d = a, i("stateChange", d))
        }

        function k(a, b) {
            a.style.height = "100%", a.style.width = "100%", a.style.position = "absolute", a.style.top = 0, a.style.left = 0, a.style.bottom = 0, a.style.right = 0, a.style.zIndex = b
        }

        function m(a) {
            o ? a() : l.push(a)
        }

        function n() {
            l.forEach(function(a) {
                a()
            })
        }

        function r() {
            var a = document.createElement("script");
            a.src = "//imasdk.googleapis.com/js/sdkloader/ima3.js", a.onload = function() {
                i("ready"), n(), o = !0
            }, document.head.appendChild(a)
        }

        function s() {
            q = document.createElement("div"), q.className = "ad-container", k(q, 1), f.insertAdjacentElement("afterend", q);
            var a = new google.ima.AdDisplayContainer(q, f);
            a.initialize(), p = new google.ima.AdsLoader(a), p.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, y, !1), p.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, t, !1);
            var c = new google.ima.AdsRequest;
            c.adTagUrl = b.adTagUrl || location.protocol + "//" + location.host + "/tests/vast", c.linearAdSlotWidth = f.clientWidth, c.linearAdSlotHeight = f.clientHeight, c.nonLinearAdSlotWidth = 640, c.nonLinearAdSlotHeight = 150, p.requestAds(c)
        }

        function t(a) {
            console.log(a.getError()), u && u.destroy(), u && u == null, f.play()
        }

        function y(a) {
            v = new google.ima.AdsRenderingSettings, v.enablePreloading = !0, u = a.getAdsManager(f), u.setVolume(f.volume), u.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, F), u.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, z), u.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, A), u.addEventListener(google.ima.AdEvent.Type.LOADED, D), u.addEventListener(google.ima.AdEvent.Type.STARTED, E), u.addEventListener(google.ima.AdEvent.Type.COMPLETE, F), u.addEventListener(google.ima.AdEvent.Type.SKIPPED, F), u.addEventListener(google.ima.AdEvent.Type.PAUSED, B), u.addEventListener(google.ima.AdEvent.Type.RESUMED, C), u.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, G), u.addEventListener(google.ima.AdEvent.Type.DURATION_CHANGE, H), w = 0, x = !1;
            try {
                u.init(f.clientWidth, f.clientHeight, google.ima.ViewMode.NORMAL), u.start()
            } catch (b) {}
        }

        function z() {
            f.pause()
        }

        function A() {
            f.play()
        }

        function B() {
            j(c.PAUSED)
        }

        function C() {
            j(c.PLAYING)
        }

        function D() {
            J(), i("adLoaded")
        }

        function E(a) {
            i("adStarted"), I(), j(c.PLAYING)
        }

        function F() {
            u.destroy(), u = null, q.remove(), i("adComplete"), f.play()
        }

        function G() {
            i("skippableStateChanged", u.getAdSkippableState())
        }

        function H() {
            I()
        }

        function I() {
            J(), w && !x && (x = !0, i("duration", w))
        }

        function J() {
            if (w) return w;
            var a = u.getCurrentAd().getDuration(),
                b = u.getRemainingTime();
            w = Math.max(a, b, 0)
        }

        function K(a) {
            var b = u.getCurrentAd(),
                c = b ? b.getDuration() : null,
                d = u.getRemainingTime();
            console.log("[api-player] " + a + ": duration " + c + ", remainingTime " + d)
        }
        var b = this,
            c = Myspace.APIPlayer.State,
            d = c.UNSTARTED,
            e = a instanceof HTMLDivElement ? a : document.getElementById(a),
            f = document.createElement("video");
        k(f, 0), f.volume = 0, e.appendChild(f), r();
        var g = !1;
        this.play = function() {
            d !== c.CUED && d !== c.UNSTARTED || !!u ? u ? u.resume() : f.play() : m(s)
        }, this.playAd = function() {
            m(s)
        }, this.skipAd = function() {
            u && u.skip()
        }, this.pause = function() {
            u ? u.pause() : f.pause()
        }, this.stop = function() {
            if (u) {
                u.stop(), F();
                return
            }
            f.src && (f.src = "", f.removeAttribute("src"), f.load(), j(c.UNSTARTED))
        }, this.mute = function() {
            f.muted = !0
        }, this.unMute = function() {
            f.muted = !1
        }, this.isMuted = function() {
            return f.muted
        }, this.load = function(a) {
            f.src = a, j(c.CUED), g = !1
        }, this.resize = function() {
            u && u.resize(q.clientWidth, q.clientHeight, google.ima.ViewMode.NORMAL)
        }, Object.defineProperty(this, "currentTime", {
            get: function() {
                if (u) {
                    I();
                    var a = Math.max(0, u.getRemainingTime());
                    return w - a
                }
                return f.currentTime
            },
            set: function(a) {
                f.currentTime = a
            }
        }), Object.defineProperty(this, "duration", {
            get: function() {
                return u ? (w || (w = J()), w) : f.duration
            }
        }), Object.defineProperty(this, "poster", {
            get: function() {
                return f.poster
            },
            set: function(a) {
                f.poster = a
            }
        }), Object.defineProperty(this, "state", {
            get: function() {
                return d
            }
        }), Object.defineProperty(this, "volume", {
            get: function() {
                return f.volume
            },
            set: function(a) {
                f.volume = a, u && u.setVolume(a), i("volumeChange", a)
            }
        }), f.addEventListener("click", function() {
            f.paused ? f.play() : f.pause()
        }), f.addEventListener("ended", function() {
            j(c.ENDED)
        }), f.addEventListener("pause", function() {
            j(c.PAUSED)
        }), f.addEventListener("playing", function() {
            g || (i("started"), g = !0), j(c.PLAYING)
        }), f.addEventListener("waiting", function() {
            j(c.BUFFERING)
        });
        var h = {};
        this.addEventListener = function(a, b) {
            typeof a == "string" && typeof b == "function" && (h[a] || (h[a] = []), h[a].push(b))
        }, this.removeEventListener = function(a, b) {
            h[a] && (h[a] = h[a].filter(function(a) {
                return b !== a
            }))
        };
        var l = [],
            o, p, q, u, v, w = 0,
            x = !1
    }, Myspace.APIPlayer.State = {
        UNSTARTED: "unstarted",
        CUED: "cued",
        PLAYING: "playing",
        PAUSED: "paused",
        BUFFERING: "buffering",
        ENDED: "ended"
    }
})();
(function() {
    function a(a) {
        console.log("[myspace][appear] " + a)
    }

    function b(a) {
        a.querySelectorAll(".ms-appear").forEach(function(a) {
            new Myspace.AppearPlayer(a)
        })
    }
    Myspace = Myspace || {}, Myspace.AppearPlayer = function(b) {
        function d() {
            window.addEventListener("scroll", f), window.addEventListener("resize", f)
        }

        function e() {
            window.removeEventListener("scroll", f), window.removeEventListener("resize", f)
        }

        function f() {
            h() && g()
        }

        function g() {
            a("in view, play ad"), c.play(), e()
        }

        function h() {
            var a = b.getBoundingClientRect();
            return a.top < window.innerHeight && a.bottom >= 0 && a.left < window.innerWidth && a.right >= 0
        }

        function i() {
            b.style.width = "800px", b.style.height = "0", b.style.position = "relative", b.style.transition = "1s height", b.style.overflow = "hidden";
            var a = b.querySelector("video");
            a.style.width = "800px", a.style.height = "450px"
        }
        if (!b || !b.dataset.adTagUrl || b.appearPlayer) return;
        b.appearPlayer = this;
        var c = new Myspace.APIPlayer(b);
        a("initialized"), c.adTagUrl = b.dataset.adTagUrl, a("ad tag url: " + c.adTagUrl), i(), h() ? g() : d(), c.addEventListener("adStarted", function() {
            a("ad started"), b.style.height = "450px"
        }), c.addEventListener("adComplete", function() {
            a("ad complete"), b.style.height = "0"
        }), b.addEventListener("mouseenter", function() {
            c.volume = 1
        }), b.addEventListener("mouseleave", function() {
            c.volume = 0
        })
    }, b(document.body), comm.listen("page.changed", function(a) {
        var c = a.get(0);
        b(c)
    }, !0)
})();
Myspace.MediaPlayer = function(a) {
    function f(a, b) {
        var c = b[0];
        if (typeof c == "object")
            for (var d in c) a.call(this, d, c[d]);
        else a.apply(this, b)
    }

    function g(a, b, d) {
        typeof a == "string" && typeof b == "function" && c.push(new k(a, b, d))
    }

    function h(a, b) {
        c = c.filter(function(c) {
            return c.name !== a && c.callback !== b
        })
    }

    function i(a, b) {
        g(a, b, !0)
    }

    function j(a) {
        var d = [].splice.call(arguments, 1);
        c.filter(function(b) {
            return b.name === a
        }).map(function(a) {
            return a.callback
        }).forEach(function(a) {
            a.apply(b, d)
        }), c = c.filter(function(b) {
            return b.name !== a || !b.one
        })
    }

    function k(a, b, c) {
        this.name = a, this.callback = b, this.one = !!c
    }

    function l() {
        function a(a, c) {
            typeof console[a] == "function" && ([].unshift.call(c, "color: " + b.color), [].unshift.call(c, "%c[MediaPlayer] [" + b.name + "]"), context.reportSongEnabled && console[a].apply(console, c))
        }
        this.log = function() {
            a("log", arguments)
        }, this.warn = function(b) {
            a("warn", arguments)
        }
    }
    var b = this,
        c = [],
        d = ["canPlay", "load", "pause", "resume", "seek", "volume", "stop"],
        e = new l;
    this.getName = function() {
        return this.name
    }, this.on = function() {
        return f.call(this, g, arguments), this
    }, this.off = function() {
        return f.call(this, h, arguments), this
    }, this.one = function() {
        return f.call(this, i, arguments), this
    }, this.fire = function() {
        return j.apply(this, arguments), this
    }, this.log = function() {
        return e.log.apply(this, arguments), this
    }, this.color = "#000", typeof a == "function" && a.apply(this, arguments), d.forEach(function(a) {
        typeof b[a] != "function" && e.warn(a + " method is not implemented.")
    })
};
Myspace.MediaManager = new Myspace.MediaPlayer(function() {
    function m(a, b) {
        j = undefined, f = a, o(), d = n(a, b), d && (h = !0, d.log('loading "' + a.title + '" by "' + a.artistName + '"'), d.on(l), d.load(a), d.volume(g))
    }

    function n(a, b) {
        return Array.find(c, function(c) {
            return c.priority >= (b || 0) && c.canPlay(a)
        })
    }

    function o() {
        d && (d.stop(), d.off(l))
    }
    var a = this,
        b = function() {
            d.log.apply(d, arguments), a.fire.apply(a, arguments)
        },
        c = [],
        d, e, f, g = 1,
        h, i = !0,
        j, k = !1;
    this.name = "manager", this.getName = function() {
        return d ? d.getName() : this.name
    }, this.canPlay = function(a) {
        return !!a && !!n(a)
    }, this.load = function(a) {
        if (i) {
            i = !1;
            var b = (new CookieHelper("player"))("paused");
            if (b) {
                j = function() {
                    m(a)
                };
                return
            }
        }
        m(a)
    }, this.playAd = function(a) {
        e && (o(), d = e, d.on(l), d.volume(g), d.playAd(a))
    }, this.skipAd = function() {
        e && e.skipAd()
    }, this.pause = function() {
        d && d.pause()
    }, this.resume = function() {
        j && !k ? j() : d && d.resume()
    }, this.seek = function(a) {
        d && d.seek(a)
    }, this.volume = function(a) {
        g = a, d && d.volume(a)
    }, this.stop = function() {
        d && d.stop(), e && e.stop()
    }, this.registerPlayer = function(b) {
        b instanceof Myspace.MediaPlayer && (b.on("ready", function(c) {
            b.log("ready. priority " + b.priority), f && !d && a.load(f)
        }), c.push(b), c.sort(function(a, b) {
            return a.priority - b.priority
        }), b.canPlayAds && (e = b))
    }, this.resize = function() {
        d && d.resize()
    };
    var l = {
        loaded: function() {
            h = !1, b("loaded", d.name)
        },
        duration: function(a) {
            b("duration", a)
        },
        started: function() {
            b("started")
        },
        paused: function() {
            b("paused")
        },
        resumed: function() {
            b("resumed")
        },
        time: function(a) {
            b("time", a)
        },
        ended: function() {
            b("ended")
        },
        mode: function(a) {
            b("mode", a)
        },
        error: function(a) {
            d.log(a)
        },
        adLoading: function(a) {
            b("adLoading", {
                player: d.name
            })
        },
        adLoaded: function(a) {
            b("adLoaded", {
                player: d.name
            })
        },
        adStarted: function(a, c, d) {
            k = !0, b("adStarted", a, c, d)
        },
        adStopped: function() {
            k = !1, b("adStopped")
        },
        adDuration: function(a) {
            b("adDuration", a)
        },
        adRemainingTime: function(a, c) {
            b("adRemainingTime", a, c)
        },
        adPaused: function() {
            b("adPaused")
        },
        adPlaying: function() {
            b("adPlaying")
        },
        adSkippableStateChanged: function(a) {
            b("adSkippableStateChanged", a)
        }
    }
});
(function() {
    function h(a, b) {
        var c = Date.now();
        return b || (b = a), "https://pubads.g.doubleclick.net/gampad/ads?sz=864x486&iu=/229683089/Myspace.com_NEW_Video_Preroll_ROS&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=" + a + "&description_url=" + b + "&correlator=" + c
    }

    function i(c) {
        f.log("stateChange " + c);
        switch (c) {
            case b.CUED:
                g("loaded"), d = !1, a.play();
                break;
            case b.PLAYING:
                d && g("resumed"), p();
                break;
            case b.PAUSED:
                g("paused"), q();
                break;
            case b.ENDED:
                g("ended"), q()
        }
    }

    function j() {
        g("started"), g("duration", a.duration), p(), d = !0
    }

    function k() {
        g("adLoaded")
    }

    function l() {
        g("adStarted"), g("adPlaying")
    }

    function m() {
        f.log("adComplete"), g("adStopped"), q()
    }

    function n(a) {
        g("adSkippableStateChanged", a)
    }

    function o(a) {
        g("duration", a)
    }

    function p() {
        clearInterval(e), e = setInterval(function() {
            g("time", a.currentTime)
        }, 250)
    }

    function q() {
        clearInterval(e)
    }
    var a = new Myspace.APIPlayer("html5-player"),
        b = Myspace.APIPlayer.State,
        c, d, e, f = new Myspace.MediaPlayer(function() {
            this.name = "html5", this.priority = 0, this.color = "#FF0046", this.canPlay = function(a) {
                return c && (a.mp4StreamUrl || a.httpStreamUrl)
            }, this.canPlayAds = !0, this.load = function(b) {
                var c = encodeURIComponent(location.href),
                    d = encodeURIComponent(b.url || b.detailUrl);
                a.adTagUrl = h(c, d);
                var e = b.mp4StreamUrl || b.httpStreamUrl;
                a.load(e), q()
            }, this.playAd = function(b) {
                var c = encodeURIComponent(location.href);
                a.adTagUrl = b || h(c), a.playAd()
            }, this.skipAd = function() {
                a.skipAd()
            }, this.pause = function() {
                a.pause()
            }, this.resume = function() {
                a.play()
            }, this.seek = function(b) {
                a.currentTime = b
            }, this.volume = function(b) {
                a.volume = b
            }, this.stop = function() {
                a.stop()
            }, this.resize = function() {
                a.resize()
            }
        }),
        g = f.fire;
    a.addEventListener("stateChange", i), a.addEventListener("started", j), a.addEventListener("adLoaded", k), a.addEventListener("adStarted", l), a.addEventListener("adComplete", m), a.addEventListener("skippableStateChanged", n), a.addEventListener("duration", o), Myspace.MediaManager.registerPlayer(f), c = !0, g("ready", f.name)
})();
(function() {
    function k(a) {
        d = !0, j("ready", i.name)
    }

    function l(a) {
        e || (e = !0, j("loaded")), h || (h = c.getDuration(), h && j("duration", h)), a.data === 1 ? (f ? j("resumed") : (f = !0, j("started")), m()) : a.data === 2 ? (j("paused"), n()) : a.data === 0 && j("ended")
    }

    function m() {
        g = setInterval(function() {
            var a = c.getCurrentTime(),
                b = h * c.getVideoLoadedFraction() - a;
            j("time", a, b)
        }, 500)
    }

    function n() {
        clearInterval(g)
    }
    var a = document.createElement("script");
    a.src = "https://www.youtube.com/iframe_api";
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b);
    var c;
    window.onYouTubeIframeAPIReady = function() {
        c = new YT.Player("youtube-player-api", {
            width: "100%",
            height: "100%",
            suggestedQuality: "large",
            playerVars: {
                showinfo: 0,
                controls: 0,
                rel: 0,
                iv_load_policy: 3
            },
            events: {
                onReady: k,
                onStateChange: l
            }
        })
    };
    var d, e, f, g, h, i = new Myspace.MediaPlayer(function() {
            this.name = "youtube", this.priority = 1, this.color = "#CC181E", this.canPlay = function(a) {
                return d && !!a.youtubeId
            }, this.load = function(a) {
                e = f = !1, h = 0, c.loadVideoById(a.youtubeId)
            }, this.pause = function() {
                c.pauseVideo()
            }, this.resume = function() {
                c.playVideo()
            }, this.seek = function(a) {
                n(), c.seekTo(a)
            }, this.volume = function(a) {
                a = Math.round(a * 100), c.setVolume(a)
            }, this.stop = function() {
                c.stopVideo(), n()
            }
        }),
        j = i.fire;
    Myspace.MediaManager.registerPlayer(i)
})();
(function(a, b) {
    function d(a) {
        var c = b.VideoPlayer.$muteButton;
        c.removeClass("low mid hi muted"), a === 0 ? c.addClass("muted") : a <= .2 ? c.addClass("low") : a > .2 && a < .8 ? c.addClass("mid") : a >= .8 && c.addClass("hi")
    }

    function e(a) {
        var c = b.VideoPlayer.$playButton;
        a ? c.removeClass("playing").addClass("paused") : c.removeClass("paused").addClass("playing")
    }

    function f() {
        var a = b.VideoPlayer.$container.hasClass("ad"),
            c = b.VideoPlayer.$container.find(".progress-bar").get(0);
        a ? c.setAttribute("disabled", "") : c.removeAttribute("disabled")
    }
    "use strict";
    var c = function() {
        this.$container = a("#videoPlayer"), this.$playButton = this.$container.find("button.play,.playBtn"), this.$muteButton = this.$container.find(".ms-mute-button"), this.wire(), this.visible = !1, this.loading = !1, this.closed = !1, this.alwaysHidden = !1, this.trackingCategory = "videoplayer", this.timeout, this.dialogOpen = !1, this.isAd = !1, this.$adSkipBtn = this.$container.find(".ad-skip-btn")
    };
    c.prototype.wire = function() {
        var b = this;
        this.$container.on("click", function(c) {
            var d = a(c.target).closest("[data-action]"),
                e = d.data("action");
            switch (e) {
                case "close":
                    b.isAd && (b.$container.hasClass("skippable") ? comm.send("player.skipAd") : comm.send("player.stop")), comm.send("player.pause"), b.hide(), b.track(b.trackingCategory, "Hide", context.pfc), Cookies.playerControlTip || (a("#playControls").tip({
                        trigger: "manual",
                        classes: "playerTip",
                        placement: "top",
                        title: "Press play to continue where you left off."
                    }), a("#playControls").tip("show"), window.setTimeout(function() {
                        a("#playControls").tip("hide")
                    }, 5e3), Cookies.playerControlTip = new Cookie("playerControlTip"), Cookies.playerControlTip.values = {
                        shown: "true"
                    }, Cookies.save(Cookies.playerControlTip, document.domain, (new Date).addDays(365)));
                    break;
                case "expand":
                    comm.send("player.nowPlaying", function(a) {
                        a.mediaItem && a.mediaItem.mediaType === "video" && comm.send("videoLightbox.instance", function(c) {
                            b.hide(), b.track(b.trackingCategory, "Expand", context.pfc), c && c.show(a.mediaItem, {
                                continuePlay: !0
                            })
                        })
                    });
                    break;
                case "click":
                    break;
                case "skipAd":
                    !d.is(":disabled") && comm.send("player.next");
                    break;
                default:
            }
        }), this.$container.find("> div").on("mouseleave", function() {
            comm.send("progressBar.hideTimeTip", !0)
        }), this.$playButton.on("click", function() {
            return b.$playButton.hasClass("paused") ? comm.send("player.resume") : comm.send("player.pause"), !1
        }), this.$muteButton.on("click", function() {
            return comm.send("player.mute"), !1
        })
    }, c.prototype.setVPos = function(b) {
        var c = 15;
        b || a("body").hasClass("queueOpen") || a("#drawer").hasClass("message open") ? c += a("#drawer").outerHeight() : c += a("#global-nav").outerHeight(!0), this.$container.css("bottom", c), this.movePageElements({
            bottom: c
        })
    }, c.prototype.movePageElements = function(b) {
        var c = b.bottom !== "" ? parseInt(b.bottom) + parseInt(this.$container.height()) + 20 : "";
        a("#popups").css("bottom", c)
    }, c.prototype.show = function() {
        var a = this;
        this.setVPos(), this.visible = !0, this.closed = !1, this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function() {
            a.$container.addClass("open")
        }, 500)
    }, c.prototype.handleShow = function() {
        var a = this;
        comm.send("player.nowPlaying", function(b) {
            !a.isAd && a.canShow(b) ? (a.show(), a.track(a.trackingCategory, "Show", context.pfc)) : a.isAd && a.canShowAd(b) ? a.show() : a.hide()
        })
    }, c.prototype.canShow = function(a) {
        return !this.isVideoDetail() && !this.isLightbox() && !this.alwaysHidden && !this.closed && !this.dialogOpen && typeof a.mediaItem != "undefined" && (a.mediaItem.mediaType == "video" || a.mediaItem.vevoId || a.mediaItem.youtubeId) && this.isActive() && !a.paused
    }, c.prototype.canShowAd = function(a) {
        return !this.isVideoDetail() && !this.isLightbox() && this.isActive()
    }, c.prototype.hide = function() {
        this.visible = !1, this.$container.removeClass("open"), this.movePageElements({
            bottom: ""
        }), this.timeout && clearTimeout(this.timeout)
    }, c.prototype.isVideoDetail = function() {
        return typeof context != "undefined" && context.pfc === "videodetail"
    }, c.prototype.isLightbox = function() {
        var a = !1;
        return comm.send("videoLightbox.instance", function(b) {
            a = Boolean(b && b.isOpen)
        }), a
    }, c.prototype.showLoading = function() {
        this.loading = !0
    }, c.prototype.hideLoading = function() {
        this.loading = !1, this.$container.removeClass("loading")
    }, c.prototype.drawerToggled = function(a) {
        this.visible && !this.isVideoDetail() && this.setVPos(a)
    }, c.prototype.isActive = function() {
        return !0
    }, c.prototype.track = function(a, b, c) {}, c.prototype.updateAdSkipping = function(a) {
        isNaN(parseFloat(a.enableSkipAfter)) ? this.$container.removeClass("skippable") : (this.$container.addClass("skippable"), a.enableSkipAfter > 0 ? this.$adSkipBtn.attr("disabled", "disabled").find("em").text(" in " + Math.ceil(a.enableSkipAfter)) : this.$adSkipBtn.removeAttr("disabled"))
    }, b.VideoPlayer = new c, comm.listen("drawer.opened", function() {
        b.VideoPlayer.drawerToggled(!0)
    }, !0), comm.listen("drawer.closed", function() {
        b.VideoPlayer.drawerToggled(!1)
    }, !0), comm.listen("player.ended", function(a) {}, !0), comm.listen("player.started", function(a) {
        e(!1);
        var c = b.VideoPlayer;
        c.$container.attr("data-current-player", a.player), c.hideLoading(), a.paused || c.handleShow(), comm.send("ads.contenttracker", {
            entityKey: a.mediaItem.entityKey
        })
    }, !0), comm.listen("player.paused", function(a) {
        e(!0)
    }, !0), comm.listen("player.resumed", function(a) {
        e(!1), (a.mediaItem.mediaType == "video" || a.mediaItem.videoId || a.mediaItem.vevoId || a.mediaItem.youtubeId) && b.VideoPlayer.handleShow()
    }, !0), comm.listen("player.loading", function(a) {
        var c = b.VideoPlayer;
        c.$container.removeClass("autoplay").attr("data-media-type", a.mediaItem.mediaType), a.mediaItem.mediaType == "video" ? (c.showLoading(), c.isAd = !1) : !c.isVideoDetail() && !a.mediaItem.mediaType === "video" && !a.mediaItem.vevoId && !a.mediaItem.youtubeId ? c.hide() : c.showLoading()
    }, !0), comm.listen("player.bufferStatus", function(a) {
        var c = b.VideoPlayer;
        a ? c.$container.addClass("buffering") : c.$container.removeClass("buffering")
    }, !0), c.prototype.log = function() {
        console.log.apply(console, arguments)
    }, comm.listen("player.adLoading", function(a) {
        a.ad.isVideo && (a.player && b.VideoPlayer.$container.attr("data-current-player", a.player), b.VideoPlayer.$container.addClass("ad").removeClass("skippable"), b.VideoPlayer.isAd = !0, b.VideoPlayer.showLoading())
    }, !0), comm.listen("player.adLoaded", function(a) {
        b.VideoPlayer.$container.attr("data-current-player", a.player), b.VideoPlayer.$container.addClass("ad").removeClass("skippable"), b.VideoPlayer.isAd = !0
    }, !0), comm.listen("player.adStarted", function(a) {
        b.VideoPlayer.$container.removeClass("show-close"), e(!1), f(), b.VideoPlayer.hideLoading(), b.VideoPlayer.isAd = !0, a.ad.isVideo ? comm.send("videoLightbox.instance", function(a) {
            !b.VideoPlayer.visible && !a.isOpen && b.VideoPlayer.show()
        }) : b.VideoPlayer.hide()
    }, !0), comm.listen("player.adRemainingTime", function(a) {
        b.VideoPlayer.updateAdSkipping(a.ad)
    }, !0), comm.listen("player.adStopped", function(c) {
        b.VideoPlayer.$container.removeClass("show-close"), c.ad.isVideo && (b.VideoPlayer.$container.removeClass("ad"), b.VideoPlayer.isAd = !1, b.VideoPlayer.hideLoading(), f(), a("#queue .list." + Cookies.player.values.mode + " li").length || b.VideoPlayer.hide(), (!c.mediaItem || c.mediaItem.mediaType !== "video") && b.VideoPlayer.hide())
    }, !0), comm.listen("player.onClick", function(a) {
        b.VideoPlayer.log("videoPlayer: player onClick, mediaType: " + a.mediaInfo.mediaType + ", isAd: " + a.mediaInfo.isAd)
    }, !0), comm.listen("player.time", function(a) {
        a.ad && a.ad.isPlaying && a.time >= 5 && b.VideoPlayer.$container.addClass("show-close")
    }, !0), comm.listen("player.adSkippableStateChanged", function(a) {
        b.VideoPlayer.$container.toggleClass("skippable", a)
    }), comm.listen("spaceway.page.complete", function() {
        b.VideoPlayer.handleShow()
    }, !0), comm.listen("player.queueChanged", function(c) {
        var d = a("#queue .list." + c.mode + " li");
        !d.length && b.VideoPlayer.isVideoDetail() && comm.send("location.href", b.videoReferrer || "/discover/videos")
    }, !0), comm.listen("player.volumeChanged", function(a) {
        console.log("[volume] volumeChanged", a), d(a)
    }, !0), comm.listen("player.muted", function(a) {
        console.log("[volume] muted", a), d(a)
    }, !0), comm.listen("player.unmuted", function(a) {
        console.log("[volume] unmuted", a), d(a)
    }, !0), comm.listen("dialog.showing", function(a) {
        b.VideoPlayer.dialogOpen = !0, b.VideoPlayer.hide()
    }, !0), comm.listen("dialog.hiding", function(a) {
        b.VideoPlayer.dialogOpen = !1, b.VideoPlayer.handleShow()
    }, !0)
})(jQuery, window.Myspace = window.Myspace || {});
(function(a, b) {
    function j(a) {
        var b = k(a);
        a.toggleClass("overflowing", b)
    }

    function k(b) {
        var c = b.height(),
            d = !1;
        return b.children().each(function(b, e) {
            var f = a(e);
            f.height() + f.position().top > c && (d = !0)
        }), d
    }
    "use strict";
    var c, d = {
            modal: !1,
            continuePlay: !1,
            updateLocation: !0,
            showRightRail: !0
        },
        e = a(window),
        f = a("#footer"),
        g = a("#global-nav", f).outerHeight(),
        h = function(a) {
            if (c) return c;
            if (!(this instanceof h)) return new h;
            this.player = a || b.VideoPlayer, this.playerCookie = new CookieHelper("player"), this.isOpen = !1, this.coverClass, this.playerClass, this.$expand = this.player.$container.find(".expandBtn"), this.$showCC = this.player.$container.find(".showCCBtn"), this.isExpanded = !1, this.$rightRailContainer = this.player.$container.find(".videoRailContainer"), c = this
        },
        i = {
            hide: function(a) {
                if (!c.isExpanded && a && a.isDialogOpen) return;
                h().isExpanded ? h().shrinkVideo() : (parseInt(arguments[0]) === 27 || isNaN(parseInt(arguments[0]))) && h().hide({
                    hidePlayer: !1
                })
            },
            showUI: function() {
                h().showUI()
            },
            hideUI: function() {
                h().hideUI()
            },
            expandVideo: function() {
                h().expandVideo()
            },
            toggleClosedCaptions: function() {
                h().toggleClosedCaptions()
            },
            handleDialogs: function(a) {
                var b = a.attr("id").toLowerCase(),
                    c = !h().player.isAd;
                b === "photocarousellightbox" ? h().hide({
                    hidePlayer: c,
                    leaveCover: !0
                }) : ["searchdialog", "logindialog", "loginprompt", "superpostdialog", "reportabusedialog"].indexOf(b) > -1 ? h().hide({
                    hidePlayer: c,
                    leaveCover: !1,
                    canRedirect: !1
                }) : b !== "confirmdialog" && b != "linkembeddialog" && b != "queueddialog" && h().hide({
                    hidePlayer: c,
                    leaveCover: !1
                })
            },
            handlePlayerLoading: function(a) {
                var b = h();
                a.mediaItem.mediaType !== "video" ? b.hide() : b.isOpen && !b.player.isAd && b.mediaItem != a.mediaItem && (b.updateMe(a.mediaItem), b.mediaItem = a.mediaItem)
            },
            handlePlayerLoaded: function(a) {
                mediaItem && a.mediaItem.timedTextUrl ? (h().enableClosedCaptions(!0), h().activateClosedCaptions(h().playerCookie("ccOn"))) : (h().enableClosedCaptions(!1), h().activateClosedCaptions(!1))
            },
            handleActivatedClosedCaptions: function(a) {
                h().activateClosedCaptions(a)
            }
        };
    h.prototype.wire = function() {
        this.$expand.on("click", i.expandVideo), this.$showCC.on("click", i.toggleClosedCaptions), a("#videoPlayer .close-lightbox").on("click", i.hide), comm.listen("page.esc", i.hide), comm.listen("player.keyDown", i.hide), comm.listen("dialog.showing", i.handleDialogs), comm.listen("player.preloading", i.handlePlayerLoading), comm.listen("player.loading", i.handlePlayerLoading), comm.listen("player.loaded", i.handlePlayerLoaded), comm.listen("player.activatedClosedCaptions", i.handleActivatedClosedCaptions), comm.listen("queue.ended", function() {
            h().hide()
        }), comm.listen("spaceway.page.processing", function() {
            h().hide({
                canRedirect: !1
            })
        })
    }, h.prototype.unWire = function() {
        a("#videoPlayer .close-lightbox").off("click", i.hide), this.$expand.off("click", i.expandVideo), this.$showCC.off("click", i.toggleClosedCaptions), comm.stopListening("page.esc", i.hide), comm.stopListening("player.keyDown", i.hide), comm.stopListening("dialog.showing", i.handleDialogs), comm.stopListening("player.loading", i.handlePlayerLoading), comm.stopListening("player.loaded", i.handlePlayerLoaded), comm.stopListening("player.activatedClosedCaptions", i.handleActivatedClosedCaptions)
    }, h.prototype.updateUrl = function(a, b) {
        var c = b || a.detailUrl;
        comm.send("location.href", {
            url: c
        })
    }, h.prototype.updateMe = function(a) {
        this.renderRightRail(a), this.enableClosedCaptions(a.timedTextUrl), this.activateClosedCaptions(this.playerCookie("ccOn")), this.updateLocation ? (comm.send("overlay.trackers"), _gaq.push(["_trackPageview", this.detailUrl]), this.updateUrl(a)) : this.updateLocation = !0
    }, h.prototype.show = function(e, f) {
        a.extend(this, d, f || {}), !this.player.isVideoDetail() && !this.isOpen && (b.videoReferrer = window.location.pathname);
        var g = a("#searchDialog"),
            h = this;
        e ? this.isOpen ? comm.send("player.nowPlaying", function(a) {
            a.mediaItem && a.mediaItem.mediaType === "video" && a.mediaItem.mediaId !== e.mediaId && h.playVideo(e)
        }) : !this.player.dialogOpen || g.hasClass("open") ? (g.removeClass("open"), this.isOpen = !0, this.playerClass = "lightBox", this.coverClass = "video", this.modal && (this.playerClass += " modal", this.coverClass += " modal"), this.player.$container.removeAttr("style").removeClass("tooltip").addClass(this.playerClass).css("opacity", .01), this.player.closed = !1, a("#lightboxCover").addClass(this.coverClass).removeClass("hide").fadeIn(function() {
            h.player.$container.animate({
                opacity: 1
            })
        }), this.wire(), comm.send("player.resize"), comm.send("player.nowPlaying", function(a) {
            a.mediaItem && a.mediaItem.mediaType == "video" && a.mediaItem.mediaId == e.mediaId ? h.updateMe(e) : h.playVideo(e)
        })) : c.playVideo(e) : this.detailUrl && !this.player.isVideoDetail() && comm.send("location.href", this.detailUrl)
    }, h.prototype.hide = function(c) {
        if (this.isOpen) {
            var d = this,
                e = c && c.hidePlayer,
                f = c && c.leaveCover,
                g = c && c.redirectUrl,
                h = c && c.canRedirect;
            this.isOpen = !1, this.player.$container.find(".dynamicUI").html(""), this.player.$container.removeAttr("style").removeClass(this.playerClass).addClass("tooltip"), this.player.hide(), this.player.setVPos(), this.$showCC.hasClass("showCC") && (this.enableClosedCaptions(!1), this.activateClosedCaptions(!1)), e !== !0 && this.player.handleShow(), f !== !0 && a("#lightboxCover").addClass("hide"), comm.send("player.resize"), a("#lightboxCover").removeClass(d.coverClass).removeAttr("style"), this.unWire(), h !== !1 && (this.player.isVideoDetail() ? comm.send("location.href", g || b.videoReferrer || context.video.artistEventsUrl || context.video.artistVideosUrl || context.video.videosHomeUrl) : this.updateUrl(null, b.videoReferrer))
        }
    }, h.prototype.expandVideo = function() {
        var a = this;
        this.player.$container.animate({
            opacity: .01
        }, function() {
            a.player.$container.addClass("full"), a.player.$container.animate({
                opacity: 1
            }), a.isExpanded = !0
        });
        if (document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled) {
            var b = this.player.$container.children("div").get(0);
            b.requestFullscreen ? b.requestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.webkitRequestFullScreen && b.webkitRequestFullScreen()
        }
        this.player.track(this.player.trackingCategory, "Expand Full Window", context.pfc)
    }, a(document).on("fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange", function() {
        var a = h().player.$container,
            b = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        !a.children("div").is(b) && a.removeClass("full")
    }), h.prototype.toggleClosedCaptions = function() {
        comm.send("player.toggleClosedCaptions")
    }, h.prototype.enableClosedCaptions = function(a) {
        a ? this.$showCC.addClass("showCC") : this.$showCC.removeClass("showCC")
    }, h.prototype.activateClosedCaptions = function(b) {
        var c = "Closed Captioning is " + (b ? "on" : "off"),
            d = "ccDescription",
            e = a("body");
        e.find('.tip[data-name="' + d + '"] .tip-inner').text(c), e.find('[data-tip-name="' + d + '"]').attr("data-original-title", c), b ? this.$showCC.addClass("active") : this.$showCC.removeClass("active")
    }, h.prototype.shrinkVideo = function() {
        var a = this;
        this.player.$container.animate({
            opacity: .01
        }, function() {
            a.player.$container.removeClass("full"), a.player.$container.animate({
                opacity: 1
            }), a.isExpanded = !1
        })
    }, h.prototype.setOffAir = function(a) {
        this.player.$container.addClass("offair"), this.player.$container.removeClass("eventEnded"), this.player.$container.children("div").css("background-image", "url(" + a + ")")
    }, h.prototype.removeOffAir = function() {
        this.player.$container.removeClass("offair"), this.player.$container.children("div").css("background-image", "")
    }, h.prototype.setEventEnded = function() {
        this.player.$container.removeClass("offair"), this.player.$container.addClass("eventEnded")
    }, h.prototype.removeEventEnded = function() {
        this.player.$container.removeClass("eventEnded")
    }, h.prototype.renderPlayerUI = function(b) {
        var c = require("ejs").render(templates["areas/videos/views/shared/_videoPlayerUI"], {
                video: b
            }),
            d = play("video", b, "hidden"),
            e = this.player.$container.find(".dynamicUI");
        e.html("").append(c).append(d);
        var f = e.find("footer > div > time"),
            g = new Date(f.text());
        f.text(g.format ? g.format("mmmm dd, h:MMtt Z") : g.toUTCString()), a.post("/ajax/connections/connectBtn", {
            entity: b,
            entityType: b.mediaType
        }, function(c) {
            if (c && c.markup) {
                var d = a(c.markup).attr("data-uid", b.uid);
                e.append(d), comm.send("page.changed", e)
            }
        }), comm.send("wireVideoShareButtons", e.find(".share"))
    }, h.prototype.wireFlippers = function() {
        var c = this;
        setTimeout(function() {
            a.each(a(c.player.$container.find(".flippers > ul")), function(a, c) {
                new b.Flippers(c, {
                    hide: function(a) {
                        a.addClass("disabled")
                    },
                    show: function(a) {
                        a.removeClass("disabled")
                    },
                    scrollToNextLi: !0,
                    scrollIntervalDelay: 100
                })
            })
        }, 500)
    }, h.prototype.playVideo = function(a) {
        comm.send("queue.find.video", a)
    }, h.prototype.renderRightRail = function(c) {
        var d = this;
        a.ajax({
            url: "/ajax/videos/rightRail/render",
            type: "POST",
            data: {
                entityKey: c.entityKey,
                mediaId: c.mediaId
            }
        }).done(function(e) {
            function p(b) {
                var c = h.filter('[data-tab="' + b + '"]'),
                    e = h.index(c),
                    f = h.filter("[selected]"),
                    g = h.index(f);
                h.each(function(b, c) {
                    var f = d.$rightRailContainer.find("section." + a(c).data("tab"));
                    b == e ? (f.css("display", "block"), j(f), setTimeout(function() {
                        f.css("left", 0)
                    }), d.$rightRailContainer.data("$section", f)) : b == g ? f.css("left", g < e ? -340 : 340) : f.css("display", "none").css("left", b < e ? -340 : 340)
                }), f.removeAttr("selected"), c.attr("selected", ""), r(c)
            }

            function q(a) {
                if (a != "about") {
                    var b = d.$rightRailContainer.find("section." + a);
                    f.show(a, function() {
                        j(b)
                    })
                }
            }

            function r(a) {
                var b = a.width(),
                    c = a.position().left,
                    d = parseInt(a.css("margin-left")),
                    e = a.parent().position().left;
                i.css("width", b).css("left", c + e + d)
            }

            function s() {
                p("comments"), f.submitComment(), m.text("")
            }

            function t() {
                var a = m.attr("data-enabled-placeholder");
                m.prop("contentEditable", !0).attr("placeholder", a)
            }

            function u() {
                var a = m.attr("data-disabled-placeholder");
                m.prop("contentEditable", !1).attr("placeholder", a)
            }
            d.$rightRailContainer.replaceWith(e.html), d.$rightRailContainer = d.player.$container.find(".videoRailContainer");
            var f = new b.RR(d.$rightRailContainer.find(".rr")[0]);
            comm.send("page.changed", d.$rightRailContainer);
            if (context.excludeRailPixel) delete context.excludeRailPixel;
            else {
                d.$rightRailContainer.append(e.pixelHTML);
                if (typeof e.ads.adCalls != "undefined")
                    for (var g = 0; g < e.ads.adCalls.length; g++) comm.send("ads.loadAd", e.ads.adCalls[g])
            }
            var h = d.$rightRailContainer.find("nav [data-tab]"),
                i = d.$rightRailContainer.find("nav .selected-tab-indicator"),
                k = d.$rightRailContainer.find(".about .embedBtn"),
                l = d.$rightRailContainer.find(".about .comment .addComment"),
                m = l.find(".textarea"),
                n = d.$rightRailContainer.find(".rr .addComment .textarea"),
                o = d.$rightRailContainer.find(".rr .commentsControl .comments").data("directObject");
            h.on("mouseenter", function(b) {
                var c = a(b.currentTarget).data("tab");
                q(c)
            }).on("click", function(b) {
                var c = a(b.currentTarget).data("tab");
                p(c)
            }), m.on("focus", function() {
                q("comments")
            }).on("keydown", function(a) {
                a.which == 13 ? s() : a.which == 27 && m.text("")
            }).on("keyup", function(a) {
                var b = m.text();
                n.text(b)
            }), n.on("keydown", function(a) {
                (a.which == 13 || a.which == 27) && m.text("")
            }).on("keyup", function(a) {
                var b = n.text();
                m.text(b)
            }), comm.listen("connect.complete", function(a) {
                a.entityKey == o && (a.action == "add" ? t() : a.action == "remove" && u())
            }), l.data("canComment") ? t() : u(), d.$rightRailContainer.find(".about .actions [data-action]").on("click", function(b) {
                var c = a(b.currentTarget).data("action")
            }), k.on("click", function() {
                new b.LinkEmbedDialog(c)
            }), d.$rightRailContainer.data("shareTitle", c.title), comm.send("wireVideoShareButtons", d.$rightRailContainer), d.$rightRailContainer.find(".about .related").on("click", "a", function(b) {
                var c = a(b.currentTarget),
                    d = c.find(".playBtn"),
                    e = objectify(d),
                    f = c.parent("li").index();
                return comm.send("queue.find.video", e), !1
            }), p("about"), d.$rightRailContainer.$contentContainer = d.$rightRailContainer.find("> div")
        })
    }, a(window).on("resize", function() {
        if (c && c.$rightRailContainer && c.$rightRailContainer.length) {
            var a = c.$rightRailContainer.data("$section");
            a && a.length && j(a)
        }
    }), comm.listen("page.changed", function(a) {
        var b = a.closest(".videoRailContainer section");
        b.length && j(b)
    }), comm.listen("videoLightbox.instance", function(a) {
        a(h())
    }, !0), comm.listen("videoLightbox.show", function(a) {
        h().show(a)
    }, !0), comm.listen("videoLightbox.hide", function(a) {
        h().hide(a)
    }, !0)
})(jQuery, window.Myspace = window.Myspace || {}),
function(a) {
    function b(b, c, d, e) {
        var f = (a(window).width() - b) / 2,
            g = (a(window).height() - c) / 2,
            h = "status=1,width=" + b + ",height=" + c + ",top=" + g + ",left=" + f;
        window.open(d, e, h)
    }

    function c(c) {
        c.on("click", "button[data-service]", function() {
            var d = a(this),
                e = d.data("service"),
                f = {};
            switch (e) {
                case "myspace":
                    comm.send("superpost", {
                        element: this,
                        text: c.data("shareTitle") + " " + window.location.href
                    });
                    break;
                case "twitter":
                    f.url = window.location.href, f.text = c.data("shareTitle"), b(575, 275, "https://twitter.com/share?" + a.param(f), "twitter-share");
                    break;
                case "facebook":
                    f.u = window.location.href, b(626, 436, "https://www.facebook.com/sharer/sharer.php?" + a.param(f), "facebook-share")
            }
        })
    }
    comm.listen("wireVideoShareButtons", function(a) {
        c(a)
    }, !0)
}(jQuery);
var Queue = function(a, b) {
    function h(a) {
        var b = l(a);
        return b.length && (f.removeClass("selected"), f = b.addClass("selected")), b
    }

    function i(a, c) {
        m("load", $.extend(c, {
            $li: a,
            mediaItem: k(a),
            mode: b
        }))
    }

    function j(a, b) {
        var c = [];
        return a.forEach(function(a, d) {
            try {
                var e = document.createElement("ul");
                e.innerHTML = require("ejs").render(templates["common/views/footer/_queueItem"], {
                    queueItem: a
                }), e.children[0].setAttribute("data-order", b + d), c.push(e.children[0])
            } catch (f) {}
        }), $(c)
    }

    function k(a) {
        var b = a.find(".playBtn"),
            c;
        return b.length && (c = objectify(b)), c
    }

    function l(a) {
        if (typeof a == "object") {
            if (a instanceof $ && a.is("li")) return a;
            if (a instanceof Node && a.tagName == "LI") return $(a)
        } else if (typeof a == "string") return c.filter(a);
        return $()
    }

    function m(a, b) {
        comm.send("player." + a, b)
    }

    function n(a) {
        p(a), s()
    }

    function o() {
        s()
    }

    function p(a) {
        e = d.find("li"), c.listId = undefined, m("queueChanged", $.extend({
            mode: b
        }, a))
    }

    function q() {
        e = d.find("li"), e.each(function(a, b) {
            b.setAttribute("data-order", a)
        })
    }

    function r(a, c, d) {
        scomm.send("queue." + b + "." + a, c, d)
    }

    function s(a) {
        r("setHtml", d.html(), a)
    }

    function t(a) {
        d.html(a), d.find(".connectButton").removeAttr("data-popover-initialized"), f = d.find("li.selected"), p()
    }

    function u(a) {
        var b = [];
        e.each(function(a, c) {
            b.push(parseInt(c.getAttribute("data-order")))
        }), r("setOrder", b, a)
    }

    function v(a) {
        e.each(function(b, c) {
            c.setAttribute("data-order", a[b])
        })
    }

    function w(a) {
        r("setSelected", c.position, a)
    }

    function x(a) {
        h('li[data-order="' + a + '"]')
    }
    var c = this,
        d = $(a),
        e = d.find("li"),
        f = d.find("li.selected"),
        g;
    q(), this.listId, this.removed = $.noop, this.play = $.noop, this.expand = $.noop, Object.defineProperty(this, "mode", {
        get: function() {
            return b
        }
    }), Object.defineProperty(this, "$ul", {
        get: function() {
            return d
        }
    }), Object.defineProperty(this, "$lis", {
        get: function() {
            return e
        }
    }), Object.defineProperty(this, "$selected", {
        get: function() {
            return f
        }
    }), Object.defineProperty(this, "$previous", {
        get: function() {
            return d.find('li[data-order="' + (this.position - 1) + '"]')
        }
    }), Object.defineProperty(this, "$next", {
        get: function() {
            return d.find('li[data-order="' + (this.position + 1) + '"]')
        }
    }), Object.defineProperty(this, "$first", {
        get: function() {
            return d.find('li[data-order="0"]')
        }
    }), Object.defineProperty(this, "$last", {
        get: function() {
            return d.find('li[data-order="' + (this.length - 1) + '"]')
        }
    }), Object.defineProperty(this, "length", {
        get: function() {
            return e.length
        }
    }), Object.defineProperty(this, "position", {
        get: function() {
            return parseInt(f.attr("data-order"))
        }
    }), Object.defineProperty(this, "media", {
        get: function() {
            var a = [];
            return e.each(function(b, c) {
                a.push(k($(c)))
            }), a
        }
    }), this.set = function(a) {
        var b = j(a, 0);
        return f = $(), d.empty().append(b), n(), g && c.shuffle(), b
    }, this.insert = function(a) {
        if (!this.$next.length) return c.append(a);
        var b = j(a, this.position + 1),
            d = b.length;
        return e.each(function(a, b) {
            var e = parseInt(b.getAttribute("data-order"));
            e > c.position && b.setAttribute("data-order", e + d)
        }), b.insertAfter(f), n(), b
    }, this.append = function(a) {
        var b = j(a, c.length);
        return d.append(b), n(), b
    }, this.remove = function(a, d) {
        var e = l(a);
        if (e.remove().length) {
            n(), g ? c.shuffle() : c.unshuffle();
            if (e.hasClass("selected"))
                if (c.length == 0) f = $(), m("unload", b);
                else {
                    var h = parseInt(e.attr("data-order"));
                    h == c.length ? c.previous(d) : c.select('li[data-order="' + h + '"]', d)
                } c.removed(e)
        }
    }, this.clear = function(a) {
        e.length && (d.empty(), n(a), m("unload", b))
    }, this.select = function(a, b) {
        var c = h(a);
        return c.length && (w(), i(c, b)), c
    }, this.play = function(a, b) {
        return this.select(a, $.extend(b, {
            play: !0
        }))
    }, this.replay = function(a) {
        return this.play(c.$selected, a)
    }, this.previous = function(a) {
        return this.select(this.$previous, a)
    }, this.next = function(a) {
        return this.select(this.$next, a)
    }, this.first = function(a) {
        return this.select(this.$first, a)
    }, this.last = function(a) {
        return this.select(this.$last, a)
    }, this.error = function() {
        f.hasClass("error") || (f.append('<div class="error"><i class="error_24"></i><span>Error Playing</span></div>'), setTimeout(function() {
            f.addClass("error")
        }, 50))
    }, this.filter = function(a) {
        return d.find(a).closest("li")
    }, this.shuffle = function() {
        var a = [],
            b = !!f.length;
        b || a.push(0);
        for (var c = 1; c < this.length; c++) a.push(c);
        for (var d, h, c = a.length; c; d = parseInt(Math.random() * c), h = a[--c], a[c] = a[d], a[d] = h);
        e.each(function(c, d) {
            d.setAttribute("data-order", b && d.className.indexOf("selected") > -1 ? 0 : a.shift())
        }), u(), g = !0
    }, this.unshuffle = function() {
        q(), u(), g = !1
    }, this.resetOrder = function() {
        q()
    }, this.changed = function(a) {
        n(a)
    }, this.updated = function() {
        o()
    }, this.sync = function(a) {
        r(a, scomm.hash, localStorage.activePlayer)
    };
    var y = {
        syncHtml: s,
        setHtml: t,
        syncOrder: u,
        setOrder: v,
        syncSelected: w,
        setSelected: x
    };
    scomm.add(function(a, c, d) {
        var e = a.split("."),
            f = e[0],
            g = e[1],
            a = e[2];
        if (f != "queue" || g != b) return;
        y[a](c)
    })
};
(function() {
    function d() {
        var c = {
            time: b("currentTime"),
            streamStartDateTime: b("streamStartDateTime"),
            playLinkedVideo: !1
        };
        c.resuming = c.streamStartDateTime && c.time > 0;
        var d = a.select('[data-sequence-id="' + b("sequenceId") + '"]', c);
        d.length || (a.length ? a.first() : r("load", {
            mode: "queue"
        }))
    }

    function e() {
        return a.$selected.next().find(".playBtn").attr("data-sequence-id")
    }

    function f(a, b, c) {
        var d = {
                media: []
            },
            c = e();
        return b.forEach(function(a) {
            d.media.push({
                mediaType: a.mediaType,
                mediaId: a.mediaId,
                releaseId: a.mediaReleaseId,
                influencerId: a.influencerId,
                entityKey: a.entityKey,
                sourceEntityKey: a.sourceEntityKey || ""
            })
        }), a == "insert" && (isNaN(c) ? a = "append" : d.beforeSequenceId = c), {
            action: a,
            data: d
        }
    }

    function h(a, b, c) {
        g.push({
            action: a,
            media: b,
            play: c
        }), g.length == 1 && i(g[0])
    }

    function i(c) {
        function j() {
            var c = f(d, e);
            p(c.action, c.data, function(c) {
                if ($.isArray(c)) {
                    var d;
                    j.each(function(a, b) {
                        var e = c[a],
                            f = b.querySelector(".playBtn"),
                            g = b.querySelector(".connectButton");
                        g && (e.isConnected ? g.className.indexOf("connected") == -1 && (g.className += " connected") : g.className.indexOf("connected") > -1 && (g.className = g.className.replace("connected", "").replace("  ", " ").trim()), g.setAttribute("data-is-connected", !!e.isConnected)), f && (f.setAttribute("data-sequence-id", e.sequenceId), f.setAttribute("data-is-connected", !!e.isConnected), e.sourceName && e.sourceUrl && (f.setAttribute("data-source-name", e.sourceName), f.setAttribute("data-source-url", e.sourceUrl)), b.className.indexOf("selected") > -1 && (d = objectify($(f))))
                    }), a.updated(), d && (delete d.allowedPlay, r("state", {
                        mediaItem: d
                    })), b({
                        sequenceId: a.$selected.find(".playBtn").attr("data-sequence-id")
                    })
                }
            }, undefined, function() {
                g.shift(), g.length && i(g[0])
            });
            var j = a[c.action](e);
            h && a.play(c.action == "set" ? '[data-order="0"]' : j.first())
        }
        var d = c.action,
            e = c.media,
            h = c.play;
        h == undefined && (h = !a.length), a.$lis.length + e.length > context.playlistMaxItems ? l(function() {
            d = "set", j()
        }) : j()
    }

    function j(a, b) {
        var c = {},
            d = e();
        return b.albumId ? c.albumId = b.albumId : b.playlistId && (c.playlist = {
            playlistId: b.playlistId,
            profileId: b.profileId
        }), a == "insert" && (isNaN(d) ? a = "append" : c.beforeSequenceId = d), b.influencerId && (c.influencerId = b.influencerId), {
            action: a,
            data: c
        }
    }

    function k(b, c, d) {
        function f() {
            p(e.action, e.data, function(b) {
                if ($.isArray(b)) {
                    var f = a[e.action](b);
                    if (d) {
                        var g = c.track ? f.eq(c.track) : e.action == "set" ? f.filter('[data-order="0"]') : f.first();
                        a.play(g)
                    }
                }
                q("loaded", c)
            }, function(a) {
                a.status == 429 ? l(function() {
                    delete e.beforeSequenceId, e.action = "set", f()
                }, function() {
                    q("loaded")
                }) : q("loaded")
            })
        }
        d = d || !a.length, q("loading", c);
        var e = j(b, c);
        f()
    }

    function l(a, b) {
        Myspace.Confirm({
            text: "You have too many items in your queue. Do you want to clear your queue and continue?",
            yes: {
                text: "Yes",
                onClick: a
            },
            no: {
                text: "No",
                onClick: b
            }
        })
    }

    function m(c) {
        var d = objectify(c.find(".playBtn")),
            e = {
                mediaType: d.mediaType,
                mediaId: d.mediaId,
                sequenceId: d.sequenceId
            },
            f = c.next().find(".playBtn").attr("data-sequence-id");
        f && (e.beforeSequenceId = f), p("move", {
            media: e
        }), b("shuffled") || a.resetOrder(), a.changed()
    }

    function n() {}

    function p(a, b, c, d, e) {
        $.save({
            url: "/ajax/music/queue/" + a,
            data: b,
            success: c,
            error: d,
            complete: e
        })
    }

    function q(a, b) {
        c.broadcast(a, b), scomm.send && scomm.send("queue.broadcast." + a, b)
    }

    function r(a, b) {
        comm.send("player." + a, b)
    }

    function s(a, b) {}
    var a = new Queue("#queue .list.queue", "queue"),
        b = new CookieHelper("player");
    a.$ul.on("click", function(b) {
        var c = $(b.target),
            d = c.closest("li"),
            e = d.find(".playBtn"),
            f = e.attr("data-type");
        if (!d.length || c.is("a") && (f != "video" || !c.parent().is("h6"))) return;
        var g = c.closest(".connectButton");
        if (g.length) {
            s("connect", g.hasClass("connected") ? "disconnect" : "connect");
            return
        }
        if (c.is("a") && f === "video" || c.hasClass("expand")) {
            var h = objectify(e);
            comm.send("videoLightbox.instance", function(a) {
                a && a.show(h)
            }), c.hasClass("expand") && s("expand")
        } else if (c.hasClass("remove")) a.remove(d, {
            playLinkedVideo: !1
        }), s("remove", f);
        else if (d.hasClass("selected")) {
            var i = e.hasClass("playing") ? "pause" : "resume";
            r(i, f), s(i, f)
        } else s("play", f), a.play(d, {
            playLinkedVideo: !1
        });
        return !1
    });
    var c = comm.own("queue", {
        set: function(b) {
            var c = b.selected ? '[data-uid="' + b.selected.uid + '"]' : "",
                d = c && a.filter(c).length > 0;
            if (!d || b.listId != a.listId) h("set", b.media, !1), a.listId = b.listId;
            c ? a.play(c) : a.first({
                play: !0
            })
        },
        "play.song": function(a) {
            h("insert", [a], !0)
        },
        "insert.song": function(a) {
            h("insert", [a])
        },
        "append.song": function(a) {
            h("append", [a])
        },
        "find.video": function(b) {
            var c = a.filter('[data-media-id="' + b.mediaId + '"]');
            c.length ? a.play(c) : this["play.video"](b)
        },
        "play.video": function(a) {
            h("insert", [a], !0)
        },
        "insert.video": function(a) {
            h("insert", [a])
        },
        "append.video": function(a) {
            h("append", [a])
        },
        "set.album": function(a) {
            k("set", a, !0)
        },
        "play.album": function(a) {
            k("insert", a, !0)
        },
        "insert.album": function(a) {
            k("insert", a)
        },
        "append.album": function(a) {
            k("append", a)
        },
        "set.mixtape": function(a) {
            k("set", a, !0)
        },
        "play.mixtape": function(a) {
            k("insert", a, !0)
        },
        "insert.mixtape": function(a) {
            k("insert", a)
        },
        "append.mixtape": function(a) {
            k("append", a)
        },
        clear: function() {
            a.clear(), b({
                sequenceId: -1
            }), p("clear")
        },
        previous: function() {
            if (b("shuffled")) {
                this.next();
                return
            }
            var c = !a.previous().length;
            c && (b("repeat") != "off" ? a.last() : a.replay())
        },
        next: function() {
            var c = !a.next().length;
            c && (b("shuffled") == 1 ? (a.shuffle(), a.next()) : a.first({
                paused: b("repeat") == "off"
            }))
        },
        end: function() {
            if (b("repeat") == "one") a.replay();
            else {
                var d = !a.next().length;
                d && (c.broadcast("ended"), a.first({
                    paused: b("repeat") == "off"
                }))
            }
        },
        shuffle: function(b) {
            b ? a.shuffle() : a.unshuffle()
        },
        error: function(b) {
            a.error(), r("pause")
        },
        list: function(b) {
            b({
                $lis: a.$lis,
                listId: a.listId
            })
        },
        media: function(b) {
            b(a.media)
        },
        activate: function() {
            d()
        },
        remove: function(b) {
            a.remove(b)
        }
    });
    comm.listen({
        player: {
            "+sync": function() {
                a.sync("syncOrder")
            },
            "+activate": function() {
                b("mode") == "queue" && d()
            },
            "+activated": function() {
                b("shuffled") && a.shuffle()
            },
            "+loading": function(a) {
                a.mode == "queue" && localStorage.activePlayer == scomm.hash && b({
                    sequenceId: a.mediaItem.sequenceId,
                    currentTime: a.time
                })
            }
        }
    }), a.removed = function(c) {
        a.length == 0 && b("mode") == "queue" && r("pause");
        var d = c.find(".playBtn");
        p("remove", {
            media: {
                mediaType: d.attr("data-media-type"),
                mediaId: d.attr("data-media-id"),
                sequenceId: d.attr("data-sequence-id")
            }
        })
    };
    var g = [];
    if (window.context.features.isPlayerQueueSortable) {
        var o = {
            $elem: a.$ul,
            activeClass: "dragee",
            ignoreSelectors: ".util",
            hoverSupressorClass: "transp",
            dragText: n,
            dragStart: function(a, b) {
                b.parent().addClass("dragged")
            },
            dragEnd: function(a, b) {
                b.parent().removeClass("dragged")
            },
            drop: function(a, b) {
                m(b)
            }
        };
        new Myspace.SortManager(o)
    }
    scomm.add(function(a, b, d) {
        var e = a.split("."),
            f = e[0],
            a = e[1],
            g = e[2];
        if (f != "queue") return;
        switch (a) {
            case "broadcast":
                c.broadcast(g, b);
                break;
            default:
                comm.send("queue." + a, b)
        }
    })
})();
(function() {
    function setMode(a) {
        a && a != cookie("mode") && (cookie({
            mode: a
        }), broadcast("mode", a))
    }

    function volume(a) {
        player.volume(a), _comm.broadcast("volumeChanged", a)
    }

    function mute(a) {
        if (a) player.volume(0), _comm.broadcast("muted");
        else {
            var b = cookie("volume"),
                c = b === 0 ? 1 : b;
            player.volume(c), _comm.broadcast("unmuted")
        }
    }

    function toggleClosedCaptions() {
        var a = !cookie("ccOn");
        cookie({
            ccOn: a
        }), player.closedCaptioning(a), _comm.broadcast("activatedClosedCaptions", a)
    }

    function getTime() {
        return cookie("currentTime")
    }

    function setTime(a) {
        cookie({
            currentTime: a
        })
    }

    function getStreamStartDateTime() {
        return cookie("streamStartDateTime")
    }

    function setStreamStartDateTime(a) {
        mediaItem.streamStartDateTime = a, cookie({
            streamStartDateTime: a
        })
    }

    function mode(a, b) {
        comm.send(cookie("mode") + "." + a, b)
    }

    function broadcast(a, b) {
        _comm.broadcast(a, b), send("broadcast." + a, b)
    }

    function getState(a) {
        return $.extend({
            mode: cookie("mode"),
            mediaItem: mediaItem,
            paused: cookie("paused"),
            time: getTime(),
            tsl: tsl,
            ad: ad
        }, a)
    }

    function setMediaItem(a) {
        mediaItem && (prevMediaItem = mediaItem), mediaItem = a, generateAdMediaType()
    }

    function generateAdMediaType() {
        var a = mediaItem.mediaType,
            b;
        prevMediaItem ? b = prevMediaItem.mediaType : b = a;
        var c = b + "_" + a,
            d = context.adPlayer ? context.adPlayer.videoAdsRatio[c] : 0;
        adMediaType = Math.random() > d ? "audio" : "video", adMediaType == "audio" && (b == "video" || a == "video") && (adMediaType = null), log("Video ads ratio: " + d + ", next ad type: " + adMediaType)
    }

    function getAdsFirstAdAfter() {
        return context.adPlayer ? context.adPlayer.firstAdAfter : context.audioAds.firstAdAfter
    }

    function getAdsSubsequentAdsAfter() {
        return context.adPlayer ? context.adPlayer.subsequentAdsAfter : context.audioAds.subsequentAdsAfter
    }

    function getAdsSkippingEnabled() {
        return context.adPlayer ? adMediaType == "video" ? context.adPlayer.videoAds.skippingEnabled : context.adPlayer.audioAds.skippingEnabled : context.audioAds.skippingEnabled
    }

    function getAdsUnskippableDuration() {
        return context.adPlayer ? adMediaType == "video" ? context.adPlayer.videoAds.unskippableDuration : context.adPlayer.audioAds.unskippableDuration : context.audioAds.unskippableDuration
    }

    function getAdsEnabled(a) {
        return a ? a == "audio" ? context.adPlayer ? context.adPlayer.audioAds.enabled : context.audioAds.enabled : context.adPlayer ? context.adPlayer.videoAds.enabled : !1 : context.adPlayer ? context.adPlayer.audioAds.enabled || context.adPlayer.videoAds.enabled : context.audioAds.enabled
    }

    function ready(a) {
        if (player.active) return;
        initialAdPlayFinishCallback = function() {
            player.volume(cookie("mute") ? 0 : cookie("volume")), _comm.broadcast("ready"), Number(cookie("at")) > 0 && cookie({
                at: getAdsFirstAdAfter()
            }), !mediaItem && context.pfc !== "videodetailalt" ? activate() : onAdStop && onAdStop(), initialAdPlayFinishCallback = undefined
        }, checkActive(function() {
            _comm.broadcast("ready"), player.active || (send("state", null, localStorage.activePlayer), _comm.broadcast("sync"))
        }, function() {
            if (context.playInitialAd) {
                player.volume(.003), activating(), adMediaType = "video";
                var a = context.playInitialAdLocationId;
                a && loadAd({
                    locationId: a
                })
            } else initialAdPlayFinishCallback()
        })
    }

    function send(a, b, c, d, e) {
        scomm.send && scomm.send("player." + a, b, c, d, e)
    }

    function checkActive(a, b) {
        log("checking for active player.");
        try {
            localStorage.activePlayer ? player.active || send("ping", null, localStorage.activePlayer, function() {
                log("active player not responding."), delete localStorage.activePlayer, b && b()
            }, function() {
                log("active player found. syncing."), a && a()
            }) : (log("no active player."), b && b())
        } catch (c) {}
    }

    function activate() {
        log("activate player."), _comm.broadcast("activate")
    }

    function activating() {
        send("deactivate");
        try {
            player.active || (log("activating player."), localStorage.activePlayer = scomm.hash, _comm.broadcast("activated"), log("player activated."))
        } catch (a) {}
    }

    function deactivate() {
        ad.isPlaying && (onAdStop = undefined), player.stop();
        try {
            player.active && (delete localStorage.activePlayer, _comm.broadcast("deactivated"), log("player deactivated."))
        } catch (a) {}
    }

    function check(a) {
        a.forEach(function(a) {
            a != scomm.hash && send("check", null, a, function() {
                remove(a)
            })
        })
    }

    function save(a) {
        try {
            localStorage.players = JSON.stringify(a)
        } catch (b) {}
    }

    function remove(a) {
        var b = instances(),
            c = b.indexOf(a);
        c > -1 && (b.splice(c, 1), save(b))
    }

    function instances() {
        var a = [];
        try {
            a = JSON.parse(localStorage.players)
        } catch (b) {}
        return $.isArray(a) ? a : []
    }

    function log(a) {}
    var mediaItem, prevMediaItem, tsl = 0,
        focused, cookie = new CookieHelper("player"),
        adsCookie = new CookieHelper("ads"),
        player = Myspace.MediaManager,
        loading, onResume, onAdStop, videoRequest, adMediaType, playing, ad = {
            isPlaying: undefined,
            skipped: undefined
        },
        initialAdPlayFinishCallback, adFreeTrackPlays = [],
        switchboard = {
            load: function(a) {
                function b() {
                    loading = !0, broadcast("loading", getState()), player.load(mediaItem)
                }
                if (!a) return;
                activating(), setMode(a.mode);
                if (!a.mediaItem) {
                    this.pause();
                    return
                }
                setMediaItem(a.mediaItem), mediaItem.streamStartDateTime = a.streamStartDateTime, a.play && cookie({
                    paused: !1
                }), setTime(a.time || 0), setStreamStartDateTime(""), tsl = 0, ad.isPlaying && !context.features.isHtml5PlayerEnabled ? (onAdStop = b, broadcast("preloading", getState()), ad.skipped = !0, cookie("paused") || switchboard.resume()) : (onAdStop = undefined, b())
            },
            unload: function(a) {
                a == cookie("mode") && (this.pause(), setTime(0), tsl = 0, mediaItem = undefined, broadcast("unloaded", getState()))
            },
            pause: function() {
                player.active ? (cookie({
                    paused: !0
                }), ad.isPlaying ? broadcast("pauseAd") : player.pause(), broadcast("paused", getState())) : send("pause", null, localStorage.activePlayer)
            },
            resume: function() {
                player.active ? (cookie({
                    paused: !1
                }), onResume ? (onResume(), onResume = undefined) : ad.isPlaying ? broadcast("resumeAd") : player.resume(), broadcast("resumed", getState())) : send("resume", null, localStorage.activePlayer)
            },
            playPause: function() {
                cookie("paused") ? this.resume() : this.pause()
            },
            seek: function(a) {
                player.active ? (setTime(a), player.seek(a), broadcast("seeked", a)) : send("seek", a, localStorage.activePlayer)
            },
            volume: function(a) {
                volume(a), cookie({
                    volume: a,
                    mute: !1
                }), send("volume", a)
            },
            mute: function(a) {
                a === undefined && (a = !cookie("mute") && cookie("volume") !== 0);
                var b = cookie("volume");
                b === 0 && (b = 1), cookie({
                    mute: a,
                    volume: b
                }), a ? (player.volume(0), _comm.broadcast("muted", 0)) : (player.volume(b), _comm.broadcast("unmuted", b))
            },
            previous: function() {
                cookie("currentTime") > 3 ? switchboard.seek(0) : mode("previous")
            },
            next: function() {
                ad.isPlaying ? stopAd() : mode("next")
            },
            shuffle: function() {
                var a = !cookie("shuffled");
                cookie({
                    shuffled: a
                }), mode("shuffle", a), broadcast("shuffleChanged", a)
            },
            repeat: function() {
                var a = cookie("repeat") == "off" ? "all" : cookie("repeat") == "all" ? "one" : "off";
                cookie({
                    repeat: a
                }), broadcast("repeatChanged", a)
            },
            nowPlaying: function(a) {
                $.isFunction(a) && a(getState())
            },
            activate: function() {
                activate()
            },
            deactivate: function() {
                deactivate()
            },
            tryActivate: function() {
                focused ? activate() : setTimeout(function() {
                    scomm.hash == instances()[0] && checkActive(undefined, activate)
                }, 100)
            },
            queueChanged: function(a) {
                _comm.broadcast("queueChanged", a)
            },
            state: function(a) {
                a && a.mediaItem && mediaItem && a.mediaItem.mediaId == mediaItem.mediaId && $.extend(mediaItem, a.mediaItem), broadcast("state", getState(a))
            },
            toggleClosedCaptions: function() {
                mediaItem && toggleClosedCaptions()
            },
            incognito: function(a) {
                a == undefined && (a = !cookie("incognito")), cookie({
                    incognito: a
                }), broadcast("incognitoChanged", a)
            },
            unloadTrack: function() {
                player.unloadTrack && player.unloadTrack(), broadcast("unloaded")
            },
            ready: ready,
            isActive: function(a) {
                return a(player.active)
            },
            resize: function() {
                player.resize()
            },
            playAd: function(a) {
                !ad.isPlaying && !playing && player.playAd(a)
            },
            skipAd: function() {
                ad.isPlaying && player.skipAd()
            },
            stop: function() {
                player.stop()
            }
        },
        _comm = comm.own("player", switchboard);
    setTimeout(function() {
        var a = cookie("mute") ? 0 : cookie("volume");
        volume(a)
    }), comm.listen("page.changed", function() {
        mediaItem && _comm.broadcast("state", getState())
    }, !0), comm.listen({
        player: {
            "+adStarted": function() {
                ad.isPlaying = !0, ad.skipped = !1
            },
            "+adStopped": function() {
                ad.isPlaying = !1, setTimeout(function() {
                    player.active && (!mediaItem || mediaItem.mediaType != "video" || !mediaItem.isPremium) && cookie({
                        at: getAdsSubsequentAdsAfter()
                    }), typeof initialAdPlayFinishCallback == "function" ? (initialAdPlayFinishCallback(), adsCookie({
                        adInitVisit: Date.now()
                    })) : (player.active && typeof onAdStop == "function" && onAdStop(), onAdStop = undefined)
                })
            },
            "+adRemainingTime": function(a) {
                ad.skipped && a.ad.enableSkipAfter === 0 && stopAd()
            },
            "+loading": function() {
                videoRequest && videoRequest.abort()
            },
            "+adClicked": function() {
                player.isPlaying && player.sendAdClickTracking()
            },
            "+resumeAd": function() {
                player.isPlaying && player.resume()
            },
            "+pauseAd": function() {
                player.isPlaying && player.pause()
            }
        }
    }), player.on({
        ready: function() {
            ready()
        },
        loaded: function(a) {
            loading = !1, broadcast("loaded", $.extend({
                player: a
            }, getState()))
        },
        paused: function() {
            playing = !1, cookie({
                paused: !0
            }), broadcast("paused", getState())
        },
        resumed: function() {
            playing = !0, cookie({
                paused: !1
            }), broadcast("resumed", getState())
        },
        started: function() {
            playing = !0, !mediaItem.streamStartDateTime && setStreamStartDateTime((new Date).toISOString()), cookie({
                paused: !1
            }), setTime(0);
            var a = getState();
            a.player = player.getName(), broadcast("started", a)
        },
        ended: function() {
            playing = !1, cookie({
                originalStreamUTCDateTime: ""
            }), broadcast("bufferStatus", !1), broadcast("ended", getState()), mediaItem = undefined, mode("end")
        },
        duration: function(a) {
            mediaItem && !ad.isPlaying && (mediaItem.duration = a), broadcast("duration", a)
        },
        time: function(a, b) {
            if (loading) return;
            var c = getTime(),
                d, e;
            c < a && (e = cookie("at"), d = a - c, tsl += d, cookie({
                at: Math.max(e - d, 0)
            })), ad.isPlaying || setTime(a), broadcast("time", {
                time: a,
                tsl: tsl,
                buffer: b,
                ad: ad
            })
        },
        adLoading: function(a) {
            log("swf ad loading"), ad.isVideo = !0, a.ad = ad, broadcast("adLoading", a)
        },
        adLoaded: function(a) {
            log("swf ad loaded"), ad.isVideo = !0, a.ad = ad, broadcast("adLoaded", a), loading = !1
        },
        adStarted: function(a, b, c) {
            playing = !0, log('swf ad started, description = "' + b + '"'), player.isPlaying = !0, initialAdPlayFinishCallback && adFreeTrackPlays.push(!0), ad.clickThroughUrl = a, ad.enableSkipAfter = getAdsSkippingEnabled() && getAdsUnskippableDuration(), ad.info = b, ad.duration = c, broadcast("adStarted", {
                ad: ad
            })
        },
        adStopped: function() {
            playing = !1, player.isPlaying = !1, ad.isVideo = !0, broadcast("adStopped", getState({
                ad: ad
            }))
        },
        adDuration: function(a) {
            ad.duration = a, broadcast("adDuration", {
                ad: ad
            })
        },
        adRemainingTime: function(a, b) {
            ad.isPlaying && (ad.remainingTime = a, ad.enableSkipAfter = getAdsSkippingEnabled() && Math.max(getAdsUnskippableDuration() - b, 0), broadcast("adRemainingTime", {
                ad: ad
            }))
        },
        adPaused: function() {
            broadcast("paused", getState())
        },
        adPlaying: function() {
            broadcast("resumed", getState())
        },
        adSkippableStateChanged: function(a) {
            broadcast("adSkippableStateChanged", a)
        }
    }), scomm.add(function(cmd, data, sender) {
        var parts = cmd.split("."),
            owner = parts[0],
            fromMode = parts[1],
            cmd = parts[2];
        if (owner != "queue" || fromMode != mode) return;
        eval(cmd)(data)
    }), scomm.add(function(a, b, c) {
        var d = a.split("."),
            e = d[0],
            a = d[1],
            f = d[2];
        if (e != "player") return;
        b && b.mediaItem && setMediaItem(b.mediaItem);
        switch (a) {
            case "ad":
                ad = b, ad.isPlaying && (_comm.broadcast("adStarted", {
                    ad: ad
                }), _comm.broadcast("adDuration", {
                    ad: ad
                }), _comm.broadcast("adRemainingTime", {
                    ad: ad
                }));
                break;
            case "state":
                send("broadcast.state", getState(), c), send("ad", ad, c);
                break;
            case "broadcast":
                _comm.broadcast(f, b);
                break;
            case "volume":
                volume(cookie("volume"));
                break;
            case "mute":
                mute(cookie("mute"));
                break;
            default:
                comm.send("player." + a, b)
        }
    }), scomm.ready(function() {
        var a = instances();
        a.unshift(scomm.hash), save(a), check(a), ready("scomm")
    }), Object.defineProperty(player, "active", {
        get: function() {
            try {
                return localStorage.activePlayer == scomm.hash
            } catch (a) {
                return !0
            }
        }
    }), $(window).on("beforeunload", function() {
        try {
            player.active && (delete localStorage.activePlayer, send("tryActivate")), remove(scomm.hash)
        } catch (a) {}
    }).on("focus", function() {
        focused = !0
    }).on("blur", function() {
        focused = !1
    })
})();
(function() {
    function e(a) {
        return !b.find(".list." + a + " li").length
    }

    function f(a) {
        return b.find(".list." + a)
    }

    function g(a) {
        $("#save_queue, #clear_queue").attr("disabled", a == undefined || a ? null : "disabled")
    }

    function h(a) {
        var b = $("#queue .list li.selected:visible");
        if (d.is(":animated") || !b.length) return;
        var c = d.offset().left,
            e = d.outerWidth(),
            f = b[0].offsetLeft,
            g = b.position().left,
            h = b.width(),
            i = b.outerWidth();
        (a || g < c || g + h > c + e) && d.animate({
            scrollLeft: f - c - e / 2 + i / 2
        }, 400)
    }

    function i(a, b, c) {}
    var a = $("#footer"),
        b = $("#queue"),
        c = $("#queue .options"),
        d = $("#queue .horizontal");
    comm.listen({
        player: {
            "+ready": function() {
                if (queryString.play == "1")
                    if (context.pfc == "song" || context.pfc == "artistSong" || context.pfc == "albumSong") {
                        var a = $("#song .mediaItems .playBtn").first();
                        a.length && comm.send("queue.play.song", objectify(a))
                    } else if (context.pfc == "artistAlbum" || context.pfc == "album") {
                    var a = $("#album .playBtn").first();
                    a.length && comm.send("queue.play.album", objectify(a))
                } else if (context.pfc == "mixdetail") {
                    var a = $("#mixData .playBtn").first();
                    if (a.length) {
                        var b = objectify(a);
                        b.track = queryString.track - 1, comm.send("queue.set.mixtape", b)
                    }
                } else h(!0);
                else h(!0)
            },
            "+mode": function(a) {
                g(!e(a))
            },
            "+loading": function(a) {
                h()
            },
            "+queueChanged": function(b) {
                a.hasClass(b.mode) && a.toggleClass("empty", e(b.mode)), comm.send("page.changed", f(b.mode)), g(!e(b.mode))
            },
            "+adStarted": function(a) {
                comm.send("drawer.cover", a.ad.nonSkipTime > 0 ? "Skip in " + Math.ceil(a.ad.nonSkipTime) + " seconds..." : "")
            },
            "+adRemainingTime": function(a) {
                comm.send("drawer.cover", a.ad.nonSkipTime > 0 ? "Skip in " + Math.ceil(a.ad.nonSkipTime) + " seconds..." : "")
            },
            "+adStopped": function(a) {
                comm.send("drawer.cover")
            }
        },
        queue: {
            "+loading": function(a) {
                var b = "Loading";
                if (a && a.title) {
                    b += " " + a.title;
                    if (a.artistName || a.owner) b += " by " + (a.artistName || a.owner)
                }
                b += "...", comm.send("drawer.message", b)
            },
            "+loaded": function() {
                comm.send("drawer.panel", "queue"), comm.send("drawer.message")
            }
        },
        drawer: {
            "+opened": function(a) {
                a == "queue" && h(!0)
            },
            "+panel": function(a) {
                a == "queue" && h(!0)
            }
        }
    }), c.on("click", function(a) {
        var b = $(a.target).closest("button");
        if (b.is("[disabled]")) return;
        switch (b.attr("id")) {
            case "full_queue":
                spaceway.href = "/queue", i("playerQueue", "fullQueue", "clicked");
                break;
            case "history":
                spaceway.href = "/history", i("playerQueue", "history", "clicked");
                break;
            case "save_queue":
                i("playerQueue", "save", "clicked"), comm.send(Cookies.player.values.mode + ".media", function(a) {
                    comm.send("mix.addItems", a)
                });
                break;
            case "clear_queue":
                i("playerQueue", "clear", "clicked");
                var c;
                Myspace.Confirm({
                    text: "Are you sure you want to clear your queue?",
                    yes: {
                        text: "Yes",
                        onClick: function() {
                            comm.send(Cookies.player.values.mode + ".clear"), c = !0
                        }
                    },
                    no: {
                        text: "No"
                    }
                });

                function d() {
                    i("playerQueue", "clear", c ? "confirmed" : "cancelled"), comm.stopListening("dialog.hiding", d)
                }
                comm.listen("dialog.hiding", d)
        }
    })
})();
var Myspace = Myspace || {};
Myspace.Mixes = function(a) {
    function d(a, b) {
        var c = objectify(b.find(".playBtn"));
        return c.title
    }

    function e(a, b) {
        b.parent().addClass("dragged")
    }

    function f(a, b) {
        b.parent().removeClass("dragged")
    }

    function g(a, b) {
        var c, d = b.find(".playBtn").data("sequence-id"),
            e = b.next().find(".playBtn").data("sequence-id");
        d == 0 ? c = b.find(".playBtn").data("playlist-id") : c = d;
        var f = {
            playlistId: c,
            beforeSequenceId: e
        };
        o("reorder"), comm.send("mix.move", f)
    }

    function h(c) {
        var d = a(c);
        b.find(".newMix").after(d), Myspace.DragDrop.addDroppables(d)
    }

    function i(a, c) {
        var d = b.find('.mix [data-playlist-id="' + a + '"]').closest("li");
        d.find(".mixCover").removeClass("collage").html('<img src="' + c[3].url + '" />')
    }

    function j(a) {
        b.find('.mix [data-playlist-id="' + a + '"]').closest("li").addClass("noMedia")
    }

    function k(a) {
        b.find('.mix [data-playlist-id="' + a + '"]').closest("li").removeClass("noMedia")
    }

    function l(a, b, c, d) {
        o("removeOwnMix", "click");
        var e = {
            playlistId: a,
            objectVersion: b,
            title: d,
            entityKey: c,
            onSuccess: function(a) {
                a.entityKey = c, comm.send("mix.deleted", a), o("removeOwnMix", "confirmed")
            },
            onCancel: function() {
                o("removeOwnMix", "cancelled")
            }
        };
        comm.send("mix.delete", e)
    }

    function m(c) {
        var d = b.find('[data-entity-key="' + c.playlist.entityKey + '"]').closest("li"),
            e = a(c.markup);
        d.replaceWith(e), Myspace.DragDrop.addDroppables(e)
    }

    function n(a) {
        b.find('[data-entity-key="' + a.entityKey + '"]').closest("li").remove()
    }

    function o(a, b) {}
    var b = a("#mixes .list");
    comm.listen("mix.imageChanged", function(a) {
        i(a.playlistId, a.imgs)
    }, !0), comm.listen("mix.created", function(a) {
        h(a.markup)
    }, !0), comm.listen("mix.removeItem", function(a) {
        a.totalRecords || j(a.playlistId)
    }, !0), comm.listen("mix.addItem", function(a) {
        k(a.playlistId)
    }, !0), b.find(".newMix").click(function(a) {
        a.preventDefault(), a.stopPropagation(), comm.send("mix.create", {
            onSuccess: function() {
                o("newMix", "created")
            },
            onCancel: function() {
                o("newMix", "cancelled")
            }
        }), o("newMix", "click")
    }), b.click(function(b) {
        var c = a(b.target);
        if (c.hasClass("remove")) {
            b.preventDefault(), b.stopPropagation();
            var d = c.parent().children(".playBtn"),
                e = objectify(d),
                f = c.closest("li");
            f.hasClass("mix") ? l(e.playlistId, e.objectVersion, e.entityKey, e.title) : (comm.send("mix.deleted", e), comm.send("disconnect", {
                entityKey: e.entityKey,
                playlistId: e.playlistId,
                onSuccess: function(a) {
                    comm.send("connect.status", {
                        entityKey: e.entityKey
                    })
                }
            }), o("removeConnectedMix", "click"))
        } else if (!c.hasClass("playBtn") && !c.hasClass("artist")) {
            b.preventDefault(), b.stopPropagation();
            var g = c.closest("li").find(".title").attr("href");
            comm.send("location.href", g)
        } else c.hasClass("playBtn") && o("play")
    });
    var c = {
        $elem: b,
        activeClass: "dragee",
        ignoreSelectors: ".util",
        hoverSupressorClass: "transp",
        dragText: d,
        dragStart: e,
        dragEnd: f,
        drop: g
    };
    return new Myspace.SortManager(c), comm.listen("mix.deleted", n, !0), {
        add: h,
        edit: m,
        remove: n
    }
}(jQuery);
(function() {
    function x(a) {
        var b = a / 60 | 0,
            c = "0" + Math.floor(a % 60);
        return b + ":" + c.substr(c.length - 2)
    }

    function E(a) {
        C || D.percent(a), B.width(a * 100 + "%"), z.attr("class", "noStyle volume_" + (a < .05 ? "off" : a >= .05 && a < .2 ? "low" : a >= .2 & a < .8 ? "mid" : "max"))
    }

    function F(a) {
        e.removeClass("queue").addClass(a).toggleClass("empty", !$("#queue .list." + a + " li").length), U()
    }

    function H(a) {
        return !!a && a.indexOf(document.domain) == -1 && !a.match(/https?\:\/\/(\w+\.)?myspace\.com/)
    }

    function I(b) {
        a = b.mediaItem;
        if (e.hasClass("ad")) return;
        K(b.mediaItem), S(b.mode), J(b.paused), p.html(x(b.time)), q.html(" / " + x(a.duration)), t.width(b.time / a.duration * 100 + "%"), w.percent(b.time / a.duration)
    }

    function J(a) {
        e.toggleClass("paused", a), V("play", a ? "Play" : "Pause")
    }

    function K(a) {
        M(a.title, a.titleVersion, a.isExplicit, a.url || a.detailUrl, undefined, function() {
            if (a.mediaType == "video") return L(a), !1
        }), N(a.artistName, a.artistUrl), R(a.sourceName || a.albumTitle, a.sourceUrl || a.albumUrl)
    }

    function L(a) {
        comm.send("videoLightbox.instance", function(b) {
            b ? b.show(a, {
                detailUrl: a.detailUrl
            }) : (context.pfc !== "videodetail" && (Myspace.videoReferrer = window.location.pathname), comm.send("location.href", a.detailUrl))
        })
    }

    function M(a, b, c, d, e, f) {
        var g = "";
        a && (a = htmlDecode(a), d ? (g = $("<a></a>").attr("href", d).text(a).click(f), e && g.attr("target", e)) : g = $("<span></span>").text(a)), b && g.append('\n<span class="version">(' + b + ")</span>"), c && g.append('\n<i class="explicit_10"></i>'), l.html(g)
    }

    function N(a, b) {
        var c = "";
        a && (c = (b ? $("<a></a>").attr("href", b) : $("<span></span>")).text(htmlDecode(a))), m.html(c)
    }

    function O(a, b) {
        var c = "";
        a && (c = htmlDecode(a)), b && (c += " by " + htmlDecode(b)), document.title = c || "Myspace"
    }

    function R(a, b) {
        k.attr("class", "track");
        var c = "";
        a && (c = (b ? $("<a></a>").attr("href", b).attr("title", a) : $("<span></span>")).text(a)), P && clearTimeout(P), Q && clearInterval(Q), setTimeout(function() {
            o.html(c)
        }, 1e3), c && (P = setTimeout(function() {
            k.attr("class", "source")
        }, 1e4), Q = setInterval(function() {
            k.attr("class", "track"), P = setTimeout(function() {
                k.attr("class", "source")
            }, 1e4)
        }, 13e3))
    }

    function S(a) {
        var b = $("#playControls .connectButton"),
            c = $("#queue .list." + a + " .selected .connectButton");
        if (c.length) {
            var d = $('<button data-action="connect"><span></span><span></span></button>');
            $.each(c.prop("attributes"), function(a, b) {
                b.name != "data-popover-initialized" && d.attr(b.name, b.value)
            }), b.replaceWith(d), comm.send("hcard.init", f)
        } else b.attr("disabled", "disabled")
    }

    function T(a) {
        N(a ? "(skip in " + Math.ceil(a) + " seconds)" : ""), a === 0 && g.removeAttr("disabled")
    }

    function U() {
        var a = $("#playControls button, #modeControls button"),
            b = $();
        e.hasClass("empty") && (b = a), e.hasClass("ad") && (b = a.filter('[data-action="previous"], [data-action="next"], [data-action="connect"], [data-action="shuffle"], [data-action="repeat"]')), e.hasClass("ad") && e.attr("data-current-player") === "vevo" && (b = b.add(a.filter('[data-action="play"]'))), a.not(b).removeAttr("disabled"), b.attr("disabled", "disabled");
        var c = "";
        b.each(function(a, b) {
            var d = b.getAttribute("data-tip-name");
            d && (c += (c.length ? ", " : "") + '.footertip[data-name="' + d + '"]')
        }), $(c).hide()
    }

    function V(a, b) {
        var c = $("body");
        c.find('.tip[data-name="' + a + '"] .tip-inner').text(b), c.find('[data-tip-name="' + a + '"]').attr("data-original-title", b)
    }

    function W(a, b, c) {}
    var a, b, c, d = $("body"),
        e = $("#footer"),
        f = $("#player"),
        g = $('#playControls button[data-action="next"]'),
        h = $("#incognito"),
        i = $("#dialogCover");
    f.on("click", function(a) {
        var b = $(a.target).closest("[data-action]:not([disabled])"),
            c = b.attr("data-action");
        if (c) switch (c) {
            case "mixes":
            case "queue":
                return comm.send("drawer.panel", c), W("player", "panel", c), !1;
            case "play":
                c = e.hasClass("paused") ? "resume" : "pause", comm.send("player." + c), W("player", c);
                break;
            case "connect":
                W("player", "connect", b.hasClass("connected") ? "disconnect" : "connect");
                break;
            case "shuffle":
                comm.send("player.shuffle"), W("player", "shuffle", e.hasClass("shuffled") ? "on" : "off");
                break;
            case "repeat":
                comm.send("player.repeat"), W("player", "repeat", e.hasClass("repeatAll") ? "all" : e.hasClass("repeatOne") ? "one" : "off");
                break;
            case "mute":
                comm.send("player.mute"), W("player", "mute", e.hasClass("muted") ? "on" : "off");
                break;
            case "signin":
                return comm.send("login.show", {
                    context: {
                        action: "signInPlayer"
                    }
                }), !1;
            default:
                W("player", c), comm.send("player." + c)
        }
    });
    var j = $("#nowPlaying"),
        k = $("h5", j),
        l = $(".title", j),
        m = $(".artist", j),
        n = $(".videoLink", j),
        o = $(".source span", j),
        p = $(".time", j),
        q = $(".duration", j),
        r = $(".meter", j),
        s = $(".buffer", r),
        t = $(".trailer", r),
        u = $(".disabledDuration", r),
        v, w = new Myspace.Slider(r, {
            units: "%",
            axis: "x",
            jump: function(b, c) {
                var d = b / c * a.duration;
                d < a.allowedPlay && (p.html(x(d)), t.width(b / c * 100 + "%"), comm.send("player.seek", d)), W("player", "seek")
            },
            start: function(a, b) {
                v = !0, t.width(a / b * 100 + "%")
            },
            drag: function(a, b) {
                t.width(a / b * 100 + "%")
            },
            stop: function(b, c) {
                v = !1, comm.send("player.seek", b / c * a.duration), W("player", "seek")
            }
        }),
        y = $("#volumeControl"),
        z = $("#volumeBtn"),
        A = $(".meter", y),
        B = $(".trailer", y),
        C, D = new Myspace.Slider(A, {
            units: "%",
            axis: "x",
            jump: function(a, b) {
                comm.send("player.volume", a / b), W("player", "volume")
            },
            start: function(a, b) {
                C = !0, comm.send("player.volume", a / b)
            },
            drag: function(a, b) {
                comm.send("player.volume", a / b)
            },
            stop: function(a, b) {
                C = !1, W("player", "volume")
            }
        }),
        G;
    comm.listen({
        player: {
            "+mode": function(a) {
                F(a)
            },
            "+preloading": function(a) {
                e.hasClass("ad") ? (c = Myspace.genericDialog({
                    html: "<p>Your " + a.mediaItem.type + " has been queued. It will begin shortly.</p>",
                    id: "queuedDialog",
                    buttons: null,
                    close: !1
                }), i.css("z-index", 5), setTimeout(function() {
                    c.hide(), i.css("z-index", "")
                }, 3e3)) : (s.width("0%"), I(a))
            },
            "+loading": function(a) {
                b = !0, e.removeClass("ad"), s.width("0%"), I(a)
            },
            "+loaded": function(a) {
                b = !1, e.removeClass("ad").attr("data-current-player", a.player), s.width("0%"), a.time = 0, I(a)
            },
            "+started": function(a) {
                I(a)
            },
            "+paused": function() {
                J(!0)
            },
            "+resumed": function() {
                J(!1)
            },
            "+ended": function() {
                J(!0)
            },
            "+state": function(a) {
                I(a), J(a.paused)
            },
            "+time": function(a) {
                if (!b) {
                    p.html(x(a.time)), v || (t.width(Math.min(a.time / G, 1) * 100 + "%"), w.percent(Math.min(a.time / G, 1)));
                    var c = a.time + a.buffer;
                    s.width(Math.min(c / G, 1) * 100 + "%")
                }
            },
            "+duration": function(a) {
                G = a, q.html(" / " + x(G)).attr("data-duration", G)
            },
            "+volumeChanged": function(a) {
                E(a), e.removeClass("muted")
            },
            "+muted": function() {
                E(0), V("mute", "Unmute"), e.addClass("muted")
            },
            "+unmuted": function() {
                E(Cookies.player.values.volume), V("mute", "Mute"), e.removeClass("muted")
            },
            "+repeatChanged": function(a) {
                e.toggleClass("repeatAll", a == "all").toggleClass("repeatOne", a == "one")
            },
            "+shuffleChanged": function(a) {
                e.toggleClass("shuffled", a)
            },
            "+queueChanged": function(a) {
                e.hasClass(a.mode) && e.toggleClass("empty", !$("#queue .list." + a.mode + " li").length), U()
            },
            "+adLoaded": function(a) {
                e.attr("data-current-player", a.player), b = !1
            },
            "+adStarted": function(a) {
                var b = H(a.ad.clickThroughUrl),
                    c = b || !a.ad.adInfo ? "Advertisement" : a.ad.adInfo,
                    d = b ? "_blank" : "";
                M(c, undefined, undefined, a.ad.clickThroughUrl, d, function() {
                    return comm.send("player.adClick"), !1
                }), T(a.ad.enableSkipAfter), R(), t.width(0), s.width(0), r.attr("disabled", "disabled"), e.addClass("ad"), U(), J(!1)
            },
            "+adClicked": function(a) {
                H(a.ad.clickThroughUrl) ? window.open(a.ad.clickThroughUrl) : comm.send("location.href", a.ad.clickThroughUrl)
            },
            "+adDuration": function(a) {
                G = a.ad.duration, q.html(" / " + x(a.ad.duration)).attr("data-duration", a.ad.duration)
            },
            "+adRemainingTime": function(a) {
                if (e.hasClass("ad")) {
                    p.html(x(a.ad.remainingTime)), s.width(0);
                    var b = parseInt(q.attr("data-duration"));
                    t.width((b - a.ad.remainingTime) / b * 100 + "%"), T(a.ad.enableSkipAfter)
                }
            },
            "+adStopped": function(a) {
                c && (c.hide(), i.css("z-index", "")), r.removeAttr("disabled"), e.removeClass("ad"), U(), I(a)
            },
            "+incognitoChanged": function(a) {
                h.toggleClass("on", a)
            }
        }
    });
    var P, Q;
    U()
})();
(function() {
    var a = {
        FBLog: !0,
        FBAssociatedUserId: null,
        FBCurrentUserId: null,
        url: window.location.href,
        FBSongUrl: queryString.song,
        prevActionId: 0,
        IsPostToFacebookSettingEnabled: !0,
        settingsObjectVersion: 0,
        FBLastStatusUrl: null,
        getId: function(a, b) {
            var c = a.substr(a.lastIndexOf("-") + 1);
            if (b) {
                a = a.substr(0, a.lastIndexOf("-"));
                var d = a.substr(a.lastIndexOf("-") + 1);
                d && !isNaN(d) && (c = d + ";" + c)
            }
            return c
        },
        play: function(b) {
            var c = a;
            c.FBLog && console.log("play called from FB", 1), c.FBLog && console.log(b, 1);
            if (b.song) c.FBSongUrl = b.song, $.ajax({
                type: "POST",
                dataType: "json",
                url: "/ajax/music/songObject",
                data: {
                    id: c.getId(b.song, 1)
                },
                success: function(a) {
                    comm.send("queue.play.song", a)
                },
                error: function(a) {
                    c.sendStatus(4)
                }
            });
            else if (b.album) $.ajax({
                type: "POST",
                dataType: "json",
                url: "/ajax/music/albumObject",
                data: {
                    id: c.getId(b.album)
                },
                success: function(a) {
                    comm.send("queue.play.album", a)
                },
                error: function(a) {
                    c.FBSongUrl = b.album, c.sendStatus(4)
                }
            });
            else if (b.playlist) {
                var d = b.playlist.toLowerCase();
                d = "/ajax/music/mixObject" + d.substr(d.indexOf("myspace.com") + 11), $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: d,
                    success: function(a) {
                        comm.send("queue.play.mixtape", a)
                    },
                    error: function(a) {
                        c.FBSongUrl = b.playlist, c.sendStatus(4)
                    }
                })
            }
        },
        pause: function(b) {
            var c = a;
            c.FBLog && console.log("pause called from FB", 1), c.FBLog && console.log(b, 1), !b.song || c.FBLastStatusUrl == b.song ? comm.send("player.pause", {}) : c.sendStatus()
        },
        resume: function(b) {
            var c = a;
            c.FBLog && console.log("resume called from FB", 1), c.FBLog && console.log(b, 1), comm.send("player.resume")
        },
        sendStatus: function(b) {
            var c = a,
                d = Cookies.player.values.incognito == "true";
            d = d || !c.IsPostToFacebookSettingEnabled || context.loginId <= 0;
            if (b && typeof b == "number") {
                c.FBCurrentUserId && c.FBSongUrl && (c.FBLog && console.log("Facebook Status: Error, ErrorCode: " + b + " ,song: " + c.FBSongUrl, 1), FB.Music.send("STATUS", {
                    error_code: b,
                    playing: !1,
                    song: c.FBSongUrl,
                    user_id: c.FBCurrentUserId
                })), c.FBSongUrl = "", c.FBLastStatusUrl = null;
                return
            }
            comm.send("player.nowPlaying", function(b) {
                var e = b.mediaItem || {
                    mediaId: 0
                };
                c.FBAssociatedUserId && c.prevMediaId && c.prevActionId && (b.paused || c.prevMediaId != e.mediaId) && c.prevStartTime > (new Date).getTime() - 15e3 && ($.ajax({
                    type: "POST",
                    dataType: "json",
                    url: "/ajax/music/deleteaction",
                    data: {
                        actionId: c.prevActionId
                    },
                    success: function(b) {
                        var c = a;
                        c.FBLog && console.log("deleted", 1)
                    }
                }), c.prevActionId = null, c.prevMediaId = null);
                if (c.prevMediaId != e.mediaId && e.mediaId && !b.paused && c.FBAssociatedUserId && !d) {
                    c.prevMediaId = e.mediaId, c.prevStartTime = (new Date).getTime(), c.prevActionId = null;
                    if (e.mediaType == "video") $.ajax({
                        type: "POST",
                        dataType: "json",
                        url: "/ajax/video/sendwatch",
                        data: {
                            videoUrl: e.detailUrl,
                            videoDuration: e.duration - b.time,
                            fbUserId: c.FBAssociatedUserId
                        },
                        success: function(b) {
                            var c = a;
                            b.PostToFacebookDisabled ? c.IsPostToFacebookSettingEnabled = !1 : b.id && (c.FBLog && console.log(b.id, 1), c.prevMediaId = e.mediaId, c.prevStartTime = (new Date).getTime(), c.prevActionId = b.id)
                        }
                    });
                    else {
                        var f = e.albumUrl;
                        f.endsWith("/music/albums") && (f = e.url + "?album=1"), $.ajax({
                            type: "POST",
                            dataType: "json",
                            url: "/ajax/music/sendlisten",
                            data: {
                                songUrl: e.url,
                                albumUrl: f,
                                artistUrl: e.artistUrl,
                                songDuration: e.duration - b.time,
                                fbUserId: c.FBAssociatedUserId
                            },
                            success: function(b) {
                                var c = a;
                                b.PostToFacebookDisabled ? c.IsPostToFacebookSettingEnabled = !1 : b.id && (c.FBLog && console.log(b.id, 1), c.prevMediaId = e.mediaId, c.prevStartTime = (new Date).getTime(), c.prevActionId = b.id)
                            }
                        })
                    }
                }
                if (c.FBCurrentUserId)
                    if (!e || e.mediaType != "audio") c.FBLog && console.log("Status: paused", 1), FB.Music.send("STATUS", {
                        playing: !1,
                        user_id: c.FBCurrentUserId
                    });
                    else {
                        if (c.FBSongUrl && (c.getId(c.FBSongUrl, true).indexOf(e.mediaId) != 0 || b.paused)) {
                            c.sendStatus(103);
                            return
                        }
                        var g = (new Date).getTime() - b.time * 1e3 + (new Date).getTimezoneOffset() * 6e4;
                        g = new Date(g);
                        var h = g.getFullYear() + "-" + (g.getMonth() + 1) + "-" + g.getDate() + "T" + g.getHours() + ":" + g.getMinutes() + ":" + g.getSeconds();
                        c.FBLog && console.log("Status: " + (b.paused ? "paused" : "playing") + " name: " + e.title + " start: " + h + " duration: " + e.duration + " song: http://www.myspace.com" + e.url, 1), FB.Music.send("STATUS", {
                            playing: !b.paused,
                            song: "https://myspace.com" + e.url,
                            start_time: h,
                            expires_in: e.duration - b.time,
                            user_id: c.FBCurrentUserId
                        }), c.FBLastStatusUrl = "https://myspace.com" + e.url, c.FBSongUrl = ""
                    }
            })
        },
        checkAssociatedUser: function() {
            var b = a;
            !b.FBAssociatedUserId && context.loginId > 0 ? $.ajax({
                url: "/ajax/thirdparty/facebook/accountinfo",
                type: "POST",
                success: function(c) {
                    c.success && c.externalId && c.accessToken ? FB.api("/" + c.externalId + "/permissions?access_token=" + c.accessToken, function(d) {
                        var e = Array.isArray(d.data) && d.data || [],
                            f = d.data.some(function(a) {
                                return a.permission === "publish_actions" && a.status === "granted"
                            });
                        f && (b.FBAssociatedUserId = c.externalId), b.InitListeners(), context.features.geoPrompt && (FB.api = function() {
                            var b = "";
                            for (var c = 0; c < arguments.length; c++) typeof arguments[c] == "function" ? b += "" + arguments[c] : b += JSON.stringify(arguments[c]) + ", ";
                            b += ", " + a.FBAssociatedUserId, $.post("/ajax/log", {
                                data: b
                            })
                        })
                    }) : b.InitListeners()
                },
                error: function() {
                    b.InitListeners()
                }
            }) : context.features.geoPrompt && (FB.api = function() {
                var a = "";
                for (var b = 0; b < arguments.length; b++) typeof arguments[b] == "function" ? a += "" + arguments[b] : a += JSON.stringify(arguments[b]) + ", ";
                $.post("/ajax/log", {
                    data: a
                })
            })
        },
        renewToken: function() {
            $("body").append('<iframe id="fbAuth" sandbox="allow-forms allow-same-origin allow-scripts" src="/thirdpartyauth/facebook/renewToken"></iframe>')
        },
        fbAsyncInit: function() {
            var b = a;
            FB.init({
                appId: config.thirdParty.facebookAppId,
                status: !0,
                cookie: !0,
                xfbml: !0,
                music: !0,
                oauth: !0,
                frictionlessRequests: !0
            }), FB.getLoginStatus(function(a) {
                $("style:contains(fb_)").addClass("spaceway"), a.status == "connected" && (b.FBCurrentUserId = a.authResponse.userID), b.checkAssociatedUser(), comm.listen("thirdparty.connected", b.checkAssociatedUser);
                var c = (new Date).getMonth() * 100 + (new Date).getDate();
                if (context.loginId > 0 && !localStorage.FBLastRenewed || localStorage.FBLastRenewed != c) {
                    b.renewToken();
                    try {
                        localStorage.FBLastRenewed = c
                    } catch (d) {}
                }
            }, !0)
        },
        InitListeners: function() {
            var b = a;
            if (b.listenersInitialized) return;
            b.listenersInitialized = !0, FB.Event.subscribe("fb.music.PLAY", b.play), FB.Event.subscribe("fb.music.RESUME", b.resume), FB.Event.subscribe("fb.music.PAUSE", b.pause), FB.Event.subscribe("fb.music.STATUS", b.sendStatus), comm.listen({
                player: {
                    "+started": function(a) {
                        b.FBLog && console.log("played", 1), b.FBSongUrl && a && a.mediaItem && b.FBSongUrl.lastIndexOf(a.mediaItem.mediaId) >= 0 && (b.FBSongUrl = ""), b.sendStatus()
                    },
                    "+resumed": function(a) {
                        b.FBLog && console.log("resumed", 1), b.sendStatus()
                    },
                    "+paused": function(a) {
                        b.FBLog && console.log("paused", 1), b.sendStatus()
                    },
                    "+ended": function(a) {
                        b.FBLog && console.log("ended", 1), b.sendStatus()
                    },
                    "+error": function(b) {
                        var c = a;
                        b && b.type && (b.type === "flash" && (b.msg.startsWith("stream rejected") || b.msg.startsWith("streamRejected")) ? c.sendStatus(4) : b.type === "permissions" && c.sendStatus(103))
                    }
                }
            }), a.sendStatus()
        },
        init: function() {
            var b = a;
            window.fbAsyncInit = this.fbAsyncInit, $("body").append('<div id="fb-root"></div>');
            var c = document.createElement("script");
            c.async = !0, c.src = document.location.protocol + "//connect.facebook.net/en_US/all/vb.js", document.getElementsByTagName("head")[0].appendChild(c), context.loginId > 0 && $.ajax({
                url: "/ajax/settings/getThirdPartySettings",
                type: "POST",
                success: function(a) {
                    a.success && (b.settingsObjectVersion = a.objectVersion, b.IsPostToFacebookSettingEnabled = a.settings.PublishPlaysToFacebookEnabled == "True" ? !0 : !1)
                }
            })
        },
        ChangePostToFacebookSetting: function(a) {
            var b = this;
            $.ajax({
                url: "/ajax/settings/thirdPartySettings",
                type: "POST",
                dataType: "JSON",
                data: {
                    PublishPlaysToFacebookEnabled: a,
                    objectVersion: this.settingsObjectVersion
                },
                success: function(c) {
                    c.success && (b.IsPostToFacebookSettingEnabled = a, b.settingsObjectVersion = c.objectVersion, a && !b.FBAssociatedUserId && Myspace.ThirdPartyHelper.connectThirdParty("facebook", !1, b.connectAccountsCallback))
                }
            })
        },
        connectAccountsCallback: function(a, b) {
            a || Myspace.Error({
                text: b.additionalData.msg || "Oops, something went wrong and we were unable to get your connections. Please try again later.",
                yes: {
                    text: "OK"
                },
                no: !1,
                closeAll: !1
            })
        }
    };
    a.init(), window.facebookBridge = a
})();
(function() {
    function i(d, i) {
        comm.send("player.isActive", function(j) {
            if (!j) return;
            var k = h("mode"),
                l = "beacon.v3",
                m = {
                    actionText: d,
                    albumId: b.albumId,
                    artistId: b.artistId,
                    catalogReportedMediaTotalLengthSeconds: isNaN(b.duration) ? -1 : b.duration,
                    currentPlayheadPositionSeconds: e,
                    deltaPlayElapsedSeconds: f - g,
                    directObjectEntityKeyText: b.entityKey,
                    drawerPinnedIndicator: h("pinned"),
                    drawerVisibleIndicator: a.hasClass("queueOpen"),
                    incognitoIndicator: h("incognito"),
                    influencerId: b.influencerId,
                    firstAutoPlayIndicator: c == 1,
                    majorModeText: k,
                    mediaId: b.mediaId,
                    mediaReleaseId: b.mediaReleaseId,
                    mediaTypeText: b.mediaType == "audio" ? "song" : b.mediaType,
                    minorModeText: c == 1 ? "firstPlay" : undefined,
                    muteEnabledIndicator: h("mute"),
                    originalMediaSourceEntityKeyText: b.sourceEntityKey || undefined,
                    originalStreamStartUtcDateTime: b.streamStartDateTime,
                    pausedIndicator: h("paused"),
                    playerBundleVersionValue: 1,
                    playerBufferState: undefined,
                    queueSourceEntityKeyText: b.sourceEntityKey || undefined,
                    radioStationEntityKeyText: undefined,
                    repeatModeText: h("repeat") || "off",
                    sampleIndicator: !b.isFullLength,
                    shuffleEnabledIndicator: h("shuffled") || !1,
                    totalPlayElapsedSeconds: f,
                    volumeLevelValue: h("volume")
                };
            i && (m.errorType = i.errorType, m.errorText = i.errorText), g = f, comm.send(l, m)
        })
    }

    function j(a, b, c) {}
    var a = $("body"),
        b, c = 0,
        d = !1,
        e = 0,
        f = 0,
        g = 0,
        h = new CookieHelper("player");
    comm.listen({
        player: {
            "+loading": function(a) {
                b = a.mediaItem, e = a.time, f = 0, g = 0, d = !1, a.mode == "queue" && c++
            },
            "+started": function() {
                i("PlayStarted"), comm.send("song.started")
            },
            "+time": function(a) {
                e = a.time, f = a.tsl, !d && f >= 30 && (d = !0, i("Played30Seconds"))
            },
            "+ended": function() {
                i("FinishedStream")
            }
        }
    })
})();
(function() {
    function g(a) {
        window.COMSCORE && COMSCORE.beacon && (a.c2 = d, COMSCORE.beacon(a))
    }

    function h(a) {
        g({
            c1: 1,
            c5: a.isPremium ? "02" : "06"
        })
    }
    var a, b, c, d = "4000002",
        e = context.features.isComScoreVideoPlayEnabled,
        f = context.features.isComScoreEnabled,
        i = {
            played1Second: function(a) {
                e && a.mediaType == "video" && h(a)
            }
        },
        j = comm.own("comscoreBeacon", i);
    comm.listen({
        player: {
            "+loading": function(d) {
                a = d.mediaItem, b = !1, c = 0
            },
            "+started": function(b) {
                e && a.mediaType == "video" && h(a)
            },
            "+time": function(a) {
                a.time >= 0 && a.tsl >= 0 && (time = a.time, c = a.tsl), !b && c >= 1 && (b = !0)
            }
        }
    })
})();
(function() {
    function g(b) {
        if (typeof a.customLabel != "undefined" && a.customLabel !== !1) {
            var c = ".Onsite";
            document.location.href.indexOf("/play/") > -1 && (c = ".Offsite"), d.labels = a.customLabel + c
        }
        _qevents && _qevents.push(d)
    }

    function h(a) {
        g(a)
    }
    var a, b, c, d = {
        qacct: "p-UjzWLV4pSspa-",
        event: "refresh",
        labels: "videoPlay"
    };
    if (context.features.isQuantcastVideoPlayEnabled) {
        var e = document.createElement("script");
        e.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js", e.async = !0, e.type = "text/javascript";
        var f = document.getElementsByTagName("script")[0];
        f.parentNode.insertBefore(e, f)
    }
    var i = {
            played1Second: function(a) {
                context.features.isQuantcastVideoPlayEnabled && a.mediaType == "video" && h(a)
            }
        },
        j = comm.own("quantcastBeacon", i);
    comm.listen({
        player: {
            "+loading": function(d) {
                a = d.mediaItem, b = !1, c = 0
            },
            "+time": function(d) {
                d.time >= 0 && d.tsl >= 0 && (time = d.time, c = d.tsl), !b && c >= 1 && (context.features.isQuantcastVideoPlayEnabled && a.mediaType == "video" && h(a), b = !0)
            }
        }
    })
})();
(function() {
    function a(a) {
        Cookies.player.refresh(), localStorage["ps_" + a] = JSON.stringify(Cookies.player.parsedValues)
    }

    function b(a) {
        var b = localStorage["ps_" + a];
        Cookies.player.values = b ? JSON.parse(b) : {}, Cookies.save(Cookies.player, "." + document.domain, (new Date).addDays(30))
    }
    comm.listen("signout", function() {
        a(context.profileId), b(-1)
    }, !0), comm.listen("signin", function(c) {
        a(-1), b(c.profileId)
    }, !0), localStorage.incognito != undefined && (comm.send("player.incognito", localStorage.incognito == 1), delete localStorage.incognito)
})();
(function() {
    function l(a) {
        k.percent(a)
    }

    function m(a) {
        h.width(a * 100 + "%"), p(a * c, c)
    }

    function n(a) {
        i.width(a * 100 + "%")
    }

    function o() {
        l(0), m(0), n(0)
    }

    function p(a, b) {
        d && d.css("left", j.offset().left - d.width() / 2).find(".tip-inner").text(q(a, b))
    }

    function q(a, d) {
        return u(a || b) + " / " + u(d || c)
    }

    function r() {
        clearTimeout(e), d || (g.addClass("hover"), j.attr("data-original-title", q()).tip("show"), d = $('.tip[data-name="time"]'))
    }

    function s(a) {
        d && (a && clearTimeout(e), e = setTimeout(function() {
            g.removeClass("hover"), j.tip("hide"), d = undefined
        }, a ? 0 : 1e3))
    }

    function t(a) {
        comm.send("player.seek", a)
    }

    function u(a) {
        var b = a / 60 | 0,
            c = "0" + Math.floor(a % 60);
        return b + ":" + c.substr(c.length - 2)
    }

    function v() {
        var a = Math.min(b / c, 1);
        l(a), m(a)
    }
    var a, b = 0,
        c = 0,
        d, e, f = $("body"),
        g = $(".progress-bar"),
        h = $(".progress", g),
        i = $(".buffer", g),
        j = $(".handle", g),
        k = new Myspace.Slider(g, {
            units: "%",
            axis: "x",
            jump: function(a, d) {
                var e = a / d;
                b = e * c, m(e), t(b)
            },
            start: function(a, b) {
                g.addClass("scrubbing"), m(a / b)
            },
            drag: function(a, b) {
                m(a / b)
            },
            stop: function(a, d) {
                g.removeClass("scrubbing"), g.hasClass("hover") && s();
                var e = a / d;
                b = e * c, t(b)
            }
        });
    j.tip({
        title: "0:00 / 0:00",
        trigger: "manual",
        placement: "top",
        animation: !0,
        name: "time"
    }), g.on("mouseenter", r), g.on("mouseleave", function() {
        !g.hasClass("scrubbing") && s()
    }), f.on("mouseleave", function() {
        s(!0)
    }), comm.listen({
        player: {
            "+loading": function(d) {
                a = !0, n(0), b = d.time, c = d.mediaItem.duration, v()
            },
            "+loaded": function() {
                a = !1
            },
            "+time": function(d) {
                a || (b = d.time, n(Math.min((b + d.buffer) / c, 1)), !g.hasClass("scrubbing") && v())
            },
            "+duration": function(a) {
                c = isNaN(a) ? a.mediaItem.duration : a, v(), p(b, c)
            },
            "+ended": function() {
                o()
            },
            "+adLoading": function(a) {
                g.attr("disabled", "disabled")
            },
            "+adStarted": function(b) {
                a = !1, o()
            },
            "+adDuration": function(a) {
                c = a.ad.duration
            },
            "+adRemainingTime": function(a) {
                if (a.ad.remainingTime <= 0) return;
                var d;
                b = c - a.ad.remainingTime, d = Math.min(b / c, 1), l(d), m(d)
            },
            "+adStopped": function(a) {
                g.removeAttr("disabled"), b = a.time, c = a.mediaItem.duration, v()
            }
        },
        progressBar: {
            "+hideTimeTip": s
        }
    })
})();
(function() {
    function d(a, b) {
        a = Math.min(a, b), comm.send("player.volume", a / b)
    }

    function e(a, c) {
        b.width(a / c * 100 + "%")
    }
    var a = $(".volume"),
        b = $(".level", a),
        c = new Myspace.Slider(a, {
            units: "%",
            axis: "x",
            jump: function(a, b) {
                d(a, b)
            },
            drag: function(a, b) {
                d(a, b)
            },
            start: function(a, b) {
                d(a, b)
            },
            stop: function(a, b) {
                d(a, b)
            }
        });
    queryString.volume && e(queryString.volume, 1), comm.listen({
        player: {
            "+volume": function(a) {
                e(a.volume, 1)
            },
            "+volumeChanged": function(a) {
                e(a, 1)
            }
        }
    })
})();
(function() {
    function c() {
        j("new StreamingTag"), a = new ns_.StreamingTag({
            customerC2: "6035728"
        })
    }

    function d(b) {
        j("playVideoAdvertisement"), a.playVideoAdvertisement({
            ns_st_cl: b * 1e3
        }, ns_.StreamingTag.AdType.LinearOnDemandPreRoll), i = !0
    }

    function e() {
        var c = {
                ns_st_ci: b.mediaReleaseId,
                ns_st_cl: b.duration * 1e3,
                ns_st_pu: "*null",
                ns_st_pr: b.artistName,
                ns_st_ep: b.title,
                ns_st_sn: "*null",
                ns_st_en: "*null",
                ns_st_st: "*null",
                ns_st_ge: b.categoryName,
                ns_st_ti: "*null",
                ns_st_ia: "*null",
                ns_st_ce: "*null",
                ns_st_ddt: "*null",
                ns_st_tdt: "*null",
                c3: "MYSPACE",
                c4: "*null",
                c6: "*null"
            },
            d = b.duration < 600,
            e = b.isPremium,
            f;
        e ? f = d ? ns_.StreamingTag.ContentType.UserGeneratedShortFormOnDemand : ns_.StreamingTag.ContentType.UserGeneratedLongFormOnDemand : f = d ? ns_.StreamingTag.ContentType.ShortFormOnDemand : ns_.StreamingTag.ContentType.LongFormOnDemand, j("playVideoContentPart"), a.playVideoContentPart(c, f), i = !0
    }

    function f() {
        j("stop"), a.stop(), i = !1
    }

    function j(a) {
        console.log("[comscore] " + a)
    }
    var a, b, g = !1,
        h = !1,
        i = !1;
    queryString.comScore && comm.listen({
        player: {
            "+loading": function(a) {
                i && f(), b = a.mediaItem, g = b.mediaType === "video", g && c()
            },
            "+adStarted": function(a) {
                g && (h = !0, d(a.ad.duration))
            },
            "+adStopped": function() {
                g && f()
            },
            "+started": function(a) {
                g && (h = !1, e())
            },
            "+paused": function(a) {
                g && !h && f()
            },
            "+resumed": function(a) {
                g && !h && e()
            },
            "+ended": function(a) {
                g && f()
            }
        }
    })
})();