if (function() {
        "use strict";

        function e(t) {
            if (!t) throw new Error("No options passed to Waypoint constructor");
            if (!t.element) throw new Error("No element option passed to Waypoint constructor");
            if (!t.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + i, this.options = e.Adapter.extend({}, e.defaults, t), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = t.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), r[this.key] = this, i += 1
        }
        var i = 0,
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
            for (var i in r) e.push(r[i]);
            for (var n = 0, o = e.length; n < o; n++) e[n][t]()
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
    }(), function() {
        "use strict";

        function e(t) {
            window.setTimeout(t, 1e3 / 60)
        }

        function i(t) {
            this.element = t, this.Adapter = y.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, n += 1, y.windowContext || (y.windowContext = !0, y.windowContext = new i(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var n = 0,
            o = {},
            y = window.Waypoint,
            t = window.onload;
        i.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh()
        }, i.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                i = this.element == this.element.window;
            t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
        }, i.prototype.createThrottledResizeHandler = function() {
            function t() {
                e.handleResize(), e.didResize = !1
            }
            var e = this;
            this.adapter.on("resize.waypoints", function() {
                e.didResize || (e.didResize = !0, y.requestAnimationFrame(t))
            })
        }, i.prototype.createThrottledScrollHandler = function() {
            function t() {
                e.handleScroll(), e.didScroll = !1
            }
            var e = this;
            this.adapter.on("scroll.waypoints", function() {
                (!e.didScroll || y.isTouch) && (e.didScroll = !0, y.requestAnimationFrame(t))
            })
        }, i.prototype.handleResize = function() {
            y.Context.refreshAll()
        }, i.prototype.handleScroll = function() {
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
            for (var i in e) {
                var n = e[i],
                    o = n.newScroll > n.oldScroll ? n.forward : n.backward;
                for (var r in this.waypoints[i]) {
                    var s = this.waypoints[i][r];
                    if (null !== s.triggerPoint) {
                        var a = n.oldScroll < s.triggerPoint,
                            l = n.newScroll >= s.triggerPoint;
                        (a && l || !a && !l) && (s.queueTrigger(o), t[s.group.id] = s.group)
                    }
                }
            }
            for (var c in t) t[c].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            }
        }, i.prototype.innerHeight = function() {
            return this.element == this.element.window ? y.viewportHeight() : this.adapter.innerHeight()
        }, i.prototype.remove = function(t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty()
        }, i.prototype.innerWidth = function() {
            return this.element == this.element.window ? y.viewportWidth() : this.adapter.innerWidth()
        }, i.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
            for (var n = 0, o = t.length; n < o; n++) t[n].destroy()
        }, i.prototype.refresh = function() {
            var t, e = this.element == this.element.window,
                i = e ? void 0 : this.adapter.offset(),
                n = {};
            for (var o in this.handleScroll(), t = {
                    horizontal: {
                        contextOffset: e ? 0 : i.left,
                        contextScroll: e ? 0 : this.oldScroll.x,
                        contextDimension: this.innerWidth(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: e ? 0 : i.top,
                        contextScroll: e ? 0 : this.oldScroll.y,
                        contextDimension: this.innerHeight(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }) {
                var r = t[o];
                for (var s in this.waypoints[o]) {
                    var a, l, c, h, p = this.waypoints[o][s],
                        u = p.options.offset,
                        d = p.triggerPoint,
                        f = 0,
                        w = null == d;
                    p.element !== p.element.window && (f = p.adapter.offset()[r.offsetProp]), "function" == typeof u ? u = u.apply(p) : "string" == typeof u && (u = parseFloat(u), -1 < p.options.offset.indexOf("%") && (u = Math.ceil(r.contextDimension * u / 100))), a = r.contextScroll - r.contextOffset, p.triggerPoint = Math.floor(f + a - u), l = d < r.oldScroll, c = p.triggerPoint >= r.oldScroll, h = !l && !c, !w && (l && c) ? (p.queueTrigger(r.backward), n[p.group.id] = p.group) : !w && h ? (p.queueTrigger(r.forward), n[p.group.id] = p.group) : w && r.oldScroll >= p.triggerPoint && (p.queueTrigger(r.forward), n[p.group.id] = p.group)
                }
            }
            return y.requestAnimationFrame(function() {
                for (var t in n) n[t].flushTriggers()
            }), this
        }, i.findOrCreateByElement = function(t) {
            return i.findByElement(t) || new i(t)
        }, i.refreshAll = function() {
            for (var t in o) o[t].refresh()
        }, i.findByElement = function(t) {
            return o[t.waypointContextKey]
        }, window.onload = function() {
            t && t(), i.refreshAll()
        }, y.requestAnimationFrame = function(t) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
        }, y.Context = i
    }(), function() {
        "use strict";

        function s(t, e) {
            return t.triggerPoint - e.triggerPoint
        }

        function a(t, e) {
            return e.triggerPoint - t.triggerPoint
        }

        function e(t) {
            this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
        }
        var i = {
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
                    i = "up" === t || "left" === t;
                e.sort(i ? a : s);
                for (var n = 0, o = e.length; n < o; n += 1) {
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
            return i[t.axis][t.name] || new e(t)
        }, n.Group = e
    }(), function() {
        "use strict";

        function i(t) {
            this.$element = n(t)
        }
        var n = window.jQuery,
            t = window.Waypoint;
        n.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, e) {
            i.prototype[e] = function() {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[e].apply(this.$element, t)
            }
        }), n.each(["extend", "inArray", "isEmptyObject"], function(t, e) {
            i[e] = n[e]
        }), t.adapters.push({
            name: "jquery",
            Adapter: i
        }), t.Adapter = i
    }(), function() {
        "use strict";

        function t(n) {
            return function() {
                var e = [],
                    i = arguments[0];
                return n.isFunction(arguments[0]) && ((i = n.extend({}, arguments[1])).handler = arguments[0]), this.each(function() {
                    var t = n.extend({}, i, {
                        element: this
                    });
                    "string" == typeof t.context && (t.context = n(this).closest(t.context)[0]), e.push(new o(t))
                }), e
            }
        }
        var o = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
    }(), function() {
        "use strict";

        function e(t) {
            this.options = i.extend({}, o.defaults, e.defaults, t), this.element = this.options.element, this.$element = i(this.element), this.createWrapper(), this.createWaypoint()
        }
        var i = window.jQuery,
            o = window.Waypoint;
        e.prototype.createWaypoint = function() {
            var n = this.options.handler;
            this.waypoint = new o(i.extend({}, this.options, {
                element: this.wrapper,
                handler: i.proxy(function(t) {
                    var e = -1 < this.options.direction.indexOf(t),
                        i = e ? this.$element.outerHeight(!0) : "";
                    this.$wrapper.height(i), this.$element.toggleClass(this.options.stuckClass, e), n && n.call(this, t)
                }, this)
            }))
        }, e.prototype.createWrapper = function() {
            this.options.wrapper && this.$element.wrap(this.options.wrapper), this.$wrapper = this.$element.parent(), this.wrapper = this.$wrapper[0]
        }, e.prototype.destroy = function() {
            this.$element.parent()[0] === this.wrapper && (this.waypoint.destroy(), this.$element.removeClass(this.options.stuckClass), this.options.wrapper && this.$element.unwrap())
        }, e.defaults = {
            wrapper: '<div class="sticky-wrapper" />',
            stuckClass: "stuck",
            direction: "down right"
        }, o.Sticky = e
    }(), function(t, e) {
        "use strict";
        var i, n, o = t(".moz-sub-nav");

        function r() {
            i && (n = new e.Sticky({
                element: o,
                offset: 0
            }))
        }
        o.length && "undefined" != typeof matchMedia && ((i = matchMedia("(min-width: 760px)")).addListener(function(t) {
            t.matches ? r() : n.destroy()
        }), i.matches && r())
    }(window.jQuery, window.Waypoint), void 0 === Mozilla) var Mozilla = {};
! function() {
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
            i = Array.prototype.slice.call(document.querySelectorAll(t));
        return i.length && i.forEach(function(t) {
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
function(t, i) {
    "use strict";

    function n(t, e) {
        window.dataLayer.push({
            event: "video-interaction",
            videoTitle: t,
            interaction: e
        })
    }(function e() {
        return "querySelector" in document && "querySelectorAll" in document && "addEventListener" in window && "undefined" != typeof HTMLMediaElement
    })() && (! function o() {
        for (var t = document.querySelectorAll("[data-scroll-tracking]"), e = 0; e < t.length; e++) new i({
            element: t[e],
            handler: function(t) {
                "down" === t && (window.dataLayer.push({
                    eAction: "scroll",
                    eLabel: this.element.getAttribute("data-scroll-tracking"),
                    event: "non-interaction"
                }), this.destroy())
            },
            offset: "100%"
        })
    }(), function r() {
        for (var t = document.querySelectorAll("video"), e = 0; e < t.length; e++) t[e].addEventListener("play", function() {
            n(this.getAttribute("data-ga-label"), "play")
        }, !1), t[e].addEventListener("pause", function() {
            var t = this.currentTime === this.duration ? "complete" : "pause";
            n(this.getAttribute("data-ga-label"), t)
        }, !1)
    }()), t.LazyLoad.init()
}(window.Mozilla, window.Waypoint);