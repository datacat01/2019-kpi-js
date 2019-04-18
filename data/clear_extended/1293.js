/* AVADA: THIS FILE IS COPIED VERBATIM VIA GRUNT TO THE MINIFIED SCRIPTS FOLDER. IF AN UNMINIFIED VERSION IS USED, REMOVE THE THE "copyFiles" GRUNT TASK. */
/*! @vimeo/player v2.2.1 | (c) 2017 Vimeo | MIT License | https://github.com/vimeo/player.js */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e.Vimeo = e.Vimeo || {}, e.Vimeo.Player = t())
}(this, function() {
    "use strict";

    function e(e, t) {
        return 0 === e.indexOf(t.toLowerCase()) ? e : "" + t.toLowerCase() + e.substr(0, 1).toUpperCase() + e.substr(1)
    }

    function t(e) {
        return e instanceof window.HTMLElement
    }

    function n(e) {
        return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e
    }

    function r(e) {
        return /^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(e)
    }

    function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.id,
            o = e.url,
            i = t || o;
        if (!i) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
        if (n(i)) return "https://vimeo.com/" + i;
        if (r(i)) return i.replace("http:", "https:");
        if (t) throw new TypeError("“" + t + "” is not a valid video id.");
        throw new TypeError("“" + i + "” is not a vimeo.com url.")
    }

    function i(e, t) {
        return t = {
            exports: {}
        }, e(t, t.exports), t.exports
    }

    function a(e, t, n) {
        var r = T.get(e.element) || {};
        t in r || (r[t] = []), r[t].push(n), T.set(e.element, r)
    }

    function u(e, t) {
        return (T.get(e.element) || {})[t] || []
    }

    function s(e, t, n) {
        var r = T.get(e.element) || {};
        if (!r[t]) return !0;
        if (!n) return r[t] = [], T.set(e.element, r), !0;
        var o = r[t].indexOf(n);
        return -1 !== o && r[t].splice(o, 1), T.set(e.element, r), r[t] && 0 === r[t].length
    }

    function c(e, t) {
        var n = u(e, t);
        if (n.length < 1) return !1;
        var r = n.shift();
        return s(e, t, r), r
    }

    function f(e, t) {
        var n = T.get(e);
        T.set(t, n), T.delete(e)
    }

    function l(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return _.reduce(function(t, n) {
            var r = e.getAttribute("data-vimeo-" + n);
            return (r || "" === r) && (t[n] = "" === r ? 1 : r), t
        }, t)
    }

    function h(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise(function(n, o) {
            if (!r(e)) throw new TypeError("“" + e + "” is not a vimeo.com url.");
            var i = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(e);
            for (var a in t) t.hasOwnProperty(a) && (i += "&" + a + "=" + encodeURIComponent(t[a]));
            var u = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
            u.open("GET", i, !0), u.onload = function() {
                if (404 === u.status) return void o(new Error("“" + e + "” was not found."));
                if (403 === u.status) return void o(new Error("“" + e + "” is not embeddable."));
                try {
                    var t = JSON.parse(u.responseText);
                    n(t)
                } catch (e) {
                    o(e)
                }
            }, u.onerror = function() {
                var e = u.status ? " (" + u.status + ")" : "";
                o(new Error("There was an error fetching the embed code from Vimeo" + e + "."))
            }, u.send()
        })
    }

    function d(e, t) {
        var n = e.html;
        if (!t) throw new TypeError("An element must be provided");
        if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
        var r = document.createElement("div");
        return r.innerHTML = n, t.appendChild(r.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe")
    }

    function v(e) {
        return "string" == typeof e && (e = JSON.parse(e)), e
    }

    function p(e, t, n) {
        if (e.element.contentWindow && e.element.contentWindow.postMessage) {
            var r = {
                method: t
            };
            void 0 !== n && (r.value = n);
            var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
            o >= 8 && o < 10 && (r = JSON.stringify(r)), e.element.contentWindow.postMessage(r, e.origin)
        }
    }

    function y(e, t) {
        t = v(t);
        var n = [],
            r = void 0;
        if (t.event) {
            if ("error" === t.event) {
                u(e, t.data.method).forEach(function(n) {
                    var r = new Error(t.data.message);
                    r.name = t.data.name, n.reject(r), s(e, t.data.method, n)
                })
            }
            n = u(e, "event:" + t.event), r = t.data
        } else if (t.method) {
            var o = c(e, t.method);
            o && (n.push(o), r = t.value)
        }
        n.forEach(function(t) {
            try {
                if ("function" == typeof t) return void t.call(e, r);
                t.resolve(r)
            } catch (e) {}
        })
    }

    function m(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var g = "undefined" != typeof global && "[object global]" === {}.toString.call(global),
        w = void 0 !== Array.prototype.indexOf,
        b = "undefined" != typeof window && void 0 !== window.postMessage;
    if (!(g || w && b)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
    var k = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        E = (i(function(e, t) {
            ! function(e) {
                function t(e, t) {
                    function r(e) {
                        if (!this || this.constructor !== r) return new r(e);
                        this._keys = [], this._values = [], this._itp = [], this.objectOnly = t, e && n.call(this, e)
                    }
                    return t || w(e, "size", {
                        get: y
                    }), e.constructor = r, r.prototype = e, r
                }

                function n(e) {
                    this.add ? e.forEach(this.add, this) : e.forEach(function(e) {
                        this.set(e[0], e[1])
                    }, this)
                }

                function r(e) {
                    return this.has(e) && (this._keys.splice(g, 1), this._values.splice(g, 1), this._itp.forEach(function(e) {
                        g < e[0] && e[0]--
                    })), -1 < g
                }

                function o(e) {
                    return this.has(e) ? this._values[g] : void 0
                }

                function i(e, t) {
                    if (this.objectOnly && t !== Object(t)) throw new TypeError("Invalid value used as weak collection key");
                    if (t != t || 0 === t)
                        for (g = e.length; g-- && !b(e[g], t););
                    else g = e.indexOf(t);
                    return -1 < g
                }

                function a(e) {
                    return i.call(this, this._values, e)
                }

                function u(e) {
                    return i.call(this, this._keys, e)
                }

                function s(e, t) {
                    return this.has(e) ? this._values[g] = t : this._values[this._keys.push(e) - 1] = t, this
                }

                function c(e) {
                    return this.has(e) || this._values.push(e), this
                }

                function f() {
                    (this._keys || 0).length = this._values.length = 0
                }

                function l() {
                    return p(this._itp, this._keys)
                }

                function h() {
                    return p(this._itp, this._values)
                }

                function d() {
                    return p(this._itp, this._keys, this._values)
                }

                function v() {
                    return p(this._itp, this._values, this._values)
                }

                function p(e, t, n) {
                    var r = [0],
                        o = !1;
                    return e.push(r), {
                        next: function() {
                            var i, a = r[0];
                            return !o && a < t.length ? (i = n ? [t[a], n[a]] : t[a], r[0]++) : (o = !0, e.splice(e.indexOf(r), 1)), {
                                done: o,
                                value: i
                            }
                        }
                    }
                }

                function y() {
                    return this._values.length
                }

                function m(e, t) {
                    for (var n = this.entries();;) {
                        var r = n.next();
                        if (r.done) break;
                        e.call(t, r.value[1], r.value[0], this)
                    }
                }
                var g, w = Object.defineProperty,
                    b = function(e, t) {
                        return e === t || e !== e && t !== t
                    };
                "undefined" == typeof WeakMap && (e.WeakMap = t({
                    delete: r,
                    clear: f,
                    get: o,
                    has: u,
                    set: s
                }, !0)), "undefined" != typeof Map && "function" == typeof(new Map).values && (new Map).values().next || (e.Map = t({
                    delete: r,
                    has: u,
                    get: o,
                    set: s,
                    keys: l,
                    values: h,
                    entries: d,
                    forEach: m,
                    clear: f
                })), "undefined" != typeof Set && "function" == typeof(new Set).values && (new Set).values().next || (e.Set = t({
                    has: a,
                    add: c,
                    delete: r,
                    clear: f,
                    keys: h,
                    values: h,
                    entries: v,
                    forEach: m
                })), "undefined" == typeof WeakSet && (e.WeakSet = t({
                    delete: r,
                    add: c,
                    clear: f,
                    has: a
                }, !0))
            }(void 0 !== k ? k : window)
        }), i(function(e) {
            var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            ! function(t, n, r) {
                n[t] = n[t] || r(), e.exports && (e.exports = n[t])
            }("Promise", k, function() {
                function e(e, t) {
                    d.add(e, t), h || (h = p(d.drain))
                }

                function n(e) {
                    var n, r = void 0 === e ? "undefined" : t(e);
                    return null == e || "object" != r && "function" != r || (n = e.then), "function" == typeof n && n
                }

                function r() {
                    for (var e = 0; e < this.chain.length; e++) o(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                    this.chain.length = 0
                }

                function o(e, t, r) {
                    var o, i;
                    try {
                        !1 === t ? r.reject(e.msg) : (o = !0 === t ? e.msg : t.call(void 0, e.msg), o === r.promise ? r.reject(TypeError("Promise-chain cycle")) : (i = n(o)) ? i.call(o, r.resolve, r.reject) : r.resolve(o))
                    } catch (e) {
                        r.reject(e)
                    }
                }

                function i(t) {
                    var o, u = this;
                    if (!u.triggered) {
                        u.triggered = !0, u.def && (u = u.def);
                        try {
                            (o = n(t)) ? e(function() {
                                var e = new s(u);
                                try {
                                    o.call(t, function() {
                                        i.apply(e, arguments)
                                    }, function() {
                                        a.apply(e, arguments)
                                    })
                                } catch (t) {
                                    a.call(e, t)
                                }
                            }): (u.msg = t, u.state = 1, u.chain.length > 0 && e(r, u))
                        } catch (e) {
                            a.call(new s(u), e)
                        }
                    }
                }

                function a(t) {
                    var n = this;
                    n.triggered || (n.triggered = !0, n.def && (n = n.def), n.msg = t, n.state = 2, n.chain.length > 0 && e(r, n))
                }

                function u(e, t, n, r) {
                    for (var o = 0; o < t.length; o++) ! function(o) {
                        e.resolve(t[o]).then(function(e) {
                            n(o, e)
                        }, r)
                    }(o)
                }

                function s(e) {
                    this.def = e, this.triggered = !1
                }

                function c(e) {
                    this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
                }

                function f(t) {
                    if ("function" != typeof t) throw TypeError("Not a function");
                    if (0 !== this.__NPO__) throw TypeError("Not a promise");
                    this.__NPO__ = 1;
                    var n = new c(this);
                    this.then = function(t, o) {
                        var i = {
                            success: "function" != typeof t || t,
                            failure: "function" == typeof o && o
                        };
                        return i.promise = new this.constructor(function(e, t) {
                            if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                            i.resolve = e, i.reject = t
                        }), n.chain.push(i), 0 !== n.state && e(r, n), i.promise
                    }, this.catch = function(e) {
                        return this.then(void 0, e)
                    };
                    try {
                        t.call(void 0, function(e) {
                            i.call(n, e)
                        }, function(e) {
                            a.call(n, e)
                        })
                    } catch (e) {
                        a.call(n, e)
                    }
                }
                var l, h, d, v = Object.prototype.toString,
                    p = "undefined" != typeof setImmediate ? function(e) {
                        return setImmediate(e)
                    } : setTimeout;
                try {
                    Object.defineProperty({}, "x", {}), l = function(e, t, n, r) {
                        return Object.defineProperty(e, t, {
                            value: n,
                            writable: !0,
                            configurable: !1 !== r
                        })
                    }
                } catch (e) {
                    l = function(e, t, n) {
                        return e[t] = n, e
                    }
                }
                d = function() {
                    function e(e, t) {
                        this.fn = e, this.self = t, this.next = void 0
                    }
                    var t, n, r;
                    return {
                        add: function(o, i) {
                            r = new e(o, i), n ? n.next = r : t = r, n = r, r = void 0
                        },
                        drain: function() {
                            var e = t;
                            for (t = n = h = void 0; e;) e.fn.call(e.self), e = e.next
                        }
                    }
                }();
                var y = l({}, "constructor", f, !1);
                return f.prototype = y, l(y, "__NPO__", 0, !1), l(f, "resolve", function(e) {
                    var n = this;
                    return e && "object" == (void 0 === e ? "undefined" : t(e)) && 1 === e.__NPO__ ? e : new n(function(t, n) {
                        if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                        t(e)
                    })
                }), l(f, "reject", function(e) {
                    return new this(function(t, n) {
                        if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                        n(e)
                    })
                }), l(f, "all", function(e) {
                    var t = this;
                    return "[object Array]" != v.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t(function(n, r) {
                        if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
                        var o = e.length,
                            i = Array(o),
                            a = 0;
                        u(t, e, function(e, t) {
                            i[e] = t, ++a === o && n(i)
                        }, r)
                    })
                }), l(f, "race", function(e) {
                    var t = this;
                    return "[object Array]" != v.call(e) ? t.reject(TypeError("Not an array")) : new t(function(n, r) {
                        if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
                        u(t, e, function(e, t) {
                            n(t)
                        }, r)
                    })
                }), f
            })
        })),
        T = new WeakMap,
        _ = ["id", "url", "width", "maxwidth", "height", "maxheight", "portrait", "title", "byline", "color", "autoplay", "autopause", "loop", "responsive", "speed", "background", "transparent"],
        j = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        x = new WeakMap,
        M = new WeakMap,
        Player = function() {
            function Player(e) {
                var n = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (m(this, Player), window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e = e[0]), "string" == typeof e && (e = document.getElementById(e)), !t(e)) throw new TypeError("You must pass either a valid element or a valid id.");
                if ("IFRAME" !== e.nodeName) {
                    var a = e.querySelector("iframe");
                    a && (e = a)
                }
                if ("IFRAME" === e.nodeName && !r(e.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
                if (x.has(e)) return x.get(e);
                this.element = e, this.origin = "*";
                var u = new E(function(t, a) {
                    var u = function(e) {
                        if (r(e.origin) && n.element.contentWindow === e.source) {
                            "*" === n.origin && (n.origin = e.origin);
                            var o = v(e.data),
                                i = "event" in o && "ready" === o.event,
                                a = "method" in o && "ping" === o.method;
                            if (i || a) return n.element.setAttribute("data-ready", "true"), void t();
                            y(n, o)
                        }
                    };
                    if (window.addEventListener ? window.addEventListener("message", u, !1) : window.attachEvent && window.attachEvent("onmessage", u), "IFRAME" !== n.element.nodeName) {
                        var s = l(e, i);
                        h(o(s), s).then(function(t) {
                            var r = d(t, e);
                            return n.element = r, f(e, r), x.set(n.element, n), t
                        }).catch(function(e) {
                            return a(e)
                        })
                    }
                });
                return M.set(this, u), x.set(this.element, this), "IFRAME" === this.element.nodeName && p(this, "ping"), this
            }
            return j(Player, [{
                key: "callMethod",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new E(function(r, o) {
                        return t.ready().then(function() {
                            a(t, e, {
                                resolve: r,
                                reject: o
                            }), p(t, e, n)
                        })
                    })
                }
            }, {
                key: "get",
                value: function(t) {
                    var n = this;
                    return new E(function(r, o) {
                        return t = e(t, "get"), n.ready().then(function() {
                            a(n, t, {
                                resolve: r,
                                reject: o
                            }), p(n, t)
                        })
                    })
                }
            }, {
                key: "set",
                value: function(t, n) {
                    var r = this;
                    return E.resolve(n).then(function(n) {
                        if (t = e(t, "set"), void 0 === n || null === n) throw new TypeError("There must be a value to set.");
                        return r.ready().then(function() {
                            return new E(function(e, o) {
                                a(r, t, {
                                    resolve: e,
                                    reject: o
                                }), p(r, t, n)
                            })
                        })
                    })
                }
            }, {
                key: "on",
                value: function(e, t) {
                    if (!e) throw new TypeError("You must pass an event name.");
                    if (!t) throw new TypeError("You must pass a callback function.");
                    if ("function" != typeof t) throw new TypeError("The callback must be a function.");
                    0 === u(this, "event:" + e).length && this.callMethod("addEventListener", e).catch(function() {}), a(this, "event:" + e, t)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    if (!e) throw new TypeError("You must pass an event name.");
                    if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
                    s(this, "event:" + e, t) && this.callMethod("removeEventListener", e).catch(function(e) {})
                }
            }, {
                key: "loadVideo",
                value: function(e) {
                    return this.callMethod("loadVideo", e)
                }
            }, {
                key: "ready",
                value: function() {
                    var e = M.get(this);
                    return E.resolve(e)
                }
            }, {
                key: "addCuePoint",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.callMethod("addCuePoint", {
                        time: e,
                        data: t
                    })
                }
            }, {
                key: "removeCuePoint",
                value: function(e) {
                    return this.callMethod("removeCuePoint", e)
                }
            }, {
                key: "enableTextTrack",
                value: function(e, t) {
                    if (!e) throw new TypeError("You must pass a language.");
                    return this.callMethod("enableTextTrack", {
                        language: e,
                        kind: t
                    })
                }
            }, {
                key: "disableTextTrack",
                value: function() {
                    return this.callMethod("disableTextTrack")
                }
            }, {
                key: "pause",
                value: function() {
                    return this.callMethod("pause")
                }
            }, {
                key: "play",
                value: function() {
                    return this.callMethod("play")
                }
            }, {
                key: "unload",
                value: function() {
                    return this.callMethod("unload")
                }
            }, {
                key: "getAutopause",
                value: function() {
                    return this.get("autopause")
                }
            }, {
                key: "setAutopause",
                value: function(e) {
                    return this.set("autopause", e)
                }
            }, {
                key: "getColor",
                value: function() {
                    return this.get("color")
                }
            }, {
                key: "setColor",
                value: function(e) {
                    return this.set("color", e)
                }
            }, {
                key: "getCuePoints",
                value: function() {
                    return this.get("cuePoints")
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.get("currentTime")
                }
            }, {
                key: "setCurrentTime",
                value: function(e) {
                    return this.set("currentTime", e)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.get("duration")
                }
            }, {
                key: "getEnded",
                value: function() {
                    return this.get("ended")
                }
            }, {
                key: "getLoop",
                value: function() {
                    return this.get("loop")
                }
            }, {
                key: "setLoop",
                value: function(e) {
                    return this.set("loop", e)
                }
            }, {
                key: "getPaused",
                value: function() {
                    return this.get("paused")
                }
            }, {
                key: "getPlaybackRate",
                value: function() {
                    return this.get("playbackRate")
                }
            }, {
                key: "setPlaybackRate",
                value: function(e) {
                    return this.set("playbackRate", e)
                }
            }, {
                key: "getTextTracks",
                value: function() {
                    return this.get("textTracks")
                }
            }, {
                key: "getVideoEmbedCode",
                value: function() {
                    return this.get("videoEmbedCode")
                }
            }, {
                key: "getVideoId",
                value: function() {
                    return this.get("videoId")
                }
            }, {
                key: "getVideoTitle",
                value: function() {
                    return this.get("videoTitle")
                }
            }, {
                key: "getVideoWidth",
                value: function() {
                    return this.get("videoWidth")
                }
            }, {
                key: "getVideoHeight",
                value: function() {
                    return this.get("videoHeight")
                }
            }, {
                key: "getVideoUrl",
                value: function() {
                    return this.get("videoUrl")
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.get("volume")
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    return this.set("volume", e)
                }
            }]), Player
        }();
    return g || (function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
            t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
            n = function(e) {
                "console" in window && console.error && console.error("There was an error creating an embed: " + e)
            };
        t.forEach(function(e) {
            try {
                if (null !== e.getAttribute("data-vimeo-defer")) return;
                var t = l(e);
                h(o(t), t).then(function(t) {
                    return d(t, e)
                }).catch(n)
            } catch (e) {
                n(e)
            }
        })
    }(), function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
            t = function(t) {
                if (r(t.origin) && t.data && "spacechange" === t.data.event)
                    for (var n = e.querySelectorAll("iframe"), o = 0; o < n.length; o++)
                        if (n[o].contentWindow === t.source) {
                            var i = n[o].parentElement;
                            i && -1 !== i.className.indexOf("vimeo-space") && (i.style.paddingBottom = t.data.data[0].bottom + "px");
                            break
                        }
            };
        window.addEventListener ? window.addEventListener("message", t, !1) : window.attachEvent && window.attachEvent("onmessage", t)
    }()), Player
});