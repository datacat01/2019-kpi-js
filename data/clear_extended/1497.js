webpackJsonp([1], {
    254: function(e, t, i) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var n = i(255);
            i(14);
            var o = i(258),
                a = t(o),
                r = i(259),
                s = t(r),
                l = i(260),
                d = t(l),
                c = i(261),
                u = t(c),
                f = i(263),
                h = t(f),
                p = i(264),
                m = t(p),
                v = i(265),
                g = t(v),
                w = i(266),
                y = t(w),
                b = i(267),
                _ = t(b),
                k = i(268),
                C = t(k),
                T = i(269),
                S = t(T),
                N = i(270),
                M = t(N),
                E = i(271),
                A = t(E),
                x = i(272),
                O = t(x),
                P = i(273),
                I = t(P),
                D = i(274),
                L = t(D),
                j = i(275),
                V = t(j),
                B = i(276),
                q = t(B),
                G = i(277),
                R = t(G),
                U = i(278),
                H = t(U),
                F = i(280),
                z = t(F),
                W = i(281),
                Y = t(W),
                J = i(282),
                $ = t(J),
                K = i(283),
                X = t(K),
                Q = i(284),
                Z = t(Q),
                ee = i(285),
                te = t(ee),
                ie = i(286),
                ne = t(ie);
            n.Tea.Application.addService("utils", a.default),
                /*!
                 * AOL.com application
                 * @author: Andy Kahn <andy.kahn@teamaol.com>
                 */
                n.Tea.Application.addService("respond", s.default), n.Tea.Application.addService("lazyload", d.default), n.Tea.Application.addService("lineclamp", u.default), n.Tea.Application.addService("popup", h.default), n.Tea.Application.addBehavior("respond", m.default), n.Tea.Application.addModule("page", g.default), n.Tea.Application.addModule("ads", y.default), n.Tea.Application.addModule("notifications", C.default), n.Tea.Application.addModule("notifications-menu", S.default), n.Tea.Application.addModule("notifications-banner", M.default), n.Tea.Application.addModule("notifications-blocked", A.default), n.Tea.Application.addModule("adblock", O.default), n.Tea.Application.addModule("usersettings", I.default), n.Tea.Application.addModule("widget", L.default), n.Tea.Application.addModule("linkout", _.default), n.Tea.Application.addModule("hijinks", V.default), n.Tea.Application.addModule("newsletter-toaster", q.default), n.Tea.Application.addModule("quicknav", R.default), n.Tea.Application.addModule("mailpreview", H.default), n.Tea.Application.addModule("user-consent", z.default), n.Tea.Application.addModule("mail-preview", H.default), n.Tea.Application.addModule("desktop-favorites-import", Y.default), n.Tea.Application.addModule("rapid-releases", $.default), n.Tea.Application.addModule("footer", X.default), n.Tea.Application.addModule("ad-gemini-rm", Z.default), n.Tea.Application.addModule("scores-ticker", te.default), n.Tea.Application.addModule("oath-video-player", ne.default), n.Tea.Application.on("error", function(e) {}), n.Tea.Application.on("message", function(e) {
                    "respond" !== e.data.message && "scrollDebounced" !== e.data.message && "resizeDebounced" !== e.data.message && n.Tea.Application.reportInfo(e.data)
                }), e.Tea = n.Tea
        }).call(t, i(34))
    },
    255: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Tea = void 0;
        var n = i(63),
            o = i(35),
            a = i(64),
            r = i(256);
        t.Tea = {
            Application: r.Application,
            Context: a.Context,
            Dom: o.DOM,
            EventTarget: n.EventTarget
        }
    },
    256: function(e, t, i) {
        "use strict";
        (function(e, n) {
            function o(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                    return i
                }
                return Array.from(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Application = void 0;
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                r = i(257),
                s = i(63),
                l = i(64),
                d = i(35);
            t.Application = function() {
                function t(e, t) {
                    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                    return e
                }

                function i(e, t) {
                    for (var i = 0, n = e.length; i < n; i++)
                        if (e[i] === t) return i;
                    return -1
                }

                function c() {
                    N = {}, M = {}, A = {}, E = [], x = {}, O = {}, P = !1
                }

                function u(e) {
                    for (var t = 0, i = E.length; t < i; t++)
                        if (E[t] === e) return !0;
                    return !1
                }

                function f(e) {
                    if (N.debug) throw e;
                    I.fire("error", {
                        exception: e
                    })
                }

                function h(e, t) {
                    var i = void 0,
                        n = void 0;
                    for (i in e) "function" == typeof(n = e[i]) && (e[i] = function(e, i) {
                        return function() {
                            var n = t + "." + e + "() - ";
                            try {
                                return i.apply(this, arguments)
                            } catch (i) {
                                i.methodName = e, i.objectName = t, i.name = n + i.name, i.message = n + i.message, f(i)
                            }
                        }
                    }(i, n))
                }

                function p(e) {
                    var t = e.getAttribute("data-module");
                    return t ? t.split(" ")[0] : ""
                }

                function m(e, t) {
                    "function" == typeof e[t] && e[t].apply(e, o(Array.prototype.slice.call(arguments, 2)))
                }

                function v(e) {
                    var t = A[e];
                    if (t) {
                        if (!t.instance) {
                            if (u(e)) return f(new ReferenceError("Circular service dependency: " + E.join(" -> ") + " -> " + e)), null;
                            E.push(e), t.instance = t.creator(I), E.pop()
                        }
                        return t.instance
                    }
                    return f(new Error('Service "' + e + '" not found')), null
                }

                function g(e) {
                    var t = void 0,
                        i = void 0,
                        n = void 0,
                        o = [],
                        a = {},
                        r = void 0,
                        s = void 0;
                    for (i = e.instance.behaviors || [], t = 0; t < i.length; t++) s = i[t], "behaviorInstances" in e || (e.behaviorInstances = {}), r = e.behaviorInstances, n = x[s], s in a ? f(new Error('Behavior "' + s + '" cannot be specified twice in a module.')) : n ? (r[s] || (r[s] = n.creator(e.context)), o.push(r[s])) : f(new Error('Behavior "' + s + '" not found')), a[s] = !0;
                    return o
                }

                function w(e, t, i) {
                    var n = new r.DOMEventDelegate(t, i, N.eventTypes);
                    e.push(n), n.attachEvents()
                }

                function y(e) {
                    var t = e.eventDelegates,
                        i = g(e);
                    w(t, e.element, e.instance);
                    for (var n = 0; n < i.length; n++) w(t, e.element, i[n])
                }

                function b(e) {
                    for (var t = e.eventDelegates, i = 0; i < t.length; i++) t[i].detachEvents();
                    e.eventDelegates = []
                }

                function _(e) {
                    return O[e.id]
                }

                function k(e, t, n) {
                    null !== e.onmessage && "object" === a(e.onmessage) && e.onmessage.hasOwnProperty(t) ? e.onmessage[t].call(e, n) : -1 !== i(e.messages || [], t) && e.onmessage.call(e, t, n)
                }

                function C(t, i) {
                    var o = {
                        threshold: 0,
                        offset: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    };
                    i = e.extend(!0, {}, o, i), t instanceof n && (t = t[0]);
                    var a = t.getBoundingClientRect(),
                        r = a.top,
                        s = a.right,
                        l = a.bottom,
                        d = a.left,
                        c = a.width,
                        u = a.height,
                        f = {
                            t: l,
                            r: window.innerWidth - d,
                            b: window.innerHeight - r,
                            l: s
                        },
                        h = {
                            x: i.threshold * c,
                            y: i.threshold * u
                        };
                    return f.t > i.offset.top + h.y && f.r > i.offset.right + h.x && f.b > i.offset.bottom + h.y && f.l > i.offset.left + h.x
                }

                function T(e) {
                    for (var t = d.DOM.queryAll(e, S), i = d.DOM.queryAll(e, '[data-init-delay="onview"]'), n = 0, o = t.length; n < o; n++) t[n].setAttribute("data-module-delay", t[n].getAttribute("data-module")), t[n].removeAttribute("data-module");
                    if (window.onload = function() {
                            for (var i = 0, n = t.length; i < n; i++) "onview" !== t[i].getAttribute("data-init-delay") && (t[i].setAttribute("data-module", t[i].getAttribute("data-module-delay")), t[i].removeAttribute("data-module-delay"));
                            I.startAll(e)
                        }, i.length > 0) {
                        var a = function() {
                            for (var e = 0, t = i.length; e < t; e++) C(i[e], {
                                offset: {
                                    top: -500,
                                    bottom: -500
                                }
                            }) && (i[e].setAttribute("data-module", i[e].getAttribute("data-module-delay")), i[e].removeAttribute("data-module-delay"), I.start(i[e]), i.splice(i[e], 1))
                        };
                        window.addEventListener("scroll", function e() {
                            if (0 === i.length) return window.removeEventListener("scroll", e);
                            a()
                        }), a()
                    }
                    return this
                }
                var S = "[data-init-delay]",
                    N = {},
                    M = {},
                    E = [],
                    A = {},
                    x = {},
                    O = {},
                    P = !1,
                    I = new s.EventTarget;
                return t(I, {
                    init: function(e) {
                        return t(N, e || {}), T(document.documentElement), this.startAll(document.documentElement), this.fire("init"), P = !0, this
                    },
                    destroy: function() {
                        return this.stopAll(document.documentElement), c(), this
                    },
                    isStarted: function(e) {
                        var t = _(e);
                        return "object" === (void 0 === t ? "undefined" : a(t))
                    },
                    start: function(e) {
                        var t = p(e),
                            i = M[t],
                            n = void 0,
                            o = void 0,
                            a = void 0;
                        if (!i) return f(new Error('Module type "' + t + '" is not defined.')), this;
                        if (!this.isStarted(e)) {
                            e.id || (e.id = "mod-" + t + "-" + i.counter), i.counter++, o = new l.Context(this, e), a = i.creator(o), N.debug || h(a, t), n = {
                                moduleName: t,
                                instance: a,
                                context: o,
                                element: e,
                                eventDelegates: []
                            }, O[e.id] = n;
                            for (var r = g(n), s = void 0, d = 0, c = r.length; d < c; d++) s = r[d], m(s, "init");
                            m(n.instance, "init"), y(n)
                        }
                        return this
                    },
                    stop: function(e) {
                        var t = _(e);
                        if (t) {
                            b(t);
                            for (var i = g(t), n = void 0, o = i.length - 1; o >= 0; o--) n = i[o], m(n, "destroy");
                            m(t.instance, "destroy"), delete O[e.id]
                        } else if (N.debug) return f(new Error("Unable to stop module associated with element: " + e.id)), this;
                        return this
                    },
                    startAll: function(e) {
                        for (var t = d.DOM.queryAll(e, "[data-module]"), i = 0, n = t.length; i < n; i++) this.start(t[i]);
                        return this
                    },
                    stopAll: function(e) {
                        for (var t = d.DOM.queryAll(e, "[data-module]"), i = 0, n = t.length; i < n; i++) this.stop(t[i]);
                        return this
                    },
                    addModule: function(e, t) {
                        return void 0 !== M[e] ? (f(new Error("Module " + e + " has already been added.")), this) : (M[e] = {
                            creator: t,
                            counter: 1
                        }, this)
                    },
                    getModuleConfig: function(e, t) {
                        var i = _(e),
                            n = null;
                        if (i && i.config) n = i.config;
                        else {
                            var o = d.DOM.query(e, 'script[type="text/x-tea-config"]');
                            if (o) try {
                                n = JSON.parse(o.text)
                            } catch (t) {
                                f(new Error("Module with id " + e.id + " has a malformed config."))
                            }
                            i && (i.config = n)
                        }
                        return n ? void 0 === t ? n : t in n ? n[t] : null : null
                    },
                    addService: function(e, t) {
                        return void 0 !== A[e] ? (f(new Error("Service " + e + " has already been added.")), this) : (A[e] = {
                            creator: t,
                            instance: null
                        }, this)
                    },
                    getService: v,
                    hasService: function(e) {
                        return A.hasOwnProperty(e)
                    },
                    addBehavior: function(e, t) {
                        return void 0 !== x[e] ? (f(new Error("Behavior " + e + " has already been added.")), this) : (x[e] = {
                            creator: t,
                            instance: null
                        }, this)
                    },
                    broadcast: function(e, t) {
                        var i = void 0,
                            n = void 0,
                            o = void 0,
                            a = void 0,
                            r = void 0;
                        for (n in O)
                            if (O.hasOwnProperty(n))
                                for (o = O[n], k(o.instance, e, t), r = g(o), i = 0; i < r.length; i++) a = r[i], k(a, e, t);
                        return this.fire("message", {
                            message: e,
                            messageData: t
                        }), this
                    },
                    getGlobal: function(e) {
                        return e in window ? window[e] : null
                    },
                    getGlobalConfig: function(e) {
                        return void 0 === e ? N : e in N ? N[e] : null
                    },
                    setGlobalConfig: function(e) {
                        return P ? (f(new Error("Cannot set global configuration after application initialization")), this) : (t(N, e), this)
                    },
                    reportError: f,
                    reportWarning: function(e) {
                        if (N.debug) {
                            var t = this.getGlobal("console");
                            t && t.warn && t.warn(e)
                        } else I.fire("warning", e)
                    },
                    reportInfo: function(e) {
                        if (N.debug) {
                            var t = this.getGlobal("console");
                            t && t.info && t.info(e)
                        }
                    }
                })
            }()
        }).call(t, i(0), i(0))
    },
    257: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DOMEventDelegate = void 0;
        var n = i(35);
        t.DOMEventDelegate = function() {
            function e(e) {
                return e && e.hasAttribute("data-module")
            }

            function t(e) {
                return e && e.hasAttribute("data-type")
            }

            function i(i) {
                for (var n = !1, o = !1; !n && i && i.parentNode && !o;) n = t(i), o = e(i), n || (i = i.parentNode);
                return n ? i : null
            }

            function o(e, t, i, n) {
                var o = void 0,
                    a = void 0;
                for (o = 0; o < e.length; o++) a = e[o], t["on" + a] && i.call(n, a)
            }

            function a(e, t, i) {
                this.element = e, this._handler = t, this._eventTypes = i || r, this._boundHandler = {}, this._attached = !1
            }
            var r = ["click", "mouseover", "mouseout", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "keydown", "keyup", "submit", "change", "contextmenu", "dblclick", "input", "focusin", "focusout", "touchstart", "touchmove", "touchend"];
            return a.prototype = {
                constructor: a,
                _handleEvent: function(e) {
                    var t = i(e.target),
                        n = t ? t.getAttribute("data-type") : "";
                    this._handler["on" + e.type](e, t, n)
                },
                attachEvents: function() {
                    this._attached || (o(this._eventTypes, this._handler, function(e) {
                        function t() {
                            i._handleEvent.apply(i, arguments)
                        }
                        var i = this;
                        n.DOM.on(this.element, e, t), this._boundHandler[e] = t
                    }, this), this._attached = !0)
                },
                detachEvents: function() {
                    o(this._eventTypes, this._handler, function(e) {
                        n.DOM.off(this.element, e, this._boundHandler[e])
                    }, this)
                }
            }, a
        }()
    },
    258: function(e, t, i) {
        "use strict";
        (function(e) {
            function i(t) {
                function i(e, t) {
                    return (void 0 === e ? "undefined" : n(e)) === t
                }
                var o = t.getGlobal("jQuery");
                return {
                    checkNested: function(e) {
                        for (var t = Array.prototype.slice.call(arguments, 1), i = 0; i < t.length; i++) {
                            if (!e || !e.hasOwnProperty(t[i])) return !1;
                            e = e[t[i]]
                        }
                        return !0
                    },
                    debounce: function(e, t, i) {
                        var n = void 0;
                        return function() {
                            var o = this,
                                a = arguments,
                                r = function() {
                                    n = null, i || e.apply(o, a)
                                },
                                s = i && !n;
                            clearTimeout(n), n = setTimeout(r, t || 150), s && e.apply(o, a)
                        }
                    },
                    poll: function(e, t, i, n) {
                        function a() {
                            e() ? r.resolve() : Number(new Date) < s ? setTimeout(a, i) : r.reject(new Error("timed out for " + e + ": " + arguments))
                        }
                        var r = o.Deferred(),
                            s = Number(new Date) + (t || 2e3);
                        return i = i || 100, n = n || 0, setTimeout(a, n), r.promise()
                    },
                    inViewport: function(t, i) {
                        var n = {
                            threshold: 0,
                            offset: {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }
                        };
                        i = o.extend(!0, {}, n, i), t instanceof e && (t = t[0]);
                        var a = t.getBoundingClientRect(),
                            r = a.top,
                            s = a.right,
                            l = a.bottom,
                            d = a.left,
                            c = a.width,
                            u = a.height,
                            f = {
                                t: l,
                                r: window.innerWidth - d,
                                b: window.innerHeight - r,
                                l: s
                            },
                            h = {
                                x: i.threshold * c,
                                y: i.threshold * u
                            };
                        return f.t > i.offset.top + h.y && f.r > i.offset.right + h.x && f.b > i.offset.bottom + h.y && f.l > i.offset.left + h.x
                    },
                    isElementInViewport: function(t, i, n) {
                        n = "number" == typeof n ? n : 0, i = "boolean" == typeof i && i, "function" == typeof e && t instanceof e && (t = t[0]);
                        var o = t.getBoundingClientRect(),
                            a = window.innerHeight || document.documentElement.clientHeight,
                            r = window.innerWidth || document.documentElement.clientWidth;
                        return i ? (0 + n >= o.top - a || 0 + n >= o.bottom - a) && (o.left >= 0 + n || o.right <= r) : o.top >= 0 + n && o.left >= 0 + n && o.bottom <= a && o.right <= r
                    },
                    simulateClick: function(e) {
                        var t = new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0,
                            view: window
                        });
                        e.dispatchEvent(t)
                    },
                    isString: function(e) {
                        return i(e, "string")
                    },
                    isObject: function(e) {
                        return null !== e && i(e, "object")
                    },
                    isFunction: function(e) {
                        return i(e, "function")
                    },
                    contains: function(e, t) {
                        return e && e.includes(t)
                    },
                    isEmptyObject: function(e) {
                        return o.isEmptyObject(e)
                    },
                    isHomepageRedesignTest: function() {
                        return o("html").hasClass("mv-homepage-top-test")
                    },
                    redirect: function(e) {
                        window.location.href = e
                    },
                    reload: function() {
                        this.redirect(window.location.href)
                    },
                    htmlEncode: function(e) {
                        return o("<div/>").text(e).html()
                    },
                    htmlDecode: function(e) {
                        return o("<div/>").html(e).text()
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            t.default = i
        }).call(t, i(0))
    },
    259: function(e, t, i) {
        "use strict";

        function n(e) {
            function t(e, t) {
                var i = void 0;
                return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(e, "").getPropertyValue(t) : (t = t.replace(/\-(\w)/g, function(e, t) {
                    return t.toUpperCase()
                }), i = e.currentStyle[t]), i
            }
            var i = document.documentElement;
            return {
                getLayout: function() {
                    var e = t(i, "font-family").replace(/^"/, "").replace(/"$/, "").replace(/px/, ""),
                        n = e.split("_"),
                        o = {};
                    return n && (o = {
                        layout: n[0],
                        size: Number(n[1])
                    }), o
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = n
    },
    260: function(e, t, i) {
        "use strict";
        (function(e) {
            function n(t) {
                return {
                    init: function(t, i) {
                        return e(t).lazyload(i)
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = n;
            var o = i(13);
            ! function(e) {
                e && e.__esModule
            }(o)
        }).call(t, i(0))
    },
    261: function(e, t, i) {
        "use strict";

        function n(e, t) {
            var i = {};
            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
            return i
        }

        function o(e) {
            return {
                init: function(e) {
                    var t = e.debounce,
                        i = void 0 === t ? 50 : t,
                        o = n(e, ["debounce"]);
                    return (0, s.default)(a({
                        debounce: i
                    }, o))
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        };
        t.default = o;
        var r = i(262),
            s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r)
    },
    262: function(e, t, i) {
        var n, o;
        ! function() {
            "use strict";

            function i(e) {
                var t = p(a, e || {});
                this.create(t), this.add()
            }
            var a = {
                    ellipsis: "…",
                    debounce: 0,
                    responsive: !0,
                    class: ".clamp",
                    lines: 2,
                    portrait: null,
                    break_word: !0
                },
                r = 0,
                s = !!window.requestAnimationFrame,
                l = function() {
                    return r += 1
                },
                d = function(e, t) {
                    e.setAttribute("data-ellipsis-id", t)
                },
                c = function(e) {
                    return e.getAttribute("data-ellipsis-id")
                },
                u = function(e, t) {
                    var i = l();
                    d(t, i), e[i] = e[i] || {}, e[i].element = t, e[i].innerHTML = t.innerHTML
                },
                f = function(e, t) {
                    return e ? e[c(t)] : null
                },
                h = function(e) {
                    return Object.keys(e).map(function(t, i) {
                        return e[t].element
                    })
                },
                p = function(e, t) {
                    var i = {};
                    for (var n in e) i[n] = e[n];
                    for (var o in t) i[o] = t[o];
                    return i
                };
            i.prototype = {
                conf: {},
                prop: {},
                lines: {},
                temp: null,
                listener: null,
                create: function(e) {
                    if (this.conf = e, this.lines = {
                            get current() {
                                return e.portrait && window.innerHeight > window.innerWidth ? e.portrait : e.lines
                            }
                        }, this.conf.responsive) {
                        this.temp = {};
                        var t, i = this.conf.debounce;
                        if (s && !i) {
                            this._isScheduled = !1;
                            var n = this;
                            t = function(e) {
                                n._isScheduled || (n._isScheduled = !0, window.requestAnimationFrame(function() {
                                    n._isScheduled = !1, n.add(h(n.temp))
                                }))
                            }
                        } else {
                            i = i || 16;
                            var o;
                            t = function(e) {
                                clearTimeout(o), o = setTimeout(function() {
                                    this.add(h(this.temp))
                                }.bind(this), i)
                            }
                        }
                        this.listener = t.bind(this), window.addEventListener("resize", this.listener, !1), window.removeEventListener("beforeunload", this.listener, !1)
                    }
                },
                destroy: function() {
                    this.listener && window.removeEventListener("resize", this.listener, !1)
                },
                createProp: function(e) {
                    this.prop = {
                        get height() {
                            var t = e.getBoundingClientRect();
                            return parseInt(t.bottom - t.top, 10)
                        },
                        get lineheight() {
                            var t = getComputedStyle(e).getPropertyValue("line-height");
                            return String("normal|initial|inherit").indexOf(t) > -1 && (t = parseInt(getComputedStyle(e).getPropertyValue("font-size"), 10) + 2), parseInt(t, 10)
                        }
                    }
                },
                add: function(e) {
                    if (!e && this.conf.class && (e = document.querySelectorAll(this.conf.class)), e)
                        if (e.length)
                            for (var t = 0; t < e.length; t++) this.addElement(e[t]);
                        else void 0 === e.length && this.addElement(e)
                },
                addElement: function(e) {
                    if (this.conf.responsive) {
                        var t = f(this.temp, e);
                        t ? e.innerHTML !== t.innerHTML && (e.innerHTML = t.innerHTML) : u(this.temp, e)
                    }
                    this.createProp(e), this.isNotCorrect() && (e.childNodes.length && e.childNodes.length > 1 ? this.handleChildren(e) : e.childNodes.length && 1 === e.childNodes.length && 3 === e.childNodes[0].nodeType && this.simpleText(e))
                },
                breakWord: function(e, t, i) {
                    var n = e.split(" ");
                    if (n.pop(), i && n.pop(), !t) return n[n.length - 1] && (n[n.length - 1] = n[n.length - 1].replace(/(,$)/g, "").replace(/(\.$)/g, "")), n.push(this.conf.ellipsis), n.join(" ");
                    if (n[n.length - 1]) return n[n.length - 1] = n[n.length - 1].replace(/(,$)/g, "").replace(/(\.$)/g, ""), n.push(this.conf.ellipsis), [n.join(" "), t];
                    if (!n[n.length - 1] && t) {
                        var o = " " + t.trim().replace(/(,$)/g, "").replace(/(\.$)/g, "") + " ";
                        return n.push(this.conf.ellipsis), [n.join(" "), o]
                    }
                },
                simpleText: function(e) {
                    for (var t = e.childNodes[0].nodeValue; this.prop.height > this.prop.lineheight * this.lines.current;) e.childNodes[0].nodeValue = t.slice(0, -1), t = e.childNodes[0].nodeValue;
                    this.conf.break_word ? (e.childNodes[0].nodeValue = t.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis, this.isNotCorrect() && (e.childNodes[0].nodeValue = " " + e.childNodes[0].nodeValue.slice(0, -(this.conf.ellipsis.length + 1)).trim().slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis)) : (e.childNodes[0].nodeValue = this.breakWord(e.childNodes[0].nodeValue), this.isNotCorrect() && (e.childNodes[0].nodeValue = this.breakWord(e.childNodes[0].nodeValue, null, !0)))
                },
                isNotCorrect: function() {
                    return this.prop.height > this.prop.lineheight * this.lines.current
                },
                processBreak: function(e, t, i) {
                    var n = this.breakWord(e.innerText || e.nodeValue, t.innerText || t.nodeValue, i);
                    e.innerText ? e.innerText = n[0] : e.nodeValue = n[0], t.innerText ? t.innerText = n[1] : t.nodeValue = n[1]
                },
                handleChildren: function(e) {
                    for (var t, i = e.childNodes, n = i.length - 1; n >= 0; n--) {
                        var o;
                        if (8 !== i[n].nodeType) {
                            if (3 === i[n].nodeType ? (o = i[n].nodeValue, i[n].nodeValue = "") : (o = getComputedStyle(i[n]).getPropertyValue("display"), i[n].style.display = "none"), this.prop.height <= this.prop.lineheight * this.lines.current) {
                                if (3 === i[n].nodeType) {
                                    for (i[n].nodeValue = o, t = i[n].nodeValue; this.prop.height > this.prop.lineheight * this.lines.current;) i[n].nodeValue = t.slice(0, -1), t = i[n].nodeValue;
                                    if (this.conf.break_word) {
                                        if (i[n].nodeValue = t.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis, this.isNotCorrect()) {
                                            if (i[n].nodeValue = " " + i[n].nodeValue.slice(0, -this.conf.ellipsis.length).trim().slice(0, -this.conf.ellipsis.length), !(i[n].nodeValue.length > 1)) continue;
                                            i[n].nodeValue = i[n].nodeValue.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis
                                        }
                                    } else {
                                        if (!i[n].innerText && !i[n].nodeValue) continue;
                                        if (this.processBreak(i[n], i[n - 1]), this.isNotCorrect() && (this.processBreak(i[n], i[n - 1], !0), this.isNotCorrect())) {
                                            e.removeChild(i[n]);
                                            continue
                                        }
                                    }
                                } else {
                                    for (i[n].style.display = o, t = i[n].innerText; this.prop.height > this.prop.lineheight * this.lines.current;) i[n].innerText = t.slice(0, -1), t = i[n].innerText;
                                    if (this.conf.break_word) {
                                        if (i[n].innerText = t.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis, this.isNotCorrect()) {
                                            if (i[n].innerText = " " + i[n].innerText.slice(0, -this.conf.ellipsis.length).trim().slice(0, -this.conf.ellipsis.length), !(i[n].innerText.length > 1)) continue;
                                            i[n].innerText = i[n].innerText.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis
                                        }
                                    } else {
                                        if (!i[n].innerText && !i[n].nodeValue) continue;
                                        if (this.processBreak(i[n], i[n - 1]), this.isNotCorrect() && (this.processBreak(i[n], i[n - 1], !0), this.isNotCorrect())) {
                                            e.removeChild(i[n]);
                                            continue
                                        }
                                    }
                                }
                                break
                            }
                            e.removeChild(i[n])
                        }
                    }
                }
            };
            var m = function(e) {
                return new i(e)
            };
            n = [], void 0 !== (o = function() {
                return m
            }.apply(t, n)) && (e.exports = o), self.Ellipsis = m
        }()
    },
    263: function(e, t, i) {
        "use strict";
        (function(e) {
            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function n(t) {
                var n = function() {
                    function t(e) {
                        i(this, t), e.id = void 0 !== e.id ? e.id : "", e.class = void 0 !== e.class ? " " + e.class : "", e.html = void 0 !== e.html ? e.html : "", this.options = e
                    }
                    return o(t, [{
                        key: "init",
                        value: function() {
                            this.element = this.make(this.options)
                        }
                    }, {
                        key: "make",
                        value: function(t) {
                            var i = this;
                            e("#" + this.options.id).remove();
                            var n = e("<div/>", {
                                    id: t.id,
                                    class: "aol-popup" + t.class,
                                    style: "display:none"
                                }),
                                o = e("<div/>", {
                                    class: "bg"
                                }),
                                a = e("<div/>", {
                                    class: "wrapper"
                                }),
                                r = e("<div/>", {
                                    class: "close navicon-close"
                                }),
                                s = e("<div/>", {
                                    class: "inner clearfix"
                                }),
                                l = e("<div/>", {
                                    class: "loading",
                                    style: "display:none"
                                });
                            return s.html(t.html), r.click(function() {
                                i.destroy()
                            }), a.append(r).append(l).append(s), n.append(o).append(a), e("body").append(n), n
                        }
                    }, {
                        key: "open",
                        value: function() {
                            e(this.element).find(".wrapper").css("top", e(document).scrollTop() + "px"), e(this.element).show()
                        }
                    }, {
                        key: "beforeDestroy",
                        value: function(e) {
                            this.beforeDestroyFn = e
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.beforeDestroyFn && this.beforeDestroyFn(), e.isEmptyObject(this.element) ? e(".aol-popup").remove() : e(this.element).remove()
                        }
                    }, {
                        key: "scrollToTop",
                        value: function() {
                            e("html, body").animate({
                                scrollTop: this.element.find(".wrapper").offset().top - 50
                            }, 500)
                        }
                    }, {
                        key: "getElement",
                        value: function() {
                            return this.element
                        }
                    }, {
                        key: "showLoading",
                        value: function() {
                            e(this.element).find(".loading").show()
                        }
                    }, {
                        key: "hideLoading",
                        value: function() {
                            e(this.element).find(".loading").hide()
                        }
                    }]), t
                }();
                return {
                    create: function(e) {
                        return new n(e)
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }();
            t.default = n
        }).call(t, i(0))
    },
    264: function(e, t, i) {
        "use strict";
        (function(e) {
            function i(t) {
                var i = void 0,
                    n = void 0,
                    o = void 0;
                return {
                    init: function() {
                        n = t.getService("utils"), o = t.getService("respond"), i = o.getLayout().layout, this.respondEvent = this.respondEvent.bind(this), this.applyBindings()
                    },
                    applyBindings: function() {
                        e(window).off("resize.respond"), e(window).on("resize.respond", n.debounce(this.respondEvent, 100, !1))
                    },
                    respondEvent: function() {
                        var e = o.getLayout();
                        e.layout !== i && (t.broadcast("respond", {
                            previousLayout: i,
                            layout: e.layout,
                            size: e.size
                        }), i = e.layout)
                    },
                    destroy: function() {
                        i = null, n = null, o = null
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i
        }).call(t, i(0))
    },
    265: function(e, t, n) {
        "use strict";
        (function(e) {
            function n(t) {
                function n() {
                    var e = d.getBoundingClientRect();
                    return {
                        height: e.bottom - e.top,
                        width: e.right - e.left
                    }
                }
                var o = void 0,
                    a = void 0,
                    r = void 0,
                    s = void 0,
                    l = void 0,
                    d = void 0;
                return {
                    init: function() {
                        o = t.getElement(), a = t.getService("lazyload"), r = t.getService("lineclamp"), s = t.getService("utils"), l = t.getGlobalConfig(), d = document.body, a.init("[data-lazyload]", {
                            threshold: 100
                        }), r.init({
                            class: ".js-clamp",
                            lines: 2
                        }), this.addEventListeners(), this.domShift(), l.req.isWelcomeScreen && this.addWelcomeScreenFeatures()
                    },
                    addEventListeners: function() {
                        e(window).on("scroll.debounced", s.debounce(this.scrollEvent, 150, !1))
                    },
                    domShift: function() {
                        var t = e("#m-fi_ad_midpoint_gemini");
                        if (t.length > 0) {
                            var i = e(".article-content");
                            if (i.length) {
                                var n = i.find("> p"),
                                    o = parseInt(n.length / 2 - 1);
                                n.eq(o).find("strong").length && o - 1 >= 0 && (o -= 1), n.eq(o).after(t)
                            }
                        }
                    },
                    addWelcomeScreenFeatures: function() {
                        var e = document.getElementsByTagName("a");
                        for (i = 0; i < e.length; i++) {
                            var t = e[i];
                            "_self" !== t.getAttribute("target") && t.getAttribute("href") && -1 == t.getAttribute("href").indexOf("aol://") && t.setAttribute("target", "_blank")
                        }
                    },
                    scrollEvent: function() {
                        t.broadcast("scrollDebounced", {
                            scroll: d.scrollTop
                        })
                    },
                    resizeEvent: function() {
                        t.broadcast("resizeDebounced", {
                            dimensions: n()
                        })
                    },
                    destroy: function() {
                        o = null
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = n
        }).call(t, n(0))
    },
    266: function(e, t, n) {
        "use strict";
        (function(e, n) {
            function o(t) {
                function o() {
                    var t = {};
                    return e.each(r.ads, function(e, i) {
                        var n = Number(e.split("_")[1]);
                        n <= d.size && (t = i, c = n)
                    }), t
                }

                function a(e) {
                    return [e.magicNumber, e.width, e.height, e.adSetType, r.placement, e.dynamicSizes ? e.dynamicSizes : null]
                }
                var r = void 0,
                    s = void 0,
                    l = void 0,
                    d = void 0,
                    c = void 0,
                    u = void 0,
                    f = void 0,
                    h = void 0,
                    p = void 0,
                    m = void 0,
                    v = void 0,
                    g = void 0,
                    w = ["fi_ad_cw_full", "fi_66642069311666", "fi_homepage_mobile_cw_1", "fi_1374016173"];
                return {
                    behaviors: ["respond"],
                    init: function() {
                        return r = t.getConfig(), l = t.getGlobalConfig(), s = t.getElement(), f = t.getService("utils"), h = t.getService("respond"), p = t.getGlobal("atwHeaderBid"), window.headerBiddingConfigured || (window.headerBiddingConfigured = !1), f.checkNested(r, "ads") ? (m = t.getGlobal("htmlAdWH"), v = t.getGlobal("adSetInView"), g = t.getGlobal("adsRotateMult"), d = h.getLayout(), m ? (this.addEventListeners(), this.domShift(), void this.setupAd()) : void this.destroy()) : (t.reportError(new Error("Config object missing ads property: " + r)), void this.destroy())
                    },
                    onmessage: {
                        respond: function(e) {
                            this.respondEvent(e)
                        },
                        adready: function(e) {
                            this.adReadyEvent(e)
                        }
                    },
                    addEventListeners: function() {
                        "undefined" == typeof MutationObserver ? this.adEventsLegacy() : this.adEvents()
                    },
                    adEvents: function() {
                        var i = o(),
                            n = {
                                childList: !0,
                                attributes: !0,
                                attributeFilter: ["style"],
                                subtree: !0
                            },
                            a = 0,
                            l = !0,
                            c = !1,
                            u = !(r.placement.indexOf("ad_dl") >= 0 && "filelesstext" === i.adSetType),
                            f = document.getElementById(r.placement);
                        f && new MutationObserver(function(n) {
                            if (a >= 20) return this.disconnect(), !1;
                            n.length > 20 && (n = n.slice(n.length - 20));
                            for (var h = 0; h < n.length; h++) {
                                var p = n[h],
                                    m = e(p.target);
                                u ? "childList" == p.type ? (p.addedNodes && p.addedNodes.length && "DIV" == p.addedNodes[0].tagName && p.addedNodes[0].className.indexOf("gemini") >= 0 && (m = e(p.target.previousElementSibling)), (l = m.height() < 50) && "0" != i.adSetInView && (l = !1)) : "attributes" == p.type && "style" == p.attributeName && ("none" == m.css("display") || "0px" == m.css("height")) && e(f).height() < 50 && (l = !0) : "childList" == p.type && p.addedNodes.length && "DIV" == p.addedNodes[0].tagName && (u = !0, c = !0)
                            }
                            if (i.isBlank != l && i.adSetInView && e(s).closest(".l-rightrail").length && e(window).trigger("rightrail:init"), "fi_ad_midpoint" == r.placement || "fi_ad_cw_full" == r.placement) {
                                var v = e(s).find('[id$="EAN"]');
                                v.length && v.css("width", "100%")
                            }
                            u && t.broadcast("adready", {
                                ad: o(),
                                layout: d,
                                placement: r.placement,
                                isBlank: l
                            }), i.isBlank = l, c && this.disconnect(), a++
                        }).observe(f, n)
                    },
                    adEventsLegacy: function() {
                        e(s).on("DOMSubtreeModified", function(i) {
                            if (i.target.innerHTML.length > 0)
                                if (e(s).off("DOMSubtreeModified"), "filelesstext" === o().adSetType) t.broadcast("adloading", {
                                    ad: o(),
                                    layout: d,
                                    placement: r.placement
                                }), f.poll(function() {
                                    return e(i.target).find(":first-child").is("div")
                                }, 2e4, 20).fail(function() {
                                    e(s).addClass("is-ready"), t.broadcast("adready", {
                                        ad: o(),
                                        layout: d,
                                        placement: r.placement,
                                        isBlank: !0
                                    })
                                }).done(function() {
                                    e(s).addClass("is-ready"), t.broadcast("adready", {
                                        ad: o(),
                                        layout: d,
                                        placement: r.placement,
                                        isBlank: !1
                                    })
                                });
                                else if (e(i.target).find(":first-child").is("iframe")) {
                                var n = e(i.target).find("iframe:first-child");
                                n.on("load", function(a) {
                                    f.poll(function() {
                                        return n.height() > 50 || e(i.target).height() > 50
                                    }, 4e3, 50, 20).fail(function() {
                                        t.broadcast("adready", {
                                            ad: o(),
                                            layout: d,
                                            placement: r.placement,
                                            isBlank: !0
                                        })
                                    }).done(function() {
                                        e(s).addClass("is-ready"), t.broadcast("adready", {
                                            ad: o(),
                                            layout: d,
                                            placement: r.placement,
                                            isBlank: !1
                                        })
                                    })
                                }), t.broadcast("adloading", {
                                    ad: o(),
                                    layout: d,
                                    placement: r.placement
                                })
                            } else e(s).addClass("is-ready"), t.broadcast("adloading", {
                                ad: o(),
                                layout: d,
                                placement: r.placement
                            }), t.broadcast("adready", {
                                ad: o(),
                                layout: d,
                                placement: r.placement,
                                isBlank: !0
                            })
                        })
                    },
                    setupAd: function() {
                        var i = o();
                        if (u !== c) {
                            if ("gemini" == i.adType && "fi_gemini_front_page" == r.placement) this.renderGeminiPlacement(i, r.placement);
                            else if (f.isEmptyObject(i) || !i.magicNumber) i = "cleared", adsClrAd(r.placement);
                            else {
                                var n = a(i),
                                    s = this,
                                    l = function() {
                                        v(i.adSetInView || 0), "undefined" != typeof adsDisableEAN && adsDisableEAN(i.adsDisableEAN || 0), s.adCall.apply(s, n), v(0), "undefined" != typeof adsDisableEAN && adsDisableEAN(0)
                                    };
                                i.eventTrigger ? e(window).one(i.eventTrigger, function() {
                                    l()
                                }) : l()
                            }
                            u && t.broadcast("adchanged", {
                                ad: i,
                                breakpoint: c,
                                layout: d,
                                placement: r.placement
                            }), u = c
                        }
                    },
                    respondEvent: function(e) {
                        d = e, this.setupAd()
                    },
                    adReadyEvent: function(t) {
                        var i = e("#" + t.placement).closest(".m-ad");
                        i.addClass("is-ready"), !0 === t.isBlank ? i.addClass("is-blank") : !1 === t.isBlank && i.removeClass("is-blank")
                    },
                    adCall: function(e, t, i, n, o) {
                        var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null; - 1 != w.indexOf(o) && "mobile" == l.req.device && adSetMobile("1"), this.setupHeaderBidding(), a && "" !== a ? htmlAdWHDyn(e, a, n, o) : ("en-us" == l.req.locale && g(r.placement), m(e, t, i, n, o))
                    },
                    setupHeaderBidding: function() {
                        if (!window.headerBiddingConfigured && this.isMobile()) {
                            window.headerBiddingConfigured = !0;
                            var e = [],
                                t = [],
                                i = document.querySelectorAll('[data-module="ads"], [data-type="ad"]'),
                                o = !0,
                                a = !1,
                                r = void 0;
                            try {
                                for (var s, l = i[Symbol.iterator](); !(o = (s = l.next()).done); o = !0) {
                                    var c = s.value,
                                        u = Tea.Application.getModuleConfig(c),
                                        f = u.ads.display_0;
                                    if (void 0 !== f) {
                                        var h = f.magicNumber,
                                            m = Number(f.height),
                                            v = Number(f.width);
                                        d.size < 480 && ("mm" == f.width.toLowerCase() || 728 == v && 90 == m || 300 == v && 250 == m || 320 == v && 50 == m) && -1 == t.indexOf(h) && (t.push(h), "mm" == f.width.toLowerCase() ? e.push({
                                            mn: h,
                                            width: "mm"
                                        }) : e.push({
                                            mn: h,
                                            sizes: [
                                                [v, m]
                                            ]
                                        }))
                                    }
                                }
                            } catch (e) {
                                a = !0, r = e
                            } finally {
                                try {
                                    !o && l.return && l.return()
                                } finally {
                                    if (a) throw r
                                }
                            }
                            var g = {
                                resizePortrait: "1",
                                mns: e
                            };
                            n.atwPreBid = g, p()
                        }
                    },
                    domShift: function() {
                        var t = void 0;
                        if ("fi_ad_midpoint" === r.placement || "fi_66642069311666" === r.placement) {
                            var i = e(".article-content");
                            if (i.length) {
                                var n = i.find("> p");
                                t = parseInt(n.length / 2 - 1), n.eq(t).find("strong").length && t - 1 >= 0 && (t -= 1), n.eq(t).after(s)
                            }
                        }
                        if ("fi_1374016173" === r.placement && "mobile" === l.req.device) {
                            var o = e(".article-content");
                            if (o.length && "en-gb" === l.req.locale) {
                                var a = o.find("> div > p");
                                t = parseInt(a.length / 2 - 1), a.eq(t).after(s)
                            } else if (o.length && "de-de" === l.req.locale) {
                                var d = o.find(".article-tags");
                                d.before(s)
                            }
                        }
                        if ("fi_homepage_mobile_cw_1" === r.placement && (t = e("#cw-full-500"), t.length ? t.after(s) : (t = e("#cw_right_300"), t.length && t.after(s))), "fi_homepage_mobile_cw_2" === r.placement && (t = e("#cw-full-760 .bon-grid-item:first-child"), t.length ? t.after(s) : (t = e("#cw-full-760"), t.length && t.after(s))), "fi_gemini" === r.placement && (t = e("#cw-full-250"), t.length ? t.after(s) : (t = e("#cw_right_250"), t.length && t.after(s))), "fi_42069311" === r.placement) {
                            e(".p-article-sidedoor").length && (t = e(".p-article__title"), t.length && t.before(s))
                        }
                        if ("fi_ad_cw_full" === r.placement) {
                            var c = e(".article-content").length,
                                u = e(".channel-sports").length,
                                f = (e(".page-horoscopes").length, e(".page-lifestyle").length),
                                h = e(".page-games-hub").length,
                                p = e(".news-video-hub-upstanders").length,
                                m = e(".page-entertainment.awards-season").length,
                                v = e(".page-trump-campaign-promises").length,
                                g = e(".module-games-editors-picks-carousel"),
                                w = (e(".module-featured-video:first"), e(".module-the-latest:first")),
                                y = e(".module-the-latest-dl-powered:first"),
                                b = e("#cw-full .module-aol-on-video:first"),
                                _ = e(".module-featured-trailers:first"),
                                k = e(".news-eoy.module-the-year-in-stories:first"),
                                C = e(".finance-taxes.module-the-latest:first"),
                                T = e('#cw-full-400[data-modules="promise_filter"]');
                            m ? (t = _, t.parent("#cw-full-2").length ? t.parent("#cw-full-2").after(s) : t.after(s)) : u && !c && b.length ? (t = b, t.parent("#cw-full-2").length ? t.parent("#cw-full-2").after(s) : t.after(s)) : f && w.length ? w.before(s) : h && g.length ? g.after(s) : C.length ? C.after(s) : k.length ? k.before(s) : p ? _.before(s) : v ? T.before(s) : y.length ? y.before(s) : w.length && w.before(s)
                        }
                        if ("fi_ad_cw_full_2" === r.placement) {
                            var S = e(".module-the-latest:first"),
                                N = e(".module-the-latest-dl-powered:first");
                            N.length ? N.after(s) : S.length && S.after(s)
                        }
                    },
                    destroy: function() {
                        m && window.adsClrAd(r.placement), r = null, s = null, d = null, c = null, u = null, f = null, h = null, m = null, v = null, g = null, e(s).off("DOMSubtreeModified")
                    },
                    isMobile: function() {
                        var e = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                            t = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                        return "screen-xs" == d || e > t && t <= 435 && e <= 773 || e < t && e <= 435 && t <= 773 || window.matchMedia && window.matchMedia("(min-device-width: 320px)").matches && window.matchMedia("(max-device-width: 435px)").matches
                    },
                    triggerGemini: function(t) {
                        var i = null;
                        try {
                            i = e.parseJSON(t.parent().find("script").text())
                        } catch (e) {
                            return !1
                        }
                        if (i && !t.parent().data("rendered") && i.ads && i.ads.display_0) {
                            var n = {
                                apiKey: i.ads.display_0.apiKey,
                                adUnitCode: i.ads.display_0.adUnitCode,
                                totalAds: 10
                            };
                            this.renderGeminiPlacement(n, t), t.parent().data("rendered", !0)
                        }
                    },
                    renderGeminiPlacement: function(t, i) {
                        var n = this,
                            o = [];
                        e.getJSON("https://ads.yap.yahoo.com/nosdk/wj/v1/getAds.do?cb=?", {
                            local: "en_us",
                            agentVersion: "205",
                            adTrackingEnabled: !0,
                            totalAds: t.totalAds,
                            publisherUrl: window.location.href,
                            apiKey: t.apiKey,
                            adUnitCode: t.adUnitCode
                        }, function(e) {
                            if (void 0 !== e.ads && e.ads.length > 0) {
                                var t = Math.floor(Math.random() * e.ads.length),
                                    a = e.ads[0];
                                void 0 !== e.ads[t] && (a = e.ads[t]);
                                var r = a.tag.imprTrackingUrl || [];
                                r = r.concat(a.beacon), o = o.concat(r);
                                var s = {
                                    type: "Advertisement",
                                    name: a.tag.headline || "",
                                    description: a.tag.summary || "",
                                    url: a.tag.clickUrl || "",
                                    clickBeacon: a.tag.clickTrackingUrl[0] || !1,
                                    thumbnail: [{
                                        url: a.tag.secHqImage || "",
                                        backgroundImage: !0
                                    }],
                                    related_links: {
                                        title: "Take a closer look",
                                        url: a.tag.clickUrl || ""
                                    },
                                    branding: !1,
                                    views: o || []
                                };
                                n.buildAdUnit(i, s)
                            }
                        })
                    },
                    buildAdUnit: function(t, n) {
                        var o = '<div class="m-ad__gemini">\n        <a href="' + n.url + '" ' + (n.clickBeacon ? ' data-gemini-beacon="' + n.clickBeacon + '"' : "") + "target=\"_blank\">\n          <div class='ad-image'>\n          " + (n.thumbnail[0].backgroundImage ? '\n            <div class="m-ad__dl-bg-img" style="background: url(' + n.thumbnail[0].url + ') no-repeat 50% 50%; background-size: cover; height: 140px; width:268px;"></div>\n          ' : '\n            <img alt="' + n.name + '" height="140" src="' + n.thumbnail[0].url + '" width="268">\n          ') + "\n          </div>\n          <div class='ad-text'>\n            <h3 class=\"ad-title\">" + n.name + "</h3>\n            <p>" + n.description + '</p>\n          </div>\n        </a>\n        <a style="position:absolute;bottom: 0px;right:0;z-index:4999;" href="http://adinfo.aol.com/" target="_blank">\n      <img src="https://o.aolcdn.com/ads/adchoices.png"\n      style="border:none; background-color: transparent; height:15px" border="0" alt="AdChoices"></a>\n      </div>';
                        document.getElementById(t).innerHTML = o, e("m-ad__gemini").on("click", "a", function(t) {
                            var i = e(this);
                            i.data("gemini-beacon") && e.ajax(i.data("gemini-beacon"))
                        });
                        var a = e('<div class="m-ad__gemini-views"></div>');
                        if (n.views)
                            for (i = 0; i < n.views.length; i++)
                                if (n.views[i]) {
                                    var r = n.views[i];
                                    a.append(e('<img class="m-ad__gemini-view" src="' + r + '" width="0" height="0" alt="">'))
                                } e("#" + t).append(a)
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = o
        }).call(t, n(0), n(34))
    },
    267: function(e, t, i) {
        "use strict";
        (function(e) {
            function i(t) {
                var i = void 0;
                return {
                    init: function() {
                        i = t.getConfig(), this.browserDoesntSupportReferrer() && this.applyLinkout()
                    },
                    applyLinkout: function() {
                        e("a").not(".m-article-slideshow a").filter(function() {
                            return this.hostname && this.hostname !== location.hostname && new RegExp(i.whitelist.join("|")).test(this.hostname)
                        }).attr("href", function(e, t) {
                            return "http://link.aol.com/url?q=" + encodeURIComponent(t)
                        })
                    },
                    destroy: function() {
                        i = null
                    },
                    browserDoesntSupportReferrer: function() {
                        return !!(navigator.userAgent.indexOf("MSIE ") >= 0 || navigator.userAgent.match(/Trident.*rv\:11\./))
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i
        }).call(t, i(0))
    },
    268: function(e, t, i) {
        "use strict";
        (function(e) {
            function n(t) {
                function i() {
                    null == m && o(), m = window.setInterval(o, 1e3 * v)
                }

                function n() {
                    m && window.clearInterval(m)
                }

                function o() {
                    var t = c.apiDomain,
                        i = t + "/api/v1/desktop-notifications";
                    e.getJSON(i).done(function(t) {
                        var i = l(t.notifications);
                        e.each(i, function() {
                            var t = this,
                                i = {
                                    subsec: p,
                                    slk: t.title,
                                    elm: "hdln",
                                    tar: "https://www.aol.com/",
                                    ll1: t.plid
                                };
                            "undefined" != typeof myRapidInstance && myRapidInstance.beaconLinkViews([{
                                sec: h,
                                itc: 0,
                                _links: [i]
                            }], 2, {});
                            var n = t.image_url || "/assets/images/favicon/desktop-notification-icon-60x60.png";
                            s(t.title, {
                                body: t.text,
                                icon: n,
                                data: {
                                    ll1: t.plid
                                },
                                requireInteraction: !0,
                                onClick: function(i) {
                                    myRapidInstance && myRapidInstance.beaconClick(h, "notification-click", 1, {
                                        ll1: t.plid,
                                        subsec: p,
                                        itc: 0
                                    }), e(".desktop-notification-wrapper").remove(), e("body").append("<div class='desktop-notification-wrapper' id='announcements'><a id='desktop-notify' class='desktop-notification-link' href='#' data-ylk='sec:" + h + ";subsec:" + p + ";itc:0;slk:announcements-click;ll1:" + t.plid + "'></a></div>");
                                    document.getElementById("desktop-notify");
                                    this.close();
                                    var n = t.click_url.indexOf("?") > -1 ? "&icid=aol-desktop-notification" : "?icid=aol-desktop-notification",
                                        o = t.click_url + n;
                                    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) window.location.href = o;
                                    else {
                                        window.open(o, "window_name")
                                    }
                                }
                            })
                        }), d(t.notifications)
                    })
                }

                function s(e, t) {
                    var i;
                    window.Notification ? (i = new window.Notification(e, t), i.onclick = t.onClick) : navigator.mozNotification ? (i = navigator.mozNotification.createNotification(e, t.body || "", t.icon), i.onclick = t.onClick, i.show()) : window.webkitNotifications ? (i = window.webkitNotifications.createNotification(t.icon || null, e, t.body || ""), i.onclick = t.onClick, i.show()) : w.external && w.external.msIsSiteMode() && (window.external.msSiteModeClearIconOverlay(), window.external.msSiteModeSetIconOverlay(t.icon, e), window.external.msSiteModeActivate()), i && (window.addEventListener("beforeunload", function(e) {
                        i.close()
                    }), setTimeout(function() {
                        i.close()
                    }, 3e4))
                }

                function l(e) {
                    var t = r.get(f) || "",
                        i = t.split(u).map(Number);
                    return e.filter(function(e) {
                        return -1 == i.indexOf(e.id)
                    })
                }

                function d(e) {
                    var t = e.map(function(e) {
                        return e.id
                    });
                    r.set(f, t.join(u), {
                        expires: 1
                    })
                }
                var c = t.getConfig(),
                    u = "|",
                    f = "notify",
                    h = "announcements",
                    p = "announcement-desktop-notification",
                    m = void 0,
                    v = 120;
                return {
                    init: function() {
                        c = t.getConfig(), c.isEnabled && (new a.default).isUserNotificationsAccessGranted() && i()
                    },
                    onmessage: {
                        notificationPermissionGranted: function() {
                            i()
                        },
                        notificationPermissionDenied: function() {
                            n()
                        },
                        notificationBrowserPermissionGranted: function() {
                            "undefined" != typeof myRapidInstance && myRapidInstance.beaconClick("header", "allow", "1", {
                                subsec: "notifications",
                                elm: "browser-permissions",
                                itc: 1
                            })
                        },
                        notificationBrowserPermissionBlocked: function() {
                            "undefined" != typeof myRapidInstance && myRapidInstance.beaconClick("header", "block", "1", {
                                subsec: "notifications",
                                elm: "browser-permissions",
                                itc: 1
                            })
                        }
                    },
                    destroy: function() {
                        c = null, e = null
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = n;
            var o = i(36),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(o),
                r = i(2)
        }).call(t, i(0))
    },
    269: function(e, t, i) {
        "use strict";

        function n(e) {
            function t() {
                i(), n(), o()
            }

            function i() {
                b("#activate-notifications").on("click", function() {
                    "undefined" != typeof myRapidInstance && myRapidInstance.beaconClick("header", "Notify Me", "1", {
                        subsec: "notifications",
                        elm: "button",
                        itc: 1
                    }), _.isUserBrowserNotificationAccessDenied() ? c() : (r(), _.requestPermission())
                })
            }

            function n() {
                b(".navigation-menu-user-notifications").on("mouseenter", function() {
                    u(), "undefined" != typeof myRapidInstance && myRapidInstance.beaconEvent("hover", {
                        itc: 2,
                        elm: "expand",
                        slk: "Open Drawer",
                        sec: "header",
                        subsec: "notifications"
                    })
                }), b(".navigation-menu-user-notifications").on("mouseout", function() {
                    f()
                })
            }

            function o() {
                function e() {
                    var e = "";
                    "true" === b(".notifications-switch").attr("data-toggled") ? (p(), e = "Notifications Off") : "false" === b(".notifications-switch").attr("data-toggled") && (v(), e = "Notifications On"), "undefined" != typeof myRapidInstance && myRapidInstance.beaconClick("header", e, "1", {
                        elm: "toggle",
                        subsec: "notifications",
                        itc: 1
                    })
                }
                b(".notifications-switch").on("click", function(t) {
                    t.preventDefault(), b("#desktop-notifications-toggle").is(":checked") ? b("#desktop-notifications-toggle").prop("checked", !1) : b("#desktop-notifications-toggle").prop("checked", !0), e()
                }), b("#desktop-notifications-toggle").on("change", function() {
                    e()
                })
            }

            function r() {
                b(".notifications-wrap").addClass("shown"), b(".notifications-allow").removeClass("hidden"), b(".notifications-wrap-overlay").addClass("shown"), b(".notifications-activate").addClass("hidden"), b(".notifications-toggle").addClass("hidden")
            }

            function s() {
                b(".notifications-toggle").removeClass("hidden"), b(".notifications-allow").addClass("hidden"), b(".notifications-activate").addClass("hidden"), b(".notifications-wrap").removeClass("shown"), b(".notifications-wrap-overlay").removeClass("shown"), l()
            }

            function l() {
                _.isUserNotificationsAccessGranted() ? m() : h()
            }

            function d() {
                b(".notifications-activate").removeClass("hidden"), b(".notifications-toggle").addClass("hidden"), b(".notifications-allow").addClass("hidden"), b(".notifications-wrap").removeClass("shown"), b(".notifications-wrap-overlay").removeClass("shown")
            }

            function c() {
                d(), e.broadcast("showBlockedNotificationPermissionModal")
            }

            function u() {
                b(".notifications-wrap").addClass("shown")
            }

            function f() {
                b(".notifications-wrap").removeClass("shown"), b(".notifications-wrap-overlay").removeClass("shown"), g()
            }

            function h() {
                b(".notifications-switch").attr("data-toggled", "false"), b(".notifications-switch .switch").removeClass("switch--checked"), b(".notifications-switch-text").text("Notifications Off"), b(".notifications-switch").attr("data-beacon", '{"p": {"lnid": "disable_notifications"}}')
            }

            function p() {
                h(), _.disableUserNotifications()
            }

            function m() {
                b(".notifications-switch").attr("data-toggled", "true"), b(".notifications-switch .switch").addClass("switch--checked"), b(".notifications-switch-text").text("Notifications On"), b(".notifications-switch").attr("data-beacon", '{"p": {"lnid": "enable_notifications"}}')
            }

            function v() {
                _.enableUserNotifications()
            }

            function g() {
                var e = document.querySelectorAll(".breaking-notification"),
                    t = [],
                    i = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var a, r = e[Symbol.iterator](); !(i = (a = r.next()).done); i = !0) {
                        var s = a.value;
                        t.push(s.dataset.attr)
                    }
                } catch (e) {
                    n = !0, o = e
                } finally {
                    try {
                        !i && r.return && r.return()
                    } finally {
                        if (n) throw o
                    }
                }
                window.localStorage.setItem("already_seen", JSON.stringify(t))
            }

            function w() {
                var e = document.querySelectorAll(".breaking-notification"),
                    t = window.localStorage.getItem("already_seen"),
                    i = JSON.parse(t);
                e.forEach(function(e) {
                    var t = e.dataset.attr;
                    i && i.includes(t) && e.classList.add("already_seen")
                })
            }
            var y = void 0,
                b = void 0,
                _ = (e.getGlobal("myRapidInstance"), new a.default);
            return {
                init: function() {
                    y = e.getConfig(), b = e.getGlobal("jQuery"), _.isUserBrowserNotificationAccessGranted() && (_.isUserNotificationsAccessGranted() ? v() : p(), s()), b(".notifications-wrap").removeClass("hidden"), t(), w()
                },
                onmessage: {
                    notificationPermissionGranted: function() {
                        s()
                    },
                    notificationBrowserPermissionBlocked: function() {
                        f()
                    }
                },
                destroy: function() {
                    y = null
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = n;
        var o = i(36),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o)
    },
    270: function(e, t, i) {
        "use strict";

        function n(e) {
            function t() {
                v.classList.add("m-notifications-banner--shown"), setTimeout(function() {
                    v.classList.add("m-notifications-banner--active"), b.classList.add("banner-active"), _.classList.add("banner-active"), k.classList.add("banner-active"), setTimeout(function() {
                        try {
                            bN.set("mnid", "m-desktop-notifications-banner", 1), bN.set("plid", 0, 1), bN.ping("notifications_hover")
                        } catch (e) {}
                    }, 1e3)
                }, 500)
            }

            function i() {
                !y.isUserBrowserNotificationAccessGranted() && o() && (l(), p(window.innerWidth))
            }

            function n() {
                return new Date(window.localStorage.getItem(T))
            }

            function o() {
                var e = new URLSearchParams(window.location.search).get("showDnBanner");
                return n() < Date.now() || null != e && e.length > 0
            }

            function r() {
                g.addEventListener("click", s), w.addEventListener("click", c)
            }

            function s() {
                "undefined" != typeof myRapidInstance && myRapidInstance.beaconClick("announcements", "Notify Me", "1", {
                    subsec: "announcement-desktop-notification",
                    elm: "button-banner",
                    itc: 1
                }), y.isUserBrowserNotificationAccessDenied() ? f() : (u(), y.requestPermission())
            }

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7,
                    t = new Date;
                t.setDate(t.getDate() + e), n() < t.getTime() && window.localStorage.setItem(T, t)
            }

            function d() {
                v.classList.remove("m-notifications-banner--active"), setTimeout(function() {
                    v.classList.remove("m-notifications-banner--shown")
                }, 500), b.classList.remove("banner-active"), _.classList.remove("banner-active"), k.classList.remove("banner-active")
            }

            function c() {
                l(30), v.classList.add("js-banner-closed"), d()
            }

            function u() {
                v.querySelector(".m-notifications-banner__notify-state").classList.add("hidden"), C.classList.add("shown"), v.querySelector(".m-notifications-banner__allow-state").classList.remove("hidden")
            }

            function f() {
                c(), e.broadcast("showBlockedNotificationPermissionModal")
            }

            function h() {
                return v.classList.contains("js-banner-closed")
            }

            function p(e) {
                e < 900 || h() ? d() : t()
            }
            var m = void 0,
                v = void 0,
                g = void 0,
                w = void 0,
                y = new a.default,
                b = void 0,
                _ = void 0,
                k = void 0,
                C = void 0,
                T = "aolDnBannerHideTime";
            return {
                init: function() {
                    m = e.getConfig(), v = e.getElement(), g = v.querySelector(".js-activate-notifications"), w = v.querySelector(".m-notifications-banner__close"), b = document.querySelector(".navigation"), _ = document.querySelector(".l-main-container"), k = document.querySelector(".notifications-wrap"), C = document.querySelector(".notifications-wrap-overlay"), r(), setTimeout(i(), 1500)
                },
                onmessage: {
                    respond: function(e) {
                        p(e.size)
                    },
                    notificationPermissionGranted: function() {
                        c()
                    },
                    notificationBrowserPermissionBlocked: function() {
                        c()
                    }
                },
                destroy: function() {
                    m = null
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = n;
        var o = i(36),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o)
    },
    271: function(e, t, i) {
        "use strict";

        function n(e) {
            function t() {
                o(".blocked-notifications-top-close, .blocked-notifications-overlay").on("click", function() {
                    o(".blocked-notifications").hasClass("hidden") || o(".blocked-notifications").addClass("hidden")
                })
            }

            function i() {
                o(".blocked-notifications").removeClass("hidden")
            }

            function n() {
                -1 !== navigator.userAgent.indexOf("OPR") && (o(".blocked-notifications-body-image").attr("src", "https://o.aolcdn.com/aoldotcom-releases/notifications/settings-opera.png"), o(".blocked-notifications-body-text").after('<p class="blocked-notifications-body-text">Go to Preferences > Websites, and change this setting.</p>'))
            }
            var o = void 0,
                a = void 0;
            return {
                init: function() {
                    a = e.getConfig(), o = e.getGlobal("jQuery"), t(), n()
                },
                onmessage: {
                    notificationBrowserPermissionBlocked: function() {
                        i()
                    },
                    showBlockedNotificationPermissionModal: function() {
                        i()
                    }
                },
                destroy: function() {
                    o = null, a = null
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = n
    },
    272: function(e, t, i) {
        "use strict";

        function n(e) {
            function t() {
                var t = "bn_ad_tst_" + Math.floor(1e4 * Math.random() + 1),
                    n = '<div id="' + t + '" class="afs_ads pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links" style="width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;">&nbsp</div>';
                (0, a.default)(i).prepend(n);
                var o = document.getElementById(t);
                o && 0 != o.innerHTML.length && 0 !== o.clientHeight && 0 !== o.clientWidth && 0 !== o.offsetWidth ? e.application.fire("adblock:detect", {
                    enabled: !1
                }) : e.application.fire("adblock:detect", {
                    enabled: !0
                }), (0, a.default)(i).empty()
            }
            var i = void 0;
            return {
                init: function() {
                    i = e.getElement(), t()
                },
                destroy: function() {
                    i = null
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = n;
        var o = i(0),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o)
    },
    273: function(e, t, i) {
        "use strict";
        (function(e) {
            function n(t) {
                function i() {
                    u = t.getGlobalConfig("user"), f = t.getGlobalConfig("auth"), h = u.legacyGuid && "" != u.legacyGuid ? u.legacyGuid : u.guid, e("#autoplay-checkbox").click(function() {
                        var t = e("#autoplay-checkbox")[0].checked,
                            i = {
                                disableVideoAutoplay: t
                            };
                        a(i), r(i), window.bN && bN.ping("preferences_option", [
                            ["mnid", "preferences", 1],
                            ["lnid", "disable_video_autoplay-" + t, 1]
                        ])
                    }), e("#autoplay-checkbox").length && e("#autoplay-checkbox")[0].checked && r({
                        disableVideoAutoplay: !0
                    })
                }

                function n() {
                    e.amp.user.api.init({}, function() {}), c = !0
                }

                function a(t, i) {
                    c || n();
                    try {
                        e.amp.user.api.getData({
                            schemaName: l,
                            authName: f.name
                        }, function(i) {
                            if (i && i.instance && null == i.error) e.extend(i.instance, t), e.amp.user.api.setData({
                                schemaName: l,
                                authName: f.name,
                                csrfToken: Site.csrfToken
                            }, i, function(e) {});
                            else {
                                var n = {
                                    instance: t
                                };
                                e.amp.user.api.setData({
                                    schemaName: l,
                                    authName: f.name,
                                    csrfToken: Site.csrfToken
                                }, n, function(e) {})
                            }
                        })
                    } catch (e) {
                        console.log("Error saving user preferences"), console.log(e)
                    }
                }

                function r(t) {
                    if (null !== t && !e.isEmptyObject(t)) {
                        var i = {};
                        o.get(d) && (i = JSON.parse(o.get(d))), e.extend(i, t), o.set(d, JSON.stringify(i), {
                            expires: 365,
                            path: "/",
                            domain: "aol.com"
                        })
                    }
                }
                var s = void 0,
                    l = "user-settings",
                    d = "user-settings",
                    c = !1,
                    u = null,
                    f = null,
                    h = "";
                return {
                    init: function() {
                        s = t.getElement(), i()
                    },
                    destroy: function() {
                        s = null
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = n;
            var o = i(2)
        }).call(t, i(0))
    },
    274: function(e, t, i) {
        "use strict";
        (function(e, i) {
            function n(t) {
                function n() {
                    return e.ajax({
                        cache: !0,
                        url: r.url,
                        dataType: r.type || "json",
                        data: r.data
                    })
                }
                var o = void 0,
                    a = void 0,
                    r = void 0,
                    s = void 0,
                    l = void 0;
                return {
                    init: function() {
                        if (o = t.getElement(), a = o.getAttribute("id"), r = t.getConfig(), l = t.getService("utils"), !r.url) return void t.reportWarning(a + ": No widget url configured");
                        s = !1, (s = this.viewCheck()) || this.applyEventListeners()
                    },
                    applyEventListeners: function() {
                        e(window).on("scroll." + a + " resize." + a, i.debounce(e.proxy(this.viewCheck, this), 200, !1))
                    },
                    inView: function() {
                        n().then(function(i) {
                            r.placement && e(r.placement).html(i), e(o).addClass("tea--active"), t.broadcast("widgetloaded", {
                                elem: o,
                                data: r.data
                            })
                        })
                    },
                    viewCheck: function() {
                        return i.isElementInViewport(o, !0, 200) && !s && (s = !s, this.inView(), e(window).off("scroll." + a + " resize." + a)), s
                    },
                    destroy: function() {
                        o = null, a = null, r = null, l = null, s = null
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = n
        }).call(t, i(0), i(3))
    },
    275: function(e, t, i) {
        "use strict";

        function n(e) {
            function t(e) {
                e.state && e.state.reload && window.location.reload()
            }
            var i = void 0,
                n = void 0,
                o = void 0,
                a = void 0,
                r = void 0;
            return {
                init: function() {
                    i = e.getElement(), n = e.getGlobalConfig("req").device, o = e.getGlobalConfig("req").channel, a = history.state, r = window.location.href, this.setState(), window.onpopstate = t
                },
                setState: function() {
                    "desktop" === n && "homepage" !== o && 1 === history.length && history.replaceState ? (history.replaceState({
                        reload: !0
                    }, "AOL", "/?icid=mbr_aolengnav00000001"), history.pushState(a || {
                        reload: !0
                    }, document.title, r)) : history.replaceState(a || {}, "", r)
                },
                destroy: function() {
                    i = null, n = null, a = null, url = null
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = n
    },
    276: function(e, t, i) {
        "use strict";
        (function(e) {
            function n(t) {
                function i() {
                    return e(".video-wrapper").length > 0 || e(".video-wrap").length > 0
                }

                function n() {
                    (i() || "create_send" === b) && e(window).on("scroll", p.debounce(e.proxy(d, this), 50)), g.click(function() {
                        u(), a.setUserSawPopupCookie(h.cookiedomain), a.updateNewsletterVisitsCookie(_, h.cookiedomain, -1)
                    }), v.click(function() {
                        s(m.val())
                    }), m.on("keypress", function(e, t) {
                        if (13 === e.keyCode) {
                            e.preventDefault();
                            s(m.val())
                        }
                    })
                }

                function r(e, t) {
                    e && (e.ok || e.status) ? (m.val(""), w.text("Thank you for subscribing!").removeClass("error").addClass("success"), a.addNewsletterToUserSubscriptionCookie(_, h.cookiedomain), a.updateNewsletterVisitsCookie(_, h.cookiedomain, -1), a.setUserSawPopupCookie(h.cookiedomain), "sailthru" === b && a.sendWelcomeEmail(h.sailthru.template, t)) : w.text("Oh no, something went wrong, please try again later!").removeClass("success").addClass("error")
                }

                function s(e) {
                    if (!a.isValidEmailAddress(e)) return l();
                    h.create_send ? a.subscribeToNewsletterCreateSend(e, function(t) {
                        r(t, e)
                    }) : a.subscribeToNewsletter(e, h.sailthru.list, function(t) {
                        r(t, e)
                    })
                }

                function l() {
                    w.text("Please enter a valid email address.").addClass("error").removeClass("success")
                }

                function d(t) {
                    if (("sailthru" !== t || h.sailthru && h.sailthru.list && h.sailthru.shortName && h.numberPageVisits) && ("create_send" != t || h.create_send.shortName && h.numberPageVisits)) {
                        if (!i() && a.shouldShowNewsletter(_, h.numberPageVisits)) return e(window).unload(function() {
                            a.setUserSawPopupCookie(h.cookiedomain)
                        }), c(), e(f).addClass("slideIn");
                        var n = window.innerHeight || document.documentElement.clientHeight,
                            o = e(".video-wrapper")[0],
                            r = e(".video-wrap")[0],
                            s = e(".module-choose-news-entertainment")[0],
                            l = 0;
                        i() && (l = o ? o.getBoundingClientRect().bottom : r.getBoundingClientRect().bottom);
                        var d = l + e(f).outerHeight() < n;
                        if (y) {
                            d = s.getBoundingClientRect().bottom + e(f).outerHeight() < n
                        }
                        if (!d) return u();
                        a.shouldShowNewsletter(_, h.numberPageVisits) && (e(window).unload(function() {
                            a.setUserSawPopupCookie(h.cookiedomain)
                        }), c(), e(f).addClass("slideIn"))
                    }
                }

                function c() {
                    try {
                        if ("undefined" != typeof bN) {
                            var t = e(f).data("beacon");
                            if (p.checkNested(t, "p", "mnid")) {
                                for (var i in t.p) bN.set(i, t.p[i], 1);
                                bN.ping("newsletter_toaster")
                            }
                        }
                    } catch (e) {}
                }

                function u() {
                    e(f).hasClass("slideIn") && e(f).addClass("slideOut").removeClass("slideIn")
                }
                var f = void 0,
                    h = void 0,
                    p = void 0,
                    m = void 0,
                    v = void 0,
                    g = void 0,
                    w = void 0,
                    y = void 0,
                    b = void 0,
                    _ = void 0;
                return {
                    init: function() {
                        if (f = t.getElement(), a = new o, h = t.getConfig() || {}, p = t.getService("utils"), y = p.isHomepageRedesignTest(), _ = null, 0 == e(f).length) {
                            if (h.sailthru || !h.sailthru.list || !h.sailthru.shortName || !h.sailthru.template || a.userIsSubscribedInCookie(h.sailthru.shortName)) return;
                            return void(h.create_send || !h.create_send.shortName || a.userIsSubscribedInCookie(h.create_send.shortName))
                        }
                        h.create_send && h.create_send.shortName ? (_ = h.create_send.shortName, b = "create_send") : h.sailthru.shortName && h.sailthru.shortName && (_ = h.sailthru.shortName, b = "sailthru"), m = e(f).find(".m-newsletter-toaster__col3__input"), v = e(f).find(".m-newsletter-toaster__col3__btn"), g = e(f).find(".m-newsletter-toaster__col3__close"), w = e(f).find(".m-newsletter-toaster__col3__copy"), a.isEligibleForPopup(_, h.numberPageVisits) && (h.create_send && h.cookiedomain ? a.updateNewsletterVisitsCookie(_, h.cookiedomain) : a.updateNewsletterVisitsCookie(_, h.cookiedomain, 3)), y || "create_send" === b || d(b), n()
                    },
                    destroy: function() {
                        f = null, h = null, p = null
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = n;
            var o = i(12),
                a = void 0
        }).call(t, i(0))
    },
    277: function(e, t, i) {
        "use strict";
        (function(e) {
            function n(t) {
                var i = void 0,
                    n = void 0,
                    o = void 0,
                    a = void 0,
                    r = void 0,
                    s = void 0,
                    l = void 0,
                    d = void 0;
                return {
                    init: function() {
                        i = t.getElement(), n = e(".m-quicknav"), o = e(".m-quicknav__trigger"), a = e(".m-quicknav__container"), r = e(".m-quicknav__container a.m-quicknav__link"), s = e("#mail_prev_pl"), l = e(".l-rightrail"), this.applyBindings(), d = !1
                    },
                    showSubNav: function() {
                        d || (this.loadImages(), d = !0), "undefined" != typeof myRapidInstance && myRapidInstance.beaconEvent("hover", {
                            itc: 2,
                            elm: "expand",
                            slk: "Open Drawer",
                            sec: "header",
                            subsec: "navpanel"
                        }), l.addClass("pushdown__apps"), a.removeClass("is-hidden"), s.slideDown()
                    },
                    getImagesLoaded: function() {
                        return d
                    },
                    getContainer: function() {
                        return a
                    },
                    hideSubNav: function() {
                        l.removeClass("pushdown__apps"), a.addClass("is-hidden"), s.slideUp()
                    },
                    loadImages: function() {
                        n.find("[data-src]").each(function() {
                            e(this).attr({
                                src: e(this).attr("data-src")
                            })
                        })
                    },
                    moduleOffset: function() {
                        var t = 450,
                            i = l.length ? l.offset().top : 0,
                            n = i - e(window).scrollTop();
                        return t = n < 0 ? 0 : t - (n - 20)
                    },
                    applyBindings: function() {
                        var t = this;
                        n.hoverIntent({
                            timeout: 500,
                            over: function() {
                                t.showSubNav()
                            },
                            out: function() {
                                t.hideSubNav()
                            }
                        }), n.keydown(function(e) {
                            40 == e.which || 13 == e.which || 32 == e.which ? (this.showSubNav(), a.find(".m-quicknav__list a.m-quicknav__link")[0].focus()) : 38 == e.which && this.hideSubNav()
                        }), r.keydown(function(t) {
                            var i = e.Event("keydown");
                            return i.which = 9, 40 == t.which ? e(this).parent().next().find("a.m-quicknav__link").focus() : 38 == t.which ? e(this).parent().prev().find("a.m-quicknav__link").focus() : 27 == t.which ? (this.hideSubNav(), o.focus()) : 9 == t.which && (this.hideSubNav(), 0 == t.shiftKey ? (i.shiftKey = !1, o.trigger(i)) : (i.shiftKey = !0, o.trigger(i))), t.preventDefault(), t.stopPropagation(), !1
                        })
                    },
                    destroy: function() {
                        i = null, n = null, d = !1
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = n, i(65)
        }).call(t, i(0))
    },
    278: function(e, t, i) {
        "use strict";
        (function(e) {
            function n(t) {
                var i = void 0,
                    n = void 0,
                    o = void 0,
                    r = void 0,
                    s = void 0,
                    l = void 0,
                    d = void 0,
                    c = void 0,
                    u = void 0,
                    f = void 0;
                return {
                    init: function() {
                        i = t.getElement(), u = t.application.getService("utils"), n = e(".m-mailpreview__trigger"), o = e(".m-mailpreview__container"), r = e(".m-mailpreview__container a"), s = e(".l-rightrail");
                        var a = t.application.getGlobalConfig("urls"),
                            h = t.application.getGlobalConfig("site");
                        a && (d = a.api_mail + "newMailList", c = a.api_mail_jas), h && (l = h.devId), (f = t.getGlobalConfig("user")) && f.loggedIn && (this.applyBindings(), this.addLoader())
                    },
                    addLoader: function() {
                        e("<img/>", {
                            src: "https://s.aolcdn.com/aoldotcom-releases/site/loading-1.svg",
                            alt: "mail preview"
                        }).appendTo(o)
                    },
                    applyBindings: function() {
                        var t = this,
                            a = !1;
                        e(i).hoverIntent({
                            timeout: 500,
                            over: function() {
                                t.showSubNav()
                            },
                            out: function() {
                                !1 === a && t.hideSubNav()
                            }
                        }), o.hoverIntent({
                            timeout: 500,
                            over: function() {},
                            out: function() {
                                t.hideSubNav()
                            }
                        }).mouseenter(function() {
                            a = !0
                        }).mouseleave(function() {
                            a = !1
                        }), e(i).keydown(function(e) {
                            40 == e.which || 32 == e.which ? (this.showSubNav(authObj), o.find(".m-mailpreview__list a.m-mailpreview__list-item")[0].focus()) : 38 == e.which && this.hideSubNav()
                        }), o.on("keydown", "a", function(i) {
                            var o = e.Event("keydown"),
                                a = i.currentTarget;
                            o.which = 9, 40 == i.which ? e(a).parent().next().find("a.m-mailpreview__list-item").focus() : 38 == i.which ? e(a).parent().prev().find("a.m-mailpreview__list-item").focus() : 27 == i.which ? (t.hideSubNav(), n.focus()) : 9 == i.which && (t.hideSubNav(), 0 == i.shiftKey ? (o.shiftKey = !1, n.trigger(o)) : (o.shiftKey = !0, n.trigger(o))), i.stopPropagation()
                        })
                    },
                    showSubNav: function(e) {
                        o.hasClass("m-mailpreview--loaded") || this._fetchMail(e), s.addClass("pushdown__mail"), o.removeClass("is-hidden")
                    },
                    hideSubNav: function() {
                        s.removeClass("pushdown__mail"), o.addClass("is-hidden")
                    },
                    moduleOffset: function() {
                        var t = 450,
                            i = s.length ? s.offset().top : 0,
                            n = i - e(window).scrollTop();
                        return t = n < 0 ? 0 : t - (n - 20)
                    },
                    buildPreview: function(t) {
                        var i = e("<ul />", {
                                class: "m-mailpreview__list"
                            }),
                            n = "";
                        e.each(t, function(e, t) {
                            if (4 === e) return !1;
                            n = n + '<li class="m-mailpreview__list-item-wrapper"><a class="m-mailpreview__list-item" href="' + t.messageLink + '"><div class="m-mailpreview__item-header"><span class="m-mailpreview__item-sender">' + u.htmlEncode(t.sender) + '</span><abbr class="m-mailpreview__item-timestamp" title="' + t.sentOn + '"></abbr></div><h4 class="m-mailpreview__item-title">' + u.htmlEncode(t.subject) + '</h4><p class="m-mailpreview__item-digest">' + u.htmlEncode(t.digest) + "</p></a></li>"
                        });
                        i.append(n), o.html(i), o.append('<div class="m-mailpreview__footer"><a class="m-mailpreview__footer-viewall" href="http://mail.aol.com/?icid=aol.com-nav">View All Mail</a><a class="m-mailpreview__footer-compose" href="http://mail.aol.com/compose-message.aspx">Compose</a></div>'), e(".m-mailpreview__item-timestamp").timeago()
                    },
                    _fetchMail: function(i) {
                        var n = this;
                        if (f.source && "OATH" == f.source) {
                            var r = a.default.getYmreqid(f);
                            "" != r && (r = "&ymreqid=" + r);
                            var s = c + "?transport=xmlhttp" + r + "&a=GetNewMailList&scope=portal";
                            e.ajax({
                                url: s,
                                type: "POST",
                                data: {
                                    requests: '[{"action":"GetNewMailList","scope":"portal","digest":"true"}]'
                                },
                                xhrFields: {
                                    withCredentials: !0
                                },
                                headers: {
                                    Authorization: "Bearer " + f.token
                                },
                                dataType: "json"
                            }).then(function(e) {
                                e && e.length && e[0].isSuccess && e[0].messages.length && (n.buildPreview(e[0].messages), o.addClass("m-mailpreview--loaded"), t.application.broadcast("mailpreview:success", {
                                    messages: e[0].messages
                                }))
                            })
                        } else f.token ? (t.application.reportInfo("Tea. Mail Preview: Fetching mail preview"), e.ajax({
                            url: d,
                            data: {
                                f: "json",
                                a: f.token,
                                devId: l,
                                digest: "text/plain"
                            },
                            dataType: "jsonp",
                            jsonp: "c"
                        }).then(function(e, i, a) {
                            if (200 === e.response.statusCode && u.checkNested(e, "response", "data", "mailList", "messageList")) {
                                var r = e.response.data.mailList.messageList[0].messages;
                                n.buildPreview(r), o.addClass("m-mailpreview--loaded"), t.application.broadcast("mailpreview:success", {
                                    messages: r
                                })
                            } else t.application.broadcast("mailpreview:failure", {
                                error: "Error fetching mail preview"
                            })
                        }, function(e, i, n) {
                            t.application.reportError(e, i, n), t.application.broadcast("mailpreview:failure", {
                                error: n,
                                status: i
                            })
                        })) : t.application.broadcast("mailpreview:failure", {
                            error: "Missing auth token"
                        })
                    },
                    getContainer: function() {
                        return o
                    },
                    onmessage: {
                        "auth:login": function(e) {
                            this.applyBindings(e), this.addLoader()
                        },
                        "auth:logout": function() {
                            o.empty()
                        }
                    },
                    destroy: function() {
                        i = null, o = null, u = null
                    }
                }
            }
            /*!
             * mail preview
             * @author: Andy Kahn [andy.kahn@teamaol.com]
             * @description: Hover on mail button will trigger a box of authenticated users mail.
             */
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = n, i(65), i(279);
            var o = i(58),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(o)
        }).call(t, i(0))
    },
    279: function(e, t, i) {
        var n, o, a;
        /**
         * Timeago is a jQuery plugin that makes it easy to support automatically
         * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
         *
         * @name timeago
         * @version 1.6.1
         * @requires jQuery v1.2.3+
         * @author Ryan McGeary
         * @license MIT License - http://www.opensource.org/licenses/mit-license.php
         *
         * For usage and examples, visit:
         * http://timeago.yarp.com/
         *
         * Copyright (c) 2008-2017, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
         */
        ! function(r) {
            o = [i(0)], n = r, void 0 !== (a = "function" == typeof n ? n.apply(t, o) : n) && (e.exports = a)
        }(function(e) {
            function t() {
                var t = a.settings;
                if (t.autoDispose && !e.contains(document.documentElement, this)) return e(this).timeago("dispose"), this;
                var r = i(this);
                return isNaN(r.datetime) || (0 === t.cutoff || Math.abs(o(r.datetime)) < t.cutoff ? e(this).text(n(r.datetime)) : e(this).attr("title").length > 0 && e(this).text(e(this).attr("title"))), this
            }

            function i(t) {
                if (t = e(t), !t.data("timeago")) {
                    t.data("timeago", {
                        datetime: a.datetime(t)
                    });
                    var i = e.trim(t.text());
                    a.settings.localeTitle ? t.attr("title", t.data("timeago").datetime.toLocaleString()) : !(i.length > 0) || a.isTime(t) && t.attr("title") || t.attr("title", i)
                }
                return t.data("timeago")
            }

            function n(e) {
                return a.inWords(o(e))
            }

            function o(e) {
                return (new Date).getTime() - e.getTime()
            }
            e.timeago = function(t) {
                return n(t instanceof Date ? t : "string" == typeof t ? e.timeago.parse(t) : "number" == typeof t ? new Date(t) : e.timeago.datetime(t))
            };
            var a = e.timeago;
            e.extend(e.timeago, {
                settings: {
                    refreshMillis: 6e4,
                    allowPast: !0,
                    allowFuture: !1,
                    localeTitle: !1,
                    cutoff: 0,
                    autoDispose: !0,
                    strings: {
                        prefixAgo: null,
                        prefixFromNow: null,
                        suffixAgo: "ago",
                        suffixFromNow: "from now",
                        inPast: "any moment now",
                        seconds: "less than a minute",
                        minute: "about a minute",
                        minutes: "%d minutes",
                        hour: "about an hour",
                        hours: "about %d hours",
                        day: "a day",
                        days: "%d days",
                        month: "about a month",
                        months: "%d months",
                        year: "about a year",
                        years: "%d years",
                        wordSeparator: " ",
                        numbers: []
                    }
                },
                inWords: function(t) {
                    function i(i, o) {
                        var a = e.isFunction(i) ? i(o, t) : i,
                            r = n.numbers && n.numbers[o] || o;
                        return a.replace(/%d/i, r)
                    }
                    if (!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
                    var n = this.settings.strings,
                        o = n.prefixAgo,
                        a = n.suffixAgo;
                    if (this.settings.allowFuture && t < 0 && (o = n.prefixFromNow, a = n.suffixFromNow), !this.settings.allowPast && t >= 0) return this.settings.strings.inPast;
                    var r = Math.abs(t) / 1e3,
                        s = r / 60,
                        l = s / 60,
                        d = l / 24,
                        c = d / 365,
                        u = r < 45 && i(n.seconds, Math.round(r)) || r < 90 && i(n.minute, 1) || s < 45 && i(n.minutes, Math.round(s)) || s < 90 && i(n.hour, 1) || l < 24 && i(n.hours, Math.round(l)) || l < 42 && i(n.day, 1) || d < 30 && i(n.days, Math.round(d)) || d < 45 && i(n.month, 1) || d < 365 && i(n.months, Math.round(d / 30)) || c < 1.5 && i(n.year, 1) || i(n.years, Math.round(c)),
                        f = n.wordSeparator || "";
                    return void 0 === n.wordSeparator && (f = " "), e.trim([o, u, a].join(f))
                },
                parse: function(t) {
                    var i = e.trim(t);
                    return i = i.replace(/\.\d+/, ""), i = i.replace(/-/, "/").replace(/-/, "/"), i = i.replace(/T/, " ").replace(/Z/, " UTC"), i = i.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), i = i.replace(/([\+\-]\d\d)$/, " $100"), new Date(i)
                },
                datetime: function(t) {
                    var i = a.isTime(t) ? e(t).attr("datetime") : e(t).attr("title");
                    return a.parse(i)
                },
                isTime: function(t) {
                    return "time" === e(t).get(0).tagName.toLowerCase()
                }
            });
            var r = {
                init: function() {
                    r.dispose.call(this);
                    var i = e.proxy(t, this);
                    i();
                    var n = a.settings;
                    n.refreshMillis > 0 && (this._timeagoInterval = setInterval(i, n.refreshMillis))
                },
                update: function(i) {
                    var n = i instanceof Date ? i : a.parse(i);
                    e(this).data("timeago", {
                        datetime: n
                    }), a.settings.localeTitle && e(this).attr("title", n.toLocaleString()), t.apply(this)
                },
                updateFromDOM: function() {
                    e(this).data("timeago", {
                        datetime: a.parse(a.isTime(this) ? e(this).attr("datetime") : e(this).attr("title"))
                    }), t.apply(this)
                },
                dispose: function() {
                    this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this._timeagoInterval = null)
                }
            };
            e.fn.timeago = function(e, t) {
                var i = e ? r[e] : r.init;
                if (!i) throw new Error("Unknown function name '" + e + "' for timeago");
                return this.each(function() {
                    i.call(this, t)
                }), this
            }, document.createElement("abbr"), document.createElement("time")
        })
    },
    280: function(e, t, i) {
        "use strict";
        (function(e) {
            function n(t) {
                var i = void 0,
                    n = void 0;
                return {
                    init: function() {
                        n = t.getElement(), this.addEventListeners()
                    },
                    onmessage: {},
                    addEventListeners: function() {
                        e(n).click(function() {
                            e(this).hide(), o.set("user-consent", 1, {
                                expires: 365
                            })
                        })
                    },
                    destroy: function() {
                        i = null, n = null
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = n;
            var o = i(2)
        }).call(t, i(0))
    },
    281: function(e, t, i) {
        "use strict";
        (function(e) {
            function i(t) {
                var i = void 0,
                    n = void 0,
                    o = void 0,
                    a = void 0,
                    r = void 0,
                    s = void 0,
                    l = void 0,
                    d = void 0;
                return {
                    init: function() {
                        var l = this;
                        i = t.getElement(), n = i.getAttribute("id"), o = i.querySelector(".m-desktop-favs-import__button"), a = i.querySelector(".m-desktop-favs-import__loading-bar"), r = i.querySelector(".m-desktop-favs-import__message"), s = t.getConfig(), d = t.getService("utils"), this.loadMigrationStatus.bind(this), this.loadMigrationStatus().then(function(t) {
                            0 !== t.status && 3 !== t.status || (e(i).show(), l.applyEventListeners())
                        }, function(t, n, a) {
                            404 == t.status ? (e(i).show(), l.applyEventListeners()) : 401 == t.status && (e(o).text("Sign in to import your AOL Desktop Favorites"), e(o).addClass("unauth"), e(i).show(), l.applyEventListeners())
                        })
                    },
                    loadMigrationStatus: function() {
                        return e.ajax({
                            cache: !0,
                            url: Site.Urls.favorites_comet_api + "/api/v1/favorites/migrationstatus?app_id=web",
                            dataType: "json",
                            xhrFields: {
                                withCredentials: !0
                            },
                            beforeSend: function(e) {
                                var t = Site.userToken;
                                e.setRequestHeader("Authorization", t)
                            }
                        })
                    },
                    applyEventListeners: function() {
                        var t = this;
                        e(o).on("click", function(i) {
                            e(o).hasClass("unauth") ? t.redirectToLogin() : (e(o).attr("disabled", "disabled"), e(o).hide(), e(a).show(), e.ajax({
                                url: Site.Urls.favorites_comet_api + "/api/v1/favorites?app_id=button&referer=" + window.location.href,
                                dataType: "json",
                                xhrFields: {
                                    withCredentials: !0
                                },
                                beforeSend: function(e) {
                                    var t = Site.userToken;
                                    e.setRequestHeader("Authorization", t)
                                }
                            }).then(function(e, i, n) {
                                t.showMessage("Your AOL desktop favorites have been migrated! Redirecting..."), setTimeout(function() {
                                    window.location = "https://www.aol.com/favorites/"
                                }, 1e3)
                            }, function(e, i, n) {
                                t.showMessage("Your AOL desktop favorites migration failed!")
                            }))
                        })
                    },
                    redirectToLogin: function() {
                        window.location = s.sns_link
                    },
                    showMessage: function(t) {
                        e(r).text(t), e(a).hide(), e(r).show()
                    },
                    destroy: function() {
                        i = null, n = null, s = null, o = null, d = null, l = null
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i
        }).call(t, i(0))
    },
    282: function(e, t, i) {
        "use strict";
        (function(e) {
            function i(t) {
                var i = void 0,
                    n = 2e4;
                return {
                    init: function() {
                        i = t.getElement(), this.addToRapid()
                    },
                    addToRapid: function() {
                        var t = this,
                            i = [];
                        e('.bon-grid-item[data-rapid="true"], .caas_module [data-rapid="true"]').each(function(o, a) {
                            var r = e(a).attr("id");
                            null == r && (r = "aol" + n++, e(a).attr("id", r)), i.push(r), t.bindCobrand(a)
                        }), "undefined" != typeof myRapidInstance && myRapidInstance.addModulesWithViewability(i, !1)
                    },
                    onmessage: {},
                    destroy: function() {
                        i = null
                    },
                    bindCobrand: function(t) {
                        if (null != rapidConfig) {
                            var i = e(t).attr("data-ylk");
                            void 0 !== i && !1 !== i && e(t).attr("data-ylk", "ll2:" + rapidConfig.keys.pl2 + ";" + i), e(t).find("a[data-ylk]").each(function(t, i) {
                                var n = e(i).attr("data-ylk");
                                e(i).attr("data-ylk", "ll2:" + rapidConfig.keys.pl2 + ";" + n)
                            })
                        }
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i
        }).call(t, i(0))
    },
    283: function(e, t, i) {
        "use strict";
        (function(e) {
            function i(t) {
                var i = void 0;
                return {
                    init: function() {
                        i = t.getElement(), this.rapidSearchTracking()
                    },
                    rapidSearchTracking: function() {
                        function t(e, t) {
                            var i = "/aol/search?" + t,
                                n = {
                                    itc: "0",
                                    elm: "search",
                                    elmt: e,
                                    tar: "https://search.aol.com/",
                                    tar_uri: i
                                };
                            "undefined" != typeof myRapidInstance && myRapidInstance.beaconClick("srch-ft", "searchweb", "1", n)
                        }
                        var i = void 0;
                        e("#aol-footer-search-button").on("click", function() {
                            i = "button", e("#aol-footer-search").submit()
                        }), e("#aol-footer-query").on("keypress", function(e) {
                            13 === e.which && (i = "enter")
                        }), e("#aol-footer-search").on("submit", function() {
                            var n = e("#aol-footer-search").serialize();
                            "" !== e("#aol-footer-query").val() && (void 0 === i && (i = "suggestion"), t(i, n))
                        })
                    },
                    destroy: function() {
                        i = null
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i
        }).call(t, i(0))
    },
    284: function(e, t, i) {
        "use strict";
        (function(e, i) {
            function n(t) {
                var n = void 0,
                    o = void 0,
                    a = void 0,
                    r = void 0,
                    s = void 0,
                    l = void 0,
                    d = void 0,
                    c = void 0,
                    u = {
                        aol: "347c6d2b-6918-4171-a722-13db16112258",
                        weather: "986d77d9-6454-4705-96ef-cbc4b5ecd4d7",
                        news: "12dc9815-106c-4148-81fe-5359f37dc6ac",
                        sport: "94e37c2d-8575-4558-a98d-1d6a2e234d43",
                        aolMobile: "5922c8da-651e-4b0b-bb0a-f434fc2964be",
                        weatherMobile: "7bf0cc3f-ec93-436b-99fc-b4afc8079a7e",
                        newsMobile: "df26fed1-c7ce-4dab-b7cf-86aabd2d8f4a",
                        sportMobile: "9f1a7702-2530-4f97-bd8e-b3f8c49309a5"
                    };
                return {
                    init: function() {
                        var e = this;
                        n = t.getElement(), o = t.getConfig(), a = t.getGlobalConfig(), "en-gb" == a.req.locale && (e.setAdCode(), e.prepareAd(), e.seeAdInView())
                    },
                    setAdCode: function() {
                        e(".embed-readmore").hasClass("is-mobile") ? e(".embed-readmore").hasClass("aol") ? c = u.aolMobile : e(".embed-readmore").hasClass("weather") ? c = u.weatherMobile : e(".embed-readmore").hasClass("news") ? c = u.newsMobile : e(".embed-readmore").hasClass("sport") ? c = u.sportMobile : e(".embed-readmore").hasClass("living") ? c = u.aolMobile : e(".embed-readmore").hasClass("entertainment") ? c = u.aolMobile : e(".embed-readmore").hasClass("cars") && (c = u.aolMobile) : e(".embed-readmore").hasClass("aol") ? c = u.aol : e(".embed-readmore").hasClass("weather") ? c = u.weather : e(".embed-readmore").hasClass("news") ? c = u.news : e(".embed-readmore").hasClass("sport") ? c = u.sport : e(".embed-readmore").hasClass("living") ? c = u.aol : e(".embed-readmore").hasClass("entertainment") ? c = u.aol : e(".embed-readmore").hasClass("cars") && (c = u.aol)
                    },
                    seeAdInView: function() {
                        var t = this;
                        d = document.getElementById("fi_gemini_article_page"), 0 === e(d).parent().find(".yap-loaded").length && i.isElementInViewport(d, !0, 100) && t.loadAd(), e(window).on("scroll", i.debounce(function() {
                            0 === e(d).parent().find(".yap-loaded").length && i.isElementInViewport(d, !0, 100) && t.loadAd()
                        }, 100))
                    },
                    prepareAd: function() {
                        r = top == self ? window : window.top, s = r.document, r.adUnitCode = r.adUnitCode || [], r.adUnitCode.push(c), r.apiKey = e(".embed-readmore").hasClass("is-mobile") ? "WWPZYVTJMGXQ2TT6YXP8" : "DMW79Z7PB52BJCTB2VPF", l = s.createElement("script"), l.async = !0, l.src = "https://s.yimg.com/av/yap/ga/yap.js"
                    },
                    loadAd: function() {
                        s.body.appendChild(l)
                    },
                    destroy: function() {
                        n = null
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = n
        }).call(t, i(0), i(3))
    },
    285: function(e, t, i) {
        "use strict";
        (function(e) {
            function i(t) {
                var i = void 0,
                    n = void 0;
                return {
                    init: function() {
                        if (i = t.getElement(), "undefined" != typeof myRapidInstance && myRapidInstance.addModulesWithViewability(["worldcup-scores-ticker"], !1), e(i).length) {
                            if (e(i).find(".scores-wrap").hasClass("slick-initialized") ? (e(i).find(".scores-wrap").slick("unslick"), this.carouselStart()) : this.carouselStart(), n = e(i).data("highlightteam")) {
                                var o = e('div[data-teamid="' + n + '"]');
                                o.length && o.parent().addClass("highlight")
                            }
                            var a = this;
                            e(i).find(".score-wrap").each(function() {
                                if (e(this).data("starttime")) {
                                    var t = new Date(e(this).data("starttime")),
                                        i = new Date;
                                    "status.type.pregame" == e(this).data("state") && a.isSameDay(i, t) && e(this).find(".game-state span").text(a.formatAMPM(t))
                                }
                            })
                        }
                    },
                    formatAMPM: function(e) {
                        var t = e.getHours(),
                            i = e.getMinutes(),
                            n = t >= 12 ? "pm" : "am";
                        return t %= 12, t = t || 12, i = i < 10 ? "0" + i : i, t + ":" + i + n
                    },
                    isSameDay: function(e, t) {
                        return e.getUTCFullYear() === t.getUTCFullYear() && e.getUTCMonth() === t.getUTCMonth() && e.getUTCDate() === t.getUTCDate()
                    },
                    carouselStart: function() {
                        e(i).find(".scores-wrap").slick({
                            cssEase: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
                            lazyLoad: "ondemand",
                            infinite: !1,
                            nextArrow: '<button type="button" class="slick-next"><span class="icon navicon-right"></span></button>',
                            prevArrow: '<button type="button" class="slick-prev"><span class="icon navicon-left"></span></button>',
                            slidesToScroll: 5,
                            slidesToShow: 6,
                            useTransform: !0,
                            variableWidth: !0,
                            responsive: [{
                                breakpoint: 1301,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 4
                                }
                            }, {
                                breakpoint: 1041,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 3
                                }
                            }, {
                                breakpoint: 980,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 2
                                }
                            }, {
                                breakpoint: 754,
                                settings: {
                                    slidesToShow: 5,
                                    slidesToScroll: 4
                                }
                            }, {
                                breakpoint: 641,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 3
                                }
                            }, {
                                breakpoint: 521,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 2
                                }
                            }, {
                                breakpoint: 441,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            }]
                        }).show()
                    },
                    onmessage: {},
                    destroy: function() {
                        i = null
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i
        }).call(t, i(0))
    },
    286: function(e, t, i) {
        "use strict";
        (function(e) {
            function i(t) {
                var i = "#cw-right-100 .module-aol-on-video, #cw-full-100 .module-aol-on-video, #cw-full-100 .homepage-homepage-mobile",
                    n = e(".subchannel-news-sports").length,
                    o = void 0,
                    a = void 0,
                    r = void 0,
                    s = void 0,
                    l = void 0,
                    d = void 0,
                    c = void 0,
                    u = void 0,
                    f = void 0,
                    h = void 0,
                    p = !0,
                    m = !1;
                return {
                    init: function() {
                        var i = this;
                        o = t.getConfig(), u = t.getGlobalConfig(), a = t.getElement(), f = t.getService("utils"), h = t.getService("respond"), this.promptUserForLocationServicesAccess = this.promptUserForLocationServicesAccess.bind(this), this.initVEModule = this.initVEModule.bind(this), e.when(e.getScript("https://s.yimg.com/rb/screwdriver/ctv/ve-module/builds/prod/dist/bundle.js"), e.getScript("https://yep.video.yahoo.com/oath/js/1/oath-player.js")).done(i.initVEModule)
                    },
                    onmessage: {},
                    addEventListeners: function() {
                        var t = this;
                        e(a).find(".m-oathvid__overlay .m-oathvid__overlay__play").click(this.promptUserForLocationServicesAccess), e("body").on("click", ".m-oathvid__playlist__game a", function(i) {
                            i.preventDefault();
                            var n = i.target,
                                o = e(n).parent().data("videoid");
                            o !== l && (l = o, r = null, e("#" + a.id + " .m-oathvid__player").empty(), e(".m-oathvid__playlist__game").removeClass("live"), e('.m-oathvid__playlist__game[data-videoid="' + o + '"]').addClass("live"), t.initOathPlayer())
                        })
                    },
                    initOathPlayer: function() {
                        if (!OATH || !OATH.VideoPlatform || !OATH.VideoPlatform.VideoPlayer) return console.log("Oath Player module is not loaded.");
                        if (!l) return console.log("There is no current scheduled video id.");
                        if (!c) return console.log("We do not have the user coordinates");
                        var e = {
                                mediaItems: [{
                                    mimetype: "media/sapi",
                                    id: l
                                }],
                                allowGeoRequest: !0,
                                geoData: {
                                    latitude: String(c.latitude),
                                    longitude: String(c.longitude),
                                    accuracy: String(c.accuracy)
                                }
                            },
                            t = Object.assign(o.oathplayer, e);
                        r = new OATH.VideoPlatform.VideoPlayer(t), r.render("#" + a.id + " .m-oathvid__player")
                    },
                    showOathPlayer: function() {
                        n && e("#" + a.id).detach().insertAfter('body div[id^="cw-full-"] > div:first'), e("#" + a.id).fadeIn(500)
                    },
                    hideOathPlayer: function() {
                        e("#" + a.id).fadeOut()
                    },
                    createPlaylistVideoItem: function(t) {
                        return OATH && OATH.VideoPlatform && OATH.VideoPlatform.VideoPlayer ? c ? void e.getJSON("/api/v1/sports/nfl-games", {
                            game: t.gameId
                        }, function(i) {
                            p = 1 == p ? "live" : "", m = "es-us" == t.lang && "es";
                            var n = '<div class="m-oathvid__playlist__game ' + p + '" data-videoid="' + t.videoId + '">\n            <div class="bg"></div>\n            <div class="content">\n              <div class="live">&bull; live</div>\n              <div class="play"><span class="navicon navicon-play-triangle-fill"></span></div>\n              <div class="lang ' + m + '">ES</div>\n              <div class="teams">\n                <img src="' + i.homeTeamLogo.image.url + '" alt="home team"/> vs. <img src="' + i.awayTeamLogo.image.url + '" alt="away team"/>\n              </div>\n            </div>\n            <a href="#" class="overlay"></a>\n            </div>';
                            e(a).find(".m-oathvid__playlist-items").append(n), e(".m-oathvid__playlist__game .bg").css("background-image", "url(" + e(".m-oathvid__bg").attr("data-original") + ")")
                        }) : console.log("We do not have the user coordinates, not adding to the playlist") : console.log("Oath Player module is not loaded, not adding to the playlist")
                    },
                    showPlaylist: function() {
                        e(a).addClass("playlist"), e(a).find(".m-oathvid__playlist").fadeIn(500)
                    },
                    hidePlaylist: function() {
                        e(a).find(".m-oathvid__playlist").fadeOut()
                    },
                    initVEModule: function() {
                        if (!VEModule) return console.error("VE Module not loaded.");
                        var t = this;
                        t.addEventListeners(), s = new VEModule({
                            channelId: o.vemodule.channelId,
                            commonParams: o.vemodule.commonParams,
                            shouldShowChyron: !1
                        }), s.on(VEModule.events.onAlertStart, function(e) {
                            console.log("onAlertStart", e)
                        }), s.on(VEModule.events.onScheduledVideoComplete, function(e) {
                            console.log("OnScheduledVideoComplete, hiding Oath, showing Fat Baby"), t.hideOathPlayer(), t.showFatBaby()
                        }), s.on(VEModule.events.onDataLoaded, function() {
                            if (d = s.getLiveVideos(), d.length) {
                                t.hideFatBaby(), t.showOathPlayer();
                                for (var i = 0; i < d.length; i++) t.createPlaylistVideoItem(d[i]), 0 == i && (l = d[i].videoId);
                                var n = 145 * d.length;
                                e(a).find(".m-oathvid__playlist-items").css("min-width", n + "px")
                            }
                        })
                    },
                    setVEModuleLocation: function(e) {
                        var t = e.latitude,
                            i = e.longitude,
                            n = e.accuracy;
                        s.setLocation({
                            lat: String(t),
                            long: String(i),
                            accuracy: String(n)
                        })
                    },
                    promptUserForLocationServicesAccess: function() {
                        var t = this,
                            i = this;
                        if (!1 in navigator) return i.updateOverlayTitleCopy("Your browser does not support geolocation services. Please try upgrading to the latest version");
                        var o = function(o) {
                                var r = o.coords;
                                e(a).find(".m-oathvid__overlay, .m-oathvid__mask").hide(), c = r, i.setVEModuleLocation(r), i.initOathPlayer(), n && t.showPlaylist()
                            },
                            r = function(t) {
                                1 == t.code ? i.updateOverlayTitleCopy("Looks like location services are disabled on your browser. If you would like to stream NFL. please enable and refresh.") : i.updateOverlayTitleCopy("An unknown error has occurred. Please try again in another browser."), i.updateOverlaySubtitleCopy(""), e(a).find(".m-oathvid__overlay .m-oathvid__overlay__play").hide()
                            };
                        navigator.geolocation.getCurrentPosition(o, r)
                    },
                    updateOverlayTitleCopy: function(t) {
                        e(a).find(".m-oathvid__overlay .m-oathvid__overlay__title").text(t)
                    },
                    updateOverlaySubtitleCopy: function(t) {
                        e(a).find(".m-oathvid__overlay .m-oathvid__overlay__subtitle").text(t)
                    },
                    respondEvent: function(e) {
                        currentLayout = e
                    },
                    hideFatBaby: function() {
                        e(i).fadeOut(), t.broadcast("video:pause", {})
                    },
                    showFatBaby: function() {
                        e(i).fadeIn(), t.broadcast("video:restart", {})
                    },
                    destroy: function() {
                        o = null, a = null, f = null, h = null
                    },
                    isMobile: function() {
                        var e = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                            t = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                        return "screen-xs" == currentLayout || e > t && t <= 435 && e <= 773 || e < t && e <= 435 && t <= 773 || window.matchMedia && window.matchMedia("(min-device-width: 320px)").matches && window.matchMedia("(max-device-width: 435px)").matches
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i
        }).call(t, i(0))
    },
    35: function(e, t, i) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.DOM = function() {
                return {
                    type: "jquery",
                    query: function(t, i) {
                        return e(t).find(i)[0] || null
                    },
                    queryAll: function(t, i) {
                        return e.makeArray(e(t).find(i))
                    },
                    on: function(t, i, n) {
                        e(t).on(i, n)
                    },
                    off: function(t, i, n) {
                        e(t).off(i, n)
                    }
                }
            }()
        }).call(t, i(0))
    },
    36: function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            a = function() {
                function e() {
                    n(this, e)
                }
                return o(e, [{
                    key: "requestPermission",
                    value: function() {
                        function e(e) {
                            d = e, e === r.GRANTED ? (t.enableUserNotifications(), Tea.Application.broadcast("notificationBrowserPermissionGranted")) : Tea.Application.broadcast("notificationBrowserPermissionBlocked")
                        }
                        window.webkitNotifications && window.webkitNotifications.checkPermission ? window.webkitNotifications.requestPermission(e) : window.Notification && window.Notification.requestPermission && Notification.requestPermission(e);
                        var t = this
                    }
                }, {
                    key: "isUserBrowserNotificationAccessGranted",
                    value: function() {
                        return d === r.GRANTED
                    }
                }, {
                    key: "isUserBrowserNotificationAccessDenied",
                    value: function() {
                        return d === r.DENIED
                    }
                }, {
                    key: "isUserNotificationsAccessGranted",
                    value: function() {
                        return d === r.GRANTED && s() === r.GRANTED
                    }
                }, {
                    key: "isUserNotificationsAccessDenied",
                    value: function() {
                        return d === r.DENIED || s() === r.DENIED
                    }
                }, {
                    key: "enableUserNotifications",
                    value: function() {
                        l(r.GRANTED), Tea.Application.broadcast("notificationPermissionGranted")
                    }
                }, {
                    key: "disableUserNotifications",
                    value: function() {
                        l(r.DENIED), Tea.Application.broadcast("notificationPermissionDenied")
                    }
                }]), e
            }();
        t.default = a;
        var r = {
                DEFAULT: "default",
                GRANTED: "granted",
                DENIED: "denied"
            },
            s = function() {
                return window.localStorage.getItem("aolDesktopNotify") || r.GRANTED
            },
            l = function(e) {
                return window.localStorage.setItem("aolDesktopNotify", e)
            },
            d = function() {
                var e = ["granted", "default", "denied"],
                    t = void 0;
                return window.Notification && window.Notification.requestPermission ? (window.Notification && window.Notification.permissionLevel ? t = window.Notification.permissionLevel : window.webkitNotifications && window.webkitNotifications.checkPermission ? t = e[window.webkitNotifications.checkPermission()] : window.Notification && window.Notification.permission ? t = window.Notification.permission : navigator.mozNotification ? t = (void 0).permission.GRANTED : window.external && void 0 !== window.external.msIsSiteMode() && (t = window.external.msIsSiteMode() ? (void 0).permission.GRANTED : (void 0).permission.DEFAULT), t) : t
            }()
    },
    63: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.EventTarget = function() {
            function e() {
                this._handlers = {}
            }
            return e.prototype = {
                constructor: e,
                on: function(e, t) {
                    var i = this._handlers[e],
                        n = void 0,
                        o = void 0;
                    for (void 0 === i && (i = this._handlers[e] = []), n = 0, o = i.length; n < o; n++)
                        if (i[n] === t) return;
                    i.push(t)
                },
                fire: function(e, t) {
                    var i = void 0,
                        n = void 0,
                        o = void 0,
                        a = {
                            type: e,
                            data: t
                        };
                    if ((i = this._handlers[a.type]) instanceof Array)
                        for (i = i.concat(), n = 0, o = i.length; n < o; n++) i[n].call(this, a)
                },
                off: function(e, t) {
                    var i = this._handlers[e],
                        n = void 0,
                        o = void 0;
                    if (i instanceof Array)
                        for (n = 0, o = i.length; n < o; n++)
                            if (i[n] === t) {
                                i.splice(n, 1);
                                break
                            }
                }
            }, e
        }()
    },
    64: function(e, t, i) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }();
        t.Context = function() {
            return function() {
                function e(t, i) {
                    n(this, e), this.application = t, this.element = i
                }
                return o(e, [{
                    key: "broadcast",
                    value: function(e, t) {
                        this.application.broadcast(e, t)
                    }
                }, {
                    key: "getService",
                    value: function(e) {
                        return this.application.getService(e)
                    }
                }, {
                    key: "hasService",
                    value: function(e) {
                        return this.application.hasService(e)
                    }
                }, {
                    key: "getConfig",
                    value: function(e) {
                        return this.application.getModuleConfig(this.element, e)
                    }
                }, {
                    key: "getGlobal",
                    value: function(e) {
                        return this.application.getGlobal(e)
                    }
                }, {
                    key: "getGlobalConfig",
                    value: function(e) {
                        return this.application.getGlobalConfig(e)
                    }
                }, {
                    key: "reportError",
                    value: function(e) {
                        this.application.reportError(e)
                    }
                }, {
                    key: "reportWarning",
                    value: function(e) {
                        this.application.reportWarning(e)
                    }
                }, {
                    key: "getElement",
                    value: function() {
                        return this.element
                    }
                }]), e
            }()
        }()
    },
    65: function(e, t, i) {
        var n, o, a;
        ! function(r) {
            "use strict";
            o = [i(0)], n = r, void 0 !== (a = "function" == typeof n ? n.apply(t, o) : n) && (e.exports = a)
        }(function(e) {
            "use strict";
            var t, i, n = {
                    interval: 100,
                    sensitivity: 6,
                    timeout: 0
                },
                o = 0,
                a = function(e) {
                    t = e.pageX, i = e.pageY
                },
                r = function(e, n, o, s) {
                    if (Math.sqrt((o.pX - t) * (o.pX - t) + (o.pY - i) * (o.pY - i)) < s.sensitivity) return n.off(o.event, a), delete o.timeoutId, o.isActive = !0, e.pageX = t, e.pageY = i, delete o.pX, delete o.pY, s.over.apply(n[0], [e]);
                    o.pX = t, o.pY = i, o.timeoutId = setTimeout(function() {
                        r(e, n, o, s)
                    }, s.interval)
                },
                s = function(e, t, i, n) {
                    return delete t.data("hoverIntent")[i.id], n.apply(t[0], [e])
                };
            e.fn.hoverIntent = function(t, i, l) {
                var d = o++,
                    c = e.extend({}, n);
                e.isPlainObject(t) ? (c = e.extend(c, t), e.isFunction(c.out) || (c.out = c.over)) : c = e.isFunction(i) ? e.extend(c, {
                    over: t,
                    out: i,
                    selector: l
                }) : e.extend(c, {
                    over: t,
                    out: t,
                    selector: i
                });
                var u = function(t) {
                    var i = e.extend({}, t),
                        n = e(this),
                        o = n.data("hoverIntent");
                    o || n.data("hoverIntent", o = {});
                    var l = o[d];
                    l || (o[d] = l = {
                        id: d
                    }), l.timeoutId && (l.timeoutId = clearTimeout(l.timeoutId));
                    var u = l.event = "mousemove.hoverIntent.hoverIntent" + d;
                    if ("mouseenter" === t.type) {
                        if (l.isActive) return;
                        l.pX = i.pageX, l.pY = i.pageY, n.off(u, a).on(u, a), l.timeoutId = setTimeout(function() {
                            r(i, n, l, c)
                        }, c.interval)
                    } else {
                        if (!l.isActive) return;
                        n.off(u, a), l.timeoutId = setTimeout(function() {
                            s(i, n, l, c.out)
                        }, c.timeout)
                    }
                };
                return this.on({
                    "mouseenter.hoverIntent": u,
                    "mouseleave.hoverIntent": u
                }, c.selector)
            }
        })
    }
}, [254]);