/*
 *  (c) 2000-2019 deviantART, Inc. All rights reserved.
 */
window.vms_feature || (window.vms_feature = function() {
    return !1
}), window.DWait && DWait.run("jms/lib/vms_feature.js");
(function(n) {
    var i = function(i, t, a) {
            var e, r, o, d, f = (i || "").split("."),
                u = t || n;
            for (e = 0, r = f.length; r > e; e++) {
                if (o = f[e], "object" != typeof u[o]) {
                    if (!a) return u[o];
                    u[o] = {}
                }
                d = u, u = u[o]
            }
            return u
        },
        t = function(n, t, a) {
            var e = (n || "").split("."),
                r = e.pop(),
                o = i(e.join("."), a, !0);
            return t && (o[r] = t), o
        },
        a = function(n, t, a) {
            var e = i(n, a);
            return void 0 === e ? t : e
        };
    n.da = n.da || {}, n.da.namespace = i, n.da.define = t, n.da.get = a
})(window), window.DWait && DWait.run("jms/lib/namespace.js");

function setBrowserObjectAttributes() {
    Browser.isKHTML = navigator.userAgent.indexOf("KHTML") >= 0, Browser.isTrident = navigator.userAgent.indexOf("Trident") >= 0, Browser.isWebkit = navigator.userAgent.indexOf("WebKit") >= 0 && !Browser.isTrident, Browser.isGecko = !Browser.isKHTML && "Gecko" == navigator.product, Browser.isChrome = Browser.isWebkit && navigator.userAgent.indexOf("Chrome") >= 0, Browser.isFirefox = Browser.isGecko && navigator.userAgent.indexOf("Firefox") >= 0, Browser.isSafari = !Browser.isChrome && Browser.isWebkit && navigator.userAgent.indexOf("Safari") >= 0, Browser.isIE = !Browser.isGecko && void 0 != navigator.cpuClass && "Microsoft Internet Explorer" == navigator.appName, Browser.isOpera = navigator.userAgent.indexOf("Opera") >= 0, Browser.isIE8 = Browser.isIE && navigator.userAgent.indexOf("MSIE 8") >= 0, Browser.isIE9 = Browser.isIE && navigator.userAgent.indexOf("MSIE 9") >= 0, Browser.isIE10 = Browser.isIE && navigator.userAgent.indexOf("MSIE 10") >= 0, Browser.isIE11 = null !== navigator.userAgent.match(/Trident\/7\.0.+rv:11\.0/), Browser.isIE11 && (Browser.isIE = !0), Browser.isWebkit && (matches = navigator.userAgent.match(/WebKit\/(\d+\.\d+)/)) && (Browser.webkitVersion = parseFloat(matches[1])), Browser.isMac = navigator.appVersion.indexOf("Mac") >= 0, Browser.isTux = navigator.appVersion.indexOf("Linux") >= 0, Browser.isWin = navigator.appVersion.indexOf("Windows") >= 0, Browser.isPhantom = "callPhantom" in window, Browser.isTouch = "ontouchstart" in window && !Browser.isPhantom, Browser.isWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0, Browser.isKindleFire = navigator.userAgent.indexOf("Silk") >= 0, Browser.isAndroid = navigator.userAgent.indexOf("Android") >= 0 && !Browser.isWindowsPhone && !Browser.isKindleFire, Browser.isBB = navigator.userAgent.indexOf("BB10") >= 0, Browser.isWebOS = navigator.userAgent.indexOf("webOS") >= 0, Browser.isPhone = navigator.userAgent.indexOf("iPhone") >= 0 && !Browser.isWindowsPhone, Browser.isPad = navigator.userAgent.indexOf("iPad") >= 0, Browser.isPod = navigator.userAgent.indexOf("iPod") >= 0, Browser.isIOS = Browser.isPhone || Browser.isPad || Browser.isPod, Browser.isMobile = Browser.isIOS || Browser.isAndroid || Browser.isBB || Browser.isWebOS || Browser.isWindowsPhone || Browser.isKindleFire, Browser.isSmallMobile = Browser.isMobile && 667 >= window.innerWidth
}
Browser = {}, setBrowserObjectAttributes(), Browser.isTouch && void 0 === Browser.touchTested && DWait.ready(".domready", function() {
    document.body.className += " is_touch", Browser.touchTested = !0
}), (Browser.isIE10 || Browser.IE11) && void 0 === Browser.ieFixup && DWait.ready(".domready", function() {
    document.body.className += " ie gte10", Browser.ieFixup = !0
}), window.DWait && DWait.run("jms/lib/browser.js");
/**
 * @license
 * Base.js, version 1.1a
 * Copyright 2006-2010, Dean Edwards
 * License: http://www.opensource.org/licenses/mit-license.php
 */
window.console || (window.console = {
    log: function() {},
    trace: function() {},
    info: function() {},
    warn: function() {}
}), window.deviantART || (window.deviantART = {}), window.Base = function() {}, Base.extend = function(t, n) {
    var e = Base.prototype.extend;
    Base._prototyping = !0;
    var o = new this;
    e.call(o, t), o.base = function() {}, delete Base._prototyping;
    var i = o.constructor,
        r = o.constructor = function() {
            if (!Base._prototyping)
                if (this._constructing || this.constructor == r) this._constructing = !0, i.apply(this, arguments), delete this._constructing;
                else if (null != arguments[0]) return (arguments[0].extend || e).call(arguments[0], o)
        };
    return r.ancestor = this, r.extend = this.extend, r.forEach = this.forEach, r.implement = this.implement, r.prototype = o, r.toString = this.toString, r.valueOf = function(t) {
        return "object" == t ? r : i.valueOf()
    }, e.call(r, n), "function" == typeof r.init && r.init(), r
}, Base.prototype = {
    extend: function(t, n) {
        if (arguments.length > 1) {
            var e = this[t];
            if (e && "function" == typeof n && (!e.valueOf || e.valueOf() != n.valueOf()) && /\bbase\b/.test(n)) {
                var o = n.valueOf();
                n = function() {
                    var t = this.base || Base.prototype.base;
                    this.base = e;
                    var n = o.apply(this, arguments);
                    return this.base = t, n
                }, n.valueOf = function(t) {
                    return "object" == t ? n : o
                }, n.toString = Base.toString
            }
            this[t] = n
        } else if (t) {
            var i = Base.prototype.extend;
            Base._prototyping || "function" == typeof this || (i = this.extend || i);
            for (var r = {
                    toSource: null
                }, s = ["constructor", "toString", "valueOf"], a = Base._prototyping ? 0 : 1; u = s[a++];) t[u] != r[u] && i.call(this, u, t[u]);
            for (var u in t) r[u] || i.call(this, u, t[u])
        }
        return this
    }
}, Base = Base.extend({
    constructor: function() {
        this.extend(arguments[0])
    }
}, {
    ancestor: Object,
    version: "1.1",
    forEach: function(t, n, e) {
        for (var o in t) void 0 === this.prototype[o] && n.call(e, t[o], o, t)
    },
    implement: function() {
        for (var t = 0; arguments.length > t; t++) "function" == typeof arguments[t] ? arguments[t](this.prototype) : this.prototype.extend(arguments[t]);
        return this
    },
    toString: function() {
        return this.valueOf() + ""
    }
}), window.DWait && DWait.run("jms/lib/Base.js");
Function.prototype.bind || (Function.prototype.bind = function(t) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var n = Array.prototype.slice.call(arguments, 1),
        o = this,
        i = function() {},
        r = function() {
            return o.apply(this instanceof i && t ? this : t, n.concat(Array.prototype.slice.call(arguments)))
        };
    return i.prototype = this.prototype, r.prototype = new i, r
}), window.DWait && DWait.run("jms/lib/bind.js");
/**
 * @license
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */
(function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
})("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length,
            n = it.type(e);
        return "function" === n || it.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (it.isFunction(t)) return it.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return it.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ft.test(t)) return it.filter(t, e, n);
            t = it.filter(t, e)
        }
        return it.grep(e, function(e) {
            return it.inArray(e, t) >= 0 !== n
        })
    }

    function i(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = xt[e] = {};
        return it.each(e.match(bt) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ht.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (a(), it.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Et, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Nt.test(n) ? it.parseJSON(n) : n
                } catch (i) {}
                it.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !it.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, r) {
        if (it.acceptData(e)) {
            var i, o, a = it.expando,
                s = e.nodeType,
                l = s ? it.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = J.pop() || it.guid++ : a), l[u] || (l[u] = s ? {} : {
                toJSON: it.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? l[u] = it.extend(l[u], t) : l[u].data = it.extend(l[u].data, t)), o = l[u], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[it.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[it.camelCase(t)])) : i = o, i
        }
    }

    function d(e, t, n) {
        if (it.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? it.cache : e,
                s = o ? e[it.expando] : it.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    it.isArray(t) ? t = t.concat(it.map(t, it.camelCase)) : t in r ? t = [t] : (t = it.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !u(r) : !it.isEmptyObject(r)) return
                }(n || (delete a[s].data, u(a[s]))) && (o ? it.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return ht.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Ot.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function g(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== Ct ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ct ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || it.nodeName(r, t) ? o.push(r) : it.merge(o, g(r, t));
        return void 0 === t || t && it.nodeName(e, t) ? it.merge([e], o) : o
    }

    function v(e) {
        Dt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return it.nodeName(e, "table") && it.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== it.find.attr(e, "type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Vt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) it._data(n, "globalEval", !t || it._data(t[r], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && it.hasData(e)) {
            var n, r, i, o = it._data(e),
                a = it._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) it.event.add(t, n, s[n][r])
            }
            a.data && (a.data = it.extend({}, a.data))
        }
    }

    function C(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[it.expando]) {
                i = it._data(t);
                for (r in i.events) it.removeEvent(t, r, i.handle);
                t.removeAttribute(it.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !it.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Dt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function N(t, n) {
        var r, i = it(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : it.css(i[0], "display");
        return i.detach(), o
    }

    function E(e) {
        var t = ht,
            n = Zt[e];
        return n || (n = N(e, t), "none" !== n && n || (Kt = (Kt || it("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Kt[0].contentWindow || Kt[0].contentDocument).document, t.write(), t.close(), n = N(e, t), Kt.detach()), Zt[e] = n), n
    }

    function k(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? (delete this.get, void 0) : (this.get = t).apply(this, arguments)
            }
        }
    }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = pn.length; i--;)
            if (t = pn[i] + n, t in e) return t;
        return r
    }

    function A(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = it._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && At(r) && (o[a] = it._data(r, "olddisplay", E(r.nodeName)))) : (i = At(r), (n && "none" !== n || !i) && it._data(r, "olddisplay", i ? n : it.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function j(e, t, n) {
        var r = un.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function D(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += it.css(e, n + St[o], !0, i)), r ? ("content" === n && (a -= it.css(e, "padding" + St[o], !0, i)), "margin" !== n && (a -= it.css(e, "border" + St[o] + "Width", !0, i))) : (a += it.css(e, "padding" + St[o], !0, i), "padding" !== n && (a += it.css(e, "border" + St[o] + "Width", !0, i)));
        return a
    }

    function L(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = en(e),
            a = nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = tn(e, t, o), (0 > i || null == i) && (i = e.style[t]), rn.test(i)) return i;
            r = a && (nt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + D(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function H(e, t, n, r, i) {
        return new H.prototype.init(e, t, n, r, i)
    }

    function q() {
        return setTimeout(function() {
            hn = void 0
        }), hn = it.now()
    }

    function _(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = St[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function M(e, t, n) {
        for (var r, i = (xn[t] || []).concat(xn["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function O(e, t, n) {
        var r, i, o, a, s, l, u, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && At(e),
            m = it._data(e, "fxshow");
        n.queue || (s = it._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, it.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = it.css(e, "display"), c = "none" === u ? it._data(e, "olddisplay") || E(e.nodeName) : u, "inline" === c && "none" === it.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], gn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    h = !0
                }
                f[r] = m && m[r] || it.style(e, r)
            } else u = void 0;
        if (it.isEmptyObject(f)) "inline" === ("none" === u ? E(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = it._data(e, "fxshow", {}), o && (m.hidden = !h), h ? it(e).show() : d.done(function() {
                it(e).hide()
            }), d.done(function() {
                var t;
                it._removeData(e, "fxshow");
                for (t in f) it.style(e, t, f[t])
            });
            for (r in f) a = M(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function F(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = it.camelCase(n), i = t[r], o = e[n], it.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = it.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function B(e, t, n) {
        var r, i, o = 0,
            a = bn.length,
            s = it.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = hn || q(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: it.extend({}, t),
                opts: it.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: hn || q(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = it.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (F(c, u.opts.specialEasing); a > o; o++)
            if (r = bn[o].call(u, e, c, u.opts)) return r;
        return it.map(c, M, u), it.isFunction(u.opts.start) && u.opts.start.call(e, u), it.fx.timer(it.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function W(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(bt) || [];
            if (it.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function P(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, it.each(e[s] || [], function(e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {},
            a = e === In;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function R(e, t) {
        var n, r, i = it.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && it.extend(!0, e, n), e
    }

    function $(e, t, n) {
        for (var r, i, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    l.unshift(a);
                    break
                } if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function z(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    } if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function I(e, t, n, r) {
        var i;
        if (it.isArray(t)) it.each(t, function(t, i) {
            n || Jn.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== it.type(t)) r(e, t);
        else
            for (i in t) I(e + "[" + i + "]", t[i], n, r)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function U() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function V(e) {
        return it.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var J = [],
        Y = J.slice,
        G = J.concat,
        Q = J.push,
        K = J.indexOf,
        Z = {},
        et = Z.toString,
        tt = Z.hasOwnProperty,
        nt = {},
        rt = "1.11.1",
        it = function(e, t) {
            return new it.fn.init(e, t)
        },
        ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        st = /-([\da-z])/gi,
        lt = function(e, t) {
            return t.toUpperCase()
        };
    it.fn = it.prototype = {
        jquery: rt,
        constructor: it,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
        },
        pushStack: function(e) {
            var t = it.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return it.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(it.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: J.sort,
        splice: J.splice
    }, it.extend = it.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || it.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (u && n && (it.isPlainObject(n) || (t = it.isArray(n))) ? (t ? (t = !1, o = e && it.isArray(e) ? e : []) : o = e && it.isPlainObject(e) ? e : {}, a[r] = it.extend(u, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, it.extend({
        expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === it.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === it.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !it.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== it.type(e) || e.nodeType || it.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && it.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(at, "ms-").replace(st, lt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ot, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? it.merge(r, "string" == typeof e ? [e] : e) : Q.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (K) return K.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && l.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && l.push(i);
            return G.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), it.isFunction(e) ? (n = Y.call(arguments, 2), r = function() {
                return e.apply(t || this, n.concat(Y.call(arguments)))
            }, r.guid = e.guid = e.guid || it.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: nt
    }), it.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ut = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, u, d, p, h, m;
            if ((t ? t.ownerDocument || t : P) !== H && L(t), t = t || H, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (_ && !r) {
                if (i = yt.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
                    } if (w.qsa && (!M || !M.test(e))) {
                    if (p = d = W, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = E(e), (d = t.getAttribute("id")) ? p = d.replace(xt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + f(u[l]);
                        h = bt.test(e) && c(t.parentNode) || t, m = u.join(",")
                    }
                    if (m) try {
                        return Z.apply(n, h.querySelectorAll(m)), n
                    } catch (g) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(lt, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[W] = !0, e
        }

        function i(e) {
            var t = H.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && typeof e.getElementsByTagName !== V && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = $++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, l, u = [R, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[W] || (t[W] = {}), (s = l[r]) && s[0] === R && s[1] === o) return u[2] = s[2];
                            if (l[r] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function v(e, t, n, i, o, a) {
            return i && !i[W] && (i = v(i)), o && !o[W] && (o = v(o, a)), r(function(r, a, s, l) {
                var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    v = r || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !r && t ? v : g(v, f, e, s, l),
                    b = n ? o || (r ? e : h || i) ? [] : a : y;
                if (n && n(y, b, s, l), i)
                    for (u = g(b, p), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (b[p[c]] = !(y[p[c]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = o ? tt.call(r, d) : f[c]) > -1 && (r[u] = !(a[u] = d))
                    }
                } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : Z.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                    return e === t
                }, a, !0), u = p(function(e) {
                    return tt.call(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    return !o && (r || n !== A) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
                }]; i > s; s++)
                if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[W]) {
                        for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                        return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e))
                    }
                    c.push(n)
                } return h(c)
        }

        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, l, u) {
                    var c, d, f, p = 0,
                        h = "0",
                        m = r && [],
                        v = [],
                        y = A,
                        b = r || o && T.find.TAG("*", u),
                        x = R += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (A = a !== H && a); h !== w && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (d = 0; f = e[d++];)
                                if (f(c, a, s)) {
                                    l.push(c);
                                    break
                                } u && (R = x)
                        }
                        i && ((c = !f && c) && p--, r && m.push(c))
                    }
                    if (p += h, i && h !== p) {
                        for (d = 0; f = n[d++];) f(m, v, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = Q.call(l));
                            v = g(v)
                        }
                        Z.apply(l, v), u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (R = x, A = y), m
                };
            return i ? r(a) : a
        }
        var x, w, T, C, N, E, k, S, A, j, D, L, H, q, _, M, O, F, B, W = "sizzle" + -new Date,
            P = e.document,
            R = 0,
            $ = 0,
            z = n(),
            I = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (D = !0), 0
            },
            V = "undefined",
            J = 1 << 31,
            Y = {}.hasOwnProperty,
            G = [],
            Q = G.pop,
            K = G.push,
            Z = G.push,
            et = G.slice,
            tt = G.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            rt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = it.replace("w", "w#"),
            at = "\\[" + rt + "*(" + it + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + rt + "*\\]",
            st = ":(" + it + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|" + ".*" + ")\\)|)",
            lt = RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
            ut = RegExp("^" + rt + "*," + rt + "*"),
            ct = RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
            dt = RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
            ft = RegExp(st),
            pt = RegExp("^" + ot + "$"),
            ht = {
                ID: RegExp("^#(" + it + ")"),
                CLASS: RegExp("^\\.(" + it + ")"),
                TAG: RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + at),
                PSEUDO: RegExp("^" + st),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                bool: RegExp("^(?:" + nt + ")$", "i"),
                needsContext: RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
            },
            mt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            xt = /'|\\/g,
            wt = RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
            Tt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
            };
        try {
            Z.apply(G = et.call(P.childNodes), P.childNodes), G[P.childNodes.length].nodeType
        } catch (Ct) {
            Z = {
                apply: G.length ? function(e, t) {
                    K.apply(e, et.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : P,
                r = n.defaultView;
            return n !== H && 9 === n.nodeType && n.documentElement ? (H = n, q = n.documentElement, _ = !N(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
                L()
            }, !1) : r.attachEvent && r.attachEvent("onunload", function() {
                L()
            })), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(n.getElementsByClassName) && i(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), w.getById = i(function(e) {
                return q.appendChild(e).id = W, !n.getElementsByName || !n.getElementsByName(W).length
            }), w.getById ? (T.find.ID = function(e, t) {
                if (typeof t.getElementById !== V && _) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(wt, Tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== V && _ ? t.getElementsByClassName(e) : void 0
            }, O = [], M = [], (w.qsa = vt.test(n.querySelectorAll)) && (i(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && M.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || M.push(":checked")
            }), i(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (w.matchesSelector = vt.test(F = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), O.push("!=", st)
            }), M = M.length && RegExp(M.join("|")), O = O.length && RegExp(O.join("|")), t = vt.test(q.compareDocumentPosition), B = t || vt.test(q.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return D = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !w.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === P && B(P, e) ? -1 : t === n || t.ownerDocument === P && B(P, t) ? 1 : j ? tt.call(j, e) - tt.call(j, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return D = !0, 0;
                var r, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    u = [t];
                if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : j ? tt.call(j, e) - tt.call(j, t) : 0;
                if (o === s) return a(e, t);
                for (r = e; r = r.parentNode;) l.unshift(r);
                for (r = t; r = r.parentNode;) u.unshift(r);
                for (; l[i] === u[i];) i++;
                return i ? a(l[i], u[i]) : l[i] === P ? -1 : u[i] === P ? 1 : 0
            }, n) : H
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== H && L(e), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !_ || O && O.test(n) || M && M.test(n))) try {
                var r = F.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, H, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== H && L(e), B(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== H && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
            return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (D = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(U), D) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return j = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ht,
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
                    return e[1] = e[1].replace(wt, Tt), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(wt, Tt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (c = g[W] || (g[W] = {}), u = c[e] || [], p = u[0] === R && u[1], f = u[0] === R && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        c[e] = [R, p, f];
                                        break
                                    }
                            } else if (y && (u = (t[W] || (t[W] = {}))[e]) && u[0] === R) f = u[1];
                            else
                                for (;
                                    (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[W] || (d[W] = {}))[e] = [R, f]), d !== t)););
                            return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = tt.call(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = k(e.replace(lt, "$1"));
                    return i[W] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Tt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === q
                },
                focus: function(e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (6 > e.nodeType) return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return mt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) T.pseudos[x] = l(x);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function(e, n) {
            var r, i, o, a, s, l, u, c = I[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = T.preFilter; s;) {
                (!r || (i = ut.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(lt, " ")
                }), s = s.slice(r.length));
                for (a in T.filter) !(i = ht[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : I(e, l).slice(0)
        }, k = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[W] ? r.push(o) : i.push(o);
                o = X(e, b(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function(e, t, n, r) {
            var i, o, a, s, l, u = "function" == typeof e && e,
                d = !r && E(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(wt, Tt), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                    if ((l = T.find[s]) && (r = l(a.matches[0].replace(wt, Tt), bt.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && f(o), !e) return Z.apply(n, r), n;
                        break
                    }
            }
            return (u || k(e, d))(r, t, !_, n, bt.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = W.split("").sort(U).join("") === W, w.detectDuplicates = !!D, L(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(H.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(nt, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    it.find = ut, it.expr = ut.selectors, it.expr[":"] = it.expr.pseudos, it.unique = ut.uniqueSort, it.text = ut.getText, it.isXMLDoc = ut.isXML, it.contains = ut.contains;
    var ct = it.expr.match.needsContext,
        dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ft = /^.[^:#\[\.,]*$/;
    it.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? it.find.matchesSelector(r, e) ? [r] : [] : it.find.matches(e, it.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, it.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(it(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (it.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) it.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? it.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && ct.test(e) ? it(e) : e || [], !1).length
        }
    });
    var pt, ht = e.document,
        mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = it.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof it ? t[0] : t, it.merge(this, it.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ht, !0)), dt.test(n[1]) && it.isPlainObject(t))
                        for (n in t) it.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = ht.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return pt.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = ht, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : it.isFunction(e) ? pt.ready !== void 0 ? pt.ready(e) : e(it) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), it.makeArray(e, this))
        };
    gt.prototype = it.fn, pt = it(ht);
    var vt = /^(?:parents|prev(?:Until|All))/,
        yt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    it.extend({
        dir: function(e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !it(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), it.fn.extend({
        has: function(e) {
            var t, n = it(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (it.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ct.test(e) || "string" != typeof e ? it(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && it.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(o.length > 1 ? it.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? it.inArray(this[0], it(e)) : it.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(it.unique(it.merge(this.get(), it(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), it.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return it.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return it.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return it.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return it.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return it.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return it.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return it.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return it.sibling(e.firstChild)
        },
        contents: function(e) {
            return it.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : it.merge([], e.childNodes)
        }
    }, function(e, t) {
        it.fn[e] = function(n, r) {
            var i = it.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = it.filter(r, i)), this.length > 1 && (yt[e] || (i = it.unique(i)), vt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var bt = /\S+/g,
        xt = {};
    it.Callbacks = function(e) {
        e = "string" == typeof e ? xt[e] || o(e) : it.extend({}, e);
        var t, n, r, i, a, s, l = [],
            u = !e.once && [],
            c = function(o) {
                for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = l.length, t = !0; l && i > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    } t = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var r = l.length;
                        (function o(t) {
                            it.each(t, function(t, n) {
                                var r = it.type(n);
                                "function" === r ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        })(arguments), t ? i = l.length : n && (s = r, c(n))
                    }
                    return this
                },
                remove: function() {
                    return l && it.each(arguments, function(e, n) {
                        for (var r;
                            (r = it.inArray(n, l, r)) > -1;) l.splice(r, 1), t && (i >= r && i--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? it.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], i = 0, this
                },
                disable: function() {
                    return l = u = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, n || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, n) {
                    return !l || r && !u || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? u.push(n) : c(n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    }, it.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", it.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", it.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", it.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return it.Deferred(function(n) {
                            it.each(t, function(t, o) {
                                var a = it.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && it.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? it.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, it.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = Y.call(arguments),
                a = o.length,
                s = 1 !== a || e && it.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : it.Deferred(),
                u = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && it.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    });
    var wt;
    it.fn.ready = function(e) {
        return it.ready.promise().done(e), this
    }, it.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? it.readyWait++ : it.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--it.readyWait : !it.isReady) {
                if (!ht.body) return setTimeout(it.ready);
                it.isReady = !0, e !== !0 && --it.readyWait > 0 || (wt.resolveWith(ht, [it]), it.fn.triggerHandler && (it(ht).triggerHandler("ready"), it(ht).off("ready")))
            }
        }
    }), it.ready.promise = function(t) {
        if (!wt)
            if (wt = it.Deferred(), "complete" === ht.readyState) setTimeout(it.ready);
            else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            ht.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && ht.documentElement
            } catch (r) {}
            n && n.doScroll && function i() {
                if (!it.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    a(), it.ready()
                }
            }()
        }
        return wt.promise(t)
    };
    var Tt, Ct = "undefined";
    for (Tt in it(nt)) break;
    nt.ownLast = "0" !== Tt, nt.inlineBlockNeedsLayout = !1, it(function() {
            var e, t, n, r;
            n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function() {
            var e = ht.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    nt.deleteExpando = !1
                }
            }
            e = null
        }(), it.acceptData = function(e) {
            var t = it.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Nt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Et = /([A-Z])/g;
    it.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? it.cache[e[it.expando]] : e[it.expando], !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }), it.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = it.data(o), 1 === o.nodeType && !it._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = it.camelCase(r.slice(5)), l(o, r, i[r])));
                    it._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                it.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                it.data(this, e, t)
            }) : o ? l(o, e, it.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                it.removeData(this, e)
            })
        }
    }), it.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = it._data(e, t), n && (!r || it.isArray(n) ? r = it._data(e, t, it.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = it.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = it._queueHooks(e, t),
                a = function() {
                    it.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return it._data(e, n) || it._data(e, n, {
                empty: it.Callbacks("once memory").add(function() {
                    it._removeData(e, t + "queue"), it._removeData(e, n)
                })
            })
        }
    }), it.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), n > arguments.length ? it.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = it.queue(this, e, t);
                it._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && it.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                it.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = it.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = it._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        St = ["Top", "Right", "Bottom", "Left"],
        At = function(e, t) {
            return e = t || e, "none" === it.css(e, "display") || !it.contains(e.ownerDocument, e)
        },
        jt = it.access = function(e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === it.type(n)) {
                i = !0;
                for (s in n) it.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, it.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(it(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        Dt = /^(?:checkbox|radio)$/i;
    (function() {
        var e = ht.createElement("input"),
            t = ht.createElement("div"),
            n = ht.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                nt.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                nt.deleteExpando = !1
            }
        }
    })(),
    function() {
        var t, n, r = ht.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), nt[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Lt = /^(?:input|select|textarea)$/i,
        Ht = /^key/,
        qt = /^(?:mouse|pointer|contextmenu)|click/,
        _t = /^(?:focusinfocus|focusoutblur)$/,
        Mt = /^([^.]*)(?:\.(.+)|)$/;
    it.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, f, p, h, m, g = it._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = it.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return typeof it === Ct || e && it.event.triggered === e.type ? void 0 : it.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;) o = Mt.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (u = it.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, u = it.event.special[p] || {}, d = it.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && it.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), it.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, d, f, p, h, m, g = it.hasData(e) && it._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(bt) || [""], u = t.length; u--;)
                    if (s = Mt.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = it.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || it.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) it.event.remove(e, p + t[u], n, r, !0);
                it.isEmptyObject(c) && (delete g.handle, it._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, l, u, c, d, f = [r || ht],
                p = tt.call(t, "type") ? t.type : t,
                h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || ht, 3 !== r.nodeType && 8 !== r.nodeType && !_t.test(p + it.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = 0 > p.indexOf(":") && "on" + p, t = t[it.expando] ? t : new it.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : it.makeArray(n, [t]), u = it.event.special[p] || {}, i || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!i && !u.noBubble && !it.isWindow(r)) {
                    for (l = u.delegateType || p, _t.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                    c === (r.ownerDocument || ht) && f.push(c.defaultView || c.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : u.bindType || p, o = (it._data(s, "events") || {})[t.type] && it._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && it.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && it.acceptData(r) && a && r[p] && !it.isWindow(r)) {
                    c = r[a], c && (r[a] = null), it.event.triggered = p;
                    try {
                        r[p]()
                    } catch (m) {}
                    it.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = it.event.fix(e);
            var t, n, r, i, o, a = [],
                s = Y.call(arguments),
                l = (it._data(this, "events") || {})[e.type] || [],
                u = it.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = it.event.handlers.call(this, e, l), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, o = 0;
                        (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((it.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? it(n, this).index(l) >= 0 : it.find(n, this, null, [l]).length), i[n] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    } return t.length > s && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[it.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = qt.test(i) ? this.mouseHooks : Ht.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new it.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || ht), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
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
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || ht, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return it.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return it.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = it.extend(new it.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? it.event.trigger(i, null, t) : it.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, it.removeEvent = ht.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Ct && (e[r] = null), e.detachEvent(r, n))
    }, it.Event = function(e, t) {
        return this instanceof it.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && it.extend(this, t), this.timeStamp = e && e.timeStamp || it.now(), this[it.expando] = !0, void 0) : new it.Event(e, t)
    }, it.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, it.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        it.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !it.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), nt.submitBubbles || (it.event.special.submit = {
        setup: function() {
            return it.nodeName(this, "form") ? !1 : (it.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = it.nodeName(t, "input") || it.nodeName(t, "button") ? t.form : void 0;
                n && !it._data(n, "submitBubbles") && (it.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), it._data(n, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && it.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return it.nodeName(this, "form") ? !1 : (it.event.remove(this, "._submit"), void 0)
        }
    }), nt.changeBubbles || (it.event.special.change = {
        setup: function() {
            return Lt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (it.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), it.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), it.event.simulate("change", this, e, !0)
            })), !1) : (it.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Lt.test(t.nodeName) && !it._data(t, "changeBubbles") && (it.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || it.event.simulate("change", this.parentNode, e, !0)
                }), it._data(t, "changeBubbles", !0))
            }), void 0)
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return it.event.remove(this, "._change"), !Lt.test(this.nodeName)
        }
    }), nt.focusinBubbles || it.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            it.event.simulate(t, e.target, it.event.fix(e), !0)
        };
        it.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = it._data(r, t);
                i || r.addEventListener(e, n, !0), it._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = it._data(r, t) - 1;
                i ? it._data(r, t, i) : (r.removeEventListener(e, n, !0), it._removeData(r, t))
            }
        }
    }), it.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
            else if (!r) return this;
            return 1 === i && (a = r, r = function(e) {
                return it().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = it.guid++)), this.each(function() {
                it.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, it(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() {
                it.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                it.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? it.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ot = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ft = / jQuery\d+="(?:null|\d+)"/g,
        Bt = RegExp("<(?:" + Ot + ")[\\s/>]", "i"),
        Wt = /^\s+/,
        Pt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Rt = /<([\w:]+)/,
        $t = /<tbody/i,
        zt = /<|&#?\w+;/,
        It = /<(?:script|style|link)/i,
        Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ut = /^$|\/(?:java|ecma)script/i,
        Vt = /^true\/(.*)/,
        Jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Gt = m(ht),
        Qt = Gt.appendChild(ht.createElement("div"));
    Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td, it.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = it.contains(e.ownerDocument, e);
            if (nt.html5Clone || it.isXMLDoc(e) || !Bt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Qt.innerHTML = e.outerHTML, Qt.removeChild(o = Qt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || it.isXMLDoc(e)))
                for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && C(i, r[a]);
            if (t)
                if (n)
                    for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
                else T(e, o);
            return r = g(o, "script"), r.length > 0 && w(r, !l && g(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, l, u, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === it.type(o)) it.merge(p, o.nodeType ? [o] : o);
                    else if (zt.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (Rt.exec(o) || ["", ""])[1].toLowerCase(), c = Yt[l] || Yt._default, s.innerHTML = c[1] + o.replace(Pt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!nt.leadingWhitespace && Wt.test(o) && p.push(t.createTextNode(Wt.exec(o)[0])), !nt.tbody)
                    for (o = "table" !== l || $t.test(o) ? "<table>" !== c[1] || $t.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) it.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (it.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(o));
            for (s && f.removeChild(s), nt.appendChecked || it.grep(g(p, "input"), v), h = 0; o = p[h++];)
                if ((!r || -1 === it.inArray(o, r)) && (a = it.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))
                    for (i = 0; o = s[i++];) Ut.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = it.expando, l = it.cache, u = nt.deleteExpando, c = it.event.special; null != (n = e[a]); a++)
                if ((t || it.acceptData(n)) && (i = n[s], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? it.event.remove(n, r) : it.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Ct ? n.removeAttribute(s) : n[s] = null, J.push(i))
                }
        }
    }), it.fn.extend({
        text: function(e) {
            return jt(this, function(e) {
                return void 0 === e ? it.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
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
            for (var n, r = e ? it.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || it.cleanData(g(n)), n.parentNode && (t && it.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && it.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && it.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return it.clone(this, e, t)
            })
        },
        html: function(e) {
            return jt(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ft, "") : void 0;
                if (!("string" != typeof e || It.test(e) || !nt.htmlSerialize && Bt.test(e) || !nt.leadingWhitespace && Wt.test(e) || Yt[(Rt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Pt, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (it.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, it.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = G.apply([], e);
            var n, r, i, o, a, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                f = e[0],
                p = it.isFunction(f);
            if (p || u > 1 && "string" == typeof f && !nt.checkClone && Xt.test(f)) return this.each(function(n) {
                var r = c.eq(n);
                p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
            });
            if (u && (s = it.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = it.map(g(s, "script"), b), i = o.length; u > l; l++) r = s, l !== d && (r = it.clone(r, !0, !0), i && it.merge(o, g(r, "script"))), t.call(this[l], r, l);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, it.map(o, x), l = 0; i > l; l++) r = o[l], Ut.test(r.type || "") && !it._data(r, "globalEval") && it.contains(a, r) && (r.src ? it._evalUrl && it._evalUrl(r.src) : it.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Jt, "")));
                s = n = null
            }
            return this
        }
    }), it.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        it.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = it(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), it(o[r])[t](n), Q.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Kt, Zt = {};
    (function() {
        var e;
        nt.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = ht.getElementsByTagName("body")[0], n && n.style ? (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ht.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    })();
    var en, tn, nn = /^margin/,
        rn = RegExp("^(" + kt + ")(?!px)[a-z%]+$", "i"),
        on = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (en = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, tn = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || it.contains(e.ownerDocument, e) || (a = it.style(e, t)), rn.test(a) && nn.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : ht.documentElement.currentStyle && (en = function(e) {
            return e.currentStyle
        }, tn = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rn.test(a) && !on.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
        function() {
            function t() {
                var t, n, r, i;
                n = ht.getElementsByTagName("body")[0], n && n.style && (t = ht.createElement("div"), r = ht.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, i = t.appendChild(ht.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
            }
            var n, r, i, o, a, s, l;
            n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === r.opacity, nt.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, it.extend(nt, {
                reliableHiddenOffsets: function() {
                    return null == s && t(), s
                },
                boxSizingReliable: function() {
                    return null == a && t(), a
                },
                pixelPosition: function() {
                    return null == o && t(), o
                },
                reliableMarginRight: function() {
                    return null == l && t(), l
                }
            }))
        }(), it.swap = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };
    var an = /alpha\([^)]*\)/i,
        sn = /opacity\s*=\s*([^)]*)/,
        ln = /^(none|table(?!-c[ea]).+)/,
        un = RegExp("^(" + kt + ")(.*)$", "i"),
        cn = RegExp("^([+-])=(" + kt + ")", "i"),
        dn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        fn = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pn = ["Webkit", "O", "Moz", "ms"];
    it.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tn(e, "opacity");
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
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = it.camelCase(t),
                    l = e.style;
                if (t = it.cssProps[s] || (it.cssProps[s] = S(l, s)), a = it.cssHooks[t] || it.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                if (o = typeof n, "string" === o && (i = cn.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(it.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || it.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    l[t] = n
                } catch (u) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = it.camelCase(t);
            return t = it.cssProps[s] || (it.cssProps[s] = S(e.style, s)), a = it.cssHooks[t] || it.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tn(e, t, r)), "normal" === o && t in fn && (o = fn[t]), "" === n || n ? (i = parseFloat(o), n === !0 || it.isNumeric(i) ? i || 0 : o) : o
        }
    }), it.each(["height", "width"], function(e, t) {
        it.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? ln.test(it.css(e, "display")) && 0 === e.offsetWidth ? it.swap(e, dn, function() {
                    return L(e, t, r)
                }) : L(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && en(e);
                return j(e, n, r ? D(e, t, r, nt.boxSizing && "border-box" === it.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), nt.opacity || (it.cssHooks.opacity = {
        get: function(e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = it.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === it.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i)
        }
    }), it.cssHooks.marginRight = k(nt.reliableMarginRight, function(e, t) {
        return t ? it.swap(e, {
            display: "inline-block"
        }, tn, [e, "marginRight"]) : void 0
    }), it.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        it.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + St[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, nn.test(e) || (it.cssHooks[e + t].set = j)
    }), it.fn.extend({
        css: function(e, t) {
            return jt(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (it.isArray(t)) {
                    for (r = en(e), i = t.length; i > a; a++) o[t[a]] = it.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? it.style(e, t, n) : it.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                At(this) ? it(this).show() : it(this).hide()
            })
        }
    }), it.Tween = H, H.prototype = {
        constructor: H,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (it.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.pos = t = this.options.duration ? it.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = it.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                it.fx.step[e.prop] ? it.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[it.cssProps[e.prop]] || it.cssHooks[e.prop]) ? it.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, it.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, it.fx = H.prototype.init, it.fx.step = {};
    var hn, mn, gn = /^(?:toggle|show|hide)$/,
        vn = RegExp("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"),
        yn = /queueHooks$/,
        bn = [O],
        xn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = vn.exec(t),
                    o = i && i[3] || (it.cssNumber[e] ? "" : "px"),
                    a = (it.cssNumber[e] || "px" !== o && +r) && vn.exec(it.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, it.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    it.Animation = it.extend(B, {
            tweener: function(e, t) {
                it.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], xn[n] = xn[n] || [], xn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? bn.unshift(e) : bn.push(e)
            }
        }), it.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? it.extend({}, e) : {
                complete: n || !n && t || it.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !it.isFunction(t) && t
            };
            return r.duration = it.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in it.fx.speeds ? it.fx.speeds[r.duration] : it.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                it.isFunction(r.old) && r.old.call(this), r.queue && it.dequeue(this, r.queue)
            }, r
        }, it.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(At).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = it.isEmptyObject(e),
                    o = it.speed(t, n, r),
                    a = function() {
                        var t = B(this, it.extend({}, e), o);
                        (i || it._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = it.timers,
                        a = it._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && yn.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && it.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = it._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = it.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, it.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), it.each(["toggle", "show", "hide"], function(e, t) {
            var n = it.fn[t];
            it.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, r, i)
            }
        }), it.each({
            slideDown: _("show"),
            slideUp: _("hide"),
            slideToggle: _("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            it.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), it.timers = [], it.fx.tick = function() {
            var e, t = it.timers,
                n = 0;
            for (hn = it.now(); t.length > n; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || it.fx.stop(), hn = void 0
        }, it.fx.timer = function(e) {
            it.timers.push(e), e() ? it.fx.start() : it.timers.pop()
        }, it.fx.interval = 13, it.fx.start = function() {
            mn || (mn = setInterval(it.fx.tick, it.fx.interval))
        }, it.fx.stop = function() {
            clearInterval(mn), mn = null
        }, it.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, it.fn.delay = function(e, t) {
            return e = it.fx ? it.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e, t, n, r, i;
            t = ht.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = ht.createElement("select"), i = n.appendChild(ht.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(r.getAttribute("style")), nt.hrefNormalized = "/a" === r.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = i.selected, nt.enctype = !!ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !i.disabled, e = ht.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
        }();
    var wn = /\r/g;
    it.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = it.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, it(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : it.isArray(i) && (i = it.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = it.valHooks[this.type] || it.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = it.valHooks[i.type] || it.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
            }
        }
    }), it.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = it.find.attr(e, "value");
                    return null != t ? t : it.trim(it.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && it.nodeName(n.parentNode, "optgroup"))) {
                            if (t = it(n).val(), o) return t;
                            a.push(t)
                        } return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = it.makeArray(t), a = i.length; a--;)
                        if (r = i[a], it.inArray(it.valHooks.option.get(r), o) >= 0) try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), it.each(["radio", "checkbox"], function() {
        it.valHooks[this] = {
            set: function(e, t) {
                return it.isArray(t) ? e.checked = it.inArray(it(e).val(), t) >= 0 : void 0
            }
        }, nt.checkOn || (it.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tn, Cn, Nn = it.expr.attrHandle,
        En = /^(?:checked|selected)$/i,
        kn = nt.getSetAttribute,
        Sn = nt.input;
    it.fn.extend({
        attr: function(e, t) {
            return jt(this, it.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                it.removeAttr(this, e)
            })
        }
    }), it.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ct ? it.prop(e, t, n) : (1 === o && it.isXMLDoc(e) || (t = t.toLowerCase(), r = it.attrHooks[t] || (it.expr.match.bool.test(t) ? Cn : Tn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = it.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : (it.removeAttr(e, t), void 0))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(bt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = it.propFix[n] || n, it.expr.match.bool.test(n) ? Sn && kn || !En.test(n) ? e[r] = !1 : e[it.camelCase("default-" + n)] = e[r] = !1 : it.attr(e, n, ""), e.removeAttribute(kn ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!nt.radioValue && "radio" === t && it.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Cn = {
        set: function(e, t, n) {
            return t === !1 ? it.removeAttr(e, n) : Sn && kn || !En.test(n) ? e.setAttribute(!kn && it.propFix[n] || n, n) : e[it.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, it.each(it.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Nn[t] || it.find.attr;
        Nn[t] = Sn && kn || !En.test(t) ? function(e, t, r) {
            var i, o;
            return r || (o = Nn[t], Nn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Nn[t] = o), i
        } : function(e, t, n) {
            return n ? void 0 : e[it.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Sn && kn || (it.attrHooks.value = {
        set: function(e, t, n) {
            return it.nodeName(e, "input") ? (e.defaultValue = t, void 0) : Tn && Tn.set(e, t, n)
        }
    }), kn || (Tn = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Nn.id = Nn.name = Nn.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, it.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Tn.set
    }, it.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Tn.set(e, "" === t ? !1 : t, n)
        }
    }, it.each(["width", "height"], function(e, t) {
        it.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), nt.style || (it.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var An = /^(?:input|select|textarea|button|object)$/i,
        jn = /^(?:a|area)$/i;
    it.fn.extend({
        prop: function(e, t) {
            return jt(this, it.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = it.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), it.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !it.isXMLDoc(e), o && (t = it.propFix[t] || t, i = it.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = it.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : An.test(e.nodeName) || jn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || it.each(["href", "src"], function(e, t) {
        it.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), nt.optSelected || (it.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), it.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        it.propFix[this.toLowerCase()] = this
    }), nt.enctype || (it.propFix.enctype = "encoding");
    var Dn = /[\t\r\n\f]/g;
    it.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                l = this.length,
                u = "string" == typeof e && e;
            if (it.isFunction(e)) return this.each(function(t) {
                it(this).addClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dn, " ") : " ")) {
                        for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        a = it.trim(r), n.className !== a && (n.className = a)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof e && e;
            if (it.isFunction(e)) return this.each(function(t) {
                it(this).removeClass(e.call(this, t, this.className))
            });
            if (u)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dn, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? it.trim(r) : "", n.className !== a && (n.className = a)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : it.isFunction(e) ? this.each(function(n) {
                it(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = it(this), o = e.match(bt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Ct || "boolean" === n) && (this.className && it._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : it._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dn, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), it.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        it.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), it.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Ln = it.now(),
        Hn = /\?/,
        qn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    it.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = it.trim(t + "");
        return i && !it.trim(i.replace(qn, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : it.error("Invalid JSON: " + t)
    }, it.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || it.error("Invalid XML: " + t), n
    };
    var _n, Mn, On = /#.*$/,
        Fn = /([?&])_=[^&]*/,
        Bn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Wn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pn = /^(?:GET|HEAD)$/,
        Rn = /^\/\//,
        $n = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        zn = {},
        In = {},
        Xn = "*/".concat("*");
    try {
        Mn = location.href
    } catch (Un) {
        Mn = ht.createElement("a"), Mn.href = "", Mn = Mn.href
    }
    _n = $n.exec(Mn.toLowerCase()) || [], it.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mn,
            type: "GET",
            isLocal: Wn.test(_n[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
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
                "text json": it.parseJSON,
                "text xml": it.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, it.ajaxSettings), t) : R(it.ajaxSettings, e)
        },
        ajaxPrefilter: W(zn),
        ajaxTransport: W(In),
        ajax: function(e, t) {
            function n(e, t, n, r) {
                var i, c, v, y, x, T = t;
                2 !== b && (b = 2, s && clearTimeout(s), u = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = $(d, w, n)), y = z(d, y, w, i), i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (it.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (it.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, i = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]), w.statusCode(g), g = void 0, l && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]), m.fireWith(f, [w, T]), l && (p.trigger("ajaxComplete", [w, d]), --it.active || it.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, l, u, c, d = it.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? it(f) : it.event,
                h = it.Deferred(),
                m = it.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Bn.exec(a);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Mn) + "").replace(On, "").replace(Rn, _n[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = it.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (r = $n.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === _n[1] && r[2] === _n[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (_n[3] || ("http:" === _n[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = it.param(d.data, d.traditional)), P(zn, d, t, w), 2 === b) return w;
            l = d.global, l && 0 === it.active++ && it.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Pn.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Hn.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Fn.test(o) ? o.replace(Fn, "$1_=" + Ln++) : o + (Hn.test(o) ? "&" : "?") + "_=" + Ln++)), d.ifModified && (it.lastModified[o] && w.setRequestHeader("If-Modified-Since", it.lastModified[o]), it.etag[o] && w.setRequestHeader("If-None-Match", it.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[i](d[i]);
            if (u = P(In, d, t, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, u.send(v, n)
                } catch (T) {
                    if (!(2 > b)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return it.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return it.get(e, void 0, t, "script")
        }
    }), it.each(["get", "post"], function(e, t) {
        it[t] = function(e, n, r, i) {
            return it.isFunction(n) && (i = i || r, r = n, n = void 0), it.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), it.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        it.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), it._evalUrl = function(e) {
        return it.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, it.fn.extend({
        wrapAll: function(e) {
            if (it.isFunction(e)) return this.each(function(t) {
                it(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = it(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return it.isFunction(e) ? this.each(function(t) {
                it(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = it(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = it.isFunction(e);
            return this.each(function(n) {
                it(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                it.nodeName(this, "body") || it(this).replaceWith(this.childNodes)
            }).end()
        }
    }), it.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || it.css(e, "display"))
    }, it.expr.filters.visible = function(e) {
        return !it.expr.filters.hidden(e)
    };
    var Vn = /%20/g,
        Jn = /\[\]$/,
        Yn = /\r?\n/g,
        Gn = /^(?:submit|button|image|reset|file)$/i,
        Qn = /^(?:input|select|textarea|keygen)/i;
    it.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = it.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = it.ajaxSettings && it.ajaxSettings.traditional), it.isArray(e) || e.jquery && !it.isPlainObject(e)) it.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) I(n, e[n], t, i);
        return r.join("&").replace(Vn, "+")
    }, it.fn.extend({
        serialize: function() {
            return it.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = it.prop(this, "elements");
                return e ? it.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !it(this).is(":disabled") && Qn.test(this.nodeName) && !Gn.test(e) && (this.checked || !Dt.test(e))
            }).map(function(e, t) {
                var n = it(this).val();
                return null == n ? null : it.isArray(n) ? it.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Yn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Yn, "\r\n")
                }
            }).get()
        }
    }), it.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U()
    } : X;
    var Kn = 0,
        Zn = {},
        er = it.ajaxSettings.xhr();
    e.ActiveXObject && it(e).on("unload", function() {
        for (var e in Zn) Zn[e](void 0, !0)
    }), nt.cors = !!er && "withCredentials" in er, er = nt.ajax = !!er, er && it.ajaxTransport(function(e) {
        if (!e.crossDomain || nt.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, o = e.xhr(),
                        a = ++Kn;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, i) {
                        var s, l, u;
                        if (t && (i || 4 === o.readyState))
                            if (delete Zn[a], t = void 0, o.onreadystatechange = it.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            } u && r(s, l, u, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zn[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), it.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return it.globalEval(e), e
            }
        }
    }), it.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), it.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ht.head || it("head")[0] || ht.documentElement;
            return {
                send: function(r, i) {
                    t = ht.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var tr = [],
        nr = /(=)\?(?=&|$)|\?\?/;
    it.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tr.pop() || it.expando + "_" + Ln++;
            return this[e] = !0, e
        }
    }), it.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (nr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = it.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Hn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || it.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), a && it.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), it.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ht;
        var r = dt.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = it.buildFragment([e], t, i), i && i.length && it(i).remove(), it.merge([], r.childNodes))
    };
    var rr = it.fn.load;
    it.fn.load = function(e, t, n) {
        if ("string" != typeof e && rr) return rr.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = it.trim(e.slice(s, e.length)), e = e.slice(0, s)), it.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && it.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, a.html(r ? it("<div>").append(it.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, it.expr.filters.animated = function(e) {
        return it.grep(it.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ir = e.document.documentElement;
    it.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, u, c = it.css(e, "position"),
                d = it(e),
                f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = it.css(e, "top"), l = it.css(e, "left"), u = ("absolute" === c || "fixed" === c) && it.inArray("auto", [o, l]) > -1, u ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), it.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, it.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                it.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            if (o) return t = o.documentElement, it.contains(t, i) ? (typeof i.getBoundingClientRect !== Ct && (r = i.getBoundingClientRect()), n = V(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === it.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), it.nodeName(e[0], "html") || (n = e.offset()), n.top += it.css(e[0], "borderTopWidth", !0), n.left += it.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - it.css(r, "marginTop", !0),
                    left: t.left - n.left - it.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || ir; e && !it.nodeName(e, "html") && "static" === it.css(e, "position");) e = e.offsetParent;
                return e || ir
            })
        }
    }), it.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        it.fn[e] = function(r) {
            return jt(this, function(e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : (o ? o.scrollTo(n ? it(o).scrollLeft() : i, n ? i : it(o).scrollTop()) : e[r] = i, void 0)
            }, e, r, arguments.length, null)
        }
    }), it.each(["top", "left"], function(e, t) {
        it.cssHooks[t] = k(nt.pixelPosition, function(e, n) {
            return n ? (n = tn(e, t), rn.test(n) ? it(e).position()[t] + "px" : n) : void 0
        })
    }), it.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        it.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            it.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return jt(this, function(t, n, r) {
                    var i;
                    return it.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? it.css(t, n, a) : it.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), it.fn.size = function() {
        return this.length
    }, it.fn.andSelf = it.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return it
    });
    var or = e.jQuery,
        ar = e.$;
    return it.noConflict = function(t) {
        return e.$ === it && (e.$ = ar), t && e.jQuery === it && (e.jQuery = or), it
    }, typeof t === Ct && (e.jQuery = e.$ = it), it
}), window.DWait && DWait.run("jms/lib/jquery/jquery-stable.js");
DWait.ready(["jms/lib/jquery/jquery-stable.js"], function() {
    window.DWait && window.DWait.ready && window.DWait.run && (window.DWait.run(".jquery"), $(document).ready(function() {
        window.DWait.run(".domready"), window.DWait.ready(".allready", function() {
            window.DWait.run(".jqready")
        })
    })), window.DWait && DWait.run("jms/lib/jquery/jquery.current.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js"], function() {
    /**
     * @license
     * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
     *
     * Uses the built In easIng capabilities added In jQuery 1.1
     * to offer multiple easIng options
     *
     * Copyright (c) 2007 George Smith
     * Licensed under the MIT License:
     *   http://www.opensource.org/licenses/mit-license.php
     *
     */
    jQuery.easing.jswing = jQuery.easing.swing, jQuery.easing.def = "easeOutQuad", jQuery.extend(jQuery.easing, {
        swing: function(n, e, t, u, a) {
            return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
        },
        easeInQuad: function(n, e, t, u, a) {
            return u * (e /= a) * e + t
        },
        easeOutQuad: function(n, e, t, u, a) {
            return -u * (e /= a) * (e - 2) + t
        },
        easeInOutQuad: function(n, e, t, u, a) {
            return 1 > (e /= a / 2) ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
        },
        easeInCubic: function(n, e, t, u, a) {
            return u * (e /= a) * e * e + t
        },
        easeOutCubic: function(n, e, t, u, a) {
            return u * ((e = e / a - 1) * e * e + 1) + t
        },
        easeInOutCubic: function(n, e, t, u, a) {
            return 1 > (e /= a / 2) ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
        },
        easeInQuart: function(n, e, t, u, a) {
            return u * (e /= a) * e * e * e + t
        },
        easeOutQuart: function(n, e, t, u, a) {
            return -u * ((e = e / a - 1) * e * e * e - 1) + t
        },
        easeInOutQuart: function(n, e, t, u, a) {
            return 1 > (e /= a / 2) ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
        },
        easeInQuint: function(n, e, t, u, a) {
            return u * (e /= a) * e * e * e * e + t
        },
        easeOutQuint: function(n, e, t, u, a) {
            return u * ((e = e / a - 1) * e * e * e * e + 1) + t
        },
        easeInOutQuint: function(n, e, t, u, a) {
            return 1 > (e /= a / 2) ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
        },
        easeInSine: function(n, e, t, u, a) {
            return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
        },
        easeOutSine: function(n, e, t, u, a) {
            return u * Math.sin(e / a * (Math.PI / 2)) + t
        },
        easeInOutSine: function(n, e, t, u, a) {
            return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
        },
        easeInExpo: function(n, e, t, u, a) {
            return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
        },
        easeOutExpo: function(n, e, t, u, a) {
            return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t
        },
        easeInOutExpo: function(n, e, t, u, a) {
            return 0 == e ? t : e == a ? t + u : 1 > (e /= a / 2) ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
        },
        easeInCirc: function(n, e, t, u, a) {
            return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
        },
        easeOutCirc: function(n, e, t, u, a) {
            return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
        },
        easeInOutCirc: function(n, e, t, u, a) {
            return 1 > (e /= a / 2) ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
        },
        easeInElastic: function(n, e, t, u, a) {
            var r = 1.70158,
                i = 0,
                s = u;
            if (0 == e) return t;
            if (1 == (e /= a)) return t + u;
            if (i || (i = .3 * a), Math.abs(u) > s) {
                s = u;
                var r = i / 4
            } else var r = i / (2 * Math.PI) * Math.asin(u / s);
            return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * 2 * Math.PI / i)) + t
        },
        easeOutElastic: function(n, e, t, u, a) {
            var r = 1.70158,
                i = 0,
                s = u;
            if (0 == e) return t;
            if (1 == (e /= a)) return t + u;
            if (i || (i = .3 * a), Math.abs(u) > s) {
                s = u;
                var r = i / 4
            } else var r = i / (2 * Math.PI) * Math.asin(u / s);
            return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * 2 * Math.PI / i) + u + t
        },
        easeInOutElastic: function(n, e, t, u, a) {
            var r = 1.70158,
                i = 0,
                s = u;
            if (0 == e) return t;
            if (2 == (e /= a / 2)) return t + u;
            if (i || (i = a * .3 * 1.5), Math.abs(u) > s) {
                s = u;
                var r = i / 4
            } else var r = i / (2 * Math.PI) * Math.asin(u / s);
            return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * 2 * Math.PI / i) + t : .5 * s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * 2 * Math.PI / i) + u + t
        },
        easeInBack: function(n, e, t, u, a, r) {
            return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
        },
        easeOutBack: function(n, e, t, u, a, r) {
            return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
        },
        easeInOutBack: function(n, e, t, u, a, r) {
            return void 0 == r && (r = 1.70158), 1 > (e /= a / 2) ? u / 2 * e * e * (((r *= 1.525) + 1) * e - r) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
        },
        easeInBounce: function(n, e, t, u, a) {
            return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
        },
        easeOutBounce: function(n, e, t, u, a) {
            return 1 / 2.75 > (e /= a) ? u * 7.5625 * e * e + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
        },
        easeInOutBounce: function(n, e, t, u, a) {
            return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
        }
    }), window.DWait && DWait.run("jms/lib/jquery/plugins/jquery.easing.js")
});
DWait.ready(["jms/lib/gmi.js", "jms/lib/jquery/jquery.current.js", "jms/lib/Base.js"], function() {
    (function(t) {
        function i(i, e) {
            var n, r = t.isFunction(i) ? i : t.noop;
            return r !== t.noop || "string" != typeof i || e || (e = i), t.isFunction(e) ? n = e : e && window[e] && (n = window[e]),
                function() {
                    var i = this,
                        e = GMIBase.getOne(i, n);
                    return e ? (r && r.call(e, i), !e.gmi_lifecycle && (e.gmi_lifecycle = "constructed") && t(i).data("gmi_instance", e).bind("lifecycle", t.noop), e) : void 0
                }
        }

        function e(t, i, r, s) {
            if (s = s || "gmi-", "object" == typeof i) {
                for (var a in i) e(t, a, i[a], s);
                return t
            }
            return void 0 !== r ? (t.each(n, [i, r, s]), t) : n.call(t.get(0), i, r, s)
        }

        function n(i, e, n) {
            var r = t(this),
                s = n + i,
                a = void 0 !== e;
            if (a && r.attr(s, e), obj = r.data("gmi_instance")) {
                if (void 0 == i) return obj.gmi_args;
                a ? (obj.gmi_args[i] = e, this.dataset && this.dataset !== obj.gmi_args && (this.dataset[i] = e)) : e = obj.gmi_args[i]
            }
            return a ? e : e || r.attr(s)
        }
        window.$.fn.base = Base.extend({
            constructor: function(t, i, e) {
                this.gmi_node = t, this.gmi_args = i || {}, window.jQuery && (this.$ = jQuery(t)), jQuery.isFunction(e) ? this.inlineConstructor = e : jQuery.isObject(e) && jQuery.extend(this, e), this.gmiConstructor()
            },
            gmiConstructor: function() {
                this.inlineConstructor()
            },
            inlineConstructor: function() {},
            gmiDestructor: function() {},
            hooks: function() {}
        }), t.extend(t.fn, {
            gmi: function(t, e) {
                return this.map(i(t, e))
            },
            gmi1: function(e) {
                var n;
                return (n = this.get(0)) ? i(t.noop, e).call(n) : !1
            },
            gmiNodes: function(t, e) {
                return this.each(i(t, e))
            },
            gmiEach: function(e) {
                var n = t.expr[":"];
                return this.each(function() {
                    if (n["gmi-active"](this) || n.gmi(this)) {
                        var t = i().call(this);
                        if (t) return e.call(t, this)
                    }
                }), this
            },
            gmiWake: function() {
                return this.each(function() {
                    t(this).closest(":gmi").gmi()
                }), this
            },
            gmiUp: function() {
                return this.closest(":gmi").gmi()
            },
            gmiClean: function(i) {
                return this.each(function() {
                    1 === this.nodeType && (i && this.firstChild && t(this).find(":gmi-active").gmiClean(!1), t.cleanData(this), this.removeAttribute("gmindex"))
                }), this
            },
            gmiAttr: function(t, i, n) {
                return e(this, t, i, n)
            },
            gmiPurge: function() {
                var i = {
                        "data-gmiclass": !0,
                        name: !1,
                        id: !1
                    },
                    e = function(t, i) {
                        if (i) {
                            var e = t.substr(5);
                            this.removeData(e), this.removeAttr(t)
                        } else 0 === (this.attr(t) + "").indexOf("gmi-") && this.removeAttr(t)
                    };
                this.gmiClean(), this.each(function() {
                    t.each(i, t.proxy(e, t(this)))
                })
            }
        }), t.extend(t.expr[":"], {
            gmi: function(t, i, e) {
                var n = t.getAttribute("data-gmiclass");
                return n || (n = t.name || t.getAttribute("name") || t.id || !1, n = n && n.indexOf && 0 === n.indexOf("gmi-") ? n.substr(4) : !1), e && e[3] ? n == e[3] : !!n
            },
            "gmi-active": function(t) {
                return !!t.getAttribute("gmindex")
            }
        }), t.event.special.lifecycle = {
            setup: function() {
                return !1
            },
            teardown: function() {
                var i, e, n = t(this);
                if (i = n.data("gmi_instance")) {
                    if (n.removeData("gmi_instance"), i.gmi_lifecycle in {
                            deleted: "",
                            destructing: ""
                        }) return;
                    i.gmi_lifecycle = "destructing", i.gmiDestructor && i.gmiDestructor(), this.dataset && this.dataset === i.gmi_args && delete this.dataset, i.gmi_node = i.gmi_args = i.$ = null, i.gmi_lifecycle = "deleted"
                }
                return (e = n.attr("gmindex")) && (n.removeAttr("gmindex"), delete GMIBase.index[e]), !1
            }
        }, DWait.init("GMI.wake", function(i) {
            t(i).gmiUp()
        }, function(i) {
            var e = t(i).closest(":gmi");
            return !(e.data("gmi_instance") || e.attr("gmindex"))
        })
    })(jQuery), window.DWait && DWait.run("jms/lib/jquery/plugins/jquery.gmi.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js"], function() {
    (function(e) {
        e.fn.someData = function(a) {
            return e.isArray(a) || e.isPlainObject(a) || (a = Array.prototype.slice.call(arguments)), e.someData(this[0], a)
        }, e.someData = function(a, i) {
            var r, t, n, u = e(a),
                l = {},
                s = [];
            if (e.isArray(i)) s = i;
            else {
                if (!e.isPlainObject(i)) throw "Invalid list argument provided";
                for (r in i) s.push(r);
                l = e.extend(!0, {}, i)
            }
            if (u.length)
                for (t = 0, n = s.length; n > t; t++) r = s[t], value = u.data(r), void 0 !== value && null !== value && (l[r] = value);
            return l
        }
    })(jQuery), window.DWait && DWait.run("jms/lib/jquery/plugins/jquery.somedata.js")
});
! function(t, e, i) {
    function o(t, i) {
        var o, r = e.createElement(t || "div");
        for (o in i) r[o] = i[o];
        return r
    }

    function r(t) {
        for (var e = 1, i = arguments.length; i > e; e++) t.appendChild(arguments[e]);
        return t
    }

    function n(t, e, i, o) {
        var r = ["opacity", e, ~~(100 * t), i, o].join("-"),
            n = .01 + 100 * (i / o),
            a = Math.max(1 - (1 - t) / e * (100 - n), t),
            s = p.substring(0, p.indexOf("Animation")).toLowerCase(),
            l = s && "-" + s + "-" || "";
        return c[r] || (d.insertRule("@" + l + "keyframes " + r + "{" + "0%{opacity:" + a + "}" + n + "%{opacity:" + t + "}" + (n + .01) + "%{opacity:1}" + (n + e) % 100 + "%{opacity:" + t + "}" + "100%{opacity:" + a + "}" + "}", d.cssRules.length), c[r] = 1), r
    }

    function a(t, e) {
        var o, r, n = t.style;
        if (n[e] !== i) return e;
        for (e = e.charAt(0).toUpperCase() + e.slice(1), r = 0; u.length > r; r++)
            if (o = u[r] + e, n[o] !== i) return o
    }

    function s(t, e) {
        for (var i in e) t.style[a(t, i) || i] = e[i];
        return t
    }

    function l(t) {
        for (var e = 1; arguments.length > e; e++) {
            var o = arguments[e];
            for (var r in o) t[r] === i && (t[r] = o[r])
        }
        return t
    }

    function f(t) {
        for (var e = {
                x: t.offsetLeft,
                y: t.offsetTop
            }; t = t.offsetParent;) e.x += t.offsetLeft, e.y += t.offsetTop;
        return e
    }
    /**
     * @license
     * Copyright (c) 2011 Felix Gnass [fgnass at neteye dot de]
     * Licensed under the MIT license
     */
    var p, u = ["webkit", "Moz", "ms", "O"],
        c = {},
        d = function() {
            var t = o("style", {
                type: "text/css"
            });
            return r(e.getElementsByTagName("head")[0], t), t.sheet || t.styleSheet
        }(),
        h = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            corners: 1,
            color: "#000",
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "auto",
            left: "auto"
        },
        m = function m(t) {
            return this.spin ? (this.opts = l(t || {}, m.defaults, h), i) : new m(t)
        };
    m.defaults = {}, l(m.prototype, {
            spin: function(t) {
                this.stop();
                var e, i, r = this,
                    n = r.opts,
                    a = r.el = s(o(0, {
                        className: n.className
                    }), {
                        position: "relative",
                        width: 0,
                        zIndex: n.zIndex
                    }),
                    l = n.radius + n.length + n.width;
                if (t && (t.insertBefore(a, t.firstChild || null), i = f(t), e = f(a), s(a, {
                        left: ("auto" == n.left ? i.x - e.x + (t.offsetWidth >> 1) : parseInt(n.left, 10) + l) + "px",
                        top: ("auto" == n.top ? i.y - e.y + (t.offsetHeight >> 1) : parseInt(n.top, 10) + l) + "px"
                    })), a.setAttribute("aria-role", "progressbar"), r.lines(a, r.opts), !p) {
                    var u = 0,
                        c = n.fps,
                        d = c / n.speed,
                        h = (1 - n.opacity) / (d * n.trail / 100),
                        m = d / n.lines;
                    (function y() {
                        u++;
                        for (var t = n.lines; t; t--) {
                            var e = Math.max(1 - (u + t * m) % d * h, n.opacity);
                            r.opacity(a, n.lines - t, e, n)
                        }
                        r.timeout = r.el && setTimeout(y, ~~(1e3 / c))
                    })()
                }
                return r
            },
            stop: function() {
                var t = this.el;
                return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = i), this
            },
            lines: function(t, e) {
                function i(t, i) {
                    return s(o(), {
                        position: "absolute",
                        width: e.length + e.width + "px",
                        height: e.width + "px",
                        background: t,
                        boxShadow: i,
                        transformOrigin: "left",
                        transform: "rotate(" + ~~(360 / e.lines * l + e.rotate) + "deg) translate(" + e.radius + "px" + ",0)",
                        borderRadius: (e.corners * e.width >> 1) + "px"
                    })
                }
                for (var a, l = 0; e.lines > l; l++) a = s(o(), {
                    position: "absolute",
                    top: 1 + ~(e.width / 2) + "px",
                    transform: e.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: e.opacity,
                    animation: p && n(e.opacity, e.trail, l, e.lines) + " " + 1 / e.speed + "s linear infinite"
                }), e.shadow && r(a, s(i("#000", "0 0 4px #000"), {
                    top: "2px"
                })), r(t, r(a, i(e.color, "0 0 1px rgba(0,0,0,.1)")));
                return t
            },
            opacity: function(t, e, i) {
                t.childNodes.length > e && (t.childNodes[e].style.opacity = i)
            }
        }),
        function() {
            function t(t, e) {
                return o("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', e)
            }
            var e = s(o("group"), {
                behavior: "url(#default#VML)"
            });
            !a(e, "transform") && e.adj ? (d.addRule(".spin-vml", "behavior:url(#default#VML)"), m.prototype.lines = function(e, i) {
                function o() {
                    return s(t("group", {
                        coordsize: f + " " + f,
                        coordorigin: -l + " " + -l
                    }), {
                        width: f,
                        height: f
                    })
                }

                function n(e, n, a) {
                    r(u, r(s(o(), {
                        rotation: 360 / i.lines * e + "deg",
                        left: ~~n
                    }), r(s(t("roundrect", {
                        arcsize: i.corners
                    }), {
                        width: l,
                        height: i.width,
                        left: i.radius,
                        top: -i.width >> 1,
                        filter: a
                    }), t("fill", {
                        color: i.color,
                        opacity: i.opacity
                    }), t("stroke", {
                        opacity: 0
                    }))))
                }
                var a, l = i.length + i.width,
                    f = 2 * l,
                    p = 2 * -(i.width + i.length) + "px",
                    u = s(o(), {
                        position: "absolute",
                        top: p,
                        left: p
                    });
                if (i.shadow)
                    for (a = 1; i.lines >= a; a++) n(a, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (a = 1; i.lines >= a; a++) n(a);
                return r(e, u)
            }, m.prototype.opacity = function(t, e, i, o) {
                var r = t.firstChild;
                o = o.shadow && o.lines || 0, r && r.childNodes.length > e + o && (r = r.childNodes[e + o], r = r && r.firstChild, r = r && r.firstChild, r && (r.opacity = i))
            }) : p = a(e, "animation")
        }(), "function" == typeof define && define.amd ? define(function() {
            return m
        }) : t.Spinner = m
}(window, document), window.DWait && DWait.run("jms/thirdparty/lib/spin.js");
DWait.ready(["jms/dwait/dwait.js", "jms/lib/bind.js"], function() {
    (function() {
        var t = function(t, e, a) {
                t.addEventListener ? t.addEventListener(e, a, !1) : t.attachEvent && t.attachEvent("on" + e, a)
            },
            e = function(t, e, a) {
                t.removeEventListener ? t.removeEventListener(e, a, !1) : t.detachEvent && t.detachEvent("on" + e, a)
            };
        window.DWait && (DWait.download = function(a, n, r) {
            var d, i, o, s, c, l, u, m = document.getElementsByTagName("head")[0],
                h = document.getElementsByTagName("html")[0];
            for (a instanceof Array || (a = [a]), l = function(t, a, n) {
                    if (!t.readyState || "complete" == t.readyState || "loaded" == t.readyState || "IMG" == t.tagName) {
                        if (t.dwait_callback_done) return;
                        t.dwait_callback_done = !0, "string" == typeof a && (a = Function(a)), a(!0, t, t.getAttribute("src")), n && (e(n, "error", arguments.callee), n.parentNode.removeChild(n)), e(t, "load", arguments.callee), e(t, "readystatechange", arguments.callee), DWait.downloads[t.getAttribute("src")] = "completed"
                    }
                }, d = 0; d != a.length; d++)
                if (DWait.downloads[a[d]]) o = 1;
                else switch (DWait.downloads[a[d]] = !0, "string" == typeof r ? r : a[d].replace(/\?.*$/, "").split(".").pop().toLowerCase()) {
                    case "js":
                        i = document.createElement("script"), i.setAttribute("type", "text/javascript"), i.setAttribute("src", a[d]), i.setAttribute("charset", "utf-8"), n && (c = a[d], s = l.bind(this, i, n, !1), n = null, t(i, "load", s), t(i, "readystatechange", s)), m.appendChild(i);
                        break;
                    case "css":
                        i = document.createElement("link"), i.setAttribute("type", "text/css"), i.setAttribute("rel", "stylesheet"), i.setAttribute("href", a[d]), n && (c = a[d], u = document.createElement("img"), u.src = c, s = l.bind(this, i, n, u), t(i, "load", s), t(i, "readystatechange", s), t(u, "error", s), h.appendChild(u), n = null), m.appendChild(i);
                        break;
                    default:
                        throw Error('DWait cannot download "' + a[d] + '"')
                }
            o && n && setTimeout(n, 1)
        }), window.DWait && (DWait.downloads = {})
    })(), window.DWait && DWait.run("jms/dwait/download.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js"], function() {
    $(function() {
        function t(t) {
            var o = ["deviantart.com", "sta.sh", "deviantart.net", "micahgoulart.wixsite.com", "node.deviantart.lan:3000", "localhost:3000"];
            if ("admin.deviantart.com" == document.domain && o.push("support.deviantart.com", "deviantart.zendesk.com"), "backend.deviantart.com" == document.domain) return !0;
            var n = t.split("/")[2];
            return n ? RegExp("\\.(" + o.join("|").split(".").join("\\.") + ")$").test("." + n) : !0
        }
        window.self != window.top && "https:" == window.location.protocol && document.referrer && !t(document.referrer) && ($("body").empty(), $("<a>Go to DeviantArt.com</a>").attr({
            href: window.location.href,
            target: "_top"
        }).css({
            display: "block",
            position: "fixed",
            overflow: "hidden",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            "z-index": 9999,
            background: "#D6E1D1 url(//st.deviantart.net/minish/main/errors/logo.png) no-repeat",
            "text-decoration": "underline",
            padding: "40px 10px 10px 10px",
            color: "#0084B0",
            "font-size": "11px"
        }).appendTo("body"))
    }), window.DWait && DWait.run("jms/lib/clickjacking_blocker.js")
});
DWait.ready(["jms/lib/station.js", "cssms/lib/modals.css", "jms/lib/Base.js", "jms/lib/browser.js", "jms/lib/pubsub.js", "jms/lib/events.js", "jms/lib/popup2.js", "jms/lib/jquery/jquery.current.js"], function() {
    window.Modals = {
        $space: null,
        $fade: null,
        ready: !1,
        adopted_holder: !1,
        stack: [],
        init: function(e, s) {
            this.$space && this.$space.length ? this.$space.addClass(e).data("modal-class", e) : (this.$space = $("#modalspace"), this.$space.length ? this.adopted_holder = !0 : (this.$space = $('<div id="modalspace"></div>').appendTo(document.body), e && this.$space.addClass(e)), this.ready = !0), this.$fade || (this.$fade = $("#modalfade")), this.$fade.length || (this.$fade = $('<div id="modalfade"></div>').appendTo(document.body)), s && this.$fade.addClass(s)
        },
        topModal: function() {
            return Modals.stack.length ? Modals.stack[Modals.stack.length - 1][0] : null
        },
        push: function(e, s, a, o, t, n, d) {
            var l = Modals.topModal();
            if (Popup2.hideAll(), !Popup2.anyActivePopup() || e && e.is_modal_instance && e.options.ignoreinvincible) {
                Modals.init(t, n);
                var i;
                if (i = e.is_modal_instance ? e : Modals.factory(e, {
                        modalDOM: function() {
                            var e = $("<div>").addClass("loading modal").addClass(a);
                            return $('<a href="" />').addClass("x").on("click", function() {
                                return PubSub.publish("Modals.closeViaX", {
                                    id: d
                                }), Modals.pop("cancel"), !1
                            }).appendTo(e), e
                        }
                    }), i.modalspace_class = t, a && i.getjQNode().addClass(a), o || (l && (l.getDOM().style.zIndex = 199, l.removeShadow()), Modals.$space.show(), Modals.$fade.show()), Modals.stack.push([i, s]), this && this.no_form_hook || Events.hook(i.getDOM(), "submit", Modals.submit), !o) {
                    i.$content_node.css("display", "block");
                    var c = $("<div>").addClass("modal-wrapper").append(i.getDOM()),
                        r = $("<div>").addClass("modal-cel").append(c);
                    Modals.$space.append(r)
                }
                if (i.addShadow(), $("body").off("keyup.modals").on("keyup.modals", Modals.escape), PubSub.publish("PreviewStream.keyboard_stop"), PubSub.subscribe({
                        eventname: "Duperbrowse.closed",
                        subscriber: this,
                        callback: Modals.pop
                    }), this && this.no_form_hook || Events.hook(i.getDOM(), "click", Modals.click), 1 == Modals.stack.length) {
                    Popup2.hideOverlayElements(i.options.modalDOM({}));
                    var u = "modal-active";
                    u += Modals.$space.hasClass("absolute") ? " modal-is-absolute" : " modal-is-relative", $(document.body).addClass(u), Browser.isIE && (document.body.runtimeStyle.backgroundImage = "url(//st.deviantart.net/minish/main/blank.gif)", document.body.runtimeStyle.backgroundAttachment = "fixed")
                }
                return i.getDOM()
            }
        },
        pop: function(e) {
            if (Modals.stack.length) {
                var s = Modals.stack[Modals.stack.length - 1],
                    a = s[0].getDOM();
                if (s) {
                    if ("function" == typeof s[1]) {
                        var o = "FORM" == a.tagName ? a : $("form", a)[0];
                        if (0 == s[1].call(a, e, o ? Modals.serializeForm(o) : null)) return !1
                    }
                    a.onsubmit && a.onsubmit.calls && (Events.unhook(n, "submit", Modals.submit), Events.unhook(n, "click", Modals.click)), $("body").off("keyup.modals"), PubSub.publish("PreviewStream.keyboard_start"), a.parentNode && $(a).parents(".modal-cel").detach()
                }
                if (Modals.stack.pop(), 0 == Modals.stack.length) Popup2.showOverlayElements(), Modals.$space.css("display", "none"), Modals.$fade.css("display", "none").prop("class", ""), $(document.body).removeClass("modal-active modal-is-absolute modal-is-relative"), PubSub.unsubscribe({
                    eventname: "Duperbrowse.closed",
                    subscriber: this
                }), Modals.adopted_holder ? (Modals.$space.remove(), Modals.$space = null, Modals.ready = !1) : s && s[0] && s[0].modalspace_class && Modals.$space.removeClass(s[0].classname);
                else {
                    var t = Modals.topModal();
                    t.getDOM().style.zIndex = 201, t.addShadow()
                }
            }
        },
        close: function(e, s) {
            if (0 != Modals.stack.length)
                for (var a = Modals.stack.length - 1; a >= 0; a--)
                    if (Modals.stack[a][0] == e || Modals.stack[a][0].getDOM() == e) {
                        var o = Modals.stack[a];
                        Modals.stack.splice(a, 1), Modals.stack.push(o), Modals.pop(s);
                        break
                    }
        },
        escape: function(e) {
            if (27 == e.keyCode)
                if (Popup2.anyActivePopup()) Popup2.hideAll();
                else {
                    var s = Modals.stack[Modals.stack.length - 1];
                    if (s && s[0].options.disableEscape) return;
                    Modals.pop("cancel")
                }
        },
        click: function(e) {
            var s = void 0,
                a = e.srcElement || e.target;
            return ("INPUT" == a.tagName || (a = $(a).closest("button")[0])) && "submit" == a.type && (s = $(a).closest("form")[0]) && $(a).closest("div.modal")[0] == Modals.topModal().getDOM() ? (("cancel" == a.name || (window.validateForm ? validateForm(s, !0) : !0)) && Modals.pop(a.name), window.event && (event.cancelBubble = !0), !1) : void 0
        },
        submit: function() {
            return window.event && (event.cancelBubble = !0), !1
        },
        serializeForm: function(e) {
            for (var s = {}, a = Modals.getFormControls(e), o = a.length, t = 0; o > t; t++) {
                var n = a[t];
                if (n.name)
                    if ("radio" == n.type) n.checked && (s[n.name] = n.value);
                    else if ("checkbox" == n.type)
                    if (n.checked && n.name.indexOf("[]") > 0) {
                        var d = n.name.split("[]")[0];
                        s[d] || (s[d] = []), s[d].push(n.value)
                    } else s[n.name] = n.checked;
                else s[n.name] = n.value
            }
            return s
        },
        getFormControls: function(e, s) {
            var a = [];
            return $(e).find("input, select, textarea").each(function(e, o) {
                s && $(o).attr("name") !== s || a.push(o)
            }), a
        },
        updateSize: function(e, s) {
            if (Modals.stack.length) {
                var a = Modals.topModal();
                e && a.$node.width(e), s && a.$node.height(s), $(window).trigger("modal_resize", [a.getDOM(), a.getjQNode().width(), a.getjQNode().height()])
            }
        },
        getTopModalSize: function() {
            var e = Modals.topModal();
            if (Modals.stack.length) return {
                w: e.getjQNode().width(),
                h: e.getjQNode().height()
            }
        },
        factory: function(e, s) {
            return new window.ModalInstance(e, s)
        },
        adopt: function(e) {
            var s = Modals.factory($(e).find("*"));
            return s.$node = $(e), s
        }
    }, window.ModalInstance = Base.extend({
        is_modal_instance: !0,
        $content_node: null,
        $node: null,
        options: {},
        buttons: [],
        defaults: {
            showCloseButton: !0,
            showButtonsSeparator: !0,
            buttonContainerExtraClass: "",
            noShadows: !1,
            disableEscape: !1,
            modalDOM: function(e) {
                var s = "loading modal modal-rounded";
                e.extraClassy && (s += " " + e.extraClassy);
                var a = $("<div>").addClass(s);
                return e.showCloseButton && a.append($('<a href="" />').addClass("x").on("click", function() {
                    return PubSub.publish("Modals.closeViaX", {
                        identifier: e.identifier
                    }), Modals.pop("cancel"), !1
                })), a
            },
            identifier: null
        },
        constructor: function(e, s) {
            this.$content_node = $(e), this.options = {}, this.options = $.extend(this.options, this.defaults, s || {}), this.buttons = []
        },
        getjQNode: function() {
            return this.$node || (this.$node = $(this.options.modalDOM(this.options)).append(this.$content_node).append(this.makeButtons())), this.$node
        },
        getDOM: function() {
            return Popup2.hideOverlayElements(this.getjQNode()), this.getjQNode().get(0)
        },
        addShadow: function() {
            this.options.noShadows || this.getjQNode().addClass("with-shadow")
        },
        removeShadow: function() {
            this.getjQNode().removeClass("with-shadow")
        },
        addButton: function(e, s, a) {
            var o;
            switch (typeof a) {
                case "function":
                    o = a;
                    break;
                default:
                    a = "cancel";
                case "string":
                    o = function(e) {
                        e.preventDefault(), Modals.pop(a)
                    }
            }
            this.buttons.push({
                button_text: e || "Cancel",
                classes: s || "smbutton-lightgreen",
                click_cb: o
            })
        },
        makeButtons: function() {
            if (!this.buttons.length) return null;
            var e = "modal-button-holder" + (this.options.showButtonsSeparator ? " modal-separated " : " ") + this.options.buttonContainerExtraClass,
                s = $("<div>").addClass(e);
            return $.each(this.buttons, function(e, a) {
                s.append($('<a class="smbutton smbutton-size-default smbutton-shadow"></a>').addClass(a.classes).html(a.button_text).on("click", a.click_cb))
            }), s
        }
    }), window.DWait && DWait.run("jms/legacy/modals.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/ddt.js", "jms/lib/Base.js"], function() {
    (function() {
        var e = Base.extend({
            constructor: function() {
                this.subscriptions = {}, this.queued_payloads = {}
            },
            publish: function(e, s, n) {
                if (-1 === e.indexOf(".")) throw Error("PubSub has a naming convention you must follow: Package.event_name");
                if (this.subscriptions["*.*"] && "*.*" !== e && this.publish("*.*", {
                        eventname: e,
                        payload: s
                    }), this.subscriptions[e]) {
                    "*.*" === e || n || (ddt.log("PubSub", "Event", e, s), ddt.log("PubSub" + e.split(".")[0], e, s));
                    var t = [];
                    for (var i in this.subscriptions[e]) {
                        var r = this.subscriptions[e][i],
                            a = r.subscriber,
                            u = r.callback,
                            o = u.bind(a);
                        t.push({
                            callback: o,
                            eventname: e,
                            payload: s
                        })
                    }
                    for (var b in t) {
                        var c = t[b];
                        try {
                            c.callback(c.eventname, c.payload)
                        } catch (l) {
                            ddt.alert("PubSub", "Callback threw", {
                                err: l.message,
                                ev: c.eventname
                            }, ["pubsub"])
                        }
                    }
                } else this.queued_payloads[e] || (this.queued_payloads[e] = []), "*.*" === e || n || ddt.log("PubSub", "Queueing event", e, s), this.queued_payloads[e].push(s);
                return this._publish_to_parent(e, s, n), this
            },
            _publish_to_parent: function(e, s, n) {
                window.parent != window && window.parent.postMessage && window.parent.postMessage(this._create_message(e, s, n), "*")
            },
            _create_message: function(e, s, n) {
                n = n || !1;
                var t = {
                    _type: "PubSubEvent",
                    eventname: e,
                    payload: this._stringifyMessage({
                        _fromWindow: window.name,
                        data: s
                    }),
                    quiet: n
                };
                return this._stringifyMessage(t)
            },
            subscribe: function(e) {
                if (arguments.length > 1) throw Error("PubSub subscribe called with multiple arguments, you probably meant to use an array");
                var s;
                if (e instanceof Array) {
                    for (s in e) e.hasOwnProperty(s) && this.subscribe(e[s]);
                    return this
                }
                if (!e.eventname) throw Error("Must specify an eventname");
                if (!e.subscriber) throw Error("Must specify a subscriber for " + e.eventname);
                if (!e.callback) throw Error("Must specify a callback for " + e.eventname);
                if (-1 === e.eventname.indexOf(".")) throw Error("PubSub has a naming convention you must follow: Package.event_name");
                this.subscriptions[e.eventname] || (this.subscriptions[e.eventname] = []);
                var n = !1;
                for (s in this.subscriptions[e.eventname])
                    if (this.subscriptions[e.eventname][s].subscriber == e.subscriber) {
                        n = !0, ddt.log("PubSub", "Skipping subscription, already subscribed");
                        break
                    } if (!n) {
                    var t = {
                        subscriber: e.subscriber,
                        callback: e.callback
                    };
                    if (this.subscriptions[e.eventname].push(t), this.queued_payloads[e.eventname]) {
                        if (!e.empty_queue_if_first_subscriber)
                            for (var i in this.queued_payloads[e.eventname]) {
                                var r = this.queued_payloads[e.eventname][i];
                                ddt.log("PubSub", "Unqueueing event", e.eventname, r), this.publish(e.eventname, r)
                            }
                        delete this.queued_payloads[e.eventname]
                    }
                }
                return this
            },
            unsubscribe: function(e) {
                var s;
                if (e instanceof Array)
                    for (s in e) this.unsubscribe(e[s]);
                else {
                    if (!e.eventname) throw Error("Must specify an eventname");
                    if (!e.subscriber) throw Error("Must specify a subscriber");
                    if (-1 === e.eventname.indexOf(".")) throw Error('PubSub has a naming convention you must follow: Package.event_name. "' + e.eventname + '" is not acceptable.');
                    if (this.subscriptions[e.eventname]) {
                        var n = [];
                        for (var s in this.subscriptions[e.eventname]) {
                            var t = this.subscriptions[e.eventname][s];
                            t.subscriber != e.subscriber && n.push(t)
                        }
                        return delete this.subscriptions[e.eventname], n.length && (this.subscriptions[e.eventname] = n), this
                    }
                }
            },
            _stringifyMessage: function(e) {
                var s = [];
                try {
                    return JSON.stringify(e, function(e, n) {
                        if (n && (n.nodeType || n.window === n)) return "" + n;
                        if (n && "object" == typeof n && null !== n) {
                            if (-1 !== $.inArray(n, s)) return;
                            s.push(n)
                        }
                        return n
                    })
                } catch (n) {
                    return ddt.error("PubSub", "This payload can't be completely stringified", {
                        event: n,
                        obj: e
                    }), ""
                }
            }
        });
        window.PubSub = new e, window.PubSub.classdef = e
    })(), window.DWait && DWait.run("jms/lib/pubsub.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/ddt.js", "jms/lib/pubsub.js"], function() {
    (function() {
        var e = window.PubSub.classdef.extend({
            constructor: function() {
                this.base(), $(window).on("message", this.handlers.message_handler.bind(this))
            },
            handlers: {
                message_handler: function(e) {
                    try {
                        var t = JSON.parse(e.originalEvent.data);
                        t.payload && (t.payload = JSON.parse(t.payload))
                    } catch (s) {
                        return
                    }
                    t._type && "PubSubEvent" == t._type && this.publish(t.eventname, t.payload, t.quiet)
                }
            },
            publish: function(e, t, s) {
                "*.*" !== e && ddt.log("PubSubCrossFrame", "Event", e, "has bubbled up to window", window.name, t), this.base(e, t, s)
            },
            publishToWindow: function(e, t, s, a) {
                e && e.postMessage ? e.postMessage(this._create_message(t, s, a), "*") : ddt.error("PubSubCrossFrame", "Invalid target window", e)
            }
        });
        jQuery.fn.toJSON = function() {
            return "[object jQuery]"
        }, jQuery.Event.prototype.toJSON = function() {
            var e = "altKey bubbles button cancelable clientX clientY ctrlKey detail eventPhase keyCode layerX layerY metaKey pageX pageY shiftKey timeStamp type which x y".split(" "),
                t = {};
            return $.each(e, function(e, s) {
                t[s] = this[s]
            }), JSON.stringify(t)
        }, window.PubSubCrossFrame = new e, window.postMessage && window.postMessage(JSON.stringify({
            _type: "PubSubEvent",
            eventname: "PubSubCrossFrame.loaded",
            payload: JSON.stringify({})
        }), "*")
    })(), window.DWait && DWait.run("jms/lib/pubsubcrossframe.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/pubsub.js", "jms/lib/ddt.js", "jms/lib/glbl.js", "jms/lib/Base.js"], function() {
    (function(t) {
        var a = Base.extend({
            _a_state_was_pushed: !1,
            _ignore_hashchange_to: null,
            _previous_location: null,
            _current_state_id: null,
            _state_history: [],
            handlers: {
                push: function(a, e) {
                    var s = "Location.push" === a;
                    s || "string" != typeof e || (e = {
                        url: e
                    });
                    var i = t.extend({
                        state: null,
                        url: void 0,
                        replace: "Location.replace" === a
                    }, e);
                    if (this._set_location(i.url, e.replace)) {
                        if (Glbl("Location.pushstate_enabled")) {
                            try {
                                i.replace ? (history.replaceState(i.state, "", Glbl("Location.path")), ddt.log("Location", "Replaced state", i)) : (history.pushState(i.state, "", Glbl("Location.path")), ddt.log("Location", "Pushed state", i))
                            } catch (o) {
                                ddt.warn("Location", "Failed to push/replace state", o, e)
                            }
                            this._a_state_was_pushed = !0
                        } else i.replace ? this._replace_current_state_in_history(i) : this._push_state_to_history(i), i.url = this._add_state_to_url(i.url, i.state), window.location.hash = this._ignore_hashchange_to = i.url;
                        e.pageview && PubSub.publish("DaPx.update_pageview_data", e.pageview), PubSub.publish("Location.changed_from_push", {
                            origin: i.replace ? "replacestate" : "pushstate",
                            path: i.url,
                            state: i.state,
                            log_data: e.log_data
                        })
                    }
                },
                popstate: function(t) {
                    return this._a_state_was_pushed ? (this._set_to_current_browser_values() && PubSub.publish("Location.changed", {
                        origin: "popstate",
                        path: this._previous_location,
                        state: t.state
                    }), void 0) : (Glbl("Location.pushstate_enabled") && PubSub.publish("Location.changed_without_push", {
                        origin: "popstate",
                        path: this._previous_location,
                        state: t.state
                    }), void 0)
                },
                hashchange: function() {
                    var t = this._ignore_hashchange_to === window.location.hash;
                    this._ignore_hashchange_to = null, t || this._set_to_current_browser_values() && PubSub.publish("Location.changed", {
                        origin: "hashchange",
                        path: this._previous_location,
                        state: this._get_current_state_from_history()
                    })
                },
                redirect_to_canonical_url: function() {
                    ddt.log("Location", "Redirecting to canonical URL", Glbl("Location.path")), window.location = Glbl("Location.path")
                }
            },
            constructor: function() {
                this._set_to_current_browser_values(), PubSub.subscribe([{
                    eventname: "Location.set",
                    subscriber: this,
                    callback: this.handlers.push
                }, {
                    eventname: "Location.replace",
                    subscriber: this,
                    callback: this.handlers.push
                }, {
                    eventname: "Location.push",
                    subscriber: this,
                    callback: this.handlers.push
                }, {
                    eventname: "Location.redirect_to_canonical_url",
                    subscriber: this,
                    callback: this.handlers.redirect_to_canonical_url
                }]), window.addEventListener("popstate", this.handlers.popstate.bind(this)), t(window).bind("hashchange", this.handlers.hashchange.bind(this));
                var a = window.location.pathname + window.location.search;
                a != Glbl("Location.path") && PubSub.publish("Location.changed", {
                    path: a,
                    origin: "constructor",
                    state: null
                })
            },
            _set_to_current_browser_values: function() {
                var a = t("<div>").text(window.location.hash).html().substr(1),
                    e = !1;
                if (0 == a.length) e = !1;
                else try {
                    e = t("#" + a).length > 0
                } catch (s) {
                    e = !1
                }
                if (a.length > 0 && !e) {
                    var i = a.match(/[?&]_sid=([abcdef0-9]+)/);
                    return i ? (this._current_state_id = i[1], a = a.replace(i[0], "")) : this._current_state_id = null, this._set_location(a)
                }
                var o = window.location.pathname + window.location.search,
                    n = this._set_location(o);
                return !n && e && PubSub.publish("Location.anchor_changed", {
                    origin: "anchorchange",
                    path: window.location.pathname + window.location.search,
                    state: null
                }), n
            },
            _set_location: function(t, a) {
                return Glbl("Location.path") != t ? (this._previous_location = Glbl("Location.path"), Glbl("Location.path", t), this._set_params(), !0) : a ? !0 : !1
            },
            _get_current_state_from_history: function() {
                if (!this._current_state_id) return null;
                for (var t = this._state_history.length - 1; t >= 0; t--)
                    if (this._current_state_id === this._state_history[t].id) return this._state_history[t].state
            },
            _replace_current_state_in_history: function(t) {
                if (!this._current_state_id) return this._push_state_to_history(t);
                for (var a = this._state_history.length - 1; a >= 0; a--)
                    if (this._current_state_id === this._state_history[a].id) {
                        this._state_history[a].state = t;
                        break
                    }
            },
            _push_state_to_history: function(t) {
                if (Glbl("Location.pushstate_enabled")) throw "Location attempting to push hash state when pushState is enabled, wtf?";
                var a = this._state_history[this._state_history.length - 1] || {};
                if (this._current_state_id && this._current_state_id !== a.id)
                    for (var e = this._state_history.length - 1; e >= 0; e--)
                        if (this._current_state_id === this._state_history[e].id) {
                            this._state_history = this._state_history.slice(0, e + 1);
                            break
                        } t.id = this._current_state_id = Math.floor(2147483646 * Math.random()).toString(16), this._state_history.push(t)
            },
            _set_params: function() {
                var a = /\?(.*)/,
                    e = {},
                    s = Glbl("Location.path"),
                    i = function(t) {
                        var a;
                        t = t || "";
                        try {
                            a = decodeURIComponent(t.split("+").join(" "))
                        } catch (e) {
                            a = decodeURIComponent(escape(t.split("+").join(" ")))
                        }
                        return a
                    };
                a.test(s) && t.each(a.exec(s)[1].split("&"), function(t, a) {
                    var s = a.split("=");
                    try {
                        if (i(s[0]).match(/^(.*)\[\]$/g)) {
                            var o = i(s[0]).replace("[]", "");
                            return e[o] || (e[o] = []), e[o].push(i(s[1])), void 0
                        }
                        e[i(s[0])] = i(s[1])
                    } catch (n) {
                        ddt.warn("Location", "Failed to parse URI component", s, n)
                    }
                }), Glbl("Location.get_params", e)
            },
            _add_state_to_url: function(t, a) {
                return t = (t || "").replace(/[&?]_sid=[^&]*/, ""), null !== a && (t += (-1 === t.indexOf("?") ? "?" : "&") + "_sid=" + encodeURIComponent(this._current_state_id)), t
            }
        });
        Glbl("Location.pushstate_enabled", void 0 !== window.history && void 0 !== window.history.pushState), new a
    })(jQuery), window.DWait && DWait.run("jms/lib/location.js")
});
window.popup || (window.popup = function(e, n, t, o, i, w) {
    var e = e || "",
        t = t || 500,
        n = n || "DA",
        o = o || 600,
        a = (screen.width - t) / 2,
        p = (screen.height - o) / 2.1,
        r = window.open(e, n, "left = " + a + ", top = " + p + ", toolbar = 0, scrollbars = 1, location = 0, status = " + (w ? 1 : 0) + ", statusmenubar = 0, resizable = 1, width=" + t + ", height=" + o);
    return window.event && (event.cancelBubble = !0), i ? r : !1
}), window.DWait && DWait.run("jms/lib/popupwindow.js");
DWait.ready(["jms/lib/glbl.js"], function() {
    (function() {
        var t = window.self.location.hostname,
            i = window.self.location.pathname;
        Glbl("Site.is_deviantart", /\bdeviantart.com$/.test(t)), Glbl("Site.is_stash", /\bsta.sh$/.test(t) && !/^\/writer\//.test(i)), Glbl("Site.is_stash_writer", /\bsta.sh$/.test(t) && /^\/writer\//.test(i))
    })(), window.DWait && DWait.run("jms/lib/site.js")
});
GUID = {
    latest: 1e4,
    get: function() {
        return GUID.latest++
    }
}, window.DWait && DWait.run("jms/lib/guid.js");
DWait.ready(["jms/lib/jquery/jquery.current.js"], function() {
    Events = {
        hook: function(n, e, t) {
            return $(n).bind(e, t)
        },
        unhook: function(n, e, t) {
            return $(n).unbind(e, t)
        },
        stop: function() {
            return window.event && (window.event.cancelBubble = !0), !1
        }
    }, window.DWait && DWait.run("jms/lib/events.js")
});
DWait.ready(["jms/lib/browser.js", "jms/lib/ddt.js", "jms/lib/pubsub.js"], function() {
    PRIV_LOGGEDIN = -1, PRIV_VERIFIED = -100, DiFi = {
        _queue: [],
        _queuedType: "",
        _queuedPage: "",
        _queuedAd: [],
        _forceHttp: !1,
        metadataPrefix: 1,
        first_page: !0,
        _lastresponse: !1,
        _analogPayload: {},
        pushPublicStaticGet: function(e, i, a, r, t) {
            return DiFi.push("static", e, i, a, r, t)
        },
        pushPublicGet: function(e, i, a, r, t) {
            return DiFi.push("public", e, i, a, r, t)
        },
        pushPrivateGet: function(e, i, a, r, t) {
            return DiFi.push("private", e, i, a, r, t)
        },
        pushPost: function(e, i, a, r, t) {
            var o = DiFi.push("post", e, i, a, r, t);
            return window.PubSub && PubSub.publish("DiFi.pushPost", {
                api: e,
                method: i,
                args: a
            }), o
        },
        setAnalogPayload: function(e, i) {
            DiFi._analogPayload[e] = i
        },
        unsetAnalogPayload: function(e) {
            delete DiFi._analogPayload[e]
        },
        clearAnalogPayload: function() {
            DiFi._analogPayload = {}
        },
        _timer: null,
        timer: function(e) {
            DiFi._timer && (clearTimeout(DiFi._timer), e *= .6), DiFi._timer = setTimeout("DiFi.send()", e)
        },
        _siCallbacks: {},
        _pageCallbacks: {},
        push: function(e, i, a, r, t, o) {
            switch (e) {
                case "static":
                    DiFi._queuedType && "static" != DiFi._queuedType && DiFi.send(), DiFi._queuedType = "static";
                    break;
                case "public":
                    DiFi._queuedType || (DiFi._queuedType = "public");
                    break;
                case "private":
                    DiFi._queuedType in {
                        post: 0,
                        page: 0
                    } || (DiFi._queuedType = "private");
                    break;
                case "post":
                    DiFi._queuedType = "post";
                    break;
                default:
                    ddt.warn("difi", "Unknown type", e)
            }
            ddt.log("difi", "Push:", e, "(", DiFi._queuedType, ")", i, a, r), ("DeviationView" === i && "getExtrasHTML" === a || "MultiSubmit" === i && "sync_tabs" === a) && (DiFi._forceHttp = !0), DiFi._queue.push({
                "class": i,
                method: a,
                args: r,
                callback: t,
                callback_obj: o,
                original: arguments
            }), DiFi._queue.length > 80 && "post" != DiFi._queuedType && (DiFi._queuedType in {
                "static": 0,
                page: 0
            } ? DiFi.send() : DiFi._queuedType = "post")
        },
        cached: {},
        cache: function(e, i, a, r) {
            DiFi.cached[e + ";" + i + ";" + a.join(",")] = r
        },
        send: function() {
            var e, i, a, r, t, o, s, n, l, u, c, d, p, D, f, F, _;
            for (DiFi._timer && (clearTimeout(DiFi._timer), DiFi._timer = null), l = "", r = [], t = [], s = [], p = [], u = 0; a = DiFi._queue[u]; u++) a.args = DiFi._normalizeArgs(a.args), i = a["class"] + ";" + a.method, (e = DiFi.cached[i + ";" + a.args.join(",")]) ? (a.result = e, s.push(a)) : DiFi.overrides[i] && (e = DiFi.overrides[i](a["class"], a.method, a.args, a.callback, a.callback_obj)) ? (a.result = {
                request: {
                    "class": a["class"],
                    method: a.method,
                    args: a.args
                },
                response: {
                    status: "SUCCESS",
                    content: e
                }
            }, s.push(a)) : (n = i, window.Profile && deviantART.debug && p.push({
                api: a["class"],
                request: a.args,
                dre_horizontal: !0
            }), t.push([a.callback, a.callback_obj]), n == l ? (o = JSON.stringify(a.args), r[r.length - 1] += "," + DiFi._urlescapeCall(o)) : (o = JSON.stringify(a["class"]) + "," + JSON.stringify(a.method) + "," + JSON.stringify(a.args), r.push(DiFi._urlescapeCall(o)), l = n));
            if (F = "ui=" + (("; " + document.cookie + ";").match("; userinfo=([^;]*)") || [])[1], r = ("post" == DiFi._queuedType ? F + "&" : "") + "c%5B%5D=" + r.join("&c%5B%5D="), D = DiFi._queuedType, f = DiFi._queuedPage, DiFi._queue.length = 0, DiFi._queuedType = "", DiFi._queuedPage = "", t.length)
                if (r += "&iid=" + DiFi._urlescapeCall(Glbl("DaPx.last_logid") || 0), r += "&mp=" + DiFi.metadataPrefix++, Object.keys(DiFi._analogPayload).length > 0 && (_ = DiFi._normalizeArgs(DiFi._analogPayload), _ = JSON.stringify(_), r += "&ap=" + DiFi._urlescapeCall(_)), D in {
                        "public": 0,
                        "private": 0,
                        post: 0
                    }) r += "&t=json", window.Profile && deviantART.debug && Profile.add("DiFi", {
                    id: "N/A" + Math.round(1e4 * Math.random()),
                    uri: "/global/difi/",
                    type: "post" == D ? "Post" : "Private Get",
                    data: p
                }), DiFi._request("post" == D ? "POST" : "GET", r, t);
                else {
                    if ("static" != D) throw Error("Cannot send as " + D);
                    r += "&t=jsonp&callback=DiFi._callbackSI&extraarg=lookup", DiFi._siCallbacks[r] || (DiFi._siCallbacks[r] = []), DiFi._siCallbacks[r].push(t), e = document.createElement("script"), e.setAttribute("type", "text/javascript"), e.setAttribute("src", document.location.protocol + "//backend.deviantart.com/global/difi/?" + r), document.getElementsByTagName("head")[0].appendChild(e), window.Profile && deviantART.debug && Profile.add("DiFi", {
                        id: r,
                        type: "DiFi Backend Request"
                    })
                } for (u = 0; d = s[u]; u++) {
                var u;
                for ("function" == typeof d.callback && (d.callback = [d.callback], d.callback_obj = [d.callback_obj]), c = 0; d.callback && d.callback[c]; c++) d.callback[c].call(d.callback_obj[c], !0, d.result)
            }
            DiFi._forceHttp = !1
        },
        _asciiSafe: function(e) {
            return (e || "").replace(/[\x00\cA-\cG\cK\cL\cN-\cZ]/g, "")
        },
        _normalizeArgs: function(e, i) {
            if (e instanceof Array)
                for (var a = 0, r = e.length; r > a; a++) e[a] = DiFi._normalizeArgsImpl(e[a], i);
            else if ("object" == typeof e)
                for (var a in e) e === e[a] ? ddt.trace("difi", "Ignored attempt to normalize an object with circular references, key:", a) : e[a] = DiFi._normalizeArgsImpl(e[a], i);
            return e
        },
        _normalizeArgsImpl: function(e, i) {
            switch ("number" != typeof i && (i = 0), typeof e) {
                case "number":
                    e += "";
                    break;
                case "string":
                    e = DiFi._asciiSafe(e);
                    break;
                case "object":
                    100 > i && (e = DiFi._normalizeArgs(e, i + 1))
            }
            return e
        },
        _urlescapeCall: function(e) {
            return encodeURIComponent(e)
        },
        _request: function(e, i, a) {
            var r, t = "",
                o = !0;
            for (var s in a)
                for (var n in a[s]) void 0 === a[s][n] || window.$ && window.$.noop && a[s][n] === window.$.noop || (o = !1);
            o && (i += "&ace=true"), !deviantART.debug || 0 != window.location.href.indexOf("file:") && 5 != location.href.indexOf("//127.0.0.1/") || (Browser.isGecko && netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"), t = document.location.protocol + "//www.deviantart.com"), r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Msxml2.XMLHTTP"), "POST" == e ? (r.open(e, t + "/global/difi/?", !0), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")) : r.open(e, t + "/global/difi/?" + i, !0), window.Profile && deviantART.debug && Profile.add("DiFi", {
                id: "N/A" + Math.round(1e4 * Math.random()),
                type: "DiFi POST Request",
                src: unescape(i)
            }), Browser.isKHTML && (DiFi._safariTimer = setTimeout(function() {
                return r
            }, 1e5)), r.callbacks = a, r.onreadystatechange = function() {
                return DiFi._handleStateChange(this), !0
            }, r.send("POST" == e ? i : "")
        },
        _handleStateChange: function(e) {
            if (4 == e.readyState) {
                var i;
                if (200 == e.status && "" != e.responseText) {
                    Browser.isGecko && window.deviantART && deviantART.debug && 0 == window.location.href.indexOf("file:") && netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
                    try {
                        i = JSON.parse(DiFi._asciiSafe(e.responseText))
                    } catch (a) {
                        i = null, vms_feature("dre") && Browser.isIE && alert("IE DRE\n" + e.responseText)
                    }
                } else i = null;
                if (window.Profile && deviantART.debug && Profile.add("DiFi", {
                        id: "N/A" + Math.round(1e4 * Math.random()),
                        type: "DiFi XMLHTTP Response",
                        data: i || "ERROR: " + e.responseText
                    }), DiFi._lastresponse = e.responseText, 0 == e.status && DiFi._unloading) return;
                DiFi._handleCallbacks(e.callbacks, i), Browser.isKHTML && clearTimeout(DiFi._safariTimer)
            }
        },
        _callbackSI: function(e, i) {
            var a, r;
            if (window.Profile && deviantART.debug && Profile.add("DiFi", {
                    id: i,
                    type: "DiFi SI Response",
                    data: e
                }), e && e.DiFi && "SUCCESS" == e.DiFi.status)
                for (a = 0; r = e.DiFi.response.calls[a]; a++) "SUCCESS" == r.response.status && DiFi.cache(r.request["class"], r.request.method, r.request.args, r);
            if (DiFi._siCallbacks[i])
                for (; DiFi._siCallbacks[i].length > 0;) DiFi._handleCallbacks(DiFi._siCallbacks[i].shift(), e)
        },
        _handleCallbacks: function(e, i) {
            var a, r, t, o, s, n, l;
            for (o = i && i.DiFi && "SUCCESS" == i.DiFi.status, a = 0; r = e[a]; a++)
                if (r[0]) {
                    if (o ? (t = i.DiFi.response.calls[a], window.DIFI_RECORD && "SUCCESS" == t.response.status && DiFi.cache(t.request["class"], t.request.method, t.request.args, t)) : t = i && i.DiFi && i.DiFi.response.details && i.DiFi.response.details.calls ? i.DiFi.response.details.calls[a] : {
                            request: void 0,
                            response: {
                                status: "NOEXEC_HALT",
                                content: i && i.DiFi.response || {
                                    error: {
                                        code: "ERR_INVALID_RESPONSE",
                                        human: "No valid response received."
                                    }
                                }
                            }
                        }, r[0] instanceof Array || (r[0] = [r[0]], r[1] = [r[1]]), vms_feature("dre") && i && i.DiFi && i.DiFi.developer_info && i.DiFi.developer_info.profile_info && i.DiFi.developer_info.profile_info.dumpid) {
                        var u = i.DiFi.developer_info.profile_info;
                        ddt.log("difi", "DRE:", "https://admin.deviantart.com/dre/share?dumpid=" + u.dumpid + "&token=" + u.dumptoken)
                    }
                    if (t = t || {
                            response: {}
                        }, s = "SUCCESS" == (t.response || {}).status, l = 0, !s && t.request)
                        for (n = 0; h = this.errorHooks[n]; n++)
                            if (h(s, t, r)) {
                                l = 1;
                                break
                            } if (!l)
                        for (n = 0; n != r[0].length; n++) r[0][n] && (ddt.log("difi", "Callback:", t.request && t.request.method ? t.request["class"] + "." + t.request.method : "UNKNOWN", s, t), r[0][n].call(r[1][n], s, t))
                }
        },
        errorHooks: [],
        overrides: {},
        override: function(e, i, a) {
            i = e + ";" + i, DiFi.overrides[i] = a
        },
        STR_ERR_BUFFER_PERIOD: 500,
        stdErr: function(e, i, a) {
            var r;
            DiFi.stderr_output || (DiFi.stderr_output = []), r = this.stdErrFormat(i), i && i.error && "ERR_INVALID_RESPONSE" == i.error.code ? console.log("DiFi error: backend probably became unaccessible or ran into fatals", r) : (DiFi.stderr_output.push((e || "") + (e && r ? " - " : "") + (r || "") || "Unknown Error"), setTimeout(DiFi.stdErrKaboom, a ? 1 : DiFi.STR_ERR_BUFFER_PERIOD))
        },
        stdErrFormat: function(e) {
            return "string" == typeof e ? e : e && e.error ? e.error.human || e.error.details || e.error : "Unknown Error"
        },
        stdErrKaboom: function() {
            var e;
            DiFi.stderr_output.length && (e = DiFi.stderr_output.length > 1 ? "Some errors have occurred:\n\n- " : "An error has occurred:\n\n", e += DiFi.stderr_output.join("\n- "), DiFi.stderr_output = [], alert(e))
        },
        stdErrCallback: function(e, i) {
            return e || DiFi.stdErr("", i.response.content), e
        }
    };
    var e = !1;
    window.onbeforeunload && (e = window.onbeforeunload), window.onbeforeunload = function() {
        DiFi._unloading = !0, e && e()
    }, window.DWait && DWait.run("jms/lib/difi.js")
});
DWait.ready([".domready", "cssms/lib/popup.css", "jms/lib/pubsub.js", "jms/lib/glbl.js", "jms/lib/browser.js", "jms/lib/ddt.js", "jms/lib/jquery/jquery.current.js", "jms/lib/Base.js"], function() {
    var e = window.Popup2 = Base.extend({
        default_options: {
            classes: "",
            content: "",
            removed: !1,
            switched: !1,
            created: !1,
            shown: !1,
            hidden: !1,
            destroy: !1,
            invincible: !1,
            append: !1,
            blur_invincible: !1,
            events: []
        },
        constructor: function(t, i, s) {
            this.name = t, this.parent = i, this.$parent = $(i).first(), s = $.extend({}, this.default_options, s), this.events = s.events, s.classes && (this.classes = $.isFunction(s.classes) ? s.classes() : s.classes), this.destroy = s.destroy, this.invincible = s.invincible, this.blur_invincible = s.blur_invincible, this.append = s.append, this.content = s.content, this.created = s.created, this.shown = s.shown, this.hidden = s.hidden, this.switched_callback = s.switched, this.removed = s.removed, this.destroy && e.hideAll(), this.rendered = !1, e.popups[t] = this
        },
        visible: function() {
            return this.rendered ? this.$node.is(":visible") : !1
        },
        render: function() {
            var e;
            this.rendered || (this.$node = $("<div>", {
                "class": "popup2" + (this.classes ? " popup2-" + this.classes : "")
            }), e = $.isFunction(this.content) ? this.content() : this.content, "object" == $.type(e) ? this.$node.prepend($(e)) : this.$node.html(e), this.append ? this.$parent.append(this.$node) : this.$parent.prepend(this.$node), this.created && this.created.call(this, this), this.bindEvents(), this.rendered = !0)
        },
        bindEvents: function() {
            var e = function(e) {
                if ($(this).hasClass("disabled")) return !1;
                var t = e.data.cb.call(this, e);
                return "boolean" == $.type(t) && t === !1 ? t : (e.data.popup.hide(), t)
            };
            $.each(this.events, function(t, i) {
                i.selector || (i.selector = null), this.$node.on(i.event, i.selector, {
                    popup: this,
                    cb: i.callback
                }, e)
            }.bind(this))
        },
        default_position_options: {
            align: "left",
            valign: "bottom",
            keepOnScreen: !0,
            screenPadding: 5,
            absolute: !1,
            fixedElem: !1,
            bump: {
                top: 0,
                left: 0
            }
        },
        position: function(e, t) {
            this.render(), t = $.extend(!0, {}, this.default_position_options, t);
            var i, s = e.width(),
                n = e.height(),
                o = e.offset(),
                h = this.$node.width(),
                p = this.$node.height(),
                r = t.screenPadding,
                l = $(window).scrollLeft(),
                d = $(window).scrollTop(),
                a = $(window).width(),
                c = $(window).height();
            if (t.absolute) return i = t.bump;
            switch (i = o, t.fixedElem && (i.top -= d, i.left -= l), t.align) {
                case "center":
                    i.left += Math.round(s / 2), i.left -= Math.round(h / 2);
                    break;
                case "right":
                    i.left -= h, i.left += s
            }
            var u = !1;
            switch (t.valign) {
                case "top":
                    i.top -= p;
                    break;
                case "bottom":
                    i.top += n;
                    break;
                case "center":
                    i.top += Math.round(n / 2), i.top -= Math.round(p / 2), u = !0;
                    break;
                case "undertop":
                    u = !0
            }
            return u && ("left" == t.align ? i.left -= h : "right" == t.align && (i.left += h)), i.top += t.bump.top, i.left += t.bump.left, t.keepOnScreen && (t.fixedElem ? (i.left = Math.min(i.left, a - h), i.top = Math.min(i.top, c - p), i.left = Math.max(i.left, 0), i.top = Math.max(i.top, 0)) : (i.left = Math.min(i.left, l + a - r - h), i.top = Math.min(i.top, d + c - r - p), i.left = Math.max(i.left, l + r), i.top = Math.max(i.top, d + r))), i.right = i.left + s, i.bottom = i.top + n, i.width = s, i.height = n, i
        },
        show: function(t) {
            return this.render(), this.shown && this.shown.call(this, this), this.$node.hide(), this.$node.css("top", t.top + "px").css("left", t.left + "px"), this.$node.show(), e.hideOverlayElements(this.$node), !0
        },
        hide: function() {
            return this.render(), this.destroy ? (this.destroy = !1, this.remove(), void 0) : (this.hidden && this.hidden.call(this, this), this.$node.hide(), e.showOverlayElements(), void 0)
        },
        remove: function() {
            this.hide(), this.removed && this.removed.call(this, this), this.$node.remove(), delete e.popups[this.name]
        },
        switched: function() {
            this.render(), this.switched_callback && this.switched_callback.call(this, this), this.$node.hide()
        },
        addHotKeys: function(e, t) {
            for (var i = 0; t.length > i; i++) {
                if (t[i].modifiers.length > 0)
                    for (var s = 0; t[i].modifiers.length > s; s++) {
                        var n = t[i].modifiers[s];
                        switch (n) {
                            case "cmd":
                                t[i].key = Browser.isMac ? "&#8984;" + t[i].key : "Ctrl+" + t[i].key;
                                break;
                            case "shift":
                                t[i].key = Browser.isMac ? "&#8679;" + t[i].key : "Shift+" + t[i].key
                        }
                    }
                var o = this.$node.find(e + t[i].rel);
                o.find(".hotkey").remove(), o.append('<span class="hotkey">' + t[i].key + "</span>")
            }
        }
    }, {
        hideOverlayElements: function(t) {
            if (t && t.length) {
                var i = $(e.overlayElements).not(".never-hide-me, .menucompatible").not(function() {
                        return $(this).closest(".popup2").length > 0
                    }),
                    s = t.offset();
                s.right = s.left + t.width(), s.bottom = s.top + t.height();
                var n = function() {
                    var e = $(this).offset();
                    return e.right = e.left + $(this).width(), e.bottom = e.top + $(this).height(), e.right > s.left && s.right > e.left && e.bottom > s.top && s.bottom > e.top
                };
                i = i.filter(n), Glbl("Site.is_stash") && i.not(".objective embed, .objective object, #pdf-viewer object"), i.addClass("menucompatible"), PubSub.publish("AdhesionAd.disable")
            }
        },
        showOverlayElements: function() {
            var t = $(e.overlayElements).filter(":not(.never-hide-me), .menucompatible");
            t.removeClass("menucompatible"), PubSub.publish("AdhesionAd.enable")
        },
        overlayElements: "iframe, embed, object:not(.no-select), .popup-unfriendly, #flash_target_1" + (Browser.isIE ? ", #output select" : ""),
        popups: {},
        hideAll: function(t) {
            for (var i in e.popups) e.popups[i].invincible || t && e.popups[i].blur_invincible || !e.popups[i].visible() || e.popups[i].hide()
        },
        switchPopup: function(t, i) {
            for (var s in e.popups) s != t.name && e.popups[s].visible() && e.popups[s].switched();
            t.show(i)
        },
        anyActivePopup: function() {
            for (var t in e.popups)
                if (e.popups[t].visible()) return !0;
            return !1
        },
        activePopup: function() {
            for (var t in e.popups)
                if (e.popups[t].visible()) return t
        },
        getPopup: function(t) {
            return e.popups[t] ? e.popups[t] : !1
        },
        isVisible: function(t) {
            return e.getPopup(t) && e.getPopup(t).visible() ? !0 : !1
        },
        getActivePopup: function() {
            return e.getPopup(e.activePopup())
        },
        documentClick: function(t) {
            PubSub.publish("Popup2.document_clicked", t), e.anyActivePopup() && ($(t.target).closest("div.popup2").length || e.hideAll())
        }
    });
    $(document).bind("mousedown.popup2", e.documentClick), $(window).bind("resize.popup2", e.hideAll), vms_feature("dre") || Browser.isIE8 || $(window).bind("blur.popup2", function() {
        e.hideAll(!0)
    }), window.DWait && DWait.run("jms/lib/popup2.js")
});
DWait.ready(["jms/lib/station.js", "jms/lib/browser.js", "jms/lib/jquery/jquery.current.js"], function() {
    Ruler = {
        document: {
            jq_node: function(e) {
                var o = $(e),
                    t = o.offset(),
                    r = {
                        x: t.left,
                        y: t.top,
                        w: o.width(),
                        h: o.height()
                    };
                return r.x2 = r.x + r.w, r.y2 = r.y + r.h, r
            },
            node: function(e, o) {
                var t = e,
                    r = {
                        x: 0,
                        y: 0
                    };
                r.w = t.offsetWidth, r.h = t.offsetHeight;
                do r.x += t.offsetLeft, r.y += t.offsetTop; while (t = t.offsetParent);
                return r.x2 = r.x + r.w, r.y2 = r.y + r.h, o ? Ruler.scrollCompensate(e, r) : r
            },
            pointer: function(e, o) {
                var t = {
                    x: e.clientX,
                    y: e.clientY
                };
                return Browser.isIE ? (t.x += document.body.scrollLeft || document.documentElement.scrollLeft, t.y += document.body.scrollTop || document.documentElement.scrollTop) : (Browser.isOpera || Browser.isChrome || Browser.isSafari || !Browser.isKHTML) && (t.x += window.pageXOffset, t.y += window.pageYOffset), o && (t.x += o.x, t.y += o.y), Ruler.mouseCache = t, t
            }
        },
        screen: {
            rect: function() {
                return {
                    x: Browser.isGecko || Browser.isOpera ? window.pageXOffset : document.body.scrollLeft || document.documentElement.scrollLeft,
                    y: Browser.isGecko || Browser.isOpera ? window.pageYOffset : document.body.scrollTop || document.documentElement.scrollTop,
                    w: window.innerWidth || document.documentElement.offsetWidth,
                    h: window.innerHeight || document.documentElement.offsetHeight,
                    x2: window.innerWidth || document.documentElement.offsetWidth,
                    y2: window.innerHeight || document.documentElement.offsetHeight
                }
            },
            node: function(e, o, t) {
                var r, n;
                return r = Ruler.document.node(e, o), n = Browser.isGecko || Browser.isOpera ? window.pageYOffset : document.body.scrollTop || document.documentElement.scrollTop, r.y -= n, r.y2 -= n, t && (r.y -= t, r.y2 -= t), r
            },
            pointer: function(e, o) {
                var t = {
                    x: e.clientX,
                    y: e.clientY
                };
                return !Browser.isKHTML || Browser.isSafari || Browser.isChrome || (t.x -= window.pageXOffset, t.y -= window.pageYOffset), o && (t.x += o.x, t.y += o.y), t
            }
        },
        clickMod: function(e, o) {
            return e.x -= o.x, e.y -= o.y, e
        },
        hitTest: function(e, o, t) {
            var r;
            for (o instanceof Array || (o = [o]), i = 0; i != o.length; i++)
                if (r = o[i], t && t.y2_buffer && (r.y2 = r.y + r.h - t.y2_buffer), e.x > r.x + (t ? t.x : 0) && e.y > r.y + (t ? t.y : 0) && r.x2 + (t ? t.x : 0) > e.x && r.y2 + (t ? t.y : 0) > e.y) return i;
            return null
        },
        scrollCompensate: function(e, o) {
            var t, r, n;
            for (t = Browser.isGecko || Browser.isOpera, n = t ? window.pageYOffset : document.body.scrollTop || document.documentElement.scrollTop, r = t ? window.pageXOffset : document.body.scrollLeft || document.documentElement.scrollLeft;
                (e = e.parentNode) && e != document.body;) e.scrollTop && (o.y -= e.scrollTop, o.y2 -= e.scrollTop), e.scrollLeft && (o.x += e.scrollLeft, o.x2 -= e.scrollLeft), (window.getComputedStyle && "fixed" == getComputedStyle(e, "").getPropertyValue("position") || e.currentStyle && "fixed" == e.currentStyle.position || e.runtimeStyle && "fixed" == e.runtimeStyle.position) && (o.y -= n, o.y2 += n, o.x += r, o.x2 += r);
            return o
        }
    }, Ruler.document.mouse = Ruler.document.pointer, Ruler.screen.mouse = Ruler.screen.pointer, window.DWait && DWait.run("jms/lib/ruler.js")
});
DWait.ready(["jms/lib/browser.js"], function() {
    Station = {
        INTERVAL: 25,
        DRAW_EVERY_FRAME: !1,
        SPEED: 1,
        data: [],
        animations: [],
        passiveGet: function(t) {
            var o;
            for (o = 0; o != Station.data.length; o++)
                if (Station.data[o][0] == t) return Station.data[o];
            return null
        },
        addNode: function(t) {
            var o = [t, {}];
            return Station.data.push(o), o
        },
        activeGet: function(t) {
            return Station.passiveGet(t) || Station.addNode(t)
        },
        nullInterpolator: function(t) {
            return t
        },
        push: function(t, o) {
            var a, n, e, i, r, p, s;
            for (e = Station.activeGet(t), i = Station.animations.length, p = 2, s = (new Date).valueOf(); arguments[p];) "function" == typeof arguments[p] ? a = arguments[p] : (n = arguments[p].from, void 0 === n && (n = Station.read(e, o) || 0), a = {
                data: e,
                property: o,
                from: n,
                to: arguments[p].to,
                f: arguments[p].f || Station.nullInterpolator,
                marker: s
            }, "substr" == this.numbers[o] && (a.special = a.to, a.from = 0, a.to = a.special.length), a.velocity && (a.px = a.from - a.velocity), window.SPRINGY_THING && (a.time = null, a.f = Vadavadavada.spring), void 0 == arguments[p].time && arguments[p].f || (a.ticktock = 0, a.ticks = Math.max(Math.round((arguments[p].time || 0) * Station.SPEED / Station.INTERVAL), 1))), r ? r.STATION_next = a : Station.animations.push(a), r = a, p++, "string" == typeof arguments[p] && (o = arguments[p++]);
            return Station.loopOn(), i
        },
        run: function() {
            var t;
            return t = Station.push.apply(this, arguments), Station.loop(t), t
        },
        stopAnimation: function(t) {
            var o, a;
            for (o = 0; o != Station.animations.length; o++) a = Station.animations[o], a && a.data && a.data[0] == t && (Station.animations[o] = null)
        },
        numbers: {
            left: "px",
            top: "px",
            bottom: "px",
            right: "px",
            "left%": "%",
            marginLeft: "px",
            marginTop: "px",
            marginBottom: "px",
            marginRight: "px",
            paddingLeft: "px",
            paddingTop: "px",
            paddingBottom: "px",
            paddingRight: "px",
            borderLeft: "px",
            borderTop: "px",
            borderBottom: "px",
            borderRight: "px",
            width: "px",
            height: "px",
            fontSize: "px",
            opacity: "float",
            zoom: "float",
            scrollLeft: "direct",
            scrollTop: "direct",
            innerHTML: "direct",
            nodeValue: "substr",
            backgroundPositionX: "bgxhax",
            backgroundPositionY: "bgyhax",
            zIndex: "",
            letterSpacing: "px"
        },
        loop: function(t) {
            var o, a, n, e, i, r;
            if (Station.looper) {
                for (r = (new Date).valueOf(), a = t || 0; a != Station.animations.length; a++) {
                    if (t >= 0 && t != a) return;
                    if (o = Station.animations[a]) {
                        if (void 0 == t && (o.ticks || o.complete)) {
                            if (o.complete || o.ticktock >= o.ticks) {
                                for (Station.animations[a] = null;
                                    "function" == typeof o.STATION_next;) o.STATION_next.call(o, o.data[0]), o = o.STATION_next;
                                o.STATION_next && (o.STATION_next.marker = r, Station.animations.push(o.STATION_next));
                                continue
                            }
                            o.ticktock += Math.max(1, Math.floor((r - o.marker) * Station.SPEED / Station.INTERVAL)), o.marker = r, o.ticktock = Math.min(o.ticktock, o.ticks)
                        }
                        i = !0, "string" != typeof o.to && Station.numbers[o.property] ? o.ticks ? (n = o.ticktock / o.ticks, y = o.f(n), to = o.from + y * (o.to - o.from)) : (void 0 == o.px && (o.px = o.from), e = o.f(o.from - o.to, o.px - o.to), o.px = o.from, o.complete = e.complete, to = o.to + e.result, o.from = to) : to = o.to, Station.apply(o.data, o.property, to, o.special)
                    }
                }
                i || Station.loopOff()
            }
        },
        apply: function(t, o, a, n) {
            var e;
            if (t.nodeType && (t = Station.activeGet(t)), e = Station.numbers[o]) switch (e) {
                case "float":
                    Browser.isIE && "opacity" == o ? t[0].style.filter = "alpha(opacity=" + 100 * a + ")" : t[0].style[o] = a;
                    break;
                case "substr":
                    t[0][o] = n.substr(0, Math.round(a));
                    break;
                case "direct":
                    t[0][o] = a;
                    break;
                case "%":
                    t[0].style[o.replace(/%/g, "")] = Math.round(a) + "%";
                    break;
                case "bgxhax":
                    t[0].style.backgroundPosition = Math.round(a) + "px 0";
                    break;
                case "bgyhax":
                    t[0].style.backgroundPosition = "0 " + Math.round(a) + "px";
                    break;
                default:
                    t[0].style[o] = Math.round(a) + e
            } else t[0].style[o] = a;
            t[1][o] = a
        },
        loopOn: function() {
            Station.looper || (Station.looper = setInterval(Station.loop, Station.INTERVAL))
        },
        loopOff: function() {
            Station.looper && (clearInterval(Station.looper), Station.looper = null, Station.animations.length = 0)
        },
        stop: function(t) {
            Station.animations[t] = null
        },
        read: function(t, o) {
            var a;
            return a = t.nodeType ? Station.passiveGet(t) : t, a ? a[1][o] : Browser.isIE ? t.runtimeStyle[o] || t.currentStyle[o] : (o = o.replace(/([A-Z])/g, "-$1").toLowerCase(), t.style[o] || getComputedStyle(t, "").getPropertyValue(o))
        },
        looper: null,
        f: {
            inversion: function(t) {
                return function(o) {
                    return 1 - t(1 - o)
                }
            }
        },
        overlayEnd: function(t) {
            t.parentNode.removeChild(t)
        },
        overlay: function(t) {
            var o;
            return o = t.cloneNode(!0), Station.apply(o, "opacity", .99), Station.apply(o, "position", "absolute"), Station.apply(o, "width", t.offsetWidth), Station.apply(o, "zIndex", 30), o.disabled = !0, t.parentNode.insertBefore(o, t), o
        }
    };
    var t = 1;
    Interpolators = {
        line: function(t) {
            return t
        },
        sineCurve: function(t) {
            return Math.sin(.5 * Math.PI * t)
        },
        pulse: function(o) {
            var a, n;
            if (1 == t && 1 != o && (t = 1 / arguments.callee(1)), o = 8 * o, 1 > o) a = o - (1 - Math.exp(-o));
            else {
                var e = Math.exp(-1);
                o -= 1, n = 1 - Math.exp(-o), a = e + n * (1 - e)
            }
            return a * t
        }
    }, Vadavadavada = {
        spring: function(t, o) {
            var a, n, e;
            return e = t - o, n = .2, a = -t * n, e += a, t += e, t *= 1 - 1 / Math.pow(Math.abs(t / 2e3) + 1.3, 2), {
                result: t,
                complete: !(Math.round(t) || Math.round(o))
            }
        }
    }, window.DWait && DWait.run("jms/lib/station.js")
});
DWait.ready(["jms/lib/bind.js"], function() {
    LiquidSwitch = function(t, i) {
        this.f = t, this.initial_state = i, this.state = i
    }, LiquidSwitch.prototype = {
        destroy: function(t) {
            t || (this.state = this.start_state, this.target_time = null, this.tick()), this.ticker && clearInterval(this.ticker)
        },
        change: function(t, i, e, s) {
            var a;
            this.interrupt = !0, a = (new Date).valueOf(), this.target_time = this.target_time && t == this.target_state ? Math.min(this.target_time, a + i) : a + i, this.target_time = Math.max(this.target_time, (this.last_change || 0) + e), this.target_state = t, s && t == this.state && (this.state = null), this.ticker || (this.ticker = setInterval(this.tick.bind(this), 25), this.tick())
        },
        tick: function() {
            var t;
            t = (new Date).valueOf(), (!this.target_time || t >= this.target_time) && (this.ticker && clearInterval(this.ticker), this.ticker = null, this.target_time = null, this.target_state != this.state && (this.interrupt = !1, this.f(this.target_state, this.state) === !1 || this.interrupt || (this.last_change = t, this.state = this.target_state)))
        }
    }, window.DWait && DWait.run("jms/lib/liquidswitch.js")
});
DWait.ready(["jms/lib/pubsub.js", "jms/lib/station.js", "jms/lib/jquery/jquery.current.js"], function() {
    window.LitBox = {
        _disabled: !1,
        hover: function(t, i) {
            if (!LitBox._disabled) {
                var o = t.getAttribute("data-litbox-timeout");
                if (o) return clearTimeout(o), t.removeAttribute("data-litbox-timeout"), void 0;
                var e = $(t),
                    a = e.find("q"),
                    r = a.position(),
                    n = a.height() - e.height() + 10;
                0 >= n || (Station.stopAnimation(a[0]), Station.run(a[0], "top", {
                    from: r.top,
                    to: r.top - n,
                    time: i ? 3 * 25 * (n / 2) : 3 * 25 * n
                }))
            }
        },
        out: function(t) {
            if (!LitBox._disabled) {
                var i = t.getAttribute("data-litbox-timeout");
                if (!i) {
                    var o = this;
                    return t.setAttribute("data-litbox-timeout", setTimeout(function() {
                        o.out(t)
                    }, 0)), void 0
                }
                clearTimeout(i), t.removeAttribute("data-litbox-timeout"), t = t.getElementsByTagName("q")[0], Station.stopAnimation(t), Station.run(t, "display", {
                    to: "block",
                    time: 100
                }, "top", {
                    from: parseInt(Station.read(t, "top"), 10) || 0,
                    to: 0,
                    f: Interpolators.pulse,
                    time: 600
                })
            }
        },
        start: function() {
            LitBox._disabled = !1
        },
        stop: function(t, i) {
            if (i.length > 0) {
                var o = i.find("q");
                o.length > 0 && (Station.stopAnimation(o[0]), Station.apply(o[0], "top", 0))
            }
            LitBox._disabled = !0
        }
    }, PubSub.subscribe([{
        eventname: "LitBox.start",
        subscriber: LitBox,
        callback: LitBox.start,
        empty_queue_if_first_subscriber: !0
    }, {
        eventname: "LitBox.stop",
        subscriber: LitBox,
        callback: LitBox.stop,
        empty_queue_if_first_subscriber: !0
    }]), window.DWait && DWait.run("jms/lib/litbox.js")
});
DWait.ready(["jms/lib/events.js", "jms/lib/gmi.js"], function() {
    DTLocal = {}, DTLocal.infect = function(l) {
        var t;
        l.constructor && !l.constructor.localCache && (l.constructor.localCache = {});
        for (t in DTLocal.infection) l[t] = DTLocal.infection[t];
        l.local = {}
    }, DTLocal.infection = {
        localUID: function() {
            return this.local_uid_counter || (this.local_uid_counter = 100), this.local_uid_counter++
        },
        localDestroy: function() {
            this.localRecv && this.localRecv("lastcall"), this.localClean(), this.localRecv && this.localRecv("destroy")
        },
        localClean: function(l, t) {
            var o, e, c;
            for (o in this.local) {
                if ("function" == typeof l || l instanceof RegExp) {
                    if (l instanceof RegExp) {
                        if (!o.match(l)) continue
                    } else if (!(this.local[o] instanceof l)) continue;
                    c = o
                } else c = l || o;
                if (c in this.local) {
                    if (t || !this.local[c]) {
                        this.local[c] = null;
                        continue
                    }
                    if (this.local[c] instanceof Array) this.local[c][0] == clearInterval ? clearInterval(this.local[c][1]) : this.local[c][0] == clearTimeout ? clearTimeout(this.local[c][1]) : this.local[c][0].apply(this, this.local[c].slice(1));
                    else if (this.local[c].nodeType) this.local[c].parentNode && this.local[c].parentNode.removeChild(this.local[c]);
                    else {
                        if ("function" != typeof this.local[c].localDestroy && "function" != typeof this.local[c].gmiConstructor) continue;
                        e = this.local[c], this.local[c] = null, e.localDestroy ? e.localDestroy() : GMI._delete(e), delete e
                    }
                    delete this.local[c]
                }
                if ("string" == typeof l) return
            }
        },
        getLocalEventHook: function(l, t, o) {
            return Events.hook(l, t, o), [Events.unhook, l, t, o]
        },
        getLocalSetTimeout: function(l, t) {
            return [clearTimeout, setTimeout(l, t)]
        },
        getLocalSetInterval: function(l, t) {
            return [clearInterval, setInterval(l, t)]
        },
        localEventHook: function() {
            this.local[this.localUID()] = this.getLocalEventHook.apply(this, arguments)
        },
        localSetTimeout: function() {
            this.local[this.localUID()] = this.getSetTimeout.apply(this, arguments)
        },
        localSetInterval: function() {
            this.local[this.localUID()] = this.getSetInterval.apply(this, arguments)
        }
    }, window.DWait && DWait.run("jms/lib/dtlocal.js")
});
DWait.ready(["jms/lib/glbl.js", "jms/dwait/download.js", "jms/lib/pubsub.js", "jms/lib/bind.js", "jms/lib/jquery/jquery.current.js"], function() {
    window.gWebPage = {
        update: function(e, a, t) {
            var i, s;
            if (e.pageData && !(e.pageData instanceof Array))
                for (i in e.pageData) "deviant" == i ? deviantART.deviant = e.pageData[i] : deviantART.pageData[i] = e.pageData[i];
            if (e.title && e.title.length && (document.title = e.title), e.css && ($("style#difi-page-css").remove(), $("head").append('<style id="difi-page-css" type="text/css">' + e.css + "</style>")), e.rollups) {
                var l, d, i;
                for (l in e.rollups) DWait.R[l] = e.rollups[l]
            }
            if (e.deps)
                for (i = 0; e.deps.length > i; i++) {
                    var n = e.deps[i];
                    if (!(n[3] && n[3].media && !/Screen/.test(n[3].media) || DWait.L[n[0]]))
                        if ($('link[rel="stylesheet"][href^="' + n[1] + '"]').length > 0 || $('script[src^="' + n[1] + '"]').length > 0) DWait.R[n[1]] && delete DWait.R[n[1]];
                        else {
                            s = gWebPage.downloadDone.bind(gWebPage, n[1], a ? a.pull() : null);
                            var o;
                            o = n[2] ? n[1] + "?" + n[2] : n[1], DWait.download(o, s, n[3] && n[3].media ? "css" : "js")
                        }
                }
            if (e.downloads) {
                var l, d, i;
                for (l in e.downloads)
                    if (!DWait.T[l]) {
                        d = [];
                        for (i in e.downloads[l]) $('link[rel="stylesheet"][href^="' + e.downloads[l][i] + '"]').length > 0 || $('script[src^="' + e.downloads[l][i] + '"]').length > 0 || d.push(e.downloads[l][i]);
                        d.length && (DWait.T[l] = d)
                    } DWait.retrip()
            }
            if (e.dwaitcalls)
                for (i = 0; e.dwaitcalls.length > i; i++) DWait.ready.apply(t || this, e.dwaitcalls[i]);
            DWait.init_domready(), e.assets && PubSub.publish("gWebPage.assets", e.assets), PubSub.publish("gWebPage.update", e)
        },
        downloadDone: function(e, a) {
            DWait.unroll(e), a && a()
        }
    }, window.DWait && DWait.run("jms/lib/gwebpage.js")
});
window.SpinnerPresets = {
    green: {
        lines: 15,
        length: 0,
        width: 3,
        radius: 4,
        color: "#84b247",
        trail: 60,
        shadow: !1,
        hwaccel: !1,
        zIndex: 1
    },
    big_white: {
        lines: 15,
        length: 15,
        width: 5,
        radius: 20,
        color: "#fff",
        trail: 60,
        shadow: !0,
        hwaccel: !1,
        zIndex: 1
    }
}, window.DWait && DWait.run("jms/lib/spinpreset.js");
REG_OLD_DEVIATION_2 = /^h[t]tps?:\/\/()www.deviantart\....\/(?:deviation|view)\/()([0-9]+)\/?(?:\?.*)?$/, REG_DEVIATION_2 = /^h[t]tps?:\/\/([^\.]+)\.deviantart\....\/(?:art\/|journal\/)?([0-9A-Za-z\-\.]+)\-([0-9]+)\/?(?:\?.*)?$/, REG_DEVIATION_3 = /^h[t]tps?:\/\/([^\.]+)\.deviantart\....\/(?:[0-9A-Za-z\-\_]+)\/(?:art\/|journal\/)?([0-9A-Za-z\-\.]+)\-([0-9]+)\/?(?:\?.*)?$/, REG_COLLECTION = /^h[t]tps?:\/\/([^\.]+)\.deviantart\....\/(?:gallery|favourites)\/\#_?()([0-9A-Za-z\-]+)\/?$/, REG_COLLECTION_2 = /^h[t]tps?:\/\/([^\.]+)\.deviantart\....\/(?:[0-9A-Za-z\-\_]+)\/(?:gallery|favourites)\/\#_?()([0-9A-Za-z\-]+)\/?$/, RESOURCE_DEVIATION = 1, RESOURCE_GALLERIES = 20, RESOURCE_FAVCOLLECTIONS = 21, MYSTERY = 0, window.DWait && DWait.run("jms/pages/lub/lub_constants.js");
DWait.ready(["cssms/pages/misc/subble.css", "jms/lib/ruler.js", "jms/lib/jquery/jquery.current.js"], function() {
    window.Subby = {
        warning: function(t, e, s, i) {
            var n, o, r, u = $(t);
            e = void 0 === e ? "Get" : e || "", s = s || "this feature", i = i ? " " + i : "", upsell_text = "as a <strong>Core Deviant</strong>", o = '<div class="subblebubble">' + e + " <strong>" + s + "</strong>" + i + " " + upsell_text + " </div>", n = $(o).css({
                visibility: "hidden",
                position: "absolute",
                "z-index": 300
            }).appendTo("body"), u.addClass("subble").data("subby", n), r = Subby.getPosition(n[0], Ruler.document.jq_node(t)), n.css({
                left: r.x,
                top: r.y,
                visibility: "visible"
            })
        },
        getPosition: function(t, e) {
            var s, i;
            return i = {
                x: e.x,
                y: e.y2,
                w: t.offsetWidth,
                h: t.offsetHeight
            }, i.x2 = i.x + i.w, i.y2 = i.y + i.h, s = Ruler.screen.rect(), i.x2 + 30 > s.x2 && (i.x = Math.max(0, e.x2 - i.w), i.x2 = i.x + i.w), i.y2 > s.y2 && (i.y = Math.max(0, e.y - i.h), i.y2 = i.y + i.h), i
        },
        out: function(t) {
            var e;
            e = $(t).data("subby"), e && e.remove(), $(t).data("subby", null)
        },
        getPremiumCheckoutUrl: function(t) {
            var e = "https://www.deviantart.com/core-membership/";
            return t && (e += "&point=" + t), e
        }
    }, window.DWait && DWait.run("jms/pages/subby.js")
});
DWait.ready(["cssms/pages/misc/subble.css", "jms/lib/jquery/jquery.current.js"], function() {
    (function() {
        var t = "l",
            i = "r",
            s = "t",
            o = "b";
        window.QuickTip = {
            show: function(t, i, s) {
                var o, p = $(t);
                o = p.data("quicktip"), o || (o = new n(p, i, s), p.data("quicktip", o)), o.show()
            }
        };
        var n = function(i, s, n) {
            var e = {
                timeout: null,
                mode: "mouseover",
                close_wait: 150,
                visible: !1,
                gravity: {
                    x: t,
                    y: o
                },
                position: {
                    x: 0,
                    y: 0
                },
                classes: ""
            };
            this.options = $.extend(e, n || {}), this.template = p[s || "simple"], this.$anchor = i, this.build_body(), this.build_tip()
        };
        n.prototype = {
            show: function() {
                if (this.$tip.closest("html").length || this.$tip.appendTo("body"), !this.cancel_close() && !this.options.visible) {
                    switch (this.calculate_position(), this.options.mode) {
                        case "only_close_on_outside_click":
                            $(document).on("click.quicktip", this.close.bind(this));
                            break;
                        default:
                            this.$anchor.on("mouseleave.quicktip", this.close.bind(this)), this.$tip.on("mouseenter.quicktip", this.cancel_close.bind(this)).on("mouseleave.quicktip", this.close.bind(this))
                    }
                    this.options.visible = !0, this.template.show.call(this)
                }
            },
            build_body: function() {
                var t = this.$anchor.data(),
                    i = $("<div>").addClass("message");
                if (t.quicktipTitle && i.append($("<strong>").text(t.quicktipTitle)), t.quicktipText) {
                    var s = $("<span>").text(t.quicktipText);
                    i.append(s.text().replace(":br:", "<br>"))
                }
                t.quicktipFinal && i.append($("<em>").text(t.quicktipFinal)), t.quicktipFinalStrong && i.append($("<strong>").text(t.quicktipFinalStrong)), this.$tip_body = i
            },
            build_tip: function() {
                var t = this.$anchor.data(),
                    i = !1;
                t.quicktipHref && t.quicktipHref.match("^https?://") ? i = t.quicktipHref : this.$anchor.is("a") && (i = this.$anchor.attr("href")), i ? (this.$tip = $("<a>").attr("href", i), this.$anchor.attr("target") && this.$tip.attr("target", this.$anchor.attr("target")), this.$anchor.attr("onclick") && this.$tip.attr("onclick", this.$anchor.attr("onclick"))) : this.$tip = $("<div>"), this.$tip.addClass(this.options.classes).addClass(this.template.classes || "").append(this.$tip_body)
            },
            calculate_position: function() {
                var o = $(window).width(),
                    n = this.$anchor.offset(),
                    p = this.$anchor.outerWidth(),
                    e = this.$anchor.outerHeight(),
                    a = this.$tip.outerHeight(),
                    h = this.$tip.width();
                this.$tip.removeClass("gravity-" + this.options.gravity.y + this.options.gravity.x), n.left + h > o ? this.options.gravity.x = i : 0 > n.left - h && (this.options.gravity.x = t), 0 > n.top - a && (this.options.gravity.y = s), this.options.position.x = this.options.gravity.x === t ? n.left : n.left + p - h, this.options.position.y = this.options.gravity.y === s ? n.top + e : n.top - a, this.$tip.addClass("gravity-" + this.options.gravity.y + this.options.gravity.x)
            },
            cancel_close: function() {
                return this.options.timeout ? (clearTimeout(this.options.timeout), this.options.timeout = null, !0) : !1
            },
            close: function() {
                var t = this;
                this.options.timeout = setTimeout(function() {
                    t.template.close.call(t), t.cancel_close(), t.$tip.off(".quicktip"), t.$anchor.off(".quicktip"), t.options.visible = !1
                }, this.options.close_wait)
            }
        };
        var p = {
            fade_up_in: {
                classes: "quicktip",
                show: function() {
                    var t = this.options.gravity.y == o ? 10 : -10;
                    this.$tip.css({
                        top: this.options.position.y + t,
                        left: this.options.position.x
                    }).show().animate({
                        top: this.options.position.y,
                        opacity: 1
                    })
                },
                close: function() {
                    var t = this.options.gravity.y == o ? 10 : -10,
                        i = this;
                    this.$tip.animate({
                        top: i.options.position.y + t,
                        opacity: 0
                    }, function() {
                        i.$tip.hide()
                    })
                }
            },
            subby: {
                classes: "quicktip",
                show: function() {
                    this.options.position.x += this.options.gravity.x == t ? -5 : 5, p.fade_up_in.show.call(this)
                },
                close: function() {
                    p.fade_up_in.close.call(this)
                }
            },
            submit: {
                classes: "quicktip white-tip",
                show: function() {
                    this.options.position.x += this.options.gravity.x == t ? -5 : 5, p.fade_up_in.show.call(this)
                },
                close: function() {
                    p.fade_up_in.close.call(this)
                }
            },
            password: {
                classes: "quicktip simple-tip",
                show: function() {
                    this.$tip.css({
                        top: this.$anchor.offset().top - this.$tip.outerHeight() + 33,
                        left: this.$anchor.offset().left - 8 - this.$tip.outerWidth(),
                        opacity: 1
                    }).removeClass("gravity-" + this.options.gravity.y + this.options.gravity.x).addClass("right-bottom").show()
                },
                close: function() {
                    this.$tip.hide()
                }
            },
            simple: {
                classes: "quicktip simple-tip",
                show: function() {
                    this.$tip.css({
                        top: this.options.position.y,
                        left: this.options.position.x,
                        opacity: 1
                    }).show()
                },
                close: function() {
                    this.$tip.hide()
                }
            },
            symbol: {
                classes: "quicktip simple-tip",
                show: function() {
                    this.$tip.css({
                        top: this.options.position.y - 4,
                        left: this.options.position.x - 5,
                        opacity: 1
                    }).show()
                },
                close: function() {
                    this.$tip.hide()
                }
            }
        }
    })(), window.DWait && DWait.run("jms/pages/quicktip.js")
});
DWait.ready(["jms/lib/ddt.js", "jms/lib/jquery/jquery.current.js", "jms/lib/Base.js"], function() {
    window.GMIBase || (window.GMIBase = Base.extend({
        constructor: function(e, t) {
            this.gmi_node = e, this.gmi_args = t || {}, window.jQuery && (this.$ = jQuery(e)), this.gmiConstructor()
        },
        gmiConstructor: function() {},
        gmiQuery: function(e, t, n, r) {
            var i, a, o, s, u, m, g, d, c;
            if ("string" == typeof arguments[0] && (r = arguments[2], n = arguments[1], t = arguments[0], e = this.gmi_node || document), n || (n = {}), g = [], i = document.getElementsByName("gmi-" + t), e != document) {
                for (a = [], o = 0; o != i.length; o++)
                    for (s = i[o]; s; s = s.parentNode)
                        if (s == e) {
                            a.push(i[o]);
                            break
                        }
            } else a = i;
            for (d = GMIBase.getConstructor(t), o = 0; u = a[o]; o++) {
                if (n.match) {
                    m = 1;
                    for (s in n.match)
                        if ((u.getAttribute("gmi-" + s) || "") + "" != n.match[s] + "") {
                            m = 0;
                            break
                        } if (!m) continue
                }
                c = GMIBase.getOne(u, d, r), -1 != c && null != c && g.push(c)
            }
            return g
        },
        gmiQueryAsync: function(e, t, n, r, i) {
            var a, o, s, u, m, g, d, c;
            if ("string" == typeof arguments[0] && (r = arguments[2], n = arguments[1], t = arguments[0], e = this.gmi_node || document), n || (n = {}), g = [], a = document.getElementsByName("gmi-" + t), e != document) {
                for (o = [], s = 0; s != a.length; s++)
                    for (u = a[s]; u; u = u.parentNode)
                        if (u == e) {
                            o.push(a[s]);
                            break
                        }
            } else o = a;
            d = GMIBase.getConstructor(t);
            var l = 0,
                f = o.length;
            setTimeout(function M() {
                if (m = o[l], f > l) {
                    var e = !0;
                    if (n.match)
                        for (u in n.match)
                            if ((m.getAttribute("gmi-" + u) || "") + "" != n.match[u] + "") {
                                e = !1;
                                break
                            } e && (c = GMIBase.getOne(m, d, r), -1 != c && null != c && g.push(c)), ++l, setTimeout(M, 1)
                } else i && i(g)
            }, 1)
        },
        gmiUp: function(e, t, n) {
            var r, i, a;
            r = arguments[0] && arguments[0].nodeType ? 1 : 0, i = r ? arguments[0] : this.gmi_node, e = arguments[0 + r], t = arguments[1 + r], n = arguments[2 + r], e && (e = "gmi-" + e);
            for (var o = {}; n || (i = i.parentNode);)
                if (n = !1, i.getAttribute)
                    if (a = i.getAttribute("gmi-redirect"), a && o[i] && window.console && console.log("thwarted gmi-redirect loop", e, i), a && !o[i]) o[i] = !0, i = GMIBase.index[a].gmi_node, n = 1;
                    else if (i.getAttribute("name") && (!e || i.getAttribute("name") == e)) {
                if (t) {
                    t--;
                    continue
                }
                return GMIBase.getOne(i)
            }
        },
        gmiApply: function(e, t, n, r) {
            var i, a;
            return e.setAttribute("gmindex", a = ++GMIBase.current_lookup), r || (e.setAttribute("id", "gmi-" + t), e.id = "gmi-" + t), e.setAttribute("name", "gmi-" + t), e.name = "gmi-" + t, i = GMIBase.getConstructor(t), GMIBase.index[a] = new i(e, n)
        },
        gmiCreate: function(e, t) {
            return GMI.gmiApply(document.createElement("div"), e, t)
        },
        gmiRefresh: function() {
            for (i in this.gmi_args) this.$.attr("gmi-" + i, this.gmi_args[i])
        }
    }), GMIBase.index = {}, GMIBase.current_lookup = 0, GMIBase.getOne = function(node, constructor_shortcut, passive) {
        var eax, i, a, options;
        if (i = node.getAttribute("gmindex"), !i) {
            if (passive) return null;
            for (options = {}, i = 0; a = node.attributes[i]; i++) 0 == a.name.indexOf("gmi-") ? options[a.name.substr(4)] = a.value : 0 == a.name.indexOf("gmon-") ? options[a.name.substr(5)] = eval("(" + a.value + ")") : 0 == a.name.indexOf("data-") && (options[a.name.substr(5)] = a.value);
            node.dataset || (node.dataset = options), node.setAttribute("gmindex", i = ++GMIBase.current_lookup), GMIBase.index[i] = -1;
            try {
                (constructor_shortcut = GMIBase.getConstructorFromNode(node, constructor_shortcut)) && (eax = new constructor_shortcut(node, options), GMIBase.index[i] = eax)
            } catch (e) {
                if (node.removeAttribute("gmindex"), delete GMIBase.index[i], !e.message || !e.message.match(/gmi class not declared/i)) throw e;
                return ddt.trace("gmi", e.message), window.onerror && window.onerror(e.message, "deviantart.com/gmi.js", 0), -1
            }
        }
        return GMIBase.index[i]
    }, GMIBase._deleteNode = function(e) {
        var t;
        return (t = GMIBase.getOne(e, null, !0)) ? this._delete(t) : (e.parentNode && e.parentNode.removeChild(e), delete e, void 0)
    }, GMIBase._delete = function(e, t) {
        var n, r;
        if (e instanceof Array)
            for (r = 0; r != e.length; r++) arguments.callee.call(this, e[r], t);
        else n = e.gmi_node, e.gmi_lifecycle = "destructing", e.gmiDestructor && e.gmiDestructor(), e.gmi_lifecycle = "deleted", delete GMIBase.index[n.getAttribute("gmindex")], n.setAttribute("gmindex", ""), t || (n.parentNode && n.parentNode.removeChild(n), window.attachEvent || (n.innerHTML = ""))
    }, GMIBase.getConstructor = function(name) {
        try {
            return eval(name)
        } catch (e) {
            return Function("", 'throw new Error("GMI Class not declared: ' + name + '")')
        }
    }, GMIBase.getConstructorFromNode = function(e, t) {
        if (jQuery.isFunction(t)) return t;
        var n, r;
        if (t) e.setAttribute("data-gmiclass", n = t);
        else if (!(n = e.getAttribute("data-gmiclass"))) {
            var i = e.getAttribute("name") || e.getAttribute("id") || "";
            "gmi-" == i.substr(0, 4) && (n = i.substr(4))
        }
        return (r = GMIBase.getConstructor(n)) && (r.GMIClass = n), r
    }, GMIBase.default_constructor = function() {
        throw Error("Default GMI constructor used")
    }, window.GMI = GMI = new GMIBase, GMI.getOne = GMIBase.getOne, GMI.query = GMI.gmiQuery, GMI.up = GMI.gmiUp, GMI.apply = GMI.gmiApply, GMI.create = GMI.gmiCreate, GMI._delete = GMIBase._delete, GMI._deleteNode = GMIBase._deleteNode, GMI.evCancel = function() {
        return window.event && (event.cancelBubble = !0), !1
    }, window.$gm = GMI.gmiQuery), window.DWait && DWait.run("jms/lib/gmi.js")
});
/**
 * @license
 * ===============================================================================
 * Crc32 is a JavaScript function for computing the CRC32 of a string
 * ...............................................................................
 *
 * Version: 1.2 - 2006/11 - http://noteslog.com/category/javascript/
 *
 * -------------------------------------------------------------------------------
 * Copyright (c) 2006 Andrea Ercolino
 * http://www.opensource.org/licenses/mit-license.php
 * ===============================================================================
 */
(function() {
    var D = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";
    crc32 = function(B, A) {
        A == window.undefined && (A = 0);
        var C = 0,
            E = 0;
        A = -1 ^ A;
        for (var F = 0, r = B.length; r > F; F++) C = 255 & (A ^ B.charCodeAt(F)), E = "0x" + D.substr(9 * C, 8), A = A >>> 8 ^ E;
        return -1 ^ A
    }, fletcher16 = function(D) {
        for (var B, A = D.length, C = 255, E = 255, F = 0; A;) {
            B = A > 20 ? 20 : A, A -= B;
            do E += C += D.charCodeAt(F++); while (--B);
            C = (255 & C) + (C >> 8), E = (255 & E) + (E >> 8)
        }
        return C = (255 & C) + (C >> 8), E = (255 & E) + (E >> 8), E << 8 | C
    }
})(), window.DWait && DWait.run("jms/lib/crc32.js");
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/pubsub.js"], function() {
    QuantcastHelper = {
        account: "p-915Y6SMHQQJHI",
        init: function() {
            PubSub.subscribe([{
                eventname: "PageViewTracker.pageview",
                subscriber: this,
                callback: this.handlers.pageview
            }])
        },
        replaceLabel: function(e, t) {
            if (!window.__qc || !window.__qc.qopts) return console.log("[QC] quantcast not present"), void 0;
            var n = __qc.qopts.labels || "",
                a = n.split(/,/);
            for (var s in a) a[s] == e && (a[s] = t);
            n = a.join(","), __qc.qpixelsent = [], _qevents.push({
                qacct: this.account,
                labels: n
            })
        },
        replaceLabelAll: function(e) {
            if (!window.__qc || !window.__qc.qopts) return console.log("[QC] quantcast not present"), void 0;
            var t = __qc.qopts.labels || "",
                n = t.split(/,/),
                a = [];
            for (var s in n) - 1 != n[s].indexOf("UserStatus.") && a.push(n[s]);
            $.isArray(e) ? a = a.concat(e) : a.push(e), t = a.join(","), __qc.qpixelsent = [], _qevents.push({
                qacct: this.account,
                labels: t
            })
        },
        addLabel: function(e) {
            if (!window.__qc || !window.__qc.qopts) return console.log("[QC] quantcast not present"), void 0;
            var t = __qc.qopts.labels || "";
            t += "," + e, __qc.qpixelsent = [], _qevents.push({
                qacct: this.account,
                labels: t
            })
        },
        handlers: {
            pageview: function(e, t) {
                window.QuantcastHelper && t.tag && window.QuantcastHelper.replaceLabelAll(t.tag)
            }
        }
    }, QuantcastHelper.init(), window.DWait && DWait.run("jms/lib/quantcast.js")
});
DWait.ready(["jms/lib/pubsub.js", "jms/lib/jquery/jquery.current.js", "jms/lib/jquery/plugins/jquery.throttle-debounce.js", "jms/lib/difi.js", "jms/lib/glbl.js", "jms/lib/Base.js"], function() {
    var e = Base.extend({
        constructor: function() {
            PubSub.subscribe([{
                eventname: "DaGa.init",
                subscriber: this,
                callback: this.init
            }])
        },
        init: function() {
            this.log_initialization(), PubSub.subscribe([{
                eventname: "DaGa.track_event",
                subscriber: this,
                callback: $.debounce(1e3, !0, this.handlers.track_event)
            }, {
                eventname: "DaGa.track_event_no_debounce",
                subscriber: this,
                callback: this.handlers.track_event
            }, {
                eventname: "DaGa.track_event_link",
                subscriber: this,
                callback: $.debounce(1e3, !0, this.handlers.track_event_link)
            }, {
                eventname: "DaGa.track_event_link_no_debounce",
                subscriber: this,
                callback: this.handlers.track_event_link
            }, {
                eventname: "DaGa.track_event_form_submission",
                subscriber: this,
                callback: $.debounce(1e3, !0, this.handlers.track_event_form_submission)
            }, {
                eventname: "DaGa.track_event_form_submission_no_debounce",
                subscriber: this,
                callback: this.handlers.track_event_form_submission
            }, {
                eventname: "DaGa.track_event_from_cancelled_click",
                subscriber: this,
                callback: this.handlers.receive_cancelled_click_event
            }, {
                eventname: "DaGa.track_pageview_on_duper_close",
                subscriber: this,
                callback: this.handlers.track_pageview_on_duper_close
            }, {
                eventname: "DaGa.track_pageview",
                subscriber: this,
                callback: this.handlers.track_pageview
            }, {
                eventname: "DaGa.track_social",
                subscriber: this,
                callback: this.handlers.track_social
            }, {
                eventname: "DaGa.track_third_party_pageview",
                subscriber: this,
                callback: this.handlers.track_third_party_pageview
            }, {
                eventname: "DaGa.track_third_party_event",
                subscriber: this,
                callback: this.handlers.track_third_party_event
            }, {
                eventname: "PageViewTracker.pageview",
                subscriber: this,
                callback: this.handlers.track_comscore_and_ga_pageview
            }]), $(document).on("click", "[data-ga_click_event]", this.handlers.receive_click_event.bind(this)).on("submit", "[data-ga_submit_event]", this.handlers.receive_submit_event.bind(this))
        },
        handlers: {
            track_pageview: function(e, t) {
                var a = t.page || "";
                if (!a) return this.log("Could not send Page; invalid payload!", t), void 0;
                var n = {
                    page: a
                };
                if (t.dimensions)
                    for (var i in t.dimensions) n[i] = t.dimensions[i];
                this.merge_hit_scope_custom_dimensions(n), this.log("sent pageview: ", n), this.send_command("send", "pageview", n)
            },
            track_pageview_on_duper_close: function(e, t) {
                t = t || {}, t.dimensions = {
                    dimension7: "T15846duperclose=1"
                }, this.handlers.track_pageview.call(this, e, t)
            },
            track_event: function(e, t) {
                t = t || {};
                var a = t.category || "",
                    n = t.action || "",
                    i = t.label || "",
                    r = void 0 === t.value ? !1 : parseInt(t.value, 10),
                    c = void 0 === t.noninteraction ? !0 : Boolean(t.noninteraction);
                if (!a || !n) return this.log("Could not send Event; invalid payload!", t), void 0;
                var s = {
                    eventCategory: a,
                    eventAction: n
                };
                i && (s.eventLabel = i), r !== !1 && (s.eventValue = r), c && (s.nonInteraction = !0), this.merge_hit_scope_custom_dimensions(s), this.inject_event_segmentation_data(s), t.hitCallback && (s.hitCallback = t.hitCallback), this.log("sent event: ", s), this.send_command("send", "event", s)
            },
            track_event_link: function(e, t) {
                if (!t || !t.event || !t.element) return console.warn("[GA] Missing element or event in payload object for track_event_link"), void 0;
                if (!t.action || !t.category) return console.warn("[GA] Missing action/category in payload object for track_event_link"), void 0;
                var a = $("base[target]").attr("target"),
                    n = t.element,
                    i = t.event,
                    r = n.getAttribute("target") || a,
                    c = n.getAttribute("href"),
                    s = r && 0 === r.indexOf("_") ? r.substring(1) : r,
                    o = s && window[s] ? window[s] : window.top;
                c && (t.px_href = n.href, r && window.name != r && (t.px_target = r));
                var l = $(n).offset();
                t.px_screen_coordinates = Math.round(l.left) + "," + Math.round(l.top);
                var _ = !1;
                c && (t.nofollow ? t.px_noredirect_reason = "nf" : o !== window || r && "_self" != r && window.name != r ? t.px_noredirect_reason = "nt" : i.defaultPrevented ? t.px_noredirect_reason = "p" : i.altKey ? (t.px_noredirect_reason = "ka", t.px_target = "_?") : i.ctrlKey ? (t.px_noredirect_reason = "kc", t.px_target = "_?") : i.metaKey ? (t.px_noredirect_reason = "km", t.px_target = "_?") : i.shiftKey ? (t.px_noredirect_reason = "ks", t.px_target = "_?") : i.buttons >= 2 ? (t.px_noredirect_reason = "kw", t.px_target = "_?") : "javascript:" == c.substr(0, 11) || "#" == c[0] ? t.px_noredirect_reason = "js" : (window.Admin || {}).active ? t.px_noredirect_reason = "ab" : _ = !0), t.overrideEventCapture || (_ && (c = n.href, i.preventDefault ? i.preventDefault() : i.returnValue = !1), t.hitCallback = function() {
                    _ && (o.location = c)
                }), PubSub.publish("DaGa.track_event_no_debounce", t)
            },
            _should_click_capture: function() {
                return !1
            },
            track_social: function(e, t) {
                var a = t.network || "",
                    n = t.action || "",
                    i = t.target || !1;
                if (t.page || !1, !a || !n) return this.log("Could not send Social; invalid payload!", t), void 0;
                var r = {
                    socialNetwork: a,
                    socialAction: n
                };
                i && (r.socialTarget = i), this.merge_hit_scope_custom_dimensions(r), this.log("sent social: ", r), this.send_command("send", "social", r)
            },
            track_third_party_pageview: function(e, t) {
                if (!t.analytics_id) return this.log("Third Party analytics id is missing.", t), void 0;
                var a = t.url || Glbl("Location.path");
                a = (a + "").split("?")[0].split("#")[0];
                var n = "ThirdPartyTracking_" + t.analytics_id.replace(/\-/g, "_");
                this.log("tracked third party pageview (" + a + ")" + " for " + t.analytics_id), this.send_command("create", t.analytics_id, {
                    name: n
                }), this.send_command(n + ".send", "pageview", a)
            },
            track_third_party_event: function(e, t) {
                if (!t.analytics_id) return this.log("Third Party analytics id is missing.", t), void 0;
                if (t = t || {}, !t.category || !t.action) return this.log("Could not send Third Party Analytics Event; invalid payload!", t), void 0;
                var a = {
                    eventCategory: t.category,
                    eventAction: t.action,
                    eventLabel: t.label || void 0,
                    eventValue: void 0 !== t.value ? parseInt(t.value, 10) : void 0,
                    nonInteraction: void 0 === t.noninteraction || Boolean(t.noninteraction) ? !0 : void 0
                };
                this.log("sent Third Party Analytics event: ", a), this.send_command("create", t.analytics_id, {
                    name: "ThirdPartyTracking"
                }), this.send_command("ThirdPartyTracking.send", "event", a)
            },
            track_event_form_submission: function(e, t) {
                if (!t || !t.event || !t.element) return console.warn("[GA] Missing element or event in payload object for track_event_form_submission"), void 0;
                var a = $(t.element);
                if (a.data("ga_has_submitted")) return t.overrideEventCapture && t.hitCallback(), void 0;
                var n = t.event,
                    i = a.attr("target");
                if (a.data("ga_has_submitted", !0), !t.overrideEventCapture) {
                    var r = !n.defaultPrevented && n.returnValue !== !1 && "_blank" != i;
                    r && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), t.hitCallback = function() {
                        r && a.submit()
                    }
                }
                PubSub.publish("DaGa.track_event_no_debounce", t)
            },
            receive_submit_event: function(e) {
                var t = $(e.target),
                    a = t.data("ga_submit_event");
                a.element = t[0], a.event = e.originalEvent, this.handlers.track_event_form_submission(null, a)
            },
            receive_click_event: function(e) {
                var t = $(e.target);
                t.data("ga_click_event") || (t = t.closest("[data-ga_click_event]"));
                var a = t.data("ga_click_event");
                a.element = t[0], a.event = e.originalEvent, this.handlers.track_event_link(null, a)
            },
            receive_cancelled_click_event: function(e, t) {
                this.handlers.receive_click_event.call(this, t)
            },
            track_comscore_and_ga_pageview: function(e, t) {
                PubSub.publish("DaGa.track_pageview", {
                    page: t.page
                }), window.COMSCORE_fire && window.COMSCORE_fire({
                    c4: "www.deviantart.com" + t.page
                })
            }
        },
        send_command: function() {
            "function" == typeof window.ga ? window.ga.apply(window.ga, arguments) : (arguments[2] && arguments[2].hitCallback && "function" == typeof arguments[2].hitCallback && arguments[2].hitCallback(), this.log("-- GA library not found!! --"))
        },
        merge_hit_scope_custom_dimensions: function(e) {
            var t = ((deviantART || {}).pageData || {}).ga_hit;
            t && $.extend(e, t)
        },
        inject_event_segmentation_data: function(e) {
            if (Glbl("Site.is_deviantart")) {
                var t = [];
                if ("pcp" == e.eventCategory && ((deviantART || {}).pageData || {}).pcpwidget) switch (e.eventAction) {
                    case "pcp_deviation_page_view":
                    case "pcp_initiate_purchase_click":
                        "seller" != deviantART.pageData.pcpwidget.role && t.push("status-" + deviantART.pageData.pcpwidget.status);
                    case "purchased":
                    case "downloaded":
                        t.push("role-" + deviantART.pageData.pcpwidget.role);
                    case "rated_content":
                        t.push("dctype-" + deviantART.pageData.pcpwidget.dctype)
                }
                if ((Glbl("Location.path") + "").match(/^\/(art|journal)\/[^\/]+-\d+$/) ? t.push("pg-" + (Glbl("Minibrowse.opened") ? "db" : "pv")) : (Glbl("Location.path") + "").match(/^\/print\/\d+\//) && t.push("pg-pr"), "Activity" == e.eventCategory) {
                    var a = "profile";
                    (Glbl("Location.path") + "").match(/^\/watch\//) ? a = "activity" : (Glbl("Location.path") + "").match(/^\/tag\//) && (a = "tag"), t.push("source-" + a)
                } else "comment_posted" == e.eventAction && (Glbl("Location.path") + "").match(/^\/watch\//) ? t.push("source-activity") : "Collections" == e.eventCategory && (e.eventLabel + "").match("source-devbutton") && ((Glbl("Location.path") + "").match(/^\/watch\//) ? e.eventLabel = e.eventLabel.replace("source-devbutton", "source-activity") : (Glbl("Location.path") + "").match(/^\/browse\//) ? e.eventLabel = e.eventLabel.replace("source-devbutton", "source-browse") : (Glbl("Location.path") + "").match(/^\/morelikethis\//) && (e.eventLabel = e.eventLabel.replace("source-devbutton", "source-morelikethis")));
                t.length && (e.eventLabel && t.unshift(e.eventLabel), e.eventLabel = t.join("_"))
            }
        },
        log_initialization: function() {
            var e = ($("#dagaua_init").html() + "").match(/ga\([^\)]*\)/g);
            if (e)
                for (var t = 0, a = e.length; a > t; ++t) this.log("server-side command: ", (e[t].match(/\((.*)\)/) || []).pop())
        },
        log: function() {
            for (var e = ["UniversalAnalytics"], t = 0, a = arguments.length; a > t; ++t) e.push(arguments[t]);
            ddt.log.apply(ddt, e)
        }
    });
    window.DaGa = {
        _create_raw_tracking_json: function(e, t, a, n, i) {
            var r = {
                category: e,
                action: t,
                label: a,
                value: n,
                nofollow: i
            };
            return JSON.stringify(r)
        },
        generate_link_tracking_code: function(e, t, a, n, i) {
            return e && t ? ' data-ga_click_event="' + this._create_raw_tracking_json(e, t, a, n, i).replace(/"/g, "&quot;") + '" ' : ""
        },
        add_link_tracking: function(e, t, a, n, i, r) {
            t && a && e.attr("data-ga_click_event", this._create_raw_tracking_json(t, a, n, i, r))
        }
    }, new e, window.DWait && DWait.run("jms/lib/analytics.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/jquery/plugins/jquery.throttle-debounce.js", "jms/lib/pubsub.js", "jms/lib/Base.js", "jms/thirdparty/lib/dapx/dapx.tracker.js", "jms/lib/ddt.js"], function() {
    var e = Base.extend({
            constructor: function(e, t) {
                this.client = "**", this.initialized = !1, this.daid = 0, this.runtimeid = 0, this.impression_ctr = 0, this.event_ctr = 0, this.pre_init_queue = [], this.last_url = !1, this.pageviewevent = !1, this.userid = !1, this.iframes = [], this.is_iframe = window !== window.top, this.top_logid = e, this.iframe_id = t, this.init_log_data = {}, this.pageview_cache = {}, PubSub.subscribe([{
                    eventname: "DaPx.initialize",
                    subscriber: this,
                    callback: this.handlers.initialize
                }, {
                    eventname: "DaPx.do_delayed_initialize",
                    subscriber: this,
                    callback: this.handlers.do_delayed_initialize
                }, {
                    eventname: "DaPx.send_event",
                    subscriber: this,
                    callback: this.handlers.send_event
                }, {
                    eventname: "DaPx.send_click_event",
                    subscriber: this,
                    callback: this.handlers.send_click_event
                }, {
                    eventname: "DaPx.send_form_submission_event",
                    subscriber: this,
                    callback: this.handlers.send_form_submission_event
                }, {
                    eventname: "DaPx.send_standard_event",
                    subscriber: this,
                    callback: this.handlers.send_standard_event
                }, {
                    eventname: "DaPx.update_pageview_data",
                    subscriber: this,
                    callback: this.handlers.update_pageview_data
                }, {
                    eventname: "DaPx.force_send_pageview_event",
                    subscriber: this,
                    callback: this.handlers.send_pageview
                }, {
                    eventname: "Location.changed",
                    subscriber: this,
                    callback: this.handlers.send_pageview
                }, {
                    eventname: "Location.changed_from_push",
                    subscriber: this,
                    callback: this.handlers.send_pageview
                }, {
                    eventname: "Location.changed_without_push",
                    subscriber: this,
                    callback: this.handlers.send_pageview
                }]), $(document).on("click", "[data-dapx_click_event]", this.handlers.receive_click_event.bind(this)), $(document).on("submit", "[data-dapx_submit_event]", this.handlers.receive_submit_event.bind(this)), $(window).on("message.dapx", this.handlers.receive_postmessage.bind(this))
            },
            get_instanceid: function() {
                return this.daid + "+" + this.runtimeid
            },
            get_local_logid: function() {
                return this.get_pageview_ctr() + "." + this.event_ctr
            },
            get_client_logid: function() {
                return this.runtimeid + "-" + this.get_local_logid()
            },
            get_pageview_ctr: function() {
                return Math.max(1, this.impression_ctr)
            },
            update_globals: function() {
                Glbl("DaPx.local_logid", this.get_local_logid()), Glbl("DaPx.last_logid", this.get_client_logid())
            },
            format_screen_coordinates: function(e) {
                return e + "@" + Math.round($(window).width()) + "x" + Math.round($(window).height()) + ":" + Math.round($(window).scrollLeft()) + "," + Math.round($(window).scrollTop())
            },
            send: function(e) {
                return this.initialized ? (e.userid && (ddt.warn("dapx", "Userid already set in payload; unsetting", e), delete e.userid), ((deviantART || {}).deviant || {}).loggedIn ? e.userid = deviantART.deviant.id : this.userid && (e.userid = this.userid), e.event && ddt.log("dapx", "Sending event", e.event), dapx("send", e), void 0) : (this.pre_init_queue.push(e), void 0)
            },
            validate_eventname: function(e) {
                var t = ["daweb", "damobileweb"],
                    i = ["pageview"];
                if (!/^[\w-]+:[\w-]*:[\w-]*:[\w-]*:[\w-]*:[\w-]+$/.test(e)) return ddt.error("dapx", "Invalid event name", e), !1;
                var a = e.split(":");
                return 0 > t.indexOf(a[0]) ? (ddt.error("dapx", "Invalid event client", e), !1) : 0 > i.indexOf(a[5]) ? (ddt.error("dapx", "Invalid event action", e), !1) : !0
            },
            parse_eventname: function(e) {
                if (!this.validate_eventname(e)) return {};
                var t = e.split(":"),
                    i = {
                        client: t[0],
                        view: t[1],
                        action: t[5]
                    };
                return t[2] && (i.section = t[2]), t[3] && (i.component = t[3]), t[4] && (i.element = t[4]), i
            },
            send_init_events: function() {
                this.initialized = !0, this.handlers.send_pageview.call(this, null, {
                    origin: "_dapx_init",
                    log_data: this.init_log_data
                }), this.pre_init_queue.length && ($.each(this.pre_init_queue, function(e, t) {
                    t.type = t.type.replace("**", this.client), t.instanceid = this.get_instanceid(), t.logid = "1." + e, this.send(t)
                }.bind(this)), this.pre_init_queue = [])
            },
            getDeviationResourceType: function(e) {
                switch (e) {
                    case "journal":
                        return 5;
                    case "poll":
                        return 6;
                    case "commission":
                        return 66;
                    case "status":
                        return 69;
                    default:
                        return 1
                }
            },
            handlers: {
                initialize: function(e, t) {
                    this.client = t.client, this.daid = t.daid, this.runtimeid = t.requestid + "-" + (new Date).getTime().toString(36), this.userid = t.userid, this.pageviewevent = t.eventid, this.init_log_data = t.log_data, t.delay_init_event ? ddt.log("dapx", "Init delayed", t) : this.send_init_events()
                },
                do_delayed_initialize: function() {
                    this.initialized || this.send_init_events()
                },
                send_pageview: function(e, t) {
                    if (!window.dapx) return ddt.warn("dapx", "Cannot log: window.dapx is missing"), void 0;
                    if (this.is_iframe) return ddt.warn("dapx", "iframe logging is disabled"), void 0;
                    if (!this.initialized) return ddt.log("dapx", "Delayed pageview swallowing event"), void 0;
                    var i = window.location + "";
                    if (i == this.last_url) return ddt.warn("dapx", "Tried to send multiple pageviews for the same location"), void 0;
                    if (this.pageview_cache[i] && (this.pageviewevent = this.pageview_cache[i]), !this.validate_eventname(this.pageviewevent)) return ddt.warn("dapx", "Invalid pageview event", a), void 0;
                    this.last_url = i, this.pageview_cache[i] = this.pageviewevent, this.impression_ctr += 1, this.event_ctr = 0, this.update_globals();
                    var a = {
                        type: this.client + "cp",
                        instanceid: this.get_instanceid(),
                        logid: this.get_local_logid(),
                        url: i,
                        referrer: document.referrer,
                        appmechanic: t.origin,
                        screen_coordinates: this.format_screen_coordinates("0,0"),
                        event: this.pageviewevent
                    };
                    "init" === t.log_data && (t.log_data = this.init_log_data), $.isPlainObject(t.log_data) && $.each(t.log_data, function(e, t) {
                        a[e] = t
                    }), this.send(a);
                    var e = this.parse_eventname(this.pageviewevent),
                        n = {
                            eventname: "pageview",
                            view: e.view
                        };
                    switch (e.component && (n.component = e.component), n.view) {
                        case "art":
                            var d;
                            t.state && t.state.item && t.state.item.itemid && (d = t.state.item.itemid), deviantART.pageData && deviantART.pageData.deviationid && (d = deviantART.pageData.deviationid), n.typeid = this.getDeviationResourceType(n.component), n.itemid = d;
                            break;
                        case "profile":
                            var s = $(":gmi(GalleryEditor)");
                            if (s.length) n.typeid = s.attr("gmi-typeid"), n.itemid = s.attr("gmi-itemid");
                            else {
                                var o = $(":gmi(Gruser)");
                                n.typeid = 4, n.itemid = o.attr("gmi-id")
                            }
                    }
                    Glbl("Site.is_eclipse") && (n.version = "notes" === n.view ? "eclipse;major" : "eclipse;minor"), PubSub.publish("BILogger.logEvent", n)
                },
                send_event: function(e, t) {
                    if (!window.dapx) return ddt.warn("dapx", "Cannot log: window.dapx is missing"), void 0;
                    if (!t.event) return ddt.warn("dapx", "Cannot log event; no event name specified", t), void 0;
                    this.event_ctr += 1, this.update_globals();
                    var i = $.extend({
                        type: this.client + "ce",
                        instanceid: this.get_instanceid(),
                        logid: this.get_local_logid()
                    }, t);
                    this.send(i)
                },
                send_standard_event: function(e, t) {
                    var i = this.pageviewevent ? this.pageviewevent.split(":") : ["invalid", "other", "", "", "", ""],
                        a = [t.client || i[0], t.view || i[1], t.section || i[2], t.component || i[3], t.element || i[4], t.action || "click"],
                        e = a.join(":");
                    if (!this.validate_eventname(e)) return ddt.warn("dapx", "Attempt to update pageview to invalid event name", t), void 0;
                    var n = {
                        event: e
                    };
                    t.log_data && $.each(t.log_data, function(e, t) {
                        n[e] = t
                    }), this.handlers.send_event.call(this, "", n)
                },
                receive_postmessage: function(e) {
                    if (e && e.originalEvent && "dapxif" == e.originalEvent.data) {
                        var t;
                        $.each(this.iframes, function(i, a) {
                            a === e.originalEvent.source && (t = i + 1)
                        }), t || (t = this.iframes.push(e.originalEvent.source));
                        var i = this.get_instanceid() + "-" + this.get_local_logid() + "," + t;
                        e.originalEvent.source.postMessage("dapxif:" + i, "*")
                    }
                },
                send_click_event: function(e, t) {
                    var i = t.event,
                        a = $(t.element),
                        n = t.payload;
                    if (this.handlers.send_event.call(this, null, n), t.overrideEventCapture) t.eventCaptured && dapx("manual_flush"), setTimeout(t.hitCallback, 500);
                    else {
                        var d = a.attr("href"),
                            s = a.attr("target"),
                            o = !i.defaultPrevented && i.returnValue !== !1 && !i.altKey && !i.ctrlKey && !i.metaKey && !i.shiftKey && 2 > i.which && d && 0 !== d.indexOf("javascript:") && "#" !== d[0] && "_blank" != s && !(window.Admin || {}).active && !n.nofollow;
                        o && (i.preventDefault(), dapx("manual_flush"), d = a[0].href, s && 0 === s.indexOf("_") && (s = s.substring(1))), setTimeout(function() {
                            if (o) {
                                var e = window[s] || window;
                                e.top.location = d
                            }
                        }, 500)
                    }
                },
                receive_click_event: function(e) {
                    var t = $(e.target);
                    t.data("dapx_click_event") || (t = t.closest("[data-dapx_click_event]")), this.handlers.send_click_event.call(this, null, {
                        event: e,
                        element: t.get(0),
                        payload: t.data("dapx_click_event")
                    })
                },
                send_form_submission_event: function(e, t) {
                    var i = t.event,
                        a = $(t.element),
                        n = t.payload;
                    if (a.data("dapx_has_submitted")) return t.overrideEventCapture && t.hitCallback(), void 0;
                    if (this.handlers.send_event.call(this, null, n), a.data("dapx_has_submitted", !0), t.overrideEventCapture) t.eventCaptured && dapx("manual_flush"), setTimeout(t.hitCallback, 500);
                    else {
                        var d = a.attr("target"),
                            s = !i.defaultPrevented && i.returnValue !== !1 && "_blank" != d;
                        s && (i.preventDefault(), dapx("manual_flush")), setTimeout(function() {
                            s && a.submit()
                        }, 500)
                    }
                },
                receive_submit_event: function(e) {
                    var t = $(e.target);
                    t.data("dapx_submit_event") || (t = t.closest("[data-dapx_submit_event]")), this.send_form_submission_event(null, {
                        event: e,
                        element: t.get(0),
                        payload: t.data("dapx_click_event")
                    })
                },
                update_pageview_data: function(e, t) {
                    if (this.pageviewevent) {
                        var i = this.pageviewevent.split(":");
                        t.view && (i[1] = t.view), i[2] = t.section || "", i[3] = t.component || "", i[4] = "", i[5] = "pageview", i.splice(6, i.length);
                        var a = i.join(":");
                        if (!this.validate_eventname(a)) return ddt.warn("dapx", "Attempt to update pageview to invalid event name", t), void 0;
                        this.pageviewevent = a, ddt.log("dapx", "Updated pageview event", this.pageviewevent)
                    }
                }
            }
        }),
        t = Base.extend({
            constructor: function() {
                this.canonical_ads = [], this.monitored_adids = {}, this.monitored_adids_details = {}, this.monitoring_adids = {}, this.nodes_by_adid = {}, this.tick_timer = 0, this.scroll_tick_lock = !1, this.handlers.scroll_tick_debounced = $.debounce(100, this.handlers.scroll_tick.bind(this)), PubSub.subscribe([, {
                    eventname: "DaPx.send_ad_event",
                    subscriber: this,
                    callback: this.handlers.send_ad_event
                }, {
                    eventname: "DaPx.send_ad_event_from_node",
                    subscriber: this,
                    callback: this.handlers.send_ad_event_from_node
                }, {
                    eventname: "DaPx.send_ads_reused",
                    subscriber: this,
                    callback: this.handlers.send_ads_reused
                }, {
                    eventname: "Duperbrowse.closed",
                    subscriber: this,
                    callback: this.handlers.send_ads_after_duperbrowse_close
                }]), $(window).on({
                    "message.dapxads": this.handlers.receive_postmessage.bind(this),
                    "scroll.dapxads": this.handlers.scroll_tick_debounced
                }), $(document).on("visibilitychange.dapxads", this.handlers.scroll_tick_debounced)
            },
            calculate_ad_visibility: function(e) {
                var t = $(window),
                    i = $(e),
                    a = i.offset() || {},
                    n = {
                        h: t.height(),
                        t: t.scrollTop(),
                        b: t.scrollTop() + t.height()
                    },
                    d = {
                        h: i.height(),
                        t: a.top,
                        b: i.height() + a.top
                    };
                return n.t > d.b || d.t > n.b ? 0 : d.t > n.t && n.b > d.b ? 1 : Math.abs((Math.max(n.t, d.t) - Math.min(n.b, d.b)) / d.h)
            },
            monitor_ad_visibility: function(e, t) {
                e && !this.monitored_adids[e] && this.nodes_by_adid[e] && (this.monitoring_adids[e] || (this.monitoring_adids[e] = {
                    started: this.calculate_ad_visibility($(this.nodes_by_adid[e])) ? $.now() : -1,
                    samples: []
                }, this.monitored_adids_details[e] = t), this.monitoring_adids[e].started > 0 && this.set_timeout_to_poll_ad_visibility())
            },
            set_timeout_to_poll_ad_visibility: function() {
                clearTimeout(this.tick_timer), this.tick_timer = setTimeout(this.handlers.scroll_tick_debounced, 1e3)
            },
            handlers: {
                send_ad_event: function(t, i) {
                    PubSub.publish("DaPx.send_event", $.extend({
                        type: e.client + "ad"
                    }, i))
                },
                send_ad_event_from_node: function(t, i) {
                    var a, n;
                    if (i.node) {
                        var d = $(i.node),
                            s = d.data("dapx-adid");
                        n = d.data("da-safety"), a = d.data("ad-id"), s && (i.event_payload.adframe_logid = s);
                        var o = d.data("ad-campaignid");
                        o && (i.event_payload.ad_campaignid = o), document.hidden ? i.event_payload.advp = -3 : document.hasChildNodes(i.node) ? d.is(":visible") ? i.event_payload.hasOwnProperty("advp") || (i.event_payload.advp = parseFloat(this.calculate_ad_visibility(i.node).toFixed(2))) : i.event_payload.advp = -1 : i.event_payload.advp = -2;
                        var l = d.offset() || {};
                        i.event_payload.screen_coordinates = e.format_screen_coordinates(Math.round(l.left) + "," + Math.round(l.top))
                    }
                    if (i.event_payload.cp_logid == e.get_pageview_ctr() && delete i.event_payload.cp_logid, i.event_payload && "ad_rendered" == i.event_payload.event && (i.event_payload.details && 0 == i.event_payload.details.meta_safety && n && (i.event_payload.details.meta_safety = n), i.event_payload.details && i.event_payload.details.meta_adunit === !1 && a && (i.event_payload.details.meta_adunit = a), i.event_payload.details && 1 == i.event_payload.details.meta_bidder && "safe" != i.event_payload.details.meta_safety && (i.event_payload.details.meta_bidder = !1), i.event_payload.details && 1 == i.event_payload.details.meta_bidder && "nobid" != i.event_payload.details.meta_estimate)) {
                        var r = !1;
                        for (var _ in i.event_payload.details)
                            if (_.match(/^meta_provider_/)) {
                                r = !0;
                                break
                            } r || ddt.alert("dapx", "Bidder log without bidders", i.event_payload, ["dapx"])
                    }
                    if (this.handlers.send_ad_event.call(this, "DaPx.send_ad_event", i.event_payload), i.node) {
                        if (!s) {
                            var s = e.get_local_logid();
                            $(i.node).data("dapx-adid", s), 1 != e.get_pageview_ctr() || this.nodes_by_adid.hasOwnProperty(s) || this.canonical_ads.push(s), this.nodes_by_adid[s] = i.node
                        }
                        "ad_rendered" == i.event_payload.event && (this.monitored_adids[s] = !1, this.monitor_ad_visibility(s, i.event_payload.details))
                    }
                },
                scroll_tick: function() {
                    document.hidden || this.scroll_tick_lock || (this.scroll_tick_lock = !0, $.each(this.monitoring_adids, function(e, t) {
                        var i = $(this.nodes_by_adid[e]);
                        if (t && i.is(":visible")) {
                            var a = this.calculate_ad_visibility(i);
                            a >= .5 ? (t.samples.push(a), -1 == t.started ? (t.started = $.now(), this.set_timeout_to_poll_ad_visibility()) : $.now() - t.started >= 1e3 && (this.monitored_adids[e] = !0, this.monitoring_adids[e] = !1, this.handlers.send_ad_event_from_node.call(this, null, {
                                node: i,
                                event_payload: {
                                    event: "ad_viewed",
                                    advp: parseFloat((t.samples.reduce(function(e, t) {
                                        return e + t
                                    }) / t.samples.length).toFixed(2)),
                                    details: this.monitored_adids_details[e] || !1
                                }
                            }), this.monitored_adids_details[e] = !1)) : -1 != t.started && (t.started = -1, t.samples = [])
                        }
                    }.bind(this)), this.scroll_tick_lock = !1)
                },
                send_ads_reused: function(e, t) {
                    if (t && t.length) {
                        for (var i = t.length - 1; i >= 0; --i) {
                            var a = t[i];
                            if (this.nodes_by_adid[a]) {
                                if (document.hasChildNodes(this.nodes_by_adid[a])) continue;
                                t.splice(i, 1), this.nodes_by_adid[a] = null
                            }
                        }
                        t.length && this.handlers.send_ad_event.call(this, null, {
                            event: "ads_reused",
                            ad_logids: t.join(",")
                        })
                    }
                },
                receive_postmessage: function(t) {
                    var i = (t && t.originalEvent && t.originalEvent.data) + "";
                    if (i = i.match(/^(dapxad):({.*)$/) || i.match(/^(dapxadr)(.*)$/) || [], 3 == i.length) {
                        if (!t.originalEvent.origin.match(/^http(|s):\/\/(www\.da-ads\.com|staging\.deviantart\.lan|www\.deviantart.com)$/)) return ddt.warn("dapx", "advertising postmessage received from invalid origin", t.originalEvent.origin, t.originalEvent.data), void 0;
                        var a = i[1],
                            n = i[2];
                        if ("dapxadr" == a) return t.originalEvent.source.postMessage("dapxadr:" + e.get_pageview_ctr(), "*"), void 0;
                        try {
                            n = JSON.parse(n)
                        } catch (d) {
                            return
                        }
                        var s = null;
                        $("iframe").each(function(e, i) {
                            return i.contentWindow == t.originalEvent.source ? (s = this, !1) : void 0
                        }), this.handlers.send_ad_event_from_node.call(this, null, {
                            node: s,
                            event_payload: n
                        })
                    }
                },
                send_ads_after_duperbrowse_close: function(e) {
                    this.handlers.scroll_tick_debounced(), this.handlers.send_ads_reused.call(this, e, this.canonical_ads)
                }
            }
        }),
        i = function(i, a) {
            window.DaPx = e = new e(i, a), window.DaPxAds = t = new t
        };
    if (window === window.top) i();
    else {
        var a;
        $(window).on("message.dapxiframes", function(e) {
            var t = ((e && e.originalEvent && e.originalEvent.data) + "").match(/^dapxif:([^,]*),(.*)$/) || [];
            3 == t.length && (clearTimeout(a), $(window).off("message.dapxiframes"), i(t[1], t[2]))
        });
        var n = 0,
            d = function() {
                window.top.postMessage("dapxif", "*"), 10 > ++n && (a = setTimeout(d, 150))
            };
        d()
    }
    window.DWait && DWait.run("jms/lib/dapx.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/pubsub.js", "jms/lib/glbl.js", "jms/lib/Base.js"], function() {
    (function() {
        var e = Base.extend({
            events: [],
            handlers: {
                push_event: function(e, s) {
                    this.events.push(s), this.set_cookie()
                }
            },
            set_cookie: function() {
                var e = new Date,
                    s = Glbl("Site.is_stash") ? "sta.sh" : ".deviantart.com",
                    t = 0,
                    i = 1;
                for (t = 0; this.events.length > t; t++) this.events[t].days_valid > i && (i = this.events[t].days_valid);
                e.setTime(e.getTime() + Math.ceil(1e3 * 60 * 60 * 24 * i)), document.cookie = "crosspagetracking=" + JSON.stringify(this.events) + "; expires=" + e.toGMTString() + "; domain=" + s + "; path=/"
            },
            constructor: function() {
                PubSub.subscribe([{
                    eventname: "CrossPageTracking.push_event",
                    subscriber: this,
                    callback: this.handlers.push_event
                }])
            }
        });
        new e
    })(jQuery), window.DWait && DWait.run("jms/lib/tracking.js")
});
DWait.ready(["jms/lib/ruler.js", "jms/lib/jquery/jquery.current.js", "jms/lib/Base.js"], function() {
    window.Selection = {}, window.SimpleSelection = Base.extend({
        constructor: function(e, t) {
            this.setRoot(e), this.callback = t || this.fnull
        },
        fnull: function() {},
        setRoot: function(e) {
            this.root = e
        },
        getAllSelectable: function() {
            return this.root.childNodes || []
        },
        isSelectable: function(e) {
            return e.parentNode == this.root
        },
        isSelected: function(e) {
            return (" " + e.className + " ").indexOf(" selected ") >= 0
        },
        getSelection: function(e) {
            var t, i, l;
            for (l = e ? {} : [], t = this.getAllSelectable(), i = 0; t[i]; i++) this.isSelected(t[i]) && (e ? l[i] = t[i] : l.push(t[i]));
            return l
        },
        setSelection: function(e, t) {
            if (e && !this.isSelectable(e)) throw Error("Cannot select " + e);
            if (Selection.focused = this, e && this.isSelected(e)) return !0;
            var i, l;
            for (l = this.getSelection(), i = 0; l[i]; i++) this.deselect(l[i]);
            return e && (this.next_sel_click_volatile = !1, this.select(e)), this.callback(this.getSelection(void 0), l, t), !0
        },
        setRelativeSelection: function(e, t, i, l, s) {
            var n, c, r;
            return r = t ? "relative_keyboard" : "relative", c = this.getAllSelectable(), 1 > c.length ? void 0 : (n = this.getSelection(!0), i ? this.setNewAdditiveSelection.call(this, n, r, e, c, t, l, s) : this.setNewSelection.call(this, n, r, e, c), this.getSelection(!0))
        },
        setNewSelection: function(e, t, i, l) {
            for (var s in e) return s = Number(s), 0 > s + i ? this.setSelection(l[0], t) : this.setSelection(l[Math.min(l.length - 1, s + i)], t), void 0;
            this.setSelection(l[i > 0 ? 0 : l.length - 1], t)
        },
        setNewAdditiveSelection: function(e, t, i, l, s, n, c) {
            if (jQuery.isEmptyObject(e)) return this.setRelativeSelection(i, s);
            var r = 0,
                a = null;
            for (var o in e) o = Number(o), null === a && (a = o), r += 1;
            var h = null,
                u = 0;
            for (var f in n) f = Number(f), null === h && (h = f), u += 1;
            var S = f;
            null === h && (h = a, S = d, u = r);
            var d = o;
            if (0 > i)
                if (r > 1 && a == h && d != S) {
                    if (!c)
                        for (var v = Math.max(d, d + i) - 1; v >= Math.min(d, d + i); v--) this.deselect(l[Math.max(a, v + 1)])
                } else
                    for (var v = Math.max(a, a + i) - 1; v >= Math.min(a, a + i); v--) this.select(l[Math.max(0, v)]);
            else if (r > 1 && d == S && a != h) {
                if (!c)
                    for (var v = Math.min(a, a + i); Math.max(a, a + i) > v; v += 1) this.deselect(l[Math.min(d, v)])
            } else
                for (var v = Math.min(d, d + i); Math.max(d, d + i) > v; v += 1) this.select(l[Math.min(l.length - 1, v + 1)]);
            this.callback(this.getSelection(void 0), e, t)
        },
        setVerticallyRelativeSelection: function(e, t, l, s, n) {
            var c, r, a;
            if (a = t ? "relative_keyboard" : "relative", r = this.getAllSelectable(), !(1 > r.length)) {
                if (c = this.getSelection(!0), jQuery.isEmptyObject(c) && l) return this.setVerticallyRelativeSelection(e, t);
                var o = null,
                    h = 0;
                for (i in r) {
                    var u = Ruler.screen.node(r[i]);
                    if (null === o) o = u.y;
                    else if (u.y != o) break;
                    h++
                }
                return this.setRelativeSelection(e * h, t, l, s, n)
            }
        },
        select: function(e) {
            this.isSelected(e) || (e.className += " selected")
        },
        deselect: function(e) {
            e.className = e.className.replace(/\s*\bselected\b/g, "")
        },
        deselectAll: function() {
            for (var e = this.getSelection(), t = 0; e.length > t; t++) this.deselect(e[t])
        }
    }), window.DWait && DWait.run("jms/lib/simple_selection.js")
});
DWait.ready(["jms/lib/bind.js", "jms/lib/Base.js"], function() {
    window.CBC = Base.extend({
        constructor: function(t, a, i) {
            this.active_tasks = 0, this.failures = [], this.active = !1, this.callback = t, this.granular_callback = a, this.current_granular_params = i || []
        },
        pull: function(t) {
            return this.active_tasks++, this.distributable_callback.bind(this, t, this.current_granular_params)
        },
        start: function() {
            this.active = !0, this.checkForCompleteness()
        },
        setGranularParams: function(t) {
            this.current_granular_params = t ? t instanceof Array ? t : [t] : []
        },
        finish: function() {
            this.active && (this.callback(this), this.active = !1)
        },
        checkForCompleteness: function() {
            this.active_tasks || this.finish()
        },
        distributable_callback: function(t, a) {
            var i, s, n;
            if (n = this.granular_callback, t || n) {
                for (s = [], i = 2; arguments.length > i; i++) s.push(arguments[i]);
                t && t.apply(window, s), n && n.apply(window, a.concat(s))
            }
            this.active_tasks--, this.checkForCompleteness()
        }
    }), window.DWait && DWait.run("jms/lib/cbc.js")
});
DWait.ready(["jms/lib/bind.js", "jms/lib/gmi.js"], function() {
    GSTREAM_MAX_LENGTH = 1e4, GStream = GMIBase.extend({
        gmiConstructor: function() {
            this.gs_dedupe_on_splice = !0, this.contents = [], this.graveyard = [], this.domReadMeta(), this.domReadState()
        },
        REQUEST_FETCH: 1,
        domFindVisible: function() {},
        domReadOne: function() {},
        domReadState: function() {
            var t, s;
            s = this.domFindVisible();
            for (t in s) s.constructor.prototype[t] || (this.contents[t] = this.domReadOne(s[t]));
            !this.gs_offset && this.gs_count_per_page > this.contents.length && !this.gs_more_to_load && (this.gs_total = this.contents.length)
        },
        domReadMeta: function() {
            this.gs_offset = 0, this.gs_count_per_page = 24, this.gs_fetch_size = 48, this.gs_fetch_bank = 0, this.gs_total = this.gmi_args.total || void 0, this.gs_empty = this.gmi_args.empty
        },
        domDrawRange: function(t, s) {
            var i, e, n;
            for (i = 0; i != s; i++)
                if (!(this.gs_offset > i + t)) {
                    if (i + t >= Math.min(this.gs_total || GSTREAM_MAX_LENGTH, this.gs_offset + this.gs_count_per_page)) break;
                    this.domDrawItem(t + i, this.contents[t + i]) == this.REQUEST_FETCH && (void 0 === e ? e = this.gs_offset + i : n = this.gs_offset + i)
                } void 0 != e && this.dataFetch(e, Math.max(this.gs_fetch_size, (n ? n - e : 0) + 1))
        },
        domDrawItem: function() {},
        domRemoveItem: function(t) {
            t.parentNode && t.parentNode.removeChild(t)
        },
        domClearAll: function() {
            var t, s;
            t = this.domFindVisible();
            for (s in t) this.domRemoveItem(t[s])
        },
        dataSplice: function(t, s, i) {
            var e, n, o, a, h, r = 0;
            if (this.gs_dedupe_on_splice && i)
                for (e = 0; e != i.length; e++)(n = this.dataIndexOf(i[e])) >= 0 && (this.gs_hold_exposure = !0, i[e] = this.dataSplice(n, 1, [])[0] || i[e], this.gs_hold_exposure = !1, n != t + e && r++);
            for (this.gs_empty && i.length && (this.gmi_node.innerHTML = "", this.gs_empty = !1), e = this.contents.length; t > e; e++) this.contents[e] = null;
            for (h = this.contents.splice.apply(this.contents, [t, s].concat(i || [])), this.graveyard = this.graveyard.concat(h), void 0 !== this.gs_total && (this.gs_total += (i || []).length - h.length), e = 0; s > e; e++) t + e >= this.gs_offset && this.gs_count_per_page > e && (o || (o = this.domFindVisible()), (a = o[t + e]) && (this.domRemoveItem(a), r++));
            var d = i ? i.length : 0;
            return r = Math.max(r, d, (this.gs_total || this.contents.length) + (d - r) - t % this.gs_count_per_page), i && i.length && (this.domDrawRange(t, r), r = 0), r > 0 && !this.gs_hold_exposure && this.domDrawRange(this.gs_offset + (this.gs_count_per_page - r), r), h
        },
        dataIndexOf: function(t) {
            var s;
            for (s = 0; s != this.contents.length; s++)
                if (this.contents[s] && this.dataCompare(this.contents[s], t)) return s;
            return -1
        },
        dataFetch: function() {},
        dataFilterArray: function(t, s, e) {
            var n = {};
            for (i = 0; i != s.length; i++) n[i + t] = s[i];
            return this.dataFilter(n, e)
        },
        dataFilter: function(t, s) {
            var i, e, n, o, a;
            o = {};
            for (e in t)
                if (!(e in t.constructor.prototype)) {
                    for (void 0 === a && (a = Number(e)), n = t[e], i = 0; i != this.graveyard.length; i++)
                        if (this.graveyard[i] && this.dataCompare(this.graveyard[i], n)) {
                            s ? this.graveyard.splice(i) : i = -1;
                            break
                        } - 1 != i && (o[a++] = n)
                } return o
        },
        dataCompare: function() {
            return !1
        },
        dataAdd: function(t) {
            var s, i;
            i = this.gs_offset + this.gs_count_per_page;
            for (s in t) this.contents[s] = t[s], s >= this.gs_offset && i > s && this.domDrawItem(s, this.contents[s])
        },
        commsAskForTargets: function() {
            return []
        },
        commsRecvDrop: function() {},
        commsNonInputEvent: function() {}
    }), window.DWait && DWait.run("jms/lib/gstream/gstream.js")
});
DWait.ready(["jms/lib/station.js", "jms/lib/simple_selection.js", "jms/lib/difi.js", "jms/lib/bind.js", "jms/lib/jquery/jquery.current.js", "jms/lib/gstream/gstream.js"], function() {
    window.ResourceStream = GStream.extend({
        gmiConstructor: function() {
            if (this.active_fetches = {}, this.base(), 1 === parseInt(this.gmi_args.duperbrowse_enabled, 10)) {
                this.$.removeClass("dwait");
                var e = this,
                    t = "Duperbrowse" + (this.gmi_args.duperbrowse_class || "Standard") + "ResourceStream";
                window[t] ? (ddt.log("Duperbrowse", "Factory resource stream"), DuperbrowseStandardResourceStream.prototype.factory(e.gmi_args, e)) : DWait.ready("jms/pages/duperbrowse/stream/" + (this.gmi_args.duperbrowse_class || "Standard").toLowerCase() + ".resource.stream.js", function() {
                    ddt.log("Duperbrowse", "Factory resource stream Dwait"), DuperbrowseStandardResourceStream.prototype.factory(e.gmi_args, e)
                })
            }
        },
        domReadOne: function(e) {
            var t = (e.getAttribute("collect_rid") || "0:0").split(":");
            return [Number(t[0]), Number(t[1]), e]
        },
        domFindVisible: function() {
            var e = {},
                t = this;
            return this.$.find("span.thumb, .tt-a, .tt-crop, .rs-customicon-cont, .gl-text").filter(function() {
                return !this.getAttribute("rs_ignore")
            }).each(function(s) {
                e[s + t.gs_offset] = this
            }), e
        },
        domReadMeta: function() {
            var e;
            if (this.gmi_args.query_params ? (e = this.gmi_args.query_params.favby || this.gmi_args.query_params.gallery || "", this.gs_offset = Number(this.gmi_args.query_params.offset) || 0, this.gs_count_per_page = this.gmi_args.query_params.length = Number(this.gmi_args.count_per_page), this.gs_title = this.gmi_args.title, this.gs_more_to_load = this.gmi_args.has_more) : (e = this.gmi_args.query || "", this.gs_offset = Number(this.gmi_args.offset) || 0, this.gs_count_per_page = Number(this.gmi_args.count_per_page) || 24, this.gs_title = this.gmi_args.title, this.gs_more_to_load = this.gmi_args.more_to_load), e) {
                var t = this.gs_offset;
                $(this.gmi_node).find(".tt-a,.tt-aa").each(function() {
                    $(this).find("a.thumb, a.t").each(function() {
                        var s = $(this),
                            i = s.attr("href");
                        if (i && -1 != i.indexOf("/art/") && -1 == i.indexOf("?q=")) {
                            var r = i.indexOf("?") > -1 ? "&" : "?";
                            s.attr("href", i + r + "q=" + encodeURIComponent(e) + "&qo=" + t)
                        }
                    }), t++
                })
            }
            this.gs_fetch_size = 1 === parseInt(this.gmi_args.duperbrowse_enabled, 10) ? this.gs_count_per_page : Math.max(24, this.gs_count_per_page), this.gs_fetch_bank = 0
        },
        removeThumbFromView: function(e) {
            var t = this.domFindVisible();
            (v = t[e]) && this.domRemoveItem(v)
        },
        refreshResources: function(e) {
            this.removeThumbFromView(e), this.contents.splice(e, 1);
            var t = Object.keys(this.contents).length,
                s = this.gs_offset + this.gs_count_per_page - 1;
            t > this.gs_count_per_page ? this.domDrawItem(s, this.contents[s]) : this.gs_more_to_load && this.dataFetch(s)
        },
        domDrawItem: function(e, t, s) {
            var i, r, a;
            if (!(e > this.contents.length)) {
                if (s = s || this.domFindVisible(), void 0 == t) r = this.REQUEST_FETCH;
                else {
                    if ("string" == typeof t[2]) {
                        var o = document.createElement("div");
                        o.innerHTML = t[2], t[2] = o.getElementsByTagName("*")[0]
                    }
                    i = t[2]
                }
                if (s[e]) {
                    if (i != s[e]) {
                        if (a = this.preview_selector)
                            if (a.isSelected(s[e])) {
                                var n = i.getAttribute("collect_rid");
                                n && n != (s[e].getAttribute("collect_rid") || n) && (a = null)
                            } else a = null;
                        if (void 0 != i && ($(i).insertBefore(s[e]), this.domRemoveItem(s[e])), a) {
                            if (!a.isSelectable(i)) return a.setRelativeSelection(1), void 0;
                            a.setSelection(i)
                        }
                    }
                } else i && (this.emMakeEditable(i), this.gmi_node.appendChild(i));
                return i && i.setAttribute("gs_offset", e), r
            }
        },
        domRemoveItem: function(e) {
            e.parentNode && ("A" == (e.nextSibling || {}).tagName && e.parentNode.removeChild(e.nextSibling), e.parentNode.removeChild(e))
        },
        dataFetch: function(e) {
            var t, s;
            s = (new Date).valueOf();
            var i = {};
            this.gmi_args.query_params ? i = this.gmi_args.query_params : this.gmi_args.fetch_proxy && (i = this.gmi_args.fetch_proxy.gmi_args.query_params), i.offset = e, t = ["PortalCore", "get_result_thumbs", ["browse", i]];
            var r = t.join(";");
            t.push(this.dataFetchComplete.bind(this, r, e, this.gs_count_per_page, s)), this.active_fetches[r] > (new Date).valueOf() || (this.active_fetches[r] = (new Date).valueOf() + 2e4, DiFi.pushPublicGet.apply(DiFi, t), DiFi.timer(this.gs_difi_delay || 1))
        },
        dataFetchComplete: function(e, t, s, i, r, a) {
            r ? (this.cleanUpData(a.response.content.resources), this.gs_more_to_load = a.response.content.has_more, this.dataAdd(this.dataFilterArray(t, a.response.content.resources))) : ("NOEXEC_HALT" != a.response.status || "file:" == window.document.location.protocol) && DiFi.stdErr(null, a.response.content)
        },
        dataAdd: function(e) {
            var t = this.contents.map(function(e) {
                return e[1]
            });
            for (var s in e) {
                var i = t.indexOf(e[s][1]);
                if (-1 == i) {
                    if (this.gmi_args.count_per_page > this.contents.length || this.gmi_args.count_per_page > $(this.gmi_node).find(".tt-a,.tt-aa").length) {
                        var r = $(e[s][2])[0];
                        this.emMakeEditable(r), $(this.gmi_node).append(r)
                    }
                    this.contents[s] = e[s]
                }
            }
        },
        cleanUpData: function(e) {
            var t;
            for (t in e) t in e.constructor.prototype || ("number" != typeof e[t][0] && (e[t][0] = Number(e[t][0])), "number" != typeof e[t][1] && (e[t][1] = Number(e[t][1])))
        },
        dataCompare: function(e, t) {
            return e[0] == t[0] && e[1] == t[1]
        },
        setQuery: function(e) {
            this.resource_stream_query = e, this.gs_offset = 0, this.gs_total = e ? void 0 : 0, this.contents = [], this.domDrawRange(0, 24)
        },
        emMakeEditable: function(e) {
            GMI.query(e, "GalleryArrowMenu")[0] || GMI.create("GalleryArrowMenu", {
                stream_proxy: this,
                has_remove_menu: this.gmi_args.has_remove_menu,
                selection_proxy: this.selector,
                browse_view_mode: this.gmi_args.browse_view_mode,
                mode: (this.gmiUp("Gruser") || this).gmi_args.group ? "modern" : "modern"
            }).addToStreamItem(e)
        }
    }), window.ResourceTV = ResourceStream.extend({}), window.GPageButton = ResourceStream.extend({
        domDrawItem: function() {},
        dataSplice: function() {},
        domFindVisible: function() {}
    }), window.RES_SEL_EXT = {
        getAllSelectable: function() {
            var e, t, s;
            e = [];
            var i = $(this.root).children();
            for (t = 0; s = i[t]; t++)
                if (this.isSelectable(s)) e.push(s);
                else if (1 == s.nodeType && "gmi-ResourceScatter" == s.getAttribute("name")) break;
            return e
        },
        isSelectable: function(e) {
            var t = e.parentNode;
            if (!t) return !1;
            var s = $(e);
            if (s.closest("[rs_ignore]").length) return !1;
            var i = !1;
            try {
                i = 1 == window.deviantART.deviant.browseadult
            } catch (r) {}
            return t == this.root && s.is(".tt-a, .rs-customicon, .gl-text") && !(!i && s.is(".tt-ismature") && s.closest("#browse2").length) && !e.getAttribute("rs_ignore")
        }
    }, window.ResourceStreamSimpleSelection = SimpleSelection.extend(RES_SEL_EXT), window.DWait && DWait.run("jms/lib/gstream/resource_stream.js")
});
DWait.ready(["jms/lib/difi.js", "jms/lib/bind.js", "jms/lib/jquery/jquery.current.js", "jms/lib/gstream/resource_stream.js"], function() {
    window.PortalCoreResourceStream = ResourceStream.extend({
        dataFetch: function(e, t) {
            var s = $.extend(this.gmi_args.query_params, {
                    offset: Number(e),
                    length: Number(t)
                }),
                r = this.gmi_args.portal || "browse",
                i = ["PortalCore", "get_result_thumbs", [r, s]],
                a = i.join(";");
            i.push(this.dataFetchComplete.bind(this, a, e, t)), this.active_fetches[a] > (new Date).valueOf() || (this.active_fetches[a] = (new Date).valueOf() + 2e4, DiFi.pushPublicGet.apply(DiFi, i), DiFi.timer(this.gs_difi_delay || 1))
        },
        dataFetchComplete: function(e, t, s, r, i) {
            var a = i.response.content;
            this.active_fetches[e] = 1, r ? (this.cleanUpData(a.resources), this.dataAdd(this.dataFilterArray(Number(t), a.resources instanceof Array ? a.resources : []))) : "NOEXEC_HALT" != i.response.status && DiFi.stdErr(null, a)
        }
    }), window.DWait && DWait.run("jms/lib/gstream/portal_core_resource_stream.js")
});
DWait.ready(["jms/lib/Base.js"], function() {
    WatchableObject = Base.extend({
        constructor: function() {
            this._wo_listeners = []
        },
        addListener: function(s) {
            if (!s) throw Error("Blank listener");
            return this._wo_listeners.push(s), !0
        },
        removeListener: function(s) {
            var i;
            for (i = 0; i != this._wo_listeners.length; i++)
                if (this._wo_listeners[i] == s) return this._wo_listeners.splice(i, 1), this._wo_sm_i >= i && this._wo_sm_i--, !0;
            return !1
        },
        broadcast: function() {
            if (void 0 != this._wo_sm_i) throw Error("Possible WO feedback loop");
            try {
                for (this._wo_sm_i = 0; this._wo_sm_i != this._wo_listeners.length; this._wo_sm_i++) this._wo_listeners[this._wo_sm_i].apply(this, arguments)
            } finally {
                this._wo_sm_i = void 0
            }
        }
    }), window.DWait && DWait.run("jms/lib/wo.js")
});
DWait.ready(["jms/lib/browser.js", "jms/lib/jquery/jquery.current.js", "jms/lib/bind.js", "jms/lib/wo.js"], function() {
    BFC = WatchableObject.extend({
        boot: function() {
            this.shout = this.shout.bind(this), "onhashchange" in window ? window.onhashchange = this.event : this.location_interval || (this.location_interval = setInterval(this.shout, 150), this.shout())
        },
        unboot: function() {
            this.location_interval ? (clearInterval(this.location_interval), this.location_interval = null) : window.onhashchange = null
        },
        addListener: function(t) {
            this.shout(), this.base(t), t("navigate", this.previous)
        },
        event: function() {
            BackForward.shout()
        },
        shout: function(t) {
            var o;
            if ("string" == typeof t ? o = t : window.location.hash.length > 0 ? (o = $("<div>").text(window.location.hash).html().substr(1), o = o.replace("&amp;", "&")) : o = "", this.previous != o) {
                if ((this.timeout || 0) > (new Date).valueOf()) return;
                this.previous = o, this.broadcast("navigate", o)
            }
        },
        load: function(t) {
            this.previous != t && (this.shout(t), t || (this.timeout = (new Date).valueOf() + 800), window.location.hash = t)
        },
        iframe: function(t) {
            var o;
            document.frames.da_backforward || ($("<iframe>", {
                name: "da_backforward",
                id: "da_backforward",
                css: {
                    position: "absolute",
                    left: 0,
                    top: "-1000px",
                    width: "1px",
                    height: "1px"
                }
            }).prependTo("body"), this.IE_bypass_firstrun && "" != window.location.hash || arguments.callee("")), o = document.frames.da_backforward, o.document.open("text/html"), o.document.write("<html><head><title>" + document.title + "</title></head><body onl" + "oad=\"parent.location.hash = '" + t + "';parent.BackForward.shout()\"></body></html>"), o.document.close()
        }
    }), BackForward = new BFC, $(BackForward.boot()), window.DWait && DWait.run("jms/lib/backforward.js")
});
DWait.ready(["jms/lib/difi.js", "jms/lib/browser.js", "jms/lib/ruler.js", "jms/lib/jquery/jquery.current.js", "jms/lib/bind.js", "jms/lib/events.js"], function() {
    AdZone = function(i, t, e, s, a) {
        this.ad = {}, this.zones = i, this.keys = t || {}, this.size = e, this.min_time = s, Events.hook(window, "resize", this.position = this.position.bind(this)), this.start_counting_stats = (new Date).valueOf() + 1e3, this.master_anchor = a
    }, AdZone.prototype = {
        destructor: function() {
            this.need(0, 0, !0), this.hide(), this.dead = 1, Events.unhook(window, "resize", this.position)
        },
        getDiv: function() {
            return this.ad.div
        },
        hide: function() {
            this.ad.div && this.anchor && $(this.ad.div).addClass("hidoframe"), this.anchor = null
        },
        show: function(i) {
            var t;
            if (!this.dead) {
                if (!this.master_anchor) throw Error("Cannot display ad without " + (this.auto ? "auto " : " ") + "anchor point. Use AdZone.getHTML() to create an anchor point");
                return (t = document.getElementById("ad-footprint-" + this.size.toLowerCase()) || this.master_anchor) ? ((this.anchor != t || i) && (this.anchor = t, this.ad.div && (this.position(), $(this.ad.div).removeClass("hidoframe"), this.ad.div.style.display = "block", this.ad.div.firstChild.style.display = "block")), void 0) : !1
            }
        },
        position: function() {
            var i, t, e;
            if (this.ad.div && this.anchor) {
                for (i = this.anchor; !i.offsetWidth;)
                    if (i = i.parentNode, !i) return;
                i = Ruler.document.node(i), t = 0, e = this.ad.div, e.style.zIndex = 121, Browser.isIE && e.parentNode && "DIV" == e.parentNode.tagName && (e.parentNode.style.zIndex = 121), e.style.left = "auto", e.style.right = (document.getElementById("dv7") || document.getElementById("output") || document.body).offsetWidth - i.x2 + "px", e.style.top = i.y + "px", e.style.visibility = "visible"
            }
        },
        fetch: function(i, t, e) {
            var s, a, h, d;
            if ((!this.always_flush_difi && 0 != DiFi._queue.length || !(this.ad.div || this.no_refetch_while_busy && this.busy)) && (s = (new Date).valueOf(), this.marker = (new Date).valueOf(), a = this.getParams("zones", i), this.last_main_zone = a[0], this.last_keys = this.getSerializedKeys(), this.last_size = this.size, a[0])) {
                var n = this.frame_zone ? this.frame_zone : "728x90" == this.size ? "atf_top_728x90" : "atf_right_" + (this.size || "160x600"),
                    o = this.getSerializedKeys();
                o || (o = "section:messagecenter"), this.busy = 1, this.always_flush_difi && DiFi.send(), d = {
                    ad_frame: n,
                    ad_keys: o,
                    ad_buster: s,
                    ad_mature: Number(Boolean(i)),
                    ad_ignore1: e,
                    ad_d: this.size
                }, h = ((location.href.split("#")[0].split("?")[1] || "").match(/swapAdZone=([^\&]+)/) || [])[1], h && (d.swapAdZone = h);
                var r = ((location.href.split("#")[0].split("?")[1] || "").match(/force_unanimis=([^\&]+)/) || [])[1];
                r && (d.force_unanimis = r), DiFi.pushPage("difi", d, this.difi.bind(this, this.marker, i)), DiFi.pushPublicGet("MessageCenter", "placebo_call", []), this.always_flush_difi && DiFi.send()
            }
        },
        difi: function(i, t, e, s) {
            var a;
            if (!this.dead)
                if (a = (t ? "M" : "g") + "->" + (s.maturecontent ? "M" : t ? "m" : "g"), this.busy = 0, i == this.marker)
                    if (s.ad) {
                        if (this.ad.div) {
                            try {
                                delete this.ad.div.firstChild
                            } catch (h) {
                                this.ad.div.innerHTML = ""
                            }
                            this.ad.div.parentNode.removeChild(this.ad.div), this.ad = {}
                        } else this.ad.next_ad;
                        this.ad = {
                            next: (new Date).valueOf() + 1e3 * this.min_time,
                            mature: s.maturecontent || t,
                            div: e
                        }, this.anchor && this.show(!0)
                    } else this.ad.div && this.anchor && this.show(!0);
            else if (e) {
                try {
                    delete e.firstChild
                } catch (h) {
                    e.innerHTML = ""
                }
                e.parentNode.removeChild(e)
            }
        },
        getParams: function(i, t) {
            var e;
            return e = this[i], "function" == typeof e && (e = e(t)), e instanceof Array || (e = [e]), e
        },
        resetKeys: function() {
            this.keys = {}
        },
        setKey: function(i, t) {
            this.keys[i] = t
        },
        getKey: function(i) {
            return this.keys[i]
        },
        getSerializedKeys: function() {
            var i = [];
            for (var t in this.keys) i.push(t + ":" + this.keys[t]);
            return i.join(",")
        },
        need: function(i, t, e) {
            var s;
            if (this.ad.div && (e === !0 || this.getParams("zones", i)[0] != this.last_main_zone || this.getSerializedKeys() != this.last_keys && !this.allow_key_changes || this.size != this.last_size || (new Date).valueOf() > (this.ad.next || 0))) {
                this.hide();
                try {
                    delete this.ad.div.firstChild
                } catch (a) {
                    this.ad.div.innerHTML = ""
                }
                this.ad.div.parentNode.removeChild(this.ad.div), this.ad = {}
            }
            if (e !== !0) {
                if (this.ad.mature) {
                    if (this.ad.div && (s = "m"), i) return
                } else if (this.ad.div && (s = "g"), i && this.ad.div) {
                    try {
                        delete this.ad.div.firstChild
                    } catch (a) {
                        this.ad.div.innerHTML = ""
                    }
                    this.ad.div.parentNode.removeChild(this.ad.div), this.ad = {}
                }
                this.fetch(i, t, this.no_ignores ? "" : s || "")
            }
        }
    }, window.DWait && DWait.run("jms/lib/adzone.js")
});
DWait.ready(["jms/lib/Base.js", "jms/lib/jquery/jquery.current.js", "jms/lib/glbl.js", "jms/lib/bind.js", "jms/lib/backforward.js", "jms/lib/wo.js"], function() {
    window.URLManagerBase = WatchableObject.extend({
        constructor: function(t, a) {
            var i;
            this.base(), this.options = a || {}, this.defaults = t || {}, this.map = {}, this.cb = !1;
            for (i in this.defaults) this.map[i] = this.defaults[i];
            this.options.no_hash_change || BackForward.boot(), this.backforward_listen = BackForward.addListener(this.backforwardCallback.bind(this))
        },
        destructor: function() {
            BackForward.removeListener(this.backforward_listen)
        },
        addListener: function(t, a) {
            return a && t(this.map, this.map), this.base(t)
        },
        set: function(t) {
            var a, i;
            i = {};
            for (a in this.map) i[a] = a in t ? t[a] : this.map[a];
            this.options.no_hash_change ? this.broadcast(i) : BackForward.load(this.locationStateToString(i))
        },
        setLoadCallback: function(t) {
            this.cb = t
        },
        backforwardCallback: function(t, a) {
            var i;
            i = this.locationStringToState(a, {}), this.broadcast(i)
        },
        broadcast: function(t) {
            window.Messages && !Glbl("Location.pushstate_enabled") && ($.isEmptyObject(t) || $.each(t, function(a, i) {
                "string" === $.type(i) && i.match(/[?&]_sid=([abcdef0-9]+)/) && (t[a] = i.replace(/[?&]_sid=([abcdef0-9]+)/, ""), Glbl("Duperbrowse.message_centre_hack_skip_next_state_change", !0))
            }));
            var a, i, s;
            a = {};
            for (i in this.defaults) s = i in t ? t[i] : (this.options.ignore_blanks ? this.map[i] : null) || this.defaults[i], s != this.map[i] && (a[i] = s, this.map[i] = s);
            for (i in a) {
                this.base(t, a);
                break
            }
            this.cb && (this.cb(), this.cb = !1)
        },
        locationStateToString: function() {
            throw Error("I need subclassing")
        },
        locationStringToState: function() {
            throw Error("I need subclassing")
        }
    }), window.URLQueryString = URLManagerBase.extend({
        locationStateToString: function(t) {
            var a, i;
            i = [];
            for (a in this.map) a in t && t[a] != this.defaults[a] && escape(t[a]) && i.push(a + "=" + escape(t[a]));
            return i.join("&")
        },
        locationStringToState: function(t) {
            var a, i, s;
            for (t = t.split("&"), s = {}, a = 0; a != t.length; a++) i = t[a].split("="), i[0] in this.map && (s[i[0]] = unescape(i.slice(1).join("=")));
            return s
        }
    }), REG_BROWSE_OVERLAY = /^(edit)?\/d[0-9a-z]+$/, window.BrowseAwareURLQueryString = URLQueryString.extend({
        backforwardCallback: function(t, a) {
            (a || "").match(REG_BROWSE_OVERLAY) || this.base.apply(this, arguments)
        }
    }), window.DWait && DWait.run("jms/lib/urlmanager.js")
});
DWait.ready(["jms/lib/urlmanager.js"], function() {
    window.URLBrowseLink = URLManagerBase.extend({
        locationStateToString: function(t) {
            return t.deviationid ? "/d" + Number(t.deviationid).toString(36) : this.sp_url_backup || ""
        },
        locationStringToState: function(t) {
            var i = "edit" == t.substr(0, 4) ? 6 : 2,
                n = t.match(REG_BROWSE_OVERLAY) ? parseInt(t.substr(i), 36) : this.spBackupURL(t);
            return {
                mode: 6 == i ? "edit" : "view",
                deviationid: n
            }
        },
        spBackupURL: function(t) {
            return this.sp_url_backup = t, null
        }
    }), window.DWait && DWait.run("jms/pages/superbrowse/browse_urlm.js")
});
DWait.ready(["jms/lib/cbc.js", "jms/lib/Base.js"], function() {
    PreviewLoaderQueueMasterCount = 0, PreviewLoaderQueue = Base.extend({
        GUID: 7,
        LOADER_WANT_IMAGE: 1,
        LOADER_NOT_NEEDED: 2,
        LOADER_FAILED: 3,
        LOADER_COMPLETE: 4,
        constructor: function(e, u) {
            this.queue = {}, this.args = e, this.debug_label = u, this.current_pid = 1e3, this.GUID += PreviewLoaderQueueMasterCount++
        },
        setRequest: function(e, u, i, t) {
            var s;
            e = "d" + e, s = this.queue[e] || {}, s.state != this.LOADER_COMPLETE && (s.working || i != this.LOADER_NOT_NEEDED ? this.queue[e] = {
                state: i,
                working: s.working || 0,
                node: u,
                cbc: t,
                cbcf: t && t.pull()
            } : (this.queue[e] && this.queue[e].cbc && (this.queue[e].cbc.failures.push({
                err: "DO_NOT_WANT",
                human: "No longer desired"
            }), this.queue[e].cbcf()), this.queue[e] = null, delete this.queue[e]), this.runRequests())
        },
        queueCount: function(e) {
            var u, i = 0;
            for (u in this.queue)(this.queue[u].working || !e) && i++;
            return i
        },
        runRequests: function() {
            var e, u, i, t, s, r = 1;
            for (e = 0, this.$_(u, null, "Look for jobs"), s = 0; 2 != s; s++)
                for (u in this.queue)
                    if (i = this.queue[u], 0 == s && i.working ? e++ : 1 != s || i.state != this.LOADER_WANT_IMAGE || i.working || (e++, i.working = 1, this.$_(u, i, "Run"), i.pid = this.current_pid++, setTimeout(this.requestDone.bind(this, u, !1, i.pid), 8e3), t = new CBC(this.requestDone.bind(this, u)), this.args.callback(u, i.node, t), t.start()), e >= r) break
        },
        requestDone: function(e, u, i) {
            var t;
            if (u === !1) {
                if (!this.queue[e] || i && i != this.queue[e].pid) return this.queue[e] && (this.queue[e].working = 0, this.queue[e].state = this.LOADER_FAILED), this.$_(e, this.queue[e], "Fail: Soft"), void 0;
                this.$_(e, this.queue[e], "Fail: Hard"), this.queue[e].working = 0, this.queue[e].timeout_pid = i, t = 1
            } else t = 1, this.$_(e, this.queue[e], "Success");
            this.queue[e] && this.queue[e].cbc ? (u || this.queue[e].cbc.failures.push(i ? "Loading timeout" : "Unknown Failure"), this.queue[e].cbcf()) : u && this.$_(e, this.queue[e], "No callback"), t && delete this.queue[e], this.runRequests()
        },
        _debugQueue: function() {
            var e, u, i;
            i = {};
            for (e in this.queue) u = this.queue[e], i[e] = Number(u.working) + " / " + Number(u.working) + " ! " + (u.timeout_pid || "_");
            return i
        },
        $_: function(e, u, i) {
            "Images" == this.debug_label && window.DiFiBug && DiFiBug.sessionUpdate(this, this.GUID + " [" + this.queueCount() + ":" + this.queueCount(1) + "] " + (e || "%") + " ! " + i, !1, !0, !0)
        }
    }), $dppd = function() {
        da_preview_master.current_stream.image_loader._debugQueue()
    }, window.DWait && DWait.run("jms/pages/superbrowse/loader_queue.js")
});
DWait.ready(["jms/lib/analytics.js", "jms/lib/pubsub.js", "jms/lib/gmi.js"], function() {
    window.PreviewStreamControls = GMIBase.extend({
        gmiConstructor: function() {
            this.gmi_node.style.display = "none", this.gmi_node.innerHTML = this.template, this.gmi_node.onmousemove = this.mouseOver.bind(this)
        },
        gmiDestructor: function() {
            delete this.switcher
        },
        template: '<a class="lrx l-arrow lldr" href="" onmousedown="GMI.up(this).left();" onclick="return GMI.evCancel()"><span class="slrx"></span></a> <a class="lrx r-arrow rrdr" href="" onmousedown="GMI.up(this).right();" onclick="return GMI.evCancel()"><span class="slrx"></span></a> <a class="lrx x-arrow h-ignore" href="" onclick="GMI.up(this).back();return GMI.evCancel()"><span class="flrx h-ignore">show all</span><span class="slrx h-ignore"></span></a> <a class="lrx x-text" href="" onclick="GMI.up(this).back();return GMI.evCancel()">show all</a> ',
        back: function() {
            this.stream.preview_selector.setSelection(null, "escape")
        },
        left: function() {
            PubSub.publish("DaGa.track_event", {
                category: "SuperBrowse",
                action: "navigate_prev"
            }), this.stream.preview_selector.setRelativeSelection(-1)
        },
        right: function() {
            PubSub.publish("DaGa.track_event", {
                category: "SuperBrowse",
                action: "navigate_next"
            }), this.stream.preview_selector.setRelativeSelection(1)
        },
        mouseOver: function() {
            this.stream.navigationMouseHint()
        },
        updateState: function() {}
    }), window.DWait && DWait.run("jms/pages/superbrowse/preview_controls_light.js")
});
DWait.ready(["jms/lib/simple_selection.js", "jms/pages/superbrowse/preview_stream.js", "jms/pages/lub/lub_constants.js", "jms/lib/gstream/resource_stream.js"], function() {
    window.PreviewStreamSelection = ResourceStreamSimpleSelection.extend({
        onclick: function(e) {
            var t;
            for (e = e || window.event, t = e.target || e.srcElement;
                "A" != t.tagName && (t = t.parentNode););
            return t && (t.href.match(REG_DEVIATION_2) || t.href.match(REG_OLD_DEVIATION_2) || t.href.match(REG_DEVIATION_3)) ? this.base(e) : !0
        },
        select: function(e) {
            e.className += " ps-selected"
        },
        deselect: function(e) {
            e.className = e.className.replace(/\s+\bps.selected\b/g, "")
        },
        isSelected: function(e) {
            return (e.className || "").indexOf("ps-selected") >= 0
        },
        isSelectable: function(e) {
            var t;
            return this.base(e) ? (t = OUTLINE_PreviewStream.previewLinkFromThumb(e), Boolean((e.className || "").indexOf("placeholder") >= 0 || (e.className || "").indexOf("tt-special") >= 0 || t && (t.href.match(REG_DEVIATION_2) || t.href.match(REG_OLD_DEVIATION_2) || t.href.match(REG_DEVIATION_3)))) : !1
        },
        setRelativeSelection: function(e, t) {
            var s, i, a, l, n;
            i = this.getSelection(!0), l = this.preview_stream_owner;
            for (a in i) {
                if (a = Number(a), i = this.getAllSelectable(), 0 > a + e && l.gs_offset > 0) n = Math.max(0, l.gs_offset - l.gs_count_per_page), this.setSelection(null, "temporary_blank_selection"), l.previewLoadOffset(n), i = this.getAllSelectable(), s = i.length - 1;
                else if (a + e >= l.gs_count_per_page || e > 0 && a == i.length - 1) {
                    if (n = l.gs_offset + l.gs_count_per_page, n > l.contents.length || "1" !== l.gs_more_to_load) return;
                    this.setSelection(null, "temporary_blank_selection"), l.previewLoadOffset(n), i = this.getAllSelectable(), s = 0
                }
                break
            }
            void 0 != s ? this.setSelection(i[s], t ? "relative_keyboard" : "relative") : this.base(e, t)
        },
        setSelection: function(e, t) {
            return e && this.isSelected(e) ? (this.callback(this.getSelection(), [], t), !0) : this.base(e, t)
        },
        onkeydown: function(e) {
            var t;
            return this.preview_active ? t = this.base(e) : !0
        }
    }), window.DWait && DWait.run("jms/pages/superbrowse/preview_selection.js")
});
DWait.ready(["jms/lib/browser.js", "jms/lib/gstream/resource_stream.js"], function() {
    OUTLINE_PreviewStream = {
        previewLinkFromThumb: function(e) {
            var o;
            return o = "object" == typeof e && e.getElementsByTagName("a") || [], o[0] && !o[0].href ? o[1] : o[0]
        },
        domClearAll: function() {
            var e, o;
            e = this.domFindVisible();
            for (o in e) this.gmi_node.removeChild(e[o])
        }
    }, window.PreviewStream = ResourceStream.extend(OUTLINE_PreviewStream), PreviewStream.scrollTo = function(e) {
        window.scrollTo ? window.scrollTo(0, e) : (Browser.isGecko ? document.documentElement : document.body).scrollTop = e || 0, 0 === e && Browser.isChrome && setTimeout(function() {
            document.body.scrollTop = 1
        }, 1)
    }, window.DWait && DWait.run("jms/pages/superbrowse/preview_stream.js")
});
DWait.ready([".domready", "jms/lib/jquery/jquery.current.js", "jms/lib/glbl.js", "jms/lib/pubsub.js", "jms/lib/Base.js", "jms/lib/analytics.js"], function() {
    (function(i, a) {
        var o = Base.extend({
            _GA_List: {
                1: "BrowseArt",
                2: "PrintsShop",
                3: "Journals",
                4: "Chat",
                5: "Today",
                6: "Forum",
                8: "MyProfile",
                10: "HelpFAQ",
                11: "MyJournal",
                18: "MyGallery",
                19: "MyFavorites",
                23: "RandomDeviant",
                24: "RandomDeviation",
                27: "DailyDeviation",
                33: "MyFriends",
                34: "Wallpaper",
                39: "Discover",
                40: "Critiques",
                41: "Critiqueable",
                42: "MyPortfolio",
                44: "Groups",
                45: "RandomGroup",
                54: "MyPoints",
                55: "MyEarnings",
                56: "Correspondence",
                90: "Muro",
                97: "Stash"
            },
            $node: null,
            constructor: function() {
                var o = this;
                if (this.$node = i("#overhead"), this.$node.on) {
                    var t = i(document.body).hasClass("no-apps") ? "dropdown" : "horizontal";
                    this.$node.find("a.mi[appid]").each(function() {
                        var n = i(this);
                        o._GA_List[n.attr("appid")] && a.DaGa.add_link_tracking(n, "MoreMenu", o._GA_List[n.attr("appid")], t)
                    })
                }
            },
            setHTML: function(a) {
                if (a || this.backup) {
                    var o = this.$node.find("tr>*:not(.oh-mmain):not(.oh-gap):not(.oh-keep):not(.collectmenu)").detach();
                    this.backup || (this.backup = o), a || (a = this.backup, this.backup = null);
                    var t = i(a);
                    Glbl("Site.is_stash") && t.each(function(a, o) {
                        i(o).hasClass(".shorturl-publicview") && this.$node.find("tr>.oh-gap").after(t.splice(a, 1))
                    }), this.$node.find("tr>.oh-mmain").after(t)
                }
            }
        });
        a.da_overhead_box = new o
    })(jQuery, window), window.DWait && DWait.run("jms/chrome/overhead_html.js")
});
DWait.ready(["jms/lib/analytics.js", "jms/lib/jquery/plugins/jquery.easing.js", "jms/lib/ruler.js", "jms/lib/browser.js", "jms/lib/events.js", "jms/pages/lub/lub_constants.js", "jms/lib/station.js", "jms/lib/popup2.js", "jms/lib/pubsub.js", "jms/lib/difi.js", "jms/lib/jquery/jquery.current.js", "jms/lib/gmi.js"], function() {
    ResourceViewFavouriteButton = GMIBase.extend({
        add_text: "Add to Favourites",
        remove_text: "In Favourites",
        remove_text_alt: "Remove Favourite",
        add_collection_text: "Add new...",
        adding_text: "...",
        removing_text: "...",
        add_success_text: "Thanks!",
        remove_success_text: "Removed",
        gmiConstructor: function() {
            this.alive = 1, this.refresh(), this.bind(), this.is_faved = Boolean(Number(this.gmi_args.is_faved)), PubSub.subscribe({
                eventname: "Lub.deviation_favourited",
                subscriber: this,
                callback: this.simulateButtonClick
            })
        },
        gmiDestructor: function() {
            this.alive = 0, PubSub.unsubscribe({
                eventname: "Lub.deviation_favourited",
                subscriber: this
            })
        },
        bind: function() {
            var e = this;
            $(this.gmi_node).mouseover(this.mouseOver.bind(this)).mouseout(this.mouseOut.bind(this)).mousemove(this.mouseMove.bind(this)).click(function() {
                return e.send(), !1
            }), "gmi-ResourceViewFavouriteButton" == $(this.gmi_node).attr("id") && (this.favesnav = $(this.gmi_node).parent().find("#favesnav ul"), this.favesnav.mousedown(this.favesnavMouseDown.bind(this)).mouseover(this.favesnavMouseDelay.bind(this)).mouseleave(this.favesnavMouseOut.bind(this)), this.favesnav_arrow = $(this.gmi_node).parent().find("#favesnav div.favesnav-downarrow"), this.favesnav_arrow.mouseover(this.favesnavMouseOver.bind(this)).mouseover(this.favesnavMouseAppearDelay.bind(this)).mouseleave(this.favesnavMouseOut.bind(this)).click(function() {
                return !1
            })), e.favesnav.bind("ADD_TO_COLLECTION", function(t, i, s) {
                PubSub.publish("DaGa.track_event", {
                    category: "Collections",
                    action: "add_favourite",
                    label: "source-devbutton_collectionowner-user_collectiontype-" + (s ? "default" : "collection")
                }), DiFi.pushPost("Deviation", "add_favourite_to_folder", [e.gmi_args.id, i], function(t) {
                    return t ? (e.got(!0, null, null, !1), void 0) : (DiFi.stdErr("Could not add this deviation to your favourites. Please try again"), void 0)
                }), DiFi.send()
            }), e.favesnav.bind("CREATE_COLLECTION", function() {
                var t = e.favesnav.find("input.collection_name").val();
                "" != $.trim(t) && $.trim(t) != e.add_collection_text && (e.favesnav.find("input.collection_name").val(e.add_collection_text), PubSub.publish("DaGa.track_event", {
                    category: "Collections",
                    action: "create_collection",
                    label: "source-devbutton_collectionowner-user"
                }), DiFi.pushPost("Gallections", "create", [e.gmi_args.userid, RESOURCE_FAVCOLLECTIONS, t], function(i, s) {
                    if (!i) return DiFi.stdErr("Could not create a collection", s.response.content.error), void 0;
                    e.favesnav.trigger("ADD_TO_COLLECTION", s.response.content.gallectionid, !1), ResourceViewFavouriteButton.add_collection(s.response.content.gallectionid, t), t.length > 22 && (t = t.substring(0, 20) + "&hellip;");
                    var n = $('<a href="#" cgalleryid="' + s.response.content.gallectionid + '">' + t + "</a>");
                    e.favesnav.find("li.list").append(n), n.click(function() {
                        return e.favesnav.trigger("ADD_TO_COLLECTION", s.response.content.gallectionid, !1), !1
                    })
                }), DiFi.send())
            })
        },
        set: function(e, t, i, s) {
            var n, o;
            if (this.alive) {
                if (e && (n = this.$.find("i, em").get(0), n.className = (s ? "" : "icon ") + e), o = this.$.find("b, strong, .label").get(0), o.innerHTML = t, "gmi-ResourceViewFavouriteButton" == $(this.gmi_node).attr("id")) return;
                o.style.color = i || "#121516"
            }
        },
        get: function() {
            var e;
            return e = this.$.find("b, strong, .label").get(0), e.textContent || e.innerText
        },
        send: function() {
            var e, t;
            this.busy || (this.mouseOut({
                currentTarget: this.gmi_node
            }), this.busy = 1, e = !this.is_faved, t = e ? "add_favourite" : "remove_favourite", this.set("iconx-favesstar", e ? this.adding_text : this.removing_text), DiFi.pushPost("Deviation", t, [this.gmi_args.id], this.got.bind(this), this), DiFi.timer(1), e ? (PubSub.publish("DaGa.track_event", {
                category: "Collections",
                action: t,
                label: "source-devbutton_collectionowner-user_collectiontype-default"
            }), deviantART.pageData.artist_analytics_id && PubSub.publish("DaGa.track_third_party_event", {
                analytics_id: deviantART.pageData.artist_analytics_id,
                category: "Deviation",
                action: "Favourite",
                label: deviantART.pageData.catpath_titles
            })) : PubSub.publish("DaGa.track_event", {
                category: "Collections",
                action: t,
                label: "source-devbutton_collectionowner-user_collectiontype-all"
            }))
        },
        got: function(e, t, i, s) {
            var n;
            if (this.busy = 0, e)
                if (n = !this.is_faved || s, this.set("iconx-favesstar", n ? this.add_success_text : this.remove_success_text, n ? "#196BA7" : null), n ? $(this.gmi_node).addClass("active") : $(this.gmi_node).removeClass("active"), ResourceViewFavouriteButton.cache[this.gmi_args.id] = n, this.is_faved = n, this.busy = 1, this.resetTimeout = setTimeout(this.reset.bind(this), 2500), PubSub.publish("ResourceViewFavouriteButton.set", {
                        id: this.gmi_args.id,
                        faved: n
                    }), s || window.da_minish_lub && window.da_minish_lub.modCookie(!1, !0), n) {
                    if (!s) {
                        var o = $("em", this.gmi_node).offset();
                        o.top -= 10, $('<span id="favup-star"></span>').css(o).insertAfter("body").animate({
                            top: "-=36"
                        }, {
                            duration: 650,
                            complete: function() {
                                $(this).remove()
                            },
                            easing: "easeOutSine"
                        })
                    }
                    window.deviantART.pageData.catpath && 0 !== window.deviantART.pageData.catpath.indexOf("flash") && setTimeout(this.popupReminder.bind(this), 400), PubSub.publish("Deviation.add_favourite", {
                        deviationid: this.gmi_args.id
                    })
                } else PubSub.publish("Deviation.remove_favourite", {
                    deviationid: this.gmi_args.id
                });
            else this.reset(!0, this.is_faved), i || DiFi.stdErr("Unable to +favourite", t.response.content)
        },
        refresh: function() {
            void 0 !== ResourceViewFavouriteButton.cache[this.gmi_args.id] && !this.busy && this.alive && this.reset(null, ResourceViewFavouriteButton.cache[this.gmi_args.id])
        },
        reset: function(e, t) {
            var i;
            this.busy = 0, i = t === !0 || t === !1 ? t : Number(e === !0) ^ Number(this.is_faved), this.set("iconx-favesstar", i ? this.remove_text : this.add_text), i ? $(this.gmi_node).addClass("active") : $(this.gmi_node).removeClass("active"), i ? $(this.gmi_node).parent().find("#favesnav").hide() : $(this.gmi_node).parent().find("#favesnav").show()
        },
        simulateButtonClick: function(e, t) {
            this.gmi_args.id == t.deviationid && this.got(!0, !1, !1, !0)
        },
        popupReminder: function() {
            var e, t;
            if (this.alive && !(window.TalkPostWrapper || {}).one_comment_posted && this.gmi_args.comments_allowed) {
                if (e = $(".dev-title-avatar"), !e.is(":visible")) return;
                e = e.find("img:first"), e.length && (t = new Popup2("favedOverMore", "body", {
                    classes: "darkspeech",
                    content: "<div class=dsp>&nbsp;</div><i class=pbq></i>",
                    destroy: !0,
                    shown: function() {
                        Station.push(this.$node.get(0).firstChild.firstChild, "nodeValue", {
                            from: "",
                            to: "Don't forget to\nadd a comment!",
                            time: 500,
                            f: Interpolators.line
                        })
                    },
                    events: [{
                        selector: "*",
                        event: "click",
                        callback: function() {
                            GMI.query("TalkPostWrapper")[0].talkpost.focus()
                        }
                    }]
                }), t.show(t.position(e, {
                    valign: "top",
                    keepOnScreen: !1
                })))
            }
        },
        populateCollectionMenu: function(e) {
            var t = this;
            t.favesnav.html(""), t.favesnav.append("<li><div>Add To:</div></li>");
            var i = $('<li class="list"></li>');
            t.favesnav.append(i);
            for (var s = 0, n = e.length; n > s; s++) {
                var o = e[s];
                o.featured = !1, "Featured" == o.title && (o.title = "Favourites", o.featured = !0), o.title.length > 22 && (o.title = o.title.substring(0, 20) + "&hellip;"), i.append('<a href="#" data-featured="' + o.featured + '" cgalleryid="' + o.gallectionid + '">' + o.title + "</a>")
            }
            t.favesnav.append('<li class="add_new"><input class="collection_name wide" value="' + t.add_collection_text + '" /><a class="new_collection">Add</a></li>'), t.favesnav.find("a").click(function() {
                if ($(this).hasClass("new_collection")) return t.favesnav.trigger("CREATE_COLLECTION"), !1;
                var e = $(this).attr("cgalleryid");
                return t.favesnav.trigger("ADD_TO_COLLECTION", [e, $(this).data("featured")]), !1
            }), t.favesnav.find("input.collection_name").bind({
                focus: function() {
                    t.favesnav.addClass("stick stick-perm"), $(this).val() == t.add_collection_text && ($(this).removeClass("wide").val(""), $(this).next("a").show())
                },
                blur: function() {
                    t.favesnav.removeClass("stick stick-perm"), "" == $(this).val().trim() && ($(this).addClass("wide").val(t.add_collection_text), $(this).next("a").hide())
                },
                keypress: function(e) {
                    var i = e.keyCode ? e.keyCode : e.which;
                    13 == i && t.favesnav.trigger("CREATE_COLLECTION")
                }
            })
        },
        mouseOver: function(e) {
            this.gmi_node == e.currentTarget && this.is_faved && !this.busy && $(this.gmi_node).addClass("remove smbutton-red").find("b,strong").html(this.remove_text_alt)
        },
        mouseOut: function(e) {
            this.gmi_node == e.currentTarget && $(this.gmi_node).hasClass("remove") && $(this.gmi_node).removeClass("remove smbutton-red").find("b,strong").html(this.remove_text)
        },
        mousePos: {
            left: 0,
            top: 0
        },
        mouseMove: function(e) {
            this.mousePos.left = e.pageX, this.mousePos.top = e.pageY
        },
        favesnavMouseOver: function(e) {
            if (this.favesnav_arrow[0] == e.currentTarget && !$(this.gmi_node).hasClass("remove") && !$(this.gmi_node).hasClass("active")) {
                var t = this;
                this.favesnavMouseDelay(), this.favesnav.hasClass("favesnav-load") || (void 0 === ResourceViewFavouriteButton.collection_cache ? (this.favesnav.addClass("favesnav-load"), DiFi.pushPrivateGet("Gallections", "get_gallections", [t.gmi_args.userid, RESOURCE_FAVCOLLECTIONS], function(e, i) {
                    if (t.favesnav.removeClass("favesnav-load"), !e) return DiFi.stdErr("Could not get the list of your collections"), void 0;
                    ResourceViewFavouriteButton.collection_cache = [];
                    for (var s = 0, n = i.response.content.length; n > s; s++) ResourceViewFavouriteButton.add_collection(i.response.content[s].gallectionid, i.response.content[s].title);
                    t.populateCollectionMenu(ResourceViewFavouriteButton.collection_cache)
                }), DiFi.send()) : t.populateCollectionMenu(ResourceViewFavouriteButton.collection_cache))
            }
        },
        favesnavUnstick: null,
        favesnavMouseDelay: function() {
            var e = this.favesnav;
            e.addClass("stick"), clearTimeout(this.favesnavUnstick), e.hasClass("favesnav-wait") && !e.hasClass("stick-perm") ? e.removeClass("stick") : this.favesnavUnstick = setTimeout(function() {
                e.hasClass("stick-perm") || e.removeClass("stick")
            }, 300)
        },
        favesnavMouseAppearDelay: function() {
            var e = this.favesnav;
            e.addClass("favesnav-wait"), clearTimeout(this.favesnavAppear), this.favesnavAppear = setTimeout(function() {
                e.removeClass("favesnav-wait"), clearTimeout(this.adsAppear), Popup2.hideOverlayElements($(this.favesnav))
            }, 150)
        },
        favesnavMouseOut: function() {
            var e = $("#favesnav");
            clearTimeout(this.favesnavAppear), e.hasClass("favesnav-wait") || (this.favesnavMouseDelay(), this.adsAppear = setTimeout(function() {
                Popup2.showOverlayElements()
            }, 300)), e.removeClass("favesnav-wait")
        },
        favesnavMouseDown: function(e) {
            e.stopPropagation()
        }
    }), ResourceViewFavouriteButton.cache = {}, ResourceViewFavouriteButton.collection_cache = void 0, ResourceViewFavouriteButton.add_collection = function(e, t) {
        void 0 === ResourceViewFavouriteButton.collection_cache && (ResourceViewFavouriteButton.collection_cache = []), ResourceViewFavouriteButton.collection_cache.push({
            gallectionid: e,
            title: t
        })
    }, DWait.init("ResourceViewFavouriteButton.click", function(e) {
        GMI.getOne(e).send()
    }), ResourceViewWatchButton = ResourceViewFavouriteButton.extend({
        send: function() {
            var e;
            this.busy || (this.busy = 1, e = "Add" == this.get().substr(0, 3), this.set("", e ? "Adding..." : "Removing..."), e ? DiFi.pushPost("Friends", "addFriendGetAttributes", [this.gmi_args.username, "deviation"], this.got.bind(this), this) : DiFi.pushPost("Friends", "removeFriend", [this.gmi_args.username], this.got.bind(this), this), DiFi.timer(1))
        },
        got: function(e, t, i) {
            var s;
            this.busy = 0, e ? (s = "Add" == this.get().substr(0, 3), this.set("", s ? "Now Watching!" : "Removed", s ? "#196BA7" : null), ResourceViewFavouriteButton.cache[this.gmi_args.id] = s, this.busy = 1, setTimeout(this.reset.bind(this), 2500)) : (this.reset(!0), i || DiFi.stdErr("Unable to alter deviantWATCH", t.response.content))
        },
        refresh: function() {},
        reset: function(e, t) {
            var i;
            this.busy = 0, i = t === !0 || t === !1 ? t : Number(e === !0) ^ Number(this.get().substr(0, 3) in {
                Now: 1,
                Add: 1
            }), this.set(i ? "i25" : "i24", i ? "Remove from deviantWATCH" : "Add to deviantWATCH", !1, !0)
        }
    }), ResourceViewCollectButton = ResourceViewFavouriteButton.extend({
        gmiConstructor: function() {
            this.base(), this.mouseup_handler = this.mouseup_handler.bind(this), Events.hook(document.documentElement, "mouseup", this.mouseup_handler)
        },
        gmiDestructor: function() {
            this.base(), Events.unhook(document.documentElement, "mouseup", this.mouseup_handler)
        },
        send: function() {
            return this.ignore_onclick ? (this.ignore_onclick = 0, !1) : this.busy ? this.off() : this.on()
        },
        on: function() {
            if (this.busy) return !1;
            this.busy = 1;
            var e, t;
            return (e = document.getElementById("deviation-collect-bubble")) ? (Browser.isIE && "iframe" != e.firstChild.tagName.toLowerCase() && document.getElementsByTagName("iframe").length && e.insertBefore(document.createElement("iframe"), e.firstChild), "block" != e.style.display && (t = !document.getElementsByTagName("film").length, t ? (e.style.left = "0px", e.style.top = "-25px", e.style.position = "relative") : (e.style.left = "152px", e.style.top = Ruler.document.node(document.getElementById("collect-button")).y - (t ? Ruler.screen.rect().y2 : -7) - 6 + "px"), e.style.display = "block"), !1) : !1
        },
        off: function() {
            if (this.busy) {
                this.busy = 0;
                var e = document.getElementById("deviation-collect-bubble");
                e.style.display = "none"
            }
        },
        mouseup_handler: function(e) {
            var t = e.target || e.srcElement;
            !this.busy || "gmi-ResourceViewCollectButton" != t.id && "gmi-ResourceViewCollectButton" != t.parentNode.id && "gmi-ResourceViewCollectButton" != t.parentNode.parentNode.id || (this.ignore_onclick = 1), $(t).closest("#deviation-collect-bubble")[0] || this.busy && setTimeout(this.off.bind(this), 500)
        },
        got: function() {},
        refresh: function() {},
        reset: function() {
            this.set("", "Request as Print"), GMI._delete(this)
        }
    }), ResourceViewShare = GMIBase.extend({
        gmiConstructor: function() {
            var e = $("body"),
                t = this.$.find(".social-title"),
                i = this.$.find(".share-button"),
                s = i.filter(".more"),
                n = s.find(".deviation-share-links-dropdown"),
                o = t.text();
            i.on("mouseenter.share", function() {
                t.text($(this).data("title") || o)
            }).on("mouseleave.share", function() {
                t.text(o)
            }), n.on("mousedown.share", function() {
                return !1
            }), s.on("mousedown.share", function() {
                var t = s.toggleClass("active").hasClass("active");
                t ? (n.appendTo(e).css($(this).offset()).fadeIn(), Popup2.hideOverlayElements(n), setTimeout(function() {
                    e.on("mousedown.share", function() {
                        s.hasClass("active") && s.trigger("mousedown.share")
                    }), n.find("input.link").click()
                }, 0)) : (n.find("input").attr("selectionEnd", 0), n.hide().appendTo(s), Popup2.showOverlayElements(), e.off("mousedown.share"))
            }), this.gmiDestructor = function() {
                e.trigger("mousedown.share"), e.add(i).add(n).add(s).off(".share")
            }
        }
    }), ResourceViewShareTumblr = GMIBase.extend({
        gmiConstructor: function() {
            this.$node = $(this.gmi_node), this.$node.click(function() {
                if ($(this).hasClass("tumblr-tab")) return !0;
                var e = $(this).data("deviation-id"),
                    t = $(this).attr("openurl"),
                    i = window.open("about:blank", "sharetumblr" + e, "toolbar=0,status=0,resizable=yes,width=450,height=480");
                return i ? (i.document.open(), i.document.write('<meta http-equiv="refresh" content="0; url=' + t + '">'), i.document.close(), !1) : !0
            })
        },
        gmiDestructor: function() {
            this.$node.unbind()
        }
    }), window.DWait && DWait.run("jms/pages/superbrowse/resview/devbuttons.js")
});
DWait.ready(["jms/lib/gmi.js"], function() {
    window.GPageButton || (window.GPageButton = GMIBase.extend({
        gmiConstructor: function() {}
    })), window.DWait && DWait.run("jms/pages/superbrowse/resview/extras.js")
});
DWait.ready(["jms/lib/jquery/plugins/jquery.throttle-debounce.js", "jms/lib/pubsub.js", "jms/lib/browser.js", "jms/lib/jquery/jquery.current.js", "jms/lib/adzone.js", "jms/lib/gmi.js"], function() {
    RESVIEW_OUTLINE = {
            gmiConstructor: function() {},
            gmiDestructor: function() {},
            deviationChangeView: function(t, i, s) {
                this.gmiUp().deviationChangeView(t, i, s)
            }
        }, ResourcePageMetaPane = GMIBase.extend(RESVIEW_OUTLINE).extend({
            gmiConstructor: function() {
                this.$.find(":gmi(ResourceStream)").gmi()
            }
        }), ResourcePageAboutPane = GMIBase.extend(RESVIEW_OUTLINE), ResourcePageAd = GMIBase.extend({
            gmiConstructor: function() {
                this.position = this.position.bind(this), this.refresh2 = this.refresh2.bind(this), this.z = new AdZone([" ", " "], {
                    section: "deviation"
                }, "300x250", this.gmi_args.timer || 8, null), this.z.frame_zone = this.gmi_args.frame_zone, this.z.no_ignores = 1, this.z.allow_key_changes = 1, this.z.no_refetch_while_busy = 1, this.z.always_flush_difi = 1, this.reset(300, 250, 0, 1), this.gmi_node.style.marginBottom = "7px", this.gmi_node.style.position = "relative"
            },
            gmiDestructor: function() {
                this.z.destructor(), delete this.z
            },
            reset: function(t, i, s, e) {
                var o;
                this.gmi_node.style.width = t + "px", this.gmi_node.style.height = i + "px", o = t + "x" + i, this.z.master_anchor = this.gmi_node, this.z.size = o, this.mature = s, e || this.refresh()
            },
            hide: function() {
                this.z.hide(), this.gmi_node.style.display = "none"
            },
            refresh: function(t, i, s) {
                if (void 0 != t) {
                    if (this.last_id == t && i == this.mature) return;
                    this.last_id = t
                }
                this.z.hide(), this.gmi_node.style.display = "block", void 0 != i && (this.mature = i), this.z.keys.catid = s || 0, this.z.keys.deviationid = t || 0, this.z.need(this.mature, 0), this.refresh2()
            },
            refresh2: function() {
                this.z.show(), this.z.position()
            },
            position: function(t) {
                t === !0 ? (this.z.hide(), this.z.position(), setTimeout(this.refresh2, 150)) : this.z.position()
            }
        }), ResourcePageLowerAd = ResourcePageAd.extend({}), ResViewSizer_img = GMIBase.extend({
            gmiConstructor: function() {
                this.active = 1
            }
        }), ResViewSizer_fullimg = ResViewSizer_img, ResViewSizer_cinemaplayer = GMIBase.extend({
            adjustTextAd: function() {
                $("body").hasClass("fullview") || $(".textbanner-ad").css("top", this.$.height() + 20)
            },
            gmiDestructor: function() {
                this.restoreTextAd()
            },
            restoreTextAd: function() {
                $("body").hasClass("fullview") || $(".textbanner-ad").css("top", "auto")
            }
        }),
        function() {
            var t = 0;
            window.ResourcePageBtfDockAd = GMIBase.extend({
                gmiConstructor: function() {
                    this.$win = $(window), Browser.isPad || (this.event_ns = "scroll.BtfDockAd" + ++t, this.dock_padding_btm = 0, this.dock_padding_top = 12, $("#head").length && (this.dock_padding_top = 72), this.$bubbleview = this.$.closest(".bubbleview"), this.$rescontainer = this.$.closest(":gmi(DeviationPageView)"), this.$metapane = this.$rescontainer.find(".dev-view-meta"), this.$bubbleview.length && (this.bv_cached_height = this.$bubbleview.height(), PubSub.publish("ResourcePageBtfDockAd.state_changed", {
                        state: "relative",
                        el: this.$
                    }), this.bindScroll(this.normalScrollHandler)))
                },
                gmiDestructor: function() {
                    this.unbindScroll()
                },
                bindScroll: function(t) {
                    return DWait.ready("jms/lib/jquery/plugins/jquery.throttle-debounce.js", function() {
                        this.$win.on(this.event_ns, $.throttle(100, t.bind(this)))
                    }.bind(this)), this
                },
                unbindScroll: function() {
                    return this.$win.off(this.event_ns), this
                },
                rebindScroll: function(t) {
                    return this.unbindScroll().bindScroll(t)
                },
                sbClosed: function() {
                    PubSub.unsubscribe({
                        eventname: "Duperbrowse.closed",
                        subscriber: this
                    }), this.rebindScroll(this.normalScrollHandler)
                },
                sbOpen: function() {
                    PubSub.subscribe({
                        eventname: "Duperbrowse.closed",
                        subscriber: this,
                        callback: this.sbClosed
                    }), this.unbindScroll()
                },
                readBounds: function() {
                    if (!this.bounds || this.$bubbleview.height() != this.bv_cached_height) {
                        if (this.bv_cached_height = this.$bubbleview.height(), !this.bv_cached_height) return this.sbOpen(), {
                            top: 0,
                            btm: 0,
                            h: 0
                        };
                        var t = this.$rescontainer.offset().top;
                        if (this.bounds) {
                            var i = this.$.css("position"),
                                s = this.$.css("top");
                            this.$.css({
                                position: "relative",
                                top: "auto"
                            }), this.bounds.h = this.$.height(), this.bounds.top = this.$.offset().top - this.dock_padding_top, this.bounds.btm = t + this.$rescontainer.outerHeight() - this.dock_padding_top - this.bounds.h, this.$.css({
                                position: i,
                                top: s
                            })
                        } else {
                            var e = this.$.height();
                            if ("none" === this.$.css("display") && (this.unbindScroll(), this.$.remove(), this.$ = $()), !e || !this.$.parent().length) return {
                                top: 0,
                                btm: 0,
                                h: 0
                            };
                            this.bounds = {
                                h: e,
                                top: this.$.offset().top - this.dock_padding_top,
                                btm: t + this.$rescontainer.outerHeight() - this.dock_padding_top - e
                            }
                        }
                        this.bounds.btm -= 15, this.bounds.able = this.bounds.btm - t > this.bounds.top
                    }
                    return this.bounds
                },
                normalScrollHandler: function() {
                    var t = this.readBounds(),
                        i = this.$win.scrollTop();
                    t.able && i >= t.top && (this.$.css({
                        position: "fixed",
                        top: this.dock_padding_top
                    }), this.rebindScroll(this.undockedScrollHandler), PubSub.publish("ResourcePageBtfDockAd.state_changed", {
                        state: "fixed",
                        el: this.$
                    }), this.h1evt || (this.h1evt = !0, this.undockedScrollHandler()))
                },
                undockedScrollHandler: function() {
                    var t = this.readBounds(),
                        i = this.$win.scrollTop();
                    i >= t.btm ? (this.$.css({
                        position: "absolute",
                        top: t.btm + this.dock_padding_btm - this.$metapane.offset().top
                    }), this.rebindScroll(this.btmdockScrollHandler), PubSub.publish("ResourcePageBtfDockAd.state_changed", {
                        state: "absolute",
                        el: this.$
                    })) : t.top >= i && (this.$.css({
                        position: "relative",
                        top: "auto"
                    }), this.rebindScroll(this.normalScrollHandler), PubSub.publish("ResourcePageBtfDockAd.state_changed", {
                        state: "absolute",
                        el: this.$
                    }))
                },
                btmdockScrollHandler: function() {
                    var t = this.readBounds(),
                        i = this.$win.scrollTop();
                    t.btm > i && (this.$.css({
                        position: "fixed",
                        top: this.dock_padding_top
                    }), this.rebindScroll(this.undockedScrollHandler), PubSub.publish("ResourcePageBtfDockAd.state_changed", {
                        state: "fixed",
                        el: this.$
                    }))
                }
            })
        }(), window.DWait && DWait.run("jms/pages/superbrowse/resview/respage_components.js")
});
DWait.ready([".domready", "jms/lib/location.js", "jms/lib/glbl.js", "jms/lib/pubsub.js", "jms/lib/jquery/jquery.current.js", "jms/lib/Base.js"], function() {
    (function() {
        var e = Base.extend({
            purchase: null,
            padding: 15,
            scroll_time: 400,
            handlers: {
                scroll: function() {
                    this._get_purchase_from_url()
                }
            },
            openers: {
                prints: function() {
                    var e = this;
                    DWait.ready(["jms/shop/product-tabs-loader.js"], function() {
                        $("#print-button").click(), e.done_loading()
                    })
                },
                pcp: function() {
                    var e = $(".pdw_button_download");
                    if (e.length) {
                        var s = e.offset().top + e.parent().height() + this.padding,
                            a = $(window).height();
                        if (s > a) {
                            var r = $("html, body").animate({
                                scrollTop: s - a
                            }, this.scroll_time);
                            ddt.log("purchaseautoload", "promise", r);
                            var t = this;
                            $.when(r).done(function() {
                                t._activate_pcp(e)
                            })
                        } else this._activate_pcp(e)
                    }
                }
            },
            constructor: function() {
                PubSub.subscribe([{
                    eventname: "PurchaseAutoload.scroll",
                    subscriber: this,
                    callback: this.handlers.scroll
                }, {
                    eventname: "Minibrowse.open",
                    subscriber: this,
                    callback: this._get_purchase_from_url
                }, {
                    eventname: "Minibrowse.preload",
                    subscriber: this,
                    callback: this._get_purchase_from_url
                }, {
                    eventname: "Minibrowse.next_click",
                    subscriber: this,
                    callback: this._get_purchase_from_url
                }, {
                    eventname: "Minibrowse.prev_click",
                    subscriber: this,
                    callback: this._get_purchase_from_url
                }, {
                    eventname: "Minibrowse.close",
                    subscriber: this,
                    callback: this._clear_purchase
                }])
            },
            _get_purchase_from_url: function() {
                this.purchase = (Glbl("Location.get_params") || {}).purchase, Glbl("PurchaseAutoload.purchase", this.purchase), ddt.log("purchaseautoload", "purchase", this.purchase)
            },
            _clear_purchase: function() {
                Glbl.del("PurchaseAutoload.purchase")
            },
            done_loading: function() {
                PubSub.publish("PurchaseAutoload.loaded", this.purchase), this._clear_purchase()
            },
            _activate_pcp: function(e) {
                var s = this;
                e.parent().hasClass("already-downloaded") || DWait.ready(["jms/modals/purchase.js"], function() {
                    e.click(), s.done_loading()
                })
            }
        });
        new e
    })(), window.DWait && DWait.run("jms/pages/art/purchase-autoloader.js")
});
DWait.ready([".domready", "jms/lib/jquery/plugins/jquery.throttle-debounce.js", "jms/lib/popup2.js", "jms/lib/Base.js", "jms/lib/jquery/jquery.current.js", "jms/lib/browser.js", "jms/lib/gwebpage.js", "jms/lib/difi.js", "jms/lib/pubsub.js", "jms/lib/glbl.js", "jms/lib/gmi.js", "jms/pages/superbrowse/resview/respage_components.js", "jms/lib/gstream/resource_stream.js", "jms/pages/deviation/download_ad.js"], function() {
    (function(i) {
        function e(i, e, t, s) {
            var n = i / t,
                o = e / s,
                a = {
                    w: i,
                    h: e
                };
            return 1 >= n && 1 >= o ? a : (n > o ? (a.w = t, a.h = Math.round(e / n)) : (a.h = s, a.w = Math.round(i / o)), a)
        }

        function t(i, t, s, n) {
            var o, v = (document.body || {}).clientWidth || window.innerWidth || document.documentElement.offsetWidth,
                f = window.innerHeight || document.documentElement.offsetHeight,
                w = v - a - l - _,
                g = w - d,
                b = f - r - u - h - c - m,
                p = {};
            return g = Math.max(300, g), b = Math.max(300, b), o = e(i, t, g, b), 200 > o.h && (o.top = Math.round((200 - o.h) / 2)), v >= s ? (p.w = s, p.h = n, o.top && (p.top = o.top)) : (dw = s / v, p.w = v, p.h = Math.round(n / dw)), {
                normal: o,
                full: p,
                full_zoomed: {
                    w: s,
                    h: n
                }
            }
        }

        function s(e) {
            var t = i(e.currentTarget),
                s = t.closest(":gmi(DeviationPageView)").removeClass("agegated").gmi1();
            s ? s.display_mature() : t.length && t.closest(".blogcontrol, .gr-featured_deviation, .deviation-plain-view").find(".dev-content-mature-hidden").removeClass("dev-content-mature-hidden").end().find(".dev-content-mature").hide()
        }
        var n = !(window.deviantART || {
                deviant: {}
            }).deviant.loggedIn || (window.deviantART || {
                deviant: {}
            }).deviant.ads,
            o = Boolean(((window.deviantART || {}).pageData || {}).with_apps),
            a = 331,
            l = 10,
            _ = 10,
            d = 0,
            h = n ? 60 : 0,
            r = 43,
            u = o ? 25 : 0,
            c = 8,
            m = 12;
        (((deviantART || {}).pageData || {}).ads || {}).atf_top_970x90 && (h = 90);
        var v = function(i, e, t, s, n, o) {
                this.name = i, this.layout_class = e, this.full_width = Boolean(t), this.in_zoom_cycle = Boolean(s), this.$content = n, this.default_mode = o
            },
            f = {};
        window.DeviationPageView = GMIBase.extend({
            _available_modes: [],
            _view_modes: {},
            _current_mode: "normal",
            _default_mode: "normal",
            _$meta: null,
            _$deviation: null,
            _$about: null,
            _$normal: null,
            _$full: null,
            _$agegate: null,
            _$detached_deviation_contents: null,
            _contains_embeds: null,
            _display_sizes: null,
            _original_sizes: null,
            _user_zoomed_in: !1,
            _is_fullwidth_layout: !1,
            _on_resize_callback: null,
            gmiConstructor: function() {
                var e = this.$.children(".dev-view-main-content");
                this.gmi_args.fullview_requested && (this.gmi_args.fullview_requested = "1" == this.gmi_args.fullview_requested), this._$meta = this.$.children(".dev-view-meta"), this._$about = e.children(".dev-view-about"), this._is_fullwidth_layout = !Boolean(this._$about.siblings(".dev-view-deviation").length), this._$deviation = this._is_fullwidth_layout ? this.$.children(".dev-view-deviation") : e.children(".dev-view-deviation");
                var t = this._$deviation.children(".dev-content-mature-hidden, .dev-content-blocked-hidden").addBack();
                if (this._$normal = t.children("img.dev-content-normal"), this._$full = t.children("img.dev-content-full"), this._$agegate = t.find(".devpage_gate"), this._contains_embeds = Boolean(this._$deviation.find("iframe").length), this._available_modes = [], this._user_zoomed_in = Boolean(((window.deviantART.pageData || {}).user || {}).fullview_all), this._is_normal_content()) {
                    this._view_modes = {
                        normal: new v("normal", "normal", !1, !0, this._$normal, !0),
                        full: new v("full", "full", !0, !0, this._$full, !0),
                        full_zoomed: new v("full_zoomed", "full_zoomed", !0, !0, this._$full, !0)
                    }, this._original_sizes = {
                        normal: {
                            w: Number(this._$normal.attr("width")),
                            h: Number(this._$normal.attr("height"))
                        },
                        full: {
                            w: Number(this._$full.attr("width")),
                            h: Number(this._$full.attr("height"))
                        }
                    };
                    var s = this.gmi_args.fullview_requested || this._user_zoomed_in;
                    this._default_mode = this._current_mode = s ? "full" : "normal"
                } else {
                    var n = this._$deviation.find(".dev-content-mature-hidden, .dev-content-blocked-hidden"),
                        o = (this._$deviation.find(".journal-wrapper"), n.length ? n : this._$deviation),
                        a = o.children().not(".dev-content-hidden");
                    this._view_modes = {
                        "default": new v("default", "normal", !1, !1, a, !0)
                    }, this._default_mode = this._current_mode = "default"
                }
                var l = this._$deviation.find(".dev-content-mature");
                l.length && (this._view_modes.mature = new v("mature", "normal", !1, !1, l, !0), this._current_mode = "mature");
                var _ = this._$deviation.find(".dev-content-blocked");
                _.length && (this._view_modes.blocked = new v("blocked", "normal", !1, !1, l, !0), this._current_mode = "blocked"), this._on_resize_callback = i.throttle(50, this._on_resize.bind(this)), i(window).on("resize", this._on_resize_callback), this._on_resize(), this._$deviation.find(".dev-challenge-box").css("visibility", "visible"), "full" != this._current_mode && this._should_force_full() ? this.change_to_mode("full", !0) : "full" == this._current_mode ? -1 == i.inArray("full", this._available_modes) ? this.change_to_mode("normal") : this.change_to_mode("full", !0) : "default" == this._current_mode && this.change_to_mode("default", !0), "mature" === this._current_mode && f[this.gmi_args.deviationid] && this.display_mature(), this._$normal.add(this._$full).on("click.dev-page-view", this._image_click.bind(this)), Glbl("Minibrowse.opened") || (PubSub.subscribe([{
                    eventname: "Minibrowse.closed",
                    subscriber: this,
                    callback: this.handlers.minibrowse_close.bind(this)
                }]), this._contains_embeds && PubSub.subscribe([{
                    eventname: "Minibrowse.open",
                    subscriber: this,
                    callback: this.handlers.minibrowse_open.bind(this)
                }])), i(":gmi(ResourcePageBtfDockAd)", this._$meta).gmi(), i(":gmi(ResourceStream)", this._$meta).gmi()
            },
            gmiDestructor: function() {
                i(window).off("resize", this._on_resize_callback), this._$deviation.find("img").off(".dev-page-view")
            },
            _calc_sizes: function() {
                this._original_sizes && (this._display_sizes = t(this._original_sizes.normal.w, this._original_sizes.normal.h, this._original_sizes.full.w, this._original_sizes.full.h)), this._determine_available_modes()
            },
            _determine_available_modes: function() {
                if (this._available_modes = ["normal"], this._original_sizes && (this._original_sizes.full.w > this._display_sizes.normal.w || this._user_zoomed_in) && (this._available_modes.push("full"), this._original_sizes.full.w > this._display_sizes.full.w && this._available_modes.push("full_zoomed")), !this._original_sizes) {
                    this._available_modes = ["default"];
                    var i = this._$deviation.find(".journal-wrapper");
                    if (i.length && this.gmi_args.fullview_requested) {
                        var e = this._$deviation.find(".dev-content-mature-hidden, .dev-content-blocked-hidden"),
                            t = e.length ? e : this._$deviation,
                            s = t.children().not(".dev-content-hidden");
                        this._available_modes.push("full"), this._view_modes.full = new v("full", "full", !0, !0, s, !0), this._default_mode = this._current_mode = "full"
                    }(0 === i.length && this._$deviation.find("film,iframe,#news-special").length || 0 == i.length && this.gmi_args.fullview_requested) && (this._view_modes["default"].layout_class = "full", this._view_modes["default"].full_width = !0)
                }
                for (var n in this._view_modes) this._view_modes.hasOwnProperty(n) && !this._view_modes[n].default_mode && this._available_modes.push(this._view_modes[n].name);
                return this._available_modes
            },
            _should_force_full: function() {
                var e = 25;
                return -1 !== i.inArray("full", this._available_modes) && this._original_sizes.full.h >= this._original_sizes.full.w * e
            },
            _is_normal_content: function() {
                return this._$normal.length && !this._$deviation.find("#pdf-viewer").length
            },
            _on_resize: function() {
                if (this._calc_sizes(), this._original_sizes) {
                    var i = this._$normal.add(this._$agegate),
                        e = this._$normal.siblings(".dev-challenge-box");
                    i.width(this._display_sizes.normal.w).height(this._display_sizes.normal.h), e.width(this._display_sizes.normal.w), this._display_sizes.normal.top ? (i.css({
                        top: this._display_sizes.normal.top + "px",
                        position: "relative"
                    }), e.css("margin-top", this._display_sizes.normal.top + "px")) : (i.css("top", "0px"), e.css("margin-top", "0")), "full" == this._current_mode && (this._$full.width(this._display_sizes.full.w).height(this._display_sizes.full.h), e.width(this._display_sizes.full.w), this._display_sizes.full.top ? (this._$full.css({
                        top: this._display_sizes.full.top + "px",
                        position: "relative"
                    }), e.css("margin-top", this._display_sizes.full.top + "px")) : (this._$full.css("top", "0px"), e.css("margin-top", "0")))
                } else this._$agegate.length > 0 && this._$agegate.css({
                    width: "100%",
                    height: "auto",
                    top: "0"
                });
                this._set_zoom_cursor()
            },
            _image_click: function() {
                if (this._view_modes[this._current_mode].in_zoom_cycle) {
                    var i = this._cycleable_available_modes();
                    if (i.length > 1) {
                        for (var e = !1, t = 0; i.length > t; t++) {
                            if (e) return this.change_to_mode(i[t]), void 0;
                            i[t] == this._current_mode && (e = !0)
                        }
                        e && this.change_to_mode(i[0])
                    }
                }
            },
            _cycleable_available_modes: function() {
                var i, e = [];
                for (i = 0; this._available_modes.length > i; i++) this._view_modes[this._available_modes[i]].in_zoom_cycle && e.push(this._available_modes[i]);
                return e
            },
            _set_zoom_cursor: function() {
                this.$.removeClass("cursor-zoom-in cursor-zoom-out");
                var e = this._cycleable_available_modes(),
                    t = i.inArray(this._current_mode, e);
                e.length > 1 && t >= 0 && (e[this._available_modes.length - 1] == this._current_mode || -1 == t ? this.$.addClass("cursor-zoom-out") : this.$.addClass("cursor-zoom-in"))
            },
            change_to_mode: function(e, t) {
                if (-1 != i.inArray(e, this._available_modes) && (t || e != this._current_mode)) {
                    var s = this._view_modes[this._current_mode],
                        n = this._view_modes[e];
                    this._current_mode = e, this.$.removeClass("view-mode-normal view-mode-full view-mode-" + s.layout_class).addClass("view-mode-" + n.layout_class), Glbl("Site.is_mobile") || (n.full_width && !this._is_fullwidth_layout ? (this._$deviation.insertBefore(this._$about.parent(".dev-view-main-content")), this._is_fullwidth_layout = !0) : !n.full_width && this._is_fullwidth_layout && (this._$deviation.insertBefore(this._$about), this._is_fullwidth_layout = !1), i("body").toggleClass("fullview", n.full_width)), "full" == n.name && this._display_sizes && n.$content.width(this._display_sizes.full.w).height(this._display_sizes.full.h), "full_zoomed" == n.name && this._display_sizes && n.$content.width(this._display_sizes.full_zoomed.w).height(this._display_sizes.full_zoomed.h), this._$deviation.children(":visible:not(.dev-content-mature, .dev-content-blocked, .dev-challenge-box)").hide(), n.$content.show();
                    var o = n.$content.filter(":visible"),
                        a = this._$deviation.children(".dev-challenge-box");
                    return a.css("width", o.css("width")), "auto" != o.css("top") && a.css("margin-top", o.css("top")), this._set_zoom_cursor(), window.setTimeout(function() {
                        PubSub.publish("DeviationPageView.changed_view_mode", {
                            from: s.name,
                            to: e
                        })
                    }, 1), s.name
                }
            },
            get_about_content_node_for_abuse: function() {
                return this._$about.find(".dev-view-about-content")
            },
            get_meta_content_node_for_abuse: function() {
                return this._$meta.find(".dev-view-meta-content")
            },
            get_deviation_offset_for_abuse: function() {
                return this._$deviation.offset()
            },
            add_custom_view_mode: function(e, t, s, n) {
                this._$deviation.find(".dev-content-" + e).remove();
                var o = new v(e, t, s, !1, i('<div class="dev-content-' + e + '"></div>').append(n).hide(), !1);
                return this._$deviation.append(o.$content), this._view_modes[e] = o, this._determine_available_modes(), this
            },
            get_view_mode_sizes: function(i) {
                return this._display_sizes && this._display_sizes[i] ? this._display_sizes[i] : void 0
            },
            display_mature: function() {
                f[this.gmi_args.deviationid] = 1, this._$deviation.find(".dev-content-mature-hidden").children().appendTo(this._$deviation), this._$deviation.find(".dev-content-mature-hidden,.dev-content-mature").remove(), this.change_to_mode(this._default_mode, !0)
            },
            handlers: {
                minibrowse_open: function() {
                    null === this._$detached_deviation_contents && (this._$detached_deviation_contents = this._$deviation.contents().detach())
                },
                minibrowse_close: function() {
                    this.change_to_mode(this._default_mode, !0), this._$detached_deviation_contents && (this._$deviation.append(this._$detached_deviation_contents), this._$detached_deviation_contents = null)
                }
            }
        }), DeviationPageView.edit_check = function() {
            !Glbl("Minibrowse.opened") && location.href.match(/[?|&]edit=1/) ? DWait.ready("jms/pages/ile/ile.js", function() {
                i(".dev-page-container").prepend(i("#ile-container")), PubSub.publish("InlineEditor.open")
            }) : location.href.match(/[?|&]edit=1/) && PubSub.publish("DeviationPageEditor.preload"), Glbl("Site.is_deviantart") && "edit" == location.hash.replace(/^#/, "") && PubSub.publish("DeviationPageEditor.open")
        }, DeviationPageView.edit_check(), DeviationPageView.scale_to_fit = e, DeviationPageView.get_max_content_height = function(i) {
            var e = i ? 0 : r + u;
            return (window.innerHeight || document.documentElement.offsetHeight) - e - h
        }, window.DownloadButton = GMIBase.extend({
            $: null,
            events: {
                click: function(e) {
                    if (i("body > .download_ad").length && window.DownloadAd.open(this.gmi_args.deviationid, this.gmi_args.download_url)) return PubSub.publish("DaGa.track_event_from_cancelled_click", e), !1;
                    if ("open_in_window" == this.gmi_args.download_type && !Glbl("Site.is_mobile")) {
                        var t = this.open_download_window(this.gmi_args.download_url, this.gmi_args.download_width, this.gmi_args.download_height);
                        return t || PubSub.publish("DaGa.track_event_from_cancelled_click", e), t
                    }
                    return !0
                }
            },
            handlers: {
                continue_download: function(i, e) {
                    if (e.id == this.gmi_args.deviationid && e.url == this.gmi_args.download_url)
                        if ("open_in_window" == this.gmi_args.download_type && !Glbl("Site.is_mobile") && e.from_click) {
                            var t = this.open_download_window(this.gmi_args.download_url, this.gmi_args.download_width, this.gmi_args.download_height);
                            t && (window.location = this.gmi_args.download_url)
                        } else e.from_click || "open_in_window" != this.gmi_args.download_type || PubSub.publish("DaGa.track_event", {
                            category: "Deviation",
                            action: "ad_redirected_download"
                        }), window.location = this.gmi_args.download_url
                }
            },
            gmiConstructor: function() {
                this.bind()
            },
            gmiDestructor: function() {
                this.$.off(".download_button"), PubSub.unsubscribe([{
                    eventname: "DownloadAd.close",
                    subscriber: this
                }])
            },
            bind: function() {
                this.$.on("click.download_button", this.events.click.bind(this)), PubSub.subscribe([{
                    eventname: "DownloadAd.close",
                    subscriber: this,
                    callback: this.handlers.continue_download
                }])
            },
            open_download_window: function(i, e, t) {
                var s;
                if (Browser.isTouch) return !0;
                if (Browser.isChrome || Browser.isSafari) {
                    var s = window.open(i, null, "toolbar = 0, scrollbars = 1, location = 0, statusbar = 0, menubar = 0, resizable = 1, width= " + (e || 640) + ", height= " + (t || 480));
                    return s ? !1 : !0
                }
                if (s = window.open("", null, "toolbar = 0, scrollbars = 1, location = 0, statusbar = 0, menubar = 0, resizable = 1, width= " + (e || 640) + ", height= " + (t || 480)), !s) return !0;
                window.event && (event.cancelBubble = !0);
                var n = Glbl("Site.is_stash") ? "#888" : "#76827B";
                return s.document.open(), s.document.write('<html><body style="padding:0;margin:0;background:' + n + '"><img src="' + i.replace(/"/g, "&quot;") + '"></body></html>'), s.document.close(), s.focus(), !1
            }
        }), DWait.init("DeviationPageView.display_mature", function(e) {
            i(e).on("click", s)
        }), DWait.init("DeviationPageView.meta_info", function() {
            i(".embed-code").on("click", function() {
                i(this).select()
            }).on("touchend", function() {
                i(this).removeAttr("readonly").get(0).setSelectionRange(0, 999), i(this).attr("readonly", !0)
            })
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/deviation/dev-page-view.js")
});
DWait.ready(["jms/lib/cookie.js", "jms/lib/jquery/jquery.current.js"], function() {
    window.cancelEvent || (cancelEvent = function() {
        return window.event && (event.cancelBubble = !0, event.returnValue = !1), !1
    }), window.Litty = {
        states: {
            2: "size",
            4: "black",
            8: "font",
            16: "indent",
            32: "center"
        },
        labels: {
            size: "A<span>A</span>",
            font: "T",
            indent: "&para;",
            black: "<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>",
            center: "&#9374;"
        },
        toggles: {
            any: function(t) {
                return $(".free-literature").eq(0).toggleClass("mod-" + t).hasClass("mod-" + t)
            },
            black: function() {
                Litty.toggles.any("black")
            },
            center: function() {
                var t = $(".free-literature div.text"),
                    e = t.width(),
                    n = Litty.toggles.any("center"),
                    i = t.width();
                n && e == i ? $(".free-literature").eq(0).addClass("mod-center-forced") : $(".free-literature").eq(0).removeClass("mod-center-forced")
            },
            indent: function() {
                var t, e, n, i;
                if (t = $(".free-literature div.text"), t.length && !t.find("span.push").length) {
                    e = $("br", t).toArray();
                    do i = $("<span>", {
                        "class": "push",
                        html: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    }), n ? n.nextSibling && i.insertAfter(n) : t[0].firstChild && i.prependTo(t); while (n = e.pop())
                }
                Litty.toggles.any("indent")
            }
        },
        initty: function() {
            var t, e, n, i;
            if (deviantART.pageData.deviation_poetry || deviantART.pageData.deviation_prose) {
                if (i = Litty.read(), t = $(".free-literature"), t.find(".textbar").length) return;
                if (t.length) {
                    n = [];
                    for (e in Litty.labels)("indent" != e || deviantART.pageData.deviation_prose) && n.push('<a href="" class="t-' + e + '" onclick="return Litty.click(this)">' + Litty.labels[e] + "</a>");
                    $("<div>", {
                        "class": "textbar ch"
                    }).html(n.join("\n")).prependTo(t)
                }
                for (e in Litty.states)
                    if (i & e) {
                        if ("indent" == Litty.states[e] && !deviantART.pageData.deviation_prose) continue;
                        Litty.toggle(Litty.states[e])
                    } t.length && t.css("visibility", "visible")
            }
            $(".journal-category").on("click", ".deviation-full-data", function() {
                var t = $(this).attr("collect_rid").split(":")[1];
                window.location = "//deviantart.com/deviation/" + t
            })
        },
        read: function() {
            return Cookie.get("litview" + (deviantART.pageData.deviation_poetry ? "poetry" : "prose"), 0)
        },
        store: function(t) {
            return Cookie.set("litview" + (deviantART.pageData.deviation_poetry ? "poetry" : "prose"), t)
        },
        toggle: function(t) {
            Litty.toggles[t] ? Litty.toggles[t]() : Litty.toggles.any(t)
        },
        click: function(t) {
            var e, n;
            t.blur(), e = t.className.match(/t\-(.+)\b/)[1], Litty.toggle(e);
            for (n in Litty.states)
                if (e == Litty.states[n]) return Litty.store(Litty.read() ^ n), cancelEvent();
            return alert("Unavailable"), cancelEvent()
        }
    }, window.DWait && DWait.run("jms/pages/deviation/litty.js")
});
DWait.ready([".domready", "jms/lib/jquery/jquery.current.js", "jms/legacy/modals.js", "jms/lib/gmi.js", "jms/lib/gwebpage.js", "jms/lib/difi.js", "jms/lib/pubsub.js", "jms/lib/glbl.js", "jms/lib/Base.js"], function() {
    (function(e) {
        var i = Base.extend({
            inline_editor_preloaded: {},
            handlers: {
                edit_deviation: function() {
                    if (Glbl("DeviationPageEditor.toggling")) return !1;
                    var e = deviantART.pageData.deviationid;
                    PubSub.publish("Location.set", "/deviation/edit/" + e), this.inline_editor_preloaded[e] ? this.handlers.open_inline_editor(this.inline_editor_preloaded[e].success, this.inline_editor_preloaded[e].data) : (DiFi.pushPost("DeviationView", "getInlineEditor", [e], this.handlers.open_inline_editor.bind(this)), DiFi.send()), Glbl("DeviationPageEditor.toggling", !0), this.get_dev_page_container().css("cursor", "wait"), this.get_dev_page_view().hide()
                },
                uncache_editor: function() {
                    this.inline_editor_preloaded[this.get_deviationid()] = null
                },
                preload_inline_editor: function() {
                    var e = this.get_deviationid();
                    this.get_deviation_userid() === window.deviantART.deviant.id && (this.inline_editor_preloaded[e] || (DiFi.pushPost("DeviationView", "getInlineEditor", [e], function(i, t) {
                        this.inline_editor_preloaded[e] = {
                            success: i,
                            data: t
                        }
                    }.bind(this)), DiFi.timer(100)))
                },
                open_inline_editor: function(i, t) {
                    if (this.get_deviationid().toString(36), Glbl("DeviationPageEditor.toggling", !1), !i) {
                        var n = t.response.content && t.response.content.error || "Please try again.";
                        return alert("Loading editor failed, " + n), e("#ile-container").length > 0 && e("#ile-container").delay(300).fadeOut(150, function() {
                            e(this).remove()
                        }), e(".edit_buttons a").css("cursor", "default"), this.get_dev_page_container().removeClass("editmode"), !1
                    }
                    e(t.response.content.html).hide().appendTo(this.get_dev_page_container()), gWebPage.update(t.response.content, null, null), DWait.ready("jms/pages/ile/ile.js", function() {
                        PubSub.publish("InlineEditor.open")
                    })
                },
                delete_deviation: function(e, i) {
                    var t = (i || {}).id,
                        n = (i || {}).redir;
                    if (Glbl("Site.is_stash")) {
                        var a = GMI.query("StashThumb", {
                            match: {
                                deviationid: t,
                                type: "flat"
                            }
                        })[0];
                        if (!confirm("Do you really want to delete this item?")) return;
                        return void 0 !== a ? a.controls__deletenow() : (DiFi.pushPost("Stashes", "delete_deviation_from_stashes", [t], function(e) {
                            e ? window.location.href = "https://sta.sh/" : alert("An unexpected error occured while trying to delete this item. Please try again later.")
                        }), DiFi.send()), void 0
                    }
                    n = n || "https://me.deviantart.com/";
                    var o = this;
                    Modals.push(document.getElementById("delete_modal").getElementsByTagName("form")[0].cloneNode(!0), function(e, i) {
                        if ("delete" == e) {
                            if (!confirm("About to delete deviation; this cannot be undone!\n\nAre you sure?")) return !1;
                            DiFi.pushPost("Deviation", "DeleteSingle", [t, i.reasonid], function(e) {
                                e ? (o.track_deletion_event("successful"), alert("Deviation deleted successfully."), window.location.href = n) : (o.track_deletion_event("error"), alert("An unexpected error occured while trying to delete deviation. Please try again later."))
                            }), DiFi.send()
                        }
                    })
                }
            },
            constructor: function() {
                PubSub.subscribe([{
                    eventname: "DeviationPageEditor.open",
                    subscriber: this,
                    callback: this.handlers.edit_deviation
                }, {
                    eventname: "DeviationPageEditor.preload",
                    subscriber: this,
                    callback: this.handlers.preload_inline_editor
                }, {
                    eventname: "DeviationPageEditor.uncache",
                    subscriber: this,
                    callback: this.handlers.uncache_editor
                }, {
                    eventname: "DeviationPageEditor.delete",
                    subscriber: this,
                    callback: this.handlers.delete_deviation
                }])
            },
            get_dev_page_container: function() {
                return e(".dev-page-container:visible").first()
            },
            get_dev_page_view: function() {
                return this.get_dev_page_container().find(":gmi(DeviationPageView)")
            },
            get_deviationid: function() {
                return Number(this.get_dev_page_view().gmi1().gmi_args.deviationid)
            },
            get_deviation_userid: function() {
                return Number(this.get_dev_page_view().gmi1().gmi_args.userid)
            },
            track_deletion_event: function(e) {
                var i = "new_delete_" + e;
                deviantART.pageData.deviation_is_recent && (i += "_recent"), PubSub.publish("DaGa.track_event", {
                    category: "Submit",
                    action: i
                })
            }
        });
        DWait.init("DeviationPageEditor.open_editor", function(i) {
            e(i).click(function() {
                return PubSub.publish("DeviationPageEditor.open"), !1
            })
        }), new i
    })(jQuery), window.DWait && DWait.run("jms/pages/deviation/dev-page-editor.js")
});
DWait.init("InlineEditor.open_standalone", function() {
    setTimeout(function() {
        PubSub.publish("InlineEditor.open")
    }, 1e3)
}), window.DWait && DWait.run("jms/pages/deviation/standalone-edit-page.js");
DWait.ready(["jms/lib/ddt.js", "jms/lib/pubsub.js", "jms/lib/pubsubcrossframe.js"], function() {
    (function(s) {
        function t() {
            var s = [{
                eventname: "ddt.log",
                callback: this.ddt,
                subscriber: this
            }, {
                eventname: "ddt.info",
                callback: this.ddt,
                subscriber: this
            }, {
                eventname: "ddt.warn",
                callback: this.ddt,
                subscriber: this
            }, {
                eventname: "ddt.error",
                callback: this.ddt,
                subscriber: this
            }, {
                eventname: "ddt.trace",
                callback: this.ddt,
                subscriber: this
            }, {
                eventname: "ddt.alert",
                callback: this.ddt,
                subscriber: this
            }];
            PubSubCrossFrame.subscribe(s), PubSub.subscribe(s)
        }
        t.prototype.ddt = function(s, t) {
            if (vms_feature("dre")) {
                if (!t || !t.message || !t.namespace) return console.warn("Invalid ddt payload."), void 0;
                var d = s.split(".")[1],
                    e = t.message;
                t._fromWindow && (e = "(" + t._fromWindow + ") " + e), ddt[d](t.namespace, e, t.data || null, t.tags || null, !0)
            }
        }, s.da_ddt_pubsub_initialized || (s.da_ddt_pubsub_initialized = 1, new t)
    })(window), window.DWait && DWait.run("jms/lib/ddt.pubsub.js")
});
DWait.ready([".domready", "jms/lib/analytics.js", "jms/lib/jquery/plugins/jquery.throttle-debounce.js", "jms/pages/subby.js", "jms/lib/ddt.js", "jms/lib/jquery/jquery.current.js", "jms/lib/pubsub.js", "jms/lib/pubsubcrossframe.js", "jms/lib/glbl.js", "jms/lib/Base.js"], function() {
    var e = 30,
        i = ddt.createLogger("ads.devpage"),
        t = Base.extend({
            initialized: !1,
            deviationid: null,
            is_mobile: !1,
            is_adblocked: !1,
            standard_ads: {
                mobile: null,
                atf: null,
                atfx: null,
                btf: null,
                text: null,
                pushdown: null
            },
            minibrowse_ads: {
                mobile: null,
                mobile_adhesion: null,
                text: null,
                atf: null,
                atfx: null,
                btf: null,
                pushdown: null,
                interstitial: null
            },
            destroy_on_minibrowse_close: [],
            page_ad_containers: [],
            page_ad_frames: [],
            last_adsafeness: null,
            constructor: function() {
                this.is_mobile = Glbl("Site.is_mobile");
                var e = (window.deviantART || {}).deviant || {};
                (!e.loggedIn || e.ads) && this.bind_pubsub_events()
            },
            bind_pubsub_events: function() {
                PubSub.subscribe([{
                    eventname: "DeviationAds.init",
                    subscriber: this,
                    callback: this.handlers.initialize
                }, {
                    eventname: "DeviationAds.minibrowse_init",
                    subscriber: this,
                    callback: this.handlers.initialize_minibrowse
                }, {
                    eventname: "DeviationAds.minibrowse_populate",
                    subscriber: this,
                    callback: this.handlers.populate_minibrowse
                }, {
                    eventname: "DeviationAds.minibrowse_destroy",
                    subscriber: this,
                    callback: this.handlers.destroy_minibrowse
                }, {
                    eventname: "DeviationAds.inline_editor_opening",
                    subscriber: this,
                    callback: this.handlers.ile_open
                }, {
                    eventname: "DeviationPageEditor.open",
                    subscriber: this,
                    callback: this.handlers.ile_open
                }, {
                    eventname: "InlineEditor.open",
                    subscriber: this,
                    callback: this.handlers.ile_open
                }, {
                    eventname: "DeviationAds.check_adblock",
                    subscriber: this,
                    callback: $.debounce(1e3, !0, this.handlers.track_adblock.bind(this))
                }, {
                    eventname: "DaAds.impression_viewable",
                    subscriber: this,
                    callback: this.handlers.impression_viewable
                }])
            },
            unbind_pubsub_events: function() {
                PubSub.unsubscribe([{
                    eventname: "DeviationAds.init",
                    subscriber: this
                }, {
                    eventname: "DeviationAds.minibrowse_init",
                    subscriber: this
                }, {
                    eventname: "DeviationAds.minibrowse_populate",
                    subscriber: this
                }, {
                    eventname: "DeviationAds.minibrowse_destroy",
                    subscriber: this
                }, {
                    eventname: "DeviationAds.inline_editor_opening",
                    subscriber: this
                }, {
                    eventname: "DeviationPageEditor.open",
                    subscriber: this
                }, {
                    eventname: "InlineEditor.open",
                    subscriber: this
                }, {
                    eventname: "DeviationAds.check_adblock",
                    subscriber: this
                }, {
                    eventname: "DaAds.gpt_ad_rendered",
                    subscriber: this
                }])
            },
            for_each_ad: function(e, i) {
                if (i || "function" != typeof e || (i = e, e = !1), "function" == typeof i) {
                    if (!e || "standard" == e)
                        for (var t in this.standard_ads) this.standard_ads.hasOwnProperty(t) && this.standard_ads[t] && i.call(this, this.standard_ads[t], t);
                    if (!e || "minibrowse" == e)
                        for (var t in this.minibrowse_ads) this.minibrowse_ads.hasOwnProperty(t) && this.minibrowse_ads[t] && i.call(this, this.minibrowse_ads[t], t)
                }
            },
            for_each_minibrowse_ad: function(e) {
                this.for_each_ad("minibrowse", e)
            },
            for_each_standard_ad: function(e) {
                this.for_each_ad("standard", e)
            },
            handlers: {
                initialize: function() {
                    var e = ((deviantART || {}).pageData || {}).ads || {};
                    return this.is_mobile ? (e.mobile_deviation_btf_mid && (this.standard_ads.mobile = new p, PubSub.subscribe([{
                        eventname: "DaAds.gpt_ad_rendered",
                        subscriber: this,
                        callback: this.handlers.ad_rendered_gpt
                    }, {
                        eventname: "DaAds.bidder_ad_rendered",
                        subscriber: this,
                        callback: this.handlers.ad_rendered_bidder
                    }]), PubSubCrossFrame.subscribe([{
                        eventname: "DaAds.gpt_ad_rendered",
                        subscriber: this,
                        callback: this.handlers.ad_rendered_gpt
                    }, {
                        eventname: "DaAds.bidder_ad_rendered",
                        subscriber: this,
                        callback: this.handlers.ad_rendered_bidder
                    }])), void 0) : (i.log("- creating standard ads -"), e.atf_top_970x90 ? (this.standard_ads.pushdown = new _, this.standard_ads.pushdown.show_ad()) : this.standard_ads.pushdown ? this.standard_ads.pushdown.show_ad() : e.deviation_banner_textad && (this.standard_ads.text = new d), e.atf_right_300x600 ? (this.standard_ads.atfx = new r, this.standard_ads.atfx.show_ad()) : (this.standard_ads.atf = new n, this.standard_ads.atf.show_ad()), this.standard_ads.btf = new o, this.standard_ads.btf.show_ad(), PubSub.unsubscribe({
                        eventname: "Duperbrowse.closed",
                        subscriber: this,
                        callback: this.handlers.initialize
                    }), PubSub.subscribe([{
                        eventname: "Duperbrowse.opened",
                        subscriber: this,
                        callback: this.handlers.standard_duper_open
                    }, {
                        eventname: "DaAds.gpt_ad_rendered",
                        subscriber: this,
                        callback: this.handlers.ad_rendered_gpt
                    }, {
                        eventname: "DaAds.bidder_ad_rendered",
                        subscriber: this,
                        callback: this.handlers.ad_rendered_bidder
                    }]), PubSubCrossFrame.subscribe([{
                        eventname: "DaAds.gpt_ad_rendered",
                        subscriber: this,
                        callback: this.handlers.ad_rendered_gpt
                    }, {
                        eventname: "DaAds.bidder_ad_rendered",
                        subscriber: this,
                        callback: this.handlers.ad_rendered_bidder
                    }]), void 0)
                },
                standard_duper_open: function() {
                    i.log("- destroying standard ads -"), this.for_each_standard_ad(function(e, i) {
                        e.destroy(), "pushdown" != i && (this.standard_ads[i] = null)
                    }), PubSub.unsubscribe({
                        eventname: "Duperbrowse.opened",
                        subscriber: this,
                        callback: this.handlers.standard_duper_open
                    }), PubSub.subscribe({
                        eventname: "Duperbrowse.closed",
                        subscriber: this,
                        callback: this.handlers.initialize
                    })
                },
                initialize_minibrowse: function() {
                    var e = !0;
                    if (PubSub.subscribe([{
                            eventname: "DaAds.gpt_ad_rendered",
                            subscriber: this,
                            callback: this.handlers.ad_rendered_gpt
                        }, {
                            eventname: "DaAds.bidder_ad_rendered",
                            subscriber: this,
                            callback: this.handlers.ad_rendered_bidder
                        }]), PubSubCrossFrame.subscribe([{
                            eventname: "DaAds.gpt_ad_rendered",
                            subscriber: this,
                            callback: this.handlers.ad_rendered_gpt
                        }, {
                            eventname: "DaAds.bidder_ad_rendered",
                            subscriber: this,
                            callback: this.handlers.ad_rendered_bidder
                        }]), this.initialized) i.log("- showing minibrowse ads -");
                    else {
                        var t = this;
                        $("iframe[data-da-ad], div[data-da-ad]").each(function(e) {
                            i.log("Remove ad for minibrowse", $(this)), t.page_ad_containers[e] = $(this).parent(), t.page_ad_frames[e] = $(this).detach()
                        }), this.initialized = !0, e = !1, i.log("- creating minibrowse ads -"), this.is_mobile ? this.minibrowse_ads.mobile_adhesion = new b : (this.minibrowse_ads.text = new f, this.minibrowse_ads.atf = new g, this.minibrowse_ads.atfx = new v, this.minibrowse_ads.btf = new w, this.minibrowse_ads.interstitial = new c)
                    }
                    this.for_each_minibrowse_ad(function(i) {
                        e && i.clear_positioning_dom(), i.show_chrome()
                    })
                },
                populate_minibrowse: function(e, t) {
                    i.log("- populating minibrowse ads -");
                    var s = (t || {}).content || {},
                        a = s.ads || {};
                    this.deviationid = s.pageData ? s.pageData.deviationid : null, vms_feature("ads_debugger") && PubSub.publish("AdsDebugger.add_data_set", s.ads_debugger);
                    var n = s.ads_metadata || {},
                        r = n.slots || {},
                        o = s.ads || {},
                        d = {
                            pushdown: {
                                slots: ["top"],
                                adframes: ["atf_top_970x90"]
                            },
                            text: {
                                slots: ["top"],
                                adframes: ["deviation_banner_textad"]
                            },
                            atf: {
                                slots: ["sidebar_top"],
                                adframes: ["atf_right_300x250"]
                            },
                            atfx: {
                                slots: ["sidebar_top"],
                                adframes: ["atf_right_300x600"]
                            },
                            btf: {
                                slots: ["sidebar_bottom"],
                                adframes: ["btf_right_300x250"]
                            },
                            mobile: {
                                slots: ["mobile"],
                                adframes: ["atf_top_320x50"]
                            },
                            mobile_adhesion: {
                                slots: ["mobile_adhesion"],
                                adframes: ["atf_adhesion_320x50"]
                            },
                            interstitial: {
                                slots: ["interstitial"],
                                adframes: ["interstitial_970x550_overlay"]
                            }
                        };
                    null == this.last_adsafeness && (this.last_adsafeness = n.is_safe_for_google);
                    var h = {
                        content: "",
                        adsafe: n.is_safe_for_google,
                        adsafe_changed: this.last_adsafeness != n.is_safe_for_google,
                        is_mature: n.is_page_mature,
                        is_nsfg: n.is_page_nsfg,
                        suppress: n.suppress_ads,
                        adframe: ""
                    };
                    a = {}, this.for_each_minibrowse_ad(function(e, t) {
                        var s = d[t];
                        if (!s) return i.log("No ad slot for key: " + t), void 0;
                        for (var _ = s.slots.length; _--;)
                            if (r.hasOwnProperty(s.slots[_])) {
                                var l = r[s.slots[_]] || {},
                                    c = l.adframe; - 1 !== $.inArray(c, s.adframes) && (a[t] = {
                                    content: o[s.slots[_]] || "",
                                    adsafe: n.is_safe_for_google,
                                    adsafe_changed: this.last_adsafeness != n.is_safe_for_google,
                                    is_mature: n.is_page_mature,
                                    is_nsfg: n.is_page_nsfg,
                                    suppress: l.suppress || n.suppress_ads,
                                    adframe: c
                                })
                            } a[t] || (a[t] = h)
                    }), this.last_adsafeness = n.is_safe_for_google;
                    var _ = [];
                    this.for_each_minibrowse_ad(function(e, i) {
                        a[i] && (e.show_ad(a[i]), e.reused_ad_logid && (_.push(e.reused_ad_logid), e.reused_ad_logid = !1))
                    }), _.length && PubSub.publish("DaPx.send_ads_reused", _)
                },
                destroy_minibrowse: function() {
                    if (this.initialized = !1, i.log("- destroying minibrowse ads -"), this.for_each_minibrowse_ad(function(e, i) {
                            e.destroy(), this.minibrowse_ads[i] = null
                        }), this.page_ad_frames.length > 0) {
                        for (var e = 0; this.page_ad_frames.length > e; e++) i.log("Re-Attach", this.page_ad_frames[e], this.page_ad_containers[e]), $(this.page_ad_frames[e]).hasClass("hidden-frame-bidder") && $(this.page_ad_frames[e]).hide(), this.page_ad_frames[e].appendTo(this.page_ad_containers[e]);
                        this.page_ad_frames = [], this.page_ad_containers = []
                    }
                    for (; this.destroy_on_minibrowse_close.length;) this.destroy_on_minibrowse_close.pop().remove()
                },
                ile_open: function() {
                    i.log("- hiding all ads (ILE) -"), this.unbind_pubsub_events(), this.for_each_ad(function(e) {
                        e.hide_chrome(), e.clear_repositioning_timeout(), e.unbind_positioning_events(), e.set_repositioning_retries(0)
                    }), PubSub.subscribe({
                        eventname: "InlineEditor.reset_overhead",
                        subscriber: this,
                        callback: this.handlers.ile_close
                    })
                },
                ile_close: function() {
                    PubSub.unsubscribe({
                        eventname: "InlineEditor.reset_overhead",
                        subscriber: this
                    }), this.bind_pubsub_events()
                },
                track_adblock: function(e, t) {
                    if (!this.is_adblocked) {
                        var s = t[0],
                            a = t[1] || s;
                        s && !this.is_adblocked && "none" === s.css("display") && (this.is_adblocked = !0, a.detach(), i.log("Destroyed ad spot because of Adblock."))
                    }
                    this.is_adblocked && PubSub.publish("DaGa.track_event_no_debounce", {
                        category: "Ads",
                        action: "adblocked"
                    })
                },
                ad_rendered_gpt: function(e, i) {
                    this.for_each_ad(function(e) {
                        e.resize_placeholder_gpt(e, i), e.rendered_gpt(i)
                    })
                },
                ad_rendered_bidder: function(e, i) {
                    this.for_each_ad(function(e) {
                        e.resize_placeholder_bidder(e, i), e.rendered_bidder(i)
                    })
                },
                impression_viewable: function(e, t) {
                    i.log("Received viewability event", t.adid), this.for_each_ad(function(e) {
                        e.get_chrome().find("[data-ad-id=" + t.adid + "]").length && (i.log("Marking ad as viewed", e), e.viewed = !0)
                    })
                }
            }
        }),
        s = 0,
        a = Base.extend({
            css_class: null,
            uses_placeholder: !0,
            docking_pubsub_eventname: !1,
            placeholder_offset_comes_from_parent: !0,
            dynamic_width: !1,
            reused_ad_logid: !1,
            $chrome: null,
            $placeholder: null,
            id: null,
            bound_events: !1,
            repositioning_ref: {},
            repositioning_retry_ct: 0,
            repositioning_timer: null,
            constructor: function() {
                this.id = "devAd" + ++s, this.log("instantiated")
            },
            reset_viewability: function() {
                this.viewed = !1
            },
            show_ad: function() {
                this.show_chrome(), this.bind_positioning_events(), this.set_repositioning_retries(3), this.dynamic_resize(), this.position_ad_on_placeholder()
            },
            show_chrome: function() {
                if (this.uses_placeholder) {
                    var e = this.get_placeholder();
                    if (e && PubSub.publish("DeviationAds.check_adblock", [e.parent()]), !e || !e.is(":visible")) return this.hide_chrome()
                } else this.get_chrome().addClass("dp-ad-visible"), PubSub.publish("DeviationAds.check_adblock", [this.get_chrome()])
            },
            hide_chrome: function() {
                this.get_chrome().removeClass("dp-ad-visible")
            },
            dynamic_resize: function() {
                this.dynamic_width && this.get_chrome().css("width", ($(this.dynamic_width.container).width() - this.dynamic_width.offset) * this.dynamic_width.ratio)
            },
            position_ad_on_placeholder: function() {
                if (this.uses_placeholder) {
                    this.clear_repositioning_timeout();
                    var e = this.get_placeholder();
                    if (!e) return this.log("placeholder not found, waiting for re-check"), void 0;
                    var i = e.offset() || {
                        top: 0,
                        left: 0
                    };
                    if (!i.top || !i.left) return this.log("placeholder has invalid offset, waiting for recheck", i), void 0;
                    this.repositioning_ref = $.extend(!0, {}, i);
                    var t = e.closest(".dev-view-meta, .dev-view-about"),
                        s = t.position() || {
                            top: 0,
                            left: 0
                        },
                        a = t.offset() || {
                            top: 0,
                            left: 0
                        };
                    i.top = i.top - a.top + s.top, e.hasClass("ad-border") && (i.top += 4, i.left += 4), this.log(!0, "pos ref: ", this.repositioning_ref), this.get_chrome().addClass("dp-ad-visible").css({
                        top: i.top,
                        left: i.left
                    }), this.schedule_repositioning_recheck()
                }
            },
            resize_placeholder_gpt: function() {},
            resize_placeholder_bidder: function() {},
            rendered_gpt: function() {},
            rendered_bidder: function() {},
            set_repositioning_retries: function(e) {
                this.uses_placeholder && (this.repositioning_retry_ct = Math.max(3, parseInt(e, 10)) || 0)
            },
            schedule_repositioning_recheck: function() {
                if (this.repositioning_retry_ct) {
                    var e = 500;
                    2 == this.repositioning_retry_ct ? e = 2500 : 1 == this.repositioning_retry_ct && (e = 5e3), this.repositioning_retry_ct -= 1, this.repositioning_timer = setTimeout(this.handlers.reposition_from_timeout.bind(this), e)
                }
            },
            clear_repositioning_timeout: function() {
                this.repositioning_timer && clearTimeout(this.repositioning_timer), this.repositioning_timer = null
            },
            get_placeholder: function() {
                if (!this.$placeholder) {
                    var e = ".dp-ad-target." + this.css_class.split(" ").join(".");
                    this.placeholder_offset_comes_from_parent && (e += " > div"), this.$placeholder = this.get_parent().find(e), this.$placeholder.length || (this.$placeholder = !1)
                }
                return this.$placeholder
            },
            get_chrome: function() {
                return this.$chrome || (this.$chrome = this.get_parent().find(".dp-ad-chrome." + this.css_class.split(" ").join("."))), this.$chrome
            },
            get_parent: function() {
                return $(".dev-page-container")
            },
            bind_positioning_events: function() {
                return !this.uses_placeholder && !this.dynamic_width || this.bound_events ? !1 : (this.bound_events = !0, PubSub.subscribe([{
                    eventname: "DeviationPageView.changed_view_mode",
                    subscriber: this,
                    callback: this.handlers.reposition
                }, {
                    eventname: "DeviationExtras.shown",
                    subscriber: this,
                    callback: this.handlers.reposition
                }, {
                    eventname: "DuperbrowseStreamLoader.load",
                    subscriber: this,
                    callback: this.handlers.reposition
                }, {
                    eventname: "DeviationAds.reposition",
                    subscriber: this,
                    callback: this.handlers.reposition
                }, {
                    eventname: "ProductTabs.opened",
                    subscriber: this,
                    callback: this.handlers.reposition
                }, {
                    eventname: "ProductTabs.animating",
                    subscriber: this,
                    callback: this.handlers.hide_from_printtabs
                }, {
                    eventname: "ProductTabs.resized",
                    subscriber: this,
                    callback: this.handlers.show_from_printtabs
                }]), $(window).on("resize.ads", $.throttle(50, this.handlers.reposition.bind(this))), this.docking_pubsub_eventname && PubSub.subscribe({
                    eventname: this.docking_pubsub_eventname,
                    subscriber: this,
                    callback: this.handlers.reposition_from_dockable
                }), void 0)
            },
            unbind_positioning_events: function() {
                this.uses_placeholder && (this.bound_events = !1, PubSub.unsubscribe([{
                    eventname: "DeviationPageView.changed_view_mode",
                    subscriber: this
                }, {
                    eventname: "DeviationExtras.shown",
                    subscriber: this
                }, {
                    eventname: "ProductTabs.opened",
                    subscriber: this
                }, {
                    eventname: "ProductTabs.animating",
                    subscriber: this
                }, {
                    eventname: "ProductTabs.resized",
                    subscriber: this
                }]), $(window).off("resize.ads"), this.docking_pubsub_eventname && PubSub.unsubscribe({
                    eventname: this.docking_pubsub_eventname,
                    subscriber: this
                }))
            },
            log: function() {
                var e = 0,
                    i = "ads.devpage";
                arguments[0] === !0 && (e = 1, i += ".position");
                for (var t = [i, this.id + " (" + (this instanceof l ? "db" : "pv") + " " + this.css_class + "): "], s = arguments.length; s > e; ++e) t.push(arguments[e]);
                ddt.log.apply(ddt, t)
            },
            destroy: function() {
                this.clear_repositioning_timeout(), this.unbind_positioning_events(), this.clear_positioning_dom(), this.$chrome = null, this.log("destroyed")
            },
            clear_positioning_dom: function() {
                this.$placeholder = null
            },
            handlers: {
                reposition: function() {
                    this.clear_positioning_dom(), this.set_repositioning_retries(3), this.docking_pubsub_eventname ? this.handlers.reposition_from_dockable.apply(this) : this.position_ad_on_placeholder(), this.dynamic_resize()
                },
                reposition_from_dockable: function() {
                    var e = this.get_placeholder();
                    if (!e) return this.log("reposition_dockable cancelled: could not find placeholder"), void 0;
                    if (this.placeholder_offset_comes_from_parent && (e = e.parent()), this.log(!0, "reposition from dockable: " + e.css("position")), "fixed" == e.css("position")) {
                        this.clear_repositioning_timeout(), this.set_repositioning_retries(0);
                        var i = e.position();
                        e.hasClass("ad-border") && (i.top += 4, i.left += 4), this.get_chrome().css({
                            position: "fixed",
                            top: i.top,
                            left: i.left
                        })
                    } else this.get_chrome().css({
                        position: "absolute"
                    }), this.set_repositioning_retries(3), this.position_ad_on_placeholder()
                },
                reposition_from_timeout: function() {
                    var e = this.get_placeholder();
                    if (!e) return this.log("reposition_from_timeout cancelled: could not find placeholder"), this.schedule_repositioning_recheck(), void 0;
                    var i = e.offset() || {
                        top: 0,
                        left: 0
                    };
                    this.log(!0, "repositioning from timeout (retry attempt #" + (3 - this.repositioning_retry_ct) + "); cached top: " + this.repositioning_ref.top + "x" + this.repositioning_ref.left + ", actual: " + i.top + "x" + i.left), i.top != this.repositioning_ref.top || i.left != this.repositioning_ref.left ? (this.set_repositioning_retries(3), this.position_ad_on_placeholder()) : this.schedule_repositioning_recheck()
                },
                hide_from_printtabs: function() {
                    this.log(!0, "hiding from printtabs"), this.get_chrome().removeClass("dp-ad-visible")
                },
                show_from_printtabs: function() {
                    this.log(!0, "showing from printtabs"), this.get_chrome().addClass("dp-ad-visible"), this.handlers.reposition.call(this)
                }
            }
        }),
        n = a.extend({
            css_class: "atf-right-300x250",
            resize_placeholder_gpt: function(e, t) {
                if (t && t.gpt_event && this.get_placeholder() && t.path.match(/atf_right_300x250/i)) {
                    i.log("Setting gpt placeholder height", t.gpt_event);
                    var s = (t.gpt_event.size || [])[1] || 250;
                    this.get_placeholder().css("min-height", s), this.placeholder_height = s
                }
            },
            resize_placeholder_bidder: function(e, t) {
                if (t && this.get_placeholder() && t.path.match(/atf_right_300x250/i)) {
                    i.log("Setting bidder placeholder height", t);
                    var s = t.ad_height || 250;
                    this.get_placeholder().css("min-height", s), this.placeholder_height = s;
                    var a = this.get_chrome().find("iframe");
                    if (!a.length) return i.warn("could not find safeframe for " + t.path + " when trying to resize ad"), void 0;
                    a[0].style.height = s + "px"
                }
            }
        }),
        r = a.extend({
            css_class: "atf-right-300x600"
        }),
        o = a.extend({
            css_class: "btf-right-300x250",
            docking_pubsub_eventname: "ResourcePageBtfDockAd.state_changed"
        }),
        d = a.extend({
            css_class: "textbanner-ad canonical",
            uses_placeholder: !1,
            constructor: function() {
                this.base(), PubSub.publish("DaPx.send_ad_event_from_node", {
                    node: this.get_chrome(),
                    event_payload: {
                        event: "ad_rendered",
                        slot: "deviation_textad",
                        details: {
                            meta_bidder: !1,
                            meta_acc: !1,
                            meta_renderer: "dfp",
                            meta_monetized_by: "dfp",
                            meta_adunit: "deviation_textad",
                            meta_safety: "safe"
                        }
                    }
                })
            }
        }),
        h = Base.extend({
            constructor: function(e, i) {
                i = i || {}, this.expanded = !1, this.auto_expand = i.auto_expand || !1, this.auto_close_timeout_id = !1, this.chrome = e, this.iframe = this.chrome.find("iframe").get(0), this.on_window_message = function(e) {
                    switch (pushdown_event = ((e.originalEvent.data + "").match(/^dapushdown:(.*)$/) || []).pop()) {
                        case "ready":
                            this.on_iframe_ready();
                            break;
                        case "expand":
                            this.expand();
                            break;
                        case "close":
                            this.close();
                            break;
                        case "click":
                            this.stop_auto_close()
                    }
                }.bind(this), this.on_scroll = function() {
                    if (this.expanded) {
                        var e = this.chrome.offset().top,
                            i = 415,
                            t = 90,
                            s = 40,
                            a = $(window).scrollTop(),
                            n = a - e;
                        n > e + i + s && (this.force_close(), $(window).scrollTop(a + t - i))
                    }
                }.bind(this), this.bind_events()
            },
            bind_events: function() {
                this.unbind_events(), ddt.log("ads.pushdown", "bind"), $(window).on("message", this.on_window_message), $(window).on("scroll", this.on_scroll), PubSub.subscribe({
                    eventname: "DeviationAds.minibrowse_init",
                    subscriber: this,
                    callback: this.force_close
                })
            },
            unbind_events: function() {
                ddt.log("ads.pushdown", "unbind"), $(window).off("message", this.on_window_message), $(window).off("scroll", this.on_scroll), PubSub.unsubscribe({
                    eventname: "DeviationAds.minibrowse_init",
                    subscriber: this
                })
            },
            force_close: function() {
                this.expanded && (this.stop_auto_close(), this.post_message("dapushdown:closing"), this.expanded = !1, this.chrome.finish().height(90), this.post_message("dapushdown:closed"))
            },
            close: function(e) {
                this.expanded && (void 0 === e && (e = 1e3), this.post_message("dapushdown:closing"), this.chrome.finish().animate({
                    height: 90
                }, e, "swing", this.force_close.bind(this)))
            },
            stop_auto_close: function() {
                clearTimeout(this.auto_close_timeout_id)
            },
            expand: function(e) {
                this.expanded || (void 0 === e && (e = 1e3), this.post_message("dapushdown:expanding"), this.chrome.finish().animate({
                    height: 415
                }, e, "swing", function() {
                    this.post_message("dapushdown:expanded"), this.expanded = !0
                }.bind(this)))
            },
            on_iframe_ready: function() {
                this.auto_expand ? (this.expand(), this.auto_close_timeout_id = setTimeout(this.close.bind(this), 7e3)) : this.post_message("dapushdown:closed")
            },
            post_message: function(e) {
                this.iframe && this.iframe.contentWindow && this.iframe.contentWindow.postMessage(e, "*")
            },
            destroy: function() {
                ddt.log("ads.pushdown", "destroy"), this.unbind_events()
            }
        }),
        _ = a.extend({
            css_class: "pushdown-ad canonical",
            uses_placeholder: !1,
            constructor: function() {
                this.base(), this.init_pushdown()
            },
            show_ad: function() {
                this.get_parent().show(), this.needs_to_rebind_pushdown && (this.needs_to_rebind_pushdown = !1, this.pushdown.bind_events()), this.base()
            },
            destroy: function() {
                this.hide_chrome(), this.pushdown && (this.pushdown.stop_auto_close(), this.pushdown.unbind_events(), this.needs_to_rebind_pushdown = !0, this.get_parent().hide())
            },
            init_pushdown: function() {
                if (this.pushdown) return this.log("not initializing; already initialized"), void 0;
                var e = this.get_chrome().find("iframe");
                if (!e.length) return this.log("not initializing; no pushdown iframe"), void 0;
                var i = {};
                try {
                    i.auto_expand = deviantART.pageData.pushdown.auto_expand, deviantART.pageData.pushdown.auto_expand = !1
                } catch (t) {
                    i.auto_expand = !1
                }
                this.log("Auto expand: ", i.auto_expand), this.pushdown = new h(this.get_chrome(), i)
            },
            close: function(e) {
                this.pushdown && this.pushdown.close(e)
            },
            get_parent: function() {
                return $("#da-units-970x90")
            }
        }),
        l = a.extend({
            ga_label: "",
            $wrapper_adsafe: null,
            $wrapper_mature: null,
            currently_adsafe: !0,
            show_chrome: function() {
                this.base(), this.get_chrome().addClass("dp-ad-loading")
            },
            switch_adsafe_wrapper: function(e) {
                this.get_wrapper(!e).removeClass("dp-ad-wrapper-active");
                var t = this.get_wrapper(e).addClass("dp-ad-wrapper-active");
                return this.currently_adsafe = e, i.log("switching adsafe wrapper to adsafe: " + e, t), t
            },
            set_wrapper_content: function(e) {
                this.get_wrapper(this.currently_adsafe).html(e), this.reset_viewability()
            },
            get_parent: function() {
                return $(".dev-page-container.minibrowse-container")
            },
            show_ad: function(e) {
                if (this.log("minibrowse ad show: adsafe = " + e.adsafe + ", suppress = " + e.suppress), this.placeholder_height && this.get_placeholder().css("min-height", this.placeholder_height), this.should_hide_ad_based_on_response(e)) return this.get_chrome().removeClass("dp-ad-visible"), e.suppress && PubSub.publish("DaGa.track_event_no_debounce", {
                    category: "Deviation",
                    action: "ad_impressions_suppressed",
                    label: "ad-" + this.ga_label
                }), void 0;
                this.get_chrome().removeClass("dp-ad-loading");
                var i = this.switch_adsafe_wrapper(e.adsafe),
                    t = this.filter_content(e, i.children().length);
                if (t) {
                    var s = this.uses_placeholder && this.get_placeholder();
                    !s || s.parent().length ? this.set_wrapper_content(t) : this.log("Prevented ad rendering due to Adblock"), s && i.find("[data-ad-id]").attr("data-ad-id", s.siblings("[data-ad-id]").attr("data-ad-id"))
                } else {
                    var a = $(e.content).attr("data-ad-id");
                    i.find("[data-ad-id]").attr("data-ad-id", a), this.reused_ad_logid = i.data("dapx-adid") || i.find("iframe").data("dapx-adid")
                }
                this.bind_positioning_events(), this.set_repositioning_retries(3), this.position_ad_on_placeholder()
            },
            get_chrome: function() {
                return this.$chrome || (this.$chrome = $('<div class="dp-ad-chrome">').prependTo(this.get_parent()), this.css_class && this.$chrome.addClass(this.css_class)), this.$chrome
            },
            get_wrapper: function(e) {
                var i = "$wrapper_" + (e ? "adsafe" : "mature");
                return this[i] || (this[i] = $('<div class="dp-ad-wrapper">').prependTo(this.get_chrome())), this[i]
            },
            destroy: function() {
                this.base(), this.$wrapper_adsafe = null, this.$wrapper_mature = null
            },
            filter_content: function() {
                return !1
            },
            should_hide_ad_based_on_response: function(e) {
                return e.suppress || !e.content
            }
        }),
        c = l.extend({
            show_ad: function(e) {
                $("#inter").length && this.destroy(), e.content && this.get_parent().before(e.content)
            },
            show_chrome: function() {},
            hide_chrome: function() {},
            destroy: function() {
                $("#inter").remove(), this.base()
            }
        }),
        u = l.extend({
            css_class: "mobile",
            pubsub_namespace: "MobileAdProxy",
            constructor: function() {
                this.base(), this.get_chrome(), this.proxy_event("hide")
            },
            proxy_event: function(e, i) {
                this.log(this.pubsub_namespace + ":event " + e, i), PubSub.publish(this.pubsub_namespace + "." + e, i)
            },
            show_ad: function(e) {
                this.proxy_event("show_ad", e), this.get_chrome().removeClass("dp-ad-loading").addClass("dp-ad-visible")
            },
            show_chrome: function() {},
            hide_chrome: function() {},
            get_chrome: function() {
                if (!this.$chrome) {
                    var e = "." + this.css_class.split(" ").join(".");
                    $(e).length || this.create_chrome(), this.$chrome = $(e)
                }
                return this.$chrome
            },
            create_chrome: function() {},
            destroy: function() {
                this.proxy_event("destroy")
            },
            filter_content: function(e, i) {
                return !i && e.content
            },
            resize_placeholder_gpt: function(e, t) {
                if (t && t.path && t.gpt_event && t.path.match(/mobile_deviation_btf_mid/i)) {
                    i.log("Setting gpt placeholder height", t.gpt_event);
                    var s = (t.gpt_event.size || [])[1] || 250,
                        a = this.get_parent().find(".mobile_instream_ad_resizable");
                    if (!a.length) return;
                    a.css("min-height", s);
                    var n = a.find(".ad-wrapper");
                    n.length && n.css("min-height", s), this.placeholder_height = s
                }
            },
            resize_placeholder_bidder: function(e, t) {
                if (t && t.path && t.path.match(/mobile_deviation_btf_mid/i)) {
                    i.log("Setting bidder placeholder height", t);
                    var s = t.ad_height || 250,
                        a = this.get_parent().find(".mobile_instream_ad_resizable");
                    if (!a.length) return;
                    a.css("min-height", s);
                    var n = a.find(".ad-wrapper");
                    n.length && n.css("min-height", s), this.placeholder_height = s;
                    var r = a.find("iframe");
                    if (!r.length) return i.warn("could not find safeframe for " + t.path + " when trying to resize ad"), void 0;
                    r[0].style.height = s + "px"
                }
            }
        }),
        p = Base.extend({
            get_parent: function() {
                return $(".dev-page-container")
            },
            resize_placeholder_gpt: function(e, t) {
                if (t && t.path && t.gpt_event && t.path.match(/mobile_deviation_btf_mid/i)) {
                    i.log("Setting gpt placeholder height", t.gpt_event);
                    var s = (t.gpt_event.size || [])[1] || 250,
                        a = this.get_parent().find(".mobile_instream_ad_resizable");
                    if (!a.length) return;
                    a.css("min-height", s)
                }
            },
            resize_placeholder_bidder: function(e, t) {
                if (t && t.path && t.path.match(/mobile_deviation_btf_mid/i)) {
                    i.log("Setting bidder placeholder height", t);
                    var s = t.ad_height || 250,
                        a = this.get_parent().find(".mobile_instream_ad_resizable");
                    if (!a.length) return;
                    a.css("min-height", s);
                    var n = a.find("iframe");
                    if (!n.length) return i.warn("could not find safeframe for " + t.path + " when trying to resize ad"), void 0;
                    n[0].style.height = s + "px"
                }
            }
        }),
        b = u.extend({
            css_class: "mobile_adhesion",
            pubsub_namespace: "AdhesionAd",
            create_chrome: function() {
                if (!this.$chrome) {
                    this.$chrome = $("<div>", {
                        "class": "mobile_adhesion dp-ad-chrome dp-ad-visible",
                        "data-dwait-domready": "mobile.adhesion.init",
                        "data-dwait-deps": "jms/mobile/adhesion_ad.js"
                    }).hide(), this.$chrome.append($("<div>", {
                        "class": "close"
                    })), this.$chrome.append($("<div>", {
                        "class": "ads-container"
                    })), this.$chrome.appendTo("body");
                    var e = $('<div class="dp-ad-chrome dp-ad-visible"></div>');
                    e.appendTo(this.$chrome.find(".ads-container")), DWait.init_domready()
                }
                return this.$chrome
            },
            show_chrome: function() {}
        }),
        f = l.extend({
            css_class: "textbanner-ad minibrowse",
            ga_label: "txt",
            uses_placeholder: !1,
            should_hide_ad_based_on_response: function(e) {
                return e.suppress
            },
            show_chrome: function() {
                return this.hide_chrome()
            },
            filter_content: function(i, t) {
                var s = this,
                    a = function() {
                        var e = $(".dev-view-about", s.get_parent()).width() - 64,
                            t = 1200,
                            a = 120,
                            n = 50;
                        return (e > t || a > e) && (e = Math.min(t, Math.max(a, e))), PubSub.publish("DaPx.send_ad_event_from_node", {
                            node: s.get_chrome(),
                            event_payload: {
                                event: "ad_rendered",
                                slot: "deviation_textad",
                                details: {
                                    meta_bidder: !1,
                                    meta_acc: !1,
                                    meta_renderer: "dfp",
                                    meta_monetized_by: "dfp",
                                    meta_adunit: "deviation_textad",
                                    meta_safety: "safe"
                                }
                            }
                        }), s.get_wrapper(!0).data("dapx-adid", Glbl("DaPx.local_logid")), i.content.replace('style="', 'style="max-width:' + e + "px; min-width:" + a + "px; min-height:" + n + "px;")
                    };
                if (t) return this.viewed && i.adsafe && e > 100 * Math.random() ? a() : !1;
                if (i.adsafe) return this.log("Populating textbanner ad"), a();
                var n = Subby.getPremiumCheckoutUrl("critique"),
                    r = window.DaGa.generate_link_tracking_code("PremiumUpsell", "TextAd"),
                    o = window.DaGa.generate_link_tracking_code("Join", "TextAd"),
                    d = "mature";
                if (i.is_nsfg === !0 && (d = "nsfg"), PubSub.publish("DaPx.send_ad_event_from_node", {
                        node: this.get_chrome(),
                        event_payload: {
                            event: "ad_rendered",
                            slot: "deviation_textad",
                            details: {
                                meta_bidder: !1,
                                meta_acc: !1,
                                meta_renderer: "da",
                                meta_monetized_by: "da",
                                meta_adunit: "deviation_textad",
                                meta_safety: d
                            }
                        }
                    }), PubSub.publish("DaPx.send_ad_event", {
                        event: "ad_rendered",
                        slot: "deviation_textad_fallback"
                    }), this.get_wrapper(!1).data("dapx-adid", Glbl("DaPx.local_logid")), deviantART.deviant.loggedIn) return '<div style="text-align:center"><h2 style="margin:4px 0 0 0;"><a href="' + n + '" ' + r + ">" + "Receive advanced feedback on your art with Critiques &#187;" + "</a>" + "</h2>" + '<a style="text-decoration:none;" href="' + n + '" data-ga_click_event="' + r + '">' + "Upgrade to a DeviantArt Core Membership today!" + "</a>" + "</div>";
                var h = "https://www.deviantart.com/join/?joinpoint=Ads&utm_source=DA&utm_medium=banner-textad";
                return vms_feature("sisu") && (window.isVM && vms_feature("sisu_vm") ? joinurl = "https://sisu.deviantart.lan:4000/" : h = "https://www.deviantart.com/signinup-0fb0463eb8f2860934b8139607dd93eb/"), '<div style="text-align:center"><h2 style="margin:4px 0 0 0;"><a class="join-link" href="' + h + '" onclick="' + o + '">' + "Join DeviantArt for FREE &raquo;" + "</a>" + "</h2>" + '<a class="join-link" style="text-decoration:none;" href="' + h + '" onclick="' + o + '">' + "Collect, Watch, Comment, Contribute. Join the world's largest art community today!" + "</a>" + "</div>"
            },
            show_ad: function(e) {
                return this.should_hide_ad_based_on_response(e) ? (this.hide_chrome(), void 0) : (this.base(e), void 0)
            }
        });
    l.extend({
        ga_label: "pushdown",
        css_class: "pushdown-ad minibrowse",
        uses_placeholder: !1,
        destroy: function() {
            this.pushdown && this.pushdown.destroy(), this.get_chrome().remove(), this.base()
        },
        init_pushdown: function() {
            if (this.pushdown) return i.log("Pushdown already initialized"), void 0;
            var e = this.get_chrome().find("iframe");
            if (!e.length) return i.log("No Pushdown iFrame"), void 0;
            var t = {
                auto_expand: !1
            };
            this.pushdown = new h(this.get_chrome(), t)
        },
        close: function(e) {
            this.pushdown && this.pushdown.close(e)
        },
        filter_content: function(e, i) {
            return !i && e.content
        },
        should_hide_ad_based_on_response: function(e) {
            return e.suppress || !e.content
        },
        show_ad: function(e) {
            if (this.log("pushdown ad show: adsafe = " + e.adsafe + ", suppress = " + e.suppress), this.should_hide_ad_based_on_response(e)) return this.get_chrome().removeClass("dp-ad-visible"), e.suppress && PubSub.publish("DaGa.track_event_no_debounce", {
                category: "Deviation",
                action: "ad_impressions_suppressed",
                label: "ad-" + this.ga_label
            }), void 0;
            var i = this.filter_content(e, this.get_chrome().children().length);
            i && (this.switch_adsafe_wrapper(e.adsafe), this.set_wrapper_content(i), this.init_pushdown()), this.get_chrome().removeClass("dp-ad-loading").addClass("dp-ad-visible")
        },
        show_chrome: function() {
            return this.get_parent().find(".textbanner-ad.dp-ad-visible").length ? (this.hide_chrome(), void 0) : (this.base(), void 0)
        },
        get_parent: function() {
            return $("#da-units-970x90")
        }
    });
    var m = l.extend({
            is_infinite: !1,
            is_timed: !1,
            last_serve: 0,
            last_pause: 0,
            was_direct_campaign: !1,
            constructor: function() {
                this.base(), ((deviantART || {}).deviant || {}).loggedIn ? this.is_timed = 3e4 : this.is_infinite = !0, this.log("persistent ad configured", {
                    is_infinite: this.is_infinite,
                    timer: this.is_timed
                })
            },
            show_chrome: function() {
                this.base(), this.is_timed && (this.last_pause = $.now())
            },
            filter_content: function(i, t) {
                if (i.adsafe_changed) return this.log("adsafe state has changed (now " + i.adsafe + "), forcing ad refresh"), i.content;
                if (t) {
                    var s = this.viewed,
                        a = e;
                    if (this.was_direct_campaign || (a = 100, s = !0), this.log("refresh chance " + a + " was direct: " + this.was_direct_campaign + " viewability_constraint: " + s + " adsafe: " + i.adsafe), s && a > 100 * Math.random()) return this.log("rolled dice, refreshing"), this.last_serve = $.now(), i.content;
                    if (this.log("rolled dice, NOT refreshing"), this.is_infinite) return !1;
                    if (this.is_timed) {
                        var n = $.now(),
                            r = this.last_pause,
                            o = 2e3 + (r ? n - r : 0),
                            d = this.last_serve + o,
                            h = n - d,
                            _ = this.is_timed;
                        return this.last_pause = 0, this.log("pause duration: ", o, "; time_since_last: ", h, "; min_time: ", _, "; should_refresh: ", h > _), h > _ ? (this.last_serve = n, this.log("populating ad"), i.content) : !1
                    }
                }
                return this.is_timed && (this.last_serve = $.now()), this.log("populating ad"), i.content
            }
        }),
        g = m.extend({
            css_class: "atf-right-300x250",
            ga_label: "atf",
            resize_placeholder_gpt: function(e, t) {
                if (t && t.gpt_event && this.get_placeholder() && t.path.match(/atf_right_300x250/i)) {
                    var s = (t.gpt_event.size || [])[1] || 250;
                    i.log("Setting gpt placeholder height", s, t), this.get_placeholder().css("min-height", s), this.placeholder_height = s
                }
            },
            resize_placeholder_bidder: function(e, t) {
                if (t && this.get_placeholder()) {
                    var s = "safe" == t.content_safety;
                    if (s != this.currently_adsafe) return i.log("not resizing placeholder because ad being rendered is adsafe: " + s + " but current pages is: " + this.currently_adsafe), void 0;
                    if (t.path.match(/atf_right_300x250/i)) {
                        i.log("Setting bidder placeholder height", t);
                        var a = t.ad_height || 250;
                        if (this.get_placeholder().css("min-height", a), this.placeholder_height = a, iframe = this.get_wrapper(this.currently_adsafe).find("iframe"), i.log("setting bidder frame height, page adsafeness: " + this.currently_adsafe, iframe), !iframe.length) return i.warn("could not find safeframe for " + t.path + " when trying to resize ad"), void 0;
                        iframe[0].style.height = a + "px"
                    }
                }
            },
            rendered_gpt: function(e) {
                e && e.path.match(/atf_right_300x250/i) && (this.was_direct_campaign = "other" === e.monetized_by)
            },
            rendered_bidder: function(e) {
                e && e.path.match(/atf_right_300x250/i) && (this.was_direct_campaign = !1)
            }
        }),
        v = m.extend({
            css_class: "atf-right-300x600",
            ga_label: "atfx"
        }),
        w = m.extend({
            css_class: "btf-right-300x250",
            ga_label: "btf",
            docking_pubsub_eventname: "ResourcePageBtfDockAd.state_changed",
            rendered_gpt: function(e) {
                e && e.path.match(/btf_right_300x250/i) && (this.was_direct_campaign = "other" === e.monetized_by)
            },
            rendered_bidder: function(e) {
                e && e.path.match(/btf_right_300x250/i) && (this.was_direct_campaign = !1)
            }
        });
    new t, window.DWait && DWait.run("jms/pages/deviation/dev-page-ads.js")
});
DWait.ready(["jms/lib/ddt.js", "jms/lib/jquery/jquery.current.js", "jms/lib/Base.js"], function() {
    (function() {
        var e;
        window.DownloadAd = {
            open: function(i, n) {
                return e.open(i, n)
            }
        };
        var i = Base.extend({
            $chrome: null,
            chrome_handler: null,
            current_handler: null,
            register_chrome: function(e) {
                var i = Glbl("DownloadAd.handler");
                if (this.has_chrome()) {
                    if (this.current_handler == i) return;
                    this.$chrome.remove()
                }
                switch (this.$chrome = $(e), this.$chrome.detach().appendTo("body"), this.$chrome.find("iframe").removeAttr("data-da-ad"), i) {
                    case "mobile":
                        this.chrome_handler = new r(this.$chrome);
                        break;
                    case "direct":
                        this.chrome_handler = new o(this.$chrome);
                        break;
                    default:
                        Glbl("Site.is_mobile") && (i = "mobile", this.chrome_handler = new r(this.$chrome))
                }
                this.current_handler = i
            },
            has_chrome: function() {
                return this.$chrome
            },
            open: function(e, i) {
                return Glbl("DownloadAd.inactive") ? !1 : (this.chrome_handler.open({
                    id: e,
                    url: i
                }), !0)
            }
        });
        e = new i, DWait.init("deviation.download_ad.init", function(i) {
            e.register_chrome(i)
        });
        var n, o, r;
        n = Base.extend({
            $: null,
            prev_scroll: null,
            download: null,
            constructor: function(e) {
                this.$ = e, this.bind(), PubSub.subscribe([{
                    eventname: "Minibrowse.next_click",
                    subscriber: this,
                    callback: this.hide_chrome
                }, {
                    eventname: "Minibrowse.prev_click",
                    subscriber: this,
                    callback: this.hide_chrome
                }])
            },
            bind: function() {
                this.$.find(".download .dismiss").on("click.downloadad", this.close.bind(this))
            },
            open: function(e) {
                this.set_item_and_scroll(e), this.restore_iframe()
            },
            set_item_and_scroll: function(e) {
                this.download = e, $("body").addClass("inter-active"), this.prev_scroll = $(window).scrollTop(), $(window).scrollTop(0)
            },
            restore_iframe: function() {
                var e = this.$.find("iframe");
                e.length && !e.attr("src") && e.attr("src", e.data("src"))
            },
            close: function(e) {
                var i = this.$.find("iframe");
                $("body").removeClass("inter-active"), this.$.hide(), i.length && (i.data("src") || i.data("src", i.attr("src")), i.removeAttr("src")), $(window).scrollTop(this.prev_scroll);
                var n = this.download || {};
                n.from_click = e || !1, PubSub.publish("DownloadAd.close", n)
            },
            download_done: function() {
                DiFi.pushPost("User", "pauseDownloadAd", [], function() {}), DiFi.send(), Glbl("DownloadAd.inactive", !0)
            },
            hide_chrome: function() {
                this.$.remove(), e.$chrome = null, e.current_handler = null, PubSub.unsubscribe([{
                    eventname: "Minibrowse.next_click",
                    subscriber: this
                }, {
                    eventname: "Minibrowse.prev_click",
                    subscriber: this
                }])
            }
        }), o = n.extend({
            open: function(e) {
                this.base(e), this.$.show().addClass("direct").find(".body.splash").hide().end().find(".body.download").show().end()
            },
            close: function(e) {
                this.base(e), this.$.removeClass("direct")
            }
        }), r = n.extend({
            open: function(e) {
                this.base(e), this.$.show().find(".body.splash").hide().end().find(".body.download").show().end()
            }
        })
    })(), window.DWait && DWait.run("jms/pages/deviation/download_ad.js")
});
DWait.ready(["jms/lib/glbl.js", "jms/lib/jquery/jquery.current.js", "jms/thirdparty/lib/browser-deeplink.js"], function() {
    (function() {
        var e = "https://itunes.apple.com/app/id883738213",
            i = "https://play.google.com/store/apps/details?id=com.adsk.sketchbook",
            t = "sketchbook://inspireme/deviation/";
        DWait.init("DeviationPageView.init_challenge_button", function(a) {
            PubSub.publish("DaPx.send_event", $(a).data("challenge-view-eventid-payload")), $(a).on("click", function() {
                deeplink.setup({
                    iOS: {
                        storeUrl: e
                    },
                    android: {
                        storeUrl: i,
                        appId: "com.adsk.sketchbook"
                    }
                }), PubSub.publish("DaGa.track_event", {
                    category: "Deviation",
                    action: "click_sb_cta"
                }), deeplink.open(t + $(this).data("challenge-uuid"))
            })
        })
    })(), window.DWait && DWait.run("jms/pages/deviation/challenge_button.js")
});
(function(n, e) {
    "function" == typeof define && define.amd ? define("deeplink", e(n)) : "object" == typeof exports ? module.exports = e(n) : n.deeplink = e(n)
})(window || this, function(n) {
    "use strict";
    if (n.document && n.navigator) {
        var e, t = {},
            i = {
                iOS: {},
                android: {},
                androidDisabled: !1,
                fallback: !0,
                delay: 1e3,
                delta: 500
            },
            r = function(n, e) {
                var t = {};
                for (var i in n) t[i] = n[i];
                for (var i in e) t[i] = e[i];
                return t
            },
            a = function() {
                var n = "itms-apps://itunes.apple.com/app/",
                    e = t.iOS.appName,
                    i = t.iOS.appId;
                return i && e ? n + e + "/id" + i + "?mt=8" : null
            },
            o = function() {
                var n = "market://details?id=",
                    e = t.android.appId;
                return e ? n + e : null
            },
            d = function() {
                var n = {
                    ios: t.iOS.storeUrl || a(),
                    android: t.android.storeUrl || o()
                };
                return n[t.platform]
            },
            u = function() {
                return navigator.userAgent.match("Android")
            },
            c = function() {
                return navigator.userAgent.match("iPad") || navigator.userAgent.match("iPhone") || navigator.userAgent.match("iPod")
            },
            f = function() {
                return u() || c()
            },
            l = function(n) {
                return function() {
                    var e = d(),
                        i = t.delay + t.delta;
                    "string" == typeof e && i > Date.now() - n && (window.location.href = e)
                }
            },
            p = function(n) {
                t = r(i, n), u() && (t.platform = "android"), c() && (t.platform = "ios")
            },
            s = function(n) {
                if (!f()) return !1;
                if (!u() || !t.androidDisabled) {
                    if (u() && !navigator.userAgent.match(/Firefox/)) {
                        var i = n.match(/([^:]+):\/\/(.+)$/i);
                        n = "intent://" + i[2] + "#Intent;scheme=" + i[1], n += ";package=" + t.android.appId + ";end"
                    }
                    t.fallback && (e = setTimeout(l(Date.now()), t.delay));
                    var r = document.createElement("iframe");
                    return r.onload = function() {
                        clearTimeout(e), r.parentNode.removeChild(r), window.location.href = n
                    }, r.src = n, r.setAttribute("style", "display:none;"), document.body.appendChild(r), !0
                }
            };
        return {
            setup: p,
            open: s
        }
    }
}), window.DWait && DWait.run("jms/thirdparty/lib/browser-deeplink.js");
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/legacy/modals.js"], function() {
    if (DWait.init("DevPageBlockButtons.init", function(o) {
            var e = $(o).data("deviationid"),
                n = $(o).data("username");
            $(".block-unhide", o).on("click", function(o) {
                o.preventDefault(), DiFi.pushPost("User", "unblockDeviation", [e], function(o, e) {
                    o ? window.location.reload() : alert(e.reponse.content.error)
                }), DiFi.send()
            }), $(".block-user-block", o).on("click", function(o) {
                o.preventDefault(), DiFi.pushPost("User", "block", [n], function(o, e) {
                    o ? window.location.reload() : alert(e.response.content.error)
                }), DiFi.send()
            }), $(".block-user-unblock", o).on("click", function(o) {
                o.preventDefault(), DiFi.pushPost("User", "unblock", [n], function(o, e) {
                    o ? window.location.reload() : alert(e.response.content.error)
                }), DiFi.send()
            })
        }), window.safeLocalGet("ModerationMessage")) {
        window.localStorage.removeItem("ModerationMessage");
        var o = Modals.factory(document.getElementById("moderation_success_modal").cloneNode(!0), {
            cssShadows: !0,
            showButtonsSeparator: !1
        });
        o.addButton("OK", "smbutton-blue", function() {
            return Modals.pop("closed"), !1
        }), Modals.push(o)
    }
    window.DWait && DWait.run("jms/pages/deviation/block_buttons.js")
});
DWait.ready(["jms/lib/minibrowse.view.js", "jms/lib/jquery/jquery.current.js", "jms/lib/difi.queue.js", "jms/lib/pubsub.js", "jms/lib/glbl.js", "jms/lib/Base.js"], function() {
    (function(e) {
        var i = Base.extend({
            _main_html_dimensions_cache: {},
            _main_html_data_cache: {},
            _item_options_cache: {},
            _extras_html_data_cache: {},
            _itemid: null,
            _difi_queue: null,
            _preloading: {},
            handlers: {
                open: function(i, t) {
                    var s = t,
                        a = "view",
                        n = "Minibrowse.preload" === i,
                        _ = !1;
                    e.isPlainObject(t) && (s = t.id, a = t.mode || "view", n && (_ = t.direction || !1)), s && ("Minibrowse.open" == i && (this._is_it_too_fast(), this._itemid = s, Glbl("Minibrowse.opened", !0), Glbl("Minibrowse.mode", a), Glbl("Minibrowse.itemid", parseInt(s, 10)), PubSub.publish("Minibrowse.item_has_been_opened", s)), Glbl("Minibrowse.opened") && this._too_fast && !n || this._preloading[s] === !0 ? (this._open_timeout && clearTimeout(this._open_timeout), this._open_timeout = setTimeout(function() {
                        this.handlers._open.call(this, s, a, n, _)
                    }.bind(this), 350)) : this.handlers._open.call(this, s, a, n, _))
                },
                _open: function(e, i, t, s) {
                    if (this._itemid == e || t) {
                        var a = {};
                        if (Glbl("Duperbrowse.preload_active") > 1 && (a.current_id = Glbl("Minibrowse.itemid")), t && (a.preload = !0), t || PubSub.publish("MinibrowseView.take_over_page"), "edit" == i) a.edit = 1;
                        else {
                            if (void 0 !== this._item_options_cache[e]) {
                                var n = this._item_options_cache[e];
                                "print" == n.view_mode && (a.purchase = "print")
                            }
                            void 0 !== this._main_html_dimensions_cache[e] ? (ddt.log("duperbrowse", "Simulating item from dimensions cache", this._main_html_dimensions_cache[e]), this.handlers._main_html_loaded.call(this, !0, this._simulate_main_html_loaded_from_dimensions(e, this._main_html_dimensions_cache[e].width, this._main_html_dimensions_cache[e].height, this._main_html_dimensions_cache[e].src, this._main_html_dimensions_cache[e].full_src, this._main_html_dimensions_cache[e].full_width, this._main_html_dimensions_cache[e].full_height, this._main_html_dimensions_cache[e].transparent, this._main_html_dimensions_cache[e].alt), t, s)) : this._main_html_data_cache[e] ? (ddt.log("duperbrowse", "Loading item from data cache", this._main_html_data_cache[e]), this.handlers._main_html_loaded.call(this, !0, this._main_html_data_cache[e], t, s)) : (ddt.log("duperbrowse", "Requesting item from difi", e), this._difi_queue.push("post", "DeviationView", "getMainHTML", [e], function(e, i) {
                                this.handlers._main_html_loaded.call(this, e, i, t, s)
                            }.bind(this)))
                        }
                        void 0 !== this._extras_html_data_cache[e] && void 0 !== this._extras_html_data_cache[e][i] ? this.handlers._extras_html_loaded.call(this, !0, this._extras_html_data_cache[e][i], t) : s || (t && (this._preloading[e] = !0), Glbl("Duperbrowse.disable_extras_loading") || this._difi_queue.push("post", "DeviationView", "getExtrasHTML", [e, "", a, {}], function(i, s) {
                            t && void 0 !== this._preloading[e] && delete this._preloading[e], this.handlers._extras_html_loaded.call(this, i, s, t)
                        }.bind(this)));
                        var _ = "default";
                        t && (_ = s ? "preview" : "preload"), this._difi_queue.send(_)
                    }
                },
                cache_main_html_dimensions: function(e, i) {
                    this._main_html_dimensions_cache[i.id] = i
                },
                cache_item_options: function(e, i) {
                    this._item_options_cache[i.id] = i
                },
                uncache: function(e, i) {
                    void 0 !== this._main_html_dimensions_cache[i] && delete this._main_html_dimensions_cache[i], void 0 !== this._main_html_data_cache[i] && delete this._main_html_data_cache[i], void 0 !== this._extras_html_data_cache[i] && delete this._extras_html_data_cache[i], void 0 !== this._item_options_cache[i] && delete this._item_options_cache[i]
                },
                close: function() {
                    Glbl("Minibrowse.opened", !1), Glbl.del("Minibrowse.mode"), Glbl.del("Minibrowse.itemid"), PubSub.publish("MinibrowseView.restore_page"), PubSub.publish("Minibrowse.closed")
                },
                _main_html_loaded: function(e, i, t, s) {
                    ddt.log("duperbrowse", "main html loaded", i, t, s), e && i && i.response ? (void 0 === i.simulated && (this._main_html_data_cache[i.request.args[0]] = i), t ? (PubSub.publish("MinibrowseView.preload_main", i.response), s && PubSub.publish("MinibrowseView.preload_preview", {
                        direction: s,
                        response: i.response
                    })) : parseInt(i.request.args[0], 10) === Glbl("Minibrowse.itemid") && PubSub.publish("MinibrowseView.populate_main", i.response)) : PubSub.publish("MinibrowseView.populate_failed", {
                        which: "main"
                    })
                },
                _extras_html_loaded: function(i, t, s) {
                    if (i) {
                        try {
                            if (t.response.content.pageData.deviant.loggedIn !== deviantART.deviant.loggedIn) return window.location.reload(), void 0
                        } catch (a) {}
                        this._extras_html_data_cache[t.request.args[0]] = {};
                        var n = void 0 !== t.request.args[2].edit;
                        n ? this._extras_html_data_cache[t.request.args[0]].edit = t : this._extras_html_data_cache[t.request.args[0]].view = t, s ? PubSub.publish("MinibrowseView.preload_extra", t.response) : parseInt(t.request.args[0], 10) === Glbl("Minibrowse.itemid") && PubSub.publish("MinibrowseView.populate_extra", e.extend(t.response, {
                            edit: n
                        })), PubSub.publish("Minibrowse.extras_loaded")
                    } else PubSub.publish("MinibrowseView.populate_failed", {
                        which: "extras"
                    })
                },
                reload_extras: function(e, i) {
                    var t = !1;
                    this._difi_queue.push("post", "DeviationView", "getExtrasHTML", [i.itemid, "", i.extras_parameters, {}], function(e, i) {
                        this.handlers._extras_html_loaded.call(this, e, i, t)
                    }.bind(this)), this._difi_queue.send("default")
                },
                preview_prev: function(e, i) {
                    void 0 !== this._main_html_dimensions_cache[i] && PubSub.publish("MinibrowseView.preview_prev", this._main_html_dimensions_cache[i])
                },
                preview_next: function(e, i) {
                    void 0 !== this._main_html_dimensions_cache[i] && PubSub.publish("MinibrowseView.preview_next", this._main_html_dimensions_cache[i])
                }
            },
            constructor: function() {
                this._difi_queue = new DiFiQueue({
                    active_buffer_size: 1,
                    queue_callback: function(e) {
                        for (var i = [], t = [], s = e.length - 1; s >= 0; --s) {
                            if ("default" == e[s].group) {
                                i.push(e[s]);
                                break
                            }
                            "preview" == e[s].group && 2 > t.length && t.push(e[s])
                        }
                        return 0 === i.length && (i = t), 0 === i.length && e.length > 0 && i.push(e[e.length - 1]), i
                    }
                }), PubSub.subscribe([{
                    eventname: "Minibrowse.open",
                    subscriber: this,
                    callback: this.handlers.open
                }, {
                    eventname: "Minibrowse.close",
                    subscriber: this,
                    callback: this.handlers.close
                }, {
                    eventname: "Minibrowse.cache_main_html_dimensions",
                    subscriber: this,
                    callback: this.handlers.cache_main_html_dimensions
                }, {
                    eventname: "Minibrowse.cache_item_options",
                    subscriber: this,
                    callback: this.handlers.cache_item_options
                }, {
                    eventname: "Minibrowse.uncache",
                    subscriber: this,
                    callback: this.handlers.uncache
                }, {
                    eventname: "Minibrowse.preload",
                    subscriber: this,
                    callback: this.handlers.open
                }, {
                    eventname: "Minibrowse.reload_extras",
                    subscriber: this,
                    callback: this.handlers.reload_extras
                }])
            },
            _simulate_main_html_loaded_from_dimensions: function(e, i, t, s, a, n, _, l, h) {
                a || (a = s, n = i, _ = t);
                var o = "no-lub";
                Glbl("Site.is_deviantart") && (o = "");
                var d = '<img collect_rid="1:' + e + '" src="' + s + '"  width="' + i + '" height="' + t + '" alt="' + h + '" class="dev-content-normal" data-embed-id="' + e + '" data-embed-type="deviation" data-embed-format="thumb">' + '<img collect_rid="1:' + e + '" src="' + a + '"  width="' + n + '" height="' + _ + '" alt="' + h + '" class="dev-content-full" data-embed-id="' + e + '" data-embed-type="deviation" data-embed-format="thumb">';
                Glbl("Site.is_mobile") && ((300 > i || 300 > t) && (s = a, i = n, t = _), d = '<img collect_rid="1:' + e + '" src="' + s + '"  width="' + i + '" height="' + t + '" alt="' + h + '" class="dev-content-full" >');
                var r = {
                    deviation_preload_type: "image",
                    deviationid: e
                };
                return {
                    simulated: !0,
                    request: {
                        args: [e]
                    },
                    response: {
                        content: {
                            html: d,
                            pageData: r
                        }
                    }
                }
            },
            _is_it_too_fast: function() {
                if (void 0 === this._last_open_call) this._last_open_call = e.now();
                else {
                    var i = e.now() - this._last_open_call;
                    350 > i ? this._too_fast = !0 : i > 450 && (this._too_fast = !1), this._last_open_call = e.now()
                }
            }
        });
        new i
    })(jQuery), window.DWait && DWait.run("jms/lib/minibrowse.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/gwebpage.js", "jms/lib/glbl.js", "jms/lib/pubsub.js", "jms/lib/Base.js", "jms/pages/deviation/dev-page-view.js"], function() {
    (function(e) {
        var i = Base.extend({
            _saved_title: "",
            constructor: function() {
                PubSub.subscribe([{
                    eventname: "MinibrowseView.take_over_page",
                    subscriber: this,
                    callback: this.handlers.take_over_page
                }, {
                    eventname: "MinibrowseView.restore_page",
                    subscriber: this,
                    callback: this.handlers.restore_page
                }, {
                    eventname: "MinibrowseView.populate_main",
                    subscriber: this,
                    callback: this.handlers.populate_main
                }])
            },
            handlers: {
                take_over_page: function() {
                    !this._saved_title && document.title && (this._saved_title = document.title), this._clear_page(), e("body > div#output").hide();
                    var i = this._get_container();
                    i.length || (i = e('<div class="dev-page-container bubbleview minibrowse-container"></div>'), i.appendTo("body"));
                    var t = Boolean((deviantART.pageData.user || {}).fullview_all),
                        a = "dev-page-view view-mode-normal",
                        v = '<div class="' + a + '" data-gmiclass="DeviationPageView">';
                    v += Glbl("Site.is_mobile") ? '<div class="dev-view-deviation" data-dwait-deps="jms/mobile/deviation.view.js" data-dwait-domready="MobileDeviation.init"></div><div class="dev-view-about"><div class="dev-about-bg-border"><div class="dev-about-bg-gradient"></div></div><div class="dev-view-about-content"></div></div><div class="dev-view-meta"><div class="dev-view-meta-content"></div></div>' : t ? '<div class="dev-view-deviation"></div><div class="dev-view-main-content"><div class="dev-view-about"><div class="dev-about-bg-border"><div class="dev-about-bg-gradient"></div></div><div class="dev-view-about-content"></div></div></div><div class="dev-view-meta"><div class="dev-view-meta-content"></div></div>' : '<div class="dev-view-main-content"><div class="dev-view-deviation"></div><div class="dev-view-about"><div class="dev-about-bg-border"><div class="dev-about-bg-gradient"></div></div><div class="dev-view-about-content"></div></div></div><div class="dev-view-meta"><div class="dev-view-meta-content"></div></div>', v += '<div class="dev-right-col-bg"></div><div style="clear:both;"></div></div>', e(v).appendTo(i), Glbl("Duperbrowse.disable_safari_scroll_fix") || setTimeout(function() {
                        e(window).scrollTop(0)
                    }, 1)
                },
                restore_page: function() {
                    e("body > div#output").show(), this._clear_page(!0), this._saved_title && (document.title = this._saved_title), this._saved_title = null
                },
                populate_main: function(i, t) {
                    if (!t.content || !e.isPlainObject(t.content)) return PubSub.publish("MinibrowseView.populate_failed", {
                        which: "main"
                    }), void 0;
                    var a = Boolean((deviantART.pageData.user || {}).fullview_all);
                    t.content.pageData.is_journal && (a = t.content.pageData.is_journal_fullview_forced), Glbl("Site.is_mobile") && (a = !0), e("body").removeClass("superwide").toggleClass("fullview", a), this._get_deviation().html(t.content.html);
                    var v = e(":gmi(DeviationPageView)").toggleClass("view-mode-full", a).toggleClass("view-mode-normal", !a);
                    v.gmiAttr("deviationid", t.content.pageData.deviationid), v.gmiAttr("fullview_requested", a ? 1 : 0), void 0 !== t.content && gWebPage.update(t.content), v.gmi()
                }
            },
            _clear_page: function(e) {
                var i = this._get_container();
                e ? (PubSub.publish("DeviationAds.minibrowse_destroy"), i.remove()) : i.children().not(".dp-ad-chrome").remove()
            },
            _get_container: function() {
                return e(".dev-page-container.minibrowse-container")
            },
            _get_about: function() {
                return this._get_container().find("> .dev-page-view > .dev-view-about, > .dev-page-view > .dev-view-main-content > .dev-view-about").find(".dev-view-about-content")
            },
            _get_meta: function() {
                return this._get_container().find("> .dev-page-view > .dev-view-meta .dev-view-meta-content")
            },
            _get_deviation: function() {
                return this._get_container().find("> .dev-page-view > .dev-view-deviation, > .dev-page-view > .dev-view-main-content > .dev-view-deviation")
            }
        });
        new i;
        var t = {
            factory: function(e, t) {
                var a = i.extend(t);
                new a
            }
        };
        PubSub.subscribe({
            eventname: "MinibrowseView.js_factory",
            subscriber: t,
            callback: t.factory
        })
    })(jQuery), window.DWait && DWait.run("jms/lib/minibrowse.view.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/Base.js"], function() {
    (function(e, i) {
        var t = Base.extend({
            pushes: [],
            group: null,
            wait: !1,
            _timer: null,
            _deferred: null,
            _killed: !1,
            constructor: function(e, i, t) {
                this.pushes = e, this.group = i, this.wait = t
            },
            merge: function(e) {
                for (var i = this.pushes, t = 0, s = e.length; s > t; t++) i = i.concat(e[t].pushes);
                return this.pushes = i, this
            },
            promise: function() {
                this.deferred = e.Deferred();
                for (var i = 0, t = this.pushes.length; t > i; i++) DiFi.push.apply(DiFi, this._wrap_difi(this.pushes[i], this.deferred));
                return this.wait ? DiFi.timer(this.wait) : DiFi.send(), this._timer = setTimeout(this._kill.bind(this), 6e4), this.deferred.promise()
            },
            _kill: function() {
                this.deferred && "pending" === this.deferred.state() && (this.deferred.resolve("killed"), this._killed = !0, console.log("[DiFi] Request killed after timeout")), clearTimeout(this._timer), this._timer = null
            },
            _wrap_difi: function(i, t) {
                var s = i[4],
                    u = i[5],
                    r = {
                        request: void 0,
                        response: {
                            status: "NOEXEC_HALT",
                            content: {
                                error: "Request timed out",
                                details: "Request timed out and was killed",
                                human: "The request took too long and was cancelled, please try later"
                            }
                        }
                    };
                return e.isFunction(s) && (i[4] = function(e, i) {
                    return this._killed ? (s.call(u || null, !1, r), void 0) : (s.call(u || null, e, i), t.resolve(e), void 0)
                }.bind(this)), i
            }
        });
        i.DiFiQueue = Base.extend({
            _buffer: [],
            _active_buffer: [],
            _push_queue: [],
            options: {},
            constructor: function(i) {
                var t = {
                    active_buffer_size: 1,
                    queue_callback: null,
                    wait_for_more: !1
                };
                this.options = e.extend(t, i), this._buffer = [], this._active_buffer = [], this._push_queue = []
            },
            push: function(e, i, t, s, u, r) {
                this._push_queue.push([e, i, t, s, u, r])
            },
            send: function(e) {
                e = e || "default", 0 !== this._push_queue.length && (this._buffer.push(new t(this._push_queue, e, this.options.wait_for_more)), this._push_queue = [], this._waiting() || this._flush())
            },
            _flush: function(e) {
                if (e && this.options.queue_callback && (this._buffer = this.options.queue_callback(this._buffer)), 0 !== this._buffer.length && !this._waiting()) {
                    var i = this._buffer[0].merge(this._buffer.slice(1));
                    this._active_buffer.push(i.promise().done(this._handle.bind(this))), this._buffer = []
                }
            },
            _handle: function() {
                this._active_buffer = e.map(this._active_buffer, function(e) {
                    return "pending" === e.state() ? e : void 0
                }), this._flush(!0)
            },
            _waiting: function() {
                return this._active_buffer.length >= this.options.active_buffer_size
            }
        })
    })(jQuery, window), window.DWait && DWait.run("jms/lib/difi.queue.js")
});
DWait.ready(["jms/lib/bind.js", "jms/lib/events.js"], function() {
    DiFiHolder = {
        up: function() {
            this.count = (this.count || 0) + 1, 1 == this.count && this.on()
        },
        down: function() {
            this.count = (this.count || 0) - 1, this.count || this.off()
        },
        downWithCallback: function() {
            DiFiHolder.down(), DiFi.stdErrCallback.apply(this, arguments)
        },
        getStdCallback: function() {
            return this.up(), this.downWithCallback
        },
        on: function() {
            DiFiHolder.on_please = 1, setTimeout(DiFiHolder.on2, 1)
        },
        on2: function() {
            DiFiHolder.on_please && Events.hook(document.body, "click", DiFiHolder.click)
        },
        off: function() {
            DiFiHolder.on_please = 0, Events.unhook(document.body, "click", this.click), this.queued_click && (window.location.href = this.queued_click, this.queued_click = null)
        },
        click: function(i) {
            var t, e, n, o;
            if (i = i || window.event, i.ctrlKey || i.metaKey || i.altKey || i.shiftKey) return !0;
            for (t = i.target || i.srcElement; t && "A" != t.tagName;)
                if (!(t = t.parentNode)) return !0;
            return e = t.href || "", n = t.href.indexOf("#"), o = window.location.href.split("#"), !e || n >= 0 && 3 > n || 0 == e.indexOf(o[0] + "#") || o[0] == e ? !0 : DiFiHolder.queued_click == e ? DiFiHolder.impatience(e) : (DiFiHolder.queued_click = e, t.style.cursor = "wait", DiFi.timer(1), !1)
        },
        impatience: function(i) {
            return !i || confirm("This page is still saving.\n\nAre you sure you want to go to a different page?")
        }
    }, window.DWait && DWait.run("jms/lib/difi_hold.js")
});
DWait.ready(["jms/pages/lub/lub_constants.js", "jms/lib/ruler.js", "jms/lib/bind.js", "jms/lib/surfer.js", "jms/lib/ddd.utils.js", "jms/lib/ddd.js", "jms/lib/jquery/jquery.current.js", "jms/lib/station.js", "jms/lib/gmi.js", "jms/lib/Base.js"], function() {
    window.ResourceComms = new(Base.extend({
        ready: !1,
        constructor: function() {
            DWait.ready(".jqready", function() {
                this.ready = !0
            }.bind(this)), document.documentElement.onmousedown = this.mouseDown.bind(this)
        },
        broadcastPrepareClones: function(e) {
            var t, a, r, s, i, d;
            for (s = [], t = 0; a = e[t]; t++) a && "object" == typeof a[2] ? ((i = GMI.query(a[2], "GalleryArrowMenu")[0]) && (d = i.gmi_node.parentNode, d.removeChild(i.gmi_node)), r = a[2].cloneNode(!0), (eax = r.getElementsByTagName("img")[0]) && Station.apply(eax, "opacity", 1), s.push([a[0], a[1], r]), i && d && d.insertBefore(i.gmi_node, d.firstChild)) : s.push(a);
            return s
        },
        broadcastDataSplice: function(e, t, a, r) {
            var s, i, d;
            for (r = r || [], s = this.getEveryone(e ? {
                    match: e
                } : null), i = 0; i != s.length; i++) {
                for (d = 0; d != r.length; d++)
                    if (r[d] == s[i]) {
                        d = -1;
                        break
                    } - 1 != d && (t[2] && s[i] != a && (t[2] = this.broadcastPrepareClones(t[2])), s[i].dataSplice.apply(s[i], t))
            }
        },
        mouseDown: function(e) {
            var t, a;
            if (e = e || window.event, a = e.target || e.srcElement, !this.ready) return !0;
            if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button > 1) return !0;
            if ($(a).hasClass("dwaiting")) return !0;
            if (document.body.className.indexOf("modal-active") >= 0) return !0;
            for (; a && a != this.gmi_node;) {
                if (1 == a.nodeType && (t = a.getAttribute("collect_rid")) && !$(a).hasClass("tt-special") && (this.clicked_stream = GMI.up(a), -1 != this.clicked_stream && ("gmi-StashThumb" == this.clicked_stream.gmi_node.id && (this.clicked_stream = GMI.up(this.clicked_stream.gmi_node)), !(-1 == this.clicked_stream || window.PreviewStream && this.clicked_stream instanceof PreviewStream || window.StashStream && this.clicked_stream instanceof StashStream || "function" != typeof this.clicked_stream.dataSplice)))) {
                    if (window.DDD && DDD.mouseDown.call(a, e, this)) return this.dragged_rid = t.split(":"), this.dragged_rid[0] = Number(this.dragged_rid[0]), this.dragged_rid[1] = Number(this.dragged_rid[1]), e.cancelBubble = !0, e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), !1;
                    break
                }
                a = a.parentNode
            }
        },
        ddd: {
            snap: function(e) {
                var t, a, r, s, i, d, o, n, c, h = function(e) {
                    e.drag_data = {
                        rects: [],
                        selected: [],
                        selected_details: [],
                        surfers: [],
                        share: null
                    }
                };
                if ("gmi-StashStream" == this.clicked_stream.gmi_node.id) return h(this);
                this.clicked_stream.selector && (i = this.clicked_stream.selector.getSelection()), i && i.length || (i = [this.getStreamNode(this.clicked_stream, this.ddd.node) || this.ddd.node]), d = this.clicked_stream.domFindVisible(), c = [];
                for (t in d)
                    for (a = 0; a != i.length; a++) d[t] == i[a] && c.push(this.clicked_stream.contents[t]);
                if (i.length != c.length) throw h(this), Error("Selection Mismatch");
                for (this.drag_data = {
                        rects: [],
                        selected: i,
                        selected_details: c,
                        surfers: []
                    }, r = this.getEveryone(), t = 0; s = r[t]; t++) {
                    if (o = s.commsAskForTargetsEnh(this.clicked_stream, i, c), o === !1 && s == this.clicked_stream) return h(this);
                    this.drag_data.rects = this.drag_data.rects.concat(o), o.length && s == this.clicked_stream && (n = 1)
                }
                for (e.target && $(e.target).closest(".no-lub").length > 0 && (n = 1), t = 0; t != i.length; t++) this.drag_data.surfers.push(this.createSurfer(e, this.clicked_stream, c[t], i[t]));
                for (t = 0; eax = this.drag_data.surfers[t]; t++) eax.node.style.display = "block";
                DDDUtils.mix(this), this.dddTickStart(e), 1 != c.length || !window.da_minish_lub || n && !da_minish_lub.out ? this.drag_data.share = null : (this.drag_data.share = window.da_minish_lub, this.drag_data.share.init(), this.drag_data.shared_rid = c[0], this.drag_data.share.ddd.node = this.ddd.node, this.drag_data.share.ddd.snap.call(this.drag_data.share, e, this, this.drag_data.shared_rid, this.drag_data.surfers[0]))
            },
            drag: function(e, t) {
                var a, r, s;
                if (DDD.subject) {
                    if (e && this.dddTickUpdate && this.dddTickUpdate(e), a = (new Date).valueOf(), "object" == typeof e) this.drag_event_cache = {
                        clientX: e.clientX,
                        clientY: e.clientY,
                        x: e.x,
                        y: e.y
                    };
                    else if (e = this.drag_event_cache, !e) return;
                    for (s = 0; r = this.drag_data.surfers[s]; s++) Surfer.update(r, e);
                    if (!(500 > a - this.drag_snap_time)) {
                        if (100 > a - (this.drag_lores_time || 0) && !t) return this.drag_lores_timer || (this.drag_lores_timer = setTimeout(this.ddd.drag.bind(this), 100)), void 0;
                        this.drag_lores_timer = null, this.drag_lores_time = a;
                        var i;
                        this.drag_data.hover && (this.drag_data.hover.owner.commsDragHover(this.clicked_stream, this.drag_data.hover, !1, !1, this.drag_data.surfers), this.drag_data.hover = null), i = Ruler.hitTest(Ruler.document.pointer(e), this.drag_data.rects, this.clicked_stream.hit_rect), null !== i && (this.drag_data.hover = this.drag_data.rects[i], this.drag_data.hover.owner.commsDragHover(this.clicked_stream, this.drag_data.hover, !0, !1, this.drag_data.surfers)), this.drag_data.share ? (this.drag_data.share.ddd.drag.call(this.drag_data.share, e, this, this.drag_data.shared_rid), this.drag_data.top_drag_offset = 230) : this.drag_data.top_drag_offset = 0
                    }
                }
            },
            drop: function(e) {
                var t, a, r, s, i;
                if (this.dddTickEnd && this.dddTickEnd(e), this.drag_lores_timer && (clearTimeout(this.drag_lores_timer), this.drag_lores_timer = null), this.drag_data.share && (i = this.drag_data.share.ddd.drop.call(this.drag_data.share, e, this, this.drag_data.shared_rid))) return this.drag_data = {}, !0;
                if (this.drag_data.hover && (t = this.drag_data.hover.owner, t.commsDragHover(this.clicked_stream, this.drag_data.hover, !1, !0, this.drag_data.surfers), a = this.drag_data.selected_details, t != this.clicked_stream && (a = this.broadcastPrepareClones(a)), t.commsRecvDrop(this.clicked_stream, a, this.drag_data.hover), this.drag_data.hover = null, t != this.clicked_stream))
                    for (r = 0; s = this.drag_data.surfers[r]; r++) Surfer.dissolve(s, e);
                else
                    for (r = 0; s = this.drag_data.surfers[r]; r++) Surfer.flyHome(s, e)
            }
        },
        getStreamNode: function(e, t) {
            if (e.get_stream_node_from_clicked_node) return e.get_stream_node_from_clicked_node(t);
            for (; t && t.parentNode != e.gmi_node;) t = t.parentNode;
            return t
        },
        getEveryone: function(e) {
            return GMI.query("EditableResourceStream", e).concat(GMI.query("EditableResourceStack", e)).concat(GMI.query("EditableResourceTV", e)).concat(GMI.query("EditableFolderStream", e)).concat(GMI.query("EditableResourceCustomIcon", e)).concat(GMI.query("GPageButton"))
        },
        createSurfer: function(e, t, a, r) {
            var s, i, d, o, n, c, h, l;
            if (t.commsMakeCustomSurfer && (s = t.commsMakeCustomSurfer(e, a, r))) return s;
            switch (Number(a[0])) {
                case RESOURCE_DEVIATION:
                    if (l = (r.getElementsByTagName("img") || [])[0] || r, $(l).hasClass("lit") || $(l).parents(".freeform").length) {
                        var m, g = $(r).closest('[data-sigil*="torpedo-thumb"]');
                        if (g.length) {
                            s = Surfer.create(e, g.get(0), .5, .8, !0, !1, "torpedo-container");
                            break
                        }
                        m = $(r).find("span").get(0);
                        var _ = $(m).find(".gmbutton2, .details, .t, small").hide(),
                            u = $(this.ddd.node).find(".shadow"),
                            f = u.css("background-image");
                        u.css("background-image", ""), s = Surfer.create(e, m, 1, void 0, !0), u.css("background-image", f), _.show();
                        break
                    }
                    s = Surfer.create(e, l);
                    var v = $(e.target).closest("div[collect_rid]"),
                        b = v.hasClass("tt-ismature");
                    b && !deviantART.deviant.browseadult ? (d = v.width(), o = v.height()) : (d = l.width || l.offsetWidth, o = l.height || l.offsetHeight), (d > 150 || o > 150) && (s.modified = !0, s.node.style.width = 150 / Math.max(d, o) * d + "px", s.node.style.height = 150 / Math.max(d, o) * o + "px", s.mod_down.x *= 150 / Math.max(d, o), s.mod_down.y *= 150 / Math.max(d, o));
                    break;
                case RESOURCE_GALLERIES:
                case RESOURCE_FAVCOLLECTIONS:
                    if (i = " " + r.className + " ", i.indexOf(" tt-tv150 ") >= 0 ? (r = r.getElementsByTagName("div")[1], i = " " + r.className + " ") : i.indexOf(" rs-customicon ") >= 0 && (r = $(r).find("a.rs-customicon-link img").get(0), i = " " + r.className + " "), n = i.indexOf(" tv150 ") >= 0) {
                        for (s = Surfer.create(e, r, 1, void 0, !0), c = s.node.getElementsByTagName("div"), h = 0; h != c.length; h++)
                            if (i = " " + s.node.className + " ", i.indexOf(" a-stream ") >= 0) {
                                c[h].className += " stream";
                                break
                            } s.node.className += n ? " surfer-tv150 tv150" : " surfer-tv200 tv200"
                    } else i.indexOf(" rs-customicon-inner ") >= 0 ? (s = Surfer.create(e, r, void 0, void 0, !0), s.node.className += " surfer-rs-customicon") : i.indexOf(" gl-text ") >= 0 ? (s = Surfer.create(e, r, void 0, void 0, !0), s.node.className += " surfer-gl-text") : (s = Surfer.create(e, r, void 0, void 0, !0), s.node.className += " surfer-stack stackctrl")
            }
            return s
        }
    })), window.DWait && DWait.run("jms/lib/gstream/resource_comms.js")
});
DWait.ready(["jms/lib/gstream/resource_stream.js"], function() {
    ResourceStack = ResourceStream.extend({
        findIconSlots: function() {
            var t, i, e, s;
            for (s = [], t = this.gmi_node.getElementsByTagName("div")[1].childNodes, i = 0; e = t[i]; i++)(e.className || "").indexOf("icon") >= 0 && s.push(e);
            return s.reverse(), s
        },
        dataFetch: function() {},
        domFindVisible: function() {
            var t, i, e, s, r;
            for (r = this.findIconSlots(), i = {}, s = 0, t = 0; e = r[t]; t++) e.firstChild && (i[s++ + this.gs_offset] = e.firstChild);
            return i
        },
        domReadMeta: function() {
            this.length = null, this.gs_offset = 0, this.gs_count_per_page = 3, this.gs_fetch_size = 6, this.gs_fetch_bank = 0
        },
        domDrawItem: function(t, i) {
            var e;
            if (!(void 0 !== this.gs_total && t >= this.gs_total)) {
                if (void 0 == i) return this.REQUEST_FETCH;
                if (e = this.findIconSlots(), e[t])
                    if ("string" == typeof i[2]) e[t].innerHTML = i[2];
                    else {
                        for (; e[t].firstChild;) e[t].removeChild(e[t].firstChild);
                        e[t].appendChild(i[2])
                    }
            }
        },
        commsRecvDrop: function(t, i, e) {
            var s;
            s = [];
            for (var r = 0; r != e.length; r++) s[r] = this.processDroppedItem(e[r]);
            this.dataSplice(0, 0, s)
        },
        processDroppedItem: function(t) {
            return window.da_minish_lub && (t[2] = da_minish_lub.stacktileFromThumb150([Number(t[0]), t[1]], t[2]) || t[2]), t
        }
    }), window.DWait && DWait.run("jms/lib/gstream/resource_stack.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/station.js", "jms/lib/difi.js", "jms/lib/renamer.js", "jms/lib/popup2.js", "jms/lib/browser.js", "jms/lib/jquery/jquery.current.js", "jms/lib/gmi.js"], function() {
    window.GalleryArrowMenu = GMIBase.extend({
        gmiConstructor: function() {
            this.cmn = 0, this.has_remove_menu = 0 == this.gmi_args.has_remove_menu ? !1 : !0, "legacy" == this.gmi_args.mode ? this.gmi_node.innerHTML = '<img onclick="setTimeout(GMI.up(this).click.bind(GMI.up(this)), 1)" style="cursor:pointer;position:relative;z-index:30" src="https://st.deviantart.net/minish/gallery/menu-button-b.gif" alt="Menu"/>' : (this.gmi_node.className = "gm-chaos gmbuttons gmbuttons-arrowmenu" + ("folder" == this.gmi_args.mode ? " gmbuttons-folder" : ""), this.gmi_node.innerHTML = '<a class="gmbutton2 gmbutton2chaos gmbutton2hidden" onclick="Popup2.hideAll();this.className += \' active\';setTimeout(GMI.up(this).click.bind(GMI.up(this), 1), 1);return GMI.evCancel()">Menu</a>')
        },
        gmiDestructor: function() {
            !this.folder && this.stream_item && this.removeFromStreamItem(), this.popup && (this.popup.remove(), delete this.popup)
        },
        DEFAULT_LABEL: "Folder",
        addToStreamItem: function(e) {
            if (this.stream_item) throw Error("addToStreamItem called twice");
            this.stream_item = e;
            var i, t;
            if (i = e.getElementsByTagName("*")[0], "legacy" == this.gmi_args.mode) {
                for (this.stream_item_backup = e.innerHTML, t = "B" == i.firstChild.tagName ? 2 : 1; i.childNodes[t];) i.removeChild(i.childNodes[t]);
                i.appendChild(this.gmi_node)
            } else i.insertBefore(this.gmi_node, i.firstChild);
            this.gmiUp("Gruser") && this.gmiUp("Gruser").gmi_args.group || (this.stream_item.ondblclick = this.click.bind(this));
            var s = this.$.closest("grid" == this.gmi_args.browse_view_mode ? ".tt-w" : ".tt-fh"),
                r = {};
            if ("static" !== s.css("position")) this.$.css({
                top: 6,
                right: 5,
                zIndex: 3,
                margin: 0
            });
            else if (s.length > 0) {
                var n = $("#output");
                n.is(":hidden") && (r = {
                    position: n.css("position"),
                    left: n.css("left")
                }, n.css({
                    position: "absolute",
                    left: "-9999px"
                }).show()), this.$.css({
                    marginLeft: s.innerWidth() - 26 + "px",
                    zIndex: 1
                }), $.isEmptyObject(r) || n.css(r).hide()
            }
        },
        removeFromStreamItem: function() {
            this.stream_item.ondblclick = null, this.gmi_node.parentNode && this.gmi_node.parentNode.removeChild(this.gmi_node), "legacy" == this.gmi_args.mode && (this.stream_item.innerHTML = this.stream_item_backup)
        },
        getRID: function() {
            return this.gmi_args.stream_proxy.domReadOne(this.stream_item).slice(0, 2)
        },
        addToFolderItem: function(e) {
            var i;
            this.stream_item = e, this.folder = this.findAnyFolder(), this.gmi_node.style.position = "absolute", this.gmi_node.style.top = Browser.isIE && 8 == document.documentMode ? "-" + this.stream_item.firstChild.offsetHeight + "px" : "-3px", i = "A" == (e.nextSibling || {}).tagName ? e.nextSibling : e, i.style.position = "relative", i.appendChild(this.gmi_node), this.buddy_link = i, this.findRenameLink()
        },
        findRenameLink: function() {
            folder = GMI.query(this.stream_item, "EditableResourceTV")[0], this.rename_link = folder ? folder.gmi_node.parentNode.getElementsByTagName("div")[0] : this.buddy_link.firstChild
        },
        addToTextItem: function(e) {
            this.stream_item = e, this.folder = GMI.getOne(e), e.style.position = "relative", this.gmi_node.style.position = "absolute", this.gmi_node.style.top = "-20px", this.gmi_node.style.right = "-4px", e.appendChild(this.gmi_node), this.rename_link = this.buddy_link = e.getElementsByTagName("a")[0]
        },
        addToCustomIcon: function(e) {
            this.stream_item = e, this.folder = GMI.getOne(e), e.style.position = "relative", this.gmi_node.style.position = "absolute", this.gmi_node.style.top = e.className.match(/\brs-customicon-no-label\b/) ? "-12px" : "-5px", e.appendChild(this.gmi_node), this.rename_redirect = !0, this.rename_link = this.buddy_link = e.getElementsByTagName("a")[0]
        },
        addToSectionItem: function(e) {
            var i;
            this.stream_item = e, this.gmi_node.className += " gm-astro", this.folder = this.findAnyFolder(), this.gmi_node.style.position = "absolute", this.gmi_node.style.top = "-13px", this.gmi_node.style.right = "6px", i = e, i.style.position = "relative", i.appendChild(this.gmi_node), this.buddy_link = i, this.rename_link = e.getElementsByTagName("a")[0] || e.getElementsByTagName("b")[e.getElementsByTagName("b") - 1]
        },
        HR: '<div class="blockmenu-hr"></div>',
        click: function() {
            var e;
            this.gmi_args.selection_proxy && (this.gmi_args.selection_proxy.isSelected(this.stream_item) || this.gmi_args.selection_proxy.setSelection(this.stream_item));
            var i = $("legacy" == this.gmi_args.mode ? this.gmi_node.firstChild : this.gmi_node);
            (e = this.popup) || (e = this.popup = new Popup2("GalleryArrowMenu", "body", {
                classes: "cruiser",
                content: '<div class="blockmenu"><div style="position:relative">' + this.getDefaultMenuHTML() + "</div></div>",
                created: function(e) {
                    e.$node.attr("gmi-redirect", this.gmi_node.getAttribute("gmindex"))
                }.bind(this),
                hidden: function() {
                    this.menuDone(), i.removeClass("active")
                }.bind(this),
                removed: function() {
                    delete this.popup
                }.bind(this),
                shown: function() {
                    i.addClass("active")
                },
                destroy: !0
            })), e.show(e.position(i))
        },
        menuClick: function(e, i, t, s) {
            switch (e) {
                case "back":
                    this.setMenuHTML(this.getDefaultMenuHTML(), "left");
                    break;
                case "unfav":
                case "remove":
                    this.menuSubClick(e, i);
                    break;
                case "move":
                case "copy":
                    this.getFolderList(function(i, t, r, n) {
                        function a(e, i) {
                            var t, s, n;
                            for (s = Number(e[1]), n = [], t = 0; t != r.length; t++)
                                if (r[t] && Number(r[t].parentid) == s) {
                                    if (i) return !0;
                                    n.push(r[t])
                                } return i ? !1 : n
                        }
                        var o, l, m, d, h, u, c, g, p, _;
                        for (t = Number(t), h = t ? a([i, t], !1) : r, _ = "folder" == this.gmi_args.mode ? "create_folder" : "edit_folder", m = Number(this.gmi_args.stream_proxy.gmi_args.set_id || this.gmi_args.stream_proxy.gmiUp("GalleryEditor").gmi_args.itemid), this.gmi_args.stream_proxy.gmi_args.browse_mode && (m = null), o = [], l = 0; l != h.length; l++)
                            if (h[l] && (t || !Number(h[l].parentid))) {
                                g = h[l].behavior || {};
                                var f = "";
                                if (a(h[l].rid, !0) && (o.push("<a " + f + ' href="" class="f blockmenu-morelink" onclick="GMI.up(this).menuClick(\'' + e + "', " + h[l].rid[0] + ", " + h[l].rid[1] + ');return GMI.evCancel()">more &#9658;</a>'), f = ' style="margin-right:56px" '), Number(h[l].rid[1]) == m || !g[_] && (p = 1)) {
                                    if (!("Featured" != h[l].title && g[_] || f)) continue;
                                    o.push("<div " + f + " class=blockdisabled>" + h[l].title + "</div>")
                                } else o.push("<a " + f + ' href="" class=f onclick="GMI.up(this).menuSubClick(\'' + e + "', " + h[l].rid[0] + ", " + h[l].rid[1] + ",undefined," + ("Featured" == h[l].title) + "," + ("folder" == this.gmi_args.mode) + ');return GMI.evCancel()">' + h[l].title + "</a>")
                            } if (o.length || (c = !0, o.push("<div class=blockdisabled>" + (p ? "All " + (this.gmi_args.item_label || this.DEFAULT_LABEL) + "s are read only!" : "You have no " + (this.gmi_args.item_label || this.DEFAULT_LABEL) + "s yet!") + "</div>")), t)
                            for (l = 0; l != r.length; l++)
                                if (Number(r[l].rid[1]) == t) {
                                    u = r[l].parentid || 0;
                                    break
                                } d = u ? "'" + e + "', " + i + ", " + u + ", 'left'" : t ? "'" + e + "', 0, 0, 'left'" : "'back'", this.setMenuHTML('<a href="" class=f onclick="GMI.up(this).menuClick(' + d + ');return GMI.evCancel()"><span class="blockmenu-left-arrow">' + (Browser.isMac ? "&#9664;" : "&#9668;") + "</span> Back</a>" + this.HR + (c ? "" : '<div class="blockdisabled">' + {
                            move: "Move",
                            copy: "Copy"
                        } [e] + " to:</div>") + o.join(""), n ? s || "right" : "none")
                    }.bind(this, i, t), s);
                    break;
                case "rename":
                    this.active_renamer && (this.active_renamer.localDestroy(), this.active_renamer = null), this.rename_redirect ? window.location = this.rename_link.href + "?edit_options=1" : (this.rename_link_previous_style = {
                        none: "none"
                    } [this.rename_link.style.display], this.active_renamer = new Renamer(this, this.renamed.bind(this), this.rename_link.innerHTML), this.rename_link.replaceChild(this.active_renamer.node, this.rename_link.firstChild), setTimeout(this.renameFocus.bind(this), 10)), Popup2.hideAll();
                    break;
                case "delete":
                    var r, n;
                    confirm("Are you sure?") && (r = this.gmiUp("EditableFolderStream"), n = this.folder, r.emSplice(r.dataIndexOf([Number(n.gmi_args.set_typeid), Number(n.gmi_args.set_id)]), 1), Popup2.hideAll(), n.gmi_args.set_typeid == RESOURCE_FAVCOLLECTIONS && PubSub.publish("DaGa.track_event", {
                        category: "Collections",
                        action: "delete_collection",
                        label: "source-gruser_collectionowner-" + (($(":gmi(Gruser)").gmi1().gmi_args || {}).group ? "group" : "user")
                    }), GalleryArrowMenu.ggi_result = null)
            }
        },
        emRenameClick: function() {
            this.menuClick("rename")
        },
        menuDone: function() {
            this.gmi_node.firstChild && (this.gmi_node.firstChild.className = this.gmi_node.firstChild.className.replace(/\bactive\b/, "")), this.gmi_args.selection_proxy && 1 >= this.gmi_args.selection_proxy.getSelection().length && this.gmi_args.selection_proxy.setSelection(null)
        },
        menuSubClick: function(e, t, s, r, n, a) {
            var o, l, m, d, h = this.gmi_args.stream_proxy;
            if (r || this.gmi_args.selection_proxy && (m = this.gmi_args.selection_proxy.getSelection()), Popup2.hideAll(), o = this.getRID(), l = h.dataIndexOf(o), 0 > l) return DiFi.stdErr("Sorry! Unable to " + e + " item due to missing index.", null);
            switch (e) {
                case "unfav":
                    h.emUnfav(l, 1);
                    break;
                case "remove":
                case "copy":
                    var u = [];
                    destination_rid = "remove" == e ? void 0 : [t, s], destination_offset = "remove" == e ? void 0 : 0, read_only = "copy" == e, h.emSplice(l, 1, u, destination_rid, destination_offset, read_only);
                    break;
                case "move":
                    "EditableResourceStream" == h.gmi_args.gmiclass ? h.moveResourceToFolder(l, [t, s]) : h.emSplice(l, 1, null, [t, s])
            }
            if (t == RESOURCE_FAVCOLLECTIONS || "unfav" == e) {
                var c, g = ($(":gmi(Gruser)").gmi1().gmi_args || {}).group,
                    p = ["source-gruser", "collectionowner-" + (g ? "group" : "user")];
                switch (e) {
                    case "copy":
                        c = g ? "suggest_favourite" : "add_favourite", p.push("collectiontype-" + (n ? "default" : "collection"));
                        break;
                    case "move":
                        a ? c = "move_collection" : (c = "move_favourite", p.push("fromcollectiontype-" + ("Featured" == h.gs_title ? "default" : "collection")), p.push("tocollectiontype-" + (n ? "default" : "collection")));
                        break;
                    case "remove":
                    case "unfav":
                        c = "remove_favourite";
                        var _ = "all";
                        "remove" == e && (_ = "Featured" == h.gs_title ? "default" : "collection"), p.push("collectiontype-" + _)
                }
                PubSub.publish("DaGa.track_event", {
                    category: "Collections",
                    action: c,
                    label: p.join("_")
                })
            }
            if (!r && void 0 != m)
                for (i = 0; m.length > i; i++) m[i] != this.stream_item && (d = GMI.query(m[i], "GalleryArrowMenu")[0], d && d.menuSubClick(e, t, s, !0))
        },
        ANIPUSH: 100,
        setMenuHTML: function(e, i) {
            return this.cmn++, this.set_menu_html = e, "none" == i ? (this.popup.$node.get(0).firstChild.firstChild.innerHTML = e, this._adaptPopupHeight(), void 0) : (this.menu_animating || (this.menu_animating = !0, this.popup.$node.css("overflow", "hidden"), Station.run(this.popup.$node.get(0).firstChild.firstChild, "left", {
                from: 0,
                to: "right" == i ? -this.ANIPUSH : this.ANIPUSH,
                time: 150,
                f: Interpolators.pulse
            }, this._setMenuHTML_midpoint.bind(this, e, i)), Station.run(this.popup.$node.get(0).firstChild.firstChild, "opacity", {
                from: 1,
                to: 0,
                time: 150,
                f: Interpolators.sineCurve
            }), this.menu_animating = !0), void 0)
        },
        _setMenuHTML_midpoint: function(e, i) {
            this.popup.$node.get(0).firstChild.firstChild.innerHTML = e, Station.run(this.popup.$node.get(0).firstChild.firstChild, "left", {
                from: "right" == i ? this.ANIPUSH : -this.ANIPUSH,
                to: 0,
                time: 150,
                f: Interpolators.pulse
            }, this._setMenuHTML_end.bind(this, e)), Station.run(this.popup.$node.get(0).firstChild.firstChild, "opacity", {
                from: 0,
                to: 1,
                time: 150,
                f: Interpolators.sineCurve
            })
        },
        _adaptPopupHeight: function() {
            var e = this.popup.$node[0];
            e.style.cssText = e.style.cssText.replace(/height:\s?350px\s?\!\s?important;\s?/, ""), this.popup.$node.height() > 350 ? (this.popup.$node.css("overflow", "auto"), this.popup.$node.css("overflow-x", "hidden"), e.style.cssText = "height: 350px !important;" + e.style.cssText) : this.popup.$node.css("overflow", "hidden");
            var i = $("legacy" == this.gmi_args.mode ? this.gmi_node.firstChild : this.gmi_node);
            this.popup.show(this.popup.position(i, {
                keepOnScreen: !0
            }))
        },
        _setMenuHTML_end: function(e) {
            this.menu_animating = !1, e != this.set_menu_html && this.setMenuHTML(this.set_menu_html, "none"), this._adaptPopupHeight()
        },
        getDefaultMenuHTML: function() {
            var e, i, t;
            if ("folder" == this.gmi_args.mode) {
                if (t = this.folder, !t) return '<div class="blockdisabled">This menu is having a bad day and cannot be displayed</div>';
                e = t.gmi_args.behavior || {}, i = this.gmiUp("GMFrame_Gruser"), i || console.log("Missing sidebar widget frame");
                var s = (this.gmiUp("EditableFolderStream").gmi_args.behavior || {}).create_subfolder;
                return (this.getSiblingHeaderHTML() + (e.edit_folder && "Featured" != (this.rename_link || this.gmi_node).firstChild.nodeValue ? '<a class=f href="#" onclick="GMI.up(this).menuClick(\'rename\');return GMI.evCancel()">Rename this ' + (this.gmi_args.item_label || this.DEFAULT_LABEL) + "</a>" : "") + (e.delete_folder && "Featured" != (this.rename_link || this.gmi_node).firstChild.nodeValue ? '<a class=f href="#" onclick="GMI.up(this).menuClick(\'delete\');return GMI.evCancel()">Delete this ' + (this.gmi_args.item_label || this.DEFAULT_LABEL) + "..." + "</a>" : "") + (e.delete_folder && s && "Featured" != (this.rename_link || this.gmi_node).firstChild.nodeValue ? '<a class=f href="##" onclick="GMI.up(this).menuClick(\'move\', null, null, \'right\');return GMI.evCancel();"><span class="blockmenu-right-arrow">&#9658;</span>Move this ' + (this.gmi_args.item_label || this.DEFAULT_LABEL) + " to...&nbsp;&nbsp;&nbsp;</a>" : "") || '<div class="blockdisabled">This item cannot be Renamed or Deleted</div>') + (i && i.canBehave("edit") ? (e.edit_folder || e.delete_folder ? '<div class="blockmenu-hr"></div>' : "") + "<a class=f href=\"###\" onclick=\"GMI.up(this).gmiUp('GMFrame_Gruser').loadView('config');Popup2.hideAll();return GMI.evCancel()\">Edit this Widget</a>" : "")
            }
            e = this.gmi_args.stream_proxy.gmi_args.behavior || {};
            var r = e.edit_folder,
                n = this.gmi_args.stream_proxy.gmi_args.set_typeid;
            n != RESOURCE_FAVCOLLECTIONS && n != RESOURCE_GALLERIES || "set_id" in this.gmi_args.stream_proxy.gmi_args || (r = !1);
            var a = "group" == this.gmi_args.stream_proxy.gmi_args.gruser_type,
                o = $(this.gmi_node).closest(".tt-a").hasClass("tt-special");
            return this.getSiblingHeaderHTML() + (r && !o ? '<a class=f href="#" onclick="GMI.up(this).menuClick(\'move\', null, null, \'right\');return GMI.evCancel()"><span class="blockmenu-right-arrow">&#9658;</span>Move to...&nbsp;&nbsp;&nbsp;</a>' : "") + (o ? "" : '<a class=f href="##" onclick="GMI.up(this).menuClick(\'copy\', null, null, \'right\');return GMI.evCancel()"><span class="blockmenu-right-arrow">&#9658;</span>Copy to...&nbsp;&nbsp;&nbsp;</a>') + (r && this.has_remove_menu ? (o ? "" : this.HR) + '<a class=f href="###" onclick="GMI.up(this).menuClick(\'remove\', ' + n + ');return GMI.evCancel()">Remove from This ' + (this.gmi_args.item_label || this.DEFAULT_LABEL) + "</a>" : "") + (n == RESOURCE_FAVCOLLECTIONS && !a && this.has_remove_menu ? this.HR + '<a class=f href="###" onclick="GMI.up(this).menuClick(\'unfav\');return GMI.evCancel()">Remove from Favourites</a>' : "")
        },
        findAnyFolder: function() {
            return GMI.query(this.stream_item, "EditableResourceTV")[0] || GMI.query(this.stream_item, "EditableResourceStack")[0] || GMI.query(this.stream_item, "EditableResourceStream")[0]
        },
        getSiblingHeaderHTML: function() {
            var e;
            return this.gmi_args.selection_proxy && (e = this.gmi_args.selection_proxy.getSelection(), e.length > 1) ? '<div class="blockdisabled">' + e.length + " Selected</div>" + this.HR : ""
        },
        getFolderList: function(e, i) {
            return GalleryArrowMenu.ggi_result ? e(GalleryArrowMenu.ggi_result, !0) : (this.setMenuHTML('<a href="" class=f onclick="GMI.up(this).menuClick(\'back\');return GMI.evCancel()"><span class="blockmenu-left-arrow">' + (Browser.isMac ? "&#9664;" : "&#9668;") + "</span> Back</a>" + this.HR + '<div class="blockdisabled">Please Wait...</div>', i), DiFi.pushPrivateGet("Gallections", "get_gallections_with_permissions", [this.gmi_args.stream_proxy.gmiUp("Gruser").gmi_args.id, this.gmi_args.stream_proxy.gmi_args.set_typeid || this.gmiUp("GalleryEditor").gmi_args.typeid, (this.folder ? this.folder.gmi_args.set_id : this.gmi_args.stream_proxy.gmi_args.set_id) || this.gmiUp("GalleryEditor").gmi_args.set_id], function(e, i, t, s) {
                var r;
                if (i == this.cmn) {
                    if (!t) return DiFi.stdErr("Unable to fetch folder list.", s.response.content), Popup2.hideAll(), void 0;
                    r = [], jQuery.each(s.response.content, function(e, i) {
                        i.rid = [Number(i.resource_typeid), Number(i.galleryid)], i.is_root_folder && (i.parentid = 0), r[i.position] = i
                    }.bind(this)), e(GalleryArrowMenu.ggi_result = r)
                }
            }.bind(this, e, this.cmn)), DiFi.send(), void 0)
        },
        renameFocus: function() {
            this.active_renamer && this.active_renamer.node.focus()
        },
        renamed: function(e, i) {
            var t, s;
            if (this.active_renamer) {
                delete this.active_renamer, e = this.makeValidNameString(e), this.updateNameDisplay(e || i), this.rename_link_previous_style && (this.rename_link.style.display = this.rename_link_previous_style), t = this.gmiUp("GalleryEditor");
                var r = function(e, t) {
                    return e || (this.updateNameDisplay(i), t.response && t.response.content && t.response.content.error ? alert(t.response.content.error) : alert("There was a problem renaming this folder.\n\nPlease try again or choose a different name.")), GalleryArrowMenu.ggi_result = null, e
                }.bind(this);
                s = this.findGruserid(), e && e != i && this.performRename(s, this.folder.gmi_args.set_typeid, this.folder.gmi_args.set_id, e, r), t && t.updateChannels()
            }
        },
        updateNameDisplay: function(e) {
            $(this.rename_link).html(e)
        },
        performRename: function(e, i, t, s, r) {
            DiFi.pushPost("Gallections", "rename", [e, i, t, s], r), DiFi.timer(1)
        },
        findGruserid: function() {
            if (this.gmi_args.gruser_id) return this.gmi_args.gruser_id;
            var e = this.gmiUp("GalleryEditor");
            return e ? e.gmi_args.gruser_id : this.gmiUp("Gruser").gmi_args.id
        },
        makeValidNameString: function(e) {
            return e = e.replace(/[^a-zA-Z0-9\-_\ \.\?$'\":\,\+]/g, " "), e = e.replace(/(?:^\s+|\s+$)/g, ""), e = e.replace(/\s{2,}/g, " "), e = e.substr(0, 44), e.match(/^[a-zA-Z0-9\-_\ \,\.\?$'\"]{1,44}$/) ? e : null
        }
    }), window.DWait && DWait.run("jms/pages/gallery/arrowmenu.js")
});
DWait.ready(["jms/lib/bind.js", "jms/lib/station.js", "jms/lib/gstream/resource_stack.js", "jms/lib/jquery/jquery.current.js", "jms/lib/browser.js", "jms/lib/ruler.js", "jms/lib/gstream/resource_comms.js", "jms/lib/difi_hold.js", "jms/lib/difi.js", "jms/lib/gmi.js", "jms/lib/gstream/resource_stream.js", "jms/lib/selection.js"], function() {
    window.ResourceStreamSelection = Selection.extend(RES_SEL_EXT), window.EditableResourceStream = ResourceStream.extend(EditableResourceStream_proto = {
        hit_rect: {
            x: 0,
            y: 0,
            y2_buffer: 5
        },
        gmiConstructor: function() {
            this.edit_mode = !1, this.base()
        },
        dataSplice: function(e, t, i) {
            var s;
            return 0 == this.contents.length && (this.gmi_node.innerHTML = ""), s = this.base(e, t, i), this.scatter_hook && this.scatter_hook.resize(), s
        },
        domRemoveItem: function(e) {
            GMI._delete(GMI.query(e, "GalleryArrowMenu")), this.base(e)
        },
        emUnfav: function(e, t) {
            if (!t || this.gmi_args.set_typeid != RESOURCE_FAVCOLLECTIONS || "group" == this.gmi_args.gruser_type) return !1;
            var i = this.contents.slice(e, e + t),
                s = 0,
                r = i.length;
            for (s = 0; r > s; s++) {
                var o = i[s][0];
                o == RESOURCE_GALLERIES || o == RESOURCE_FAVCOLLECTIONS ? this.gmi_args.set_id && DiFi.pushPost("Gallections", "remove_resource", [this.gmi_args.gruser_id, this.gmi_args.set_typeid, this.gmi_args.set_id, i[s][0], i[s][1]], DiFiHolder.getStdCallback()) : DiFi.pushPost("Deviation", "remove_favourite", [i[s][1]], DiFiHolder.getStdCallback())
            }
            return DiFi.timer(10), this.dataSplice(e, t), !0
        },
        moveResourceToFolder: function(e, t) {
            this.gmi_args.gruser_type || this.gmiUp("EditableFolderStream").gmi_args.gruser_type;
            var i = 0;
            if (t) {
                var s = this.contents[e];
                DiFi.pushPost("Gallections", "move_resource", [this.gmi_args.gruser_id, this.gmi_args.set_typeid, this.gmi_args.set_id, t[1], s[0], s[1], i], DiFiHolder.getStdCallback()), DiFi.timer(1)
            }
            var r = GMI.query("EditableResourceStream", {
                set_typeid: this.gmi_args.set_typeid,
                set_id: this.gmi_args.set_id
            });
            r.length && r[0].refreshResources(e)
        },
        emSplice: function(e, t, i, s, r, o) {
            var n, a;
            if (this.gmi_args.gruser_type || this.gmiUp("EditableFolderStream").gmi_args.gruser_type, t)
                if (n = this.contents.slice(e, e + t), s) {
                    for (a = 0; a != n.length; a++) o ? DiFi.pushPost("Gallections", "add_resource", [this.gmi_args.gruser_id, s[0], s[1], n[a][0], n[a][1], r + a], DiFiHolder.getStdCallback()) : DiFi.pushPost("Gallections", "move_resource", [this.gmi_args.gruser_id, this.gmi_args.set_typeid, this.gmi_args.set_id, s[1], n[a][0], n[a][1], r + a], DiFiHolder.getStdCallback());
                    ResourceComms.broadcastDataSplice({
                        set_typeid: Number(s[0]),
                        set_id: Number(s[1])
                    }, [r, 0, n], this, [this])
                } else if (!o)
                for (a = 0; a != n.length; a++) this.gmi_args.set_id && DiFi.pushPost("Gallections", "remove_resource", [this.gmi_args.gruser_id, this.gmi_args.set_typeid, this.gmi_args.set_id, n[a][0], n[a][1]], DiFiHolder.getStdCallback());
            if (i && i.length)
                for (a = 0; a != i.length; a++) this.tmp_from_stream ? DiFi.pushPost("Gallections", "add_resource", [this.gmi_args.gruser_id, this.gmi_args.set_typeid, this.gmi_args.set_id, i[a][0], i[a][1], e + a], DiFiHolder.getStdCallback()) : this.gmi_args.set_id && DiFi.pushPost("Gallections", "add_resource", [this.gmi_args.gruser_id, this.gmi_args.set_typeid, this.gmi_args.set_id, i[a][0], i[a][1], e + a], DiFiHolder.getStdCallback());
            DiFi.timer(1), o || ResourceComms.broadcastDataSplice({
                set_typeid: this.gmi_args.set_typeid,
                set_id: this.gmi_args.set_id
            }, arguments, this, null)
        },
        emReceiver: function(e) {
            if (this.edit_mode != e && "deleted" != this.gmi_lifecycle)
                if (this.edit_mode = e, e) {
                    var t, i;
                    this.selector = new(this.override_selection_type || window.ResourceStreamSelection)(this.gmi_node), this.gmi_args.no_selection || this.selector.hook(this.emGetSelectionParams()), t = this.domFindVisible();
                    for (i in t) this.emMakeEditable(t[i])
                } else GMI._delete(this.gmiQuery("GalleryArrowMenu")), this.selector && (this.gmi_args.no_selection || (this.selector.setSelection(null), this.selector.unhook()), delete this.selector)
        },
        emGetSelectionParams: function() {
            return {
                allow_multiple: "rectangle",
                drag_rect_ruler: this._drag_rect,
                ignore_clicks: this.gmiUp("Gruser").gmi_args.group || 1,
                global_mouse_cancel: !0,
                selectable_area: null
            }
        },
        emMakeEditable: function(e) {
            GMI.query(e, "GalleryArrowMenu")[0] || GMI.create("GalleryArrowMenu", {
                stream_proxy: this,
                has_remove_menu: this.gmi_args.has_remove_menu,
                selection_proxy: this.selector,
                browse_view_mode: this.gmi_args.browse_view_mode,
                mode: (this.gmiUp("Gruser") || this).gmi_args.group ? "modern" : "modern"
            }).addToStreamItem(e)
        },
        _drag_rect: function(e, t) {
            var i;
            return i = Ruler.document.node(e, t), Browser.isKHTML ? (i.y2 += 210, i.h = 210) : Browser.isIE && document.documentMode > 7 && (i.y -= 210, i.h = 210), i
        },
        domDrawItem: function(e, t) {
            var i;
            return i = this.base(e, t), this.edit_mode && t && t[2] && 1 == t[2].nodeType && this.emMakeEditable(t[2]), i
        },
        commsAskForTargetsEnh: function(e, t, i) {
            var s, r = this._contentInterest(i, e);
            return r === !1 ? !1 : r ? (this.contents.length ? s = this.selector.getAllSelectableRects(this, !0, t.length > 1 ? null : t[0]) : (s = [Ruler.document.node(this.gmi_node)], s[0].index = 0, s[0].node = this.gmi_node, s[0].owner = this), s) : []
        },
        commsRecvDrop: function(e, t, s) {
            var r;
            if (this != e)
                for (i = 0; i != t.length; i++) {
                    if (r = e.dataIndexOf(t[i]), !(r >= 0)) throw alert("Unable to move items due to missing index."), Error("Missing index");
                    e.emSplice(r, 1, [], [this.gmi_args.set_typeid, this.gmi_args.set_id], s.index + this.gs_offset || 0, !1)
                } else try {
                    this != e && (this.tmp_from_stream = e), this.emSplice(s.index + this.gs_offset || 0, 0, t)
                } finally {
                    this.tmp_from_stream = null
                }
        },
        commsNonInputEvent: function() {},
        commsDragHover: function(e, t, i) {
            if (!window.da_minish_lub || !window.da_minish_lub.out) {
                var s = GMI.query("EditableResourceStream", {
                    match: {
                        browse_mode: 1
                    }
                });
                if (!s.length) {
                    var r = $(t.node),
                        o = r.hasClass("tt-fh"),
                        n = t.offset_mark ? "r" : "l",
                        a = r.children(".tt-w").first();
                    if (o) {
                        var m = a.find(".offset-mark-" + n);
                        i ? 0 == m.length && $("<div></div>").addClass("offset-mark-" + n).appendTo(a) : m.remove()
                    } else i ? a.addClass("drag-hover-" + n) : a.removeClass("drag-hover-l drag-hover-r")
                }
            }
        },
        _contentInterest: function(e, t) {
            if (!this.gmi_args.gruser_id) return 0;
            if (!this.edit_mode && "gmi-EditableResourceTV" != this.gmi_node.id) return 0;
            if (!(this.gmi_args.behavior || {}).edit_folder) return 0;
            for (i = 0; i != e.length; i++)
                if (1 != Number(e[i][0])) {
                    if (window.EditableFolderStream && t instanceof EditableFolderStream) return 0;
                    if (21 != Number(this.gmi_args.set_typeid)) return 0;
                    if ("group" == this.gmi_args.gruser_type) return 0
                } return 1
        }
    }), window.EditableResourceTV = EditableResourceStream.extend({
        commsAskForTargetsEnh: function(e, t, i) {
            var s;
            return this._contentInterest(i, e) ? (s = Ruler.document.node(this.gmi_node.parentNode.parentNode), s.node = this.gmi_node, s.owner = this, s.index = 0, [s]) : []
        },
        commsRecvDrop: function(e, t, i) {
            try {
                this.tmp_from_stream = e, this.emSplice(i.index + this.gs_offset || 0, 0, t)
            } finally {
                this.tmp_from_stream = null
            }
        },
        commsDragHover: function(e, t, i) {
            var s = this.gmi_node.parentNode.parentNode.parentNode;
            i ? s.className += " selected" : s.className = s.className.replace(/\s*\bselected\b/g, "")
        },
        emReceiver: function(e) {
            this.edit_mode = e
        }
    }), window.EditableResourceFolderLink = EditableResourceTV.extend({
        domDrawItem: function() {},
        dataSplice: function() {},
        domFindVisible: function() {}
    }), window.EditableResourceCustomIcon = EditableResourceTV.extend({
        commsAskForTargetsEnh: function(e, t, i) {
            var s;
            return this._contentInterest(i, e) ? (s = Ruler.document.node($("img", this.gmi_node).get(0)), s.node = this.gmi_node, s.owner = this, s.index = 0, [s]) : []
        },
        domDrawItem: function() {},
        dataSplice: function() {},
        domFindVisible: function() {}
    }), window.EditableResourceStack = ResourceStack.extend(EditableResourceStream_proto), window.GPageButton = EditableResourceStream.extend({
        domDrawItem: function() {},
        dataSplice: function() {},
        domFindVisible: function() {},
        domReadMeta: function() {
            this.gs_offset = Number(this.gmi_args.offset), this.gs_count_per_page = 1, this.gs_fetch_size = 0, this.gs_fetch_bank = 0
        },
        commsAskForTargetsEnh: function(e, t, i) {
            var s;
            return i[0] && 1 == Number(i[0][0]) ? (s = Ruler.document.node(this.gmi_node), s.node = this.gmi_node, s.owner = this, s.index = 0, [s]) : []
        },
        commsRecvDrop: function(e, t, i) {
            mod = 0, e.emSplice(i.index + this.gs_offset + mod, 0, t), e.domDrawRange(e.gs_offset, e.gs_count_per_page)
        },
        commsDragHover: function(e, t, i, s, r) {
            var o, n, a = this.gmi_node;
            for (i ? a.className += " nav-drag-hover" : a.className = a.className.replace(/\s*\bnav.drag.hover\b/g, ""), o = 0; n = r[o]; o++) Station.run(n.node, "opacity", {
                from: Station.read(n.node, "opacity") || 1,
                to: i ? .25 : 1,
                time: 150,
                f: Interpolators.sineCurve
            })
        }
    }), window.DWait && DWait.run("jms/lib/gstream/folders/editable_resource_stream.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js"], function() {
    /**
     * @license
     * jQuery throttle / debounce - v1.1 - 3/7/2010
     * http://benalman.com/projects/jquery-throttle-debounce-plugin/
     *
     * Copyright (c) 2010 "Cowboy" Ben Alman
     * Dual licensed under the MIT and GPL licenses.
     * http://benalman.com/about/license/
     */
    (function(n, u) {
        "$:nomunge";
        var e, t = n.jQuery || n.Cowboy || (n.Cowboy = {});
        t.throttle = e = function(n, e, i, o) {
            function r() {
                function t() {
                    c = +new Date, i.apply(d, j)
                }

                function r() {
                    a = u
                }
                var d = this,
                    y = +new Date - c,
                    j = arguments;
                o && !a && t(), a && clearTimeout(a), o === u && y > n ? t() : e !== !0 && (a = setTimeout(o ? r : t, o === u ? n - y : n))
            }
            var a, c = 0;
            return "boolean" != typeof e && (o = i, i = e, e = u), t.guid && (r.guid = i.guid = i.guid || t.guid++), r
        }, t.debounce = function(n, t, i) {
            return i === u ? e(n, t, !1) : e(n, i, t !== !1)
        }
    })(window), window.DWait && DWait.run("jms/lib/jquery/plugins/jquery.throttle-debounce.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js"], function() {
    (function(e, i) {
        "use strict";
        var a = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        e.fn.imagesLoaded = function(r) {
            function t() {
                var i = e(A),
                    a = e(g);
                d && (g.length ? d.reject(c, i, a) : d.resolve(c)), e.isFunction(r) && r.call(o, c, i, a)
            }

            function n(e) {
                s(e.target, "error" === e.type)
            }

            function s(i, r) {
                i.src !== a && -1 === e.inArray(i, l) && (l.push(i), r ? g.push(i) : A.push(i), e.data(i, "imagesLoaded", {
                    isBroken: r,
                    src: i.src
                }), u && d.notifyWith(e(i), [r, c, e(A), e(g)]), c.length === l.length && (setTimeout(t), c.unbind(".imagesLoaded", n)))
            }
            var o = this,
                d = e.isFunction(e.Deferred) ? e.Deferred() : 0,
                u = e.isFunction(d.notify),
                c = o.find("img").add(o.filter("img")),
                l = [],
                A = [],
                g = [];
            return e.isPlainObject(r) && e.each(r, function(e, i) {
                "callback" === e ? r = i : d && d[e](i)
            }), c.length ? c.bind("load.imagesLoaded error.imagesLoaded", n).each(function(r, t) {
                var n = t.src,
                    o = e.data(t, "imagesLoaded");
                return o && o.src === n ? (s(t, o.isBroken), i) : t.complete && t.naturalWidth !== i ? (s(t, 0 === t.naturalWidth || 0 === t.naturalHeight), i) : ((t.readyState || t.complete) && (t.src = a, t.src = n), i)
            }) : t(), d ? d.promise(o) : o
        }
    })(jQuery), window.DWait && DWait.run("jms/lib/jquery/plugins/jquery.imagesloaded.js")
});
DWait.ready(["jms/lib/jquery/jquery.current.js", "jms/lib/pubsub.js", "jms/lib/jquery/plugins/jquery.throttle-debounce.js"], function() {
    (function(a) {
        var e = {
            updateTimer: null,
            active: !1,
            init: function() {
                PubSub.subscribe({
                    eventname: "ImageLazyLoad.activate",
                    subscriber: this,
                    callback: this.activate
                }), PubSub.subscribe({
                    eventname: "ImageLazyLoad.delayedUpdate",
                    subscriber: this,
                    callback: this.delayedUpdate
                }), PubSub.subscribe({
                    eventname: "ImageLazyLoad.update",
                    subscriber: this,
                    callback: this.update
                })
            },
            activate: function() {
                this.active || (this.active = !0, a(window).on("load resize scroll", a.throttle(200, this.update.bind(this))), this.delayedUpdate())
            },
            delayedUpdate: function() {
                clearTimeout(this.updateTimer), this.updateTimer = setTimeout(this.update, 200)
            },
            update: function() {
                var e = a(window).width(),
                    t = a(window).height();
                a(".image-lazy-load:visible").each(function() {
                    var i = a(this),
                        s = i[0].getBoundingClientRect();
                    if (s.bottom > 0 && t > s.top && s.right > 0 && e > s.left) {
                        i.removeClass("image-lazy-load");
                        var u = i.data("src");
                        i.hasClass("image-lazy-load-background") ? (u || (u = i.data("background")), u && i.css("background-image", "url('" + u + "')").find("img").prop("src", u)) : u && i.attr("src", u)
                    }
                })
            }
        };
        e.init()
    })(jQuery), window.DWait && DWait.run("jms/lib/image_lazy_load.js")
});
DWait.ready(["jms/lib/station.js", "jms/lib/ruler.js", "jms/lib/browser.js", "jms/lib/ddd.js", "jms/lib/jquery/jquery.current.js"], function() {
    Surfer2 = {
        create: function(e, r) {
            var t;
            return t = $("<div>", {
                "class": "surfer2"
            }).appendTo("body"), t = {
                node: t[0],
                o: r || DDD.p_down
            }, Surfer2.update(t, e), t
        },
        update: function(e, r) {
            var t, n, o, a;
            return a = Browser.isIE ? 2 : 0, o = {}, t = Ruler.document.pointer(r), n = e.o, o.x = t.x > n.x ? n.x : t.x, o.x2 = t.x > n.x ? t.x : n.x, o.y = t.y > n.y ? n.y : t.y, o.y2 = t.y > n.y ? t.y : n.y, Station.apply(e.node, "left", o.x), Station.apply(e.node, "top", o.y), Station.apply(e.node, "width", Math.max(o.x2 - o.x, 1) + a), Station.apply(e.node, "height", Math.max(o.y2 - o.y, 1) + a), o
        },
        clear: function(e) {
            e.node.parentNode.removeChild(e.node)
        }
    }, window.DWait && DWait.run("jms/lib/surfer2.js")
});
DWait.ready(["jms/pages/subby.js", "jms/lib/jquery/jquery.current.js", "jms/lib/glbl.js", "jms/lib/pubsub.js", "jms/lib/popup2.js", "jms/lib/Base.js"], function() {
    (function(i) {
        var t = Base.extend({
                modals: [],
                current_modal: null,
                throttle_debounce: 200,
                _listener_added: !1,
                handlers: {
                    close_popup: function() {
                        var i = Popup2.getActivePopup();
                        return i && i.hide(), Popup2.anyActivePopup() || this._detach_listener(), !1
                    },
                    recieve_message: function(i) {
                        var t;
                        i = i.originalEvent;
                        try {
                            t = JSON.parse(i.data)
                        } catch (s) {
                            return
                        }
                        if ("https://www.deviantart.com" == i.origin && t.type && "PurchaseModal" == t.type) switch (t.command) {
                            case "resize":
                                this.resize_modal(t);
                                break;
                            case "close":
                            case "success":
                                PubSub.publish("PurchaseModal.close_popup", t.command);
                                break;
                            case "paypal_redirect":
                                this.paypal_redirect(t.id);
                                break;
                            case "error":
                                this.resize_modal(t)
                        }
                    },
                    resized: function() {
                        var i = Popup2.activePopup(),
                            t = this.get_modal({
                                id: i
                            });
                        t.show()
                    }
                },
                modal_types: {
                    pcp: function(i) {
                        var t = i.data("deviationid"),
                            s = {
                                id: t,
                                heading: "Purchase Content",
                                iframe_url: "https://www.deviantart.com/pointsdownload/modal/display?deviationid=" + t
                            },
                            o = this.get_modal(s);
                        o.show(i)
                    },
                    commission: function(t, s) {
                        var o = "https://www.deviantart.com/grusers-modals/commissions/purchase",
                            e = "?" + i.param({
                                gruserid: t.data("commission-gruserid"),
                                request: JSON.stringify({
                                    commission_id: t.data("commission-id"),
                                    is_mc: s
                                })
                            }),
                            n = t.data("commission-gruserid") + "-" + t.data("commission-id"),
                            a = {
                                id: n,
                                heading: "Request Commission",
                                iframe_url: o + e
                            },
                            d = this.get_modal(a);
                        d.show(t)
                    },
                    upgrade: function(t, s) {
                        if (void 0 === s && (s = ""), 480 > i(window).width()) return window.location = Subby.getPremiumCheckoutUrl("modalfallback"), void 0;
                        var o = {
                                id: "upgrade",
                                heading: null,
                                iframe_url: "https://www.deviantart.com/checkout/modal/premium/?" + i.param({
                                    context: s
                                })
                            },
                            e = this.get_modal(o);
                        e.show(t)
                    },
                    rate_commission_artist: function(t) {
                        var s = "https://www.deviantart.com/grusers-modals/commissions/rate",
                            o = "?" + i.param({
                                gruserid: t.data("commission-gruserid"),
                                request: JSON.stringify({
                                    commission_id: t.data("commission-id")
                                })
                            }),
                            e = "rate-" + t.data("commission-gruserid") + "-" + t.data("commission-id"),
                            n = {
                                id: e,
                                heading: "Submit Rating",
                                iframe_url: s + o,
                                position_options: {
                                    align: "right"
                                }
                            },
                            a = this.get_modal(n);
                        a.show(t)
                    }
                },
                constructor: function() {
                    PubSub.subscribe([{
                        eventname: "PurchaseModal.close_popup",
                        subscriber: this,
                        callback: this.handlers.close_popup
                    }, {
                        eventname: "Duperbrowse.closed",
                        subscriber: this,
                        callback: this.handlers.close_popup
                    }, {
                        eventname: "Duperbrowse.next",
                        subscriber: this,
                        callback: this.handlers.close_popup
                    }, {
                        eventname: "Duperbrowse.prev",
                        subscriber: this,
                        callback: this.handlers.close_popup
                    }])
                },
                open: function(i, t, s) {
                    if (i in this.modal_types) {
                        this._attach_listener();
                        var o = this.modal_types[i];
                        o.call(this, t, s)
                    }
                },
                resize_modal: function(i) {
                    var t = this.get_modal(i);
                    t.resize(i)
                },
                get_modal: function(i) {
                    return i.id ? (this.modals[i.id] || (this.modals[i.id] = new s(i)), this.current_modal = this.modals[i.id], this.modals[i.id]) : this.current_modal
                },
                paypal_redirect: function(i) {
                    window.location = "https://www.deviantart.com/checkout/modal/paypal_redirect/" + i
                },
                _attach_listener: function() {
                    if (!this._listener_added) {
                        var t = i.throttle(this.throttle_debounce, this.handlers.resized.bind(this));
                        i(window).on("message", this.handlers.recieve_message.bind(this)).on("resize", t), this._listener_added = !0
                    }
                },
                _detach_listener: function() {
                    this._listener_added && (i(window).off("message", this.handlers.recieve_message.bind(this)).off("resize"), this._listener_added = !1)
                }
            }),
            s = Base.extend({
                $node: null,
                $iframe_container: null,
                $iframe: null,
                options: null,
                arrow_width: 9,
                arrow_height: 15,
                vertical_padding: 5,
                dimensions: {
                    width: 0,
                    height: 0,
                    iframe_height: 0
                },
                popup_position_options: {
                    align: "left",
                    valign: "center",
                    bump: {
                        top: 0,
                        left: 0
                    }
                },
                position: null,
                constructor: function(t) {
                    this.options = t, this.popup_position_options = i.extend({}, this.popup_position_options, this.options.position_options);
                    var s = Glbl("Site.is_mobile") ? i(window).width() : 450,
                        o = 0;
                    this._set_dimensions(s, o)
                },
                show: function(i) {
                    void 0 !== i && (this.$node = i), this._determine_popup_position_options();
                    var t;
                    t = Popup2.getPopup(this.options.id) ? Popup2.getPopup(this.options.id) : new Popup2(this.options.id, "body", {
                        classes: "purchase-modal",
                        content: this._make_content(),
                        invincible: !0
                    }), this.position = t.position(this.$node, this.popup_position_options), this._position_fix(), this._add_arrow(), t.show(this.position)
                },
                resize: function(i) {
                    this._set_dimensions(i.width, i.height), this.$iframe_container.css({
                        height: this.dimensions.height,
                        width: this.dimensions.width
                    }), this.$iframe.css({
                        height: this.dimensions.iframe_height,
                        width: this.dimensions.width
                    }), this.$loading.hide(), this.show(this.$node)
                },
                _set_dimensions: function(i, t) {
                    this.dimensions = {
                        width: i,
                        height: t + 12,
                        iframe_height: t
                    }
                },
                _make_content: function() {
                    var t = i("<div>").addClass("purchase-modal modal modal-rounded");
                    return this.options.heading && i("<h2>").text(this.options.heading).appendTo(t), i("<a>").addClass("x").on("click", function() {
                        return PubSub.publish("PurchaseModal.close_popup"), !1
                    }).appendTo(t), this.$loading = i("<div>").addClass("purchase-modal-loading").css("width", this.dimensions.width).appendTo(t), i("<img>").attr("src", "//st.deviantart.net/emoticons/e/eager.gif").after("Loading&hellip;").appendTo(this.$loading), this.$iframe_container = i("<div>").addClass("purchase-modal-iframe-container").css({
                        width: this.dimensions.width,
                        height: this.dimensions.height
                    }).appendTo(t), this.$iframe = i("<iframe>").addClass("purchase-modal-iframe").attr({
                        frameBorder: "0",
                        src: this.options.iframe_url,
                        scrolling: "no"
                    }).css({
                        width: this.dimensions.width,
                        height: this.dimensions.iframe_height
                    }).appendTo(this.$iframe_container), t
                },
                _determine_popup_position_options: function() {
                    var t = this.$node.offset(),
                        s = this.dimensions.width + this.arrow_width,
                        o = t.left + this.arrow_width + this.dimensions.width + this.$node.width(),
                        e = i(window).width();
                    if (("right" != this.popup_position_options.align || o > e) && (this.popup_position_options.align = s >= t.left ? o > e ? "center" : "right" : "left"), "right" == this.popup_position_options.align) {
                        var n = this.$node.outerWidth() - this.$node.width();
                        this.popup_position_options.bump.left = n + this.arrow_width
                    } else this.popup_position_options.bump.left = 0
                },
                _position_fix: function() {
                    var t = Popup2.getPopup(this.options.id);
                    t.render();
                    var s = i(window),
                        o = s.height(),
                        e = s.scrollTop(),
                        n = t.$node.height(),
                        a = e + this.vertical_padding,
                        d = e + o - (n + this.vertical_padding),
                        h = o / 2 + e - n / 2;
                    "center" == this.popup_position_options.align && (this.position.left = Math.ceil(s.width() / 2) - Math.ceil(t.$node.width() / 2), this.position.top = Math.ceil(o / 2) - Math.ceil(n / 2)), o >= n ? e > this.position.top ? this.position.top = a : this.position.top > d && (this.position.top = d) : this.position.top = 0 > h ? this.vertical_padding : h
                },
                _add_arrow: function() {
                    var t = Popup2.getPopup(this.options.id);
                    if (t.render(), t.$node.find(".purchase-modal-arrow").remove(), "center" != this.popup_position_options.align) {
                        var s, o, e = 2,
                            n = i('<div class="purchase-modal-arrow"></div>'),
                            a = 3,
                            d = t.$node.height() - this.arrow_height - a,
                            h = this.$node.offset().top + this.$node.height() / 2 - this.position.top,
                            r = Math.min(Math.max(a, h), d);
                        "left" == this.popup_position_options.align ? (s = "right", this.position.left -= this.arrow_width, o = t.$node.width() - e) : (s = "left", o = e - this.arrow_width), n.css({
                            top: r,
                            left: o
                        }), n.addClass(s), t.$node.append(n)
                    }
                }
            });
        window.PurchaseModal = new t
    })(jQuery), window.DWait && DWait.run("jms/modals/purchase.js")
});
DWait.ready(["jms/lib/site.js", "jms/lib/jquery/jquery.current.js", "jms/lib/jquery/plugins/jquery.throttle-debounce.js", "jms/lib/glbl.js", "jms/lib/sidebar.js", "jms/lib/bind.js", "jms/pages/writeranywhere/ui.js", "jms/lib/writer/factory.js", "jms/lib/pubsub.js", "jms/lib/ddt.js", "jms/lib/gmi.js"], function() {
    (function(e) {
        window.WriterAnywhere = GMIBase.extend({
            writer: null,
            owner: null,
            ccwriter_scrolloffset: null,
            ccwriter_inited: 0,
            ccwriter_expanded: 0,
            ccwriter_expanded_first: 0,
            ccwriter_wide: 0,
            ccwriter_closing: 0,
            default_options: {
                animate_time: 200,
                sync_timeout: 1e3,
                height_drop: 118,
                sidespace: 25,
                has_sidebar: !0,
                has_skinbar: !1,
                has_conversation: !1,
                passthrough_tab: !1,
                toolbar_initial_container: null,
                toolbar_file: !1,
                toolbar_edit: !1,
                toolbar_link: !0,
                toolbar_align: !0,
                toolbar_blockquote: !0,
                toolbar_headings: !1,
                drafts: !1,
                draft_handler: "DraftHandler",
                draft_title: function() {
                    return "Draft"
                },
                image_actions: ["Image", "Full", "Thumb", "Link", "Remove"],
                image_resize: !0,
                embedded_item_limit: !1,
                sidebar_premium_upsell: !0,
                sidebar_click_callback: function(e) {
                    this.writer.insert_thumb(e)
                },
                on_switch_editing_mode: function() {},
                on_save_content: function() {},
                on_load_content: function() {},
                call_on_save_if_empty: !1,
                placeholder_if_focused: !1,
                enable_underlay_placeholder: !1,
                remember_editing_mode: !1,
                valid_tags: ["br", "hr", "strong", "small", "b", "code", "sub", "sup", "tt", "acronym", "a", "abbr", "strike", "em", "i", "s", "u", "ins", "span", "div", "blockquote", "p", "bcode", "ul", "li", "ol", "da:embed", "da:deviation", "da:thumb", "da:bigthumb", "da:emoticon", "da:drawing", "img", "font", "h1", "h2", "h3", "h4", "h5", "h6"]
            },
            gmiConstructor: function() {
                this.$.removeClass("dwait")
            },
            gmiDestructor: function() {
                this.ccwriter_inited && !this.ccwriter_closing && (ddt.log("writer", "WriterAnywhere gmiDestructor"), PubSub.publish("WriterAnywhere.shutdown"), PubSub.publish("WriterSidebar.stop_stash"), WriterFactory.destroy(this.$.find("textarea")), this.owner && this.owner.detach(!0, !0))
            },
            setOwner: function(t) {
                this.owner = t, this.owner.active = !0, this.options = e.extend({}, this.default_options, this.owner.options)
            },
            load: function() {
                this.owner.before_load.apply(this);
                var t = e(".commentwriter-toolbar"),
                    i = e(".commentwriter-sidebar-inner");
                this.$writer_ui = t.add(i), this.$writer_ui.hide();
                var r = this.$.find("textarea")[0].style.height || 0;
                this.$.find("textarea").show().wrap('<div class="ccwriter-content"></div>'), this.$.siblings(".commentwriter-underlay").remove(), this.writer = WriterFactory.toggle(this.$.find("textarea"), {
                    storage: this.options.drafts ? "DefaultStorage" : "NoSaveStorage",
                    draft_handler: this.options.draft_handler,
                    draft_title: this.options.draft_title,
                    draft_metadata: this.options.draft_metadata,
                    sync_timeout: this.options.sync_timeout,
                    content_id: WriterAnywhereUI.last_draft_id,
                    imagecontrol_options: {
                        attach_point: ".ccwriter-content",
                        allowed_image_actions: this.options.image_actions,
                        prevent_resize: !this.options.image_resize
                    },
                    valid_tags: this.options.valid_tags,
                    valid_attrs: this.options.valid_attrs,
                    toolbars: [{
                        toolbar_name: "writersub",
                        toolbar_node: e(this.options.toolbar_initial_container || "<div>")[0],
                        toolbar_button_class: "subToolbarButton",
                        toolbar_menu_class: "subToolbarMenu",
                        toolbar_popup_class: "stashwriter-subtoolbar-menu stashwriter-subtoolbar-menu",
                        toolbar_order: ["bold", "italic", "underline", "separator", "link", "blockquote", "ul", "ol", "separator", "alignl", "alignc", "alignr"]
                    }],
                    allow_html_mode: !0,
                    passthrough_tab: this.options.passthrough_tab,
                    block_sidescroll: this.options.block_sidescroll,
                    on_switch_editing_mode: function() {
                        if (this.options.remember_editing_mode) try {
                            var e = "writeranywhere-editing-mode-" + this.owner.type;
                            console.log("storage", e), this.writer.inHtmlMode() ? localStorage.setItem(e, 1) : localStorage.removeItem(e)
                        } catch (t) {}
                        this.options.on_switch_editing_mode.apply(this)
                    }.bind(this),
                    on_save_content: this.options.on_save_content.bind(this),
                    on_load_content: this.options.on_load_content.bind(this),
                    call_on_save_if_empty: this.options.call_on_save_if_empty,
                    placeholder_if_focused: this.options.placeholder_if_focused,
                    autocomplete_priority: this.options.autocomplete_priority
                }, {
                    separate_ident: !0
                }), this.writer.$node[0].style.paddingBottom = "", r && (this.writer.$node[0].style.minHeight = r), this.writer.insert_thumbs = !0;
                try {
                    localStorage.getItem("writeranywhere-editing-mode-" + this.owner.type) && this.writer.switchToHtmlMode()
                } catch (s) {}
                var o = !1;
                this.options.initial_sidebar_on_expand || (o = this.options.initial_sidebar_selection ? this.options.initial_sidebar_selection : this.options.has_conversation ? "conversation" : "stash");
                var n = this,
                    a = [window.deviantART.deviant && window.deviantART.deviant.loggedIn ? "gallery" : "", window.deviantART.deviant && window.deviantART.deviant.loggedIn ? "faves" : "", "search", this.options.has_conversation ? "conversation" : "", window.deviantART.deviant && window.deviantART.deviant.loggedIn ? "stash" : "", "art", "emotes"];
                WriterAnywhereUI.sidebar ? (WriterAnywhereUI.sidebar.click_callback = this.options.sidebar_click_callback.bind(this), WriterAnywhereUI.sidebar.options.premium_upsell = this.options.sidebar_premium_upsell, WriterAnywhereUI.sidebar.reinit_modes(a, o), PubSub.unsubscribe([{
                    eventname: "WriterEmbed.loaded",
                    subscriber: WriterAnywhereUI
                }, {
                    eventname: "WriterSidebar.activate_tab",
                    subscriber: WriterAnywhereUI
                }, {
                    eventname: "Writer.sync",
                    subscriber: WriterAnywhereUI
                }])) : WriterAnywhereUI.sidebar = new WriterSidebar(e(".commentwriter-sidebar-inner"), this.options.sidebar_click_callback.bind(this), {
                    initial_selection: o,
                    upload_thumb: !0,
                    height_drop: this.options.height_drop,
                    sections: a,
                    premium_upsell: this.options.sidebar_premium_upsell
                }), PubSub.subscribe([{
                    eventname: "WriterEmbed.loading",
                    subscriber: WriterAnywhereUI,
                    callback: this.disable_sidebar_if_necessary.bind(n)
                }, {
                    eventname: "WriterSidebar.activate_tab",
                    subscriber: WriterAnywhereUI,
                    callback: this.disable_sidebar_if_necessary.bind(n)
                }, {
                    eventname: "Writer.sync",
                    subscriber: WriterAnywhereUI,
                    callback: this.disable_sidebar_if_necessary.bind(n)
                }]), this.sidebar = WriterAnywhereUI.sidebar, this.owner.after_load.apply(this)
            },
            hook: function() {
                if (this.ccwriter_closed = 0, this.ccwriter_initing = 1, "deleted" != this.gmi_lifecycle) {
                    if (!this.writer) return DWait.ready(["cssms/lib/writer.css", "cssms/lib/writer-subtoolbar.css", "jms/lib/writer/factory.js", "jms/lib/sidebar.js"], function() {
                        "deleted" == this.gmi_lifecycle || this.ccwriter_closed || (this.load(), this.hook())
                    }.bind(this)), void 0;
                    this.writer.$node.focus(function() {
                        this.$writer_ui[0].className += " open", Glbl("Site.is_stash") && (Glbl("StashStream.navigation_keyboard_disabled", !0), Glbl("StashStream.minibrowse_keyboard_disabled", !0))
                    }.bind(this)), this.writer.$node.blur(function() {
                        Glbl("Site.is_stash") && (Glbl.del("StashStream.navigation_keyboard_disabled"), Glbl.del("StashStream.minibrowse_keyboard_disabled")), this.writer.sync(), setTimeout(function() {
                            !this.sidebar_clicked && this.sidebar && e(this.$writer_ui[0]).removeClass("open")
                        }.bind(this), 100)
                    }.bind(this)), this.$.addClass("ccwriter-wrapper").find("textarea").removeClass("writeranywhere"), this.sidebar.$.css({
                        top: 0
                    }).hide(), this.sidebar.on_hide(), this.ccwriter_inited = 1, PubSub.subscribe([{
                        eventname: "WriterAnywhere.expand",
                        subscriber: this,
                        callback: this.expandWriterUI
                    }, {
                        eventname: "WriterAnywhere.collapse",
                        subscriber: this,
                        callback: this.collapseWriterUI
                    }, {
                        eventname: "WriterAnywhere.shutdown",
                        subscriber: this,
                        callback: this.closeWriterUI,
                        empty_queue_if_first_subscriber: !0
                    }, {
                        eventname: "Location.changed",
                        subscriber: this,
                        callback: this.closeWriterUI,
                        empty_queue_if_first_subscriber: !0
                    }, {
                        eventname: "Location.set",
                        subscriber: this,
                        callback: this.closeWriterUI,
                        empty_queue_if_first_subscriber: !0
                    }]), this.owner.after_hook.apply(this), this.owner.activating = !1, this.owner.active = !0, this.ccwriter_initing = 0, PubSub.publish("WriterAnywhere.hooked", this)
                }
            },
            closeWriterUI: function(t) {
                t = t || null, this.ccwriter_closing = 1;
                var i = e.Deferred();
                if (this.ccwriter_initing) PubSub.subscribe([{
                    eventname: "WriterAnywhere.hooked",
                    subscriber: this,
                    callback: function() {
                        PubSub.unsubscribe([{
                            eventname: "WriterAnywhere.hooked",
                            subscriber: this
                        }]), i.resolve()
                    }
                }]);
                else if (!this.ccwriter_inited) return i.resolve(), i;
                if (i.done(function() {
                        this.ccwriter_inited && this.ccwriter_closing && (PubSub.unsubscribe([{
                            eventname: "WriterAnywhere.expand",
                            subscriber: this
                        }, {
                            eventname: "WriterAnywhere.collapse",
                            subscriber: this
                        }, {
                            eventname: "WriterAnywhere.shutdown",
                            subscriber: this
                        }, {
                            eventname: "Location.changed",
                            subscriber: this
                        }, {
                            eventname: "Location.set",
                            subscriber: this
                        }, {
                            eventname: "WriterEmbed.loading",
                            subscriber: WriterAnywhereUI
                        }, {
                            eventname: "WriterSidebar.activate_tab",
                            subscriber: WriterAnywhereUI
                        }, {
                            eventname: "Writer.sync",
                            subscriber: WriterAnywhereUI
                        }]), this.ccwriter_inited = 0, this.ccwriter_closing = 0, this.ccwriter_closed = 1, WriterAnywhereUI.sidebar.click_callback = function() {})
                    }.bind(this)), this.writer.sync(), this.owner.empty = this.writer && !this.writer.$textarea.val().length, this.ccwriter_inited)
                    if ("string" == typeof t) {
                        var r = this.owner._get_bodycontent_selector.apply(this);
                        this.owner.before_shutdown.apply(this), WriterAnywhereUI.recordScrollPosition(r), e.each(this.writer.toolbars, function(e, t) {
                            t.destroy()
                        });
                        var s = this.owner._get_underlay_source.call(this);
                        this.options.enable_underlay_placeholder && this.writer.$textarea.attr("placeholder") && !s && (s = this.writer.$textarea.attr("placeholder")), this.writer.destroy(), this.writer = null;
                        var o = this.$.find("textarea");
                        o.unwrap().unwrap().addClass("writeranywhere").removeClass("writer").hide().after(e('<div class="writeranywhere commentwriter-underlay' + (this.owner.options.expand_immediately ? " expandplz" : "") + (0 === s.length ? " empty" : "") + '">').data("type", this.owner._type).html(s)), e(".commentwriter-toolbar-inner").empty(), e("body").hasClass("ccwriter-subframe") && (e(".commentwriter-interface").hide(), e("body").removeClass("stickhelper ccwriter-subframe ccwriter-journal"), e(window).off("resize.writeranywhere"), e(r).css("min-height", ""), e(r + " > *, #output:visible > *").css("margin-right", ""), e(r + ", #output:visible").css("right", "")), this.owner.after_shutdown.apply(this, [o]), WriterAnywhereUI.scroll(r), this.sidebar.on_hide(), i.resolve()
                    } else this.collapseWriterUI(function() {
                        var t = this.writer.$node.html();
                        this.options.enable_underlay_placeholder && this.writer.$textarea.attr("placeholder") && !t && this.owner.empty && (t = this.writer.$textarea.attr("placeholder")), this.writer.destroy(), this.writer = null;
                        var r = this.$.find("textarea");
                        r.unwrap().unwrap().addClass("writeranywhere").removeClass("writer").hide().after(e('<div class="writeranywhere commentwriter-underlay' + (this.owner.options.expand_immediately ? " expandplz" : "") + (this.owner.empty ? " empty" : "") + '">').data("type", this.owner._type).html(t)), i.resolve()
                    }.bind(this), !0);
                else i.resolve();
                return i
            },
            expandWriterUI: function() {
                if (!this.ccwriter_expanded) {
                    this.ccwriter_wide = 326 > this.$.offset().left && 326 > e(window).width() - this.$.offset().left - this.$.width(), this.owner.before_expand.apply(this), this.ccwriter_expanded_first || (this.ccwriter_expanded_first = 1, this.options.initial_sidebar_on_expand && (this.sidebar.options.initial_selection = this.options.initial_sidebar_on_expand, this.sidebar.modes[this.options.initial_sidebar_on_expand].display())), this.sidebar.on_show(), this.sidebar.active && "stash" == this.sidebar.active.type_name() && (this.sidebar.active = null, PubSub.publish("WriterSidebar.start_stash", !0));
                    var t, i, r = this.owner._get_bodycontent_selector.apply(this);
                    WriterAnywhereUI.recordScrollPosition(r), t = this.$.offset().top, e(".ohm-stickhelper:visible").length && e("body").addClass("stickhelper"), e("body").removeClass("ccwriter-collapsed").addClass("ccwriter-subframe"), e(window).off("resize.writeranywhere").on("resize.writeranywhere", e.throttle(50, function() {
                        this.owner._expanded_resize.apply(this)
                    }.bind(this))), WriterAnywhereUI.scroll(r, !0).done(function() {
                        var r = this.owner._get_bodycontent_selector.apply(this),
                            s = e(e("#output > " + r).length ? r : r + ", #output:visible");
                        i = s.scrollTop() + this.$.offset().top, Math.abs(i - t) > 100 && s.scrollTop(i - t + s.scrollTop()), e(".commentwriter-interface").show();
                        var o = e("table#commentwriter-topmenu");
                        o.removeAttr("style"), e(this.$writer_ui[0]).show().height(0).animate({
                            height: 46
                        }, this.options.animate_time, function() {
                            PubSub.publish("WriterAnywhere.expanded")
                        }).find("table").show(), this.options.has_sidebar ? DWait.ready(["cssms/pages/stash/stash.override.thumbs.css", "cssms/pages/stash/stash.header.css"], function() {
                            e(this.$writer_ui[1]).parent().show().width(0).animate({
                                width: 300
                            }, this.options.animate_time).children().show()
                        }.bind(this)) : (e(this.$writer_ui[1]).parent().hide(), e("body").addClass("ccwriter-toolbar-only")), e.each(this.writer.toolbars, function(e, t) {
                            t.destroy()
                        }), this.writer.createToolbars(null, [{
                            toolbar_name: "writertop",
                            toolbar_node: e(".commentwriter-toolbar-inner")[0],
                            toolbar_button_class: "headerButton",
                            toolbar_menu_class: "headerMenu gmbutton2",
                            toolbar_order: ["separator", "undo", "redo", this.options.toolbar_file ? "file" : "", this.options.toolbar_edit ? "edit" : "", "separator"]
                        }, {
                            toolbar_name: "writersub",
                            toolbar_node: e(".commentwriter-toolbar-inner")[0],
                            toolbar_button_class: "subToolbarButton",
                            toolbar_menu_class: "subToolbarMenu",
                            toolbar_popup_class: "stashwriter-subtoolbar-menu stashwriter-subtoolbar-menu",
                            toolbar_order: ["bold", "italic", "underline", this.options.toolbar_headings ? "headings" : "", "separator", "ul", "ol"].concat(this.options.toolbar_blockquote ? ["blockquote"] : [], this.options.toolbar_align ? ["separator", "alignl", "alignc", "alignr"] : [], this.options.toolbar_link ? ["separator", "link"] : [])
                        }]), e.each(this.writer.toolbars, function(e, t) {
                            t.show(), t.rebind()
                        }), e(this.$writer_ui[0]).find(".commentwriter-cancel, .commentwriter-submit, .commentwriter-preview").off("click.writeranywhere"), e(this.$writer_ui[0]).find(".oh-stashmain").hover(function() {
                            e(this).addClass("mmhover")
                        }, function() {
                            e(this).removeClass("mmhover")
                        }), this.owner.after_expand.apply(this), PubSub.publish("WriterSidebar.start_stash"), this.$.addClass("expanded"), e(window).trigger("resize.writeranywhere"), this.ccwriter_expanded = 1, WriterAnywhereUI.expanded = !0
                    }.bind(this))
                }
            },
            collapseWriterUI: function(t) {
                var i, r, s = this.owner._get_bodycontent_selector.apply(this),
                    o = e(s),
                    n = e("#output:visible"),
                    a = o.add(n),
                    l = a.children(),
                    d = e("#output > " + s).length ? o : a;
                this.owner.before_collapse.apply(this), PubSub.publish("WriterSidebar.stop_stash"), i = d.scrollTop() + this.$.offset().top, WriterAnywhereUI.recordScrollPosition(s, !0), this.options.has_sidebar && e(".commentwriter-sidebar").animate({
                    width: 0
                }, this.options.animate_time), l.animate({
                    "margin-right": 0
                }, this.options.animate_time), a.scrollLeft() ? a.animate({
                    right: 0,
                    scrollLeft: 0
                }, this.options.animate_time) : a.animate({
                    right: 0
                }, this.options.animate_time), this.sidebar && this.sidebar.on_hide(), e(".commentwriter-toolbar").animate({
                    height: 0
                }, this.options.animate_time, function() {
                    this.ccwriter_inited && (this.writer.$node.off("focus.writeranywhere"), e("body").removeClass("ccwriter-subframe ccwriter-journal ccwriter-toolbar-only").addClass("ccwriter-collapsed"), e(window).off("resize.writeranywhere"), o.css("min-height", ""), l.css("margin-right", ""), a.css("right", ""), WriterAnywhereUI.scroll(s), e("body").removeClass("stickhelper"), this.ccwriter_wide = 0, e.each(this.writer.toolbars, function(e, t) {
                        t.destroy()
                    }), this.writer.createToolbars(null), e.each(this.writer.toolbars, function(e, t) {
                        t.show(), t.rebind()
                    }), e("#modalspace .commentwriter-interface").detach().appendTo("body"), e(".commentwriter-interface").hide(), r = this.$.offset().top, Math.abs(r - i) > 100 && e(window).scrollTop(r - i + e(window).scrollTop()), this.$.removeClass("expanded"), this.ccwriter_expanded = 0, WriterAnywhereUI.expanded = !1, PubSub.publish("WriterAnywhere.collapsed"), t && "function" == typeof t && t.call())
                }.bind(this)), this.owner.after_collapse.apply(this), e('<input style="position:fixed; left: 0; top: 0">').appendTo("body").focus().remove()
            },
            _sidebar_should_be_disabled: function() {
                if (!this.options.embedded_item_limit) return ddt.log("writer", "no embedded_item_limit"), !1;
                if (!this.writer) return ddt.log("writer", "no writer active"), !1;
                var e = this.writer.$node.find('.writer-embed[data-embed-type!="emoticon"], .writer-embed-loader[data-embed-type!="emoticon"]').length;
                return this.options.embedded_item_limit > e ? (ddt.log("writer", "embed limit not reached"), !1) : "emotes" == this.sidebar.active.name ? (ddt.log("writer", "we're on emotes"), !1) : !0
            },
            disable_sidebar_if_necessary: function() {
                this.sidebar && (this._sidebar_should_be_disabled() ? (ddt.log("writer", "sidebar should be disabled"), 0 === this.sidebar.active.$main.find(".writer-sidebar-limit-overlay").length && this.sidebar.active.show_overlay("limit", e("<div>The maximum of <b>" + this.options.embedded_item_limit + " thumbnails</b> for this comment has already been reached.</div>"))) : (ddt.log("writer", "sidebar should NOT be disabled"), this.sidebar.$.find(".writer-sidebar-limit-overlay").remove()))
            },
            _preview_window: null,
            _preview_timeout: null,
            _preview_window_name: "daWriterPreview",
            open_preview: function(e, t) {
                var i = e || this;
                PubSub.subscribe([{
                    eventname: "Writer.sync",
                    subscriber: i,
                    callback: function() {
                        if (i.writer.storage.id()) {
                            PubSub.unsubscribe({
                                eventname: "Writer.sync",
                                subscriber: i
                            }), i._open_preview_window();
                            var e = document.location.protocol + "//sta.sh",
                                r = e + "/writer/preview/" + (i.writer.storage.id() || "empty");
                            i._inject_frame(r), t && i._preview_window.addEventListener("message", function(e) {
                                var r = JSON.parse(e.data);
                                r.target && "create_preview" == r.target && i._preview_window.document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
                                    target: "skin_preview",
                                    css: t.css
                                }), "*")
                            }), i._preview_window.focus()
                        } else window.setTimeout(function() {
                            i.open_preview(i)
                        }, 3e3)
                    }
                }]), i.writer.draft_handler.force_save()
            },
            _open_preview_window: function() {
                return (!this._preview_window || this._preview_window.closed) && (this._preview_window = popup("", this._preview_window_name, 600, null, !0)), this._preview_window ? (this._preview_window.document.body.innerHTML = '<style>body {background: whiteSmoke; font: 27px "Trebuchet MS", Arial, sans-serif;text-align: center; padding-top: 1em;color: #939499;padding: 0; margin: 0;}</style>', this._preview_window.focus(), !0) : (alert("Preview window has been blocked. Please allow for Sta.sh to open a popup window."), !1)
            },
            _inject_frame: function(e) {
                return this._preview_window && (this._preview_window.document.body.innerHTML += '<iframe frameborder="0" height="100%" id="preview_frame" src="' + e + '" width="100%">Loading...</iframe>'), !0
            }
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/writeranywhere/core.js")
});
DWait.ready(["jms/lib/site.js", "jms/lib/pubsub.js", "jms/lib/gmi.js", "jms/lib/jquery/jquery.current.js", "jms/lib/ddt.js"], function() {
    (function(s) {
        window.WriterAnywhereUI = {
            sidebar: null,
            skinbar: null,
            last_draft_id: null,
            scroll_offset: null,
            expanded: !1,
            skinbar_fudge: 8,
            scroll: function(i, e) {
                var t = i,
                    r = this,
                    l = s.Deferred();
                if (this.scroll_offset) {
                    var n = this.scroll_offset.left,
                        o = this.scroll_offset.top;
                    if (e) {
                        var a = s(s("#output > " + t).length ? t : t + ", #output:visible");
                        a.scrollLeft(n), setTimeout(function() {
                            a.scrollTop(r.scroll_offset.top), window.scrollTo(0, 0), l.resolve()
                        }, 0)
                    } else window.scrollTo(n, o), l.resolve()
                } else ddt.log("writer", "UI scroll requested without a place to scroll to"), l.resolve();
                return l
            },
            recordScrollPosition: function(i, e) {
                this.scroll_offset = {};
                var t = i,
                    r = s(s("#output > " + t).length ? t : t + ", #output:visible");
                this.scroll_offset.top = r.length && (r.scrollTop() || e) ? r.scrollTop() : s(window).scrollTop(), this.scroll_offset.left = r.length && (r.scrollLeft() || e) ? r.scrollLeft() : s(window).scrollLeft()
            },
            openSkinbar: function(i) {
                var e = this;
                this.sidebar.on_hide();
                var t = this.sidebar.$.find(".types-main").height();
                this.sidebar.$.addClass("sidebar-collapsed").find(".types-main").animate({
                    height: 0
                }, i, function() {
                    e.sidebar.top(), e.skinbar.display()
                }), s(".commentwriter-skinbar-inner .current-skin").hide(), this.skinbar.$.show().find(".types-main").css({
                    height: 0
                }).animate({
                    height: t - this.skinbar_fudge
                }, i)
            },
            closeSkinbar: function(i) {
                var e = this,
                    t = this.skinbar.$.find(".types-main").height();
                this.sidebar.$.removeClass("sidebar-collapsed").find(".types-main").animate({
                    height: t + this.skinbar_fudge
                }, 200), this.skinbar.applySkin(), this.skinbar.$.find(".types-main").animate({
                    height: 0
                }, 200, function() {
                    e.skinbar.$.hide(), s(".commentwriter-skinbar-inner .current-skin").show(), e.sidebar.modes[i].display(), e.sidebar.on_show()
                })
            }
        }
    })(jQuery), window.DWait && DWait.run("jms/pages/writeranywhere/ui.js")
});
DWait.ready(["jms/pages/writeranywhere/core.js", "jms/pages/writeranywhere/ui.js", "jms/lib/pubsub.js", "jms/lib/writer/writer.js", "jms/lib/jquery/jquery.current.js", "jms/lib/browser.js", "jms/lib/glbl.js", "jms/lib/bind.js", "jms/lib/ddt.js", "jms/lib/Base.js"], function() {
    (function(e) {
        var r = Base.extend({
            types: {},
            current: null,
            storage: {},
            get: function(e, r, t, i) {
                if (r.length && (i || this.enabled(r))) {
                    var s = this._id(r);
                    return !e && s && this.storage[s] ? (this.attach(r, t), this.storage[s]) : this.types[e] ? (this.storage[s] || (this.storage[s] = new this.types[e], this.storage[s]._type = e), this.attach(r, t), this.storage[s]) : (ddt.log("writer", "Tried to initialize WriterAnywhere with invalid type", e), void 0)
                }
            },
            getInto: function(r, t, i) {
                var s = e.Deferred();
                return t.length ? Function.prototype.bind ? ((this[i] ? this[i].detach(!0) : e.Deferred().resolve()).done(function() {
                    this[i] = WriterAnywhereFactory.get(r, t, !0), this[i] ? (t.addClass("writeranywhere"), s.resolve()) : s.reject()
                }.bind(this)), s) : s.reject() : s.reject()
            },
            register: function(e, r, t) {
                t.type = e, this.types[e] = r ? this.types[r].extend(t) : t
            },
            enabled: function(r) {
                return e(r).data("always-writer") || !(Glbl("Site.is_mobile") || !(Browser.isChrome || Browser.isFirefox || Browser.isSafari || Browser.isOpera || Browser.isIpad || Browser.isIE && !Browser.isIE8) || e(r).data("disable-writer") || e(r).find("textarea").data("disable-writer") || window.disable_writer_anywhere || jQuery.fn.jquery != e().jquery || !jQuery.expr[":"].gmi || !e.expr[":"].gmi)
            },
            remove: function(r) {
                var t;
                t = this.current && this.current._id() == this._id(r) ? this.current.detach(!0) : e.Deferred().resolve(), t.done(function() {
                    r[0].getAttribute("ident") && Writer.getActive().id == r[0].getAttribute("ident") + "-writer" && Writer.deactivateAll();
                    var e = this._id(r);
                    delete this.storage[e]
                }.bind(this))
            },
            attach: function(r, t) {
                t = t || !1;
                var i, s = this._id(r);
                if (this.current && this.current.ccwriter && !this.current.ccwriter.ccwriter_closed) {
                    if (this.current._id() == s) return;
                    i = this.current.detach(!0)
                } else i = e.Deferred().resolve();
                i.done(function() {
                    this.storage[s].attach(r), t && this.storage[s].activate()
                }.bind(this))
            },
            _id: function(e) {
                if (e[0].getAttribute("ccwident")) return e[0].getAttribute("ccwident");
                var r = "writeranywhere" + Math.round(1e10 * Math.random());
                return e[0].setAttribute("ccwident", r), r
            }
        });
        window.WriterAnywhereFactory = new r, PubSub.subscribe([{
            eventname: "gWebPage.update",
            subscriber: WriterAnywhereUI,
            callback: function(e, r) {
                if ((!r.called_from || "Deck.categoryHelpPreview" != r.called_from && "Dapi.mergeRequestData" != r.called_from) && (WriterAnywhereFactory.current && WriterAnywhereFactory.current.detach(!0), "undefined" != typeof da_minish_lub && da_minish_lub && da_minish_lub.unpause(), this.sidebar)) {
                    var t = this.sidebar.options.initial_selection || "art";
                    this.sidebar.modes[t] && this.sidebar.modes[t].display()
                }
            }
        }]);
        var t = function(r) {
            var t, i = e(r.target),
                s = i;
            if (!i.closest(".commentwriter-interface").length)
                if ("click" == r.type ? t = "div.writer, textarea.writeranywhere, a.showMedia, div.commentwriter-underlay" : "focusin" == r.type && (t = "div.writer, textarea.writeranywhere"), i.is(t) || i.closest(t).length) {
                    var n = null;
                    if (i.is("textarea.writeranywhere")) n = i;
                    else if (i.is("div.writer")) "focusin" != r.type && i.is(":focus") || (n = i.siblings("textarea[ccwident]"));
                    else if (i.is("div.commentwriter-underlay")) n = i.siblings("textarea[ccwident]");
                    else if (i.is("a.showMedia")) {
                        do i = i.parent(); while (!i.find("textarea[ccwident]").length);
                        n = i.find("textarea[ccwident]")
                    } else ddt.log("writer", "WriterAnywhere trigger ran into an impossible click");
                    if (n) {
                        if (!WriterAnywhereFactory.enabled(n.get(0))) return /comment$/.test(n.data("type")) ? n.closest(":gmi(TalkPostWrapper)").gmiWake() : PubSub.publish("WriterAnywhere.activation_aborted", n), void 0;
                        var a = e.Deferred(),
                            c = n.attr("ccwident");
                        c && WriterAnywhereFactory.current && WriterAnywhereFactory.current._id() == c ? a.resolve() : (PubSub.subscribe([{
                            eventname: "WriterAnywhere.hooked",
                            subscriber: this,
                            callback: function() {
                                PubSub.unsubscribe([{
                                    eventname: "WriterAnywhere.hooked",
                                    subscriber: this
                                }]), a.resolve()
                            }
                        }]), WriterAnywhereFactory.get(n.data("type"), n, !0)), a.done(function() {
                            var e = WriterAnywhereFactory.get(n.data("type"), n, !0);
                            if (e) {
                                var t = e.options.ui;
                                "click" == t.expand_on && s.is(t.selector) && (r.preventDefault(), e.ccwriter.writer.remember_selection(), WriterAnywhereUI.expanded && s.is("a.hideMedia") ? PubSub.publish("WriterAnywhere.collapse") : PubSub.publish("WriterAnywhere.expand"), e.ccwriter.writer.restore_selection())
                            }
                        })
                    }
                } else if (WriterAnywhereFactory.current) {
                var o, d, u;
                o = WriterAnywhereFactory.current, u = !1, o.ccwriter && o.ccwriter.writer && (u = o.ccwriter.writer.getContent()), d = o.options.ui, WriterAnywhereUI.expanded ? "click_out" == d.collapse_on ? PubSub.publish("WriterAnywhere.collapse") : "click_out" != d.shutdown_on || u || PubSub.publish("WriterAnywhere.collapse") : "click_out" != d.shutdown_on || u || PubSub.publish("WriterAnywhere.shutdown")
            }
        };
        e(document).on("click.underwriter", t).on("focus.underwriter", "div.writer, textarea.writeranywhere", t), PubSub.publish("QUnit.WriterAnywhereFactory.loaded")
    })(jQuery), window.DWait && DWait.run("jms/pages/writeranywhere/factory.js")
});
DWait.ready(["jms/pages/writeranywhere/core.js", "jms/lib/jquery/jquery.current.js", "jms/lib/glbl.js", "jms/lib/pubsub.js", "jms/lib/ddt.js", "jms/lib/bind.js", "jms/lib/Base.js", "jms/pages/writeranywhere/factory.js"], function() {
    (function(e) {
        WriterAnywhereFactory.register("base", null, Base.extend({
            ccwriter: null,
            $node: null,
            active: !1,
            activating: !1,
            options: {},
            _id: function() {
                return this.$node[0].getAttribute("ccwident") || ""
            },
            attach: function(e) {
                this.active || this.activating || (this.$node = e, this._attach_media_button_if_desired(this.$node), WriterAnywhereFactory.current = this)
            },
            activate: function() {
                if (this.active || this.activating) ddt.log("writer", "WriterAnywhere already active in this instance");
                else {
                    this.activating = !0;
                    var t;
                    t = WriterAnywhereFactory.current && WriterAnywhereFactory.current._id() != this._id() ? WriterAnywhereFactory.current.detach(!0) : e.Deferred().resolve(), t.done(function() {
                        this.$node.parents(":gmi(WriterAnywhere)").length || this.$node.wrap(e("<div>", {
                            "data-gmiclass": "WriterAnywhere"
                        })).gmiWake(), this.ccwriter = this.$node.parent().gmi1(), this.ccwriter.setOwner(this), this.ccwriter.hook()
                    }.bind(this))
                }
            },
            detach: function(t) {
                if (t = t || !1, this.ccwriter) {
                    var i = e.Deferred(),
                        r = e.Deferred();
                    return this.activating ? PubSub.subscribe([{
                        eventname: "WriterAnywhere.hooked",
                        subscriber: this,
                        callback: function() {
                            PubSub.unsubscribe([{
                                eventname: "WriterAnywhere.hooked",
                                subscriber: this
                            }]), r.resolve()
                        }
                    }]) : this.active ? r.resolve() : r.reject(), r.done(function() {
                        this.ccwriter && this.ccwriter.writer ? this.ccwriter.closeWriterUI(t ? "Shut Down Everything" : null).done(function() {
                            i.resolve()
                        }) : i.resolve()
                    }.bind(this)).fail(function() {
                        i.reject()
                    }), i.done(function() {
                        PubSub.publish("WriterSidebar.stop_stash"), this._postcollapse_unpause_lub(), this.ccwriter = null, this.active = !1, WriterAnywhereFactory.current = null
                    }.bind(this)), i
                }
                return e.Deferred().resolve()
            },
            _attach_media_button_if_desired: function(e) {
                var t = '<a class="showMedia" href="#showMedia">Add Media</a>',
                    i = '<div class="drawPlz"><div class="topbar hh">' + t + "</div></div>",
                    r = e,
                    s = r.parent().parent(),
                    n = this.options.has_media_button || !1;
                (Glbl("Site.is_stash") || Glbl("Site.is_mobile")) && (n = !1), r.hasClass("butan") || (r[0].className += " butan", n && (s.hasClass("cctextarea") || s.children("td.f").length ? s.children("td.f").length ? (s = s.closest("table.f"), s.find(".drawPlz").length ? s.find(".topbar").prepend(t) : s.find("td.f").append(i)) : s.find(".drawPlz").length ? s.find(".topbar").prepend(t) : s.append(i) : r.parent().append(i)))
            },
            before_load: function() {},
            after_load: function() {},
            after_hook: function() {
                this.owner.after_collapse.apply(this)
            },
            before_expand: function() {
                "undefined" != typeof da_minish_lub && da_minish_lub && da_minish_lub.pause(), e(".commentwriter-skinbar-inner").hide();
                var t = this.owner._get_bodycontent_selector.apply(this);
                this.$.offset().left + this.$.width() > e(t + ", #output:visible").width() - 326 && this.ccwriter_wide && e(t + " > *, #output:visible > *").css("margin-right", this.options.sidespace - this.$.offset().left), e(t + " + #depths").css("display", "")
            },
            after_expand: function() {
                var t = this.owner._get_bodycontent_selector.apply(this);
                if (this.$.offset().left + this.$.width() > e(t + ", #output:visible").width() && (e(t + ", #output:visible").animate({
                        scrollLeft: this.$.offset().left + this.$.width() - e(t + ", #output:visible").width()
                    }, this.options.animate_time), this.ccwriter_wide && e(t + ", #output:visible").scrollTop(this.$.offset().top - 46 + e(t + ", #output:visible").scrollTop())), e(this.$writer_ui[0]).find(".commentwriter-preview, .commentwriter-submit").show(), e(this.$writer_ui[0]).find(".commentwriter-submit em").text("Submit"), e(this.$writer_ui[0]).find(".commentwriter-cancel").on("click.writeranywhere", function() {
                        return this.writer.remember_selection(), PubSub.publish("WriterAnywhere.collapse"), this.writer.restore_selection(), !1
                    }.bind(this)), this.$.siblings(".drawPlz").find(".showMedia").addClass("hideMedia").text("Hide Media"), Glbl("Site.is_mobile")) {
                    var i = e(e("#output > " + t).length ? t : t + ", #output:visible");
                    i.css("right", 0), e(".commentwriter-sidebar").hide()
                }
            },
            before_collapse: function() {},
            after_collapse: function() {
                this.$.siblings(".drawPlz").find(".showMedia").removeClass("hideMedia").text("Add Media"), this.owner._postcollapse_unpause_lub.apply(this)
            },
            before_shutdown: function() {},
            after_shutdown: function() {
                var t = this.owner._get_bodycontent_selector.apply(this);
                e("body").removeClass("ccwriter-subframe stickhelper"), e(window).off("resize.writeranywhere"), e(t).css("min-height", ""), e(".commentwriter-interface").hide()
            },
            _expanded_resize: function() {
                var t = {
                        width: e(window).width(),
                        height: e(window).height()
                    },
                    i = t.height - 46 - 32 - (e("body").hasClass("stickhelper") ? 25 : 0),
                    r = this.owner._get_bodycontent_selector.apply(this);
                e(r).css("min-height", i), e(".commentwriter-sidebar").css("height", t.height - 46 - 20), e(".commentwriter-toolbar-outer").css("width", t.width - 218 - e(".commentwriter-actions").outerWidth(!0))
            },
            _postcollapse_unpause_lub: function() {
                "undefined" != typeof da_minish_lub && da_minish_lub && da_minish_lub.unpause()
            },
            _get_bodycontent_selector: function() {
                return ".dev-page-container:visible"
            },
            _get_underlay_source: function() {
                return this.writer.$node.html()
            }
        }))
    })(jQuery), window.DWait && DWait.run("jms/pages/writeranywhere/types/base.js")
});
DWait.ready(["jms/pages/ccommentthread.js", "jms/pages/ccomment.js", "jms/pages/writeranywhere/types/base.js", "jms/pages/writeranywhere/core.js", "jms/lib/jquery/jquery.current.js", "jms/lib/jquery/plugins/jquery.throttle-debounce.js", "jms/lib/glbl.js", "jms/lib/spinpreset.js", "jms/lib/ddt.js", "jms/pages/writeranywhere/ui.js", "jms/lib/writer/embed.js", "jms/lib/pubsub.js", "jms/lib/browser.js", "jms/lib/bind.js", "jms/pages/writeranywhere/factory.js"], function() {
    (function(t) {
        WriterAnywhereFactory.register("comment", "base", {
            options: {
                ui: {
                    selector: "div.drawPlz a.showMedia",
                    expand_on: "click",
                    collapse_on: "click"
                },
                has_conversation: !0,
                has_media_button: !0,
                toolbar_align: !1,
                initial_sidebar_on_expand: "emotes",
                passthrough_tab: !0,
                block_sidescroll: !0,
                sidespace: 100,
                image_actions: ["Draw", "Thumb", "Link", "Remove"],
                image_resize: !1,
                animate_time: 150,
                sync_timeout: 200,
                sidebar_premium_upsell: !1,
                embedded_item_limit: 5,
                on_switch_editing_mode: function() {
                    this.ccwriter_toplevel && (this.cctalkpost.owner.writer_focused = this.writer.$node.is(":visible"), this.cctalkpost.owner.refreshTextareaState())
                },
                valid_tags: ["br", "hr", "strong", "b", "code", "sub", "sup", "small", "tt", "acronym", "a", "abbr", "strike", "em", "i", "s", "u", "ins", "span", "blockquote", "p", "bcode", "ul", "ol", "li", "div", "font", "da:thumb", "da:bigthumb", "da:emoticon", "da:drawing"],
                valid_attrs: ["height", "href", "name", "title", "width", "target"],
                enable_underlay_placeholder: !0
            },
            before_load: function() {
                this.$.closest(".feed-action").length && (this.owner.options.ui.shutdown_on = "click_out"), this.base.apply(this), this.ccwriter = this.$.closest(":gmi(CCommentThread), :gmi(TalkPostWrapper), .ccomment-post").length, this.ccwriter_toplevel = this.$.closest(":gmi(TalkPostWrapper)").length;
                var e = this.options.autocomplete_priority = [];
                if (this.ccwriter_toplevel) this.cctalkpost = this.owner.$node.closest(":gmi(TalkPostWrapper)").gmi1().talkpost;
                else {
                    this.cctalkpost = this.owner.$node.closest(".talk-post").data("TalkPost");
                    var i = this.$.closest("div.nest").prev(".ccomment-activereply").find(".cc-name .username-with-symbol .username").text();
                    i != window.deviantART.deviant.username && e.push(i)
                }
                if (1 == this.cctalkpost.comment.typeid || 61 == this.cctalkpost.comment.typeid) {
                    var s = t(".dev-view-about .dev-title-container h1 .username-with-symbol .username").text();
                    s != window.deviantART.deviant.username && e.push(s)
                }
                this.owner.adjust_limits.apply(this)
            },
            adjust_limits: function() {
                18 == this.cctalkpost.comment.typeid && (this.options.embedded_item_limit = 200), this.cctalkpost.comment.allowdrawings || (this.options.valid_tags = t.grep(this.options.valid_tags, function(t) {
                    return "da:drawing" !== t
                }))
            },
            after_hook: function() {
                var e = this.$.closest(":gmi(TalkPostWrapper)").gmi1();
                e && (e.refreshTextareaState(), e.gmi_node.className += " ccexpanded", e.talkpost.commentwriter = this.owner), this.writer.$node.on("keydown.ccwriter", function(e) {
                    if (!this.writer.autocomplete || !this.writer.autocomplete.isShown()) {
                        if (!(9 != e.which || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)) {
                            e.preventDefault();
                            var i = this.writer.$textarea.attr("tabindex");
                            return t("[tabindex=" + ++i + "]", this.$.closest(":gmi(TalkPostWrapper), .ccomment-post, .talk-post")).focus(), !1
                        }
                        return 13 == e.which && (e.ctrlKey || e.metaKey) ? (e.preventDefault(), this.writer.syncer.sync(), this.$.closest(":gmi(TalkPostWrapper), .ccomment-post, .talk-post").find("span.post").click(), !1) : void 0
                    }
                }.bind(this)), Browser.isIE ? (this.$.css("min-height", 148), this.writer.$node.css("min-height", 146), !this.owner.active && this.owner.activating && this.owner._resize_writer.apply(this), setTimeout(function() {
                    this.owner._scroll_down_talkpost.apply(this), this.writer.$node.focus(), PubSub.publish("CommentWriter.opened")
                }.bind(this), 0), this.$.parent().parent().find(".drawPlz").show()) : (this.$.find("textarea").removeClass("ccwriter-raisin"), this.$.css("height", 48).animate({
                    height: 148
                }, {
                    duration: 150,
                    done: function() {
                        this.ccwriter_inited && (this.$.css({
                            height: "",
                            "min-height": 148
                        }), this.writer.$node.css("min-height", 146), this.owner._resize_writer.apply(this), setTimeout(function() {
                            this.owner._scroll_down_talkpost.apply(this), PubSub.publish("CommentWriter.opened")
                        }.bind(this), 0))
                    }.bind(this)
                }), this.$.parent().parent().find(".drawPlz").hide().fadeIn(300)), t(window).on("resize.ccwriter", t.throttle(50, this.owner._resize_writer.bind(this))), this.writer.insert_thumbs = !0, this.writer.insert_thumb_format = "200H", this.drawplz_button = this.$.closest(".ccomment-form, .ccomment-post").find(".showDrawPlz").off("click.writeranywhere").on("click.writeranywhere", this.owner._draw_click.bind(this)), this.ccwriter_toplevel ? this.cctalkpost.owner.$.find(".inputs").show() : t(this.cctalkpost.node).find(".inputs").show(), this.writer.$node.focus()
            },
            before_expand: function() {
                if (this.base.apply(this), t(".feed-container").length) {
                    var e = this.owner._get_bodycontent_selector.apply(this);
                    t(e + " > *, #output:visible > *").css("margin-right", "auto")
                }
            },
            after_expand: function() {
                this.owner._resize_writer.apply(this), this.base.apply(this), this.cctalkpost.showCancel(), t(this.$writer_ui[0]).find(".commentwriter-cancel").show().on("click.writeranywhere", function() {
                    return this.cctalkpost.confirmCancel(), !1
                }.bind(this)), t(this.$writer_ui[0]).find(".commentwriter-submit").show().on("click.writeranywhere", function() {
                    return PubSub.publish("WriterAnywhere.collapse"), this.cctalkpost.confirmPost(), !1
                }.bind(this)).find("em").text("Submit Comment"), t(this.$writer_ui[0]).find(".commentwriter-preview").show().on("click.writeranywhere", function() {
                    return this.cctalkpost.confirmPreview(), !1
                }.bind(this)), t(this.cctalkpost.node).find(".drawPlz .showMedia").addClass("hideMedia").text("Hide Media");
                var e = t(":gmi(ResViewContainer), :gmi(DeviationPageView)");
                if (e.length) {
                    var i = this.owner._get_bodycontent_selector.apply(this),
                        s = "full" == e.gmi1()._current_mode;
                    if (s) {
                        var r = t(i).scrollTop(),
                            o = this.$.offset().top;
                        e.gmi1().change_to_mode("normal");
                        var n = this.$.offset().top;
                        !r && WriterAnywhereUI.scroll_offset.top ? WriterAnywhereUI.scroll_offset.top += n - o : t(i).scrollTop(r + (n - o))
                    }
                }
            },
            before_collapse: function() {
                if (Browser.isSafari && !Browser.isPad) {
                    var e = t(".dev-page-container:visible");
                    this.collapsing_scroll_position = e.scrollTop(), e.css("position", "static"), e.parent().scrollTop(this.collapsing_scroll_position)
                }
            },
            after_collapse: function() {
                this.base.apply(this), PubSub.subscribe([{
                    eventname: "WriterAnywhere.collapsed",
                    subscriber: this,
                    callback: function() {
                        PubSub.unsubscribe([{
                            eventname: "WriterAnywhere.collapsed",
                            subscriber: this
                        }]), this.owner._resize_writer.apply(this), Browser.isSafari && !Browser.isPad && (t(".dev-page-container:visible").css("position", ""), t("body").scrollTop(this.collapsing_scroll_position), this.collapsing_scroll_position = null, t(window).trigger("resize"))
                    }
                }]), t(this.cctalkpost.node).find(".drawPlz .showMedia").removeClass("hideMedia").text("Add Media")
            },
            before_shutdown: function() {
                t(window).off("resize.ccwriter")
            },
            after_shutdown: function() {
                if (t.contains(document.documentElement, this.cctalkpost.node) && ("normal" != this.cctalkpost.current_mode && this.cctalkpost.goMode("normal", !1), t(this.cctalkpost.node).find(".drawPlz .showMedia").removeClass("hideMedia").text("Add Media"), !this.owner.$node.find("textarea").val()))
                    if (this.ccwriter_toplevel || this.owner.$node.closest(".feed-action").length) this.cctalkpost.owner.gmi_args && "TalkPostWrapper" == this.cctalkpost.owner.gmi_args.gmiclass && this.cctalkpost.owner.$ && (this.cctalkpost.owner.textarea_focused = 0, this.cctalkpost.owner.writer_focused = 0, this.cctalkpost.owner.refreshTextareaState(), this.cctalkpost.owner.$.is(":visible") && this.cctalkpost.owner.$.find(".inputs").hide()), this.cctalkpost.confirmExit();
                    else if (this.cctalkpost.node) {
                    var e = t(this.cctalkpost.node);
                    e.is(":visible") && e.find(".inputs, .drawPlz").hide()
                }
            },
            _scroll_down_talkpost: function() {
                var e, i, s = this.ccwriter_expanded ? ".dev-page-container:visible" : document;
                i = this.ccwriter_toplevel ? this.$.closest(":gmi(TalkPostWrapper)") : this.$.closest(".talk-post-reply"), e = i.offset().top + (this.ccwriter_expanded ? i.position().top : 0) + i.outerHeight() - t(window).height(), e > t(s).scrollTop() && t(s).scrollTop(e)
            },
            _resize_writer: function() {
                if (!this.writer) return ddt.log("writer", "_resize_writer not cleaned up", this), void 0;
                var t = 14;
                this.ccwriter_toplevel || (t = 82), this.writer.$node.width(this.$.closest(".ccomment-form, .ccomment-post, .talk-post").width() - t)
            },
            _draw_click: function(e) {
                e.preventDefault();
                var i = 1350,
                    s = 1020,
                    r = this.writer,
                    o = this.drawplz_button;
                if (r && !o.is(".loading")) {
                    o.addClass("loading");
                    var n = new Spinner(t.extend({}, SpinnerPresets.green, {
                        left: "-22px"
                    }));
                    n.spin(o[0]);
                    var a, c, l, h = this,
                        d = Glbl("Site.is_deviantart") ? document.location.protocol + "//muro.deviantart.com" : document.location.protocol + "//sta.sh/muro";
                    r.frame(d + "/iframe?width=" + i + "&height=" + s + "&background=clear", function(e, d) {
                        var p = "remove";
                        switch (e.action) {
                            case "error":
                                return o.removeClass("loading"), n.stop(), d.hidden && d.act("show"), void 0;
                            case "cancel":
                                return "remove";
                            case "got_id":
                                return c = e.id && parseInt(e.id, 36), void 0;
                            case "done":
                                l = e.img || l, h.cctalkpost.drawplz_saving++, p = "hide";
                                break;
                            case "save":
                                c = e.privateid || e.id || c, l = e.img || l, setTimeout(function() {
                                    h.cctalkpost.drawplz_saving--
                                }, 2e3);
                                break;
                            case "ready":
                                return setTimeout(function() {
                                    o.removeClass("loading"), n.stop()
                                }, 1e3), "show";
                            default:
                                return
                        }
                        if (c && l && !a) {
                            var w = t("<img>", {
                                src: l,
                                "class": "writer-embed writer-deviation-image writer-deviation-redraw",
                                "data-embed-id": c,
                                "data-embed-type": "drawing",
                                "data-embed-format": "image",
                                "data-embed-naturalwidth": i,
                                "data-embed-naturalheight": s
                            });
                            r.insert([w, "<br><br>"]), WriterEmbed.runLoaders(r.$node), a = !0
                        }
                        return p
                    })
                }
            }
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/writeranywhere/types/comment.js")
});
DWait.ready(["jms/pages/writeranywhere/types/comment.js", "jms/pages/writeranywhere/core.js", "jms/lib/jquery/jquery.current.js", "jms/pages/writeranywhere/factory.js"], function() {
    (function(e) {
        WriterAnywhereFactory.register("stashcomment", "comment", {
            options: {
                ui: {
                    selector: "div.commentwriter-underlay, div.writer",
                    expand_on: "click",
                    collapse_on: ""
                },
                has_conversation: !0,
                has_media_button: !1,
                toolbar_align: !0,
                initial_sidebar_on_expand: "conversation",
                passthrough_tab: !0,
                block_sidescroll: !0,
                sidespace: 100,
                image_actions: ["Draw", "Image", "Full", "Thumb", "Link", "Remove"],
                image_resize: !0,
                animate_time: 150,
                sync_timeout: 200,
                embedded_item_limit: !1,
                sidebar_premium_upsell: !1,
                valid_tags: ["br", "hr", "strong", "b", "code", "sub", "sup", "small", "tt", "acronym", "a", "abbr", "strike", "em", "i", "s", "u", "ins", "span", "blockquote", "p", "bcode", "ul", "ol", "li", "div", "da:deviation", "da:thumb", "da:bigthumb", "da:emoticon", "da:drawing"],
                expand_immediately: !0
            },
            after_load: function() {
                this.base.apply(this), this.writer.insert_thumbs = !1, this.writer.insert_thumb_format = null
            },
            after_expand: function() {
                this.base.apply(this), e(this.$writer_ui[0]).find(".commentwriter-cancel em").text("Close")
            },
            adjust_limits: function() {},
            after_collapse: function() {
                PubSub.subscribe([{
                    eventname: "WriterAnywhere.collapsed",
                    subscriber: this,
                    callback: function() {
                        PubSub.unsubscribe([{
                            eventname: "WriterAnywhere.collapsed",
                            subscriber: this
                        }]), PubSub.publish("StashStream.activate_current_view")
                    }
                }])
            }
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/writeranywhere/types/stashcomment.js")
});
DWait.ready(["jms/pages/writeranywhere/types/comment.js", "jms/pages/writeranywhere/core.js", "jms/lib/jquery/jquery.current.js", "jms/pages/writeranywhere/factory.js"], function() {
    (function() {
        WriterAnywhereFactory.register("mccomment", "comment", {
            before_load: function() {
                this.base.apply(this), this.options.has_conversation = !1, this.options.sidespace = 40, this.ccwriter = 0, this.ccwriter_toplevel = 0
            }
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/writeranywhere/types/mccomment.js")
});
DWait.ready(["jms/pages/writeranywhere/types/base.js", "jms/pages/writeranywhere/core.js", "jms/lib/jquery/jquery.current.js", "jms/pages/writeranywhere/factory.js"], function() {
    (function(e) {
        WriterAnywhereFactory.register("peek", "base", {
            options: {
                ui: {
                    selector: "div.drawPlz a.showMedia",
                    expand_on: "click",
                    collapse_on: "click_out"
                },
                has_media_button: !0,
                image_actions: ["Thumb", "Full", "Remove"],
                image_resize: !1,
                sync_timeout: 200,
                initial_sidebar_on_expand: "emotes",
                valid_tags: ["br", "hr", "strong", "b", "code", "sub", "sup", "small", "tt", "acronym", "a", "abbr", "strike", "em", "i", "s", "u", "ins", "span", "blockquote", "p", "bcode", "ul", "ol", "li", "div", "da:deviation", "da:thumb", "da:bigthumb", "da:emoticon", "da:drawing", "da:embed"]
            },
            after_load: function() {
                this.writer.insert_thumbs = !1, this.writer.insert_thumb_format = "200H";
                var t = e(".ccwriter-content .writer");
                t.css({
                    minHeight: ""
                })
            },
            after_hook: function() {
                var e = this.writer.$node.siblings("textarea");
                this.$.parent().parent().find(".drawPlz").hide().fadeIn(300, function() {
                    PubSub.publish("PeekWriter.init", e.data("id"))
                }), window.requestAnimationFrame(function() {
                    this.writer.$node.focus(), PubSub.publish("PeekWriter.activate", e.data("id"))
                }.bind(this))
            },
            before_expand: function() {
                this.base.apply(this);
                var t = this.owner._get_bodycontent_selector.apply(this);
                e(t + " > *, #output:visible > *").css("margin-right", "auto")
            },
            after_expand: function() {
                this.base.apply(this), e(this.$writer_ui[0]).find(".commentwriter-preview, .commentwriter-submit").hide(), e(".commentwriter-toolbar,.commentwriter-sidebar").css({
                    zIndex: 300
                }), e(".commentwriter-toolbar,.commentwriter-sidebar").click(function(e) {
                    e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation()
                })
            },
            after_shutdown: function(e) {
                this.base.apply(this), e.siblings(".drawPlz").remove(), PubSub.publish("PeekWriter.shutdown", e.data("id"))
            }
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/writeranywhere/types/peek.js")
});
DWait.ready(["jms/pages/writeranywhere/types/base.js", "jms/pages/writeranywhere/core.js", "jms/lib/jquery/jquery.current.js", "jms/pages/writeranywhere/factory.js"], function() {
    (function(t) {
        WriterAnywhereFactory.register("postbox", "base", {
            options: {
                ui: {
                    selector: "div.drawPlz a.showMedia",
                    expand_on: "click",
                    collapse_on: "click"
                },
                has_media_button: !0,
                image_actions: ["Thumb", "Full", "Remove"],
                image_resize: !1,
                sync_timeout: 20,
                initial_sidebar_on_expand: "emotes",
                toolbar_initial_container: ".postbox-toolbar",
                call_on_save_if_empty: !0,
                placeholder_if_focused: !0,
                sidebar_click_callback: function(t) {
                    var e = this.$.closest("form.postbox-form"),
                        i = e.find(".postbox-current-type").attr("rel");
                    switch (i) {
                        case "journal":
                            this.writer.insert_thumb(t);
                            break;
                        case "poll":
                            var o = t.attr("collect_rid").split(":"),
                                s = null;
                            "emote" == o[0] ? s = t.attr("title") : "emote" == o[2] && (s = ":thumb" + o[1] + ":");
                            var r = e.find(".postbox-footer-poll input:focus");
                            r.length && WriterUtils.insertIntoTextareaAtCursor(r[0], s)
                    }
                },
                enable_underlay_placeholder: !0,
                on_save_content: function() {
                    this.writer && (PubSub.publish("Postbox.sync", this.writer.getContent().replace(/&amp;([^\s;]+?);/gi, "&$1;")), this.owner.empty = !this.writer.getContent().length, this.writer.options.sync_timeout = this.owner.empty ? 20 : 200, this.writer.$node.toggleClass("empty", this.owner.empty))
                },
                valid_tags: ["br", "hr", "strong", "b", "code", "sub", "sup", "small", "tt", "acronym", "a", "abbr", "strike", "em", "i", "s", "u", "ins", "span", "blockquote", "p", "bcode", "ul", "ol", "li", "div", "da:deviation", "da:thumb", "da:bigthumb", "da:emoticon", "da:drawing", "da:embed"]
            },
            before_load: function() {
                t("body").append('<div class="postbox-toolbar"></div>')
            },
            after_load: function() {
                this.writer.insert_thumbs = !1, this.writer.insert_thumb_format = "200H", t(".postbox-toolbar").detach().appendTo(this.$.parent())
            },
            after_hook: function() {
                var t = this.$.closest(".postbox-entry");
                t.removeClass("postbox-entry-collapsed").addClass("postbox-entry-expanded"), t.siblings(".postbox-usericon").show(), this.$.css("height", 48).animate({
                    height: 148
                }, {
                    duration: 150,
                    done: function() {
                        this.$.css({
                            height: "",
                            "min-height": 148
                        }), this.writer.$node.css("min-height", 146)
                    }.bind(this)
                }), this.$.parent().parent().find(".drawPlz").hide().fadeIn(300), PubSub.publish("Postbox.init", this)
            },
            before_expand: function() {
                this.base.apply(this);
                var e = this.owner._get_bodycontent_selector.apply(this);
                t(e + " > *, #output:visible > *").css("margin-right", "auto")
            },
            after_expand: function() {
                this.base.apply(this), t(this.$writer_ui[0]).find(".commentwriter-preview, .commentwriter-submit").hide()
            },
            before_shutdown: function() {
                var t = this.$.closest(".postbox-entry");
                t.removeClass("postbox-entry-expanded"), this.writer.getContent().length ? t.siblings(".postbox-usericon").hide() : t.addClass("postbox-entry-collapsed"), this.$.siblings(".drawPlz").find(".showMedia").removeClass("hideMedia").text("Add Media").end().hide()
            },
            after_shutdown: function() {
                t(".postbox-toolbar", this.owner.$node.parent()).remove(), PubSub.publish("Postbox.shutdown")
            },
            _get_underlay_source: function() {
                return null
            }
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/writeranywhere/types/postbox.js")
});
DWait.ready(["jms/pages/writeranywhere/types/base.js", "jms/pages/writeranywhere/core.js", "jms/lib/jquery/jquery.current.js", "jms/pages/writeranywhere/factory.js"], function() {
    (function(e) {
        WriterAnywhereFactory.register("blockcomment", "base", {
            key: null,
            options: {
                ui: {
                    selector: "div.drawPlz a.showMedia"
                },
                has_media_button: !0,
                sync_timeout: 20,
                image_actions: ["Draw", "Thumb", "Link", "Remove"],
                image_resize: !1,
                initial_sidebar_on_expand: "emotes",
                call_on_save_if_empty: !0,
                on_save_content: function() {
                    this.writer && this.key && PubSub.publish("BlockCommentBox.sync", {
                        writerKey: this.key,
                        commentBody: this.writer.getContent().replace(/&amp;([^\s;]+?);/gi, "&$1;")
                    })
                },
                valid_tags: ["br", "hr", "strong", "b", "code", "sub", "sup", "small", "tt", "acronym", "a", "abbr", "strike", "em", "i", "s", "u", "ins", "span", "blockquote", "p", "bcode", "ul", "ol", "li", "div", "font", "da:thumb", "da:bigthumb", "da:emoticon", "da:drawing"],
                valid_attrs: ["height", "href", "name", "title", "width", "target"]
            },
            after_hook: function() {
                this.key = this.writer.id, PubSub.publish("BlockCommentBox.init", {
                    writerKey: this.key,
                    writerNode: this.writer.$node[0],
                    textareaNode: this.writer.$textarea[0],
                    addMediaNode: this.$.siblings(".drawPlz").find(".showMedia")[0]
                })
            },
            after_expand: function() {
                this.base.apply(this), e(this.$writer_ui[0]).find(".commentwriter-preview, .commentwriter-submit").hide(), PubSub.publish("BlockCommentBox.sidebarOpened", this.key)
            },
            after_collapse: function() {
                this.base.apply(this), PubSub.publish("BlockCommentBox.sidebarClosed", this.key)
            },
            after_shutdown: function() {
                this.base.apply(this), PubSub.publish("BlockCommentBox.shutdown", this.key)
            }
        })
    })(jQuery), window.DWait && DWait.run("jms/pages/writeranywhere/types/blockcomment.js")
});
DWait.ready(["jms/lib/ddt.js", "jms/lib/jquery/jquery.current.js"], function() {
    (function() {
        function e() {
            var e = {};
            if ($.each(i, function(t, i) {
                    36e5 > new Date - i.ts && (e[t] = i)
                }), i = e, window.sessionStorage) try {
                sessionStorage.setItem("ImageCache", JSON.stringify(i))
            } catch (t) {
                ddt.log("ImageCache", "Ran out of space, have to wait until some existing items expire")
            }
        }

        function t(e) {
            var t = -1;
            if (!e.match(/th..\.deviantart\./)) return {
                deviationid: t,
                size: "unknown"
            };
            var i = e.match(/-d([0-9a-zA-Z]+)/);
            if (i && i[1] && (t = parseInt(i[1], 36)), e.match(/th..\.deviantart\./)) {
                if (e.match(/fs..\/150\//)) return {
                    deviationid: t,
                    size: "150"
                };
                if (e.match(/fs..\/300W\//i)) return {
                    deviationid: t,
                    size: "300W"
                }
            }
            return {
                deviationid: t,
                size: "unknown"
            }
        }
        var i = {};
        if (window.sessionStorage) {
            var a = sessionStorage.getItem("ImageCache");
            null !== a && (i = JSON.parse(a), ddt.log("ImageCache", "Reading cache from sessionStorage", i), e())
        }
        setInterval(e, 6e4), window.ImageCache = {
            set: function(t, a) {
                i[t] = {
                    ts: +new Date
                }, $.each(a, function(e, a) {
                    i[t][e] = a
                }), e(), ddt.log("ImageCache", "Setting entry for deviationid " + t, a, i)
            },
            get: function(e) {
                if (!e) return e;
                var a = t(e);
                if (ddt.log("ImageCache", "Extracted information for " + e, a), i[a.deviationid] && i[a.deviationid][a.size]) {
                    var n = i[a.deviationid][a.size];
                    return ddt.log("ImageCache", "Found an entry in the ImageCache for " + e), n
                }
                return ddt.log("ImageCache", "Did not find any entry in the ImageCache for " + e, i), e
            }
        }
    })(), window.DWait && DWait.run("jms/lib/imagecache.js")
});
DWait.ready(["jms/pages/art/moderation.form.js"], function() {
    DWait.ready([".domready", "cssms/pages/moderation.form.css"], function() {
        "#reportdeviation" === window.location.hash && ModerationForm.open()
    }), window.DWait && DWait.run("jms/pages/art/moderation-url-handler.js")
});
window.safeLocalGet = function(t, o, e) {
    var r = o;
    try {
        if (r = localStorage.getItem(t), "string" != typeof r) return r = o;
        e && "function" == typeof e && (func = e, r = func(r))
    } catch (a) {
        return r = o
    }
    return r
}, window.safeLocalSet = function(t, o) {
    try {
        localStorage.removeItem(t), localStorage.setItem(t, o)
    } catch (e) {
        console.log("Error setting local storage", e)
    }
}, window.DWait && DWait.run("jms/lib/localStorage.js");
if (window.DWait) {
    DWait.count()
}