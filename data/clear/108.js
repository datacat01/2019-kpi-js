if (void 0 === Mzp) var Mzp = {};
if (Mzp.Modal = function(t) {
        "use strict";
        var c, d, u, p = !1,
            h = t.document.body,
            f = t.document.documentElement,
            m = {},
            y = function(t) {
                27 === t.keyCode && p && v()
            },
            w = function(t) {
                p && !u.contains(t.target) && (t.stopPropagation(), u.focus())
            },
            v = function(t) {
                t && t.preventDefault(), c.appendChild(d), u.parentNode.removeChild(u), f.classList.remove("mzp-is-noscroll");
                var e = document.querySelector(".mzp-c-modal-origin");
                e.focus(), e.classList.remove("mzp-c-modal-origin"), p = !1, document.removeEventListener("focus", w, !1), m && "function" == typeof m.onDestroy && m.onDestroy(), m = {}
            };
        return {
            createModal: function(t, e, o) {
                ! function(t, e, o) {
                    m = o;
                    var n = window.innerWidth < 760;
                    p && v();
                    var i = m && m.title ? m.title : "",
                        r = m && m.className ? m.className : "",
                        s = m && m.closeText ? m.closeText : "",
                        a = '<div class="mzp-c-modal ' + r + '" role="dialog" aria-labelledby="' + t.getAttribute("id") + '" tabindex="-1">  <div class="mzp-c-modal-window">    <div class="mzp-c-modal-inner">      <header><h2>' + i + '</h2></header>      <div class="mzp-c-modal-close">        <button type="button" class="mzp-c-modal-button-close">' + s + "</button>      </div>    </div>  </div></div>";
                    m && !m.allowScroll || n ? f.classList.add("mzp-is-noscroll") : f.classList.remove("mzp-is-noscroll"), h.insertAdjacentHTML("beforeend", a), u = document.querySelector(".mzp-c-modal"), c = (d = e).parentNode, document.querySelector(".mzp-c-modal-inner").appendChild(e), e.classList.add("mzp-c-modal-overlay-contents");
                    var l = document.querySelector(".mzp-c-modal-button-close");
                    l.addEventListener("click", v, !1), l.setAttribute("title", s), document.querySelector(".mzp-c-modal .mzp-c-modal-window").addEventListener("click", function(t) {
                        t.target === this && v()
                    }, !1), u.focus(), document.addEventListener("keyup", y, !1), document.addEventListener("focus", w, !1), t.classList.add("mzp-c-modal-origin"), p = !0, m && "function" == typeof m.onCreate && m.onCreate()
                }(t, e, o)
            },
            closeModal: function() {
                v()
            }
        }
    }(window), function() {
        "use strict";
        ! function s() {
            var t = document.getElementById("newsletter-form"),
                e = document.getElementById("newsletter-submit"),
                o = document.getElementById("newsletter-details"),
                n = document.querySelector(".mzp-js-email-field"),
                i = "none" !== window.getComputedStyle(o).display;

            function r() {
                i || (o.style.display = "block", i = !0)
            }
            n.addEventListener("focus", function() {
                r()
            }), e.addEventListener("click", function(t) {
                i || (t.preventDefault(), r())
            }), t.addEventListener("submit", function(t) {
                i || (t.preventDefault(), r())
            })
        }()
    }(), void 0 === Mozilla) var Mozilla = {};

function onYouTubeIframeAPIReady() {
    "use strict";
    Mozilla.initHomePageVideos()
}! function() {
    "use strict";
    var e, n = {};
    n.supportsInsersectionObserver = function t() {
        return "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype
    }(), n.observerCallback = function(t, e) {
        t.forEach(function(t) {
            0 < t.intersectionRatio && (t.target.dataset.srcset && (t.target.srcset = t.target.dataset.srcset), t.target.src = t.target.dataset.src, t.target.onload = n.onImageLoad, e.unobserve(t.target))
        })
    }, n.registerObserver = function() {
        return new IntersectionObserver(n.observerCallback)
    }, n.observe = function(t) {
        var e = n.registerObserver(),
            o = Array.prototype.slice.call(document.querySelectorAll(t));
        return o.length && o.forEach(function(t) {
            e.observe(t)
        }), e
    }, n.loadAllFallback = function(t) {
        $(t).each(function() {
            var t = this.getAttribute("data-srcset");
            t && (this.srcset = t), this.src = this.getAttribute("data-src"), this.onload = n.onImageLoad
        })
    }, n.onImageLoad = function(t) {
        t.target.removeAttribute("data-src"), t.target.removeAttribute("data-srcset")
    }, n.init = function(t) {
        if ("string" != typeof(e = t || ".lazy-image-container img")) throw new Error("Mozilla.LazyLoad.init: custom selector is not a string");
        n.supportsInsersectionObserver ? n.observe(e) : n.loadAllFallback(e)
    }, window.Mozilla.LazyLoad = n
}(),
function() {
    "use strict";

    function e(t) {
        if (!t) throw new Error("No options passed to Waypoint constructor");
        if (!t.element) throw new Error("No element option passed to Waypoint constructor");
        if (!t.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + o, this.options = e.Adapter.extend({}, e.defaults, t), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = t.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), r[this.key] = this, o += 1
    }
    var o = 0,
        r = {};
    e.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, e.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, e.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete r[this.key]
    }, e.prototype.disable = function() {
        return this.enabled = !1, this
    }, e.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, e.prototype.next = function() {
        return this.group.next(this)
    }, e.prototype.previous = function() {
        return this.group.previous(this)
    }, e.invokeAll = function(t) {
        var e = [];
        for (var o in r) e.push(r[o]);
        for (var n = 0, i = e.length; n < i; n++) e[n][t]()
    }, e.destroyAll = function() {
        e.invokeAll("destroy")
    }, e.disableAll = function() {
        e.invokeAll("disable")
    }, e.enableAll = function() {
        for (var t in e.Context.refreshAll(), r) r[t].enabled = !0;
        return this
    }, e.refreshAll = function() {
        e.Context.refreshAll()
    }, e.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, e.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, e.adapters = [], e.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, e.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = e
}(),
function() {
    "use strict";

    function e(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function o(t) {
        this.element = t, this.Adapter = y.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, i[t.waypointContextKey] = this, n += 1, y.windowContext || (y.windowContext = !0, y.windowContext = new o(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var n = 0,
        i = {},
        y = window.Waypoint,
        t = window.onload;
    o.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, o.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            o = this.element == this.element.window;
        t && e && !o && (this.adapter.off(".waypoints"), delete i[this.key])
    }, o.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, y.requestAnimationFrame(t))
        })
    }, o.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || y.isTouch) && (e.didScroll = !0, y.requestAnimationFrame(t))
        })
    }, o.prototype.handleResize = function() {
        y.Context.refreshAll()
    }, o.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var o in e) {
            var n = e[o],
                i = n.newScroll > n.oldScroll ? n.forward : n.backward;
            for (var r in this.waypoints[o]) {
                var s = this.waypoints[o][r];
                if (null !== s.triggerPoint) {
                    var a = n.oldScroll < s.triggerPoint,
                        l = n.newScroll >= s.triggerPoint;
                    (a && l || !a && !l) && (s.queueTrigger(i), t[s.group.id] = s.group)
                }
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, o.prototype.innerHeight = function() {
        return this.element == this.element.window ? y.viewportHeight() : this.adapter.innerHeight()
    }, o.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, o.prototype.innerWidth = function() {
        return this.element == this.element.window ? y.viewportWidth() : this.adapter.innerWidth()
    }, o.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var o in this.waypoints[e]) t.push(this.waypoints[e][o]);
        for (var n = 0, i = t.length; n < i; n++) t[n].destroy()
    }, o.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            o = e ? void 0 : this.adapter.offset(),
            n = {};
        for (var i in this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : o.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : o.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
            var r = t[i];
            for (var s in this.waypoints[i]) {
                var a, l, c, d, u = this.waypoints[i][s],
                    p = u.options.offset,
                    h = u.triggerPoint,
                    f = 0,
                    m = null == h;
                u.element !== u.element.window && (f = u.adapter.offset()[r.offsetProp]), "function" == typeof p ? p = p.apply(u) : "string" == typeof p && (p = parseFloat(p), -1 < u.options.offset.indexOf("%") && (p = Math.ceil(r.contextDimension * p / 100))), a = r.contextScroll - r.contextOffset, u.triggerPoint = Math.floor(f + a - p), l = h < r.oldScroll, c = u.triggerPoint >= r.oldScroll, d = !l && !c, !m && (l && c) ? (u.queueTrigger(r.backward), n[u.group.id] = u.group) : !m && d ? (u.queueTrigger(r.forward), n[u.group.id] = u.group) : m && r.oldScroll >= u.triggerPoint && (u.queueTrigger(r.forward), n[u.group.id] = u.group)
            }
        }
        return y.requestAnimationFrame(function() {
            for (var t in n) n[t].flushTriggers()
        }), this
    }, o.findOrCreateByElement = function(t) {
        return o.findByElement(t) || new o(t)
    }, o.refreshAll = function() {
        for (var t in i) i[t].refresh()
    }, o.findByElement = function(t) {
        return i[t.waypointContextKey]
    }, window.onload = function() {
        t && t(), o.refreshAll()
    }, y.requestAnimationFrame = function(t) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
    }, y.Context = o
}(),
function() {
    "use strict";

    function s(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function a(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function e(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    e.prototype.add = function(t) {
        this.waypoints.push(t)
    }, e.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, e.prototype.flushTriggers = function() {
        for (var t in this.triggerQueues) {
            var e = this.triggerQueues[t],
                o = "up" === t || "left" === t;
            e.sort(o ? a : s);
            for (var n = 0, i = e.length; n < i; n += 1) {
                var r = e[n];
                (r.options.continuous || n === e.length - 1) && r.trigger([t])
            }
        }
        this.clearTriggerQueues()
    }, e.prototype.next = function(t) {
        this.waypoints.sort(s);
        var e = n.Adapter.inArray(t, this.waypoints);
        return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1]
    }, e.prototype.previous = function(t) {
        this.waypoints.sort(s);
        var e = n.Adapter.inArray(t, this.waypoints);
        return e ? this.waypoints[e - 1] : null
    }, e.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, e.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints); - 1 < e && this.waypoints.splice(e, 1)
    }, e.prototype.first = function() {
        return this.waypoints[0]
    }, e.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, e.findOrCreate = function(t) {
        return o[t.axis][t.name] || new e(t)
    }, n.Group = e
}(),
function() {
    "use strict";

    function o(t) {
        this.$element = n(t)
    }
    var n = window.jQuery,
        t = window.Waypoint;
    n.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, e) {
        o.prototype[e] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[e].apply(this.$element, t)
        }
    }), n.each(["extend", "inArray", "isEmptyObject"], function(t, e) {
        o[e] = n[e]
    }), t.adapters.push({
        name: "jquery",
        Adapter: o
    }), t.Adapter = o
}(),
function() {
    "use strict";

    function t(n) {
        return function() {
            var e = [],
                o = arguments[0];
            return n.isFunction(arguments[0]) && ((o = n.extend({}, arguments[1])).handler = arguments[0]), this.each(function() {
                var t = n.extend({}, o, {
                    element: this
                });
                "string" == typeof t.context && (t.context = n(this).closest(t.context)[0]), e.push(new i(t))
            }), e
        }
    }
    var i = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(),
function() {
    "use strict";
    var h = document.getElementById("newsletter-form"),
        f = [],
        m = document.getElementById("newsletter-errors"),
        n = document.querySelector(".mzp-c-newsletter-content");

    function y() {
        for (var t = h.querySelectorAll("input, select"), e = 0; e < t.length; e++) t[e].disabled = !1
    }

    function w() {
        if (y(), f.length) {
            m || ((m = document.createElement("div")).id = "newsletter-errors", m.className = "mzp-c-form-errors", n.insertBefore(m, n.firstChild));
            for (var t = document.createElement("ul"), e = 0; e < f.length; e++) {
                var o = document.createElement("li");
                o.appendChild(document.createTextNode(f[e])), t.appendChild(o)
            }
            m.appendChild(t), m.style.display = "block"
        } else h.setAttribute("data-skip-xhr", !0), h.submit()
    }
    h.addEventListener("submit", function v(t) {
        if (h.getAttribute("data-skip-xhr")) return !0;
        if (t.preventDefault(), t.stopPropagation(), f = [], m)
            for (m.style.display = "none"; m.firstChild;) m.removeChild(m.firstChild);
        var e = document.getElementById("format-html"),
            o = document.getElementById("format-text"),
            n = o.checked ? o.value : e.value,
            i = document.getElementById("id_email").value,
            r = document.getElementById("id_newsletters").value,
            s = document.querySelector('input[name="privacy"]:checked') ? "&privacy=true" : "",
            a = document.getElementById("id_country").value,
            l = document.getElementById("id_lang").value,
            c = "email=" + encodeURIComponent(i) + "&newsletters=" + r + s + "&fmt=" + n + "&country=" + a + "&lang=" + l + "&source_url=" + encodeURIComponent(document.location.href),
            d = new XMLHttpRequest;
        d.onload = function(t) {
            if (200 <= t.target.status && t.target.status < 300) {
                var e = t.target.response || t.target.responseText;
                if ("object" != typeof e && (e = JSON.parse(e)), e.success) h.style.display = "none",
                    function n() {
                        document.getElementById("newsletter-thanks").style.display = "block"
                    }(), y(),
                    function i() {
                        if ("function" == typeof document.CustomEvent) document.dispatchEvent(new CustomEvent("newsletterSuccess", {
                            bubbles: !0,
                            cancelable: !0
                        }));
                        else if ("function" == typeof document.createEvent) {
                            var t = document.createEvent("Event");
                            t.initEvent("newsletterSuccess", !0, !0), document.dispatchEvent(t)
                        }
                    }(), window.dataLayer && window.dataLayer.push({
                        event: "newsletter-signup-success",
                        newsletter: r
                    });
                else {
                    if (e.errors)
                        for (var o = 0; o < e.errors.length; o++) f.push(e.errors[o]);
                    w()
                }
            } else w()
        }, d.onerror = function(t) {
            w()
        };
        var u = h.getAttribute("action");
        return d.open("POST", u, !0), d.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), d.setRequestHeader("X-Requested-With", "XMLHttpRequest"), d.timeout = 5e3, d.ontimeout = w, d.responseType = "json", d.send(c),
            function p() {
                for (var t = h.querySelectorAll("input, select"), e = 0; e < t.length; e++) t[e].disabled = !0
            }(), !1
    }, !1)
}(),
function(n, i) {
    "use strict";
    var t = document.createElement("script");
    t.src = "https://www.youtube.com/iframe_api";
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e), Mozilla.LazyLoad.init(), Mozilla.initHomePageVideos = function a() {
        var t = document.querySelectorAll(".mzp-c-card.has-video-embed .mzp-c-card-block-link");

        function e(t) {
            var o = t.currentTarget.querySelector(".mzp-c-card-title").innerText,
                e = function s(t) {
                    for (t = t.nextSibling; t;) {
                        if (1 === t.nodeType) return t;
                        t = t.nextSibling
                    }
                    return null
                }(t.currentTarget).querySelector(".mzp-c-card-video-content"),
                n = e.querySelector(".video-play"),
                i = n.getAttribute("data-id"),
                r = new YT.Player(n, {
                    width: 640,
                    height: 360,
                    videoId: i,
                    playerVars: {
                        modestbranding: 1,
                        rel: 0
                    },
                    events: {
                        onReady: function a(t) {
                            t.target.playVideo()
                        },
                        onStateChange: function l(t) {
                            var e;
                            switch (t.data) {
                                case YT.PlayerState.PLAYING:
                                    e = "video play";
                                    break;
                                case YT.PlayerState.PAUSED:
                                    e = "video paused";
                                    break;
                                case YT.PlayerState.ENDED:
                                    e = "video complete"
                            }
                            e && window.dataLayer.push({
                                event: "video-interaction",
                                videoTitle: o,
                                interaction: e
                            })
                        }
                    }
                });
            e && (t.preventDefault(), Mzp.Modal.createModal(this, e, {
                title: o,
                className: "mzp-has-media",
                onDestroy: function() {
                    r.destroy()
                }
            }))
        }
        for (var o = 0; o < t.length; o++) t[o].addEventListener("click", e, !1)
    };
    var r = n(document.querySelectorAll(".c-sticky-cta")),
        s = "undefined" != typeof Mozilla.Cookies && Mozilla.Cookies.enabled();
    r.attr("aria-hidden", "true"), s ? Mozilla.Cookies.getItem("sticky-home-cta-dismissed") ? r.remove() : function l() {
        var t = new i({
                element: document.querySelectorAll(".c-primary-cta"),
                handler: function(t) {
                    "down" === t ? r.removeAttr("aria-hidden") : r.attr("aria-hidden", "true")
                }
            }),
            e = r.find(".c-sticky-cta-wrapper");
        e.hide();
        var o = new i({
            element: document.querySelectorAll(".mozilla-content"),
            handler: function(t) {
                "down" === t ? e.show() : e.hide()
            },
            offset: 100
        });
        n('<button type="button" class="sticky-dismiss">').text("Dismiss this prompt.").appendTo(e), n(".sticky-dismiss").on("click", function() {
            t.destroy(), o.destroy(),
                function e() {
                    if (r.remove(), s) {
                        var t = new Date;
                        t.setTime(t.getTime() + 2592e6), Mozilla.Cookies.setItem("sticky-home-cta-dismissed", "true", t, "/")
                    }
                }()
        })
    }() : r.remove()
}(window.jQuery, window.Waypoint);