(function() {
    /**
     * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
     * Released under MIT license, http://github.com/requirejs/almond/LICENSE
     */
    var requirejs, require, define, __extends;
    (function(n) {
        function r(n, t) {
            return w.call(n, t)
        }

        function s(n, t) {
            var o, s, f, e, h, p, c, b, r, l, w, k, u = t && t.split("/"),
                a = i.map,
                y = a && a["*"] || {};
            if (n) {
                for (n = n.split("/"), h = n.length - 1, i.nodeIdCompat && v.test(n[h]) && (n[h] = n[h].replace(v, "")), n[0].charAt(0) === "." && u && (k = u.slice(0, u.length - 1), n = k.concat(n)), r = 0; r < n.length; r++)
                    if (w = n[r], w === ".") n.splice(r, 1), r -= 1;
                    else if (w === "..")
                    if (r === 0 || r === 1 && n[2] === ".." || n[r - 1] === "..") continue;
                    else r > 0 && (n.splice(r - 1, 2), r -= 2);
                n = n.join("/")
            }
            if ((u || y) && a) {
                for (o = n.split("/"), r = o.length; r > 0; r -= 1) {
                    if (s = o.slice(0, r).join("/"), u)
                        for (l = u.length; l > 0; l -= 1)
                            if (f = a[u.slice(0, l).join("/")], f && (f = f[s], f)) {
                                e = f;
                                p = r;
                                break
                            } if (e) break;
                    !c && y && y[s] && (c = y[s], b = r)
                }!e && c && (e = c, p = b);
                e && (o.splice(0, p, e), n = o.join("/"))
            }
            return n
        }

        function y(t, i) {
            return function() {
                var r = b.call(arguments, 0);
                return typeof r[0] != "string" && r.length === 1 && r.push(null), u.apply(n, r.concat([t, i]))
            }
        }

        function k(n) {
            return function(t) {
                return s(t, n)
            }
        }

        function d(n) {
            return function(i) {
                t[n] = i
            }
        }

        function h(i) {
            if (r(e, i)) {
                var u = e[i];
                delete e[i];
                l[i] = !0;
                o.apply(n, u)
            }
            if (!r(t, i) && !r(l, i)) throw new Error("No " + i);
            return t[i]
        }

        function a(n) {
            var i, t = n ? n.indexOf("!") : -1;
            return t > -1 && (i = n.substring(0, t), n = n.substring(t + 1, n.length)), [i, n]
        }

        function p(n) {
            return n ? a(n) : []
        }

        function g(n) {
            return function() {
                return i && i.config && i.config[n] || {}
            }
        }
        var o, u, c, f, t = {},
            e = {},
            i = {},
            l = {},
            w = Object.prototype.hasOwnProperty,
            b = [].slice,
            v = /\.js$/;
        c = function(n, t) {
            var r, u = a(n),
                i = u[0],
                f = t[1];
            return n = u[1], i && (i = s(i, f), r = h(i)), i ? n = r && r.normalize ? r.normalize(n, k(f)) : s(n, f) : (n = s(n, f), u = a(n), i = u[0], n = u[1], i && (r = h(i))), {
                f: i ? i + "!" + n : n,
                n: n,
                pr: i,
                p: r
            }
        };
        f = {
            require: function(n) {
                return y(n)
            },
            exports: function(n) {
                var i = t[n];
                return typeof i != "undefined" ? i : t[n] = {}
            },
            module: function(n) {
                return {
                    id: n,
                    uri: "",
                    exports: t[n],
                    config: g(n)
                }
            }
        };
        o = function(i, u, o, s) {
            var b, a, g, k, v, nt, w = [],
                tt = typeof o,
                it;
            if (s = s || i, nt = p(s), tt === "undefined" || tt === "function") {
                for (u = !u.length && o.length ? ["require", "exports", "module"] : u, v = 0; v < u.length; v += 1)
                    if (k = c(u[v], nt), a = k.f, a === "require") w[v] = f.require(i);
                    else if (a === "exports") w[v] = f.exports(i), it = !0;
                else if (a === "module") b = w[v] = f.module(i);
                else if (r(t, a) || r(e, a) || r(l, a)) w[v] = h(a);
                else if (k.p) k.p.load(k.n, y(s, !0), d(a), {}), w[v] = t[a];
                else throw new Error(i + " missing " + a);
                g = o ? o.apply(t[i], w) : undefined;
                i && (b && b.exports !== n && b.exports !== t[i] ? t[i] = b.exports : g === n && it || (t[i] = g))
            } else i && (t[i] = o)
        };
        requirejs = require = u = function(t, r, e, s, l) {
            if (typeof t == "string") return f[t] ? f[t](r) : h(c(t, p(r)).f);
            if (!t.splice) {
                if (i = t, i.deps && u(i.deps, i.callback), !r) return;
                r.splice ? (t = r, r = e, e = null) : t = n
            }
            return r = r || function() {}, typeof e == "function" && (e = s, s = l), s ? o(n, t, r, e) : setTimeout(function() {
                o(n, t, r, e)
            }, 4), u
        };
        u.config = function(n) {
            return u(n)
        };
        requirejs._defined = t;
        define = function(n, i, u) {
            if (typeof n != "string") throw new Error("See almond README: incorrect module build, no module name");
            i.splice || (u = i, i = []);
            r(t, n) || r(e, n) || (e[n] = [n, i, u])
        };
        define.amd = {
            jQuery: !0
        }
    })();
    define("pageBehaviors", ["require", "exports", "htmlExtensions", "removeFocus"], function(n, t, i, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {
            function n() {
                i.removeClass(document.documentElement, "no-js");
                i.addClass(document.documentElement, "js");
                i.hasClass(document.body, "c_native") && window.navigator && typeof window.navigator.gamepadInputEmulation == "string" && (window.navigator.gamepadInputEmulation = "keyboard");
                r.setupRemoveFocus()
            }
            return n.typeName = "PageBehaviors", n
        }();
        t.PageBehaviors = u
    });
    require(["pageBehaviors", "componentFactory"], function(n, t) {
        t.ComponentFactory && t.ComponentFactory.create && t.ComponentFactory.create([{
            component: n.PageBehaviors
        }])
    });
    define("removeFocus", ["require", "exports", "htmlExtensions"], function(n, t, i) {
        "use strict";

        function e() {
            return f ? !1 : (f = !0, i.addEvent(document.body, i.eventTypes.mousedown, s), i.addEvents(document.body, "blur keydown", o), !0)
        }

        function o() {
            i.removeClass(r, u);
            r.length = 0
        }

        function s(n) {
            var t = i.getEventTargetOrSrcElement(n);
            i.addClass(t, u);
            r.push(t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = "x-hidden-focus",
            f = !1,
            r = [];
        t.setupRemoveFocus = e
    });
    define("componentFactory", ["require", "exports", "htmlExtensions", "utility", "stringExtensions"], function(n, t, i, r, u) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = function() {
            function n() {}
            return n.create = function(t) {
                for (var i, r = 0, u = t; r < u.length; r++) {
                    if (i = u[r], !i.c && !i.component) throw "factoryInput should has either component or c to tell the factory what component to create.Eg.ComponentFactory.create([{ c: Carousel] or ComponentFactory.create([component: Carousel]))";
                    n.createComponent(i.component || i.c, i)
                }
            }, n.createComponent = function(t, r) {
                if (t) {
                    var o = r && r.eventToBind ? r.eventToBind : "",
                        f = r && r.selector ? r.selector : t.selector,
                        s = r && r.context ? r.context : null,
                        u = [],
                        e = function(n, f, e) {
                            var a, c, l, o, h;
                            for (a = r.elements ? r.elements : f ? i.selectElementsT(f, s) : [document.body], c = 0, l = a; c < l.length; c++) o = l[c], o.mwfInstances || (o.mwfInstances = {}), o.mwfInstances[n] ? u.push(o.mwfInstances[n]) : (h = new t(o, e), (!h.isObserving || h.isObserving()) && (o.mwfInstances[n] = h, u.push(h)))
                        };
                    switch (o) {
                        case "DOMContentLoaded":
                            if (n.onDomReadyHappened) n.callBindFunction(t, f, e, r, u);
                            else {
                                n.domReadyFunctions.push(function() {
                                    return n.callBindFunction(t, f, e, r, u)
                                });
                                break
                            }
                            break;
                        case "load":
                        default:
                            if (n.onDeferredHappened) n.callBindFunction(t, f, e, r, u);
                            else {
                                n.deferredFunctions.push(function() {
                                    return n.callBindFunction(t, f, e, r, u)
                                });
                                break
                            }
                    }
                }
            }, n.callBindFunction = function(t, i, u, f, e) {
                f === void 0 && (f = null);
                var o = n.getTypeName(t),
                    s = o || i || "",
                    h = f && f.params ? f.params : {};
                h.mwfClass = o;
                r.createPerfMarker(s + "_Begin");
                u(o, i, h);
                r.createPerfMarker(s + "_End");
                f && f.callback && f.callback(e)
            }, n.getTypeName = function(t) {
                if (t.typeName) return t.typeName;
                if (t.name) return t.name;
                var i = n.typeNameRegEx.exec(t.toString());
                if (i && i.length > 1) return i[1]
            }, n.enumerateComponents = function(n, t) {
                var i, r, u;
                if (n && t) {
                    i = n.mwfInstances;
                    for (r in i)
                        if (i.hasOwnProperty(r) && (u = i[r], u && !t(r, u))) break
                }
            }, n.detach = function(n, t) {
                var i = n,
                    r;
                i && i.mwfInstances && !u.isNullOrWhiteSpace(t) && i.mwfInstances.hasOwnProperty(t) && (r = i.mwfInstances[t], i.mwfInstances[t] = null, r && r.detach && r.detach())
            }, n.typeNameRegEx = /function\s+(\S+)\s*\(/, n.onLoadTimeoutMs = 6e3, n.onDeferredHappened = !1, n.deferredFunctions = [], n.onDomReadyHappened = !1, n.domReadyFunctions = [], n
        }();
        t.ComponentFactory = f,
            function() {
                i.onDeferred(function() {
                    var n, t, r, u;
                    if (f.onDeferredHappened = !0, n = f.deferredFunctions, !n || n.length > 0)
                        for (t = 0, r = n; t < r.length; t++) u = r[t], typeof u == "function" && i.SafeBrowserApis.requestAnimationFrame.call(window, u);
                    f.deferredFunctions = null
                }, f.onLoadTimeoutMs);
                i.documentReady(function() {
                    var n, t, r, u;
                    if (f.onDomReadyHappened = !0, n = f.domReadyFunctions, !n || n.length > 0)
                        for (t = 0, r = n; t < r.length; t++) u = r[t], typeof u == "function" && i.SafeBrowserApis.requestAnimationFrame.call(window, u);
                    f.domReadyFunctions = null
                }, f.onLoadTimeoutMs)
            }()
    });
    define("htmlExtensions", ["require", "exports", "stringExtensions"], function(n, t, i) {
        "use strict";

        function e(n, t, i, f) {
            var e, o, s;
            for (f === void 0 && (f = !1), e = 0, o = u(n); e < o.length; e++) s = o[e], y(s, i, f, r[t])
        }

        function g(n, t, r, f) {
            var e, s, l, o, h, c;
            if (f === void 0 && (f = !1), !i.isNullOrWhiteSpace(t))
                for (e = 0, s = u(n); e < s.length; e++)
                    for (l = s[e], o = 0, h = t.split(/\s+/); o < h.length; o++) c = h[o], i.isNullOrWhiteSpace(c) || y(l, r, f, c)
        }

        function nt(n, t, r, f) {
            var e, s, l, o, h, c;
            for (f === void 0 && (f = !1), e = 0, s = u(n); e < s.length; e++)
                for (l = s[e], o = 0, h = u(t); o < h.length; o++) c = h[o], i.isNullOrWhiteSpace(c) || d(l, r, f, c)
        }

        function tt(n) {
            n = v(n);
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        }

        function it(n, t, i, r) {
            r === void 0 && (r = 150);
            var f, u = 0,
                o = function(n) {
                    var t = Date.now();
                    f && (clearTimeout(f), f = undefined);
                    !!u && t < u + r ? f = setTimeout(function() {
                        u = Date.now();
                        i(n)
                    }, r - (t - u)) : (u = t, i(n))
                };
            return e(n, t, o), o
        }

        function rt(n, t, r, f, e) {
            function p(n) {
                var i, t = 0;
                return function(r) {
                    var u = Date.now();
                    clearTimeout(i);
                    !!t && u < t + e ? i = setTimeout(function() {
                        t = u;
                        n(r)
                    }, e - (u - t)) : (t = u, n(r))
                }
            }
            var o, h, a, s, c, l, v;
            if (f === void 0 && (f = !1), e === void 0 && (e = 150), !i.isNullOrWhiteSpace(t))
                for (o = 0, h = u(n); o < h.length; o++)
                    for (a = h[o], s = 0, c = t.split(/\s+/); s < c.length; s++) l = c[s], i.isNullOrWhiteSpace(l) || (v = p(r), y(a, v, f, l))
        }

        function ut(n, t, i, r) {
            r === void 0 && (r = 150);
            var u, f = function(n) {
                window.clearTimeout(u);
                u = setTimeout(function() {
                    i(n)
                }, r)
            };
            return e(n, t, f), f
        }

        function ft(n, t) {
            if (t === void 0 && (t = 5e3), document.readyState === "complete") {
                n.call(null);
                return
            }
            if (!document.attachEvent && document.readyState === "interactive") {
                n.call(null);
                return
            }
            var o, i, u, f = function() {
                clearTimeout(o);
                i && c(document, r.DOMContentLoaded, i);
                u && c(document, r.onreadystatechange, u);
                l.requestAnimationFrame.call(window, n)
            };
            if (o = setTimeout(function() {
                    f("timedout")
                }, t), document.addEventListener) {
                i = function() {
                    f("domcontentloaded")
                };
                e(document, r.DOMContentLoaded, i, !1);
                return
            }
            document.attachEvent && (u = function() {
                document.readyState === "complete" && f("readystatecomplete")
            }, e(document, r.onreadystatechange, u, !1))
        }

        function et(n, t) {
            t === void 0 && (t = 5e3);
            var i, u = setTimeout(function() {
                clearTimeout(u);
                c(window, r.load, i);
                n.call(null)
            }, t);
            i = function() {
                clearTimeout(u);
                l.requestAnimationFrame.call(window, n)
            };
            document.readyState === "complete" ? (clearTimeout(u), n.call(null)) : e(window, r.load, i)
        }

        function p(n, t) {
            !n || i.isNullOrWhiteSpace(t) || b(n, t) || (n.classList ? n.classList.add(t) : n.className = i.trim(n.className + " " + t))
        }

        function w(n, t) {
            var o, e, s, r, f;
            if (!!n && !i.isNullOrWhiteSpace(t))
                for (o = " " + i.trim(t) + " ", e = 0, s = u(n); e < s.length; e++)
                    if (r = s[e], r.classList) r.classList.remove(t);
                    else if (!i.isNullOrWhiteSpace(r.className)) {
                for (f = " " + r.className + " "; f.indexOf(o) > -1;) f = f.replace(o, " ");
                r.className = i.trim(f)
            }
        }

        function ot(n, t) {
            var i, r, u;
            if (t)
                for (i = 0, r = t; i < r.length; i++) u = r[i], w(n, u)
        }

        function st(n, t) {
            var i, r, u;
            if (t)
                for (i = 0, r = t; i < r.length; i++) u = r[i], p(n, u)
        }

        function ht(n, t) {
            var u, f, r;
            if (n && t)
                for (u = 0, f = t; u < f.length; u++) r = f[u], i.isNullOrWhiteSpace(r.name) || i.isNullOrWhiteSpace(r.value) || n.setAttribute(r.name, r.value)
        }

        function b(n, t) {
            return !n || i.isNullOrWhiteSpace(t) ? !1 : n.classList ? n.classList.contains(t) : (" " + n.className + " ").indexOf(" " + i.trim(t) + " ") > -1
        }

        function ct(n) {
            return n ? n.parentElement.removeChild(n) : n
        }

        function lt(n, t) {
            return h(n, t)
        }

        function at(n, t) {
            var i = h(n, t);
            return !i || !i.length ? null : i[0]
        }

        function h(n, t) {
            var r, u;
            if (i.isNullOrWhiteSpace(n) || n === "#") return [];
            if (r = t || document, /^[\#.]?[\w-]+$/.test(n)) {
                switch (n[0]) {
                    case ".":
                        return r.getElementsByClassName ? o(r.getElementsByClassName(n.slice(1))) : o(r.querySelectorAll(n));
                    case "#":
                        return u = r.querySelector(n), u ? [u] : []
                }
                return o(r.getElementsByTagName(n))
            }
            return o(r.querySelectorAll(n))
        }

        function vt(n, t) {
            var i = h(n, t);
            return !i || !i.length ? null : i[0]
        }

        function yt(n, t) {
            var o = t || document,
                u, f, i, r, e;
            for (u = n.split(","), i = 0, r = u; i < r.length; i++) e = r[i], f += this.selectElements(e, o);
            return f
        }

        function o(n) {
            var i, t;
            if (!n) return [];
            for (i = [], t = 0; t < n.length; t++) i.push(n[t]);
            return i
        }

        function pt(n) {
            for (n === void 0 && (n = document.documentElement); n !== null;) {
                var t = n.getAttribute("dir");
                if (!t) n = n.parentElement;
                else return t === "rtl" ? s.right : s.left
            }
            return s.left
        }

        function a(n) {
            var i, t, r;
            if (n) {
                i = n.getBoundingClientRect();
                t = {};
                for (r in i) t[r] = i[r];
                return typeof t.width == "undefined" && (t.width = n.offsetWidth), typeof t.height == "undefined" && (t.height = n.offsetHeight), t
            }
        }

        function wt(n) {
            if (n) return {
                width: parseFloat(a(n).width) + parseFloat(f(n, "margin-left")) + parseFloat(f(n, "margin-right")),
                height: parseFloat(a(n).height) + parseFloat(f(n, "margin-top")) + parseFloat(f(n, "margin-bottom"))
            }
        }

        function f(n, t, r) {
            if (!n) return null;
            if (!r && r !== "") return r = n.style[t], i.isNullOrWhiteSpace(r) && (r = getComputedStyle(n), r = r[t]), r;
            n.style[t] = r
        }

        function c(n, t, i, f) {
            var e, o, s;
            if (n && t && i)
                for (e = 0, o = u(n); e < o.length; e++) s = o[e], d(s, i, f, r[t])
        }

        function k(n) {
            return Array.isArray ? Array.isArray(n) : {}.toString.call(n) === "[object Array]"
        }

        function u(n) {
            return k(n) ? n : [n]
        }

        function bt(n, t) {
            return !!n && n !== t && n.contains(t)
        }

        function kt(n, t) {
            return !!n && n.contains(t)
        }

        function dt(n) {
            return !n ? "" : n.textContent || n.innerText || ""
        }

        function gt(n, t) {
            !n || t === null || (n.textContent ? n.textContent = t : n.innerHTML = t)
        }

        function ni(n) {
            n && (n.innerHTML = "")
        }

        function ti(n) {
            return n = v(n), n.target || n.srcElement
        }

        function v(n) {
            return n || window.event
        }

        function y(n, t, i, r) {
            i === void 0 && (i = !1);
            !n || (window.addEventListener ? n.addEventListener(r, t, i) : n.attachEvent("on" + r, t))
        }

        function d(n, t, i, r) {
            i === void 0 && (i = !1);
            !n || (window.removeEventListener ? n.removeEventListener(r, t, i) : n.detachEvent("on" + r, t))
        }

        function ii(n, t, i) {
            if (i === void 0 && (i = {}), !n || !t) return null;
            var f = typeof t == "string" ? t : r[t],
                u = null;
            if (i.bubbles = typeof i.bubbles == "undefined" ? !0 : i.bubbles, i.cancelable = typeof i.cancelable == "undefined" ? !0 : i.cancelable, window.CustomEvent && typeof CustomEvent == "function") u = new CustomEvent(f, i), i.changedTouches && i.changedTouches.length && (u.changedTouches = i.changedTouches);
            else if (document.createEvent) u = document.createEvent("CustomEvent"), u.initCustomEvent(f, i.bubbles, i.cancelable, i.detail), i.changedTouches && i.changedTouches.length && (u.changedTouches = i.changedTouches);
            else {
                u = document.createEventObject();
                try {
                    n.fireEvent("on" + f, u)
                } catch (e) {
                    return undefined
                }
                return u
            }
            return n.dispatchEvent(u), u
        }

        function ri(n) {
            n.stopPropagation ? n.stopPropagation() : n.returnValue = !1
        }

        function ui(n) {
            return n === void 0 && (n = window), n.scrollY || n.pageYOffset || (n.document.compatMode === "CSS1Compat" ? n.document.documentElement.scrollTop : n.document.body.scrollTop)
        }

        function fi(n) {
            if (!n) return window.document.documentElement;
            for (var i = n.ownerDocument.documentElement, t = n.offsetParent; t && f(t, "position") == "static";) t = t.offsetParent;
            return t || i
        }

        function ei(n, t) {
            if (n && t) {
                var i = t.clientHeight,
                    r = t.scrollHeight;
                r > i && (t.scrollTop = Math.min(n.offsetTop - t.firstElementChild.offsetTop, r - i))
            }
        }

        function oi(n) {
            return typeof n.complete != "undefined" && typeof n.naturalHeight != "undefined" ? n && n.complete && n.naturalHeight > 0 : !0
        }

        function si(n) {
            return n && typeof n.complete != "undefined" && typeof n.naturalHeight != "undefined" ? n && n.complete && n.naturalWidth == 0 && n.naturalHeight == 0 : !1
        }

        function hi(n) {
            var i = n.touches && n.touches.length ? n.touches : [n],
                t = n.changedTouches && n.changedTouches[0] || i[0];
            return {
                x: t.clientX,
                y: t.clientY
            }
        }

        function ci(n, t) {
            for (var i = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector; n;) {
                if (i.call(n, t)) break;
                n = n.parentElement
            }
            return n
        }

        function li(n, t) {
            t === void 0 && (t = !0);
            !!n && (window.PointerEvent || window.navigator.pointerEnabled) && f(n, "touchAction", t ? "pan-y" : "pan-x")
        }
        var l, s, r;
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(n) {
                n.requestAnimationFrame = window.requestAnimationFrame || function(n) {
                    typeof n == "function" && window.setTimeout(n, 16.7)
                }
            }(l = t.SafeBrowserApis || (t.SafeBrowserApis = {})),
            function(n) {
                n[n.right = 0] = "right";
                n[n.left = 1] = "left"
            }(s = t.Direction || (t.Direction = {})),
            function(n) {
                n[n.animationend = 0] = "animationend";
                n[n.blur = 1] = "blur";
                n[n.change = 2] = "change";
                n[n.click = 3] = "click";
                n[n.DOMContentLoaded = 4] = "DOMContentLoaded";
                n[n.DOMNodeInserted = 5] = "DOMNodeInserted";
                n[n.DOMNodeRemoved = 6] = "DOMNodeRemoved";
                n[n.ended = 7] = "ended";
                n[n.error = 8] = "error";
                n[n.focus = 9] = "focus";
                n[n.focusin = 10] = "focusin";
                n[n.focusout = 11] = "focusout";
                n[n.input = 12] = "input";
                n[n.load = 13] = "load";
                n[n.keydown = 14] = "keydown";
                n[n.keypress = 15] = "keypress";
                n[n.keyup = 16] = "keyup";
                n[n.loadedmetadata = 17] = "loadedmetadata";
                n[n.mousedown = 18] = "mousedown";
                n[n.mousemove = 19] = "mousemove";
                n[n.mouseout = 20] = "mouseout";
                n[n.mouseover = 21] = "mouseover";
                n[n.mouseup = 22] = "mouseup";
                n[n.onreadystatechange = 23] = "onreadystatechange";
                n[n.resize = 24] = "resize";
                n[n.scroll = 25] = "scroll";
                n[n.submit = 26] = "submit";
                n[n.timeupdate = 27] = "timeupdate";
                n[n.touchcancel = 28] = "touchcancel";
                n[n.touchend = 29] = "touchend";
                n[n.touchmove = 30] = "touchmove";
                n[n.touchstart = 31] = "touchstart";
                n[n.wheel = 32] = "wheel"
            }(r = t.eventTypes || (t.eventTypes = {}));
        t.addEvent = e;
        t.addEvents = g;
        t.removeEvents = nt;
        t.preventDefault = tt;
        t.addThrottledEvent = it;
        t.addThrottledEvents = rt;
        t.addDebouncedEvent = ut;
        t.documentReady = ft;
        t.onDeferred = et;
        t.addClass = p;
        t.removeClass = w;
        t.removeClasses = ot;
        t.addClasses = st;
        t.addAttribute = ht;
        t.hasClass = b;
        t.removeElement = ct;
        t.selectElements = lt;
        t.selectFirstElement = at;
        t.selectElementsT = h;
        t.selectFirstElementT = vt;
        t.selectElementsFromSelectors = yt;
        t.nodeListToArray = o;
        t.getDirection = pt;
        t.getClientRect = a;
        t.getClientRectWithMargin = wt;
        t.css = f;
        t.removeEvent = c;
        t.isArray = k;
        t.toArray = u;
        t.isDescendant = bt;
        t.isDescendantOrSelf = kt;
        t.getText = dt;
        t.setText = gt;
        t.removeInnerHtml = ni;
        t.getEventTargetOrSrcElement = ti;
        t.getEvent = v;
        t.customEvent = ii;
        t.stopPropagation = ri;
        t.getScrollY = ui;
        t.getOffsetParent = fi;
        t.scrollElementIntoView = ei;
        t.isImageLoadedSuccessfully = oi;
        t.isImageLoadFailed = si;
        t.getCoordinates = hi;
        t.getParent = ci;
        t.preventDefaultSwipeAction = li
    });
    define("keycodes", ["require", "exports"], function(n, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    });
    define("observableComponent", ["require", "exports", "htmlExtensions"], function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function n(t, i) {
                i === void 0 && (i = null);
                this.element = t;
                this.ignoreNextDOMChange = !1;
                this.observing = !1;
                n.shouldInitializeAsClass(t, i) && this.setObserver()
            }
            return n.prototype.detach = function() {
                this.unObserve();
                this.teardown()
            }, n.prototype.isObserving = function() {
                return this.observing
            }, n.prototype.unObserve = function() {
                this.observing = !1;
                this.modernObserver && this.modernObserver.disconnect();
                i.removeEvent(this.element, i.eventTypes.DOMNodeInserted, this.obsoleteNodeInsertedEventHander);
                i.removeEvent(this.element, i.eventTypes.DOMNodeRemoved, this.obsoleteNodeRemovedEventHandler)
            }, n.prototype.setObserver = function() {
                this.observing = !0;
                typeof n.mutationObserver != "undefined" ? this.observeModern() : "MutationEvent" in window && this.observeObsolete()
            }, n.prototype.observeModern = function() {
                var t = this,
                    i = function(n) {
                        t.onModernMutations(n)
                    };
                this.modernObserver = new n.mutationObserver(i);
                this.modernObserver.observe(this.element, {
                    childList: !0,
                    subtree: !0
                })
            }, n.prototype.onModernMutations = function(n) {
                var r, u, f, e, i, o, t, s;
                if (this.ignoreNextDOMChange) {
                    this.ignoreNextDOMChange = !1;
                    return
                }
                for (r = !1, u = !1, f = 0, e = n; f < e.length; f++) {
                    for (i = e[f], t = 0, o = i.addedNodes.length; t < o; t++) i.addedNodes[t].nodeType === Node.ELEMENT_NODE && (r = !0, u = !0);
                    for (t = 0, s = i.removedNodes.length; t < s; t++) i.removedNodes[t].nodeType === Node.ELEMENT_NODE && (r = !0, i.removedNodes[t] !== this.element && (u = !0))
                }
                r && this.teardown();
                u && this.update()
            }, n.prototype.observeObsolete = function() {
                var n = this;
                this.obsoleteNodeInsertedEventHander = i.addDebouncedEvent(this.element, i.eventTypes.DOMNodeInserted, function() {
                    n.onObsoleteNodeInserted()
                });
                this.obsoleteNodeRemovedEventHandler = i.addDebouncedEvent(this.element, i.eventTypes.DOMNodeRemoved, function(t) {
                    n.onObsoleteNodeRemoved(t)
                })
            }, n.prototype.onObsoleteNodeInserted = function() {
                this.ignoreNextDOMChange || (this.teardown(), this.update())
            }, n.prototype.onObsoleteNodeRemoved = function(n) {
                this.ignoreNextDOMChange || (this.teardown(), i.getEventTargetOrSrcElement(n) !== this.element && this.update())
            }, n.shouldInitializeAsClass = function(t, i) {
                var r = t ? t.getAttribute(n.mwfClassAttribute) : null,
                    u = t ? t.getAttribute(n.initializeAttribute) : null;
                return u === "false" ? !1 : !!t && (!r || !!i && r === i.mwfClass)
            }, n.mwfClassAttribute = "data-mwf-class", n.initializeAttribute = "data-js-initialize", n.mutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, n
        }();
        t.ObservableComponent = r
    });
    __extends = this && this.__extends || function() {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(n, t) {
            n.__proto__ = t
        } || function(n, t) {
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }();
    define("publisher", ["require", "exports", "observableComponent"], function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function(n) {
            function t(t, i) {
                i === void 0 && (i = null);
                var r = n.call(this, t, i) || this;
                return r.element = t, r
            }
            return __extends(t, n), t.prototype.subscribe = function(n) {
                if (!n) return !1;
                if (this.subscribers) {
                    if (this.subscribers.indexOf(n) !== -1) return !1
                } else this.subscribers = [];
                return this.subscribers.push(n), !0
            }, t.prototype.unsubscribe = function(n) {
                if (!n || !this.subscribers || !this.subscribers.length) return !1;
                var t = this.subscribers.indexOf(n);
                return t === -1 ? !1 : (this.subscribers.splice(t, 1), !0)
            }, t.prototype.hasSubscribers = function() {
                return !!this.subscribers && this.subscribers.length > 0
            }, t.prototype.initiatePublish = function(n) {
                var t, i, r;
                if (this.hasSubscribers())
                    for (t = 0, i = this.subscribers; t < i.length; t++) r = i[t], this.publish(r, n)
            }, t.prototype.update = function() {}, t.prototype.teardown = function() {}, t
        }(i.ObservableComponent);
        t.Publisher = r
    });
    define("stringExtensions", ["require", "exports"], function(n, t) {
        "use strict";

        function r(n) {
            return !n || typeof n != "string" || !i(n)
        }

        function i(n) {
            return !n || typeof n != "string" ? n : n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "")
        }

        function u(n, t, i) {
            return (i === void 0 && (i = !0), !n || !t) ? !1 : (i && (n = n.toLocaleLowerCase(), t = t.toLocaleLowerCase()), n.startsWith) ? n.startsWith(t) : n.indexOf(t) === 0
        }

        function f(n, t, i) {
            return (i === void 0 && (i = !0), !n || !t) ? !1 : (i && (n = n.toLocaleLowerCase(), t = t.toLocaleLowerCase()), n.endsWith) ? n.endsWith(t) : n.lastIndexOf(t) === n.length - t.length
        }

        function e(n, t, i) {
            if (i === void 0 && (i = !0), !n || !t) return 0;
            var r = 0;
            for (i && (n = n.toLocaleLowerCase(), t = t.toLocaleLowerCase()); n.charCodeAt(r) === t.charCodeAt(r);) r++;
            return r
        }

        function o(n) {
            for (var i = [], t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
            return n.replace(/{(\d+)}/g, function(n, t) {
                if (t >= i.length) return n;
                var r = i[t];
                return typeof r != "number" && !r ? "" : typeof r == "string" ? r : r.toString()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.isNullOrWhiteSpace = r;
        t.trim = i;
        t.startsWith = u;
        t.endsWith = f;
        t.getMatchLength = e;
        t.format = o
    });
    define("utility", ["require", "exports", "stringExtensions"], function(n, t, i) {
        "use strict";

        function r(n) {
            return !isNaN(n) && typeof n == "number"
        }

        function f() {
            return window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth
        }

        function h() {
            return window.innerHeight && document.documentElement.clientHeight ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight
        }

        function c(n) {
            if (n != null) return {
                width: n.clientWidth,
                height: n.clientHeight
            }
        }

        function l(n) {
            var t;
            if ((n = n || window.event, !n) || (t = n.key || n.keyIdentifier, !t)) return t;
            switch (t) {
                case "Left":
                    return "ArrowLeft";
                case "Right":
                    return "ArrowRight";
                case "Up":
                    return "ArrowUp";
                case "Down":
                    return "ArrowDown";
                case "Esc":
                    return "Escape";
                default:
                    return t
            }
        }

        function a(n) {
            return n = n || window.event, n == null ? null : n.which || n.keyCode || n.charCode
        }

        function v(n, t, i, r, u) {
            var o = "",
                f, e;
            r && (f = new Date, f.setTime(f.getTime() + r * 864e5), o = "; expires=" + f.toUTCString());
            e = "";
            u && (e = ";domain=" + u);
            window.document.cookie = n + "=" + encodeURIComponent(t) + o + ("; path=" + i + ";") + e
        }

        function y(n) {
            var t, i;
            if (!!n)
                for (t = 0, i = document.cookie.split("; "); t < i.length; t++) {
                    var r = i[t],
                        f = r.indexOf("="),
                        u = e(r.substring(0, f));
                    if (u === n) return e(r.substring(u.length + 1))
                }
            return null
        }

        function e(n) {
            return n = decodeURIComponent(n.replace("/+/g", " ")), n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), n
        }

        function p(n) {
            var u;
            if (!!n && n.length === 6) {
                var t = parseInt(n.substring(0, 2), 16),
                    i = parseInt(n.substring(2, 4), 16),
                    r = parseInt(n.substring(4, 6), 16);
                if (!isNaN(t) && !isNaN(i) && !isNaN(r)) return u = (t * 299 + i * 587 + r * 114) / 255e3, u >= .5 ? 2 : 1
            }
            return null
        }

        function w(n, t, i) {
            return !i || !r(n) || !r(t) || !r(i.left) || !r(i.right) || !r(i.top) || !r(i.bottom) ? !1 : n >= i.left && n <= i.right && t >= i.top && t <= i.bottom
        }

        function b(n) {
            console && console.warn ? console.warn(n) : console && console.error && console.error(n)
        }

        function k(n, t) {
            if (t || !(o("item").toLowerCase().indexOf("perf_marker_global:true") < 0)) {
                /*!/#IFDEF perf_marker_global || log_define_timing */
                if (!i.isNullOrWhiteSpace(n) && window.performance && window.performance.mark) {
                    var r = n.split(" ").join("_");
                    window.performance.mark(r);
                    window.console && window.console.timeStamp && window.console.timeStamp(r);
                    /*!/#ENDIF*/
                }
            }
        }

        function d(n) {
            if (i.isNullOrWhiteSpace(n) || !window.performance || !window.performance.mark) return 0;
            var r = n.split(" ").join("_"),
                t = window.performance.getEntriesByName(r);
            return t && t.length ? Math.round(t[t.length - 1].startTime) : 0
        }

        function g(n, t) {
            var f;
            if (!r(n)) return "00:00";
            f = n < 0;
            f && (n *= -1);
            var u = Math.floor(n / 3600),
                e = n % 3600,
                o = Math.floor(e / 60),
                i = "";
            return i = t ? u > 0 ? u + ":" : "00:" : u > 0 ? u + ":" : "", n = Math.floor(e % 60), i += (o < 10 ? "0" : "") + o, i += ":" + (n === 0 ? "00" : (n < 10 ? "0" : "") + n), f ? "-" + i : i
        }

        function nt(n) {
            if (!JSON || !JSON.parse) throw new Error("JSON.parse unsupported.");
            if (!n) throw new Error("Invalid json.");
            return JSON.parse(n)
        }

        function u() {
            for (var e, t, o, n, f, i, r = [], c = 0; c < arguments.length; c++) r[c] = arguments[c];
            if (!r || !r.length) return null;
            if (e = typeof r[0] == "boolean" && r[0], r.length < 2) return e ? null : r[0];
            if (e && r.length < 3) return r[1];
            for (t = e ? r[1] : r[0], o = e ? 2 : 1; o < r.length; o++)
                for (n in r[o])
                    if (r[o].hasOwnProperty(n)) {
                        if (f = r[o][n], e) {
                            var s = Array.isArray ? Array.isArray(f) : {}.toString.call(f) === "[object Array]",
                                h = !!t[n] && (Array.isArray ? Array.isArray(t[n]) : {}.toString.call(t[n]) === "[object Array]"),
                                l = !s && typeof f == "object",
                                a = !h && !!t[n] && typeof t[n] == "object";
                            if (s && h) {
                                for (i = 0; i < f.length; i++) s = Array.isArray ? Array.isArray(f[i]) : {}.toString.call(f[i]) === "[object Array]", h = !!t[n][i] && (Array.isArray ? Array.isArray(t[n][i]) : {}.toString.call(t[n][i]) === "[object Array]"), l = !s && typeof f[i] == "object", a = !h && !!t[n][i] && typeof t[n][i] == "object", t[n][i] = s ? u(!0, h ? t[n][i] : [], f[i]) : l ? u(!0, a ? t[n][i] : {}, f[i]) : f[i];
                                continue
                            } else if (s) {
                                t[n] = u(!0, [], f);
                                continue
                            } else if (l) {
                                t[n] = u(!0, a ? t[n] : {}, f);
                                continue
                            }
                        }
                        t[n] = f
                    } return t
        }

        function tt(n, t, i, r, u) {
            var f = !i || i < 0 ? -1 : Number(new Date) + i;
            t = t || 100,
                function e() {
                    var i = n();
                    if (i && r) r();
                    else {
                        if (i) return;
                        if (f === -1 || Number(new Date) < f) setTimeout(e, t);
                        else if (u) u();
                        else return
                    }
                }()
        }

        function o(n, t) {
            return t === void 0 && (t = !0), s(location.search, n, t)
        }

        function it(n, t, i) {
            return i === void 0 && (i = !0), s(n, t, i)
        }

        function s(n, t, i) {
            if (i === void 0 && (i = !0), !t || !n) return "";
            var r = "[\\?&]" + t.replace(/[\[\]]/g, "\\$&") + "=([^&#]*)",
                f = i ? new RegExp(r, "i") : new RegExp(r),
                u = f.exec(n);
            return u === null ? "" : decodeURIComponent(u[1].replace(/\+/g, " "))
        }

        function rt(n, t) {
            var i, r;
            if (!t) return n;
            if (n.indexOf("//") === -1) throw 'To avoid unexpected results in URL parsing, url must begin with "http://", "https://", or "//"';
            return i = document.createElement("a"), i.href = n, i.search = (i.search ? i.search + "&" : "?") + t, r = i.href, i = null, r
        }

        function ut(n, t) {
            if (window.sessionStorage && n && t) try {
                sessionStorage.setItem(n, t)
            } catch (i) {}
        }

        function ft(n) {
            if (!window.sessionStorage || !n) return null;
            try {
                return sessionStorage.getItem(n)
            } catch (t) {
                return null
            }
        }

        function et(n, t) {
            if (window.localStorage && n && t) try {
                localStorage.setItem(n, t)
            } catch (i) {}
        }

        function ot(n) {
            if (!window.localStorage || !n) return null;
            try {
                return localStorage.getItem(n)
            } catch (t) {
                return null
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.isNumber = r;
        t.getWindowWidth = f;
        t.getWindowHeight = h;
        t.getDimensions = c;
        t.getVirtualKey = l;
        t.getKeyCode = a;
        t.setCookie = v;
        t.getCookie = y;
        t.detectContrast = p;
        t.pointInRect = w;
        t.apiDeprecated = b;
        t.createPerfMarker = k;
        t.getPerfMarkerValue = d;
        t.toElapsedTimeString = g;
        t.parseJson = nt;
        t.extend = u;
        t.poll = tt;
        t.getQSPValue = o;
        t.getQSPFromUrl = it;
        t.addQSP = rt;
        t.saveToSessionStorage = ut;
        t.getValueFromSessionStorage = ft;
        t.saveToLocalStorage = et;
        t.getValueFromLocalStorage = ot;
        var st;
        (function(n) {
            function t() {
                var t;
                if (window.matchMedia) {
                    for (t = 0; t < n.allWidths.length; ++t)
                        if (!window.matchMedia("(min-width:" + n.allWidths[t] + "px)").matches) return t
                } else
                    for (t = 0; t < n.allWidths.length; ++t)
                        if (!(f() >= n.allWidths[t])) return t;
                return n.allWidths.length
            }
            n.allWidths = [320, 540, 768, 1084, 1400, 1779];
            n.vpMin = n.allWidths[0];
            n.vpMax = 2048;
            n.getViewport = t
        })(st = t.Viewports || (t.Viewports = {}))
    });
    __extends = this && this.__extends || function() {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(n, t) {
            n.__proto__ = t
        } || function(n, t) {
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }();
    define("alert", ["require", "exports", "publisher", "htmlExtensions"], function(n, t, i, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function(n) {
            function t(t) {
                var i = n.call(this, t) || this;
                return i.closeAlertAndRemoveEvent = function() {
                    r.removeEvent(i.closeButton, r.eventTypes.click, i.closeAlertAndRemoveEvent);
                    r.removeElement(i.element);
                    i.initiatePublish()
                }, i.update(), i
            }
            return __extends(t, n), t.prototype.update = function() {
                this.element && (this.closeButton = r.selectFirstElement("button.c-action-trigger.glyph-cancel", this.element), !this.closeButton || r.addEvent(this.closeButton, r.eventTypes.click, this.closeAlertAndRemoveEvent, !1))
            }, t.prototype.teardown = function() {
                r.removeEvent(this.closeButton, r.eventTypes.click, this.closeAlertAndRemoveEvent, !1)
            }, t.prototype.publish = function(n) {
                n.onAlertClosed()
            }, t.selector = ".m-alert", t.typeName = "Alert", t
        }(i.Publisher);
        t.Alert = u
    });
    require(["alert", "componentFactory"], function(n, t) {
        t.ComponentFactory && t.ComponentFactory.create && t.ComponentFactory.create([{
            component: n.Alert
        }])
    });
    __extends = this && this.__extends || function() {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(n, t) {
            n.__proto__ = t
        } || function(n, t) {
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }();
    define("autosuggest", ["require", "exports", "publisher", "htmlExtensions", "stringExtensions", "utility"], function(n, t, i, r, u, f) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = function(n) {
            function t(i, e) {
                var o, s;
                return e === void 0 && (e = null), o = n.call(this, i, f.isNumber(e) ? {} : e) || this, o.hideNoResults = !1, o.suggestionClickListeners = [], o.publishInProgress = [], o.updateSuggestions = function(n) {
                    o.publishInProgress.length > 0 && o.publishInProgress.pop();
                    var t = o.reconstructMenu(n);
                    o.show();
                    t && o.setFocusToInput();
                    o.trackSuggestionUpdates(n)
                }, o.trackSuggestionUpdates = function(n) {
                    var r, u, f, e, i, s, a;
                    if (window.awa && window.awa.ct && typeof window.awa.ct.captureContentUpdate == "function") {
                        for (r = [], u = 0, r.push({
                                cN: "Search_nav",
                                srchq: o.cachedInputValue,
                                id: "auto suggest",
                                srchtype: "auto suggest"
                            }), f = 0, e = n; f < e.length; f++) {
                            if (i = e[f], i.type === "string" && i.value) s = i.value.toString(), r.push({
                                cN: s,
                                id: s,
                                cT: t.telemetryCtNonProduct,
                                aN: "auto suggest",
                                sN: u.toString()
                            });
                            else if (i.type === "product") {
                                var c = i.value,
                                    h = c.title,
                                    l = c.pid;
                                h && l && r.push({
                                    cN: h,
                                    id: h,
                                    cT: t.telemetryCtProduct,
                                    aN: "auto suggest",
                                    pid: l,
                                    sN: u.toString()
                                })
                            }
                            u++
                        }
                        a = {
                            content: r
                        };
                        window.awa.ct.captureContentUpdate(a)
                    }
                }, o.handleInputKeyup = function(n) {
                    o.input && o.input.value && (o.cachedInputValue = o.input.value);
                    switch (f.getKeyCode(n)) {
                        case 9:
                            break;
                        case 27:
                            break;
                        case 38:
                            break;
                        case 40:
                            break;
                        default:
                            o.initiatePublish({
                                notification: "onMatchPatternChanged",
                                properties: {
                                    pattern: o.input.value
                                }
                            });
                            o.publishInProgress.push(!0)
                    }
                }, o.handleInputKeydown = function(n) {
                    switch (f.getKeyCode(n)) {
                        case 9:
                        case 27:
                            o.hide();
                            break;
                        case 38:
                            r.preventDefault(n);
                            o.handleInputArrowKey(!0);
                            break;
                        case 40:
                            r.preventDefault(n);
                            o.handleInputArrowKey(!1)
                    }
                }, o.handleMenuKeydown = function(n) {
                    switch (f.getKeyCode(n)) {
                        case 13:
                            o.selectSuggestion(o.selectedSuggestion, !0);
                            break;
                        case 27:
                            o.hide();
                            break;
                        case 38:
                        case n.shiftKey && 9:
                            r.preventDefault(n);
                            o.handleMenuArrowKey(!0);
                            break;
                        case 40:
                        case 9:
                            r.preventDefault(n);
                            o.handleMenuArrowKey(!1)
                    }
                }, o.handleClickWhenMenuOpen = function(n) {
                    o.closeMenuFromClick(r.getEventTargetOrSrcElement(n))
                }, o.handleInputClick = function() {
                    o.show()
                }, o.selectSuggestionFromClick = function(n) {
                    o.selectSuggestion(n, !0)
                }, o.buildStringSuggestionHtml = function(n, t) {
                    var i = document.createElement("li");
                    i.setAttribute("class", "c-menu-item");
                    i.setAttribute("role", "presentation");
                    i.setAttribute("title", n);
                    i.innerHTML = '<span role="option" aria-label="' + n + '" tabindex="0">' + o.highlight(n) + "<\/span>";
                    r.addAttribute(i, t);
                    o.ignoreNextDOMChange = !0;
                    o.menu.appendChild(i)
                }, o.buildProductSuggestionHtml = function(n, t) {
                    var e = !n.category ? "" : " - " + n.category,
                        f = document.createElement("li"),
                        i, s, h, c, l;
                    f.setAttribute("class", "c-menu-item");
                    f.setAttribute("role", "presentation");
                    f.setAttribute("title", n.title + e);
                    o.searchable(f, !1);
                    i = document.createElement("a");
                    i.setAttribute("role", "option");
                    i.setAttribute("aria-label", n.title + e + " - Link");
                    i.setAttribute("class", "f-product");
                    i.setAttribute("href", n.targetUrl);
                    r.addAttribute(i, t);
                    s = "";
                    n.imageSrc && (h = "", c = 'class="c-image' + (n.isImageRound ? " f-round" : "") + '"', u.isNullOrWhiteSpace(n.backgroundColor) || n.backgroundColor.toLowerCase() === "transparent" || (h = 'style="background:' + n.backgroundColor + '"'), s = "<img " + c + ' src="' + n.imageSrc + '" ' + h + ' role="none" alt="' + (n.title + e) + '"/>');
                    l = n.category ? '<span class="c-meta-text">' + n.category + "<\/span>" : "";
                    i.innerHTML = s + "<div><span>" + o.highlight(n.title) + "<\/span>" + l + "<\/div>";
                    f.appendChild(i);
                    o.ignoreNextDOMChange = !0;
                    o.menu.appendChild(f)
                }, o.setFocusToInput = function() {
                    o.input && o.input.focus()
                }, f.isNumber(e) ? s = e : e && (f.isNumber(e.scrollLimit) && (s = e.scrollLimit), e.hideNoResults && (o.hideNoResults = e.hideNoResults)), o.itemScrollCount = Math.max(t.minimumItemScrollCount, s || t.defaultItemScrollCount), o.update(), o
            }
            return __extends(t, n), t.prototype.update = function() {
                this.element && (this.input = r.selectFirstElement("[aria-controls=" + this.element.id + "]"), this.input) && (this.menu = r.selectFirstElement(".c-menu", this.element), this.menu) && (this.hideNoResults || (this.noResults = r.selectFirstElement(".f-auto-suggest-no-results", this.element), this.noResults && (this.noResultsItem = r.selectFirstElement(".c-menu-item span", this.noResults)), this.noResultsItem && (this.noResultsString = this.noResultsItem.textContent)), this.form = this.element.parentElement, this.form) && (this.addMenuStateAnnouncement(), r.addEvent(this.input, r.eventTypes.keyup, this.handleInputKeyup, !0), r.addEvent(this.input, r.eventTypes.keydown, this.handleInputKeydown, !0), r.addEvent(this.input, r.eventTypes.click, this.handleInputClick, !0), this.reconstructMenu(null, !0))
            }, t.prototype.teardown = function() {
                r.removeEvent(this.input, r.eventTypes.keyup, this.handleInputKeyup, !0);
                r.removeEvent(this.input, r.eventTypes.keydown, this.handleInputKeydown, !0);
                r.removeEvent(this.input, r.eventTypes.click, this.handleInputClick, !0);
                r.removeEvent(document.body, r.eventTypes.click, this.handleClickWhenMenuOpen);
                for (var n = 0; n < this.suggestions.length; ++n) r.removeEvent(this.suggestions[n], r.eventTypes.keydown, this.handleMenuKeydown), r.removeEvent(this.suggestions[n], r.eventTypes.click, this.suggestionClickListeners[n++]);
                this.form = null;
                this.input = null;
                this.menu = null;
                this.noResults = null;
                this.suggestions = null;
                this.selectedSuggestion = null
            }, t.prototype.searchable = function(n, t) {
                var i = "data-is-searchable";
                if (t === undefined) return n.getAttribute(i) !== "false";
                n.setAttribute(i, t.toString())
            }, t.prototype.publish = function(n, t) {
                if (n.onMatchPatternChanged && t.notification === "onMatchPatternChanged") n.onMatchPatternChanged(t.properties);
                else if (n.onSuggestionSelected && t.notification === "onSuggestionSelected") n.onSuggestionSelected(t.properties)
            }, t.prototype.handleInputArrowKey = function(n) {
                var t = this.suggestions,
                    r = this.suggestions ? this.suggestions.length : 0,
                    i;
                r > 0 && (!this.selectedSuggestion && n ? this.selectSuggestion(t[r - 1]) : this.selectedSuggestion ? (i = t.indexOf(this.selectedSuggestion), n && i === 0 ? this.selectSuggestion(t[r - 1]) : n ? this.selectSuggestion(t[i - 1]) : i === r - 1 ? this.selectSuggestion(t[0]) : this.selectSuggestion(t[i + 1])) : this.selectSuggestion(t[0]))
            }, t.prototype.handleMenuArrowKey = function(n) {
                var i = this.suggestions,
                    u = this.suggestions ? this.suggestions.length : 0,
                    t;
                u > 0 && (t = i.indexOf(this.selectedSuggestion), n && t === 0 || !n && t === u - 1 ? (this.input.value = this.cachedInputValue, this.setFocusToInput(), this.selectedSuggestion.setAttribute("data-selected", "false"), r.selectFirstElement("li > a, li > span", this.selectedSuggestion).setAttribute("aria-selected", "false"), this.selectedSuggestion = null) : n ? this.selectSuggestion(i[t - 1]) : this.selectSuggestion(i[t + 1]))
            }, t.prototype.selectSuggestion = function(n, t) {
                var i, u, f;
                (t === void 0 && (t = !1), n) && (this.selectedSuggestion && (this.selectedSuggestion.setAttribute("data-selected", "false"), r.selectFirstElement("li > a, li > span", this.selectedSuggestion).setAttribute("aria-selected", "false")), this.selectedSuggestion = n, this.selectedSuggestion.setAttribute("data-selected", "true"), r.selectFirstElement("li > a, li > span", this.selectedSuggestion).setAttribute("aria-selected", "true"), r.selectFirstElement("li > a, li > span", this.selectedSuggestion).focus(), i = "product", this.searchable(this.selectedSuggestion) ? (u = r.getText(this.selectedSuggestion), this.input.value = u, i = "term") : this.publishInProgress.length === 0 && (this.input.value = ""), t && (this.hide(), f = this.suggestions.indexOf(this.selectedSuggestion), this.initiatePublish({
                    notification: "onSuggestionSelected",
                    properties: {
                        srchq: this.cachedInputValue,
                        suggestion: this.selectedSuggestion,
                        suggestionType: i,
                        aslinkpos: f,
                        qrylngth: this.cachedInputValue.length,
                        resultselected: this.selectedSuggestion.innerText
                    }
                }), this.searchable(this.selectedSuggestion) && typeof this.form.submit == "function" && this.form.submit()))
            }, t.prototype.hide = function() {
                this.menu.setAttribute(t.ariaHidden, "true");
                this.noResults && this.noResultsItem && (this.noResults.setAttribute(t.ariaHidden, "true"), this.noResultsItem.removeAttribute("aria-label"), this.noResultsItem.textContent = "");
                this.form.setAttribute(t.ariaExpanded, "false");
                r.setText(this.ariaLiveRegion, "");
                r.removeEvent(document.body, r.eventTypes.click, this.handleClickWhenMenuOpen)
            }, t.prototype.show = function() {
                if (u.isNullOrWhiteSpace(this.input.value)) {
                    this.hide();
                    return
                }
                if (this.form.setAttribute(t.ariaExpanded, "true"), this.suggestions && this.suggestions.length) r.setText(this.ariaLiveRegion, this.menuOpenLocString);
                else {
                    !this.hideNoResults && this.noResults && this.noResultsItem && (this.noResults.setAttribute(t.ariaHidden, "false"), this.noResultsItem.setAttribute("aria-label", this.noResultsString), this.noResultsItem.textContent = this.noResultsString);
                    this.menu.setAttribute(t.ariaHidden, "true");
                    return
                }!this.hideNoResults && this.noResults && this.noResults.setAttribute(t.ariaHidden, "true");
                this.menu.setAttribute(t.ariaHidden, "false");
                r.hasClass(this.menu, "f-auto-suggest-scroll") && r.css(this.menu, "maxHeight", this.suggestions[0].offsetHeight * this.itemScrollCount + "px");
                r.addEvent(document.body, r.eventTypes.click, this.handleClickWhenMenuOpen)
            }, t.prototype.closeMenuFromClick = function(n) {
                this.form.contains(n) || this.hide()
            }, t.prototype.reconstructMenu = function(n, t) {
                var s = this,
                    f, o, i, h, u, e;
                if (t === void 0 && (t = !1), this.suggestions = null, this.suggestionClickListeners = [], !t)
                    for (this.ignoreNextDOMChange = !0, r.removeInnerHtml(this.menu), f = 0, o = n; f < o.length; f++) {
                        i = o[f];
                        switch (i.type) {
                            case "string":
                                this.buildStringSuggestionHtml(i.value, i.attributes);
                                break;
                            case "product":
                                this.buildProductSuggestionHtml(i.value, i.attributes)
                        }
                    }
                for (this.suggestions = r.nodeListToArray(this.menu.children), h = function(n) {
                        r.addEvent(u.suggestions[n], r.eventTypes.keydown, u.handleMenuKeydown);
                        r.addEvent(u.suggestions[n], r.eventTypes.click, u.suggestionClickListeners[n] = function() {
                            s.selectSuggestionFromClick(s.suggestions[n])
                        })
                    }, u = this, e = 0; e < this.suggestions.length; ++e) h(e);
                return !!this.selectedSuggestion
            }, t.prototype.addMenuStateAnnouncement = function() {
                this.ariaLiveRegion || (this.ariaLiveRegion = document.createElement("div"), r.addClass(this.ariaLiveRegion, "x-screen-reader"), this.ariaLiveRegion.setAttribute("aria-live", "assertive"), this.input.parentNode.insertBefore(this.ariaLiveRegion, this.input.nextSibling), this.ignoreNextDOMChange = !0, this.menuOpenLocString = this.element.getAttribute("data-f-loc-menu-open") || t.menuOpenFallbackString)
            }, t.prototype.highlight = function(n) {
                var t = new RegExp(this.input.value, "ig");
                return n.replace(t, function(n) {
                    return "<b>" + n + "<\/b>"
                })
            }, t.selector = ".m-auto-suggest", t.typeName = "AutoSuggest", t.menuOpenFallbackString = "results are available, use up and down arrow keys to navigate.", t.defaultItemScrollCount = 5, t.minimumItemScrollCount = 2, t.ariaHidden = "aria-hidden", t.ariaExpanded = "aria-expanded", t.telemetryCtNonProduct = "0", t.telemetryCtProduct = "4", t
        }(i.Publisher);
        t.AutoSuggest = e
    });
    require(["autosuggest"]);
    define("defaultFocus", ["jqReady!", "domReady!"], function() {
        function o(n) {
            return parseInt(n.getAttribute("tabindex")) >= 0 ? !0 : e.indexOf(n.tagName) !== -1 ? !0 : !1
        }

        function u(n, t) {
            for (var i, r = 0; r < n.children.length; ++r) i = n.children[r], o(i) && (t.top || (t.top = i), t.bottom = i), u(i, t)
        }

        function f(n) {
            var f = {
                    top: null,
                    bottom: null
                },
                t, i, r;
            u(n, f);
            t = document.createElement("div");
            i = document.createElement("div");
            t.setAttribute("tabindex", 0);
            i.setAttribute("tabindex", 0);
            t.setAttribute("data-tv-prevent-focus", !0);
            i.setAttribute("data-tv-prevent-focus", !0);
            t.addEventListener("focus", function() {
                f.bottom.focus()
            });
            i.addEventListener("focus", function() {
                f.top.focus()
            });
            n.insertAdjacentElement("afterbegin", t);
            n.insertAdjacentElement("beforeend", i);
            r = 10;
            t.style = "width:" + document.documentElement.clientWidth + "px;height:" + r + "px;opacity:0;position:fixed;left:0;top:100px;z-index:9999";
            i.style = "width:" + document.documentElement.clientWidth + "px;height:" + r + "px;opacity:0;position:fixed;left:0;top:" + (document.documentElement.clientHeight - r) + "px;z-index:9999"
        }

        function r(n) {
            var u, r, f, i;
            if (!n) return !1;
            u = n.querySelectorAll("[" + t + "]:not([disabled]):not([hidden])");
            r = [];
            for (i in u) u.hasOwnProperty(i) && r.push(u[i]);
            for (r = r.sort(function(n, i) {
                    var u = parseInt(n.getAttribute(t)),
                        r;
                    return u = isNaN(u) ? 0 : u, r = parseInt(i.getAttribute(t)), r = isNaN(r) ? 0 : r, u - r
                }), f = !1, i = 0; i < r.length; ++i)
                if (r[i].focus(), document.activeElement === r[i]) {
                    f = !0;
                    break
                } return f
        }
        var e = ["A", "BUTTON", "IFRAME", "INPUT", "SELECT", "TEXTAREA", "X-MS-WEBVIEW"],
            t = "data-focus-rank",
            n, i = [],
            s = function(t, u, e, o) {
                if (n && (n.disconnect(), n = null), t = t || document.body, t === document.body || t === document.documentElement) r(t);
                else {
                    var s = function(t) {
                            if (r(t)) {
                                n.disconnect();
                                n = null;
                                u && f(t);
                                window.WinStoreClient && window.WinStoreClient.navigateForwardInternally(e, t);
                                return
                            }
                            for (var i = document.activeElement; i && i.nodeType === Node.ELEMENT_NODE;) {
                                if (i === t) {
                                    n.disconnect();
                                    n = null;
                                    u && f(t);
                                    window.WinStoreClient && window.WinStoreClient.navigateForwardInternally(e, t);
                                    return
                                }
                                i = i.parentNode
                            }
                        },
                        h = function(n) {
                            for (var i, u, r = 0; r < n.length; ++r)
                                if (i = n[r], i.type === "childList")
                                    for (u = 0; u < i.addedNodes.length; ++u) i.addedNodes[u].nodeType == 1 && s(t);
                                else i.type === "attributes" && i.target.nodeType == 1 && s(t)
                        };
                    n = new window.MutationObserver(h);
                    n.observe(t, {
                        childList: !0,
                        attributes: !0,
                        subtree: !0
                    });
                    i.push(o || document.activeElement);
                    s(t)
                }
            },
            h = function(n) {
                for (var t; i.length > 0 && t !== document.activeElement;) t = i.pop(), t.focus(), window.WinStoreClient && window.WinStoreClient.navigateBackwardInternally(n);
                return t === document.activeElement
            };
        return {
            focus: s,
            tryRestorePreviousFocus: h,
            trySetDefaultFocusInContainer: r
        }
    });
    define("msccHelper", ["require", "exports", "htmlExtensions"], function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function n() {}
            return n.prototype.setConsent = function() {
                var n = window.mscc,
                    t;
                n && !n.hasConsent() && (n.setConsent(), t = document.querySelector("header.c-uhfh.context-uhf.f-transparent.js"), t && t.setAttribute("style", "margin-top:0px"))
            }, n.prototype.setAction = function() {
                var u = i.selectFirstElement(".c-uhfh"),
                    t, r, n;
                if (u && (t = u.getAttribute("data-msccaction"), t)) {
                    switch (t) {
                        case "1":
                            r = "https://uhf.microsoft.com/c1.gif";
                            break;
                        case "2":
                            r = "https://uhf.microsoft.com/c.gif";
                            break;
                        default:
                            return
                    }
                    n = document.createElement("img");
                    n.setAttribute("src", r);
                    n.id = "msccActionId";
                    n.setAttribute("role", "none");
                    document.body.appendChild(n)
                }
            }, n
        }();
        t.MsccHelper = r
    });
    define("navigationMenus", ["require", "exports", "utility", "htmlExtensions", "jquery", "msccHelper", "uhfUtility"], function(n, t, i, r, u, f, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = ".c-uhfh",
            ht = ".c-uhfh-actions.no-uhf-actions-exists",
            nt = ".js-global-head",
            c = "#uhf-c-nav",
            h = "#uhf-g-nav",
            ct = "#uhf-l-nav",
            o = ".js-nav-menu",
            it = ".js-subm-uhf-nav-link",
            a = ".f-mobile-title .c-action-trigger.glyph-chevron-left",
            v = ".f-mobile-title .c-action-trigger.glyph-chevron-right",
            y = ".js-global-head .c-action-trigger.glyph-global-nav-button",
            w = "#uhfCatLogoButton",
            rt = "[f-multi-parent=true]",
            lt = "#overflow-menu > div > ul > li > ul > li > button",
            b = ".js-mobile-title",
            tt = ".glyph-shopping-cart",
            l = "aria-expanded",
            k = "ms.interactiontype",
            ut = "aria-hidden",
            ft = "f-opened",
            et = "f-closed",
            p = "f-flip",
            d = "f-current",
            g = new f.MsccHelper,
            at = 400,
            ot = 10,
            st = "#magicTriangle",
            vt = ".c-sgl-stck",
            yt = function() {
                function n() {}
                return n.refreshFlips = function() {
                    u(" > ul", n.$menus).removeClass(p)
                }, n.closeMenu = function(t, i) {
                    var f = t.filter(n.$menus),
                        h = t.filter(n.$multiColumnMenus),
                        o, s, e, c;
                    if (f.length === 0)
                        if (h.length > 0) n.closeAllOpenMenus(), i && (o = h.parent(), o.length > 0 && (s = u(o.first()).siblings("button"), s.length > 0 && s[0].focus()));
                        else return;
                    (e = f.children("button"), e.length !== 0) && (e.attr(l, "false"), f.children("ul").attr(ut, "true"), e.attr(k) !== undefined && e.attr(k, "14"), i && e.focus(), u(p, f).removeClass(p), c = r.getDirection() === r.Direction.left ? "margin-left" : "margin-right", u(" > ul", f).css(c, "").height(""), f.closest("ul").height(""))
                }, n.openMenu = function(t) {
                    var o = t.filter(n.$menus),
                        h, e, a, y, w, ot, g, b, d, st;
                    if (o.length !== 0 && (h = o.children("button"), h.length !== 0)) {
                        h.attr(l, "true");
                        o.children("ul").attr(ut, "false");
                        h.focus();
                        h.attr(k) !== undefined && h.attr(k, "15");
                        var i = o.find("ul").first(),
                            f = i[0].getBoundingClientRect(),
                            c = u(window).width(),
                            v = r.getDirection(),
                            et = v === r.Direction.left ? "right" : "left";
                        if (o.is(n.$levelTwoMenus))
                            if (e = o.parent("ul"), e.height(""), i.height(""), a = e.height(), y = i.height(), a > y ? i.height(a) : a < y && e.height(y), w = v === r.Direction.left && f.right > c || v === r.Direction.right && f.left < 0, this.isSingleStackEnabled) ot = i.find("ul"), ot.length > 0 && (g = c > 1399 ? 254 : 178, w = v === r.Direction.left && f.right + g > c || v === r.Direction.right && f.left - g < 0), b = u("#overflow-menu-list"), b && (a = e.height(), d = b.height(), d > a ? (i.height(d), e.height(d)) : b.height(a)), w ? (e.addClass(p), e.find("ul").addClass(p), n.isFlipped = !0) : i.hasClass(p) && (n.isFlipped = !0);
                            else {
                                if (i.hasClass(p)) {
                                    n.isFlipped = !0;
                                    return
                                }
                                w && (e.find("ul").addClass(p), n.isFlipped = !0)
                            }
                        else if (!n.isMobile() && o.is(n.$menus.not(n.$levelTwoMenus))) {
                            var nt = i[0].offsetWidth,
                                s = 0,
                                tt = 20,
                                it = v === r.Direction.left ? "marginLeft" : "marginRight",
                                rt = h.children(".all-ms-nav"),
                                ft = i.hasClass("f-multi-column");
                            ft && f.right > c ? (s = f.right - c, tt = Math.abs(s - f.left) / 2, st = rt && c > 1450 ? 100 : 0, rt && !n.isSingleStackAndUhfActionsExists ? (s = 0, it = et) : s += tt - st) : ft && f.left < 0 ? rt && !n.isSingleStackAndUhfActionsExists ? (s = 0, it = et) : s = -f.left + tt : !ft && f.left + nt * 2 > c && f.right - nt * 2 < 0 && (s = nt - o[0].offsetWidth);
                            i[0].style[it] = -s + "px"
                        }
                    }
                }, n.isOpen = function(n) {
                    return n.children("button").attr(l) === "true"
                }, n.toggleMenu = function(t, i) {
                    if (n.isOpen(t)) {
                        var r = u(o, t).add(t);
                        n.closeMenu(r, i)
                    } else n.closeAllOpenMenus(t.parents()), n.openMenu(t)
                }, n.wasClickFromKeyboard = function(n) {
                    return n.keyCode === 13
                }, n.isMobile = function() {
                    return this.isSingleStackEnabled ? e.STViewports.getViewportSt() < 3 : i.Viewports.getViewport() < 3
                }, n.getOriginalGlobalTitle = function() {
                    return u(s + " " + b).data().globalTitle
                }, n.closeIfBlurred = function(t) {
                    !u(t.target).is(".c-uhf-nav-link") && (u(t.target).parents().is(c + ", " + h + ", " + ct) || u(t.target).is("" + y) || u(t.target).is("" + w)) || (n.isSingleStackEnabled && n.isMobile() ? u(t.target).is(".c-uhf-nav-link") || (u(t.relatedTarget).parents().is(c) ? n.toggleHamburgerSt(!0, !0) : n.toggleHamburgerSt(!0), u(t.relatedTarget).parents().is(h) ? n.toggleCategoryMenuSt(!0, !0) : n.toggleCategoryMenuSt(!0)) : n.closeAllOpenMenus())
                }, n.handleEscapeCloseMenu = function(t) {
                    if (t.keyCode === 27 && t.currentTarget === u(t.target).closest(o)[0]) {
                        var i = u(t.currentTarget).closest(o);
                        n.isOpen(i) ? n.closeMenu(i, !0) : n.isSingleStackEnabled && n.isMobile() ? (u(t.target).parents().is(c) ? n.toggleHamburgerSt(!0, !0) : n.toggleHamburgerSt(!0), u(t.target).parents().is(h) ? n.toggleCategoryMenuSt(!0, !0) : n.toggleCategoryMenuSt(!0)) : n.closeMenu(i.parent().closest(o), !0)
                    }
                }, n.closeOpenSiblingMenusOnFocusChange = function(t) {
                    var i = u(t.target).closest(o).first(),
                        r;
                    i.is(n.$menus) && (r = i.parents(o), n.closeAllOpenMenus(r.add(i)))
                }, n.refreshMenuItems = function() {
                    n.$menus = u(o);
                    n.$levelTwoMenus = u(o + " " + o);
                    n.$multiColumnMenus = u(".f-multi-column " + o);
                    n.handleMoveIntoDesktopViewport();
                    n.$levelTwoMenus.find("button").removeAttr("tabindex")
                }, n.closeAllOpenMenus = function(t) {
                    n.closeMenu(u(' > [aria-expanded="true"]', n.$menus).parent().not(t))
                }, n.initShowMagicTriangle = function() {
                    if (n.showMagicTriangle === !0 && u(st).length === 0) {
                        u(h).attr("style", "opacity:0.90;z-index:999");
                        u(h).find("ul").attr("style", "opacity:0.90");
                        u(c).attr("style", "opacity:0.90;z-index:999");
                        u(c).find("ul").attr("style", "opacity:0.90");
                        var t = '<svg style="height:100%;width:100%;position:absolute;left:0;top:0;background:#fffff0;opacity:0.4;z-index:100">';
                        t += '<polygon id="magicTriangle" points="0,0 0,0 0,0" style="fill:gray;"><\/polygon>';
                        t += "<\/svg>";
                        u("body").prepend(t)
                    }
                }, n.init = function() {
                    (u(document).documentMode || /Edge/.test(navigator.userAgent)) && u(s + " ul:hidden").each(function() {
                        u(this).parent().append(u(this).detach())
                    });
                    u(s).addClass("js").on("keyup", n.menuSelector, n.handleEscapeCloseMenu);
                    n.originalMobileTitle = u(b).text();
                    n.$menus = u(o);
                    n.$levelTwoMenus = u(o + " " + o);
                    n.$multiColumnMenus = u(".f-multi-column " + o);
                    n.pageDirection = r.getDirection();
                    u("" + s + vt).length > 0 && (n.isSingleStackEnabled = !0);
                    n.isMenuInitialized = !0;
                    n.isSingleStackAndUhfActionsExists = n.isSingleStackEnabled && u(ht).length === 0
                }, n.clearCustomMenuHeights = function() {
                    u(" > ul[style]", n.$menus).height("")
                }, n.handleMoveIntoDesktopViewport = function() {
                    n.isInMobileViewPort = !1;
                    n.openMenu(n.$multiColumnMenus);
                    n.clearCustomMenuHeights();
                    n.$multiColumnMenus.children("button").attr("tabindex", -1);
                    n.$menus = n.$menus.not(n.$multiColumnMenus);
                    n.$levelTwoMenus = n.$levelTwoMenus.not(n.$multiColumnMenus);
                    u("body").removeClass("body-overflow");
                    u(rt).attr("role", "presentation");
                    u(lt).removeAttr("role");
                    n.isSingleStackEnabled ? (n.toggleHamburgerSt(!0), n.toggleCategoryMenuSt(!0), u(y).off("click", n.handleHamburgerClickST), u(w).off("click", n.handleCategoryMenuClickSt), u(s).off("click", n.handleMobileMenuClickSt), u(document).off("click", n.closeIfBlurred)) : u("#meControl").show();
                    u(".js-cat-head").show();
                    u(c).show();
                    u(h).show();
                    u(s + " .c-search").show();
                    u(s + " " + tt).show();
                    u(document).off("click", n.closeIfBlurred).on("click", n.closeIfBlurred);
                    u(document).off("focusin", n.closeIfBlurred).on("focusin", n.closeIfBlurred);
                    u(y).off("click", n.toggleHamburger);
                    u(a).off("click", n.handleMobilePrimaryButton);
                    u(v).off("click", n.handleMobileSecondaryButton);
                    u(s).off("click", n.handleMobileMenuClick).off("click", n.handleDesktopMenuClick).on("click", n.handleDesktopMenuClick).off("focusin", n.closeOpenSiblingMenusOnFocusChange).on("focusin", n.closeOpenSiblingMenusOnFocusChange).off("touchstart", n.setTouched).on("touchstart", n.setTouched).off("pointerenter", n.setTouchedIfPointer).on("pointerenter", n.setTouchedIfPointer).off("mouseout", n.handleDesktopMenuMouseLeave).on("mouseout", n.handleDesktopMenuMouseLeave);
                    if (n.resetTitleMobileText(), n.closeAllOpenMenus(), u(s).data("magict") === !0 && (n.isMagicTriangleEnabled = !0), n.isMagicTriangleEnabled && u(s).data("showmagict") === !0 && (n.showMagicTriangle = !0, n.initShowMagicTriangle()), n.isMagicTriangleEnabled) u(o + " " + o).off("mousemove", n.handleDesktopMenuMouseEnter).on("mousemove", n.handleDesktopMenuMouseEnter);
                    else u(s).off("mouseover", n.handleDesktopMenuMouseEnter).on("mouseover", n.handleDesktopMenuMouseEnter)
                }, n.setTouchedIfPointer = function(t) {
                    t && t.originalEvent.pointerType === "touch" && n.setTouched()
                }, n.setTouched = function() {
                    n.wasTouched = !0
                }, n.handleDesktopMenuClick = function(t) {
                    var i, r;
                    if (u(t.target).is(it)) {
                        n.closeAllOpenMenus();
                        return
                    }
                    t.target.tagName !== "A" && (i = u(t.target).closest(o), i.is(n.$menus)) && ((t.preventDefault(), u("> a, > button", i).hasClass("f-hidden")) || (g.setConsent(), r = n.wasClickFromKeyboard(t), n.toggleMenu(i, r)))
                }, n.calcTriangleArea = function(n, t, i) {
                    return Math.abs((n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (n.y - t.y)) / 2)
                }, n.isMagicTriangleMenu = function(t) {
                    return !!n.$prevMenu && t[0] === n.$prevMenu[0]
                }, n.isPointInMagicTriangle = function() {
                    var t = n.calcTriangleArea(n.pointA, n.pointB, n.pointC),
                        i = n.calcTriangleArea(n.pointA, n.pointB, n.currentPoint),
                        r = n.calcTriangleArea(n.pointB, n.pointC, n.currentPoint),
                        u = n.calcTriangleArea(n.pointC, n.pointA, n.currentPoint);
                    return t !== 0 && t === i + r + u
                }, n.resetMagicTriangle = function(t) {
                    t === void 0 && (t = !0);
                    n.clearMagicTriangleTimer();
                    n.isMagicTriangleSet = !1;
                    t && (n.pointA = {
                        x: 0,
                        y: 0
                    }, n.pointB = {
                        x: 0,
                        y: 0
                    }, n.pointC = {
                        x: 0,
                        y: 0
                    }, n.renderMagicTriangle(), n.$prevMenu = undefined)
                }, n.renderMagicTriangle = function() {
                    if (n.showMagicTriangle) {
                        var t = n.pointA.x + "," + n.pointA.y;
                        t += " " + n.pointB.x + "," + n.pointB.y;
                        t += " " + n.pointC.x + "," + n.pointC.y;
                        u(st).attr("points", t)
                    }
                }, n.setupMagicTriangle = function(t) {
                    n.setFirstPointOfTriangle();
                    var i = t[0].getBoundingClientRect();
                    !n.isFlipped && n.pageDirection === r.Direction.left || n.isFlipped && n.pageDirection === r.Direction.right ? (n.pointB = {
                        x: i.left + window.pageXOffset,
                        y: i.top + window.pageYOffset
                    }, n.pointC = {
                        x: i.left + window.pageXOffset,
                        y: i.bottom + window.pageYOffset
                    }) : (n.pointB = {
                        x: i.right + window.pageXOffset,
                        y: i.top + window.pageYOffset
                    }, n.pointC = {
                        x: i.right + window.pageXOffset,
                        y: i.bottom + window.pageYOffset
                    });
                    n.isMagicTriangleSet = !0;
                    n.renderMagicTriangle()
                }, n.clearMagicTriangleTimer = function() {
                    clearTimeout(n.magicTriangleTimer);
                    n.$timerTargetMenu = undefined
                }, n.delayToggleMagicTriangleMenus = function(t) {
                    n.$timerTargetMenu && t[0] === n.$timerTargetMenu[0] || (n.clearMagicTriangleTimer(), n.$timerTargetMenu = t, n.magicTriangleTimer = setTimeout(n.toggleMagicTriangleMenus, at, t))
                }, n.haveMenuItems = function(n) {
                    return u(n.find("ul").first()).length !== 0
                }, n.toggleMagicTriangleMenus = function(t) {
                    var i = !1,
                        r = n.isOpen(t),
                        u;
                    (r || (n.$prevMenu ? (n.closeMenu(n.$prevMenu), n.$prevMenu = undefined) : i = !0), n.haveMenuItems(t)) && (i && n.closeAllOpenMenus(t.parents(o)), u = t.find("ul").first(), r || (n.isFlipped = !1, n.openMenu(t)), n.setupMagicTriangle(u), n.$prevMenu = t)
                }, n.setFirstPointOfTriangle = function() {
                    n.pointA = n.currentPoint;
                    !n.isFlipped && n.pageDirection === r.Direction.left || n.isFlipped && n.pageDirection === r.Direction.right ? n.pointA.x -= ot : n.pointA.x += ot
                }, n.isPrevMenuSibling = function(t) {
                    return !!n.$prevMenu && t.siblings().is(n.$prevMenu)
                }, n.processMagicTriangle = function(t, i) {
                    n.currentPoint = {
                        x: t.pageX,
                        y: t.pageY
                    };
                    n.isMagicTriangleSet ? n.isMagicTriangleMenu(i) ? (n.clearMagicTriangleTimer(), n.setFirstPointOfTriangle(), n.showMagicTriangle && u(t.target.nextElementSibling).is("ul") && n.renderMagicTriangle()) : n.isPrevMenuSibling(i) ? n.isPointInMagicTriangle() ? n.delayToggleMagicTriangleMenus(i) : n.resetMagicTriangle(!1) : n.resetMagicTriangle() : n.toggleMagicTriangleMenus(i)
                }, n.handleDesktopMenuMouseEnter = function(t) {
                    if (!n.isInMobileViewPort) {
                        var i = u(t.target).closest(o);
                        if (n.wasTouched || !i.is(n.$levelTwoMenus)) return;
                        n.isMagicTriangleEnabled ? n.processMagicTriangle(t, i) : (n.closeAllOpenMenus(i.parents()), n.openMenu(i))
                    }
                }, n.handleDesktopMenuMouseLeave = function(t) {
                    var i = u(t.target).closest(o);
                    n.wasTouched || !i.is(n.$levelTwoMenus) || i[0] && i[0].contains(t.relatedTarget) || (n.isMagicTriangleEnabled ? t.relatedTarget && u(t.relatedTarget).closest(o).is(n.$levelTwoMenus) || (n.currentPoint = {
                        x: t.pageX,
                        y: t.pageY
                    }, n.isPointInMagicTriangle() || (n.haveMenuItems(i) ? n.closeMenu(i) : i.parents(o).length > 1 && n.closeMenu(u(i.parents(o).first()))), n.resetMagicTriangle()) : n.closeMenu(i))
                }, n.handleMobileMenuClick = function(t) {
                    var i, r;
                    if (u(t.target).is("nav a")) {
                        n.toggleHamburger();
                        return
                    }(i = u(t.target).closest(o), i.is(n.$menus) && !n.isOpen(i)) && (r = u(t.target).text(), n.setTitleMobileText(r), u(a).show(), u(v).hide(), n.openMenu(i))
                }, n.handleMobileMenuClickSt = function(t) {
                    var i, r;
                    if (u(t.target).is("nav a")) {
                        n.toggleHamburgerSt(!0);
                        n.toggleCategoryMenuSt(!0);
                        return
                    }(i = u(t.target).closest(o), i.is(n.$menus)) && (n.isOpen(i) ? (r = i.add(i.find(o + " [aria-expanded='true']").parent()), n.closeMenu(r)) : n.openMenu(i))
                }, n.handleMoveIntoMobileViewport = function() {
                    if (n.isInMobileViewPort = !0, n.$menus = n.$menus.add(n.$multiColumnMenus), n.$multiColumnMenus.children("button").attr("tabindex", null), u(s).off("touchstart", n.setTouched).off("pointerenter", n.setTouchedIfPointer).off("mouseout", n.handleDesktopMenuMouseLeave).off("click", n.handleDesktopMenuClick).off("focusin", n.closeOpenSiblingMenusOnFocusChange), u(document).off("click", n.closeIfBlurred), u(document).off("focusin", n.closeIfBlurred), n.isMagicTriangleEnabled ? u(o + " " + o).off("mousemove", n.handleDesktopMenuMouseEnter) : u(s).off("mouseover ", n.handleDesktopMenuMouseEnter), n.isMagicTriangleEnabled = !1, n.showMagicTriangle = !1, u(v).hide(), u(rt).removeAttr("role"), u(c).hide(), u(h).hide(), u(y).attr(l, "false"), u(s + " .c-search").show(), u(s + " " + tt).show(), n.isSingleStackEnabled) {
                        u(y).off("click", n.handleHamburgerClickST).on("click", n.handleHamburgerClickST);
                        u(w).off("click", n.handleCategoryMenuClickSt).on("click", n.handleCategoryMenuClickSt);
                        u(s).off("click", n.handleMobileMenuClickSt).on("click", n.handleMobileMenuClickSt);
                        u(document).on("click", n.closeIfBlurred).on("focusin", n.closeIfBlurred);
                        n.toggleHamburgerSt(!0);
                        n.toggleCategoryMenuSt(!0)
                    } else {
                        u("#meControl").hide();
                        u(nt).addClass(et).removeClass(ft);
                        u(y).off("click", n.toggleHamburger).on("click", n.toggleHamburger);
                        u(a).off("click", n.handleMobilePrimaryButton).on("click", n.handleMobilePrimaryButton);
                        u(v).off("click", n.handleMobileSecondaryButton).on("click", n.handleMobileSecondaryButton);
                        u(s).off("click", n.handleMobileMenuClick).on("click", n.handleMobileMenuClick);
                        n.closeAllOpenMenus()
                    }
                }, n.setTitleMobileText = function(n) {
                    u(b).text(n)
                }, n.hasCategoryMenu = function() {
                    return u(c).length > 0
                }, n.hasGlobalNavItems = function() {
                    return u(h).length > 0
                }, n.resetTitleMobileText = function() {
                    var i = u(b),
                        t = n.originalMobileTitle;
                    t ? i.text(t) : n.originalMobileTitle = this.getOriginalGlobalTitle()
                }, n.handleMobilePrimaryButton = function() {
                    var r = u(' > [aria-expanded="true"]', n.$menus),
                        t, i;
                    r[0] ? (t = r.last().parent(o), n.closeMenu(t), i = !u(' > [aria-expanded="true"]', n.$menus)[0], i && !u(c).is(":visible") ? (u(a).hide(), n.hasCategoryMenu() && u(v).show(), n.setTitleMobileText(n.getOriginalGlobalTitle())) : i && u(c).is(":visible") ? (n.resetTitleMobileText(), n.hasGlobalNavItems() || u(a).hide()) : n.setTitleMobileText(t.parents(o).first().children("button").first().text())) : (u(c).hide(), u(h).show(), u(a).hide(), n.hasCategoryMenu() && u(v).show(), n.setTitleMobileText(n.getOriginalGlobalTitle()))
                }, n.handleMobileSecondaryButton = function() {
                    u(h).hide();
                    u(c).show();
                    u(a).show();
                    u(v).hide();
                    n.resetTitleMobileText()
                }, n.toggleHamburger = function() {
                    var t = u(y),
                        i = "#meControl, " + c + ", " + h,
                        r = s + " .c-search,\n                " + s + " " + tt;
                    t.attr(l) === "false" ? (u(nt).addClass("f-opened").removeClass("f-closed"), u(r).hide(), u(i).show(), u("body").addClass("body-overflow"), t.attr(l, "true"), n.hasCategoryMenu() && n.hasGlobalNavItems() ? (u(a).show(), u(v).hide(), u(h).hide()) : u(a + ", " + v).hide()) : (u(nt).removeClass(ft).addClass(et), u(r).show(), u(i).hide(), u("body").removeClass("body-overflow"), t.attr(l, "false"));
                    n.isSingleStackEnabled || (n.resetTitleMobileText(), n.closeAllOpenMenus());
                    g.setConsent()
                }, n.handleHamburgerClickST = function() {
                    n.toggleHamburgerSt()
                }, n.toggleHamburgerSt = function(t, i) {
                    t === void 0 && (t = !1);
                    i === void 0 && (i = !1);
                    var f = u(y),
                        e = u(w),
                        r = c;
                    u(r).length === 0 && (r = h);
                    t || f.attr(l) === "true" ? (u(r).hide(), f.attr(l, "false"), e.length !== 0 && e.removeAttr("style"), n.closeAllOpenMenus(), i && f.focus(), r === c && u(r + " .c-button-logo + .f-multi-column").attr("aria-hidden", "true")) : ((r !== h || u(w).attr(l) === "true") && n.toggleCategoryMenuSt(!0), f.attr(l, "true"), e.length !== 0 && e.attr("style", "display: none !important"), u(r).show(), r === c ? (u(r + " .c-button-logo + .f-multi-column").attr("aria-hidden", "false"), u(r + " .c-button-logo + .f-multi-column").find("button,a").first().focus()) : u(r).find("button, a").first().focus());
                    t || g.setConsent()
                }, n.handleCategoryMenuClickSt = function() {
                    n.toggleCategoryMenuSt()
                }, n.toggleCategoryMenuSt = function(t, i) {
                    t === void 0 && (t = !1);
                    i === void 0 && (i = !1);
                    var r = u(w);
                    t || r.attr(l) === "true" ? (u(h).hide(), r.attr(l, "false"), n.closeAllOpenMenus(), i && r.focus()) : (u(y).attr(l) === "true" && n.toggleHamburgerSt(!0), r.attr(l, "true"), u(h).show(), u(h).find("button,a").first().focus());
                    t || g.setConsent()
                }, n.resetNavHighlight = function(n) {
                    r.removeClass(r.selectElements("." + d, n), d)
                }, n.setCurrentMenuItemId = function(t) {
                    var i = null,
                        f = r.selectFirstElement(s);
                    try {
                        i = r.selectFirstElement("#" + t, f)
                    } catch (e) {
                        return
                    }
                    i && (n.resetNavHighlight(f), r.addClass(i, d), u(i).parents("ul").siblings("button").addClass(d))
                }, n.isMenuInitialized = !1, n.wasTouched = !1, n.isMagicTriangleEnabled = !1, n.showMagicTriangle = !1, n.isSingleStackEnabled = !1, n.isInMobileViewPort = !1, n.isMagicTriangleSet = !1, n.isFlipped = !1, n.currentPoint = {
                    x: 0,
                    y: 0
                }, n.pointA = {
                    x: 0,
                    y: 0
                }, n.pointB = {
                    x: 0,
                    y: 0
                }, n.pointC = {
                    x: 0,
                    y: 0
                }, n.mobilePrimaryButtonSelector = a, n.globalNavSelector = h, n.categoryNavSelector = c, n.mobileSecondaryButtonSelector = v, n.mobileTitleSelector = b, n.menuSelector = o, n.subMenuLinkSelector = it, n.uhfSelector = s, n.originalMobileTitle = "", n.isSingleStackAndUhfActionsExists = !0, n
            }();
        t.NavigationMenus = yt
    });
    define("shoppingCart", ["require", "exports", "jquery", "htmlExtensions"], function(n, t, i, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = "x-hidden",
            f = function() {
                function n() {
                    if (this.shoppingCartFrame = document.getElementById(n.shoppingCartFrameId), !this.shoppingCartFrame) return null;
                    var t = this.shoppingCartFrame.getAttribute("data-src");
                    !t || this.shoppingCartFrame.setAttribute("src", t);
                    i(window).on("message onmessage", this.handleEvent)
                }
                return n.setTelemetryAttr = function(n, t, r, u) {
                    var e = i(n).attr(t),
                        f;
                    if (e) {
                        f = undefined;
                        try {
                            if (f = JSON.parse(e), !f) return;
                            f[r] = u
                        } catch (o) {
                            return
                        }
                        i(n).attr(t, JSON.stringify(f))
                    }
                }, n.prototype.handleEvent = function(t) {
                    var s = t.originalEvent.data,
                        f = "0",
                        c = "qtyincart",
                        l = "data-m",
                        e = r.selectFirstElement(n.shoppingCartCountSelector),
                        o = r.selectFirstElement(n.shoppingCartLabel),
                        h, a;
                    if (s && s.split && e && (h = s.split("="), h[0] === "DR_Cart_Count")) {
                        if (f = h[1], f === "0") {
                            r.addClass(e, u);
                            o && r.removeClass(o, u);
                            n.setTelemetryAttr(n.shoppingCartAnchorId, l, c, f);
                            return
                        }
                        o && r.addClass(o, u);
                        r.removeClass(e, u);
                        e.innerText = f;
                        a = i(n.shoppingCartAnchorId).attr("title").replace(/\d+/, f);
                        i(n.shoppingCartAnchorId).attr("title", a);
                        n.setTelemetryAttr(n.shoppingCartAnchorId, l, c, f)
                    }
                }, n.shoppingCartFrameId = "shell-cart-count", n.shoppingCartCountSelector = ".shopping-cart-amount", n.shoppingCartAnchorId = "#uhf-shopping-cart", n.shoppingCartLabel = ".c-cart-lbl", n
            }();
        t.ShoppingCart = f
    });
    __extends = this && this.__extends || function() {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(n, t) {
            n.__proto__ = t
        } || function(n, t) {
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }();
    __extends = this && this.__extends || function() {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(n, t) {
            n.__proto__ = t
        } || function(n, t) {
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }();
    define("uhfAutoSuggest", ["require", "exports", "autosuggest", "htmlExtensions", "utility", "uhfTelemetryHelper", "stringExtensions"], function(n, t, i, r, u, f, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = {
                hideNoResults: !0
            },
            s = function(n) {
                function t() {
                    var i = n.call(this, r.selectFirstElement(t.autoSuggestSelector), o) || this,
                        h, s;
                    if (i.latestTimestampReceived = 0, i.autoSuggestCallback = function(n) {
                            var t = window.msCommonShell && window.msCommonShell.as,
                                u = {
                                    telemetryType: "jsll",
                                    event: "KE",
                                    trackType: "searchInitiate",
                                    srchq: n.pattern
                                },
                                r;
                            f.trackEvent(u);
                            t && t.callback ? t.callback({
                                text: n.pattern,
                                response: i.updateSuggestions
                            }) : t && t.legacyCallback ? t.legacyCallback({
                                text: n.pattern,
                                response: i.mapLegacyCallback
                            }) : t && t.ussAPIParams && t.ussAPIParams.clientId && t.ussAPIParams.sources ? (t.ussAPIParams.query = n.pattern, t.ussAPIParams.market = t.ussAPIParams.market || i.params.market, r = i.autoSuggestUrl + "?" + $.param(t.ussAPIParams), i.ajaxCall(r, i.updateSuggestions)) : i.params && i.params.clientId && i.params.sources && (i.params.query = n.pattern, r = i.autoSuggestUrl + "?" + $.param(i.params), i.ajaxCall(r, i.updateSuggestions))
                        }, i.suggestionSelectedCallback = function(n) {
                            if (n && n.suggestion && n.suggestionType) {
                                try {
                                    f.fireBeacon(n.suggestion.firstChild.getAttribute("iris-onclick-url"))
                                } catch (r) {}
                                if (event.type && i.telemetryType) {
                                    var t = {
                                        trackType: "autosuggest",
                                        telemetryType: i.telemetryType,
                                        event: event.type === "click" ? "CL" : "KE",
                                        title: n.suggestion.title,
                                        suggestionType: n.suggestionType,
                                        aslinkpos: n.aslinkpos,
                                        qrylngth: n.qrylngth,
                                        resultselected: n.resultselected,
                                        srchq: n.srchq
                                    };
                                    f.trackEvent(t)
                                }
                            }
                        }, i.mapLegacyCallback = function(n) {
                            for (var t, r = [], u = 0, f = n.suggestions; u < f.length; u++) t = f[u], t.image && t.title ? r.push({
                                type: "product",
                                value: {
                                    title: t.title,
                                    targetUrl: t.target,
                                    imageSrc: t.image
                                }
                            }) : t.title && r.push({
                                type: "string",
                                value: t.title
                            });
                            i.updateSuggestions(r)
                        }, i.ajaxCall = function(n, t) {
                            var u = Date.now(),
                                r = new XMLHttpRequest,
                                f = i;
                            r.open("GET", n, !0);
                            r.onreadystatechange = function() {
                                if (this.readyState === 4 && this.status >= 200 && this.status < 400) try {
                                    f.processJsonData(u, JSON.parse(this.responseText), t)
                                } catch (n) {}
                            };
                            r.send();
                            r = null
                        }, i.responseHandlers = {
                            Term: function(n) {
                                var t = [];
                                return i.telemetryType === "wedcs" && t.concat(i.getWedcsAttributes(n.Txt)), {
                                    type: "string",
                                    value: n.Txt,
                                    attributes: t
                                }
                            },
                            Product: function(n) {
                                for (var r, a, s = null, u = [], h = !1, c = null, o = 0, l = n.Metas; o < l.length; o++) {
                                    if (r = l[o], r.Key === "AppBgColor") {
                                        s = r.Value;
                                        continue
                                    }
                                    if (r.Key === "IrisBiClickBeacon") {
                                        h = !0;
                                        u.push({
                                            name: "iris-onclick-url",
                                            value: r.Value
                                        });
                                        continue
                                    }
                                    if (r.Key === "BigCatalogId") {
                                        c = r.Value;
                                        continue
                                    }
                                    if (r.Key === "IrisBiImpressionBeacon") {
                                        f.fireBeacon(r.Value);
                                        continue
                                    }
                                }
                                return i.telemetryType === "wedcs" && u.concat(i.getWedcsAttributes(n.Title)), a = h && !e.isNullOrWhiteSpace(n.Source) ? n.Source : i.familyNames[n.Source], {
                                    type: "product",
                                    value: {
                                        title: n.Title,
                                        category: a,
                                        backgroundColor: s,
                                        imageSrc: t.transformImageUrl(n.ImageUrl),
                                        targetUrl: n.Url,
                                        isImageRound: n.Source === "MusicArtists" || n.Source === "VideoActor",
                                        pid: c
                                    },
                                    attributes: u
                                }
                            }
                        }, i.configurationElement = r.selectFirstElement(t.configElementSelector), i.configurationElement) {
                        i.autoSuggestUrl = i.configurationElement.getAttribute(t.apiUrlAttribute);
                        h = r.selectFirstElement("[" + t.telemetryAttribute + "]", i.configurationElement);
                        !h || (i.telemetryType = h.getAttribute(t.telemetryAttribute));
                        s = void 0;
                        try {
                            s = u.parseJson(i.configurationElement.getAttribute(t.configDataAttribute))
                        } catch (c) {}
                        i.autoSuggestUrl && s && s.queryParams && (i.params = s.queryParams, i.familyNames = s.familyNames);
                        i.subscribe({
                            onMatchPatternChanged: i.autoSuggestCallback,
                            onSuggestionSelected: i.suggestionSelectedCallback
                        })
                    }
                    return i
                }
                return __extends(t, n), t.transformImageUrl = function(n) {
                    return n && n.indexOf(t.badImageDomain) === 0 ? n.replace(t.badImageDomain, t.goodImageDomain) : n
                }, t.prototype.processJsonData = function(n, t, i) {
                    var r, f, h, u, e, c, s, l, o;
                    if (t && t.ResultSets && !(n < this.latestTimestampReceived)) {
                        for (this.latestTimestampReceived = n, r = [], f = 0, h = t.ResultSets; f < h.length; f++)
                            if (u = h[f], u.Source.toLowerCase().indexOf("-terms") !== -1)
                                for (e = 0, c = u.Suggests; e < c.length; e++) o = c[e], r.push(this.responseHandlers.Term(o));
                            else if (u.Source.toLowerCase().indexOf("-products") !== -1)
                            for (s = 0, l = u.Suggests; s < l.length; s++) o = l[s], r.push(this.responseHandlers.Product(o));
                        r && i(r)
                    }
                }, t.prototype.getWedcsAttributes = function(n) {
                    var t = [];
                    return n.length > 0 && (t.push({
                        name: "ms.title",
                        value: n
                    }), t.push({
                        name: "ms.cmpnm",
                        value: n
                    }), t.push({
                        name: "ms.cn",
                        value: n
                    })), t
                }, t.autoSuggestSelector = "#universal-header-search-auto-suggest-transparent", t.configElementSelector = ".js-global-head .c-search", t.configDataAttribute = "data-seautosuggest", t.apiUrlAttribute = "data-seautosuggestapi", t.telemetryAttribute = "data-tel", t.badImageDomain = "//compass.", t.goodImageDomain = "https://compass-ssl.", t
            }(i.AutoSuggest);
        t.UhfAutoSuggest = s
    });
    __extends = this && this.__extends || function() {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(n, t) {
            n.__proto__ = t
        } || function(n, t) {
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }();
    __extends = this && this.__extends || function() {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(n, t) {
            n.__proto__ = t
        } || function(n, t) {
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }();
    define("uhfCookieAlert", ["require", "exports", "htmlExtensions", "utility", "publisher"], function(n, t, i, r, u) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = function(n) {
            function t(t) {
                var u = n.call(this, t) || this,
                    f;
                return (u.cookieAlertElement = t, u.closeSelector = "button.c-action-trigger.glyph-cancel", u.cookieName = "uhf_hide_cn", u.hiddenClass = "x-hidden", u.msccCookieName = "MSCC", u.getHeight = function() {
                    return u.cookieAlertElement ? i.getClientRect(u.cookieAlertElement).height : 0
                }, u.closeAndSetCookie = function() {
                    r.setCookie(u.cookieName, "true", "/", 365);
                    i.addClass(u.cookieAlertElement, u.hiddenClass);
                    u.initiatePublish({
                        height: u.getHeight()
                    })
                }, !t || !(r.getCookie(u.cookieName) !== "true") || r.getCookie(u.msccCookieName) !== null) ? u : (i.removeClass(u.cookieAlertElement, u.hiddenClass), f = i.selectFirstElement(u.closeSelector, t), i.addEvent(f, i.eventTypes.click, u.closeAndSetCookie), u)
            }
            return __extends(t, n), t.prototype.publish = function(n, t) {
                n.onBannerClosed(t)
            }, t
        }(u.Publisher);
        t.UhfCookieAlert = f
    });
    define("uhfCookieAuditor", ["require", "exports", "htmlExtensions", "stringExtensions", "uhfTelemetryHelper"], function(n, t, i, r, u) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f;
        (function(n) {
            function t() {
                try {
                    var n = i.selectFirstElement(".c-uhfh").getAttribute("data-ckrate");
                    return Math.random() < parseFloat(n)
                } catch (t) {
                    return !1
                }
            }

            function f() {
                if (t() && window.btoa && Array.prototype.map) {
                    var n = window.btoa(document.cookie.split(";").map(function(n) {
                            return r.trim(n.substr(0, n.indexOf("=")))
                        }).sort().join(";")),
                        i = "https://uhf.microsoft.com/_log?c=" + n + "&h=" + window.location.hostname;
                    u.fireBeacon(i)
                }
            }
            n.audit = f
        })(f = t.UhfCookieAuditor || (t.UhfCookieAuditor = {}))
    });
    define("uhfGreenId", ["require", "exports", "htmlExtensions", "stringExtensions"], function(n, t, i, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {
            function n() {}
            return n.prototype.createGreenIdIframe = function() {
                var t = i.selectFirstElement("#uhf-footer"),
                    u = window.mscc,
                    n;
                if (t !== null) {
                    n = document.createElement("iframe");
                    n.id = "uhfGreenId";
                    n.setAttribute("role", "none");
                    var f = t.getAttribute("data-uhf-green-id"),
                        e = t.getAttribute("data-uhf-mscc-rq"),
                        o = "https://fpt.microsoft.com/tags?session_id=" + f;
                    n.src = o;
                    r.isNullOrWhiteSpace(f) || (!r.isNullOrWhiteSpace(e) && e === "false" || typeof u == "undefined" || u.hasConsent()) && document.body.appendChild(n)
                }
            }, n
        }();
        t.UhfGreenId = u
    });
    define("uhfKeyboardNavigationMenu", ["require", "exports", "navigationMenus", "uhfKeyboardNavigationSubMenu", "htmlExtensions", "jquery"], function(n, t, i, r, u, f) {
        "use strict";
        var y;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = u.selectFirstElement(".c-uhfh.c-sgl-stck #uhfLogo"),
            s = u.selectFirstElement(".c-uhfh.c-sgl-stck #uhfCatLogo"),
            h = u.selectFirstElement(".c-uhfh.c-sgl-stck .all-ms-nav"),
            c = u.selectFirstElement(".c-uhfh.c-sgl-stck #search"),
            a = u.selectFirstElement(".c-uhfh.c-sgl-stck #uhf-shopping-cart"),
            v = u.selectFirstElement(".c-uhfh.c-sgl-stck #uhf-shopping-cart .c-cart-lbl"),
            l = u.selectFirstElement(".c-uhfh.c-sgl-stck #language-selector"),
            p = u.selectFirstElement(".c-uhfh.c-sgl-stck .c-uhfh-gnav > ul"),
            e = function() {
                function n(n, t) {
                    var r = this;
                    this.isMenubarItem = !1;
                    this.isMultiColumnItem = !1;
                    this.initializeMenus = function() {
                        i.NavigationMenus.init();
                        i.NavigationMenus.handleMoveIntoDesktopViewport();
                        !r.menuElement || u.removeEvent(r.menuElement, u.eventTypes.click, r.initializeMenus)
                    };
                    this.handleMenuBarKeydown = function(n) {
                        if (!i.NavigationMenus.isMobile()) {
                            var f = n.key,
                                t = !1;
                            switch (n.keyCode) {
                                case 32:
                                case 13:
                                case 40:
                                    i.NavigationMenus.closeAllOpenMenus();
                                    r.subMenu && (i.NavigationMenus.handleDesktopMenuClick(n), r.subMenu.setFocusToFirstItem(), t = !0);
                                    break;
                                case 37:
                                    i.NavigationMenus.closeAllOpenMenus();
                                    i.NavigationMenus.pageDirection === u.Direction.left ? r.menu.setFocusToPreviousItem(r) : r.menu.setFocusToNextItem(r);
                                    t = !0;
                                    break;
                                case 39:
                                    i.NavigationMenus.closeAllOpenMenus();
                                    i.NavigationMenus.pageDirection === u.Direction.right ? r.menu.setFocusToPreviousItem(r) : r.menu.setFocusToNextItem(r);
                                    t = !0;
                                    break;
                                case 38:
                                    i.NavigationMenus.closeAllOpenMenus();
                                    r.subMenu && (i.NavigationMenus.handleDesktopMenuClick(n), r.subMenu.setFocusToLastItem(), t = !0);
                                    break;
                                case 36:
                                    i.NavigationMenus.closeAllOpenMenus();
                                    r.menu.setFocusToFirstItem();
                                    t = !0;
                                    break;
                                case 35:
                                    i.NavigationMenus.closeAllOpenMenus();
                                    r.menu.setFocusToLastItem();
                                    t = !0;
                                    break;
                                case 27:
                                    i.NavigationMenus.closeAllOpenMenus();
                                    i.NavigationMenus.handleEscapeCloseMenu(n);
                                    break;
                                default:
                                    r.isPrintableCharacter(f) && (r.menu.setFocusByFirstCharacter(r, f), t = !0)
                            }
                            if (t) {
                                n.stopPropagation();
                                switch (n.keyCode) {
                                    case 40:
                                    case 38:
                                    case 37:
                                    case 39:
                                    case 35:
                                    case 36:
                                        n.preventDefault()
                                }
                            }
                        }
                    };
                    this.menu = t;
                    this.domNode = n;
                    this.isMenubarItem = !0
                }
                return n.prototype.init = function(n) {
                    this.menuElement = u.selectElements(".c-uhf-menu");
                    !this.menuElement || this.initializeMenus();
                    f(this.domNode).off("keydown");
                    f(this.domNode).on("keydown", this.handleMenuBarKeydown);
                    if (n) {
                        var t = this.domNode.nextElementSibling;
                        t && t.tagName === "UL" && t.childElementCount > 0 && (this.subMenu = new r.SubMenu(t, this), this.subMenu.init(this.isMultiColumnItem))
                    }
                }, n.prototype.isPrintableCharacter = function(n) {
                    return n.length === 1 && n.match(/\S/)
                }, n.prototype.setExpanded = function(n) {
                    n ? this.domNode.setAttribute("aria-expanded", "true") : this.domNode.setAttribute("aria-expanded", "false")
                }, n.prototype.setMultiColumnExpanded = function(n) {
                    var t = "false",
                        i;
                    t = n ? "true" : "false";
                    u.hasClass(this.domNode.nextElementSibling, "f-multi-column") && (i = u.selectElements("button[f-multi-parent=true]", this.domNode.nextElementSibling), i.forEach(function(n) {
                        n.setAttribute("aria-expanded", t)
                    }), this.domNode.setAttribute("aria-expanded", t))
                }, n
            }();
        t.MenubarItem = e;
        y = function() {
            function n() {
                this.isMenubar = !1;
                this.isMenubar = !0;
                this.menubarItems = [];
                this.firstChars = [];
                this.firstItem = null;
                this.lastItem = null
            }
            return n.prototype.init = function() {
                var n, r, t, y, b;
                o && (n = new e(o, this), n.init(!1), this.menubarItems.push(n), t = o.textContent.trim(), this.firstChars.push(t.substring(0, 1).toLowerCase()));
                s && (n = new e(s, this), n.init(!1), this.menubarItems.push(n), t = s.textContent.trim(), this.firstChars.push(t.substring(0, 1).toLowerCase()));
                for (var i = u.selectFirstElement(".uhf-menu-item", p), f = !1, w = !1; i;) f = !1, w = !1, r = null, u.hasClass(i, "single-link") ? r = u.selectFirstElement(".c-uhf-nav-link", i) : (u.hasClass(i, "nested-menu") || u.hasClass(i, "overflow-menu")) && (b = u.selectFirstElement("ul", i), f = u.hasClass(b, "f-multi-column"), b.childElementCount > 0 && (r = u.selectFirstElement("button", i), w = !0)), r && !u.hasClass(i, "x-hidden-none-mobile-vp") && (n = new e(r, this), n.isMultiColumnItem = f, n.init(w), this.menubarItems.push(n), t = r.textContent.trim(), this.firstChars.push(t.substring(0, 1).toLowerCase())), i = i.nextElementSibling;
                h && (f = !0, n = new e(h, this), n.isMultiColumnItem = !0, n.init(!0), this.menubarItems.push(n), t = h.textContent.trim(), this.firstChars.push(t.substring(0, 1).toLowerCase()));
                c && (n = new e(c, this), n.init(!1), this.menubarItems.push(n), t = c.textContent.trim(), this.firstChars.push(t.substring(0, 1).toLowerCase()));
                a && (n = new e(a, this), n.init(!1), this.menubarItems.push(n), t = v ? v.textContent.trim() : "", this.firstChars.push(t.substring(0, 1).toLowerCase()));
                l && (n = new e(l, this), n.init(!0), this.menubarItems.push(n), t = l.textContent.trim(), this.firstChars.push(t.substring(0, 1).toLowerCase()));
                y = this.menubarItems.length;
                y > 0 && (this.firstItem = this.menubarItems[0], this.lastItem = this.menubarItems[y - 1])
            }, n.prototype.setFocusToItem = function(n) {
                for (var t, r = !1, i = 0; i < this.menubarItems.length; i++) t = this.menubarItems[i], t.domNode.tabIndex === 0 && (r = t.domNode.getAttribute("aria-expanded") === "true"), t.subMenu && t.subMenu.close();
                u.removeClass(n.domNode, "x-hidden-focus");
                n.domNode.focus();
                r && n.subMenu && n.subMenu.open()
            }, n.prototype.setFocusToFirstItem = function() {
                this.setFocusToItem(this.firstItem)
            }, n.prototype.setFocusToLastItem = function() {
                this.setFocusToItem(this.lastItem)
            }, n.prototype.setFocusToPreviousItem = function(n) {
                var i, t;
                n === this.firstItem ? t = this.lastItem : (i = this.menubarItems.indexOf(n), t = this.menubarItems[i - 1]);
                this.setFocusToItem(t)
            }, n.prototype.setFocusToNextItem = function(n) {
                var i, t;
                n === this.lastItem ? t = this.firstItem : (i = this.menubarItems.indexOf(n), t = this.menubarItems[i + 1]);
                this.setFocusToItem(t)
            }, n.prototype.setFocusByFirstCharacter = function(n, t) {
                var r, i, u = t.toLowerCase();
                r = this.menubarItems.indexOf(n) + 1;
                r === this.menubarItems.length && (r = 0);
                i = this.getIndexFirstChars(r, u);
                i === -1 && (i = this.getIndexFirstChars(0, u));
                i > -1 && this.setFocusToItem(this.menubarItems[i])
            }, n.prototype.getIndexFirstChars = function(n, t) {
                for (var i = n; i < this.firstChars.length; i++)
                    if (t === this.firstChars[i]) return i;
                return -1
            }, n
        }();
        t.Menubar = y
    });
    define("uhfKeyboardNavigationSubMenu", ["require", "exports", "navigationMenus", "htmlExtensions", "jquery"], function(n, t, i, r, u) {
        "use strict";
        var e, f;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        e = function() {
            function n(n, t) {
                var i, r;
                if ((this.isMenubar = !1, n) && n.childElementCount !== 0) {
                    for (i = n.firstElementChild; i;) {
                        if (r = i.firstElementChild, r && r === "A") return;
                        i = i.nextElementSibling
                    }
                    this.isMenubar = !1;
                    this.domNode = n;
                    this.controller = t;
                    this.menuitems = [];
                    this.firstChars = [];
                    this.firstItem = null;
                    this.lastItem = null
                }
            }
            return n.prototype.init = function(n) {
                var s = this,
                    t, i, o, h, u, c, e, l;
                if (n)
                    for (u = r.selectFirstElement("li", this.domNode); u;) r.hasClass(u, "c-w0-contr-desktop-hidden") || (c = r.selectElements("a", u), c.forEach(function(n) {
                        i = new f(n, s);
                        i.init();
                        s.menuitems.push(i);
                        o = n.textContent.trim();
                        s.firstChars.push(o.substring(0, 1).toLowerCase())
                    })), u = u.nextElementSibling;
                else
                    for (t = this.domNode.firstElementChild; t;) r.hasClass(t, "single-link") ? e = r.selectFirstElement(".js-subm-uhf-nav-link", t) : r.hasClass(t, "nested-menu") && (l = r.selectFirstElement("ul", t), l.childElementCount > 0 && (e = r.selectFirstElement("button", t))), e && (i = new f(e, this), i.init(), this.menuitems.push(i), o = e.textContent.trim(), this.firstChars.push(o.substring(0, 1).toLowerCase())), t = t.nextElementSibling;
                h = this.menuitems.length;
                h > 0 && (this.firstItem = this.menuitems[0], this.lastItem = this.menuitems[h - 1])
            }, n.prototype.setFocusToMenubarItem = function(n, t) {
                while (n) {
                    if (n.isMenubarItem) return n.domNode.focus(), n;
                    t && n.menu.close(!0);
                    n.hasFocus = !1;
                    n = n.menu.controller
                }
                return !1
            }, n.prototype.setFocusToController = function(n, t) {
                if (typeof n != "string" && (n = ""), n === "") {
                    this.controller && this.controller.domNode && this.controller.domNode.focus();
                    return
                }
                if (this.controller.isMenubarItem) i.NavigationMenus.closeAllOpenMenus(), n === "previous" ? this.controller.menu.setFocusToPreviousItem(this.controller, t) : n === "next" && this.controller.menu.setFocusToNextItem(this.controller, t);
                else if (this.controller.domNode.focus(), this.close(!1), n === "next") {
                    var r = this.setFocusToMenubarItem(this.controller, !1);
                    r && r.menu.setFocusToNextItem(r, t)
                }
            }, n.prototype.setFocusToFirstItem = function() {
                this.firstItem.domNode.focus()
            }, n.prototype.setFocusToLastItem = function() {
                this.lastItem.domNode.focus()
            }, n.prototype.setFocusToPreviousItem = function(n) {
                var t;
                n === this.firstItem ? this.lastItem.domNode.focus() : (t = this.menuitems.indexOf(n), this.menuitems[t - 1].domNode.focus())
            }, n.prototype.setFocusToNextItem = function(n) {
                var t;
                n === this.lastItem ? this.firstItem.domNode.focus() : (t = this.menuitems.indexOf(n), this.menuitems[t + 1].domNode.focus())
            }, n.prototype.setFocusByFirstCharacter = function(n, t) {
                var r, i, u = t.toLowerCase();
                r = this.menuitems.indexOf(n) + 1;
                r === this.menuitems.length && (r = 0);
                i = this.getIndexFirstChars(r, u);
                i === -1 && (i = this.getIndexFirstChars(0, u));
                i > -1 && this.menuitems[i].domNode.focus()
            }, n.prototype.getIndexFirstChars = function(n, t) {
                for (var i = n; i < this.firstChars.length; i++)
                    if (t === this.firstChars[i]) return i;
                return -1
            }, n.prototype.open = function() {
                this.controller.isMultiColumnItem ? this.controller.setMultiColumnExpanded(!0) : this.controller.setExpanded(!0)
            }, n.prototype.close = function(n) {
                n && (this.controller.isMultiColumnItem ? this.controller.setMultiColumnExpanded(!1) : this.controller.setExpanded(!1))
            }, n
        }();
        t.SubMenu = e;
        f = function() {
            function n(n, t) {
                var u = this;
                this.isMenubarItem = !1;
                this.handleSubMenuKeydown = function(n) {
                    if (!i.NavigationMenus.isMobile()) {
                        var f = n.key,
                            t = !1;
                        switch (n.keyCode) {
                            case 32:
                            case 13:
                                u.subMenu && (i.NavigationMenus.handleDesktopMenuClick(n), u.subMenu.setFocusToFirstItem());
                                t = !0;
                                break;
                            case 38:
                                u.subMenu && u.subMenu.domNode && u.closeSubMenu(u.subMenu);
                                u.menu.setFocusToPreviousItem(u);
                                t = !0;
                                break;
                            case 40:
                                u.subMenu && u.subMenu.domNode && u.closeSubMenu(u.subMenu);
                                u.menu.setFocusToNextItem(u);
                                t = !0;
                                break;
                            case 37:
                                i.NavigationMenus.pageDirection === r.Direction.right ? u.subMenu ? (i.NavigationMenus.handleDesktopMenuClick(n), u.subMenu.setFocusToFirstItem()) : (i.NavigationMenus.closeAllOpenMenus(), u.menu.setFocusToController("next", !0), u.menu.close(!0)) : (u.menu.setFocusToController("previous", !0), u.menu.close(!0), u.menu.domNode && u.menu.domNode.tagName === "UL" && u.closeSubMenu(u.menu));
                                t = !0;
                                break;
                            case 39:
                                i.NavigationMenus.pageDirection === r.Direction.left ? u.subMenu ? (i.NavigationMenus.handleDesktopMenuClick(n), u.subMenu.setFocusToFirstItem()) : (i.NavigationMenus.closeAllOpenMenus(), u.menu.setFocusToController("next", !0), u.menu.close(!0)) : (u.menu.setFocusToController("previous", !0), u.menu.close(!0), u.menu.domNode && u.menu.domNode.tagName === "UL" && u.closeSubMenu(u.menu));
                                t = !0;
                                break;
                            case 36:
                                u.menu.setFocusToFirstItem();
                                t = !0;
                                break;
                            case 35:
                                u.menu.setFocusToLastItem();
                                t = !0;
                                break;
                            case 27:
                                i.NavigationMenus.handleEscapeCloseMenu(n);
                                t = !0;
                                break;
                            default:
                                u.isPrintableCharacter(f) && (u.menu.setFocusByFirstCharacter(u, f), t = !0)
                        }
                        if (t) {
                            n.stopPropagation();
                            switch (n.keyCode) {
                                case 40:
                                case 38:
                                case 37:
                                case 39:
                                case 35:
                                case 36:
                                    n.preventDefault()
                            }
                        }
                    }
                };
                this.domNode = n;
                this.menu = t;
                this.subMenu = !1;
                this.isMenubarItem = !1
            }
            return n.prototype.init = function() {
                u(this.domNode).off("keydown");
                u(this.domNode).on("keydown", this.handleSubMenuKeydown);
                var n = this.domNode.nextElementSibling;
                n && n.tagName === "UL" && (this.subMenu = new e(n, this), this.subMenu.init(!1))
            }, n.prototype.setExpanded = function(n) {
                n ? this.domNode.setAttribute("aria-expanded", "true") : this.domNode.setAttribute("aria-expanded", "false")
            }, n.prototype.isExpanded = function() {
                return this.domNode.getAttribute("aria-expanded") === "true"
            }, n.prototype.isPrintableCharacter = function(n) {
                return n.length === 1 && n.match(/\S/)
            }, n.prototype.closeSubMenu = function(n) {
                n.domNode.setAttribute("aria-hidden", "true")
            }, n
        }();
        t.SubMenuItem = f
    });
    define("uhfLanguageToggle", ["require", "exports", "htmlExtensions", "stringExtensions", "navigationMenus"], function(n, t, i, r, u) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = "#uhf-l-nav",
            e = function() {
                function n(t) {
                    var r = this;
                    this.handleLangugeToggleClick = function() {
                        u.NavigationMenus.isOpen($(n.instance.languageToggleElement)) || n.instance.createLanguageToggleUrls()
                    };
                    this.setLangLocaleInUrls = function(n, t, i) {
                        n.setAttribute("href", r.currentUrl.replace("/" + t + "/", "/" + i + "/"))
                    };
                    this.createLangLocaleArray = function(n, t) {
                        var i = [];
                        return n && t.match(n) && (i = t.match(n)[0].split("-")), i
                    };
                    this.languageToggleElement = t;
                    i.removeEvent(this.languageToggleElement, i.eventTypes.click, this.handleLangugeToggleClick);
                    i.addEvent(this.languageToggleElement, i.eventTypes.click, this.handleLangugeToggleClick)
                }
                return n.prototype.createLanguageToggleUrls = function(n) {
                    var o, t, f, e, u, h, c, s, l;
                    if ((n === void 0 && (n = window.location.href), this.currentUrl = n.toLowerCase(), o = i.selectFirstElement("ul", this.languageToggleElement), t = i.selectElements("a", this.languageToggleElement), o && t) && (f = o.getAttribute("data-localsettings"), f))
                        for (e = this.createLangLocaleArray(f, this.currentUrl), u = 0, h = t.length; u < h; u++) c = r.trim(t[u].getAttribute("href")), s = t[u].getAttribute("lang"), c != null && !!s && e && e.length > 1 && (l = (s + "-" + e[1]).toLowerCase(), this.setLangLocaleInUrls(t[u], f, l))
                }, n.instance = null, n.init = function() {
                    var t = i.selectFirstElement(f);
                    t && n.instance === null && (n.instance = new n(t))
                }, n
            }();
        t.UhfLanguageToggle = e
    });
    define("uhfMeControl", ["require", "exports", "uhfMeControlLoader"], function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function n() {
                i.Loader.init()
            }
            return n.selector = ".js-global-head", n
        }();
        t.UhfMeControl = r
    });
    define("uhfMeControlLoader", ["require", "exports", "jquery", "navigationMenus", "universalHeader", "utility", "htmlExtensions", "msccHelper", "uhfUtility", "uhfOverFlowMenu"], function(n, t, i, r, u, f, e, o, s, h) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = ".c-uhfh",
            l = ".c-sgl-stck",
            a;
        (function(n) {
            function ct() {
                var n = t;
                if (n) n.events.onEventLog("loadMeControl", {
                    type: "qos",
                    success: "0",
                    errorCode: "LoadFailed: Reverted to fallback",
                    duration: tt
                })
            }

            function it(n) {
                if (n && (n.extensibleLinks && t.extensibleLinks && (n.extensibleLinks.push.apply(n.extensibleLinks, t.extensibleLinks), t.extensibleLinks = null), a = n.apiGeneration === "GEN2" || a, (nt || a) && (n.appContextConfig && n.appContextConfig.commands && t.appContextConfig && t.appContextConfig.commands && (n.appContextConfig.commands.push.apply(n.appContextConfig.commands, t.appContextConfig.commands), t.appContextConfig.commands = null), n.primaryUXConfig && n.primaryUXConfig.displayModes && t.primaryUXConfig && t.primaryUXConfig.displayModes && (n.primaryUXConfig.displayModes.push.apply(n.primaryUXConfig.displayModes, t.primaryUXConfig.displayModes), t.primaryUXConfig.displayModes = null)), t = i.extend(!0, {}, t, n)), t.enabled)
                    if (ft()) rt(!0);
                    else {
                        var r = setTimeout(function() {
                            ct()
                        }, tt);
                        window.onMeControlReadyToLoad = function() {
                            clearTimeout(r);
                            window.onMeControlReadyToLoad = null;
                            rt();
                            d()
                        }
                    }
            }

            function rt(n) {
                if (n === void 0 && (n = !1), !n && !ft()) {
                    console.error("Error: MeControl API not not found after callback onMeControlReadyToLoad");
                    return
                }
                var i = "",
                    u = "",
                    r = !1;
                if (w) try {
                    a ? v || (i = "Mecontrol API/Configuration mismatch: Loading Mecontrol GEN1, with V2 Config, No GEN2 API", console.warn(i), window.MSA.MeControl.Loader.load(t), r = !0, e.addThrottledEvent(window, e.eventTypes.resize, p, 66)) : (i = "Loading MeControl GEN1, with V1 Config", window.MSA.MeControl.Loader.load(t), r = !0, e.addThrottledEvent(window, e.eventTypes.resize, p, 66))
                } catch (f) {
                    i = "Error: " + i;
                    u += i;
                    console.error(i);
                    console.error(f);
                    r = !1
                }
                if (!r && v) try {
                    a ? (i = "Loading MeControl GEN2, with V2 Config", window.MeControl.Loader.load(t), r = !0) : (i = "Mecontrol API/Configuration mismatch: Loading MeControl GEN2, with V1 Config, auto-remap to V2", console.warn(i), window.MeControl.Loader.load(t), r = !0)
                } catch (f) {
                    i = "Error: " + i;
                    u += u.length === 0 ? i : "\n" + i;
                    console.error(i);
                    console.error(f);
                    r = !1
                }
                if (!r && w && v && a) try {
                    i = "Mecontrol API/Configuration mismatch: Loading Mecontrol GEN1, with V2 Config, Final Attempt";
                    console.warn(i);
                    window.MSA.MeControl.Loader.load(t);
                    r = !0;
                    e.addThrottledEvent(window, e.eventTypes.resize, p, 66)
                } catch (f) {
                    i = "Error: " + i;
                    u += u.length === 0 ? i : "\n" + i;
                    console.error(i);
                    console.error(f);
                    r = !1
                }
                if (r) {
                    t.events.onEventLog("loadMeControl", {
                        type: "qos",
                        success: "1"
                    });
                    setTimeout(ut, 500);
                    e.addThrottledEvent(window, e.eventTypes.resize, p, 66)
                } else t.events.onEventLog("loadMeControl", {
                    type: "qos",
                    success: "0",
                    errorCode: u
                })
            }

            function ut() {
                if (b && st()) {
                    var n = new h.UhfOverflowMenu;
                    n && n.handleWidthChange()
                }
            }

            function ft() {
                return window.MSA && window.MSA.MeControl && window.MSA.MeControl.Loader && (w = !0), window.MeControl && window.MeControl.Loader && (v = !0), w || v
            }

            function et(n) {
                var t = document.createElement("a");
                return t.href = n, t.href
            }

            function lt(n) {
                n != null && (n.apiGeneration === "GEN2" && (a = !0), n.rpData.aadInfo && n.rpData.aadInfo.siteUrl && (n.rpData.aadInfo.siteUrl = et(n.rpData.aadInfo.siteUrl)), n.rpData.msaInfo && n.rpData.msaInfo.meUrl && (n.rpData.msaInfo.meUrl = n.rpData.msaInfo.meUrl + "&wreply=" + encodeURIComponent(window.location.protocol + "//" + window.location.host)), n.events = {
                    onEventLog: function(n, t) {
                        if (k && k.onEventLog) k.onEventLog("MeControl_" + n, t);
                        n && (n === "SignIn" || n === "DropdownOpen") && ht.setConsent()
                    }
                }, t = i.extend(!0, {}, n, t || {}))
            }

            function ot(n) {
                n != null && (n.events != null && (k = n.events), !n.currentGlobalItemId || r.NavigationMenus.setCurrentMenuItemId(n.currentGlobalItemId), !n.currentMenuItemId || r.NavigationMenus.setCurrentMenuItemId(n.currentMenuItemId), n && n.theme && u.UniversalHeader.setTheme(n.theme))
            }

            function at(n) {
                var t, i, r;
                (n != null && (window.msCommonShell && n.as ? window.msCommonShell.as = n.as : window.msCommonShell && n.searchSuggestCallback && (window.msCommonShell.as = {
                    legacyCallback: n.searchSuggestCallback
                }), window.msCommonShell && n.events && (window.msCommonShell.events = n.events)), t = document.getElementById("meControl"), t) && (i = t.getAttribute("data-signinsettings"), i !== null && (t.getAttribute("data-mev2") === "true" && (nt = !0), r = JSON.parse(i), r && lt(r), n != null ? (ot(n), it(n.meControlOptions)) : it(null), d()))
            }

            function g() {
                return b ? s.STViewports.getViewportSt() < 5 : f.Viewports.getViewport() < 5
            }

            function st() {
                return b ? s.STViewports.getViewportSt() > 2 : f.Viewports.getViewport() > 2
            }

            function p() {
                d()
            }

            function d() {
                var n = window.MeControl && window.MeControl.API && window.MeControl.API.setDisplayMode,
                    t = window.MSA && window.MSA.MeControl;
                return (t || n) && (g() && !y ? (y = !0, n ? window.MeControl.API.setDisplayMode("compressed") : window.MSA.MeControl.API.setMobileState(1)) : !g() && y && (y = !1, n ? window.MeControl.API.setDisplayMode("standard") : window.MSA.MeControl.API.setMobileState(0)), setTimeout(ut, 500)), y
            }

            function vt() {
                var n = {
                    AuthState: {
                        SignedIn: 1,
                        SignedInIdp: 2,
                        NotSignedIn: 3
                    },
                    SupportedAuthIdp: {
                        MSA: "msa",
                        AAD: "aad"
                    },
                    meControlOptions: function() {
                        return t
                    },
                    load: function(n) {
                        at(n)
                    },
                    update: function(n) {
                        ot(n)
                    }
                };
                window.msCommonShell = i.extend(!0, window.msCommonShell, n);
                i("" + c + l).length > 0 && (b = !0);
                window.msCommonShell.swapCategoryHeader || (window.msCommonShell.swapCategoryHeader = function(n) {
                    window.msCommonShell._catHTML = n
                });
                window.onShellReadyToLoad && window.onShellReadyToLoad()
            }
            var t = null,
                nt = !1,
                a = !1,
                w = !1,
                v = !1,
                b = !1,
                tt = 5e3,
                k = null,
                y = !1,
                ht = new o.MsccHelper;
            n.absolutifyUrl = et;
            n.isMobile = g;
            n.isDesktopVp = st;
            n.onWindowResize = p;
            n.setMeControlMobileState = d;
            n.init = vt
        })(a = t.Loader || (t.Loader = {}))
    });
    define("uhfOverFlowMenu", ["require", "exports", "htmlExtensions", "navigationMenus"], function(n, t, i, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = "#overflow-menu",
            e = ".c-uhfh-gnav .js-paddle-items",
            u = "x-hidden",
            o = function() {
                function n() {
                    (this.refreshMenu = !1, this.minWidthDifference = 40, this.overflowMenu = i.selectFirstElement(f), this.nav = i.selectFirstElement(e), this.nav && this.overflowMenu) && (this.navItems = this.nav.children, this.overflowMenuList = i.selectFirstElement("#overflow-menu-list"), this.overflowNestedMenuClassList = ["f-sub-menu", "js-nav-menu"], this.overflowSubMenuClassList = "c-uhf-menu js-nav-menu", this.overflowSkipItems = i.selectFirstElement("#c-uhf-nav-cta") ? 1 : 0, i.selectFirstElement(".right-aligned-link") && (this.overflowSkipItems += 1))
                }
                return n.prototype.handleWidthChange = function() {
                    var n, t;
                    this.overflowMenu && this.nav && (n = this.nav.offsetWidth, this.initializeNavItemsWidths(), t = n - this.navItemsWidth, n >= this.navItemsWidth && t > this.minWidthDifference ? this.isShowing() && this.overflowMenuList.children.length === 0 && this.hide() : (this.isShowing() || (this.show(), this.initializeNavItemsWidths()), this.updateOverflowMenuItems()), this.refreshMenu && (r.NavigationMenus.refreshMenuItems(), this.refreshMenu = !1))
                }, n.prototype.handleMoveIntoDesktopViewport = function() {
                    if (this.overflowMenu && this.nav) {
                        this.initializeNavItemsWidths();
                        var n = this.nav.offsetWidth - this.navItemsWidth;
                        this.nav.offsetWidth > this.navItemsWidth && n > this.minWidthDifference ? (this.updateGlobalMenuItems(!1), this.isShowing() && this.overflowMenuList.children.length === 0 && this.hide()) : (this.isShowing() || (this.show(), this.initializeNavItemsWidths()), this.updateOverflowMenuItems());
                        this.refreshMenu && (r.NavigationMenus.refreshMenuItems(), this.refreshMenu = !1)
                    }
                }, n.prototype.handleMoveIntoMobileViewport = function() {
                    this.overflowMenu && this.nav && (this.updateGlobalMenuItems(!0), this.isShowing() && this.overflowMenuList.children.length === 0 && this.hide(), this.refreshMenu && (r.NavigationMenus.refreshMenuItems(), this.refreshMenu = !1))
                }, n.prototype.initializeNavItemsWidths = function() {
                    var t, n;
                    if (this.nav)
                        for (t = this.nav.children, this.navItemsWidth = 0, n = 0; n < t.length; n++) this.navItemsWidth += t[n].offsetWidth
                }, n.prototype.show = function() {
                    i.removeClass(this.overflowMenu, u)
                }, n.prototype.hide = function() {
                    i.addClass(this.overflowMenu, u)
                }, n.prototype.isShowing = function() {
                    return !i.hasClass(this.overflowMenu, u)
                }, n.prototype.updateOverflowMenuItems = function() {
                    var t = this.navItemsWidth + (this.isShowing() ? 0 : this.overflowMenu.offsetWidth),
                        i = this.isShowing() ? 1 : 0,
                        r, n;
                    for (i += this.overflowSkipItems, r = this.nav.offsetWidth - t; this.navItems.length > 1 && this.navItems.length > i && (t >= this.nav.offsetWidth || r < this.minWidthDifference);) n = this.navItems.item(this.navItems.length - i - 1), t -= n.offsetWidth, this.nav.removeChild(n), this.updateOverflowMenuItemStyle(n), this.overflowMenuList.insertBefore(n, this.overflowMenuList.firstChild), r = this.nav.offsetWidth - t, this.refreshMenu || (this.refreshMenu = !0)
                }, n.prototype.updateGlobalMenuItems = function(n) {
                    for (var i = this.navItemsWidth + this.minWidthDifference, t = this.cloneAndStyleFirstChild(); n && this.overflowMenuList.children.length > 0 || this.isEnoughSpaceToFitItems(i + this.estimateNavOffsetWidth(t));) this.overflowMenuList.removeChild(this.overflowMenuList.firstElementChild), this.nav.insertBefore(t, this.overflowMenu), i += t.offsetWidth, this.refreshMenu || (this.refreshMenu = !0), t = this.cloneAndStyleFirstChild()
                }, n.prototype.isEnoughSpaceToFitItems = function(n) {
                    var t = !1;
                    return this.overflowMenuList.children.length > 0 && (this.overflowMenuList.children.length === 1 && (n -= this.overflowMenu.offsetWidth), this.nav.offsetWidth > n && (t = !0)), t
                }, n.prototype.cloneAndStyleFirstChild = function() {
                    var n = undefined;
                    return this.overflowMenuList.firstElementChild && (n = this.overflowMenuList.firstElementChild.cloneNode(!0), this.updateGlobalMenuItemStyle(n)), n
                }, n.prototype.estimateNavOffsetWidth = function(n) {
                    var t = 0;
                    return n && (this.nav.insertBefore(n, this.overflowMenu), t = n.offsetWidth, this.nav.removeChild(n)), t
                }, n.prototype.updateOverflowMenuItemStyle = function(n) {
                    var r, u, t, f;
                    if (i.hasClass(n, "single-link")) i.addClass(n, "js-nav-menu"), i.removeClass(n.firstElementChild, "c-uhf-nav-link"), i.addClass(n.firstElementChild, "js-subm-uhf-nav-link");
                    else if (i.hasClass(n, "nested-menu")) {
                        for (i.addClasses(n, this.overflowNestedMenuClassList), r = n.firstElementChild, u = r.children; u.length > 0;) t = u.item(0), t.nodeName === "UL" && i.hasClass(t, "f-multi-column") && (f = t.getAttribute("data-class-idn").split(" "), i.removeClasses(t, f)), n.appendChild(t);
                        n.removeChild(r)
                    }
                }, n.prototype.updateGlobalMenuItemStyle = function(n) {
                    var f, r, t, u;
                    if (i.hasClass(n, "single-link")) i.removeClass(n, "js-nav-menu"), i.addClass(n.firstElementChild, "c-uhf-nav-link"), i.removeClass(n.firstElementChild, "js-subm-uhf-nav-link");
                    else if (i.hasClass(n, "nested-menu")) {
                        for (i.removeClasses(n, this.overflowNestedMenuClassList), f = n.children, r = document.createElement("div"), r.setAttribute("class", this.overflowSubMenuClassList); f.length > 0;) t = f.item(0), t.nodeName === "UL" && (u = t.getAttribute("data-class-idn"), u && u.indexOf("f-multi-column") !== -1 && i.addClasses(t, u.split(" "))), r.appendChild(t);
                        n.appendChild(r)
                    }
                }, n
            }();
        t.UhfOverflowMenu = o
    });
    define("uhfPaddles", ["require", "exports", "htmlExtensions"], function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = ".js-primary-paddle",
            f = ".js-secondary-paddle",
            e = ".js-paddle-items",
            r = "f-hidden",
            o = function() {
                function n(n) {
                    var t = this;
                    (this.disabledPrimaryNavItems = [], this.disabledSecondaryNavItems = [], this.slidePrimary = function() {
                        t.setCurrentSlidePosition(t.getNextValidPosition(!0))
                    }, this.slideSecondary = function() {
                        t.setCurrentSlidePosition(t.getNextValidPosition(!1))
                    }, this.handleSlideIfDisabled = function(n) {
                        for (var r = 0; r < t.nav.children.length; ++r) t.disabledPrimaryNavItems[r] === n.currentTarget ? (t.slidePrimary(), i.preventDefault(n)) : t.disabledSecondaryNavItems[r] === n.currentTarget && (t.slideSecondary(), i.preventDefault(n))
                    }, this.handleFromKeyboardSlideIfDisabled = function(n) {
                        for (var i = 0; i < t.nav.children.length; ++i)(t.disabledPrimaryNavItems[i] === n.currentTarget || t.disabledSecondaryNavItems[i] === n.currentTarget) && (t.navItemPositions[i] > t.getMaxSlideAmount() ? t.setCurrentSlidePosition(t.getMaxSlideAmount()) : t.setCurrentSlidePosition(t.navItemPositions[i]))
                    }, n) && (this.primaryPaddle = i.selectFirstElement(u, n), this.secondaryPaddle = i.selectFirstElement(f, n), this.nav = i.selectFirstElement(e, n), this.nav) && (this.isLtr = this.nav.currentStyle ? this.nav.currentStyle.direction === "ltr" : getComputedStyle(this.nav, null).direction === "ltr", this.slideMarginProperty = this.isLtr ? "marginLeft" : "marginRight", this.firstMenuItem = this.nav.children[0])
                }
                return n.prototype.initializeNavItemsWidths = function() {
                    var t, n;
                    if (this.nav) {
                        for (t = this.nav.children, this.navItemsWidth = 0, this.navItemPositions = [], n = 0; n < t.length; ++n) this.navItemPositions.push(this.navItemsWidth), this.navItemsWidth += t[n].offsetWidth;
                        this.navItemsWidth += 24
                    }
                }, n.prototype.setCurrentSlidePosition = function(n) {
                    (n < 0 && (n = 0), this.firstMenuItem.style[this.slideMarginProperty] = -n + "px", this.nav) && (this.updatePaddleDisplayStates(), this.disablePartiallyHiddenNavItems(), this.nav.scrollLeft = this.isLtr ? 0 : this.nav.scrollWidth)
                }, n.prototype.getCurrentSlidePosition = function() {
                    var n = this.firstMenuItem.style[this.slideMarginProperty];
                    return n === "" ? 0 : -parseInt(n, 10)
                }, n.prototype.show = function(n) {
                    n.style.display = "block"
                }, n.prototype.hide = function(n) {
                    n.style.display = "none"
                }, n.prototype.isShowing = function(n) {
                    return n.style.display !== "none"
                }, n.prototype.disablePartiallyHiddenNavItems = function() {
                    for (var u, t = this.nav.children, e = this.nav.offsetWidth, f = this.getCurrentSlidePosition(), n = 0; n < t.length; ++n) u = t[n].querySelector("button") || t[n], this.navItemPositions[n] < f ? (i.addClass(u, r), this.disabledPrimaryNavItems[n] = t[n]) : this.navItemPositions[n] + t[n].offsetWidth > f + e ? (i.addClass(u, r), this.disabledSecondaryNavItems[n] = t[n]) : (i.removeClass(u, r), this.disabledPrimaryNavItems[n] = null, this.disabledSecondaryNavItems[n] = null)
                }, n.prototype.updatePaddleDisplayStates = function() {
                    var t = this.nav.offsetWidth,
                        i = t + this.primaryPaddle.offsetWidth + this.secondaryPaddle.offsetWidth,
                        n;
                    i >= this.navItemsWidth ? (this.hide(this.primaryPaddle), this.hide(this.secondaryPaddle)) : (n = this.getCurrentSlidePosition(), n === 0 ? (this.hide(this.primaryPaddle), this.show(this.secondaryPaddle)) : n >= this.getMaxSlideAmount() ? (this.show(this.primaryPaddle), this.hide(this.secondaryPaddle)) : (this.show(this.primaryPaddle), this.show(this.secondaryPaddle)))
                }, n.prototype.getMaxSlideAmount = function() {
                    var n = this.isShowing(this.primaryPaddle) && this.isShowing(this.secondaryPaddle) ? this.primaryPaddle.offsetWidth : 0,
                        t = this.nav.offsetWidth + n;
                    return this.navItemsWidth - t
                }, n.prototype.handleWidthChange = function() {
                    if (this.primaryPaddle && this.nav) {
                        var n = this.getCurrentSlidePosition(),
                            t = this.nav.offsetWidth,
                            i = t + this.primaryPaddle.offsetWidth + this.secondaryPaddle.offsetWidth;
                        i > this.navItemsWidth ? this.setCurrentSlidePosition(0) : this.navItemsWidth < n + this.nav.offsetWidth && this.setCurrentSlidePosition(Math.abs(this.nav.offsetWidth - this.navItemsWidth));
                        this.updatePaddleDisplayStates();
                        this.disablePartiallyHiddenNavItems()
                    }
                }, n.prototype.getNextValidPosition = function(n) {
                    var i = this.getCurrentSlidePosition(),
                        r = this.nav.offsetWidth,
                        t;
                    if (n) {
                        for (t = 0; t < this.navItemPositions.length; ++t)
                            if (this.navItemPositions[t] > i) return Math.max(0, this.navItemPositions[t] - r);
                        return 0
                    }
                    for (t = 0; t < this.navItemPositions.length - 1; ++t)
                        if (this.navItemPositions[t + 1] > i + r) return Math.min(this.getMaxSlideAmount(), this.navItemPositions[t]);
                    return this.getMaxSlideAmount()
                }, n.prototype.handleMoveIntoDesktopViewport = function() {
                    if (this.primaryPaddle && this.nav) {
                        this.primaryPaddle.tabIndex = -1;
                        this.secondaryPaddle.tabIndex = -1;
                        this.initializeNavItemsWidths();
                        this.updatePaddleDisplayStates();
                        this.disablePartiallyHiddenNavItems();
                        this.firstMenuItem.style.transition = "margin .667s cubic-bezier(.16, 1, .29, .99)";
                        i.addEvent(this.primaryPaddle, i.eventTypes.click, this.slidePrimary);
                        i.addEvent(this.secondaryPaddle, i.eventTypes.click, this.slideSecondary);
                        var n = i.nodeListToArray(this.nav.children);
                        i.addEvent(n, i.eventTypes.click, this.handleSlideIfDisabled);
                        i.addEvent(n, i.eventTypes.focusin, this.handleFromKeyboardSlideIfDisabled)
                    }
                }, n.prototype.handleMoveIntoMobileViewport = function() {
                    var t, n, u;
                    if (this.primaryPaddle && this.nav) {
                        for (this.hide(this.primaryPaddle), this.hide(this.secondaryPaddle), this.primaryPaddle.tabIndex = 0, this.secondaryPaddle.tabIndex = 0, this.firstMenuItem.style.transition = "", i.removeEvent(this.primaryPaddle, i.eventTypes.click, this.slidePrimary), i.removeEvent(this.secondaryPaddle, i.eventTypes.click, this.slideSecondary), t = i.nodeListToArray(this.nav.children), i.removeEvent(t, i.eventTypes.click, this.handleSlideIfDisabled), i.removeEvent(t, i.eventTypes.focusin, this.handleFromKeyboardSlideIfDisabled), n = 0; n < t.length; ++n) u = t[n].querySelector("button") || t[n], i.removeClass(u, r), this.disabledPrimaryNavItems[n] = null, this.disabledSecondaryNavItems[n] = null;
                        this.firstMenuItem.style[this.slideMarginProperty] = null
                    }
                }, n
            }();
        t.UhfPaddles = o
    });
    __extends = this && this.__extends || function() {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(n, t) {
            n.__proto__ = t
        } || function(n, t) {
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }();
    __extends = this && this.__extends || function() {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(n, t) {
            n.__proto__ = t
        } || function(n, t) {
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
        };
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
        }
    }();
    define("uhfPromoBanner", ["require", "exports", "htmlExtensions", "utility", "publisher"], function(n, t, i, r, u) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = function(n) {
            function t(u) {
                var f = n.call(this, u) || this;
                return (f.promoElement = u, f.closeSelector = "#close-epb", f.cookieName = "uhf_hide_epb", f.cookieNameV3 = "msstore_hide_epb", f.hiddenClass = "x-hidden", f.rollupAnimationClass = "epb-rollup", f.telemetryQsp = "epb=1", f.showPromoBanner = function() {
                    var n = i.selectFirstElement("#epbTryNow"),
                        t = i.selectFirstElement(".f-img-lzy"),
                        h = n.getAttribute("data-telem-qsp"),
                        u = i.selectFirstElement(".epb-container"),
                        e, o, s;
                    !u || (u.removeAttribute("data-ios"), u.removeAttribute("data-android"), u.removeAttribute("data-windowsedge"));
                    !n || (e = r.addQSP(window.location.toString(), f.telemetryQsp), h ? n.setAttribute("href", "Microsoft-edge:" + r.addQSP(e, h)) : n.setAttribute("href", "Microsoft-edge:" + e));
                    t && (o = t.getAttribute("data-src"), o && (t.setAttribute("src", o), t.removeAttribute("data-src")));
                    s = i.selectFirstElement(f.closeSelector, f.promoElement);
                    s && (i.addEvent(s, i.eventTypes.click, f.closeAndSetCookie), i.removeClass(f.promoElement, f.hiddenClass))
                }, f.showPromoBannerWindowsEdge = function() {
                    var t = i.selectFirstElement("#epbTryNow"),
                        e = i.selectFirstElement(".f-img-lzy"),
                        r = i.selectFirstElement(".epb-container"),
                        s = i.selectFirstElement(".epb-launch"),
                        h = i.selectFirstElement(".epb-text"),
                        c = r.getAttribute("data-windowsedge"),
                        n = JSON.parse(c),
                        o, u;
                    !n || (!t || (t.setAttribute("href", n.LinkUrl), t.setAttribute("aria-label", n.ActionAriaLabel), t.innerText = n.ActionText, t.removeAttribute("data-telem-qsp")), !s || (s.innerText = n.Title), !h || (h.innerText = n.Text), i.addClass(r, "epb-container-background"), r.removeAttribute("data-ios"), r.removeAttribute("data-android"), r.removeAttribute("data-windowsedge"), e && (o = e.getAttribute("data-src"), o && (e.setAttribute("src", o), e.removeAttribute("data-src"))), u = i.selectFirstElement(f.closeSelector, f.promoElement), u && (u.innerText = n.DismissText, u.setAttribute("aria-label", n.DismissAriaLabelWindowsEdge), i.addEvent(u, i.eventTypes.click, f.closeAndSetCookie), i.removeClass(f.promoElement, f.hiddenClass)))
                }, f.getHeight = function() {
                    return f.promoElement ? i.getClientRect(f.promoElement).height : 0
                }, f.closeAndSetCookie = function() {
                    f.setCookieOnRootDomain(f.cookieName, "true", "/", 7);
                    i.addClass(f.promoElement, f.rollupAnimationClass);
                    i.addEvent(f.promoElement, i.eventTypes.animationend, f.rollUpBanner);
                    f.trackEpbDismissal()
                }, f.rollUpBanner = function() {
                    i.removeClass(f.promoElement, f.rollupAnimationClass);
                    i.addClass(f.promoElement, f.hiddenClass);
                    f.initiatePublish({
                        height: f.getHeight()
                    })
                }, !u || !(r.getCookie(f.cookieName) !== "true") || !(r.getCookie(f.cookieNameV3) !== "true")) ? f : t.resolveTreatment("isEdgeOnWindows") ? (f.showPromoBannerWindowsEdge(), f) : t.resolveTreatment("noEdgeWin10") ? (f.showPromoBanner(), f) : f
            }
            return __extends(t, n), t.resolveTreatment = function(n) {
                n === void 0 && (n = "noEdgeWin10");
                switch (n) {
                    case "noEdgeWin10":
                        return t.isNotEdgeWin10();
                    case "gteRs1OnChrome":
                        return t.isGteRs1OnChrome();
                    case "isEdgeOnWindows":
                        return t.isEdgeOnWindows();
                    default:
                        return !1
                }
            }, t.prototype.setCookieOnRootDomain = function(n, t, i, u) {
                var e = document.location.hostname.split("."),
                    f = e.pop();
                if (f === "localhost") r.setCookie(n, t, i, u);
                else
                    while (r.getCookie(n) !== t && e.length !== 0) f = e.pop() + "." + f, r.setCookie(n, t, i, u, f)
            }, t.prototype.publish = function(n, t) {
                n.onBannerClosed(t)
            }, t.prototype.trackEpbDismissal = function() {
                typeof MscomCustomEvent == "function" && window.MscomCustomEvent("wcs.cn", "EdgePromoBannerDismissed", "wcs.cot", 4)
            }, t.isGteRs1OnChrome = function() {
                var t = document.createElement("canvas").getContext("2d"),
                    i, n;
                return t.font = "64px Segoe UI Emoji", i = t.measureText("🐱‍👤").width, n = navigator.userAgent.toLowerCase(), !window.chrome || n.indexOf("edge") >= 0 ? !1 : n.indexOf("windows nt") === -1 ? !1 : i <= 90 ? !0 : !1
            }, t.isNotEdgeWin10 = function() {
                var n = navigator.userAgent.toLowerCase();
                return !(n.indexOf("edge") >= 0) && n.indexOf("windows nt 10") >= 0
            }, t.isEdgeOnWindows = function() {
                var n = navigator.userAgent.toLowerCase();
                return n.indexOf("edge") >= 0
            }, t
        }(u.Publisher);
        t.UhfPromoBanner = f
    });
    define("uhfSearchModule", ["require", "exports", "htmlExtensions", "stringExtensions", "utility", "uhfUssCategoryService", "msccHelper", "uhfTelemetryHelper", "uhfUtility"], function(n, t, i, r, u, f, e, o, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var h = new e.MsccHelper,
            c = function() {
                function n(n, t, e, c) {
                    var l = this,
                        a, v, y;
                    if (this.searchForm = n, this.showCallback = t, this.autoSuggest = e, this.overflowMenuCallback = c, this.width = "", this.searchOpenedClass = "f-search-opened", this.focusedClass = "js-focused", this.stSelector = ".c-sgl-stck", this.searchLabelSelector = "#search span", this.searchisOpen = !1, this.windowResizedSearchOpen = !1, this.ussCategoryExpId = "StoreSearch", this.ussCategoryCtrlId = "AllSearch", this.canHideSearchBox = function() {
                            return u.getWindowWidth() < 1400
                        }, this.hideSearchBox = function() {
                            l.searchisOpen ? l.globalNav && (l.globalNav.style.display = "none") : (l.searchBox && (l.searchBox.style.display = "none", l.searchButton.setAttribute("aria-expanded", "false")), l.autoSuggestScreenReader && i.addClass(l.autoSuggestScreenReader, "x-hidden"))
                        }, this.showSearchBox = function() {
                            l.searchBox && (l.searchBox.style.display = "inline-block", l.searchButton.removeAttribute("aria-expanded"));
                            l.autoSuggestScreenReader && i.removeClass(l.autoSuggestScreenReader, "x-hidden");
                            l.searchisOpen && l.globalNav && (l.globalNav.style.display = "block")
                        }, this.onSearchBoxChange = function() {
                            l.searchBox.value.trim() !== "" && h.setConsent()
                        }, this.log = function() {
                            if (window.msCommonShell) {
                                (typeof window.msCommonShell.events == "undefined" || typeof window.msCommonShell.events.onSearch == "undefined") && (window.msCommonShell.events = {
                                    onSearch: function() {
                                        if (event.type) {
                                            var n = document.getElementById("cli_shellHeaderSearchInput"),
                                                t = {
                                                    title: "Search_nav",
                                                    trackType: "manual",
                                                    telemetryType: "jsll",
                                                    event: event.type === "click" ? "CL" : "KE",
                                                    srchq: n ? n.value : ""
                                                };
                                            o.trackEvent(t)
                                        }
                                    }
                                });
                                var n = window.msCommonShell.events.onSearch;
                                n && n(l.searchForm)
                            }
                        }, this.addQsp = function(n, t) {
                            if (n && t) {
                                var i = document.createElement("input");
                                i.setAttribute("type", "hidden");
                                i.setAttribute("name", n);
                                i.setAttribute("value", t);
                                i.setAttribute("data-bi-dnt", "");
                                i.setAttribute("data-bi-mto", "");
                                l.searchForm.appendChild(i)
                            }
                        }, this.isHidden = function() {
                            return l.singleStackEnabled ? i.css(l.searchBox, "display") === "none" || l.searchCloseButton.getAttribute("aria-expanded") === "false" ? !0 : !i.hasClass(l.searchParentElement, l.searchOpenedClass) : u.getWindowWidth() >= 1400 ? !1 : !i.hasClass(l.searchParentElement, l.searchOpenedClass)
                        }, this.showAndFocus = function() {
                            var n = u.Viewports.getViewport();
                            l.singleStackEnabled || l.showCallback && l.showCallback();
                            i.addClass(l.searchParentElement, l.searchOpenedClass);
                            n < 5 && (i.css(l.searchBox, "display", "inline-block"), l.autoSuggestScreenReader && i.removeClass(l.autoSuggestScreenReader, "x-hidden"));
                            l.singleStackEnabled && i.css(l.searchBox, "display", "block");
                            i.css(l.searchBox, "width", l.width);
                            l.searchCloseButton.setAttribute("aria-expanded", "true");
                            l.searchButton.removeAttribute("aria-expanded");
                            l.searchBox.focus();
                            l.singleStackEnabled || (l.shoppingCart && n < 3 && i.addClass(l.shoppingCart, "x-hidden"), l.meControl && n < 3 && i.addClass(l.meControl, "x-hidden"));
                            l.singleStackEnabled && l.showCallback && l.showCallback();
                            l.searchisOpen = !0
                        }, this.hide = function() {
                            var n = u.Viewports.getViewport();
                            l.autoSuggest && l.autoSuggest.hide();
                            i.css(l.searchBox, "width", "");
                            i.removeClass(l.searchParentElement, l.searchOpenedClass);
                            l.searchCloseButton.setAttribute("aria-expanded", "false");
                            n < 5 && (i.css(l.searchBox, "display", "none"), l.autoSuggestScreenReader && i.addClass(l.autoSuggestScreenReader, "x-hidden"), l.searchButton.setAttribute("aria-expanded", "false"));
                            l.singleStackEnabled && (i.css(l.searchBox, "display", "none"), l.searchButton.setAttribute("aria-expanded", "false"), l.searchButton.focus(), l.searchBox.value = "");
                            n < 3 && (l.shoppingCart && i.hasClass(l.shoppingCart, "x-hidden") && i.removeClass(l.shoppingCart, "x-hidden"), l.meControl && i.hasClass(l.meControl, "x-hidden") && i.removeClass(l.meControl, "x-hidden"));
                            !l.singleStackEnabled && n > 3 && l.searchisOpen && l.globalNav && (l.globalNav.style.display = "block");
                            l.singleStackEnabled && s.STViewports.getViewportSt() >= 3 && l.windowResizedSearchOpen && l.overflowMenuCallback && (l.overflowMenuCallback(), l.windowResizedSearchOpen = !1);
                            l.searchisOpen = !1
                        }, this.handleSearchButtonClick = function(n) {
                            if (!l.isHidden()) {
                                l.onSearch(n);
                                return
                            }
                            i.preventDefault(n);
                            l.showAndFocus()
                        }, this.toggleFocusAndClickListeners = function(n, t, r) {
                            var u = r ? i.removeEvent : i.addEvent;
                            u(n, i.eventTypes.focus, t, !0);
                            u(n, i.eventTypes.click, t, !0)
                        }, this.handleSearchCancelButton = function(n) {
                            n.preventDefault();
                            n.keyCode === 27 || n.keyCode === 13 ? l.hideSearch() : n.keyCode === 9 && l.searchBox.focus()
                        }, this.focusInHandler = function() {
                            l.isHidden() || (i.addClass(l.searchForm, l.focusedClass), l.toggleFocusAndClickListeners(l.searchForm, l.focusInHandler, !0), l.toggleFocusAndClickListeners(document.body, l.focusOutHandler))
                        }, this.focusOutHandler = function(n) {
                            l.singleStackEnabled || l.parentHasClass(n.target, l.focusedClass) ? l.singleStackEnabled && (!l.parentHasClass(n.target, l.focusedClass) && !l.parentHasClass(n.target, "cancel-search") || n instanceof KeyboardEvent && n.keyCode === 27) && l.hideSearch() : l.hideSearch()
                        }, this.hideSearch = function() {
                            i.removeClass(l.searchForm, l.focusedClass);
                            l.toggleFocusAndClickListeners(document.body, l.focusOutHandler, !0);
                            l.toggleFocusAndClickListeners(l.searchForm, l.focusInHandler);
                            l.autoSuggest && l.autoSuggest.hide();
                            l.hide()
                        }, this.parentHasClass = function(n, t) {
                            if (n) {
                                if (i.hasClass(n, t)) return !0
                            } else return !1;
                            return l.parentHasClass(n.parentNode, t)
                        }, n) {
                        this.searchBox = i.selectFirstElement("input", this.searchForm);
                        try {
                            a = window._pageBITags.pageTags;
                            v = a.expId.toLowerCase().split(",");
                            this.ussCategoryExpEnabled = v.indexOf("ex:" + this.ussCategoryExpId.toLowerCase()) > -1;
                            this.ussCategoryCtrlEnabled = v.indexOf("ex:" + this.ussCategoryCtrlId.toLowerCase()) > -1;
                            this.market = a.mkt
                        } catch (p) {
                            this.ussCategoryExpEnabled = !1
                        }
                        this.ussCategoryExpEnabled && this.market ? (this.categoryService = new f.UhfUssCategoryService(this.market), i.addDebouncedEvent(this.searchBox, i.eventTypes.keyup, function() {
                            l.categoryService.queryService(r.trim(l.searchBox.value))
                        }, 100), this.addQsp("flt", this.ussCategoryExpId)) : this.ussCategoryCtrlEnabled && this.addQsp("flt", this.ussCategoryCtrlId);
                        this.searchParentElement = i.selectFirstElement(".js-global-head");
                        this.searchButton = i.selectFirstElement("button", this.searchForm);
                        i.addEvent(this.searchButton, i.eventTypes.click, this.handleSearchButtonClick);
                        this.searchCloseButton = i.selectFirstElement(".c-action-trigger.glyph-arrow-htmllegacy");
                        i.addEvent(this.searchCloseButton, i.eventTypes.click, this.hide);
                        i.addEvent(this.searchBox, i.eventTypes.input, this.onSearchBoxChange);
                        this.toggleFocusAndClickListeners(this.searchForm, this.focusInHandler);
                        y = i.selectFirstElement(this.stSelector);
                        this.singleStackEnabled = y !== null;
                        this.searchLabel = i.selectFirstElement(this.searchLabelSelector);
                        this.autoSuggestScreenReader = i.selectFirstElement(".c-search .x-screen-reader");
                        this.meControl = i.selectFirstElement("#meControl");
                        this.shoppingCart = i.selectFirstElement("#uhf-shopping-cart");
                        this.globalNav = i.selectFirstElement("#uhf-g-nav");
                        this.singleStackEnabled ? (i.addEvent(n, i.eventTypes.keydown, this.focusOutHandler), this.searchCancel = i.selectFirstElement("#cancel-search"), i.addEvent(this.searchCancel, i.eventTypes.click, this.hideSearch), i.addEvent(this.searchCancel, i.eventTypes.keydown, this.handleSearchCancelButton)) : this.canHideSearchBox() ? this.hideSearchBox() : this.canHideSearchBox() || this.showSearchBox()
                    }
                }
                return n.prototype.onSearch = function(n) {
                    var t = this,
                        u = r.trim(this.searchBox.value),
                        i;
                    return u.length ? this.ussCategoryExpEnabled ? (n.preventDefault(), i = !1, this.categoryService.getCategory(u, function(n) {
                        !i && n && (t.searchForm.setAttribute("action", "/" + t.market + "/store/search/" + n), t.log(), t.searchForm.submit(), i = !0)
                    }), setTimeout(function() {
                        i || (t.log(), t.searchForm.submit(), i = !0)
                    }, 100), !1) : (this.log(), !0) : (n.preventDefault(), this.searchBox.focus(), !1)
                }, n.prototype.setSearchBoxWidth = function(n) {
                    this.width = n;
                    this.isHidden() || i.css(this.searchBox, "width", n)
                }, n.prototype.getSearchFormElement = function() {
                    return this.searchForm
                }, n
            }();
        t.UhfSearchModule = c
    });
    require(["componentFactory", "universalHeader", "uhfMeControl"], function(n, t, i) {
        n.ComponentFactory && n.ComponentFactory.create && (n.ComponentFactory.create([{
            c: t.UniversalHeader
        }]), n.ComponentFactory.create([{
            c: i.UhfMeControl,
            eventToBind: "DOMContentLoaded"
        }]))
    });
    require(["componentFactory", "universalHeader", "uhfMeControl"], function(n, t, i) {
        n.ComponentFactory && n.ComponentFactory.create && (n.ComponentFactory.create([{
            c: t.UniversalHeader
        }]), n.ComponentFactory.create([{
            c: i.UhfMeControl,
            eventToBind: "DOMContentLoaded"
        }]))
    });
    define("jquery", [], function() {
        return jQuery
    });
    define("uhfTelemetryHelper", ["require", "exports", "htmlExtensions"], function(n, t, i) {
        "use strict";

        function e(n) {
            var e = !1,
                o, s, t;
            if (n) {
                o = i.selectFirstElement("#cli_shellHeaderSearchInput");
                o && (s = o.getAttribute("data-m"), s && (t = JSON.parse(s), t && (t.cN && (n.cN = t.cN), t.aN && (n.aN = t.aN), t.id && (n.id = t.id), t.sN && (n.sN = t.sN))));
                switch (n.trackType) {
                    case "autosuggest":
                        e = r(n);
                        break;
                    case "manual":
                        e = u(n);
                        break;
                    case "searchInitiate":
                        e = f(n)
                }
            }
            return e
        }

        function r(n) {
            if (n.telemetryType === "jsll") {
                var t = n.suggestionType,
                    i = t,
                    r = {
                        term: "0",
                        product: "4"
                    } [i],
                    u = {
                        behavior: 60,
                        actionType: n.event,
                        contentTags: {
                            cN: n.resultselected,
                            aN: n.aN,
                            id: n.id,
                            sN: n.sN,
                            cT: r,
                            pid: n.pid,
                            srchq: n.srchq,
                            srchtype: "auto suggest",
                            asdisplayed: !0,
                            aslinkpos: n.aslinkpos,
                            qrylngth: n.qrylngth,
                            resultselected: n.resultselected
                        }
                    };
                if (window.awa && window.awa.ct && typeof window.awa.ct.captureContentPageAction == "function") return window.awa.ct.captureContentPageAction(u), !0
            } else if (n.telemetryType === "wedcs" && typeof MscomCustomEvent == "function") return window.MscomCustomEvent("wcs.cn", n.title, "wcs.cot", 4), !0;
            return !1
        }

        function u(n) {
            if (n.telemetryType === "jsll") {
                var t = {
                    behavior: 61,
                    actionType: n.event,
                    contentTags: {
                        cN: n.title,
                        aN: n.aN,
                        id: n.id,
                        sN: n.sN,
                        srchq: n.srchq,
                        srchtype: "manual"
                    }
                };
                if (window.awa && window.awa.ct && typeof window.awa.ct.captureContentPageAction == "function") return window.awa.ct.captureContentPageAction(t), !0
            }
            return !1
        }

        function f(n) {
            if (n.telemetryType === "jsll") {
                var t = {
                    behavior: 62,
                    actionType: n.event,
                    contentTags: {
                        cN: "Search_nav",
                        aN: n.aN,
                        id: n.id,
                        sN: n.sN,
                        srchq: n.srchq,
                        srchtype: "manual"
                    }
                };
                if (window.awa && window.awa.ct && typeof window.awa.ct.captureContentPageAction == "function") return window.awa.ct.captureContentPageAction(t), !0
            }
            return !1
        }

        function o(n) {
            if (n) {
                var t = new Image;
                t.src = n
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.trackEvent = e;
        t.trackAutoSuggestEvents = r;
        t.trackManualEvents = u;
        t.trackSearchInitiateEvents = f;
        t.fireBeacon = o
    });
    define("uhfUssCategoryService", ["require", "exports"], function(n, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function n(n) {
                this.market = n;
                this.responseCache = {};
                this.ajaxCall = function(n, t) {
                    var i = new XMLHttpRequest;
                    i.open("GET", n);
                    i.onreadystatechange = function() {
                        this.readyState === 4 && this.status >= 200 && this.status < 400 && t(this.responseText)
                    };
                    i.send();
                    i = null
                }
            }
            return n.prototype.getServiceUrl = function(n) {
                return "https://ussearchprod.trafficmanager.net/services/api/v1.0/store/categories" + ("?clientid=7f27b536-cf6b-4c65-8638-a0f8cbdfca65&scope=games,apps,devices,software&query=" + n + "&markets=" + this.market)
            }, n.prototype.getCachedCategory = function(n) {
                return this.responseCache[this.getCacheKey(n)]
            }, n.prototype.getCategory = function(n, t) {
                var i = this.getCachedCategory(n);
                i ? t(i) : this.queryService(n, t)
            }, n.prototype.queryService = function(n, t) {
                var i = this;
                if (!n || this.getCachedCategory(n)) {
                    t && t(null);
                    return
                }
                this.ajaxCall(this.getServiceUrl(n), function(n) {
                    try {
                        var r = JSON.parse(n),
                            u = r.categories && r.categories[0],
                            f = r.query;
                        !u || !f.trim() ? t && t(null) : (i.responseCache[i.getCacheKey(f)] = u, t && t(u))
                    } catch (e) {
                        t && t(null)
                    }
                })
            }, n.prototype.getCacheKey = function(n) {
                return encodeURIComponent(n.trim().toLowerCase())
            }, n
        }();
        t.UhfUssCategoryService = i
    });
    define("uhfUtility", ["require", "exports", "utility"], function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r;
        (function(n) {
            function t() {
                var t;
                if (window.matchMedia) {
                    for (t = 0; t < n.allWidths.length; ++t)
                        if (!window.matchMedia("(min-width:" + n.allWidths[t] + "px)").matches) return t
                } else
                    for (t = 0; t < n.allWidths.length; ++t)
                        if (i.getWindowWidth() < n.allWidths[t]) return t;
                return n.allWidths.length
            }
            n.allWidths = [320, 540, 860, 1084, 1400, 1779];
            n.vpMin = n.allWidths[0];
            n.vpMax = 2048;
            n.getViewportSt = t
        })(r = t.STViewports || (t.STViewports = {}))
    });
    define("universalHeader", ["require", "exports", "uhfPaddles", "shoppingCart", "uhfSearchModule", "uhfOverFlowMenu", "navigationMenus", "htmlExtensions", "utility", "uhfAutoSuggest", "uhfCookieAlert", "uhfPromoBanner", "uhfLanguageToggle", "uhfCookieAuditor", "uhfGreenId", "msccHelper", "uhfUtility", "uhfKeyboardNavigationMenu"], function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var k = "tabindex",
            d = ".js-global-head",
            g = ".js-cat-head",
            nt = "#uhfCookieAlert  .c-action-trigger.glyph-cancel",
            tt = "#uhfCookieAlert span.c-group > a.c-action-trigger",
            it = "#uhfSkipToMain",
            rt = ".c-action-trigger.glyph-global-nav-button",
            ut = ".c-action-trigger.glyph-arrow-htmllegacy",
            ft = "#meControl.c-me .msame_Header",
            et = "#uhfCatLogoButton",
            ot = ".c-uhfh.f-keyboard-navigation",
            st = new p.MsccHelper,
            ht = function() {
                function n() {
                    var t = this,
                        ct, p, vt, yt, pt;
                    this.hiddenClass = "x-hidden";
                    this.searchOpenedClass = "f-search-opened";
                    this.enableKeyBoardNavigation = function() {
                        var t = o.selectFirstElement(ot),
                            n;
                        t && (n = new b.Menubar, n.init())
                    };
                    this.stickFooterToBottom = function() {
                        var n = o.selectFirstElement("#uhf-footer"),
                            t, i, r;
                        o.removeClass(n, "footer-bottom");
                        t = o.selectFirstElement("body");
                        i = window.innerHeight;
                        o.hasClass(n, "sticky-footer") && (r = t.offsetHeight, r < i ? o.addClass(n, "footer-bottom") : o.removeClass(n, "footer-bottom"))
                    };
                    this.initializeSearchBox = function() {
                        var n;
                        if (!!t.searchBox && !!window.location.search && !t.searchBox.getAttribute("dis-showquery")) {
                            n = t.searchBox.getAttribute("name");
                            n || (n = "q");
                            var r = window.location.search.replace(/\+/g, " "),
                                u = "[?|&]" + n + "=([^&]*)",
                                i = r.match(u);
                            !i || i.length !== 2 || (t.searchBox.value = decodeURIComponent(i[1]))
                        }
                    };
                    this.initializeSearch = function() {
                        !t.searchElement || (t.initializeSearchBox(), t.uhfAutoSuggest = new h.UhfAutoSuggest, t.searchModule = new u.UhfSearchModule(t.searchElement, t.setSearchWidth, t.uhfAutoSuggest, t.overflowMenuCallback))
                    };
                    this.isMobile = function() {
                        return t.isSingleStack ? w.STViewports.getViewportSt() < 3 : s.Viewports.getViewport() < 3
                    };
                    this.onWindowResize = function() {
                        t.checkForViewportChange();
                        t.wasMobile || (t.catPaddles.handleWidthChange(), t.globalPaddles.handleWidthChange());
                        t.searchModule && t.setSearchWidth();
                        !t.isMobile() && t.isSingleStack && (t.overflowMenuElement && (t.searchModule ? t.searchModule.searchisOpen ? t.searchModule.windowResizedSearchOpen = !0 : t.overflowMenuElement.handleMoveIntoDesktopViewport() : t.overflowMenuElement.handleMoveIntoDesktopViewport()), t.menuElement && e.NavigationMenus.refreshFlips(), t.enableKeyBoardNavigation());
                        !t.isSingleStack && t.searchModule && (t.searchModule.canHideSearchBox() ? t.searchModule.hideSearchBox() : t.searchModule.showSearchBox());
                        t.updateBannerBufferHeight()
                    };
                    this.initializeMenus = function() {
                        e.NavigationMenus.init();
                        e.NavigationMenus.handleMoveIntoDesktopViewport();
                        !t.menuElement || o.removeEvent(t.menuElement, o.eventTypes.click, t.initializeMenus)
                    };
                    this.overflowMenuCallback = function() {
                        t.overflowMenuElement && w.STViewports.getViewportSt() >= 3 && t.overflowMenuElement.handleMoveIntoDesktopViewport()
                    };
                    this.setSearchWidth = function() {
                        var i = "",
                            f;
                        if (!t.isSingleStack && s.Viewports.getViewport() >= 3 && s.Viewports.getViewport() <= 4) {
                            var n = o.getClientRect(t.globalLogo),
                                u = o.getClientRect(t.searchModule.getSearchFormElement()),
                                r = (n ? n.right : 699) < u.right ? "right" : "left",
                                e = r === "right" ? 200 : 1199;
                            i = Math.abs(u[r] - (n ? n[r] : e)) - 60 + "px"
                        }
                        t.isSingleStack && w.STViewports.getViewportSt() >= 3 && (f = s.getWindowWidth(), i = Math.abs(f * (70 / 100)) + "px");
                        t.searchModule.setSearchBoxWidth(i)
                    };
                    this.updateBannerBufferHeight = function() {
                        if (o.css(t.headerElement, "position") === "absolute") {
                            var u = parseInt(o.css(t.headerElement, "top"), 10) || 0,
                                n = t.cookieAlert != null ? t.cookieAlert.getHeight() : 0,
                                i = t.edgePromoBanner != null ? t.edgePromoBanner.getHeight() : 0,
                                r = n > i ? n : i;
                            r !== u && t.setHeaderTop(r + "px")
                        }
                    };
                    this.delegateBannerNotification = function(n) {
                        t.setHeaderTop(n.height + "px")
                    };
                    this.swapCategoryHeader = function(n) {
                        if (n) {
                            var r = o.selectFirstElement(g),
                                u = document.createElement("DIV");
                            u.innerHTML = n;
                            r.parentNode.replaceChild(u.querySelector(g), r);
                            e.NavigationMenus.init();
                            t.catPaddles = new i.UhfPaddles(o.selectFirstElement(g));
                            t.isMobile() ? (e.NavigationMenus.handleMoveIntoMobileViewport(), t.catPaddles.handleMoveIntoMobileViewport()) : (e.NavigationMenus.handleMoveIntoDesktopViewport(), t.catPaddles.handleMoveIntoDesktopViewport())
                        }
                    };
                    this.updateTabindexOrder = function(n) {
                        if (n === void 0 && (n = !1), t.isSingleStack) {
                            var i = 1;
                            n ? (!t.cookieAlertCancel || (t.cookieAlertCancel.setAttribute(k, i.toString()), i += 1, !t.cookieAlertAboutAds || (t.cookieAlertAboutAds.setAttribute(k, i.toString()), i += 1)), !t.skipToMainBanner || (t.skipToMainBanner.setAttribute(k, i.toString()), i += 1), !t.hamburgerButton || (t.hamburgerButton.setAttribute(k, i.toString()), i += 1), !t.categoryButton || (t.categoryButton.setAttribute(k, i.toString()), i += 1), !t.searchButton || (!t.searchBox || (t.searchBox.setAttribute(k, i.toString()), i += 1), t.searchButton.setAttribute(k, i.toString()), i += 1, !t.searchReturnButton || t.searchReturnButton.setAttribute(k, i.toString())), !t.globalLogo || (t.globalLogo.setAttribute(k, i.toString()), i += 1), !t.shoppingCart || (t.shoppingCart.setAttribute(k, i.toString()), i += 1), !t.meControl || (t.meControl.setAttribute(k, i.toString()), i += 1)) : (!t.cookieAlertCancel || t.cookieAlertCancel.removeAttribute(k), !t.cookieAlertAboutAds || t.cookieAlertAboutAds.removeAttribute(k), !t.skipToMainBanner || t.skipToMainBanner.setAttribute(k, "0"), !t.hamburgerButton || t.hamburgerButton.removeAttribute(k), !t.searchBox || t.searchBox.removeAttribute(k), !t.searchButton || t.searchButton.removeAttribute(k), !t.searchReturnButton || t.searchReturnButton.removeAttribute(k), !t.globalLogo || t.globalLogo.removeAttribute(k), !t.shoppingCart || t.shoppingCart.removeAttribute(k), !t.meControl || t.meControl.setAttribute(k, "0"), !t.categoryButton || t.categoryButton.removeAttribute(k))
                        }
                    };
                    this.isSingleStack = o.selectFirstElement(".c-sgl-stck");
                    this.headerElement = o.selectFirstElement(n.selector);
                    this.globalLogo = o.selectFirstElement(d + " .c-logo");
                    this.cookieAlertCancel = o.selectFirstElement(nt);
                    this.cookieAlertAboutAds = o.selectFirstElement(tt);
                    this.skipToMainBanner = o.selectFirstElement(it);
                    this.hamburgerButton = o.selectFirstElement(d + " " + rt + " ");
                    this.searchReturnButton = o.selectFirstElement(d + " " + ut);
                    this.globalHeaderElement = o.selectFirstElement(d);
                    o.removeClass(this.headerElement, "no-js");
                    this.catPaddles = new i.UhfPaddles(o.selectFirstElement(g));
                    this.globalPaddles = new i.UhfPaddles(o.selectFirstElement(d));
                    this.applyFlexClassNameForLegacyBrowsers();
                    this.isMobile() && !this.wasMobile ? (e.NavigationMenus.init(), e.NavigationMenus.handleMoveIntoMobileViewport(), this.wasMobile = !0, this.catPaddles.handleMoveIntoMobileViewport(), this.globalPaddles.handleMoveIntoMobileViewport()) : (this.wasMobile = !1, this.catPaddles.handleMoveIntoDesktopViewport(), this.globalPaddles.handleMoveIntoDesktopViewport(), this.menuElement = o.selectElements(".c-uhf-menu"), !this.menuElement || o.addEvent(this.menuElement, o.eventTypes.click, this.initializeMenus), this.isSingleStack && (this.overflowMenuElement = new f.UhfOverflowMenu, this.overflowMenuElement.handleMoveIntoDesktopViewport()));
                    this.searchElement = o.selectFirstElement(d + "  .c-search");
                    this.searchBox = o.selectFirstElement("input", this.searchElement);
                    this.searchButton = o.selectFirstElement("button", this.searchElement);
                    this.initializeSearch();
                    ct = !!o.selectFirstElement("#" + r.ShoppingCart.shoppingCartFrameId);
                    ct && new r.ShoppingCart;
                    this.shoppingCart = o.selectFirstElement(r.ShoppingCart.shoppingCartAnchorId);
                    this.meControl = o.selectFirstElement(ft);
                    this.categoryButton = o.selectFirstElement(et);
                    o.addThrottledEvent(window, o.eventTypes.resize, this.onWindowResize, 66);
                    p = o.selectFirstElement("#uhfCookieAlert");
                    p && (this.cookieAlert = new c.UhfCookieAlert(p), this.cookieAlert.subscribe({
                        onBannerClosed: this.delegateBannerNotification
                    }), this.updateBannerBufferHeight());
                    var lt = window.mscc,
                        ht = o.selectFirstElement("#epb"),
                        at = o.hasClass(p, this.hiddenClass) || lt && !lt.isVisible();
                    (!p || at) && (this.edgePromoBanner = new l.UhfPromoBanner(ht), this.edgePromoBanner.subscribe({
                        onBannerClosed: this.delegateBannerNotification
                    }), this.updateBannerBufferHeight());
                    (!p || at) && (!ht || o.hasClass(ht, this.hiddenClass)) && (vt = o.selectFirstElement("#swp"), o.removeClass(vt, this.hiddenClass));
                    st.setAction();
                    a.UhfLanguageToggle.init();
                    v.UhfCookieAuditor.audit();
                    yt = new y.UhfGreenId;
                    setTimeout(yt.createGreenIdIframe, 6e3);
                    window.msCommonShell = window.msCommonShell || {};
                    pt = window.msCommonShell._catHTML;
                    window.msCommonShell._catHTML = null;
                    window.msCommonShell.swapCategoryHeader = this.swapCategoryHeader.bind(this);
                    this.swapCategoryHeader(pt);
                    this.updateTabindexOrder(this.isMobile());
                    o.addEvent(window, o.eventTypes.resize, this.stickFooterToBottom);
                    this.stickFooterToBottom();
                    this.isSingleStack && !this.isMobile() && this.enableKeyBoardNavigation()
                }
                return n.prototype.setHeaderTop = function(n) {
                    o.css(this.headerElement, "top", n)
                }, n.prototype.checkForViewportChange = function() {
                    var n = this.isMobile();
                    n && !this.wasMobile ? (!this.menuElement || o.removeEvent(this.menuElement, o.eventTypes.click, this.initializeMenus), e.NavigationMenus.isMenuInitialized || e.NavigationMenus.init(), this.isSingleStack && this.overflowMenuElement && this.overflowMenuElement.handleMoveIntoMobileViewport(), e.NavigationMenus.handleMoveIntoMobileViewport(), this.searchModule && this.searchModule.hide(), this.catPaddles.handleMoveIntoMobileViewport(), this.globalPaddles.handleMoveIntoMobileViewport(), this.updateTabindexOrder(!0), this.wasMobile = !0) : !n && this.wasMobile && (e.NavigationMenus.handleMoveIntoDesktopViewport(), this.searchModule && this.searchModule.hide(), this.catPaddles.handleMoveIntoDesktopViewport(), this.globalPaddles.handleMoveIntoDesktopViewport(), this.isSingleStack && (this.overflowMenuElement ? this.overflowMenuElement.handleMoveIntoDesktopViewport() : (this.overflowMenuElement = new f.UhfOverflowMenu, this.overflowMenuElement.handleMoveIntoDesktopViewport())), this.wasMobile = !1, this.updateTabindexOrder())
                }, n.setTheme = function(t) {
                    var s = o.selectFirstElement(".c-uhfh.f-transparent"),
                        u, f, e;
                    if (s) {
                        var h = o.selectElements(d + "," + g, s),
                            i = ("theme-" + t).toLowerCase(),
                            c = /theme-(dark|light)/,
                            r = c.test(i) ? h[0].className.match(c)[0] : !1;
                        if (!!r && r !== i)
                            for (n.swapLogoImage(i, r), u = 0, f = h; u < f.length; u++) e = f[u], o.removeClass(e, r), o.addClass(e, i)
                    }
                }, n.swapLogoImage = function(t, i) {
                    var r = o.selectFirstElement(n.logoImageSelector);
                    if (r) {
                        var u = function(n) {
                                return n === "theme-light" ? "gray" : "white"
                            },
                            f = u(i),
                            e = u(t);
                        r.setAttribute("src", r.src.replace(f, e))
                    }
                }, n.prototype.applyFlexClassNameForLegacyBrowsers = function() {
                    for (var i, r = document.createElement("p").style, n = 0, t = ["flex", "msFlex", "OFlex", "MozFlex", "WebkitFlex"]; n < t.length; n++)
                        if (i = t[n], r[i] !== undefined) return;
                    o.addClass(this.headerElement, "context-noflex")
                }, n.selector = ".c-uhfh", n.logoImageSelector = ".c-uhfh > div:first-child .c-logo .c-image", n
            }();
        t.UniversalHeader = ht
    })
})()