"use strict";
! function(e) {
    function t(e) {
        var t = t || {};
        t.pubId = "319737315", t.site = "adweek", t.prop = "/" + t.pubId + "/" + t.site + "/", t.zone = gptData.zone, t.postid = gptData.id, t.term = gptData.posttags, t.debug = 1 == gptData.debug ? "True" : "False", t.sizes = [], t.collection = [], t.presentation = gptData.presentation, t.referrer = document.referrer.replace(/http[s]?\:\/\/( [^\/]+ ).*/, "$1");
        var d = {
                term: t.term,
                debug: t.debug,
                page: t.postid,
                vid_width: "640",
                vid_height: "480",
                vid_id: "__item-mediaid__",
                vid_domain: "__domain__",
                vid_url: "__referrer__",
                vid_file: "__item-file__",
                vid_secs: "__item-duration__",
                vid_title: "__item-title__",
                vid_desc: "__item-description__",
                vid_auto: "no",
                vid_muted: "no"
            },
            a = {
                sz: "640x480",
                iu: "/319737315/adweek",
                impl: "s",
                gdfp_req: 1,
                env: "vp",
                output: "vast",
                unviewed_position_start: 1,
                url: window.location.href,
                description_url: window.location.href,
                correlator: Math.floor(99999999 * Math.random()),
                ad_rule: 1,
                cust_params: i(d)
            },
            r = "https://pubads.g.doubleclick.net/gampad/ads?" + i(a);
        jwplayer(e.id).getConfig().advertising.schedule[0].tag = r
    }
    var i = function(e) {
            var t = [];
            for (var i in e) e.hasOwnProperty(i) && t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
            return t.join("&")
        },
        d = document.getElementsByClassName("ko-video-container"),
        a = new MutationObserver(function(e) {
            e.forEach(function(e) {
                e.target.classList && e.target.classList.contains("jwplayer") && t(e.target)
            })
        }),
        r = {
            attributes: !1,
            childList: !0,
            subtree: !0
        };
    if (d)
        for (var o = 0; o < d.length; o++) a.observe(d[o], r);
    var n = document.getElementById("post-updates"),
        s = new MutationObserver(function(e) {
            e.forEach(function(e) {
                "childList" == e.type && e.addedNodes.item(0) && e.addedNodes.item(0).id && e.addedNodes.item(0).id.match(/jwplayer_.*_div/) && e.addedNodes.item(0).getAttribute("class") && e.addedNodes.item(0).getAttribute("class").includes("jwplayer") && t()
            })
        });
    n && s.observe(n, r)
}(jQuery);