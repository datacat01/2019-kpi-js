! function(n) {
    Drupal.behaviors.accessibleCollapse = {
        attach: function(e, t) {
            n(".ctools-collapsible-handle").attr("tabindex", "0"), n(document).on("keyup", ".ctools-collapsible-handle", function(e) {
                13 != e.which && 32 != e.which || n(this).click()
            })
        }
    }
}(jQuery),
function(t) {
    t(document).ready(function() {
        function e() {
            1 <= t(".addthis_sharing_toolbox").length && (1 <= t("#atstbx").length ? t("#atstbx a span").each(function() {
                var e = t(this).attr("title");
                t(this).html('<span class="element-invisible">' + e + "</span>"), t(this).parent("a").attr("href", "#")
            }) : setTimeout(function() {
                e()
            }, 5e3))
        }
        t(".social-media-print__sharing-toggle").click(function(e) {
            e.preventDefault(), t(".addthis_sharing_toolbox").fadeToggle()
        }), t(document).keyup(function(e) {
            27 == e.keyCode && t(".addthis_sharing_toolbox").fadeOut()
        }), e()
    })
}(jQuery),
function(n) {
    var t = ["body.page-news-events-events-calendar"];

    function i() {
        n("#calendar__toggle-calendar").hasClass("active") || (n(".view--events-calendar .attachment").fadeOut(0, function() {
            n(".view--events-calendar .view-content").fadeIn(300)
        }), n("#calendar__toggle-calendar").addClass("active"), n("#calendar__toggle-list").removeClass("active"), n("body").removeClass("hide-calendar").addClass("show-calendar"))
    }

    function s() {
        n("#calendar__toggle-list").hasClass("active") || (n("body").hasClass("show-calendar") ? n(".view--events-calendar .view-content").fadeOut(0, function() {
            n(".view--events-calendar .attachment,.view--events-calendar .attachment .view-content").fadeIn(300)
        }) : n(".view--events-calendar .attachment,.view--events-calendar .attachment .view-content").fadeIn(300), n("#calendar__toggle-list").addClass("active"), n("#calendar__toggle-calendar").removeClass("active"), n("body").removeClass("show-calendar").removeClass("had-calendar").addClass("hide-calendar"))
    }
    n(document).ready(function() {
        var e;
        e = t, n.each(e, function(e, t) {
            1 == n(t).length && n("body").addClass("show-calendar")
        }), n("#calendar__toggle-calendar").click(function(e) {
            e.preventDefault(), i()
        }), n("#calendar__toggle-list").click(function(e) {
            e.preventDefault(), s()
        })
    }), n(document).ajaxComplete(function() {
        n("body").hasClass("show-calendar") ? (i(), n("#calendar__toggle-calendar").addClass("active"), n("#calendar__toggle-list").removeClass("active")) : n("body").hasClass("hide-calendar") && (s(), n("#calendar__toggle-list").addClass("active"), n("#calendar__toggle-calendar").removeClass("active")), n("#calendar__toggle-calendar").click(function(e) {
            e.preventDefault(), i()
        }), n("#calendar__toggle-list").click(function(e) {
            e.preventDefault(), s()
        })
    }), n(window).load(function() {
        window.loaded = !0
    }), n(document).ready(function() {
        enquire.register("screen and (max-width:679px)", {
            match: function() {
                n("body").hasClass("show-calendar") && (s(), !0 === window.loaded && n("body").addClass("had-calendar"))
            },
            unmatch: function() {
                n("body").hasClass("had-calendar") && i()
            },
            setup: function() {},
            deferSetup: !0,
            destroy: function() {}
        })
    })
}(jQuery),
function(e) {
    e(document).ready(function() {
        e(".pane--publication-topic-area-taxonomy-topic-area .view-content").columnize({
            columns: 3,
            lastNeverTallest: !0
        }), e("footer .menu-name-main-menu .menu li:first-child .menu").columnize({
            columns: 2,
            lastNeverTallest: !0
        })
    })
}(jQuery),
function(l) {
    var e = [".panel-region--call-outs .pane--callout .pane__inner-content", ".pane--half-width .pane__inner-content", ".pane--half-width .pane__header", ".nist-featured-topics__link", ".nist-hero--homepage .nist-hero__caption--overlay", ".topic-card a", ".equal-height"];

    function t(e) {
        l.each(e, function(e, t) {
            var n, i, s, a, o;
            1 < l(t).length && (i = [], l(n = t).each(function() {
                var e = l(this).outerHeight();
                i.push(e)
            }), s = i, a = n, o = Math.max.apply(Math, s), l(a).css("height", o + "px"))
        })
    }

    function n(e) {
        l.each(e, function(e, t) {
            1 < l(t).length && l(t).css("height", "auto")
        })
    }
    l(window).resize(function() {
        680 <= l(window).width() && (n(e), t(e))
    }), l(window).load(function() {
        680 <= l(window).width() && (n(e), t(e)), enquire.register("screen and (max-width:679px)", {
            match: function() {
                n(e)
            },
            unmatch: function() {
                t(e)
            },
            setup: function() {},
            deferSetup: !0,
            destroy: function() {}
        })
    })
}(jQuery),
function(n) {
    Drupal.behaviors.testAjax = {
        attach: function(e, t) {
            null != e.context && t.views && t.views.ajaxViews && n("body").addClass("ajax-ran")
        }
    }
}(jQuery),
function(e, t, n) {
    var i = window.matchMedia;
    "undefined" != typeof module && module.exports ? module.exports = n(i) : "function" == typeof define && define.amd ? define(function() {
        return t[e] = n(i)
    }) : t[e] = n(i)
}("enquire", this, function(i) {
    "use strict";

    function o(e, t) {
        for (var n = 0, i = e.length; n < i && !1 !== t(e[n], n); n++);
    }

    function l(e) {
        return "function" == typeof e
    }

    function n(e) {
        !(this.options = e).deferSetup && this.setup()
    }

    function r(e, t) {
        this.query = e, this.isUnconditional = t, this.handlers = [], this.mql = i(e);
        var n = this;
        this.listener = function(e) {
            n.mql = e, n.assess()
        }, this.mql.addListener(this.listener)
    }

    function e() {
        if (!i) throw new Error("matchMedia not present, legacy browsers require a polyfill");
        this.queries = {}, this.browserIsIncapable = !i("only all").matches
    }
    return n.prototype = {
        setup: function() {
            this.options.setup && this.options.setup(), this.initialised = !0
        },
        on: function() {
            !this.initialised && this.setup(), this.options.match && this.options.match()
        },
        off: function() {
            this.options.unmatch && this.options.unmatch()
        },
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off()
        },
        equals: function(e) {
            return this.options === e || this.options.match === e
        }
    }, r.prototype = {
        addHandler: function(e) {
            var t = new n(e);
            this.handlers.push(t), this.matches() && t.on()
        },
        removeHandler: function(n) {
            var i = this.handlers;
            o(i, function(e, t) {
                return e.equals(n) ? (e.destroy(), !i.splice(t, 1)) : void 0
            })
        },
        matches: function() {
            return this.mql.matches || this.isUnconditional
        },
        clear: function() {
            o(this.handlers, function(e) {
                e.destroy()
            }), this.mql.removeListener(this.listener), this.handlers.length = 0
        },
        assess: function() {
            var t = this.matches() ? "on" : "off";
            o(this.handlers, function(e) {
                e[t]()
            })
        }
    }, e.prototype = {
        register: function(t, e, n) {
            var i, s = this.queries,
                a = n && this.browserIsIncapable;
            return s[t] || (s[t] = new r(t, a)), l(e) && (e = {
                match: e
            }), i = e, "[object Array]" === Object.prototype.toString.apply(i) || (e = [e]), o(e, function(e) {
                l(e) && (e = {
                    match: e
                }), s[t].addHandler(e)
            }), this
        },
        unregister: function(e, t) {
            var n = this.queries[e];
            return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this
        }
    }, new e
}),
function(s) {
    function n(e) {
        s(e).resize()
    }

    function i(e) {
        s(e).removeClass("fullscreen"), n(e)
    }
    Drupal.behaviors.nistslider = {
        attach: function(e, t) {
            s(".nist-slider").find("picture").each(function(e, t) {
                var n = s(t).find("img"),
                    i = s("<div />").css({
                        "background-image": "url(" + n.attr("src") + ")"
                    }).addClass("nist-slider__bg-image");
                s(t).after(i)
            }), s(".nist-slider__fullscreen-open").click(function(e) {
                var t;
                e.preventDefault(), t = s(this).closest(".nist-slider"), s(t).addClass("fullscreen"), n(t)
            }), s(".nist-slider__fullscreen-close").click(function(e) {
                e.preventDefault(), i(s(this).closest(".nist-slider"))
            }), s(".nist-slider").bind("start", function(e, t) {
                s(".nist-slider__slide-total").text(t.count)
            }), s(".nist-slider").bind("after", function(e, t) {
                s(".nist-slider__slide-current").text(t.currentSlide + 1)
            })
        }
    }, s(document).keyup(function(e) {
        27 == e.keyCode && i()
    })
}(jQuery),
function() {
    "use strict";
    var t, n = [];

    function e() {
        for (; n.length;) n[0](), n.shift()
    }

    function a(e) {
        this.a = o, this.b = void 0, this.f = [];
        var t = this;
        try {
            e(function(e) {
                ! function t(n, e) {
                    if (n.a == o) {
                        if (e == n) throw new TypeError;
                        var i = !1;
                        try {
                            var s = e && e.then;
                            if (null != e && "object" == typeof e && "function" == typeof s) return void s.call(e, function(e) {
                                i || t(n, e), i = !0
                            }, function(e) {
                                i || r(n, e), i = !0
                            })
                        } catch (e) {
                            return void(i || r(n, e))
                        }
                        n.a = 0, n.b = e, d(n)
                    }
                }(t, e)
            }, function(e) {
                r(t, e)
            })
        } catch (e) {
            r(t, e)
        }
    }
    t = function() {
        setTimeout(e)
    };
    var o = 2;

    function l(t) {
        return new a(function(e) {
            e(t)
        })
    }

    function r(e, t) {
        if (e.a == o) {
            if (t == e) throw new TypeError;
            e.a = 1, e.b = t, d(e)
        }
    }

    function d(s) {
        var e;
        e = function() {
            if (s.a != o)
                for (; s.f.length;) {
                    var e = (i = s.f.shift())[0],
                        t = i[1],
                        n = i[2],
                        i = i[3];
                    try {
                        0 == s.a ? n("function" == typeof e ? e.call(void 0, s.b) : s.b) : 1 == s.a && ("function" == typeof t ? n(t.call(void 0, s.b)) : i(s.b))
                    } catch (e) {
                        i(e)
                    }
                }
        }, n.push(e), 1 == n.length && t()
    }
    a.prototype.g = function(e) {
        return this.c(void 0, e)
    }, a.prototype.c = function(n, i) {
        var s = this;
        return new a(function(e, t) {
            s.f.push([n, i, e, t]), d(s)
        })
    }, window.Promise || (window.Promise = a, window.Promise.resolve = l, window.Promise.reject = function(n) {
        return new a(function(e, t) {
            t(n)
        })
    }, window.Promise.race = function(i) {
        return new a(function(e, t) {
            for (var n = 0; n < i.length; n += 1) l(i[n]).c(e, t)
        })
    }, window.Promise.all = function(o) {
        return new a(function(n, e) {
            function t(t) {
                return function(e) {
                    s[t] = e, (i += 1) == o.length && n(s)
                }
            }
            var i = 0,
                s = [];
            0 == o.length && n(s);
            for (var a = 0; a < o.length; a += 1) l(o[a]).c(t(a), e)
        })
    }, window.Promise.prototype.then = a.prototype.c, window.Promise.prototype.catch = a.prototype.g)
}(),
function() {
    function s(e, t) {
        document.addEventListener ? e.addEventListener("scroll", t, !1) : e.attachEvent("scroll", t)
    }

    function w(e) {
        this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(e)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c)
    }

    function y(e, t) {
        e.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + t + ";"
    }

    function a(e) {
        var t = e.a.offsetWidth,
            n = t + 100;
        return e.f.style.width = n + "px", e.c.scrollLeft = n, e.b.scrollLeft = e.b.scrollWidth + 100, e.g !== t && (e.g = t, !0)
    }

    function _(e, t) {
        function n() {
            var e = i;
            a(e) && e.a.parentNode && t(e.g)
        }
        var i = e;
        s(e.b, n), s(e.c, n), a(e)
    }

    function e(e, t) {
        var n = t || {};
        this.family = e, this.style = n.style || "normal", this.weight = n.weight || "normal", this.stretch = n.stretch || "normal"
    }
    var C = null,
        i = null,
        n = null,
        t = null;

    function o() {
        return null === t && (t = !!document.fonts), t
    }

    function x(e, t) {
        return [e.style, e.weight, function() {
            if (null === n) {
                var e = document.createElement("div");
                try {
                    e.style.font = "condensed 100px sans-serif"
                } catch (e) {}
                n = "" !== e.style.font
            }
            return n
        }() ? e.stretch : "", "100px", t].join(" ")
    }
    e.prototype.load = function(e, t) {
        var p = this,
            m = e || "BESbswy",
            v = 0,
            g = t || 3e3,
            b = (new Date).getTime();
        return new Promise(function(h, f) {
            if (o() && ! function() {
                    if (null === i)
                        if (o() && /Apple/.test(window.navigator.vendor)) {
                            var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                            i = !!e && parseInt(e[1], 10) < 603
                        } else i = !1;
                    return i
                }()) {
                var e = new Promise(function(n, e) {
                        ! function t() {
                            (new Date).getTime() - b >= g ? e() : document.fonts.load(x(p, '"' + p.family + '"'), m).then(function(e) {
                                1 <= e.length ? n() : setTimeout(t, 25)
                            }, function() {
                                e()
                            })
                        }()
                    }),
                    t = new Promise(function(e, t) {
                        v = setTimeout(t, g)
                    });
                Promise.race([t, e]).then(function() {
                    clearTimeout(v), h(p)
                }, function() {
                    f(p)
                })
            } else n = function() {
                function n() {
                    var e;
                    (e = -1 != o && -1 != l || -1 != o && -1 != r || -1 != l && -1 != r) && ((e = o != l && o != r && l != r) || (null === C && (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), C = !!e && (parseInt(e[1], 10) < 536 || 536 === parseInt(e[1], 10) && parseInt(e[2], 10) <= 11)), e = C && (o == t && l == t && r == t || o == d && l == d && r == d || o == c && l == c && r == c)), e = !e), e && (u.parentNode && u.parentNode.removeChild(u), clearTimeout(v), h(p))
                }
                var i = new w(m),
                    s = new w(m),
                    a = new w(m),
                    o = -1,
                    l = -1,
                    r = -1,
                    t = -1,
                    d = -1,
                    c = -1,
                    u = document.createElement("div");
                u.dir = "ltr", y(i, x(p, "sans-serif")), y(s, x(p, "serif")), y(a, x(p, "monospace")), u.appendChild(i.a), u.appendChild(s.a), u.appendChild(a.a), document.body.appendChild(u), t = i.a.offsetWidth, d = s.a.offsetWidth, c = a.a.offsetWidth,
                    function e() {
                        if ((new Date).getTime() - b >= g) u.parentNode && u.parentNode.removeChild(u), f(p);
                        else {
                            var t = document.hidden;
                            !0 !== t && void 0 !== t || (o = i.a.offsetWidth, l = s.a.offsetWidth, r = a.a.offsetWidth, n()), v = setTimeout(e, 50)
                        }
                    }(), _(i, function(e) {
                        o = e, n()
                    }), y(i, x(p, '"' + p.family + '",sans-serif')), _(s, function(e) {
                        l = e, n()
                    }), y(s, x(p, '"' + p.family + '",serif')), _(a, function(e) {
                        r = e, n()
                    }), y(a, x(p, '"' + p.family + '",monospace'))
            }, document.body ? n() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function e() {
                document.removeEventListener("DOMContentLoaded", e), n()
            }) : document.attachEvent("onreadystatechange", function e() {
                "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", e), n())
            });
            var n
        })
    }, "object" == typeof module ? module.exports = e : (window.FontFaceObserver = e, window.FontFaceObserver.prototype.load = e.prototype.load)
}(),
function(n) {
    n(document).ready(function() {
        n(".nist-expandable-help input").each(function() {
            var e = n(this).attr("id").replace("edit-submitted-", ""),
                t = n("." + ("webform-component--" + e + "-help")).first();
            t.addClass("nist-expandable-help__text").hide(), n(this).parent().append('<a href="#" class="nist-expandable-help__button"><svg class="icon icon-question-circle"><use xlink:href="#icon-question-circle"></use></svg><span class="element-invisible">More information</span></a>'), n(this).parent().append(t)
        }), n(".nist-expandable-help__button").click(function(e) {
            e.preventDefault(), n(this).toggleClass("is-open"), n(this).siblings(".nist-expandable-help__text").slideToggle()
        })
    })
}(jQuery),
function(i) {
    function e() {
        i("iframe").each(function() {
            var e = i(this).parent().width();
            e -= 2, i(this).width(e).height(e * i(this).data("ratio"))
        })
    }
    i(document).ready(function() {
        i("iframe").each(function() {
            i(this).data("ratio", .562);
            var e = parseFloat(this.height),
                t = parseFloat(this.width);
            if (!i(this).hasClass("kmsembed")) {
                var n = {
                    minHeight: e,
                    minWidth: t
                };
                i(this).css(n), i(this).wrap("<div class='iframe-overflow'></div>")
            }
            i.isNumeric(e) && i.isNumeric(t) && i(this).data("ratio", e / t).removeAttr("width").removeAttr("height")
        }), e(), i(window).resize(function() {
            i("iframe").length && e()
        })
    }), window.onload = function() {
        i("iframe").length && e()
    }
}(jQuery),
function(s) {
    function n() {
        s(".media-element-container, .file").each(function() {
            var e = s(this).find("img[class!=file-icon]");
            if (void 0 !== e && void 0 !== e[0]) {
                var t = new Image;
                t.src = e.attr("src");
                var n = t.width,
                    i = (t.height, e.attr("width"));
                "0" != i && i < n && (n = i), "0" != n && s(this).css("width", n + "px")
            }
        })
    }
    Drupal.behaviors.imageContainer = {
        attach: function(e, t) {
            n()
        }
    }, s(window).load(function() {
        n()
    })
}(jQuery),
function(A) {
    A.fn.columnize = function(j) {
        this.cols = [], this.offset = 0, this.before = [], this.lastOther = 0, this.prevMax = 0, this.debug = 0, this.setColumnStart = null;
        var a = {
            width: 400,
            columns: !1,
            buildOnce: !1,
            overflow: !1,
            doneFunc: function() {},
            target: !1,
            ignoreImageLoading: !(this.elipsisText = ""),
            columnFloat: "left",
            lastNeverTallest: !1,
            accuracy: !1,
            precise: !1,
            manualBreaks: !1,
            cssClassPrefix: "",
            elipsisText: "...",
            debug: 0
        };

        function O(t, n) {
            try {
                t.append(n)
            } catch (e) {
                t[0].appendChild(n[0])
            }
        }
        return "string" == typeof(j = A.extend(a, j)).width && (j.width = parseInt(j.width, 10), isNaN(j.width) && (j.width = a.width)), "function" == typeof j.setColumnStart && (this.setColumnStart = j.setColumnStart), "string" == typeof j.elipsisText && (this.elipsisText = j.elipsisText), j.debug && (this.debug = j.debug), j.setWidth || (j.precise ? j.setWidth = function(e) {
            return 100 / e
        } : j.setWidth = function(e) {
            return Math.floor(100 / e)
        }), this.each(function() {
            var _ = j.target ? A(j.target) : A(this),
                C = A(this).height(),
                x = A("<div></div>"),
                k = 0,
                T = j.manualBreaks,
                i = a.cssClassPrefix;
            "string" == typeof j.cssClassPrefix && (i = j.cssClassPrefix);
            var e, t;
            if (O(x, A(this).contents().clone(!0)), !j.ignoreImageLoading && !j.target && !_.data("imageLoaded") && (_.data("imageLoaded", !0), 0 < A(this).find("img").length)) {
                var n = (e = A(this), t = x, function() {
                    e.data("firstImageLoaded") || (e.data("firstImageLoaded", "true"), O(e.empty(), t.children().clone(!0)), e.columnize(j))
                });
                return A(this).find("img").one("load", n), void A(this).find("img").one("abort", n)
            }

            function S(e, t) {
                var n = t ? "." : "";
                return i.length ? n + i + "-" + e : n + e
            }

            function D(e, t, n, i) {
                for (;
                    (T || n.height() < i) && t[0].childNodes.length;) {
                    var s = t[0].childNodes[0];
                    if (A(s).find(S("columnbreak", !0)).length) return;
                    if (A(s).hasClass(S("columnbreak"))) return;
                    O(e, A(s))
                }
                if (0 !== e[0].childNodes.length) {
                    var a = e[0].childNodes,
                        o = a[a.length - 1];
                    e[0].removeChild(o);
                    var l = A(o);
                    if (3 == l[0].nodeType) {
                        var r, d = l[0].nodeValue,
                            c = j.width / 18;
                        j.accuracy && (c = j.accuracy);
                        for (var u = null; n.height() < i && d.length;) {
                            var h = d.indexOf(" ", c);
                            r = -1 != h ? d.substring(0, h) : d, u = document.createTextNode(r), O(e, A(u)), d = d.length > c && -1 != h ? d.substring(h) : ""
                        }
                        if (n.height() >= i && null !== u && (e[0].removeChild(u), d = u.nodeValue + d), !d.length) return !1;
                        l[0].nodeValue = d
                    }
                    return t.contents().length ? t.prepend(l) : O(t, l), 3 == l[0].nodeType
                }
            }

            function I(e, t, n, i) {
                if (!e.contents(":last").find(S("columnbreak", !0)).length && !e.contents(":last").hasClass(S("columnbreak")) && t.contents().length) {
                    var s = t.contents(":first");
                    if (void 0 === s.get(0) || 1 != s.get(0).nodeType) return;
                    var a = s.clone(!0);
                    if (s.hasClass(S("columnbreak"))) O(e, a), s.remove();
                    else if (T) O(e, a), s.remove();
                    else if (1 == a.get(0).nodeType && !a.hasClass(S("dontend")))
                        if (O(e, a), a.is("img") && n.height() < i + 20) s.remove();
                        else if (s.hasClass(S("dontsplit")) && n.height() < i + 20) s.remove();
                    else if (a.is("img") || s.hasClass(S("dontsplit"))) a.remove();
                    else {
                        if (a.empty(), D(a, s, n, i)) s.addClass(S("split"));
                        else {
                            if (s.addClass(S("split")), "OL" == s.get(0).tagName) {
                                var o = a.get(0).childElementCount + a.get(0).start;
                                s.attr("start", o + 1)
                            }
                            s.children().length && I(a, s, n, i)
                        }
                        if (0 === a.get(0).childNodes.length) a.remove(), s.removeClass(S("split"));
                        else if (1 == a.get(0).childNodes.length) {
                            var l = a.get(0).childNodes[0];
                            if (3 == l.nodeType) {
                                var r = l.nodeValue;
                                /\s/.test(r) && (a.remove(), s.removeClass(S("split")))
                            }
                        }
                    }
                }
            }

            function N(e) {
                return 3 == e.nodeType ? !!/^\s+$/.test(e.nodeValue) && (!!e.previousSibling && N(e.previousSibling)) : 1 == e.nodeType && (!!A(e).hasClass(S("dontend")) || 0 !== e.childNodes.length && N(e.childNodes[e.childNodes.length - 1]))
            }

            function s() {
                if (0, k != _.width()) {
                    k = _.width();
                    var e = Math.round(_.width() / j.width),
                        t = j.width,
                        n = j.height;
                    if (j.columns && (e = j.columns), T && (e = x.find(S("columnbreak", !0)).length + 1, t = !1), e <= 1) return function() {
                        if (!_.data("columnized") || 1 != _.children().length) {
                            if (_.data("columnized", !0), _.data("columnizing", !0), _.empty(), _.append(A("<div class='" + S("first") + " " + S("last") + " " + S("column") + " ' style='width:100%; float: " + j.columnFloat + ";'></div>")), $col = _.children().eq(_.children().length - 1), $destroyable = x.clone(!0), j.overflow) {
                                for (targetHeight = j.overflow.height, D($col, $destroyable, $col, targetHeight), $destroyable.contents().find(":first-child").hasClass(S("dontend")) || I($col, $destroyable, $col, targetHeight); $col.contents(":last").length && N($col.contents(":last").get(0));) {
                                    var e = $col.contents(":last");
                                    e.remove(), $destroyable.prepend(e)
                                }
                                for (var t = "", n = document.createElement("DIV"); 0 < $destroyable[0].childNodes.length;) {
                                    var i = $destroyable[0].childNodes[0];
                                    if (i.attributes)
                                        for (var s = 0; s < i.attributes.length; s++) 0 === i.attributes[s].nodeName.indexOf("jQuery") && i.removeAttribute(i.attributes[s].nodeName);
                                    n.innerHTML = "", n.appendChild($destroyable[0].childNodes[0]), t += n.innerHTML
                                }
                                A(j.overflow.id)[0].innerHTML = t
                            } else O($col, $destroyable.contents());
                            _.data("columnizing", !1), j.overflow && j.overflow.doneFunc && j.overflow.doneFunc(), j.doneFunc()
                        }
                    }();
                    if (!_.data("columnizing")) {
                        _.data("columnized", !0), _.data("columnizing", !0), _.empty(), _.append(A("<div style='width:" + j.setWidth(e) + "%; float: " + j.columnFloat + ";'></div>")), O(d = _.children(":last"), x.clone()), C = d.height(), _.empty();
                        var i = C / e,
                            s = 3,
                            a = !1;
                        j.overflow ? (s = 1, i = j.overflow.height) : n && t && (s = 1, i = n, a = !0);
                        for (var o = 0; o < s && o < 20; o++) {
                            var l, r, d, c;
                            _.empty();
                            try {
                                l = x.clone(!0)
                            } catch (e) {
                                l = x.clone()
                            }
                            l.css("visibility", "hidden");
                            for (var u = 0; u < e; u++) r = 0 === u ? S("first") : "", r += " " + S("column"), r = u == e - 1 ? S("last") + " " + r : r, _.append(A("<div class='" + r + "' style='width:" + j.setWidth(e) + "%; float: " + j.columnFloat + ";'></div>"));
                            for (u = 0; u < e - (j.overflow ? 0 : 1) || a && l.contents().length;) {
                                for (_.children().length <= u && _.append(A("<div class='" + r + "' style='width:" + j.setWidth(e) + "%; float: " + j.columnFloat + ";'></div>")), d = _.children().eq(u), a && d.width(t + "px"), D(d, l, d, i), I(d, l, d, i); d.contents(":last").length && N(d.contents(":last").get(0));)(c = d.contents(":last")).remove(), l.prepend(c);
                                u++, 0 === d.contents().length && l.contents().length ? d.append(l.contents(":first")) : u != e - (j.overflow ? 0 : 1) || j.overflow || l.find(S("columnbreak", !0)).length && e++
                            }
                            if (j.overflow && !a) {
                                if (document.all && -1 != navigator.appVersion.indexOf("MSIE 7.")) {
                                    for (var h = "", f = document.createElement("DIV"); 0 < l[0].childNodes.length;) {
                                        var p = l[0].childNodes[0];
                                        for (u = 0; u < p.attributes.length; u++) 0 === p.attributes[u].nodeName.indexOf("jQuery") && p.removeAttribute(p.attributes[u].nodeName);
                                        f.innerHTML = "", f.appendChild(l[0].childNodes[0]), h += f.innerHTML
                                    }
                                    A(j.overflow.id)[0].innerHTML = h
                                } else A(j.overflow.id).empty().append(l.contents().clone(!0))
                            } else if (a) _.children().each(function(e) {
                                (d = _.children().eq(e)).width(t + "px"), 0 === e ? d.addClass(S("first")) : e == _.children().length - 1 ? d.addClass(S("last")) : (d.removeClass(S("first")), d.removeClass(S("last")))
                            }), _.width(_.children().length * t + "px");
                            else {
                                d = _.children().eq(_.children().length - 1), l.contents().each(function() {
                                    d.append(A(this))
                                });
                                d.height();
                                var m = 0,
                                    v = 1e7,
                                    g = 0,
                                    b = !1,
                                    w = 0;
                                _.children().each(function(i) {
                                    return function(e) {
                                        var t = i.children().eq(e);
                                        if (!t.children(":last").find(S("columnbreak", !0)).length) {
                                            var n = t.height();
                                            b = !1, m += n, g < n && (g = n, b = !0), n < v && (v = n), w++
                                        }
                                    }
                                }(_));
                                var y = m / w;
                                0 === m ? o = s : j.lastNeverTallest && b ? (5, i += 5, o == s - 1 && s++) : 30 < g - v ? i = y + 30 : 20 < Math.abs(y - i) ? i = y : o = s
                            }
                            _.append(A("<br style='clear:both;'>"))
                        }
                        _.find(S("column", !0)).find(":first" + S("removeiffirst", !0)).remove(), _.find(S("column", !0)).find(":last" + S("removeiflast", !0)).remove(), _.find(S("split", !0)).find(":first" + S("removeiffirst", !0)).remove(), _.find(S("split", !0)).find(":last" + S("removeiflast", !0)).remove(), _.data("columnizing", !1), j.overflow && j.overflow.doneFunc(), j.doneFunc()
                    }
                }
            }
            _.empty(), s(), j.buildOnce || A(window).resize(function() {
                j.buildOnce || (_.data("timeout") && clearTimeout(_.data("timeout")), _.data("timeout", setTimeout(s, 200)))
            })
        })
    }, A.fn.renumberByJS = function(e, t, n, i) {
        if (this.setList = function(e, t, n) {
                var i, s = this.before.parents();
                if ((i = A(e[this.offset - 1]).find(">*")).last()[0].tagName != n.toUpperCase()) return this.debug && console.log("Last item in previous column, isn't a list..."), 0;
                i = i.length;
                var a, o = 1;
                if (o = this.lastOther <= 0 ? this.before.children().length + 1 : A(s[this.lastOther]).children().length + 1, A(e[this.offset]).find(n + ":first li.split").length) {
                    var l = A(e[this.offset - 1]).find(n + ":last li:last");
                    if ("" === this.elipsisText || A(e[this.offset - 1]).find(n + ":last ~ div").length || A(e[this.offset - 1]).find(n + ":last ~ p").length);
                    else if (0 == A(l).find("ul, ol, dl").length) {
                        var r = l.last().text(),
                            d = r.length;
                        ";" == r.substring(d - 1) ? r.substring(d - 4) != this.elipsisText + ";" && (r = r.substring(0, d - 1) + this.elipsisText + ";") : r.substring(d - 3) != this.elipsisText && (r += this.elipsisText), l.last().text(r)
                    }
                    0 == A(e[this.offset]).find(n + ":first >li.split >" + n).length && o--
                }(1 == i && (o += this.prevMax), 1 < this.nest) ? (this.debug && console.log("Supposed to be a nested list...decr"), o--, 0 < (a = A(e[this.offset - 1]).find(n + ":first li.split:first")).length && (this.debug && console.log("Previous column started with a split item, so that count is one less than expected"), o--), (a = A(e[this.offset]).find(n + ":first li:first").clone()).children().remove(), 0 < A.trim(a.text()).length && (this.debug && console.log("If that was a complete list in the previous column, don't decr."), o++, 0 == A(e[this.offset - 1]).find(">" + n + ":last ").children().length && (this.debug && console.log("unless that was empty, in which case revert"), o--))) : 0 < (a = A(e[this.offset]).find(n + ":first li:first " + n + ".split li.split")).length && (this.debug && console.log("[Nested] Column started with a split item, so that count is one less than expected"), o--);
                return this.debug && console.log("Setting the start value to " + o + " (" + this.prevMax + ")"), 0 < o && ("function" == typeof this.setColumnStart ? this.setColumnStart(t, o) : t.attr("start", o)), 0
            }, void 0 === n && (n = !1), void 0 === i && (i = !1), !n && !i) throw "renumberByJS(): Bad param, must pass an id or a class";
        var s = "";
        this.prevMax = 1, s = i ? "." + i : "#" + n;
        var a = e.toLowerCase(),
            o = e.toUpperCase();
        for (this.cols = A(s), this.debug && console.log("There are " + this.cols.length + " items, looking for " + a), this.before = A(this.cols[0]).find(a + ":last"), this.prevMax = this.before.children().length, this.offset = 1; this.offset < this.cols.length; this.offset++)
            if (this.debug && console.log("iterating " + this.offset + "...[of " + this.cols.length + "]"), this.offset % t != 0) {
                if (this.before = A(this.cols[this.offset - 1]).find(a + ":last"), this.before.length) {
                    this.debug && console.log("Have some " + e + " elements in the previous column");
                    var l = A(this.cols[this.offset]).find(a + ":first");
                    if (A(this.cols[this.offset]).find("*:first")[0] !== l[0]) continue;
                    var r = this.before.parents();
                    this.lastOther = 0;
                    for (; this.lastOther < r.length; this.lastOther++)
                        if (r[this.lastOther].tagName != o && "LI" != r[this.lastOther].tagName) {
                            !0, this.lastOther--;
                            break
                        } this.nest = 1, A(this.cols[this.offset]).find(">" + a + ":first li " + a + ":first").length && (this.nest = 2), this.setList(this.cols, l, a), this.lastOther--, (l = A(this.cols[this.offset]).find(a + ":first li " + a + ":first")).length && (this.before = A(this.cols[this.offset - 1]).find(">" + a + ":last li " + a + ":last"), this.prevMax = 0, this.nest = 1, this.setList(this.cols, l, a));
                    var d = A(this.cols[this.offset - 1]).find(">" + a + ":last");
                    this.prevMax = d.children().length
                }
            } else this.debug && console.log("First column (in theory..)"), this.prevMax = 1;
        return 0
    }
}(jQuery);
var FORMALIZE = function(i, e, n) {
    function t(e) {
        var t = n.createElement("b");
        return t.innerHTML = "\x3c!--[if IE " + e + "]><br><![endif]--\x3e", !!t.getElementsByTagName("br").length
    }
    var s = "placeholder" in n.createElement("input"),
        a = "autofocus" in n.createElement("input"),
        o = t(6),
        l = t(7);
    return {
        go: function() {
            var e, t = this.init;
            for (e in t) t.hasOwnProperty(e) && t[e]()
        },
        init: {
            disable_link_button: function() {
                i(n.documentElement).delegate("a.button_disabled", "click", function() {
                    return !1
                })
            },
            full_input_size: function() {
                l && i("textarea, input.input_full").length && i("textarea, input.input_full").wrap('<span class="input_full_wrap"></span>')
            },
            ie6_skin_inputs: function() {
                if (o && i("input, select, textarea").length) {
                    var t = /button|submit|reset/,
                        n = /date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;
                    i("input").each(function() {
                        var e = i(this);
                        this.getAttribute("type").match(t) ? (e.addClass("ie6_button"), this.disabled && e.addClass("ie6_button_disabled")) : this.getAttribute("type").match(n) && (e.addClass("ie6_input"), this.disabled && e.addClass("ie6_input_disabled"))
                    }), i("textarea, select").each(function() {
                        this.disabled && i(this).addClass("ie6_input_disabled")
                    })
                }
            },
            autofocus: function() {
                if (!a && i(":input[autofocus]").length) {
                    var e = i("[autofocus]")[0];
                    e.disabled || e.focus()
                }
            },
            placeholder: function() {
                !s && i(":input[placeholder]").length && (FORMALIZE.misc.add_placeholder(), i(":input[placeholder]").each(function() {
                    if ("password" !== this.type) {
                        var e = i(this),
                            t = e.attr("placeholder");
                        e.focus(function() {
                            e.val() === t && e.val("").removeClass("placeholder_text")
                        }).blur(function() {
                            FORMALIZE.misc.add_placeholder()
                        }), e.closest("form").submit(function() {
                            e.val() === t && e.val("").removeClass("placeholder_text")
                        }).bind("reset", function() {
                            setTimeout(FORMALIZE.misc.add_placeholder, 50)
                        })
                    }
                }))
            }
        },
        misc: {
            add_placeholder: function() {
                !s && i(":input[placeholder]").length && i(":input[placeholder]").each(function() {
                    if ("password" !== this.type) {
                        var e = i(this),
                            t = e.attr("placeholder");
                        e.val() && e.val() !== t || e.val(t).addClass("placeholder_text")
                    }
                })
            }
        }
    }
}(jQuery, 0, this.document);
jQuery(document).ready(function() {
        FORMALIZE.go()
    }),
    function(e) {
        e(document).ready(function() {
            new FontFaceObserver("Source Sans Pro", {
                weight: 400
            }).load().then(function() {
                console.log("Font is available"), e("html").addClass("font")
            }, function() {
                console.log("Font is not available"), e("html").addClass("no-font")
            })
        })
    }(jQuery),
    function(n) {
        Drupal.behaviors.magnific = {
            attach: function(e, t) {
                n(".lightbox").magnificPopup({
                    delegate: "a.lightbox__trigger",
                    type: "image",
                    gallery: {
                        enabled: !0
                    },
                    image: {
                        markup: '<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',
                        cursor: "mfp-zoom-out-cur",
                        titleSrc: function(e) {
                            var t = "";
                            e.el.siblings(".field--image-caption").length && (t += '<div class="mfp-title-caption">' + e.el.siblings(".field--image-caption").html() + "</div>");
                            e.el.siblings(".field--credit").length && (t += '<div class="mfp-title-credit">' + e.el.siblings(".field--credit").html() + "</div>");
                            return t += '<div class="mfp-title-links">' + e.el.siblings(".lightbox__links").html() + "</div>"
                        },
                        verticalFit: !0,
                        tError: '<a href="%url%">The image</a> could not be loaded.'
                    }
                }), n(".lightbox-iframe").magnificPopup({
                    delegate: "a.lightbox-iframe__trigger",
                    type: "iframe",
                    iframe: {
                        markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title">Some caption</div></div>',
                        patterns: {
                            youtube: {
                                index: "youtube.com/",
                                id: "v=",
                                src: "//www.youtube.com/embed/%id%?autoplay=1"
                            },
                            vimeo: {
                                index: "vimeo.com/",
                                id: "/",
                                src: "//player.vimeo.com/video/%id%?autoplay=1"
                            },
                            gmaps: {
                                index: "//maps.google.",
                                src: "%id%&output=embed"
                            },
                            kaltura: {
                                index: "www.kaltura.com/",
                                id: "entry_id=",
                                src: "//www.kaltura.com/p/684682/sp/68468200/embedIframeJs/uiconf_id/31013851/partner_id/684682?iframeembed=true&entry_id=%id%"
                            }
                        },
                        srcAction: "iframe_src"
                    },
                    callbacks: {
                        markupParse: function(e, t, n) {
                            t.title = n.el.attr("href"), t.title = '<a class="button" href="' + t.title + '">More info</a>'
                        }
                    }
                })
            }
        }
    }(jQuery),
    function(s) {
        function t() {
            s(".menu--main-menu--new .is-open").removeClass("is-open"), s(".menu--main-menu--new .is-focused").removeClass("is-focused")
        }
        s(document).ready(function() {
            s(".menu--main-menu--new li.menu-depth-1").focusin(function() {
                s(".menu--main-menu--new li.menu-depth-1").removeClass("is-focused"), s(this).closest("li.menu-depth-1").addClass("is-focused")
            }), s(".menu--main-menu--new li.menu-depth-1").focusout(function() {
                s(".menu--main-menu--new li.menu-depth-1").removeClass("is-focused")
            }), s(".menu--main-menu--new__submenu").each(function() {
                s(this).find("> .menu").wrapInner('<div class="column-container"><div class="column">')
            }), s(".mobile-toggle--menu").click(function(e) {
                e.preventDefault(), s("body").hasClass("has-mobile-menu") ? s("#navigation .block--menu-block").slideUp(300, function() {
                    s("body").removeClass("has-mobile-menu")
                }) : (s("body").addClass("has-mobile-menu"), s("#navigation .block--menu-block").slideDown(300))
            }), s(".mobile-toggle--menu > a").focus(function() {
                s("body").addClass("focus-mobile-menu"), s("#navigation .block--menu-block").slideDown(300)
            }), s("#main").focusin(function() {
                s(".focus-mobile-menu #navigation .block--menu-block").slideUp(300, function() {
                    s("body").removeClass("focus-mobile-menu"), s("body").removeClass("has-mobile-menu"), t()
                })
            })
        }), s(window).load(function() {
            s(".menu--main-menu--new__submenu").on("click", ".menu--main-menu--new__close", function(e) {
                e.preventDefault(), t()
            }), s(document).keyup(function(e) {
                27 == e.keyCode && t()
            }), s(document).keyup(function(e) {
                13 == e.keyCode && s(".menu--main-menu--new__close").is(":focus") && t()
            }), s(".menu--main-menu--new__submenu").each(function() {
                var e = s(this).find(".column-break").length,
                    t = 0;
                switch (e) {
                    case 0:
                        for (s(this).find(".column-container").addClass("has-one-column").prepend('<span tabindex="0" class="menu--main-menu--new__close">Close</span>'), s(this).addClass("one-column"), t = 0; t < e; t++) {
                            var n = s(this).find(".column-container .column-break").eq(t);
                            s("<div class='column'>").insertAfter(n.parent()).append(n.nextAll().andSelf())
                        }
                        break;
                    case 1:
                        for (s(this).find(".column-container").addClass("has-two-columns").prepend('<span tabindex="0" class="menu--main-menu--new__close">Close</span>'), t = 0; t < e; t++) {
                            n = s(this).find(".column-container .column-break").eq(t);
                            s("<div class='column'>").insertAfter(n.parent()).append(n.nextAll().andSelf())
                        }
                        break;
                    case 2:
                        var i = s(this).find(".column-container");
                        for (s(i).addClass("has-three-columns").prepend('<span tabindex="0" class="menu--main-menu--new__close">Close</span>'), t = 0; t < e; t++) {
                            n = s(this).find(".column-container .column-break").eq(t);
                            s("<div class='column'>").insertAfter(n.parent()).append(n.nextAll().andSelf())
                        }
                        break;
                    case 3:
                        for (s(this).find(".column-container").addClass("has-four-columns").prepend('<span tabindex="0" class="menu--main-menu--new__close">Close</span>'), t = 0; t < e; t++) {
                            n = s(this).find(".column-container .column-break").eq(t);
                            s("<div class='column'>").insertAfter(n.parent()).append(n.nextAll().andSelf())
                        }
                }
            })
        })
    }(jQuery),
    function(s) {
        s(document).ready(function() {
            s(".menu--columns").each(function() {
                s(this).find("> .menu-block-wrapper > .menu").wrapInner('<div class="nist-grid"><div class="nist-grid__item">')
            })
        }), s(window).load(function() {
            s(".menu--columns > .menu-block-wrapper > .menu").each(function() {
                var e = s(this).find(".column-break").length,
                    t = 0;
                switch (e) {
                    case 0:
                        for (s(this).find(".nist-grid").addClass("nist-grid--1up"), t = 0; t < e; t++) {
                            var n = s(this).find(".nist-grid .column-break").eq(t);
                            s("<div class='nist-grid__item'>").insertAfter(n.parent()).append(n.nextAll().andSelf())
                        }
                        break;
                    case 1:
                        for (s(this).find(".nist-grid").addClass("nist-grid--2up"), t = 0; t < e; t++) {
                            n = s(this).find(".nist-grid .column-break").eq(t);
                            s("<div class='nist-grid__item'>").insertAfter(n.parent()).append(n.nextAll().andSelf())
                        }
                        break;
                    case 2:
                        var i = s(this).find(".nist-grid");
                        for (s(i).addClass("nist-grid--3up"), t = 0; t < e; t++) {
                            n = s(this).find(".nist-grid .column-break").eq(t);
                            s("<div class='nist-grid__item'>").insertAfter(n.parent()).append(n.nextAll().andSelf())
                        }
                        break;
                    case 3:
                        for (s(this).find(".nist-grid").addClass("nist-grid--4up"), t = 0; t < e; t++) {
                            n = s(this).find(".nist-grid .column-break").eq(t);
                            s("<div class='nist-grid__item'>").insertAfter(n.parent()).append(n.nextAll().andSelf())
                        }
                }
            })
        })
    }(jQuery),
    function(i) {
        Drupal.behaviors.menuTree = {
            attach: function(e, t) {
                function n(e) {
                    e.blur();
                    var t = e.closest("li");
                    return t.hasClass("is-open") ? (t.find("ul, .menu--main-menu--new__submenu").first().slideUp(), t.removeClass("is-open")) : (i(".menu--main-menu--new__submenu").slideUp(), i(".menu--main-menu--new .menu-depth-1").removeClass("is-open"), t.find("ul, .menu--main-menu--new__submenu").first().slideDown(), t.addClass("is-open")), !1
                }
                i(".expandable li:has(ul)").children("a").append(' <span class="expander"><svg class="icon icon-plus"><use xlink:href="#icon-plus"></use></svg><svg class="icon icon-minus"><use xlink:href="#icon-minus"></use></svg><span class="element-invisible">Expand or Collapse</span></span>'), i(".expandable a.active").parents("li").addClass("is-active-trail"), n(i("li.is-active-trail > a .expander")), i(".expander").click(function(e) {
                    e.preventDefault(), n(i(this))
                })
            }
        }, i(document).keyup(function(e) {
            13 == e.keyCode && i(".expander").is(":focus") && expandCollapse(i(".expander:focus"))
        })
    }(jQuery),
    function(s) {
        s(document).ready(function() {
            s(".field--body svg").once("wrapSVG", function() {
                s(this).each(function(e, t) {
                    s(t).wrap('<div class="nist-svg__wrapper"></div>')
                })
            }), s(".nist-svg--scalable").once("scalable", function() {
                s(this).each(function(e, t) {
                    var n = t.viewBox.baseVal,
                        i = n.height / n.width * 100;
                    s(t).parent().addClass("nist-svg__wrapper--scalable"), s(t).parent().css("padding-bottom", i + "%")
                })
            }), s("svg a").each(function(t, e) {
                if (s(this).attr("data-nist-svg-tooltip")) {
                    var n = s(this).attr("data-nist-svg-tooltip");
                    s(this).closest(".nist-svg__wrapper").append('<div class="nist-svg__tooltip nist-svg__tooltip--' + t + '"><div class="nist-svg__tooltip-content">' + n + '</div><span class="nist-svg__tooltip-close fa fa-close"><span class="element-invisible">Close</span></span></div>'), s(this).click(function(e) {
                        e.preventDefault(), s(this).closest(".nist-svg__wrapper").find(".nist-svg__tooltip--" + t).addClass("is-open").fadeIn()
                    })
                }
                s(this).attr("data-nist-show") && s(this).click(function(e) {
                    e.preventDefault();
                    var t = s(this).attr("data-nist-show"),
                        n = s("[data-nist-element='" + t + "']");
                    s(this).closest(".nist-svg__wrapper").find("[data-nist-element]").fadeOut(), n.fadeIn()
                })
            }), s(".nist-svg__tooltip-close").click(function(e) {
                e.preventDefault(), s(this).closest(".nist-svg__tooltip").removeClass("is-open").fadeOut()
            }), s("[data-nist-element]").click(function() {
                s(this).hide()
            })
        })
    }(jQuery),
    function(e) {
        e(document).ready(function() {})
    }(jQuery),
    function(s) {
        s(document).ready(function() {
            var e;

            function i(e) {
                "" == s(e).find("input").val() && s(e).find(".form-item").addClass("empty")
            }
            e = [".primary-filter"], s.each(e, function(e, t) {
                var n = s(t).length;
                1 == n && (i(t), s(t).find("input").focusin(function() {
                    s(t).find(".form-item").removeClass("empty")
                }), s(t).find("input").focusout(function() {
                    i(t)
                }))
            })
        })
    }(jQuery),
    function(d) {
        d(document).ready(function() {
            function e() {
                d(".table-inner").each(function(e, t) {
                    d(t).parent().removeClass("overflow").attr("style", ""), d(t).siblings(".table-overflow").remove();
                    var n = d(t).overflown_width(),
                        i = d(t).height(),
                        s = d(t).width(),
                        a = d(t).children("table").width(),
                        o = d(window).width(),
                        l = a + 2;
                    o <= l && (l = o - 52);
                    var r = 0;
                    if (1400 <= l) r = 0 - (r = (l - 1168) / 2);
                    if ((l < 1400 || s < 1168) && (l = s), 1 == n)
                        if (1400 <= l && d(t).parent().addClass("overflow").css({
                                height: i + 2,
                                width: l,
                                left: r
                            }), l + 20 < a) {
                            d(t).after('<div class="table-overflow">Scroll <span class="fa fa-arrow-right"></span></div>');
                            d(t).parent().scroll(function() {
                                0 < d(t).parent().scrollLeft() && d(t).siblings(".table-overflow").hide()
                            })
                        } else d(t).parent(".table-wrapper").css("overflow", "visible")
                })
            }
            d("table").once("wrapTable", function() {
                d(this).each(function(e, t) {
                    d(t).wrap('<div class="table-wrapper"><div class="table-inner"></div></div>')
                })
            }), d.fn.overflown_width = function() {
                var e = this[0];
                return e.scrollWidth > e.clientWidth
            }, d(window).load(function() {
                e()
            }), d(window).resize(function() {
                e()
            })
        })
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            0 != e(".group-publication-authors").find(".field--nist-authors").length && 0 != e(".group-publication-authors").find(".field--non-nist-authors").length && e(".group-publication-authors .field--nist-authors .textformatter-list").append(", ")
        }), e(document).ready(function() {
            e(".megamenu-fake-link").click(function(e) {
                e.preventDefault()
            })
        }), e(document).ready(function() {
            e("#block-gtranslate-gtranslate select").attr("name", "google_translate").attr("id", "google_translate").before('<label class="element-invisible" for="google_translate">Translate</label>')
        }), e(document).ready(function() {
            e(".panel-region--left-sidebar fieldset.collapsible").removeClass("collapsed")
        }), e(document).ready(function() {
            e("#cboxPrevious").append("Prev</button>"), e("#cboxPrevious").attr("value", "Previous Item"), e("#cboxNext").append("Next</button>"), e("#cboxNext").attr("value", "Next Item"), e("#cboxSlideshow").append("Slideshow</button>"), e("#cboxSlideshow").attr("value", "Slideshow")
        }), e(document).ready(function() {
            e("html").removeClass("no-js").addClass("js")
        })
    }(jQuery),
    function(n) {
        n(document).ready(function() {
            n("a[href*=#]:not([href=#],.no-scroll)").click(function() {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
                    var e = n(this.hash),
                        t = 0;
                    if (n("body").hasClass("navbar-administration") && (t += 39), n("body").hasClass("section-featured-stories") && (t += 60), (e = e.length ? e : n("[name=" + this.hash.slice(1) + "]")).length) return n("html,body").animate({
                        scrollTop: e.offset().top - t
                    }, 500), !1
                }
            })
        }), n(window).scroll(function() {
            var e = n(window).scrollTop();
            100 <= e && n("body").addClass("is-scrolled"), e < 100 && n("body").removeClass("is-scrolled")
        })
    }(jQuery),
    function(n) {
        Drupal.behaviors.sod = {
            attach: function(e, t) {
                n("#main select:not([multiple])").not("#edit-term-node-tid-depth,#edit-term-node-tid-depth-1,.no-sod,.no-sod select").selectOrDie({
                    customClass: "standard-select",
                    size: 10
                })
            }
        }, n(window).load(function() {
            var e = n(".panel-region--left-sidebar .views-widget-filter-secondary").width();
            n(".panel-region--left-sidebar .sod_select").css("width", e - 40 + "px"), n(".panel-region--left-sidebar .sod_list_wrapper").css("width", e - 40 + "px")
        }), n(window).resize(function() {
            var e = n(".panel-region--left-sidebar .views-widget-filter-secondary").width();
            n(".panel-region--left-sidebar .sod_select").css("width", e - 40 + "px"), n(".panel-region--left-sidebar .sod_list_wrapper").css("width", e - 40 + "px")
        })
    }(jQuery),
    function(C) {
        "use strict";
        C.fn.selectOrDie = function(e) {
            var c, o, t = {
                    customID: null,
                    customClass: "",
                    placeholder: null,
                    placeholderOption: !1,
                    prefix: null,
                    cycle: !1,
                    stripEmpty: !1,
                    links: !1,
                    linksExternal: !1,
                    size: 0,
                    tabIndex: 0,
                    onChange: C.noop
                },
                y = {},
                u = !1,
                _ = {
                    initSoD: function(e) {
                        return y = C.extend({}, t, e), this.each(function() {
                            if (C(this).parent().hasClass("sod_select")) console.log("Select or Die: It looks like the SoD already exists");
                            else {
                                var n, e, i, t = C(this),
                                    s = t.data("custom-id") ? t.data("custom-id") : y.customID,
                                    a = t.data("custom-class") ? t.data("custom-class") : y.customClass,
                                    o = t.data("prefix") ? t.data("prefix") : y.prefix,
                                    l = t.data("placeholder") ? t.data("placeholder") : y.placeholder,
                                    r = t.data("placeholder-option") ? t.data("placeholder-option") : y.placeholderOption,
                                    d = t.data("cycle") ? t.data("cycle") : y.cycle,
                                    c = t.data("links") ? t.data("links") : y.links,
                                    u = t.data("links-external") ? t.data("links-external") : y.linksExternal,
                                    h = parseInt(t.data("size")) ? t.data("size") : y.size,
                                    f = parseInt(t.data("tabindex")) ? t.data("tabindex") : y.tabIndex ? y.tabIndex : t.attr("tabindex") ? t.attr("tabindex") : y.tabIndex,
                                    p = t.data("strip-empty") ? t.data("strip-empty") : y.stripEmpty,
                                    m = t.prop("title") ? t.prop("title") : null,
                                    v = t.is(":disabled") ? " disabled" : "",
                                    g = "",
                                    b = "",
                                    w = 0;
                                o && (g = '<span class="sod_prefix">' + o + "</span> "), n = C("<span/>", {
                                    id: s,
                                    class: "sod_select " + a + v,
                                    title: m,
                                    tabindex: f,
                                    html: b += l && !o ? '<span class="sod_label sod_placeholder">' + l + "</span>" : '<span class="sod_label">' + g + "</span>",
                                    "data-cycle": d,
                                    "data-links": c,
                                    "data-links-external": u,
                                    "data-placeholder": l,
                                    "data-placeholder-option": r,
                                    "data-prefix": o,
                                    "data-filter": ""
                                }).insertAfter(this), _.isTouch() && n.addClass("touch"), e = C("<span/>", {
                                    class: "sod_list_wrapper"
                                }).appendTo(n), i = C("<span/>", {
                                    class: "sod_list"
                                }).appendTo(e), C("option, optgroup", t).each(function(e) {
                                    var t = C(this);
                                    p && !C.trim(t.text()) ? t.remove() : 0 === e && r && !g ? _.populateSoD(t, i, n, !0) : _.populateSoD(t, i, n, !1)
                                }), h && (e.show(), C(".sod_option:lt(" + h + ")", i).each(function() {
                                    w += C(this).outerHeight()
                                }), e.removeAttr("style"), i.css({
                                    "max-height": w
                                })), t.appendTo(n), n.on("focusin", _.focusSod).on("click", _.triggerSod).on("click", ".sod_option", _.optionClick).on("mousemove", ".sod_option", _.optionHover).on("keydown", _.keyboardUse), t.on("change", _.selectChange), C(document).on("click", "label[for='" + t.attr("id") + "']", function(e) {
                                    e.preventDefault(), n.focus()
                                })
                            }
                        })
                    },
                    populateSoD: function(e, t, n, i) {
                        var s = n.data("placeholder"),
                            a = n.data("placeholder-option"),
                            o = n.data("prefix"),
                            l = n.find(".sod_label"),
                            r = e.parent(),
                            d = e.text(),
                            c = e.val(),
                            u = e.data("custom-id") ? e.data("custom-id") : null,
                            h = e.data("custom-class") ? e.data("custom-class") : "",
                            f = e.is(":disabled") ? " disabled " : "",
                            p = e.is(":selected") ? " selected active " : "",
                            m = e.data("link") ? " link " : "",
                            v = e.data("link-external") ? " linkexternal" : "",
                            g = e.prop("label");
                        e.is("option") ? (C("<span/>", {
                            class: "sod_option " + h + f + p + m + v,
                            id: u,
                            title: d,
                            html: d,
                            "data-value": c
                        }).appendTo(t), i && !o ? (n.data("label", d), n.data("placeholder", d), e.prop("disabled", !0), t.find(".sod_option:last").addClass("is-placeholder disabled"), p && l.addClass("sod_placeholder")) : p && s && !a && !o ? n.data("label", s) : p && n.data("label", d), (p && !s || p && a || p && o) && l.append(d), r.is("optgroup") && (t.find(".sod_option:last").addClass("groupchild"), r.is(":disabled") && t.find(".sod_option:last").addClass("disabled"))) : C("<span/>", {
                            class: "sod_option optgroup " + f,
                            title: g,
                            html: g,
                            "data-label": g
                        }).appendTo(t)
                    },
                    focusSod: function() {
                        var e = C(this);
                        e.hasClass("disabled") ? _.blurSod(e) : (_.blurSod(C(".sod_select.focus").not(e)), e.addClass("focus"), C("html").on("click.sodBlur", function() {
                            _.blurSod(e)
                        }))
                    },
                    triggerSod: function(e) {
                        e.stopPropagation();
                        var t = C(this),
                            n = t.find(".sod_list"),
                            i = t.data("placeholder"),
                            s = t.find(".active"),
                            a = t.find(".selected");
                        t.hasClass("disabled") || t.hasClass("open") || t.hasClass("touch") ? (clearTimeout(o), t.removeClass("open"), i && (t.find(".sod_label").get(0).lastChild.nodeValue = s.text())) : (t.addClass("open"), i && !t.data("prefix") && t.find(".sod_label").addClass("sod_placeholder").html(i), _.listScroll(n, a), _.checkViewport(t, n))
                    },
                    keyboardUse: function(e) {
                        var t, n, i, s = C(this),
                            a = s.find(".sod_list"),
                            o = s.find(".sod_option"),
                            l = s.find(".sod_label"),
                            r = s.data("cycle"),
                            d = o.filter(".active");
                        return 36 < e.which && e.which < 41 ? (37 === e.which || 38 === e.which ? (n = d.prevAll(":not('.disabled, .optgroup')").first(), i = o.not(".disabled, .optgroup").last()) : (39 === e.which || 40 === e.which) && (n = d.nextAll(":not('.disabled, .optgroup')").first(), i = o.not(".disabled, .optgroup").first()), !n.hasClass("sod_option") && r && (n = i), (n.hasClass("sod_option") || r) && (d.removeClass("active"), n.addClass("active"), l.get(0).lastChild.nodeValue = n.text(), _.listScroll(a, n), s.hasClass("open") || (u = !0)), !1) : (13 === e.which || 32 === e.which && s.hasClass("open") && (" " === s.data("filter")[0] || "" === s.data("filter")) ? (e.preventDefault(), d.click()) : 32 !== e.which || s.hasClass("open") || " " !== s.data("filter")[0] && "" !== s.data("filter") ? 27 === e.which && _.blurSod(s) : (e.preventDefault(), u = !1, s.click()), void(0 !== e.which && (clearTimeout(c), s.data("filter", s.data("filter") + String.fromCharCode(e.which)), (t = o.filter(function() {
                            return 0 === C(this).text().toLowerCase().indexOf(s.data("filter").toLowerCase())
                        }).not(".disabled, .optgroup").first()).length && (d.removeClass("active"), t.addClass("active"), _.listScroll(a, t), l.get(0).lastChild.nodeValue = t.text(), s.hasClass("open") || (u = !0)), c = setTimeout(function() {
                            s.data("filter", "")
                        }, 500))))
                    },
                    optionHover: function() {
                        var e = C(this);
                        e.hasClass("disabled") || e.hasClass("optgroup") || e.siblings().removeClass("active").end().addClass("active")
                    },
                    optionClick: function(e) {
                        e.stopPropagation();
                        var t = C(this),
                            n = t.closest(".sod_select"),
                            i = t.hasClass("disabled"),
                            s = t.hasClass("optgroup"),
                            a = n.find(".sod_option:not('.optgroup')").index(this);
                        n.hasClass("touch") || (i || s || (n.find(".selected, .sod_placeholder").removeClass("selected sod_placeholder"), t.addClass("selected"), n.find("select option")[a].selected = !0, n.find("select").change()), clearTimeout(o), n.removeClass("open"))
                    },
                    selectChange: function() {
                        var e = C(this),
                            t = e.find(":selected"),
                            n = t.text(),
                            i = e.closest(".sod_select");
                        i.find(".sod_label").get(0).lastChild.nodeValue = n, i.data("label", n), y.onChange.call(this), !i.data("links") && !t.data("link") || t.data("link-external") ? (i.data("links-external") || t.data("link-external")) && window.open(t.val(), "_blank") : window.location.href = t.val()
                    },
                    blurSod: function(e) {
                        if (C("body").find(e).length) {
                            var t = e.data("label"),
                                n = e.data("placeholder"),
                                i = e.find(".active"),
                                s = e.find(".selected"),
                                a = !1;
                            clearTimeout(o), u && !i.hasClass("selected") ? (i.click(), a = !0) : i.hasClass("selected") || (i.removeClass("active"), s.addClass("active")), !a && n ? e.find(".sod_label").get(0).lastChild.nodeValue = s.text() : a || (e.find(".sod_label").get(0).lastChild.nodeValue = t), u = !1, e.removeClass("open focus"), e.blur(), C("html").off(".sodBlur")
                        }
                    },
                    checkViewport: function(e, t) {
                        var n = e[0].getBoundingClientRect(),
                            i = t.outerHeight();
                        n.bottom + i + 10 > C(window).height() && 10 < n.top - i ? e.addClass("above") : e.removeClass("above"), o = setTimeout(function() {
                            _.checkViewport(e, t)
                        }, 200)
                    },
                    listScroll: function(e, t) {
                        var n = e[0].getBoundingClientRect(),
                            i = t[0].getBoundingClientRect();
                        n.top > i.top ? e.scrollTop(e.scrollTop() - n.top + i.top) : n.bottom < i.bottom && e.scrollTop(e.scrollTop() - n.bottom + i.bottom)
                    },
                    isTouch: function() {
                        return "ontouchstart" in window || 0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints
                    }
                },
                n = {
                    destroy: function() {
                        return this.each(function() {
                            var e = C(this),
                                t = e.parent();
                            t.hasClass("sod_select") ? (e.off("change"), t.find("span").remove(), e.unwrap()) : console.log("Select or Die: There's no SoD to destroy")
                        })
                    },
                    update: function() {
                        return this.each(function() {
                            var e = C(this),
                                t = e.parent(),
                                n = t.find(".sod_list:first");
                            t.hasClass("sod_select") ? (n.empty(), t.find(".sod_label").get(0).lastChild.nodeValue = "", e.is(":disabled") && t.addClass("disabled"), C("option, optgroup", e).each(function() {
                                _.populateSoD(C(this), n, t)
                            })) : console.log("Select or Die: There's no SoD to update")
                        })
                    },
                    disable: function(n) {
                        return this.each(function() {
                            var e = C(this),
                                t = e.parent();
                            t.hasClass("sod_select") ? void 0 !== n ? (t.find(".sod_list:first .sod_option[data-value='" + n + "']").addClass("disabled"), t.find(".sod_list:first .sod_option[data-label='" + n + "']").nextUntil(":not(.groupchild)").addClass("disabled"), C("option[value='" + n + "'], optgroup[label='" + n + "']", this).prop("disabled", !0)) : t.hasClass("sod_select") && (t.addClass("disabled"), e.prop("disabled", !0)) : console.log("Select or Die: There's no SoD to disable")
                        })
                    },
                    enable: function(n) {
                        return this.each(function() {
                            var e = C(this),
                                t = e.parent();
                            t.hasClass("sod_select") ? void 0 !== n ? (t.find(".sod_list:first .sod_option[data-value='" + n + "']").removeClass("disabled"), t.find(".sod_list:first .sod_option[data-label='" + n + "']").nextUntil(":not(.groupchild)").removeClass("disabled"), C("option[value='" + n + "'], optgroup[label='" + n + "']", this).prop("disabled", !1)) : t.hasClass("sod_select") && (t.removeClass("disabled"), e.prop("disabled", !1)) : console.log("Select or Die: There's no SoD to enable")
                        })
                    }
                };
            return n[e] ? n[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void C.error('Select or Die: Oh no! No such method "' + e + '" for the SoD instance') : _.initSoD.apply(this, arguments)
        }
    }(jQuery),
    function(t) {
        t(document).ready(function() {
            t("#timeline__toggle-timeline").click(function(e) {
                e.preventDefault(), t(this).hasClass("active") || (t(".timeline-list").fadeOut(300, function() {
                    t(".timeline-actual").fadeIn(300)
                }), t(this).addClass("active"), t("#timeline__toggle-list").removeClass("active"))
            }), t("#timeline__toggle-list").click(function(e) {
                e.preventDefault(), t(this).hasClass("active") || (t(".timeline-actual").fadeOut(300, function() {
                    t(".timeline-list").fadeIn(300)
                }), t(this).addClass("active"), t("#timeline__toggle-timeline").removeClass("active"))
            })
        })
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            e(".toc__toggle-btn").click(function() {
                e(".toc").toggleClass("is-open")
            }), e(".toc__menu a").click(function() {
                e(".toc").removeClass("is-open")
            })
        })
    }(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzc2libGUtY29sbGFwc2UuanMiLCJhZGR0aGlzLWFjY2VzaWJpbGl0eS5qcyIsImNhbGVuZGFyLXRvZ2dsZXMuanMiLCJjb2x1bW5pemVyLWluaXQuanMiLCJjdXN0b21FcXVhbEhlaWdodHMuanMiLCJkcnVwYWwtYWpheC1jbGFzcy5qcyIsImVucXVpcmUubWluLmpzIiwiZmxleHNsaWRlci1mdWxsc2NyZWVuLmpzIiwiZm9udGZhY2VvYnNlcnZlci5qcyIsImZvcm0tZXhwYW5kYWJsZS1oZWxwLmpzIiwiaWZyYW1lX3Jlc2l6ZS5qcyIsImltYWdlLWNvbnRhaW5lci5qcyIsImpxdWVyeS5jb2x1bW5pemVyLm1pbi5qcyIsImpxdWVyeS5mb3JtYWxpemUubGVnYWN5Lm1pbi5qcyIsImxvYWQtZm9udHMuanMiLCJtYWduaWZpYy1wb3B1cC1zZXR0aW5ncy5qcyIsIm1lZ2FtZW51LS1uZXcuanMiLCJtZW51LWNvbHVtbnMuanMiLCJtZW51LXRyZWUtY29sbGFwc2UuanMiLCJuaXN0LXN2Zy5qcyIsInBsYWNlaG9sZGVycy5qcyIsInByaW1hcnktZmlsdGVyLmpzIiwicmVzcG9uc2l2ZS10YWJsZXMuanMiLCJzY3JpcHQuanMiLCJzY3JvbGwuanMiLCJzZWxlY3RvcmRpZS1pbml0LmpzIiwic2VsZWN0b3JkaWUubWluLmpzIiwidGltZWxpbmUtdG9nZ2xlLmpzIiwidG9jLmpzIl0sIm5hbWVzIjpbIiQiLCJEcnVwYWwiLCJiZWhhdmlvcnMiLCJhY2Nlc3NpYmxlQ29sbGFwc2UiLCJhdHRhY2giLCJjb250ZXh0Iiwic2V0dGluZ3MiLCJhdHRyIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJ3aGljaCIsInRoaXMiLCJjbGljayIsImpRdWVyeSIsInJlYWR5IiwiYWRkVGhpc0NoZWNrZXIiLCJsZW5ndGgiLCJlYWNoIiwic3BhblRpdGxlIiwiaHRtbCIsInBhcmVudCIsInNldFRpbWVvdXQiLCJwcmV2ZW50RGVmYXVsdCIsImZhZGVUb2dnbGUiLCJrZXl1cCIsImtleUNvZGUiLCJmYWRlT3V0Iiwic2VsZWN0b3JBcnJheSIsImNhbGVuZGFyT24iLCJoYXNDbGFzcyIsImZhZGVJbiIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjYWxlbmRhck9mZiIsImtleSIsInNlbGVjdG9yIiwiYWpheENvbXBsZXRlIiwid2luZG93IiwibG9hZCIsImxvYWRlZCIsImVucXVpcmUiLCJyZWdpc3RlciIsIm1hdGNoIiwidW5tYXRjaCIsInNldHVwIiwiZGVmZXJTZXR1cCIsImRlc3Ryb3kiLCJjb2x1bW5pemUiLCJjb2x1bW5zIiwibGFzdE5ldmVyVGFsbGVzdCIsImRvZXNFbGVtZW50RXhpc3RXaXRoTXVsdGlwbGUiLCJoZWlnaHRBcnJheSIsImdyZWF0ZXN0SGVpZ2h0IiwiaXRlbUhlaWdodCIsIm91dGVySGVpZ2h0IiwicHVzaCIsIk1hdGgiLCJtYXgiLCJhcHBseSIsImNzcyIsInJlbW92ZUdyZWF0ZXN0SGVpZ2h0IiwicmVzaXplIiwid2lkdGgiLCJ0ZXN0QWpheCIsInVuZGVmaW5lZCIsInZpZXdzIiwiYWpheFZpZXdzIiwiYSIsImIiLCJjIiwiZCIsIm1hdGNoTWVkaWEiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmaW5lIiwiYW1kIiwib3B0aW9ucyIsImYiLCJxdWVyeSIsImlzVW5jb25kaXRpb25hbCIsImhhbmRsZXJzIiwibXFsIiwibGlzdGVuZXIiLCJhc3Nlc3MiLCJhZGRMaXN0ZW5lciIsImciLCJFcnJvciIsInF1ZXJpZXMiLCJicm93c2VySXNJbmNhcGFibGUiLCJtYXRjaGVzIiwicHJvdG90eXBlIiwiaW5pdGlhbGlzZWQiLCJvZmYiLCJlcXVhbHMiLCJhZGRIYW5kbGVyIiwicmVtb3ZlSGFuZGxlciIsInNwbGljZSIsImNsZWFyIiwicmVtb3ZlTGlzdGVuZXIiLCJoIiwiaSIsIk9iamVjdCIsInRvU3RyaW5nIiwidW5yZWdpc3RlciIsInJlc2l6ZVNsaWRlciIsInNsaWRlciIsImZ1bGxzY3JlZW5DbG9zZSIsIm5pc3RzbGlkZXIiLCJmaW5kIiwiZWxlbSIsImltZyIsImRpdiIsImJhY2tncm91bmQtaW1hZ2UiLCJhZnRlciIsImNsb3Nlc3QiLCJiaW5kIiwidGV4dCIsImNvdW50IiwiY3VycmVudFNsaWRlIiwibSIsInNoaWZ0IiwibiIsInAiLCJxIiwiVHlwZUVycm9yIiwidGhlbiIsImNhbGwiLCJyIiwidiIsInUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJhY2UiLCJhbGwiLCJrIiwibCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwic3R5bGUiLCJjc3NUZXh0IiwidCIsInkiLCJvZmZzZXRXaWR0aCIsInNjcm9sbExlZnQiLCJzY3JvbGxXaWR0aCIsInoiLCJwYXJlbnROb2RlIiwiQSIsImZhbWlseSIsIndlaWdodCIsInN0cmV0Y2giLCJCIiwiQyIsIkUiLCJGIiwiSiIsImZvbnRzIiwiTCIsImZvbnQiLCJLIiwiam9pbiIsIkQiLCJIIiwiRGF0ZSIsImdldFRpbWUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidmVuZG9yIiwiZXhlYyIsInVzZXJBZ2VudCIsInBhcnNlSW50IiwiRyIsIk0iLCJOIiwiY2xlYXJUaW1lb3V0IiwidyIsIngiLCJyZW1vdmVDaGlsZCIsImRpciIsImJvZHkiLCJJIiwiaGlkZGVuIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlYWR5U3RhdGUiLCJkZXRhY2hFdmVudCIsIkZvbnRGYWNlT2JzZXJ2ZXIiLCJpbnB1dElEIiwicmVwbGFjZSIsImhlbHBFbGVtZW50IiwiZmlyc3QiLCJoaWRlIiwiYXBwZW5kIiwidG9nZ2xlQ2xhc3MiLCJzaWJsaW5ncyIsInNsaWRlVG9nZ2xlIiwiaWZyYW1lUmVzaXplIiwiaGVpZ2h0IiwiZGF0YSIsInBhcnNlRmxvYXQiLCJzdHlsZXMiLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsIndyYXAiLCJpc051bWVyaWMiLCJyZW1vdmVBdHRyIiwib25sb2FkIiwiaW1hZ2VDb250YWluZXIiLCJzY3JlZW5JbWFnZSIsInRoZUltYWdlIiwiSW1hZ2UiLCJzcmMiLCJpbWFnZVdpZHRoIiwic2NyZWVuSW1hZ2VXaWR0aCIsImZuIiwiY29scyIsIm9mZnNldCIsImJlZm9yZSIsImxhc3RPdGhlciIsInByZXZNYXgiLCJkZWJ1ZyIsInNldENvbHVtblN0YXJ0IiwiZGVmYXVsdHMiLCJidWlsZE9uY2UiLCJvdmVyZmxvdyIsImRvbmVGdW5jIiwidGFyZ2V0IiwiaWdub3JlSW1hZ2VMb2FkaW5nIiwiZWxpcHNpc1RleHQiLCJjb2x1bW5GbG9hdCIsImFjY3VyYWN5IiwicHJlY2lzZSIsIm1hbnVhbEJyZWFrcyIsImNzc0NsYXNzUHJlZml4IiwiYXBwZW5kU2FmZSIsIiR0YXJnZXQiLCIkZWxlbSIsImV4dGVuZCIsImlzTmFOIiwic2V0V2lkdGgiLCJudW1Db2xzIiwiZmxvb3IiLCIkaW5Cb3giLCJtYXhIZWlnaHQiLCIkY2FjaGUiLCJsYXN0V2lkdGgiLCJjb250ZW50cyIsImNsb25lIiwiZnVuYyIsImVtcHR5IiwiY2hpbGRyZW4iLCJvbmUiLCJwcmVmaXhUaGVDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJ3aXRoRG90IiwiZG90IiwiJHB1dEluSGVyZSIsIiRwdWxsT3V0SGVyZSIsIiRwYXJlbnRDb2x1bW4iLCJ0YXJnZXRIZWlnaHQiLCJjaGlsZE5vZGVzIiwibm9kZSIsImtpZHMiLCJsYXN0S2lkIiwiJGl0ZW0iLCJub2RlVHlwZSIsImNvbHVtblRleHQiLCJvVGV4dCIsIm5vZGVWYWx1ZSIsImNvdW50ZXIyIiwibGF0ZXN0VGV4dE5vZGUiLCJpbmRleE9mU3BhY2UiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwicHJlcGVuZCIsInNwbGl0IiwiJGNsb25lTWUiLCJnZXQiLCIkY2xvbmUiLCJyZW1vdmUiLCJpcyIsInRhZ05hbWUiLCJzdGFydFdpdGgiLCJjaGlsZEVsZW1lbnRDb3VudCIsInN0YXJ0Iiwib25seU5vZGUiLCJzdHIiLCJjaGVja0RvbnRFbmRDb2x1bW4iLCJkb20iLCJwcmV2aW91c1NpYmxpbmciLCJjb2x1bW5pemVJdCIsInJvdW5kIiwib3B0aW9uV2lkdGgiLCJvcHRpb25IZWlnaHQiLCIkY29sIiwiZXEiLCIkZGVzdHJveWFibGUiLCIkbGFzdEtpZCIsImtpZCIsImF0dHJpYnV0ZXMiLCJub2RlTmFtZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVySFRNTCIsImlkIiwic2luZ2xlQ29sdW1uaXplSXQiLCJtYXhMb29wcyIsInNjcm9sbEhvcml6b250YWxseSIsImxvb3BDb3VudCIsImFwcFZlcnNpb24iLCJ0b3RhbEgiLCJtaW4iLCJsYXN0SXNNYXgiLCJudW1iZXJPZkNvbHVtbnNUaGF0RG9udEVuZEluQUNvbHVtbkJyZWFrIiwiYXZnSCIsImFicyIsInJlbnVtYmVyQnlKUyIsIiRzZWFyY2hUYWciLCIkY29sbm8iLCIkdGFyZ2V0SWQiLCIkdGFyZ2V0Q2xhc3MiLCJzZXRMaXN0IiwiJGNvbHMiLCIkbGlzdCIsIiR0YWcxIiwiJHJlc3QiLCIkcGFyZW50cyIsInBhcmVudHMiLCJsYXN0IiwidG9VcHBlckNhc2UiLCJjb25zb2xlIiwibG9nIiwiJHR0IiwiJHRpbnQiLCIkd2hlcmVFbGlwc2lzIiwiJHR4dCIsIiRsZW4iLCJuZXN0IiwidHJpbSIsInRvTG93ZXJDYXNlIiwiJHRhZzIiLCIkcmVzZXQiLCJGT1JNQUxJWkUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdvIiwiaW5pdCIsImhhc093blByb3BlcnR5IiwiZGlzYWJsZV9saW5rX2J1dHRvbiIsImRvY3VtZW50RWxlbWVudCIsImRlbGVnYXRlIiwiZnVsbF9pbnB1dF9zaXplIiwiaWU2X3NraW5faW5wdXRzIiwiZ2V0QXR0cmlidXRlIiwiZGlzYWJsZWQiLCJhdXRvZm9jdXMiLCJmb2N1cyIsInBsYWNlaG9sZGVyIiwibWlzYyIsImFkZF9wbGFjZWhvbGRlciIsInR5cGUiLCJ2YWwiLCJibHVyIiwic3VibWl0IiwibWFnbmlmaWMiLCJtYWduaWZpY1BvcHVwIiwiZ2FsbGVyeSIsImVuYWJsZWQiLCJpbWFnZSIsIm1hcmt1cCIsImN1cnNvciIsInRpdGxlU3JjIiwiaXRlbSIsImluZm8iLCJlbCIsInZlcnRpY2FsRml0IiwidEVycm9yIiwiaWZyYW1lIiwicGF0dGVybnMiLCJ5b3V0dWJlIiwiaW5kZXgiLCJ2aW1lbyIsImdtYXBzIiwia2FsdHVyYSIsInNyY0FjdGlvbiIsImNhbGxiYWNrcyIsIm1hcmt1cFBhcnNlIiwidGVtcGxhdGUiLCJ2YWx1ZXMiLCJ0aXRsZSIsImNsb3NlTWVnYW1lbnUiLCJmb2N1c2luIiwiZm9jdXNvdXQiLCJ3cmFwSW5uZXIiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwiYW1vdW50T2ZDb2x1bW5zIiwiYm91bmRhcnkiLCJpbnNlcnRBZnRlciIsIm5leHRBbGwiLCJhbmRTZWxmIiwiY3VycmVudENvbHVtbkNvbnRhaW5lciIsIm1lbnVUcmVlIiwiZXhwYW5kQ29sbGFwc2UiLCJleHBhbmRlciIsIiR0aGlzU3VibWVudSIsIm9uY2UiLCJlbGVtZW50IiwiYm94Iiwidmlld0JveCIsImJhc2VWYWwiLCJyYXRpbyIsInZhbHVlIiwidG9vbFRpcFRleHQiLCJldmVudCIsImVsZW1lbnROdW1iZXIiLCJlbGVtZW50VG9TaG93IiwiY2hlY2tWYWx1ZSIsImFtb3VudE9mRWxlbWVudHMiLCJ0YWJsZU92ZXJmbG93Iiwib3ZlcmZsb3duIiwib3ZlcmZsb3duX3dpZHRoIiwidGFibGVfd2lkdGgiLCJicm93c2VyX3dpZHRoIiwid3JhcHBlcl93aWR0aCIsImxlZnQiLCJzY3JvbGwiLCJjbGllbnRXaWR0aCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJob3N0bmFtZSIsImhhc2giLCJoZWFkZXJIZWlnaHQiLCJzbGljZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0b3AiLCJzb2QiLCJub3QiLCJzZWxlY3RPckRpZSIsImN1c3RvbUNsYXNzIiwic2l6ZSIsImxlZnRDb2xXaWR0aCIsImN1c3RvbUlEIiwicGxhY2Vob2xkZXJPcHRpb24iLCJwcmVmaXgiLCJjeWNsZSIsInN0cmlwRW1wdHkiLCJsaW5rcyIsImxpbmtzRXh0ZXJuYWwiLCJ0YWJJbmRleCIsIm9uQ2hhbmdlIiwibm9vcCIsImluaXRTb0QiLCJqIiwibyIsInByb3AiLCJzIiwiY2xhc3MiLCJ0YWJpbmRleCIsImRhdGEtY3ljbGUiLCJkYXRhLWxpbmtzIiwiZGF0YS1saW5rcy1leHRlcm5hbCIsImRhdGEtcGxhY2Vob2xkZXIiLCJkYXRhLXBsYWNlaG9sZGVyLW9wdGlvbiIsImRhdGEtcHJlZml4IiwiZGF0YS1maWx0ZXIiLCJpc1RvdWNoIiwiYXBwZW5kVG8iLCJwb3B1bGF0ZVNvRCIsInNob3ciLCJtYXgtaGVpZ2h0IiwiZm9jdXNTb2QiLCJ0cmlnZ2VyU29kIiwib3B0aW9uQ2xpY2siLCJvcHRpb25Ib3ZlciIsImtleWJvYXJkVXNlIiwic2VsZWN0Q2hhbmdlIiwiZGF0YS12YWx1ZSIsImRhdGEtbGFiZWwiLCJibHVyU29kIiwic3RvcFByb3BhZ2F0aW9uIiwibGFzdENoaWxkIiwibGlzdFNjcm9sbCIsImNoZWNrVmlld3BvcnQiLCJmaWx0ZXIiLCJwcmV2QWxsIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiZW5kIiwic2VsZWN0ZWQiLCJjaGFuZ2UiLCJvcGVuIiwiaHJlZiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJvdHRvbSIsIk1heFRvdWNoUG9pbnRzIiwibXNNYXhUb3VjaFBvaW50cyIsInVud3JhcCIsInVwZGF0ZSIsImRpc2FibGUiLCJuZXh0VW50aWwiLCJlbmFibGUiLCJBcnJheSIsImFyZ3VtZW50cyIsImVycm9yIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFBQSxHQUNBQyxPQUFBQyxVQUFBQyxtQkFBQSxDQUNBQyxPQUFBLFNBQUFDLEVBQUFDLEdBSUFOLEVBQUEsOEJBQUFPLEtBQUEsV0FBQSxLQUVBUCxFQUFBUSxVQUFBQyxHQUFBLFFBQUEsNkJBQUEsU0FBQUMsR0FDQSxJQUFBQSxFQUFBQyxPQUFBLElBQUFELEVBQUFDLE9BQ0FYLEVBQUFZLE1BQUFDLFlBVkEsQ0FnQkFDLFFDaEJBLFNBQUFkLEdBR0FBLEVBQUFRLFVBQUFPLE1BQUEsV0EyQkEsU0FBQUMsSUFFQSxHQUFBaEIsRUFBQSw0QkFBQWlCLFNBRUEsR0FBQWpCLEVBQUEsV0FBQWlCLE9BY0FqQixFQUFBLGtCQUFBa0IsS0FBQSxXQUVBLElBQUFDLEVBQUFuQixFQUFBWSxNQUFBTCxLQUFBLFNBQ0FQLEVBQUFZLE1BQUFRLEtBQUEsbUNBQUFELEVBQUEsV0FDQW5CLEVBQUFZLE1BQUFTLE9BQUEsS0FBQWQsS0FBQSxPQUFBLE9BTUFlLFdBQUEsV0FBQU4sS0FBQSxNQXBEQWhCLEVBQUEsdUNBQUFhLE1BQUEsU0FBQUgsR0FDQUEsRUFBQWEsaUJBQ0F2QixFQUFBLDRCQUFBd0IsZUFLQXhCLEVBQUFRLFVBQUFpQixNQUFBLFNBQUFmLEdBQ0EsSUFBQUEsRUFBQWdCLFNBQ0ExQixFQUFBLDRCQUFBMkIsWUFhQVgsTUE1QkEsQ0FpRUFGLFFDakVBLFNBQUFkLEdBS0EsSUFBQTRCLEVBQUEsQ0FDQSx5Q0FvQkEsU0FBQUMsSUFDQTdCLEVBQUEsOEJBQUE4QixTQUFBLFlBSUE5QixFQUFBLHNDQUFBMkIsUUFBQSxFQUFBLFdBQ0EzQixFQUFBLHdDQUFBK0IsT0FBQSxPQUdBL0IsRUFBQSw4QkFBQWdDLFNBQUEsVUFDQWhDLEVBQUEsMEJBQUFpQyxZQUFBLFVBQ0FqQyxFQUFBLFFBQUFpQyxZQUFBLGlCQUFBRCxTQUFBLGtCQUlBLFNBQUFFLElBRUFsQyxFQUFBLDBCQUFBOEIsU0FBQSxZQUlBOUIsRUFBQSxRQUFBOEIsU0FBQSxpQkFDQTlCLEVBQUEsd0NBQUEyQixRQUFBLEVBQUEsV0FDQTNCLEVBQUEsdUZBQ0ErQixPQUFBLE9BR0EvQixFQUFBLHVGQUNBK0IsT0FBQSxLQUlBL0IsRUFBQSwwQkFBQWdDLFNBQUEsVUFDQWhDLEVBQUEsOEJBQUFpQyxZQUFBLFVBQ0FqQyxFQUFBLFFBQUFpQyxZQUFBLGlCQUFBQSxZQUFBLGdCQUFBRCxTQUFBLGtCQU1BaEMsRUFBQVEsVUFBQU8sTUFBQSxXQXZEQSxJQUFBYSxFQUFBQSxFQXdEQUEsRUFyREE1QixFQUFBa0IsS0FBQVUsRUFBQSxTQUFBTyxFQUFBQyxHQUlBLEdBRkFwQyxFQUFBb0MsR0FBQW5CLFFBR0FqQixFQUFBLFFBQUFnQyxTQUFBLG1CQW1EQWhDLEVBQUEsOEJBQUFhLE1BQUEsU0FBQUgsR0FDQUEsRUFBQWEsaUJBQ0FNLE1BSUE3QixFQUFBLDBCQUFBYSxNQUFBLFNBQUFILEdBQ0FBLEVBQUFhLGlCQUNBVyxRQU1BbEMsRUFBQVEsVUFBQTZCLGFBQUEsV0FDQXJDLEVBQUEsUUFBQThCLFNBQUEsa0JBQ0FELElBQ0E3QixFQUFBLDhCQUFBZ0MsU0FBQSxVQUNBaEMsRUFBQSwwQkFBQWlDLFlBQUEsV0FFQWpDLEVBQUEsUUFBQThCLFNBQUEsbUJBQ0FJLElBQ0FsQyxFQUFBLDBCQUFBZ0MsU0FBQSxVQUNBaEMsRUFBQSw4QkFBQWlDLFlBQUEsV0FHQWpDLEVBQUEsOEJBQUFhLE1BQUEsU0FBQUgsR0FDQUEsRUFBQWEsaUJBQ0FNLE1BSUE3QixFQUFBLDBCQUFBYSxNQUFBLFNBQUFILEdBQ0FBLEVBQUFhLGlCQUNBVyxRQU1BbEMsRUFBQXNDLFFBQUFDLEtBQUEsV0FDQUQsT0FBQUUsUUFBQSxJQUtBeEMsRUFBQVEsVUFBQU8sTUFBQSxXQU1BMEIsUUFBQUMsU0FBQSwrQkFBQSxDQUlBQyxNQUFBLFdBR0EzQyxFQUFBLFFBQUE4QixTQUFBLG1CQUNBSSxLQUNBLElBQUFJLE9BQUFFLFFBQ0F4QyxFQUFBLFFBQUFnQyxTQUFBLGtCQWFBWSxRQUFBLFdBRUE1QyxFQUFBLFFBQUE4QixTQUFBLGlCQUNBRCxLQVFBZ0IsTUFBQSxhQUtBQyxZQUFBLEVBS0FDLFFBQUEsaUJBdEtBLENBOEtBakMsUUM5S0EsU0FBQWQsR0FNQUEsRUFBQVEsVUFBQU8sTUFBQSxXQUdBZixFQUFBLG1FQUFBZ0QsVUFBQSxDQUNBQyxRQUFBLEVBQ0FDLGtCQUFBLElBR0FsRCxFQUFBLDBEQUFBZ0QsVUFBQSxDQUNBQyxRQUFBLEVBQ0FDLGtCQUFBLE1BaEJBLENBc0JBcEMsUUN0QkEsU0FBQWQsR0FJQSxJQUFBNEIsRUFBQSxDQUNBLCtEQUNBLHlDQUNBLGtDQUNBLDhCQUNBLG9EQUNBLGdCQUNBLGlCQUtBLFNBQUF1QixFQUFBdkIsR0FFQTVCLEVBQUFrQixLQUFBVSxFQUFBLFNBQUFPLEVBQUFDLEdBRUEsSUFVQUEsRUFFQWdCLEVBZ0JBQSxFQUFBaEIsRUFNQWlCLEVBaENBLEVBRkFyRCxFQUFBb0MsR0FBQW5CLFNBWUFtQyxFQUFBLEdBRUFwRCxFQUpBb0MsRUFQQUEsR0FXQWxCLEtBQUEsV0FDQSxJQUFBb0MsRUFBQXRELEVBQUFZLE1BQUEyQyxjQUNBSCxFQUFBSSxLQUFBRixLQVlBRixFQVRBQSxFQVNBaEIsRUFUQUEsRUFlQWlCLEVBTEFJLEtBQUFDLElBQUFDLE1BQUFGLEtBQUFMLEdBT0FwRCxFQUxBb0MsR0FLQXdCLElBQUEsU0FBQVAsRUFBQSxTQUlBLFNBQUFRLEVBQUFqQyxHQUdBNUIsRUFBQWtCLEtBQUFVLEVBQUEsU0FBQU8sRUFBQUMsR0FJQSxFQUZBcEMsRUFBQW9DLEdBQUFuQixRQUdBakIsRUFBQW9DLEdBQUF3QixJQUFBLFNBQUEsVUFVQTVELEVBQUFzQyxRQUFBd0IsT0FBQSxXQUtBLEtBRkE5RCxFQUFBc0MsUUFBQXlCLFVBR0FGLEVBQUFqQyxHQUNBdUIsRUFBQXZCLE1BTUE1QixFQUFBc0MsUUFBQUMsS0FBQSxXQUtBLEtBRkF2QyxFQUFBc0MsUUFBQXlCLFVBR0FGLEVBQUFqQyxHQUNBdUIsRUFBQXZCLElBSUFhLFFBQUFDLFNBQUEsK0JBQUEsQ0FJQUMsTUFBQSxXQUVBa0IsRUFBQWpDLElBT0FnQixRQUFBLFdBRUFPLEVBQUF2QixJQU1BaUIsTUFBQSxhQUtBQyxZQUFBLEVBS0FDLFFBQUEsaUJBcklBLENBZ0pBakMsUUNoSkEsU0FBQWQsR0FFQUMsT0FBQUMsVUFBQThELFNBQUEsQ0FFQTVELE9BQUEsU0FBQUMsRUFBQUMsR0FDQTJELE1BQUE1RCxFQUFBQSxTQUFBQyxFQUFBNEQsT0FBQTVELEVBQUE0RCxNQUFBQyxXQUNBbkUsRUFBQSxRQUFBZ0MsU0FBQSxjQU5BLENBV0FsQixRQ0xBLFNBQUFzRCxFQUFBQyxFQUFBQyxHQUFBLElBQUFDLEVBQUFqQyxPQUFBa0MsV0FBQSxvQkFBQUMsUUFBQUEsT0FBQUMsUUFBQUQsT0FBQUMsUUFBQUosRUFBQUMsR0FBQSxtQkFBQUksUUFBQUEsT0FBQUMsSUFBQUQsT0FBQSxXQUFBLE9BQUFOLEVBQUFELEdBQUFFLEVBQUFDLEtBQUFGLEVBQUFELEdBQUFFLEVBQUFDLEdBQUEsQ0FBQSxVQUFBM0QsS0FBQSxTQUFBd0QsR0FBQSxhQUFBLFNBQUFDLEVBQUFELEVBQUFDLEdBQUEsSUFBQSxJQUFBRSxFQUFBLEVBQUE3RCxFQUFBMEQsRUFBQW5ELE9BQUFzRCxFQUFBN0QsSUFBQSxJQUFBMkQsRUFBQUQsRUFBQUcsR0FBQUEsR0FBQUEsTUFBQSxTQUFBQSxFQUFBSCxHQUFBLE1BQUEsbUJBQUFBLEVBQUEsU0FBQTFELEVBQUEwRCxLQUFBeEQsS0FBQWlFLFFBQUFULEdBQUF0QixZQUFBbEMsS0FBQWlDLFFBQUEsU0FBQWlDLEVBQUFULEVBQUFDLEdBQUExRCxLQUFBbUUsTUFBQVYsRUFBQXpELEtBQUFvRSxnQkFBQVYsRUFBQTFELEtBQUFxRSxTQUFBLEdBQUFyRSxLQUFBc0UsSUFBQWQsRUFBQUMsR0FBQSxJQUFBRSxFQUFBM0QsS0FBQUEsS0FBQXVFLFNBQUEsU0FBQWYsR0FBQUcsRUFBQVcsSUFBQWQsRUFBQUcsRUFBQWEsVUFBQXhFLEtBQUFzRSxJQUFBRyxZQUFBekUsS0FBQXVFLFVBQUEsU0FBQUcsSUFBQSxJQUFBbEIsRUFBQSxNQUFBLElBQUFtQixNQUFBLDhEQUFBM0UsS0FBQTRFLFFBQUEsR0FBQTVFLEtBQUE2RSxvQkFBQXJCLEVBQUEsWUFBQXNCLFFBQUEsT0FBQWhGLEVBQUFpRixVQUFBLENBQUE5QyxNQUFBLFdBQUFqQyxLQUFBaUUsUUFBQWhDLE9BQUFqQyxLQUFBaUUsUUFBQWhDLFFBQUFqQyxLQUFBZ0YsYUFBQSxHQUFBbkYsR0FBQSxZQUFBRyxLQUFBZ0YsYUFBQWhGLEtBQUFpQyxRQUFBakMsS0FBQWlFLFFBQUFsQyxPQUFBL0IsS0FBQWlFLFFBQUFsQyxTQUFBa0QsSUFBQSxXQUFBakYsS0FBQWlFLFFBQUFqQyxTQUFBaEMsS0FBQWlFLFFBQUFqQyxXQUFBRyxRQUFBLFdBQUFuQyxLQUFBaUUsUUFBQTlCLFFBQUFuQyxLQUFBaUUsUUFBQTlCLFVBQUFuQyxLQUFBaUYsT0FBQUMsT0FBQSxTQUFBMUIsR0FBQSxPQUFBeEQsS0FBQWlFLFVBQUFULEdBQUF4RCxLQUFBaUUsUUFBQWxDLFFBQUF5QixJQUFBVSxFQUFBYSxVQUFBLENBQUFJLFdBQUEsU0FBQTNCLEdBQUEsSUFBQUMsRUFBQSxJQUFBM0QsRUFBQTBELEdBQUF4RCxLQUFBcUUsU0FBQXpCLEtBQUFhLEdBQUF6RCxLQUFBOEUsV0FBQXJCLEVBQUE1RCxNQUFBdUYsY0FBQSxTQUFBNUIsR0FBQSxJQUFBRSxFQUFBMUQsS0FBQXFFLFNBQUFaLEVBQUFDLEVBQUEsU0FBQUQsRUFBQUUsR0FBQSxPQUFBRixFQUFBeUIsT0FBQTFCLElBQUFDLEVBQUF0QixXQUFBdUIsRUFBQTJCLE9BQUExQixFQUFBLFNBQUEsS0FBQW1CLFFBQUEsV0FBQSxPQUFBOUUsS0FBQXNFLElBQUFRLFNBQUE5RSxLQUFBb0UsaUJBQUFrQixNQUFBLFdBQUE3QixFQUFBekQsS0FBQXFFLFNBQUEsU0FBQWIsR0FBQUEsRUFBQXJCLFlBQUFuQyxLQUFBc0UsSUFBQWlCLGVBQUF2RixLQUFBdUUsVUFBQXZFLEtBQUFxRSxTQUFBaEUsT0FBQSxHQUFBbUUsT0FBQSxXQUFBLElBQUFoQixFQUFBeEQsS0FBQThFLFVBQUEsS0FBQSxNQUFBckIsRUFBQXpELEtBQUFxRSxTQUFBLFNBQUFaLEdBQUFBLEVBQUFELFNBQUFrQixFQUFBSyxVQUFBLENBQUFqRCxTQUFBLFNBQUEwQixFQUFBMUQsRUFBQTRFLEdBQUEsSUFBQWxCLEVBQUFnQyxFQUFBeEYsS0FBQTRFLFFBQUFhLEVBQUFmLEdBQUExRSxLQUFBNkUsbUJBQUEsT0FBQVcsRUFBQWhDLEtBQUFnQyxFQUFBaEMsR0FBQSxJQUFBVSxFQUFBVixFQUFBaUMsSUFBQTlCLEVBQUE3RCxLQUFBQSxFQUFBLENBQUFpQyxNQUFBakMsSUFBQTBELEVBQUExRCxFQUFBLG1CQUFBNEYsT0FBQVgsVUFBQVksU0FBQTVDLE1BQUFTLEtBQUExRCxFQUFBLENBQUFBLElBQUEyRCxFQUFBM0QsRUFBQSxTQUFBMkQsR0FBQUUsRUFBQUYsS0FBQUEsRUFBQSxDQUFBMUIsTUFBQTBCLElBQUErQixFQUFBaEMsR0FBQTJCLFdBQUExQixLQUFBekQsTUFBQTRGLFdBQUEsU0FBQXBDLEVBQUFDLEdBQUEsSUFBQUMsRUFBQTFELEtBQUE0RSxRQUFBcEIsR0FBQSxPQUFBRSxJQUFBRCxFQUFBQyxFQUFBMEIsY0FBQTNCLElBQUFDLEVBQUE0QixlQUFBdEYsS0FBQTRFLFFBQUFwQixLQUFBeEQsT0FBQSxJQUFBMEUsSUNOQSxTQUFBdEYsR0FFQSxTQUFBeUcsRUFBQUMsR0FDQTFHLEVBQUEwRyxHQUFBNUMsU0FRQSxTQUFBNkMsRUFBQUQsR0FDQTFHLEVBQUEwRyxHQUFBekUsWUFBQSxjQUNBd0UsRUFBQUMsR0FHQXpHLE9BQUFDLFVBQUEwRyxXQUFBLENBQ0F4RyxPQUFBLFNBQUFDLEVBQUFDLEdBR0FOLEVBQUEsZ0JBQUE2RyxLQUFBLFdBQUEzRixLQUFBLFNBQUFtRixFQUFBUyxHQUNBLElBQUFDLEVBQUEvRyxFQUFBOEcsR0FBQUQsS0FBQSxPQUNBRyxFQUFBaEgsRUFBQSxXQUFBNEQsSUFBQSxDQUNBcUQsbUJBQUEsT0FBQUYsRUFBQXhHLEtBQUEsT0FBQSxNQUNBeUIsU0FBQSx5QkFDQWhDLEVBQUE4RyxHQUFBSSxNQUFBRixLQUdBaEgsRUFBQSxpQ0FBQWEsTUFBQSxTQUFBSCxHQXRCQSxJQUFBZ0csRUF1QkFoRyxFQUFBYSxpQkF2QkFtRixFQXdCQTFHLEVBQUFZLE1BQUF1RyxRQUFBLGdCQXZCQW5ILEVBQUEwRyxHQUFBMUUsU0FBQSxjQUNBeUUsRUFBQUMsS0F5QkExRyxFQUFBLGtDQUFBYSxNQUFBLFNBQUFILEdBQ0FBLEVBQUFhLGlCQUNBb0YsRUFBQTNHLEVBQUFZLE1BQUF1RyxRQUFBLG1CQUdBbkgsRUFBQSxnQkFBQW9ILEtBQUEsUUFBQSxTQUFBMUcsRUFBQWdHLEdBQ0ExRyxFQUFBLDZCQUFBcUgsS0FBQVgsRUFBQVksU0FHQXRILEVBQUEsZ0JBQUFvSCxLQUFBLFFBQUEsU0FBQTFHLEVBQUFnRyxHQUNBMUcsRUFBQSwrQkFBQXFILEtBQUFYLEVBQUFhLGFBQUEsT0FLQXZILEVBQUFRLFVBQUFpQixNQUFBLFNBQUFmLEdBRUEsSUFBQUEsRUFBQWdCLFNBQ0FpRixNQW5EQSxDQXdEQTdGLFFDeERBLFdBQUEsYUFBQSxJQUFBZ0UsRUFBQVEsRUFBQSxHQUFBLFNBQUFrQyxJQUFBLEtBQUFsQyxFQUFBckUsUUFBQXFFLEVBQUEsS0FBQUEsRUFBQW1DLFFBQUEsU0FBQUMsRUFBQXRELEdBQUF4RCxLQUFBd0QsRUFBQXVELEVBQUEvRyxLQUFBeUQsT0FBQSxFQUFBekQsS0FBQWtFLEVBQUEsR0FBQSxJQUFBVCxFQUFBekQsS0FBQSxJQUFBd0QsRUFBQSxTQUFBQSxJQUFBLFNBQUF3RCxFQUFBeEQsRUFBQUMsR0FBQSxHQUFBRCxFQUFBQSxHQUFBdUQsRUFBQSxDQUFBLEdBQUF0RCxHQUFBRCxFQUFBLE1BQUEsSUFBQXlELFVBQUEsSUFBQXZELEdBQUEsRUFBQSxJQUFBLElBQUFDLEVBQUFGLEdBQUFBLEVBQUF5RCxLQUFBLEdBQUEsTUFBQXpELEdBQUEsaUJBQUFBLEdBQUEsbUJBQUFFLEVBQUEsWUFBQUEsRUFBQXdELEtBQUExRCxFQUFBLFNBQUFBLEdBQUFDLEdBQUFzRCxFQUFBeEQsRUFBQUMsR0FBQUMsR0FBQSxHQUFBLFNBQUFELEdBQUFDLEdBQUEwRCxFQUFBNUQsRUFBQUMsR0FBQUMsR0FBQSxJQUFBLE1BQUE1RCxHQUFBLFlBQUE0RCxHQUFBMEQsRUFBQTVELEVBQUExRCxJQUFBMEQsRUFBQUEsRUFBQSxFQUFBQSxFQUFBQyxFQUFBQSxFQUFBNEQsRUFBQTdELElBQUF3RCxDQUFBdkQsRUFBQUQsSUFBQSxTQUFBQSxHQUFBNEQsRUFBQTNELEVBQUFELEtBQUEsTUFBQUUsR0FBQTBELEVBQUEzRCxFQUFBQyxJQUFBUSxFQUFBLFdBQUF4RCxXQUFBa0csSUFBQSxJQUFBRyxFQUFBLEVBQUEsU0FBQU8sRUFBQTlELEdBQUEsT0FBQSxJQUFBc0QsRUFBQSxTQUFBckQsR0FBQUEsRUFBQUQsS0FDQSxTQUFBNEQsRUFBQTVELEVBQUFDLEdBQUEsR0FBQUQsRUFBQUEsR0FBQXVELEVBQUEsQ0FBQSxHQUFBdEQsR0FBQUQsRUFBQSxNQUFBLElBQUF5RCxVQUFBekQsRUFBQUEsRUFBQSxFQUFBQSxFQUFBQyxFQUFBQSxFQUFBNEQsRUFBQTdELElBQUEsU0FBQTZELEVBQUE3RCxHQURBLElBQUFBLEVBQUFBLEVBQ0EsV0FBQSxHQUFBQSxFQUFBQSxHQUFBdUQsRUFBQSxLQUFBdkQsRUFBQVUsRUFBQTdELFFBQUEsQ0FBQSxJQUFBcUQsR0FBQUQsRUFBQUQsRUFBQVUsRUFBQTJDLFNBQUEsR0FBQWxELEVBQUFGLEVBQUEsR0FBQTNELEVBQUEyRCxFQUFBLEdBQUFBLEVBQUFBLEVBQUEsR0FBQSxJQUFBLEdBQUFELEVBQUFBLEVBQUExRCxFQUFBLG1CQUFBNEQsRUFBQUEsRUFBQXlELFVBQUEsRUFBQTNELEVBQUFDLEdBQUFELEVBQUFDLEdBQUEsR0FBQUQsRUFBQUEsSUFBQSxtQkFBQUcsRUFBQTdELEVBQUE2RCxFQUFBd0QsVUFBQSxFQUFBM0QsRUFBQUMsSUFBQUEsRUFBQUQsRUFBQUMsSUFBQSxNQUFBK0IsR0FBQS9CLEVBQUErQixNQURBZCxFQUFBOUIsS0FBQVksR0FBQSxHQUFBa0IsRUFBQXJFLFFBQUE2RCxJQUNBNEMsRUFBQS9CLFVBQUFMLEVBQUEsU0FBQWxCLEdBQUEsT0FBQXhELEtBQUEwRCxPQUFBLEVBQUFGLElBQUFzRCxFQUFBL0IsVUFBQXJCLEVBQUEsU0FBQUYsRUFBQUMsR0FBQSxJQUFBQyxFQUFBMUQsS0FBQSxPQUFBLElBQUE4RyxFQUFBLFNBQUFuRCxFQUFBN0QsR0FBQTRELEVBQUFRLEVBQUF0QixLQUFBLENBQUFZLEVBQUFDLEVBQUFFLEVBQUE3RCxJQUFBdUgsRUFBQTNELE1BQ0FoQyxPQUFBNkYsVUFBQTdGLE9BQUE2RixRQUFBVCxFQUFBcEYsT0FBQTZGLFFBQUFDLFFBQUFGLEVBQUE1RixPQUFBNkYsUUFBQUUsT0FGQSxTQUFBakUsR0FBQSxPQUFBLElBQUFzRCxFQUFBLFNBQUFyRCxFQUFBQyxHQUFBQSxFQUFBRixNQUVBOUIsT0FBQTZGLFFBQUFHLEtBQUEsU0FBQWxFLEdBQUEsT0FBQSxJQUFBc0QsRUFBQSxTQUFBckQsRUFBQUMsR0FBQSxJQUFBLElBQUFDLEVBQUEsRUFBQUEsRUFBQUgsRUFBQW5ELE9BQUFzRCxHQUFBLEVBQUEyRCxFQUFBOUQsRUFBQUcsSUFBQUQsRUFBQUQsRUFBQUMsTUFBQWhDLE9BQUE2RixRQUFBSSxJQUFBLFNBQUFuRSxHQUFBLE9BQUEsSUFBQXNELEVBQUEsU0FBQXJELEVBQUFDLEdBQUEsU0FBQUMsRUFBQUQsR0FBQSxPQUFBLFNBQUFDLEdBQUE2QixFQUFBOUIsR0FBQUMsR0FBQTdELEdBQUEsSUFBQTBELEVBQUFuRCxRQUFBb0QsRUFBQStCLElBQUEsSUFBQTFGLEVBQUEsRUFBQTBGLEVBQUEsR0FBQSxHQUFBaEMsRUFBQW5ELFFBQUFvRCxFQUFBK0IsR0FBQSxJQUFBLElBQUFvQyxFQUFBLEVBQUFBLEVBQUFwRSxFQUFBbkQsT0FBQXVILEdBQUEsRUFBQU4sRUFBQTlELEVBQUFvRSxJQUFBbEUsRUFBQUMsRUFBQWlFLEdBQUFsRSxNQUFBaEMsT0FBQTZGLFFBQUF4QyxVQUFBbUMsS0FBQUosRUFBQS9CLFVBQUFyQixFQUFBaEMsT0FBQTZGLFFBQUF4QyxVQUFBLE1BQUErQixFQUFBL0IsVUFBQUwsR0FGQSxHQUlBLFdBQUEsU0FBQW1ELEVBQUFyRSxFQUFBQyxHQUFBN0QsU0FBQWtJLGlCQUFBdEUsRUFBQXNFLGlCQUFBLFNBQUFyRSxHQUFBLEdBQUFELEVBQUF1RSxZQUFBLFNBQUF0RSxHQUFBLFNBQUEyRCxFQUFBNUQsR0FBQXhELEtBQUF3RCxFQUFBNUQsU0FBQW9JLGNBQUEsT0FBQWhJLEtBQUF3RCxFQUFBeUUsYUFBQSxjQUFBLFFBQUFqSSxLQUFBd0QsRUFBQTBFLFlBQUF0SSxTQUFBdUksZUFBQTNFLElBQUF4RCxLQUFBeUQsRUFBQTdELFNBQUFvSSxjQUFBLFFBQUFoSSxLQUFBMEQsRUFBQTlELFNBQUFvSSxjQUFBLFFBQUFoSSxLQUFBd0YsRUFBQTVGLFNBQUFvSSxjQUFBLFFBQUFoSSxLQUFBa0UsRUFBQXRFLFNBQUFvSSxjQUFBLFFBQUFoSSxLQUFBMEUsR0FBQSxFQUFBMUUsS0FBQXlELEVBQUEyRSxNQUFBQyxRQUFBLCtHQUFBckksS0FBQTBELEVBQUEwRSxNQUFBQyxRQUFBLCtHQUNBckksS0FBQWtFLEVBQUFrRSxNQUFBQyxRQUFBLCtHQUFBckksS0FBQXdGLEVBQUE0QyxNQUFBQyxRQUFBLDZFQUFBckksS0FBQXlELEVBQUF5RSxZQUFBbEksS0FBQXdGLEdBQUF4RixLQUFBMEQsRUFBQXdFLFlBQUFsSSxLQUFBa0UsR0FBQWxFLEtBQUF3RCxFQUFBMEUsWUFBQWxJLEtBQUF5RCxHQUFBekQsS0FBQXdELEVBQUEwRSxZQUFBbEksS0FBQTBELEdBQ0EsU0FBQTRFLEVBQUE5RSxFQUFBQyxHQUFBRCxFQUFBQSxFQUFBNEUsTUFBQUMsUUFBQSw2TEFBQTVFLEVBQUEsSUFBQSxTQUFBOEUsRUFBQS9FLEdBQUEsSUFBQUMsRUFBQUQsRUFBQUEsRUFBQWdGLFlBQUE5RSxFQUFBRCxFQUFBLElBQUEsT0FBQUQsRUFBQVUsRUFBQWtFLE1BQUFqRixNQUFBTyxFQUFBLEtBQUFGLEVBQUFFLEVBQUErRSxXQUFBL0UsRUFBQUYsRUFBQUMsRUFBQWdGLFdBQUFqRixFQUFBQyxFQUFBaUYsWUFBQSxJQUFBbEYsRUFBQWtCLElBQUFqQixJQUFBRCxFQUFBa0IsRUFBQWpCLEdBQUEsR0FBQSxTQUFBa0YsRUFBQW5GLEVBQUFDLEdBQUEsU0FBQUMsSUFBQSxJQUFBRixFQUFBb0UsRUFBQVcsRUFBQS9FLElBQUFBLEVBQUFBLEVBQUFvRixZQUFBbkYsRUFBQUQsRUFBQWtCLEdBQUEsSUFBQWtELEVBQUFwRSxFQUFBcUUsRUFBQXJFLEVBQUFDLEVBQUFDLEdBQUFtRSxFQUFBckUsRUFBQUUsRUFBQUEsR0FBQTZFLEVBQUEvRSxHQUFBLFNBQUFxRixFQUFBckYsRUFBQUMsR0FBQSxJQUFBQyxFQUFBRCxHQUFBLEdBQUF6RCxLQUFBOEksT0FBQXRGLEVBQUF4RCxLQUFBb0ksTUFBQTFFLEVBQUEwRSxPQUFBLFNBQUFwSSxLQUFBK0ksT0FBQXJGLEVBQUFxRixRQUFBLFNBQUEvSSxLQUFBZ0osUUFBQXRGLEVBQUFzRixTQUFBLFNBQUEsSUFBQUMsRUFBQSxLQUFBQyxFQUFBLEtBQUFDLEVBQUEsS0FBQUMsRUFBQSxLQUFBLFNBQUFDLElBQUEsT0FBQSxPQUFBRCxJQUFBQSxJQUFBeEosU0FBQTBKLE9BQUFGLEVBQ0EsU0FBQUcsRUFBQS9GLEVBQUFDLEdBQUEsTUFBQSxDQUFBRCxFQUFBNEUsTUFBQTVFLEVBQUF1RixPQUFBLFdBQUEsR0FBQSxPQUFBSSxFQUFBLENBQUEsSUFBQTNGLEVBQUE1RCxTQUFBb0ksY0FBQSxPQUFBLElBQUF4RSxFQUFBNEUsTUFBQW9CLEtBQUEsNkJBQUEsTUFBQS9GLElBQUEwRixFQUFBLEtBQUEzRixFQUFBNEUsTUFBQW9CLEtBQUEsT0FBQUwsRUFBQU0sR0FBQWpHLEVBQUF3RixRQUFBLEdBQUEsUUFBQXZGLEdBQUFpRyxLQUFBLEtBQ0FiLEVBQUE5RCxVQUFBcEQsS0FBQSxTQUFBNkIsRUFBQUMsR0FBQSxJQUFBQyxFQUFBMUQsS0FBQTRILEVBQUFwRSxHQUFBLFVBQUF3RCxFQUFBLEVBQUEyQyxFQUFBbEcsR0FBQSxJQUFBbUcsR0FBQSxJQUFBQyxNQUFBQyxVQUFBLE9BQUEsSUFBQXZDLFFBQUEsU0FBQS9ELEVBQUFDLEdBQUEsR0FBQTRGLE1BRkEsV0FBQSxHQUFBLE9BQUFILEVBQUEsR0FBQUcsS0FBQSxRQUFBVSxLQUFBckksT0FBQXNJLFVBQUFDLFFBQUEsQ0FBQSxJQUFBekcsRUFBQSxvREFBQTBHLEtBQUF4SSxPQUFBc0ksVUFBQUcsV0FBQWpCLElBQUExRixHQUFBNEcsU0FBQTVHLEVBQUEsR0FBQSxJQUFBLFNBQUEwRixHQUFBLEVBQUEsT0FBQUEsRUFFQW1CLEdBQUEsQ0FBQSxJQUFBQyxFQUFBLElBQUEvQyxRQUFBLFNBQUEvRCxFQUFBQyxJQUFBLFNBQUEzRCxLQUFBLElBQUErSixNQUFBQyxVQUFBRixHQUFBRCxFQUFBbEcsSUFBQTdELFNBQUEwSixNQUFBM0gsS0FBQTRILEVBQUE3RixFQUFBLElBQUFBLEVBQUFvRixPQUFBLEtBQUFsQixHQUFBVixLQUFBLFNBQUF4RCxHQUFBLEdBQUFBLEVBQUFyRCxPQUFBbUQsSUFBQTlDLFdBQUFaLEVBQUEsS0FBQSxXQUFBMkQsTUFBQTNELEtBQUF5SyxFQUFBLElBQUFoRCxRQUFBLFNBQUEvRCxFQUFBRSxHQUFBc0QsRUFBQXRHLFdBQUFnRCxFQUFBaUcsS0FBQXBDLFFBQUFHLEtBQUEsQ0FBQTZDLEVBQUFELElBQUFwRCxLQUFBLFdBQUFzRCxhQUFBeEQsR0FBQXhELEVBQUFFLElBQUEsV0FBQUQsRUFBQUMsVUFKQUYsRUFJQSxXQUFBLFNBQUE4RCxJQUFBLElBQUE3RCxHQUFBQSxHQUFBLEdBQ0FTLElBQUEsR0FBQVEsSUFBQSxHQUFBUixJQUFBLEdBQUFzQixJQUFBLEdBQUFkLElBQUEsR0FBQWMsTUFBQS9CLEVBQUFTLEdBQUFRLEdBQUFSLEdBQUFzQixHQUFBZCxHQUFBYyxLQUFBLE9BQUF5RCxJQUFBeEYsRUFBQSxzQ0FBQXlHLEtBQUF4SSxPQUFBc0ksVUFBQUcsV0FBQWxCLElBQUF4RixJQUFBMkcsU0FBQTNHLEVBQUEsR0FBQSxJQUFBLEtBQUEsTUFBQTJHLFNBQUEzRyxFQUFBLEdBQUEsS0FBQTJHLFNBQUEzRyxFQUFBLEdBQUEsS0FBQSxLQUFBQSxFQUFBd0YsSUFBQS9FLEdBQUFtRCxHQUFBM0MsR0FBQTJDLEdBQUE3QixHQUFBNkIsR0FBQW5ELEdBQUF1RyxHQUFBL0YsR0FBQStGLEdBQUFqRixHQUFBaUYsR0FBQXZHLEdBQUF3RyxHQUFBaEcsR0FBQWdHLEdBQUFsRixHQUFBa0YsSUFBQWpILEdBQUFBLEdBQUFBLElBQUFFLEVBQUFpRixZQUFBakYsRUFBQWlGLFdBQUErQixZQUFBaEgsR0FBQTZHLGFBQUF4RCxHQUFBeEQsRUFBQUUsSUFDQSxJQUFBNUQsRUFBQSxJQUFBc0gsRUFBQVEsR0FBQWQsRUFBQSxJQUFBTSxFQUFBUSxHQUFBYixFQUFBLElBQUFLLEVBQUFRLEdBQUExRCxHQUFBLEVBQUFRLEdBQUEsRUFBQWMsR0FBQSxFQUFBNkIsR0FBQSxFQUFBb0QsR0FBQSxFQUFBQyxHQUFBLEVBQUEvRyxFQUFBL0QsU0FBQW9JLGNBQUEsT0FBQXJFLEVBQUFpSCxJQUFBLE1BQUF0QyxFQUFBeEksRUFBQXlKLEVBQUE3RixFQUFBLGVBQUE0RSxFQUFBeEIsRUFBQXlDLEVBQUE3RixFQUFBLFVBQUE0RSxFQUFBdkIsRUFBQXdDLEVBQUE3RixFQUFBLGNBQUFDLEVBQUF1RSxZQUFBcEksRUFBQTBELEdBQUFHLEVBQUF1RSxZQUFBcEIsRUFBQXRELEdBQUFHLEVBQUF1RSxZQUFBbkIsRUFBQXZELEdBQUE1RCxTQUFBaUwsS0FBQTNDLFlBQUF2RSxHQUFBMEQsRUFBQXZILEVBQUEwRCxFQUFBZ0YsWUFBQWlDLEVBQUEzRCxFQUFBdEQsRUFBQWdGLFlBQUFrQyxFQUFBM0QsRUFBQXZELEVBQUFnRixZQURBLFNBQUFzQyxJQUFBLElBQUEsSUFBQWpCLE1BQUFDLFVBQUFGLEdBQUFELEVBQUFoRyxFQUFBaUYsWUFBQWpGLEVBQUFpRixXQUFBK0IsWUFBQWhILEdBQUFGLEVBQUFDLE9BQUEsQ0FBQSxJQUFBRixFQUFBNUQsU0FBQW1MLFFBQUEsSUFBQXZILFFBQUEsSUFBQUEsSUFBQVUsRUFBQXBFLEVBQUEwRCxFQUFBZ0YsWUFDQTlELEVBQUFvQyxFQUFBdEQsRUFBQWdGLFlBQUFoRCxFQUFBdUIsRUFBQXZELEVBQUFnRixZQUFBbEIsS0FBQU4sRUFBQXRHLFdBQUFvSyxFQUFBLEtBQUFBLEdBQUFuQyxFQUFBN0ksRUFBQSxTQUFBMEQsR0FBQVUsRUFBQVYsRUFBQThELE1BQUFnQixFQUFBeEksRUFBQXlKLEVBQUE3RixFQUFBLElBQUFBLEVBQUFvRixPQUFBLGlCQUFBSCxFQUFBN0IsRUFBQSxTQUFBdEQsR0FBQWtCLEVBQUFsQixFQUFBOEQsTUFBQWdCLEVBQUF4QixFQUFBeUMsRUFBQTdGLEVBQUEsSUFBQUEsRUFBQW9GLE9BQUEsWUFDQUgsRUFBQTVCLEVBQUEsU0FBQXZELEdBQUFnQyxFQUFBaEMsRUFBQThELE1BQUFnQixFQUFBdkIsRUFBQXdDLEVBQUE3RixFQUFBLElBQUFBLEVBQUFvRixPQUFBLGlCQVBBbEosU0FBQWlMLEtBQUFySCxJQUFBNUQsU0FBQWtJLGlCQUFBbEksU0FBQWtJLGlCQUFBLG1CQUFBLFNBQUFwRSxJQUFBOUQsU0FBQW9MLG9CQUFBLG1CQUFBdEgsR0FBQUYsTUFBQTVELFNBQUFtSSxZQUFBLHFCQUFBLFNBQUFILElBQUEsZUFBQWhJLFNBQUFxTCxZQUFBLFlBQUFyTCxTQUFBcUwsYUFBQXJMLFNBQUFzTCxZQUFBLHFCQUFBdEQsR0FBQXBFLE9BQUEsSUFBQUEsS0FPQSxpQkFBQUssT0FBQUEsT0FBQUMsUUFBQStFLEdBQUFuSCxPQUFBeUosaUJBQUF0QyxFQUFBbkgsT0FBQXlKLGlCQUFBcEcsVUFBQXBELEtBQUFrSCxFQUFBOUQsVUFBQXBELE1BUEEsR0NKQSxTQUFBdkMsR0FFQUEsRUFBQVEsVUFBQU8sTUFBQSxXQUtBZixFQUFBLCtCQUFBa0IsS0FDQSxXQUNBLElBQUE4SyxFQUFBaE0sRUFBQVksTUFBQUwsS0FBQSxNQUFBMEwsUUFBQSxrQkFBQSxJQUVBQyxFQUFBbE0sRUFBQSxLQURBLHNCQUFBZ00sRUFBQSxVQUNBRyxRQUNBRCxFQUFBbEssU0FBQSw4QkFBQW9LLE9BQ0FwTSxFQUFBWSxNQUFBUyxTQUFBZ0wsT0FBQSwyTUFDQXJNLEVBQUFZLE1BQUFTLFNBQUFnTCxPQUFBSCxLQUlBbE0sRUFBQSxpQ0FBQWEsTUFDQSxTQUFBSCxHQUNBQSxFQUFBYSxpQkFDQXZCLEVBQUFZLE1BQUEwTCxZQUFBLFdBRUF0TSxFQUFBWSxNQUFBMkwsU0FBQSwrQkFBQUMsa0JBdkJBLENBNkJBMUwsUUM3QkEsU0FBQWQsR0FFQSxTQUFBeU0sSUFDQXpNLEVBQUEsVUFBQWtCLEtBQUEsV0FFQSxJQUFBNkMsRUFBQS9ELEVBQUFZLE1BQUFTLFNBQUEwQyxRQUNBQSxHQUFBLEVBQ0EvRCxFQUFBWSxNQUFBbUQsTUFBQUEsR0FBQTJJLE9BQUEzSSxFQUFBL0QsRUFBQVksTUFBQStMLEtBQUEsWUFJQTNNLEVBQUFRLFVBQUFPLE1BQUEsV0FLQWYsRUFBQSxVQUdBa0IsS0FBQSxXQUdBbEIsRUFBQVksTUFBQStMLEtBQUEsUUFBQSxNQUdBLElBQUFELEVBQUFFLFdBQUFoTSxLQUFBOEwsUUFDQTNJLEVBQUE2SSxXQUFBaE0sS0FBQW1ELE9BRUEsSUFBQS9ELEVBQUFZLE1BQUFrQixTQUFBLFlBQUEsQ0FHQSxJQUFBK0ssRUFBQSxDQUNBQyxVQUFBSixFQUNBSyxTQUFBaEosR0FHQS9ELEVBQUFZLE1BQUFnRCxJQUFBaUosR0FFQTdNLEVBQUFZLE1BQUFvTSxLQUFBLHVDQUdBaE4sRUFBQWlOLFVBQUFQLElBQUExTSxFQUFBaU4sVUFBQWxKLElBRUEvRCxFQUFBWSxNQUFBK0wsS0FBQSxRQUFBRCxFQUFBM0ksR0FBQW1KLFdBQUEsU0FBQUEsV0FBQSxZQUtBVCxJQUdBek0sRUFBQXNDLFFBQUF3QixPQUFBLFdBQ0E5RCxFQUFBLFVBQUFpQixRQUNBd0wsUUFNQW5LLE9BQUE2SyxPQUFBLFdBQ0FuTixFQUFBLFVBQUFpQixRQUNBd0wsS0E3REEsQ0FpRUEzTCxRQ2pFQSxTQUFBZCxHQUVBLFNBQUFvTixJQUNBcE4sRUFBQSxtQ0FBQWtCLEtBQUEsV0FDQSxJQUFBbU0sRUFBQXJOLEVBQUFZLE1BQUFpRyxLQUFBLHlCQUVBLFFBQUEsSUFBQXdHLFFBQUEsSUFBQUEsRUFBQSxHQUFBLENBR0EsSUFBQUMsRUFBQSxJQUFBQyxNQUNBRCxFQUFBRSxJQUFBSCxFQUFBOU0sS0FBQSxPQUdBLElBQUFrTixFQUFBSCxFQUFBdkosTUFJQTJKLEdBSEFKLEVBQUFaLE9BR0FXLEVBQUE5TSxLQUFBLFVBR0EsS0FBQW1OLEdBQUFBLEVBQUFELElBQ0FBLEVBQUFDLEdBR0EsS0FBQUQsR0FDQXpOLEVBQUFZLE1BQUFnRCxJQUFBLFFBQUE2SixFQUFBLFNBUUF4TixPQUFBQyxVQUFBa04sZUFBQSxDQUNBaE4sT0FBQSxTQUFBQyxFQUFBQyxHQUNBOE0sTUFJQXBOLEVBQUFzQyxRQUFBQyxLQUFBLFdBQ0E2SyxNQXhDQSxDQTJDQXRNLFFDMUNBLFNBQUFkLEdBQUFBLEVBQUEyTixHQUFBM0ssVUFBQSxTQUFBNkIsR0FBQWpFLEtBQUFnTixLQUFBLEdBQUFoTixLQUFBaU4sT0FBQSxFQUFBak4sS0FBQWtOLE9BQUEsR0FBQWxOLEtBQUFtTixVQUFBLEVBQUFuTixLQUFBb04sUUFBQSxFQUFBcE4sS0FBQXFOLE1BQUEsRUFBQXJOLEtBQUFzTixlQUFBLEtBQUEsSUFBQUMsRUFBQSxDQUFBcEssTUFBQSxJQUFBZCxTQUFBLEVBQUFtTCxXQUFBLEVBQUFDLFVBQUEsRUFBQUMsU0FBQSxhQUFBQyxRQUFBLEVBQUFDLHFCQUFBNU4sS0FBQTZOLFlBQUEsSUFBQUMsWUFBQSxPQUFBeEwsa0JBQUEsRUFBQXlMLFVBQUEsRUFBQUMsU0FBQSxFQUFBQyxjQUFBLEVBQUFDLGVBQUEsR0FBQUwsWUFBQSxNQUFBUixNQUFBLEdBS0EsU0FBQWMsRUFBQUMsRUFBQUMsR0FBQSxJQUFBRCxFQUFBM0MsT0FBQTRDLEdBQUEsTUFBQXZPLEdBQUFzTyxFQUFBLEdBQUFsRyxZQUFBbUcsRUFBQSxLQUNBLE1BTkEsaUJBQUFwSyxFQUFBN0UsRUFBQWtQLE9BQUFmLEVBQUF0SixJQUFBLFFBQUFBLEVBQUFkLE1BQUFpSCxTQUFBbkcsRUFBQWQsTUFBQSxJQUFBb0wsTUFBQXRLLEVBQUFkLFNBQUFjLEVBQUFkLE1BQUFvSyxFQUFBcEssUUFDQSxtQkFBQWMsRUFBQXFKLGlCQUFBdE4sS0FBQXNOLGVBQUFySixFQUFBcUosZ0JBQ0EsaUJBQUFySixFQUFBNEosY0FBQTdOLEtBQUE2TixZQUFBNUosRUFBQTRKLGFBQ0E1SixFQUFBb0osUUFBQXJOLEtBQUFxTixNQUFBcEosRUFBQW9KLE9BQ0FwSixFQUFBdUssV0FBQXZLLEVBQUErSixRQUFBL0osRUFBQXVLLFNBQUEsU0FBQUMsR0FBQSxPQUFBLElBQUFBLEdBQUF4SyxFQUFBdUssU0FBQSxTQUFBQyxHQUFBLE9BQUE1TCxLQUFBNkwsTUFBQSxJQUFBRCxLQUVBek8sS0FBQU0sS0FBQSxXQUFBLElBQUFxTyxFQUFBMUssRUFBQTBKLE9BQUF2TyxFQUFBNkUsRUFBQTBKLFFBQUF2TyxFQUFBWSxNQUFBNE8sRUFBQXhQLEVBQUFZLE1BQUE4TCxTQUFBK0MsRUFBQXpQLEVBQUEsZUFBQTBQLEVBQUEsRUFBQWIsRUFBQWhLLEVBQUFnSyxhQUFBQyxFQUFBWCxFQUFBVyxlQUFBLGlCQUFBakssRUFBQSxpQkFBQWlLLEVBQUFqSyxFQUFBaUssZ0JBQ0EsSUFBQVMsRUFBQUUsRUFBQSxHQUFBVixFQUFBVSxFQUFBelAsRUFBQVksTUFBQStPLFdBQUFDLE9BQUEsS0FBQS9LLEVBQUEySixxQkFBQTNKLEVBQUEwSixTQUFBZ0IsRUFBQTVDLEtBQUEsaUJBQUE0QyxFQUFBNUMsS0FBQSxlQUFBLEdBQUEsRUFBQTNNLEVBQUFZLE1BQUFpRyxLQUFBLE9BQUE1RixRQUFBLENBQUEsSUFBQTRPLEdBQUFOLEVBQUF2UCxFQUFBWSxNQUFBNk8sRUFBQUEsRUFBQSxXQUFBRixFQUFBNUMsS0FBQSxzQkFBQTRDLEVBQUE1QyxLQUFBLG1CQUFBLFFBQUFvQyxFQUFBUSxFQUFBTyxRQUFBTCxFQUFBTSxXQUFBSCxPQUFBLElBQUFMLEVBQUF2TSxVQUFBNkIsTUFBQSxPQUFBN0UsRUFBQVksTUFBQWlHLEtBQUEsT0FBQW1KLElBQUEsT0FBQUgsUUFBQTdQLEVBQUFZLE1BQUFpRyxLQUFBLE9BQUFtSixJQUFBLFFBQUFILEdBR0EsU0FBQUksRUFBQUMsRUFBQUMsR0FBQSxJQUFBQyxFQUFBRCxFQUFBLElBQUEsR0FBQSxPQUFBckIsRUFBQTdOLE9BQUFtUCxFQUFBdEIsRUFBQSxJQUFBb0IsRUFDQUUsRUFBQUYsRUFDQSxTQUFBbE4sRUFBQXFOLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsTUFBQTNCLEdBQUEwQixFQUFBN0QsU0FBQThELElBQUFGLEVBQUEsR0FBQUcsV0FBQXhQLFFBQUEsQ0FBQSxJQUFBeVAsRUFBQUosRUFBQSxHQUFBRyxXQUFBLEdBQUEsR0FBQXpRLEVBQUEwUSxHQUFBN0osS0FBQW9KLEVBQUEsZUFBQSxJQUFBaFAsT0FBQSxPQUNBLEdBQUFqQixFQUFBMFEsR0FBQTVPLFNBQUFtTyxFQUFBLGdCQUFBLE9BQ0FsQixFQUFBc0IsRUFBQXJRLEVBQUEwUSxJQUNBLEdBQUEsSUFBQUwsRUFBQSxHQUFBSSxXQUFBeFAsT0FBQSxDQUFBLElBQUEwUCxFQUFBTixFQUFBLEdBQUFJLFdBQUFHLEVBQUFELEVBQUFBLEVBQUExUCxPQUFBLEdBQUFvUCxFQUFBLEdBQUE5RSxZQUFBcUYsR0FBQSxJQUFBQyxFQUFBN1EsRUFBQTRRLEdBQUEsR0FBQSxHQUFBQyxFQUFBLEdBQUFDLFNBQUEsQ0FBQSxJQUNBQyxFQURBQyxFQUFBSCxFQUFBLEdBQUFJLFVBQUFDLEVBQUFyTSxFQUFBZCxNQUFBLEdBQUFjLEVBQUE4SixXQUNBdUMsRUFBQXJNLEVBQUE4SixVQUFBLElBQUEsSUFBQXdDLEVBQUEsS0FBQVosRUFBQTdELFNBQUE4RCxHQUFBUSxFQUFBL1AsUUFBQSxDQUFBLElBQUFtUSxFQUFBSixFQUFBSyxRQUFBLElBQUFILEdBQUFILEdBQUEsR0FBQUssRUFBQUosRUFBQU0sVUFBQSxFQUFBRixHQUFBSixFQUNBRyxFQUFBM1EsU0FBQXVJLGVBQUFnSSxHQUFBaEMsRUFBQXNCLEVBQUFyUSxFQUFBbVIsSUFBQUgsRUFBQUEsRUFBQS9QLE9BQUFpUSxJQUFBLEdBQUFFLEVBQUFKLEVBQUFNLFVBQUFGLEdBQUEsR0FFQSxHQURBYixFQUFBN0QsVUFBQThELEdBQUEsT0FBQVcsSUFBQWQsRUFBQSxHQUFBOUUsWUFBQTRGLEdBQUFILEVBQUFHLEVBQUFGLFVBQUFELElBQ0FBLEVBQUEvUCxPQUFBLE9BQUEsRUFBQTRQLEVBQUEsR0FBQUksVUFBQUQsRUFFQSxPQURBVixFQUFBWCxXQUFBMU8sT0FBQXFQLEVBQUFpQixRQUFBVixHQUFBOUIsRUFBQXVCLEVBQUFPLEdBQ0EsR0FBQUEsRUFBQSxHQUFBQyxVQUNBLFNBQUFVLEVBQUFuQixFQUFBQyxFQUFBQyxFQUFBQyxHQUFBLElBQUFILEVBQUFWLFNBQUEsU0FBQTlJLEtBQUFvSixFQUFBLGVBQUEsSUFBQWhQLFNBQ0FvUCxFQUFBVixTQUFBLFNBQUE3TixTQUFBbU8sRUFBQSxpQkFDQUssRUFBQVgsV0FBQTFPLE9BQUEsQ0FBQSxJQUFBd1EsRUFBQW5CLEVBQUFYLFNBQUEsVUFBQSxRQUFBLElBQUE4QixFQUFBQyxJQUFBLElBQUEsR0FBQUQsRUFBQUMsSUFBQSxHQUFBWixTQUFBLE9BQUEsSUFBQWEsRUFBQUYsRUFBQTdCLE9BQUEsR0FBQSxHQUFBNkIsRUFBQTNQLFNBQUFtTyxFQUFBLGdCQUFBbEIsRUFBQXNCLEVBQUFzQixHQUFBRixFQUFBRyxjQUFBLEdBQUEvQyxFQUFBRSxFQUFBc0IsRUFBQXNCLEdBQUFGLEVBQUFHLGNBQUEsR0FBQSxHQUFBRCxFQUFBRCxJQUFBLEdBQUFaLFdBQUFhLEVBQUE3UCxTQUFBbU8sRUFBQSxZQUFBLEdBQUFsQixFQUFBc0IsRUFBQXNCLEdBQUFBLEVBQUFFLEdBQUEsUUFBQXRCLEVBQUE3RCxTQUFBOEQsRUFBQSxHQUFBaUIsRUFBQUcsY0FBQSxHQUFBSCxFQUFBM1AsU0FBQW1PLEVBQUEsZUFBQU0sRUFBQTdELFNBQUE4RCxFQUFBLEdBQUFpQixFQUFBRyxjQUFBLEdBQUFELEVBQUFFLEdBQUEsUUFBQUosRUFBQTNQLFNBQUFtTyxFQUFBLGNBQUEwQixFQUFBQyxhQUFBLENBQUEsR0FBQUQsRUFBQTdCLFFBQUE5TSxFQUFBMk8sRUFBQUYsRUFBQWxCLEVBQUFDLEdBQ0FpQixFQUFBelAsU0FBQWlPLEVBQUEsY0FEQSxDQUFBLEdBQUF3QixFQUFBelAsU0FBQWlPLEVBQUEsVUFBQSxNQUFBd0IsRUFBQUMsSUFBQSxHQUFBSSxRQUFBLENBQUEsSUFBQUMsRUFBQUosRUFBQUQsSUFBQSxHQUFBTSxrQkFBQUwsRUFBQUQsSUFBQSxHQUFBTyxNQUFBUixFQUFBbFIsS0FBQSxRQUFBd1IsRUFBQSxHQUNBTixFQUFBMUIsV0FBQTlPLFFBQUF1USxFQUFBRyxFQUFBRixFQUFBbEIsRUFBQUMsR0FDQSxHQUFBLElBQUFtQixFQUFBRCxJQUFBLEdBQUFqQixXQUFBeFAsT0FBQTBRLEVBQUFDLFNBQUFILEVBQUF4UCxZQUFBZ08sRUFBQSxlQUFBLEdBQUEsR0FBQTBCLEVBQUFELElBQUEsR0FBQWpCLFdBQUF4UCxPQUFBLENBQUEsSUFBQWlSLEVBQUFQLEVBQUFELElBQUEsR0FBQWpCLFdBQUEsR0FBQSxHQUFBLEdBQUF5QixFQUFBcEIsU0FBQSxDQUFBLElBQUFxQixFQUFBRCxFQUFBakIsVUFBQSxLQUFBdEcsS0FBQXdILEtBQUFSLEVBQUFDLFNBQUFILEVBQUF4UCxZQUFBZ08sRUFBQSxlQWFBLFNBQUFtQyxFQUFBQyxHQUFBLE9BQUEsR0FBQUEsRUFBQXZCLFdBQUEsUUFBQW5HLEtBQUEwSCxFQUFBcEIsZUFBQW9CLEVBQUFDLGlCQUFBRixFQUFBQyxFQUFBQyxrQkFFQSxHQUFBRCxFQUFBdkIsYUFBQTlRLEVBQUFxUyxHQUFBdlEsU0FBQW1PLEVBQUEsYUFBQSxJQUFBb0MsRUFBQTVCLFdBQUF4UCxRQUFBbVIsRUFBQUMsRUFBQTVCLFdBQUE0QixFQUFBNUIsV0FBQXhQLE9BQUEsS0FDQSxTQUFBc1IsSUFBQSxHQUFBLEVBQUE3QyxHQUFBSCxFQUFBeEwsUUFBQSxDQUFBMkwsRUFBQUgsRUFBQXhMLFFBQUEsSUFBQXNMLEVBQUE1TCxLQUFBK08sTUFBQWpELEVBQUF4TCxRQUFBYyxFQUFBZCxPQUFBME8sRUFBQTVOLEVBQUFkLE1BQUEyTyxFQUFBN04sRUFBQTZILE9BQ0EsR0FEQTdILEVBQUE1QixVQUFBb00sRUFBQXhLLEVBQUE1QixTQUFBNEwsSUFBQVEsRUFBQUksRUFBQTVJLEtBQUFvSixFQUFBLGVBQUEsSUFBQWhQLE9BQUEsRUFBQXdSLEdBQUEsR0FDQXBELEdBQUEsRUFBQSxPQWhCQSxXQUFBLElBQUFFLEVBQUE1QyxLQUFBLGVBQUEsR0FBQTRDLEVBQUFRLFdBQUE5TyxPQUFBLENBS0EsR0FKQXNPLEVBQUE1QyxLQUFBLGNBQUEsR0FBQTRDLEVBQUE1QyxLQUFBLGVBQUEsR0FBQTRDLEVBQUFPLFFBQUFQLEVBQUFsRCxPQUFBck0sRUFBQSxlQUNBaVEsRUFBQSxTQUFBLElBQ0FBLEVBQUEsUUFBQSxJQUNBQSxFQUFBLFVBQUEsZ0NBQ0FwTCxFQUFBNkosWUFBQSxjQUFBaUUsS0FBQXBELEVBQUFRLFdBQUE2QyxHQUFBckQsRUFBQVEsV0FBQTlPLE9BQUEsR0FBQTRSLGFBQUFwRCxFQUFBRyxPQUFBLEdBQUEvSyxFQUFBd0osU0FBQSxDQUNBLElBREFtQyxhQUFBM0wsRUFBQXdKLFNBQUEzQixPQUFBMUosRUFBQTJQLEtBQUFFLGFBQUFGLEtBQUFuQyxjQUFBcUMsYUFBQWxELFdBQUE5SSxLQUFBLGdCQUFBL0UsU0FBQW1PLEVBQUEsYUFBQXVCLEVBQUFtQixLQUFBRSxhQUFBRixLQUFBbkMsY0FDQW1DLEtBQUFoRCxTQUFBLFNBQUExTyxRQUFBbVIsRUFBQU8sS0FBQWhELFNBQUEsU0FBQStCLElBQUEsS0FBQSxDQUFBLElBQUFvQixFQUFBSCxLQUFBaEQsU0FBQSxTQUFBbUQsRUFBQWxCLFNBQUFpQixhQUFBdEIsUUFBQXVCLEdBQ0EsSUFBQSxJQUFBMVIsRUFBQSxHQUFBNEYsRUFBQXhHLFNBQUFvSSxjQUFBLE9BQUEsRUFBQWlLLGFBQUEsR0FBQXBDLFdBQUF4UCxRQUFBLENBQUEsSUFBQThSLEVBQUFGLGFBQUEsR0FBQXBDLFdBQUEsR0FBQSxHQUFBc0MsRUFBQUMsV0FBQSxJQUFBLElBQUEzTSxFQUFBLEVBQUFBLEVBQUEwTSxFQUFBQyxXQUFBL1IsT0FBQW9GLElBQUEsSUFBQTBNLEVBQUFDLFdBQUEzTSxHQUFBNE0sU0FBQTVCLFFBQUEsV0FBQTBCLEVBQUFHLGdCQUFBSCxFQUFBQyxXQUFBM00sR0FBQTRNLFVBQ0FqTSxFQUFBbU0sVUFBQSxHQUFBbk0sRUFBQThCLFlBQUErSixhQUFBLEdBQUFwQyxXQUFBLElBQUFyUCxHQUFBNEYsRUFBQW1NLFVBQ0FuVCxFQUFBNkUsRUFBQXdKLFNBQUErRSxJQUFBLEdBQUFELFVBQUEvUixPQUFBMk4sRUFBQTRELEtBQUFFLGFBQUFsRCxZQUNBSixFQUFBNUMsS0FBQSxlQUFBLEdBQUE5SCxFQUFBd0osVUFBQXhKLEVBQUF3SixTQUFBQyxVQUFBekosRUFBQXdKLFNBQUFDLFdBQ0F6SixFQUFBeUosWUFLQStFLEdBQ0EsSUFBQTlELEVBQUE1QyxLQUFBLGVBQUEsQ0FBQTRDLEVBQUE1QyxLQUFBLGNBQUEsR0FBQTRDLEVBQUE1QyxLQUFBLGVBQUEsR0FBQTRDLEVBQUFPLFFBQUFQLEVBQUFsRCxPQUFBck0sRUFBQSxxQkFBQTZFLEVBQUF1SyxTQUFBQyxHQUFBLGFBQUF4SyxFQUFBNkosWUFBQSxjQUFBSyxFQUFBNEQsRUFBQXBELEVBQUFRLFNBQUEsU0FBQU4sRUFBQUcsU0FBQUosRUFBQW1ELEVBQUFqRyxTQUFBNkMsRUFBQU8sUUFBQSxJQUFBVSxFQUFBaEIsRUFBQUgsRUFBQWlFLEVBQUEsRUFBQUMsR0FBQSxFQUFBMU8sRUFBQXdKLFVBQUFpRixFQUFBLEVBQUE5QyxFQUFBM0wsRUFBQXdKLFNBQUEzQixRQUFBZ0csR0FBQUQsSUFBQWEsRUFBQSxFQUFBOUMsRUFBQWtDLEVBQUFhLEdBQUEsR0FDQSxJQUFBLElBQUFDLEVBQUEsRUFBQUEsRUFBQUYsR0FBQUUsRUFBQSxHQUFBQSxJQUFBLENBQUEsSUFBQVgsRUFBQTNDLEVBQUF5QyxFQUFBRyxFQUFBdkQsRUFBQU8sUUFBQSxJQUFBK0MsRUFBQXBELEVBQUFHLE9BQUEsR0FBQSxNQUFBbFAsR0FBQW1TLEVBQUFwRCxFQUFBRyxRQUNBaUQsRUFBQWpQLElBQUEsYUFBQSxVQUFBLElBQUEsSUFBQXlDLEVBQUEsRUFBQUEsRUFBQWdKLEVBQUFoSixJQUFBNkosRUFBQSxJQUFBN0osRUFBQTRKLEVBQUEsU0FBQSxHQUFBQyxHQUFBLElBQUFELEVBQUEsVUFBQUMsRUFBQTdKLEdBQUFnSixFQUFBLEVBQUFZLEVBQUEsUUFBQSxJQUFBQyxFQUFBQSxFQUFBWCxFQUFBbEQsT0FBQXJNLEVBQUEsZUFBQWtRLEVBQUEsa0JBQUFyTCxFQUFBdUssU0FBQUMsR0FBQSxhQUFBeEssRUFBQTZKLFlBQUEsY0FDQSxJQUFBckksRUFBQSxFQUFBQSxFQUFBZ0osR0FBQXhLLEVBQUF3SixTQUFBLEVBQUEsSUFBQWtGLEdBQUFWLEVBQUFsRCxXQUFBMU8sUUFBQSxDQUVBLElBRkFzTyxFQUFBUSxXQUFBOU8sUUFBQW9GLEdBQUFrSixFQUFBbEQsT0FBQXJNLEVBQUEsZUFBQWtRLEVBQUEsa0JBQUFyTCxFQUFBdUssU0FBQUMsR0FBQSxhQUFBeEssRUFBQTZKLFlBQUEsY0FDQWlFLEVBQUFwRCxFQUFBUSxXQUFBNkMsR0FBQXZNLEdBQUFrTixHQUFBWixFQUFBNU8sTUFBQTBPLEVBQUEsTUFDQXpQLEVBQUEyUCxFQUFBRSxFQUFBRixFQUFBbkMsR0FBQWdCLEVBQUFtQixFQUFBRSxFQUFBRixFQUFBbkMsR0FBQW1DLEVBQUFoRCxTQUFBLFNBQUExTyxRQUFBbVIsRUFBQU8sRUFBQWhELFNBQUEsU0FBQStCLElBQUEsTUFBQW9CLEVBQUFILEVBQUFoRCxTQUFBLFVBQUFpQyxTQUFBaUIsRUFBQXRCLFFBQUF1QixHQUNBek0sSUFBQSxJQUFBc00sRUFBQWhELFdBQUExTyxRQUFBNFIsRUFBQWxELFdBQUExTyxPQUFBMFIsRUFBQXRHLE9BQUF3RyxFQUFBbEQsU0FBQSxXQUFBdEosR0FBQWdKLEdBQUF4SyxFQUFBd0osU0FBQSxFQUFBLElBQUF4SixFQUFBd0osVUFBQXdFLEVBQUFoTSxLQUFBb0osRUFBQSxlQUFBLElBQUFoUCxRQUFBb08sSUFDQSxHQUFBeEssRUFBQXdKLFdBQUFrRixFQUFBLENBQUEsR0FBQS9TLFNBQUEsTUFBQSxHQUFBb0ssVUFBQTZJLFdBQUFwQyxRQUFBLFdBQUEsQ0FBQSxJQUFBLElBQUFqUSxFQUFBLEdBQUE0RixFQUFBeEcsU0FBQW9JLGNBQUEsT0FBQSxFQUFBaUssRUFBQSxHQUFBcEMsV0FBQXhQLFFBQUEsQ0FBQSxJQUFBOFIsRUFBQUYsRUFBQSxHQUFBcEMsV0FBQSxHQUFBLElBQUFwSyxFQUFBLEVBQUFBLEVBQUEwTSxFQUFBQyxXQUFBL1IsT0FBQW9GLElBQUEsSUFBQTBNLEVBQUFDLFdBQUEzTSxHQUFBNE0sU0FBQTVCLFFBQUEsV0FBQTBCLEVBQUFHLGdCQUFBSCxFQUFBQyxXQUFBM00sR0FBQTRNLFVBQ0FqTSxFQUFBbU0sVUFBQSxHQUFBbk0sRUFBQThCLFlBQUErSixFQUFBLEdBQUFwQyxXQUFBLElBQUFyUCxHQUFBNEYsRUFBQW1NLFVBQ0FuVCxFQUFBNkUsRUFBQXdKLFNBQUErRSxJQUFBLEdBQUFELFVBQUEvUixPQUFBcEIsRUFBQTZFLEVBQUF3SixTQUFBK0UsSUFBQXRELFFBQUF6RCxPQUFBd0csRUFBQWxELFdBQUFDLE9BQUEsU0FBQSxHQUFBMkQsRUFDQWhFLEVBQUFRLFdBQUE3TyxLQUFBLFNBQUFtRixJQUFBc00sRUFBQXBELEVBQUFRLFdBQUE2QyxHQUFBdk0sSUFBQXRDLE1BQUEwTyxFQUFBLE1BQUEsSUFBQXBNLEVBQUFzTSxFQUFBM1EsU0FBQWlPLEVBQUEsVUFBQTVKLEdBQUFrSixFQUFBUSxXQUFBOU8sT0FBQSxFQUFBMFIsRUFBQTNRLFNBQUFpTyxFQUFBLFVBQUEwQyxFQUFBMVEsWUFBQWdPLEVBQUEsVUFBQTBDLEVBQUExUSxZQUFBZ08sRUFBQSxZQUFBVixFQUFBeEwsTUFBQXdMLEVBQUFRLFdBQUE5TyxPQUFBd1IsRUFBQSxVQURBLENBQUFFLEVBQUFwRCxFQUFBUSxXQUFBNkMsR0FBQXJELEVBQUFRLFdBQUE5TyxPQUFBLEdBQUE0UixFQUFBbEQsV0FBQXpPLEtBQUEsV0FBQXlSLEVBQUF0RyxPQUFBck0sRUFBQVksU0FBQStSLEVBQUFqRyxTQUFBLElBQUFnSCxFQUFBLEVBQUFDLEVBQUEsSUFBQWpRLEVBQUEsRUFBQWtRLEdBQUEsRUFBQUMsRUFBQSxFQUFBdEUsRUFBQVEsV0FBQTdPLEtBQUEsU0FBQXFPLEdBQUEsT0FBQSxTQUFBc0IsR0FBQSxJQUFBOEIsRUFBQXBELEVBQUFRLFdBQUE2QyxHQUFBL0IsR0FBQSxJQUFBOEIsRUFBQTVDLFNBQUEsU0FBQWxKLEtBQUFvSixFQUFBLGVBQUEsSUFBQWhQLE9BQUEsQ0FBQSxJQUFBbUYsRUFBQXVNLEVBQUFqRyxTQUFBa0gsR0FBQSxFQUFBRixHQUFBdE4sRUFBQTFDLEVBQUEwQyxJQUFBMUMsRUFBQTBDLEVBQUF3TixHQUFBLEdBQ0F4TixFQUFBdU4sSUFBQUEsRUFBQXZOLEdBQUF5TixNQURBLENBQ0F0RSxJQUFBLElBQUF1RSxFQUFBSixFQUFBRyxFQUFBLElBQUFILEVBQUFGLEVBQUFGLEVBQUF6TyxFQUFBM0Isa0JBQUEwUSxHQUFBLEVBQUFwRCxHQUFBLEVBQUFnRCxHQUFBRixFQUFBLEdBQUFBLEtBQUEsR0FBQTVQLEVBQUFpUSxFQUFBbkQsRUFBQXNELEVBQUEsR0FBQSxHQUFBclEsS0FBQXNRLElBQUFELEVBQUF0RCxHQUFBQSxFQUFBc0QsRUFBQU4sRUFBQUYsRUFDQS9ELEVBQUFsRCxPQUFBck0sRUFBQSw2QkFDQXVQLEVBQUExSSxLQUFBb0osRUFBQSxVQUFBLElBQUFwSixLQUFBLFNBQUFvSixFQUFBLGlCQUFBLElBQUEyQixTQUFBckMsRUFBQTFJLEtBQUFvSixFQUFBLFVBQUEsSUFBQXBKLEtBQUEsUUFBQW9KLEVBQUEsZ0JBQUEsSUFBQTJCLFNBQUFyQyxFQUFBMUksS0FBQW9KLEVBQUEsU0FBQSxJQUFBcEosS0FBQSxTQUFBb0osRUFBQSxpQkFBQSxJQUFBMkIsU0FBQXJDLEVBQUExSSxLQUFBb0osRUFBQSxTQUFBLElBQUFwSixLQUFBLFFBQUFvSixFQUFBLGdCQUFBLElBQUEyQixTQUFBckMsRUFBQTVDLEtBQUEsZUFBQSxHQUFBOUgsRUFBQXdKLFVBQUF4SixFQUFBd0osU0FBQUMsV0FDQXpKLEVBQUF5SixhQWpEQWlCLEVBQUFPLFFBQUF5QyxJQUFBMU4sRUFBQXVKLFdBQUFwTyxFQUFBc0MsUUFBQXdCLE9BQUEsV0FBQWUsRUFBQXVKLFlBQUFtQixFQUFBNUMsS0FBQSxZQUFBdkIsYUFBQW1FLEVBQUE1QyxLQUFBLFlBQ0E0QyxFQUFBNUMsS0FBQSxVQUFBckwsV0FBQWlSLEVBQUEsWUFnREF2UyxFQUFBMk4sR0FBQXFHLGFBQUEsU0FBQUMsRUFBQUMsRUFBQUMsRUFBQUMsR0FtQkEsR0FuQkF4VCxLQUFBeVQsUUFBQSxTQUFBQyxFQUFBQyxFQUFBQyxHQUFBLElBQUFDLEVBQUFDLEVBQUE5VCxLQUFBa04sT0FBQTZHLFVBQUEsSUFBQUYsRUFBQXpVLEVBQUFzVSxFQUFBMVQsS0FBQWlOLE9BQUEsSUFBQWhILEtBQUEsT0FBQStOLE9BQUEsR0FBQTlDLFNBQUEwQyxFQUFBSyxjQUNBLE9BREFqVSxLQUFBcU4sT0FBQTZHLFFBQUFDLElBQUEsaURBQ0EsRUFDQU4sRUFBQUEsRUFBQXhULE9BQUEsSUFVQStULEVBVkFDLEVBQUEsRUFDQSxHQURBQSxFQUFBclUsS0FBQW1OLFdBQUEsRUFBQW5OLEtBQUFrTixPQUFBaUMsV0FBQTlPLE9BQUEsRUFBQWpCLEVBQUEwVSxFQUFBOVQsS0FBQW1OLFlBQUFnQyxXQUFBOU8sT0FBQSxFQUNBakIsRUFBQXNVLEVBQUExVCxLQUFBaU4sU0FBQWhILEtBQUEyTixFQUFBLG1CQUFBdlQsT0FBQSxDQUFBLElBQUFpVSxFQUFBbFYsRUFBQXNVLEVBQUExVCxLQUFBaU4sT0FBQSxJQUFBaEgsS0FBQTJOLEVBQUEsaUJBQUEsR0FBQSxLQUFBNVQsS0FBQTZOLGFBQUF6TyxFQUFBc1UsRUFBQTFULEtBQUFpTixPQUFBLElBQUFoSCxLQUFBMk4sRUFBQSxlQUFBdlQsUUFBQWpCLEVBQUFzVSxFQUFBMVQsS0FBQWlOLE9BQUEsSUFBQWhILEtBQUEyTixFQUFBLGFBQUF2VCxhQUFBLEdBQUEsR0FBQWpCLEVBQUFrVixHQUFBck8sS0FBQSxjQUFBNUYsT0FBQSxDQUFBLElBQUFrVSxFQUFBRCxFQUFBTixPQUFBdk4sT0FBQStOLEVBQUFELEVBQUFsVSxPQUFBLEtBQUFrVSxFQUFBN0QsVUFBQThELEVBQUEsR0FBQUQsRUFBQTdELFVBQUE4RCxFQUFBLElBQUF4VSxLQUFBNk4sWUFBQSxNQUFBMEcsRUFBQUEsRUFBQTdELFVBQUEsRUFBQThELEVBQUEsR0FBQXhVLEtBQUE2TixZQUFBLEtBQUEwRyxFQUFBN0QsVUFBQThELEVBQUEsSUFBQXhVLEtBQUE2TixjQUFBMEcsR0FBQXZVLEtBQUE2TixhQUNBeUcsRUFBQU4sT0FBQXZOLEtBQUE4TixHQUNBLEdBQUFuVixFQUFBc1UsRUFBQTFULEtBQUFpTixTQUFBaEgsS0FBQTJOLEVBQUEscUJBQUFBLEdBQUF2VCxRQUFBZ1UsS0FDQSxHQUFBUixJQUFBUSxHQUFBclUsS0FBQW9OLFNBQ0EsRUFBQXBOLEtBQUF5VSxPQUFBelUsS0FBQXFOLE9BQUE2RyxRQUFBQyxJQUFBLHVDQUNBRSxJQUFBLEdBQUFELEVBQUFoVixFQUFBc1UsRUFBQTFULEtBQUFpTixPQUFBLElBQUFoSCxLQUFBMk4sRUFBQSwwQkFBQXZULFNBQUFMLEtBQUFxTixPQUFBNkcsUUFBQUMsSUFBQSxzRkFDQUUsTUFDQUQsRUFBQWhWLEVBQUFzVSxFQUFBMVQsS0FBQWlOLFNBQUFoSCxLQUFBMk4sRUFBQSxtQkFBQTVFLFNBQUFHLFdBQUE2QixTQUFBLEVBQUE1UixFQUFBc1YsS0FBQU4sRUFBQTNOLFFBQUFwRyxTQUFBTCxLQUFBcU4sT0FBQTZHLFFBQUFDLElBQUEsbUVBQ0FFLElBQUEsR0FBQWpWLEVBQUFzVSxFQUFBMVQsS0FBQWlOLE9BQUEsSUFBQWhILEtBQUEsSUFBQTJOLEVBQUEsVUFBQXpFLFdBQUE5TyxTQUFBTCxLQUFBcU4sT0FBQTZHLFFBQUFDLElBQUEsK0NBQ0FFLE9BQUEsR0FBQUQsRUFBQWhWLEVBQUFzVSxFQUFBMVQsS0FBQWlOLFNBQUFoSCxLQUFBMk4sRUFBQSxtQkFBQUEsRUFBQSxvQkFBQXZULFNBQUFMLEtBQUFxTixPQUFBNkcsUUFBQUMsSUFBQSxzRkFDQUUsS0FHQSxPQUZBclUsS0FBQXFOLE9BQUE2RyxRQUFBQyxJQUFBLDhCQUFBRSxFQUFBLEtBQUFyVSxLQUFBb04sUUFBQSxLQUNBLEVBQUFpSCxJQUFBLG1CQUFBclUsS0FBQXNOLGVBQUF0TixLQUFBc04sZUFBQXFHLEVBQUFVLEdBQUFWLEVBQUFoVSxLQUFBLFFBQUEwVSxJQUNBLFFBQ0EsSUFBQWQsSUFBQUEsR0FBQSxRQUNBLElBQUFDLElBQUFBLEdBQUEsSUFDQUQsSUFBQUMsRUFBQSxLQUFBLHdEQUNBLElBQUFwRixFQUFBLEdBQUFwTyxLQUFBb04sUUFBQSxFQUFBZ0IsRUFBQW9GLEVBQUEsSUFBQUEsRUFBQSxJQUFBRCxFQUNBLElBQUFLLEVBQUFQLEVBQUFzQixjQUFBQyxFQUFBdkIsRUFBQVksY0FDQSxJQURBalUsS0FBQWdOLEtBQUE1TixFQUFBZ1AsR0FBQXBPLEtBQUFxTixPQUFBNkcsUUFBQUMsSUFBQSxhQUFBblUsS0FBQWdOLEtBQUEzTSxPQUFBLHVCQUFBdVQsR0FDQTVULEtBQUFrTixPQUFBOU4sRUFBQVksS0FBQWdOLEtBQUEsSUFBQS9HLEtBQUEyTixFQUFBLFNBQUE1VCxLQUFBb04sUUFBQXBOLEtBQUFrTixPQUFBaUMsV0FBQTlPLE9BQUFMLEtBQUFpTixPQUFBLEVBQUFqTixLQUFBaU4sT0FBQWpOLEtBQUFnTixLQUFBM00sT0FBQUwsS0FBQWlOLFNBQ0EsR0FEQWpOLEtBQUFxTixPQUFBNkcsUUFBQUMsSUFBQSxhQUFBblUsS0FBQWlOLE9BQUEsVUFBQWpOLEtBQUFnTixLQUFBM00sT0FBQSxLQUNBTCxLQUFBaU4sT0FBQXFHLEdBQUEsR0FFQSxHQUFBdFQsS0FBQWtOLE9BQUE5TixFQUFBWSxLQUFBZ04sS0FBQWhOLEtBQUFpTixPQUFBLElBQUFoSCxLQUFBMk4sRUFBQSxTQUFBNVQsS0FBQWtOLE9BQUE3TSxPQUFBLENBQUFMLEtBQUFxTixPQUFBNkcsUUFBQUMsSUFBQSxhQUFBZCxFQUFBLG9DQUNBLElBQUFNLEVBQUF2VSxFQUFBWSxLQUFBZ04sS0FBQWhOLEtBQUFpTixTQUFBaEgsS0FBQTJOLEVBQUEsVUFBQSxHQUFBeFUsRUFBQVksS0FBQWdOLEtBQUFoTixLQUFBaU4sU0FBQWhILEtBQUEsV0FBQSxLQUFBME4sRUFBQSxHQUFBLFNBQ0EsSUFBQUcsRUFBQTlULEtBQUFrTixPQUFBNkcsVUFBQS9ULEtBQUFtTixVQUFBLEVBQUEsS0FBQW5OLEtBQUFtTixVQUFBMkcsRUFBQXpULE9BQUFMLEtBQUFtTixZQUFBLEdBQUEyRyxFQUFBOVQsS0FBQW1OLFdBQUErRCxTQUFBMEQsR0FBQSxNQUFBZCxFQUFBOVQsS0FBQW1OLFdBQUErRCxRQUFBLEVBQUEsRUFBQWxSLEtBQUFtTixZQUFBLE1BQ0FuTixLQUFBeVUsS0FBQSxFQUFBclYsRUFBQVksS0FBQWdOLEtBQUFoTixLQUFBaU4sU0FBQWhILEtBQUEsSUFBQTJOLEVBQUEsYUFBQUEsRUFBQSxVQUFBdlQsU0FBQUwsS0FBQXlVLEtBQUEsR0FDQXpVLEtBQUF5VCxRQUFBelQsS0FBQWdOLEtBQUEyRyxFQUFBQyxHQUFBNVQsS0FBQW1OLGFBQUF3RyxFQUFBdlUsRUFBQVksS0FBQWdOLEtBQUFoTixLQUFBaU4sU0FBQWhILEtBQUEyTixFQUFBLGFBQUFBLEVBQUEsV0FBQXZULFNBQUFMLEtBQUFrTixPQUFBOU4sRUFBQVksS0FBQWdOLEtBQUFoTixLQUFBaU4sT0FBQSxJQUFBaEgsS0FBQSxJQUFBMk4sRUFBQSxZQUFBQSxFQUFBLFNBQUE1VCxLQUFBb04sUUFBQSxFQUFBcE4sS0FBQXlVLEtBQUEsRUFBQXpVLEtBQUF5VCxRQUFBelQsS0FBQWdOLEtBQUEyRyxFQUFBQyxJQUNBLElBQUFpQixFQUFBelYsRUFBQVksS0FBQWdOLEtBQUFoTixLQUFBaU4sT0FBQSxJQUFBaEgsS0FBQSxJQUFBMk4sRUFBQSxTQUFBNVQsS0FBQW9OLFFBQUF5SCxFQUFBMUYsV0FBQTlPLGFBUEFMLEtBQUFxTixPQUFBNkcsUUFBQUMsSUFBQSw4QkFDQW5VLEtBQUFvTixRQUFBLEVBT0EsT0FBQSxHQXhGQSxDQXdGQWxOLFFDekZBLElBQUE0VSxVQUFBLFNBQUF0UixFQUFBQyxFQUFBQyxHQUFBLFNBQUE1RCxFQUFBMEQsR0FBQSxJQUFBQyxFQUFBQyxFQUFBc0UsY0FBQSxLQUFBLE9BQUF2RSxFQUFBOE8sVUFBQSxpQkFBQS9PLEVBQUEsMEJBQUFDLEVBQUFzUixxQkFBQSxNQUFBMVUsT0FBQSxJQUFBNkQsRUFBQSxnQkFBQVIsRUFBQXNFLGNBQUEsU0FBQXRELEVBQUEsY0FBQWhCLEVBQUFzRSxjQUFBLFNBQUF4QyxFQUFBMUYsRUFBQSxHQUFBMkYsRUFBQTNGLEVBQUEsR0FBQSxNQUFBLENBQUFrVixHQUFBLFdBQUEsSUFBQXhSLEVBQUFDLEVBQUF6RCxLQUFBaVYsS0FBQSxJQUFBelIsS0FBQUMsRUFBQUEsRUFBQXlSLGVBQUExUixJQUFBQyxFQUFBRCxNQUFBeVIsS0FBQSxDQUFBRSxvQkFBQSxXQUFBM1IsRUFBQUUsRUFBQTBSLGlCQUFBQyxTQUFBLG9CQUFBLFFBQUEsV0FBQSxPQUFBLEtBQUFDLGdCQUFBLFdBQUE3UCxHQUFBakMsRUFBQSw4QkFBQW5ELFFBQUFtRCxFQUFBLDhCQUFBNEksS0FBQSwwQ0FBQW1KLGdCQUFBLFdBQUEsR0FBQS9QLEdBQUFoQyxFQUFBLDJCQUFBbkQsT0FBQSxDQUFBLElBQUFvRCxFQUFBLHNCQUFBQyxFQUFBLCtGQUFBRixFQUFBLFNBQUFsRCxLQUFBLFdBQUEsSUFBQXFELEVBQUFILEVBQUF4RCxNQUFBQSxLQUFBd1YsYUFBQSxRQUFBelQsTUFBQTBCLElBQUFFLEVBQUF2QyxTQUFBLGNBQUFwQixLQUFBeVYsVUFBQTlSLEVBQUF2QyxTQUFBLHdCQUFBcEIsS0FBQXdWLGFBQUEsUUFBQXpULE1BQUEyQixLQUFBQyxFQUFBdkMsU0FBQSxhQUFBcEIsS0FBQXlWLFVBQUE5UixFQUFBdkMsU0FBQSx5QkFBQW9DLEVBQUEsb0JBQUFsRCxLQUFBLFdBQUFOLEtBQUF5VixVQUFBalMsRUFBQXhELE1BQUFvQixTQUFBLDBCQUFBc1UsVUFBQSxXQUFBLElBQUFoUixHQUFBbEIsRUFBQSxxQkFBQW5ELE9BQUEsQ0FBQSxJQUFBb0QsRUFBQUQsRUFBQSxlQUFBLEdBQUFDLEVBQUFnUyxVQUFBaFMsRUFBQWtTLFVBQUFDLFlBQUEsWUFBQTFSLEdBQUFWLEVBQUEsdUJBQUFuRCxTQUFBeVUsVUFBQWUsS0FBQUMsa0JBQUF0UyxFQUFBLHVCQUFBbEQsS0FBQSxXQUFBLEdBQUEsYUFBQU4sS0FBQStWLEtBQUEsQ0FBQSxJQUFBdFMsRUFBQUQsRUFBQXhELE1BQUEwRCxFQUFBRCxFQUFBOUQsS0FBQSxlQUFBOEQsRUFBQWtTLE1BQUEsV0FBQWxTLEVBQUF1UyxRQUFBdFMsR0FBQUQsRUFBQXVTLElBQUEsSUFBQTNVLFlBQUEsc0JBQUE0VSxLQUFBLFdBQUFuQixVQUFBZSxLQUFBQyxvQkFBQXJTLEVBQUE4QyxRQUFBLFFBQUEyUCxPQUFBLFdBQUF6UyxFQUFBdVMsUUFBQXRTLEdBQUFELEVBQUF1UyxJQUFBLElBQUEzVSxZQUFBLHNCQUFBbUYsS0FBQSxRQUFBLFdBQUE5RixXQUFBb1UsVUFBQWUsS0FBQUMsZ0JBQUEsWUFBQUQsS0FBQSxDQUFBQyxnQkFBQSxZQUFBNVIsR0FBQVYsRUFBQSx1QkFBQW5ELFFBQUFtRCxFQUFBLHVCQUFBbEQsS0FBQSxXQUFBLEdBQUEsYUFBQU4sS0FBQStWLEtBQUEsQ0FBQSxJQUFBdFMsRUFBQUQsRUFBQXhELE1BQUEwRCxFQUFBRCxFQUFBOUQsS0FBQSxlQUFBOEQsRUFBQXVTLE9BQUF2UyxFQUFBdVMsUUFBQXRTLEdBQUFELEVBQUF1UyxJQUFBdFMsR0FBQXRDLFNBQUEsMEJBQUEsQ0FBQWxCLE9BQUFGLEVBQUFBLEtBQUFKLFVBQUFNLE9BQUFOLFVBQUFPLE1BQUEsV0FBQTJVLFVBQUFFLE9DQUEsU0FBQTVWLEdBRUFBLEVBQUFRLFVBQUFPLE1BQUEsV0FFQSxJQUFBZ0wsaUJBQUEsa0JBQUEsQ0FDQXBDLE9BQUEsTUFHQXBILE9BQUF1RixLQUFBLFdBQ0FnTixRQUFBQyxJQUFBLHFCQUNBL1UsRUFBQSxRQUFBZ0MsU0FBQSxTQUNBLFdBQ0E4UyxRQUFBQyxJQUFBLHlCQUNBL1UsRUFBQSxRQUFBZ0MsU0FBQSxlQWJBLENBdUJBbEIsUUN2QkEsU0FBQWQsR0FFQUMsT0FBQUMsVUFBQTZXLFNBQUEsQ0FFQTNXLE9BQUEsU0FBQUMsRUFBQUMsR0FFQU4sRUFBQSxhQUFBZ1gsY0FBQSxDQUNBZixTQUFBLHNCQUNBVSxLQUFBLFFBQ0FNLFFBQUEsQ0FDQUMsU0FBQSxHQUVBQyxNQUFBLENBQ0FDLE9BQUEsdUxBU0FDLE9BQUEsbUJBRUFDLFNBQUEsU0FBQUMsR0FDQSxJQUFBQyxFQUFBLEdBQ0FELEVBQUFFLEdBQUFsTCxTQUFBLHlCQUFBdEwsU0FFQXVXLEdBQUEsa0NBREFELEVBQUFFLEdBQUFsTCxTQUFBLHlCQUFBbkwsT0FDQSxVQUVBbVcsRUFBQUUsR0FBQWxMLFNBQUEsa0JBQUF0TCxTQUVBdVcsR0FBQSxpQ0FEQUQsRUFBQUUsR0FBQWxMLFNBQUEsa0JBQUFuTCxPQUNBLFVBSUEsT0FEQW9XLEdBQUEsZ0NBREFELEVBQUFFLEdBQUFsTCxTQUFBLG9CQUFBbkwsT0FDQSxVQUlBc1csYUFBQSxFQUVBQyxPQUFBLHdEQUtBM1gsRUFBQSxvQkFBQWdYLGNBQUEsQ0FFQWYsU0FBQSw2QkFDQVUsS0FBQSxTQUNBaUIsT0FBQSxDQUNBUixPQUFBLGtMQU1BUyxTQUFBLENBQ0FDLFFBQUEsQ0FDQUMsTUFBQSxlQUVBM0UsR0FBQSxLQUtBNUYsSUFBQSwyQ0FFQXdLLE1BQUEsQ0FDQUQsTUFBQSxhQUNBM0UsR0FBQSxJQUNBNUYsSUFBQSw0Q0FFQXlLLE1BQUEsQ0FDQUYsTUFBQSxpQkFDQXZLLElBQUEscUJBRUEwSyxRQUFBLENBQ0FILE1BQUEsbUJBQ0EzRSxHQUFBLFlBQ0E1RixJQUFBLDZIQU1BMkssVUFBQSxjQUdBQyxVQUFBLENBQ0FDLFlBQUEsU0FBQUMsRUFBQUMsRUFBQWhCLEdBQ0FnQixFQUFBQyxNQUFBakIsRUFBQUUsR0FBQWxYLEtBQUEsUUFDQWdZLEVBQUFDLE1BQUEsMkJBQUFELEVBQUFDLE1BQUEsd0JBNUZBLENBcUdBMVgsUUNyR0EsU0FBQWQsR0FPQSxTQUFBeVksSUFDQXpZLEVBQUEsa0NBQUFpQyxZQUFBLFdBQ0FqQyxFQUFBLHFDQUFBaUMsWUFBQSxjQUdBakMsRUFBQVEsVUFBQU8sTUFBQSxXQUVBZixFQUFBLHlDQUFBMFksUUFBQSxXQUNBMVksRUFBQSx5Q0FBQWlDLFlBQUEsY0FDQWpDLEVBQUFZLE1BQUF1RyxRQUFBLG1CQUFBbkYsU0FBQSxnQkFHQWhDLEVBQUEseUNBQUEyWSxTQUFBLFdBQ0EzWSxFQUFBLHlDQUFBaUMsWUFBQSxnQkFJQWpDLEVBQUEsa0NBQUFrQixLQUFBLFdBQ0FsQixFQUFBWSxNQUFBaUcsS0FBQSxXQUFBK1IsVUFBQSx3REFLQTVZLEVBQUEsd0JBQUFhLE1BQUEsU0FBQUgsR0FDQUEsRUFBQWEsaUJBRUF2QixFQUFBLFFBQUE4QixTQUFBLG1CQUNBOUIsRUFBQSxrQ0FBQTZZLFFBQUEsSUFBQSxXQUNBN1ksRUFBQSxRQUFBaUMsWUFBQSxzQkFLQWpDLEVBQUEsUUFBQWdDLFNBQUEsbUJBQ0FoQyxFQUFBLGtDQUFBOFksVUFBQSxRQU1BOVksRUFBQSw0QkFBQXVXLE1BQUEsV0FFQXZXLEVBQUEsUUFBQWdDLFNBQUEscUJBQ0FoQyxFQUFBLGtDQUFBOFksVUFBQSxPQUlBOVksRUFBQSxTQUFBMFksUUFBQSxXQUVBMVksRUFBQSxxREFBQTZZLFFBQUEsSUFBQSxXQUNBN1ksRUFBQSxRQUFBaUMsWUFBQSxxQkFDQWpDLEVBQUEsUUFBQWlDLFlBQUEsbUJBQ0F3VyxVQVNBelksRUFBQXNDLFFBQUFDLEtBQUEsV0FJQXZDLEVBQUEsa0NBQUFTLEdBQUEsUUFBQSwrQkFBQSxTQUFBQyxHQUNBQSxFQUFBYSxpQkFDQWtYLE1BSUF6WSxFQUFBUSxVQUFBaUIsTUFBQSxTQUFBZixHQUNBLElBQUFBLEVBQUFnQixTQUNBK1csTUFLQXpZLEVBQUFRLFVBQUFpQixNQUFBLFNBQUFmLEdBQ0EsSUFBQUEsRUFBQWdCLFNBQUExQixFQUFBLGdDQUFBNlIsR0FBQSxXQUNBNEcsTUFJQXpZLEVBQUEsa0NBQUFrQixLQUFBLFdBRUEsSUFBQTZYLEVBQUEvWSxFQUFBWSxNQUFBaUcsS0FBQSxpQkFBQTVGLE9BQ0FvRixFQUFBLEVBRUEsT0FBQTBTLEdBRUEsS0FBQSxFQUlBLElBSEEvWSxFQUFBWSxNQUFBaUcsS0FBQSxxQkFBQTdFLFNBQUEsa0JBQUF1UCxRQUFBLHVFQUNBdlIsRUFBQVksTUFBQW9CLFNBQUEsY0FFQXFFLEVBQUEsRUFBQUEsRUFBQTBTLEVBQUExUyxJQUFBLENBQ0EsSUFBQTJTLEVBQUFoWixFQUFBWSxNQUFBaUcsS0FBQSxtQ0FBQStMLEdBQUF2TSxHQUNBckcsRUFBQSx3QkFBQWlaLFlBQUFELEVBQUEzWCxVQUFBZ0wsT0FBQTJNLEVBQUFFLFVBQUFDLFdBR0EsTUFDQSxLQUFBLEVBR0EsSUFGQW5aLEVBQUFZLE1BQUFpRyxLQUFBLHFCQUFBN0UsU0FBQSxtQkFBQXVQLFFBQUEsdUVBRUFsTCxFQUFBLEVBQUFBLEVBQUEwUyxFQUFBMVMsSUFBQSxDQUNBMlMsRUFBQWhaLEVBQUFZLE1BQUFpRyxLQUFBLG1DQUFBK0wsR0FBQXZNLEdBQ0FyRyxFQUFBLHdCQUFBaVosWUFBQUQsRUFBQTNYLFVBQUFnTCxPQUFBMk0sRUFBQUUsVUFBQUMsV0FFQSxNQUNBLEtBQUEsRUFDQSxJQUFBQyxFQUFBcFosRUFBQVksTUFBQWlHLEtBQUEscUJBSUEsSUFGQTdHLEVBQUFvWixHQUFBcFgsU0FBQSxxQkFBQXVQLFFBQUEsdUVBRUFsTCxFQUFBLEVBQUFBLEVBQUEwUyxFQUFBMVMsSUFBQSxDQUNBMlMsRUFBQWhaLEVBQUFZLE1BQUFpRyxLQUFBLG1DQUFBK0wsR0FBQXZNLEdBQ0FyRyxFQUFBLHdCQUFBaVosWUFBQUQsRUFBQTNYLFVBQUFnTCxPQUFBMk0sRUFBQUUsVUFBQUMsV0FFQSxNQUNBLEtBQUEsRUFHQSxJQUZBblosRUFBQVksTUFBQWlHLEtBQUEscUJBQUE3RSxTQUFBLG9CQUFBdVAsUUFBQSx1RUFFQWxMLEVBQUEsRUFBQUEsRUFBQTBTLEVBQUExUyxJQUFBLENBQ0EyUyxFQUFBaFosRUFBQVksTUFBQWlHLEtBQUEsbUNBQUErTCxHQUFBdk0sR0FDQXJHLEVBQUEsd0JBQUFpWixZQUFBRCxFQUFBM1gsVUFBQWdMLE9BQUEyTSxFQUFBRSxVQUFBQyxpQkFuSUEsQ0E0SUFyWSxRQzVJQSxTQUFBZCxHQUVBQSxFQUFBUSxVQUFBTyxNQUFBLFdBRUFmLEVBQUEsa0JBQUFrQixLQUFBLFdBQ0FsQixFQUFBWSxNQUFBaUcsS0FBQSxpQ0FBQStSLFVBQUEsNERBS0E1WSxFQUFBc0MsUUFBQUMsS0FBQSxXQUVBdkMsRUFBQSxnREFBQWtCLEtBQUEsV0FFQSxJQUFBNlgsRUFBQS9ZLEVBQUFZLE1BQUFpRyxLQUFBLGlCQUFBNUYsT0FDQW9GLEVBQUEsRUFFQSxPQUFBMFMsR0FFQSxLQUFBLEVBR0EsSUFGQS9ZLEVBQUFZLE1BQUFpRyxLQUFBLGNBQUE3RSxTQUFBLGtCQUVBcUUsRUFBQSxFQUFBQSxFQUFBMFMsRUFBQTFTLElBQUEsQ0FDQSxJQUFBMlMsRUFBQWhaLEVBQUFZLE1BQUFpRyxLQUFBLDRCQUFBK0wsR0FBQXZNLEdBQ0FyRyxFQUFBLGlDQUFBaVosWUFBQUQsRUFBQTNYLFVBQUFnTCxPQUFBMk0sRUFBQUUsVUFBQUMsV0FHQSxNQUNBLEtBQUEsRUFHQSxJQUZBblosRUFBQVksTUFBQWlHLEtBQUEsY0FBQTdFLFNBQUEsa0JBRUFxRSxFQUFBLEVBQUFBLEVBQUEwUyxFQUFBMVMsSUFBQSxDQUNBMlMsRUFBQWhaLEVBQUFZLE1BQUFpRyxLQUFBLDRCQUFBK0wsR0FBQXZNLEdBQ0FyRyxFQUFBLGlDQUFBaVosWUFBQUQsRUFBQTNYLFVBQUFnTCxPQUFBMk0sRUFBQUUsVUFBQUMsV0FFQSxNQUNBLEtBQUEsRUFDQSxJQUFBQyxFQUFBcFosRUFBQVksTUFBQWlHLEtBQUEsY0FJQSxJQUZBN0csRUFBQW9aLEdBQUFwWCxTQUFBLGtCQUVBcUUsRUFBQSxFQUFBQSxFQUFBMFMsRUFBQTFTLElBQUEsQ0FDQTJTLEVBQUFoWixFQUFBWSxNQUFBaUcsS0FBQSw0QkFBQStMLEdBQUF2TSxHQUNBckcsRUFBQSxpQ0FBQWlaLFlBQUFELEVBQUEzWCxVQUFBZ0wsT0FBQTJNLEVBQUFFLFVBQUFDLFdBRUEsTUFDQSxLQUFBLEVBR0EsSUFGQW5aLEVBQUFZLE1BQUFpRyxLQUFBLGNBQUE3RSxTQUFBLGtCQUVBcUUsRUFBQSxFQUFBQSxFQUFBMFMsRUFBQTFTLElBQUEsQ0FDQTJTLEVBQUFoWixFQUFBWSxNQUFBaUcsS0FBQSw0QkFBQStMLEdBQUF2TSxHQUNBckcsRUFBQSxpQ0FBQWlaLFlBQUFELEVBQUEzWCxVQUFBZ0wsT0FBQTJNLEVBQUFFLFVBQUFDLGlCQW5EQSxDQTREQXJZLFFDNURBLFNBQUFkLEdBQ0FDLE9BQUFDLFVBQUFtWixTQUFBLENBQ0FqWixPQUFBLFNBQUFDLEVBQUFDLEdBSUEsU0FBQWdaLEVBQUFDLEdBQ0FBLEVBQUExQyxPQUVBLElBQUEyQyxFQUFBRCxFQUFBcFMsUUFBQSxNQWNBLE9BWkFxUyxFQUFBMVgsU0FBQSxZQUNBMFgsRUFBQTNTLEtBQUEsc0NBQUFzRixRQUFBME0sVUFDQVcsRUFBQXZYLFlBQUEsYUFFQWpDLEVBQUEsa0NBQUE2WSxVQUNBN1ksRUFBQSx1Q0FBQWlDLFlBQUEsV0FHQXVYLEVBQUEzUyxLQUFBLHNDQUFBc0YsUUFBQTJNLFlBQ0FVLEVBQUF4WCxTQUFBLGFBR0EsRUFJQWhDLEVBQUEsMEJBQUErUCxTQUFBLEtBQUExRCxPQUFBLHdPQUdBck0sRUFBQSx3QkFBQTJVLFFBQUEsTUFBQTNTLFNBQUEsbUJBRUFzWCxFQUFBdFosRUFBQSxxQ0FFQUEsRUFBQSxhQUFBYSxNQUFBLFNBQUFILEdBQ0FBLEVBQUFhLGlCQUNBK1gsRUFBQXRaLEVBQUFZLFdBT0FaLEVBQUFRLFVBQUFpQixNQUFBLFNBQUFmLEdBRUEsSUFBQUEsRUFBQWdCLFNBQUExQixFQUFBLGFBQUE2UixHQUFBLFdBQ0F5SCxlQUFBdFosRUFBQSxzQkE5Q0EsQ0FtREFjLFFDbkRBLFNBQUFkLEdBRUFBLEVBQUFRLFVBQUFPLE1BQUEsV0FHQWYsRUFBQSxvQkFBQXlaLEtBQUEsVUFBQSxXQUNBelosRUFBQVksTUFBQU0sS0FBQSxTQUFBNlcsRUFBQTJCLEdBQ0ExWixFQUFBMFosR0FBQTFNLEtBQUEsNkNBSUFoTixFQUFBLHVCQUFBeVosS0FBQSxXQUFBLFdBQ0F6WixFQUFBWSxNQUFBTSxLQUFBLFNBQUE2VyxFQUFBMkIsR0FFQSxJQUFBQyxFQUFBRCxFQUFBRSxRQUFBQyxRQUNBQyxFQUFBSCxFQUFBak4sT0FBQWlOLEVBQUE1VixNQUFBLElBQ0EvRCxFQUFBMFosR0FBQXJZLFNBQUFXLFNBQUEsK0JBQ0FoQyxFQUFBMFosR0FBQXJZLFNBQUF1QyxJQUFBLGlCQUFBa1csRUFBQSxTQUtBOVosRUFBQSxTQUFBa0IsS0FBQSxTQUFBNlcsRUFBQWdDLEdBQ0EsR0FBQS9aLEVBQUFZLE1BQUFMLEtBQUEseUJBQUEsQ0FFQSxJQUFBeVosRUFBQWhhLEVBQUFZLE1BQUFMLEtBQUEseUJBQ0FQLEVBQUFZLE1BQUF1RyxRQUFBLHNCQUFBa0YsT0FBQSxvREFBQTBMLEVBQUEsNENBQUFpQyxFQUFBLHFIQUdBaGEsRUFBQVksTUFBQUMsTUFBQSxTQUFBb1osR0FDQUEsRUFBQTFZLGlCQUNBdkIsRUFBQVksTUFBQXVHLFFBQUEsc0JBQUFOLEtBQUEsdUJBQUFrUixHQUFBL1YsU0FBQSxXQUFBRCxXQU1BL0IsRUFBQVksTUFBQUwsS0FBQSxtQkFHQVAsRUFBQVksTUFBQUMsTUFBQSxTQUFBb1osR0FDQUEsRUFBQTFZLGlCQUNBLElBQUEyWSxFQUFBbGEsRUFBQVksTUFBQUwsS0FBQSxrQkFDQTRaLEVBQUFuYSxFQUFBLHVCQUFBa2EsRUFBQSxNQUNBbGEsRUFBQVksTUFBQXVHLFFBQUEsc0JBQUFOLEtBQUEsdUJBQUFsRixVQUNBd1ksRUFBQXBZLGFBUUEvQixFQUFBLDRCQUFBYSxNQUFBLFNBQUFvWixHQUNBQSxFQUFBMVksaUJBQ0F2QixFQUFBWSxNQUFBdUcsUUFBQSxzQkFBQWxGLFlBQUEsV0FBQU4sWUFJQTNCLEVBQUEsdUJBQUFhLE1BQUEsV0FDQWIsRUFBQVksTUFBQXdMLFdBNURBLENBaUVBdEwsUUN6Q0EsU0FBQWQsR0FFQUEsRUFBQVEsVUFBQU8sTUFBQSxjQUZBLENBOENBRCxRQ3RFQSxTQUFBZCxHQU1BQSxFQUFBUSxVQUFBTyxNQUFBLFdBSUEsSUFXQWEsRUErQkEsU0FBQXdZLEVBQUFoWSxHQUlBLElBSEFwQyxFQUFBb0MsR0FBQXlFLEtBQUEsU0FBQStQLE9BS0E1VyxFQUFBb0MsR0FBQXlFLEtBQUEsY0FBQTdFLFNBQUEsU0FyQ0FKLEVBWEEsQ0FDQSxtQkFZQTVCLEVBQUFrQixLQUFBVSxFQUFBLFNBQUFPLEVBQUFDLEdBRUEsSUFBQWlZLEVBQUFyYSxFQUFBb0MsR0FBQW5CLE9BRUEsR0FBQW9aLElBTUFELEVBQUFoWSxHQUtBcEMsRUFBQW9DLEdBQUF5RSxLQUFBLFNBQUE2UixRQUFBLFdBQ0ExWSxFQUFBb0MsR0FBQXlFLEtBQUEsY0FBQTVFLFlBQUEsV0FJQWpDLEVBQUFvQyxHQUFBeUUsS0FBQSxTQUFBOFIsU0FBQSxXQUNBeUIsRUFBQWhZLFVBNUNBLENBcUVBdEIsUUNyRUEsU0FBQWQsR0FNQUEsRUFBQVEsVUFBQU8sTUFBQSxXQVNBLFNBQUF1WixJQUNBdGEsRUFBQSxnQkFBQWtCLEtBQUEsU0FBQTZXLEVBQUEyQixHQUVBMVosRUFBQTBaLEdBQUFyWSxTQUFBWSxZQUFBLFlBQUExQixLQUFBLFFBQUEsSUFDQVAsRUFBQTBaLEdBQUFuTixTQUFBLG1CQUFBcUYsU0FHQSxJQUFBMkksRUFBQXZhLEVBQUEwWixHQUFBYyxrQkFHQTlOLEVBQUExTSxFQUFBMFosR0FBQWhOLFNBQ0EzSSxFQUFBL0QsRUFBQTBaLEdBQUEzVixRQUNBMFcsRUFBQXphLEVBQUEwWixHQUFBM0osU0FBQSxTQUFBaE0sUUFDQTJXLEVBQUExYSxFQUFBc0MsUUFBQXlCLFFBQ0E0VyxFQUFBRixFQUFBLEVBR0FDLEdBQUFDLElBQ0FBLEVBQUFELEVBQUEsSUFJQSxJQUFBRSxFQUFBLEVBRUEsR0FBQSxNQUFBRCxFQUlBQyxFQUFBLEdBRkFBLEdBQUFELEVBQUEsTUFBQSxHQVVBLElBTEFBLEVBQUEsTUFBQTVXLEVBQUEsUUFDQTRXLEVBQUE1VyxHQUlBLEdBQUF3VyxFQVlBLEdBVEEsTUFBQUksR0FDQTNhLEVBQUEwWixHQUFBclksU0FBQVcsU0FBQSxZQUFBNEIsSUFBQSxDQUNBOEksT0FBQUEsRUFBQSxFQUNBM0ksTUFBQTRXLEVBQ0FDLEtBQUFBLElBS0FELEVBQUEsR0FBQUYsRUFBQSxDQUNBemEsRUFBQTBaLEdBQUF4UyxNQUFBLG9GQUdBbEgsRUFBQTBaLEdBQUFyWSxTQUFBd1osT0FBQSxXQURBLEVBRUE3YSxFQUFBMFosR0FBQXJZLFNBQUFnSSxjQUVBckosRUFBQTBaLEdBQUFuTixTQUFBLG1CQUFBSCxjQUlBcE0sRUFBQTBaLEdBQUFyWSxPQUFBLGtCQUFBdUMsSUFBQSxXQUFBLGFBakVBNUQsRUFBQSxTQUFBeVosS0FBQSxZQUFBLFdBQ0F6WixFQUFBWSxNQUFBTSxLQUFBLFNBQUE2VyxFQUFBMkIsR0FDQTFaLEVBQUEwWixHQUFBMU0sS0FBQSx3RUFzRUFoTixFQUFBMk4sR0FBQTZNLGdCQUFBLFdBQUEsSUFBQTlaLEVBQUFFLEtBQUEsR0FBQSxPQUFBRixFQUFBNEksWUFBQTVJLEVBQUFvYSxhQUVBOWEsRUFBQXNDLFFBQUFDLEtBQUEsV0FDQStYLE1BR0F0YSxFQUFBc0MsUUFBQXdCLE9BQUEsV0FDQXdXLFFBeEZBLENBOEZBeFosUUNsRkEsU0FBQWQsR0FJQUEsRUFBQVEsVUFBQU8sTUFBQSxXQUdBLEdBQUFmLEVBQUEsOEJBQUE2RyxLQUFBLHdCQUFBNUYsUUFBQSxHQUFBakIsRUFBQSw4QkFBQTZHLEtBQUEsNEJBQUE1RixRQUVBakIsRUFBQSx1RUFBQXFNLE9BQUEsUUFVQXJNLEVBQUFRLFVBQUFPLE1BQUEsV0FFQWYsRUFBQSx1QkFBQWEsTUFBQSxTQUFBSCxHQUNBQSxFQUFBYSxxQkFlQXZCLEVBQUFRLFVBQUFPLE1BQUEsV0FHQWYsRUFBQSx1Q0FBQU8sS0FBQSxPQUFBLG9CQUFBQSxLQUFBLEtBQUEsb0JBQUF1TixPQUFBLCtFQVdBOU4sRUFBQVEsVUFBQU8sTUFBQSxXQUdBZixFQUFBLG9EQUFBaUMsWUFBQSxlQVNBakMsRUFBQVEsVUFBQU8sTUFBQSxXQUNBZixFQUFBLGlCQUFBcU0sT0FBQSxpQkFDQXJNLEVBQUEsaUJBQUFPLEtBQUEsUUFBQSxpQkFFQVAsRUFBQSxhQUFBcU0sT0FBQSxpQkFDQXJNLEVBQUEsYUFBQU8sS0FBQSxRQUFBLGFBRUFQLEVBQUEsa0JBQUFxTSxPQUFBLHNCQUNBck0sRUFBQSxrQkFBQU8sS0FBQSxRQUFBLGVBUUFQLEVBQUFRLFVBQUFPLE1BQUEsV0FDQWYsRUFBQSxRQUFBaUMsWUFBQSxTQUFBRCxTQUFBLFFBaEZBLENBcUZBbEIsUUMvRkEsU0FBQWQsR0FFQUEsRUFBQVEsVUFBQU8sTUFBQSxXQUVBZixFQUFBLHVDQUFBYSxNQUFBLFdBRUEsR0FBQWthLFNBQUFDLFNBQUEvTyxRQUFBLE1BQUEsS0FBQXJMLEtBQUFvYSxTQUFBL08sUUFBQSxNQUFBLEtBQ0E4TyxTQUFBRSxVQUFBcmEsS0FBQXFhLFNBQ0EsQ0FFQSxJQUFBMU0sRUFBQXZPLEVBQUFZLEtBQUFzYSxNQUVBQyxFQUFBLEVBWUEsR0FWQW5iLEVBQUEsUUFBQThCLFNBQUEsMkJBQ0FxWixHQUFBLElBR0FuYixFQUFBLFFBQUE4QixTQUFBLDhCQUNBcVosR0FBQSxLQUdBNU0sRUFBQUEsRUFBQXROLE9BQUFzTixFQUFBdk8sRUFBQSxTQUFBWSxLQUFBc2EsS0FBQUUsTUFBQSxHQUFBLE1BRUFuYSxPQUtBLE9BSEFqQixFQUFBLGFBQUFxYixRQUFBLENBQ0FDLFVBQUEvTSxFQUFBVixTQUFBME4sSUFBQUosR0FDQSxNQUNBLE9BUUFuYixFQUFBc0MsUUFBQXVZLE9BQUEsV0FFQSxJQUFBQSxFQUFBN2EsRUFBQXNDLFFBQUFnWixZQUdBLEtBQUFULEdBQ0E3YSxFQUFBLFFBQUFnQyxTQUFBLGVBRUE2WSxFQUFBLEtBQ0E3YSxFQUFBLFFBQUFpQyxZQUFBLGlCQTlDQSxDQWtEQW5CLFFDcERBLFNBQUFkLEdBSUFDLE9BQUFDLFVBQUFzYixJQUFBLENBQ0FwYixPQUFBLFNBQUFDLEVBQUFDLEdBSUFOLEVBQUEsZ0NBQUF5YixJQUFBLGdGQUFBQyxZQUFBLENBQ0FDLFlBQUEsa0JBQ0FDLEtBQUEsT0FRQTViLEVBQUFzQyxRQUFBQyxLQUFBLFdBQ0EsSUFBQXNaLEVBQUE3YixFQUFBLDhEQUFBK0QsUUFFQS9ELEVBQUEsMkNBQUE0RCxJQUFBLFFBQUFpWSxFQUFBLEdBQUEsTUFDQTdiLEVBQUEsaURBQUE0RCxJQUFBLFFBQUFpWSxFQUFBLEdBQUEsUUFHQTdiLEVBQUFzQyxRQUFBd0IsT0FBQSxXQUNBLElBQUErWCxFQUFBN2IsRUFBQSw4REFBQStELFFBRUEvRCxFQUFBLDJDQUFBNEQsSUFBQSxRQUFBaVksRUFBQSxHQUFBLE1BQ0E3YixFQUFBLGlEQUFBNEQsSUFBQSxRQUFBaVksRUFBQSxHQUFBLFFBOUJBLENBa0NBL2EsUUNuQkEsU0FBQXNELEdBQUEsYUFBQUEsRUFBQXVKLEdBQUErTixZQUFBLFNBQUFyWCxHQUFBLElBQUFTLEVBQUFRLEVBQUFoQixFQUFBLENBQUF3WCxTQUFBLEtBQUFILFlBQUEsR0FBQW5GLFlBQUEsS0FBQXVGLG1CQUFBLEVBQUFDLE9BQUEsS0FBQUMsT0FBQSxFQUFBQyxZQUFBLEVBQUFDLE9BQUEsRUFBQUMsZUFBQSxFQUFBUixLQUFBLEVBQUFTLFNBQUEsRUFBQUMsU0FBQWxZLEVBQUFtWSxNQUFBaFksRUFBQSxHQUFBN0QsR0FBQSxFQUFBMEYsRUFBQSxDQUFBb1csUUFBQSxTQUFBblksR0FBQSxPQUFBRSxFQUFBSCxFQUFBOEssT0FBQSxHQUFBNUssRUFBQUQsR0FBQXpELEtBQUFNLEtBQUEsV0FBQSxHQUFBa0QsRUFBQXhELE1BQUFTLFNBQUFTLFNBQUEsY0FBQWdULFFBQUFDLElBQUEsMkRBQUEsQ0FBQSxJQUFBN00sRUFBQUQsRUFBQW9ELEVBQUFoSCxFQUFBRCxFQUFBeEQsTUFBQTBELEVBQUFELEVBQUFzSSxLQUFBLGFBQUF0SSxFQUFBc0ksS0FBQSxhQUFBcEksRUFBQXVYLFNBQUFwYixFQUFBMkQsRUFBQXNJLEtBQUEsZ0JBQUF0SSxFQUFBc0ksS0FBQSxnQkFBQXBJLEVBQUFvWCxZQUFBN1csRUFBQVQsRUFBQXNJLEtBQUEsVUFBQXRJLEVBQUFzSSxLQUFBLFVBQUFwSSxFQUFBeVgsT0FBQTFXLEVBQUFqQixFQUFBc0ksS0FBQSxlQUFBdEksRUFBQXNJLEtBQUEsZUFBQXBJLEVBQUFpUyxZQUFBblEsRUFBQWhDLEVBQUFzSSxLQUFBLHNCQUFBdEksRUFBQXNJLEtBQUEsc0JBQUFwSSxFQUFBd1gsa0JBQUFVLEVBQUFwWSxFQUFBc0ksS0FBQSxTQUFBdEksRUFBQXNJLEtBQUEsU0FBQXBJLEVBQUEwWCxNQUFBelQsRUFBQW5FLEVBQUFzSSxLQUFBLFNBQUF0SSxFQUFBc0ksS0FBQSxTQUFBcEksRUFBQTRYLE1BQUExVCxFQUFBcEUsRUFBQXNJLEtBQUEsa0JBQUF0SSxFQUFBc0ksS0FBQSxrQkFBQXBJLEVBQUE2WCxjQUFBNVUsRUFBQXdELFNBQUEzRyxFQUFBc0ksS0FBQSxTQUFBdEksRUFBQXNJLEtBQUEsUUFBQXBJLEVBQUFxWCxLQUFBbFUsRUFBQXNELFNBQUEzRyxFQUFBc0ksS0FBQSxhQUFBdEksRUFBQXNJLEtBQUEsWUFBQXBJLEVBQUE4WCxTQUFBOVgsRUFBQThYLFNBQUFoWSxFQUFBOUQsS0FBQSxZQUFBOEQsRUFBQTlELEtBQUEsWUFBQWdFLEVBQUE4WCxTQUFBSyxFQUFBclksRUFBQXNJLEtBQUEsZUFBQXRJLEVBQUFzSSxLQUFBLGVBQUFwSSxFQUFBMlgsV0FBQXZVLEVBQUF0RCxFQUFBc1ksS0FBQSxTQUFBdFksRUFBQXNZLEtBQUEsU0FBQSxLQUFBL1UsRUFBQXZELEVBQUF3TixHQUFBLGFBQUEsWUFBQSxHQUFBN0osRUFBQSxHQUFBNFUsRUFBQSxHQUFBMVQsRUFBQSxFQUFBcEUsSUFBQWtELEVBQUEsNEJBQUFsRCxFQUFBLFlBQUFvRCxFQUFBOUQsRUFBQSxVQUFBLENBQUFnUCxHQUFBOU8sRUFBQXVZLE1BQUEsY0FBQW5jLEVBQUFrSCxFQUFBNFEsTUFBQTdRLEVBQUFtVixTQUFBcFYsRUFBQXRHLEtBQUF3YixHQUFBdFgsSUFBQVIsRUFBQSwyQ0FBQVEsRUFBQSxVQUFBLDJCQUFBMEMsRUFBQSxVQUFBK1UsYUFBQU4sRUFBQU8sYUFBQXhVLEVBQUF5VSxzQkFBQXhVLEVBQUF5VSxtQkFBQTVYLEVBQUE2WCwwQkFBQTlXLEVBQUErVyxjQUFBdFksRUFBQXVZLGNBQUEsS0FBQXBFLFlBQUFyWSxNQUFBd0YsRUFBQWtYLFdBQUFwVixFQUFBbEcsU0FBQSxTQUFBaUcsRUFBQTdELEVBQUEsVUFBQSxDQUFBeVksTUFBQSxxQkFBQVUsU0FBQXJWLEdBQUFtRCxFQUFBakgsRUFBQSxVQUFBLENBQUF5WSxNQUFBLGFBQUFVLFNBQUF0VixHQUFBN0QsRUFBQSxtQkFBQUMsR0FBQW5ELEtBQUEsU0FBQW1ELEdBQUEsSUFBQUMsRUFBQUYsRUFBQXhELE1BQUE4YixJQUFBdFksRUFBQWtSLEtBQUFoUixFQUFBK0MsUUFBQS9DLEVBQUFzTixTQUFBLElBQUF2TixHQUFBZ0MsSUFBQTJCLEVBQUE1QixFQUFBb1gsWUFBQWxaLEVBQUErRyxFQUFBbkQsR0FBQSxHQUFBOUIsRUFBQW9YLFlBQUFsWixFQUFBK0csRUFBQW5ELEdBQUEsS0FBQVYsSUFBQVMsRUFBQXdWLE9BQUFyWixFQUFBLGtCQUFBb0QsRUFBQSxJQUFBNkQsR0FBQW5LLEtBQUEsV0FBQWdJLEdBQUE5RSxFQUFBeEQsTUFBQTJDLGdCQUFBMEUsRUFBQWlGLFdBQUEsU0FBQTdCLEVBQUF6SCxJQUFBLENBQUE4WixhQUFBeFUsS0FBQTdFLEVBQUFrWixTQUFBclYsR0FBQUEsRUFBQXpILEdBQUEsVUFBQTJGLEVBQUF1WCxVQUFBbGQsR0FBQSxRQUFBMkYsRUFBQXdYLFlBQUFuZCxHQUFBLFFBQUEsY0FBQTJGLEVBQUF5WCxhQUFBcGQsR0FBQSxZQUFBLGNBQUEyRixFQUFBMFgsYUFBQXJkLEdBQUEsVUFBQTJGLEVBQUEyWCxhQUFBMVosRUFBQTVELEdBQUEsU0FBQTJGLEVBQUE0WCxjQUFBNVosRUFBQTVELFVBQUFDLEdBQUEsUUFBQSxjQUFBNEQsRUFBQTlELEtBQUEsTUFBQSxLQUFBLFNBQUE2RCxHQUFBQSxFQUFBN0MsaUJBQUEyRyxFQUFBcU8sY0FBQWlILFlBQUEsU0FBQW5aLEVBQUFDLEVBQUFDLEVBQUE3RCxHQUFBLElBQUFvRSxFQUFBUCxFQUFBb0ksS0FBQSxlQUFBckgsRUFBQWYsRUFBQW9JLEtBQUEsc0JBQUF2RyxFQUFBN0IsRUFBQW9JLEtBQUEsVUFBQXRHLEVBQUE5QixFQUFBc0MsS0FBQSxjQUFBNFYsRUFBQXBZLEVBQUFoRCxTQUFBbUgsRUFBQW5FLEVBQUFnRCxPQUFBb0IsRUFBQXBFLEVBQUF1UyxNQUFBcFAsRUFBQW5ELEVBQUFzSSxLQUFBLGFBQUF0SSxFQUFBc0ksS0FBQSxhQUFBLEtBQUFqRixFQUFBckQsRUFBQXNJLEtBQUEsZ0JBQUF0SSxFQUFBc0ksS0FBQSxnQkFBQSxHQUFBK1AsRUFBQXJZLEVBQUF3TixHQUFBLGFBQUEsYUFBQSxHQUFBbEssRUFBQXRELEVBQUF3TixHQUFBLGFBQUEsb0JBQUEsR0FBQWpLLEVBQUF2RCxFQUFBc0ksS0FBQSxRQUFBLFNBQUEsR0FBQTNFLEVBQUEzRCxFQUFBc0ksS0FBQSxpQkFBQSxnQkFBQSxHQUFBaVEsRUFBQXZZLEVBQUFzWSxLQUFBLFNBQUF0WSxFQUFBd04sR0FBQSxXQUFBek4sRUFBQSxVQUFBLENBQUF5WSxNQUFBLGNBQUFuVixFQUFBZ1YsRUFBQS9VLEVBQUFDLEVBQUFJLEVBQUFvTCxHQUFBNUwsRUFBQWdSLE1BQUFoUSxFQUFBcEgsS0FBQW9ILEVBQUF5VixhQUFBeFYsSUFBQThVLFNBQUFqWixHQUFBNUQsSUFBQTBGLEdBQUE3QixFQUFBb0ksS0FBQSxRQUFBbkUsR0FBQWpFLEVBQUFvSSxLQUFBLGNBQUFuRSxHQUFBbkUsRUFBQXNZLEtBQUEsWUFBQSxHQUFBclksRUFBQXVDLEtBQUEsb0JBQUE3RSxTQUFBLDJCQUFBMkYsR0FBQXRCLEVBQUFyRSxTQUFBLG9CQUFBMkYsR0FBQTdDLElBQUFRLElBQUFjLEVBQUE3QixFQUFBb0ksS0FBQSxRQUFBN0gsR0FBQTZDLEdBQUFwRCxFQUFBb0ksS0FBQSxRQUFBbkUsSUFBQWIsSUFBQTdDLEdBQUE2QyxHQUFBckMsR0FBQXFDLEdBQUF2QixJQUFBQyxFQUFBZ0csT0FBQTdELEdBQUFpVSxFQUFBNUssR0FBQSxjQUFBdk4sRUFBQXVDLEtBQUEsb0JBQUE3RSxTQUFBLGNBQUF5YSxFQUFBNUssR0FBQSxjQUFBdk4sRUFBQXVDLEtBQUEsb0JBQUE3RSxTQUFBLGNBQUFvQyxFQUFBLFVBQUEsQ0FBQXlZLE1BQUEsdUJBQUFILEVBQUFsRSxNQUFBb0UsRUFBQXhiLEtBQUF3YixFQUFBc0IsYUFBQXRCLElBQUFXLFNBQUFqWixJQUFBcVosU0FBQSxXQUFBLElBQUF0WixFQUFBRCxFQUFBeEQsTUFBQXlELEVBQUF2QyxTQUFBLFlBQUFzRSxFQUFBK1gsUUFBQTlaLElBQUErQixFQUFBK1gsUUFBQS9aLEVBQUEscUJBQUFxWCxJQUFBcFgsSUFBQUEsRUFBQXJDLFNBQUEsU0FBQW9DLEVBQUEsUUFBQTNELEdBQUEsZ0JBQUEsV0FBQTJGLEVBQUErWCxRQUFBOVosT0FBQXVaLFdBQUEsU0FBQXZaLEdBQUFBLEVBQUErWixrQkFBQSxJQUFBOVosRUFBQUYsRUFBQXhELE1BQUEyRCxFQUFBRCxFQUFBdUMsS0FBQSxhQUFBbkcsRUFBQTRELEVBQUFxSSxLQUFBLGVBQUE3SCxFQUFBUixFQUFBdUMsS0FBQSxXQUFBUixFQUFBL0IsRUFBQXVDLEtBQUEsYUFBQXZDLEVBQUF4QyxTQUFBLGFBQUF3QyxFQUFBeEMsU0FBQSxTQUFBd0MsRUFBQXhDLFNBQUEsVUFBQXNKLGFBQUE5RixHQUFBaEIsRUFBQXJDLFlBQUEsUUFBQXZCLElBQUE0RCxFQUFBdUMsS0FBQSxjQUFBNkssSUFBQSxHQUFBMk0sVUFBQXBOLFVBQUFuTSxFQUFBdUMsVUFBQS9DLEVBQUF0QyxTQUFBLFFBQUF0QixJQUFBNEQsRUFBQXFJLEtBQUEsV0FBQXJJLEVBQUF1QyxLQUFBLGNBQUE3RSxTQUFBLG1CQUFBWixLQUFBVixHQUFBMEYsRUFBQWtZLFdBQUEvWixFQUFBOEIsR0FBQUQsRUFBQW1ZLGNBQUFqYSxFQUFBQyxLQUFBd1osWUFBQSxTQUFBMVosR0FBQSxJQUFBb0UsRUFBQWpCLEVBQUFFLEVBQUFwRCxFQUFBRixFQUFBeEQsTUFBQTJELEVBQUFELEVBQUF1QyxLQUFBLGFBQUF2QixFQUFBaEIsRUFBQXVDLEtBQUEsZUFBQVIsRUFBQS9CLEVBQUF1QyxLQUFBLGNBQUE0VixFQUFBblksRUFBQXFJLEtBQUEsU0FBQW5FLEVBQUFsRCxFQUFBa1osT0FBQSxXQUFBLE9BQUEsR0FBQW5hLEVBQUExRCxPQUFBMEQsRUFBQTFELE1BQUEsSUFBQSxLQUFBMEQsRUFBQTFELE9BQUEsS0FBQTBELEVBQUExRCxPQUFBNkcsRUFBQWdCLEVBQUFpVyxRQUFBLGdDQUFBdFMsUUFBQXpFLEVBQUFwQyxFQUFBbVcsSUFBQSx3QkFBQTdHLFNBQUEsS0FBQXZRLEVBQUExRCxPQUFBLEtBQUEwRCxFQUFBMUQsU0FBQTZHLEVBQUFnQixFQUFBMFEsUUFBQSxnQ0FBQS9NLFFBQUF6RSxFQUFBcEMsRUFBQW1XLElBQUEsd0JBQUF0UCxVQUFBM0UsRUFBQTFGLFNBQUEsZUFBQTJhLElBQUFqVixFQUFBRSxJQUFBRixFQUFBMUYsU0FBQSxlQUFBMmEsS0FBQWpVLEVBQUF2RyxZQUFBLFVBQUF1RixFQUFBeEYsU0FBQSxVQUFBcUUsRUFBQXFMLElBQUEsR0FBQTJNLFVBQUFwTixVQUFBekosRUFBQUgsT0FBQWpCLEVBQUFrWSxXQUFBL1osRUFBQWlELEdBQUFsRCxFQUFBeEMsU0FBQSxVQUFBcEIsR0FBQSxLQUFBLElBQUEsS0FBQTJELEVBQUExRCxPQUFBLEtBQUEwRCxFQUFBMUQsT0FBQTJELEVBQUF4QyxTQUFBLFVBQUEsTUFBQXdDLEVBQUFxSSxLQUFBLFVBQUEsSUFBQSxLQUFBckksRUFBQXFJLEtBQUEsWUFBQXRJLEVBQUE5QyxpQkFBQWlILEVBQUEzSCxTQUFBLEtBQUF3RCxFQUFBMUQsT0FBQTJELEVBQUF4QyxTQUFBLFNBQUEsTUFBQXdDLEVBQUFxSSxLQUFBLFVBQUEsSUFBQSxLQUFBckksRUFBQXFJLEtBQUEsVUFBQSxLQUFBdEksRUFBQTFELE9BQUF5RixFQUFBK1gsUUFBQTdaLElBQUFELEVBQUE5QyxpQkFBQWIsR0FBQSxFQUFBNEQsRUFBQXpELGNBQUEsSUFBQXdELEVBQUExRCxRQUFBeUssYUFBQXRHLEdBQUFSLEVBQUFxSSxLQUFBLFNBQUFySSxFQUFBcUksS0FBQSxVQUFBK1IsT0FBQUMsYUFBQXRhLEVBQUExRCxTQUFBOEgsRUFBQW5ELEVBQUFrWixPQUFBLFdBQUEsT0FBQSxJQUFBcGEsRUFBQXhELE1BQUF5RyxPQUFBa08sY0FBQWxFLFFBQUEvTSxFQUFBcUksS0FBQSxVQUFBNEksaUJBQUFrRyxJQUFBLHdCQUFBdFAsU0FBQWxMLFNBQUF1SCxFQUFBdkcsWUFBQSxVQUFBd0csRUFBQXpHLFNBQUEsVUFBQW9FLEVBQUFrWSxXQUFBL1osRUFBQWtFLEdBQUFwQyxFQUFBcUwsSUFBQSxHQUFBMk0sVUFBQXBOLFVBQUF4SSxFQUFBcEIsT0FBQS9DLEVBQUF4QyxTQUFBLFVBQUFwQixHQUFBLElBQUFvRSxFQUFBeEQsV0FBQSxXQUFBZ0QsRUFBQXFJLEtBQUEsU0FBQSxLQUFBLFNBQUFtUixZQUFBLFdBQUEsSUFBQXpaLEVBQUFELEVBQUF4RCxNQUFBeUQsRUFBQXZDLFNBQUEsYUFBQXVDLEVBQUF2QyxTQUFBLGFBQUF1QyxFQUFBa0ksV0FBQXRLLFlBQUEsVUFBQTJjLE1BQUE1YyxTQUFBLFdBQUE2YixZQUFBLFNBQUF4WixHQUFBQSxFQUFBK1osa0JBQUEsSUFBQTlaLEVBQUFGLEVBQUF4RCxNQUFBMkQsRUFBQUQsRUFBQTZDLFFBQUEsZUFBQXpHLEVBQUE0RCxFQUFBeEMsU0FBQSxZQUFBZ0QsRUFBQVIsRUFBQXhDLFNBQUEsWUFBQXNFLEVBQUE3QixFQUFBc0MsS0FBQSxnQ0FBQWtSLE1BQUFuWCxNQUFBMkQsRUFBQXpDLFNBQUEsV0FBQXBCLEdBQUFvRSxJQUFBUCxFQUFBc0MsS0FBQSwrQkFBQTVFLFlBQUEsNEJBQUFxQyxFQUFBdEMsU0FBQSxZQUFBdUMsRUFBQXNDLEtBQUEsaUJBQUFULEdBQUF5WSxVQUFBLEVBQUF0YSxFQUFBc0MsS0FBQSxVQUFBaVksVUFBQTFULGFBQUE5RixHQUFBZixFQUFBdEMsWUFBQSxVQUFBK2IsYUFBQSxXQUFBLElBQUEzWixFQUFBRCxFQUFBeEQsTUFBQTBELEVBQUFELEVBQUF3QyxLQUFBLGFBQUFuRyxFQUFBNEQsRUFBQStDLE9BQUF2QyxFQUFBVCxFQUFBOEMsUUFBQSxlQUFBckMsRUFBQStCLEtBQUEsY0FBQTZLLElBQUEsR0FBQTJNLFVBQUFwTixVQUFBdlEsRUFBQW9FLEVBQUE2SCxLQUFBLFFBQUFqTSxHQUFBNkQsRUFBQStYLFNBQUF2VSxLQUFBbkgsT0FBQWtFLEVBQUE2SCxLQUFBLFdBQUFySSxFQUFBcUksS0FBQSxTQUFBckksRUFBQXFJLEtBQUEsa0JBQUE3SCxFQUFBNkgsS0FBQSxtQkFBQXJJLEVBQUFxSSxLQUFBLG1CQUFBckssT0FBQXljLEtBQUF6YSxFQUFBc1MsTUFBQSxVQUFBdFUsT0FBQXlZLFNBQUFpRSxLQUFBMWEsRUFBQXNTLE9BQUF1SCxRQUFBLFNBQUE5WixHQUFBLEdBQUFELEVBQUEsUUFBQXlDLEtBQUF4QyxHQUFBcEQsT0FBQSxDQUFBLElBQUFxRCxFQUFBRCxFQUFBc0ksS0FBQSxTQUFBcEksRUFBQUYsRUFBQXNJLEtBQUEsZUFBQTdILEVBQUFULEVBQUF3QyxLQUFBLFdBQUFULEVBQUEvQixFQUFBd0MsS0FBQSxhQUFBUixHQUFBLEVBQUErRSxhQUFBOUYsR0FBQTVFLElBQUFvRSxFQUFBaEQsU0FBQSxhQUFBZ0QsRUFBQWpFLFFBQUF3RixHQUFBLEdBQUF2QixFQUFBaEQsU0FBQSxjQUFBZ0QsRUFBQTdDLFlBQUEsVUFBQW1FLEVBQUFwRSxTQUFBLFlBQUFxRSxHQUFBOUIsRUFBQUYsRUFBQXdDLEtBQUEsY0FBQTZLLElBQUEsR0FBQTJNLFVBQUFwTixVQUFBN0ssRUFBQWlCLE9BQUFoQixJQUFBaEMsRUFBQXdDLEtBQUEsY0FBQTZLLElBQUEsR0FBQTJNLFVBQUFwTixVQUFBM00sR0FBQTVELEdBQUEsRUFBQTJELEVBQUFwQyxZQUFBLGNBQUFvQyxFQUFBd1MsT0FBQXpTLEVBQUEsUUFBQXlCLElBQUEsY0FBQTBZLGNBQUEsU0FBQWxhLEVBQUFDLEdBQUEsSUFBQUMsRUFBQUYsRUFBQSxHQUFBNGEsd0JBQUF2ZSxFQUFBNEQsRUFBQWYsY0FBQWdCLEVBQUEyYSxPQUFBeGUsRUFBQSxHQUFBMEQsRUFBQTlCLFFBQUFvSyxVQUFBLEdBQUFuSSxFQUFBZ1gsSUFBQTdhLEVBQUEyRCxFQUFBckMsU0FBQSxTQUFBcUMsRUFBQXBDLFlBQUEsU0FBQXFELEVBQUFoRSxXQUFBLFdBQUE4RSxFQUFBbVksY0FBQWxhLEVBQUFDLElBQUEsTUFBQWdhLFdBQUEsU0FBQWxhLEVBQUFDLEdBQUEsSUFBQUMsRUFBQUYsRUFBQSxHQUFBNmEsd0JBQUExYSxFQUFBRixFQUFBLEdBQUE0YSx3QkFBQTNhLEVBQUFpWCxJQUFBaFgsRUFBQWdYLElBQUFuWCxFQUFBa1gsVUFBQWxYLEVBQUFrWCxZQUFBaFgsRUFBQWlYLElBQUFoWCxFQUFBZ1gsS0FBQWpYLEVBQUE0YSxPQUFBM2EsRUFBQTJhLFFBQUE5YSxFQUFBa1gsVUFBQWxYLEVBQUFrWCxZQUFBaFgsRUFBQTRhLE9BQUEzYSxFQUFBMmEsU0FBQTVCLFFBQUEsV0FBQSxNQUFBLGlCQUFBaGIsUUFBQSxFQUFBc0ksVUFBQXVVLGdCQUFBLEVBQUF2VSxVQUFBd1UsbUJBQUEvWSxFQUFBLENBQUF0RCxRQUFBLFdBQUEsT0FBQW5DLEtBQUFNLEtBQUEsV0FBQSxJQUFBbUQsRUFBQUQsRUFBQXhELE1BQUEwRCxFQUFBRCxFQUFBaEQsU0FBQWlELEVBQUF4QyxTQUFBLGVBQUF1QyxFQUFBd0IsSUFBQSxVQUFBdkIsRUFBQXVDLEtBQUEsUUFBQStLLFNBQUF2TixFQUFBZ2IsVUFBQXZLLFFBQUFDLElBQUEsK0NBQUF1SyxPQUFBLFdBQUEsT0FBQTFlLEtBQUFNLEtBQUEsV0FBQSxJQUFBbUQsRUFBQUQsRUFBQXhELE1BQUEwRCxFQUFBRCxFQUFBaEQsU0FBQWtELEVBQUFELEVBQUF1QyxLQUFBLG1CQUFBdkMsRUFBQXhDLFNBQUEsZUFBQXlDLEVBQUF1TCxRQUFBeEwsRUFBQXVDLEtBQUEsY0FBQTZLLElBQUEsR0FBQTJNLFVBQUFwTixVQUFBLEdBQUE1TSxFQUFBd04sR0FBQSxjQUFBdk4sRUFBQXRDLFNBQUEsWUFBQW9DLEVBQUEsbUJBQUFDLEdBQUFuRCxLQUFBLFdBQUFrRixFQUFBb1gsWUFBQXBaLEVBQUF4RCxNQUFBMkQsRUFBQUQsTUFBQXdRLFFBQUFDLElBQUEsOENBQUF3SyxRQUFBLFNBQUFsYixHQUFBLE9BQUF6RCxLQUFBTSxLQUFBLFdBQUEsSUFBQW9ELEVBQUFGLEVBQUF4RCxNQUFBMkQsRUFBQUQsRUFBQWpELFNBQUFrRCxFQUFBekMsU0FBQSxtQkFBQSxJQUFBdUMsR0FBQUUsRUFBQXNDLEtBQUEsMkNBQUF4QyxFQUFBLE1BQUFyQyxTQUFBLFlBQUF1QyxFQUFBc0MsS0FBQSwyQ0FBQXhDLEVBQUEsTUFBQW1iLFVBQUEscUJBQUF4ZCxTQUFBLFlBQUFvQyxFQUFBLGlCQUFBQyxFQUFBLHVCQUFBQSxFQUFBLEtBQUF6RCxNQUFBK2IsS0FBQSxZQUFBLElBQUFwWSxFQUFBekMsU0FBQSxnQkFBQXlDLEVBQUF2QyxTQUFBLFlBQUFzQyxFQUFBcVksS0FBQSxZQUFBLElBQUE3SCxRQUFBQyxJQUFBLCtDQUFBMEssT0FBQSxTQUFBcGIsR0FBQSxPQUFBekQsS0FBQU0sS0FBQSxXQUFBLElBQUFvRCxFQUFBRixFQUFBeEQsTUFBQTJELEVBQUFELEVBQUFqRCxTQUFBa0QsRUFBQXpDLFNBQUEsbUJBQUEsSUFBQXVDLEdBQUFFLEVBQUFzQyxLQUFBLDJDQUFBeEMsRUFBQSxNQUFBcEMsWUFBQSxZQUFBc0MsRUFBQXNDLEtBQUEsMkNBQUF4QyxFQUFBLE1BQUFtYixVQUFBLHFCQUFBdmQsWUFBQSxZQUFBbUMsRUFBQSxpQkFBQUMsRUFBQSx1QkFBQUEsRUFBQSxLQUFBekQsTUFBQStiLEtBQUEsWUFBQSxJQUFBcFksRUFBQXpDLFNBQUEsZ0JBQUF5QyxFQUFBdEMsWUFBQSxZQUFBcUMsRUFBQXFZLEtBQUEsWUFBQSxJQUFBN0gsUUFBQUMsSUFBQSwrQ0FBQSxPQUFBMU8sRUFBQWhDLEdBQUFnQyxFQUFBaEMsR0FBQVYsTUFBQS9DLEtBQUE4ZSxNQUFBL1osVUFBQXlWLE1BQUFyVCxLQUFBNFgsVUFBQSxJQUFBLGlCQUFBdGIsR0FBQUEsT0FBQUQsRUFBQXdiLE1BQUEseUNBQUF2YixFQUFBLDBCQUFBK0IsRUFBQW9XLFFBQUE3WSxNQUFBL0MsS0FBQStlLFlBQUEsQ0FBQTdlLFFDZkEsU0FBQWQsR0FJQUEsRUFBQVEsVUFBQU8sTUFBQSxXQUVBZixFQUFBLDhCQUFBYSxNQUFBLFNBQUFILEdBQ0FBLEVBQUFhLGlCQUVBdkIsRUFBQVksTUFBQWtCLFNBQUEsWUFJQTlCLEVBQUEsa0JBQUEyQixRQUFBLElBQUEsV0FDQTNCLEVBQUEsb0JBQUErQixPQUFBLE9BR0EvQixFQUFBWSxNQUFBb0IsU0FBQSxVQUNBaEMsRUFBQSwwQkFBQWlDLFlBQUEsYUFRQWpDLEVBQUEsMEJBQUFhLE1BQUEsU0FBQUgsR0FDQUEsRUFBQWEsaUJBRUF2QixFQUFBWSxNQUFBa0IsU0FBQSxZQUlBOUIsRUFBQSxvQkFBQTJCLFFBQUEsSUFBQSxXQUNBM0IsRUFBQSxrQkFBQStCLE9BQUEsT0FHQS9CLEVBQUFZLE1BQUFvQixTQUFBLFVBQ0FoQyxFQUFBLDhCQUFBaUMsWUFBQSxlQXRDQSxDQWlEQW5CLFFDL0NBLFNBQUFkLEdBRUFBLEVBQUFRLFVBQUFPLE1BQUEsV0FFQWYsRUFBQSxvQkFBQWEsTUFBQSxXQUNBYixFQUFBLFFBQUFzTSxZQUFBLGFBR0F0TSxFQUFBLGdCQUFBYSxNQUFBLFdBQ0FiLEVBQUEsUUFBQWlDLFlBQUEsZUFUQSxDQWNBbkIiLCJmaWxlIjoic2NyaXB0cy5taW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xuICBEcnVwYWwuYmVoYXZpb3JzLmFjY2Vzc2libGVDb2xsYXBzZSA9IHtcbiAgICBhdHRhY2g6IGZ1bmN0aW9uIChjb250ZXh0LCBzZXR0aW5ncykge1xuXG4gICAgICAvL0ZvY3VzYWJsZSBjdG9vbHMgY29sbGFwc2libGUgaGFuZGxlXG5cbiAgICAgICQoJy5jdG9vbHMtY29sbGFwc2libGUtaGFuZGxlJykuYXR0cigndGFiaW5kZXgnLCcwJyk7XG5cbiAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsICcuY3Rvb2xzLWNvbGxhcHNpYmxlLWhhbmRsZScsZnVuY3Rpb24oZSl7XG4gICAgICAgICAgaWYoZS53aGljaD09MTMgfHwgZS53aGljaD09MzIpXG4gICAgICAgICAgICAgICQodGhpcykuY2xpY2soKVxuICAgICAgfSk7XG5cbiAgICB9XG4gIH07XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gICAgLy9Ub2dnbGUgZm9yIFNoYXJpbmdcbiAgICAkKCcuc29jaWFsLW1lZGlhLXByaW50X19zaGFyaW5nLXRvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCgnLmFkZHRoaXNfc2hhcmluZ190b29sYm94JykuZmFkZVRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgLy9Fc2NhcGUgdG8gY2xvc2Ugc2hhcmluZyBib3hcbiAgICAvL0Nsb3NlIG9uIEVzY2FwZVxuICAgICQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT0gMjcpIHtcbiAgICAgICAgJCgnLmFkZHRoaXNfc2hhcmluZ190b29sYm94JykuZmFkZU91dCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIFRoZSBBZGRUaGlzIHRvb2xiYXIgbWFya3VwIGlzIGF1dG9tYXRpY2FsbHkgaW5zZXJ0ZWQgdmlhIGphdmFzY3JpcHQgYWZ0ZXIgdGhlIHBhZ2UgbG9hZHMuXG4gICAgICogVGhpcyBpcyBjb250cm9sbGVkIGJ5IEFkZFRoaXMuIFRoaXMgbWFya3VwIGlzIGluYWNjZXNzaWJsZSBhbmQgc2luY2UgaXQgaXMgZ2VuZXJhdGVkIHZpYSBleHRlcm5hbFxuICAgICAqIGphdmFzY3JpcHQgd2UgbmVlZCB0byBjaGVjayB0aGUgcGFnZSB0byBzZWUgaWYgaXRzIHRoZXJlLlxuICAgICAqXG4gICAgICovXG5cbiAgICBhZGRUaGlzQ2hlY2tlcigpO1xuXG4gICAgZnVuY3Rpb24gYWRkVGhpc0NoZWNrZXIoKXtcblxuICAgICAgaWYoJCgnLmFkZHRoaXNfc2hhcmluZ190b29sYm94JykubGVuZ3RoID49IDEpe1xuXG4gICAgICAgIGlmKCQoJyNhdHN0YngnKS5sZW5ndGggPj0gMSl7XG4gICAgICAgICAgYWRkVGhpc01hcmt1cEFkanVzdG1lbnQoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgYWRkVGhpc1JlZG9DaGVja2VyKCk7XG4gICAgICAgIH1cblxuXG4gICAgICB9ZWxzZXtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGhpc01hcmt1cEFkanVzdG1lbnQoKXtcbiAgICAgICQoJyNhdHN0YnggYSBzcGFuJykuZWFjaChmdW5jdGlvbigpe1xuXG4gICAgICAgIHZhciBzcGFuVGl0bGUgPSAkKHRoaXMpLmF0dHIoJ3RpdGxlJyk7XG4gICAgICAgICQodGhpcykuaHRtbCgnPHNwYW4gY2xhc3M9XCJlbGVtZW50LWludmlzaWJsZVwiPicrc3BhblRpdGxlKyc8L3NwYW4+Jyk7XG4gICAgICAgICQodGhpcykucGFyZW50KCdhJykuYXR0cignaHJlZicsICcjJyk7XG5cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRoaXNSZWRvQ2hlY2tlcigpe1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe2FkZFRoaXNDaGVja2VyKCk7fSw1MDAwKTtcbiAgICB9XG5cbiAgfSk7XG5cblxuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgLy9UT0RPIERvY3VtZW50IGFuZCBDbGVhbiB1cFxuXG5cbiAgdmFyIHNlbGVjdG9yQXJyYXkgPSBbXG4gICAgJ2JvZHkucGFnZS1uZXdzLWV2ZW50cy1ldmVudHMtY2FsZW5kYXInXG4gIF07XG5cblxuXG4gIGZ1bmN0aW9uIGRvZXNFbGVtZW50RXhpc3Qoc2VsZWN0b3JBcnJheSl7XG5cblxuICAgICQuZWFjaChzZWxlY3RvckFycmF5LCBmdW5jdGlvbihrZXksIHNlbGVjdG9yKXtcblxuICAgICAgdmFyIGFtb3VudE9mRWxlbWVudHMgPSAkKHNlbGVjdG9yKS5sZW5ndGg7XG5cbiAgICAgIGlmKGFtb3VudE9mRWxlbWVudHMgPT0gMSl7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc2hvdy1jYWxlbmRhcicpO1xuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGVuZGFyT24oKXtcbiAgICBpZigkKCcjY2FsZW5kYXJfX3RvZ2dsZS1jYWxlbmRhcicpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG5cbiAgICB9ZWxzZXtcblxuICAgICAgJCgnLnZpZXctLWV2ZW50cy1jYWxlbmRhciAuYXR0YWNobWVudCcpLmZhZGVPdXQoMCxmdW5jdGlvbigpe1xuICAgICAgICAkKCcudmlldy0tZXZlbnRzLWNhbGVuZGFyIC52aWV3LWNvbnRlbnQnKS5mYWRlSW4oMzAwKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKCcjY2FsZW5kYXJfX3RvZ2dsZS1jYWxlbmRhcicpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJyNjYWxlbmRhcl9fdG9nZ2xlLWxpc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hpZGUtY2FsZW5kYXInKS5hZGRDbGFzcygnc2hvdy1jYWxlbmRhcicpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGVuZGFyT2ZmKCl7XG5cbiAgICBpZigkKCcjY2FsZW5kYXJfX3RvZ2dsZS1saXN0JykuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcblxuICAgIH1lbHNle1xuICAgICAgLy9vbmx5IGRvIHRoZSBmYWRlb3V0IGlmIGNhbGVuZGFyIGlzIHByZXNlbnQgZWxzZSBqdXN0IHNob3cgbmV3IGF0dGFjaG1lbnQgTGlzdFxuICAgICAgaWYoJCgnYm9keScpLmhhc0NsYXNzKCdzaG93LWNhbGVuZGFyJykpIHtcbiAgICAgICAgJCgnLnZpZXctLWV2ZW50cy1jYWxlbmRhciAudmlldy1jb250ZW50JykuZmFkZU91dCgwLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJCgnLnZpZXctLWV2ZW50cy1jYWxlbmRhciAuYXR0YWNobWVudCwnICtcbiAgICAgICAgICAnLnZpZXctLWV2ZW50cy1jYWxlbmRhciAuYXR0YWNobWVudCAudmlldy1jb250ZW50JykuZmFkZUluKDMwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLnZpZXctLWV2ZW50cy1jYWxlbmRhciAuYXR0YWNobWVudCwnICtcbiAgICAgICAgJy52aWV3LS1ldmVudHMtY2FsZW5kYXIgLmF0dGFjaG1lbnQgLnZpZXctY29udGVudCcpLmZhZGVJbigzMDApO1xuICAgICAgfVxuXG5cbiAgICAgICQoJyNjYWxlbmRhcl9fdG9nZ2xlLWxpc3QnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcjY2FsZW5kYXJfX3RvZ2dsZS1jYWxlbmRhcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2hvdy1jYWxlbmRhcicpLnJlbW92ZUNsYXNzKCdoYWQtY2FsZW5kYXInKS5hZGRDbGFzcygnaGlkZS1jYWxlbmRhcicpO1xuXG4gICAgfVxuXG4gIH1cblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgIGRvZXNFbGVtZW50RXhpc3Qoc2VsZWN0b3JBcnJheSk7XG5cblxuICAgICQoJyNjYWxlbmRhcl9fdG9nZ2xlLWNhbGVuZGFyJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjYWxlbmRhck9uKCk7XG5cbiAgICB9KTtcblxuICAgICQoJyNjYWxlbmRhcl9fdG9nZ2xlLWxpc3QnKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNhbGVuZGFyT2ZmKCk7XG4gICAgfSk7XG5cblxuICB9KTtcblxuICAkKGRvY3VtZW50KS5hamF4Q29tcGxldGUoZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3Nob3ctY2FsZW5kYXInKSkge1xuICAgICAgY2FsZW5kYXJPbigpO1xuICAgICAgJCgnI2NhbGVuZGFyX190b2dnbGUtY2FsZW5kYXInKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcjY2FsZW5kYXJfX3RvZ2dsZS1saXN0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgfWVsc2UgaWYoJCgnYm9keScpLmhhc0NsYXNzKCdoaWRlLWNhbGVuZGFyJykpe1xuICAgICAgY2FsZW5kYXJPZmYoKTtcbiAgICAgICQoJyNjYWxlbmRhcl9fdG9nZ2xlLWxpc3QnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcjY2FsZW5kYXJfX3RvZ2dsZS1jYWxlbmRhcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICAkKCcjY2FsZW5kYXJfX3RvZ2dsZS1jYWxlbmRhcicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2FsZW5kYXJPbigpO1xuXG4gICAgfSk7XG5cbiAgICAkKCcjY2FsZW5kYXJfX3RvZ2dsZS1saXN0JykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjYWxlbmRhck9mZigpO1xuICAgIH0pO1xuXG4gIH0pO1xuXG5cbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XG4gICAgd2luZG93LmxvYWRlZCA9IHRydWU7XG4gIH0pO1xuXG4gIC8vVE9ETyBDbGVhbiAoYWxzbyBmaXgpXG4gIC8vQ2FsZW5kYXIgTGlzdCBUb2dnbGUgb24gcmVzaXplXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cblxuXG5cblxuICAgIGVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6Njc5cHgpXCIsIHtcblxuICAgICAgLy8gT1BUSU9OQUxcbiAgICAgIC8vIElmIHN1cHBsaWVkLCB0cmlnZ2VyZWQgd2hlbiBhIG1lZGlhIHF1ZXJ5IG1hdGNoZXMuXG4gICAgICBtYXRjaCA6IGZ1bmN0aW9uKCkge1xuXG5cbiAgICAgICAgaWYoJCgnYm9keScpLmhhc0NsYXNzKCdzaG93LWNhbGVuZGFyJykpe1xuICAgICAgICAgIGNhbGVuZGFyT2ZmKCk7XG4gICAgICAgICAgaWYod2luZG93LmxvYWRlZD09PXRydWUpe1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdoYWQtY2FsZW5kYXInKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cblxuXG4gICAgICB9LFxuXG4gICAgICAvLyBPUFRJT05BTFxuICAgICAgLy8gSWYgc3VwcGxpZWQsIHRyaWdnZXJlZCB3aGVuIHRoZSBtZWRpYSBxdWVyeSB0cmFuc2l0aW9uc1xuICAgICAgLy8gKmZyb20gYSBtYXRjaGVkIHN0YXRlIHRvIGFuIHVubWF0Y2hlZCBzdGF0ZSouXG4gICAgICB1bm1hdGNoIDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYoJCgnYm9keScpLmhhc0NsYXNzKCdoYWQtY2FsZW5kYXInKSl7XG4gICAgICAgICAgY2FsZW5kYXJPbigpO1xuICAgICAgICB9XG5cblxuICAgICAgfSxcblxuICAgICAgLy8gT1BUSU9OQUxcbiAgICAgIC8vIElmIHN1cHBsaWVkLCB0cmlnZ2VyZWQgb25jZSwgd2hlbiB0aGUgaGFuZGxlciBpcyByZWdpc3RlcmVkLlxuICAgICAgc2V0dXAgOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgICAvLyBPUFRJT05BTCwgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICAgIC8vIElmIHNldCB0byB0cnVlLCBkZWZlcnMgZXhlY3V0aW9uIG9mIHRoZSBzZXR1cCBmdW5jdGlvblxuICAgICAgLy8gdW50aWwgdGhlIGZpcnN0IHRpbWUgdGhlIG1lZGlhIHF1ZXJ5IGlzIG1hdGNoZWRcbiAgICAgIGRlZmVyU2V0dXAgOiB0cnVlLFxuXG4gICAgICAvLyBPUFRJT05BTFxuICAgICAgLy8gSWYgc3VwcGxpZWQsIHRyaWdnZXJlZCB3aGVuIGhhbmRsZXIgaXMgdW5yZWdpc3RlcmVkLlxuICAgICAgLy8gUGxhY2UgY2xlYW51cCBjb2RlIGhlcmVcbiAgICAgIGRlc3Ryb3kgOiBmdW5jdGlvbigpIHt9XG5cbiAgICB9KTtcblxuXG4gIH0pO1xuXG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuXG4gIC8vdG9kbyBydW4gZWxlbWVudCBjaGVjayBmaXJzdFxuICAvL0RvY3VtZW50YXRpb24gOiBodHRwczovL2dpdGh1Yi5jb20vYWRhbXd1bGYvQ29sdW1uaXplci1qUXVlcnktUGx1Z2luXG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuXG4gICAgJCgnLnBhbmUtLXB1YmxpY2F0aW9uLXRvcGljLWFyZWEtdGF4b25vbXktdG9waWMtYXJlYSAudmlldy1jb250ZW50JykuY29sdW1uaXplKHtcbiAgICAgIGNvbHVtbnM6IDMsXG4gICAgICBsYXN0TmV2ZXJUYWxsZXN0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAkKCdmb290ZXIgLm1lbnUtbmFtZS1tYWluLW1lbnUgLm1lbnUgbGk6Zmlyc3QtY2hpbGQgLm1lbnUnKS5jb2x1bW5pemUoe1xuICAgICAgY29sdW1uczogMixcbiAgICAgIGxhc3ROZXZlclRhbGxlc3Q6IHRydWVcbiAgICB9KTtcblxuICB9KTtcblxuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgLy9FcXVhbCBIZWlnaHRzXG5cbiAgdmFyIHNlbGVjdG9yQXJyYXkgPSBbXG4gICAgJy5wYW5lbC1yZWdpb24tLWNhbGwtb3V0cyAucGFuZS0tY2FsbG91dCAucGFuZV9faW5uZXItY29udGVudCcsXG4gICAgJy5wYW5lLS1oYWxmLXdpZHRoIC5wYW5lX19pbm5lci1jb250ZW50JyxcbiAgICAnLnBhbmUtLWhhbGYtd2lkdGggLnBhbmVfX2hlYWRlcicsXG4gICAgJy5uaXN0LWZlYXR1cmVkLXRvcGljc19fbGluaycsXG4gICAgJy5uaXN0LWhlcm8tLWhvbWVwYWdlIC5uaXN0LWhlcm9fX2NhcHRpb24tLW92ZXJsYXknLFxuICAgICcudG9waWMtY2FyZCBhJyxcbiAgICAnLmVxdWFsLWhlaWdodCdcbiAgXTtcblxuXG5cbiAgZnVuY3Rpb24gZG9lc0VsZW1lbnRFeGlzdFdpdGhNdWx0aXBsZShzZWxlY3RvckFycmF5KXtcblxuICAgICQuZWFjaChzZWxlY3RvckFycmF5LCBmdW5jdGlvbihrZXksIHNlbGVjdG9yKXtcblxuICAgICAgdmFyIGFtb3VudE9mRWxlbWVudHMgPSAkKHNlbGVjdG9yKS5sZW5ndGg7XG5cbiAgICAgIGlmKGFtb3VudE9mRWxlbWVudHMgPiAxKXtcbiAgICAgICAgZ2V0SGVpZ2h0cyhzZWxlY3Rvcik7XG4gICAgICB9XG5cbiAgICB9KTtcblxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SGVpZ2h0cyhzZWxlY3Rvcil7XG5cbiAgICB2YXIgaGVpZ2h0QXJyYXkgPSBbXTtcblxuICAgICQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciBpdGVtSGVpZ2h0ID0gJCh0aGlzKS5vdXRlckhlaWdodCgpO1xuICAgICAgaGVpZ2h0QXJyYXkucHVzaChpdGVtSGVpZ2h0KTtcbiAgICB9KTtcblxuICAgIGZpbmRHcmVhdGVzdEhlaWdodChoZWlnaHRBcnJheSwgc2VsZWN0b3IpO1xuXG4gIH1cblxuXG5cblxuXG5cbiAgZnVuY3Rpb24gZmluZEdyZWF0ZXN0SGVpZ2h0KGhlaWdodEFycmF5LCBzZWxlY3Rvcil7XG4gICAgdmFyIGdyZWF0ZXN0SGVpZ2h0ID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgaGVpZ2h0QXJyYXkpO1xuXG4gICAgYXBwbHlHcmVhdGVzdEhlaWdodChncmVhdGVzdEhlaWdodCwgc2VsZWN0b3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlHcmVhdGVzdEhlaWdodChncmVhdGVzdEhlaWdodCwgc2VsZWN0b3Ipe1xuXG4gICAgJChzZWxlY3RvcikuY3NzKCdoZWlnaHQnLCBncmVhdGVzdEhlaWdodCsncHgnKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlR3JlYXRlc3RIZWlnaHQoc2VsZWN0b3JBcnJheSl7XG5cblxuICAgICQuZWFjaChzZWxlY3RvckFycmF5LCBmdW5jdGlvbihrZXksIHNlbGVjdG9yKXtcblxuICAgICAgdmFyIGFtb3VudE9mRWxlbWVudHMgPSAkKHNlbGVjdG9yKS5sZW5ndGg7XG5cbiAgICAgIGlmKGFtb3VudE9mRWxlbWVudHMgPiAxKXtcbiAgICAgICAgJChzZWxlY3RvcikuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xuICAgICAgfVxuXG4gICAgfSk7XG5cblxuXG5cbiAgfVxuXG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcblxuICAgIC8vUmVzaXplIHJlY2FsY3VsYXRlXG4gICAgdmFyIHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZih3aW5kb3dXaWR0aCA+PSA2ODApe1xuICAgICAgcmVtb3ZlR3JlYXRlc3RIZWlnaHQoc2VsZWN0b3JBcnJheSk7XG4gICAgICBkb2VzRWxlbWVudEV4aXN0V2l0aE11bHRpcGxlKHNlbGVjdG9yQXJyYXkpO1xuICAgIH1cblxuICB9KTtcblxuXG4gICQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCl7XG5cblxuICAgIHZhciB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgaWYod2luZG93V2lkdGggPj0gNjgwKXtcbiAgICAgIHJlbW92ZUdyZWF0ZXN0SGVpZ2h0KHNlbGVjdG9yQXJyYXkpO1xuICAgICAgZG9lc0VsZW1lbnRFeGlzdFdpdGhNdWx0aXBsZShzZWxlY3RvckFycmF5KTtcbiAgICB9XG5cblxuICAgIGVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtYXgtd2lkdGg6Njc5cHgpXCIsIHtcblxuICAgICAgLy8gT1BUSU9OQUxcbiAgICAgIC8vIElmIHN1cHBsaWVkLCB0cmlnZ2VyZWQgd2hlbiBhIG1lZGlhIHF1ZXJ5IG1hdGNoZXMuXG4gICAgICBtYXRjaCA6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHJlbW92ZUdyZWF0ZXN0SGVpZ2h0KHNlbGVjdG9yQXJyYXkpO1xuXG4gICAgICB9LFxuXG4gICAgICAvLyBPUFRJT05BTFxuICAgICAgLy8gSWYgc3VwcGxpZWQsIHRyaWdnZXJlZCB3aGVuIHRoZSBtZWRpYSBxdWVyeSB0cmFuc2l0aW9uc1xuICAgICAgLy8gKmZyb20gYSBtYXRjaGVkIHN0YXRlIHRvIGFuIHVubWF0Y2hlZCBzdGF0ZSouXG4gICAgICB1bm1hdGNoIDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgZG9lc0VsZW1lbnRFeGlzdFdpdGhNdWx0aXBsZShzZWxlY3RvckFycmF5KTtcblxuICAgICAgfSxcblxuICAgICAgLy8gT1BUSU9OQUxcbiAgICAgIC8vIElmIHN1cHBsaWVkLCB0cmlnZ2VyZWQgb25jZSwgd2hlbiB0aGUgaGFuZGxlciBpcyByZWdpc3RlcmVkLlxuICAgICAgc2V0dXAgOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgICAvLyBPUFRJT05BTCwgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICAgIC8vIElmIHNldCB0byB0cnVlLCBkZWZlcnMgZXhlY3V0aW9uIG9mIHRoZSBzZXR1cCBmdW5jdGlvblxuICAgICAgLy8gdW50aWwgdGhlIGZpcnN0IHRpbWUgdGhlIG1lZGlhIHF1ZXJ5IGlzIG1hdGNoZWRcbiAgICAgIGRlZmVyU2V0dXAgOiB0cnVlLFxuXG4gICAgICAvLyBPUFRJT05BTFxuICAgICAgLy8gSWYgc3VwcGxpZWQsIHRyaWdnZXJlZCB3aGVuIGhhbmRsZXIgaXMgdW5yZWdpc3RlcmVkLlxuICAgICAgLy8gUGxhY2UgY2xlYW51cCBjb2RlIGhlcmVcbiAgICAgIGRlc3Ryb3kgOiBmdW5jdGlvbigpIHt9XG5cbiAgICB9KTtcblxuICB9KTtcblxuXG5cblxuXG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24oJCkge1xuXG4gIERydXBhbC5iZWhhdmlvcnMudGVzdEFqYXggPSB7XG5cbiAgICBhdHRhY2g6IGZ1bmN0aW9uIChjb250ZXh0LCBzZXR0aW5ncykge1xuICAgICAgaWYgKGNvbnRleHQuY29udGV4dCAhPSB1bmRlZmluZWQgJiYgc2V0dGluZ3Mudmlld3MgJiYgc2V0dGluZ3Mudmlld3MuYWpheFZpZXdzKSB7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnYWpheC1yYW4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSkoalF1ZXJ5KTtcbiIsIi8qIVxuICogZW5xdWlyZS5qcyB2Mi4xLjIgLSBBd2Vzb21lIE1lZGlhIFF1ZXJpZXMgaW4gSmF2YVNjcmlwdFxuICogQ29weXJpZ2h0IChjKSAyMDE0IE5pY2sgV2lsbGlhbXMgLSBodHRwOi8vd2lja3kubmlsbGlhLm1zL2VucXVpcmUuanNcbiAqIExpY2Vuc2U6IE1JVCAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4gKi9cblxuIWZ1bmN0aW9uKGEsYixjKXt2YXIgZD13aW5kb3cubWF0Y2hNZWRpYTtcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1jKGQpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gYlthXT1jKGQpfSk6YlthXT1jKGQpfShcImVucXVpcmVcIix0aGlzLGZ1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYSxiKXt2YXIgYyxkPTAsZT1hLmxlbmd0aDtmb3IoZDtlPmQmJihjPWIoYVtkXSxkKSxjIT09ITEpO2QrKyk7fWZ1bmN0aW9uIGMoYSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShhKX1mdW5jdGlvbiBkKGEpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGF9ZnVuY3Rpb24gZShhKXt0aGlzLm9wdGlvbnM9YSwhYS5kZWZlclNldHVwJiZ0aGlzLnNldHVwKCl9ZnVuY3Rpb24gZihiLGMpe3RoaXMucXVlcnk9Yix0aGlzLmlzVW5jb25kaXRpb25hbD1jLHRoaXMuaGFuZGxlcnM9W10sdGhpcy5tcWw9YShiKTt2YXIgZD10aGlzO3RoaXMubGlzdGVuZXI9ZnVuY3Rpb24oYSl7ZC5tcWw9YSxkLmFzc2VzcygpfSx0aGlzLm1xbC5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKX1mdW5jdGlvbiBnKCl7aWYoIWEpdGhyb3cgbmV3IEVycm9yKFwibWF0Y2hNZWRpYSBub3QgcHJlc2VudCwgbGVnYWN5IGJyb3dzZXJzIHJlcXVpcmUgYSBwb2x5ZmlsbFwiKTt0aGlzLnF1ZXJpZXM9e30sdGhpcy5icm93c2VySXNJbmNhcGFibGU9IWEoXCJvbmx5IGFsbFwiKS5tYXRjaGVzfXJldHVybiBlLnByb3RvdHlwZT17c2V0dXA6ZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMuc2V0dXAmJnRoaXMub3B0aW9ucy5zZXR1cCgpLHRoaXMuaW5pdGlhbGlzZWQ9ITB9LG9uOmZ1bmN0aW9uKCl7IXRoaXMuaW5pdGlhbGlzZWQmJnRoaXMuc2V0dXAoKSx0aGlzLm9wdGlvbnMubWF0Y2gmJnRoaXMub3B0aW9ucy5tYXRjaCgpfSxvZmY6ZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMudW5tYXRjaCYmdGhpcy5vcHRpb25zLnVubWF0Y2goKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMub3B0aW9ucy5kZXN0cm95P3RoaXMub3B0aW9ucy5kZXN0cm95KCk6dGhpcy5vZmYoKX0sZXF1YWxzOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9wdGlvbnM9PT1hfHx0aGlzLm9wdGlvbnMubWF0Y2g9PT1hfX0sZi5wcm90b3R5cGU9e2FkZEhhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IGUoYSk7dGhpcy5oYW5kbGVycy5wdXNoKGIpLHRoaXMubWF0Y2hlcygpJiZiLm9uKCl9LHJlbW92ZUhhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcy5oYW5kbGVycztiKGMsZnVuY3Rpb24oYixkKXtyZXR1cm4gYi5lcXVhbHMoYSk/KGIuZGVzdHJveSgpLCFjLnNwbGljZShkLDEpKTp2b2lkIDB9KX0sbWF0Y2hlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1xbC5tYXRjaGVzfHx0aGlzLmlzVW5jb25kaXRpb25hbH0sY2xlYXI6ZnVuY3Rpb24oKXtiKHRoaXMuaGFuZGxlcnMsZnVuY3Rpb24oYSl7YS5kZXN0cm95KCl9KSx0aGlzLm1xbC5yZW1vdmVMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKSx0aGlzLmhhbmRsZXJzLmxlbmd0aD0wfSxhc3Nlc3M6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm1hdGNoZXMoKT9cIm9uXCI6XCJvZmZcIjtiKHRoaXMuaGFuZGxlcnMsZnVuY3Rpb24oYil7YlthXSgpfSl9fSxnLnByb3RvdHlwZT17cmVnaXN0ZXI6ZnVuY3Rpb24oYSxlLGcpe3ZhciBoPXRoaXMucXVlcmllcyxpPWcmJnRoaXMuYnJvd3NlcklzSW5jYXBhYmxlO3JldHVybiBoW2FdfHwoaFthXT1uZXcgZihhLGkpKSxkKGUpJiYoZT17bWF0Y2g6ZX0pLGMoZSl8fChlPVtlXSksYihlLGZ1bmN0aW9uKGIpe2QoYikmJihiPXttYXRjaDpifSksaFthXS5hZGRIYW5kbGVyKGIpfSksdGhpc30sdW5yZWdpc3RlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMucXVlcmllc1thXTtyZXR1cm4gYyYmKGI/Yy5yZW1vdmVIYW5kbGVyKGIpOihjLmNsZWFyKCksZGVsZXRlIHRoaXMucXVlcmllc1thXSkpLHRoaXN9fSxuZXcgZ30pOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gIGZ1bmN0aW9uICByZXNpemVTbGlkZXIoc2xpZGVyKSB7XG4gICAgJChzbGlkZXIpLnJlc2l6ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZnVsbHNjcmVlbk9wZW4oc2xpZGVyKSB7XG4gICAgJChzbGlkZXIpLmFkZENsYXNzKFwiZnVsbHNjcmVlblwiKTtcbiAgICByZXNpemVTbGlkZXIoc2xpZGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZ1bGxzY3JlZW5DbG9zZShzbGlkZXIpIHtcbiAgICAkKHNsaWRlcikucmVtb3ZlQ2xhc3MoXCJmdWxsc2NyZWVuXCIpO1xuICAgIHJlc2l6ZVNsaWRlcihzbGlkZXIpO1xuICB9XG5cbiAgRHJ1cGFsLmJlaGF2aW9ycy5uaXN0c2xpZGVyID0ge1xuICAgIGF0dGFjaDogZnVuY3Rpb24gKGNvbnRleHQsIHNldHRpbmdzKSB7XG5cbiAgICAgIC8qIENvbnZlcnQgcGljdHVyZSBlbGVtZW50cyBpbnRvIGRpdnMgd2l0aCBiYWNrZ3JvdW5kIGltYWdlcyBhbmQgYXBwZW5kIHRvIHNsaWRlICovXG4gICAgICAkKCcubmlzdC1zbGlkZXInKS5maW5kKCdwaWN0dXJlJykuZWFjaChmdW5jdGlvbihpLCBlbGVtKSB7XG4gICAgICAgIHZhciBpbWcgPSAkKGVsZW0pLmZpbmQoXCJpbWdcIik7XG4gICAgICAgIHZhciBkaXYgPSAkKFwiPGRpdiAvPlwiKS5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogXCJ1cmwoXCIgKyBpbWcuYXR0cihcInNyY1wiKSArIFwiKVwiXG4gICAgICAgIH0pLmFkZENsYXNzKFwibmlzdC1zbGlkZXJfX2JnLWltYWdlXCIpO1xuICAgICAgICAkKGVsZW0pLmFmdGVyKGRpdik7XG4gICAgICB9KTtcblxuICAgICAgJCgnLm5pc3Qtc2xpZGVyX19mdWxsc2NyZWVuLW9wZW4nKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmdWxsc2NyZWVuT3BlbigkKHRoaXMpLmNsb3Nlc3QoJy5uaXN0LXNsaWRlcicpKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKCcubmlzdC1zbGlkZXJfX2Z1bGxzY3JlZW4tY2xvc2UnKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmdWxsc2NyZWVuQ2xvc2UoJCh0aGlzKS5jbG9zZXN0KCcubmlzdC1zbGlkZXInKSk7XG4gICAgICB9KTtcblxuICAgICAgJCgnLm5pc3Qtc2xpZGVyJykuYmluZCgnc3RhcnQnLCBmdW5jdGlvbihlLCBzbGlkZXIpIHtcbiAgICAgICAgJCgnLm5pc3Qtc2xpZGVyX19zbGlkZS10b3RhbCcpLnRleHQoc2xpZGVyLmNvdW50KTtcbiAgICAgIH0pO1xuXG4gICAgICAkKCcubmlzdC1zbGlkZXInKS5iaW5kKCdhZnRlcicsIGZ1bmN0aW9uKGUsIHNsaWRlcikge1xuICAgICAgICAkKCcubmlzdC1zbGlkZXJfX3NsaWRlLWN1cnJlbnQnKS50ZXh0KHNsaWRlci5jdXJyZW50U2xpZGUrMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgJChkb2N1bWVudCkua2V5dXAoZnVuY3Rpb24oZSkge1xuICAgIC8qIEVudGVyIGtleSAqL1xuICAgIGlmIChlLmtleUNvZGUgPT0gMjcpIHtcbiAgICAgIGZ1bGxzY3JlZW5DbG9zZSgpO1xuICAgIH07XG5cbiAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIvKiBGb250IEZhY2UgT2JzZXJ2ZXIgdjIuMC4xMyAtIMKpIEJyYW0gU3RlaW4uIExpY2Vuc2U6IEJTRC0zLUNsYXVzZSAqLyhmdW5jdGlvbigpeyd1c2Ugc3RyaWN0Jzt2YXIgZixnPVtdO2Z1bmN0aW9uIGwoYSl7Zy5wdXNoKGEpOzE9PWcubGVuZ3RoJiZmKCl9ZnVuY3Rpb24gbSgpe2Zvcig7Zy5sZW5ndGg7KWdbMF0oKSxnLnNoaWZ0KCl9Zj1mdW5jdGlvbigpe3NldFRpbWVvdXQobSl9O2Z1bmN0aW9uIG4oYSl7dGhpcy5hPXA7dGhpcy5iPXZvaWQgMDt0aGlzLmY9W107dmFyIGI9dGhpczt0cnl7YShmdW5jdGlvbihhKXtxKGIsYSl9LGZ1bmN0aW9uKGEpe3IoYixhKX0pfWNhdGNoKGMpe3IoYixjKX19dmFyIHA9MjtmdW5jdGlvbiB0KGEpe3JldHVybiBuZXcgbihmdW5jdGlvbihiLGMpe2MoYSl9KX1mdW5jdGlvbiB1KGEpe3JldHVybiBuZXcgbihmdW5jdGlvbihiKXtiKGEpfSl9ZnVuY3Rpb24gcShhLGIpe2lmKGEuYT09cCl7aWYoYj09YSl0aHJvdyBuZXcgVHlwZUVycm9yO3ZhciBjPSExO3RyeXt2YXIgZD1iJiZiLnRoZW47aWYobnVsbCE9YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJlwiZnVuY3Rpb25cIj09dHlwZW9mIGQpe2QuY2FsbChiLGZ1bmN0aW9uKGIpe2N8fHEoYSxiKTtjPSEwfSxmdW5jdGlvbihiKXtjfHxyKGEsYik7Yz0hMH0pO3JldHVybn19Y2F0Y2goZSl7Y3x8cihhLGUpO3JldHVybn1hLmE9MDthLmI9Yjt2KGEpfX1cbmZ1bmN0aW9uIHIoYSxiKXtpZihhLmE9PXApe2lmKGI9PWEpdGhyb3cgbmV3IFR5cGVFcnJvcjthLmE9MTthLmI9Yjt2KGEpfX1mdW5jdGlvbiB2KGEpe2woZnVuY3Rpb24oKXtpZihhLmEhPXApZm9yKDthLmYubGVuZ3RoOyl7dmFyIGI9YS5mLnNoaWZ0KCksYz1iWzBdLGQ9YlsxXSxlPWJbMl0sYj1iWzNdO3RyeXswPT1hLmE/XCJmdW5jdGlvblwiPT10eXBlb2YgYz9lKGMuY2FsbCh2b2lkIDAsYS5iKSk6ZShhLmIpOjE9PWEuYSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGQ/ZShkLmNhbGwodm9pZCAwLGEuYikpOmIoYS5iKSl9Y2F0Y2goaCl7YihoKX19fSl9bi5wcm90b3R5cGUuZz1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5jKHZvaWQgMCxhKX07bi5wcm90b3R5cGUuYz1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGQsZSl7Yy5mLnB1c2goW2EsYixkLGVdKTt2KGMpfSl9O1xuZnVuY3Rpb24gdyhhKXtyZXR1cm4gbmV3IG4oZnVuY3Rpb24oYixjKXtmdW5jdGlvbiBkKGMpe3JldHVybiBmdW5jdGlvbihkKXtoW2NdPWQ7ZSs9MTtlPT1hLmxlbmd0aCYmYihoKX19dmFyIGU9MCxoPVtdOzA9PWEubGVuZ3RoJiZiKGgpO2Zvcih2YXIgaz0wO2s8YS5sZW5ndGg7ays9MSl1KGFba10pLmMoZChrKSxjKX0pfWZ1bmN0aW9uIHgoYSl7cmV0dXJuIG5ldyBuKGZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBkPTA7ZDxhLmxlbmd0aDtkKz0xKXUoYVtkXSkuYyhiLGMpfSl9O3dpbmRvdy5Qcm9taXNlfHwod2luZG93LlByb21pc2U9bix3aW5kb3cuUHJvbWlzZS5yZXNvbHZlPXUsd2luZG93LlByb21pc2UucmVqZWN0PXQsd2luZG93LlByb21pc2UucmFjZT14LHdpbmRvdy5Qcm9taXNlLmFsbD13LHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuPW4ucHJvdG90eXBlLmMsd2luZG93LlByb21pc2UucHJvdG90eXBlW1wiY2F0Y2hcIl09bi5wcm90b3R5cGUuZyk7fSgpKTtcblxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gbChhLGIpe2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/YS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsYiwhMSk6YS5hdHRhY2hFdmVudChcInNjcm9sbFwiLGIpfWZ1bmN0aW9uIG0oYSl7ZG9jdW1lbnQuYm9keT9hKCk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGZ1bmN0aW9uIGMoKXtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGMpO2EoKX0pOmRvY3VtZW50LmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsZnVuY3Rpb24gaygpe2lmKFwiaW50ZXJhY3RpdmVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZXx8XCJjb21wbGV0ZVwiPT1kb2N1bWVudC5yZWFkeVN0YXRlKWRvY3VtZW50LmRldGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsayksYSgpfSl9O2Z1bmN0aW9uIHIoYSl7dGhpcy5hPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dGhpcy5hLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpO3RoaXMuYS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSk7dGhpcy5iPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTt0aGlzLmg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7dGhpcy5mPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO3RoaXMuZz0tMTt0aGlzLmIuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO3RoaXMuYy5zdHlsZS5jc3NUZXh0PVwibWF4LXdpZHRoOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpzY3JvbGw7Zm9udC1zaXplOjE2cHg7XCI7XG50aGlzLmYuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b3ZlcmZsb3c6c2Nyb2xsO2ZvbnQtc2l6ZToxNnB4O1wiO3RoaXMuaC5zdHlsZS5jc3NUZXh0PVwiZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjAwJTtoZWlnaHQ6MjAwJTtmb250LXNpemU6MTZweDttYXgtd2lkdGg6bm9uZTtcIjt0aGlzLmIuYXBwZW5kQ2hpbGQodGhpcy5oKTt0aGlzLmMuYXBwZW5kQ2hpbGQodGhpcy5mKTt0aGlzLmEuYXBwZW5kQ2hpbGQodGhpcy5iKTt0aGlzLmEuYXBwZW5kQ2hpbGQodGhpcy5jKX1cbmZ1bmN0aW9uIHQoYSxiKXthLmEuc3R5bGUuY3NzVGV4dD1cIm1heC13aWR0aDpub25lO21pbi13aWR0aDoyMHB4O21pbi1oZWlnaHQ6MjBweDtkaXNwbGF5OmlubGluZS1ibG9jaztvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6YXV0bzttYXJnaW46MDtwYWRkaW5nOjA7dG9wOi05OTlweDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1zeW50aGVzaXM6bm9uZTtmb250OlwiK2IrXCI7XCJ9ZnVuY3Rpb24geShhKXt2YXIgYj1hLmEub2Zmc2V0V2lkdGgsYz1iKzEwMDthLmYuc3R5bGUud2lkdGg9YytcInB4XCI7YS5jLnNjcm9sbExlZnQ9YzthLmIuc2Nyb2xsTGVmdD1hLmIuc2Nyb2xsV2lkdGgrMTAwO3JldHVybiBhLmchPT1iPyhhLmc9YiwhMCk6ITF9ZnVuY3Rpb24geihhLGIpe2Z1bmN0aW9uIGMoKXt2YXIgYT1rO3koYSkmJmEuYS5wYXJlbnROb2RlJiZiKGEuZyl9dmFyIGs9YTtsKGEuYixjKTtsKGEuYyxjKTt5KGEpfTtmdW5jdGlvbiBBKGEsYil7dmFyIGM9Ynx8e307dGhpcy5mYW1pbHk9YTt0aGlzLnN0eWxlPWMuc3R5bGV8fFwibm9ybWFsXCI7dGhpcy53ZWlnaHQ9Yy53ZWlnaHR8fFwibm9ybWFsXCI7dGhpcy5zdHJldGNoPWMuc3RyZXRjaHx8XCJub3JtYWxcIn12YXIgQj1udWxsLEM9bnVsbCxFPW51bGwsRj1udWxsO2Z1bmN0aW9uIEcoKXtpZihudWxsPT09QylpZihKKCkmJi9BcHBsZS8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnZlbmRvcikpe3ZhciBhPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtDPSEhYSYmNjAzPnBhcnNlSW50KGFbMV0sMTApfWVsc2UgQz0hMTtyZXR1cm4gQ31mdW5jdGlvbiBKKCl7bnVsbD09PUYmJihGPSEhZG9jdW1lbnQuZm9udHMpO3JldHVybiBGfVxuZnVuY3Rpb24gSygpe2lmKG51bGw9PT1FKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RyeXthLnN0eWxlLmZvbnQ9XCJjb25kZW5zZWQgMTAwcHggc2Fucy1zZXJpZlwifWNhdGNoKGIpe31FPVwiXCIhPT1hLnN0eWxlLmZvbnR9cmV0dXJuIEV9ZnVuY3Rpb24gTChhLGIpe3JldHVyblthLnN0eWxlLGEud2VpZ2h0LEsoKT9hLnN0cmV0Y2g6XCJcIixcIjEwMHB4XCIsYl0uam9pbihcIiBcIil9XG5BLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxrPWF8fFwiQkVTYnN3eVwiLHE9MCxEPWJ8fDNFMyxIPShuZXcgRGF0ZSkuZ2V0VGltZSgpO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihhLGIpe2lmKEooKSYmIUcoKSl7dmFyIE09bmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBlKCl7KG5ldyBEYXRlKS5nZXRUaW1lKCktSD49RD9iKCk6ZG9jdW1lbnQuZm9udHMubG9hZChMKGMsJ1wiJytjLmZhbWlseSsnXCInKSxrKS50aGVuKGZ1bmN0aW9uKGMpezE8PWMubGVuZ3RoP2EoKTpzZXRUaW1lb3V0KGUsMjUpfSxmdW5jdGlvbigpe2IoKX0pfWUoKX0pLE49bmV3IFByb21pc2UoZnVuY3Rpb24oYSxjKXtxPXNldFRpbWVvdXQoYyxEKX0pO1Byb21pc2UucmFjZShbTixNXSkudGhlbihmdW5jdGlvbigpe2NsZWFyVGltZW91dChxKTthKGMpfSxmdW5jdGlvbigpe2IoYyl9KX1lbHNlIG0oZnVuY3Rpb24oKXtmdW5jdGlvbiB1KCl7dmFyIGI7aWYoYj0tMSE9XG5mJiYtMSE9Z3x8LTEhPWYmJi0xIT1ofHwtMSE9ZyYmLTEhPWgpKGI9ZiE9ZyYmZiE9aCYmZyE9aCl8fChudWxsPT09QiYmKGI9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpLEI9ISFiJiYoNTM2PnBhcnNlSW50KGJbMV0sMTApfHw1MzY9PT1wYXJzZUludChiWzFdLDEwKSYmMTE+PXBhcnNlSW50KGJbMl0sMTApKSksYj1CJiYoZj09diYmZz09diYmaD09dnx8Zj09dyYmZz09dyYmaD09d3x8Zj09eCYmZz09eCYmaD09eCkpLGI9IWI7YiYmKGQucGFyZW50Tm9kZSYmZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpLGNsZWFyVGltZW91dChxKSxhKGMpKX1mdW5jdGlvbiBJKCl7aWYoKG5ldyBEYXRlKS5nZXRUaW1lKCktSD49RClkLnBhcmVudE5vZGUmJmQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSxiKGMpO2Vsc2V7dmFyIGE9ZG9jdW1lbnQuaGlkZGVuO2lmKCEwPT09YXx8dm9pZCAwPT09YSlmPWUuYS5vZmZzZXRXaWR0aCxcbmc9bi5hLm9mZnNldFdpZHRoLGg9cC5hLm9mZnNldFdpZHRoLHUoKTtxPXNldFRpbWVvdXQoSSw1MCl9fXZhciBlPW5ldyByKGspLG49bmV3IHIoaykscD1uZXcgcihrKSxmPS0xLGc9LTEsaD0tMSx2PS0xLHc9LTEseD0tMSxkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZC5kaXI9XCJsdHJcIjt0KGUsTChjLFwic2Fucy1zZXJpZlwiKSk7dChuLEwoYyxcInNlcmlmXCIpKTt0KHAsTChjLFwibW9ub3NwYWNlXCIpKTtkLmFwcGVuZENoaWxkKGUuYSk7ZC5hcHBlbmRDaGlsZChuLmEpO2QuYXBwZW5kQ2hpbGQocC5hKTtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGQpO3Y9ZS5hLm9mZnNldFdpZHRoO3c9bi5hLm9mZnNldFdpZHRoO3g9cC5hLm9mZnNldFdpZHRoO0koKTt6KGUsZnVuY3Rpb24oYSl7Zj1hO3UoKX0pO3QoZSxMKGMsJ1wiJytjLmZhbWlseSsnXCIsc2Fucy1zZXJpZicpKTt6KG4sZnVuY3Rpb24oYSl7Zz1hO3UoKX0pO3QobixMKGMsJ1wiJytjLmZhbWlseSsnXCIsc2VyaWYnKSk7XG56KHAsZnVuY3Rpb24oYSl7aD1hO3UoKX0pO3QocCxMKGMsJ1wiJytjLmZhbWlseSsnXCIsbW9ub3NwYWNlJykpfSl9KX07XCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9QTood2luZG93LkZvbnRGYWNlT2JzZXJ2ZXI9QSx3aW5kb3cuRm9udEZhY2VPYnNlcnZlci5wcm90b3R5cGUubG9hZD1BLnByb3RvdHlwZS5sb2FkKTt9KCkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBNb3ZlIGhlbHAgdGV4dCB1bmRlciB0aGUgYXNzb2NpYXRlZCBmb3JtIGlucHV0IGJ5IG1hdGNoaW5nIHRoZSBpbnB1dCBpZFxuICAgIC8vIHdpdGggdGhlIGhlbHAgdGV4dCB3ZWJmb3JtIGNvbXBvbmVudC4gVGhpcyBjbGFzcyBpcyBjcmVhdGVkIGJ5XG4gICAgLy8gY3VzdG9taXppbmcgdGhlIGlkIG9mIHRoZSBoZWxwIHRleHQgd2ViZm9ybSBjb21wb25lbnQuXG4gICAgJCgnLm5pc3QtZXhwYW5kYWJsZS1oZWxwIGlucHV0JykuZWFjaChcbiAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBpbnB1dElEID0gJCh0aGlzKS5hdHRyKFwiaWRcIikucmVwbGFjZSgnZWRpdC1zdWJtaXR0ZWQtJywnJyk7XG4gICAgICAgIHZhciBoZWxwQ2xhc3MgPSBcIndlYmZvcm0tY29tcG9uZW50LS1cIiArIGlucHV0SUQgKyBcIi1oZWxwXCI7XG4gICAgICAgIHZhciBoZWxwRWxlbWVudCA9ICQoJy4nICsgaGVscENsYXNzKS5maXJzdCgpO1xuICAgICAgICBoZWxwRWxlbWVudC5hZGRDbGFzcygnbmlzdC1leHBhbmRhYmxlLWhlbHBfX3RleHQnKS5oaWRlKCk7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuYXBwZW5kKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwibmlzdC1leHBhbmRhYmxlLWhlbHBfX2J1dHRvblwiPjxzdmcgY2xhc3M9XCJpY29uIGljb24tcXVlc3Rpb24tY2lyY2xlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tcXVlc3Rpb24tY2lyY2xlXCI+PC91c2U+PC9zdmc+PHNwYW4gY2xhc3M9XCJlbGVtZW50LWludmlzaWJsZVwiPk1vcmUgaW5mb3JtYXRpb248L3NwYW4+PC9hPicpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFwcGVuZChoZWxwRWxlbWVudCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgICQoJy5uaXN0LWV4cGFuZGFibGUtaGVscF9fYnV0dG9uJykuY2xpY2soXG4gICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAvLyBTaG93L2hpZGUgdGhlIGhlbHAgdGV4dCBmb3IgdGhpcyBlbGVtZW50XG4gICAgICAgICQodGhpcykuc2libGluZ3MoJy5uaXN0LWV4cGFuZGFibGUtaGVscF9fdGV4dCcpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICB9XG4gICAgKTtcblxuICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuXG4gIGZ1bmN0aW9uIGlmcmFtZVJlc2l6ZSgpIHtcbiAgICAkKFwiaWZyYW1lXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgLy8gR2V0IHRoZSBwYXJlbnQgY29udGFpbmVyIHdpZHRoXG4gICAgICB2YXIgd2lkdGggPSAkKHRoaXMpLnBhcmVudCgpLndpZHRoKCk7XG4gICAgICB3aWR0aCA9IHdpZHRoIC0gMjtcbiAgICAgICQodGhpcykud2lkdGgod2lkdGgpLmhlaWdodCh3aWR0aCAqICQodGhpcykuZGF0YShcInJhdGlvXCIpKTtcbiAgICB9KTtcbiAgfVxuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gU29sdXRpb24gZnJvbSBodHRwczovL2Jlbm1hcnNoYWxsLm1lL3Jlc3BvbnNpdmUtaWZyYW1lcy9cblxuICAgIC8vIEZpbmQgYWxsIGlmcmFtZXNcbiAgICB2YXIgJGlmcmFtZXMgPSAkKFwiaWZyYW1lXCIpO1xuXG4gICAgLy8gRmluZCBhbmQgc2F2ZSB0aGUgYXNwZWN0IHJhdGlvIGZvciBhbGwgaWZyYW1lc1xuICAgICRpZnJhbWVzLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgIC8vIFNldCBhIGZhbGxiYWNrIHJhdGlvIHdoZW4gd2lkdGggYW5kIGhlaWdodCBhcmUgbm90IHNwZWNpZmllZFxuICAgICAgJCh0aGlzKS5kYXRhKFwicmF0aW9cIiwgLjU2Mik7XG5cbiAgICAgIC8vIEluIGNhc2UgdGhlcmUgaXMgYSBweCB1bml0LCB0cmltIGl0XG4gICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VGbG9hdCh0aGlzLmhlaWdodCk7XG4gICAgICB2YXIgd2lkdGggPSBwYXJzZUZsb2F0KHRoaXMud2lkdGgpO1xuXG4gICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2ttc2VtYmVkJykpIHtcbiAgICAgICAgLy8gV2UgY2FuJ3QgYXNzdW1lIGlmcmFtZXMgd2lsbCBiZSB1c2FibGUgc21hbGxlciB0aGFuIHRoZSBkaW1lbnNpb25zIHByb3ZpZGVkXG4gICAgICAgIC8vIFNvIHNldCBhIG1pbiBzaXplIGFuZCBhbGxvdyBvdmVyZmxvd1xuICAgICAgICB2YXIgc3R5bGVzID0ge1xuICAgICAgICAgIG1pbkhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgIG1pbldpZHRoOiB3aWR0aFxuICAgICAgICB9O1xuXG4gICAgICAgICQodGhpcykuY3NzKHN0eWxlcyk7XG5cbiAgICAgICAgJCh0aGlzKS53cmFwKFwiPGRpdiBjbGFzcz0naWZyYW1lLW92ZXJmbG93Jz48L2Rpdj5cIik7XG4gICAgICB9XG5cbiAgICAgIGlmICgkLmlzTnVtZXJpYyhoZWlnaHQpICYmICQuaXNOdW1lcmljKHdpZHRoKSkge1xuICAgICAgICAvLyBTZXQgcmF0aW8gZGF0YSBhbmQgcmVtb3ZlIGhlaWdodCBhbmQgd2lkdGggYXR0cmlidXRlc1xuICAgICAgICAkKHRoaXMpLmRhdGEoXCJyYXRpb1wiLCBoZWlnaHQgLyB3aWR0aCkucmVtb3ZlQXR0cihcIndpZHRoXCIpLnJlbW92ZUF0dHIoXCJoZWlnaHRcIik7XG4gICAgICB9XG5cbiAgICB9KTtcblxuICAgIGlmcmFtZVJlc2l6ZSgpO1xuXG4gICAgLy8gUmVzaXplIHRoZSBpZnJhbWVzIHdoZW4gdGhlIHdpbmRvdyBpcyByZXNpemVkXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgIGlmICgkKCdpZnJhbWUnKS5sZW5ndGgpIHtcbiAgICAgICAgaWZyYW1lUmVzaXplKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfSk7XG5cbiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCgnaWZyYW1lJykubGVuZ3RoKSB7XG4gICAgICBpZnJhbWVSZXNpemUoKTtcbiAgICB9XG4gIH07XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICBmdW5jdGlvbiBpbWFnZUNvbnRhaW5lcigpIHtcbiAgICAkKCcubWVkaWEtZWxlbWVudC1jb250YWluZXIsIC5maWxlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzY3JlZW5JbWFnZSA9ICQodGhpcykuZmluZCgnaW1nW2NsYXNzIT1maWxlLWljb25dJyk7XG5cbiAgICAgIGlmKCh0eXBlb2Ygc2NyZWVuSW1hZ2UgIT0gJ3VuZGVmaW5lZCcpICYmICh0eXBlb2Ygc2NyZWVuSW1hZ2VbMF0gIT0gJ3VuZGVmaW5lZCcpKSB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIG5ldyBvZmZzY3JlZW4gaW1hZ2UgdG8gdGVzdFxuICAgICAgICB2YXIgdGhlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhlSW1hZ2Uuc3JjID0gc2NyZWVuSW1hZ2UuYXR0cihcInNyY1wiKTtcblxuICAgICAgICAvLyBHZXQgYWNjdXJhdGUgbWVhc3VyZW1lbnRzIGZyb20gdGhhdC5cbiAgICAgICAgdmFyIGltYWdlV2lkdGggPSB0aGVJbWFnZS53aWR0aDtcbiAgICAgICAgdmFyIGltYWdlSGVpZ2h0ID0gdGhlSW1hZ2UuaGVpZ2h0O1xuXG4gICAgICAgIC8vIEdldCBzY3JlZW4gaW1hZ2Ugd2lkdGggcHJvcGVydHlcbiAgICAgICAgdmFyIHNjcmVlbkltYWdlV2lkdGggPSBzY3JlZW5JbWFnZS5hdHRyKFwid2lkdGhcIik7XG5cbiAgICAgICAgLy8gVXNlIHRoZSBzY3JlZW4gaW1hZ2Ugd2lkdGggcHJvcGVydHkgaWYgaXQgaXMgbGVzcyB0aGFuIHRoZSBhY3R1YWwgd2lkdGhcbiAgICAgICAgaWYoc2NyZWVuSW1hZ2VXaWR0aCAhPSAnMCcgJiYgc2NyZWVuSW1hZ2VXaWR0aCA8IGltYWdlV2lkdGgpIHtcbiAgICAgICAgICBpbWFnZVdpZHRoID0gc2NyZWVuSW1hZ2VXaWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGltYWdlV2lkdGggIT0gJzAnKSB7XG4gICAgICAgICAgJCh0aGlzKS5jc3MoIFwid2lkdGhcIiwgaW1hZ2VXaWR0aCArICdweCcgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIC8vIFNpemUgaW1hZ2UgY29udGFpbmVyIGxvYWRlZCB2aWEgQWpheFxuICBEcnVwYWwuYmVoYXZpb3JzLmltYWdlQ29udGFpbmVyID0ge1xuICBhdHRhY2g6IGZ1bmN0aW9uIChjb250ZXh0LCBzZXR0aW5ncykge1xuICAgIGltYWdlQ29udGFpbmVyKCk7XG4gIH19O1xuXG4gIC8vIFdhaXQgZm9yIGltYWdlcyB0byBsb2FkIHRvIHJ1blxuICAkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcbiAgICBpbWFnZUNvbnRhaW5lcigpO1xuICB9KTtcblxufSkoalF1ZXJ5KTsiLCJcbihmdW5jdGlvbigkKXskLmZuLmNvbHVtbml6ZT1mdW5jdGlvbihvcHRpb25zKXt0aGlzLmNvbHM9W107dGhpcy5vZmZzZXQ9MDt0aGlzLmJlZm9yZT1bXTt0aGlzLmxhc3RPdGhlcj0wO3RoaXMucHJldk1heD0wO3RoaXMuZGVidWc9MDt0aGlzLnNldENvbHVtblN0YXJ0PW51bGw7dGhpcy5lbGlwc2lzVGV4dD0nJzt2YXIgZGVmYXVsdHM9e3dpZHRoOjQwMCxjb2x1bW5zOmZhbHNlLGJ1aWxkT25jZTpmYWxzZSxvdmVyZmxvdzpmYWxzZSxkb25lRnVuYzpmdW5jdGlvbigpe30sdGFyZ2V0OmZhbHNlLGlnbm9yZUltYWdlTG9hZGluZzp0cnVlLGNvbHVtbkZsb2F0OlwibGVmdFwiLGxhc3ROZXZlclRhbGxlc3Q6ZmFsc2UsYWNjdXJhY3k6ZmFsc2UscHJlY2lzZTpmYWxzZSxtYW51YWxCcmVha3M6ZmFsc2UsY3NzQ2xhc3NQcmVmaXg6XCJcIixlbGlwc2lzVGV4dDonLi4uJyxkZWJ1ZzowfTtvcHRpb25zPSQuZXh0ZW5kKGRlZmF1bHRzLG9wdGlvbnMpO2lmKHR5cGVvZihvcHRpb25zLndpZHRoKT09XCJzdHJpbmdcIil7b3B0aW9ucy53aWR0aD1wYXJzZUludChvcHRpb25zLndpZHRoLDEwKTtpZihpc05hTihvcHRpb25zLndpZHRoKSl7b3B0aW9ucy53aWR0aD1kZWZhdWx0cy53aWR0aDt9fVxuICAgIGlmKHR5cGVvZiBvcHRpb25zLnNldENvbHVtblN0YXJ0PT0nZnVuY3Rpb24nKXt0aGlzLnNldENvbHVtblN0YXJ0PW9wdGlvbnMuc2V0Q29sdW1uU3RhcnQ7fVxuICAgIGlmKHR5cGVvZiBvcHRpb25zLmVsaXBzaXNUZXh0PT0nc3RyaW5nJyl7dGhpcy5lbGlwc2lzVGV4dD1vcHRpb25zLmVsaXBzaXNUZXh0O31cbiAgICBpZihvcHRpb25zLmRlYnVnKXt0aGlzLmRlYnVnPW9wdGlvbnMuZGVidWc7fVxuICAgIGlmKCFvcHRpb25zLnNldFdpZHRoKXtpZihvcHRpb25zLnByZWNpc2Upe29wdGlvbnMuc2V0V2lkdGg9ZnVuY3Rpb24obnVtQ29scyl7cmV0dXJuIDEwMC9udW1Db2xzO307fWVsc2V7b3B0aW9ucy5zZXRXaWR0aD1mdW5jdGlvbihudW1Db2xzKXtyZXR1cm4gTWF0aC5mbG9vcigxMDAvbnVtQ29scyk7fTt9fVxuICAgIGZ1bmN0aW9uIGFwcGVuZFNhZmUoJHRhcmdldCwkZWxlbSl7dHJ5eyR0YXJnZXQuYXBwZW5kKCRlbGVtKTt9Y2F0Y2goZSl7JHRhcmdldFswXS5hcHBlbmRDaGlsZCgkZWxlbVswXSk7fX1cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyICRpbkJveD1vcHRpb25zLnRhcmdldD8kKG9wdGlvbnMudGFyZ2V0KTokKHRoaXMpO3ZhciBtYXhIZWlnaHQ9JCh0aGlzKS5oZWlnaHQoKTt2YXIgJGNhY2hlPSQoJzxkaXY+PC9kaXY+Jyk7dmFyIGxhc3RXaWR0aD0wO3ZhciBjb2x1bW5pemluZz1mYWxzZTt2YXIgbWFudWFsQnJlYWtzPW9wdGlvbnMubWFudWFsQnJlYWtzO3ZhciBjc3NDbGFzc1ByZWZpeD1kZWZhdWx0cy5jc3NDbGFzc1ByZWZpeDtpZih0eXBlb2Yob3B0aW9ucy5jc3NDbGFzc1ByZWZpeCk9PVwic3RyaW5nXCIpe2Nzc0NsYXNzUHJlZml4PW9wdGlvbnMuY3NzQ2xhc3NQcmVmaXg7fVxuICAgICAgICB2YXIgYWRqdXN0bWVudD0wO2FwcGVuZFNhZmUoJGNhY2hlLCQodGhpcykuY29udGVudHMoKS5jbG9uZSh0cnVlKSk7aWYoIW9wdGlvbnMuaWdub3JlSW1hZ2VMb2FkaW5nJiYhb3B0aW9ucy50YXJnZXQpe2lmKCEkaW5Cb3guZGF0YShcImltYWdlTG9hZGVkXCIpKXskaW5Cb3guZGF0YShcImltYWdlTG9hZGVkXCIsdHJ1ZSk7aWYoJCh0aGlzKS5maW5kKFwiaW1nXCIpLmxlbmd0aD4wKXt2YXIgZnVuYz1mdW5jdGlvbigkaW5Cb3gsJGNhY2hlKXtyZXR1cm4gZnVuY3Rpb24oKXtpZighJGluQm94LmRhdGEoXCJmaXJzdEltYWdlTG9hZGVkXCIpKXskaW5Cb3guZGF0YShcImZpcnN0SW1hZ2VMb2FkZWRcIixcInRydWVcIik7YXBwZW5kU2FmZSgkaW5Cb3guZW1wdHkoKSwkY2FjaGUuY2hpbGRyZW4oKS5jbG9uZSh0cnVlKSk7JGluQm94LmNvbHVtbml6ZShvcHRpb25zKTt9fTt9KCQodGhpcyksJGNhY2hlKTskKHRoaXMpLmZpbmQoXCJpbWdcIikub25lKFwibG9hZFwiLGZ1bmMpOyQodGhpcykuZmluZChcImltZ1wiKS5vbmUoXCJhYm9ydFwiLGZ1bmMpO3JldHVybjt9fX1cbiAgICAgICAgJGluQm94LmVtcHR5KCk7Y29sdW1uaXplSXQoKTtpZighb3B0aW9ucy5idWlsZE9uY2UpeyQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtpZighb3B0aW9ucy5idWlsZE9uY2Upe2lmKCRpbkJveC5kYXRhKFwidGltZW91dFwiKSl7Y2xlYXJUaW1lb3V0KCRpbkJveC5kYXRhKFwidGltZW91dFwiKSk7fVxuICAgICAgICAgICAgJGluQm94LmRhdGEoXCJ0aW1lb3V0XCIsc2V0VGltZW91dChjb2x1bW5pemVJdCwyMDApKTt9fSk7fVxuICAgICAgICBmdW5jdGlvbiBwcmVmaXhUaGVDbGFzc05hbWUoY2xhc3NOYW1lLHdpdGhEb3Qpe3ZhciBkb3Q9d2l0aERvdD9cIi5cIjpcIlwiO2lmKGNzc0NsYXNzUHJlZml4Lmxlbmd0aCl7cmV0dXJuIGRvdCtjc3NDbGFzc1ByZWZpeCtcIi1cIitjbGFzc05hbWU7fVxuICAgICAgICAgICAgcmV0dXJuIGRvdCtjbGFzc05hbWU7fVxuICAgICAgICBmdW5jdGlvbiBjb2x1bW5pemUoJHB1dEluSGVyZSwkcHVsbE91dEhlcmUsJHBhcmVudENvbHVtbix0YXJnZXRIZWlnaHQpe3doaWxlKChtYW51YWxCcmVha3N8fCRwYXJlbnRDb2x1bW4uaGVpZ2h0KCk8dGFyZ2V0SGVpZ2h0KSYmJHB1bGxPdXRIZXJlWzBdLmNoaWxkTm9kZXMubGVuZ3RoKXt2YXIgbm9kZT0kcHVsbE91dEhlcmVbMF0uY2hpbGROb2Rlc1swXTtpZigkKG5vZGUpLmZpbmQocHJlZml4VGhlQ2xhc3NOYW1lKFwiY29sdW1uYnJlYWtcIix0cnVlKSkubGVuZ3RoKXtyZXR1cm47fVxuICAgICAgICAgICAgaWYoJChub2RlKS5oYXNDbGFzcyhwcmVmaXhUaGVDbGFzc05hbWUoXCJjb2x1bW5icmVha1wiKSkpe3JldHVybjt9XG4gICAgICAgICAgICBhcHBlbmRTYWZlKCRwdXRJbkhlcmUsJChub2RlKSk7fVxuICAgICAgICAgICAgaWYoJHB1dEluSGVyZVswXS5jaGlsZE5vZGVzLmxlbmd0aD09PTApcmV0dXJuO3ZhciBraWRzPSRwdXRJbkhlcmVbMF0uY2hpbGROb2Rlczt2YXIgbGFzdEtpZD1raWRzW2tpZHMubGVuZ3RoLTFdOyRwdXRJbkhlcmVbMF0ucmVtb3ZlQ2hpbGQobGFzdEtpZCk7dmFyICRpdGVtPSQobGFzdEtpZCk7aWYoJGl0ZW1bMF0ubm9kZVR5cGU9PTMpe3ZhciBvVGV4dD0kaXRlbVswXS5ub2RlVmFsdWU7dmFyIGNvdW50ZXIyPW9wdGlvbnMud2lkdGgvMTg7aWYob3B0aW9ucy5hY2N1cmFjeSlcbiAgICAgICAgICAgICAgICBjb3VudGVyMj1vcHRpb25zLmFjY3VyYWN5O3ZhciBjb2x1bW5UZXh0O3ZhciBsYXRlc3RUZXh0Tm9kZT1udWxsO3doaWxlKCRwYXJlbnRDb2x1bW4uaGVpZ2h0KCk8dGFyZ2V0SGVpZ2h0JiZvVGV4dC5sZW5ndGgpe3ZhciBpbmRleE9mU3BhY2U9b1RleHQuaW5kZXhPZignICcsY291bnRlcjIpO2lmKGluZGV4T2ZTcGFjZSE9LTEpe2NvbHVtblRleHQ9b1RleHQuc3Vic3RyaW5nKDAsaW5kZXhPZlNwYWNlKTt9ZWxzZXtjb2x1bW5UZXh0PW9UZXh0O31cbiAgICAgICAgICAgICAgICBsYXRlc3RUZXh0Tm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb2x1bW5UZXh0KTthcHBlbmRTYWZlKCRwdXRJbkhlcmUsJChsYXRlc3RUZXh0Tm9kZSkpO2lmKG9UZXh0Lmxlbmd0aD5jb3VudGVyMiYmaW5kZXhPZlNwYWNlIT0tMSl7b1RleHQ9b1RleHQuc3Vic3RyaW5nKGluZGV4T2ZTcGFjZSk7fWVsc2V7b1RleHQ9XCJcIjt9fVxuICAgICAgICAgICAgICAgIGlmKCRwYXJlbnRDb2x1bW4uaGVpZ2h0KCk+PXRhcmdldEhlaWdodCYmbGF0ZXN0VGV4dE5vZGUhPT1udWxsKXskcHV0SW5IZXJlWzBdLnJlbW92ZUNoaWxkKGxhdGVzdFRleHROb2RlKTtvVGV4dD1sYXRlc3RUZXh0Tm9kZS5ub2RlVmFsdWUrb1RleHQ7fVxuICAgICAgICAgICAgICAgIGlmKG9UZXh0Lmxlbmd0aCl7JGl0ZW1bMF0ubm9kZVZhbHVlPW9UZXh0O31lbHNle3JldHVybiBmYWxzZTt9fVxuICAgICAgICAgICAgaWYoJHB1bGxPdXRIZXJlLmNvbnRlbnRzKCkubGVuZ3RoKXskcHVsbE91dEhlcmUucHJlcGVuZCgkaXRlbSk7fWVsc2V7YXBwZW5kU2FmZSgkcHVsbE91dEhlcmUsJGl0ZW0pO31cbiAgICAgICAgICAgIHJldHVybiAkaXRlbVswXS5ub2RlVHlwZT09Mzt9XG4gICAgICAgIGZ1bmN0aW9uIHNwbGl0KCRwdXRJbkhlcmUsJHB1bGxPdXRIZXJlLCRwYXJlbnRDb2x1bW4sdGFyZ2V0SGVpZ2h0KXtpZigkcHV0SW5IZXJlLmNvbnRlbnRzKFwiOmxhc3RcIikuZmluZChwcmVmaXhUaGVDbGFzc05hbWUoXCJjb2x1bW5icmVha1wiLHRydWUpKS5sZW5ndGgpe3JldHVybjt9XG4gICAgICAgICAgICBpZigkcHV0SW5IZXJlLmNvbnRlbnRzKFwiOmxhc3RcIikuaGFzQ2xhc3MocHJlZml4VGhlQ2xhc3NOYW1lKFwiY29sdW1uYnJlYWtcIikpKXtyZXR1cm47fVxuICAgICAgICAgICAgaWYoJHB1bGxPdXRIZXJlLmNvbnRlbnRzKCkubGVuZ3RoKXt2YXIgJGNsb25lTWU9JHB1bGxPdXRIZXJlLmNvbnRlbnRzKFwiOmZpcnN0XCIpO2lmKHR5cGVvZiAkY2xvbmVNZS5nZXQoMCk9PSd1bmRlZmluZWQnfHwkY2xvbmVNZS5nZXQoMCkubm9kZVR5cGUhPTEpcmV0dXJuO3ZhciAkY2xvbmU9JGNsb25lTWUuY2xvbmUodHJ1ZSk7aWYoJGNsb25lTWUuaGFzQ2xhc3MocHJlZml4VGhlQ2xhc3NOYW1lKFwiY29sdW1uYnJlYWtcIikpKXthcHBlbmRTYWZlKCRwdXRJbkhlcmUsJGNsb25lKTskY2xvbmVNZS5yZW1vdmUoKTt9ZWxzZSBpZihtYW51YWxCcmVha3Mpe2FwcGVuZFNhZmUoJHB1dEluSGVyZSwkY2xvbmUpOyRjbG9uZU1lLnJlbW92ZSgpO31lbHNlIGlmKCRjbG9uZS5nZXQoMCkubm9kZVR5cGU9PTEmJiEkY2xvbmUuaGFzQ2xhc3MocHJlZml4VGhlQ2xhc3NOYW1lKFwiZG9udGVuZFwiKSkpe2FwcGVuZFNhZmUoJHB1dEluSGVyZSwkY2xvbmUpO2lmKCRjbG9uZS5pcyhcImltZ1wiKSYmJHBhcmVudENvbHVtbi5oZWlnaHQoKTx0YXJnZXRIZWlnaHQrMjApeyRjbG9uZU1lLnJlbW92ZSgpO31lbHNlIGlmKCRjbG9uZU1lLmhhc0NsYXNzKHByZWZpeFRoZUNsYXNzTmFtZShcImRvbnRzcGxpdFwiKSkmJiRwYXJlbnRDb2x1bW4uaGVpZ2h0KCk8dGFyZ2V0SGVpZ2h0KzIwKXskY2xvbmVNZS5yZW1vdmUoKTt9ZWxzZSBpZigkY2xvbmUuaXMoXCJpbWdcIil8fCRjbG9uZU1lLmhhc0NsYXNzKHByZWZpeFRoZUNsYXNzTmFtZShcImRvbnRzcGxpdFwiKSkpeyRjbG9uZS5yZW1vdmUoKTt9ZWxzZXskY2xvbmUuZW1wdHkoKTtpZighY29sdW1uaXplKCRjbG9uZSwkY2xvbmVNZSwkcGFyZW50Q29sdW1uLHRhcmdldEhlaWdodCkpeyRjbG9uZU1lLmFkZENsYXNzKHByZWZpeFRoZUNsYXNzTmFtZShcInNwbGl0XCIpKTtpZigkY2xvbmVNZS5nZXQoMCkudGFnTmFtZT09J09MJyl7dmFyIHN0YXJ0V2l0aD0kY2xvbmUuZ2V0KDApLmNoaWxkRWxlbWVudENvdW50KyRjbG9uZS5nZXQoMCkuc3RhcnQ7JGNsb25lTWUuYXR0cignc3RhcnQnLHN0YXJ0V2l0aCsxKTt9XG4gICAgICAgICAgICAgICAgaWYoJGNsb25lTWUuY2hpbGRyZW4oKS5sZW5ndGgpe3NwbGl0KCRjbG9uZSwkY2xvbmVNZSwkcGFyZW50Q29sdW1uLHRhcmdldEhlaWdodCk7fX1lbHNleyRjbG9uZU1lLmFkZENsYXNzKHByZWZpeFRoZUNsYXNzTmFtZShcInNwbGl0XCIpKTt9XG4gICAgICAgICAgICAgICAgaWYoJGNsb25lLmdldCgwKS5jaGlsZE5vZGVzLmxlbmd0aD09PTApeyRjbG9uZS5yZW1vdmUoKTskY2xvbmVNZS5yZW1vdmVDbGFzcyhwcmVmaXhUaGVDbGFzc05hbWUoXCJzcGxpdFwiKSk7fWVsc2UgaWYoJGNsb25lLmdldCgwKS5jaGlsZE5vZGVzLmxlbmd0aD09MSl7dmFyIG9ubHlOb2RlPSRjbG9uZS5nZXQoMCkuY2hpbGROb2Rlc1swXTtpZihvbmx5Tm9kZS5ub2RlVHlwZT09Myl7dmFyIHdoaXRlc3BhY2U9L1xccy87dmFyIHN0cj1vbmx5Tm9kZS5ub2RlVmFsdWU7aWYod2hpdGVzcGFjZS50ZXN0KHN0cikpeyRjbG9uZS5yZW1vdmUoKTskY2xvbmVNZS5yZW1vdmVDbGFzcyhwcmVmaXhUaGVDbGFzc05hbWUoXCJzcGxpdFwiKSk7fX19fX19fVxuICAgICAgICBmdW5jdGlvbiBzaW5nbGVDb2x1bW5pemVJdCgpe2lmKCRpbkJveC5kYXRhKFwiY29sdW1uaXplZFwiKSYmJGluQm94LmNoaWxkcmVuKCkubGVuZ3RoPT0xKXtyZXR1cm47fVxuICAgICAgICAgICAgJGluQm94LmRhdGEoXCJjb2x1bW5pemVkXCIsdHJ1ZSk7JGluQm94LmRhdGEoXCJjb2x1bW5pemluZ1wiLHRydWUpOyRpbkJveC5lbXB0eSgpOyRpbkJveC5hcHBlbmQoJChcIjxkaXYgY2xhc3M9J1wiXG4gICAgICAgICAgICAgICAgK3ByZWZpeFRoZUNsYXNzTmFtZShcImZpcnN0XCIpK1wiIFwiXG4gICAgICAgICAgICAgICAgK3ByZWZpeFRoZUNsYXNzTmFtZShcImxhc3RcIikrXCIgXCJcbiAgICAgICAgICAgICAgICArcHJlZml4VGhlQ2xhc3NOYW1lKFwiY29sdW1uXCIpK1wiIFwiXG4gICAgICAgICAgICAgICAgK1wiJyBzdHlsZT0nd2lkdGg6MTAwJTsgZmxvYXQ6IFwiK29wdGlvbnMuY29sdW1uRmxvYXQrXCI7Jz48L2Rpdj5cIikpOyRjb2w9JGluQm94LmNoaWxkcmVuKCkuZXEoJGluQm94LmNoaWxkcmVuKCkubGVuZ3RoLTEpOyRkZXN0cm95YWJsZT0kY2FjaGUuY2xvbmUodHJ1ZSk7aWYob3B0aW9ucy5vdmVyZmxvdyl7dGFyZ2V0SGVpZ2h0PW9wdGlvbnMub3ZlcmZsb3cuaGVpZ2h0O2NvbHVtbml6ZSgkY29sLCRkZXN0cm95YWJsZSwkY29sLHRhcmdldEhlaWdodCk7aWYoISRkZXN0cm95YWJsZS5jb250ZW50cygpLmZpbmQoXCI6Zmlyc3QtY2hpbGRcIikuaGFzQ2xhc3MocHJlZml4VGhlQ2xhc3NOYW1lKFwiZG9udGVuZFwiKSkpe3NwbGl0KCRjb2wsJGRlc3Ryb3lhYmxlLCRjb2wsdGFyZ2V0SGVpZ2h0KTt9XG4gICAgICAgICAgICAgICAgd2hpbGUoJGNvbC5jb250ZW50cyhcIjpsYXN0XCIpLmxlbmd0aCYmY2hlY2tEb250RW5kQ29sdW1uKCRjb2wuY29udGVudHMoXCI6bGFzdFwiKS5nZXQoMCkpKXt2YXIgJGxhc3RLaWQ9JGNvbC5jb250ZW50cyhcIjpsYXN0XCIpOyRsYXN0S2lkLnJlbW92ZSgpOyRkZXN0cm95YWJsZS5wcmVwZW5kKCRsYXN0S2lkKTt9XG4gICAgICAgICAgICAgICAgdmFyIGh0bWw9XCJcIjt2YXIgZGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO3doaWxlKCRkZXN0cm95YWJsZVswXS5jaGlsZE5vZGVzLmxlbmd0aD4wKXt2YXIga2lkPSRkZXN0cm95YWJsZVswXS5jaGlsZE5vZGVzWzBdO2lmKGtpZC5hdHRyaWJ1dGVzKXtmb3IodmFyIGk9MDtpPGtpZC5hdHRyaWJ1dGVzLmxlbmd0aDtpKyspe2lmKGtpZC5hdHRyaWJ1dGVzW2ldLm5vZGVOYW1lLmluZGV4T2YoXCJqUXVlcnlcIik9PT0wKXtraWQucmVtb3ZlQXR0cmlidXRlKGtpZC5hdHRyaWJ1dGVzW2ldLm5vZGVOYW1lKTt9fX1cbiAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTD1cIlwiO2Rpdi5hcHBlbmRDaGlsZCgkZGVzdHJveWFibGVbMF0uY2hpbGROb2Rlc1swXSk7aHRtbCs9ZGl2LmlubmVySFRNTDt9XG4gICAgICAgICAgICAgICAgdmFyIG92ZXJmbG93PSQob3B0aW9ucy5vdmVyZmxvdy5pZClbMF07b3ZlcmZsb3cuaW5uZXJIVE1MPWh0bWw7fWVsc2V7YXBwZW5kU2FmZSgkY29sLCRkZXN0cm95YWJsZS5jb250ZW50cygpKTt9XG4gICAgICAgICAgICAkaW5Cb3guZGF0YShcImNvbHVtbml6aW5nXCIsZmFsc2UpO2lmKG9wdGlvbnMub3ZlcmZsb3cmJm9wdGlvbnMub3ZlcmZsb3cuZG9uZUZ1bmMpe29wdGlvbnMub3ZlcmZsb3cuZG9uZUZ1bmMoKTt9XG4gICAgICAgICAgICBvcHRpb25zLmRvbmVGdW5jKCk7fVxuICAgICAgICBmdW5jdGlvbiBjaGVja0RvbnRFbmRDb2x1bW4oZG9tKXtpZihkb20ubm9kZVR5cGU9PTMpe2lmKC9eXFxzKyQvLnRlc3QoZG9tLm5vZGVWYWx1ZSkpe2lmKCFkb20ucHJldmlvdXNTaWJsaW5nKXJldHVybiBmYWxzZTtyZXR1cm4gY2hlY2tEb250RW5kQ29sdW1uKGRvbS5wcmV2aW91c1NpYmxpbmcpO31cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTt9XG4gICAgICAgICAgICBpZihkb20ubm9kZVR5cGUhPTEpcmV0dXJuIGZhbHNlO2lmKCQoZG9tKS5oYXNDbGFzcyhwcmVmaXhUaGVDbGFzc05hbWUoXCJkb250ZW5kXCIpKSlyZXR1cm4gdHJ1ZTtpZihkb20uY2hpbGROb2Rlcy5sZW5ndGg9PT0wKXJldHVybiBmYWxzZTtyZXR1cm4gY2hlY2tEb250RW5kQ29sdW1uKGRvbS5jaGlsZE5vZGVzW2RvbS5jaGlsZE5vZGVzLmxlbmd0aC0xXSk7fVxuICAgICAgICBmdW5jdGlvbiBjb2x1bW5pemVJdCgpe2FkanVzdG1lbnQ9MDtpZihsYXN0V2lkdGg9PSRpbkJveC53aWR0aCgpKXJldHVybjtsYXN0V2lkdGg9JGluQm94LndpZHRoKCk7dmFyIG51bUNvbHM9TWF0aC5yb3VuZCgkaW5Cb3gud2lkdGgoKS9vcHRpb25zLndpZHRoKTt2YXIgb3B0aW9uV2lkdGg9b3B0aW9ucy53aWR0aDt2YXIgb3B0aW9uSGVpZ2h0PW9wdGlvbnMuaGVpZ2h0O2lmKG9wdGlvbnMuY29sdW1ucyludW1Db2xzPW9wdGlvbnMuY29sdW1ucztpZihtYW51YWxCcmVha3Mpe251bUNvbHM9JGNhY2hlLmZpbmQocHJlZml4VGhlQ2xhc3NOYW1lKFwiY29sdW1uYnJlYWtcIix0cnVlKSkubGVuZ3RoKzE7b3B0aW9uV2lkdGg9ZmFsc2U7fVxuICAgICAgICAgICAgaWYobnVtQ29sczw9MSl7cmV0dXJuIHNpbmdsZUNvbHVtbml6ZUl0KCk7fVxuICAgICAgICAgICAgaWYoJGluQm94LmRhdGEoXCJjb2x1bW5pemluZ1wiKSlyZXR1cm47JGluQm94LmRhdGEoXCJjb2x1bW5pemVkXCIsdHJ1ZSk7JGluQm94LmRhdGEoXCJjb2x1bW5pemluZ1wiLHRydWUpOyRpbkJveC5lbXB0eSgpOyRpbkJveC5hcHBlbmQoJChcIjxkaXYgc3R5bGU9J3dpZHRoOlwiK29wdGlvbnMuc2V0V2lkdGgobnVtQ29scykrXCIlOyBmbG9hdDogXCIrb3B0aW9ucy5jb2x1bW5GbG9hdCtcIjsnPjwvZGl2PlwiKSk7JGNvbD0kaW5Cb3guY2hpbGRyZW4oXCI6bGFzdFwiKTthcHBlbmRTYWZlKCRjb2wsJGNhY2hlLmNsb25lKCkpO21heEhlaWdodD0kY29sLmhlaWdodCgpOyRpbkJveC5lbXB0eSgpO3ZhciB0YXJnZXRIZWlnaHQ9bWF4SGVpZ2h0L251bUNvbHM7dmFyIGZpcnN0VGltZT10cnVlO3ZhciBtYXhMb29wcz0zO3ZhciBzY3JvbGxIb3Jpem9udGFsbHk9ZmFsc2U7aWYob3B0aW9ucy5vdmVyZmxvdyl7bWF4TG9vcHM9MTt0YXJnZXRIZWlnaHQ9b3B0aW9ucy5vdmVyZmxvdy5oZWlnaHQ7fWVsc2UgaWYob3B0aW9uSGVpZ2h0JiZvcHRpb25XaWR0aCl7bWF4TG9vcHM9MTt0YXJnZXRIZWlnaHQ9b3B0aW9uSGVpZ2h0O3Njcm9sbEhvcml6b250YWxseT10cnVlO31cbiAgICAgICAgICAgIGZvcih2YXIgbG9vcENvdW50PTA7bG9vcENvdW50PG1heExvb3BzJiZsb29wQ291bnQ8MjA7bG9vcENvdW50KyspeyRpbkJveC5lbXB0eSgpO3ZhciAkZGVzdHJveWFibGUsY2xhc3NOYW1lLCRjb2wsJGxhc3RLaWQ7dHJ5eyRkZXN0cm95YWJsZT0kY2FjaGUuY2xvbmUodHJ1ZSk7fWNhdGNoKGUpeyRkZXN0cm95YWJsZT0kY2FjaGUuY2xvbmUoKTt9XG4gICAgICAgICAgICAgICAgJGRlc3Ryb3lhYmxlLmNzcyhcInZpc2liaWxpdHlcIixcImhpZGRlblwiKTtmb3IodmFyIGk9MDtpPG51bUNvbHM7aSsrKXtjbGFzc05hbWU9KGk9PT0wKT9wcmVmaXhUaGVDbGFzc05hbWUoXCJmaXJzdFwiKTpcIlwiO2NsYXNzTmFtZSs9XCIgXCIrcHJlZml4VGhlQ2xhc3NOYW1lKFwiY29sdW1uXCIpO2NsYXNzTmFtZT0oaT09bnVtQ29scy0xKT8ocHJlZml4VGhlQ2xhc3NOYW1lKFwibGFzdFwiKStcIiBcIitjbGFzc05hbWUpOmNsYXNzTmFtZTskaW5Cb3guYXBwZW5kKCQoXCI8ZGl2IGNsYXNzPSdcIitjbGFzc05hbWUrXCInIHN0eWxlPSd3aWR0aDpcIitvcHRpb25zLnNldFdpZHRoKG51bUNvbHMpK1wiJTsgZmxvYXQ6IFwiK29wdGlvbnMuY29sdW1uRmxvYXQrXCI7Jz48L2Rpdj5cIikpO31cbiAgICAgICAgICAgICAgICBpPTA7d2hpbGUoaTxudW1Db2xzLShvcHRpb25zLm92ZXJmbG93PzA6MSl8fHNjcm9sbEhvcml6b250YWxseSYmJGRlc3Ryb3lhYmxlLmNvbnRlbnRzKCkubGVuZ3RoKXtpZigkaW5Cb3guY2hpbGRyZW4oKS5sZW5ndGg8PWkpeyRpbkJveC5hcHBlbmQoJChcIjxkaXYgY2xhc3M9J1wiK2NsYXNzTmFtZStcIicgc3R5bGU9J3dpZHRoOlwiK29wdGlvbnMuc2V0V2lkdGgobnVtQ29scykrXCIlOyBmbG9hdDogXCIrb3B0aW9ucy5jb2x1bW5GbG9hdCtcIjsnPjwvZGl2PlwiKSk7fVxuICAgICAgICAgICAgICAgICAgICAkY29sPSRpbkJveC5jaGlsZHJlbigpLmVxKGkpO2lmKHNjcm9sbEhvcml6b250YWxseSl7JGNvbC53aWR0aChvcHRpb25XaWR0aCtcInB4XCIpO31cbiAgICAgICAgICAgICAgICAgICAgY29sdW1uaXplKCRjb2wsJGRlc3Ryb3lhYmxlLCRjb2wsdGFyZ2V0SGVpZ2h0KTtzcGxpdCgkY29sLCRkZXN0cm95YWJsZSwkY29sLHRhcmdldEhlaWdodCk7d2hpbGUoJGNvbC5jb250ZW50cyhcIjpsYXN0XCIpLmxlbmd0aCYmY2hlY2tEb250RW5kQ29sdW1uKCRjb2wuY29udGVudHMoXCI6bGFzdFwiKS5nZXQoMCkpKXskbGFzdEtpZD0kY29sLmNvbnRlbnRzKFwiOmxhc3RcIik7JGxhc3RLaWQucmVtb3ZlKCk7JGRlc3Ryb3lhYmxlLnByZXBlbmQoJGxhc3RLaWQpO31cbiAgICAgICAgICAgICAgICAgICAgaSsrO2lmKCRjb2wuY29udGVudHMoKS5sZW5ndGg9PT0wJiYkZGVzdHJveWFibGUuY29udGVudHMoKS5sZW5ndGgpeyRjb2wuYXBwZW5kKCRkZXN0cm95YWJsZS5jb250ZW50cyhcIjpmaXJzdFwiKSk7fWVsc2UgaWYoaT09bnVtQ29scy0ob3B0aW9ucy5vdmVyZmxvdz8wOjEpJiYhb3B0aW9ucy5vdmVyZmxvdyl7aWYoJGRlc3Ryb3lhYmxlLmZpbmQocHJlZml4VGhlQ2xhc3NOYW1lKFwiY29sdW1uYnJlYWtcIix0cnVlKSkubGVuZ3RoKXtudW1Db2xzKys7fX19XG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5vdmVyZmxvdyYmIXNjcm9sbEhvcml6b250YWxseSl7dmFyIElFNj1mYWxzZTt2YXIgSUU3PShkb2N1bWVudC5hbGwpJiYobmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIk1TSUUgNy5cIikhPS0xKTtpZihJRTZ8fElFNyl7dmFyIGh0bWw9XCJcIjt2YXIgZGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO3doaWxlKCRkZXN0cm95YWJsZVswXS5jaGlsZE5vZGVzLmxlbmd0aD4wKXt2YXIga2lkPSRkZXN0cm95YWJsZVswXS5jaGlsZE5vZGVzWzBdO2ZvcihpPTA7aTxraWQuYXR0cmlidXRlcy5sZW5ndGg7aSsrKXtpZihraWQuYXR0cmlidXRlc1tpXS5ub2RlTmFtZS5pbmRleE9mKFwialF1ZXJ5XCIpPT09MCl7a2lkLnJlbW92ZUF0dHJpYnV0ZShraWQuYXR0cmlidXRlc1tpXS5ub2RlTmFtZSk7fX1cbiAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTD1cIlwiO2Rpdi5hcHBlbmRDaGlsZCgkZGVzdHJveWFibGVbMF0uY2hpbGROb2Rlc1swXSk7aHRtbCs9ZGl2LmlubmVySFRNTDt9XG4gICAgICAgICAgICAgICAgICAgIHZhciBvdmVyZmxvdz0kKG9wdGlvbnMub3ZlcmZsb3cuaWQpWzBdO292ZXJmbG93LmlubmVySFRNTD1odG1sO31lbHNleyQob3B0aW9ucy5vdmVyZmxvdy5pZCkuZW1wdHkoKS5hcHBlbmQoJGRlc3Ryb3lhYmxlLmNvbnRlbnRzKCkuY2xvbmUodHJ1ZSkpO319ZWxzZSBpZighc2Nyb2xsSG9yaXpvbnRhbGx5KXskY29sPSRpbkJveC5jaGlsZHJlbigpLmVxKCRpbkJveC5jaGlsZHJlbigpLmxlbmd0aC0xKTskZGVzdHJveWFibGUuY29udGVudHMoKS5lYWNoKGZ1bmN0aW9uKCl7JGNvbC5hcHBlbmQoJCh0aGlzKSk7fSk7dmFyIGFmdGVySD0kY29sLmhlaWdodCgpO3ZhciBkaWZmPWFmdGVySC10YXJnZXRIZWlnaHQ7dmFyIHRvdGFsSD0wO3ZhciBtaW49MTAwMDAwMDA7dmFyIG1heD0wO3ZhciBsYXN0SXNNYXg9ZmFsc2U7dmFyIG51bWJlck9mQ29sdW1uc1RoYXREb250RW5kSW5BQ29sdW1uQnJlYWs9MDskaW5Cb3guY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKCRpbkJveCl7cmV0dXJuIGZ1bmN0aW9uKCRpdGVtKXt2YXIgJGNvbD0kaW5Cb3guY2hpbGRyZW4oKS5lcSgkaXRlbSk7dmFyIGVuZHNJbkJyZWFrPSRjb2wuY2hpbGRyZW4oXCI6bGFzdFwiKS5maW5kKHByZWZpeFRoZUNsYXNzTmFtZShcImNvbHVtbmJyZWFrXCIsdHJ1ZSkpLmxlbmd0aDtpZighZW5kc0luQnJlYWspe3ZhciBoPSRjb2wuaGVpZ2h0KCk7bGFzdElzTWF4PWZhbHNlO3RvdGFsSCs9aDtpZihoPm1heCl7bWF4PWg7bGFzdElzTWF4PXRydWU7fVxuICAgICAgICAgICAgICAgICAgICBpZihoPG1pbiltaW49aDtudW1iZXJPZkNvbHVtbnNUaGF0RG9udEVuZEluQUNvbHVtbkJyZWFrKys7fX07fSgkaW5Cb3gpKTt2YXIgYXZnSD10b3RhbEgvbnVtYmVyT2ZDb2x1bW5zVGhhdERvbnRFbmRJbkFDb2x1bW5CcmVhaztpZih0b3RhbEg9PT0wKXtsb29wQ291bnQ9bWF4TG9vcHM7fWVsc2UgaWYob3B0aW9ucy5sYXN0TmV2ZXJUYWxsZXN0JiZsYXN0SXNNYXgpe2FkanVzdG1lbnQrPTU7dGFyZ2V0SGVpZ2h0PXRhcmdldEhlaWdodCs1O2lmKGxvb3BDb3VudD09bWF4TG9vcHMtMSltYXhMb29wcysrO31lbHNlIGlmKG1heC1taW4+MzApe3RhcmdldEhlaWdodD1hdmdIKzMwO31lbHNlIGlmKE1hdGguYWJzKGF2Z0gtdGFyZ2V0SGVpZ2h0KT4yMCl7dGFyZ2V0SGVpZ2h0PWF2Z0g7fWVsc2V7bG9vcENvdW50PW1heExvb3BzO319ZWxzZXskaW5Cb3guY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGkpeyRjb2w9JGluQm94LmNoaWxkcmVuKCkuZXEoaSk7JGNvbC53aWR0aChvcHRpb25XaWR0aCtcInB4XCIpO2lmKGk9PT0wKXskY29sLmFkZENsYXNzKHByZWZpeFRoZUNsYXNzTmFtZShcImZpcnN0XCIpKTt9ZWxzZSBpZihpPT0kaW5Cb3guY2hpbGRyZW4oKS5sZW5ndGgtMSl7JGNvbC5hZGRDbGFzcyhwcmVmaXhUaGVDbGFzc05hbWUoXCJsYXN0XCIpKTt9ZWxzZXskY29sLnJlbW92ZUNsYXNzKHByZWZpeFRoZUNsYXNzTmFtZShcImZpcnN0XCIpKTskY29sLnJlbW92ZUNsYXNzKHByZWZpeFRoZUNsYXNzTmFtZShcImxhc3RcIikpO319KTskaW5Cb3gud2lkdGgoJGluQm94LmNoaWxkcmVuKCkubGVuZ3RoKm9wdGlvbldpZHRoK1wicHhcIik7fVxuICAgICAgICAgICAgICAgICRpbkJveC5hcHBlbmQoJChcIjxiciBzdHlsZT0nY2xlYXI6Ym90aDsnPlwiKSk7fVxuICAgICAgICAgICAgJGluQm94LmZpbmQocHJlZml4VGhlQ2xhc3NOYW1lKFwiY29sdW1uXCIsdHJ1ZSkpLmZpbmQoXCI6Zmlyc3RcIitwcmVmaXhUaGVDbGFzc05hbWUoXCJyZW1vdmVpZmZpcnN0XCIsdHJ1ZSkpLnJlbW92ZSgpOyRpbkJveC5maW5kKHByZWZpeFRoZUNsYXNzTmFtZShcImNvbHVtblwiLHRydWUpKS5maW5kKCc6bGFzdCcrcHJlZml4VGhlQ2xhc3NOYW1lKFwicmVtb3ZlaWZsYXN0XCIsdHJ1ZSkpLnJlbW92ZSgpOyRpbkJveC5maW5kKHByZWZpeFRoZUNsYXNzTmFtZShcInNwbGl0XCIsdHJ1ZSkpLmZpbmQoXCI6Zmlyc3RcIitwcmVmaXhUaGVDbGFzc05hbWUoXCJyZW1vdmVpZmZpcnN0XCIsdHJ1ZSkpLnJlbW92ZSgpOyRpbkJveC5maW5kKHByZWZpeFRoZUNsYXNzTmFtZShcInNwbGl0XCIsdHJ1ZSkpLmZpbmQoJzpsYXN0JytwcmVmaXhUaGVDbGFzc05hbWUoXCJyZW1vdmVpZmxhc3RcIix0cnVlKSkucmVtb3ZlKCk7JGluQm94LmRhdGEoXCJjb2x1bW5pemluZ1wiLGZhbHNlKTtpZihvcHRpb25zLm92ZXJmbG93KXtvcHRpb25zLm92ZXJmbG93LmRvbmVGdW5jKCk7fVxuICAgICAgICAgICAgb3B0aW9ucy5kb25lRnVuYygpO319KTt9OyQuZm4ucmVudW1iZXJCeUpTPWZ1bmN0aW9uKCRzZWFyY2hUYWcsJGNvbG5vLCR0YXJnZXRJZCwkdGFyZ2V0Q2xhc3Mpe3RoaXMuc2V0TGlzdD1mdW5jdGlvbigkY29scywkbGlzdCwkdGFnMSl7dmFyICRwYXJlbnRzPXRoaXMuYmVmb3JlLnBhcmVudHMoKTt2YXIgJHJlc3Q7JHJlc3Q9JCgkY29sc1t0aGlzLm9mZnNldC0xXSkuZmluZCgnPionKTtpZigoJHJlc3QubGFzdCgpKVswXS50YWdOYW1lIT0kdGFnMS50b1VwcGVyQ2FzZSgpKXtpZih0aGlzLmRlYnVnKXtjb25zb2xlLmxvZyhcIkxhc3QgaXRlbSBpbiBwcmV2aW91cyBjb2x1bW4sIGlzbid0IGEgbGlzdC4uLlwiKTt9XG4gICAgcmV0dXJuIDA7fVxuICAgICRyZXN0PSRyZXN0Lmxlbmd0aDt2YXIgJHRpbnQ9MTtpZih0aGlzLmxhc3RPdGhlcjw9MCl7JHRpbnQ9dGhpcy5iZWZvcmUuY2hpbGRyZW4oKS5sZW5ndGgrMTt9ZWxzZXskdGludD0kKCRwYXJlbnRzW3RoaXMubGFzdE90aGVyXSkuY2hpbGRyZW4oKS5sZW5ndGgrMTt9XG4gICAgaWYoJCgkY29sc1t0aGlzLm9mZnNldF0pLmZpbmQoJHRhZzErJzpmaXJzdCBsaS5zcGxpdCcpLmxlbmd0aCl7dmFyICR3aGVyZUVsaXBzaXM9JCgkY29sc1t0aGlzLm9mZnNldC0xXSkuZmluZCgkdGFnMSsnOmxhc3QgbGk6bGFzdCcpO2lmKHRoaXMuZWxpcHNpc1RleHQ9PT0nJ3x8JCgkY29sc1t0aGlzLm9mZnNldC0xXSkuZmluZCgkdGFnMSsnOmxhc3QgfiBkaXYnKS5sZW5ndGh8fCQoJGNvbHNbdGhpcy5vZmZzZXQtMV0pLmZpbmQoJHRhZzErJzpsYXN0IH4gcCcpLmxlbmd0aCl7O31lbHNle2lmKCQoJHdoZXJlRWxpcHNpcykuZmluZCgndWwsIG9sLCBkbCcpLmxlbmd0aD09MCl7dmFyICR0eHQ9JHdoZXJlRWxpcHNpcy5sYXN0KCkudGV4dCgpO3ZhciAkbGVuPSR0eHQubGVuZ3RoO2lmKCR0eHQuc3Vic3RyaW5nKCRsZW4tMSk9PSc7Jyl7aWYoJHR4dC5zdWJzdHJpbmcoJGxlbi00KSE9dGhpcy5lbGlwc2lzVGV4dCsnOycpeyR0eHQ9JHR4dC5zdWJzdHJpbmcoMCwkbGVuLTEpK3RoaXMuZWxpcHNpc1RleHQrJzsnO319ZWxzZXtpZigkdHh0LnN1YnN0cmluZygkbGVuLTMpIT10aGlzLmVsaXBzaXNUZXh0KXskdHh0Kz10aGlzLmVsaXBzaXNUZXh0O319XG4gICAgICAgICR3aGVyZUVsaXBzaXMubGFzdCgpLnRleHQoJHR4dCk7fX1cbiAgICAgICAgaWYoJCgkY29sc1t0aGlzLm9mZnNldF0pLmZpbmQoJHRhZzErJzpmaXJzdCA+bGkuc3BsaXQgPicrJHRhZzEpLmxlbmd0aD09MCl7JHRpbnQtLTt9fVxuICAgIGlmKCRyZXN0PT0xKXskdGludCs9dGhpcy5wcmV2TWF4O31cbiAgICBpZih0aGlzLm5lc3Q+MSl7aWYodGhpcy5kZWJ1Zyl7Y29uc29sZS5sb2coXCJTdXBwb3NlZCB0byBiZSBhIG5lc3RlZCBsaXN0Li4uZGVjclwiKTt9XG4gICAgICAgICR0aW50LS07dmFyICR0dD0kKCRjb2xzW3RoaXMub2Zmc2V0LTFdKS5maW5kKCR0YWcxKyc6Zmlyc3QgbGkuc3BsaXQ6Zmlyc3QnKTtpZigkdHQubGVuZ3RoPjApe2lmKHRoaXMuZGVidWcpe2NvbnNvbGUubG9nKFwiUHJldmlvdXMgY29sdW1uIHN0YXJ0ZWQgd2l0aCBhIHNwbGl0IGl0ZW0sIHNvIHRoYXQgY291bnQgaXMgb25lIGxlc3MgdGhhbiBleHBlY3RlZFwiKTt9XG4gICAgICAgICAgICAkdGludC0tO31cbiAgICAgICAgJHR0PSQoJGNvbHNbdGhpcy5vZmZzZXRdKS5maW5kKCR0YWcxKyc6Zmlyc3QgbGk6Zmlyc3QnKS5jbG9uZSgpOyR0dC5jaGlsZHJlbigpLnJlbW92ZSgpO2lmKCQudHJpbSgkdHQudGV4dCgpKS5sZW5ndGg+MCl7aWYodGhpcy5kZWJ1Zyl7Y29uc29sZS5sb2coXCJJZiB0aGF0IHdhcyBhIGNvbXBsZXRlIGxpc3QgaW4gdGhlIHByZXZpb3VzIGNvbHVtbiwgZG9uJ3QgZGVjci5cIik7fVxuICAgICAgICAgICAgJHRpbnQrKztpZigkKCRjb2xzW3RoaXMub2Zmc2V0LTFdKS5maW5kKFwiPlwiKyR0YWcxKyc6bGFzdCAnKS5jaGlsZHJlbigpLmxlbmd0aD09MCl7aWYodGhpcy5kZWJ1Zyl7Y29uc29sZS5sb2coXCJ1bmxlc3MgdGhhdCB3YXMgZW1wdHksIGluIHdoaWNoIGNhc2UgcmV2ZXJ0XCIpO31cbiAgICAgICAgICAgICAgICAkdGludC0tO319fWVsc2V7dmFyICR0dD0kKCRjb2xzW3RoaXMub2Zmc2V0XSkuZmluZCgkdGFnMSsnOmZpcnN0IGxpOmZpcnN0ICcrJHRhZzErXCIuc3BsaXQgbGkuc3BsaXRcIik7aWYoJHR0Lmxlbmd0aD4wKXtpZih0aGlzLmRlYnVnKXtjb25zb2xlLmxvZyhcIltOZXN0ZWRdIENvbHVtbiBzdGFydGVkIHdpdGggYSBzcGxpdCBpdGVtLCBzbyB0aGF0IGNvdW50IGlzIG9uZSBsZXNzIHRoYW4gZXhwZWN0ZWRcIik7fVxuICAgICAgICAkdGludC0tO319XG4gICAgaWYodGhpcy5kZWJ1Zyl7Y29uc29sZS5sb2coXCJTZXR0aW5nIHRoZSBzdGFydCB2YWx1ZSB0byBcIiskdGludCtcIiAoXCIrdGhpcy5wcmV2TWF4K1wiKVwiKTt9XG4gICAgaWYoJHRpbnQ+MCl7aWYodHlwZW9mIHRoaXMuc2V0Q29sdW1uU3RhcnQ9PSdmdW5jdGlvbicpe3RoaXMuc2V0Q29sdW1uU3RhcnQoJGxpc3QsJHRpbnQpO31lbHNleyRsaXN0LmF0dHIoJ3N0YXJ0JywkdGludCk7fX1cbiAgICByZXR1cm4gMDt9XG4gICAgaWYodHlwZW9mICR0YXJnZXRJZD09PSd1bmRlZmluZWQnKXskdGFyZ2V0SWQ9ZmFsc2U7fVxuICAgIGlmKHR5cGVvZiAkdGFyZ2V0Q2xhc3M9PT0ndW5kZWZpbmVkJyl7JHRhcmdldENsYXNzPWZhbHNlO31cbiAgICBpZighJHRhcmdldElkJiYhJHRhcmdldENsYXNzKXt0aHJvd1wicmVudW1iZXJCeUpTKCk6IEJhZCBwYXJhbSwgbXVzdCBwYXNzIGFuIGlkIG9yIGEgY2xhc3NcIjt9XG4gICAgdmFyICR0YXJnZXQ9Jyc7dGhpcy5wcmV2TWF4PTE7aWYoJHRhcmdldENsYXNzKXskdGFyZ2V0PVwiLlwiKyR0YXJnZXRDbGFzczt9ZWxzZXskdGFyZ2V0PVwiI1wiKyR0YXJnZXRJZDt9XG4gICAgdmFyICR0YWcxPSRzZWFyY2hUYWcudG9Mb3dlckNhc2UoKTt2YXIgJHRhZzI9JHNlYXJjaFRhZy50b1VwcGVyQ2FzZSgpO3RoaXMuY29scz0kKCR0YXJnZXQpO2lmKHRoaXMuZGVidWcpe2NvbnNvbGUubG9nKFwiVGhlcmUgYXJlIFwiK3RoaXMuY29scy5sZW5ndGgrXCIgaXRlbXMsIGxvb2tpbmcgZm9yIFwiKyR0YWcxKTt9XG4gICAgdGhpcy5iZWZvcmU9JCh0aGlzLmNvbHNbMF0pLmZpbmQoJHRhZzErJzpsYXN0Jyk7dGhpcy5wcmV2TWF4PXRoaXMuYmVmb3JlLmNoaWxkcmVuKCkubGVuZ3RoO2Zvcih0aGlzLm9mZnNldD0xO3RoaXMub2Zmc2V0PHRoaXMuY29scy5sZW5ndGg7dGhpcy5vZmZzZXQrKyl7aWYodGhpcy5kZWJ1Zyl7Y29uc29sZS5sb2coXCJpdGVyYXRpbmcgXCIrdGhpcy5vZmZzZXQrXCIuLi5bb2YgXCIrdGhpcy5jb2xzLmxlbmd0aCtcIl1cIik7fVxuICAgICAgICBpZih0aGlzLm9mZnNldCUkY29sbm89PTApe2lmKHRoaXMuZGVidWcpe2NvbnNvbGUubG9nKFwiRmlyc3QgY29sdW1uIChpbiB0aGVvcnkuLilcIik7fVxuICAgICAgICAgICAgdGhpcy5wcmV2TWF4PTE7Y29udGludWU7fVxuICAgICAgICB0aGlzLmJlZm9yZT0kKHRoaXMuY29sc1t0aGlzLm9mZnNldC0xXSkuZmluZCgkdGFnMSsnOmxhc3QnKTtpZih0aGlzLmJlZm9yZS5sZW5ndGgpe2lmKHRoaXMuZGVidWcpe2NvbnNvbGUubG9nKFwiSGF2ZSBzb21lIFwiKyRzZWFyY2hUYWcrXCIgZWxlbWVudHMgaW4gdGhlIHByZXZpb3VzIGNvbHVtblwiKTt9XG4gICAgICAgICAgICB2YXIgJGxpc3Q9JCh0aGlzLmNvbHNbdGhpcy5vZmZzZXRdKS5maW5kKCR0YWcxKyc6Zmlyc3QnKTt2YXIgJGZpcnN0PSQodGhpcy5jb2xzW3RoaXMub2Zmc2V0XSkuZmluZCgnKjpmaXJzdCcpO2lmKCRmaXJzdFswXSE9PSRsaXN0WzBdKXtjb250aW51ZTt9XG4gICAgICAgICAgICB2YXIgJHBhcmVudHM9dGhpcy5iZWZvcmUucGFyZW50cygpO3RoaXMubGFzdE90aGVyPTA7dmFyICRmb3VuZD1mYWxzZTtmb3IoO3RoaXMubGFzdE90aGVyPCRwYXJlbnRzLmxlbmd0aDt0aGlzLmxhc3RPdGhlcisrKXtpZigkcGFyZW50c1t0aGlzLmxhc3RPdGhlcl0udGFnTmFtZSE9JHRhZzImJiRwYXJlbnRzW3RoaXMubGFzdE90aGVyXS50YWdOYW1lIT1cIkxJXCIpeyRmb3VuZD10cnVlO3RoaXMubGFzdE90aGVyLS07YnJlYWs7fX1cbiAgICAgICAgICAgIHRoaXMubmVzdD0xO2lmKCQodGhpcy5jb2xzW3RoaXMub2Zmc2V0XSkuZmluZChcIj5cIiskdGFnMSsnOmZpcnN0IGxpICcrJHRhZzErXCI6Zmlyc3RcIikubGVuZ3RoKXt0aGlzLm5lc3Q9Mjt9XG4gICAgICAgICAgICB0aGlzLnNldExpc3QodGhpcy5jb2xzLCRsaXN0LCR0YWcxKTt0aGlzLmxhc3RPdGhlci0tOyRsaXN0PSQodGhpcy5jb2xzW3RoaXMub2Zmc2V0XSkuZmluZCgkdGFnMSsnOmZpcnN0IGxpICcrJHRhZzErXCI6Zmlyc3RcIik7aWYoJGxpc3QubGVuZ3RoKXt0aGlzLmJlZm9yZT0kKHRoaXMuY29sc1t0aGlzLm9mZnNldC0xXSkuZmluZChcIj5cIiskdGFnMSsnOmxhc3QgbGkgJyskdGFnMStcIjpsYXN0XCIpO3RoaXMucHJldk1heD0wO3RoaXMubmVzdD0xO3RoaXMuc2V0TGlzdCh0aGlzLmNvbHMsJGxpc3QsJHRhZzEpO31cbiAgICAgICAgICAgIHZhciAkcmVzZXQ9JCh0aGlzLmNvbHNbdGhpcy5vZmZzZXQtMV0pLmZpbmQoXCI+XCIrJHRhZzErJzpsYXN0Jyk7dGhpcy5wcmV2TWF4PSRyZXNldC5jaGlsZHJlbigpLmxlbmd0aDt9fVxuICAgIHJldHVybiAwO307fSkoalF1ZXJ5KTsiLCJ2YXIgRk9STUFMSVpFPWZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBlKGEpe3ZhciBiPWMuY3JlYXRlRWxlbWVudChcImJcIik7cmV0dXJuIGIuaW5uZXJIVE1MPVwiPCEtLVtpZiBJRSBcIithK1wiXT48YnI+PCFbZW5kaWZdLS0+XCIsISFiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYnJcIikubGVuZ3RofXZhciBmPVwicGxhY2Vob2xkZXJcImluIGMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGc9XCJhdXRvZm9jdXNcImluIGMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGg9ZSg2KSxpPWUoNyk7cmV0dXJue2dvOmZ1bmN0aW9uKCl7dmFyIGEsYj10aGlzLmluaXQ7Zm9yKGEgaW4gYiliLmhhc093blByb3BlcnR5KGEpJiZiW2FdKCl9LGluaXQ6e2Rpc2FibGVfbGlua19idXR0b246ZnVuY3Rpb24oKXthKGMuZG9jdW1lbnRFbGVtZW50KS5kZWxlZ2F0ZShcImEuYnV0dG9uX2Rpc2FibGVkXCIsXCJjbGlja1wiLGZ1bmN0aW9uKCl7cmV0dXJuITF9KX0sZnVsbF9pbnB1dF9zaXplOmZ1bmN0aW9uKCl7aSYmYShcInRleHRhcmVhLCBpbnB1dC5pbnB1dF9mdWxsXCIpLmxlbmd0aCYmYShcInRleHRhcmVhLCBpbnB1dC5pbnB1dF9mdWxsXCIpLndyYXAoJzxzcGFuIGNsYXNzPVwiaW5wdXRfZnVsbF93cmFwXCI+PC9zcGFuPicpfSxpZTZfc2tpbl9pbnB1dHM6ZnVuY3Rpb24oKXtpZihoJiZhKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIikubGVuZ3RoKXt2YXIgYj0vYnV0dG9ufHN1Ym1pdHxyZXNldC8sYz0vZGF0ZXxkYXRldGltZXxkYXRldGltZS1sb2NhbHxlbWFpbHxtb250aHxudW1iZXJ8cGFzc3dvcmR8cmFuZ2V8c2VhcmNofHRlbHx0ZXh0fHRpbWV8dXJsfHdlZWsvO2EoXCJpbnB1dFwiKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKTt0aGlzLmdldEF0dHJpYnV0ZShcInR5cGVcIikubWF0Y2goYik/KGQuYWRkQ2xhc3MoXCJpZTZfYnV0dG9uXCIpLHRoaXMuZGlzYWJsZWQmJmQuYWRkQ2xhc3MoXCJpZTZfYnV0dG9uX2Rpc2FibGVkXCIpKTp0aGlzLmdldEF0dHJpYnV0ZShcInR5cGVcIikubWF0Y2goYykmJihkLmFkZENsYXNzKFwiaWU2X2lucHV0XCIpLHRoaXMuZGlzYWJsZWQmJmQuYWRkQ2xhc3MoXCJpZTZfaW5wdXRfZGlzYWJsZWRcIikpfSksYShcInRleHRhcmVhLCBzZWxlY3RcIikuZWFjaChmdW5jdGlvbigpe3RoaXMuZGlzYWJsZWQmJmEodGhpcykuYWRkQ2xhc3MoXCJpZTZfaW5wdXRfZGlzYWJsZWRcIil9KX19LGF1dG9mb2N1czpmdW5jdGlvbigpe2lmKCFnJiZhKFwiOmlucHV0W2F1dG9mb2N1c11cIikubGVuZ3RoKXt2YXIgYj1hKFwiW2F1dG9mb2N1c11cIilbMF07Yi5kaXNhYmxlZHx8Yi5mb2N1cygpfX0scGxhY2Vob2xkZXI6ZnVuY3Rpb24oKXshZiYmYShcIjppbnB1dFtwbGFjZWhvbGRlcl1cIikubGVuZ3RoJiYoRk9STUFMSVpFLm1pc2MuYWRkX3BsYWNlaG9sZGVyKCksYShcIjppbnB1dFtwbGFjZWhvbGRlcl1cIikuZWFjaChmdW5jdGlvbigpe2lmKFwicGFzc3dvcmRcIiE9PXRoaXMudHlwZSl7dmFyIGI9YSh0aGlzKSxjPWIuYXR0cihcInBsYWNlaG9sZGVyXCIpO2IuZm9jdXMoZnVuY3Rpb24oKXtiLnZhbCgpPT09YyYmYi52YWwoXCJcIikucmVtb3ZlQ2xhc3MoXCJwbGFjZWhvbGRlcl90ZXh0XCIpfSkuYmx1cihmdW5jdGlvbigpe0ZPUk1BTElaRS5taXNjLmFkZF9wbGFjZWhvbGRlcigpfSksYi5jbG9zZXN0KFwiZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oKXtiLnZhbCgpPT09YyYmYi52YWwoXCJcIikucmVtb3ZlQ2xhc3MoXCJwbGFjZWhvbGRlcl90ZXh0XCIpfSkuYmluZChcInJlc2V0XCIsZnVuY3Rpb24oKXtzZXRUaW1lb3V0KEZPUk1BTElaRS5taXNjLmFkZF9wbGFjZWhvbGRlciw1MCl9KX19KSl9fSxtaXNjOnthZGRfcGxhY2Vob2xkZXI6ZnVuY3Rpb24oKXshZiYmYShcIjppbnB1dFtwbGFjZWhvbGRlcl1cIikubGVuZ3RoJiZhKFwiOmlucHV0W3BsYWNlaG9sZGVyXVwiKS5lYWNoKGZ1bmN0aW9uKCl7aWYoXCJwYXNzd29yZFwiIT09dGhpcy50eXBlKXt2YXIgYj1hKHRoaXMpLGM9Yi5hdHRyKFwicGxhY2Vob2xkZXJcIik7Yi52YWwoKSYmYi52YWwoKSE9PWN8fGIudmFsKGMpLmFkZENsYXNzKFwicGxhY2Vob2xkZXJfdGV4dFwiKX19KX19fX0oalF1ZXJ5LHRoaXMsdGhpcy5kb2N1bWVudCk7alF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe0ZPUk1BTElaRS5nbygpfSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZm9udCA9IG5ldyBGb250RmFjZU9ic2VydmVyKCdTb3VyY2UgU2FucyBQcm8nLCB7XG4gICAgICB3ZWlnaHQ6IDQwMFxuICAgIH0pO1xuXG4gICAgZm9udC5sb2FkKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnRm9udCBpcyBhdmFpbGFibGUnKTtcbiAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnZm9udCcpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdGb250IGlzIG5vdCBhdmFpbGFibGUnKTtcbiAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnbm8tZm9udCcpO1xuICAgIH0pO1xuXG4gICAgLy8gRGVidWcgZm9udCBieSB0b2dnbGluZyB3aXRoIHRoZSBjdHJsIGtleVxuICAgIC8vICQod2luZG93KS5rZXlkb3duKGZ1bmN0aW9uIChlKXtcbiAgICAvLyAgIGlmIChlLmN0cmxLZXkpICQoJ2h0bWwnKS50b2dnbGVDbGFzcygnZm9udCcsJ25vLWZvbnQnKTtcbiAgICAvLyB9KTtcblxuICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xuXG4gIERydXBhbC5iZWhhdmlvcnMubWFnbmlmaWMgPSB7XG5cbiAgICBhdHRhY2g6IGZ1bmN0aW9uIChjb250ZXh0LCBzZXR0aW5ncykge1xuXG4gICAgICAkKCcubGlnaHRib3gnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgZGVsZWdhdGU6ICdhLmxpZ2h0Ym94X190cmlnZ2VyJyxcbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgZ2FsbGVyeToge1xuICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICBtYXJrdXA6ICc8ZGl2IGNsYXNzPVwibWZwLWZpZ3VyZVwiPicrXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWZwLWNsb3NlXCI+PC9kaXY+JytcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtaW1nXCI+PC9kaXY+JytcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtYm90dG9tLWJhclwiPicrXG4gICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtdGl0bGVcIj48L2Rpdj4nK1xuICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWZwLWNvdW50ZXJcIj48L2Rpdj4nK1xuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JytcbiAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLCAvLyBQb3B1cCBIVE1MIG1hcmt1cC4gYC5tZnAtaW1nYCBkaXYgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGltZyB0YWcsIGAubWZwLWNsb3NlYCBieSBjbG9zZSBidXR0b25cblxuICAgICAgICAgIGN1cnNvcjogJ21mcC16b29tLW91dC1jdXInLCAvLyBDbGFzcyB0aGF0IGFkZHMgem9vbSBjdXJzb3IsIHdpbGwgYmUgYWRkZWQgdG8gYm9keS4gU2V0IHRvIG51bGwgdG8gZGlzYWJsZSB6b29tIG91dCBjdXJzb3IuXG5cbiAgICAgICAgICB0aXRsZVNyYzogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgdmFyIGluZm8gPSBcIlwiO1xuICAgICAgICAgICAgaWYoaXRlbS5lbC5zaWJsaW5ncygnLmZpZWxkLS1pbWFnZS1jYXB0aW9uJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHZhciBjYXB0aW9uID0gaXRlbS5lbC5zaWJsaW5ncygnLmZpZWxkLS1pbWFnZS1jYXB0aW9uJykuaHRtbCgpO1xuICAgICAgICAgICAgICBpbmZvICs9ICc8ZGl2IGNsYXNzPVwibWZwLXRpdGxlLWNhcHRpb25cIj4nICsgY2FwdGlvbiArICc8L2Rpdj4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaXRlbS5lbC5zaWJsaW5ncygnLmZpZWxkLS1jcmVkaXQnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdmFyIGNyZWRpdCA9IGl0ZW0uZWwuc2libGluZ3MoJy5maWVsZC0tY3JlZGl0JykuaHRtbCgpO1xuICAgICAgICAgICAgICBpbmZvICs9ICc8ZGl2IGNsYXNzPVwibWZwLXRpdGxlLWNyZWRpdFwiPicgKyBjcmVkaXQgKyAnPC9kaXY+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsaW5rcyA9IGl0ZW0uZWwuc2libGluZ3MoJy5saWdodGJveF9fbGlua3MnKS5odG1sKCk7XG4gICAgICAgICAgICBpbmZvICs9ICc8ZGl2IGNsYXNzPVwibWZwLXRpdGxlLWxpbmtzXCI+JyArIGxpbmtzICsgJzwvZGl2Pic7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgdmVydGljYWxGaXQ6IHRydWUsIC8vIEZpdHMgaW1hZ2UgaW4gYXJlYSB2ZXJ0aWNhbGx5XG5cbiAgICAgICAgICB0RXJyb3I6ICc8YSBocmVmPVwiJXVybCVcIj5UaGUgaW1hZ2U8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJyAvLyBFcnJvciBtZXNzYWdlXG4gICAgICAgIH1cblxuICAgICAgfSk7XG5cbiAgICAgICQoJy5saWdodGJveC1pZnJhbWUnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgLy8gVHJpZ2dlciB3aXRoIGRhdGEgYXR0cmlidXRlIHNpbmNlIGV4dGVybmFsIGxpbmsgbW9kdWxlIHdpbGwgY2xvYmVyIHRoZSBjbGljayBldmVudCBmb3IgYW4gZXh0ZXJuYWwgeW91dHViZSBsaW5rXG4gICAgICAgIGRlbGVnYXRlOiAnYS5saWdodGJveC1pZnJhbWVfX3RyaWdnZXInLFxuICAgICAgICB0eXBlOiAnaWZyYW1lJyxcbiAgICAgICAgaWZyYW1lOiB7XG4gICAgICAgICAgbWFya3VwOiAnPGRpdiBjbGFzcz1cIm1mcC1pZnJhbWUtc2NhbGVyXCI+JytcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj4nK1xuICAgICAgICAgICAgICAgICAgICAnPGlmcmFtZSBjbGFzcz1cIm1mcC1pZnJhbWVcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JytcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZnAtdGl0bGVcIj5Tb21lIGNhcHRpb248L2Rpdj4nK1xuICAgICAgICAgICAgICAgICAgJzwvZGl2PicsIC8vIEhUTUwgIG1hcmt1cCBvZiBwb3B1cCwgYG1mcC1jbG9zZWAgd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgY2xvc2UgYnV0dG9uXG5cbiAgICAgICAgICBwYXR0ZXJuczoge1xuICAgICAgICAgICAgeW91dHViZToge1xuICAgICAgICAgICAgICBpbmRleDogJ3lvdXR1YmUuY29tLycsIC8vIFN0cmluZyB0aGF0IGRldGVjdHMgdHlwZSBvZiB2aWRlbyAoaW4gdGhpcyBjYXNlIFlvdVR1YmUpLiBTaW1wbHkgdmlhIHVybC5pbmRleE9mKGluZGV4KS5cblxuICAgICAgICAgICAgICBpZDogJ3Y9JywgLy8gU3RyaW5nIHRoYXQgc3BsaXRzIFVSTCBpbiBhIHR3byBwYXJ0cywgc2Vjb25kIHBhcnQgc2hvdWxkIGJlICVpZCVcbiAgICAgICAgICAgICAgLy8gT3IgbnVsbCAtIGZ1bGwgVVJMIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAgICAgICAgICAgLy8gT3IgYSBmdW5jdGlvbiB0aGF0IHNob3VsZCByZXR1cm4gJWlkJSwgZm9yIGV4YW1wbGU6XG4gICAgICAgICAgICAgIC8vIGlkOiBmdW5jdGlvbih1cmwpIHsgcmV0dXJuICdwYXJzZWQgaWQnOyB9XG5cbiAgICAgICAgICAgICAgc3JjOiAnLy93d3cueW91dHViZS5jb20vZW1iZWQvJWlkJT9hdXRvcGxheT0xJyAvLyBVUkwgdGhhdCB3aWxsIGJlIHNldCBhcyBhIHNvdXJjZSBmb3IgaWZyYW1lLlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpbWVvOiB7XG4gICAgICAgICAgICAgIGluZGV4OiAndmltZW8uY29tLycsXG4gICAgICAgICAgICAgIGlkOiAnLycsXG4gICAgICAgICAgICAgIHNyYzogJy8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8laWQlP2F1dG9wbGF5PTEnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ21hcHM6IHtcbiAgICAgICAgICAgICAgaW5kZXg6ICcvL21hcHMuZ29vZ2xlLicsXG4gICAgICAgICAgICAgIHNyYzogJyVpZCUmb3V0cHV0PWVtYmVkJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGthbHR1cmE6IHtcbiAgICAgICAgICAgICAgaW5kZXg6ICd3d3cua2FsdHVyYS5jb20vJyxcbiAgICAgICAgICAgICAgaWQ6ICdlbnRyeV9pZD0nLFxuICAgICAgICAgICAgICBzcmM6ICcvL3d3dy5rYWx0dXJhLmNvbS9wLzY4NDY4Mi9zcC82ODQ2ODIwMC9lbWJlZElmcmFtZUpzL3VpY29uZl9pZC8zMTAxMzg1MS9wYXJ0bmVyX2lkLzY4NDY4Mj9pZnJhbWVlbWJlZD10cnVlJmVudHJ5X2lkPSVpZCUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB5b3UgbWF5IGFkZCBoZXJlIG1vcmUgc291cmNlc1xuXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHNyY0FjdGlvbjogJ2lmcmFtZV9zcmMnLCAvLyBUZW1wbGF0aW5nIG9iamVjdCBrZXkuIEZpcnN0IHBhcnQgZGVmaW5lcyBDU1Mgc2VsZWN0b3IsIHNlY29uZCBhdHRyaWJ1dGUuIFwiaWZyYW1lX3NyY1wiIG1lYW5zOiBmaW5kIFwiaWZyYW1lXCIgYW5kIHNldCBhdHRyaWJ1dGUgXCJzcmNcIi5cbiAgICAgICAgfSxcbiAgICAgICAgLy8gYWRkIGluIHRoZSB0aXRsZSB0byBiZSBkaXNwbGF5ZWQgdW5kZXIgdGhlIGlmcmFtZVxuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBtYXJrdXBQYXJzZTogZnVuY3Rpb24odGVtcGxhdGUsIHZhbHVlcywgaXRlbSkge1xuICAgICAgICAgICAgdmFsdWVzLnRpdGxlID0gaXRlbS5lbC5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICB2YWx1ZXMudGl0bGUgPSAnPGEgY2xhc3M9XCJidXR0b25cIiBocmVmPVwiJysgdmFsdWVzLnRpdGxlICsnXCI+TW9yZSBpbmZvPC9hPic7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICB9KTtcblxuICAgIH1cbiAgfVxuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cblxuLy9UT0RPIENsZWFuIFVwXG5cblxuXG4gIGZ1bmN0aW9uIGNsb3NlTWVnYW1lbnUoKSB7XG4gICAgJCgnLm1lbnUtLW1haW4tbWVudS0tbmV3IC5pcy1vcGVuJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAkKCcubWVudS0tbWFpbi1tZW51LS1uZXcgLmlzLWZvY3VzZWQnKS5yZW1vdmVDbGFzcygnaXMtZm9jdXNlZCcpO1xuICB9XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICAgICAgJCgnLm1lbnUtLW1haW4tbWVudS0tbmV3IGxpLm1lbnUtZGVwdGgtMScpLmZvY3VzaW4oZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLm1lbnUtLW1haW4tbWVudS0tbmV3IGxpLm1lbnUtZGVwdGgtMScpLnJlbW92ZUNsYXNzKCdpcy1mb2N1c2VkJyk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnbGkubWVudS1kZXB0aC0xJykuYWRkQ2xhc3MoJ2lzLWZvY3VzZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKCcubWVudS0tbWFpbi1tZW51LS1uZXcgbGkubWVudS1kZXB0aC0xJykuZm9jdXNvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLm1lbnUtLW1haW4tbWVudS0tbmV3IGxpLm1lbnUtZGVwdGgtMScpLnJlbW92ZUNsYXNzKCdpcy1mb2N1c2VkJyk7XG4gICAgICB9KTtcblxuXG4gICAgJCgnLm1lbnUtLW1haW4tbWVudS0tbmV3X19zdWJtZW51JykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgJCh0aGlzKS5maW5kKCc+IC5tZW51Jykud3JhcElubmVyKCc8ZGl2IGNsYXNzPVwiY29sdW1uLWNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJjb2x1bW5cIj4nKTtcbiAgICB9KTtcblxuXG4gICAgLy9Nb2JpbGUgTWVudSBUb2dnbGUgb24gY2xpY2tcbiAgICAkKCcubW9iaWxlLXRvZ2dsZS0tbWVudScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZigkKCdib2R5JykuaGFzQ2xhc3MoJ2hhcy1tb2JpbGUtbWVudScpKXtcbiAgICAgICAgJCgnI25hdmlnYXRpb24gLmJsb2NrLS1tZW51LWJsb2NrJykuc2xpZGVVcCgzMDAsZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hhcy1tb2JpbGUtbWVudScpO1xuICAgICAgICB9KTtcblxuICAgICAgfWVsc2V7XG5cbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdoYXMtbW9iaWxlLW1lbnUnKTtcbiAgICAgICAgJCgnI25hdmlnYXRpb24gLmJsb2NrLS1tZW51LWJsb2NrJykuc2xpZGVEb3duKDMwMCk7XG4gICAgICB9XG5cbiAgICB9KTtcblxuICAgIC8vTW9iaWxlIE1lbnUgVG9nZ2xlIG9uIGZvY3VzXG4gICAgJCgnLm1vYmlsZS10b2dnbGUtLW1lbnUgPiBhJykuZm9jdXMoZnVuY3Rpb24oKXtcblxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2ZvY3VzLW1vYmlsZS1tZW51Jyk7XG4gICAgICAgICQoJyNuYXZpZ2F0aW9uIC5ibG9jay0tbWVudS1ibG9jaycpLnNsaWRlRG93bigzMDApO1xuICAgIH0pO1xuXG4gICAgLy8gTW9iaWxlIE1lbnUgVG9nZ2xlIG9uIGZvY3VzXG4gICAgJCgnI21haW4nKS5mb2N1c2luKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgJCgnLmZvY3VzLW1vYmlsZS1tZW51ICNuYXZpZ2F0aW9uIC5ibG9jay0tbWVudS1ibG9jaycpLnNsaWRlVXAoMzAwLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdmb2N1cy1tb2JpbGUtbWVudScpO1xuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGFzLW1vYmlsZS1tZW51Jyk7XG4gICAgICAgICAgY2xvc2VNZWdhbWVudSgpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG5cblxuICB9KTtcblxuICAkKHdpbmRvdykubG9hZChmdW5jdGlvbigpe1xuXG5cbiAgICAvL0Nsb3NlIG9uIENsaWNrXG4gICAgJCgnLm1lbnUtLW1haW4tbWVudS0tbmV3X19zdWJtZW51Jykub24oJ2NsaWNrJywgJy5tZW51LS1tYWluLW1lbnUtLW5ld19fY2xvc2UnLCAoZnVuY3Rpb24oZSl7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjbG9zZU1lZ2FtZW51KCk7XG4gICAgfSkpO1xuXG4gICAgLy9DbG9zZSBvbiBFc2NhcGVcbiAgICAkKGRvY3VtZW50KS5rZXl1cChmdW5jdGlvbihlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09IDI3KSB7XG4gICAgICAgIGNsb3NlTWVnYW1lbnUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vQ2xvc2Ugb24gcmV0dXJuIHdoZW4gY2xvc2UgYnV0dG9uIGlzIGluIGZvY3VzXG4gICAgJChkb2N1bWVudCkua2V5dXAoZnVuY3Rpb24oZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PSAxMyAmJiAkKCcubWVudS0tbWFpbi1tZW51LS1uZXdfX2Nsb3NlJykuaXMoJzpmb2N1cycpKSB7XG4gICAgICAgIGNsb3NlTWVnYW1lbnUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5tZW51LS1tYWluLW1lbnUtLW5ld19fc3VibWVudScpLmVhY2goZnVuY3Rpb24oKXtcblxuICAgICAgdmFyIGFtb3VudE9mQ29sdW1ucyA9ICQodGhpcykuZmluZCgnLmNvbHVtbi1icmVhaycpLmxlbmd0aDtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgc3dpdGNoKGFtb3VudE9mQ29sdW1ucyl7XG5cbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICQodGhpcykuZmluZCgnLmNvbHVtbi1jb250YWluZXInKS5hZGRDbGFzcygnaGFzLW9uZS1jb2x1bW4nKS5wcmVwZW5kKCc8c3BhbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cIm1lbnUtLW1haW4tbWVudS0tbmV3X19jbG9zZVwiPkNsb3NlPC9zcGFuPicpO1xuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29uZS1jb2x1bW4nKTtcblxuICAgICAgICAgIGZvcihpPTA7IGk8YW1vdW50T2ZDb2x1bW5zOyBpKyspe1xuICAgICAgICAgICAgdmFyIGJvdW5kYXJ5ID0gJCh0aGlzKS5maW5kKCcuY29sdW1uLWNvbnRhaW5lciAuY29sdW1uLWJyZWFrJykuZXEoaSk7XG4gICAgICAgICAgICAkKFwiPGRpdiBjbGFzcz0nY29sdW1uJz5cIikuaW5zZXJ0QWZ0ZXIoYm91bmRhcnkucGFyZW50KCkpLmFwcGVuZChib3VuZGFyeS5uZXh0QWxsKCkuYW5kU2VsZigpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICQodGhpcykuZmluZCgnLmNvbHVtbi1jb250YWluZXInKS5hZGRDbGFzcygnaGFzLXR3by1jb2x1bW5zJykucHJlcGVuZCgnPHNwYW4gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJtZW51LS1tYWluLW1lbnUtLW5ld19fY2xvc2VcIj5DbG9zZTwvc3Bhbj4nKTtcblxuICAgICAgICAgIGZvcihpPTA7IGk8YW1vdW50T2ZDb2x1bW5zOyBpKyspe1xuICAgICAgICAgICAgdmFyIGJvdW5kYXJ5ID0gJCh0aGlzKS5maW5kKCcuY29sdW1uLWNvbnRhaW5lciAuY29sdW1uLWJyZWFrJykuZXEoaSk7XG4gICAgICAgICAgICAkKFwiPGRpdiBjbGFzcz0nY29sdW1uJz5cIikuaW5zZXJ0QWZ0ZXIoYm91bmRhcnkucGFyZW50KCkpLmFwcGVuZChib3VuZGFyeS5uZXh0QWxsKCkuYW5kU2VsZigpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB2YXIgY3VycmVudENvbHVtbkNvbnRhaW5lciA9ICQodGhpcykuZmluZCgnLmNvbHVtbi1jb250YWluZXInKTtcblxuICAgICAgICAgICQoY3VycmVudENvbHVtbkNvbnRhaW5lcikuYWRkQ2xhc3MoJ2hhcy10aHJlZS1jb2x1bW5zJykucHJlcGVuZCgnPHNwYW4gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJtZW51LS1tYWluLW1lbnUtLW5ld19fY2xvc2VcIj5DbG9zZTwvc3Bhbj4nKTtcblxuICAgICAgICAgIGZvcihpPTA7IGk8YW1vdW50T2ZDb2x1bW5zOyBpKyspe1xuICAgICAgICAgICAgdmFyIGJvdW5kYXJ5ID0gJCh0aGlzKS5maW5kKCcuY29sdW1uLWNvbnRhaW5lciAuY29sdW1uLWJyZWFrJykuZXEoaSk7XG4gICAgICAgICAgICAkKFwiPGRpdiBjbGFzcz0nY29sdW1uJz5cIikuaW5zZXJ0QWZ0ZXIoYm91bmRhcnkucGFyZW50KCkpLmFwcGVuZChib3VuZGFyeS5uZXh0QWxsKCkuYW5kU2VsZigpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5jb2x1bW4tY29udGFpbmVyJykuYWRkQ2xhc3MoJ2hhcy1mb3VyLWNvbHVtbnMnKS5wcmVwZW5kKCc8c3BhbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cIm1lbnUtLW1haW4tbWVudS0tbmV3X19jbG9zZVwiPkNsb3NlPC9zcGFuPicpO1xuXG4gICAgICAgICAgZm9yKGk9MDsgaTxhbW91bnRPZkNvbHVtbnM7IGkrKyl7XG4gICAgICAgICAgICB2YXIgYm91bmRhcnkgPSAkKHRoaXMpLmZpbmQoJy5jb2x1bW4tY29udGFpbmVyIC5jb2x1bW4tYnJlYWsnKS5lcShpKTtcbiAgICAgICAgICAgICQoXCI8ZGl2IGNsYXNzPSdjb2x1bW4nPlwiKS5pbnNlcnRBZnRlcihib3VuZGFyeS5wYXJlbnQoKSkuYXBwZW5kKGJvdW5kYXJ5Lm5leHRBbGwoKS5hbmRTZWxmKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gIH0pO1xuXG59KShqUXVlcnkpO1xuXG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gICAgJCgnLm1lbnUtLWNvbHVtbnMnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAkKHRoaXMpLmZpbmQoJz4gLm1lbnUtYmxvY2std3JhcHBlciA+IC5tZW51Jykud3JhcElubmVyKCc8ZGl2IGNsYXNzPVwibmlzdC1ncmlkXCI+PGRpdiBjbGFzcz1cIm5pc3QtZ3JpZF9faXRlbVwiPicpO1xuICAgIH0pO1xuXG4gIH0pO1xuXG4gICQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCl7XG5cbiAgICAkKCcubWVudS0tY29sdW1ucyA+IC5tZW51LWJsb2NrLXdyYXBwZXIgPiAubWVudScpLmVhY2goZnVuY3Rpb24oKXtcblxuICAgICAgdmFyIGFtb3VudE9mQ29sdW1ucyA9ICQodGhpcykuZmluZCgnLmNvbHVtbi1icmVhaycpLmxlbmd0aDtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgc3dpdGNoKGFtb3VudE9mQ29sdW1ucyl7XG5cbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICQodGhpcykuZmluZCgnLm5pc3QtZ3JpZCcpLmFkZENsYXNzKCduaXN0LWdyaWQtLTF1cCcpO1xuXG4gICAgICAgICAgZm9yKGk9MDsgaTxhbW91bnRPZkNvbHVtbnM7IGkrKyl7XG4gICAgICAgICAgICB2YXIgYm91bmRhcnkgPSAkKHRoaXMpLmZpbmQoJy5uaXN0LWdyaWQgLmNvbHVtbi1icmVhaycpLmVxKGkpO1xuICAgICAgICAgICAgJChcIjxkaXYgY2xhc3M9J25pc3QtZ3JpZF9faXRlbSc+XCIpLmluc2VydEFmdGVyKGJvdW5kYXJ5LnBhcmVudCgpKS5hcHBlbmQoYm91bmRhcnkubmV4dEFsbCgpLmFuZFNlbGYoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5uaXN0LWdyaWQnKS5hZGRDbGFzcygnbmlzdC1ncmlkLS0ydXAnKTtcblxuICAgICAgICAgIGZvcihpPTA7IGk8YW1vdW50T2ZDb2x1bW5zOyBpKyspe1xuICAgICAgICAgICAgdmFyIGJvdW5kYXJ5ID0gJCh0aGlzKS5maW5kKCcubmlzdC1ncmlkIC5jb2x1bW4tYnJlYWsnKS5lcShpKTtcbiAgICAgICAgICAgICQoXCI8ZGl2IGNsYXNzPSduaXN0LWdyaWRfX2l0ZW0nPlwiKS5pbnNlcnRBZnRlcihib3VuZGFyeS5wYXJlbnQoKSkuYXBwZW5kKGJvdW5kYXJ5Lm5leHRBbGwoKS5hbmRTZWxmKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHZhciBjdXJyZW50Q29sdW1uQ29udGFpbmVyID0gJCh0aGlzKS5maW5kKCcubmlzdC1ncmlkJyk7XG5cbiAgICAgICAgICAkKGN1cnJlbnRDb2x1bW5Db250YWluZXIpLmFkZENsYXNzKCduaXN0LWdyaWQtLTN1cCcpO1xuXG4gICAgICAgICAgZm9yKGk9MDsgaTxhbW91bnRPZkNvbHVtbnM7IGkrKyl7XG4gICAgICAgICAgICB2YXIgYm91bmRhcnkgPSAkKHRoaXMpLmZpbmQoJy5uaXN0LWdyaWQgLmNvbHVtbi1icmVhaycpLmVxKGkpO1xuICAgICAgICAgICAgJChcIjxkaXYgY2xhc3M9J25pc3QtZ3JpZF9faXRlbSc+XCIpLmluc2VydEFmdGVyKGJvdW5kYXJ5LnBhcmVudCgpKS5hcHBlbmQoYm91bmRhcnkubmV4dEFsbCgpLmFuZFNlbGYoKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgJCh0aGlzKS5maW5kKCcubmlzdC1ncmlkJykuYWRkQ2xhc3MoJ25pc3QtZ3JpZC0tNHVwJyk7XG5cbiAgICAgICAgICBmb3IoaT0wOyBpPGFtb3VudE9mQ29sdW1uczsgaSsrKXtcbiAgICAgICAgICAgIHZhciBib3VuZGFyeSA9ICQodGhpcykuZmluZCgnLm5pc3QtZ3JpZCAuY29sdW1uLWJyZWFrJykuZXEoaSk7XG4gICAgICAgICAgICAkKFwiPGRpdiBjbGFzcz0nbmlzdC1ncmlkX19pdGVtJz5cIikuaW5zZXJ0QWZ0ZXIoYm91bmRhcnkucGFyZW50KCkpLmFwcGVuZChib3VuZGFyeS5uZXh0QWxsKCkuYW5kU2VsZigpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICB9KTtcblxuICB9KTtcblxufSkoalF1ZXJ5KTtcblxuIiwiKGZ1bmN0aW9uICgkKSB7XG4gIERydXBhbC5iZWhhdmlvcnMubWVudVRyZWUgPSB7XG4gICAgYXR0YWNoOiBmdW5jdGlvbiAoY29udGV4dCwgc2V0dGluZ3MpIHtcblxuICAvL1RPRE8gLSBDbGVhbiB1cCBhbmQgY29tYmluZSB3aXRoIHRvcCBuYXYgY29sbGFwc2libGUganNcblxuICAgICAgZnVuY3Rpb24gZXhwYW5kQ29sbGFwc2UoZXhwYW5kZXIpIHtcbiAgICAgICAgZXhwYW5kZXIuYmx1cigpO1xuXG4gICAgICAgIHZhciAkdGhpc1N1Ym1lbnUgPSAgZXhwYW5kZXIuY2xvc2VzdCgnbGknKTtcblxuICAgICAgICBpZigkdGhpc1N1Ym1lbnUuaGFzQ2xhc3MoJ2lzLW9wZW4nKSl7XG4gICAgICAgICAgJHRoaXNTdWJtZW51LmZpbmQoJ3VsLCAubWVudS0tbWFpbi1tZW51LS1uZXdfX3N1Ym1lbnUnKS5maXJzdCgpLnNsaWRlVXAoKTtcbiAgICAgICAgICAkdGhpc1N1Ym1lbnUucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgJCgnLm1lbnUtLW1haW4tbWVudS0tbmV3X19zdWJtZW51Jykuc2xpZGVVcCgpO1xuICAgICAgICAgICQoJy5tZW51LS1tYWluLW1lbnUtLW5ldyAubWVudS1kZXB0aC0xJykucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuXG4gICAgICAgICAgLyogY29sbGFwc2UgYWxsIHRoZSBvdGhlciBzdWJtZW51cyAqL1xuICAgICAgICAgICR0aGlzU3VibWVudS5maW5kKCd1bCwgLm1lbnUtLW1haW4tbWVudS0tbmV3X19zdWJtZW51JykuZmlyc3QoKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAkdGhpc1N1Ym1lbnUuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLyogVXRpbGl0eSBjbGFzcyB0byBhZGQgZXhwYW5kZXIgdG8gbmVzdGVkIGxpc3RzICovXG4gICAgICAkKCcuZXhwYW5kYWJsZSBsaTpoYXModWwpJykuY2hpbGRyZW4oJ2EnKS5hcHBlbmQoJyA8c3BhbiBjbGFzcz1cImV4cGFuZGVyXCI+PHN2ZyBjbGFzcz1cImljb24gaWNvbi1wbHVzXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tcGx1c1wiPjwvdXNlPjwvc3ZnPjxzdmcgY2xhc3M9XCJpY29uIGljb24tbWludXNcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1taW51c1wiPjwvdXNlPjwvc3ZnPjxzcGFuIGNsYXNzPVwiZWxlbWVudC1pbnZpc2libGVcIj5FeHBhbmQgb3IgQ29sbGFwc2U8L3NwYW4+PC9zcGFuPicpO1xuXG4gICAgICAvKiBNYWtlIHN1cmUgYWN0aXZlIHRyYWlsIGlzIHNldCAqL1xuICAgICAgJCgnLmV4cGFuZGFibGUgYS5hY3RpdmUnKS5wYXJlbnRzKCdsaScpLmFkZENsYXNzKCdpcy1hY3RpdmUtdHJhaWwnKTtcblxuICAgICAgZXhwYW5kQ29sbGFwc2UoJCgnbGkuaXMtYWN0aXZlLXRyYWlsID4gYSAuZXhwYW5kZXInKSk7XG5cbiAgICAgICQoJy5leHBhbmRlcicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV4cGFuZENvbGxhcHNlKCQodGhpcykpO1xuICAgICAgfSk7XG5cbiAgICB9XG4gIH07XG5cblxuICAkKGRvY3VtZW50KS5rZXl1cChmdW5jdGlvbihlKSB7XG4gICAgLyogRW50ZXIga2V5ICovXG4gICAgaWYgKGUua2V5Q29kZSA9PSAxMyAmJiAkKCcuZXhwYW5kZXInKS5pcygnOmZvY3VzJykpIHtcbiAgICAgIGV4cGFuZENvbGxhcHNlKCQoJy5leHBhbmRlcjpmb2N1cycpKTtcbiAgICB9O1xuXG4gIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBBZGQgYSB3cmFwcGVyIHRvIGlubGluZSBzdmcgZWxlbWVudHMgc28gd2UgY2FuIHBvc2l0aW9uIHRvb2x0aXBzXG4gICAgJCgnLmZpZWxkLS1ib2R5IHN2ZycpLm9uY2UoJ3dyYXBTVkcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmVhY2goIGZ1bmN0aW9uKCBpbmRleCwgZWxlbWVudCApe1xuICAgICAgICAkKGVsZW1lbnQpLndyYXAoJzxkaXYgY2xhc3M9XCJuaXN0LXN2Z19fd3JhcHBlclwiPjwvZGl2PicpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcubmlzdC1zdmctLXNjYWxhYmxlJykub25jZSgnc2NhbGFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmVhY2goIGZ1bmN0aW9uKCBpbmRleCwgZWxlbWVudCApe1xuICAgICAgICAvLyBHZXQgdGhlIHdpZHRoIGFuZCBoZWlnaHQgcmF0aW9cbiAgICAgICAgdmFyIGJveCA9IGVsZW1lbnQudmlld0JveC5iYXNlVmFsO1xuICAgICAgICB2YXIgcmF0aW8gPSBib3guaGVpZ2h0IC8gYm94LndpZHRoICogMTAwO1xuICAgICAgICAkKGVsZW1lbnQpLnBhcmVudCgpLmFkZENsYXNzKCduaXN0LXN2Z19fd3JhcHBlci0tc2NhbGFibGUnKTtcbiAgICAgICAgJChlbGVtZW50KS5wYXJlbnQoKS5jc3MoJ3BhZGRpbmctYm90dG9tJywgcmF0aW8gKyAnJScpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBTVkcgdG9vbHRpcFxuICAgICQoJ3N2ZyBhJykuZWFjaChmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcbiAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtbmlzdC1zdmctdG9vbHRpcCcpKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0b29sdGlwIGNvbnRlbnRcbiAgICAgICAgdmFyIHRvb2xUaXBUZXh0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLW5pc3Qtc3ZnLXRvb2x0aXAnKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubmlzdC1zdmdfX3dyYXBwZXInKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJuaXN0LXN2Z19fdG9vbHRpcCBuaXN0LXN2Z19fdG9vbHRpcC0tJyArIGluZGV4ICsgJ1wiPjxkaXYgY2xhc3M9XCJuaXN0LXN2Z19fdG9vbHRpcC1jb250ZW50XCI+JyArIHRvb2xUaXBUZXh0ICsgJzwvZGl2PjxzcGFuIGNsYXNzPVwibmlzdC1zdmdfX3Rvb2x0aXAtY2xvc2UgZmEgZmEtY2xvc2VcIj48c3BhbiBjbGFzcz1cImVsZW1lbnQtaW52aXNpYmxlXCI+Q2xvc2U8L3NwYW4+PC9zcGFuPjwvZGl2PicpO1xuXG4gICAgICAgIC8vIFNob3cgdG9vbHRpcCBvbiBjbGlja1xuICAgICAgICAkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5uaXN0LXN2Z19fd3JhcHBlcicpLmZpbmQoJy5uaXN0LXN2Z19fdG9vbHRpcC0tJyArIGluZGV4KS5hZGRDbGFzcygnaXMtb3BlbicpLmZhZGVJbigpO1xuICAgICAgICB9KVxuXG4gICAgICB9XG5cbiAgICAgIC8vIFNWRyBzaG93IGFuZCBoaWRlIGVsZW1lbnQgYnV0dG9uc1xuICAgICAgaWYgKCQodGhpcykuYXR0cignZGF0YS1uaXN0LXNob3cnKSkge1xuXG4gICAgICAgIC8vIFNob3cgbWF0Y2hpbmcgZWxlbWVudCBvbiBjbGlja1xuICAgICAgICAkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB2YXIgZWxlbWVudE51bWJlciA9ICQodGhpcykuYXR0cignZGF0YS1uaXN0LXNob3cnKTtcbiAgICAgICAgICB2YXIgZWxlbWVudFRvU2hvdyA9ICQoIFwiW2RhdGEtbmlzdC1lbGVtZW50PSdcIiArIGVsZW1lbnROdW1iZXIgKyBcIiddXCIgKTtcbiAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5uaXN0LXN2Z19fd3JhcHBlcicpLmZpbmQoJ1tkYXRhLW5pc3QtZWxlbWVudF0nKS5mYWRlT3V0KCk7XG4gICAgICAgICAgZWxlbWVudFRvU2hvdy5mYWRlSW4oKTtcbiAgICAgICAgfSlcblxuICAgICAgfVxuXG4gICAgfSlcblxuICAgIC8vIFNob3cgdG9vbHRpcCBvbiBjbGlja1xuICAgICQoJy5uaXN0LXN2Z19fdG9vbHRpcC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubmlzdC1zdmdfX3Rvb2x0aXAnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpLmZhZGVPdXQoKTtcbiAgICB9KVxuXG4gICAgIC8vIENsb3NlIGVsZW1lbnQgdGhhdCB3YXMgcmV2ZWFsZWQgYnkgYSBzaG93IGJ1dHRvblxuICAgICQoJ1tkYXRhLW5pc3QtZWxlbWVudF0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykuaGlkZSgpO1xuICAgIH0pO1xuXG4gIH0pO1xuXG59KShqUXVlcnkpOyIsIi8qIFBsYWNlaG9sZGVycy5qcyB2NC4wLjEgKi9cbi8qIVxuICogVGhlIE1JVCBMaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIEphbWVzIEFsbGFyZGljZVxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvXG4gKiBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZVxuICogcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yXG4gKiBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTXG4gKiBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbihmdW5jdGlvbiAoJCkge1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAkLnN1cHBvcnQucGxhY2Vob2xkZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgaWYgKCdwbGFjZWhvbGRlcicgaW4gdGVzdCkge1xuICAgICAgICAgICAgICAgICAgICAkLnN1cHBvcnQucGxhY2Vob2xkZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ2Zvcm0nKS5kZWxlZ2F0ZSgnOnRleHQnLCAnZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcGxhY2Vob2xkZXIgPSAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdmFsID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9wbGFjZWhvbGRlciAhPSAnJyAmJiBfdmFsID09IF9wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpLnJlbW92ZUNsYXNzKCdoYXNQbGFjZWhvbGRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuZGVsZWdhdGUoJzp0ZXh0JywgJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcGxhY2Vob2xkZXIgPSAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdmFsID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byB0ZXN0IGZvciB2YWx1ZXMgc3BlY2lmaWMgdG8gYSBwYXJ0aWN1bGFyIGpRdWVyeSB2ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVuZGVmaW5lZCBhbmQgYW4gZW1wdHkgc3RyaW5nIGJvdGggYXJlIGZhbHN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX3BsYWNlaG9sZGVyICYmICggX3ZhbCA9PSAnJyB8fCBfdmFsID09IF9wbGFjZWhvbGRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykudmFsKF9wbGFjZWhvbGRlcikuYWRkQ2xhc3MoJ2hhc1BsYWNlaG9sZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5zdWJtaXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5oYXNQbGFjZWhvbGRlcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCc6dGV4dCcpLmJsdXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGFjdGl2ZSkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuXG4gIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgLy9GdW5jdGlvbmFsaXR5IGZvciBwcmltYXJ5IGZpbHRlcnMgd2l0aCBzZWFyY2ggaWNvbnNcbiAgLy9UT0RPIHNldCB1cCB0byBsb29wIHRocm91Z2ggc2VsZWN0b3IgYXJyYXlcbiAgLy9TZWFyY2ggaWNvbiB0byBkaXNhcHBlYXIgaWYgdXNlciBmb2N1c2VzIGluIG9yIGhhcyBpbnB1dHRlZCB0ZXh0LlxuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgICAvL1NldCBTZWxlY3RvcnNcblxuICAgIHZhciBzZWxlY3RvckFycmF5ID0gW1xuICAgICAgJy5wcmltYXJ5LWZpbHRlcidcbiAgICBdO1xuXG5cbiAgICAvL0ZpcmUgRnVuY3Rpb24gb24gTG9hZFxuICAgIGRvZXNFbGVtZW50RXhpc3Qoc2VsZWN0b3JBcnJheSk7XG5cblxuICAgIC8vTG9vcCBUaHJvdWdoIFNlbGVjdG9ycywgaWYgdGhleSBleGlzdCBvbiB0aGUgcGFnZSBydW4gdGhlIHJlc3Qgb2YgdGhlIHNjcmlwdFxuXG4gICAgZnVuY3Rpb24gZG9lc0VsZW1lbnRFeGlzdChzZWxlY3RvckFycmF5KXtcblxuICAgICAgJC5lYWNoKHNlbGVjdG9yQXJyYXksIGZ1bmN0aW9uKGtleSwgc2VsZWN0b3Ipe1xuXG4gICAgICAgIHZhciBhbW91bnRPZkVsZW1lbnRzID0gJChzZWxlY3RvcikubGVuZ3RoO1xuXG4gICAgICAgIGlmKGFtb3VudE9mRWxlbWVudHMgPT0gMSl7XG5cbiAgICAgICAgICAvL1RPRE8gRmluZCBhIGJldHRlciB3YXkgdG8gZ2V0IHRoaXMgY2xhc3Mgb24gdGhlc2Ugc2VsZWN0b3JzXG4gICAgICAgICAgLy8kKHNlbGVjdG9yKS5hZGRDbGFzcygncHJpbWFyeS1maWx0ZXInKTtcblxuICAgICAgICAgIC8vSWYgaXQgZXhpc3RzIHJ1biBpdCB0aHJvdWdoIHRoZSB2YWx1ZSBjaGVja2VyXG4gICAgICAgICAgY2hlY2tWYWx1ZShzZWxlY3Rvcik7XG5cbiAgICAgICAgICAvL0lmIGl0IGV4aXN0cyBzZXQgdXAgdmFsdWUgd2F0Y2hlcnNcblxuICAgICAgICAgIC8vQWN0aW9ucyBvbiBGb2N1cyBJblxuICAgICAgICAgICQoc2VsZWN0b3IpLmZpbmQoJ2lucHV0JykuZm9jdXNpbihmdW5jdGlvbigpe1xuICAgICAgICAgICAgJChzZWxlY3RvcikuZmluZCgnLmZvcm0taXRlbScpLnJlbW92ZUNsYXNzKCdlbXB0eScpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy9BY3Rpb25zIG9uIEZvdWNzIE91dFxuICAgICAgICAgICQoc2VsZWN0b3IpLmZpbmQoJ2lucHV0JykuZm9jdXNvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNoZWNrVmFsdWUoc2VsZWN0b3IpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1ZhbHVlKHNlbGVjdG9yKXtcbiAgICAgIHZhciBjdXJyZW50VmFsdWUgPSAkKHNlbGVjdG9yKS5maW5kKCdpbnB1dCcpLnZhbCgpO1xuXG5cbiAgICAgIGlmKGN1cnJlbnRWYWx1ZSA9PSAnJyl7XG5cbiAgICAgICAgJChzZWxlY3RvcikuZmluZCgnLmZvcm0taXRlbScpLmFkZENsYXNzKCdlbXB0eScpO1xuXG4gICAgICB9ZWxzZXtcblxuICAgICAgfVxuICAgIH1cblxuXG5cbiAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24oJCkge1xuXG4vLyBTaW1wbHkgd3JhcCBhbGwgdGFibGVzIGluIHRoZSBib2R5IGZpZWxkIHdpdGggYSBkaXZcbi8vIFRoaXMgYWxsb3dzIHVzIHRvIHNldCBhIG92ZXJmbG93OmF1dG8gb24gdGhlIGNvbnRhaW5lclxuLy8gc28gYmlnIHRhYmxlcyBzY3JvbGwgaG9yaXpvbnRhbGx5IGFuZCBkb24ndCBicmVhayB0aGUgbGF5b3V0XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICAgIC8vIFdyYXAgdGFibGVzXG4gICAgJCgndGFibGUnKS5vbmNlKCd3cmFwVGFibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZWFjaCggZnVuY3Rpb24oIGluZGV4LCBlbGVtZW50ICl7XG4gICAgICAgICAgJChlbGVtZW50KS53cmFwKCc8ZGl2IGNsYXNzPVwidGFibGUtd3JhcHBlclwiPjxkaXYgY2xhc3M9XCJ0YWJsZS1pbm5lclwiPjwvZGl2PjwvZGl2PicpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdGFibGVPdmVyZmxvdygpe1xuICAgICAgJCgnLnRhYmxlLWlubmVyJykuZWFjaCggZnVuY3Rpb24oIGluZGV4LCBlbGVtZW50ICl7XG4gICAgICAgIC8vIENsZWFyIGFueSBwcmV2aW91cyBhbHRlcmF0aW9ucyBzbyB3ZSBjYW4gZ2V0IGNvcnJlY3QgbWVhc3VyZW1lbnRzXG4gICAgICAgICQoZWxlbWVudCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ292ZXJmbG93JykuYXR0cignc3R5bGUnLCAnJyk7XG4gICAgICAgICQoZWxlbWVudCkuc2libGluZ3MoJy50YWJsZS1vdmVyZmxvdycpLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vIElzIHRoZSB0YWJsZSBvdmVyZmxvd2luZz9cbiAgICAgICAgdmFyIG92ZXJmbG93biA9ICQoZWxlbWVudCkub3ZlcmZsb3duX3dpZHRoKCk7XG5cbiAgICAgICAgLy8gTWFrZSBtZWFzdXJlbWVudHNcbiAgICAgICAgdmFyIGhlaWdodCA9ICQoZWxlbWVudCkuaGVpZ2h0KCk7XG4gICAgICAgIHZhciB3aWR0aCA9ICQoZWxlbWVudCkud2lkdGgoKTtcbiAgICAgICAgdmFyIHRhYmxlX3dpZHRoID0gJChlbGVtZW50KS5jaGlsZHJlbigndGFibGUnKS53aWR0aCgpO1xuICAgICAgICB2YXIgYnJvd3Nlcl93aWR0aCA9ICQoIHdpbmRvdyApLndpZHRoKCk7XG4gICAgICAgIHZhciB3cmFwcGVyX3dpZHRoID0gdGFibGVfd2lkdGggKyAyO1xuXG4gICAgICAgIC8vIExpbWl0IHdpZHRoIG9mIHdyYXBwZXIgdG8gYnJvd3NlciB3aWR0aFxuICAgICAgICBpZih3cmFwcGVyX3dpZHRoID49IGJyb3dzZXJfd2lkdGgpIHtcbiAgICAgICAgICB3cmFwcGVyX3dpZHRoID0gYnJvd3Nlcl93aWR0aCAtIDUyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHBvc2l0aW9uIG9mIHdyYXBwZXIgc28gd2UgY2FuIG1vdmUgaXQgb3V0c2lkZSB0aGUgY29udGFpbmVyIGlmIG5lZWRlZFxuICAgICAgICB2YXIgbGVmdCA9IDA7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcG9zaXRpb25pbmdcbiAgICAgICAgaWYod3JhcHBlcl93aWR0aCA+PSAxNDAwKSB7XG4gICAgICAgICAgLy8gc3VidHJhY3QgbWF4IHdpZHRoIG9mIGNvbnRlbnQgYW5kIGRpdmlkZSBpbiBoYWxmIHRvIGdldCB0aGUgbGVmdCBwb3NpdGlvblxuICAgICAgICAgIHZhciBsZWZ0ID0gKHdyYXBwZXJfd2lkdGggLSAxMTY4KSAvIDI7XG4gICAgICAgICAgLy8gbmVnYXRlXG4gICAgICAgICAgdmFyIGxlZnQgPSAwIC0gbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHdyYXBwZXJfd2lkdGggPCAxNDAwIHx8IHdpZHRoIDwgMTE2OCkge1xuICAgICAgICAgIHdyYXBwZXJfd2lkdGggPSB3aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB3aWR0aCwgaGVpZ2h0IGFuZCBwb3NpdGlvbiBvZiB3cmFwcGVyIHNpbmNlIHRoZSBpbm5lciBkaXYgaXMgYWJzb2x1dGVcbiAgICAgICAgaWYob3ZlcmZsb3duID09IHRydWUpIHtcblxuICAgICAgICAgIC8vIERvbid0IGJvdGhlciBzZXR0aW5nIHdpZHRoIGV0Yy4gaWYgdGhlIGJyb3dzZXIgaXMgbm90IHdpZGVcbiAgICAgICAgICBpZih3cmFwcGVyX3dpZHRoID49IDE0MDApIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkucGFyZW50KCkuYWRkQ2xhc3MoJ292ZXJmbG93JykuY3NzKHtcbiAgICAgICAgICAgICAgJ2hlaWdodCcgOiBoZWlnaHQgKyAyLFxuICAgICAgICAgICAgICAnd2lkdGgnIDogd3JhcHBlcl93aWR0aCxcbiAgICAgICAgICAgICAgJ2xlZnQnIDogbGVmdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVuZGVyIGEgc2Nyb2xsIGluZGljYXRvciB3aGVuIG5lZWRlZCBhbmQgYnVpbGQgaW4gYSAyMHB4IHRvbGVyYW5jZVxuICAgICAgICAgIGlmKHRhYmxlX3dpZHRoID4gKHdyYXBwZXJfd2lkdGggKyAyMCkpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJ0YWJsZS1vdmVyZmxvd1wiPlNjcm9sbCA8c3BhbiBjbGFzcz1cImZhIGZhLWFycm93LXJpZ2h0XCI+PC9zcGFuPjwvZGl2PicpO1xuICAgICAgICAgICAgLy8gSGlkZSB0aGUgc2Nyb2xsIGluZGljYXRvciBvbmNlIHRoZSB1c2VyIHN0YXJ0cyB0byBzY3JvbGxcbiAgICAgICAgICAgIHZhciBsYXN0UG9zID0gMDtcbiAgICAgICAgICAgICQoZWxlbWVudCkucGFyZW50KCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgY3VyclBvcyA9ICQoZWxlbWVudCkucGFyZW50KCkuc2Nyb2xsTGVmdCgpO1xuICAgICAgICAgICAgICBpZiAobGFzdFBvcyA8IGN1cnJQb3MpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnNpYmxpbmdzKCcudGFibGUtb3ZlcmZsb3cnKS5oaWRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICQoZWxlbWVudCkucGFyZW50KCcudGFibGUtd3JhcHBlcicpLmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAkLmZuLm92ZXJmbG93bl93aWR0aD1mdW5jdGlvbigpe3ZhciBlPXRoaXNbMF07cmV0dXJuIGUuc2Nyb2xsV2lkdGg+ZS5jbGllbnRXaWR0aDt9XG5cbiAgICAkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcbiAgICAgIHRhYmxlT3ZlcmZsb3coKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICB0YWJsZU92ZXJmbG93KCk7XG4gICAgfSk7XG5cblxuICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIi8qKlxuICogQGZpbGVcbiAqIEEgSmF2YVNjcmlwdCBmaWxlIGZvciB0aGUgdGhlbWUuXG4gKlxuICogSW4gb3JkZXIgZm9yIHRoaXMgSmF2YVNjcmlwdCB0byBiZSBsb2FkZWQgb24gcGFnZXMsIHNlZSB0aGUgaW5zdHJ1Y3Rpb25zIGluXG4gKiB0aGUgUkVBRE1FLnR4dCBuZXh0IHRvIHRoaXMgZmlsZS5cbiAqL1xuXG4vLyBKYXZhU2NyaXB0IHNob3VsZCBiZSBtYWRlIGNvbXBhdGlibGUgd2l0aCBsaWJyYXJpZXMgb3RoZXIgdGhhbiBqUXVlcnkgYnlcbi8vIHdyYXBwaW5nIGl0IHdpdGggYW4gXCJhbm9ueW1vdXMgY2xvc3VyZVwiLiBTZWU6XG4vLyAtIGh0dHBzOi8vZHJ1cGFsLm9yZy9ub2RlLzE0NDY0MjBcbi8vIC0gaHR0cDovL3d3dy5hZGVxdWF0ZWx5Z29vZC5jb20vMjAxMC8zL0phdmFTY3JpcHQtTW9kdWxlLVBhdHRlcm4tSW4tRGVwdGhcbihmdW5jdGlvbiAoJCkge1xuXG4gICAgLy9UT0RPIGNsZWFuIHVwXG4gICAgLy9Db21tYSBTZXBlcmF0ZWQgQXV0aG9ycyAvIE5vbiBBdXRob3JzXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuXG4gICAgICBpZigkKCcuZ3JvdXAtcHVibGljYXRpb24tYXV0aG9ycycpLmZpbmQoJy5maWVsZC0tbmlzdC1hdXRob3JzJykubGVuZ3RoICE9IDAgJiYgJCgnLmdyb3VwLXB1YmxpY2F0aW9uLWF1dGhvcnMnKS5maW5kKCcuZmllbGQtLW5vbi1uaXN0LWF1dGhvcnMnKS5sZW5ndGggIT0gMCl7XG5cbiAgICAgICAgJCgnLmdyb3VwLXB1YmxpY2F0aW9uLWF1dGhvcnMgLmZpZWxkLS1uaXN0LWF1dGhvcnMgLnRleHRmb3JtYXR0ZXItbGlzdCcpLmFwcGVuZCgnLCAnKVxuXG4gICAgICB9XG5cbiAgICB9KTtcblxuXG4gICAgLy9UT0RPIENMRUFOXG4gICAgLy9GYWtlIG1lbnUgaXRlbXMgaW4gbWVnYSBtZW51XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gICAgICAkKCcubWVnYW1lbnUtZmFrZS1saW5rJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cblxuXG5cblxuXG5cblxuICAgIC8vVE9ETyBDTEVBTiBVUFxuICAgIC8vR1RyYW5zbGF0ZSBBY2Nlc3NpYmlsaXR5XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG5cbiAgICAgICQoJyNibG9jay1ndHJhbnNsYXRlLWd0cmFuc2xhdGUgc2VsZWN0JykuYXR0cignbmFtZScsICdnb29nbGVfdHJhbnNsYXRlJykuYXR0cignaWQnLCAnZ29vZ2xlX3RyYW5zbGF0ZScpLmJlZm9yZSgnPGxhYmVsIGNsYXNzPVwiZWxlbWVudC1pbnZpc2libGVcIiBmb3I9XCJnb29nbGVfdHJhbnNsYXRlXCI+VHJhbnNsYXRlPC9sYWJlbD4nKTtcblxuICAgIH0pO1xuXG5cblxuXG5cbiAgICAvL1RPRE8gQ2xlYW4gVXBcbiAgICAvL0xlZnQgSGFuZCBFeHBvc2VkIEZpbHRlcnMgU3RhcnQgT3Blbj9cblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cblxuICAgICAgJCgnLnBhbmVsLXJlZ2lvbi0tbGVmdC1zaWRlYmFyIGZpZWxkc2V0LmNvbGxhcHNpYmxlJykucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuXG5cblxuICAgIH0pO1xuXG5cblxuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICQoXCIjY2JveFByZXZpb3VzXCIpLmFwcGVuZChcIlByZXY8L2J1dHRvbj5cIilcbiAgICAgICQoXCIjY2JveFByZXZpb3VzXCIpLmF0dHIoXCJ2YWx1ZVwiLCBcIlByZXZpb3VzIEl0ZW1cIik7XG5cbiAgICAgICQoXCIjY2JveE5leHRcIikuYXBwZW5kKFwiTmV4dDwvYnV0dG9uPlwiKVxuICAgICAgJChcIiNjYm94TmV4dFwiKS5hdHRyKFwidmFsdWVcIiwgXCJOZXh0IEl0ZW1cIik7XG5cbiAgICAgICQoXCIjY2JveFNsaWRlc2hvd1wiKS5hcHBlbmQoXCJTbGlkZXNob3c8L2J1dHRvbj5cIilcbiAgICAgICQoXCIjY2JveFNsaWRlc2hvd1wiKS5hdHRyKFwidmFsdWVcIiwgXCJTbGlkZXNob3dcIik7XG5cbiAgICB9KTtcblxuXG5cbiAgICAvL30pO1xuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcyhcIm5vLWpzXCIpLmFkZENsYXNzKFwianNcIik7XG4gICAgfSk7XG5cblxuXG59KShqUXVlcnkpO1xuIiwiLy8gRnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9Ib3VuZHN0b290aFNUTC81NTEwMDgyXG5cbihmdW5jdGlvbigkKSB7XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICAgICQoJ2FbaHJlZio9I106bm90KFtocmVmPSNdLC5uby1zY3JvbGwpJykuY2xpY2soZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJylcbiAgICAgICAgICB8fCBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKVxuICAgICAge1xuXG4gICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCksXG4gICAgICAgIC8vIGhlYWRlckhlaWdodCA9ICQoXCIucHJpbWFyeS1oZWFkZXJcIikuaGVpZ2h0KCkgKyA1OyAvLyBHZXQgZml4ZWQgaGVhZGVyIGhlaWdodFxuICAgICAgICBoZWFkZXJIZWlnaHQgPSAwO1xuXG4gICAgICAgIGlmKCQoJ2JvZHknKS5oYXNDbGFzcygnbmF2YmFyLWFkbWluaXN0cmF0aW9uJykpIHtcbiAgICAgICAgICBoZWFkZXJIZWlnaHQgPSBoZWFkZXJIZWlnaHQgKyAzOTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCQoJ2JvZHknKS5oYXNDbGFzcygnc2VjdGlvbi1mZWF0dXJlZC1zdG9yaWVzJykpIHtcbiAgICAgICAgICBoZWFkZXJIZWlnaHQgPSBoZWFkZXJIZWlnaHQgKyA2MDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xuXG4gICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKVxuICAgICAgICB7XG4gICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgLSBoZWFkZXJIZWlnaHRcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gIH0pO1xuXG4gIC8vIGJpbmQgYSBmdW5jdGlvbiB0byB0aGUgd2luZG93J3Mgc2Nyb2xsIGV2ZW50XG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgLy8gZ2V0IHRoZSBhbW91bnQgdGhlIHdpbmRvdyBoYXMgc2Nyb2xsZWRcbiAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIC8vIGFkZCB0aGUgJ3Njcm9sbGVkJyBjbGFzcyB0byB0aGUgYm9keSBlbGVtZW50XG5cbiAgICBpZiAoc2Nyb2xsID49IDEwMCkge1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJpcy1zY3JvbGxlZFwiKTtcbiAgICB9XG4gICAgaWYgKHNjcm9sbCA8IDEwMCkge1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJpcy1zY3JvbGxlZFwiKTtcbiAgICB9XG4gIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgLy9UT0RPIENMRUFOIFVQXG4gIC8vU2VsZWN0IG9yIGRpZVxuICBEcnVwYWwuYmVoYXZpb3JzLnNvZCA9IHtcbiAgICBhdHRhY2g6IGZ1bmN0aW9uIChjb250ZXh0LCBzZXR0aW5ncykge1xuXG4gICAgICAvL09ubHkgYXBwbHkgdG8gbm9uLW11bHRpcGxlIHNlbGVjdHMgYW5kIG5vdCB0byB0ZXJtIHdpdGggZGVwdGggZmlsdGVyc1xuICAgICAgLy9UaG9zZSB1c2UgY2hvc2VuXG4gICAgICAkKCcjbWFpbiBzZWxlY3Q6bm90KFttdWx0aXBsZV0pJykubm90KCcjZWRpdC10ZXJtLW5vZGUtdGlkLWRlcHRoLCNlZGl0LXRlcm0tbm9kZS10aWQtZGVwdGgtMSwubm8tc29kLC5uby1zb2Qgc2VsZWN0Jykuc2VsZWN0T3JEaWUoe1xuICAgICAgICBjdXN0b21DbGFzczogJ3N0YW5kYXJkLXNlbGVjdCcsXG4gICAgICAgIHNpemU6IDEwXG4gICAgICB9KTtcblxuICAgIH1cbiAgfTtcblxuICAvL2dldCBzaWRlYmFyIHNlbGVjdHMgdG8gcmVzaXplXG5cbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKXtcbiAgICB2YXIgbGVmdENvbFdpZHRoID0gJCgnLnBhbmVsLXJlZ2lvbi0tbGVmdC1zaWRlYmFyIC52aWV3cy13aWRnZXQtZmlsdGVyLXNlY29uZGFyeScpLndpZHRoKCk7XG5cbiAgICAkKCcucGFuZWwtcmVnaW9uLS1sZWZ0LXNpZGViYXIgLnNvZF9zZWxlY3QnKS5jc3MoJ3dpZHRoJywgbGVmdENvbFdpZHRoLTQwKydweCcpO1xuICAgICQoJy5wYW5lbC1yZWdpb24tLWxlZnQtc2lkZWJhciAuc29kX2xpc3Rfd3JhcHBlcicpLmNzcygnd2lkdGgnLCBsZWZ0Q29sV2lkdGgtNDArJ3B4Jyk7XG4gIH0pO1xuXG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcbiAgICB2YXIgbGVmdENvbFdpZHRoID0gJCgnLnBhbmVsLXJlZ2lvbi0tbGVmdC1zaWRlYmFyIC52aWV3cy13aWRnZXQtZmlsdGVyLXNlY29uZGFyeScpLndpZHRoKCk7XG5cbiAgICAkKCcucGFuZWwtcmVnaW9uLS1sZWZ0LXNpZGViYXIgLnNvZF9zZWxlY3QnKS5jc3MoJ3dpZHRoJywgbGVmdENvbFdpZHRoLTQwKydweCcpO1xuICAgICQoJy5wYW5lbC1yZWdpb24tLWxlZnQtc2lkZWJhciAuc29kX2xpc3Rfd3JhcHBlcicpLmNzcygnd2lkdGgnLCBsZWZ0Q29sV2lkdGgtNDArJ3B4Jyk7XG4gIH0pO1xuXG5cbn0pKGpRdWVyeSk7XG4iLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqICBOYW1lOiAgICAgICAgICBzZWxlY3RvcmRpZS5taW4uanNcbiAqICBVcGRhdGVkOiAgICAgICAyMDE0LTEwLTExXG4gKiAgVmVyc2lvbjogICAgICAgMC4xLjhcbiAqICBDcmVhdGVkIGJ5OiAgICBQZXIgViBAIFZzdC5tblxuICogIFdoYXQ/OiAgICAgICAgIE1pbmlmaWVkIHZlcnNpb24gb2YgdGhlIFNlbGVjdCBvciBEaWUgSlNcbiAqXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE0IFBlciBWZXN0bWFuXG4gKiAgRHVhbCBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGFuZCBHUEwgbGljZW5zZXMuXG4gKlxuICogIEJlYXJkcywgUm9jayAmIExvdWQgR3VucyB8IENvZ3MgJ24gS2Vnc1xuICpcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbiFmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjthLmZuLnNlbGVjdE9yRGllPWZ1bmN0aW9uKGIpe3ZhciBmLGcsYz17Y3VzdG9tSUQ6bnVsbCxjdXN0b21DbGFzczpcIlwiLHBsYWNlaG9sZGVyOm51bGwscGxhY2Vob2xkZXJPcHRpb246ITEscHJlZml4Om51bGwsY3ljbGU6ITEsc3RyaXBFbXB0eTohMSxsaW5rczohMSxsaW5rc0V4dGVybmFsOiExLHNpemU6MCx0YWJJbmRleDowLG9uQ2hhbmdlOmEubm9vcH0sZD17fSxlPSExLGg9e2luaXRTb0Q6ZnVuY3Rpb24oYil7cmV0dXJuIGQ9YS5leHRlbmQoe30sYyxiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtpZihhKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKFwic29kX3NlbGVjdFwiKSljb25zb2xlLmxvZyhcIlNlbGVjdCBvciBEaWU6IEl0IGxvb2tzIGxpa2UgdGhlIFNvRCBhbHJlYWR5IGV4aXN0c1wiKTtlbHNle3ZhciB1LHYsdyxiPWEodGhpcyksYz1iLmRhdGEoXCJjdXN0b20taWRcIik/Yi5kYXRhKFwiY3VzdG9tLWlkXCIpOmQuY3VzdG9tSUQsZT1iLmRhdGEoXCJjdXN0b20tY2xhc3NcIik/Yi5kYXRhKFwiY3VzdG9tLWNsYXNzXCIpOmQuY3VzdG9tQ2xhc3MsZj1iLmRhdGEoXCJwcmVmaXhcIik/Yi5kYXRhKFwicHJlZml4XCIpOmQucHJlZml4LGc9Yi5kYXRhKFwicGxhY2Vob2xkZXJcIik/Yi5kYXRhKFwicGxhY2Vob2xkZXJcIik6ZC5wbGFjZWhvbGRlcixpPWIuZGF0YShcInBsYWNlaG9sZGVyLW9wdGlvblwiKT9iLmRhdGEoXCJwbGFjZWhvbGRlci1vcHRpb25cIik6ZC5wbGFjZWhvbGRlck9wdGlvbixqPWIuZGF0YShcImN5Y2xlXCIpP2IuZGF0YShcImN5Y2xlXCIpOmQuY3ljbGUsaz1iLmRhdGEoXCJsaW5rc1wiKT9iLmRhdGEoXCJsaW5rc1wiKTpkLmxpbmtzLGw9Yi5kYXRhKFwibGlua3MtZXh0ZXJuYWxcIik/Yi5kYXRhKFwibGlua3MtZXh0ZXJuYWxcIik6ZC5saW5rc0V4dGVybmFsLG09cGFyc2VJbnQoYi5kYXRhKFwic2l6ZVwiKSk/Yi5kYXRhKFwic2l6ZVwiKTpkLnNpemUsbj1wYXJzZUludChiLmRhdGEoXCJ0YWJpbmRleFwiKSk/Yi5kYXRhKFwidGFiaW5kZXhcIik6ZC50YWJJbmRleD9kLnRhYkluZGV4OmIuYXR0cihcInRhYmluZGV4XCIpP2IuYXR0cihcInRhYmluZGV4XCIpOmQudGFiSW5kZXgsbz1iLmRhdGEoXCJzdHJpcC1lbXB0eVwiKT9iLmRhdGEoXCJzdHJpcC1lbXB0eVwiKTpkLnN0cmlwRW1wdHkscD1iLnByb3AoXCJ0aXRsZVwiKT9iLnByb3AoXCJ0aXRsZVwiKTpudWxsLHE9Yi5pcyhcIjpkaXNhYmxlZFwiKT9cIiBkaXNhYmxlZFwiOlwiXCIscj1cIlwiLHM9XCJcIix0PTA7ZiYmKHI9JzxzcGFuIGNsYXNzPVwic29kX3ByZWZpeFwiPicrZitcIjwvc3Bhbj4gXCIpLHMrPWcmJiFmPyc8c3BhbiBjbGFzcz1cInNvZF9sYWJlbCBzb2RfcGxhY2Vob2xkZXJcIj4nK2crXCI8L3NwYW4+XCI6JzxzcGFuIGNsYXNzPVwic29kX2xhYmVsXCI+JytyK1wiPC9zcGFuPlwiLHU9YShcIjxzcGFuLz5cIix7aWQ6YyxcImNsYXNzXCI6XCJzb2Rfc2VsZWN0IFwiK2UrcSx0aXRsZTpwLHRhYmluZGV4Om4saHRtbDpzLFwiZGF0YS1jeWNsZVwiOmosXCJkYXRhLWxpbmtzXCI6ayxcImRhdGEtbGlua3MtZXh0ZXJuYWxcIjpsLFwiZGF0YS1wbGFjZWhvbGRlclwiOmcsXCJkYXRhLXBsYWNlaG9sZGVyLW9wdGlvblwiOmksXCJkYXRhLXByZWZpeFwiOmYsXCJkYXRhLWZpbHRlclwiOlwiXCJ9KS5pbnNlcnRBZnRlcih0aGlzKSxoLmlzVG91Y2goKSYmdS5hZGRDbGFzcyhcInRvdWNoXCIpLHY9YShcIjxzcGFuLz5cIix7XCJjbGFzc1wiOlwic29kX2xpc3Rfd3JhcHBlclwifSkuYXBwZW5kVG8odSksdz1hKFwiPHNwYW4vPlwiLHtcImNsYXNzXCI6XCJzb2RfbGlzdFwifSkuYXBwZW5kVG8odiksYShcIm9wdGlvbiwgb3B0Z3JvdXBcIixiKS5lYWNoKGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcyk7byYmIWEudHJpbShjLnRleHQoKSk/Yy5yZW1vdmUoKTowPT09YiYmaSYmIXI/aC5wb3B1bGF0ZVNvRChjLHcsdSwhMCk6aC5wb3B1bGF0ZVNvRChjLHcsdSwhMSl9KSxtJiYodi5zaG93KCksYShcIi5zb2Rfb3B0aW9uOmx0KFwiK20rXCIpXCIsdykuZWFjaChmdW5jdGlvbigpe3QrPWEodGhpcykub3V0ZXJIZWlnaHQoKX0pLHYucmVtb3ZlQXR0cihcInN0eWxlXCIpLHcuY3NzKHtcIm1heC1oZWlnaHRcIjp0fSkpLGIuYXBwZW5kVG8odSksdS5vbihcImZvY3VzaW5cIixoLmZvY3VzU29kKS5vbihcImNsaWNrXCIsaC50cmlnZ2VyU29kKS5vbihcImNsaWNrXCIsXCIuc29kX29wdGlvblwiLGgub3B0aW9uQ2xpY2spLm9uKFwibW91c2Vtb3ZlXCIsXCIuc29kX29wdGlvblwiLGgub3B0aW9uSG92ZXIpLm9uKFwia2V5ZG93blwiLGgua2V5Ym9hcmRVc2UpLGIub24oXCJjaGFuZ2VcIixoLnNlbGVjdENoYW5nZSksYShkb2N1bWVudCkub24oXCJjbGlja1wiLFwibGFiZWxbZm9yPSdcIitiLmF0dHIoXCJpZFwiKStcIiddXCIsZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdCgpLHUuZm9jdXMoKX0pfX0pfSxwb3B1bGF0ZVNvRDpmdW5jdGlvbihiLGMsZCxlKXt2YXIgZj1kLmRhdGEoXCJwbGFjZWhvbGRlclwiKSxnPWQuZGF0YShcInBsYWNlaG9sZGVyLW9wdGlvblwiKSxoPWQuZGF0YShcInByZWZpeFwiKSxpPWQuZmluZChcIi5zb2RfbGFiZWxcIiksaj1iLnBhcmVudCgpLGs9Yi50ZXh0KCksbD1iLnZhbCgpLG09Yi5kYXRhKFwiY3VzdG9tLWlkXCIpP2IuZGF0YShcImN1c3RvbS1pZFwiKTpudWxsLG49Yi5kYXRhKFwiY3VzdG9tLWNsYXNzXCIpP2IuZGF0YShcImN1c3RvbS1jbGFzc1wiKTpcIlwiLG89Yi5pcyhcIjpkaXNhYmxlZFwiKT9cIiBkaXNhYmxlZCBcIjpcIlwiLHA9Yi5pcyhcIjpzZWxlY3RlZFwiKT9cIiBzZWxlY3RlZCBhY3RpdmUgXCI6XCJcIixxPWIuZGF0YShcImxpbmtcIik/XCIgbGluayBcIjpcIlwiLHI9Yi5kYXRhKFwibGluay1leHRlcm5hbFwiKT9cIiBsaW5rZXh0ZXJuYWxcIjpcIlwiLHM9Yi5wcm9wKFwibGFiZWxcIik7Yi5pcyhcIm9wdGlvblwiKT8oYShcIjxzcGFuLz5cIix7XCJjbGFzc1wiOlwic29kX29wdGlvbiBcIituK28rcCtxK3IsaWQ6bSx0aXRsZTprLGh0bWw6ayxcImRhdGEtdmFsdWVcIjpsfSkuYXBwZW5kVG8oYyksZSYmIWg/KGQuZGF0YShcImxhYmVsXCIsayksZC5kYXRhKFwicGxhY2Vob2xkZXJcIixrKSxiLnByb3AoXCJkaXNhYmxlZFwiLCEwKSxjLmZpbmQoXCIuc29kX29wdGlvbjpsYXN0XCIpLmFkZENsYXNzKFwiaXMtcGxhY2Vob2xkZXIgZGlzYWJsZWRcIikscCYmaS5hZGRDbGFzcyhcInNvZF9wbGFjZWhvbGRlclwiKSk6cCYmZiYmIWcmJiFoP2QuZGF0YShcImxhYmVsXCIsZik6cCYmZC5kYXRhKFwibGFiZWxcIixrKSwocCYmIWZ8fHAmJmd8fHAmJmgpJiZpLmFwcGVuZChrKSxqLmlzKFwib3B0Z3JvdXBcIikmJihjLmZpbmQoXCIuc29kX29wdGlvbjpsYXN0XCIpLmFkZENsYXNzKFwiZ3JvdXBjaGlsZFwiKSxqLmlzKFwiOmRpc2FibGVkXCIpJiZjLmZpbmQoXCIuc29kX29wdGlvbjpsYXN0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIikpKTphKFwiPHNwYW4vPlwiLHtcImNsYXNzXCI6XCJzb2Rfb3B0aW9uIG9wdGdyb3VwIFwiK28sdGl0bGU6cyxodG1sOnMsXCJkYXRhLWxhYmVsXCI6c30pLmFwcGVuZFRvKGMpfSxmb2N1c1NvZDpmdW5jdGlvbigpe3ZhciBiPWEodGhpcyk7Yi5oYXNDbGFzcyhcImRpc2FibGVkXCIpP2guYmx1clNvZChiKTooaC5ibHVyU29kKGEoXCIuc29kX3NlbGVjdC5mb2N1c1wiKS5ub3QoYikpLGIuYWRkQ2xhc3MoXCJmb2N1c1wiKSxhKFwiaHRtbFwiKS5vbihcImNsaWNrLnNvZEJsdXJcIixmdW5jdGlvbigpe2guYmx1clNvZChiKX0pKX0sdHJpZ2dlclNvZDpmdW5jdGlvbihiKXtiLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBjPWEodGhpcyksZD1jLmZpbmQoXCIuc29kX2xpc3RcIiksZT1jLmRhdGEoXCJwbGFjZWhvbGRlclwiKSxmPWMuZmluZChcIi5hY3RpdmVcIiksaT1jLmZpbmQoXCIuc2VsZWN0ZWRcIik7Yy5oYXNDbGFzcyhcImRpc2FibGVkXCIpfHxjLmhhc0NsYXNzKFwib3BlblwiKXx8Yy5oYXNDbGFzcyhcInRvdWNoXCIpPyhjbGVhclRpbWVvdXQoZyksYy5yZW1vdmVDbGFzcyhcIm9wZW5cIiksZSYmKGMuZmluZChcIi5zb2RfbGFiZWxcIikuZ2V0KDApLmxhc3RDaGlsZC5ub2RlVmFsdWU9Zi50ZXh0KCkpKTooYy5hZGRDbGFzcyhcIm9wZW5cIiksZSYmIWMuZGF0YShcInByZWZpeFwiKSYmYy5maW5kKFwiLnNvZF9sYWJlbFwiKS5hZGRDbGFzcyhcInNvZF9wbGFjZWhvbGRlclwiKS5odG1sKGUpLGgubGlzdFNjcm9sbChkLGkpLGguY2hlY2tWaWV3cG9ydChjLGQpKX0sa2V5Ym9hcmRVc2U6ZnVuY3Rpb24oYil7dmFyIGwsbSxuLGM9YSh0aGlzKSxkPWMuZmluZChcIi5zb2RfbGlzdFwiKSxnPWMuZmluZChcIi5zb2Rfb3B0aW9uXCIpLGk9Yy5maW5kKFwiLnNvZF9sYWJlbFwiKSxqPWMuZGF0YShcImN5Y2xlXCIpLGs9Zy5maWx0ZXIoXCIuYWN0aXZlXCIpO3JldHVybiBiLndoaWNoPjM2JiZiLndoaWNoPDQxPygzNz09PWIud2hpY2h8fDM4PT09Yi53aGljaD8obT1rLnByZXZBbGwoXCI6bm90KCcuZGlzYWJsZWQsIC5vcHRncm91cCcpXCIpLmZpcnN0KCksbj1nLm5vdChcIi5kaXNhYmxlZCwgLm9wdGdyb3VwXCIpLmxhc3QoKSk6KDM5PT09Yi53aGljaHx8NDA9PT1iLndoaWNoKSYmKG09ay5uZXh0QWxsKFwiOm5vdCgnLmRpc2FibGVkLCAub3B0Z3JvdXAnKVwiKS5maXJzdCgpLG49Zy5ub3QoXCIuZGlzYWJsZWQsIC5vcHRncm91cFwiKS5maXJzdCgpKSwhbS5oYXNDbGFzcyhcInNvZF9vcHRpb25cIikmJmomJihtPW4pLChtLmhhc0NsYXNzKFwic29kX29wdGlvblwiKXx8aikmJihrLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLG0uYWRkQ2xhc3MoXCJhY3RpdmVcIiksaS5nZXQoMCkubGFzdENoaWxkLm5vZGVWYWx1ZT1tLnRleHQoKSxoLmxpc3RTY3JvbGwoZCxtKSxjLmhhc0NsYXNzKFwib3BlblwiKXx8KGU9ITApKSwhMSk6KDEzPT09Yi53aGljaHx8MzI9PT1iLndoaWNoJiZjLmhhc0NsYXNzKFwib3BlblwiKSYmKFwiIFwiPT09Yy5kYXRhKFwiZmlsdGVyXCIpWzBdfHxcIlwiPT09Yy5kYXRhKFwiZmlsdGVyXCIpKT8oYi5wcmV2ZW50RGVmYXVsdCgpLGsuY2xpY2soKSk6MzIhPT1iLndoaWNofHxjLmhhc0NsYXNzKFwib3BlblwiKXx8XCIgXCIhPT1jLmRhdGEoXCJmaWx0ZXJcIilbMF0mJlwiXCIhPT1jLmRhdGEoXCJmaWx0ZXJcIik/Mjc9PT1iLndoaWNoJiZoLmJsdXJTb2QoYyk6KGIucHJldmVudERlZmF1bHQoKSxlPSExLGMuY2xpY2soKSksMCE9PWIud2hpY2gmJihjbGVhclRpbWVvdXQoZiksYy5kYXRhKFwiZmlsdGVyXCIsYy5kYXRhKFwiZmlsdGVyXCIpK1N0cmluZy5mcm9tQ2hhckNvZGUoYi53aGljaCkpLGw9Zy5maWx0ZXIoZnVuY3Rpb24oKXtyZXR1cm4gMD09PWEodGhpcykudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihjLmRhdGEoXCJmaWx0ZXJcIikudG9Mb3dlckNhc2UoKSl9KS5ub3QoXCIuZGlzYWJsZWQsIC5vcHRncm91cFwiKS5maXJzdCgpLGwubGVuZ3RoJiYoay5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxsLmFkZENsYXNzKFwiYWN0aXZlXCIpLGgubGlzdFNjcm9sbChkLGwpLGkuZ2V0KDApLmxhc3RDaGlsZC5ub2RlVmFsdWU9bC50ZXh0KCksYy5oYXNDbGFzcyhcIm9wZW5cIil8fChlPSEwKSksZj1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yy5kYXRhKFwiZmlsdGVyXCIsXCJcIil9LDUwMCkpLHZvaWQgMCl9LG9wdGlvbkhvdmVyOmZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKTtiLmhhc0NsYXNzKFwiZGlzYWJsZWRcIil8fGIuaGFzQ2xhc3MoXCJvcHRncm91cFwiKXx8Yi5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLmVuZCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpfSxvcHRpb25DbGljazpmdW5jdGlvbihiKXtiLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBjPWEodGhpcyksZD1jLmNsb3Nlc3QoXCIuc29kX3NlbGVjdFwiKSxlPWMuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSxmPWMuaGFzQ2xhc3MoXCJvcHRncm91cFwiKSxoPWQuZmluZChcIi5zb2Rfb3B0aW9uOm5vdCgnLm9wdGdyb3VwJylcIikuaW5kZXgodGhpcyk7ZC5oYXNDbGFzcyhcInRvdWNoXCIpfHwoZXx8Znx8KGQuZmluZChcIi5zZWxlY3RlZCwgLnNvZF9wbGFjZWhvbGRlclwiKS5yZW1vdmVDbGFzcyhcInNlbGVjdGVkIHNvZF9wbGFjZWhvbGRlclwiKSxjLmFkZENsYXNzKFwic2VsZWN0ZWRcIiksZC5maW5kKFwic2VsZWN0IG9wdGlvblwiKVtoXS5zZWxlY3RlZD0hMCxkLmZpbmQoXCJzZWxlY3RcIikuY2hhbmdlKCkpLGNsZWFyVGltZW91dChnKSxkLnJlbW92ZUNsYXNzKFwib3BlblwiKSl9LHNlbGVjdENoYW5nZTpmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksYz1iLmZpbmQoXCI6c2VsZWN0ZWRcIiksZT1jLnRleHQoKSxmPWIuY2xvc2VzdChcIi5zb2Rfc2VsZWN0XCIpO2YuZmluZChcIi5zb2RfbGFiZWxcIikuZ2V0KDApLmxhc3RDaGlsZC5ub2RlVmFsdWU9ZSxmLmRhdGEoXCJsYWJlbFwiLGUpLGQub25DaGFuZ2UuY2FsbCh0aGlzKSwhZi5kYXRhKFwibGlua3NcIikmJiFjLmRhdGEoXCJsaW5rXCIpfHxjLmRhdGEoXCJsaW5rLWV4dGVybmFsXCIpPyhmLmRhdGEoXCJsaW5rcy1leHRlcm5hbFwiKXx8Yy5kYXRhKFwibGluay1leHRlcm5hbFwiKSkmJndpbmRvdy5vcGVuKGMudmFsKCksXCJfYmxhbmtcIik6d2luZG93LmxvY2F0aW9uLmhyZWY9Yy52YWwoKX0sYmx1clNvZDpmdW5jdGlvbihiKXtpZihhKFwiYm9keVwiKS5maW5kKGIpLmxlbmd0aCl7dmFyIGM9Yi5kYXRhKFwibGFiZWxcIiksZD1iLmRhdGEoXCJwbGFjZWhvbGRlclwiKSxmPWIuZmluZChcIi5hY3RpdmVcIiksaD1iLmZpbmQoXCIuc2VsZWN0ZWRcIiksaT0hMTtjbGVhclRpbWVvdXQoZyksZSYmIWYuaGFzQ2xhc3MoXCJzZWxlY3RlZFwiKT8oZi5jbGljaygpLGk9ITApOmYuaGFzQ2xhc3MoXCJzZWxlY3RlZFwiKXx8KGYucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksaC5hZGRDbGFzcyhcImFjdGl2ZVwiKSksIWkmJmQ/Yi5maW5kKFwiLnNvZF9sYWJlbFwiKS5nZXQoMCkubGFzdENoaWxkLm5vZGVWYWx1ZT1oLnRleHQoKTppfHwoYi5maW5kKFwiLnNvZF9sYWJlbFwiKS5nZXQoMCkubGFzdENoaWxkLm5vZGVWYWx1ZT1jKSxlPSExLGIucmVtb3ZlQ2xhc3MoXCJvcGVuIGZvY3VzXCIpLGIuYmx1cigpLGEoXCJodG1sXCIpLm9mZihcIi5zb2RCbHVyXCIpfX0sY2hlY2tWaWV3cG9ydDpmdW5jdGlvbihiLGMpe3ZhciBkPWJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksZT1jLm91dGVySGVpZ2h0KCk7ZC5ib3R0b20rZSsxMD5hKHdpbmRvdykuaGVpZ2h0KCkmJmQudG9wLWU+MTA/Yi5hZGRDbGFzcyhcImFib3ZlXCIpOmIucmVtb3ZlQ2xhc3MoXCJhYm92ZVwiKSxnPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtoLmNoZWNrVmlld3BvcnQoYixjKX0sMjAwKX0sbGlzdFNjcm9sbDpmdW5jdGlvbihhLGIpe3ZhciBjPWFbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksZD1iWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2MudG9wPmQudG9wP2Euc2Nyb2xsVG9wKGEuc2Nyb2xsVG9wKCktYy50b3ArZC50b3ApOmMuYm90dG9tPGQuYm90dG9tJiZhLnNjcm9sbFRvcChhLnNjcm9sbFRvcCgpLWMuYm90dG9tK2QuYm90dG9tKX0saXNUb3VjaDpmdW5jdGlvbigpe3JldHVyblwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fG5hdmlnYXRvci5NYXhUb3VjaFBvaW50cz4wfHxuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cz4wfX0saT17ZGVzdHJveTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLGM9Yi5wYXJlbnQoKTtjLmhhc0NsYXNzKFwic29kX3NlbGVjdFwiKT8oYi5vZmYoXCJjaGFuZ2VcIiksYy5maW5kKFwic3BhblwiKS5yZW1vdmUoKSxiLnVud3JhcCgpKTpjb25zb2xlLmxvZyhcIlNlbGVjdCBvciBEaWU6IFRoZXJlJ3Mgbm8gU29EIHRvIGRlc3Ryb3lcIil9KX0sdXBkYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPWEodGhpcyksYz1iLnBhcmVudCgpLGQ9Yy5maW5kKFwiLnNvZF9saXN0OmZpcnN0XCIpO2MuaGFzQ2xhc3MoXCJzb2Rfc2VsZWN0XCIpPyhkLmVtcHR5KCksYy5maW5kKFwiLnNvZF9sYWJlbFwiKS5nZXQoMCkubGFzdENoaWxkLm5vZGVWYWx1ZT1cIlwiLGIuaXMoXCI6ZGlzYWJsZWRcIikmJmMuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSxhKFwib3B0aW9uLCBvcHRncm91cFwiLGIpLmVhY2goZnVuY3Rpb24oKXtoLnBvcHVsYXRlU29EKGEodGhpcyksZCxjKX0pKTpjb25zb2xlLmxvZyhcIlNlbGVjdCBvciBEaWU6IFRoZXJlJ3Mgbm8gU29EIHRvIHVwZGF0ZVwiKX0pfSxkaXNhYmxlOmZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGQ9Yy5wYXJlbnQoKTtkLmhhc0NsYXNzKFwic29kX3NlbGVjdFwiKT9cInVuZGVmaW5lZFwiIT10eXBlb2YgYj8oZC5maW5kKFwiLnNvZF9saXN0OmZpcnN0IC5zb2Rfb3B0aW9uW2RhdGEtdmFsdWU9J1wiK2IrXCInXVwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpLGQuZmluZChcIi5zb2RfbGlzdDpmaXJzdCAuc29kX29wdGlvbltkYXRhLWxhYmVsPSdcIitiK1wiJ11cIikubmV4dFVudGlsKFwiOm5vdCguZ3JvdXBjaGlsZClcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSxhKFwib3B0aW9uW3ZhbHVlPSdcIitiK1wiJ10sIG9wdGdyb3VwW2xhYmVsPSdcIitiK1wiJ11cIix0aGlzKS5wcm9wKFwiZGlzYWJsZWRcIiwhMCkpOmQuaGFzQ2xhc3MoXCJzb2Rfc2VsZWN0XCIpJiYoZC5hZGRDbGFzcyhcImRpc2FibGVkXCIpLGMucHJvcChcImRpc2FibGVkXCIsITApKTpjb25zb2xlLmxvZyhcIlNlbGVjdCBvciBEaWU6IFRoZXJlJ3Mgbm8gU29EIHRvIGRpc2FibGVcIil9KX0sZW5hYmxlOmZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGQ9Yy5wYXJlbnQoKTtkLmhhc0NsYXNzKFwic29kX3NlbGVjdFwiKT9cInVuZGVmaW5lZFwiIT10eXBlb2YgYj8oZC5maW5kKFwiLnNvZF9saXN0OmZpcnN0IC5zb2Rfb3B0aW9uW2RhdGEtdmFsdWU9J1wiK2IrXCInXVwiKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpLGQuZmluZChcIi5zb2RfbGlzdDpmaXJzdCAuc29kX29wdGlvbltkYXRhLWxhYmVsPSdcIitiK1wiJ11cIikubmV4dFVudGlsKFwiOm5vdCguZ3JvdXBjaGlsZClcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKSxhKFwib3B0aW9uW3ZhbHVlPSdcIitiK1wiJ10sIG9wdGdyb3VwW2xhYmVsPSdcIitiK1wiJ11cIix0aGlzKS5wcm9wKFwiZGlzYWJsZWRcIiwhMSkpOmQuaGFzQ2xhc3MoXCJzb2Rfc2VsZWN0XCIpJiYoZC5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpLGMucHJvcChcImRpc2FibGVkXCIsITEpKTpjb25zb2xlLmxvZyhcIlNlbGVjdCBvciBEaWU6IFRoZXJlJ3Mgbm8gU29EIHRvIGVuYWJsZVwiKX0pfX07cmV0dXJuIGlbYl0/aVtiXS5hcHBseSh0aGlzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk6XCJvYmplY3RcIiE9dHlwZW9mIGImJmI/KGEuZXJyb3IoJ1NlbGVjdCBvciBEaWU6IE9oIG5vISBObyBzdWNoIG1ldGhvZCBcIicrYisnXCIgZm9yIHRoZSBTb0QgaW5zdGFuY2UnKSx2b2lkIDApOmguaW5pdFNvRC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgLy9UT0RPIENsZWFuXG4gIC8vVGltZWxpbmUgTGlzdCBUb2dnbGVcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICAgICQoJyN0aW1lbGluZV9fdG9nZ2xlLXRpbWVsaW5lJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcblxuICAgICAgfWVsc2V7XG5cbiAgICAgICAgJCgnLnRpbWVsaW5lLWxpc3QnKS5mYWRlT3V0KDMwMCxmdW5jdGlvbigpe1xuICAgICAgICAgICQoJy50aW1lbGluZS1hY3R1YWwnKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJyN0aW1lbGluZV9fdG9nZ2xlLWxpc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG5cblxuXG5cbiAgICB9KTtcblxuICAgICQoJyN0aW1lbGluZV9fdG9nZ2xlLWxpc3QnKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpe1xuXG4gICAgICB9ZWxzZXtcblxuICAgICAgICAkKCcudGltZWxpbmUtYWN0dWFsJykuZmFkZU91dCgzMDAsZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKCcudGltZWxpbmUtbGlzdCcpLmZhZGVJbigzMDApO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnI3RpbWVsaW5lX190b2dnbGUtdGltZWxpbmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgIH1cblxuXG5cbiAgICB9KTtcblxuXG4gIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiLy8gU2hvdy9IaWRlIFRPQyBtZW51XG5cbihmdW5jdGlvbigkKSB7XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICAgICQoJy50b2NfX3RvZ2dsZS1idG4nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgJCgnLnRvYycpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgfSk7XG5cbiAgICAkKCcudG9jX19tZW51IGEnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgJCgnLnRvYycpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgfSk7XG5cbiAgfSk7XG5cbn0pKGpRdWVyeSk7Il19
;;
(function($) {
    Drupal.behaviors.nistStyleFileEntityLinkGa = {
        attach: function(context, settings) {
            var gaEventConfig = {
                category: 'Downloads',
                action: '', // file type
                label: '', // full file url
                value: '0'
            };

            $('.file-entity-link').click(function(event) {
                // Need to manually track file entity link clicks
                // See WWW-1396 in JIRA

                var fileUrl = $(this).attr('data-file-url');
                var fileExtension = fileUrl.substr(fileUrl.lastIndexOf('.') + 1);

                gaEventConfig.action = fileExtension;
                gaEventConfig.label = fileUrl;

                if (typeof ga !== 'undefined') {
                    // See https://developers.google.com/analytics/devguides/collection/analyticsjs/command-queue-reference#send
                    ga('send', 'event', gaEventConfig.category, gaEventConfig.action, gaEventConfig.label, gaEventConfig.value);
                }
            });
        }
    };
})(jQuery);;