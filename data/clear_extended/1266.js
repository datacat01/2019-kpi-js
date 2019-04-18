function _fbRowGetAllElementsWithAttribute(a) {
    var b, c, d = [],
        e = document.getElementsByTagName("*");
    for (b = 0, c = e.length; b < c; b++) e[b].getAttribute(a) && !jQuery(e[b]).parents(".tfs-slider").length && d.push(e[b]);
    return d
}

function _fbRowOnPlayerReady(a) {
    var b, c, d = a.target,
        e = 0,
        f = !0;
    d.playVideo(), d.isMute && d.mute(), 0 !== jQuery("[data-youtube-video-id=" + d.getVideoData().video_id + "]").data("loop") && (b = d.getCurrentTime(), c = +new Date / 1e3, d.loopInterval = setInterval(function() {
        void 0 !== d.loopTimeout && clearTimeout(d.loopTimeout), b === d.getCurrentTime() ? e = b + (+new Date / 1e3 - c) : (e = d.getCurrentTime(), c = +new Date / 1e3), b = d.getCurrentTime(), e + (f ? .45 : .21) >= d.getDuration() && (d.pauseVideo(), d.seekTo(0), d.playVideo(), f = !1)
    }, 150))
}

function _fbRowOnPlayerStateChange(a) {
    a.data === YT.PlayerState.ENDED ? (void 0 !== a.target.loopTimeout && clearTimeout(a.target.loopTimeout), 0 !== jQuery("[data-youtube-video-id=" + a.target.getVideoData().video_id + "]").data("loop") && a.target.seekTo(0)) : a.data === YT.PlayerState.PLAYING && jQuery(a.target.getIframe()).parent().css("opacity", "1")
}

function resizeVideo(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q = a.parent();
    if (!q.find("iframe").hasClass("fusion-hidden") || !q.find("iframe").attr("data-privacy-src")) {
        if (null === q.find("iframe").width()) return void setTimeout(function() {
            resizeVideo(a)
        }, 500);
        b = a, b.css({
            width: "auto",
            height: "auto",
            left: "auto",
            top: "auto"
        }), b.css("position", "absolute"), o = q.find("> div").data("display"), q.find("iframe").width(), q.find("iframe").height(), c = q.width(), d = q.height(), e = parseInt(q.css("padding-left"), 10), f = parseInt(q.css("padding-right"), 10), 1 <= jQuery(".width-100").length && (0 < f && (c += f), !1 < e && (c += e)), i = "16:9", void 0 !== a.attr("data-video-aspect-ratio") && -1 !== a.attr("data-video-aspect-ratio").indexOf(":") && (i = a.attr("data-video-aspect-ratio").split(":"), i[0] = parseFloat(i[0]), i[1] = parseFloat(i[1])), h = d, g = i[0] / i[1] * d, i[0] / i[1] * d - c, c * i[1] / i[0] - d, "contain" === o ? (q.css("paddingTop", q.parent("li").find(".slide-content-container").css("paddingTop")), h >= d && (j = d, k = i[0] / i[1] * d), k >= c && (k = c, j = i[1] / i[0] * c)) : g >= c && h >= d ? (j = d, k = i[0] / i[1] * d) : (k = c, j = c * i[1] / i[0]), 1 <= jQuery(".width-100").length && (0 < f && (k += f), 0 < e && (k += e), j = k * i[1] / i[0]), m = -(j - d) / 2, n = -(k - c) / 2, 1 > q.find(".fusion-video-cover").length && (l = q.find("iframe").parent(), l.prepend('<div class="fusion-video-cover">&nbsp;</div>')), q.is(":visible") && (q.find(".fusion-video-cover").css({
            "z-index": 0,
            width: k,
            height: j,
            position: "absolute"
        }), p = "iframe", q.hasClass("video-background") && (p = "iframe.fusion-container-video-bg"), q.find(p).parent().css({
            marginLeft: n,
            marginTop: m
        }), q.find(p).css({
            width: k,
            height: j,
            "z-index": -1
        }))
    }
}

function vimeoReady(a) {
    var b, c = jQuery("#" + a).parents("[data-vimeo-video-id]").first();
    ("function" != typeof fusionGetConsent || fusionGetConsent("vimeo")) && (b = new Vimeo.Player(a), "yes" === c.data("mute") && b.setVolume(0), "no" === c.data("mute") && b.setVolume(1), b.on("timeupdate", function(a) {
        c.css("opacity", "1"), b.off("timeupdate")
    }), jQuery("#" + a).attr("data-privacy-src") && resizeVideo(c))
}

function fusionInitVimeoPlayers() {
    var a, b, c, d;
    if (("function" != typeof fusionGetConsent || fusionGetConsent("vimeo")) && Number(fusionVideoBgVars.status_vimeo) && (a = jQuery("[data-vimeo-video-id]"), 0 < a.length))
        for (b = a.find('> iframe, iframe[data-privacy-type="vimeo"]'), c = b.length, i = 0; i < c; i++) d = b[i], jQuery("html").hasClass("ua-ie-11") && jQuery(d).parent().css("opacity", "1"), "function" == typeof vimeoReady && vimeoReady(d.getAttribute("id"))
}
var $youtubeBGVideos = {};
if (Number(fusionVideoBgVars.status_yt)) var onYouTubeIframeAPIReady = function() {
    var a, b, c, d, e, f = _fbRowGetAllElementsWithAttribute("data-youtube-video-id");
    if ("function" != typeof fusionGetConsent || fusionGetConsent("youtube"))
        for (a = 0; a < f.length; a++) {
            for (b = f[a].getAttribute("data-youtube-video-id"), c = "", d = 0; d < f[a].childNodes.length; d++)
                if (/div/i.test(f[a].childNodes[d].tagName)) {
                    c = f[a].childNodes[d].getAttribute("id");
                    break
                }
            "" !== c && (e = new YT.Player(c, {
                height: "auto",
                width: "auto",
                videoId: b,
                playerVars: {
                    autohide: 1,
                    autoplay: 1,
                    fs: 0,
                    showinfo: 0,
                    modestBranding: 1,
                    start: 0,
                    controls: 0,
                    rel: 0,
                    disablekb: 1,
                    iv_load_policy: 3,
                    wmode: "transparent"
                },
                events: {
                    onReady: _fbRowOnPlayerReady,
                    onStateChange: _fbRowOnPlayerStateChange
                }
            }), e.isMute = !1, "yes" === f[a].getAttribute("data-mute") && (e.isMute = !0), "true" === f[a].getAttribute("data-youtube-video-id") && e.setPlaybackQuality("hd720"), setTimeout(function() {
                jQuery("#" + c).css("visibility", "visible")
            }, 500))
        }
};
jQuery(document).ready(function(a) {
    var b;
    a("body").hasClass("vc_editor") || (a(".bg-parallax.video, .fusion-bg-parallax.video").each(function() {
        a(this).prependTo(a(this).next().addClass("video")), a(this).css({
            opacity: Math.abs(parseFloat(a(this).attr("data-opacity")) / 100)
        })
    }), b = a("[data-youtube-video-id], [data-vimeo-video-id]").parent(), b.css("overflow", "hidden"), a("[data-youtube-video-id], [data-vimeo-video-id]").each(function() {
        var b = a(this);
        setTimeout(function() {
            resizeVideo(b)
        }, 100)
    }), a("[data-youtube-video-id], [data-vimeo-video-id]").each(function() {
        var b = a(this);
        setTimeout(function() {
            resizeVideo(b)
        }, 1e3)
    }), a(window).resize(function() {
        a("[data-youtube-video-id], [data-vimeo-video-id]").each(function() {
            var b = a(this);
            setTimeout(function() {
                resizeVideo(b)
            }, 2)
        })
    }), fusionInitVimeoPlayers())
}), jQuery(window).load(function() {
    jQuery("[data-youtube-video-id], [data-vimeo-video-id]").each(function() {
        var a = jQuery(this);
        setTimeout(function() {
            resizeVideo(a)
        }, 500)
    })
});