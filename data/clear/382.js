function virtualPageView(a) {
    var b = document.location.pathname,
        c = "virtual/" + a;
    ga("send", "pageview", b === "/" ? b + c : b + "/" + c), ga("send", "event", "Virtual Page View", a)
}

function chooseExperiment(a, b) {
    var c = "//www.google-analytics.com/cx/api.js?experiment=" + a,
        d = document.createElement("script"),
        e = document.getElementsByTagName("script")[0];
    d.async = 0, e.parentNode.insertBefore(d, e), d.onload = d.onreadystatechange = function(a, c) {
        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) {
            d.onload = d.onreadystatechange = null, d = undefined;
            if (!c) {
                var e = cxApi.chooseVariation();
                for (var f = 0; f < b.length; f++) e === f && b[f]()
            } else b[0]()
        }
    }, d.src = c
}
window.ga = window.ga || function() {
    return
}, String.prototype.trim || (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
});
try {
    HTMLElement.prototype.hasClass = function(a) {
        return (" " + this.className + " ").indexOf(" " + a + " ") !== -1
    }, HTMLElement.prototype.addClass = function(a) {
        return this.hasClass(a) ? !1 : (this.className = (this.className + " " + a).trim(), !0)
    }, HTMLElement.prototype.removeClass = function(a) {
        return this.hasClass(a) ? (this.className = (" " + this.className + " ").replace(" " + a + " ", " ").trim(), !0) : !1
    }, HTMLElement.prototype.toggleClass = function(a) {
        this.hasClass(a) ? this.removeClass(a) : this.addClass(a)
    }
} catch (e) {}
addEvent = function(a, b, c, d) {
        if (a.addEventListener) return a.addEventListener(b, c, d);
        if (a.attachEvent) {
            try {
                var e = window.location.pathname,
                    f = e.indexOf("/", 1);
                if (f == 3 || f == 6 || f == 7) e = e.substr(f);
                ga("send", "event", "Browser research", "attachEvent", e + ": " + navigator.userAgent, {
                    nonInteraction: 1
                })
            } catch (g) {}
            return a["e" + b + c] = c, a[b + c] = function() {
                a["e" + b + c](a.event)
            }, a.attachEvent("on" + b, a[b + c])
        }
        try {
            var e = window.location.pathname,
                f = e.indexOf("/", 1);
            if (f == 3 || f == 6 || f == 7) e = e.substr(f);
            ga("send", "event", "Browser research", "on" + b, e + ": " + navigator.userAgent, {
                nonInteraction: 1
            })
        } catch (g) {}
        return a["on" + b] = c, !0
    }, removeEvent = function(a, b, c) {
        return a.removeEventListener ? a.removeEventListener(b, c) : a.detachEvent ? a.detachEvent("on" + b, c) : (a["on" + b] = function() {}, !0)
    }, setCookie = function(a, b, c, d) {
        var e = "",
            f = "domain=" + document.location.host.replace(/.*(\.\w+\.\w+)$/, "$1") + ";";
        if (c) {
            var g = new Date;
            g.setTime(g.getTime() + c * 24 * 60 * 60 * 1e3), e = "; expires=" + g.toGMTString()
        }
        document.cookie = a + "=" + b + ";" + (d ? f : "") + "path=/" + e
    }, getCookie = function(a) {
        var b = a + "=",
            c = document.cookie.split(";");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].trim();
            if (e.indexOf(b) == 0) return e.substring(b.length, e.length)
        }
        return ""
    }, deleteCookie = function(a, b) {
        var c = "domain=" + document.location.host.replace(/.*(\.\w+\.\w+)$/, "$1") + ";";
        document.cookie = a + "=;" + (b ? c : "") + " expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/"
    }, clickonceSupport = function() {
        var a = window.parent.navigator.mimeTypes,
            b = window.parent.navigator.userAgent.toUpperCase(),
            c = !1;
        if (!/(MSIE|TRIDENT\/.*RV:).?[1-9][\.0-9]/.test(b)) return !1;
        if (/\.NET CLR [0-9.]+/.test(b)) return !0;
        if (/(MSIE|TRIDENT\/.*RV:).?[1-9][0-9]\./.test(b)) return !0;
        for (var d = 0; d < a.length; d++)
            if (a[d].type == "application/x-ms-application") {
                c = !0;
                break
            } return c
    },
    function() {
        var a = function() {
            removeEvent(document, "DOMContentLoaded", a), removeEvent(window, "load", a),
                function() {
                    var a = Object.prototype.toString.call(window.operamini) === "[object OperaMini]",
                        b = "ontouchstart" in window;
                    a && navigator.userAgent.match(/Opera Mini\4/) && (document.body.className += " mini4"),
                        function() {
                            var a = document.getElementById("download"),
                                b = document.getElementsByClassName("download-text-extra")[0],
                                c = b ? b.getElementsByTagName("a")[0] : undefined;
                            c && navigator.userAgent.match(/Android [1-3]\./) && (a.href = a.href.replace("com.opera.browser", "com.opera.browser.classic"), c.href = "//www.opera.com/download/get.pl?id=35101&sub=true&nothanks=yes&location=360")
                        }()
                }(),
                function() {
                    var a = /((?:\?|&)partner=)([-\w]+)\b/,
                        b = location.search.match(a),
                        c, d, e = -1;
                    if (b) {
                        c = document.getElementsByTagName("a"), d = c.length;
                        while (++e < d) c[e].href && a.test(c[e].href) && (c[e].href = c[e].href.replace(a, "$1" + b[2]))
                    }
                }(),
                function() {
                    !getCookie("opref_external") && document.referrer && document.referrer.length > 0 && document.referrer.indexOf("opera.com") === -1 && setCookie("opref_external", document.referrer, 7)
                }(),
                function() {
                    var a = document.documentElement.getAttribute("lang"),
                        b = getCookie("language");
                    !b && a && setCookie("language", a, 365, !0)
                }(),
                function() {
                    var a = document.getElementById("hf__lang-selector");
                    a && addEvent(a, "change", function() {
                        if (this.nodeName == "SELECT" && this.options.length) {
                            var a = this.options[this.selectedIndex].getAttribute("data-name") === "undefined" ? "en" : this.options[this.selectedIndex].getAttribute("data-name");
                            setCookie("language", a, 365, !0)
                        }
                    })
                }(),
                function() {
                    var a = document.getElementsByTagName("form");
                    for (var b = 0; b < a.length; b++) a[b].noValidate = !0, a[b].addEventListener("submit", function(a) {
                        if (!a.target.checkValidity()) {
                            a.preventDefault();
                            var b = a.target.getElementsByTagName("input");
                            for (var c = 0, d = b.length; c < d; c++) b[c].className = b[c].className.replace(" error-text", ""), b[c].checkValidity() || (b[c].className = b[c].className + " error-text");
                            var e = a.target.getElementsByTagName("textarea");
                            for (var f = 0, d = e.length; f < d; f++) e[f].className = e[f].className.replace(" error-text", ""), e[f].checkValidity() || (e[f].className = e[f].className + " error-text");
                            var g = a.target.getElementsByTagName("select");
                            for (var h = 0, d = g.length; h < d; h++) g[h].className = g[h].className.replace(" error-text", ""), g[h].checkValidity() || (g[h].className = g[h].className + " error-text")
                        }
                    }, !1)
                }(),
                function() {
                    var a = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13],
                        b = 0,
                        c = [];
                    this.addEventListener("keydown", function(d) {
                        var e = 0,
                            f = !1;
                        c.push(d.keyCode);
                        if (d.keyCode != a[b]) {
                            f = b < 2;
                            while (!f && e++ <= b) f = a[b - e] != c[b - e];
                            f && (c = [], b = 0);
                            return
                        }
                        if (++b == a.length) {
                            var g = document.createElement("iframe");
                            g.width = 0, g.height = 0, g.src = "https://www.youtube.com/embed/tKjNUigZC44?autoplay=1&html5=1#t=0m2s", g.frameborder = 0, document.body.appendChild(g), g.style.display = "none", b = 0, c = []
                        }
                    })
                }(),
                function() {
                    var a = document.getElementById("stock-ticker");
                    if (!!a) {
                        var b = new XMLHttpRequest;
                        b.open("GET", "/ezjscore/call/ezjsopera::ticker"), b.onload = function() {
                            var a = JSON.parse(b.responseText),
                                c = ["last", "volume", "change", "changePercent", "bid", "ask", "high", "low", "amount", "time", "close"],
                                d = c.length,
                                e;
                            for (e = 0; e < d; e++) document.getElementById("ticker-" + c[e]).innerHTML = a[c[e]]
                        }, b.send(null)
                    }
                }(),
                function() {
                    var a = document.getElementsByClassName("expandable");
                    if (a.length < 1) return;
                    var b = function(a) {
                            var b = a.target || a.srcElement,
                                c = b.nextElementSibling;
                            b.hasClass("collapsed") ? (b.removeClass("collapsed"), c.setAttribute("aria-expanded", "true")) : (b.addClass("collapsed"), c.setAttribute("aria-expanded", "false"))
                        },
                        c = function(b) {
                            for (var d = 0; d < a.length; d++) {
                                var f = a[d],
                                    g = f.previousElementSibling;
                                "expand" === b ? (g.removeClass("collapsed"), f.setAttribute("aria-expanded", "true"), e.value = "Collapse all", e.onclick = function() {
                                    c("collapse")
                                }) : (g.addClass("collapsed"), f.setAttribute("aria-expanded", "false"), e.value = "Expand all", e.onclick = function() {
                                    c("expand")
                                })
                            }
                        },
                        d = document.createElement("div"),
                        e = document.createElement("input");
                    e.type = "button", e.id = "expand-collapse-all", e.value = "Expand all", e.onclick = function() {
                        c("expand")
                    };
                    var f = a[0].previousElementSibling;
                    f.parentNode.insertBefore(d, f), d.appendChild(e);
                    for (var g = 0; g < a.length; g++) {
                        var h = a[g];
                        h.setAttribute("aria-expanded", "false"), h.id = "js-expandable-" + g;
                        var i = h.previousElementSibling;
                        i.addClass("expand-toggle collapsed"), i.onclick = b, i.setAttribute("role", "button"), i.setAttribute("aria-controls", h.id)
                    }
                }(),
                function() {
                    var a = document.getElementsByClassName("expandable-paragraph");
                    if (a.length < 1) return;
                    var b = 200;
                    for (var c = 0; c < a.length; c++) {
                        var d = a[c],
                            e = d.innerHTML;
                        if (e.length > b) {
                            var f = e.substr(0, b),
                                g = e.substr(b, e.length - b),
                                h = f + '<span class="more-ellipsis">...</span><span class="more-content">' + g + '</span>  <a href="#" class="more-link more">read more</a>';
                            d.innerHTML = h;
                            var i = d.querySelector(".more-link");
                            addEvent(i, "click", function(a) {
                                a.preventDefault(), this.parentNode.toggleClass("expanded"), this.hasClass("more") ? this.textContent = "collapse" : this.textContent = "read more", this.toggleClass("more")
                            }, !1)
                        }
                    }
                }(),
                function() {
                    var a = document.getElementsByClassName("subscribe"),
                        b = document.getElementsByClassName("subscribe-button");
                    if (a.length === 0 || b.length === 0) return;
                    a = a[0], b = b[0], a.value === "" && b.addClass("js-hidden"), addEvent(a, "focus", function(a) {
                        b.removeClass("js-hidden")
                    }, !1), addEvent(a, "blur", function(a) {
                        this.value === "" && b.addClass("js-hidden")
                    }, !1)
                }(),
                function() {
                    var a = document.getElementById("unsubscribe-link");
                    a && addEvent(a, "click", function() {
                        return iml.email.value != "" ? (window.location.href = this.href + "?email=" + iml.email.value, !1) : !0
                    }, !1)
                }(),
                function() {
                    var a = document.getElementById("register-btn"),
                        b = document.getElementById("solutions-newsletter-signup"),
                        c = document.getElementById("newsletter");
                    b && addEvent(a, "click", function() {
                        if (c.checked || c.hasClass("selected")) {
                            var a = new FormData;
                            a.append("list_id", "fe11e65046"), a.append("list_type", "mailchimp"), a.append("email", document.getElementById("email").value);
                            var b = new XMLHttpRequest;
                            b.open("POST", "/newsletter/subscribe"), b.send(a)
                        }
                    }, !1)
                }(),
                function() {
                    var a = document.getElementById("current-year");
                    a && (a.innerText = (new Date).getFullYear())
                }(),
                function() {
                    var a = document.getElementById("header");
                    if (!a) return !1;
                    var b = 0,
                        c = 0,
                        d = 0,
                        e = a.clientHeight,
                        f = e;
                    window.addEventListener("resize", function() {
                        f = a.clientHeight
                    }), window.addEventListener("scroll", function() {
                        var f = window.scrollY,
                            g = document.getElementById("hf--m-menu").clientHeight,
                            h = a.clientHeight;
                        if (f > b) {
                            c = f - b, g > e && (h = g);
                            if (Math.abs(d) < h) d = d - c;
                            else {
                                d = -h;
                                var i = document.querySelector("#hf--menu-switcher:checked");
                                i && document.querySelector("#hf--menu-switcher:checked").click()
                            }
                            a.style.top = d + "px"
                        } else c = f - b, d = d - c, d > 0 && (d = 0), a.style.top = d + "px";
                        b = f
                    })
                }()
        };
        addEvent(document, "DOMContentLoaded", a, !1), addEvent(window, "load", a, !1)
    }()