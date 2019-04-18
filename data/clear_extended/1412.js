function consoleMessage(e, t) {
    "use strict";
    if (window.console) switch (e) {
        case "log":
            window.console.log(t);
            break;
        case "warn":
            window.console.warn(t);
            break;
        case "error":
            window.console.error(t);
            break;
        case "info":
            window.console.info(t)
    }
}

function ready(e) {
    "use strict";
    "loading" != document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
}

function checkStringValue(e, t) {
    return void 0 === e || null === e || "" === e ? t : e
}

function forEachElement(e, t, n) {
    "use strict";
    var a = null;
    a = null === e || void 0 === e ? document.querySelectorAll(t) : e.querySelectorAll(t);
    for (var o = 0; o < a.length; o++) n(a[o], o)
}

function checkForElement(e, t) {
    "use strict";
    for (var n = !1, a = e.children, o = 0; o < a.length; o++) {
        var i = a[o].tagName;
        void 0 !== i && i == t && (n = !0)
    }
    return n
}

function checkForParent(e, t) {
    "use strict";
    var n = !1,
        a = e.parentNode;
    if (a) {
        var o = a.tagName;
        void 0 !== o && o == t && (n = !0)
    }
    return n
}

function listAttributes(e) {
    if (e.hasAttributes()) {
        for (var t = e.attributes, n = [], a = t.length - 1; a >= 0; a--) n[t[a].name] = t[a].value;
        return n
    }
    return []
}

function setCookie(e, t, n) {
    "use strict";
    var a = new Date;
    a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3);
    var o = "expires=" + a.toUTCString();
    document.cookie = e + "=" + t + "; " + o
}

function getCookie(e) {
    "use strict";
    for (var t = e + "=", n = document.cookie.split(";"), a = 0; a < n.length; a++) {
        for (var o = n[a];
            " " == o.charAt(0);) o = o.substring(1);
        if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
    }
    return ""
}

function checkCookie(e, t) {
    "use strict";
    return getCookie(e) === t
}

function sendAnalytics(e, t, n, a, o) {
    "use strict";
    if (null !== e && void 0 !== e || (e = "link"), null !== t && void 0 !== t || (t = "click"), null !== n && void 0 !== n || (n = 0 === a.indexOf("#") ? "Anchor Link" : "Content Link"), null !== a && void 0 !== a || (a = "non link"), "function" == typeof __gaTracker && __gaTracker(function() {
            window.ga = __gaTracker
        }), "function" != typeof ga) return !1;
    void 0 === o || null === o ? ("function" == typeof consoleMessage && consoleMessage("info", "ga send: [event], [" + e + "], [" + t + "], [" + n + " (" + a + ")]"), ga("send", "event", e, t, n + ": " + a)) : ("function" == typeof consoleMessage && consoleMessage("info", "ga send: [event], [" + e + "], [" + t + "], [" + n + " (" + a + ")], [" + o + "]"), ga("send", "event", e, t, n + ": " + a, o))
}

function getToTheBottom(e) {
    "use strict";

    function t() {
        var t = document.body,
            a = t.scrollTop;
        a > document.getElementById(e).getBoundingClientRect().top + a - 50 - window.innerHeight && !n && ("function" == typeof sendAnalytics && sendAnalytics("scroll", "bottom", "Scrolled to Bottom"), n = !0)
    }
    var n = !1;
    window.onscroll = function() {
        t()
    }, window.onresize = function() {
        t()
    }
}

function linkListenAnalytics(e) {
    "use strict";
    forEachElement(e, "a", function(e) {
        e.addEventListener("click", function(t) {
            t.preventDefault();
            var n = e.getAttribute("data-analytics-category"),
                a = e.getAttribute("data-analytics-action"),
                o = e.getAttribute("data-analytics-label"),
                i = e.getAttribute("href"),
                r = e.getAttribute("target");
            if ((t.metaKey || t.ctrlKey || 2 == t.which) && (r = "_blank"), null === o && (o = e.innerHTML), !n) {
                n = "link";
                if (checkForParent(e, "LI")) {
                    var s = e.parentNode.classList.contains("menu-item"),
                        c = e.parentNode.parentNode.classList.contains("sub-menu");
                    n = "list item", s && (n = "menu"), c && (n = "sub menu")
                }
            }
            e.classList.contains("nav-button") || e.classList.contains("button-popular-links") || sendAnalytics(n, a, o, i), void 0 !== l && clearTimeout(l);
            var l = setTimeout(function() {
                void 0 === r || null === r || "_blank" != r ? document.location.href = i : window.open(i, r)
            }, 200)
        })
    })
}

function searchAnalytics() {
    "use strict";
    forEachElement(null, ".search-form", function(e) {
        e.addEventListener("submit", function(t) {
            t.preventDefault();
            var n = e.querySelector(".search-field").value;
            "function" == typeof sendAnalytics && sendAnalytics("search", "submit", "Search Term", n), void 0 !== a && clearTimeout(a);
            var a = setTimeout(function() {
                e.submit()
            }, 200)
        })
    })
}

function cameraFeed() {
    "use strict";
    var e = Modernizr.mq("(min-width: 48em)"),
        t = !1;
    void 0 !== ".usc-camera-feed".length && forEachElement(null, ".widget_usc_camera_feed", function(n) {
        var a = [],
            o = n.querySelector(".usc-camera-feed"),
            i = o.getAttribute("data-url-image"),
            r = o.getAttribute("data-url-link"),
            s = n.getAttribute("id");
        if ("" !== r && null !== r && (t = !0), "" === i || null === i) return consoleMessage("Camera Feed: Missing Image URL"), !1;
        if (e) {
            t && a.push('<a class="image-link" data-analytics-category="send" data-analytics-action="click" data-analytics-label="Camera Feed: Image Link: ' + s + '" href="' + r + '">'), a.push('<img class="image-camera-feed" src="' + i + '" alt="Camera Feed Image of USC">'), t && a.push("</a>");
            var c = a.join("\n");
            n.querySelector(".usc-camera-feed").insertAdjacentHTML("afterbegin", c), linkListenAnalytics(n)
        }
    })
}

function yahoo_weather(e, t, n, a, o) {
    "use strict";

    function i() {
        console.info("Weather information Loading: " + d)
    }

    function r() {
        console.info("Weather information Loaded: " + d)
    }

    function s() {
        o.innerHTML = l, console.info("Weather information Error: " + d)
    }

    function c() {
        console.info("Weather information Cancelled by User: " + d)
    }
    var l = "Weather is currently unavailable",
        d = e + ", " + t + ", " + n + ", " + a,
        u = t,
        f = new Date,
        m = f.getHours(),
        v = f.getMinutes(),
        p = (f.getSeconds(), "am"),
        g = m;
    g >= 12 && (g = m - 12, p = "pm"), 0 === g && (g = 12), v = v < 10 ? "0" + v : v;
    var h = g + ":" + v + " " + p,
        y = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
        L = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        b = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + e + '") AND u="' + u + '"',
        k = "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(b) + "&format=json",
        w = new XMLHttpRequest;
    w.addEventListener("progress", i, !1), w.addEventListener("load", r, !1), w.addEventListener("error", s, !1), w.addEventListener("abort", c, !1), w.open("GET", k, !0), w.onreadystatechange = function() {
        if (4 === w.readyState && 200 === w.status) {
            var e = JSON.parse(w.responseText),
                t = e.query.results.channel.item.condition;
            if (t) switch (a) {
                case "graphic":
                    o.innerHTML = n + ' <img src="/wp-content/themes/usc-homepage-2017/assets/images/weather-icons/' + t.code + '.png" width="24" height="24" alt="' + t.text + '" title="' + t.text + '" /> ' + t.temp + "&deg;";
                    break;
                case "summary":
                    o.innerHTML = "At " + h + " on " + L[f.getDay()] + ", " + y[f.getMonth()] + " " + f.getDate() + ", " + f.getFullYear() + ", it's " + t.temp + "&deg; and " + t.text.toLowerCase() + " in " + n + "."
            }
        }
    }, w.send()
}
ready(function() {
    "use strict";

    function e() {
        t(), window.onkeydown = function(e) {
            27 == e.keyCode && o(e)
        }, document.body.addEventListener("click", function(e) {
            o(e)
        }), s.querySelector("." + c).addEventListener("click", function(e) {
            e.preventDefault(), e.stopPropagation(), s.classList.contains(m) || n()
        })
    }

    function t() {
        s.querySelector("." + f).addEventListener("click", function(e) {
            e.preventDefault(), e.stopPropagation(), s.classList.contains(m) && a()
        })
    }

    function n() {
        if (!s.classList.contains(m)) {
            s.classList.add(m), s.classList.remove(v);
            for (var e = !1, t = s.querySelector("." + d), n = 0; n < h.length; n++) s.classList.contains(h[n]) && (e = !0);
            e && (document.body.classList.add(g), t.blur())
        }
    }

    function a() {
        s.classList.contains(m) && (s.classList.remove(m), s.classList.add(v), document.body.classList.remove(g))
    }

    function o(e) {
        var t = !1,
            n = s.querySelector("." + u);
        e.target && (t = n.contains(e.target)), !t && s.classList.contains(p) && a()
    }

    function i(t) {
        var n = t,
            a = [],
            o = checkStringValue(n.acf.alert_type, L),
            i = checkStringValue(n.acf.alert_bar_title, b);
        s.classList.add(o), -1 !== h.indexOf(o) && s.classList.add(p), -1 !== y.indexOf(o) ? s.classList.add(m) : s.classList.add(v), a.push('<aside class="' + u + '" role="alert">'), a.push('<header class="' + c + '">'), a.push('<h1 class="' + l + '"><a class="' + d + '" href="#">' + i + "</a></h1>"), void 0 !== n.title.rendered && a.push('<h2 class="alert-title">' + n.title.rendered + "</h2>"), a.push('<a class="' + f + '" href="#" >Close</a>'), a.push("</header>"), void 0 !== n.content.rendered && (a.push('<div class="alert-entry-content">'), a.push(n.content.rendered), a.push("</div>")), a.push("</aside>");
        var r = a.join("\n");
        s.insertAdjacentHTML("afterbegin", r), e(), s.classList.add("alert-loaded")
    }
    var r = function(e, t) {
            var n = document.getElementById(e),
                a = "";
            return n && (a = n.getAttribute(t)), a
        }("site-alerts", "data-alerts-api-url"),
        s = document.querySelector("#site-alerts"),
        c = "alert-header",
        l = "alert-title-type",
        d = "alert-open",
        u = "alert-entry",
        f = "alert-close",
        m = "expanded",
        v = "collapsed",
        p = "fullscreen",
        g = "overtake",
        h = ["minimized-takeover", "takeover"],
        y = ["takeover", "alert-bar"],
        L = "minimized-takeover",
        b = "Alert";
    ! function(e, t, n) {
        function a() {
            consoleMessage("info", "Alert API information Loading: " + e)
        }

        function o() {
            consoleMessage("info", "Alert API information Loaded: " + e)
        }

        function r() {
            consoleMessage("info", "Alert API information Error: " + e)
        }

        function s() {
            consoleMessage("info", "Alert API information Cancelled by User: " + e)
        }
        var c = !0;
        if ("" !== e && null !== e && void 0 !== e || (consoleMessage("info", "Alerts: No API URL Specified."), c = !1), "object" != typeof t && (consoleMessage("info", "Alerts: No API Element Specified."), c = !1), !c) return !1;
        var l = new XMLHttpRequest;
        l.addEventListener("progress", a, !1), l.addEventListener("load", o, !1), l.addEventListener("error", r, !1), l.addEventListener("abort", s, !1), l.open("GET", e, !0), l.onreadystatechange = function() {
            if (4 === l.readyState && 200 === l.status) {
                var e = JSON.parse(l.responseText);
                0 === e.length && consoleMessage("info", "Alerts: No published Alerts at this time."), 0 < e.length && i(e[0], t)
            }
        }, l.send()
    }(r, s)
});
var wrapper = document.getElementById("site-outer-wrapper");
linkListenAnalytics(wrapper), searchAnalytics(), getToTheBottom("analytics-bottom-tracker"), ready(function() {
        "use strict";
        cameraFeed()
    }),
    function(e, t, n) {
        "use strict";
        var a = function(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            },
            o = function(e, t) {
                return -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
            },
            i = function(e, t) {
                o(e, t) || (e.className = "" === e.className ? t : e.className + " " + t)
            },
            r = function(e, t) {
                e.className = a((" " + e.className + " ").replace(" " + t + " ", " "))
            },
            s = function(e, t) {
                if (e)
                    do {
                        if (e.id === t) return !0;
                        if (9 === e.nodeType) break
                    } while (e = e.parentNode);
                return !1
            },
            c = t.documentElement,
            l = (e.Modernizr.prefixed("transform"), e.Modernizr.prefixed("transition")),
            d = function() {
                var e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    msTransition: "MSTransitionEnd",
                    transition: "transitionend"
                };
                return !!e.hasOwnProperty(l) && e[l]
            }();
        e.App = function() {
            var n = !1,
                a = {},
                u = t.getElementById("site-inner-wrapper"),
                f = !1;
            return a.init = function() {
                if (!n) {
                    n = !0;
                    var m = function(e) {
                        e && e.target === u && t.removeEventListener(d, m, !1), f = !1
                    };
                    a.closeNav = function() {
                        if (f) {
                            (d && l ? parseFloat(e.getComputedStyle(u, "")[l + "Duration"]) : 0) > 0 ? t.addEventListener(d, m, !1) : m(null)
                        }
                        r(c, "js-nav")
                    }, a.openNav = function() {
                        f || (i(c, "js-nav"), f = !0, sendAnalytics("mobile nav", "button", "open"))
                    }, a.toggleNav = function(e) {
                        f && o(c, "js-nav") ? (a.closeNav(), sendAnalytics("mobile nav", "button", "close")) : a.openNav(), e && e.preventDefault()
                    }, a.clickClose = function(e) {
                        f && !s(e.target, "mobile-nav-wrapper") && (e.preventDefault(), a.closeNav(), sendAnalytics("mobile nav", "click content", "close"))
                    }, a.touchClose = function(e) {
                        f && !s(e.target, "mobile-nav-wrapper") && (e.preventDefault(), a.closeNav(), sendAnalytics("mobile nav", "touch content", "close"))
                    }, t.getElementById("nav-button-open").addEventListener("click", a.toggleNav, !1), t.getElementById("nav-button-close").addEventListener("click", a.toggleNav, !1), t.addEventListener("click", a.clickClose, !0), t.addEventListener("touchend", a.touchClose, !0), i(c, "js-ready")
                }
            }, a
        }(), e.addEventListener && e.addEventListener("DOMContentLoaded", e.App.init, !1)
    }(window, window.document), ready(function() {
        "use strict";
        var e = document.body,
            t = (document.getElementById("navigation-popular-links"), "popular-links-open"),
            n = document.getElementById("button-popular-links"),
            a = document.getElementById("popular-links-toggle"),
            o = getCookie("usc_poplinks"),
            i = "usc_poplinks";
        consoleMessage("info", "Popular Links: " + o), "open" === o ? (a.checked = !0, e.classList.add(t)) : (a.checked = !1, e.classList.remove(t)), a.addEventListener("change", function() {
            a.checked ? (setCookie(i, "open", 365), "function" == typeof sendAnalytics && sendAnalytics("Popular Links", "checkbox", "open")) : (setCookie(i, "closed", 365), "function" == typeof sendAnalytics && sendAnalytics("Popular Links", "checkbox", "closed")), consoleMessage("info", "New Popular Links Value: " + getCookie(i))
        }), n.addEventListener("click", function(n) {
            n.preventDefault(), e.classList.contains(t) ? (e.classList.remove(t), "function" == typeof sendAnalytics && sendAnalytics("Popular Links", "title button", "close")) : (e.classList.add(t), "function" == typeof sendAnalytics && sendAnalytics("Popular Links", "title button", "open"))
        }), "#popular-links-menu" === location.hash && (e.classList.add(t), "function" == typeof sendAnalytics && sendAnalytics("Popular Links", "linked with hash", "open"))
    }), jQuery(document).ready(function(e) {
        var t = Modernizr.mq("(min-width: 48em)"),
            n = {
                keyboardNavEnabled: !0,
                autoHeight: !0,
                arrowsNav: !0,
                arrowsNavAutoHide: !1,
                loop: !0,
                autoPlay: {
                    enabled: !1,
                    stopAtAction: !0,
                    pauseOnHover: !0,
                    delay: 5e3
                },
                imageScaleMode: "none",
                imageAlignCenter: !1,
                video: {
                    autoHideControlNav: !0,
                    vimeoCode: '<iframe src="https://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
                    youTubeCode: '<iframe src="https://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0" frameborder="no"></iframe>'
                },
                controlNavigation: "thumbnails",
                thumbs: {
                    appendSpan: !0,
                    arrows: !1
                }
            };
        t && (n.transitionType = "fade");
        var a = e(".royalSlider");
        a.royalSlider(n),
            function(e) {
                var t = e.data("royalSlider");
                forEachElement(null, ".rsSlide", function(n, a) {
                    var o = t.slides[a].caption;
                    e[0].children[1].children[0].children[a].children[0].setAttribute("alt", "Thumbnail: " + o)
                })
            }(a);
        var o = a.data("royalSlider");
        o.ev.on("rsAfterSlideChange", function() {
            sendAnalytics("slide", "click", "Slide " + (o.currSlideId + 1) + ": ", o.currSlide.content[0].children[1].children[0].innerText)
        })
    }),
    function() {
        var e = navigator.userAgent.toLowerCase().indexOf("webkit") > -1,
            t = navigator.userAgent.toLowerCase().indexOf("opera") > -1,
            n = navigator.userAgent.toLowerCase().indexOf("msie") > -1;
        if ((e || t || n) && void 0 !== document.getElementById) {
            var a = window.addEventListener ? "addEventListener" : "attachEvent";
            window[a]("hashchange", function() {
                var e = document.getElementById(location.hash.substring(1));
                e && (/^(?:a|select|input|button|textarea)$/i.test(e.tagName) || (e.tabIndex = -1), e.focus())
            }, !1)
        }
    }(), document.addEventListener("DOMContentLoaded", function() {
        "use strict";
        forEachElement(null, ".weather-information", function(e) {
            var t = listAttributes(e);
            yahoo_weather(t["data-zip"], t["data-degrees"], t["data-city"], t["data-type"], e)
        })
    });