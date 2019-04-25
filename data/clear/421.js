(window.KSR_webpackjsonp = window.KSR_webpackjsonp || []).push([
    [14], {
        "+DSo": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            }), n.d(t, "d", function() {
                return c
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "e", function() {
                return l
            });
            var r = {
                    zero: [0],
                    one: [1],
                    two: [2],
                    few: [3],
                    many: [],
                    other: []
                },
                a = /\{\{\{\s*(\w+)\s*\}\}\}/g,
                o = /\{\{\s*(\w+)\s*\}\}/g,
                i = function(e, t) {
                    return e.split(".").reduce(function(e, t) {
                        var n = typeof e;
                        return "function" === n || "object" === n && !!e ? e[t] : e
                    }, t)
                },
                c = function(e) {
                    var t = e.split(".");
                    return t[t.length - 1].replace(/_/g, " ").replace(/(\w+)/g, function(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    })
                },
                s = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        a = e.locale,
                        o = e.defaultLocale,
                        c = e.translations || {},
                        s = i(t, c[a]) || n.default;
                    return void 0 === s && (s = i(t, c[o])), "object" == typeof s && (s = function(e, t) {
                        var n, a = parseInt(t.count, 10);
                        return "number" != typeof a || isNaN(a) || 0 === (n = Object.keys(r).filter(function(e) {
                            if (-1 !== r[e].indexOf(a)) return e
                        })).length && (n = "other"), e[n]
                    }(s, n)), s
                },
                l = function(e) {
                    return !!s(window.I18n, e)
                }
        },
        "/82Z": function(e, t, n) {
            var r, a, o;
            /*!
             * jQuery UI Effects 1.12.1
             * http://jqueryui.com
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license.
             * http://jquery.org/license
             */
            a = [n("+2Rf"), n("Qwlt")], void 0 === (o = "function" == typeof(r = function(e) {
                var t, n = "ui-effects-animated",
                    r = e;
                return e.effects = {
                        effect: {}
                    },
                    /*!
                     * jQuery Color Animations v2.1.2
                     * https://github.com/jquery/jquery-color
                     *
                     * Copyright 2014 jQuery Foundation and other contributors
                     * Released under the MIT license.
                     * http://jquery.org/license
                     *
                     * Date: Wed Jan 16 08:47:09 2013 -0600
                     */
                    function(e, t) {
                        var n, r = /^([\-+])=\s*(\d+\.?\d*)/,
                            a = [{
                                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                                parse: function(e) {
                                    return [e[1], e[2], e[3], e[4]]
                                }
                            }, {
                                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                                parse: function(e) {
                                    return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                                }
                            }, {
                                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                                parse: function(e) {
                                    return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                                }
                            }, {
                                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                                parse: function(e) {
                                    return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                                }
                            }, {
                                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                                space: "hsla",
                                parse: function(e) {
                                    return [e[1], e[2] / 100, e[3] / 100, e[4]]
                                }
                            }],
                            o = e.Color = function(t, n, r, a) {
                                return new e.Color.fn.parse(t, n, r, a)
                            },
                            i = {
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
                            c = {
                                byte: {
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
                            s = o.support = {},
                            l = e("<p>")[0],
                            u = e.each;

                        function d(e, t, n) {
                            var r = c[t.type] || {};
                            return null == e ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
                        }

                        function m(t) {
                            var r = o(),
                                c = r._rgba = [];
                            return t = t.toLowerCase(), u(a, function(e, n) {
                                var a, o = n.re.exec(t),
                                    s = o && n.parse(o),
                                    l = n.space || "rgba";
                                if (s) return a = r[l](s), r[i[l].cache] = a[i[l].cache], c = r._rgba = a._rgba, !1
                            }), c.length ? ("0,0,0,0" === c.join() && e.extend(c, n.transparent), r) : n[t]
                        }

                        function f(e, t, n) {
                            return 6 * (n = (n + 1) % 1) < 1 ? e + (t - e) * n * 6 : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
                        }
                        l.style.cssText = "background-color:rgba(1,1,1,.5)", s.rgba = l.style.backgroundColor.indexOf("rgba") > -1, u(i, function(e, t) {
                            t.cache = "_" + e, t.props.alpha = {
                                idx: 3,
                                type: "percent",
                                def: 1
                            }
                        }), o.fn = e.extend(o.prototype, {
                            parse: function(t, r, a, c) {
                                if (void 0 === t) return this._rgba = [null, null, null, null], this;
                                (t.jquery || t.nodeType) && (t = e(t).css(r), r = void 0);
                                var s = this,
                                    l = e.type(t),
                                    f = this._rgba = [];
                                return void 0 !== r && (t = [t, r, a, c], l = "array"), "string" === l ? this.parse(m(t) || n._default) : "array" === l ? (u(i.rgba.props, function(e, n) {
                                    f[n.idx] = d(t[n.idx], n)
                                }), this) : "object" === l ? (u(i, t instanceof o ? function(e, n) {
                                    t[n.cache] && (s[n.cache] = t[n.cache].slice())
                                } : function(n, r) {
                                    var a = r.cache;
                                    u(r.props, function(e, n) {
                                        if (!s[a] && r.to) {
                                            if ("alpha" === e || null == t[e]) return;
                                            s[a] = r.to(s._rgba)
                                        }
                                        s[a][n.idx] = d(t[e], n, !0)
                                    }), s[a] && e.inArray(null, s[a].slice(0, 3)) < 0 && (s[a][3] = 1, r.from && (s._rgba = r.from(s[a])))
                                }), this) : void 0
                            },
                            is: function(e) {
                                var t = o(e),
                                    n = !0,
                                    r = this;
                                return u(i, function(e, a) {
                                    var o, i = t[a.cache];
                                    return i && (o = r[a.cache] || a.to && a.to(r._rgba) || [], u(a.props, function(e, t) {
                                        if (null != i[t.idx]) return n = i[t.idx] === o[t.idx]
                                    })), n
                                }), n
                            },
                            _space: function() {
                                var e = [],
                                    t = this;
                                return u(i, function(n, r) {
                                    t[r.cache] && e.push(n)
                                }), e.pop()
                            },
                            transition: function(e, t) {
                                var n = o(e),
                                    r = n._space(),
                                    a = i[r],
                                    s = 0 === this.alpha() ? o("transparent") : this,
                                    l = s[a.cache] || a.to(s._rgba),
                                    m = l.slice();
                                return n = n[a.cache], u(a.props, function(e, r) {
                                    var a = r.idx,
                                        o = l[a],
                                        i = n[a],
                                        s = c[r.type] || {};
                                    null !== i && (null === o ? m[a] = i : (s.mod && (i - o > s.mod / 2 ? o += s.mod : o - i > s.mod / 2 && (o -= s.mod)), m[a] = d((i - o) * t + o, r)))
                                }), this[r](m)
                            },
                            blend: function(t) {
                                if (1 === this._rgba[3]) return this;
                                var n = this._rgba.slice(),
                                    r = n.pop(),
                                    a = o(t)._rgba;
                                return o(e.map(n, function(e, t) {
                                    return (1 - r) * a[t] + r * e
                                }))
                            },
                            toRgbaString: function() {
                                var t = "rgba(",
                                    n = e.map(this._rgba, function(e, t) {
                                        return null == e ? t > 2 ? 1 : 0 : e
                                    });
                                return 1 === n[3] && (n.pop(), t = "rgb("), t + n.join() + ")"
                            },
                            toHslaString: function() {
                                var t = "hsla(",
                                    n = e.map(this.hsla(), function(e, t) {
                                        return null == e && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(100 * e) + "%"), e
                                    });
                                return 1 === n[3] && (n.pop(), t = "hsl("), t + n.join() + ")"
                            },
                            toHexString: function(t) {
                                var n = this._rgba.slice(),
                                    r = n.pop();
                                return t && n.push(~~(255 * r)), "#" + e.map(n, function(e) {
                                    return 1 === (e = (e || 0).toString(16)).length ? "0" + e : e
                                }).join("")
                            },
                            toString: function() {
                                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                            }
                        }), o.fn.parse.prototype = o.fn, i.hsla.to = function(e) {
                            if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                            var t, n, r = e[0] / 255,
                                a = e[1] / 255,
                                o = e[2] / 255,
                                i = e[3],
                                c = Math.max(r, a, o),
                                s = Math.min(r, a, o),
                                l = c - s,
                                u = c + s,
                                d = .5 * u;
                            return t = s === c ? 0 : r === c ? 60 * (a - o) / l + 360 : a === c ? 60 * (o - r) / l + 120 : 60 * (r - a) / l + 240, n = 0 === l ? 0 : d <= .5 ? l / u : l / (2 - u), [Math.round(t) % 360, n, d, null == i ? 1 : i]
                        }, i.hsla.from = function(e) {
                            if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                            var t = e[0] / 360,
                                n = e[1],
                                r = e[2],
                                a = e[3],
                                o = r <= .5 ? r * (1 + n) : r + n - r * n,
                                i = 2 * r - o;
                            return [Math.round(255 * f(i, o, t + 1 / 3)), Math.round(255 * f(i, o, t)), Math.round(255 * f(i, o, t - 1 / 3)), a]
                        }, u(i, function(t, n) {
                            var a = n.props,
                                i = n.cache,
                                c = n.to,
                                s = n.from;
                            o.fn[t] = function(t) {
                                if (c && !this[i] && (this[i] = c(this._rgba)), void 0 === t) return this[i].slice();
                                var n, r = e.type(t),
                                    l = "array" === r || "object" === r ? t : arguments,
                                    m = this[i].slice();
                                return u(a, function(e, t) {
                                    var n = l["object" === r ? e : t.idx];
                                    null == n && (n = m[t.idx]), m[t.idx] = d(n, t)
                                }), s ? ((n = o(s(m)))[i] = m, n) : o(m)
                            }, u(a, function(n, a) {
                                o.fn[n] || (o.fn[n] = function(o) {
                                    var i, c = e.type(o),
                                        s = "alpha" === n ? this._hsla ? "hsla" : "rgba" : t,
                                        l = this[s](),
                                        u = l[a.idx];
                                    return "undefined" === c ? u : ("function" === c && (o = o.call(this, u), c = e.type(o)), null == o && a.empty ? this : ("string" === c && (i = r.exec(o)) && (o = u + parseFloat(i[2]) * ("+" === i[1] ? 1 : -1)), l[a.idx] = o, this[s](l)))
                                })
                            })
                        }), o.hook = function(t) {
                            var n = t.split(" ");
                            u(n, function(t, n) {
                                e.cssHooks[n] = {
                                    set: function(t, r) {
                                        var a, i, c = "";
                                        if ("transparent" !== r && ("string" !== e.type(r) || (a = m(r)))) {
                                            if (r = o(a || r), !s.rgba && 1 !== r._rgba[3]) {
                                                for (i = "backgroundColor" === n ? t.parentNode : t;
                                                    ("" === c || "transparent" === c) && i && i.style;) try {
                                                    c = e.css(i, "backgroundColor"), i = i.parentNode
                                                } catch (e) {}
                                                r = r.blend(c && "transparent" !== c ? c : "_default")
                                            }
                                            r = r.toRgbaString()
                                        }
                                        try {
                                            t.style[n] = r
                                        } catch (e) {}
                                    }
                                }, e.fx.step[n] = function(t) {
                                    t.colorInit || (t.start = o(t.elem, n), t.end = o(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                                }
                            })
                        }, o.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), e.cssHooks.borderColor = {
                            expand: function(e) {
                                var t = {};
                                return u(["Top", "Right", "Bottom", "Left"], function(n, r) {
                                    t["border" + r + "Color"] = e
                                }), t
                            }
                        }, n = e.Color.names = {
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
                    }(r),
                    function() {
                        var t, n = ["add", "remove", "toggle"],
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

                        function o(t) {
                            var n, r, a = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                                o = {};
                            if (a && a.length && a[0] && a[a[0]])
                                for (r = a.length; r--;) "string" == typeof a[n = a[r]] && (o[e.camelCase(n)] = a[n]);
                            else
                                for (n in a) "string" == typeof a[n] && (o[n] = a[n]);
                            return o
                        }
                        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, n) {
                            e.fx.step[n] = function(e) {
                                ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (r.style(e.elem, n, e.end), e.setAttr = !0)
                            }
                        }), e.fn.addBack || (e.fn.addBack = function(e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                        }), e.effects.animateClass = function(t, r, i, c) {
                            var s = e.speed(r, i, c);
                            return this.queue(function() {
                                var r, i = e(this),
                                    c = i.attr("class") || "",
                                    l = s.children ? i.find("*").addBack() : i;
                                l = l.map(function() {
                                    return {
                                        el: e(this),
                                        start: o(this)
                                    }
                                }), (r = function() {
                                    e.each(n, function(e, n) {
                                        t[n] && i[n + "Class"](t[n])
                                    })
                                })(), l = l.map(function() {
                                    return this.end = o(this.el[0]), this.diff = function(t, n) {
                                        var r, o, i = {};
                                        for (r in n) o = n[r], t[r] !== o && (a[r] || !e.fx.step[r] && isNaN(parseFloat(o)) || (i[r] = o));
                                        return i
                                    }(this.start, this.end), this
                                }), i.attr("class", c), l = l.map(function() {
                                    var t = this,
                                        n = e.Deferred(),
                                        r = e.extend({}, s, {
                                            queue: !1,
                                            complete: function() {
                                                n.resolve(t)
                                            }
                                        });
                                    return this.el.animate(this.diff, r), n.promise()
                                }), e.when.apply(e, l.get()).done(function() {
                                    r(), e.each(arguments, function() {
                                        var t = this.el;
                                        e.each(this.diff, function(e) {
                                            t.css(e, "")
                                        })
                                    }), s.complete.call(i[0])
                                })
                            })
                        }, e.fn.extend({
                            addClass: (t = e.fn.addClass, function(n, r, a, o) {
                                return r ? e.effects.animateClass.call(this, {
                                    add: n
                                }, r, a, o) : t.apply(this, arguments)
                            }),
                            removeClass: function(t) {
                                return function(n, r, a, o) {
                                    return arguments.length > 1 ? e.effects.animateClass.call(this, {
                                        remove: n
                                    }, r, a, o) : t.apply(this, arguments)
                                }
                            }(e.fn.removeClass),
                            toggleClass: function(t) {
                                return function(n, r, a, o, i) {
                                    return "boolean" == typeof r || void 0 === r ? a ? e.effects.animateClass.call(this, r ? {
                                        add: n
                                    } : {
                                        remove: n
                                    }, a, o, i) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                                        toggle: n
                                    }, r, a, o)
                                }
                            }(e.fn.toggleClass),
                            switchClass: function(t, n, r, a, o) {
                                return e.effects.animateClass.call(this, {
                                    add: n,
                                    remove: t
                                }, r, a, o)
                            }
                        })
                    }(),
                    function() {
                        var t;

                        function r(t, n, r, a) {
                            return e.isPlainObject(t) && (n = t, t = t.effect), t = {
                                effect: t
                            }, null == n && (n = {}), e.isFunction(n) && (a = n, r = null, n = {}), ("number" == typeof n || e.fx.speeds[n]) && (a = r, r = n, n = {}), e.isFunction(r) && (a = r, r = null), n && e.extend(t, n), r = r || n.duration, t.duration = e.fx.off ? 0 : "number" == typeof r ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, t.complete = a || n.complete, t
                        }

                        function a(t) {
                            return !(t && "number" != typeof t && !e.fx.speeds[t]) || "string" == typeof t && !e.effects.effect[t] || !!e.isFunction(t) || "object" == typeof t && !t.effect
                        }

                        function o(e, t) {
                            var n = t.outerWidth(),
                                r = t.outerHeight(),
                                a = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(e) || ["", 0, n, r, 0];
                            return {
                                top: parseFloat(a[1]) || 0,
                                right: "auto" === a[2] ? n : parseFloat(a[2]),
                                bottom: "auto" === a[3] ? r : parseFloat(a[3]),
                                left: parseFloat(a[4]) || 0
                            }
                        }
                        e.expr && e.expr.filters && e.expr.filters.animated && (e.expr.filters.animated = (t = e.expr.filters.animated, function(r) {
                            return !!e(r).data(n) || t(r)
                        })), !1 !== e.uiBackCompat && e.extend(e.effects, {
                            save: function(e, t) {
                                for (var n = 0, r = t.length; n < r; n++) null !== t[n] && e.data("ui-effects-" + t[n], e[0].style[t[n]])
                            },
                            restore: function(e, t) {
                                for (var n, r = 0, a = t.length; r < a; r++) null !== t[r] && (n = e.data("ui-effects-" + t[r]), e.css(t[r], n))
                            },
                            setMode: function(e, t) {
                                return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                            },
                            createWrapper: function(t) {
                                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                                var n = {
                                        width: t.outerWidth(!0),
                                        height: t.outerHeight(!0),
                                        float: t.css("float")
                                    },
                                    r = e("<div></div>").addClass("ui-effects-wrapper").css({
                                        fontSize: "100%",
                                        background: "transparent",
                                        border: "none",
                                        margin: 0,
                                        padding: 0
                                    }),
                                    a = {
                                        width: t.width(),
                                        height: t.height()
                                    },
                                    o = document.activeElement;
                                try {
                                    o.id
                                } catch (e) {
                                    o = document.body
                                }
                                return t.wrap(r), (t[0] === o || e.contains(t[0], o)) && e(o).trigger("focus"), r = t.parent(), "static" === t.css("position") ? (r.css({
                                    position: "relative"
                                }), t.css({
                                    position: "relative"
                                })) : (e.extend(n, {
                                    position: t.css("position"),
                                    zIndex: t.css("z-index")
                                }), e.each(["top", "left", "bottom", "right"], function(e, r) {
                                    n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
                                }), t.css({
                                    position: "relative",
                                    top: 0,
                                    left: 0,
                                    right: "auto",
                                    bottom: "auto"
                                })), t.css(a), r.css(n).show()
                            },
                            removeWrapper: function(t) {
                                var n = document.activeElement;
                                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).trigger("focus")), t
                            }
                        }), e.extend(e.effects, {
                            version: "1.12.1",
                            define: function(t, n, r) {
                                return r || (r = n, n = "effect"), e.effects.effect[t] = r, e.effects.effect[t].mode = n, r
                            },
                            scaledDimensions: function(e, t, n) {
                                if (0 === t) return {
                                    height: 0,
                                    width: 0,
                                    outerHeight: 0,
                                    outerWidth: 0
                                };
                                var r = "horizontal" !== n ? (t || 100) / 100 : 1,
                                    a = "vertical" !== n ? (t || 100) / 100 : 1;
                                return {
                                    height: e.height() * a,
                                    width: e.width() * r,
                                    outerHeight: e.outerHeight() * a,
                                    outerWidth: e.outerWidth() * r
                                }
                            },
                            clipToBox: function(e) {
                                return {
                                    width: e.clip.right - e.clip.left,
                                    height: e.clip.bottom - e.clip.top,
                                    left: e.clip.left,
                                    top: e.clip.top
                                }
                            },
                            unshift: function(e, t, n) {
                                var r = e.queue();
                                t > 1 && r.splice.apply(r, [1, 0].concat(r.splice(t, n))), e.dequeue()
                            },
                            saveStyle: function(e) {
                                e.data("ui-effects-style", e[0].style.cssText)
                            },
                            restoreStyle: function(e) {
                                e[0].style.cssText = e.data("ui-effects-style") || "", e.removeData("ui-effects-style")
                            },
                            mode: function(e, t) {
                                var n = e.is(":hidden");
                                return "toggle" === t && (t = n ? "show" : "hide"), (n ? "hide" === t : "show" === t) && (t = "none"), t
                            },
                            getBaseline: function(e, t) {
                                var n, r;
                                switch (e[0]) {
                                    case "top":
                                        n = 0;
                                        break;
                                    case "middle":
                                        n = .5;
                                        break;
                                    case "bottom":
                                        n = 1;
                                        break;
                                    default:
                                        n = e[0] / t.height
                                }
                                switch (e[1]) {
                                    case "left":
                                        r = 0;
                                        break;
                                    case "center":
                                        r = .5;
                                        break;
                                    case "right":
                                        r = 1;
                                        break;
                                    default:
                                        r = e[1] / t.width
                                }
                                return {
                                    x: r,
                                    y: n
                                }
                            },
                            createPlaceholder: function(t) {
                                var n, r = t.css("position"),
                                    a = t.position();
                                return t.css({
                                    marginTop: t.css("marginTop"),
                                    marginBottom: t.css("marginBottom"),
                                    marginLeft: t.css("marginLeft"),
                                    marginRight: t.css("marginRight")
                                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(r) && (r = "absolute", n = e("<" + t[0].nodeName + ">").insertAfter(t).css({
                                    display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                                    visibility: "hidden",
                                    marginTop: t.css("marginTop"),
                                    marginBottom: t.css("marginBottom"),
                                    marginLeft: t.css("marginLeft"),
                                    marginRight: t.css("marginRight"),
                                    float: t.css("float")
                                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data("ui-effects-placeholder", n)), t.css({
                                    position: r,
                                    left: a.left,
                                    top: a.top
                                }), n
                            },
                            removePlaceholder: function(e) {
                                var t = "ui-effects-placeholder",
                                    n = e.data(t);
                                n && (n.remove(), e.removeData(t))
                            },
                            cleanUp: function(t) {
                                e.effects.restoreStyle(t), e.effects.removePlaceholder(t)
                            },
                            setTransition: function(t, n, r, a) {
                                return a = a || {}, e.each(n, function(e, n) {
                                    var o = t.cssUnit(n);
                                    o[0] > 0 && (a[n] = o[0] * r + o[1])
                                }), a
                            }
                        }), e.fn.extend({
                            effect: function() {
                                var t = r.apply(this, arguments),
                                    a = e.effects.effect[t.effect],
                                    o = a.mode,
                                    i = t.queue,
                                    c = i || "fx",
                                    s = t.complete,
                                    l = t.mode,
                                    u = [],
                                    d = function(t) {
                                        var r = e(this),
                                            a = e.effects.mode(r, l) || o;
                                        r.data(n, !0), u.push(a), o && ("show" === a || a === o && "hide" === a) && r.show(), o && "none" === a || e.effects.saveStyle(r), e.isFunction(t) && t()
                                    };
                                if (e.fx.off || !a) return l ? this[l](t.duration, s) : this.each(function() {
                                    s && s.call(this)
                                });

                                function m(r) {
                                    var i = e(this);

                                    function c() {
                                        e.isFunction(s) && s.call(i[0]), e.isFunction(r) && r()
                                    }
                                    t.mode = u.shift(), !1 === e.uiBackCompat || o ? "none" === t.mode ? (i[l](), c()) : a.call(i[0], t, function() {
                                        i.removeData(n), e.effects.cleanUp(i), "hide" === t.mode && i.hide(), c()
                                    }) : (i.is(":hidden") ? "hide" === l : "show" === l) ? (i[l](), c()) : a.call(i[0], t, c)
                                }
                                return !1 === i ? this.each(d).each(m) : this.queue(c, d).queue(c, m)
                            },
                            show: function(e) {
                                return function(t) {
                                    if (a(t)) return e.apply(this, arguments);
                                    var n = r.apply(this, arguments);
                                    return n.mode = "show", this.effect.call(this, n)
                                }
                            }(e.fn.show),
                            hide: function(e) {
                                return function(t) {
                                    if (a(t)) return e.apply(this, arguments);
                                    var n = r.apply(this, arguments);
                                    return n.mode = "hide", this.effect.call(this, n)
                                }
                            }(e.fn.hide),
                            toggle: function(e) {
                                return function(t) {
                                    if (a(t) || "boolean" == typeof t) return e.apply(this, arguments);
                                    var n = r.apply(this, arguments);
                                    return n.mode = "toggle", this.effect.call(this, n)
                                }
                            }(e.fn.toggle),
                            cssUnit: function(t) {
                                var n = this.css(t),
                                    r = [];
                                return e.each(["em", "px", "%", "pt"], function(e, t) {
                                    n.indexOf(t) > 0 && (r = [parseFloat(n), t])
                                }), r
                            },
                            cssClip: function(e) {
                                return e ? this.css("clip", "rect(" + e.top + "px " + e.right + "px " + e.bottom + "px " + e.left + "px)") : o(this.css("clip"), this)
                            },
                            transfer: function(t, n) {
                                var r = e(this),
                                    a = e(t.to),
                                    o = "fixed" === a.css("position"),
                                    i = e("body"),
                                    c = o ? i.scrollTop() : 0,
                                    s = o ? i.scrollLeft() : 0,
                                    l = a.offset(),
                                    u = {
                                        top: l.top - c,
                                        left: l.left - s,
                                        height: a.innerHeight(),
                                        width: a.innerWidth()
                                    },
                                    d = r.offset(),
                                    m = e("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
                                        top: d.top - c,
                                        left: d.left - s,
                                        height: r.innerHeight(),
                                        width: r.innerWidth(),
                                        position: o ? "fixed" : "absolute"
                                    }).animate(u, t.duration, t.easing, function() {
                                        m.remove(), e.isFunction(n) && n()
                                    })
                            }
                        }), e.fx.step.clip = function(t) {
                            t.clipInit || (t.start = e(t.elem).cssClip(), "string" == typeof t.end && (t.end = o(t.end, t.elem)), t.clipInit = !0), e(t.elem).cssClip({
                                top: t.pos * (t.end.top - t.start.top) + t.start.top,
                                right: t.pos * (t.end.right - t.start.right) + t.start.right,
                                bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                                left: t.pos * (t.end.left - t.start.left) + t.start.left
                            })
                        }
                    }(), t = {}, e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
                        t[n] = function(t) {
                            return Math.pow(t, e + 2)
                        }
                    }), e.extend(t, {
                        Sine: function(e) {
                            return 1 - Math.cos(e * Math.PI / 2)
                        },
                        Circ: function(e) {
                            return 1 - Math.sqrt(1 - e * e)
                        },
                        Elastic: function(e) {
                            return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                        },
                        Back: function(e) {
                            return e * e * (3 * e - 2)
                        },
                        Bounce: function(e) {
                            for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;);
                            return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                        }
                    }), e.each(t, function(t, n) {
                        e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function(e) {
                            return 1 - n(1 - e)
                        }, e.easing["easeInOut" + t] = function(e) {
                            return e < .5 ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2
                        }
                    }), e.effects
            }) ? r.apply(t, a) : r) || (e.exports = o)
        },
        "/AD1": function(e, t, n) {
            "use strict";
            var r = n("60hy"),
                a = Object(r.b)(window.current_project);
            window.current_project = a, t.a = a
        },
        "/IHD": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "c", function() {
                return i
            }), n.d(t, "b", function() {
                return c
            });
            var r = n("xk4V"),
                a = n.n(r),
                o = function() {
                    var e;
                    return (e = []).concat.apply(e, arguments).filter(Boolean).join(" ")
                },
                i = function() {
                    return a()().split("-").join("")
                },
                c = function(e, t) {
                    return (e || []).concat(t)
                }
        },
        "/cV5": function(e, t, n) {
            "use strict";
            var r = n("zBmP");
            n.d(t, "a", function() {
                return r.a
            });
            var a = n("IDzB");
            n.d(t, "c", function() {
                return a.b
            }), n.d(t, "b", function() {
                return a.a
            })
        },
        0: function(e, t, n) {
            n("bZMm"), n("55Il"), n("3Siy"), e.exports = n("8y1c")
        },
        "0RKZ": function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", function() {
                    return r
                });
                var r = function(t) {
                    if (t) return window.btoa ? window.btoa(t) : e.from(t).toString("base64")
                }
            }).call(this, n("tjlA").Buffer)
        },
        "0VSk": function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("XM0S"),
                a = "undefined" != typeof window ? window.I18n = window.I18n || {} : {},
                o = !1;
            try {
                o = 1 === parseInt(localStorage.getItem("i18n_debug"), 10)
            } catch (e) {}
            a.t = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return r.a.apply(void 0, [{
                    translations: a.translations,
                    locale: a.locale,
                    defaultLocale: a.default_locale,
                    debug: o
                }].concat(t))
            }, t.default = a
        },
        "1OuE": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return C
            }), n.d(t, "a", function() {
                return y
            }), n.d(t, "b", function() {
                return _
            });
            var r = n("cPJV"),
                a = n.n(r),
                o = n("2hq0"),
                i = n("bgw5"),
                c = n.n(i),
                s = n("Us+F"),
                l = n.n(s),
                u = n("/S0t"),
                d = n.n(u),
                m = n("LKA2"),
                f = n.n(m),
                p = n("uAXs"),
                h = n.n(p),
                g = {
                    de: c.a,
                    en: l.a,
                    es: d.a,
                    fr: f.a,
                    ja: h.a
                },
                b = {
                    "MMM YYYY": {
                        de: "MMM YYYY",
                        en: "MMM YYYY",
                        es: "MMM YYYY",
                        fr: "MMM YYYY",
                        ja: "YYYY年 MMM"
                    },
                    LTS: {
                        de: "HH:mm:ss",
                        en: "h:mm:ss A",
                        es: "H:mm:ss",
                        fr: "HH:mm:ss",
                        ja: "HH:mm:ss"
                    },
                    LT: {
                        de: "HH:mm",
                        en: "h:mm A",
                        es: "H:mm",
                        fr: "HH:mm",
                        ja: "HH:mm"
                    },
                    L: {
                        de: "DD.MM.YYYY",
                        en: "MM/DD/YYYY",
                        es: "DD/MM/YYYY",
                        fr: "DD/MM/YYYY",
                        ja: "YYYY/MM/DD"
                    },
                    l: {
                        de: "D.M.YYYY",
                        en: "M/D/YYYY",
                        es: "D/M/YYYY",
                        fr: "D/M/YYYY",
                        ja: "YYYY/MM/DD"
                    },
                    "l LT": {
                        de: "D.M.YYYY HH:mm",
                        en: "M/D/YYYY h:mm A",
                        es: "D/M/YYYY HH:mm",
                        fr: "D/M/YYYY HH:mm",
                        ja: "YYYY/MM/DD HH:mm"
                    },
                    LL: {
                        de: "D. MMMM YYYY",
                        en: "MMMM D, YYYY",
                        es: "D [de] MMMM [de] YYYY",
                        fr: "D MMMM YYYY",
                        ja: "YYYY年M月D日"
                    },
                    ll: {
                        de: "D. MMM YYYY",
                        en: "MMM D YYYY",
                        es: "D [de] MMM [de] YYYY",
                        fr: "D MMM YYYY",
                        ja: "YYYY年M月D日"
                    },
                    LLL: {
                        de: "D. MMMM YYYY HH:mm",
                        en: "MMMM D, YYYY h:mm A",
                        es: "D [de] MMMM [de] YYYY H:mm",
                        fr: "D MMMM YYYY HH:mm",
                        ja: "YYYY年M月D日 のHH:mm"
                    },
                    lll: {
                        de: "D. MMM YYYY HH:mm",
                        en: "MMM D, YYYY h:mm A",
                        es: "D [de] MMM [de] YYYY H:mm",
                        fr: "D MMM YYYY HH:mm",
                        ja: "YYYY年M月D日 のHH:mm"
                    },
                    LLLL: {
                        de: "dddd, D. MMMM YYYY HH:mm",
                        en: "dddd, MMMM D YYYY h:mm A",
                        es: "dddd, D [de] MMMM [de] YYYY H:mm",
                        fr: "dddd D MMMM YYYY HH:mm",
                        ja: "YYYY年M月D日 (dddd) のHH:mm"
                    },
                    llll: {
                        de: "ddd, D. MMMM YYYY HH:mm",
                        en: "ddd, MMMM D YYYY h:mm A",
                        es: "ddd, D [de] MMMM [de] YYYY H:mm",
                        fr: "ddd D MMMM YYYY HH:mm",
                        ja: "YYYY年M月D日 (ddd) のHH:mm"
                    }
                },
                v = Object.keys(b).map(function(e) {
                    return "".concat(e, " z")
                }),
                C = function(e, t, n) {
                    return function(e, t, n) {
                        if (v.indexOf(t) >= 0) {
                            var r = b[t.replace(/ z$/, "")][e],
                                i = a()(n, r, {
                                    locale: g[e]
                                });
                            return "".concat(i, " ").concat(Object(o.a)(n))
                        }
                        return a()(n, t, {
                            locale: g[e]
                        })
                    }(e, function(e, t) {
                        return Object.keys(b).indexOf(t) >= 0 ? b[t][e] : t
                    }(e, t), n)
                },
                y = function(e, t) {
                    return C(window.I18n.locale || window.I18n.default_locale, e, t)
                },
                _ = function(e, t) {
                    return y(e, 1e3 * t)
                }
        },
        "2UXI": function(e, t, n) {
            "use strict";
            var r = n("rePB"),
                a = n("vpQ4"),
                o = n("+2Rf"),
                i = n.n(o),
                c = n("S1QU"),
                s = n("CjI4"),
                l = n("/AD1"),
                u = n("WjF9"),
                d = n("0VSk"),
                m = window.device_attributes || {},
                f = n("aNAf");
            n("jX8l");
            "true" === KSR.store.getItem("koala_debug") && (window.koala_debug = !0);
            var p = function() {
                    var e, t, n, o = navigator.userAgent,
                        i = {
                            is_ua_bot: m.isBot
                        },
                        c = (e = {
                            $os: m.osName,
                            os_version: m.osVersion,
                            $browser: m.browserName,
                            browser_version: m.browserVersion,
                            $referrer: document.referrer,
                            $referring_domain: (t = document.referrer, n = t.split("/"), n.length >= 3 ? n[2] : ""),
                            $device: m.deviceName,
                            user_agent: o
                        }, Object.keys(e).reduce(function(t, n) {
                            var o = e[n];
                            return "string" == typeof o && 0 != o.length ? Object(a.a)({}, t, Object(r.a)({}, n, o)) : t
                        }, {})),
                        s = {
                            $screen_height: screen.height,
                            $screen_width: screen.width
                        };
                    return Object(a.a)({}, c, s, i)
                },
                h = function(e, t) {
                    var n = {
                            event: e,
                            properties: Object(a.a)({}, p(), {
                                distinct_id: Object(f.a)()
                            }, t)
                        },
                        r = JSON.stringify(n);
                    return window.koala_debug && (window.console.log("KOALA REQUEST:"), window.console.log(n)), i.a.ajax({
                        type: "POST",
                        url: koala_endpoint,
                        data: r,
                        contentType: "text/plain; charset=UTF-8"
                    })
                },
                g = h,
                b = function(e, t, n) {
                    i()(e).click(function(e) {
                        var r, a = this.href,
                            o = 2 === e.which || e.metaKey || e.ctrlKey || "_blank" === this.target;
                        r = "function" == typeof n ? n(this) : n;
                        var i = new Promise(function(e) {
                            window.setTimeout(e, 300), h(t, r).then(e)
                        });
                        o || (i.then(function() {
                            window.location = a
                        }), e.preventDefault())
                    })
                },
                v = n("MgNI"),
                C = n("o3IG"),
                y = n("yQm5"),
                _ = n.n(y),
                E = n("c6/r");
            n.d(t, "b", function() {
                return N
            }), n.d(t, "c", function() {
                return S
            }), n.d(t, "d", function() {
                return I
            }), n.d(t, "a", function() {
                return T
            });
            var w = function(e) {
                    return 1e3 * e.valueOf()
                },
                k = function(e) {
                    return e / 36e5
                },
                j = function(e) {
                    if (e && "function" == typeof e.get) {
                        var t = Object(C.b)("ref_" + e.get("id"));
                        if (t) return Object(E.a)(t).split("?")[0]
                    }
                    return !1
                },
                O = v.maybe.fromNullable(Object(C.b)("user_analytics_properties")).map(JSON.parse).getOrElse({}),
                x = function(e) {
                    var t = e.user,
                        n = e.referrerCredit,
                        r = e.ip,
                        o = e.ipDatacenter,
                        c = e.iosAppUUID,
                        s = e.enabledFeatures,
                        l = e.windowAndScreenData;
                    return Object(a.a)({}, l, {
                        referrer_credit: n,
                        client_type: i()("body.native-app-request").length ? "native" : "web",
                        client_platform: i()("body.ios").length ? "ios" : i()("body.android").length ? "android" : void 0,
                        device_format: i()("body.phone").length ? "phone" : i()("body.tablet").length ? "tablet" : "desktop",
                        apple_pay_capable: i()("body.apple-pay-capable").length > 0,
                        android_pay_capable: i()("body.android-pay-capable").length > 0,
                        ip_address: r || null,
                        ip_datacenter: o || null,
                        user_logged_in: void 0 !== t,
                        user_chosen_currency: t ? t.data.chosen_currency : null,
                        user_uid: t && "function" == typeof t.get ? t.get("id") : null,
                        iphone_uuid: c || void 0,
                        enabled_features: Object.keys(s || {}),
                        browser_language: d.default.browser_language,
                        chosen_language: d.default.chosen_language,
                        calculated_language: d.default.calculated_language,
                        display_language: d.default.display_language
                    }, O, {
                        mp_lib: "js"
                    })
                },
                L = function() {
                    return {
                        window_inner_width: window.innerWidth,
                        window_inner_height: window.innerHeight,
                        screen_width: screen.width,
                        screen_height: screen.height,
                        screen_avail_width: screen.availWidth,
                        screen_avail_height: screen.availHeight
                    }
                },
                N = function(e, t) {
                    return t ? Object.keys(t).reduce(function(n, o) {
                        return Object(a.a)({}, n, Object(r.a)({}, "".concat(e, "_").concat(o), t[o]))
                    }, {}) : {}
                },
                M = function(e) {
                    var t = e.user,
                        n = e.project,
                        r = e.currentTime,
                        o = void 0 === r ? new Date : r;
                    if (!n || "string" == typeof n) return {};
                    var i, c = "function" == typeof n.get ? n.get() : n,
                        s = v.maybe.fromNullable(c.deadline).map(w).getOrElse(void 0),
                        l = k(s - o) > 0 ? k(s - o) : 0,
                        u = c.pledged / c.goal,
                        d = {
                            backers_count: c.backers_count,
                            country: c.country,
                            currency: c.currency,
                            deadline: c.deadline,
                            goal: c.goal,
                            last_update_published_at: c.last_update_published_at,
                            launched_at: c.launched_at,
                            name: c.name,
                            pid: c.id,
                            pledged: c.pledged,
                            profile_state: c.profile.state,
                            state: c.state,
                            updates_count: c.updates_count,
                            hours_remaining: l,
                            percent_raised: u,
                            has_video: null !== c.video,
                            duration: (i = v.maybe.fromNullable(c.launched_at).map(w).getOrElse(0) - v.maybe.fromNullable(c.launched_at).map(w).getOrElse(0), k(i) / 24),
                            rewards_count: c.rewards ? c.rewards.count : void 0,
                            location: c.location ? c.location.name : void 0,
                            category_name: c.category ? c.category.name : void 0,
                            parent_category: v.maybe.fromNullable(c.category).map(function(e) {
                                return e.parent ? e.parent.name : e.name
                            }).getOrElse(void 0)
                        },
                        m = N("project", d),
                        f = {
                            user_is_backer: c.is_backing,
                            user_has_starred: c.is_starred,
                            user_is_project_creator: t && "function" == typeof t.get && t.get("id") === c.creator.id
                        },
                        p = {
                            display_currency: c.current_currency,
                            display_exchange_rate: c.fx_rate
                        };
                    return Object(a.a)({}, m, f, p)
                },
                S = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = i()("body").attr("id"),
                        o = _()().query(!0).ref,
                        d = document.URL,
                        m = u.a || window.current_user,
                        f = c.a,
                        p = s.a,
                        h = window.current_ip,
                        b = window.current_ip_datacenter,
                        v = window.ios_app_uuid,
                        C = window.enabled_features,
                        y = n.withoutCurrentProject ? null : l.a,
                        E = window.current_variants && "string" != typeof window.current_variants ? {
                            current_variants: window.current_variants
                        } : {},
                        w = j(y),
                        k = Object(a.a)({
                            page_id: r,
                            ref_tag: o,
                            landing_page_url: d
                        }, M({
                            user: m,
                            project: y,
                            currentTime: n.currentTime
                        }), function(e) {
                            if (!e || "string" == typeof e || "function" == typeof e.get && (!e.get("amount") || !e.get("reward"))) return {};
                            var t = "function" == typeof e.get ? e.get() : e,
                                n = {
                                    amount: t.amount,
                                    shipping_amount: t.shipping_amount,
                                    location_id: t.location_id
                                },
                                r = t.reward,
                                o = r.estimated_delivery_on,
                                i = r.id,
                                c = r.minimum,
                                s = r.reward,
                                l = r.shipping_preference,
                                u = r.shipping_enabled,
                                d = N("reward", {
                                    estimated_delivery_on: o,
                                    id: i,
                                    minimum: c,
                                    reward: s,
                                    shipping_preference: l,
                                    shipping_enabled: u
                                }),
                                m = Object(a.a)({}, n, d);
                            return N("checkout", m)
                        }(f), E, x({
                            user: m,
                            location: p,
                            referrerCredit: w,
                            ip: h,
                            ipDatacenter: b,
                            iosAppUUID: v,
                            enabledFeatures: C,
                            windowAndScreenData: L()
                        }), t);
                    g(e, k)
                },
                I = function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = u.a,
                        c = r.withoutCurrentProject ? null : l.a,
                        d = s.a,
                        m = window.current_ip,
                        f = window.current_ip_datacenter,
                        p = window.ios_app_uuid,
                        h = window.enabled_features,
                        g = j(c);
                    window.setTimeout(function() {
                        b(e, t, function(e) {
                            var t = i()(e);
                            return Object(a.a)({
                                selected_link: t.attr("data-original_text") ? t.data("original_text") : i.a.trim(t.text()),
                                page_id: i()("body").attr("id")
                            }, M({
                                user: o,
                                project: c
                            }), x({
                                user: o,
                                location: d,
                                referrerCredit: g,
                                ip: m,
                                ipDatacenter: f,
                                iosAppUUID: p,
                                enabledFeatures: h,
                                windowAndScreenData: L()
                            }), n)
                        })
                    }, 1)
                },
                T = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return new Promise(function(e) {
                        setTimeout(function() {
                            S.apply(void 0, t), e()
                        }, 300)
                    })
                };
            window && (window.track = S)
        },
        "2hq0": function(e, t, n) {
            "use strict";
            var r = n("cPJV"),
                a = n.n(r),
                o = n("OBTA"),
                i = n.n(o),
                c = n("fupu"),
                s = n.n(c),
                l = function(e) {
                    return parseInt(a()(e, "ZZ"), 10)
                };
            n.d(t, "a", function() {
                return m
            });
            var u = {
                    "+02:00T": "CEST",
                    "+01:00F": "CET",
                    "+01:00T": "BST",
                    "-00:00F": "GMT",
                    "-03:00T": "ADT",
                    "-04:00F": "AST",
                    "-04:00T": "EDT",
                    "-05:00F": "EST",
                    "-05:00T": "CDT",
                    "-06:00F": "CST",
                    "-06:00T": "MDT",
                    "-07:00F": "MST",
                    "-07:00T": "PDT",
                    "-08:00F": "PST",
                    "-08:00T": "AKDT",
                    "-09:00F": "AKST",
                    "-09:00T": "HADT",
                    "-10:00F": "HAST",
                    "+11:00T": "AEDT",
                    "+10:00F": "AEST",
                    "+10:30T": "ACDT",
                    "+09:30F": "ACST",
                    "+09:00T": "AWDT",
                    "+08:00F": "AWST"
                },
                d = function(e) {
                    var t = a()(e, "Z") + (function(e) {
                        if (!s()(new Date(e))) throw "input is invalid";
                        var t = l(e),
                            n = l(i()(new Date(e), 0)),
                            r = l(i()(new Date(e), 5));
                        return t > n || t > r
                    }(e) ? "T" : "F");
                    if (void 0 !== u[t]) return u[t]
                },
                m = function(e) {
                    return function(e) {
                        var t = e.toString().match(/\(([a-z]{3,4})\)/i);
                        if (t) return t[1].toUpperCase()
                    }(e) || d(e) || a()(e, "UTC Z")
                }
        },
        "3yfh": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("0VSk"),
                a = n("q1tI"),
                o = function(e) {
                    var t = e.color;
                    return a.createElement("svg", {
                        className: "valign-middle",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 598 70",
                        width: "100%",
                        height: "100%"
                    }, a.createElement("title", null, r.default.t("components.logo.Kickstarter")), a.createElement("g", {
                        className: "fill-".concat(t),
                        fillRule: "nonzero"
                    }, a.createElement("path", {
                        d: "M523,15.9 L523,47.3 C523,54.8 529.046512,61 536.403101,61 C542.449612,61 547.186047,57.3 548.899225,52 L550.310078,54.5 C552.829457,58.7 557.263566,61 561.79845,61 C569.155039,61 575,55.2 575,47.8 C575,45.3 574.395349,42.9 572.984496,40.7 L567.744186,32.4 C571.573643,29.5 573.891473,24.9 573.891473,19.3 C573.891473,9 565.627907,1 555.046512,1 L537.612403,1 C528.139535,1 523,6.1 523,15.9"
                    }), a.createElement("path", {
                        d: "M519,49.5030231 C519,43.7552636 515.323467,39.4192345 510.255814,38.4108557 C512.541226,36.8982874 513.932347,34.3773402 513.932347,31.04969 C513.932347,27.7220398 512.640592,25.2010926 510.255814,23.6885243 C515.422833,22.6801455 519,18.4449543 519,12.5963569 C519,6.14273218 513.832981,1 507.572939,1 L486.706131,1 C477.167019,1 472,6.14273218 472,15.9240071 L472,46.074535 C472,55.9566478 477.167019,60.9985421 486.706131,60.9985421 L507.572939,60.9985421 C513.832981,61.09938 519,55.9566478 519,49.5030231"
                    }), a.createElement("path", {
                        d: "M455.8,47.5 L455.8,26.8 C462.5,26.5 468,20.9 468,13.9 C468,6.7 462.2,1 455.1,1 L427.9,1 C420.8,1 415,6.6 415,13.9 C415,20.9 420.5,26.4 427.2,26.8 L427.2,47.5 C427.2,54.9 433.5,61 441.3,61 C449.6,61 455.8,54.9 455.8,47.5"
                    }), a.createElement("path", {
                        d: "M362,15.9 L362,47.3 C362,54.8 368.046512,61 375.403101,61 C381.449612,61 386.186047,57.3 387.899225,52 L389.310078,54.5 C391.829457,58.7 396.263566,61 400.79845,61 C408.155039,61 414,55.2 414,47.8 C414,45.3 413.395349,42.9 411.984496,40.7 L406.744186,32.4 C410.573643,29.5 412.891473,24.9 412.891473,19.3 C412.891473,9 404.627907,1 394.046512,1 L376.612403,1 C367.24031,1 362,6.1 362,15.9"
                    }), a.createElement("path", {
                        d: "M328.919678,49.5695364 C332.331325,56.6225166 337.147767,60 343.067976,60 C353.704285,60 361.229976,50.3642384 356.614219,39.5364238 L344.272087,10.9271523 C341.261811,3.87417219 336.746396,0 329.020021,0 C321.393988,0 316.878574,3.87417219 313.767955,10.9271523 L301.425823,39.5364238 C296.709724,50.3642384 304.335757,60 314.871723,60 C320.69159,60 325.508032,56.6225166 328.919678,49.5695364"
                    }), a.createElement("path", {
                        d: "M293.776938,47.5 L293.776938,26.8 C300.489603,26.5 306,20.9 306,13.9 C306,6.7 300.189036,1 293.075614,1 L265.924386,1 C258.810964,1 253,6.6 253,13.9 C253,20.9 258.510397,26.4 265.223062,26.8 L265.223062,47.5 C265.223062,54.9 271.534972,61 279.349716,61 C287.465028,61 293.776938,54.9 293.776938,47.5"
                    }), a.createElement("path", {
                        d: "M253,41.5361842 C253,35.5164474 249.993737,31.3026316 245.484342,27.2894737 L241.776618,23.9786184 C247.187891,23.1759868 250.795407,19.5641447 250.795407,14.2467105 C250.795407,5.31743421 243.680585,0 228.649269,0 C213.91858,0 205.300626,7.42434211 205.300626,19.1628289 C205.300626,25.1825658 208.407098,29.2960526 212.916493,33.4095395 L216.524008,36.7203947 L216.4238,36.7203947 C209.709812,36.7203947 205,40.6332237 205,46.7532895 C205,55.5822368 212.415449,61 228.248434,61 C243.780793,61 253,53.4753289 253,41.5361842",
                        id: "Shape-Copy-7"
                    }), a.createElement("path", {
                        d: "M202,46.5662429 C202,43.7802283 201.192523,41.0937143 199.476636,38.7057019 L193.016822,29.8501557 L199.476636,20.9946095 C201.192523,18.7060976 202,15.920083 202,13.1340685 C202,5.7710301 195.842991,0.0995005189 188.575701,0.0995005189 C184.336449,0.0995005189 180.097196,2.18901142 177.472897,5.7710301 L174.343925,10.1490529 C173.13271,4.27852231 167.985047,0 161.424299,0 C153.854206,0 148,5.97003114 148,13.3330695 L148,46.6657434 C148,54.0287818 153.95514,59.9988129 161.424299,59.9988129 C167.884112,59.9988129 172.930841,56.0187922 174.242991,50.2477621 L177.069159,54.2277828 C179.693458,58.0088025 184.033645,59.9988129 188.272897,59.9988129 C195.842991,60.0983134 202,53.9292813 202,46.5662429"
                    }), a.createElement("path", {
                        d: "M143,43.5099338 C143,37.1523179 139.818713,32.6821192 133.45614,30 C139.818713,27.3178808 143,22.9470199 143,16.4900662 C143,6.85430464 134.947368,0 122.023392,0 C104.725146,0 92,12.8145695 92,30 C92,47.1854305 104.725146,60 122.023392,60 C134.947368,60 143,53.1456954 143,43.5099338"
                    }), a.createElement("path", {
                        d: "M72.5499366,0 C64.4666385,0 58,6.57807309 58,14.3521595 L58,45.6478405 C58,53.5215947 64.4666385,60 72.4488953,60 C80.6332346,60 86.9988319,53.4219269 86.9988319,45.6478405 L86.9988319,14.3521595 C87.0998731,6.57807309 80.6332346,0 72.5499366,0"
                    }), a.createElement("path", {
                        d: "M54,46.5662429 C54,43.7802283 53.1940299,41.0937143 51.4813433,38.7057019 L45.0335821,29.8501557 L51.4813433,20.9946095 C53.1940299,18.7060976 54,15.920083 54,13.1340685 C54,5.7710301 47.8544776,0.0995005189 40.6007463,0.0995005189 C36.369403,0.0995005189 32.1380597,2.18901142 29.5186567,5.7710301 L26.2947761,10.1490529 C25.0858209,4.27852231 19.9477612,0 13.3992537,0 C5.84328358,0 0,5.97003114 0,13.3330695 L0,46.6657434 C0,54.0287818 5.94402985,59.9988129 13.3992537,59.9988129 C19.8470149,59.9988129 24.8843284,56.0187922 26.1940299,50.2477621 L29.0149254,54.2277828 C31.6343284,58.0088025 35.9664179,59.9988129 40.1977612,59.9988129 C47.8544776,60.0983134 54,53.9292813 54,46.5662429"
                    })))
                }
        },
        "468C": function(e, t, n) {
            "use strict";
            var r, a = n("qthe"),
                o = n("q1tI"),
                i = n.n(o),
                c = n("rePB"),
                s = n("1OyB"),
                l = n("vuIU"),
                u = n("md7G"),
                d = n("foSv"),
                m = n("Ji7U"),
                f = n("17x9"),
                p = n.n(f),
                h = (r = {
                    context: "overlayScrollTop"
                }.context, function(e) {
                    var t, n;
                    return n = t = function(t) {
                        function n(e) {
                            var t;
                            return Object(s.a)(this, n), (t = Object(u.a)(this, Object(d.a)(n).call(this, e))).handleScroll = function(e) {
                                t.setState({
                                    scrollTop: e.target.scrollTop
                                })
                            }, t.state = {
                                scrollTop: 0
                            }, t
                        }
                        return Object(m.a)(n, t), Object(l.a)(n, [{
                            key: "getChildContext",
                            value: function() {
                                return Object(c.a)({}, r, this.state.scrollTop)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return i.a.createElement("div", {
                                    onScroll: this.handleScroll
                                }, i.a.createElement(e, this.props))
                            }
                        }]), n
                    }(o.PureComponent), t.childContextTypes = Object(c.a)({}, r, p.a.number), n
                })(function(e) {
                    var t = e.children,
                        n = e.isOpen;
                    return i.a.createElement("div", {
                        id: "js-overlay-body",
                        className: [n ? "bg-grey-100" : "bg-grey100_0", "block", "fixed", "t0", "r0", "b0", "l0", "scroll-y", "webkit-scrolling", "transition-all", "transition-400", "z-discover-overlay-3", "pt4", "pb20"].join(" ")
                    }, t)
                }),
                g = n("wx14"),
                b = n("f66B"),
                v = n.n(b),
                C = n("NimP"),
                y = n("LtMG"),
                _ = n("SKdt"),
                E = function(e, t) {
                    var n, r, a, o = e.offsets,
                        c = e.children,
                        s = e.dispatch,
                        l = e.type,
                        u = e.lockPosition,
                        d = t.overlayScrollTop;
                    _.a.touchable ? (n = !1, r = !1, a = function(e) {
                        return e.preventDefault()
                    }) : (r = (n = 0 === u) && d > 0 || !n && d + u >= o.top, a = function(e) {
                        return e.preventDefault(), s(Object(C.c)(m))
                    });
                    var m = o.top + o.height - u,
                        f = r ? {
                            top: "".concat(u, "px")
                        } : null,
                        p = r ? "fixed" : "";
                    return i.a.createElement("div", {
                        className: "absolute bg-grey-100 w100p z2 ".concat(p),
                        style: f
                    }, i.a.createElement(y.e, null, i.a.createElement(y.i, null, i.a.createElement(y.d, null, i.a.createElement("a", {
                        role: "heading",
                        href: "#".concat(l),
                        onClick: a,
                        className: "keyboard-focusable block"
                    }, i.a.createElement("h1", {
                        className: [n && r ? "pt6" : "pt2", "js-collection-header", "normal", "mb0", "ksr-green-700", "border-bottom", "border-grey-500", "type-16", "pb2"].join(" ")
                    }, c))))))
                };
            E.contextTypes = {
                overlayScrollTop: p.a.number
            };
            var w, k = (w = E, function(e) {
                    function t(e) {
                        var n;
                        return Object(s.a)(this, t), (n = Object(u.a)(this, Object(d.a)(t).call(this, e))).state = {
                            offsets: {
                                top: 0,
                                height: 0
                            }
                        }, n
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.setState(this.getOffsets())
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            var n = this.getOffsets();
                            v()(t, n) || this.setState(n)
                        }
                    }, {
                        key: "getOffsets",
                        value: function() {
                            return {
                                offsets: {
                                    top: this.el.offsetTop,
                                    height: this.el.offsetHeight
                                }
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return i.a.createElement("div", {
                                ref: function(t) {
                                    return e.el = t
                                }
                            }, i.a.createElement(w, Object(g.a)({}, this.props, {
                                offsets: this.state.offsets
                            })))
                        }
                    }]), t
                }(o.Component)),
                j = n("0VSk"),
                O = n("WjF9"),
                x = n("c6/r"),
                L = n("arGM");
            n.d(t, "a", function() {
                return N
            });
            var N = function(e) {
                    var t = e.onButtonClick,
                        n = e.state;
                    return i.a.createElement("a", {
                        onClick: t,
                        href: "/discover/advanced",
                        className: "flex items-center",
                        id: "js-overlay-explore-button",
                        "aria-haspopup": "true",
                        "aria-expanded": n.isOpen
                    }, i.a.createElement(y.f, {
                        name: "compass",
                        atoms: "h3 w3 mr1 fill-green-700 pointer"
                    }), i.a.createElement("span", {
                        className: "type-14 navy-700"
                    }, j.default.t("discovery_overlay.Explore")))
                },
                M = function(e) {
                    var t = e.title,
                        n = e.count,
                        r = e.url,
                        a = e.onClick,
                        o = e.faded,
                        c = e.isOpen,
                        s = e.ariaControls,
                        l = e.children,
                        u = o ? "navy-700_40" : "navy-700";
                    return i.a.createElement("li", null, i.a.createElement("a", {
                        href: Object(L.b)(r, {
                            ref: "discovery_overlay"
                        }),
                        className: "inline-block type-34-md type-24 mb2 ".concat(u, " hover-green-700 transition-all pointer"),
                        onClick: a,
                        role: "tab",
                        "aria-selected": c,
                        "aria-controls": s && "aria-".concat(s)
                    }, t), 0 !== n && i.a.createElement("span", {
                        className: "pl1 green-700"
                    }, n), l)
                },
                S = function(e) {
                    var t = e.children;
                    return i.a.createElement(y.e, {
                        atoms: "z1 relative pt8"
                    }, i.a.createElement(y.i, null, i.a.createElement(y.d, {
                        atoms: "mb4 pt3"
                    }, i.a.createElement("ul", {
                        role: "tablist"
                    }, t))))
                },
                I = function(e) {
                    var t = e.children,
                        n = e.url,
                        r = e.dispatch,
                        a = e.sort,
                        o = e.slug,
                        c = {
                            ref: "discovery_overlay"
                        };
                    return a && (c.sort = a), i.a.createElement("li", {
                        className: "inline-block mr1 mb2"
                    }, i.a.createElement("a", {
                        href: Object(L.b)(n, c, null, {
                            noBaseEncode: !0
                        }),
                        className: "px2 py1 bg-green-700_08 rounded hover-bg-green-300 green-700 hover-green-700 hover-green-700 inline-block type-16-md type-14 transition-all",
                        onClick: function() {
                            r(Object(C.e)("category", o))
                        }
                    }, t))
                };
            t.b = function(e) {
                var t = e.state,
                    n = e.dispatch,
                    r = e.currentUser,
                    o = void 0 === r ? O.a : r,
                    c = t.isOpen,
                    s = c ? "" : "hide",
                    l = t.data.collections.map(function(e) {
                        var r = "saved" == e.id ? t.data.savedLiveProjectsCount : null;
                        if (!e.requiresCurrentUser || o) return i.a.createElement(M, {
                            count: r,
                            key: e.id,
                            title: e.name,
                            url: e.url,
                            ariaControls: e.id,
                            onClick: function() {
                                n(Object(C.e)("collection", e.id))
                            }
                        })
                    }),
                    u = t.data.sections.map(function(e) {
                        return i.a.createElement(M, {
                            key: e.id,
                            title: e.name,
                            url: e.url,
                            ariaControls: e.id,
                            onClick: function() {
                                n(Object(C.e)("section", e.id))
                            }
                        })
                    }),
                    d = t.data.rootCategories.map(function(e) {
                        var r = t.openCategoryId === e.id,
                            a = t.openCategoryId && !r,
                            o = r ? "h-auto mb2 transition-all transition-delay-100 transition-300" : "visibility-hidden h0 o0p translate-y-3";
                        return i.a.createElement(M, {
                            key: e.id,
                            title: e.name,
                            count: e.totalProjectCount,
                            faded: a,
                            isOpen: r,
                            url: e.url,
                            ariaControls: e.slug,
                            onClick: function(t) {
                                t.preventDefault(), n(Object(C.a)(e))
                            }
                        }, e && i.a.createElement("div", {
                            className: o,
                            "aria-hidden": !r,
                            role: "tabpanel"
                        }, i.a.createElement("ul", null, i.a.createElement(I, {
                            url: e.url,
                            dispatch: n,
                            slug: e.slug
                        }, Object(x.a)(j.default.t("discovery_overlay.All_Category_Projects", {
                            category: e.name
                        }))), function(e) {
                            if (e) return e.map(function(e) {
                                return i.a.createElement(I, {
                                    key: e.id,
                                    url: e.url,
                                    dispatch: n,
                                    slug: e.slug,
                                    sort: t.sort
                                }, e.name)
                            })
                        }(e.subcategories.nodes))))
                    }),
                    m = t.data.tags.map(function(e) {
                        return i.a.createElement(M, {
                            key: e.id,
                            title: e.name,
                            url: e.url,
                            onClick: function() {
                                n(Object(C.e)("tag", e.id))
                            }
                        })
                    }),
                    f = function() {
                        return i.a.createElement(y.e, {
                            atoms: "z1 relative pt8"
                        }, i.a.createElement(y.i, null, i.a.createElement(y.d, {
                            atoms: "mb4 pt3"
                        }, i.a.createElement(y.f, {
                            name: "icon--circle-loader",
                            size: "large"
                        }))))
                    };
                return i.a.createElement("div", {
                    onKeyDown: function(e) {
                        return n(Object(C.d)(e.which))
                    },
                    className: s
                }, i.a.createElement(h, {
                    isOpen: c
                }, i.a.createElement("div", {
                    id: "js-overlay-fade",
                    className: "grid-col-12 transition-all transition-delay-400 relative pb6 o0p translate-y22"
                }, i.a.createElement("div", {
                    tabIndex: "0",
                    id: "overlay-focus-guard"
                }), i.a.createElement(k, {
                    type: "collections",
                    lockPosition: 0,
                    dispatch: n,
                    atoms: "keyboard-focusable"
                }, i.a.createElement(a.a, {
                    emoji: "🛍",
                    customEmojiClasses: "type-21",
                    showEmojiPlusText: !1
                }, j.default.t("discovery_overlay.Collections"))), i.a.createElement(S, null, l), i.a.createElement(k, {
                    type: "sections",
                    lockPosition: 73,
                    dispatch: n
                }, i.a.createElement(a.a, {
                    emoji: "📑",
                    customEmojiClasses: "type-21",
                    showEmojiPlusText: !1
                }, j.default.t("discovery_overlay.Sections"))), i.a.createElement(S, null, u), i.a.createElement(k, {
                    type: "categories",
                    lockPosition: 122,
                    dispatch: n
                }, i.a.createElement(a.a, {
                    emoji: "🔖",
                    customEmojiClasses: "type-21",
                    showEmojiPlusText: !1
                }, j.default.t("discovery_overlay.Categories"))), t.dataRequestMade ? i.a.createElement(S, null, i.a.createElement("div", {
                    className: "test-category-collection-container"
                }, d)) : i.a.createElement(f, null), i.a.createElement(k, {
                    type: "tags",
                    lockPosition: 171,
                    dispatch: n
                }, i.a.createElement(a.a, {
                    emoji: "📡",
                    customEmojiClasses: "type-21",
                    showEmojiPlusText: !1
                }, j.default.t("discovery_overlay.On_Our_Radar"))), t.dataRequestMade ? i.a.createElement(S, null, m) : i.a.createElement(f, null))), i.a.createElement(function(e) {
                    var t = e.onButtonClick;
                    return i.a.createElement(y.e, {
                        atoms: "fixed t6 z-discover-overlay-3 l0 r0 w100p mx-auto text-right click-through"
                    }, i.a.createElement("button", {
                        className: "transition-all p1 transition-delay-800 test-overlay-close-button click-on pointer",
                        onClick: t,
                        "aria-label": j.default.t("discovery_overlay.Close")
                    }, i.a.createElement(y.f, {
                        name: "close",
                        atoms: "h2 w2 fill-ksr-green-700"
                    })))
                }, {
                    onButtonClick: function(e) {
                        e.preventDefault(), n(Object(C.b)())
                    }
                }))
            }
        },
        "4LGs": function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = "(?:".concat(Object.keys(e).join("|"), ")"),
                    r = RegExp(n),
                    a = RegExp(n, "g");
                return r.test(t) ? t.replace(a, function(t) {
                    return e[t]
                }) : t
            }
            n.d(t, "a", function() {
                return r
            })
        },
        "5igC": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return s
            });
            var r = n("wx14"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("HU7/"),
                c = function(e) {
                    var t = e.atoms,
                        n = void 0 === t ? [] : t,
                        r = e.children,
                        a = e.color,
                        i = void 0 === a ? "blue" : a,
                        c = e.disabled,
                        l = e.href,
                        u = e.onClick,
                        d = e.onMouseDown,
                        m = e.target,
                        f = e.type,
                        p = e.tooltip,
                        h = e.tabIndex,
                        g = e.hover,
                        b = void 0 === g || g,
                        v = n.concat(i && b ? ["link-".concat(i)] : [i]).concat(l ? [] : ["p0"]);
                    return o.a.createElement(s, {
                        tabIndex: h,
                        atoms: v,
                        children: r,
                        color: i,
                        disabled: c,
                        href: l,
                        onClick: u,
                        onMouseDown: d,
                        target: m,
                        type: f,
                        tooltip: p,
                        hover: b
                    })
                },
                s = function(e) {
                    var t = e.atoms,
                        n = void 0 === t ? [] : t,
                        a = e.children,
                        c = e.disabled,
                        s = void 0 !== c && c,
                        l = e.href,
                        u = e.onClick,
                        d = e.onFocus,
                        m = e.onMouseDown,
                        f = e.target,
                        p = e.type,
                        h = void 0 === p ? "button" : p,
                        g = e.tooltip,
                        b = e.tabIndex;
                    return o.a.createElement(i.b, null, function(e) {
                        return function(e) {
                            var t = {
                                onClick: u,
                                onFocus: d,
                                onMouseDown: m,
                                tabIndex: b
                            };
                            return l ? o.a.createElement("a", Object(r.a)({
                                target: f,
                                href: l,
                                className: n.concat(e.link.atoms).join(" "),
                                "data-tooltip": g
                            }, t), a) : o.a.createElement("button", Object(r.a)({
                                disabled: s,
                                type: h,
                                className: n.concat(e.form.atoms).join(" "),
                                "data-tooltip": g
                            }, t), a)
                        }(e)
                    })
                }
        },
        "60hy": function(e, t, n) {
            "use strict";
            var r = n("MgNI"),
                a = n("K+Nk"),
                o = function(e, t) {
                    return (n = t, "string" == typeof n ? r.result.Ok(n) : r.result.Error(n)).chain(function(e) {
                        return r.result.try(function() {
                            return Object(a.a)(e)
                        })
                    }).map(e).getOrElse(t);
                    var n
                },
                i = n("qcI4");
            n.d(t, "c", function() {
                return u
            }), n.d(t, "b", function() {
                return d
            }), n.d(t, "a", function() {
                return m
            });
            var c = function(e) {
                    return new i.c(e)
                },
                s = function(e) {
                    return new i.e(e)
                },
                l = function(e) {
                    return new i.f(e)
                },
                u = function(e) {
                    return o(l, e)
                },
                d = function(e) {
                    return o(s, e)
                },
                m = function(e) {
                    return o(c, e)
                }
        },
        "8y1c": function(e, t, n) {
            "use strict";
            n.r(t);
            n("/82Z"), n("/Su4");
            var r = n("+2Rf"),
                a = n.n(r),
                o = n("N3su"),
                i = n.n(o),
                c = n("KZo6");
            if (window.honeybadgerErrorConfiguration) {
                var s = i.a.factory(window.honeybadgerErrorConfiguration);
                s.setContext(Object(c.a)()), s.beforeNotify(function() {
                    if (Math.random() > .01) return !1
                }), window._honeybadgerErrors = s, window.onerror = function(e, t, n, r, a) {
                    var o = [e, "\n    at ? (", t || "unknown", ":", n || 0, ":", r || 0, ")"].join("");
                    if (a) {
                        var i = {
                            stack: a.stack
                        };
                        return i.stack || (i = {
                            stack: o
                        }), void s.notify(a, i)
                    }
                    s.notify({
                        name: "window.onerror",
                        message: e,
                        stack: o
                    })
                }
            }
            var l = n("0VSk"),
                u = (n("IvES"), n("l+V7"), n("QrAi"), n("bbO9"), n("zm9w"), n("2UXI"), n("aNAf"), n("vpQ4")),
                d = n("0fse"),
                m = n("gN63"),
                f = function() {
                    return Object(m.e)("\n  query {\n    me {\n      activeProjects(last: 5){\n        totalCount\n        nodes {\n          pid\n          name\n          imageUrl(width: 40)\n          url\n        }\n      }\n      backedProjects(first: 5) {\n        totalCount\n        nodes {\n          pid\n          name\n          image {\n            url(width: 40)\n          }\n          url\n        }\n      }\n      canCurate\n      curatedPages {\n        totalCount\n        nodes {\n          id\n          slug\n          title\n        }\n      }\n      hasUnreadMessages\n      hasUnseenActivity\n      hasUnseenSavedProjectsActivity\n      invitedProjects(last: 1) {\n        totalCount\n        nodes {\n          pid\n          name\n          imageUrl(width: 40)\n          url\n        }\n      }\n      isKsrAdmin\n      isSocializing\n      organizations(state: ADMIN) {\n        totalCount\n        nodes {\n          name\n          slug\n        }\n      }\n      name\n      savedProjects {\n        totalCount\n      }\n      url\n    }\n  }\n")
                },
                p = n("NSfo"),
                h = {
                    dataRequestStarted: !1,
                    dataRequestSuccessful: !1,
                    isSecureLoggedInAdmin: !1,
                    loggedIn: !1,
                    userMenuOpen: !1
                },
                g = function(e) {
                    return {
                        type: "USER_MENU_DATA_RESPONSE",
                        response: e
                    }
                },
                b = n("NimP"),
                v = n("gHiG"),
                C = n("CMmH"),
                y = n("468C"),
                _ = n("ODXe"),
                E = n("qthe"),
                w = n("C2IT"),
                k = n("q1tI"),
                j = n.n(k),
                O = n("NxQb"),
                x = n("arGM"),
                L = n("94td"),
                N = n("LtMG"),
                M = n("n+nq"),
                S = n("/cV5"),
                I = {
                    currencyModalOpen: !1
                },
                T = {
                    footerLinksGroups: [{
                        id: "footer_about",
                        i18nTitle: "global.footer.About",
                        easterEggEmoji: "🤔",
                        links: [{
                            i18nString: "global.footer.About_us",
                            href: "/about"
                        }, {
                            i18nString: "global.footer.Our_charter",
                            href: "/charter"
                        }, {
                            i18nString: "global.footer.Stats",
                            href: "/help/stats"
                        }, {
                            i18nString: "global.footer.Press",
                            href: "/press"
                        }, {
                            i18nString: "global.footer.Jobs",
                            href: "/jobs"
                        }]
                    }, {
                        id: "footer_help",
                        i18nTitle: "global.footer.Support",
                        easterEggEmoji: "🆘",
                        links: [{
                            i18nString: "global.footer.Help_Center",
                            href: "/help"
                        }, {
                            i18nString: "global.footer.Our_Rules",
                            href: "/rules"
                        }, {
                            i18nString: "global.footer.Creator_Handbook",
                            href: "/help/handbook"
                        }, {
                            i18nString: "global.footer.Patrons",
                            href: "/patrons"
                        }]
                    }, {
                        id: "footer_hello",
                        i18nTitle: "global.footer.Hello",
                        easterEggEmoji: "👋",
                        links: [{
                            i18nString: "global.footer.Kickstarter_Blog",
                            href: "/blog"
                        }, {
                            i18nString: "global.footer.Engineering_Blog",
                            href: "/backing-and-hacking"
                        }, {
                            i18nString: "global.footer.Newsletters",
                            href: "/newsletters"
                        }, {
                            i18nString: "global.footer.Research",
                            href: "/research"
                        }]
                    }, {
                        id: "footer_more",
                        i18nTitle: "global.footer.More_from_Kickstarter",
                        easterEggEmoji: "➕",
                        links: [{
                            i18nString: "global.footer.The_Creative_Independent",
                            href: "https://thecreativeindependent.com"
                        }, {
                            i18nString: "global.footer.Kickstarter_magazine",
                            href: "https://medium.com/kickstarter"
                        }, {
                            i18nString: "global.footer.Kickstarter_podcast",
                            href: "/podcast"
                        }]
                    }],
                    socialLinks: [{
                        id: "facebook",
                        href: "http://www.facebook.com/kickstarter",
                        icon: {
                            name: "icon--facebook",
                            label: "Facebook"
                        }
                    }, {
                        id: "instagram",
                        href: "http://www.instagram.com/kickstarter",
                        icon: {
                            name: "icon--instagram",
                            label: "Instagram"
                        }
                    }, {
                        id: "twitter",
                        href: "http://www.twitter.com/kickstarter",
                        icon: {
                            name: "icon--twitter",
                            label: "Twitter"
                        }
                    }, {
                        id: "youtube",
                        href: "http://www.youtube.com/user/kickstarter",
                        icon: {
                            name: "icon--youtube",
                            label: "YouTube"
                        }
                    }],
                    legalLinks: [{
                        id: "trust",
                        href: "/trust",
                        i18nString: "global.footer.Trust_and_Safety"
                    }, {
                        id: "terms-of-use",
                        href: "/terms-of-use",
                        i18nString: "global.footer.Terms_of_Use"
                    }, {
                        id: "privacy",
                        href: "/privacy",
                        i18nString: "global.footer.Privacy_Policy"
                    }, {
                        id: "cookies",
                        href: "/cookies",
                        i18nString: "global.footer.Cookie_Policy"
                    }]
                },
                A = Object(x.c)({
                    ref: "global-footer"
                }),
                D = function(e) {
                    var t, n = e.trackOnChange,
                        r = l.default.available_locales || [];
                    return j.a.createElement("form", {
                        action: "/remember_language",
                        method: "post",
                        ref: function(e) {
                            return t = e
                        },
                        className: "shadow-hover border border-transparent hover-border-soft-black transition-all rounded bg-white items-center justify-between shadow-2 input-keyboard-focusable-soft-black mr2 flex mb2 mb0-md relative"
                    }, j.a.createElement("input", {
                        type: "hidden",
                        name: "authenticity_token",
                        value: Object(M.b)(document)
                    }), j.a.createElement("select", {
                        name: "lang",
                        defaultValue: l.default.locale,
                        onChange: function(e) {
                            n({
                                type: e.target.value
                            }), t.submit()
                        },
                        className: "w100p border-none select-reset no-radius pl3 pr5 py2 pointer h100p keyboard-focusable bg-white type-14 maison-book dark-grey-500"
                    }, r.map(function(e) {
                        var t = Object(_.a)(e, 2),
                            n = t[0],
                            r = t[1];
                        return j.a.createElement("option", {
                            key: r,
                            value: r
                        }, n)
                    })), j.a.createElement(N.f, {
                        name: "delta-down",
                        size: "9",
                        atoms: ["click-through", "flex-noshrink", "r2", "absolute"]
                    }))
                },
                Y = function(e) {
                    var t, n = e.trackOnChange,
                        r = l.default.available_locales || [],
                        a = j.a.useState(localStorage.getItem("ksr10locale") || ""),
                        o = Object(_.a)(a, 2),
                        i = o[0],
                        c = o[1];
                    j.a.useEffect(function() {
                        localStorage.setItem("ksr10locale", i)
                    }, [i]);
                    return j.a.createElement("form", {
                        action: "/remember_language",
                        method: "post",
                        ref: function(e) {
                            return t = e
                        },
                        className: "shadow-hover border border-transparent hover-border-soft-black transition-all rounded bg-white items-center justify-between shadow-2 input-keyboard-focusable-soft-black mr2 flex mb2 mb0-md relative"
                    }, j.a.createElement("input", {
                        type: "hidden",
                        name: "authenticity_token",
                        value: Object(M.b)(document)
                    }), j.a.createElement("select", {
                        name: "lang",
                        defaultValue: "emojilocale" === i ? "emojilocale" : l.default.locale,
                        onChange: function(e) {
                            n({
                                type: e.target.value
                            }), "emojilocale" === e.target.value ? window.location.reload() : t.submit(), c(e.target.value)
                        },
                        className: "w100p border-none select-reset no-radius pl3 pr5 py2 pointer h100p keyboard-focusable bg-white type-14 maison-book dark-grey-500"
                    }, r.map(function(e) {
                        var t = Object(_.a)(e, 2),
                            n = t[0],
                            r = t[1];
                        return j.a.createElement("option", {
                            key: r,
                            value: r
                        }, n)
                    }).concat(j.a.createElement("option", {
                        key: "emojilocale",
                        value: "emojilocale"
                    }, "😃 ❤️ 🔥"))), j.a.createElement(N.f, {
                        name: "delta-down",
                        size: "9",
                        atoms: ["click-through", "flex-noshrink", "r2", "absolute"]
                    }))
                },
                R = function(e) {
                    var t = e.currencyModalOpen,
                        n = e.dispatch,
                        r = e.onClick;
                    return t && j.a.createElement(S.a, {
                        headerCopy: Object(L.c)("global.footer.Change_currency_display"),
                        secondaryCloseCopy: Object(L.c)("global.footer.Nevermind"),
                        onClose: function() {
                            return n({
                                type: "CLOSE_CURRENCY_MODAL"
                            })
                        },
                        size: "small"
                    }, j.a.createElement("div", {
                        className: "mb4"
                    }, Object(L.c)("global.footer.Making_this_change_will_allow")), j.a.createElement("div", null, Object(L.c)("global.footer.Please_remember_that_the_amounts_shown_are_an_approximate")), j.a.createElement(S.c, {
                        color: "green",
                        onClick: r
                    }, Object(L.c)("global.footer.Continue")))
                },
                P = function(e) {
                    var t, n = e.currencies,
                        r = e.currentCurrency,
                        a = e.dispatch,
                        o = e.currencyModalOpen;
                    return j.a.createElement("div", null, j.a.createElement("form", {
                        action: "/remember_currency",
                        method: "post",
                        ref: function(e) {
                            return t = e
                        },
                        className: "shadow-hover border border-transparent hover-border-soft-black transition-all rounded bg-white items-center justify-between shadow-2 input-keyboard-focusable-soft-black mr2 flex mb2 mb0-md relative"
                    }, j.a.createElement("input", {
                        type: "hidden",
                        name: "authenticity_token",
                        value: Object(M.b)(document)
                    }), j.a.createElement("select", {
                        name: "currency",
                        defaultValue: r,
                        onChange: function() {
                            return a({
                                type: "OPEN_CURRENCY_MODAL"
                            })
                        },
                        className: "select-reset pl3 pr5 w100p py2 pointer h100p keyboard-focusable bg-white type-14 maison-book border-none no-radius dark-grey-500"
                    }, n.map(function(e) {
                        var t = Object(_.a)(e, 2),
                            n = t[0],
                            r = t[1];
                        return j.a.createElement("option", {
                            key: r,
                            value: r
                        }, n)
                    })), j.a.createElement(N.f, {
                        name: "delta-down",
                        size: "9",
                        atoms: ["click-through", "flex-noshrink", "r2", "absolute"]
                    })), j.a.createElement(R, {
                        currencyModalOpen: o,
                        currencyFormNode: t,
                        dispatch: a,
                        onClick: function() {
                            return t && t.submit()
                        }
                    }))
                },
                U = function(e) {
                    var t = e.linkGroups;
                    return j.a.createElement(N.e, null, j.a.createElement(N.i, null, t.map(function(e) {
                        var t = e.id,
                            n = e.i18nTitle,
                            r = e.easterEggEmoji,
                            a = e.links;
                        return j.a.createElement(N.d, {
                            smWidth: 3,
                            atoms: "pb5 pb0-sm",
                            key: t
                        }, j.a.createElement("section", {
                            id: t
                        }, j.a.createElement("h3", {
                            className: "text-uppercase mb2 type-13 bold"
                        }, j.a.createElement(E.a, {
                            showEmojiPlusText: !1,
                            customEmojiClasses: "type-21",
                            emoji: r
                        }, Object(L.c)(n))), j.a.createElement("ul", null, a.map(function(e) {
                            return j.a.createElement("li", {
                                key: e.href
                            }, j.a.createElement("a", {
                                href: A(e.href),
                                className: "link-soft-black"
                            }, Object(L.c)(e.i18nString)))
                        }))))
                    })))
                },
                H = function(e) {
                    var t = e.sections;
                    return j.a.createElement("section", {
                        id: "subcategory_bar"
                    }, j.a.createElement("div", {
                        className: "border-bottom border-medium py4 mb8"
                    }, j.a.createElement(N.e, null, j.a.createElement(N.i, null, j.a.createElement(N.d, null, j.a.createElement("h3", {
                        className: "text-uppercase mb2 type-13 bold hide-md"
                    }, Object(L.c)("global.footer.Explore")), j.a.createElement("ul", null, t.map(function(e, t) {
                        return j.a.createElement("li", {
                            className: "block inline-block-md mr3 mr5-lg",
                            key: e.name
                        }, j.a.createElement("a", {
                            href: A(e.path),
                            className: "link-soft-black"
                        }, j.a.createElement(E.a, {
                            customEmojiClasses: "type-21",
                            emoji: w.a[t].emoji,
                            showEmojiPlusText: !1
                        }, e.name)))
                    })))))))
                },
                q = function(e) {
                    var t = e.dispatch,
                        n = e.year,
                        r = e.currencies,
                        a = e.currentCurrency,
                        o = e.currencyModalOpen;
                    return j.a.createElement("div", {
                        className: "border-bottom border-medium py8"
                    }, j.a.createElement(N.e, null, j.a.createElement(N.i, null, j.a.createElement(N.d, null, j.a.createElement("div", {
                        className: "flex items-center-lg justify-between flex-column flex-row-lg"
                    }, j.a.createElement("section", {
                        className: "section_footer-copyright"
                    }, j.a.createElement("div", {
                        className: "flex items-center mb3 mb0-lg"
                    }, j.a.createElement(N.f, {
                        name: "icon--small-k",
                        label: "Kickstarter",
                        size: "large",
                        atoms: "display-none inline-block-sm mr2"
                    }), j.a.createElement("span", null, "Kickstarter, PBC © ", n))), j.a.createElement("div", {
                        className: "flex items-center-lg flex-column flex-row-lg"
                    }, j.a.createElement("section", {
                        className: "section_footer-social-links"
                    }, j.a.createElement("ul", {
                        className: "flex mr4 mb0-lg mb4"
                    }, T.socialLinks.map(function(e) {
                        return j.a.createElement("li", {
                            key: e.id
                        }, j.a.createElement("a", {
                            href: e.href,
                            className: "link-soft-black keyboard-focusable"
                        }, j.a.createElement(N.f, {
                            name: e.icon.name,
                            label: e.icon.label,
                            size: "large",
                            atoms: "mr4"
                        })))
                    }))), j.a.createElement("section", {
                        className: "section_footer-language-and-currency flex flex-column flex-row-sm"
                    }, Object(O.a)("emoji_locale") ? j.a.createElement(Y, {
                        trackOnChange: function(e) {
                            return t(Object(p.b)("Toggled Chosen Language", e))
                        }
                    }) : j.a.createElement(D, {
                        trackOnChange: function(e) {
                            return t(Object(p.b)("Toggled Chosen Language", e))
                        }
                    }), j.a.createElement(P, {
                        currencies: r,
                        currentCurrency: a,
                        currencyModalOpen: o,
                        dispatch: t
                    }))))))))
                },
                z = function() {
                    return j.a.createElement("div", {
                        className: "pt4"
                    }, j.a.createElement(N.e, null, j.a.createElement(N.i, null, j.a.createElement(N.d, null, j.a.createElement("section", {
                        className: "section_footer-legal"
                    }, j.a.createElement("ul", {
                        className: "flex flex-wrap type-13"
                    }, T.legalLinks.map(function(e) {
                        return j.a.createElement("li", {
                            className: "mr4 mb2 mb0-sm",
                            key: e.id
                        }, j.a.createElement("a", {
                            href: A(e.href),
                            className: "link-soft-black keyboard-focusable"
                        }, Object(L.c)(e.i18nString)))
                    })))))))
                },
                F = function(e) {
                    var t = e.state,
                        n = e.dispatch,
                        r = e.data,
                        a = t.currencyModalOpen,
                        o = r.sections,
                        i = r.currencies,
                        c = r.current_currency;
                    return j.a.createElement("div", null, j.a.createElement("div", {
                        className: "border-top border-medium border-dark-grey-400 mb5 bg-white"
                    }, j.a.createElement(H, {
                        sections: o
                    }), j.a.createElement(U, {
                        linkGroups: T.footerLinksGroups
                    }), j.a.createElement(q, {
                        dispatch: n,
                        currencies: i,
                        year: (new Date).getFullYear(),
                        currentCurrency: c,
                        currencyModalOpen: a
                    }), j.a.createElement(z, null)))
                },
                K = n("Ff2n"),
                B = n("wfJQ"),
                G = n("3yfh"),
                Q = n("/IHD"),
                V = n("1OyB"),
                W = n("vuIU"),
                Z = n("md7G"),
                $ = n("foSv"),
                X = n("JX7q"),
                J = n("Ji7U"),
                ee = n("cSmn"),
                te = [function() {
                    return j.a.createElement(G.a, {
                        color: "ksr-green-800"
                    })
                }, function() {
                    return k.createElement("svg", {
                        width: "100%",
                        height: "100%",
                        className: "valign-middle",
                        viewBox: "0 0 468 64",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, k.createElement("title", null, "KICKSTARTR"), k.createElement("desc", null, "Created with Sketch."), k.createElement("g", {
                        id: "KSR10---Logo-Rotation",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, k.createElement("g", {
                        id: "spelunk",
                        transform: "translate(-1185.000000, -166.000000)",
                        fill: "#4D4C4E",
                        fillRule: "nonzero"
                    }, k.createElement("path", {
                        d: "M1220.765,175.943 C1221.346,175.196 1221.927,174.366 1222.508,173.619 C1221.346,173.536 1217.943,173.204 1216.2,172.623 C1215.951,172.54 1215.619,172.291 1215.619,171.959 C1215.619,171.461 1215.951,171.129 1216.449,171.129 C1217.113,171.129 1221.512,171.627 1227.571,171.627 C1233.547,171.627 1237.78,171.129 1238.278,171.129 C1238.776,171.129 1239.108,171.461 1239.108,171.959 C1239.108,172.291 1238.776,172.54 1238.527,172.623 C1236.867,173.204 1233.049,173.536 1231.97,173.619 C1231.472,174.034 1229.978,175.03 1227.571,176.856 C1222.342,180.84 1215.702,186.816 1211.386,190.634 C1208.647,193.041 1205.908,195.448 1203.169,197.772 L1203.335,197.938 C1205.576,197.523 1207.236,197.274 1210.141,197.274 C1212.714,197.274 1214.789,197.606 1216.366,198.353 C1217.777,199.017 1219.437,200.262 1220.101,201.009 C1223.919,205.491 1227.737,212.795 1231.804,218.522 C1233.215,220.514 1234.377,221.51 1235.29,221.51 C1236.784,221.51 1237.448,220.265 1238.361,220.265 C1238.776,220.265 1239.191,220.597 1239.191,220.929 C1239.191,222.506 1234.709,225.743 1231.14,225.743 C1226.409,225.743 1224.417,222.34 1219.022,213.874 L1216.034,209.143 C1211.137,201.341 1210.307,199.183 1201.426,199.349 C1201.426,205.906 1201.426,216.53 1201.758,222.008 C1203.003,222.091 1207.319,222.423 1209.145,223.004 C1209.394,223.087 1209.726,223.336 1209.726,223.668 C1209.726,224.166 1209.394,224.498 1208.896,224.498 C1208.315,224.498 1203.833,224 1197.359,224 C1190.885,224 1186.486,224.498 1185.822,224.498 C1185.324,224.498 1184.992,224.166 1184.992,223.668 C1184.992,223.336 1185.324,223.087 1185.573,223.004 C1187.399,222.423 1191.715,222.091 1192.96,222.008 C1193.292,216.447 1193.292,205.408 1193.292,197.772 C1193.292,190.136 1193.292,179.18 1192.96,173.619 C1191.715,173.536 1187.399,173.204 1185.573,172.623 C1185.324,172.54 1184.992,172.291 1184.992,171.959 C1184.992,171.461 1185.324,171.129 1185.822,171.129 C1186.486,171.129 1190.885,171.627 1197.359,171.627 C1203.833,171.627 1208.315,171.129 1208.896,171.129 C1209.394,171.129 1209.726,171.461 1209.726,171.959 C1209.726,172.291 1209.394,172.54 1209.145,172.623 C1207.319,173.204 1203.003,173.536 1201.758,173.619 C1201.426,179.263 1201.426,190.551 1201.426,197.689 C1205.493,194.037 1216.117,181.587 1220.765,175.943 Z M1255.41043,222.008 C1256.65543,222.091 1260.97143,222.423 1262.79743,223.004 C1263.04643,223.087 1263.37843,223.336 1263.37843,223.668 C1263.37843,224.166 1263.04643,224.498 1262.54843,224.498 C1261.96743,224.498 1257.48543,224 1251.01143,224 C1244.53743,224 1240.13843,224.498 1239.47443,224.498 C1238.97643,224.498 1238.64443,224.166 1238.64443,223.668 C1238.64443,223.336 1238.97643,223.087 1239.22543,223.004 C1241.05143,222.423 1245.36743,222.091 1246.61243,222.008 C1246.94443,216.447 1246.94443,205.408 1246.94443,197.772 C1246.94443,190.136 1246.94443,179.18 1246.61243,173.619 C1245.36743,173.536 1241.05143,173.204 1239.22543,172.623 C1238.97643,172.54 1238.64443,172.291 1238.64443,171.959 C1238.64443,171.461 1238.97643,171.129 1239.47443,171.129 C1240.13843,171.129 1244.53743,171.627 1251.01143,171.627 C1257.48543,171.627 1261.96743,171.129 1262.54843,171.129 C1263.04643,171.129 1263.37843,171.461 1263.37843,171.959 C1263.37843,172.291 1263.04643,172.54 1262.79743,172.623 C1260.97143,173.204 1256.65543,173.536 1255.41043,173.619 C1255.07843,179.429 1255.07843,190.136 1255.07843,197.772 C1255.07843,205.408 1255.07843,216.198 1255.41043,222.008 Z M1311.22086,182.666 L1311.22086,190.385 C1311.22086,191.132 1311.22086,191.713 1310.47386,191.713 C1309.22886,191.713 1309.31186,185.903 1309.14586,184.077 C1307.23686,180.508 1302.50586,171.876 1292.54586,171.876 C1278.51886,171.876 1274.03686,185.322 1274.03686,197.938 C1274.03686,210.886 1280.26186,222.091 1293.37586,222.091 C1306.15786,222.091 1310.47386,212.961 1311.96786,212.961 C1312.29986,212.961 1312.46586,213.127 1312.46586,213.542 C1312.46586,215.119 1304.58086,225.411 1290.63686,225.411 C1271.62986,225.411 1264.57486,211.384 1264.57486,199.349 C1264.57486,181.006 1278.43586,170.216 1292.54586,170.216 C1301.84186,170.216 1306.15786,172.623 1309.80986,174.283 C1310.80586,169.469 1310.72286,167.062 1311.88486,167.062 C1312.46586,167.062 1312.54886,167.56 1312.54886,167.975 C1312.54886,168.556 1311.22086,179.014 1311.22086,182.666 Z M1350.18229,175.943 C1350.76329,175.196 1351.34429,174.366 1351.92529,173.619 C1350.76329,173.536 1347.36029,173.204 1345.61729,172.623 C1345.36829,172.54 1345.03629,172.291 1345.03629,171.959 C1345.03629,171.461 1345.36829,171.129 1345.86629,171.129 C1346.53029,171.129 1350.92929,171.627 1356.98829,171.627 C1362.96429,171.627 1367.19729,171.129 1367.69529,171.129 C1368.19329,171.129 1368.52529,171.461 1368.52529,171.959 C1368.52529,172.291 1368.19329,172.54 1367.94429,172.623 C1366.28429,173.204 1362.46629,173.536 1361.38729,173.619 C1360.88929,174.034 1359.39529,175.03 1356.98829,176.856 C1351.75929,180.84 1345.11929,186.816 1340.80329,190.634 C1338.06429,193.041 1335.32529,195.448 1332.58629,197.772 L1332.75229,197.938 C1334.99329,197.523 1336.65329,197.274 1339.55829,197.274 C1342.13129,197.274 1344.20629,197.606 1345.78329,198.353 C1347.19429,199.017 1348.85429,200.262 1349.51829,201.009 C1353.33629,205.491 1357.15429,212.795 1361.22129,218.522 C1362.63229,220.514 1363.79429,221.51 1364.70729,221.51 C1366.20129,221.51 1366.86529,220.265 1367.77829,220.265 C1368.19329,220.265 1368.60829,220.597 1368.60829,220.929 C1368.60829,222.506 1364.12629,225.743 1360.55729,225.743 C1355.82629,225.743 1353.83429,222.34 1348.43929,213.874 L1345.45129,209.143 C1340.55429,201.341 1339.72429,199.183 1330.84329,199.349 C1330.84329,205.906 1330.84329,216.53 1331.17529,222.008 C1332.42029,222.091 1336.73629,222.423 1338.56229,223.004 C1338.81129,223.087 1339.14329,223.336 1339.14329,223.668 C1339.14329,224.166 1338.81129,224.498 1338.31329,224.498 C1337.73229,224.498 1333.25029,224 1326.77629,224 C1320.30229,224 1315.90329,224.498 1315.23929,224.498 C1314.74129,224.498 1314.40929,224.166 1314.40929,223.668 C1314.40929,223.336 1314.74129,223.087 1314.99029,223.004 C1316.81629,222.423 1321.13229,222.091 1322.37729,222.008 C1322.70929,216.447 1322.70929,205.408 1322.70929,197.772 C1322.70929,190.136 1322.70929,179.18 1322.37729,173.619 C1321.13229,173.536 1316.81629,173.204 1314.99029,172.623 C1314.74129,172.54 1314.40929,172.291 1314.40929,171.959 C1314.40929,171.461 1314.74129,171.129 1315.23929,171.129 C1315.90329,171.129 1320.30229,171.627 1326.77629,171.627 C1333.25029,171.627 1337.73229,171.129 1338.31329,171.129 C1338.81129,171.129 1339.14329,171.461 1339.14329,171.959 C1339.14329,172.291 1338.81129,172.54 1338.56229,172.623 C1336.73629,173.204 1332.42029,173.536 1331.17529,173.619 C1330.84329,179.263 1330.84329,190.551 1330.84329,197.689 C1334.91029,194.037 1345.53429,181.587 1350.18229,175.943 Z M1405.49471,177.935 L1405.49471,185.82 C1405.49471,186.899 1405.49471,187.314 1404.66471,187.314 C1403.50271,187.314 1403.50271,182.002 1403.50271,181.255 C1399.60171,177.935 1394.45571,174.698 1386.73671,174.698 C1382.00571,174.698 1373.20771,175.943 1373.20771,183.496 C1373.20771,194.286 1389.64171,191.132 1398.35671,194.286 C1404.49871,196.527 1407.81871,201.092 1407.81871,208.313 C1407.81871,219.269 1399.51871,225.411 1388.23071,225.411 C1382.08871,225.411 1379.43271,224.415 1373.20771,222.257 C1372.95871,224.166 1372.79271,229.229 1371.54771,229.229 C1370.96671,229.229 1370.80071,228.648 1370.80071,228.233 C1370.80071,226.822 1371.29871,221.178 1371.29871,217.609 C1371.29871,213.791 1370.80071,207.151 1370.80071,205.989 C1370.80071,205.574 1370.96671,205.159 1371.38171,205.159 C1372.79271,205.159 1372.95871,209.392 1373.20771,212.131 C1378.51971,217.028 1383.91471,220.431 1392.46371,220.431 C1399.60171,220.431 1404.99671,218.439 1404.99671,212.463 C1404.99671,200.013 1384.74471,204.246 1377.02571,199.515 C1372.79271,196.942 1370.63471,191.381 1370.63471,186.401 C1370.63471,175.86 1379.51571,170.216 1389.47571,170.216 C1395.53471,170.216 1398.52271,171.046 1403.75171,172.706 C1404.24971,168.971 1404.49871,166.481 1405.49471,166.481 C1406.07571,166.481 1406.24171,167.062 1406.24171,167.477 C1406.24171,168.058 1405.49471,174.781 1405.49471,177.935 Z M1457.73614,184.16 C1457.32114,184.16 1457.15514,183.745 1457.07214,183.496 C1456.74014,182.334 1456.32514,179.429 1456.15914,177.271 C1452.00914,174.781 1446.11614,173.619 1438.23114,173.619 C1437.89914,179.263 1437.89914,190.219 1437.89914,197.855 C1437.89914,205.491 1437.89914,216.447 1438.23114,222.008 C1439.47614,222.091 1443.79214,222.423 1445.61814,223.004 C1445.86714,223.087 1446.19914,223.336 1446.19914,223.668 C1446.19914,224.166 1445.86714,224.498 1445.36914,224.498 C1444.62214,224.498 1440.22314,224 1433.83214,224 C1427.35814,224 1422.87614,224.498 1422.29514,224.498 C1421.79714,224.498 1421.46514,224.166 1421.46514,223.668 C1421.46514,223.336 1421.79714,223.087 1422.04614,223.004 C1423.87214,222.423 1428.18814,222.091 1429.43314,222.008 C1429.76514,216.447 1429.76514,205.491 1429.76514,197.855 C1429.76514,190.219 1429.76514,179.263 1429.43314,173.619 C1421.71414,173.619 1415.32314,174.781 1411.50514,177.271 C1411.33914,179.429 1410.92414,182.334 1410.59214,183.496 C1410.50914,183.828 1410.34314,184.16 1409.92814,184.16 C1409.26414,184.16 1409.01514,183.662 1409.01514,182.998 C1409.01514,182.334 1409.51314,178.184 1409.51314,175.611 C1409.51314,173.702 1409.01514,168.639 1409.01514,167.56 C1409.01514,166.979 1409.34714,166.398 1410.01114,166.398 C1410.42614,166.398 1410.67514,166.73 1410.84114,167.228 C1411.17314,168.39 1411.17314,169.552 1411.25614,170.216 C1416.81714,171.461 1428.60314,171.627 1433.83214,171.627 C1438.64614,171.627 1450.84714,171.461 1456.40814,170.216 C1456.49114,169.552 1456.49114,168.39 1456.82314,167.228 C1456.98914,166.73 1457.23814,166.398 1457.65314,166.398 C1458.31714,166.398 1458.64914,166.979 1458.64914,167.56 C1458.64914,168.639 1458.15114,173.702 1458.15114,175.611 C1458.15114,178.184 1458.64914,182.334 1458.64914,182.998 C1458.64914,183.662 1458.40014,184.16 1457.73614,184.16 Z M1489.06157,198.768 L1498.60657,222.008 C1499.68557,222.091 1503.75257,222.423 1505.41257,223.004 C1505.66157,223.087 1505.99357,223.336 1505.99357,223.668 C1505.99357,224.166 1505.66157,224.498 1505.16357,224.498 C1504.58257,224.498 1500.10057,224 1493.37757,224 C1485.90757,224 1481.01057,224.498 1480.18057,224.498 C1479.68257,224.498 1479.35057,224.166 1479.35057,223.668 C1479.35057,223.336 1479.68257,223.087 1479.93157,223.004 C1482.25557,222.506 1487.23557,222.174 1488.81257,222.091 C1487.65057,218.439 1485.40957,210.969 1483.74957,207.483 L1464.65957,207.483 C1462.99957,212.131 1460.92457,219.103 1460.59257,222.008 C1462.16957,222.091 1467.39857,222.423 1469.55657,223.004 C1469.80557,223.087 1470.13757,223.336 1470.13757,223.668 C1470.13757,224.166 1469.80557,224.498 1469.30757,224.498 C1468.72657,224.498 1464.24457,224 1457.85357,224 C1452.29257,224 1448.30857,224.498 1447.97657,224.498 C1447.47857,224.498 1447.14657,224.166 1447.14657,223.668 C1447.14657,223.336 1447.47857,223.087 1447.72757,223.004 C1449.30457,222.506 1453.03957,222.257 1454.11857,222.174 C1462.91657,207.317 1473.78957,180.757 1477.44157,170.299 C1477.69057,169.718 1477.85657,169.22 1478.18857,169.22 C1478.52057,169.22 1479.01857,170.714 1480.01457,173.868 C1481.25957,177.935 1485.65857,190.468 1489.06157,198.768 Z M1465.32357,205.823 L1483.08557,205.823 L1474.28757,184.16 C1472.46157,188.393 1466.73457,201.839 1465.32357,205.823 Z M1537.319,219.02 L1524.371,200.76 C1523.541,199.598 1522.96,198.934 1522.96,198.353 C1522.96,197.938 1523.292,197.689 1524.039,197.689 C1524.869,197.689 1526.861,197.938 1528.936,197.938 C1536.821,197.938 1543.129,195.614 1543.129,187.729 C1543.129,178.184 1534.912,172.789 1527.525,172.789 C1524.786,172.789 1522.711,173.453 1521.466,173.619 C1521.134,179.429 1521.134,190.717 1521.134,197.772 C1521.134,204.661 1521.134,216.115 1521.466,222.008 C1522.877,222.091 1526.944,222.423 1528.853,223.004 C1529.102,223.087 1529.434,223.336 1529.434,223.668 C1529.434,224.166 1529.102,224.498 1528.604,224.498 C1527.94,224.498 1523.209,224 1517.067,224 C1510.593,224 1506.194,224.498 1505.53,224.498 C1505.032,224.498 1504.7,224.166 1504.7,223.668 C1504.7,223.336 1505.032,223.087 1505.281,223.004 C1507.107,222.34 1511.423,222.091 1512.668,222.008 C1513,216.447 1513,205.408 1513,197.772 C1513,190.136 1513,179.18 1512.668,173.619 C1511.423,173.536 1507.107,173.204 1505.281,172.623 C1505.032,172.54 1504.7,172.291 1504.7,171.959 C1504.7,171.461 1505.032,171.129 1505.53,171.129 C1507.107,171.129 1514.245,171.627 1517.316,171.627 C1520.719,171.627 1526.695,171.129 1531.509,171.129 C1540.888,171.129 1551.429,173.868 1551.429,183.994 C1551.429,195.116 1540.556,198.353 1533.501,199.432 L1544.872,215.534 C1547.196,218.854 1549.188,221.842 1552.176,221.842 C1554.085,221.842 1554.832,221.095 1555.413,221.095 C1555.828,221.095 1556.16,221.427 1556.16,221.842 C1556.16,223.087 1551.844,226.158 1547.03,226.158 C1542.465,226.158 1540.058,222.921 1537.319,219.02 Z M1601.01443,184.16 C1600.59943,184.16 1600.43343,183.745 1600.35043,183.496 C1600.01843,182.334 1599.60343,179.429 1599.43743,177.271 C1595.28743,174.781 1589.39443,173.619 1581.50943,173.619 C1581.17743,179.263 1581.17743,190.219 1581.17743,197.855 C1581.17743,205.491 1581.17743,216.447 1581.50943,222.008 C1582.75443,222.091 1587.07043,222.423 1588.89643,223.004 C1589.14543,223.087 1589.47743,223.336 1589.47743,223.668 C1589.47743,224.166 1589.14543,224.498 1588.64743,224.498 C1587.90043,224.498 1583.50143,224 1577.11043,224 C1570.63643,224 1566.15443,224.498 1565.57343,224.498 C1565.07543,224.498 1564.74343,224.166 1564.74343,223.668 C1564.74343,223.336 1565.07543,223.087 1565.32443,223.004 C1567.15043,222.423 1571.46643,222.091 1572.71143,222.008 C1573.04343,216.447 1573.04343,205.491 1573.04343,197.855 C1573.04343,190.219 1573.04343,179.263 1572.71143,173.619 C1564.99243,173.619 1558.60143,174.781 1554.78343,177.271 C1554.61743,179.429 1554.20243,182.334 1553.87043,183.496 C1553.78743,183.828 1553.62143,184.16 1553.20643,184.16 C1552.54243,184.16 1552.29343,183.662 1552.29343,182.998 C1552.29343,182.334 1552.79143,178.184 1552.79143,175.611 C1552.79143,173.702 1552.29343,168.639 1552.29343,167.56 C1552.29343,166.979 1552.62543,166.398 1553.28943,166.398 C1553.70443,166.398 1553.95343,166.73 1554.11943,167.228 C1554.45143,168.39 1554.45143,169.552 1554.53443,170.216 C1560.09543,171.461 1571.88143,171.627 1577.11043,171.627 C1581.92443,171.627 1594.12543,171.461 1599.68643,170.216 C1599.76943,169.552 1599.76943,168.39 1600.10143,167.228 C1600.26743,166.73 1600.51643,166.398 1600.93143,166.398 C1601.59543,166.398 1601.92743,166.979 1601.92743,167.56 C1601.92743,168.639 1601.42943,173.702 1601.42943,175.611 C1601.42943,178.184 1601.92743,182.334 1601.92743,182.998 C1601.92743,183.662 1601.67843,184.16 1601.01443,184.16 Z M1633.33586,219.02 L1620.38786,200.76 C1619.55786,199.598 1618.97686,198.934 1618.97686,198.353 C1618.97686,197.938 1619.30886,197.689 1620.05586,197.689 C1620.88586,197.689 1622.87786,197.938 1624.95286,197.938 C1632.83786,197.938 1639.14586,195.614 1639.14586,187.729 C1639.14586,178.184 1630.92886,172.789 1623.54186,172.789 C1620.80286,172.789 1618.72786,173.453 1617.48286,173.619 C1617.15086,179.429 1617.15086,190.717 1617.15086,197.772 C1617.15086,204.661 1617.15086,216.115 1617.48286,222.008 C1618.89386,222.091 1622.96086,222.423 1624.86986,223.004 C1625.11886,223.087 1625.45086,223.336 1625.45086,223.668 C1625.45086,224.166 1625.11886,224.498 1624.62086,224.498 C1623.95686,224.498 1619.22586,224 1613.08386,224 C1606.60986,224 1602.21086,224.498 1601.54686,224.498 C1601.04886,224.498 1600.71686,224.166 1600.71686,223.668 C1600.71686,223.336 1601.04886,223.087 1601.29786,223.004 C1603.12386,222.34 1607.43986,222.091 1608.68486,222.008 C1609.01686,216.447 1609.01686,205.408 1609.01686,197.772 C1609.01686,190.136 1609.01686,179.18 1608.68486,173.619 C1607.43986,173.536 1603.12386,173.204 1601.29786,172.623 C1601.04886,172.54 1600.71686,172.291 1600.71686,171.959 C1600.71686,171.461 1601.04886,171.129 1601.54686,171.129 C1603.12386,171.129 1610.26186,171.627 1613.33286,171.627 C1616.73586,171.627 1622.71186,171.129 1627.52586,171.129 C1636.90486,171.129 1647.44586,173.868 1647.44586,183.994 C1647.44586,195.116 1636.57286,198.353 1629.51786,199.432 L1640.88886,215.534 C1643.21286,218.854 1645.20486,221.842 1648.19286,221.842 C1650.10186,221.842 1650.84886,221.095 1651.42986,221.095 C1651.84486,221.095 1652.17686,221.427 1652.17686,221.842 C1652.17686,223.087 1647.86086,226.158 1643.04686,226.158 C1638.48186,226.158 1636.07486,222.921 1633.33586,219.02 Z",
                        id: "KICKSTARTR"
                    }))))
                }, function() {
                    return k.createElement("svg", {
                        width: "100%",
                        height: "100%",
                        className: "valign-middle",
                        viewBox: "0 0 465 73",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, k.createElement("title", null, "KickStartr"), k.createElement("desc", null, "Created with Sketch."), k.createElement("g", {
                        id: "KSR10---Logo-Rotation",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, k.createElement("g", {
                        id: "spelunk",
                        transform: "translate(-1186.000000, -254.000000)",
                        fillRule: "nonzero"
                    }, k.createElement("g", {
                        id: "KickStartr",
                        transform: "translate(1186.549000, 254.658000)"
                    }, k.createElement("path", {
                        d: "M7.371,63.245 C8.372,63.245 10.101,62.335 10.101,61.152 L10.101,15.743 C10.101,13.923 8.736,12.376 6.916,12.376 L0,12.376 L0,6.279 L30.667,6.279 L30.667,12.376 L24.206,12.376 C21.931,12.376 20.657,13.195 20.657,15.652 L20.657,37.128 C36.127,22.386 44.59,15.834 44.59,13.923 C44.59,13.104 44.044,12.376 42.952,12.376 L36.4,12.376 L36.4,6.279 L64.519,6.279 L64.519,12.376 L58.513,12.376 C55.783,12.376 51.961,16.926 36.764,30.576 L59.15,60.697 C61.152,63.427 65.247,63.518 67.522,63.518 L67.522,69.342 L38.311,69.342 L38.311,63.245 L44.772,63.245 C45.5,63.245 46.41,62.517 46.41,61.698 C46.41,60.424 45.318,58.877 44.59,57.967 L29.029,37.401 L20.657,45.045 L20.657,60.424 C20.657,61.971 21.931,63.245 23.478,63.245 L30.667,63.245 L30.667,69.342 L0.182,69.342 L0.182,63.245 L7.371,63.245 Z M74.984,8.645 C74.984,5.187 77.623,2.093 81.263,2.093 C84.539,2.093 87.451,5.005 87.451,8.372 C87.451,12.012 84.448,14.651 80.99,14.651 C77.623,14.651 74.984,12.012 74.984,8.645 Z M94.64,69.342 L69.433,69.342 L69.433,63.791 L74.347,63.791 C75.257,63.791 77.077,63.245 77.077,60.333 L77.077,29.848 C77.077,28.028 75.803,27.482 74.893,27.482 L69.342,27.482 L69.342,22.295 L86.814,20.748 L86.814,60.333 C86.814,62.881 87.815,63.791 89.635,63.791 L94.64,63.791 L94.64,69.342 Z M98.917,46.137 C98.917,31.395 108.654,20.839 123.851,20.839 C131.222,20.839 140.686,24.661 140.686,33.397 C140.686,37.401 137.683,40.404 133.679,40.404 C130.221,40.404 127.4,38.129 127.4,34.58 C127.4,32.123 128.583,30.121 130.858,28.847 C129.311,26.936 125.489,26.936 123.214,26.936 C113.022,26.936 110.201,36.673 110.201,45.409 C110.201,54.145 113.204,63.336 123.487,63.336 C130.858,63.336 135.772,59.059 135.772,52.234 L142.233,52.234 C142.233,63.518 133.952,70.525 121.758,70.525 C107.289,70.525 98.917,60.06 98.917,46.137 Z M169.169,69.342 L144.872,69.342 L144.872,63.791 L149.786,63.791 C150.696,63.791 152.425,63.245 152.425,60.333 L152.425,9.1 C152.425,7.189 151.242,6.734 150.332,6.734 L144.235,6.734 L144.235,1.547 L162.253,5.68434189e-14 L162.253,44.499 C176.176,31.395 177.905,30.303 177.905,28.938 C177.905,28.574 177.45,27.846 176.176,27.846 L172.081,27.846 L172.081,22.477 L196.287,22.477 L196.287,27.846 L191.919,27.846 C189.462,27.846 188.37,28.756 187.915,29.211 L176.54,39.403 L193.193,61.425 C195.195,64.064 197.197,64.064 200.382,64.064 L200.382,69.342 L175.175,69.342 L175.175,63.791 L180.089,63.791 C180.817,63.791 181.727,63.245 181.727,62.517 C181.727,60.879 177.814,55.692 169.533,45.591 L162.253,52.234 L162.253,60.333 C162.253,62.881 163.254,63.791 164.983,63.791 L169.169,63.791 L169.169,69.342 Z",
                        id: "Kick",
                        fill: "#000000"
                    }), k.createElement("path", {
                        d: "M211.302,64.792 L208.39,70.07 L203.294,70.07 L203.294,45.955 L208.936,45.955 C211.757,56.966 216.671,64.61 228.865,64.61 C235.508,64.61 243.243,61.425 243.243,53.781 C243.243,50.141 241.15,47.229 237.601,46.137 L214.76,39.403 C206.388,36.855 202.839,29.211 202.839,23.387 C202.839,11.284 213.304,4.823 224.497,4.823 C231.14,4.823 236.782,6.825 241.787,11.193 L244.608,6.279 L249.704,6.279 L249.704,30.121 L243.88,30.121 C242.515,19.201 235.872,11.284 224.679,11.284 C218.582,11.284 212.576,13.923 212.576,20.93 C212.576,24.115 214.76,27.391 218.4,28.574 L242.06,35.945 C248.066,37.765 252.434,43.225 252.434,51.87 C252.434,65.338 241.969,71.435 229.593,71.435 C221.585,71.435 216.944,69.888 211.302,64.792 Z M274.274,22.477 L284.921,22.477 L284.921,27.664 L274.274,27.664 L274.274,59.969 C274.274,63.336 275.548,64.155 279.097,64.155 C281.19,64.155 283.101,63.882 286.104,63.245 L286.104,68.796 C281.372,69.979 278.915,70.525 274.365,70.525 C269.906,70.525 266.994,69.433 265.72,67.34 C264.81,65.884 264.446,64.064 264.446,59.514 L264.446,27.664 L256.438,27.664 L256.438,22.477 C265.811,22.386 267.54,16.471 267.54,3.913 L274.274,3.913 L274.274,22.477 Z M337.792,63.518 L337.792,69.16 C334.88,70.252 332.514,70.616 329.966,70.616 C324.051,70.616 322.049,67.158 321.685,62.062 C319.228,68.159 311.766,70.798 305.76,70.798 C297.934,70.798 291.837,66.612 291.837,58.24 C291.837,49.504 298.298,45.227 305.942,42.588 C311.038,40.859 315.77,39.767 321.23,39.039 L321.23,35.035 C321.23,28.665 316.225,26.481 311.22,26.481 C308.126,26.481 305.032,27.3 303.394,28.574 C305.305,29.575 306.215,31.031 306.215,33.033 C306.215,36.491 303.667,38.584 300.573,38.584 C296.387,38.584 294.294,35.854 294.294,31.941 C294.294,22.932 305.76,20.748 312.494,20.748 C320.502,20.748 330.785,23.387 330.785,33.033 L330.785,60.879 C330.785,63.518 331.24,64.701 333.606,64.701 C334.971,64.701 336.427,64.155 337.792,63.518 Z M301.847,56.511 C301.847,60.333 304.304,63.427 308.126,63.427 C315.406,63.427 321.23,58.24 321.23,50.869 L321.23,44.59 C318.591,44.59 301.847,47.502 301.847,56.511 Z M342.342,27.755 L342.342,22.568 L360.36,20.93 L360.36,28.392 L359.359,33.579 C362.817,27.482 366.366,20.93 375.102,20.93 C380.835,20.93 384.657,24.024 384.657,29.666 C384.657,33.852 382.473,36.582 378.105,36.582 C375.011,36.582 372.918,34.58 372.918,31.486 C372.918,29.575 374.01,27.755 375.193,26.481 C367.458,26.026 360.36,35.945 360.36,43.316 L360.36,60.333 C360.36,62.881 361.361,63.791 363.09,63.791 L371.462,63.791 L371.462,69.342 L342.888,69.342 L342.888,63.791 L347.893,63.791 C348.803,63.791 350.532,63.245 350.532,60.333 L350.532,30.121 C350.532,28.21 349.258,27.755 348.348,27.755 L342.342,27.755 Z M405.678,22.477 L416.325,22.477 L416.325,27.664 L405.678,27.664 L405.678,59.969 C405.678,63.336 406.952,64.155 410.501,64.155 C412.594,64.155 414.505,63.882 417.508,63.245 L417.508,68.796 C412.776,69.979 410.319,70.525 405.769,70.525 C401.31,70.525 398.398,69.433 397.124,67.34 C396.214,65.884 395.85,64.064 395.85,59.514 L395.85,27.664 L387.842,27.664 L387.842,22.477 C397.215,22.386 398.944,16.471 398.944,3.913 L405.678,3.913 L405.678,22.477 Z M422.149,27.755 L422.149,22.568 L440.167,20.93 L440.167,28.392 L439.166,33.579 C442.624,27.482 446.173,20.93 454.909,20.93 C460.642,20.93 464.464,24.024 464.464,29.666 C464.464,33.852 462.28,36.582 457.912,36.582 C454.818,36.582 452.725,34.58 452.725,31.486 C452.725,29.575 453.817,27.755 455,26.481 C447.265,26.026 440.167,35.945 440.167,43.316 L440.167,60.333 C440.167,62.881 441.168,63.791 442.897,63.791 L451.269,63.791 L451.269,69.342 L422.695,69.342 L422.695,63.791 L427.7,63.791 C428.61,63.791 430.339,63.245 430.339,60.333 L430.339,30.121 C430.339,28.21 429.065,27.755 428.155,27.755 L422.149,27.755 Z",
                        id: "Startr",
                        fill: "#50BC29"
                    })))))
                }, function() {
                    return k.createElement("svg", {
                        width: "100%",
                        height: "100%",
                        className: "valign-middle",
                        viewBox: "0 0 468 55",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, k.createElement("title", null, "old_Kickstarter_logo"), k.createElement("desc", null, "Created with Sketch."), k.createElement("g", {
                        id: "KSR10---Logo-Rotation",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd"
                    }, k.createElement("g", {
                        id: "spelunk",
                        transform: "translate(-1183.000000, -367.000000)",
                        fillRule: "nonzero"
                    }, k.createElement("g", {
                        id: "old_Kickstarter_logo",
                        transform: "translate(1183.000000, 367.000000)"
                    }, k.createElement("path", {
                        d: "M17.1,18.9 L26.7,4.9 C28.5,2.3 30.9,1 33.8,1 C36.2,1 38.2,1.8 39.9,3.5 C41.6,5.2 42.5,7.2 42.5,9.5 C42.5,11.2 42,12.7 41.1,14.1 L32.4,26.7 L43,40.2 C44.1,41.5 44.6,43.1 44.6,44.9 C44.6,47.3 43.8,49.3 42.1,51 C40.4,52.7 38.4,53.6 36,53.6 C33.4,53.6 31.4,52.8 30,51.1 L17,34.9 L17,43.9 C17,46.5 16.6,48.4 15.7,49.9 C14.1,52.5 11.7,53.8 8.6,53.8 C5.8,53.8 3.6,52.9 2.1,51 C0.7,49 0,46.7 0,43.8 L0,10.6 C0,7.9 0.7,5.6 2.2,3.8 C3.7,2 5.9,1 8.6,1 C11.2,1 13.3,2 15,3.8 C16,4.8 16.6,5.9 16.8,6.9 C17,7.6 17,8.8 17,10.6 L17,18.9 L17.1,18.9 Z M64.9,11.6 L64.9,43.7 C64.9,46.5 64.2,48.8 62.7,50.6 C61.2,52.6 59,53.6 56.3,53.6 C53.8,53.6 51.7,52.7 50,50.8 C48.6,49.3 47.8,46.9 47.8,43.7 L47.8,11.6 C47.8,8 48.5,5.4 50,3.8 C51.7,1.9 53.8,1 56.4,1 C59,1 61.1,1.9 62.7,3.7 C64.2,5.4 64.9,8 64.9,11.6 Z M95.7,0 C102,0 107.8,2.1 113.1,6.3 C117.2,9.6 119.3,13.1 119.3,16.7 C119.3,19.7 118,22.1 115.5,23.8 C114.1,24.8 112.5,25.2 110.8,25.2 C109.4,25.2 108.1,24.9 106.8,24.2 C106.3,23.9 105,22.6 102.9,20.4 C101,18.3 98.5,17.2 95.6,17.2 C92.8,17.2 90.4,18.2 88.5,20.1 C86.6,22.1 85.6,24.5 85.6,27.3 C85.6,30.1 86.6,32.5 88.5,34.5 C90.4,36.5 92.8,37.4 95.6,37.4 C97.9,37.4 100.1,36.6 102.1,35 C103.3,33.8 104.6,32.6 105.8,31.4 C107.1,30.3 108.8,29.7 110.8,29.7 C113.1,29.7 115.1,30.5 116.9,32.1 C118.6,33.7 119.5,35.7 119.5,38 C119.5,41.2 117.6,44.4 113.9,47.6 C108.7,52.2 102.7,54.4 95.8,54.4 C91.6,54.4 87.6,53.5 83.8,51.7 C79.1,49.4 75.3,46.1 72.5,41.7 C69.7,37.3 68.3,32.5 68.3,27.2 C68.3,19.4 71.2,12.7 77,7.2 C82.1,2.5 88.3,0.1 95.7,0 Z M139.5,18.9 L149.1,4.9 C150.9,2.3 153.3,1 156.2,1 C158.6,1 160.6,1.8 162.3,3.5 C164,5.2 164.9,7.2 164.9,9.5 C164.9,11.2 164.4,12.7 163.5,14.1 L154.8,26.7 L165.4,40.2 C166.5,41.5 167,43.1 167,44.9 C167,47.3 166.2,49.3 164.5,51 C162.8,52.7 160.8,53.6 158.4,53.6 C155.8,53.6 153.8,52.8 152.4,51.1 L139.4,34.9 L139.4,43.9 C139.4,46.5 139,48.4 138.1,49.9 C136.5,52.5 134.1,53.8 131,53.8 C128.2,53.8 126,52.9 124.5,51 C123.1,49.3 122.3,46.9 122.3,44.1 L122.3,10.6 C122.3,7.9 123,5.6 124.5,3.8 C126.2,2 128.3,1 131,1 C133.6,1 135.7,1.9 137.5,3.8 C138.5,4.8 139.1,5.9 139.3,6.9 C139.5,7.6 139.5,8.8 139.5,10.6 L139.5,18.9 Z",
                        id: "Grey",
                        fill: "#0F2105"
                    }), k.createElement("path", {
                        d: "M177.7,33.6 C179.6,33.6 181.6,34.4 183.8,36.1 C186.5,38.2 188.3,39.2 189.3,39.2 C190.8,39.2 191.5,38.4 191.5,36.9 C191.5,36.1 191.1,35.4 190.2,34.8 C189.7,34.5 187.2,33.5 182.5,31.9 C174.9,29.2 171.1,24.3 171.1,17 C171.1,11.5 173.1,7.2 177.1,4.1 C180.7,1.4 185,0 190.2,0 C194.7,0 198.6,1.1 201.9,3.2 C205.2,5.3 206.9,8.1 206.9,11.5 C206.9,13.5 206.3,15.2 205,16.6 C203.7,18 202.1,18.6 200.1,18.6 C198,18.6 195.7,17.6 193.1,15.6 C191.5,14.4 190.3,13.7 189.5,13.7 C188.1,13.7 187.4,14.4 187.4,15.7 C187.4,17 189.1,18.2 192.6,19.2 C197.4,20.7 201,22.5 203.6,24.7 C207.1,27.6 208.8,31.6 208.8,36.8 C208.8,42.5 206.9,46.9 203,50.1 C199.4,53.1 194.7,54.5 188.9,54.5 C183.1,54.5 178.3,53 174.5,49.9 C171.5,47.4 169.9,44.6 169.9,41.3 C169.9,39.1 170.6,37.3 172.1,35.8 C173.7,34.4 175.5,33.6 177.7,33.6 Z M223.4,17.3 L218.9,17.3 C216.4,17.3 214.3,16.6 212.7,15.3 C211,13.8 210.1,11.9 210.1,9.4 C210.1,7.9 210.5,6.5 211.3,5.2 C212.1,3.8 213.2,2.9 214.5,2.3 C215.8,1.7 218.9,1.4 223.8,1.4 L241,1.4 C245.2,1.4 248,1.7 249.2,2.2 C250.6,2.8 251.7,3.7 252.5,5.1 C253.3,6.5 253.8,7.9 253.8,9.4 C253.8,11.8 252.9,13.8 251,15.5 C249.7,16.7 247.5,17.4 244.4,17.4 L240.5,17.4 L240.5,43.2 C240.5,46 240,48.2 239.1,49.7 C237.5,52.3 235.1,53.6 232.1,53.6 C229,53.6 226.7,52.4 225,50.1 C224,48.6 223.4,46.4 223.4,43.4 L223.4,17.3 Z M264.9,46.5 C264.1,48.4 263.3,49.9 262.4,50.8 C260.7,52.7 258.6,53.6 256.1,53.6 C253.1,53.6 250.7,52.4 249.1,50 C248.1,48.6 247.6,46.9 247.6,45.1 C247.6,43.6 248,42.1 248.7,40.6 L264.9,6.1 C266.5,2.7 269.1,1.1 272.8,1.1 C276.5,1.1 279.2,2.8 280.8,6.3 L297.2,41 C297.9,42.4 298.2,43.8 298.2,45.1 C298.2,47.1 297.5,48.9 296.2,50.5 C294.5,52.6 292.3,53.6 289.6,53.6 C287.4,53.6 285.6,52.9 284.1,51.6 C283,50.6 281.9,48.9 280.8,46.6 L264.9,46.6 L264.9,46.5 Z M335.9,33.2 L339.9,39.7 C341,41.5 341.6,43.3 341.6,45.2 C341.6,47.6 340.8,49.6 339.1,51.2 C337.4,52.8 335.4,53.6 333,53.6 C329.9,53.6 327.6,52.3 326,49.7 L318.9,38 L318.9,45 C318.9,47.4 318.1,49.4 316.5,51.1 C314.9,52.8 312.9,53.6 310.5,53.6 C307.6,53.6 305.3,52.6 303.8,50.4 C302.4,48.6 301.8,46.1 301.8,43.1 L301.8,11.2 C301.8,4.6 305.3,1.4 312.4,1.4 L323.3,1.4 C326.9,1.4 330.2,2.4 333.2,4.5 C336.3,6.6 338.5,9.2 339.9,12.5 C341,15 341.5,17.5 341.5,20 C341.5,24.7 339.6,29.1 335.9,33.2 Z M356.2,17.3 L351.7,17.3 C349.2,17.3 347.1,16.6 345.5,15.3 C343.8,13.8 342.9,11.9 342.9,9.4 C342.9,7.9 343.3,6.5 344.1,5.2 C344.9,3.8 346,2.9 347.3,2.3 C348.6,1.7 351.7,1.4 356.6,1.4 L373.8,1.4 C378,1.4 380.8,1.7 382,2.2 C383.4,2.8 384.5,3.7 385.3,5.1 C386.1,6.5 386.6,7.9 386.6,9.4 C386.6,11.8 385.7,13.8 383.8,15.5 C382.5,16.7 380.3,17.4 377.2,17.4 L373.3,17.4 L373.3,43.2 C373.3,46 372.8,48.2 371.9,49.7 C370.3,52.3 367.9,53.6 364.9,53.6 C361.8,53.6 359.5,52.4 357.8,50.1 C356.8,48.6 356.2,46.4 356.2,43.4 L356.2,17.3 L356.2,17.3 Z M406.8,37.2 L414.6,37.2 C417.8,37.2 420.2,37.9 421.8,39.2 C423.6,40.8 424.6,42.8 424.6,45.3 C424.6,47.8 423.7,49.9 421.8,51.4 C420.4,52.6 418,53.2 414.7,53.2 L401.4,53.2 C398.3,53.2 396.1,53 394.9,52.5 C392.6,51.6 391.1,50 390.4,47.9 C389.9,46.5 389.7,44.3 389.7,41.2 L389.7,13 C389.7,10.6 389.8,9.1 389.9,8.3 C390.2,6.7 390.8,5.3 391.9,4.1 C393.1,2.8 394.7,2 396.5,1.6 C397.4,1.4 399.2,1.4 401.9,1.4 L412.1,1.4 C414.9,1.4 416.5,1.4 417,1.5 C418.8,1.7 420.3,2.2 421.5,3.1 C423.6,4.7 424.6,6.7 424.6,9.2 C424.6,11.9 423.7,14 421.9,15.5 C420.3,16.8 418.1,17.4 415.3,17.4 L406.9,17.4 L406.9,20.9 L413.6,20.9 C415.6,20.9 417.2,21.4 418.5,22.5 C419.9,23.6 420.5,25.1 420.5,27.1 C420.5,31.2 418,33.3 413,33.3 L406.9,33.3 L406.9,37.2 L406.8,37.2 Z M461.7,33.2 L465.7,39.7 C466.8,41.5 467.4,43.3 467.4,45.2 C467.4,47.6 466.6,49.6 464.9,51.2 C463.2,52.8 461.2,53.6 458.8,53.6 C455.7,53.6 453.4,52.3 451.8,49.7 L444.7,38 L444.7,45 C444.7,47.4 443.9,49.4 442.3,51.1 C440.7,52.8 438.7,53.6 436.3,53.6 C433.4,53.6 431.1,52.6 429.6,50.4 C428.2,48.6 427.6,46.1 427.6,43.1 L427.6,11.2 C427.6,4.6 431.1,1.4 438.2,1.4 L449.1,1.4 C452.7,1.4 456,2.4 459,4.5 C462.1,6.6 464.3,9.2 465.7,12.5 C466.8,15 467.3,17.5 467.3,20 C467.3,24.7 465.4,29.1 461.7,33.2 Z",
                        id: "Green",
                        fill: "#2BDE73"
                    })))))
                }],
                ne = function(e) {
                    function t(e) {
                        var n;
                        return Object(V.a)(this, t), (n = Object(Z.a)(this, Object($.a)(t).call(this, e))).state = {
                            logoIndex: 0,
                            logoClicks: 0
                        }, n.handleLogoClick = n.handleLogoClick.bind(Object(X.a)(n)), n.fireworks = n.fireworks.bind(Object(X.a)(n)), n
                    }
                    return Object(J.a)(t, e), Object(W.a)(t, [{
                        key: "handleLogoClick",
                        value: function() {
                            var e = this.state.logoIndex + 1 >= te.length ? 0 : this.state.logoIndex + 1;
                            this.setState({
                                logoIndex: e,
                                logoClicks: this.state.logoClicks + 1
                            }), Object(ee.a)({
                                angle: 270,
                                spread: 200,
                                startVelocity: 15,
                                origin: {
                                    y: .02
                                },
                                colors: ["#05ce78", "#f97b62", "#00007d", "#fcd222", "#FEE3D6"]
                            }), this.state.logoClicks >= 9 && (this.fireworks(), this.setState({
                                logoClicks: 0
                            }))
                        }
                    }, {
                        key: "fireworks",
                        value: function() {
                            var e = Date.now() + 5e3,
                                t = setInterval(function() {
                                    if (Date.now() > e) return clearInterval(t);
                                    Object(ee.a)({
                                        startVelocity: 15,
                                        spread: 360,
                                        ticks: 60,
                                        origin: {
                                            x: Math.random(),
                                            y: Math.random() - .2
                                        },
                                        colors: ["#05ce78", "#f97b62", "#00007d", "#fcd222", "#FEE3D6"]
                                    })
                                }, 200)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.logoIndex;
                            return j.a.createElement("section", {
                                className: "section_global_nav_logo flex items-center justify-center order-2 py4 py2-md grow-5 grow-0-md w100p w-auto-md item-full-width h7-md h5 border-bottom border-none-md"
                            }, j.a.createElement("div", {
                                onClick: this.handleLogoClick,
                                className: "keyboard-focusable mb0 w30"
                            }, te[e]()))
                        }
                    }]), t
                }(k.Component),
                re = Object(x.b)("/"),
                ae = Object(Q.a)(["section_global-nav", "js-site-nav-container", "bg-white", "flex", "flex-wrap", "flex-nowrap-md", "border-bottom", "border-grey-400", "justify-between", "w100p"]),
                oe = Object(x.c)({
                    ref: "nav"
                }),
                ie = function(e) {
                    var t = e.avatar,
                        n = e.name,
                        r = window.location.pathname + window.location.search,
                        a = Object(x.b)("/logout", {
                            then: r
                        });
                    return j.a.createElement("div", {
                        className: "flex items-center"
                    }, j.a.createElement(N.a, {
                        size: 6,
                        atoms: ["ml2", "mr1", "bg-grey-100"],
                        imageUrl: t
                    }), j.a.createElement("span", {
                        className: "mr1"
                    }, n), j.a.createElement("a", {
                        href: a,
                        className: "keyboard-focusable ksr-green-700 hover-soft-black"
                    }, Object(L.c)("nav_bar.Not_you")))
                },
                ce = function(e) {
                    var t = e.avatar,
                        n = e.isGhosting,
                        r = e.isRegistered,
                        a = e.toggleUserMenu,
                        o = e.unreadNotifications,
                        i = e.fetchUserMenu,
                        c = {
                            backgroundImage: "url(".concat("https://d3mlfyygrfdi2i.cloudfront.net/pinky.gif", ")")
                        },
                        s = ["ml2", o ? "border-medium" : "bg-grey-100"],
                        l = o ? "ksr-green-700" : "";
                    return j.a.createElement("button", {
                        disabled: !r,
                        className: Q.a.apply(void 0, ["flex", "items-center", "keyboard-focusable", "js-user-menu-btn", "ml2", "relative"].concat([n && "px1 bg20p"])),
                        onMouseEnter: i,
                        onClick: a,
                        style: n ? c : {}
                    }, o ? j.a.createElement("span", {
                        className: "circle bg-ksr-green-700 inline-block h2 w2 ml2 b5 absolute"
                    }) : null, j.a.createElement(N.a, {
                        size: 6,
                        atoms: s,
                        imageUrl: t,
                        borderColor: l
                    }))
                },
                se = function(e) {
                    var t = e.state,
                        n = e.toggleUserMenu,
                        r = e.fetchUserMenu,
                        a = t.accessTokenAuth,
                        o = t.avatar,
                        i = t.isGhosting,
                        c = t.isRegistered,
                        s = t.name,
                        l = t.unreadNotifications;
                    return a && c ? j.a.createElement(ie, {
                        avatar: o,
                        name: s
                    }) : j.a.createElement(ce, {
                        avatar: o,
                        isGhosting: i,
                        isRegistered: c,
                        toggleUserMenu: n,
                        fetchUserMenu: r,
                        unreadNotifications: l
                    })
                },
                le = function() {
                    return j.a.createElement("a", {
                        href: oe("/login"),
                        className: "soft-black hover-ksr-green-700 ml3"
                    }, Object(L.c)("nav_bar.Sign_in"))
                },
                ue = function() {
                    return j.a.createElement("a", {
                        className: "keyboard-focusable mb0 w30",
                        href: oe(re)
                    }, j.a.createElement(G.a, {
                        color: "ksr-green-800"
                    }))
                },
                de = function() {
                    return j.a.createElement("section", {
                        className: ae
                    }, j.a.createElement("div", {
                        className: "w100p py4 py2-md h7-md h5 flex items-center justify-center"
                    }, j.a.createElement(ue, null)))
                },
                me = function(e) {
                    var t = e.state,
                        n = e.children,
                        r = e.openDiscoveryOverlay,
                        a = e.openSearch,
                        o = e.startProjectPath,
                        i = e.toggleUserMenu,
                        c = e.fetchUserMenu,
                        s = e.onHomepage;
                    return j.a.createElement("section", {
                        className: ae
                    }, n, j.a.createElement("section", {
                        className: "section_global_nav_logo flex items-center justify-center order-2 py4 py2-md grow-5 grow-0-md w100p w-auto-md item-full-width h7-md h5 border-bottom border-none-md"
                    }, s && Object(O.a)("ksr10_logo") ? j.a.createElement(ne, null) : j.a.createElement(ue, null)), j.a.createElement("section", {
                        className: "section_global-nav-left order-2 order-1-md flex grow-1-md pl3 pl4-md py2 basis50p-md"
                    }, j.a.createElement("button", {
                        className: "mr2 flex items-center type-14 keyboard-focusable soft-black hover-ksr-green-700 bg-white",
                        onClick: r
                    }, j.a.createElement(E.a, {
                        emoji: "✈️",
                        customEmojiClasses: "type-21",
                        showEmojiPlusText: !1
                    }, Object(L.c)("nav_bar.Explore"))), j.a.createElement("a", {
                        href: oe(o),
                        className: "hide pr3 mr2 flex-sm items-center keyboard-focusable soft-black hover-ksr-green-700"
                    }, j.a.createElement(E.a, {
                        emoji: "🏁",
                        customEmojiClasses: "type-21",
                        showEmojiPlusText: !1
                    }, Object(L.c)("nav_bar.Start_a_project"))), j.a.createElement("a", {
                        href: oe(o),
                        className: "hide-sm mr2 flex items-center keyboard-focusable soft-black hover-ksr-green-700"
                    }, j.a.createElement(E.a, {
                        emoji: "🏁",
                        customEmojiClasses: "type-21",
                        showEmojiPlusText: !1
                    }, Object(L.c)("nav_bar.Start")))), j.a.createElement("section", {
                        className: "section_global-nav-right justify-end order-3 flex grow-1-md pr3 pr4-sm items-center py2 basis50p-md"
                    }, j.a.createElement("button", {
                        className: "p0 flex items-center type-14 keyboard-focusable hover-ksr-green-700 fill-soft-black hover-fill-ksr-green-700 bg-white",
                        onClick: a
                    }, j.a.createElement("span", {
                        className: "display-none block-sm"
                    }, j.a.createElement(E.a, {
                        emoji: "🔍",
                        customEmojiClasses: "type-21",
                        showEmojiPlusText: !1
                    }, Object(L.c)("nav_bar.Search"))), Object(B.a)() ? null : j.a.createElement(N.f, {
                        name: "icon--search",
                        size: "medium",
                        atoms: "ml1"
                    })), t.loggedIn ? j.a.createElement(se, {
                        state: t,
                        toggleUserMenu: i,
                        fetchUserMenu: c
                    }) : j.a.createElement(le, null)))
                },
                fe = function(e) {
                    var t = e.minimal,
                        n = Object(K.a)(e, ["minimal"]);
                    return t ? j.a.createElement(de, null) : j.a.createElement(me, n)
                },
                pe = n("xIVL"),
                he = n("i8i4"),
                ge = n.n(he),
                be = n("wx14"),
                ve = Object(x.c)({
                    ref: "user_menu"
                }),
                Ce = function() {
                    return j.a.createElement("div", {
                        className: "p10"
                    }, j.a.createElement(N.f, {
                        name: "icon--circle-loader",
                        size: "large"
                    }))
                },
                ye = function(e) {
                    var t = e.activeProjects,
                        n = e.canCurate,
                        r = e.closeOverlay,
                        a = e.curatedPages,
                        o = e.hasUnseenActivity,
                        i = e.isSocializing,
                        c = e.organizations,
                        s = e.hasUnreadMessages,
                        l = e.url;
                    return j.a.createElement("div", null, j.a.createElement("div", {
                        className: "type-12 py3 px6 text-uppercase bold"
                    }, Object(L.c)("global.user_menu.My_stuff")), j.a.createElement("ul", {
                        className: "pt0 p6"
                    }, j.a.createElement("li", null, j.a.createElement(N.g, {
                        color: "soft-black",
                        atoms: ["user-menu-focus-guard"],
                        href: ve("/profile/following/find_creators"),
                        onClick: r
                    }, Object(L.c)("global.user_menu.Follow_creators"))), j.a.createElement("li", null, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve(i ? "/profile/following/find" : "/profile/following/welcome"),
                        onClick: r
                    }, Object(L.c)("global.user_menu.Follow_fb_friends"))), j.a.createElement("li", null, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve("/recommendations"),
                        onClick: r
                    }, Object(L.c)("global.user_menu.Your_recommendations"))), j.a.createElement("li", null, s && j.a.createElement("span", {
                        className: "circle bg-ksr-green-700 inline-block h2 w2 mr1"
                    }), j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve("/messages"),
                        atoms: [s && "bold"],
                        onClick: r
                    }, Object(L.c)("global.user_menu.Messages"))), j.a.createElement("li", null, o && j.a.createElement("span", {
                        className: "circle bg-ksr-green-700 inline-block h2 w2 mr1"
                    }), j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve("/activity"),
                        atoms: [o && "bold"],
                        onClick: r
                    }, Object(L.c)("global.user_menu.Activity"))), j.a.createElement("li", null, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve(l),
                        onClick: r
                    }, Object(L.c)("global.user_menu.Profile"))), j.a.createElement("li", null, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve("/profile/backings"),
                        onClick: r
                    }, Object(L.c)("global.user_menu.Backed_projects"))), !!t.totalCount && j.a.createElement("li", null, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve("/profile/projects"),
                        onClick: r
                    }, Object(L.c)("global.user_menu.My_projects"))), j.a.createElement("li", null, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve("/profile/starred"),
                        onClick: r
                    }, Object(L.c)("global.user_menu.Saved_projects")))), !!c.totalCount && j.a.createElement("div", null, j.a.createElement("div", {
                        className: "type-12 py3 px6 text-uppercase bold"
                    }, Object(L.c)("global.user_menu.Organization")), j.a.createElement("ul", {
                        className: "pt0 p6"
                    }, c.nodes.map(function(e) {
                        return j.a.createElement("li", {
                            key: e.slug
                        }, j.a.createElement(N.g, {
                            color: "soft-black",
                            href: ve("/organizations/".concat(e.slug)),
                            onClick: r
                        }, e.name))
                    }))), !!a.totalCount && j.a.createElement("div", null, j.a.createElement("div", {
                        className: "type-12 py3 px6 text-uppercase bold"
                    }, Object(L.c)("global.user_menu.Curated_pages")), j.a.createElement("ul", {
                        className: "pt0 p6"
                    }, a.nodes.map(function(e) {
                        return j.a.createElement("li", {
                            key: e.id
                        }, j.a.createElement(N.g, {
                            color: "soft-black",
                            href: ve("/pages/".concat(Object(m.a)(e.id))),
                            onClick: r
                        }, e.title))
                    }))), !a.totalCount && n && j.a.createElement("div", null, j.a.createElement("div", {
                        className: "type-12 py3 px6 text-uppercase bold"
                    }, Object(L.c)("global.user_menu.Curated_pages")), j.a.createElement("ul", {
                        className: "pt0 p6"
                    }, j.a.createElement("li", null, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve("/pages"),
                        onClick: r
                    }, Object(L.c)("global.user_menu.Create_your_page"))))))
                },
                _e = function(e) {
                    var t = e.backedProjects,
                        n = e.closeOverlay;
                    return t && j.a.createElement("div", null, j.a.createElement("div", {
                        className: "type-12 text-uppercase py3 px6 bold"
                    }, Object(L.c)("global.user_menu.Backed_projects")), j.a.createElement("ul", {
                        className: "pt0 p6 w45"
                    }, t.nodes && [].concat(t.nodes).map(function(e) {
                        return j.a.createElement(Ee, Object(be.a)({
                            key: e.pid
                        }, e, {
                            closeOverlay: n
                        }))
                    }), t.totalCount > 5 && j.a.createElement("li", {
                        className: "pt4"
                    }, j.a.createElement(N.g, {
                        color: "soft-black text-underline",
                        href: ve("/profile/backings"),
                        onClick: n
                    }, Object(L.c)("global.user_menu.View_all")))))
                },
                Ee = function(e) {
                    var t = e.url,
                        n = e.image,
                        r = e.closeOverlay,
                        a = e.name,
                        o = void 0 === a ? Object(L.c)("global.user_menu.Untitled") : a;
                    return j.a.createElement("li", null, j.a.createElement("div", {
                        className: "flex mb2 items-center"
                    }, j.a.createElement("div", {
                        className: "basis20p mr2"
                    }, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve(t),
                        onClick: r
                    }, j.a.createElement("img", {
                        src: n && n.url,
                        alt: Object(L.c)("global.user_menu.Project"),
                        className: "w100p block"
                    }))), j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve(t),
                        atoms: ["text-truncate basis80p"],
                        onClick: r
                    }, o)))
                },
                we = function(e) {
                    var t = e.invitedProjects,
                        n = e.activeProjects,
                        r = e.closeOverlay;
                    return j.a.createElement("div", null, !!t.totalCount && j.a.createElement("div", null, j.a.createElement("div", {
                        className: "type-12 text-uppercase py3 px6 bold"
                    }, Object(L.c)("global.user_menu.Project_invitations")), j.a.createElement("ul", {
                        className: "pt0 p6 w45"
                    }, t.nodes.map(function(e) {
                        return j.a.createElement("li", {
                            key: e.pid
                        }, j.a.createElement("div", {
                            className: "flex mb2 items-center"
                        }, j.a.createElement("div", {
                            className: "basis20p mr2"
                        }, j.a.createElement(N.g, {
                            color: "soft-black",
                            href: ve("".concat(e.url, "/invitation")),
                            onClick: r
                        }, j.a.createElement("img", {
                            src: e.image && e.image.url,
                            alt: Object(L.c)("global.user_menu.Project"),
                            className: "w100p block"
                        }))), j.a.createElement(N.g, {
                            color: "soft-black",
                            href: ve("".concat(e.url, "/invitation")),
                            atoms: ["text-truncate basis80p"],
                            onClick: r
                        }, e.name || Object(L.c)("global.user_menu.Untitled"))))
                    }), t.totalCount > 1 && j.a.createElement("li", {
                        className: "pt4"
                    }, j.a.createElement(N.g, {
                        color: "soft-black text-underline",
                        href: ve("/profile/projects"),
                        onClick: r
                    }, Object(L.c)("global.user_menu.View_all"))))), !!n.totalCount && j.a.createElement("div", null, j.a.createElement("div", {
                        className: "type-12 text-uppercase py3 px6 bold"
                    }, Object(L.c)("global.user_menu.My_projects")), j.a.createElement("ul", {
                        className: "pt0 p6 w45"
                    }, [].concat(n.nodes).reverse().map(function(e) {
                        return j.a.createElement("li", {
                            key: e.pid
                        }, j.a.createElement("div", {
                            className: "flex mb2 items-center"
                        }, j.a.createElement("div", {
                            className: "basis20p mr2"
                        }, j.a.createElement(N.g, {
                            color: "soft-black",
                            href: ve(e.url),
                            onClick: r
                        }, j.a.createElement("img", {
                            src: e.imageUrl,
                            alt: Object(L.c)("global.user_menu.Project"),
                            className: "w100p block"
                        }))), j.a.createElement(N.g, {
                            color: "soft-black",
                            href: ve(e.url),
                            atoms: ["text-truncate basis80p"],
                            onClick: r
                        }, e.name || Object(L.c)("global.user_menu.Untitled"))))
                    }), n.totalCount > 5 && j.a.createElement("li", {
                        className: "pt4"
                    }, j.a.createElement(N.g, {
                        color: "soft-black text-underline",
                        href: ve("/profile/projects"),
                        onClick: r
                    }, Object(L.c)("global.user_menu.View_all"))))))
                },
                ke = function(e) {
                    var t = e.isKsrAdmin,
                        n = e.isSecureLoggedInAdmin,
                        r = e.closeOverlay;
                    return j.a.createElement("div", {
                        className: "flex border-top mt4 py4 px6 justify-between"
                    }, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve("/logout"),
                        onClick: r
                    }, Object(L.c)("global.user_menu.Log_out")), t && j.a.createElement("div", null, !n && j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve("/admin/login"),
                        onClick: r
                    }, Object(L.c)("global.user_menu.Log_in_as_admin")), n && j.a.createElement("div", null, j.a.createElement(N.g, {
                        atoms: ["mr4"],
                        color: "soft-black",
                        href: ve("/admin/password/new"),
                        onClick: r
                    }, Object(L.c)("global.user_menu.Change_admin_password")), j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve("/admin/logout"),
                        onClick: r
                    }, Object(L.c)("global.user_menu.Log_out_of_admin")))))
                },
                je = function(e) {
                    var t = e.closeOverlay;
                    return j.a.createElement("div", null, j.a.createElement("div", {
                        className: "type-12 text-uppercase py3 px6 bold"
                    }, Object(L.c)("global.user_menu.Settings")), j.a.createElement("ul", {
                        className: "pt0 p6"
                    }, j.a.createElement("li", null, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve("/settings/account"),
                        onClick: t
                    }, Object(L.c)("global.user_menu.Account"))), j.a.createElement("li", null, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve("/settings/profile"),
                        onClick: t
                    }, Object(L.c)("global.user_menu.Edit_profile"))), j.a.createElement("li", null, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: ve("/settings/notifications"),
                        onClick: t
                    }, Object(L.c)("global.user_menu.Notifications")))))
                },
                Oe = function(e) {
                    var t = e.state,
                        n = e.isSecureLoggedInAdmin,
                        r = e.dispatch,
                        a = t.activeProjects,
                        o = t.backedProjects,
                        i = t.canCurate,
                        c = t.curatedPages,
                        s = t.invitedProjects,
                        l = t.isKsrAdmin,
                        u = t.isSocializing,
                        d = t.hasUnseenActivity,
                        m = t.hasUnreadMessages,
                        f = t.name,
                        p = t.organizations,
                        h = t.url,
                        g = function() {
                            return r({
                                type: "CLOSE_USER_MENU"
                            })
                        };
                    return j.a.createElement("div", null, j.a.createElement("header", {
                        className: "pt5 pb3 px6 bold type-18"
                    }, f), j.a.createElement("div", {
                        className: "flex-lg"
                    }, j.a.createElement(ye, {
                        activeProjects: a,
                        canCurate: i,
                        closeOverlay: g,
                        curatedPages: c,
                        hasUnseenActivity: d,
                        isSocializing: u,
                        organizations: p,
                        hasUnreadMessages: m,
                        url: h
                    }), j.a.createElement(je, {
                        closeOverlay: g
                    }), !!o.totalCount && j.a.createElement(_e, {
                        backedProjects: o,
                        closeOverlay: g
                    }), (!!s.totalCount || !!a.totalCount) && j.a.createElement(we, {
                        activeProjects: a,
                        invitedProjects: s,
                        closeOverlay: g
                    })), j.a.createElement(ke, {
                        isKsrAdmin: l,
                        isSecureLoggedInAdmin: n,
                        name: f,
                        closeOverlay: g
                    }))
                },
                xe = Object(x.c)({
                    ref: "user_menu"
                }),
                Le = function(e) {
                    var t = e.closeOverlay,
                        n = e.hasUnseenActivity,
                        r = e.hasUnreadMessages,
                        a = e.hasUnseenSavedProjectsActivity,
                        o = e.url,
                        i = {
                            height: "8px",
                            width: "8px"
                        };
                    return j.a.createElement("div", {
                        className: "pl2"
                    }, j.a.createElement("div", {
                        className: "type-12 pt4 pb6 px6 text-uppercase bold"
                    }, Object(L.c)("global.user_menu.Your_account")), j.a.createElement("ul", {
                        className: "pt0 pr6 pb6 pl4"
                    }, j.a.createElement("li", {
                        className: "block display-none-sm p2_3 p0-sm"
                    }, j.a.createElement("span", {
                        className: "circle inline-block mr1",
                        style: i
                    }), j.a.createElement(N.g, {
                        color: "soft-black",
                        atoms: ["hover-text-underline", "hover-cobalt-500", "lh4"],
                        href: xe("/profile/backings"),
                        onClick: t
                    }, Object(L.c)("global.user_menu.Backed_projects"))), j.a.createElement("li", {
                        className: "block display-none-sm p2_3 p0-sm"
                    }, j.a.createElement("span", {
                        className: "circle inline-block mr1",
                        style: i
                    }), j.a.createElement(N.g, {
                        color: "soft-black",
                        atoms: ["hover-text-underline", "hover-cobalt-500", "lh4"],
                        href: xe("/profile/backings"),
                        onClick: t
                    }, Object(L.c)("global.user_menu.Created_projects"))), j.a.createElement("li", {
                        className: "p2_3 p0-sm"
                    }, j.a.createElement("span", {
                        className: "circle ".concat(a && Object(O.a)("saved_projects_activity_indicator") && "bg-cobalt-500", " inline-block mr1"),
                        style: i
                    }), j.a.createElement(N.g, {
                        color: a && Object(O.a)("saved_projects_activity_indicator") ? "cobalt-500" : "soft-black",
                        href: xe("/profile/starred"),
                        onClick: t,
                        atoms: ["hover-text-underline", "hover-cobalt-500", "lh4"],
                        hover: !1
                    }, Object(L.c)("global.user_menu.Saved_projects"))), j.a.createElement("li", {
                        className: "p2_3 p0-sm"
                    }, j.a.createElement("span", {
                        className: "circle inline-block mr1",
                        style: i
                    }), j.a.createElement(N.g, {
                        color: "soft-black",
                        href: xe("/recommendations"),
                        onClick: t,
                        atoms: ["hover-text-underline", "hover-cobalt-500", "lh4"],
                        hover: !1
                    }, Object(L.c)("global.user_menu.Recommended_for_you"))), j.a.createElement("li", {
                        className: "p2_3 p0-sm"
                    }, j.a.createElement("span", {
                        className: "circle inline-block mr1",
                        style: i
                    }), j.a.createElement(N.g, {
                        color: "soft-black",
                        atoms: ["user-menu-focus-guard", "hover-text-underline", "hover-cobalt-500", "lh4"],
                        href: xe("/profile/following"),
                        onClick: t,
                        hover: !1
                    }, Object(L.c)("global.user_menu.Following")))), j.a.createElement("ul", {
                        className: "pt0 pr6 pb6 pl4"
                    }, j.a.createElement("li", {
                        className: "p2_3 p0-sm"
                    }, j.a.createElement("span", {
                        className: "circle inline-block mr1",
                        style: i
                    }), j.a.createElement(N.g, {
                        color: "soft-black",
                        href: xe(o),
                        onClick: t,
                        atoms: ["hover-text-underline", "hover-cobalt-500", "lh4"],
                        hover: !1
                    }, Object(L.c)("global.user_menu.Profile"))), j.a.createElement("li", {
                        className: "p2_3 p0-sm"
                    }, j.a.createElement("span", {
                        className: "circle inline-block mr1",
                        style: i
                    }), j.a.createElement(N.g, {
                        color: "soft-black",
                        href: xe("/settings/account"),
                        onClick: t,
                        atoms: ["hover-text-underline", "hover-cobalt-500", "lh4"],
                        hover: !1
                    }, Object(L.c)("global.user_menu.Settings"))), j.a.createElement("li", {
                        className: "p2_3 p0-sm"
                    }, j.a.createElement("span", {
                        className: "circle ".concat(r && "bg-cobalt-500", " inline-block mr1"),
                        style: i
                    }), j.a.createElement(N.g, {
                        color: r ? "cobalt-500" : "soft-black",
                        href: xe("/messages"),
                        atoms: ["hover-text-underline", "hover-cobalt-500", "lh4"],
                        onClick: t,
                        hover: !1
                    }, Object(L.c)("global.user_menu.Messages"))), j.a.createElement("li", {
                        className: "p2_3 p0-sm"
                    }, j.a.createElement("span", {
                        className: "circle ".concat(n && "bg-cobalt-500", " inline-block mr1"),
                        style: i
                    }), j.a.createElement(N.g, {
                        color: n ? "cobalt-500" : "soft-black",
                        href: xe("/activity"),
                        atoms: ["hover-text-underline", "hover-cobalt-500", "lh4"],
                        onClick: t,
                        hover: !1
                    }, Object(L.c)("global.user_menu.Activity")))))
                },
                Ne = function(e) {
                    var t = e.backedProjects,
                        n = e.closeOverlay;
                    return t && j.a.createElement("div", {
                        className: "display-none block-sm"
                    }, j.a.createElement("div", {
                        className: "type-12 text-uppercase pt4 pb6 px6 bold"
                    }, Object(L.c)("global.user_menu.Backed_projects")), j.a.createElement("ul", {
                        className: "pt0 p6 w45"
                    }, t.nodes && [].concat(t.nodes).map(function(e) {
                        return j.a.createElement(Me, Object(be.a)({
                            key: e.pid
                        }, e, {
                            closeOverlay: n
                        }))
                    }), t.totalCount > 5 && j.a.createElement("li", {
                        className: "pt4"
                    }, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: xe("/profile/backings"),
                        onClick: n,
                        atoms: ["hover-text-underline", "hover-cobalt-500"],
                        hover: !1
                    }, Object(L.c)("global.user_menu.View_all")))))
                },
                Me = function(e) {
                    var t = e.url,
                        n = e.image,
                        r = e.closeOverlay,
                        a = e.name,
                        o = void 0 === a ? Object(L.c)("global.user_menu.Untitled") : a;
                    return j.a.createElement("li", null, j.a.createElement("div", {
                        className: "flex mb2 items-center"
                    }, j.a.createElement("div", {
                        className: "basis20p mr2"
                    }, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: xe(t),
                        onClick: r
                    }, j.a.createElement("img", {
                        src: n && n.url,
                        alt: Object(L.c)("global.user_menu.Project"),
                        className: "w100p block"
                    }))), j.a.createElement(N.g, {
                        color: "soft-black",
                        href: xe(t),
                        atoms: ["text-truncate", "basis80p", "hover-text-underline", "hover-cobalt-500"],
                        onClick: r,
                        hover: !1
                    }, o)))
                },
                Se = function(e) {
                    var t = e.activeProjects,
                        n = e.closeOverlay;
                    return j.a.createElement("div", {
                        className: "display-none block-sm"
                    }, !!t.totalCount && j.a.createElement("div", null, j.a.createElement("div", {
                        className: "type-12 text-uppercase pt4 pb6 px6 bold"
                    }, Object(L.c)("global.user_menu.Created_projects")), j.a.createElement("ul", {
                        className: "pt0 p6 w45"
                    }, [].concat(t.nodes).reverse().map(function(e) {
                        return j.a.createElement("li", {
                            key: e.pid
                        }, j.a.createElement("div", {
                            className: "flex mb2 items-center"
                        }, j.a.createElement("div", {
                            className: "basis20p mr2"
                        }, j.a.createElement(N.g, {
                            color: "soft-black",
                            href: xe(e.url),
                            onClick: n
                        }, j.a.createElement("img", {
                            src: e.imageUrl,
                            alt: Object(L.c)("global.user_menu.Project"),
                            className: "w100p block"
                        }))), j.a.createElement(N.g, {
                            color: "soft-black",
                            href: xe(e.url),
                            atoms: ["text-truncate", "basis80p", "hover-text-underline", "hover-cobalt-500"],
                            onClick: n,
                            hover: !1
                        }, e.name || Object(L.c)("global.user_menu.Untitled"))))
                    }), t.totalCount > 5 && j.a.createElement("li", {
                        className: "pt4"
                    }, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: xe("/profile/projects"),
                        onClick: n,
                        atoms: ["hover-text-underline", "hover-cobalt-500"],
                        hover: !1
                    }, Object(L.c)("global.user_menu.View_all"))))))
                },
                Ie = function(e) {
                    var t = e.isKsrAdmin,
                        n = e.isSecureLoggedInAdmin,
                        r = e.closeOverlay;
                    return j.a.createElement("div", {
                        className: "flex border-top mt4 py4 px6 justify-between"
                    }, j.a.createElement(N.g, {
                        color: "soft-black",
                        href: xe("/logout"),
                        onClick: r,
                        atoms: ["hover-text-underline", "hover-cobalt-500", "mr1"],
                        hover: !1
                    }, Object(L.c)("global.user_menu.Log_out")), t && j.a.createElement("div", null, !n && j.a.createElement(N.g, {
                        color: "soft-black",
                        href: xe("/admin/login"),
                        onClick: r,
                        atoms: ["hover-text-underline", "hover-cobalt-500"],
                        hover: !1
                    }, Object(L.c)("global.user_menu.Log_in_as_admin")), n && j.a.createElement("div", {
                        className: "flex justify-between"
                    }, j.a.createElement(N.g, {
                        atoms: ["mr4", "hover-text-underline", "hover-cobalt-500"],
                        color: "soft-black",
                        href: xe("/admin/password/new"),
                        onClick: r,
                        hover: !1
                    }, Object(L.c)("global.user_menu.Change_admin_password")), j.a.createElement(N.g, {
                        color: "soft-black",
                        href: xe("/admin/logout"),
                        onClick: r,
                        atoms: ["hover-text-underline", "hover-cobalt-500"],
                        hover: !1
                    }, Object(L.c)("global.user_menu.Log_out_of_admin")))))
                },
                Te = function(e) {
                    var t = e.state,
                        n = e.isSecureLoggedInAdmin,
                        r = e.dispatch,
                        a = t.activeProjects,
                        o = t.backedProjects,
                        i = t.canCurate,
                        c = t.curatedPages,
                        s = t.isKsrAdmin,
                        l = t.isSocializing,
                        u = t.hasUnseenActivity,
                        d = t.hasUnreadMessages,
                        m = t.hasUnseenSavedProjectsActivity,
                        f = t.name,
                        p = t.organizations,
                        h = t.url,
                        g = function() {
                            return r({
                                type: "CLOSE_USER_MENU"
                            })
                        };
                    return j.a.createElement("div", null, j.a.createElement("div", {
                        className: "flex-lg pt3"
                    }, j.a.createElement(Le, {
                        activeProjects: a,
                        canCurate: i,
                        closeOverlay: g,
                        curatedPages: c,
                        hasUnseenActivity: u,
                        hasUnseenSavedProjectsActivity: m,
                        isSocializing: l,
                        organizations: p,
                        hasUnreadMessages: d,
                        url: h
                    }), !!o.totalCount && j.a.createElement(Ne, {
                        backedProjects: o,
                        closeOverlay: g
                    }), !!a.totalCount && j.a.createElement(Se, {
                        activeProjects: a,
                        closeOverlay: g
                    })), j.a.createElement(Ie, {
                        isKsrAdmin: s,
                        isSecureLoggedInAdmin: n,
                        name: f,
                        closeOverlay: g
                    }))
                },
                Ae = function(e) {
                    var t = e.state,
                        n = e.isSecureLoggedInAdmin,
                        r = e.dispatch;
                    return t.userMenuOpen && j.a.createElement("div", {
                        className: "absolute t24 t12-md w100p"
                    }, j.a.createElement("div", {
                        tabIndex: "0",
                        className: "no-outline absolute border border-dark-grey-400 t100p r0 mt1 mr3 bg-white z-user-menu-3 flex"
                    }, t.dataRequestSuccessful ? Object(O.a)("new_user_menu") ? j.a.createElement(Te, {
                        dispatch: r,
                        state: t,
                        isSecureLoggedInAdmin: n
                    }) : j.a.createElement(Oe, {
                        dispatch: r,
                        state: t,
                        isSecureLoggedInAdmin: n
                    }) : j.a.createElement(Ce, null)), j.a.createElement("div", {
                        role: "button",
                        className: "fixed t0 r0 b0 l0 bg-transparent z-user-menu-2",
                        onClick: function() {
                            return r({
                                type: "CLOSE_USER_MENU"
                            })
                        }
                    }))
                },
                De = n("z+X6"),
                Ye = n("WjF9"),
                Re = document.getElementById("global-header"),
                Pe = document.getElementById("global-footer"),
                Ue = Re && Object.freeze({
                    secureAdmin: Re.hasAttribute("data-secure-admin"),
                    accessTokenAuth: Re.hasAttribute("data-access-token-auth"),
                    minimal: Re.hasAttribute("data-minimal"),
                    isGhosting: Re.hasAttribute("data-is-ghosting"),
                    unreadNotifications: Re.hasAttribute("data-unread-notifications"),
                    startProjectPath: Re.getAttribute("data-start-project-path"),
                    onHomepage: Re.hasAttribute("data-on-homepage")
                });
            if (Re || Pe) {
                var He = Object(d.b)({
                        userMenu: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                                t = arguments.length > 1 ? arguments[1] : void 0;
                            switch (t.type) {
                                case "USER_MENU_DATA_RESPONSE":
                                    return t.response.data ? Object(u.a)({}, e, {
                                        dataRequestSuccessful: !0
                                    }, t.response.data.me) : Object(u.a)({}, e, {
                                        dataRequestStarted: !1,
                                        errors: t.response.errors
                                    });
                                case "FETCH_USER_MENU":
                                    var n = e.dataRequestStarted ? d.a.none : d.a.run(f, {
                                        successActionCreator: g
                                    });
                                    return Object(d.f)(Object(u.a)({}, e, {
                                        dataRequestStarted: !0
                                    }), n);
                                case "OPEN_USER_MENU":
                                    return Object(d.f)(Object(u.a)({}, e, {
                                        userMenuOpen: !0
                                    }), d.a.list([d.a.action({
                                        type: "FETCH_USER_MENU"
                                    }), d.a.action(Object(p.b)("Account Menu Dropdown"))], {
                                        batch: !0
                                    }));
                                case "CLOSE_USER_MENU":
                                    return Object(u.a)({}, e, {
                                        userMenuOpen: !1
                                    });
                                default:
                                    return e
                            }
                        },
                        guidedSearch: v.b,
                        discoveryOverlay: b.g,
                        footer: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I;
                            switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
                                case "OPEN_CURRENCY_MODAL":
                                    return Object(u.a)({}, e, {
                                        currencyModalOpen: !0
                                    });
                                case "CLOSE_CURRENCY_MODAL":
                                    return Object(u.a)({}, e, {
                                        currencyModalOpen: !1
                                    });
                                default:
                                    return e
                            }
                        },
                        tracking: C.a
                    }),
                    qe = Object(De.a)(He, {}, "Global UI"),
                    ze = function() {
                        ! function() {
                            if (Re) {
                                var e = qe.dispatch,
                                    t = qe.getState(),
                                    n = t.userMenu,
                                    r = t.guidedSearch,
                                    a = t.discoveryOverlay,
                                    o = Ye.a ? Ye.a.data : {},
                                    i = {
                                        accessTokenAuth: Ue.accessTokenAuth,
                                        avatar: o.avatar ? o.avatar.thumb : "https://d3mlfyygrfdi2i.cloudfront.net/df9f/missing_user_avatar.png",
                                        isGhosting: Ue.isGhosting,
                                        isRegistered: o.is_registered,
                                        loggedIn: o.is_registered,
                                        name: o.name,
                                        unreadNotifications: Ue.unreadNotifications
                                    };
                                ge.a.render(j.a.createElement(fe, {
                                    state: i,
                                    dispatch: e,
                                    minimal: Ue.minimal,
                                    openDiscoveryOverlay: function() {
                                        return e(Object(b.f)())
                                    },
                                    openSearch: function() {
                                        return e(Object(v.g)())
                                    },
                                    startProjectPath: Ue.startProjectPath,
                                    onHomepage: Ue.onHomepage,
                                    toggleUserMenu: function() {
                                        return e(n.userMenuOpen ? {
                                            type: "CLOSE_USER_MENU"
                                        } : {
                                            type: "OPEN_USER_MENU"
                                        })
                                    },
                                    fetchUserMenu: function() {
                                        return e({
                                            type: "FETCH_USER_MENU"
                                        })
                                    }
                                }, j.a.createElement(pe.a, {
                                    state: r,
                                    dispatch: e
                                }), j.a.createElement(y.b, {
                                    state: a,
                                    dispatch: e
                                }), j.a.createElement(Ae, {
                                    state: n,
                                    isSecureLoggedInAdmin: Ue.secureAdmin,
                                    dispatch: e
                                })), Re)
                            }
                        }(),
                        function() {
                            if (Pe) {
                                var e = JSON.parse(Pe.getAttribute("data"));
                                ge.a.render(j.a.createElement(F, {
                                    dispatch: qe.dispatch,
                                    state: qe.getState().footer,
                                    data: e
                                }), Pe)
                            }
                        }()
                    };
                ze(), qe.subscribe(ze)
            }
            var Fe = ["keyboard-focusable", "keyboard-focusable-soft-black"];
            document.addEventListener("mousedown", function(e) {
                if (e.target && e.target instanceof HTMLElement) {
                    var t = function e(t) {
                        return Fe.some(function(e) {
                            return t.classList.contains(e)
                        }) ? t : t.parentElement ? e(t.parentElement) : null
                    }(e.target);
                    if (t) {
                        var n = Array.from(t.classList).filter(function(e) {
                            return Fe.includes(e)
                        });
                        n.forEach(function(e) {
                            return t.classList.remove(e)
                        }), t.style.outline = "none", t.addEventListener("blur", function e() {
                            n.forEach(function(e) {
                                return t.classList.add(e)
                            }), t.removeEventListener("blur", e), t.style.outline = ""
                        })
                    }
                }
            }), window.$ = window.$ || a.a, window.jQuery = window.jQuery || a.a, window.console && console.log("Want to help bring creative projects to life?\nApply at https://www.kickstarter.com/jobs")
        },
        "94td": function(e, t, n) {
            "use strict";
            var r = n("vpQ4"),
                a = n("XM0S"),
                o = n("KQm4"),
                i = n("Ff2n"),
                c = n("q1tI"),
                s = n.n(c),
                l = n("1OyB"),
                u = n("vuIU"),
                d = n("md7G"),
                m = n("foSv"),
                f = n("Ji7U"),
                p = n("17x9"),
                h = n.n(p),
                g = {
                    i18n: h.a.shape({
                        locale: h.a.string,
                        defaultLocale: h.a.string.isRequired,
                        translations: h.a.object.isRequired
                    }),
                    t: h.a.func
                },
                b = function(e) {
                    var t = function(t, n) {
                        return e(t, n)
                    };
                    return t.contextTypes = g, t
                },
                v = function(e) {
                    return function(t) {
                        var n, r;
                        return r = n = function(n) {
                            function r() {
                                return Object(l.a)(this, r), Object(d.a)(this, Object(m.a)(r).apply(this, arguments))
                            }
                            return Object(f.a)(r, n), Object(u.a)(r, [{
                                key: "getChildContext",
                                value: function() {
                                    var t = a.a.bind(null, e);
                                    return {
                                        i18n: e,
                                        t: t
                                    }
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    return s.a.createElement(t, this.props)
                                }
                            }]), r
                        }(c.Component), n.childContextTypes = g, r
                    }
                },
                C = n("+DSo"),
                y = b(function(e, t) {
                    var n = e.i18nKey,
                        a = e.i18nTag,
                        c = void 0 === a ? "span" : a,
                        l = e.atoms,
                        u = void 0 === l ? [] : l,
                        d = Object(i.a)(e, ["i18nKey", "i18nTag", "atoms"]),
                        m = t.i18n || {},
                        f = Object(C.c)(m, n, d);
                    void 0 === f && (f = Object(C.d)(n), u = u.concat(["translation_missing"]), d.debug && window.console.log("I18n key is missing: ", n));
                    var p = f.split(C.b).reduce(function(e, t, n) {
                            var r = n % 2 == 0 ? t : d[t];
                            return e.concat([r])
                        }, []),
                        h = u.length > 0 ? {
                            className: u.join(" ")
                        } : {};
                    return s.a.createElement.apply(s.a, [c, Object(r.a)({}, h)].concat(Object(o.a)(p)))
                });
            n.d(t, "e", function() {
                return _
            }), n.d(t, "c", function() {
                return E
            }), n.d(t, "a", function() {
                return w
            }), n.d(t, "b", function() {
                return y
            }), n.d(t, "f", function() {
                return v
            }), n.d(t, "d", function() {
                return b
            }), n.d(t, "g", function() {
                return C.e
            });
            var _ = window.I18n.locale,
                E = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return a.a.apply(void 0, [window.I18n].concat(t))
                },
                w = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return y(e, Object(r.a)({}, t, {
                        i18n: window.I18n,
                        t: E
                    }))
                }
        },
        C2IT: function(e, t, n) {
            "use strict";
            var r = n("0VSk");
            t.a = [{
                id: "arts",
                name: r.default.t("discovery_overlay.sections.Arts"),
                url: "/arts",
                emoji: "🎨"
            }, {
                id: "comics-illustration",
                name: r.default.t("discovery_overlay.sections.Comics_and_Illustration"),
                url: "/comics-illustration",
                emoji: "💥"
            }, {
                id: "design-tech",
                name: r.default.t("discovery_overlay.sections.Design_and_Tech"),
                url: "/design-tech",
                emoji: "⚙️"
            }, {
                id: "film",
                name: r.default.t("discovery_overlay.sections.Film"),
                url: "/film",
                emoji: "🎬"
            }, {
                id: "food-craft",
                name: r.default.t("discovery_overlay.sections.Food_and_Craft"),
                url: "/food-craft",
                emoji: "🍲"
            }, {
                id: "games",
                name: r.default.t("discovery_overlay.sections.Games"),
                url: "/games",
                emoji: "🕹"
            }, {
                id: "music",
                name: r.default.t("discovery_overlay.sections.Music"),
                url: "/music",
                emoji: "🎶"
            }, {
                id: "publishing",
                name: r.default.t("discovery_overlay.sections.Publishing"),
                url: "/publishing",
                emoji: "📚"
            }]
        },
        CMmH: function(e, t, n) {
            "use strict";
            var r = n("2UXI"),
                a = n("0fse");
            t.a = function(e, t) {
                switch (t.type) {
                    case "TRACKING_TRACK_EVENT":
                        var n = t.name,
                            o = t.properties,
                            i = t.options;
                        return Object(a.f)(e, a.a.run(r.c, {
                            args: [n, o, i]
                        }));
                    case "BULK_TRACKING_TRACK_EVENT":
                        var c = (t.actions || []).map(function(e) {
                            var t = e.name,
                                n = e.properties,
                                o = e.options;
                            return a.a.run(r.c, {
                                args: [t, n, o]
                            })
                        });
                        return Object(a.f)(e, a.a.list(c, {
                            batch: !0
                        }))
                }
            }
        },
        CjI4: function(e, t, n) {
            "use strict";
            var r = n("60hy"),
                a = Object(r.b)(window.current_location);
            window.current_location = a, t.a = a
        },
        FbRb: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("0VSk"),
                a = n("IWkz"),
                o = {
                    seconds: 119,
                    minutes: 119,
                    hours: 72,
                    days: 0
                },
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.ksr_page_clock || new a.a;
                    e instanceof Date || (e = l(e));
                    var n = s(e, t),
                        o = Math.floor(c(e, t) / n[1]),
                        i = r.default.t("onloads.page_timer.".concat(n[0], "_count"), {
                            count: o
                        });
                    return isNaN(o) ? {
                        remainingUnit: null,
                        remainingNumber: "...",
                        remainingString: r.default.t("onloads.page_timer.default")
                    } : {
                        remainingUnit: n,
                        remainingNumber: o,
                        remainingString: i
                    }
                },
                c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.ksr_page_clock || new a.a;
                    return Math.max(e - t.get_remote_time(), 0)
                },
                s = function(e) {
                    for (var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.ksr_page_clock || new a.a, r = n.time_units.slice(1), i = 0; i < r.length && (t = r[i], !(c(e, n) <= o[t[0]] * t[1])); i += 1);
                    return t
                },
                l = function(e) {
                    if (e) return "string" == typeof e && e.match(/^\d+$/) ? (new Date).setTime(e) : "number" == typeof e ? new Date(e) : new Date(Date.parse(e))
                }
        },
        Fkal: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            });
            var r = n("q1tI"),
                a = n.n(r),
                o = n("5igC"),
                i = n("LtMG"),
                c = function(e) {
                    var t = e.onClick,
                        n = e.onFocus,
                        r = e.onMouseDown,
                        c = e.href,
                        s = e.type,
                        l = void 0 === s ? "button" : s,
                        u = e.atoms,
                        d = void 0 === u ? [] : u,
                        m = e.size,
                        f = void 0 === m ? "medium" : m,
                        p = e.color,
                        h = void 0 === p ? "green" : p,
                        g = e.theme,
                        b = e.shadow,
                        v = void 0 !== b && b,
                        C = e.disabled,
                        y = void 0 !== C && C,
                        _ = e.loading,
                        E = void 0 !== _ && _,
                        w = e.children,
                        k = e.target,
                        j = e.tooltip,
                        O = ["bttn"].concat(function(e) {
                            switch (e) {
                                case "xlarge":
                                    return ["bttn-xlarge"];
                                case "large":
                                    return ["bttn-large"];
                                case "medium":
                                    return ["bttn-medium"];
                                case "small":
                                    return ["bttn-small"];
                                case "xsmall":
                                    return ["bttn-xsmall"];
                                default:
                                    throw "invalid size class"
                            }
                        }(f)).concat(function(e, t) {
                            if (t) return ["bttn-".concat(t.name)];
                            switch (e) {
                                case "black":
                                    return ["bttn-black"];
                                case "cobalt":
                                    return ["bttn-cobalt"];
                                case "blue":
                                    return ["bttn-blue"];
                                case "conferences-blue":
                                    return ["bttn-conferences-blue"];
                                case "dark-green":
                                    return ["bttn-dark-green"];
                                case "green":
                                    return ["bttn-green"];
                                case "grey":
                                    return ["bttn-grey"];
                                case "icon":
                                    return ["bttn-icon"];
                                case "red":
                                    return ["bttn-red"];
                                case "white":
                                    return ["bttn-white"];
                                case "drip":
                                    return ["bttn-drip"];
                                case "facebook":
                                    return ["bttn-facebook"];
                                case "twitter":
                                    return ["bttn-twitter"];
                                default:
                                    throw "invalid button color"
                            }
                        }(h, g)).concat(g ? ["keyboard-focusable-".concat(g["primary-dark"])] : ["keyboard-focusable"]).concat(v ? ["shadow-button"] : []).concat(d);
                    return a.a.createElement(o.b, {
                        onFocus: n,
                        atoms: O,
                        disabled: y,
                        href: c,
                        onClick: t,
                        onMouseDown: r,
                        target: k,
                        type: l,
                        tooltip: j
                    }, E ? a.a.createElement(i.f, {
                        name: "icon--circle-loader",
                        size: "medium"
                    }) : w)
                }
        },
        "HU7/": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "e", function() {
                return o
            }), n.d(t, "d", function() {
                return i
            }), n.d(t, "f", function() {
                return c
            }), n.d(t, "b", function() {
                return l
            }), n.d(t, "c", function() {
                return u
            });
            var r = n("q1tI"),
                a = {
                    header: {
                        atoms: []
                    },
                    body: {
                        atoms: []
                    },
                    form: {
                        atoms: []
                    },
                    link: {
                        atoms: []
                    }
                },
                o = {
                    header: {
                        atoms: ["maison-book"]
                    },
                    body: {
                        atoms: ["cooper-light"]
                    },
                    form: {
                        atoms: ["maison-book"]
                    },
                    link: {
                        atoms: ["maison-book"]
                    }
                },
                i = {
                    header: {
                        atoms: ["cooper-light"]
                    },
                    body: {
                        atoms: ["cooper-light"]
                    },
                    form: {
                        atoms: ["maison-book"]
                    },
                    link: {
                        atoms: ["maison-book"]
                    }
                },
                c = {
                    header: {
                        atoms: ["effra-heavy"]
                    },
                    body: {
                        atoms: ["maison-book"]
                    },
                    form: {
                        atoms: ["maison-book"]
                    },
                    link: {
                        atoms: ["maison-book"]
                    }
                },
                s = n.n(r).a.createContext(a),
                l = s.Consumer,
                u = s.Provider
        },
        IDzB: function(e, t, n) {
            "use strict";
            var r = n("wx14"),
                a = n("Ff2n"),
                o = n("q1tI"),
                i = n("LtMG"),
                c = n("94td");
            n.d(t, "b", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            });
            var s = function(e) {
                    var t = e.atoms,
                        n = void 0 === t ? [] : t,
                        c = e.size,
                        s = void 0 === c ? "large" : c,
                        l = e.color,
                        u = void 0 === l ? "blue" : l,
                        d = e.shadow,
                        m = void 0 === d || d,
                        f = e.children,
                        p = Object(a.a)(e, ["atoms", "size", "color", "shadow", "children"]);
                    return o.createElement(i.b, Object(r.a)({}, p, {
                        size: s,
                        shadow: m,
                        color: u,
                        atoms: ["w100p mt4"].concat(n)
                    }), f)
                },
                l = function(e) {
                    var t = e.currentPage,
                        n = e.totalPages,
                        r = e.onPageChange,
                        a = e.onFinish,
                        i = e.renderNavigationButtons,
                        s = void 0 === i || i,
                        l = t === n,
                        m = 1 === t;
                    return o.createElement("div", {
                        className: "flex"
                    }, o.createElement("div", {
                        className: "flex flex-2 order-2 justify-center"
                    }, o.createElement(u, {
                        currentPage: t,
                        totalPages: n
                    })), s && o.createElement(o.Fragment, null, o.createElement("div", {
                        className: "flex flex-2 order-1"
                    }, !m && o.createElement(d, {
                        color: "white",
                        name: "arrow-point-left",
                        label: Object(c.c)("modals.paginator.Previous_page"),
                        onClick: function() {
                            return r(t - 1)
                        }
                    })), o.createElement("div", {
                        className: "flex flex-2 order-3 justify-end"
                    }, o.createElement(d, {
                        color: "blue",
                        name: l ? "check" : "arrow-point-right",
                        label: l ? Object(c.c)("modals.paginator.Finish") : Object(c.c)("modals.paginator.Next_page"),
                        onClick: l ? a : function() {
                            return r(t + 1)
                        }
                    }))))
                },
                u = function(e) {
                    var t = e.currentPage,
                        n = e.totalPages;
                    return o.createElement("span", {
                        "aria-label": Object(c.c)("modals.paginator.Page_n_of_m", {
                            currentPage: t,
                            totalPages: n
                        })
                    }, function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                        null == t && (t = e || 0, e = 0);
                        var r = Math.max(Math.ceil((t - e) / n), 0);
                        return Array.from(Array(r), function(t, r) {
                            return e + r * n
                        })
                    }(1, n + 1).map(function(e) {
                        return o.createElement("span", {
                            key: e,
                            className: "lh4 py0 px1"
                        }, o.createElement("span", {
                            className: "inline-block w1 h1 circle ".concat(e === t ? "bg-navy-700" : "bg-grey-500")
                        }))
                    }))
                },
                d = function(e) {
                    var t = e.color,
                        n = e.name,
                        r = e.label,
                        a = e.onClick;
                    return o.createElement(i.b, {
                        color: t,
                        shadow: !0,
                        onClick: a
                    }, o.createElement(i.f, {
                        name: n,
                        label: r
                    }))
                }
        },
        IVR7: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("vpQ4"),
                a = n("q1tI"),
                o = n.n(a),
                i = function(e) {
                    var t = e.size,
                        n = e.atoms,
                        a = void 0 === n ? [] : n,
                        i = e.imageUrl,
                        c = e.alt,
                        s = void 0 === c ? "user avatar" : c,
                        l = e.borderColor,
                        u = void 0 === l ? "grey-500" : l,
                        d = e.style,
                        m = void 0 === d ? {} : d,
                        f = t ? ["w".concat(t), "h".concat(t)] : [],
                        p = u ? ["border", "border-".concat(u)] : [],
                        h = ["avatar", "inline-block", "align-middle", "circle"].concat(f).concat(p).concat(a).join(" "),
                        g = Object(r.a)({}, m, {
                            textIndent: "100%",
                            whiteSpace: "nowrap",
                            overflow: "hidden"
                        });
                    return o.a.createElement("img", {
                        className: h,
                        style: g,
                        src: i,
                        alt: s
                    })
                }
        },
        IWkz: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("1OyB"),
                a = n("vuIU"),
                o = [
                    ["milliseconds", 1],
                    ["seconds", 1e3],
                    ["minutes", 6e4],
                    ["hours", 36e5],
                    ["days", 864e5]
                ],
                i = function() {
                    function e() {
                        Object(r.a)(this, e), this.local_start_time = new Date, this.cookie_name = "request_time", this.time_units = o, this.set_remote_offset()
                    }
                    return Object(a.a)(e, [{
                        key: "set_remote_offset",
                        value: function() {
                            this.cookie_value = this.read_cookie();
                            var e = new Date(this.cookie_value);
                            this.cookie_value && "Invalid Date" !== e.toString() ? this.remote_offset = e - this.local_start_time : (this.remote_offset = this.read_cookie("local_offset"), this.remote_offset && (this.remote_offset = parseInt(this.remote_offset, 10))), void 0 === this.remote_offset || isNaN(this.remote_offset) ? this.is_set = !1 : (document.cookie = "local_offset=" + this.remote_offset + "; path=/", this.is_set = !0)
                        }
                    }, {
                        key: "get_units_in_interval",
                        value: function(e, t) {
                            return t[e.replace(/^\w/, function(e) {
                                return "get" + e.toUpperCase()
                            })]()
                        }
                    }, {
                        key: "milliseconds_in_day",
                        value: function(e) {
                            void 0 === e && (e = new Date);
                            for (var t = 0, n = o.length - 2; n >= 0; n -= 1) t += this.get_units_in_interval(o[n][0], e) * o[n][1];
                            return t
                        }
                    }, {
                        key: "milliseconds_in_interval",
                        value: function(e, t) {
                            return this.milliseconds_in_day(t) % e
                        }
                    }, {
                        key: "milliseconds_to_next_interval",
                        value: function(e, t) {
                            return e - this.milliseconds_in_interval(e, t)
                        }
                    }, {
                        key: "pluralize",
                        value: function(e, t) {
                            return 1 === t && (e = e.replace(/s$/, "")), e
                        }
                    }, {
                        key: "read_cookie",
                        value: function(e) {
                            if (window.document && window.document.cookie)
                                for (var t = window.document.cookie.split(";"), n = (e || this.cookie_name) + "=", r = 0; r < t.length; r += 1) {
                                    for (var a = t[r];
                                        " " === a.charAt(0);) a = a.substring(1, a.length);
                                    if (0 === a.indexOf(n)) {
                                        var o = a.substring(n.length, a.length);
                                        return decodeURIComponent(o).replace(/\+/g, " ")
                                    }
                                }
                        }
                    }, {
                        key: "destroy_cookie",
                        value: function(e) {
                            var t = new Date;
                            e || (e = this.cookie_name), t.setTime(t.getTime() - 864e5), window.document.cookie = e + "=; expires=" + t.toGMTString() + "; path=/"
                        }
                    }, {
                        key: "get_remote_time",
                        value: function() {
                            var e = new Date,
                                t = e.getTime() + (this.remote_offset || 0);
                            return e = e.setTime(t)
                        }
                    }]), e
                }()
        },
        IvES: function(e, t, n) {
            "use strict";
            var r = n("+2Rf"),
                a = n.n(r),
                o = (n("RIhn"), n("IWkz")),
                i = n("1OyB"),
                c = n("vuIU"),
                s = n("FbRb"),
                l = function() {
                    function e(t, n) {
                        Object(i.a)(this, e), t && (this.count_down = t.getAttribute("data-dynamic") || !1, this.clock = n, this.time_units = this.clock.time_units.slice(1), this.element = t, this.clock.is_set && this.attach())
                    }
                    return Object(c.a)(e, [{
                        key: "update_element",
                        value: function() {
                            var e = Object(s.a)(this.remote_end_time, this.clock),
                                t = e.remainingNumber,
                                n = e.remainingString;
                            this.number_element.innerHTML = t, this.text_element.innerHTML = n
                        }
                    }, {
                        key: "valid",
                        value: function() {
                            return !(!this.number_element || !this.text_element)
                        }
                    }, {
                        key: "attach",
                        value: function() {
                            var e = this;
                            this.remote_end_time = this.element.getAttribute("data-end_time"), this.number_element = this.element.querySelectorAll(".js-num")[0], this.text_element = this.element.querySelectorAll(".js-text")[0], this.element.ksr_page_timer = !0, this.valid() && function t() {
                                e.update_element();
                                var n = Object(s.a)(e.remote_end_time, e.clock),
                                    r = n.remainingUnit,
                                    a = n.remainingNumber;
                                e.count_down && a > 0 && (e.timeout = window.setTimeout(t, e.clock.milliseconds_to_next_interval(r[1])))
                            }()
                        }
                    }, {
                        key: "cancel",
                        value: function() {
                            this.timeout && clearTimeout(this.timeout)
                        }
                    }]), e
                }(),
                u = function() {
                    function e() {
                        Object(i.a)(this, e), this.elements = [], this.loading = !0, this.number_of_tries = 0, this.attach()
                    }
                    return Object(c.a)(e, [{
                        key: "stop_finding",
                        value: function() {
                            this.attach_timers(), this.loading = !1, document.addEventListener ? document.removeEventListener("DOMContentLoaded", this.stop_finding, !1) : document.attachEvent && "complete" === document.readyState && document.detachEvent("onreadystatechange", this.stop_finding)
                        }
                    }, {
                        key: "bind_ready",
                        value: function() {
                            var e = this,
                                t = function() {
                                    e.stop_finding()
                                };
                            document.addEventListener ? (document.addEventListener("DOMContentLoaded", t, !1), window.addEventListener("load", t, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", t), window.attachEvent("onload", t))
                        }
                    }, {
                        key: "attach_timers",
                        value: function() {
                            for (var e = window.document.querySelectorAll(".ksr_page_timer"), t = 0; t < e.length; t += 1) e[t].ksr_page_timer || (new l(e[t], window.ksr_page_clock), this.elements.push(e[t]))
                        }
                    }, {
                        key: "attach",
                        value: function() {
                            var e = this;
                            this.bind_ready(), e.attach_timers(), e.loading && (window.setTimeout(function() {
                                e.attach_timers()
                            }, Math.min(Math.pow(10, e.number_of_tries), 100)), e.number_of_tries += 1)
                        }
                    }]), e
                }();
            window.ksr_page_clock = new o.a, new u, a()(document).on("timer_added", ".ksr_page_timer", function() {
                new l(this, window.ksr_page_clock)
            }), a()(".ksr_page_timer").livequery(function() {
                this.ksr_page_timer || a()(this).trigger("timer_added")
            })
        },
        "JC/v": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "b", function() {
                return o
            });
            n("KQm4");
            var r = n("v53p"),
                a = function(e) {
                    return function(t) {
                        return Object(r.fromNullable)(t[e])
                    }
                },
                o = function(e) {
                    try {
                        return Object(r.Just)(e())
                    } catch (e) {
                        return Object(r.Nothing)()
                    }
                }
        },
        "K+Nk": function(e, t, n) {
            "use strict";
            var r = n("eEls"),
                a = n("c6/r"),
                o = Object(r.a)(JSON.parse, a.a);
            t.a = o, window.parseEscapedJSON = o
        },
        KZo6: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("/AD1"),
                a = n("WjF9");

            function o() {
                return {
                    user_id: a.a && a.a.get ? a.a.get("id") : null,
                    project_id: r.a && r.a.get ? r.a.get("id") : null
                }
            }
        },
        LtMG: function(e, t, n) {
            "use strict";
            n.d(t, "f", function() {
                return u
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "h", function() {
                return m
            }), n.d(t, "e", function() {
                return f
            }), n.d(t, "i", function() {
                return p
            }), n.d(t, "d", function() {
                return g
            });
            var r = n("vpQ4"),
                a = n("q1tI"),
                o = n.n(a),
                i = n("IVR7");
            n.d(t, "a", function() {
                return i.a
            });
            var c = n("Fkal");
            n.d(t, "b", function() {
                return c.a
            });
            var s = n("5igC");
            n.d(t, "g", function() {
                return s.a
            });
            var l = n("/IHD"),
                u = function(e) {
                    var t = e.name,
                        n = e.label,
                        r = e.size,
                        a = void 0 === r ? "small" : r,
                        i = e.atoms,
                        c = void 0 === i ? [] : i,
                        s = ["svg-icon__".concat(t)].concat(function(e) {
                            switch (e) {
                                case "9":
                                    return ["icon-9"];
                                case "10":
                                    return ["icon-10"];
                                case "12":
                                    return ["icon-12"];
                                case "14":
                                    return ["icon-14"];
                                case "15":
                                    return ["icon-15"];
                                case "16":
                                    return ["icon-16"];
                                case "20":
                                    return ["icon-20"];
                                case "36":
                                    return ["icon-36"];
                                case "48":
                                    return ["icon-48"];
                                case "small":
                                    return ["icon-small"];
                                case "medium":
                                    return ["icon-medium"];
                                case "large":
                                    return ["icon-large"];
                                default:
                                    throw "invalid size class"
                            }
                        }(a)).concat(c).join(" ");
                    return o.a.createElement("svg", {
                        className: s,
                        "aria-hidden": !n,
                        "aria-label": n
                    }, o.a.createElement("use", {
                        xlinkHref: "#".concat(t)
                    }))
                },
                d = function(e) {
                    var t = e.atoms,
                        n = void 0 === t ? [] : t,
                        r = e.children,
                        a = e.size,
                        i = void 0 === a ? 4 : a,
                        c = e.backgroundColor,
                        s = e.borderColor,
                        l = e.hoverBorderColor,
                        u = e.shadow,
                        d = void 0 !== u && u,
                        m = ["circle", "h".concat(i), "w".concat(i), "flex", "items-center", "justify-center", "inline-flex", "bg-".concat(c), "border", "border-".concat(s || c)].concat(l ? ["hover-border-" + l] : []).concat(d ? ["shadow-avatar"] : []).concat(n).join(" ");
                    return o.a.createElement("div", {
                        className: m
                    }, r)
                },
                m = function(e) {
                    var t = e.defaultColor,
                        n = void 0 === t ? "grey-500" : t,
                        a = e.percentage,
                        i = void 0 === a ? 0 : a,
                        c = e.locked,
                        s = void 0 !== c && c,
                        l = e.error,
                        u = void 0 !== l && l,
                        d = e.size,
                        m = void 0 === d ? 8 : d,
                        f = e.atoms,
                        p = void 0 === f ? [] : f,
                        h = e.defaultStrokeColor,
                        g = void 0 === h ? "ksr-green-700" : h,
                        b = e.defaultIcon,
                        v = void 0 === b ? "icon--check" : b,
                        C = ["w".concat(m), "h".concat(m)].concat(p).join(" "),
                        y = Math.round(2 * Math.PI * 18),
                        _ = Math.round(i * y / 100),
                        E = {
                            status: "not-started",
                            strokeColor: n,
                            checkFillColor: n,
                            circleFillColor: "white"
                        },
                        w = Object(r.a)({}, E, {
                            status: "error",
                            strokeColor: "red-500",
                            checkFillColor: "red-500"
                        }),
                        k = Object(r.a)({}, E, {
                            status: "locked"
                        }),
                        j = Object(r.a)({}, E, {
                            status: "complete",
                            checkFillColor: "white",
                            circleFillColor: "ksr-green-700",
                            strokeColor: "ksr-green-700"
                        }),
                        O = Object(r.a)({}, E, {
                            status: "incomplete",
                            strokeColor: g
                        }),
                        x = u ? w : s ? k : _ >= 100 ? j : 0 != _ ? O : E,
                        L = x.status,
                        N = x.strokeColor,
                        M = x.checkFillColor,
                        S = x.circleFillColor;
                    return o.a.createElement("svg", {
                        className: C,
                        width: "100%",
                        height: "100%",
                        viewBox: "82 630 48 48",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, o.a.createElement("defs", null, o.a.createElement("circle", {
                        id: "progress-circle-outer",
                        cx: 18,
                        cy: 18,
                        r: 18
                    }), o.a.createElement("filter", {
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        filterUnits: "objectBoundingBox",
                        id: "progress-circle-shadow-1"
                    }, o.a.createElement("feMorphology", {
                        radius: "2",
                        operator: "dilate",
                        in: "SourceAlpha",
                        result: "shadowSpreadOuter1"
                    }), o.a.createElement("feOffset", {
                        dy: "2",
                        in: "shadowSpreadOuter1",
                        result: "shadowOffsetOuter1"
                    }), o.a.createElement("feMorphology", {
                        radius: "2",
                        in: "SourceAlpha",
                        result: "shadowInner"
                    }), o.a.createElement("feOffset", {
                        dy: "2",
                        in: "shadowInner",
                        result: "shadowInner"
                    }), o.a.createElement("feComposite", {
                        in: "shadowOffsetOuter1",
                        in2: "shadowInner",
                        operator: "out",
                        result: "shadowOffsetOuter1"
                    }), o.a.createElement("feGaussianBlur", {
                        stdDeviation: "2",
                        in: "shadowOffsetOuter1",
                        result: "shadowBlurOuter1"
                    }), o.a.createElement("feColorMatrix", {
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                        in: "shadowBlurOuter1"
                    })), o.a.createElement("filter", {
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        filterUnits: "objectBoundingBox",
                        id: "progress-circle-shadow-2"
                    }, o.a.createElement("feOffset", {
                        dy: "2",
                        in: "SourceAlpha",
                        result: "shadowOffsetOuter1"
                    }), o.a.createElement("feGaussianBlur", {
                        stdDeviation: "2",
                        in: "shadowOffsetOuter1",
                        result: "shadowBlurOuter1"
                    }), o.a.createElement("feColorMatrix", {
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                        in: "shadowBlurOuter1"
                    }))), o.a.createElement("g", {
                        fill: "none",
                        fillRule: "evenodd"
                    }, o.a.createElement("g", {
                        transform: "translate(88 634)"
                    }, "error" === L || "incomplete" === L ? o.a.createElement("g", null, o.a.createElement("use", {
                        fill: "#000",
                        filter: "url(#progress-circle-shadow-1)",
                        xlinkHref: "#progress-circle-outer"
                    }), o.a.createElement("use", {
                        fill: "#000",
                        filter: "url(#progress-circle-shadow-2)",
                        xlinkHref: "#progress-circle-outer"
                    })) : null, "incomplete" === L || "error" === L ? o.a.createElement("use", {
                        className: "stroke-".concat(N),
                        transform: "rotate(-90 ".concat(18, " ").concat(18, ")"),
                        strokeWidth: "3",
                        strokeDasharray: "".concat(_, " ").concat(y),
                        xlinkHref: "#progress-circle-outer"
                    }) : o.a.createElement("use", {
                        className: "stroke-".concat(N),
                        strokeWidth: "3",
                        xlinkHref: "#progress-circle-outer"
                    }), o.a.createElement("use", {
                        className: "fill-".concat(S),
                        xlinkHref: "#progress-circle-outer"
                    }), "locked" === L ? o.a.createElement("use", {
                        className: "fill-".concat(M),
                        xlinkHref: "#icon--lock",
                        width: "22",
                        height: "22",
                        x: "7",
                        y: "6"
                    }) : o.a.createElement("use", {
                        className: "fill-".concat(M),
                        xlinkHref: "#".concat(v),
                        width: "22",
                        height: "22",
                        x: "7",
                        y: "6"
                    }))))
                },
                f = function(e) {
                    var t = e.children,
                        n = e.atoms,
                        r = void 0 === n ? [] : n,
                        a = e.full,
                        i = [void 0 !== a && a ? "grid-container-full" : "grid-container"].concat(r).join(" ");
                    return o.a.createElement("div", {
                        className: i
                    }, t)
                },
                p = function(e) {
                    var t = e.children,
                        n = e.atoms,
                        r = ["grid-row"].concat(void 0 === n ? [] : n).join(" ");
                    return o.a.createElement("div", {
                        className: r
                    }, t)
                },
                h = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = ["", "-sm", "-md", "-lg"],
                        r = t ? "grid-col-offset-" : "grid-col-",
                        a = [];
                    return e.forEach(function(e, t) {
                        void 0 !== e && a.push("".concat(r).concat(e).concat(n[t]))
                    }), a
                },
                g = function(e) {
                    var t = e.children,
                        n = e.atoms,
                        r = void 0 === n ? [] : n,
                        a = e.width,
                        i = void 0 === a ? 12 : a,
                        c = e.smWidth,
                        s = e.mdWidth,
                        u = e.lgWidth,
                        d = e.offset,
                        m = e.smOffset,
                        f = e.mdOffset,
                        p = e.lgOffset,
                        g = e.center,
                        b = void 0 !== g && g,
                        v = e.style,
                        C = h([i, c, s, u]),
                        y = h([d, m, f, p], !0),
                        _ = Object(l.a)(C, y, r, b ? "grid-col-center" : "");
                    return o.a.createElement("div", {
                        className: _,
                        style: v
                    }, t)
                }
        },
        NSfo: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            });
            n("vpQ4"), n("SmhT");
            var r = function(e, t, n) {
                    return {
                        type: "TRACKING_TRACK_EVENT",
                        name: e,
                        properties: t,
                        options: n
                    }
                },
                a = function(e) {
                    return {
                        type: "BULK_TRACKING_TRACK_EVENT",
                        actions: e
                    }
                }
        },
        NimP: function(e, t, n) {
            "use strict";
            var r = n("vpQ4"),
                a = n("0fse"),
                o = n("SmhT"),
                i = n("TIPN"),
                c = n("eEls"),
                s = n("g84z"),
                l = n("2UXI"),
                u = n("gN63"),
                d = function() {
                    return Object(u.e)("\n  query {\n    me {\n      savedProjects(state: LIVE) {\n        totalCount\n      }\n    }\n    rootCategories {\n      id\n      slug\n      name\n      url\n      totalProjectCount\n      subcategories {\n        nodes {\n          id\n          slug\n          name\n          url\n        }\n      }\n    }\n    tags(scope:DISCOVER) {\n      nodes {\n        id\n        name\n        url\n      }\n    }\n  }\n").then(function(e) {
                        return e.data
                    })
                },
                m = n("0VSk"),
                f = [{
                    id: "recommended-for-you",
                    name: m.default.t("discovery_overlay.collections.Recommended_For_You"),
                    url: "/recommendations",
                    requiresCurrentUser: !0
                }, {
                    id: "projects-we-love",
                    name: m.default.t("discovery_overlay.collections.Projects_We_Love"),
                    url: "/discover/recommended"
                }, {
                    id: "saved",
                    name: m.default.t("discovery_overlay.collections.Saved"),
                    url: "/discover/advanced?starred=1",
                    requiresCurrentUser: !0
                }, {
                    id: "trending",
                    name: m.default.t("discovery_overlay.collections.Trending"),
                    url: "/discover/popular"
                }, {
                    id: "nearly-funded",
                    name: m.default.t("discovery_overlay.collections.Nearly_Funded"),
                    url: "/discover/advanced?raised=1&sort=end_date&staff_picks=1"
                }, {
                    id: "just-launched",
                    name: m.default.t("discovery_overlay.collections.Just_Launched"),
                    url: "/discover/newest"
                }, {
                    id: "following",
                    name: m.default.t("discovery_overlay.collections.Backed_By_People_You_Follow"),
                    url: "/discover/advanced?social=1",
                    requiresCurrentUser: !0
                }, {
                    id: "everything",
                    name: m.default.t("discovery_overlay.collections.Everything"),
                    url: "/discover/advanced"
                }],
                p = n("C2IT");
            n.d(t, "a", function() {
                return h
            }), n.d(t, "b", function() {
                return g
            }), n.d(t, "c", function() {
                return b
            }), n.d(t, "d", function() {
                return v
            }), n.d(t, "e", function() {
                return y
            }), n.d(t, "f", function() {
                return _
            }), n.d(t, "g", function() {
                return E
            });
            var h = function(e) {
                    return {
                        category: e,
                        type: "CATEGORY_CLICKED"
                    }
                },
                g = function() {
                    return {
                        shouldTrack: !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        type: "CLOSE_OVERLAY"
                    }
                },
                b = function(e) {
                    return {
                        targetPosition: e,
                        type: "HEADER_CLICKED"
                    }
                },
                v = function(e) {
                    return {
                        key: e,
                        type: "KEY_PRESSED"
                    }
                },
                C = function(e) {
                    return {
                        data: e,
                        type: "MODEL_REQUEST_SUCCEEDED"
                    }
                },
                y = function(e, t) {
                    return {
                        linkType: e,
                        selectedLink: t,
                        type: "NAVIGATION_LINK_CLICKED"
                    }
                },
                _ = function() {
                    return {
                        type: "OPEN_OVERLAY"
                    }
                },
                E = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            data: {
                                collections: f,
                                sections: p.a,
                                rootCategories: [],
                                tags: []
                            },
                            dataRequestMade: !1,
                            isOpen: !1,
                            openCategoryId: null,
                            sort: Object(s.a)().sort
                        },
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    switch (n.type) {
                        case "CATEGORY_CLICKED":
                            var i, l = n.category;
                            return l.id !== t.openCategoryId ? (i = l.id, e = a.a.run(M, {
                                args: ["Expanded Discovery Filter", {
                                    type: "category",
                                    selected_link: l.slug
                                }]
                            })) : (i = null, e = a.a.none), Object(a.f)(Object(r.a)({}, t, {
                                openCategoryId: i
                            }), e);
                        case "CLOSE_OVERLAY":
                            return w(t, n.shouldTrack);
                        case "HEADER_CLICKED":
                            return Object(a.f)(t, a.a.run(x, {
                                args: [n.targetPosition]
                            }));
                        case "KEY_PRESSED":
                            return n.key === o.d ? w(t, !0) : t;
                        case "MODEL_REQUEST_SUCCEEDED":
                            var u = n.data;
                            u.tags && (u.tags = u.tags.nodes), u.me && (u.savedLiveProjectsCount = u.me.savedProjects.totalCount);
                            var d = u.rootCategories,
                                m = u.savedLiveProjectsCount,
                                h = u.tags;
                            return Object(r.a)({}, t, {
                                dataRequestMade: !0,
                                data: Object(r.a)({}, t.data, {
                                    savedLiveProjectsCount: m,
                                    rootCategories: d,
                                    tags: h
                                })
                            });
                        case "NAVIGATION_LINK_CLICKED":
                            var g = n.selectedLink,
                                b = n.linkType;
                            return Object(a.f)(t, a.a.run(M, {
                                args: ["Selected Discovery Filter", {
                                    type: b,
                                    selected_link: g
                                }]
                            }));
                        case "OPEN_OVERLAY":
                            var v = t.dataRequestMade ? a.a.none : a.a.run(O, {
                                successActionCreator: c.c,
                                failActionCreator: c.c
                            });
                            return Object(a.f)(Object(r.a)({}, t, {
                                isOpen: !0
                            }), a.a.list([v, a.a.run(k), a.a.run(x, {
                                args: [0, 0]
                            }), a.a.run(j, {
                                args: [!0]
                            }), a.a.run(M, {
                                args: ["Viewed Discovery Filters"]
                            }), a.a.run(N, {
                                args: ["overlay-focus-guard"]
                            })], {
                                batch: !0
                            }));
                        default:
                            return t
                    }
                },
                w = function(e, t) {
                    var n = t ? a.a.run(M, {
                        args: ["Closed Discovery Filter"]
                    }) : a.a.none;
                    return Object(a.f)(Object(r.a)({}, e, {
                        isOpen: !1
                    }), a.a.list([a.a.run(j, {
                        args: [!1]
                    }), a.a.run(N, {
                        args: ["js-overlay-explore-button"]
                    }), a.a.run(L), n], {
                        batch: !0
                    }))
                },
                k = function() {
                    setTimeout(function() {
                        window.requestAnimationFrame(function() {
                            var e = document.getElementById("js-overlay-fade");
                            e.classList.remove("o0p"), e.classList.remove("translate-y22")
                        })
                    }, 0)
                },
                j = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = document.documentElement;
                    e ? t.classList.add("clip") : t.classList.remove("clip")
                },
                O = function() {
                    return d().then(C)
                },
                x = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                        n = document.getElementById("js-overlay-body");
                    Object(i.c)({
                        element: n,
                        to: e,
                        duration: t,
                        easing: "easeInCubic"
                    })
                },
                L = function() {
                    var e = document.getElementById("js-overlay-fade");
                    e.classList.add("o0p"), e.classList.add("translate-y22")
                },
                N = function(e) {
                    var t = document.getElementById(e);
                    setTimeout(function() {
                        return t && t.focus()
                    }, 0)
                },
                M = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Object(l.c)(e, t)
                }
        },
        NxQb: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.enabled_features;
                return "string" == typeof t && (t = JSON.parse(t)), !(!t || !t[e])
            }
        },
        PhMr: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var r = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return function(t) {
                    return t[e].apply(t, n)
                }
            }
        },
        QrAi: function(e, t, n) {
            "use strict";
            var r = n("+2Rf"),
                a = n.n(r),
                o = (n("RIhn"), n("1OuE"));
            a()(".js-adjust-time").livequery(function() {
                var e = a()(this);
                e.text(Object(o.a)(e.data("format"), e.attr("datetime"))), e.removeClass("invisible-if-js")
            })
        },
        Qwlt: function(e, t, n) {
            var r, a, o;
            a = [n("+2Rf")], void 0 === (o = "function" == typeof(r = function(e) {
                return e.ui = e.ui || {}, e.ui.version = "1.12.1"
            }) ? r.apply(t, a) : r) || (e.exports = o)
        },
        RIhn: function(e, t, n) {
            var r = n("+2Rf");
            n("+2Rf");
            /*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
             * Dual licensed under the MIT (MIT_LICENSE.txt)
             * and GPL Version 2 (GPL_LICENSE.txt) licenses.
             *
             * Version: 1.1.1
             * Requires jQuery 1.3+
             * Docs: http://docs.jquery.com/Plugins/livequery
             */
            ! function(e) {
                e.extend(e.fn, {
                    livequery: function(t, n, r) {
                        var a, o = this;
                        return e.isFunction(t) && (r = n, n = t, t = void 0), e.each(e.livequery.queries, function(e, i) {
                            if (!(o.selector != i.selector || o.context != i.context || t != i.type || n && n.$lqguid != i.fn.$lqguid || r && r.$lqguid != i.fn2.$lqguid)) return (a = i) && !1
                        }), (a = a || new e.livequery(this.selector, this.context, t, n, r)).stopped = !1, a.run(), this
                    },
                    expire: function(t, n, r) {
                        var a = this;
                        return e.isFunction(t) && (r = n, n = t, t = void 0), e.each(e.livequery.queries, function(o, i) {
                            a.selector != i.selector || a.context != i.context || t && t != i.type || n && n.$lqguid != i.fn.$lqguid || r && r.$lqguid != i.fn2.$lqguid || this.stopped || e.livequery.stop(i.id)
                        }), this
                    }
                }), e.livequery = function(t, n, r, a, o) {
                    return this.selector = t, this.context = n, this.type = r, this.fn = a, this.fn2 = o, this.elements = [], this.stopped = !1, this.id = e.livequery.queries.push(this) - 1, a.$lqguid = a.$lqguid || e.livequery.guid++, o && (o.$lqguid = o.$lqguid || e.livequery.guid++), this
                }, e.livequery.prototype = {
                    stop: function() {
                        var e = this;
                        this.type ? this.elements.unbind(this.type, this.fn) : this.fn2 && this.elements.each(function(t, n) {
                            e.fn2.apply(n)
                        }), this.elements = [], this.stopped = !0
                    },
                    run: function() {
                        if (!this.stopped) {
                            var t = this,
                                n = this.elements,
                                r = e(this.selector, this.context),
                                a = r.not(n);
                            this.elements = r, this.type ? (a.bind(this.type, this.fn), n.length > 0 && e.each(n, function(n, a) {
                                e.inArray(a, r) < 0 && e.event.remove(a, t.type, t.fn)
                            })) : (a.each(function() {
                                t.fn.apply(this)
                            }), this.fn2 && n.length > 0 && e.each(n, function(n, a) {
                                e.inArray(a, r) < 0 && t.fn2.apply(a)
                            }))
                        }
                    }
                }, e.extend(e.livequery, {
                    guid: 0,
                    queries: [],
                    queue: [],
                    running: !1,
                    timeout: null,
                    checkQueue: function() {
                        if (e.livequery.running && e.livequery.queue.length)
                            for (var t = e.livequery.queue.length; t--;) e.livequery.queries[e.livequery.queue.shift()].run()
                    },
                    pause: function() {
                        e.livequery.running = !1
                    },
                    play: function() {
                        e.livequery.running = !0, e.livequery.run()
                    },
                    registerPlugin: function() {
                        e.each(arguments, function(t, n) {
                            if (e.fn[n]) {
                                var r = e.fn[n];
                                e.fn[n] = function() {
                                    var t = r.apply(this, arguments);
                                    return e.livequery.run(), t
                                }
                            }
                        })
                    },
                    run: function(t) {
                        null != t ? e.inArray(t, e.livequery.queue) < 0 && e.livequery.queue.push(t) : e.each(e.livequery.queries, function(t) {
                            e.inArray(t, e.livequery.queue) < 0 && e.livequery.queue.push(t)
                        }), e.livequery.timeout && clearTimeout(e.livequery.timeout), e.livequery.timeout = setTimeout(e.livequery.checkQueue, 20)
                    },
                    stop: function(t) {
                        null != t ? e.livequery.queries[t].stop() : e.each(e.livequery.queries, function(t) {
                            e.livequery.queries[t].stop()
                        })
                    }
                }), e.livequery.registerPlugin("append", "prepend", "after", "before", "wrap", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "empty", "remove", "html"), e(function() {
                    e.livequery.play()
                })
            }(r)
        },
        S1QU: function(e, t, n) {
            "use strict";
            var r = n("60hy"),
                a = n("2UXI"),
                o = Object(r.a)(window.current_checkout);
            o && o.on_change(function(e) {
                e.reward ? Object(a.c)("Checkout Reward Changed") : void 0 !== e.location_id ? Object(a.c)("Checkout Location Changed") : e.shipping_amount ? Object(a.c)("Checkout Shipping Amount Changed") : e.amount && Object(a.c)("Checkout Amount Changed")
            }), window.current_checkout = o, t.a = o
        },
        SKdt: function(e, t, n) {
            "use strict";
            var r = n("rePB"),
                a = n("vpQ4"),
                o = n("eEls"),
                i = n("JC/v"),
                c = n("PhMr"),
                s = n("MgNI"),
                l = Object(o.a)(function(e) {
                    return e.reduce(function(e, t) {
                        return Object(a.a)({}, e, Object(r.a)({}, t, !0))
                    }, {})
                }, function(e) {
                    return s.maybe.fromNullable(e).chain(Object(i.a)("className")).map(Object(c.a)("split", /\s+/)).getOrElse([])
                })(document.querySelector("body"));
            t.a = l
        },
        SmhT: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return i
            }), n.d(t, "g", function() {
                return c
            }), n.d(t, "k", function() {
                return s
            }), n.d(t, "l", function() {
                return l
            }), n.d(t, "m", function() {
                return u
            }), n.d(t, "n", function() {
                return d
            }), n.d(t, "i", function() {
                return m
            }), n.d(t, "e", function() {
                return f
            }), n.d(t, "f", function() {
                return p
            }), n.d(t, "h", function() {
                return h
            }), n.d(t, "o", function() {
                return g
            }), n.d(t, "j", function() {
                return b
            });
            var r = 8,
                a = 40,
                o = 13,
                i = 27,
                c = 37,
                s = 39,
                l = 32,
                u = 9,
                d = 38,
                m = 2,
                f = 74,
                p = 75,
                h = [65, 66, 67, 68, 69, 70, 71, 72, 73, f, p, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
                g = function(e) {
                    return e >= 66 && e <= 90
                },
                b = [18, 91, 93, 17, a, o, i, c, s, 16, u, d, 91, 92, 93, 17, 224]
        },
        TIPN: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "b", function() {
                return c
            });
            var r = n("vpQ4"),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = document.getElementsByClassName("js-site-nav-container")[0],
                        n = document.getElementsByClassName("js-admin-nav-wrap")[0],
                        a = (t && t.clientHeight || 0) + (n && n.clientHeight || 0);
                    return o(Object(r.a)({
                        offset: a
                    }, e))
                },
                o = function(e) {
                    var t, n = e.element,
                        r = void 0 === n ? document.scrollingElement || document.body : n,
                        a = e.to,
                        o = void 0 === a ? 0 : a,
                        c = e.duration,
                        s = void 0 === c ? 1e3 : c,
                        l = e.easing,
                        u = void 0 === l ? "easeInOutQuad" : l,
                        d = e.offset,
                        m = void 0 === d ? 0 : d,
                        f = r.scrollTop,
                        p = o - f - m;
                    return new Promise(function(e) {
                        window.requestAnimationFrame(function n(a) {
                            t || (t = a);
                            var o = (a - t) / s,
                                c = Math.max(0, Math.min(1, o));
                            r.scrollTop = f + i[u](c) * p, c < 1 ? window.requestAnimationFrame(n) : e()
                        })
                    })
                },
                i = {
                    linear: function(e) {
                        return e
                    },
                    easeInQuad: function(e) {
                        return e * e
                    },
                    easeOutQuad: function(e) {
                        return e * (2 - e)
                    },
                    easeInOutQuad: function(e) {
                        return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
                    },
                    easeInCubic: function(e) {
                        return e * e * e
                    },
                    easeOutCubic: function(e) {
                        return --e * e * e + 1
                    },
                    easeInOutCubic: function(e) {
                        return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
                    },
                    easeInQuart: function(e) {
                        return e * e * e * e
                    },
                    easeOutQuart: function(e) {
                        return 1 - --e * e * e * e
                    },
                    easeInOutQuart: function(e) {
                        return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
                    },
                    easeInQuint: function(e) {
                        return e * e * e * e * e
                    },
                    easeOutQuint: function(e) {
                        return 1 + --e * e * e * e * e
                    },
                    easeInOutQuint: function(e) {
                        return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
                    }
                },
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 200;
                    o({
                        to: 0,
                        duration: e
                    })
                }
        },
        WjF9: function(e, t, n) {
            "use strict";
            var r = n("60hy"),
                a = Object(r.c)(window.current_user);
            window.current_user = a, t.a = a
        },
        XLBa: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return f
            });
            var r, a = n("vpQ4"),
                o = n("+2Rf"),
                i = n.n(o),
                c = n("a+N5"),
                s = n.n(c),
                l = n("zm9w");

            function u(e, t) {
                if (s.a.isArray(e)) {
                    var n = s()(e).map(function(e) {
                        return function(e, t) {
                            var n, r;
                            return n = s()(e).map(function(e, n) {
                                var a = !1;
                                return n.match(/^\!/) && (a = !0, n = n.replace(/^\!/, "")), s.a.isArray(e) || (e = [e]), e = s()(e).map(function(e) {
                                    return e + ""
                                }), r = s()(e).include(t[n] + ""), a ? !r : r
                            }), s()(n).inject(function(e, t) {
                                return e || t
                            }, n[0])
                        }(e, t)
                    });
                    return s()(n).inject(function(e, t) {
                        return e && t
                    }, n[0])
                }
            }
            r = {
                number: function(e) {
                    return e = Object(a.a)({
                        precision: 0
                    }, e), l.a.format_number(e.value, s.a.omit(e, "format", "value"))
                },
                distance_date: function(e) {
                    return l.a.time_ago_in_words(e.value)
                }
            };
            var d = function(e) {
                var t, n = e.data("format");
                t = (n = e.data("format")) && "function" == typeof r[n] ? r[n](e.data()) : e.data("value"), e.html(t)
            };

            function m(e, t, n) {
                i()(e).find("." + t + n.id).each(function(e, t) {
                    ! function(e, t) {
                        var n, r, a = "",
                            o = i()(e),
                            c = o.data("conditions"),
                            s = o.attr("itemprop");
                        void 0 !== s ? a = s.match(/\[(\w*)\]/)[1] : o.data("attr") && (a = o.data("attr")), void 0 !== c ? ("string" == typeof c && (c = JSON.parse(c)), n = (r = u(c, t)) ? JSON.parse(o.data("render")) : "", o.data("evaluation") !== r && (o.html(n), o.data("evaluation", r), n.length && m(o, "Project", t))) : void 0 !== a && void 0 !== t[a] && (o.data("value", t[a]), o.attr("data-value", t[a]), d(o))
                    }(t, n)
                })
            }
            var f = function(e, t) {
                m(document, e, t)
            };

            function p(e) {
                this.template = e, this.conditions = []
            }

            function h(e) {
                var t;
                return "string" == typeof e && ((t = {})[e] = !0, e = t), e
            }
            p.prototype.if = function(e) {
                return this.condition("and", !0, e), this
            }, p.prototype.and = p.prototype.if, p.prototype.if_not = function(e) {
                return this.condition("and", !1, e), this
            }, p.prototype.unless = p.prototype.if_not, p.prototype.and_not = p.prototype.if_not, p.prototype.or = function(e) {
                return this.condition("or", !0, e), this
            }, p.prototype.or_not = function(e) {
                return this.condition("or", !1, e), this
            }, p.prototype.then = function() {
                var e = this;
                return function() {
                    return function(t, n) {
                        return e.value = n(t), e.html()
                    }
                }
            }, p.prototype.condition = function(e, t, n) {
                var r, a;
                return s.a.isObject(n) || ((r = {})[n] = !0, n = r), !1 === t && s.a.each(s()(n).keys(), function(e) {
                    n["!" + e] = n[e], delete n[e]
                }), "or" === e ? (a = h(this.conditions[this.conditions.length - 1]), n = h(n), this.conditions[this.conditions.length - 1] = i.a.extend(!0, a, n)) : "and" === e && this.conditions.push(n), this
            }, p.prototype.evaluation = function() {
                return void 0 === this.cached_evaluation && (this.cached_evaluation = u(this.conditions, this.template.proxy)), this.cached_evaluation
            }, p.prototype.content = function() {
                return this.evaluation() ? this.value : ""
            }, p.prototype.html = function() {
                var e = i()("<data>");
                return e.attr(this.html_options()), e.html(this.content()), e[0].outerHTML
            }, p.prototype.html_options = function() {
                return {
                    class: this.template.class_name,
                    "data-conditions": JSON.stringify(this.conditions),
                    "data-render": JSON.stringify(this.value),
                    "data-evaluation": u
                }
            }
        },
        XM0S: function(e, t, n) {
            "use strict";
            var r = n("1OyB"),
                a = n("md7G"),
                o = n("foSv"),
                i = n("Ji7U"),
                c = n("kHIg"),
                s = n("+DSo");
            Object(c.a)(Error);
            t.a = function(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = Object(s.c)(e, t, r);
                return void 0 === a && (a = Object(s.d)(t), console.warn("I18n key is missing: ", t)), "string" == typeof a && (n = r, a = a.replace(s.a, function(e, t) {
                    return null == n[t] ? e : n[t]
                }).replace(s.b, function(e, t) {
                    return null == n[t] ? e : n[t]
                })), a
            }
        },
        aNAf: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("o3IG");

            function a() {
                return Object(r.b)("ios_mp_distinct_id") || Object(r.b)("vis") || Object(r.c)("vis", [Math.floor(1e20 * Math.random()).toString(16).slice(0, 16), Math.floor(1e20 * Math.random()).toString(16).slice(0, 16), Math.floor(1e20 * Math.random()).toString(16).slice(0, 16)].join("-") + "v1", new Date(2025, 12, 31), "/")
            }
        },
        arGM: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "c", function() {
                return u
            }), n.d(t, "b", function() {
                return d
            });
            var r = n("vpQ4"),
                a = n("eEls"),
                o = n("g84z"),
                i = n("z0kN"),
                c = function(e) {
                    return Object.keys(e).map(function(t) {
                        return [t, e[t]].map(encodeURIComponent).join("=")
                    }).sort().join("&")
                },
                s = Object(a.a)(Object(i.a)("?"), c),
                l = function(e) {
                    return function(t) {
                        return d(t, {
                            ref: e
                        })
                    }
                },
                u = function e(t) {
                    var n = t.ref,
                        r = t.truncate,
                        a = void 0 !== r && r,
                        o = t.clean,
                        i = void 0 !== o && o;
                    return Array.isArray(n) ? (a && n.push(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30;
                        return e.substring(0, t - 1).replace(/\-$/, "")
                    }(n.pop())), n = n.join("-")) : e({
                        ref: [n],
                        truncate: a,
                        clean: i
                    }), l(i ? function(e) {
                        return e.toLowerCase().replace(/[^a-zA-Z0-9\s-_]/g, "").replace(/[\s|_]/g, "-").replace(/--+/g, "-").replace(/-$/, "")
                    }(n) : n)
                },
                d = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    e = e || "";
                    var i = Object(o.a)(e),
                        s = e.split("?").shift(),
                        l = Object(r.a)({}, i, t);
                    return [
                        [a.noBaseEncode ? s : encodeURI(s), c(l)].filter(Boolean).join("?"), n ? encodeURI(n) : null
                    ].filter(Boolean).join("#")
                }
        },
        bbO9: function(e, t, n) {
            "use strict";
            var r = n("+2Rf"),
                a = n.n(r),
                o = n("0VSk");
            a()(function() {
                if ("undefined" != typeof ga && (ga("create", analytics_vars.google_analytics_id, "auto"), a()("#project_category").length && ga("set", "dimension1", a()("#project_category").attr("data-project-category")), ga("set", "dimension2", analytics_vars.logged_in), ga("set", "dimension3", analytics_vars.social_user), a()("#projects_show").length && ga("set", "dimension4", a()("#about").attr("data-project-state")), ga("set", "dimension5", o.default.browser_language), ga("set", "dimension6", o.default.chosen_language), ga("set", "dimension7", o.default.calculated_language), ga("set", "dimension8", o.default.display_language), "undefined" == typeof ga_pageview_sent)) {
                    window.ga_pageview_sent = !0;
                    try {
                        ga("send", "pageview")
                    } catch (e) {}
                }
            })
        },
        "c6/r": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var r = n("4LGs"),
                a = {
                    "&#39;": "'",
                    "&#96;": "`",
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#x27;": "'",
                    "&#x60;": "`",
                    "&#x2F;": "/",
                    "\u2028": " ",
                    "\u2029": " "
                },
                o = function(e) {
                    return Object(r.a)(a, e)
                }
        },
        eEls: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "d", function() {
                return i
            });
            var r = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.reduce(function(e, t) {
                        return function() {
                            return e(t.apply(void 0, arguments))
                        }
                    })
                },
                a = function(e) {
                    return function() {
                        return e
                    }
                },
                o = function(e) {
                    return e
                },
                i = function() {}
        },
        g84z: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("ODXe"),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href;
                    return e && "" !== e && "?" !== e && (e.includes("#") || e.includes("?")) ? (e.includes("?") && (e = e.split("?").pop()), (e = /^[?#]/.test(e) ? e.slice(1) : e).includes("#") && (e = e.split("#")[0]), e.split("&").reduce(function(e, t) {
                        var n = t.split("="),
                            a = Object(r.a)(n, 2),
                            o = a[0],
                            i = a[1];
                        return e[decodeURIComponent(o)] = i ? decodeURIComponent(i.replace(/\+/g, " ")) : "", e
                    }, {})) : {}
                }
        },
        gHiG: function(e, t, n) {
            "use strict";
            var r = n("KQm4"),
                a = n("vpQ4"),
                o = n("0fse"),
                i = n("eEls"),
                c = n("arGM"),
                s = n("NSfo"),
                l = n("SmhT"),
                u = n("xAX6"),
                d = n("n+nq");
            n.d(t, "d", function() {
                return f
            }), n.d(t, "e", function() {
                return p
            }), n.d(t, "f", function() {
                return h
            }), n.d(t, "h", function() {
                return g
            }), n.d(t, "i", function() {
                return b
            }), n.d(t, "j", function() {
                return v
            }), n.d(t, "c", function() {
                return C
            }), n.d(t, "g", function() {
                return y
            }), n.d(t, "a", function() {
                return _
            });
            var m = function(e) {
                    return {
                        type: "ES_SEARCH_FAILED",
                        error: e
                    }
                },
                f = function(e) {
                    return {
                        type: "ES_SEARCH_STARTED",
                        term: e
                    }
                },
                p = function(e) {
                    return {
                        type: "HIGHLIGHT_CHILD",
                        index: e
                    }
                },
                h = function(e, t) {
                    return {
                        type: "ON_VALID_KEYDOWN",
                        key: e,
                        resultsList: t
                    }
                },
                g = function(e, t, n, r) {
                    return {
                        type: "RESULT_SELECTED",
                        value: e,
                        trackingData: t,
                        newTab: n,
                        newWindow: r
                    }
                },
                b = function(e, t) {
                    return {
                        type: "SEARCH_INPUT_CHANGED",
                        term: e,
                        searchAction: t
                    }
                },
                v = function() {
                    return {
                        type: "SEARCH_INPUT_FOCUS"
                    }
                },
                C = function(e) {
                    return {
                        type: "DO_SUGGESTED_TERM",
                        term: e
                    }
                },
                y = function() {
                    return {
                        type: "OPEN_SEARCH"
                    }
                },
                _ = function() {
                    return {
                        type: "CLOSE_SEARCH"
                    }
                },
                E = function(e, t, n) {
                    var r = e.dropdown,
                        i = r.currentIndex,
                        s = r.isOpen;
                    switch (t) {
                        case l.d:
                            return Object(o.f)(Object(a.a)({}, e, {
                                term: ""
                            }), o.a.action(e.term.length ? {
                                type: "ES_SEARCH_CLEARED"
                            } : _()));
                        case l.b:
                            var d = function(e, t) {
                                for (null === e ? e = 0 : e++; e < t.length && !t[e].selectable;) e++;
                                return e >= t.length && (e = null), e
                            }(i, n);
                            return Object(a.a)({}, e, {
                                dropdown: Object(a.a)({}, r, {
                                    isOpen: !0,
                                    currentIndex: d
                                })
                            });
                        case l.n:
                            if (!s) return e;
                            var m = function(e, t) {
                                for (null === e ? e = t.length - 1 : e--; e >= 0 && !t[e].selectable;) e--;
                                return e <= 0 && (e = null), e
                            }(i, n);
                            return Object(a.a)({}, e, {
                                dropdown: Object(a.a)({}, r, {
                                    currentIndex: m
                                })
                            });
                        case l.c:
                            var f = null === i && n.length > 1 && n[1].selectable;
                            if (!s || !n || 0 === n.length || i && !n[i].selectable || !f && null === i) return e;
                            var p = null === i ? Object(c.b)(u.e, {
                                ref: "nav_search",
                                term: e.term
                            }) : n[i].value;
                            return Object(o.f)(Object(a.a)({}, e, {
                                dropdown: Object(a.a)({}, r, {
                                    isOpen: !1
                                })
                            }), o.a.action(g(p)));
                        default:
                            return e
                    }
                },
                w = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = document.documentElement;
                    e ? t.classList.add("clip") : t.classList.remove("clip")
                },
                k = function() {
                    Object(r.a)(document.getElementsByClassName("js-toggle-search-gs")).forEach(function(e) {
                        e.click()
                    })
                },
                j = function(e) {
                    return Promise.all([fetch("".concat("/projects/search.json?ref=nav_search", "&term=").concat(e), {
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-Token": Object(d.b)(document)
                        }
                    }), fetch("".concat("/discover/creators.json?ref=nav_search", "&term=").concat(e), {
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-Token": Object(d.b)(document)
                        }
                    })]).then(L).then(function(e) {
                        return Promise.all([e[0].json(), e[1].json()])
                    }).then(function(e) {
                        return {
                            projects: e[0],
                            users: e[1].results
                        }
                    }).then(function(t) {
                        return function(e, t) {
                            return {
                                type: "ES_SEARCH_COMPLETED",
                                results: e,
                                term: t
                            }
                        }(t, e)
                    }).catch(function(e) {
                        return m(e)
                    })
                },
                O = function() {
                    return fetch("".concat("/projects/search.json?ref=nav_search&sort=popularity"), {
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-Token": Object(d.b)(document)
                        }
                    }).then(function(e) {
                        return [e]
                    }).then(L).then(function(e) {
                        return e[0].json()
                    }).then(function(e) {
                        return {
                            type: "RESOLVE_POPULAR_PROJECTS",
                            popularProjects: e
                        }
                    }).catch(function(e) {
                        return m(e)
                    })
                },
                x = function(e) {
                    clearTimeout(e)
                },
                L = function(e) {
                    return e.forEach(function(e) {
                        if (!e.ok) throw Error(e.statusText)
                    }), e
                },
                N = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    t ? window.open(e) : n ? window.open(e, "_blank") : window.location.replace(e)
                },
                M = function(e) {
                    var t = document.getElementsByClassName(e);
                    setTimeout(function() {
                        return t[0] && t[0].focus()
                    }, 0)
                };
            t.b = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        intervalId: 0,
                        busy: !1,
                        term: "",
                        results: null,
                        noResults: !1,
                        popularProjects: null,
                        error: null,
                        searchOpen: !1,
                        dropdown: {
                            isOpen: !0,
                            currentIndex: null
                        }
                    },
                    t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                    case "ES_SEARCH_STARTED":
                        return Object(o.f)(Object(a.a)({}, e, {
                            busy: !0
                        }), o.a.run(j, {
                            args: [t.term],
                            successActionCreator: i.c,
                            failActionCreator: i.c
                        }));
                    case "ES_SEARCH_CLEARED":
                        return Object(o.f)(Object(a.a)({}, {
                            intervalId: 0,
                            busy: !1,
                            term: "",
                            results: null,
                            noResults: !1,
                            popularProjects: null,
                            error: null,
                            searchOpen: !1,
                            dropdown: {
                                isOpen: !0,
                                currentIndex: null
                            }
                        }, {
                            searchOpen: !0
                        }), o.a.run(w, {
                            args: [!1]
                        }));
                    case "ES_SEARCH_COMPLETED":
                        var n = t.results,
                            r = n && e.dropdown.isOpen,
                            c = n.projects.total_hits + n.users.length,
                            l = n.projects.suggestion && n.projects.suggestion !== e.term,
                            d = [o.a.run(w, {
                                args: [r]
                            }), o.a.action(Object(s.b)("Returned Search Results", {
                                number_of_results: c,
                                auto_suggest: l
                            }))];
                        return 0 === c && null === e.popularProjects && d.push(o.a.run(O, {
                            successActionCreator: i.c,
                            failActionCreator: i.c
                        })), Object(o.f)(Object(a.a)({}, e, {
                            busy: !1,
                            results: {
                                users: n.users,
                                projects: n.projects.projects,
                                categories: n.projects.term_categories,
                                total_hits: n.projects.total_hits,
                                suggestion: n.projects.suggestion
                            },
                            noResults: 0 === c,
                            error: null
                        }), o.a.list(d, {
                            batch: !0
                        }));
                    case "ES_SEARCH_FAILED":
                        return Object(a.a)({}, e, {
                            busy: !1,
                            error: t.error
                        });
                    case "ES_START_INTERVAL":
                        return Object(o.f)(Object(a.a)({}, e, {
                            intervalId: t.intervalId
                        }), o.a.run(x, {
                            args: [e.intervalId]
                        }));
                    case "HIGHLIGHT_CHILD":
                        var m = e.dropdown,
                            p = t.index;
                        return Object(a.a)({}, e, {
                            dropdown: Object(a.a)({}, m, {
                                currentIndex: p
                            })
                        });
                    case "ON_VALID_KEYDOWN":
                        return E(e, t.key, t.resultsList);
                    case "RESULT_SELECTED":
                        var h = e.oldDropdown,
                            g = e.term;
                        return Object(o.f)(Object(a.a)({}, e, {
                            dropdown: Object(a.a)({}, h, {
                                isOpen: t.newTab || t.newWindow
                            })
                        }), o.a.list([o.a.run(N, {
                            args: [t.value, t.newTab, t.newWindow]
                        }), o.a.action(Object(s.b)("Clicked Search Result", Object(a.a)({}, t.trackingData, {
                            discover_term: g
                        })))], {
                            batch: !0
                        }));
                    case "SEARCH_INPUT_CHANGED":
                        var b = t.term,
                            v = t.searchAction,
                            C = e.results,
                            y = b.trim().replace(/ +(?= )/g, ""),
                            _ = encodeURIComponent(y);
                        return C && (C.projects.suggestion = null), y.length > u.d ? Object(o.f)(Object(a.a)({}, e, {
                            term: b,
                            results: C
                        }), o.a.action({
                            type: "ES_START_INTERVAL",
                            intervalId: setTimeout(function() {
                                return v(_)
                            }, 400)
                        })) : Object(a.a)({}, e, {
                            term: b,
                            results: null,
                            error: null
                        });
                    case "SEARCH_INPUT_FOCUS":
                        var L = e.results,
                            S = e.dropdown,
                            I = L && S.isOpen;
                        return Object(o.f)(Object(a.a)({}, e, {
                            dropdown: Object(a.a)({}, S, {
                                isOpen: !0
                            })
                        }), o.a.run(w, {
                            args: [I]
                        }));
                    case "DO_SUGGESTED_TERM":
                        return Object(o.f)(Object(a.a)({}, e, {
                            term: t.term
                        }), o.a.list([o.a.action(f(t.term)), o.a.action(Object(s.b)("Clicked Auto Suggest"))], {
                            batch: !0
                        }));
                    case "RESOLVE_POPULAR_PROJECTS":
                        var T = t.popularProjects;
                        return Object(a.a)({}, e, {
                            popularProjects: T.projects
                        });
                    case "OPEN_SEARCH":
                        return Object(o.f)(Object(a.a)({}, e, {
                            searchOpen: !0
                        }), o.a.list([o.a.run(M, {
                            args: ["js-search-term-gs"]
                        }), o.a.action(Object(s.b)("Clicked Search Bar"))]));
                    case "CLOSE_SEARCH":
                        return Object(o.f)(Object(a.a)({}, e, {
                            searchOpen: !1
                        }), o.a.list([o.a.run(w, {
                            args: [!1]
                        }), o.a.run(k)], {
                            batch: !0
                        }));
                    default:
                        return e
                }
            }
        },
        gN63: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            }), n.d(t, "b", function() {
                return u
            }), n.d(t, "c", function() {
                return d
            }), n.d(t, "e", function() {
                return m
            }), n.d(t, "f", function() {
                return f
            }), n.d(t, "d", function() {
                return p
            });
            var r = n("vpQ4"),
                a = n("gCJq"),
                o = n("n+nq"),
                i = n("PhMr"),
                c = n("0RKZ"),
                s = function(e) {
                    return l(e)[1]
                },
                l = function(e) {
                    var t = atob(e).split("-");
                    if (2 == t.filter(String).length) return t;
                    throw new Error("Invalid GraphQL RelayId")
                },
                u = function(e, t) {
                    return Object(c.a)("".concat(e, "-").concat(t))
                },
                d = function(e, t, n) {
                    return m(e, t, n)
                },
                m = function(e, t, n) {
                    return function(e) {
                        return e && "string" != typeof e && "Document" === e.kind
                    }(e) && (e = Object(a.print)(e)), fetch("/graph", {
                        method: "POST",
                        body: JSON.stringify(Object(r.a)({
                            query: e,
                            variables: t
                        }, n)),
                        credentials: "same-origin",
                        headers: {
                            "X-CSRF-Token": Object(o.b)(document),
                            "Content-Type": "application/json"
                        }
                    }).then(function(e) {
                        return 200 == e.status ? Promise.resolve(e) : Promise.reject(new Error(e.statusText))
                    }).then(Object(i.a)("json"))
                },
                f = function(e, t) {
                    return new Promise(function(n, r) {
                        m(e, t, {}).then(function(e) {
                            e.errors ? r(e.errors) : n(e.data)
                        }).catch(function(e) {
                            return r(e)
                        })
                    })
                },
                p = function(e, t, n) {
                    return m(e, t, n)
                }
        },
        itcf: function(e, t, n) {
            "use strict";
            var r = n("yQm5"),
                a = n.n(r),
                o = function(e) {
                    return "undefined" != typeof api_oauth_token ? a()(e).addQuery("oauth_token", api_oauth_token).toString() : e
                };
            window.oauth_url = o, t.a = o
        },
        jX8l: function(e, t) {
            window.KSR = window.KSR || {}, window.KSR.store = window.KSR.store || {};
            var n = {};
            window.KSR.store.isSupported = function() {
                try {
                    var e = "storagetest",
                        t = window.localStorage;
                    return t.setItem(e, "1"), t.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            }, window.KSR.store.getItem = function(e) {
                return window.KSR.store.isSupported() ? window.localStorage.getItem.apply(window.localStorage, arguments) : e in n ? n[e] : null
            }, window.KSR.store.removeItem = function(e) {
                window.KSR.store.isSupported() ? window.localStorage.removeItem.apply(window.localStorage, arguments) : delete n[e]
            }, window.KSR.store.setItem = function(e, t) {
                window.KSR.store.isSupported() ? window.localStorage.setItem.apply(window.localStorage, arguments) : n[e] = String(t)
            }
        },
        "l+V7": function(e, t, n) {
            "use strict";
            var r = n("+2Rf"),
                a = n.n(r),
                o = n("SmhT");
            n("+ZuA");
            a()(function() {
                a.a.fn.aria_set_visible = function() {
                    return a()(this).attr("aria-expanded", "true").attr("aria-hidden", "false"), this
                }, a.a.fn.aria_set_hidden = function() {
                    return a()(this).attr("aria-expanded", "false").attr("aria-hidden", "true"), this
                }, a.a.fn.aria_find_focusable_items = function() {
                    return a()(this).find(":focusable")
                }, a.a.fn.aria_focus_first_element = function() {
                    var e = a()(this).aria_find_focusable_items();
                    return e.length && e[0].focus(), this
                }, a.a.fn.aria_activate_keyboard_tabindex = function() {
                    var e = a()(this),
                        t = e.aria_find_focusable_items();
                    return t.length && e.on("keydown.aria_keyboard", function(n) {
                        e.aria_focus_next(n, t)
                    }), this
                }, a.a.fn.aria_deactivate_keyboard_tabindex = function() {
                    return a()(this).unbind("keydown.aria_keyboard"), this
                }, a.a.fn.aria_focus_next = function(e, t) {
                    var n = e.keyCode,
                        r = n === o.n || n === o.b,
                        i = a()(":focus")[0],
                        c = a.a.inArray(i, t);
                    if (-1 !== c && ("textarea" !== i.tagName.toLowerCase() || !r)) {
                        var s;
                        if (n === o.m || r) e.preventDefault(), void 0 !== (s = e.shiftKey || n === o.n ? a()(t[c - 1]) : a()(t[c + 1])) && s.focus();
                        return this
                    }
                }
            })
        },
        "n+nq": function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return a
            }), n.d(t, "a", function() {
                return o
            });
            var r = n("MgNI"),
                a = function(e) {
                    return r.maybe.fromNullable(e.querySelector('meta[name="csrf-token"]')).chain(function(e) {
                        return r.maybe.fromNullable(e.getAttribute("content"))
                    }).getOrElse("")
                },
                o = function(e) {
                    return {
                        "X-CSRF-Token": a(e)
                    }
                }
        },
        o3IG: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return c
            }), n.d(t, "c", function() {
                return s
            }), n.d(t, "a", function() {
                return l
            });
            var r = n("ODXe"),
                a = n("MgNI"),
                o = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return ["".concat(e, "=").concat(encodeURIComponent(t)), i(n), "path=/"].filter(function(e) {
                        return e
                    }).join("; ")
                },
                i = function(e) {
                    return a.maybe.fromNullable(e).map(function(e) {
                        return "expires=".concat(e.toGMTString())
                    }).getOrElse(null)
                },
                c = function(e) {
                    return function(e, t) {
                        return t.split(/; */).map(function(e) {
                            return e.split("=")
                        }).reduce(function(t, n) {
                            var a = Object(r.a)(n, 2),
                                o = a[0],
                                i = a[1];
                            return o == e ? decodeURIComponent(i) : t
                        }, null)
                    }(e, document.cookie)
                },
                s = function(e, t, n) {
                    return document.cookie = o(e, t || "", n ? new Date(n) : null)
                },
                l = function(e) {
                    return document.cookie = function(e) {
                        return o(e, "", new Date(0))
                    }(e)
                };
            "undefined" != typeof window && (window.read_cookie = c, window.write_cookie = s, window.destroy_cookie = l)
        },
        qcI4: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return l
            }), n.d(t, "d", function() {
                return u
            }), n.d(t, "e", function() {
                return d
            }), n.d(t, "f", function() {
                return m
            }), n.d(t, "g", function() {
                return f
            });
            var r = n("a+N5"),
                a = n.n(r),
                o = n("itcf"),
                i = n("XLBa"),
                c = n("qtWx").a.extend();
            c.on_initialize(function() {
                this.data.id && (this.constructor.records[this.data.id] = this)
            }), a.a.extend(c, {
                records: {},
                find: function(e) {
                    var t = this;
                    return a.a.isArray(e) ? a.a.compact(a.a.map(e, function(e) {
                        return t.records[e]
                    })) : this.records[e]
                },
                every: function(e) {
                    a.a.each(this.records, e), this.listen("new", function(t) {
                        e.call(this, t.new)
                    })
                },
                has: function(e, t) {
                    if (void 0 === this.prototype["has_" + e]) {
                        var n = t.through;
                        this.prototype[e] = [], this.on_initialize(function() {
                            this.on_change(e + "_fetched", function(t) {
                                var r = t[e + "_fetched"] || [],
                                    o = this[e],
                                    i = a.a.compact(a.a.map(r, function(e) {
                                        if (e && e.id && !a.a.include(o, e.id)) return new window[n](e).get("id")
                                    }));
                                this["set_" + e](a.a.union(o, i))
                            })
                        }), this.prototype["get_" + e] = function() {
                            return window[n].find(this[e])
                        }, this.prototype["has_" + e] = function(t) {
                            return (t = r(t)).length && 0 === a()(this[e]).difference(t).length
                        }, this.prototype["add_" + e] = function(t) {
                            t = r(t), (t = a()(t).difference(this[e])).length && this["set_" + e](a.a.union(this[e], t))
                        }, this.prototype["remove_" + e] = function(t) {
                            t = r(t), (t = a()(t).intersection(this[e])).length && this["set_" + e](a()(this[e]).difference(t))
                        }, this.prototype["set_" + e] = function(t) {
                            if (t = r(t), !a.a.isEqual(a.a.clone(t).sort(), a.a.clone(this[e]).sort())) {
                                this[e] = t;
                                var n = {};
                                n[e] = t, this._broadcast(n)
                            }
                        }
                    }

                    function r(e) {
                        return "object" != typeof e ? e = [e] : e.get && (e = [e.get("id")]), e
                    }
                }
            });
            var s = c.extend(),
                l = c.extend(),
                u = c.extend(),
                d = c.extend(),
                m = c.extend(),
                f = c.extend();
            d.on_initialize(function() {
                "function" == typeof i.a && this.on_change(function() {
                    Object(i.a)("Project", this.get())
                })
            }), d.has("creator", {
                through: "User"
            }), d.has("backers", {
                through: "User"
            }), d.set_computed_value("usd_pledged", function() {
                return this.pledged * this.static_usd_rate
            }, {
                changes_on: ["pledged"]
            }), d.set_computed_value("convert_pledged", function() {
                return this.pledged * this.fx_rate
            }, {
                changes_on: ["pledged"]
            }), m.has("created_projects", {
                through: "Project"
            }), m.has("backed_projects", {
                through: "Project"
            }), m.has("backings", {
                through: "Backing"
            }), m.prototype.api_url = function(e, t) {
                var n = this.get("urls").api.user;
                if (n) return "string" == typeof e && (n = n.replace(/([^\?]*)(.*)/, function(t, n, r) {
                    return n + "/" + e + r
                })), (t || void 0 === t && !0 === e) && api_oauth_token && (n = Object(o.a)(n).replace(/http:/, "https:")), n
            }, u.on_initialize(function() {
                "function" == typeof i.a && this.on_change(function() {
                    Object(i.a)("Comment", this.get())
                })
            }), l.set_computed_value("net_amount", function() {
                return this.amount - this.shipping_amount
            }, {
                changes_on: ["shipping_amount", "amount"]
            })
        },
        qtWx: function(e, t, n) {
            "use strict";
            var r = n("a+N5"),
                a = n.n(r),
                o = n("+2Rf"),
                i = n.n(o);

            function c() {}
            c.prototype.initialize = function() {}, c.extend = function(e) {
                var t = function() {
                    this.initialize.apply(this, arguments)
                };
                for (var n in this) this.hasOwnProperty(n) && (a.a.isFunction(this[n]) ? t[n] = this[n] : t[n] = a.a.clone(this[n]));

                function r() {
                    this.constructor = t
                }
                return r.prototype = this.prototype, t.prototype = new r, t.__super__ = this.prototype, e && (t.prototype.initialize = e), t
            };
            var s = c.extend(function(e) {
                var t = this,
                    n = arguments;
                this.data = {}, e && this.set(e), a.a.each(this.constructor.initializers, function(e) {
                    e.apply(t, n)
                }), this.data.id && this.constructor.records && (this.constructor.records[this.data.id] = this), this.constructor._broadcast({
                    new: this.data
                })
            });
            s._computed_values = {}, a.a.extend(s, {
                listen: function(e, t) {
                    var n = this;
                    if (a.a.isObject(e) && a.a.each(e, function(e, t) {
                            n.listen(t, e)
                        }), void 0 === this.listeners && (this.listeners = {}), void 0 === this.listeners._global && (this.listeners._global = []), "function" != typeof e) return void 0 === this.listeners[e] && (this.listeners[e] = []), this.listeners[e].push(t), this;
                    this.listeners._global.push(e)
                },
                _broadcast: function(e, t, n) {
                    var r;
                    void 0 === this.listeners && (this.listeners = {}), void 0 === this.listeners._global && (this.listeners._global = []);
                    var o = this;
                    if (t = t || "", a.a.each(a.a.keys(e), function(r) {
                            "object" != typeof e[r] || null === e[r] || a.a.isArray(e[r]) || o._broadcast(e[r], t + r + ".", n), void 0 !== o.listeners[t + r] && a.a.each(o.listeners[t + r], function(t) {
                                t.call(o, e, n)
                            })
                        }), !t)
                        for (r = 0; r < this.listeners._global.length; r += 1) this.listeners._global[r].call(this, e, n)
                },
                on_initialize: function(e) {
                    void 0 === this.initializers && (this.initializers = []), this.initializers.push(e)
                },
                get_computed_values: function() {
                    return this._computed_values
                },
                set_computed_value: function(e, t, n) {
                    var r = this;
                    this._computed_values[e] = t, n && a.a.isArray(n.changes_on) && a.a.each(n.changes_on, function(t) {
                        r.prototype.on_change(t, function() {
                            var t = {};
                            t[e] = this.get(e), this._broadcast(t)
                        })
                    })
                }
            }), s.prototype.on_change = s.prototype.listen = s.listen, s.prototype.change = function() {
                this._broadcast({})
            }, s.prototype._broadcast = s._broadcast, s.prototype.set = function(e, t, n) {
                var r, o;
                return "object" == typeof e ? (r = e, n = t) : r = "string" == typeof e ? function e(t, n) {
                    var r = {},
                        a = t.shift();
                    return t.length ? r[a] = e(t, n) : r[a] = n, r
                }(e.split("."), t) : {}, n || (n = {}), o = function e(t, n) {
                    var r = {};
                    for (var a in n) n.hasOwnProperty(a) && ("object" == typeof n[a] && null !== n[a] ? r[a] = t ? e(t[a], n[a]) : n[a] : t && t[a] === n[a] || (r[a] = n[a]));
                    return r
                }(this.data, r), n.overwrite ? this.data = a.a.extend(this.data, r) : this.data = i.a.extend(!0, this.data, r), void 0 !== n.silent && n.silent || this._broadcast(o, void 0, n), this
            }, s.prototype.replace = function(e, t, n) {
                return (n = n || {}).silent = !0, this.set(e, null, n), delete n.silent, this.set(e, t, n)
            }, s.prototype.get = function(e) {
                if ("string" == typeof e) {
                    if ("function" == typeof this.constructor.get_computed_values()[e]) return this.constructor.get_computed_values()[e].call(this.data);
                    var t = e.split("."),
                        n = this.data;
                    return a.a.each(t, function(e) {
                        n = n[e]
                    }), a.a.clone(n)
                }
                return i.a.extend(!0, {}, this.data, this.compute_values())
            }, s.prototype.compute_values = function() {
                var e = this.data,
                    t = {};
                return a.a.each(this.constructor.get_computed_values(), function(n, r) {
                    t[r] = n.call(e)
                }), t
            };
            t.a = s
        },
        qthe: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var r = n("wfJQ"),
                a = n("q1tI"),
                o = n.n(a),
                i = function(e) {
                    var t = e.customEmojiClasses,
                        n = e.customWrapperClasses,
                        a = void 0 === n ? "" : n,
                        i = e.emoji,
                        c = e.showEmojiPlusText,
                        s = e.children;
                    return Object(r.a)() ? c ? o.a.createElement("div", {
                        className: "flex items-center ".concat(a)
                    }, o.a.createElement("span", {
                        className: "".concat(t)
                    }, i), s) : o.a.createElement("span", {
                        className: "".concat(t)
                    }, i) : s
                }
        },
        wfJQ: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var r = n("NxQb"),
                a = function() {
                    return Object(r.a)("emoji_locale") && "emojilocale" === localStorage.getItem("ksr10locale")
                }
        },
        xAX6: function(e, t, n) {
            "use strict";
            n.d(t, "e", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            }), n.d(t, "b", function() {
                return i
            }), n.d(t, "d", function() {
                return c
            });
            var r = "/discover/advanced",
                a = "/discover/categories",
                o = 3,
                i = 5,
                c = 2
        },
        xIVL: function(e, t, n) {
            "use strict";
            var r = n("KQm4"),
                a = n("wx14"),
                o = n("vpQ4"),
                i = n("q1tI"),
                c = n.n(i),
                s = n("/IHD"),
                l = function() {
                    var e = document.getElementsByClassName("js-search-term-gs");
                    if (e.length > 0) {
                        var t = e[0].getBoundingClientRect().bottom;
                        return window.innerHeight - t
                    }
                    return 0
                },
                u = n("LtMG"),
                d = n("SmhT"),
                m = n("gHiG"),
                f = function(e) {
                    var t = e.placeholder,
                        n = e.searchBusy,
                        r = e.dispatch,
                        a = e.tabIndex,
                        o = e.results,
                        i = e.searchTerm,
                        s = e.state,
                        l = e.searchAction,
                        f = e.searchHeight,
                        p = o.map(function(e) {
                            return e.component
                        }),
                        h = s.isOpen && o.length > 0,
                        g = n ? c.a.createElement("div", {
                            className: "inline-block z-dropdown-2 relative"
                        }, c.a.createElement("div", {
                            className: "w6 h10 flex items-center justify-center"
                        }, c.a.createElement(u.f, {
                            name: "icon--circle-loader",
                            size: "large",
                            atoms: ["fill-soft-black"]
                        }))) : null;
                    return c.a.createElement("div", {
                        className: "relative"
                    }, c.a.createElement("div", {
                        className: "p0 flex z-dropdown-3 relative shadow-2 items-center"
                    }, c.a.createElement("input", {
                        className: "border-box keyboard-focusable no-outline h13 h11-md medium z-dropdown-3 w100p relative no-radius pl4 pl7-md type-18 inline-block border-none shadow-none js-search-term-gs",
                        type: "text",
                        tabIndex: a,
                        placeholder: t,
                        value: i,
                        onFocus: function() {
                            return r(Object(m.j)())
                        },
                        onChange: function(e) {
                            return r(Object(m.i)(e.target.value, l))
                        },
                        onKeyDown: function(e) {
                            [d.b, d.d, d.n, d.c].includes(e.which) && (e.preventDefault(), r(Object(m.f)(e.which, o)))
                        }
                    }), g, c.a.createElement("div", {
                        className: "inline-block z-guided-search-3 relative"
                    }, c.a.createElement("button", {
                        className: "p0 flex justify-center items-center w7 w10-md h10 bg-white mr3-md keyboard-focusable",
                        onClick: function() {
                            return r(Object(m.a)())
                        }
                    }, c.a.createElement(u.f, {
                        name: "icon--cross",
                        size: "medium",
                        atoms: ["hover-fill-ksr-green-500", "fill-soft-black"]
                    })))), c.a.createElement("div", {
                        className: "z-dropdown-3 scroll-y relative webkit-scrolling bg-white",
                        style: {
                            height: h ? f : "0",
                            opacity: h ? "1" : "0",
                            transition: ".3s"
                        }
                    }, c.a.createElement("ul", {
                        className: "mt3 mr0 ml0 mb1 p0 w100p"
                    }, h && p)))
                },
                p = n("0VSk"),
                h = n("1OuE"),
                g = function(e) {
                    return function(e) {
                        if (e >= 864e5) {
                            var t = e / 864e5;
                            return "".concat(Math.floor(t), " ").concat(p.default.t("onloads.page_timer.days_count", {
                                count: t
                            }))
                        }
                        if (e >= 36e5) {
                            var n = e / 36e5;
                            return "".concat(Math.floor(n), " ").concat(p.default.t("onloads.page_timer.hours_count", {
                                count: n
                            }))
                        }
                        if (e >= 6e4) {
                            var r = e / 6e4;
                            return "".concat(Math.floor(r), " ").concat(p.default.t("onloads.page_timer.minutes_count", {
                                count: r
                            }))
                        }
                        var a = e / 1e3;
                        return "".concat(Math.floor(a), " ").concat(p.default.t("onloads.page_timer.seconds_count", {
                            count: 1e3
                        }))
                    }(Math.max(0, 1e3 * e - Date.now()))
                },
                b = function(e) {
                    var t = e.children;
                    return c.a.createElement("div", {
                        className: "type-12"
                    }, c.a.createElement("div", {
                        className: "soft-black inline-block mr1"
                    }, t))
                },
                v = function(e) {
                    var t = e.children,
                        n = e.deadline;
                    return c.a.createElement("div", {
                        className: "type-12"
                    }, c.a.createElement("div", {
                        className: "ksr-green-800 inline-block mr1"
                    }, t), c.a.createElement("div", {
                        className: "soft-black inline-block"
                    }, g(n)))
                },
                C = function(e) {
                    return c.a.createElement("li", {
                        key: "".concat(e, " header")
                    }, c.a.createElement("h3", {
                        className: "mt1 mb1 navy-600 type-14 normal ml4"
                    }, e))
                },
                y = function(e) {
                    var t = e.dispatch,
                        n = e.children,
                        r = e.itemIdx,
                        a = e.value,
                        o = e.trackingData,
                        i = e.className,
                        s = void 0 === i ? "" : i;
                    return c.a.createElement("div", {
                        role: "link",
                        tabIndex: r,
                        className: "type-18 pointer pt2 pb2 pl4 pr4 ".concat(s),
                        onMouseDown: function(e) {
                            return e.preventDefault()
                        },
                        onFocus: function() {
                            return t(Object(m.e)(r))
                        },
                        onMouseOver: function() {
                            return t(Object(m.e)(r))
                        },
                        onClick: function(e) {
                            return t(Object(m.h)(a, o, e.ctrlKey || e.metaKey, e.shiftKey))
                        },
                        onKeyDown: function() {},
                        key: a
                    }, n)
                },
                _ = function(e) {
                    var t, n = e.id,
                        r = e.photo.med,
                        a = e.creator.name,
                        o = e.name,
                        i = e.pledged,
                        s = e.goal,
                        l = e.deadline,
                        u = e.state,
                        d = e.itemIdx,
                        m = e.dispatch,
                        f = e.selected,
                        g = e.value,
                        C = function(e, t, n, r) {
                            switch (e) {
                                case "failed":
                                    return c.a.createElement(b, null, p.default.t("search.Failed_on", {
                                        date: Object(h.a)("LL", 1e3 * t)
                                    }));
                                case "canceled":
                                    return c.a.createElement(b, null, p.default.t("search.Canceled_on", {
                                        date: Object(h.a)("LL", 1e3 * t)
                                    }));
                                case "successful":
                                    return c.a.createElement(b, null, p.default.t("search.Funded", {
                                        date: Object(h.a)("LL", 1e3 * t)
                                    }));
                                default:
                                    return c.a.createElement(v, {
                                        deadline: t
                                    }, 0 == n ? 0 : Math.floor(n / r * 100), "% funded")
                            }
                        }(u, l, i, s),
                        _ = f ? "shadow-2" : "";
                    return t = "live" === u || "successful" === u ? "type-16 soft-black medium mb1_2" : "type-16 dark-grey-500 medium mb1_2", c.a.createElement("li", {
                        className: _
                    }, c.a.createElement(y, {
                        trackingData: {
                            project_id: n,
                            type: "project"
                        },
                        itemIdx: d,
                        value: g,
                        dispatch: m,
                        className: "flex"
                    }, r ? c.a.createElement("img", {
                        className: "mr2 self-start w20 flex-noshrink rounded",
                        src: r,
                        role: "presentation"
                    }) : null, c.a.createElement("div", {
                        className: "flex flex-column"
                    }, c.a.createElement("div", {
                        className: t
                    }, o), c.a.createElement("div", {
                        className: "type-12 soft-black mb1_2 hide block-sm block-md block-lg"
                    }, p.default.t("search.by_creator", {
                        creator: a
                    })), C)))
                },
                E = function(e) {
                    var t = e.id,
                        n = e.avatar.thumb,
                        r = e.name,
                        a = e.itemIdx,
                        o = e.dispatch,
                        i = e.selected,
                        s = e.value,
                        l = i ? "shadow-2" : "";
                    return c.a.createElement("li", {
                        className: l
                    }, c.a.createElement(y, {
                        trackingData: {
                            user_id: t,
                            type: "user"
                        },
                        itemIdx: a,
                        value: s,
                        dispatch: o,
                        className: "flex items-center"
                    }, n ? c.a.createElement("img", {
                        className: "avatar inline-block align-middle circle w6 h6 ml2 mr2 bg-grey-100",
                        src: n,
                        role: "presentation"
                    }) : null, c.a.createElement("div", {
                        className: "flex align-center"
                    }, c.a.createElement("div", null, r))))
                },
                w = function(e) {
                    var t = e.value,
                        n = e.name,
                        r = e.searchTerm,
                        a = e.itemIdx,
                        o = e.dispatch,
                        i = e.selected ? "shadow-2" : "";
                    return c.a.createElement("li", {
                        className: i
                    }, c.a.createElement(y, {
                        trackingData: {
                            type: "category"
                        },
                        itemIdx: a,
                        value: t,
                        dispatch: o
                    }, c.a.createElement("span", {
                        className: "navy-700 medium text-capitalize"
                    }, r), c.a.createElement("span", {
                        className: "dark-grey-500"
                    }, " in ", n)))
                },
                k = function(e) {
                    var t = e.searchCount,
                        n = e.value;
                    return c.a.createElement("li", {
                        key: "SeeMoreResults"
                    }, c.a.createElement(u.b, {
                        href: n,
                        shadow: !0,
                        color: "white",
                        atoms: ["block", "mt3", "ml4", "mr4"]
                    }, p.default.t("search.See_all_results", {
                        count: t
                    })))
                },
                j = function(e) {
                    var t = e.dispatch,
                        n = e.suggestedTerm;
                    return c.a.createElement("li", {
                        key: "NoResults"
                    }, c.a.createElement("div", {
                        className: "mt4 ml4 mr4 mb4"
                    }, c.a.createElement("span", {
                        className: "medium soft-black type-16 block mb1"
                    }, p.default.t("search.We_couldnt_find_results"), " ", n ? c.a.createElement("a", {
                        className: "pointer ksr-green-800",
                        role: "link",
                        tabIndex: 0,
                        onClick: function() {
                            return t(Object(m.c)(n))
                        }
                    }, p.default.t("search.Did_you_mean", {
                        suggestedTerm: n
                    })) : ""), c.a.createElement("span", {
                        className: "dark-grey-500 type-16 regular block"
                    }, p.default.t("search.Change_or_broaden_your_search"))))
                },
                O = n("arGM"),
                x = n("xAX6"),
                L = function(e, t, n, r, i) {
                    return r.slice(0, x.b).map(function(r, s) {
                        var l = 1 + t + s,
                            u = l === n,
                            d = r.urls.web.project.split("?")[0],
                            m = Object(O.b)("".concat(d), Object(o.a)({
                                ref: "nav_search"
                            }, i));
                        return {
                            selectable: !0,
                            value: m,
                            component: c.a.createElement(_, Object(a.a)({
                                key: "project-search-".concat(s),
                                selected: u,
                                itemIdx: l,
                                dispatch: e,
                                value: m
                            }, r))
                        }
                    })
                },
                N = function(e, t) {
                    var n = e.term,
                        i = e.results,
                        s = e.busy,
                        l = e.noResults,
                        u = e.popularProjects;
                    if (!i || n.length < x.d) return null;
                    var d = i.projects,
                        m = i.categories,
                        f = i.users,
                        h = i.suggestion,
                        g = e.results && e.results.total_hits,
                        b = [],
                        v = [],
                        y = [],
                        _ = h && h != n ? h : null;
                    if (m && m.length > 0) {
                        var N = n,
                            M = m.map(function(r, a) {
                                var o = 1 + a,
                                    i = o === e.dropdown.currentIndex,
                                    s = N.trim().toLowerCase() == r.name.toLowerCase(),
                                    l = s ? "All" : N,
                                    u = {
                                        ref: "nav_search",
                                        category_id: r.id
                                    },
                                    d = {
                                        ref: "nav_search",
                                        term: n,
                                        result: "category"
                                    };
                                s || (u.term = N);
                                var m = s ? Object(O.b)("".concat(x.a, "/").concat(r.name.toLowerCase()), d) : Object(O.b)("".concat(x.e), u);
                                return {
                                    selectable: !0,
                                    value: m,
                                    component: c.a.createElement(w, {
                                        key: "category-search-".concat(a),
                                        value: m,
                                        name: r.name,
                                        searchTerm: l,
                                        selected: i,
                                        itemIdx: o,
                                        dispatch: t
                                    })
                                }
                            });
                        b = [{
                            selectable: !1,
                            component: C(p.default.t("search.Categories"))
                        }].concat(Object(r.a)(M))
                    }
                    if (f && f.length > 0) {
                        var S = function(e, t, n, r, i) {
                            return r.slice(0, x.c).map(function(r, s) {
                                var l = 1 + t + s,
                                    u = l === n,
                                    d = r.urls.web.user.split("?")[0],
                                    m = Object(O.b)("".concat(d, "/created"), Object(o.a)({
                                        ref: "nav_search"
                                    }, i));
                                return {
                                    selectable: !0,
                                    value: m,
                                    component: c.a.createElement(E, Object(a.a)({
                                        key: "user-search-".concat(s),
                                        selected: u,
                                        itemIdx: l,
                                        dispatch: e,
                                        value: m
                                    }, r))
                                }
                            })
                        }(t, b.length, e.dropdown.currentIndex, f, {
                            term: n,
                            result: "user"
                        });
                        y = [{
                            selectable: !1,
                            component: C(p.default.t("search.Creators"))
                        }].concat(Object(r.a)(S))
                    }
                    if (l) {
                        if (l && !s) {
                            var I = [];
                            u && (I.push({
                                selectable: !1,
                                component: C(p.default.t("search.Popular_Projects"))
                            }), I = I.concat(L(t, 1, e.dropdown.currentIndex, u, {
                                term: n,
                                result: "popular"
                            }))), v = [{
                                selectable: !1,
                                component: j({
                                    dispatch: t,
                                    suggestedTerm: _
                                })
                            }].concat(Object(r.a)(I))
                        }
                    } else {
                        var T = Object(O.b)(x.e, {
                                ref: "nav_search",
                                term: n,
                                result: "all"
                            }),
                            A = L(t, y.length + b.length, e.dropdown.currentIndex, d, {
                                term: n,
                                result: "project"
                            });
                        v = [{
                            selectable: !1,
                            component: C(p.default.t("search.Projects"))
                        }].concat(Object(r.a)(A), [g > x.b && {
                            selectable: !0,
                            value: T,
                            component: k({
                                searchCount: g,
                                value: T
                            })
                        }])
                    }
                    return [].concat(Object(r.a)(b), Object(r.a)(y), Object(r.a)(v))
                };
            t.a = function(e) {
                var t = e.state,
                    n = e.dispatch,
                    r = t.busy,
                    a = t.term,
                    o = t.dropdown,
                    i = t.searchOpen,
                    u = t.legacyHeader,
                    d = N(t, n) || [],
                    h = t.results && t.results.total_hits;
                return c.a.createElement("div", {
                    className: Object(s.a)("animation-fade-in animation-300 animation-easeOutQuart w100p t0 l0 absolute z-guided-search-3", i || u ? "block" : "display-none")
                }, c.a.createElement("div", {
                    className: "relative m-auto bg-white w100p"
                }, c.a.createElement(f, {
                    state: o,
                    placeholder: p.default.t("search.Search_for_projects"),
                    searchBusy: r,
                    dispatch: n,
                    results: d,
                    searchCount: h,
                    searchTerm: a,
                    tabIndex: !u && i ? 0 : -1,
                    searchAction: function(e) {
                        return n(Object(m.d)(e))
                    },
                    searchHeight: l()
                })))
            }
        },
        "z+X6": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return c
            }), n.d(t, "b", function() {
                return s
            });
            var r = n("vpQ4"),
                a = n("KQm4"),
                o = n("ANjH"),
                i = n("0fse"),
                c = function(e, t) {
                    var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Kickstarter",
                        c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                    return c = [Object(i.d)()].concat(Object(a.a)(c)).filter(Boolean), Object(o.createStore)(e, t, (n = {
                        name: r
                    }, "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(n) : o.compose).apply(void 0, Object(a.a)(c)))
                },
                s = function(e, t) {
                    var n = t(void 0, {}),
                        a = Object(r.a)({}, n, e);
                    return function() {
                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                        return t.apply(void 0, [e].concat(r))
                    }
                }
        },
        z0kN: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return a
            }), n.d(t, "c", function() {
                return o
            });
            var r = function(e) {
                    return function(t) {
                        return "".concat(e).concat(t)
                    }
                },
                a = function(e) {
                    return e.replace(/[^\w\-]+/g, "-").replace(/-{2,}/g, "-").replace(/^-|-$/g, "").toLowerCase()
                },
                o = function(e) {
                    return e.replace(/\s/g, "")
                }
        },
        zBmP: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return b
            });
            var r = n("wx14"),
                a = n("1OyB"),
                o = n("vuIU"),
                i = n("md7G"),
                c = n("foSv"),
                s = n("Ji7U"),
                l = n("q1tI"),
                u = n.n(l),
                d = n("/kEZ"),
                m = n.n(d),
                f = n("LtMG"),
                p = n("94td"),
                h = n("z0kN"),
                g = n("SmhT"),
                b = function(e) {
                    function t() {
                        var e, n;
                        Object(a.a)(this, t);
                        for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s];
                        return (n = Object(i.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(o)))).onEscape = function(e) {
                            var t = e.keyCode,
                                r = n.props.onClose;
                            t === g.d && r()
                        }, n
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            document.addEventListener("keydown", this.onEscape), document.body.classList.toggle("clip"), document.documentElement.classList.toggle("clip")
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            document.removeEventListener("keydown", this.onEscape), document.body.classList.toggle("clip"), document.documentElement.classList.toggle("clip")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.children,
                                n = e.headerCopy,
                                a = e.onClose,
                                o = e.secondaryCloseCopy,
                                i = e.secondaryCloseFn,
                                c = e.size,
                                s = e.grabFocus,
                                d = "fullScreen" === c ? "absolute t5 r8 pointer block py0 bg-transparent" : "absolute t0 r-5 pointer hide block-sm py0 bg-transparent",
                                g = "fullScreen" === c ? "shadow-low bg-white p4 h100vh auto-scroll-y clip" : "shadow-low bg-white p4 max-h80vh auto-scroll-y clip";
                            return u.a.createElement("div", {
                                className: "fixed t0 b0 l0 r0 z-modal-3"
                            }, u.a.createElement("div", {
                                onClick: a,
                                className: "absolute w100p h100p bg-grey-100_95 z1"
                            }), u.a.createElement(f.e, {
                                full: !0,
                                atoms: ["absolute", "w100p"]
                            }, u.a.createElement(f.i, null, u.a.createElement(f.d, Object(r.a)({
                                width: "full",
                                center: !0
                            }, v[c]), u.a.createElement(m.a, {
                                className: "relative",
                                role: "dialog",
                                "aria-label": n || "Modal",
                                focusTrapOptions: {
                                    clickOutsideDeactivates: !0,
                                    initialFocus: s ? "#focus-grabber" : ""
                                }
                            }, u.a.createElement("div", {
                                className: "z2 flex relative flex-column click-through h100vh"
                            }, u.a.createElement("div", {
                                className: "w100p m-auto click-on relative"
                            }, s && u.a.createElement("div", {
                                id: "focus-grabber"
                            }), u.a.createElement("div", {
                                className: g
                            }, n && u.a.createElement("h1", {
                                id: Object(h.b)(n),
                                className: "type-18 medium black mb4 center"
                            }, n), l.Children.map(t, function(e) {
                                return e
                            })), "fullScreen" !== c && u.a.createElement("div", {
                                className: "pt1 pt4-md text-center"
                            }, u.a.createElement("button", {
                                id: "modal-secondary-close",
                                className: "pointer text-underline type-14 navy-600 bg-transparent",
                                onClick: i || a
                            }, o)), u.a.createElement("button", {
                                onClick: a,
                                className: d,
                                id: "modal-primary-close"
                            }, u.a.createElement(f.f, {
                                name: "x",
                                label: Object(p.c)("overlay_modal.close"),
                                atoms: ["fill-navy-500"]
                            })))))))))
                        }
                    }]), t
                }(l.Component),
                v = {
                    large: {
                        smWidth: 8,
                        lgWidth: 6
                    },
                    small: {
                        smWidth: 5,
                        lgWidth: 4
                    },
                    fullScreen: {
                        smWidth: 12,
                        lgWidth: 12
                    }
                };
            b.defaultProps = {
                secondaryCloseCopy: Object(p.c)("overlay_modal.close"),
                grabFocus: !0
            }
        },
        zm9w: function(e, t, n) {
            "use strict";
            var r = n("vpQ4"),
                a = n("4Toj"),
                o = n.n(a),
                i = n("4LGs"),
                c = {
                    "'": "&#39;",
                    "`": "&#96;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;"
                },
                s = function(e) {
                    return Object(i.a)(c, e)
                },
                l = n("1OuE"),
                u = n("0VSk"),
                d = "undefined" != typeof window ? window.formatters : {},
                m = Object(r.a)({}, d, {
                    currency_symbol: function(e, t) {
                        return "USD" == e && t && "international" == t.usd_type ? "US" + this.currency_symbol_mappings[e] + " " : this.currency_symbol_mappings[e]
                    },
                    currency_symbol_mappings: {
                        AUD: "AU$ ",
                        CAD: "CA$ ",
                        CHF: "CHF ",
                        DKK: "DKK ",
                        EUR: "€",
                        GBP: "£",
                        HKD: "HK$ ",
                        JPY: "¥",
                        MXN: "MX$ ",
                        NOK: "NOK ",
                        NZD: "NZ$ ",
                        SEK: "SEK ",
                        SGD: "S$ ",
                        USD: "$"
                    },
                    money: function(e, t) {
                        return t = Object(r.a)({
                            separator: u.default.t("number.currency.format.separator"),
                            delimiter: u.default.t("number.currency.format.delimiter"),
                            format: u.default.t("number.currency.format.format")
                        }, t), isNaN(t.precision) && (t.precision = u.default.t("number.currency.format.precision")), "truncate_zeros" === t.type && (t.precision = parseFloat(e) % 1 == 0 ? 0 : 2), this.interpolate(t.format, {
                            n: this.format_number(e, t),
                            u: this.currency_symbol(t.currency, t)
                        })
                    },
                    shorter_money: function(e, t) {
                        return void 0 === t && (t = {}), e < 100 ? t.precision = 2 : (t.precision = 0, e = Math.floor(e)), this.money(e, t)
                    },
                    percent: function(e, t) {
                        return t = Object(r.a)({
                            delimiter: u.default.t("number.percentage.format.delimiter"),
                            format: u.default.t("number.percentage.format.format")
                        }, t), this.interpolate(t.format, {
                            n: this.format_number(e, t)
                        })
                    },
                    format_number: function(e, t) {
                        var n, a, o;
                        return t = Object(r.a)({
                            separator: u.default.t("number.format.separator"),
                            delimiter: u.default.t("number.format.delimiter")
                        }, t), isNaN(t.precision) ? t.precision = u.default.t("number.format.precision") : t.precision = Math.abs(t.precision), n = t.precision || t.round ? Math.abs(e).toFixed(t.precision) : parseInt(Math.abs(e), 10).toString(), o = (a = String(parseInt(n, 10))).split("").reverse().join("").replace(/(\d{3})(?=\d)/g, "$1" + t.delimiter.split("").reverse().join("")).split("").reverse().join(""), e < 0 && (o = "-" + o), t.precision && (o += t.separator + Math.abs(n - a).toFixed(t.precision).slice(2)), o
                    },
                    interpolate: function(e, t) {
                        return e.replace(/\%([\w]+)/g, function(e, n) {
                            return t[n] || ""
                        })
                    },
                    pluralize: function(e, t) {
                        var n, r = e,
                            a = ["zombie", "zombies", "cow()", "ki(i?)ne", "move", "moves", "sex", "sexes", "child", "children", "man", "men", "person", "people", "database", "databases", "quiz", "quizzes", "matrix", "matrices", "(vert|ind)ex", "(vert|ind)ices", "(^ox)", "(^ox)en", "(alias|status)", "(alias|status)es", "(octop|vir)us", "(octop|vir)i", "(cris|ax|test)is", "(cris|ax|test)es", "shoe", "shoes", "o", "oes", "bus", "buses", "(m|l)ouse", "(m|l)ice", "(x|ch|ss|sh)", "(x|ch|ss|sh)es", "movie", "movies", "series", "series", "([^aeiouy]|qu)y", "([^aeiouy]|qu)ies", "([lr])f", "([lr])ves", "tive", "tives", "hive", "hives", "([^f])fe", "([^f])ves", "(analy|ba|diagno|parenthe|progno|synop|the)sis", "(analy|ba|diagno|parenthe|progno|synop|the)ses", "([ti])um", "([ti])a", "news", "news", "([^s])", "()s"],
                            o = a.map(function(e) {
                                return new RegExp(e + "$", "i")
                            }),
                            i = !1,
                            c = 0;

                        function s(e, n) {
                            var r = a[c + (1 === t ? 0 : 1) - c % 2];
                            return void 0 !== n && (r = r.replace(/\(.*\)/, n)), r
                        }

                        function l(e, t) {
                            return t.toUpperCase()
                        }
                        for (; !i && c < a.length;) n = o[c += 1], e.match(n) && (i = !0, r = e.replace(n, s), e.match(/^[A-Z][^A-Z]+$/) ? r = r.replace(/^([a-z])/, l) : e.match(/^[A-Z]+$/) && (r = r.toUpperCase()));
                        return r
                    },
                    capitalize: function(e) {
                        return "string" != typeof e ? "" : e.replace(/^(\w)|\s(\w)/g, function(e) {
                            return e.toUpperCase()
                        })
                    },
                    to_sentence: function(e, t) {
                        switch (t = Object(r.a)({
                            words_connector: u.default.t("support.array.words_connector"),
                            two_words_connector: u.default.t("support.array.two_words_connector"),
                            last_word_connector: u.default.t("support.array.last_word_connector")
                        }, t), e.length) {
                            case 0:
                                return "";
                            case 1:
                                return String(e[0]);
                            case 2:
                                return e[0] + t.two_words_connector + e[1];
                            default:
                                return e.slice(0, -1).join(t.words_connector) + t.last_word_connector + e[e.length - 1]
                        }
                    },
                    paragraphize: function(e) {
                        return (e = (e = (e = s(e)).replace(/\r\n?/g, "\n")).trim()).length > 0 && (e = "<p>" + (e = (e = e.replace(/\n{2,}/g, "</p><p>")).replace(/\n/g, "<br />")) + "</p>"), e
                    },
                    time_ago_in_words: function(e) {
                        if (!e) return "?";
                        ("number" == typeof e || "string" == typeof e && e.match(/^\d+$/)) && (e = parseInt(1e3 * e, 10));
                        var t = e,
                            n = o()(new Date, e);
                        void 0 === m.distance_date_intervals && (m.distance_date_intervals = [{
                            min: 5,
                            i18n_key: "schwamm.just_now"
                        }, {
                            min: 29,
                            i18n_key: "schwamm.less_than_a_minute_ago"
                        }, {
                            min: 2640,
                            i18n_key: "schwamm.m_minutes_ago",
                            count_key: "m"
                        }, {
                            min: 82800,
                            i18n_key: "schwamm.about_h_hours_ago",
                            count_key: "h"
                        }, {
                            min: 604800,
                            i18n_key: "schwamm.d_days_ago",
                            count_key: "d"
                        }, {
                            min: 15552e3,
                            i18n_key: "schwamm.on_datetime",
                            count_key: "t"
                        }, {
                            min: 0,
                            i18n_key: "schwamm.on_year",
                            count_key: "y"
                        }]);
                        var r = m.distance_date_intervals.sort(function(e, t) {
                                return e.min - t.min
                            }),
                            a = r[r.length - 1],
                            i = r.reduce(function(e, t) {
                                return t.min > n && e === a ? t : e
                            }, a),
                            c = {
                                m: Math.round(n / 60),
                                h: Math.round(n / 3600),
                                d: Math.round(n / 86400),
                                t: Object(l.a)("MMMM D", t),
                                y: Object(l.a)("LL", t)
                            },
                            s = u.default.t(i.i18n_key, {
                                count: c[i.count_key]
                            });
                        return s.match(/NaN|undefined/) ? "" : s
                    }
                });
            "undefined" != typeof window && (window.formatters = m);
            t.a = m
        }
    },
    [
        [0, 0, 1]
    ]
]);
//# sourceMappingURL=core.b271a3a995731c55fba1.js.map