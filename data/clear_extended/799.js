! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["cision/stockquote.js"] = e() : t["cision/stockquote.js"] = e()
}(window, function() {
    return function(t) {
        var e = {};

        function r(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = t, r.c = e, r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }, r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, r.t = function(t, e) {
            if (1 & e && (t = r(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var o in t) r.d(n, o, function(e) {
                    return t[e]
                }.bind(null, o));
            return n
        }, r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return r.d(e, "a", e), e
        }, r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, r.p = "/", r(r.s = 59)
    }([function(t, e, r) {
        "use strict";
        r.r(e), r.d(e, "h", function() {
            return s
        }), r.d(e, "createElement", function() {
            return s
        }), r.d(e, "cloneElement", function() {
            return f
        }), r.d(e, "createRef", function() {
            return U
        }), r.d(e, "Component", function() {
            return F
        }), r.d(e, "render", function() {
            return R
        }), r.d(e, "rerender", function() {
            return d
        }), r.d(e, "options", function() {
            return o
        });
        var n = function() {},
            o = {},
            i = [],
            a = [];

        function s(t, e) {
            var r, s, c, u, l = a;
            for (u = arguments.length; u-- > 2;) i.push(arguments[u]);
            for (e && null != e.children && (i.length || i.push(e.children), delete e.children); i.length;)
                if ((s = i.pop()) && void 0 !== s.pop)
                    for (u = s.length; u--;) i.push(s[u]);
                else "boolean" == typeof s && (s = null), (c = "function" != typeof t) && (null == s ? s = "" : "number" == typeof s ? s = String(s) : "string" != typeof s && (c = !1)), c && r ? l[l.length - 1] += s : l === a ? l = [s] : l.push(s), r = c;
            var f = new n;
            return f.nodeName = t, f.children = l, f.attributes = null == e ? void 0 : e, f.key = null == e ? void 0 : e.key, void 0 !== o.vnode && o.vnode(f), f
        }

        function c(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        }

        function u(t, e) {
            null != t && ("function" == typeof t ? t(e) : t.current = e)
        }
        var l = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

        function f(t, e) {
            return s(t.nodeName, c(c({}, t.attributes), e), arguments.length > 2 ? [].slice.call(arguments, 2) : t.children)
        }
        var p = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
            h = [];

        function y(t) {
            !t._dirty && (t._dirty = !0) && 1 == h.push(t) && (o.debounceRendering || l)(d)
        }

        function d() {
            for (var t; t = h.pop();) t._dirty && N(t)
        }

        function b(t, e) {
            return t.normalizedNodeName === e || t.nodeName.toLowerCase() === e.toLowerCase()
        }

        function m(t) {
            var e = c({}, t.attributes);
            e.children = t.children;
            var r = t.nodeName.defaultProps;
            if (void 0 !== r)
                for (var n in r) void 0 === e[n] && (e[n] = r[n]);
            return e
        }

        function v(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        }

        function g(t, e, r, n, o) {
            if ("className" === e && (e = "class"), "key" === e);
            else if ("ref" === e) u(r, null), u(n, t);
            else if ("class" !== e || o)
                if ("style" === e) {
                    if (n && "string" != typeof n && "string" != typeof r || (t.style.cssText = n || ""), n && "object" == typeof n) {
                        if ("string" != typeof r)
                            for (var i in r) i in n || (t.style[i] = "");
                        for (var i in n) t.style[i] = "number" == typeof n[i] && !1 === p.test(i) ? n[i] + "px" : n[i]
                    }
                } else if ("dangerouslySetInnerHTML" === e) n && (t.innerHTML = n.__html || "");
            else if ("o" == e[0] && "n" == e[1]) {
                var a = e !== (e = e.replace(/Capture$/, ""));
                e = e.toLowerCase().substring(2), n ? r || t.addEventListener(e, w, a) : t.removeEventListener(e, w, a), (t._listeners || (t._listeners = {}))[e] = n
            } else if ("list" !== e && "type" !== e && !o && e in t) {
                try {
                    t[e] = null == n ? "" : n
                } catch (t) {}
                null != n && !1 !== n || "spellcheck" == e || t.removeAttribute(e)
            } else {
                var s = o && e !== (e = e.replace(/^xlink:?/, ""));
                null == n || !1 === n ? s ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.removeAttribute(e) : "function" != typeof n && (s ? t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), n) : t.setAttribute(e, n))
            } else t.className = n || ""
        }

        function w(t) {
            return this._listeners[t.type](o.event && o.event(t) || t)
        }
        var A = [],
            j = 0,
            O = !1,
            x = !1;

        function C() {
            for (var t; t = A.shift();) o.afterMount && o.afterMount(t), t.componentDidMount && t.componentDidMount()
        }

        function T(t, e, r, n, o, i) {
            j++ || (O = null != o && void 0 !== o.ownerSVGElement, x = null != t && !("__preactattr_" in t));
            var a = E(t, e, r, n, i);
            return o && a.parentNode !== o && o.appendChild(a), --j || (x = !1, i || C()), a
        }

        function E(t, e, r, n, o) {
            var i = t,
                a = O;
            if (null != e && "boolean" != typeof e || (e = ""), "string" == typeof e || "number" == typeof e) return t && void 0 !== t.splitText && t.parentNode && (!t._component || o) ? t.nodeValue != e && (t.nodeValue = e) : (i = document.createTextNode(e), t && (t.parentNode && t.parentNode.replaceChild(i, t), _(t, !0))), i.__preactattr_ = !0, i;
            var s, c, u = e.nodeName;
            if ("function" == typeof u) return function(t, e, r, n) {
                var o = t && t._component,
                    i = o,
                    a = t,
                    s = o && t._componentConstructor === e.nodeName,
                    c = s,
                    u = m(e);
                for (; o && !c && (o = o._parentComponent);) c = o.constructor === e.nodeName;
                o && c && (!n || o._component) ? (I(o, u, 3, r, n), t = o.base) : (i && !s && (B(i), t = a = null), o = k(e.nodeName, u, r), t && !o.nextBase && (o.nextBase = t, a = null), I(o, u, 1, r, n), t = o.base, a && t !== a && (a._component = null, _(a, !1)));
                return t
            }(t, e, r, n);
            if (O = "svg" === u || "foreignObject" !== u && O, u = String(u), (!t || !b(t, u)) && (s = u, (c = O ? document.createElementNS("http://www.w3.org/2000/svg", s) : document.createElement(s)).normalizedNodeName = s, i = c, t)) {
                for (; t.firstChild;) i.appendChild(t.firstChild);
                t.parentNode && t.parentNode.replaceChild(i, t), _(t, !0)
            }
            var l = i.firstChild,
                f = i.__preactattr_,
                p = e.children;
            if (null == f) {
                f = i.__preactattr_ = {};
                for (var h = i.attributes, y = h.length; y--;) f[h[y].name] = h[y].value
            }
            return !x && p && 1 === p.length && "string" == typeof p[0] && null != l && void 0 !== l.splitText && null == l.nextSibling ? l.nodeValue != p[0] && (l.nodeValue = p[0]) : (p && p.length || null != l) && function(t, e, r, n, o) {
                    var i, a, s, c, u, l = t.childNodes,
                        f = [],
                        p = {},
                        h = 0,
                        y = 0,
                        d = l.length,
                        m = 0,
                        g = e ? e.length : 0;
                    if (0 !== d)
                        for (var w = 0; w < d; w++) {
                            var A = l[w],
                                j = A.__preactattr_,
                                O = g && j ? A._component ? A._component.__key : j.key : null;
                            null != O ? (h++, p[O] = A) : (j || (void 0 !== A.splitText ? !o || A.nodeValue.trim() : o)) && (f[m++] = A)
                        }
                    if (0 !== g)
                        for (var w = 0; w < g; w++) {
                            c = e[w], u = null;
                            var O = c.key;
                            if (null != O) h && void 0 !== p[O] && (u = p[O], p[O] = void 0, h--);
                            else if (y < m)
                                for (i = y; i < m; i++)
                                    if (void 0 !== f[i] && (x = a = f[i], T = o, "string" == typeof(C = c) || "number" == typeof C ? void 0 !== x.splitText : "string" == typeof C.nodeName ? !x._componentConstructor && b(x, C.nodeName) : T || x._componentConstructor === C.nodeName)) {
                                        u = a, f[i] = void 0, i === m - 1 && m--, i === y && y++;
                                        break
                                    } u = E(u, c, r, n), s = l[w], u && u !== t && u !== s && (null == s ? t.appendChild(u) : u === s.nextSibling ? v(s) : t.insertBefore(u, s))
                        }
                    var x, C, T;
                    if (h)
                        for (var w in p) void 0 !== p[w] && _(p[w], !1);
                    for (; y <= m;) void 0 !== (u = f[m--]) && _(u, !1)
                }(i, p, r, n, x || null != f.dangerouslySetInnerHTML),
                function(t, e, r) {
                    var n;
                    for (n in r) e && null != e[n] || null == r[n] || g(t, n, r[n], r[n] = void 0, O);
                    for (n in e) "children" === n || "innerHTML" === n || n in r && e[n] === ("value" === n || "checked" === n ? t[n] : r[n]) || g(t, n, r[n], r[n] = e[n], O)
                }(i, e.attributes, f), O = a, i
        }

        function _(t, e) {
            var r = t._component;
            r ? B(r) : (null != t.__preactattr_ && u(t.__preactattr_.ref, null), !1 !== e && null != t.__preactattr_ || v(t), S(t))
        }

        function S(t) {
            for (t = t.lastChild; t;) {
                var e = t.previousSibling;
                _(t, !0), t = e
            }
        }
        var P = [];

        function k(t, e, r) {
            var n, o = P.length;
            for (t.prototype && t.prototype.render ? (n = new t(e, r), F.call(n, e, r)) : ((n = new F(e, r)).constructor = t, n.render = D); o--;)
                if (P[o].constructor === t) return n.nextBase = P[o].nextBase, P.splice(o, 1), n;
            return n
        }

        function D(t, e, r) {
            return this.constructor(t, r)
        }

        function I(t, e, r, n, i) {
            t._disable || (t._disable = !0, t.__ref = e.ref, t.__key = e.key, delete e.ref, delete e.key, void 0 === t.constructor.getDerivedStateFromProps && (!t.base || i ? t.componentWillMount && t.componentWillMount() : t.componentWillReceiveProps && t.componentWillReceiveProps(e, n)), n && n !== t.context && (t.prevContext || (t.prevContext = t.context), t.context = n), t.prevProps || (t.prevProps = t.props), t.props = e, t._disable = !1, 0 !== r && (1 !== r && !1 === o.syncComponentUpdates && t.base ? y(t) : N(t, 1, i)), u(t.__ref, t))
        }

        function N(t, e, r, n) {
            if (!t._disable) {
                var i, a, s, u = t.props,
                    l = t.state,
                    f = t.context,
                    p = t.prevProps || u,
                    h = t.prevState || l,
                    y = t.prevContext || f,
                    d = t.base,
                    b = t.nextBase,
                    v = d || b,
                    g = t._component,
                    w = !1,
                    O = y;
                if (t.constructor.getDerivedStateFromProps && (l = c(c({}, l), t.constructor.getDerivedStateFromProps(u, l)), t.state = l), d && (t.props = p, t.state = h, t.context = y, 2 !== e && t.shouldComponentUpdate && !1 === t.shouldComponentUpdate(u, l, f) ? w = !0 : t.componentWillUpdate && t.componentWillUpdate(u, l, f), t.props = u, t.state = l, t.context = f), t.prevProps = t.prevState = t.prevContext = t.nextBase = null, t._dirty = !1, !w) {
                    i = t.render(u, l, f), t.getChildContext && (f = c(c({}, f), t.getChildContext())), d && t.getSnapshotBeforeUpdate && (O = t.getSnapshotBeforeUpdate(p, h));
                    var x, E, S = i && i.nodeName;
                    if ("function" == typeof S) {
                        var P = m(i);
                        (a = g) && a.constructor === S && P.key == a.__key ? I(a, P, 1, f, !1) : (x = a, t._component = a = k(S, P, f), a.nextBase = a.nextBase || b, a._parentComponent = t, I(a, P, 0, f, !1), N(a, 1, r, !0)), E = a.base
                    } else s = v, (x = g) && (s = t._component = null), (v || 1 === e) && (s && (s._component = null), E = T(s, i, f, r || !d, v && v.parentNode, !0));
                    if (v && E !== v && a !== g) {
                        var D = v.parentNode;
                        D && E !== D && (D.replaceChild(E, v), x || (v._component = null, _(v, !1)))
                    }
                    if (x && B(x), t.base = E, E && !n) {
                        for (var F = t, R = t; R = R._parentComponent;)(F = R).base = E;
                        E._component = F, E._componentConstructor = F.constructor
                    }
                }
                for (!d || r ? A.push(t) : w || (t.componentDidUpdate && t.componentDidUpdate(p, h, O), o.afterUpdate && o.afterUpdate(t)); t._renderCallbacks.length;) t._renderCallbacks.pop().call(t);
                j || n || C()
            }
        }

        function B(t) {
            o.beforeUnmount && o.beforeUnmount(t);
            var e = t.base;
            t._disable = !0, t.componentWillUnmount && t.componentWillUnmount(), t.base = null;
            var r = t._component;
            r ? B(r) : e && (null != e.__preactattr_ && u(e.__preactattr_.ref, null), t.nextBase = e, v(e), P.push(t), S(e)), u(t.__ref, null)
        }

        function F(t, e) {
            this._dirty = !0, this.context = e, this.props = t, this.state = this.state || {}, this._renderCallbacks = []
        }

        function R(t, e, r) {
            return T(r, t, {}, !1, e, !1)
        }

        function U() {
            return {}
        }
        c(F.prototype, {
            setState: function(t, e) {
                this.prevState || (this.prevState = this.state), this.state = c(c({}, this.state), "function" == typeof t ? t(this.state, this.props) : t), e && this._renderCallbacks.push(e), y(this)
            },
            forceUpdate: function(t) {
                t && this._renderCallbacks.push(t), N(this, 2)
            },
            render: function() {}
        });
        var q = {
            h: s,
            createElement: s,
            cloneElement: f,
            createRef: U,
            Component: F,
            render: R,
            rerender: d,
            options: o
        };
        e.default = q
    }, function(t, e, r) {
        "use strict";
        var n = r(34),
            o = r(36),
            i = "function" == typeof Symbol && "symbol" == typeof Symbol(),
            a = Object.prototype.toString,
            s = Object.defineProperty && function() {
                var t = {};
                try {
                    for (var e in Object.defineProperty(t, "x", {
                            enumerable: !1,
                            value: t
                        }), t) return !1;
                    return t.x === t
                } catch (t) {
                    return !1
                }
            }(),
            c = function(t, e, r, n) {
                var o;
                e in t && ("function" != typeof(o = n) || "[object Function]" !== a.call(o) || !n()) || (s ? Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !1,
                    value: r,
                    writable: !0
                }) : t[e] = r)
            },
            u = function(t, e) {
                var r = arguments.length > 2 ? arguments[2] : {},
                    a = n(e);
                i && (a = a.concat(Object.getOwnPropertySymbols(e))), o(a, function(n) {
                    c(t, n, e[n], r[n])
                })
            };
        u.supportsDescriptors = !!s, t.exports = u
    }, function(t, e, r) {
        "use strict";

        function n(t, e) {
            if (e.Decimals >= 0 || (e.Decimals = 0), 0 === t || isNaN(t)) return e.Default;
            var r = [];
            t < 0 ? (r.push("-"), t = Math.abs(t)) : t > 0 && e.Plus && r.push("+"), null !== e.Prefix && r.push(e.Prefix);
            var n = "";
            if (e.Compact && (t >= 1e9 ? (t /= 1e9, n = "B") : t >= 1e6 ? (t /= 1e6, n = "M") : t >= 1e3 && (t /= 1e3, n = "K")), t = parseFloat(t).toFixed(e.Decimals), e.Comma) {
                var o = t.indexOf(".");
                if (-1 === o && (o = t.length), o > 3) {
                    for (var i = new Array, a = t.substr(o, t.length), s = o - 3; s > 0; s -= 3) i.push(t.substr(s, 3));
                    i.push(t.substr(0, s + 3)), t = i.reverse().join(",") + a
                }
            }
            return r.push(t), r.push(n), null !== e.Suffix && r.push(e.Suffix), r.join("")
        }
        r.d(e, "a", function() {
            return n
        })
    }, function(t, e, r) {
        var n = r(4);
        t.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
    }, function(t, e, r) {
        "use strict";
        var n = r(38);
        t.exports = Function.prototype.bind || n
    }, function(t, e, r) {
        "use strict";
        var n = Function.prototype.toString,
            o = /^\s*class /,
            i = function(t) {
                try {
                    var e = n.call(t).replace(/\/\/.*\n/g, "").replace(/\/\*[.\s\S]*\*\//g, "").replace(/\n/gm, " ").replace(/ {2}/g, " ");
                    return o.test(e)
                } catch (t) {
                    return !1
                }
            },
            a = Object.prototype.toString,
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        t.exports = function(t) {
            if (!t) return !1;
            if ("function" != typeof t && "object" != typeof t) return !1;
            if (s) return function(t) {
                try {
                    return !i(t) && (n.call(t), !0)
                } catch (t) {
                    return !1
                }
            }(t);
            if (i(t)) return !1;
            var e = a.call(t);
            return "[object Function]" === e || "[object GeneratorFunction]" === e
        }
    }, function(t, e, r) {
        t.exports = function(t) {
            "use strict";
            var e = {
                classCallCheck: function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
            };
            e.extends = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
                return t
            }, e.inherits = function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }, e.objectWithoutProperties = function(t, e) {
                var r = {};
                for (var n in t) e.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
                return r
            }, e.possibleConstructorReturn = function(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            };
            var r, n, o = "undefined" != typeof document && !!document.createElement,
                i = ["viewBox"],
                a = {
                    xlink: "http://www.w3.org/1999/xlink"
                },
                s = /^([a-zA-Z]+)(?:\:|([A-Z]))/,
                c = {
                    className: "class"
                },
                u = {},
                l = !1;
            o && (r = document.createElement("div"), n = document.createElement, document.createElement = function(t) {
                if (l || "svg" === t) {
                    var e = document.createElementNS("http://www.w3.org/2000/svg", t);
                    for (var o in e.setAttribute = b("setAttribute"), e.getAttribute = b("getAttribute"), e.removeAttribute = b("removeAttribute"), e) !~i.indexOf(o) && o in r && !c.hasOwnProperty(o) || h(e, o);
                    return e
                }
                return n.call(document, t)
            });
            var f = {},
                p = !1;

            function h(t, e) {
                var r = f[e];
                !1 === r ? Object.defineProperty(t, e, d(e)) : function(t, e) {
                    try {
                        Object.defineProperty(t, e, d(e)), f[e] = !1
                    } catch (n) {
                        if (!f[e]) {
                            var r = t.nodeName + ": " + n;
                            f[e] = r, !p && "undefined" != typeof console && console.warn && (p = !0, console.warn("Error overwriting some SVG properties.", {
                                errors: f
                            }))
                        }
                    }
                }(t, e)
            }
            var y = function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    return function(r) {
                        return e.hasOwnProperty(r) ? e[r] : e[r] = t(r)
                    }
                },
                d = y(function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? c[t] || t : arguments[1];
                    return {
                        set: function(t) {
                            null == t ? this.removeAttribute(e) : this.setAttribute(e, t)
                        },
                        get: function() {
                            return this.getAttribute(e)
                        }
                    }
                }),
                b = y(function(t) {
                    return function(e, r) {
                        var n = this.constructor.prototype,
                            o = e.match(s);
                        if (o && a.hasOwnProperty(o[1])) {
                            e = e.replace(s, "$2").toLowerCase();
                            var i = a[o[1]];
                            return n[t + "NS"].call(this, i, e, r)
                        }
                        return n[t].call(this, e, r)
                    }
                });
            return function(r) {
                function n() {
                    return e.classCallCheck(this, n), e.possibleConstructorReturn(this, r.apply(this, arguments))
                }
                return e.inherits(n, r), n.prototype.componentWillUpdate = function() {
                    l = !0
                }, n.prototype.componentDidUpdate = function() {
                    l = !1
                }, n.prototype.render = function(r) {
                    var n, o = r.children,
                        i = e.objectWithoutProperties(r, ["children"]);
                    return this.hasRendered || (this.hasRendered = l = !0, this.setState(u, (n = this, function() {
                        n.componentDidUpdate(), n = null
                    }))), t.h("svg", e.extends({
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, i), o)
                }, n
            }(t.Component)
        }(r(0))
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", function() {
            return y
        });
        var n = r(6),
            o = r.n(n),
            i = r(0);
        r(52);

        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function c(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function u(t, e, r) {
            return e && c(t.prototype, e), r && c(t, r), t
        }

        function l(t, e) {
            return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function f(t) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function p(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && h(t, e)
        }

        function h(t, e) {
            return (h = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        var y = function(t) {
            function e() {
                return s(this, e), l(this, f(e).apply(this, arguments))
            }
            return p(e, i["Component"]), u(e, [{
                key: "shouldComponentUpdate",
                value: function() {
                    return !1
                }
            }, {
                key: "render",
                value: function() {
                    return Object(i.h)("span", {
                        class: "glyph glyph-loading"
                    }, Object(i.h)(o.a, {
                        viewBox: "0 0 100 100"
                    }, Object(i.h)("rect", {
                        class: "bk",
                        fill: "none",
                        height: "100",
                        width: "100",
                        y: "0",
                        x: "0"
                    }), Object(i.h)("rect", {
                        transform: "rotate(0 50 50) translate(0 -30)",
                        fill: "#00b2ff",
                        ry: "5",
                        rx: "5",
                        height: "20",
                        width: "7",
                        y: "40",
                        x: "46.5"
                    }, Object(i.h)("animate", {
                        repeatCount: "indefinite",
                        begin: "0s",
                        dur: "1s",
                        to: "0",
                        from: "1",
                        attributeName: "opacity"
                    })), Object(i.h)("rect", {
                        transform: "rotate(30 50 50) translate(0 -30)",
                        fill: "#00b2ff",
                        ry: "5",
                        rx: "5",
                        height: "20",
                        width: "7",
                        y: "40",
                        x: "46.5"
                    }, Object(i.h)("animate", {
                        repeatCount: "indefinite",
                        begin: "0.08333333333333333s",
                        dur: "1s",
                        to: "0",
                        from: "1",
                        attributeName: "opacity"
                    })), Object(i.h)("rect", {
                        transform: "rotate(60 50 50) translate(0 -30)",
                        fill: "#00b2ff",
                        ry: "5",
                        rx: "5",
                        height: "20",
                        width: "7",
                        y: "40",
                        x: "46.5"
                    }, Object(i.h)("animate", {
                        repeatCount: "indefinite",
                        begin: "0.16666666666666666s",
                        dur: "1s",
                        to: "0",
                        from: "1",
                        attributeName: "opacity"
                    })), Object(i.h)("rect", {
                        transform: "rotate(90 50 50) translate(0 -30)",
                        fill: "#00b2ff",
                        ry: "5",
                        rx: "5",
                        height: "20",
                        width: "7",
                        y: "40",
                        x: "46.5"
                    }, Object(i.h)("animate", {
                        repeatCount: "indefinite",
                        begin: "0.25s",
                        dur: "1s",
                        to: "0",
                        from: "1",
                        attributeName: "opacity"
                    })), Object(i.h)("rect", {
                        transform: "rotate(120 50 50) translate(0 -30)",
                        fill: "#00b2ff",
                        ry: "5",
                        rx: "5",
                        height: "20",
                        width: "7",
                        y: "40",
                        x: "46.5"
                    }, Object(i.h)("animate", {
                        repeatCount: "indefinite",
                        begin: "0.3333333333333333s",
                        dur: "1s",
                        to: "0",
                        from: "1",
                        attributeName: "opacity"
                    })), Object(i.h)("rect", {
                        transform: "rotate(150 50 50) translate(0 -30)",
                        fill: "#00b2ff",
                        ry: "5",
                        rx: "5",
                        height: "20",
                        width: "7",
                        y: "40",
                        x: "46.5"
                    }, Object(i.h)("animate", {
                        repeatCount: "indefinite",
                        begin: "0.4166666666666667s",
                        dur: "1s",
                        to: "0",
                        from: "1",
                        attributeName: "opacity"
                    })), Object(i.h)("rect", {
                        transform: "rotate(180 50 50) translate(0 -30)",
                        fill: "#00b2ff",
                        ry: "5",
                        rx: "5",
                        height: "20",
                        width: "7",
                        y: "40",
                        x: "46.5"
                    }, Object(i.h)("animate", {
                        repeatCount: "indefinite",
                        begin: "0.5s",
                        dur: "1s",
                        to: "0",
                        from: "1",
                        attributeName: "opacity"
                    })), Object(i.h)("rect", {
                        transform: "rotate(210 50 50) translate(0 -30)",
                        fill: "#00b2ff",
                        ry: "5",
                        rx: "5",
                        height: "20",
                        width: "7",
                        y: "40",
                        x: "46.5"
                    }, Object(i.h)("animate", {
                        repeatCount: "indefinite",
                        begin: "0.5833333333333334s",
                        dur: "1s",
                        to: "0",
                        from: "1",
                        attributeName: "opacity"
                    })), Object(i.h)("rect", {
                        transform: "rotate(240 50 50) translate(0 -30)",
                        fill: "#00b2ff",
                        ry: "5",
                        rx: "5",
                        height: "20",
                        width: "7",
                        y: "40",
                        x: "46.5"
                    }, Object(i.h)("animate", {
                        repeatCount: "indefinite",
                        begin: "0.6666666666666666s",
                        dur: "1s",
                        to: "0",
                        from: "1",
                        attributeName: "opacity"
                    })), Object(i.h)("rect", {
                        transform: "rotate(270 50 50) translate(0 -30)",
                        fill: "#00b2ff",
                        ry: "5",
                        rx: "5",
                        height: "20",
                        width: "7",
                        y: "40",
                        x: "46.5"
                    }, Object(i.h)("animate", {
                        repeatCount: "indefinite",
                        begin: "0.75s",
                        dur: "1s",
                        to: "0",
                        from: "1",
                        attributeName: "opacity"
                    })), Object(i.h)("rect", {
                        transform: "rotate(300 50 50) translate(0 -30)",
                        fill: "#00b2ff",
                        ry: "5",
                        rx: "5",
                        height: "20",
                        width: "7",
                        y: "40",
                        x: "46.5"
                    }, Object(i.h)("animate", {
                        repeatCount: "indefinite",
                        begin: "0.8333333333333334s",
                        dur: "1s",
                        to: "0",
                        from: "1",
                        attributeName: "opacity"
                    })), Object(i.h)("rect", {
                        transform: "rotate(330 50 50) translate(0 -30)",
                        fill: "#00b2ff",
                        ry: "5",
                        rx: "5",
                        height: "20",
                        width: "7",
                        y: "40",
                        x: "46.5"
                    }, Object(i.h)("animate", {
                        repeatCount: "indefinite",
                        begin: "0.9166666666666666s",
                        dur: "1s",
                        to: "0",
                        from: "1",
                        attributeName: "opacity"
                    }))))
                }
            }]), e
        }()
    }, function(t, e, r) {
        "use strict";
        var n = r(9),
            o = r(3),
            i = r(4).call(Function.call, Object.prototype.propertyIsEnumerable);
        t.exports = function(t) {
            var e = n.RequireObjectCoercible(t),
                r = [];
            for (var a in e) o(e, a) && i(e, a) && r.push(e[a]);
            return r
        }
    }, function(t, e, r) {
        "use strict";
        t.exports = r(37)
    }, function(t, e, r) {
        "use strict";
        var n = r(3),
            o = r(39),
            i = Object.prototype.toString,
            a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
            s = r(12),
            c = r(13),
            u = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
            l = r(14),
            f = r(15),
            p = r(16),
            h = r(42),
            y = parseInt,
            d = r(4),
            b = d.call(Function.call, Array.prototype.slice),
            m = d.call(Function.call, String.prototype.slice),
            v = d.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i),
            g = d.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i),
            w = d.call(Function.call, RegExp.prototype.exec),
            A = ["", "​", "￾"].join(""),
            j = new RegExp("[" + A + "]", "g"),
            O = d.call(Function.call, RegExp.prototype.test, j),
            x = d.call(Function.call, RegExp.prototype.test, /^[-+]0x[0-9a-f]+$/i),
            C = ["\t\n\v\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff"].join(""),
            T = new RegExp("(^[" + C + "]+)|([" + C + "]+$)", "g"),
            E = d.call(Function.call, String.prototype.replace),
            _ = r(43),
            S = r(45),
            P = l(l({}, _), {
                Call: function(t, e) {
                    var r = arguments.length > 2 ? arguments[2] : [];
                    if (!this.IsCallable(t)) throw new TypeError(t + " is not a function");
                    return t.apply(e, r)
                },
                ToPrimitive: o,
                ToNumber: function(t) {
                    var e = h(t) ? t : o(t, Number);
                    if ("symbol" == typeof e) throw new TypeError("Cannot convert a Symbol value to a number");
                    if ("string" == typeof e) {
                        if (v(e)) return this.ToNumber(y(m(e, 2), 2));
                        if (g(e)) return this.ToNumber(y(m(e, 2), 8));
                        if (O(e) || x(e)) return NaN;
                        var r = function(t) {
                            return E(t, T, "")
                        }(e);
                        if (r !== e) return this.ToNumber(r)
                    }
                    return Number(e)
                },
                ToInt16: function(t) {
                    var e = this.ToUint16(t);
                    return e >= 32768 ? e - 65536 : e
                },
                ToInt8: function(t) {
                    var e = this.ToUint8(t);
                    return e >= 128 ? e - 256 : e
                },
                ToUint8: function(t) {
                    var e = this.ToNumber(t);
                    if (s(e) || 0 === e || !c(e)) return 0;
                    var r = f(e) * Math.floor(Math.abs(e));
                    return p(r, 256)
                },
                ToUint8Clamp: function(t) {
                    var e = this.ToNumber(t);
                    if (s(e) || e <= 0) return 0;
                    if (e >= 255) return 255;
                    var r = Math.floor(t);
                    return r + .5 < e ? r + 1 : e < r + .5 ? r : r % 2 != 0 ? r + 1 : r
                },
                ToString: function(t) {
                    if ("symbol" == typeof t) throw new TypeError("Cannot convert a Symbol value to a string");
                    return String(t)
                },
                ToObject: function(t) {
                    return this.RequireObjectCoercible(t), Object(t)
                },
                ToPropertyKey: function(t) {
                    var e = this.ToPrimitive(t, String);
                    return "symbol" == typeof e ? e : this.ToString(e)
                },
                ToLength: function(t) {
                    var e = this.ToInteger(t);
                    return e <= 0 ? 0 : e > u ? u : e
                },
                CanonicalNumericIndexString: function(t) {
                    if ("[object String]" !== i.call(t)) throw new TypeError("must be a string");
                    if ("-0" === t) return -0;
                    var e = this.ToNumber(t);
                    return this.SameValue(this.ToString(e), t) ? e : void 0
                },
                RequireObjectCoercible: _.CheckObjectCoercible,
                IsArray: Array.isArray || function(t) {
                    return "[object Array]" === i.call(t)
                },
                IsConstructor: function(t) {
                    return "function" == typeof t && !!t.prototype
                },
                IsExtensible: function(t) {
                    return !Object.preventExtensions || !h(t) && Object.isExtensible(t)
                },
                IsInteger: function(t) {
                    if ("number" != typeof t || s(t) || !c(t)) return !1;
                    var e = Math.abs(t);
                    return Math.floor(e) === e
                },
                IsPropertyKey: function(t) {
                    return "string" == typeof t || "symbol" == typeof t
                },
                IsRegExp: function(t) {
                    if (!t || "object" != typeof t) return !1;
                    if (a) {
                        var e = t[Symbol.match];
                        if (void 0 !== e) return _.ToBoolean(e)
                    }
                    return S(t)
                },
                SameValueZero: function(t, e) {
                    return t === e || s(t) && s(e)
                },
                GetV: function(t, e) {
                    if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                    return this.ToObject(t)[e]
                },
                GetMethod: function(t, e) {
                    if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                    var r = this.GetV(t, e);
                    if (null != r) {
                        if (!this.IsCallable(r)) throw new TypeError(e + "is not a function");
                        return r
                    }
                },
                Get: function(t, e) {
                    if ("Object" !== this.Type(t)) throw new TypeError("Assertion failed: Type(O) is not Object");
                    if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                    return t[e]
                },
                Type: function(t) {
                    return "symbol" == typeof t ? "Symbol" : _.Type(t)
                },
                SpeciesConstructor: function(t, e) {
                    if ("Object" !== this.Type(t)) throw new TypeError("Assertion failed: Type(O) is not Object");
                    var r = t.constructor;
                    if (void 0 === r) return e;
                    if ("Object" !== this.Type(r)) throw new TypeError("O.constructor is not an Object");
                    var n = a && Symbol.species ? r[Symbol.species] : void 0;
                    if (null == n) return e;
                    if (this.IsConstructor(n)) return n;
                    throw new TypeError("no constructor found")
                },
                CompletePropertyDescriptor: function(t) {
                    if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                    return this.IsGenericDescriptor(t) || this.IsDataDescriptor(t) ? (n(t, "[[Value]]") || (t["[[Value]]"] = void 0), n(t, "[[Writable]]") || (t["[[Writable]]"] = !1)) : (n(t, "[[Get]]") || (t["[[Get]]"] = void 0), n(t, "[[Set]]") || (t["[[Set]]"] = void 0)), n(t, "[[Enumerable]]") || (t["[[Enumerable]]"] = !1), n(t, "[[Configurable]]") || (t["[[Configurable]]"] = !1), t
                },
                Set: function(t, e, r, n) {
                    if ("Object" !== this.Type(t)) throw new TypeError("O must be an Object");
                    if (!this.IsPropertyKey(e)) throw new TypeError("P must be a Property Key");
                    if ("Boolean" !== this.Type(n)) throw new TypeError("Throw must be a Boolean");
                    if (n) return t[e] = r, !0;
                    try {
                        t[e] = r
                    } catch (t) {
                        return !1
                    }
                },
                HasOwnProperty: function(t, e) {
                    if ("Object" !== this.Type(t)) throw new TypeError("O must be an Object");
                    if (!this.IsPropertyKey(e)) throw new TypeError("P must be a Property Key");
                    return n(t, e)
                },
                HasProperty: function(t, e) {
                    if ("Object" !== this.Type(t)) throw new TypeError("O must be an Object");
                    if (!this.IsPropertyKey(e)) throw new TypeError("P must be a Property Key");
                    return e in t
                },
                IsConcatSpreadable: function(t) {
                    if ("Object" !== this.Type(t)) return !1;
                    if (a && "symbol" == typeof Symbol.isConcatSpreadable) {
                        var e = this.Get(t, Symbol.isConcatSpreadable);
                        if (void 0 !== e) return this.ToBoolean(e)
                    }
                    return this.IsArray(t)
                },
                Invoke: function(t, e) {
                    if (!this.IsPropertyKey(e)) throw new TypeError("P must be a Property Key");
                    var r = b(arguments, 2),
                        n = this.GetV(t, e);
                    return this.Call(n, t, r)
                },
                CreateIterResultObject: function(t, e) {
                    if ("Boolean" !== this.Type(e)) throw new TypeError("Assertion failed: Type(done) is not Boolean");
                    return {
                        value: t,
                        done: e
                    }
                },
                RegExpExec: function(t, e) {
                    if ("Object" !== this.Type(t)) throw new TypeError("R must be an Object");
                    if ("String" !== this.Type(e)) throw new TypeError("S must be a String");
                    var r = this.Get(t, "exec");
                    if (this.IsCallable(r)) {
                        var n = this.Call(r, t, [e]);
                        if (null === n || "Object" === this.Type(n)) return n;
                        throw new TypeError('"exec" method must return `null` or an Object')
                    }
                    return w(t, e)
                },
                ArraySpeciesCreate: function(t, e) {
                    if (!this.IsInteger(e) || e < 0) throw new TypeError("Assertion failed: length must be an integer >= 0");
                    var r, n = 0 === e ? 0 : e;
                    if (this.IsArray(t) && (r = this.Get(t, "constructor"), "Object" === this.Type(r) && a && Symbol.species && null === (r = this.Get(r, Symbol.species)) && (r = void 0)), void 0 === r) return Array(n);
                    if (!this.IsConstructor(r)) throw new TypeError("C must be a constructor");
                    return new r(n)
                },
                CreateDataProperty: function(t, e, r) {
                    if ("Object" !== this.Type(t)) throw new TypeError("Assertion failed: Type(O) is not Object");
                    if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                    var n = Object.getOwnPropertyDescriptor(t, e),
                        o = n || "function" != typeof Object.isExtensible || Object.isExtensible(t);
                    if (n && (!n.writable || !n.configurable) || !o) return !1;
                    var i = {
                        configurable: !0,
                        enumerable: !0,
                        value: r,
                        writable: !0
                    };
                    return Object.defineProperty(t, e, i), !0
                },
                CreateDataPropertyOrThrow: function(t, e, r) {
                    if ("Object" !== this.Type(t)) throw new TypeError("Assertion failed: Type(O) is not Object");
                    if (!this.IsPropertyKey(e)) throw new TypeError("Assertion failed: IsPropertyKey(P) is not true");
                    var n = this.CreateDataProperty(t, e, r);
                    if (!n) throw new TypeError("unable to create data property");
                    return n
                }
            });
        delete P.CheckObjectCoercible, t.exports = P
    }, function(t, e) {
        t.exports = function(t) {
            return null === t || "function" != typeof t && "object" != typeof t
        }
    }, function(t, e) {
        t.exports = Number.isNaN || function(t) {
            return t != t
        }
    }, function(t, e) {
        var r = Number.isNaN || function(t) {
            return t != t
        };
        t.exports = Number.isFinite || function(t) {
            return "number" == typeof t && !r(t) && t !== 1 / 0 && t !== -1 / 0
        }
    }, function(t, e) {
        var r = Object.prototype.hasOwnProperty;
        t.exports = function(t, e) {
            if (Object.assign) return Object.assign(t, e);
            for (var n in e) r.call(e, n) && (t[n] = e[n]);
            return t
        }
    }, function(t, e) {
        t.exports = function(t) {
            return t >= 0 ? 1 : -1
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            var r = t % e;
            return Math.floor(r >= 0 ? r : r + e)
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(8);
        t.exports = function() {
            return "function" == typeof Object.values ? Object.values : n
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(9),
            o = r(3),
            i = r(4).call(Function.call, Object.prototype.propertyIsEnumerable);
        t.exports = function(t) {
            var e = n.RequireObjectCoercible(t),
                r = [];
            for (var a in e) o(e, a) && i(e, a) && r.push([a, e[a]]);
            return r
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(18);
        t.exports = function() {
            return "function" == typeof Object.entries ? Object.entries : n
        }
    }, function(t, e, r) {
        "use strict";
        t.exports = r(10)
    }, function(t, e, r) {
        "use strict";
        var n = r(20);
        t.exports = function(t) {
            var e = n.ToObject(this),
                r = n.ToInteger(n.ToLength(e.length));
            if (!n.IsCallable(t)) throw new TypeError("Array#find: predicate must be a function");
            if (0 !== r)
                for (var o, i = arguments[1], a = 0; a < r; a++)
                    if (o = e[a], n.Call(t, i, [o, a, e])) return o
        }
    }, function(t, e, r) {
        "use strict";
        t.exports = function() {
            return Array.prototype.find && 1 !== [, 1].find(function() {
                return !0
            }) ? Array.prototype.find : r(21)
        }
    }, function(t, e, r) {
        "use strict";
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map(function(e) {
                    var r = function(t, e) {
                        var r = t[1] || "",
                            n = t[3];
                        if (!n) return r;
                        if (e && "function" == typeof btoa) {
                            var o = (a = n, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                                i = n.sources.map(function(t) {
                                    return "/*# sourceURL=" + n.sourceRoot + t + " */"
                                });
                            return [r].concat(i).concat([o]).join("\n")
                        }
                        var a;
                        return [r].join("\n")
                    }(e, t);
                    return e[2] ? "@media " + e[2] + "{" + r + "}" : r
                }).join("")
            }, e.i = function(t, r) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var n = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    null != i && (n[i] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var a = t[o];
                    null != a[0] && n[a[0]] || (r && !a[2] ? a[2] = r : r && (a[2] = "(" + a[2] + ") and (" + r + ")"), e.push(a))
                }
            }, e
        }
    }, function(t, e, r) {
        var n, o, i = {},
            a = (n = function() {
                return window && document && document.all && !window.atob
            }, function() {
                return void 0 === o && (o = n.apply(this, arguments)), o
            }),
            s = function(t) {
                var e = {};
                return function(t, r) {
                    if ("function" == typeof t) return t();
                    if (void 0 === e[t]) {
                        var n = function(t, e) {
                            return e ? e.querySelector(t) : document.querySelector(t)
                        }.call(this, t, r);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head
                        } catch (t) {
                            n = null
                        }
                        e[t] = n
                    }
                    return e[t]
                }
            }(),
            c = null,
            u = 0,
            l = [],
            f = r(54);

        function p(t, e) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r],
                    o = i[n.id];
                if (o) {
                    o.refs++;
                    for (var a = 0; a < o.parts.length; a++) o.parts[a](n.parts[a]);
                    for (; a < n.parts.length; a++) o.parts.push(v(n.parts[a], e))
                } else {
                    var s = [];
                    for (a = 0; a < n.parts.length; a++) s.push(v(n.parts[a], e));
                    i[n.id] = {
                        id: n.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }

        function h(t, e) {
            for (var r = [], n = {}, o = 0; o < t.length; o++) {
                var i = t[o],
                    a = e.base ? i[0] + e.base : i[0],
                    s = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                    };
                n[a] ? n[a].parts.push(s) : r.push(n[a] = {
                    id: a,
                    parts: [s]
                })
            }
            return r
        }

        function y(t, e) {
            var r = s(t.insertInto);
            if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var n = l[l.length - 1];
            if ("top" === t.insertAt) n ? n.nextSibling ? r.insertBefore(e, n.nextSibling) : r.appendChild(e) : r.insertBefore(e, r.firstChild), l.push(e);
            else if ("bottom" === t.insertAt) r.appendChild(e);
            else {
                if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = s(t.insertAt.before, r);
                r.insertBefore(e, o)
            }
        }

        function d(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = l.indexOf(t);
            e >= 0 && l.splice(e, 1)
        }

        function b(t) {
            var e = document.createElement("style");
            if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
                var n = function() {
                    0;
                    return r.nc
                }();
                n && (t.attrs.nonce = n)
            }
            return m(e, t.attrs), y(t, e), e
        }

        function m(t, e) {
            Object.keys(e).forEach(function(r) {
                t.setAttribute(r, e[r])
            })
        }

        function v(t, e) {
            var r, n, o, i;
            if (e.transform && t.css) {
                if (!(i = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function() {};
                t.css = i
            }
            if (e.singleton) {
                var a = u++;
                r = c || (c = b(e)), n = A.bind(null, r, a, !1), o = A.bind(null, r, a, !0)
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (r = function(t) {
                var e = document.createElement("link");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", m(e, t.attrs), y(t, e), e
            }(e), n = function(t, e, r) {
                var n = r.css,
                    o = r.sourceMap,
                    i = void 0 === e.convertToAbsoluteUrls && o;
                (e.convertToAbsoluteUrls || i) && (n = f(n));
                o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var a = new Blob([n], {
                        type: "text/css"
                    }),
                    s = t.href;
                t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
            }.bind(null, r, e), o = function() {
                d(r), r.href && URL.revokeObjectURL(r.href)
            }) : (r = b(e), n = function(t, e) {
                var r = e.css,
                    n = e.media;
                n && t.setAttribute("media", n);
                if (t.styleSheet) t.styleSheet.cssText = r;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(r))
                }
            }.bind(null, r), o = function() {
                d(r)
            });
            return n(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        n(t = e)
                    } else o()
                }
        }
        t.exports = function(t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
            var r = h(t, e);
            return p(r, e),
                function(t) {
                    for (var n = [], o = 0; o < r.length; o++) {
                        var a = r[o];
                        (s = i[a.id]).refs--, n.push(s)
                    }
                    t && p(h(t, e), e);
                    for (o = 0; o < n.length; o++) {
                        var s;
                        if (0 === (s = n[o]).refs) {
                            for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                            delete i[s.id]
                        }
                    }
                }
        };
        var g, w = (g = [], function(t, e) {
            return g[t] = e, g.filter(Boolean).join("\n")
        });

        function A(t, e, r, n) {
            var o = r ? "" : n.css;
            if (t.styleSheet) t.styleSheet.cssText = w(e, o);
            else {
                var i = document.createTextNode(o),
                    a = t.childNodes;
                a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
            }
        }
    }, function(t, e, r) {
        "use strict";

        function n(t, e) {
            var r = {
                price: 0,
                percent: 0,
                class: "unchanged"
            };
            return t > 0 && e > 0 && (r.price = t - e, r.percent = 100 * r.price / e, t > e ? r.class = "positive" : t < e && (r.class = "negative")), r
        }
        r.d(e, "a", function() {
            return n
        })
    }, function(t, e, r) {
        "use strict";

        function n(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        r.d(e, "a", function() {
            return i
        });
        var o = (window.FCON_REQUEST_DATA || {}).query;
        (void 0 === o ? {} : o).P;
        var i = function() {
            function t(e, r) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.apiPath = e, this.authHeader = r
            }
            var e, r, o;
            return e = t, (r = [{
                key: "load",
                value: function(t) {
                    var e = function(t, e) {
                        return e || (e = {}), "//api.cloudquote.io/" + t + ".json?" + Object.keys(e).map(function(t) {
                            return escape(t) + "=" + escape(e[t])
                        }).join("&")
                    }(this.apiPath, t);
                    return fetch(e, {
                        headers: new Headers({
                            Authorization: this.authHeader
                        })
                    }).then(function(t) {
                        return t.json()
                    })
                }
            }]) && n(e.prototype, r), o && n(e, o), t
        }()
    }, function(t, e, r) {
        r(28), Object.keys || r(32).shim(), Object.values || r(33).shim(), Object.entries || r(47).shim(), Array.find || r(49).shim(), r(51)
    }, function(t, e, r) {
        "use strict";
        t.exports = r(29).polyfill()
    }, function(t, e, r) {
        (function(e, r) {
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
             * @version   v4.2.5+7f2b526d
             */
            var n;
            n = function() {
                "use strict";

                function t(t) {
                    return "function" == typeof t
                }
                var n = Array.isArray ? Array.isArray : function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    o = 0,
                    i = void 0,
                    a = void 0,
                    s = function(t, e) {
                        y[o] = t, y[o + 1] = e, 2 === (o += 2) && (a ? a(d) : w())
                    },
                    c = "undefined" != typeof window ? window : void 0,
                    u = c || {},
                    l = u.MutationObserver || u.WebKitMutationObserver,
                    f = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                    p = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                function h() {
                    var t = setTimeout;
                    return function() {
                        return t(d, 1)
                    }
                }
                var y = new Array(1e3);

                function d() {
                    for (var t = 0; t < o; t += 2) {
                        (0, y[t])(y[t + 1]), y[t] = void 0, y[t + 1] = void 0
                    }
                    o = 0
                }
                var b, m, v, g, w = void 0;

                function A(t, e) {
                    var r = this,
                        n = new this.constructor(x);
                    void 0 === n[O] && q(n);
                    var o = r._state;
                    if (o) {
                        var i = arguments[o - 1];
                        s(function() {
                            return R(o, n, i, r._result)
                        })
                    } else B(r, n, t, e);
                    return n
                }

                function j(t) {
                    if (t && "object" == typeof t && t.constructor === this) return t;
                    var e = new this(x);
                    return k(e, t), e
                }
                f ? w = function() {
                    return e.nextTick(d)
                } : l ? (m = 0, v = new l(d), g = document.createTextNode(""), v.observe(g, {
                    characterData: !0
                }), w = function() {
                    g.data = m = ++m % 2
                }) : p ? ((b = new MessageChannel).port1.onmessage = d, w = function() {
                    return b.port2.postMessage(0)
                }) : w = void 0 === c ? function() {
                    try {
                        var t = Function("return this")().require("vertx");
                        return void 0 !== (i = t.runOnLoop || t.runOnContext) ? function() {
                            i(d)
                        } : h()
                    } catch (t) {
                        return h()
                    }
                }() : h();
                var O = Math.random().toString(36).substring(2);

                function x() {}
                var C = void 0,
                    T = 1,
                    E = 2,
                    _ = {
                        error: null
                    };

                function S(t) {
                    try {
                        return t.then
                    } catch (t) {
                        return _.error = t, _
                    }
                }

                function P(e, r, n) {
                    r.constructor === e.constructor && n === A && r.constructor.resolve === j ? function(t, e) {
                        e._state === T ? I(t, e._result) : e._state === E ? N(t, e._result) : B(e, void 0, function(e) {
                            return k(t, e)
                        }, function(e) {
                            return N(t, e)
                        })
                    }(e, r) : n === _ ? (N(e, _.error), _.error = null) : void 0 === n ? I(e, r) : t(n) ? function(t, e, r) {
                        s(function(t) {
                            var n = !1,
                                o = function(t, e, r, n) {
                                    try {
                                        t.call(e, r, n)
                                    } catch (t) {
                                        return t
                                    }
                                }(r, e, function(r) {
                                    n || (n = !0, e !== r ? k(t, r) : I(t, r))
                                }, function(e) {
                                    n || (n = !0, N(t, e))
                                }, t._label);
                            !n && o && (n = !0, N(t, o))
                        }, t)
                    }(e, r, n) : I(e, r)
                }

                function k(t, e) {
                    var r, n;
                    t === e ? N(t, new TypeError("You cannot resolve a promise with itself")) : (n = typeof(r = e), null === r || "object" !== n && "function" !== n ? I(t, e) : P(t, e, S(e)))
                }

                function D(t) {
                    t._onerror && t._onerror(t._result), F(t)
                }

                function I(t, e) {
                    t._state === C && (t._result = e, t._state = T, 0 !== t._subscribers.length && s(F, t))
                }

                function N(t, e) {
                    t._state === C && (t._state = E, t._result = e, s(D, t))
                }

                function B(t, e, r, n) {
                    var o = t._subscribers,
                        i = o.length;
                    t._onerror = null, o[i] = e, o[i + T] = r, o[i + E] = n, 0 === i && t._state && s(F, t)
                }

                function F(t) {
                    var e = t._subscribers,
                        r = t._state;
                    if (0 !== e.length) {
                        for (var n = void 0, o = void 0, i = t._result, a = 0; a < e.length; a += 3) n = e[a], o = e[a + r], n ? R(r, n, o, i) : o(i);
                        t._subscribers.length = 0
                    }
                }

                function R(e, r, n, o) {
                    var i = t(n),
                        a = void 0,
                        s = void 0,
                        c = void 0,
                        u = void 0;
                    if (i) {
                        if ((a = function(t, e) {
                                try {
                                    return t(e)
                                } catch (t) {
                                    return _.error = t, _
                                }
                            }(n, o)) === _ ? (u = !0, s = a.error, a.error = null) : c = !0, r === a) return void N(r, new TypeError("A promises callback cannot return that same promise."))
                    } else a = o, c = !0;
                    r._state !== C || (i && c ? k(r, a) : u ? N(r, s) : e === T ? I(r, a) : e === E && N(r, a))
                }
                var U = 0;

                function q(t) {
                    t[O] = U++, t._state = void 0, t._result = void 0, t._subscribers = []
                }
                var M = function() {
                        function t(t, e) {
                            this._instanceConstructor = t, this.promise = new t(x), this.promise[O] || q(this.promise), n(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? I(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && I(this.promise, this._result))) : N(this.promise, new Error("Array Methods must be provided an Array"))
                        }
                        return t.prototype._enumerate = function(t) {
                            for (var e = 0; this._state === C && e < t.length; e++) this._eachEntry(t[e], e)
                        }, t.prototype._eachEntry = function(t, e) {
                            var r = this._instanceConstructor,
                                n = r.resolve;
                            if (n === j) {
                                var o = S(t);
                                if (o === A && t._state !== C) this._settledAt(t._state, e, t._result);
                                else if ("function" != typeof o) this._remaining--, this._result[e] = t;
                                else if (r === L) {
                                    var i = new r(x);
                                    P(i, t, o), this._willSettleAt(i, e)
                                } else this._willSettleAt(new r(function(e) {
                                    return e(t)
                                }), e)
                            } else this._willSettleAt(n(t), e)
                        }, t.prototype._settledAt = function(t, e, r) {
                            var n = this.promise;
                            n._state === C && (this._remaining--, t === E ? N(n, r) : this._result[e] = r), 0 === this._remaining && I(n, this._result)
                        }, t.prototype._willSettleAt = function(t, e) {
                            var r = this;
                            B(t, void 0, function(t) {
                                return r._settledAt(T, e, t)
                            }, function(t) {
                                return r._settledAt(E, e, t)
                            })
                        }, t
                    }(),
                    L = function() {
                        function e(t) {
                            this[O] = U++, this._result = this._state = void 0, this._subscribers = [], x !== t && ("function" != typeof t && function() {
                                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                            }(), this instanceof e ? function(t, e) {
                                try {
                                    e(function(e) {
                                        k(t, e)
                                    }, function(e) {
                                        N(t, e)
                                    })
                                } catch (e) {
                                    N(t, e)
                                }
                            }(this, t) : function() {
                                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                            }())
                        }
                        return e.prototype.catch = function(t) {
                            return this.then(null, t)
                        }, e.prototype.finally = function(e) {
                            var r = this.constructor;
                            return t(e) ? this.then(function(t) {
                                return r.resolve(e()).then(function() {
                                    return t
                                })
                            }, function(t) {
                                return r.resolve(e()).then(function() {
                                    throw t
                                })
                            }) : this.then(e, e)
                        }, e
                    }();
                return L.prototype.then = A, L.all = function(t) {
                    return new M(this, t).promise
                }, L.race = function(t) {
                    var e = this;
                    return n(t) ? new e(function(r, n) {
                        for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(r, n)
                    }) : new e(function(t, e) {
                        return e(new TypeError("You must pass an array to race."))
                    })
                }, L.resolve = j, L.reject = function(t) {
                    var e = new this(x);
                    return N(e, t), e
                }, L._setScheduler = function(t) {
                    a = t
                }, L._setAsap = function(t) {
                    s = t
                }, L._asap = s, L.polyfill = function() {
                    var t = void 0;
                    if (void 0 !== r) t = r;
                    else if ("undefined" != typeof self) t = self;
                    else try {
                        t = Function("return this")()
                    } catch (t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var e = t.Promise;
                    if (e) {
                        var n = null;
                        try {
                            n = Object.prototype.toString.call(e.resolve())
                        } catch (t) {}
                        if ("[object Promise]" === n && !e.cast) return
                    }
                    t.Promise = L
                }, L.Promise = L, L
            }, t.exports = n()
        }).call(this, r(30), r(31))
    }, function(t, e) {
        var r, n, o = t.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(t) {
            if (r === setTimeout) return setTimeout(t, 0);
            if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
            try {
                return r(t, 0)
            } catch (e) {
                try {
                    return r.call(null, t, 0)
                } catch (e) {
                    return r.call(this, t, 0)
                }
            }
        }! function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : i
            } catch (t) {
                r = i
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (t) {
                n = a
            }
        }();
        var c, u = [],
            l = !1,
            f = -1;

        function p() {
            l && c && (l = !1, c.length ? u = c.concat(u) : f = -1, u.length && h())
        }

        function h() {
            if (!l) {
                var t = s(p);
                l = !0;
                for (var e = u.length; e;) {
                    for (c = u, u = []; ++f < e;) c && c[f].run();
                    f = -1, e = u.length
                }
                c = null, l = !1,
                    function(t) {
                        if (n === clearTimeout) return clearTimeout(t);
                        if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                        try {
                            n(t)
                        } catch (e) {
                            try {
                                return n.call(null, t)
                            } catch (e) {
                                return n.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function y(t, e) {
            this.fun = t, this.array = e
        }

        function d() {}
        o.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            u.push(new y(t, e)), 1 !== u.length || l || s(h)
        }, y.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = d, o.addListener = d, o.once = d, o.off = d, o.removeListener = d, o.removeAllListeners = d, o.emit = d, o.prependListener = d, o.prependOnceListener = d, o.listeners = function(t) {
            return []
        }, o.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    }, function(t, e) {
        var r;
        r = function() {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (r = window)
        }
        t.exports = r
    }, function(t, e, r) {
        "use strict";
        var n, o, i, a;
        Object.keys || (Object.keys = (n = Object.prototype.hasOwnProperty, o = !{
            toString: null
        }.propertyIsEnumerable("toString"), a = (i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function(t) {
            if ("object" != typeof t && ("function" != typeof t || null === t)) throw new TypeError("Object.keys called on non-object");
            var e, r, s = [];
            for (e in t) n.call(t, e) && s.push(e);
            if (o)
                for (r = 0; r < a; r++) n.call(t, i[r]) && s.push(i[r]);
            return s
        }))
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            o = r(8),
            i = r(17),
            a = r(46),
            s = i();
        n(s, {
            getPolyfill: i,
            implementation: o,
            shim: a
        }), t.exports = s
    }, function(t, e, r) {
        "use strict";
        var n = Object.prototype.hasOwnProperty,
            o = Object.prototype.toString,
            i = Array.prototype.slice,
            a = r(35),
            s = Object.prototype.propertyIsEnumerable,
            c = !s.call({
                toString: null
            }, "toString"),
            u = s.call(function() {}, "prototype"),
            l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            f = function(t) {
                var e = t.constructor;
                return e && e.prototype === t
            },
            p = {
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
            h = function() {
                if ("undefined" == typeof window) return !1;
                for (var t in window) try {
                    if (!p["$" + t] && n.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
                        f(window[t])
                    } catch (t) {
                        return !0
                    }
                } catch (t) {
                    return !0
                }
                return !1
            }(),
            y = function(t) {
                var e = null !== t && "object" == typeof t,
                    r = "[object Function]" === o.call(t),
                    i = a(t),
                    s = e && "[object String]" === o.call(t),
                    p = [];
                if (!e && !r && !i) throw new TypeError("Object.keys called on a non-object");
                var y = u && r;
                if (s && t.length > 0 && !n.call(t, 0))
                    for (var d = 0; d < t.length; ++d) p.push(String(d));
                if (i && t.length > 0)
                    for (var b = 0; b < t.length; ++b) p.push(String(b));
                else
                    for (var m in t) y && "prototype" === m || !n.call(t, m) || p.push(String(m));
                if (c)
                    for (var v = function(t) {
                            if ("undefined" == typeof window || !h) return f(t);
                            try {
                                return f(t)
                            } catch (t) {
                                return !1
                            }
                        }(t), g = 0; g < l.length; ++g) v && "constructor" === l[g] || !n.call(t, l[g]) || p.push(l[g]);
                return p
            };
        y.shim = function() {
            if (Object.keys) {
                if (! function() {
                        return 2 === (Object.keys(arguments) || "").length
                    }(1, 2)) {
                    var t = Object.keys;
                    Object.keys = function(e) {
                        return a(e) ? t(i.call(e)) : t(e)
                    }
                }
            } else Object.keys = y;
            return Object.keys || y
        }, t.exports = y
    }, function(t, e, r) {
        "use strict";
        var n = Object.prototype.toString;
        t.exports = function(t) {
            var e = n.call(t),
                r = "[object Arguments]" === e;
            return r || (r = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === n.call(t.callee)), r
        }
    }, function(t, e) {
        var r = Object.prototype.hasOwnProperty,
            n = Object.prototype.toString;
        t.exports = function(t, e, o) {
            if ("[object Function]" !== n.call(e)) throw new TypeError("iterator must be a function");
            var i = t.length;
            if (i === +i)
                for (var a = 0; a < i; a++) e.call(o, t[a], a, t);
            else
                for (var s in t) r.call(t, s) && e.call(o, t[s], s, t)
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(10),
            o = r(14),
            i = o(o({}, n), {
                SameValueNonNumber: function(t, e) {
                    if ("number" == typeof t || typeof t != typeof e) throw new TypeError("SameValueNonNumber requires two non-number values of the same type.");
                    return this.SameValue(t, e)
                }
            });
        t.exports = i
    }, function(t, e, r) {
        "use strict";
        var n = Array.prototype.slice,
            o = Object.prototype.toString;
        t.exports = function(t) {
            var e = this;
            if ("function" != typeof e || "[object Function]" !== o.call(e)) throw new TypeError("Function.prototype.bind called on incompatible " + e);
            for (var r, i = n.call(arguments, 1), a = Math.max(0, e.length - i.length), s = [], c = 0; c < a; c++) s.push("$" + c);
            if (r = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(function() {
                    if (this instanceof r) {
                        var o = e.apply(this, i.concat(n.call(arguments)));
                        return Object(o) === o ? o : this
                    }
                    return e.apply(t, i.concat(n.call(arguments)))
                }), e.prototype) {
                var u = function() {};
                u.prototype = e.prototype, r.prototype = new u, u.prototype = null
            }
            return r
        }
    }, function(t, e, r) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
            o = r(11),
            i = r(5),
            a = r(40),
            s = r(41);
        t.exports = function(t, e) {
            if (o(t)) return t;
            var r, c = "default";
            if (arguments.length > 1 && (e === String ? c = "string" : e === Number && (c = "number")), n && (Symbol.toPrimitive ? r = function(t, e) {
                    var r = t[e];
                    if (null != r) {
                        if (!i(r)) throw new TypeError(r + " returned for property " + e + " of object " + t + " is not a function");
                        return r
                    }
                }(t, Symbol.toPrimitive) : s(t) && (r = Symbol.prototype.valueOf)), void 0 !== r) {
                var u = r.call(t, c);
                if (o(u)) return u;
                throw new TypeError("unable to convert exotic object to primitive")
            }
            return "default" === c && (a(t) || s(t)) && (c = "string"),
                function(t, e) {
                    if (null == t) throw new TypeError("Cannot call method on " + t);
                    if ("string" != typeof e || "number" !== e && "string" !== e) throw new TypeError('hint must be "string" or "number"');
                    var r, n, a, s = "string" === e ? ["toString", "valueOf"] : ["valueOf", "toString"];
                    for (a = 0; a < s.length; ++a)
                        if (r = t[s[a]], i(r) && (n = r.call(t), o(n))) return n;
                    throw new TypeError("No default value")
                }(t, "default" === c ? "number" : c)
        }
    }, function(t, e, r) {
        "use strict";
        var n = Date.prototype.getDay,
            o = Object.prototype.toString,
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        t.exports = function(t) {
            return "object" == typeof t && null !== t && (i ? function(t) {
                try {
                    return n.call(t), !0
                } catch (t) {
                    return !1
                }
            }(t) : "[object Date]" === o.call(t))
        }
    }, function(t, e, r) {
        "use strict";
        var n = Object.prototype.toString;
        if ("function" == typeof Symbol && "symbol" == typeof Symbol()) {
            var o = Symbol.prototype.toString,
                i = /^Symbol\(.*\)$/;
            t.exports = function(t) {
                if ("symbol" == typeof t) return !0;
                if ("[object Symbol]" !== n.call(t)) return !1;
                try {
                    return function(t) {
                        return "symbol" == typeof t.valueOf() && i.test(o.call(t))
                    }(t)
                } catch (t) {
                    return !1
                }
            }
        } else t.exports = function(t) {
            return !1
        }
    }, function(t, e) {
        t.exports = function(t) {
            return null === t || "function" != typeof t && "object" != typeof t
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(12),
            o = r(13),
            i = r(15),
            a = r(16),
            s = r(5),
            c = r(44),
            u = r(3),
            l = {
                ToPrimitive: c,
                ToBoolean: function(t) {
                    return !!t
                },
                ToNumber: function(t) {
                    return Number(t)
                },
                ToInteger: function(t) {
                    var e = this.ToNumber(t);
                    return n(e) ? 0 : 0 !== e && o(e) ? i(e) * Math.floor(Math.abs(e)) : e
                },
                ToInt32: function(t) {
                    return this.ToNumber(t) >> 0
                },
                ToUint32: function(t) {
                    return this.ToNumber(t) >>> 0
                },
                ToUint16: function(t) {
                    var e = this.ToNumber(t);
                    if (n(e) || 0 === e || !o(e)) return 0;
                    var r = i(e) * Math.floor(Math.abs(e));
                    return a(r, 65536)
                },
                ToString: function(t) {
                    return String(t)
                },
                ToObject: function(t) {
                    return this.CheckObjectCoercible(t), Object(t)
                },
                CheckObjectCoercible: function(t, e) {
                    if (null == t) throw new TypeError(e || "Cannot call method on " + t);
                    return t
                },
                IsCallable: s,
                SameValue: function(t, e) {
                    return t === e ? 0 !== t || 1 / t == 1 / e : n(t) && n(e)
                },
                Type: function(t) {
                    return null === t ? "Null" : void 0 === t ? "Undefined" : "function" == typeof t || "object" == typeof t ? "Object" : "number" == typeof t ? "Number" : "boolean" == typeof t ? "Boolean" : "string" == typeof t ? "String" : void 0
                },
                IsPropertyDescriptor: function(t) {
                    if ("Object" !== this.Type(t)) return !1;
                    var e = {
                        "[[Configurable]]": !0,
                        "[[Enumerable]]": !0,
                        "[[Get]]": !0,
                        "[[Set]]": !0,
                        "[[Value]]": !0,
                        "[[Writable]]": !0
                    };
                    for (var r in t)
                        if (u(t, r) && !e[r]) return !1;
                    var n = u(t, "[[Value]]"),
                        o = u(t, "[[Get]]") || u(t, "[[Set]]");
                    if (n && o) throw new TypeError("Property Descriptors may not be both accessor and data descriptors");
                    return !0
                },
                IsAccessorDescriptor: function(t) {
                    if (void 0 === t) return !1;
                    if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                    return !(!u(t, "[[Get]]") && !u(t, "[[Set]]"))
                },
                IsDataDescriptor: function(t) {
                    if (void 0 === t) return !1;
                    if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                    return !(!u(t, "[[Value]]") && !u(t, "[[Writable]]"))
                },
                IsGenericDescriptor: function(t) {
                    if (void 0 === t) return !1;
                    if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                    return !this.IsAccessorDescriptor(t) && !this.IsDataDescriptor(t)
                },
                FromPropertyDescriptor: function(t) {
                    if (void 0 === t) return t;
                    if (!this.IsPropertyDescriptor(t)) throw new TypeError("Desc must be a Property Descriptor");
                    if (this.IsDataDescriptor(t)) return {
                        value: t["[[Value]]"],
                        writable: !!t["[[Writable]]"],
                        enumerable: !!t["[[Enumerable]]"],
                        configurable: !!t["[[Configurable]]"]
                    };
                    if (this.IsAccessorDescriptor(t)) return {
                        get: t["[[Get]]"],
                        set: t["[[Set]]"],
                        enumerable: !!t["[[Enumerable]]"],
                        configurable: !!t["[[Configurable]]"]
                    };
                    throw new TypeError("FromPropertyDescriptor must be called with a fully populated Property Descriptor")
                },
                ToPropertyDescriptor: function(t) {
                    if ("Object" !== this.Type(t)) throw new TypeError("ToPropertyDescriptor requires an object");
                    var e = {};
                    if (u(t, "enumerable") && (e["[[Enumerable]]"] = this.ToBoolean(t.enumerable)), u(t, "configurable") && (e["[[Configurable]]"] = this.ToBoolean(t.configurable)), u(t, "value") && (e["[[Value]]"] = t.value), u(t, "writable") && (e["[[Writable]]"] = this.ToBoolean(t.writable)), u(t, "get")) {
                        var r = t.get;
                        if (void 0 !== r && !this.IsCallable(r)) throw new TypeError("getter must be a function");
                        e["[[Get]]"] = r
                    }
                    if (u(t, "set")) {
                        var n = t.set;
                        if (void 0 !== n && !this.IsCallable(n)) throw new TypeError("setter must be a function");
                        e["[[Set]]"] = n
                    }
                    if ((u(e, "[[Get]]") || u(e, "[[Set]]")) && (u(e, "[[Value]]") || u(e, "[[Writable]]"))) throw new TypeError("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
                    return e
                }
            };
        t.exports = l
    }, function(t, e, r) {
        "use strict";
        var n = Object.prototype.toString,
            o = r(11),
            i = r(5),
            a = function(t, e) {
                var r = e || ("[object Date]" === n.call(t) ? String : Number);
                if (r === String || r === Number) {
                    var a, s, c = r === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
                    for (s = 0; s < c.length; ++s)
                        if (i(t[c[s]]) && (a = t[c[s]](), o(a))) return a;
                    throw new TypeError("No default value")
                }
                throw new TypeError("invalid [[DefaultValue]] hint supplied")
            };
        t.exports = function(t, e) {
            return o(t) ? t : a(t, e)
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(3),
            o = RegExp.prototype.exec,
            i = Object.getOwnPropertyDescriptor,
            a = Object.prototype.toString,
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
        t.exports = function(t) {
            if (!t || "object" != typeof t) return !1;
            if (!s) return "[object RegExp]" === a.call(t);
            var e = i(t, "lastIndex");
            return !(!e || !n(e, "value")) && function(t) {
                try {
                    var e = t.lastIndex;
                    return t.lastIndex = 0, o.call(t), !0
                } catch (t) {
                    return !1
                } finally {
                    t.lastIndex = e
                }
            }(t)
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(17),
            o = r(1);
        t.exports = function() {
            var t = n();
            return o(Object, {
                values: t
            }, {
                values: function() {
                    return Object.values !== t
                }
            }), t
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            o = r(18),
            i = r(19),
            a = r(48),
            s = i();
        n(s, {
            getPolyfill: i,
            implementation: o,
            shim: a
        }), t.exports = s
    }, function(t, e, r) {
        "use strict";
        var n = r(19),
            o = r(1);
        t.exports = function() {
            var t = n();
            return o(Object, {
                entries: t
            }, {
                entries: function() {
                    return Object.entries !== t
                }
            }), t
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            o = r(20),
            i = r(21),
            a = r(22),
            s = r(50),
            c = Array.prototype.slice,
            u = a(),
            l = function(t, e) {
                o.RequireObjectCoercible(t);
                var r = c.call(arguments, 1);
                return u.apply(t, r)
            };
        n(l, {
            getPolyfill: a,
            implementation: i,
            shim: s
        }), t.exports = l
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            o = r(22);
        t.exports = function() {
            var t = o();
            return n(Array.prototype, {
                find: t
            }, {
                find: function() {
                    return Array.prototype.find !== t
                }
            }), t
        }
    }, function(t, e, r) {
        "use strict";
        r.r(e), r.d(e, "Headers", function() {
            return u
        }), r.d(e, "Request", function() {
            return b
        }), r.d(e, "Response", function() {
            return v
        }), r.d(e, "DOMException", function() {
            return w
        }), r.d(e, "fetch", function() {
            return A
        });
        var n = {
            searchParams: "URLSearchParams" in self,
            iterable: "Symbol" in self && "iterator" in Symbol,
            blob: "FileReader" in self && "Blob" in self && function() {
                try {
                    return new Blob, !0
                } catch (t) {
                    return !1
                }
            }(),
            formData: "FormData" in self,
            arrayBuffer: "ArrayBuffer" in self
        };
        if (n.arrayBuffer) var o = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            i = ArrayBuffer.isView || function(t) {
                return t && o.indexOf(Object.prototype.toString.call(t)) > -1
            };

        function a(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function s(t) {
            return "string" != typeof t && (t = String(t)), t
        }

        function c(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return n.iterable && (e[Symbol.iterator] = function() {
                return e
            }), e
        }

        function u(t) {
            this.map = {}, t instanceof u ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : Array.isArray(t) ? t.forEach(function(t) {
                this.append(t[0], t[1])
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }

        function l(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function f(t) {
            return new Promise(function(e, r) {
                t.onload = function() {
                    e(t.result)
                }, t.onerror = function() {
                    r(t.error)
                }
            })
        }

        function p(t) {
            var e = new FileReader,
                r = f(e);
            return e.readAsArrayBuffer(t), r
        }

        function h(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
        }

        function y() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                var e;
                this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : n.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : n.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : n.arrayBuffer && n.blob && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = h(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || i(t)) ? this._bodyArrayBuffer = h(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, n.blob && (this.blob = function() {
                var t = l(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? l(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p)
            }), this.text = function() {
                var t, e, r, n = l(this);
                if (n) return n;
                if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, r = f(e), e.readAsText(t), r;
                if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                    for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
                    return r.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, n.formData && (this.formData = function() {
                return this.text().then(m)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }
        u.prototype.append = function(t, e) {
            t = a(t), e = s(e);
            var r = this.map[t];
            this.map[t] = r ? r + ", " + e : e
        }, u.prototype.delete = function(t) {
            delete this.map[a(t)]
        }, u.prototype.get = function(t) {
            return t = a(t), this.has(t) ? this.map[t] : null
        }, u.prototype.has = function(t) {
            return this.map.hasOwnProperty(a(t))
        }, u.prototype.set = function(t, e) {
            this.map[a(t)] = s(e)
        }, u.prototype.forEach = function(t, e) {
            for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
        }, u.prototype.keys = function() {
            var t = [];
            return this.forEach(function(e, r) {
                t.push(r)
            }), c(t)
        }, u.prototype.values = function() {
            var t = [];
            return this.forEach(function(e) {
                t.push(e)
            }), c(t)
        }, u.prototype.entries = function() {
            var t = [];
            return this.forEach(function(e, r) {
                t.push([r, e])
            }), c(t)
        }, n.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
        var d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

        function b(t, e) {
            var r, n, o = (e = e || {}).body;
            if (t instanceof b) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new u(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new u(e.headers)), this.method = (r = e.method || this.method || "GET", n = r.toUpperCase(), d.indexOf(n) > -1 ? n : r), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(o)
        }

        function m(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var r = t.split("="),
                        n = r.shift().replace(/\+/g, " "),
                        o = r.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(n), decodeURIComponent(o))
                }
            }), e
        }

        function v(t, e) {
            e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new u(e.headers), this.url = e.url || "", this._initBody(t)
        }
        b.prototype.clone = function() {
            return new b(this, {
                body: this._bodyInit
            })
        }, y.call(b.prototype), y.call(v.prototype), v.prototype.clone = function() {
            return new v(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new u(this.headers),
                url: this.url
            })
        }, v.error = function() {
            var t = new v(null, {
                status: 0,
                statusText: ""
            });
            return t.type = "error", t
        };
        var g = [301, 302, 303, 307, 308];
        v.redirect = function(t, e) {
            if (-1 === g.indexOf(e)) throw new RangeError("Invalid status code");
            return new v(null, {
                status: e,
                headers: {
                    location: t
                }
            })
        };
        var w = self.DOMException;
        try {
            new w
        } catch (t) {
            (w = function(t, e) {
                this.message = t, this.name = e;
                var r = Error(t);
                this.stack = r.stack
            }).prototype = Object.create(Error.prototype), w.prototype.constructor = w
        }

        function A(t, e) {
            return new Promise(function(r, o) {
                var i = new b(t, e);
                if (i.signal && i.signal.aborted) return o(new w("Aborted", "AbortError"));
                var a = new XMLHttpRequest;

                function s() {
                    a.abort()
                }
                a.onload = function() {
                    var t, e, n = {
                        status: a.status,
                        statusText: a.statusText,
                        headers: (t = a.getAllResponseHeaders() || "", e = new u, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                            var r = t.split(":"),
                                n = r.shift().trim();
                            if (n) {
                                var o = r.join(":").trim();
                                e.append(n, o)
                            }
                        }), e)
                    };
                    n.url = "responseURL" in a ? a.responseURL : n.headers.get("X-Request-URL");
                    var o = "response" in a ? a.response : a.responseText;
                    r(new v(o, n))
                }, a.onerror = function() {
                    o(new TypeError("Network request failed"))
                }, a.ontimeout = function() {
                    o(new TypeError("Network request failed"))
                }, a.onabort = function() {
                    o(new w("Aborted", "AbortError"))
                }, a.open(i.method, i.url, !0), "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1), "responseType" in a && n.blob && (a.responseType = "blob"), i.headers.forEach(function(t, e) {
                    a.setRequestHeader(e, t)
                }), i.signal && (i.signal.addEventListener("abort", s), a.onreadystatechange = function() {
                    4 === a.readyState && i.signal.removeEventListener("abort", s)
                }), a.send(void 0 === i._bodyInit ? null : i._bodyInit)
            })
        }
        A.polyfill = !0, self.fetch || (self.fetch = A, self.Headers = u, self.Request = b, self.Response = v)
    }, function(t, e, r) {
        var n = r(53);
        "string" == typeof n && (n = [
            [t.i, n, ""]
        ]);
        var o = {
            sourceMap: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        r(24)(n, o);
        n.locals && (t.exports = n.locals)
    }, function(t, e, r) {
        (t.exports = r(23)(!0)).push([t.i, ".glyph-loading {\n  display: flex;\n  width: 100%;\n  flex: 1 1;\n  font-size: 7rem;\n  align-items: center;\n  justify-content: center;\n}\n.glyph-loading svg {\n  display: inline-block;\n  height: 1em;\n  line-height: 1;\n}\n", "", {
            version: 3,
            sources: ["/home/circleci/repo/src/utility/glyphs.less", "glyphs.less"],
            names: [],
            mappings: "AACA;EACC,cAAA;EACA,YAAA;EACA,UAAA;EACA,gBAAA;EACA,oBAAA;EACA,wBAAA;CCAA;ADND;EAQE,sBAAA;EACA,YAAA;EACA,eAAA;CCCD",
            file: "glyphs.less",
            sourcesContent: ["\n.glyph-loading {\n display: flex;\n width: 100%;\n flex: 1;\n font-size: 7rem;\n align-items: center;\n justify-content: center;\n svg {\n  display: inline-block;\n  height: 1em;\n  line-height: 1;\n }\n}\n\n", ".glyph-loading {\n  display: flex;\n  width: 100%;\n  flex: 1;\n  font-size: 7rem;\n  align-items: center;\n  justify-content: center;\n}\n.glyph-loading svg {\n  display: inline-block;\n  height: 1em;\n  line-height: 1;\n}\n"],
            sourceRoot: ""
        }])
    }, function(t, e) {
        t.exports = function(t) {
            var e = "undefined" != typeof window && window.location;
            if (!e) throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t) return t;
            var r = e.protocol + "//" + e.host,
                n = r + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
                var o, i = e.trim().replace(/^"(.*)"$/, function(t, e) {
                    return e
                }).replace(/^'(.*)'$/, function(t, e) {
                    return e
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? r + i : n + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
            })
        }
    }, , , , , function(t, e, r) {
        r(27), t.exports = r(60)
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(0),
            o = r(7),
            i = r(2),
            a = r(25),
            s = r(26);
        r(61);

        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable
                }))), n.forEach(function(e) {
                    g(t, e, r[e])
                })
            }
            return t
        }

        function u(t) {
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function l(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
                    return r
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function f(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function p(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function h(t, e, r) {
            return e && p(t.prototype, e), r && p(t, r), t
        }

        function y(t, e) {
            return !e || "object" !== u(e) && "function" != typeof e ? v(t) : e
        }

        function d(t) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function b(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && m(t, e)
        }

        function m(t, e) {
            return (m = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function v(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function g(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r, t
        }
        var w = {
                format: "fr-CA",
                dataLine: "Information en date du",
                intraday: "Intrajournaliére",
                threeMonth: "3 Mois",
                sixMonth: "6 Mois",
                oneYear: "1 An",
                price: "Prix",
                change: "Variation",
                dayRange: "Fluctuation quot",
                yearRange: "Fluctuation 52sem",
                marketCap: "Valeur à la cote",
                eps: "BPA",
                volume: "Volume"
            },
            A = {
                brcolor: "373737",
                gtcolor: "00837E",
                arcolor: "null",
                lncolor: "00837E",
                vdcolor: "FF0000",
                gbcolor: "FFFFFF",
                grcolor: "FFFFFF",
                vucolor: "008000",
                fillalpha: "0",
                bvcolor: "FFFFFF",
                volume: "0",
                shcolor: "BBBBBB",
                fillshx: "0",
                fillshy: "0",
                ibcolor: "null",
                shwidth: "3",
                gmcolor: "DDDDDD",
                itcolor: "null",
                bgcolor: "null",
                txcolor: "itcolor",
                lnwidth: "2",
                pvcolor: "B50000",
                height: "164",
                width: "300"
            },
            j = {
                format: "en-US",
                dataLine: "Data as of",
                intraday: "Intraday",
                threeMonth: "3 Month",
                sixMonth: "6 Month",
                oneYear: "1 Year",
                price: "Price",
                change: "Change",
                dayRange: "Day's Range",
                yearRange: "52wk Range",
                marketCap: "Market Cap",
                eps: "EPS",
                volume: "Volume"
            },
            O = function(t) {
                function e() {
                    var t, r;
                    f(this, e);
                    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return g(v(v(r = y(this, (t = d(e)).call.apply(t, [this].concat(o))))), "handleQuotes", function(t) {
                        var e = t.rows;
                        if (e[0]) {
                            var n = new Intl.DateTimeFormat(j.format, {
                                weekday: "short",
                                year: "numeric",
                                month: "short",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                                timeZoneName: "short"
                            }).format(1e3 * e[0].LastTradeTime);
                            r.setState({
                                dataTable: l(x({
                                    rows: e,
                                    setLang: j
                                })),
                                data: e,
                                setLang: j,
                                tradeDate: n,
                                pubKey: r.props.authHeader.substring(10)
                            })
                        } else console.error("Ticker symbol returns no data")
                    }), r
                }
                return b(e, n["Component"]), h(e, [{
                    key: "componentWillMount",
                    value: function() {
                        this.loadData()
                    }
                }, {
                    key: "loadData",
                    value: function() {
                        var t = this.props.authHeader,
                            e = this.props.symbol;
                        "fr" == this.props.lang && (j = w), new s.a("fcon/getQuote", t).load({
                            symbol: e
                        }).then(this.handleQuotes)
                    }
                }, {
                    key: "render",
                    value: function(t, e) {
                        ! function(t) {
                            if (null == t) throw new TypeError("Cannot destructure undefined")
                        }(t);
                        var r = e.dataTable,
                            i = e.data,
                            a = e.setLang,
                            s = e.tradeDate,
                            c = e.pubKey;
                        if (i) return Object(n.h)("div", {
                            class: "stockquote_inner"
                        }, Object(n.h)("table", {
                            class: "stockquote_table",
                            width: "100%",
                            cellspacing: "0",
                            cellpadding: "0",
                            border: "0"
                        }, Object(n.h)("tr", null, Object(n.h)("td", {
                            align: "left",
                            class: "compname",
                            colspan: "3"
                        }, Object(n.h)("div", {
                            class: "stockname"
                        }, i ? i[0].Name + " (" + i[0].ExchangeName + ":" + i[0].Symbol + ")" : ""), Object(n.h)("div", {
                            class: "timestamp"
                        }, i ? a.dataLine + " " + s : ""))), Object(n.h)("tr", null, r || Object(n.h)(o.a, null), Object(n.h)("td", {
                            class: "divider"
                        }, " "), Object(n.h)("td", {
                            align: "left",
                            valign: "top"
                        }, i ? Object(n.h)(C, {
                            symbol: i[0].Symbol,
                            pubKey: c,
                            setLang: a
                        }) : Object(n.h)(o.a, null)))))
                    }
                }]), e
            }();

        function x(t) {
            var e = t.rows,
                r = t.setLang,
                o = t.decimals,
                s = void 0 === o ? 2 : o;
            return l(e.map(function(t) {
                if (t) {
                    var e = Object(a.a)(t.Price, t.PrevClose);
                    return Object(n.h)("td", {
                        valign: "top",
                        width: "100%"
                    }, Object(n.h)("table", {
                        class: "datatable",
                        border: "0",
                        cellspacing: "0",
                        cellpadding: "0",
                        width: "100%"
                    }, Object(n.h)("tr", {
                        class: "row1"
                    }, Object(n.h)("td", {
                        align: "left",
                        class: "label"
                    }, r.price, ": "), Object(n.h)("td", {
                        class: "data"
                    }, Object(i.a)(t.Price, {
                        Decimals: s,
                        Default: "-",
                        Comma: !0
                    }), "USD" == t.ExchangeDefaultCurrency ? "" : " " + t.ExchangeDefaultCurrency)), Object(n.h)("tr", {
                        class: "row2"
                    }, Object(n.h)("td", {
                        align: "left",
                        class: "label"
                    }, r.change, ": "), Object(n.h)("td", {
                        class: "data " + e.class
                    }, Object(i.a)(e.price, {
                        Decimals: s,
                        Default: "0.00",
                        Plus: !0
                    }), " (", Object(i.a)(e.percent, {
                        Decimals: 2,
                        Default: "0.00",
                        Plus: !0,
                        Suffix: "%"
                    }), ")")), Object(n.h)("tr", {
                        class: "row1"
                    }, Object(n.h)("td", {
                        align: "left",
                        class: "label"
                    }, r.dayRange, ": "), Object(n.h)("td", {
                        class: "data"
                    }, t.Low, " - ", t.High)), Object(n.h)("tr", {
                        class: "row2"
                    }, Object(n.h)("td", {
                        align: "left",
                        class: "label"
                    }, r.yearRange, ": "), Object(n.h)("td", {
                        class: "data"
                    }, Object(i.a)(t.Low52, {
                        Decimals: s,
                        Default: "-",
                        Comma: !0
                    }), " - ", Object(i.a)(t.High52, {
                        Decimals: s,
                        Default: "-",
                        Comma: !0
                    }))), Object(n.h)("tr", {
                        class: "row1"
                    }, Object(n.h)("td", {
                        align: "left",
                        class: "label"
                    }, r.marketCap, ": "), Object(n.h)("td", {
                        class: "data"
                    }, Object(i.a)(t.SharesOutstanding * t.Price, {
                        Decimals: s,
                        Default: "0",
                        Compact: !0
                    }))), Object(n.h)("tr", {
                        class: "row2"
                    }, Object(n.h)("td", {
                        align: "left",
                        class: "label"
                    }, r.eps, ": "), Object(n.h)("td", {
                        class: "data"
                    }, t.EPS)), Object(n.h)("tr", {
                        class: "row1"
                    }, Object(n.h)("td", {
                        align: "left",
                        class: "label"
                    }, r.volume, ":"), Object(n.h)("td", {
                        class: "data"
                    }, Object(i.a)(t.Volume, {
                        Default: "-",
                        Compact: !0
                    })))))
                }
            }))
        }
        var C = function(t) {
            function e() {
                var t, r;
                f(this, e);
                for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                return g(v(v(r = y(this, (t = d(e)).call.apply(t, [this].concat(o))))), "handleInterval", function(t) {
                    t.preventDefault();
                    var e = t.target.dataset.interval;
                    r.setState({
                        interval: e
                    })
                }), r
            }
            return b(e, n["Component"]), h(e, [{
                key: "render",
                value: function(t, e) {
                    var r = this,
                        o = t.symbol,
                        i = t.pubKey,
                        a = t.setLang,
                        s = e.interval,
                        u = void 0 === s ? 1 : s,
                        l = c({
                            symbol: o,
                            interval: u
                        }, A),
                        f = "//api.cloudquote.net/fcon/getPriceChart.svg?P=" + i + "&" + Object.keys(l).map(function(t) {
                            return escape(t) + "=" + escape(l[t])
                        }).join("&"),
                        p = [{
                            interval: 1,
                            name: a.intraday
                        }, {
                            interval: 92,
                            name: a.threeMonth
                        }, {
                            interval: 183,
                            name: a.sixMonth
                        }, {
                            interval: 365,
                            name: a.oneYear
                        }];
                    return Object(n.h)("div", {
                        class: "chart"
                    }, Object(n.h)("div", null, Object(n.h)("img", {
                        src: f
                    })), Object(n.h)("table", {
                        id: "fcintervals",
                        width: "100%",
                        border: "0",
                        cellspacing: "0",
                        cellpadding: "0"
                    }, Object(n.h)("tr", {
                        class: "intervals"
                    }, p.map(function(t) {
                        return Object(n.h)("td", {
                            class: t.interval == u ? "active" : "",
                            width: "25%"
                        }, Object(n.h)("a", {
                            href: "#",
                            "data-interval": t.interval,
                            onclick: r.handleInterval
                        }, t.name))
                    }))))
                }
            }]), e
        }();
        window.currentWidget = function() {
            function t(e) {
                f(this, t), this.props = e || {}
            }
            return h(t, [{
                key: "render",
                value: function(t) {
                    this.props = c({}, this.props, t), this.props.el ? this.props.authHeader ? this.props.symbol ? Object(n.render)(Object(n.h)(O, this.props), this.props.el) : console.error("Missing parameter symbol: - don't know what symbol to retrieve for widget") : console.error("Missing parameter authHeader: - don't know what auth key to pass when retrieving data for widget") : console.error("Missing parameter el: - don't know where to place widget")
                }
            }]), t
        }()
    }, function(t, e, r) {
        var n = r(62);
        "string" == typeof n && (n = [
            [t.i, n, ""]
        ]);
        var o = {
            sourceMap: !0,
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        r(24)(n, o);
        n.locals && (t.exports = n.locals)
    }, function(t, e, r) {
        (t.exports = r(23)(!0)).push([t.i, ".stockquote {\n  width: 600px;\n}\n.stockquote table.stockquote_table {\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n}\n.stockquote .compname {\n  font-size: 16px;\n  font-weight: bold;\n}\n.stockquote .compname .timestamp {\n  font-size: 12px;\n  font-weight: normal;\n  padding: 8px 0px;\n}\n.stockquote table.datatable td {\n  padding: 8px 0px;\n}\n.stockquote td.data {\n  text-align: right;\n}\n.stockquote .positive {\n  color: #5CAC00;\n}\n.stockquote .negative {\n  color: #990000;\n}\n.stockquote table.stockquote_table td.divider {\n  padding: 0px 10px;\n}\n.stockquote .chart {\n  padding-top: 6px;\n}\n.stockquote .chart table {\n  padding-top: 3px;\n}\n.stockquote .intervals TD A {\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: normal;\n  text-decoration: none;\n  color: #272729;\n  display: block;\n  text-align: center;\n  padding: 3px 3px;\n  font-weight: bold;\n}\n.stockquote .intervals TD.active A {\n  border-radius: 3px;\n  background: #00837E;\n  color: #FFF;\n  font-weight: bold;\n}\n", "", {
            version: 3,
            sources: ["/home/circleci/repo/src/widget/cision/stockquote.less", "stockquote.less"],
            names: [],
            mappings: "AAAA;EACC,aAAA;CCCA;ADCD;EACC,oCAAA;EACA,gBAAA;CCCA;ADCD;EACC,gBAAA;EACA,kBAAA;CCCA;ADCD;EACC,gBAAA;EACA,oBAAA;EACA,iBAAA;CCCA;ADCD;EACC,iBAAA;CCCA;ADCD;EACC,kBAAA;CCCA;ADCD;EACC,eAAA;CCCA;ADCD;EACC,eAAA;CCCA;ADCD;EACC,kBAAA;CCCA;ADCD;EACC,iBAAA;CCCA;ADCD;EACC,iBAAA;CCCA;ADCD;EACC,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;CCCA;ADCD;EACC,mBAAA;EACA,oBAAA;EACA,YAAA;EACA,kBAAA;CCCA",
            file: "stockquote.less",
            sourcesContent: [".stockquote {\n width: 600px;\n}\n.stockquote table.stockquote_table {\n font-family: Montserrat, sans-serif;\n font-size: 12px;\n}\n.stockquote .compname {\n font-size: 16px;\n font-weight: bold;\n}\n.stockquote .compname .timestamp {\n font-size: 12px;\n font-weight: normal;\n padding: 8px 0px;\n}\n.stockquote table.datatable td {\n padding: 8px 0px;\n}\n.stockquote td.data {\n text-align: right;\n}\n.stockquote .positive {\n color: #5CAC00;\n}\n.stockquote .negative {\n color: #990000;\n}\n.stockquote table.stockquote_table td.divider {\n padding: 0px 10px;\n}\n.stockquote .chart {\n padding-top: 6px;\n}\n.stockquote .chart table {\n padding-top: 3px;\n}\n.stockquote .intervals TD A {\n font-size: 13px;\n line-height: 18px;\n font-weight: normal;\n text-decoration: none;\n color: #272729;\n display: block;\n text-align: center;\n padding: 3px 3px;\n font-weight: bold;\n}\n.stockquote .intervals TD.active A {\n border-radius: 3px;\n background: #00837E;\n color: #FFF;\n font-weight: bold;\n}\n", ".stockquote {\n  width: 600px;\n}\n.stockquote table.stockquote_table {\n  font-family: Montserrat, sans-serif;\n  font-size: 12px;\n}\n.stockquote .compname {\n  font-size: 16px;\n  font-weight: bold;\n}\n.stockquote .compname .timestamp {\n  font-size: 12px;\n  font-weight: normal;\n  padding: 8px 0px;\n}\n.stockquote table.datatable td {\n  padding: 8px 0px;\n}\n.stockquote td.data {\n  text-align: right;\n}\n.stockquote .positive {\n  color: #5CAC00;\n}\n.stockquote .negative {\n  color: #990000;\n}\n.stockquote table.stockquote_table td.divider {\n  padding: 0px 10px;\n}\n.stockquote .chart {\n  padding-top: 6px;\n}\n.stockquote .chart table {\n  padding-top: 3px;\n}\n.stockquote .intervals TD A {\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: normal;\n  text-decoration: none;\n  color: #272729;\n  display: block;\n  text-align: center;\n  padding: 3px 3px;\n  font-weight: bold;\n}\n.stockquote .intervals TD.active A {\n  border-radius: 3px;\n  background: #00837E;\n  color: #FFF;\n  font-weight: bold;\n}\n"],
            sourceRoot: ""
        }])
    }])
});