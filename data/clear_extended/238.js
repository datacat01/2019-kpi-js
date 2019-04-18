! function(c, l) {
    var e = c.querySelector('[name="logjam-request-id"]'),
        u = e && (-1 < e.content.indexOf("-preview-") || -1 < e.content.indexOf("-production-"));
    l.onerror = function(e, t, n, i, o) {
        var r = c.createElement("script"),
            a = new Date,
            s = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime() / 1e3;
        r.addEventListener && (r.addEventListener("load", function() {
            setTimeout(function() {
                l.onerror(e, t, n, i, o)
            })
        }, !1), u && (u = !1, r.src = "/assets/frontend_minified/js/error_reporter.js?" + s, c.getElementsByTagName("head")[0].appendChild(r)))
    }
}(document, window),
function() {
    function i(e, t) {
        for (var n = e.length, i = t.length; i--;) e[n + i] = t[i];
        return e
    }
    Function.prototype.wrap = function(t) {
        var n = this;
        return function() {
            var e = i([n.bind(this)], arguments);
            return t.apply(this, e)
        }
    }
}(),
function() {
    function n(e, t) {
        for (var n = e.length, i = t.length; i--;) e[n + i] = t[i];
        return e
    }

    function o(e, t) {
        return n(e = r.call(e, 0), t)
    }
    var e = Function.prototype,
        r = Array.prototype.slice;
    e.bind || (e.bind = function(t) {
        if (arguments.length < 2 && void 0 === t) return this;
        var n = this,
            i = r.call(arguments, 1);
        return function() {
            var e = o(i, arguments);
            return n.apply(t, e)
        }
    })
}(), !1 !== window.rum && function(t, e, s) {
        var i, c, l = e.querySelector("meta[name^=logjam-action]"),
            u = e.querySelector("meta[name^=logjam-request-id]"),
            d = e.querySelector("meta[name^=logjam-header-exclusions]"),
            n = e.querySelector("meta[name^=logjam-collector]"),
            f = function(t) {
                return t._ = (new Date).getTime(), Object.keys(t).map(function(e) {
                    return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                }).join("&")
            };
        if (l = l && l.content, u = u && u.content, c = n ? n.content : t.rum_collector || "/logjam/", !(0 === s.host.indexOf("admin") || !c)) {
            d && (d = d.content.split(",").map(function(e) {
                return new RegExp(e)
            }));
            var o = function() {
                return t.addEventListener && t.performance ? (this.setXMLHttpRequestHook(), this.getStaticMetrics(), "loading" !== e.readyState ? this.getDomInformation() : e.addEventListener("DOMContentLoaded", this.getDomInformation, !1), "complete" === e.readyState ? this.getPerformanceData() : t.addEventListener("load", this.getPerformanceData, !1)) : (t.performance = {
                    navigation: {},
                    timing: {}
                }, this.getStaticMetrics(), this.getEmptyPerformanceData()), this
            };
            o.prototype = {
                getStaticMetrics: function() {
                    i = {
                        logjam_action: l,
                        logjam_request_id: u,
                        url: s.pathname,
                        screen_height: screen.height,
                        screen_width: screen.width,
                        redirect_count: performance.navigation.redirectCount,
                        v: 1
                    }
                },
                getDomInformation: function() {
                    i.html_nodes = e.getElementsByTagName("*").length, i.script_nodes = e.scripts.length, i.style_nodes = e.styleSheets.length
                },
                getEmptyPerformanceData: function() {
                    this.getPerformanceData()
                },
                getPerformanceData: function() {
                    u && l && setTimeout(function() {
                        var t = performance.timing,
                            n = [];
                        ["navigationStart", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"].forEach(function(e) {
                            n.push(t[e] || 0)
                        }), i.rts = n, (new Image).src = c + "page?" + f(i)
                    }, 20)
                },
                setXMLHttpRequestHook: function() {
                    var e = XMLHttpRequest;
                    t.XMLHttpRequest = function() {
                        var i, o, r = new e,
                            a = r.open;
                        return r.open = function(e, t, n) {
                            o = t, a.call(this, e, t, n)
                        }, r.addEventListener("readystatechange", function() {
                            var e, t;
                            if (1 == r.readyState && (i = +new Date), 4 == r.readyState) {
                                if (!d || !d.some(function(e) {
                                        return e.test(o)
                                    })) try {
                                    e = r.getResponseHeader("X-Logjam-Request-Id") || !1, t = r.getResponseHeader("X-Logjam-Request-Action") || !1
                                } catch (n) {
                                    e = t = !1
                                }
                                e && t && ((new Image).src = c + "ajax?" + f({
                                    logjam_caller_id: u,
                                    logjam_caller_action: l,
                                    logjam_request_id: e,
                                    logjam_action: t,
                                    rts: [i, +new Date],
                                    url: o.replace(s.protocol + "//" + s.host, "").replace("//", "/").split("?")[0],
                                    v: 1
                                }))
                            }
                        }, !1), r
                    }
                }
            }, new o
        }
    }(window, document, location),
    function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(p, e) {
        function s(e) {
            var t = "length" in e && e.length,
                n = Z.type(e);
            return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
        }

        function t(e, n, i) {
            if (Z.isFunction(n)) return Z.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== i
            });
            if (n.nodeType) return Z.grep(e, function(e) {
                return e === n !== i
            });
            if ("string" == typeof n) {
                if (se.test(n)) return Z.filter(n, e, i);
                n = Z.filter(n, e)
            }
            return Z.grep(e, function(e) {
                return 0 <= Y.call(n, e) !== i
            })
        }

        function n(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function f(e) {
            var n = pe[e] = {};
            return Z.each(e.match(he) || [], function(e, t) {
                n[t] = !0
            }), n
        }

        function i() {
            Q.removeEventListener("DOMContentLoaded", i, !1), p.removeEventListener("load", i, !1), Z.ready()
        }

        function o() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = Z.expando + o.uid++
        }

        function c(e, t, n) {
            var i;
            if (n === undefined && 1 === e.nodeType)
                if (i = "data-" + t.replace(ye, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ve.test(n) ? Z.parseJSON(n) : n)
                    } catch (o) {}
                    xe.set(e, t, n)
                } else n = undefined;
            return n
        }

        function r() {
            return !0
        }

        function l() {
            return !1
        }

        function a() {
            try {
                return Q.activeElement
            } catch (e) {}
        }

        function u(e, t) {
            return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function g(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function m(e) {
            var t = Pe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function x(e, t) {
            for (var n = 0, i = e.length; n < i; n++) me.set(e[n], "globalEval", !t || me.get(t[n], "globalEval"))
        }

        function d(e, t) {
            var n, i, o, r, a, s, c, l;
            if (1 === t.nodeType) {
                if (me.hasData(e) && (r = me.access(e), a = me.set(t, r), l = r.events))
                    for (o in delete a.handle, a.events = {}, l)
                        for (n = 0, i = l[o].length; n < i; n++) Z.event.add(t, o, l[o][n]);
                xe.hasData(e) && (s = xe.access(e), c = Z.extend({}, s), xe.set(t, c))
            }
        }

        function v(e, t) {
            var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return t === undefined || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
        }

        function h(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ce.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function y(e, t) {
            var n, i = Z(t.createElement(e)).appendTo(t.body),
                o = p.getDefaultComputedStyle && (n = p.getDefaultComputedStyle(i[0])) ? n.display : Z.css(i[0], "display");
            return i.detach(), o
        }

        function b(e) {
            var t = Q,
                n = He[e];
            return n || ("none" !== (n = y(e, t)) && n || ((t = (Fe = (Fe || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = y(e, t), Fe.detach()), He[e] = n), n
        }

        function w(e, t, n) {
            var i, o, r, a, s = e.style;
            return (n = n || We(e)) && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), Be.test(a) && ze.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), a !== undefined ? a + "" : a
        }

        function _(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        function T(e, t) {
            if (t in e) return t;
            for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Xe.length; o--;)
                if ((t = Xe[o] + n) in e) return t;
            return i
        }

        function k(e, t, n) {
            var i = Ye.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function C(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; r < 4; r += 2) "margin" === n && (a += Z.css(e, n + Te[r], !0, o)), i ? ("content" === n && (a -= Z.css(e, "padding" + Te[r], !0, o)), "margin" !== n && (a -= Z.css(e, "border" + Te[r] + "Width", !0, o))) : (a += Z.css(e, "padding" + Te[r], !0, o), "padding" !== n && (a += Z.css(e, "border" + Te[r] + "Width", !0, o)));
            return a
        }

        function E(e, t, n) {
            var i = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = We(e),
                a = "border-box" === Z.css(e, "boxSizing", !1, r);
            if (o <= 0 || null == o) {
                if (((o = w(e, t, r)) < 0 || null == o) && (o = e.style[t]), Be.test(o)) return o;
                i = a && (X.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + C(e, t, n || (a ? "border" : "content"), i, r) + "px"
        }

        function S(e, t) {
            for (var n, i, o, r = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (r[a] = me.get(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && ke(i) && (r[a] = me.access(i, "olddisplay", b(i.nodeName)))) : (o = ke(i), "none" === n && o || me.set(i, "olddisplay", o ? n : Z.css(i, "display"))));
            for (a = 0; a < s; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
            return e
        }

        function j(e, t, n, i, o) {
            return new j.prototype.init(e, t, n, i, o)
        }

        function O() {
            return setTimeout(function() {
                Qe = undefined
            }), Qe = Z.now()
        }

        function N(e, t) {
            var n, i = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = Te[i])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function L(e, t, n) {
            for (var i, o = (at[t] || []).concat(at["*"]), r = 0, a = o.length; r < a; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function $(t, e, n) {
            var i, o, r, a, s, c, l, u = this,
                d = {},
                f = t.style,
                h = t.nodeType && ke(t),
                p = me.get(t, "fxshow");
            for (i in n.queue || (null == (s = Z._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || c()
                }), s.unqueued++, u.always(function() {
                    u.always(function() {
                        s.unqueued--, Z.queue(t, "fx").length || s.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (l = Z.css(t, "display")) ? me.get(t, "olddisplay") || b(t.nodeName) : l) && "none" === Z.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function() {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                })), e)
                if (o = e[i], nt.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !p || p[i] === undefined) continue;
                        h = !0
                    }
                    d[i] = p && p[i] || Z.style(t, i)
                } else l = undefined;
            if (Z.isEmptyObject(d)) "inline" === ("none" === l ? b(t.nodeName) : l) && (f.display = l);
            else
                for (i in p ? "hidden" in p && (h = p.hidden) : p = me.access(t, "fxshow", {}), r && (p.hidden = !h), h ? Z(t).show() : u.done(function() {
                        Z(t).hide()
                    }), u.done(function() {
                        var e;
                        for (e in me.remove(t, "fxshow"), d) Z.style(t, e, d[e])
                    }), d) a = L(h ? p[i] : 0, i, u), i in p || (p[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }

        function D(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (o = t[i = Z.camelCase(n)], r = e[n], Z.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = Z.cssHooks[i]) && "expand" in a)
                    for (n in r = a.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                else t[i] = o
        }

        function A(r, e, t) {
            var n, a, i = 0,
                o = rt.length,
                s = Z.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (a) return !1;
                    for (var e = Qe || O(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), i = 0, o = l.tweens.length; i < o; i++) l.tweens[i].run(n);
                    return s.notifyWith(r, [l, n, t]), n < 1 && o ? t : (s.resolveWith(r, [l]), !1)
                },
                l = s.promise({
                    elem: r,
                    props: Z.extend({}, e),
                    opts: Z.extend(!0, {
                        specialEasing: {}
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Qe || O(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = Z.Tween(r, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                        return l.tweens.push(n), n
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? l.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; t < n; t++) l.tweens[t].run(1);
                        return e ? s.resolveWith(r, [l, e]) : s.rejectWith(r, [l, e]), this
                    }
                }),
                u = l.props;
            for (D(u, l.opts.specialEasing); i < o; i++)
                if (n = rt[i].call(l, r, u, l.opts)) return n;
            return Z.map(u, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(r, l), Z.fx.timer(Z.extend(c, {
                elem: r,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function I(r) {
            return function(e, t) {
                "string" != typeof e && (t = e, e = "*");
                var n, i = 0,
                    o = e.toLowerCase().match(he) || [];
                if (Z.isFunction(t))
                    for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
            }
        }

        function R(t, o, r, a) {
            function s(e) {
                var i;
                return c[e] = !0, Z.each(t[e] || [], function(e, t) {
                    var n = t(o, r, a);
                    return "string" != typeof n || l || c[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), s(n), !1)
                }), i
            }
            var c = {},
                l = t === Tt;
            return s(o.dataTypes[0]) || !c["*"] && s("*")
        }

        function P(e, t) {
            var n, i, o = Z.ajaxSettings.flatOptions || {};
            for (n in t) t[n] !== undefined && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && Z.extend(!0, e, i), e
        }

        function q(e, t, n) {
            for (var i, o, r, a, s = e.contents, c = e.dataTypes;
                "*" === c[0];) c.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (o in s)
                    if (s[o] && s[o].test(i)) {
                        c.unshift(o);
                        break
                    } if (c[0] in n) r = c[0];
            else {
                for (o in n) {
                    if (!c[0] || e.converters[o + " " + c[0]]) {
                        r = o;
                        break
                    }
                    a || (a = o)
                }
                r = r || a
            }
            if (r) return r !== c[0] && c.unshift(r), n[r]
        }

        function M(e, t, n, i) {
            var o, r, a, s, c, l = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
            for (r = u.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = r, r = u.shift())
                    if ("*" === r) r = c;
                    else if ("*" !== c && c !== r) {
                if (!(a = l[c + " " + r] || l["* " + r]))
                    for (o in l)
                        if ((s = o.split(" "))[1] === r && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[o] : !0 !== l[o] && (r = s[0], u.unshift(s[1]));
                            break
                        } if (!0 !== a)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: a ? d : "No conversion from " + c + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function F(n, e, i, o) {
            var t;
            if (Z.isArray(e)) Z.each(e, function(e, t) {
                i || jt.test(n) ? o(n, t) : F(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, o)
            });
            else if (i || "object" !== Z.type(e)) o(n, e);
            else
                for (t in e) F(n + "[" + t + "]", e[t], i, o)
        }

        function H(e) {
            return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var z = [],
            B = z.slice,
            W = z.concat,
            U = z.push,
            Y = z.indexOf,
            G = {},
            V = G.toString,
            K = G.hasOwnProperty,
            X = {},
            Q = p.document,
            J = "2.1.4",
            Z = function(e, t) {
                return new Z.fn.init(e, t)
            },
            ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            te = /^-ms-/,
            ne = /-([\da-z])/gi,
            ie = function(e, t) {
                return t.toUpperCase()
            };
        Z.fn = Z.prototype = {
            jquery: J,
            constructor: Z,
            selector: "",
            length: 0,
            toArray: function() {
                return B.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : B.call(this)
            },
            pushStack: function(e) {
                var t = Z.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return Z.each(this, e, t)
            },
            map: function(n) {
                return this.pushStack(Z.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(B.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: U,
            sort: z.sort,
            splice: z.splice
        }, Z.extend = Z.fn.extend = function(e) {
            var t, n, i, o, r, a, s = e || {},
                c = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[c] || {}, c++), "object" == typeof s || Z.isFunction(s) || (s = {}), c === l && (s = this, c--); c < l; c++)
                if (null != (t = arguments[c]))
                    for (n in t) i = s[n], s !== (o = t[n]) && (u && o && (Z.isPlainObject(o) || (r = Z.isArray(o))) ? (r ? (r = !1, a = i && Z.isArray(i) ? i : []) : a = i && Z.isPlainObject(i) ? i : {}, s[n] = Z.extend(u, a, o)) : o !== undefined && (s[n] = o));
            return s
        }, Z.extend({
            expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === Z.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                return !Z.isArray(e) && 0 <= e - parseFloat(e) + 1
            },
            isPlainObject: function(e) {
                return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !K.call(e.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? G[V.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                (e = Z.trim(e)) && (1 === e.indexOf("use strict") ? ((t = Q.createElement("script")).text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(te, "ms-").replace(ne, ie)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var i = 0,
                    o = e.length,
                    r = s(e);
                if (n) {
                    if (r)
                        for (; i < o && !1 !== t.apply(e[i], n); i++);
                    else
                        for (i in e)
                            if (!1 === t.apply(e[i], n)) break
                } else if (r)
                    for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ee, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (s(Object(e)) ? Z.merge(n, "string" == typeof e ? [e] : e) : U.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : Y.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var i, o = 0,
                    r = e.length,
                    a = [];
                if (s(e))
                    for (; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return W.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, o;
                return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (i = B.call(arguments, 2), (o = function() {
                    return e.apply(t || this, i.concat(B.call(arguments)))
                }).guid = e.guid = e.guid || Z.guid++, o) : undefined
            },
            now: Date.now,
            support: X
        }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            G["[object " + t + "]"] = t.toLowerCase()
        });
        var oe = function(n) {
            function b(e, t, n, i) {
                var o, r, a, s, c, l, u, d, f, h;
                if ((t ? t.ownerDocument || t : F) !== $ && L(t), n = n || [], s = (t = t || $).nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!i && A) {
                    if (11 !== s && (o = ve.exec(e)))
                        if (a = o[1]) {
                            if (9 === s) {
                                if (!(r = t.getElementById(a)) || !r.parentNode) return n;
                                if (r.id === a) return n.push(r), n
                            } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && q(t, r) && r.id === a) return n.push(r), n
                        } else {
                            if (o[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = o[3]) && x.getElementsByClassName) return J.apply(n, t.getElementsByClassName(a)), n
                        } if (x.qsa && (!I || !I.test(e))) {
                        if (d = u = M, f = t, h = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (l = C(e), (u = t.getAttribute("id")) ? d = u.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", c = l.length; c--;) l[c] = d + m(l[c]);
                            f = ye.test(e) && g(t.parentNode) || t, h = l.join(",")
                        }
                        if (h) try {
                            return J.apply(n, f.querySelectorAll(h)), n
                        } catch (p) {} finally {
                            u || t.removeAttribute("id")
                        }
                    }
                }
                return S(e.replace(ce, "$1"), t, n, i)
            }

            function e() {
                function n(e, t) {
                    return i.push(e + " ") > _.cacheLength && delete n[i.shift()], n[e + " "] = t
                }
                var i = [];
                return n
            }

            function c(e) {
                return e[M] = !0, e
            }

            function i(e) {
                var t = $.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function t(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) _.attrHandle[n[i]] = t
            }

            function l(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function o(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function r(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }

            function a(a) {
                return c(function(r) {
                    return r = +r, c(function(e, t) {
                        for (var n, i = a([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function g(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function s() {}

            function m(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function d(a, e, t) {
                var s = e.dir,
                    c = t && "parentNode" === s,
                    l = z++;
                return e.first ? function(e, t, n) {
                    for (; e = e[s];)
                        if (1 === e.nodeType || c) return a(e, t, n)
                } : function(e, t, n) {
                    var i, o, r = [H, l];
                    if (n) {
                        for (; e = e[s];)
                            if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                    } else
                        for (; e = e[s];)
                            if (1 === e.nodeType || c) {
                                if ((i = (o = e[M] || (e[M] = {}))[s]) && i[0] === H && i[1] === l) return r[2] = i[2];
                                if ((o[s] = r)[2] = a(e, t, n)) return !0
                            }
                }
            }

            function f(o) {
                return 1 < o.length ? function(e, t, n) {
                    for (var i = o.length; i--;)
                        if (!o[i](e, t, n)) return !1;
                    return !0
                } : o[0]
            }

            function v(e, t, n) {
                for (var i = 0, o = t.length; i < o; i++) b(e, t[i], n);
                return n
            }

            function w(e, t, n, i, o) {
                for (var r, a = [], s = 0, c = e.length, l = null != t; s < c; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), l && t.push(s)));
                return a
            }

            function y(h, p, g, m, x, e) {
                return m && !m[M] && (m = y(m)), x && !x[M] && (x = y(x, e)), c(function(e, t, n, i) {
                    var o, r, a, s = [],
                        c = [],
                        l = t.length,
                        u = e || v(p || "*", n.nodeType ? [n] : n, []),
                        d = !h || !e && p ? u : w(u, s, h, n, i),
                        f = g ? x || (e ? h : l || m) ? [] : t : d;
                    if (g && g(d, f, n, i), m)
                        for (o = w(f, c), m(o, [], n, i), r = o.length; r--;)(a = o[r]) && (f[c[r]] = !(d[c[r]] = a));
                    if (e) {
                        if (x || h) {
                            if (x) {
                                for (o = [], r = f.length; r--;)(a = f[r]) && o.push(d[r] = a);
                                x(null, f = [], o, i)
                            }
                            for (r = f.length; r--;)(a = f[r]) && -1 < (o = x ? ee(e, a) : s[r]) && (e[o] = !(t[o] = a))
                        }
                    } else f = w(f === t ? f.splice(l, f.length) : f), x ? x(null, t, f, i) : J.apply(t, f)
                })
            }

            function h(e) {
                for (var o, t, n, i = e.length, r = _.relative[e[0].type], a = r || _.relative[" "], s = r ? 1 : 0, c = d(function(e) {
                        return e === o
                    }, a, !0), l = d(function(e) {
                        return -1 < ee(o, e)
                    }, a, !0), u = [function(e, t, n) {
                        var i = !r && (n || t !== j) || ((o = t).nodeType ? c(e, t, n) : l(e, t, n));
                        return o = null, i
                    }]; s < i; s++)
                    if (t = _.relative[e[s].type]) u = [d(f(u), t)];
                    else {
                        if ((t = _.filter[e[s].type].apply(null, e[s].matches))[M]) {
                            for (n = ++s; n < i && !_.relative[e[n].type]; n++);
                            return y(1 < s && f(u), 1 < s && m(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(ce, "$1"), t, s < n && h(e.slice(s, n)), n < i && h(e = e.slice(n)), n < i && m(e))
                        }
                        u.push(t)
                    } return f(u)
            }

            function u(m, x) {
                var v = 0 < x.length,
                    y = 0 < m.length,
                    e = function(e, t, n, i, o) {
                        var r, a, s, c = 0,
                            l = "0",
                            u = e && [],
                            d = [],
                            f = j,
                            h = e || y && _.find.TAG("*", o),
                            p = H += null == f ? 1 : Math.random() || .1,
                            g = h.length;
                        for (o && (j = t !== $ && t); l !== g && null != (r = h[l]); l++) {
                            if (y && r) {
                                for (a = 0; s = m[a++];)
                                    if (s(r, t, n)) {
                                        i.push(r);
                                        break
                                    } o && (H = p)
                            }
                            v && ((r = !s && r) && c--, e && u.push(r))
                        }
                        if (c += l, v && l !== c) {
                            for (a = 0; s = x[a++];) s(u, d, t, n);
                            if (e) {
                                if (0 < c)
                                    for (; l--;) u[l] || d[l] || (d[l] = X.call(i));
                                d = w(d)
                            }
                            J.apply(i, d), o && !e && 0 < d.length && 1 < c + x.length && b.uniqueSort(i)
                        }
                        return o && (H = p, j = f), u
                    };
                return v ? c(e) : e
            }
            var p, x, _, T, k, C, E, S, j, O, N, L, $, D, A, I, R, P, q, M = "sizzle" + 1 * new Date,
                F = n.document,
                H = 0,
                z = 0,
                B = e(),
                W = e(),
                U = e(),
                Y = function(e, t) {
                    return e === t && (N = !0), 0
                },
                G = 1 << 31,
                V = {}.hasOwnProperty,
                K = [],
                X = K.pop,
                Q = K.push,
                J = K.push,
                Z = K.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = ie.replace("w", "w#"),
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
                ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                ce = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                fe = new RegExp(ae),
                he = new RegExp("^" + oe + "$"),
                pe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + re),
                    PSEUDO: new RegExp("^" + ae),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                ge = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                xe = /^[^{]+\{\s*\[native \w/,
                ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                _e = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                Te = function() {
                    L()
                };
            try {
                J.apply(K = Z.call(F.childNodes), F.childNodes), K[F.childNodes.length].nodeType
            } catch (ke) {
                J = {
                    apply: K.length ? function(e, t) {
                        Q.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            for (p in x = b.support = {}, k = b.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, L = b.setDocument = function(e) {
                    var t, n, c = e ? e.ownerDocument || e : F;
                    return c !== $ && 9 === c.nodeType && c.documentElement ? (D = ($ = c).documentElement, (n = c.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), A = !k(c), x.attributes = i(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), x.getElementsByTagName = i(function(e) {
                        return e.appendChild(c.createComment("")), !e.getElementsByTagName("*").length
                    }), x.getElementsByClassName = xe.test(c.getElementsByClassName), x.getById = i(function(e) {
                        return D.appendChild(e).id = M, !c.getElementsByName || !c.getElementsByName(M).length
                    }), x.getById ? (_.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && A) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, _.filter.ID = function(e) {
                        var t = e.replace(we, _e);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete _.find.ID, _.filter.ID = function(e) {
                        var n = e.replace(we, _e);
                        return function(e) {
                            var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }), _.find.TAG = x.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, i = [],
                            o = 0,
                            r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }, _.find.CLASS = x.getElementsByClassName && function(e, t) {
                        if (A) return t.getElementsByClassName(e)
                    }, R = [], I = [], (x.qsa = xe.test(c.querySelectorAll)) && (i(function(e) {
                        D.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + M + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || I.push(".#.+[+~]")
                    }), i(function(e) {
                        var t = c.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                    })), (x.matchesSelector = xe.test(P = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function(e) {
                        x.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), R.push("!=", ae)
                    }), I = I.length && new RegExp(I.join("|")), R = R.length && new RegExp(R.join("|")), t = xe.test(D.compareDocumentPosition), q = t || xe.test(D.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, Y = t ? function(e, t) {
                        if (e === t) return N = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === c || e.ownerDocument === F && q(F, e) ? -1 : t === c || t.ownerDocument === F && q(F, t) ? 1 : O ? ee(O, e) - ee(O, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return N = !0, 0;
                        var n, i = 0,
                            o = e.parentNode,
                            r = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!o || !r) return e === c ? -1 : t === c ? 1 : o ? -1 : r ? 1 : O ? ee(O, e) - ee(O, t) : 0;
                        if (o === r) return l(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[i] === s[i];) i++;
                        return i ? l(a[i], s[i]) : a[i] === F ? -1 : s[i] === F ? 1 : 0
                    }, c) : $
                }, b.matches = function(e, t) {
                    return b(e, null, null, t)
                }, b.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== $ && L(e), t = t.replace(de, "='$1']"), x.matchesSelector && A && (!R || !R.test(t)) && (!I || !I.test(t))) try {
                        var n = P.call(e, t);
                        if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (ke) {}
                    return 0 < b(t, $, null, [e]).length
                }, b.contains = function(e, t) {
                    return (e.ownerDocument || e) !== $ && L(e), q(e, t)
                }, b.attr = function(e, t) {
                    (e.ownerDocument || e) !== $ && L(e);
                    var n = _.attrHandle[t.toLowerCase()],
                        i = n && V.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !A) : undefined;
                    return i !== undefined ? i : x.attributes || !A ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, b.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, b.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        o = 0;
                    if (N = !x.detectDuplicates, O = !x.sortStable && e.slice(0), e.sort(Y), N) {
                        for (; t = e[o++];) t === e[o] && (i = n.push(o));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return O = null, e
                }, T = b.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += T(t);
                    return n
                }, (_ = b.selectors = {
                    cacheLength: 50,
                    createPseudo: c,
                    match: pe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(we, _e), e[3] = (e[3] || e[4] || e[5] || "").replace(we, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || b.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && b.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(we, _e).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = B[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, i, o) {
                            return function(e) {
                                var t = b.attr(e, n);
                                return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(se, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                            }
                        },
                        CHILD: function(h, e, t, p, g) {
                            var m = "nth" !== h.slice(0, 3),
                                x = "last" !== h.slice(-4),
                                v = "of-type" === e;
                            return 1 === p && 0 === g ? function(e) {
                                return !!e.parentNode
                            } : function(e, t, n) {
                                var i, o, r, a, s, c, l = m !== x ? "nextSibling" : "previousSibling",
                                    u = e.parentNode,
                                    d = v && e.nodeName.toLowerCase(),
                                    f = !n && !v;
                                if (u) {
                                    if (m) {
                                        for (; l;) {
                                            for (r = e; r = r[l];)
                                                if (v ? r.nodeName.toLowerCase() === d : 1 === r.nodeType) return !1;
                                            c = l = "only" === h && !c && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (c = [x ? u.firstChild : u.lastChild], x && f) {
                                        for (s = (i = (o = u[M] || (u[M] = {}))[h] || [])[0] === H && i[1], a = i[0] === H && i[2], r = s && u.childNodes[s]; r = ++s && r && r[l] || (a = s = 0) || c.pop();)
                                            if (1 === r.nodeType && ++a && r === e) {
                                                o[h] = [H, s, a];
                                                break
                                            }
                                    } else if (f && (i = (e[M] || (e[M] = {}))[h]) && i[0] === H) a = i[1];
                                    else
                                        for (;
                                            (r = ++s && r && r[l] || (a = s = 0) || c.pop()) && ((v ? r.nodeName.toLowerCase() !== d : 1 !== r.nodeType) || !++a || (f && ((r[M] || (r[M] = {}))[h] = [H, a]), r !== e)););
                                    return (a -= g) === p || a % p == 0 && 0 <= a / p
                                }
                            }
                        },
                        PSEUDO: function(e, r) {
                            var t, a = _.pseudos[e] || _.setFilters[e.toLowerCase()] || b.error("unsupported pseudo: " + e);
                            return a[M] ? a(r) : 1 < a.length ? (t = [e, e, "", r], _.setFilters.hasOwnProperty(e.toLowerCase()) ? c(function(e, t) {
                                for (var n, i = a(e, r), o = i.length; o--;) e[n = ee(e, i[o])] = !(t[n] = i[o])
                            }) : function(e) {
                                return a(e, 0, t)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: c(function(e) {
                            var i = [],
                                o = [],
                                s = E(e.replace(ce, "$1"));
                            return s[M] ? c(function(e, t, n, i) {
                                for (var o, r = s(e, null, i, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o))
                            }) : function(e, t, n) {
                                return i[0] = e, s(i, null, n, o), i[0] = null, !o.pop()
                            }
                        }),
                        has: c(function(t) {
                            return function(e) {
                                return 0 < b(t, e).length
                            }
                        }),
                        contains: c(function(t) {
                            return t = t.replace(we, _e),
                                function(e) {
                                    return -1 < (e.textContent || e.innerText || T(e)).indexOf(t)
                                }
                        }),
                        lang: c(function(n) {
                            return he.test(n || "") || b.error("unsupported lang: " + n), n = n.replace(we, _e).toLowerCase(),
                                function(e) {
                                    var t;
                                    do {
                                        if (t = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === D
                        },
                        focus: function(e) {
                            return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return !1 === e.disabled
                        },
                        disabled: function(e) {
                            return !0 === e.disabled
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !_.pseudos.empty(e)
                        },
                        header: function(e) {
                            return me.test(e.nodeName)
                        },
                        input: function(e) {
                            return ge.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: a(function() {
                            return [0]
                        }),
                        last: a(function(e, t) {
                            return [t - 1]
                        }),
                        eq: a(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: a(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: a(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: a(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                            return e
                        }),
                        gt: a(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }).pseudos.nth = _.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) _.pseudos[p] = o(p);
            for (p in {
                    submit: !0,
                    reset: !0
                }) _.pseudos[p] = r(p);
            return s.prototype = _.filters = _.pseudos, _.setFilters = new s, C = b.tokenize = function(e, t) {
                var n, i, o, r, a, s, c, l = W[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, s = [], c = _.preFilter; a;) {
                    for (r in n && !(i = le.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(o = [])), n = !1, (i = ue.exec(a)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(ce, " ")
                        }), a = a.slice(n.length)), _.filter) !(i = pe[r].exec(a)) || c[r] && !(i = c[r](i)) || (n = i.shift(), o.push({
                        value: n,
                        type: r,
                        matches: i
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? b.error(e) : W(e, s).slice(0)
            }, E = b.compile = function(e, t) {
                var n, i = [],
                    o = [],
                    r = U[e + " "];
                if (!r) {
                    for (t || (t = C(e)), n = t.length; n--;)(r = h(t[n]))[M] ? i.push(r) : o.push(r);
                    (r = U(e, u(o, i))).selector = e
                }
                return r
            }, S = b.select = function(e, t, n, i) {
                var o, r, a, s, c, l = "function" == typeof e && e,
                    u = !i && C(e = l.selector || e);
                if (n = n || [], 1 === u.length) {
                    if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (a = r[0]).type && x.getById && 9 === t.nodeType && A && _.relative[r[1].type]) {
                        if (!(t = (_.find.ID(a.matches[0].replace(we, _e), t) || [])[0])) return n;
                        l && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (o = pe.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !_.relative[s = a.type]);)
                        if ((c = _.find[s]) && (i = c(a.matches[0].replace(we, _e), ye.test(r[0].type) && g(t.parentNode) || t))) {
                            if (r.splice(o, 1), !(e = i.length && m(r))) return J.apply(n, i), n;
                            break
                        }
                }
                return (l || E(e, u))(i, t, !A, n, ye.test(e) && g(t.parentNode) || t), n
            }, x.sortStable = M.split("").sort(Y).join("") === M, x.detectDuplicates = !!N, L(), x.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition($.createElement("div"))
            }), i(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || t("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && i(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || t("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), i(function(e) {
                return null == e.getAttribute("disabled")
            }) || t(te, function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), b
        }(p);
        Z.find = oe, Z.expr = oe.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = oe.uniqueSort, Z.text = oe.getText, Z.isXMLDoc = oe.isXML, Z.contains = oe.contains;
        var re = Z.expr.match.needsContext,
            ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            se = /^.[^:#\[\.,]*$/;
        Z.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Z.find.matchesSelector(i, e) ? [i] : [] : Z.find.matches(e, Z.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, Z.fn.extend({
            find: function(e) {
                var t, n = this.length,
                    i = [],
                    o = this;
                if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (Z.contains(o[t], this)) return !0
                }));
                for (t = 0; t < n; t++) Z.find(e, o[t], i);
                return (i = this.pushStack(1 < n ? Z.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function(e) {
                return this.pushStack(t(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(t(this, e || [], !0))
            },
            is: function(e) {
                return !!t(this, "string" == typeof e && re.test(e) ? Z(e) : e || [], !1).length
            }
        });
        var ce, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (Z.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : le.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || ce).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), ae.test(n[1]) && Z.isPlainObject(t))
                        for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return (i = Q.getElementById(n[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = Q, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ce.ready ? ce.ready(e) : e(Z) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
        }).prototype = Z.fn, ce = Z(Q);
        var ue = /^(?:parents|prev(?:Until|All))/,
            de = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        Z.extend({
            dir: function(e, t, n) {
                for (var i = [], o = n !== undefined;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && Z(e).is(n)) break;
                        i.push(e)
                    } return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), Z.fn.extend({
            has: function(e) {
                var t = Z(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (Z.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, o = this.length, r = [], a = re.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        } return this.pushStack(1 < r.length ? Z.unique(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? Y.call(Z(e), this[0]) : Y.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), Z.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return Z.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Z.dir(e, "parentNode", n)
            },
            next: function(e) {
                return n(e, "nextSibling")
            },
            prev: function(e) {
                return n(e, "previousSibling")
            },
            nextAll: function(e) {
                return Z.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return Z.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Z.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Z.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Z.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Z.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || Z.merge([], e.childNodes)
            }
        }, function(i, o) {
            Z.fn[i] = function(e, t) {
                var n = Z.map(this, o, e);
                return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = Z.filter(t, n)), 1 < this.length && (de[i] || Z.unique(n), ue.test(i) && n.reverse()), this.pushStack(n)
            }
        });
        var fe, he = /\S+/g,
            pe = {};
        Z.Callbacks = function(o) {
            o = "string" == typeof o ? pe[o] || f(o) : Z.extend({}, o);
            var t, n, r, a, s, i, c = [],
                l = !o.once && [],
                u = function(e) {
                    for (t = o.memory && e, n = !0, i = a || 0, a = 0, s = c.length, r = !0; c && i < s; i++)
                        if (!1 === c[i].apply(e[0], e[1]) && o.stopOnFalse) {
                            t = !1;
                            break
                        } r = !1, c && (l ? l.length && u(l.shift()) : t ? c = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (c) {
                            var e = c.length;
                            ! function i(e) {
                                Z.each(e, function(e, t) {
                                    var n = Z.type(t);
                                    "function" === n ? o.unique && d.has(t) || c.push(t) : t && t.length && "string" !== n && i(t)
                                })
                            }(arguments), r ? s = c.length : t && (a = e, u(t))
                        }
                        return this
                    },
                    remove: function() {
                        return c && Z.each(arguments, function(e, t) {
                            for (var n; - 1 < (n = Z.inArray(t, c, n));) c.splice(n, 1), r && (n <= s && s--, n <= i && i--)
                        }), this
                    },
                    has: function(e) {
                        return e ? -1 < Z.inArray(e, c) : !(!c || !c.length)
                    },
                    empty: function() {
                        return c = [], s = 0, this
                    },
                    disable: function() {
                        return c = l = t = undefined, this
                    },
                    disabled: function() {
                        return !c
                    },
                    lock: function() {
                        return l = undefined, t || d.disable(), this
                    },
                    locked: function() {
                        return !l
                    },
                    fireWith: function(e, t) {
                        return !c || n && !l || (t = [e, (t = t || []).slice ? t.slice() : t], r ? l.push(t) : u(t)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return d
        }, Z.extend({
            Deferred: function(e) {
                var r = [
                        ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", Z.Callbacks("memory")]
                    ],
                    o = "pending",
                    a = {
                        state: function() {
                            return o
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var o = arguments;
                            return Z.Deferred(function(i) {
                                Z.each(r, function(e, t) {
                                    var n = Z.isFunction(o[e]) && o[e];
                                    s[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && Z.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments)
                                    })
                                }), o = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? Z.extend(e, a) : a
                        }
                    },
                    s = {};
                return a.pipe = a.then, Z.each(r, function(e, t) {
                    var n = t[2],
                        i = t[3];
                    a[t[1]] = n.add, i && n.add(function() {
                        o = i
                    }, r[1 ^ e][2].disable, r[2][2].lock), s[t[0]] = function() {
                        return s[t[0] + "With"](this === s ? a : this, arguments), this
                    }, s[t[0] + "With"] = n.fireWith
                }), a.promise(s), e && e.call(s, s), s
            },
            when: function(e) {
                var o, t, n, i = 0,
                    r = B.call(arguments),
                    a = r.length,
                    s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0,
                    c = 1 === s ? e : Z.Deferred(),
                    l = function(t, n, i) {
                        return function(e) {
                            n[t] = this, i[t] = 1 < arguments.length ? B.call(arguments) : e, i === o ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                        }
                    };
                if (1 < a)
                    for (o = new Array(a), t = new Array(a), n = new Array(a); i < a; i++) r[i] && Z.isFunction(r[i].promise) ? r[i].promise().done(l(i, n, r)).fail(c.reject).progress(l(i, t, o)) : --s;
                return s || c.resolveWith(n, r), c.promise()
            }
        }), Z.fn.ready = function(e) {
            return Z.ready.promise().done(e), this
        }, Z.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? Z.readyWait++ : Z.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --Z.readyWait : Z.isReady) || (Z.isReady = !0) !== e && 0 < --Z.readyWait || (fe.resolveWith(Q, [Z]), Z.fn.triggerHandler && (Z(Q).triggerHandler("ready"), Z(Q).off("ready")))
            }
        }), Z.ready.promise = function(e) {
            return fe || (fe = Z.Deferred(), "complete" === Q.readyState ? setTimeout(Z.ready) : (Q.addEventListener("DOMContentLoaded", i, !1), p.addEventListener("load", i, !1))), fe.promise(e)
        }, Z.ready.promise();
        var ge = Z.access = function(e, t, n, i, o, r, a) {
            var s = 0,
                c = e.length,
                l = null == n;
            if ("object" === Z.type(n))
                for (s in o = !0, n) Z.access(e, t, s, n[s], !0, r, a);
            else if (i !== undefined && (o = !0, Z.isFunction(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(Z(e), n)
                })), t))
                for (; s < c; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return o ? e : l ? t.call(e) : c ? t(e[0], n) : r
        };
        Z.acceptData = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }, o.uid = 1, o.accepts = Z.acceptData, o.prototype = {
            key: function(e) {
                if (!o.accepts(e)) return 0;
                var t = {},
                    n = e[this.expando];
                if (!n) {
                    n = o.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        }, Object.defineProperties(e, t)
                    } catch (i) {
                        t[this.expando] = n, Z.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(e, t, n) {
                var i, o = this.key(e),
                    r = this.cache[o];
                if ("string" == typeof t) r[t] = n;
                else if (Z.isEmptyObject(r)) Z.extend(this.cache[o], t);
                else
                    for (i in t) r[i] = t[i];
                return r
            },
            get: function(e, t) {
                var n = this.cache[this.key(e)];
                return t === undefined ? n : n[t]
            },
            access: function(e, t, n) {
                var i;
                return t === undefined || t && "string" == typeof t && n === undefined ? (i = this.get(e, t)) !== undefined ? i : this.get(e, Z.camelCase(t)) : (this.set(e, t, n), n !== undefined ? n : t)
            },
            remove: function(e, t) {
                var n, i, o, r = this.key(e),
                    a = this.cache[r];
                if (t === undefined) this.cache[r] = {};
                else {
                    Z.isArray(t) ? i = t.concat(t.map(Z.camelCase)) : (o = Z.camelCase(t), i = t in a ? [t, o] : (i = o) in a ? [i] : i.match(he) || []), n = i.length;
                    for (; n--;) delete a[i[n]]
                }
            },
            hasData: function(e) {
                return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        };
        var me = new o,
            xe = new o,
            ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ye = /([A-Z])/g;
        Z.extend({
            hasData: function(e) {
                return xe.hasData(e) || me.hasData(e)
            },
            data: function(e, t, n) {
                return xe.access(e, t, n)
            },
            removeData: function(e, t) {
                xe.remove(e, t)
            },
            _data: function(e, t, n) {
                return me.access(e, t, n)
            },
            _removeData: function(e, t) {
                me.remove(e, t)
            }
        }), Z.fn.extend({
            data: function(i, e) {
                var t, n, o, r = this[0],
                    a = r && r.attributes;
                if (i === undefined) {
                    if (this.length && (o = xe.get(r), 1 === r.nodeType && !me.get(r, "hasDataAttrs"))) {
                        for (t = a.length; t--;) a[t] && 0 === (n = a[t].name).indexOf("data-") && (n = Z.camelCase(n.slice(5)), c(r, n, o[n]));
                        me.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof i ? this.each(function() {
                    xe.set(this, i)
                }) : ge(this, function(t) {
                    var e, n = Z.camelCase(i);
                    if (r && t === undefined) return (e = xe.get(r, i)) !== undefined ? e : (e = xe.get(r, n)) !== undefined ? e : (e = c(r, n, undefined)) !== undefined ? e : void 0;
                    this.each(function() {
                        var e = xe.get(this, n);
                        xe.set(this, n, t), -1 !== i.indexOf("-") && e !== undefined && xe.set(this, i, t)
                    })
                }, null, e, 1 < arguments.length, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    xe.remove(this, e)
                })
            }
        }), Z.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = me.get(e, t), n && (!i || Z.isArray(n) ? i = me.access(e, t, Z.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = Z.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = Z._queueHooks(e, t),
                    a = function() {
                        Z.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return me.get(e, n) || me.access(e, n, {
                    empty: Z.Callbacks("once memory").add(function() {
                        me.remove(e, [t + "queue", n])
                    })
                })
            }
        }), Z.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? Z.queue(this[0], t) : n === undefined ? this : this.each(function() {
                    var e = Z.queue(this, t, n);
                    Z._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && Z.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    Z.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    o = Z.Deferred(),
                    r = this,
                    a = this.length,
                    s = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;)(n = me.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var be, we, _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Te = ["Top", "Right", "Bottom", "Left"],
            ke = function(e, t) {
                return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
            },
            Ce = /^(?:checkbox|radio)$/i;
        be = Q.createDocumentFragment().appendChild(Q.createElement("div")), (we = Q.createElement("input")).setAttribute("type", "radio"), we.setAttribute("checked", "checked"), we.setAttribute("name", "t"), be.appendChild(we), X.checkClone = be.cloneNode(!0).cloneNode(!0).lastChild.checked, be.innerHTML = "<textarea>x</textarea>", X.noCloneChecked = !!be.cloneNode(!0).lastChild.defaultValue;
        var Ee = typeof undefined;
        X.focusinBubbles = "onfocusin" in p;
        var Se = /^key/,
            je = /^(?:mouse|pointer|contextmenu)|click/,
            Oe = /^(?:focusinfocus|focusoutblur)$/,
            Ne = /^([^.]*)(?:\.(.+)|)$/;
        Z.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, a, s, c, l, u, d, f, h, p, g, m = me.get(t);
                if (m)
                    for (n.handler && (n = (r = n).handler, o = r.selector), n.guid || (n.guid = Z.guid++), (c = m.events) || (c = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                            return typeof Z !== Ee && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : undefined
                        }), l = (e = (e || "").match(he) || [""]).length; l--;) h = g = (s = Ne.exec(e[l]) || [])[1], p = (s[2] || "").split(".").sort(), h && (d = Z.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = Z.event.special[h] || {}, u = Z.extend({
                        type: h,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && Z.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, r), (f = c[h]) || ((f = c[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(h, a, !1)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), Z.event.global[h] = !0)
            },
            remove: function(e, t, n, i, o) {
                var r, a, s, c, l, u, d, f, h, p, g, m = me.hasData(e) && me.get(e);
                if (m && (c = m.events)) {
                    for (l = (t = (t || "").match(he) || [""]).length; l--;)
                        if (h = g = (s = Ne.exec(t[l]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                            for (d = Z.event.special[h] || {}, f = c[h = (i ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--;) u = f[r], !o && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                            a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || Z.removeEvent(e, h, m.handle), delete c[h])
                        } else
                            for (h in c) Z.event.remove(e, h + t[l], n, i, !0);
                    Z.isEmptyObject(c) && (delete m.handle, me.remove(e, "events"))
                }
            },
            trigger: function(e, t, n, i) {
                var o, r, a, s, c, l, u, d = [n || Q],
                    f = K.call(e, "type") ? e.type : e,
                    h = K.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = a = n = n || Q, 3 !== n.nodeType && 8 !== n.nodeType && !Oe.test(f + Z.event.triggered) && (0 <= f.indexOf(".") && (f = (h = f.split(".")).shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, (e = e[Z.expando] ? e : new Z.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), t = null == t ? [e] : Z.makeArray(t, [e]), u = Z.event.special[f] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                    if (!i && !u.noBubble && !Z.isWindow(n)) {
                        for (s = u.delegateType || f, Oe.test(s + f) || (r = r.parentNode); r; r = r.parentNode) d.push(r), a = r;
                        a === (n.ownerDocument || Q) && d.push(a.defaultView || a.parentWindow || p)
                    }
                    for (o = 0;
                        (r = d[o++]) && !e.isPropagationStopped();) e.type = 1 < o ? s : u.bindType || f, (l = (me.get(r, "events") || {})[e.type] && me.get(r, "handle")) && l.apply(r, t), (l = c && r[c]) && l.apply && Z.acceptData(r) && (e.result = l.apply(r, t), !1 === e.result && e.preventDefault());
                    return e.type = f, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !Z.acceptData(n) || c && Z.isFunction(n[f]) && !Z.isWindow(n) && ((a = n[c]) && (n[c] = null), n[Z.event.triggered = f](), Z.event.triggered = undefined, a && (n[c] = a)), e.result
                }
            },
            dispatch: function(e) {
                e = Z.event.fix(e);
                var t, n, i, o, r, a = [],
                    s = B.call(arguments),
                    c = (me.get(this, "events") || {})[e.type] || [],
                    l = Z.event.special[e.type] || {};
                if ((s[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                    for (a = Z.event.handlers.call(this, e, c), t = 0;
                        (o = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, (i = ((Z.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, a = [],
                    s = t.delegateCount,
                    c = e.target;
                if (s && c.nodeType && (!e.button || "click" !== e.type))
                    for (; c !== this; c = c.parentNode || this)
                        if (!0 !== c.disabled || "click" !== e.type) {
                            for (i = [], n = 0; n < s; n++) i[o = (r = t[n]).selector + " "] === undefined && (i[o] = r.needsContext ? 0 <= Z(o, this).index(c) : Z.find(o, this, null, [c]).length), i[o] && i.push(r);
                            i.length && a.push({
                                elem: c,
                                handlers: i
                            })
                        } return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, o, r = t.button;
                    return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || Q).documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || r === undefined || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[Z.expando]) return e;
                var t, n, i, o = e.type,
                    r = e,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = je.test(o) ? this.mouseHooks : Se.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(r), t = i.length; t--;) e[n = i[t]] = r[n];
                return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, r) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== a() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === a() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && Z.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return Z.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var o = Z.extend(new Z.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? Z.event.trigger(o, null, t) : Z.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, Z.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }, Z.Event = function(e, t) {
            if (!(this instanceof Z.Event)) return new Z.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? r : l) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), this[Z.expando] = !0
        }, Z.Event.prototype = {
            isDefaultPrevented: l,
            isPropagationStopped: l,
            isImmediatePropagationStopped: l,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = r, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = r, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = r, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, Z.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, r) {
            Z.event.special[e] = {
                delegateType: r,
                bindType: r,
                handle: function(e) {
                    var t, n = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return i && (i === n || Z.contains(n, i)) || (e.type = o.origType, t = o.handler.apply(this, arguments), e.type = r), t
                }
            }
        }), X.focusinBubbles || Z.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, i) {
            var o = function(e) {
                Z.event.simulate(i, e.target, Z.event.fix(e), !0)
            };
            Z.event.special[i] = {
                setup: function() {
                    var e = this.ownerDocument || this,
                        t = me.access(e, i);
                    t || e.addEventListener(n, o, !0), me.access(e, i, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this,
                        t = me.access(e, i) - 1;
                    t ? me.access(e, i, t) : (e.removeEventListener(n, o, !0), me.remove(e, i))
                }
            }
        }), Z.fn.extend({
            on: function(e, t, n, i, o) {
                var r, a;
                if ("object" == typeof e) {
                    for (a in "string" != typeof t && (n = n || t, t = undefined), e) this.on(a, t, n, e[a], o);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = undefined) : null == i && ("string" == typeof t ? (i = n, n = undefined) : (i = n, n = t, t = undefined)), !1 === i) i = l;
                else if (!i) return this;
                return 1 === o && (r = i, (i = function(e) {
                    return Z().off(e), r.apply(this, arguments)
                }).guid = r.guid || (r.guid = Z.guid++)), this.each(function() {
                    Z.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Z(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = l), this.each(function() {
                    Z.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    Z.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return Z.event.trigger(e, t, n, !0)
            }
        });
        var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            $e = /<([\w:]+)/,
            De = /<|&#?\w+;/,
            Ae = /<(?:script|style|link)/i,
            Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Re = /^$|\/(?:java|ecma)script/i,
            Pe = /^true\/(.*)/,
            qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Me = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Me.optgroup = Me.option, Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td, Z.extend({
            clone: function(e, t, n) {
                var i, o, r, a, s = e.cloneNode(!0),
                    c = Z.contains(e.ownerDocument, e);
                if (!(X.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                    for (a = v(s), i = 0, o = (r = v(e)).length; i < o; i++) h(r[i], a[i]);
                if (t)
                    if (n)
                        for (r = r || v(e), a = a || v(s), i = 0, o = r.length; i < o; i++) d(r[i], a[i]);
                    else d(e, s);
                return 0 < (a = v(s, "script")).length && x(a, !c && v(e, "script")), s
            },
            buildFragment: function(e, t, n, i) {
                for (var o, r, a, s, c, l, u = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
                    if ((o = e[f]) || 0 === o)
                        if ("object" === Z.type(o)) Z.merge(d, o.nodeType ? [o] : o);
                        else if (De.test(o)) {
                    for (r = r || u.appendChild(t.createElement("div")), a = ($e.exec(o) || ["", ""])[1].toLowerCase(), s = Me[a] || Me._default, r.innerHTML = s[1] + o.replace(Le, "<$1></$2>") + s[2], l = s[0]; l--;) r = r.lastChild;
                    Z.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
                } else d.push(t.createTextNode(o));
                for (u.textContent = "", f = 0; o = d[f++];)
                    if ((!i || -1 === Z.inArray(o, i)) && (c = Z.contains(o.ownerDocument, o), r = v(u.appendChild(o), "script"), c && x(r), n))
                        for (l = 0; o = r[l++];) Re.test(o.type || "") && n.push(o);
                return u
            },
            cleanData: function(e) {
                for (var t, n, i, o, r = Z.event.special, a = 0;
                    (n = e[a]) !== undefined; a++) {
                    if (Z.acceptData(n) && (o = n[me.expando]) && (t = me.cache[o])) {
                        if (t.events)
                            for (i in t.events) r[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
                        me.cache[o] && delete me.cache[o]
                    }
                    delete xe.cache[n[xe.expando]]
                }
            }
        }), Z.fn.extend({
            text: function(e) {
                return ge(this, function(e) {
                    return e === undefined ? Z.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || u(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = u(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? Z.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && x(v(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return Z.clone(this, e, t)
                })
            },
            html: function(e) {
                return ge(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Ae.test(e) && !Me[($e.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Le, "<$1></$2>");
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (o) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                var t = e;
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, Z.cleanData(v(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(n, i) {
                n = W.apply([], n);
                var e, t, o, r, a, s, c = 0,
                    l = this.length,
                    u = this,
                    d = l - 1,
                    f = n[0],
                    h = Z.isFunction(f);
                if (h || 1 < l && "string" == typeof f && !X.checkClone && Ie.test(f)) return this.each(function(e) {
                    var t = u.eq(e);
                    h && (n[0] = f.call(this, e, t.html())), t.domManip(n, i)
                });
                if (l && (t = (e = Z.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === e.childNodes.length && (e = t), t)) {
                    for (r = (o = Z.map(v(e, "script"), g)).length; c < l; c++) a = e, c !== d && (a = Z.clone(a, !0, !0), r && Z.merge(o, v(a, "script"))), i.call(this[c], a, c);
                    if (r)
                        for (s = o[o.length - 1].ownerDocument, Z.map(o, m), c = 0; c < r; c++) a = o[c], Re.test(a.type || "") && !me.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(qe, "")))
                }
                return this
            }
        }), Z.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, a) {
            Z.fn[e] = function(e) {
                for (var t, n = [], i = Z(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), Z(i[r])[a](t), U.apply(n, t.get());
                return this.pushStack(n)
            }
        });
        var Fe, He = {},
            ze = /^margin/,
            Be = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"),
            We = function(e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : p.getComputedStyle(e, null)
            };
        ! function() {
            function e() {
                r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r.innerHTML = "", i.appendChild(o);
                var e = p.getComputedStyle(r, null);
                t = "1%" !== e.top, n = "4px" === e.width, i.removeChild(o)
            }
            var t, n, i = Q.documentElement,
                o = Q.createElement("div"),
                r = Q.createElement("div");
            r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", X.clearCloneStyle = "content-box" === r.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(r), p.getComputedStyle && Z.extend(X, {
                pixelPosition: function() {
                    return e(), t
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                reliableMarginRight: function() {
                    var e, t = r.appendChild(Q.createElement("div"));
                    return t.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", r.style.width = "1px", i.appendChild(o), e = !parseFloat(p.getComputedStyle(t, null).marginRight), i.removeChild(o), r.removeChild(t), e
                }
            }))
        }(), Z.swap = function(e, t, n, i) {
            var o, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            for (r in o = n.apply(e, i || []), t) e.style[r] = a[r];
            return o
        };
        var Ue = /^(none|table(?!-c[ea]).+)/,
            Ye = new RegExp("^(" + _e + ")(.*)$", "i"),
            Ge = new RegExp("^([+-])=(" + _e + ")", "i"),
            Ve = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ke = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Xe = ["Webkit", "O", "Moz", "ms"];
        Z.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = w(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, s = Z.camelCase(t),
                        c = e.style;
                    if (t = Z.cssProps[s] || (Z.cssProps[s] = T(c, s)), a = Z.cssHooks[t] || Z.cssHooks[s], n === undefined) return a && "get" in a && (o = a.get(e, !1, i)) !== undefined ? o : c[t];
                    "string" === (r = typeof n) && (o = Ge.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Z.css(e, t)), r = "number"), null != n && n == n && ("number" !== r || Z.cssNumber[s] || (n += "px"), X.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && (n = a.set(e, n, i)) === undefined || (c[t] = n))
                }
            },
            css: function(e, t, n, i) {
                var o, r, a, s = Z.camelCase(t);
                return t = Z.cssProps[s] || (Z.cssProps[s] = T(e.style, s)), (a = Z.cssHooks[t] || Z.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), o === undefined && (o = w(e, t, i)), "normal" === o && t in Ke && (o = Ke[t]), "" === n || n ? (r = parseFloat(o), !0 === n || Z.isNumeric(r) ? r || 0 : o) : o
            }
        }), Z.each(["height", "width"], function(e, o) {
            Z.cssHooks[o] = {
                get: function(e, t, n) {
                    if (t) return Ue.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function() {
                        return E(e, o, n)
                    }) : E(e, o, n)
                },
                set: function(e, t, n) {
                    var i = n && We(e);
                    return k(e, t, n ? C(e, o, n, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }), Z.cssHooks.marginRight = _(X.reliableMarginRight, function(e, t) {
            if (t) return Z.swap(e, {
                display: "inline-block"
            }, w, [e, "marginRight"])
        }), Z.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(o, r) {
            Z.cssHooks[o + r] = {
                expand: function(e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + Te[t] + r] = i[t] || i[t - 2] || i[0];
                    return n
                }
            }, ze.test(o) || (Z.cssHooks[o + r].set = k)
        }), Z.fn.extend({
            css: function(e, t) {
                return ge(this, function(e, t, n) {
                    var i, o, r = {},
                        a = 0;
                    if (Z.isArray(t)) {
                        for (i = We(e), o = t.length; a < o; a++) r[t[a]] = Z.css(e, t[a], !1, i);
                        return r
                    }
                    return n !== undefined ? Z.style(e, t, n) : Z.css(e, t)
                }, e, t, 1 < arguments.length)
            },
            show: function() {
                return S(this, !0)
            },
            hide: function() {
                return S(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ke(this) ? Z(this).show() : Z(this).hide()
                })
            }
        }), (Z.Tween = j).prototype = {
            constructor: j,
            init: function(e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (Z.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = j.propHooks[this.prop];
                return e && e.get ? e.get(this) : j.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = j.propHooks[this.prop];
                return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
            }
        }, j.prototype.init.prototype = j.prototype, j.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
                },
                set: function(e) {
                    Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, Z.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, Z.fx = j.prototype.init, Z.fx.step = {};
        var Qe, Je, Ze, et, tt, nt = /^(?:toggle|show|hide)$/,
            it = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"),
            ot = /queueHooks$/,
            rt = [$],
            at = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        o = it.exec(t),
                        r = o && o[3] || (Z.cssNumber[e] ? "" : "px"),
                        a = (Z.cssNumber[e] || "px" !== r && +i) && it.exec(Z.css(n.elem, e)),
                        s = 1,
                        c = 20;
                    if (a && a[3] !== r)
                        for (r = r || a[3], o = o || [], a = +i || 1; a /= s = s || ".5", Z.style(n.elem, e, a + r), s !== (s = n.cur() / i) && 1 !== s && --c;);
                    return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        Z.Animation = Z.extend(A, {
            tweener: function(e, t) {
                Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; i < o; i++) n = e[i], at[n] = at[n] || [], at[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? rt.unshift(e) : rt.push(e)
            }
        }), Z.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? Z.extend({}, e) : {
                complete: n || !n && t || Z.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Z.isFunction(t) && t
            };
            return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                Z.isFunction(i.old) && i.old.call(this), i.queue && Z.dequeue(this, i.queue)
            }, i
        }, Z.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(ke).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(t, e, n, i) {
                var o = Z.isEmptyObject(t),
                    r = Z.speed(e, n, i),
                    a = function() {
                        var e = A(this, Z.extend({}, t), r);
                        (o || me.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function(o, e, r) {
                var a = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
                return "string" != typeof o && (r = e, e = o, o = undefined), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                    var e = !0,
                        t = null != o && o + "queueHooks",
                        n = Z.timers,
                        i = me.get(this);
                    if (t) i[t] && i[t].stop && a(i[t]);
                    else
                        for (t in i) i[t] && i[t].stop && ot.test(t) && a(i[t]);
                    for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                    !e && r || Z.dequeue(this, o)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var e, t = me.get(this),
                        n = t[a + "queue"],
                        i = t[a + "queueHooks"],
                        o = Z.timers,
                        r = n ? n.length : 0;
                    for (t.finish = !0, Z.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }), Z.each(["toggle", "show", "hide"], function(e, i) {
            var o = Z.fn[i];
            Z.fn[i] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(N(i, !0), e, t, n)
            }
        }), Z.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, i) {
            Z.fn[e] = function(e, t, n) {
                return this.animate(i, e, t, n)
            }
        }), Z.timers = [], Z.fx.tick = function() {
            var e, t = 0,
                n = Z.timers;
            for (Qe = Z.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || Z.fx.stop(), Qe = undefined
        }, Z.fx.timer = function(e) {
            Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
        }, Z.fx.interval = 13, Z.fx.start = function() {
            Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
        }, Z.fx.stop = function() {
            clearInterval(Je), Je = null
        }, Z.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Z.fn.delay = function(i, e) {
            return i = Z.fx && Z.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
                var n = setTimeout(e, i);
                t.stop = function() {
                    clearTimeout(n)
                }
            })
        }, Ze = Q.createElement("input"), et = Q.createElement("select"), tt = et.appendChild(Q.createElement("option")), Ze.type = "checkbox", X.checkOn = "" !== Ze.value, X.optSelected = tt.selected, et.disabled = !0, X.optDisabled = !tt.disabled, (Ze = Q.createElement("input")).value = "t", Ze.type = "radio", X.radioValue = "t" === Ze.value;
        var st, ct, lt = Z.expr.attrHandle;
        Z.fn.extend({
            attr: function(e, t) {
                return ge(this, Z.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    Z.removeAttr(this, e)
                })
            }
        }), Z.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === Ee ? Z.prop(e, t, n) : (1 === r && Z.isXMLDoc(e) || (t = t.toLowerCase(), i = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? ct : st)), n === undefined ? i && "get" in i && null !== (o = i.get(e, t)) ? o : null == (o = Z.find.attr(e, t)) ? undefined : o : null !== n ? i && "set" in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, o = 0,
                    r = t && t.match(he);
                if (r && 1 === e.nodeType)
                    for (; n = r[o++];) i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!X.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), ct = {
            set: function(e, t, n) {
                return !1 === t ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var r = lt[t] || Z.find.attr;
            lt[t] = function(e, t, n) {
                var i, o;
                return n || (o = lt[t], lt[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, lt[t] = o), i
            }
        });
        var ut = /^(?:input|select|textarea|button)$/i;
        Z.fn.extend({
            prop: function(e, t) {
                return ge(this, Z.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[Z.propFix[e] || e]
                })
            }
        }), Z.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (e && 3 !== r && 8 !== r && 2 !== r) return (1 !== r || !Z.isXMLDoc(e)) && (t = Z.propFix[t] || t, o = Z.propHooks[t]), n !== undefined ? o && "set" in o && (i = o.set(e, n, t)) !== undefined ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || ut.test(e.nodeName) || e.href ? e.tabIndex : -1
                    }
                }
            }
        }), X.optSelected || (Z.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            Z.propFix[this.toLowerCase()] = this
        });
        var dt = /[\t\r\n\f]/g;
        Z.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, a, s = "string" == typeof t && t,
                    c = 0,
                    l = this.length;
                if (Z.isFunction(t)) return this.each(function(e) {
                    Z(this).addClass(t.call(this, e, this.className))
                });
                if (s)
                    for (e = (t || "").match(he) || []; c < l; c++)
                        if (i = 1 === (n = this[c]).nodeType && (n.className ? (" " + n.className + " ").replace(dt, " ") : " ")) {
                            for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            a = Z.trim(i), n.className !== a && (n.className = a)
                        } return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, a, s = 0 === arguments.length || "string" == typeof t && t,
                    c = 0,
                    l = this.length;
                if (Z.isFunction(t)) return this.each(function(e) {
                    Z(this).removeClass(t.call(this, e, this.className))
                });
                if (s)
                    for (e = (t || "").match(he) || []; c < l; c++)
                        if (i = 1 === (n = this[c]).nodeType && (n.className ? (" " + n.className + " ").replace(dt, " ") : "")) {
                            for (r = 0; o = e[r++];)
                                for (; 0 <= i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                            a = t ? Z.trim(i) : "", n.className !== a && (n.className = a)
                        } return this
            },
            toggleClass: function(o, t) {
                var r = typeof o;
                return "boolean" == typeof t && "string" === r ? t ? this.addClass(o) : this.removeClass(o) : Z.isFunction(o) ? this.each(function(e) {
                    Z(this).toggleClass(o.call(this, e, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === r)
                        for (var e, t = 0, n = Z(this), i = o.match(he) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else r !== Ee && "boolean" !== r || (this.className && me.set(this, "__className__", this.className), this.className = this.className || !1 === o ? "" : me.get(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                    if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(dt, " ").indexOf(t)) return !0;
                return !1
            }
        });
        var ft = /\r/g;
        Z.fn.extend({
            val: function(n) {
                var i, e, o, t = this[0];
                return arguments.length ? (o = Z.isFunction(n), this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = o ? n.call(this, e, Z(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Z.isArray(t) && (t = Z.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })), (i = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, t, "value") !== undefined || (this.value = t))
                })) : t ? (i = Z.valHooks[t.type] || Z.valHooks[t.nodeName.toLowerCase()]) && "get" in i && (e = i.get(t, "value")) !== undefined ? e : "string" == typeof(e = t.value) ? e.replace(ft, "") : null == e ? "" : e : void 0
            }
        }), Z.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = Z.find.attr(e, "value");
                        return null != t ? t : Z.trim(Z.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, a = r ? null : [], s = r ? o + 1 : i.length, c = o < 0 ? s : r ? o : 0; c < s; c++)
                            if (((n = i[c]).selected || c === o) && (X.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
                                if (t = Z(n).val(), r) return t;
                                a.push(t)
                            } return a
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = Z.makeArray(t), a = o.length; a--;)((i = o[a]).selected = 0 <= Z.inArray(i.value, r)) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), Z.each(["radio", "checkbox"], function() {
            Z.valHooks[this] = {
                set: function(e, t) {
                    if (Z.isArray(t)) return e.checked = 0 <= Z.inArray(Z(e).val(), t)
                }
            }, X.checkOn || (Z.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
            Z.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }), Z.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var ht = Z.now(),
            pt = /\?/;
        Z.parseJSON = function(e) {
            return JSON.parse(e + "")
        }, Z.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new DOMParser).parseFromString(e, "text/xml")
            } catch (n) {
                t = undefined
            }
            return t && !t.getElementsByTagName("parsererror").length || Z.error("Invalid XML: " + e), t
        };
        var gt = /#.*$/,
            mt = /([?&])_=[^&]*/,
            xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            yt = /^(?:GET|HEAD)$/,
            bt = /^\/\//,
            wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            _t = {},
            Tt = {},
            kt = "*/".concat("*"),
            Ct = p.location.href,
            Et = wt.exec(Ct.toLowerCase()) || [];
        Z.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ct,
                type: "GET",
                isLocal: vt.test(Et[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": kt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": Z.parseJSON,
                    "text xml": Z.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? P(P(e, Z.ajaxSettings), t) : P(Z.ajaxSettings, e)
            },
            ajaxPrefilter: I(_t),
            ajaxTransport: I(Tt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var o, r, a, s, c, l = t;
                    2 !== w && (w = 2, h && clearTimeout(h), u = undefined, f = i || "", _.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (s = q(g, _, n)), s = M(g, s, _, o), o ? (g.ifModified && ((c = _.getResponseHeader("Last-Modified")) && (Z.lastModified[d] = c), (c = _.getResponseHeader("etag")) && (Z.etag[d] = c)), 204 === e || "HEAD" === g.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, r = s.data, o = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || l) + "", o ? v.resolveWith(m, [r, l, _]) : v.rejectWith(m, [_, l, a]), _.statusCode(b), b = undefined, p && x.trigger(o ? "ajaxSuccess" : "ajaxError", [_, g, o ? r : a]), y.fireWith(m, [_, l]), p && (x.trigger("ajaxComplete", [_, g]), --Z.active || Z.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = undefined), t = t || {};
                var u, d, f, i, h, o, p, r, g = Z.ajaxSetup({}, t),
                    m = g.context || g,
                    x = g.context && (m.nodeType || m.jquery) ? Z(m) : Z.event,
                    v = Z.Deferred(),
                    y = Z.Callbacks("once memory"),
                    b = g.statusCode || {},
                    a = {},
                    s = {},
                    w = 0,
                    c = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === w) {
                                if (!i)
                                    for (i = {}; t = xt.exec(f);) i[t[1].toLowerCase()] = t[2];
                                t = i[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? f : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return w || (e = s[n] = s[n] || e, a[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return w || (g.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (w < 2)
                                    for (t in e) b[t] = [b[t], e[t]];
                                else _.always(e[_.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || c;
                            return u && u.abort(t), n(0, t), this
                        }
                    };
                if (v.promise(_).complete = y.add, _.success = _.done, _.error = _.fail, g.url = ((e || g.url || Ct) + "").replace(gt, "").replace(bt, Et[1] + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = Z.trim(g.dataType || "*").toLowerCase().match(he) || [""], null == g.crossDomain && (o = wt.exec(g.url.toLowerCase()), g.crossDomain = !(!o || o[1] === Et[1] && o[2] === Et[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (Et[3] || ("http:" === Et[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = Z.param(g.data, g.traditional)), R(_t, g, t, _), 2 === w) return _;
                for (r in (p = Z.event && g.global) && 0 == Z.active++ && Z.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !yt.test(g.type), d = g.url, g.hasContent || (g.data && (d = g.url += (pt.test(d) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = mt.test(d) ? d.replace(mt, "$1_=" + ht++) : d + (pt.test(d) ? "&" : "?") + "_=" + ht++)), g.ifModified && (Z.lastModified[d] && _.setRequestHeader("If-Modified-Since", Z.lastModified[d]), Z.etag[d] && _.setRequestHeader("If-None-Match", Z.etag[d])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && _.setRequestHeader("Content-Type", g.contentType), _.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : g.accepts["*"]), g.headers) _.setRequestHeader(r, g.headers[r]);
                if (g.beforeSend && (!1 === g.beforeSend.call(m, _, g) || 2 === w)) return _.abort();
                for (r in c = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[r](g[r]);
                if (u = R(Tt, g, t, _)) {
                    _.readyState = 1, p && x.trigger("ajaxSend", [_, g]), g.async && 0 < g.timeout && (h = setTimeout(function() {
                        _.abort("timeout")
                    }, g.timeout));
                    try {
                        w = 1, u.send(a, n)
                    } catch (l) {
                        if (!(w < 2)) throw l;
                        n(-1, l)
                    }
                } else n(-1, "No Transport");
                return _
            },
            getJSON: function(e, t, n) {
                return Z.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return Z.get(e, undefined, t, "script")
            }
        }), Z.each(["get", "post"], function(e, o) {
            Z[o] = function(e, t, n, i) {
                return Z.isFunction(t) && (i = i || n, n = t, t = undefined), Z.ajax({
                    url: e,
                    type: o,
                    dataType: i,
                    data: t,
                    success: n
                })
            }
        }), Z._evalUrl = function(e) {
            return Z.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, Z.fn.extend({
            wrapAll: function(t) {
                var e;
                return Z.isFunction(t) ? this.each(function(e) {
                    Z(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function(n) {
                return Z.isFunction(n) ? this.each(function(e) {
                    Z(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = Z(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = Z.isFunction(t);
                return this.each(function(e) {
                    Z(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                }).end()
            }
        }), Z.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        }, Z.expr.filters.visible = function(e) {
            return !Z.expr.filters.hidden(e)
        };
        var St = /%20/g,
            jt = /\[\]$/,
            Ot = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            Lt = /^(?:input|select|textarea|keygen)/i;
        Z.param = function(e, t) {
            var n, i = [],
                o = function(e, t) {
                    t = Z.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (t === undefined && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) F(n, e[n], t, o);
            return i.join("&").replace(St, "+")
        }, Z.fn.extend({
            serialize: function() {
                return Z.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = Z.prop(this, "elements");
                    return e ? Z.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !Z(this).is(":disabled") && Lt.test(this.nodeName) && !Nt.test(e) && (this.checked || !Ce.test(e))
                }).map(function(e, t) {
                    var n = Z(this).val();
                    return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ot, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ot, "\r\n")
                    }
                }).get()
            }
        }), Z.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (e) {}
        };
        var $t = 0,
            Dt = {},
            At = {
                0: 200,
                1223: 204
            },
            It = Z.ajaxSettings.xhr();
        p.attachEvent && p.attachEvent("onunload", function() {
            for (var e in Dt) Dt[e]()
        }), X.cors = !!It && "withCredentials" in It, X.ajax = It = !!It, Z.ajaxTransport(function(a) {
            var s;
            if (X.cors || It && !a.crossDomain) return {
                send: function(e, t) {
                    var n, i = a.xhr(),
                        o = ++$t;
                    if (i.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (n in a.xhrFields) i[n] = a.xhrFields[n];
                    for (n in a.mimeType && i.overrideMimeType && i.overrideMimeType(a.mimeType), a.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                    s = function(e) {
                        return function() {
                            s && (delete Dt[o], s = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? t(i.status, i.statusText) : t(At[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
                                text: i.responseText
                            } : undefined, i.getAllResponseHeaders()))
                        }
                    }, i.onload = s(), i.onerror = s("error"), s = Dt[o] = s("abort");
                    try {
                        i.send(a.hasContent && a.data || null)
                    } catch (r) {
                        if (s) throw r
                    }
                },
                abort: function() {
                    s && s()
                }
            }
        }), Z.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return Z.globalEval(e), e
                }
            }
        }), Z.ajaxPrefilter("script", function(e) {
            e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), Z.ajaxTransport("script", function(n) {
            var i, o;
            if (n.crossDomain) return {
                send: function(e, t) {
                    i = Z("<script>").prop({
                        async: !0,
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", o = function(e) {
                        i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), Q.head.appendChild(i[0])
                },
                abort: function() {
                    o && o()
                }
            }
        });
        var Rt = [],
            Pt = /(=)\?(?=&|$)|\?\?/;
        Z.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Rt.pop() || Z.expando + "_" + ht++;
                return this[e] = !0, e
            }
        }), Z.ajaxPrefilter("json jsonp", function(e, t, n) {
            var i, o, r, a = !1 !== e.jsonp && (Pt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Pt, "$1" + i) : !1 !== e.jsonp && (e.url += (pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return r || Z.error(i + " was not called"), r[0]
            }, e.dataTypes[0] = "json", o = p[i], p[i] = function() {
                r = arguments
            }, n.always(function() {
                p[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Rt.push(i)), r && Z.isFunction(o) && o(r[0]), r = o = undefined
            }), "script"
        }), Z.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || Q;
            var i = ae.exec(e),
                o = !n && [];
            return i ? [t.createElement(i[1])] : (i = Z.buildFragment([e], t, o), o && o.length && Z(o).remove(), Z.merge([], i.childNodes))
        };
        var qt = Z.fn.load;
        Z.fn.load = function(e, t, n) {
            if ("string" != typeof e && qt) return qt.apply(this, arguments);
            var i, o, r, a = this,
                s = e.indexOf(" ");
            return 0 <= s && (i = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (o = "POST"), 0 < a.length && Z.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, a.html(i ? Z("<div>").append(Z.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                a.each(n, r || [e.responseText, t, e])
            }), this
        }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            Z.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), Z.expr.filters.animated = function(t) {
            return Z.grep(Z.timers, function(e) {
                return t === e.elem
            }).length
        };
        var Mt = p.document.documentElement;
        Z.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, a, s, c, l = Z.css(e, "position"),
                    u = Z(e),
                    d = {};
                "static" === l && (e.style.position = "relative"), s = u.offset(), r = Z.css(e, "top"), c = Z.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (r + c).indexOf("auto") ? (a = (i = u.position()).top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(c) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
            }
        }, Z.fn.extend({
            offset: function(t) {
                if (arguments.length) return t === undefined ? this : this.each(function(e) {
                    Z.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    r = i && i.ownerDocument;
                return r ? (e = r.documentElement, Z.contains(e, i) ? (typeof i.getBoundingClientRect !== Ee && (o = i.getBoundingClientRect()), n = H(r), {
                    top: o.top + n.pageYOffset - e.clientTop,
                    left: o.left + n.pageXOffset - e.clientLeft
                }) : o) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (i = e.offset()), i.top += Z.css(e[0], "borderTopWidth", !0), i.left += Z.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - i.top - Z.css(n, "marginTop", !0),
                        left: t.left - i.left - Z.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || Mt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                    return e || Mt
                })
            }
        }), Z.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, o) {
            var r = "pageYOffset" === o;
            Z.fn[t] = function(e) {
                return ge(this, function(e, t, n) {
                    var i = H(e);
                    if (n === undefined) return i ? i[o] : e[t];
                    i ? i.scrollTo(r ? p.pageXOffset : n, r ? n : p.pageYOffset) : e[t] = n
                }, t, e, arguments.length, null)
            }
        }), Z.each(["top", "left"], function(e, n) {
            Z.cssHooks[n] = _(X.pixelPosition, function(e, t) {
                if (t) return t = w(e, n), Be.test(t) ? Z(e).position()[n] + "px" : t
            })
        }), Z.each({
            Height: "height",
            Width: "width"
        }, function(r, a) {
            Z.each({
                padding: "inner" + r,
                content: a,
                "": "outer" + r
            }, function(i, e) {
                Z.fn[e] = function(e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e),
                        o = i || (!0 === e || !0 === t ? "margin" : "border");
                    return ge(this, function(e, t, n) {
                        var i;
                        return Z.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + r], i["scroll" + r], e.body["offset" + r], i["offset" + r], i["client" + r])) : n === undefined ? Z.css(e, t, o) : Z.style(e, t, n, o)
                    }, a, n ? e : undefined, n, null)
                }
            })
        }), Z.fn.size = function() {
            return this.length
        }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return Z
        });
        var Ft = p.jQuery,
            Ht = p.$;
        return Z.noConflict = function(e) {
            return p.$ === Z && (p.$ = Ht), e && p.jQuery === Z && (p.jQuery = Ft), Z
        }, typeof e === Ee && (p.jQuery = p.$ = Z), Z
    }), (xing = xing || {}).mixIn = function(e) {
        e = e || {};
        for (var t, n, i = 0, o = arguments.length; ++i < o;)
            for (t in n = arguments[i]) n.hasOwnProperty(t) && (e[t] = n[t]);
        return e
    }, (xing = xing || {}).browser = xing.browser || {}, xing.globals = xing.globals || {}, xing.support = xing.support || {},
    function(i, o) {
        "use strict";

        function s(e, t) {
            throw e || (e = y), new Error((t || p) + e)
        }

        function e(e, t) {
            "string" != typeof e && s(g + b);
            var n = xing,
                i = e.split("."),
                o = i.pop();
            "xing" === i[0] && i.shift();
            for (var r = 0, a = i.length; r < a; r++) n[i[r]] = n = n[i[r]] || {};
            n[o] ? s(g + w + e) : t || s(g + x + e), n[o] = t
        }

        function r(e) {
            return e && ("string" != typeof e && (e += ""), e = e.replace(d, "&amp;").replace(f, "&lt;").replace(h, "&gt;")), e || null
        }

        function t(e) {
            var t = !1;
            try {
                o[e + "Storage"].removeItem("1"), t = !0
            } catch (n) {}
            return t
        }

        function a(e) {
            xing.support.storage || s(m + _), e || s(m + v)
        }

        function c(e) {
            a(e), localStorage.removeItem(e)
        }

        function n(e) {
            if (e)
                for (var t = 0, n = (e = e.split(" ")).length; t < n; t++) c(e[t]);
            else s(m + v)
        }

        function l(e, t) {
            if (a(e), t) {
                try {
                    return localStorage.setItem(e, t)
                } catch (n) {}
                return !1
            }
            return r(localStorage.getItem(e))
        }

        function u(t, n) {
            Object.keys(n).forEach(function(e) {
                C(t, e, n[e])
            })
        }
        var d = /&|\\u0026|\\x26|\\046|\\u\{26\}/g,
            f = /<|\\u003c|\\x3C|\\074|\\u\{3c\}/g,
            h = />|\\u003e|\\x3E|\\076|\\u\{3e\}/g,
            p = "Controller: ",
            g = "Define > ",
            m = "Storage > ",
            x = "No data - ",
            v = "No key passed",
            y = "No message passed",
            b = "No module passed",
            w = "Overwrite! - ",
            _ = "Not supported",
            T = {},
            k = {
                "": {
                    event: "transitionend"
                },
                webkit: {
                    event: "webkitTransitionEnd"
                },
                Moz: {
                    event: "transitionend"
                },
                ms: {
                    event: "transitionend"
                },
                O: {
                    event: "oTransitionEnd"
                }
            };
        xing.error = s, xing.define = e;
        var C = "defineProperty" in Object && "addEventListener" in o ? function(e, t, n, i) {
            "object" != typeof t ? Object.defineProperty(e, t, {
                get: function() {
                    return i || (i = n())
                },
                set: function(e) {
                    i = e
                },
                configurable: !0
            }) : u(e, t)
        } : "__defineGetter__" in {} ? function(e, t, n, i) {
            "object" != typeof t ? (e.__defineGetter__(t, function() {
                return i || (i = n())
            }), e.__defineSetter__(t, function(e) {
                i = e
            })) : u(e, t)
        } : function(e, t, n) {
            "object" != typeof t ? e[t] = n() : u(e, t)
        };
        xing.mixIn(xing, {
            animate: function(e, t, n, i) {
                var o, r, a, s, c, l = e.style,
                    u = xing.support.transitions;
                i = i || xing.noop, u && (a = xing.browser.prefix, o = xing.browser.transitionEvent, l[s = a ? a + "Transition" : "transition"] = t + " 0.2s ease-out", r = function() {
                    clearTimeout(c), e.removeEventListener(o, r, !1), l[s] = "", i()
                }, c = setTimeout(function() {
                    e.removeEventListener(o, r, !1)
                }, 1e3), e.addEventListener(o, r, !1)), setTimeout(function() {
                    l[t] = n, u || i()
                }, 50)
            },
            clear: n,
            storage: l,
            setupGetter: C,
            escape: r,
            isUndef: function(e) {
                return void 0 === e
            },
            noop: function() {},
            redirect: function(e, t) {
                e && ("_blank" === t ? window.open(e) : 0 === e.indexOf("#") ? location.hash = e : location.href = e)
            },
            root: location.protocol + "//" + location.host
        }), C(T, {
            local: function() {
                return t("local")
            },
            session: function() {
                return t("session")
            }
        }), C(xing.browser, {
            prefix: function() {
                var t = null,
                    n = i.createElement("div");
                return Object.keys(k).forEach(function(e) {
                    (e ? e + "Transition" : "transition") in n.style && (t = e)
                }), n = null, t
            },
            transitionEvent: function() {
                var e = k[xing.browser.prefix];
                return e && e.event
            },
            TOUCH: function() {
                return o.navigator.msMaxTouchPoints || "ontouchstart" in o || "ongesturestart" in o || o.DocumentTouch && i instanceof o.DocumentTouch
            }
        }), xing.support = {}, C(xing.support, {
            storage: function() {
                return T.local
            },
            sessionStorage: function() {
                return T.session
            },
            postMessage: function() {
                return "postMessage" in o
            },
            hashChange: function() {
                return "onhashchange" in o
            },
            onBeforeUnload: function() {
                return "onbeforeunload" in o
            },
            popState: function() {
                return "onpopstate" in o
            },
            eventListener: function() {
                return "addEventListener" in o
            },
            JSON: function() {
                return "JSON" in o
            },
            querySelector: function() {
                return "querySelectorAll" in i
            },
            transitions: function() {
                return !!xing.browser.prefix
            },
            utf8uri: function() {
                var e = i.createElement("a");
                return e.href = "/\xe4", e = -1 !== e.pathname.indexOf("%C3%A4")
            }
        });
        try {
            xing.jquery = jQuery.fn.jquery
        } catch (E) {}
    }(document, window), xing.renderStorage = function(e, t, n, i) {
        var o, r, a, s, c = 0,
            l = {},
            u = window.sessionStorage;
        if (r = u && u[t]) {
            if (!(s = document.querySelectorAll(e)).length) return;
            try {
                l = JSON.parse(r)
            } catch (d) {}
            for (; c < s.length; c++) a = s[c], (o = parseInt(l[a.getAttribute("data-update")])) && (i <= o && (o = i - 1, a.setAttribute("data-update-exceed", "")), a.innerHTML = o, a.style.display = "")
        }
    },
    function() {
        "use strict";
        var i = [],
            o = !1;
        xing.define("ready", function(e) {
            var t, n;
            return "function" != typeof e && (t = e, e = function() {
                xing.require(t).afterLoad(function() {
                    setTimeout(function() {
                        n && n()
                    }, 0)
                })
            }), o ? e() : i.push(e), {
                afterLoad: function(e) {
                    n = e
                }
            }
        }), $(window).one("load", function() {
            setTimeout(function() {
                for (var e; e = i.shift();) e();
                o = !0
            })
        })
    }(),
    function() {
        var e = document.createElement("input");
        xing.mixIn(xing.support, {
            fixed: !0,
            placeholder: "placeholder" in e
        }), e = null
    }(), (xing = xing || {}).traits = xing.traits || {}, xing.traits.EventEmitterTrait = function() {
        function c(e) {
            return e && (Array.isArray(e) && (e = e.join(".")), e += "."), e || ""
        }

        function e(e, t) {
            var n = this._callbacks || (this._callbacks = {});
            return (n[e] = n[e] || []).push(t), this
        }

        function o(t, e) {
            var n, i = c(t.prefix);
            return "string" == typeof t ? (this.observe(t, e), {
                stop: this.stopObserving.bind(this, t, e)
            }) : (n = [], Object.keys(t.events).forEach(function(e) {
                n.push(o.call(this, i + e, t.events[e]))
            }.bind(this)), {
                stop: function() {
                    n.forEach(function(e) {
                        e.stop()
                    })
                }
            })
        }

        function l(e) {
            var n = {},
                i = c(e.prefix);
            if (!this._callbacks) return this;
            if ("object" == typeof e) return Array.isArray(e.events) ? e.events.forEach(function(e) {
                n[e] = ""
            }) : n = e.events, Object.keys(n).forEach(function(e) {
                var t = n[e];
                l.call(this, i + e, t)
            }.bind(this)), this;
            var t, o = this._callbacks[e] || [],
                r = u.call(arguments, 1);
            r.unshift({
                type: e,
                eventName: e
            });
            for (var a = 0, s = o.length; a < s; a++)(t = o[a]) ? t.apply(this, r) : (o.splice(a, 1), a--, s--);
            return this
        }

        function s(t, e) {
            var n, i, o = c(t.prefix);
            if ("string" == typeof t && -1 !== t.indexOf(" ") && (i = t.split(" "), t = {
                    events: {}
                }, i.forEach(function(e) {
                    t.events[e] = ""
                })), "object" == typeof t) return Object.keys(t.events).forEach(function(e) {
                s.call(this, o + e, t.events[e])
            }.bind(this)), this;
            if (t) {
                if (n = this._callbacks)
                    if (e) {
                        if (i = n[t])
                            for (var r = 0, a = i.length; r < a; r++)
                                if (i[r] === e) {
                                    i[r] = null;
                                    break
                                }
                    } else n[t] = []
            } else this._callbacks = {};
            return this
        }
        var u = [].slice;
        return {
            observe: e,
            on: o,
            off: s,
            stopObserving: s,
            trigger: l
        }
    }(), xing.mixIn(xing, xing.traits.EventEmitterTrait),
    function(e) {
        var t = function() {
            xing.trigger("foundation.dom_interaction")
        };
        e(window).on("resize orientationchange", function() {
            xing.trigger("foundation.resize")
        }), e(document).on("ajaxComplete click :pointerup focusin", t), e(window).on("scroll", t), xing.on("foundation.resize", t), xing.on("chunk.done", t), xing.on("inview.manual", t), xing.on("body_change", t), xing.ready(t)
    }(jQuery),
    function() {
        function e(e, t) {
            -1 === r.indexOf(t.key) ? n(t) : console && console.warn("dependency: " + t.key + " exists")
        }

        function n(n) {
            function i() {
                xing.off(t, e), n.afterResolve && n.afterResolve(), o.forEach(function(e) {
                    xing.trigger(t, e)
                })
            }
            var e, t = n.key,
                o = [];
            xing.on(t, e = function(e, t) {
                o.push(t), 1 === o.length && (n.beforeResolve && n.beforeResolve(), xing.require(n.packages).afterLoad(i))
            }), r.push(t)
        }
        var r = [];
        [{
            key: "xing.ds_suggestor",
            packages: ["js/jqext.lazy.js", "js/suggestor.js", "css/suggestor.css"]
        }, {
            key: "top_display_area.show",
            packages: ["css/top_display_area.css", "js/top_display_area.js"]
        }, {
            key: "ajax:content",
            packages: ["js/ajax.js"]
        }, {
            key: "help_center_iframe.load",
            packages: ["js/help.js"]
        }, {
            key: "help_center_inline_iframe.load",
            packages: ["js/help.js"]
        }, {
            key: "help_center_inline_iframe.toggle",
            packages: ["js/help.js"]
        }, {
            key: "webcam_capture.init",
            packages: ["js/getusermedia.js", "js/capture.js"]
        }].forEach(n), xing.on("adl.add", e)
    }(),
    function(i) {
        function o(e, t) {
            return t ? e.replace("-" + t, "") : e
        }

        function r(e) {
            var t = e.match(n);
            return t ? t[1] : null
        }
        var n = /[a-z0-9-_]-([a-z0-9]+)\./,
            a = "undefined" != typeof Storage,
            t = new RegExp(location.protocol + "//" + location.host + "(/[a-z-_0-9]+)+/webfont-[a-z0-9]+.css");
        try {
            Object.keys(i).forEach(function(e) {
                t.test(e) && i.removeItem(e)
            })
        } catch (s) {}
        xing.asset = {
            read: function(e) {
                if (a) {
                    var t, n = r(e);
                    e = o(e, n);
                    try {
                        t = JSON.parse(i.getItem(e))
                    } catch (s) {}
                    return !t || n && n !== t.hash ? void 0 : t.content
                }
            },
            write: function(e, t) {
                if (a) {
                    var n = r(e);
                    e = o(e, n);
                    try {
                        i.setItem(e, JSON.stringify({
                            content: t,
                            hash: n
                        }))
                    } catch (s) {}
                }
            }
        }
    }(localStorage),
    function(e) {
        var n = [],
            t = window.storableAssets,
            i = xing.ready,
            o = t && Object.keys(t),
            r = "undefined" != typeof Storage,
            a = "";
        if (t) {
            if (r)
                if (o.forEach(function(e) {
                        t[e].forEach(function(e) {
                            var t;
                            n.push(e), t = xing.asset.read(e) || "", a += -1 === t.indexOf("<") && t
                        })
                    }), a) {
                    var s = e.createElement("style");
                    s.textContent = a;
                    var c = e.querySelector("script");
                    c.parentNode.insertBefore(s, c)
                } else i(o);
            else i(o);
            i(function() {
                xing.on("ajax:done", function(e, t) {
                    r && -1 < n.indexOf(t.url) && t.data && xing.asset.write(t.url, t.data)
                })
            })
        }
    }(document), (xing = xing || {}).globals = xing.globals || {},
    function() {
        var n = {
            cc_close: "/img/shared/contact_chooser_close.gif",
            transparent_r1: "/img/shared/transparent_r1.gif"
        };
        xing.mixIn(xing, {
            getAssetPath: function(e) {
                var t = xing.globals.assets;
                if (t && n[e]) return t._host + "/assets/frontend_minified" + n[e];
                xing.error("Static asset not found: " + e)
            }
        })
    }(),
    function(e) {
        try {
            e.write = e.write.wrap(function(e, t) {
                return xing.trigger("log", "document.write", t), e(t)
            })
        } catch (t) {}
    }(document),
    function() {
        var t, i, o, n = 200,
            r = {
                "component.form.outfit": function() {
                    var e = document.querySelectorAll("[autofocus]");
                    if (e = e[e.length - 1]) try {
                        e.focus()
                    } catch (t) {}
                }
            },
            a = {},
            e = function() {
                d(function() {
                    xing.trigger("patterns.dom_change")
                }), xing.on("patterns.dom_change", s), xing.on("patterns.require_pattern", l), xing.trigger("patterns.dom_change")
            },
            s = function() {
                for (var e = document.querySelectorAll('body [typeof*="xing:"]'), t = 0, n = e.length; t < n; t++) c(e[t].getAttribute("typeof"))
            },
            c = function(e) {
                for (var t, n = e.split(" "), i = 0, o = n.length; i < o; i++) "xing:" === (t = n[i]).substr(0, 5) && (t = t.split(":")[1], a[t] === undefined && (a[t] = !1, xing.trigger("patterns.require_pattern", t)))
            },
            l = function(e, t) {
                xing.require("pattern:" + t).afterLoad(function() {
                    a[t] = !0, xing.trigger("patterns.loaded", t), r[t] && r[t]()
                })
            },
            u = (o = new Date, function(e, t) {
                var n = new Date;
                clearTimeout(i), i = setTimeout(e, t + 10), t < n - o && e(), o = n
            }),
            d = (t = window.MutationObserver || window.WebKitMutationObserver) ? function(e) {
                new t(e).observe(document.body, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    attributeFilter: ["typeof"]
                })
            } : function(e) {
                xing.on("foundation.dom_interaction", function() {
                    u(e, n)
                })
            };
        xing.ready(e)
    }(),
    function(t) {
        "use strict";

        function n(e) {
            return $.data(e, "map")
        }

        function i(e) {
            var t = new $.Deferred;
            return e.tilesloaded ? t.resolve(e) : (e.on("tilesloaded", function() {
                t.resolve(e)
            }), e.render()), t
        }
        xing.define("print", function() {
            var e = $(".xing-map").toArray().map(n).map(i);
            $.when.apply(this, e).done(function() {
                t.print()
            })
        })
    }(window),
    function(n) {
        function e() {
            var e = n.innerWidth,
                t = "desktop";
            e < 1113 && (t = "tablet"), e < 737 && (t = "phone"), i !== t && document.body && document.body.className.match("foundation-adaptive-grid") && (xing.trigger("foundation.adaptiveTransition", {
                from: i,
                to: t
            }), i = t), xing.window = {
                scrollTop: n.pageYOffset,
                height: n.innerHeight,
                width: e,
                adaptiveStep: i
            }
        }
        var i, t = n.addEventListener;
        t("scroll", e), t("resize", e), xing.ready(e), e()
    }(window), (xing = xing || {}).browser = xing.browser || {},
    function(a) {
        function e(e, t) {
            e.tagName || (e = e[0]);
            var n = (t = "on" + t) in (e = s.createElement(e.tagName));
            return n || (e.setAttribute(t, "return;"), n = "function" == typeof e[t]), n
        }

        function t(e) {
            return e.replace(i, "")
        }
        var s = document;
        a.extend(xing.browser, {
            SUPPORT_INPUT: e(a("<input>"), "input")
        });
        var n, o, r, i = new RegExp("<script[^>]*>([\\S\\s]*?)</script>", "img"),
            c = /^while\(1\);([\s\S]*)\s*$/,
            l = /^\(([\s\S]*)\)/m,
            u = a.parseJSON;
        a.extend(a, {
            isClass: function(e) {
                return !!(e && e.prototype && e.prototype.constructor && a.isFunction(e.prototype.initialize))
            },
            isEvent: function(e) {
                return !(!e || !e.target)
            },
            isObject: function(e) {
                return "object" == typeof e
            },
            isUndefined: function(e) {
                return xing.isUndef(e)
            },
            toQuery: (o = /\+/g, r = /[&;]/, function(e, t) {
                if (a.isObject(e)) return e || {};
                var n = (e = e.replace(o, "%20")).trim().match(/([^?]*)?$/);
                if (!n[1]) return {};
                var i = {};
                return n[1].split(t || r).forEach(function(e) {
                    if ((e = e.split("="))[0]) {
                        var t = decodeURIComponent(e.shift()),
                            n = 1 < e.length ? e.join("=") : e[0];
                        n !== undefined && (n = decodeURIComponent(n)), t in i ? (a.isArray(i[t]) || (i[t] = [i[t]]), i[t].push(n)) : i[t] = n
                    }
                }), i
            }),
            unifyLineBreaks: function(e) {
                return e.replace(/\r\n/g, "\n")
            },
            isEmail: (n = /^([^@\s])+?@[^@\s]+\.\w{2,}?$/i, function(e) {
                return n.test(e)
            }),
            stripSecurity: function(e) {
                return e.replace(c, "$1").replace(l, "$1")
            },
            parseJSON: function(e) {
                var t = null;
                if (e && "string" == typeof e && "!DOCTYPE" !== e.trim().substr(1, 8)) try {
                    t = u(a.stripSecurity(e))
                } catch (n) {}
                return t
            },
            shuffle: function(e) {
                return e.slice().sort(function() {
                    return .5 - Math.random()
                })
            },
            chunkArray: function(t, n, e) {
                return e = e || a.noop, a.chunk(function(e) {
                    n(t[e], e)
                }, t.length, e), t
            },
            chunk: function(e, t, n) {
                var i, o = 0,
                    r = 80,
                    a = function() {
                        for (i = new Date; o < t;)
                            if (e(o), o++, 40 < new Date - i) return void setTimeout(a, r);
                        n && (setTimeout(n, r), xing.trigger("chunk.done"))
                    };
                setTimeout(a, r)
            },
            supports: e,
            stripScripts: t,
            stripTags: function(e) {
                return e.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, "")
            },
            escapeHTML: function(e) {
                return xing.escape(e) || ""
            },
            unescapeHTML: function(e) {
                return a.stripTags(e).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&apos;/g, "'").replace(/&quot;/g, '"')
            },
            interpolate: function(t, n) {
                return Object.keys(n).forEach(function(e) {
                    t = t.replace(new RegExp("#{" + e + "}", "g"), n[e])
                }), t
            },
            capitalize: function(e) {
                return e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()
            },
            keyCodes: {
                KEY_BACKSPACE: 8,
                KEY_TAB: 9,
                KEY_RETURN: 13,
                KEY_CTRL: 17,
                KEY_ESC: 27,
                KEY_LEFT: 37,
                KEY_UP: 38,
                KEY_RIGHT: 39,
                KEY_DOWN: 40,
                KEY_DELETE: 46,
                KEY_HOME: 36,
                KEY_END: 35,
                KEY_PAGEUP: 33,
                KEY_PAGEDOWN: 34,
                KEY_INSERT: 45,
                KEY_SHIFT: 16,
                KEY_SPACE: 32
            }
        }), a.extend(a.expr[":"], {
            scroll: function(e) {
                var t = a(e).css("overflow-y");
                return "scroll" === t || "auto" === t
            },
            inview: function(e) {
                if (!e.getAttribute("data-inview-invisible") && (0 < e.offsetWidth || 0 < e.offsetHeight)) {
                    var t, n = e.getAttribute("data-inview-delta"),
                        i = e.getBoundingClientRect();
                    return n && (t = parseInt(n, 10), 0 < n.indexOf("vh") && (t *= xing.window.height)), t = isNaN(t) ? 0 : t, i.top - t <= xing.window.height && 0 < i.bottom + t
                }
            },
            "focusable-input": function(e) {
                var t = e.nodeName,
                    n = "INPUT" === t,
                    i = n || "TEXTAREA" === t || "SELECT" === t || "BUTTON" === t,
                    o = a(e).is(":visible"),
                    r = a.contains(s, e);
                return i && r && o && (!n || "hidden" !== e.type) && !e.disabled
            }
        }), xing.ready(function() {
            a(".foundation-root > footer").is(":hidden") && xing.ready("css/footer.css"), a("#login-layer").length && xing.ready("css/login_layer.css")
        })
    }(jQuery);
var Class = function(c) {
    function l(e) {
        var t = e.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, "").replace(/\s+/g, "").split(",");
        return 1 !== t.length || t[0] ? t : []
    }

    function u(e) {
        return Object.keys(e)
    }

    function r() {}

    function e() {
        function e() {
            this.initialize.apply(this, arguments)
        }
        var t = null,
            n = c.makeArray(arguments);
        c.isFunction(n[0]) && (t = n.shift()), c.extend(e, Class.Methods), e.superclass = t, e.subclasses = [], t && (r.prototype = t.prototype, e.prototype = new r, t.subclasses.push(e));
        for (var i = 0, o = n.length; i < o; i++) e.addMethods(n[i]);
        return e.prototype.initialize || (e.prototype.initialize = c.noop), e.prototype.constructor = e
    }

    function t(e) {
        var t = this.superclass && this.superclass.prototype,
            n = u(e);
        d && (e.toString != Object.prototype.toString && n.push("toString"), e.valueOf != Object.prototype.valueOf && n.push("valueOf"));
        for (var i = 0, o = n.length; i < o; i++) {
            var r = n[i],
                a = e[r];
            if (t && c.isFunction(a) && "$super" === l(a)[0]) {
                var s = a;
                (a = function(e) {
                    return function() {
                        return t[e].apply(this, arguments)
                    }
                }(r).wrap(s)).valueOf = c.proxy(s.valueOf, s), a.toString = c.proxy(s.toString, s)
            }
            this.prototype[r] = a
        }
        return this
    }
    var d = function() {
        for (var e in {
                toString: 1
            })
            if ("toString" === e) return !1;
        return !0
    }();
    return {
        create: e,
        keys: u,
        Methods: {
            addMethods: t
        }
    }
}(jQuery);
Class.mixIn = function(e, t) {
        xing.mixIn(e.prototype, t)
    },
    function(n, e) {
        var t = {
                dataFilter: function(e, t) {
                    return t && "json" === t ? n.stripSecurity(e.trim() || "{}") : e
                },
                headers: {
                    Accept: "text/javascript, text/html, application/xml, text/xml, */*",
                    "X-CSRF-Token": n('meta[name="csrf-token"]').attr("content")
                },
                timeout: 2e4,
                cache: !1
            },
            a = e.protocol + "//" + e.host;
        n.ajaxSetup(t), n.ajaxPrefilter(function(e) {
            var t, n = ["delete", "put", "patch"],
                i = e.data || "",
                o = (e.type || "").toLowerCase(),
                r = []; - 1 !== n.indexOf(o) && (r.push("_method=" + o), e.type = o = "POST"), xing.support.utf8uri || (t = e.url.split("?"), e.url = encodeURI(t[0]) + (t[1] ? "?" + t[1] : "")), r.length && (e.data = (i ? i + "&" : "") + r.join("&")), 0 === e.url.indexOf("http") && -1 === e.url.indexOf(a) && (e.xhrFields = xing.mixIn({}, e.xhrFields, {
                withCredentials: !0
            }))
        }), n(document).on("ajaxComplete", function() {
            xing.trigger("body_change"), xing.trigger("behaviors.update")
        })
    }(jQuery, location),
    function(i) {
        function n(e) {
            var t = e.element.is(":inview");
            t !== e.inView && (e.inView = t, e.element.trigger("inview", [t]))
        }

        function e() {
            for (var e = 0, t = a.length; e < t; ++e) n(a[e - (t - a.length)])
        }

        function o() {
            a.length && (clearTimeout(t), t = setTimeout(e, 250), xing.browser.TOUCH && (clearTimeout(r), r = setTimeout(e, 500)))
        }
        var t, r, a = [];
        i.event.special.inview = {
            noBubble: !0,
            add: function(e) {
                var t = i(this);
                a.length || xing.on("foundation.dom_interaction", o);
                var n = t.is(":inview");
                n ? setTimeout(function() {
                    t.trigger("inview", [n])
                }, 0) : o(), a.push({
                    data: e,
                    element: t,
                    inView: n
                })
            },
            remove: function() {
                for (var e = [], t = 0, n = a.length; t < n; ++t) this !== a[t].element[0] && e.push(a[t]);
                (a = e).length || xing.off("foundation.dom_interaction", o)
            }
        }
    }(jQuery),
    function(o) {
        function t(e) {
            var n = o(e.target),
                t = n[0] === r[0],
                i = a.filter(function(e) {
                    return e.forced || n.is(e.context) || n.find(e.context).length
                });
            (t || r.find(n).length) && (s = !1, (i.length ? i : a).forEach(function(e) {
                var t = n.closest(e.context).length;
                ("force" === e.namespace && !t || !t) && !s && e.handler(c)
            }))
        }
        var r, n, a = [],
            s = !1,
            c = {
                type: "bodyClick",
                stopImmediatePropagation: function() {
                    s = !0
                }
            };
        o.event.special.bodyClick = {
            add: function(e) {
                n || (n = /(\.?force)/), r = r || o(document.body), 0 === a.length && r.on("click.body touchstart.body", t), a.unshift(o.extend({
                    context: o(this),
                    forced: e.namespace.match(n)
                }, e))
            },
            remove: function(t) {
                0 === (a = a.filter(function(e) {
                    return e.handler !== t.handler
                })).length && r.off(".body")
            }
        }
    }(jQuery),
    function(a) {
        function r(e) {
            return "INPUT" === e.nodeName && -1 === h.indexOf(e.type) || "TEXTAREA" === e.nodeName
        }

        function s(e) {
            return "FORM" === e.nodeName
        }

        function c(e) {
            return !e.first().is(":focusable-input")
        }

        function l(e) {
            return r(e) || "SELECT" === e.nodeName
        }

        function u(e, t, n) {
            return a(e).find('[name="' + t + '"]').get().indexOf(n)
        }
        var n, d = xing.browser.IE7,
            f = "wrong element type: ",
            h = ["checkbox", "radio"],
            o = a.noop;
        a.fn.setSelection = function(e, t) {
            var n = this,
                i = n[0];
            if (!r(i)) throw new TypeError(f + i.nodeName);
            if (c(n)) return n;
            if (i.setSelectionRange) i.focus(), i.setSelectionRange(e, t);
            else if (i.createTextRange) {
                var o = i.createTextRange();
                o.collapse(!0), o.moveEnd("character", e), o.moveStart("character", t), o.select()
            }
            return n
        }, a.fn.getSelectionStart = function() {
            var e = this,
                t = e[0];
            if (!r(t)) throw new TypeError(f + t.nodeName);
            if (c(e)) return e;
            if (null != t.selectionStart) return t.selectionStart;
            if (document.selection) {
                var n, i = document.selection.createRange();
                if ("textarea" === t.tagName.toLowerCase()) {
                    var o = i.duplicate();
                    o.moveToElementText(t), o.setEndPoint("EndToEnd", i), n = o.text.length - i.text.length
                } else n = d ? i.getBookmark().charCodeAt(2) - 3 : i.getBookmark().charCodeAt(2) - 2;
                return n
            }
            return t.value.length
        }, a.fn.getSelectionEnd = function() {
            var e = this,
                t = e[0];
            if (!r(t)) throw new TypeError(f + t.nodeName);
            if (c(e)) return e;
            if (null != t.selectionEnd) return t.selectionEnd;
            if (document.selection) {
                var n, i = document.selection.createRange();
                if ("textarea" === t.tagName.toLowerCase()) {
                    var o = i.duplicate();
                    o.moveToElementText(t), o.setEndPoint("EndToEnd", i), n = o.text.length - i.text.length + i.text.length
                } else {
                    n = i.getBookmark().charCodeAt(2) - (d ? 3 : 2) + i.text.length
                }
                return n
            }
            return t.value.length
        }, a.fn.getCaretPosition = function() {
            var e = this,
                t = e[0];
            if (!r(t)) throw new TypeError(f + t.nodeName);
            if (c(e)) return e;
            if (null != t.selectionStart) return t.selectionStart;
            if (document.selection) {
                var n, i = document.selection.createRange();
                if ("textarea" === t.tagName.toLowerCase()) {
                    var o = i.text.length;
                    i.moveStart("character", -t.value.length), n = i.text.length - o
                } else n = 0 - i.moveStart("character", -1e5);
                return n
            }
            return t.value.length
        }, a.fn.setCaretToStart = function() {
            var e = this,
                t = e[0];
            if (!r(t)) throw new TypeError(f + t.nodeName);
            if (c(e)) return e;
            if (t.setSelectionRange) t.setSelectionRange(0, 0);
            else if (t.createTextRange) {
                var n = t.createTextRange();
                n.collapse(!0), n.select()
            }
            return e
        }, a.fn.setCaretToEnd = function() {
            var e = this,
                t = e[0];
            if (!r(t)) throw new TypeError(f + t.nodeName);
            if (c(e)) return e;
            if (t.setSelectionRange) {
                var n = t.value.length;
                t.setSelectionRange(n, n)
            } else if (t.createTextRange) {
                var i = t.createTextRange();
                i.collapse(!1), i.select()
            }
            return e
        }, a.fn.serializeAll = function() {
            var e, t = this,
                n = [];
            if (!s(t[0])) throw new TypeError(f + t[0].nodeName);
            return e = t.serialize(), t.find("button").each(function() {
                n.push("" === e ? "" : "&", this.name, "=", this.value)
            }), e += n.join("")
        }, a.fn.serializeObject = function(r) {
            var e = this,
                a = {},
                t = e.serializeArray();
            return r = xing.mixIn({
                shadowFieldNames: !1
            }, r), t.length || (t = e.find("input, select, textarea").get().map(function(e) {
                return {
                    name: e.name,
                    type: e.type,
                    value: e.value,
                    checked: e.checked
                }
            })), t.forEach(function(e) {
                var t = e.checked,
                    n = e.name,
                    i = e.type,
                    o = e.value;
                i && -1 !== h.indexOf(i) && !t || (xing.isUndef(a[n]) ? a[n] = o : Array.isArray(a[n]) ? a[n].push(o) : a[n] = r.shadowFieldNames ? o : [a[n], o])
            }), a
        }, a.fn.save = function(e) {
            var t = this[0];
            if (!s(t)) throw new TypeError(f + t.nodeName);
            return (n = n || a(document.body)).data("stored_form_data_" + (e || t.id), a.toQuery(this.serialize())), this
        }, a.fn.restore = function(e) {
            var o = this[0];
            if (!s(o)) throw new TypeError(f + o.nodeName);
            var r = (n = n || a(document.body)).data("stored_form_data_" + (e || o.id));
            return r ? (this.find("input, select, textarea").each(function(e, t) {
                var n = t.name,
                    i = r[n];
                n && (l(t) ? (a.isArray(i) && (i = i[u(o, n, t)]), a(t).val(i).trigger("reset:hint")) : (i = "radio" === t.type ? t.value === i : !!i, a(t).prop("checked", i)))
            }), this.trigger("check:required").trigger("form:restored")) : undefined
        }, a.fn.request = function(e, t) {
            var n = this[0];
            if (e = e || {}, !s(n)) throw new TypeError(f + n.nodeName);
            var i = t ? this.serializeAll() : this.serialize();
            return a.ajax(n.action.replace(xing.root, ""), {
                type: e.type || n.method || "post",
                data: i + (e.data ? "&" + a.param(e.data) : ""),
                dataType: e.dataType || "text",
                beforeSend: e.beforeSend || o
            }).done(e.done || o).fail(e.fail || o).always(e.always || o), this
        }
    }(jQuery),
    function(t) {
        function d(e) {
            var t = i.exec(e);
            return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : (t = o.exec(e)) ? [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] : (t = a.exec(e)) ? [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10)] : !!(t = r.exec(e)) && [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10), parseInt(t[4], 10)]
        }

        function n(e) {
            if ("inherit" === e || "transparent" === e) return !1;
            var t = r.exec(e);
            return !t || 0 !== parseInt(t[4], 10)
        }

        function f(e) {
            return "#" + (16777216 + 65536 * parseInt(e[0], 10) + 256 * parseInt(e[1], 10) + parseInt(e[2], 10)).toString(16).slice(-6)
        }

        function h(e) {
            var t;
            do {
                if (n(t = e.css("background-color"))) return t;
                if (t = e[0].bgColor) return t;
                e = e.parent()
            } while (0 < e.length && e[0].tagName);
            return "#FFF"
        }
        var p = 10,
            i = new RegExp("#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})", "i"),
            o = new RegExp("#([a-fA-F0-9]{1})([a-fA-F0-9]{1})([a-fA-F0-9]{1})", "i"),
            r = new RegExp("rgba\\s*\\(\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*\\,\\s*([0-9]{1,3})\\s*\\)"),
            a = new RegExp("rgb\\s*\\(\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*\\)");
        t.fn.highlight = function(s, c, n) {
            function i(e) {
                function n() {
                    if (i < p) {
                        for (var e = [0, 0, 0], t = 0; t < 3; t++) e[t] = parseInt(s[t], 10) + (parseInt(a[t], 10) - parseInt(s[t], 10)) / p * i;
                        r.css({
                            backgroundColor: f(e)
                        }), i++, setTimeout(n, o)
                    } else l++, r.css({
                        backgroundColor: ""
                    }).removeAttr("data-highlighting"), c(), l === u.length && u.last().dequeue()
                }
                var i = 0,
                    o = parseInt(e / p, 10),
                    r = t(this),
                    a = d(h(r));
                a && !r.attr("data-highlighting") && (r.attr("data-highlighting", 1), n(r))
            }
            var l = 0;
            s = d(s && s || "#C4DCD4"), c = c || t.noop, n = n && 0 <= n ? n : 500;
            var u = this;
            return u.queue(function() {
                t.fx.off ? setTimeout(function() {
                    c(), u.last().dequeue()
                }, 10) : u.each(function(e, t) {
                    i.call(t, n)
                })
            }), u
        }
    }(jQuery),
    function(o) {
        function r(e, t, n) {
            t.on("scroll DOMNodeRemoved", function() {
                a(e, t) && n()
            })
        }

        function a(e, t) {
            var n = t.offset().top + t.outerHeight();
            return e.offset().top - 5 <= n
        }
        o.event.special.inelement = {
            add: function(e) {
                var t = o(this),
                    n = o(e.data[0]),
                    i = e.handler.wrap(function(e) {
                        t.off("inelement"), e()
                    });
                a(t, n) ? i() : r(t, n, i)
            },
            remove: function(e) {
                o(e.data[0]).off("scroll DOMNodeRemoved")
            }
        }
    }(jQuery),
    function(s) {
        var c, l, u = {
                addOffset: 0,
                callback: function() {},
                time: 200
            },
            d = {
                bottom: function(e, t) {
                    var n = parseInt(t.css("marginBottom"), 10);
                    return n = "number" == typeof n ? n : 0, e + t.innerHeight() + n - l.height()
                },
                center: function(e, t) {
                    return e + (t.innerHeight() - l.height()) / 2
                }
            };
        s.fn.scrollTo = function(e, t, n) {
            var i, o, r, a = this;
            if (c = c || s("html, body"), s.contains(c[0], a[0])) return e = e && "object" == typeof e ? xing.mixIn({}, u, e) : {
                addOffset: t || u.addOffset,
                callback: n || u.callback,
                time: e || u.time
            }, (o = a.closest(":scroll")).length && !o[0].nodeName.match(/HTML|BODY/) ? r = a[0].offsetTop - o[0].offsetTop : (o = c, r = a.is(c) ? 0 : a.offset().top), "number" == typeof e.addOffset && (r += e.addOffset), (i = d[e.position]) && (l = l || s(window), r = i(r, a)), r = Math.floor(r), o.animate({
                scrollTop: r
            }, e.time, function() {
                "HTML" !== this.nodeName && e.callback()
            }), a
        }
    }(jQuery),
    function(a) {
        a.fn.morphTo = function(t, e) {
            e = e || {}, t = a(t);
            var n = a(this[0]),
                i = e.complete || a.noop,
                o = {},
                r = isNaN(e.duration) ? 500 : e.duration;
            a.fx.off ? setTimeout(function() {
                n.hide(), t.show(), i()
            }, 10) : t.length ? (o.source = {
                position: n.css("position"),
                visibility: n.css("visibility"),
                display: "none",
                overflow: n.css("overflow"),
                width: n.width(),
                height: n.height()
            }, o.target = {
                position: t.css("position"),
                visibility: t.css("visibility"),
                display: "",
                overflow: t.css("overflow")
            }, xing.browser.msie && n.add(t).css({
                zoom: 1
            }), t.css({
                position: "absolute",
                left: -5e3,
                display: "",
                width: o.source.width
            }), a.extend(o.target, {
                width: t.width(),
                height: t.height()
            }), t.css({
                position: "relative",
                left: "",
                overflow: "hidden",
                height: o.source.height,
                width: o.source.width,
                opacity: 0
            }), n.css({
                position: "absolute",
                visibility: "",
                overflow: "hidden",
                width: o.source.width,
                height: o.source.height
            }), i = i.wrap(function(e) {
                n.css(a.extend(o.source, {
                    height: "",
                    width: ""
                })), t.css(a.extend(o.target, {
                    height: "",
                    width: ""
                })), e()
            }), setTimeout(function() {
                n.animate({
                    height: o.target.height,
                    width: o.target.width,
                    opacity: 0
                }, r), t.animate({
                    height: o.target.height,
                    width: o.target.width,
                    opacity: 1
                }, r), n.add(t).promise().done(i)
            }, 10)) : n.animate({
                opacity: 0,
                height: 0,
                margin: 0
            }, 300).promise().done(i)
        }
    }(jQuery),
    function(o) {
        var r;
        o.fn.overlay = function(e, i) {
            return i || (i = xing.utils.zIndexProvider()), e && setTimeout(function() {
                this.removeOverlay()
            }.bind(this), e + this.length), this.each(function() {
                var e = o(this),
                    t = o("<div>").css({
                        opacity: 0,
                        position: "absolute",
                        zIndex: i
                    }),
                    n = e.offset();
                return t.css({
                    left: n.left,
                    height: e.innerHeight(),
                    top: n.top,
                    width: e.innerWidth()
                }), e.data("overlay", t), (r = r || o(document.body)).append(t), t.css({
                    backgroundColor: "red"
                }), e
            })
        }, o.fn.removeOverlay = function() {
            return this.each(function() {
                var e = o(this),
                    t = e.data("overlay");
                t && t.remove(), e.removeData("overlay")
            })
        }
    }(jQuery),
    function() {
        function n() {
            var t = $("<a>");
            [
                ["pointerdown", "pointermove", "pointerup"],
                ["MSPointerDown", "MSPointerMove", "MSPointerUp"],
                ["touchstart", "touchmove", "touchend"]
            ].some(function(e) {
                return !!$.supports(t, e[0]) && (r = e, !0)
            })
        }

        function i(e, t, n, i) {
            (e = $(e))[t](r[n], i.selector, i.handler), xing.browser.TOUCH && e[t](o[n], i.selector, i.handler)
        }
        var o = ["mousedown", "mousemove", "mouseup"],
            r = o.slice(0);
        ["down", "move", "up"].forEach(function(e, t) {
            $.event.special[":pointer" + e] = {
                add: function(e) {
                    n && xing.browser.TOUCH && (n(), n = null), i(this, "on", t, e)
                },
                remove: function(e) {
                    i(this, "off", t, e)
                }
            }
        })
    }(),
    function(t) {
        function n(e) {
            e.which === a && (r = !1, o.forEach(function(e) {
                r || e(s)
            }))
        }
        var i, o = [],
            r = !1,
            a = t.keyCodes.KEY_ESC,
            s = {
                type: "esc",
                stopImmediatePropagation: function() {
                    r = !0
                }
            };
        t.event.special.esc = {
            add: function(e) {
                i = i || t(document.documentElement), 0 === o.length && i.on("keydown.esc", n), o.unshift(e.handler)
            },
            remove: function(t) {
                0 === (o = o.filter(function(e) {
                    return e !== t.handler
                })).length && i.off(".esc")
            }
        }
    }(jQuery), (xing = xing || {}).utils = xing.utils || {}, xing.utils.Behaviors = function(s) {
        function c() {
            return 1 === this.nodeType
        }

        function n(t) {
            Object.keys(g).forEach(function(e) {
                o(e, g[e], t)
            }), xing.trigger("behaviors.updated")
        }

        function i(e, t) {
            void 0 === e && (e = a = a || s("body")), "number" == typeof e && (t = e), 0 === t ? n(e) : (v = v.add(e), clearTimeout(d), d = setTimeout(function() {
                n(v), v = s()
            }, t || 500))
        }

        function l(e) {
            var t, n, i = h[e];
            if (!i) {
                var o;
                if (-1 !== (o = e.indexOf(x))) t = e.substring(0, o), n = e.substring(o + x.length);
                else {
                    var r, a = (e = e.replace("xing:", "--xing--")).split(":");
                    for (t = a.shift();
                        (r = a[0]) && p.test(":" + r);) t += ":" + r, a.shift();
                    n = a.join(":") || null
                }
                i = h[e] = {
                    key: t.replace("--xing--", "xing:"),
                    event: n
                }
            }
            return i
        }

        function o(e, i, t) {
            var n, o, r, a = e;
            e = l(e), o = e.event, r = e.key, !o || "click" !== o && "submit" !== o && "change" !== o && 0 !== o.indexOf(":pointer") ? (t ? (n = (t = s(t)).find(r), t.filter(c).is(r) && (n = n.add(t.filter(r)))) : n = s(r), n.each(function() {
                var n = s(this),
                    e = n.data("behavior_actions");
                e || (e = []), -1 === e.indexOf(i) && (e.push(i), s.isClass(i) ? new i(n) : o ? n.on(o, function(e, t) {
                    i(n, e, t)
                }) : i(n)), n.data("behavior_actions", e)
            })) : m[a] || (m[a] = 1, (u = u || s(document.documentElement)).on(o + ".behavior", r, function(e) {
                i(s(e.currentTarget), e)
            }))
        }

        function r(e, t) {
            e.split(f).forEach(function(e) {
                o(e, g[e] = t)
            })
        }

        function e(t, e) {
            "string" == typeof t ? r(t, e) : Object.keys(t).forEach(function(e) {
                r(e, t[e])
            })
        }
        var a, u, d, f = /,\s*/,
            h = {},
            p = s.expr.match.CHILD,
            g = {},
            m = {},
            x = ">>",
            v = s();
        return xing.ready(function() {
            n()
        }), xing.on("behaviors.update", function(e, t) {
            i((t = t || {}).container, t.delay)
        }), {
            add: e,
            update: i
        }
    }(jQuery), (xing = xing || {}).utils = xing.utils || {}, xing.on("quick_settings.init", function(e, t) {
        var n = t.target;
        n && n.one("mouseenter", function() {
            new xing.utils.ContentLoader(t.src, n, {
                force: !0
            })
        }).html("Quick Settings").show()
    }), xing.utils.ContentLoader = function(o) {
        var r, e = o.noop,
            a = {
                behaviors: !0,
                evalScripts: !0,
                inViewport: !1,
                indicator: null,
                type: "GET",
                parameters: {},
                data: {},
                timeout: !1,
                whenDomLoaded: !1,
                beforeSend: e,
                always: e,
                done: e,
                fail: e,
                delay: 0,
                reloadAfter: 0,
                force: !1
            },
            s = {
                get_quick_settings: function(e, t, n) {
                    try {
                        n = xing.storage("qs")
                    } catch (i) {}
                    return n && "false" !== n && (n = n.split(":"), xing.trigger("quick_settings.init", {
                        current: n[0],
                        status: n[1],
                        src: e,
                        target: t
                    })), n
                }
            };
        return Class.create({
            initialize: function(t, n, e) {
                var i;
                e && e.parameters && (e.data = e.parameters), this.options = o.extend({}, a, e), !1 === this.options.force && (Object.keys(s).forEach(function(e) {
                    -1 !== t.indexOf(e) && (i = s[e](t, n) && e)
                }), i) || (r = r || o(document.body), this.url = t, this.container = o(n), xing.globals && xing.globals.contentLoaderTimeout && (this.options.timeout = xing.globals.contentLoaderTimeout), this.load = this.load.bind(this), this._initLoading = this._initLoading.bind(this), this.options.delay ? setTimeout(this._initLoading, this.options.delay) : this._initLoading())
            },
            _initLoading: function() {
                var e = this.container,
                    t = this.load;
                return this.options.inViewport ? xing.ready(function() {
                    e.one("inview", t)
                }) : this.options.whenDomLoaded ? xing.ready(t) : t()
            },
            load: function() {
                var e = this.options.timeout;
                o.ajax(this.url, o.extend({
                    dataType: "text",
                    type: this.options.type,
                    data: this.options.data,
                    beforeSend: this._handleBeforeSend.bind(this),
                    __safe: !0
                }, e && {
                    timeout: 1e3 * e
                })).done(this._handleDone.bind(this)).fail(this._handleFail.bind(this)).always(this._handleAlways.bind(this))
            },
            _showIndicator: function() {
                var e = this.options;
                xing.trigger("xing.loading"), this.indicatorTimeout = setTimeout(function() {
                    o(e.indicator).show()
                }, 500)
            },
            _hideIndicator: function() {
                xing.trigger("xing.loading_done"), clearTimeout(this.indicatorTimeout), o(this.options.indicator).hide()
            },
            _render: function(e) {
                var t = this.options;
                e && "!DOCTYPE" !== e.trim().substr(1, 8) && (this.container.html(t.evalScripts ? e : o.stripScripts(e)), t.behaviors && xing.trigger("behaviors.update", {
                    container: this.container
                }))
            },
            _handleBeforeSend: function() {
                this._showIndicator(), this.options.beforeSend()
            },
            _handleAlways: function() {
                var e, t, n = (new Date).getTime();
                this._hideIndicator(), this.options.reloadAfter && ((e = this.options.reloadAfter) && xing.on("xing.refresh", function() {
                    (t = (new Date).getTime()) - n > e && (n = t, this.load())
                }.bind(this)), this.options.reloadAfter = null), this.options.always()
            },
            _handleDone: function(e) {
                this._render(e), this._ajaxCompleted = !0, this.options.done(e)
            },
            _handleFail: function(e) {
                this._ajaxCompleted = !0, this.options.fail(e)
            }
        })
    }(jQuery), xing.on("load.content", function(e, t) {
        new xing.utils.ContentLoader(t.url, t.container, t)
    }),
    function(c) {
        function l(e) {
            var t = c('[data-update="' + e + '"]'),
                n = c("#" + e + "[data-update]");
            return t.add(n)
        }

        function e(e, n, t, i) {
            var r, a, o;
            if (n) {
                if (n.max && (r = n.max, delete n.max), n.replaceCount && (a = !0, delete n.replaceCount), "function" == typeof t && (i = t, t = null), u && t) {
                    (o = sessionStorage[t]) && (o = JSON.parse(o));
                    try {
                        sessionStorage[t] = JSON.stringify(xing.mixIn(o || {}, n))
                    } catch (s) {}
                }
                Object.keys(n).forEach(function(e) {
                    var o = n[e],
                        t = l(e);
                    if (0 !== o && "0" !== o) {
                        if (t.length) {
                            if (!o && "hide" === t.attr("data-update")) return void t.hide();
                            a ? (t.each(function(e, t) {
                                var n = (t = c(t)).html(),
                                    i = o;
                                "skip" !== t.attr("data-update-exceed") && (r && parseInt(o, 10) > r ? (t.attr("data-update-exceed", ""), i = r) : t.removeAttr("data-update-exceed")), t.html(n ? n.replace(/\d+/, i) : i)
                            }), parseInt(o, 10) ? t.show() : t.hide()) : t.html(o).show(), t.is(":visible") && c(t.attr("data-update-hide")).hide()
                        }
                    } else t.hide()
                }), i && i()
            }
        }
        var t = xing.support,
            u = t.sessionStorage && t.JSON;
        xing.on("xing.dom_update", e)
    }(jQuery), (xing = xing || {}).utils = xing.utils || {}, xing.loadedFiles = [],
    function(s, c, t) {
        "use strict";

        function d(e, t) {
            xing.error(e, "LazyLoader", t)
        }

        function o(e, t) {
            var n, i, o, r, a;
            if (g = g || c.head || c.getElementsByTagName("head")[0], "SCRIPT" !== e.nodeName && t)
                for (-1 !== (t = t.substr(0, t.lastIndexOf("/") + 1).replace(/\/\d+\/.*$/, "").replace(xing.root, "")).indexOf("/assets/frontend_minified/") ? (a = "/assets/frontend/", t = "/assets/frontend_minified/") : -1 !== t.indexOf("/assets/frontend/") ? (a = "/assets/frontend_minified/", t = "/assets/frontend/") : -1 !== t.indexOf("/css/v/") ? a = "/css/xing/" : -1 !== t.indexOf("/css/xing/") && (a = "/css/v/"), n = 0, i = (o = g.getElementsByTagName("link")).length; n < i; n++) !o[n].href || -1 === o[n].href.indexOf(t) && -1 === o[n].href.indexOf(a) || (r = o[n]);
            if (r) {
                for (; r.nextSibling && "STYLE" === r.nextSibling.nodeName;) r = r.nextSibling;
                r.nextSibling ? g.insertBefore(e, r.nextSibling) : g.appendChild(e)
            } else g.appendChild(e)
        }

        function i(e) {
            (N && t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        }

        function r(e, t) {
            var n = c.createElement("style");
            n.setAttribute("type", "text/css"), n.setAttribute("media", this.media || p), o(n, t), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(c.createTextNode(e))
        }

        function a(e) {
            return 200 <= e && e < 300 || 304 == e
        }

        function e(e, t) {
            var n;
            try {
                n = new XMLHttpRequest
            } catch (i) {
                n = new ActiveXObject("Microsoft.XMLHTTP")
            }
            return n && n.open(e, t, !0), n
        }

        function l(n, i) {
            var o, r = e("GET", n);
            r && (r.onreadystatechange = function() {
                var e;
                if (4 === r.readyState) {
                    clearTimeout(o);
                    try {
                        e = r.status
                    } catch (t) {}
                    if (!e || -1 !== E.indexOf(e + "")) return;
                    a(e) ? i.trigger("loaded", n, r.responseText) : d([" error: ", n + ":", e].join(" "))
                }
            }, o = setTimeout(function() {
                r.onreadystatechange = xing.noop;
                try {
                    r.abort()
                } catch (e) {}
            }, 52e3), r.send(null))
        }

        function u(e, t) {
            var n;
            return _.test(e) ? (n = i, t = L.JS) : b.test(e) && (n = r, t = L.CSS), null == t && d(S.replace("#{url}", e)), {
                provider: t,
                evaluator: n
            }
        }

        function f(e) {
            return e.port && "0" != e.port && e.port != q[e.protocol] ? e.hostname + ":" + e.port : e.hostname
        }

        function n() {
            var e, t, n, i, o = c.getElementsByTagName(C),
                r = o.length,
                a = o[0 === r ? r : r - 1];
            return a && (t = a.href), t && t.match(x) || (t = [I, k, f(s), D].join("")), (e = c.createElement("a")).href = t, n = 0 === (n = e.pathname || "").indexOf(T) ? n : T + n, i = e.protocol + k + f(e), e = null, {
                domain: i,
                path: i + n.replace(y, "$1")
            }
        }
        var h, p, g, m, x = /^(https?:)?\/\/[^\/]*/i,
            v = /complete|loaded/,
            y = /(.*\/).*/,
            b = /.+\.css($|\?|#)/i,
            w = ["print", "screen,projection,handheld"],
            _ = /.+[\.\/]js($|\?|#)/i,
            T = "/",
            k = "//",
            C = "base",
            E = "0 12017 12029 12031 12041 12152",
            S = " support: invalid url: '#{url}'",
            j = xing.support.eventListener,
            O = !j && ["onr", "eadystatec", "hange"].join(""),
            N = "execScript" in t,
            L = {
                JS: function(e) {
                    function t() {
                        e.trigger("loaded", n)
                    }
                    var n = this.url;
                    if (n.match(R)) l(n, e);
                    else {
                        var i = c.createElement("script");
                        i.async = !0, i.src = n, j ? i.addEventListener("load", t, !1) : i[O] = function() {
                            v.test(i.readyState) && (i[O] = null, t())
                        }, o(i)
                    }
                },
                CSS: (m = [], function(e) {
                    var t = this.url;
                    if (t.match(R) || t.match(P)) l(t, e);
                    else {
                        var n = c.createElement("link"); - 1 === m.indexOf(t) && (n.href = t, n.rel = "stylesheet", n.type = "text/css", n.media = this.media || p, o(n, t)), setTimeout(function() {
                            m.push(t), e.trigger("loaded", t)
                        }, 300)
                    }
                })
            },
            $ = s.hostname,
            D = s.pathname,
            A = s.port,
            I = s.protocol,
            R = new RegExp(I + "//" + $ + (A ? ":" + A : "")),
            P = /^https?:\/\/.*\.xing\.com\/assets\/frontend.*webfont/,
            q = {
                "http:": 80,
                "https:": 443
            },
            M = {};
        xing.utils.LazyLoader = Class.create({
            initialize: function(e, t) {
                var n, i, o;
                if (!p) {
                    for (h = xing.utils.LazyLoader.convertToAbsoluteUrl, n = 0, i = (o = c.getElementsByTagName("link")).length; n < i; n++)
                        if ("stylesheet" === o[n].rel) {
                            p = o[n].media;
                            break
                        } p = p || "all"
                }
                Array.isArray(e) || (e = [e]), this.urlObjects = e.map(function(e) {
                    var t = p;
                    "object" == typeof e && (-1 !== w.indexOf(e.media) && (t = e.media), e = e.src);
                    var n = u(e);
                    return {
                        url: h(e.trim()),
                        evaluate: n.evaluator,
                        provider: n.provider,
                        media: t
                    }
                }), this.load(this.urlObjects, t || xing.noop)
            },
            load: function(a, s) {
                var e = 0,
                    c = a.length,
                    l = 0,
                    u = {};
                this.on("loaded", function(e, t, n) {
                    var i, o = 0;
                    if (xing.loadedFiles.push(t.replace("http://", "")), n && (u[t] = n), ++l === c) {
                        for (; o < c; o++)
                            if (i = u[a[o].url]) try {
                                M[a[o].url] || (M[a[o].url] = !0, a[o].evaluate(i, a[o].url))
                            } catch (r) {
                                Math.floor(100 * Math.random()) || d([" error parsing: ", a[o].url, ":", r.message].join(" "), r)
                            }
                        this.loaded = !0, this.trigger("loading_done"), this.off("loaded"), xing.trigger("ajax:done", {
                            url: t,
                            data: n
                        }), setTimeout(s, 0)
                    }
                }.bind(this)), setTimeout(function() {
                    for (; e < c; e++) a[e].provider(this)
                }.bind(this), 0)
            }
        }), xing.mixIn(xing.utils.LazyLoader.prototype, xing.traits.EventEmitterTrait), xing.utils.LazyLoader.convertToAbsoluteUrl = function(e) {
            var t = n();
            return x.test(e) ? e : t[0 === e.indexOf(T) ? "domain" : "path"] + e
        }
    }(location, document, window),
    function() {
        function f(e) {
            for (var t = e && 0 === e.length ? xing : window, n = 0, i = e.length; n < i; n++) t[e[n]] || (t[e[n]] = {}), t = t[e[n]];
            return t
        }

        function h(e, t) {
            function n() {
                return e.apply(this, t)
            }
            return n.prototype = e.prototype, new n
        }
        var p = {},
            g = ["JSON", "js/json.js"];
        xing.globals.assets = xing.mixIn(xing.globals.assets || {}, window.storableAssets || {}, {
            add: function(e) {
                for (var t, n = Object.keys(e), i = n.length; i--;) this[t = n[i]] && this[t] + "" != e[t] + "" && xing.error("Asset key overwrite > " + t), this[t] = e[t]
            },
            deprecated: []
        }), xing.define("require", function(e) {
            var t, n, i, o, r = [],
                a = window,
                s = xing.globals.assets,
                c = s.deprecated,
                l = s._host + (s._origin || s._root);
            if ("string" == typeof e && 0 === e.indexOf("pattern:")) {
                var u = e.substring(8);
                e = ["js/" + (u = u.replace("component.", "components/").replace("element.", "elements/")) + ".js", "css/" + u + ".css"]
            }(e = Array.isArray(e) ? e : [e]).forEach(function(e) {
                0 !== e.indexOf("js/") && 0 !== e.indexOf("css/") ? (t = e.split("."), n = t.pop(), -1 === g.indexOf(n) && (a = f(t)), -1 !== c.indexOf(n) && xing.error("Deprecated requested > " + n), n in a || (Array.isArray(s[n]) ? s[n].forEach(function(e) {
                    l ? r.push(e in s ? l + s[e] : e) : r.push(e)
                }) : r.push(s[n]))) : Array.isArray(s[e]) ? s[e].forEach(function(e) {
                    r.push(0 === e.indexOf("http") ? e : l + e)
                }) : s[e] && s[e].length && r.push(l + s[e])
            });
            var d = p[e.join(",")];
            return d ? o = d.loaded : r.length ? (d = new xing.utils.LazyLoader(r), o = d.loaded, p[e.join(",")] = d) : o = !0, {
                constructWith: function() {
                    var e = arguments;
                    if (o) i = h(a[n], e);
                    else var t = d.on("loading_done", function() {
                        i = h(a[n], e), t.stop()
                    });
                    return this
                },
                afterLoad: function(e) {
                    if (o) e(i || a[n]);
                    else var t = d.on("loading_done", function() {
                        e(i || a[n]), t.stop()
                    })
                }
            }
        })
    }(),
    function(r) {
        function n(e) {
            (new Image).src = e
        }

        function a(e, t) {
            var n = (e || {})[t];
            "string" == typeof n && 0 < n.indexOf("[%pageName%]") && (d = r.s ? r.s.pageName : "", e[t] = n.replace("[%pageName%]", d))
        }

        function s(t) {
            return "object" != typeof t && (t = {}), y.forEach(function(e) {
                t[e] || (t[e] = "")
            }), Object.keys(t).forEach(function(e) {
                a(t, e)
            }), t
        }

        function e(e, t, n) {
            var i = s(t.extendedParams),
                o = function() {
                    a(t, "trackingName"), t.type && t.type.match(/[deo]/) || (t.type = "o"), s_gi(s_account).tl(!0, t.type, t.trackingName, i, n)
                };
            r.s_gi && r.s_account ? o() : xing.on("sc.ready", o)
        }

        function i(e, t) {
            var n = function() {
                s_gi(s_account).t(s(t))
            };
            r.s_gi && r.s_account ? n() : xing.on("sc.ready", n)
        }

        function o() {
            xing && t()
        }

        function c() {
            return xing.user && xing.user.id.match(/None|^0$/)
        }

        function t() {
            var t = $(".tracking-collector"),
                e = location,
                n = "other",
                i = "0",
                o = e.host,
                r = e.pathname,
                a = $("meta[name=referrer]"),
                s = location.search.match(/op=(\w*)[;&\.]?/);
            s = s ? s[1] : null, "de" === m && "welcome_ad" !== s && 0 !== o.indexOf("admin") && (-1 === r.indexOf("/app/") && (r = r.replace(/(\/[a-z]*).*/, "$1")), Object.keys(b).forEach(function(e) {
                -1 !== b[e].indexOf(r) && (n = e)
            }), "/" === r && (n = "start"), o.match(/^login\./) && (n = "loginpage"), "tandc" === s ? n = "information" : "logout" === s && c() && (n = "logoutpage"), t.length || (t = $("<div>").addClass("tracking-collector").appendTo("body")), "xing" === (o = o.replace(/^www\./, "").replace(/^login\./, "").replace(/^api\./, "").replace(/^dev\./, "").replace(/^coaches\./, "")).substr(0, 4) && (o = "box." + o), "logout" === s && (i = "1"), a.attr("content", "origin"), xing.trigger("frame.render", {
                cntId: t,
                height: "1",
                width: "1",
                secure: "0" === i,
                src: location.protocol + "//" + o + "/collect/ivw?country=" + m + "&code=" + n + "&frabo=" + i,
                onLoad: function() {
                    a.attr("content", "default")
                },
                wrapper: ".tracking-collector"
            }), window.addEventListener("message", function(e) {
                e.source === $(".tracking-collector iframe")[0] && $(".tracking-collector iframe")[0].contentWindow && ("show_frabo" === e.data && t.addClass("tracking-collector-visible"), "hide_frabo" === e.data && t.removeClass("tracking-collector-visible"))
            }, !1))
        }

        function l(e, t) {
            n(t)
        }
        var u, d, f = xing.noop,
            h = {
                sc_t: "tracking.track_page_view",
                sc_tl: "tracking.track_event",
                ivw: "tracking.load_ivw",
                oewa: "tracking.oewa",
                sc_ivw: "tracking.sc_ivw"
            },
            p = {},
            g = xing.globals,
            m = g && g.countryCode,
            x = [];
        if (m = (m || "de").toLowerCase(), "defineProperty" in Object && "addEventListener" in r) try {
            Object.defineProperty(r, "$global_j", {
                get: function() {
                    return f
                },
                set: function() {
                    value = f
                }
            })
        } catch (w) {}
        var v = {
            _mzp: {},
            _mz: {
                run: f
            },
            _GPL: {
                items: {
                    e6a00: {
                        log: f
                    }
                },
                log: f,
                removeScripts: function() {
                    r._GPL = {
                        newKeys: f,
                        removeScripts: f
                    }
                }
            }
        };
        xing.mixIn(r, v);
        try {
            xing.mixIn(r.$global_j.prototype, {
                click: f,
                each: f,
                get: f
            })
        } catch (w) {}
        Object.keys(v).forEach(function(e) {
            try {
                Object.freeze(r[e]), Object.preventExtensions(r[e])
            } catch (w) {}
        });
        var y = ["events", "products"],
            b = {
                companies: ["/companies", "/company"],
                content: ["/news"],
                events: ["/events"],
                information: ["/app/share", "/apps", "/imprint", "/mobile", "/privacy", "/tandc", "/terms"],
                network: ["/app/bookmark", "/app/contact", "/app/search", "/communities", "/contacts", "/feed", "/feedy", "/messages", "/net", "/premium", "/publicsearch", "/search", "/spi"],
                other: ["/jobs", "/projobs"],
                premium: ["/premium"],
                projects: ["/projects"]
            };
        "de" === m && (g.avoidDefaultTracking = !0), g.trackRecommendations = !0, xing.on({
            prefix: "tracking",
            events: {
                track_page_view: i,
                track_event: e,
                load_ivw: o,
                oewa: l,
                recommendation: function(e, t) {
                    t && g && g.trackRecommendations && (x.push(t), clearTimeout(u), u = setTimeout(function() {
                        xing.require("js/recommendations_tracking.js").afterLoad(function() {
                            xing.trigger("recommendations", x), x.length = 0
                        })
                    }, 100))
                },
                sc_ivw: function(e, t) {
                    i(e, t), o()
                }
            }
        }), xing.define("tracking", {
            register: function(e, t) {
                p[e] && xing.error("key exists", "Tracking registration: "), p[e] = t
            },
            unregister: function(e) {
                p[e] && delete p[e]
            },
            trigger: function(e, t) {
                var n = p[e];
                n && ("function" == typeof n.data && (n.data = n.data()), xing.trigger(h[n.type], xing.mixIn(n.data, t)))
            }
        }), xing.support.storage && xing.ready(function() {
            var e = xing.storage("recommendation-tracking");
            e && g && g.trackRecommendations && xing.require("js/recommendations_tracking.js").afterLoad(function() {
                xing.trigger("recommendations.storage", e)
            })
        }), g && !g.skipIvwTracking && xing.on("track-on-load", function() {
            setTimeout(t, 1e3)
        }), xing.ready(function() {
            xing.trigger("track-on-load"), $(document).on(":pointerdown", "[data-tracking-param]", function(e) {
                var t = e.currentTarget,
                    n = $(t).data("tracking-param");
                n && (n = $.param(n), t.search ? t.search += "&" + n : t.search = "?" + n, $(t).removeAttr("data-tracking-param"))
            })
        })
    }(window), (xing = xing || {}).utils = xing.utils || {},
    function(o) {
        function p(e) {
            var t = e.find("img").height();
            return "hidden" !== e.css("overflow") && t > e.height() ? t : null
        }

        function e() {
            arguments.length && this.handle.apply(this, arguments)
        }
        var n = {
            handle: function(e, t, n) {
                var i;
                this.target = $(e).appendTo(o = o || document.body), this.source = $(t), this.sourceLayout = this.source.offset(), !n || 0 !== this.sourceLayout.left || 0 !== this.sourceLayout.top || this.source[0] && $.contains(o, this.source[0]) ? (t.location && (this.source = $(), n = t), this.options = n || {
                    location: {
                        primary: "below"
                    }
                }, this.options.margin = this.options.margin || 0, this.options.forcePosition && (this.options.force = this.options.forcePosition), this.options.location && !$.isPlainObject(this.options.location) && (i = this.options.location.split("-"), this.options.location = {
                    primary: i[0],
                    secondary: i[1]
                }), this.target[0] && this.refresh()) : n.onFailure && n.onFailure()
            },
            refresh: function() {
                var e, t, n = this.target[0].className,
                    i = {
                        position: "absolute"
                    },
                    o = {
                        width: this.target.outerWidth(),
                        height: this.target.outerHeight()
                    },
                    r = this.source.offset(),
                    a = r && {
                        left: r.left,
                        top: r.top,
                        width: this.source.outerWidth(),
                        height: this.source.outerHeight()
                    },
                    s = {
                        width: $(window).width(),
                        height: $(window).height()
                    },
                    c = {
                        top: $(window).scrollTop(),
                        left: $(window).scrollLeft()
                    },
                    l = $.extend({}, this.options.location),
                    u = this.options.margin,
                    d = this.options.force;
                if ("center" === l.primary) {
                    var f = c.left + (s.width - o.width) / 2,
                        h = Math.max(c.top, c.top + (s.height - o.height) / 2);
                    i.left = Math.max(0, f), i.top = Math.max(0, h), i.zIndex = xing.utils.zIndexProvider()
                } else -1 < ["above", "below"].indexOf(l.primary) ? ("right" === l.secondary && a.left + a.width - o.width >= c.left || "left" === l.secondary && a.left + o.width > s.width + c.left ? (l.secondary = "right", i.left = a.left + a.width - o.width) : "left" === l.secondary || "right" === l.secondary && a.left + a.width - o.width < 0 ? (l.secondary = "left", i.left = a.left) : i.left = a.left + a.width / 2 - o.width / 2, e = [a.top - o.height - (p(this.source) || u), a.top + a.height + u], "above" === l.primary && (d || e[0] >= c.top) || "below" === l.primary && !d && e[0] >= c.top && e[1] + o.height > s.height + c.top ? (l.primary = "above", i.top = e[0]) : (l.primary = "below", i.top = e[1]), d || l.secondary || (i.left = Math.max(i.left, 0), 0 < (t = i.left + o.width - s.width) && (i.left -= t))) : (i.top = a.top + a.height / 2 - o.height / 2, e = [a.left + a.width + u, a.left - o.width - u], "right" === l.primary && (d || e[0] + o.width <= s.width) || !d && e[1] < 0 ? i.left = e[0] : i.left = e[1], d || (i.top = Math.max(i.top, 0), 0 < (t = i.top + o.height - s.height) && (i.top -= t)));
                n = n.replace(/(positioning-\w+(-\w+)*(\s|$))/g, ""), n += " positioning-" + l.primary, n += l.secondary ? "-" + l.secondary : "", this.target[0].className = n.replace(/\s+/, " "), this.target.css(i), this.options.complete && this.options.complete()
            }
        };
        xing.utils.Positioning = e, xing.mixIn(xing.utils.Positioning.prototype, n), xing.on("xing.positioning", function(e, t) {
            n.handle(t.target, t.src, t.options)
        })
    }(), (xing = xing || {}).utils = xing.utils || {}, xing.utils.zIndexProvider = function() {
        var i = 1e3;
        return xing.on("xing.z_index", function(e, t) {
                var n = (t = $(t)).css("zIndex");
                (!n || "auto" === n || 1 < i - n) && t.css({
                    zIndex: i++
                })
            }),
            function() {
                return i++
            }
    }(), xing.utils.Behaviors.add({
        "textarea[maxlength], input[maxlength]": function(e) {
            xing.require("js/textarea_limiter.js").afterLoad(function() {
                new xing.controls.TextareaLimiter(e, e.attr("maxlength"), e.attr("data-maxlength-hint"), e.attr("data-maxlength-count"))
            })
        },
        "textarea.auto-resize": function(e) {
            var t = e.data("options") || {};
            xing.require("js/textarea_auto_resize.js").afterLoad(function() {
                new xing.controls.TextareaAutoResize(e, t)
            })
        },
        "select.auto-submit:change, input.auto-submit:change": function(e) {
            e.closest("form")[0].submit()
        },
        "select.link-list:change": function(e) {
            location.href = e.val()
        },
        "button.disable-after-submit": function(e) {
            e.closest("form").on("submit", function() {
                e.prop("disabled", !0)
            })
        },
        "div[data-context-help]": function(e) {
            var t = {
                height: e.attr("data-height"),
                width: e.attr("data-width")
            };
            e.css(t) && setTimeout(function() {
                e.one("inview", function() {
                    xing.trigger("frame.render", xing.mixIn(t, {
                        cntId: e,
                        delimiter: "",
                        rnd: "",
                        src: e.attr("data-context-help")
                    }))
                })
            }, 50)
        },
        "a.message-lightbox-link:click": function(e, t) {
            t.preventDefault();
            var n = $.toQuery(e.attr("data-lightbox-params") || "");
            n.introduce || n.recommend ? new xing.controls.ShareLightbox({
                data: n
            }, e) : $("#global-messenger").data("feature") ? xing.trigger("messenger.openChat", n) : new xing.controls.MessageLightbox({
                data: n
            }, e)
        },
        "a.contact-lightbox-link:click": function(e, t) {
            var n = $.toQuery(e.attr("data-lightbox-params")),
                i = {
                    other_id: n.b_sid.split(".")[0]
                },
                o = {
                    anchor: e,
                    redirect: n.redirect || ""
                };
            n.sc_o && (i.sc_o = n.sc_o, o.sc_o = n.sc_o), new xing.controls.Lightbox({
                src: "/contacts/contact_requests/new",
                data: i
            }), $("#lightbox").data("contactRequestData", o), t.preventDefault()
        },
        "a[data-bookmark-user]:click": function(e, t) {
            xing.controls.BookmarkUserLightbox(e, $.toQuery(e.attr("data-bookmark-user") || "")), t.preventDefault()
        },
        "textarea[data-wysihtml5]": function(t) {
            var e = t.attr("data-wysihtml5");
            e && xing.controls.loadWYSIHTML5(t, {
                parserProfile: e,
                callback: function(e) {
                    t.data("wysihtml5-instance", e)
                }
            })
        },
        "[data-sub-tabs], [data-sub-tabs-contact]": function(e) {
            xing.require("js/tab_switcher.js").afterLoad(function() {
                e.is("[data-sub-tabs]") ? new xing.controls.TabSwitcher(e) : new xing.controls.ContactTabSwitcher(e)
            })
        },
        "div[data-content-loader]": function(e) {
            var t = xing.mixIn(e.data("options") || {}, {
                always: function() {
                    e.html().replace(/<!--.*-->/g, "").trim() || e.remove()
                }
            });
            new xing.utils.ContentLoader(e.attr("data-content-loader"), e, t), e.removeAttr("data-content-loader")
        },
        "[data-confirm-trigger]:click": function(e, t) {
            var n = $.toQuery(e.attr("data-confirm-trigger"));
            xing.trigger("confirm", {
                preset: n.type || "delete",
                trigger: e
            }), t.preventDefault()
        },
        "[data-href]:click": function(e, t) {
            var n = e.attr("data-href"),
                i = "_blank" === e.attr("data-target");
            $(t.target).closest("a").length ? t.stopPropagation() : i ? window.open(n) : xing.redirect(n)
        },
        "[data-module]": function(e) {
            var t = e.data("module"),
                n = e.data("options") || {};
            n.isSelfExecute ? xing.ready(t) : t && xing.require(t).constructWith(e, n)
        },
        "[data-bookmark-lightbox]:click": function(e, t) {
            new xing.controls.ExtendedLightbox({
                form: "#bookmark-form",
                src: "/app/bookmark?op=bookmark_lightbox;" + e.attr("data-bookmark-lightbox")
            }).on("success", function() {
                setTimeout(function() {
                    xing.trigger("tracking.recommendation", e)
                })
            }), t.preventDefault()
        },
        "form[data-extended]": function() {
            function e() {
                setTimeout(function() {
                    t.removeClass("js-loading").find("button").prop("disabled", !1)
                }, 100)
            }
            var t = $(),
                i = 'input[type="hidden"][name="sid"]',
                o = ['meta[name="csrf-token"]', 'meta[name="csrf-param"]'].join(", "),
                r = $('<input type="hidden" name="sid">')[0];
            return $(document).on("ajaxStop.form_extension esc.form_extension", e),
                function(n) {
                    var e = xing.globals.csrfToken;
                    !e || n.find(i).length || $(o).length || (r.value || (r.value = e), xing.ready(function() {
                        n.append(r.cloneNode(!1))
                    })), n.find("[required]").length && xing.require("js/form_empty_inputs.js").afterLoad(function() {
                        new xing.utils.FormEmptyInputs(n)
                    }), n.on("click", "[data-preview]", function(e) {
                        var t = $(e.currentTarget).data("preview");
                        n.addClass("js-loading").request({
                            type: "POST",
                            dataType: "text",
                            done: function(e) {
                                $(t).html(e)
                            }
                        }), e.preventDefault()
                    }), t = t.add(n.submit(function() {
                        n.addClass("js-loading"), t.find("button").prop("disabled", !0)
                    }))
                }
        }(),
        "[data-reco-tracking]": function(e) {
            setTimeout(function() {
                xing.trigger("tracking.recommendation", e)
            }, 0)
        },
        'a[href$="op=logout"]:click': function() {
            try {
                xing.clear("qs recommendation-tracking")
            } catch (e) {}
        },
        "[data-tabnav] > li:click": function(e, t) {
            e.addClass("active").siblings().removeClass("active"), xing.trigger("tabnav.change", {
                tabNav: e.parent(),
                activeTab: e
            }), t.preventDefault()
        },
        "[data-ds-suggestor]": function(e) {
            xing.trigger("xing.ds_suggestor", e)
        },
        "[data-img-src]": function(e) {
            xing.require("js/image_on_view.js").afterLoad(function() {
                new xing.utils.ImageOnView(e)
            })
        }
    }),
    function(n, e, t) {
        function i() {
            r = !0
        }

        function o(e) {
            n(".focussed.force").removeClass("focussed force"), n(e).parents(f).addClass("focussed force")
        }
        var r, a, s, c, l, u = n.keyCodes.KEY_TAB,
            d = "#nav-main a",
            f = "#nav-main li:not(.home)";
        n(e).on("mousemove.xing_refresh", function() {
            l && (l = null, xing.trigger({
                events: ["advertising.reload", "xing.refresh"]
            })), clearTimeout(s), s = setTimeout(function() {
                l = !0
            }, 3e5)
        }), n(e).on("keydown.tab_focus keyup.tab_focus", function(e) {
            a || "keydown" !== e.type || e.which !== u || (a = setTimeout(i, 0)), r && "keyup" === e.type && e.which === u && (xing.trigger("xing.tab_focus", e), r = a = null)
        }), (c = n("meta[name=referrer]")[0]) && n(e).on("click", "a", function(e) {
            e.currentTarget.protocol === location.protocol && e.currentTarget.host === location.host || (c.content = "origin", setTimeout(function() {
                c.content = "default"
            }, 100))
        }), xing.browser.TOUCH && (n(e).on(":pointerup", d, function(e) {
            var t = n(e.currentTarget);
            return "mouseup" === e.type || t.is("#nav-main ul a, #nav-main .home-xing-logo") || t.closest(f).hasClass("focussed") ? xing.redirect(e.currentTarget.href) : o(t), !1
        }), n(e).on("click", d, function() {
            event.preventDefault()
        })), xing.on("xing.tab_focus", function(e, t) {
            o(t.target)
        });
        var h = document.documentElement;
        xing.browser.TOUCH && (h.className += " html-touch", xing.utils.Behaviors.add({
            "[data-tooltip]": function(e) {
                e.removeAttr("data-tooltip")
            }
        }));
        var p = document.createElement("div");
        p.style.cssText = "pointer-events:auto", "auto" !== p.style.pointerEvents && (h.className += " no-pointer-events"), xing.on("ajax.prefilter", function(e, t) {
            n.ajaxPrefilter(t)
        }), n(t).on("pageshow", function() {
            n(".disable-after-submit").prop("disabled", !1)
        })
    }(jQuery, document, window), (xing = xing || {}).controls = xing.controls || {}, xing.controls.Layer = function(e) {
        "use strict";

        function o(e, t) {
            return t.html = t.html || t.innerHTML, t.event = t.event || t.eventType, t.delay && !$.isPlainObject(t.delay) && (t.delay = {
                open: t.delay,
                close: t.delay
            }), t.onOpen && e.on(t.url ? "load" : "open", t.onOpen), t.onOpenFinish && e.on("opened", t.onOpenFinish), t.onClose && e.on("close", t.onClose), t.onCloseFinish && e.on("closed", t.onCloseFinish), t.onCloseButtonClicked && e.on("closeClick", t.onCloseButtonClicked), "string" == typeof t.position && (t.position = {
                location: t.position,
                force: t.forcePosition
            }), t
        }
        var r = $.noop,
            a = {},
            t = e.window,
            s = {
                layer: "#info-layer",
                opened: !1,
                position: {
                    location: "below"
                },
                delay: {
                    open: 0,
                    close: 0
                }
            },
            c = '<div id="info-layer" class="infolayer" style="display:none"><a href="#" class="layer-close spacer" title="#{close}"><img class="icn icn-ext-ctr-close" src="#{transparent}" alt="#{close}" width="15" height="15"></a><div class="layer-content"></div></div>';
        return Class.create({
            initialize: function(e, t) {
                var n, i = xing.globals && xing.globals.commonTexts || {};
                this.anchor = $(e).first(), this.options = $.extend({}, s, o(this, t || {})), this.options.event || this.options.opened || (this.options.event = "click"), "hover" === this.options.event && (this.options.delay.close = $.isNumeric(this.options.delay.close) ? this.options.delay.close : .5), ["_anchorStart", "_anchorStop", "_layerStart", "_layerStop"].forEach(function(e) {
                    var t = this[e][this.options.event] || this[e].any;
                    this[e.slice(1)] = t ? t.bind(this) : r
                }, this), (n = this.options.layer) !== s.layer || $(n).length || $("body").append($.interpolate(c, xing.mixIn(i, {
                    transparent: xing.getAssetPath("transparent_r1")
                }))), this.layer = $(this.options.layer).first(), this.toggle = this.toggle.bind(this), this.position = this.position.bind(this), this.options.delay.open ? (this._open = this.open.bind(this), this.open = this._delayedOpen.bind(this)) : this.open = this.open.bind(this), this.options.delay.close ? (this._close = this.close.bind(this), this.close = this._delayedClose.bind(this)) : this.close = this.close.bind(this), this._afterOpen = this._afterOpen.bind(this), this._afterClose = this._afterClose.bind(this), this._onBodyClickOrEsc = this._onBodyClickOrEsc.bind(this), this._render = this._render.bind(this), this.options.opened && this.open(), this.start(), xing.on("xing_layer.close_layer", this.close)
            },
            toggle: function(e) {
                return e.preventDefault(), this[this.isOpen ? "close" : "open"]()
            },
            open: function() {
                var e, t = this.isOpen;
                this.layer = $(this.layer), "string" == typeof(e = this.layer.data("originalClass")) && this.layer.attr("class", e), this.layer.data("originalClass", this.layer.attr("class") || ""), this.layer.on("click", ".layer-close", this._onCloseClick = this._onCloseClick.bind(this)).on("click", this._onLayerClick = this._onLayerClick.bind(this)), this.content = this.layer.find(".layer-content"), this.layer.stop(!0, !0);
                var n = this.layer.data("instance");
                return n && n !== this && n.options.cache && (a[n.options.url] = this.content.html()), this._render(), this.isOpen = !0, this.trigger("open", this), t || this._showLayer(), this
            },
            _showLayer: function() {
                this.loading || (this.layer.fadeIn(80, this._afterOpen).show(), this.position(), this.layerStart(), this.options.position && $(t).on("resize", this.position), this.options.event && "click" !== this.options.event || setTimeout(function() {
                    this.layer.on("bodyClick.force.layer_global esc.layer_global", this._onBodyClickOrEsc)
                }.bind(this), 0), this.layer.data("current_layer_instance", this))
            },
            _delayedOpen: function() {
                e.clearTimeout(this._closeTimer), this._closeTimer = null, this._openTimer || (this._openTimer = e.setTimeout(this._open, 1e3 * this.options.delay.open))
            },
            close: function() {
                return this.isOpen && (this.layer.find('input[type="text"]').blur(), this.layer.fadeOut(80, this._afterClose), this.isOpen = !1, this.layerStop(), this.options.position && $(t).off("resize", this.position), this.layer.off(".layer_global"), this.layer.removeData("current_layer_instance"), this.trigger("close", this)), this
            },
            _delayedClose: function() {
                e.clearTimeout(this._openTimer), this._openTimer = null, this._closeTimer || (this._closeTimer = e.setTimeout(this._close, 1e3 * this.options.delay.close))
            },
            _afterOpen: function() {
                this.trigger("opened", this)
            },
            _afterClose: function() {
                this.layer.hide(), this.options.className && this.layer.removeClass(this.options.className), this.trigger("closed", this)
            },
            _render: function() {
                var e, t = this,
                    n = this.options.url,
                    i = this.options.html || a[n];
                return this.position(), this.options.className && this.layer.addClass(this.options.className), (e = this.layer.data("instance")) !== this && (e && (e.ajaxDeferred && e.ajaxDeferred.abort(), this.content.empty()), this.layer.data("instance", this), n && !i ? (this.loading = !0, this.layer.addClass("loading-layer"), this.content.addClass("loading"), this.ajaxDeferred = $.ajax(n, {}), this.ajaxDeferred.then(function(e) {
                    t.content.removeClass("loading"), t.layer.removeClass("loading-layer"), t.content.html(e), t.loading = !1, t._showLayer(), t.options.cache && (a[t.options.url] = e), t.trigger("load", t)
                })) : i && this.content.html(i)), this.trigger("load", t), this
            },
            start: function() {
                return this.anchorStart(), this
            },
            stop: function() {
                return this.anchorStop(), this.close(), this
            },
            _anchorStart: {
                click: function() {
                    var e = "mouseup.layer";
                    xing.browser.TOUCH && (e += " touchend.layer"), this.anchor.on(e, this.toggle).on("click.layer", function(e) {
                        e.preventDefault()
                    })
                },
                focus: function() {
                    this.anchor.on("focusin.layer", this.open).on("focusout.layer", this.close)
                },
                hover: function() {
                    this.anchor.on("mouseenter.layer", this.open).on("mouseleave.layer", this.close)
                }
            },
            _anchorStop: {
                any: function() {
                    this.anchor.off(".layer")
                }
            },
            _layerStart: {
                hover: function() {
                    this.layer.on("mouseenter.layer", this.open).on("mouseleave.layer", this.close)
                }
            },
            _layerStop: {
                hover: function() {
                    this.layer.off(".layer")
                }
            },
            position: function() {
                var e = this.options.position,
                    o = this.layer,
                    t = e && e.subElement,
                    r = t ? this.anchor.find(t) : this.anchor;
                e && (e.complete = function() {
                    var e, t, n = "info-layer" === o.attr("id"),
                        i = $("#maincontent");
                    n && i[0] && $.contains(i[0], r[0]) && (e = parseInt(o.css("left"), 10), r.closest("#optcol").length && (t = $("#optcol").offset().left - 2 - e), i.length && e < (i = i.offset().left) && (t = i - e + 5)), t && o.css({
                        marginLeft: Math.floor(t)
                    })
                }, xing.trigger("xing.z_index", o), xing.trigger("xing.positioning", {
                    target: o,
                    src: r,
                    options: e
                }))
            },
            _onLayerClick: function(e) {
                this.options.closeOnLayerClick && this.isOpen && (this.close(), e.stopPropagation())
            },
            _onCloseClick: function(e) {
                this._close ? this._close() : this.close(), this.trigger("closeClick", this), e.stopPropagation(), e.preventDefault()
            },
            _onBodyClickOrEsc: function(e) {
                this.isOpen && this.layer.data("instance") === this && (this._close ? this._close() : this.close(), e.stopImmediatePropagation())
            }
        })
    }(this), Class.mixIn(xing.controls.Layer, xing.traits.EventEmitterTrait), xing.controls.DelayLayer = xing.controls.Layer, xing.controls.HoverCard = function(i, c) {
        function o() {
            $("#hovercard").length || ($("body").append(e), i = null), i = i || $("#hovercard")
        }

        function r(e) {
            e.close(), -1, c = l = null
        }

        function a(e, t) {
            o();
            var n = e.attr("data-hc-instance") || u;
            if (d[n] || new xing.controls.HoverCard(e), t = d[n]) return t
        }

        function s(e, t, n) {
            if (e)
                if (e.layer[0] || (e.layer = i), e.layer, !c && t) l = n, e.open(), c = !0;
                else if (c && !t) {
                if (e.layer[0] !== i[0] && e.layer.find("input, textarea").val()) return;
                r(e)
            }
        }
        var l, u = 0,
            d = [],
            e = '<div id="hovercard" class="hovercard" style="display:none"><div class="layer-content"></div></div>';
        return $(document).on("mouseenter mouseleave", "#hovercard, .hovercard-custom, [data-hover-card]", function(e) {
            var t = $(e.currentTarget),
                n = "mouseenter" === e.type;
            s(t.data("current_layer_instance") || a(t), n, t)
        }), xing.on("xing_layer.close_layer", function() {
            c = null
        }), Class.create({
            initialize: function(e) {
                var t = e.attr("data-hover-card") || "",
                    n = $.toQuery(t),
                    i = u,
                    o = .5,
                    r = "#hovercard",
                    a = {
                        location: {
                            primary: "below",
                            secondary: "left"
                        },
                        margin: 6,
                        onFailure: function() {
                            d[i].close()
                        }
                    },
                    s = "/profile";
                t && (n.url && (s = n.url, delete n.url), n.position && (a = "false" === n.position ? null : $.toQuery(n.position), delete n.position), n.layer && (r = n.layer, delete n.layer), n.delay && (o = parseFloat(n.delay), delete n.delay), e.attr("data-hc-instance", i).removeAttr("title").find("img").removeAttr("title"), d[i] = this.instance = new xing.controls.Layer(e, {
                    event: e.data("event") || "custom",
                    delay: {
                        open: o,
                        close: o
                    },
                    url: s + "?" + $.param(n),
                    cache: !0,
                    layer: r,
                    position: a,
                    onCloseFinish: function() {
                        c || (l = null)
                    },
                    onOpen: function() {
                        xing.trigger("xing_layer.open_layer", l)
                    },
                    onOpenFinish: function() {
                        var e = this.layer;
                        e.find("[data-hover-card]").removeAttr("data-hover-card"), xing.utils.Behaviors.update(e), e.on("click", ".actions a", function() {
                            d[i].close()
                        })
                    }
                }), u++)
            }
        })
    }(), xing.controls.TutorialBubble = function(e, t, n, i) {
        return i = $.extend({
            onBubbleClose: $.noop
        }, i), new xing.controls.Layer(e, $.extend({
            opened: !0,
            position: {
                location: {
                    primary: i.position || "below"
                },
                force: !0
            },
            className: "help-tip arrow-" + ("right" === i.position ? "left" : "up"),
            html: n,
            closeOnLayerClick: !0,
            onCloseButtonClicked: function() {
                $.ajax("/app/user?op=hide_bubble_hint", {
                    type: "POST",
                    data: {
                        bubble: t
                    }
                }), i.onBubbleClose()
            }
        }, i))
    }, xing.utils.Behaviors.add({
        "a[data-layer]": function(e) {
            new xing.controls.Layer(e, {
                layer: e.attr("data-layer")
            })
        },
        "a[data-layer-src]": function(e) {
            var t = e.attr("data-layer-src");
            new xing.controls.Layer(e, {
                url: "href" === t ? e.attr("href") : t,
                closeOnLayerClick: !0
            })
        },
        "a[data-simplelayer]": function(e) {
            var t, n = e.attr("data-layer-options"),
                i = e.attr("data-simplelayer");
            "next" !== i && "prev" !== i || (t = e[i]()), new xing.controls.Layer(e, $.extend({
                layer: t || i,
                position: !1
            }, n && $.parseJSON(n))).observe("open", function(e, t) {
                t.anchor.addClass("active")
            }).observe("close", function(e, t) {
                t.anchor.removeClass("active").blur()
            })
        },
        "a[data-lightbox]:click": function(e, t) {
            new xing.controls.Lightbox(xing.mixIn({
                src: e.attr("href"),
                data: e.attr("data-lightbox"),
                event: t
            }, $.parseJSON(e.attr("data-lightbox-options"))))
        },
        ":scroll>>scroll": function() {
            xing.trigger("foundation.dom_interaction")
        },
        '[typeof="xing:component.communication.infolayer"][data-content]': function(t) {
            function e(e) {
                xing.trigger("infolayer", {
                    trigger: t,
                    type: e.type
                })
            }
            var n = new xing.controls.Layer(t, {
                event: t.attr("data-event"),
                layer: t.attr("data-content"),
                position: {
                    location: "below-center",
                    margin: 6
                },
                closeOnLayerClick: !0
            });
            n.on("open", e), n.on("close", e)
        }
    }),
    function() {
        "use strict";

        function e(e) {
            var t, n = $(e),
                i = n.attr("data-options");
            return i ? t = JSON.parse(i) : (t = {}, o.forEach(function(e) {
                t[e] = n.attr("data-" + e)
            })), t
        }
        var o = ["channel", "latitude", "longitude"];
        xing.browser.msie || xing.utils.Behaviors.add({
            ".xing-map": function(t) {
                var n = e(t);
                xing.require("js/map.js").afterLoad(function() {
                    var e = new xing.utils.Map(t, n);
                    t.data("map", e)
                })
            }
        })
    }(), (xing = xing || {}).controls = xing.controls || {}, xing.controls.Lightbox = function() {
        function i(e) {
            e && e.preventDefault && e.preventDefault()
        }

        function t(e) {
            e && e.stopPropagation && (e.preventDefault(), e.stopPropagation())
        }
        var n, e, o, r = {},
            a = ".mandatory",
            s = "initial-value",
            c = {
                open: !0,
                trigger: n,
                src: n,
                content: n,
                method: "GET",
                parameters: {},
                data: {},
                closeOnClickOutside: !0,
                dialog: "#lightbox",
                loadingClassName: "loading",
                whenDomLoaded: !0,
                event: n,
                stack: "lightbox",
                useRender: !0,
                timeout: 0
            },
            l = 0,
            u = $("html"),
            d = '<div class="lightbox-centered"><div id="lightbox" style="display: none;" class="lightbox"><div class="lightbox-handle"></div><div class="lightbox-inner"><a class="lightbox-close foundation-icon-shape-cross-circle">#{close}</a><output></output></div></div></div>',
            f = "Cancel Close Fail Initialized Load Open Submit";
        return xing.on("lightbox", function(e, n) {
            "string" == typeof f && (f = f.split(" "));
            var i = new xing.controls.Lightbox(n);
            f.forEach(function(e) {
                var t = "on" + e;
                n && n[t] && i.on(e.toLowerCase(), n[t])
            })
        }), Class.create({
            initialize: function(e) {
                var t, n = xing.globals && xing.globals.commonTexts || {};
                this.instanceId = ++l, e && e.parameters && (e.data = e.parameters), this.config = $.extend({}, c, e), this.opened = !1, (t = this.config.dialog) !== c.dialog || $(t).length || $("body").append($.interpolate(d, n)), this.open = this.open.bind(this), this.close = this.close.bind(this), this.cancel = this.cancel.bind(this), this._checkInputs = this._checkInputs.bind(this), this._throttleCheckInputs = this._throttleCheckInputs.bind(this), this._handleBeforeSend = this._handleBeforeSend.bind(this), this._handleAlways = this._handleAlways.bind(this), this._handleDone = this._handleDone.bind(this), this._handleFail = this.fireProxy.bind(this, "fail"), this.config.trigger = $(this.config.trigger), this.config.trigger.length ? this.config.trigger.click(this.open) : this.config.open && (this.config.whenDomLoaded && !document.loaded ? (xing.ready(this.open), i(this.config.event)) : this.open(this.config.event)), xing.on("lightbox.rePosition", this.position.bind(this))
            },
            open: function(e) {
                return r[this.config.stack] && r[this.config.stack].close(), this.dialog = this.dialog || $(this.config.dialog), this.container = this.container || this.dialog.find("output"), this.dialog.off().find("output").off(), this.dialog.show(), this.render(this.config), this._observe(), (r[this.config.stack] = this).opened = !0, this.fireProxy("open"), this.dialog.find(".scroll-list-container").on("scroll", function() {
                    xing.trigger("foundation.dom_interaction")
                }), i(e), this
            },
            close: function(e) {
                return r[this.config.stack] !== this ? n : (this.dialog.hide(), this.fireProxy("close"), this._unobserve(), this.render($.extend({}, this.config, {
                    content: ""
                })), r[this.config.stack] = n, xing.trigger("advertising.reload"), this.opened = !1, t(e), this.overlayOpen && (u.find("body").removeOverlay(), this.overlayOpen = !1), e && "esc" === e.type && e.stopImmediatePropagation(), this)
            },
            cancel: function(e) {
                return this.fireProxy("cancel"), this.close(e), this
            },
            position: function() {
                this.dialog = this.dialog || $("#lightbox");
                var e, t = $(window).scrollLeft(),
                    n = $(window).scrollTop(),
                    i = Math.max(n, n + ($(window).height() - this.dialog.innerHeight()) / 2);
                return this.dialog.parent().is(".lightbox-centered") ? xing.trigger("xing.z_index", this.dialog.parent().css({
                    top: Math.max(0, i)
                })) : (e = t + ($(window).width() - this.dialog.outerWidth()) / 2, xing.trigger("xing.z_index", this.dialog.css({
                    left: Math.max(0, e),
                    top: Math.max(0, i)
                }))), this
            },
            render: function(e) {
                if (!e.useRender) return this.position(), n;
                if (e.content !== n) this.container.html(e.content), e.content.length && (this.position(), this._initInputs());
                else {
                    var t = e.src || e.trigger.attr("href");
                    t && (this.container.html(), this.contentLoader = new xing.utils.ContentLoader(t, this.container, {
                        type: e.method,
                        data: e.data,
                        timeout: e.timeout,
                        beforeSend: this._handleBeforeSend,
                        always: this._handleAlways,
                        done: this._handleDone,
                        fail: this._handleFail,
                        errorHandler: !0
                    }))
                }
                return this
            },
            fireProxy: function(e, t) {
                this.trigger(e, t), xing.trigger("lightbox." + e, t)
            },
            blockOutsideClick: function() {
                this.overlayOpen || (u.find("body").overlay(), this.dialog.parent().is(".lightbox-centered") ? xing.trigger("xing.z_index", this.dialog.parent()) : xing.trigger("xing.z_index", this.dialog), this.overlayOpen = !0)
            },
            allowOutsideClick: function() {
                this.overlayOpen && (u.find("body").removeOverlay(), this.overlayOpen = !1)
            },
            _handleBeforeSend: function() {
                this.container.addClass(this.config.loadingClassName), this.position()
            },
            _handleDone: function() {
                this.fireProxy("load"), this._initInputs()
            },
            _handleAlways: function() {
                this.container.removeClass(this.config.loadingClassName), this.position()
            },
            _initInputs: function() {
                this.container.find(a).each(function() {
                    var e = $(this);
                    e.data(s, e.val())
                }), this.fireProxy("initialized")
            },
            _checkInputs: function() {
                this.container.find(a).get().some(function(e) {
                    return (e = $(e)).data(s) !== e.val()
                }) ? this.blockOutsideClick() : this.allowOutsideClick()
            },
            _throttleCheckInputs: function() {
                clearTimeout(e), e = setTimeout(this._checkInputs, 300)
            },
            _observe: function() {
                var e = this.close.wrap(function(e, t) {
                    this.overlayOpen || e(t)
                }.bind(this));
                this.dialog.on("click.lightbox", ".lightbox-close", this.close), this.dialog.on("click.lightbox", ".lightbox-cancel", this.cancel), this.dialog.on("esc.lightbox", this.close), this.dialog.on("keyup.lightbox", a, this._throttleCheckInputs), xing.on("lightbox.close_external", this.close), this.container.on("submit.lightbox", "form", this.fireProxy.bind(this, "submit")), this.config.closeOnClickOutside && (o = setTimeout(function() {
                    this.dialog.on("bodyClick.force", e), this.track()
                }.bind(this), 0))
            },
            track: function() {
                xing.trigger("tracking.load_ivw")
            },
            _unobserve: function() {
                clearTimeout(o), this.container.off(".lightbox"), this.dialog.off(".lightbox").off("bodyClick"), xing.off("lightbox.close_external")
            }
        })
    }(), Class.mixIn(xing.controls.Lightbox, xing.traits.EventEmitterTrait), (xing = xing || {}).controls = xing.controls || {}, xing.controls.Confirm = function(e) {
        var o, i, r = "#confirm-dialog\\:#{element}",
            a = "default_text",
            s = ".do-confirm",
            t = ".do-cancel",
            c = {
                okLabel: "ok",
                cancelLabel: "cancel",
                title: "title",
                text: "text"
            },
            l = {
                onConfirm: $.noop,
                onCancel: $.noop,
                okLabel: e,
                cancelLabel: e,
                title: e,
                text: e,
                classes: "lightbox lightbox-s",
                stack: "confirm-dialog",
                dialog: "#confirm-dialog",
                defaultFocus: "confirm",
                useRender: !1,
                preset: !1
            },
            u = '<div class="lightbox-centered"><div id="confirm-dialog" style="display: none;"><div class="lightbox-handle"></div><div class="lightbox-inner"><a class="lightbox-close foundation-icon-shape-cross-circle">#{close}</a><h3 id="confirm-dialog:title" class="title"></h3><div id="confirm-dialog:text" class="text"></div><div class="txr clfx mt15"><button type="button" id="confirm-dialog:ok" class="do-confirm element-form-button-solid-lime" data-qa="a8a26883">#{continue}</button><a href="#" id="confirm-dialog:cancel" class="do-cancel cancel-link">#{cancel}</a></div></div></div></div>';
        return xing.on("confirm", function(e, t) {
            var n = (t = t || {}).trigger;
            i ? (xing.trigger("confirm.close"), i.on("cancel", t.onCancel), i.on("confirm", t.onConfirm), i.config.classes = t.classes || l.classes, i.config.defaultFocus = t.defaultFocus || l.defaultFocus, i.config.preset = t.preset, i.config.trigger = n, i.dialog = i.container = null, i.open()) : (n && (t.trigger = null), (i = new xing.controls.Confirm(t)).config.trigger = n)
        }), xing.on("confirm.close", function() {
            i && (i.off("cancel confirm"), i.close())
        }), Class.create(xing.controls.Lightbox, {
            initialize: function($super, e) {
                var t, n = xing.globals && xing.globals.commonTexts || {};
                o || (o = xing.globals && xing.globals.confirmPresets), t = e && e.dialog, (t = e && e.dialog || l.dialog) !== l.dialog || $(t).length || $("body").append($.interpolate(u, n)), $super($.extend({}, l, e)), this.on("cancel", this.config.onCancel), this.on("confirm", this.config.onConfirm), this._setCustomTexts()
            },
            render: function($super, e) {
                this.dialog.attr("class", this.config.classes), $super(e), this.dialog.is(":visible") && this.dialog.find(".do-" + e.defaultFocus).focus()
            },
            open: function($super, e) {
                this._setCustomTexts(), $super(e)
            },
            _setCustomTexts: function() {
                var e = this.config.preset,
                    i = e ? o[e] : this.config;
                Object.keys(c).forEach(function(e) {
                    var t = $($.interpolate(r, {
                            element: c[e]
                        })),
                        n = t.data(a);
                    i[e] ? (null == n && t.data(a, t.html()), t.html(i[e])) : null != n && t.html(n)
                })
            },
            _observe: function($super) {
                $super(), this.dialog.on("click.confirm", t, this.cancel.bind(this)).on("click.confirm", s, this.confirm.bind(this))
            },
            close: function($super, e) {
                var t = e && e.target,
                    n = $(t).closest(s).length;
                !e || !n || e.which && e.which === $.keyCodes.KEY_ESC ? (this.trigger("cancel"), $super(e)) : this.confirm(e, $super), this.dialog.off(".confirm")
            },
            cancel: function(e) {
                this.close(e)
            },
            confirm: function(e) {
                var t, n = this.config.trigger;
                this.trigger("confirm"), xing.controls.Lightbox.prototype.close.call(this, e), n && (t = n.prop("nodeName")) && ("A" === t ? this.changeHref(n.attr("href")) : "BUTTON" !== t && "INPUT" !== t || n.closest("form").submit()), this.dialog.off(".confirm"), e.preventDefault()
            },
            changeHref: function(e) {
                location.href = e
            },
            track: $.noop
        })
    }(), (xing = xing || {}).controls = xing.controls || {}, xing.controls.ExtendedLightbox = function() {
        var t = "input-error",
            e = "data-error",
            n = "data-field",
            i = ".error-container",
            o = ".mandatory, #contact-chooser-selections",
            r = "#message-sent-confirm, .confirm-message",
            a = "#ad-container-lightbox",
            s = ".submit-indicator",
            c = "[" + e + "='#{field}']",
            l = "[" + e + "]",
            u = "[" + n + "='#{field}'],[name='#{field}']",
            d = {
                form: null,
                hideAfterSuccess: !0,
                afterSuccessUpdate: {}
            };
        return Class.create(xing.controls.Lightbox, {
            initialize: function($super, e) {
                $super(e = $.extend({}, d, e))
            },
            _initForm: function() {
                this.form = $(this.config.form), this.form.length && (this._errorContainer = this.form.find(i), this._confirmationMessage = this.form.next(r), this.form.submit(function(e) {
                    this.container.find(s).show(), setTimeout(this._submit.bind(this), 10), e.preventDefault()
                }.bind(this)))
            },
            close: function($super, e) {
                xing.globals.lightboxAutocompleter && xing.globals.lightboxAutocompleter.popup.remove(), $super(e)
            },
            _handleDone: function($super, e) {
                $super(e), this._initForm()
            },
            _submit: function() {
                var e, t = this.form.find("button, input, select, textarea").filter(":not(:disabled)");
                this.form.request({
                    dataType: "json",
                    always: function() {
                        this.container.find(s).hide(), "bookmark_lightbox" === this.config.data.op && xing.trigger("tracking.track_event", {
                            trackingName: "Activity_Stream_clksavbmk",
                            extendedParams: {
                                events: "event87",
                                linkTrackVars: "events",
                                linkTrackEvents: "event87"
                            }
                        }), e = !0, t.prop("disabled", !1)
                    }.bind(this),
                    done: this._handleResponse.bind(this)
                }), setTimeout(function() {
                    e || t.prop("disabled", !0)
                }, 50)
            },
            _handleResponse: function(e) {
                this._hideValidationErrors();
                var t, o, n = e.error_message,
                    i = e.error_fields,
                    r = e.html;
                if (this.config.afterSuccessUpdate.container && (this._afterSuccessTarget = this._confirmationMessage.find(this.config.afterSuccessUpdate.container), o = this._afterSuccessTarget.attr("data-src"), this.container.on("click", this.config.afterSuccessUpdate.links, function(e) {
                        var t = $(e.currentTarget),
                            n = t.attr("rel"),
                            i = $.toQuery(t.attr("data-link-params"));
                        n && this._getMoreData(o, $.extend({
                            offset: n
                        }, i)), e.preventDefault()
                    }.bind(this)), this._getMoreData(o, {
                        b_sid: this.config.data.b_sid,
                        from: this.type
                    })), "string" == typeof r) return this.container.html(r), void this._initForm();
                e.success ? this._afterSent(e) : (this._resetErrorState(), i ? Object.keys(i).forEach(function(e) {
                    this._showValidationErrors(e), (t = this.form.find($.interpolate(c, {
                        field: e
                    }))) && i[e] && t.show().html(i[e])
                }.bind(this)) : this._showValidationErrors(), n && (this._errorContainer.is(".app-message") ? this._errorMessage = this._errorContainer.show().find(".app-message-body").html(n).children() : this._errorMessage = this._errorContainer.html(n).show().children()))
            },
            _resetErrorState: function() {
                this.form.find(l + ", " + i).hide(), this.form.find("." + t).removeClass(t)
            },
            _showValidationErrors: function(e) {
                this.form.find(e ? $.interpolate(u, {
                    field: e
                }) : o).addClass(t)
            },
            _hideValidationErrors: function() {
                this.form.find('input[type="text"], textarea').removeClass(t), this._errorMessage && this._errorMessage.remove()
            },
            _afterSent: function() {
                this.trigger("success"), this.form.hide(), xing.trigger("lightbox.rePosition"), this._confirmationMessage.show(), this._afterFinish()
            },
            _afterFinish: function() {
                this.config.hideAfterSuccess && (this._confirmationMessage.find(a).length || setTimeout(this.close.bind(this), 2e3))
            },
            _getMoreData: function(e, t) {
                var n = this._afterSuccessTarget;
                new xing.utils.ContentLoader(e, n, {
                    always: function() {
                        n.removeClass("loading")
                    },
                    data: t
                })
            }
        })
    }(), xing.controls.AjaxLightbox = Class.create(xing.controls.Lightbox, {
        initialize: function($super, e) {
            $super(e), e.src ? this.on("load", this._onLoad.bind(this)) : this._onLoad()
        },
        _onLoad: function() {
            this.config.ajax && (this.form = this.dialog.find("form"), this.on("submit", this._submit.bind(this)))
        },
        _submit: function(e, t) {
            this.form.request({
                dataType: "json",
                done: this._handleResponse.bind(this)
            }), t.preventDefault(), t.stopPropagation()
        },
        _handleResponse: function(e) {
            this.close(), this.config.onSuccess && this.config.onSuccess(e)
        }
    }), xing.controls.DeleteContactLightbox = function() {
        var t = '<div class="lightbox-m mt20 app-message app-message-error"><div class="app-message-body">#{error_message}</div></div>';
        return Class.create(xing.controls.AjaxLightbox, {
            initialize: function($super, e) {
                $super(e = $.extend({
                    ajax: !0,
                    src: "/contacts/contacts/" + e.id + "/delete_lightbox",
                    data: {
                        shared_authenticity_token: e.shared_authenticity_token
                    }
                }, e))
            },
            _handleResponse: function($super, e) {
                e.error_message ? this.dialog.find("output").empty().append($.interpolate(t, {
                    error_message: e.error_message
                })) : $super(e)
            }
        })
    }(), xing.controls.MessageLightbox = function() {
        var i = {
            src: "/messages/conversations/new",
            form: "#message-form"
        };
        return Class.create(xing.controls.ExtendedLightbox, {
            initialize: function($super, e, t) {
                var n = {
                    pageName: "message/message_lightbox",
                    channel: "my-network"
                };
                e = $.extend({}, i, e), this.anchor = t, $super(e), this.config.data.sc_o && (n.prop56 = this.config.data.sc_o, n.eVar56 = "D=c56"), xing.trigger("tracking.track_page_view", n)
            },
            _afterSent: function($super) {
                var e = "message/message_sent_lightbox_[%pageName%]";
                xing.trigger("tracking.track_event", {
                    trackingName: "messagelightbox_sent",
                    extendedParams: {
                        eVar31: e,
                        products: ";messagelightbox_sent;1;;;evar31=" + e,
                        linkTrackVars: "events,products,eVar31",
                        linkTrackEvents: "event53",
                        events: "event53"
                    }
                }), $super()
            },
            render: function($super, e) {
                $super(e)
            },
            _initForm: function($super) {
                $super(), xing.on("message_lightbox.close", function(e, t) {
                    var n = this.anchor;
                    this.container.find("form")[0] === t[0] && (setTimeout(function() {
                        xing.trigger("tracking.recommendation", n)
                    }, 0), this.close())
                }.bind(this))
            },
            close: function($super, e) {
                xing.off("message_lightbox.close"), $super(e)
            }
        })
    }(), xing.controls.ShareLightbox = function() {
        function i(n) {
            xing.on("lightbox.display_shared_object", function(e, t) {
                $('<div class="preview">').html(t).insertBefore(n.config.form)
            })
        }
        var o, n = {
            src: "/app/message?op=message_lightbox",
            form: "#message-form"
        };
        return xing.on("share", function(e, t) {
            var n = (t = t || {}).trigger;
            o ? (xing.trigger("share.close"), o.anchor = n, o.dialog = o.container = null, xing.mixIn(o.config, t), i(o), o.open()) : (n && (t.trigger = null), o = new xing.controls.ShareLightbox(t, n))
        }), xing.on("share.close", function() {
            o && (xing.off("lightbox.display_shared_object"), o.close())
        }), Class.create(xing.controls.ExtendedLightbox, {
            initialize: function($super, e, t) {
                e = $.extend({}, n, e), this.anchor = t, $super(e), i(this)
            },
            open: function($super, e) {
                $super(e), this.config.data && this.config.data.external_tracking ? xing.trigger("share_lightbox.externalTrackingOpen") : this.fireTracking()
            },
            close: function($super, e) {
                xing.off("lightbox.display_shared_object"), $super(e)
            },
            _handleDone: function($super, e) {
                $super(e);
                var n = this.form;
                n.on("click", "a[data-op-value]", function(e) {
                    var t = $(e.currentTarget);
                    n.find("input[name=op]").val(t.attr("data-op-value")), e.preventDefault()
                })
            },
            _handleResponse: function($super, e) {
                var t = this.anchor,
                    n = e.object_type,
                    i = e.success,
                    o = e.twitter_error,
                    r = e.shared_to,
                    a = e.with_message,
                    s = e.new_chat_created,
                    c = e.chat_type;
                o && this._confirmationMessage.append('<div class="app-message app-message-error"><div class="app-message-body">' + o + "</div></div>"), i && (xing.trigger("recommend_lightbox.success", {
                    sharedTo: r
                }), setTimeout(function() {
                    xing.trigger("tracking.recommendation", t)
                }, 0), this.dialog.find(".preview").remove()), r && (this.config.data && this.config.data.external_tracking ? xing.trigger("share_lightbox.externalTrackingDone", r, n, a) : this.fireTracking(r, n, a, s, c)), $super(e)
            },
            fireTracking: function(e, t, n, i, o) {
                var r, a, s, c = this.anchor,
                    l = "Streamshare",
                    u = "event";
                if ("groups" === e) n ? (a = "189", s = "da567_groupshare_with_comment") : (a = "188", s = "da567_groupshare_without_comment"), r = {
                    trackingName: s,
                    extendedParams: {
                        events: u + a,
                        linkTrackVars: u + "s,products",
                        linkTrackEvents: u + a,
                        products: ";da-567_grp_web;1"
                    }
                }, xing.trigger("tracking.track_event", r);
                else if (c && c.closest("#news-feed-home")[0]) {
                    $(this.anchor)[0];
                    "pvtmsg" === e ? r = {
                        trackingName: l + "_pvtmsgsendrcmd",
                        extendedParams: {
                            events: u + "86",
                            linkTrackVars: u + "s",
                            linkTrackEvents: u + "86"
                        }
                    } : e ? (r = {
                        trackingName: l + "_sndrcmd",
                        extendedParams: {
                            events: u + "74",
                            linkTrackVars: u + "s",
                            linkTrackEvents: u + "74"
                        }
                    }, t && xing.mixIn(r.extendedParams, {
                        linkTrackVars: u + "s,products",
                        products: ";streamshare_confirmation;1;;;evar31=streamshare_lightbox_user/home_b6085_" + t
                    })) : r = {
                        trackingName: l + "_opnrcmd",
                        extendedParams: {
                            events: u + "73",
                            linkTrackVars: "eVar56," + u + "s,prop56",
                            linkTrackEvents: u + "73",
                            prop56: "as_xhmasctsrecmd",
                            eVar56: "D=c56"
                        }
                    }, xing.trigger("tracking.track_event", r)
                } else {
                    var d = {
                        pageName: "streamshare",
                        channel: "my-network",
                        products: e
                    };
                    if (e ? (d = $.extend(d, {
                            events: u + "74"
                        })).pageName += " confirmation" : (d = $.extend(d, {
                            events: u + "73"
                        })).pageName += " lightbox", this.config.data.partner) {
                        var f = "_recommend_message";
                        e ? ";stream_share_x;1" === e && (f = "_recommend_stream") : f = "_lightbox_open", xing.mixIn(d, {
                            prop64: this.config.data.partner + f,
                            eVar64: "D=c64"
                        })
                    }
                    xing.trigger("tracking.track_page_view", d)
                }
                if ("pvtmsg" === e && window.ttt && window.ttt.event) {
                    var h = "messenger_text";
                    h += 0 === i ? "_reply" : "_initial", h += "one_on_one" === o ? "_1on1" : "_group", window.ttt.event("EventMessengerMessageSent", {
                        EventMessengerMessageSent: 1,
                        PropContextDimension1: h + "_share"
                    })
                }
            }
        })
    }(), xing.controls.DipaLightbox = Class.create(xing.controls.ExtendedLightbox, {
        _initInputs: function() {
            var e = this.container.find("img[data-dipa-image]"),
                t = this.container.find("[data-dipa-lightbox]"),
                n = this.container.find(".dipa-layer");
            e.length && t.length ? (e.on("load", function() {
                n.show(), n.add(t).on("click", this.hideDipa.bind(this, !0)), this.position()
            }.bind(this)), e.on("error", this.close.bind(this)), e.attr("src", e.attr("data-dipa-image"))) : this.close()
        },
        hideDipa: function(e) {
            var t = this.container.find("div[data-dipa-lightbox]");
            if (t.length)
                if ("appboy" == t.attr("data-dipa-lightbox")) {
                    var n = document.getElementById("apollo-teaser-iframe").contentWindow;
                    e ? (n.postMessage('{"type": "apollo.layerClick"}', window.location.href), location.href = t.attr("data-dipa-link")) : n.postMessage('{"type": "apollo.layerClose"}', window.location.href)
                } else $.ajax("/app/startpage", {
                    type: "POST",
                    data: {
                        op: "close_dipa_lightbox",
                        sid: t.attr("data-dipa-lightbox")
                    }
                }).always(function() {
                    e && (location.href = t.attr("data-dipa-link"))
                })
        },
        close: function($super, e) {
            this.hideDipa(), $super(e)
        }
    }), xing.controls.ConfirmCloseLightbox = Class.create(xing.controls.Lightbox, {
        initialize: function($super, e) {
            $super(e), this.showDialog = !1, this.textResources = e.textResources, xing.on("lightbox.confirmClose", function(e, t) {
                this.showDialog = t
            }.bind(this))
        },
        close: function($super, e) {
            this.showDialog ? this._confirmClose() : (xing.off("lightbox.confirmClose"), $super(e))
        },
        cancel: function($super, e) {
            this.showDialog = !1, $super(e)
        },
        _confirmClose: function() {
            var e = new xing.controls.Confirm({
                title: this.textResources.title,
                text: this.textResources.text,
                okLabel: this.textResources.okLabel,
                cancelLabel: this.textResources.cancelLabel,
                onConfirm: function() {
                    this.showDialog = !1, this.close()
                }.bind(this)
            });
            this.fireProxy("confirmDialog.open", e), e.on("close", function() {
                this.fireProxy("confirmDialog.close")
            })
        }
    }), (xing = xing || {}).controls = xing.controls || {}, xing.controls.RenderFrame = function(o) {
        function i(e, t) {
            function n() {
                i.append(e), xing.ready(function() {
                    e.attr("src", t.newSrc)
                })
            }
            var i = o(t.cntId);
            t.inViewport ? i.one("inview", n) : n()
        }
        var r = 'javascript:"<html></html>"',
            t = {
                inViewport: !1,
                onLoad: o.noop
            },
            a = [location.protocol + "//" + location.host + "/", "https://xing.kununu.com/", "https://box.xing.com/", "https://www.youtube.com", "https://xrm.xing.com", "https://xrm-preview.xing.com"];
        return Class.create({
            initialize: function(e) {
                e = xing.mixIn({}, t, e), this._generateFrame(e.src, e)
            },
            _generateFrame: function(t, e) {
                var n;
                0 === t.indexOf("http") && a.some(function(e) {
                    return 0 === t.indexOf(e)
                }) && (n = o("<iframe>", {
                    src: r,
                    height: e.height,
                    width: e.width,
                    frameBorder: 0,
                    marginHeight: 0,
                    marginWidth: 0,
                    scrolling: "no",
                    allowTransparency: !0
                }), e.newSrc = t + (-1 === t.indexOf("?") ? "?" : "&") + "_=" + (new Date).getTime(), n.data("config", e).on("load", function() {
                    n.attr("src") !== r && e.onLoad()
                }), i(n, e))
            }
        })
    }(jQuery), xing.on("frame.render", function(e, t) {
        new xing.controls.RenderFrame(t)
    }), (xing = xing || {}).controls = xing.controls || {}, xing.controls.BookmarkUserLightbox = function(e, t) {
        return e = $(e), new xing.controls.AjaxLightbox({
            src: "/app/contact",
            data: {
                op: "addbookmark.widget",
                b_sid: t.b_sid,
                remove_contact: t.remove_contact
            },
            ajax: !0,
            onSuccess: function() {
                e.highlight(), t.container ? e.closest(t.container).fadeOut("fast") : e.fadeOut("fast"), setTimeout(function() {
                    xing.trigger("tracking.recommendation", e), xing.trigger("contact.bookmarked", e)
                }, 0)
            }
        })
    }, (xing = xing || {}).controls = xing.controls || {}, xing.controls.Overlay = function() {
        function t() {
            u = u || $("<div>").addClass(f), c.append(u)
        }

        function n() {
            $(window).on("resize.overlay", r)
        }

        function e() {
            $(window).off(".overlay")
        }

        function i(e) {
            c = c || $(document.body), l = e, t(), e && !e.parent().length && c.append(e), n(), r()
        }

        function o() {
            e(), u && u.remove(), d && d.remove()
        }

        function r() {
            var e = $.extend({
                    width: p.width(),
                    height: p.height()
                }, {
                    top: p.scrollTop(),
                    left: p.scrollLeft()
                }),
                t = Math.max(h.height(), c.height()),
                n = {
                    width: c.width(),
                    height: Math.max(t, e.height)
                };
            if (s || (d && d.css($.extend(n, {
                    zIndex: xing.utils.zIndexProvider()
                })), u.css($.extend(n, {
                    zIndex: xing.utils.zIndexProvider()
                })), s = !0), l) {
                var i = e.left + (e.width - l.prop("offsetWidth")) / 2,
                    o = Math.max(e.top, e.top + (e.height - l.prop("offsetHeight")) / 2);
                l.css({
                    left: Math.max(0, i),
                    top: Math.max(0, o),
                    zIndex: xing.utils.zIndexProvider()
                })
            }
        }

        function a() {
            return u
        }
        var s, c, l, u, d, f = "overlay",
            h = $(document.documentElement),
            p = $(window);
        return {
            start: i,
            stop: o,
            refreshDisplay: r,
            get: a
        }
    }(), (xing = xing || {}).controls = xing.controls || {}, xing.controls.JSelect = function() {
        var n = "selected",
            t = "icn-ext-ctr-arrow-down",
            i = "icn-ext-ctr-arrow-up",
            o = "close:dropdown",
            r = "data-sort-name";
        return Class.create({
            initialize: function(e) {
                var t;
                this.TRIGGER = $(e.link), this.LAYER = $(e.layer), this.OPTIONS = this.LAYER.find("a[" + r + "]"), this.BODY = $(document.body || document.documentElement), this.closeOnChange = !1 !== e.closeOnChange, this.replaceTriggerText = !1 !== e.replaceTriggerText, this._opened = !1, this._onInit = e.onInit || $.noop, this._onChange = e.onChange || $.noop, this._onOpen = e.onOpen || $.noop, this._onClose = e.onClose || $.noop, e.selected ? (this._selected = e.selected, t = this._getSelectedOption(this._selected)) : (t = this.LAYER.find("a." + n), this._selected = t ? t.attr(r) : null), this._selected && (this._highlightOption(), this._replaceTriggerText(t)), this.layerInstance = new xing.controls.Layer(this.TRIGGER, {
                    layer: this.LAYER,
                    position: !e.keepPosition && {
                        location: {
                            primary: "below",
                            secondary: e.alignRight && "right"
                        },
                        force: !0
                    },
                    onOpen: this._onOpenFunc.bind(this),
                    onClose: this._onCloseFunc.bind(this)
                }), this.BODY.on(o, this.layerInstance.close.bind(this.layerInstance)), this._onInit(this.TRIGGER, this.LAYER)
            },
            getSelection: function() {
                return this._selected
            },
            _selectOption: function(e) {
                e.preventDefault(), e.stopPropagation();
                var t = $(e.currentTarget);
                this._selected = t.attr(r), this._highlightOption(), this._replaceTriggerText(t), this._close(), this._onChange(this._selected, this.TRIGGER, t)
            },
            _close: function() {
                this.closeOnChange && this.layerInstance.close()
            },
            _onOpenFunc: function() {
                this.LAYER.on("click", "a", this._selectOption.bind(this)), this._toggleTriggerIcon(), this._onOpen(this.TRIGGER)
            },
            _onCloseFunc: function() {
                this.LAYER.off("click"), this._toggleTriggerIcon(), this._onClose(this.TRIGGER)
            },
            _toggleTriggerIcon: function() {
                var e = this.TRIGGER.find("img." + t + ", img." + i);
                e.length && (e.toggleClass(t), e.toggleClass(i))
            },
            _getSelectedOption: function() {
                var e = this.OPTIONS.find("[" + r + '="' + this._selected + '"]');
                return !!e.length && e
            },
            _highlightOption: function() {
                for (var e, t = 0; t < this.OPTIONS.length; t++)(e = $(this.OPTIONS.get(t))).attr(r) === this._selected ? e.addClass(n) : e.removeClass(n)
            },
            _replaceTriggerText: function(e) {
                if (e = $(e), this.replaceTriggerText && !(e.length < 1)) {
                    var t = this.TRIGGER.find("strong, span");
                    0 === t.length && t.end(), t.html(e.html())
                }
            }
        })
    }(), (xing = xing || {}).controls = xing.controls || {}, xing.globals = xing.globals || {}, xing.globals.parserProfiles = xing.globals.parserProfiles || {}, xing.controls.loadWYSIHTML5 = function() {
        function e(e, t) {
            t = $.extend(!0, {
                parserProfilePath: (xing.globals.baseUrl || "") + "/cgi-bin/user.fpl?op=wysiwyg_profile&profile=#{profile}&type=js&_suffix=.js",
                parserProfile: "full",
                callback: $.noop,
                libConfig: {
                    stylesheets: xing.globals.assets["css/components/form.wysihtml5.css"],
                    toolbar: e.attr("id") + "-toolbar",
                    composerClassName: "wysihtml5-output"
                }
            }, t), i(e), n(e, t)
        }

        function o(e) {
            return "http" !== e.substr(0, 4) && (e = (xing.globals.assets._origin || xing.globals.assets._root) + e), e
        }

        function n(e, t) {
            var n = {},
                i = t.parserProfile,
                o = a[i];
            o || (n["wysihtml_profile_" + i] = t.parserProfilePath.replace("#{profile}", i), xing.globals.assets.add(n)), window.wysihtml5 && window.wysihtml5.Editor && o ? r(e, t, o) : xing.require(["wysihtml_profile_" + i, "css/wysihtml5_toolbar.css", "js/wysihtml5.js"]).afterLoad(function() {
                r(e, t, a[i])
            })
        }

        function r(e, t, n) {
            $.extend(t.libConfig, {
                parserRules: n
            }), $.isArray(t.libConfig.stylesheets) || (t.libConfig.stylesheets = [t.libConfig.stylesheets]), t.libConfig.stylesheets = t.libConfig.stylesheets.concat(xing.globals.assets["css/webfont.css"]).map(o);
            var i = new wysihtml5.Editor(e[0], t.libConfig);
            i.observe("load", function() {
                t.callback(i)
            })
        }

        function i(e) {
            e.val(e.val().replace(t, ""))
        }
        var a = xing.globals.parserProfiles,
            t = /<\!\-\-XHS\:[0-9]+\:FL\:[0-9]+\-\->/g;
        return e
    }(), (xing = xing || {}).controls = xing.controls || {}, xing.controls.SharedDataLightbox = Class.create(xing.controls.Lightbox, {
        initialize: function($super, e, t, n) {
            $super({
                src: "/app/contact?op=showshareddata_ajax",
                data: {
                    b_sid: t,
                    suggest_defaults: n
                }
            }), xing.on("lightbox.close_shared_data", this.close)
        }
    }), (xing = xing || {}).utils = xing.utils || {}, xing.utils.History = function(e) {
        function i(e) {
            var t = (e || "").match(/^(.*?)(\?.*?)?(#.*?)?$/),
                n = t[1] || "",
                i = t[2] || "",
                o = t[3] || "";
            if (-1 !== n.indexOf("=") && (i = n, n = ""), i) try {
                i = $.param($.toQuery(i))
            } catch (r) {
                return ""
            }
            return (n && i ? n + "?" + i : n + i) + o
        }

        function o() {
            a || n();
            var e = location[s];
            return e && l && (e = l(e)), e || ""
        }

        function n() {
            c = "#history:", u = /^[a-z]{1,20}:?\/\//, xing.support.popState && "pushState" in history ? (a = "popstate", s = "href", l = i) : xing.support.hashChange && (a = "hashchange", s = "hash", l = function(e) {
                var t = e.lastIndexOf(c);
                return -1 !== t ? i(e.slice(t + c.length)) : ""
            })
        }

        function r(e, t) {
            var n, i, o = (e || "").indexOf("?"),
                r = u.test(e);
            r && "http" !== e.substr(0, 4) || ("href" === s && (r ? i = e : 0 === o ? i = location.pathname + e : 0 !== e.indexOf("/") ? (i = location.pathname, n = e.indexOf("="), (1 <= o || -1 === n) && (i = i.substr(0, i.lastIndexOf("/") + 1)), 1 <= n && (i += "?"), i += e) : i = e, history[t ? "replaceState" : "pushState"]("xing_history", "", i)), "hash" === s && (location.hash = e ? c + e : ""))
        }

        function t(e) {
            var t = i(e),
                n = t ? o() : "";
            return n && n === t || n.indexOf(t) === n.indexOf("?") + 1
        }
        var a, s, c, l, u;
        return {
            initialize: function(e, t) {
                "function" == typeof e && (t = e, e = ""), a || n(), this.callback = t || xing.noop, this.onChange = this.onChange.bind(this), this.observe(), e && e !== o() && (r(e), this.current = o())
            },
            observe: function() {
                "complete" !== document.readyState ? $(e).on("load", function() {
                    setTimeout(function() {
                        $(e).on(a + ".history", this.onChange.bind(this))
                    }.bind(this), 0)
                }.bind(this)) : $(e).on(a + ".history", this.onChange.bind(this))
            },
            onChange: function() {
                var e = this.current,
                    t = o();
                e && -1 !== e.indexOf(t) && e.length === t.length || (this.callback(this.current = t), xing.trigger("history.changed", t))
            },
            readHash: o,
            register: function(e) {
                t(e) || (r(e), this.current = o())
            },
            replace: function(e) {
                t(e) || (r(e, !0), this.current = o())
            }
        }
    }(window), (xing = xing || {}).controls = xing.controls || {}, xing.controls.TopScroller = function() {
        function t() {
            var e = a.css("opacity"),
                t = o.scrollTop();
            700 <= t && t > o.height() && "1" !== e ? (i = i || $("body"), a[0].parentNode !== i[0] && (xing.require("css/to_top.css"), i.append(a.on("click", function(e) {
                i.scrollTo(), e.preventDefault()
            }))), a.css({
                bottom: "",
                opacity: 1
            })) : t < 700 && "0" !== e && (a.css({
                opacity: 0
            }), setTimeout(function() {
                a.css({
                    bottom: -100
                })
            }, 250))
        }

        function n(e) {
            e && a && a.html(e + s)
        }
        var i, o, r, a, s = '<span class="foundation-icon-shape-arrow-up"></span>';
        return xing.ready(function() {
            var e = $("html");
            e[0].scrollWidth <= e[0].clientWidth && (o = $(window), a = $("<a>").css({
                bottom: -100,
                opacity: 0
            }).attr({
                id: "to-top",
                href: "#"
            }).html(s), o.on("scroll.top_scroller", function() {
                clearTimeout(r), r = setTimeout(t, 200)
            }), t(), n((xing.globals || {}).toTop))
        }), {
            observe: n
        }
    }(), xing.define("xing.appMessagesTargetProvider", function() {
        "use strict";

        function r(e) {
            return "string" == typeof e ? e.trim() : ""
        }

        function a(e) {
            return e ? e + o : c
        }

        function s(e) {
            var t = $('<ul class="app-messages"></ul>');
            return t.css({
                zIndex: xing.utils.zIndexProvider()
            }).attr("id", e), t
        }

        function n(e, t) {
            var n, i, o = !1;
            return t.selector ? (n = $(t.selector)).length ? (i = s(e), n.find(".lightbox-inner").append(i), t.container = i, o = !0) : xing.error("Target does not exist: " + t.selector) : (i = s(e), $("body").append(i), t.container = i, o = !0), o
        }

        function e(e) {
            var t, n = r(e),
                i = a(n),
                o = n ? "#" + n : "";
            return l[i] || (t = {
                isAppended: !1,
                selector: o,
                container: null
            }, l[i] = t, xing.trigger("app_messages_target_provider.register", i, t)), i
        }

        function t(e) {
            var t, n = l[e = e || c];
            n && (t = n.container, xing.trigger("app_messages_target_provider.beforederegister", e), t && t.remove(), l[e] && delete l[e], xing.trigger("app_messages_target_provider.deregister", e))
        }

        function i(e) {
            var t = l[e];
            t.isAppended || (t.isAppended = n(e, t), t.isAppended && xing.trigger("app_messages_target_provider.append", e))
        }
        var o = "-app-messages",
            c = "global" + o,
            l = {};
        return {
            register: e,
            deRegister: t,
            append: i
        }
    }()), xing.define("xing.AppMessage", function() {
        "use strict";

        function e(t) {
            return s.some(function(e) {
                return e === t
            })
        }

        function n(e) {
            return "string" == typeof e
        }
        var i, o = "global-app-messages",
            r = 2500,
            a = [].slice,
            s = ["success", "prompt", "error"],
            t = "prompt",
            c = ["messageSummary", "messageBody"],
            l = "app-message-",
            u = '<li id="app-message-#{id}" class="#{cssClass}"><div class="app-message-container"><h5 class="app-message-summary">#{messageSummary}</h5><div class="app-message-body">#{messageBody}</div><a data-app-message-id="#{id}" class="icon-links app-message-control" href="#"></a></div></li>',
            d = {},
            f = 0,
            h = ["onAttach", "onDetach"],
            p = {};
        return h.forEach(function(e) {
            p[e] = xing.noop
        }), s.forEach(function(e) {
            d[e] = {
                messageType: e,
                cssClass: l + e
            }
        }), i = d[t], Class.create({
            initialize: function(t) {
                t = xing.mixIn({}, p, t), c.forEach(function(e) {
                    e in t ? n(t[e]) ? t[e].trim() : xing.error(e + " property must be a string") : t[e] = ""
                }), "delay" in t ? $.isNumeric(t.delay) || xing.error("delay property must be a number") : t.delay = r, t.targetId ? n(t.targetId) || xing.error("targetId property must be a string") : t.targetId = o, h.forEach(function(e) {
                    $.isFunction(t[e]) || xing.error(e + " is not a function")
                }), e(t.messageType) ? xing.mixIn(t, d[t.messageType]) : xing.mixIn(t, i), this.config = xing.mixIn({}, t), this.id = f += 1
            },
            render: function() {
                return $.interpolate(u, {
                    id: this.id,
                    messageSummary: this.config.messageSummary,
                    messageBody: this.config.messageBody,
                    cssClass: this.config.cssClass
                })
            },
            executeCallback: function() {
                var e = a.call(arguments),
                    t = e.shift();
                this.config[t].apply(null, e)
            }
        })
    }()),
    function() {
        "use strict";

        function n() {
            var i = [];
            this.enqueue = function(e) {
                i.push(e)
            }, this.dequeue = function() {
                return i.shift()
            }, this.removeItemByFilter = function(e) {
                for (var t = -1, n = i.length; ++t < n;) e(i[t], t, i) && (i.splice(t, 1), --t, --n)
            }, this.clear = function() {
                i.length = 0
            }
        }

        function e(e, t) {
            var n = s[t.config.targetId];
            n ? n.enqueue(t) : xing.error("Target-ID not registered")
        }

        function t(e, t, n) {
            n = n || a, t && t(s[n].dequeue())
        }

        function i(e, t, n) {
            s[n = n || a].removeItemByFilter(function(e) {
                return e.id === t
            })
        }

        function o(e, t) {
            s[t] = new n
        }

        function r(e, t) {
            s[t = t || a] && s[t].clear()
        }
        var a = "global-app-messages",
            s = {};
        xing.on({
            prefix: "app_messages",
            events: {
                store: e,
                fetch: t,
                "delete": i,
                clear: r
            }
        }), xing.on({
            prefix: "app_messages_target_provider",
            events: {
                register: o,
                deregister: r
            }
        })
    }(),
    function() {
        "use strict";

        function o(e) {
            var t, n, i, o, r, a, s;
            for (n = (o = Object.keys(b).map(function(e) {
                    return b[e]
                })).length; n;)
                for (r = o[--n], i = (a = Object.keys(r)).length; i;)
                    if ((s = a[--i]) == e) {
                        t = r[s];
                        break
                    } return t
        }

        function e() {
            return Object.keys(b).filter(function(e) {
                return Object.keys(b[e]).length < m
            })
        }

        function t(e) {
            e && (y[e.config.targetId].isAppended || xing.appMessagesTargetProvider.append(e.config.targetId), n(e), e.config.autoDismiss && (e.timeOutId = setTimeout(function() {
                c(e.id)
            }, e.config.delay)))
        }

        function i() {
            e().forEach(function(e) {
                xing.trigger("app_messages.fetch", t, e)
            })
        }

        function n(e) {
            $(e.render()).prependTo(y[e.config.targetId].container).slideDown(x), (b[e.config.targetId][e.id] = e).executeCallback("onAttach", e.id)
        }

        function r(e) {
            var t = y[e.config.targetId].container.find("#app-message-" + e.id);
            t.slideUp(x, function() {
                t.remove(), e.executeCallback("onDetach")
            })
        }

        function a(n) {
            Object.keys(b[n]).forEach(function(e) {
                var t = b[n][e];
                clearTimeout(t.timeOutId)
            })
        }

        function s(e, t) {
            var n = new w(t);
            n.config.targetId !== v || y[v] || xing.appMessagesTargetProvider.register(), xing.trigger("app_messages.store", n), i()
        }

        function c(e) {
            var t, n, i = o(e);
            i && (t = i.timeOutId, n = i.config.targetId, clearTimeout(t), r(i), b[n][e] && delete b[n][e])
        }

        function l(e, t) {
            var n;
            b[e] && (a(e), (n = t.container) && n.empty(), b[e] = {})
        }

        function u(e) {
            e.preventDefault(), c(parseInt($(e.currentTarget).attr("data-app-message-id"), 10)), i()
        }

        function d(e, t) {
            c(t), i()
        }

        function f(e, t) {
            var n;
            (n = y[t = t || v]) && l(t, n)
        }

        function h(e, t, n) {
            y[t] = n, b[t] = {}
        }

        function p(e, t) {
            var n = y[t].container;
            a(t), n && n.empty().off(".app-message"), y[t] && delete y[t], b[t] && delete b[t]
        }

        function g(e, t) {
            t && y[t].container.on("click.app-message", ".app-message-control", u)
        }
        var m = 4,
            x = 150,
            v = "global-app-messages",
            y = {},
            b = {},
            w = xing.AppMessage;
        xing.on({
            prefix: "app_messages",
            events: {
                create: s,
                dismiss: d,
                clear: f
            }
        }), xing.on({
            prefix: "app_messages_target_provider",
            events: {
                register: h,
                beforederegister: p,
                append: g
            }
        })
    }(),
    function() {
        "use strict";
        delete xing.AppMessage
    }(), xing.ready(function() {
        var i = $(".header-search form, #header form.usearchform"),
            e = $(".header-search .dropdown, #adv-search-dropdown");
        e.on("click", "a", function(e) {
            e.preventDefault();
            var t = i.find('input[name="keywords"]').val().trim(),
                n = e.currentTarget.href;
            t && (n = n + "&keywords=" + t), xing.redirect(n)
        }), new xing.controls.Layer(".header-trigger-advanced, #adv-search-link-header", {
            layer: e,
            event: "hover",
            position: !1,
            delay: {
                open: .4
            }
        }), $("#search-field, .header-search .text").one("focus", function() {
            xing.require("js/incremental_search.js")
        })
    }), xing.utils.Behaviors.add({
        "[data-foundation-ajax-content]": function(e) {
            var t = e.data();
            xing.trigger("ajax:content", xing.mixIn({
                src: t.foundationAjaxContent,
                target: e
            }, t.foundationOptions))
        }
    }),
    function() {
        "use strict";

        function e(e) {
            var t = {
                frameSrc: e.attr("data-help-center-inline"),
                openBelow: e.is("[data-help-center-inline-below]"),
                target: e
            };
            t.openBelow ? e.on("click", function() {
                xing.trigger("help_center_inline_iframe.toggle", t)
            }) : xing.trigger("help_center_inline_iframe.load", t)
        }
        xing.utils.Behaviors.add({
            "[data-help-center]:click": function(e, t) {
                t.preventDefault(), xing.trigger("help_center_iframe.load", e.attr("data-help-center"))
            },
            "[data-help-center-inline]": e,
            "[data-help-center-inline-below]": e
        })
    }(), xing.utils.Behaviors.add({
        "[data-webcam-capture]": function(e) {
            xing.trigger("webcam_capture.init", e), xing.on("webcam_capture.getSnapshot", function() {
                $("#webcam-image-data").val($("#webcam-output")[0].toDataURL())
            })
        },
        "[data-webcam-capture-trigger]:click": function(e) {
            xing.trigger("lightbox", {
                src: e.attr("data-webcam-capture-trigger")
            })
        }
    });
var xing = xing || {};
! function() {
    function e() {
        return h || (h = $.Deferred(), $.ajax("/app/user", {
            data: {
                op: "get_targeting",
                ad_server: "google_publisher_tags"
            }
        }).done(function(t) {
            if (t.fields) {
                window.adsc_mobile = xing.browser.TOUCH, window.adsc_device = xing.window.adaptiveStep, window.adsc_mode = "infinite", window.adsc_personalizedAds = !0, Object.keys(t.fields).forEach(function(e) {
                    window["adsc_" + e] = window["adsc_" + e] || t.fields[e]
                });
                var n = {};
                Object.keys(t.fields).forEach(function(e) {
                    "country" === e ? n[e] = n[e] || t.fields[e] : n["adsc_" + e] = n["adsc_" + e] || t.fields[e]
                }), window._aeq.push(["setGlobalOptions", {
                    device: "desktop",
                    layout: "homepage",
                    mobile: !1,
                    category: window.adsc_adunit2,
                    siteName: "xing" + window.adsc_country,
                    customKeywords: n
                }]), h.resolve()
            } else h.reject()
        })), h.promise()
    }

    function o(e, t) {
        e.attr("data-ad-tracking", JSON.stringify(t))
    }

    function r(e) {
        return JSON.parse(e.attr("data-ad-tracking"))
    }

    function i(e) {
        var t = e.data("ad-tracking-id");
        return {
            forag_ad_request_id: t ? t.forag_ad_request_id : 0
        }
    }

    function t(e) {
        return $.extend({
            user_id: window.adsc_kw
        }, i(e))
    }

    function n(e) {
        return {
            ad_impression: t(e)
        }
    }

    function a(e) {
        return {
            ad_timeout: t(e)
        }
    }

    function s(e, t) {
        return $.ajax(e, {
            headers: {
                Accept: "application/json"
            },
            type: "POST",
            dataType: "json",
            data: t
        })
    }

    function c(t) {
        var e, n = $.Deferred();
        return (e = s("/xhr/forag/track_request", {
            ad_request: {
                ad_type: t.attr(p + "-" + xing.window.adaptiveStep) || t.attr(p),
                device: window.adsc_device || "",
                origin: document.URL,
                unit1: window.adsc_adunit1,
                unit2: window.adsc_adunit2,
                user_id: window.adsc_kw
            }
        })).done(function(e) {
            t.attr("data-ad-tracking-id", JSON.stringify({
                forag_ad_request_id: e.forag_ad_request_id
            })), n.resolve()
        }), e.fail(function() {
            n.reject()
        }), t.data("ad-tracking-promise", n.promise()), n.promise()
    }

    function l(t, n) {
        $.when(t.data("ad-tracking-promise")).done(function() {
            var e = r(t);
            $.extend(e.ad_response, i(t)), s("/xhr/forag/track_response", e), n && t.remove()
        })
    }

    function u(e) {
        $.when(e.data("ad-tracking-promise")).done(function() {
            setTimeout(function() {
                s("/xhr/forag/track_impression", n(e))
            }, 1e3)
        })
    }

    function d(e) {
        return setTimeout(function() {
            "resolved" === e.data("ad-tracking-promise").state() && s("/xhr/forag/track_timeout", a(e))
        }, 5e3)
    }

    function f(e) {
        var t = $("#" + e.detail.container),
            n = "native" === e.detail.type ? g[e.detail.size] : e.detail.type;
        "1" == e.detail.slot && "banner" === e.detail.type && (n = g[e.detail.size]), xing.require("pattern:" + n).afterLoad(function() {
            $("body").addClass("banner-show banner-" + n), t.show(), u(t)
        })
    }
    window._aeq = window._aeq || [];
    var h, p = "data-gpt-banner",
        g = {
            "160x600": "skyscraper",
            "300x250": "mediumrectangle",
            "300x600": "mediumrectangle",
            "728x90": "superbanner",
            "800x250": "billboard"
        },
        m = Object.freeze({
            DESKTOP_RECTANGLE_ANY: "ver",
            DESKTOP_RECTANGLE_ANY_RL: "ver",
            DESKTOP_BANNER_SKY_ANY: "hor",
            DESKTOP_BANNER_ANY: "hor",
            DESKTOP_SKYSCRAPER_ANY: "oop",
            DESKTOP_SKYSCRAPER_ANY_RL: "oop",
            DESKTOP_BANNER_SINGLE_ANY: "hor",
            DESKTOP_LOGOUT_ANY: "hor",
            DESKTOP_WELCOMEAD_ANY: "hor"
        });
    xing.utils.Behaviors.add({
        "[data-gpt-banner]": function(n) {
            e().then(function() {
                xing.require(["css/reklame.css", "js/ad_engine.js"]).afterLoad(function() {
                    window.addEventListener("adEngineAPIReady", function() {
                        if (TFM && TFM.Tag) {
                            var e = m[n[0].getAttribute("data-gpt-banner")],
                                t = n[0].id.includes("2") ? 2 : 1;
                            window._aeq.push(["getAdTag", {
                                containerId: n[0].id,
                                orientation: e,
                                index: t
                            }]), c(n), n.data("ad-tracking-timeout", d(n))
                        }
                    })
                })
            })
        }
    }), window.addEventListener("adReceived", function(e) {
        var t = $("#" + e.detail.container),
            n = g[e.detail.size];
        o(t, {
            ad_response: {
                advertiser_id: e.detail.advertiserId,
                container: e.detail.container,
                creative_id: e.detail.creativeId,
                is_empty: e.detail.isEmpty,
                line_item_id: e.detail.lineItemId,
                order_id: e.detail.orderId,
                size: e.detail.size,
                slot: e.detail.slot,
                ad_type: e.detail.type,
                user_id: window.adsc_kw
            }
        }), clearTimeout(t.data("ad-tracking-timeout")), e.detail.isEmpty ? (l(t), t.hide()) : ("unknown" === e.detail.type || "adexchange" === e.detail.type && n) && (e.detail.type = n, f(e), l(t))
    }, !1), window.addEventListener("adRendered", function(e) {
        var t = $("#" + e.detail.container),
            n = t.data("gpt-callback"),
            i = r(t);
        e.detail.isFiller ? (t.hide(), u(t)) : f(e), n && n(e.detail), $.extend(i.ad_response, {
            is_filler: e.detail.isFiller,
            ad_type: e.detail.type
        }), o(t, i), l(t)
    }, !1)
}(), xing.ready(function() {
    var e = $(".foundation-root header").first(),
        t = location.pathname,
        n = [],
        i = [];
    n.push("^/profile/"), n.push("^/jobs(/|$)"), n.push("^/app/contact(/|$)", "^/app/invite(/|$)", "^/campus/yearbook(/|$)", "^/contacts/"), n.push("^/news(/|$)"), n.push("^/communities(/|$)"), i.push("^/communties/group-professional(/|$)"), n.push("^/search/"), xing.user && Number(xing.user.id) && e.length && ($(".om-progress-tracker").length || n.length && !new RegExp(n.join("|")).test(t) || i.length && new RegExp(i.join("|")).test(t) || $.get("/welcome/widget?consumer=everywhere", function(e) {
        var t = $("<div>").insertAfter("header");
        t[0].innerHTML = e, t.find("script").each(function(e, t) {
            t.src ? $.getScript(t.src) : $.globalEval(t.innerHTML), t.parentNode.removeChild(t)
        })
    }))
}), (xing = xing || {}).define("Messenger", Class.create({
    initialize: function() {
        this._createIframe(), this._subscribeToMessages(), this._subscribeToWindowResize(), this._subscribeToOpenChat(), this.flyoutReady = !1, this.recipientName = null, this.entryPoint = null, this.contextId = null, this.message = ""
    },
    _createIframe: function() {
        var e = $.interpolate("/messenger/global/button?parent=#{parent}&width=#{width}&section=legacy", {
            parent: window.location.href,
            width: window.innerWidth
        });
        this.iframe = $('<iframe id="global-messenger" style="display:none;" />').attr({
            src: e
        }).appendTo("body")
    },
    _subscribeToMessages: function() {
        var o, r = this;
        $(window).on("message", function(e) {
            if ("string" == typeof e.originalEvent.data) {
                try {
                    o = JSON.parse(e.originalEvent.data)
                } catch (i) {
                    return
                }
                if (o && o.action) {
                    var t = o.action.match(/^parent:(.+)$/);
                    t && (o.action = t[1]);
                    var n = "_" + o.action;
                    "function" == typeof r[n] && r[n](o.payload)
                }
            }
        })
    },
    _subscribeToWindowResize: function() {
        $(window).on("resize", this._sendWindowResize.bind(this))
    },
    _subscribeToOpenChat: function() {
        xing.on("messenger.openChat", function(e, t) {
            this.recipientName = t.name || t.scr_rec_id, this.message = t.message || "", this.entryPoint = t.entryPoint, this.contextId = t.contextId, this._openChat()
        }.bind(this))
    },
    _openChat: function() {
        var e = {
            recipientName: this.recipientName,
            entryPoint: this.entryPoint,
            contextId: this.contextId,
            message: this.message
        };
        this._sendToIframe({
            action: "proxy:openChat",
            payload: e
        }), this.flyoutReady && (this.recipientName = null, this.entryPoint = null, this.contextId = null, this.message = "")
    },
    _messengerReady: function() {
        this.flyoutReady = !0, this.recipientName && this._openChat()
    },
    _sendWindowResize: function() {
        this._sendToIframe({
            action: "windowResized",
            payload: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        })
    },
    _resizeIframe: function(e) {
        e.attributes && this.iframe.attr(e.attributes), e.style && this.iframe.css(e.style), this._sendToIframe({
            action: "iframeResized",
            payload: {
                url: window.location.href
            }
        }), this._sendWindowResize()
    },
    _hideMessenger: function(e) {
        e.attributes && this.iframe.attr(e.attributes)
    },
    _sendToIframe: function(e) {
        document.getElementById("global-messenger").contentWindow.postMessage(JSON.stringify(e), window.location.origin)
    },
    _changeLocation: function(e) {
        window.location.href = e
    },
    _displayImage: function(e) {
        var t, n, i, o = 100;
        i = {
            width: $(window).width(),
            height: $(window).height()
        }, n = $("<img>").attr("src", e.path).css({
            margin: "-20px -24px -31px -23px"
        }).load(function() {
            t.position(), t.open()
        }), (e.width > i.width || e.height > i.height) && n.css({
            "max-width": i.width - o,
            "max-height": i.height - o
        }), t = new xing.controls.Lightbox({
            content: n,
            open: !1
        })
    },
    _trigger: function(e) {
        e.event && xing.trigger(e.event, e.params)
    }
})), (xing = xing || {}).utils = xing.utils || {}, xing.utils.Behaviors.add({
    "a[data-messenger-open-chat]:click": function(e, t) {
        "use strict";
        xing.trigger("messenger.openChat", $(e).data().messengerOpenChat), t.preventDefault()
    }
}), xing.utils.Behaviors.add({
    ".myxing-profile": function() {
        new xing.Messenger
    }
});