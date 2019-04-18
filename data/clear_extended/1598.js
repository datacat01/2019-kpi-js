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
/*! jQuery UI - v1.10.2 - 2013-03-14
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t, e) {
    var i = "ui-effects-";
    t.effects = {
            effect: {}
        },
        function(t, e) {
            function i(t, e, i) {
                var s = u[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
            }

            function s(i) {
                var s = l(),
                    n = s._rgba = [];
                return i = i.toLowerCase(), f(h, function(t, a) {
                    var o, r = a.re.exec(i),
                        h = r && a.parse(r),
                        l = a.space || "rgba";
                    return h ? (o = s[l](h), s[c[l].cache] = o[c[l].cache], n = s._rgba = o._rgba, !1) : e
                }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i]
            }

            function n(t, e, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
            }
            var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                r = /^([\-+])=\s*(\d+\.?\d*)/,
                h = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }],
                l = t.Color = function(e, i, s, n) {
                    return new t.Color.fn.parse(e, i, s, n)
                },
                c = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                u = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                d = l.support = {},
                p = t("<p>")[0],
                f = t.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
                e.cache = "_" + t, e.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), l.fn = t.extend(l.prototype, {
                parse: function(n, o, r, h) {
                    if (n === e) return this._rgba = [null, null, null, null], this;
                    (n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
                    var u = this,
                        d = t.type(n),
                        p = this._rgba = [];
                    return o !== e && (n = [n, o, r, h], d = "array"), "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
                        p[e.idx] = i(n[e.idx], e)
                    }), this) : "object" === d ? (n instanceof l ? f(c, function(t, e) {
                        n[e.cache] && (u[e.cache] = n[e.cache].slice())
                    }) : f(c, function(e, s) {
                        var a = s.cache;
                        f(s.props, function(t, e) {
                            if (!u[a] && s.to) {
                                if ("alpha" === t || null == n[t]) return;
                                u[a] = s.to(u._rgba)
                            }
                            u[a][e.idx] = i(n[t], e, !0)
                        }), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
                    }), this) : e
                },
                is: function(t) {
                    var i = l(t),
                        s = !0,
                        n = this;
                    return f(c, function(t, a) {
                        var o, r = i[a.cache];
                        return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function(t, i) {
                            return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
                        })), s
                    }), s
                },
                _space: function() {
                    var t = [],
                        e = this;
                    return f(c, function(i, s) {
                        e[s.cache] && t.push(i)
                    }), t.pop()
                },
                transition: function(t, e) {
                    var s = l(t),
                        n = s._space(),
                        a = c[n],
                        o = 0 === this.alpha() ? l("transparent") : this,
                        r = o[a.cache] || a.to(o._rgba),
                        h = r.slice();
                    return s = s[a.cache], f(a.props, function(t, n) {
                        var a = n.idx,
                            o = r[a],
                            l = s[a],
                            c = u[n.type] || {};
                        null !== l && (null === o ? h[a] = l : (c.mod && (l - o > c.mod / 2 ? o += c.mod : o - l > c.mod / 2 && (o -= c.mod)), h[a] = i((l - o) * e + o, n)))
                    }), this[n](h)
                },
                blend: function(e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = l(e)._rgba;
                    return l(t.map(i, function(t, e) {
                        return (1 - s) * n[e] + s * t
                    }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) {
                            return null == t ? e > 2 ? 1 : 0 : t
                        });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) {
                            return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                        });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, s = t[0] / 255,
                    n = t[1] / 255,
                    a = t[2] / 255,
                    o = t[3],
                    r = Math.max(s, n, a),
                    h = Math.min(s, n, a),
                    l = r - h,
                    c = r + h,
                    u = .5 * c;
                return e = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o]
            }, c.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    s = t[2],
                    a = t[3],
                    o = .5 >= s ? s * (1 + i) : s + i - s * i,
                    r = 2 * s - o;
                return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
            }, f(c, function(s, n) {
                var a = n.props,
                    o = n.cache,
                    h = n.to,
                    c = n.from;
                l.fn[s] = function(s) {
                    if (h && !this[o] && (this[o] = h(this._rgba)), s === e) return this[o].slice();
                    var n, r = t.type(s),
                        u = "array" === r || "object" === r ? s : arguments,
                        d = this[o].slice();
                    return f(a, function(t, e) {
                        var s = u["object" === r ? t : e.idx];
                        null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                    }), c ? (n = l(c(d)), n[o] = d, n) : l(d)
                }, f(a, function(e, i) {
                    l.fn[e] || (l.fn[e] = function(n) {
                        var a, o = t.type(n),
                            h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
                            l = this[h](),
                            c = l[i.idx];
                        return "undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                    })
                })
            }), l.hook = function(e) {
                var i = e.split(" ");
                f(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, n) {
                            var a, o, r = "";
                            if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
                                if (n = l(a || n), !d.rgba && 1 !== n._rgba[3]) {
                                    for (o = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === r || "transparent" === r) && o && o.style;) try {
                                        r = t.css(o, "backgroundColor"), o = o.parentNode
                                    } catch (h) {}
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                e.style[i] = n
                            } catch (h) {}
                        }
                    }, t.fx.step[i] = function(e) {
                        e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, l.hook(o), t.cssHooks.borderColor = {
                expand: function(t) {
                    var e = {};
                    return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                        e["border" + s + "Color"] = t
                    }), e
                }
            }, a = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery),
        function() {
            function i(e) {
                var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    a = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
                return a
            }

            function s(e, i) {
                var s, n, o = {};
                for (s in i) n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
                return o
            }
            var n = ["add", "remove", "toggle"],
                a = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function(e, a, o, r) {
                var h = t.speed(a, o, r);
                return this.queue(function() {
                    var a, o = t(this),
                        r = o.attr("class") || "",
                        l = h.children ? o.find("*").addBack() : o;
                    l = l.map(function() {
                        var e = t(this);
                        return {
                            el: e,
                            start: i(this)
                        }
                    }), a = function() {
                        t.each(n, function(t, i) {
                            e[i] && o[i + "Class"](e[i])
                        })
                    }, a(), l = l.map(function() {
                        return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                    }), o.attr("class", r), l = l.map(function() {
                        var e = this,
                            i = t.Deferred(),
                            s = t.extend({}, h, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(e)
                                }
                            });
                        return this.el.animate(this.diff, s), i.promise()
                    }), t.when.apply(t, l.get()).done(function() {
                        a(), t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) {
                                e.css(t, "")
                            })
                        }), h.complete.call(o[0])
                    })
                })
            }, t.fn.extend({
                addClass: function(e) {
                    return function(i, s, n, a) {
                        return s ? t.effects.animateClass.call(this, {
                            add: i
                        }, s, n, a) : e.apply(this, arguments)
                    }
                }(t.fn.addClass),
                removeClass: function(e) {
                    return function(i, s, n, a) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
                            remove: i
                        }, s, n, a) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass),
                toggleClass: function(i) {
                    return function(s, n, a, o, r) {
                        return "boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {
                            add: s
                        } : {
                            remove: s
                        }, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
                            toggle: s
                        }, n, a, o)
                    }
                }(t.fn.toggleClass),
                switchClass: function(e, i, s, n, a) {
                    return t.effects.animateClass.call(this, {
                        add: i,
                        remove: e
                    }, s, n, a)
                }
            })
        }(),
        function() {
            function s(e, i, s, n) {
                return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                    effect: e
                }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
            }

            function n(e) {
                return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
            }
            t.extend(t.effects, {
                version: "1.10.2",
                save: function(t, e) {
                    for (var s = 0; e.length > s; s++) null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
                },
                restore: function(t, s) {
                    var n, a;
                    for (a = 0; s.length > a; a++) null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n))
                },
                setMode: function(t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                },
                getBaseline: function(t, e) {
                    var i, s;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = t[1] / e.width
                    }
                    return {
                        x: s,
                        y: i
                    }
                },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = {
                            width: e.outerWidth(!0),
                            height: e.outerHeight(!0),
                            "float": e.css("float")
                        },
                        s = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        n = {
                            width: e.width(),
                            height: e.height()
                        },
                        a = document.activeElement;
                    try {
                        a.id
                    } catch (o) {
                        a = document.body
                    }
                    return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
                        position: "relative"
                    }), e.css({
                        position: "relative"
                    })) : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function(t, s) {
                        i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(n), s.css(i).show()
                },
                removeWrapper: function(e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                },
                setTransition: function(e, i, s, n) {
                    return n = n || {}, t.each(i, function(t, i) {
                        var a = e.cssUnit(i);
                        a[0] > 0 && (n[i] = a[0] * s + a[1])
                    }), n
                }
            }), t.fn.extend({
                effect: function() {
                    function e(e) {
                        function s() {
                            t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
                        }
                        var n = t(this),
                            a = i.complete,
                            r = i.mode;
                        (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
                    }
                    var i = s.apply(this, arguments),
                        n = i.mode,
                        a = i.queue,
                        o = t.effects.effect[i.effect];
                    return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function() {
                        i.complete && i.complete.call(this)
                    }) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
                },
                show: function(t) {
                    return function(e) {
                        if (n(e)) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "show", this.effect.call(this, i)
                    }
                }(t.fn.show),
                hide: function(t) {
                    return function(e) {
                        if (n(e)) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "hide", this.effect.call(this, i)
                    }
                }(t.fn.hide),
                toggle: function(t) {
                    return function(e) {
                        if (n(e) || "boolean" == typeof e) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    }
                }(t.fn.toggle),
                cssUnit: function(e) {
                    var i = this.css(e),
                        s = [];
                    return t.each(["em", "px", "%", "pt"], function(t, e) {
                        i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                    }), s
                }
            })
        }(),
        function() {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                e[i] = function(e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function(t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function(t) {
                    for (var e, i = 4;
                        ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function(e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function(t) {
                    return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
        }()
})(jQuery);;
/*
 * @name BeautyTips
 * @desc a tooltips/baloon-help plugin for jQuery
 *
 * @author Jeff Robbins - Lullabot - http://www.lullabot.com
 * @version 0.9.5 release candidate 1  (5/20/2009)
 */
jQuery.bt = {
    version: '0.9.5-rc1'
};;
(function($) {
    jQuery.fn.bt = function(content, options) {
        if (typeof content != 'string') {
            var contentSelect = true;
            options = content;
            content = false;
        } else {
            var contentSelect = false;
        }
        if (jQuery.fn.hoverIntent && jQuery.bt.defaults.trigger == 'hover') {
            jQuery.bt.defaults.trigger = 'hoverIntent';
        }
        return this.each(function(index) {
            var opts = jQuery.extend(false, jQuery.bt.defaults, jQuery.bt.options, options);
            opts.spikeLength = numb(opts.spikeLength);
            opts.spikeGirth = numb(opts.spikeGirth);
            opts.overlap = numb(opts.overlap);
            var ajaxTimeout = false;
            if (opts.killTitle) {
                $(this).find('[title]').andSelf().each(function() {
                    if (!$(this).attr('bt-xTitle')) {
                        $(this).attr('bt-xTitle', $(this).attr('title')).attr('title', '');
                    }
                });
            }
            if (typeof opts.trigger == 'string') {
                opts.trigger = [opts.trigger];
            }
            if (opts.trigger[0] == 'hoverIntent') {
                var hoverOpts = jQuery.extend(opts.hoverIntentOpts, {
                    over: function() {
                        this.btOn();
                    },
                    out: function() {
                        this.btOff();
                    }
                });
                $(this).hoverIntent(hoverOpts);
            } else if (opts.trigger[0] == 'hover') {
                $(this).hover(function() {
                    this.btOn();
                }, function() {
                    this.btOff();
                });
            } else if (opts.trigger[0] == 'now') {
                if ($(this).hasClass('bt-active')) {
                    this.btOff();
                } else {
                    this.btOn();
                }
            } else if (opts.trigger[0] == 'none') {} else if (opts.trigger.length > 1 && opts.trigger[0] != opts.trigger[1]) {
                $(this).bind(opts.trigger[0], function() {
                    this.btOn();
                }).bind(opts.trigger[1], function() {
                    this.btOff();
                });
            } else {
                $(this).bind(opts.trigger[0], function() {
                    if ($(this).hasClass('bt-active')) {
                        this.btOff();
                    } else {
                        this.btOn();
                    }
                });
            }
            this.btOn = function() {
                if (typeof $(this).data('bt-box') == 'object') {
                    this.btOff();
                }
                opts.preBuild.apply(this);
                $(jQuery.bt.vars.closeWhenOpenStack).btOff();
                $(this).addClass('bt-active ' + opts.activeClass);
                if (contentSelect && opts.ajaxPath == null) {
                    if (opts.killTitle) {
                        $(this).attr('title', $(this).attr('bt-xTitle'));
                    }
                    content = $.isFunction(opts.contentSelector) ? opts.contentSelector.apply(this) : eval(opts.contentSelector);
                    if (opts.killTitle) {
                        $(this).attr('title', '');
                    }
                }
                if (opts.ajaxPath != null && content == false) {
                    if (typeof opts.ajaxPath == 'object') {
                        var url = eval(opts.ajaxPath[0]);
                        url += opts.ajaxPath[1] ? ' ' + opts.ajaxPath[1] : '';
                    } else {
                        var url = opts.ajaxPath;
                    }
                    var off = url.indexOf(" ");
                    if (off >= 0) {
                        var selector = url.slice(off, url.length);
                        url = url.slice(0, off);
                    }
                    var cacheData = opts.ajaxCache ? $(document.body).data('btCache-' + url.replace(/\./g, '')) : null;
                    if (typeof cacheData == 'string') {
                        content = selector ? $("<div/>").append(cacheData.replace(/<script(.|\s)*?\/script>/g, "")).find(selector) : cacheData;
                    } else {
                        var target = this;
                        var ajaxOpts = jQuery.extend(false, {
                            type: opts.ajaxType,
                            data: opts.ajaxData,
                            cache: opts.ajaxCache,
                            url: url,
                            complete: function(XMLHttpRequest, textStatus) {
                                if (textStatus == 'success' || textStatus == 'notmodified') {
                                    if (opts.ajaxCache) {
                                        $(document.body).data('btCache-' + url.replace(/\./g, ''), XMLHttpRequest.responseText);
                                    }
                                    ajaxTimeout = false;
                                    content = selector ? $("<div/>").append(XMLHttpRequest.responseText.replace(/<script(.|\s)*?\/script>/g, "")).find(selector) : XMLHttpRequest.responseText;
                                } else {
                                    if (textStatus == 'timeout') {
                                        ajaxTimeout = true;
                                    }
                                    content = opts.ajaxError.replace(/%error/g, XMLHttpRequest.statusText);
                                }
                                if ($(target).hasClass('bt-active')) {
                                    target.btOn();
                                }
                            }
                        }, opts.ajaxOpts);
                        jQuery.ajax(ajaxOpts);
                        content = opts.ajaxLoading;
                    }
                }
                var shadowMarginX = 0;
                var shadowMarginY = 0;
                var shadowShiftX = 0;
                var shadowShiftY = 0;
                if (opts.shadow && !shadowSupport()) {
                    opts.shadow = false;
                    jQuery.extend(opts, opts.noShadowOpts);
                }
                if (opts.shadow) {
                    if (opts.shadowBlur > Math.abs(opts.shadowOffsetX)) {
                        shadowMarginX = opts.shadowBlur * 2;
                    } else {
                        shadowMarginX = opts.shadowBlur + Math.abs(opts.shadowOffsetX);
                    }
                    shadowShiftX = (opts.shadowBlur - opts.shadowOffsetX) > 0 ? opts.shadowBlur - opts.shadowOffsetX : 0;
                    if (opts.shadowBlur > Math.abs(opts.shadowOffsetY)) {
                        shadowMarginY = opts.shadowBlur * 2;
                    } else {
                        shadowMarginY = opts.shadowBlur + Math.abs(opts.shadowOffsetY);
                    }
                    shadowShiftY = (opts.shadowBlur - opts.shadowOffsetY) > 0 ? opts.shadowBlur - opts.shadowOffsetY : 0;
                }
                if (opts.offsetParent) {
                    var offsetParent = $(opts.offsetParent);
                    var offsetParentPos = offsetParent.offset();
                    var pos = $(this).offset();
                    var top = numb(pos.top) - numb(offsetParentPos.top) + numb($(this).css('margin-top')) - shadowShiftY;
                    var left = numb(pos.left) - numb(offsetParentPos.left) + numb($(this).css('margin-left')) - shadowShiftX;
                } else {
                    var offsetParent = ($(this).css('position') == 'absolute') ? $(this).parents().eq(0).offsetParent() : $(this).offsetParent();
                    var pos = $(this).btPosition();
                    var top = numb(pos.top) + numb($(this).css('margin-top')) - shadowShiftY;
                    var left = numb(pos.left) + numb($(this).css('margin-left')) - shadowShiftX;
                }
                var width = $(this).btOuterWidth();
                var height = $(this).outerHeight();
                if (typeof content == 'object') {
                    if (content == null) {
                        return;
                    }
                    var original = content;
                    var clone = $(original).clone(true).show();
                    var origClones = $(original).data('bt-clones') || [];
                    origClones.push(clone);
                    $(original).data('bt-clones', origClones);
                    $(clone).data('bt-orig', original);
                    $(this).data('bt-content-orig', {
                        original: original,
                        clone: clone
                    });
                    content = clone;
                }
                if (typeof content == 'null' || content == '') {
                    return;
                }
                var $text = $('<div class="bt-content"></div>').append(content).css({
                    padding: opts.padding,
                    position: 'absolute',
                    width: (opts.shrinkToFit ? 'auto' : opts.width),
                    zIndex: opts.textzIndex,
                    left: shadowShiftX,
                    top: shadowShiftY
                }).css(opts.cssStyles);
                var $box = $('<div class="bt-wrapper"></div>').append($text).addClass(opts.cssClass).css({
                    position: 'absolute',
                    width: opts.width,
                    zIndex: opts.wrapperzIndex,
                    visibility: 'hidden'
                }).appendTo(offsetParent);
                if (jQuery.fn.bgiframe) {
                    $text.bgiframe();
                    $box.bgiframe();
                }
                $(this).data('bt-box', $box);
                var scrollTop = numb($(document).scrollTop());
                var scrollLeft = numb($(document).scrollLeft());
                var docWidth = numb($(window).width());
                var docHeight = numb($(window).height());
                var winRight = scrollLeft + docWidth;
                var winBottom = scrollTop + docHeight;
                var space = new Object();
                var thisOffset = $(this).offset();
                space.top = thisOffset.top - scrollTop;
                space.bottom = docHeight - ((thisOffset + height) - scrollTop);
                space.left = thisOffset.left - scrollLeft;
                space.right = docWidth - ((thisOffset.left + width) - scrollLeft);
                var textOutHeight = numb($text.outerHeight());
                var textOutWidth = numb($text.btOuterWidth());
                if (opts.positions.constructor == String) {
                    opts.positions = opts.positions.replace(/ /, '').split(',');
                }
                if (opts.positions[0] == 'most') {
                    var position = 'top';
                    for (var pig in space) {
                        position = space[pig] > space[position] ? pig : position;
                    }
                } else {
                    for (var x in opts.positions) {
                        var position = opts.positions[x];
                        if ((position == 'left' || position == 'right') && space[position] > textOutWidth + opts.spikeLength) {
                            break;
                        } else if ((position == 'top' || position == 'bottom') && space[position] > textOutHeight + opts.spikeLength) {
                            break;
                        }
                    }
                }
                var horiz = left + ((width - textOutWidth) * .5);
                var vert = top + ((height - textOutHeight) * .5);
                var points = new Array();
                var textTop, textLeft, textRight, textBottom, textTopSpace, textBottomSpace, textLeftSpace, textRightSpace, crossPoint, textCenter, spikePoint;
                switch (position) {
                    case 'top':
                        $text.css('margin-bottom', opts.spikeLength + 'px');
                        $box.css({
                            top: (top - $text.outerHeight(true)) + opts.overlap,
                            left: horiz
                        });
                        textRightSpace = (winRight - opts.windowMargin) - ($text.offset().left + $text.btOuterWidth(true));
                        var xShift = shadowShiftX;
                        if (textRightSpace < 0) {
                            $box.css('left', (numb($box.css('left')) + textRightSpace) + 'px');
                            xShift -= textRightSpace;
                        }
                        textLeftSpace = ($text.offset().left + numb($text.css('margin-left'))) - (scrollLeft + opts.windowMargin);
                        if (textLeftSpace < 0) {
                            $box.css('left', (numb($box.css('left')) - textLeftSpace) + 'px');
                            xShift += textLeftSpace;
                        }
                        textTop = $text.btPosition().top + numb($text.css('margin-top'));
                        textLeft = $text.btPosition().left + numb($text.css('margin-left'));
                        textRight = textLeft + $text.btOuterWidth();
                        textBottom = textTop + $text.outerHeight();
                        textCenter = {
                            x: textLeft + ($text.btOuterWidth() * opts.centerPointX),
                            y: textTop + ($text.outerHeight() * opts.centerPointY)
                        };
                        points[points.length] = spikePoint = {
                            y: textBottom + opts.spikeLength,
                            x: ((textRight - textLeft) * .5) + xShift,
                            type: 'spike'
                        };
                        crossPoint = findIntersectX(spikePoint.x, spikePoint.y, textCenter.x, textCenter.y, textBottom);
                        crossPoint.x = crossPoint.x < textLeft + opts.spikeGirth / 2 + opts.cornerRadius ? textLeft + opts.spikeGirth / 2 + opts.cornerRadius : crossPoint.x;
                        crossPoint.x = crossPoint.x > (textRight - opts.spikeGirth / 2) - opts.cornerRadius ? (textRight - opts.spikeGirth / 2) - opts.CornerRadius : crossPoint.x;
                        points[points.length] = {
                            x: crossPoint.x - (opts.spikeGirth / 2),
                            y: textBottom,
                            type: 'join'
                        };
                        points[points.length] = {
                            x: textLeft,
                            y: textBottom,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: textLeft,
                            y: textTop,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: textRight,
                            y: textTop,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: textRight,
                            y: textBottom,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: crossPoint.x + (opts.spikeGirth / 2),
                            y: textBottom,
                            type: 'join'
                        };
                        points[points.length] = spikePoint;
                        break;
                    case 'left':
                        $text.css('margin-right', opts.spikeLength + 'px');
                        $box.css({
                            top: vert + 'px',
                            left: ((left - $text.btOuterWidth(true)) + opts.overlap) + 'px'
                        });
                        textBottomSpace = (winBottom - opts.windowMargin) - ($text.offset().top + $text.outerHeight(true));
                        var yShift = shadowShiftY;
                        if (textBottomSpace < 0) {
                            $box.css('top', (numb($box.css('top')) + textBottomSpace) + 'px');
                            yShift -= textBottomSpace;
                        }
                        textTopSpace = ($text.offset().top + numb($text.css('margin-top'))) - (scrollTop + opts.windowMargin);
                        if (textTopSpace < 0) {
                            $box.css('top', (numb($box.css('top')) - textTopSpace) + 'px');
                            yShift += textTopSpace;
                        }
                        textTop = $text.btPosition().top + numb($text.css('margin-top'));
                        textLeft = $text.btPosition().left + numb($text.css('margin-left'));
                        textRight = textLeft + $text.btOuterWidth();
                        textBottom = textTop + $text.outerHeight();
                        textCenter = {
                            x: textLeft + ($text.btOuterWidth() * opts.centerPointX),
                            y: textTop + ($text.outerHeight() * opts.centerPointY)
                        };
                        points[points.length] = spikePoint = {
                            x: textRight + opts.spikeLength,
                            y: ((textBottom - textTop) * .5) + yShift,
                            type: 'spike'
                        };
                        crossPoint = findIntersectY(spikePoint.x, spikePoint.y, textCenter.x, textCenter.y, textRight);
                        crossPoint.y = crossPoint.y < textTop + opts.spikeGirth / 2 + opts.cornerRadius ? textTop + opts.spikeGirth / 2 + opts.cornerRadius : crossPoint.y;
                        crossPoint.y = crossPoint.y > (textBottom - opts.spikeGirth / 2) - opts.cornerRadius ? (textBottom - opts.spikeGirth / 2) - opts.cornerRadius : crossPoint.y;
                        points[points.length] = {
                            x: textRight,
                            y: crossPoint.y + opts.spikeGirth / 2,
                            type: 'join'
                        };
                        points[points.length] = {
                            x: textRight,
                            y: textBottom,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: textLeft,
                            y: textBottom,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: textLeft,
                            y: textTop,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: textRight,
                            y: textTop,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: textRight,
                            y: crossPoint.y - opts.spikeGirth / 2,
                            type: 'join'
                        };
                        points[points.length] = spikePoint;
                        break;
                    case 'bottom':
                        $text.css('margin-top', opts.spikeLength + 'px');
                        $box.css({
                            top: (top + height) - opts.overlap,
                            left: horiz
                        });
                        textRightSpace = (winRight - opts.windowMargin) - ($text.offset().left + $text.btOuterWidth(true));
                        var xShift = shadowShiftX;
                        if (textRightSpace < 0) {
                            $box.css('left', (numb($box.css('left')) + textRightSpace) + 'px');
                            xShift -= textRightSpace;
                        }
                        textLeftSpace = ($text.offset().left + numb($text.css('margin-left'))) - (scrollLeft + opts.windowMargin);
                        if (textLeftSpace < 0) {
                            $box.css('left', (numb($box.css('left')) - textLeftSpace) + 'px');
                            xShift += textLeftSpace;
                        }
                        textTop = $text.btPosition().top + numb($text.css('margin-top'));
                        textLeft = $text.btPosition().left + numb($text.css('margin-left'));
                        textRight = textLeft + $text.btOuterWidth();
                        textBottom = textTop + $text.outerHeight();
                        textCenter = {
                            x: textLeft + ($text.btOuterWidth() * opts.centerPointX),
                            y: textTop + ($text.outerHeight() * opts.centerPointY)
                        };
                        points[points.length] = spikePoint = {
                            x: ((textRight - textLeft) * .5) + xShift,
                            y: shadowShiftY,
                            type: 'spike'
                        };
                        crossPoint = findIntersectX(spikePoint.x, spikePoint.y, textCenter.x, textCenter.y, textTop);
                        crossPoint.x = crossPoint.x < textLeft + opts.spikeGirth / 2 + opts.cornerRadius ? textLeft + opts.spikeGirth / 2 + opts.cornerRadius : crossPoint.x;
                        crossPoint.x = crossPoint.x > (textRight - opts.spikeGirth / 2) - opts.cornerRadius ? (textRight - opts.spikeGirth / 2) - opts.cornerRadius : crossPoint.x;
                        points[points.length] = {
                            x: crossPoint.x + opts.spikeGirth / 2,
                            y: textTop,
                            type: 'join'
                        };
                        points[points.length] = {
                            x: textRight,
                            y: textTop,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: textRight,
                            y: textBottom,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: textLeft,
                            y: textBottom,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: textLeft,
                            y: textTop,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: crossPoint.x - (opts.spikeGirth / 2),
                            y: textTop,
                            type: 'join'
                        };
                        points[points.length] = spikePoint;
                        break;
                    case 'right':
                        $text.css('margin-left', (opts.spikeLength + 'px'));
                        $box.css({
                            top: vert + 'px',
                            left: ((left + width) - opts.overlap) + 'px'
                        });
                        textBottomSpace = (winBottom - opts.windowMargin) - ($text.offset().top + $text.outerHeight(true));
                        var yShift = shadowShiftY;
                        if (textBottomSpace < 0) {
                            $box.css('top', (numb($box.css('top')) + textBottomSpace) + 'px');
                            yShift -= textBottomSpace;
                        }
                        textTopSpace = ($text.offset().top + numb($text.css('margin-top'))) - (scrollTop + opts.windowMargin);
                        if (textTopSpace < 0) {
                            $box.css('top', (numb($box.css('top')) - textTopSpace) + 'px');
                            yShift += textTopSpace;
                        }
                        textTop = $text.btPosition().top + numb($text.css('margin-top'));
                        textLeft = $text.btPosition().left + numb($text.css('margin-left'));
                        textRight = textLeft + $text.btOuterWidth();
                        textBottom = textTop + $text.outerHeight();
                        textCenter = {
                            x: textLeft + ($text.btOuterWidth() * opts.centerPointX),
                            y: textTop + ($text.outerHeight() * opts.centerPointY)
                        };
                        points[points.length] = spikePoint = {
                            x: shadowShiftX,
                            y: ((textBottom - textTop) * .5) + yShift,
                            type: 'spike'
                        };
                        crossPoint = findIntersectY(spikePoint.x, spikePoint.y, textCenter.x, textCenter.y, textLeft);
                        crossPoint.y = crossPoint.y < textTop + opts.spikeGirth / 2 + opts.cornerRadius ? textTop + opts.spikeGirth / 2 + opts.cornerRadius : crossPoint.y;
                        crossPoint.y = crossPoint.y > (textBottom - opts.spikeGirth / 2) - opts.cornerRadius ? (textBottom - opts.spikeGirth / 2) - opts.cornerRadius : crossPoint.y;
                        points[points.length] = {
                            x: textLeft,
                            y: crossPoint.y - opts.spikeGirth / 2,
                            type: 'join'
                        };
                        points[points.length] = {
                            x: textLeft,
                            y: textTop,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: textRight,
                            y: textTop,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: textRight,
                            y: textBottom,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: textLeft,
                            y: textBottom,
                            type: 'corner'
                        };
                        points[points.length] = {
                            x: textLeft,
                            y: crossPoint.y + opts.spikeGirth / 2,
                            type: 'join'
                        };
                        points[points.length] = spikePoint;
                        break;
                }
                var canvas = document.createElement('canvas');
                $(canvas).attr('width', (numb($text.btOuterWidth(true)) + opts.strokeWidth * 2 + shadowMarginX)).attr('height', (numb($text.outerHeight(true)) + opts.strokeWidth * 2 + shadowMarginY)).appendTo($box).css({
                    position: 'absolute',
                    zIndex: opts.boxzIndex
                });
                if (typeof G_vmlCanvasManager != 'undefined') {
                    canvas = G_vmlCanvasManager.initElement(canvas);
                }
                if (opts.cornerRadius > 0) {
                    var newPoints = new Array();
                    var newPoint;
                    for (var i = 0; i < points.length; i++) {
                        if (points[i].type == 'corner') {
                            newPoint = betweenPoint(points[i], points[(i - 1) % points.length], opts.cornerRadius);
                            newPoint.type = 'arcStart';
                            newPoints[newPoints.length] = newPoint;
                            newPoints[newPoints.length] = points[i];
                            newPoint = betweenPoint(points[i], points[(i + 1) % points.length], opts.cornerRadius);
                            newPoint.type = 'arcEnd';
                            newPoints[newPoints.length] = newPoint;
                        } else {
                            newPoints[newPoints.length] = points[i];
                        }
                    }
                    points = newPoints;
                }
                var ctx = canvas.getContext("2d");
                if (opts.shadow && opts.shadowOverlap !== true) {
                    var shadowOverlap = numb(opts.shadowOverlap);
                    switch (position) {
                        case 'top':
                            if (opts.shadowOffsetX + opts.shadowBlur - shadowOverlap > 0) {
                                $box.css('top', (numb($box.css('top')) - (opts.shadowOffsetX + opts.shadowBlur - shadowOverlap)));
                            }
                            break;
                        case 'right':
                            if (shadowShiftX - shadowOverlap > 0) {
                                $box.css('left', (numb($box.css('left')) + shadowShiftX - shadowOverlap));
                            }
                            break;
                        case 'bottom':
                            if (shadowShiftY - shadowOverlap > 0) {
                                $box.css('top', (numb($box.css('top')) + shadowShiftY - shadowOverlap));
                            }
                            break;
                        case 'left':
                            if (opts.shadowOffsetY + opts.shadowBlur - shadowOverlap > 0) {
                                $box.css('left', (numb($box.css('left')) - (opts.shadowOffsetY + opts.shadowBlur - shadowOverlap)));
                            }
                            break;
                    }
                }
                drawIt.apply(ctx, [points], opts.strokeWidth);
                ctx.fillStyle = opts.fill;
                if (opts.shadow) {
                    ctx.shadowOffsetX = opts.shadowOffsetX;
                    ctx.shadowOffsetY = opts.shadowOffsetY;
                    ctx.shadowBlur = opts.shadowBlur;
                    ctx.shadowColor = opts.shadowColor;
                }
                ctx.closePath();
                ctx.fill();
                if (opts.strokeWidth > 0) {
                    ctx.shadowColor = 'rgba(0, 0, 0, 0)';
                    ctx.lineWidth = opts.strokeWidth;
                    ctx.strokeStyle = opts.strokeStyle;
                    ctx.beginPath();
                    drawIt.apply(ctx, [points], opts.strokeWidth);
                    ctx.closePath();
                    ctx.stroke();
                }
                opts.preShow.apply(this, [$box[0]]);
                $box.css({
                    display: 'none',
                    visibility: 'visible'
                });
                opts.showTip.apply(this, [$box[0]]);
                if (opts.overlay) {
                    var overlay = $('<div class="bt-overlay"></div>').css({
                        position: 'absolute',
                        backgroundColor: 'blue',
                        top: top,
                        left: left,
                        width: width,
                        height: height,
                        opacity: '.2'
                    }).appendTo(offsetParent);
                    $(this).data('overlay', overlay);
                }
                if ((opts.ajaxPath != null && opts.ajaxCache == false) || ajaxTimeout) {
                    content = false;
                }
                if (opts.clickAnywhereToClose) {
                    jQuery.bt.vars.clickAnywhereStack.push(this);
                    $(document).click(jQuery.bt.docClick);
                }
                if (opts.closeWhenOthersOpen) {
                    jQuery.bt.vars.closeWhenOpenStack.push(this);
                }
                opts.postShow.apply(this, [$box[0]]);
                currentDiv = this;
                $(".bt-content").mouseout(function() {
                    $(currentDiv).trigger('btContentHover');
                });
            };
            this.btOff = function() {
                var box = $(this).data('bt-box');
                if (typeof box == 'undefined') {
                    return;
                }
                opts.preHide.apply(this, [box]);
                var i = this;
                i.btCleanup = function() {
                    var box = $(i).data('bt-box');
                    var contentOrig = $(i).data('bt-content-orig');
                    var overlay = $(i).data('bt-overlay');
                    if (typeof box == 'object') {
                        $(box).remove();
                        $(i).removeData('bt-box');
                    }
                    if (typeof contentOrig == 'object') {
                        var clones = $(contentOrig.original).data('bt-clones');
                        $(contentOrig).data('bt-clones', arrayRemove(clones, contentOrig.clone));
                    }
                    if (typeof overlay == 'object') {
                        $(overlay).remove();
                        $(i).removeData('bt-overlay');
                    }
                    jQuery.bt.vars.clickAnywhereStack = arrayRemove(jQuery.bt.vars.clickAnywhereStack, i);
                    jQuery.bt.vars.closeWhenOpenStack = arrayRemove(jQuery.bt.vars.closeWhenOpenStack, i);
                    $(i).removeClass('bt-active ' + opts.activeClass);
                    opts.postHide.apply(i);
                }
                opts.hideTip.apply(this, [box, i.btCleanup]);
            };
            var refresh = this.btRefresh = function() {
                this.btOff();
                this.btOn();
            };
        });

        function drawIt(points, strokeWidth) {
            this.moveTo(points[0].x, points[0].y);
            for (i = 1; i < points.length; i++) {
                if (points[i - 1].type == 'arcStart') {
                    this.quadraticCurveTo(round5(points[i].x, strokeWidth), round5(points[i].y, strokeWidth), round5(points[(i + 1) % points.length].x, strokeWidth), round5(points[(i + 1) % points.length].y, strokeWidth));
                    i++;
                } else {
                    this.lineTo(round5(points[i].x, strokeWidth), round5(points[i].y, strokeWidth));
                }
            }
        };

        function round5(num, strokeWidth) {
            var ret;
            strokeWidth = numb(strokeWidth);
            if (strokeWidth % 2) {
                ret = num;
            } else {
                ret = Math.round(num - .5) + .5;
            }
            return ret;
        };

        function numb(num) {
            return parseInt(num) || 0;
        };

        function arrayRemove(arr, elem) {
            var x, newArr = new Array();
            for (x in arr) {
                if (arr[x] != elem) {
                    newArr.push(arr[x]);
                }
            }
            return newArr;
        };

        function canvasSupport() {
            var canvas_compatible = false;
            try {
                canvas_compatible = !!(document.createElement('canvas').getContext('2d'));
            } catch (e) {
                canvas_compatible = !!(document.createElement('canvas').getContext);
            }
            return canvas_compatible;
        }

        function shadowSupport() {
            try {
                var userAgent = navigator.userAgent.toLowerCase();
                if (/webkit/.test(userAgent)) {
                    return true;
                } else if (/gecko|mozilla/.test(userAgent) && parseFloat(userAgent.match(/firefox\/(\d+(?:\.\d+)+)/)[1]) >= 3.1) {
                    return true;
                }
            } catch (err) {}
            return false;
        }

        function betweenPoint(point1, point2, dist) {
            var y, x;
            if (point1.x == point2.x) {
                y = point1.y < point2.y ? point1.y + dist : point1.y - dist;
                return {
                    x: point1.x,
                    y: y
                };
            } else if (point1.y == point2.y) {
                x = point1.x < point2.x ? point1.x + dist : point1.x - dist;
                return {
                    x: x,
                    y: point1.y
                };
            }
        };

        function centerPoint(arcStart, corner, arcEnd) {
            var x = corner.x == arcStart.x ? arcEnd.x : arcStart.x;
            var y = corner.y == arcStart.y ? arcEnd.y : arcStart.y;
            var startAngle, endAngle;
            if (arcStart.x < arcEnd.x) {
                if (arcStart.y > arcEnd.y) {
                    startAngle = (Math.PI / 180) * 180;
                    endAngle = (Math.PI / 180) * 90;
                } else {
                    startAngle = (Math.PI / 180) * 90;
                    endAngle = 0;
                }
            } else {
                if (arcStart.y > arcEnd.y) {
                    startAngle = (Math.PI / 180) * 270;
                    endAngle = (Math.PI / 180) * 180;
                } else {
                    startAngle = 0;
                    endAngle = (Math.PI / 180) * 270;
                }
            }
            return {
                x: x,
                y: y,
                type: 'center',
                startAngle: startAngle,
                endAngle: endAngle
            };
        };

        function findIntersect(r1x1, r1y1, r1x2, r1y2, r2x1, r2y1, r2x2, r2y2) {
            if (r2x1 == r2x2) {
                return findIntersectY(r1x1, r1y1, r1x2, r1y2, r2x1);
            }
            if (r2y1 == r2y2) {
                return findIntersectX(r1x1, r1y1, r1x2, r1y2, r2y1);
            }
            var r1m = (r1y1 - r1y2) / (r1x1 - r1x2);
            var r1b = r1y1 - (r1m * r1x1);
            var r2m = (r2y1 - r2y2) / (r2x1 - r2x2);
            var r2b = r2y1 - (r2m * r2x1);
            var x = (r2b - r1b) / (r1m - r2m);
            var y = r1m * x + r1b;
            return {
                x: x,
                y: y
            };
        };

        function findIntersectY(r1x1, r1y1, r1x2, r1y2, x) {
            if (r1y1 == r1y2) {
                return {
                    x: x,
                    y: r1y1
                };
            }
            var r1m = (r1y1 - r1y2) / (r1x1 - r1x2);
            var r1b = r1y1 - (r1m * r1x1);
            var y = r1m * x + r1b;
            return {
                x: x,
                y: y
            };
        };

        function findIntersectX(r1x1, r1y1, r1x2, r1y2, y) {
            if (r1x1 == r1x2) {
                return {
                    x: r1x1,
                    y: y
                };
            }
            var r1m = (r1y1 - r1y2) / (r1x1 - r1x2);
            var r1b = r1y1 - (r1m * r1x1);
            var x = (y - r1b) / r1m;
            return {
                x: x,
                y: y
            };
        };
    };
    jQuery.fn.btPosition = function() {
        function num(elem, prop) {
            return elem[0] && parseInt(jQuery(elem[0]).css(prop), 10) || 0;
        };
        var left = 0,
            top = 0,
            results;
        if (this[0]) {
            var offsetParent = this.offsetParent(),
                offset = this.offset(),
                parentOffset = /^body|html$/i.test(offsetParent[0].tagName) ? {
                    top: 0,
                    left: 0
                } : offsetParent.offset();
            offset.top -= num(this, 'marginTop');
            offset.left -= num(this, 'marginLeft');
            parentOffset.top += num(offsetParent, 'borderTopWidth');
            parentOffset.left += num(offsetParent, 'borderLeftWidth');
            results = {
                top: offset.top - parentOffset.top,
                left: offset.left - parentOffset.left
            };
        }
        return results;
    };
    jQuery.fn.btOuterWidth = function(margin) {
        function num(elem, prop) {
            return elem[0] && parseInt(jQuery(elem[0]).css(prop), 10) || 0;
        };
        return this["innerWidth"]() +
            num(this, "borderLeftWidth") +
            num(this, "borderRightWidth") +
            (margin ? num(this, "marginLeft") +
                num(this, "marginRight") : 0);
    };
    jQuery.fn.btOn = function() {
        return this.each(function(index) {
            if (jQuery.isFunction(this.btOn)) {
                this.btOn();
            }
        });
    };
    jQuery.fn.btOff = function() {
        return this.each(function(index) {
            if (jQuery.isFunction(this.btOff)) {
                this.btOff();
            }
        });
    };
    jQuery.bt.vars = {
        clickAnywhereStack: [],
        closeWhenOpenStack: []
    };
    jQuery.bt.docClick = function(e) {
        if (!e) {
            var e = window.event;
        };
        if (!$(e.target).parents().andSelf().filter('.bt-wrapper, .bt-active').length && jQuery.bt.vars.clickAnywhereStack.length) {
            $(jQuery.bt.vars.clickAnywhereStack).btOff();
            $(document).unbind('click', jQuery.bt.docClick);
        }
    };
    jQuery.bt.defaults = {
        trigger: 'hover',
        clickAnywhereToClose: true,
        closeWhenOthersOpen: false,
        shrinkToFit: false,
        width: '200px',
        padding: '10px',
        spikeGirth: 10,
        spikeLength: 15,
        overlap: 0,
        overlay: false,
        killTitle: true,
        textzIndex: 9999,
        boxzIndex: 9998,
        wrapperzIndex: 9997,
        offsetParent: null,
        positions: ['most'],
        fill: "rgb(255, 255, 102)",
        windowMargin: 10,
        strokeWidth: 1,
        strokeStyle: "#000",
        cornerRadius: 5,
        centerPointX: .5,
        centerPointY: .5,
        shadow: false,
        shadowOffsetX: 2,
        shadowOffsetY: 2,
        shadowBlur: 3,
        shadowColor: "#000",
        shadowOverlap: false,
        noShadowOpts: {
            strokeStyle: '#999'
        },
        cssClass: '',
        cssStyles: {},
        activeClass: 'bt-active',
        contentSelector: "$(this).attr('title')",
        ajaxPath: null,
        ajaxError: '<strong>ERROR:</strong> <em>%error</em>',
        ajaxLoading: '<blink>Loading...</blink>',
        ajaxData: {},
        ajaxType: 'GET',
        ajaxCache: true,
        ajaxOpts: {},
        preBuild: function() {},
        preShow: function(box) {},
        showTip: function(box) {
            $(box).show();
        },
        postShow: function(box) {},
        preHide: function(box) {},
        hideTip: function(box, callback) {
            $(box).hide();
            callback();
        },
        postHide: function() {},
        hoverIntentOpts: {
            interval: 300,
            timeout: 500
        }
    };
    jQuery.bt.options = {};
})(jQuery);;
(function($) {
    Drupal.behaviors.beautytips = {
        attach: function(context, settings) {
            if (typeof(jQuery.bt) == "undefined" && jQuery.bt == null) {
                return
            }
            jQuery.bt.options.closeWhenOthersOpen = true;
            var beautytips = Drupal.settings.beautytips;
            var styles = Drupal.settings.beautytipStyles;
            for (var key in beautytips) {
                var btOptions = styles[beautytips[key]["style"]];
                if (beautytips[key]["list"]) {
                    for (var k = 0; k < beautytips[key]["list"].length; k++) {
                        btOptions[beautytips[key]["list"][k]] = beautytips[key][beautytips[key]["list"][k]]
                    }
                }
                if (beautytips[key]["cssSelect"]) {
                    if (beautytips[key]["animate"]) {
                        btOptions = beautytipsAddAnimations(beautytips[key]["animate"], btOptions)
                    }
                    if (beautytips[key]["contentSelector"] && beautytips[key]["preEval"]) {
                        $(beautytips[key]["cssSelect"]).each(function() {
                            if (!beautytipsProcessed(this, false)) {
                                eval(beautytips[key]["contentSelector"])
                            }
                        })
                    }
                    if (beautytips[key]["text"]) {
                        $(beautytips[key]["cssSelect"]).each(function() {
                            if (!beautytipsProcessed(this)) {
                                if (beautytipsOffsetParentEval(beautytips[key], btOptions)) {
                                    btOptions.offsetParent = eval(btOptions.offsetParent)
                                }
                                $(this).bt(beautytips[key]["text"], btOptions)
                            }
                        })
                    } else {
                        if (beautytips[key]["ajaxPath"]) {
                            $(beautytips[key]["cssSelect"]).each(function() {
                                if (!beautytipsProcessed(this)) {
                                    if (beautytips[key]["ajaxDisableLink"]) {
                                        $(this).click(function(event) {
                                            event.preventDefault()
                                        })
                                    }
                                    if (beautytipsOffsetParentEval(beautytips[key], btOptions)) {
                                        btOptions.offsetParent = eval(btOptions.offsetParent)
                                    }
                                    $(this).bt(btOptions)
                                }
                            })
                        } else {
                            $(beautytips[key]["cssSelect"]).each(function() {
                                if (!beautytipsProcessed(this)) {
                                    if (beautytipsOffsetParentEval(beautytips[key], btOptions)) {
                                        btOptions.offsetParent = eval(btOptions.offsetParent)
                                    }
                                    $(this).bt(btOptions)
                                }
                            })
                        }
                    }
                }
                btOptions.length = 0
            }
        }
    };

    function beautytipsProcessed(element, addClass) {
        if ($(element).hasClass("beautytips-module-processed")) {
            return true
        }
        if (addClass != false) {
            $(element).addClass("beautytips-module-processed")
        }
        return false
    }

    function beautytipsOffsetParentEval(beautytip, btOptions) {
        return (beautytip.offsetParentEval === "always" || (beautytip.offsetParentEval === "once" && jQuery.type(btOptions.offsetParent) === "string"))
    }

    function beautytipsAddAnimations(animations, btOptions) {
        switch (animations.on) {
            case "none":
                break;
            case "fadeIn":
                btOptions.showTip = function(box) {
                    $(box).fadeIn(500)
                };
                break;
            case "slideIn":
                break
        }
        switch (animations.off) {
            case "none":
                break;
            case "fadeOut":
                btOptions.hideTip = function(box, callback) {
                    $(box).animate({
                        opacity: 0
                    }, 500, callback)
                };
                break;
            case "slideOut":
                btOptions.hideTip = function(box, callback) {
                    var width = $("body").width();
                    $(box).animate({
                        left: "+=" + width + "px"
                    }, "slow", callback)
                };
                break
        }
        return btOptions
    }
})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t) {
    var e = 0,
        i = {},
        s = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show", t.widget("ui.accordion", {
        version: "1.10.2",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t(),
                content: this.active.length ? this.active.next() : t()
            }
        },
        _createIcons: function() {
            var e = this.options.icons;
            e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var t;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) {
            return "active" === t ? (this._activate(e), undefined) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e), undefined)
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode,
                    s = this.headers.length,
                    n = this.headers.index(e.target),
                    a = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        a = this.headers[(n + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        a = this.headers[(n - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        a = this.headers[0];
                        break;
                    case i.END:
                        a = this.headers[s - 1]
                }
                a && (t(e.target).attr("tabIndex", -1), t(a).attr("tabIndex", 0), a.focus(), e.preventDefault())
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(), (e.active === !1 && e.collapsible === !0 || !this.headers.length) && (e.active = !1, this.active = t()), e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var i, s = this.options,
                n = s.heightStyle,
                a = this.element.parent(),
                o = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e);
            this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(e) {
                var i = t(this),
                    s = i.attr("id"),
                    n = i.next(),
                    a = n.attr("id");
                s || (s = o + "-header-" + e, i.attr("id", s)), a || (a = o + "-panel-" + e, n.attr("id", a)), i.attr("aria-controls", a), n.attr("aria-labelledby", s)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(s.event), "fill" === n ? (i = a.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.headers.each(function() {
                i -= t(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === n && (i = 0, this.headers.next().each(function() {
                i = Math.max(i, t(this).css("height", "").height())
            }).height(i))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i = this.options,
                s = this.active,
                n = t(e.currentTarget),
                a = n[0] === s[0],
                o = a && i.collapsible,
                r = o ? t() : n.next(),
                h = s.next(),
                l = {
                    oldHeader: s,
                    oldPanel: h,
                    newHeader: o ? t() : n,
                    newPanel: r
                };
            e.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", e, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel,
                s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), i.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(t, e, n) {
            var a, o, r, h = this,
                l = 0,
                c = t.length && (!e.length || t.index() < e.index()),
                u = this.options.animate || {},
                d = c && u.down || u,
                p = function() {
                    h._toggleComplete(n)
                };
            return "number" == typeof d && (r = d), "string" == typeof d && (o = d), o = o || d.easing || u.easing, r = r || d.duration || u.duration, e.length ? t.length ? (a = t.show().outerHeight(), e.animate(i, {
                duration: r,
                easing: o,
                step: function(t, e) {
                    e.now = Math.round(t)
                }
            }), t.hide().animate(s, {
                duration: r,
                easing: o,
                complete: p,
                step: function(t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(a - e.outerHeight() - l), l = 0)
                }
            }), undefined) : e.animate(i, r, o, p) : t.animate(s, r, o, p)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel;
            e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    })
})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t, e) {
    function i() {
        return ++n
    }

    function s(t) {
        return t.hash.length > 1 && decodeURIComponent(t.href.replace(a, "")) === decodeURIComponent(location.href.replace(a, ""))
    }
    var n = 0,
        a = /#.*$/;
    t.widget("ui.tabs", {
        version: "1.10.2",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var e = this,
                i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var i = this.options.active,
                s = this.options.collapsible,
                n = location.hash.substring(1);
            return null === i && (n && this.tabs.each(function(s, a) {
                return t(a).attr("aria-controls") === n ? (i = s, !1) : e
            }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function(i) {
            var s = t(this.document[0].activeElement).closest("li"),
                n = this.tabs.index(s),
                a = !0;
            if (!this._handlePageNav(i)) {
                switch (i.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        a = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
                    case t.ui.keyCode.ENTER:
                        return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e;
                    default:
                        return
                }
                i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, a), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", n)
                }, this.delay))
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(i) {
            return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
        },
        _findNextTab: function(e, i) {
            function s() {
                return e > n && (e = 0), 0 > e && (e = n), e
            }
            for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        },
        _setOption: function(t, i) {
            return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
        },
        _tabId: function(t) {
            return t.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = t(), this.anchors.each(function(i, n) {
                var a, o, r, h = t(n).uniqueId().attr("id"),
                    l = t(n).closest("li"),
                    u = l.attr("aria-controls");
                s(n) ? (a = n.hash, o = e.element.find(e._sanitizeSelector(a))) : (r = e._tabId(l), a = "#" + r, o = e.element.find(a), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), u && l.data("ui-tabs-aria-controls", u), l.attr({
                    "aria-controls": a.substring(1),
                    "aria-labelledby": h
                }), o.attr("aria-labelledby", h)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, s = 0; i = this.tabs[s]; s++) e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },
        _setupEvents: function(e) {
            var i = {
                click: function(t) {
                    t.preventDefault()
                }
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options,
                s = this.active,
                n = t(e.currentTarget),
                a = n.closest("li"),
                o = a[0] === s[0],
                r = o && i.collapsible,
                h = r ? t() : this._getPanelForTab(a),
                l = s.length ? this._getPanelForTab(s) : t(),
                u = {
                    oldTab: s,
                    oldPanel: l,
                    newTab: r ? t() : a,
                    newPanel: h
                };
            e.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? t() : a, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), e), this._toggle(e, u))
        },
        _toggle: function(e, i) {
            function s() {
                a.running = !1, a._trigger("activate", e, i)
            }

            function n() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
            }
            var a = this,
                o = i.newPanel,
                r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), i.oldTab.attr("aria-selected", "false"), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), o.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), i.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(i) {
            var s = this.options.disabled;
            s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function(t) {
                return t !== i ? t : null
            }) : t.map(this.tabs, function(t, e) {
                return e !== i ? e : null
            })), this._setupDisabled(s))
        },
        disable: function(i) {
            var s = this.options.disabled;
            if (s !== !0) {
                if (i === e) s = !0;
                else {
                    if (i = this._getIndex(i), -1 !== t.inArray(i, s)) return;
                    s = t.isArray(s) ? t.merge([i], s).sort() : [i]
                }
                this._setupDisabled(s)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var n = this,
                a = this.tabs.eq(e),
                o = a.find(".ui-tabs-anchor"),
                r = this._getPanelForTab(a),
                h = {
                    tab: a,
                    panel: r
                };
            s(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function(t) {
                setTimeout(function() {
                    r.html(t), n._trigger("load", i, h)
                }, 1)
            }).complete(function(t, e) {
                setTimeout(function() {
                    "abort" === e && n.panels.stop(!1, !0), a.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(e, i, s) {
            var n = this;
            return {
                url: e.attr("href"),
                beforeSend: function(e, a) {
                    return n._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: a
                    }, s))
                }
            }
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t) {
    var e, i, s, n, a = "ui-button ui-widget ui-state-default ui-corner-all",
        o = "ui-state-hover ui-state-active ",
        r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        h = function() {
            var e = t(this).find(":ui-button");
            setTimeout(function() {
                e.button("refresh")
            }, 1)
        },
        l = function(e) {
            var i = e.name,
                s = e.form,
                n = t([]);
            return i && (i = i.replace(/'/g, "\\'"), n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function() {
                return !this.form
            })), n
        };
    t.widget("ui.button", {
        version: "1.10.2",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, h), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var o = this,
                r = this.options,
                c = "checkbox" === this.type || "radio" === this.type,
                u = c ? "" : "ui-state-active",
                d = "ui-state-focus";
            null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(a).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                r.disabled || this === e && t(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                r.disabled || t(this).removeClass(u)
            }).bind("click" + this.eventNamespace, function(t) {
                r.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function() {
                o.buttonElement.addClass(d)
            }).bind("blur" + this.eventNamespace, function() {
                o.buttonElement.removeClass(d)
            }), c && (this.element.bind("change" + this.eventNamespace, function() {
                n || o.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(t) {
                r.disabled || (n = !1, i = t.pageX, s = t.pageY)
            }).bind("mouseup" + this.eventNamespace, function(t) {
                r.disabled || (i !== t.pageX || s !== t.pageY) && (n = !0)
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return r.disabled || n ? !1 : undefined
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (r.disabled || n) return !1;
                t(this).addClass("ui-state-active"), o.buttonElement.attr("aria-pressed", "true");
                var e = o.element[0];
                l(e).not(e).map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return r.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, o.document.one("mouseup", function() {
                    e = null
                }), undefined)
            }).bind("mouseup" + this.eventNamespace, function() {
                return r.disabled ? !1 : (t(this).removeClass("ui-state-active"), undefined)
            }).bind("keydown" + this.eventNamespace, function(e) {
                return r.disabled ? !1 : ((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"), undefined)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                t(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            })), this._setOption("disabled", r.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var t, e, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(a + " " + o + " " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(t, e) {
            return this._super(t, e), "disabled" === t ? (e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), undefined) : (this._resetButton(), undefined)
        },
        refresh: function() {
            var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? l(this.element[0]).each(function() {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), undefined;
            var e = this.buttonElement.removeClass(r),
                i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                s = this.options.icons,
                n = s.primary && s.secondary,
                a = [];
            s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : a.push("ui-button-text-only"), e.addClass(a.join(" "))
        }
    }), t.widget("ui.buttonset", {
        version: "1.10.2",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(t, e) {
            "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
        },
        refresh: function() {
            var e = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
})(jQuery);;
/*! jQuery UI - v1.10.2 - 2013-03-14
 * http://jqueryui.com
 * Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t) {
    t.effects.effect.slide = function(e, i) {
        var s, n = t(this),
            a = ["position", "top", "bottom", "left", "right", "width", "height"],
            o = t.effects.setMode(n, e.mode || "show"),
            r = "show" === o,
            h = e.direction || "left",
            l = "up" === h || "down" === h ? "top" : "left",
            c = "up" === h || "left" === h,
            u = {};
        t.effects.save(n, a), n.show(), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({
            overflow: "hidden"
        }), r && n.css(l, c ? isNaN(s) ? "-" + s : -s : s), u[l] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
            }
        })
    }
})(jQuery);;