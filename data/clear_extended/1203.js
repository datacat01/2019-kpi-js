/*! ScrollMagic v2.0.2 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://janpaepke.github.io/ScrollMagic */ ! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function() {
    "use strict";
    var e = function() {};
    e.version = "2.0.2", e.Controller = function(n) {
        var i, o, s = "ScrollMagic.Controller",
            a = {
                f: "FORWARD",
                r: "REVERSE",
                p: "PAUSED"
            },
            l = t.defaults,
            c = this,
            u = r.extend({}, l, n),
            f = [],
            d = !1,
            g = 0,
            h = a.p,
            p = !0,
            v = 0,
            m = !0,
            w = function() {
                for (var e in u) l.hasOwnProperty(e) || delete u[e];
                if (u.container = r.get.elements(u.container)[0], !u.container) throw s + " init failed.";
                p = u.container === window || u.container === document.body || !document.body.contains(u.container), p && (u.container = window), v = u.vertical ? r.get.height(u.container) : r.get.width(u.container), u.container.addEventListener("resize", x), u.container.addEventListener("scroll", x), u.refreshInterval = parseInt(u.refreshInterval) || l.refreshInterval, y()
            },
            y = function() {
                u.refreshInterval > 0 && (o = window.setTimeout(z, u.refreshInterval))
            },
            E = function() {
                return u.vertical ? r.get.scrollTop(u.container) : r.get.scrollLeft(u.container)
            },
            S = function(e) {
                u.vertical ? p ? window.scrollTo(r.get.scrollLeft(), e) : u.container.scrollTop = e : p ? window.scrollTo(e, r.get.scrollTop()) : u.container.scrollLeft = e
            },
            b = function() {
                if (m && d) {
                    g = c.scrollPos();
                    var e = r.type.Array(d) ? d : f.slice(0);
                    h === a.r && e.reverse(), e.forEach(function(e) {
                        e.update(!0)
                    }), 0 === e.length && u.loglevel >= 3, d = !1
                }
            },
            F = function() {
                i = r.rAF(b)
            },
            x = function(e) {
                if ("resize" == e.type) v = u.vertical ? r.get.height(u.container) : r.get.width(u.container), h = a.p;
                else {
                    var t = g;
                    g = c.scrollPos();
                    var n = g - t;
                    0 !== n && (h = n > 0 ? a.f : a.r)
                }
                d || (d = !0, F())
            },
            z = function() {
                if (!p && v != (u.vertical ? r.get.height(u.container) : r.get.width(u.container))) {
                    var e;
                    try {
                        e = new Event("resize", {
                            bubbles: !1,
                            cancelable: !1
                        })
                    } catch (t) {
                        e = document.createEvent("Event"), e.initEvent("resize", !1, !1)
                    }
                    u.container.dispatchEvent(e)
                }
                f.forEach(function(e) {
                    e.refresh()
                }), y()
            };
        this._options = u;
        var T = function(e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return t.sort(function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }), t
        };
        return this.addScene = function(t) {
            if (r.type.Array(t)) t.forEach(function(e) {
                c.addScene(e)
            });
            else if (t instanceof e.Scene)
                if (t.controller() !== c) t.addTo(c);
                else if (f.indexOf(t) < 0) {
                f.push(t), f = T(f), t.on("shift.controller_sort", function() {
                    f = T(f)
                });
                for (var n in u.globalSceneOptions) t[n] && t[n].call(t, u.globalSceneOptions[n])
            }
            return c
        }, this.removeScene = function(e) {
            if (r.type.Array(e)) e.forEach(function(e) {
                c.removeScene(e)
            });
            else {
                var t = f.indexOf(e);
                t > -1 && (e.off("shift.controller_sort"), f.splice(t, 1), e.remove())
            }
            return c
        }, this.updateScene = function(t, n) {
            return r.type.Array(t) ? t.forEach(function(e) {
                c.updateScene(e, n)
            }) : n ? t.update(!0) : d !== !0 && t instanceof e.Scene && (d = d || [], -1 == d.indexOf(t) && d.push(t), d = T(d), F()), c
        }, this.update = function(e) {
            return x({
                type: "resize"
            }), e && b(), c
        }, this.scrollTo = function(t) {
            if (r.type.Number(t)) S.call(u.container, t);
            else if (t instanceof e.Scene) t.controller() === c ? c.scrollTo(t.scrollOffset()) : log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", t);
            else if (r.type.Function(t)) S = t;
            else {
                var n = r.get.elements(t)[0];
                if (n) {
                    var i = u.vertical ? "top" : "left",
                        o = r.get.offset(u.container),
                        s = r.get.offset(n);
                    p || (o[i] -= c.scrollPos()), c.scrollTo(s[i] - o[i])
                } else log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", t)
            }
            return c
        }, this.scrollPos = function(e) {
            return arguments.length ? (r.type.Function(e) && (E = e), c) : E.call(c)
        }, this.info = function(e) {
            var t = {
                size: v,
                vertical: u.vertical,
                scrollPos: g,
                scrollDirection: h,
                container: u.container,
                isDocument: p
            };
            return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
        }, this.loglevel = function(e) {
            return arguments.length ? (u.loglevel != e && (u.loglevel = e), c) : u.loglevel
        }, this.enabled = function(e) {
            return arguments.length ? (m != e && (m = !!e, c.updateScene(f, !0)), c) : m
        }, this.destroy = function(e) {
            window.clearTimeout(o);
            for (var t = f.length; t--;) f[t].destroy(e);
            return u.container.removeEventListener("resize", x), u.container.removeEventListener("scroll", x), r.cAF(i), null
        }, w(), c
    };
    var t = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    e.Controller.addOption = function(e, n) {
        t.defaults[e] = n
    }, e.Controller.extend = function(t) {
        var n = this;
        e.Controller = function() {
            return n.apply(this, arguments), this.$super = r.extend({}, this), t.apply(this, arguments) || this
        }, r.extend(e.Controller, n), e.Controller.prototype = n.prototype, e.Controller.prototype.constructor = e.Controller
    }, e.Scene = function(t) {
        var i, o, s = "data-scrollmagic-pin-spacer",
            a = n.defaults,
            l = this,
            c = r.extend({}, a, t),
            u = "BEFORE",
            f = 0,
            d = {
                start: 0,
                end: 0
            },
            g = 0,
            h = !0,
            p = function() {
                for (var e in c) a.hasOwnProperty(e) || delete c[e];
                for (var t in a) F(t);
                S(), l.on("change.internal", function(e) {
                    "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? w() : "reverse" === e.what && l.update())
                }).on("shift.internal", function() {
                    v(), l.update()
                })
            };
        this.addTo = function(t) {
            return t instanceof e.Controller && o != t && (o && o.removeScene(l), o = t, S(), m(!0), w(!0), v(), o.info("container").addEventListener("resize", y), t.addScene(l), l.trigger("add", {
                controller: o
            }), l.update()), l
        }, this.enabled = function(e) {
            return arguments.length ? (h != e && (h = !!e, l.update(!0)), l) : h
        }, this.remove = function() {
            if (o) {
                o.info("container").removeEventListener("resize", y);
                var e = o;
                o = void 0, e.removeScene(l), l.trigger("remove")
            }
            return l
        }, this.destroy = function(e) {
            return l.trigger("destroy", {
                reset: e
            }), l.remove(), l.off("*.*"), null
        }, this.update = function(e) {
            if (o)
                if (e)
                    if (o.enabled() && h) {
                        var t, n = o.info("scrollPos");
                        t = c.duration > 0 ? (n - d.start) / (d.end - d.start) : n >= d.start ? 1 : 0, l.trigger("update", {
                            startPos: d.start,
                            endPos: d.end,
                            scrollPos: n
                        }), l.progress(t)
                    } else z && "DURING" === u && R(!0);
            else o.updateScene(l, !1);
            return l
        }, this.refresh = function() {
            return m(), w(), l
        }, this.progress = function(e) {
            if (arguments.length) {
                var t = !1,
                    n = u,
                    r = o ? o.info("scrollDirection") : "PAUSED",
                    i = c.reverse || e >= f;
                if (0 === c.duration ? (t = f != e, f = 1 > e && i ? 0 : 1, u = 0 === f ? "BEFORE" : "DURING") : 0 >= e && "BEFORE" !== u && i ? (f = 0, u = "BEFORE", t = !0) : e > 0 && 1 > e && i ? (f = e, u = "DURING", t = !0) : e >= 1 && "AFTER" !== u ? (f = 1, u = "AFTER", t = !0) : "DURING" !== u || i || R(), t) {
                    var s = {
                            progress: f,
                            state: u,
                            scrollDirection: r
                        },
                        a = u != n,
                        d = function(e) {
                            l.trigger(e, s)
                        };
                    a && "DURING" !== n && (d("enter"), d("BEFORE" === n ? "start" : "end")), d("progress"), a && "DURING" !== u && (d("BEFORE" === u ? "start" : "end"), d("leave"))
                }
                return l
            }
            return f
        };
        var v = function() {
                d = {
                    start: g + c.offset
                }, o && c.triggerElement && (d.start -= o.info("size") * c.triggerHook), d.end = d.start + c.duration
            },
            m = function(e) {
                if (i) {
                    var t = "duration";
                    b(t, i.call(l)) && !e && (l.trigger("change", {
                        what: t,
                        newval: c[t]
                    }), l.trigger("shift", {
                        reason: t
                    }))
                }
            },
            w = function(e) {
                var t = 0,
                    n = c.triggerElement;
                if (o && n) {
                    for (var i = o.info(), a = r.get.offset(i.container), u = i.vertical ? "top" : "left"; n.parentNode.hasAttribute(s);) n = n.parentNode;
                    var f = r.get.offset(n);
                    i.isDocument || (a[u] -= o.scrollPos()), t = f[u] - a[u]
                }
                var d = t != g;
                g = t, d && !e && l.trigger("shift", {
                    reason: "triggerElementPosition"
                })
            },
            y = function() {
                c.triggerHook > 0 && l.trigger("shift", {
                    reason: "containerResize"
                })
            },
            E = r.extend(n.validate, {
                duration: function(e) {
                    if (r.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                        var t = parseFloat(e) / 100;
                        e = function() {
                            return o ? o.info("size") * t : 0
                        }
                    }
                    if (r.type.Function(e)) {
                        i = e;
                        try {
                            e = parseFloat(i())
                        } catch (n) {
                            e = -1
                        }
                    }
                    if (e = parseFloat(e), !r.type.Number(e) || 0 > e) throw i ? (i = void 0, 0) : 0;
                    return e
                }
            }),
            S = function(e) {
                e = arguments.length ? [e] : Object.keys(E), e.forEach(function(e) {
                    var t;
                    if (E[e]) try {
                        t = E[e](c[e])
                    } catch (n) {
                        t = a[e]
                    } finally {
                        c[e] = t
                    }
                })
            },
            b = function(e, t) {
                var n = !1,
                    r = c[e];
                return c[e] != t && (c[e] = t, S(e), n = r != c[e]), n
            },
            F = function(e) {
                l[e] || (l[e] = function(t) {
                    return arguments.length ? ("duration" === e && (i = void 0), b(e, t) && (l.trigger("change", {
                        what: e,
                        newval: c[e]
                    }), n.shifts.indexOf(e) > -1 && l.trigger("shift", {
                        reason: e
                    })), l) : c[e]
                })
            };
        this.controller = function() {
            return o
        }, this.state = function() {
            return u
        }, this.scrollOffset = function() {
            return d.start
        }, this.triggerPosition = function() {
            var e = c.offset;
            return o && (e += c.triggerElement ? g : o.info("size") * l.triggerHook()), e
        };
        var x = {};
        this.on = function(e, t) {
            return r.type.Function(t) && (e = e.trim().split(" "), e.forEach(function(e) {
                var n = e.split("."),
                    r = n[0],
                    i = n[1];
                "*" != r && (x[r] || (x[r] = []), x[r].push({
                    namespace: i || "",
                    callback: t
                }))
            })), l
        }, this.off = function(e, t) {
            return e ? (e = e.trim().split(" "), e.forEach(function(e) {
                var n = e.split("."),
                    r = n[0],
                    i = n[1] || "",
                    o = "*" === r ? Object.keys(x) : [r];
                o.forEach(function(e) {
                    for (var n = x[e] || [], r = n.length; r--;) {
                        var o = n[r];
                        !o || i !== o.namespace && "*" !== i || t && t != o.callback || n.splice(r, 1)
                    }
                    n.length || delete x[e]
                })
            }), l) : l
        }, this.trigger = function(t, n) {
            if (t) {
                var r = t.trim().split("."),
                    i = r[0],
                    o = r[1],
                    s = x[i];
                s && s.forEach(function(t) {
                    o && o !== t.namespace || t.callback.call(l, new e.Event(i, t.namespace, l, n))
                })
            }
            return l
        };
        var z, T;
        l.on("shift.internal", function(e) {
            var t = "duration" === e.reason;
            ("AFTER" === u && t || "DURING" === u && 0 === c.duration) && R(), t && C()
        }).on("progress.internal", function() {
            R()
        }).on("add.internal", function() {
            C()
        }).on("destroy.internal", function(e) {
            l.removePin(e.reset)
        });
        var R = function(e) {
                if (z && o) {
                    var t = o.info();
                    if (e || "DURING" !== u) {
                        var n = {
                                position: T.inFlow ? "relative" : "absolute",
                                top: 0,
                                left: 0
                            },
                            i = r.css(z, "position") != n.position;
                        T.pushFollowers ? c.duration > 0 && ("AFTER" === u && 0 === parseFloat(r.css(T.spacer, "padding-top")) ? i = !0 : "BEFORE" === u && 0 === parseFloat(r.css(T.spacer, "padding-bottom")) && (i = !0)) : n[t.vertical ? "top" : "left"] = c.duration * f, r.css(z, n), i && C()
                    } else {
                        "fixed" != r.css(z, "position") && (r.css(z, {
                            position: "fixed"
                        }), C());
                        var s = r.get.offset(T.spacer, !0),
                            a = c.reverse || 0 === c.duration ? t.scrollPos - d.start : Math.round(f * c.duration * 10) / 10;
                        s[t.vertical ? "top" : "left"] += a, r.css(z, {
                            top: s.top,
                            left: s.left
                        })
                    }
                }
            },
            C = function() {
                if (z && o && T.inFlow) {
                    var e = "DURING" === u,
                        t = o.info("vertical"),
                        n = T.spacer.children[0],
                        i = r.isMarginCollapseType(r.css(T.spacer, "display")),
                        s = {};
                    T.relSize.width || T.relSize.autoFullWidth ? e ? r.css(z, {
                        width: r.get.width(T.spacer)
                    }) : r.css(z, {
                        width: "100%"
                    }) : (s["min-width"] = r.get.width(t ? z : n, !0, !0), s.width = e ? s["min-width"] : "auto"), T.relSize.height ? e ? r.css(z, {
                        height: r.get.height(T.spacer) - c.duration
                    }) : r.css(z, {
                        height: "100%"
                    }) : (s["min-height"] = r.get.height(t ? n : z, !0, !i), s.height = e ? s["min-height"] : "auto"), T.pushFollowers && (s["padding" + (t ? "Top" : "Left")] = c.duration * f, s["padding" + (t ? "Bottom" : "Right")] = c.duration * (1 - f)), r.css(T.spacer, s)
                }
            },
            L = function() {
                o && z && "DURING" === u && !o.info("isDocument") && R()
            },
            D = function() {
                o && z && "DURING" === u && ((T.relSize.width || T.relSize.autoFullWidth) && r.get.width(window) != r.get.width(T.spacer.parentNode) || T.relSize.height && r.get.height(window) != r.get.height(T.spacer.parentNode)) && C()
            },
            N = function(e) {
                o && z && "DURING" === u && !o.info("isDocument") && (e.preventDefault(), o.scrollTo(o.info("scrollPos") - (e[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"] / 3 || 30 * -e.detail)))
            };
        this.setPin = function(e, t) {
            var n = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            };
            if (t = r.extend({}, n, t), e = r.get.elements(e)[0], !e) return l;
            if ("fixed" === r.css(e, "position")) return l;
            if (z) {
                if (z === e) return l;
                l.removePin()
            }
            z = e;
            var i = z.parentNode.style.display,
                o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            z.parentNode.style.display = "none";
            var a = "absolute" != r.css(z, "position"),
                c = r.css(z, o.concat(["display"])),
                u = r.css(z, ["width", "height"]);
            z.parentNode.style.display = i, !a && t.pushFollowers && (t.pushFollowers = !1);
            var f = z.parentNode.insertBefore(document.createElement("div"), z),
                d = r.extend(c, {
                    position: a ? "relative" : "absolute",
                    boxSizing: "content-box",
                    mozBoxSizing: "content-box",
                    webkitBoxSizing: "content-box"
                });
            if (a || r.extend(d, r.css(z, ["width", "height"])), r.css(f, d), f.setAttribute(s, ""), r.addClass(f, t.spacerClass), T = {
                    spacer: f,
                    relSize: {
                        width: "%" === u.width.slice(-1),
                        height: "%" === u.height.slice(-1),
                        autoFullWidth: "auto" === u.width && a && r.isMarginCollapseType(c.display)
                    },
                    pushFollowers: t.pushFollowers,
                    inFlow: a
                }, !z.___origStyle) {
                z.___origStyle = {};
                var g = z.style,
                    h = o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                h.forEach(function(e) {
                    z.___origStyle[e] = g[e] || ""
                })
            }
            return T.relSize.width && r.css(f, {
                width: u.width
            }), T.relSize.height && r.css(f, {
                height: u.height
            }), f.appendChild(z), r.css(z, {
                position: a ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (T.relSize.width || T.relSize.autoFullWidth) && r.css(z, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", L), window.addEventListener("resize", L), window.addEventListener("resize", D), z.addEventListener("mousewheel", N), z.addEventListener("DOMMouseScroll", N), R(), l
        }, this.removePin = function(e) {
            if (z) {
                if ("DURING" === u && R(!0), e || !o) {
                    var t = T.spacer.children[0];
                    if (t.hasAttribute(s)) {
                        var n = T.spacer.style,
                            i = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                        margins = {}, i.forEach(function(e) {
                            margins[e] = n[e] || ""
                        }), r.css(t, margins)
                    }
                    T.spacer.parentNode.insertBefore(t, T.spacer), T.spacer.parentNode.removeChild(T.spacer), z.parentNode.hasAttribute(s) || (r.css(z, z.___origStyle), delete z.___origStyle)
                }
                window.removeEventListener("scroll", L), window.removeEventListener("resize", L), window.removeEventListener("resize", D), z.removeEventListener("mousewheel", N), z.removeEventListener("DOMMouseScroll", N), z = void 0
            }
            return l
        };
        var O, A = [];
        return l.on("destroy.internal", function(e) {
            l.removeClassToggle(e.reset)
        }), this.setClassToggle = function(e, t) {
            var n = r.get.elements(e);
            return 0 !== n.length && r.type.String(t) ? (A.length > 0 && l.removeClassToggle(), O = t, A = n, l.on("enter.internal_class leave.internal_class", function(e) {
                var t = "enter" === e.type ? r.addClass : r.removeClass;
                A.forEach(function(e) {
                    t(e, O)
                })
            }), l) : l
        }, this.removeClassToggle = function(e) {
            return e && A.forEach(function(e) {
                r.removeClass(e, O)
            }), l.off("start.internal_class end.internal_class"), O = void 0, A = [], l
        }, p(), l
    };
    var n = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(e) {
                if (e = parseFloat(e), !r.type.Number(e)) throw 0;
                return e
            },
            triggerElement: function(e) {
                if (e = e || void 0) {
                    var t = r.get.elements(e)[0];
                    if (!t) throw 0;
                    e = t
                }
                return e
            },
            triggerHook: function(e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (r.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t)) throw 0;
                    e = t[e]
                }
                return e
            },
            reverse: function(e) {
                return !!e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    e.Scene.addOption = function(e, t, r, i) {
        e in n.defaults || (n.defaults[e] = t, n.validate[e] = r, i && n.shifts.push(e))
    }, e.Scene.extend = function(t) {
        var n = this;
        e.Scene = function() {
            return n.apply(this, arguments), this.$super = r.extend({}, this), t.apply(this, arguments) || this
        }, r.extend(e.Scene, n), e.Scene.prototype = n.prototype, e.Scene.prototype.constructor = e.Scene
    }, e.Event = function(e, t, n, r) {
        r = r || {};
        for (var i in r) this[i] = r[i];
        return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var r = e._util = function(e) {
        var t, n = {},
            r = function(e) {
                return parseFloat(e) || 0
            },
            i = function(t) {
                return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
            },
            o = function(t, n, o, s) {
                if (n = n === document ? e : n, n === e) s = !1;
                else if (!f.DomElement(n)) return 0;
                t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                var a = (o ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
                if (o && s) {
                    var l = i(n);
                    a += "Height" === t ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight)
                }
                return a
            },
            s = function(e) {
                return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                    return e[1].toUpperCase()
                })
            };
        n.extend = function(e) {
            for (e = e || {}, t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
            return e
        }, n.isMarginCollapseType = function(e) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
        };
        var a = 0,
            l = ["ms", "moz", "webkit", "o"],
            c = e.requestAnimationFrame,
            u = e.cancelAnimationFrame;
        for (t = 0; !c && t < l.length; ++t) c = e[l[t] + "RequestAnimationFrame"], u = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
        c || (c = function(t) {
            var n = (new Date).getTime(),
                r = Math.max(0, 16 - (n - a)),
                i = e.setTimeout(function() {
                    t(n + r)
                }, r);
            return a = n + r, i
        }), u || (u = function(t) {
            e.clearTimeout(t)
        }), n.rAF = c.bind(e), n.cAF = u.bind(e);
        var f = n.type = function(e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        f.String = function(e) {
            return "string" === f(e)
        }, f.Function = function(e) {
            return "function" === f(e)
        }, f.Array = function(e) {
            return Array.isArray(e)
        }, f.Number = function(e) {
            return !f.Array(e) && e - parseFloat(e) + 1 >= 0
        }, f.DomElement = function(e) {
            return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        };
        var d = n.get = {};
        return d.elements = function(t) {
            var n = [];
            if (f.String(t)) try {
                t = document.querySelectorAll(t)
            } catch (r) {
                return n
            }
            if ("nodelist" === f(t) || f.Array(t))
                for (var i = 0, o = n.length = t.length; o > i; i++) {
                    var s = t[i];
                    n[i] = f.DomElement(s) ? s : d.elements(s)
                } else(f.DomElement(t) || t === document || t === e) && (n = [t]);
            return n
        }, d.scrollTop = function(t) {
            return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
        }, d.scrollLeft = function(t) {
            return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
        }, d.width = function(e, t, n) {
            return o("width", e, t, n)
        }, d.height = function(e, t, n) {
            return o("height", e, t, n)
        }, d.offset = function(e, t) {
            var n = {
                top: 0,
                left: 0
            };
            if (e && e.getBoundingClientRect) {
                var r = e.getBoundingClientRect();
                n.top = r.top, n.left = r.left, t || (n.top += d.scrollTop(), n.left += d.scrollLeft())
            }
            return n
        }, n.addClass = function(e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }, n.removeClass = function(e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, n.css = function(e, t) {
            if (f.String(t)) return i(e)[s(t)];
            if (f.Array(t)) {
                var n = {},
                    r = i(e);
                return t.forEach(function(e) {
                    n[e] = r[s(e)]
                }), n
            }
            for (var o in t) {
                var a = t[o];
                a == parseFloat(a) && (a += "px"), e.style[s(o)] = a
            }
        }, n
    }(window || {});
    return e
});