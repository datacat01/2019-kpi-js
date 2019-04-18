! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("bows"), require("jquery"), require("clipboard")) : "function" == typeof define && define.amd ? define(["bows", "jquery", "clipboard"], t) : e.Site = t(e.bows, e.jQuery, e.Clipboard)
}(this, function(e, t, i) {
    "use strict";

    function n(e, t, i) {
        var n, s;
        return t || (t = 250),
            function() {
                var o = i || this,
                    a = +new Date,
                    r = arguments;
                n && a < n + t ? (clearTimeout(s), s = setTimeout(function() {
                    n = a, e.apply(o, r)
                }, t)) : (n = a, e.apply(o, r))
            }
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, t = t && t.hasOwnProperty("default") ? t.default : t, i = i && i.hasOwnProperty("default") ? i.default : i;
    var s = e("analytics"),
        o = function(e, t, i) {
            var n, o = function(n) {
                if (s("Track Event:", {
                        category: e,
                        action: t,
                        label: i
                    }), "www.whitehouse.gov" !== location.host) return s("Track Event Request not sent due to location.host = " + location.host), n("TrackEvent Successful but not sent.");
                if ("function" == typeof window.gtag) window.gtag("event", t, {
                    event_category: e,
                    event_action: t,
                    event_label: i,
                    event_callback: function() {
                        return n("gtag event sent!")
                    }
                });
                else {
                    if ("function" != typeof window.ga) return n("No analytics tracker exists!");
                    window.ga("send", "event", e, t, i, {
                        hitCallback: function() {
                            return n("ga event sent!")
                        }
                    })
                }
            };
            return window.Promise ? n = new Promise(function(e, t) {
                o(e), setTimeout(function() {
                    return e("Analytics event timed out after 1s")
                }, 1e3)
            }) : (s("Browser does not support promises!"), o(function() {}), n = {
                then: function(e) {
                    "function" == typeof e && e()
                }
            }), n
        },
        a = function(e) {
            var t = function() {
                o(e.data.category, e.data.action, e.data.label).then(function(e) {
                    s("Event message:", e)
                })
            };
            switch (!e.data.action && e.currentTarget && e.currentTarget.href ? e.data.action = e.currentTarget.href : !e.data.action && e.type && (e.data.action = e.type), !e.data.label && e.currentTarget && e.currentTarget.textContent ? e.data.label = e.currentTarget.textContent.trim() : e.data.label || (e.data.label = document.title), !e.data.href && e.currentTarget && e.currentTarget.href && (e.data.href = e.currentTarget.href), e.type) {
                case "click":
                    "function" == typeof e.isDefaultPrevented && e.isDefaultPrevented() ? (s("Default prevented on click"), t()) : e.data.href && "#" !== e.data.href ? e.currentTarget && "javascript:" === e.currentTarget.protocol ? (s("JavaScript link on click"), t()) : e.currentTarget && e.currentTarget.target && !e.currentTarget.target.match(/^_(self|parent|top)$/i) ? (s("Target " + e.currentTarget.target + " on click"), t()) : e.ctrlKey || e.shiftKey || 2 == e.which ? (s("Ctrl/shift/middle click"), t()) : e.data.href && "function" == typeof e.preventDefault ? (s("Delaying click", e.data.href), e.preventDefault(), o(e.data.category, e.data.action, e.data.label).then(function(t) {
                        s("Event message:", t), window.location.href = e.data.href
                    })) : (s("Unknown click event", e), t()) : (s("No href on click"), t());
                    break;
                case "mousedown":
                    1 === e.button && (s("Middle click"), t());
                    break;
                default:
                    return s("Unknown event", e.type), void t()
            }
        },
        r = e("ajax"),
        c = e("header"),
        h = function() {
            this.header = document.querySelector("header.header"), this.header && (this.height = this.header.offsetHeight, this.lastTop = this.beforeLastTop = 0, this.scrollThreshold = 20, this.checkTopCallback = this.checkTop.bind(this), window.addEventListener("DOMContentLoaded", this.ready.bind(this)), window.addEventListener("load", this.load.bind(this)))
        };
    h.prototype.ready = function() {
        this.watchResize()
    }, h.prototype.load = function() {
        this.resetTop(), this.show(), this.watchScroll()
    }, h.prototype.enableEvents = function() {
        this.watchResize(), this.watchScroll()
    }, h.prototype.disableEvents = function() {
        this.ignoreResize(), this.ignoreScroll()
    }, h.prototype.watchResize = function() {
        c("watchResize"), window.addEventListener("site.resize", this.checkTopCallback)
    }, h.prototype.ignoreResize = function() {
        c("ignoreResize"), window.removeEventListener("site.resize", this.checkTopCallback)
    }, h.prototype.watchScroll = function() {
        c("watchScroll"), window.addEventListener("site.scroll", this.checkTopCallback)
    }, h.prototype.ignoreScroll = function() {
        c("ignoreScroll"), window.removeEventListener("site.scroll", this.checkTopCallback)
    }, h.prototype.getTop = function() {
        return window.pageYOffset || document.documentElement.scrollTop || 0
    }, h.prototype.resetTop = function() {
        var e = this.getTop();
        this.lastTop = this.beforeLastTop = e
    }, h.prototype.checkTop = function() {
        var e = this.getTop();
        e > this.height ? this.header.classList.add("header--fixed") : this.header.classList.remove("header--fixed"), e > this.lastTop && e > this.beforeLastTop ? this.hide() : e < this.lastTop - this.scrollThreshold && (this.show(), 0 !== e && e < this.height ? this.header.classList.add("header--transition") : this.header.classList.remove("header--transition")), this.beforeLastTop = this.lastTop, this.lastTop = e
    }, h.prototype.show = function() {
        c("header.show"), this.header.classList.add("header--show");
        var e = new CustomEvent("header.show", {
            cancelable: !1,
            bubbles: !1
        });
        window.dispatchEvent(e)
    }, h.prototype.hide = function() {
        c("header.hide"), this.header.classList.remove("header--show"), this.header.classList.remove("header--transition");
        var e = new CustomEvent("header.hide", {
            cancelable: !1,
            bubbles: !1
        });
        window.dispatchEvent(e)
    };
    var l = e("search"),
        d = function() {
            var t = this;
            this.log = e("search-filters"), this.opener = document.querySelector(".header__search"), this.opener && this.opener.addEventListener("click", function(e) {
                e.preventDefault(), document.querySelector(".search-form__field").focus(), o("search", "click", document.title)
            }), this.filters = document.querySelector(".filters__toggle-facets"), this.filters ? (this.active = -1, this.filtersList = Array.from(this.filters.querySelectorAll("button")), this.facets = document.querySelector(".filters__facets"), this.facetsList = Array.from(document.querySelectorAll(".filters__facet")), this.openClass = "filters__facets--open", this.activeClass = "filters__facet--active", this.closers = Array.from(document.querySelectorAll(".filters__close button")), this.filtersList.forEach(function(e, i) {
                e.addEventListener("click", function(e) {
                    e.preventDefault(), t.open(i)
                })
            }), this.closers.forEach(function(e) {
                e.addEventListener("click", function(e) {
                    e.preventDefault(), t.close()
                })
            }), document.addEventListener("keyup", function(e) {
                t.log("keyup", e.which, t.active), t.active > -1 && 27 === e.which && t.close()
            }), document.addEventListener("click", function(e) {
                if (-1 !== t.active) {
                    for (var i = e.target, n = []; i.parentNode;) i = i.parentNode, n.push(i); - 1 === n.indexOf(t.filters) && -1 === n.indexOf(t.facets) && t.close(), t.log(n)
                }
            }), window.addEventListener("site.resize", this.resize.bind(this))) : l("No filters present")
        };
    d.prototype.open = function(e) {
        this.log("toggleFilters", e, this.active), e == this.active ? (this.log("close filters"), this.close()) : this.facets.classList.contains(this.openClass) ? (this.log("switch filters"), this.facetsList[this.active].classList.remove(this.activeClass), this.active = e, this.facetsList[this.active].classList.add(this.activeClass), this.resize()) : (this.log("open filters"), this.active = e, this.facetsList[this.active].classList.add(this.activeClass), this.facets.classList.add(this.openClass), this.resize())
    }, d.prototype.close = function() {
        this.log("close", this.active), this.facets.classList.remove(this.openClass), this.active > -1 && (this.facetsList[this.active].classList.remove(this.activeClass), this.active = -1)
    }, d.prototype.resize = function() {
        this.active > -1 && (this.facets.style.height = this.facetsList[this.active].getBoundingClientRect().height + "px")
    };
    var u = e("videos"),
        p = function(e) {
            var t = e.closest(".editor__module");
            t.length && t.find(".module__share").addClass("share--hidden"), u("removeShare", e)
        },
        f = function() {
            var e = this;
            ! function(e) {
                var t = {
                    selectors: ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', "object", "embed"]
                };
                e && (Array.isArray(e) || (e = [e]), t.selectors = t.selectors.concat(opts.selectors).filter(function(e, t, i) {
                    return i.indexOf(e) === t
                }));
                var i = Array.prototype.slice.call(document.querySelectorAll(t.selectors.join(",")));
                i.length > 0 && i.forEach(function(e) {
                    if (!e.getAttribute("data-fitvid")) {
                        var t = document.createElement("div"),
                            i = window.getComputedStyle(e),
                            n = 100 * (i.height > 0 && i.width > 0 ? i.height / i.width : 9 / 16);
                        t.className = "fitvid", t.style.width = "100%", t.style.height = 0, t.style.position = "relative", t.style.paddingTop = n + "%", e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.width = "100%", e.style.height = "100%", e.setAttribute("data-fitvid", n), e.parentNode.insertBefore(t, e), t.appendChild(e)
                    }
                })
            }(), u("Triggered fitvid"), this.ytAPIInited = !1, document.querySelectorAll('iframe[src*="youtube.com"][src*="enablejsapi=1"]').length && this.ytAPIInit(), window.onYouTubeIframeAPIReady = function() {
                return e.ytAPIReady = !0
            }, window.addEventListener("DOMContentLoaded", this.ready.bind(this))
        };
    f.prototype.ready = function() {
        this.init()
    }, f.prototype.init = function() {
        var e = this;
        t(".video").each(function(i, n) {
            var s, o, a, r = t(n),
                c = r.find(".video__link"),
                h = r.find(".video__embed iframe"),
                l = r.parents(".gallery").length,
                d = function() {
                    !s && h.length && h.is('iframe[src*="youtube.com"]') && h.is('iframe[src*="enablejsapi=1"]') && e.ytAPIReady && (u("Init YouTube"), s = new YT.Player(h[0], {
                        events: {
                            onReady: function(e) {
                                u("Ready YouTube"), o = !0
                            }
                        }
                    }))
                },
                f = function() {
                    if (t(".video").not(r).trigger("pause"), d(), s) {
                        u("Loading YouTube"), r.addClass("video--loading");
                        var e = function() {
                            u("Playing YouTube"), s.playVideo()
                        };
                        o ? e() : s.addEventListener("onReady", function() {
                            return e()
                        }), a || s.addEventListener("onStateChange", function(e) {
                            1 !== e.data || a || (u("Revealing YouTube"), r.addClass("video--reveal").removeClass("video--loading"), a = !0, p(r))
                        })
                    } else u("Revealing video"), r.addClass("video--reveal"), p(r)
                };
            h.length && h.is('iframe[src*="youtube.com"]') && h.is('iframe[src*="enablejsapi=1"]') && e.ytAPIInit(), r.on("play", function(e) {
                return f()
            }), r.on("pause", function(e) {
                return d(), void(s && o && (u("Pause YouTube"), s.pauseVideo()))
            }), c.on("click", function(e) {
                return l || (u("Click to play video"), f()), e.preventDefault(), !1
            })
        })
    }, f.prototype.ytAPIInit = function() {
        if (!this.ytAPIInited) {
            u("Init YouTube API"), this.ytAPIInited = !0;
            var e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }
    };
    var m = e("galleries"),
        v = function() {
            window.addEventListener("DOMContentLoaded", this.ready.bind(this)), window.addEventListener("load", this.resize)
        };
    v.prototype.ready = function() {
        this.init()
    }, v.prototype.init = function() {
        t(".gallery .gallery__main").each(function(e, i) {
            var n = t(i),
                s = n.data("flickity"),
                o = n.parent().attr("id");
            n.on("staticClick.flickity", function(e, i, n, s) {
                m(o + ": staticClick on " + (s + 1)), t(n).find(".video").trigger("play")
            }), n.on("select.flickity", function() {
                m(o + ": select " + (s.selectedIndex + 1)), n.find(".gallery__main-item").not(s.selectedElement).find(".video").trigger("pause")
            })
        }), t(".gallery .gallery__pagination").each(function(e, i) {
            var n = t(i),
                s = n.parent().attr("id"),
                o = n.data("flickity"),
                a = n.find(".gallery__pagination-count-current");
            n.find(".gallery__pagination-count-total").text(o.cells.length), m(s + ": Set total slides to " + o.cells.length), n.on("select.flickity", function() {
                var e = o.selectedIndex + 1;
                a.text(e), m(s + ": Set current slide to " + e)
            })
        })
    }, v.prototype.resize = function() {
        t(".gallery .gallery__main").each(function(e, i) {
            t(i).flickity("resize")
        })
    };
    var g = function() {
        var t = this;
        this.log = e("news"), this.opened = !1, this.opener = document.querySelector(".filters__toggle-facets-issue"), this.closer = document.querySelector(".filters__close button"), this.filtersList = document.querySelector(".filters__facets"), this.openClass = "filters__facets--open", this.opener && this.filtersList && (this.opener.addEventListener("click", function() {
            t.open()
        }), this.closer && this.closer.addEventListener("click", function() {
            t.close()
        }), document.addEventListener("keyup", function(e) {
            t.opened && 27 === e.which && t.close()
        }))
    };
    g.prototype.open = function() {
        this.log("open"), this.filtersList.classList.add(this.openClass), this.opened = !0
    }, g.prototype.close = function() {
        this.log("close"), this.filtersList.classList.remove(this.openClass), this.opened = !1
    }, g.prototype.toggle = function() {
        this.opened ? this.close() : this.open()
    };
    var y = function() {
        this.log = e("live"), this.refreshTimer = null, this.refreshInterval = 60
    };
    y.prototype.initRefresh = function(e, t) {
        this.refreshTime = e, t && (this.refreshInterval = t), this.startRefresh()
    }, y.prototype.startRefresh = function() {
        var e = this;
        this.stopRefresh(), this.refreshTimer = setInterval(function() {
            return e.autoRefresh()
        }, 1e3 * this.refreshInterval)
    }, y.prototype.stopRefresh = function() {
        this.refreshTimer && clearInterval(this.refreshTimer)
    }, y.prototype.autoRefresh = function() {
        var e = Date.now() / 1e3;
        e > this.refreshTime ? !1 !== navigator.onLine && (this.log("Refreshing page now."), window.location.reload(!0)) : this.log("Refeshing page in " + Math.floor(this.refreshTime - e) + " seconds.")
    };
    e("ptaw");
    var b = function() {
        this.$ptaw = t(".ptaw"), this.$ptaw.length && (this.$summary = t(".ptaw__summary"), this.$header = t(".ptaw__header"), this.$pledges = t(".ptaw-feature, .ptaw-item"), this.$companiesTotal = t(".ptaw__companies .ptaw__total"), this.$opportunitiesTotal = t(".ptaw__opportunities .ptaw__total"), this.$pledgeMobile = t(".ptaw__pledge-mobile"), this.$footer = t(".footer"), this.$graph = t(".ptaw__graph svg"), this.$line = this.$graph.find("polyline"), this.$dot = this.$graph.find("circle"), this.init(), window.addEventListener("load", this.updateSize.bind(this)), window.addEventListener("site.resize", this.updateSize.bind(this)), window.addEventListener("site.scroll", this.updatePosition.bind(this)), this.instantRate = .2, setInterval(this.updateCounter.bind(this), 1e3 / 60))
    };
    b.prototype.init = function() {
        var e = this;
        this.headerTop = 0, this.scrollHighwater = 0, this.totalCompanies = 0, this.totalOpportunities = 0, this.currentCompanies = 0, this.currentOpportunities = 0, this.instantCompanies = 0, this.instantOpportunities = 0, this.pledges = [], this.$pledges.each(function(i, n) {
            var s = t(n),
                o = s.hasClass("ptaw-item"),
                a = s.data("companies"),
                r = s.data("opportunities");
            e.totalCompanies += a, e.totalOpportunities += r, e.pledges.push({
                $: s,
                item: o,
                top: top,
                companies: a,
                opportunities: r
            })
        }), this.$summary.find(".ptaw-summary__total").html(this.formatNumber(this.totalOpportunities)), this.updateSize()
    }, b.prototype.updateSize = function() {
        this.headerTop = this.$summary.offset().top + this.$summary.outerHeight(!0), this.pledges.forEach(function(e) {
            var t = Math.floor(e.$.offset().top);
            e.top = t
        }), this.updatePosition()
    }, b.prototype.updatePosition = function() {
        var e = this,
            t = Math.ceil(window.pageYOffset) + Math.floor(window.innerHeight) / 1.8;
        this.scrollHighwater = Math.max(this.scrollHighwater, t), t >= this.headerTop ? this.$header.addClass("ptaw__header--show") : (this.$header.removeClass("ptaw__header--show"), this.scrollHighwater = 0);
        var i = this.$graph.width(),
            n = this.$graph.height();
        this.currentCompanies = 0, this.currentOpportunities = 0;
        var s = [0],
            o = [n],
            a = [],
            r = null;
        this.pledges.forEach(function(t) {
            if (t.top <= e.scrollHighwater) {
                r = t, e.currentCompanies += t.companies, e.currentOpportunities += t.opportunities;
                var a = e.currentCompanies / e.totalCompanies * i,
                    c = n - e.currentOpportunities / e.totalOpportunities * n;
                s.push(a), o.push(c)
            }
        }), this.$pledges.removeClass("ptaw-item--active"), r && r.item && r.$.addClass("ptaw-item--active"), o = this.smoothArray(o, 2);
        for (var c = 0; c < s.length; c++) a.push(s[c] + "," + o[c]);
        this.$graph.attr("viewBox", "0 0 " + i + " " + n), this.$line.attr("points", a.join(" ")), this.$dot.attr("cx", s.pop()).attr("cy", o.pop()), this.$footer.length > 0 && (this.$footer.get(0).getBoundingClientRect().top < window.innerHeight ? this.$pledgeMobile.addClass("ptaw__pledge-mobile--hidden") : this.$pledgeMobile.removeClass("ptaw__pledge-mobile--hidden"))
    }, b.prototype.updateCounter = function() {
        var e = this.calculateStep(this.currentCompanies, this.instantCompanies, this.instantRate);
        !1 !== e && (this.instantCompanies += e, this.$companiesTotal.html(this.formatNumber(this.instantCompanies)));
        var t = this.calculateStep(this.currentOpportunities, this.instantOpportunities, this.instantRate);
        !1 !== t && (this.instantOpportunities += t, this.$opportunitiesTotal.html(this.formatNumber(this.instantOpportunities))), (e || t) && this.updateGraph()
    }, b.prototype.updateGraph = function() {
        var e = this.$graph.width(),
            t = this.$graph.height();
        this.$graph.attr("viewBox", "0 0 " + e + " " + t)
    }, b.prototype.calculateStep = function(e, t, i) {
        var n = e - t;
        if (0 !== n) {
            var s = n * i;
            return s > 1 || s < -1 ? Math.ceil(s) : n
        }
        return !1
    }, b.prototype.smoothArray = function(e, t) {
        for (var i = [e[0]], n = 1; n < e.length; n++) {
            for (var s = 0, o = 0, a = n - t; a <= n + t; a++) a >= 1 && a < e.length && (s += e[a], o++);
            i.push(s / o)
        }
        return i
    }, b.prototype.formatNumber = function(e) {
        var t = e.toLocaleString("en-US");
        return e < 10 && (t = "0" + t), t = t.replace(/,/g, '<span class="comma">,</span>')
    };
    var w = "(max-width: 699px)",
        _ = "(max-width: 999px)",
        T = "(min-width: 1000px)",
        L = e("hover-intent"),
        C = e("popover"),
        k = function() {
            var e = this;
            this.active = -1, this.opened = !1, this.initOpened = null, this.hoverTimeout = null, this.hasEvents = null, this.node = document.querySelector(".popover"), this.pageYOffset = window.pageYOffset, this.searchPage = document.body.classList.contains("search"), this.pageTabbingDisabled = !1, this.node ? (this.classes = {
                open: "popover--open",
                openBody: "popover--active",
                openHamburger: "popover--hamburger",
                openSearch: "popover--search",
                toggle: "popover--toggle",
                openNav: "popover__nav--opened",
                openItem: "nav__menu-item--opened"
            }, this.overflow = document.querySelector(".body-overflow"), this.nav = this.node.querySelector(".popover__nav"), this.seal = this.node.querySelector(".popover__seal"), this.searchInput = this.node.querySelector(".popover__search-input"), this.searchForm = this.node.querySelector(".popover__search-form"), this.hamburgerOpener = document.querySelector(".header__hamburger"), this.searchOpener = document.querySelector(".header__search"), this.hamburgerToggler = this.node.querySelector(".popover__hamburger-toggle"), this.searchToggler = this.node.querySelector(".popover__search-toggle"), this.header = window.site.header, this.items = Array.from(this.node.querySelectorAll(".nav__menu-item--depth0")).map(function(t, i) {
                var n = e,
                    s = {
                        item: t,
                        link: Array.from(t.children).filter(function(e) {
                            return e.tagName && "A" === e.tagName
                        }).shift(),
                        menu: null,
                        children: []
                    };
                return t.setAttribute("data-index", i), t.classList.contains("nav__menu-item--has-submenu") && (s.menu = t.querySelector(".nav__menu--depth1"), s.menu && s.menu.insertAdjacentHTML("afterbegin", '<li class="nav__menu-item nav__menu-item--depth1 nav__menu-item--back"><button class="nav__link">' + s.link.innerText + "</button></li>"), s.children = Array.from(t.querySelectorAll(".nav__menu-item--depth1 > .nav__link")).map(function(e) {
                    return e.tabIndex = -1, e
                })), s.intent = new function(e, t, i) {
                    var n = this;
                    if (void 0 === t && (t = {}), void 0 === i && (i = null), this.node = e, this.node) {
                        for (var s in this.opts = {
                                delay: 100,
                                open: null,
                                close: null
                            }, t) t.hasOwnProperty(s) && (this.opts[s] = t[s]);
                        this.timeout = i, this.node.addEventListener("mouseenter", function(e) {
                            "number" == typeof n.timeout && window.clearTimeout(n.timeout), n.timeout = window.setTimeout(function() {
                                "function" == typeof n.opts.open && n.opts.open(e), L("hoverintent open")
                            }, n.opts.delay)
                        }), this.node.addEventListener("mouseleave", function(e) {
                            "number" == typeof n.timeout && window.clearTimeout(n.timeout), n.timeout = window.setTimeout(function() {
                                "function" == typeof n.opts.close && n.opts.close(e), L("hoverintent close")
                            }, n.opts.delay)
                        })
                    }
                }(t, {
                    delay: 200,
                    open: function() {
                        window.matchMedia(T).matches && n.goTo(i)
                    }
                }, e.hoverTimeout), s.link.addEventListener("focus", function(t) {
                    e.active !== i && (window.matchMedia(T).matches ? n.goTo(i) : n.goTo(-1)), C("focus", i, e.active, t)
                }), s
            }), this.handleClick = function(t) {
                for (var i = t.target; i.parentNode && !i.classList.contains("nav__link") && i !== e.node;) i = i.parentNode;
                if (i !== e.node) {
                    if (i.parentNode.classList.contains("nav__menu-item--back")) return window.matchMedia(_).matches && o("hamburger", "drillup", i.textContent.trim()), t.preventDefault(), t.stopPropagation(), e.goTo(-1);
                    if (!i.parentNode.classList.contains("nav__menu-item--has-submenu") || !i.parentNode.classList.contains("nav__menu-item--depth0")) {
                        var n = null;
                        if (i.parentNode.classList.contains("nav__menu-item--live")) {
                            var s = i.querySelector(".nav__menu-item-label"),
                                a = i.querySelector(".nav__menu-item-list");
                            s && (n = "" + s.textContent.trim(), a && (n += " - " + a.textContent.trim()))
                        }
                        return null === n && (n = i.textContent.trim()), void o("hamburger", i.href, n)
                    }
                    window.matchMedia(_).matches && o("hamburger", "drilldown", i.textContent.trim()), t.preventDefault(), e.goTo(Math.max(parseInt(i.parentNode.getAttribute("data-index"), 10), -1))
                } else e.active > -1 && (window.matchMedia(_).matches && (C(e.active, e.items[e.active]), o("hamburger", "drillup", e.items[e.active].link.textContent.trim())), e.goTo(-1))
            }, this.node.addEventListener("click", this.handleClick), this.hamburgerOpener && this.hamburgerOpener.addEventListener("click", function(t) {
                t.preventDefault(), e.open("hamburger")
            }), this.searchOpener && !this.searchPage && this.searchOpener.addEventListener("click", function(t) {
                t.preventDefault(), e.open("search")
            }), this.hamburgerToggler && this.hamburgerToggler.addEventListener("click", function(t) {
                return t.preventDefault(), "hamburger" === e.opened ? e.close() : e.open("hamburger")
            }), this.searchToggler && this.searchToggler.addEventListener("click", function(t) {
                return t.preventDefault(), e.searchPage ? (e.close(), void e.searchOpener.click()) : "search" === e.opened ? e.close() : e.open("search")
            }), this.searchForm && this.searchForm.addEventListener("submit", function(e) {
                o("search", "submit", "overlay")
            }), this.keyup = function(t) {
                e.opened && 27 === t.which && e.close(e.initOpened)
            }) : C(".popover missing... skipping menu")
        };
    k.prototype.open = function(e) {
        switch (void 0 === e && (e = "hamburger"), this.freezePage(), this.disablePageTabbing(), e) {
            case "hamburger":
                this.node.classList.remove(this.classes.openSearch), this.node.classList.add(this.classes.openHamburger), this.hamburgerToggler && this.hamburgerToggler.focus(), this.getEvents(), "search" === this.opened ? o("search", "switch", "hamburger") : o("hamburger", "open", document.title);
                break;
            case "search":
                this.node.classList.remove(this.classes.openHamburger), this.node.classList.add(this.classes.openSearch), this.searchInput && this.searchInput.focus(), "hamburger" === this.opened ? o("hamburger", "switch", "search") : o("search", "open", document.title)
        }
        if (this.opened ? this.node.classList.add(this.classes.toggle) : this.node.classList.remove(this.classes.toggle), this.node.classList.add(this.classes.open), document.addEventListener("keyup", this.keyup), this.opened = e, null === this.initOpened && (this.initOpened = e), window.matchMedia(T).matches && -1 === this.active)
            for (var t = 0; t < this.items.length; t++)
                if (this.items[t].item && (this.items[t].item.classList.contains("nav__menu-item--active-ancestor") || this.items[t].item.classList.contains("nav__menu-item--active"))) {
                    this.goTo(t);
                    break
                } C("opened")
    }, k.prototype.close = function(e) {
        switch (void 0 === e && (e = null), document.removeEventListener("keyup", this.keyup), e = ["hamburger", "search"].indexOf(e) > -1 ? e : this.opened) {
            case "search":
                this.searchOpener.focus(), o("search", "close", document.title);
                break;
            case "hamburger":
                this.hamburgerOpener.focus(), o("hamburger", "close", document.title)
        }
        this.node.classList.remove(this.classes.toggle), this.node.classList.remove(this.classes.openHamburger), this.node.classList.remove(this.classes.openSearch), this.node.classList.remove(this.classes.open), this.enablePageTabbing(), this.unfreezePage(), this.goTo(-1), this.opened = !1, this.initOpened = null, C("closed", e)
    }, k.prototype.toggle = function() {
        return !1 === this.opened ? this.open() : this.close()
    }, k.prototype.goTo = function(e) {
        void 0 === e && (e = -1), C("goTo", this.active, e), e !== this.active && (this.active > -1 && (this.items[this.active].item.classList.remove(this.classes.openItem), this.items[this.active].children.forEach(function(e) {
            return e.setAttribute("tabIndex", "-1")
        }), this.nav.classList.remove(this.classes.openNav)), this.active = e, this.active > -1 && (this.items[this.active].item.classList.add(this.classes.openItem), this.items[this.active].children.forEach(function(e) {
            return e.removeAttribute("tabIndex")
        }), this.items[this.active].children.length > 0 && this.nav.classList.add(this.classes.openNav), window.matchMedia(_).matches && this.node.scrollTo(0, 0)), this.active > -1 && this.items[this.active].children.length > 0 ? this.seal.classList.add("popover__seal--faded") : this.seal.classList.remove("popover__seal--faded"))
    }, k.prototype.freezePage = function() {
        this.header.disableEvents(), this.opened || (this.pageYOffset = window.pageYOffset, this.overflow.style.top = -1 * this.pageYOffset + "px", document.body.classList.add(this.classes.openBody)), C("freeze")
    }, k.prototype.unfreezePage = function() {
        document.body.classList.remove(this.classes.openBody), this.overflow.style.top = "", window.scrollTo(0, this.pageYOffset), this.header.enableEvents(), C("unfreeze")
    }, k.prototype.getTabbables = function() {
        var e = Array.from(this.overflow.querySelectorAll("select, input, textarea, button, a, iframe, object, embed, *[contenteditable] *[tabindex]")),
            t = document.querySelector(".skip-link");
        return t && e.unshift(t), e
    }, k.prototype.disablePageTabbing = function() {
        if (!1 === this.pageTabbingDisabled) {
            var e = this.getTabbables();
            e.length && e.forEach(function(e) {
                var t = e.getAttribute("tabIndex");
                t && e.setAttribute("data-tab-index", t), e.setAttribute("tabIndex", "-1")
            }), this.pageTabbingDisabled = !0
        }
        C("disablePageTabbing")
    }, k.prototype.enablePageTabbing = function() {
        if (!0 === this.pageTabbingDisabled) {
            var e = this.getTabbables();
            e.length && e.forEach(function(e) {
                var t = e.getAttribute("data-tab-index");
                t ? (e.setAttribute("tabIndex", t), e.removeAttribute("data-tab-index")) : e.removeAttribute("tabIndex")
            }), this.pageTabbingDisabled = !1
        }
        C("enablePageTabbing")
    }, k.prototype.getEvents = function() {
        if (!0 !== this.hasEvents) {
            this.hasEvents = !0;
            var e = this.items.filter(function(e) {
                return e.item.classList.contains("nav__menu-item--live")
            }).shift();
            if (e) {
                var t = new XMLHttpRequest;
                t.open("GET", "/live.json"), t.addEventListener("load", function(i) {
                    if (200 === t.status && 0 !== t.responseText.length) {
                        var n = JSON.parse(t.response);
                        if (!0 === n.success && n.data) {
                            C("live.json data", n.data);
                            var s = [];
                            if (null !== n.data.streaming ? s.push("<strong>WATCH NOW</strong>: " + n.data.streaming.title) : n.data.upcoming.length && s.push("<strong>" + n.data.upcoming[0].start_time + "</strong>: " + n.data.upcoming[0].title), s.length) {
                                var o = '<span class="nav__menu-item-list">' + s.map(function(e) {
                                    return '<span class="nav__menu-item-list-item">' + e + "</span>"
                                }).join("") + "</span>";
                                e.link.insertAdjacentHTML("beforeend", o)
                            }
                        } else C("live.json parse error", t.response)
                    } else C("live.json status code: " + t.status, t)
                }), t.send()
            }
        }
    };
    var E = e("header-video"),
        S = function() {
            var e = this;
            this.$header = t(".page-header--video"), this.$header.length < 1 || (this.$embed = this.$header.find('iframe[src*="youtube.com/embed"]'), this.$embed.length < 1 || (this.autoplay = "1" === this.$header.attr("data-autoplay"), this.$embed.attr("id") || this.$embed.attr("id", "yt-header-player"), this.$header.find(".page-header__image").on("click", function(i) {
                var n = t(i.target);
                n.length > 0 && "A" === n.prop("tagName") && n.parent().hasClass("issue-flag") || (i.preventDefault(), e.play())
            }), this.autoplay && this.play(), window.onYouTubeIframeAPIReady = function() {
                e.player = new YT.Player(e.$embed.attr("id"), {
                    events: {
                        onStateChange: function(t) {
                            switch (t.data) {
                                case -1:
                                case 3:
                                case 5:
                                    break;
                                case 0:
                                    E("video end"), e.end();
                                    break;
                                case 1:
                                    E("video play"), e.play();
                                    break;
                                case 2:
                                    E("video pause"), e.pause()
                            }
                            E("onStateChange", t)
                        },
                        onReady: function(t) {
                            e.autoplay && t.target.mute()
                        }
                    },
                    playerVars: {
                        autoplay: e.autoplay ? 1 : 0,
                        showinfo: 0,
                        modestbranding: 1,
                        autohide: 1,
                        rel: 0
                    }
                }), E("youtube api ready", e.player)
            }))
        };
    S.prototype.play = function() {
        E("video play"), this.$header.addClass("page-header--video-playing"), this.$header.removeClass("page-header--video-paused"), this.player && this.player.playVideo()
    }, S.prototype.pause = function() {
        E("video pause"), this.$header.addClass("page-header--video-paused")
    }, S.prototype.end = function() {
        E("end"), this.player && this.player.stopVideo(), this.$header.removeClass(["page-header--video-paused", "page-header--video-playing"])
    };
    var $ = e("site"),
        x = function() {
            this.keyboardFocus(), this.moduleOrder(), this.tweetable(), this.inThisSection(), this.share(), this.header = new h, this.videos = new f, this.galleries = new v, this.live = new y, this.relatedContent(), window.addEventListener("DOMContentLoaded", this.ready.bind(this)), window.addEventListener("resize", n(this.resize.bind(this), 100)), document.addEventListener("DOMContentLoaded", this.resize), document.addEventListener("scroll", n(this.scroll.bind(this), 40)), window.addEventListener("load", this.scroll)
        };
    return x.prototype.ready = function() {
        this.search = new function() {
            document.body.classList.contains("search") && (l("search results"), this.filters = new d)
        }, this.news = new g, this.headerVideo = new S, this.popover = new k, this.ptaw = new b, this.analyticsEvents(), this.analyticsForms()
    }, x.prototype.keyboardFocus = function(e) {
        var t = !1;
        window.addEventListener("keydown", function(e) {
            e.defaultPrevented || t || ("Tab" === e.key || "Enter" === e.key || e.altKey) && (t = !0, document.documentElement.classList.add("keyboard--focus"), $("site.keyboardFocus", t))
        }), window.addEventListener("mousedown", function(e) {
            !e.defaultPrevented && t && (t = !1, document.documentElement.classList.remove("keyboard--focus"), $("site.keyboardFocus", t))
        })
    }, x.prototype.resize = function() {
        $("site.resize");
        var e = new CustomEvent("site.resize", {
            cancelable: !1,
            bubbles: !1
        });
        window.dispatchEvent(e)
    }, x.prototype.scroll = function() {
        $("site.scroll");
        var e = new CustomEvent("site.scroll", {
            cancelable: !1,
            bubbles: !1
        });
        window.dispatchEvent(e)
    }, x.prototype.buttonGroup = function() {
        var e = t(".button-group .button--active");
        t(".button-group").on("click", ".button", function(i) {
            i.preventDefault(), e && e[0] === i.currentTarget || (e && e.removeClass("button--active"), e = t(i.currentTarget).addClass("button--active"))
        })
    }, x.prototype.moduleOrder = function() {
        var t = e("moduleOrder"),
            i = null,
            n = Array.from(document.querySelectorAll(".editor__module--left"));
        n = n.map(function(e) {
            for (e.nextNonLeftModule = e.nextElementSibling; e.nextNonLeftModule && e.nextNonLeftModule.matches(".editor__module--left");) e.nextNonLeftModule = e.nextNonLeftModule.nextElementSibling;
            return e
        }).filter(function(e) {
            return !e.matches(".editor__module--named") && e.nextNonLeftModule
        }), t("Found " + n.length + " left modules"), window.addEventListener("site.resize", function() {
            window.matchMedia(w).matches !== i && (t("breakpoint change"), (i = window.matchMedia(w).matches) ? (t("small-down"), n.forEach(function(e) {
                var t = e.parentNode,
                    i = e.nextNonLeftModule.nextElementSibling;
                e = t.removeChild(e), t.insertBefore(e, i)
            })) : (t("medium-up"), n.forEach(function(e) {
                (e = e.parentNode.removeChild(e)).nextNonLeftModule.parentNode.insertBefore(e, e.nextNonLeftModule)
            })))
        })
    }, x.prototype.tweetable = function() {
        var t = e("tweetables"),
            i = Array.from(document.querySelectorAll(".tweetable")),
            n = 280 - window.location.href.length - 5 - 2;
        t(i), i && i.forEach(function(e) {
            var t = e.textContent,
                i = '"' + (t.length > n ? t.substr(0, n) : t) + '" via ' + window.location.href,
                s = document.createElement("a");
            s.className = e.className, s.href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(i), s.addEventListener("click", function(e) {
                e.preventDefault();
                var t = ["scrollbars=yes", "resizable=yes", "toolbar=no", "location=yes", "width=550", "height=350", "top=" + (window.screen.height - 350) / 2, "left=" + (window.screen.width - 550) / 2];
                window.open(s.href, "tweetable", t.join(","))
            });
            var o = document.createElement("span");
            o.appendChild(document.createTextNode(t)), o.classList.add("tweetable__text");
            var a = document.createElement("i");
            a.className = "tweetable__icon", s.appendChild(o), s.appendChild(a), e.parentNode.replaceChild(s, e)
        })
    }, x.prototype.inThisSection = function() {
        var e = this,
            i = this,
            n = t(".its");
        0 !== n.length && (this.its = {
            $: n,
            $container: n.find(".its__container"),
            $wrap: n.find(".its__wrap"),
            $header: n.find(".its__header"),
            $menus: n.find(".nav__menu"),
            $menu_items: n.find(".nav__menu a"),
            $open_button: n.find(".its__button a"),
            $close_button: n.find(".its__header .close button")
        }, i.inThisSectionCurrentItem(), this.its.$menu_items.on("click mousedown", {
            category: "its"
        }, function(e) {
            if ("mousedown" !== e.type || 1 === e.button) {
                var n = t(this);
                if (t("ul.nav__menu", n.parent()).length > 0) {
                    e.preventDefault();
                    var s = n.hasClass("active-item");
                    return i.inThisSectionDeactivate(), s ? o("its", "collapse", this.textContent.trim()) : (i.inThisSectionActivate(n), o("its", "expand", this.textContent.trim())), !1
                }
                return "#" !== n.attr("href") && a(e)
            }
        }), t(".its__header .breadcrumb a", n).on("click mousedown", {
            category: "its"
        }, function(e) {
            return "#" !== t(this).attr("href") && a(e)
        }), this.its.$.on("click", function(e) {
            e.stopPropagation()
        }), this.its.$open_button.on("click", function(e) {
            return i.inThisSectionOpen(e)
        }), this.its.$close_button.on("click", function(t) {
            return e.inThisSectionClose(t)
        }), t(window).on("click", function(i) {
            if (t("html").hasClass("its-active") && !(i.originalEvent.which > 1)) return e.inThisSectionClose(i)
        }), t(window).on("keyup", function(t) {
            if (27 === t.keyCode) return e.inThisSectionClose(t)
        }), t(document).on("transitionend", ".its__container", function(t) {
            e.its.$container.hasClass("its__container--open") || (e.its.$.removeClass("its--active"), e.its.$container.hide())
        }), window.addEventListener("site.resize", this.inThisSectionResize.bind(this)))
    }, x.prototype.inThisSectionCurrentItem = function() {
        var e = this.its.$.find(".current-menu-item a");
        this.inThisSectionDeactivate(), this.inThisSectionActivate(e)
    }, x.prototype.inThisSectionActivate = function(e) {
        e.addClass("active-item"), e.parents(".nav__menu").parent().children("a").addClass("active-item"), e.siblings("ul.nav__menu").addClass("active"), e.parents("ul.nav__menu").addClass("active-parent"), e.parents("ul.nav__menu").addClass("active")
    }, x.prototype.inThisSectionDeactivate = function() {
        this.its.$menus.not(".nav__menu--depth0").removeClass("active").removeClass("active-parent"), this.its.$menu_items.removeClass("active-item")
    }, x.prototype.inThisSectionResize = function() {
        var e = 0,
            i = this.its.$container.hasClass("its__container--open");
        if (this.its.$wrap.height(""), window.matchMedia(w).matches) return this.its.height = "", void this.its.$container.height("");
        i || this.its.$container.show(), this.its.$header.length && (e += this.its.$header.outerHeight(!0)), this.its.$menus.length && (e += Math.max.apply(null, t.map(this.its.$menus, function(e) {
            return t(e).outerHeight(!0)
        }))), this.its.$wrap.height(e), this.its.height = this.its.$wrap.outerHeight(!0), i ? this.its.$container.height(this.its.height) : this.its.$container.hide()
    }, x.prototype.inThisSectionClose = function(e) {
        return e.preventDefault(), t("html").removeClass("its-active"), !this.its.$.hasClass("its--active") || (this.its.$container.removeClass("its__container--open").height(""), this.its.$open_button.focus(), o("its", "close", document.title), !1)
    }, x.prototype.inThisSectionOpen = function(e) {
        var i = this;
        return e.preventDefault(), t("html").addClass("its-active"), this.inThisSectionResize(), this.its.$.addClass("its--active"), this.its.$container.show(), setTimeout(function() {
            return i.its.$container.addClass("its__container--open").height(i.its.height)
        }, 1), this.its.$close_button.focus(), o("its", "open", document.title), !1
    }, x.prototype.share = function() {
        var e = Array.from(document.querySelectorAll(".share--module, .share--live"));
        e.length > 0 && e.forEach(function(e) {
            var t = e.querySelector(".share__label button");
            t && (e.classList.add("share--collapsed"), t.addEventListener("click", function() {
                e.classList.toggle("share--collapsed")
            }))
        }), document.addEventListener("click", function(e) {
            for (var t = e.target; t.parentNode && !t.matches(".share a.share__link, .header__share--copy");) t = t.parentNode;
            if (!t || !t.parentNode) return !1;
            if (e && e.preventDefault && e.preventDefault(), !t.matches("[data-clipboard-text]")) {
                var i = ["scrollbars=yes", "resizable=yes", "toolbar=no", "location=yes", "width=550", "height=350", "top=" + (window.screen.height - 350) / 2, "left=" + (window.screen.width - 550) / 2];
                return window.open(t.href, "sharer", i.join(","))
            }
        }), i.isSupported() ? (this.clipboard = new i("[data-clipboard-text]"), this.clipboard.on("success", function(e) {
            if ($("clipboard copied", e), e.trigger.matches("[data-clipboard-text]")) {
                var t = document.createElement("span");
                t.className = "share__link-success", t.appendChild(document.createTextNode("Copied!")), t.addEventListener("transitionend", function() {
                    t.parentNode.removeChild(t)
                }), e.trigger.appendChild(t), t.getBoundingClientRect().top < 1 && t.classList.add("share__link-success--below"), setTimeout(function() {
                    t.style.opacity = "0"
                }, 1e3)
            }
        }), this.clipboard.on("error", function(e) {
            $("clipboard error", e)
        })) : Array.from(document.querySelectorAll(".share__link--copy")).forEach(function(e) {
            e.parentNode.parentNode.removeChild(e.parentNode)
        })
    }, x.prototype.relatedContent = function() {
        t(document).on("click", ".page-results--related-content .pagination--ajax a", function(e) {
            if (e.currentTarget.href && !(e.currentTarget.protocol && "http" !== e.currentTarget.protocol.substr(0, 4) || e.currentTarget.hostname && e.currentTarget.hostname !== document.domain)) {
                e.preventDefault();
                var i = t(e.currentTarget).parents(".page-results"),
                    n = e.currentTarget.href;
                $("Triggered AJAX Pagination"), i.addClass("page-results--fade-out");
                var s = function() {
                    window.location.href = n
                };
                ! function(e, i) {
                    if (e && "object" == typeof e || (e = {}), i && "function" == typeof i || (i = function() {}), !e.url) return r("Invalid request, missing URL"), void i();
                    e.type || (e.type = "GET"), e.beforeSend || (e.beforeSend = function(e) {
                        if ("function" != typeof e.setRequestHeader) return i(), !1;
                        e.setRequestHeader("X-AJAX", "1")
                    }), e.data = t.extend(e.data, {
                        AJAX: 1
                    }), r("Sending AJAX Request: " + e.type + " " + e.url);
                    var n = t.ajax(e);
                    n.fail(i)
                }({
                    url: n,
                    type: "GET",
                    dataType: "html",
                    success: function(e) {
                        var a = t(e);
                        a.is(".page-results") ? (a.hide().addClass("page-results--loaded"), i.after(a), i.find(".page-results__content").animate({
                            opacity: "0"
                        }, 100, function() {
                            i.remove(), a.show().addClass("page-results--fade-in");
                            var e = a.offset().top - 100;
                            e > 0 && t("html, body").animate({
                                scrollTop: e
                            }, 250, "swing")
                        }), o("pagination", n, document.title)) : s()
                    }
                }, s)
            }
        })
    }, x.prototype.analyticsEvents = function() {
        var e = t(document),
            i = /\.(docx?|pptx?|xlsx?|pdf|zip|jpe?g|png|gif)(\?.*|#.*)?$/;
        e.on("click mousedown", "a", function(e) {
            if (e.data = {
                    action: e.currentTarget.href,
                    label: e.currentTarget.textContent.trim()
                }, e.currentTarget.protocol && "tel:" === e.currentTarget.protocol) e.data.category = "tel", e.data.action = e.data.action.replace("tel:", "");
            else if (e.currentTarget.protocol && "mailto:" === e.currentTarget.protocol) e.data.category = "mailto", e.data.action = e.data.action.replace("mailto:", "");
            else if (e.currentTarget.hostname && e.currentTarget.hostname !== document.domain) e.data.category = "outbound-link";
            else {
                if (!e.currentTarget.href.match(i)) return;
                e.data.category = "download"
            }
            return a(e)
        }), e.on("click mousedown", ".header__logo a", {
            category: "logo",
            action: "click",
            label: "header"
        }, a), e.on("click mousedown", ".footer__logo a", {
            category: "logo",
            action: "click",
            label: "footer"
        }, a), e.on("submit", ".search-form__form", function(e) {
            o("search", "submit", "home")
        }), e.on("input", ":input", function(e) {
            var i = t(e.currentTarget).parents("form");
            i.length && !i.data("input") && (o("form", "input", i[0].action), i.data("input", !0))
        }), e.on("submit", "form", function(e) {
            o("form", "submit", e.currentTarget.action)
        }), e.on("click", ".fcc .flickity-prev-next-button", function(e) {
            o("fcc", "arrow", t(e.currentTarget).attr("aria-label"))
        }), e.on("dragEnd.flickity", ".fcc .fcc__flickity", function(e) {
            o("fcc", "drag", "flickity")
        }), e.on("staticClick.flickity", ".fcc .fcc__item a", {
            category: "fcc"
        }, a)
    }, x.prototype.analyticsForms = function() {
        var e = t('input[name="SIGNUP"][value=""]');
        e.length && e.val(window.location.href);
        var i = t('input[name="SIGNUP_SRC"][value=""]');
        if (i.length) {
            var n = new RegExp(/[?&]utm_source=([^&]*)/).exec(window.location.search);
            n && i.val(n[1])
        }
    }, x
});
//# sourceMappingURL=site.min.js.map