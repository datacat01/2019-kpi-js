window.GLOBAL_EVENTS_STORAGE = function(e) {
    "use strict";
    var t = {
        swcReadyEvent: "swc:core:ready",
        silentLogin: "message"
    };
    var n, o, i = (n = e, function(e, t) {
            return void 0 !== n[e] && null !== n[e] || (n[e] = {}), n[e].events = [].concat(n[e].events || []).concat(t), n[e]
        }),
        r = (o = e, function(e, t) {
            return void 0 !== o[e] && null !== o[e] || (o[e] = {}), o[e].listeners = [].concat(o[e].listeners || []).concat(t), o[e]
        });
    return (Object.keys(t) || []).forEach(function(n) {
        o = t[n], "function" != typeof(a = void 0) && (a = function(t) {
            e[o] = i(o, t)
        }), window.addEventListener(o, a), r(o, a);
        var o, a
    }), e
}(window.GLOBAL_EVENTS_STORAGE || {});
var supportsPassive = !1;
try {
    var opts = Object.defineProperty({}, "passive", {
        get: function() {
            "use strict";
            supportsPassive = !0
        }
    });
    window.addEventListener("testPassive", null, opts), window.removeEventListener("testPassive", null, opts)
} catch (e) {}
window.skypeLazyGravity = function(e) {
    "use strict";
    var t = {};
    return t.fallback = function(e) {
        var n = !1,
            o = e,
            i = [document.getElementById("skypeCarouselFeatures")],
            r = function() {
                setTimeout(function() {
                    !1 === n && (n = !0, o.forEach(function(e) {
                        e.getBoundingClientRect().top <= window.innerHeight && e.getBoundingClientRect().bottom >= 0 && e.getBoundingClientRect().left <= window.innerWidth && e.getBoundingClientRect().right >= 0 && (t.showImg(e), 0 === (o = o.filter(function(t) {
                            return t !== e
                        })).length && (document.removeEventListener("scroll", r), window.removeEventListener("resize", r), window.removeEventListener("orientationchange", r), i.length > 0 && i[0] && i[0].removeEventListener("click", r)))
                    })), n = !1
                }, 200)
            };
        r();
        var a = !!supportsPassive && {
            passive: !0
        };
        window.addEventListener("scroll", r, a), window.addEventListener("resize", r, a), window.addEventListener("orientationchange", r), i.length > 0 && i[0] && i[0].addEventListener("click", r)
    }, t.addBackground = function(e) {
        var t = e.style.backgroundImage;
        t.length <= 0 && (t = window.getComputedStyle(e, !1).backgroundImage), e.style.setProperty("background-image", t, "important")
    }, t.showImg = function(e) {
        if (-1 === e.className.indexOf("lazyLoad")) return t.addBackground(e), !1;
        ! function(e, t) {
            if (null === t.classList || void 0 === t.classList || "object" != typeof t.classList) {
                var n = new RegExp("(^| )" + e + "($| )", "g");
                t.className = t.className.replace(n, " ")
            } else t.classList.remove(e)
        }("lazyLoad", e)
    }, t.queryLazySelector = function(e) {
        var t = [];
        return e.forEach(function(e) {
            [].slice.call(document.querySelectorAll(e)).forEach(function(e) {
                t.push(e)
            })
        }), t
    }, t.ImageObserver = function() {
        var e = new IntersectionObserver(function(n) {
            n.forEach(function(n) {
                if (n.isIntersecting) {
                    var o = n.target;
                    t.showImg(o), e.unobserve(o)
                }
            })
        });
        return e
    }, t.addStyle = function(e) {
        var t = document.createElement("style"),
            n = e.join(", "),
            o = document.createTextNode(n + " { background-image: url(data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=) !important; }");
        t.appendChild(o), document.head.appendChild(t)
    }, t.init = function(n) {
        e.skypeLazyLoadActive && (t.addStyle(n), document.addEventListener("DOMContentLoaded", function() {
            var e = t.queryLazySelector(n);
            t.fallback(e)
        }))
    }, {
        init: t.init
    }
}(window.SKYPE_SETTINGS || {}), window.EXTERNAL_STORAGE = function(e, t) {
    "use strict";
    var n = {
        externalHeroRender: "externalHeroRender",
        heroRender: "heroRender",
        stopWatches: "stopWatches",
        slowLoadTimer: "slowLoadTimer"
    };
    void 0 !== t.slowLoadTimeout && null !== t.slowLoadTimeout && "" !== t.slowLoadTimeout || (t.slowLoadTimeout = 5e3);
    var o = t.slowLoadTimeout;

    function i() {
        t.toggleActive && !0 !== e[n.heroRender] && function(t) {
            o = t, i = "neo", Object.keys(o).forEach(function(t) {
                if (t.toLowerCase() === i.toLowerCase()) {
                    var r = (new Date).getTime();
                    e[n.stopWatches].fromStart.stops.toggledFallbackUX = r, e[n.externalHeroRender] = !0,
                        function(e, t) {
                            var n = document.querySelector(e);
                            null !== n && void 0 !== n && (n.className || "").indexOf(t) <= -1 && (n.className += " " + t)
                        }(o[t], "visible")
                } else ! function(e, t) {
                    var n = document.querySelector(e);
                    if (null !== n && void 0 !== n) {
                        var o = new RegExp("(^| )" + t + "($| )", "g");
                        n.className = n.className.replace(o, " ")
                    }
                }(o[t], "visible")
            });
            var o, i
        }(t.toggleSelectors || {})
    }
    return function() {
        e[n.stopWatches] = (t = e[n.stopWatches], r = (new Date).getTime(), null !== t && void 0 !== t || (t = {}), t.fromStart = {
            initial: r,
            stops: ((t || {}).fromStart || {}).stops || {}
        }, t);
        var t, r;
        e[n.slowLoadTimer] = setTimeout(i, o)
    }(), e
}(window.EXTERNAL_STORAGE || {}, window.SKYPE_SETTINGS || {});