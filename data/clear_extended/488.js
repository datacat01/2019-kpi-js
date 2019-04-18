/** @license React v16.4.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
(function(p, h) {
    "object" === typeof exports && "undefined" !== typeof module ? module.exports = h() : "function" === typeof define && define.amd ? define(h) : p.React = h()
})(this, function() {
    function p(a) {
        for (var b = arguments.length - 1, f = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 0; d < b; d++) f += "&args[]=" + encodeURIComponent(arguments[d + 1]);
        O(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
            f)
    }

    function h(a) {
        return function() {
            return a
        }
    }

    function q(a, b, f) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = f || E
    }

    function F() {}

    function v(a, b, f) {
        this.props = a;
        this.context = b;
        this.refs = D;
        this.updater = f || E
    }

    function G(a, b, f) {
        var d = void 0,
            e = {},
            k = null,
            c = null;
        if (null != b)
            for (d in void 0 !== b.ref && (c = b.ref), void 0 !== b.key && (k = "" + b.key), b) H.call(b, d) && !I.hasOwnProperty(d) && (e[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g) e.children = f;
        else if (1 < g) {
            for (var m = Array(g), l = 0; l < g; l++) m[l] = arguments[l + 2];
            e.children =
                m
        }
        if (a && a.defaultProps)
            for (d in g = a.defaultProps, g) void 0 === e[d] && (e[d] = g[d]);
        return {
            $$typeof: r,
            type: a,
            key: k,
            ref: c,
            props: e,
            _owner: w.current
        }
    }

    function x(a) {
        return "object" === typeof a && null !== a && a.$$typeof === r
    }

    function P(a) {
        var b = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + ("" + a).replace(/[=:]/g, function(a) {
            return b[a]
        })
    }

    function J(a, b, f, d) {
        if (u.length) {
            var e = u.pop();
            e.result = a;
            e.keyPrefix = b;
            e.func = f;
            e.context = d;
            e.count = 0;
            return e
        }
        return {
            result: a,
            keyPrefix: b,
            func: f,
            context: d,
            count: 0
        }
    }

    function K(a) {
        a.result = null;
        a.keyPrefix =
            null;
        a.func = null;
        a.context = null;
        a.count = 0;
        10 > u.length && u.push(a)
    }

    function t(a, b, f, d) {
        var e = typeof a;
        if ("undefined" === e || "boolean" === e) a = null;
        var k = !1;
        if (null === a) k = !0;
        else switch (e) {
            case "string":
            case "number":
                k = !0;
                break;
            case "object":
                switch (a.$$typeof) {
                    case r:
                    case Q:
                        k = !0
                }
        }
        if (k) return f(d, a, "" === b ? "." + y(a, 0) : b), 1;
        k = 0;
        b = "" === b ? "." : b + ":";
        if (Array.isArray(a))
            for (var c = 0; c < a.length; c++) {
                e = a[c];
                var g = b + y(e, c);
                k += t(e, g, f, d)
            } else if (null === a || "undefined" === typeof a ? g = null : (g = L && a[L] || a["@@iterator"], g = "function" ===
                    typeof g ? g : null), "function" === typeof g)
                for (a = g.call(a), c = 0; !(e = a.next()).done;) e = e.value, g = b + y(e, c++), k += t(e, g, f, d);
            else "object" === e && (f = "" + a, p("31", "[object Object]" === f ? "object with keys {" + Object.keys(a).join(", ") + "}" : f, ""));
        return k
    }

    function y(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? P(a.key) : b.toString(36)
    }

    function R(a, b, f) {
        a.func.call(a.context, b, a.count++)
    }

    function S(a, b, f) {
        var d = a.result,
            e = a.keyPrefix;
        a = a.func.call(a.context, b, a.count++);
        Array.isArray(a) ? z(a, d, f, A.thatReturnsArgument) :
            null != a && (x(a) && (b = e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(M, "$&/") + "/") + f, a = {
                $$typeof: r,
                type: a.type,
                key: b,
                ref: a.ref,
                props: a.props,
                _owner: a._owner
            }), d.push(a))
    }

    function z(a, b, f, d, e) {
        var c = "";
        null != f && (c = ("" + f).replace(M, "$&/") + "/");
        b = J(b, c, d, e);
        null == a || t(a, "", S, b);
        K(b)
    }
    var N = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        U = Object.prototype.propertyIsEnumerable,
        B = function() {
            try {
                if (!Object.assign) return !1;
                var a = new String("abc");
                a[5] = "de";
                if ("5" === Object.getOwnPropertyNames(a)[0]) return !1;
                var b = {};
                for (a = 0; 10 > a; a++) b["_" + String.fromCharCode(a)] = a;
                if ("0123456789" !== Object.getOwnPropertyNames(b).map(function(a) {
                        return b[a]
                    }).join("")) return !1;
                var f = {};
                "abcdefghijklmnopqrst".split("").forEach(function(a) {
                    f[a] = a
                });
                return "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, f)).join("") ? !1 : !0
            } catch (d) {
                return !1
            }
        }() ? Object.assign : function(a, b) {
            if (null === a || void 0 === a) throw new TypeError("Object.assign cannot be called with null or undefined");
            var f = Object(a);
            for (var d, e = 1; e < arguments.length; e++) {
                var c =
                    Object(arguments[e]);
                for (var h in c) T.call(c, h) && (f[h] = c[h]);
                if (N) {
                    d = N(c);
                    for (var g = 0; g < d.length; g++) U.call(c, d[g]) && (f[d[g]] = c[d[g]])
                }
            }
            return f
        },
        c = "function" === typeof Symbol && Symbol.for,
        r = c ? Symbol.for("react.element") : 60103,
        Q = c ? Symbol.for("react.portal") : 60106,
        n = c ? Symbol.for("react.fragment") : 60107,
        C = c ? Symbol.for("react.strict_mode") : 60108,
        V = c ? Symbol.for("react.profiler") : 60114,
        W = c ? Symbol.for("react.provider") : 60109,
        X = c ? Symbol.for("react.context") : 60110,
        Y = c ? Symbol.for("react.async_mode") : 60111,
        Z =
        c ? Symbol.for("react.forward_ref") : 60112;
    c && Symbol.for("react.timeout");
    var L = "function" === typeof Symbol && Symbol.iterator,
        O = function(a, b, f, d, c, k, h, g) {
            if (!a) {
                if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var e = [f, d, c, k, h, g],
                        l = 0;
                    a = Error(b.replace(/%s/g, function() {
                        return e[l++]
                    }));
                    a.name = "Invariant Violation"
                }
                a.framesToPop = 1;
                throw a;
            }
        },
        D = {};
    c = function() {};
    c.thatReturns = h;
    c.thatReturnsFalse = h(!1);
    c.thatReturnsTrue = h(!0);
    c.thatReturnsNull = h(null);
    c.thatReturnsThis = function() {
        return this
    };
    c.thatReturnsArgument = function(a) {
        return a
    };
    var A = c,
        E = {
            isMounted: function(a) {
                return !1
            },
            enqueueForceUpdate: function(a, b, c) {},
            enqueueReplaceState: function(a, b, c, d) {},
            enqueueSetState: function(a, b, c, d) {}
        };
    q.prototype.isReactComponent = {};
    q.prototype.setState = function(a, b) {
        "object" !== typeof a && "function" !== typeof a && null != a ? p("85") : void 0;
        this.updater.enqueueSetState(this, a, b, "setState")
    };
    q.prototype.forceUpdate =
        function(a) {
            this.updater.enqueueForceUpdate(this, a, "forceUpdate")
        };
    F.prototype = q.prototype;
    c = v.prototype = new F;
    c.constructor = v;
    B(c, q.prototype);
    c.isPureReactComponent = !0;
    var w = {
            current: null
        },
        H = Object.prototype.hasOwnProperty,
        I = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        },
        M = /\/+/g,
        u = [];
    n = {
        Children: {
            map: function(a, b, c) {
                if (null == a) return a;
                var d = [];
                z(a, d, null, b, c);
                return d
            },
            forEach: function(a, b, c) {
                if (null == a) return a;
                b = J(null, null, b, c);
                null == a || t(a, "", R, b);
                K(b)
            },
            count: function(a) {
                return null == a ? 0 : t(a, "", A.thatReturnsNull,
                    null)
            },
            toArray: function(a) {
                var b = [];
                z(a, b, null, A.thatReturnsArgument);
                return b
            },
            only: function(a) {
                x(a) ? void 0 : p("143");
                return a
            }
        },
        createRef: function() {
            return {
                current: null
            }
        },
        Component: q,
        PureComponent: v,
        createContext: function(a, b) {
            void 0 === b && (b = null);
            a = {
                $$typeof: X,
                _calculateChangedBits: b,
                _defaultValue: a,
                _currentValue: a,
                _currentValue2: a,
                _changedBits: 0,
                _changedBits2: 0,
                Provider: null,
                Consumer: null
            };
            a.Provider = {
                $$typeof: W,
                _context: a
            };
            return a.Consumer = a
        },
        forwardRef: function(a) {
            return {
                $$typeof: Z,
                render: a
            }
        },
        Fragment: n,
        StrictMode: C,
        unstable_AsyncMode: Y,
        unstable_Profiler: V,
        createElement: G,
        cloneElement: function(a, b, c) {
            null === a || void 0 === a ? p("267", a) : void 0;
            var d = void 0,
                e = B({}, a.props),
                f = a.key,
                h = a.ref,
                g = a._owner;
            if (null != b) {
                void 0 !== b.ref && (h = b.ref, g = w.current);
                void 0 !== b.key && (f = "" + b.key);
                var m = void 0;
                a.type && a.type.defaultProps && (m = a.type.defaultProps);
                for (d in b) H.call(b, d) && !I.hasOwnProperty(d) && (e[d] = void 0 === b[d] && void 0 !== m ? m[d] : b[d])
            }
            d = arguments.length - 2;
            if (1 === d) e.children = c;
            else if (1 < d) {
                m = Array(d);
                for (var l = 0; l < d; l++) m[l] = arguments[l + 2];
                e.children = m
            }
            return {
                $$typeof: r,
                type: a.type,
                key: f,
                ref: h,
                props: e,
                _owner: g
            }
        },
        createFactory: function(a) {
            var b = G.bind(null, a);
            b.type = a;
            return b
        },
        isValidElement: x,
        version: "16.4.0",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentOwner: w,
            assign: B
        }
    };
    n = (C = {
        default: n
    }, n) || C;
    return n.default ? n.default : n
});