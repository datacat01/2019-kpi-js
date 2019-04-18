(function(e) {
    function t(r) {
        if (i[r]) return i[r].exports;
        var a = i[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    var i = {};
    return t.m = e, t.c = i, t.d = function(e, i, r) {
        t.o(e, i) || Object.defineProperty(e, i, {
            enumerable: !0,
            get: r
        })
    }, t.r = function(e) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: 'Module'
        }), Object.defineProperty(e, '__esModule', {
            value: !0
        })
    }, t.t = function(e, i) {
        if (1 & i && (e = t(e)), 8 & i) return e;
        if (4 & i && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, 'default', {
                enumerable: !0,
                value: e
            }), 2 & i && 'string' != typeof e)
            for (var a in e) t.d(r, a, function(t) {
                return e[t]
            }.bind(null, a));
        return r
    }, t.n = function(e) {
        var i = e && e.__esModule ? function() {
            return e['default']
        } : function() {
            return e
        };
        return t.d(i, 'a', i), i
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = '', t(t.s = 6)
})([function(e, t, i) {
    'use strict';
    var r = Math.round,
        a = Math.min;
    (function(e, n) {
        function o(e) {
            return o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            }, o(e)
        }
        /*!
         * VERSION: 2.0.2
         * DATE: 2018-08-27
         * UPDATES AND DOCS AT: http://greensock.com
         *
         * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
         * This work is subject to the terms at http://greensock.com/standard-license or for
         * Club GreenSock members, the software agreement that was issued with your membership.
         *
         * @author: Jack Doyle, jack@greensock.com
         */
        i.d(t, 'f', function() {
            return s
        }), i.d(t, 'h', function() {
            return _
        }), i.d(t, 'g', function() {
            return l
        }), i.d(t, 'd', function() {
            return p
        }), i.d(t, 'a', function() {
            return c
        }), i.d(t, 'b', function() {
            return m
        }), i.d(t, 'c', function() {
            return f
        }), i.d(t, 'e', function() {
            return T
        });
        var s = 'undefined' == typeof window ? e.exports && 'undefined' != typeof n ? n : {} : window,
            l = function(t) {
                var e = {},
                    n = t.document,
                    s = t.GreenSockGlobals = t.GreenSockGlobals || t;
                if (s.TweenLite) return s.TweenLite;
                var l = function(e) {
                        var t = e.split('.'),
                            r = s,
                            a;
                        for (a = 0; a < t.length; a++) r[t[a]] = r = r[t[a]] || {};
                        return r
                    },
                    _ = l('com.greensock'),
                    d = 1e-10,
                    c = function(e) {
                        var t = [],
                            r = e.length,
                            a;
                        for (a = 0; a !== r; t.push(e[a++]));
                        return t
                    },
                    m = function() {},
                    u = function() {
                        var e = Object.prototype.toString,
                            t = e.call([]);
                        return function(i) {
                            return null != i && (i instanceof Array || 'object' === o(i) && !!i.push && e.call(i) === t)
                        }
                    }(),
                    g = {},
                    f = function t(r, a, o, _) {
                        this.sc = g[r] ? g[r].sc : [], g[r] = this, this.gsClass = null, this.func = o;
                        var d = [];
                        this.check = function(p) {
                            for (var c = a.length, i = c, m, u, f, n; - 1 < --c;)(m = g[a[c]] || new t(a[c], [])).gsClass ? (d[c] = m.gsClass, i--) : p && m.sc.push(this);
                            if (0 === i && o)
                                for (u = ('com.greensock.' + r).split('.'), f = u.pop(), n = l(u.join('.'))[f] = this.gsClass = o.apply(o, d), _ && (s[f] = e[f] = n), c = 0; c < this.sc.length; c++) this.sc[c].check()
                        }, this.check(!0)
                    },
                    y = t._gsDefine = function(e, t, i, r) {
                        return new f(e, t, i, r)
                    },
                    h = _._class = function(e, t, i) {
                        return t = t || function() {}, y(e, [], function() {
                            return t
                        }, i), t
                    },
                    T, v, i, b, p;
                y.globals = s;
                var x = [0, 0, 1, 1],
                    S = h('easing.Ease', function(e, t, i, r) {
                        this._func = e, this._type = i || 0, this._power = r || 0, this._params = t ? x.concat(t) : x
                    }, !0),
                    E = S.map = {},
                    C = S.register = function(t, r, a, n) {
                        for (var o = r.split(','), s = o.length, i = (a || 'easeIn,easeOut,easeInOut').split(','), l, e, d, p; - 1 < --s;)
                            for (e = o[s], l = n ? h('easing.' + e, null, !0) : _.easing[e] || {}, d = i.length; - 1 < --d;) p = i[d], E[e + '.' + p] = E[p + e] = l[p] = t.getRatio ? t : t[p] || new t
                    };
                for (i = S.prototype, i._calcEnd = !1, i.getRatio = function(e) {
                        if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                        var i = this._type,
                            t = this._power,
                            a = 1 === i ? 1 - e : 2 === i ? e : .5 > e ? 2 * e : 2 * (1 - e);
                        return 1 === t ? a *= a : 2 === t ? a *= a * a : 3 === t ? a *= a * a * a : 4 === t && (a *= a * a * a * a), 1 === i ? 1 - a : 2 === i ? a : .5 > e ? a / 2 : 1 - a / 2
                    }, T = ['Linear', 'Quad', 'Cubic', 'Quart', 'Quint,Strong'], v = T.length; - 1 < --v;) i = T[v] + ',Power' + v, C(new S(null, null, 1, v), i, 'easeOut', !0), C(new S(null, null, 2, v), i, 'easeIn' + (0 === v ? ',easeNone' : '')), C(new S(null, null, 3, v), i, 'easeInOut');
                E.linear = _.easing.Linear.easeIn, E.swing = _.easing.Quad.easeInOut;
                var R = h('events.EventDispatcher', function(e) {
                    this._listeners = {}, this._eventTarget = e || this
                });
                i = R.prototype, i.addEventListener = function(e, t, r, a, n) {
                    n = n || 0;
                    var o = this._listeners[e],
                        s = 0,
                        l, _;
                    for (this !== b || p || b.wake(), null == o && (this._listeners[e] = o = []), _ = o.length; - 1 < --_;) l = o[_], l.c === t && l.s === r ? o.splice(_, 1) : 0 == s && l.pr < n && (s = _ + 1);
                    o.splice(s, 0, {
                        c: t,
                        s: r,
                        up: a,
                        pr: n
                    })
                }, i.removeEventListener = function(e, t) {
                    var r = this._listeners[e],
                        a;
                    if (r)
                        for (a = r.length; - 1 < --a;)
                            if (r[a].c === t) return void r.splice(a, 1)
                }, i.dispatchEvent = function(e) {
                    var r = this._listeners[e],
                        a, i, n;
                    if (r)
                        for (a = r.length, 1 < a && (r = r.slice(0)), i = this._eventTarget; - 1 < --a;) n = r[a], n && (n.up ? n.c.call(n.s || i, {
                            type: e,
                            target: i
                        }) : n.c.call(n.s || i))
                };
                var A = t.requestAnimationFrame,
                    $ = t.cancelAnimationFrame,
                    P = Date.now || function() {
                        return new Date().getTime()
                    },
                    w = P();
                for (T = ['ms', 'moz', 'webkit', 'o'], v = T.length; - 1 < --v && !A;) A = t[T[v] + 'RequestAnimationFrame'], $ = t[T[v] + 'CancelAnimationFrame'] || t[T[v] + 'CancelRequestAnimationFrame'];
                h('Ticker', function(e, t) {
                    var i = this,
                        r = P(),
                        o = !!(!1 !== t && A) && 'auto',
                        s = 500,
                        l = 33,
                        _ = function e(t) {
                            var a = P() - w,
                                n, o;
                            a > s && (r += a - l), w += a, i.time = (w - r) / 1e3, n = i.time - y, (!c || 0 < n || !0 === t) && (i.frame++, y += n + (n >= f ? .004 : f - n), o = !0), !0 !== t && (g = u(e)), o && i.dispatchEvent('tick')
                        },
                        c, u, g, f, y;
                    R.call(i), i.time = i.frame = 0, i.tick = function() {
                        _(!0)
                    }, i.lagSmoothing = function(e, t) {
                        return arguments.length ? void(s = e || 1 / d, l = a(t, s, 0)) : s < 1 / d
                    }, i.sleep = function() {
                        null == g || (o && $ ? $(g) : clearTimeout(g), u = m, g = null, i === b && (p = !1))
                    }, i.wake = function(e) {
                        null === g ? e ? r += -w + (w = P()) : 10 < i.frame && (w = P() - s + 5) : i.sleep(), u = 0 === c ? m : o && A ? A : function(e) {
                            return setTimeout(e, 0 | 1e3 * (y - i.time) + 1)
                        }, i === b && (p = !0), _(2)
                    }, i.fps = function(e) {
                        return arguments.length ? void(c = e, f = 1 / (c || 60), y = this.time + f, i.wake()) : c
                    }, i.useRAF = function(e) {
                        return arguments.length ? void(i.sleep(), o = e, i.fps(c)) : o
                    }, i.fps(e), setTimeout(function() {
                        'auto' === o && 5 > i.frame && 'hidden' !== (n || {}).visibilityState && i.useRAF(!1)
                    }, 1500)
                }), i = _.Ticker.prototype = new _.events.EventDispatcher, i.constructor = _.Ticker;
                var O = h('core.Animation', function(e, t) {
                    if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = +t.delay || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, !!Z) {
                        p || b.wake();
                        var i = this.vars.useFrames ? W : Z;
                        i.add(this, i._time), this.vars.paused && this.paused(!0)
                    }
                });
                b = O.ticker = new _.Ticker, i = O.prototype, i._dirty = i._gc = i._initted = i._paused = !1, i._totalTime = i._time = 0, i._rawPrevTime = -1, i._next = i._last = i._onUpdate = i._timeline = i.timeline = null, i._paused = !1;
                var k = function e() {
                    p && 2e3 < P() - w && ('hidden' !== (n || {}).visibilityState || !b.lagSmoothing()) && b.wake();
                    var i = setTimeout(e, 2e3);
                    i.unref && i.unref()
                };
                k(), i.play = function(e, t) {
                    return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
                }, i.pause = function(e, t) {
                    return null != e && this.seek(e, t), this.paused(!0)
                }, i.resume = function(e, t) {
                    return null != e && this.seek(e, t), this.paused(!1)
                }, i.seek = function(e, t) {
                    return this.totalTime(+e, !1 !== t)
                }, i.restart = function(e, t) {
                    return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
                }, i.reverse = function(e, t) {
                    return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
                }, i.render = function() {}, i.invalidate = function() {
                    return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
                }, i.isActive = function() {
                    var e = this._timeline,
                        t = this._startTime,
                        i;
                    return !e || !this._gc && !this._paused && e.isActive() && (i = e.rawTime(!0)) >= t && i < t + this.totalDuration() / this._timeScale - 1e-7
                }, i._enabled = function(e, t) {
                    return p || b.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
                }, i._kill = function() {
                    return this._enabled(!1, !1)
                }, i.kill = function(e, t) {
                    return this._kill(e, t), this
                }, i._uncache = function(e) {
                    for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                    return this
                }, i._swapSelfInParams = function(e) {
                    for (var t = e.length, i = e.concat(); - 1 < --t;) '{self}' === e[t] && (i[t] = this);
                    return i
                }, i._callback = function(e) {
                    var t = this.vars,
                        i = t[e],
                        r = t[e + 'Params'],
                        a = t[e + 'Scope'] || t.callbackScope || this,
                        n = r ? r.length : 0;
                    0 === n ? i.call(a) : 1 === n ? i.call(a, r[0]) : 2 === n ? i.call(a, r[0], r[1]) : i.apply(a, r)
                }, i.eventCallback = function(e, t, i, r) {
                    if ('on' === (e || '').substr(0, 2)) {
                        var a = this.vars;
                        if (1 === arguments.length) return a[e];
                        null == t ? delete a[e] : (a[e] = t, a[e + 'Params'] = u(i) && -1 !== i.join('').indexOf('{self}') ? this._swapSelfInParams(i) : i, a[e + 'Scope'] = r), 'onUpdate' === e && (this._onUpdate = t)
                    }
                    return this
                }, i.delay = function(e) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
                }, i.duration = function(e) {
                    return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
                }, i.totalDuration = function(e) {
                    return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
                }, i.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
                }, i.totalTime = function(e, t, i) {
                    if (p || b.wake(), !arguments.length) return this._totalTime;
                    if (this._timeline) {
                        if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                            this._dirty && this.totalDuration();
                            var r = this._totalDuration,
                                a = this._timeline;
                            if (e > r && !i && (e = r), this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? r - e : e) / this._timeScale, a._dirty || this._uncache(!1), a._timeline)
                                for (; a._timeline;) a._timeline._time !== (a._startTime + a._totalTime) / a._timeScale && a.totalTime(a._totalTime, !0), a = a._timeline
                        }
                        this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (F.length && Q(), this.render(e, t, !1), F.length && Q())
                    }
                    return this
                }, i.progress = i.totalProgress = function(e, t) {
                    var i = this.duration();
                    return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
                }, i.startTime = function(e) {
                    return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
                }, i.endTime = function(e) {
                    return this._startTime + (!1 == e ? this.duration() : this.totalDuration()) / this._timeScale
                }, i.timeScale = function(e) {
                    if (!arguments.length) return this._timeScale;
                    var i, r;
                    for (e = e || d, this._timeline && this._timeline.smoothChildTiming && (i = this._pauseTime, r = i || 0 === i ? i : this._timeline.totalTime(), this._startTime = r - (r - this._startTime) * this._timeScale / e), this._timeScale = e, r = this.timeline; r && r.timeline;) r._dirty = !0, r.totalDuration(), r = r.timeline;
                    return this
                }, i.reversed = function(e) {
                    return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                }, i.paused = function(e) {
                    if (!arguments.length) return this._paused;
                    var t = this._timeline,
                        i, r;
                    return e != this._paused && t && (!p && !e && b.wake(), i = t.rawTime(), r = i - this._pauseTime, !e && t.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = e ? i : null, this._paused = e, this._active = this.isActive(), !e && 0 !== r && this._initted && this.duration() && (i = t.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, this.render(i, i === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
                };
                var L = h('core.SimpleTimeline', function(e) {
                    O.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
                });
                i = L.prototype = new O, i.constructor = L, i.kill()._gc = !1, i._first = i._last = i._recent = null, i._sortChildren = !1, i.add = i.insert = function(e, t) {
                    var i, r;
                    if (e._startTime = +(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = this.rawTime() - (e._timeline.rawTime() - e._pauseTime)), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
                        for (r = e._startTime; i && i._startTime > r;) i = i._prev;
                    return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._recent = e, this._timeline && this._uncache(!0), this
                }, i._remove = function(e, t) {
                    return e.timeline === this && (!t && e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                }, i.render = function(e, t, i) {
                    var r = this._first,
                        a;
                    for (this._totalTime = this._time = this._rawPrevTime = e; r;) a = r._next, (r._active || e >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = a
                }, i.rawTime = function() {
                    return p || b.wake(), this._totalTime
                };
                var D = h('TweenLite', function(e, r, n) {
                        if (O.call(this, r, n), this.render = D.prototype.render, null == e) throw 'Cannot tween a null target.';
                        this.target = e = 'string' == typeof e ? D.selector(e) || e : e;
                        var o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                            s = this.vars.overwrite,
                            l, i, _;
                        if (this._overwrite = s = null == s ? j[D.defaultOverwrite] : 'number' == typeof s ? s >> 0 : j[s], (o || e instanceof Array || e.push && u(e)) && 'number' != typeof e[0])
                            for (this._targets = _ = c(e), this._propLookup = [], this._siblings = [], l = 0; l < _.length; l++) {
                                if (i = _[l], !i) {
                                    _.splice(l--, 1);
                                    continue
                                } else if ('string' == typeof i) {
                                    i = _[l--] = D.selector(i), 'string' == typeof i && _.splice(l + 1, 1);
                                    continue
                                } else if (i.length && i !== t && i[0] && (i[0] === t || i[0].nodeType && i[0].style && !i.nodeType)) {
                                    _.splice(l--, 1), this._targets = _ = _.concat(c(i));
                                    continue
                                }
                                this._siblings[l] = ee(i, this, !1), 1 === s && 1 < this._siblings[l].length && ie(i, this, null, 1, this._siblings[l])
                            } else this._propLookup = {}, this._siblings = ee(e, this, !1), 1 === s && 1 < this._siblings.length && ie(e, this, null, 1, this._siblings);
                        (this.vars.immediateRender || 0 === r && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -d, this.render(a(0, -this._delay)))
                    }, !0),
                    I = function(e) {
                        return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                    },
                    z = function(e, t) {
                        var i = {},
                            r;
                        for (r in e) q[r] || r in t && 'transform' !== r && 'x' !== r && 'y' !== r && 'width' !== r && 'height' !== r && 'className' !== r && 'border' !== r || Y[r] && (!Y[r] || !Y[r]._autoCSS) || (i[r] = e[r], delete e[r]);
                        e.css = i
                    };
                i = D.prototype = new O, i.constructor = D, i.kill()._gc = !1, i.ratio = 0, i._firstPT = i._targets = i._overwrittenProps = i._startAt = null, i._notifyPluginsOfEnabled = i._lazy = !1, D.version = '2.0.2', D.defaultEase = i._ease = new S(null, null, 1, 1), D.defaultOverwrite = 'auto', D.ticker = b, D.autoSleep = 120, D.lagSmoothing = function(e, t) {
                    b.lagSmoothing(e, t)
                }, D.selector = t.$ || t.jQuery || function(i) {
                    var e = t.$ || t.jQuery;
                    return e ? (D.selector = e, e(i)) : (n || (n = t.document), n ? n.querySelectorAll ? n.querySelectorAll(i) : n.getElementById('#' === i.charAt(0) ? i.substr(1) : i) : i)
                };
                var F = [],
                    N = {},
                    H = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
                    M = /[\+-]=-?[\.\d]/,
                    B = function(e) {
                        for (var t = this._firstPT, i = 1e-6, r; t;) r = t.blob ? 1 === e && null != this.end ? this.end : e ? this.join('') : this.start : t.c * e + t.s, t.m ? r = t.m.call(this._tween, r, this._target || t.t, this._tween) : r < i && r > -i && !t.blob && (r = 0), t.f ? t.fp ? t.t[t.p](t.fp, r) : t.t[t.p](r) : t.t[t.p] = r, t = t._next
                    },
                    U = function(e, t, n, o) {
                        var _ = [],
                            d = 0,
                            p = '',
                            s = 0,
                            c, m, u, g, f, l, y;
                        for (_.start = e, _.end = t, e = _[0] = e + '', t = _[1] = t + '', n && (n(_), e = _[0], t = _[1]), _.length = 0, c = e.match(H) || [], m = t.match(H) || [], o && (o._next = null, o.blob = 1, _._firstPT = _._applyPT = o), f = m.length, g = 0; g < f; g++) y = m[g], l = t.substr(d, t.indexOf(y, d) - d), p += l || !g ? l : ',', d += l.length, s ? s = (s + 1) % 5 : 'rgba(' === l.substr(-5) && (s = 1), y === c[g] || c.length <= g ? p += y : (p && (_.push(p), p = ''), u = parseFloat(c[g]), _.push(u), _._firstPT = {
                            _next: _._firstPT,
                            t: _,
                            p: _.length - 1,
                            s: u,
                            c: ('=' === y.charAt(1) ? parseInt(y.charAt(0) + '1', 10) * parseFloat(y.substr(2)) : parseFloat(y) - u) || 0,
                            f: 0,
                            m: s && 4 > s ? r : 0
                        }), d += y.length;
                        return p += t.substr(d), p && _.push(p), _.setRatio = B, M.test(t) && (_.end = null), _
                    },
                    X = function(e, t, i, a, n, l, _, d, p) {
                        'function' == typeof a && (a = a(p || 0, e));
                        var c = o(e[t]),
                            m = 'function' === c ? t.indexOf('set') || 'function' != typeof e['get' + t.substr(3)] ? t : 'get' + t.substr(3) : '',
                            u = 'get' === i ? m ? _ ? e[m](_) : e[m]() : e[t] : i,
                            g = 'string' == typeof a && '=' === a.charAt(1),
                            f = {
                                t: e,
                                p: t,
                                s: u,
                                f: 'function' === c,
                                pg: 0,
                                n: n || t,
                                m: l ? 'function' == typeof l ? l : r : 0,
                                pr: 0,
                                c: g ? parseInt(a.charAt(0) + '1', 10) * parseFloat(a.substr(2)) : parseFloat(a) - u || 0
                            },
                            y;
                        if ('number' == typeof u && ('number' == typeof a || g) || (_ || isNaN(u) || !g && isNaN(a) || 'boolean' == typeof u || 'boolean' == typeof a ? (f.fp = _, y = U(u, g ? parseFloat(f.s) + f.c + (f.s + '').replace(/[0-9\-\.]/g, '') : a, d || D.defaultStringFilter, f), f = {
                                t: y,
                                p: 'setRatio',
                                s: 0,
                                c: 1,
                                f: 2,
                                pg: 0,
                                n: n || t,
                                pr: 0,
                                m: 0
                            }) : (f.s = parseFloat(u), !g && (f.c = parseFloat(a) - f.s || 0))), f.c) return (f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f
                    },
                    G = D._internals = {
                        isArray: u,
                        isSelector: I,
                        lazyTweens: F,
                        blobDif: U
                    },
                    Y = D._plugins = {},
                    K = G.tweenLookup = {},
                    V = 0,
                    q = G.reservedProps = {
                        ease: 1,
                        delay: 1,
                        overwrite: 1,
                        onComplete: 1,
                        onCompleteParams: 1,
                        onCompleteScope: 1,
                        useFrames: 1,
                        runBackwards: 1,
                        startAt: 1,
                        onUpdate: 1,
                        onUpdateParams: 1,
                        onUpdateScope: 1,
                        onStart: 1,
                        onStartParams: 1,
                        onStartScope: 1,
                        onReverseComplete: 1,
                        onReverseCompleteParams: 1,
                        onReverseCompleteScope: 1,
                        onRepeat: 1,
                        onRepeatParams: 1,
                        onRepeatScope: 1,
                        easeParams: 1,
                        yoyo: 1,
                        immediateRender: 1,
                        repeat: 1,
                        repeatDelay: 1,
                        data: 1,
                        paused: 1,
                        reversed: 1,
                        autoCSS: 1,
                        lazy: 1,
                        onOverwrite: 1,
                        callbackScope: 1,
                        stringFilter: 1,
                        id: 1,
                        yoyoEase: 1
                    },
                    j = {
                        none: 0,
                        all: 1,
                        auto: 2,
                        concurrent: 3,
                        allOnStart: 4,
                        preexisting: 5,
                        true: 1,
                        false: 0
                    },
                    W = O._rootFramesTimeline = new L,
                    Z = O._rootTimeline = new L,
                    J = 30,
                    Q = G.lazyRender = function() {
                        var e = F.length,
                            t;
                        for (N = {}; - 1 < --e;) t = F[e], t && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                        F.length = 0
                    };
                Z._startTime = b.time, W._startTime = b.frame, Z._active = W._active = !0, setTimeout(Q, 1), O._updateRoot = D.render = function() {
                    var e, t, i;
                    if (F.length && Q(), Z.render((b.time - Z._startTime) * Z._timeScale, !1, !1), W.render((b.frame - W._startTime) * W._timeScale, !1, !1), F.length && Q(), b.frame >= J) {
                        for (i in J = b.frame + (parseInt(D.autoSleep, 10) || 120), K) {
                            for (t = K[i].tweens, e = t.length; - 1 < --e;) t[e]._gc && t.splice(e, 1);
                            0 === t.length && delete K[i]
                        }
                        if (i = Z._first, (!i || i._paused) && D.autoSleep && !W._first && 1 === b._listeners.tick.length) {
                            for (; i && i._paused;) i = i._next;
                            i || b.sleep()
                        }
                    }
                }, b.addEventListener('tick', O._updateRoot);
                var ee = function(e, t, r) {
                        var n = e._gsTweenID,
                            o, a;
                        if (K[n || (e._gsTweenID = n = 't' + V++)] || (K[n] = {
                                target: e,
                                tweens: []
                            }), t && (o = K[n].tweens, o[a = o.length] = t, r))
                            for (; - 1 < --a;) o[a] === t && o.splice(a, 1);
                        return K[n].tweens
                    },
                    te = function(e, t, i, r) {
                        var a = e.vars.onOverwrite,
                            n, o;
                        return a && (n = a(e, t, i, r)), a = D.onOverwrite, a && (o = a(e, t, i, r)), !1 !== n && !1 !== o
                    },
                    ie = function(e, t, r, a, n) {
                        var o, i, s, _;
                        if (1 === a || 4 <= a) {
                            for (_ = n.length, o = 0; o < _; o++)
                                if ((s = n[o]) !== t) !s._gc && s._kill(null, e, t) && (i = !0);
                                else if (5 === a) break;
                            return i
                        }
                        var l = t._startTime + d,
                            p = [],
                            c = 0,
                            m = 0 === t._duration,
                            u;
                        for (o = n.length; - 1 < --o;)
                            if ((s = n[o]) === t || s._gc || s._paused);
                            else s._timeline === t._timeline ? s._startTime <= l && s._startTime + s.totalDuration() / s._timeScale > l && ((m || !s._initted) && 2e-10 >= l - s._startTime || (p[c++] = s)) : (u = u || re(t, 0, m), 0 === re(s, u, m) && (p[c++] = s));
                        for (o = c; - 1 < --o;)
                            if (s = p[o], _ = s._firstPT, 2 === a && s._kill(r, e, t) && (i = !0), 2 !== a || !s._firstPT && s._initted && _) {
                                if (2 !== a && !te(s, t)) continue;
                                s._enabled(!1, !1) && (i = !0)
                            } return i
                    },
                    re = function(e, i, r) {
                        for (var a = e._timeline, n = a._timeScale, o = e._startTime; a._timeline;) {
                            if (o += a._startTime, n *= a._timeScale, a._paused) return -100;
                            a = a._timeline
                        }
                        return o /= n, o > i ? o - i : r && o === i || !e._initted && o - i < 2 * d ? d : (o += e.totalDuration() / e._timeScale / n) > i + d ? 0 : o - i - d
                    };
                i._init = function() {
                    var e = this.vars,
                        t = this._overwrittenProps,
                        r = this._duration,
                        a = !!e.immediateRender,
                        n = e.ease,
                        o, i, s, _, d, p;
                    if (e.startAt) {
                        for (_ in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), d = {}, e.startAt) d[_] = e.startAt[_];
                        if (d.data = 'isStart', d.overwrite = !1, d.immediateRender = !0, d.lazy = a && !1 !== e.lazy, d.startAt = d.delay = null, d.onUpdate = e.onUpdate, d.onUpdateParams = e.onUpdateParams, d.onUpdateScope = e.onUpdateScope || e.callbackScope || this, this._startAt = D.to(this.target || {}, 0, d), a)
                            if (0 < this._time) this._startAt = null;
                            else if (0 !== r) return
                    } else if (e.runBackwards && 0 !== r)
                        if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                        else {
                            for (_ in 0 !== this._time && (a = !1), s = {}, e) q[_] && 'autoCSS' !== _ || (s[_] = e[_]);
                            if (s.overwrite = 0, s.data = 'isFromStart', s.lazy = a && !1 !== e.lazy, s.immediateRender = a, this._startAt = D.to(this.target, 0, s), !a) this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                            else if (0 === this._time) return
                        } if (this._ease = n = n ? n instanceof S ? n : 'function' == typeof n ? new S(n, e.easeParams) : E[n] || D.defaultEase : D.defaultEase, e.easeParams instanceof Array && n.config && (this._ease = n.config.apply(n, e.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                        for (p = this._targets.length, o = 0; o < p; o++) this._initProps(this._targets[o], this._propLookup[o] = {}, this._siblings[o], t ? t[o] : null, o) && (i = !0);
                    else i = this._initProps(this.target, this._propLookup, this._siblings, t, 0);
                    if (i && D._onPluginEvent('_onInitAllProps', this), t && !this._firstPT && 'function' != typeof this.target && this._enabled(!1, !1), e.runBackwards)
                        for (s = this._firstPT; s;) s.s += s.c, s.c = -s.c, s = s._next;
                    this._onUpdate = e.onUpdate, this._initted = !0
                }, i._initProps = function(e, r, a, n, o) {
                    var s, l, i, _, d, p;
                    if (null == e) return !1;
                    for (s in N[e._gsTweenID] && Q(), !this.vars.css && e.style && e !== t && e.nodeType && Y.css && !1 !== this.vars.autoCSS && z(this.vars, e), this.vars)
                        if (p = this.vars[s], q[s]) p && (p instanceof Array || p.push && u(p)) && -1 !== p.join('').indexOf('{self}') && (this.vars[s] = p = this._swapSelfInParams(p, this));
                        else if (Y[s] && (_ = new Y[s])._onInitTween(e, this.vars[s], this, o)) {
                        for (this._firstPT = d = {
                                _next: this._firstPT,
                                t: _,
                                p: 'setRatio',
                                s: 0,
                                c: 1,
                                f: 1,
                                n: s,
                                pg: 1,
                                pr: _._priority,
                                m: 0
                            }, l = _._overwriteProps.length; - 1 < --l;) r[_._overwriteProps[l]] = this._firstPT;
                        (_._priority || _._onInitAllProps) && (i = !0), (_._onDisable || _._onEnable) && (this._notifyPluginsOfEnabled = !0), d._next && (d._next._prev = d)
                    } else r[s] = X.call(this, e, s, 'get', p, s, 0, null, this.vars.stringFilter, o);
                    return n && this._kill(n, e) ? this._initProps(e, r, a, n, o) : 1 < this._overwrite && this._firstPT && 1 < a.length && ie(e, this, r, this._overwrite, a) ? (this._kill(r, e), this._initProps(e, r, a, n, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (N[e._gsTweenID] = !0), i)
                }, i.render = function(e, t, i) {
                    var a = this._time,
                        n = this._duration,
                        o = this._rawPrevTime,
                        s, l, _, p;
                    if (e >= n - 1e-7 && 0 <= e) this._totalTime = this._time = n, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, l = 'onComplete', i = i || this._timeline.autoRemoveChildren), 0 === n && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 > o || 0 >= e && -1e-7 <= e || o === d && 'isPause' !== this.data) && o !== e && (i = !0, o > d && (l = 'onReverseComplete')), this._rawPrevTime = p = !t || e || o === e ? e : d);
                    else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === n && 0 < o) && (l = 'onReverseComplete', s = this._reversed), 0 > e && (this._active = !1, 0 === n && (this._initted || !this.vars.lazy || i) && (0 <= o && (o !== d || 'isPause' !== this.data) && (i = !0), this._rawPrevTime = p = !t || e || o === e ? e : d)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                    else if (this._totalTime = this._time = e, this._easeType) {
                        var c = e / n,
                            r = this._easeType,
                            m = this._easePower;
                        (1 === r || 3 === r && .5 <= c) && (c = 1 - c), 3 === r && (c *= 2), 1 === m ? c *= c : 2 === m ? c *= c * c : 3 === m ? c *= c * c * c : 4 === m && (c *= c * c * c * c), this.ratio = 1 === r ? 1 - c : 2 === r ? c : .5 > e / n ? c / 2 : 1 - c / 2
                    } else this.ratio = this._ease.getRatio(e / n);
                    if (this._time !== a || i) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = o, F.push(this), void(this._lazy = [e, t]);
                            this._time && !s ? this.ratio = this._ease.getRatio(this._time / n) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || this._paused || this._time === a || !(0 <= e) || (this._active = !0), 0 === a && (this._startAt && (0 <= e ? this._startAt.render(e, !0, i) : !l && (l = '_dummyGS')), this.vars.onStart && (0 !== this._time || 0 === n) && !t && this._callback('onStart')), _ = this._firstPT; _;) _.f ? _.t[_.p](_.c * this.ratio + _.s) : _.t[_.p] = _.c * this.ratio + _.s, _ = _._next;
                        this._onUpdate && (0 > e && this._startAt && -1e-4 !== e && this._startAt.render(e, !0, i), !t && (this._time !== a || s || i) && this._callback('onUpdate')), l && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, !0, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this._callback(l), 0 === n && this._rawPrevTime === d && p !== d && (this._rawPrevTime = 0))
                    }
                }, i._kill = function(e, t, r) {
                    if ('all' === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                    t = 'string' == typeof t ? D.selector(t) || t : t || this._targets || this.target;
                    var a = r && this._time && r._startTime === this._startTime && this._timeline === r._timeline,
                        n = this._firstPT,
                        s, i, l, _, d, p, c, m, g;
                    if ((u(t) || I(t)) && 'number' != typeof t[0])
                        for (s = t.length; - 1 < --s;) this._kill(e, t[s], r) && (p = !0);
                    else {
                        if (this._targets) {
                            for (s = this._targets.length; - 1 < --s;)
                                if (t === this._targets[s]) {
                                    d = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], i = this._overwrittenProps[s] = e ? this._overwrittenProps[s] || {} : 'all';
                                    break
                                }
                        } else {
                            if (t !== this.target) return !1;
                            d = this._propLookup, i = this._overwrittenProps = e ? this._overwrittenProps || {} : 'all'
                        }
                        if (d) {
                            if (c = e || d, m = e !== i && 'all' !== i && e !== d && ('object' !== o(e) || !e._tempKill), r && (D.onOverwrite || this.vars.onOverwrite)) {
                                for (l in c) d[l] && (g || (g = []), g.push(l));
                                if ((g || !e) && !te(this, r, t, g)) return !1
                            }
                            for (l in c)(_ = d[l]) && (a && (_.f ? _.t[_.p](_.s) : _.t[_.p] = _.s, p = !0), _.pg && _.t._kill(c) && (p = !0), (!_.pg || 0 === _.t._overwriteProps.length) && (_._prev ? _._prev._next = _._next : _ === this._firstPT && (this._firstPT = _._next), _._next && (_._next._prev = _._prev), _._next = _._prev = null), delete d[l]), m && (i[l] = 1);
                            !this._firstPT && this._initted && n && this._enabled(!1, !1)
                        }
                    }
                    return p
                }, i.invalidate = function() {
                    return this._notifyPluginsOfEnabled && D._onPluginEvent('_onDisable', this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -d, this.render(a(0, -this._delay))), this
                }, i._enabled = function(e, t) {
                    if (p || b.wake(), e && this._gc) {
                        var r = this._targets,
                            a;
                        if (r)
                            for (a = r.length; - 1 < --a;) this._siblings[a] = ee(r[a], this, !0);
                        else this._siblings = ee(this.target, this, !0)
                    }
                    return O.prototype._enabled.call(this, e, t), !!(this._notifyPluginsOfEnabled && this._firstPT) && D._onPluginEvent(e ? '_onEnable' : '_onDisable', this)
                }, D.to = function(e, t, i) {
                    return new D(e, t, i)
                }, D.from = function(e, t, i) {
                    return i.runBackwards = !0, i.immediateRender = !1 != i.immediateRender, new D(e, t, i)
                }, D.fromTo = function(e, t, i, r) {
                    return r.startAt = i, r.immediateRender = !1 != r.immediateRender && !1 != i.immediateRender, new D(e, t, r)
                }, D.delayedCall = function(e, t, i, r, a) {
                    return new D(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: i,
                        callbackScope: r,
                        onReverseComplete: t,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        lazy: !1,
                        useFrames: a,
                        overwrite: 0
                    })
                }, D.set = function(e, t) {
                    return new D(e, 0, t)
                }, D.getTweensOf = function(e, r) {
                    if (null == e) return [];
                    e = 'string' == typeof e ? D.selector(e) || e : e;
                    var n, i, a, o;
                    if ((u(e) || I(e)) && 'number' != typeof e[0]) {
                        for (n = e.length, i = []; - 1 < --n;) i = i.concat(D.getTweensOf(e[n], r));
                        for (n = i.length; - 1 < --n;)
                            for (o = i[n], a = n; - 1 < --a;) o === i[a] && i.splice(n, 1)
                    } else if (e._gsTweenID)
                        for (i = ee(e).concat(), n = i.length; - 1 < --n;)(i[n]._gc || r && !i[n].isActive()) && i.splice(n, 1);
                    return i || []
                }, D.killTweensOf = D.killDelayedCallsTo = function(e, t, r) {
                    'object' === o(t) && (r = t, t = !1);
                    for (var n = D.getTweensOf(e, t), a = n.length; - 1 < --a;) n[a]._kill(r, e)
                };
                var ae = h('plugins.TweenPlugin', function(e, t) {
                    this._overwriteProps = (e || '').split(','), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = ae.prototype
                }, !0);
                if (i = ae.prototype, ae.version = '1.19.0', ae.API = 2, i._firstPT = null, i._addTween = X, i.setRatio = B, i._kill = function(e) {
                        var t = this._overwriteProps,
                            r = this._firstPT,
                            a;
                        if (null != e[this._propName]) this._overwriteProps = [];
                        else
                            for (a = t.length; - 1 < --a;) null != e[t[a]] && t.splice(a, 1);
                        for (; r;) null != e[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                        return !1
                    }, i._mod = i._roundProps = function(e) {
                        for (var t = this._firstPT, i; t;) i = e[this._propName] || null != t.n && e[t.n.split(this._propName + '_').join('')], i && 'function' == typeof i && (2 === t.f ? t.t._applyPT.m = i : t.m = i), t = t._next
                    }, D._onPluginEvent = function(e, t) {
                        var i = t._firstPT,
                            r, a, n, o, s;
                        if ('_onInitAllProps' === e) {
                            for (; i;) {
                                for (s = i._next, a = n; a && a.pr > i.pr;) a = a._next;
                                (i._prev = a ? a._prev : o) ? i._prev._next = i: n = i, (i._next = a) ? a._prev = i : o = i, i = s
                            }
                            i = t._firstPT = n
                        }
                        for (; i;) i.pg && 'function' == typeof i.t[e] && i.t[e]() && (r = !0), i = i._next;
                        return r
                    }, ae.activate = function(e) {
                        for (var t = e.length; - 1 < --t;) e[t].API === ae.API && (Y[new e[t]()._propName] = e[t]);
                        return !0
                    }, y.plugin = function(e) {
                        if (!e || !e.propName || !e.init || !e.API) throw 'illegal plugin definition.';
                        var t = e.propName,
                            i = e.priority || 0,
                            r = e.overwriteProps,
                            a = {
                                init: '_onInitTween',
                                set: 'setRatio',
                                kill: '_kill',
                                round: '_mod',
                                mod: '_mod',
                                initAll: '_onInitAllProps'
                            },
                            n = h('plugins.' + t.charAt(0).toUpperCase() + t.substr(1) + 'Plugin', function() {
                                ae.call(this, t, i), this._overwriteProps = r || []
                            }, !0 === e.global),
                            o = n.prototype = new ae(t),
                            s;
                        for (s in o.constructor = n, n.API = e.API, a) 'function' == typeof e[s] && (o[a[s]] = e[s]);
                        return n.version = e.version, ae.activate([n]), n
                    }, T = t._gsQueue, T) {
                    for (v = 0; v < T.length; v++) T[v]();
                    for (i in g) g[i].func || t.console.log('GSAP encountered missing dependency: ' + i)
                }
                return p = !1, D
            }(s, 'TweenLite'),
            _ = s.GreenSockGlobals,
            d = _.com.greensock,
            p = d.core.SimpleTimeline,
            c = d.core.Animation,
            m = _.Ease,
            u = _.Linear,
            g = _.Power1,
            f = _.Power2,
            y = _.Power3,
            h = _.Power4,
            T = _.TweenPlugin,
            v = d.events.EventDispatcher
    }).call(this, i(4)(e), i(5))
}, function(e, t) {
    function i(e) {
        return i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
        }, i(e)
    }(function() {
        var e = e || {};
        e.DEBUG = !1, e.inherits = function(e, t) {
            function i() {}
            i.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new i, e.prototype.constructor = e, e.base = function(e, i) {
                var r = Array.prototype.slice.call(arguments, 2);
                return t.prototype[i].apply(e, r)
            }
        }, e.userAgent || (e.userAgent = function() {
            var e = '';
            'undefined' != typeof navigator && navigator && 'string' == typeof navigator.userAgent && (e = navigator.userAgent);
            var t = 0 == e.indexOf('Opera');
            return {
                jscript: {
                    HAS_JSCRIPT: 'ScriptEngine' in this
                },
                OPERA: t,
                IE: !t && -1 != e.indexOf('MSIE'),
                WEBKIT: !t && -1 != e.indexOf('WebKit')
            }
        }()), e.asserts || (e.asserts = {
            assert: function(e) {
                if (!e) throw Error('Assertion error')
            },
            fail: function() {}
        }), e.dom || (e.dom = {}, e.dom.DomHelper = function(e) {
            this.document_ = e || document
        }, e.dom.DomHelper.prototype.getDocument = function() {
            return this.document_
        }, e.dom.DomHelper.prototype.createElement = function(e) {
            return this.document_.createElement(e)
        }, e.dom.DomHelper.prototype.createDocumentFragment = function() {
            return this.document_.createDocumentFragment()
        }), e.format || (e.format = {
            insertWordBreaks: function(t, r) {
                t += '';
                for (var a = [], o = 0, s = !1, l = !1, _ = 0, d = 0, p = 0, i = t.length, n; p < i; ++p) n = t.charCodeAt(p), _ >= r && 32 != n && (a[o++] = t.substring(d, p), d = p, a[o++] = e.format.WORD_BREAK, _ = 0), s ? 62 == n && (s = !1) : l ? 59 === n ? (l = !1, ++_) : 60 === n ? (l = !1, s = !0) : 32 === n ? (l = !1, _ = 0) : void 0 : 60 === n ? s = !0 : 38 === n ? l = !0 : 32 === n ? _ = 0 : ++_;
                return a[o++] = t.substring(d), a.join('')
            },
            WORD_BREAK: e.userAgent.WEBKIT ? '<wbr></wbr>' : e.userAgent.OPERA ? '&shy;' : e.userAgent.IE ? '&#8203;' : '<wbr>'
        }), e.i18n || (e.i18n = {
            bidi: {}
        }), e.i18n.bidi.IS_RTL = !1, e.i18n.bidi.Dir = {
            LTR: 1,
            RTL: -1,
            NEUTRAL: 0,
            UNKNOWN: 0
        }, e.i18n.bidi.toDir = function(t, i) {
            return 'number' == typeof t ? 0 < t ? e.i18n.bidi.Dir.LTR : 0 > t ? e.i18n.bidi.Dir.RTL : i ? null : e.i18n.bidi.Dir.NEUTRAL : null == t ? null : t ? e.i18n.bidi.Dir.RTL : e.i18n.bidi.Dir.LTR
        }, e.i18n.bidi.estimateDirection = function(t, r) {
            for (var a = 0, o = 0, s = !1, l = n.$$bidiStripHtmlIfNecessary_(t, r).split(n.$$bidiWordSeparatorRe_), _ = 0, i; _ < l.length; _++) i = l[_], n.$$bidiRtlDirCheckRe_.test(i) ? (a++, o++) : n.$$bidiIsRequiredLtrRe_.test(i) ? s = !0 : n.$$bidiLtrCharRe_.test(i) ? o++ : n.$$bidiHasNumeralsRe_.test(i) && (s = !0);
            return 0 == o ? s ? e.i18n.bidi.Dir.LTR : e.i18n.bidi.Dir.NEUTRAL : a / o > n.$$bidiRtlDetectionThreshold_ ? e.i18n.bidi.Dir.RTL : e.i18n.bidi.Dir.LTR
        }, e.i18n.BidiFormatter = function(t) {
            this.dir_ = e.i18n.bidi.toDir(t, !0)
        }, e.i18n.BidiFormatter.prototype.getContextDir = function() {
            return this.dir_
        }, e.i18n.BidiFormatter.prototype.knownDirAttr = function(e) {
            return e && e != this.dir_ ? 0 > e ? 'dir="rtl"' : 'dir="ltr"' : ''
        }, e.i18n.BidiFormatter.prototype.endEdge = function() {
            return 0 > this.dir_ ? 'left' : 'right'
        }, e.i18n.BidiFormatter.prototype.mark = function() {
            return 0 < this.dir_ ? '\u200E' : 0 > this.dir_ ? '\u200F' : ''
        }, e.i18n.BidiFormatter.prototype.markAfterKnownDir = function(t, i, r) {
            return null == t && (t = e.i18n.bidi.estimateDirection(i, r)), 0 < this.dir_ && (0 > t || n.$$bidiIsRtlExitText_(i, r)) ? '\u200E' : 0 > this.dir_ && (0 < t || n.$$bidiIsLtrExitText_(i, r)) ? '\u200F' : ''
        }, e.i18n.BidiFormatter.prototype.spanWrapWithKnownDir = function(t, i) {
            null == t && (t = e.i18n.bidi.estimateDirection(i, !0));
            var r = this.markAfterKnownDir(t, i, !0);
            return 0 < t && 0 >= this.dir_ ? i = '<span dir="ltr">' + i + '</span>' : 0 > t && 0 <= this.dir_ && (i = '<span dir="rtl">' + i + '</span>'), i + r
        }, e.i18n.BidiFormatter.prototype.startEdge = function() {
            return 0 > this.dir_ ? 'right' : 'left'
        }, e.i18n.BidiFormatter.prototype.unicodeWrapWithKnownDir = function(t, i, r) {
            null == t && (t = e.i18n.bidi.estimateDirection(i, r));
            var a = this.markAfterKnownDir(t, i, r);
            return 0 < t && 0 >= this.dir_ ? i = '\u202A' + i + '\u202C' : 0 > t && 0 <= this.dir_ && (i = '\u202B' + i + '\u202C'), i + a
        }, e.string || (e.string = {
            newLineToBr: function(t, i) {
                return t += '', e.string.NEWLINE_TO_BR_RE_.test(t) ? t.replace(/(\r\n|\r|\n)/g, i ? '<br />' : '<br>') : t
            },
            urlEncode: encodeURIComponent,
            NEWLINE_TO_BR_RE_: /[\r\n]/
        }), e.string.StringBuffer = function(t) {
            this.buffer_ = e.userAgent.jscript.HAS_JSCRIPT ? [] : '', null != t && this.append.apply(this, arguments)
        }, e.string.StringBuffer.prototype.bufferLength_ = 0, e.string.StringBuffer.prototype.append = function(t, r) {
            if (e.userAgent.jscript.HAS_JSCRIPT) {
                if (null == r) this.buffer_[this.bufferLength_++] = t;
                else {
                    var a = this.buffer_;
                    a.push.apply(a, arguments), this.bufferLength_ = this.buffer_.length
                }
            } else if (this.buffer_ += t, null != r)
                for (var n = 1; n < arguments.length; n++) this.buffer_ += arguments[n];
            return this
        }, e.string.StringBuffer.prototype.clear = function() {
            e.userAgent.jscript.HAS_JSCRIPT ? (this.buffer_.length = 0, this.bufferLength_ = 0) : this.buffer_ = ''
        }, e.string.StringBuffer.prototype.toString = function() {
            if (e.userAgent.jscript.HAS_JSCRIPT) {
                var t = this.buffer_.join('');
                return this.clear(), t && this.append(t), t
            }
            return this.buffer_
        }, e.soy || (e.soy = {
            renderAsElement: function(e, t, i, r) {
                return n.$$renderWithWrapper_(e, t, r, !0, i)
            },
            renderAsFragment: function(e, t, i, r) {
                return n.$$renderWithWrapper_(e, t, r, !1, i)
            },
            renderElement: function(e, t, i, r) {
                e.innerHTML = t(i, null, r)
            },
            data: {}
        }), e.soy.data.SanitizedContentKind = {
            HTML: e.DEBUG ? {
                sanitizedContentKindHtml: !0
            } : {},
            JS: e.DEBUG ? {
                sanitizedContentJsChars: !0
            } : {},
            JS_STR_CHARS: e.DEBUG ? {
                sanitizedContentJsStrChars: !0
            } : {},
            URI: e.DEBUG ? {
                sanitizedContentUri: !0
            } : {},
            ATTRIBUTES: e.DEBUG ? {
                sanitizedContentHtmlAttribute: !0
            } : {},
            CSS: e.DEBUG ? {
                sanitizedContentCss: !0
            } : {},
            TEXT: e.DEBUG ? {
                sanitizedContentKindText: !0
            } : {}
        }, e.soy.data.SanitizedContent = function() {
            throw Error('Do not instantiate directly')
        }, e.soy.data.SanitizedContent.prototype.contentKind, e.soy.data.SanitizedContent.prototype.contentDir = null, e.soy.data.SanitizedContent.prototype.content, e.soy.data.SanitizedContent.prototype.toString = function() {
            return this.content
        };
        var r = {
                esc: {}
            },
            a = {};
        a.VERY_UNSAFE = {};
        var n = {
            $$DEFAULT_TEMPLATE_DATA_: {}
        };
        n.$$renderWithWrapper_ = function(e, t, i, r, a) {
            var o = i || document,
                s = o.createElement('div');
            if (s.innerHTML = e(t || n.$$DEFAULT_TEMPLATE_DATA_, void 0, a), 1 == s.childNodes.length) {
                var l = s.firstChild;
                if (!r || 1 == l.nodeType) return l
            }
            if (r) return s;
            for (var _ = o.createDocumentFragment(); s.firstChild;) _.appendChild(s.firstChild);
            return _
        }, n.$$bidiStripHtmlIfNecessary_ = function(e, t) {
            return t ? e.replace(n.$$BIDI_HTML_SKIP_RE_, '') : e
        }, n.$$BIDI_HTML_SKIP_RE_ = /<[^>]*>|&[^;]+;/g, n.$$bidiLtrChars_ = 'A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF', n.$$bidiRtlChars_ = '\u0591-\u07FF\u200F\uFB1D-\uFDFF\uFE70-\uFEFC', n.$$bidiRtlDirCheckRe_ = new RegExp('^[^' + n.$$bidiLtrChars_ + ']*[' + n.$$bidiRtlChars_ + ']'), n.$$bidiLtrCharRe_ = new RegExp('[' + n.$$bidiLtrChars_ + ']'), n.$$bidiIsRequiredLtrRe_ = /^http:\/\/.*/, n.$$bidiHasNumeralsRe_ = /\d/, n.$$bidiWordSeparatorRe_ = /\s+/, n.$$bidiRtlDetectionThreshold_ = .4, n.$$bidiLtrExitDirCheckRe_ = new RegExp('[' + n.$$bidiLtrChars_ + '][^' + n.$$bidiRtlChars_ + ']*$'), n.$$bidiRtlExitDirCheckRe_ = new RegExp('[' + n.$$bidiRtlChars_ + '][^' + n.$$bidiLtrChars_ + ']*$'), n.$$bidiIsLtrExitText_ = function(e, t) {
            return e = n.$$bidiStripHtmlIfNecessary_(e, t), n.$$bidiLtrExitDirCheckRe_.test(e)
        }, n.$$bidiIsRtlExitText_ = function(e, t) {
            return e = n.$$bidiStripHtmlIfNecessary_(e, t), n.$$bidiRtlExitDirCheckRe_.test(e)
        }, r.StringBuilder = e.string.StringBuffer, a.SanitizedContentKind = e.soy.data.SanitizedContentKind, a.isContentKind = function(e, t) {
            return null != e && e.contentKind === t
        }, a.getContentDir = function(t) {
            if (null != t) switch (t.contentDir) {
                case e.i18n.bidi.Dir.LTR:
                    return e.i18n.bidi.Dir.LTR;
                case e.i18n.bidi.Dir.RTL:
                    return e.i18n.bidi.Dir.RTL;
                case e.i18n.bidi.Dir.NEUTRAL:
                    return e.i18n.bidi.Dir.NEUTRAL;
            }
            return null
        }, a.SanitizedHtml = function() {
            e.soy.data.SanitizedContent.call(this)
        }, e.inherits(a.SanitizedHtml, e.soy.data.SanitizedContent), a.SanitizedHtml.prototype.contentKind = a.SanitizedContentKind.HTML, a.SanitizedHtml.from = function(t) {
            return null != t && t.contentKind === a.SanitizedContentKind.HTML ? (e.asserts.assert(t.constructor === a.SanitizedHtml), t) : a.VERY_UNSAFE.ordainSanitizedHtml(r.esc.$$escapeHtmlHelper(t + ''), a.getContentDir(t))
        }, a.SanitizedJs = function() {
            e.soy.data.SanitizedContent.call(this)
        }, e.inherits(a.SanitizedJs, e.soy.data.SanitizedContent), a.SanitizedJs.prototype.contentKind = a.SanitizedContentKind.JS, a.SanitizedJs.prototype.contentDir = e.i18n.bidi.Dir.LTR, a.SanitizedJsStrChars = function() {
            e.soy.data.SanitizedContent.call(this)
        }, e.inherits(a.SanitizedJsStrChars, e.soy.data.SanitizedContent), a.SanitizedJsStrChars.prototype.contentKind = a.SanitizedContentKind.JS_STR_CHARS, a.SanitizedUri = function() {
            e.soy.data.SanitizedContent.call(this)
        }, e.inherits(a.SanitizedUri, e.soy.data.SanitizedContent), a.SanitizedUri.prototype.contentKind = a.SanitizedContentKind.URI, a.SanitizedUri.prototype.contentDir = e.i18n.bidi.Dir.LTR, a.SanitizedHtmlAttribute = function() {
            e.soy.data.SanitizedContent.call(this)
        }, e.inherits(a.SanitizedHtmlAttribute, e.soy.data.SanitizedContent), a.SanitizedHtmlAttribute.prototype.contentKind = a.SanitizedContentKind.ATTRIBUTES, a.SanitizedHtmlAttribute.prototype.contentDir = e.i18n.bidi.Dir.LTR, a.SanitizedCss = function() {
            e.soy.data.SanitizedContent.call(this)
        }, e.inherits(a.SanitizedCss, e.soy.data.SanitizedContent), a.SanitizedCss.prototype.contentKind = a.SanitizedContentKind.CSS, a.SanitizedCss.prototype.contentDir = e.i18n.bidi.Dir.LTR, a.UnsanitizedText = function(e, t) {
            this.content = e + '', this.contentDir = null == t ? null : t
        }, e.inherits(a.UnsanitizedText, e.soy.data.SanitizedContent), a.UnsanitizedText.prototype.contentKind = a.SanitizedContentKind.TEXT, a.$$EMPTY_STRING_ = {
            VALUE: ''
        }, a.$$makeSanitizedContentFactory_ = function(e) {
            function t() {}
            return t.prototype = e.prototype,
                function(e, i) {
                    var r = new t;
                    return r.content = e + '', void 0 !== i && (r.contentDir = i), r
                }
        }, a.$$makeSanitizedContentFactoryWithDefaultDirOnly_ = function(e) {
            function t() {}
            return t.prototype = e.prototype,
                function(e) {
                    var i = new t;
                    return i.content = e + '', i
                }
        }, a.markUnsanitizedText = function(e, t) {
            return new a.UnsanitizedText(e, t)
        }, a.VERY_UNSAFE.ordainSanitizedHtml = a.$$makeSanitizedContentFactory_(a.SanitizedHtml), a.VERY_UNSAFE.ordainSanitizedJs = a.$$makeSanitizedContentFactoryWithDefaultDirOnly_(a.SanitizedJs), a.VERY_UNSAFE.ordainSanitizedJsStrChars = a.$$makeSanitizedContentFactory_(a.SanitizedJsStrChars), a.VERY_UNSAFE.ordainSanitizedUri = a.$$makeSanitizedContentFactoryWithDefaultDirOnly_(a.SanitizedUri), a.VERY_UNSAFE.ordainSanitizedHtmlAttribute = a.$$makeSanitizedContentFactoryWithDefaultDirOnly_(a.SanitizedHtmlAttribute), a.VERY_UNSAFE.ordainSanitizedCss = a.$$makeSanitizedContentFactoryWithDefaultDirOnly_(a.SanitizedCss), r.renderElement = e.soy.renderElement, r.renderAsFragment = function(t, i, r, a) {
            return e.soy.renderAsFragment(t, i, a, new e.dom.DomHelper(r))
        }, r.renderAsElement = function(t, i, r, a) {
            return e.soy.renderAsElement(t, i, a, new e.dom.DomHelper(r))
        }, r.$$IS_LOCALE_RTL = e.i18n.bidi.IS_RTL, r.$$augmentMap = function(e, t) {
            function i() {}
            i.prototype = e;
            var r = new i;
            for (var a in t) r[a] = t[a];
            return r
        }, r.$$checkMapKey = function(e) {
            if ('string' != typeof e) throw Error('Map literal\'s key expression must evaluate to string (encountered type "' + i(e) + '").');
            return e
        }, r.$$getMapKeys = function(e) {
            var t = [];
            for (var i in e) t.push(i);
            return t
        }, r.$$getDelTemplateId = function(e) {
            return e
        }, r.$$DELEGATE_REGISTRY_PRIORITIES_ = {}, r.$$DELEGATE_REGISTRY_FUNCTIONS_ = {}, r.$$registerDelegateFn = function(e, t, i, a) {
            var n = 'key_' + e + ':' + t,
                o = r.$$DELEGATE_REGISTRY_PRIORITIES_[n];
            if (o === void 0 || i > o) r.$$DELEGATE_REGISTRY_PRIORITIES_[n] = i, r.$$DELEGATE_REGISTRY_FUNCTIONS_[n] = a;
            else if (i == o) throw Error('Encountered two active delegates with the same priority ("' + e + ':' + t + '").');
            else;
        }, r.$$getDelegateFn = function(e, t, i) {
            var a = r.$$DELEGATE_REGISTRY_FUNCTIONS_['key_' + e + ':' + t];
            if (a || '' == t || (a = r.$$DELEGATE_REGISTRY_FUNCTIONS_['key_' + e + ':']), a) return a;
            if (i) return r.$$EMPTY_TEMPLATE_FN_;
            throw Error('Found no active impl for delegate call to "' + e + ':' + t + '" (and not allowemptydefault="true").')
        }, r.$$EMPTY_TEMPLATE_FN_ = function() {
            return ''
        }, a.$$makeSanitizedContentFactoryForInternalBlocks_ = function(e) {
            function t() {}
            return t.prototype = e.prototype,
                function(e, i) {
                    if (!(e + '')) return a.$$EMPTY_STRING_.VALUE;
                    var r = new t;
                    return r.content = e + '', void 0 !== i && (r.contentDir = i), r
                }
        }, a.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_ = function(e) {
            function t() {}
            return t.prototype = e.prototype,
                function(e) {
                    if (!(e + '')) return a.$$EMPTY_STRING_.VALUE;
                    var i = new t;
                    return i.content = e + '', i
                }
        }, a.$$markUnsanitizedTextForInternalBlocks = function(e, t) {
            var i = e + '';
            return i ? new a.UnsanitizedText(i, t) : a.$$EMPTY_STRING_.VALUE
        }, a.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks = a.$$makeSanitizedContentFactoryForInternalBlocks_(a.SanitizedHtml), a.VERY_UNSAFE.$$ordainSanitizedJsForInternalBlocks = a.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_(a.SanitizedJs), a.VERY_UNSAFE.$$ordainSanitizedUriForInternalBlocks = a.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_(a.SanitizedUri), a.VERY_UNSAFE.$$ordainSanitizedAttributesForInternalBlocks = a.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_(a.SanitizedHtmlAttribute), a.VERY_UNSAFE.$$ordainSanitizedCssForInternalBlocks = a.$$makeSanitizedContentFactoryWithDefaultDirOnlyForInternalBlocks_(a.SanitizedCss), r.$$escapeHtml = function(e) {
            return a.SanitizedHtml.from(e)
        }, r.$$cleanHtml = function(t) {
            return a.isContentKind(t, a.SanitizedContentKind.HTML) ? (e.asserts.assert(t.constructor === a.SanitizedHtml), t) : a.VERY_UNSAFE.ordainSanitizedHtml(r.$$stripHtmlTags(t, r.esc.$$SAFE_TAG_WHITELIST_), a.getContentDir(t))
        }, r.$$escapeHtmlRcdata = function(t) {
            return a.isContentKind(t, a.SanitizedContentKind.HTML) ? (e.asserts.assert(t.constructor === a.SanitizedHtml), r.esc.$$normalizeHtmlHelper(t.content)) : r.esc.$$escapeHtmlHelper(t)
        }, r.$$HTML5_VOID_ELEMENTS_ = /^<(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\b/, r.$$stripHtmlTags = function(e, t) {
            if (!t) return (e + '').replace(r.esc.$$HTML_TAG_REGEX_, '').replace(r.esc.$$LT_REGEX_, '&lt;');
            var i = (e + '').replace(/\[/g, '&#91;'),
                a = [];
            i = i.replace(r.esc.$$HTML_TAG_REGEX_, function(e, i) {
                if (i && (i = i.toLowerCase(), t.hasOwnProperty(i) && t[i])) {
                    var r = '/' === e.charAt(1) ? '</' : '<',
                        n = a.length;
                    return a[n] = r + i + '>', '[' + n + ']'
                }
                return ''
            }), i = r.esc.$$normalizeHtmlHelper(i);
            var n = r.$$balanceTags_(a);
            return i = i.replace(/\[(\d+)\]/g, function(e, t) {
                return a[t]
            }), i + n
        }, r.$$balanceTags_ = function(e) {
            for (var t = [], a = 0, i = e.length, n; a < i; ++a)
                if (n = e[a], '/' === n.charAt(1)) {
                    for (var o = t.length - 1; 0 <= o && t[o] != n;) o--;
                    0 > o ? e[a] = '' : (e[a] = t.slice(o).reverse().join(''), t.length = o)
                } else r.$$HTML5_VOID_ELEMENTS_.test(n) || t.push('</' + n.substring(1));
            return t.reverse().join('')
        }, r.$$escapeHtmlAttribute = function(t) {
            return a.isContentKind(t, a.SanitizedContentKind.HTML) ? (e.asserts.assert(t.constructor === a.SanitizedHtml), r.esc.$$normalizeHtmlHelper(r.$$stripHtmlTags(t.content))) : r.esc.$$escapeHtmlHelper(t)
        }, r.$$escapeHtmlAttributeNospace = function(t) {
            return a.isContentKind(t, a.SanitizedContentKind.HTML) ? (e.asserts.assert(t.constructor === a.SanitizedHtml), r.esc.$$normalizeHtmlNospaceHelper(r.$$stripHtmlTags(t.content))) : r.esc.$$escapeHtmlNospaceHelper(t)
        }, r.$$filterHtmlAttributes = function(t) {
            return a.isContentKind(t, a.SanitizedContentKind.ATTRIBUTES) ? (e.asserts.assert(t.constructor === a.SanitizedHtmlAttribute), t.content.replace(/([^"'\s])$/, '$1 ')) : r.esc.$$filterHtmlAttributesHelper(t)
        }, r.$$filterHtmlElementName = function(e) {
            return r.esc.$$filterHtmlElementNameHelper(e)
        }, r.$$escapeJs = function(e) {
            return r.$$escapeJsString(e)
        }, r.$$escapeJsString = function(t) {
            return a.isContentKind(t, a.SanitizedContentKind.JS_STR_CHARS) ? (e.asserts.assert(t.constructor === a.SanitizedJsStrChars), t.content) : r.esc.$$escapeJsStringHelper(t)
        }, r.$$escapeJsValue = function(t) {
            if (null == t) return ' null ';
            if (a.isContentKind(t, a.SanitizedContentKind.JS)) return e.asserts.assert(t.constructor === a.SanitizedJs), t.content;
            switch (i(t)) {
                case 'boolean':
                case 'number':
                    return ' ' + t + ' ';
                default:
                    return '\'' + r.esc.$$escapeJsStringHelper(t + '') + '\'';
            }
        }, r.$$escapeJsRegex = function(e) {
            return r.esc.$$escapeJsRegexHelper(e)
        }, r.$$problematicUriMarks_ = /['()]/g, r.$$pctEncode_ = function(e) {
            return '%' + e.charCodeAt(0).toString(16)
        }, r.$$escapeUri = function(t) {
            if (a.isContentKind(t, a.SanitizedContentKind.URI)) return e.asserts.assert(t.constructor === a.SanitizedUri), r.$$normalizeUri(t);
            var i = r.esc.$$escapeUriHelper(t);
            return r.$$problematicUriMarks_.lastIndex = 0, r.$$problematicUriMarks_.test(i) ? i.replace(r.$$problematicUriMarks_, r.$$pctEncode_) : i
        }, r.$$normalizeUri = function(e) {
            return r.esc.$$normalizeUriHelper(e)
        }, r.$$filterNormalizeUri = function(t) {
            return a.isContentKind(t, a.SanitizedContentKind.URI) ? (e.asserts.assert(t.constructor === a.SanitizedUri), r.$$normalizeUri(t)) : r.esc.$$filterNormalizeUriHelper(t)
        }, r.$$filterImageDataUri = function(e) {
            return a.VERY_UNSAFE.ordainSanitizedUri(r.esc.$$filterImageDataUriHelper(e))
        }, r.$$escapeCssString = function(e) {
            return r.esc.$$escapeCssStringHelper(e)
        }, r.$$filterCssValue = function(t) {
            return a.isContentKind(t, a.SanitizedContentKind.CSS) ? (e.asserts.assert(t.constructor === a.SanitizedCss), t.content) : null == t ? '' : r.esc.$$filterCssValueHelper(t)
        }, r.$$filterNoAutoescape = function(t) {
            return a.isContentKind(t, a.SanitizedContentKind.TEXT) ? (e.asserts.fail('Tainted SanitizedContentKind.TEXT for |noAutoescape: `%s`', [t.content]), 'zSoyz') : t
        }, r.$$changeNewlineToBr = function(t) {
            var i = e.string.newLineToBr(t + '', !1);
            return a.isContentKind(t, a.SanitizedContentKind.HTML) ? a.VERY_UNSAFE.ordainSanitizedHtml(i, a.getContentDir(t)) : i
        }, r.$$insertWordBreaks = function(t, i) {
            var r = e.format.insertWordBreaks(t + '', i);
            return a.isContentKind(t, a.SanitizedContentKind.HTML) ? a.VERY_UNSAFE.ordainSanitizedHtml(r, a.getContentDir(t)) : r
        }, r.$$truncate = function(e, t, i) {
            return (e += '', e.length <= t) ? e : (i && (3 < t ? t -= 3 : i = !1), r.$$isHighSurrogate_(e.charAt(t - 1)) && r.$$isLowSurrogate_(e.charAt(t)) && (t -= 1), e = e.substring(0, t), i && (e += '...'), e)
        }, r.$$isHighSurrogate_ = function(e) {
            return 55296 <= e && 56319 >= e
        }, r.$$isLowSurrogate_ = function(e) {
            return 56320 <= e && 57343 >= e
        }, r.$$bidiFormatterCache_ = {}, r.$$getBidiFormatterInstance_ = function(t) {
            return r.$$bidiFormatterCache_[t] || (r.$$bidiFormatterCache_[t] = new e.i18n.BidiFormatter(t))
        }, r.$$bidiTextDir = function(t, i) {
            var r = a.getContentDir(t);
            if (null != r) return r;
            var n = i || a.isContentKind(t, a.SanitizedContentKind.HTML);
            return e.i18n.bidi.estimateDirection(t + '', n)
        }, r.$$bidiDirAttr = function(t, i, n) {
            var o = r.$$getBidiFormatterInstance_(t),
                s = a.getContentDir(i);
            if (null == s) {
                var l = n || a.isContentKind(i, a.SanitizedContentKind.HTML);
                s = e.i18n.bidi.estimateDirection(i + '', l)
            }
            return a.VERY_UNSAFE.ordainSanitizedHtmlAttribute(o.knownDirAttr(s))
        }, r.$$bidiMarkAfter = function(e, t, i) {
            var n = r.$$getBidiFormatterInstance_(e),
                o = i || a.isContentKind(t, a.SanitizedContentKind.HTML);
            return n.markAfterKnownDir(a.getContentDir(t), t + '', o)
        }, r.$$bidiSpanWrap = function(e, t) {
            var i = r.$$getBidiFormatterInstance_(e),
                n = i.spanWrapWithKnownDir(a.getContentDir(t), t + '', !0);
            return n
        }, r.$$bidiUnicodeWrap = function(e, t) {
            var i = r.$$getBidiFormatterInstance_(e),
                n = a.isContentKind(t, a.SanitizedContentKind.HTML),
                o = i.unicodeWrapWithKnownDir(a.getContentDir(t), t + '', n),
                s = i.getContextDir();
            return a.isContentKind(t, a.SanitizedContentKind.TEXT) ? new a.UnsanitizedText(o, s) : n ? a.VERY_UNSAFE.ordainSanitizedHtml(o, s) : a.isContentKind(t, a.SanitizedContentKind.JS_STR_CHARS) ? a.VERY_UNSAFE.ordainSanitizedJsStrChars(o, s) : o
        }, r.esc.$$escapeUriHelper = function(e) {
            return encodeURIComponent(e + '')
        }, r.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_ = {
            " ": '&#0;',
            '"': '&quot;',
            "&": '&amp;',
            "'": '&#39;',
            "<": '&lt;',
            ">": '&gt;',
            "	": '&#9;',
            "\n": '&#10;',
            "": '&#11;',
            "": '&#12;',
            "\r": '&#13;',
            " ": '&#32;',
            "-": '&#45;',
            "/": '&#47;',
            "=": '&#61;',
            "`": '&#96;',
            "": '&#133;',
            " ": '&#160;',
            "\u2028": '&#8232;',
            "\u2029": '&#8233;'
        }, r.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_ = function(e) {
            return r.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_[e]
        }, r.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_ = {
            " ": '\\x00',
            "": '\\x08',
            "	": '\\t',
            "\n": '\\n',
            "": '\\x0b',
            "": '\\f',
            "\r": '\\r',
            '"': '\\x22',
            "&": '\\x26',
            "'": '\\x27',
            "/": '\\/',
            "<": '\\x3c',
            "=": '\\x3d',
            ">": '\\x3e',
            "\\": '\\\\',
            "": '\\x85',
            "\u2028": '\\u2028',
            "\u2029": '\\u2029',
            $: '\\x24',
            "(": '\\x28',
            ")": '\\x29',
            "*": '\\x2a',
            "+": '\\x2b',
            ",": '\\x2c',
            "-": '\\x2d',
            ".": '\\x2e',
            ":": '\\x3a',
            "?": '\\x3f',
            "[": '\\x5b',
            "]": '\\x5d',
            "^": '\\x5e',
            "{": '\\x7b',
            "|": '\\x7c',
            "}": '\\x7d'
        }, r.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_ = function(e) {
            return r.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_[e]
        }, r.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_ = {
            " ": '\\0 ',
            "": '\\8 ',
            "	": '\\9 ',
            "\n": '\\a ',
            "": '\\b ',
            "": '\\c ',
            "\r": '\\d ',
            '"': '\\22 ',
            "&": '\\26 ',
            "'": '\\27 ',
            "(": '\\28 ',
            ")": '\\29 ',
            "*": '\\2a ',
            "/": '\\2f ',
            ":": '\\3a ',
            ";": '\\3b ',
            "<": '\\3c ',
            "=": '\\3d ',
            ">": '\\3e ',
            "@": '\\40 ',
            "\\": '\\5c ',
            "{": '\\7b ',
            "}": '\\7d ',
            "": '\\85 ',
            " ": '\\a0 ',
            "\u2028": '\\2028 ',
            "\u2029": '\\2029 '
        }, r.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_ = function(e) {
            return r.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_[e]
        }, r.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = {
            " ": '%00',
            "": '%01',
            "": '%02',
            "": '%03',
            "": '%04',
            "": '%05',
            "": '%06',
            "": '%07',
            "": '%08',
            "	": '%09',
            "\n": '%0A',
            "": '%0B',
            "": '%0C',
            "\r": '%0D',
            "": '%0E',
            "": '%0F',
            "": '%10',
            "": '%11',
            "": '%12',
            "": '%13',
            "": '%14',
            "": '%15',
            "": '%16',
            "": '%17',
            "": '%18',
            "": '%19',
            "": '%1A',
            "": '%1B',
            "": '%1C',
            "": '%1D',
            "": '%1E',
            "": '%1F',
            " ": '%20',
            '"': '%22',
            "'": '%27',
            "(": '%28',
            ")": '%29',
            "<": '%3C',
            ">": '%3E',
            "\\": '%5C',
            "{": '%7B',
            "}": '%7D',
            "": '%7F',
            "": '%C2%85',
            " ": '%C2%A0',
            "\u2028": '%E2%80%A8',
            "\u2029": '%E2%80%A9',
            "！": '%EF%BC%81',
            "＃": '%EF%BC%83',
            "＄": '%EF%BC%84',
            "＆": '%EF%BC%86',
            "＇": '%EF%BC%87',
            "（": '%EF%BC%88',
            "）": '%EF%BC%89',
            "＊": '%EF%BC%8A',
            "＋": '%EF%BC%8B',
            "，": '%EF%BC%8C',
            "／": '%EF%BC%8F',
            "：": '%EF%BC%9A',
            "；": '%EF%BC%9B',
            "＝": '%EF%BC%9D',
            "？": '%EF%BC%9F',
            "＠": '%EF%BC%A0',
            "［": '%EF%BC%BB',
            "］": '%EF%BC%BD'
        }, r.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = function(e) {
            return r.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_[e]
        }, r.esc.$$MATCHER_FOR_ESCAPE_HTML_ = /[\x00\x22\x26\x27\x3c\x3e]/g, r.esc.$$MATCHER_FOR_NORMALIZE_HTML_ = /[\x00\x22\x27\x3c\x3e]/g, r.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_ = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g, r.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_ = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g, r.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_ = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g, r.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_ = /[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g, r.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_ = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g, r.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, r.esc.$$FILTER_FOR_FILTER_CSS_VALUE_ = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i, r.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_ = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i, r.esc.$$FILTER_FOR_FILTER_IMAGE_DATA_URI_ = /^data:image\/(?:bmp|gif|jpe?g|png|tiff|webp);base64,[a-z0-9+\/]+=*$/i, r.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTES_ = /^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i, r.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_ = /^(?!script|style|title|textarea|xmp|no)[a-z0-9_$:-]*$/i, r.esc.$$escapeHtmlHelper = function(e) {
            return (e + '').replace(r.esc.$$MATCHER_FOR_ESCAPE_HTML_, r.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
        }, r.esc.$$normalizeHtmlHelper = function(e) {
            return (e + '').replace(r.esc.$$MATCHER_FOR_NORMALIZE_HTML_, r.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
        }, r.esc.$$escapeHtmlNospaceHelper = function(e) {
            return (e + '').replace(r.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_, r.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
        }, r.esc.$$normalizeHtmlNospaceHelper = function(e) {
            return (e + '').replace(r.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_, r.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
        }, r.esc.$$escapeJsStringHelper = function(e) {
            return (e + '').replace(r.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_, r.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)
        }, r.esc.$$escapeJsRegexHelper = function(e) {
            return (e + '').replace(r.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_, r.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)
        }, r.esc.$$escapeCssStringHelper = function(e) {
            return (e + '').replace(r.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_, r.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_)
        }, r.esc.$$filterCssValueHelper = function(e) {
            var t = e + '';
            return r.esc.$$FILTER_FOR_FILTER_CSS_VALUE_.test(t) ? t : 'zSoyz'
        }, r.esc.$$normalizeUriHelper = function(e) {
            return (e + '').replace(r.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_, r.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_)
        }, r.esc.$$filterNormalizeUriHelper = function(e) {
            var t = e + '';
            return r.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_.test(t) ? t.replace(r.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_, r.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_) : '#zSoyz'
        }, r.esc.$$filterImageDataUriHelper = function(e) {
            var t = e + '';
            return r.esc.$$FILTER_FOR_FILTER_IMAGE_DATA_URI_.test(t) ? t : 'data:image/gif;base64,zSoyz'
        }, r.esc.$$filterHtmlAttributesHelper = function(e) {
            var t = e + '';
            return r.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTES_.test(t) ? t : 'zSoyz'
        }, r.esc.$$filterHtmlElementNameHelper = function(e) {
            var t = e + '';
            return r.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_.test(t) ? t : 'zSoyz'
        }, r.esc.$$HTML_TAG_REGEX_ = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, r.esc.$$LT_REGEX_ = /</g, r.esc.$$SAFE_TAG_WHITELIST_ = {
            b: 1,
            br: 1,
            em: 1,
            i: 1,
            s: 1,
            sub: 1,
            sup: 1,
            u: 1
        }, t.soy = r, t.goog = e
    }).call(window)
}, function(e, t, i) {
    (function(t, i) {
        if (window.templates = window.templates || {}, 'undefined' == typeof r) var r = {};
        r.button = function(e) {
            return '<div class="fake-bar-outer"><div class="fake-bar-inner"><div class="wiper-bg" style="background-color: ' + t.$$escapeHtml(e.mobile.primaryColor) + '"></div><div class="pseudo-header"><div class="container"><div class="svg-wrapper">' + r.svgFoursquareLogo(null) + '</div></div></div></div></div><span class="hammy-divider"></span><span class="hammy-wrapper-mobile"><div class="hammy"><span></span><span></span><span></span></div><div class="mobile-close"><span><span></span><span></span></span></div></span>'
        }, i.DEBUG && (r.button.soyTemplateName = 'templates.button'), r.nav = function(e) {
            return '<div class="global-els"><div class="loader-mask"></div>' + r.desktopNav({
                desktopConfig: e.desktop
            }) + r.mobileNav({
                mobileConfig: e.mobile
            }) + '</div>'
        }, i.DEBUG && (r.nav.soyTemplateName = 'templates.nav'), r.desktopNav = function(e) {
            return '<div class="offcanvas-nav" data-orig-bgcolor="' + t.$$escapeHtml(e.desktopConfig.defaultPrimaryColor) + '"><div class="wiper-outer"><div class="wiper-inner"><div class="wiper-bg" style="background-color: ' + t.$$escapeHtml(e.desktopConfig.defaultPrimaryColor) + '"></div><div class="pseudo-header"><div class="container"><h1>' + r.svgFoursquareLogo(null) + '</h1><div class="close"><span></span><span></span></div></div></div></div></div><div class="tender-renders"></div><div class="container"><div class="mega-links">' + r.desktopPrimaryLinks({
                links: e.desktopConfig.primary
            }) + '</div><div class="micro-links"><div class="p-holder">' + r.desktopBlurbs({
                defaultBlurb: e.desktopConfig.blurb,
                primaryLinks: e.desktopConfig.primary
            }) + '</div><span class="micro-divider" style="background-color: ' + t.$$escapeHtml(e.desktopConfig.defaultSecondaryColor) + '" data-orig-line-color="' + t.$$escapeHtml(e.desktopConfig.defaultSecondaryColor) + '"></span>' + r.desktopSecondaryLinks({
                links: e.desktopConfig.secondary
            }) + '</div></div></div>'
        }, i.DEBUG && (r.desktopNav.soyTemplateName = 'templates.desktopNav'), r.desktopBlurbs = function(e) {
            for (var i = '<p class="active">' + t.$$escapeHtml(e.defaultBlurb) + '</p>', r = e.primaryLinks, a = r.length, n = 0, o; n < a; n++) o = r[n], i += '<p class="">' + t.$$escapeHtml(o.blurb) + '</p>';
            return i
        }, i.DEBUG && (r.desktopBlurbs.soyTemplateName = 'templates.desktopBlurbs'), r.desktopPrimaryLinks = function(e) {
            for (var i = '', a = e.links, n = a.length, o = 0, s; o < n; o++) s = a[o], i += '<a href="' + t.$$escapeHtml(s.url) + '" data-color="' + t.$$escapeHtml(s.primaryColor) + '" data-secondary-color="' + t.$$escapeHtml(s.secondaryColor) + '"><span>' + t.$$escapeHtml(s.text) + '</span>' + r.svgGoArrow(null) + '</a>';
            return i
        }, i.DEBUG && (r.desktopPrimaryLinks.soyTemplateName = 'templates.desktopPrimaryLinks'), r.desktopSecondaryLinks = function(e) {
            for (var i = '', r = e.links, a = r.length, n = 0, o; n < a; n++) o = r[n], i += '<a href="' + t.$$escapeHtml(o.url) + '">' + t.$$escapeHtml(o.text) + '</a>';
            return i
        }, i.DEBUG && (r.desktopSecondaryLinks.soyTemplateName = 'templates.desktopSecondaryLinks'), r.svgFoursquareLogo = function() {
            return '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 141 17" style="enable-background:new 0 0 141 17;" xml:space="preserve"><path id="Fill-1" class="pseudo-logo-letter" d="M34.5,11.2c-1.3,0-1.9-0.7-1.9-2V1c0-0.2-0.2-0.4-0.4-0.4h-3.5c-0.2,0-0.4,0.2-0.4,0.4v9 c0,2.8,2.1,5,6,5c3.9,0,6.1-2.2,6.1-5V1c0-0.2-0.2-0.4-0.4-0.4h-3.5c-0.2,0-0.4,0.2-0.4,0.4v8.2C36.4,10.5,35.8,11.2,34.5,11.2"></path><path id="Fill-2" class="pseudo-logo-letter" d="M61.8,5.5C61.1,5.2,61,4.9,61,4.6c0-0.4,0.4-0.7,1.1-0.7c0.8,0,1.9,0.2,3,1c0.2,0.1,0.4,0.1,0.5,0 l1.9-2.3c0.1-0.1,0.1-0.4,0-0.5c-1.6-1.3-3.6-1.7-5.4-1.7c-3.5,0-5.6,2.1-5.6,4.3c0,1.8,1.1,3.4,3.4,4.1L62,9.5 c1.1,0.3,1.2,0.6,1.2,1c0,0.4-0.4,0.8-1.3,0.8c-1.2,0-2.6-0.7-3.5-1.4c-0.2-0.1-0.4-0.1-0.5,0L56,12.4c-0.1,0.1-0.1,0.4,0,0.5 c1.4,1.2,3.5,2,6.1,2c3.3,0,5.7-1.8,5.7-4.5c0-1.9-1.2-3.3-3.5-4.1L61.8,5.5"></path><path id="Fill-3" class="pseudo-logo-letter" d="M92.3,11.2c-1.3,0-1.9-0.7-1.9-2V1c0-0.2-0.2-0.4-0.4-0.4h-3.5c-0.2,0-0.4,0.2-0.4,0.4v9 c0,2.8,2.1,5,6,5c3.9,0,6.1-2.2,6.1-5V1c0-0.2-0.2-0.4-0.4-0.4h-3.5c-0.2,0-0.4,0.2-0.4,0.4v8.2C94.2,10.5,93.6,11.2,92.3,11.2"></path><path id="Fill-5" class="pseudo-logo-letter" d="M137.8,9.5c0.2,0,0.4-0.2,0.5-0.4l0.7-3c0-0.2-0.1-0.4-0.3-0.4h-5.2V4.1h5.7c0.2,0,0.4-0.2,0.5-0.4 l0.6-2.8c0-0.2-0.1-0.4-0.3-0.4h-10.3c-0.2,0-0.4,0.2-0.4,0.4c0,0,0,13.3,0,13.3c0,0.1,0.1,0.4,0.4,0.4c1.6,0,7.7,0,9.2,0 c0.2,0,0.4-0.2,0.5-0.4l0.6-2.8c0-0.2-0.1-0.4-0.3-0.4h-6.2V9.5H137.8"></path><path id="Fill-7" class="pseudo-logo-letter" d="M48.9,6.6h-2.2V4.1h2.2c1.2,0,1.7,0.5,1.7,1.2C50.6,6.1,50.1,6.6,48.9,6.6z M49.3,0.6h-6.4 c-0.2,0-0.4,0.2-0.4,0.4v13.3c0,0.2,0.2,0.4,0.4,0.4h3.5c0.2,0,0.4-0.2,0.4-0.4V10h1.4l2.4,4.4c0.1,0.2,0.4,0.3,0.6,0.3h4 c0.2,0,0.3-0.1,0.2-0.3l-3-4.9c1.8-0.8,2.7-2.2,2.7-4.1C54.9,2.8,52.8,0.6,49.3,0.6z"></path><path id="Fill-8" class="pseudo-logo-letter" d="M121.1,6.6h-2.2V4.1h2.2c1.2,0,1.7,0.5,1.7,1.2C122.8,6.1,122.3,6.6,121.1,6.6z M121.4,0.6H115 c-0.2,0-0.4,0.2-0.4,0.4v13.3c0,0.2,0.2,0.4,0.4,0.4h3.5c0.2,0,0.4-0.2,0.4-0.4V10h1.4l2.4,4.4c0.1,0.2,0.4,0.3,0.6,0.3h4 c0.2,0,0.3-0.1,0.2-0.3l-3-4.9c1.8-0.8,2.7-2.2,2.7-4.1C127.1,2.8,125,0.6,121.4,0.6z"></path><path id="Fill-9" class="pseudo-logo-letter" d="M0.4,14.7h3.4c0.2,0,0.4-0.2,0.4-0.4V10h4.3c0.2,0,0.4-0.2,0.5-0.4l0.7-3c0-0.2-0.1-0.4-0.3-0.4 H4.2V4.2h5.7c0.2,0,0.4-0.2,0.5-0.4L10.9,1c0-0.2-0.1-0.5-0.3-0.5H0.4C0.2,0.6,0,0.9,0,1.1v13.2C0,14.5,0.2,14.7,0.4,14.7"></path><path id="Fill-10" class="pseudo-logo-letter" d="M104.7,8.6l1.4-4.3l1.4,4.3h-1.4L104.7,8.6z M103.4,0.9l-4.2,13.4c-0.1,0.2,0.1,0.3,0.3,0.3h3.8 c0.2,0,0.4-0.2,0.4-0.3l0.6-2h3.8l0.7,2c0.1,0.2,0.3,0.3,0.5,0.3h3.8c0.2,0,0.3-0.2,0.3-0.3l-4.2-13.4c-0.1-0.2-0.3-0.3-0.5-0.3 h-4.6C103.6,0.6,103.4,0.7,103.4,0.9z"></path><path id="Fill-12" class="pseudo-logo-letter" d="M21.2,10.2c-1.3,1.4-3.6,1.1-4.6-0.4c-1-1.5-0.9-3.7,0.3-5c1.2-1.3,3.5-1.2,4.6,0.3 C22.6,6.6,22.5,8.9,21.2,10.2C20.7,10.8,21.9,9.6,21.2,10.2z M24.8,12.7c2-2.1,2.6-5.1,1.6-7.8c-1-2.7-3.7-4.6-6.7-4.8 c-3-0.2-6,1.2-7.5,3.7c-1.5,2.7-1.2,6.2,0.8,8.5C16,15.7,21.7,15.8,24.8,12.7z"></path><path id="Fill-13" class="pseudo-logo-letter" d="M74.2,9.9c-1-1.5-0.9-3.7,0.3-5c1.2-1.3,3.5-1.2,4.6,0.3c1.1,1.5,1,3.8-0.3,5.1 C77.5,11.7,75.2,11.4,74.2,9.9z M82,13.1c0.1-0.1,0.3-0.2,0.4-0.4c2-2.1,2.6-5.1,1.6-7.8c-1-2.7-3.7-4.6-6.7-4.8 c-3-0.2-6,1.2-7.5,3.7c-1.5,2.7-1.2,6.2,0.8,8.5c1.8,2,4.7,2.9,7.3,2.5c0,0,0,0,0,0c0,0,0,0,0,0c1.4,1.3,3.8,2.1,5.9,2.1l0.8-3.9 c0-0.1-0.1-0.3-0.3-0.2C84,13.1,83.1,13.3,82,13.1z"></path></svg>'
        }, i.DEBUG && (r.svgFoursquareLogo.soyTemplateName = 'templates.svgFoursquareLogo'), r.mobileNav = function(e) {
            for (var t = '<div class="mobile-offcanvas-nav"><div class="item-wrapper">', i = e.mobileConfig.items, a = i.length, n = 0, o; n < a; n++) switch (o = i[n], o.type) {
                case 'section':
                    t += r.mobileTopLevelSection({
                        item: o
                    });
                    break;
                case 'link':
                    t += r.mobileTopLevelLink({
                        item: o
                    });
                    break;
                case 'button':
                    t += r.mobileTopLevelButton({
                        item: o,
                        mobileConfig: e.mobileConfig
                    });
                    break;
                default:
                    t += r.mobileUnexpectedItem({
                        item: o
                    });
            }
            return t += '</div><div class="flexible-mask"></div></div>', t
        }, i.DEBUG && (r.mobileNav.soyTemplateName = 'templates.mobileNav'), r.mobileTopLevelSection = function(e) {
            for (var i = '<div class="item drawer"><span>' + t.$$escapeHtml(e.item.title) + r.svgCaretDown(null) + '</span><div class="drawer-items parent">', a = e.item.items, n = a.length, o = 0, s; o < n; o++) switch (s = a[o], s.type) {
                case 'section':
                    i += r.mobileSecondLevelSection({
                        item: s
                    });
                    break;
                case 'link':
                    i += r.mobileSecondLevelLink({
                        item: s
                    });
                    break;
                default:
                    i += r.mobileUnexpectedItem({
                        item: s
                    });
            }
            return i += '</div></div>', i
        }, i.DEBUG && (r.mobileTopLevelSection.soyTemplateName = 'templates.mobileTopLevelSection'), r.mobileSecondLevelSection = function(e) {
            for (var i = '<div class="drawer stagger"><span>' + t.$$escapeHtml(e.item.title) + r.svgCaretDown(null) + '</span><div class="drawer-items child">', a = e.item.items, n = a.length, o = 0, s; o < n; o++) switch (s = a[o], s.type) {
                case 'link':
                    i += r.mobileThirdLevelLink({
                        item: s
                    });
                    break;
                default:
                    i += r.mobileUnexpectedItem({
                        item: s
                    });
            }
            return i += '</div></div>', i
        }, i.DEBUG && (r.mobileSecondLevelSection.soyTemplateName = 'templates.mobileSecondLevelSection'), r.mobileTopLevelLink = function(e) {
            return '<a href="' + t.$$escapeHtml(e.item.url) + '" class="item direct"><span>' + t.$$escapeHtml(e.item.text) + '</span></a>'
        }, i.DEBUG && (r.mobileTopLevelLink.soyTemplateName = 'templates.mobileTopLevelLink'), r.mobileSecondLevelLink = function(e) {
            return '<a href="' + t.$$escapeHtml(e.item.url) + '" class="offsite stagger"><span>' + t.$$escapeHtml(e.item.text) + '</span></a>'
        }, i.DEBUG && (r.mobileSecondLevelLink.soyTemplateName = 'templates.mobileSecondLevelLink'), r.mobileThirdLevelLink = function(e) {
            return '<a href="' + t.$$escapeHtml(e.item.url) + '" class="stagger-child"><span>' + t.$$escapeHtml(e.item.text) + '</span></a>'
        }, i.DEBUG && (r.mobileThirdLevelLink.soyTemplateName = 'templates.mobileThirdLevelLink'), r.mobileUnexpectedItem = function(e) {
            return '<!-- UNEXPECTED ITEM: ' + t.$$escapeHtml(e.item.type) + ' -->'
        }, i.DEBUG && (r.mobileUnexpectedItem.soyTemplateName = 'templates.mobileUnexpectedItem'), r.mobileTopLevelButton = function(e) {
            return '<a href="' + t.$$escapeHtml(e.item.url) + '" class="item direct btn-item"><span><div class="btn"><div class="bg" style="background-color: ' + t.$$escapeHtml(e.mobileConfig.secondaryColor) + '"></div>' + t.$$escapeHtml(e.item.text) + r.svgCaretDown(null) + '</div></span></a>'
        }, i.DEBUG && (r.mobileTopLevelButton.soyTemplateName = 'templates.mobileTopLevelButton'), r.svgCaretDown = function() {
            return '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 10 6" style="enable-background:new 0 0 10 6;" xml:space="preserve"><style type="text/css">.caret-basic-down {fill:#00113D;}</style><path id="Fill-399" class="caret-basic-down" d="M8.6,0.2L5.8,2.8C5.6,3,5.3,3.2,5,3.2C4.7,3.2,4.4,3,4.2,2.8L1.4,0.3C1.3,0.1,1.1,0,0.8,0 C0.6,0,0.4,0.1,0.3,0.2C0.1,0.4,0,0.6,0,0.9s0.1,0.5,0.3,0.7L5,6l4.7-4.4C9.9,1.4,10,1.2,10,0.9c0-0.2,0-0.3-0.1-0.4 C9.8,0.2,9.5,0,9.2,0C9,0,8.8,0.1,8.6,0.2z"/></svg>'
        }, i.DEBUG && (r.svgCaretDown.soyTemplateName = 'templates.svgCaretDown'), r.svgGoArrow = function() {
            return '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17 16" style="enable-background:new 0 0 17 16;" xml:space="preserve"><style type="text/css">.go-arrow {fill:none; stroke:#FFFFFF;}</style><polyline vector-effect="non-scaling-stroke" class="go-arrow" points="5,1 16,1 16,11 "/><path vector-effect="non-scaling-stroke" class="go-arrow" d="M16,1L1,16"/></svg>'
        }, i.DEBUG && (r.svgGoArrow.soyTemplateName = 'templates.svgGoArrow'), e.exports = r
    }).call(this, i(1).soy, i(1).goog)
}, function() {}, function(e) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, 'loaded', {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, 'id', {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), Object.defineProperty(t, 'exports', {
                enumerable: !0
            }), t.webpackPolyfill = 1
        }
        return t
    }
}, function(e) {
    function t(e) {
        return t = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
        }, t(e)
    }
    var i = function() {
        return this
    }();
    try {
        i = i || Function('return this')() || (1, eval)('this')
    } catch (r) {
        'object' === ('undefined' == typeof window ? 'undefined' : t(window)) && (i = window)
    }
    e.exports = i
}, function(e, t, i) {
    'use strict';

    function r(e) {
        return r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
        }, r(e)
    }
    /*!
     * VERSION: 2.0.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     */
    function a(e) {
        return a = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
        }, a(e)
    }
    /*!
     * VERSION: 1.6.0
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     **/
    function n(e) {
        return n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
        }, n(e)
    }
    /*!
     * VERSION: 0.3.1
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     **/
    function o() {
        var t = window,
            e = 'inner';
        return 'innerWidth' in window || (e = 'client', t = document.documentElement || document.body), {
            width: t[''.concat(e, 'Width')],
            height: t[''.concat(e, 'Height')]
        }
    }

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

    function l(e, t) {
        for (var r = 0, i; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }

    function _(e, t, i) {
        return t && l(e.prototype, t), i && l(e, i), e
    }
    var d = Math.pow,
        u = Math.sqrt,
        g = Math.sin,
        f = Math.cos,
        y = Math.atan2,
        c = Math.PI,
        h = Math.abs,
        p = Math.max,
        m = Math.round,
        T = Math.min;
    i.r(t);
    var v = i(1),
        b = i(3),
        S = i(0);
    /*!
     * VERSION: 2.0.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     */
    S.f._gsDefine('TimelineLite', ['core.Animation', 'core.SimpleTimeline', 'TweenLite'], function() {
        var e = function(e) {
                S.d.call(this, e), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var t = this.vars,
                    i, r;
                for (r in t) i = t[r], n(i) && -1 !== i.join('').indexOf('{self}') && (t[r] = this._swapSelfInParams(i));
                n(t.tweens) && this.add(t.tweens, 0, t.align, t.stagger)
            },
            t = 1e-10,
            i = S.g._internals,
            r = e._internals = {},
            a = i.isSelector,
            n = i.isArray,
            o = i.lazyTweens,
            s = i.lazyRender,
            l = S.f._gsDefine.globals,
            _ = function(e) {
                var t = {},
                    i;
                for (i in e) t[i] = e[i];
                return t
            },
            d = function(e, t, r) {
                var i = e.cycle,
                    a, n;
                for (a in i) n = i[a], e[a] = 'function' == typeof n ? n(r, t[r]) : n[r % n.length];
                delete e.cycle
            },
            c = r.pauseCallback = function() {},
            m = function(e) {
                var t = [],
                    r = e.length,
                    a;
                for (a = 0; a !== r; t.push(e[a++]));
                return t
            },
            u = e.prototype = new S.d;
        return e.version = '2.0.2', u.constructor = e, u.kill()._gc = u._forcingPlayhead = u._hasPause = !1, u.to = function(e, t, i, r) {
            var a = i.repeat && l.TweenMax || S.g;
            return t ? this.add(new a(e, t, i), r) : this.set(e, i, r)
        }, u.from = function(e, t, i, r) {
            return this.add((i.repeat && l.TweenMax || S.g).from(e, t, i), r)
        }, u.fromTo = function(e, t, i, r, a) {
            var n = r.repeat && l.TweenMax || S.g;
            return t ? this.add(n.fromTo(e, t, i, r), a) : this.set(e, r, a)
        }, u.staggerTo = function(t, r, n, o, s, l, p, c) {
            var u = new e({
                    onComplete: l,
                    onCompleteParams: p,
                    callbackScope: c,
                    smoothChildTiming: this.smoothChildTiming
                }),
                g = n.cycle,
                f, y;
            for ('string' == typeof t && (t = S.g.selector(t) || t), t = t || [], a(t) && (t = m(t)), o = o || 0, 0 > o && (t = m(t), t.reverse(), o *= -1), y = 0; y < t.length; y++) f = _(n), f.startAt && (f.startAt = _(f.startAt), f.startAt.cycle && d(f.startAt, t, y)), g && (d(f, t, y), null != f.duration && (r = f.duration, delete f.duration)), u.to(t[y], r, f, y * o);
            return this.add(u, s)
        }, u.staggerFrom = function(e, t, i, r, a, n, o, s) {
            return i.immediateRender = !1 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, r, a, n, o, s)
        }, u.staggerFromTo = function(e, t, i, r, a, n, o, s, l) {
            return r.startAt = i, r.immediateRender = !1 != r.immediateRender && !1 != i.immediateRender, this.staggerTo(e, t, r, a, n, o, s, l)
        }, u.call = function(e, t, i, r) {
            return this.add(S.g.delayedCall(0, e, t, i), r)
        }, u.set = function(e, t, i) {
            return i = this._parseTimeOrLabel(i, 0, !0), null == t.immediateRender && (t.immediateRender = i === this._time && !this._paused), this.add(new S.g(e, 0, t), i)
        }, e.exportRoot = function(t, i) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r = new e(t),
                a = r._timeline,
                n, o, s, l;
            for (null == i && (i = !0), a._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = a._time, s = a._first; s;) l = s._next, i && s instanceof S.g && s.target === s.vars.onComplete || (o = s._startTime - s._delay, 0 > o && (n = 1), r.add(s, o)), s = l;
            return a.add(r, 0), n && r.totalDuration(), r
        }, u.add = function(t, r, a, o) {
            var s, _, l, i, d, c;
            if ('number' != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, t)), !(t instanceof S.a)) {
                if (t instanceof Array || t && t.push && n(t)) {
                    for (a = a || 'normal', o = o || 0, s = r, _ = t.length, l = 0; l < _; l++) n(i = t[l]) && (i = new e({
                        tweens: i
                    })), this.add(i, s), 'string' != typeof i && 'function' != typeof i && ('sequence' === a ? s = i._startTime + i.totalDuration() / i._timeScale : 'start' === a && (i._startTime -= i.delay())), s += o;
                    return this._uncache(!0)
                }
                if ('string' == typeof t) return this.addLabel(t, r);
                if ('function' == typeof t) t = S.g.delayedCall(0, t);
                else throw 'Cannot add ' + t + ' into the timeline; it is not a tween, timeline, function, or string.'
            }
            if (S.d.prototype.add.call(this, t, r), t._time && (s = p(0, T(t.totalDuration(), (this.rawTime() - t._startTime) * t._timeScale)), 1e-5 < h(s - t._totalTime) && t.render(s, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (d = this, c = d.rawTime() > t._startTime; d._timeline;) c && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
            return this
        }, u.remove = function(e) {
            if (e instanceof S.a) {
                this._remove(e, !1);
                var t = e._timeline = e.vars.useFrames ? S.a._rootFramesTimeline : S.a._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : t._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
            }
            if (e instanceof Array || e && e.push && n(e)) {
                for (var r = e.length; - 1 < --r;) this.remove(e[r]);
                return this
            }
            return 'string' == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, u._remove = function(e, t) {
            S.d.prototype._remove.call(this, e, t);
            var i = this._last;
            return i ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, u.append = function(e, t) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
        }, u.insert = u.insertMultiple = function(e, t, i, r) {
            return this.add(e, t || 0, i, r)
        }, u.appendMultiple = function(e, t, i, r) {
            return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, r)
        }, u.addLabel = function(e, t) {
            return this._labels[e] = this._parseTimeOrLabel(t), this
        }, u.addPause = function(e, i, r, a) {
            var n = S.g.delayedCall(0, c, r, a || this);
            return n.vars.onComplete = n.vars.onReverseComplete = i, n.data = 'isPause', this._hasPause = !0, this.add(n, e)
        }, u.removeLabel = function(e) {
            return delete this._labels[e], this
        }, u.getLabelTime = function(e) {
            return null == this._labels[e] ? -1 : this._labels[e]
        }, u._parseTimeOrLabel = function(e, t, r, a) {
            var o, s;
            if (a instanceof S.a && a.timeline === this) this.remove(a);
            else if (a && (a instanceof Array || a.push && n(a)))
                for (s = a.length; - 1 < --s;) a[s] instanceof S.a && a[s].timeline === this && this.remove(a[s]);
            if (o = 'number' != typeof e || t ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, 'string' == typeof t) return this._parseTimeOrLabel(t, r && 'number' == typeof e && null == this._labels[t] ? e - o : 0, r);
            if (t = t || 0, 'string' == typeof e && (isNaN(e) || null != this._labels[e])) {
                if (s = e.indexOf('='), -1 === s) return null == this._labels[e] ? r ? this._labels[e] = o + t : t : this._labels[e] + t;
                t = parseInt(e.charAt(s - 1) + '1', 10) * +e.substr(s + 1), e = 1 < s ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, r) : o
            } else null == e && (e = o);
            return +e + t
        }, u.seek = function(e, t) {
            return this.totalTime('number' == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
        }, u.stop = function() {
            return this.paused(!0)
        }, u.gotoAndPlay = function(e, t) {
            return this.play(e, t)
        }, u.gotoAndStop = function(e, t) {
            return this.pause(e, t)
        }, u.render = function(e, i, r) {
            this._gc && this._enabled(!0, !1);
            var a = this._time,
                n = this._dirty ? this.totalDuration() : this._totalDuration,
                l = this._startTime,
                _ = this._timeScale,
                d = this._paused,
                p, c, m, u, g, f, y;
            if (a !== this._time && (e += this._time - a), e >= n - 1e-7 && 0 <= e) this._totalTime = this._time = n, this._reversed || this._hasPausedChild() || (c = !0, u = 'onComplete', g = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && -1e-7 <= e || 0 > this._rawPrevTime || this._rawPrevTime === t) && this._rawPrevTime !== e && this._first && (g = !0, this._rawPrevTime > t && (u = 'onReverseComplete'))), this._rawPrevTime = this._duration || !i || e || this._rawPrevTime === e ? e : t, e = n + 1e-4;
            else if (!(1e-7 > e)) {
                if (this._hasPause && !this._forcingPlayhead && !i) {
                    if (e >= a)
                        for (p = this._first; p && p._startTime <= e && !f;) p._duration || 'isPause' !== p.data || p.ratio || 0 === p._startTime && 0 === this._rawPrevTime || (f = p), p = p._next;
                    else
                        for (p = this._last; p && p._startTime >= e && !f;) !p._duration && 'isPause' === p.data && 0 < p._rawPrevTime && (f = p), p = p._prev;
                    f && (this._time = e = f._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = e
            } else if (this._totalTime = this._time = 0, (0 !== a || 0 === this._duration && this._rawPrevTime !== t && (0 < this._rawPrevTime || 0 > e && 0 <= this._rawPrevTime)) && (u = 'onReverseComplete', c = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (g = c = !0, u = 'onReverseComplete') : 0 <= this._rawPrevTime && this._first && (g = !0), this._rawPrevTime = e;
            else {
                if (this._rawPrevTime = this._duration || !i || e || this._rawPrevTime === e ? e : t, 0 === e && c)
                    for (p = this._first; p && 0 === p._startTime;) p._duration || (c = !1), p = p._next;
                e = 0, this._initted || (g = !0)
            }
            if (this._time !== a && this._first || r || g || f) {
                if (this._initted || (this._initted = !0), this._active || this._paused || this._time === a || !(0 < e) || (this._active = !0), 0 !== a || !this.vars.onStart || 0 === this._time && this._duration || i || this._callback('onStart'), y = this._time, y >= a)
                    for (p = this._first; p && (m = p._next, y === this._time && (!this._paused || d));)(p._active || p._startTime <= y && !p._paused && !p._gc) && (f === p && this.pause(), p._reversed ? p.render((p._dirty ? p.totalDuration() : p._totalDuration) - (e - p._startTime) * p._timeScale, i, r) : p.render((e - p._startTime) * p._timeScale, i, r)), p = m;
                else
                    for (p = this._last; p && (m = p._prev, y === this._time && (!this._paused || d));) {
                        if (p._active || p._startTime <= a && !p._paused && !p._gc) {
                            if (f === p) {
                                for (f = p._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (e - f._startTime) * f._timeScale : (e - f._startTime) * f._timeScale, i, r), f = f._prev;
                                f = null, this.pause()
                            }
                            p._reversed ? p.render((p._dirty ? p.totalDuration() : p._totalDuration) - (e - p._startTime) * p._timeScale, i, r) : p.render((e - p._startTime) * p._timeScale, i, r)
                        }
                        p = m
                    }
                this._onUpdate && !i && (o.length && s(), this._callback('onUpdate')), u && !this._gc && (l === this._startTime || _ !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (c && (o.length && s(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !i && this.vars[u] && this._callback(u))
            }
        }, u._hasPausedChild = function() {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof e && t._hasPausedChild()) return !0;
                t = t._next
            }
            return !1
        }, u.getChildren = function(e, t, i, r) {
            r = r || -9999999999;
            for (var n = [], a = this._first, o = 0; a;) a._startTime < r || (a instanceof S.g ? !1 !== t && (n[o++] = a) : (!1 !== i && (n[o++] = a), !1 !== e && (n = n.concat(a.getChildren(!0, t, i)), o = n.length))), a = a._next;
            return n
        }, u.getTweensOf = function(e, t) {
            var r = this._gc,
                n = [],
                a = 0,
                o, s;
            for (r && this._enabled(!0, !0), o = S.g.getTweensOf(e), s = o.length; - 1 < --s;)(o[s].timeline === this || t && this._contains(o[s])) && (n[a++] = o[s]);
            return r && this._enabled(!1, !0), n
        }, u.recent = function() {
            return this._recent
        }, u._contains = function(e) {
            for (var t = e.timeline; t;) {
                if (t === this) return !0;
                t = t.timeline
            }
            return !1
        }, u.shiftChildren = function(e, t, i) {
            i = i || 0;
            for (var r = this._first, a = this._labels, n; r;) r._startTime >= i && (r._startTime += e), r = r._next;
            if (t)
                for (n in a) a[n] >= i && (a[n] += e);
            return this._uncache(!0)
        }, u._kill = function(e, t) {
            if (!e && !t) return this._enabled(!1, !1);
            for (var r = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), a = r.length, i = !1; - 1 < --a;) r[a]._kill(e, t) && (i = !0);
            return i
        }, u.clear = function(e) {
            var t = this.getChildren(!1, !0, !0),
                r = t.length;
            for (this._time = this._totalTime = 0; - 1 < --r;) t[r]._enabled(!1, !1);
            return !1 !== e && (this._labels = {}), this._uncache(!0)
        }, u.invalidate = function() {
            for (var e = this._first; e;) e.invalidate(), e = e._next;
            return S.a.prototype.invalidate.call(this)
        }, u._enabled = function(e, t) {
            if (e === this._gc)
                for (var i = this._first; i;) i._enabled(e, !0), i = i._next;
            return S.d.prototype._enabled.call(this, e, t)
        }, u.totalTime = function() {
            this._forcingPlayhead = !0;
            var e = S.a.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, e
        }, u.duration = function(e) {
            return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
        }, u.totalDuration = function(e) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var t = 0, i = this._last, r = 999999999999, a, n; i;) a = i._prev, i._dirty && i.totalDuration(), i._startTime > r && this._sortChildren && !i._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(i, i._startTime - i._delay), this._calculatingDuration = 0) : r = i._startTime, 0 > i._startTime && !i._paused && (t -= i._startTime, this._timeline.smoothChildTiming && (this._startTime += i._startTime / this._timeScale, this._time -= i._startTime, this._totalTime -= i._startTime, this._rawPrevTime -= i._startTime), this.shiftChildren(-i._startTime, !1, -9999999999), r = 0), n = i._startTime + i._totalDuration / i._timeScale, n > t && (t = n), i = a;
                    this._duration = this._totalDuration = t, this._dirty = !1
                }
                return this._totalDuration
            }
            return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
        }, u.paused = function(e) {
            if (!e)
                for (var t = this._first, i = this._time; t;) t._startTime === i && 'isPause' === t.data && (t._rawPrevTime = 0), t = t._next;
            return S.a.prototype.paused.apply(this, arguments)
        }, u.usesFrames = function() {
            for (var e = this._timeline; e._timeline;) e = e._timeline;
            return e === S.a._rootFramesTimeline
        }, u.rawTime = function(e) {
            return e && (this._paused || this._repeat && 0 < this.time() && 1 > this.totalProgress()) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
        }, e
    }, !0);
    var x = S.h.TimelineLite;
    /*!
     * VERSION: 2.0.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     **/
    S.f._gsDefine('TweenMax', ['core.Animation', 'core.SimpleTimeline', 'TweenLite'], function() {
        var e = function(e) {
                var t = [],
                    r = e.length,
                    a;
                for (a = 0; a !== r; t.push(e[a++]));
                return t
            },
            t = function(e, t, r) {
                var i = e.cycle,
                    a, n;
                for (a in i) n = i[a], e[a] = 'function' == typeof n ? n(r, t[r]) : n[r % n.length];
                delete e.cycle
            },
            r = function e(t, i, r) {
                S.g.call(this, t, i, r), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = e.prototype.render
            },
            i = 1e-10,
            n = S.g._internals,
            o = n.isSelector,
            s = n.isArray,
            a = r.prototype = S.g.to({}, .1, {}),
            l = [];
        r.version = '2.0.2', a.constructor = r, a.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = S.g.killTweensOf, r.getTweensOf = S.g.getTweensOf, r.lagSmoothing = S.g.lagSmoothing, r.ticker = S.g.ticker, r.render = S.g.render, a.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), S.g.prototype.invalidate.call(this)
        }, a.updateTo = function(e, t) {
            var i = this.ratio,
                r = this.vars.immediateRender || e.immediateRender,
                a;
            for (a in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e) this.vars[a] = e[a];
            if (this._initted || r)
                if (t) this._initted = !1, r && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && S.g._onPluginEvent('_onDisable', this), .998 < this._time / this._duration) {
                var n = this._totalTime;
                this.render(0, !0, !1), this._initted = !1, this.render(n, !0, !1)
            } else if (this._initted = !1, this._init(), 0 < this._time || r)
                for (var o = this._firstPT, s; o;) s = o.s + o.c, o.c *= 1 / (1 - i), o.s = s - o.c, o = o._next;
            return this
        }, a.render = function(e, t, a) {
            !this._initted && 0 === this._duration && this.vars.repeat && this.invalidate();
            var o = this._dirty ? this.totalDuration() : this._totalDuration,
                s = this._time,
                l = this._totalTime,
                _ = this._cycle,
                d = this._duration,
                p = this._rawPrevTime,
                c, m, u, g, f, r, y, h, T;
            if (e >= o - 1e-7 && 0 <= e ? (this._totalTime = o, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = d, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), !this._reversed && (c = !0, m = 'onComplete', a = a || this._timeline.autoRemoveChildren), 0 === d && (this._initted || !this.vars.lazy || a) && (this._startTime === this._timeline._duration && (e = 0), (0 > p || 0 >= e && -1e-7 <= e || p === i && 'isPause' !== this.data) && p !== e && (a = !0, p > i && (m = 'onReverseComplete')), this._rawPrevTime = h = !t || e || p === e ? e : i)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== l || 0 === d && 0 < p) && (m = 'onReverseComplete', c = this._reversed), 0 > e && (this._active = !1, 0 === d && (this._initted || !this.vars.lazy || a) && (0 <= p && (a = !0), this._rawPrevTime = h = !t || e || p === e ? e : i)), !this._initted && (a = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (g = d + this._repeatDelay, this._cycle = this._totalTime / g >> 0, 0 !== this._cycle && this._cycle === this._totalTime / g && l <= e && this._cycle--, this._time = this._totalTime - this._cycle * g, this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time, T = this._yoyoEase || this.vars.yoyoEase, T && (!this._yoyoEase && (!0 !== T || this._initted ? this._yoyoEase = T = !0 === T ? this._ease : T instanceof S.b ? T : S.b.map[T] : (T = this.vars.ease, this._yoyoEase = T = T ? T instanceof S.b ? T : 'function' == typeof T ? new S.b(T, this.vars.easeParams) : S.b.map[T] || S.g.defaultEase : S.g.defaultEase)), this.ratio = T ? 1 - T.getRatio((d - this._time) / d) : 0)), this._time > d ? this._time = d : 0 > this._time && (this._time = 0)), this._easeType && !T ? (f = this._time / d, r = this._easeType, y = this._easePower, (1 === r || 3 === r && .5 <= f) && (f = 1 - f), 3 === r && (f *= 2), 1 === y ? f *= f : 2 === y ? f *= f * f : 3 === y ? f *= f * f * f : 4 === y && (f *= f * f * f * f), this.ratio = 1 === r ? 1 - f : 2 === r ? f : .5 > this._time / d ? f / 2 : 1 - f / 2) : !T && (this.ratio = this._ease.getRatio(this._time / d))), s === this._time && !a && _ === this._cycle) return void(l !== this._totalTime && this._onUpdate && !t && this._callback('onUpdate'));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!a && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = s, this._totalTime = l, this._rawPrevTime = p, this._cycle = _, n.lazyTweens.push(this), void(this._lazy = [e, t]);
                !this._time || c || T ? c && this._ease._calcEnd && !T && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / d)
            }
            for (!1 !== this._lazy && (this._lazy = !1), this._active || this._paused || this._time === s || !(0 <= e) || (this._active = !0), 0 === l && (2 === this._initted && 0 < e && this._init(), this._startAt && (0 <= e ? this._startAt.render(e, !0, a) : !m && (m = '_dummyGS')), this.vars.onStart && (0 !== this._totalTime || 0 === d) && !t && this._callback('onStart')), u = this._firstPT; u;) u.f ? u.t[u.p](u.c * this.ratio + u.s) : u.t[u.p] = u.c * this.ratio + u.s, u = u._next;
            this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, !0, a), !t && (this._totalTime !== l || m) && this._callback('onUpdate')), this._cycle === _ || t || this._gc || !this.vars.onRepeat || this._callback('onRepeat'), m && (!this._gc || a) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, !0, a), c && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[m] && this._callback(m), 0 === d && this._rawPrevTime === i && h !== i && (this._rawPrevTime = 0))
        }, r.to = function(e, t, i) {
            return new r(e, t, i)
        }, r.from = function(e, t, i) {
            return i.runBackwards = !0, i.immediateRender = !1 != i.immediateRender, new r(e, t, i)
        }, r.fromTo = function(e, t, i, a) {
            return a.startAt = i, a.immediateRender = !1 != a.immediateRender && !1 != i.immediateRender, new r(e, t, a)
        }, r.staggerTo = r.allTo = function(n, _, d, c, m, u, g) {
            c = c || 0;
            var f = 0,
                y = [],
                a = function() {
                    d.onComplete && d.onComplete.apply(d.onCompleteScope || this, arguments), m.apply(g || d.callbackScope || this, u || l)
                },
                h = d.cycle,
                T = d.startAt && d.startAt.cycle,
                v, b, x, i;
            for (s(n) || ('string' == typeof n && (n = S.g.selector(n) || n), o(n) && (n = e(n))), n = n || [], 0 > c && (n = e(n), n.reverse(), c *= -1), v = n.length - 1, x = 0; x <= v; x++) {
                for (i in b = {}, d) b[i] = d[i];
                if (h && (t(b, n, x), null != b.duration && (_ = b.duration, delete b.duration)), T) {
                    for (i in T = b.startAt = {}, d.startAt) T[i] = d.startAt[i];
                    t(b.startAt, n, x)
                }
                b.delay = f + (b.delay || 0), x === v && m && (b.onComplete = a), y[x] = new r(n[x], _, b), f += c
            }
            return y
        }, r.staggerFrom = r.allFrom = function(e, t, i, a, n, o, s) {
            return i.runBackwards = !0, i.immediateRender = !1 != i.immediateRender, r.staggerTo(e, t, i, a, n, o, s)
        }, r.staggerFromTo = r.allFromTo = function(e, t, i, a, n, o, s, l) {
            return a.startAt = i, a.immediateRender = !1 != a.immediateRender && !1 != i.immediateRender, r.staggerTo(e, t, a, n, o, s, l)
        }, r.delayedCall = function(e, t, i, a, n) {
            return new r(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: i,
                callbackScope: a,
                onReverseComplete: t,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        }, r.set = function(e, t) {
            return new r(e, 0, t)
        }, r.isTweening = function(e) {
            return 0 < S.g.getTweensOf(e, !0).length
        };
        var _ = function e(t, i) {
                for (var r = [], a = 0, n = t._first; n;) n instanceof S.g ? r[a++] = n : (i && (r[a++] = n), r = r.concat(e(n, i)), a = r.length), n = n._next;
                return r
            },
            d = r.getAllTweens = function(e) {
                return _(S.a._rootTimeline, e).concat(_(S.a._rootFramesTimeline, e))
            };
        r.killAll = function(e, t, r, n) {
            null == t && (t = !0), null == r && (r = !0);
            var o = d(!1 != n),
                a = o.length,
                s = t && r && n,
                l, _, p;
            for (p = 0; p < a; p++) _ = o[p], (s || _ instanceof S.d || (l = _.target === _.vars.onComplete) && r || t && !l) && (e ? _.totalTime(_._reversed ? 0 : _.totalDuration()) : _._enabled(!1, !1))
        }, r.killChildTweensOf = function(t, _) {
            if (null != t) {
                var d = n.tweenLookup,
                    c, a, m, p, i;
                if ('string' == typeof t && (t = S.g.selector(t) || t), o(t) && (t = e(t)), s(t)) {
                    for (p = t.length; - 1 < --p;) r.killChildTweensOf(t[p], _);
                    return
                }
                for (m in c = [], d)
                    for (a = d[m].target.parentNode; a;) a === t && (c = c.concat(d[m].tweens)), a = a.parentNode;
                for (i = c.length, p = 0; p < i; p++) _ && c[p].totalTime(c[p].totalDuration()), c[p]._enabled(!1, !1)
            }
        };
        var p = function(e, t, r, n) {
            t = !1 !== t, r = !1 !== r, n = !1 !== n;
            for (var o = d(n), a = t && r && n, s = o.length, i, l; - 1 < --s;) l = o[s], (a || l instanceof S.d || (i = l.target === l.vars.onComplete) && r || t && !i) && l.paused(e)
        };
        return r.pauseAll = function(e, t, i) {
            p(!0, e, t, i)
        }, r.resumeAll = function(e, t, i) {
            p(!1, e, t, i)
        }, r.globalTimeScale = function(e) {
            var r = S.a._rootTimeline,
                a = S.g.ticker.time;
            return arguments.length ? (e = e || i, r._startTime = a - (a - r._startTime) * r._timeScale / e, r = S.a._rootFramesTimeline, a = S.g.ticker.frame, r._startTime = a - (a - r._startTime) * r._timeScale / e, r._timeScale = S.a._rootTimeline._timeScale = e, e) : r._timeScale
        }, a.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
        }, a.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
        }, a.time = function(e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
        }, a.duration = function(e) {
            return arguments.length ? S.a.prototype.duration.call(this, e) : this._duration
        }, a.totalDuration = function(e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, a.repeat = function(e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, a.repeatDelay = function(e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, a.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, r
    }, !0);
    var E = S.h.TweenMax;
    S.f._gsDefine('plugins.CSSPlugin', ['plugins.TweenPlugin', 'TweenLite'], function() {
        var n = function e() {
                S.e.call(this, 'css'), this._overwriteProps.length = 0, this.setRatio = e.prototype.setRatio
            },
            a = S.f._gsDefine.globals,
            o = {},
            e = n.prototype = new S.e('css'),
            l, s, _, d;
        e.constructor = n, n.version = '2.0.2', n.API = 2, n.defaultTransformPerspective = 0, n.defaultSkewType = 'compensated', n.defaultSmoothOrigin = !0, e = 'px', n.suffixMap = {
            top: e,
            right: e,
            bottom: e,
            left: e,
            width: e,
            height: e,
            fontSize: e,
            padding: e,
            margin: e,
            perspective: e,
            lineHeight: ''
        };
        var t = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            x = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            E = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            C = /(?:\d|\-|\+|=|#|\.)*/g,
            R = /opacity *= *([^)]*)/i,
            A = /opacity:([^;]*)/i,
            $ = /alpha\(opacity *=.+?\)/i,
            v = /^(rgb|hsl)/,
            P = /([A-Z])/g,
            w = /-([a-z])/gi,
            O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            k = function(e, t) {
                return t.toUpperCase()
            },
            L = /(?:Left|Right|Width)/i,
            D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            I = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            z = /,(?=[^\)]*(?:\(|$))/gi,
            F = /[\s,\(]/i,
            N = c / 180,
            H = 180 / c,
            M = {},
            B = {
                style: {}
            },
            U = S.f.document || {
                createElement: function() {
                    return B
                }
            },
            X = function(e, t) {
                return U.createElementNS ? U.createElementNS(t || 'http://www.w3.org/1999/xhtml', e) : U.createElement(e)
            },
            G = X('div'),
            Y = X('img'),
            K = n._internals = {
                _specialProps: o
            },
            V = (S.f.navigator || {}).userAgent || '',
            q = function() {
                var e = V.indexOf('Android'),
                    t = X('a');
                return (ve = -1 !== V.indexOf('Safari') && -1 === V.indexOf('Chrome') && (-1 === e || 3 < parseFloat(V.substr(e + 8, 2))), xe = ve && 6 > parseFloat(V.substr(V.indexOf('Version/') + 8, 2)), be = -1 !== V.indexOf('Firefox'), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) && (Se = parseFloat(RegExp.$1)), !!t) && (t.style.cssText = 'top:1px;opacity:.55;', /^0.55/.test(t.style.opacity))
            }(),
            j = function(e) {
                return R.test('string' == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || '') ? parseFloat(RegExp.$1) / 100 : 1
            },
            W = function(e) {
                S.f.console && console.log(e)
            },
            Z = '',
            J = '',
            Q = function(t, r) {
                r = r || G;
                var e = r.style,
                    n, a;
                if (void 0 !== e[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ['O', 'Moz', 'ms', 'Ms', 'Webkit'], a = 5; - 1 < --a && void 0 === e[n[a] + t];);
                return 0 <= a ? (J = 3 === a ? 'ms' : n[a], Z = '-' + J.toLowerCase() + '-', J + t) : null
            },
            ee = ('undefined' == typeof window ? U.defaultView || {
                getComputedStyle: function() {}
            } : window).getComputedStyle,
            te = n.getStyle = function(e, t, i, r, a) {
                var n;
                return q || 'opacity' !== t ? (!r && e.style[t] ? n = e.style[t] : (i = i || ee(e)) ? n = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(P, '-$1').toLowerCase()) : e.currentStyle && (n = e.currentStyle[t]), null == a || n && 'none' !== n && 'auto' !== n && 'auto auto' !== n ? n : a) : j(e)
            },
            ie = K.convertToPixels = function(e, t, i, r, a) {
                if ('px' === r || !r && 'lineHeight' !== t) return i;
                if ('auto' === r || !i) return 0;
                var o = L.test(t),
                    s = e,
                    l = G.style,
                    _ = 0 > i,
                    d = 1 === i,
                    p, c, m;
                if (_ && (i = -i), d && (i *= 100), 'lineHeight' === t && !r) c = ee(e).lineHeight, e.style.lineHeight = i, p = parseFloat(ee(e).lineHeight), e.style.lineHeight = c;
                else if ('%' === r && -1 !== t.indexOf('border')) p = i / 100 * (o ? e.clientWidth : e.clientHeight);
                else {
                    if (l.cssText = 'border:0 solid red;position:' + te(e, 'position') + ';line-height:0;', '%' === r || !s.appendChild || 'v' === r.charAt(0) || 'rem' === r) {
                        if (s = e.parentNode || U.body, -1 !== te(s, 'display').indexOf('flex') && (l.position = 'absolute'), c = s._gsCache, m = S.g.ticker.frame, c && o && c.time === m) return c.width * i / 100;
                        l[o ? 'width' : 'height'] = i + r
                    } else l[o ? 'borderLeftWidth' : 'borderTopWidth'] = i + r;
                    s.appendChild(G), p = parseFloat(G[o ? 'offsetWidth' : 'offsetHeight']), s.removeChild(G), o && '%' == r && !1 !== n.cacheWidths && (c = s._gsCache = s._gsCache || {}, c.time = m, c.width = 100 * (p / i)), 0 !== p || a || (p = ie(e, t, i, r, !0))
                }
                return d && (p /= 100), _ ? -p : p
            },
            re = K.calculateOffset = function(e, t, i) {
                if ('absolute' !== te(e, 'position', i)) return 0;
                var r = 'left' === t ? 'Left' : 'Top',
                    a = te(e, 'margin' + r, i);
                return e['offset' + r] - (ie(e, t, parseFloat(a), a.replace(C, '')) || 0)
            },
            ae = function(e, t) {
                var r = {},
                    a, i, n;
                if (t = t || ee(e, null)) {
                    if (a = t.length)
                        for (; - 1 < --a;) n = t[a], (-1 === n.indexOf('-transform') || He === n) && (r[n.replace(w, k)] = t.getPropertyValue(n));
                    else
                        for (a in t)(-1 === a.indexOf('Transform') || Ne === a) && (r[a] = t[a]);
                } else if (t = e.currentStyle || e.style)
                    for (a in t) 'string' == typeof a && void 0 === r[a] && (r[a.replace(w, k)] = t[a]);
                return q || (r.opacity = j(e)), i = Qe(e, t, !1), r.rotation = i.rotation, r.skewX = i.skewX, r.scaleX = i.scaleX, r.scaleY = i.scaleY, r.x = i.x, r.y = i.y, Be && (r.z = i.z, r.rotationX = i.rotationX, r.rotationY = i.rotationY, r.scaleZ = i.scaleZ), r.filters && delete r.filters, r
            },
            ne = function(e, t, i, r, a) {
                var n = {},
                    o = e.style,
                    s, l, _;
                for (l in i) 'cssText' !== l && 'length' !== l && isNaN(l) && (t[l] !== (s = i[l]) || a && a[l]) && -1 === l.indexOf('Origin') && ('number' == typeof s || 'string' == typeof s) && (n[l] = 'auto' === s && ('left' === l || 'top' === l) ? re(e, l) : ('' === s || 'auto' === s || 'none' === s) && 'string' == typeof t[l] && '' !== t[l].replace(E, '') ? 0 : s, void 0 !== o[l] && (_ = new Pe(o, l, o[l], _)));
                if (r)
                    for (l in r) 'className' !== l && (n[l] = r[l]);
                return {
                    difs: n,
                    firstMPT: _
                }
            },
            oe = {
                width: ['Left', 'Right'],
                height: ['Top', 'Bottom']
            },
            se = ['marginLeft', 'marginRight', 'marginTop', 'marginBottom'],
            le = function(e, t, r) {
                if ('svg' === (e.nodeName + '').toLowerCase()) return (r || ee(e))[t] || 0;
                if (e.getCTM && We(e)) return e.getBBox()[t] || 0;
                var n = parseFloat('width' === t ? e.offsetWidth : e.offsetHeight),
                    o = oe[t],
                    a = o.length;
                for (r = r || ee(e, null); - 1 < --a;) n -= parseFloat(te(e, 'padding' + o[a], r, !0)) || 0, n -= parseFloat(te(e, 'border' + o[a] + 'Width', r, !0)) || 0;
                return n
            },
            _e = function e(t, r) {
                if ('contain' === t || 'auto' === t || 'auto auto' === t) return t + ' ';
                (null == t || '' === t) && (t = '0 0');
                var n = t.split(' '),
                    a = -1 === t.indexOf('left') ? -1 === t.indexOf('right') ? n[0] : '100%' : '0%',
                    o = -1 === t.indexOf('top') ? -1 === t.indexOf('bottom') ? n[1] : '100%' : '0%',
                    s;
                if (3 < n.length && !r) {
                    for (n = t.split(', ').join(',').split(','), t = [], s = 0; s < n.length; s++) t.push(e(n[s]));
                    return t.join(',')
                }
                return null == o ? o = 'center' === a ? '50%' : '0' : 'center' === o && (o = '50%'), ('center' === a || isNaN(parseFloat(a)) && -1 === (a + '').indexOf('=')) && (a = '50%'), t = a + ' ' + o + (2 < n.length ? ' ' + n[2] : ''), r && (r.oxp = -1 !== a.indexOf('%'), r.oyp = -1 !== o.indexOf('%'), r.oxr = '=' === a.charAt(1), r.oyr = '=' === o.charAt(1), r.ox = parseFloat(a.replace(E, '')), r.oy = parseFloat(o.replace(E, '')), r.v = t), r || t
            },
            de = function(t, i) {
                return 'function' == typeof t && (t = t(Ce, Ee)), 'string' == typeof t && '=' === t.charAt(1) ? parseInt(t.charAt(0) + '1', 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(i) || 0
            },
            pe = function(e, t) {
                'function' == typeof e && (e = e(Ce, Ee));
                var i = 'string' == typeof e && '=' === e.charAt(1);
                return 'string' == typeof e && 'v' === e.charAt(e.length - 2) && (e = (i ? e.substr(0, 2) : 0) + window['inner' + ('vh' === e.substr(-2) ? 'Height' : 'Width')] * (parseFloat(i ? e.substr(2) : e) / 100)), null == e ? t : i ? parseInt(e.charAt(0) + '1', 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
            },
            ce = function(e, t, i, r) {
                var a = 1e-6,
                    n, o, s, l, _;
                return 'function' == typeof e && (e = e(Ce, Ee)), null == e ? l = t : 'number' == typeof e ? l = e : (n = 360, o = e.split('_'), _ = '=' === e.charAt(1), s = (_ ? parseInt(e.charAt(0) + '1', 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === e.indexOf('rad') ? 1 : H) - (_ ? 0 : t), o.length && (r && (r[i] = t + s), -1 !== e.indexOf('short') && (s %= n, s != s % (n / 2) && (s = 0 > s ? s + n : s - n)), -1 !== e.indexOf('_cw') && 0 > s ? s = (s + 9999999999 * n) % n - (0 | s / n) * n : -1 !== e.indexOf('ccw') && 0 < s && (s = (s - 9999999999 * n) % n - (0 | s / n) * n)), l = t + s), l < a && l > -a && (l = 0), l
            },
            me = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            ue = function(e, t, i) {
                return e = 0 > e ? e + 1 : 1 < e ? e - 1 : e, 0 | 255 * (1 > 6 * e ? t + 6 * ((i - t) * e) : .5 > e ? i : 2 > 3 * e ? t + 6 * ((i - t) * (2 / 3 - e)) : t) + .5
            },
            ge = n.parseColor = function(e, i) {
                var n, a, r, o, _, c, s, l, m, u, d;
                if (!e) n = me.black;
                else if ('number' == typeof e) n = [e >> 16, 255 & e >> 8, 255 & e];
                else {
                    if (',' === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), me[e]) n = me[e];
                    else if ('#' === e.charAt(0)) 4 === e.length && (a = e.charAt(1), r = e.charAt(2), o = e.charAt(3), e = '#' + a + a + r + r + o + o), e = parseInt(e.substr(1), 16), n = [e >> 16, 255 & e >> 8, 255 & e];
                    else if ('hsl' !== e.substr(0, 3)) n = e.match(t) || me.transparent;
                    else if (n = d = e.match(t), !i) _ = +n[0] % 360 / 360, c = +n[1] / 100, s = +n[2] / 100, r = .5 >= s ? s * (c + 1) : s + c - s * c, a = 2 * s - r, 3 < n.length && (n[3] = +n[3]), n[0] = ue(_ + 1 / 3, a, r), n[1] = ue(_, a, r), n[2] = ue(_ - 1 / 3, a, r);
                    else if (-1 !== e.indexOf('=')) return e.match(x);
                    n[0] = +n[0], n[1] = +n[1], n[2] = +n[2], 3 < n.length && (n[3] = +n[3])
                }
                return i && !d && (a = n[0] / 255, r = n[1] / 255, o = n[2] / 255, l = p(a, r, o), m = T(a, r, o), s = (l + m) / 2, l === m ? _ = c = 0 : (u = l - m, c = .5 < s ? u / (2 - l - m) : u / (l + m), _ = l === a ? (r - o) / u + (r < o ? 6 : 0) : l === r ? (o - a) / u + 2 : (a - r) / u + 4, _ *= 60), n[0] = 0 | _ + .5, n[1] = 0 | 100 * c + .5, n[2] = 0 | 100 * s + .5), n
            },
            fe = function(e, t) {
                var r = e.match(ye) || [],
                    a = 0,
                    n = '',
                    o, i, s;
                if (!r.length) return e;
                for (o = 0; o < r.length; o++) i = r[o], s = e.substr(a, e.indexOf(i, a) - a), a += s.length + i.length, i = ge(i, t), 3 === i.length && i.push(1), n += s + (t ? 'hsla(' + i[0] + ',' + i[1] + '%,' + i[2] + '%,' + i[3] : 'rgba(' + i.join(',')) + ')';
                return n + e.substr(a)
            },
            ye = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b',
            he, Te, ve, be, xe, Se, Ee, Ce;
        for (e in me) ye += '|' + e + '\\b';
        ye = new RegExp(ye + ')', 'gi'), n.colorStringFilter = function(e) {
            var t = e[0] + ' ' + e[1],
                i;
            ye.test(t) && (i = -1 !== t.indexOf('hsl(') || -1 !== t.indexOf('hsla('), e[0] = fe(e[0], i), e[1] = fe(e[1], i)), ye.lastIndex = 0
        }, S.g.defaultStringFilter || (S.g.defaultStringFilter = n.colorStringFilter);
        var Re = function(e, i, r, n) {
                if (null == e) return function(e) {
                    return e
                };
                var o = i ? (e.match(ye) || [''])[0] : '',
                    a = e.split(o).join('').match(b) || [],
                    s = e.substr(0, e.indexOf(a[0])),
                    l = ')' === e.charAt(e.length - 1) ? ')' : '',
                    _ = -1 === e.indexOf(' ') ? ',' : ' ',
                    d = a.length,
                    p = 0 < d ? a[0].replace(t, '') : '',
                    c;
                return d ? i ? (c = function(e) {
                    var t, m, u, i;
                    if ('number' == typeof e) e += p;
                    else if (n && z.test(e)) {
                        for (i = e.replace(z, '|').split('|'), u = 0; u < i.length; u++) i[u] = c(i[u]);
                        return i.join(',')
                    }
                    if (t = (e.match(ye) || [o])[0], m = e.split(t).join('').match(b) || [], u = m.length, d > u--)
                        for (; ++u < d;) m[u] = r ? m[0 | (u - 1) / 2] : a[u];
                    return s + m.join(_) + _ + t + l + (-1 === e.indexOf('inset') ? '' : ' inset')
                }, c) : (c = function(e) {
                    var t, o, m;
                    if ('number' == typeof e) e += p;
                    else if (n && z.test(e)) {
                        for (o = e.replace(z, '|').split('|'), m = 0; m < o.length; m++) o[m] = c(o[m]);
                        return o.join(',')
                    }
                    if (t = e.match(b) || [], m = t.length, d > m--)
                        for (; ++m < d;) t[m] = r ? t[0 | (m - 1) / 2] : a[m];
                    return s + t.join(_) + l
                }, c) : function(e) {
                    return e
                }
            },
            Ae = function(e) {
                return e = e.split(','),
                    function(r, t, n, o, s, l, _) {
                        var d = (t + '').split(' '),
                            a;
                        for (_ = {}, a = 0; 4 > a; a++) _[e[a]] = d[a] = d[a] || d[(a - 1) / 2 >> 0];
                        return o.parse(r, _, s, l)
                    }
            },
            $e = K._setPluginRatio = function(e) {
                this.plugin.setRatio(e);
                for (var t = this.data, r = t.proxy, a = t.firstMPT, n = 1e-6, o, s, l, i, _; a;) o = r[a.v], a.r ? o = a.r(o) : o < n && o > -n && (o = 0), a.t[a.p] = o, a = a._next;
                if (t.autoRotate && (t.autoRotate.rotation = t.mod ? t.mod.call(this._tween, r.rotation, this.t, this._tween) : r.rotation), 1 === e || 0 === e)
                    for (a = t.firstMPT, _ = 1 === e ? 'e' : 'b'; a;) {
                        if (s = a.t, !s.type) s[_] = s.s + s.xs0;
                        else if (1 === s.type) {
                            for (i = s.xs0 + s.s + s.xs1, l = 1; l < s.l; l++) i += s['xn' + l] + s['xs' + (l + 1)];
                            s[_] = i
                        }
                        a = a._next
                    }
            },
            Pe = function(e, t, i, a, n) {
                this.t = e, this.p = t, this.v = i, this.r = n, a && (a._prev = this, this._next = a)
            },
            we = K._parseToProxy = function(e, t, r, a, n, o) {
                var s = a,
                    l = {},
                    _ = {},
                    d = r._transform,
                    c = M,
                    m, i, p, u, g;
                for (r._transform = null, M = t, a = g = r.parse(e, t, a, n), M = c, o && (r._transform = d, s && (s._prev = null, s._prev && (s._prev._next = null))); a && a !== s;) {
                    if (1 >= a.type && (i = a.p, _[i] = a.s + a.c, l[i] = a.s, o || (u = new Pe(a, 's', i, u, a.r), a.c = 0), 1 === a.type))
                        for (m = a.l; 0 < --m;) p = 'xn' + m, i = a.p + '_' + p, _[i] = a.data[p], l[i] = a[p], o || (u = new Pe(a, p, i, u, a.rxp[p]));
                    a = a._next
                }
                return {
                    proxy: l,
                    end: _,
                    firstMPT: u,
                    pt: g
                }
            },
            Oe = K.CSSPropTween = function(i, t, a, o, s, _, p, n, c, u, g) {
                this.t = i, this.p = t, this.s = a, this.c = o, this.n = p || t, i instanceof Oe || d.push(this.n), this.r = n ? 'function' == typeof n ? n : m : n, this.type = _ || 0, c && (this.pr = c, l = !0), this.b = void 0 === u ? a : u, this.e = void 0 === g ? a + o : g, s && (this._next = s, s._prev = this)
            },
            ke = function(e, t, i, r, a, n) {
                var o = new Oe(e, t, i, r - i, a, -1, n);
                return o.b = i, o.e = o.xs0 = r, o
            },
            Le = n.parseComplex = function(r, a, o, s, _, d, p, c, u, g) {
                o = o || d || '', 'function' == typeof s && (s = s(Ce, Ee)), p = new Oe(r, a, 0, 0, p, g ? 2 : 1, null, !1, c, o, s), s += '', _ && ye.test(s + o) && (s = [o, s], n.colorStringFilter(s), o = s[0], s = s[1]);
                var f = o.split(', ').join(',').split(' '),
                    y = s.split(', ').join(',').split(' '),
                    h = f.length,
                    l = !1 !== he,
                    T, i, v, b, S, E, C, R, A, $, P, w, O;
                for ((-1 !== s.indexOf(',') || -1 !== o.indexOf(',')) && (-1 !== (s + o).indexOf('rgb') || -1 !== (s + o).indexOf('hsl') ? (f = f.join(' ').replace(z, ', ').split(' '), y = y.join(' ').replace(z, ', ').split(' ')) : (f = f.join(' ').split(',').join(', ').split(' '), y = y.join(' ').split(',').join(', ').split(' ')), h = f.length), h !== y.length && (f = (d || '').split(' '), h = f.length), p.plugin = u, p.setRatio = g, ye.lastIndex = 0, T = 0; T < h; T++)
                    if (b = f[T], S = y[T] + '', R = parseFloat(b), R || 0 === R) p.appendXtra('', R, de(S, R), S.replace(x, ''), !!(l && -1 !== S.indexOf('px')) && m, !0);
                    else if (_ && ye.test(b)) w = S.indexOf(')') + 1, w = ')' + (w ? S.substr(w) : ''), O = -1 !== S.indexOf('hsl') && q, $ = S, b = ge(b, O), S = ge(S, O), A = 6 < b.length + S.length, A && !q && 0 === S[3] ? (p['xs' + p.l] += p.l ? ' transparent' : 'transparent', p.e = p.e.split(y[T]).join('transparent')) : (!q && (A = !1), O ? p.appendXtra($.substr(0, $.indexOf('hsl')) + (A ? 'hsla(' : 'hsl('), b[0], de(S[0], b[0]), ',', !1, !0).appendXtra('', b[1], de(S[1], b[1]), '%,', !1).appendXtra('', b[2], de(S[2], b[2]), A ? '%,' : '%' + w, !1) : p.appendXtra($.substr(0, $.indexOf('rgb')) + (A ? 'rgba(' : 'rgb('), b[0], S[0] - b[0], ',', Math.round, !0).appendXtra('', b[1], S[1] - b[1], ',', Math.round).appendXtra('', b[2], S[2] - b[2], A ? ',' : w, Math.round), A && (b = 4 > b.length ? 1 : b[3], p.appendXtra('', b, (4 > S.length ? 1 : S[3]) - b, w, !1))), ye.lastIndex = 0;
                else if (E = b.match(t), !E) p['xs' + p.l] += p.l || p['xs' + p.l] ? ' ' + S : S;
                else {
                    if (C = S.match(x), !C || C.length !== E.length) return p;
                    for (v = 0, i = 0; i < E.length; i++) P = E[i], $ = b.indexOf(P, v), p.appendXtra(b.substr(v, $ - v), +P, de(C[i], P), '', !!(l && 'px' === b.substr($ + P.length, 2)) && m, 0 === i), v = $ + P.length;
                    p['xs' + p.l] += b.substr(v)
                }
                if (-1 !== s.indexOf('=') && p.data) {
                    for (w = p.xs0 + p.data.s, T = 1; T < p.l; T++) w += p['xs' + T] + p.data['xn' + T];
                    p.e = w + p['xs' + T]
                }
                return p.l || (p.type = -1, p.xs0 = p.e), p.xfirst || p
            },
            De = 9;
        for (e = Oe.prototype, e.l = e.pr = 0; 0 < --De;) e['xn' + De] = 0, e['xs' + De] = '';
        e.xs0 = '', e._next = e._prev = e.xfirst = e.data = e.plugin = e.setRatio = e.rxp = null, e.appendXtra = function(e, t, i, a, n, r) {
            var o = this,
                s = o.l;
            return (o['xs' + s] += r && (s || o['xs' + s]) ? ' ' + e : e || '', !i && 0 !== s && !o.plugin) ? (o['xs' + s] += t + (a || ''), o) : (o.l++, o.type = o.setRatio ? 2 : 1, o['xs' + o.l] = a || '', 0 < s) ? (o.data['xn' + s] = t + i, o.rxp['xn' + s] = n, o['xn' + s] = t, o.plugin || (o.xfirst = new Oe(o, 'xn' + s, t, i, o.xfirst || o, 0, o.n, n, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                s: t + i
            }, o.rxp = {}, o.s = t, o.c = i, o.r = n, o)
        };
        var Ie = function(e, t) {
                t = t || {}, this.p = t.prefix ? Q(e) || e : e, o[e] = o[this.p] = this, this.format = t.formatter || Re(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
            },
            i = K._registerComplexSpecialProp = function(e, t, n) {
                'object' !== r(t) && (t = {
                    parser: n
                });
                var o = e.split(','),
                    a = t.defaultValue,
                    s, i;
                for (n = n || [a], s = 0; s < o.length; s++) t.prefix = 0 === s && t.prefix, t.defaultValue = n[s] || a, i = new Ie(o[s], t)
            },
            ze = K._registerPluginProp = function(e) {
                if (!o[e]) {
                    var r = e.charAt(0).toUpperCase() + e.substr(1) + 'Plugin';
                    i(e, {
                        parser: function(i, t, e, n, s, l, _) {
                            var d = a.com.greensock.plugins[r];
                            return d ? (d._cssRegister(), o[e].parse(i, t, e, n, s, l, _)) : (W('Error: ' + r + ' js file not loaded.'), s)
                        }
                    })
                }
            };
        e = Ie.prototype, e.parseComplex = function(r, t, a, e, n, o) {
            var s = this.keyword,
                _, i, d, p, l, c;
            if (this.multi && (z.test(a) || z.test(t) ? (i = t.replace(z, '|').split('|'), d = a.replace(z, '|').split('|')) : s && (i = [t], d = [a])), d) {
                for (p = d.length > i.length ? d.length : i.length, _ = 0; _ < p; _++) t = i[_] = i[_] || this.dflt, a = d[_] = d[_] || this.dflt, s && (l = t.indexOf(s), c = a.indexOf(s), l !== c && (-1 === c ? i[_] = i[_].split(s).join('') : -1 === l && (i[_] += ' ' + s)));
                t = i.join(', '), a = d.join(', ')
            }
            return Le(r, this.p, t, a, this.clrs, this.dflt, e, this.pr, n, o)
        }, e.parse = function(i, t, e, r, a, n) {
            return this.parseComplex(i.style, this.format(te(i, this.p, _, !1, this.dflt)), this.format(t), a, n)
        }, n.registerSpecialProp = function(e, r, a) {
            i(e, {
                parser: function(i, t, e, n, o, s) {
                    var l = new Oe(i, e, 0, 0, o, 2, e, !1, a);
                    return l.plugin = s, l.setRatio = r(i, t, n._tween, e), l
                },
                priority: a
            })
        }, n.useSVGTransformAttr = !0;
        var Fe = ['scaleX', 'scaleY', 'scaleZ', 'x', 'y', 'z', 'skewX', 'skewY', 'rotation', 'rotationX', 'rotationY', 'perspective', 'xPercent', 'yPercent'],
            Ne = Q('transform'),
            He = Z + 'transform',
            Me = Q('transformOrigin'),
            Be = null !== Q('perspective'),
            Ue = K.Transform = function() {
                this.perspective = parseFloat(n.defaultTransformPerspective) || 0, this.force3D = !!(!1 !== n.defaultForce3D && Be) && (n.defaultForce3D || 'auto')
            },
            Xe = S.f.SVGElement,
            Ge = function(e, t, i) {
                var r = U.createElementNS('http://www.w3.org/2000/svg', e),
                    a = /([a-z])([A-Z])/g,
                    n;
                for (n in i) r.setAttributeNS(null, n.replace(a, '$1-$2').toLowerCase(), i[n]);
                return t.appendChild(r), r
            },
            Ye = U.documentElement || {},
            Ke = function() {
                var e = Se || /Android/i.test(V) && !S.f.chrome,
                    t, i, r;
                return U.createElementNS && !e && (t = Ge('svg', Ye), i = Ge('rect', t, {
                    width: 100,
                    height: 50,
                    x: 100
                }), r = i.getBoundingClientRect().width, i.style[Me] = '50% 50%', i.style[Ne] = 'scaleX(0.5)', e = r === i.getBoundingClientRect().width && !(be && Be), Ye.removeChild(t)), e
            }(),
            Ve = function(t, e, i, r, o, s) {
                var l = t._gsTransform,
                    _ = Je(t, !0),
                    p, m, u, g, f, y, a, h, T, d, v, x, S, E;
                l && (S = l.xOrigin, E = l.yOrigin), (!r || 2 > (p = r.split(' ')).length) && (a = t.getBBox(), 0 === a.x && 0 === a.y && 0 === a.width + a.height && (a = {
                    x: parseFloat(t.hasAttribute('x') ? t.getAttribute('x') : t.hasAttribute('cx') ? t.getAttribute('cx') : 0) || 0,
                    y: parseFloat(t.hasAttribute('y') ? t.getAttribute('y') : t.hasAttribute('cy') ? t.getAttribute('cy') : 0) || 0,
                    width: 0,
                    height: 0
                }), e = _e(e).split(' '), p = [(-1 === e[0].indexOf('%') ? parseFloat(e[0]) : parseFloat(e[0]) / 100 * a.width) + a.x, (-1 === e[1].indexOf('%') ? parseFloat(e[1]) : parseFloat(e[1]) / 100 * a.height) + a.y]), i.xOrigin = g = parseFloat(p[0]), i.yOrigin = f = parseFloat(p[1]), r && _ !== Ze && (y = _[0], a = _[1], h = _[2], T = _[3], d = _[4], v = _[5], x = y * T - a * h, x && (m = g * (T / x) + f * (-h / x) + (h * v - T * d) / x, u = g * (-a / x) + f * (y / x) - (y * v - a * d) / x, g = i.xOrigin = p[0] = m, f = i.yOrigin = p[1] = u)), l && (s && (i.xOffset = l.xOffset, i.yOffset = l.yOffset, l = i), o || !1 !== o && !1 !== n.defaultSmoothOrigin ? (m = g - S, u = f - E, l.xOffset += m * _[0] + u * _[2] - m, l.yOffset += m * _[1] + u * _[3] - u) : l.xOffset = l.yOffset = 0), s || t.setAttribute('data-svg-origin', p.join(' '))
            },
            qe = function e(t) {
                var i = X('svg', this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns') || 'http://www.w3.org/2000/svg'),
                    r = this.parentNode,
                    a = this.nextSibling,
                    n = this.style.cssText,
                    o;
                if (Ye.appendChild(i), i.appendChild(this), this.style.display = 'block', t) try {
                    o = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = e
                } catch (t) {} else this._originalGetBBox && (o = this._originalGetBBox());
                return a ? r.insertBefore(this, a) : r.appendChild(this), Ye.removeChild(i), this.style.cssText = n, o
            },
            je = function(t) {
                try {
                    return t.getBBox()
                } catch (e) {
                    return qe.call(t, !0)
                }
            },
            We = function(t) {
                return !!(Xe && t.getCTM && (!t.parentNode || t.ownerSVGElement) && je(t))
            },
            Ze = [1, 0, 0, 1, 0, 0],
            Je = function(i, e) {
                var r = i._gsTransform || new Ue,
                    a = 1e5,
                    o = i.style,
                    l, _, d, p, n, c;
                if (Ne ? _ = te(i, He, null, !0) : i.currentStyle && (_ = i.currentStyle.filter.match(D), _ = _ && 4 === _.length ? [_[0].substr(4), +_[2].substr(4), +_[1].substr(4), _[3].substr(4), r.x || 0, r.y || 0].join(',') : ''), l = !_ || 'none' === _ || 'matrix(1, 0, 0, 1, 0, 0)' === _, Ne && ((c = !ee(i) || 'none' === ee(i).display) || !i.parentNode) && (c && (p = o.display, o.display = 'block'), !i.parentNode && (n = 1, Ye.appendChild(i)), _ = te(i, He, null, !0), l = !_ || 'none' === _ || 'matrix(1, 0, 0, 1, 0, 0)' === _, p ? o.display = p : c && at(o, 'display'), n && Ye.removeChild(i)), (r.svg || i.getCTM && We(i)) && (l && -1 !== (o[Ne] + '').indexOf('matrix') && (_ = o[Ne], l = 0), d = i.getAttribute('transform'), l && d && (d = i.transform.baseVal.consolidate().matrix, _ = 'matrix(' + d.a + ',' + d.b + ',' + d.c + ',' + d.d + ',' + d.e + ',' + d.f + ')', l = 0)), l) return Ze;
                for (d = (_ || '').match(t) || [], De = d.length; - 1 < --De;) p = +d[De], d[De] = (n = p - (p |= 0)) ? (0 | n * a + (0 > n ? -.5 : .5)) / a + p : p;
                return e && 6 < d.length ? [d[0], d[1], d[4], d[5], d[12], d[13]] : d
            },
            Qe = K.getTransform = function(e, t, r, o) {
                if (e._gsTransform && r && !o) return e._gsTransform;
                var s = r ? e._gsTransform || new Ue : new Ue,
                    l = 0 > s.scaleX,
                    _ = 2e-5,
                    p = 1e5,
                    T = Be ? parseFloat(te(e, Me, t, !1, '0 0 0').split(' ')[2]) || s.zOrigin || 0 : 0,
                    v = parseFloat(n.defaultTransformPerspective) || 0,
                    x, m, i, E, C, R;
                if (s.svg = !!(e.getCTM && We(e)), s.svg && (Ve(e, te(e, Me, t, !1, '50% 50%') + '', s, e.getAttribute('data-svg-origin')), it = n.useSVGTransformAttr || Ke), x = Je(e), x !== Ze) {
                    if (16 === x.length) {
                        var A = x[0],
                            $ = x[1],
                            P = x[2],
                            w = x[3],
                            O = x[4],
                            L = x[5],
                            D = x[6],
                            I = x[7],
                            z = x[8],
                            F = x[9],
                            N = x[10],
                            M = x[12],
                            B = x[13],
                            U = x[14],
                            X = x[11],
                            G = y(D, N),
                            Y, K, V, q, j;
                        s.zOrigin && (U = -s.zOrigin, M = z * U - x[12], B = F * U - x[13], U = N * U + s.zOrigin - x[14]), s.rotationX = G * H, G && (q = f(-G), j = g(-G), Y = O * q + z * j, K = L * q + F * j, V = D * q + N * j, z = O * -j + z * q, F = L * -j + F * q, N = D * -j + N * q, X = I * -j + X * q, O = Y, L = K, D = V), G = y(-P, N), s.rotationY = G * H, G && (q = f(-G), j = g(-G), Y = A * q - z * j, K = $ * q - F * j, V = P * q - N * j, F = $ * j + F * q, N = P * j + N * q, X = w * j + X * q, A = Y, $ = K, P = V), G = y($, A), s.rotation = G * H, G && (q = f(G), j = g(G), Y = A * q + $ * j, K = O * q + L * j, V = z * q + F * j, $ = $ * q - A * j, L = L * q - O * j, F = F * q - z * j, A = Y, O = K, z = V), s.rotationX && 359.9 < h(s.rotationX) + h(s.rotation) && (s.rotationX = s.rotation = 0, s.rotationY = 180 - s.rotationY), G = y(O, L), s.scaleX = (0 | u(A * A + $ * $ + P * P) * p + .5) / p, s.scaleY = (0 | u(L * L + D * D) * p + .5) / p, s.scaleZ = (0 | u(z * z + F * F + N * N) * p + .5) / p, A /= s.scaleX, O /= s.scaleY, $ /= s.scaleX, L /= s.scaleY, h(G) > _ ? (s.skewX = G * H, O = 0, 'simple' !== s.skewType && (s.scaleY *= 1 / f(G))) : s.skewX = 0, s.perspective = X ? 1 / (0 > X ? -X : X) : 0, s.x = M, s.y = B, s.z = U, s.svg && (s.x -= s.xOrigin - (s.xOrigin * A - s.yOrigin * O), s.y -= s.yOrigin - (s.yOrigin * $ - s.xOrigin * L))
                    } else if (!Be || o || !x.length || s.x !== x[4] || s.y !== x[5] || !s.rotationX && !s.rotationY) {
                        var W = 6 <= x.length,
                            k = W ? x[0] : 1,
                            a = x[1] || 0,
                            b = x[2] || 0,
                            c = W ? x[3] : 1;
                        s.x = x[4] || 0, s.y = x[5] || 0, i = u(k * k + a * a), E = u(c * c + b * b), C = k || a ? y(a, k) * H : s.rotation || 0, R = b || c ? y(b, c) * H + C : s.skewX || 0, s.scaleX = i, s.scaleY = E, s.rotation = C, s.skewX = R, Be && (s.rotationX = s.rotationY = s.z = 0, s.perspective = v, s.scaleZ = 1), s.svg && (s.x -= s.xOrigin - (s.xOrigin * k + s.yOrigin * b), s.y -= s.yOrigin - (s.xOrigin * a + s.yOrigin * c))
                    }
                    for (m in 90 < h(s.skewX) && 270 > h(s.skewX) && (l ? (s.scaleX *= -1, s.skewX += 0 >= s.rotation ? 180 : -180, s.rotation += 0 >= s.rotation ? 180 : -180) : (s.scaleY *= -1, s.skewX += 0 >= s.skewX ? 180 : -180)), s.zOrigin = T, s) s[m] < _ && s[m] > -_ && (s[m] = 0)
                }
                return r && (e._gsTransform = s, s.svg && (it && e.style[Ne] ? S.g.delayedCall(.001, function() {
                    at(e.style, Ne)
                }) : !it && e.getAttribute('transform') && S.g.delayedCall(.001, function() {
                    e.removeAttribute('transform')
                }))), s
            },
            et = function(e) {
                var i = this.data,
                    t = -i.rotation * N,
                    r = t + i.skewX * N,
                    n = 1e5,
                    o = (0 | f(t) * i.scaleX * n) / n,
                    s = (0 | g(t) * i.scaleX * n) / n,
                    l = (0 | g(r) * -i.scaleY * n) / n,
                    _ = (0 | f(r) * i.scaleY * n) / n,
                    p = this.t.style,
                    u = this.t.currentStyle,
                    y, T;
                if (u) {
                    T = s, s = -l, l = -T, y = u.filter, p.filter = '';
                    var v = this.t.offsetWidth,
                        x = this.t.offsetHeight,
                        h = 'absolute' !== u.position,
                        S = 'progid:DXImageTransform.Microsoft.Matrix(M11=' + o + ', M12=' + s + ', M21=' + l + ', M22=' + _,
                        E = i.x + v * i.xPercent / 100,
                        A = i.y + x * i.yPercent / 100,
                        $, P;
                    if (null != i.ox && ($ = (i.oxp ? .01 * (v * i.ox) : i.ox) - v / 2, P = (i.oyp ? .01 * (x * i.oy) : i.oy) - x / 2, E += $ - ($ * o + P * s), A += P - ($ * l + P * _)), h ? ($ = v / 2, P = x / 2, S += ', Dx=' + ($ - ($ * o + P * s) + E) + ', Dy=' + (P - ($ * l + P * _) + A) + ')') : S += ', sizingMethod=\'auto expand\')', p.filter = -1 === y.indexOf('DXImageTransform.Microsoft.Matrix(') ? S + ' ' + y : y.replace(I, S), 0 !== e && 1 !== e || 1 != o || 0 != s || 0 != l || 1 != _ || h && -1 === S.indexOf('Dx=0, Dy=0') || R.test(y) && 100 !== parseFloat(RegExp.$1) || -1 !== y.indexOf(y.indexOf('Alpha')) || p.removeAttribute('filter'), !h) {
                        var w = 8 > Se ? 1 : -1,
                            O, k, L;
                        for ($ = i.ieOffsetX || 0, P = i.ieOffsetY || 0, i.ieOffsetX = m((v - ((0 > o ? -o : o) * v + (0 > s ? -s : s) * x)) / 2 + E), i.ieOffsetY = m((x - ((0 > _ ? -_ : _) * x + (0 > l ? -l : l) * v)) / 2 + A), De = 0; 4 > De; De++) k = se[De], O = u[k], T = -1 === O.indexOf('px') ? ie(this.t, k, parseFloat(O), O.replace(C, '')) || 0 : parseFloat(O), L = T === i[k] ? 2 > De ? $ - i.ieOffsetX : P - i.ieOffsetY : 2 > De ? -i.ieOffsetX : -i.ieOffsetY, p[k] = (i[k] = m(T - L * (0 === De || 2 === De ? 1 : w))) + 'px'
                    }
                }
            },
            tt = K.set3DTransformRatio = K.setTransformRatio = function(e) {
                var i = Math.tan,
                    r = this.data,
                    t = this.t.style,
                    a = r.rotation,
                    n = r.rotationX,
                    o = r.rotationY,
                    s = r.scaleX,
                    l = r.scaleY,
                    _ = r.scaleZ,
                    d = r.x,
                    p = r.y,
                    c = r.z,
                    m = r.svg,
                    y = r.perspective,
                    h = r.force3D,
                    T = r.skewY,
                    v = r.skewX,
                    b, x, S, E, C, R, A, $, P, w, O, k, L, D, I, F, H, M, B, U, X, G, Y;
                if (T && (v += T, a += T), ((1 === e || 0 === e) && 'auto' === h && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !h) && !c && !y && !o && !n && 1 === _ || it && m || !Be) return void(a || v || m ? (a *= N, G = v * N, Y = 1e5, x = f(a) * s, C = g(a) * s, S = g(a - G) * -l, R = f(a - G) * l, G && 'simple' === r.skewType && (b = i(G - T * N), b = u(1 + b * b), S *= b, R *= b, T && (b = i(T * N), b = u(1 + b * b), x *= b, C *= b)), m && (d += r.xOrigin - (r.xOrigin * x + r.yOrigin * S) + r.xOffset, p += r.yOrigin - (r.xOrigin * C + r.yOrigin * R) + r.yOffset, it && (r.xPercent || r.yPercent) && (I = this.t.getBBox(), d += .01 * r.xPercent * I.width, p += .01 * r.yPercent * I.height), I = 1e-6, d < I && d > -I && (d = 0), p < I && p > -I && (p = 0)), B = (0 | x * Y) / Y + ',' + (0 | C * Y) / Y + ',' + (0 | S * Y) / Y + ',' + (0 | R * Y) / Y + ',' + d + ',' + p + ')', m && it ? this.t.setAttribute('transform', 'matrix(' + B) : t[Ne] = (r.xPercent || r.yPercent ? 'translate(' + r.xPercent + '%,' + r.yPercent + '%) matrix(' : 'matrix(') + B) : t[Ne] = (r.xPercent || r.yPercent ? 'translate(' + r.xPercent + '%,' + r.yPercent + '%) matrix(' : 'matrix(') + s + ',0,0,' + l + ',' + d + ',' + p + ')');
                if (be && (I = 1e-4, s < I && s > -I && (s = _ = 2e-5), l < I && l > -I && (l = _ = 2e-5), y && !r.z && !r.rotationX && !r.rotationY && (y = 0)), a || v) a *= N, F = x = f(a), H = C = g(a), v && (a -= v * N, F = f(a), H = g(a), 'simple' === r.skewType && (b = i((v - T) * N), b = u(1 + b * b), F *= b, H *= b, r.skewY && (b = i(T * N), b = u(1 + b * b), x *= b, C *= b))), S = -H, R = F;
                else {
                    if (!o && !n && 1 === _ && !y && !m) return void(t[Ne] = (r.xPercent || r.yPercent ? 'translate(' + r.xPercent + '%,' + r.yPercent + '%) translate3d(' : 'translate3d(') + d + 'px,' + p + 'px,' + c + 'px)' + (1 !== s || 1 !== l ? ' scale(' + s + ',' + l + ')' : ''));
                    x = R = 1, S = C = 0
                }
                w = 1, E = A = $ = P = O = k = 0, L = y ? -1 / y : 0, D = r.zOrigin, I = 1e-6, U = ',', X = '0', a = o * N, a && (F = f(a), H = g(a), $ = -H, O = L * -H, E = x * H, A = C * H, w = F, L *= F, x *= F, C *= F), a = n * N, a && (F = f(a), H = g(a), b = S * F + E * H, M = R * F + A * H, P = w * H, k = L * H, E = S * -H + E * F, A = R * -H + A * F, w *= F, L *= F, S = b, R = M), 1 !== _ && (E *= _, A *= _, w *= _, L *= _), 1 !== l && (S *= l, R *= l, P *= l, k *= l), 1 !== s && (x *= s, C *= s, $ *= s, O *= s), (D || m) && (D && (d += E * -D, p += A * -D, c += w * -D + D), m && (d += r.xOrigin - (r.xOrigin * x + r.yOrigin * S) + r.xOffset, p += r.yOrigin - (r.xOrigin * C + r.yOrigin * R) + r.yOffset), d < I && d > -I && (d = X), p < I && p > -I && (p = X), c < I && c > -I && (c = 0)), B = r.xPercent || r.yPercent ? 'translate(' + r.xPercent + '%,' + r.yPercent + '%) matrix3d(' : 'matrix3d(', B += (x < I && x > -I ? X : x) + U + (C < I && C > -I ? X : C) + U + ($ < I && $ > -I ? X : $), B += U + (O < I && O > -I ? X : O) + U + (S < I && S > -I ? X : S) + U + (R < I && R > -I ? X : R), n || o || 1 !== _ ? (B += U + (P < I && P > -I ? X : P) + U + (k < I && k > -I ? X : k) + U + (E < I && E > -I ? X : E), B += U + (A < I && A > -I ? X : A) + U + (w < I && w > -I ? X : w) + U + (L < I && L > -I ? X : L) + U) : B += ',0,0,0,0,1,0,', B += d + U + p + U + c + U + (y ? 1 + -c / y : 1) + ')', t[Ne] = B
            },
            it;
        e = Ue.prototype, e.x = e.y = e.z = e.skewX = e.skewY = e.rotation = e.rotationX = e.rotationY = e.zOrigin = e.xPercent = e.yPercent = e.xOffset = e.yOffset = 0, e.scaleX = e.scaleY = e.scaleZ = 1, i('transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin', {
            parser: function(a, t, e, o, s, l, d) {
                if (o._lastParsedTransform === d) return s;
                o._lastParsedTransform = d;
                var c = d.scale && 'function' == typeof d.scale ? d.scale : 0,
                    m;
                'function' == typeof d[e] && (m = d[e], d[e] = t), c && (d.scale = c(Ce, a));
                var u = a._gsTransform,
                    g = a.style,
                    h = 1e-6,
                    T = Fe.length,
                    i = d,
                    v = {},
                    b = 'transformOrigin',
                    S = Qe(a, _, !0, i.parseTransform),
                    E = i.transform && ('function' == typeof i.transform ? i.transform(Ce, Ee) : i.transform),
                    C, R, A, $, P, w, x, y, O;
                if (S.skewType = i.skewType || S.skewType || n.defaultSkewType, o._transform = S, 'rotationZ' in i && (i.rotation = i.rotationZ), E && 'string' == typeof E && Ne) R = G.style, R[Ne] = E, R.display = 'block', R.position = 'absolute', -1 !== E.indexOf('%') && (R.width = te(a, 'width'), R.height = te(a, 'height')), U.body.appendChild(G), C = Qe(G, null, !1), 'simple' === S.skewType && (C.scaleY *= f(C.skewX * N)), S.svg && (w = S.xOrigin, x = S.yOrigin, C.x -= S.xOffset, C.y -= S.yOffset, (i.transformOrigin || i.svgOrigin) && (E = {}, Ve(a, _e(i.transformOrigin), E, i.svgOrigin, i.smoothOrigin, !0), w = E.xOrigin, x = E.yOrigin, C.x -= E.xOffset - S.xOffset, C.y -= E.yOffset - S.yOffset), (w || x) && (y = Je(G, !0), C.x -= w - (w * y[0] + x * y[2]), C.y -= x - (w * y[1] + x * y[3]))), U.body.removeChild(G), C.perspective || (C.perspective = S.perspective), null != i.xPercent && (C.xPercent = pe(i.xPercent, S.xPercent)), null != i.yPercent && (C.yPercent = pe(i.yPercent, S.yPercent));
                else if ('object' === r(i)) {
                    if (C = {
                            scaleX: pe(null == i.scaleX ? i.scale : i.scaleX, S.scaleX),
                            scaleY: pe(null == i.scaleY ? i.scale : i.scaleY, S.scaleY),
                            scaleZ: pe(i.scaleZ, S.scaleZ),
                            x: pe(i.x, S.x),
                            y: pe(i.y, S.y),
                            z: pe(i.z, S.z),
                            xPercent: pe(i.xPercent, S.xPercent),
                            yPercent: pe(i.yPercent, S.yPercent),
                            perspective: pe(i.transformPerspective, S.perspective)
                        }, P = i.directionalRotation, null != P)
                        if ('object' === r(P))
                            for (R in P) i[R] = P[R];
                        else i.rotation = P;
                    'string' == typeof i.x && -1 !== i.x.indexOf('%') && (C.x = 0, C.xPercent = pe(i.x, S.xPercent)), 'string' == typeof i.y && -1 !== i.y.indexOf('%') && (C.y = 0, C.yPercent = pe(i.y, S.yPercent)), C.rotation = ce('rotation' in i ? i.rotation : 'shortRotation' in i ? i.shortRotation + '_short' : S.rotation, S.rotation, 'rotation', v), Be && (C.rotationX = ce('rotationX' in i ? i.rotationX : 'shortRotationX' in i ? i.shortRotationX + '_short' : S.rotationX || 0, S.rotationX, 'rotationX', v), C.rotationY = ce('rotationY' in i ? i.rotationY : 'shortRotationY' in i ? i.shortRotationY + '_short' : S.rotationY || 0, S.rotationY, 'rotationY', v)), C.skewX = ce(i.skewX, S.skewX), C.skewY = ce(i.skewY, S.skewY)
                }
                for (Be && null != i.force3D && (S.force3D = i.force3D, $ = !0), A = S.force3D || S.z || S.rotationX || S.rotationY || C.z || C.rotationX || C.rotationY || C.perspective, A || null == i.scale || (C.scaleZ = 1); - 1 < --T;) O = Fe[T], E = C[O] - S[O], (E > h || E < -h || null != i[O] || null != M[O]) && ($ = !0, s = new Oe(S, O, S[O], E, s), O in v && (s.e = v[O]), s.xs0 = 0, s.plugin = l, o._overwriteProps.push(s.n));
                return E = i.transformOrigin, S.svg && (E || i.svgOrigin) && (w = S.xOffset, x = S.yOffset, Ve(a, _e(E), C, i.svgOrigin, i.smoothOrigin), s = ke(S, 'xOrigin', (u ? S : C).xOrigin, C.xOrigin, s, b), s = ke(S, 'yOrigin', (u ? S : C).yOrigin, C.yOrigin, s, b), (w !== S.xOffset || x !== S.yOffset) && (s = ke(S, 'xOffset', u ? w : S.xOffset, S.xOffset, s, b), s = ke(S, 'yOffset', u ? x : S.yOffset, S.yOffset, s, b)), E = '0px 0px'), (E || Be && A && S.zOrigin) && (Ne ? ($ = !0, O = Me, E = (E || te(a, O, _, !1, '50% 50%')) + '', s = new Oe(g, O, 0, 0, s, -1, b), s.b = g[O], s.plugin = l, Be ? (R = S.zOrigin, E = E.split(' '), S.zOrigin = (2 < E.length && (0 === R || '0px' !== E[2]) ? parseFloat(E[2]) : R) || 0, s.xs0 = s.e = E[0] + ' ' + (E[1] || '50%') + ' 0px', s = new Oe(S, 'zOrigin', 0, 0, s, -1, s.n), s.b = R, s.xs0 = s.e = S.zOrigin) : s.xs0 = s.e = E) : _e(E + '', S)), $ && (o._transformType = !(S.svg && it) && (A || 3 === this._transformType) ? 3 : 2), m && (d[e] = m), c && (d.scale = c), s
            },
            prefix: !0
        }), i('boxShadow', {
            defaultValue: '0px 0px 0px 0px #999',
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: 'inset'
        }), i('borderRadius', {
            defaultValue: '0px',
            parser: function(r, t, e, a, n) {
                t = this.format(t);
                var o = ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
                    l = r.style,
                    d, p, i, c, m, u, g, f, y, T, h, v, b, x, S, E;
                for (y = parseFloat(r.offsetWidth), T = parseFloat(r.offsetHeight), d = t.split(' '), p = 0; p < o.length; p++) this.p.indexOf('border') && (o[p] = Q(o[p])), m = c = te(r, o[p], _, !1, '0px'), -1 !== m.indexOf(' ') && (c = m.split(' '), m = c[0], c = c[1]), u = i = d[p], g = parseFloat(m), v = m.substr((g + '').length), b = '=' === u.charAt(1), b ? (f = parseInt(u.charAt(0) + '1', 10), u = u.substr(2), f *= parseFloat(u), h = u.substr((f + '').length - (0 > f ? 1 : 0)) || '') : (f = parseFloat(u), h = u.substr((f + '').length)), '' === h && (h = s[e] || v), h !== v && (x = ie(r, 'borderLeft', g, v), S = ie(r, 'borderTop', g, v), '%' === h ? (m = 100 * (x / y) + '%', c = 100 * (S / T) + '%') : 'em' === h ? (E = ie(r, 'borderLeft', 1, 'em'), m = x / E + 'em', c = S / E + 'em') : (m = x + 'px', c = S + 'px'), b && (u = parseFloat(m) + f + h, i = parseFloat(c) + f + h)), n = Le(l, o[p], m + ' ' + c, u + ' ' + i, !1, '0px', n);
                return n
            },
            prefix: !0,
            formatter: Re('0px 0px 0px 0px', !1, !0)
        }), i('borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius', {
            defaultValue: '0px',
            parser: function(i, t, e, r, a) {
                return Le(i.style, e, this.format(te(i, e, _, !1, '0px 0px')), this.format(t), !1, '0px', a)
            },
            prefix: !0,
            formatter: Re('0px 0px', !1, !0)
        }), i('backgroundPosition', {
            defaultValue: '0 0',
            parser: function(r, t, e, a, n, o) {
                var s = 'background-position',
                    l = _ || ee(r, null),
                    d = this.format((l ? Se ? l.getPropertyValue(s + '-x') + ' ' + l.getPropertyValue(s + '-y') : l.getPropertyValue(s) : r.currentStyle.backgroundPositionX + ' ' + r.currentStyle.backgroundPositionY) || '0 0'),
                    p = this.format(t),
                    c, m, u, i, g, f;
                if (-1 !== d.indexOf('%') != (-1 !== p.indexOf('%')) && 2 > p.split(',').length && (f = te(r, 'backgroundImage').replace(O, ''), f && 'none' !== f)) {
                    for (c = d.split(' '), m = p.split(' '), Y.setAttribute('src', f), u = 2; - 1 < --u;) d = c[u], i = -1 !== d.indexOf('%'), i !== (-1 !== m[u].indexOf('%')) && (g = 0 === u ? r.offsetWidth - Y.width : r.offsetHeight - Y.height, c[u] = i ? parseFloat(d) / 100 * g + 'px' : 100 * (parseFloat(d) / g) + '%');
                    d = c.join(' ')
                }
                return this.parseComplex(r.style, d, p, n, o)
            },
            formatter: _e
        }), i('backgroundSize', {
            defaultValue: '0 0',
            formatter: function(e) {
                return e += '', 'co' === e.substr(0, 2) ? e : _e(-1 === e.indexOf(' ') ? e + ' ' + e : e)
            }
        }), i('perspective', {
            defaultValue: '0px',
            prefix: !0
        }), i('perspectiveOrigin', {
            defaultValue: '50% 50%',
            prefix: !0
        }), i('transformStyle', {
            prefix: !0
        }), i('backfaceVisibility', {
            prefix: !0
        }), i('userSelect', {
            prefix: !0
        }), i('margin', {
            parser: Ae('marginTop,marginRight,marginBottom,marginLeft')
        }), i('padding', {
            parser: Ae('paddingTop,paddingRight,paddingBottom,paddingLeft')
        }), i('clip', {
            defaultValue: 'rect(0px,0px,0px,0px)',
            parser: function(i, t, e, r, a, n) {
                var o, s, l;
                return 9 > Se ? (s = i.currentStyle, l = 8 > Se ? ' ' : ',', o = 'rect(' + s.clipTop + l + s.clipRight + l + s.clipBottom + l + s.clipLeft + ')', t = this.format(t).split(',').join(l)) : (o = this.format(te(i, this.p, _, !1, this.dflt)), t = this.format(t)), this.parseComplex(i.style, o, t, a, n)
            }
        }), i('textShadow', {
            defaultValue: '0px 0px 0px #999',
            color: !0,
            multi: !0
        }), i('autoRound,strictUnits', {
            parser: function(i, t, e, r, a) {
                return a
            }
        }), i('border', {
            defaultValue: '0px solid #000',
            parser: function(i, t, e, r, a, n) {
                var o = te(i, 'borderTopWidth', _, !1, '0px'),
                    s = this.format(t).split(' '),
                    l = s[0].replace(C, '');
                return 'px' !== l && (o = parseFloat(o) / ie(i, 'borderTopWidth', 1, l) + l), this.parseComplex(i.style, this.format(o + ' ' + te(i, 'borderTopStyle', _, !1, 'solid') + ' ' + te(i, 'borderTopColor', _, !1, '#000')), s.join(' '), a, n)
            },
            color: !0,
            formatter: function(e) {
                var t = e.split(' ');
                return t[0] + ' ' + (t[1] || 'solid') + ' ' + (e.match(ye) || ['#000'])[0]
            }
        }), i('borderWidth', {
            parser: Ae('borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth')
        }), i('float,cssFloat,styleFloat', {
            parser: function(i, t, e, r, a) {
                var n = i.style,
                    o = 'cssFloat' in n ? 'cssFloat' : 'styleFloat';
                return new Oe(n, o, 0, 0, a, -1, e, !1, 0, n[o], t)
            }
        });
        var rt = function(e) {
            var i = this.t,
                t = i.filter || te(this.data, 'filter') || '',
                r = 0 | this.s + this.c * e,
                a;
            100 == r && (-1 === t.indexOf('atrix(') && -1 === t.indexOf('radient(') && -1 === t.indexOf('oader(') ? (i.removeAttribute('filter'), a = !te(this.data, 'filter')) : (i.filter = t.replace($, ''), a = !0)), a || (this.xn1 && (i.filter = t = t || 'alpha(opacity=' + r + ')'), -1 === t.indexOf('pacity') ? (0 != r || !this.xn1) && (i.filter = t + ' alpha(opacity=' + r + ')') : i.filter = t.replace(R, 'opacity=' + r))
        };
        i('opacity,alpha,autoAlpha', {
            defaultValue: '1',
            parser: function(i, t, r, a, n, o) {
                var s = parseFloat(te(i, 'opacity', _, !1, '1')),
                    l = i.style,
                    d = 'autoAlpha' === r;
                return 'string' == typeof t && '=' === t.charAt(1) && (t = ('-' === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + s), d && 1 === s && 'hidden' === te(i, 'visibility', _) && 0 !== t && (s = 0), q ? n = new Oe(l, 'opacity', s, t - s, n) : (n = new Oe(l, 'opacity', 100 * s, 100 * (t - s), n), n.xn1 = d ? 1 : 0, l.zoom = 1, n.type = 2, n.b = 'alpha(opacity=' + n.s + ')', n.e = 'alpha(opacity=' + (n.s + n.c) + ')', n.data = i, n.plugin = o, n.setRatio = rt), d && (n = new Oe(l, 'visibility', 0, 0, n, -1, null, !1, 0, 0 === s ? 'hidden' : 'inherit', 0 === t ? 'hidden' : 'inherit'), n.xs0 = 'inherit', a._overwriteProps.push(n.n), a._overwriteProps.push(r)), n
            }
        });
        var at = function(e, t) {
                t && (e.removeProperty ? (('ms' === t.substr(0, 2) || 'webkit' === t.substr(0, 6)) && (t = '-' + t), e.removeProperty(t.replace(P, '-$1').toLowerCase())) : e.removeAttribute(t))
            },
            nt = function(e) {
                if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                    this.t.setAttribute('class', 0 === e ? this.b : this.e);
                    for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : at(i, t.p), t = t._next;
                    1 == e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute('class') !== this.e && this.t.setAttribute('class', this.e)
            };
        i('className', {
            parser: function(i, t, e, r, a, n, o) {
                var s = i.getAttribute('class') || '',
                    d = i.style.cssText,
                    p, c, m, u, g;
                if (a = r._classNamePT = new Oe(i, e, 0, 0, a, 2), a.setRatio = nt, a.pr = -11, l = !0, a.b = s, c = ae(i, _), m = i._gsClassPT, m) {
                    for (u = {}, g = m.data; g;) u[g.p] = 1, g = g._next;
                    m.setRatio(1)
                }
                return i._gsClassPT = a, a.e = '=' === t.charAt(1) ? s.replace(new RegExp('(?:\\s|^)' + t.substr(2) + '(?![\\w-])'), '') + ('+' === t.charAt(0) ? ' ' + t.substr(2) : '') : t, i.setAttribute('class', a.e), p = ne(i, c, ae(i), o, u), i.setAttribute('class', s), a.data = p.firstMPT, i.style.cssText = d, a = a.xfirst = r.parse(i, p.difs, a, n), a
            }
        });
        var ot = function(e) {
            if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && 'isFromStart' !== this.data.data) {
                var t = this.t.style,
                    r = o.transform.parse,
                    n, a, s, i, l;
                if ('all' === this.e) t.cssText = '', i = !0;
                else
                    for (n = this.e.split(' ').join('').split(','), s = n.length; - 1 < --s;) a = n[s], o[a] && (o[a].parse === r ? i = !0 : a = 'transformOrigin' === a ? Me : o[a].p), at(t, a);
                i && (at(t, Ne), l = this.t._gsTransform, l && (l.svg && (this.t.removeAttribute('data-svg-origin'), this.t.removeAttribute('transform')), delete this.t._gsTransform))
            }
        };
        for (i('clearProps', {
                parser: function(i, t, e, r, a) {
                    return a = new Oe(i, e, 0, 0, a, 2), a.setRatio = ot, a.e = t, a.pr = -10, a.data = r._tween, l = !0, a
                }
            }), e = ['bezier', 'throwProps', 'physicsProps', 'physics2D'], De = e.length; De--;) ze(e[De]);
        e = n.prototype, e._firstPT = e._lastParsedTransform = e._transform = null, e._onInitTween = function(e, t, i, r) {
            if (!e.nodeType) return !1;
            this._target = Ee = e, this._tween = i, this._vars = t, Ce = r, he = t.autoRound, l = !1, s = t.suffixMap || n.suffixMap, _ = ee(e, ''), d = this._overwriteProps;
            var a = e.style,
                p, c, m, u, g, f, y, h, T;
            if (Te && '' === a.zIndex && (p = te(e, 'zIndex', _), ('auto' === p || '' === p) && this._addLazySet(a, 'zIndex', 0)), 'string' == typeof t && (u = a.cssText, p = ae(e, _), a.cssText = u + ';' + t, p = ne(e, p, ae(e)).difs, !q && A.test(t) && (p.opacity = parseFloat(RegExp.$1)), t = p, a.cssText = u), this._firstPT = t.className ? c = o.className.parse(e, t.className, 'className', this, null, null, t) : c = this.parse(e, t, null), this._transformType) {
                for (T = 3 === this._transformType, Ne ? ve && (Te = !0, '' === a.zIndex && (y = te(e, 'zIndex', _), ('auto' === y || '' === y) && this._addLazySet(a, 'zIndex', 0)), xe && this._addLazySet(a, 'WebkitBackfaceVisibility', this._vars.WebkitBackfaceVisibility || (T ? 'visible' : 'hidden'))) : a.zoom = 1, m = c; m && m._next;) m = m._next;
                h = new Oe(e, 'transform', 0, 0, null, 2), this._linkCSSP(h, null, m), h.setRatio = Ne ? tt : et, h.data = this._transform || Qe(e, _, !0), h.tween = i, h.pr = -1, d.pop()
            }
            if (l) {
                for (; c;) {
                    for (f = c._next, m = u; m && m.pr > c.pr;) m = m._next;
                    (c._prev = m ? m._prev : g) ? c._prev._next = c: u = c, (c._next = m) ? m._prev = c : g = c, c = f
                }
                this._firstPT = u
            }
            return !0
        }, e.parse = function(e, t, i, r) {
            var a = e.style,
                n, l, d, p, c, m, u, g, f, y;
            for (n in t) {
                if (m = t[n], 'function' == typeof m && (m = m(Ce, Ee)), l = o[n], l) i = l.parse(e, m, n, this, i, r, t);
                else if ('--' === n.substr(0, 2)) {
                    this._tween._propLookup[n] = this._addTween.call(this._tween, e.style, 'setProperty', ee(e).getPropertyValue(n) + '', m + '', n, !1, n);
                    continue
                } else c = te(e, n, _) + '', f = 'string' == typeof m, 'color' === n || 'fill' === n || 'stroke' === n || -1 !== n.indexOf('Color') || f && v.test(m) ? (!f && (m = ge(m), m = (3 < m.length ? 'rgba(' : 'rgb(') + m.join(',') + ')'), i = Le(a, n, c, m, !0, 'transparent', i, 0, r)) : f && F.test(m) ? i = Le(a, n, c, m, !0, null, i, 0, r) : (d = parseFloat(c), u = d || 0 === d ? c.substr((d + '').length) : '', ('' === c || 'auto' === c) && ('width' === n || 'height' === n ? (d = le(e, n, _), u = 'px') : 'left' === n || 'top' === n ? (d = re(e, n, _), u = 'px') : (d = 'opacity' === n ? 1 : 0, u = '')), y = f && '=' === m.charAt(1), y ? (p = parseInt(m.charAt(0) + '1', 10), m = m.substr(2), p *= parseFloat(m), g = m.replace(C, '')) : (p = parseFloat(m), g = f ? m.replace(C, '') : ''), '' === g && (g = n in s ? s[n] : u), m = p || 0 === p ? (y ? p + d : p) + g : t[n], u !== g && ('' !== g || 'lineHeight' == n) && (p || 0 === p) && d && (d = ie(e, n, d, u), '%' === g ? (d /= ie(e, n, 100, '%') / 100, !0 !== t.strictUnits && (c = d + '%')) : 'em' === g || 'rem' === g || 'vw' === g || 'vh' === g ? d /= ie(e, n, 1, g) : 'px' !== g && (p = ie(e, n, p, g), g = 'px'), y && (p || 0 === p) && (m = p + d + g)), y && (p += d), (d || 0 === d) && (p || 0 === p) ? (i = new Oe(a, n, d, p - d, i, 0, n, !1 !== he && ('px' === g || 'zIndex' == n), 0, c, m), i.xs0 = g) : void 0 !== a[n] && (m || 'NaN' != m + '' && null != m) ? (i = new Oe(a, n, p || d || 0, 0, i, -1, n, !1, 0, c, m), i.xs0 = 'none' === m && ('display' === n || -1 !== n.indexOf('Style')) ? c : m) : W('invalid ' + n + ' tween value: ' + t[n]));
                r && i && !i.plugin && (i.plugin = r)
            }
            return i
        }, e.setRatio = function(e) {
            var t = this._firstPT,
                r = 1e-6,
                a, n, o;
            if (1 === e && (this._tween._time === this._tween._duration || 0 === this._tween._time))
                for (; t;) {
                    if (2 === t.type) t.setRatio(e);
                    else if (!(t.r && -1 !== t.type)) t.t[t.p] = t.e;
                    else if (a = t.r(t.s + t.c), !t.type) t.t[t.p] = a + t.xs0;
                    else if (1 === t.type) {
                        for (o = t.l, n = t.xs0 + a + t.xs1, o = 1; o < t.l; o++) n += t['xn' + o] + t['xs' + (o + 1)];
                        t.t[t.p] = n
                    }
                    t = t._next
                } else if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; t;) {
                        if (a = t.c * e + t.s, t.r ? a = t.r(a) : a < r && a > -r && (a = 0), !t.type) t.t[t.p] = a + t.xs0;
                        else if (1 !== t.type) - 1 === t.type ? t.t[t.p] = t.xs0 : t.setRatio && t.setRatio(e);
                        else if (o = t.l, 2 === o) t.t[t.p] = t.xs0 + a + t.xs1 + t.xn1 + t.xs2;
                        else if (3 === o) t.t[t.p] = t.xs0 + a + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3;
                        else if (4 === o) t.t[t.p] = t.xs0 + a + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4;
                        else if (5 === o) t.t[t.p] = t.xs0 + a + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5;
                        else {
                            for (n = t.xs0 + a + t.xs1, o = 1; o < t.l; o++) n += t['xn' + o] + t['xs' + (o + 1)];
                            t.t[t.p] = n
                        }
                        t = t._next
                    } else
                        for (; t;) 2 === t.type ? t.setRatio(e) : t.t[t.p] = t.b, t = t._next
        }, e._enableTransforms = function(e) {
            this._transform = this._transform || Qe(this._target, _, !0), this._transformType = !(this._transform.svg && it) && (e || 3 === this._transformType) ? 3 : 2
        };
        var st = function() {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        e._addLazySet = function(e, t, i) {
            var r = this._firstPT = new Oe(e, t, 0, 0, this._firstPT, 2);
            r.e = i, r.setRatio = st, r.data = this
        }, e._linkCSSP = function(e, t, i, r) {
            return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, r = !0), i ? i._next = e : !r && null === this._firstPT && (this._firstPT = e), e._next = t, e._prev = i), e
        }, e._mod = function(e) {
            for (var t = this._firstPT; t;) 'function' == typeof e[t.p] && (t.r = e[t.p]), t = t._next
        }, e._kill = function(e) {
            var t = e,
                i, r, a;
            if (e.autoAlpha || e.alpha) {
                for (r in t = {}, e) t[r] = e[r];
                t.opacity = 1, t.autoAlpha && (t.visibility = 1)
            }
            for (e.className && (i = this._classNamePT) && (a = i.xfirst, a && a._prev ? this._linkCSSP(a._prev, i._next, a._prev._prev) : a === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, a._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== r && i.plugin._kill && (i.plugin._kill(e), r = i.plugin), i = i._next;
            return S.e.prototype._kill.call(this, t)
        };
        var lt = function t(r, e, a) {
            var n, o, i, s;
            if (r.slice) {
                for (o = r.length; - 1 < --o;) t(r[o], e, a);
                return
            }
            for (n = r.childNodes, o = n.length; - 1 < --o;) i = n[o], s = i.type, i.style && (e.push(ae(i)), a && a.push(i)), (1 === s || 9 === s || 11 === s) && i.childNodes.length && t(i, e, a)
        };
        return n.cascadeTo = function(t, r, a) {
            var n = S.g.to(t, r, a),
                o = [n],
                s = [],
                l = [],
                e = [],
                _ = S.g._internals.reservedProps,
                d, i, c, p;
            for (t = n._targets || n.target, lt(t, s, e), n.render(r, !0, !0), lt(t, l), n.render(0, !0, !0), n._enabled(!0), d = e.length; - 1 < --d;)
                if (i = ne(e[d], s[d], l[d]), i.firstMPT) {
                    for (c in i = i.difs, a) _[c] && (i[c] = a[c]);
                    for (c in p = {}, i) p[c] = s[d][c];
                    o.push(S.g.fromTo(e[d], r, p, i))
                } return o
        }, S.e.activate([n]), n
    }, !0);
    var C = S.h.CSSPlugin,
        R = S.f._gsDefine.plugin({
            propName: 'attr',
            API: 2,
            version: '0.6.1',
            init: function(e, t, i, r) {
                var a, n;
                if ('function' != typeof e.setAttribute) return !1;
                for (a in t) n = t[a], 'function' == typeof n && (n = n(r, e)), this._addTween(e, 'setAttribute', e.getAttribute(a) + '', n + '', a, !1, a), this._overwriteProps.push(a);
                return !0
            }
        }),
        A = S.f._gsDefine.plugin({
            propName: 'roundProps',
            version: '1.7.0',
            priority: -1,
            API: 2,
            init: function(e, t, i) {
                return this._tween = i, !0
            }
        }),
        $ = function(e) {
            var t = 1 > e ? d(10, (e + '').length - 2) : 1;
            return function(i) {
                return (0 | m(i / e) * e * t) / t
            }
        },
        P = function(e, t) {
            for (; e;) e.f || e.blob || (e.m = t || m), e = e._next
        },
        w = A.prototype;
    /*!
     * VERSION: 0.6.1
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     */
    w._onInitAllProps = function() {
        var e = this._tween,
            t = e.vars.roundProps,
            r = {},
            n = e._propLookup.roundProps,
            o, s, l, i;
        if ('object' === a(t) && !t.push)
            for (i in t) r[i] = $(t[i]);
        else
            for ('string' == typeof t && (t = t.split(',')), l = t.length; - 1 < --l;) r[t[l]] = m;
        for (i in r)
            for (o = e._firstPT; o;) s = o._next, o.pg ? o.t._mod(r) : o.n === i && (2 === o.f && o.t ? P(o.t._firstPT, r[i]) : (this._add(o.t, i, o.s, o.c, r[i]), s && (s._prev = o._prev), o._prev ? o._prev._next = s : e._firstPT === o && (e._firstPT = s), o._next = o._prev = null, e._propLookup[i] = n)), o = s;
        return !1
    }, w._add = function(e, t, i, r, a) {
        this._addTween(e, t, i, i + r, t, a || m), this._overwriteProps.push(t)
    };
    var O = S.f._gsDefine.plugin({
        propName: 'directionalRotation',
        version: '0.3.1',
        API: 2,
        init: function(e, t, i, r) {
            'object' !== n(t) && (t = {
                rotation: t
            }), this.finals = {};
            var a = !0 === t.useRadians ? 2 * c : 360,
                o = 1e-6,
                s, l, _, d, p, m;
            for (s in t) 'useRadians' !== s && (d = t[s], 'function' == typeof d && (d = d(r, e)), m = (d + '').split('_'), l = m[0], _ = parseFloat('function' == typeof e[s] ? e[s.indexOf('set') || 'function' != typeof e['get' + s.substr(3)] ? s : 'get' + s.substr(3)]() : e[s]), d = this.finals[s] = 'string' == typeof l && '=' === l.charAt(1) ? _ + parseInt(l.charAt(0) + '1', 10) * +l.substr(2) : +l || 0, p = d - _, m.length && (l = m.join('_'), -1 !== l.indexOf('short') && (p %= a, p !== p % (a / 2) && (p = 0 > p ? p + a : p - a)), -1 !== l.indexOf('_cw') && 0 > p ? p = (p + 9999999999 * a) % a - (0 | p / a) * a : -1 !== l.indexOf('ccw') && 0 < p && (p = (p - 9999999999 * a) % a - (0 | p / a) * a)), (p > o || p < -o) && (this._addTween(e, s, _, _ + p, s), this._overwriteProps.push(s)));
            return !0
        },
        set: function(e) {
            var t;
            if (1 !== e) this._super.setRatio.call(this, e);
            else
                for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
        }
    });
    O._autoCSS = !0, S.f._gsDefine('TimelineMax', ['TimelineLite', 'TweenLite', 'easing.Ease'], function() {
        var e = function(e) {
                x.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
            },
            t = 1e-10,
            i = S.g._internals,
            r = i.lazyTweens,
            a = i.lazyRender,
            n = S.f._gsDefine.globals,
            o = new S.b(null, null, 1, 0),
            s = e.prototype = new x;
        return s.constructor = e, s.kill()._gc = !1, e.version = '2.0.2', s.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), x.prototype.invalidate.call(this)
        }, s.addCallback = function(e, t, i, r) {
            return this.add(S.g.delayedCall(0, e, i, r), t)
        }, s.removeCallback = function(e, t) {
            if (e)
                if (null == t) this._kill(null, e);
                else
                    for (var r = this.getTweensOf(e, !1), a = r.length, i = this._parseTimeOrLabel(t); - 1 < --a;) r[a]._startTime === i && r[a]._enabled(!1, !1);
            return this
        }, s.removePause = function(e) {
            return this.removeCallback(x._internals.pauseCallback, e)
        }, s.tweenTo = function(e, i) {
            i = i || {};
            var r = {
                    ease: o,
                    useFrames: this.usesFrames(),
                    immediateRender: !1,
                    lazy: !1
                },
                a = i.repeat && n.TweenMax || S.g,
                s, l, _;
            for (l in i) r[l] = i[l];
            return r.time = this._parseTimeOrLabel(e), s = h(+r.time - this._time) / this._timeScale || .001, _ = new a(this, s, r), r.onStart = function() {
                _.target.paused(!0), _.vars.time === _.target.time() || s !== _.duration() || _.isFromTo || _.duration(h(_.vars.time - _.target.time()) / _.target._timeScale).render(_.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || _, i.onStartParams || [])
            }, _
        }, s.tweenFromTo = function(e, i, r) {
            r = r || {}, e = this._parseTimeOrLabel(e), r.startAt = {
                onComplete: this.seek,
                onCompleteParams: [e],
                callbackScope: this
            }, r.immediateRender = !1 !== r.immediateRender;
            var a = this.tweenTo(i, r);
            return a.isFromTo = 1, a.duration(h(a.vars.time - e) / this._timeScale || .001)
        }, s.render = function(e, i, n) {
            this._gc && this._enabled(!0, !1);
            var o = this._time,
                s = this._dirty ? this.totalDuration() : this._totalDuration,
                l = this._duration,
                _ = this._totalTime,
                d = this._startTime,
                p = this._timeScale,
                c = this._rawPrevTime,
                m = this._paused,
                u = this._cycle,
                g, f, y, h, T, v, b, x;
            if (o !== this._time && (e += this._time - o), e >= s - 1e-7 && 0 <= e) this._locked || (this._totalTime = s, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (f = !0, h = 'onComplete', T = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && -1e-7 <= e || 0 > c || c === t) && c !== e && this._first && (T = !0, c > t && (h = 'onReverseComplete'))), this._rawPrevTime = this._duration || !i || e || this._rawPrevTime === e ? e : t, this._yoyo && 0 != (1 & this._cycle) ? this._time = e = 0 : (this._time = l, e = l + 1e-4);
            else if (1e-7 > e) {
                if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== o || 0 === l && c !== t && (0 < c || 0 > e && 0 <= c) && !this._locked) && (h = 'onReverseComplete', f = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (T = f = !0, h = 'onReverseComplete') : 0 <= c && this._first && (T = !0), this._rawPrevTime = e;
                else {
                    if (this._rawPrevTime = l || !i || e || this._rawPrevTime === e ? e : t, 0 === e && f)
                        for (g = this._first; g && 0 === g._startTime;) g._duration || (f = !1), g = g._next;
                    e = 0, this._initted || (T = !0)
                }
            } else if (0 === l && 0 > c && (T = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (v = l + this._repeatDelay, this._cycle = this._totalTime / v >> 0, 0 !== this._cycle && this._cycle === this._totalTime / v && _ <= e && this._cycle--, this._time = this._totalTime - this._cycle * v, this._yoyo && 0 != (1 & this._cycle) && (this._time = l - this._time), this._time > l ? (this._time = l, e = l + 1e-4) : 0 > this._time ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !i) {
                if (e = this._time, e >= o || this._repeat && u !== this._cycle)
                    for (g = this._first; g && g._startTime <= e && !b;) g._duration || 'isPause' !== g.data || g.ratio || 0 === g._startTime && 0 === this._rawPrevTime || (b = g), g = g._next;
                else
                    for (g = this._last; g && g._startTime >= e && !b;) !g._duration && 'isPause' === g.data && 0 < g._rawPrevTime && (b = g), g = g._prev;
                b && b._startTime < l && (this._time = e = b._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== u && !this._locked) {
                var S = this._yoyo && 0 != (1 & u),
                    E = S === (this._yoyo && 0 != (1 & this._cycle)),
                    C = this._totalTime,
                    R = this._cycle,
                    A = this._rawPrevTime,
                    $ = this._time;
                if (this._totalTime = u * l, this._cycle < u ? S = !S : this._totalTime += l, this._time = o, this._rawPrevTime = 0 === l ? c - 1e-4 : c, this._cycle = u, this._locked = !0, o = S ? 0 : l, this.render(o, i, 0 === l), i || this._gc || !this.vars.onRepeat || (this._cycle = R, this._locked = !1, this._callback('onRepeat')), o !== this._time) return;
                if (E && (this._cycle = u, this._locked = !0, o = S ? l + 1e-4 : -1e-4, this.render(o, !0, !1)), this._locked = !1, this._paused && !m) return;
                this._time = $, this._totalTime = C, this._cycle = R, this._rawPrevTime = A
            }
            if ((this._time === o || !this._first) && !n && !T && !b) return void(_ !== this._totalTime && this._onUpdate && !i && this._callback('onUpdate'));
            if (this._initted || (this._initted = !0), this._active || this._paused || this._totalTime === _ || !(0 < e) || (this._active = !0), 0 !== _ || !this.vars.onStart || 0 === this._totalTime && this._totalDuration || i || this._callback('onStart'), x = this._time, x >= o)
                for (g = this._first; g && (y = g._next, x === this._time && (!this._paused || m));)(g._active || g._startTime <= this._time && !g._paused && !g._gc) && (b === g && this.pause(), g._reversed ? g.render((g._dirty ? g.totalDuration() : g._totalDuration) - (e - g._startTime) * g._timeScale, i, n) : g.render((e - g._startTime) * g._timeScale, i, n)), g = y;
            else
                for (g = this._last; g && (y = g._prev, x === this._time && (!this._paused || m));) {
                    if (g._active || g._startTime <= o && !g._paused && !g._gc) {
                        if (b === g) {
                            for (b = g._prev; b && b.endTime() > this._time;) b.render(b._reversed ? b.totalDuration() - (e - b._startTime) * b._timeScale : (e - b._startTime) * b._timeScale, i, n), b = b._prev;
                            b = null, this.pause()
                        }
                        g._reversed ? g.render((g._dirty ? g.totalDuration() : g._totalDuration) - (e - g._startTime) * g._timeScale, i, n) : g.render((e - g._startTime) * g._timeScale, i, n)
                    }
                    g = y
                }
            this._onUpdate && !i && (r.length && a(), this._callback('onUpdate')), h && !this._locked && !this._gc && (d === this._startTime || p !== this._timeScale) && (0 === this._time || s >= this.totalDuration()) && (f && (r.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !i && this.vars[h] && this._callback(h))
        }, s.getActive = function(e, t, r) {
            null == e && (e = !0), null == t && (t = !0), null == r && (r = !1);
            var n = [],
                a = this.getChildren(e, t, r),
                o = 0,
                s = a.length,
                l, i;
            for (l = 0; l < s; l++) i = a[l], i.isActive() && (n[o++] = i);
            return n
        }, s.getLabelAfter = function(e) {
            e || 0 === e || (e = this._time);
            var t = this.getLabelsArray(),
                r = t.length,
                a;
            for (a = 0; a < r; a++)
                if (t[a].time > e) return t[a].name;
            return null
        }, s.getLabelBefore = function(e) {
            null == e && (e = this._time);
            for (var t = this.getLabelsArray(), r = t.length; - 1 < --r;)
                if (t[r].time < e) return t[r].name;
            return null
        }, s.getLabelsArray = function() {
            var e = [],
                t = 0,
                i;
            for (i in this._labels) e[t++] = {
                time: this._labels[i],
                name: i
            };
            return e.sort(function(e, t) {
                return e.time - t.time
            }), e
        }, s.invalidate = function() {
            return this._locked = !1, x.prototype.invalidate.call(this)
        }, s.progress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
        }, s.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
        }, s.totalDuration = function(e) {
            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (x.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, s.time = function(e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
        }, s.repeat = function(e) {
            return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, s.repeatDelay = function(e) {
            return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, s.yoyo = function(e) {
            return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, s.currentLabel = function(e) {
            return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
        }, e
    }, !0);
    var k = S.h.TimelineMax,
        L = [],
        D = [],
        I = [],
        z = {},
        F = S.f._gsDefine.globals,
        N = function(e, t, i, r) {
            i === r && (i = r - (r - t) / 1e6), e === t && (t = e + (i - e) / 1e6), this.a = e, this.b = t, this.c = i, this.d = r, this.da = r - e, this.ca = i - e, this.ba = t - e
        },
        H = function(e, t, i, r) {
            var n = {
                    a: e
                },
                o = {},
                s = {},
                l = {
                    c: r
                },
                _ = (e + t) / 2,
                p = (t + i) / 2,
                c = (i + r) / 2,
                m = (_ + p) / 2,
                u = (p + c) / 2,
                g = (u - m) / 8;
            return n.b = _ + (e - _) / 4, o.b = m + g, n.c = o.a = (n.b + o.b) / 2, o.c = s.a = (m + u) / 2, s.b = u - g, l.b = c + (r - c) / 4, s.c = l.a = (s.b + l.b) / 2, [n, o, s, l]
        },
        M = function(e, t, r, a, n) {
            var o = e.length - 1,
                s = 0,
                l = e[0].a,
                _, i, d, p, c, m, u, g, f, y, h, T, v;
            for (_ = 0; _ < o; _++) c = e[s], i = c.a, d = c.d, p = e[s + 1].d, n ? (h = L[_], T = D[_], v = .25 * ((T + h) * t) / (a ? .5 : I[_] || .5), m = d - (d - i) * (a ? .5 * t : 0 === h ? 0 : v / h), u = d + (p - d) * (a ? .5 * t : 0 === T ? 0 : v / T), g = d - (m + ((u - m) * (3 * h / (h + T) + .5) / 4 || 0))) : (m = d - .5 * ((d - i) * t), u = d + .5 * ((p - d) * t), g = d - (m + u) / 2), m += g, u += g, c.c = f = m, c.b = 0 === _ ? l = c.a + .6 * (c.c - c.a) : l, c.da = d - i, c.ca = f - i, c.ba = l - i, r ? (y = H(i, l, f, d), e.splice(s, 1, y[0], y[1], y[2], y[3]), s += 4) : s++, l = u;
            c = e[s], c.b = l, c.c = l + .4 * (c.d - l), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = l - c.a, r && (y = H(c.a, l, c.c, c.d), e.splice(s, 1, y[0], y[1], y[2], y[3]))
        },
        B = function(e, t, r, n) {
            var o = [],
                a, s, i, l, _, d;
            if (n)
                for (e = [n].concat(e), s = e.length; - 1 < --s;) 'string' == typeof(d = e[s][t]) && '=' === d.charAt(1) && (e[s][t] = n[t] + +(d.charAt(0) + d.substr(2)));
            if (a = e.length - 2, 0 > a) return o[0] = new N(e[0][t], 0, 0, e[0][t]), o;
            for (s = 0; s < a; s++) i = e[s][t], l = e[s + 1][t], o[s] = new N(i, 0, 0, l), r && (_ = e[s + 2][t], L[s] = (L[s] || 0) + (l - i) * (l - i), D[s] = (D[s] || 0) + (_ - l) * (_ - l));
            return o[s] = new N(e[s][t], 0, 0, e[s + 1][t]), o
        },
        U = function(e, t, n, o, s, _) {
            var d = {},
                c = [],
                m = _ || e[0],
                g, i, p, a, f, r, l, y;
            for (i in s = 'string' == typeof s ? ',' + s + ',' : ',x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,', null == t && (t = 1), e[0]) c.push(i);
            if (1 < e.length) {
                for (y = e[e.length - 1], l = !0, g = c.length; - 1 < --g;)
                    if (i = c[g], .05 < h(m[i] - y[i])) {
                        l = !1;
                        break
                    } l && (e = e.concat(), _ && e.unshift(_), e.push(e[1]), _ = e[e.length - 3])
            }
            for (L.length = D.length = I.length = 0, g = c.length; - 1 < --g;) i = c[g], z[i] = -1 !== s.indexOf(',' + i + ','), d[i] = B(e, i, z[i], _);
            for (g = L.length; - 1 < --g;) L[g] = u(L[g]), D[g] = u(D[g]);
            if (!o) {
                for (g = c.length; - 1 < --g;)
                    if (z[i])
                        for (p = d[c[g]], r = p.length - 1, a = 0; a < r; a++) f = p[a + 1].da / D[a] + p[a].da / L[a] || 0, I[a] = (I[a] || 0) + f * f;
                for (g = I.length; - 1 < --g;) I[g] = u(I[g])
            }
            for (g = c.length, a = n ? 4 : 1; - 1 < --g;) i = c[g], p = d[i], M(p, t, n, o, z[i]), l && (p.splice(0, a), p.splice(p.length - a, a));
            return d
        },
        X = function(e, t, r) {
            t = t || 'soft';
            var n = {},
                o = 'cubic' === t ? 3 : 2,
                s = 'soft' === t,
                _ = [],
                m, a, u, c, d, g, i, f, l, p, y;
            if (s && r && (e = [r].concat(e)), null == e || e.length < o + 1) throw 'invalid Bezier data';
            for (l in e[0]) _.push(l);
            for (g = _.length; - 1 < --g;) {
                for (l = _[g], n[l] = d = [], p = 0, f = e.length, i = 0; i < f; i++) m = null == r ? e[i][l] : 'string' == typeof(y = e[i][l]) && '=' === y.charAt(1) ? r[l] + +(y.charAt(0) + y.substr(2)) : +y, s && 1 < i && i < f - 1 && (d[p++] = (m + d[p - 2]) / 2), d[p++] = m;
                for (f = p - o + 1, p = 0, i = 0; i < f; i += o) m = d[i], a = d[i + 1], u = d[i + 2], c = 2 == o ? 0 : d[i + 3], d[p++] = y = 3 == o ? new N(m, a, u, c) : new N(m, (2 * a + m) / 3, (2 * a + u) / 3, u);
                d.length = p
            }
            return n
        },
        G = function(e, t, r) {
            for (var a = e.length, n, o, l, s, _, d, c, p, i, m, u; - 1 < --a;)
                for (m = e[a], l = m.a, s = m.d - l, _ = m.c - l, d = m.b - l, n = o = 0, p = 1; p <= r; p++) c = 1 / r * p, i = 1 - c, n = o - (o = (c * c * s + 3 * i * (c * _ + i * d)) * c), u = a * r + p - 1, t[u] = (t[u] || 0) + n * n
        },
        Y = function(e, t) {
            t = t >> 0 || 6;
            var r = [],
                a = [],
                n = 0,
                o = 0,
                s = t - 1,
                _ = [],
                d = [],
                c, p, i, l;
            for (c in e) G(e[c], r, t);
            for (i = r.length, p = 0; p < i; p++) n += u(r[p]), l = p % t, d[l] = n, l === s && (o += n, l = p / t >> 0, _[l] = d, a[l] = o, n = 0, d = []);
            return {
                length: o,
                lengths: a,
                segments: _
            }
        },
        K = S.f._gsDefine.plugin({
            propName: 'bezier',
            priority: -1,
            version: '1.3.8',
            API: 2,
            global: !0,
            init: function(e, t, r) {
                this._target = e, t instanceof Array && (t = {
                    values: t
                }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                var a = t.values || [],
                    n = {},
                    o = a[0],
                    s = t.autoRotate || r.vars.orientToBezier,
                    l, _, d, i, p;
                for (l in this._autoRotate = s ? s instanceof Array ? s : [
                        ['x', 'y', 'rotation', !0 === s ? 0 : +s || 0]
                    ] : null, o) this._props.push(l);
                for (d = this._props.length; - 1 < --d;) l = this._props[d], this._overwriteProps.push(l), _ = this._func[l] = 'function' == typeof e[l], n[l] = _ ? e[l.indexOf('set') || 'function' != typeof e['get' + l.substr(3)] ? l : 'get' + l.substr(3)]() : parseFloat(e[l]), p || n[l] === a[0][l] || (p = n);
                if (this._beziers = 'cubic' !== t.type && 'quadratic' !== t.type && 'soft' !== t.type ? U(a, isNaN(t.curviness) ? 1 : t.curviness, !1, 'thruBasic' === t.type, t.correlate, p) : X(a, t.type, n), this._segCount = this._beziers[l].length, this._timeRes) {
                    var c = Y(this._beziers, this._timeRes);
                    this._length = c.length, this._lengths = c.lengths, this._segments = c.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                }
                if (s = this._autoRotate)
                    for (this._initialRotations = [], s[0] instanceof Array || (this._autoRotate = s = [s]), d = s.length; - 1 < --d;) {
                        for (i = 0; 3 > i; i++) l = s[d][i], this._func[l] = 'function' == typeof e[l] && e[l.indexOf('set') || 'function' != typeof e['get' + l.substr(3)] ? l : 'get' + l.substr(3)];
                        l = s[d][2], this._initialRotations[d] = (this._func[l] ? this._func[l].call(this._target) : this._target[l]) || 0, this._overwriteProps.push(l)
                    }
                return this._startRatio = r.vars.runBackwards ? 1 : 0, !0
            },
            set: function(e) {
                var r = this._segCount,
                    a = this._func,
                    n = this._target,
                    o = e !== this._startRatio,
                    s, _, d, i, p, m, t, u, l, g;
                if (!this._timeRes) s = 0 > e ? 0 : 1 <= e ? r - 1 : r * e >> 0, m = (e - s * (1 / r)) * r;
                else {
                    if (l = this._lengths, g = this._curSeg, e *= this._length, d = this._li, e > this._l2 && d < r - 1) {
                        for (u = r - 1; d < u && (this._l2 = l[++d]) <= e;);
                        this._l1 = l[d - 1], this._li = d, this._curSeg = g = this._segments[d], this._s2 = g[this._s1 = this._si = 0]
                    } else if (e < this._l1 && 0 < d) {
                        for (; 0 < d && (this._l1 = l[--d]) >= e;);
                        0 === d && e < this._l1 ? this._l1 = 0 : d++, this._l2 = l[d], this._li = d, this._curSeg = g = this._segments[d], this._s1 = g[(this._si = g.length - 1) - 1] || 0, this._s2 = g[this._si]
                    }
                    if (s = d, e -= this._l1, d = this._si, e > this._s2 && d < g.length - 1) {
                        for (u = g.length - 1; d < u && (this._s2 = g[++d]) <= e;);
                        this._s1 = g[d - 1], this._si = d
                    } else if (e < this._s1 && 0 < d) {
                        for (; 0 < d && (this._s1 = g[--d]) >= e;);
                        0 === d && e < this._s1 ? this._s1 = 0 : d++, this._s2 = g[d], this._si = d
                    }
                    m = (d + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                }
                for (_ = 1 - m, d = this._props.length; - 1 < --d;) i = this._props[d], p = this._beziers[i][s], t = (m * m * p.da + 3 * _ * (m * p.ca + _ * p.ba)) * m + p.a, this._mod[i] && (t = this._mod[i](t, n)), a[i] ? n[i](t) : n[i] = t;
                if (this._autoRotate) {
                    var f = this._autoRotate,
                        h, T, v, b, x, S, E;
                    for (d = f.length; - 1 < --d;) i = f[d][2], S = f[d][3] || 0, E = !0 === f[d][4] ? 1 : 180 / c, p = this._beziers[f[d][0]], h = this._beziers[f[d][1]], p && h && (p = p[s], h = h[s], T = p.a + (p.b - p.a) * m, b = p.b + (p.c - p.b) * m, T += (b - T) * m, b += (p.c + (p.d - p.c) * m - b) * m, v = h.a + (h.b - h.a) * m, x = h.b + (h.c - h.b) * m, v += (x - v) * m, x += (h.c + (h.d - h.c) * m - x) * m, t = o ? y(x - v, b - T) * E + S : this._initialRotations[d], this._mod[i] && (t = this._mod[i](t, n)), a[i] ? n[i](t) : n[i] = t)
                }
            }
        }),
        V = K.prototype;
    /*!
     * VERSION: 1.3.8
     * DATE: 2018-05-30
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     **/
    K.bezierThrough = U, K.cubicToQuadratic = H, K._autoCSS = !0, K.quadraticToCubic = function(e, t, i) {
        return new N(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
    }, K._cssRegister = function() {
        var e = F.CSSPlugin;
        if (e) {
            var t = e._internals,
                r = t._parseToProxy,
                a = t._setPluginRatio,
                n = t.CSSPropTween;
            t._registerComplexSpecialProp('bezier', {
                parser: function(o, t, s, _, d, c) {
                    t instanceof Array && (t = {
                        values: t
                    }), c = new K;
                    var m = t.values,
                        u = m.length - 1,
                        l = [],
                        g = {},
                        f, i, p;
                    if (0 > u) return d;
                    for (f = 0; f <= u; f++) p = r(o, m[f], _, d, c, u !== f), l[f] = p.end;
                    for (i in t) g[i] = t[i];
                    return g.values = l, d = new n(o, 'bezier', 0, 0, p.pt, 2), d.data = p, d.plugin = c, d.setRatio = a, 0 === g.autoRotate && (g.autoRotate = !0), g.autoRotate && !(g.autoRotate instanceof Array) && (f = !0 === g.autoRotate ? 0 : +g.autoRotate, g.autoRotate = null == p.end.left ? null != p.end.x && [
                        ['x', 'y', 'rotation', f, !1]
                    ] : [
                        ['left', 'top', 'rotation', f, !1]
                    ]), g.autoRotate && (!_._transform && _._enableTransforms(!1), p.autoRotate = _._target._gsTransform, p.proxy.rotation = p.autoRotate.rotation || 0, _._overwriteProps.push('rotation')), c._onInitTween(p.proxy, g, _._tween), d
                }
            })
        }
    }, V._mod = function(e) {
        for (var t = this._overwriteProps, r = t.length, i; - 1 < --r;) i = e[t[r]], i && 'function' == typeof i && (this._mod[t[r]] = i)
    }, V._kill = function(e) {
        var t = this._props,
            r, a;
        for (r in this._beziers)
            if (r in e)
                for (delete this._beziers[r], delete this._func[r], a = t.length; - 1 < --a;) t[a] === r && t.splice(a, 1);
        if (t = this._autoRotate, t)
            for (a = t.length; - 1 < --a;) e[t[a][2]] && t.splice(a, 1);
        return this._super._kill.call(this, e)
    }, S.f._gsDefine('easing.Back', ['easing.Ease'], function() {
        var e = S.f.GreenSockGlobals || S.f,
            t = e.com.greensock,
            i = 2 * c,
            r = c / 2,
            a = t._class,
            n = function(e, t) {
                var i = a('easing.' + e, function() {}, !0),
                    r = i.prototype = new S.b;
                return r.constructor = i, r.getRatio = t, i
            },
            o = S.b.register || function() {},
            s = function(e, t, i, r) {
                var n = a('easing.' + e, {
                    easeOut: new t,
                    easeIn: new i,
                    easeInOut: new r
                }, !0);
                return o(n, e), n
            },
            l = function(e, t, i) {
                this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
            },
            _ = function(e, t) {
                var i = a('easing.' + e, function(e) {
                        this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    r = i.prototype = new S.b;
                return r.constructor = i, r.getRatio = t, r.config = function(e) {
                    return new i(e)
                }, i
            },
            m = s('Back', _('BackOut', function(e) {
                return --e * e * ((this._p1 + 1) * e + this._p1) + 1
            }), _('BackIn', function(e) {
                return e * e * ((this._p1 + 1) * e - this._p1)
            }), _('BackInOut', function(e) {
                return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
            })),
            y = a('easing.SlowMo', function(e, t, i) {
                t = t || 0 === t ? t : .7, null == e ? e = .7 : 1 < e && (e = 1), this._p = 1 === e ? 0 : t, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
            }, !0),
            h = y.prototype = new S.b,
            p, T, v, b;
        return h.constructor = y, h.getRatio = function(e) {
            var t = e + (.5 - e) * this._p;
            return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 === e ? 0 : 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
        }, y.ease = new y(.7, .7), h.config = y.config = function(e, t, i) {
            return new y(e, t, i)
        }, p = a('easing.SteppedEase', function(e, t) {
            e = e || 1, this._p1 = 1 / e, this._p2 = e + (t ? 0 : 1), this._p3 = t ? 1 : 0
        }, !0), h = p.prototype = new S.b, h.constructor = p, h.getRatio = function(e) {
            return 0 > e ? e = 0 : 1 <= e && (e = .999999999), ((0 | this._p2 * e) + this._p3) * this._p1
        }, h.config = p.config = function(e, t) {
            return new p(e, t)
        }, T = a('easing.ExpoScaleEase', function(e, t, i) {
            this._p1 = Math.log(t / e), this._p2 = t - e, this._p3 = e, this._ease = i
        }, !0), h = T.prototype = new S.b, h.constructor = T, h.getRatio = function(e) {
            return this._ease && (e = this._ease.getRatio(e)), (this._p3 * Math.exp(this._p1 * e) - this._p3) / this._p2
        }, h.config = T.config = function(e, t, i) {
            return new T(e, t, i)
        }, v = a('easing.RoughEase', function(e) {
            e = e || {};
            for (var t = e.taper || 'none', r = [], a = 0, n = 0 | (e.points || 20), o = n, i = !1 !== e.randomize, s = !0 === e.clamp, _ = e.template instanceof S.b ? e.template : null, d = 'number' == typeof e.strength ? .4 * e.strength : .4, p, c, m, u, g, f; - 1 < --o;) p = i ? Math.random() : 1 / n * o, c = _ ? _.getRatio(p) : p, 'none' === t ? m = d : 'out' === t ? (u = 1 - p, m = u * u * d) : 'in' === t ? m = p * p * d : .5 > p ? (u = 2 * p, m = .5 * (u * u) * d) : (u = 2 * (1 - p), m = .5 * (u * u) * d), i ? c += Math.random() * m - .5 * m : o % 2 ? c += .5 * m : c -= .5 * m, s && (1 < c ? c = 1 : 0 > c && (c = 0)), r[a++] = {
                x: p,
                y: c
            };
            for (r.sort(function(e, t) {
                    return e.x - t.x
                }), f = new l(1, 1, null), o = n; - 1 < --o;) g = r[o], f = new l(g.x, g.y, f);
            this._prev = new l(0, 0, 0 === f.t ? f.next : f)
        }, !0), h = v.prototype = new S.b, h.constructor = v, h.getRatio = function(e) {
            var t = this._prev;
            if (e > t.t) {
                for (; t.next && e >= t.t;) t = t.next;
                t = t.prev
            } else
                for (; t.prev && e <= t.t;) t = t.prev;
            return this._prev = t, t.v + (e - t.t) / t.gap * t.c
        }, h.config = function(e) {
            return new v(e)
        }, v.ease = new v, s('Bounce', n('BounceOut', function(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }), n('BounceIn', function(e) {
            return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }), n('BounceInOut', function(e) {
            var t = .5 > e;
            return e = t ? 1 - 2 * e : 2 * e - 1, e = e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
        })), s('Circ', n('CircOut', function(e) {
            return u(1 - --e * e)
        }), n('CircIn', function(e) {
            return -(u(1 - e * e) - 1)
        }), n('CircInOut', function(e) {
            return 1 > (e *= 2) ? -.5 * (u(1 - e * e) - 1) : .5 * (u(1 - (e -= 2) * e) + 1)
        })), b = function(e, t, r) {
            var n = a('easing.' + e, function(e, t) {
                    this._p1 = 1 <= e ? e : 1, this._p2 = (t || r) / (1 > e ? e : 1), this._p3 = this._p2 / i * (Math.asin(1 / this._p1) || 0), this._p2 = i / this._p2
                }, !0),
                o = n.prototype = new S.b;
            return o.constructor = n, o.getRatio = t, o.config = function(e, t) {
                return new n(e, t)
            }, n
        }, s('Elastic', b('ElasticOut', function(e) {
            return this._p1 * d(2, -10 * e) * g((e - this._p3) * this._p2) + 1
        }, .3), b('ElasticIn', function(e) {
            return -(this._p1 * d(2, 10 * (e -= 1)) * g((e - this._p3) * this._p2))
        }, .3), b('ElasticInOut', function(e) {
            return 1 > (e *= 2) ? -.5 * (this._p1 * d(2, 10 * (e -= 1)) * g((e - this._p3) * this._p2)) : .5 * (this._p1 * d(2, -10 * (e -= 1)) * g((e - this._p3) * this._p2)) + 1
        }, .45)), s('Expo', n('ExpoOut', function(e) {
            return 1 - d(2, -10 * e)
        }), n('ExpoIn', function(e) {
            return d(2, 10 * (e - 1)) - .001
        }), n('ExpoInOut', function(e) {
            return 1 > (e *= 2) ? .5 * d(2, 10 * (e - 1)) : .5 * (2 - d(2, -10 * (e - 1)))
        })), s('Sine', n('SineOut', function(e) {
            return g(e * r)
        }), n('SineIn', function(e) {
            return -f(e * r) + 1
        }), n('SineInOut', function(e) {
            return -.5 * (f(c * e) - 1)
        })), a('easing.EaseLookup', {
            find: function(e) {
                return S.b.map[e]
            }
        }, !0), o(e.SlowMo, 'SlowMo', 'ease,'), o(v, 'RoughEase', 'ease,'), o(p, 'SteppedEase', 'ease,'), m
    }, !0);
    var q = S.h.Back,
        j = S.h.Elastic,
        W = S.h.Bounce,
        Z = S.h.RoughEase,
        J = S.h.SlowMo,
        Q = S.h.SteppedEase,
        ee = S.h.Circ,
        te = S.h.Expo,
        ie = S.h.Sine,
        re = S.h.ExpoScaleEase,
        ae = E;
    /*!
     * VERSION: 2.0.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     **/
    ae._autoActivated = [x, k, C, R, K, A, O, q, j, W, Z, J, Q, ee, te, ie, re];
    /*!
     * VERSION: 2.0.2
     * DATE: 2018-08-27
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     **/
    var ne = function() {
            var e = !1,
                t = !1,
                i = !1,
                r = !1,
                a = !1,
                n = navigator.userAgent.toLowerCase();
            'scrollRestoration' in window.history && (window.history.scrollRestoration = 'manual'), /Edge\/\d./i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) ? (t = !0, document.body.className += ' bummer') : t = !1,
                function(t) {
                    var i = /(android|bbd+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                        r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
                    (i.test(t) || r.test(t.substr(0, 4))) && (e = !0)
                }(navigator.userAgent || navigator.vendor), -1 < n.indexOf('firefox') && (i = !0);
            var o = navigator.userAgent;
            return e && (-1 < o.indexOf('CriOS') || -1 < o.indexOf('Chrome')) ? r = !0 : !(-1 < o.indexOf('CriOS') || -1 < o.indexOf('Chrome')) && (-1 < o.indexOf('iPad') || -1 < o.indexOf('iPhone')) && (a = !0), {
                isBummer: t,
                isFirefox: i,
                isMobile: e,
                isMobileSafari: a,
                isMobileChrome: r
            }
        },
        oe = ne(),
        se = oe.isMobile,
        le = oe.isBummer,
        _e = oe.isMobileChrome,
        de = oe.isMobileSafari,
        pe = oe.isFirefox,
        ce = {
            ww: o().width,
            wh: o().height,
            isMobile: se,
            isMobileChrome: _e,
            isMobileSafari: de,
            isFirefox: pe,
            isBummer: le,
            menuModels: [],
            header: ''
        },
        me = function(e) {
            for (var t = 0, r = 0; r < e.length; r++) e[r].offsetHeight > t && (t = e[r].offsetHeight);
            for (var i = 0; i < e.length; i++) e[i].offsetHeight < t && ae.set(e[i], {
                height: ''.concat(t, 'px')
            })
        },
        ue = function() {
            var e = document.querySelector('.offcanvas-nav'),
                t = e.querySelector('.micro-links span'),
                r = document.querySelector('.wiper-outer'),
                a = r.querySelector('.wiper-bg'),
                n = !!document.querySelector('header h2'),
                o = document.querySelector('header'),
                s = e.querySelector('.mega-links'),
                l = s.querySelectorAll('.mega-links a'),
                _ = e.querySelectorAll('.micro-links p'),
                d = e.dataset.origBgcolor,
                p = e.querySelector('.micro-divider').dataset.origLineColor,
                c = !1;
            if (!ce.isMobile)
                for (var m = function(e) {
                        var i = ce.isMobile ? 'click' : 'mouseenter';
                        l[e].addEventListener(i, function(i) {
                            c = !0;
                            var r = i.target,
                                s = r.dataset.color,
                                d = r.dataset.secondaryColor;
                            n ? ae.to([a, o], .43, {
                                backgroundColor: s,
                                force3D: !0,
                                ease: ie.easeInOut
                            }) : ae.to(a, .43, {
                                backgroundColor: s,
                                force3D: !0,
                                ease: ie.easeInOut
                            }), ae.to(t, .43, {
                                backgroundColor: d,
                                ease: ie.easeInOut
                            }), ae.to(_, .15, {
                                autoAlpha: 0,
                                ease: te.easeInOut
                            }), ae.set(l, {
                                className: '-=active'
                            }), r.classList.add('active'), ae.to('.mega-links a:not(.active) span', .3, {
                                opacity: .25,
                                ease: ie.easeInOut
                            }), ae.to(_[e + 1], .3, {
                                autoAlpha: 1,
                                ease: ie.easeInOut
                            })
                        }), l[e].addEventListener('mouseleave', function() {
                            c = !1, setTimeout(function() {
                                c || (ae.to(_, .15, {
                                    autoAlpha: 0,
                                    ease: ie.easeInOut,
                                    force3D: !0
                                }), ae.to(_[0], .3, {
                                    autoAlpha: 1,
                                    ease: ie.easeInOut,
                                    force3D: !0
                                }))
                            }, 100), n ? ae.to([a, o], .43, {
                                backgroundColor: d,
                                force3D: !0,
                                ease: ie.easeInOut
                            }) : ae.to(a, .43, {
                                backgroundColor: d,
                                force3D: !0,
                                ease: ie.easeInOut
                            }), ae.set(l, {
                                className: '-=active'
                            }), ae.to(t, .43, {
                                backgroundColor: p,
                                ease: ie.easeInOut
                            }), ae.to('.mega-links a span', .3, {
                                opacity: 1,
                                ease: ie.easeInOut
                            })
                        })
                    }, u = 0; u < l.length; u++) m(u)
        },
        ge = function() {
            var e = document.querySelector('.offcanvas-nav'),
                t = e.querySelector('.micro-links span'),
                i = document.querySelector('.wiper-outer'),
                r = i.querySelector('.wiper-inner'),
                a = !!document.querySelector('header h2'),
                n = e.querySelector('.mega-links'),
                o = n.querySelectorAll('.mega-links a'),
                s = e.querySelectorAll('.micro-links a'),
                l = e.querySelectorAll('.micro-links p'),
                _ = 767 < ce.ww ? document.querySelector('.hammy') : document.querySelector('.hammy-wrapper-mobile'),
                d = 767 < ce.ww ? e.querySelector('.close') : document.querySelector('.mobile-close'),
                p = document.querySelectorAll('.hammy span'),
                c = d.querySelectorAll('span'),
                m = _.querySelectorAll('.mobile-close span span'),
                u = document.querySelector('.hammy-divider'),
                g = new x({
                    paused: !0
                }),
                f = 1.7;
            767 < ce.ww ? (g.fromTo(e, .001, {
                yPercent: -100
            }, {
                autoAlpha: 1,
                yPercent: 0
            }).add('barsDown').add('dividerDown', '+=.01').add('megaLinks', '+=.38').add('megaLinksOpacity', '+=.52').add('microLinksP', '+=.45').add('microLinks', '+=.525'), a ? g.fromTo('.right-items', .33, {
                autoAlpha: 1
            }, {
                autoAlpha: 0,
                ease: ie.easeInOut
            }) : '', g.to('html, body, #container', .001, {
                className: '+=locked'
            }).fromTo(e, .001, {
                pointerEvents: 'none'
            }, {
                className: '+=open',
                pointerEvents: 'all'
            }).fromTo(i, .9, {
                yPercent: -100
            }, {
                yPercent: 0,
                ease: ee.easeInOut,
                force3D: !0
            }, .13).fromTo(r, .9, {
                yPercent: 100
            }, {
                yPercent: 0,
                ease: ee.easeInOut,
                force3D: !0
            }, .13).staggerFromTo(p, .4, {
                scaleX: 1
            }, {
                scaleX: 0,
                ease: te.easeInOut
            }, -.045, 'barsDown').fromTo(u, .8, {
                transformOrigin: '0 100%',
                scaleY: 1
            }, {
                scaleY: 0,
                ease: S.c.easeOut
            }, 'dividerDown').staggerFromTo(o, .95, {
                x: 55,
                rotationY: 13,
                rotationZ: -8,
                y: -60,
                z: 70
            }, {
                x: 0,
                z: 0,
                rotationY: 0,
                rotationZ: 0,
                y: 0,
                force3D: !0,
                ease: S.c.easeOut
            }, .12, 'megaLinks').staggerFromTo(o, .75, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                force3D: !0,
                ease: S.c.easeOut
            }, .12, 'megaLinksOpacity').fromTo('.micro-links .p-holder, .micro-links span', .7, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: ie.easeInOut,
                force3D: !0
            }, 'microLinksP').fromTo(n, .001, {
                pointerEvents: 'none'
            }, {
                pointerEvents: 'all'
            }).staggerFromTo(s, .7, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: ie.easeInOut,
                force3D: !0
            }, .08, 'microLinks').add('closeBarsIn', '-=.8').staggerFromTo(c, .6, {
                scaleX: 0
            }, {
                scaleX: 1,
                ease: te.easeInOut
            }, .08, 'closeBarsIn')) : (f = 1.3, g.to('html, body, #container', .001, {
                className: '+=locked'
            }).fromTo('.mobile-offcanvas-nav', .001, {
                overflowY: 'hidden',
                overflowX: 'hidden',
                x: -ce.ww
            }, {
                className: '+=open',
                overflowY: 'scroll',
                overflowX: 'hidden',
                x: 0
            }).fromTo('.mobile-offcanvas-nav, .mobile-close', .001, {
                pointerEvents: 'none'
            }, {
                pointerEvents: 'all'
            }).staggerFromTo(p, .22, {
                scaleX: 1,
                transformOrigin: '100% center'
            }, {
                scaleX: 0,
                ease: ie.easeInOut
            }, .12).add('fakeBarIn', '-=.4').fromTo('.fake-bar-outer', .8, {
                xPercent: -100
            }, {
                xPercent: 0,
                ease: te.easeInOut,
                force3D: !0
            }, 'fakeBarIn').fromTo('.fake-bar-inner', .8, {
                xPercent: 100
            }, {
                xPercent: 0,
                ease: te.easeInOut,
                force3D: !0
            }, 'fakeBarIn').add('itemsIn', '-=.705').add('closeBarsIn', '+.83').staggerFromTo('.mobile-offcanvas-nav .item, .mobile-offcanvas-nav .flexible-mask', .8, {
                x: -window.innerWidth
            }, {
                x: 0,
                ease: te.easeInOut,
                force3D: !0
            }, .06, 'itemsIn').staggerFromTo(m, .6, {
                transformOrigin: '50% 50%',
                scaleX: 0
            }, {
                scaleX: 1,
                ease: te.easeInOut
            }, .08, 'closeBarsIn')), _.addEventListener('click', function() {
                g.timeScale(1.15).play()
            }), d.addEventListener('click', function(e) {
                e.stopPropagation();
                for (var t = document.querySelectorAll('.drawer.open'), r = 0; r < t.length; r++) t[r].classList.remove('open'), ae.to(t[r].querySelector('.drawer-items'), .35, {
                    height: 0,
                    force3D: !0,
                    ease: ie.easeInOut
                });
                g.timeScale(f).reverse()
            }), document.addEventListener('keyup', function(e) {
                var t = e.key;
                ('Escape' === t || 'Esc' === t) && d.click()
            }), me(e.querySelectorAll('.micro-links p')), ae.set(t, {
                marginTop: l[0].offsetHeight + 60
            })
        },
        fe = function() {
            for (var e = document.querySelectorAll('.pop-under-group'), t = function(t) {
                    for (var i = e[t].querySelectorAll('.pop-under'), r = e[t].querySelector('.pop-under-content'), a = e[t].querySelectorAll('.pop-under-content .wrapper'), n = r.offsetWidth, o = r.querySelector('.caret'), s = ce.isMobile ? 'click' : 'mouseenter', l = e[t].getBoundingClientRect().right, _ = function(e) {
                            i[e].addEventListener(s, function(t) {
                                var i = t.target,
                                    s = i.querySelector('span'),
                                    _ = s.getBoundingClientRect().left + s.offsetWidth / 2,
                                    d = l - _ - n / 2;
                                if (0 > d) {
                                    d = 0;
                                    ae.to(o, .52, {
                                        x: -(l - _ - 10),
                                        ease: q.easeOut.config(1.4),
                                        force3D: !0
                                    })
                                } else ae.to(o, .52, {
                                    x: -140,
                                    ease: q.easeOut.config(1.4),
                                    force3D: !0
                                });
                                ae.to(r, .41, {
                                    x: -d,
                                    autoAlpha: 1,
                                    pointerEvents: 'all',
                                    force3D: !0,
                                    ease: q.easeOut.config(1.4)
                                }), ae.to(a, .18, {
                                    autoAlpha: 0,
                                    ease: ie.easeInOut
                                }), ae.to(a[e], .25, {
                                    autoAlpha: 1,
                                    ease: ie.easeInOut
                                })
                            })
                        }, d = 0; d < i.length; d++) _(d);
                    e[t].addEventListener('mouseleave', function(e) {
                        var t = e.target;
                        ae.to(a, .18, {
                            autoAlpha: 0,
                            ease: ie.easeInOut
                        }), ae.to(r, .25, {
                            autoAlpha: 0,
                            pointerEvents: 'none',
                            ease: ie.easeInOut
                        }), ae.set(t.querySelectorAll('.pop-under'), {
                            className: '-=active'
                        })
                    })
                }, r = 0; r < e.length; r++) t(r)
        },
        ye = function() {
            fe(), ge()
        },
        he = i(2),
        Te = i.n(he),
        ve = function() {
            for (var e = document.querySelector('.mobile-offcanvas-nav'), t = document.querySelectorAll('.item.drawer:not(.already-prepped)'), r = e.querySelectorAll('.item .drawer:not(.already-prepped)'), a = function(e) {
                    var t = r[e],
                        i = t.querySelector('.drawer-items'),
                        a = t.querySelectorAll('.stagger'),
                        n = i.offsetHeight;
                    t.classList.add('already-prepped'), t.addEventListener('click', function(e) {
                        if (e.stopPropagation(), !t.classList.contains('open')) {
                            t.classList.add('open'), TweenMax.set(t.parentElement, {
                                clearProps: 'height'
                            }), TweenMax.to(i, .36, {
                                height: n,
                                force3D: !0,
                                ease: Sine.easeInOut
                            });
                            var r = 4 < a.length ? 45 : 18 * a.length;
                            TweenMax.staggerFromTo(a, .65, {
                                opacity: 0,
                                x: -8,
                                y: r,
                                z: 90
                            }, {
                                opacity: 1,
                                x: 0,
                                y: 0,
                                z: 0,
                                force3D: !0,
                                ease: Power2.easeOut
                            }, .09)
                        } else t.classList.remove('open'), TweenMax.to(i, .35, {
                            height: 0,
                            force3D: !0,
                            ease: Sine.easeInOut
                        })
                    })
                }, n = 0; n < r.length; n++) a(n);
            TweenMax.set('.item .drawer .drawer-items', {
                height: 0
            });
            for (var i = function(e) {
                    var i = t[e],
                        r = i.querySelector('.drawer-items'),
                        a = i.querySelectorAll('.stagger'),
                        n = r.offsetHeight;
                    i.classList.add('already-prepped'), i.addEventListener('click', function() {
                        if (!i.classList.contains('open')) {
                            for (var e = document.querySelectorAll('.drawer.open'), t = 0; t < e.length; t++) e[t].classList.remove('open'), TweenMax.to(e[t].querySelector('.drawer-items'), .35, {
                                height: 0,
                                force3D: !0,
                                ease: Sine.easeInOut
                            });
                            i.classList.add('open'), TweenMax.to(r, .36, {
                                height: n,
                                force3D: !0,
                                ease: Sine.easeInOut
                            });
                            var o = 4 < a.length ? 45 : 18 * a.length;
                            TweenMax.staggerFromTo(a, .65, {
                                opacity: 0,
                                x: -7,
                                y: o,
                                z: 100
                            }, {
                                opacity: 1,
                                x: 0,
                                y: 0,
                                z: 0,
                                force3D: !0,
                                ease: Power2.easeOut
                            }, .09)
                        } else i.querySelector('.drawer.open') ? (TweenMax.to(i.querySelector('.child'), .35, {
                            height: 0,
                            force3D: !0,
                            ease: Sine.easeInOut
                        }), i.querySelector('.drawer.open').classList.remove('open'), TweenMax.delayedCall(.03, function() {
                            i.classList.remove('open'), TweenMax.to(r, .35, {
                                height: 0,
                                force3D: !0,
                                ease: Sine.easeInOut
                            })
                        })) : (i.classList.remove('open'), TweenMax.to(r, .35, {
                            height: 0,
                            force3D: !0,
                            ease: Sine.easeInOut
                        }))
                    })
                }, n = 0; n < t.length; n++) i(n);
            TweenMax.set('.item.drawer > .drawer-items', {
                height: 0
            })
        },
        be = function() {
            function e(t, i) {
                s(this, e), this.el = t, this.config = i, this.render(), this.decorate()
            }
            return _(e, [{
                key: 'render',
                value: function() {
                    var e = this.createDiv(Te.a.button(this.config), 'foursquare-nav-button');
                    e.classList.add(this.config.lightHeader ? 'light-header' : 'dark-header'), this.el.appendChild(e);
                    var t = this.createDiv(Te.a.nav(this.config), 'foursquare-nav-modal');
                    this.el.appendChild(t)
                }
            }, {
                key: 'createDiv',
                value: function(e, t) {
                    var i = document.createElement('div');
                    return i.classList.add(t), i.innerHTML = e, i
                }
            }, {
                key: 'decorate',
                value: function() {
                    var e = this;
                    ge(this.el), fe(), ve(), ue(), window.addEventListener('resize', function() {
                        return e.handleResize()
                    })
                }
            }, {
                key: 'handleResize',
                value: function() {
                    clearTimeout(this.resizeTimer), this.resizeTimer = setTimeout(function() {
                        ce.ww !== o().width && (ce.ww = o().width, ye()), ce.wh = o().height
                    })
                }
            }]), e
        }();
    window.fourSq = window.fourSq || {}, window.fourSq.initNav = function(e, t) {
        return new be(e, t)
    }
}]);