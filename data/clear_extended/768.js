/* Disable minification (remove `.min` from URL path) for more info */

(function(undefined) {
    function Call(t, l) {
        var n = arguments.length > 2 ? arguments[2] : [];
        if (!1 === IsCallable(t)) throw new TypeError(Object.prototype.toString.call(t) + "is not a function.");
        return t.apply(l, n)
    }

    function Get(n, t) {
        return n[t]
    }

    function HasProperty(n, r) {
        return r in n
    }

    function IsCallable(n) {
        return "function" == typeof n
    }

    function ToInteger(n) {
        var i = Number(n);
        return isNaN(i) ? 0 : 1 / i === Infinity || 1 / i == -Infinity || i === Infinity || i === -Infinity ? i : (i < 0 ? -1 : 1) * Math.floor(Math.abs(i))
    }

    function ToLength(n) {
        var t = ToInteger(n);
        return t <= 0 ? 0 : Math.min(t, Math.pow(2, 53) - 1)
    }

    function ToObject(e) {
        if (null === e || e === undefined) throw TypeError();
        return Object(e)
    }

    function GetV(t, e) {
        return ToObject(t)[e]
    }

    function GetMethod(e, n) {
        var r = GetV(e, n);
        if (null === r || r === undefined) return undefined;
        if (!1 === IsCallable(r)) throw new TypeError("Method not callable: " + n);
        return r
    }

    function Type(e) {
        switch (typeof e) {
            case "undefined":
                return "undefined";
            case "boolean":
                return "boolean";
            case "number":
                return "number";
            case "string":
                return "string";
            case "symbol":
                return "symbol";
            default:
                return null === e ? "null" : "Symbol" in this && e instanceof this.Symbol ? "symbol" : "object"
        }
    }

    function OrdinaryToPrimitive(r, t) {
        if ("string" === t) var e = ["toString", "valueOf"];
        else e = ["valueOf", "toString"];
        for (var i = 0; i < e.length; ++i) {
            var n = e[i],
                a = Get(r, n);
            if (IsCallable(a)) {
                var o = Call(a, r);
                if ("object" !== Type(o)) return o
            }
        }
        throw new TypeError("Cannot convert to primitive.")
    }

    function ToPrimitive(e) {
        var t = arguments.length > 1 ? arguments[1] : undefined;
        if ("object" === Type(e)) {
            if (arguments.length < 2) var i = "default";
            else t === String ? i = "string" : t === Number && (i = "number");
            var r = "function" == typeof this.Symbol && "symbol" == typeof this.Symbol.toPrimitive ? GetMethod(e, this.Symbol.toPrimitive) : undefined;
            if (r !== undefined) {
                var n = Call(r, e, [i]);
                if ("object" !== Type(n)) return n;
                throw new TypeError("Cannot convert exotic object to primitive.")
            }
            return "default" === i && (i = "number"), OrdinaryToPrimitive(e, i)
        }
        return e
    }

    function ToString(t) {
        switch (Type(t)) {
            case "symbol":
                throw new TypeError("Cannot convert a Symbol value to a string");
            case "object":
                return ToString(ToPrimitive(t, "string"));
            default:
                return String(t)
        }
    }
    if (!("document" in this)) {
        "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && (this.HTMLDocument ? this.Document = this.HTMLDocument : (this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")(), this.Document.prototype = document));
    }
    if (!('Element' in this && 'HTMLElement' in this)) {
        ! function() {
            function e() {
                return a-- || clearTimeout(t), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (m(document, !0), t && document.body.prototype && clearTimeout(t), !!document.body.prototype)
            }
            if (window.Element && !window.HTMLElement) return void(window.HTMLElement = window.Element);
            window.Element = window.HTMLElement = new Function("return function Element() {}")();
            var t, n = document.appendChild(document.createElement("body")),
                o = n.appendChild(document.createElement("iframe")),
                r = o.contentWindow.document,
                c = Element.prototype = r.appendChild(r.createElement("*")),
                d = {},
                m = function(e, t) {
                    var n, o, r, c = e.childNodes || [],
                        u = -1;
                    if (1 === e.nodeType && e.constructor !== Element) {
                        e.constructor = Element;
                        for (n in d) o = d[n], e[n] = o
                    }
                    for (; r = t && c[++u];) m(r, t);
                    return e
                },
                u = document.getElementsByTagName("*"),
                i = document.createElement,
                a = 100;
            c.attachEvent("onpropertychange", function(e) {
                for (var t, n = e.propertyName, o = !d.hasOwnProperty(n), r = c[n], m = d[n], i = -1; t = u[++i];) 1 === t.nodeType && (o || t[n] === m) && (t[n] = r);
                d[n] = r
            }), c.constructor = Element, c.hasAttribute || (c.hasAttribute = function(e) {
                return null !== this.getAttribute(e)
            }), e() || (document.onreadystatechange = e, t = setInterval(e, 25)), document.createElement = function(e) {
                var t = i(String(e).toLowerCase());
                return m(t)
            }, document.removeChild(n)
        }();
    }
    if (!('document' in this && 'querySelector' in this.document)) {
        ! function() {
            function e(e, n, o) {
                var l, u, c = document.createElement("div"),
                    i = "qsa" + String(Math.random()).slice(3);
                return c.innerHTML = "x<style>" + n + "{qsa:" + i + ";}", l = r.appendChild(c.lastChild), u = t(e, n, o, i), r.removeChild(l), o ? u[0] : u
            }

            function t(e, r, n, o) {
                var l, u = /1|9/.test(e.nodeType),
                    c = e.childNodes,
                    i = [],
                    a = -1;
                if (u && e.currentStyle && e.currentStyle.qsa === o && i.push(e) && n) return i;
                for (; l = c[++a];)
                    if (i = i.concat(t(l, r, n, o)), n && i.length) return i;
                return i
            }
            var r = document.getElementsByTagName("head")[0];
            Document.prototype.querySelector = Element.prototype.querySelector = function(t) {
                return e(this, t, !0)
            }, Document.prototype.querySelectorAll = Element.prototype.querySelectorAll = function(t) {
                return e(this, t, !1)
            }
        }();
    }
    if (!('document' in this && "matches" in document.documentElement)) {
        Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function(e) {
            for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), r = 0; o[r] && o[r] !== t;) ++r;
            return !!o[r]
        };
    }
    if (!('document' in this && "closest" in document.documentElement)) {
        Element.prototype.closest = function(e) {
            for (var n = this; n;) {
                if (n.matches(e)) return n;
                n = "SVGElement" in window && n instanceof SVGElement ? n.parentNode : n.parentElement
            }
            return null
        };
    }
    if (!( // In IE8, defineProperty could only act on DOM elements, so full support
            // for the feature requires the ability to set a property on an arbitrary object
            'defineProperty' in Object && (function() {
                try {
                    var a = {};
                    Object.defineProperty(a, 'test', {
                        value: 42
                    });
                    return true;
                } catch (e) {
                    return false
                }
            }()))) {
        ! function(e) {
            var t = Object.prototype.hasOwnProperty("__defineGetter__"),
                r = "A property cannot both have accessors and be writable or have a value";
            Object.defineProperty = function(n, o, i) {
                if (e && (n === window || n === document || n === Element.prototype || n instanceof Element)) return e(n, o, i);
                if (null === n || !(n instanceof Object || "object" == typeof n)) throw new TypeError("Object.defineProperty called on non-object");
                if (!(i instanceof Object)) throw new TypeError("Property description must be an object");
                var c = String(o),
                    a = "value" in i || "writable" in i,
                    f = "get" in i && typeof i.get,
                    p = "set" in i && typeof i.set;
                if (f) {
                    if ("function" !== f) throw new TypeError("Getter must be a function");
                    if (!t) throw new TypeError("Getters & setters cannot be defined on this javascript engine");
                    if (a) throw new TypeError(r);
                    Object.__defineGetter__.call(n, c, i.get)
                } else n[c] = i.value;
                if (p) {
                    if ("function" !== p) throw new TypeError("Setter must be a function");
                    if (!t) throw new TypeError("Getters & setters cannot be defined on this javascript engine");
                    if (a) throw new TypeError(r);
                    Object.__defineSetter__.call(n, c, i.set)
                }
                return "value" in i && (n[c] = i.value), n
            }
        }(Object.defineProperty);
    }

    function CreateMethodProperty(e, r, t) {
        var a = {
            value: t,
            writable: !0,
            enumerable: !1,
            configurable: !0
        };
        Object.defineProperty(e, r, a)
    }
    if (!('forEach' in Array.prototype)) {
        CreateMethodProperty(Array.prototype, "forEach", function(r) {
            var t = ToObject(this),
                e = t instanceof String ? t.split("") : t,
                n = ToLength(Get(t, "length"));
            if (!1 === IsCallable(r)) throw new TypeError(r + " is not a function");
            for (var o = arguments.length > 1 ? arguments[1] : undefined, a = 0; a < n;) {
                var i = ToString(a);
                if (HasProperty(e, i)) {
                    var f = Get(e, i);
                    Call(r, o, [f, a, t])
                }
                a += 1
            }
            return undefined
        });
    }
    if (!('bind' in Function.prototype)) {
        CreateMethodProperty(Function.prototype, "bind", function(t) {
            var n = Array,
                r = Object,
                o = n.prototype,
                e = function() {},
                l = o.slice,
                p = o.concat,
                a = o.push,
                i = Math.max,
                c = this;
            if (!IsCallable(c)) throw new TypeError("Function.prototype.bind called on incompatible " + c);
            for (var u, y = l.call(arguments, 1), h = function() {
                    if (this instanceof u) {
                        var n = c.apply(this, p.call(y, l.call(arguments)));
                        return r(n) === n ? n : this
                    }
                    return c.apply(t, p.call(y, l.call(arguments)))
                }, s = i(0, c.length - y.length), f = [], b = 0; b < s; b++) a.call(f, "$" + b);
            return u = Function("binder", "return function (" + f.join(",") + "){ return binder.apply(this, arguments); }")(h), c.prototype && (e.prototype = c.prototype, u.prototype = new e, e.prototype = null), u
        });
    }
    if (!('getOwnPropertyDescriptor' in Object && typeof Object.getOwnPropertyDescriptor === 'function' && (function() {
            try {
                var object = {};
                object.test = 0;
                return Object.getOwnPropertyDescriptor(
                    object,
                    "test"
                ).value === 0;
            } catch (exception) {
                return false
            }
        }()))) {
        ! function() {
            function e(e) {
                try {
                    return e.sentinel = 0, 0 === Object.getOwnPropertyDescriptor(e, "sentinel").value
                } catch (t) {}
            }
            var t, r, o, n = Function.prototype.call,
                c = Object.prototype,
                i = n.bind(c.hasOwnProperty);
            if ((o = i(c, "__defineGetter__")) && (t = n.bind(c.__lookupGetter__), r = n.bind(c.__lookupSetter__)), Object.defineProperty) {
                var p = e({});
                if (!("undefined" == typeof document || e(document.createElement("div"))) || !p) var _ = Object.getOwnPropertyDescriptor
            }
            if (!Object.getOwnPropertyDescriptor || _) {
                CreateMethodProperty(Object, "getOwnPropertyDescriptor", function(e, n) {
                    if ("object" != typeof e && "function" != typeof e || null === e) throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " + e);
                    if (_) try {
                        return _.call(Object, e, n)
                    } catch (l) {}
                    if (i(e, n)) {
                        var p = {
                            enumerable: !0,
                            configurable: !0
                        };
                        if (o) {
                            var a = e.__proto__;
                            e.__proto__ = c;
                            var f = t(e, n),
                                u = r(e, n);
                            if (e.__proto__ = a, f || u) return f && (p.get = f), u && (p.set = u), p
                        }
                        return p.value = e[n], p.writable = !0, p
                    }
                })
            }
        }();
    }
    if (!('getOwnPropertyNames' in Object)) {
        var toString = {}.toString,
            split = "".split;
        CreateMethodProperty(Object, "getOwnPropertyNames", function(t) {
            var e, r = [],
                o = ["length", "name", "arguments", "caller", "prototype", "observe", "unobserve"];
            if (void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object");
            t = "[object String]" == toString.call(t) ? split.call(t, "") : Object(t);
            for (e in t) Object.prototype.hasOwnProperty.call(t, e) && r.push(e);
            for (var n = 0, l = o.length; n < l; n++) o[n] in t && r.push(o[n]);
            return r
        });
    }
    if (!('keys' in Object && (function() {
            // Safari 5.0 bug where Object.keys doesn't work with arguments
            return (Object.keys(arguments)).length === 2;
        }(1, 2)) && (function() {
            try {
                // In ES6 Object.keys works on all object except `null` and `undefined`.
                Object.keys('');
                return true;
            } catch (e) {
                return false;
            }
        }()))) {
        Object.keys = function() {
            "use strict";

            function t(t) {
                var e = r.call(t),
                    n = "[object Arguments]" === e;
                return n || (n = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)), n
            }
            var e = Object.prototype.hasOwnProperty,
                r = Object.prototype.toString,
                n = Object.prototype.propertyIsEnumerable,
                o = !n.call({
                    toString: null
                }, "toString"),
                l = n.call(function() {}, "prototype"),
                c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                i = function(t) {
                    var e = t.constructor;
                    return e && e.prototype === t
                },
                u = {
                    $console: !0,
                    $external: !0,
                    $frame: !0,
                    $frameElement: !0,
                    $frames: !0,
                    $innerHeight: !0,
                    $innerWidth: !0,
                    $outerHeight: !0,
                    $outerWidth: !0,
                    $pageXOffset: !0,
                    $pageYOffset: !0,
                    $parent: !0,
                    $scrollLeft: !0,
                    $scrollTop: !0,
                    $scrollX: !0,
                    $scrollY: !0,
                    $self: !0,
                    $webkitIndexedDB: !0,
                    $webkitStorageInfo: !0,
                    $window: !0
                },
                a = function() {
                    if ("undefined" == typeof window) return !1;
                    for (var t in window) try {
                        if (!u["$" + t] && e.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
                            i(window[t])
                        } catch (r) {
                            return !0
                        }
                    } catch (r) {
                        return !0
                    }
                    return !1
                }(),
                f = function(t) {
                    if ("undefined" == typeof window || !a) return i(t);
                    try {
                        return i(t)
                    } catch (e) {
                        return !1
                    }
                };
            return function(n) {
                var i = "[object Function]" === r.call(n),
                    u = t(n),
                    a = "[object String]" === r.call(n),
                    p = [];
                if (n === undefined || null === n) throw new TypeError("Cannot convert undefined or null to object");
                var s = l && i;
                if (a && n.length > 0 && !e.call(n, 0))
                    for (var g = 0; g < n.length; ++g) p.push(String(g));
                if (u && n.length > 0)
                    for (var w = 0; w < n.length; ++w) p.push(String(w));
                else
                    for (var y in n) s && "prototype" === y || !e.call(n, y) || p.push(String(y));
                if (o)
                    for (var h = f(n), $ = 0; $ < c.length; ++$) h && "constructor" === c[$] || !e.call(n, c[$]) || p.push(c[$]);
                return p
            }
        }();
    }
    if (!('assign' in Object)) {
        CreateMethodProperty(Object, "assign", function(e, r) {
            var t = ToObject(e);
            if (1 === arguments.length) return t;
            var n, o, a, c, l = Array.prototype.slice.call(arguments, 1);
            for (n = 0; n < l.length; n++) {
                var i = l[n];
                for (i === undefined || null === i ? a = [] : (c = ToObject(i), a = Object.keys(c)), o = 0; o < a.length; o++) {
                    var f = a[o],
                        u = Object.getOwnPropertyDescriptor(c, f);
                    if (u !== undefined && u.enumerable) {
                        var b = Get(c, f);
                        t[f] = b
                    }
                }
            }
            return t
        });
    }
    if (!('Promise' in this)) {
        ! function(n) {
            function t(r) {
                if (e[r]) return e[r].exports;
                var o = e[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return n[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
            }
            var e = {};
            t.m = n, t.c = e, t.i = function(n) {
                return n
            }, t.d = function(n, e, r) {
                t.o(n, e) || Object.defineProperty(n, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }, t.n = function(n) {
                var e = n && n.__esModule ? function() {
                    return n["default"]
                } : function() {
                    return n
                };
                return t.d(e, "a", e), e
            }, t.o = function(n, t) {
                return Object.prototype.hasOwnProperty.call(n, t)
            }, t.p = "", t(t.s = 100)
        }({
            100: function(n, t, e) {
                (function(n) {
                    var t = e(5);
                    try {
                        n.Promise = t, window.Promise = t
                    } catch (r) {}
                }).call(t, e(2))
            },
            2: function(n, t) {
                var e;
                e = function() {
                    return this
                }();
                try {
                    e = e || Function("return this")() || (0, eval)("this")
                } catch (r) {
                    "object" == typeof window && (e = window)
                }
                n.exports = e
            },
            5: function(n, t, e) {
                (function(t) {
                    ! function() {
                        "use strict";

                        function e() {
                            return rn[q][B] || D
                        }

                        function r(n) {
                            return n && "object" == typeof n
                        }

                        function o(n) {
                            return "function" == typeof n
                        }

                        function i(n, t) {
                            return n instanceof t
                        }

                        function u(n) {
                            return i(n, M)
                        }

                        function c(n, t, e) {
                            if (!t(n)) throw h(e)
                        }

                        function f() {
                            try {
                                return R.apply(S, arguments)
                            } catch (n) {
                                return nn.e = n, nn
                            }
                        }

                        function s(n, t) {
                            return R = n, S = t, f
                        }

                        function a(n, t) {
                            function e() {
                                for (var e = 0; e < o;) t(r[e], r[e + 1]), r[e++] = P, r[e++] = P;
                                o = 0, r.length > n && (r.length = n)
                            }
                            var r = A(n),
                                o = 0;
                            return function(n, t) {
                                r[o++] = n, r[o++] = t, 2 === o && rn.nextTick(e)
                            }
                        }

                        function l(n, t) {
                            var e, r, u, c, f = 0;
                            if (!n) throw h(Q);
                            var a = n[rn[q][z]];
                            if (o(a)) r = a.call(n);
                            else {
                                if (!o(n.next)) {
                                    if (i(n, A)) {
                                        for (e = n.length; f < e;) t(n[f], f++);
                                        return f
                                    }
                                    throw h(Q)
                                }
                                r = n
                            }
                            for (; !(u = r.next()).done;)
                                if ((c = s(t)(u.value, f++)) === nn) throw o(r[G]) && r[G](), c.e;
                            return f
                        }

                        function h(n) {
                            return new TypeError(n)
                        }

                        function v(n) {
                            return (n ? "" : V) + (new M).stack
                        }

                        function _(n, t) {
                            var e = "on" + n.toLowerCase(),
                                r = O[e];
                            H && H.listeners(n).length ? n === Z ? H.emit(n, t._v, t) : H.emit(n, t) : r ? r({
                                reason: t._v,
                                promise: t
                            }) : rn[n](t._v, t)
                        }

                        function p(n) {
                            return n && n._s
                        }

                        function d(n) {
                            if (p(n)) return new n(tn);
                            var t, e, r;
                            return t = new n(function(n, o) {
                                if (t) throw h();
                                e = n, r = o
                            }), c(e, o), c(r, o), t
                        }

                        function w(n, t) {
                            var e = !1;
                            return function(r) {
                                e || (e = !0, L && (n[N] = v(!0)), t === Y ? k(n, r) : x(n, t, r))
                            }
                        }

                        function y(n, t, e, r) {
                            return o(e) && (t._onFulfilled = e), o(r) && (n[J] && _(X, n), t._onRejected = r), L && (t._p = n), n[n._c++] = t, n._s !== $ && on(n, t), t
                        }

                        function m(n) {
                            if (n._umark) return !0;
                            n._umark = !0;
                            for (var t, e = 0, r = n._c; e < r;)
                                if (t = n[e++], t._onRejected || m(t)) return !0
                        }

                        function j(n, t) {
                            function e(n) {
                                return r.push(n.replace(/^\s+|\s+$/g, ""))
                            }
                            var r = [];
                            return L && (t[N] && e(t[N]), function o(n) {
                                n && K in n && (o(n._next), e(n[K] + ""), o(n._p))
                            }(t)), (n && n.stack ? n.stack : n) + ("\n" + r.join("\n")).replace(en, "")
                        }

                        function g(n, t) {
                            return n(t)
                        }

                        function x(n, t, e) {
                            var r = 0,
                                o = n._c;
                            if (n._s === $)
                                for (n._s = t, n._v = e, t === U && (L && u(e) && (e.longStack = j(e, n)), un(n)); r < o;) on(n, n[r++]);
                            return n
                        }

                        function k(n, t) {
                            if (t === n && t) return x(n, U, h(W)), n;
                            if (t !== C && (o(t) || r(t))) {
                                var e = s(b)(t);
                                if (e === nn) return x(n, U, e.e), n;
                                o(e) ? (L && p(t) && (n._next = t), p(t) ? T(n, t, e) : rn.nextTick(function() {
                                    T(n, t, e)
                                })) : x(n, Y, t)
                            } else x(n, Y, t);
                            return n
                        }

                        function b(n) {
                            return n.then
                        }

                        function T(n, t, e) {
                            var r = s(e, t)(function(e) {
                                t && (t = C, k(n, e))
                            }, function(e) {
                                t && (t = C, x(n, U, e))
                            });
                            r === nn && t && (x(n, U, r.e), t = C)
                        }
                        var P, R, S, C = null,
                            F = "object" == typeof self,
                            O = F ? self : t,
                            E = O.Promise,
                            H = O.process,
                            I = O.console,
                            L = !1,
                            A = Array,
                            M = Error,
                            U = 1,
                            Y = 2,
                            $ = 3,
                            q = "Symbol",
                            z = "iterator",
                            B = "species",
                            D = q + "(" + B + ")",
                            G = "return",
                            J = "_uh",
                            K = "_pt",
                            N = "_st",
                            Q = "Invalid argument",
                            V = "\nFrom previous ",
                            W = "Chaining cycle detected for promise",
                            X = "rejectionHandled",
                            Z = "unhandledRejection",
                            nn = {
                                e: C
                            },
                            tn = function() {},
                            en = /^.+\/node_modules\/yaku\/.+\n?/gm,
                            rn = function(n) {
                                var t, e = this;
                                if (!r(e) || e._s !== P) throw h("Invalid this");
                                if (e._s = $, L && (e[K] = v()), n !== tn) {
                                    if (!o(n)) throw h(Q);
                                    (t = s(n)(w(e, Y), w(e, U))) === nn && x(e, U, t.e)
                                }
                            };
                        rn["default"] = rn,
                            function(n, t) {
                                for (var e in t) n[e] = t[e]
                            }(rn.prototype, {
                                then: function(n, t) {
                                    if (this._s === undefined) throw h();
                                    return y(this, d(rn.speciesConstructor(this, rn)), n, t)
                                },
                                "catch": function(n) {
                                    return this.then(P, n)
                                },
                                "finally": function(n) {
                                    return this.then(function(t) {
                                        return rn.resolve(n()).then(function() {
                                            return t
                                        })
                                    }, function(t) {
                                        return rn.resolve(n()).then(function() {
                                            throw t
                                        })
                                    })
                                },
                                _c: 0,
                                _p: C
                            }), rn.resolve = function(n) {
                                return p(n) ? n : k(d(this), n)
                            }, rn.reject = function(n) {
                                return x(d(this), U, n)
                            }, rn.race = function(n) {
                                var t = this,
                                    e = d(t),
                                    r = function(n) {
                                        x(e, Y, n)
                                    },
                                    o = function(n) {
                                        x(e, U, n)
                                    },
                                    i = s(l)(n, function(n) {
                                        t.resolve(n).then(r, o)
                                    });
                                return i === nn ? t.reject(i.e) : e
                            }, rn.all = function(n) {
                                function t(n) {
                                    x(o, U, n)
                                }
                                var e, r = this,
                                    o = d(r),
                                    i = [];
                                return (e = s(l)(n, function(n, u) {
                                    r.resolve(n).then(function(n) {
                                        i[u] = n, --e || x(o, Y, i)
                                    }, t)
                                })) === nn ? r.reject(e.e) : (e || x(o, Y, []), o)
                            }, rn.Symbol = O[q] || {}, s(function() {
                                Object.defineProperty(rn, e(), {
                                    get: function() {
                                        return this
                                    }
                                })
                            })(), rn.speciesConstructor = function(n, t) {
                                var r = n.constructor;
                                return r ? r[e()] || t : t
                            }, rn.unhandledRejection = function(n, t) {
                                I && I.error("Uncaught (in promise)", L ? t.longStack : j(n, t))
                            }, rn.rejectionHandled = tn, rn.enableLongStackTrace = function() {
                                L = !0
                            }, rn.nextTick = F ? function(n) {
                                E ? new E(function(n) {
                                    n()
                                }).then(n) : setTimeout(n)
                            } : H.nextTick, rn._s = 1;
                        var on = a(999, function(n, t) {
                                var e, r;
                                return (r = n._s !== U ? t._onFulfilled : t._onRejected) === P ? void x(t, n._s, n._v) : (e = s(g)(r, n._v)) === nn ? void x(t, U, e.e) : void k(t, e)
                            }),
                            un = a(9, function(n) {
                                m(n) || (n[J] = 1, _(Z, n))
                            });
                        try {
                            n.exports = rn
                        } catch (cn) {
                            O.Yaku = rn
                        }
                    }()
                }).call(t, e(2))
            }
        });
    }
    if (!('Window' in this)) {
        "undefined" == typeof WorkerGlobalScope && "function" != typeof importScripts && function(o) {
            o.constructor ? o.Window = o.constructor : (o.Window = o.constructor = new Function("return function Window() {}")()).prototype = this
        }(this);
    }
    if (!((function(global) {

            if (!('Event' in global)) return false;
            if (typeof global.Event === 'function') return true;

            try {

                // In IE 9-11, the Event object exists but cannot be instantiated
                new Event('click');
                return true;
            } catch (e) {
                return false;
            }
        }(this)))) {
        ! function() {
            function e(e, t) {
                for (var n = -1, o = e.length; ++n < o;)
                    if (n in e && e[n] === t) return n;
                return -1
            }

            function t(e, t) {
                if (!e) throw new Error("Not enough arguments");
                var n;
                if ("createEvent" in document) {
                    n = document.createEvent("Event");
                    var o = !(!t || t.bubbles === undefined) && t.bubbles,
                        i = !(!t || t.cancelable === undefined) && t.cancelable;
                    return n.initEvent(e, o, i), n
                }
                return n = document.createEventObject(), n.type = e, n.bubbles = !(!t || t.bubbles === undefined) && t.bubbles, n.cancelable = !(!t || t.cancelable === undefined) && t.cancelable, n
            }
            var n = {
                click: 1,
                dblclick: 1,
                keyup: 1,
                keypress: 1,
                keydown: 1,
                mousedown: 1,
                mouseup: 1,
                mousemove: 1,
                mouseover: 1,
                mouseenter: 1,
                mouseleave: 1,
                mouseout: 1,
                storage: 1,
                storagecommit: 1,
                textinput: 1
            };
            if ("undefined" != typeof document && "undefined" != typeof window) {
                var o = window.Event && window.Event.prototype || null;
                t.NONE = 0, t.CAPTURING_PHASE = 1, t.AT_TARGET = 2, t.BUBBLING_PHASE = 3, window.Event = Window.prototype.Event = t, o && Object.defineProperty(window.Event, "prototype", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: o
                }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function() {
                    var t = this,
                        o = arguments[0],
                        i = arguments[1];
                    if (t === window && o in n) throw new Error("In IE8 the event: " + o + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                    t._events || (t._events = {}), t._events[o] || (t._events[o] = function(n) {
                        var o, i = t._events[n.type].list,
                            r = i.slice(),
                            c = -1,
                            a = r.length;
                        for (n.preventDefault = function() {
                                !1 !== n.cancelable && (n.returnValue = !1)
                            }, n.stopPropagation = function() {
                                n.cancelBubble = !0
                            }, n.stopImmediatePropagation = function() {
                                n.cancelBubble = !0, n.cancelImmediate = !0
                            }, n.currentTarget = t, n.relatedTarget = n.fromElement || null, n.target = n.target || n.srcElement || t, n.timeStamp = (new Date).getTime(), n.clientX && (n.pageX = n.clientX + document.documentElement.scrollLeft, n.pageY = n.clientY + document.documentElement.scrollTop); ++c < a && !n.cancelImmediate;) c in r && (o = r[c], -1 !== e(i, o) && "function" == typeof o && o.call(t, n))
                    }, t._events[o].list = [], t.attachEvent && t.attachEvent("on" + o, t._events[o])), t._events[o].list.push(i)
                }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function() {
                    var t, n = this,
                        o = arguments[0],
                        i = arguments[1];
                    n._events && n._events[o] && n._events[o].list && -1 !== (t = e(n._events[o].list, i)) && (n._events[o].list.splice(t, 1), n._events[o].list.length || (n.detachEvent && n.detachEvent("on" + o, n._events[o]), delete n._events[o]))
                }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function(e) {
                    if (!arguments.length) throw new Error("Not enough arguments");
                    if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0");
                    var t = this,
                        n = e.type;
                    try {
                        if (!e.bubbles) {
                            e.cancelBubble = !0;
                            var o = function(e) {
                                e.cancelBubble = !0, (t || window).detachEvent("on" + n, o)
                            };
                            this.attachEvent("on" + n, o)
                        }
                        this.fireEvent("on" + n, e)
                    } catch (i) {
                        e.target = t;
                        do {
                            e.currentTarget = t, "_events" in t && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), t = 9 === t.nodeType ? t.parentWindow : t.parentNode
                        } while (t && !e.cancelBubble)
                    }
                    return !0
                }, document.attachEvent("onreadystatechange", function() {
                    "complete" === document.readyState && document.dispatchEvent(new t("DOMContentLoaded", {
                        bubbles: !0
                    }))
                }))
            }
        }();
    }
    if (!('XMLHttpRequest' in this && 'prototype' in this.XMLHttpRequest && 'addEventListener' in this.XMLHttpRequest.prototype)) {
        ! function(e, t) {
            e.XMLHttpRequest = function() {
                var e = this,
                    n = e._request = t ? new t : new ActiveXObject("MSXML2.XMLHTTP.3.0");
                n.onreadystatechange = function() {
                    e.readyState = n.readyState;
                    var t = 4 === e.readyState;
                    e.response = e.responseText = t ? n.responseText : null, e.status = t ? n.status : null, e.statusText = t ? n.statusText : null, e.dispatchEvent(new Event("readystatechange")), t && e.dispatchEvent(new Event("load"))
                }, "onerror" in n && (n.onerror = function() {
                    e.dispatchEvent(new Event("error"))
                })
            }, e.XMLHttpRequest.UNSENT = 0, e.XMLHttpRequest.OPENED = 1, e.XMLHttpRequest.HEADERS_RECEIVED = 2, e.XMLHttpRequest.LOADING = 3, e.XMLHttpRequest.DONE = 4;
            var n = e.XMLHttpRequest.prototype;
            n.addEventListener = e.addEventListener, n.removeEventListener = e.removeEventListener, n.dispatchEvent = e.dispatchEvent, n.abort = function() {
                return this._request()
            }, n.getAllResponseHeaders = function() {
                return this._request.getAllResponseHeaders()
            }, n.getResponseHeader = function(e) {
                return this._request.getResponseHeader(e)
            }, n.open = function(e, t) {
                this._request.open(e, t, arguments[2], arguments[3], arguments[4])
            }, n.overrideMimeType = function(e) {
                this._request.overrideMimeType(e)
            }, n.send = function() {
                this._request.send(0 in arguments ? arguments[0] : null)
            }, n.setRequestHeader = function(e, t) {
                this._request.setRequestHeader(e, t)
            }
        }(this, this.XMLHttpRequest);
    }
    if (!('fetch' in this)) {
        ! function(t) {
            "use strict";

            function e(t) {
                if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
                return t.toLowerCase()
            }

            function r(t) {
                return "string" != typeof t && (t = String(t)), t
            }

            function o(t) {
                var e = {
                    next: function() {
                        var e = t.shift();
                        return {
                            done: e === undefined,
                            value: e
                        }
                    }
                };
                return m.iterable && (e[Symbol.iterator] = function() {
                    return e
                }), e
            }

            function n(t) {
                this.map = {}, t instanceof n ? t.forEach(function(t, e) {
                    this.append(e, t)
                }, this) : Array.isArray(t) ? t.forEach(function(t) {
                    this.append(t[0], t[1])
                }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                    this.append(e, t[e])
                }, this)
            }

            function i(t) {
                if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                t.bodyUsed = !0
            }

            function s(t) {
                return new Promise(function(e, r) {
                    t.onload = function() {
                        e(t.result)
                    }, t.onerror = function() {
                        r(t.error)
                    }
                })
            }

            function a(t) {
                var e = new FileReader,
                    r = s(e);
                return e.readAsArrayBuffer(t), r
            }

            function u(t) {
                var e = new FileReader,
                    r = s(e);
                return e.readAsText(t), r
            }

            function h(t) {
                for (var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++) r[o] = String.fromCharCode(e[o]);
                return r.join("")
            }

            function f(t) {
                if (t.slice) return t.slice(0);
                var e = new Uint8Array(t.byteLength);
                return e.set(new Uint8Array(t)), e.buffer
            }

            function d() {
                return this.bodyUsed = !1, this._initBody = function(t) {
                    if (this._bodyInit = t, t)
                        if ("string" == typeof t) this._bodyText = t;
                        else if (m.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                    else if (m.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                    else if (m.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                    else if (m.arrayBuffer && m.blob && v(t)) this._bodyArrayBuffer = f(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                    else {
                        if (!m.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !B(t)) throw new Error("unsupported BodyInit type");
                        this._bodyArrayBuffer = f(t)
                    } else this._bodyText = "";
                    this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : m.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, m.blob && (this.blob = function() {
                    var t = i(this);
                    if (t) return t;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(a)
                }), this.text = function() {
                    var t = i(this);
                    if (t) return t;
                    if (this._bodyBlob) return u(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(h(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, m.formData && (this.formData = function() {
                    return this.text().then(p)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }

            function y(t) {
                var e = t.toUpperCase();
                return _.indexOf(e) > -1 ? e : t
            }

            function l(t, e) {
                e = e || {};
                var r = e.body;
                if (t instanceof l) {
                    if (t.bodyUsed) throw new TypeError("Already read");
                    this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new n(t.headers)), this.method = t.method, this.mode = t.mode, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
                } else this.url = String(t);
                if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new n(e.headers)), this.method = y(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(r)
            }

            function p(t) {
                var e = new FormData;
                return t.trim().split("&").forEach(function(t) {
                    if (t) {
                        var r = t.split("="),
                            o = r.shift().replace(/\+/g, " "),
                            n = r.join("=").replace(/\+/g, " ");
                        e.append(decodeURIComponent(o), decodeURIComponent(n))
                    }
                }), e
            }

            function c(t) {
                var e = new n;
                return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                    var r = t.split(":"),
                        o = r.shift().trim();
                    if (o) {
                        var n = r.join(":").trim();
                        e.append(o, n)
                    }
                }), e
            }

            function b(t, e) {
                e || (e = {}), this.type = "default", this.status = e.status === undefined ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new n(e.headers), this.url = e.url || "", this._initBody(t)
            }
            var m = {
                searchParams: "URLSearchParams" in t,
                iterable: "Symbol" in t && "iterator" in Symbol,
                blob: "FileReader" in t && "Blob" in t && function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData" in t,
                arrayBuffer: "ArrayBuffer" in t
            };
            if (m.arrayBuffer) var w = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                v = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                },
                B = ArrayBuffer.isView || function(t) {
                    return t && w.indexOf(Object.prototype.toString.call(t)) > -1
                };
            n.prototype.append = function(t, o) {
                t = e(t), o = r(o);
                var n = this.map[t];
                this.map[t] = n ? n + "," + o : o
            }, n.prototype["delete"] = function(t) {
                delete this.map[e(t)]
            }, n.prototype.get = function(t) {
                return t = e(t), this.has(t) ? this.map[t] : null
            }, n.prototype.has = function(t) {
                return this.map.hasOwnProperty(e(t))
            }, n.prototype.set = function(t, o) {
                this.map[e(t)] = r(o)
            }, n.prototype.forEach = function(t, e) {
                for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
            }, n.prototype.keys = function() {
                var t = [];
                return this.forEach(function(e, r) {
                    t.push(r)
                }), o(t)
            }, n.prototype.values = function() {
                var t = [];
                return this.forEach(function(e) {
                    t.push(e)
                }), o(t)
            }, n.prototype.entries = function() {
                var t = [];
                return this.forEach(function(e, r) {
                    t.push([r, e])
                }), o(t)
            }, m.iterable && (n.prototype[Symbol.iterator] = n.prototype.entries);
            var _ = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            l.prototype.clone = function() {
                return new l(this, {
                    body: this._bodyInit
                })
            }, d.call(l.prototype), d.call(b.prototype), b.prototype.clone = function() {
                return new b(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new n(this.headers),
                    url: this.url
                })
            }, b.error = function() {
                var t = new b(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var A = [301, 302, 303, 307, 308];
            b.redirect = function(t, e) {
                if (-1 === A.indexOf(e)) throw new RangeError("Invalid status code");
                return new b(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }, t.Headers = n, t.Request = l, t.Response = b, t.fetch = function(t, e) {
                return new Promise(function(r, o) {
                    var n = new l(t, e),
                        i = new XMLHttpRequest;
                    i.onload = function() {
                        var t = {
                            status: i.status,
                            statusText: i.statusText,
                            headers: c(i.getAllResponseHeaders() || "")
                        };
                        t.url = "responseURL" in i ? i.responseURL : t.headers.get("X-Request-URL");
                        var e = "response" in i ? i.response : i.responseText;
                        r(new b(e, t))
                    }, i.onerror = function() {
                        o(new TypeError("Network request failed"))
                    }, i.ontimeout = function() {
                        o(new TypeError("Network request failed"))
                    }, i.open(n.method, n.url, !0), "include" === n.credentials ? i.withCredentials = !0 : "omit" === n.credentials && (i.withCredentials = !1), "responseType" in i && m.blob && (i.responseType = "blob"), n.headers.forEach(function(t, e) {
                        i.setRequestHeader(e, t)
                    }), i.send("undefined" == typeof n._bodyInit ? null : n._bodyInit)
                })
            }, t.fetch.polyfill = !0
        }("undefined" != typeof self ? self : this);
    }
}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});