"use strict";

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function credSparkFix() {
    window.addEventListener("message", function(t) {
        if (t.data && t.data.assessmentPageView) {
            var e = t.data.assessmentPageView.page,
                i = $(".hero-media > img").outerHeight() ? $(".hero-media > img").outerHeight() : $(".hero-media iframe").outerHeight();
            1 !== e && $(document).scrollTop($(document).scrollTop() + i)
        }
    })
}

function debounce(t, e, i) {
    var n;
    return function() {
        var a = this,
            o = arguments,
            s = function() {
                n = null, i || t.apply(a, o)
            },
            r = i && !n;
        clearTimeout(n), n = setTimeout(s, e), r && t.apply(a, o)
    }
}

function isEmail(t) {
    var e = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return e.test(t)
}

function getParameterByName(t, e) {
    e || (e = window.location.href), t = t.replace(/[\[\]]/g, "\\$&");
    var i = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)"),
        n = i.exec(e);
    return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
}

function removeParam(t, e) {
    if (t && e && t.indexOf("?") !== -1) {
        var i = t.substring(0, t.indexOf("?")),
            n = t.split(/&|\?/),
            a = [];
        n.shift();
        for (var o = 0; o < n.length; o++) {
            var s = n[o].split("=");
            if (s.length) {
                var r = s[0];
                0 === n[o].indexOf(e) && e.length === r.length || a.push(n[o])
            }
        }
        t = i + "?" + a.join("&")
    }
    return t
}

function whenDefined(t, e, i) {
    t[e] ? i() : Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !0,
        writeable: !0,
        get: function() {
            return this["_" + e]
        },
        set: function(t) {
            this["_" + e] = t, i()
        }
    })
}! function(t, e) {
    "function" == typeof define && define.amd ? define([], function() {
        return e()
    }) : "object" == typeof exports ? module.exports = e() : t.whatInput = e()
}(this, function() {
    function t(t) {
        clearTimeout(l), i(t), f = !0, l = setTimeout(function() {
            f = !1
        }, 1e3)
    }

    function e(t) {
        f || i(t)
    }

    function i(t) {
        var e = n(t),
            i = a(t),
            r = v[t.type];
        "pointer" === r && (r = o(t)), h !== r && (!m && h && "keyboard" === r && "tab" !== w[e] && p.indexOf(i.nodeName.toLowerCase()) >= 0 || (h = r, u.setAttribute("data-whatinput", h), g.indexOf(h) === -1 && g.push(h))), "keyboard" === r && s(e)
    }

    function n(t) {
        return t.keyCode ? t.keyCode : t.which
    }

    function a(t) {
        return t.target || t.srcElement
    }

    function o(t) {
        return "number" == typeof t.pointerType ? y[t.pointerType] : t.pointerType
    }

    function s(t) {
        c.indexOf(w[t]) === -1 && w[t] && c.push(w[t])
    }

    function r(t) {
        var e = n(t),
            i = c.indexOf(w[e]);
        i !== -1 && c.splice(i, 1)
    }

    function d() {
        var i = "mousedown";
        window.PointerEvent ? i = "pointerdown" : window.MSPointerEvent && (i = "MSPointerDown"), u.addEventListener(i, e), u.addEventListener("mouseenter", e), "ontouchstart" in window && u.addEventListener("touchstart", t), u.addEventListener("keydown", e), document.addEventListener("keyup", r)
    }
    var l, c = [],
        u = document.body,
        f = !1,
        h = null,
        p = ["input", "select", "textarea"],
        m = u.hasAttribute("data-whatinput-formtyping"),
        v = {
            keydown: "keyboard",
            mousedown: "mouse",
            mouseenter: "mouse",
            touchstart: "touch",
            pointerdown: "pointer",
            MSPointerDown: "pointer"
        },
        g = [],
        w = {
            9: "tab",
            13: "enter",
            16: "shift",
            27: "esc",
            32: "space",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        },
        y = {
            2: "touch",
            3: "touch",
            4: "mouse"
        };
    return "addEventListener" in window && Array.prototype.indexOf && d(), {
        ask: function() {
            return h
        },
        keys: function() {
            return c
        },
        types: function() {
            return g
        },
        set: i
    }
}), ! function(t) {
    function e(t) {
        if (void 0 === Function.prototype.name) {
            var e = /function\s([^(]{1,})\(/,
                i = e.exec(t.toString());
            return i && i.length > 1 ? i[1].trim() : ""
        }
        return void 0 === t.prototype ? t.constructor.name : t.prototype.constructor.name
    }

    function i(t) {
        return !!/true/.test(t) || !/false/.test(t) && (isNaN(1 * t) ? t : parseFloat(t))
    }

    function n(t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    var a = "6.2.0",
        o = {
            version: a,
            _plugins: {},
            _uuids: [],
            rtl: function() {
                return "rtl" === t("html").attr("dir")
            },
            plugin: function(t, i) {
                var a = i || e(t),
                    o = n(a);
                this._plugins[o] = this[a] = t
            },
            registerPlugin: function(t, i) {
                var a = i ? n(i) : e(t.constructor).toLowerCase();
                t.uuid = this.GetYoDigits(6, a), t.$element.attr("data-" + a) || t.$element.attr("data-" + a, t.uuid), t.$element.data("zfPlugin") || t.$element.data("zfPlugin", t), t.$element.trigger("init.zf." + a), this._uuids.push(t.uuid)
            },
            unregisterPlugin: function(t) {
                var i = n(e(t.$element.data("zfPlugin").constructor));
                this._uuids.splice(this._uuids.indexOf(t.uuid), 1), t.$element.removeAttr("data-" + i).removeData("zfPlugin").trigger("destroyed.zf." + i);
                for (var a in t) t[a] = null
            },
            reInit: function(e) {
                var i = e instanceof t;
                try {
                    if (i) e.each(function() {
                        t(this).data("zfPlugin")._init()
                    });
                    else {
                        var a = typeof e,
                            o = this,
                            s = {
                                object: function(e) {
                                    e.forEach(function(e) {
                                        e = n(e), t("[data-" + e + "]").foundation("_init")
                                    })
                                },
                                string: function() {
                                    e = n(e), t("[data-" + e + "]").foundation("_init")
                                },
                                undefined: function() {
                                    this.object(Object.keys(o._plugins))
                                }
                            };
                        s[a](e)
                    }
                } catch (r) {
                    console.error(r)
                } finally {
                    return e
                }
            },
            GetYoDigits: function(t, e) {
                return t = t || 6, Math.round(Math.pow(36, t + 1) - Math.random() * Math.pow(36, t)).toString(36).slice(1) + (e ? "-" + e : "")
            },
            reflow: function(e, n) {
                "undefined" == typeof n ? n = Object.keys(this._plugins) : "string" == typeof n && (n = [n]);
                var a = this;
                t.each(n, function(n, o) {
                    var s = a._plugins[o],
                        r = t(e).find("[data-" + o + "]").addBack("[data-" + o + "]");
                    r.each(function() {
                        var e = t(this),
                            n = {};
                        if (e.data("zfPlugin")) return void console.warn("Tried to initialize " + o + " on an element that already has a Foundation plugin.");
                        if (e.attr("data-options")) {
                            e.attr("data-options").split(";").forEach(function(t, e) {
                                var a = t.split(":").map(function(t) {
                                    return t.trim()
                                });
                                a[0] && (n[a[0]] = i(a[1]))
                            })
                        }
                        try {
                            e.data("zfPlugin", new s(t(this), n))
                        } catch (a) {
                            console.error(a)
                        } finally {
                            return
                        }
                    })
                })
            },
            getFnName: e,
            transitionend: function(t) {
                var e, i = {
                        transition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "otransitionend"
                    },
                    n = document.createElement("div");
                for (var a in i) "undefined" != typeof n.style[a] && (e = i[a]);
                return e ? e : (e = setTimeout(function() {
                    t.triggerHandler("transitionend", [t])
                }, 1), "transitionend")
            }
        };
    o.util = {
        throttle: function(t, e) {
            var i = null;
            return function() {
                var n = this,
                    a = arguments;
                null === i && (i = setTimeout(function() {
                    t.apply(n, a), i = null
                }, e))
            }
        }
    };
    var s = function(i) {
        var n = typeof i,
            a = t("meta.foundation-mq"),
            s = t(".no-js");
        if (a.length || t('<meta class="foundation-mq">').appendTo(document.head), s.length && s.removeClass("no-js"), "undefined" === n) o.MediaQuery._init(), o.reflow(this);
        else {
            if ("string" !== n) throw new TypeError("We're sorry, " + n + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
            var r = Array.prototype.slice.call(arguments, 1),
                d = this.data("zfPlugin");
            if (void 0 === d || void 0 === d[i]) throw new ReferenceError("We're sorry, '" + i + "' is not an available method for " + (d ? e(d) : "this element") + ".");
            1 === this.length ? d[i].apply(d, r) : this.each(function(e, n) {
                d[i].apply(t(n).data("zfPlugin"), r)
            })
        }
        return this
    };
    window.Foundation = o, t.fn.foundation = s,
        function() {
            Date.now && window.Date.now || (window.Date.now = Date.now = function() {
                return (new Date).getTime()
            });
            for (var t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
                var i = t[e];
                window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                var n = 0;
                window.requestAnimationFrame = function(t) {
                    var e = Date.now(),
                        i = Math.max(n + 16, e);
                    return setTimeout(function() {
                        t(n = i)
                    }, i - e)
                }, window.cancelAnimationFrame = clearTimeout
            }
            window.performance && window.performance.now || (window.performance = {
                start: Date.now(),
                now: function() {
                    return Date.now() - this.start
                }
            })
        }(), Function.prototype.bind || (Function.prototype.bind = function(t) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var e = Array.prototype.slice.call(arguments, 1),
                i = this,
                n = function() {},
                a = function() {
                    return i.apply(this instanceof n ? this : t, e.concat(Array.prototype.slice.call(arguments)))
                };
            return this.prototype && (n.prototype = this.prototype), a.prototype = new n, a
        })
}(jQuery), ! function(t) {
    function e(t, e, n, a) {
        var o, s, r, d, l = i(t);
        if (e) {
            var c = i(e);
            s = l.offset.top + l.height <= c.height + c.offset.top, o = l.offset.top >= c.offset.top, r = l.offset.left >= c.offset.left, d = l.offset.left + l.width <= c.width
        } else s = l.offset.top + l.height <= l.windowDims.height + l.windowDims.offset.top, o = l.offset.top >= l.windowDims.offset.top, r = l.offset.left >= l.windowDims.offset.left, d = l.offset.left + l.width <= l.windowDims.width;
        var u = [s, o, r, d];
        return n ? r === d == !0 : a ? o === s == !0 : u.indexOf(!1) === -1
    }

    function i(t, e) {
        if (t = t.length ? t[0] : t, t === window || t === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var i = t.getBoundingClientRect(),
            n = t.parentNode.getBoundingClientRect(),
            a = document.body.getBoundingClientRect(),
            o = window.pageYOffset,
            s = window.pageXOffset;
        return {
            width: i.width,
            height: i.height,
            offset: {
                top: i.top + o,
                left: i.left + s
            },
            parentDims: {
                width: n.width,
                height: n.height,
                offset: {
                    top: n.top + o,
                    left: n.left + s
                }
            },
            windowDims: {
                width: a.width,
                height: a.height,
                offset: {
                    top: o,
                    left: s
                }
            }
        }
    }

    function n(t, e, n, a, o, s) {
        var r = i(t),
            d = e ? i(e) : null;
        switch (n) {
            case "top":
                return {
                    left: Foundation.rtl() ? d.offset.left - r.width + d.width : d.offset.left,
                    top: d.offset.top - (r.height + a)
                };
            case "left":
                return {
                    left: d.offset.left - (r.width + o),
                    top: d.offset.top
                };
            case "right":
                return {
                    left: d.offset.left + d.width + o,
                    top: d.offset.top
                };
            case "center top":
                return {
                    left: d.offset.left + d.width / 2 - r.width / 2,
                    top: d.offset.top - (r.height + a)
                };
            case "center bottom":
                return {
                    left: s ? o : d.offset.left + d.width / 2 - r.width / 2,
                    top: d.offset.top + d.height + a
                };
            case "center left":
                return {
                    left: d.offset.left - (r.width + o),
                    top: d.offset.top + d.height / 2 - r.height / 2
                };
            case "center right":
                return {
                    left: d.offset.left + d.width + o + 1,
                    top: d.offset.top + d.height / 2 - r.height / 2
                };
            case "center":
                return {
                    left: r.windowDims.offset.left + r.windowDims.width / 2 - r.width / 2,
                    top: r.windowDims.offset.top + r.windowDims.height / 2 - r.height / 2
                };
            case "reveal":
                return {
                    left: (r.windowDims.width - r.width) / 2,
                    top: r.windowDims.offset.top + a
                };
            case "reveal full":
                return {
                    left: r.windowDims.offset.left,
                    top: r.windowDims.offset.top
                };
            default:
                return {
                    left: Foundation.rtl() ? d.offset.left - r.width + d.width : d.offset.left,
                    top: d.offset.top + d.height + a
                }
        }
    }
    Foundation.Box = {
        ImNotTouchingYou: e,
        GetDimensions: i,
        GetOffsets: n
    }
}(jQuery), ! function(t) {
    function e(t) {
        var e = {};
        for (var i in t) e[t[i]] = t[i];
        return e
    }
    var i = {
            9: "TAB",
            13: "ENTER",
            27: "ESCAPE",
            32: "SPACE",
            37: "ARROW_LEFT",
            38: "ARROW_UP",
            39: "ARROW_RIGHT",
            40: "ARROW_DOWN"
        },
        n = {},
        a = {
            keys: e(i),
            parseKey: function(t) {
                var e = i[t.which || t.keyCode] || String.fromCharCode(t.which).toUpperCase();
                return t.shiftKey && (e = "SHIFT_" + e), t.ctrlKey && (e = "CTRL_" + e), t.altKey && (e = "ALT_" + e), e
            },
            handleKey: function(e, i, a) {
                var o, s, r, d = n[i],
                    l = this.parseKey(e);
                return d ? (o = "undefined" == typeof d.ltr ? d : Foundation.rtl() ? t.extend({}, d.ltr, d.rtl) : t.extend({}, d.rtl, d.ltr), s = o[l], r = a[s], void(r && "function" == typeof r ? (r.apply(), (a.handled || "function" == typeof a.handled) && a.handled.apply()) : (a.unhandled || "function" == typeof a.unhandled) && a.unhandled.apply())) : console.warn("Component not defined!")
            },
            findFocusable: function(e) {
                return e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
                    return !(!t(this).is(":visible") || t(this).attr("tabindex") < 0)
                })
            },
            register: function(t, e) {
                n[t] = e
            }
        };
    Foundation.Keyboard = a
}(jQuery), ! function(t) {
    function e(t) {
        var e = {};
        return "string" != typeof t ? e : (t = t.trim().slice(1, -1)) ? e = t.split("&").reduce(function(t, e) {
            var i = e.replace(/\+/g, " ").split("="),
                n = i[0],
                a = i[1];
            return n = decodeURIComponent(n), a = void 0 === a ? null : decodeURIComponent(a), t.hasOwnProperty(n) ? Array.isArray(t[n]) ? t[n].push(a) : t[n] = [t[n], a] : t[n] = a, t
        }, {}) : e
    }
    var i = {
        queries: [],
        current: "",
        _init: function() {
            var i, n = this,
                a = t(".foundation-mq").css("font-family");
            i = e(a);
            for (var o in i) n.queries.push({
                name: o,
                value: "only screen and (min-width: " + i[o] + ")"
            });
            this.current = this._getCurrentSize(), this._watcher()
        },
        atLeast: function(t) {
            var e = this.get(t);
            return !!e && window.matchMedia(e).matches
        },
        get: function(t) {
            for (var e in this.queries) {
                var i = this.queries[e];
                if (t === i.name) return i.value
            }
            return null
        },
        _getCurrentSize: function() {
            var t;
            for (var e in this.queries) {
                var i = this.queries[e];
                window.matchMedia(i.value).matches && (t = i)
            }
            return "object" == typeof t ? t.name : t
        },
        _watcher: function() {
            var e = this;
            t(window).on("resize.zf.mediaquery", function() {
                var i = e._getCurrentSize();
                i !== e.current && (t(window).trigger("changed.zf.mediaquery", [i, e.current]), e.current = i)
            })
        }
    };
    Foundation.MediaQuery = i, window.matchMedia || (window.matchMedia = function() {
        var t = window.styleMedia || window.media;
        if (!t) {
            var e = document.createElement("style"),
                i = document.getElementsByTagName("script")[0],
                n = null;
            e.type = "text/css", e.id = "matchmediajs-test", i.parentNode.insertBefore(e, i), n = "getComputedStyle" in window && window.getComputedStyle(e, null) || e.currentStyle, t = {
                matchMedium: function(t) {
                    var i = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                    return e.styleSheet ? e.styleSheet.cssText = i : e.textContent = i, "1px" === n.width
                }
            }
        }
        return function(e) {
            return {
                matches: t.matchMedium(e || "all"),
                media: e || "all"
            }
        }
    }()), Foundation.MediaQuery = i
}(jQuery), ! function(t) {
    function e(t, e, i) {
        function n(r) {
            s || (s = window.performance.now()), o = r - s, i.apply(e), o < t ? a = window.requestAnimationFrame(n, e) : (window.cancelAnimationFrame(a), e.trigger("finished.zf.animate", [e]).triggerHandler("finished.zf.animate", [e]))
        }
        var a, o, s = null;
        a = window.requestAnimationFrame(n)
    }

    function i(e, i, o, s) {
        function r() {
            e || i.hide(), d(), s && s.apply(i)
        }

        function d() {
            i[0].style.transitionDuration = 0, i.removeClass(l + " " + c + " " + o)
        }
        if (i = t(i).eq(0), i.length) {
            var l = e ? n[0] : n[1],
                c = e ? a[0] : a[1];
            d(), i.addClass(o).css("transition", "none"), requestAnimationFrame(function() {
                i.addClass(l), e && i.show()
            }), requestAnimationFrame(function() {
                i[0].offsetWidth, i.css("transition", "").addClass(c)
            }), i.one(Foundation.transitionend(i), r)
        }
    }
    var n = ["mui-enter", "mui-leave"],
        a = ["mui-enter-active", "mui-leave-active"],
        o = {
            animateIn: function(t, e, n) {
                i(!0, t, e, n)
            },
            animateOut: function(t, e, n) {
                i(!1, t, e, n)
            }
        };
    Foundation.Move = e, Foundation.Motion = o
}(jQuery), ! function(t) {
    var e = {
        Feather: function(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zf";
            e.attr("role", "menubar");
            var n = e.find("li").attr({
                    role: "menuitem"
                }),
                a = "is-" + i + "-submenu",
                o = a + "-item",
                s = "is-" + i + "-submenu-parent";
            e.find("a:first").attr("tabindex", 0), n.each(function() {
                var e = t(this),
                    i = e.children("ul");
                i.length && (e.addClass(s).attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1,
                    "aria-label": e.children("a:first").text()
                }), i.addClass("submenu " + a).attr({
                    "data-submenu": "",
                    "aria-hidden": !0,
                    role: "menu"
                })), e.parent("[data-submenu]").length && e.addClass("is-submenu-item " + o)
            })
        },
        Burn: function(t, e) {
            var i = (t.find("li").removeAttr("tabindex"), "is-" + e + "-submenu"),
                n = i + "-item",
                a = "is-" + e + "-submenu-parent";
            t.find("*").removeClass(i + " " + n + " " + a + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "")
        }
    };
    Foundation.Nest = e
}(jQuery), ! function(t) {
    function e(t, e, i) {
        var n, a, o = this,
            s = e.duration,
            r = Object.keys(t.data())[0] || "timer",
            d = -1;
        this.isPaused = !1, this.restart = function() {
            d = -1, clearTimeout(a), this.start()
        }, this.start = function() {
            this.isPaused = !1, clearTimeout(a), d = d <= 0 ? s : d, t.data("paused", !1), n = Date.now(), a = setTimeout(function() {
                e.infinite && o.restart(), i()
            }, d), t.trigger("timerstart.zf." + r)
        }, this.pause = function() {
            this.isPaused = !0, clearTimeout(a), t.data("paused", !0);
            var e = Date.now();
            d -= e - n, t.trigger("timerpaused.zf." + r)
        }
    }

    function i(e, i) {
        function n() {
            a--, 0 === a && i()
        }
        var a = e.length;
        0 === a && i(), e.each(function() {
            this.complete ? n() : "undefined" != typeof this.naturalWidth && this.naturalWidth > 0 ? n() : t(this).one("load", function() {
                n()
            })
        })
    }
    Foundation.Timer = e, Foundation.onImagesLoaded = i
}(jQuery),
function(t) {
    function e() {
        this.removeEventListener("touchmove", i), this.removeEventListener("touchend", e), l = !1
    }

    function i(i) {
        if (t.spotSwipe.preventDefault && i.preventDefault(), l) {
            var n, a = i.touches[0].pageX,
                s = (i.touches[0].pageY, o - a);
            d = (new Date).getTime() - r, Math.abs(s) >= t.spotSwipe.moveThreshold && d <= t.spotSwipe.timeThreshold && (n = s > 0 ? "left" : "right"), n && (i.preventDefault(), e.call(this), t(this).trigger("swipe", n).trigger("swipe" + n))
        }
    }

    function n(t) {
        1 == t.touches.length && (o = t.touches[0].pageX, s = t.touches[0].pageY, l = !0, r = (new Date).getTime(), this.addEventListener("touchmove", i, !1), this.addEventListener("touchend", e, !1))
    }

    function a() {
        this.addEventListener && this.addEventListener("touchstart", n, !1)
    }
    t.spotSwipe = {
        version: "1.0.0",
        enabled: "ontouchstart" in document.documentElement,
        preventDefault: !1,
        moveThreshold: 75,
        timeThreshold: 200
    };
    var o, s, r, d, l = !1;
    t.event.special.swipe = {
        setup: a
    }, t.each(["left", "up", "down", "right"], function() {
        t.event.special["swipe" + this] = {
            setup: function() {
                t(this).on("swipe", t.noop)
            }
        }
    })
}(jQuery), ! function(t) {
    t.fn.addTouch = function() {
        this.each(function(i, n) {
            t(n).bind("touchstart touchmove touchend touchcancel", function() {
                e(event)
            })
        });
        var e = function(t) {
            var e, i = t.changedTouches,
                n = i[0],
                a = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup"
                },
                o = a[t.type];
            "MouseEvent" in window && "function" == typeof window.MouseEvent ? e = window.MouseEvent(o, {
                bubbles: !0,
                cancelable: !0,
                screenX: n.screenX,
                screenY: n.screenY,
                clientX: n.clientX,
                clientY: n.clientY
            }) : (e = document.createEvent("MouseEvent"), e.initMouseEvent(o, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null)), n.target.dispatchEvent(e)
        }
    }
}(jQuery), ! function(t) {
    function e() {
        o(), n(), a(), i()
    }

    function i(e) {
        var i = t("[data-yeti-box]"),
            n = ["dropdown", "tooltip", "reveal"];
        if (e && ("string" == typeof e ? n.push(e) : "object" == typeof e && "string" == typeof e[0] ? n.concat(e) : console.error("Plugin names must be strings")), i.length) {
            var a = n.map(function(t) {
                return "closeme.zf." + t
            }).join(" ");
            t(window).off(a).on(a, function(e, i) {
                var n = e.namespace.split(".")[0],
                    a = t("[data-" + n + "]").not('[data-yeti-box="' + i + '"]');
                a.each(function() {
                    var e = t(this);
                    e.triggerHandler("close.zf.trigger", [e])
                })
            })
        }
    }

    function n(e) {
        var i = void 0,
            n = t("[data-resize]");
        n.length && t(window).off("resize.zf.trigger").on("resize.zf.trigger", function(a) {
            i && clearTimeout(i), i = setTimeout(function() {
                s || n.each(function() {
                    t(this).triggerHandler("resizeme.zf.trigger")
                }), n.attr("data-events", "resize")
            }, e || 10)
        })
    }

    function a(e) {
        var i = void 0,
            n = t("[data-scroll]");
        n.length && t(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function(a) {
            i && clearTimeout(i), i = setTimeout(function() {
                s || n.each(function() {
                    t(this).triggerHandler("scrollme.zf.trigger")
                }), n.attr("data-events", "scroll")
            }, e || 10)
        })
    }

    function o() {
        if (!s) return !1;
        var e = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),
            i = function(e) {
                var i = t(e[0].target);
                switch (i.attr("data-events")) {
                    case "resize":
                        i.triggerHandler("resizeme.zf.trigger", [i]);
                        break;
                    case "scroll":
                        i.triggerHandler("scrollme.zf.trigger", [i, window.pageYOffset]);
                        break;
                    default:
                        return !1
                }
            };
        if (e.length)
            for (var n = 0; n <= e.length - 1; n++) {
                var a = new s(i);
                a.observe(e[n], {
                    attributes: !0,
                    childList: !1,
                    characterData: !1,
                    subtree: !1,
                    attributeFilter: ["data-events"]
                })
            }
    }
    var s = function() {
            for (var t = ["WebKit", "Moz", "O", "Ms", ""], e = 0; e < t.length; e++)
                if (t[e] + "MutationObserver" in window) return window[t[e] + "MutationObserver"];
            return !1
        }(),
        r = function(e, i) {
            e.data(i).split(" ").forEach(function(n) {
                t("#" + n)["close" === i ? "trigger" : "triggerHandler"](i + ".zf.trigger", [e])
            })
        };
    t(document).on("click.zf.trigger", "[data-open]", function() {
        r(t(this), "open")
    }), t(document).on("click.zf.trigger", "[data-close]", function() {
        var e = t(this).data("close");
        e ? r(t(this), "close") : t(this).trigger("close.zf.trigger")
    }), t(document).on("click.zf.trigger", "[data-toggle]", function() {
        r(t(this), "toggle")
    }), t(document).on("close.zf.trigger", "[data-closable]", function(e) {
        e.stopPropagation();
        var i = t(this).data("closable");
        "" !== i ? Foundation.Motion.animateOut(t(this), i, function() {
            t(this).trigger("closed.zf")
        }) : t(this).fadeOut().trigger("closed.zf")
    }), t(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function() {
        var e = t(this).data("toggle-focus");
        t("#" + e).triggerHandler("toggle.zf.trigger", [t(this)])
    }), t(window).load(function() {
        e()
    }), Foundation.IHearYou = e
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
! function(t) {
    var e = function() {
        function e(i) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Abide")
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                this.$inputs = this.$element.find("input, textarea, select").not("[data-abide-ignore]"), this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                this.$element.off(".abide").on("reset.zf.abide", function() {
                    e.resetForm()
                }).on("submit.zf.abide", function() {
                    return e.validateForm()
                }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function(i) {
                    e.validateInput(t(i.target))
                }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function(i) {
                    e.validateInput(t(i.target))
                })
            }
        }, {
            key: "_reflow",
            value: function() {
                this._init()
            }
        }, {
            key: "requiredCheck",
            value: function(t) {
                if (!t.attr("required")) return !0;
                var e = !0;
                switch (t[0].type) {
                    case "checkbox":
                    case "radio":
                        e = t[0].checked;
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        var i = t.find("option:selected");
                        i.length && i.val() || (e = !1);
                        break;
                    default:
                        t.val() && t.val().length || (e = !1)
                }
                return e
            }
        }, {
            key: "findFormError",
            value: function(t) {
                var e = t.siblings(this.options.formErrorSelector);
                return e.length || (e = t.parent().find(this.options.formErrorSelector)), e
            }
        }, {
            key: "findLabel",
            value: function(t) {
                var e = t[0].id,
                    i = this.$element.find('label[for="' + e + '"]');
                return i.length ? i : t.closest("label")
            }
        }, {
            key: "addErrorClasses",
            value: function(t) {
                var e = this.findLabel(t),
                    i = this.findFormError(t);
                e.length && e.addClass(this.options.labelErrorClass), i.length && i.addClass(this.options.formErrorClass), t.addClass(this.options.inputErrorClass).attr("data-invalid", "")
            }
        }, {
            key: "removeErrorClasses",
            value: function(t) {
                var e = this.findLabel(t),
                    i = this.findFormError(t);
                e.length && e.removeClass(this.options.labelErrorClass), i.length && i.removeClass(this.options.formErrorClass), t.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "validateInput",
            value: function(t) {
                var e = this.requiredCheck(t),
                    i = !1,
                    n = !0,
                    a = t.attr("data-validator"),
                    o = !0;
                switch (t[0].type) {
                    case "radio":
                        i = this.validateRadio(t.attr("name"));
                        break;
                    case "checkbox":
                        i = e;
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        i = e;
                        break;
                    default:
                        i = this.validateText(t)
                }
                a && (n = this.matchValidation(t, a, t.attr("required"))), t.attr("data-equalto") && (o = this.options.validators.equalTo(t));
                var s = [e, i, n, o].indexOf(!1) === -1,
                    r = (s ? "valid" : "invalid") + ".zf.abide";
                return this[s ? "removeErrorClasses" : "addErrorClasses"](t), t.trigger(r, [t]), s
            }
        }, {
            key: "validateForm",
            value: function() {
                var e = [],
                    i = this;
                this.$inputs.each(function() {
                    e.push(i.validateInput(t(this)))
                });
                var n = e.indexOf(!1) === -1;
                return this.$element.find("[data-abide-error]").css("display", n ? "none" : "block"), this.$element.trigger((n ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]), n
            }
        }, {
            key: "validateText",
            value: function(t, e) {
                e = e || t.attr("pattern") || t.attr("type");
                var i = t.val();
                return !i.length || (this.options.patterns.hasOwnProperty(e) ? this.options.patterns[e].test(i) : !e || e === t.attr("type") || new RegExp(e).test(i))
            }
        }, {
            key: "validateRadio",
            value: function(e) {
                var i = this.$element.find(':radio[name="' + e + '"]'),
                    n = [],
                    a = this;
                return i.each(function() {
                    var e = t(this),
                        i = a.requiredCheck(e);
                    n.push(i), i && a.removeErrorClasses(e)
                }), n.indexOf(!1) === -1
            }
        }, {
            key: "matchValidation",
            value: function(t, e, i) {
                var n = this;
                i = !!i;
                var a = e.split(" ").map(function(e) {
                    return n.options.validators[e](t, i, t.parent())
                });
                return a.indexOf(!1) === -1
            }
        }, {
            key: "resetForm",
            value: function() {
                var e = this.$element,
                    i = this.options;
                t("." + i.labelErrorClass, e).not("small").removeClass(i.labelErrorClass), t("." + i.inputErrorClass, e).not("small").removeClass(i.inputErrorClass), t(i.formErrorSelector + "." + i.formErrorClass).removeClass(i.formErrorClass), e.find("[data-abide-error]").css("display", "none"), t(":input", e).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr("data-invalid"), e.trigger("formreset.zf.abide", [e])
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this;
                this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function() {
                    e.removeErrorClasses(t(this))
                }), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        liveValidate: !1,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
        },
        validators: {
            equalTo: function(e, i, n) {
                return t("#" + e.attr("data-equalto")).val() === e.val()
            }
        }
    }, Foundation.plugin(e, "Abide")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
! function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Accordion"), Foundation.Keyboard.register("Accordion", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_DOWN: "next",
                ARROW_UP: "previous"
            })
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                this.$element.attr("role", "tablist"), this.$tabs = this.$element.children("li"), 0 === this.$tabs.length && (this.$tabs = this.$element.children("[data-accordion-item]")), this.$tabs.each(function(e, i) {
                    var n = t(i),
                        a = n.find("[data-tab-content]"),
                        o = a[0].id || Foundation.GetYoDigits(6, "accordion"),
                        s = i.id || o + "-label";
                    n.find("a:first").attr({
                        "aria-controls": o,
                        role: "tab",
                        id: s,
                        "aria-expanded": !1,
                        "aria-selected": !1
                    }), a.attr({
                        role: "tabpanel",
                        "aria-labelledby": s,
                        "aria-hidden": !0,
                        id: o
                    })
                });
                var e = this.$element.find(".is-active").children("[data-tab-content]");
                e.length && this.down(e, !0), this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var e = this;
                this.$tabs.each(function() {
                    var i = t(this),
                        n = i.children("[data-tab-content]");
                    n.length && i.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(t) {
                        t.preventDefault(), i.hasClass("is-active") ? (e.options.allowAllClosed || i.siblings().hasClass("is-active")) && e.up(n) : e.down(n)
                    }).on("keydown.zf.accordion", function(t) {
                        Foundation.Keyboard.handleKey(t, "Accordion", {
                            toggle: function() {
                                e.toggle(n)
                            },
                            next: function() {
                                i.next().find("a").focus().trigger("click.zf.accordion")
                            },
                            previous: function() {
                                i.prev().find("a").focus().trigger("click.zf.accordion")
                            },
                            handled: function() {
                                t.preventDefault(), t.stopPropagation()
                            }
                        })
                    })
                })
            }
        }, {
            key: "toggle",
            value: function(t) {
                if (t.parent().hasClass("is-active")) {
                    if (!this.options.allowAllClosed && !t.parent().siblings().hasClass("is-active")) return;
                    this.up(t)
                } else this.down(t)
            }
        }, {
            key: "down",
            value: function(e, i) {
                var n = this;
                if (!this.options.multiExpand && !i) {
                    var a = this.$element.find(".is-active").children("[data-tab-content]");
                    a.length && this.up(a)
                }
                e.attr("aria-hidden", !1).parent("[data-tab-content]").addBack().parent().addClass("is-active"), e.slideDown(n.options.slideSpeed, function() {
                    n.$element.trigger("down.zf.accordion", [e])
                }), t("#" + e.attr("aria-labelledby")).attr({
                    "aria-expanded": !0,
                    "aria-selected": !0
                })
            }
        }, {
            key: "up",
            value: function(e) {
                var i = e.parent().siblings(),
                    n = this,
                    a = this.options.multiExpand ? i.hasClass("is-active") : e.parent().hasClass("is-active");
                (this.options.allowAllClosed || a) && (e.slideUp(n.options.slideSpeed, function() {
                    n.$element.trigger("up.zf.accordion", [e])
                }), e.attr("aria-hidden", !0).parent().removeClass("is-active"), t("#" + e.attr("aria-labelledby")).attr({
                    "aria-expanded": !1,
                    "aria-selected": !1
                }))
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("[data-tab-content]").slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {
        slideSpeed: 250,
        multiExpand: !1,
        allowAllClosed: !1
    }, Foundation.plugin(e, "Accordion")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
! function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this._init(), Foundation.registerPlugin(this, "Tabs"), Foundation.Keyboard.register("Tabs", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "previous",
                ARROW_DOWN: "next",
                ARROW_LEFT: "previous"
            })
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this;
                if (this.$tabTitles = this.$element.find("." + this.options.linkClass), this.$tabContent = t('[data-tabs-content="' + this.$element[0].id + '"]'), this.$tabTitles.each(function() {
                        var i = t(this),
                            n = i.find("a"),
                            a = i.hasClass("is-active"),
                            o = n[0].hash.slice(1),
                            s = n[0].id ? n[0].id : o + "-label",
                            r = t("#" + o);
                        i.attr({
                            role: "presentation"
                        }), n.attr({
                            role: "tab",
                            "aria-controls": o,
                            "aria-selected": a,
                            id: s
                        }), r.attr({
                            role: "tabpanel",
                            "aria-hidden": !a,
                            "aria-labelledby": s
                        }), a && e.options.autoFocus && n.focus()
                    }), this.options.matchHeight) {
                    var i = this.$tabContent.find("img");
                    i.length ? Foundation.onImagesLoaded(i, this._setHeight.bind(this)) : this._setHeight()
                }
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                this._addKeyHandler(), this._addClickHandler(), this.options.matchHeight && t(window).on("changed.zf.mediaquery", this._setHeight.bind(this))
            }
        }, {
            key: "_addClickHandler",
            value: function() {
                var e = this;
                this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function(i) {
                    i.preventDefault(), i.stopPropagation(), t(this).hasClass("is-active") || e._handleTabChange(t(this))
                })
            }
        }, {
            key: "_addKeyHandler",
            value: function() {
                var e = this;
                e.$element.find("li:first-of-type"), e.$element.find("li:last-of-type");
                this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(i) {
                    if (9 !== i.which) {
                        i.stopPropagation(), i.preventDefault();
                        var n, a, o = t(this),
                            s = o.parent("ul").children("li");
                        s.each(function(i) {
                            if (t(this).is(o)) return void(e.options.wrapOnKeys ? (n = 0 === i ? s.last() : s.eq(i - 1), a = i === s.length - 1 ? s.first() : s.eq(i + 1)) : (n = s.eq(Math.max(0, i - 1)), a = s.eq(Math.min(i + 1, s.length - 1))))
                        }), Foundation.Keyboard.handleKey(i, "Tabs", {
                            open: function() {
                                o.find('[role="tab"]').focus(), e._handleTabChange(o)
                            },
                            previous: function() {
                                n.find('[role="tab"]').focus(), e._handleTabChange(n)
                            },
                            next: function() {
                                a.find('[role="tab"]').focus(), e._handleTabChange(a)
                            }
                        })
                    }
                })
            }
        }, {
            key: "_handleTabChange",
            value: function(e) {
                var i = e.find('[role="tab"]'),
                    n = i[0].hash,
                    a = this.$tabContent.find(n),
                    o = this.$element.find("." + this.options.linkClass + ".is-active").removeClass("is-active").find('[role="tab"]').attr({
                        "aria-selected": "false"
                    });
                t("#" + o.attr("aria-controls")).removeClass("is-active").attr({
                    "aria-hidden": "true"
                }), e.addClass("is-active"), i.attr({
                    "aria-selected": "true"
                }), a.addClass("is-active").attr({
                    "aria-hidden": "false"
                }), this.$element.trigger("change.zf.tabs", [e])
            }
        }, {
            key: "selectTab",
            value: function(t) {
                var e;
                e = "object" == typeof t ? t[0].id : t, e.indexOf("#") < 0 && (e = "#" + e);
                var i = this.$tabTitles.find('[href="' + e + '"]').parent("." + this.options.linkClass);
                this._handleTabChange(i)
            }
        }, {
            key: "_setHeight",
            value: function() {
                var e = 0;
                this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function() {
                    var i = t(this),
                        n = i.hasClass("is-active");
                    n || i.css({
                        visibility: "hidden",
                        display: "block"
                    });
                    var a = this.getBoundingClientRect().height;
                    n || i.css({
                        visibility: "",
                        display: ""
                    }), e = a > e ? a : e
                }).css("height", e + "px")
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide(), this.options.matchHeight && t(window).off("changed.zf.mediaquery"), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        linkClass: "tabs-title",
        panelClass: "tabs-panel"
    }, Foundation.plugin(e, "Tabs")
}(jQuery);
var _createClass = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
! function(t) {
    var e = function() {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, this.$element.data(), n), this.isActive = !1, this.isClick = !1, this._init(), Foundation.registerPlugin(this, "Tooltip")
        }
        return _createClass(e, [{
            key: "_init",
            value: function() {
                var e = this.$element.attr("aria-describedby") || Foundation.GetYoDigits(6, "tooltip");
                this.options.positionClass = this._getPositionClass(this.$element), this.options.tipText = this.options.tipText || this.$element.attr("title"), this.template = this.options.template ? t(this.options.template) : this._buildTemplate(e), this.template.appendTo(document.body).text(this.options.tipText).hide(), this.$element.attr({
                    title: "",
                    "aria-describedby": e,
                    "data-yeti-box": e,
                    "data-toggle": e,
                    "data-resize": e
                }).addClass(this.triggerClass), this.usedPositions = [], this.counter = 4, this.classChanged = !1, this._events()
            }
        }, {
            key: "_getPositionClass",
            value: function(t) {
                if (!t) return "";
                var e = t[0].className.match(/\b(top|left|right)\b/g);
                return e = e ? e[0] : ""
            }
        }, {
            key: "_buildTemplate",
            value: function(e) {
                var i = (this.options.tooltipClass + " " + this.options.positionClass + " " + this.options.templateClasses).trim(),
                    n = t("<div></div>").addClass(i).attr({
                        role: "tooltip",
                        "aria-hidden": !0,
                        "data-is-active": !1,
                        "data-is-focus": !1,
                        id: e
                    });
                return n
            }
        }, {
            key: "_reposition",
            value: function(t) {
                this.usedPositions.push(t ? t : "bottom"), !t && this.usedPositions.indexOf("top") < 0 ? this.template.addClass("top") : "top" === t && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : "left" === t && this.usedPositions.indexOf("right") < 0 ? this.template.removeClass(t).addClass("right") : "right" === t && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(t).addClass("left") : !t && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.addClass("left") : "top" === t && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.template.removeClass(t).addClass("left") : "left" === t && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : "right" === t && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? this.template.removeClass(t) : this.template.removeClass(t), this.classChanged = !0, this.counter--
            }
        }, {
            key: "_setPosition",
            value: function() {
                var t = this._getPositionClass(this.template),
                    e = Foundation.Box.GetDimensions(this.template),
                    i = Foundation.Box.GetDimensions(this.$element),
                    n = "left" === t ? "left" : "right" === t ? "left" : "top",
                    a = "top" === n ? "height" : "width";
                "height" === a ? this.options.vOffset : this.options.hOffset;
                if (e.width >= e.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.template)) return this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center bottom", this.options.vOffset, this.options.hOffset, !0)).css({
                    width: i.windowDims.width - 2 * this.options.hOffset,
                    height: "auto"
                }), !1;
                for (this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center " + (t || "bottom"), this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.template) && this.counter;) this._reposition(t), this._setPosition()
            }
        }, {
            key: "show",
            value: function() {
                if ("all" !== this.options.showOn && !Foundation.MediaQuery.atLeast(this.options.showOn)) return !1;
                var t = this;
                this.template.css("visibility", "hidden").show(), this._setPosition(), this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")), this.template.attr({
                    "data-is-active": !0,
                    "aria-hidden": !1
                }), t.isActive = !0, this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {}), this.$element.trigger("show.zf.tooltip")
            }
        }, {
            key: "hide",
            value: function() {
                var t = this;
                this.template.stop().attr({
                    "aria-hidden": !0,
                    "data-is-active": !1
                }).fadeOut(this.options.fadeOutDuration, function() {
                    t.isActive = !1, t.isClick = !1, t.classChanged && (t.template.removeClass(t._getPositionClass(t.template)).addClass(t.options.positionClass), t.usedPositions = [], t.counter = 4, t.classChanged = !1)
                }), this.$element.trigger("hide.zf.tooltip")
            }
        }, {
            key: "_events",
            value: function() {
                var t = this,
                    e = (this.template, !1);
                this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function(e) {
                    t.isActive || (t.timeout = setTimeout(function() {
                        t.show()
                    }, t.options.hoverDelay))
                }).on("mouseleave.zf.tooltip", function(i) {
                    clearTimeout(t.timeout), (!e || !t.isClick && t.options.clickOpen) && t.hide()
                }), this.options.clickOpen && this.$element.on("mousedown.zf.tooltip", function(e) {
                    e.stopImmediatePropagation(), t.isClick ? t.hide() : (t.isClick = !0, !t.options.disableHover && t.$element.attr("tabindex") || t.isActive || t.show())
                }), this.options.disableForTouch || this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function(e) {
                    t.isActive ? t.hide() : t.show()
                }), this.$element.on({
                    "close.zf.trigger": this.hide.bind(this)
                }), this.$element.on("focus.zf.tooltip", function(i) {
                    return e = !0, !t.isClick && void t.show()
                }).on("focusout.zf.tooltip", function(i) {
                    e = !1, t.isClick = !1, t.hide()
                }).on("resizeme.zf.trigger", function() {
                    t.isActive && t._setPosition()
                })
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.hide() : this.show()
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tootip").removeAttr("aria-describedby").removeAttr("data-yeti-box").removeAttr("data-toggle").removeAttr("data-resize"), this.template.remove(), Foundation.unregisterPlugin(this)
            }
        }]), e
    }();
    e.defaults = {
        disableForTouch: !1,
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: !1,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: !0,
        positionClass: "",
        vOffset: 10,
        hOffset: 12
    }, Foundation.plugin(e, "Tooltip")
}(jQuery),
function(t) {
    function e() {
        if (t("body").hasClass("single") && "undefined" != typeof addthis) {
            var e = t(".entry-title").text(),
                i = t(".main-content").data("bitlyurl"),
                n = t(".main-content").data("excerpt"),
                a = a || {};
            a.data_track_addressbar = !1, a.data_track_clickback = !1, addthis.update("share", "title", e), addthis.update("share", "url", i), addthis.update("share", "description", n), addthis.toolbox(".addthis_toolbox"), addthis.toolbox("#sticky-nav .addthis_toolbox")
        }
    }
    t.getScript("//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5220cc19623b4a53");
    var i = i || {};
    if (i.data_track_addressbar = !1, i.data_track_clickback = !1, i.ui_click = !0, "undefined" != typeof BITLYURL) {
        ({
            url: BITLYURL
        })
    }
    e()
}(jQuery),
function(t) {
    function e() {
        "ActiveXObject" in window && t("html").addClass("ie")
    }

    function i() {
        var t = !!window.ActiveXObject && +/msie\s(\d+)/i.exec(navigator.userAgent)[1] || NaN,
            e = window.location.href,
            i = '<div id="IE-warning-modal"><a id="close-modal">X</a><p class="warning">Your Browser is no longer supported</p><p class="text">To browse Adweek.com please upgrade or use one of the recommended browsers below</p><div class="chrome"><img src="' + e + 'wp-content/themes/AdWeek/assets/images/icons/chrome-logo.png"</img>Google Chrome</div><div class="firefox"><img src="' + e + 'wp-content/themes/AdWeek/assets/images/icons/firefox-logo.png"</img>Mozilla Firefox</div><div class="ms-edge"><img src="' + e + 'wp-content/themes/AdWeek/assets/images/icons/edge-logo.png"</img>Microsoft Edge</div></div>',
            n = document.getElementById("dropdown");
        if (t < 11 && document.cookie.search("oldBrowserModal") === -1) {
            var a = document.getElementsByClassName("container")[0];
            a.style.cssText = "color: #444444; opacity: 0.2;", n.insertAdjacentHTML("afterEnd", i);
            var o = document.getElementById("close-modal");
            o.addEventListener("click", function() {
                var t = document.getElementById("IE-warning-modal");
                t.style.display = "none", a.style.cssText = "..."
            });
            var s = new Date;
            s.setTime(s.getTime() + 864e5);
            var r = "expires=" + s.toUTCString();
            document.cookie = "oldBrowserModal=present;" + r + ";"
        }
    }
    e(), i()
}(jQuery),
function(t) {
    var e = t(".button");
    t(document).on("click", ".wpcf7-submit", function(i) {
        if (t(".ajax-loader").hasClass("is-active")) return i.preventDefault(), e.attr("disabled", !0), document.addEventListener("wpcf7invalid", function(t) {
            e.attr("disabled", !1)
        }), !1
    })
}(jQuery),
function(t) {
    var e = document.getElementsByName("company"),
        i = [];
    if (e && e.length > 0)
        for (var n = 0, a = e.length; n < a; n++) ! function(n) {
            i[n] = new Awesomplete(e[n], {
                minChars: 2,
                filter: Awesomplete.FILTER_STARTSWITH,
                maxItems: screen && screen.width <= 768 ? 5 : 10,
                list: []
            }), e[n].addEventListener("input", function(e) {
                if (this.value && this.value.length > 1) {
                    var a = i[n];
                    t.getJSON("/wp-json/company-list/v1/companies?search=" + this.value, function(t) {
                        a.list = t, a.evaluate()
                    })
                }
            })
        }(n)
}(jQuery),
function(t) {
    t(document).on("click", "#closepopwrap", function() {
        t(this).parents("#popwrap").addClass("hide")
    }), t(document).on("click", ".show-popup", function(e) {
        e.preventDefault();
        var i = t(this).parents("article").data("popup");
        t(".popup-" + i).removeClass("hide")
    }), t(document).ready(function() {
        t(".cf-half").each(function(t, e) {
            t % 2 === 0 && e.setAttribute("style", "margin-right: 20px")
        })
    })
}(jQuery),
function(t) {
    t(".credsparkQuiz").attr("data-uuid", "user-" + Date.now()), window.addEventListener("message", function(e) {
        var i;
        if ("https://www.credspark.com" === e.origin && "undefined" != typeof e.data.embeddedRegistration) {
            for (var n in e.data.embeddedRegistration.formData) i = "", "undefined" != typeof t(".credsparkQuiz").data(n.substring(25, 29)) ? i = t(".credsparkQuiz").data(n.substring(25, 29)) : 0 === n.indexOf("user") && (i = n.replace("user[", "").replace("]", "")), lytics.fields[i] = e.data.embeddedRegistration.formData[n];
            lytics.sendData()
        }
    }), credSparkFix()
}(jQuery),
function(t) {
    function e(t) {
        t.clientX > 300 && s.hasClass("open") && (t.preventDefault(), s.click())
    }

    function i(e) {
        var i = t(e).offset().top - 79;
        t("html,body").animate({
            scrollTop: i
        }, 2e3, "easeInOutQuart")
    }

    function n() {
        var e = t("#past-events-list").data("page"),
            i = parseInt(e) + 1,
            n = t("#past-events-list").data("totalpages"),
            a = t("#past-events-list").data("event-type"),
            o = {
                action: "load_event_page",
                page: parseInt(e) + 1,
                event_type: a
            };
        return t.ajax({
            url: ajaxurl,
            type: "GET",
            data: o,
            success: function(e) {
                t("#past-events-list .event").removeClass(" nob-xl nob-l nob-m nob-s"), t("#past-events-list").append(e).data("page", i), u = !1, i === parseInt(n) ? t("#more-events").remove() : t("#more-events").html("Load More")
            }
        }), !1
    }

    function a(e, i) {
        var n = !0;
        t(e).each(function(t, e) {
            if (!e.hasChildNodes()) return n = !1, !1
        }), n || t(i).each(function() {
            t(this).css({
                position: "static",
                background: "white",
                bottom: "auto"
            }).prev().remove(), t(this).find("*").css("color", "#333333")
        })
    }
    var o = t("nav.event-menu"),
        s = t("#slideout-button-event-nav"),
        r = t(".event-menu .menu"),
        d = t("#aw-event-overlay"),
        l = t("#masthead"),
        c = t("#event-nav-logo-center");
    s.click(function() {
        t(window).width() < 1040 && (s.toggleClass("open"), o.toggleClass("open"), o.hasClass("open") ? (setTimeout(function() {
            s.detach(), r.append(s)
        }, 500), setTimeout(function() {
            d.css({
                display: "block"
            }), l.css({
                width: "300px"
            }), c.css({
                opacity: "0"
            })
        }, 200)) : (s.detach(), o.prepend(s), d.css({
            display: "none"
        }), l.css({
            width: "unset"
        }), c.css({
            opacity: "1"
        })))
    }), t(window).width() < 1040 && t(document.body).click(e), t(".event-nav-item").click(function() {
        setTimeout(function() {
            s.click()
        }, 750)
    });
    var u;
    t(".slow").click(function(e) {
        var n = t(this).find("a").attr("href");
        t(this).siblings(".active").removeClass("active"), t(this).addClass("active"), e.preventDefault();
        var a = n.substring(n.indexOf("#"), 1e3);
        i(a)
    });
    var f = debounce(function() {
        var e, i, n, a, o = t(window).scrollTop(),
            s = t(".aw-full-width"),
            r = t(".event-nav.event-nav-enable");
        o > 0 && 1 === r.length && !r.hasClass("scrolled") ? r.addClass("scrolled") : 0 === o && r.hasClass("scrolled") && r.removeClass("scrolled"), s.each(function(s) {
            e = t(this).offset().top - 80, i = t(".aw-full-width").eq(s + 1).length ? t(".aw-full-width").eq(s + 1).offset().top : t("#footer-site-logo").offset().top, o > e && o < i && (t(".event-menu .active").removeClass("active"), n = t(this).attr("id"), a = '[href="#' + n + '"]', t(a).parent().addClass("active"))
        })
    }, 300);
    if (t(document).scroll(function() {
            f()
        }), t(window).width() < 680) {
        var h = t(".event-menu a").outerHeight() * t(".event-menu li").length;
        t("nav.event-menu").data("expandHeight", h)
    }
    t("#mobile-menu-toggle").click(function(e) {
        e.preventDefault(), t(this).parents(".menu-toggle-wrapper").hasClass("menu-active") ? (t(this).parents(".menu-toggle-wrapper").removeClass("menu-active"), t(".slide-up").css("height", 0), t(this).parents(".event-nav").find(".event-menu").removeClass("slide-up"), t(this).html("MENU")) : (t(this).parents(".menu-toggle-wrapper").addClass("menu-active"), t(this).parents(".event-nav").find(".event-menu").addClass("slide-up"), t(".slide-up").css("height", t(".slide-up").data("expandHeight")), t(this).html("X"))
    }), t("#more-events").click(function() {
        u !== !0 && (u = !0, t(this).html("Loading"), n())
    }), t.isFunction("select2") && t(".single-event .wpcf7-select").select2({
        minimumResultsForSearch: -1
    }), t(window).on("load", function() {
        "undefined" != typeof t.flexslider && t(".event-archive-slider").flexslider({
            animation: "slide",
            slideshowSpeed: 5e3,
            directionNav: !1,
            smoothHeight: !0,
            animationSpeed: 800
        })
    }), t(document).ready(function() {
        0 !== t(".event-nav").length && t("#footer-copyright").css("padding-bottom", "50px")
    }), t(document).ready(function() {
        var e = t(".wpcf7-submit"),
            i = t("#day-tabs .tabs-title a").css("color");
        e.css({
            background: i
        })
    }), a(".attendee-image", ".attendee-details"), a(".speaker-image", ".speaker-details")
}(jQuery),
function(t) {
    function e() {
        t(".embed-wrapper.type-other").each(function() {
            var e = t(this).find("iframe");
            e.length && e.attr("src").search("facebook") !== -1 && ("true" === e.attr("allowfullscreen") ? e.outerHeight(e.attr("height") * e.parent().width() / e.attr("width")) : e.outerHeight(e.attr("height")))
        }), t(".instagram-media").each(function() {
            var e = parseInt(t(this).attr("height")) + 10;
            t(this).outerHeight(e), t(this).parent().hasClass("type-video") && t(this).parent().removeClass("type-video").addClass("type-other")
        })
    }
    t(window).load(function() {
        e()
    })
}(jQuery),
function(t) {
    t('iframe[src*="youtube.com"]').wrap('<div class="flex-video widescreen"/>'), t('iframe[src*="vimeo.com"]').wrap('<div class="flex-video widescreen vimeo"/>')
}(jQuery),
function(t) {
    "undefined" != typeof gallery_slides && t(document).ready(function() {
        function e() {
            p = '<img src="' + n[a].url + '" />', s.hide(), s.html(p), m = document.getElementById("launch-photoswipe").childNodes[0], m.addEventListener("load", function() {
                m.setAttribute("style", "max-height: " + f + "px;"), s.show(), setTimeout(function() {
                    h = m.height, m.setAttribute("style", "max-height: " + f + "px; padding-top: " + (f - h) / 2 + "px;")
                }, 0), setTimeout(function() {
                    h = m.height
                }, 0), setTimeout(function() {
                    h !== f ? t(".next-slide").css({
                        "margin-top": -(h / 2 + 24) + "px"
                    }) : t(".next-slide").css({
                        "margin-top": -(f / 2 + 24) + "px"
                    }), u.show()
                }, 0)
            })
        }
        var i = JSON.parse(gallery_slides),
            n = [];
        i.slides.forEach(function(t) {
            n.push({
                url: t.ko_img_src,
                caption: t.slide_caption,
                credit: t.slide_credit
            })
        }), n.forEach(function(e) {
            t(".images-container").append('<img src="' + e.url + '"></img>')
        });
        var a = 0,
            o = {
                index: a,
                shareEl: !1,
                fullscreenEl: !1
            },
            s = t("#launch-photoswipe"),
            r = t(".gallery-caption"),
            d = t(".gallery-credit"),
            l = t(".gallery-wrap"),
            c = t(".ko-gallery-slider .next-slide, .ko-gallery-slider .prev-slide"),
            u = t(".next-slide"),
            f = void 0,
            h = void 0,
            p = void 0,
            m = void 0;
        e(), s.children("img").on("load", function() {
            f = s.children("img").height(), c.each(function() {
                t(this).hasClass("prev-slide") ? t(this).css({
                    "margin-top": f / 2 - 25 + "px"
                }) : t(this).hasClass("next-slide") && t(this).css({
                    "margin-top": -(f / 2 + 24) + "px"
                })
            })
        }), c.click(function(i) {
            i.preventDefault(), u.hide(), t(this).hasClass("next-slide") ? (a += 1, a > n.length - 1 && (a = 0)) : t(this).hasClass("prev-slide") && (a -= 1, a < 0 && (a = n.length - 1)), l.height(f), r.html(n[a].caption), d.html(n[a].credit), o.index = a, e()
        });
        var v = [];
        i.slides.forEach(function(t) {
            var e = '<div><span class="slide-caption">' + t.slide_caption + "</span>";
            e += '<span class="slide-credit">' + t.slide_credit + "</span></div>", v.push({
                src: t.slide_src,
                w: t.slide_width,
                h: t.slide_height,
                title: e
            })
        });
        var g = document.querySelectorAll(".pswp")[0];
        document.getElementById("launch-photoswipe").addEventListener("click", function(t) {
            t.preventDefault();
            var i = new PhotoSwipe(g, PhotoSwipeUI_Default, v, o);
            i.listen("afterChange", function() {
                a = o.index = i.getCurrentIndex(), e()
            }), i.init(), i.listen("destroy", function() {
                i = null
            })
        })
    })
}(jQuery),
function(t) {
    t(document).on("aw-location-detected", function(t, e) {
        if (e && e.country && e.country.iso_code) {
            var i = e.country.iso_code;
            window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                event: "country_detected",
                country: i
            })
        }
    })
}(jQuery);
var adslot = adslot || {};
adslot.rendered = adslot.rendered ? adslot.rendered : [],
    function(t) {
        function e(e) {
            void 0 === typeof e && (e = awIS.articleIndex);
            var i = ga.getAll()[0].get("name"),
                n = t("article.main-content:eq(" + e + ")");
            if (n.data("pageview-sent") !== !0) {
                var a = n.data("authors"),
                    o = n.data("date"),
                    s = t("#single-post").data("infinite-name"),
                    r = n.data("featured"),
                    d = n.data("categories"),
                    l = n.data("zone");
                ga(i + ".set", {
                    page: location.pathname,
                    title: document.title,
                    dimension1: a,
                    dimension2: o,
                    dimension3: s,
                    dimension4: JSON.stringify(e + 1),
                    dimension5: r,
                    dimension6: d,
                    dimension7: l
                }), ga(i + ".send", "pageview"), n.data("pageview-sent", !0)
            }
        }
        var i = t("body");
        (i.hasClass("single-post") || i.hasClass("single-sponsored_post") || i.hasClass("page-template-partner-expert-template") || i.hasClass("single-partner_info") || i.hasClass("single-expert_info") || i.hasClass("post-type-archive-partner_info") || i.hasClass("post-type-archive-expert_info") || i.hasClass("single-partner_articles")) && "undefined" != typeof ga && ga(function() {
            e(0)
        }), "undefined" != typeof awIS && awIS.functions.push(e)
    }(jQuery),
    function(t) {
        function e() {
            t(".highlights-tiles-wrapper .row").each(function() {
                var e = t(this),
                    i = e.find(".highlights-tile"),
                    n = 200;
                i.each(function() {
                    var e = t(this);
                    if (!e.hasClass("highlights-tile-style-wide")) {
                        var i = e.find(".highlights-text > div");
                        i.height() > n && (n = i.height())
                    }
                }), i.each(function() {
                    var e = t(this);
                    e.hasClass("highlights-tile-style-wide") || e.css("min-height", n).find(".flipper").height(n + 40).find(".highlights-tile-content, .front, .back, .no-flip").height(n).parents(".flip-container")
                })
            })
        }
        e(), t(window).resize(function() {
            e()
        }), t(".highlights-tile-content").on("touchstart", function() {
            var e = t(this);
            e.parent().parents(".row").find(".hover").removeClass("hover"), e.addClass("hover")
        })
    }(jQuery), jQuery(document).foundation(),
    function(t) {
        function e(e) {
            (t("#" + e.slot.j.m).parents(".container-meno").length || t("#" + e.slot.j.m).parents(".container-dierlam").length) && "600" === e.size[1] && t("#" + e.slot.j.m).parents(".aw-container").find(".jobs-widget").parent().remove()
        }
        adslot.rendered.push(e)
    }(jQuery),
    function(t) {
        function e() {
            if (t(".pf-widget.adweek").length) {
                t(".pf-widget.adweek").find(".pf-widget-cancel").html("No Thanks");
                var i = t(".pf-widget-modal.lead-gen:visible").attr("id");
                t("#" + i).find(".pf-widget-headline").detach().prependTo(t("#" + i).find(".pf-widget-body"))
            } else setTimeout(e, 400)
        }
        window.lytics = window.lytics || {}, window.lytics.fields = window.lytics.fields || {}, lytics.gatherData = function(e) {
            var i = t(e).find(":input");
            i.each(function() {
                var e = t(this),
                    i = !0;
                if (e && e.val()) {
                    var n = e.prop("tagName") ? e.prop("tagName").toLowerCase() : "input",
                        a = e.prop("type") ? e.prop("type").toLowerCase() : "text",
                        o = e.prop("name");
                    "_" === o.substring(0, 1) && (i = !1), "password" === a && (i = !1), i && ("select" === n ? lytics.fields[o] = e.find("option:selected").text() : "checkbox" === a ? e.is(":checked") && (lytics.fields[o] = e.val()) : "company" === o ? lytics.fields.company_name = e.val() : lytics.fields[o] = e.val())
                }
            })
        }, lytics.sendData = function() {
            "undefined" != typeof jstag && jstag.send(lytics.fields)
        };
        var i = t('meta[name="lytics:topics"]').attr("content");
        lytics.fields.AW_Page_Topic = i, window.aw_ip_info_endpoint && t.ajax({
            type: "GET",
            url: aw.ip_address_api_url
        }).done(function(e) {
            e && e.ip && t.ajax({
                type: "GET",
                url: "/aw-ip-info",
                data: {
                    ip: e.ip
                }
            }).done(function(e) {
                try {
                    var i = JSON.parse(e);
                    i && (i.hasOwnProperty("Ip") && (lytics.fields.IP = i.Ip), i.hasOwnProperty("Domain") && (lytics.fields.domain = i.Domain), i.hasOwnProperty("Name") && (lytics.fields.company_by_ip = i.Name), i.hasOwnProperty("Industry") && (lytics.fields.industry = i.Industry.join(",")), i.hasOwnProperty("Size") && (lytics.fields.company_size = i.Size.join(",")), i.hasOwnProperty("IsIsp") && (lytics.fields.IsISP = i.IsIsp.toString()), i.hasOwnProperty("WebsiteUrl") && (lytics.fields.website = i.WebsiteUrl), i.hasOwnProperty("Phone") && (lytics.fields.company_phone = i.Phone), i.hasOwnProperty("HQAddress1") && (lytics.fields.HQAddress = i.HQAddress1), i.hasOwnProperty("HQCity") && (lytics.fields.HQCity = i.HQCity), i.hasOwnProperty("HQZip") && (lytics.fields.HQZip = i.HQZip), i.hasOwnProperty("HQState") && (lytics.fields.HQState = i.HQState), i.hasOwnProperty("HQCountry") && (lytics.fields.HQCountry = i.HQCountry), i.hasOwnProperty("GeoCity") && (lytics.fields.GeoCity = i.GeoCity), i.hasOwnProperty("GeoState") && (lytics.fields.GeoState = i.GeoState), i.hasOwnProperty("GeoCountry") && (lytics.fields.GeoCountry = i.GeoCountry), i.hasOwnProperty("ParentCompany") && (lytics.fields.ParentCompany = i.ParentCompany), i.hasOwnProperty("ParentAddress") && (lytics.fields.ParentAddress = i.ParentAddress), i.hasOwnProperty("ParentCity") && (lytics.fields.ParentCity = i.ParentCity), i.hasOwnProperty("ParentState") && (lytics.fields.ParentState = i.ParentState), i.hasOwnProperty("ParentZip") && (lytics.fields.ParentZip = i.ParentZip), i.hasOwnProperty("ParentCountry") && (lytics.fields.ParentCountry = i.ParentCountry), i.hasOwnProperty("TickerSymbol") && (lytics.fields.TickerSymbol = i.TickerSymbol), i.hasOwnProperty("StockExchange") && (lytics.fields.StockExchange = i.StockExchange), i.hasOwnProperty("Revenue") && (lytics.fields.company_revenue = i.Revenue))
                } catch (n) {}
                lytics.sendData(), t.each(lytics.fields, function(t) {
                    delete lytics.fields[t]
                })
            })
        }), e(), t(document).on("mouseover", ".pf-widget-modal.lead-gen", function() {
            t(this).find(".pf-widget-headline").detach().prependTo(t(this).find(".pf-widget-body"))
        }), t("form").on("submit", function() {
            void 0 != t(this).data("ly-track") && "false" === t(this).data("ly-track").toString() || (t(this).hasClass("wpcf7-form") ? lytics.gatherData(t(this)) : (lytics.gatherData(t(this)), lytics.sendData()))
        }), t(".wpcf7").on("wpcf7:mailsent", function() {
            lytics.sendData()
        })
    }(jQuery),
    function(t) {
        t("#menu-primary-menu > li > a").each(function() {
            t(this).attr("id", "primary-menu-" + t(this).text().replace(/ +/, "-"))
        }), t(".dd-left-menu > li > a").each(function() {
            t(this).attr("id", "dd-menu-" + t(this).text().replace(/ +/, "-"))
        }), t(".dd-left-menu .submenu a").each(function() {
            t(this).attr("id", "dd-sub-menu-" + t(this).text().replace(/ +/, "-"))
        }), t(".container-title").each(function(e) {
            t(this).find("a.view-more").attr("id", "view-more-" + (e + 1))
        }), t(".container-meno .hide-for-small-only > a:not(.contributor), .container-meno .show-for-small-only > a.show-for-small-only").attr("id", "meno-featured"), t(".container-meno .hide-for-small-only > a.contributor, .container-meno .show-for-small-only > a.contributor").attr("id", "meno-featured-author"), t(".container-meno #section-1 .aw-element").each(function(e) {
            t(this).find(".cat-name a").attr("id", "meno-section-1-link-" + (e + 1) + "-cat"), t(this).find("a.contributor").attr("id", "meno-section-1-link-" + (e + 1) + "-author"), t(this).hasClass("vertical") ? t(this).find("> a:not(.cat-name, .contributor)").attr("id", "meno-section-1-link-" + (e + 1)) : t(this).hasClass("title-excerpt") && t(this).find("> a").attr("id", "meno-section-1-link-" + (e + 1))
        }), t(".container-meno #section-2 .aw-element").each(function(e) {
            t(this).find("> a").attr("id", "meno-section-2-link-" + (e + 1))
        }), t(".container-grid").each(function(e) {
            t(this).find(".aw-element").each(function(i) {
                t(this).find("> a:not(.cat-name, .contributor)").attr("id", "grid-" + (e + 1) + "-link-" + (i + 1)), t(this).find(".cat-name a").attr("id", "grid-" + (e + 1) + "-link-" + (i + 1) + "-cat"), t(this).find("a.contributor").attr("id", "grid-" + (e + 1) + "-link-" + (i + 1) + "-author")
            })
        }), t(".container-dierlam").each(function(e) {
            t(this).find(".aw-element.show-for-large > a:not(.cat-name, .contributor), .aw-element.hide-for-large > a:not(.cat-name, .contributor)").attr("id", "dierlam-" + (e + 1) + "-featured"), t(this).find(".section-1 > .aw-element.horizontal").each(function(i) {
                t(this).find("> a").attr("id", "dierlam-" + (e + 1) + "-section-1-link-" + (i + 1))
            }), t(this).find(".section-2 > .aw-element").each(function(i) {
                t(this).hasClass("vertical") ? t(this).find("> a:not(.cat-name, .contributor)").attr("id", "dierlam-" + (e + 1) + "-section-2-link-" + (i + 1)) : t(this).hasClass("horizontal-small") && t(this).find("> a").attr("id", "dierlam-" + (e + 1) + "-section-2-link-" + (i + 1))
            }), t(this).find(".section-3 > .hide-for-large > .aw-element").each(function(i) {
                t(this).find("> a:not(.cat-name, .contributor)").attr("id", "dierlam-" + (e + 1) + "-section-3-mobile-link-" + (i + 1))
            }), t(this).find(".section-3 .subscribewidget a").attr("id", "dierlam-subscribe")
        }), t(".container-g").each(function(e) {
            t(this).find(".section-1 > .aw-element").each(function(i) {
                t(this).find("a:not(.cat-name, .contributor)").attr("id", "container-g-" + (e + 1) + "-section-1-link-" + (i + 1)), t(this).find(".cat-name a").attr("id", "container-g" + (e + 1) + "-link-" + (i + 1) + "-cat"), t(this).find("a.contributor").attr("id", "container-g" + (e + 1) + "-link-" + (i + 1) + "-author")
            }), t(this).find(".section-2 div.aw-element").each(function(i) {
                t(this).find("> a").attr("id", "container-g-" + (e + 1) + "-section-2-link-" + (i + 1))
            }), t(this).find(".view-more-link > a").attr("id", "container-g-" + (e + 1) + "-view-more-link")
        }), t(".container-cards").each(function(e) {
            t(this).find(".aw-element").each(function(i) {
                t(this).parent(".col-1").length ? t(this).find("a").attr("id", "cards-" + (e + 1) + "-link-" + (i + 1)) : t(this).parent(".col-2").length ? t(this).find("a").attr("id", "cards-" + (e + 1) + "-link-" + i) : t(this).parent(".col-3").length ? t(this).find("a").attr("id", "cards-" + (e + 1) + "-link-" + (i - 1)) : t(this).parent(".col-4").length && t(this).find("a").attr("id", "cards-" + (e + 1) + "-link-" + (i - 3))
            })
        }), t(".container-latest > .aw-element").each(function(e) {
            t(this).find("a").attr("id", "latest-link-" + (e + 1))
        }), t(".container-video > .aw-video").each(function(e) {
            t(this).find(".video-overlay").attr("id", "video-" + (e + 1))
        }), t(".aw-element.full-width.parent-width").each(function(e) {
            t(this).find("> a").attr("id", "full-width-image-" + (e + 1))
        }), t(".container-subscribe button.button").attr("id", "subscribe-button"), t(".popular-now a").each(function(e) {
            t(this).attr("id", "popular-link-" + (e + 1))
        }), t("#menu-footer-menu > .menu-item").each(function(e) {
            t(this).children("a").attr("id", "footer-col-" + (e + 1)), t(this).find(".sub-menu .menu-item > a").each(function(i) {
                t(this).attr("id", "footer-col-" + (e + 1) + "-sub-link-" + (i + 1))
            })
        })
    }(jQuery),
    function(t) {
        function e(t) {
            t.clientX > 300 && c.hasClass("open") && (t.preventDefault(), c.click())
        }

        function i() {
            var e = t(this).children(".dropdown");
            t(this).css({
                "margin-bottom": e.height() + "px"
            }).toggleClass("active-dropdown")
        }

        function n() {
            t(this).css({
                "margin-bottom": 0
            }).toggleClass("active-dropdown")
        }

        function a(e, i) {
            "down" === e && i > 300 && t("#searchbar").hasClass("hidden") ? t("#masthead").addClass("down-scroll") : t("#masthead").removeClass("down-scroll")
        }
        var o, s, r, d = t("#searchbar"),
            l = t("#dropdown"),
            c = t("#slideout-button"),
            u = t("#nav-container"),
            f = t("#masthead nav");
        c.click(function() {
            c.toggleClass("open"), u.toggleClass("open"), t(document.body).toggleClass("slide-over"), u.hasClass("open") ? setTimeout(function() {
                c.detach(), u.append(c)
            }, 500) : (c.detach(), f.prepend(c))
        });
        var h = t("#nav-container > .menu-container > .menu > .down-triangle.menu-item"),
            p = debounce(function() {
                var a = t("#subscribe-wrap");
                a.detach(), t(window).width() < 1040 ? (h.hover(i, n), t(document.body).click(e), u.append(a)) : (t(document.body).off("click", e), h.off("mouseenter", i), h.off("mouseleave", n), a.insertAfter(u))
            }, 300);
        p(), window.addEventListener("resize", p), t(document).scroll(function() {
            o = t(window).scrollTop(), s = o + t(window).height(), o > r ? t(window).width() < 680 && a("down", o) : t(window).width() < 680 && a("up", o), r = o
        }), t(".search-bar-toggle").click(function(t) {
            t.preventDefault(), d.toggleClass("hidden")
        }), t(".container").click(function() {
            (d.hasClass("hidden") || l.hasClass("hidden")) && d.hasClass("hidden") || (d.addClass("hidden"), l.addClass("hidden"), t(".dropdown-toggle, .search-bar-toggle").toggleClass("open"))
        }), t(".dd-menu .dd-left-menu li > ul").each(function() {
            t(this).addClass("submenu")
        }), t(window).width() < 1040 ? (t("body").off("mouseover", ".dd-menu .dd-left-menu li"), t(".dd-menu .dd-left-menu li.menu-item-has-children").click(function(e) {
            e.preventDefault(), t(this).siblings(".dd-active").removeClass("dd-active"), t(this).addClass("dd-active")
        }), t(".dd-left-menu").on("click", ".submenu li", function() {
            var e = t(this).find("a").attr("href");
            t(location).attr("href", e)
        })) : t(".dd-menu .dd-left-menu li").mouseover(function() {
            t(".dd-active").removeClass("dd-active"), t(this).siblings(".dd-active").removeClass("dd-active"), t(this).addClass("dd-active")
        }), t(".dd-social-container a").attr("target", "_blank")
    }(jQuery),
    function(t) {
        t("#new").on("opened", function() {
            t(document).foundation("section", "reflow")
        })
    }(jQuery),
    function(t) {
        var e = document.cookie.match(new RegExp("_UH10c8f4W=([^;]+)"));
        e && t("#subscribe-wrap").addClass("logged-in"), t("#subscriber-logout").click(function() {
            document.cookie = "_UH10c8f4W=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        })
    }(jQuery),
    function(t) {
        var e = t('[name="post_password"]');
        if (e && e.length) {
            var i = getParameterByName("pw");
            if (i) {
                var n = t(".post-password-form");
                e.val(i), n.submit(), n.find('input[type="submit"]').prop({
                    value: "Loading...",
                    disabled: !0
                })
            }
        }
    }(jQuery),
    function(t) {
        var e = t(".post-text").find("p"),
            i = document.createElement("div");
        i.setAttribute("class", "postup-article-promo-desktop-a");
        var n = document.createElement("div");
        n.setAttribute("class", "postup-article-promo-desktop-b");
        var a = document.createElement("div");
        a.setAttribute("class", "postup-article-promo-mobile-a");
        var o = document.createElement("div");
        o.setAttribute("class", "postup-article-promo-mobile-b");
        var s = document.createElement("div");
        s.setAttribute("class", "postup-article-promo-mobile-c"), t(window).width() > 680 ? (e[0] && e[0].before(i), e[3] && e[3].after(n)) : (e[0] && e[0].before(a), e[2] && e[2].after(o), e[4] && e[4].after(s))
    }(jQuery),
    function(t) {
        var e = getParameterByName("utm_content");
        e && t("input[name=program_source]").val(e)
    }(jQuery),
    function(t) {
        var e = [t("#subscriber-login"), t("#header-subscribe-link"), t("#aw_create_account > a")];
        t("body").hasClass("login-page") || t("body").hasClass("registration-page") || Cookies.set("aw_rdt_url", window.location.href, {
            expires: 365
        });
        var i = Cookies.get("aw_rdt_url") || "https://www.adweek.com/";
        e.forEach(function(t) {
            if (t.length) {
                var e = t.attr("href"),
                    n = e + (e.indexOf("?") === -1 ? "?" : "&") + "rdt=" + i;
                t.attr("href", n)
            }
        })
    }(jQuery),
    function(t) {
        var e = t("input[name=redirect_url]");
        e && e.length && e.length > 0 && document.addEventListener("wpcf7mailsent", function(t) {
            var i = e.val();
            i && (window.location.href = i)
        }, !1)
    }(jQuery),
    function(t) {
        for (var e = document.getElementsByClassName("sticky widget"), i = 0; i < e.length; i++) e[i].hasChildNodes() === !1 && e[i].remove()
    }(jQuery),
    function(t) {
        if (t("body").hasClass("search")) {
            t("#filter-collapse").click(function() {
                t("#search-filters").toggleClass("expanded")
            }), t(".select2-search-filter").each(function() {
                var e = t(this),
                    i = "undefined" != typeof e.data("width") ? e.data("width") : "95%";
                e.select2 && e.select2({
                    placeholder: e.data("placeholder"),
                    width: i,
                    minimumInputLength: e.data("minimum-input-length")
                })
            }), t("#search-filter-form").submit(function() {
                t("#search-submit").html("Searching...").attr("disabled", !0), 5 === t(".vertical-filter input:not(#all-verticals):checked").length
            }), t(".clear-filter").click(function(e) {
                e.preventDefault();
                var i = t(this).data("input");
                t('[name="' + i + '"]').val(null).trigger("change")
            }), t("#post-date-filter").daterangepicker({
                format: "YYYY-MM-DD",
                maxDate: moment(),
                opens: "right",
                ranges: {
                    "Last 7 Days": [moment().subtract(7, "days"), moment().subtract(1, "days")],
                    "Last 30 Days": [moment().subtract(30, "days"), moment().subtract(1, "days")],
                    "Year to Date": [moment().subtract(1, "days").startOf("year"), moment().subtract(1, "days")]
                },
                alwaysShowCalendars: !0,
                autoUpdateInput: !1,
                parentEl: "#search-filter-form"
            }, function(e, i) {
                t("#post-date-filter").val(e.format("MM/DD/YYYY") + " - " + i.format("MM/DD/YYYY"))
            });
            var e = t("#fromDate").val().length ? t("#fromDate").val() : "",
                i = t("#toDate").val().length ? t("#toDate").val() : "";
            e.length && (t("#post-date-filter").val(e + " - " + i), t("#post-date-filter").data("daterangepicker").setStartDate(e), t("#post-date-filter").data("daterangepicker").setEndDate(i)), t("#post-date-filter").siblings(".glyphicon-calendar").click(function() {
                t(this).siblings("input").data("daterangepicker").toggle()
            })
        }
    }(jQuery),
    function(t) {
        function e() {
            t(".copied").removeClass("copied")
        }
        t(".social-link button").click(function() {
            var i = t("<input>");
            t("body").append(i);
            var n = t(this).siblings(".bitly").text();
            i.val(n).select();
            try {
                document.execCommand("copy");
                t(this).addClass("copied"), t(this).siblings(".copy-confirmation").addClass("copied"), window.setTimeout(e, 1800)
            } catch (a) {}
            i.remove()
        })
    }(jQuery),
    function(t) {
        function e(e) {
            a = e.offset().top, o = a + e.outerHeight(!0);
            var d = e.find(".sticky-container");
            0 !== d.length && d.each(function(e) {
                var d = t(this),
                    l = d.offset().top,
                    c = l + d.height(),
                    u = d.find(".sticky-widgets").width(d.width()),
                    f = u.outerHeight(!0),
                    h = c - f - s - r,
                    p = d.find(".sticky-placeholder").css("height", f);
                a < n && o > i && (i + s > l && i < h ? (p.css({
                    position: "relative",
                    top: "auto"
                }), u.css({
                    position: "fixed",
                    top: s
                })) : (p.css({
                    position: "fixed",
                    top: -99999
                }), u.css({
                    position: "relative",
                    top: "auto"
                }), i >= h ? d.css("justify-content", "flex-end") : d.css("justify-content", "flex-start")))
            })
        }
        var i, n, a, o, s = 70,
            r = 0;
        t(window).scroll(function() {
            i = t(window).scrollTop(), n = i + t(window).height(), t(".sidebar").each(function() {
                e(t(this))
            }), t(window).width() > 680 && t(".aw-container").each(function() {
                e(t(this))
            })
        })
    }(jQuery),
    function(t) {
        t(window).width() < 680 && t(".vcko-color").each(function() {
            t(this).parent().css({
                height: t(this).outerHeight() + 30,
                overflow: "visible"
            })
        })
    }(jQuery);