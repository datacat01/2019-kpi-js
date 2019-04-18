! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 256)
}({
    0: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "h", function() {
            return i
        }), n.d(t, "createElement", function() {
            return i
        }), n.d(t, "cloneElement", function() {
            return u
        }), n.d(t, "Component", function() {
            return R
        }), n.d(t, "render", function() {
            return M
        }), n.d(t, "rerender", function() {
            return d
        }), n.d(t, "options", function() {
            return r
        });
        var r = {},
            o = [],
            a = [];

        function i(e, t) {
            var n, i, s, c, u = a;
            for (c = arguments.length; c-- > 2;) o.push(arguments[c]);
            for (t && null != t.children && (o.length || o.push(t.children), delete t.children); o.length;)
                if ((i = o.pop()) && void 0 !== i.pop)
                    for (c = i.length; c--;) o.push(i[c]);
                else "boolean" == typeof i && (i = null), (s = "function" != typeof e) && (null == i ? i = "" : "number" == typeof i ? i = String(i) : "string" != typeof i && (s = !1)), s && n ? u[u.length - 1] += i : u === a ? u = [i] : u.push(i), n = s;
            var l = new function() {};
            return l.nodeName = e, l.children = u, l.attributes = null == t ? void 0 : t, l.key = null == t ? void 0 : t.key, void 0 !== r.vnode && r.vnode(l), l
        }

        function s(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }
        var c = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

        function u(e, t) {
            return i(e.nodeName, s(s({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
        }
        var l = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
            p = [];

        function f(e) {
            !e._dirty && (e._dirty = !0) && 1 == p.push(e) && (r.debounceRendering || c)(d)
        }

        function d() {
            var e, t = p;
            for (p = []; e = t.pop();) e._dirty && I(e)
        }

        function h(e, t) {
            return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function g(e) {
            var t = s({}, e.attributes);
            t.children = e.children;
            var n = e.nodeName.defaultProps;
            if (void 0 !== n)
                for (var r in n) void 0 === t[r] && (t[r] = n[r]);
            return t
        }

        function m(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function v(e, t, n, r, o) {
            if ("className" === t && (t = "class"), "key" === t);
            else if ("ref" === t) n && n(null), r && r(e);
            else if ("class" !== t || o)
                if ("style" === t) {
                    if (r && "string" != typeof r && "string" != typeof n || (e.style.cssText = r || ""), r && "object" == typeof r) {
                        if ("string" != typeof n)
                            for (var a in n) a in r || (e.style[a] = "");
                        for (var a in r) e.style[a] = "number" == typeof r[a] && !1 === l.test(a) ? r[a] + "px" : r[a]
                    }
                } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");
            else if ("o" == t[0] && "n" == t[1]) {
                var i = t !== (t = t.replace(/Capture$/, ""));
                t = t.toLowerCase().substring(2), r ? n || e.addEventListener(t, y, i) : e.removeEventListener(t, y, i), (e._listeners || (e._listeners = {}))[t] = r
            } else if ("list" !== t && "type" !== t && !o && t in e) ! function(e, t, n) {
                try {
                    e[t] = n
                } catch (e) {}
            }(e, t, null == r ? "" : r), null != r && !1 !== r || e.removeAttribute(t);
            else {
                var s = o && t !== (t = t.replace(/^xlink:?/, ""));
                null == r || !1 === r ? s ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (s ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r))
            } else e.className = r || ""
        }

        function y(e) {
            return this._listeners[e.type](r.event && r.event(e) || e)
        }
        var b = [],
            _ = 0,
            j = !1,
            w = !1;

        function k() {
            for (var e; e = b.pop();) r.afterMount && r.afterMount(e), e.componentDidMount && e.componentDidMount()
        }

        function O(e, t, n, r, o, a) {
            _++ || (j = null != o && void 0 !== o.ownerSVGElement, w = null != e && !("__preactattr_" in e));
            var i = C(e, t, n, r, a);
            return o && i.parentNode !== o && o.appendChild(i), --_ || (w = !1, a || k()), i
        }

        function C(e, t, n, r, o) {
            var a = e,
                i = j;
            if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || o) ? e.nodeValue != t && (e.nodeValue = t) : (a = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(a, e), N(e, !0))), a.__preactattr_ = !0, a;
            var s, c, u = t.nodeName;
            if ("function" == typeof u) return function(e, t, n, r) {
                var o = e && e._component,
                    a = o,
                    i = e,
                    s = o && e._componentConstructor === t.nodeName,
                    c = s,
                    u = g(t);
                for (; o && !c && (o = o._parentComponent);) c = o.constructor === t.nodeName;
                o && c && (!r || o._component) ? (E(o, u, 3, n, r), e = o.base) : (a && !s && (T(a), e = i = null), o = A(t.nodeName, u, n), e && !o.nextBase && (o.nextBase = e, i = null), E(o, u, 1, n, r), e = o.base, i && e !== i && (i._component = null, N(i, !1)));
                return e
            }(e, t, n, r);
            if (j = "svg" === u || "foreignObject" !== u && j, u = String(u), (!e || !h(e, u)) && (s = u, (c = j ? document.createElementNS("http://www.w3.org/2000/svg", s) : document.createElement(s)).normalizedNodeName = s, a = c, e)) {
                for (; e.firstChild;) a.appendChild(e.firstChild);
                e.parentNode && e.parentNode.replaceChild(a, e), N(e, !0)
            }
            var l = a.firstChild,
                p = a.__preactattr_,
                f = t.children;
            if (null == p) {
                p = a.__preactattr_ = {};
                for (var d = a.attributes, y = d.length; y--;) p[d[y].name] = d[y].value
            }
            return !w && f && 1 === f.length && "string" == typeof f[0] && null != l && void 0 !== l.splitText && null == l.nextSibling ? l.nodeValue != f[0] && (l.nodeValue = f[0]) : (f && f.length || null != l) && function(e, t, n, r, o) {
                    var a, i, s, c, u, l = e.childNodes,
                        p = [],
                        f = {},
                        d = 0,
                        g = 0,
                        v = l.length,
                        y = 0,
                        b = t ? t.length : 0;
                    if (0 !== v)
                        for (var _ = 0; _ < v; _++) {
                            var j = l[_],
                                w = j.__preactattr_,
                                k = b && w ? j._component ? j._component.__key : w.key : null;
                            null != k ? (d++, f[k] = j) : (w || (void 0 !== j.splitText ? !o || j.nodeValue.trim() : o)) && (p[y++] = j)
                        }
                    if (0 !== b)
                        for (var _ = 0; _ < b; _++) {
                            c = t[_], u = null;
                            var k = c.key;
                            if (null != k) d && void 0 !== f[k] && (u = f[k], f[k] = void 0, d--);
                            else if (!u && g < y)
                                for (a = g; a < y; a++)
                                    if (void 0 !== p[a] && (O = i = p[a], S = o, "string" == typeof(x = c) || "number" == typeof x ? void 0 !== O.splitText : "string" == typeof x.nodeName ? !O._componentConstructor && h(O, x.nodeName) : S || O._componentConstructor === x.nodeName)) {
                                        u = i, p[a] = void 0, a === y - 1 && y--, a === g && g++;
                                        break
                                    } u = C(u, c, n, r), s = l[_], u && u !== e && u !== s && (null == s ? e.appendChild(u) : u === s.nextSibling ? m(s) : e.insertBefore(u, s))
                        }
                    var O, x, S;
                    if (d)
                        for (var _ in f) void 0 !== f[_] && N(f[_], !1);
                    for (; g <= y;) void 0 !== (u = p[y--]) && N(u, !1)
                }(a, f, n, r, w || null != p.dangerouslySetInnerHTML),
                function(e, t, n) {
                    var r;
                    for (r in n) t && null != t[r] || null == n[r] || v(e, r, n[r], n[r] = void 0, j);
                    for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || v(e, r, n[r], n[r] = t[r], j)
                }(a, t.attributes, p), j = i, a
        }

        function N(e, t) {
            var n = e._component;
            n ? T(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || m(e), x(e))
        }

        function x(e) {
            for (e = e.lastChild; e;) {
                var t = e.previousSibling;
                N(e, !0), e = t
            }
        }
        var S = {};

        function A(e, t, n) {
            var r, o = S[e.name];
            if (e.prototype && e.prototype.render ? (r = new e(t, n), R.call(r, t, n)) : ((r = new R(t, n)).constructor = e, r.render = P), o)
                for (var a = o.length; a--;)
                    if (o[a].constructor === e) {
                        r.nextBase = o[a].nextBase, o.splice(a, 1);
                        break
                    } return r
        }

        function P(e, t, n) {
            return this.constructor(e, n)
        }

        function E(e, t, n, o, a) {
            e._disable || (e._disable = !0, (e.__ref = t.ref) && delete t.ref, (e.__key = t.key) && delete t.key, !e.base || a ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = o), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === r.syncComponentUpdates && e.base ? f(e) : I(e, 1, a)), e.__ref && e.__ref(e))
        }

        function I(e, t, n, o) {
            if (!e._disable) {
                var a, i, c, u = e.props,
                    l = e.state,
                    p = e.context,
                    f = e.prevProps || u,
                    d = e.prevState || l,
                    h = e.prevContext || p,
                    m = e.base,
                    v = e.nextBase,
                    y = m || v,
                    j = e._component,
                    w = !1;
                if (m && (e.props = f, e.state = d, e.context = h, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(u, l, p) ? w = !0 : e.componentWillUpdate && e.componentWillUpdate(u, l, p), e.props = u, e.state = l, e.context = p), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !w) {
                    a = e.render(u, l, p), e.getChildContext && (p = s(s({}, p), e.getChildContext()));
                    var C, x, S = a && a.nodeName;
                    if ("function" == typeof S) {
                        var P = g(a);
                        (i = j) && i.constructor === S && P.key == i.__key ? E(i, P, 1, p, !1) : (C = i, e._component = i = A(S, P, p), i.nextBase = i.nextBase || v, i._parentComponent = e, E(i, P, 0, p, !1), I(i, 1, n, !0)), x = i.base
                    } else c = y, (C = j) && (c = e._component = null), (y || 1 === t) && (c && (c._component = null), x = O(c, a, p, n || !m, y && y.parentNode, !0));
                    if (y && x !== y && i !== j) {
                        var R = y.parentNode;
                        R && x !== R && (R.replaceChild(x, y), C || (y._component = null, N(y, !1)))
                    }
                    if (C && T(C), e.base = x, x && !o) {
                        for (var M = e, U = e; U = U._parentComponent;)(M = U).base = x;
                        x._component = M, x._componentConstructor = M.constructor
                    }
                }
                if (!m || n ? b.unshift(e) : w || (e.componentDidUpdate && e.componentDidUpdate(f, d, h), r.afterUpdate && r.afterUpdate(e)), null != e._renderCallbacks)
                    for (; e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
                _ || o || k()
            }
        }

        function T(e) {
            r.beforeUnmount && r.beforeUnmount(e);
            var t = e.base;
            e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
            var n = e._component;
            n ? T(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.nextBase = t, m(t), function(e) {
                var t = e.constructor.name;
                (S[t] || (S[t] = [])).push(e)
            }(e), x(t)), e.__ref && e.__ref(null)
        }

        function R(e, t) {
            this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}
        }

        function M(e, t, n) {
            return O(n, e, {}, !1, t, !1)
        }
        s(R.prototype, {
            setState: function(e, t) {
                var n = this.state;
                this.prevState || (this.prevState = s({}, n)), s(n, "function" == typeof e ? e(n, this.props) : e), t && (this._renderCallbacks = this._renderCallbacks || []).push(t), f(this)
            },
            forceUpdate: function(e) {
                e && (this._renderCallbacks = this._renderCallbacks || []).push(e), I(this, 2)
            },
            render: function() {}
        });
        var U = {
            h: i,
            createElement: i,
            cloneElement: u,
            Component: R,
            render: M,
            rerender: d,
            options: r
        };
        t.default = U
    },
    1: function(e, t, n) {
        var r;
        /*!
          Copyright (c) 2016 Jed Watson.
          Licensed under the MIT License (MIT), see
          http://jedwatson.github.io/classnames
        */
        /*!
          Copyright (c) 2016 Jed Watson.
          Licensed under the MIT License (MIT), see
          http://jedwatson.github.io/classnames
        */
        ! function() {
            "use strict";
            var n = {}.hasOwnProperty;

            function o() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    if (r) {
                        var a = typeof r;
                        if ("string" === a || "number" === a) e.push(r);
                        else if (Array.isArray(r)) e.push(o.apply(null, r));
                        else if ("object" === a)
                            for (var i in r) n.call(r, i) && r[i] && e.push(i)
                    }
                }
                return e.join(" ")
            }
            void 0 !== e && e.exports ? e.exports = o : void 0 === (r = function() {
                return o
            }.apply(t, [])) || (e.exports = r)
        }()
    },
    124: function(e, t, n) {
        "use strict";
        var r = this && this.__assign || Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.buildHeaders = function(e, t) {
            return r({}, e || {
                Accept: "application/json",
                "Content-Type": "application/json"
            }, t)
        }
    },
    125: function(e, t, n) {
        "use strict";
        var r, o = this && this.__extends || (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            function(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            });
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            return Promise.race([e(), new Promise(function(e, n) {
                setTimeout(function() {
                    n(new a("Request timeout after " + t.timeoutInMs + "ms"))
                }, t.timeoutInMs)
            })])
        };
        var a = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.timeout = !0, n
            }
            return o(t, e), t
        }(Error)
    },
    126: function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    127: function(e, t, n) {
        "use strict";
        var r = function(e) {};
        e.exports = function(e, t, n, o, a, i, s, c) {
            if (r(t), !e) {
                var u;
                if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var l = [n, o, a, i, s, c],
                        p = 0;
                    (u = new Error(t.replace(/%s/g, function() {
                        return l[p++]
                    }))).name = "Invariant Violation"
                }
                throw u.framesToPop = 1, u
            }
        }
    },
    128: function(e, t, n) {
        "use strict";

        function r(e) {
            return function() {
                return e
            }
        }
        var o = function() {};
        o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function() {
            return this
        }, o.thatReturnsArgument = function(e) {
            return e
        }, e.exports = o
    },
    129: function(e, t, n) {
        "use strict";
        var r = n(128),
            o = n(127),
            a = n(126);
        e.exports = function() {
            function e(e, t, n, r, i, s) {
                s !== a && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t
            };
            return n.checkPropTypes = r, n.PropTypes = n, n
        }
    },
    18: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setCookieDomainName = function(e) {
            r = e
        }, t.getCookieDomainName = function() {
            return r
        };
        t.COOKIE_NAMES = {
            JG_ANALYTICS_COOKIE_NAME: "JGAnalytics",
            JG_ANALYTICS_AB: "JGABID",
            KM: "km_ai",
            KOALA_EmailIdentity: "koala_ei",
            GGASPXAUTH_BEARER: ".GGASPXAUTH_BEARER",
            GGASPXAUTH_PROD_ID: ".GGASPXAUTH_ID",
            GGASPXAUTH_DEV_ID: ".GGASPXAUTH_DEV_ID",
            GGASPXAUTH_STAGING_ID: ".GGASPXAUTH_STAGING_ID",
            GGASPXAUTH_SANDBOX_ID: ".GGASPXAUTH_SANDBOX_ID"
        };
        var r = "justgiving.com"
    },
    19: function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var r = window.__jgChromeConfig
    },
    21: function(e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))(function(o, a) {
                    function i(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        e.done ? o(e.value) : new n(function(t) {
                            t(e.value)
                        }).then(i, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                })
            },
            o = this && this.__generator || function(e, t) {
                var n, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = r[2 & a[0] ? "return" : a[0] ? "throw" : "next"]) && !(o = o.call(r, a[1])).done) return o;
                                switch (r = 0, o && (a = [0, o.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, r = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1], o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2], i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            },
            a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            },
            i = this;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = a(n(125)),
            c = n(124);
        t.default = function(e, t) {
            var n = void 0 === t ? {} : t,
                a = n.timeoutInMs,
                u = n.headers,
                l = n.extraHeaders,
                p = n.method,
                f = n.body,
                d = n.credentials;
            return r(i, void 0, void 0, function() {
                var t, n, r;
                return o(this, function(o) {
                    return t = {
                        method: p || "GET",
                        mode: "cors",
                        headers: new Headers(c.buildHeaders(u, l)),
                        body: f,
                        credentials: d || "include"
                    }, n = function() {
                        return fetch(e, t)
                    }, (r = void 0 === a ? 4e3 : a) ? [2, s.default(n, {
                        timeoutInMs: r
                    })] : [2, n()]
                })
            })
        }
    },
    232: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        t.Cookies = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._analyticsCookieName = t || "", this._cookiesSource = n, this._cookies = null
            }
            return r(e, [{
                key: "cookieToObject",
                value: function(e) {
                    var t = null,
                        n = {};
                    return (t = this.cookies[e]) && t.split("&").forEach(function(e) {
                        var t = e.split("=");
                        n[t[0]] = t[1]
                    }), n
                }
            }, {
                key: "cookiesSource",
                get: function() {
                    return null === this._cookiesSource && (this._cookiesSource = document.cookie), this._cookiesSource
                }
            }, {
                key: "cookies",
                get: function() {
                    if (null === this._cookies) {
                        this._cookies = {};
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var r, o = this.cookiesSource.split("; ")[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                                var a = r.value,
                                    i = a.indexOf("="),
                                    s = a.substr(0, i),
                                    c = a.substr(i + 1, a.length);
                                this._cookies[s] = decodeURIComponent(c)
                            }
                        } catch (e) {
                            t = !0, n = e
                        } finally {
                            try {
                                !e && o.return && o.return()
                            } finally {
                                if (t) throw n
                            }
                        }
                    }
                    return this._cookies
                }
            }, {
                key: "analyticsCookie",
                get: function() {
                    return this.cookieToObject(this._analyticsCookieName)
                }
            }, {
                key: "JgAbLoggedInCookie",
                get: function() {
                    return this.cookies.JGABID ? {
                        value: this.cookies.JGABID.replace("id=", "")
                    } : ""
                }
            }, {
                key: "JgUserMetadataCookie",
                get: function() {
                    return this.cookieToObject("JGUserMetadata")
                }
            }]), e
        }()
    },
    233: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
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
            o = n(18),
            a = n(232);
        var i = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.cookies = new a.Cookies(o.COOKIE_NAMES.JG_ANALYTICS_COOKIE_NAME, t)
            }
            return r(e, [{
                key: "getAnalyticsCookie",
                value: function() {
                    return this.cookies.analyticsCookie
                }
            }, {
                key: "getAbCookie",
                value: function() {
                    return this.cookies.JgAbLoggedInCookie.value
                }
            }, {
                key: "getKissmetricsCookie",
                value: function() {
                    return this.cookies.cookies.km_ai
                }
            }, {
                key: "getCookieString",
                value: function() {
                    return this.cookies.cookiesSource
                }
            }, {
                key: "getAuthUserEmail",
                value: function(e) {
                    return this.cookies.cookieToObject(e).Email
                }
            }, {
                key: "getAuthBearerCookie",
                value: function() {
                    return this.cookies.cookieToObject(o.COOKIE_NAMES.GGASPXAUTH_BEARER)
                }
            }, {
                key: "getKOALAEmailIdentity",
                value: function() {
                    return this.cookies.cookies[o.COOKIE_NAMES.KOALA_EmailIdentity]
                }
            }, {
                key: "setKOALAEmailIdentity",
                value: function(e) {}
            }, {
                key: "setCookie",
                value: function(e, t) {}
            }]), e
        }();
        t.default = i
    },
    234: function(e, t, n) {
        var r, o;
        /*!
         * JavaScript Cookie v2.2.0
         * https://github.com/js-cookie/js-cookie
         *
         * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
         * Released under the MIT license
         */
        ! function(a) {
            if (void 0 === (o = "function" == typeof(r = a) ? r.call(t, n, t, e) : r) || (e.exports = o), !0, e.exports = a(), !!0) {
                var i = window.Cookies,
                    s = window.Cookies = a();
                s.noConflict = function() {
                    return window.Cookies = i, s
                }
            }
        }(function() {
            function e() {
                for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) t[r] = n[r]
                }
                return t
            }
            return function t(n) {
                function r(t, o, a) {
                    var i;
                    if ("undefined" != typeof document) {
                        if (arguments.length > 1) {
                            if ("number" == typeof(a = e({
                                    path: "/"
                                }, r.defaults, a)).expires) {
                                var s = new Date;
                                s.setMilliseconds(s.getMilliseconds() + 864e5 * a.expires), a.expires = s
                            }
                            a.expires = a.expires ? a.expires.toUTCString() : "";
                            try {
                                i = JSON.stringify(o), /^[\{\[]/.test(i) && (o = i)
                            } catch (e) {}
                            o = n.write ? n.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                            var c = "";
                            for (var u in a) a[u] && (c += "; " + u, !0 !== a[u] && (c += "=" + a[u]));
                            return document.cookie = t + "=" + o + c
                        }
                        t || (i = {});
                        for (var l = document.cookie ? document.cookie.split("; ") : [], p = /(%[0-9A-Z]{2})+/g, f = 0; f < l.length; f++) {
                            var d = l[f].split("="),
                                h = d.slice(1).join("=");
                            this.json || '"' !== h.charAt(0) || (h = h.slice(1, -1));
                            try {
                                var g = d[0].replace(p, decodeURIComponent);
                                if (h = n.read ? n.read(h, g) : n(h, g) || h.replace(p, decodeURIComponent), this.json) try {
                                    h = JSON.parse(h)
                                } catch (e) {}
                                if (t === g) {
                                    i = h;
                                    break
                                }
                                t || (i[g] = h)
                            } catch (e) {}
                        }
                        return i
                    }
                }
                return r.set = r, r.get = function(e) {
                    return r.call(r, e)
                }, r.getJSON = function() {
                    return r.apply({
                        json: !0
                    }, [].slice.call(arguments))
                }, r.defaults = {}, r.remove = function(t, n) {
                    r(t, "", e(n, {
                        expires: -1
                    }))
                }, r.withConverter = t, r
            }(function() {})
        })
    },
    235: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getAnalyticsCookie = function() {
            return s.get(i.COOKIE_NAMES.JG_ANALYTICS_COOKIE_NAME) || {}
        }, t.getAbCookie = function() {
            var e = s.get(i.COOKIE_NAMES.JG_ANALYTICS_AB);
            return (e = e || {}).id
        }, t.getKissmetricsCookie = function() {
            return a.default.get(i.COOKIE_NAMES.KM)
        }, t.getCookieString = function() {
            return a.default.get()
        }, t.getAuthUserEmail = function(e) {
            var t = s.get(e);
            return (t = t || {}).Email
        }, t.getAuthBearerCookie = function() {
            var e = s.get(i.COOKIE_NAMES.GGASPXAUTH_BEARER);
            return e = e || {}
        }, t.getKOALAEmailIdentity = function() {
            return a.default.get(i.COOKIE_NAMES.KOALA_EmailIdentity)
        }, t.setCookie = c, t.setKOALAEmailIdentity = function(e) {
            c(i.COOKIE_NAMES.KOALA_EmailIdentity, e)
        };
        var r, o = n(234),
            a = (r = o) && r.__esModule ? r : {
                default: r
            },
            i = n(18);
        var s = a.default.withConverter(function(e) {
            return function(e) {
                var t = {};
                return e.split("&").forEach(function(e) {
                    var n = e.split("=");
                    t[n[0]] = n[1]
                }), t
            }(e)
        });

        function c(e, t) {
            a.default.set(e, t, {
                expires: 3650,
                domain: (0, i.getCookieDomainName)()
            })
        }
    },
    236: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = function() {
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
            a = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(n(235)),
            i = n(233),
            s = (r = i) && r.__esModule ? r : {
                default: r
            },
            c = n(18),
            u = n(40);
        var l = function() {
            function e(t, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (0, u.isServer)() ? this.api = new s.default(t || ""): this.api = a, this.env = n
            }
            return o(e, [{
                key: "getAnalyticsCookie",
                value: function() {
                    return this.api.getAnalyticsCookie()
                }
            }, {
                key: "getAbCookie",
                value: function() {
                    return this.api.getAbCookie()
                }
            }, {
                key: "getKissmetricsCookie",
                value: function() {
                    return this.api.getKissmetricsCookie()
                }
            }, {
                key: "getCookieString",
                value: function() {
                    return this.api.getCookieString()
                }
            }, {
                key: "getAuthUserEmail",
                value: function() {
                    var e = {
                        PROD: c.COOKIE_NAMES.GGASPXAUTH_PROD_ID,
                        STAGING: c.COOKIE_NAMES.GGASPXAUTH_STAGING_ID,
                        DEV: c.COOKIE_NAMES.GGASPXAUTH_DEV_ID,
                        SANDBOX: c.COOKIE_NAMES.GGASPXAUTH_SANDBOX_ID
                    };
                    return this.api.getAuthUserEmail(e[this.env])
                }
            }, {
                key: "getKOALAEmailIdentity",
                value: function() {
                    return this.api.getKOALAEmailIdentity()
                }
            }, {
                key: "getAuthBearerCookie",
                value: function() {
                    return this.api.getAuthBearerCookie()
                }
            }, {
                key: "getDoNotTrack",
                value: function() {
                    var e = this.api.getAnalyticsCookie();
                    return void 0 !== e.dnt && "false" !== e.dnt.toLowerCase()
                }
            }, {
                key: "setAnalyticsCookie",
                value: function(e, t) {
                    this.api.setAnalyticsCookie(e, t)
                }
            }, {
                key: "setKOALAEmailIdentity",
                value: function(e) {
                    this.api.setKOALAEmailIdentity(e)
                }
            }, {
                key: "setCookie",
                value: function(e, t) {
                    this.api.setCookie(e, t)
                }
            }]), e
        }();
        t.default = l
    },
    237: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.EVENT_SCHEMA = {
            EventBase: "eventbase"
        }
    },
    238: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.xhrSend = function(e, t) {
            var n = new XMLHttpRequest;
            n.open("POST", e), n.onreadystatechange = function() {
                4 === n.readyState && n.status >= 400 && (0, r.logError)(new Error(e + " replied with " + n.status))
            }, n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.send(t)
        }, t.beaconSend = function(e, t) {
            new Image(1, 1).src = e + "?data=" + t
        };
        var r = n(63)
    },
    239: function(e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.init = function(e) {
            r = e
        }, t.getHttps = function() {
            if (r) return r;
            return {}
        }
    },
    240: function(e, t) {
        var n, r, o = e.exports = {};

        function a() {
            throw new Error("setTimeout has not been defined")
        }

        function i() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : a
            } catch (e) {
                n = a
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                r = i
            }
        }();
        var c, u = [],
            l = !1,
            p = -1;

        function f() {
            l && c && (l = !1, c.length ? u = c.concat(u) : p = -1, u.length && d())
        }

        function d() {
            if (!l) {
                var e = s(f);
                l = !0;
                for (var t = u.length; t;) {
                    for (c = u, u = []; ++p < t;) c && c[p].run();
                    p = -1, t = u.length
                }
                c = null, l = !1,
                    function(e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                        try {
                            r(e)
                        } catch (t) {
                            try {
                                return r.call(null, e)
                            } catch (t) {
                                return r.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function h(e, t) {
            this.fun = e, this.array = t
        }

        function g() {}
        o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new h(e, t)), 1 !== u.length || l || s(d)
        }, h.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function(e) {
            return []
        }, o.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function() {
            return "/"
        }, o.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function() {
            return 0
        }
    },
    241: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
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
            o = n(41),
            a = n(40),
            i = n(239),
            s = n(238);
        var c = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.apiUrl = t
            }
            return r(e, [{
                key: "sendData",
                value: function(e) {
                    var t = this,
                        n = this;
                    return new Promise(function(r, c) {
                        t.apiUrl || c(new Error("Koala - Data sender: missing apiUrl"));
                        var u = JSON.stringify(e),
                            l = unescape(encodeURIComponent(u)),
                            p = encodeURIComponent((0, o.encodeBase64)(l)),
                            f = !1;
                        (0, a.isServer)() ? (0, i.getHttps)().get(t.apiUrl + "?data=" + p, function() {
                            r(e)
                        }).on("error", function(e) {
                            c(e)
                        }): ("undefined" != typeof window && "undefined" != typeof navigator && "sendBeacon" in navigator && !/iphone|ipod|ipad/.test(window.navigator.userAgent.toLowerCase()) && (f = window.navigator.sendBeacon(n.apiUrl, u)) && r(e), f || ("string" == typeof p && p.length >= 4e3 ? ((0, s.xhrSend)(t.apiUrl, u), r(e)) : ((0, s.beaconSend)(t.apiUrl, p), r(e))))
                    })
                }
            }]), e
        }();
        t.default = c
    },
    242: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
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
            o = n(18),
            a = n(41);
        var i = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.cookieApi = t
            }
            return r(e, [{
                key: "enrich",
                value: function(e) {
                    return this.setOtherJGAnalyticsCookieValues(e), this.setIdentityGuids(e), (0, a.setValueOrEmptyString)("ab_logged_in_guid", this.cookieApi.getAbCookie(), e), this.setUserIdentity(e), this.setKissmetricsCookieProperties(e), e
                }
            }, {
                key: "setIdentityGuids",
                value: function(e, t) {
                    var n = this.getLoggedInGuid(),
                        r = this.getLoggedOutGuid();
                    (0, a.setValueOrEmptyString)("logged_in_guid", n, e), (0, a.setValueOrEmptyString)("logged_out_guid", r, e);
                    var i = (0, a.createJGAnalyticsCookieString)(this.cookieApi.getAnalyticsCookie(), r, n);
                    "function" == typeof t ? t(i) : this.cookieApi.setCookie(o.COOKIE_NAMES.JG_ANALYTICS_COOKIE_NAME, i)
                }
            }, {
                key: "setOtherJGAnalyticsCookieValues",
                value: function(e) {
                    var t = this.cookieApi.getAnalyticsCookie();
                    Object.keys(t).forEach(function(n) {
                        Object.prototype.hasOwnProperty.call(t, n) && "logged_out_guid" !== n && "logged_in_guid" !== n && (0, a.setValueOrEmptyString)("jganalytics_" + n, t[n], e)
                    })
                }
            }, {
                key: "getLoggedInGuid",
                value: function() {
                    var e = this.cookieApi.getAuthBearerCookie().access_token;
                    return e ? (0, a.parseJwt)(e).sub : this.cookieApi.getAnalyticsCookie().logged_in_guid
                }
            }, {
                key: "getLoggedOutGuid",
                value: function() {
                    var e = this.cookieApi.getAnalyticsCookie().logged_out_guid;
                    return e && "00000000-0000-0000-0000-000000000000" !== e || (e = (0, a.generateGUID)()), e
                }
            }, {
                key: "setUserIdentity",
                value: function(e, t) {
                    var n = this.cookieApi.getAuthUserEmail(),
                        r = 0;
                    n ? r = 1 : (n = this.cookieApi.getKOALAEmailIdentity() || this.cookieApi.getKissmetricsCookie()) && -1 === n.indexOf("@") && (n = null), n && ("function" == typeof t ? t(n) : this.cookieApi.setKOALAEmailIdentity(n)), (0, a.setValueOrEmptyString)("is_logged_in", r, e), (0, a.setValueOrEmptyString)("email", n, e)
                }
            }, {
                key: "setKissmetricsCookieProperties",
                value: function(e) {
                    var t = this.cookieApi.getKissmetricsCookie();
                    "string" == typeof t && (-1 === t.indexOf("@") ? (0, a.setValueOrEmptyString)("km_id", t, e) : (0, a.setValueOrEmptyString)("km_email", t, e))
                }
            }]), e
        }();
        t.default = i
    },
    243: function(e, t) {
        function n(e, t) {
            var n = [],
                r = [];
            return null == t && (t = function(e, t) {
                    return n[0] === t ? "[Circular ~]" : "[Circular ~." + r.slice(0, n.indexOf(t)).join(".") + "]"
                }),
                function(o, a) {
                    if (n.length > 0) {
                        var i = n.indexOf(this);
                        ~i ? n.splice(i + 1) : n.push(this), ~i ? r.splice(i, 1 / 0, o) : r.push(o), ~n.indexOf(a) && (a = t.call(this, o, a))
                    } else n.push(a);
                    return null == e ? a : e.call(this, o, a)
                }
        }(e.exports = function(e, t, r, o) {
            return JSON.stringify(e, n(t, o), r)
        }).getSerialize = n
    },
    244: function(e, t, n) {
        "use strict";
        var r = n(243),
            o = function(e) {
                return function() {
                    var t, n, o = 48,
                        a = 1,
                        i = o,
                        s = new Array(o),
                        c = 0,
                        u = new function() {
                            var e = 4022871197;
                            return function(t) {
                                if (t) {
                                    t = t.toString();
                                    for (var n = 0; n < t.length; n++) {
                                        var r = .02519603282416938 * (e += t.charCodeAt(n));
                                        r -= e = r >>> 0, e = (r *= e) >>> 0, e += 4294967296 * (r -= e)
                                    }
                                    return 2.3283064365386963e-10 * (e >>> 0)
                                }
                                e = 4022871197
                            }
                        };
                    for (t = 0; t < o; t++) s[t] = u(Math.random());
                    var l = function() {
                            ++i >= o && (i = 0);
                            var e = 1768863 * s[i] + 2.3283064365386963e-10 * a;
                            return s[i] = e - (a = 0 | e)
                        },
                        p = function(e) {
                            return Math.floor(e * (l() + 1.1102230246251565e-16 * (2097152 * l() | 0)))
                        };
                    p.string = function(e) {
                        var t, n = "";
                        for (t = 0; t < e; t++) n += String.fromCharCode(33 + p(94));
                        return n
                    };
                    return p.cleanString = function(e) {
                        return e = (e = (e = e.replace(/(^\s*)|(\s*$)/gi, "")).replace(/[\x00-\x1F]/gi, "")).replace(/\n /, "\n")
                    }, p.hashString = function(e) {
                        for (e = p.cleanString(e), u(e), t = 0; t < e.length; t++)
                            for (c = e.charCodeAt(t), n = 0; n < o; n++) s[n] -= u(c), s[n] < 0 && (s[n] += 1)
                    }, p.seed = function(e) {
                        void 0 !== e && null !== e || (e = Math.random()), "string" != typeof e && (e = r(e, function(e, t) {
                            return "function" == typeof t ? t.toString() : t
                        })), p.initState(), p.hashString(e)
                    }, p.addEntropy = function() {
                        var e = [];
                        for (t = 0; t < arguments.length; t++) e.push(arguments[t]);
                        ! function() {
                            var e = Array.prototype.slice.call(arguments);
                            for (t = 0; t < e.length; t++)
                                for (n = 0; n < o; n++) s[n] -= u(e[t]), s[n] < 0 && (s[n] += 1)
                        }(c++ + (new Date).getTime() + e.join("") + Math.random())
                    }, p.initState = function() {
                        for (u(), t = 0; t < o; t++) s[t] = u(" ");
                        a = 1, i = o
                    }, p.done = function() {
                        u = null
                    }, void 0 !== e && p.seed(e), p.range = function(e) {
                        return p(e)
                    }, p.random = function() {
                        return p(Number.MAX_VALUE - 1) / Number.MAX_VALUE
                    }, p.floatBetween = function(e, t) {
                        return p.random() * (t - e) + e
                    }, p.intBetween = function(e, t) {
                        return Math.floor(p.random() * (t - e + 1)) + e
                    }, p
                }()
            };
        o.create = function(e) {
            return new o(e)
        }, e.exports = o
    },
    245: function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    },
    246: function(e, t, n) {
        (function(e, r) {
            var o; /*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
            ! function(a) {
                var i = "object" == typeof t && t,
                    s = ("object" == typeof e && e && e.exports, "object" == typeof r && r);
                s.global !== s && s.window;
                var c = function(e) {
                    this.message = e
                };
                (c.prototype = new Error).name = "InvalidCharacterError";
                var u = function(e) {
                        throw new c(e)
                    },
                    l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    p = /[\t\n\f\r ]/g,
                    f = {
                        encode: function(e) {
                            e = String(e), /[^\0-\xFF]/.test(e) && u("The string to be encoded contains characters outside of the Latin1 range.");
                            for (var t, n, r, o, a = e.length % 3, i = "", s = -1, c = e.length - a; ++s < c;) t = e.charCodeAt(s) << 16, n = e.charCodeAt(++s) << 8, r = e.charCodeAt(++s), i += l.charAt((o = t + n + r) >> 18 & 63) + l.charAt(o >> 12 & 63) + l.charAt(o >> 6 & 63) + l.charAt(63 & o);
                            return 2 == a ? (t = e.charCodeAt(s) << 8, n = e.charCodeAt(++s), i += l.charAt((o = t + n) >> 10) + l.charAt(o >> 4 & 63) + l.charAt(o << 2 & 63) + "=") : 1 == a && (o = e.charCodeAt(s), i += l.charAt(o >> 2) + l.charAt(o << 4 & 63) + "=="), i
                        },
                        decode: function(e) {
                            var t = (e = String(e).replace(p, "")).length;
                            t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length), (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) && u("Invalid character: the string to be decoded is not correctly encoded.");
                            for (var n, r, o = 0, a = "", i = -1; ++i < t;) r = l.indexOf(e.charAt(i)), n = o % 4 ? 64 * n + r : r, o++ % 4 && (a += String.fromCharCode(255 & n >> (-2 * o & 6)));
                            return a
                        },
                        version: "0.1.0"
                    };
                void 0 === (o = function() {
                    return f
                }.call(t, n, t, e)) || (e.exports = o)
            }()
        }).call(this, n(245)(e), n(19))
    },
    247: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function() {
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
            o = n(41),
            a = f(n(242)),
            i = f(n(241)),
            s = n(40),
            c = n(237),
            u = n(18),
            l = f(n(236)),
            p = n(63);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = function() {
            function e(t, n) {
                if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), !n && (0, s.isServer)()) throw new Error("Request object is required when calling library from the server");
                this.browserInfo = (0, o.getBrowserInfo)(n), this.browserInfo.hostname && (0, u.setCookieDomainName)((0, o.parseDomainNameFromHostName)(this.browserInfo.hostname)), this.dataSender = new i.default((0, s.isServer)() ? t.apiUrl + "-server" : t.apiUrl), this.cookiesApi = new l.default(this.browserInfo.cookies, (0, o.getCurrentEnvironment)(this.browserInfo.url)), this.cookieDataEnricher = new a.default(this.cookiesApi), this.isDebug = (0, o.queryStringToObject)(this.browserInfo.url).debug_koala ? "true" === (0, o.queryStringToObject)(this.browserInfo.url).debug_koala.toLowerCase() : t.isDebug || !1
            }
            return r(e, [{
                key: "track",
                value: function(e) {
                    var t = this;
                    return this.eventProperties && (e = (0, o.extend)(e, this.eventProperties)), e.schema_id || (e.schema_id = c.EVENT_SCHEMA.EventBase), this.isDebug && this.validator ? this.validator.validate(e).then(function(t) {
                        return t && (console.error("Analytics ", t), e.failed_validation = !0, e.failed_validation_message = t), e
                    }).then(function(e) {
                        return t.send(e)
                    }) : this.send(e)
                }
            }, {
                key: "send",
                value: function(e) {
                    var t = this;
                    return (e = this.cookieDataEnricher.enrich(e)).device_timestamp = (new Date).getTime(), e.capture_library_version = "2.0.23", e.capture_library_type = (0, s.isServer)() ? "koala_server" : "koala_client", (0, o.setValueOrEmptyString)("url", this.browserInfo.url, e), (0, o.setValueOrEmptyString)("referrer", this.browserInfo.referer, e), (0, o.setValueOrEmptyString)("user_agent", this.browserInfo.user_agent, e), e.hash = (0, o.generateShortId)(this.browserInfo.user_agent, this.browserInfo.referer), this.cookiesApi.getDoNotTrack() && (e.do_not_track = 1, e = (0, o.filterDataForDoNotTrack)(e)), this.dataSender.sendData(e).then(function(e) {
                        return !0 === t.isDebug && console.info("DEBUG: Analytics - Data sent", e), e
                    }).catch(function(e) {
                        return (0, p.logError)(e), e
                    })
                }
            }, {
                key: "set",
                value: function(e) {
                    this.eventProperties = e
                }
            }, {
                key: "importSchema",
                value: function(e) {
                    this.validator && this.validator.importSchema(e)
                }
            }]), e
        }();
        t.default = d
    },
    248: function(e, t) {
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        function r(e) {
            this.message = e
        }
        r.prototype = new Error, r.prototype.name = "InvalidCharacterError", e.exports = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(e) {
            var t = String(e).replace(/=+$/, "");
            if (t.length % 4 == 1) throw new r("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var o, a, i = 0, s = 0, c = ""; a = t.charAt(s++); ~a && (o = i % 4 ? 64 * o + a : a, i++ % 4) ? c += String.fromCharCode(255 & o >> (-2 * i & 6)) : 0) a = n.indexOf(a);
            return c
        }
    },
    249: function(e, t, n) {
        var r = n(248);
        e.exports = function(e) {
            var t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
                case 0:
                    break;
                case 2:
                    t += "==";
                    break;
                case 3:
                    t += "=";
                    break;
                default:
                    throw "Illegal base64url string!"
            }
            try {
                return function(e) {
                    return decodeURIComponent(r(e).replace(/(.)/g, function(e, t) {
                        var n = t.charCodeAt(0).toString(16).toUpperCase();
                        return n.length < 2 && (n = "0" + n), "%" + n
                    }))
                }(t)
            } catch (e) {
                return r(t)
            }
        }
    },
    250: function(e, t, n) {
        "use strict";
        var r = new RegExp("%[a-f0-9]{2}", "gi"),
            o = new RegExp("(%[a-f0-9]{2})+", "gi");

        function a(e, t) {
            try {
                return decodeURIComponent(e.join(""))
            } catch (e) {}
            if (1 === e.length) return e;
            t = t || 1;
            var n = e.slice(0, t),
                r = e.slice(t);
            return Array.prototype.concat.call([], a(n), a(r))
        }

        function i(e) {
            try {
                return decodeURIComponent(e)
            } catch (o) {
                for (var t = e.match(r), n = 1; n < t.length; n++) t = (e = a(t, n).join("")).match(r);
                return e
            }
        }
        e.exports = function(e) {
            if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
            try {
                return e = e.replace(/\+/g, " "), decodeURIComponent(e)
            } catch (t) {
                return function(e) {
                    for (var t = {
                            "%FE%FF": "��",
                            "%FF%FE": "��"
                        }, n = o.exec(e); n;) {
                        try {
                            t[n[0]] = decodeURIComponent(n[0])
                        } catch (e) {
                            var r = i(n[0]);
                            r !== n[0] && (t[n[0]] = r)
                        }
                        n = o.exec(e)
                    }
                    t["%C2"] = "�";
                    for (var a = Object.keys(t), s = 0; s < a.length; s++) {
                        var c = a[s];
                        e = e.replace(new RegExp(c, "g"), t[c])
                    }
                    return e
                }(e)
            }
        }
    },
    251: function(e, t, n) {
        "use strict";
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */
        var r = Object.getOwnPropertySymbols,
            o = Object.prototype.hasOwnProperty,
            a = Object.prototype.propertyIsEnumerable;
        e.exports = function() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                        return t[e]
                    }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    r[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (e) {
                return !1
            }
        }() ? Object.assign : function(e, t) {
            for (var n, i, s = function(e) {
                    if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }(e), c = 1; c < arguments.length; c++) {
                for (var u in n = Object(arguments[c])) o.call(n, u) && (s[u] = n[u]);
                if (r) {
                    i = r(n);
                    for (var l = 0; l < i.length; l++) a.call(n, i[l]) && (s[i[l]] = n[i[l]])
                }
            }
            return s
        }
    },
    252: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            })
        }
    },
    255: function(e, t, n) {},
    256: function(e, t, n) {
        n(255), e.exports = n(71)
    },
    27: function(e, t, n) {
        e.exports = n.p + "52838241b87ab4d46fd6a32f54da8dd8.svg"
    },
    28: function(e, t, n) {
        "use strict";
        var r = n(252),
            o = n(251),
            a = n(250);

        function i(e, t) {
            return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
        }

        function s(e) {
            var t = e.indexOf("?");
            return -1 === t ? "" : e.slice(t + 1)
        }

        function c(e, t) {
            var n = function(e) {
                    var t;
                    switch (e.arrayFormat) {
                        case "index":
                            return function(e, n, r) {
                                t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n) : r[e] = n
                            };
                        case "bracket":
                            return function(e, n, r) {
                                t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
                            };
                        default:
                            return function(e, t, n) {
                                void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                            }
                    }
                }(t = o({
                    arrayFormat: "none"
                }, t)),
                r = Object.create(null);
            return "string" != typeof e ? r : (e = e.trim().replace(/^[?#&]/, "")) ? (e.split("&").forEach(function(e) {
                var t = e.replace(/\+/g, " ").split("="),
                    o = t.shift(),
                    i = t.length > 0 ? t.join("=") : void 0;
                i = void 0 === i ? null : a(i), n(a(o), i, r)
            }), Object.keys(r).sort().reduce(function(e, t) {
                var n = r[t];
                return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) {
                    return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort(function(e, t) {
                        return Number(e) - Number(t)
                    }).map(function(e) {
                        return t[e]
                    }) : t
                }(n) : e[t] = n, e
            }, Object.create(null))) : r
        }
        t.extract = s, t.parse = c, t.stringify = function(e, t) {
            !1 === (t = o({
                encode: !0,
                strict: !0,
                arrayFormat: "none"
            }, t)).sort && (t.sort = function() {});
            var n = function(e) {
                switch (e.arrayFormat) {
                    case "index":
                        return function(t, n, r) {
                            return null === n ? [i(t, e), "[", r, "]"].join("") : [i(t, e), "[", i(r, e), "]=", i(n, e)].join("")
                        };
                    case "bracket":
                        return function(t, n) {
                            return null === n ? i(t, e) : [i(t, e), "[]=", i(n, e)].join("")
                        };
                    default:
                        return function(t, n) {
                            return null === n ? i(t, e) : [i(t, e), "=", i(n, e)].join("")
                        }
                }
            }(t);
            return e ? Object.keys(e).sort(t.sort).map(function(r) {
                var o = e[r];
                if (void 0 === o) return "";
                if (null === o) return i(r, t);
                if (Array.isArray(o)) {
                    var a = [];
                    return o.slice().forEach(function(e) {
                        void 0 !== e && a.push(n(r, e, a.length))
                    }), a.join("&")
                }
                return i(r, t) + "=" + i(o, t)
            }).filter(function(e) {
                return e.length > 0
            }).join("&") : ""
        }, t.parseUrl = function(e, t) {
            return {
                url: e.split("?")[0] || "",
                query: c(s(e), t)
            }
        }
    },
    4: function(e, t, n) {
        "use strict";
        /*!
         * cookie
         * Copyright(c) 2012-2014 Roman Shtylman
         * Copyright(c) 2015 Douglas Christopher Wilson
         * MIT Licensed
         */
        t.parse = function(e, t) {
            if ("string" != typeof e) throw new TypeError("argument str must be a string");
            for (var n = {}, o = t || {}, i = e.split(a), c = o.decode || r, u = 0; u < i.length; u++) {
                var l = i[u],
                    p = l.indexOf("=");
                if (!(p < 0)) {
                    var f = l.substr(0, p).trim(),
                        d = l.substr(++p, l.length).trim();
                    '"' == d[0] && (d = d.slice(1, -1)), void 0 == n[f] && (n[f] = s(d, c))
                }
            }
            return n
        }, t.serialize = function(e, t, n) {
            var r = n || {},
                a = r.encode || o;
            if ("function" != typeof a) throw new TypeError("option encode is invalid");
            if (!i.test(e)) throw new TypeError("argument name is invalid");
            var s = a(t);
            if (s && !i.test(s)) throw new TypeError("argument val is invalid");
            var c = e + "=" + s;
            if (null != r.maxAge) {
                var u = r.maxAge - 0;
                if (isNaN(u)) throw new Error("maxAge should be a Number");
                c += "; Max-Age=" + Math.floor(u)
            }
            if (r.domain) {
                if (!i.test(r.domain)) throw new TypeError("option domain is invalid");
                c += "; Domain=" + r.domain
            }
            if (r.path) {
                if (!i.test(r.path)) throw new TypeError("option path is invalid");
                c += "; Path=" + r.path
            }
            if (r.expires) {
                if ("function" != typeof r.expires.toUTCString) throw new TypeError("option expires is invalid");
                c += "; Expires=" + r.expires.toUTCString()
            }
            r.httpOnly && (c += "; HttpOnly");
            r.secure && (c += "; Secure");
            if (r.sameSite) {
                var l = "string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite;
                switch (l) {
                    case !0:
                        c += "; SameSite=Strict";
                        break;
                    case "lax":
                        c += "; SameSite=Lax";
                        break;
                    case "strict":
                        c += "; SameSite=Strict";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid")
                }
            }
            return c
        };
        var r = decodeURIComponent,
            o = encodeURIComponent,
            a = /; */,
            i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

        function s(e, t) {
            try {
                return t(e)
            } catch (t) {
                return e
            }
        }
    },
    40: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.blobSupported = function() {
                try {
                    return !!new Blob
                } catch (e) {
                    return !1
                }
            }, t.isServer = function() {
                return !("undefined" != typeof window && window.document)
            };
            t.APP_ENV = void 0 !== e && null !== Object({
                NODE_ENV: "production"
            }).APP_ENV ? Object({
                NODE_ENV: "production"
            }).APP_ENV : "browser", t.NODE_ENV = void 0 !== e ? "production" : ""
        }).call(this, n(240))
    },
    41: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.extend = function(e, t) {
            return Object.keys(t).forEach(function(n) {
                Object.prototype.hasOwnProperty.call(t, n) && !Object.prototype.hasOwnProperty.call(e, n) && (e[n] = t[n])
            }), e
        }, t.getCurrentEnvironment = function(e) {
            var t = "PROD";
            if (!e) return t;
            for (var n = e.slice(0, e.search("justgiving.com")), r = 0; r < s.length; r++)
                if (n.indexOf(s[r][0]) > -1) {
                    t = s[r][1];
                    break
                } return t
        }, t.getBrowserInfo = function(e) {
            if (e) return {
                url: e.url,
                user_agent: e.user_agent,
                referer: e.referer,
                cookies: e.cookies
            };
            return {
                url: window.location.href || null,
                user_agent: navigator.userAgent || null,
                referer: document.referrer || location.referrer || "Direct",
                cookies: document.cookie,
                hostname: window.location.hostname || null
            }
        }, t.setValueOrEmptyString = function(e, t, n) {
            null != t && 0 !== t.length && e && (n[e] = t)
        }, t.queryStringToObject = function(e) {
            if (!e) return {};
            for (var t = {}, n = void 0, r = e.slice(e.indexOf("?") + 1).split("&"), o = 0; o < r.length; o += 1) n = r[o].split("="), t[n[0].toLowerCase()] = n[1];
            return t
        }, t.generateGUID = function() {
            for (var e = [], t = 0; t < 256; t++) e[t] = (t < 16 ? "0" : "") + t.toString(16);
            var n = 4294967295 * Math.random() | 0,
                r = 4294967295 * Math.random() | 0,
                o = 4294967295 * Math.random() | 0,
                a = 4294967295 * Math.random() | 0;
            return e[255 & n] + e[n >> 8 & 255] + e[n >> 16 & 255] + e[n >> 24 & 255] + "-" + e[255 & r] + e[r >> 8 & 255] + "-" + e[r >> 16 & 15 | 64] + e[r >> 24 & 255] + "-" + e[63 & o | 128] + e[o >> 8 & 255] + "-" + e[o >> 16 & 255] + e[o >> 24 & 255] + e[255 & a] + e[a >> 8 & 255] + e[a >> 16 & 255] + e[a >> 24 & 255]
        }, t.generateShortId = function(e, t) {
            var n = new Date;
            l = l || a.default.create([e, t, Math.random(), n.getTime()].join("|"));
            for (var r = "", o = 0; o < u; o++) r += c.charAt(Math.floor(l.random() * c.length));
            return r
        }, t.encodeBase64 = function(e) {
            return o.default.encode(e)
        }, t.parseJwt = function(e) {
            var t = e.split(".")[1].replace("-", "+").replace("_", "/");
            return JSON.parse(o.default.decode(t))
        }, t.createJGAnalyticsCookieString = function(e, t, n) {
            var r = e;
            return r.logged_in_guid = n || "00000000-0000-0000-0000-000000000000", r.logged_out_guid = t || "00000000-0000-0000-0000-000000000000", Object.keys(r).map(function(e) {
                return e + "=" + r[e]
            }).join("&")
        }, t.parseDomainNameFromHostName = function(e) {
            return e.split(".").reverse().splice(0, 2).reverse().join(".").toLowerCase()
        }, t.filterDataForDoNotTrack = function(e) {
            var t = r({}, e);
            return delete t.logged_in_guid, delete t.email, delete t.ab_logged_out_guid, delete t.km_id, delete t.km_email, t
        };
        var o = i(n(246)),
            a = i(n(244));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = [
            ["//identity.justgiving.com/", "PROD"],
            [".dev.", "DEV"],
            [".local.", "DEV"],
            ["v3-integration", "STAGING"],
            ["v3-rc.staging", "STAGING"],
            [".staging.", "STAGING"],
            ["v3-sandbox.", "SANDBOX"],
            [".sandbox.", "SANDBOX"]
        ];
        var c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            u = 10,
            l = void 0
    },
    56: function(e, t) {
        e.exports = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.4 5.63c.923-.553 1.662-1.476 2.03-2.492-.922.554-1.845.924-2.86 1.108a4.469 4.469 0 0 0-3.324-1.477 4.53 4.53 0 0 0-4.523 4.523c0 .37 0 .739.092 1.016C8.031 8.123 4.708 6.277 2.492 3.6c-.369.646-.646 1.477-.646 2.308 0 1.569.83 2.954 2.03 3.784-.738 0-1.476-.184-2.03-.554v.093c0 2.215 1.57 4.061 3.6 4.43-.37.093-.738.185-1.2.185-.277 0-.554 0-.83-.092.553 1.846 2.215 3.138 4.246 3.138-1.57 1.2-3.508 1.939-5.631 1.939-.37 0-.739 0-1.108-.093a12.921 12.921 0 0 0 6.923 2.031c8.4 0 12.923-6.923 12.923-12.923v-.554a17.97 17.97 0 0 0 2.216-2.4c-.831.37-1.662.646-2.585.739z"></path></svg>'
    },
    57: function(e, t) {
        e.exports = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.986 19.423c-5.12 0-9.336-4.185-9.336-9.336C.65 4.967 4.835.75 9.986.75c5.12 0 9.336 4.184 9.335 9.341-.104 5.182-4.251 9.33-9.335 9.33zm0-16.113a6.733 6.733 0 0 0-6.777 6.777 6.733 6.733 0 0 0 6.777 6.776 6.733 6.733 0 0 0 6.776-6.776c0-3.742-3.065-6.776-6.776-6.776V3.31z"></path><path d="M20.56 23.077l-5.64-5.64c-.302-.301-.302-.705 0-.905l1.41-1.41c.302-.302.705-.302.906 0l5.64 5.64c.301.301.301.704 0 .905l-1.41 1.41c-.202.2-.605.2-.906 0z"></path></svg>'
    },
    58: function(e, t) {
        e.exports = '<svg viewBox="0 1 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 20.967h-3.729v-5.836c0-1.392-.024-3.182-1.938-3.182-1.942 0-2.237 1.517-2.237 3.082v5.936H9.37V8.966h3.576v1.64h.05c.498-.943 1.715-1.938 3.53-1.938 3.776 0 4.474 2.485 4.474 5.717v6.582zM5.164 7.327a2.162 2.162 0 1 1 0-4.327 2.163 2.163 0 0 1 0 4.326zm-1.867 13.64H7.03V8.966H3.297v12.001z"></path></svg>'
    },
    59: function(e, t) {
        e.exports = '<svg viewBox="-2 -1 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.997 0C7.282 0 6.94.012 5.875.06 4.811.11 4.085.278 3.45.525a4.9 4.9 0 0 0-1.771 1.153 4.9 4.9 0 0 0-1.153 1.77C.278 4.085.109 4.812.06 5.876.011 6.941 0 7.282 0 9.997s.011 3.055.06 4.122c.049 1.064.218 1.79.465 2.426a4.9 4.9 0 0 0 1.153 1.77 4.9 4.9 0 0 0 1.77 1.154c.636.247 1.363.416 2.427.465 1.066.048 1.407.06 4.122.06s3.055-.012 4.122-.06c1.064-.049 1.79-.218 2.426-.465a4.9 4.9 0 0 0 1.77-1.153 4.9 4.9 0 0 0 1.154-1.77c.247-.637.416-1.363.465-2.427.048-1.067.06-1.407.06-4.122s-.012-3.056-.06-4.122c-.049-1.064-.218-1.79-.465-2.426a4.9 4.9 0 0 0-1.153-1.771 4.9 4.9 0 0 0-1.77-1.153C15.908.278 15.182.109 14.118.06 13.052.012 12.712 0 9.997 0m0 1.801c2.67 0 2.985.01 4.04.059.974.044 1.503.207 1.856.344.466.181.8.398 1.15.748.349.35.566.682.747 1.149.137.352.3.882.344 1.856.048 1.054.058 1.37.058 4.04s-.01 2.985-.058 4.04c-.044.974-.207 1.503-.344 1.856-.181.466-.398.8-.748 1.15-.35.349-.683.566-1.15.747-.352.137-.88.3-1.856.344-1.054.048-1.37.058-4.04.058-2.669 0-2.985-.01-4.039-.058-.974-.044-1.504-.207-1.856-.344a3.098 3.098 0 0 1-1.15-.748 3.097 3.097 0 0 1-.747-1.15c-.137-.352-.3-.88-.344-1.856-.049-1.054-.059-1.37-.059-4.04 0-2.668.01-2.985.059-4.039.044-.974.207-1.504.344-1.856.181-.467.398-.8.748-1.15.35-.35.682-.566 1.149-.747.352-.137.882-.3 1.856-.344 1.054-.049 1.37-.059 4.04-.059"></path><path d="M9.997 13.33a3.332 3.332 0 1 1 0-6.665 3.332 3.332 0 0 1 0 6.664m0-8.466a5.134 5.134 0 1 0 0 10.267 5.134 5.134 0 0 0 0-10.267M16.533 4.66a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0"></path></svg>'
    },
    60: function(e, t) {
        e.exports = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.846 23.077V13.015h3.416l.553-3.969h-3.877V6.554c0-1.108.277-1.939 1.939-1.939H18V1.108c-.37-.093-1.57-.185-3.046-.185-3.046 0-5.077 1.846-5.077 5.17v2.86H6.462v3.97h3.415v10.154h3.97z"></path></svg>'
    },
    61: function(e, t) {
        e.exports = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.523 3.692c2.585 0 4.615 2.031 4.615 4.523 0 1.477-.276 2.585-1.661 4.154L12 18.74l-7.477-6.37C3.138 10.8 2.862 9.692 2.862 8.215c0-2.584 2.03-4.523 4.615-4.523 2.308 0 4.246 1.754 4.523 3.97.37-2.216 2.215-3.97 4.523-3.97zm0-1.846c-1.754 0-3.323.739-4.523 1.939-1.2-1.2-2.77-1.939-4.523-1.939-3.6 0-6.554 2.862-6.554 6.462 0 2.123.646 3.6 2.123 5.446l.092.092.093.092 7.477 6.37 1.2 1.015 1.2-1.015 7.477-6.37.092-.092.092-.092c1.57-1.846 2.123-3.323 2.123-5.446.185-3.6-2.769-6.462-6.369-6.462z"></path></svg>'
    },
    62: function(e, t) {
        e.exports = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#CCC" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0"></path><path fill="#F1F1F1" d="M17.28 16.637c.95.594 1.717 1.344 2.215 2.194-.498-.85-1.265-1.6-2.214-2.194zm-4.968-1.433h-.025.025zm1.108.092a11.902 11.902 0 0 0-.155-.02l-.082-.009.082.01c.052.006.103.012.155.02zm-.645-.067l-.055-.004.055.004zm-.775-.03c-.638 0-1.3.062-1.965.183-2.465.449-4.532 1.75-5.53 3.448A9.935 9.935 0 0 0 12 22.232V15.2z"></path><path fill="#FFF" d="M17.28 16.637c-.24-.15-.49-.289-.745-.415a9.758 9.758 0 0 0-2.803-.88l-.066-.01a14.13 14.13 0 0 0-.401-.055l-.082-.01a11.61 11.61 0 0 0-.154-.016l-.08-.008-.174-.014-.055-.004c-.073-.005-.146-.01-.219-.013l-.096-.004-.093-.003H12.287a9.56 9.56 0 0 0-.287-.006v7.034a9.946 9.946 0 0 0 7.495-3.402c-.499-.85-1.265-1.6-2.215-2.194"></path><path fill="#F1F1F1" d="M12 14.118v-8.83a4.414 4.414 0 0 0 0 8.83"></path><path fill="#FFF" d="M16.414 9.703A4.414 4.414 0 0 0 12 5.288v8.83a4.414 4.414 0 0 0 4.414-4.415"></path></svg>'
    },
    63: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.logError = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = r({
                    koala_error: !0
                }, t);
            "undefined" != typeof window && window.GG && window.GG.Raygun && window.GG.Raygun.send(e, n)
        }
    },
    64: function(e, t, n) {
        "use strict";
        var r = {
                childContextTypes: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            },
            o = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
            },
            a = Object.defineProperty,
            i = Object.getOwnPropertyNames,
            s = Object.getOwnPropertySymbols,
            c = Object.getOwnPropertyDescriptor,
            u = Object.getPrototypeOf,
            l = u && u(Object);
        e.exports = function e(t, n, p) {
            if ("string" != typeof n) {
                if (l) {
                    var f = u(n);
                    f && f !== l && e(t, f, p)
                }
                var d = i(n);
                s && (d = d.concat(s(n)));
                for (var h = 0; h < d.length; ++h) {
                    var g = d[h];
                    if (!(r[g] || o[g] || p && p[g])) {
                        var m = c(n, g);
                        try {
                            a(t, g, m)
                        } catch (e) {}
                    }
                }
                return t
            }
            return t
        }
    },
    65: function(e, t, n) {
        ! function(e, t) {
            "use strict";
            var n, r = {
                    register: function(e) {
                        console.warn("Consumer used without a Provider")
                    },
                    unregister: function(e) {},
                    val: function(e) {}
                },
                o = window && window.t || (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    },
                    function(e, t) {
                        function r() {
                            this.constructor = e
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    });

            function a(e) {
                var t = e.children,
                    n = e.render;
                return t && t[0] || n
            }
            var i = 1073741823,
                s = function() {
                    return i
                },
                c = 0;
            e.createContext = function(e, n) {
                var u = "_preactContextProvider-" + c++;
                return {
                    Provider: function(e) {
                        function r(t) {
                            var r = e.call(this, t) || this;
                            return r.i = function(e, t) {
                                var n = [],
                                    r = e;
                                return {
                                    register: function(e) {
                                        n.push(e), e(r, 0)
                                    },
                                    unregister: function(e) {
                                        n = n.filter(function(t) {
                                            return t !== e
                                        })
                                    },
                                    val: function(e) {
                                        if (void 0 === e || e == r) return r;
                                        var o = t(r, e);
                                        return o = o |= 0, r = e, n.forEach(function(t) {
                                            return t(e, o)
                                        }), r
                                    }
                                }
                            }(t.value, n || s), r
                        }
                        return o(r, e), r.prototype.getChildContext = function() {
                            return (e = {})[u] = this.i, e;
                            var e
                        }, r.prototype.componentDidUpdate = function() {
                            this.i.val(this.props.value)
                        }, r.prototype.render = function() {
                            var e = this.props.children;
                            return e && e.length > 1 ? t.h("span", null, e) : e && e[0] || null
                        }, r
                    }(t.Component),
                    Consumer: function(t) {
                        function n(n, r) {
                            var o = t.call(this, n, r) || this;
                            return o.u = function(e, t) {
                                var n = o.props.unstable_observedBits,
                                    r = void 0 === n || null === n ? i : n;
                                0 != ((r |= 0) & t) && o.setState({
                                    value: e
                                })
                            }, o.state = {
                                value: o.o().val() || e
                            }, o
                        }
                        return o(n, t), n.prototype.componentDidMount = function() {
                            this.o().register(this.u)
                        }, n.prototype.shouldComponentUpdate = function(e, t) {
                            return this.state.value !== t.value || a(this.props) !== a(e)
                        }, n.prototype.componentWillUnmount = function() {
                            this.o().unregister(this.u)
                        }, n.prototype.componentDidUpdate = function(e, t, n) {
                            var o = n[u];
                            o !== this.context[u] && ((o || r).unregister(this.u), this.componentDidMount())
                        }, n.prototype.render = function() {
                            var t = this.props.render,
                                n = a(this.props);
                            if (t && t !== n && console.warn("Both children and a render function are defined. Children will be used"), "function" == typeof n) return n(this.state.value || e);
                            console.warn("Consumer is expecting a function as one and only child but didn't find any")
                        }, n.prototype.o = function() {
                            return this.context[u] || r
                        }, n
                    }(t.Component)
                }
            }, Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }(t, n(0))
    },
    66: function(e, t, n) {
        e.exports = n.p + "23199dae066931aeac7e9f944d644770.svg"
    },
    67: function(e, t, n) {
        e.exports = n.p + "3e7a4dc9d866fda15331414a9072da97.svg"
    },
    68: function(e, t, n) {
        e.exports = n.p + "89c84714fbed4f84779ddc7dcc3d61ca.svg"
    },
    69: function(e, t, n) {
        "use strict";
        var r, o = n(247),
            a = (r = o) && r.__esModule ? r : {
                default: r
            };
        e.exports = a.default
    },
    7: function(e, t, n) {
        var r, o, a;
        a = function() {
            return function() {
                return function(e) {
                    var t = [];
                    if (e[0].match(/^[^/:]+:\/*$/) && e.length > 1) {
                        var n = e.shift();
                        e[0] = n + e[0]
                    }
                    e[0].match(/^file:\/\/\//) ? e[0] = e[0].replace(/^([^/:]+):\/*/, "$1:///") : e[0] = e[0].replace(/^([^/:]+):\/*/, "$1://");
                    for (var r = 0; r < e.length; r++) {
                        var o = e[r];
                        if ("string" != typeof o) throw new TypeError("Url must be a string. Received " + o);
                        "" !== o && (r > 0 && (o = o.replace(/^[\/]+/, "")), o = r < e.length - 1 ? o.replace(/[\/]+$/, "") : o.replace(/[\/]+$/, "/"), t.push(o))
                    }
                    var a = t.join("/"),
                        i = (a = a.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
                    return a = i.shift() + (i.length > 0 ? "?" : "") + i.join("&")
                }("object" == typeof arguments[0] ? arguments[0] : [].slice.call(arguments))
            }
        }, void 0 !== e && e.exports ? e.exports = a() : void 0 === (o = "function" == typeof(r = a) ? r.call(t, n, t, e) : r) || (e.exports = o)
    },
    70: function(e, t, n) {
        "use strict";
        var r = n(249);

        function o(e) {
            this.message = e
        }
        o.prototype = new Error, o.prototype.name = "InvalidTokenError", e.exports = function(e, t) {
            if ("string" != typeof e) throw new o("Invalid token specified");
            var n = !0 === (t = t || {}).header ? 0 : 1;
            try {
                return JSON.parse(r(e.split(".")[n]))
            } catch (e) {
                throw new o("Invalid token specified: " + e.message)
            }
        }, e.exports.InvalidTokenError = o
    },
    71: function(e, t, n) {
        "use strict";
        n.r(t);
        var r, o = n(2),
            a = n(7),
            i = n.n(a);
        r = o.a.publicPath, /^[a-z][a-z0-9+.-]*:/.test(r) ? n.p = o.a.publicPath : n.p = i()(o.a.baseUri, o.a.publicPath);
        var s = n(28),
            c = n.n(s),
            u = n(4),
            l = n.n(u),
            p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var f, d = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(e) {
                var t = String(e).replace(/=+$/, "");
                if (t.length % 4 == 1) throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
                for (var n, r = 0, o = 0, a = 0, i = ""; n = t.charAt(a++); ~n && (o = r % 4 ? 64 * o + n : n, r++ % 4) ? i += String.fromCharCode(255 & o >> (-2 * r & 6)) : 0) n = p.indexOf(n);
                return i
            },
            h = n(70),
            g = n.n(h),
            m = function(e) {
                var t = new Date(0);
                return t.setUTCSeconds(e), t
            },
            v = function(e) {
                var t = g()(e),
                    n = t.aud,
                    r = t.unique_name,
                    o = t.family_name,
                    a = t.given_name,
                    i = t.sub,
                    s = t.iat,
                    c = t.nbf,
                    u = t.exp,
                    l = t.iss,
                    p = t.permissions,
                    f = t.picture,
                    d = t.role,
                    h = t.src,
                    v = t.ver;
                return {
                    audience: n,
                    email: r,
                    familyName: o,
                    givenName: a,
                    guid: i,
                    issued: m(s),
                    notBefore: m(c),
                    expires: m(u),
                    issuer: l,
                    permissions: p,
                    profilePictureUrl: f,
                    role: d,
                    source: h,
                    version: v
                }
            },
            y = (f = function(e, t) {
                return (f = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                function n() {
                    this.constructor = e
                }
                f(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            });
        var b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.timeout = !0, t
                }
                return y(t, e), t
            }(Error),
            _ = function() {
                return (_ = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };
        var j = function(e, t, n, r) {
                return new(n || (n = Promise))(function(o, a) {
                    function i(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        e.done ? o(e.value) : new n(function(t) {
                            t(e.value)
                        }).then(i, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                })
            },
            w = function(e, t) {
                var n, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, r = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1], o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2], i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            },
            k = function(e, t) {
                var n = void 0 === t ? {} : t,
                    r = n.timeoutInMs,
                    o = n.headers,
                    a = n.extraHeaders,
                    i = n.method,
                    s = n.body,
                    c = n.credentials;
                return j(void 0, void 0, void 0, function() {
                    var t, n, u;
                    return w(this, function(l) {
                        return t = {
                            method: i || "GET",
                            mode: "cors",
                            headers: new Headers(function(e, t) {
                                return _({}, e || {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                }, t)
                            }(o, a)),
                            body: s,
                            credentials: c || "include"
                        }, n = function() {
                            return fetch(e, t)
                        }, (u = void 0 === r ? 4e3 : r) ? [2, (p = n, f = {
                            timeoutInMs: u
                        }, Promise.race([p(), new Promise(function(e, t) {
                            setTimeout(function() {
                                t(new b("Request timeout after " + f.timeoutInMs + "ms"))
                            }, f.timeoutInMs)
                        })]))] : [2, n()];
                        var p, f
                    })
                })
            };
        var O = function(e) {
                var t = e.documentOrReq,
                    n = e.authCookieName,
                    r = e.activeGroupCookieName,
                    o = e.refreshAccessTokenUrl,
                    a = e.allowGuestLogin,
                    i = null,
                    s = null,
                    u = function(e) {
                        return "cookie" in e
                    },
                    p = function() {
                        if (u(t)) {
                            var e = t.cookie;
                            return l.a.parse(e)[n]
                        }
                        return (e = t.cookies)[n]
                    },
                    f = function() {
                        var e = p();
                        if (void 0 !== e) {
                            var t = c.a.parse("?" + e);
                            return {
                                accessToken: t.access_token,
                                refreshToken: t.refresh_token,
                                issued: t[".issued"],
                                expires: t[".expires"]
                            }
                        }
                    },
                    h = function() {
                        var e = (f() || {
                            accessToken: void 0
                        }).accessToken;
                        if (void 0 !== e) return v(e)
                    },
                    g = function() {
                        return (f() || {
                            refreshToken: void 0
                        }).refreshToken
                    },
                    m = function() {
                        return !!p() && (a || !O())
                    },
                    y = function() {
                        var e = (h() || {
                            expires: void 0
                        }).expires;
                        return void 0 === e || e < new Date
                    },
                    b = function(e) {
                        if ("undefined" == typeof window) {
                            var r = e.headers.get("set-cookie");
                            if (r && "cookies" in t) {
                                var o = l.a.parse(r),
                                    a = o[n];
                                t.cookies[n] = a, i = {
                                    name: n,
                                    value: a,
                                    options: {
                                        domain: ".justgiving.com",
                                        expires: new Date(o.expires),
                                        secure: !0,
                                        encode: String
                                    }
                                }
                            }
                        }
                    },
                    _ = function(e) {
                        var n = function() {
                            if (u(t)) {
                                var e = t.cookie;
                                return l.a.parse(e)[r]
                            }
                            return (e = t.cookies)[r]
                        }();
                        if (n) try {
                            var o = JSON.parse(d(n));
                            if ("object" == typeof o) return o[e]
                        } catch (e) {}
                    },
                    j = function(e) {
                        var t = h();
                        if (t) {
                            var n = t.permissions;
                            if (Boolean(n)) {
                                "string" == typeof n && (n = [n]);
                                var r = function(e) {
                                    return e.map(function(e) {
                                        var t = e.split(",");
                                        return {
                                            groupGuid: t[0],
                                            groupType: t[1],
                                            groupTypeExternalId: t[2],
                                            roles: t[3].split("::")
                                        }
                                    })
                                }(n).filter(function(t) {
                                    return t.groupType === e
                                });
                                if ("consumer" === e && r.length) return r[0];
                                if ("consumer" !== e && r.length) {
                                    var o = _(e);
                                    return r.find(function(e) {
                                        return e.groupGuid === o
                                    })
                                }
                            }
                        }
                    },
                    w = function(e) {
                        return Boolean(j(e))
                    },
                    O = function() {
                        var e = h();
                        return !!e && "guest" === e.role
                    };
                return {
                    getAuthCookie: p,
                    getAccessToken: h,
                    getParsedAuthCookie: f,
                    getRefreshToken: g,
                    isUserLoggedIn: m,
                    hasAccessTokenExpired: y,
                    setServerSideAuthCookie: b,
                    getServerSideAuthCookie: function() {
                        return i
                    },
                    refreshAccessTokenIfExpired: function(e) {
                        var r = void 0 === e ? {} : e,
                            a = r.grantType,
                            c = void 0 === a ? "refresh_token" : a,
                            l = r.clientId,
                            p = void 0 === l ? "jg.web" : l;
                        if (s) return s;
                        if (!m()) return (f = new Error("User is not logged in")).status = 401, Promise.reject(f);
                        if (!y()) return Promise.resolve({
                            status: 200,
                            message: "User already has valid access token"
                        });
                        var f, d = {
                            GrantType: c,
                            ClientId: p,
                            RefreshToken: g()
                        };
                        if (!d.RefreshToken) return (f = new Error("No RefreshToken present in the auth cookie")).status = 401, Promise.reject(f);
                        var h = {
                            method: "POST",
                            credentials: "include",
                            body: JSON.stringify(d)
                        };
                        return (s = k(o, h).then(function(e) {
                            if (!e.ok) throw 404 !== e.status && 422 !== e.status || (u(t) ? t.cookie = n + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=.justgiving.com;" : (t.cookies[n] = void 0, i = {
                                name: n,
                                value: "",
                                options: {
                                    domain: ".justgiving.com",
                                    expires: new Date(0),
                                    secure: !0,
                                    encode: String
                                }
                            })), new Error("refreshAccessToken response not ok: " + e.status + ", " + e.statusText);
                            return e
                        })).then(function(e) {
                            b(e), s = null
                        }).catch(function() {
                            s = null
                        }), s
                    },
                    getActivePermission: j,
                    hasGroup: w,
                    hasGroupRole: function(e, t) {
                        var n = j(e);
                        return Boolean(n && n.roles.indexOf(t) > -1)
                    },
                    isCharity: function() {
                        return w("charity")
                    },
                    isConsumer: function() {
                        return w("consumer")
                    },
                    isGuest: O
                }
            },
            C = function(e, t, n, r) {
                return "documentOrReq" in e ? O(e) : (console.warn("DEPRECATED: The createAuth overload accepting four arguments has been deprecated. Please pass an options object as the first argument instead."), O({
                    documentOrReq: e,
                    authCookieName: t,
                    activeGroupCookieName: n,
                    refreshAccessTokenUrl: r
                }))
            };
        var N = n(69),
            x = n.n(N),
            S = n(0),
            A = n(1),
            P = n.n(A),
            E = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return ""
            },
            I = function(e) {
                var t = e.isOpen,
                    n = e.className;
                return S.default.h("div", {
                    className: P()(E("animated-chevron"), "jg-chrome-animated-chevron", {
                        "jg-chrome-animated-chevron--open": t
                    }, "jg-position-relative", n)
                }, ["jg-chrome-animated-chevron__left-wing", "jg-chrome-animated-chevron__right-wing"].map(function(e) {
                    return S.default.h("div", {
                        className: P()("jg-position-absolute jg-w-full jg-h-full", e)
                    }, S.default.h("div", {
                        className: P()("jg-chrome-animated-chevron__wing", "jg-position-absolute jg-anim--transition-all", "jg-w-full jg-h-full", {
                            "jg-chrome-animated-chevron__wing--open": t
                        })
                    }, S.default.h("svg", {
                        viewBox: "0 0 12 12",
                        className: P()(E("animated-chevron__left-wing-svg"), "jg-display-b jg-position-absolute jg-w-full jg-h-full", "jg-overflow-visible")
                    }, S.default.h("path", {
                        d: "M 0 6 L 6 6"
                    }))))
                }))
            },
            T = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        activeSections: []
                    }, t.onSectionClick = function(e) {
                        t.setState(function(n) {
                            var r = n.activeSections;
                            return r.includes(e) ? {
                                activeSections: r.filter(function(t) {
                                    return t !== e
                                })
                            } : t.props.noToggle ? {
                                activeSections: r.concat([e])
                            } : {
                                activeSections: [e]
                            }
                        })
                    }, t.renderSection = function(e, n) {
                        var r = t.props.renderSection,
                            o = t.state.activeSections,
                            a = n;
                        return S.default.h(r, {
                            section: e,
                            sectionId: a,
                            isOpen: o.includes(a),
                            onClick: t.onSectionClick
                        })
                    }, t
                }
                return T(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.sections,
                        n = e.render;
                    return S.default.h(n, null, t.map(this.renderSection))
                }, t
            }(S.default.Component),
            M = function(e) {
                var t = e.children;
                return S.default.h("nav", null, S.default.h("ol", null, t))
            },
            U = function(e) {
                return S.default.h("li", null, S.default.h("a", {
                    className: P()(E("footer-accordion__section__item-link"), "jg-text--regular jg-display-b", "jg-color--empress jg-color--nero@hover jg-text-no-underline@hover", "jg-space-pvxs jg-space-phsm jg-space-phms@md"),
                    href: e.url
                }, e.label))
            },
            L = function(e) {
                var t = e.section,
                    n = e.sectionId,
                    r = e.isOpen,
                    o = e.onClick;
                return S.default.h("li", {
                    className: "jg-bdb jg-bd--gainsboro"
                }, S.default.h("button", {
                    onClick: function() {
                        return o(n)
                    },
                    className: P()("jg-background--transparent jg-h5 jg-space-mvn jg-text--pull-left jg-outline-n", "jg-position-relative jg-w-full jg-space-pvms", "jg-space-phsm jg-space-phms@md", "jg-cursor-pointer", "jg-hover-group")
                }, S.default.h("h5", {
                    className: P()(E("footer-accordion__section__title"), "jg-space-mvn jg-display-ib", "jg-color--nero jg-color--black@group-hover")
                }, t.title), S.default.h("div", {
                    className: "jg-position-absolute jg-pin-t jg-pin-r jg-h-full"
                }, S.default.h("div", {
                    className: "jg-align--middle"
                }, function(e) {
                    return S.default.h(I, {
                        isOpen: e,
                        className: P()("jg-icon--medium-small jg-space-mrsm jg-space-mrms@md", "jg-stroke--nobel jg-stroke--empress@group-hover")
                    })
                }(r)))), r && S.default.h("ol", {
                    className: P()(E("footer-accordion__section__item-list"), "jg-space-pbsm")
                }, t.links.map(U)))
            },
            B = function(e) {
                var t = e.footerMenu;
                return S.default.h(R, {
                    sections: t,
                    render: M,
                    renderSection: L
                })
            },
            G = n(62),
            D = n.n(G),
            H = n(61),
            V = n.n(H),
            z = n(60),
            F = n.n(z),
            K = n(59),
            J = n.n(K),
            W = n(58),
            X = n.n(W),
            q = n(57),
            Y = n.n(q),
            $ = n(56),
            Z = n.n($),
            Q = n(8),
            ee = n.n(Q),
            te = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
        var ne = {
                markup: ee.a.string.isRequired
            },
            re = function(e) {
                var t = e.markup,
                    n = function(e, t) {
                        var n = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }(e, ["markup"]);
                return "string" == typeof t && 0 === t.indexOf("data") ? S.default.createElement("img", te({
                    src: t,
                    alt: ""
                }, n)) : S.default.createElement("div", te({
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                }, n))
            };
        re.propTypes = ne, re.displayName = "Svg";
        var oe = re,
            ae = n(68),
            ie = n.n(ae),
            se = n(67),
            ce = n.n(se),
            ue = n(27),
            le = n.n(ue),
            pe = {
                facebook: F.a,
                twitter: Z.a,
                instagram: J.a,
                linkedIn: X.a
            },
            fe = function(e) {
                var t = e.logo,
                    n = e.secondary,
                    r = e.copyright,
                    o = e.social,
                    a = e.findUs;
                return S.default.h("div", {
                    className: "container"
                }, S.default.h("div", {
                    className: "row jg-space-phxs@md jg-space-pbsm@xl"
                }, S.default.h("div", {
                    className: P()("col-xs-12 col-xl-9", {
                        "jg-space-ptsm@xl": Boolean(o && !r)
                    })
                }, S.default.h("a", {
                    href: t.url,
                    className: E("footer-block__logo-link"),
                    target: t.newWindow ? "_blank" : void 0,
                    rel: t.newWindow ? "noopener noreferrer" : void 0
                }, S.default.h("span", {
                    className: "jg-sr-only"
                }, t.label), S.default.h("img", {
                    className: P()(E("footer-block__logo-img"), "jg-chrome-footer__logo-wrapper jg-display-b jg-space-mtxs", {
                        "jg-chrome-footer__logo-wrapper--jg": "jgDefault" === t.version || "jgGrey" === t.version,
                        "jg-chrome-footer__logo-wrapper--bbp2p": "bbP2P" === t.version
                    }),
                    src: function(e) {
                        switch (e) {
                            case "jgGrey":
                                return le.a;
                            case "jgDefault":
                                return ce.a;
                            case "bbP2P":
                                return ie.a
                        }
                    }(t.version),
                    alt: ""
                })), S.default.h("ul", {
                    className: "jg-space-mbsm jg-space-mbxs@md jg-space-mtms"
                }, n.map(function(e, t) {
                    return S.default.h("li", {
                        key: t,
                        className: "jg-display-b jg-display-ib@md jg-space-mrms@md"
                    }, S.default.h("a", {
                        className: P()(E("footer-block__secondary-link"), "jg-display-b jg-space-pvxs", "jg-text--medium jg-text-no-underline@hover", "jg-color--empress jg-color--nero@hover"),
                        href: e.url,
                        target: e.newWindow ? "_blank" : void 0,
                        rel: e.newWindow ? "noopener noreferrer" : void 0
                    }, e.label))
                })), r && S.default.h("p", {
                    className: P()(E("footer-block__copyright"), "jg-chrome-footer__copyright", "jg-color--nobel jg-font-weight-light jg-space-prmd jg-space-prn@lg")
                }, r)), S.default.h("div", {
                    className: "col-xs-12 col-xl-3"
                }, o && o.length > 0 && [S.default.h("div", {
                    className: P()(E("footer-block__social-label"), "jg-text--medium-light jg-space-mbsm jg-space-mtms jg-space-mtxs@xl")
                }, a), S.default.h("ul", {
                    className: E("footer-block__social-links")
                }, o.map(function(e, t) {
                    return S.default.h("li", {
                        key: t,
                        className: P()("jg-display-ib", "jg-br--circle jg-fill--white", "jg-background--nobel jg-background--empress@hover", "jg-space-mbsm", t === o.length - 1 ? "jg-space-mrn" : "jg-space-mrsm")
                    }, S.default.h("a", {
                        href: e.url,
                        className: P()(E("footer-block__social-link"), "jg-display-ib jg-space-psm")
                    }, S.default.h("span", {
                        className: "jg-sr-only"
                    }, e.label), S.default.h(oe, {
                        className: "jg-icon",
                        markup: pe[e.icon]
                    })))
                }))])))
            },
            de = function(e) {
                var t = e.footerMenu;
                return S.default.h("div", {
                    className: "container"
                }, S.default.h("div", {
                    className: "row jg-space-phxs@md"
                }, t.map(function(e, t) {
                    var n = "menu_" + t;
                    return S.default.h("div", {
                        key: n,
                        className: P()(E("footer-text__group"), "col-lg-6 col-xl-3 jg-space-mbsm", "jg-space-mtml jg-space-mtlg@xl")
                    }, S.default.h("h5", {
                        className: P()(E("footer-text__group__title"), "jg-space-mbmd")
                    }, e.title), S.default.h("ul", {
                        className: "jg-list--unstyled"
                    }, e.links.map(function(e, t) {
                        return S.default.h("li", {
                            key: t
                        }, S.default.h("a", {
                            className: P()(E("footer-text__group__link"), "jg-text--regular jg-display-b jg-space-pvxs", "jg-color--empress jg-color--nero@hover jg-text-no-underline@hover"),
                            href: e.url
                        }, e.label))
                    })))
                })))
            },
            he = function(e) {
                var t = e.content;
                return S.default.h("footer", {
                    className: P()(E("footer"), "jg-chrome-footer jg-bdt jg-bd--very-light-grey", function(e) {
                        switch (e) {
                            case "white":
                                return "jg-background--white";
                            case "grey":
                                return "jg-background--white-smoke"
                        }
                    }(t.backgroundColor)),
                    role: "contentinfo"
                }, t.siteMap && S.default.h("div", null, S.default.h("div", {
                    className: "jg-display-n@lg"
                }, S.default.h(B, {
                    footerMenu: t.siteMap
                })), S.default.h("div", {
                    className: "jg-display-n jg-display-b@lg"
                }, S.default.h(de, {
                    footerMenu: t.siteMap
                }))), S.default.h("div", {
                    className: "jg-space-mtmd jg-space-pbsm"
                }, S.default.h(fe, {
                    logo: t.logo,
                    copyright: t.copyright,
                    secondary: t.secondary,
                    findUs: t.findUs,
                    social: t.social
                })))
            },
            ge = function(e) {
                if (null === e) return e;
                var t = e;
                if (0 === e.indexOf("#") && (t = t.slice(1)), 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), 6 !== t.length) throw new Error("Invalid HEX color.");
                return .299 * parseInt(t.slice(0, 2), 16) + .587 * parseInt(t.slice(2, 4), 16) + .114 * parseInt(t.slice(4, 6), 16) > 186 ? "#000000" : e
            },
            me = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            ve = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.interval = null, t.setRef = function(e) {
                        t.imgRef = e
                    }, t.sendSize = function() {
                        t.imgRef && t.imgRef.complete && t.props.onSize({
                            width: t.imgRef.clientWidth,
                            height: t.imgRef.clientHeight
                        })
                    }, t
                }
                return me(t, e), t.prototype.componentDidMount = function() {
                    this.interval = setInterval(this.sendSize, 50), this.sendSize()
                }, t.prototype.componentWillUnmount = function() {
                    clearInterval(this.interval)
                }, t.prototype.render = function() {
                    var e = this.props.src;
                    return S.default.h("img", {
                        ref: this.setRef,
                        className: "jg-invisible jg-position-absolute",
                        style: "left: -10000px; top: -10000px; width: 1000px; max-width: none; max-height: none;",
                        src: e,
                        onLoad: this.sendSize
                    })
                }, t
            }(S.default.Component);

        function ye(e, t, n, r) {
            return r ? t + " " + n[r] : e
        }
        var be = n(66),
            _e = n.n(be),
            je = "JGCookieNotice",
            we = "accept",
            ke = 1e3;

        function Oe() {
            var e, t = new Date(Date.now() + 864e5 * ke),
                n = (e = document.location.hostname).endsWith(".justgiving.com") ? ".justgiving.com" : e.endsWith(".justgiving.service") ? ".justgiving.service" : null;
            null !== n && (document.cookie = l.a.serialize(je, we, {
                expires: t,
                domain: n,
                path: "/"
            }))
        }
        var Ce = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            Ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: "unknown"
                    }, t.handleCloseClick = function() {
                        Oe(), t.setState({
                            status: "justAccepted"
                        })
                    }, t
                }
                return Ce(t, e), t.prototype.componentDidMount = function() {
                    this.setState({
                        status: l.a.parse(document.cookie)[je] === we ? "previouslyAccepted" : "notAccepted"
                    })
                }, t.prototype.render = function() {
                    var e = this.state.status;
                    return ["unknown", "previouslyAccepted"].includes(e) ? null : S.default.h("div", {
                        className: P()(E("cookie-consent"), "jg-chrome-cookie-consent", "jg-position-fixed jg-pin-b", "jg-bdt jg-bd--very-light-grey jg-shadow-up-md", "jg-w-full jg-space-pvsm", "jg-background--white jg-text--center", "jg-text--medium-regular jg-color--empress", "jg-font-weight-light@md", "jg-anim-slide-up jg-anim-fade-in", {
                            "jg-anim-slide-up--active jg-anim-fade-in--active": "notAccepted" === e
                        })
                    }, S.default.h("div", {
                        className: "container jg-space-phn jg-space-phxs@md"
                    }, S.default.h("div", {
                        className: "jg-display-table@md jg-w-full"
                    }, S.default.h("div", {
                        className: P()("jg-space-phsm jg-text--pull-left", "jg-display-table-cell@md jg-w-3/4@md jg-w-5/6@xl")
                    }, S.default.h("div", {
                        className: "jg-text--center jg-display-ib@md"
                    }, S.default.h("div", {
                        className: "jg-chrome-cookie-consent__icon-wrapper"
                    }, S.default.h("img", {
                        src: _e.a,
                        className: P()("jg-chrome-cookie-consent__icon", "jg-space-mtxs jg-space-mbms", "jg-space-mvn@md jg-space-mrmd@md")
                    }))), S.default.h("span", {
                        className: P()("jg-chrome-cookie-consent__text-wrapper", "jg-display-b jg-space-mbms", "jg-display-ib@md jg-space-mbn@md jg-align--vertical-middle@md")
                    }, "Hello! We use cookies to give you the best possible experience on JustGiving. You can", " ", S.default.h("a", {
                        className: "jg-font-weight-light@md",
                        href: "https://www.justgiving.com/info/cookies",
                        target: "_blank"
                    }, "read more here"), ".")), S.default.h("div", {
                        className: "jg-space-phsm jg-display-table-cell@md jg-w-1/4@md jg-w-1/6@xl"
                    }, S.default.h("button", {
                        className: P()(E("cookie-consent__dismiss-button"), "jg-btn jg-btn--ghost jg-font-sizes--medium", "jg-align--vertical-middle@md jg-font-weight-light@md"),
                        onClick: this.handleCloseClick
                    }, "Accept")))))
                }, t
            }(S.Component);
        var xe = function(e) {
                var t = e.href,
                    n = e.src,
                    r = e.size,
                    o = e.autoConstrainSize,
                    a = void 0 === o || o,
                    i = e.wrapperClassName,
                    s = e.label,
                    c = r.width / r.height,
                    u = a ? function(e) {
                        var t = e.inputRange,
                            n = t[0],
                            r = t[1],
                            o = e.outputRange,
                            a = o[0],
                            i = o[1],
                            s = e.clip,
                            c = void 0 !== s && s;
                        return function(e) {
                            var t = (e - n) / (r - n) * (i - a) + a;
                            if (!c) return t;
                            var o = Math.max(a, i),
                                s = Math.min(a, i);
                            return Math.min(o, Math.max(s, t))
                        }
                    }({
                        inputRange: [1, 6],
                        outputRange: [43, 25],
                        clip: !0
                    })(c) : 60;
                return S.default.h(function(e) {
                    var n = e.children,
                        r = P()(E("header__logo"), "jg-display-ib jg-h-full", "jg-space-pvxs jg-space-phxs", "jg-space-mlxs jg-space-mlsm@md");
                    return t ? S.default.h("a", {
                        href: t,
                        className: P()(E("header__logo-link"), r)
                    }, S.default.h("span", {
                        className: "jg-sr-only"
                    }, s), n) : S.default.h("div", {
                        className: r
                    }, n)
                }, null, S.default.h("div", {
                    className: P()(E("header__logo-wrapper"), "jg-chrome-header__logo-wrapper jg-align--middle jg-position-relative", i),
                    style: {
                        width: u * c,
                        height: 0,
                        paddingBottom: 100 / c * 1.05 + "%"
                    }
                }, S.default.h("img", {
                    className: P()(E("header__logo-img"), "jg-position-absolute jg-display-b jg-w-full jg-h-full"),
                    src: n,
                    alt: ""
                })))
            },
            Se = n(65),
            Ae = Object(Se.createContext)(null),
            Pe = Ae.Consumer,
            Ee = Ae.Provider,
            Ie = function() {
                return (Ie = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };
        var Te = n(64),
            Re = n.n(Te),
            Me = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            Ue = function() {
                return (Ue = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            Le = function(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]])
                }
                return n
            };
        var Be = function(e) {
                var t = e.displayName || e.name,
                    n = function(t) {
                        function n() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.handleClickOutside = function(t) {
                                var n = e.__domNode;
                                n && n.contains(t.target) || !e.__wrappedInstance || "function" != typeof e.__wrappedInstance.handleClickOutside || e.__wrappedInstance.handleClickOutside(t)
                            }, e
                        }
                        return Me(n, t), n.prototype.componentDidMount = function() {
                            this.__domNode = this.__wrappedInstance && this.__wrappedInstance.base, document.addEventListener("click", this.handleClickOutside, !0)
                        }, n.prototype.componentWillUnmount = function() {
                            document.removeEventListener("click", this.handleClickOutside, !0)
                        }, n.prototype.render = function() {
                            var t = this,
                                n = this.props,
                                r = n.wrappedRef,
                                o = Le(n, ["wrappedRef"]);
                            return S.default.h(e, Ue({}, o, {
                                ref: function(e) {
                                    t.__wrappedInstance = e, r && r(e)
                                }
                            }))
                        }, n
                    }(S.default.Component);
                return n.displayName = "clickOutside(" + t + ")", Re()(n, e)
            },
            Ge = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            De = function(e) {
                return {
                    kind: "item",
                    content: e.content,
                    url: e.url,
                    wrapperClassName: e.wrapperClassName
                }
            },
            He = function(e) {
                return {
                    kind: "separator",
                    className: (void 0 === e ? {} : e).className
                }
            },
            Ve = function(e, t) {
                return "separator" === e.kind ? S.default.h("li", {
                    key: "separator_" + t,
                    className: P()(E("menu__item", "menu__item--separator"), "jg-chrome-dropdown-menu__separator", "jg-bdb jg-bd--gainsboro jg-space-mvsm jg-space-mvms@md", e.className)
                }) : S.default.h("li", {
                    key: "item_" + t,
                    className: P()(E("menu__item", "menu__item--item"), e.wrapperClassName)
                }, S.default.h("a", {
                    className: P()("jg-display-b", "jg-text--medium-regular jg-text-no-underline@hover", "jg-color--empress jg-color--nero@hover", "jg-space-pvxs jg-space-phsm", "jg-space-pvn@md jg-space-mvxs@md jg-space-phmd@md"),
                    href: e.url
                }, e.content))
            },
            ze = Be(function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isOpen: t.props.isOpen || !1
                    }, t.handleOpen = function() {
                        t.setState({
                            isOpen: !0
                        })
                    }, t.handleCollapse = function() {
                        t.setState({
                            isOpen: !1
                        })
                    }, t.handleClickOutside = function() {
                        t.handleCollapse()
                    }, t.renderMenuCaret = function() {
                        var e = t.props.menuCaretClassName,
                            n = t.state.isOpen;
                        return S.default.h("div", {
                            className: P()(E("menu__menu-caret"), "jg-display-b jg-position-absolute", "jg-chrome-dropdown-menu__caret", "jg-anim-fade-in jg-anim-slide-up", {
                                "jg-anim-fade-in--active jg-anim-slide-up--active": n
                            }, e)
                        }, S.default.h("svg", {
                            viewBox: "0 0 18 9",
                            className: P()("jg-chrome-dropdown-menu__caret-stroke", "jg-display-b jg-position-absolute", "jg-color--very-light-grey")
                        }, S.default.h("path", {
                            d: "M 0 9 L 9 1 L 18 9"
                        })), S.default.h("svg", {
                            viewBox: "0 0 20 9",
                            className: P()("jg-chrome-dropdown-menu__caret-fill", "jg-display-b jg-position-absolute", "jg-color--very-light-grey")
                        }, S.default.h("path", {
                            d: "M 0 10 L 10 1 L 20 10"
                        })))
                    }, t.onButtonClick = function(e) {
                        var n = t.props.onButtonClick;
                        n && n(e), e.defaultPrevented || (t.state.isOpen ? t.handleCollapse() : t.handleOpen())
                    }, t
                }
                return Ge(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.contents,
                        n = void 0 === t ? [] : t,
                        r = e.button,
                        o = e.className,
                        a = e.menuClassName,
                        i = this.state.isOpen,
                        s = P()(E("menu__button"), "jg-chrome-dropdown-menu__button", "jg-bdn jg-background--transparent jg-cursor-pointer", "jg-display-ib jg-position-relative jg-h-full jg-space-pvn jg-space-phxs", "jg-text--medium-regular", "jg-hover-group", {
                            "jg-color--empress jg-color--nero@hover": !i,
                            "jg-color--current": i
                        }),
                        c = P()(E("menu__list"), "jg-chrome-dropdown-menu__content", "jg-position-absolute jg-w-full", "jg-space-pvsm jg-space-mtsm@md", "jg-bd--very-light-grey jg-bdv jg-bdh@md jg-br@md", "jg-background--white jg-shadow-md", "jg-anim-fade-in jg-anim-slide-up", {
                            "jg-anim-fade-in--active jg-anim-slide-up--active": i
                        }, a),
                        u = S.default.h(I, {
                            isOpen: i,
                            className: P()(E("menu__button-caret"), "jg-chrome-dropdown-menu__button-caret", "jg-display-ib jg-align--vertical-middle", "jg-icon--medium-small@lg", {
                                "jg-stroke--nobel jg-stroke--empress@group-hover": !i,
                                "jg-stroke--current": i
                            })
                        });
                    return S.default.h("div", {
                        className: P()(E("menu"), "jg-chrome-dropdown-menu", "jg-text--pull-left jg-position-relative@md", o)
                    }, S.default.h("button", {
                        className: s,
                        onClick: this.onButtonClick
                    }, "string" == typeof r && [S.default.h("span", {
                        className: "jg-display-ib jg-align--vertical-center"
                    }, r), u], "function" == typeof r && r({
                        caret: u,
                        isOpen: i
                    }), this.renderMenuCaret()), S.default.h("ul", {
                        className: c
                    }, n.map(Ve)))
                }, t
            }(S.default.Component));
        ze.displayName = "Menu";
        var Fe, Ke, Je, We = ze,
            Xe = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            qe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return Xe(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.content,
                        n = e.auth,
                        r = e.location;
                    if (!t.menu) return null;
                    if (n && n.isUserLoggedIn() && (!t.featuredItem || !t.featuredItem.item) && 0 === t.menu.items.length) return null;
                    var o = (t.featuredItem && t.featuredItem.item ? [De({
                            url: t.featuredItem.item.url,
                            content: t.featuredItem.item.label,
                            wrapperClassName: P()(E("header-menu__featured-item-item"), "jg-display-n@lg")
                        })].concat(t.menu.items.length > 0 ? [He({
                            className: P()(E("header-menu__featured-item-separator"), "jg-display-n@lg")
                        })] : []) : []).concat(t.menu.items.map(function(e) {
                            return "SEPARATOR" === e ? He({
                                className: E("header-menu__item-separator")
                            }) : De({
                                url: e.url,
                                content: e.label,
                                wrapperClassName: E("header-menu__item-item")
                            })
                        })),
                        a = t.user ? [t.user.loggedOut.login, t.user.loggedOut.signUp].map(function(e) {
                            return De({
                                content: e.label,
                                url: i()(e.url, r ? "?returnUrl=" + encodeURIComponent(r) : ""),
                                wrapperClassName: P()(E("header-menu__logged-out-item"), "jg-display-n@md")
                            })
                        }) : [],
                        s = o.length > 0 && "separator" !== o[o.length - 1].kind ? [He({
                            className: P()(E("header-menu__logged-out-separator"), "jg-display-n@md")
                        })] : [],
                        c = n && !n.isUserLoggedIn() ? o.concat(s, a) : o;
                    return S.default.h(We, {
                        className: P()(E("header-menu"), "jg-h-full jg-align--top", "jg-space-mlxs@md", ye("jg-display-ib", "jg-display-ib", {
                            md: "jg-display-n@md"
                        }, t.menu.maxBreakpoint)),
                        menuClassName: "jg-whitespace-no-wrap",
                        menuCaretClassName: P()("jg-pin-r jg-space-mrsm", "jg-pin-auto@md jg-chrome-header__menu-caret-offset@lg jg-space-mrxs@lg"),
                        button: t.menu.label,
                        contents: c
                    })
                }, t
            }(S.default.Component),
            Ye = (Ke = Fe = qe, (Je = function(e) {
                return S.default.h(Pe, {
                    render: function(t) {
                        return S.default.h(Ke, Ie({}, e, {
                            location: t
                        }))
                    }
                })
            }).displayName = "withLocation(" + (Fe.displayName || Fe.name) + ")", Je),
            $e = n(21),
            Ze = n.n($e),
            Qe = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            et = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleShowRecaptureModal = function() {
                        var e = t.props,
                            n = e.handleShowModal,
                            r = e.closeBanner,
                            o = e.analytics;
                        n(!0), r(), o && o.track({
                            page_type: "navigation header",
                            event: "link click",
                            subtype: "hyperlink",
                            event_value: "opt in",
                            page_section: "gdpr recapture preference > preference banner"
                        })
                    }, t.onCloseBannerClick = function() {
                        (0, t.props.closeBanner)()
                    }, t
                }
                return Qe(t, e), t.prototype.render = function() {
                    var e = this.props.showBanner;
                    return S.default.h("div", {
                        className: P()(E("recapture-banner"), "recapture-banner", e ? "banner-shadow" : ""),
                        style: {
                            "max-height": e ? "200px" : "0"
                        }
                    }, S.default.h("div", {
                        className: "recapture-banner-wrapper jg-position-relative container"
                    }, S.default.h("span", {
                        className: "mail-img"
                    }), S.default.h("p", null, "Your friends are fundraising. Don't miss out,", S.default.h("a", {
                        onClick: this.handleShowRecaptureModal
                    }, " opt in.")), S.default.h("a", {
                        className: "recapture-banner__close-statement-platform jg-position-absolute",
                        onClick: this.onCloseBannerClick
                    })))
                }, t
            }(S.default.Component);
        et.displayName = "Banner";
        var tt = et,
            nt = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            rt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        updateRecaptureSuccess: !1
                    }, t.handleOptin = function() {
                        (0, t.props.handleOptin)()
                    }, t
                }
                return nt(t, e), t.prototype.render = function() {
                    var e = this.props,
                        t = e.recaptureConsents,
                        n = e.disableConfrimButton,
                        r = e.modalForHomepage;
                    return S.default.h("div", {
                        className: "jg-modal__content"
                    }, S.default.h("div", null, S.default.h("span", {
                        className: "jg-text--center"
                    }, S.default.h("div", {
                        className: "mailbox"
                    }, S.default.h("span", {
                        className: "flag"
                    })), S.default.h("h1", {
                        className: "jg-text--center"
                    }, r ? "Be the first to know" : "Let's not lose touch!")), S.default.h("p", {
                        className: "jg-text--center"
                    }, S.default.h("span", null, t.text)), S.default.h("button", {
                        className: "jg-btn",
                        onClick: this.handleOptin,
                        disabled: n
                    }, r ? "Opt in" : "Confirm")), S.default.h("p", {
                        className: "jg-text--center"
                    }, "By clicking continue you agree to our", " ", S.default.h("a", {
                        target: "_blank",
                        href: "https://www.justgiving.com/info/privacy"
                    }, "Privacy policy"), " ", "and", " ", S.default.h("a", {
                        target: "_blank",
                        href: "https://www.justgiving.com/info/terms-of-service"
                    }, "Terms of Service")))
                }, t
            }(S.Component);
        rt.displayName = "RecaptureModalContent";
        var ot = rt,
            at = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            it = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        componentLoaded: !1
                    }, t.handleCloseModal = function() {
                        var e = t.props,
                            n = e.handleCloseModal,
                            r = e.analytics;
                        n(), r && r.track({
                            page_type: "navigation header",
                            event: "link click",
                            subtype: "button",
                            event_value: "got it",
                            page_section: "gdpr recapture preference > opted in"
                        })
                    }, t.handlePreferencesCenterClick = function() {
                        var e = t.props.analytics;
                        e && e.track({
                            page_type: "navigation header",
                            event: "link click",
                            subtype: "button",
                            event_value: "preferences centre",
                            page_section: "gdpr recapture preference > opted in"
                        })
                    }, t
                }
                return at(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    setTimeout(function() {
                        e.setState({
                            componentLoaded: !0
                        })
                    }, 0)
                }, t.prototype.render = function() {
                    var e = this.state.componentLoaded,
                        t = this.props.modalForHomepage;
                    return S.default.h("div", {
                        className: "jg-modal__content"
                    }, S.default.h("div", null, S.default.h("span", {
                        className: "jg-text--center"
                    }, S.default.h("div", {
                        className: "mailbox " + (e ? "loaded" : "")
                    }, S.default.h("span", {
                        className: "flag"
                    }), S.default.h("span", {
                        className: "mail-img",
                        id: "mail-img"
                    })), S.default.h("h1", null, t ? "Yay! You're in" : "Great to have you!")), S.default.h("p", {
                        className: "jg-text--center"
                    }, t ? S.default.h("span", null, "You can change what emails you get anytime in your", " ", S.default.h("a", {
                        href: "https://www.justgiving.com/user-account/notifications"
                    }, "preferences center")) : S.default.h("span", null, "You can change your", " ", S.default.h("a", {
                        href: "https://www.justgiving.com/user-account/notifications"
                    }, "notification preferences"), " ", "in your account at any time.")), S.default.h("button", {
                        className: "jg-btn jg-btn--ghost",
                        onClick: this.handleCloseModal
                    }, "Got it")))
                }, t
            }(S.Component);
        it.displayName = "RecaptureModalConfirmContent";
        var st = it,
            ct = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            ut = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleOptin = function() {
                        var e = t.props,
                            n = e.handleOptin,
                            r = e.analytics;
                        n(), r && r.track({
                            page_type: "navigation header",
                            event: "link click",
                            subtype: "button",
                            event_value: "opt in",
                            page_section: "gdpr recapture preference"
                        })
                    }, t.handleCloseModal = function() {
                        var e = t.props,
                            n = e.handleShowModal,
                            r = e.analytics,
                            o = e.showRecaptureConfirm;
                        n(!1), r && r.track({
                            page_type: "navigation header",
                            event: "link click",
                            subtype: "button",
                            event_value: "x",
                            page_section: o ? "gdpr recapture preference > opted in" : "gdpr recapture preference"
                        })
                    }, t
                }
                return ct(t, e), t.prototype.componentDidUpdate = function() {
                    var e = this.props,
                        t = e.modalForHomepage,
                        n = e.showModal;
                    document.body.style.overflow = !t && n ? "hidden" : "visible"
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.recaptureConsents,
                        n = e.updateRecaptureLoading,
                        r = e.showRecaptureConfirm,
                        o = e.showModal,
                        a = e.modalForHomepage,
                        i = e.analytics;
                    return o ? S.default.h("div", {
                        className: P()("modal-overlay", "recapture-modal", "jg-color--nero", {
                            "thank-you-page-modal": !a
                        })
                    }, S.default.h("div", {
                        className: "modal-content recapture-modal-content"
                    }, S.default.h("div", {
                        className: "jg-modal"
                    }, S.default.h("a", {
                        className: "close-recapture-modal",
                        onClick: this.handleCloseModal
                    }), r ? S.default.h(st, {
                        analytics: i,
                        handleCloseModal: this.handleCloseModal,
                        modalForHomepage: a
                    }) : S.default.h(ot, {
                        handleOptin: this.handleOptin,
                        recaptureConsents: t,
                        disableConfrimButton: n,
                        modalForHomepage: a
                    })))) : null
                }, t
            }(S.Component);
        ut.displayName = "RecaptureModal";
        var lt = ut;

        function pt(e) {
            var t = e.hasToRecapture,
                n = e.storkRecommendation,
                r = e.consent,
                a = o.a.recaptureCookieName,
                i = o.a.cookieExpireTimeInDays,
                s = new Date;
            s.setTime(s.getTime() + 24 * i * 60 * 60 * 1e3), document.cookie = l.a.serialize(a, JSON.stringify({
                hasToRecapture: t,
                storkRecommendation: n,
                consent: r
            }), {
                path: "/",
                expires: s,
                domain: ".justgiving.com"
            })
        }
        var ft = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            dt = function(e, t, n, r) {
                return new(n || (n = Promise))(function(o, a) {
                    function i(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        e.done ? o(e.value) : new n(function(t) {
                            t(e.value)
                        }).then(i, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                })
            },
            ht = function(e, t) {
                var n, r, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, r = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            i.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && i.label < o[1]) {
                                            i.label = o[1], o = a;
                                            break
                                        }
                                        if (o && i.label < o[2]) {
                                            i.label = o[2], i.ops.push(a);
                                            break
                                        }
                                        o[2] && i.ops.pop(), i.trys.pop();
                                        continue
                                }
                                a = t.call(e, i)
                            } catch (e) {
                                a = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            },
            gt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showBanner: !1,
                        updateRecaptureLoading: !1,
                        showRecaptureConfirm: !1,
                        recaptureConsents: {
                            text: "",
                            id: 0
                        },
                        storkRecommendation: {
                            storkResponseGuid: ""
                        },
                        collectionLocationId: null,
                        modalForHomepage: !0,
                        refreshRetries: 0
                    }, t.hideRecapture = function() {
                        var e = t.props.handleShowPip;
                        pt({
                            hasToRecapture: !1
                        }), t.setState({
                            showBanner: !1
                        }), e(!1)
                    }, t.handleOptin = function() {
                        var e = t.props.analytics;
                        t.updateRecaptureConsents().then(function(n) {
                            n.ok ? (t.setState({
                                updateRecaptureLoading: !1,
                                showRecaptureConfirm: !0
                            }), e && e.track({
                                page_type: "navigation header",
                                event: "page view",
                                subtype: "gdpr recapture preference",
                                event_value: "opted in",
                                page_section: "gdpr recapture preference"
                            })) : t.setState({
                                updateRecaptureLoading: !1,
                                showRecaptureConfirm: !1
                            })
                        }).catch(function() {
                            t.setState({
                                updateRecaptureLoading: !1,
                                showRecaptureConfirm: !1
                            })
                        })
                    }, t
                }
                return ft(t, e), t.prototype.componentDidMount = function() {
                    var e, t, n = this.props,
                        r = n.auth,
                        a = n.handleShowPip,
                        i = o.a.recaptureCookieName,
                        s = o.a.recaptureDisplayLocations,
                        c = o.a.isLocal,
                        u = JSON.parse(l.a.parse(document.cookie)[i] || "{}"),
                        p = window.location.pathname,
                        f = !1;
                    p === s.thankYouPage.path ? (e = s.thankYouPage.locationId, t = !1) : (e = s.homePage.locationId, t = !0), this.setState({
                        collectionLocationId: e,
                        modalForHomepage: t
                    }), f = Object.keys(s).some(function(e) {
                        return p === s[e].path
                    }), c && (f = !0), f && r && r.isUserLoggedIn() && (!Object.keys(u).length || u && u.hasToRecapture) && (u.hasToRecapture ? (a("pip" === u.storkRecommendation.recommendation), this.setState({
                        showBanner: "pip" !== u.storkRecommendation.recommendation,
                        recaptureConsents: {
                            id: u.consent.id,
                            text: u.consent.text
                        },
                        storkRecommendation: {
                            storkResponseGuid: u.storkRecommendation.storkResponseGuid,
                            recommendation: u.storkRecommendation.recommendation
                        }
                    })) : this.getRecaptureConsents())
                }, t.prototype.getStorkRecommendation = function() {
                    return dt(this, void 0, void 0, function() {
                        var e, t, n, r, a, i, s, c;
                        return ht(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return e = o.a.storkBaseUrl, t = o.a.storkGetResourcePath, n = o.a.jgAnalyticsCookieName, r = l.a.parse(document.cookie)[n], a = {}, r.split("&").forEach(function(e) {
                                        var t = e.split("=");
                                        a[t[0].replace(/(\_\w)/g, function(e) {
                                            return e[1].toUpperCase()
                                        })] = t[1]
                                    }), i = JSON.stringify(a), s = e + "/" + t, [4, Ze()(s, {
                                        method: "POST",
                                        credentials: "omit",
                                        body: i
                                    })];
                                case 1:
                                    return (c = u.sent()).ok ? [4, c.json()] : [3, 3];
                                case 2:
                                    return [2, u.sent()];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.getRecaptureConsents = function() {
                    return dt(this, void 0, void 0, function() {
                        var e, t, n, r, a, i, s, c, u, l, p, f, d, h, g, m, v, y, b, _, j, w = this;
                        return ht(this, function(k) {
                            switch (k.label) {
                                case 0:
                                    return e = this.props, t = e.auth, n = e.handleShowPip, r = e.analytics, a = this.state, i = a.collectionLocationId, s = a.refreshRetries, c = o.a.locale, u = o.a.preferencesServiceBaseUrl, l = o.a.recaptureConsentPath, p = o.a.maxRetries, f = t && t.getParsedAuthCookie && t.getParsedAuthCookie(), d = t && t.getAccessToken(), h = f && f.accessToken, (g = d && d.guid || null) ? (m = u + "/" + l + "/" + g + "/" + i + "/" + c, t ? [4, t.refreshAccessTokenIfExpired().catch(function() {
                                        s < p && w.getRecaptureConsents(), w.setState({
                                            refreshRetries: s + 1
                                        })
                                    })] : [3, 2]) : [2];
                                case 1:
                                    k.sent(), k.label = 2;
                                case 2:
                                    return this.setState({
                                        refreshRetries: 0
                                    }), [4, Ze()(m, {
                                        method: "GET",
                                        credentials: "omit",
                                        headers: {
                                            Authorization: "Bearer " + h
                                        }
                                    })];
                                case 3:
                                    return (v = k.sent()).ok ? [4, v.json()] : [3, 7];
                                case 4:
                                    return y = k.sent(), !(b = y && y[0]) || b.hasToRecaptureConsent ? [3, 5] : (pt({
                                        hasToRecapture: !1
                                    }), [3, 7]);
                                case 5:
                                    return [4, this.getStorkRecommendation()];
                                case 6:
                                    _ = k.sent(), this.setState({
                                        showBanner: "pip" !== _.recommendation,
                                        recaptureConsents: b || {},
                                        storkRecommendation: _
                                    }), pt({
                                        hasToRecapture: !0,
                                        storkRecommendation: _,
                                        consent: b
                                    }), n("pip" === _.recommendation), j = {}, j = "pip" !== _.recommendation ? {
                                        page_type: "navigation header",
                                        event: "impression",
                                        subtype: "banner",
                                        event_value: "preference banner",
                                        page_section: "gdpr recapture preference"
                                    } : {
                                        page_type: "navigation header",
                                        event: "impression",
                                        subtype: "badge notification",
                                        event_value: "preference badge notification",
                                        page_section: "gdpr recapture preference"
                                    }, r && r.track(j), k.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.updateRecaptureConsents = function() {
                    return dt(this, void 0, void 0, function() {
                        var e, t, n, r, a, i, s, c, u, l, p, f, d, h, g, m, v = this;
                        return ht(this, function(y) {
                            switch (y.label) {
                                case 0:
                                    return e = o.a.preferencesServiceBaseUrl, t = o.a.maxRetries, n = this.state, r = n.recaptureConsents, a = r.id, i = r.text, s = n.collectionLocationId, c = n.refreshRetries, u = this.props.auth, l = u && u.getParsedAuthCookie && u.getParsedAuthCookie(), p = u && u.getAccessToken(), f = l && l.accessToken, d = p && p.guid || null, h = JSON.stringify({
                                        CollectionLocationId: s,
                                        Consents: [{
                                            consentGiven: !0,
                                            ConsentStatementId: a,
                                            ConsentStatementText: i
                                        }]
                                    }), g = e + "/api/v1/users/" + d + "/consents", u ? [4, u.refreshAccessTokenIfExpired().catch(function() {
                                        return c < t ? (v.setState({
                                            refreshRetries: c + 1
                                        }), v.updateRecaptureConsents()) : Promise.reject("error")
                                    })] : [3, 2];
                                case 1:
                                    y.sent(), y.label = 2;
                                case 2:
                                    return this.setState({
                                        refreshRetries: 0
                                    }), [4, Ze()(g, {
                                        method: "PUT",
                                        credentials: "omit",
                                        headers: {
                                            Authorization: "Bearer " + f,
                                            "Content-Type": "application/json"
                                        },
                                        body: h
                                    })];
                                case 3:
                                    return (m = y.sent()).ok && this.updateStorkRecommendation(), [2, m]
                            }
                        })
                    })
                }, t.prototype.updateStorkRecommendation = function() {
                    return dt(this, void 0, void 0, function() {
                        var e, t, n, r, a, i;
                        return ht(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return e = this.state.storkRecommendation.storkResponseGuid, t = this.props.handleShowModal, n = o.a.storkBaseUrl, r = o.a.storkUpdateResourcePath, a = JSON.stringify({
                                        storkResponseGuid: e,
                                        rewardNames: ["opt-in"]
                                    }), i = n + "/" + r, [4, Ze()(i, {
                                        method: "POST",
                                        credentials: "omit",
                                        body: a
                                    })];
                                case 1:
                                    return s.sent().ok && setTimeout(function() {
                                        t(!1)
                                    }, 5e3), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = this.state,
                        t = e.showBanner,
                        n = e.updateRecaptureLoading,
                        r = e.showRecaptureConfirm,
                        o = e.recaptureConsents,
                        a = e.modalForHomepage,
                        i = this.props,
                        s = i.showModal,
                        c = i.handleShowModal,
                        u = i.analytics;
                    return S.default.h("div", null, S.default.h(tt, {
                        analytics: u,
                        showBanner: t,
                        closeBanner: this.hideRecapture,
                        handleShowModal: c
                    }), S.default.h(lt, {
                        analytics: u,
                        recaptureConsents: o,
                        updateRecaptureLoading: n,
                        showRecaptureConfirm: r,
                        handleOptin: this.handleOptin,
                        handleShowModal: c,
                        showModal: s,
                        modalForHomepage: !!a
                    }))
                }, t
            }(S.default.Component);
        gt.displayName = "RecaptureNotice";
        var mt = gt,
            vt = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            yt = Be(function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        searchInput: ""
                    }, t.setInputRef = function(e) {
                        t.inputRef = e
                    }, t.handleInputChange = function(e) {
                        t.setState({
                            searchInput: e.target.value
                        })
                    }, t.handleSubmit = function(e) {
                        e.preventDefault(), (0, t.props.onSubmit)(t.state.searchInput)
                    }, t.handleClickOutside = function(e) {
                        var n = t.props.onClickOutside;
                        n && n(e)
                    }, t
                }
                return vt(t, e), t.prototype.focusInput = function() {
                    this.inputRef && this.inputRef.focus()
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.content,
                        n = e.className,
                        r = this.state.searchInput;
                    return S.default.h("div", {
                        className: P()("jg-chrome-search", "jg-background--white jg-bdb jg-bd--very-light-grey", "jg-space-pvsm@md", n)
                    }, S.default.h("div", {
                        className: "container jg-space-phsm@md"
                    }, S.default.h("div", {
                        className: "row row--no-gutter"
                    }, S.default.h("div", {
                        className: P()("col-xs-12", "jg-space-phms@md", "col-lg-8 offset-lg-2 jg-space-phn@lg", "col-xl-6 offset-xl-3")
                    }, S.default.h("form", {
                        name: "jg-chrome--search-form",
                        onSubmit: this.handleSubmit
                    }, S.default.h("input", {
                        ref: this.setInputRef,
                        className: P()(E("search-box__input"), "jg-chrome-search__input jg-display-ib jg-align--top", "jg-form-control jg-font-size--small jg-font-size--large@md", "jg-space-pln@md jg-bdn"),
                        type: "search",
                        id: "chromeSearch",
                        name: "chromeSearch",
                        autocomplete: "off",
                        placeholder: t.placeholder,
                        value: r,
                        onChange: this.handleInputChange
                    }), S.default.h("input", {
                        type: "submit",
                        className: P()(E("search-box__submit"), "jg-chrome-search__button jg-display-ib jg-align--top", "jg-btn jg-br--0 jg-br@md"),
                        value: t.submitLabel
                    }))))))
                }, t
            }(S.Component));
        yt.displayName = "SearchBox";
        var bt = yt,
            _t = function(e) {
                var t = e.onClick,
                    n = e.label,
                    r = e.isOpen,
                    o = e.className;
                return S.default.h("button", {
                    className: P()(E("search-icon"), "jg-chrome-search-icon", "jg-bdn jg-background--transparent jg-cursor-pointer", "jg-space-phxs jg-space-pvn jg-position-relative", "jg-hover-group", o),
                    onClick: t
                }, S.default.h("span", {
                    className: P()(E("search-icon__label"), "jg-align--vertical-middle jg-text--medium-regular", "jg-space-mrsm jg-display-n jg-display-ib@xl", {
                        "jg-color--empress jg-color--nero@group-hover": !r,
                        "jg-color--dark-orchid": r
                    })
                }, n), S.default.h("span", {
                    className: P()(E("search-icon__icon-wrapper"), "jg-chrome-search-icon__svg jg-display-ib jg-align--vertical-middle", "jg-anim--transition-all", {
                        "jg-chrome-search-icon__svg--open": r
                    })
                }, S.default.h(oe, {
                    className: P()(E("search-icon__icon"), "jg-svg--fit-svg-to-parent jg-h-full", {
                        "jg-color--nobel jg-color--empress@group-hover": !r,
                        "jg-color--dark-orchid": r
                    }),
                    markup: Y.a
                })))
            };
        _t.defaultProps = {
            onClick: function() {
                return null
            }
        };
        var jt = _t,
            wt = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();
        var kt = function(e) {
            function t() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.handleError = function() {
                    e.setState({
                        error: !0
                    })
                }, e.state = {
                    error: !1
                }, e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, S["Component"]), wt(t, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.fallback,
                        n = e.alt,
                        r = e.src,
                        o = e.className,
                        a = this.state.error,
                        i = "function" == typeof t ? t() : t;
                    return !a && r ? S.default.createElement("img", {
                        onError: this.handleError,
                        alt: n,
                        src: r,
                        className: o
                    }) : i
                }
            }]), t
        }();
        kt.propTypes = {
            alt: ee.a.string.isRequired,
            src: ee.a.string,
            fallback: ee.a.oneOfType([ee.a.func, ee.a.object]).isRequired
        }, kt.defaultProps = {
            src: ""
        }, kt.displayName = "ImageWithFallback";
        var Ot = kt,
            Ct = o.a.charityBrandingPublicCookieName,
            Nt = function() {
                var e = l.a.parse(document.cookie)[Ct];
                if (void 0 === e) return null;
                var t = c.a.parse(e);
                return t && "string" == typeof t.ll && "string" == typeof t.n ? {
                    name: t.n,
                    logo: t.ll
                } : null
            },
            xt = function(e) {
                var t = e.userName,
                    n = Nt();
                return null === n ? null : S.default.h("div", {
                    className: "jg-display-table"
                }, S.default.h("div", {
                    className: P()("jg-chrome-header__user-menu-charity-logo", "jg-display-table-cell jg-align--top")
                }, function(e) {
                    return S.default.h(Ot, {
                        src: e.logo && i()(o.a.imageCDNUri, e.logo, "?template=size100x100"),
                        alt: e.name,
                        className: P()(E("charity-info__logo"), "jg-icon--large jg-bd jg-br jg-bd--very-light-grey"),
                        fallback: S.default.h("div", {
                            className: P()("jg-icon--large jg-bd jg-br jg-bd--very-light-grey", "jg-space-ptxs")
                        }, S.default.h(oe, {
                            markup: V.a,
                            className: "jg-icon--medium-large jg-space-mha"
                        }))
                    })
                }(n)), S.default.h("div", {
                    className: "jg-display-table-cell jg-align--top jg-space-plsm"
                }, S.default.h("span", {
                    className: P()(E("charity-info__user-name"), "jg-font-size--medium jg-color--nero")
                }, t), S.default.h("br", null), S.default.h("span", {
                    className: P()(E("charity-info__charity-name"), "jg-font-size--small jg-text--light jg-color--nero")
                }, n.name)))
            },
            St = function(e) {
                var t = e.avatar,
                    n = e.name,
                    r = e.showPip;
                return function(e) {
                    var a = e.caret,
                        s = S.default.h(Ot, {
                            src: t && i()(o.a.imageCDNUri, t, "?template=size75x75face"),
                            alt: n,
                            className: P()(E("logged-in-menu-button__avatar"), "jg-chrome-header__user-avatar", "jg-br--circle"),
                            fallback: S.default.h(oe, {
                                markup: D.a,
                                className: "jg-chrome-header__user-avatar"
                            })
                        });
                    return [S.default.h("div", {
                        className: "jg-display-ib"
                    }, r ? S.default.h("div", {
                        className: "pip-wrapper"
                    }, S.default.h("div", {
                        className: "pip jg-background--sunset-red jg-position-absolute jg-color--white jg-text--center jg-br--circle"
                    }, "1")) : null, s), S.default.h("span", {
                        className: "jg-display-n jg-display-ib@xl jg-align--vertical-middle"
                    }, S.default.h("span", {
                        className: P()(E("logged-in-menu-button__name"), "jg-space-mlsm")
                    }, n), a)]
                }
            },
            At = {
                page_type: "navigation header",
                event: "link click",
                subtype: "button",
                event_value: "badge notification",
                page_section: "gdpr recapture preference > preference badge notification"
            },
            Pt = function(e) {
                var t = e.analytics,
                    n = e.auth,
                    r = e.menu,
                    o = e.showPip,
                    a = e.handleShowModal,
                    i = n.getAccessToken();
                if (!i) return null;
                var s = [i.givenName, i.familyName].filter(function(e) {
                        return e
                    }).join(" "),
                    c = i.givenName,
                    u = i.profilePictureUrl,
                    l = St({
                        name: c,
                        avatar: u,
                        showPip: o
                    }),
                    p = Array.isArray(i.permissions) && i.permissions.length > 1,
                    f = r.switchProfile && De({
                        url: r.switchProfile.url,
                        content: r.switchProfile.label,
                        wrapperClassName: E("logged-in__switch-profile")
                    }),
                    d = De({
                        url: r.logOut.url,
                        content: r.logOut.label,
                        wrapperClassName: E("logged-in__log-out")
                    }),
                    h = p && f ? [f, d] : [d],
                    g = n.isCharity() && r.showCharityInfo ? [De({
                        content: S.default.h(xt, {
                            auth: n,
                            userName: s
                        }),
                        wrapperClassName: E("logged-in__charity-info")
                    })] : null,
                    m = r.items.length > 0 ? r.items.map(function(e) {
                        return "SEPARATOR" === e ? He() : De({
                            url: e.url,
                            content: e.label
                        })
                    }) : null,
                    v = (g || []).concat(g && m ? [He({
                        className: E("logged-in__charity-info-separator")
                    })] : [], m || [], g || m ? [He({
                        className: E("logged-in__log-out-separator")
                    })] : [], h);
                return S.default.h(We, {
                    onButtonClick: function(e) {
                        o && (e.preventDefault(), a(!0), t && t.track(At))
                    },
                    className: P()("jg-chrome-header__user-menu", "jg-display-ib jg-h-full jg-space-mln@md jg-space-mlxs@xl"),
                    menuClassName: "jg-pin-r",
                    menuCaretClassName: P()("jg-space-mrxs", "jg-chrome-header__user-menu-avatar-caret-offset", "jg-chrome-header__menu-caret-offset@xl"),
                    button: l,
                    contents: v
                })
            },
            Et = function() {
                return (Et = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            It = function(e) {
                var t = e.login,
                    n = e.signUp,
                    r = e.minBreakpoint;
                return S.default.h("ul", {
                    className: P()(ye("jg-display-ib", "jg-display-n", {
                        md: "jg-display-ib@md"
                    }, r), "jg-h-full jg-align--top", "jg-space-mvn jg-space-mlxs@xl", "jg-text--medium-regular")
                }, [Et({}, t, {
                    key: "login",
                    className: ""
                }), Et({}, n, {
                    key: "signUp",
                    className: "jg-space-mlxs"
                })].map(function(e) {
                    return S.default.h("li", {
                        key: e.key,
                        className: "jg-display-ib jg-h-full"
                    }, S.default.h(Pe, {
                        render: function(t) {
                            return S.default.h("a", {
                                className: P()(E("logged-out__item__link"), "jg-display-ib jg-h-full jg-space-phxs", "jg-color--empress jg-color--nero@hover jg-text-no-underline@hover", e.className),
                                href: i()(e.url, t ? "?returnUrl=" + encodeURIComponent(t) : "")
                            }, S.default.h("span", {
                                className: "jg-display-b jg-align--middle"
                            }, e.label))
                        }
                    }))
                }))
            },
            Tt = function() {
                return (Tt = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            Rt = function(e) {
                var t = e.analytics,
                    n = e.auth,
                    r = e.content,
                    o = e.showPip,
                    a = e.handleShowModal;
                return n.isUserLoggedIn() ? S.default.h(Pt, {
                    analytics: t,
                    auth: n,
                    menu: r.userMenu,
                    showPip: o,
                    handleShowModal: a
                }) : S.default.h(It, Tt({}, r.loggedOut))
            },
            Mt = function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function r() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }(),
            Ut = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.setSearchButtonRef = function(e) {
                        n.searchButtonRef = e ? e.base : void 0
                    }, n.setSearchBoxRef = function(e) {
                        n.searchBoxRef = e
                    }, n.onLogoSize = function(e) {
                        n.setState({
                            logoSize: e
                        })
                    }, n.handleSearchSubmit = function(e) {
                        var t = n.props.content;
                        if (t.search) {
                            var r = e.trim().toLowerCase(),
                                o = t.search.searchCircuits.find(function(e) {
                                    return e.searchTerms.includes(r)
                                });
                            window.location.assign(o ? o.redirectUri : "" + t.search.searchUrl + e)
                        }
                    }, n.handleSearchClickOutside = function(e) {
                        n.searchButtonRef && n.searchButtonRef.contains(e.target) || n.setState({
                            searchOpen: !1
                        })
                    }, n.handleSearchToggle = function() {
                        n.setState(function(e) {
                            return {
                                searchOpen: !e.searchOpen
                            }
                        }, n.focusSearchAfterToggle)
                    }, n.focusSearchAfterToggle = function() {
                        n.state.searchOpen && setTimeout(n.focusSearchInput, 50)
                    }, n.focusSearchInput = function() {
                        n.searchBoxRef && n.searchBoxRef.focusInput()
                    }, n.showPip = function(e) {
                        n.setState({
                            showPip: e
                        })
                    }, n.showModal = function(e) {
                        var t = n.props.analytics;
                        n.setState({
                            showModal: e,
                            showPip: !1
                        }), pt({
                            hasToRecapture: !1
                        }), t && t.track({
                            page_type: "navigation header",
                            event: "page view",
                            subtype: "gdpr recapture preference",
                            event_value: "be the first to know",
                            page_section: "gdpr recapture preference"
                        })
                    };
                    var r = t.content.branding;
                    return n.state = {
                        searchOpen: !1,
                        logoSize: r && r.logo.size,
                        showPip: !1,
                        showModal: !1
                    }, n
                }
                return Mt(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.props.content.branding,
                        n = e.content.branding;
                    t !== n && (t && n && t.logo.src === n.logo.src || this.setState({
                        logoSize: n && n.logo.size
                    }))
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.content,
                        n = e.auth,
                        r = e.analytics,
                        o = e.location,
                        a = void 0 === o ? null : o,
                        i = this.state,
                        s = i.searchOpen,
                        c = i.logoSize,
                        u = i.showPip,
                        l = i.showModal,
                        p = t.branding;
                    return S.default.h(Ee, {
                        value: a
                    }, S.default.h("header", {
                        className: P()("jg-chrome-header", {
                            "jg-color--dark-orchid": !p
                        }),
                        style: p && p.color && {
                            color: ge(p.color)
                        }
                    }, S.default.h("div", {
                        className: "jg-chrome-header__bar jg-position-relative jg-h-full jg-background--white jg-bdb jg-bd--very-light-grey"
                    }, S.default.h("div", {
                        className: "container jg-space-phn jg-h-full"
                    }, p && (c ? S.default.h("div", {
                        className: "jg-display-ib jg-h-full"
                    }, S.default.h(xe, {
                        href: t.homeLink && t.homeLink.url,
                        label: t.homeLink && t.homeLink.label,
                        src: p.logo.src,
                        size: c,
                        wrapperClassName: P()({
                            "jg-chrome-header__logo-wrapper--accommodate-jg-logo": Boolean(t.jgLogo),
                            "jg-chrome-header__logo-wrapper--bbp2p": "bbP2P" === p.logo.version
                        }),
                        autoConstrainSize: !("bbP2P" === p.logo.version)
                    }), S.default.h(Ye, {
                        content: t,
                        auth: n
                    }), t.featuredItem && t.featuredItem.item && S.default.h("a", {
                        className: P()(E("header__featured-item"), ye("jg-display-ib", "jg-display-n", {
                            md: "jg-display-ib@md",
                            lg: "jg-display-ib@lg"
                        }, t.featuredItem.minBreakpoint), "jg-h-full jg-align--top", "jg-space-phxs jg-space-mlxs jg-space-mlsm@xl", "jg-color--empress", "jg-color--nero@hover jg-text-no-underline@hover"),
                        href: t.featuredItem.item.url
                    }, S.default.h("span", {
                        className: "jg-display-b jg-align--middle"
                    }, t.featuredItem.item.label))) : S.default.h(ve, {
                        src: p.logo.src,
                        onSize: this.onLogoSize
                    })), n && S.default.h("div", {
                        className: "jg-pull-right jg-h-full jg-space-prxs jg-space-prsm@md"
                    }, t.search && S.default.h(jt, {
                        ref: this.setSearchButtonRef,
                        className: "jg-display-ib jg-h-full jg-align--top jg-space-mrxs jg-space-mrsm@md",
                        label: t.search.label,
                        onClick: this.handleSearchToggle,
                        isOpen: s
                    }), t.jgLogo && S.default.h("a", {
                        href: t.jgLogo.url,
                        className: P()(E("header__jg-logo"), "jg-display-ib jg-h-full jg-align--vertical-middle", "jg-space-mrsm@md jg-space-mrxs"),
                        target: t.jgLogo.newWindow ? "_blank" : void 0,
                        rel: t.jgLogo.newWindow ? "noopener noreferrer" : void 0
                    }, S.default.h("span", {
                        className: "jg-sr-only"
                    }, t.jgLogo.label), S.default.h("img", {
                        className: P()(E("header__jg-logo-img"), "jg-chrome-header__jg-logo-img jg-display-b jg-align--middle"),
                        src: le.a,
                        alt: ""
                    })), t.user && S.default.h(Rt, {
                        analytics: r,
                        auth: n,
                        content: t.user,
                        showPip: u,
                        handleShowModal: this.showModal
                    })))), t.search && S.default.h(bt, {
                        wrappedRef: this.setSearchBoxRef,
                        content: t.search,
                        className: P()("jg-position-absolute jg-w-full jg-anim-slide-down jg-anim-fade-in", {
                            "jg-anim-slide-down--active jg-anim-fade-in--active": s
                        }),
                        onSubmit: this.handleSearchSubmit,
                        onClickOutside: this.handleSearchClickOutside
                    }), S.default.h(Ne, null), S.default.h(mt, {
                        analytics: r,
                        auth: n,
                        handleShowPip: this.showPip,
                        showModal: l,
                        handleShowModal: this.showModal
                    })))
                }, t
            }(S.default.Component);

        function Lt(e, t) {
            var n = e.querySelector('meta[name="' + t + '"]');
            return n && n.getAttribute("content")
        }
        var Bt = function() {
            return (Bt = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };

        function Gt(e, t, n) {
            var r = function(e, t, n) {
                    var r = n.brandingColor || Lt(e, "jg:chrome:brandingColor"),
                        o = n.logoImageUrl || Lt(e, "jg:chrome:logoImageUrl");
                    if (!r || !o) return t.branding;
                    var a = {
                            color: r,
                            logo: {
                                src: o
                            }
                        },
                        i = n.logoImageWidth || Dt(e, "jg:chrome:logoImageWidth"),
                        s = n.logoImageHeight || Dt(e, "jg:chrome:logoImageHeight");
                    i && s && (a.logo.size = {
                        width: i,
                        height: s
                    });
                    return a
                }(e, t, n),
                o = n.featuredItemUrl || Lt(e, "jg:chrome:featuredItemUrl") || t.featuredItem && t.featuredItem.item && t.featuredItem.item.url || null,
                a = n.featuredItemLabel || Lt(e, "jg:chrome:featuredItemLabel") || t.featuredItem && t.featuredItem.item && t.featuredItem.item.label || null,
                i = null !== o && null !== a ? Bt({}, t.featuredItem && t.featuredItem.item, {
                    url: o,
                    label: a
                }) : void 0,
                s = t.featuredItem || i ? Bt({}, t.featuredItem, {
                    item: i
                }) : void 0,
                c = n.logoLinkUrl || Lt(e, "jg:chrome:logoLinkUrl"),
                u = t.user && function(e, t, n) {
                    var r = n.loginLinkUrl || Lt(e, "jg:chrome:loginLinkUrl") || t.loggedOut.login.url,
                        o = n.signUpLinkUrl || Lt(e, "jg:chrome:signUpLinkUrl") || t.loggedOut.signUp.url;
                    return Bt({}, t, {
                        loggedOut: Bt({}, t.loggedOut, {
                            login: Bt({}, t.loggedOut.login, {
                                url: r
                            }),
                            signUp: Bt({}, t.loggedOut.signUp, {
                                url: o
                            })
                        })
                    })
                }(e, t.user, n),
                l = t.homeLink && {
                    url: c || t.homeLink.url,
                    label: t.homeLink.label
                };
            return Bt({}, t, {
                branding: r,
                homeLink: l,
                featuredItem: s,
                user: u
            })
        }

        function Dt(e, t) {
            var n = Lt(e, t);
            if (null === n) return null;
            var r = parseFloat(n);
            return isNaN(r) ? null : r
        }
        var Ht = function() {
                return (Ht = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            },
            Vt = function(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]])
                }
                return n
            },
            zt = window.__jgChromeContent,
            Ft = document.getElementById("jg-chrome-header"),
            Kt = document.getElementById("jg-chrome-footer"),
            Jt = C(document, o.a.authCookieName, o.a.authActiveGroupsCookieName, o.a.refreshAccessTokenUrl),
            Wt = new x.a({
                apiUrl: o.a.koalaApiUrl,
                isDebug: !1
            });
        Wt.track({
            event: "site view"
        });
        var Xt = {
            headerVariant: zt.headerVariant,
            footerVariant: zt.footerVariant,
            brandingColor: null,
            logoImageUrl: null,
            logoImageWidth: null,
            logoImageHeight: null,
            logoLinkUrl: null,
            featuredItemUrl: null,
            featuredItemLabel: null,
            loginLinkUrl: null,
            signUpLinkUrl: null
        };

        function qt(e) {
            void 0 === e && (e = {});
            var t = e.headerVariant,
                n = e.footerVariant,
                r = Vt(e, ["headerVariant", "footerVariant"]);
            Xt = Ht({}, Xt, r), t && (zt.headerContent[t] ? Xt.headerVariant = t : console.warn('JG.FrontEnd.Chrome: No content found for header variant "' + t + '", falling back to previous variant "' + Xt.headerVariant + '"')), n && (zt.footerContent[n] ? Xt.footerVariant = n : console.warn('JG.FrontEnd.Chrome: No content found for footer variant "' + n + '", falling back to previous variant "' + Xt.footerVariant + '"'));
            var o = zt.headerContent[Xt.headerVariant],
                a = zt.footerContent[Xt.footerVariant],
                i = Gt(document, o, Xt);
            Ft && Object(S.render)(S.default.h(Ut, {
                content: i,
                auth: Jt,
                analytics: Wt,
                location: window.location.href
            }), Ft, Ft.firstElementChild || void 0), Kt && Object(S.render)(S.default.h(he, {
                content: a
            }), Kt, Kt.firstElementChild || void 0)
        }
        qt(), window.jg = window.jg && window.jg.chrome ? window.jg : Ht({}, window.jg, {
            chrome: {
                refresh: qt
            }
        })
    },
    8: function(e, t, n) {
        e.exports = n(129)()
    }
});
//# sourceMappingURL=chrome-6a38ffc80079cd360e9c.js.map