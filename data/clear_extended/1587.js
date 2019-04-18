/*! lazysizes - v1.1.3-RC1 -  Licensed MIT */ ! function(a, b) {
    var c = b(a, a.document);
    a.lazySizes = c, "object" == typeof module && module.exports ? module.exports = c : "function" == typeof define && define.amd && define(c)
}(window, function(a, b) {
    "use strict";
    if (b.getElementsByClassName) {
        var c, d = b.documentElement,
            e = a.addEventListener,
            f = a.setTimeout,
            g = a.requestAnimationFrame || f,
            h = /^picture$/i,
            i = ["load", "error", "lazyincluded", "_lazyloaded"],
            j = function(a, b) {
                var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
                return a.className.match(c) && c
            },
            k = function(a, b) {
                j(a, b) || (a.className += " " + b)
            },
            l = function(a, b) {
                var c;
                (c = j(a, b)) && (a.className = a.className.replace(c, " "))
            },
            m = function(a, b, c) {
                var d = c ? "addEventListener" : "removeEventListener";
                c && m(a, b), i.forEach(function(c) {
                    a[d](c, b)
                })
            },
            n = function(a, c, d, e, f) {
                var g = b.createEvent("CustomEvent");
                return g.initCustomEvent(c, !e, !f, d || {}), g.details = g.detail, a.dispatchEvent(g), g
            },
            o = function(b, d) {
                var e;
                a.HTMLPictureElement || ((e = a.picturefill || a.respimage || c.pf) ? e({
                    reevaluate: !0,
                    elements: [b]
                }) : d && d.src && (b.src = d.src))
            },
            p = function(a, b) {
                return getComputedStyle(a, null)[b]
            },
            q = function(a, b, d) {
                for (d = d || a.offsetWidth; d < c.minSize && b && !a._lazysizesWidth;) d = b.offsetWidth, b = b.parentNode;
                return d
            },
            r = function(b) {
                var d, e = 0,
                    h = a.Date,
                    i = function() {
                        d = !1, e = h.now(), b()
                    },
                    j = function() {
                        f(i)
                    },
                    k = function() {
                        g(j)
                    };
                return function() {
                    if (!d) {
                        var a = c.throttle - (h.now() - e);
                        d = !0, 9 > a && (a = 9), f(k, a)
                    }
                }
            },
            s = function() {
                var i, q, s, u, v, w, x, y, z, A, B, C, D, E = /^img$/i,
                    F = /^iframe$/i,
                    G = "onscroll" in a && !/glebot/.test(navigator.userAgent),
                    H = 0,
                    I = 0,
                    J = 0,
                    K = 1,
                    L = function(a) {
                        J--, a && a.target && m(a.target, L), (!a || 0 > J || !a.target) && (J = 0)
                    },
                    M = function(a, b) {
                        var c, d = a,
                            e = "hidden" != p(a, "visibility");
                        for (y -= b, B += b, z -= b, A += b; e && (d = d.offsetParent);) e = (p(d, "opacity") || 1) > 0, e && "visible" != p(d, "overflow") && (c = d.getBoundingClientRect(), e = A > c.left && z < c.right && B > c.top - 1 && y < c.bottom + 1);
                        return e
                    },
                    N = function() {
                        var a, b, d, e, f, g, h, j, k;
                        if ((v = c.loadMode) && 8 > J && (a = i.length)) {
                            for (b = 0, K++, D > I && 1 > J && K > 3 && v > 2 ? (I = D, K = 0) : I = I != C && v > 1 && K > 2 && 6 > J ? C : H; a > b; b++) i[b] && !i[b]._lazyRace && (G ? ((j = i[b].getAttribute("data-expand")) && (g = 1 * j) || (g = I), k !== g && (w = innerWidth + g, x = innerHeight + g, h = -1 * g, k = g), d = i[b].getBoundingClientRect(), (B = d.bottom) >= h && (y = d.top) <= x && (A = d.right) >= h && (z = d.left) <= w && (B || A || z || y) && (s && 3 > J && !j && (3 > v || 4 > K) || M(i[b], g)) ? (S(i[b], d.width), f = !0) : !f && s && !e && 3 > J && 4 > K && v > 2 && (q[0] || c.preloadAfterLoad) && (q[0] || !j && (B || A || z || y || "auto" != i[b].getAttribute(c.sizesAttr))) && (e = q[0] || i[b])) : S(i[b]));
                            e && !f && S(e)
                        }
                    },
                    O = r(N),
                    P = function(a) {
                        k(a.target, c.loadedClass), l(a.target, c.loadingClass), m(a.target, P)
                    },
                    Q = function(a, b) {
                        try {
                            a.contentWindow.location.replace(b)
                        } catch (c) {
                            a.setAttribute("src", b)
                        }
                    },
                    R = function() {
                        var a, b = [],
                            c = function() {
                                for (; b.length;) b.shift()();
                                a = !1
                            };
                        return function(d) {
                            b.push(d), a || (a = !0, g(c))
                        }
                    }(),
                    S = function(a, b) {
                        var d, e, g, i, p, q, r, v, w, x, y, z = E.test(a.nodeName),
                            A = a.getAttribute(c.sizesAttr) || a.getAttribute("sizes"),
                            B = "auto" == A;
                        (!B && s || !z || !a.src && !a.srcset || a.complete || j(a, c.errorClass)) && (a._lazyRace = !0, J++, R(function() {
                            if (a._lazyRace && delete a._lazyRace, l(a, c.lazyClass), !(w = n(a, "lazybeforeunveil")).defaultPrevented) {
                                if (A && (B ? (t.updateElem(a, !0, b), k(a, c.autosizesClass)) : a.setAttribute("sizes", A)), q = a.getAttribute(c.srcsetAttr), p = a.getAttribute(c.srcAttr), z && (r = a.parentNode, v = r && h.test(r.nodeName || "")), x = w.detail.firesLoad || "src" in a && (q || p || v), w = {
                                        target: a
                                    }, x && (m(a, L, !0), clearTimeout(u), u = f(L, 2500), k(a, c.loadingClass), m(a, P, !0)), v)
                                    for (d = r.getElementsByTagName("source"), e = 0, g = d.length; g > e; e++)(y = c.customMedia[d[e].getAttribute("data-media") || d[e].getAttribute("media")]) && d[e].setAttribute("media", y), i = d[e].getAttribute(c.srcsetAttr), i && d[e].setAttribute("srcset", i);
                                q ? a.setAttribute("srcset", q) : p && (F.test(a.nodeName) ? Q(a, p) : a.setAttribute("src", p)), (q || v) && o(a, {
                                    src: p
                                })
                            }(!x || a.complete) && (x ? L(w) : J--, P(w))
                        }))
                    },
                    T = function() {
                        var a, b = function() {
                            c.loadMode = 3, O()
                        };
                        s = !0, K += 8, c.loadMode = 3, e("scroll", function() {
                            3 == c.loadMode && (c.loadMode = 2), clearTimeout(a), a = f(b, 99)
                        }, !0)
                    };
                return {
                    _: function() {
                        i = b.getElementsByClassName(c.lazyClass), q = b.getElementsByClassName(c.lazyClass + " " + c.preloadClass), C = c.expand, D = Math.round(C * c.expFactor), e("scroll", O, !0), e("resize", O, !0), a.MutationObserver ? new MutationObserver(O).observe(d, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (d.addEventListener("DOMNodeInserted", O, !0), d.addEventListener("DOMAttrModified", O, !0), setInterval(O, 999)), e("hashchange", O, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(a) {
                            b.addEventListener(a, O, !0)
                        }), (s = /d$|^c/.test(b.readyState)) ? T() : (e("load", T), b.addEventListener("DOMContentLoaded", O)), O()
                    },
                    checkElems: O,
                    unveil: S
                }
            }(),
            t = function() {
                var a, d = function(a, b, c) {
                        var d, e, f, g, i = a.parentNode;
                        if (i && (c = q(a, i, c), g = n(a, "lazybeforesizes", {
                                width: c,
                                dataAttr: !!b
                            }), !g.defaultPrevented && (c = g.detail.width, c && c !== a._lazysizesWidth))) {
                            if (a._lazysizesWidth = c, c += "px", a.setAttribute("sizes", c), h.test(i.nodeName || ""))
                                for (d = i.getElementsByTagName("source"), e = 0, f = d.length; f > e; e++) d[e].setAttribute("sizes", c);
                            g.detail.dataAttr || o(a, g.detail)
                        }
                    },
                    f = function() {
                        var b, c = a.length;
                        if (c)
                            for (b = 0; c > b; b++) d(a[b])
                    },
                    g = r(f);
                return {
                    _: function() {
                        a = b.getElementsByClassName(c.autosizesClass), e("resize", g)
                    },
                    checkElems: g,
                    updateElem: d
                }
            }(),
            u = function() {
                u.i || (u.i = !0, t._(), s._())
            };
        return function() {
            var b, d = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 2,
                expand: 359,
                loadMode: 2,
                throttle: 125
            };
            c = a.lazySizesConfig || a.lazysizesConfig || {};
            for (b in d) b in c || (c[b] = d[b]);
            a.lazySizesConfig = c, f(function() {
                c.init && u()
            })
        }(), {
            cfg: c,
            autoSizer: t,
            loader: s,
            init: u,
            uP: o,
            aC: k,
            rC: l,
            hC: j,
            fire: n,
            gW: q
        }
    }
});;
/*! jQuery UI - v1.10.2 - 2013-03-14
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    function i(t, i) {
        var a, n, r, o = t.nodeName.toLowerCase();
        return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var a = 0,
        n = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
                for (var s, a, n = e(this[0]); n.length && n[0] !== document;) {
                    if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
                    n = n.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++a)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                n.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, s) {
            return !!e.data(t, s[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var s = e.attr(t, "tabindex"),
                a = isNaN(s);
            return (a || s >= 0) && i(t, !a)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, s) {
        function a(t, i, s, a) {
            return e.each(n, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
            r = s.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + s] = function(i) {
            return i === t ? o["inner" + s].call(this) : this.each(function() {
                e(this).css(r, a(this, i) + "px")
            })
        }, e.fn["outer" + s] = function(t, i) {
            return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function() {
                e(this).css(r, a(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, i, s) {
                var a, n = e.ui[t].prototype;
                for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
            },
            call: function(e, t, i) {
                var s, a = e.plugins[t];
                if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (s = 0; a.length > s; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i)
            }
        },
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                a = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a)
        }
    })
})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e, t) {
    var i = 0,
        s = Array.prototype.slice,
        n = e.cleanData;
    e.cleanData = function(t) {
        for (var i, s = 0; null != (i = t[s]); s++) try {
            e(i).triggerHandler("remove")
        } catch (a) {}
        n(t)
    }, e.widget = function(i, s, n) {
        var a, r, o, h, l = {},
            u = i.split(".")[0];
        i = i.split(".")[1], a = u + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function(t) {
            return !!e.data(t, a)
        }, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function(e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
        }, e.extend(o, r, {
            version: n.version,
            _proto: e.extend({}, n),
            _childConstructors: []
        }), h = new s, h.options = e.widget.extend({}, h.options), e.each(n, function(i, n) {
            return e.isFunction(n) ? (l[i] = function() {
                var e = function() {
                        return s.prototype[i].apply(this, arguments)
                    },
                    t = function(e) {
                        return s.prototype[i].apply(this, e)
                    };
                return function() {
                    var i, s = this._super,
                        a = this._superApply;
                    return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i
                }
            }(), t) : (l[i] = n, t)
        }), o.prototype = e.widget.extend(h, {
            widgetEventPrefix: r ? h.widgetEventPrefix : i
        }, l, {
            constructor: o,
            namespace: u,
            widgetName: i,
            widgetFullName: a
        }), r ? (e.each(r._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
    }, e.widget.extend = function(i) {
        for (var n, a, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++)
            for (n in r[o]) a = r[o][n], r[o].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
        return i
    }, e.widget.bridge = function(i, n) {
        var a = n.prototype.widgetFullName || i;
        e.fn[i] = function(r) {
            var o = "string" == typeof r,
                h = s.call(arguments, 1),
                l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function() {
                var s, n = e.data(this, a);
                return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, h), s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
            }) : this.each(function() {
                var t = e.data(this, a);
                t ? t.option(r || {})._init() : e.data(this, a, new n(r, this))
            }), l
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, s) {
            s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === s && this.destroy()
                }
            }), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n, a, r, o = i;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (o = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (a = o[i] = e.widget.extend({}, this.options[i]), r = 0; n.length - 1 > r; r++) a[n[r]] = a[n[r]] || {}, a = a[n[r]];
                    if (i = n.pop(), s === t) return a[i] === t ? null : a[i];
                    a[i] = s
                } else {
                    if (s === t) return this.options[i] === t ? null : this.options[i];
                    o[i] = s
                } return this._setOptions(o), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(i, s, n) {
            var a, r = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function(n, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
                }
                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/),
                    u = l[1] + r.eventNamespace,
                    c = l[2];
                c ? a.delegate(c, u, h) : s.bind(u, h)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, s) {
            var n, a, r = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var r, o = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), r = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function(i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    })
})(jQuery);;