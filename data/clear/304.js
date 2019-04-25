define("@ta/common.photo-carousel", ["@ta/common.indicator-dots", "@ta/common.loadable", "@ta/media.image", "@ta/styleguide.icon", "@ta/common.global"], function(e, o, t, s, n) {
    return function(e) {
        var o = {};

        function t(s) {
            if (o[s]) return o[s].exports;
            var n = o[s] = {
                i: s,
                l: !1,
                exports: {}
            };
            return e[s].call(n.exports, n, n.exports, t), n.l = !0, n.exports
        }
        return t.m = e, t.c = o, t.d = function(e, o, s) {
            t.o(e, o) || Object.defineProperty(e, o, {
                enumerable: !0,
                get: s
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, o) {
            if (1 & o && (e = t(e)), 8 & o) return e;
            if (4 & o && "object" == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if (t.r(s), Object.defineProperty(s, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & o && "string" != typeof e)
                for (var n in e) t.d(s, n, function(o) {
                    return e[o]
                }.bind(null, n));
            return s
        }, t.n = function(e) {
            var o = e && e.__esModule ? function o() {
                return e.default
            } : function o() {
                return e
            };
            return t.d(o, "a", o), o
        }, t.o = function(e, o) {
            return Object.prototype.hasOwnProperty.call(e, o)
        }, t.p = "", t(t.s = "./packages/common/photo-carousel/photo-carousel.jsx")
    }({
        "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js": function(e, o, t) {
            "use strict";

            function s(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            t.d(o, "a", function() {
                return s
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js": function(e, o, t) {
            "use strict";

            function s(e, o) {
                if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
            }
            t.d(o, "a", function() {
                return s
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/createClass.js": function(e, o, t) {
            "use strict";

            function s(e, o) {
                for (var t = 0; t < o.length; t++) {
                    var s = o[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function n(e, o, t) {
                return o && s(e.prototype, o), t && s(e, t), e
            }
            t.d(o, "a", function() {
                return n
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/defineProperty.js": function(e, o, t) {
            "use strict";

            function s(e, o, t) {
                return o in e ? Object.defineProperty(e, o, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = t, e
            }
            t.d(o, "a", function() {
                return s
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js": function(e, o, t) {
            "use strict";

            function s(e) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function e(o) {
                    return o.__proto__ || Object.getPrototypeOf(o)
                })(e)
            }
            t.d(o, "a", function() {
                return s
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/inherits.js": function(e, o, t) {
            "use strict";
            t.d(o, "a", function() {
                return n
            });
            var s = t("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

            function n(e, o) {
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
        "./node_modules/@babel/runtime/helpers/esm/objectSpread.js": function(e, o, t) {
            "use strict";
            t.d(o, "a", function() {
                return n
            });
            var s = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

            function n(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var t = null != arguments[o] ? arguments[o] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.forEach(function(o) {
                        Object(s.a)(e, o, t[o])
                    })
                }
                return e
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js": function(e, o, t) {
            "use strict";
            t.d(o, "a", function() {
                return r
            });
            var s = t("./node_modules/@babel/runtime/helpers/esm/typeof.js"),
                n = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");

            function r(e, o) {
                return !o || "object" !== Object(s.a)(o) && "function" != typeof o ? Object(n.a)(e) : o
            }
        },
        "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js": function(e, o, t) {
            "use strict";

            function s(e, o) {
                return (s = Object.setPrototypeOf || function e(o, t) {
                    return o.__proto__ = t, o
                })(e, o)
            }
            t.d(o, "a", function() {
                return s
            })
        },
        "./node_modules/@babel/runtime/helpers/esm/typeof.js": function(e, o, t) {
            "use strict";

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function e(o) {
                    return typeof o
                } : function e(o) {
                    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
                })(e)
            }

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" === s(Symbol.iterator) ? function e(o) {
                    return s(o)
                } : function e(o) {
                    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : s(o)
                })(e)
            }
            t.d(o, "a", function() {
                return n
            })
        },
        "./node_modules/lodash/_Hash.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_hashClear.js"),
                n = t("./node_modules/lodash/_hashDelete.js"),
                r = t("./node_modules/lodash/_hashGet.js"),
                a = t("./node_modules/lodash/_hashHas.js"),
                l = t("./node_modules/lodash/_hashSet.js");

            function u(e) {
                var o = -1,
                    t = null == e ? 0 : e.length;
                for (this.clear(); ++o < t;) {
                    var s = e[o];
                    this.set(s[0], s[1])
                }
            }
            u.prototype.clear = s, u.prototype.delete = n, u.prototype.get = r, u.prototype.has = a, u.prototype.set = l, e.exports = u
        },
        "./node_modules/lodash/_ListCache.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_listCacheClear.js"),
                n = t("./node_modules/lodash/_listCacheDelete.js"),
                r = t("./node_modules/lodash/_listCacheGet.js"),
                a = t("./node_modules/lodash/_listCacheHas.js"),
                l = t("./node_modules/lodash/_listCacheSet.js");

            function u(e) {
                var o = -1,
                    t = null == e ? 0 : e.length;
                for (this.clear(); ++o < t;) {
                    var s = e[o];
                    this.set(s[0], s[1])
                }
            }
            u.prototype.clear = s, u.prototype.delete = n, u.prototype.get = r, u.prototype.has = a, u.prototype.set = l, e.exports = u
        },
        "./node_modules/lodash/_Map.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_getNative.js")(t("./node_modules/lodash/_root.js"), "Map");
            e.exports = s
        },
        "./node_modules/lodash/_MapCache.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_mapCacheClear.js"),
                n = t("./node_modules/lodash/_mapCacheDelete.js"),
                r = t("./node_modules/lodash/_mapCacheGet.js"),
                a = t("./node_modules/lodash/_mapCacheHas.js"),
                l = t("./node_modules/lodash/_mapCacheSet.js");

            function u(e) {
                var o = -1,
                    t = null == e ? 0 : e.length;
                for (this.clear(); ++o < t;) {
                    var s = e[o];
                    this.set(s[0], s[1])
                }
            }
            u.prototype.clear = s, u.prototype.delete = n, u.prototype.get = r, u.prototype.has = a, u.prototype.set = l, e.exports = u
        },
        "./node_modules/lodash/_Symbol.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_root.js").Symbol;
            e.exports = s
        },
        "./node_modules/lodash/_arrayMap.js": function(e, o) {
            e.exports = function t(e, o) {
                for (var t = -1, s = null == e ? 0 : e.length, n = Array(s); ++t < s;) n[t] = o(e[t], t, e);
                return n
            }
        },
        "./node_modules/lodash/_assocIndexOf.js": function(e, o, t) {
            var s = t("./node_modules/lodash/eq.js");
            e.exports = function n(e, o) {
                for (var t = e.length; t--;)
                    if (s(e[t][0], o)) return t;
                return -1
            }
        },
        "./node_modules/lodash/_baseGet.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_castPath.js"),
                n = t("./node_modules/lodash/_toKey.js");
            e.exports = function r(e, o) {
                for (var t = 0, r = (o = s(o, e)).length; null != e && t < r;) e = e[n(o[t++])];
                return t && t == r ? e : void 0
            }
        },
        "./node_modules/lodash/_baseGetTag.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_Symbol.js"),
                n = t("./node_modules/lodash/_getRawTag.js"),
                r = t("./node_modules/lodash/_objectToString.js"),
                a = s ? s.toStringTag : void 0;
            e.exports = function l(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? n(e) : r(e)
            }
        },
        "./node_modules/lodash/_baseIsNative.js": function(e, o, t) {
            var s = t("./node_modules/lodash/isFunction.js"),
                n = t("./node_modules/lodash/_isMasked.js"),
                r = t("./node_modules/lodash/isObject.js"),
                a = t("./node_modules/lodash/_toSource.js"),
                l = /^\[object .+?Constructor\]$/,
                u = Function.prototype,
                i = Object.prototype,
                c = u.toString,
                d = i.hasOwnProperty,
                h = RegExp("^" + c.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function p(e) {
                return !(!r(e) || n(e)) && (s(e) ? h : l).test(a(e))
            }
        },
        "./node_modules/lodash/_baseToString.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_Symbol.js"),
                n = t("./node_modules/lodash/_arrayMap.js"),
                r = t("./node_modules/lodash/isArray.js"),
                a = t("./node_modules/lodash/isSymbol.js"),
                l = s ? s.prototype : void 0,
                u = l ? l.toString : void 0;
            e.exports = function e(o) {
                if ("string" == typeof o) return o;
                if (r(o)) return n(o, e) + "";
                if (a(o)) return u ? u.call(o) : "";
                var t = o + "";
                return "0" == t && 1 / o == -1 / 0 ? "-0" : t
            }
        },
        "./node_modules/lodash/_castPath.js": function(e, o, t) {
            var s = t("./node_modules/lodash/isArray.js"),
                n = t("./node_modules/lodash/_isKey.js"),
                r = t("./node_modules/lodash/_stringToPath.js"),
                a = t("./node_modules/lodash/toString.js");
            e.exports = function l(e, o) {
                return s(e) ? e : n(e, o) ? [e] : r(a(e))
            }
        },
        "./node_modules/lodash/_coreJsData.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_root.js")["__core-js_shared__"];
            e.exports = s
        },
        "./node_modules/lodash/_freeGlobal.js": function(e, o, t) {
            (function(o) {
                var t = "object" == typeof o && o && o.Object === Object && o;
                e.exports = t
            }).call(this, t("./node_modules/webpack/buildin/global.js"))
        },
        "./node_modules/lodash/_getMapData.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_isKeyable.js");
            e.exports = function n(e, o) {
                var t = e.__data__;
                return s(o) ? t["string" == typeof o ? "string" : "hash"] : t.map
            }
        },
        "./node_modules/lodash/_getNative.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_baseIsNative.js"),
                n = t("./node_modules/lodash/_getValue.js");
            e.exports = function r(e, o) {
                var t = n(e, o);
                return s(t) ? t : void 0
            }
        },
        "./node_modules/lodash/_getRawTag.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_Symbol.js"),
                n = Object.prototype,
                r = n.hasOwnProperty,
                a = n.toString,
                l = s ? s.toStringTag : void 0;
            e.exports = function u(e) {
                var o = r.call(e, l),
                    t = e[l];
                try {
                    e[l] = void 0;
                    var s = !0
                } catch (e) {}
                var n = a.call(e);
                return s && (o ? e[l] = t : delete e[l]), n
            }
        },
        "./node_modules/lodash/_getValue.js": function(e, o) {
            e.exports = function t(e, o) {
                return null == e ? void 0 : e[o]
            }
        },
        "./node_modules/lodash/_hashClear.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_nativeCreate.js");
            e.exports = function n() {
                this.__data__ = s ? s(null) : {}, this.size = 0
            }
        },
        "./node_modules/lodash/_hashDelete.js": function(e, o) {
            e.exports = function t(e) {
                var o = this.has(e) && delete this.__data__[e];
                return this.size -= o ? 1 : 0, o
            }
        },
        "./node_modules/lodash/_hashGet.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_nativeCreate.js"),
                n = Object.prototype.hasOwnProperty;
            e.exports = function r(e) {
                var o = this.__data__;
                if (s) {
                    var t = o[e];
                    return "__lodash_hash_undefined__" === t ? void 0 : t
                }
                return n.call(o, e) ? o[e] : void 0
            }
        },
        "./node_modules/lodash/_hashHas.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_nativeCreate.js"),
                n = Object.prototype.hasOwnProperty;
            e.exports = function r(e) {
                var o = this.__data__;
                return s ? void 0 !== o[e] : n.call(o, e)
            }
        },
        "./node_modules/lodash/_hashSet.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_nativeCreate.js");
            e.exports = function n(e, o) {
                var t = this.__data__;
                return this.size += this.has(e) ? 0 : 1, t[e] = s && void 0 === o ? "__lodash_hash_undefined__" : o, this
            }
        },
        "./node_modules/lodash/_isKey.js": function(e, o, t) {
            var s = t("./node_modules/lodash/isArray.js"),
                n = t("./node_modules/lodash/isSymbol.js"),
                r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                a = /^\w*$/;
            e.exports = function l(e, o) {
                if (s(e)) return !1;
                var t = typeof e;
                return !("number" != t && "symbol" != t && "boolean" != t && null != e && !n(e)) || a.test(e) || !r.test(e) || null != o && e in Object(o)
            }
        },
        "./node_modules/lodash/_isKeyable.js": function(e, o) {
            e.exports = function t(e) {
                var o = typeof e;
                return "string" == o || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== e : null === e
            }
        },
        "./node_modules/lodash/_isMasked.js": function(e, o, t) {
            var s, n = t("./node_modules/lodash/_coreJsData.js"),
                r = (s = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + s : "";
            e.exports = function a(e) {
                return !!r && r in e
            }
        },
        "./node_modules/lodash/_listCacheClear.js": function(e, o) {
            e.exports = function t() {
                this.__data__ = [], this.size = 0
            }
        },
        "./node_modules/lodash/_listCacheDelete.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_assocIndexOf.js"),
                n = Array.prototype.splice;
            e.exports = function r(e) {
                var o = this.__data__,
                    t = s(o, e);
                return !(t < 0 || (t == o.length - 1 ? o.pop() : n.call(o, t, 1), --this.size, 0))
            }
        },
        "./node_modules/lodash/_listCacheGet.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_assocIndexOf.js");
            e.exports = function n(e) {
                var o = this.__data__,
                    t = s(o, e);
                return t < 0 ? void 0 : o[t][1]
            }
        },
        "./node_modules/lodash/_listCacheHas.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_assocIndexOf.js");
            e.exports = function n(e) {
                return s(this.__data__, e) > -1
            }
        },
        "./node_modules/lodash/_listCacheSet.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_assocIndexOf.js");
            e.exports = function n(e, o) {
                var t = this.__data__,
                    n = s(t, e);
                return n < 0 ? (++this.size, t.push([e, o])) : t[n][1] = o, this
            }
        },
        "./node_modules/lodash/_mapCacheClear.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_Hash.js"),
                n = t("./node_modules/lodash/_ListCache.js"),
                r = t("./node_modules/lodash/_Map.js");
            e.exports = function a() {
                this.size = 0, this.__data__ = {
                    hash: new s,
                    map: new(r || n),
                    string: new s
                }
            }
        },
        "./node_modules/lodash/_mapCacheDelete.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_getMapData.js");
            e.exports = function n(e) {
                var o = s(this, e).delete(e);
                return this.size -= o ? 1 : 0, o
            }
        },
        "./node_modules/lodash/_mapCacheGet.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_getMapData.js");
            e.exports = function n(e) {
                return s(this, e).get(e)
            }
        },
        "./node_modules/lodash/_mapCacheHas.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_getMapData.js");
            e.exports = function n(e) {
                return s(this, e).has(e)
            }
        },
        "./node_modules/lodash/_mapCacheSet.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_getMapData.js");
            e.exports = function n(e, o) {
                var t = s(this, e),
                    n = t.size;
                return t.set(e, o), this.size += t.size == n ? 0 : 1, this
            }
        },
        "./node_modules/lodash/_memoizeCapped.js": function(e, o, t) {
            var s = t("./node_modules/lodash/memoize.js");
            e.exports = function n(e) {
                var o = s(e, function(e) {
                        return 500 === t.size && t.clear(), e
                    }),
                    t = o.cache;
                return o
            }
        },
        "./node_modules/lodash/_nativeCreate.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_getNative.js")(Object, "create");
            e.exports = s
        },
        "./node_modules/lodash/_objectToString.js": function(e, o) {
            var t = Object.prototype.toString;
            e.exports = function s(e) {
                return t.call(e)
            }
        },
        "./node_modules/lodash/_root.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_freeGlobal.js"),
                n = "object" == typeof self && self && self.Object === Object && self,
                r = s || n || Function("return this")();
            e.exports = r
        },
        "./node_modules/lodash/_stringToPath.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_memoizeCapped.js"),
                n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                r = /\\(\\)?/g,
                a = s(function(e) {
                    var o = [];
                    return 46 === e.charCodeAt(0) && o.push(""), e.replace(n, function(e, t, s, n) {
                        o.push(s ? n.replace(r, "$1") : t || e)
                    }), o
                });
            e.exports = a
        },
        "./node_modules/lodash/_toKey.js": function(e, o, t) {
            var s = t("./node_modules/lodash/isSymbol.js");
            e.exports = function n(e) {
                if ("string" == typeof e || s(e)) return e;
                var o = e + "";
                return "0" == o && 1 / e == -1 / 0 ? "-0" : o
            }
        },
        "./node_modules/lodash/_toSource.js": function(e, o) {
            var t = Function.prototype.toString;
            e.exports = function s(e) {
                if (null != e) {
                    try {
                        return t.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }
        },
        "./node_modules/lodash/eq.js": function(e, o) {
            e.exports = function t(e, o) {
                return e === o || e != e && o != o
            }
        },
        "./node_modules/lodash/get.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_baseGet.js");
            e.exports = function n(e, o, t) {
                var n = null == e ? void 0 : s(e, o);
                return void 0 === n ? t : n
            }
        },
        "./node_modules/lodash/isArray.js": function(e, o) {
            var t = Array.isArray;
            e.exports = t
        },
        "./node_modules/lodash/isFunction.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_baseGetTag.js"),
                n = t("./node_modules/lodash/isObject.js");
            e.exports = function r(e) {
                if (!n(e)) return !1;
                var o = s(e);
                return "[object Function]" == o || "[object GeneratorFunction]" == o || "[object AsyncFunction]" == o || "[object Proxy]" == o
            }
        },
        "./node_modules/lodash/isObject.js": function(e, o) {
            e.exports = function t(e) {
                var o = typeof e;
                return null != e && ("object" == o || "function" == o)
            }
        },
        "./node_modules/lodash/isObjectLike.js": function(e, o) {
            e.exports = function t(e) {
                return null != e && "object" == typeof e
            }
        },
        "./node_modules/lodash/isSymbol.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_baseGetTag.js"),
                n = t("./node_modules/lodash/isObjectLike.js");
            e.exports = function r(e) {
                return "symbol" == typeof e || n(e) && "[object Symbol]" == s(e)
            }
        },
        "./node_modules/lodash/memoize.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_MapCache.js"),
                n = "Expected a function";

            function r(e, o) {
                if ("function" != typeof e || null != o && "function" != typeof o) throw new TypeError(n);
                var t = function() {
                    var s = arguments,
                        n = o ? o.apply(this, s) : s[0],
                        r = t.cache;
                    if (r.has(n)) return r.get(n);
                    var a = e.apply(this, s);
                    return t.cache = r.set(n, a) || r, a
                };
                return t.cache = new(r.Cache || s), t
            }
            r.Cache = s, e.exports = r
        },
        "./node_modules/lodash/toString.js": function(e, o, t) {
            var s = t("./node_modules/lodash/_baseToString.js");
            e.exports = function n(e) {
                return null == e ? "" : s(e)
            }
        },
        "./node_modules/react/index.js": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./node_modules/react/index.js")
        },
        "./node_modules/webpack/buildin/global.js": function(e, o) {
            var t;
            t = function() {
                return this
            }();
            try {
                t = t || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (t = window)
            }
            e.exports = t
        },
        "./packages/common/classnames/classnames.jsx": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/classnames/classnames.jsx")
        },
        "./packages/common/i18n/i18n.jsx": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/i18n/i18n.jsx")
        },
        "./packages/common/photo-carousel/photo-carousel.jsx": function(e, o, t) {
            "use strict";
            t.r(o);
            var s = t("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),
                n = t("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),
                r = t("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),
                a = t("./node_modules/@babel/runtime/helpers/esm/createClass.js"),
                l = t("./node_modules/@babel/runtime/helpers/esm/inherits.js"),
                u = t("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),
                i = t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                c = t("./node_modules/react/index.js"),
                d = t("./node_modules/lodash/get.js"),
                h = t.n(d),
                p = t("./packages/common/classnames/classnames.jsx"),
                m = t.n(p),
                _ = t("./packages/common/i18n/i18n.jsx"),
                f = t("@ta/common.loadable"),
                j = t.n(f),
                b = t("./packages/common/state/state.jsx"),
                v = t("@ta/media.image"),
                g = t("@ta/styleguide.icon"),
                y = t("@ta/common.indicator-dots"),
                x = t.n(y),
                O = function e(o) {
                    return c.createElement("div", {
                        className: "common-photo-carousel-CarouselProgress__container--3y8KU"
                    }, c.createElement("span", {
                        className: "common-photo-carousel-CarouselProgress__text--1Urck"
                    }, Object(_.localize)("carousel_progress_numbers", {
                        photos: o.currentIndex,
                        totalPhotos: o.numItems
                    })))
                },
                C = t("./node_modules/@babel/runtime/helpers/esm/objectSpread.js"),
                S = {},
                w = new b.PrivateStateAccessor("photo-carousel", S);
            w.setReducer(function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
                    o = arguments.length > 1 ? arguments[1] : void 0;
                switch (o.type) {
                    case "registerState":
                        var t = o.uniqueId,
                            s = {
                                currentIndex: o.newIndex,
                                hasWrapped: o.hasWrapped
                            },
                            n = Object(C.a)({}, e);
                        return n[t] = s, n;
                    default:
                        return e
                }
            });
            var P = .1,
                I = 2,
                k = function e(o) {
                    return function e(o) {
                        return w.getFrom(o)
                    }(Object(b.getStore)().getState())[o]
                },
                E = function e(o) {
                    var t, s = o.isRight,
                        n = o.size,
                        r = o.onClick,
                        a = o.disabled,
                        l = o.allowOverClicking;
                    if (a) {
                        if (l) return null;
                        t = s ? "common-photo-carousel-PhotoCarousel__rightNavDisabled--2ctBk" : "common-photo-carousel-PhotoCarousel__leftNavDisabled--2BucD"
                    } else t = s ? "common-photo-carousel-PhotoCarousel__rightNav--2ArFZ" : "common-photo-carousel-PhotoCarousel__leftNav--2oc4m";
                    var u = n && "small" === n ? "common-photo-carousel-PhotoCarousel__small--2F3V3" : null;
                    return c.createElement("div", {
                        className: m()(t, u, "is-shown-at-tablet"),
                        onClick: r,
                        "data-clicksource": "CarouselArrow"
                    })
                },
                M = function(e) {
                    function o(e) {
                        var t;
                        Object(s.a)(this, o), t = Object(n.a)(this, Object(r.a)(o).call(this, e)), Object(i.a)(Object(u.a)(Object(u.a)(t)), "swallow", function(e) {
                            e.stopPropagation()
                        }), Object(i.a)(Object(u.a)(Object(u.a)(t)), "previous", function(e) {
                            e.stopPropagation(), e.preventDefault(), t.nav(-1, !0)
                        }), Object(i.a)(Object(u.a)(Object(u.a)(t)), "next", function(e) {
                            e.stopPropagation(), e.preventDefault(), t.nav(1, !0)
                        }), Object(i.a)(Object(u.a)(Object(u.a)(t)), "nav", function(e, o) {
                            t.props.onNav && t.props.onNav(e, o);
                            var s = t.props.totalCount || t.props.photos.length,
                                n = t.state.currentIndex + e;
                            if (t.props.wrapPhotos || !(n >= s || n < 0)) {
                                var r, a = t.state.hasWrapped;
                                n >= s && t.props.wrapPhotos && (a = !0), (r = n < 0 ? a ? Math.max(Math.min(s, s + n), 0) : 0 : Math.max(Math.min(s, t.props.wrapPhotos ? n % s : n), 0)) !== t.state.currentIndex && (r >= t.props.photos.length - 1 - I && t.props.onLoadLast && t.props.onLoadLast(), t.setState({
                                    currentIndex: r,
                                    hasWrapped: a
                                }), t.props.onPhotoChange && t.props.onPhotoChange(r))
                            }
                        }), Object(i.a)(Object(u.a)(Object(u.a)(t)), "swipeState", {
                            xStart: null,
                            xLast: null,
                            swipeThreshold: null
                        }), Object(i.a)(Object(u.a)(Object(u.a)(t)), "touchStart", function(e) {
                            e && e.currentTarget && e.touches && 1 === e.touches.length && (t.swipeState.swipeThreshold = e.currentTarget.clientWidth * P, t.swipeState.xStart = e.touches[0].pageX - e.currentTarget.offsetLeft, t.swipeState.xLast = null)
                        }), Object(i.a)(Object(u.a)(Object(u.a)(t)), "touchMove", function(e) {
                            if (e && e.currentTarget && e.touches && 1 === e.touches.length && null !== t.swipeState.swipeThreshold && null !== t.swipeState.xStart) {
                                t.swipeState.xLast = e.touches[0].pageX - e.currentTarget.offsetLeft;
                                var o = t.swipeState.xStart - t.swipeState.xLast;
                                t.swipeState.swipeThreshold <= Math.abs(o) && t.touchEnd()
                            }
                        }), Object(i.a)(Object(u.a)(Object(u.a)(t)), "touchEnd", function() {
                            if (null === t.swipeState.swipeThreshold || null === t.swipeState.xLast || null === t.swipeState.xStart) return t.swipeState.xStart = null, void(t.swipeState.xLast = null);
                            var e = t.swipeState.xStart - t.swipeState.xLast;
                            t.swipeState.swipeThreshold <= Math.abs(e) && (t.swipeState.xStart = null, t.swipeState.xLast = null, t.nav(e / Math.abs(e), !1))
                        });
                        var a = 0,
                            l = !1,
                            c = t.props.uniqueId;
                        if (t.props.saveReduxState && c) {
                            var d = k(c);
                            a = h()(d, "currentIndex", 0), l = h()(d, "hasWrapped", !1)
                        }
                        return t.state = {
                            currentIndex: a,
                            hasWrapped: l
                        }, t
                    }
                    return Object(l.a)(o, e), Object(a.a)(o, null, [{
                        key: "getDerivedStateFromProps",
                        value: function e(o, t) {
                            var s = o.displayIndex,
                                n = o.totalCount,
                                r = o.photos,
                                a = t.currentIndex;
                            if (void 0 === s) return null;
                            var l = (n || r.length) - 1;
                            return s !== a ? {
                                currentIndex: Math.max(Math.min(s, l), 0)
                            } : null
                        }
                    }]), Object(a.a)(o, [{
                        key: "componentDidUpdate",
                        value: function e() {
                            var o = this.props.uniqueId;
                            this.props.saveReduxState && o && Object(b.getStore)().dispatch(function e(o, t, s) {
                                return w.action({
                                    type: "registerState",
                                    uniqueId: o,
                                    newIndex: t,
                                    hasWrapped: s
                                })
                            }(o, this.state.currentIndex, this.state.hasWrapped))
                        }
                    }, {
                        key: "render",
                        value: function e() {
                            var o = this,
                                t = this.props.maxIndicatorDots,
                                s = void 0 === t ? 5 : t,
                                n = this.props.totalCount || this.props.photos.length,
                                r = this.props.hideArrows ? "common-photo-carousel-PhotoCarousel__hideArrows--17PSq" : null,
                                a = this.state.currentIndex > 0 || this.state.hasWrapped,
                                l = n > 1 && (this.state.currentIndex < n - 1 || this.props.wrapPhotos),
                                u = !this.props.noCta,
                                i = this.state.currentIndex === this.props.photos.length - 1 && this.props.totalCount !== this.props.photos.length,
                                d = function e() {
                                    o.props.onPhotoMouseover && o.props.onPhotoMouseover(i)
                                };
                            return c.createElement("div", {
                                className: m()("common-photo-carousel-PhotoCarousel__carousel--hc4jm", r),
                                style: {
                                    width: this.props.width,
                                    height: this.props.height
                                },
                                onClick: function e() {
                                    var t = o.props.photos[Math.min(o.state.currentIndex, o.props.photos.length - 1)];
                                    o.props.onClick && t && o.props.onClick(t.id)
                                },
                                onTouchStart: function e(t) {
                                    o.touchStart(t), d()
                                },
                                onTouchMove: this.touchMove,
                                onTouchEnd: this.touchEnd,
                                onMouseEnter: d
                            }, c.createElement("ul", {
                                className: "common-photo-carousel-PhotoCarousel__images--3cna1"
                            }, this.props.photos.map(function(e, t) {
                                return c.createElement("li", {
                                    key: e.id,
                                    className: m()("common-photo-carousel-PhotoCarousel__photo--11M-m", o.props.overflowHidden ? "common-photo-carousel-PhotoCarousel__crop--ZWIAl" : null, o.state.currentIndex === t ? "common-photo-carousel-PhotoCarousel__current--1ZRRH" : null)
                                }, c.createElement(j.a, {
                                    shouldLoad: Math.abs(o.state.currentIndex - t) <= I
                                }, o.props.imageContainer ? o.props.imageContainer(e) : c.createElement(v.ResponsiveImage, {
                                    sources: e.photoSizes,
                                    width: "100%",
                                    height: o.props.photoHeight || "100%",
                                    notLazy: !o.props.lazyLoadImages,
                                    ssrContainerDimensions: 0 === o.state.currentIndex ? o.props.ssrContainerDimensions : void 0,
                                    fitStrategy: o.props.fitStrategy,
                                    customFitStrategySelector: o.props.customFitStrategySelector
                                })))
                            })), this.props.children ? c.createElement("div", {
                                className: "common-photo-carousel-PhotoCarousel__childrenContainer--8HAPF"
                            }, this.props.children({
                                currentIndex: this.state.currentIndex
                            })) : null, u ? c.createElement(c.Fragment, null, c.createElement("div", {
                                className: "common-photo-carousel-PhotoCarousel__ctaWrap--2Gk7f"
                            }, c.createElement("span", {
                                className: "common-photo-carousel-PhotoCarousel__cta--3kEzs"
                            }, c.createElement(g.Icon, {
                                name: "expand"
                            }), " ", Object(_.localize)("full_view"))), c.createElement("div", {
                                className: "common-photo-carousel-PhotoCarousel__washout--WG3Ly"
                            })) : null, a ? c.createElement(E, {
                                isRight: !1,
                                size: this.props.arrowSize,
                                onClick: this.previous,
                                disabled: !1,
                                allowOverClicking: this.props.allowOverClicking
                            }) : c.createElement(E, {
                                isRight: !1,
                                size: this.props.arrowSize,
                                onClick: this.swallow,
                                disabled: !0,
                                allowOverClicking: this.props.allowOverClicking
                            }), l ? c.createElement(E, {
                                isRight: !0,
                                size: this.props.arrowSize,
                                onClick: this.next,
                                disabled: !1,
                                allowOverClicking: this.props.allowOverClicking
                            }) : c.createElement(E, {
                                isRight: !0,
                                size: this.props.arrowSize,
                                onClick: this.swallow,
                                disabled: !0,
                                allowOverClicking: this.props.allowOverClicking
                            }), this.props.badgeTopLeft && c.createElement("div", {
                                className: "common-photo-carousel-PhotoCarousel__badge-container--1JNFc"
                            }, this.props.badgeTopLeft), this.props.showIndicatorDots && n ? c.createElement(x.a, {
                                numDots: Math.min(s, n),
                                numItems: n,
                                currentIndex: this.state.currentIndex
                            }) : null, this.props.showProgress && c.createElement(O, {
                                currentIndex: this.state.currentIndex + 1,
                                numItems: n
                            }))
                        }
                    }]), o
                }(c.Component),
                z = function(e) {
                    function o() {
                        var e, t;
                        Object(s.a)(this, o);
                        for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++) l[c] = arguments[c];
                        return t = Object(n.a)(this, (e = Object(r.a)(o)).call.apply(e, [this].concat(l))), Object(i.a)(Object(u.a)(Object(u.a)(t)), "state", {
                            currentIndex: 0
                        }), Object(i.a)(Object(u.a)(Object(u.a)(t)), "onPhotoClick", function(e) {
                            t.setState({
                                currentIndex: e
                            }), t.props.onPhotoSelected && t.props.onPhotoSelected(e)
                        }), t
                    }
                    return Object(l.a)(o, e), Object(a.a)(o, [{
                        key: "render",
                        value: function e() {
                            var o = this;
                            if (!this.props.photos.length) return null;
                            var t = Math.max(Math.min(this.state.currentIndex, this.props.photos.length - 1), 0),
                                s = this.props.numItemsInRow ? this.props.numItemsInRow : this.props.photos.length,
                                n = 0 !== s ? 1 / s : 0;
                            return c.createElement("div", {
                                className: "common-photo-carousel-Photostrip__photostrip--jZJ_O"
                            }, this.props.photos.map(function(e, s) {
                                return c.createElement("div", {
                                    className: m()("common-photo-carousel-Photostrip__stripItem--2lP0e", t === s ? "common-photo-carousel-Photostrip__selected--3XCcr" : null),
                                    style: {
                                        flexBasis: "calc(".concat(100 * n - .01, "% - 2px)")
                                    },
                                    onClick: function e() {
                                        return o.onPhotoClick(s)
                                    },
                                    key: e.id
                                }, c.createElement(v.ResponsiveImage, {
                                    sources: e.photoSizes,
                                    height: "100%",
                                    width: "100%"
                                }))
                            }))
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function e(o, t) {
                            var s = o.selectedIndex,
                                n = o.photos,
                                r = t.currentIndex;
                            if (void 0 === s) return null;
                            var a = n.length - 1;
                            return s !== r ? {
                                currentIndex: Math.max(Math.min(s, a), 0)
                            } : null
                        }
                    }]), o
                }(c.Component),
                T = function e(o) {
                    var t = o.totalCount;
                    return c.createElement("div", {
                        className: "common-photo-carousel-PhotoCount__seeAll--3bVh_"
                    }, c.createElement(g.Icon, {
                        name: "camera"
                    }), " ", c.createElement("span", {
                        className: "is-shown-at-tablet"
                    }, Object(_.localize)("all_photos_parens", {
                        nCount: _.globalize.formatNumber("integer", t)
                    })), c.createElement("span", {
                        className: "is-hidden-tablet"
                    }, _.globalize.formatNumber("integer", t)))
                };
            t.d(o, "PhotoCarousel", function() {
                return M
            }), t.d(o, "Photostrip", function() {
                return z
            }), t.d(o, "PhotoCount", function() {
                return T
            })
        },
        "./packages/common/state/state.jsx": function(e, o, t) {
            e.exports = t("dll-reference @ta/common.global")("./packages/common/state/state.jsx")
        },
        "@ta/common.indicator-dots": function(o, t) {
            o.exports = e
        },
        "@ta/common.loadable": function(e, t) {
            e.exports = o
        },
        "@ta/media.image": function(e, o) {
            e.exports = t
        },
        "@ta/styleguide.icon": function(e, o) {
            e.exports = s
        },
        "dll-reference @ta/common.global": function(e, o) {
            e.exports = n
        }
    })
});
//# sourceMappingURL=common.photo-carousel.dbb7fdf5dc.js.map