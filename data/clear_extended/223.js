(function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b : b(jQuery)
})(function(b) {
    function v(n) {
        var i = n || window.event,
            q = m.call(arguments, 1),
            C = 0,
            s = 0,
            o = 0,
            t = 0,
            v = 0,
            u = 0;
        if (n = b.event.fix(i), n.type = "mousewheel", "detail" in i && (o = -1 * i.detail), "wheelDelta" in i && (o = i.wheelDelta), "wheelDeltaY" in i && (o = i.wheelDeltaY), "wheelDeltaX" in i && (s = -1 * i.wheelDeltaX), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (s = -1 * o, o = 0), C = 0 === o ? s : o, "deltaY" in i && (o = -1 * i.deltaY, C = o),
            "deltaX" in i && (s = i.deltaX, 0 === o && (C = -1 * s)), 0 !== o || 0 !== s) {
            if (1 === i.deltaMode) {
                var z = b.data(this, "mousewheel-line-height");
                C *= z;
                o *= z;
                s *= z
            } else 2 === i.deltaMode && (z = b.data(this, "mousewheel-page-height"), C *= z, o *= z, s *= z);
            if (t = Math.max(Math.abs(o), Math.abs(s)), (!r || r > t) && (r = t, y.settings.adjustOldDeltas && "mousewheel" === i.type && t % 120 === 0 && (r /= 40)), y.settings.adjustOldDeltas && "mousewheel" === i.type && t % 120 === 0 && (C /= 40, s /= 40, o /= 40), C = Math[C >= 1 ? "floor" : "ceil"](C / r), s = Math[s >= 1 ? "floor" : "ceil"](s / r), o = Math[o >= 1 ?
                    "floor" : "ceil"](o / r), y.settings.normalizeOffset && this.getBoundingClientRect) i = this.getBoundingClientRect(), v = n.clientX - i.left, u = n.clientY - i.top;
            return n.deltaX = s, n.deltaY = o, n.deltaFactor = r, n.offsetX = v, n.offsetY = u, n.deltaMode = 0, q.unshift(n, C, s, o), D && clearTimeout(D), D = setTimeout(B, 200), (b.event.dispatch || b.event.handle).apply(this, q)
        }
    }

    function B() {
        r = null
    }
    var D, r, A = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        q = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll",
            "MozMousePixelScroll"
        ],
        m = Array.prototype.slice;
    if (b.event.fixHooks)
        for (var t = A.length; t;) b.event.fixHooks[A[--t]] = b.event.mouseHooks;
    var y = b.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var n = q.length; n;) this.addEventListener(q[--n], v, false);
            else this.onmousewheel = v;
            b.data(this, "mousewheel-line-height", y.getLineHeight(this));
            b.data(this, "mousewheel-page-height", y.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var n = q.length; n;) this.removeEventListener(q[--n],
                    v, false);
            else this.onmousewheel = null;
            b.removeData(this, "mousewheel-line-height");
            b.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(n) {
            var n = b(n),
                i = n["offsetParent" in b.fn ? "offsetParent" : "parent"]();
            return i.length || (i = b("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
        },
        getPageHeight: function(n) {
            return b(n).height()
        },
        settings: {
            adjustOldDeltas: true,
            normalizeOffset: true
        }
    };
    b.fn.extend({
        mousewheel: function(b) {
            return b ? this.bind("mousewheel", b) : this.trigger("mousewheel")
        },
        unmousewheel: function(b) {
            return this.unbind("mousewheel", b)
        }
    })
});
(function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b : b(jQuery)
})(function(b) {
    function v(n) {
        var i = n || window.event,
            q = m.call(arguments, 1),
            t = 0,
            s = 0,
            o = 0,
            v = 0,
            A = 0,
            u = 0;
        if (n = b.event.fix(i), n.type = "mousewheel", "detail" in i && (o = -1 * i.detail), "wheelDelta" in i && (o = i.wheelDelta), "wheelDeltaY" in i && (o = i.wheelDeltaY), "wheelDeltaX" in i && (s = -1 * i.wheelDeltaX), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (s = -1 * o, o = 0), t = 0 === o ? s : o, "deltaY" in i && (o = -1 * i.deltaY, t = o),
            "deltaX" in i && (s = i.deltaX, 0 === o && (t = -1 * s)), 0 !== o || 0 !== s) {
            if (1 === i.deltaMode) {
                var z = b.data(this, "mousewheel-line-height");
                t *= z;
                o *= z;
                s *= z
            } else 2 === i.deltaMode && (z = b.data(this, "mousewheel-page-height"), t *= z, o *= z, s *= z);
            if (v = Math.max(Math.abs(o), Math.abs(s)), (!r || r > v) && (r = v, y.settings.adjustOldDeltas && "mousewheel" === i.type && v % 120 === 0 && (r /= 40)), y.settings.adjustOldDeltas && "mousewheel" === i.type && v % 120 === 0 && (t /= 40, s /= 40, o /= 40), t = Math[t >= 1 ? "floor" : "ceil"](t / r), s = Math[s >= 1 ? "floor" : "ceil"](s / r), o = Math[o >= 1 ?
                    "floor" : "ceil"](o / r), y.settings.normalizeOffset && this.getBoundingClientRect) i = this.getBoundingClientRect(), A = n.clientX - i.left, u = n.clientY - i.top;
            return n.deltaX = s, n.deltaY = o, n.deltaFactor = r, n.offsetX = A, n.offsetY = u, n.deltaMode = 0, q.unshift(n, t, s, o), D && clearTimeout(D), D = setTimeout(B, 200), (b.event.dispatch || b.event.handle).apply(this, q)
        }
    }

    function B() {
        r = null
    }
    var D, r, A = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        q = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll",
            "MozMousePixelScroll"
        ],
        m = Array.prototype.slice;
    if (b.event.fixHooks)
        for (var t = A.length; t;) b.event.fixHooks[A[--t]] = b.event.mouseHooks;
    var y = b.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var n = q.length; n;) this.addEventListener(q[--n], v, false);
            else this.onmousewheel = v;
            b.data(this, "mousewheel-line-height", y.getLineHeight(this));
            b.data(this, "mousewheel-page-height", y.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var n = q.length; n;) this.removeEventListener(q[--n],
                    v, false);
            else this.onmousewheel = null;
            b.removeData(this, "mousewheel-line-height");
            b.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(n) {
            var n = b(n),
                i = n["offsetParent" in b.fn ? "offsetParent" : "parent"]();
            return i.length || (i = b("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
        },
        getPageHeight: function(n) {
            return b(n).height()
        },
        settings: {
            adjustOldDeltas: true,
            normalizeOffset: true
        }
    };
    b.fn.extend({
        mousewheel: function(b) {
            return b ? this.bind("mousewheel", b) : this.trigger("mousewheel")
        },
        unmousewheel: function(b) {
            return this.unbind("mousewheel", b)
        }
    })
});
(function(b) {
    "undefined" != typeof module && module.exports ? module.exports = b : b(jQuery, window, document)
})(function(b) {
    (function(v) {
        var B = "undefined" != typeof module && module.exports,
            D = "https:" == document.location.protocol ? "https:" : "http:";
        "function" == typeof define && define.amd || (B ? require("jquery-mousewheel")(b) : b.event.special.mousewheel || b("head").append(decodeURI("%3Cscript src=" + D + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E")));
        v()
    })(function() {
        var v,
            B = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: true,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: true,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: true,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                documentTouchScroll: true,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: true,
                    updateOnImageLoad: "auto",
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: true
                }
            },
            D = 0,
            r = {},
            A = window.attachEvent && !window.addEventListener ? 1 : 0,
            q = false,
            m = "mCSB_dragger_onDrag,mCSB_scrollTools_onDrag,mCS_img_loaded,mCS_disabled,mCS_destroyed,mCS_no_scrollbar,mCS-autoHide,mCS-dir-rtl,mCS_no_scrollbar_y,mCS_no_scrollbar_x,mCS_y_hidden,mCS_x_hidden,mCSB_draggerContainer,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight".split(","),
            t = {
                init: function(a) {
                    var a = b.extend(true, {}, B, a),
                        d = y.call(this);
                    if (a.live) {
                        var c = a.liveSelector || this.selector || ".mCustomScrollbar",
                            e = b(c);
                        if ("off" === a.live) return void i(c);
                        r[c] = setTimeout(function() {
                            e.mCustomScrollbar(a);
                            "once" === a.live && e.length && i(c)
                        }, 500)
                    } else i(c);
                    return a.setWidth = a.set_width ? a.set_width : a.setWidth, a.setHeight = a.set_height ? a.set_height : a.setHeight, a.axis = a.horizontalScroll ? "x" : "yx" === a.axis || "xy" === a.axis || "auto" === a.axis ? "yx" : "x" === a.axis || "horizontal" === a.axis ? "x" : "y", a.scrollInertia =
                        a.scrollInertia > 0 && a.scrollInertia < 17 ? 17 : a.scrollInertia, "object" != typeof a.mouseWheel && 1 == a.mouseWheel && (a.mouseWheel = {
                            enable: true,
                            scrollAmount: "auto",
                            axis: "y",
                            preventDefault: false,
                            deltaFactor: "auto",
                            normalizeDelta: false,
                            invert: false
                        }), a.mouseWheel.scrollAmount = a.mouseWheelPixels ? a.mouseWheelPixels : a.mouseWheel.scrollAmount, a.mouseWheel.normalizeDelta = a.advanced.normalizeMouseWheelDelta ? a.advanced.normalizeMouseWheelDelta : a.mouseWheel.normalizeDelta, a.scrollButtons.scrollType = "stepped" === a.scrollButtons.scrollType ||
                        "pixels" === a.scrollButtons.scrollType || "step" === a.scrollButtons.scrollType || "click" === a.scrollButtons.scrollType ? "stepped" : "stepless", n(a), b(d).each(function() {
                            var c = b(this);
                            if (!c.data("mCS")) {
                                c.data("mCS", {
                                    idx: ++D,
                                    opt: a,
                                    scrollRatio: {
                                        y: null,
                                        x: null
                                    },
                                    overflowed: null,
                                    contentReset: {
                                        y: null,
                                        x: null
                                    },
                                    bindEvents: false,
                                    tweenRunning: false,
                                    sequential: {},
                                    langDir: c.css("direction"),
                                    cbOffsets: null,
                                    trigger: null,
                                    poll: {
                                        size: {
                                            o: 0,
                                            n: 0
                                        },
                                        img: {
                                            o: 0,
                                            n: 0
                                        },
                                        change: {
                                            o: 0,
                                            n: 0
                                        }
                                    }
                                });
                                var d = c.data("mCS"),
                                    f = d.opt,
                                    e = c.data("mcs-axis"),
                                    k = c.data("mcs-scrollbar-position"),
                                    j = c.data("mcs-theme");
                                e && (f.axis = e);
                                k && (f.scrollbarPosition = k);
                                j && (f.theme = j, n(f));
                                var k = b(this),
                                    e = k.data("mCS"),
                                    j = e.opt,
                                    p = j.autoExpandScrollbar ? " " + m[1] + "_expand" : "",
                                    p = ["<div id='mCSB_" + e.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + e.idx + "_scrollbar mCS-" + j.theme + " mCSB_scrollTools_vertical" + p + "'><div class='" + m[12] + "'><div id='mCSB_" + e.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
                                        "<div id='mCSB_" + e.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + e.idx + "_scrollbar mCS-" + j.theme + " mCSB_scrollTools_horizontal" + p + "'><div class='" + m[12] + "'><div id='mCSB_" + e.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"
                                    ],
                                    i = "yx" === j.axis ? "mCSB_vertical_horizontal" : "x" === j.axis ? "mCSB_horizontal" : "mCSB_vertical",
                                    p = "yx" === j.axis ? p[0] + p[1] : "x" === j.axis ?
                                    p[1] : p[0],
                                    $ = "yx" === j.axis ? "<div id='mCSB_" + e.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                                    o = j.autoHideScrollbar ? " " + m[6] : "",
                                    K = "x" !== j.axis && "rtl" === e.langDir ? " " + m[7] : "";
                                j.setWidth && k.css("width", j.setWidth);
                                j.setHeight && k.css("height", j.setHeight);
                                j.setLeft = "y" !== j.axis && "rtl" === e.langDir ? "989999px" : j.setLeft;
                                k.addClass("mCustomScrollbar _mCS_" + e.idx + o + K).wrapInner("<div id='mCSB_" + e.idx + "' class='mCustomScrollBox mCS-" + j.theme + " " + i + "'><div id='mCSB_" + e.idx + "_container' class='mCSB_container' style='position:relative; top:" +
                                    j.setTop + "; left:" + j.setLeft + ";' dir=" + e.langDir + " /></div>");
                                i = b("#mCSB_" + e.idx);
                                o = b("#mCSB_" + e.idx + "_container");
                                "y" === j.axis || j.advanced.autoExpandHorizontalScroll || o.css("width", W(o));
                                "outside" === j.scrollbarPosition ? ("static" === k.css("position") && k.css("position", "relative"), k.css("overflow", "visible"), i.addClass("mCSB_outside").after(p)) : (i.addClass("mCSB_inside").append(p), o.wrap($));
                                j = b(this).data("mCS");
                                k = j.opt;
                                j = b(".mCSB_" + j.idx + "_scrollbar:first");
                                p = Q(k.scrollButtons.tabindex) ? "tabindex='" +
                                    k.scrollButtons.tabindex + "'" : "";
                                p = ["<a href='#' class='" + m[13] + "' oncontextmenu='return false;' " + p + " />", "<a href='#' class='" + m[14] + "' oncontextmenu='return false;' " + p + " />", "<a href='#' class='" + m[15] + "' oncontextmenu='return false;' " + p + " />", "<a href='#' class='" + m[16] + "' oncontextmenu='return false;' " + p + " />"];
                                p = ["x" === k.axis ? p[2] : p[0], "x" === k.axis ? p[3] : p[1], p[2], p[3]];
                                k.scrollButtons.enable && j.prepend(p[0]).append(p[1]).next(".mCSB_scrollTools").prepend(p[2]).append(p[3]);
                                e = [b("#mCSB_" + e.idx +
                                    "_dragger_vertical"), b("#mCSB_" + e.idx + "_dragger_horizontal")];
                                e[0].css("min-height", e[0].height());
                                e[1].css("min-width", e[1].width());
                                d && f.callbacks.onCreate && "function" == typeof f.callbacks.onCreate && f.callbacks.onCreate.call(this);
                                b("#mCSB_" + d.idx + "_container img:not(." + m[2] + ")").addClass(m[2]);
                                t.update.call(null, c)
                            }
                        })
                },
                update: function(a, d) {
                    var c = a || y.call(this);
                    return b(c).each(function() {
                        var a = b(this);
                        if (a.data("mCS")) {
                            var c = a.data("mCS"),
                                g = c.opt,
                                f = b("#mCSB_" + c.idx + "_container"),
                                h = b("#mCSB_" + c.idx),
                                k = [b("#mCSB_" + c.idx + "_dragger_vertical"), b("#mCSB_" + c.idx + "_dragger_horizontal")];
                            if (f.length) {
                                c.tweenRunning && H(a);
                                d && c && g.callbacks.onBeforeUpdate && "function" == typeof g.callbacks.onBeforeUpdate && g.callbacks.onBeforeUpdate.call(this);
                                a.hasClass(m[3]) && a.removeClass(m[3]);
                                a.hasClass(m[4]) && a.removeClass(m[4]);
                                h.css("max-height", "none");
                                h.height() !== a.height() && h.css("max-height", a.height());
                                var j = b(this).data("mCS"),
                                    h = j.opt,
                                    j = b("#mCSB_" + j.idx + "_container");
                                if (h.advanced.autoExpandHorizontalScroll &&
                                    "y" !== h.axis) {
                                    j.css({
                                        width: "auto",
                                        "min-width": 0,
                                        "overflow-x": "scroll"
                                    });
                                    var p = Math.ceil(j[0].scrollWidth);
                                    3 === h.advanced.autoExpandHorizontalScroll || 2 !== h.advanced.autoExpandHorizontalScroll && p > j.parent().width() ? j.css({
                                        width: p,
                                        "min-width": "100%",
                                        "overflow-x": "inherit"
                                    }) : j.css({
                                        "overflow-x": "inherit",
                                        position: "absolute"
                                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                        width: Math.ceil(j[0].getBoundingClientRect().right + 0.4) - Math.floor(j[0].getBoundingClientRect().left),
                                        "min-width": "100%",
                                        position: "relative"
                                    }).unwrap()
                                }
                                "y" === g.axis || g.advanced.autoExpandHorizontalScroll || f.css("width", W(f));
                                var p = b(this).data("mCS"),
                                    j = b("#mCSB_" + p.idx),
                                    i = b("#mCSB_" + p.idx + "_container"),
                                    h = null == p.overflowed ? i.height() : i.outerHeight(false),
                                    p = null == p.overflowed ? i.width() : i.outerWidth(false),
                                    n = i[0].scrollHeight,
                                    i = i[0].scrollWidth,
                                    j = (n > h && (h = n), i > p && (p = i), [h > j.height(), p > j.width()]);
                                c.overflowed = j;
                                X.call(this);
                                g.autoDraggerLength && (h = b(this).data("mCS"), j = b("#mCSB_" + h.idx), p = b("#mCSB_" +
                                    h.idx + "_container"), h = [b("#mCSB_" + h.idx + "_dragger_vertical"), b("#mCSB_" + h.idx + "_dragger_horizontal")], j = [j.height() / p.outerHeight(false), j.width() / p.outerWidth(false)], j = [parseInt(h[0].css("min-height")), Math.round(j[0] * h[0].parent().height()), parseInt(h[1].css("min-width")), Math.round(j[1] * h[1].parent().width())], p = A && j[3] < j[2] ? j[2] : j[3], h[0].css({
                                    height: A && j[1] < j[0] ? j[0] : j[1],
                                    "max-height": h[0].parent().height() - 10
                                }).find(".mCSB_dragger_bar").css({
                                    "line-height": j[0] + "px"
                                }), h[1].css({
                                    width: p,
                                    "max-width": h[1].parent().width() -
                                        10
                                }));
                                h = b(this).data("mCS");
                                p = b("#mCSB_" + h.idx);
                                i = b("#mCSB_" + h.idx + "_container");
                                j = [b("#mCSB_" + h.idx + "_dragger_vertical"), b("#mCSB_" + h.idx + "_dragger_horizontal")];
                                p = [i.outerHeight(false) - p.height(), i.outerWidth(false) - p.width()];
                                j = [p[0] / (j[0].parent().height() - j[0].height()), p[1] / (j[1].parent().width() - j[1].width())];
                                h.scrollRatio = {
                                    y: j[0],
                                    x: j[1]
                                };
                                o.call(this);
                                f = [Math.abs(f[0].offsetTop), Math.abs(f[0].offsetLeft)];
                                "x" !== g.axis && (c.overflowed[0] ? k[0].height() > k[0].parent().height() ? s.call(this) : (E(a,
                                    f[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    }), c.contentReset.y = null) : (s.call(this), "y" === g.axis ? M.call(this) : "yx" === g.axis && c.overflowed[1] && E(a, f[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                })));
                                "y" !== g.axis && (c.overflowed[1] ? k[1].width() > k[1].parent().width() ? s.call(this) : (E(a, f[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                }), c.contentReset.x = null) : (s.call(this), "x" === g.axis ? M.call(this) : "yx" === g.axis && c.overflowed[0] && E(a, f[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                })));
                                d && c && (2 === d && g.callbacks.onImageLoad &&
                                    "function" == typeof g.callbacks.onImageLoad ? g.callbacks.onImageLoad.call(this) : 3 === d && g.callbacks.onSelectorChange && "function" == typeof g.callbacks.onSelectorChange ? g.callbacks.onSelectorChange.call(this) : g.callbacks.onUpdate && "function" == typeof g.callbacks.onUpdate && g.callbacks.onUpdate.call(this));
                                T.call(this)
                            }
                        }
                    })
                },
                scrollTo: function(a, d) {
                    if ("undefined" != typeof a && null != a) {
                        var c = y.call(this);
                        return b(c).each(function() {
                            var c = b(this);
                            if (c.data("mCS")) {
                                var l = c.data("mCS"),
                                    g = l.opt,
                                    f = b.extend(true, {}, {
                                        trigger: "external",
                                        scrollInertia: g.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: false,
                                        timeout: 60,
                                        callbacks: true,
                                        onStart: true,
                                        onUpdate: true,
                                        onComplete: true
                                    }, d),
                                    h = U.call(this, a),
                                    k = f.scrollInertia > 0 && f.scrollInertia < 17 ? 17 : f.scrollInertia;
                                h[0] = Y.call(this, h[0], "y");
                                h[1] = Y.call(this, h[1], "x");
                                f.moveDragger && (h[0] *= l.scrollRatio.y, h[1] *= l.scrollRatio.x);
                                f.dur = aa() ? 0 : k;
                                setTimeout(function() {
                                    null !== h[0] && "undefined" != typeof h[0] && "x" !== g.axis && l.overflowed[0] && (f.dir = "y", f.overwrite = "all", E(c, h[0].toString(),
                                        f));
                                    null !== h[1] && "undefined" != typeof h[1] && "y" !== g.axis && l.overflowed[1] && (f.dir = "x", f.overwrite = "none", E(c, h[1].toString(), f))
                                }, f.timeout)
                            }
                        })
                    }
                },
                stop: function() {
                    var a = y.call(this);
                    return b(a).each(function() {
                        var a = b(this);
                        a.data("mCS") && H(a)
                    })
                },
                disable: function(a) {
                    var d = y.call(this);
                    return b(d).each(function() {
                        var c = b(this);
                        c.data("mCS") && (c.data("mCS"), T.call(this, "remove"), M.call(this), a && s.call(this), X.call(this, true), c.addClass(m[3]))
                    })
                },
                destroy: function() {
                    var a = y.call(this);
                    return b(a).each(function() {
                        var d =
                            b(this);
                        if (d.data("mCS")) {
                            var c = d.data("mCS"),
                                e = c.opt,
                                l = b("#mCSB_" + c.idx),
                                g = b("#mCSB_" + c.idx + "_container"),
                                f = b(".mCSB_" + c.idx + "_scrollbar");
                            e.live && i(e.liveSelector || b(a).selector);
                            T.call(this, "remove");
                            M.call(this);
                            s.call(this);
                            d.removeData("mCS");
                            J(this, "mcs");
                            f.remove();
                            g.find("img." + m[2]).removeClass(m[2]);
                            l.replaceWith(g.contents());
                            d.removeClass("mCustomScrollbar _mCS_" + c.idx + " " + m[6] + " " + m[7] + " " + m[5] + " " + m[3]).addClass(m[4])
                        }
                    })
                }
            },
            y = function() {
                return "object" != typeof b(this) || b(this).length <
                    1 ? ".mCustomScrollbar" : this
            },
            n = function(a) {
                a.autoDraggerLength = b.inArray(a.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) > -1 ? false : a.autoDraggerLength;
                a.autoExpandScrollbar = b.inArray(a.theme, "rounded-dots,rounded-dots-dark,3d,3d-dark,3d-thick,3d-thick-dark,inset,inset-dark,inset-2,inset-2-dark,inset-3,inset-3-dark".split(",")) > -1 ? false : a.autoExpandScrollbar;
                a.scrollButtons.enable = b.inArray(a.theme, ["minimal", "minimal-dark"]) > -1 ? false : a.scrollButtons.enable;
                a.autoHideScrollbar =
                    b.inArray(a.theme, ["minimal", "minimal-dark"]) > -1 ? true : a.autoHideScrollbar;
                a.scrollbarPosition = b.inArray(a.theme, ["minimal", "minimal-dark"]) > -1 ? "outside" : a.scrollbarPosition
            },
            i = function(a) {
                r[a] && (clearTimeout(r[a]), J(r, a))
            },
            W = function(a) {
                var d = [a[0].scrollWidth, Math.max.apply(Math, a.children().map(function() {
                        return b(this).outerWidth(true)
                    }).get())],
                    a = a.parent().width();
                return d[0] > a ? d[0] : d[1] > a ? d[1] : "100%"
            },
            C = function(a, b, c) {
                var c = c ? m[0] + "_expanded" : "",
                    e = a.closest(".mCSB_scrollTools");
                "active" ===
                b ? (a.toggleClass(m[0] + " " + c), e.toggleClass(m[1]), a[0]._draggable = a[0]._draggable ? 0 : 1) : a[0]._draggable || ("hide" === b ? (a.removeClass(m[0]), e.removeClass(m[1])) : (a.addClass(m[0]), e.addClass(m[1])))
            },
            s = function() {
                var a = b(this),
                    d = a.data("mCS"),
                    c = d.opt,
                    e = b("#mCSB_" + d.idx),
                    l = b("#mCSB_" + d.idx + "_container"),
                    g = [b("#mCSB_" + d.idx + "_dragger_vertical"), b("#mCSB_" + d.idx + "_dragger_horizontal")];
                if (H(a), ("x" !== c.axis && !d.overflowed[0] || "y" === c.axis && d.overflowed[0]) && (g[0].add(l).css("top", 0), E(a, "_resetY")), "y" !==
                    c.axis && !d.overflowed[1] || "x" === c.axis && d.overflowed[1]) c = dx = 0, "rtl" === d.langDir && (c = e.width() - l.outerWidth(false), dx = Math.abs(c / d.scrollRatio.x)), l.css("left", c), g[1].css("left", dx), E(a, "_resetX")
            },
            o = function() {
                function a() {
                    l = setTimeout(function() {
                        b.event.special.mousewheel ? (clearTimeout(l), ba.call(d[0])) : a()
                    }, 100)
                }
                var d = b(this),
                    c = d.data("mCS"),
                    e = c.opt;
                if (!c.bindEvents) {
                    if (z.call(this), e.contentTouchScroll && ca.call(this), da.call(this), e.mouseWheel.enable) {
                        var l;
                        a()
                    }
                    ea.call(this);
                    fa.call(this);
                    e.advanced.autoScrollOnFocus &&
                        ga.call(this);
                    e.scrollButtons.enable && ha.call(this);
                    e.keyboard.enable && ia.call(this);
                    c.bindEvents = true
                }
            },
            M = function() {
                var a = b(this),
                    d = a.data("mCS"),
                    c = d.opt,
                    e = "mCS_" + d.idx,
                    l = ".mCSB_" + d.idx + "_scrollbar",
                    l = b("#mCSB_" + d.idx + ",#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper," + l + " ." + m[12] + ",#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal," + l + ">a"),
                    g = b("#mCSB_" + d.idx + "_container");
                c.advanced.releaseDraggableSelectors && l.add(b(c.advanced.releaseDraggableSelectors));
                c.advanced.extraDraggableSelectors &&
                    l.add(b(c.advanced.extraDraggableSelectors));
                d.bindEvents && (b(document).add(b(!N() || top.document)).unbind("." + e), l.each(function() {
                    b(this).unbind("." + e)
                }), clearTimeout(a[0]._focusTimeout), J(a[0], "_focusTimeout"), clearTimeout(d.sequential.step), J(d.sequential, "step"), clearTimeout(g[0].onCompleteTimeout), J(g[0], "onCompleteTimeout"), d.bindEvents = false)
            },
            X = function(a) {
                var d = b(this),
                    c = d.data("mCS"),
                    e = c.opt,
                    l = b("#mCSB_" + c.idx + "_container_wrapper"),
                    l = l.length ? l : b("#mCSB_" + c.idx + "_container"),
                    g = [b("#mCSB_" +
                        c.idx + "_scrollbar_vertical"), b("#mCSB_" + c.idx + "_scrollbar_horizontal")],
                    f = [g[0].find(".mCSB_dragger"), g[1].find(".mCSB_dragger")];
                "x" !== e.axis && (c.overflowed[0] && !a ? (g[0].add(f[0]).add(g[0].children("a")).css("display", "block"), l.removeClass(m[8] + " " + m[10])) : (e.alwaysShowScrollbar ? (2 !== e.alwaysShowScrollbar && f[0].css("display", "none"), l.removeClass(m[10])) : (g[0].css("display", "none"), l.addClass(m[10])), l.addClass(m[8])));
                "y" !== e.axis && (c.overflowed[1] && !a ? (g[1].add(f[1]).add(g[1].children("a")).css("display",
                    "block"), l.removeClass(m[9] + " " + m[11])) : (e.alwaysShowScrollbar ? (2 !== e.alwaysShowScrollbar && f[1].css("display", "none"), l.removeClass(m[11])) : (g[1].css("display", "none"), l.addClass(m[11])), l.addClass(m[9])));
                c.overflowed[0] || c.overflowed[1] ? d.removeClass(m[5]) : d.addClass(m[5])
            },
            u = function(a) {
                var d = a.type,
                    c = a.target.ownerDocument !== document ? [b(frameElement).offset().top, b(frameElement).offset().left] : null,
                    e = N() && a.target.ownerDocument !== top.document ? [b(a.view.frameElement).offset().top, b(a.view.frameElement).offset().left] : [0, 0];
                switch (d) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return c ? [a.originalEvent.pageY - c[0] + e[0], a.originalEvent.pageX - c[1] + e[1], false] : [a.originalEvent.pageY, a.originalEvent.pageX, false];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        return d = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0], c = a.originalEvent.touches.length || a.originalEvent.changedTouches.length, a.target.ownerDocument !== document ? [d.screenY,
                            d.screenX, c > 1
                        ] : [d.pageY, d.pageX, c > 1];
                    default:
                        return c ? [a.pageY - c[0] + e[0], a.pageX - c[1] + e[1], false] : [a.pageY, a.pageX, false]
                }
            },
            z = function() {
                function a(a) {
                    var c = p.find("iframe");
                    c.length && c.css("pointer-events", a ? "auto" : "none")
                }

                function d(a, b, d, e) {
                    if (p[0].idleTimer = h.scrollInertia < 233 ? 250 : 0, c.attr("id") === j[1]) var k = "x",
                        a = (c[0].offsetLeft - b + e) * f.scrollRatio.x;
                    else k = "y", a = (c[0].offsetTop - a + d) * f.scrollRatio.y;
                    E(g, a.toString(), {
                        dir: k,
                        drag: true
                    })
                }
                var c, e, l, g = b(this),
                    f = g.data("mCS"),
                    h = f.opt,
                    k = "mCS_" + f.idx,
                    j = ["mCSB_" + f.idx + "_dragger_vertical", "mCSB_" + f.idx + "_dragger_horizontal"],
                    p = b("#mCSB_" + f.idx + "_container"),
                    i = b("#" + j[0] + ",#" + j[1]),
                    n = h.advanced.releaseDraggableSelectors ? i.add(b(h.advanced.releaseDraggableSelectors)) : i,
                    m = h.advanced.extraDraggableSelectors ? b(!N() || top.document).add(b(h.advanced.extraDraggableSelectors)) : b(!N() || top.document);
                i.bind("mousedown." + k + " touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, function(d) {
                    if (d.stopImmediatePropagation(), d.preventDefault(), !(d.which && 1 !== d.which)) {
                        q =
                            true;
                        A && (document.onselectstart = function() {
                            return false
                        });
                        a(false);
                        H(g);
                        c = b(this);
                        var f = c.offset(),
                            j = u(d)[0] - f.top,
                            d = u(d)[1] - f.left,
                            k = c.height() + f.top,
                            f = c.width() + f.left;
                        k > j && j > 0 && f > d && d > 0 && (e = j, l = d);
                        C(c, "active", h.autoExpandScrollbar)
                    }
                }).bind("touchmove." + k, function(a) {
                    a.stopImmediatePropagation();
                    a.preventDefault();
                    var b = c.offset(),
                        f = u(a)[0] - b.top,
                        a = u(a)[1] - b.left;
                    d(e, l, f, a)
                });
                b(document).add(m).bind("mousemove." + k + " pointermove." + k + " MSPointerMove." + k, function(a) {
                    if (c) {
                        var b = c.offset(),
                            f = u(a)[0] -
                            b.top,
                            a = u(a)[1] - b.left;
                        e === f && l === a || d(e, l, f, a)
                    }
                }).add(n).bind("mouseup." + k + " touchend." + k + " pointerup." + k + " MSPointerUp." + k, function() {
                    c && (C(c, "active", h.autoExpandScrollbar), c = null);
                    q = false;
                    A && (document.onselectstart = null);
                    a(true)
                })
            },
            ca = function() {
                function a(a) {
                    if (!R(a) || q || u(a)[2]) return void(v = 0);
                    v = 1;
                    s = 0;
                    w = 0;
                    f = 1;
                    r.removeClass("mCS_touch_action");
                    var c = y.offset();
                    h = u(a)[0] - c.top;
                    k = u(a)[1] - c.left;
                    B = [u(a)[0], u(a)[1]]
                }

                function d(a) {
                    if (R(a) && !q && !u(a)[2] && (I.documentTouchScroll || a.preventDefault(),
                            a.stopImmediatePropagation(), (!w || s) && f)) {
                        n = P();
                        var c = S.offset(),
                            b = u(a)[0] - c.top,
                            c = u(a)[1] - c.left;
                        if (A.push(b), C.push(c), B[2] = Math.abs(u(a)[0] - B[0]), B[3] = Math.abs(u(a)[1] - B[1]), F.overflowed[0]) var d = z[0].parent().height() - z[0].height(),
                            d = h - b > 0 && b - h > -(d * F.scrollRatio.y) && (2 * B[3] < B[2] || "yx" === I.axis);
                        if (F.overflowed[1]) var e = z[1].parent().width() - z[1].width(),
                            e = k - c > 0 && c - k > -(e * F.scrollRatio.x) && (2 * B[2] < B[3] || "yx" === I.axis);
                        d || e ? (M || a.preventDefault(), s = 1) : (w = 1, r.addClass("mCS_touch_action"));
                        M && a.preventDefault();
                        x = "yx" === I.axis ? [h - b, k - c] : "x" === I.axis ? [null, k - c] : [h - b, null];
                        y[0].idleTimer = 250;
                        F.overflowed[0] && g(x[0], D, "mcsLinearOut", "y", "all", true);
                        F.overflowed[1] && g(x[1], D, "mcsLinearOut", "x", G, true)
                    }
                }

                function c(a) {
                    if (!R(a) || q || u(a)[2]) return void(v = 0);
                    v = 1;
                    a.stopImmediatePropagation();
                    H(r);
                    i = P();
                    var c = S.offset();
                    j = u(a)[0] - c.top;
                    p = u(a)[1] - c.left;
                    A = [];
                    C = []
                }

                function e(a) {
                    if (R(a) && !q && !u(a)[2]) {
                        f = 0;
                        a.stopImmediatePropagation();
                        s = 0;
                        w = 0;
                        m = P();
                        var c = S.offset(),
                            b = u(a)[0] - c.top,
                            c = u(a)[1] - c.left;
                        if (!(m - n > 30)) {
                            o = 1E3 /
                                (m - i);
                            var d = (a = 2.5 > o) ? [A[A.length - 2], C[C.length - 2]] : [0, 0];
                            K = a ? [b - d[0], c - d[1]] : [b - j, c - p];
                            b = [Math.abs(K[0]), Math.abs(K[1])];
                            o = a ? [Math.abs(K[0] / 4), Math.abs(K[1] / 4)] : [o, o];
                            a = [Math.abs(y[0].offsetTop) - K[0] * l(b[0] / o[0], o[0]), Math.abs(y[0].offsetLeft) - K[1] * l(b[1] / o[1], o[1])];
                            x = "yx" === I.axis ? [a[0], a[1]] : "x" === I.axis ? [null, a[1]] : [a[0], null];
                            t = [4 * b[0] + I.scrollInertia, 4 * b[1] + I.scrollInertia];
                            a = parseInt(I.contentTouchScroll) || 0;
                            x[0] = b[0] > a ? x[0] : 0;
                            x[1] = b[1] > a ? x[1] : 0;
                            F.overflowed[0] && g(x[0], t[0], "mcsEaseOut", "y",
                                G, false);
                            F.overflowed[1] && g(x[1], t[1], "mcsEaseOut", "x", G, false)
                        }
                    }
                }

                function l(a, c) {
                    var b = [1.5 * c, 2 * c, c / 1.5, c / 2];
                    return a > 90 ? c > 4 ? b[0] : b[3] : a > 60 ? c > 3 ? b[3] : b[2] : a > 30 ? c > 8 ? b[1] : c > 6 ? b[0] : c > 4 ? c : b[2] : c > 8 ? c : b[3]
                }

                function g(a, c, b, d, e, f) {
                    a && E(r, a.toString(), {
                        dur: c,
                        scrollEasing: b,
                        dir: d,
                        overwrite: e,
                        drag: f
                    })
                }
                var f, h, k, j, p, i, n, m, K, o, x, t, s, w, r = b(this),
                    F = r.data("mCS"),
                    I = F.opt,
                    L = "mCS_" + F.idx,
                    S = b("#mCSB_" + F.idx),
                    y = b("#mCSB_" + F.idx + "_container"),
                    z = [b("#mCSB_" + F.idx + "_dragger_vertical"), b("#mCSB_" + F.idx + "_dragger_horizontal")],
                    A = [],
                    C = [],
                    D = 0,
                    G = "yx" === I.axis ? "none" : "all",
                    B = [],
                    J = y.find("iframe"),
                    O = ["touchstart." + L + " pointerdown." + L + " MSPointerDown." + L, "touchmove." + L + " pointermove." + L + " MSPointerMove." + L, "touchend." + L + " pointerup." + L + " MSPointerUp." + L],
                    M = void 0 !== document.body.style.touchAction;
                y.bind(O[0], function(c) {
                    a(c)
                }).bind(O[1], function(a) {
                    d(a)
                });
                S.bind(O[0], function(a) {
                    c(a)
                }).bind(O[2], function(a) {
                    e(a)
                });
                J.length && J.each(function() {
                    b(this).load(function() {
                        N(this) && b(this.contentDocument || this.contentWindow.document).bind(O[0],
                            function(b) {
                                a(b);
                                c(b)
                            }).bind(O[1], function(a) {
                            d(a)
                        }).bind(O[2], function(a) {
                            e(a)
                        })
                    })
                })
            },
            da = function() {
                function a(a, b, e) {
                    g.type = e && d ? "stepped" : "stepless";
                    g.scrollAmount = 10;
                    V(c, a, b, "mcsLinearOut", e ? 60 : null)
                }
                var d, c = b(this),
                    e = c.data("mCS"),
                    l = e.opt,
                    g = e.sequential,
                    f = "mCS_" + e.idx,
                    h = b("#mCSB_" + e.idx + "_container"),
                    k = h.parent();
                h.bind("mousedown." + f, function() {
                    v || d || (d = 1, q = true)
                }).add(document).bind("mousemove." + f, function(c) {
                    if (!v && d && (window.getSelection ? window.getSelection().toString() : document.selection &&
                            "Control" != document.selection.type && document.selection.createRange().text)) {
                        var b = h.offset(),
                            f = u(c)[0] - b.top + h[0].offsetTop,
                            c = u(c)[1] - b.left + h[0].offsetLeft;
                        f > 0 && f < k.height() && c > 0 && c < k.width() ? g.step && a("off", null, "stepped") : ("x" !== l.axis && e.overflowed[0] && (0 > f ? a("on", 38) : f > k.height() && a("on", 40)), "y" !== l.axis && e.overflowed[1] && (0 > c ? a("on", 37) : c > k.width() && a("on", 39)))
                    }
                }).bind("mouseup." + f + " dragend." + f, function() {
                    v || (d && (d = 0, a("off", null)), q = false)
                })
            },
            ba = function() {
                function a(a, j) {
                    H(d);
                    var h = d,
                        l =
                        a.target,
                        i = l.nodeName.toLowerCase(),
                        h = h.data("mCS").opt.mouseWheel.disableOver,
                        n = ["select", "textarea"];
                    if (!(b.inArray(i, h) > -1 && (!(b.inArray(i, n) > -1) || b(l).is(":focus")))) {
                        h = "auto" !== e.mouseWheel.deltaFactor ? parseInt(e.mouseWheel.deltaFactor) : A && a.deltaFactor < 100 ? 100 : a.deltaFactor || 100;
                        l = e.scrollInertia;
                        if ("x" === e.axis || "x" === e.mouseWheel.axis) var i = "x",
                            h = [Math.round(h * c.scrollRatio.x), parseInt(e.mouseWheel.scrollAmount)],
                            h = "auto" !== e.mouseWheel.scrollAmount ? h[1] : h[0] >= g.width() ? 0.9 * g.width() : h[0],
                            n = Math.abs(b("#mCSB_" + c.idx + "_container")[0].offsetLeft),
                            m = f[1][0].offsetLeft,
                            o = f[1].parent().width() - f[1].width(),
                            x = a.deltaX || a.deltaY || j;
                        else i = "y", h = [Math.round(h * c.scrollRatio.y), parseInt(e.mouseWheel.scrollAmount)], h = "auto" !== e.mouseWheel.scrollAmount ? h[1] : h[0] >= g.height() ? 0.9 * g.height() : h[0], n = Math.abs(b("#mCSB_" + c.idx + "_container")[0].offsetTop), m = f[0][0].offsetTop, o = f[0].parent().height() - f[0].height(), x = a.deltaY || j;
                        "y" === i && !c.overflowed[0] || "x" === i && !c.overflowed[1] || ((e.mouseWheel.invert ||
                            a.webkitDirectionInvertedFromDevice) && (x = -x), e.mouseWheel.normalizeDelta && (x = 0 > x ? -1 : 1), (x > 0 && 0 !== m || 0 > x && m !== o || e.mouseWheel.preventDefault) && (a.stopImmediatePropagation(), a.preventDefault()), a.deltaFactor < 2 && !e.mouseWheel.normalizeDelta && (h = a.deltaFactor, l = 17), E(d, (n - x * h).toString(), {
                            dir: i,
                            dur: l
                        }))
                    }
                }
                if (b(this).data("mCS")) {
                    var d = b(this),
                        c = d.data("mCS"),
                        e = c.opt,
                        l = "mCS_" + c.idx,
                        g = b("#mCSB_" + c.idx),
                        f = [b("#mCSB_" + c.idx + "_dragger_vertical"), b("#mCSB_" + c.idx + "_dragger_horizontal")],
                        h = b("#mCSB_" + c.idx + "_container").find("iframe");
                    h.length && h.each(function() {
                        b(this).load(function() {
                            N(this) && b(this.contentDocument || this.contentWindow.document).bind("mousewheel." + l, function(c, b) {
                                a(c, b)
                            })
                        })
                    });
                    g.bind("mousewheel." + l, function(c, b) {
                        a(c, b)
                    })
                }
            },
            N = function(a) {
                var b = null;
                if (a) {
                    try {
                        var c = a.contentDocument || a.contentWindow.document,
                            b = c.body.innerHTML
                    } catch (e) {}
                    return null !== b
                }
                try {
                    c = top.document, b = c.body.innerHTML
                } catch (l) {}
                return null !== b
            },
            ea = function() {
                var a, d = b(this),
                    c = d.data("mCS"),
                    e = "mCS_" + c.idx,
                    l = b("#mCSB_" + c.idx + "_container"),
                    g =
                    l.parent();
                b(".mCSB_" + c.idx + "_scrollbar ." + m[12]).bind("mousedown." + e + " touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, function(c) {
                    q = true;
                    b(c.target).hasClass("mCSB_dragger") || (a = 1)
                }).bind("touchend." + e + " pointerup." + e + " MSPointerUp." + e, function() {
                    q = false
                }).bind("click." + e, function(e) {
                    if (a && (a = 0, b(e.target).hasClass(m[12]) || b(e.target).hasClass("mCSB_draggerRail"))) {
                        H(d);
                        var h = b(this),
                            k = h.find(".mCSB_dragger");
                        if (h.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!c.overflowed[1]) return;
                            h = "x";
                            e = e.pageX > k.offset().left ? -1 : 1;
                            e = Math.abs(l[0].offsetLeft) - 0.9 * e * g.width()
                        } else {
                            if (!c.overflowed[0]) return;
                            h = "y";
                            e = e.pageY > k.offset().top ? -1 : 1;
                            e = Math.abs(l[0].offsetTop) - 0.9 * e * g.height()
                        }
                        E(d, e.toString(), {
                            dir: h,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            },
            ga = function() {
                var a = b(this),
                    d = a.data("mCS"),
                    c = d.opt,
                    e = "mCS_" + d.idx,
                    l = b("#mCSB_" + d.idx + "_container"),
                    g = l.parent();
                l.bind("focusin." + e, function() {
                    var e = b(document.activeElement),
                        d = l.find(".mCustomScrollBox").length;
                    e.is(c.advanced.autoScrollOnFocus) && (H(a),
                        clearTimeout(a[0]._focusTimeout), a[0]._focusTimer = d ? 17 * d : 0, a[0]._focusTimeout = setTimeout(function() {
                                var b = [G(e)[0], G(e)[1]],
                                    d = [l[0].offsetTop, l[0].offsetLeft],
                                    d = [d[0] + b[0] >= 0 && d[0] + b[0] < g.height() - e.outerHeight(false), d[1] + b[1] >= 0 && d[0] + b[1] < g.width() - e.outerWidth(false)],
                                    h = "yx" !== c.axis || d[0] || d[1] ? "all" : "none";
                                "x" === c.axis || d[0] || E(a, b[0].toString(), {
                                    dir: "y",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: h,
                                    dur: 0
                                });
                                "y" === c.axis || d[1] || E(a, b[1].toString(), {
                                    dir: "x",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: h,
                                    dur: 0
                                })
                            },
                            a[0]._focusTimer))
                })
            },
            fa = function() {
                var a = b(this).data("mCS"),
                    d = "mCS_" + a.idx,
                    c = b("#mCSB_" + a.idx + "_container").parent();
                c.bind("scroll." + d, function() {
                    (0 !== c.scrollTop() || 0 !== c.scrollLeft()) && b(".mCSB_" + a.idx + "_scrollbar").css("visibility", "hidden")
                })
            },
            ha = function() {
                var a = b(this),
                    d = a.data("mCS"),
                    c = d.opt,
                    e = d.sequential,
                    l = "mCS_" + d.idx;
                b(".mCSB_" + d.idx + "_scrollbar>a").bind("mousedown." + l + " touchstart." + l + " pointerdown." + l + " MSPointerDown." + l + " mouseup." + l + " touchend." + l + " pointerup." + l + " MSPointerUp." +
                    l + " mouseout." + l + " pointerout." + l + " MSPointerOut." + l + " click." + l,
                    function(g) {
                        function f(b, d) {
                            e.scrollAmount = c.scrollButtons.scrollAmount;
                            V(a, b, d)
                        }
                        if (g.preventDefault(), !(g.which && 1 !== g.which)) {
                            var h = b(this).attr("class");
                            switch (e.type = c.scrollButtons.scrollType, g.type) {
                                case "mousedown":
                                case "touchstart":
                                case "pointerdown":
                                case "MSPointerDown":
                                    if ("stepped" === e.type) break;
                                    q = true;
                                    d.tweenRunning = false;
                                    f("on", h);
                                    break;
                                case "mouseup":
                                case "touchend":
                                case "pointerup":
                                case "MSPointerUp":
                                case "mouseout":
                                case "pointerout":
                                case "MSPointerOut":
                                    if ("stepped" ===
                                        e.type) break;
                                    q = false;
                                    e.dir && f("off", h);
                                    break;
                                case "click":
                                    if ("stepped" !== e.type || d.tweenRunning) break;
                                    f("on", h)
                            }
                        }
                    })
            },
            ia = function() {
                function a(a) {
                    function f(a, b) {
                        l.type = e.keyboard.scrollType;
                        l.scrollAmount = e.keyboard.scrollAmount;
                        "stepped" === l.type && c.tweenRunning || V(d, a, b)
                    }
                    switch (a.type) {
                        case "blur":
                            c.tweenRunning && l.dir && f("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var g = a.keyCode ? a.keyCode : a.which,
                                i = "on";
                            if ("x" !== e.axis && (38 === g || 40 === g) || "y" !== e.axis && (37 === g || 39 === g)) {
                                if ((38 === g || 40 === g) &&
                                    !c.overflowed[0] || (37 === g || 39 === g) && !c.overflowed[1]) break;
                                "keyup" === a.type && (i = "off");
                                b(document.activeElement).is(j) || (a.preventDefault(), a.stopImmediatePropagation(), f(i, g))
                            } else if (33 === g || 34 === g) {
                                if ((c.overflowed[0] || c.overflowed[1]) && (a.preventDefault(), a.stopImmediatePropagation()), "keyup" === a.type) H(d), g = 34 === g ? -1 : 1, "x" === e.axis || "yx" === e.axis && c.overflowed[1] && !c.overflowed[0] ? (a = "x", g = Math.abs(h[0].offsetLeft) - 0.9 * g * k.width()) : (a = "y", g = Math.abs(h[0].offsetTop) - 0.9 * g * k.height()), E(d, g.toString(), {
                                    dir: a,
                                    scrollEasing: "mcsEaseInOut"
                                })
                            } else if ((35 === g || 36 === g) && !b(document.activeElement).is(j) && ((c.overflowed[0] || c.overflowed[1]) && (a.preventDefault(), a.stopImmediatePropagation()), "keyup" === a.type)) "x" === e.axis || "yx" === e.axis && c.overflowed[1] && !c.overflowed[0] ? (a = "x", g = 35 === g ? Math.abs(k.width() - h.outerWidth(false)) : 0) : (a = "y", g = 35 === g ? Math.abs(k.height() - h.outerHeight(false)) : 0), E(d, g.toString(), {
                                dir: a,
                                scrollEasing: "mcsEaseInOut"
                            })
                    }
                }
                var d = b(this),
                    c = d.data("mCS"),
                    e = c.opt,
                    l = c.sequential,
                    g = "mCS_" +
                    c.idx,
                    f = b("#mCSB_" + c.idx),
                    h = b("#mCSB_" + c.idx + "_container"),
                    k = h.parent(),
                    j = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    i = h.find("iframe"),
                    n = ["blur." + g + " keydown." + g + " keyup." + g];
                i.length && i.each(function() {
                    b(this).load(function() {
                        N(this) && b(this.contentDocument || this.contentWindow.document).bind(n[0], function(b) {
                            a(b)
                        })
                    })
                });
                f.attr("tabindex", "0").bind(n[0], function(b) {
                    a(b)
                })
            },
            V = function(a, d, c, e, l) {
                function g(b) {
                    h.snapAmount && (k.scrollAmount = h.snapAmount instanceof Array ? "x" === k.dir[0] ?
                        h.snapAmount[1] : h.snapAmount[0] : h.snapAmount);
                    var c = "stepped" !== k.type,
                        d = l ? l : b ? c ? n / 1.5 : o : 1E3 / 60,
                        i = b ? c ? 7.5 : 40 : 2.5,
                        p = [Math.abs(j[0].offsetTop), Math.abs(j[0].offsetLeft)],
                        m = [f.scrollRatio.y > 10 ? 10 : f.scrollRatio.y, f.scrollRatio.x > 10 ? 10 : f.scrollRatio.x],
                        i = "x" === k.dir[0] ? p[1] + k.dir[1] * m[1] * i : p[0] + k.dir[1] * m[0] * i,
                        m = "x" === k.dir[0] ? p[1] + k.dir[1] * parseInt(k.scrollAmount) : p[0] + k.dir[1] * parseInt(k.scrollAmount),
                        i = "auto" !== k.scrollAmount ? m : i,
                        c = e ? e : b ? c ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear";
                    return b && 17 > d && (i =
                        "x" === k.dir[0] ? p[1] : p[0]), E(a, i.toString(), {
                        dir: k.dir[0],
                        scrollEasing: c,
                        dur: d,
                        onComplete: b ? true : false
                    }), b ? void(k.dir = false) : (clearTimeout(k.step), void(k.step = setTimeout(function() {
                        g()
                    }, d)))
                }
                var f = a.data("mCS"),
                    h = f.opt,
                    k = f.sequential,
                    j = b("#mCSB_" + f.idx + "_container"),
                    i = "stepped" === k.type ? true : false,
                    n = h.scrollInertia < 26 ? 26 : h.scrollInertia,
                    o = h.scrollInertia < 1 ? 17 : h.scrollInertia;
                switch (d) {
                    case "on":
                        if (k.dir = [c === m[16] || c === m[15] || 39 === c || 37 === c ? "x" : "y", c === m[13] || c === m[15] || 38 === c || 37 === c ? -1 : 1], H(a), Q(c) &&
                            "stepped" === k.type) break;
                        g(i);
                        break;
                    case "off":
                        clearTimeout(k.step), J(k, "step"), H(a), (i || f.tweenRunning && k.dir) && g(true)
                }
            },
            U = function(a) {
                var d = b(this).data("mCS").opt,
                    c = [];
                return "function" == typeof a && (a = a()), a instanceof Array ? c = a.length > 1 ? [a[0], a[1]] : "x" === d.axis ? [null, a[0]] : [a[0], null] : (c[0] = a.y ? a.y : a.x || "x" === d.axis ? null : a, c[1] = a.x ? a.x : a.y || "y" === d.axis ? null : a), "function" == typeof c[0] && (c[0] = c[0]()), "function" == typeof c[1] && (c[1] = c[1]()), c
            },
            Y = function(a, d) {
                if (null != a && "undefined" != typeof a) {
                    var c =
                        b(this),
                        e = c.data("mCS"),
                        i = e.opt,
                        e = b("#mCSB_" + e.idx + "_container"),
                        g = e.parent(),
                        f = typeof a;
                    d || (d = "x" === i.axis ? "x" : "y");
                    var i = "x" === d ? e.outerWidth(false) : e.outerHeight(false),
                        h = "x" === d ? e[0].offsetLeft : e[0].offsetTop,
                        k = "x" === d ? "left" : "top";
                    switch (f) {
                        case "function":
                            return a();
                        case "object":
                            c = a.jquery ? a : b(a);
                            if (!c.length) break;
                            return "x" === d ? G(c)[1] : G(c)[0];
                        case "string":
                        case "number":
                            if (Q(a)) return Math.abs(a);
                            if (-1 !== a.indexOf("%")) return Math.abs(i * parseInt(a) / 100);
                            if (-1 !== a.indexOf("-=")) return Math.abs(h -
                                parseInt(a.split("-=")[1]));
                            if (-1 !== a.indexOf("+=")) return c = h + parseInt(a.split("+=")[1]), c >= 0 ? 0 : Math.abs(c);
                            if (-1 !== a.indexOf("px") && Q(a.split("px")[0])) return Math.abs(a.split("px")[0]);
                            if ("top" === a || "left" === a) return 0;
                            if ("bottom" === a) return Math.abs(g.height() - e.outerHeight(false));
                            if ("right" === a) return Math.abs(g.width() - e.outerWidth(false));
                            return "first" === a || "last" === a ? (c = e.find(":" + a), "x" === d ? G(c)[1] : G(c)[0]) : b(a).length ? "x" === d ? G(b(a))[1] : G(b(a))[0] : (e.css(k, a), void t.update.call(null, c[0]))
                    }
                }
            },
            T = function(a) {
                function d() {
                    return clearTimeout(k[0].autoUpdate), 0 === g.parents("html").length ? void(g = null) : void(k[0].autoUpdate = setTimeout(function() {
                        return h.advanced.updateOnSelectorChange && (f.poll.change.n = e(), f.poll.change.n !== f.poll.change.o) ? (f.poll.change.o = f.poll.change.n, void i(3)) : h.advanced.updateOnContentResize && (f.poll.size.n = g[0].scrollHeight + g[0].scrollWidth + k[0].offsetHeight + g[0].offsetHeight + g[0].offsetWidth, f.poll.size.n !== f.poll.size.o) ? (f.poll.size.o = f.poll.size.n, void i(1)) : !h.advanced.updateOnImageLoad ||
                            "auto" === h.advanced.updateOnImageLoad && "y" === h.axis || (f.poll.img.n = k.find("img").length, f.poll.img.n === f.poll.img.o) ? void((h.advanced.updateOnSelectorChange || h.advanced.updateOnContentResize || h.advanced.updateOnImageLoad) && d()) : (f.poll.img.o = f.poll.img.n, void k.find("img").each(function() {
                                c(this)
                            }))
                    }, h.advanced.autoUpdateTimeout))
                }

                function c(a) {
                    if (b(a).hasClass(m[2])) return void i();
                    var c = new Image;
                    c.onload = function(a, b) {
                        return function() {
                            return b.apply(a, arguments)
                        }
                    }(c, function() {
                        this.onload = null;
                        b(a).addClass(m[2]);
                        i(2)
                    });
                    c.src = a.src
                }

                function e() {
                    h.advanced.updateOnSelectorChange === true && (h.advanced.updateOnSelectorChange = "*");
                    var a = 0,
                        b = k.find(h.advanced.updateOnSelectorChange);
                    return h.advanced.updateOnSelectorChange && b.length > 0 && b.each(function() {
                        a += this.offsetHeight + this.offsetWidth
                    }), a
                }

                function i(a) {
                    clearTimeout(k[0].autoUpdate);
                    t.update.call(null, g[0], a)
                }
                var g = b(this),
                    f = g.data("mCS"),
                    h = f.opt,
                    k = b("#mCSB_" + f.idx + "_container");
                return a ? (clearTimeout(k[0].autoUpdate), void J(k[0], "autoUpdate")) :
                    void d()
            },
            H = function(a) {
                a = a.data("mCS");
                b("#mCSB_" + a.idx + "_container,#mCSB_" + a.idx + "_container_wrapper,#mCSB_" + a.idx + "_dragger_vertical,#mCSB_" + a.idx + "_dragger_horizontal").each(function() {
                    this._mTween || (this._mTween = {
                        top: {},
                        left: {}
                    });
                    for (var a = ["top", "left"], b = 0; b < a.length; b++) {
                        var e = a[b];
                        this._mTween[e].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(this._mTween[e].id) : clearTimeout(this._mTween[e].id), this._mTween[e].id = null, this._mTween[e].stop = 1)
                    }
                })
            },
            E = function(a, d, c) {
                function e(a) {
                    return g &&
                        f.callbacks[a] && "function" == typeof f.callbacks[a]
                }

                function i() {
                    var b = [j[0].offsetTop, j[0].offsetLeft],
                        d = [t[0].offsetTop, t[0].offsetLeft],
                        e = [j.outerHeight(false), j.outerWidth(false)],
                        f = [k.height(), k.width()];
                    a[0].mcs = {
                        content: j,
                        top: b[0],
                        left: b[1],
                        draggerTop: d[0],
                        draggerLeft: d[1],
                        topPct: Math.round(100 * Math.abs(b[0]) / (Math.abs(e[0]) - f[0])),
                        leftPct: Math.round(100 * Math.abs(b[1]) / (Math.abs(e[1]) - f[1])),
                        direction: c.dir
                    }
                }
                var g = a.data("mCS"),
                    f = g.opt,
                    c = b.extend({
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: false,
                        dur: f.scrollInertia,
                        overwrite: "all",
                        callbacks: true,
                        onStart: true,
                        onUpdate: true,
                        onComplete: true
                    }, c),
                    h = [c.dur, c.drag ? 0 : c.dur],
                    k = b("#mCSB_" + g.idx),
                    j = b("#mCSB_" + g.idx + "_container"),
                    n = j.parent(),
                    m = f.callbacks.onTotalScrollOffset ? U.call(a, f.callbacks.onTotalScrollOffset) : [0, 0],
                    o = f.callbacks.onTotalScrollBackOffset ? U.call(a, f.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (g.trigger = c.trigger, (0 !== n.scrollTop() || 0 !== n.scrollLeft()) && (b(".mCSB_" + g.idx + "_scrollbar").css("visibility", "visible"), n.scrollTop(0).scrollLeft(0)),
                    "_resetY" !== d || g.contentReset.y || (e("onOverflowYNone") && f.callbacks.onOverflowYNone.call(a[0]), g.contentReset.y = 1), "_resetX" !== d || g.contentReset.x || (e("onOverflowXNone") && f.callbacks.onOverflowXNone.call(a[0]), g.contentReset.x = 1), "_resetY" !== d && "_resetX" !== d) {
                    if (!g.contentReset.y && a[0].mcs || !g.overflowed[0] || (e("onOverflowY") && f.callbacks.onOverflowY.call(a[0]), g.contentReset.x = null), !g.contentReset.x && a[0].mcs || !g.overflowed[1] || (e("onOverflowX") && f.callbacks.onOverflowX.call(a[0]), g.contentReset.x =
                            null), f.snapAmount) d = Math.round(d / (f.snapAmount instanceof Array ? "x" === c.dir ? f.snapAmount[1] : f.snapAmount[0] : f.snapAmount)) * (f.snapAmount instanceof Array ? "x" === c.dir ? f.snapAmount[1] : f.snapAmount[0] : f.snapAmount) - f.snapOffset;
                    switch (c.dir) {
                        case "x":
                            var t = b("#mCSB_" + g.idx + "_dragger_horizontal"),
                                s = "left",
                                r = j[0].offsetLeft,
                                x = [k.width() - j.outerWidth(false), t.parent().width() - t.width()],
                                q = [d, 0 === d ? 0 : d / g.scrollRatio.x],
                                u = m[1],
                                w = o[1],
                                v = u > 0 ? u / g.scrollRatio.x : 0,
                                F = w > 0 ? w / g.scrollRatio.x : 0;
                            break;
                        case "y":
                            t = b("#mCSB_" +
                                g.idx + "_dragger_vertical"), s = "top", r = j[0].offsetTop, x = [k.height() - j.outerHeight(false), t.parent().height() - t.height()], q = [d, 0 === d ? 0 : d / g.scrollRatio.y], u = m[0], w = o[0], v = u > 0 ? u / g.scrollRatio.y : 0, F = w > 0 ? w / g.scrollRatio.y : 0
                    }
                    q[1] < 0 || 0 === q[0] && 0 === q[1] ? q = [0, 0] : q[1] >= x[1] ? q = [x[0], x[1]] : q[0] = -q[0];
                    a[0].mcs || (i(), e("onInit") && f.callbacks.onInit.call(a[0]));
                    clearTimeout(j[0].onCompleteTimeout);
                    Z(t[0], s, Math.round(q[1]), h[1], c.scrollEasing);
                    (g.tweenRunning || !(0 === r && q[0] >= 0 || r === x[0] && q[0] <= x[0])) && Z(j[0], s, Math.round(q[0]),
                        h[0], c.scrollEasing, c.overwrite, {
                            onStart: function() {
                                c.callbacks && c.onStart && !g.tweenRunning && (e("onScrollStart") && (i(), f.callbacks.onScrollStart.call(a[0])), g.tweenRunning = true, C(t), g.cbOffsets = [f.callbacks.alwaysTriggerOffsets || r >= x[0] + u, f.callbacks.alwaysTriggerOffsets || -w >= r])
                            },
                            onUpdate: function() {
                                c.callbacks && c.onUpdate && e("whileScrolling") && (i(), f.callbacks.whileScrolling.call(a[0]))
                            },
                            onComplete: function() {
                                if (c.callbacks && c.onComplete) "yx" === f.axis && clearTimeout(j[0].onCompleteTimeout), j[0].onCompleteTimeout =
                                    setTimeout(function() {
                                        e("onScroll") && (i(), f.callbacks.onScroll.call(a[0]));
                                        e("onTotalScroll") && q[1] >= x[1] - v && g.cbOffsets[0] && (i(), f.callbacks.onTotalScroll.call(a[0]));
                                        e("onTotalScrollBack") && q[1] <= F && g.cbOffsets[1] && (i(), f.callbacks.onTotalScrollBack.call(a[0]));
                                        g.tweenRunning = false;
                                        j[0].idleTimer = 0;
                                        C(t, "hide")
                                    }, j[0].idleTimer || 0)
                            }
                        })
                }
            },
            Z = function(a, b, c, e, i, g, f) {
                function h() {
                    w.stop || (r || o.call(), r = P() - s, k(), r >= w.time && (w.time = r > w.time ? r + n - (r - w.time) : r + n - 1, w.time < r + 1 && (w.time = r + 1)), w.time < e ? w.id = m(h) :
                        q.call())
                }

                function k() {
                    e > 0 ? (w.currVal = j(w.time, u, y, e, i), v[b] = Math.round(w.currVal) + "px") : v[b] = c + "px";
                    t.call()
                }

                function j(a, b, c, d, e) {
                    switch (e) {
                        case "linear":
                        case "mcsLinear":
                            return c * a / d + b;
                        case "mcsLinearOut":
                            return a /= d, a--, c * Math.sqrt(1 - a * a) + b;
                        case "easeInOutSmooth":
                            return a /= d / 2, 1 > a ? c / 2 * a * a + b : (a--, -c / 2 * (a * (a - 2) - 1) + b);
                        case "easeInOutStrong":
                            return a /= d / 2, 1 > a ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : (a--, c / 2 * (-Math.pow(2, -10 * a) + 2) + b);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return a /= d / 2, 1 > a ? c / 2 * a * a * a + b : (a -= 2, c / 2 *
                                (a * a * a + 2) + b);
                        case "easeOutSmooth":
                            return a /= d, a--, -c * (a * a * a * a - 1) + b;
                        case "easeOutStrong":
                            return c * (-Math.pow(2, -10 * a / d) + 1) + b;
                        default:
                            return d = (a /= d) * a, e = d * a, b + c * (0.499999999999997 * e * d + -2.5 * d * d + 5.5 * e + -6.5 * d + 4 * a)
                    }
                }
                a._mTween || (a._mTween = {
                    top: {},
                    left: {}
                });
                var n, m, f = f || {},
                    o = f.onStart || function() {},
                    t = f.onUpdate || function() {},
                    q = f.onComplete || function() {},
                    s = P(),
                    r = 0,
                    u = a.offsetTop,
                    v = a.style,
                    w = a._mTween[b];
                "left" === b && (u = a.offsetLeft);
                var y = c - u;
                w.stop = 0;
                if ("none" !== g) null != w.id && (window.requestAnimationFrame ?
                    window.cancelAnimationFrame(w.id) : clearTimeout(w.id), w.id = null);
                (function() {
                    n = 1E3 / 60;
                    w.time = r + n;
                    m = window.requestAnimationFrame ? window.requestAnimationFrame : function(a) {
                        return k(), setTimeout(a, 0.01)
                    };
                    w.id = m(h)
                })()
            },
            P = function() {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            },
            J = function(a, b) {
                try {
                    delete a[b]
                } catch (c) {
                    a[b] = null
                }
            },
            R = function(a) {
                a = a.originalEvent.pointerType;
                return !(a && "touch" !== a && 2 !== a)
            },
            Q = function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            G = function(a) {
                var b = a.parents(".mCSB_container");
                return [a.offset().top - b.offset().top, a.offset().left - b.offset().left]
            },
            aa = function() {
                var a = function() {
                    var a = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var b = 0; b < a.length; b++)
                        if (a[b] + "Hidden" in document) return a[b] + "Hidden";
                    return null
                }();
                return a ? document[a] : false
            };
        b.fn.mCustomScrollbar = function(a) {
            return t[a] ? t[a].apply(this, Array.prototype.slice.call(arguments,
                1)) : "object" != typeof a && a ? void b.error("Method " + a + " does not exist") : t.init.apply(this, arguments)
        };
        b.mCustomScrollbar = function(a) {
            return t[a] ? t[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void b.error("Method " + a + " does not exist") : t.init.apply(this, arguments)
        };
        b.mCustomScrollbar.defaults = B;
        window.mCustomScrollbar = true;
        b(window).load(function() {
            b(".mCustomScrollbar").mCustomScrollbar();
            b.extend(b.expr[":"], {
                mcsInView: b.expr[":"].mcsInView || function(a) {
                    var d, c, a = b(a),
                        e = a.parents(".mCSB_container");
                    if (e.length) return d = e.parent(), c = [e[0].offsetTop, e[0].offsetLeft], c[0] + G(a)[0] >= 0 && c[0] + G(a)[0] < d.height() - a.outerHeight(false) && c[1] + G(a)[1] >= 0 && c[1] + G(a)[1] < d.width() - a.outerWidth(false)
                },
                mcsOverflow: b.expr[":"].mcsOverflow || function(a) {
                    if (a = b(a).data("mCS")) return a.overflowed[0] || a.overflowed[1]
                }
            })
        })
    })
});
(function(b) {
    b.fn.reveal = function(v, B) {
        function D() {
            m = q.filter(function() {
                var m = b(this);
                if (!m.is(":hidden")) {
                    var q = r.scrollTop(),
                        n = q + r.height(),
                        i = m.offset().top;
                    return i + m.height() >= q - A && i <= n + A
                }
            }).trigger("reveal");
            q = q.not(m)
        }
        var r = b(window),
            A = v || 0,
            q = this,
            m;
        this.one("reveal", function() {
            var b = this.getAttribute("org-src");
            if (b = b || this.getAttribute("data-src")) this.setAttribute("src", b), typeof B === "function" && B.call(this)
        });
        r.on("scroll.reveal resize.reveal lookup.reveal", D);
        D();
        return this
    }
})(window.jQuery);