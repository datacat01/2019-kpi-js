(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        102: function(e, t, i) {
            (function(t) {
                for (var n = i(221), r = "undefined" == typeof window ? t : window, s = ["moz", "webkit"], a = "AnimationFrame", o = r["request" + a], l = r["cancel" + a] || r["cancelRequest" + a], u = 0; !o && u < s.length; u++) o = r[s[u] + "Request" + a], l = r[s[u] + "Cancel" + a] || r[s[u] + "CancelRequest" + a];
                if (!o || !l) {
                    var c = 0,
                        f = 0,
                        h = [];
                    o = function(e) {
                        if (0 === h.length) {
                            var t = n(),
                                i = Math.max(0, 1e3 / 60 - (t - c));
                            c = i + t, setTimeout(function() {
                                var e = h.slice(0);
                                h.length = 0;
                                for (var t = 0; t < e.length; t++)
                                    if (!e[t].cancelled) try {
                                        e[t].callback(c)
                                    } catch (e) {
                                        setTimeout(function() {
                                            throw e
                                        }, 0)
                                    }
                            }, Math.round(i))
                        }
                        return h.push({
                            handle: ++f,
                            callback: e,
                            cancelled: !1
                        }), f
                    }, l = function(e) {
                        for (var t = 0; t < h.length; t++) h[t].handle === e && (h[t].cancelled = !0)
                    }
                }
                e.exports = function(e) {
                    return o.call(r, e)
                }, e.exports.cancel = function() {
                    l.apply(r, arguments)
                }, e.exports.polyfill = function(e) {
                    e || (e = r), e.requestAnimationFrame = o, e.cancelAnimationFrame = l
                }
            }).call(this, i(222))
        },
        116: function(e, t, i) {
            "use strict";
            var n = i(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(i(1642)).default;
            t.default = r
        },
        139: function(e, t, i) {
            var n = i(3);
            e.exports = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                    }))), r.forEach(function(t) {
                        n(e, t, i[t])
                    })
                }
                return e
            }
        },
        1627: function(e, t, i) {},
        1628: function(e, t, i) {
            "use strict";
            var n = i(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(i(3)),
                s = n(i(139)),
                a = n(i(1)),
                o = n(i(2));
            i(1627);
            const l = e => e.key ? (0, s.default)({}, e, {
                    key: `${e.key}_clone`
                }) : e,
                u = (e, t, i) => e < i || e > t.length - 1 - i;
            class c extends a.default.PureComponent {
                render() {
                    const e = this.props,
                        t = e.content,
                        i = e.unitSize,
                        n = e.tmpl,
                        r = e.axis,
                        s = e.extension,
                        o = e.current,
                        c = [],
                        f = [];
                    for (let a = 0; a < s; a++) c.unshift(l(t[t.length - a - 1])), f.push(l(t[a]));
                    const h = [...c, ...t, ...f],
                        d = "horizonta" === r ? "width" : "height";
                    return [...h.map((e, t) => a.default.createElement("div", {
                        key: e.key ? e.key : t,
                        "ifeng_ui_pc_sliders-item": r,
                        "ifeng_ui_pc_slideers-current": o === t ? "true" : "false",
                        style: {
                            [d]: i
                        }
                    }, n(e, u(t, h, s), t)))]
                }
            }(0, r.default)(c, "propTypes", {
                content: o.default.array.isRequired,
                unitSize: o.default.number.isRequired,
                tmpl: o.default.func.isRequired,
                axis: o.default.string.isRequired,
                extension: o.default.number.isRequired,
                current: o.default.number.isRequired
            }), (0, r.default)(c, "defaultProps", {});
            var f = c;
            t.default = f
        },
        1630: function(e, t, i) {
            e.exports = {
                dot: "dot-3LQaHUbT",
                current: "current-JhT3FZKL dot-3LQaHUbT"
            }
        },
        1631: function(e, t, i) {
            "use strict";
            var n = i(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(i(3)),
                s = n(i(1)),
                a = n(i(2)),
                o = n(i(1630));
            const l = function() {};
            class u extends s.default.PureComponent {
                render() {
                    const e = this.props,
                        t = e.content,
                        i = e.tmpl,
                        n = e.step,
                        r = e.current,
                        a = e.dotsAction,
                        u = e.dotStyle,
                        c = e.dotCurrentStyle,
                        f = e.extension,
                        h = "click" === a ? n : l,
                        d = "hover" === a ? n : l;
                    return s.default.createElement("div", {
                        "ifeng_ui_pc_sliders-dots": ""
                    }, t.map((e, t) => s.default.createElement("div", {
                        onClick: h,
                        onMouseEnter: d,
                        key: t,
                        index: t + f,
                        className: r === t + f ? `${c} ${o.default.current}` : `${u} ${o.default.dot}`
                    }, i(e, t))))
                }
            }(0, r.default)(u, "propTypes", {
                content: a.default.array.isRequired,
                tmpl: a.default.func.isRequired,
                step: a.default.func.isRequired,
                current: a.default.number.isRequired,
                dotsAction: a.default.string,
                dotStyle: a.default.string,
                dotCurrentStyle: a.default.string,
                extension: a.default.number
            }), (0, r.default)(u, "defaultProps", {});
            var c = u;
            t.default = c
        },
        1633: function(e, t, i) {},
        1634: function(e, t, i) {
            "use strict";
            var n = i(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(i(3)),
                s = n(i(1)),
                a = n(i(2));
            i(1633);
            class o extends s.default.PureComponent {
                render() {
                    const e = this.props,
                        t = e.preHandle,
                        i = e.nextHandle,
                        n = e.infinite,
                        r = e.current,
                        a = e.total,
                        o = e.extension;
                    return [(() => s.default.createElement("div", {
                        key: "left",
                        "ifeng_ui_pc_sliders-arrows_next": !n && r >= a + o - 1 ? "disable" : "",
                        onClick: i
                    }))(), (() => s.default.createElement("div", {
                        key: "right",
                        "ifeng_ui_pc_sliders-arrows_pre": !n && r <= o ? "disable" : "",
                        onClick: t
                    }))()]
                }
            }(0, r.default)(o, "propTypes", {
                nextHandle: a.default.func.isRequired,
                preHandle: a.default.func.isRequired,
                infinite: a.default.bool,
                current: a.default.number,
                total: a.default.number,
                extension: a.default.number
            }), (0, r.default)(o, "defaultProps", {});
            var l = o;
            t.default = l
        },
        1636: function(e, t, i) {
            e.exports = {
                box: "box-kbJVDyI6",
                slider: "slider-23k1pgNu",
                container: "container-3J0fgyFB"
            }
        },
        1637: function(e, t, i) {
            "use strict";
            var n = i(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defer = function() {
                const e = {};
                return e.promise = new Promise((t, i) => {
                    e.resolve = t, e.reject = i
                }), e
            }, t.periodicity = function(e, t) {
                let i = Math.floor(e / t),
                    n = e - i * t;
                0 === n && i > 0 && (n = t, i--);
                return [i, n]
            }, t.calculateFramesOffset = function(e) {
                const t = (e = e.slice(0))[0],
                    i = e[e.length - 1];
                i.offset = i.offset || 1, t.offset = t.offset || 0;
                let n = 0,
                    r = -1;
                for (let s = 0; s < e.length; s++) {
                    const t = e[s];
                    if (null != t.offset) {
                        const i = s - r;
                        if (i > 1) {
                            const s = (t.offset - n) / i;
                            for (let t = 0; t < i - 1; t++) e[r + t + 1].offset = n + s * (t + 1)
                        }
                        n = t.offset, r = s
                    }
                    s > 0 && (e[s] = Object.assign({}, e[s - 1], e[s]))
                }
                return e
            }, t.getProgress = function(e, t, i) {
                const n = e.currentTime,
                    r = t.direction,
                    s = t.duration;
                let a = !1;
                if ("reverse" === r) i = 1 - i, a = !0;
                else if ("alternate" === r || "alternate-reverse" === r) {
                    let e = Math.floor(n / s);
                    1 === i && e--, e % 2 ^ "alternate-reverse" === r && (i = 1 - i, a = !0)
                }
                return {
                    p: i,
                    inverted: a
                }
            }, t.getCurrentFrame = function(e, t, i, n) {
                const r = e.easing,
                    o = e.effect;
                o || (i = Object.assign({}, i, s.default));
                let l = {};
                n = r(n, t);
                for (let s = 1; s < t.length; s++) {
                    const e = t[s],
                        r = e.offset;
                    if (r >= n || s === t.length - 1) {
                        const u = t[s - 1],
                            c = u.offset;
                        l = o ? o(u, e, n, c, r) : a(u, e, i, n);
                        break
                    }
                }
                return l
            };
            var r = n(i(89)),
                s = n(i(307));

            function a(e, t, i, n) {
                const s = {};
                for (const o of Object.entries(t)) {
                    var a = (0, r.default)(o, 2);
                    const l = a[0],
                        u = a[1];
                    if ("offset" !== l) {
                        const r = (i[l] || i.default)(e[l], u, n, e.offset, t.offset);
                        null != r && (s[l] = r)
                    }
                }
                return s
            }
        },
        1638: function(e, t, i) {
            "use strict";
            var n = i(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(1637),
                s = n(i(306)),
                a = i(305);
            const o = Symbol("timing"),
                l = Symbol("keyframes"),
                u = Symbol("initState"),
                c = Symbol("readyDefer"),
                f = Symbol("finishedDefer"),
                h = Symbol("effects"),
                d = Symbol("activeReadyTimer"),
                m = Symbol("activeFinishTimer"),
                p = Symbol("removeDefer"),
                g = {
                    delay: 0,
                    endDelay: 0,
                    fill: "auto",
                    iterations: 1,
                    playbackRate: 1,
                    direction: "normal",
                    easing: "linear",
                    effect: null
                };
            t.default = class {
                constructor(e, t, i) {
                    if (Array.isArray(e)) {
                        var n = [e[0], e, t];
                        e = n[0], t = n[1], i = n[2]
                    }
                    "number" == typeof i && (i = {
                        duration: i
                    }), this[o] = Object.assign({}, g, i), this[o].easing = (0, a.parseEasing)(this[o].easing), this[l] = (0, r.calculateFramesOffset)(t);
                    const s = this[l][this[l].length - 1];
                    this[u] = {}, Object.keys(s).forEach(t => {
                        Object.prototype.hasOwnProperty.call(e, t) && (this[u][t] = e[t])
                    }), 0 !== this[l][0].offset && this[l].unshift(Object.assign({}, this[u], {
                        offset: 0
                    })), s.offset < 1 && this[l].push(Object.assign({}, s, {
                        offset: 1
                    })), this[h] = {}, this.timeline = null
                }
                getPlaybackRate() {
                    return this[o].playbackRate
                }
                setPlaybackRate(e) {
                    this.timeline && this.timeline.setPlaybackRate(e), this[o].playbackRate = e
                }
                getPlayState() {
                    const e = this.timeline,
                        t = this[o],
                        i = t.iterations,
                        n = t.duration,
                        r = t.endDelay;
                    let s = "running";
                    if (null == e) s = "idle";
                    else if (e.getPaused()) s = "paused";
                    else if (e.getCurrentTime() < 0) s = "pending";
                    else {
                        const t = e.getCurrentTime() - i * n;
                        t > 0 && t < r ? s = "pending" : t >= r && (s = "finished")
                    }
                    return s
                }
                getProgress() {
                    if (!this.timeline) return 0;
                    const e = this[o],
                        t = e.duration,
                        i = e.iterations,
                        n = this.timeline,
                        s = this.getPlayState();
                    let a;
                    if ("idle" === s) a = 0;
                    else if ("paused" === s && n.getCurrentTime() < 0) a = 0;
                    else if ("pending" === s)
                        if (n.getCurrentTime() < 0) a = 0;
                        else {
                            const e = n.seekLocalTime(i * t);
                            a = (0, r.periodicity)(e, t)[1] / t
                        }
                    else "running" !== s && "paused" !== s || (a = (0, r.periodicity)(n.getCurrentTime(), t)[1] / t);
                    return "finished" === s && (a = (0, r.periodicity)(i, 1)[1]), a
                }
                getFrame() {
                    const e = this.getPlayState(),
                        t = this[u],
                        i = this[o].fill;
                    if ("idle" === e) return t;
                    const n = this.timeline.currentTime,
                        s = this[l].slice(0),
                        a = (0, r.getProgress)(this.timeline, this[o], this.getProgress()),
                        c = a.p,
                        f = a.inverted;
                    let d = t;
                    return n < 0 && "pending" === e ? "backwards" !== i && "both" !== i || (d = f ? s[s.length - 1] : s[0]) : ("pending" !== e && "finished" !== e || "forwards" === i || "both" === i) && (d = (0, r.getCurrentFrame)(this[o], s, this[h], c)), d
                }
                pause() {
                    this.timeline.setPlaybackRate(0)
                }
                setBaseTimeline(e) {
                    this[o].timeline = e
                }
                getBaseTimeline() {
                    return this[o].timeline
                } [d]() {
                    this[c] && !this[c].timerID && (this.timeline.getCurrentTime() < 0 ? this[c].timerID = this.timeline.setTimeout(() => {
                        this[c].resolve(), delete this[c]
                    }, {
                        delay: -this.timeline.getCurrentTime(),
                        heading: !1
                    }) : this[c].timerID = this.timeline.setTimeout(() => {
                        this[c].resolve(), delete this[c]
                    }, {
                        delay: 0,
                        isEntropy: !0
                    }))
                } [m]() {
                    const e = this[o],
                        t = e.duration * e.iterations + e.endDelay;
                    this[f] && !this[f].timerID && (this[f].timerID = this.timeline.setTimeout(() => {
                        this[f].resolve()
                    }, {
                        delay: t - this.timeline.getCurrentTime(),
                        heading: !1
                    }))
                }
                play() {
                    if ("finished" === this.getPlayState() && this.cancel(), "idle" === this.getPlayState()) {
                        if (this.getPlaybackRate() <= 0) return;
                        const e = this[o],
                            t = e.delay,
                            i = e.playbackRate,
                            n = e.timeline;
                        this.timeline = new s.default({
                            originTime: t,
                            playbackRate: i
                        }, n), this[d](), this[m]()
                    } else "paused" === this.getPlayState() && (this.timeline.setPlaybackRate(this.getPlaybackRate), this[d]())
                } [p](e, t = !1) {
                    const i = this[e],
                        n = this.timeline;
                    i && n && (n.clearTimeout(i.timerID), t && i.resolve()), delete this[e]
                }
                cancel() {
                    this[p](c), this[p](f), this.timeline = null
                }
                finish() {
                    this.timeline.setCurrentTime(1 / 0), this[p](c), this[p](f, !0)
                }
                applyEffects(e) {
                    return Object.assign(this[h], e)
                }
                getReady() {
                    return this[c] ? this[c].promise : this.timeline && this.timeline.getCurrentTime() >= 0 && "paused" !== this.getPlayState() ? Promise.resolve() : (this[c] = (0, r.defer)(), this.timeline && this[d](), this[c] ? this[c].promise : Promise.resolve())
                }
                getFinished() {
                    return "finished" === this.getPlayState() ? Promise.resolve() : (this[f] || (this[f] = (0, r.defer)(), this.timeline && this[m]()), this[f].promise)
                }
            }
        },
        1639: function(e, t, i) {
            "use strict";
            var n = 4,
                r = .001,
                s = 1e-7,
                a = 10,
                o = 11,
                l = 1 / (o - 1),
                u = "function" == typeof Float32Array;

            function c(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function f(e, t) {
                return 3 * t - 6 * e
            }

            function h(e) {
                return 3 * e
            }

            function d(e, t, i) {
                return ((c(t, i) * e + f(t, i)) * e + h(t)) * e
            }

            function m(e, t, i) {
                return 3 * c(t, i) * e * e + 2 * f(t, i) * e + h(t)
            }
            e.exports = function(e, t, i, c) {
                if (!(0 <= e && e <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                var f = u ? new Float32Array(o) : new Array(o);
                if (e !== t || i !== c)
                    for (var h = 0; h < o; ++h) f[h] = d(h * l, e, i);

                function p(t) {
                    for (var u = 0, c = 1, h = o - 1; c !== h && f[c] <= t; ++c) u += l;
                    var p = u + (t - f[--c]) / (f[c + 1] - f[c]) * l,
                        g = m(p, e, i);
                    return g >= r ? function(e, t, i, r) {
                        for (var s = 0; s < n; ++s) {
                            var a = m(t, i, r);
                            if (0 === a) return t;
                            t -= (d(t, i, r) - e) / a
                        }
                        return t
                    }(t, p, e, i) : 0 === g ? p : function(e, t, i, n, r) {
                        var o, l, u = 0;
                        do {
                            (o = d(l = t + (i - t) / 2, n, r) - e) > 0 ? i = l : t = l
                        } while (Math.abs(o) > s && ++u < a);
                        return l
                    }(t, u, u + l, e, i)
                }
                return function(n) {
                    return e === t && i === c ? n : 0 === n ? 0 : 1 === n ? 1 : d(p(n), t, c)
                }
            }
        },
        1640: function(e, t, i) {
            "use strict";
            (function(e) {
                var n = i(0);
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.nowtime = function() {
                    if ("undefined" != typeof performance && performance.now) return performance.now();
                    if (void 0 !== e && e.hrtime) {
                        const t = e.hrtime(),
                            i = (0, r.default)(t, 2),
                            n = i[0],
                            s = i[1];
                        return 1e3 * n + 1e-6 * s
                    }
                    return Date.now ? Date.now() : (new Date).getTime()
                }, t.formatDelay = function(e) {
                    "number" == typeof e ? e = {
                        delay: e
                    } : "getEntropy" in e && (e = {
                        delay: e.getEntropy(),
                        isEntropy: !0
                    });
                    return e
                };
                var r = n(i(89))
            }).call(this, i(209))
        },
        1641: function(e, t, i) {
            "use strict";
            var n = i(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Effects", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "Timeline", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            }), Object.defineProperty(t, "Easings", {
                enumerable: !0,
                get: function() {
                    return a.Easings
                }
            }), Object.defineProperty(t, "Animator", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            });
            var r = n(i(307)),
                s = n(i(306)),
                a = i(305),
                o = n(i(1638))
        },
        1642: function(e, t, i) {
            "use strict";
            var n = i(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(i(139)),
                s = n(i(3)),
                a = n(i(1)),
                o = n(i(2)),
                l = i(1641),
                u = n(i(102)),
                c = n(i(1636)),
                f = n(i(1634)),
                h = n(i(1631)),
                d = n(i(1628));
            const m = function() {},
                p = function() {
                    return !0
                },
                g = {
                    arrows: !0,
                    dots: !0,
                    dotsAction: "click",
                    afterChange: m,
                    beginChange: m,
                    nextCallback: p,
                    preCallback: p,
                    autoplay: !0,
                    direction: "forward",
                    pauseOnHover: !0,
                    autoplayInterval: 3e3,
                    axis: "horizonta",
                    initialSlide: 0,
                    speed: 300,
                    extension: 1,
                    padding: 0,
                    unitSize: 0,
                    infinite: !0,
                    sliderTmpl: function(e, t, i) {
                        return a.default.createElement("a", {
                            "ifeng_ui_pc_sliders-link": "",
                            href: e.url,
                            target: "_blank",
                            rel: "nofollow me noopener noreferrer"
                        }, a.default.createElement("img", {
                            src: e.src,
                            "ifeng_ui_pc_sliders-image": ""
                        }), a.default.createElement("div", {
                            "ifeng_ui_pc_sliders-title": ""
                        }, e.title))
                    },
                    dotTmpl: function(e, t) {
                        return null
                    },
                    dotStyle: "",
                    dotCurrentStyle: ""
                };
            class y extends a.default.PureComponent {
                constructor(...e) {
                    super(...e), (0, s.default)(this, "config", (0, r.default)({}, g, this.props.config)), (0, s.default)(this, "autoplayTimer", null), (0, s.default)(this, "isHover", !1), (0, s.default)(this, "infinite", !!this.config.autoplay || this.config.infinite), (0, s.default)(this, "extension", this.config.infinite ? this.config.extension : 0), (0, s.default)(this, "container", a.default.createRef()), (0, s.default)(this, "state", {
                        shifting: -(this.config.initialSlide + this.extension - this.config.padding) * this.config.unitSize,
                        arrows: !0 === this.config.arrows,
                        index: this.config.initialSlide + this.extension,
                        unitSize: this.config.unitSize
                    }), (0, s.default)(this, "getAnimFrame", () => {
                        const e = this.state,
                            t = e.index,
                            i = e.unitSize,
                            n = this.props.content;
                        let r = t;
                        "finished" !== this.anim.getPlayState() ? ((0, u.default)(this.getAnimFrame), this.setState(this.anim.getFrame())) : (t === this.extension - 1 ? r = n.length : t === n.length + this.extension && (r = this.extension), this.config.afterChange(r - this.extension, this.props.content.length), this.setState({
                            shifting: -i * (r - this.config.padding),
                            index: r
                        }))
                    }), (0, s.default)(this, "next", () => {
                        const e = this.state,
                            t = e.index,
                            i = e.shifting,
                            n = e.unitSize,
                            r = this.props.content;
                        if (!this.config.nextCallback((t - this.extension) % r.length, r.length)) return;
                        if (t >= r.length && !this.infinite) return;
                        let s = t;
                        t >= r.length + this.extension ? (s = this.extension, this.go(1, s, i + r.length * n)) : this.go(1)
                    }), (0, s.default)(this, "pre", () => {
                        const e = this.state,
                            t = e.index,
                            i = e.shifting,
                            n = e.unitSize,
                            r = this.props.content;
                        if (!this.config.preCallback((t - this.extension) % r.length, r.length)) return;
                        if (t <= 0 && !this.infinite) return;
                        let s = t;
                        t <= this.extension ? (s = r.length + this.extension, this.go(-1, s, i - (s - this.extension) * n)) : this.go(-1)
                    }), (0, s.default)(this, "step", e => {
                        const t = e.currentTarget.getAttribute("index") / 1;
                        this.go(t - this.state.index)
                    }), (0, s.default)(this, "containerMouseEnterHandle", () => {
                        "hover" === this.config.arrows && this.setState({
                            arrows: !0
                        }), this.isHover = !0
                    }), (0, s.default)(this, "containerMouseLeaveHandle", () => {
                        "hover" === this.config.arrows && this.setState({
                            arrows: !1
                        }), this.isHover = !1
                    })
                }
                componentDidMount() {
                    if (0 === this.state.unitSize) {
                        const e = "horizonta" === this.config.axis ? this.container.current.parentNode.clientWidth : this.container.current.parentNode.clientHeight;
                        this.setState({
                            shifting: -(this.config.initialSlide + this.extension - this.config.padding) * e,
                            unitSize: e
                        })
                    }
                    this.config.autoplay && (this.autoplayTimer = setInterval(() => {
                        this.config.pauseOnHover && this.isHover || ("forward" === this.config.direction ? this.next() : this.pre())
                    }, this.config.autoplayInterval))
                }
                static getDerivedStateFromProps(e, t) {
                    return e.config.unitSize && e.config.unitSize !== t.unitSize ? (0, r.default)({}, t, {
                        unitSize: e.config.unitSize,
                        shifting: -e.config.unitSize * (t.index - (e.config.padding || 0))
                    }) : t
                }
                componentWillUnmount() {
                    clearInterval(this.autoplayTimer)
                }
                go(e, t = this.state.index, i = this.state.shifting) {
                    const n = t + e,
                        r = this.state.unitSize,
                        s = this.config.speed,
                        a = this.props.content.length;
                    let o = 0;
                    o = n - this.extension <= 0 ? 0 : n - this.extension >= a ? 0 : n - this.extension, this.config.beginChange(o, a), this.setState({
                        index: n
                    }, () => {
                        this.anim = new l.Animator({
                            shifting: i
                        }, [{
                            shifting: -r * (n - this.config.padding)
                        }], s), this.anim.play(), this.getAnimFrame()
                    })
                }
                render() {
                    const e = this.props.content,
                        t = this.state,
                        i = t.shifting,
                        n = t.unitSize,
                        r = t.index,
                        s = t.arrows,
                        o = this.config,
                        l = o.dotTmpl,
                        u = o.sliderTmpl,
                        m = o.axis,
                        p = o.dots,
                        g = o.dotsAction,
                        y = o.dotStyle,
                        b = o.dotCurrentStyle,
                        v = "horizonta" === m ? "width" : "height",
                        T = "horizonta" === m ? "marginLeft" : "marginTop";
                    return e.length > 0 ? a.default.createElement("div", {
                        className: c.default.box,
                        ref: this.container,
                        onMouseEnter: this.containerMouseEnterHandle,
                        onMouseLeave: this.containerMouseLeaveHandle
                    }, s ? a.default.createElement(f.default, {
                        nextHandle: this.next,
                        preHandle: this.pre,
                        infinite: this.infinite,
                        extension: this.extension,
                        current: r,
                        total: e.length
                    }) : null, p ? a.default.createElement(h.default, {
                        content: e,
                        tmpl: l,
                        step: this.step,
                        current: r,
                        extension: this.extension,
                        dotsAction: g,
                        dotStyle: y,
                        dotCurrentStyle: b
                    }) : null, a.default.createElement("div", {
                        className: c.default.slider
                    }, a.default.createElement("div", {
                        className: c.default.container,
                        style: {
                            [v]: (e.length + 2 * this.extension) * n,
                            [T]: i
                        }
                    }, a.default.createElement(d.default, {
                        content: e,
                        unitSize: n,
                        extension: this.extension,
                        current: r,
                        tmpl: u,
                        axis: m
                    })))) : a.default.createElement("div", {
                        ref: this.container
                    })
                }
            }(0, s.default)(y, "propTypes", {
                config: o.default.object,
                content: o.default.array.isRequired
            }), (0, s.default)(y, "defaultProps", {});
            var b = y;
            t.default = b
        },
        209: function(e, t) {
            var i, n, r = e.exports = {};

            function s() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }

            function o(e) {
                if (i === setTimeout) return setTimeout(e, 0);
                if ((i === s || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
                try {
                    return i(e, 0)
                } catch (t) {
                    try {
                        return i.call(null, e, 0)
                    } catch (t) {
                        return i.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    i = "function" == typeof setTimeout ? setTimeout : s
                } catch (e) {
                    i = s
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                    n = a
                }
            }();
            var l, u = [],
                c = !1,
                f = -1;

            function h() {
                c && l && (c = !1, l.length ? u = l.concat(u) : f = -1, u.length && d())
            }

            function d() {
                if (!c) {
                    var e = o(h);
                    c = !0;
                    for (var t = u.length; t;) {
                        for (l = u, u = []; ++f < t;) l && l[f].run();
                        f = -1, t = u.length
                    }
                    l = null, c = !1,
                        function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function m(e, t) {
                this.fun = e, this.array = t
            }

            function p() {}
            r.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                u.push(new m(e, t)), 1 !== u.length || c || o(d)
            }, m.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function(e) {
                return []
            }, r.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, r.cwd = function() {
                return "/"
            }, r.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, r.umask = function() {
                return 0
            }
        },
        221: function(e, t, i) {
            (function(t) {
                (function() {
                    var i, n, r, s, a, o;
                    "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                        return performance.now()
                    } : null != t && t.hrtime ? (e.exports = function() {
                        return (i() - a) / 1e6
                    }, n = t.hrtime, s = (i = function() {
                        var e;
                        return 1e9 * (e = n())[0] + e[1]
                    })(), o = 1e9 * t.uptime(), a = s - o) : Date.now ? (e.exports = function() {
                        return Date.now() - r
                    }, r = Date.now()) : (e.exports = function() {
                        return (new Date).getTime() - r
                    }, r = (new Date).getTime())
                }).call(this)
            }).call(this, i(209))
        },
        222: function(e, t) {
            var i;
            i = function() {
                return this
            }();
            try {
                i = i || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (i = window)
            }
            e.exports = i
        },
        255: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        },
        256: function(e, t) {
            e.exports = function(e, t) {
                var i = [],
                    n = !0,
                    r = !1,
                    s = void 0;
                try {
                    for (var a, o = e[Symbol.iterator](); !(n = (a = o.next()).done) && (i.push(a.value), !t || i.length !== t); n = !0);
                } catch (e) {
                    r = !0, s = e
                } finally {
                    try {
                        n || null == o.return || o.return()
                    } finally {
                        if (r) throw s
                    }
                }
                return i
            }
        },
        257: function(e, t) {
            e.exports = function(e) {
                if (Array.isArray(e)) return e
            }
        },
        305: function(e, t, i) {
            "use strict";
            var n = i(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseEasing = function(e) {
                "string" == typeof e ? e = u[e] ? u[e] : function(e) {
                    let t = /^cubic-bezier\((.*)\)/,
                        i = e.match(t);
                    if (i) {
                        let e = i[1].trim();
                        return o(...e = e.split(",").map(e => parseFloat(e.trim())))
                    }
                    if (t = /^steps\((.*)\)/, i = e.match(t)) {
                        let e = i[1].trim();
                        const t = e = e.split(",").map(e => e.trim()),
                            n = (0, r.default)(t, 2),
                            s = n[0],
                            a = n[1];
                        return l(parseInt(s, 10), a)
                    }
                    return e
                }(e) : "cubic-bezier" === e.type ? e = o(...e.value) : "steps" === e.type && (e = l(e.step, e.pos));
                return e
            }, t.Easings = void 0;
            var r = n(i(89));
            const s = i(1639),
                a = new Map;

            function o(...e) {
                let t = a.get(e);
                return t || (t = s(...e), a.set(e, t), t)
            }

            function l(e, t = "end") {
                return function(i, n) {
                    for (let r = 1; r < n.length; r++) {
                        const s = n[r].offset;
                        if (i <= s) {
                            const a = n[r - 1].offset,
                                o = s,
                                l = 1 / e;
                            let u = (i - a) / (o - a) / l;
                            return l * (u = "end" === t ? Math.floor(u) : Math.ceil(u)) * (o - a) + a
                        }
                    }
                    return 0
                }
            }
            const u = {
                linear: e => e,
                ease: o(.25, .1, .25, 1),
                "ease-in": o(.42, 0, 1, 1),
                "ease-out": o(0, 0, .58, 1),
                "ease-in-out": o(.42, 0, .58, 1),
                "step-start": l(1, "start"),
                "step-end": l(1, "end")
            };
            t.Easings = u
        },
        306: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = i(1640);
            const r = {
                    originTime: 0,
                    playbackRate: 1
                },
                s = Symbol("timeMark"),
                a = Symbol("playbackRate"),
                o = Symbol("timers"),
                l = Symbol("originTime"),
                u = Symbol("setTimer"),
                c = Symbol("parent"),
                f = Symbol("createTime");
            class h {
                constructor(e, t) {
                    e instanceof h && (t = e, e = {}), e = Object.assign({}, r, e), t && (this[c] = t), this[s] = [{
                        globalTime: this.getGlobalTime(),
                        localTime: -e.originTime,
                        entropy: -e.originTime,
                        playbackRate: e.playbackRate,
                        globalEntropy: 0
                    }], this[f] = (0, n.nowtime)(), this[c] && this[s][0].setGlobalEntropy(this[c].getEntropy()), this[l] = e.originTime, this[a] = e.playbackRate, this[o] = new Map
                }
                getParent() {
                    return this[c]
                }
                getLastTimeMark() {
                    return this[s][this[s].length - 1]
                }
                markTime({
                    time: e = this.getCurrentTime(),
                    entropy: t = this.getEntropy(),
                    playbackRate: i = this.getPlaybackRate()
                } = {}) {
                    const n = {
                        globalTime: this.getGlobalTime(),
                        localTime: e,
                        entropy: t,
                        playbackRate: i,
                        globalEntropy: this.getGlobalEntropy()
                    };
                    this[s].push(n)
                }
                getCurrentTime() {
                    const e = this.getLastTimeMark(),
                        t = e.localTime,
                        i = e.globalTime;
                    return t + (this.getGlobalTime() - i) * this.getPlaybackRate()
                }
                setCurrentTime(e) {
                    const t = this.getCurrentTime(),
                        i = e,
                        n = this[o];
                    this.markTime({
                        time: e
                    }), [...n].forEach(([e, r]) => {
                        const s = r.time,
                            a = s.isEntropy,
                            o = s.delay,
                            l = s.heading,
                            u = r.handler,
                            c = r.startTime;
                        if (a) 0 === o && (u(), n.delete(e));
                        else {
                            const r = c + o;
                            (0 === o || !1 !== l && (i - t) * o < 0 || t < r && r < i || t > r && r > i) && (u(), n.delete(e))
                        }
                    }), this.updateTimers()
                }
                getEntropy() {
                    const e = this.getLastTimeMark(),
                        t = e.entropy,
                        i = e.globalEntropy;
                    return t + Math.abs((this.getGlobalEntropy() - i) * this.getPlaybackRate())
                }
                getGlobalEntropy() {
                    return this[c] ? this[c].getEntropy() : (0, n.nowtime)() - this[f]
                }
                getGlobalTime() {
                    return this[c] ? this[c].getCurrentTime() : (0, n.nowtime)()
                }
                setEntropy(e) {
                    if (this.getEntropy() > e) {
                        const t = this.seekTimeMark(e);
                        this[s].length = t + 1
                    }
                    this.markTime({
                        entropy: e
                    }), this.updateTimers()
                }
                fork(e) {
                    return new h(e, this)
                }
                seekGlobalTime(e) {
                    const t = this.seekTimeMark(e),
                        i = this[s][t],
                        n = i.entropy,
                        r = i.playbackRate;
                    return i.globalTime + (e - n) / Math.abs(r)
                }
                seekLocalTime(e) {
                    const t = this.seekTimeMark(e),
                        i = this[s][t],
                        n = i.localTime,
                        r = i.entropy;
                    return i.playbackRate > 0 ? n + (e - r) : n - (e - r)
                }
                seekTimeMark(e) {
                    const t = this[s];
                    let i = 0,
                        n = t.length - 1;
                    if (e <= t[i].getEntropy()) return i;
                    if (e >= t[n].getEntropy()) return n;
                    let r = Math.floor((i + n) / 2);
                    for (; r > i && r < n;) {
                        if (e === t[r].getEntropy()) return r;
                        e < t[r].getEntropy() ? n = r : e > t[r].getEntropy() && (i = r), r = Math.floor((i + n) / 2)
                    }
                    return i
                }
                getPlaybackRate() {
                    return this[a]
                }
                setPlaybackRate(e) {
                    e !== this.getPlaybackRate() && (this.markTime({
                        playbackRate: e
                    }), this[a] = e, this.updateTimers())
                }
                getPaused() {
                    if (0 === this.getPlaybackRate()) return !0;
                    let e = this.getParent();
                    for (; e;) {
                        if (0 === e.getPlaybackRate()) return !0;
                        e = e.getParent()
                    }
                    return !1
                }
                updateTimers() {
                    [...this[o]].forEach(([e, t]) => {
                        this[u](t.handler, t.time, e)
                    })
                }
                clearTimeout(e) {
                    const t = this[o].get(e);
                    t && null != t.timerID && (this[c] ? this[c].clearTimeout(t.timerID) : clearTimeout(t.timerID)), this[o].delete(e)
                }
                clearInterval(e) {
                    return this.clearTimeout(e)
                }
                clear() {
                    [...this[o].keys()].forEach(e => {
                        this.clearTimeout(e)
                    })
                }
                setTimeout(e, t = {
                    delay: 0
                }) {
                    return this[u](e, t)
                }
                setInterval(e, t = {
                    delay: 0
                }) {
                    const i = this,
                        n = this[u](function r() {
                            i[u](r, t, n), e()
                        }, t);
                    return n
                } [u](e, t, i = Symbol("timerID")) {
                    t = (0, n.formatDelay)(t);
                    const r = this[o].get(i);
                    let s, a, l, u = null;
                    r ? (this.clearTimeout(i), s = t.isEntropy ? (t.delay - (this.getEntropy() - r.startEntropy)) / Math.abs(this.getPlaybackRate()) : (t.delay - (this.getCurrentTime() - r.startTime)) / this.getPlaybackRate(), a = r.startTime, l = r.startEntropy) : (s = t.delay / (t.isEntropy ? Math.abs(this.getPlaybackRate()) : this.getPlaybackRate()), a = this.getCurrentTime(), l = this.getEntropy());
                    const f = this[c],
                        h = f ? f.setTimeout.bind(f) : setTimeout,
                        d = t.heading;
                    return !f && !1 === d && s < 0 && (s = 1 / 0), (isFinite(s) || f) && (s = Math.ceil(s), h !== setTimeout && (s = {
                        delay: s,
                        heading: d
                    }), u = h(() => {
                        this[o].delete(i), e()
                    }, s)), this[o].set(i, {
                        timerID: u,
                        handler: e,
                        time: t,
                        startTime: a,
                        startEntropy: l
                    }), i
                }
            }
            var d = h;
            t.default = d
        },
        307: function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                default: (e, t, i, n, r) => "number" == typeof e && "number" == typeof t ? e + (i - n) / (r - n) * (t - e) : i - n > r - i ? t : e
            };
            t.default = n
        },
        89: function(e, t, i) {
            var n = i(257),
                r = i(256),
                s = i(255);
            e.exports = function(e, t) {
                return n(e) || r(e, t) || s()
            }
        }
    }
]);
//# sourceMappingURL=pc_view.1da854cf_modern.js.map