define("@ta/social.content-removal", ["@ta/common.global"], function(e) {
    return function(e) {
        var o = {};

        function n(s) {
            if (o[s]) return o[s].exports;
            var t = o[s] = {
                i: s,
                l: !1,
                exports: {}
            };
            return e[s].call(t.exports, t, t.exports, n), t.l = !0, t.exports
        }
        return n.m = e, n.c = o, n.d = function(e, o, s) {
            n.o(e, o) || Object.defineProperty(e, o, {
                enumerable: !0,
                get: s
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, o) {
            if (1 & o && (e = n(e)), 8 & o) return e;
            if (4 & o && "object" == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if (n.r(s), Object.defineProperty(s, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & o && "string" != typeof e)
                for (var t in e) n.d(s, t, function(o) {
                    return e[o]
                }.bind(null, t));
            return s
        }, n.n = function(e) {
            var o = e && e.__esModule ? function o() {
                return e.default
            } : function o() {
                return e
            };
            return n.d(o, "a", o), o
        }, n.o = function(e, o) {
            return Object.prototype.hasOwnProperty.call(e, o)
        }, n.p = "", n(n.s = "./packages/social/content-removal/index.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, o, n) {
            "use strict";

            function s(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(o, "a", function() {
                return s
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, o, n) {
            "use strict";

            function s(e, o) {
                if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(o, "a", function() {
                return s
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, o, n) {
            "use strict";

            function s(e, o) {
                for (var n = 0; n < o.length; n++) {
                    var s = o[n];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function t(e, o, n) {
                return o && s(e.prototype, o), n && s(e, n), e
            }
            n.d(o, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, o, n) {
            "use strict";

            function s(e, o, n) {
                return o in e ? Object.defineProperty(e, o, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = n, e
            }
            n.d(o, "a", function() {
                return s
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/extends.js": function(e, o, n) {
            "use strict";

            function s() {
                return (s = Object.assign || function(e) {
                    for (var o = 1; o < arguments.length; o++) {
                        var n = arguments[o];
                        for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(o, "a", function() {
                return s
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, o, n) {
            "use strict";

            function s(e) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function e(o) {
                    return o.__proto__ || Object.getPrototypeOf(o)
                })(e)
            }
            n.d(o, "a", function() {
                return s
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, o, n) {
            "use strict";
            n.d(o, "a", function() {
                return t
            });
            var s = n("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function t(e, o) {
                if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(o && o.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), o && Object(s.a)(e, o)
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js": function(e, o, n) {
            "use strict";

            function s(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }
            n.d(o, "a", function() {
                return s
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, o, n) {
            "use strict";
            n.d(o, "a", function() {
                return r
            });
            var s = n("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                t = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function r(e, o) {
                return !o || "object" !== Object(s.a)(o) && "function" != typeof o ? Object(t.a)(e) : o
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, o, n) {
            "use strict";

            function s(e, o) {
                return (s = Object.setPrototypeOf || function e(o, n) {
                    return o.__proto__ = n, o
                })(e, o)
            }
            n.d(o, "a", function() {
                return s
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js": function(e, o, n) {
            "use strict";
            var s = n("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");

            function t(e) {
                return function o(e) {
                    if (Array.isArray(e)) {
                        for (var o = 0, n = new Array(e.length); o < e.length; o++) n[o] = e[o];
                        return n
                    }
                }(e) || Object(s.a)(e) || function n() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            n.d(o, "a", function() {
                return t
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, o, n) {
            "use strict";

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(o) {
                    return typeof o
                } : function e(o) {
                    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
                })(e)
            }

            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" === s(Symbol.iterator) ? function e(o) {
                    return s(o)
                } : function e(o) {
                    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : s(o)
                })(e)
            }
            n.d(o, "a", function() {
                return t
            })
        },
        "./node_modules/lodash/_Symbol.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_root.js").Symbol;
            e.exports = s
        },
        "./node_modules/lodash/_apply.js": function(e, o) {
            e.exports = function n(e, o, s) {
                switch (s.length) {
                    case 0:
                        return e.call(o);
                    case 1:
                        return e.call(o, s[0]);
                    case 2:
                        return e.call(o, s[0], s[1]);
                    case 3:
                        return e.call(o, s[0], s[1], s[2])
                }
                return e.apply(o, s)
            }
        },
        "./node_modules/lodash/_arrayLikeKeys.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseTimes.js"),
                t = n("./node_modules/lodash/isArguments.js"),
                r = n("./node_modules/lodash/isArray.js"),
                d = n("./node_modules/lodash/isBuffer.js"),
                a = n("./node_modules/lodash/_isIndex.js"),
                u = n("./node_modules/lodash/isTypedArray.js"),
                l = Object.prototype.hasOwnProperty;
            e.exports = function i(e, o) {
                var n = r(e),
                    i = !n && t(e),
                    c = !n && !i && d(e),
                    m = !n && !i && !c && u(e),
                    _ = n || i || c || m,
                    f = _ ? s(e.length, String) : [],
                    p = f.length;
                for (var j in e) !o && !l.call(e, j) || _ && ("length" == j || c && ("offset" == j || "parent" == j) || m && ("buffer" == j || "byteLength" == j || "byteOffset" == j) || a(j, p)) || f.push(j);
                return f
            }
        },
        "./node_modules/lodash/_arrayMap.js": function(e, o) {
            e.exports = function n(e, o) {
                for (var n = -1, s = null == e ? 0 : e.length, t = Array(s); ++n < s;) t[n] = o(e[n], n, e);
                return t
            }
        },
        "./node_modules/lodash/_arrayReduce.js": function(e, o) {
            e.exports = function n(e, o, s, t) {
                var r = -1,
                    d = null == e ? 0 : e.length;
                for (t && d && (s = e[++r]); ++r < d;) s = o(s, e[r], r, e);
                return s
            }
        },
        "./node_modules/lodash/_asciiSize.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseProperty.js")("length");
            e.exports = s
        },
        "./node_modules/lodash/_asciiToArray.js": function(e, o) {
            e.exports = function n(e) {
                return e.split("")
            }
        },
        "./node_modules/lodash/_asciiWords.js": function(e, o) {
            var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
            e.exports = function s(e) {
                return e.match(n) || []
            }
        },
        "./node_modules/lodash/_assignValue.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseAssignValue.js"),
                t = n("./node_modules/lodash/eq.js"),
                r = Object.prototype.hasOwnProperty;
            e.exports = function d(e, o, n) {
                var d = e[o];
                r.call(e, o) && t(d, n) && (void 0 !== n || o in e) || s(e, o, n)
            }
        },
        "./node_modules/lodash/_baseAssignValue.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_defineProperty.js");
            e.exports = function t(e, o, n) {
                "__proto__" == o && s ? s(e, o, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : e[o] = n
            }
        },
        "./node_modules/lodash/_baseClamp.js": function(e, o) {
            e.exports = function n(e, o, s) {
                return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== o && (e = e >= o ? e : o)), e
            }
        },
        "./node_modules/lodash/_baseFindIndex.js": function(e, o) {
            e.exports = function n(e, o, s, t) {
                for (var r = e.length, d = s + (t ? 1 : -1); t ? d-- : ++d < r;)
                    if (o(e[d], d, e)) return d;
                return -1
            }
        },
        "./node_modules/lodash/_baseGetTag.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_Symbol.js"),
                t = n("./node_modules/lodash/_getRawTag.js"),
                r = n("./node_modules/lodash/_objectToString.js"),
                d = s ? s.toStringTag : void 0;
            e.exports = function a(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : d && d in Object(e) ? t(e) : r(e)
            }
        },
        "./node_modules/lodash/_baseIndexOf.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseFindIndex.js"),
                t = n("./node_modules/lodash/_baseIsNaN.js"),
                r = n("./node_modules/lodash/_strictIndexOf.js");
            e.exports = function d(e, o, n) {
                return o == o ? r(e, o, n) : s(e, t, n)
            }
        },
        "./node_modules/lodash/_baseIsArguments.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseGetTag.js"),
                t = n("./node_modules/lodash/isObjectLike.js");
            e.exports = function r(e) {
                return t(e) && "[object Arguments]" == s(e)
            }
        },
        "./node_modules/lodash/_baseIsNaN.js": function(e, o) {
            e.exports = function n(e) {
                return e != e
            }
        },
        "./node_modules/lodash/_baseIsNative.js": function(e, o, n) {
            var s = n("./node_modules/lodash/isFunction.js"),
                t = n("./node_modules/lodash/_isMasked.js"),
                r = n("./node_modules/lodash/isObject.js"),
                d = n("./node_modules/lodash/_toSource.js"),
                a = /^\[object .+?Constructor\]$/,
                u = Function.prototype,
                l = Object.prototype,
                i = u.toString,
                c = l.hasOwnProperty,
                m = RegExp("^" + i.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function _(e) {
                return !(!r(e) || t(e)) && (s(e) ? m : a).test(d(e))
            }
        },
        "./node_modules/lodash/_baseIsRegExp.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseGetTag.js"),
                t = n("./node_modules/lodash/isObjectLike.js");
            e.exports = function r(e) {
                return t(e) && "[object RegExp]" == s(e)
            }
        },
        "./node_modules/lodash/_baseIsTypedArray.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseGetTag.js"),
                t = n("./node_modules/lodash/isLength.js"),
                r = n("./node_modules/lodash/isObjectLike.js"),
                d = {};
            d["[object Float32Array]"] = d["[object Float64Array]"] = d["[object Int8Array]"] = d["[object Int16Array]"] = d["[object Int32Array]"] = d["[object Uint8Array]"] = d["[object Uint8ClampedArray]"] = d["[object Uint16Array]"] = d["[object Uint32Array]"] = !0, d["[object Arguments]"] = d["[object Array]"] = d["[object ArrayBuffer]"] = d["[object Boolean]"] = d["[object DataView]"] = d["[object Date]"] = d["[object Error]"] = d["[object Function]"] = d["[object Map]"] = d["[object Number]"] = d["[object Object]"] = d["[object RegExp]"] = d["[object Set]"] = d["[object String]"] = d["[object WeakMap]"] = !1, e.exports = function a(e) {
                return r(e) && t(e.length) && !!d[s(e)]
            }
        },
        "./node_modules/lodash/_baseKeys.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_isPrototype.js"),
                t = n("./node_modules/lodash/_nativeKeys.js"),
                r = Object.prototype.hasOwnProperty;
            e.exports = function d(e) {
                if (!s(e)) return t(e);
                var o = [];
                for (var n in Object(e)) r.call(e, n) && "constructor" != n && o.push(n);
                return o
            }
        },
        "./node_modules/lodash/_baseKeysIn.js": function(e, o, n) {
            var s = n("./node_modules/lodash/isObject.js"),
                t = n("./node_modules/lodash/_isPrototype.js"),
                r = n("./node_modules/lodash/_nativeKeysIn.js"),
                d = Object.prototype.hasOwnProperty;
            e.exports = function a(e) {
                if (!s(e)) return r(e);
                var o = t(e),
                    n = [];
                for (var a in e)("constructor" != a || !o && d.call(e, a)) && n.push(a);
                return n
            }
        },
        "./node_modules/lodash/_baseProperty.js": function(e, o) {
            e.exports = function n(e) {
                return function(o) {
                    return null == o ? void 0 : o[e]
                }
            }
        },
        "./node_modules/lodash/_basePropertyOf.js": function(e, o) {
            e.exports = function n(e) {
                return function(o) {
                    return null == e ? void 0 : e[o]
                }
            }
        },
        "./node_modules/lodash/_baseRepeat.js": function(e, o) {
            var n = Math.floor;
            e.exports = function s(e, o) {
                var s = "";
                if (!e || o < 1 || o > 9007199254740991) return s;
                do {
                    o % 2 && (s += e), (o = n(o / 2)) && (e += e)
                } while (o);
                return s
            }
        },
        "./node_modules/lodash/_baseRest.js": function(e, o, n) {
            var s = n("./node_modules/lodash/identity.js"),
                t = n("./node_modules/lodash/_overRest.js"),
                r = n("./node_modules/lodash/_setToString.js");
            e.exports = function d(e, o) {
                return r(t(e, o, s), e + "")
            }
        },
        "./node_modules/lodash/_baseSetToString.js": function(e, o, n) {
            var s = n("./node_modules/lodash/constant.js"),
                t = n("./node_modules/lodash/_defineProperty.js"),
                r = n("./node_modules/lodash/identity.js"),
                d = t ? function(e, o) {
                    return t(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: s(o),
                        writable: !0
                    })
                } : r;
            e.exports = d
        },
        "./node_modules/lodash/_baseSlice.js": function(e, o) {
            e.exports = function n(e, o, s) {
                var t = -1,
                    r = e.length;
                o < 0 && (o = -o > r ? 0 : r + o), (s = s > r ? r : s) < 0 && (s += r), r = o > s ? 0 : s - o >>> 0, o >>>= 0;
                for (var d = Array(r); ++t < r;) d[t] = e[t + o];
                return d
            }
        },
        "./node_modules/lodash/_baseTimes.js": function(e, o) {
            e.exports = function n(e, o) {
                for (var n = -1, s = Array(e); ++n < e;) s[n] = o(n);
                return s
            }
        },
        "./node_modules/lodash/_baseToString.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_Symbol.js"),
                t = n("./node_modules/lodash/_arrayMap.js"),
                r = n("./node_modules/lodash/isArray.js"),
                d = n("./node_modules/lodash/isSymbol.js"),
                a = s ? s.prototype : void 0,
                u = a ? a.toString : void 0;
            e.exports = function e(o) {
                if ("string" == typeof o) return o;
                if (r(o)) return t(o, e) + "";
                if (d(o)) return u ? u.call(o) : "";
                var n = o + "";
                return "0" == n && 1 / o == -1 / 0 ? "-0" : n
            }
        },
        "./node_modules/lodash/_baseUnary.js": function(e, o) {
            e.exports = function n(e) {
                return function(o) {
                    return e(o)
                }
            }
        },
        "./node_modules/lodash/_baseValues.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_arrayMap.js");
            e.exports = function t(e, o) {
                return s(o, function(o) {
                    return e[o]
                })
            }
        },
        "./node_modules/lodash/_castSlice.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseSlice.js");
            e.exports = function t(e, o, n) {
                var t = e.length;
                return n = void 0 === n ? t : n, !o && n >= t ? e : s(e, o, n)
            }
        },
        "./node_modules/lodash/_charsEndIndex.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseIndexOf.js");
            e.exports = function t(e, o) {
                for (var n = e.length; n-- && s(o, e[n], 0) > -1;);
                return n
            }
        },
        "./node_modules/lodash/_charsStartIndex.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseIndexOf.js");
            e.exports = function t(e, o) {
                for (var n = -1, t = e.length; ++n < t && s(o, e[n], 0) > -1;);
                return n
            }
        },
        "./node_modules/lodash/_copyObject.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_assignValue.js"),
                t = n("./node_modules/lodash/_baseAssignValue.js");
            e.exports = function r(e, o, n, d) {
                var a = !n;
                n || (n = {});
                for (var u = -1, l = o.length; ++u < l;) {
                    var i = o[u],
                        c = d ? d(n[i], e[i], i, n, e) : void 0;
                    void 0 === c && (c = e[i]), a ? t(n, i, c) : s(n, i, c)
                }
                return n
            }
        },
        "./node_modules/lodash/_coreJsData.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_root.js")["__core-js_shared__"];
            e.exports = s
        },
        "./node_modules/lodash/_createAssigner.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseRest.js"),
                t = n("./node_modules/lodash/_isIterateeCall.js");
            e.exports = function r(e) {
                return s(function(o, n) {
                    var s = -1,
                        r = n.length,
                        d = r > 1 ? n[r - 1] : void 0,
                        a = r > 2 ? n[2] : void 0;
                    for (d = e.length > 3 && "function" == typeof d ? (r--, d) : void 0, a && t(n[0], n[1], a) && (d = r < 3 ? void 0 : d, r = 1), o = Object(o); ++s < r;) {
                        var u = n[s];
                        u && e(o, u, s, d)
                    }
                    return o
                })
            }
        },
        "./node_modules/lodash/_createCaseFirst.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_castSlice.js"),
                t = n("./node_modules/lodash/_hasUnicode.js"),
                r = n("./node_modules/lodash/_stringToArray.js"),
                d = n("./node_modules/lodash/toString.js");
            e.exports = function a(e) {
                return function(o) {
                    o = d(o);
                    var n = t(o) ? r(o) : void 0,
                        a = n ? n[0] : o.charAt(0),
                        u = n ? s(n, 1).join("") : o.slice(1);
                    return a[e]() + u
                }
            }
        },
        "./node_modules/lodash/_createCompounder.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_arrayReduce.js"),
                t = n("./node_modules/lodash/deburr.js"),
                r = n("./node_modules/lodash/words.js"),
                d = RegExp("['’]", "g");
            e.exports = function a(e) {
                return function(o) {
                    return s(r(t(o).replace(d, "")), e, "")
                }
            }
        },
        "./node_modules/lodash/_createPadding.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseRepeat.js"),
                t = n("./node_modules/lodash/_baseToString.js"),
                r = n("./node_modules/lodash/_castSlice.js"),
                d = n("./node_modules/lodash/_hasUnicode.js"),
                a = n("./node_modules/lodash/_stringSize.js"),
                u = n("./node_modules/lodash/_stringToArray.js"),
                l = Math.ceil;
            e.exports = function i(e, o) {
                var n = (o = void 0 === o ? " " : t(o)).length;
                if (n < 2) return n ? s(o, e) : o;
                var i = s(o, l(e / a(o)));
                return d(o) ? r(u(i), 0, e).join("") : i.slice(0, e)
            }
        },
        "./node_modules/lodash/_customDefaultsAssignIn.js": function(e, o, n) {
            var s = n("./node_modules/lodash/eq.js"),
                t = Object.prototype,
                r = t.hasOwnProperty;
            e.exports = function d(e, o, n, a) {
                return void 0 === e || s(e, t[n]) && !r.call(a, n) ? o : e
            }
        },
        "./node_modules/lodash/_deburrLetter.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_basePropertyOf.js")({
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            });
            e.exports = s
        },
        "./node_modules/lodash/_defineProperty.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_getNative.js"),
                t = function() {
                    try {
                        var e = s(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch (e) {}
                }();
            e.exports = t
        },
        "./node_modules/lodash/_escapeHtmlChar.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_basePropertyOf.js")({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            });
            e.exports = s
        },
        "./node_modules/lodash/_escapeStringChar.js": function(e, o) {
            var n = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            };
            e.exports = function s(e) {
                return "\\" + n[e]
            }
        },
        "./node_modules/lodash/_freeGlobal.js": function(e, o, n) {
            (function(o) {
                var n = "object" == typeof o && o && o.Object === Object && o;
                e.exports = n
            }).call(this, n("./node_modules/webpack/buildin/global.js"))
        },
        "./node_modules/lodash/_getNative.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseIsNative.js"),
                t = n("./node_modules/lodash/_getValue.js");
            e.exports = function r(e, o) {
                var n = t(e, o);
                return s(n) ? n : void 0
            }
        },
        "./node_modules/lodash/_getPrototype.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_overArg.js")(Object.getPrototypeOf, Object);
            e.exports = s
        },
        "./node_modules/lodash/_getRawTag.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_Symbol.js"),
                t = Object.prototype,
                r = t.hasOwnProperty,
                d = t.toString,
                a = s ? s.toStringTag : void 0;
            e.exports = function u(e) {
                var o = r.call(e, a),
                    n = e[a];
                try {
                    e[a] = void 0;
                    var s = !0
                } catch (e) {}
                var t = d.call(e);
                return s && (o ? e[a] = n : delete e[a]), t
            }
        },
        "./node_modules/lodash/_getValue.js": function(e, o) {
            e.exports = function n(e, o) {
                return null == e ? void 0 : e[o]
            }
        },
        "./node_modules/lodash/_hasUnicode.js": function(e, o) {
            var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            e.exports = function s(e) {
                return n.test(e)
            }
        },
        "./node_modules/lodash/_hasUnicodeWord.js": function(e, o) {
            var n = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
            e.exports = function s(e) {
                return n.test(e)
            }
        },
        "./node_modules/lodash/_isIndex.js": function(e, o) {
            var n = /^(?:0|[1-9]\d*)$/;
            e.exports = function s(e, o) {
                var s = typeof e;
                return !!(o = null == o ? 9007199254740991 : o) && ("number" == s || "symbol" != s && n.test(e)) && e > -1 && e % 1 == 0 && e < o
            }
        },
        "./node_modules/lodash/_isIterateeCall.js": function(e, o, n) {
            var s = n("./node_modules/lodash/eq.js"),
                t = n("./node_modules/lodash/isArrayLike.js"),
                r = n("./node_modules/lodash/_isIndex.js"),
                d = n("./node_modules/lodash/isObject.js");
            e.exports = function a(e, o, n) {
                if (!d(n)) return !1;
                var a = typeof o;
                return !!("number" == a ? t(n) && r(o, n.length) : "string" == a && o in n) && s(n[o], e)
            }
        },
        "./node_modules/lodash/_isMasked.js": function(e, o, n) {
            var s, t = n("./node_modules/lodash/_coreJsData.js"),
                r = (s = /[^.]+$/.exec(t && t.keys && t.keys.IE_PROTO || "")) ? "Symbol(src)_1." + s : "";
            e.exports = function d(e) {
                return !!r && r in e
            }
        },
        "./node_modules/lodash/_isPrototype.js": function(e, o) {
            var n = Object.prototype;
            e.exports = function s(e) {
                var o = e && e.constructor;
                return e === ("function" == typeof o && o.prototype || n)
            }
        },
        "./node_modules/lodash/_nativeKeys.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_overArg.js")(Object.keys, Object);
            e.exports = s
        },
        "./node_modules/lodash/_nativeKeysIn.js": function(e, o) {
            e.exports = function n(e) {
                var o = [];
                if (null != e)
                    for (var n in Object(e)) o.push(n);
                return o
            }
        },
        "./node_modules/lodash/_nodeUtil.js": function(e, o, n) {
            (function(e) {
                var s = n("./node_modules/lodash/_freeGlobal.js"),
                    t = o && !o.nodeType && o,
                    r = t && "object" == typeof e && e && !e.nodeType && e,
                    d = r && r.exports === t && s.process,
                    a = function() {
                        try {
                            return d && d.binding && d.binding("util")
                        } catch (e) {}
                    }();
                e.exports = a
            }).call(this, n("./node_modules/webpack/buildin/module.js")(e))
        },
        "./node_modules/lodash/_objectToString.js": function(e, o) {
            var n = Object.prototype.toString;
            e.exports = function s(e) {
                return n.call(e)
            }
        },
        "./node_modules/lodash/_overArg.js": function(e, o) {
            e.exports = function n(e, o) {
                return function(n) {
                    return e(o(n))
                }
            }
        },
        "./node_modules/lodash/_overRest.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_apply.js"),
                t = Math.max;
            e.exports = function r(e, o, n) {
                return o = t(void 0 === o ? e.length - 1 : o, 0),
                    function() {
                        for (var r = arguments, d = -1, a = t(r.length - o, 0), u = Array(a); ++d < a;) u[d] = r[o + d];
                        d = -1;
                        for (var l = Array(o + 1); ++d < o;) l[d] = r[d];
                        return l[o] = n(u), s(e, this, l)
                    }
            }
        },
        "./node_modules/lodash/_reEscape.js": function(e, o) {
            e.exports = /<%-([\s\S]+?)%>/g
        },
        "./node_modules/lodash/_reEvaluate.js": function(e, o) {
            e.exports = /<%([\s\S]+?)%>/g
        },
        "./node_modules/lodash/_reInterpolate.js": function(e, o) {
            e.exports = /<%=([\s\S]+?)%>/g
        },
        "./node_modules/lodash/_root.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_freeGlobal.js"),
                t = "object" == typeof self && self && self.Object === Object && self,
                r = s || t || Function("return this")();
            e.exports = r
        },
        "./node_modules/lodash/_setToString.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseSetToString.js"),
                t = n("./node_modules/lodash/_shortOut.js")(s);
            e.exports = t
        },
        "./node_modules/lodash/_shortOut.js": function(e, o) {
            var n = Date.now;
            e.exports = function s(e) {
                var o = 0,
                    s = 0;
                return function() {
                    var t = n(),
                        r = 16 - (t - s);
                    if (s = t, r > 0) {
                        if (++o >= 800) return arguments[0]
                    } else o = 0;
                    return e.apply(void 0, arguments)
                }
            }
        },
        "./node_modules/lodash/_strictIndexOf.js": function(e, o) {
            e.exports = function n(e, o, s) {
                for (var t = s - 1, r = e.length; ++t < r;)
                    if (e[t] === o) return t;
                return -1
            }
        },
        "./node_modules/lodash/_stringSize.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_asciiSize.js"),
                t = n("./node_modules/lodash/_hasUnicode.js"),
                r = n("./node_modules/lodash/_unicodeSize.js");
            e.exports = function d(e) {
                return t(e) ? r(e) : s(e)
            }
        },
        "./node_modules/lodash/_stringToArray.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_asciiToArray.js"),
                t = n("./node_modules/lodash/_hasUnicode.js"),
                r = n("./node_modules/lodash/_unicodeToArray.js");
            e.exports = function d(e) {
                return t(e) ? r(e) : s(e)
            }
        },
        "./node_modules/lodash/_toSource.js": function(e, o) {
            var n = Function.prototype.toString;
            e.exports = function s(e) {
                if (null != e) {
                    try {
                        return n.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }
        },
        "./node_modules/lodash/_unescapeHtmlChar.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_basePropertyOf.js")({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            });
            e.exports = s
        },
        "./node_modules/lodash/_unicodeSize.js": function(e, o) {
            var n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                s = "\\ud83c[\\udffb-\\udfff]",
                t = "[^\\ud800-\\udfff]",
                r = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                d = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                a = "(?:" + n + "|" + s + ")?",
                u = "[\\ufe0e\\ufe0f]?" + a + "(?:\\u200d(?:" + [t, r, d].join("|") + ")[\\ufe0e\\ufe0f]?" + a + ")*",
                l = "(?:" + [t + n + "?", n, r, d, "[\\ud800-\\udfff]"].join("|") + ")",
                i = RegExp(s + "(?=" + s + ")|" + l + u, "g");
            e.exports = function c(e) {
                for (var o = i.lastIndex = 0; i.test(e);) ++o;
                return o
            }
        },
        "./node_modules/lodash/_unicodeToArray.js": function(e, o) {
            var n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                s = "\\ud83c[\\udffb-\\udfff]",
                t = "[^\\ud800-\\udfff]",
                r = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                d = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                a = "(?:" + n + "|" + s + ")?",
                u = "[\\ufe0e\\ufe0f]?" + a + "(?:\\u200d(?:" + [t, r, d].join("|") + ")[\\ufe0e\\ufe0f]?" + a + ")*",
                l = "(?:" + [t + n + "?", n, r, d, "[\\ud800-\\udfff]"].join("|") + ")",
                i = RegExp(s + "(?=" + s + ")|" + l + u, "g");
            e.exports = function c(e) {
                return e.match(i) || []
            }
        },
        "./node_modules/lodash/_unicodeWords.js": function(e, o) {
            var n = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                s = "[" + n + "]",
                t = "\\d+",
                r = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                d = "[^\\ud800-\\udfff" + n + t + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                l = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                i = "(?:" + r + "|" + d + ")",
                c = "(?:" + l + "|" + d + ")",
                m = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
                _ = "[\\ufe0e\\ufe0f]?" + m + "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + m + ")*",
                f = "(?:" + ["[\\u2700-\\u27bf]", a, u].join("|") + ")" + _,
                p = RegExp([l + "?" + r + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [s, l, "$"].join("|") + ")", c + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [s, l + i, "$"].join("|") + ")", l + "?" + i + "+(?:['’](?:d|ll|m|re|s|t|ve))?", l + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", t, f].join("|"), "g");
            e.exports = function j(e) {
                return e.match(p) || []
            }
        },
        "./node_modules/lodash/assignInWith.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_copyObject.js"),
                t = n("./node_modules/lodash/_createAssigner.js"),
                r = n("./node_modules/lodash/keysIn.js"),
                d = t(function(e, o, n, t) {
                    s(o, r(o), e, t)
                });
            e.exports = d
        },
        "./node_modules/lodash/attempt.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_apply.js"),
                t = n("./node_modules/lodash/_baseRest.js"),
                r = n("./node_modules/lodash/isError.js"),
                d = t(function(e, o) {
                    try {
                        return s(e, void 0, o)
                    } catch (e) {
                        return r(e) ? e : new Error(e)
                    }
                });
            e.exports = d
        },
        "./node_modules/lodash/camelCase.js": function(e, o, n) {
            var s = n("./node_modules/lodash/capitalize.js"),
                t = n("./node_modules/lodash/_createCompounder.js")(function(e, o, n) {
                    return o = o.toLowerCase(), e + (n ? s(o) : o)
                });
            e.exports = t
        },
        "./node_modules/lodash/capitalize.js": function(e, o, n) {
            var s = n("./node_modules/lodash/toString.js"),
                t = n("./node_modules/lodash/upperFirst.js");
            e.exports = function r(e) {
                return t(s(e).toLowerCase())
            }
        },
        "./node_modules/lodash/constant.js": function(e, o) {
            e.exports = function n(e) {
                return function() {
                    return e
                }
            }
        },
        "./node_modules/lodash/deburr.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_deburrLetter.js"),
                t = n("./node_modules/lodash/toString.js"),
                r = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                d = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
            e.exports = function a(e) {
                return (e = t(e)) && e.replace(r, s).replace(d, "")
            }
        },
        "./node_modules/lodash/endsWith.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseClamp.js"),
                t = n("./node_modules/lodash/_baseToString.js"),
                r = n("./node_modules/lodash/toInteger.js"),
                d = n("./node_modules/lodash/toString.js");
            e.exports = function a(e, o, n) {
                e = d(e), o = t(o);
                var a = e.length,
                    u = n = void 0 === n ? a : s(r(n), 0, a);
                return (n -= o.length) >= 0 && e.slice(n, u) == o
            }
        },
        "./node_modules/lodash/eq.js": function(e, o) {
            e.exports = function n(e, o) {
                return e === o || e != e && o != o
            }
        },
        "./node_modules/lodash/escape.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_escapeHtmlChar.js"),
                t = n("./node_modules/lodash/toString.js"),
                r = /[&<>"']/g,
                d = RegExp(r.source);
            e.exports = function a(e) {
                return (e = t(e)) && d.test(e) ? e.replace(r, s) : e
            }
        },
        "./node_modules/lodash/escapeRegExp.js": function(e, o, n) {
            var s = n("./node_modules/lodash/toString.js"),
                t = /[\\^$.*+?()[\]{}|]/g,
                r = RegExp(t.source);
            e.exports = function d(e) {
                return (e = s(e)) && r.test(e) ? e.replace(t, "\\$&") : e
            }
        },
        "./node_modules/lodash/identity.js": function(e, o) {
            e.exports = function n(e) {
                return e
            }
        },
        "./node_modules/lodash/isArguments.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseIsArguments.js"),
                t = n("./node_modules/lodash/isObjectLike.js"),
                r = Object.prototype,
                d = r.hasOwnProperty,
                a = r.propertyIsEnumerable,
                u = s(function() {
                    return arguments
                }()) ? s : function(e) {
                    return t(e) && d.call(e, "callee") && !a.call(e, "callee")
                };
            e.exports = u
        },
        "./node_modules/lodash/isArray.js": function(e, o) {
            var n = Array.isArray;
            e.exports = n
        },
        "./node_modules/lodash/isArrayLike.js": function(e, o, n) {
            var s = n("./node_modules/lodash/isFunction.js"),
                t = n("./node_modules/lodash/isLength.js");
            e.exports = function r(e) {
                return null != e && t(e.length) && !s(e)
            }
        },
        "./node_modules/lodash/isBuffer.js": function(e, o, n) {
            (function(e) {
                var s = n("./node_modules/lodash/_root.js"),
                    t = n("./node_modules/lodash/stubFalse.js"),
                    r = o && !o.nodeType && o,
                    d = r && "object" == typeof e && e && !e.nodeType && e,
                    a = d && d.exports === r ? s.Buffer : void 0,
                    u = (a ? a.isBuffer : void 0) || t;
                e.exports = u
            }).call(this, n("./node_modules/webpack/buildin/module.js")(e))
        },
        "./node_modules/lodash/isError.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseGetTag.js"),
                t = n("./node_modules/lodash/isObjectLike.js"),
                r = n("./node_modules/lodash/isPlainObject.js");
            e.exports = function d(e) {
                if (!t(e)) return !1;
                var o = s(e);
                return "[object Error]" == o || "[object DOMException]" == o || "string" == typeof e.message && "string" == typeof e.name && !r(e)
            }
        },
        "./node_modules/lodash/isFunction.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseGetTag.js"),
                t = n("./node_modules/lodash/isObject.js");
            e.exports = function r(e) {
                if (!t(e)) return !1;
                var o = s(e);
                return "[object Function]" == o || "[object GeneratorFunction]" == o || "[object AsyncFunction]" == o || "[object Proxy]" == o
            }
        },
        "./node_modules/lodash/isLength.js": function(e, o) {
            e.exports = function n(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }
        },
        "./node_modules/lodash/isObject.js": function(e, o) {
            e.exports = function n(e) {
                var o = typeof e;
                return null != e && ("object" == o || "function" == o)
            }
        },
        "./node_modules/lodash/isObjectLike.js": function(e, o) {
            e.exports = function n(e) {
                return null != e && "object" == typeof e
            }
        },
        "./node_modules/lodash/isPlainObject.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseGetTag.js"),
                t = n("./node_modules/lodash/_getPrototype.js"),
                r = n("./node_modules/lodash/isObjectLike.js"),
                d = Function.prototype,
                a = Object.prototype,
                u = d.toString,
                l = a.hasOwnProperty,
                i = u.call(Object);
            e.exports = function c(e) {
                if (!r(e) || "[object Object]" != s(e)) return !1;
                var o = t(e);
                if (null === o) return !0;
                var n = l.call(o, "constructor") && o.constructor;
                return "function" == typeof n && n instanceof n && u.call(n) == i
            }
        },
        "./node_modules/lodash/isRegExp.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseIsRegExp.js"),
                t = n("./node_modules/lodash/_baseUnary.js"),
                r = n("./node_modules/lodash/_nodeUtil.js"),
                d = r && r.isRegExp,
                a = d ? t(d) : s;
            e.exports = a
        },
        "./node_modules/lodash/isSymbol.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseGetTag.js"),
                t = n("./node_modules/lodash/isObjectLike.js");
            e.exports = function r(e) {
                return "symbol" == typeof e || t(e) && "[object Symbol]" == s(e)
            }
        },
        "./node_modules/lodash/isTypedArray.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseIsTypedArray.js"),
                t = n("./node_modules/lodash/_baseUnary.js"),
                r = n("./node_modules/lodash/_nodeUtil.js"),
                d = r && r.isTypedArray,
                a = d ? t(d) : s;
            e.exports = a
        },
        "./node_modules/lodash/kebabCase.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_createCompounder.js")(function(e, o, n) {
                return e + (n ? "-" : "") + o.toLowerCase()
            });
            e.exports = s
        },
        "./node_modules/lodash/keys.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_arrayLikeKeys.js"),
                t = n("./node_modules/lodash/_baseKeys.js"),
                r = n("./node_modules/lodash/isArrayLike.js");
            e.exports = function d(e) {
                return r(e) ? s(e) : t(e)
            }
        },
        "./node_modules/lodash/keysIn.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_arrayLikeKeys.js"),
                t = n("./node_modules/lodash/_baseKeysIn.js"),
                r = n("./node_modules/lodash/isArrayLike.js");
            e.exports = function d(e) {
                return r(e) ? s(e, !0) : t(e)
            }
        },
        "./node_modules/lodash/lowerCase.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_createCompounder.js")(function(e, o, n) {
                return e + (n ? " " : "") + o.toLowerCase()
            });
            e.exports = s
        },
        "./node_modules/lodash/lowerFirst.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_createCaseFirst.js")("toLowerCase");
            e.exports = s
        },
        "./node_modules/lodash/pad.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_createPadding.js"),
                t = n("./node_modules/lodash/_stringSize.js"),
                r = n("./node_modules/lodash/toInteger.js"),
                d = n("./node_modules/lodash/toString.js"),
                a = Math.ceil,
                u = Math.floor;
            e.exports = function l(e, o, n) {
                e = d(e);
                var l = (o = r(o)) ? t(e) : 0;
                if (!o || l >= o) return e;
                var i = (o - l) / 2;
                return s(u(i), n) + e + s(a(i), n)
            }
        },
        "./node_modules/lodash/padEnd.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_createPadding.js"),
                t = n("./node_modules/lodash/_stringSize.js"),
                r = n("./node_modules/lodash/toInteger.js"),
                d = n("./node_modules/lodash/toString.js");
            e.exports = function a(e, o, n) {
                e = d(e);
                var a = (o = r(o)) ? t(e) : 0;
                return o && a < o ? e + s(o - a, n) : e
            }
        },
        "./node_modules/lodash/padStart.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_createPadding.js"),
                t = n("./node_modules/lodash/_stringSize.js"),
                r = n("./node_modules/lodash/toInteger.js"),
                d = n("./node_modules/lodash/toString.js");
            e.exports = function a(e, o, n) {
                e = d(e);
                var a = (o = r(o)) ? t(e) : 0;
                return o && a < o ? s(o - a, n) + e : e
            }
        },
        "./node_modules/lodash/parseInt.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_root.js"),
                t = n("./node_modules/lodash/toString.js"),
                r = /^\s+/,
                d = s.parseInt;
            e.exports = function a(e, o, n) {
                return n || null == o ? o = 0 : o && (o = +o), d(t(e).replace(r, ""), o || 0)
            }
        },
        "./node_modules/lodash/repeat.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseRepeat.js"),
                t = n("./node_modules/lodash/_isIterateeCall.js"),
                r = n("./node_modules/lodash/toInteger.js"),
                d = n("./node_modules/lodash/toString.js");
            e.exports = function a(e, o, n) {
                return o = (n ? t(e, o, n) : void 0 === o) ? 1 : r(o), s(d(e), o)
            }
        },
        "./node_modules/lodash/replace.js": function(e, o, n) {
            var s = n("./node_modules/lodash/toString.js");
            e.exports = function t() {
                var e = arguments,
                    o = s(e[0]);
                return e.length < 3 ? o : o.replace(e[1], e[2])
            }
        },
        "./node_modules/lodash/snakeCase.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_createCompounder.js")(function(e, o, n) {
                return e + (n ? "_" : "") + o.toLowerCase()
            });
            e.exports = s
        },
        "./node_modules/lodash/split.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseToString.js"),
                t = n("./node_modules/lodash/_castSlice.js"),
                r = n("./node_modules/lodash/_hasUnicode.js"),
                d = n("./node_modules/lodash/_isIterateeCall.js"),
                a = n("./node_modules/lodash/isRegExp.js"),
                u = n("./node_modules/lodash/_stringToArray.js"),
                l = n("./node_modules/lodash/toString.js");
            e.exports = function i(e, o, n) {
                return n && "number" != typeof n && d(e, o, n) && (o = n = void 0), (n = void 0 === n ? 4294967295 : n >>> 0) ? (e = l(e)) && ("string" == typeof o || null != o && !a(o)) && !(o = s(o)) && r(e) ? t(u(e), 0, n) : e.split(o, n) : []
            }
        },
        "./node_modules/lodash/startCase.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_createCompounder.js"),
                t = n("./node_modules/lodash/upperFirst.js"),
                r = s(function(e, o, n) {
                    return e + (n ? " " : "") + t(o)
                });
            e.exports = r
        },
        "./node_modules/lodash/startsWith.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseClamp.js"),
                t = n("./node_modules/lodash/_baseToString.js"),
                r = n("./node_modules/lodash/toInteger.js"),
                d = n("./node_modules/lodash/toString.js");
            e.exports = function a(e, o, n) {
                return e = d(e), n = null == n ? 0 : s(r(n), 0, e.length), o = t(o), e.slice(n, n + o.length) == o
            }
        },
        "./node_modules/lodash/string.js": function(e, o, n) {
            e.exports = {
                camelCase: n("./node_modules/lodash/camelCase.js"),
                capitalize: n("./node_modules/lodash/capitalize.js"),
                deburr: n("./node_modules/lodash/deburr.js"),
                endsWith: n("./node_modules/lodash/endsWith.js"),
                escape: n("./node_modules/lodash/escape.js"),
                escapeRegExp: n("./node_modules/lodash/escapeRegExp.js"),
                kebabCase: n("./node_modules/lodash/kebabCase.js"),
                lowerCase: n("./node_modules/lodash/lowerCase.js"),
                lowerFirst: n("./node_modules/lodash/lowerFirst.js"),
                pad: n("./node_modules/lodash/pad.js"),
                padEnd: n("./node_modules/lodash/padEnd.js"),
                padStart: n("./node_modules/lodash/padStart.js"),
                parseInt: n("./node_modules/lodash/parseInt.js"),
                repeat: n("./node_modules/lodash/repeat.js"),
                replace: n("./node_modules/lodash/replace.js"),
                snakeCase: n("./node_modules/lodash/snakeCase.js"),
                split: n("./node_modules/lodash/split.js"),
                startCase: n("./node_modules/lodash/startCase.js"),
                startsWith: n("./node_modules/lodash/startsWith.js"),
                template: n("./node_modules/lodash/template.js"),
                templateSettings: n("./node_modules/lodash/templateSettings.js"),
                toLower: n("./node_modules/lodash/toLower.js"),
                toUpper: n("./node_modules/lodash/toUpper.js"),
                trim: n("./node_modules/lodash/trim.js"),
                trimEnd: n("./node_modules/lodash/trimEnd.js"),
                trimStart: n("./node_modules/lodash/trimStart.js"),
                truncate: n("./node_modules/lodash/truncate.js"),
                unescape: n("./node_modules/lodash/unescape.js"),
                upperCase: n("./node_modules/lodash/upperCase.js"),
                upperFirst: n("./node_modules/lodash/upperFirst.js"),
                words: n("./node_modules/lodash/words.js")
            }
        },
        "./node_modules/lodash/stubFalse.js": function(e, o) {
            e.exports = function n() {
                return !1
            }
        },
        "./node_modules/lodash/template.js": function(e, o, n) {
            var s = n("./node_modules/lodash/assignInWith.js"),
                t = n("./node_modules/lodash/attempt.js"),
                r = n("./node_modules/lodash/_baseValues.js"),
                d = n("./node_modules/lodash/_customDefaultsAssignIn.js"),
                a = n("./node_modules/lodash/_escapeStringChar.js"),
                u = n("./node_modules/lodash/isError.js"),
                l = n("./node_modules/lodash/_isIterateeCall.js"),
                i = n("./node_modules/lodash/keys.js"),
                c = n("./node_modules/lodash/_reInterpolate.js"),
                m = n("./node_modules/lodash/templateSettings.js"),
                _ = n("./node_modules/lodash/toString.js"),
                f = /\b__p \+= '';/g,
                p = /\b(__p \+=) '' \+/g,
                j = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                h = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                b = /($^)/,
                v = /['\n\r\u2028\u2029\\]/g;
            e.exports = function g(e, o, n) {
                var g = m.imports._.templateSettings || m;
                n && l(e, o, n) && (o = void 0), e = _(e), o = s({}, o, g, d);
                var y, x, S = s({}, o.imports, g.imports, d),
                    O = i(S),
                    k = r(S, O),
                    A = 0,
                    I = o.interpolate || b,
                    C = "__p += '",
                    T = RegExp((o.escape || b).source + "|" + I.source + "|" + (I === c ? h : b).source + "|" + (o.evaluate || b).source + "|$", "g"),
                    w = "sourceURL" in o ? "//# sourceURL=" + o.sourceURL + "\n" : "";
                e.replace(T, function(o, n, s, t, r, d) {
                    return s || (s = t), C += e.slice(A, d).replace(v, a), n && (y = !0, C += "' +\n__e(" + n + ") +\n'"), r && (x = !0, C += "';\n" + r + ";\n__p += '"), s && (C += "' +\n((__t = (" + s + ")) == null ? '' : __t) +\n'"), A = d + o.length, o
                }), C += "';\n";
                var N = o.variable;
                N || (C = "with (obj) {\n" + C + "\n}\n"), C = (x ? C.replace(f, "") : C).replace(p, "$1").replace(j, "$1;"), C = "function(" + (N || "obj") + ") {\n" + (N ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (y ? ", __e = _.escape" : "") + (x ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + C + "return __p\n}";
                var E = t(function() {
                    return Function(O, w + "return " + C).apply(void 0, k)
                });
                if (E.source = C, u(E)) throw E;
                return E
            }
        },
        "./node_modules/lodash/templateSettings.js": function(e, o, n) {
            var s = n("./node_modules/lodash/escape.js"),
                t = {
                    escape: n("./node_modules/lodash/_reEscape.js"),
                    evaluate: n("./node_modules/lodash/_reEvaluate.js"),
                    interpolate: n("./node_modules/lodash/_reInterpolate.js"),
                    variable: "",
                    imports: {
                        _: {
                            escape: s
                        }
                    }
                };
            e.exports = t
        },
        "./node_modules/lodash/toFinite.js": function(e, o, n) {
            var s = n("./node_modules/lodash/toNumber.js");
            e.exports = function t(e) {
                return e ? (e = s(e)) === 1 / 0 || e === -1 / 0 ? 1.7976931348623157e308 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
            }
        },
        "./node_modules/lodash/toInteger.js": function(e, o, n) {
            var s = n("./node_modules/lodash/toFinite.js");
            e.exports = function t(e) {
                var o = s(e),
                    n = o % 1;
                return o == o ? n ? o - n : o : 0
            }
        },
        "./node_modules/lodash/toLower.js": function(e, o, n) {
            var s = n("./node_modules/lodash/toString.js");
            e.exports = function t(e) {
                return s(e).toLowerCase()
            }
        },
        "./node_modules/lodash/toNumber.js": function(e, o, n) {
            var s = n("./node_modules/lodash/isObject.js"),
                t = n("./node_modules/lodash/isSymbol.js"),
                r = /^\s+|\s+$/g,
                d = /^[-+]0x[0-9a-f]+$/i,
                a = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                l = parseInt;
            e.exports = function i(e) {
                if ("number" == typeof e) return e;
                if (t(e)) return NaN;
                if (s(e)) {
                    var o = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = s(o) ? o + "" : o
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(r, "");
                var n = a.test(e);
                return n || u.test(e) ? l(e.slice(2), n ? 2 : 8) : d.test(e) ? NaN : +e
            }
        },
        "./node_modules/lodash/toString.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseToString.js");
            e.exports = function t(e) {
                return null == e ? "" : s(e)
            }
        },
        "./node_modules/lodash/toUpper.js": function(e, o, n) {
            var s = n("./node_modules/lodash/toString.js");
            e.exports = function t(e) {
                return s(e).toUpperCase()
            }
        },
        "./node_modules/lodash/trim.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseToString.js"),
                t = n("./node_modules/lodash/_castSlice.js"),
                r = n("./node_modules/lodash/_charsEndIndex.js"),
                d = n("./node_modules/lodash/_charsStartIndex.js"),
                a = n("./node_modules/lodash/_stringToArray.js"),
                u = n("./node_modules/lodash/toString.js"),
                l = /^\s+|\s+$/g;
            e.exports = function i(e, o, n) {
                if ((e = u(e)) && (n || void 0 === o)) return e.replace(l, "");
                if (!e || !(o = s(o))) return e;
                var i = a(e),
                    c = a(o),
                    m = d(i, c),
                    _ = r(i, c) + 1;
                return t(i, m, _).join("")
            }
        },
        "./node_modules/lodash/trimEnd.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseToString.js"),
                t = n("./node_modules/lodash/_castSlice.js"),
                r = n("./node_modules/lodash/_charsEndIndex.js"),
                d = n("./node_modules/lodash/_stringToArray.js"),
                a = n("./node_modules/lodash/toString.js"),
                u = /\s+$/;
            e.exports = function l(e, o, n) {
                if ((e = a(e)) && (n || void 0 === o)) return e.replace(u, "");
                if (!e || !(o = s(o))) return e;
                var l = d(e),
                    i = r(l, d(o)) + 1;
                return t(l, 0, i).join("")
            }
        },
        "./node_modules/lodash/trimStart.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseToString.js"),
                t = n("./node_modules/lodash/_castSlice.js"),
                r = n("./node_modules/lodash/_charsStartIndex.js"),
                d = n("./node_modules/lodash/_stringToArray.js"),
                a = n("./node_modules/lodash/toString.js"),
                u = /^\s+/;
            e.exports = function l(e, o, n) {
                if ((e = a(e)) && (n || void 0 === o)) return e.replace(u, "");
                if (!e || !(o = s(o))) return e;
                var l = d(e),
                    i = r(l, d(o));
                return t(l, i).join("")
            }
        },
        "./node_modules/lodash/truncate.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_baseToString.js"),
                t = n("./node_modules/lodash/_castSlice.js"),
                r = n("./node_modules/lodash/_hasUnicode.js"),
                d = n("./node_modules/lodash/isObject.js"),
                a = n("./node_modules/lodash/isRegExp.js"),
                u = n("./node_modules/lodash/_stringSize.js"),
                l = n("./node_modules/lodash/_stringToArray.js"),
                i = n("./node_modules/lodash/toInteger.js"),
                c = n("./node_modules/lodash/toString.js"),
                m = /\w*$/;
            e.exports = function _(e, o) {
                var n = 30,
                    _ = "...";
                if (d(o)) {
                    var f = "separator" in o ? o.separator : f;
                    n = "length" in o ? i(o.length) : n, _ = "omission" in o ? s(o.omission) : _
                }
                var p = (e = c(e)).length;
                if (r(e)) {
                    var j = l(e);
                    p = j.length
                }
                if (n >= p) return e;
                var h = n - u(_);
                if (h < 1) return _;
                var b = j ? t(j, 0, h).join("") : e.slice(0, h);
                if (void 0 === f) return b + _;
                if (j && (h += b.length - h), a(f)) {
                    if (e.slice(h).search(f)) {
                        var v, g = b;
                        for (f.global || (f = RegExp(f.source, c(m.exec(f)) + "g")), f.lastIndex = 0; v = f.exec(g);) var y = v.index;
                        b = b.slice(0, void 0 === y ? h : y)
                    }
                } else if (e.indexOf(s(f), h) != h) {
                    var x = b.lastIndexOf(f);
                    x > -1 && (b = b.slice(0, x))
                }
                return b + _
            }
        },
        "./node_modules/lodash/unescape.js": function(e, o, n) {
            var s = n("./node_modules/lodash/toString.js"),
                t = n("./node_modules/lodash/_unescapeHtmlChar.js"),
                r = /&(?:amp|lt|gt|quot|#39);/g,
                d = RegExp(r.source);
            e.exports = function a(e) {
                return (e = s(e)) && d.test(e) ? e.replace(r, t) : e
            }
        },
        "./node_modules/lodash/upperCase.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_createCompounder.js")(function(e, o, n) {
                return e + (n ? " " : "") + o.toUpperCase()
            });
            e.exports = s
        },
        "./node_modules/lodash/upperFirst.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_createCaseFirst.js")("toUpperCase");
            e.exports = s
        },
        "./node_modules/lodash/words.js": function(e, o, n) {
            var s = n("./node_modules/lodash/_asciiWords.js"),
                t = n("./node_modules/lodash/_hasUnicodeWord.js"),
                r = n("./node_modules/lodash/toString.js"),
                d = n("./node_modules/lodash/_unicodeWords.js");
            e.exports = function a(e, o, n) {
                return e = r(e), void 0 === (o = n ? void 0 : o) ? t(e) ? d(e) : s(e) : e.match(o) || []
            }
        },
        "./node_modules/react-apollo/react-apollo.browser.umd.js": function(e, o, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-apollo/react-apollo.browser.umd.js")
        },
        "./node_modules/react-redux/es/index.js": function(e, o, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react-redux/es/index.js")
        },
        "./node_modules/react/index.js": function(e, o, n) {
            e.exports = n("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./node_modules/webpack/buildin/global.js": function(e, o) {
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
        "./node_modules/webpack/buildin/module.js": function(e, o) {
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
        "./packages/common/logging/logging.jsx": function(e, o, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/logging/logging.jsx")
        },
        "./packages/common/state/state.jsx": function(e, o, n) {
            e.exports = n("dll-reference @ta/common.global")("./packages/common/state/state.jsx")
        },
        "./packages/social/content-removal/index.jsx": function(e, o, n) {
            "use strict";
            n.r(o);
            var s = n("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),
                t = new(n("./packages/common/state/state.jsx").PrivateStateAccessor)("suppressed-content-state", {
                    suppressedContent: []
                }),
                r = function e(o) {
                    return t.getFrom(o)
                },
                d = {
                    suppressContent: function e(o, n) {
                        return t.action({
                            type: "SUPPRESS_CONTENT",
                            contentType: o,
                            id: n
                        })
                    }
                };
            t.setReducer(function(e, o) {
                switch (o.type) {
                    case "SUPPRESS_CONTENT":
                        return {
                            suppressedContent: [].concat(Object(s.a)(e.suppressedContent), [
                                [o.contentType, o.id]
                            ])
                        };
                    default:
                        return e
                }
            });
            var a = n("./node_modules/@babel/runtime/helpers/esm/extends.js"),
                u = n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                l = n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                i = n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                c = n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                m = n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                _ = n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                f = n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                p = n("./node_modules/react/index.js"),
                j = n("./node_modules/react-redux/es/index.js"),
                h = n("./node_modules/react-apollo/react-apollo.browser.umd.js"),
                b = n("./packages/common/logging/logging.jsx"),
                v = n.n(b),
                g = n("./node_modules/lodash/string.js"),
                y = function e(o) {
                    return Object(g.snakeCase)(o).toUpperCase()
                },
                x = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "RemoveContent"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "contentType"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ContentTypeInput"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "removeContent"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "type"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "contentType"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "id"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "userId"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "userId"
                                        }
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 154
                    }
                };
            x.loc.source = {
                body: "86d103bbe52c"
            };
            var S = x,
                O = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "ContributionCountQuery"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "memberProfile"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "userId"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "id"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "userId"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: {
                                            kind: "Name",
                                            value: "userId"
                                        },
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [{
                                            kind: "Directive",
                                            name: {
                                                kind: "Name",
                                                value: "static"
                                            },
                                            arguments: []
                                        }]
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "contributionCounts"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sumAllUgc"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sumReview"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sumMedia"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "repost"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "forumPost"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "linkPost"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "photo"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "video"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "trip"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 278
                    }
                };
            O.loc.source = {
                body: "7667fc17bbf7"
            };
            var k = O,
                A = function(e) {
                    function o() {
                        var e, n;
                        Object(u.a)(this, o);
                        for (var s = arguments.length, t = new Array(s), r = 0; r < s; r++) t[r] = arguments[r];
                        return n = Object(i.a)(this, (e = Object(c.a)(o)).call.apply(e, [this].concat(t))), Object(f.a)(Object(_.a)(Object(_.a)(n)), "deleteObject", function(e, o) {
                            var s = n.props,
                                t = s.removeContentApiCall,
                                r = s.suppressContent,
                                d = s.loggedInUserId,
                                a = y(e);
                            if (!a) throw new Error("Attempted to remove content ".concat(e, ":").concat(o, " but it does not have a corresponding service call"));
                            if (!d) throw new Error("Attempted to remove content type ".concat(e, ":").concat(o, " but the user is not logged in"));
                            t(a, o).then(function(n) {
                                var s = n.error,
                                    t = n.data;
                                if (s || null == (null == t ? void 0 : t.removeContent)) throw new Error("A service occurred while attempting to remove content: ".concat(s));
                                r(e, o)
                            }).catch(function(e) {
                                return v.a.error("Content removal failed. Reason: ".concat(e))
                            })
                        }), n
                    }
                    return Object(m.a)(o, e), Object(l.a)(o, [{
                        key: "render",
                        value: function e() {
                            return this.props.children(this.deleteObject)
                        }
                    }]), o
                }(p.Component),
                I = Object(j.connect)(function(e, o) {
                    return {
                        loggedInUserId: e.auth.loggedInUserId
                    }
                }, {
                    suppressContent: d.suppressContent
                })(function e(o) {
                    return p.createElement(h.Mutation, {
                        mutation: S,
                        awaitRefetchQueries: !0,
                        errorPolicy: "all",
                        refetchQueries: function e(n) {
                            var s = n.error,
                                t = n.data;
                            return s || null === (null == t ? void 0 : t.removeContent) || !o.loggedInUserId ? [] : [{
                                query: k,
                                variables: {
                                    userId: o.loggedInUserId
                                }
                            }]
                        }
                    }, function(e) {
                        return p.createElement(A, Object(a.a)({}, o, {
                            removeContentApiCall: function n(s, t) {
                                return e({
                                    variables: {
                                        contentType: s,
                                        id: t,
                                        userId: o.loggedInUserId
                                    }
                                })
                            }
                        }))
                    })
                });
            n.d(o, "getState", function() {
                return r
            }), n.d(o, "DeleteAction", function() {
                return I
            })
        },
        "dll-reference @ta/common.global": function(o, n) {
            o.exports = e
        }
    })
});
//# sourceMappingURL=social.content-removal.1586c1a1f2.js.map