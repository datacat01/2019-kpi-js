(function() {
    function p() {
        var a = document.createElement("script");
        a.src = "//www.youtube.com/iframe_api";
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    }

    function q() {
        var a = document.createElement("script");
        a.src = "//player.vimeo.com/api/player.js";
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    }

    function r(a, b, c, d, e) {
        return new YT.Player(a, {
            videoId: b,
            playerVars: {
                autoplay: 0,
                rel: 0,
                showinfo: 0
            },
            events: {
                onReady: window.onPlayerReady.bind(this, c, e),
                onStateChange: window.onPlayerStateChange.bind(this, d, e)
            }
        })
    }

    function s(a, b, c, d, e) {
        function g() {
            G(f, d)
        }

        function h() {
            H(f, d)
        }

        function i() {
            c.addEventListener("click", function() {
                f.play()
            }), w(f.element, e, f)
        }
        var f = new Vimeo.Player(a, {
            url: "//vimeo.com/" + b,
            autoplay: !1,
            rel: 0,
            title: !1,
            byline: !1
        });
        return f.ready().then(i), f.on("play", h), f.on("pause", g), f.on("ended", g), f
    }

    function t(a) {
        var b = K(a);
        r(b.player, b.videoId, b.overlay, b.toBeHiddenArr, b.callbacks)
    }

    function u(a) {
        var b = K(a);
        s(b.player, b.videoId, b.overlay, b.toBeHiddenArr, b.callbacks)
    }

    function v(a, b, c) {
        var d = c.target;
        a.addEventListener("click", function() {
            c.target.playVideo()
        }), w(d.a, b, c)
    }

    function w(a, b, c) {
        a.parentElement.classList.add(e), b.onReady.function(c, b.onReady.param)
    }

    function x() {
        n.forEach(t)
    }

    function y() {
        o.forEach(u)
    }

    function z(a, b, c) {
        c.data === YT.PlayerState.ENDED || c.data === YT.PlayerState.PAUSED ? (G(c.target.a, a), C() && D(c.target)) : c.data === YT.PlayerState.PLAYING && H(c.target.a, a), b.onChange.function(c, b.onChange.param)
    }

    function A(a) {
        typeof window.Vimeo != "undefined" ? a() : setTimeout(function() {
            A(a)
        }, 50)
    }

    function B() {
        m.length && (m.forEach(function(a) {
            a.classList.contains(b) ? (k = !0, n.push(a)) : a.classList.contains(c) && (l = !0, o.push(a))
        }), k && (p(), window.onYouTubeIframeAPIReady = x, window.onPlayerReady = v, window.onPlayerStateChange = z), l && (q(), A(y)))
    }

    function C() {
        return document.fullscreenElement || document.msFullscreenElement || document.mozFullScreen || document.webkitIsFullScreen
    }

    function D(a) {
        typeof a.setFullscreen == "function" && a.setFullscreen(!1), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
    }

    function E(a) {
        a.style.display = "none"
    }

    function F(a) {
        a.style.display = "inline-block"
    }

    function G(a, b) {
        b.forEach(F), E(a)
    }

    function H(a, b) {
        b.forEach(E), F(a)
    }

    function I(a) {
        var b = a ? window[a.split(".")[0]] : L,
            c = a ? a.split(".")[1] : "";
        return {
            "function": b ? b : L,
            param: c
        }
    }

    function J(a) {
        return {
            onReady: I(a.getAttribute(i)),
            onChange: I(a.getAttribute(h))
        }
    }

    function K(a) {
        var b = a.getElementsByClassName(d)[0],
            c = a.getElementsByClassName(f)[0],
            e = b.getAttribute(g),
            h = Array.prototype.slice.call(a.getElementsByClassName(j)),
            i = J(b);
        return h.push(c), {
            player: b,
            overlay: c,
            videoId: e,
            toBeHiddenArr: h,
            callbacks: i
        }
    }
    var a = "embedded-video",
        b = "youtube-video",
        c = "vimeo-video",
        d = "player",
        e = "player-ready",
        f = "player-overlay",
        g = "data-video-id",
        h = "data-execute-on-change",
        i = "data-execute-on-ready",
        j = "to-be-hidden",
        k = !1,
        l = !0,
        m = Array.prototype.slice.call(document.getElementsByClassName(a)),
        n = [],
        o = [],
        L = function() {};
    B()
})()