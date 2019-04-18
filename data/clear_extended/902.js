if (self.CavalryLogger) {
    CavalryLogger.start_js(["hm6yz"]);
}

self.__DEV__ = self.__DEV__ || 0, self.emptyFunction = function() {};
"use strict";
Array.from || (Array.from = function(a) {
    if (a == null) throw new TypeError("Object is null or undefined");
    var b = arguments[1],
        c = arguments[2],
        d = this,
        e = Object(a),
        f = typeof Symbol === "function" ? typeof Symbol === "function" ? Symbol.iterator : "@@iterator" : "@@iterator",
        g = typeof b === "function",
        h = typeof e[f] === "function",
        i = 0,
        j, k;
    if (h) {
        j = typeof d === "function" ? new d() : [];
        var l = e[f](),
            m;
        while (!(m = l.next()).done) k = m.value, g && (k = b.call(c, k, i)), j[i] = k, i += 1;
        j.length = i;
        return j
    }
    var n = e.length;
    (isNaN(n) || n < 0) && (n = 0);
    j = typeof d === "function" ? new d(n) : new Array(n);
    while (i < n) k = e[i], g && (k = b.call(c, k, i)), j[i] = k, i += 1;
    j.length = i;
    return j
});
Array.isArray || (Array.isArray = function(a) {
    return Object.prototype.toString.call(a) == "[object Array]"
});
"use strict";
(function(a) {
    function b(a, b) {
        if (this == null) throw new TypeError("Array.prototype.findIndex called on null or undefined");
        if (typeof a !== "function") throw new TypeError("predicate must be a function");
        var c = Object(this),
            d = c.length >>> 0;
        for (var e = 0; e < d; e++)
            if (a.call(b, c[e], e, c)) return e;
        return -1
    }
    Array.prototype.findIndex || (Array.prototype.findIndex = b);
    Array.prototype.find || (Array.prototype.find = function(a, c) {
        if (this == null) throw new TypeError("Array.prototype.find called on null or undefined");
        a = b.call(this, a, c);
        return a === -1 ? void 0 : this[a]
    });
    Array.prototype.fill || (Array.prototype.fill = function(a) {
        if (this == null) throw new TypeError("Array.prototype.fill called on null or undefined");
        var b = Object(this),
            c = b.length >>> 0,
            d = arguments[1],
            e = d >> 0,
            f = e < 0 ? Math.max(c + e, 0) : Math.min(e, c),
            g = arguments[2],
            h = g === void 0 ? c : g >> 0,
            i = h < 0 ? Math.max(c + h, 0) : Math.min(h, c);
        while (f < i) b[f] = a, f++;
        return b
    })
})();
(function() {
    var a = Object.prototype.toString,
        b = Object("a"),
        c = b[0] != "a";

    function d(a) {
        a = +a;
        a !== a ? a = 0 : a !== 0 && a !== 1 / 0 && a !== -(1 / 0) && (a = (a > 0 || -1) * Math.floor(Math.abs(a)));
        return a
    }
    Array.prototype.map || (Array.prototype.map = function(a, b) {
        if (typeof a !== "function") throw new TypeError();
        var c, d = this.length,
            e = new Array(d);
        for (c = 0; c < d; ++c) c in this && (e[c] = a.call(b, this[c], c, this));
        return e
    });
    Array.prototype.forEach || (Array.prototype.forEach = function(a, b) {
        this.map(a, b)
    });
    Array.prototype.filter || (Array.prototype.filter = function(a, b) {
        if (typeof a !== "function") throw new TypeError();
        var c, d, e = this.length,
            f = [];
        for (c = 0; c < e; ++c) c in this && (d = this[c], a.call(b, d, c, this) && f.push(d));
        return f
    });
    Array.prototype.every || (Array.prototype.every = function(a, b) {
        if (typeof a !== "function") throw new TypeError();
        var c = new Object(this),
            d = c.length;
        for (var e = 0; e < d; e++)
            if (e in c && !a.call(b, c[e], e, c)) return !1;
        return !0
    });
    Array.prototype.some || (Array.prototype.some = function(a, b) {
        if (typeof a !== "function") throw new TypeError();
        var c = new Object(this),
            d = c.length;
        for (var e = 0; e < d; e++)
            if (e in c && a.call(b, c[e], e, c)) return !0;
        return !1
    });
    Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
        var c = this.length;
        b |= 0;
        b < 0 && (b += c);
        for (; b < c; b++)
            if (b in this && this[b] === a) return b;
        return -1
    });
    (!Array.prototype.lastIndexOf || [0, 1].lastIndexOf(0, -3) != -1) && (Array.prototype.lastIndexOf = function(b) {
        var e = c && a.call(this) == "[object String]" ? this.split("") : Object(this),
            f = e.length >>> 0;
        if (!f) return -1;
        var g = f - 1;
        arguments.length > 1 && (g = Math.min(g, d(arguments[1])));
        g = g >= 0 ? g : f - Math.abs(g);
        for (; g >= 0; g--)
            if (g in e && b === e[g]) return g;
        return -1
    });
    Array.prototype.reduce || (Array.prototype.reduce = function(a) {
        if (typeof a !== "function") throw new TypeError(a + " is not a function");
        var b = this.length >>> 0,
            c, d, e = arguments.length === 2;
        e && (c = arguments[1]);
        for (d = 0; d < b; ++d) Object.prototype.hasOwnProperty.call(this, d) && (e === !1 ? (c = this[d], e = !0) : c = a(c, this[d], d, this));
        if (e === !1) throw new TypeError("Reduce of empty array with no initial value");
        return c
    });
    Array.prototype.reduceRight || (Array.prototype.reduceRight = function(a) {
        if (typeof a !== "function") throw new TypeError(a + " is not a function");
        var b = this.length >>> 0,
            c, d, e = arguments.length === 2;
        e && (c = arguments[1]);
        for (d = b - 1; d > -1; --d) Object.prototype.hasOwnProperty.call(this, d) && (e === !1 ? (c = this[d], e = !0) : c = a(c, this[d], d, this));
        if (e === !1) throw new TypeError("Reduce of empty array with no initial value");
        return c
    })
})();
typeof Number.isFinite !== "function" && (Number.isFinite = function(a) {
    return typeof a === "number" && isFinite(a)
}), typeof Number.isNaN !== "function" && (Number.isNaN = function(a) {
    return typeof a === "number" && isNaN(a)
}), typeof Number.EPSILON !== "number" && (Number.EPSILON = Math.pow(2, -52)), typeof Number.MAX_SAFE_INTEGER !== "number" && (Number.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1), typeof Number.MIN_SAFE_INTEGER !== "number" && (Number.MIN_SAFE_INTEGER = -1 * Number.MAX_SAFE_INTEGER), typeof Number.isInteger !== "function" && (Number.isInteger = function(a) {
    return Number.isFinite(a) && Math.floor(a) === a
}), typeof Number.isSafeInteger !== "function" && (Number.isSafeInteger = function(a) {
    return Number.isFinite(a) && a >= Number.MIN_SAFE_INTEGER && a <= Number.MAX_SAFE_INTEGER && Math.floor(a) === a
}), typeof Number.parseInt !== "function" && (Number.parseInt = parseInt), typeof Number.parseFloat !== "function" && (Number.parseFloat = parseFloat);
(function() {
    "use strict";
    var a = Array.prototype.indexOf;
    Array.prototype.includes || (Array.prototype.includes = function(d) {
        "use strict";
        if (d !== void 0 && Array.isArray(this) && !Number.isNaN(d)) return a.apply(this, arguments) !== -1;
        var e = Object(this),
            f = e.length ? b(e.length) : 0;
        if (f === 0) return !1;
        var g = arguments.length > 1 ? c(arguments[1]) : 0,
            h = g < 0 ? Math.max(f + g, 0) : g,
            i = Number.isNaN(d);
        while (h < f) {
            var j = e[h];
            if (j === d || i && Number.isNaN(j)) return !0;
            h++
        }
        return !1
    });

    function b(a) {
        return Math.min(Math.max(c(a), 0), Number.MAX_SAFE_INTEGER)
    }

    function c(a) {
        a = Number(a);
        return Number.isFinite(a) && a !== 0 ? d(a) * Math.floor(Math.abs(a)) : a
    }

    function d(a) {
        return a >= 0 ? 1 : -1
    }
})();
var __p;
(function() {
    var a = {},
        b = function(a, b) {
            if (!a && !b) return null;
            var c = {};
            typeof a !== "undefined" && (c.type = a);
            typeof b !== "undefined" && (c.signature = b);
            return c
        },
        c = function(a, c) {
            return b(a && /^[A-Z]/.test(a) ? a : void 0, c && (c.params && c.params.length || c.returns) ? "function(" + (c.params ? c.params.map(function(a) {
                return /\?/.test(a) ? "?" + a.replace("?", "") : a
            }).join(",") : "") + ")" + (c.returns ? ":" + c.returns : "") : void 0)
        },
        d = function(a, b, c) {
            return a
        },
        e = function(a, b, d) {
            "sourcemeta" in __transform_includes && (a.__SMmeta = b);
            if ("typechecks" in __transform_includes) {
                b = c(b ? b.name : void 0, d);
                b && __w(a, b)
            }
            return a
        },
        f = function(a, b, c) {
            return c.apply(a, b)
        },
        g = function(a, b, c, d) {
            d && d.params && __t.apply(a, d.params);
            c = c.apply(a, b);
            d && d.returns && __t([c, d.returns]);
            return c
        },
        h = function(b, c, d, e, f) {
            if (f) {
                f.callId || (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
                e = f.callId;
                a[e] = (a[e] || 0) + 1
            }
            return d.apply(b, c)
        };
    typeof __transform_includes === "undefined" ? (__annotator = d, __bodyWrapper = f) : (__annotator = e, "codeusage" in __transform_includes ? (__annotator = d, __bodyWrapper = h, __bodyWrapper.getCodeUsage = function() {
        return a
    }, __bodyWrapper.clearCodeUsage = function() {
        a = {}
    }) : "typechecks" in __transform_includes ? __bodyWrapper = g : __bodyWrapper = f)
})();
__t = function(a) {
    return a[0]
}, __w = function(a) {
    return a
};
Object.create || (Object.create = function(a) {
    var b = typeof a;
    if (b != "object" && b != "function") throw new TypeError("Object prototype may only be a Object or null");
    b = function() {
        a === null && (this.__proto__ = a, delete this.__proto__)
    };
    b.prototype = a;
    return new b()
}), Object.keys || (Object.keys = function(a) {
    var b = typeof a;
    if (b != "object" && b != "function" || a === null) throw new TypeError("Object.keys called on non-object");
    b = Object.prototype.hasOwnProperty;
    var c = [];
    for (var d in a) b.call(a, d) && c.push(d);
    return c
}), Object.freeze || (Object.freeze = function(a) {
    return a
}), Object.isFrozen || (Object.isFrozen = function() {
    return !1
}), Object.seal || (Object.seal = function(a) {
    return a
}), (function() {
    try {
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")
    } catch (a) {
        Object.getOwnPropertyDescriptor = function(a) {
            return function(b, c) {
                try {
                    return a(b, c)
                } catch (a) {
                    return {
                        enumerable: b.propertyIsEnumerable(c),
                        configurable: !0,
                        get: b.__lookupGetter__(c),
                        set: b.__lookupSetter__(c)
                    }
                }
            }
        }(Object.getOwnPropertyDescriptor)
    }
})();
(function() {
    var a = !{
        toString: !0
    }.propertyIsEnumerable("toString");
    if (!a) return;
    var b = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "constructor"];
    Object.keys = function(a) {
        var c = typeof a;
        if (c != "object" && c != "function" || a === null) throw new TypeError("Object.keys called on non-object");
        c = Object.prototype.hasOwnProperty;
        var d = [];
        for (var e in a) c.call(a, e) && d.push(e);
        for (var f = 0; f < b.length; f++) {
            var g = b[f];
            c.call(a, g) && d.push(g)
        }
        return d
    };
    Object.assign = function(a, c) {
        if (a == null) throw new TypeError("Object.assign target cannot be null or undefined");
        var d = Object(a),
            e = Object.prototype.hasOwnProperty;
        for (var f = 1; f < arguments.length; f++) {
            var g = arguments[f];
            if (g == null) continue;
            var h = Object(g);
            for (var i in h) e.call(h, i) && (d[i] = h[i]);
            for (var j = 0; j < b.length; j++) {
                var k = b[j];
                e.call(h, k) && (d[k] = h[k])
            }
        }
        return d
    }
})();
(function() {
    if (Object.assign) return;
    var a = Object.prototype.hasOwnProperty,
        b;
    Object.keys && Object.keys.name !== "object_keys_polyfill" ? b = function(a, b) {
        var c = Object.keys(b);
        for (var d = 0; d < c.length; d++) a[c[d]] = b[c[d]]
    } : b = function(b, c) {
        for (var d in c) a.call(c, d) && (b[d] = c[d])
    };
    Object.assign = function(a, c) {
        if (a == null) throw new TypeError("Object.assign target cannot be null or undefined");
        var d = Object(a);
        for (var e = 1; e < arguments.length; e++) {
            var f = arguments[e];
            f != null && b(d, Object(f))
        }
        return d
    }
})();
(function(a, b) {
    var c = "keys",
        d = "values",
        e = "entries",
        f = function() {
            var a = h(Array),
                b;
            a || (b = function() {
                "use strict";

                function a(a, b) {
                    this.$1 = a, this.$2 = b, this.$3 = 0
                }
                var b = a.prototype;
                b.next = function() {
                    if (this.$1 == null) return {
                        value: void 0,
                        done: !0
                    };
                    var a = this.$1,
                        b = this.$1.length,
                        f = this.$3,
                        g = this.$2;
                    if (f >= b) {
                        this.$1 = void 0;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    this.$3 = f + 1;
                    if (g === c) return {
                        value: f,
                        done: !1
                    };
                    else if (g === d) return {
                        value: a[f],
                        done: !1
                    };
                    else if (g === e) return {
                        value: [f, a[f]],
                        done: !1
                    }
                };
                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    return this
                };
                return a
            }());
            return {
                keys: a ? function(a) {
                    return a.keys()
                } : function(a) {
                    return new b(a, c)
                },
                values: a ? function(a) {
                    return a.values()
                } : function(a) {
                    return new b(a, d)
                },
                entries: a ? function(a) {
                    return a.entries()
                } : function(a) {
                    return new b(a, e)
                }
            }
        }(),
        g = function() {
            var a = h(String),
                b;
            a || (b = function() {
                "use strict";

                function a(a) {
                    this.$1 = a, this.$2 = 0
                }
                var b = a.prototype;
                b.next = function() {
                    if (this.$1 == null) return {
                        value: void 0,
                        done: !0
                    };
                    var a = this.$2,
                        b = this.$1,
                        c = b.length;
                    if (a >= c) {
                        this.$1 = void 0;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    var d = b.charCodeAt(a);
                    if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
                    else {
                        c = b.charCodeAt(a + 1);
                        c < 56320 || c > 57343 ? d = b[a] : d = b[a] + b[a + 1]
                    }
                    this.$2 = a + d.length;
                    return {
                        value: d,
                        done: !1
                    }
                };
                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    return this
                };
                return a
            }());
            return {
                keys: function() {
                    throw TypeError("Strings default iterator doesn't implement keys.")
                },
                values: a ? function(a) {
                    return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]()
                } : function(a) {
                    return new b(a)
                },
                entries: function() {
                    throw TypeError("Strings default iterator doesn't implement entries.")
                }
            }
        }();

    function h(a) {
        return typeof a.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof a.prototype.values === "function" && typeof a.prototype.keys === "function" && typeof a.prototype.entries === "function"
    }
    var i = function() {
            "use strict";

            function a(a, b) {
                this.$1 = a, this.$2 = b, this.$3 = Object.keys(a), this.$4 = 0
            }
            var b = a.prototype;
            b.next = function() {
                var a = this.$3.length,
                    b = this.$4,
                    f = this.$2,
                    g = this.$3[b];
                if (b >= a) {
                    this.$1 = void 0;
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                this.$4 = b + 1;
                if (f === c) return {
                    value: g,
                    done: !1
                };
                else if (f === d) return {
                    value: this.$1[g],
                    done: !1
                };
                else if (f === e) return {
                    value: [g, this.$1[g]],
                    done: !1
                }
            };
            b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                return this
            };
            return a
        }(),
        j = {
            keys: function(a) {
                return new i(a, c)
            },
            values: function(a) {
                return new i(a, d)
            },
            entries: function(a) {
                return new i(a, e)
            }
        };

    function k(a, b) {
        if (typeof a === "string") return g[b || d](a);
        else if (Array.isArray(a)) return f[b || d](a);
        else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        else return j[b || e](a)
    }
    Object.assign(k, {
        KIND_KEYS: c,
        KIND_VALUES: d,
        KIND_ENTRIES: e,
        keys: function(a) {
            return k(a, c)
        },
        values: function(a) {
            return k(a, d)
        },
        entries: function(a) {
            return k(a, e)
        },
        generic: j.entries
    });
    a.FB_enumerate = k
})(typeof global === "undefined" ? this : global);
(function(a, b) {
    var c = a.window || a;

    function d() {
        return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
    }

    function e(a) {
        var b = a ? a.ownerDocument || a : document;
        b = b.defaultView || c;
        return !!(a && (typeof b.Node === "function" ? a instanceof b.Node : typeof a === "object" && typeof a.nodeType === "number" && typeof a.nodeName === "string"))
    }

    function f(a) {
        a = c[a];
        if (a == null) return !0;
        if (typeof c.Symbol !== "function") return !0;
        var b = a.prototype;
        return a == null || typeof a !== "function" || typeof b.clear !== "function" || new a().size !== 0 || typeof b.keys !== "function" || typeof b.forEach !== "function"
    }
    var g = a.FB_enumerate,
        h = function() {
            if (!f("Map")) return c.Map;
            var b = "key",
                i = "value",
                j = "key+value",
                k = "$map_",
                l, m = "IE_HASH_",
                a = function() {
                    "use strict";

                    function a(a) {
                        if (!r(this)) throw new TypeError("Wrong map object type.");
                        q(this);
                        if (a != null) {
                            a = g(a);
                            var b;
                            while (!(b = a.next()).done) {
                                if (!r(b.value)) throw new TypeError("Expected iterable items to be pair objects.");
                                this.set(b.value[0], b.value[1])
                            }
                        }
                    }
                    var c = a.prototype;
                    c.clear = function() {
                        q(this)
                    };
                    c.has = function(a) {
                        a = o(this, a);
                        return !!(a != null && this._mapData[a])
                    };
                    c.set = function(a, b) {
                        var c = o(this, a);
                        c != null && this._mapData[c] ? this._mapData[c][1] = b : (c = this._mapData.push([a, b]) - 1, p(this, a, c), this.size += 1);
                        return this
                    };
                    c.get = function(a) {
                        a = o(this, a);
                        if (a == null) return void 0;
                        else return this._mapData[a][1]
                    };
                    c["delete"] = function(a) {
                        var b = o(this, a);
                        if (b != null && this._mapData[b]) {
                            p(this, a, void 0);
                            this._mapData[b] = void 0;
                            this.size -= 1;
                            return !0
                        } else return !1
                    };
                    c.entries = function() {
                        return new n(this, j)
                    };
                    c.keys = function() {
                        return new n(this, b)
                    };
                    c.values = function() {
                        return new n(this, i)
                    };
                    c.forEach = function(a, b) {
                        if (typeof a !== "function") throw new TypeError("Callback must be callable.");
                        a = a.bind(b || void 0);
                        b = this._mapData;
                        for (var c = 0; c < b.length; c++) {
                            var d = b[c];
                            d != null && a(d[1], d[0], this)
                        }
                    };
                    c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                        return this.entries()
                    };
                    return a
                }(),
                n = function() {
                    "use strict";

                    function c(a, c) {
                        if (!(r(a) && a._mapData)) throw new TypeError("Object is not a map.");
                        if ([b, j, i].indexOf(c) === -1) throw new Error("Invalid iteration kind.");
                        this._map = a;
                        this._nextIndex = 0;
                        this._kind = c
                    }
                    var d = c.prototype;
                    d.next = function() {
                        if (!this instanceof a) throw new TypeError("Expected to be called on a MapIterator.");
                        var c = this._map,
                            d = this._nextIndex,
                            e = this._kind;
                        if (c == null) return s(void 0, !0);
                        c = c._mapData;
                        while (d < c.length) {
                            var f = c[d];
                            d += 1;
                            this._nextIndex = d;
                            if (f)
                                if (e === b) return s(f[0], !1);
                                else if (e === i) return s(f[1], !1);
                            else if (e) return s(f, !1)
                        }
                        this._map = void 0;
                        return s(void 0, !0)
                    };
                    d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                        return this
                    };
                    return c
                }();

            function o(a, b) {
                if (r(b)) {
                    var c = w(b);
                    return c ? a._objectIndex[c] : void 0
                } else {
                    c = k + b;
                    if (typeof b === "string") return a._stringIndex[c];
                    else return a._otherIndex[c]
                }
            }

            function p(a, b, c) {
                var d = c == null;
                if (r(b)) {
                    var e = w(b);
                    e || (e = x(b));
                    d ? delete a._objectIndex[e] : a._objectIndex[e] = c
                } else {
                    e = k + b;
                    typeof b === "string" ? d ? delete a._stringIndex[e] : a._stringIndex[e] = c : d ? delete a._otherIndex[e] : a._otherIndex[e] = c
                }
            }

            function q(a) {
                a._mapData = [], a._objectIndex = {}, a._stringIndex = {}, a._otherIndex = {}, a.size = 0
            }

            function r(a) {
                return a != null && (typeof a === "object" || typeof a === "function")
            }

            function s(a, b) {
                return {
                    value: a,
                    done: b
                }
            }
            a.__isES5 = function() {
                try {
                    Object.defineProperty({}, "__.$#x", {});
                    return !0
                } catch (a) {
                    return !1
                }
            }();

            function t(b) {
                if (!a.__isES5 || !Object.isExtensible) return !0;
                else return Object.isExtensible(b)
            }

            function u(a) {
                var b;
                switch (a.nodeType) {
                    case 1:
                        b = a.uniqueID;
                        break;
                    case 9:
                        b = a.documentElement.uniqueID;
                        break;
                    default:
                        return null
                }
                if (b) return m + b;
                else return null
            }
            var v = d();

            function w(b) {
                if (b[v]) return b[v];
                else if (!a.__isES5 && b.propertyIsEnumerable && b.propertyIsEnumerable[v]) return b.propertyIsEnumerable[v];
                else if (!a.__isES5 && e(b) && u(b)) return u(b);
                else if (!a.__isES5 && b[v]) return b[v]
            }
            var x = function() {
                var b = Object.prototype.propertyIsEnumerable,
                    c = 0;
                return function(d) {
                    if (t(d)) {
                        c += 1;
                        if (a.__isES5) Object.defineProperty(d, v, {
                            enumerable: !1,
                            writable: !1,
                            configurable: !1,
                            value: c
                        });
                        else if (d.propertyIsEnumerable) d.propertyIsEnumerable = function() {
                            return b.apply(this, arguments)
                        }, d.propertyIsEnumerable[v] = c;
                        else if (e(d)) d[v] = c;
                        else throw new Error("Unable to set a non-enumerable property on object.");
                        return c
                    } else throw new Error("Non-extensible objects are not allowed as keys.")
                }
            }();
            return __annotator(a, {
                name: "Map"
            })
        }();
    b = function() {
        if (!f("Set")) return c.Set;
        var a = function() {
            "use strict";

            function a(a) {
                if (this == null || typeof this !== "object" && typeof this !== "function") throw new TypeError("Wrong set object type.");
                b(this);
                if (a != null) {
                    a = g(a);
                    var c;
                    while (!(c = a.next()).done) this.add(c.value)
                }
            }
            var c = a.prototype;
            c.add = function(a) {
                this._map.set(a, a);
                this.size = this._map.size;
                return this
            };
            c.clear = function() {
                b(this)
            };
            c["delete"] = function(a) {
                a = this._map["delete"](a);
                this.size = this._map.size;
                return a
            };
            c.entries = function() {
                return this._map.entries()
            };
            c.forEach = function(a) {
                var b = arguments[1],
                    c = this._map.keys(),
                    d;
                while (!(d = c.next()).done) a.call(b, d.value, d.value, this)
            };
            c.has = function(a) {
                return this._map.has(a)
            };
            c.values = function() {
                return this._map.values()
            };
            c.keys = function() {
                return this.values()
            };
            c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                return this.values()
            };
            return a
        }();

        function b(a) {
            a._map = new h(), a.size = a._map.size
        }
        return __annotator(a, {
            name: "Set"
        })
    }();
    a.Map = h;
    a.Set = b
})(typeof global === "undefined" ? this : global);
Date.now || (Date.now = function() {
    return new Date().getTime()
});
(function() {
    if (!Date.prototype.toISOString) {
        var a = function(a) {
            return a < 10 ? "0" + a : a
        };
        Date.prototype.toISOString = function() {
            if (!isFinite(this)) throw new Error("Invalid time value");
            var b = this.getUTCFullYear();
            b = (b < 0 ? "-" : b > 9999 ? "+" : "") + ("00000" + Math.abs(b)).slice(0 <= b && b <= 9999 ? -4 : -6);
            return b + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "." + (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
        }
    }
})();
Function.prototype.bind || (Function.prototype.bind = function(a) {
    if (typeof this !== "function") throw new TypeError("Bind must be called on a function");
    var b = this,
        c = Array.prototype.slice,
        d = c.call(arguments, 1);

    function e() {
        var e = b.prototype && this instanceof b;
        return b.apply(!e && a || this, d.concat(c.call(arguments)))
    }
    e.prototype = b.prototype;
    e.displayName = "bound:" + (b.displayName || b.name || "(?)");
    e.toString = function() {
        return "bound: " + b
    };
    return e
});

typeof window !== "undefined" && window.JSON && JSON.stringify(["\u2028\u2029"]) === '["\u2028\u2029"]' && (JSON.stringify = function(a) {
    var b = /\u2028/g,
        c = /\u2029/g;
    return function(d, e, f) {
        d = a.call(this, d, e, f);
        d && (-1 < d.indexOf("\u2028") && (d = d.replace(b, "\\u2028")), -1 < d.indexOf("\u2029") && (d = d.replace(c, "\\u2029")));
        return d
    }
}(JSON.stringify));
if (typeof JSON === "object" && typeof JSON.parse === "function") try {
    JSON.parse(null)
} catch (a) {
    JSON.originalParse = JSON.parse, JSON.parse = function(a) {
        return a === null ? null : JSON.originalParse(a)
    }
}
typeof Math.log2 !== "function" && (Math.log2 = function(a) {
    return Math.log(a) / Math.LN2
}), typeof Math.log10 !== "function" && (Math.log10 = function(a) {
    return Math.log(a) / Math.LN10
}), typeof Math.trunc !== "function" && (Math.trunc = function(a) {
    return a < 0 ? Math.ceil(a) : Math.floor(a)
}), typeof Math.sign !== "function" && (Math.sign = function(a) {
    return +(a > 0) - +(a < 0) || +a
});
(function() {
    var a = Object.prototype.hasOwnProperty;
    Object.entries = function(b) {
        if (b == null) throw new TypeError("Object.entries called on non-object");
        var c = [];
        for (var d in b) a.call(b, d) && c.push([d, b[d]]);
        return c
    };
    Object.values = function(b) {
        if (b == null) throw new TypeError("Object.values called on non-object");
        var c = [];
        for (var d in b) a.call(b, d) && c.push(b[d]);
        return c
    }
})();
(function() {
    Object.is || (Object.is = function(a, b) {
        if (a === b) return a !== 0 || 1 / a === 1 / b;
        else return a !== a && b !== b
    })
})();
Object.prototype.hasOwnProperty.call({}, "__proto__") && (Object.prototype.hasOwnProperty = function(a) {
    return function(b) {
        return b != "__proto__" && a.call(this, b)
    }
}(Object.prototype.hasOwnProperty));
(function(a) {
    a.__m = function(a, b) {
        a.__SMmeta = b;
        return a
    }
})(this);
typeof String.fromCodePoint !== "function" && (String.fromCodePoint = function() {
    var a = [];
    for (var b = 0; b < arguments.length; b++) {
        var c = Number(b < 0 || arguments.length <= b ? void 0 : arguments[b]);
        if (!isFinite(c) || Math.floor(c) != c || c < 0 || 1114111 < c) throw RangeError("Invalid code point " + c);
        c < 65536 ? a.push(String.fromCharCode(c)) : (c -= 65536, a.push(String.fromCharCode((c >> 10) + 55296), String.fromCharCode(c % 1024 + 56320)))
    }
    return a.join("")
});
String.prototype.startsWith || (String.prototype.startsWith = function(a) {
    "use strict";
    if (this == null) throw TypeError();
    var b = String(this),
        c = arguments.length > 1 ? Number(arguments[1]) || 0 : 0,
        d = Math.min(Math.max(c, 0), b.length);
    return b.indexOf(String(a), c) == d
}), String.prototype.endsWith || (String.prototype.endsWith = function(a) {
    "use strict";
    if (this == null) throw TypeError();
    var b = String(this),
        c = b.length,
        d = String(a),
        e = arguments.length > 1 ? Number(arguments[1]) || 0 : c,
        f = Math.min(Math.max(e, 0), c),
        g = f - d.length;
    return g < 0 ? !1 : b.lastIndexOf(d, g) == g
}), String.prototype.includes || (String.prototype.includes = function(a) {
    "use strict";
    if (this == null) throw TypeError();
    var b = String(this),
        c = arguments.length > 1 ? Number(arguments[1]) || 0 : 0;
    return b.indexOf(String(a), c) != -1
}), String.prototype.repeat || (String.prototype.repeat = function(a) {
    "use strict";
    if (this == null) throw TypeError();
    var b = String(this);
    a = Number(a) || 0;
    if (a < 0 || a === Infinity) throw RangeError();
    if (a === 1) return b;
    var c = "";
    while (a) a & 1 && (c += b), (a >>= 1) && (b += b);
    return c
}), String.prototype.codePointAt || (String.prototype.codePointAt = function(a) {
    "use strict";
    if (this == null) throw TypeError("Invalid context: " + this);
    var b = String(this),
        c = b.length;
    a = Number(a) || 0;
    if (a < 0 || c <= a) return void 0;
    var d = b.charCodeAt(a);
    if (55296 <= d && d <= 56319 && c > a + 1) {
        c = b.charCodeAt(a + 1);
        if (56320 <= c && c <= 57343) return (d - 55296) * 1024 + c - 56320 + 65536
    }
    return d
});
String.prototype.contains || (String.prototype.contains = String.prototype.includes);
String.prototype.padStart || (String.prototype.padStart = function(a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return b.slice(0, a) + String(this)
    }
}), String.prototype.padEnd || (String.prototype.padEnd = function(a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return String(this) + b.slice(0, a)
    }
});
String.prototype.trimLeft || (String.prototype.trimLeft = function() {
    return this.replace(/^\s+/, "")
}), String.prototype.trimRight || (String.prototype.trimRight = function() {
    return this.replace(/\s+$/, "")
});
String.prototype.trim || (String.prototype.trim = function() {
    if (this == null) throw new TypeError("String.prototype.trim called on null or undefined");
    return String.prototype.replace.call(this, /^\s+|\s+$/g, "")
});
(function() {
    var a, b = String.prototype.split,
        c = /()??/.exec("")[1] === a;
    String.prototype.split = function(d, e) {
        var f = this;
        if (Object.prototype.toString.call(d) !== "[object RegExp]") return b.call(f, d, e);
        var g = [],
            h = (d.ignoreCase ? "i" : "") + (d.multiline ? "m" : "") + (d.extended ? "x" : "") + (d.sticky ? "y" : ""),
            i = 0,
            d = new RegExp(d.source, h + "g"),
            j, k, l;
        f += "";
        c || (j = new RegExp("^" + d.source + "$(?!\\s)", h));
        e = e === a ? -1 >>> 0 : e >>> 0;
        while (k = d.exec(f)) {
            h = k.index + k[0].length;
            if (h > i) {
                g.push(f.slice(i, k.index));
                !c && k.length > 1 && k[0].replace(j, function() {
                    for (var b = 1; b < arguments.length - 2; b++) arguments[b] === a && (k[b] = a)
                });
                k.length > 1 && k.index < f.length && Array.prototype.push.apply(g, k.slice(1));
                l = k[0].length;
                i = h;
                if (g.length >= e) break
            }
            d.lastIndex === k.index && d.lastIndex++
        }
        i === f.length ? (l || !d.test("")) && g.push("") : g.push(f.slice(i));
        return g.length > e ? g.slice(0, e) : g
    }
})();
(function(a) {
    var b = a.babelHelpers = {},
        c = Object.prototype.hasOwnProperty;
    b.inheritsLoose = function(a, b) {
        Object.assign(a, b);
        a.prototype = Object.create(b && b.prototype);
        a.prototype.constructor = a;
        a.__superConstructor__ = b;
        return b
    };
    b.wrapNativeSuper = function(a) {
        var c = typeof Map === "function" ? new Map() : void 0;
        b.wrapNativeSuper = function(a) {
            if (a === null) return null;
            if (typeof a !== "function") throw new TypeError("Super expression must either be null or a function");
            if (c !== void 0) {
                if (c.has(a)) return c.get(a);
                c.set(a, d)
            }
            b.inheritsLoose(d, a);

            function d() {
                a.apply(this, arguments)
            }
            return d
        };
        return b.wrapNativeSuper(a)
    };
    b.assertThisInitialized = function(a) {
        if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a
    };
    b._extends = Object.assign;
    b["extends"] = b._extends;
    b.construct = function(a, b) {
        var c = [null];
        c.push.apply(c, b);
        return new(Function.prototype.bind.apply(a, c))()
    };
    b.objectWithoutPropertiesLoose = function(a, b) {
        var d = {};
        for (var e in a) {
            if (!c.call(a, e) || b.indexOf(e) >= 0) continue;
            d[e] = a[e]
        }
        return d
    };
    b.taggedTemplateLiteralLoose = function(a, b) {
        b || (b = a.slice(0));
        a.raw = b;
        return a
    };
    b.bind = Function.prototype.bind
})(typeof global === "undefined" ? self : global);
(function(a) {
    if (a.require) return;
    var b = (a.Env || {}).gk_require_dic,
        c = null,
        d = [],
        e = b ? Object.create(null) : {},
        f = b ? Object.create(null) : {},
        g = 0,
        h = 0,
        i = 0,
        j = 1,
        k = 2,
        l = 4,
        m = 8,
        n = {},
        o = Object.prototype.hasOwnProperty,
        p = Object.prototype.toString;

    function q(a) {
        a = Array.prototype.slice.call(a);
        var b = {},
            c, d, f, g;
        while (a.length) {
            d = a.shift();
            if (b[d]) continue;
            b[d] = !0;
            f = e[d];
            if (!f || Q(f)) continue;
            if (f.dependencies)
                for (c = 0; c < f.dependencies.length; c++) g = f.dependencies[c], Q(g) || a.push(g.id)
        }
        for (d in b) o.call(b, d) && a.push(d);
        b = [];
        for (c = 0; c < a.length; c++) {
            d = a[c];
            var h = d;
            f = e[d];
            if (!f || !f.dependencies) h += " is not defined";
            else if (Q(f)) h += " is ready";
            else {
                d = [];
                for (var i = 0; i < f.dependencies.length; i++) g = f.dependencies[i], (!e[g] || !Q(e[g])) && d.push(g.id);
                h += " is waiting for " + d.join(", ")
            }
            b.push(h)
        }
        return b.join("\n")
    }

    function r(a) {
        this.name = "ModuleError", this.message = a, this.stack = Error(a).stack, this.framesToPop = 2
    }
    r.prototype = Object.create(Error.prototype);
    r.prototype.constructor = r;
    var s = (a.Env || {}).profile_require_factories,
        t = a.performance || a.msPerformance || a.webkitPerformance || {},
        u;
    if (t.now && t.timing && t.timing.navigationStart) {
        var v = t.timing.navigationStart;
        u = function() {
            return t.now() + v
        }
    } else u = function() {
        return Date.now()
    };
    var w = 0,
        x = 0;

    function y(a) {
        x++;
        var b = e[a];
        if (b && b.exports != null) {
            b.refcount-- === 1 && (e[a] = void 0);
            return b.exports
        }
        return A(a)
    }

    function z(b) {
        var c = e[b];
        b = f[b];
        if (c.factoryLength === -1) {
            var d = s && a.ProfilingCounters,
                g;
            d && (g = d.startTiming("FACTORY_COMPILE_TIME"));
            c.factoryLength = c.factory.length;
            g != null && (d = d.stopTiming(g), b.compileTime += d)
        }
        return c.factoryLength
    }

    function A(b) {
        if (a.ErrorUtils && !a.ErrorUtils.inGuard()) return a.ErrorUtils.applyWithGuard(A, null, [b]);
        var d = e[b];
        if (!d) {
            var g = 'Requiring unknown module "' + b + '"';
            throw new r(g)
        }
        var h;
        if (d.hasError) throw new r('Requiring module "' + b + '" which threw an exception: ' + d.error.message);
        if (!Q(d)) throw new r('Requiring module "' + b + '" with unresolved dependencies: ' + q([b]));
        g = d.exports = {};
        var i = d.factory;
        if (p.call(i) === "[object Function]") {
            var j = d.dependencies,
                l = j.length;
            try {
                try {
                    U(d)
                } catch (a) {
                    B(a, b)
                }
                var o = [],
                    t = l;
                d.special & m && (o = c.slice(0), o[c.length - 2] = d, o[c.length - 1] = g, t += o.length);
                if (d.special & k) {
                    g = z(b);
                    t = Math.min(l + o.length, g)
                }
                for (var g = 0; g < l; g++) {
                    var v = j[g];
                    o.length < t && o.push(y.call(null, v.id))
                }++w;
                v = s && a.ProfilingCounters;
                var x;
                v && (v.incrementCounter("FACTORY_COUNT", 1), x = v.startTiming("FACTORY_EXEC_TIME"));
                try {
                    t = i.apply(d.context || a, o)
                } catch (a) {
                    B(a, b)
                } finally {
                    if (s) {
                        j = u();
                        l = 0;
                        x != null && (l = v.stopTiming(x));
                        g = f[d.id];
                        g.factoryTime = l;
                        g.factoryEnd = j;
                        if (i.__SMmeta)
                            for (var C in i.__SMmeta) Object.prototype.hasOwnProperty.call(i.__SMmeta, C) && (g[C] = i.__SMmeta[C])
                    }
                }
            } catch (a) {
                d.hasError = !0;
                d.error = a;
                d.exports = null;
                throw a
            }
            t && (d.exports = t);
            if (typeof d.exports === "function") {
                o = d.exports;
                v = o.__superConstructor__;
                (!o.displayName || v && v.displayName === o.displayName) && (o.displayName = (o.name || "(anonymous)") + " [from " + b + "]")
            }
            d.factoryFinished = !0
        } else d.exports = i;
        l = "__isRequired__" + b;
        j = e[l];
        j && !Q(j) && H(l, n);
        d.refcount-- === 1 && (e[b] = void 0);
        return d.exports
    }

    function B(a, b) {
        a instanceof Error || (a = new Error(a));
        if (e.ex && e.erx) {
            var c = y.call(null, "ex"),
                d = y.call(null, "erx");
            d = d(a.message);
            d[0].indexOf(' from module "%s"') < 0 && (d[0] += ' from module "%s"', d[d.length] = b);
            a.message = c.apply(null, d)
        }
        throw a
    }

    function C() {
        var a = 0;
        for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (a += f[b].factoryTime);
        return a
    }

    function D() {
        var a = 0;
        for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (a += f[b].compileTime);
        return a
    }

    function E() {
        return w
    }

    function F() {
        return x
    }

    function G() {
        var a = {};
        for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (a[b] = f[b]);
        return a
    }

    function H(a, b, c, g, h, i, j) {
        b === void 0 ? (b = [], c = a, a = M()) : c === void 0 && (c = b, p.call(a) === "[object Array]" ? (b = a, a = M(b.join(","))) : b = []);
        var k = {
                cancel: K.bind(this, a)
            },
            l = e[a];
        if (!b && !c && i) {
            I(a).refcount += i;
            return k
        }
        f[a] = {
            id: a,
            dependencies: b,
            meta: j,
            category: g,
            defined: s ? u() : null,
            compileTime: null,
            factoryTime: null,
            factoryEnd: null
        };
        j = b.map(I);
        l = e[a];
        if (l) {
            if (l.dependencies && !l.reload) return k;
            i && (l.refcount += i);
            l.factory = c;
            l.dependencies = j;
            l.context = h;
            l.special = g
        } else l = new J(a, i || 0, null, c, j, h, g), e[a] = l;
        T(l);
        if (d.length > 0) {
            b = d;
            d = [];
            while (b.length > 0) y.call(null, b.pop().id)
        }
        return k
    }

    function I(a) {
        var b = e[a];
        if (b) return b;
        b = new J(a, 0);
        e[a] = b;
        return b
    }

    function J(a, b, c, d, e, f, g) {
        this.id = a, this.refcount = b, this.exports = c || null, this.factory = d, this.factoryLength = -1, this.factoryFinished = !1, this.dependencies = e, this.depPosition = 0, this.context = f, this.special = g || 0, this.hasError = !1, this.error = null, this.ranRecursiveSideEffects = !1, this.sideEffectDependencyException = null, this.nextDepWaitingHead = null, this.nextDepWaitingNext = null, this.tarjanGeneration = -1, this.tarjanLow = 0, this.tarjanIndex = 0, this.tarjanOnStack = !1
    }

    function K(a) {
        if (!e[a]) return;
        var b = e[a];
        e[a] = void 0;
        if (b.dependencies)
            for (var a = 0; a < b.dependencies.length; a++) {
                var c = b.dependencies[a];
                c.refcount-- === 1 && K(c.id)
            }
    }

    function L(a, b, c) {
        return H("__requireLazy__" + (a.length > 0 ? a.join(",") + "__" : "") + g++, a, $()(b, "requireLazy", {
            propagationType: 0
        }), j, c, 1)
    }

    function M(a) {
        return "__mod__" + (a ? a + "__" : "") + g++
    }

    function N(a, b, c) {
        c.tarjanGeneration != h && (c.tarjanGeneration = h, c.tarjanLow = c.tarjanIndex = i++, c.tarjanOnStack = !0, b.push(c));
        if (c.dependencies != null)
            for (var d = c.depPosition; d < c.dependencies.length; d++) {
                var e = c.dependencies[d];
                e.tarjanGeneration != h ? (N(a, b, e), c.tarjanLow = Math.min(c.tarjanLow, e.tarjanLow)) : e.tarjanOnStack && (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanIndex))
            }
        if (c.tarjanLow == c.tarjanIndex) {
            e = [];
            do {
                d = b.pop();
                d.tarjanOnStack = !1;
                e.push(d);
                if (c == b[0] && d != c && d.dependencies != null)
                    for (var f = d.depPosition; f < d.dependencies.length; f++) {
                        var g = d.dependencies[f];
                        !Q(g) && a.indexOf(g) == -1 && b.indexOf(g) == -1 && e.indexOf(g) == -1 && a.push(g)
                    }
            } while (d != c)
        }
    }

    function O(a) {
        h++, N(a.dependencies, [], a), a.depPosition++, T(a)
    }

    function P(a, b) {
        var c = b;
        while (!0) {
            if (c.dependencies && c.depPosition != c.dependencies.length) c = c.dependencies[c.depPosition];
            else break;
            if (c == a) {
                O(a);
                return
            }
        }
        a.nextDepWaitingNext = b.nextDepWaitingHead;
        b.nextDepWaitingHead = a
    }

    function Q(a) {
        return a.dependencies != null && a.depPosition >= a.dependencies.length
    }

    function R(a) {
        a.depPosition++, T(a)
    }

    function S(a) {
        var b = a.nextDepWaitingHead;
        a.nextDepWaitingHead = null;
        while (b !== null) {
            a = b;
            b = a.nextDepWaitingNext;
            a.nextDepWaitingNext = null;
            var c = !e[a.id];
            c || R(a)
        }
    }

    function aa(a) {
        return a.special & j
    }

    function T(a) {
        while (a.depPosition < a.dependencies.length) {
            var b = a.dependencies[a.depPosition],
                c = Q(b);
            if (!c && a != b) {
                P(a, b);
                return
            }
            a.depPosition++
        }
        aa(a) && d.push(a);
        a.nextDepWaitingHead !== null && S(a)
    }

    function U(a) {
        if (a.sideEffectDependencyException) throw a.sideEffectDependencyException;
        if (a.ranRecursiveSideEffects) return;
        a.ranRecursiveSideEffects = !0;
        var b = a.dependencies;
        if (b)
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    U(d)
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b
                }
                if (d.special & l) try {
                    y.call(null, d.id)
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b
                }
            }
    }

    function V(a, b) {
        e[a] = new J(a, 0, b), f[a] = {
            id: a,
            dependencies: [],
            category: 0,
            compileTime: null,
            factoryLengthAccessTime: null,
            factoryTime: null,
            factoryEnd: null
        }
    }
    V("module", 0);
    V("exports", 0);
    V("define", H);
    V("global", a);
    V("require", y);
    V("requireDynamic", W);
    V("requireLazy", L);
    V("requireWeak", X);
    V("ifRequired", Y);
    c = [y.call(null, "global"), y.call(null, "require"), y.call(null, "requireDynamic"), y.call(null, "requireLazy"), null, null];
    H.amd = {};
    a.define = H;
    a.require = y;
    a.requireDynamic = W;
    a.requireLazy = L;

    function W(a, b) {
        throw new ReferenceError("requireDynamic is not defined")
    }

    function X(a, b) {
        Y.call(null, a, function(a) {
            b(a)
        }, function() {
            H("__requireWeak__" + a + "__" + g++, ["__isRequired__" + a], $()(function() {
                b(e[a].exports)
            }, "requireWeak"), j, null, 1)
        })
    }

    function Y(a, b, c) {
        a = e[a];
        if (a && a.factoryFinished) {
            if (typeof b === "function") return b(a.exports)
        } else if (typeof c === "function") return c()
    }
    b = {
        getModules: function() {
            var a = {};
            for (var b in e) e[b] && Object.prototype.hasOwnProperty.call(e, b) && (a[b] = e[b]);
            return a
        },
        modulesMap: e,
        debugUnresolvedDependencies: q
    };

    function Z(a) {
        return a
    }

    function $() {
        var b = a.TimeSlice && a.TimeSlice.guard ? a.TimeSlice.guard : Z,
            c = a.ScheduleJSWork ? a.ScheduleJSWork : Z;
        return function() {
            return c(b.apply(void 0, arguments))
        }
    }
    V("__getFactoryTime", C);
    V("__getCompileTime", D);
    V("__getTotalFactories", E);
    V("__getTotalRequireCalls", F);
    V("__getModuleTimeDetails", G);
    V("__debug", b);
    a.__d = function(a, b, c, d) {
        $()(function() {
            H(a, b, c, (d || k) | m, null, null, null)
        }, "define " + a, {
            root: !0
        })()
    };
    if (a.__d_stub) {
        for (var X = 0; X < a.__d_stub.length; X++) a.__d.apply(null, a.__d_stub[X]);
        delete a.__d_stub
    }
    if (a.__rl_stub) {
        for (var W = 0; W < a.__rl_stub.length; W++) L.apply(null, a.__rl_stub[W]);
        delete a.__rl_stub
    }
})(this);
typeof console === "undefined" && (function() {
    function a() {}
    console = {
        log: a,
        info: a,
        warn: a,
        debug: a,
        dir: a,
        error: a
    }
})();
(function(a) {
    var b = a.performance;
    b && b.setResourceTimingBufferSize && (b.setResourceTimingBufferSize(1e5), b.onresourcetimingbufferfull = function() {
        a.__isresourcetimingbufferfull = !0
    }, b.setResourceTimingBufferSize = function() {})
})(this);
__d("Env", [], (function(a, b, c, d, e, f) {
    b = {
        ajaxpipe_token: null,
        compat_iframe_token: null,
        iframeKey: "",
        isCQuick: !1,
        start: Date.now(),
        nocatch: !1
    };
    a.Env && Object.assign(b, a.Env);
    a.Env = b;
    e.exports = b
}), null);
__d("TAALOpcodes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4
    };
    e.exports = a
}), null);
__d("TAAL", ["TAALOpcodes"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        blameToPreviousFile: function(a) {
            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_FILE])
        },
        blameToPreviousFrame: function(a) {
            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_FRAME])
        },
        blameToPreviousDirectory: function(a) {
            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_DIR])
        },
        applyOpcodes: function(a, b) {
            return b && b.length ? a + " TAAL[" + b.join(";") + "]" : a
        }
    };
    e.exports = a
}), null);
__d("eprintf", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        var e = c.map(function(a) {
                return String(a)
            }),
            f = a.split("%s").length - 1;
        if (f !== e.length) return g("eprintf args number mismatch: %s", JSON.stringify([a].concat(e)));
        var h = 0;
        return a.replace(/%s/g, function() {
            return String(e[h++])
        })
    }
    e.exports = g
}), null);
__d("ex", ["eprintf"], (function(a, b, c, d, e, f) {
    function g(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        var e = c.map(function(a) {
                return String(a)
            }),
            f = a.split("%s").length - 1;
        return f !== e.length ? g("ex args number mismatch: %s", JSON.stringify([a].concat(e))) : g._prefix + JSON.stringify([a].concat(e)) + g._suffix
    }
    g._prefix = "<![EX[";
    g._suffix = "]]>";
    e.exports = g
}), null);
__d("sprintf", [], (function(a, b, c, d, e, f) {
    function a(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        var e = 0;
        return a.replace(/%s/g, function() {
            return String(c[e++])
        })
    }
    e.exports = a
}), null);
__d("invariant", ["Env", "TAAL", "ex", "sprintf"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = b("ex");

    function a(a, c) {
        __p && __p();
        if (!a) {
            var d = c;
            for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), i = 2; i < e; i++) f[i - 2] = arguments[i];
            if (typeof d === "number") {
                var j = h(d, f),
                    k = j.message,
                    l = j.decoderLink;
                d = k;
                f.unshift(l)
            } else if (d === void 0) {
                d = "Invariant: ";
                for (var m = 0; m < f.length; m++) d += "%s,"
            }
            d = b("TAAL").blameToPreviousFrame(d);
            var n = new Error(g.apply(void 0, [d].concat(f)));
            n.name = "Invariant Violation";
            n.messageWithParams = [d].concat(f);
            throw n
        }
    }

    function h(a, c) {
        var d = "Minified invariant #" + a + "; %s";
        c.length > 0 && (d += " Params: " + c.map(function(a) {
            return "%s"
        }).join(", "));
        a = b("Env").show_invariant_decoder === !0 ? "visit " + i(a, c) + " to see the full message." : "";
        return {
            message: d,
            decoderLink: a
        }
    }

    function i(a, b) {
        a = "https://our.intern.facebook.com/intern/invariant/" + a + "/";
        b.length > 0 && (a += "?" + b.map(function(a, b) {
            return "args[" + b + "]=" + encodeURIComponent(String(a))
        }).join("&"));
        return a
    }
    e.exports = a
}), null);
__d("ArbiterToken", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a(a, b) {
            this.unsubscribe = function() {
                for (var a = 0; a < this.$2.length; a++) this.$2[a].remove();
                this.$2.length = 0
            }, this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.isForArbiterInstance = function(a) {
            this.$1 || g(0, 2506);
            return this.$1 === a
        };
        return a
    }();
    e.exports = a
}), null);
__d("ErrorConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        ANONYMOUS_GUARD_TAG: "<anonymous guard>",
        EVAL_FRAME_PATTERN_CHROME: /^at .*eval eval (at .*\:\d+\:\d+), .*$/,
        GLOBAL_ERROR_HANDLER_TAG: typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
        GLOBAL_REACT_ERROR_HANDLER_TAG: "<global.react>",
        IE_AND_OTHER_FRAME_PATTERN: /(.*)[@\s][^\s]+$/,
        IE_STACK_TRACE_REFERENCES: ["Unknown script code", "Function code", "eval code"]
    };
    e.exports = a
}), null);
__d("ErrorSerializer", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a) {
        return "<![EX[" + JSON.stringify(g(a)) + "]]>"
    }

    function b(a) {
        try {
            var b = k(a, /^<\!\[EX\[(\[.*\])\]\]>$/);
            b = b ? JSON.parse(b[0]) : [a];
            var c = b[0];
            b = b.slice(1);
            c = j(c);
            b && b.length > 0 && (c.params = b);
            return c
        } catch (b) {
            return {
                message: "Unable to parse error message %s because %s",
                params: [a, b.message]
            }
        }
    }

    function c(a) {
        var b = a.message || "",
            c = a.params || [],
            d = 0;
        return [b.replace(/%s/g, function() {
            return d < c.length ? String(c[d++]) : "NOPARAM"
        }), d < c.length ? " PARAMS" + JSON.stringify(c.slice(d)) : "", h(a)].join("")
    }

    function g(a) {
        return [a.message + h(a)].concat(i(a))
    }

    function h(a) {
        a = a.taalOpcodes;
        return a && a.length > 0 ? " TAAL[" + a.join(";") + "]" : ""
    }

    function i(a) {
        return ((a = a.params) != null ? a : []).map(function(a) {
            return String(a)
        })
    }

    function j(a) {
        __p && __p();
        var b = k(a, /^(.*) TAAL\[([1234](?:;[1234])*)\]$/);
        b = (b = b) != null ? b : [a, null];
        a = b[0];
        b = b[1];
        a = {
            message: a
        };
        if (b) {
            b = b.split(";").map(function(a) {
                return parseInt(a, 10)
            });
            b.length > 0 && (a.taalOpcodes = b)
        }
        return a
    }

    function k(a, b) {
        if (typeof a === "string") {
            a = a.match(b);
            if (a && a.length > 0) return a.slice(1)
        }
    }
    e.exports = {
        parse: b,
        stringify: a,
        toFormattedMessage: c,
        toMessageWithParams: g
    }
}), null);
__d("BaseErrorUtils", ["ErrorConstants", "ErrorSerializer"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    Error.stackTraceLimit != null && Error.stackTraceLimit < 40 && (Error.stackTraceLimit = 40);
    var g = {
        getColumn: function(a) {
            a = (a = a.columnNumber) != null ? a : "";
            return String(a)
        },
        getColumnFromStackData: function(a) {
            return a[0] && a[0].column || ""
        },
        getIEFrame: function(a) {
            for (var c = 0; c < b("ErrorConstants").IE_STACK_TRACE_REFERENCES.length; c++) {
                var d = " " + b("ErrorConstants").IE_STACK_TRACE_REFERENCES[c];
                if (a.endsWith(d)) return [a, a.substring(0, a.length - d.length)]
            }
            return null
        },
        getLine: function(a) {
            a = (a = a.lineNumber) != null ? a : "";
            return String(a)
        },
        getLineFromStackData: function(a) {
            return a[0] && a[0].line || ""
        },
        getReactComponentStack: function(a) {
            if (a == null || a === "") return null;
            a = a.split("\n");
            a.splice(0, 1);
            return a.map(function(a) {
                return a.trim()
            })
        },
        getScript: function(a) {
            a = (a = a.fileName) != null ? a : "";
            return String(a)
        },
        getScriptFromStackData: function(a) {
            return a[0] && a[0].script || ""
        },
        getSimpleHash: function(a) {
            var b = 0;
            if (a.length === 0) return String(b);
            for (var c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                b = (b << 5) - b + d;
                b |= 0
            }
            return String(b)
        },
        normalizeError: function(a) {
            var c = g.normalizeErrorStack(a),
                d = g.getReactComponentStack(a.componentStack),
                e = b("ErrorSerializer").parse(a.message);
            e = {
                _originalError: a,
                cerror: !0,
                column: g.getColumn(a) || g.getColumnFromStackData(c),
                deferredSource: null,
                extra: {},
                fbloggerMetadata: [],
                guard: "",
                guardList: [],
                line: g.getLine(a) || g.getLineFromStackData(c),
                message: b("ErrorSerializer").toFormattedMessage(e),
                messageWithParams: b("ErrorSerializer").toMessageWithParams(e),
                name: a.name,
                reactComponentStack: d,
                script: g.getScript(a) || g.getScriptFromStackData(c),
                serverHash: null,
                stack: c.map(function(a) {
                    return a.text
                }).join("\n"),
                stackFrames: c,
                type: ""
            };
            typeof window !== "undefined" && window && window.location && (e.windowLocationURL = window.location.href);
            for (var f in e) e[f] == null && delete e[f];
            return e
        },
        normalizeErrorStack: function(a) {
            __p && __p();
            var c = a.stack;
            if (c == null) return [];
            a = a.message;
            var d = c.replace(/^[\w \.\<\>:]+:\s/, "");
            a = a != null && d.startsWith(a) ? d.substr(a.length + 1) : d !== c ? d.replace(/^.*?\n/, "") : c;
            return a.split(/\n\n/)[0].replace(/[\(\)]|\[.*?\]/g, "").split("\n").map(function(a) {
                __p && __p();
                a = a.trim();
                var c = a.match(b("ErrorConstants").EVAL_FRAME_PATTERN_CHROME);
                c && (a = c[1]);
                var d, e;
                c = a.match(/:(\d+)(?::(\d+))?$/);
                c && (d = c[1], e = c[2], a = a.slice(0, -c[0].length));
                var f;
                c = g.getIEFrame(a) || a.match(b("ErrorConstants").IE_AND_OTHER_FRAME_PATTERN);
                if (c) {
                    a = a.substring(c[1].length + 1);
                    c = c[1].match(/(?:at)?\s*(.*)(?:[^\s]+|$)/);
                    f = c ? c[1] : ""
                }
                a.includes("charset=utf-8;base64,") && (a = "<inlined-file>");
                c = {
                    column: e,
                    identifier: f,
                    line: d,
                    script: a
                };
                var h = f != null && f !== "" ? " " + f + " (" : " ",
                    i = h.length > 1 ? ")" : "",
                    j = d != null && d !== "" ? ":" + d : "",
                    k = e != null && e !== "" ? ":" + e : "";
                h = "    at" + h + a + j + k + i;
                return babelHelpers["extends"]({}, c, {
                    text: h
                })
            })
        }
    };
    e.exports = g
}), null);
__d("FBLoggerMetadata", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [];
    a = function() {
        __p && __p();

        function a() {
            this.metadata = [].concat(g)
        }
        var b = a.prototype;
        b.addMetadata = function(a, b, c) {
            this.metadata.push([a, b, c]);
            return this
        };
        b.isEmpty = function() {
            return this.metadata.length === 0
        };
        b.formatMetadata = function() {
            var a = [];
            this.metadata.forEach(function(b) {
                if (b && b.length) {
                    b = b.map(function(a) {
                        return a != null ? String(a).replace(/:/g, "_") : ""
                    }).join(":");
                    a.push(b)
                }
            });
            return a
        };
        a.addGlobalMetadata = function(a, b, c) {
            g.push([a, b, c])
        };
        a.getGlobalMetadata = function() {
            return g
        };
        a.unsetGlobalMetadata = function(a, b) {
            g = g.filter(function(c) {
                return !(Array.isArray(c) && c[0] === a && c[1] === b)
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("erx", ["ex"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a) {
        __p && __p();
        if (typeof a !== "string") return a;
        var c = a.indexOf(b("ex")._prefix),
            d = a.lastIndexOf(b("ex")._suffix);
        if (c < 0 || d < 0) return [a];
        var e = c + b("ex")._prefix.length,
            f = d + b("ex")._suffix.length;
        if (e >= d) return ["erx slice failure: %s", a];
        c = a.substring(0, c);
        f = a.substring(f);
        a = a.substring(e, d);
        try {
            e = JSON.parse(a);
            e[0] = c + e[0] + f;
            return e
        } catch (b) {
            return ["erx parse failure: %s because %s", a, b.message]
        }
    }
    e.exports = a
}), null);
__d("removeFromArray", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        b = a.indexOf(b);
        b !== -1 && a.splice(b, 1)
    }
    e.exports = a
}), null);
__d("ErrorUtils", ["BaseErrorUtils", "Env", "ErrorConstants", "FBLoggerMetadata", "eprintf", "erx", "removeFromArray", "sprintf"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = "<generated guard>",
        h = /^https?:\/\//i,
        i = /^Type Mismatch for/,
        j = [],
        k, l = [],
        m = 50,
        n = [],
        o = !1,
        p = !1,
        q = !1,
        r = /\bnocatch\b/.test(location.search);

    function s(a) {
        a = a.columnNumber || a.column;
        return a != null ? String(a) : ""
    }

    function t(a) {
        return a[0] && a[0].column || ""
    }

    function u(a) {
        a = a.lineNumber || a.line;
        return a != null ? String(a) : ""
    }

    function v(a) {
        return a[0] && a[0].line || ""
    }

    function w(a) {
        a = a.fileName || a.sourceURL;
        return a != null ? String(a) : ""
    }

    function x(a) {
        return a[0] && a[0].script || ""
    }

    function y(a) {
        __p && __p();
        var c = a.stackTrace || a.stack;
        if (c == null) return [];
        a = a.message;
        var d = c.replace(/^[\w \.\<\>:]+:\s/, "");
        a = a != null && d.startsWith(a) ? d.substr(a.length + 1) : d !== c ? d.replace(/^.*?\n/, "") : c;
        return a.split(/\n\n/)[0].replace(/[\(\)]|\[.*?\]/g, "").split("\n").map(function(a) {
            __p && __p();
            a = a.trim();
            var c = a.match(b("ErrorConstants").EVAL_FRAME_PATTERN_CHROME);
            c && (a = c[1]);
            var d, e;
            c = a.match(/:(\d+)(?::(\d+))?$/);
            c && (d = c[1], e = c[2], a = a.slice(0, -c[0].length));
            var f;
            c = b("BaseErrorUtils").getIEFrame(a) || a.match(b("ErrorConstants").IE_AND_OTHER_FRAME_PATTERN);
            if (c) {
                a = a.substring(c[1].length + 1);
                c = c[1].match(/(?:at)?\s*(.*)(?:[^\s]+|$)/);
                f = c ? c[1] : ""
            }
            a.includes("charset=utf-8;base64,") && (a = "<inlined-file>");
            c = {
                column: e,
                identifier: f,
                line: d,
                script: a
            };
            k && k(c);
            a = "    at" + (c.identifier ? " " + c.identifier + " (" : " ") + c.script + (c.line ? ":" + c.line : "") + (c.column ? ":" + c.column : "") + (c.identifier ? ")" : "");
            return babelHelpers["extends"]({}, c, {
                text: a
            })
        })
    }

    function z(a) {
        n.unshift(a), o = !0
    }

    function A() {
        n.shift(), o = n.length !== 0
    }
    var B = {
        ANONYMOUS_GUARD_TAG: b("ErrorConstants").ANONYMOUS_GUARD_TAG,
        GENERATED_GUARD_TAG: g,
        GLOBAL_ERROR_HANDLER_TAG: b("ErrorConstants").GLOBAL_ERROR_HANDLER_TAG,
        history: l,
        addListener: function(a, b) {
            b === void 0 && (b = !1), j.push(a), b || l.forEach(function(b) {
                return a(b.error, b.loggingType)
            })
        },
        removeListener: function(a) {
            b("removeFromArray")(j, a)
        },
        setSourceResolver: function(a) {
            k = a
        },
        applyWithGuard: function(c, d, e, f, g, h) {
            __p && __p();
            z(g || b("ErrorConstants").ANONYMOUS_GUARD_TAG);
            b("Env").nocatch && (r = !0);
            if (r) {
                try {
                    g = c.apply(d, e || [])
                } finally {
                    A()
                }
                return g
            }
            try {
                return Function.prototype.apply.call(c, d, e || [])
            } catch (q) {
                g = q;
                if (g == null) try {
                    var i = d,
                        j = function(a) {
                            __p && __p();
                            if (a == null) return "<unset>";
                            else if (typeof a === "object" && a.toString) return a.toString();
                            else if (typeof a === "boolean" && a.toString) return a.toString();
                            else if (typeof a === "number" && a.toString) return a.toString();
                            else if (typeof a === "string") return a;
                            else if (typeof a === "symbol" && a.toString) return a.toString();
                            else if (typeof a === "function" && a.toString) return a.toString();
                            return "<unset>"
                        };
                    if (d != null)
                        if (d == window) i = "[The window object]";
                        else if (d == a) i = "[The global object]";
                    else {
                        var k = d,
                            l = {};
                        Object.keys(k).map(function(a, b) {
                            b = k[a];
                            l[a] = j(b)
                        });
                        i = l
                    }
                    d = (e || []).map(j);
                    var m = "applyWithGuard threw null or undefined:\nFunc: %s\nContext: %s\nArgs: %s",
                        o = c.toString && c.toString().substr(0, 1024);
                    i = JSON.stringify(i).substr(0, 1024);
                    d = JSON.stringify(d).substr(0, 1024);
                    var p = b("sprintf")(m, o ? o : "this function does not support toString", i, d);
                    g = new Error(p);
                    g.messageWithParams = [m, o ? o : "this function does not support toString", i, d]
                } catch (a) {
                    p = "applyWithGuard threw null or undefined with unserializable data:\nFunc: %s\nMetaEx: %s";
                    m = c.toString && c.toString().substr(0, 1024);
                    o = b("sprintf")(p, m ? m : "this function does not support toString", a.message);
                    g = new Error(o);
                    g.messageWithParams = [o, m ? m : "this function does not support toString", a.message]
                }
                h && h.deferredSource && (g.deferredSource = h.deferredSource);
                i = B.normalizeError(g);
                f && f(i);
                i.extra || (i.extra = {});
                if (c) try {
                    i.extra[c.toString().substring(0, 100)] = "function"
                } catch (a) {}
                e && (i.extra[Array.from(e).toString().substring(0, 100)] = "args");
                i.guard = n[0];
                i.guardList = n.slice();
                B.reportError(i, !1, "GUARDED")
            } finally {
                A()
            }
        },
        guard: function(a, b, c) {
            b = b || a.name || g;

            function d() {
                return B.applyWithGuard(a, c || this, [].concat(Array.prototype.slice.call(arguments)), null, b)
            }
            a.__SMmeta && (d.__SMmeta = a.__SMmeta);
            return d
        },
        inGuard: function() {
            return o
        },
        normalizeError: function(a) {
            __p && __p();
            var c = a;
            a = a != null ? a : {};
            if (Object.prototype.hasOwnProperty.call(a, "_originalError")) return a;
            var d = y(a),
                e = !1;
            if (a.framesToPop) {
                var f = a.framesToPop,
                    g;
                while (f > 0 && d.length > 0) g = d.shift(), f--, e = !0;
                i.test(a.message) && a.framesToPop === 2 && g && (h.test(g.script) && (a.message += " at " + g.script + (g.line ? ":" + g.line : "") + (g.column ? ":" + g.column : "")))
            }
            f = b("BaseErrorUtils").getReactComponentStack(a.componentStack);
            var j = a.fbloggerMetadata ? a.fbloggerMetadata : [],
                l = b("FBLoggerMetadata").getGlobalMetadata().map(function(a) {
                    return a.join(":")
                });
            j = [].concat(j, l);
            j.length === 0 && (j = void 0);
            l = {
                _originalError: c,
                cerror: !1,
                column: e ? t(d) : s(a) || t(d),
                deferredSource: a.deferredSource,
                extra: a.extra,
                fbloggerMetadata: j,
                guard: a.guard,
                guardList: a.guardList,
                line: e ? v(d) : u(a) || v(d),
                message: a.message,
                messageWithParams: a.messageWithParams,
                name: a.name,
                reactComponentStack: f,
                script: e ? x(d) : w(a) || x(d),
                serverHash: a.serverHash,
                snapshot: a.snapshot,
                stack: d.map(function(a) {
                    return a.text
                }).join("\n"),
                stackFrames: d,
                type: a.type
            };
            typeof l.message === "string" ? l.messageWithParams = l.messageWithParams || b("erx")(l.message) : (l.messageObject = l.message, l.message = String(l.message) + " (" + typeof l.message + ")");
            l.messageWithParams && (l.message = b("eprintf").apply(void 0, l.messageWithParams));
            typeof window !== "undefined" && window && window.location && (l.windowLocationURL = window.location.href);
            k && k(l);
            for (var m in l) l[m] == null && delete l[m];
            return l
        },
        onerror: function(a, c, d, e, f) {
            f = f || {}, f.message = f.message || a, f.script = f.script || c, f.line = f.line || d, f.column = f.column || e, f.guard = b("ErrorConstants").GLOBAL_ERROR_HANDLER_TAG, f.guardList = [b("ErrorConstants").GLOBAL_ERROR_HANDLER_TAG], B.reportError(f, !0, "FATAL")
        },
        reportError: function(c, d, e) {
            __p && __p();
            d === void 0 && (d = !1);
            e === void 0 && (e = "DEPRECATED");
            if (p) return !1;
            c.reactComponentStack && z(b("ErrorConstants").GLOBAL_REACT_ERROR_HANDLER_TAG);
            n.length > 0 && (c.guard = c.guard || n[0], c.guardList = n.slice());
            c.reactComponentStack && A();
            c = B.normalizeError(c);
            if (!d) {
                d = a.console;
                var f = c._originalError;
                f = f != null ? "" + f.message : "";
                if ((!d[c.type] || c.type === "error") && !q) {
                    f = f.length > 80 ? f.slice(0, 77) + "..." : f;
                    d.error('ErrorUtils caught an error: "' + f + "\". Subsequent errors won't be logged; see https://fburl.com/debugjs.");
                    q = !0
                }
            }
            l.length > m && l.splice(m / 2, 1);
            l.push({
                error: c,
                loggingType: e
            });
            p = !0;
            for (var d = 0; d < j.length; d++) try {
                j[d](c, e)
            } catch (a) {}
            p = !1;
            return !0
        }
    };
    a.onerror = B.onerror;
    e.exports = a.ErrorUtils = B;
    typeof __t === "function" && __t.setHandler && __t.setHandler(B.reportError)
}), 3);
__d("CallbackDependencyManager", ["ErrorUtils"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = new Map(), this.$2 = new Map(), this.$3 = 1, this.$4 = new Map()
        }
        var c = a.prototype;
        c.$5 = function(a, b) {
            __p && __p();
            var c = 0,
                d = new Set();
            for (var e = 0, f = b.length; e < f; e++) d.add(b[e]);
            for (var b = d.keys(), e = Array.isArray(b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (e) {
                    if (f >= b.length) break;
                    d = b[f++]
                } else {
                    f = b.next();
                    if (f.done) break;
                    d = f.value
                }
                d = d;
                if (this.$4.get(d)) continue;
                c++;
                var g = this.$1.get(d);
                g === void 0 && (g = new Map(), this.$1.set(d, g));
                g.set(a, (g.get(a) || 0) + 1)
            }
            return c
        };
        c.$6 = function(a) {
            __p && __p();
            a = this.$1.get(a);
            if (!a) return;
            for (var c = a.entries(), d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= c.length) break;
                    f = c[e++]
                } else {
                    e = c.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                var g = f[0];
                f = f[1] - 1;
                a.set(g, f);
                f <= 0 && a["delete"](g);
                f = this.$2.get(g);
                if (f !== void 0) {
                    f.$7--;
                    if (f.$7 <= 0) {
                        f = f.$8;
                        this.$2["delete"](g);
                        b("ErrorUtils").applyWithGuard(f)
                    }
                }
            }
        };
        c.addDependenciesToExistingCallback = function(a, b) {
            var c = this.$2.get(a);
            if (!c) return null;
            b = this.$5(a, b);
            c.$7 += b;
            return a
        };
        c.isPersistentDependencySatisfied = function(a) {
            return !!this.$4.get(a)
        };
        c.satisfyPersistentDependency = function(a) {
            this.$4.set(a, 1), this.$6(a)
        };
        c.satisfyNonPersistentDependency = function(a) {
            var b = this.$4.get(a) === 1;
            b || this.$4.set(a, 1);
            this.$6(a);
            b || this.$4["delete"](a)
        };
        c.registerCallback = function(a, c) {
            var d = this.$3;
            this.$3++;
            c = this.$5(d, c);
            if (c === 0) {
                b("ErrorUtils").applyWithGuard(a);
                return null
            }
            this.$2.set(d, {
                $8: a,
                $7: c
            });
            return d
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventSubscription", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        this.remove = function() {
            this.subscriber && (this.subscriber.removeSubscription(this), this.subscriber = null)
        }, this.subscriber = a
    };
    e.exports = a
}), null);
__d("EmitterSubscription", ["EventSubscription"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d) {
            b = a.call(this, b) || this;
            b.listener = c;
            b.context = d;
            return b
        }
        return b
    }(b("EventSubscription"));
    e.exports = a
}), null);
__d("EventSubscriptionVendor", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            this.$1 = {}
        }
        var b = a.prototype;
        b.addSubscription = function(a, b) {
            b.subscriber === this || g(0, 2828);
            this.$1[a] || (this.$1[a] = []);
            var c = this.$1[a].length;
            this.$1[a].push(b);
            b.eventType = a;
            b.key = c;
            return b
        };
        b.removeAllSubscriptions = function(a) {
            a === void 0 ? this.$1 = {} : delete this.$1[a]
        };
        b.removeSubscription = function(a) {
            var b = a.eventType;
            a = a.key;
            b = this.$1[b];
            b && delete b[a]
        };
        b.getSubscriptionsForType = function(a) {
            return this.$1[a]
        };
        return a
    }();
    e.exports = a
}), null);
__d("requireCond", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        throw new Error("Cannot use raw untransformed requireCond.")
    }
    e.exports = a
}), null);
__d("FBLogger", ["requireCond", "cr:794450"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("cr:794450")
}), null);
__d("emptyFunction", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        return function() {
            return a
        }
    }
    b = function() {};
    b.thatReturns = a;
    b.thatReturnsFalse = a(!1);
    b.thatReturnsTrue = a(!0);
    b.thatReturnsNull = a(null);
    b.thatReturnsThis = function() {
        return this
    };
    b.thatReturnsArgument = function(a) {
        return a
    };
    e.exports = b
}), null);
__d("unrecoverableViolation", ["FBLogger", "TAAL"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, c, d) {
        d = d === void 0 ? {} : d;
        d = d.error;
        c = b("FBLogger")(c);
        d && (c = c.catching(d));
        c.blameToPreviousFrame().mustfix(a);
        return new Error(b("TAAL").blameToPreviousFrame(a))
    }
    e.exports = a
}), null);
__d("BaseEventEmitter", ["EmitterSubscription", "EventSubscriptionVendor", "FBLogger", "emptyFunction", "requireCond", "unrecoverableViolation", "cr:882315", "cr:838175"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$2 = new(b("EventSubscriptionVendor"))(), this.$1 = null
        }
        var c = a.prototype;
        c.addListener = function(a, c, d) {
            return this.$2.addSubscription(a, new(b("EmitterSubscription"))(this.$2, c, d))
        };
        c.once = function(a, b, c) {
            var d = this;
            return this.addListener(a, function() {
                d.removeCurrentListener(), b.apply(c, arguments)
            })
        };
        c.removeAllListeners = function(a) {
            this.$2.removeAllSubscriptions(a)
        };
        c.removeCurrentListener = function() {
            if (!this.$1) throw b("unrecoverableViolation")("Not in an emitting cycle; there is no current subscription", "emitter");
            this.$2.removeSubscription(this.$1)
        };
        c.listeners = function(a) {
            a = this.$2.getSubscriptionsForType(a);
            return a ? a.filter(b("emptyFunction").thatReturnsTrue).map(function(a) {
                return a.listener
            }) : []
        };
        c.emit = function(a) {
            __p && __p();
            var b = this.$2.getSubscriptionsForType(a);
            if (b) {
                var c = Object.keys(b),
                    d;
                for (var e = 0; e < c.length; e++) {
                    var f = c[e],
                        g = b[f];
                    if (g) {
                        this.$1 = g;
                        if (d == null) {
                            d = [g, a];
                            for (var h = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; h < i; h++) d[h + 2] = h + 1 < 1 || arguments.length <= h + 1 ? void 0 : arguments[h + 1]
                        } else d[0] = g;
                        this.__emitToSubscription.apply(this, d)
                    }
                }
                this.$1 = null
            }
        };
        c.__emitToSubscription = function(a, c) {
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
            b("cr:838175") != null ? b("cr:838175").applyWithGuard(a.listener, a.context, e, null, "EventEmitter " + c + " event") : b("cr:882315") != null ? b("cr:882315").applyWithGuard(a.listener, a.context, e, {
                name: "EventEmitter " + c + " event"
            }) : (b("FBLogger")("emitter").mustfix("Either CometErrorGuard or ErrorUtils must be non-null"), Function.prototype.apply.call(a.listener, a.context, e || []))
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventEmitter", ["BaseEventEmitter"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("BaseEventEmitter"));
    e.exports = a
}), null);
__d("EventEmitterWithHolding", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a(a, b) {
            this.$2 = a, this.$3 = b, this.$1 = null, this.$5 = [], this.$4 = 0
        }
        var b = a.prototype;
        b.addListener = function(a, b, c) {
            return this.$2.addListener(a, b, c)
        };
        b.once = function(a, b, c) {
            return this.$2.once(a, b, c)
        };
        b.addRetroactiveListener = function(a, b, c) {
            var d = this.$2.addListener(a, b, c),
                e = this.$5;
            e.push(!1);
            this.$4++;
            this.$3.emitToListener(a, b, c);
            this.$4--;
            e[e.length - 1] && d.remove();
            e.pop();
            return d
        };
        b.removeAllListeners = function(a) {
            this.$2.removeAllListeners(a)
        };
        b.removeCurrentListener = function() {
            if (this.$4) {
                var a = this.$5;
                a[a.length - 1] = !0
            } else this.$2.removeCurrentListener()
        };
        b.listeners = function(a) {
            return this.$2.listeners(a)
        };
        b.emit = function(a) {
            var b;
            for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
            (b = this.$2).emit.apply(b, [a].concat(d))
        };
        b.emitAndHold = function(a) {
            var b, c;
            for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
            this.$1 = (b = this.$3).holdEvent.apply(b, [a].concat(e));
            (c = this.$2).emit.apply(c, [a].concat(e));
            this.$1 = null
        };
        b.releaseCurrentEvent = function() {
            this.$1 != null ? this.$3.releaseEvent(this.$1) : this.$4 > 0 && this.$3.releaseCurrentEvent()
        };
        b.releaseHeldEventType = function(a) {
            this.$3.releaseEventType(a)
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventHolder", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            this.$1 = {}, this.$2 = []
        }
        var b = a.prototype;
        b.holdEvent = function(a) {
            this.$1[a] = this.$1[a] || [];
            var b = this.$1[a],
                c = {
                    eventType: a,
                    index: b.length
                };
            for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
            b.push(e);
            return c
        };
        b.emitToListener = function(a, b, c) {
            var d = this,
                e = this.$1[a];
            if (!e) return;
            e.forEach(function(e, f) {
                if (!e) return;
                d.$2.push({
                    eventType: a,
                    index: f
                });
                b.apply(c, e);
                d.$2.pop()
            })
        };
        b.releaseCurrentEvent = function() {
            this.$2.length || g(0, 1764), this.releaseEvent(this.$2[this.$2.length - 1])
        };
        b.releaseEvent = function(a) {
            delete this.$1[a.eventType][a.index]
        };
        b.releaseEventType = function(a) {
            this.$1[a] = []
        };
        return a
    }();
    e.exports = a
}), null);
__d("Arbiter", ["invariant", "ArbiterToken", "CallbackDependencyManager", "ErrorUtils", "EventEmitter", "EventEmitterWithHolding", "EventHolder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function h(a) {
        return Array.isArray(a) ? a : [a]
    }

    function i(a) {
        return a instanceof j || a === j ? a : j
    }
    var j = function() {
            __p && __p();

            function a() {
                var a = new(b("EventEmitter"))();
                this.$3 = new k();
                this.$2 = new(b("EventEmitterWithHolding"))(a, this.$3);
                this.$1 = new(b("CallbackDependencyManager"))();
                this.$4 = []
            }
            var c = a.prototype;
            c.subscribe = function(a, c, d) {
                __p && __p();
                a = h(a);
                a.forEach(function(a) {
                    a && typeof a === "string" || g(0, 1966, a)
                });
                typeof c === "function" || g(0, 1967, c);
                d = d || "all";
                d === "new" || d === "all" || g(0, 1968, d);
                a = a.map(function(a) {
                    var b = this.$5.bind(this, c, a);
                    b.__SMmeta = c.__SMmeta;
                    if (d === "new") return this.$2.addListener(a, b);
                    this.$4.push({});
                    a = this.$2.addRetroactiveListener(a, b);
                    this.$4.pop();
                    return a
                }, this);
                return new(b("ArbiterToken"))(this, a)
            };
            c.$5 = function(a, c, d) {
                var e = this.$4[this.$4.length - 1];
                if (e[c] === !1) return;
                a = b("ErrorUtils").applyWithGuard(a, null, [c, d]);
                a === !1 && this.$2.releaseCurrentEvent();
                e[c] = a
            };
            c.unsubscribeCurrentSubscription = function() {
                this.$2.removeCurrentListener()
            };
            c.releaseCurrentPersistentEvent = function() {
                this.$2.releaseCurrentEvent()
            };
            c.subscribeOnce = function(a, b, c) {
                var d = this;
                a = this.subscribe(a, function(a, c) {
                    d.unsubscribeCurrentSubscription();
                    return b(a, c)
                }, c);
                return a
            };
            c.unsubscribe = function(a) {
                a.isForArbiterInstance(this) || g(0, 1969), a.unsubscribe()
            };
            c.inform = function(a, b, c) {
                __p && __p();
                var d = Array.isArray(a);
                a = h(a);
                c = c || "event";
                var e = c === "state" || c === "persistent";
                this.$4.push({});
                for (var f = 0; f < a.length; f++) {
                    var i = a[f];
                    i || g(0, 1970, i);
                    this.$3.setHoldingBehavior(i, c);
                    this.$2.emitAndHold(i, b);
                    this.$6(i, b, e)
                }
                i = this.$4.pop();
                return d ? i : i[a[0]]
            };
            c.query = function(a) {
                var b = this.$3.getHoldingBehavior(a);
                !b || b === "state" || g(0, 1971, a);
                b = null;
                this.$3.emitToListener(a, function(a) {
                    b = a
                });
                return b
            };
            c.registerCallback = function(a, b) {
                if (typeof a === "function") return this.$1.registerCallback(a, b);
                else return this.$1.addDependenciesToExistingCallback(a, b)
            };
            c.$6 = function(a, b, c) {
                if (b === null) return;
                c ? this.$1.satisfyPersistentDependency(a) : this.$1.satisfyNonPersistentDependency(a)
            };
            a.subscribe = function(b, c, d) {
                return a.prototype.subscribe.apply(i(this), arguments)
            };
            a.unsubscribeCurrentSubscription = function() {
                return a.prototype.unsubscribeCurrentSubscription.apply(i(this))
            };
            a.releaseCurrentPersistentEvent = function() {
                return a.prototype.releaseCurrentPersistentEvent.apply(i(this))
            };
            a.subscribeOnce = function(b, c, d) {
                return a.prototype.subscribeOnce.apply(i(this), arguments)
            };
            a.unsubscribe = function(b) {
                return a.prototype.unsubscribe.apply(i(this), arguments)
            };
            a.inform = function(b, c, d) {
                return a.prototype.inform.apply(i(this), arguments)
            };
            a.informSingle = function(b, c, d) {
                return a.prototype.inform.apply(i(this), arguments)
            };
            a.query = function(b) {
                return a.prototype.query.apply(i(this), arguments)
            };
            a.registerCallback = function(b, c) {
                return a.prototype.registerCallback.apply(i(this), arguments)
            };
            a.$6 = function(b, c, d) {
                return a.prototype.$6.apply(i(this), arguments)
            };
            a.$5 = function(b, c, d) {
                return a.prototype.$5.apply(i(this), arguments)
            };
            return a
        }(),
        k = function(b) {
            __p && __p();
            babelHelpers.inheritsLoose(a, b);

            function a() {
                var a;
                a = b.call(this) || this;
                a.$ArbiterEventHolder1 = {};
                return a
            }
            var c = a.prototype;
            c.setHoldingBehavior = function(a, b) {
                this.$ArbiterEventHolder1[a] = b
            };
            c.getHoldingBehavior = function(a) {
                return this.$ArbiterEventHolder1[a]
            };
            c.holdEvent = function(a) {
                var c = this.$ArbiterEventHolder1[a];
                c !== "persistent" && this.$ArbiterEventHolder2(a);
                if (c !== "event") {
                    var d;
                    for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
                    return (d = b.prototype.holdEvent).call.apply(d, [this, a].concat(f))
                }
                return void 0
            };
            c.$ArbiterEventHolder2 = function(a) {
                this.emitToListener(a, this.releaseCurrentEvent, this)
            };
            c.releaseEvent = function(a) {
                a && b.prototype.releaseEvent.call(this, a)
            };
            return a
        }(b("EventHolder"));
    j.call(j);
    e.exports = j
}), null);
__d("CSRFGuard", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "for (;;);";
    var g = /^for ?\(;;\);/;
    b = {
        length: a.length,
        regex: g,
        exists: function(a) {
            return !!a.match(g)
        },
        clean: function(a) {
            var b = a.match(g);
            return b ? a.substr(b[0].length) : b
        }
    };
    e.exports = b
}), null);
__d("CircularBuffer", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            a > 0 || g(0, 2222), this.$1 = a, this.$2 = 0, this.$3 = [], this.$4 = []
        }
        var b = a.prototype;
        b.write = function(a) {
            var b = this;
            this.$3.length < this.$1 ? this.$3.push(a) : (this.$4.forEach(function(a) {
                return a(b.$3[b.$2])
            }), this.$3[this.$2] = a, this.$2++, this.$2 %= this.$1);
            return this
        };
        b.onEvict = function(a) {
            this.$4.push(a);
            return this
        };
        b.read = function() {
            return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2))
        };
        b.expand = function(a) {
            if (a > this.$1) {
                var b = this.read();
                this.$2 = 0;
                this.$3 = b;
                this.$1 = a
            }
            return this
        };
        b.dropFirst = function(a) {
            if (a <= this.$1) {
                var b = this.read();
                this.$2 = 0;
                b.splice(0, a);
                this.$3 = b
            }
            return this
        };
        b.clear = function() {
            this.$2 = 0;
            this.$3 = [];
            return this
        };
        b.currentSize = function() {
            return this.$3.length
        };
        return a
    }();
    e.exports = a
}), null);
__d("ResourceTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        JS: "js",
        CSS: "css",
        XHR: "xhr"
    };
    e.exports = a
}), null);
__d("TimingAnnotations", [], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a() {}
        var b = a.prototype;
        b.addStringAnnotation = function(a, b) {
            return this
        };
        b.addSetAnnotation = function(a, b) {
            return this
        };
        b.addSetElement = function(a, b) {
            return this
        };
        b.registerOnBeforeSend = function(a) {
            return this
        };
        b.addVectorAnnotation = function(a, b) {
            return this
        };
        b.addVectorElement = function(a, b) {
            return this
        };
        return a
    }();
    b = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = null, this.$2 = null, this.$3 = null, this.$4 = []
        }
        var b = a.prototype;
        b.addStringAnnotation = function(a, b) {
            this.$2 = this.$2 || new Map();
            this.$2.set(a, b);
            return this
        };
        b.addSetAnnotation = function(a, b) {
            var c = this.$1 || new Map(),
                d = c.get(a) || new Set();
            b.forEach(function(a) {
                return d.add(a)
            });
            c.set(a, d);
            this.$1 = c;
            return this
        };
        b.addSetElement = function(a, b) {
            var c = this.$1 || new Map(),
                d = c.get(a) || new Set();
            d.add(b);
            c.set(a, d);
            this.$1 = c;
            return this
        };
        b.addVectorAnnotation = function(a, b) {
            this.$3 = this.$3 || new Map();
            this.$3.set(a, b);
            return this
        };
        b.addVectorElement = function(a, b) {
            var c = this.$3 = this.$3 || new Map(),
                d = this.$3.get(a) || [];
            d.push(b);
            c.set(a, d);
            return this
        };
        b.registerOnBeforeSend = function(a) {
            this.$4.push(a);
            return this
        };
        b.prepareToSend = function() {
            __p && __p();
            var a = this;
            this.$4.forEach(function(b) {
                return b(a)
            });
            this.$4 = [];
            var b = {};
            if (this.$1 != null)
                for (var c = this.$1, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    var g = f[0];
                    f = f[1];
                    b[g] = Array.from(f.values())
                }
            g = {};
            if (this.$2 != null)
                for (var f = this.$2, e = Array.isArray(f), d = 0, f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (e) {
                        if (d >= f.length) break;
                        c = f[d++]
                    } else {
                        d = f.next();
                        if (d.done) break;
                        c = d.value
                    }
                    c = c;
                    var h = c[0];
                    c = c[1];
                    g[h] = c
                }
            h = {};
            if (this.$3 != null)
                for (var c = this.$3, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    var i = f[0];
                    f = f[1];
                    h[i] = f
                }
            return {
                setProps: b,
                stringProps: g,
                vectorProps: h
            }
        };
        a.combine = function(a, b) {
            var c;
            a != null && b != null ? (a.stringProps = babelHelpers["extends"]({}, b.stringProps, a.stringProps), a.setProps = babelHelpers["extends"]({}, b.setProps, a.setProps), c = a) : a != null ? c = a : b != null && (c = b);
            return c
        };
        return a
    }();
    b.EmptyTimingAnnotations = a;
    b.EmptyTraceTimingAnnotations = a;
    b.TraceTimingAnnotations = b;
    e.exports = b
}), null);
__d("flattenPHPQueryData", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function a(a) {
        return h(a, "", {})
    }

    function h(a, b, c) {
        if (a === null || a === void 0) c[b] = void 0;
        else if (typeof a === "object") {
            typeof a.appendChild !== "function" || g(0, 2616);
            for (var d in a) d !== "$$typeof" && Object.prototype.hasOwnProperty.call(a, d) && a[d] !== void 0 && h(a[d], b ? b + "[" + d + "]" : d, c)
        } else c[b] = a;
        return c
    }
    e.exports = a
}), null);
__d("PHPQuerySerializer", ["invariant", "flattenPHPQueryData"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function a(a) {
        var c = [];
        a = b("flattenPHPQueryData")(a);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = h(d);
                a[d] === void 0 ? c.push(e) : c.push(e + "=" + h(String(a[d])))
            } return c.join("&")
    }

    function h(a) {
        return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
    }
    var i = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;

    function j(a) {
        return a === "hasOwnProperty" || a === "__proto__" ? "\ud83d\udf56" : a
    }

    function c(a) {
        __p && __p();
        if (!a) return {};
        var b = {};
        a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        a = a.split("&");
        var c = Object.prototype.hasOwnProperty;
        for (var d = 0, e = a.length; d < e; d++) {
            var f = a[d].match(i);
            if (!f) {
                var g = a[d].split("=");
                b[k(g[0])] = g[1] === void 0 ? null : k(g[1])
            } else {
                g = f[2].split(/\]\[|\[|\]/).slice(0, -1);
                var h = f[1];
                f = k(f[3] || "");
                g[0] = h;
                h = b;
                for (var l = 0; l < g.length - 1; l++) {
                    var m = j(g[l]);
                    if (m) {
                        if (!c.call(h, m)) {
                            var n = g[l + 1] && !g[l + 1].match(/^\d{1,3}$/) ? {} : [];
                            h[m] = n;
                            if (h[m] !== n) return b
                        }
                        h = h[m]
                    } else g[l + 1] && !g[l + 1].match(/^\d{1,3}$/) ? h.push({}) : h.push([]), h = h[h.length - 1]
                }
                h instanceof Array && g[g.length - 1] === "" ? h.push(f) : h[j(g[g.length - 1])] = f
            }
        }
        return b
    }

    function k(a) {
        try {
            return decodeURIComponent(a.replace(/\+/g, " "))
        } catch (b) {
            return a
        }
    }
    d = {
        serialize: a,
        encodeComponent: h,
        deserialize: c,
        decodeComponent: k
    };
    e.exports = d
}), null);
__d("PHPQuerySerializerNoEncoding", ["PHPQuerySerializer", "flattenPHPQueryData"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        var c = [];
        a = b("flattenPHPQueryData")(a);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = g(d);
                a[d] === void 0 ? c.push(e) : c.push(e + "=" + g(String(a[d])))
            } return c.join("&")
    }

    function g(a) {
        return a
    }
    c = {
        serialize: a,
        encodeComponent: g,
        deserialize: b("PHPQuerySerializer").deserialize,
        decodeComponent: b("PHPQuerySerializer").decodeComponent
    };
    e.exports = c
}), null);
__d("ReloadPage", [], (function(a, b, c, d, e, f) {
    b = {
        now: function(b) {
            a.window.location.reload(b)
        },
        delay: function(b) {
            a.setTimeout(this.now.bind(this), b)
        }
    };
    e.exports = b
}), null);
__d("URIRFC3986", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?");
    a = {
        parse: function(a) {
            __p && __p();
            if (a.trim() === "") return null;
            a = a.match(g);
            if (a == null) return null;
            var b = {};
            b.uri = a[0] ? a[0] : null;
            b.scheme = a[1] ? a[1].substr(0, a[1].length - 1) : null;
            b.authority = a[2] ? a[2].substr(2) : null;
            b.userinfo = a[3] ? a[3].substr(0, a[3].length - 1) : null;
            b.host = a[2] ? a[4] : null;
            b.port = a[5] ? a[5].substr(1) ? parseInt(a[5].substr(1), 10) : null : null;
            b.path = a[6] ? a[6] : null;
            b.query = a[7] ? a[7].substr(1) : null;
            b.fragment = a[8] ? a[8].substr(1) : null;
            b.isGenericURI = b.authority === null && !!b.scheme;
            return b
        }
    };
    e.exports = a
}), null);
__d("createObjectFrom", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a, b) {
        if (b === void 0) return g(a, !0);
        var c = {};
        if (Array.isArray(b))
            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
        else
            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b;
        return c
    }
    e.exports = g
}), null);
__d("URISchemes", ["createObjectFrom"], (function(a, b, c, d, e, f) {
    var g = b("createObjectFrom")(["blob", "cmms", "fb", "fba", "fbatwork", "fb-ama", "fb-workchat", "fb-workchat-secure", "fb-messenger", "fb-messenger-public", "fb-messenger-group-thread", "fb-page-messages", "fb-pma", "fbcf", "fbconnect", "fbinternal", "fbmobilehome", "fbrpc", "file", "ftp", "http", "https", "mailto", "wss", "ms-app", "intent", "itms", "itms-apps", "itms-services", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs", "sftp", "whatsapp", "moments", "flash", "fblite", "chrome-extension", "webcal", "fb124024574287414", "fb124024574287414rc", "fb124024574287414master", "fb1576585912599779", "fb929757330408142", "designpack", "fbpixelcloud", "fbapi20130214", "fb1196383223757595", "oculus", "oculus.store", "skype", "callto", "workchat", "fb236786383180508", "fb1775440806014337", "data", "fb-mk", "munki", "kirigami"]);
    a = {
        isAllowed: function(a) {
            return !a ? !0 : Object.prototype.hasOwnProperty.call(g, a.toLowerCase())
        }
    };
    e.exports = a
}), null);
__d("setHostSubdomain", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        a = a.split(".");
        a.length < 3 ? a.unshift(b) : a[0] = b;
        return a.join(".")
    }
    e.exports = a
}), null);
__d("URIBase", ["invariant", "URIRFC3986", "URISchemes", "ex", "setHostSubdomain"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
        i = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");

    function j(a, c, d, e) {
        __p && __p();
        if (!c) return !0;
        if (c instanceof l) {
            a.setProtocol(c.getProtocol());
            a.setDomain(c.getDomain());
            a.setPort(c.getPort());
            a.setPath(c.getPath());
            a.setQueryData(e.deserialize(e.serialize(c.getQueryData())));
            a.setFragment(c.getFragment());
            a.setIsGeneric(c.getIsGeneric());
            a.setForceFragmentSeparator(c.getForceFragmentSeparator());
            return !0
        }
        c = c.toString().trim();
        var f = b("URIRFC3986").parse(c) || {
            fragment: null,
            scheme: null
        };
        if (!d && !b("URISchemes").isAllowed(f.scheme)) return !1;
        a.setProtocol(f.scheme || "");
        if (!d && h.test(f.host || "")) return !1;
        a.setDomain(f.host || "");
        a.setPort(f.port || "");
        a.setPath(f.path || "");
        if (d) a.setQueryData(e.deserialize(f.query || "") || {});
        else try {
            a.setQueryData(e.deserialize(f.query || "") || {})
        } catch (a) {
            return !1
        }
        a.setFragment(f.fragment || "");
        f.fragment === "" && a.setForceFragmentSeparator(!0);
        a.setIsGeneric(f.isGenericURI || !1);
        if (f.userinfo !== null)
            if (d) throw new Error(b("ex")("URI.parse: invalid URI (userinfo is not allowed in a URI): %s", a.toString()));
            else return !1;
        if (!a.getDomain() && a.getPath().indexOf("\\") !== -1)
            if (d) throw new Error(b("ex")("URI.parse: invalid URI (no domain but multiple back-slashes): %s", a.toString()));
            else return !1;
        if (!a.getProtocol() && i.test(c))
            if (d) throw new Error(b("ex")("URI.parse: invalid URI (unsafe protocol-relative URLs): %s", a.toString()));
            else return !1;
        if (a.getDomain() && a.getPath() && !a.getPath().startsWith("/"))
            if (d) throw new Error(b("ex")("URI.parse: invalid URI (domain and path where path lacks leading slash): %s", a.toString()));
            else return !1;
        return !0
    }
    var k = [],
        l = function() {
            "use strict";
            __p && __p();
            a.tryParse = function(b, c) {
                var d = new a(null, c);
                return j(d, b, !1, c) ? d : null
            };
            a.isValid = function(b, c) {
                return !!a.tryParse(b, c)
            };

            function a(a, b) {
                b || g(0, 2966), this.$9 = b, this.$7 = "", this.$1 = "", this.$6 = "", this.$5 = "", this.$3 = "", this.$4 = !1, this.$8 = {}, this.$2 = !1, j(this, a, !0, b)
            }
            var c = a.prototype;
            c.setProtocol = function(a) {
                b("URISchemes").isAllowed(a) || g(0, 587, a);
                this.$7 = a;
                return this
            };
            c.getProtocol = function() {
                return (this.$7 || "").toLowerCase()
            };
            c.setSecure = function(a) {
                return this.setProtocol(a ? "https" : "http")
            };
            c.isSecure = function() {
                return this.getProtocol() === "https"
            };
            c.setDomain = function(a) {
                if (h.test(a)) throw new Error(b("ex")("URI.setDomain: unsafe domain specified: %s for url %s", a, this.toString()));
                this.$1 = a;
                return this
            };
            c.getDomain = function() {
                return this.$1
            };
            c.setPort = function(a) {
                this.$6 = a;
                return this
            };
            c.getPort = function() {
                return this.$6
            };
            c.setPath = function(a) {
                this.$5 = a;
                return this
            };
            c.getPath = function() {
                return this.$5
            };
            c.addQueryData = function(a, b) {
                Object.prototype.toString.call(a) === "[object Object]" ? Object.assign(this.$8, a) : this.$8[a] = b;
                return this
            };
            c.setQueryData = function(a) {
                this.$8 = a;
                return this
            };
            c.getQueryData = function() {
                return this.$8
            };
            c.setQueryString = function(a) {
                return this.setQueryData(this.$9.deserialize(a))
            };
            c.getQueryString = function() {
                return this.$9.serialize(this.getQueryData())
            };
            c.removeQueryData = function(a) {
                Array.isArray(a) || (a = [a]);
                for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
                return this
            };
            c.setFragment = function(a) {
                this.$3 = a;
                this.setForceFragmentSeparator(!1);
                return this
            };
            c.getFragment = function() {
                return this.$3
            };
            c.setForceFragmentSeparator = function(a) {
                this.$2 = a;
                return this
            };
            c.getForceFragmentSeparator = function() {
                return this.$2
            };
            c.setIsGeneric = function(a) {
                this.$4 = a;
                return this
            };
            c.getIsGeneric = function() {
                return this.$4
            };
            c.isEmpty = function() {
                return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment())
            };
            c.toString = function() {
                var a = this;
                for (var b = 0; b < k.length; b++) a = k[b](a);
                return a.$10()
            };
            c.$10 = function() {
                __p && __p();
                var a = "",
                    b = this.getProtocol();
                b && (a += b + ":" + (this.getIsGeneric() ? "" : "//"));
                b = this.getDomain();
                b && (a += b);
                b = this.getPort();
                b && (a += ":" + b);
                b = this.getPath();
                b ? a += b : a && (a += "/");
                b = this.getQueryString();
                b && (a += "?" + b);
                b = this.getFragment();
                b ? a += "#" + b : this.getForceFragmentSeparator() && (a += "#");
                return a
            };
            a.registerFilter = function(a) {
                k.push(a)
            };
            c.getOrigin = function() {
                var a = this.getPort();
                return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
            };
            c.getQualifiedURIBase = function() {
                return new a(this, this.$9).qualify()
            };
            c.qualify = function() {
                if (!this.getDomain()) {
                    var b = new a(window.location.href, this.$9);
                    this.setProtocol(b.getProtocol()).setDomain(b.getDomain()).setPort(b.getPort())
                }
                return this
            };
            c.setSubdomain = function(a) {
                var c = this.qualify().getDomain();
                return this.setDomain(b("setHostSubdomain")(c, a))
            };
            c.getSubdomain = function() {
                if (!this.getDomain()) return "";
                var a = this.getDomain().split(".");
                if (a.length <= 2) return "";
                else return a[0]
            };
            c.isSubdomainOfDomain = function(b) {
                var c = this.getDomain();
                return a.isDomainSubdomainOfDomain(c, b, this.$9)
            };
            a.isDomainSubdomainOfDomain = function(b, c, d) {
                __p && __p();
                if (c === "" || b === "") return !1;
                if (b.endsWith(c)) {
                    var e = b.length,
                        f = c.length,
                        g = e - f - 1;
                    if (e === f || b[g] === ".") {
                        e = new a(null, d);
                        e.setDomain(c);
                        return a.isValid(e, d)
                    }
                }
                return !1
            };
            return a
        }();
    e.exports = l
}), null);
__d("areSameOrigin", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        if (a.isEmpty() || b.isEmpty()) return !1;
        if (a.getProtocol() && a.getProtocol() != b.getProtocol()) return !1;
        if (a.getDomain() && a.getDomain() != b.getDomain()) return !1;
        return a.getPort() && a.getPort().toString() !== b.getPort().toString() ? !1 : !0
    }
    e.exports = a
}), null);
__d("ifRequired", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        var e;
        d && d.call(null, [a], function(a) {
            e = a
        });
        if (e && b) return b(e);
        else if (!e && c) return c()
    }
    e.exports = a
}), null);
__d("isFacebookURI", [], (function(a, b, c, d, e, f) {
    var g = null,
        h = ["http", "https"];

    function a(a) {
        g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !0 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    a.setRegex = function(a) {
        g = a
    };
    e.exports = a
}), null);
__d("isUriNeedRawQuerySVURI", ["PHPQuerySerializer", "URIBase", "UriNeedRawQuerySVConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = ["http", "https"];

    function a(a) {
        __p && __p();
        if (a == null) return !1;
        a = a instanceof b("URIBase") ? a : b("URIBase").tryParse(a, b("PHPQuerySerializer"));
        if (a == null) return !1;
        if (!g.includes(a.getProtocol())) return !1;
        var c = a.getDomain();
        return b("UriNeedRawQuerySVConfig").uris.some(function(a) {
            return b("URIBase").isDomainSubdomainOfDomain(c, a, b("PHPQuerySerializer"))
        })
    }
    e.exports = a
}), null);
__d("memoize", ["invariant"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = a,
            c;
        return function() {
            arguments.length && g(0, 4494);
            b && (c = b(), b = null);
            return c
        }
    }
    e.exports = a
}), null);
__d("unqualifyURI", [], (function(a, b, c, d, e, f) {
    function a(a) {
        a.setProtocol(null).setDomain(null).setPort(null)
    }
    e.exports = a
}), null);
__d("URI", ["PHPQuerySerializer", "PHPQuerySerializerNoEncoding", "ReloadPage", "URIBase", "areSameOrigin", "ifRequired", "isFacebookURI", "isUriNeedRawQuerySVURI", "memoize", "unqualifyURI"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = b("memoize")(function() {
        return new i(window.location.href)
    });

    function h() {
        return b("ifRequired")("PageTransitions", function(a) {
            if (a.isInitialized()) return a
        })
    }
    var i = function(d) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, d);

        function c(a) {
            var c;
            b("isUriNeedRawQuerySVURI")(a) ? c = d.call(this, a, b("PHPQuerySerializerNoEncoding")) || this : c = d.call(this, a || "", b("PHPQuerySerializer")) || this;
            return babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.setPath = function(a) {
            this.path = a;
            return d.prototype.setPath.call(this, a)
        };
        e.getPath = function() {
            var a = d.prototype.getPath.call(this);
            return a ? a.replace(/^\/+/, "/") : a
        };
        e.setProtocol = function(a) {
            this.protocol = a;
            return d.prototype.setProtocol.call(this, a)
        };
        e.setDomain = function(a) {
            this.domain = a;
            return d.prototype.setDomain.call(this, a)
        };
        e.setPort = function(a) {
            this.port = a;
            return d.prototype.setPort.call(this, a)
        };
        e.setFragment = function(a) {
            this.fragment = a;
            return d.prototype.setFragment.call(this, a)
        };
        e.stripTrailingSlash = function() {
            this.setPath(this.getPath().replace(/\/$/, ""));
            return this
        };
        e.addTrailingSlash = function() {
            var a = this.getPath();
            a.length > 0 && a[a.length - 1] !== "/" && this.setPath(a + "/");
            return this
        };
        e.valueOf = function() {
            return this.toString()
        };
        e.getRegisteredDomain = function() {
            if (!this.getDomain()) return "";
            if (!b("isFacebookURI")(this)) return null;
            var a = this.getDomain().split("."),
                c = a.indexOf("facebook");
            c === -1 && (c = a.indexOf("workplace"));
            return a.slice(c).join(".")
        };
        e.getUnqualifiedURI = function() {
            var a = new c(this);
            b("unqualifyURI")(a);
            return a
        };
        e.getQualifiedURI = function() {
            return new c(this).qualify()
        };
        e.isSameOrigin = function(a) {
            a = a;
            !a ? a = g() : a instanceof c || (a = new c(a.toString()));
            return b("areSameOrigin")(this, a)
        };
        c.go = function(a, b, d) {
            c.goURIOnWindow(a, window, b, d)
        };
        c.goURIOnNewWindow = function(a) {
            c.goURIOnWindow(a, window.open("", "_blank"), !0)
        };
        c.goURIOnWindow = function(d, e, f, g) {
            d = new c(d);
            var h = d.toString();
            d = e ? e : window;
            b("ifRequired")("PageNavigationStageLogger", function(b) {
                f ? b.setNote("force") : a.PageTransitions || b.setNote("no_pagetrans"), b.setCookieForNavigation(h)
            });
            !f && a.PageTransitions ? a.PageTransitions.go(h, g) : window.location.href === h ? b("ReloadPage").now() : g ? d.location.replace(h) : d.location.href = h
        };
        e.go = function(a, b) {
            c.go(this, a, b)
        };
        c.tryParseURI = function(a) {
            a = b("URIBase").tryParse(a, b("PHPQuerySerializer"));
            return a ? new c(a) : null
        };
        c.isValidURI = function(a) {
            return b("URIBase").isValid(a, b("PHPQuerySerializer"))
        };
        c.getRequestURI = function(a, b) {
            a = a === void 0 || a;
            if (a) {
                a = h();
                if (a) return a.getCurrentURI(!!b).getQualifiedURI()
            }
            return new c(window.location.href)
        };
        c.getMostRecentURI = function() {
            var a = h();
            return a ? a.getMostRecentURI().getQualifiedURI() : new c(window.location.href)
        };
        c.getNextURI = function() {
            var a = h();
            return a ? a.getNextURI().getQualifiedURI() : new c(window.location.href)
        };
        c.encodeComponent = function(a) {
            return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
        };
        c.decodeComponent = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        };
        return c
    }(b("URIBase"));
    Object.assign(i, {
        expression: /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,
        arrayQueryExpression: /^(\w+)((?:\[\w*\])+)=?(.*)/
    });
    e.exports = i
}), null);
__d("ExecutionEnvironment", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = !!(typeof window !== "undefined" && window.document && window.document.createElement);
    b = {
        canUseDOM: a,
        canUseWorkers: typeof Worker !== "undefined",
        canUseEventListeners: a && !!(window.addEventListener || window.attachEvent),
        canUseViewport: a && !!window.screen,
        isInWorker: !a
    };
    e.exports = b
}), null);
__d("performance", ["ExecutionEnvironment"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    b("ExecutionEnvironment").canUseDOM && (g = window.performance || window.msPerformance || window.webkitPerformance);
    e.exports = g || {}
}), null);
__d("performanceAbsoluteNow", ["performance"], (function(a, b, c, d, e, f) {
    if (b("performance").now && b("performance").timing && b("performance").timing.navigationStart) {
        var g = b("performance").timing.navigationStart;
        a = function() {
            return b("performance").now() + g
        }
    } else a = function() {
        return Date.now()
    };
    e.exports = a
}), null);
__d("ResourceTimingsStore", ["CircularBuffer", "ResourceTypes", "TimingAnnotations", "URI", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 1e3,
        h = new(b("TimingAnnotations").EmptyTimingAnnotations)(),
        i = {},
        j = {};
    Object.keys(b("ResourceTypes")).forEach(function(a) {
        a = b("ResourceTypes")[a];
        var c = new(b("CircularBuffer"))(g),
            d = new Map();
        c.onEvict(function(a) {
            d["delete"](a)
        });
        i[a] = {
            idx: 1,
            entries: c
        };
        j[a] = d
    });

    function k(a, c, d) {
        __p && __p();
        var e;
        switch (a) {
            case "css":
            case "js":
                var f = l.parseMakeHasteURL(c);
                f = f == null ? "unknown_resource" : f[0];
                e = d + "_" + f;
                break;
            case "xhr":
                f = new(b("URI"))(c).getQualifiedURI();
                c = f.getDomain() + f.getPath();
                e = d + "_" + c;
                break;
            default:
                a, e = "never here"
        }
        return e
    }
    var l = {
        getUID: function(a, b) {
            var c = i[a],
                d = k(a, b, c.idx);
            c.entries.write(d);
            j[a].set(d, {
                uri: b,
                uid: d
            });
            c.idx++;
            return d
        },
        updateURI: function(a, b, c) {
            a = j[a].get(b);
            a != null && (a.uri = c)
        },
        getMapFor: function(a) {
            return j[a]
        },
        parseMakeHasteURL: function(a) {
            a = a.match(/\/rsrc\.php\/.*\/([^\?]+)/);
            if (!a) return null;
            a = a[1];
            var b = "",
                c = a.match(/\.(\w+)$/);
            c && (b = c[1]);
            return [a, b]
        },
        measureRequestSent: function(a, c) {
            a = j[a];
            a = a.get(c);
            if (a == null || a.requestSent != null) return;
            else a.requestSent = b("performanceAbsoluteNow")()
        },
        measureResponseReceived: function(a, c) {
            a = j[a];
            a = a.get(c);
            if (a == null || a.requestSent == null || a.responseReceived != null) return;
            else a.responseReceived = b("performanceAbsoluteNow")()
        },
        annotate: function(a, c) {
            __p && __p();
            a = j[a];
            a = a.get(c);
            if (!a) return h;
            else {
                c = a.annotations;
                if (c != null) return c;
                else {
                    c = new(b("TimingAnnotations"))();
                    a.annotations = c;
                    return c
                }
            }
        },
        getAnnotationsFor: function(a, b) {
            a = j[a];
            a = a.get(b);
            if (!a) return null;
            else {
                b = a.annotations;
                return b != null ? b.prepareToSend() : null
            }
        }
    };
    e.exports = l
}), null);
__d("TimeSlice", ["requireCond", "cr:717822"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:717822")
}), 3);
__d("TimerStorage", [], (function(a, b, c, d, e, f) {
    __p && __p();
    a = {
        ANIMATION_FRAME: "ANIMATION_FRAME",
        IDLE_CALLBACK: "IDLE_CALLBACK",
        IMMEDIATE: "IMMEDIATE",
        INTERVAL: "INTERVAL",
        TIMEOUT: "TIMEOUT"
    };
    var g = {};
    Object.keys(a).forEach(function(a) {
        return g[a] = {}
    });
    b = babelHelpers["extends"]({}, a, {
        set: function(a, b) {
            g[a][b] = !0
        },
        unset: function(a, b) {
            delete g[a][b]
        },
        clearAll: function(a, b) {
            Object.keys(g[a]).forEach(b), g[a] = {}
        },
        getStorages: function() {
            return {}
        }
    });
    e.exports = b
}), null);
__d("clearInterval", ["TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeClearTimeout || a.clearTimeout;

    function c(a) {
        if (a != null) {
            b("TimerStorage").unset(b("TimerStorage").INTERVAL, a);
            var c = b("TimerStorage").TIMEOUT + String(a);
            b("TimeSlice").cancelWithToken(c)
        }
        g(a)
    }
    e.exports = c
}), null);
__d("isEmpty", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function a(a) {
        __p && __p();
        if (Array.isArray(a)) return a.length === 0;
        else if (typeof a === "object") {
            if (a) {
                !h(a) || a.size === void 0 || g(0, 1445);
                for (var b in a) return !1
            }
            return !0
        } else return !a
    }

    function h(a) {
        return typeof Symbol === "undefined" ? !1 : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]
    }
    e.exports = a
}), null);
__d("setIntervalAcrossTransitions", ["TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeSetInterval || a.setInterval;

    function c(c, d) {
        var e = b("TimeSlice").guard(c, "setInterval");
        for (var f = arguments.length, h = new Array(f > 2 ? f - 2 : 0), i = 2; i < f; i++) h[i - 2] = arguments[i];
        return Function.prototype.apply.call(g, a, [e, d].concat(h))
    }
    e.exports = c
}), null);
__d("CSSLoader", ["CSSLoaderConfig", "ResourceTimingsStore", "TimeSlice", "clearInterval", "ifRequired", "isEmpty", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = 20,
        h = b("CSSLoaderConfig").timeout,
        i = b("CSSLoaderConfig").loadEventSupported,
        j, k = [],
        l, m = {};

    function n(a) {
        if (j) return;
        j = !0;
        var b = document.createElement("link");
        b.onload = function() {
            i = !0, b.parentNode && b.parentNode.removeChild(b)
        };
        b.rel = "stylesheet";
        b.href = "data:text/css;base64,";
        a.appendChild(b)
    }

    function o() {
        __p && __p();
        var a, c = [],
            d = [];
        if (Date.now() >= l) {
            for (a in m) d.push(m[a].signal), c.push(m[a].error);
            m = {}
        } else
            for (a in m) {
                var e = m[a].signal,
                    f = window.getComputedStyle ? getComputedStyle(e) : e.currentStyle;
                f && parseInt(f.height, 10) > 1 && (c.push(m[a].load), d.push(e), delete m[a])
            }
        for (var f = 0; f < d.length; f++) d[f].parentNode.removeChild(d[f]);
        if (!b("isEmpty")(c)) {
            for (f = 0; f < c.length; f++) c[f]();
            l = Date.now() + h
        }
        return b("isEmpty")(m)
    }

    function p(a, c, d, e) {
        var f = document.createElement("meta");
        f.id = "bootloader_" + a.replace(/[^a-z0-9]/gi, "_");
        c.appendChild(f);
        c = !b("isEmpty")(m);
        l = Date.now() + h;
        m[a] = {
            signal: f,
            load: d,
            error: e
        };
        if (!c) var i = b("setIntervalAcrossTransitions")(function() {
            o() && b("clearInterval")(i)
        }, g)
    }

    function q(a, c, d, e, f, g) {
        __p && __p();
        var h = b("ResourceTimingsStore").getUID("css", c);
        b("ifRequired")("TimeSliceAutoclosedInteraction", function(a) {
            return a.getInteractionsActiveRightNow().forEach(function(a) {
                return a.forResourceRequest(h).addStringAnnotation("requested_in_continuation", "true")
            })
        });
        b("ResourceTimingsStore").annotate("css", h).addStringAnnotation("name", a).addStringAnnotation("source", c).addStringAnnotation("caller", "CSSLoader.loadStyleSheet");
        b("ifRequired")("TimeSliceInteraction", function(b) {
            b.informGlobally("CSSLoader.loadStyleSheet").addStringAnnotation("source", c).addStringAnnotation("name", a)
        });
        b("ResourceTimingsStore").measureRequestSent("css", h);
        var j = function() {
                b("ResourceTimingsStore").measureResponseReceived("css", h), e()
            },
            k = b("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
        !g ? p(a, d, j, f) : i !== !0 ? (p(a, d, j, f), i === void 0 && n(d)) : (g.onload = k.bind(void 0, function() {
            g.onload = g.onerror = null, j()
        }), g.onerror = k.bind(void 0, function() {
            g.onload = g.onerror = null, f()
        }))
    }
    a = {
        loadStyleSheet: function(a, b, c, d, e, f) {
            __p && __p();
            var g = document;
            if ("createStyleSheet" in g) {
                var h;
                for (var i = 0; i < k.length; i++)
                    if (k[i].imports.length < 31) {
                        h = i;
                        break
                    } if (h === void 0) {
                    try {
                        k.push(g.createStyleSheet())
                    } catch (a) {
                        f();
                        return
                    }
                    h = k.length - 1
                }
                k[h].addImport(b);
                q(a, b, c, e, f, null);
                return
            }
            i = g.createElement("link");
            i.rel = "stylesheet";
            i.type = "text/css";
            i.href = b;
            d && (i.crossOrigin = "anonymous");
            q(a, b, c, e, f, i);
            c.appendChild(i)
        },
        setupEventListeners: function(a, b, c, d, e, f) {
            q(a, b, c, d, e, f)
        }
    };
    e.exports = a
}), null);
__d("BigPipeInstance", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null;
    a = {
        Events: {
            init: "BigPipe/init",
            tti: "tti_bigpipe",
            displayed: "all_pagelets_displayed",
            loaded: "all_pagelets_loaded"
        },
        setCurrentInstance_DO_NOT_USE: function(a) {
            g = a
        },
        getCurrentInstance: function() {
            return g
        }
    };
    e.exports = a
}), null);
__d("$-core", ["TAAL", "ex"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        return g(a, typeof a === "string" ? document.getElementById(a) : a)
    }

    function c(a) {
        return g(a, typeof a === "string" ? document.getElementById(a) : a)
    }

    function g(a, c) {
        if (!c) throw new Error(b("TAAL").blameToPreviousFile(b("ex")('Tried to get element with id of "%s" but it is not present on the page', a)));
        return c
    }
    a.fromIDOrElement = c;
    e.exports = a
}), null);
__d("$", ["$-core"], (function(a, b, c, d, e, f) {
    e.exports = b("$-core")
}), null);
__d("CSSCore", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function h(a, b) {
        var c = a;
        while (c.parentNode) c = c.parentNode;
        if (c instanceof Element) {
            c = c.querySelectorAll(b);
            return Array.prototype.indexOf.call(c, a) !== -1
        }
        return !1
    }
    var i = {
        addClass: function(a, b) {
            /\s/.test(b) && g(0, 440, b);
            b && (a.classList ? a.classList.add(b) : i.hasClass(a, b) || (a.className = a.className + " " + b));
            return a
        },
        removeClass: function(a, b) {
            /\s/.test(b) && g(0, 441, b);
            b && (a.classList ? a.classList.remove(b) : i.hasClass(a, b) && (a.className = a.className.replace(new RegExp("(^|\\s)" + b + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")));
            return a
        },
        conditionClass: function(a, b, c) {
            return (c ? i.addClass : i.removeClass)(a, b)
        },
        hasClass: function(a, b) {
            /\s/.test(b) && g(0, 442);
            return a.classList ? !!b && a.classList.contains(b) : (" " + a.className + " ").indexOf(" " + b + " ") > -1
        },
        matchesSelector: function(a, b) {
            var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || function(b) {
                return h(a, b)
            };
            return c.call(a, b)
        }
    };
    e.exports = i
}), null);
__d("CSS", ["CSSCore", "$"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = typeof window != "undefined" ? window.CSS : null;
    var g = "hidden_elem",
        h = {
            supports: a && a.supports.bind(a),
            setClass: function(a, c) {
                b("$").fromIDOrElement(a).className = c || "";
                return a
            },
            hasClass: function(a, c) {
                return a instanceof Document || a instanceof Text ? !1 : b("CSSCore").hasClass(b("$").fromIDOrElement(a), c)
            },
            matchesSelector: function(a, c) {
                return a instanceof Document || a instanceof Text ? !1 : b("CSSCore").matchesSelector(b("$").fromIDOrElement(a), c)
            },
            addClass: function(a, c) {
                return b("CSSCore").addClass(b("$").fromIDOrElement(a), c)
            },
            removeClass: function(a, c) {
                return b("CSSCore").removeClass(b("$").fromIDOrElement(a), c)
            },
            conditionClass: function(a, c, d) {
                return b("CSSCore").conditionClass(b("$").fromIDOrElement(a), c, !!d)
            },
            toggleClass: function(a, b) {
                return h.conditionClass(a, b, !h.hasClass(a, b))
            },
            shown: function(a) {
                return !h.hasClass(a, g)
            },
            hide: function(a) {
                return h.addClass(a, g)
            },
            show: function(a) {
                return h.removeClass(a, g)
            },
            toggle: function(a) {
                return h.toggleClass(a, g)
            },
            conditionShow: function(a, b) {
                return h.conditionClass(a, g, !b)
            }
        };
    e.exports = h
}), null);
__d("Parent", ["CSS"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        byTag: function(a, b) {
            b = b.toUpperCase();
            a = g.find(a, function(a) {
                return a.nodeName === b
            });
            return a instanceof Element ? a : null
        },
        byClass: function(a, c) {
            a = g.find(a, function(a) {
                return a instanceof Element && b("CSS").hasClass(a, c)
            });
            return a instanceof Element ? a : null
        },
        bySelector: function(a, b) {
            __p && __p();
            a = a;
            if (typeof a.matches === "function") {
                while (a && a !== document && !a.matches(b)) a = a.parentNode;
                return a instanceof Element ? a : null
            } else if (typeof a.msMatchesSelector === "function") {
                while (a && a !== document && !a.msMatchesSelector(b)) a = a.parentNode;
                return a instanceof Element ? a : null
            } else return g.bySelector_SLOW(a, b)
        },
        bySelector_SLOW: function(a, b) {
            __p && __p();
            a = a;
            var c = a;
            while (c.parentNode) c = c.parentNode;
            if (!(c instanceof Element) && !(c instanceof Document)) return null;
            c = c.querySelectorAll(b);
            while (a) {
                if (Array.prototype.indexOf.call(c, a) !== -1) return a instanceof Element ? a : null;
                a = a.parentNode
            }
            return a instanceof Element ? a : null
        },
        byAttribute: function(a, b) {
            a = g.find(a, function(a) {
                return a instanceof Element && !!a.getAttribute(b)
            });
            return a instanceof Element ? a : null
        },
        find: function(a, b) {
            a = a;
            while (a) {
                if (b(a)) return a;
                a = a.parentNode
            }
            return null
        }
    };
    e.exports = g
}), null);
__d("ContextualComponent", ["Parent"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();
        a.forNode = function(b) {
            return a.$1.get(b) || null
        };
        a.closestToNode = function(c) {
            c = b("Parent").find(c, function(b) {
                return !!a.forNode(b)
            });
            return c ? a.forNode(c) : null
        };
        a.register = function(b) {
            return new a(b)
        };

        function a(a) {
            var b = a.element,
                c = a.isRoot;
            a = a.parent;
            this.$2 = c;
            this.$3 = b;
            this.$4 = a;
            this.$5 = new Set();
            this.$6 = [];
            this.$7 = [];
            this.$8()
        }
        var c = a.prototype;
        c.onCleanup = function(a) {
            this.$6.push(a)
        };
        c.onUnmount = function(a) {
            this.$7.push(a)
        };
        c.cleanup = function() {
            this.$5.forEach(function(a) {
                return a.cleanup()
            }), this.$6.forEach(function(a) {
                return a()
            }), this.$6 = []
        };
        c.unmount = function() {
            this.cleanup();
            this.$5.forEach(function(a) {
                return a.unmount()
            });
            this.$7.forEach(function(a) {
                return a()
            });
            this.$7 = [];
            var b = this.$4;
            b && (a.$1["delete"](this.$3), b.$9(this))
        };
        c.reinitialize = function() {
            var b = this.$4;
            b && (b.$9(this), this.$4 = void 0);
            a.$1["delete"](this.$3);
            this.$8()
        };
        c.$8 = function() {
            if (!this.$2 && !this.$4) {
                var b = a.closestToNode(this.$3);
                b && (this.$4 = b)
            }
            this.$4 && this.$4.$10(this);
            a.$1.set(this.$3, this)
        };
        c.$10 = function(a) {
            this.$5.add(a)
        };
        c.$9 = function(a) {
            this.$5["delete"](a)
        };
        return a
    }();
    a.$1 = new Map();
    e.exports = a
}), null);
__d("PageEvents", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NATIVE_ONLOAD: "onload/onload",
        BIGPIPE_ONLOAD: "onload/onload_callback",
        AJAXPIPE_ONLOAD: "ajaxpipe/onload_callback",
        NATIVE_DOMREADY: "onload/dom_content_ready",
        BIGPIPE_DOMREADY: "onload/domcontent_callback",
        AJAXPIPE_DOMREADY: "ajaxpipe/domcontent_callback",
        NATIVE_ONBEFOREUNLOAD: "onload/beforeunload",
        NATIVE_ONUNLOAD: "onload/unload",
        AJAXPIPE_ONUNLOAD: "onload/exit",
        AJAXPIPE_SEND: "ajaxpipe/send",
        AJAXPIPE_FIRST_RESPONSE: "ajaxpipe/first_response",
        AJAXPIPE_ONBEFORECLEARCANVAS: "ajaxpipe/onbeforeclearcanvas"
    });
    e.exports = a
}), null);
__d("createCancelableFunction", ["emptyFunction"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        var c = a;
        a = function() {
            for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++) b[d] = arguments[d];
            return c.apply(this, b)
        };
        a.cancel = function() {
            c = b("emptyFunction")
        };
        return a
    }
    e.exports = a
}), null);
__d("Run", ["Arbiter", "BigPipeInstance", "ContextualComponent", "ExecutionEnvironment", "PageEvents", "TimeSlice", "createCancelableFunction", "emptyFunction", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "onunloadhooks",
        h = "onafterunloadhooks";

    function i(b, c) {
        var d = a.CavalryLogger;
        d = d && d.getInstance();
        if (!d) return;
        c ? d.setAbsTimeStamp && d.setAbsTimeStamp(b, c) : d.setTimeStamp(b)
    }

    function j() {
        return !window.loading_page_chrome
    }

    function c(c) {
        var d = a.PageHooks;
        if (window.domready && d) {
            d.runHook(c, "domreadyhooks:late");
            return {
                remove: b("emptyFunction")
            }
        } else return p("domreadyhooks", c)
    }

    function d(b) {
        var c = a.PageHooks;
        if (window.loaded && c) {
            var d = setTimeout(function() {
                c.runHook(b, "onloadhooks:late")
            }, 0);
            return {
                remove: function() {
                    return clearTimeout(d)
                }
            }
        } else return p("onloadhooks", b)
    }

    function f(a, b) {
        b === void 0 && (b = j());
        return b ? p("onbeforeleavehooks", a) : p("onbeforeunloadhooks", a)
    }

    function k(a, c) {
        window.onunload || (window.onunload = b("TimeSlice").guard(function() {
            b("Arbiter").inform(b("PageEvents").NATIVE_ONUNLOAD, !0, "state")
        }, "window.onunload"));
        return p(a, c)
    }

    function l(a) {
        return k(g, a)
    }

    function m(a) {
        return k(h, a)
    }

    function n(a) {
        return p("onleavehooks", a)
    }

    function o(a, c) {
        var d = b("createCancelableFunction")(c);
        c = function() {
            d(), d.cancel()
        };
        a = b("ContextualComponent").closestToNode(a);
        a && a.onCleanup(c);
        window.onleavehooks = (window.onleavehooks || []).concat(c);
        return {
            remove: function() {
                d.cancel()
            }
        }
    }

    function p(a, c) {
        c = b("createCancelableFunction")(c);
        window[a] = (window[a] || []).concat(c);
        return {
            remove: function() {
                c.cancel()
            }
        }
    }

    function q(a) {
        window[a] = []
    }
    var r = b("TimeSlice").guard(function() {
        b("Arbiter").inform(b("PageEvents").NATIVE_DOMREADY, !0, "state")
    }, "DOMContentLoaded");
    a._domcontentready = r;

    function s() {
        __p && __p();
        var a = document,
            c = window;
        if (a.addEventListener) {
            var d = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
            if (d && d[1] < 525) var e = setInterval(function() {
                /loaded|complete/.test(a.readyState) && (r(), clearInterval(e))
            }, 10);
            else a.addEventListener("DOMContentLoaded", r, !0)
        } else {
            d = "javascript:void(0)";
            c.location.protocol == "https:" && (d = "//:");
            a.write('<script onreadystatechange="if (this.readyState==\'complete\') {this.parentNode.removeChild(this);_domcontentready();}" defer="defer" src="' + d + '"></');
            a.write("script>")
        }
        var f = c.onload;
        c.onload = b("TimeSlice").guard(function() {
            i("t_layout"), f && f(), b("Arbiter").inform(b("PageEvents").NATIVE_ONLOAD, !0, "state")
        }, "window.onload");
        c.onbeforeunload = b("TimeSlice").guard(function(a) {
            var c = {};
            b("Arbiter").inform(b("PageEvents").NATIVE_ONBEFOREUNLOAD, c, "state");
            c.warn || b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD, {
                transition_type: "normal"
            });
            if (c.warn !== void 0) {
                a.returnValue = c.warn;
                return c.warn
            } else return
        }, "window.onbeforeunload")
    }

    function t() {
        var a = b("performanceAbsoluteNow")();
        window.console && console.timeStamp && console.timeStamp('perf_trace {"name": "e2e", "parent": "PageEvents.BIGPIPE_ONLOAD"}');
        i("t_onload", a);
        b("Arbiter").inform(b("PageEvents").BIGPIPE_ONLOAD, {
            ts: a
        }, "state")
    }
    var u = b("Arbiter").registerCallback(function() {
            b("BigPipeInstance").getCurrentInstance() ? b("Arbiter").subscribeOnce(b("BigPipeInstance").Events.displayed, t) : t()
        }, [b("PageEvents").NATIVE_ONLOAD]),
        v = b("Arbiter").registerCallback(function() {
            i("t_domcontent");
            var a = {
                timeTriggered: Date.now()
            };
            b("Arbiter").inform(b("PageEvents").BIGPIPE_DOMREADY, a, "state")
        }, [b("PageEvents").NATIVE_DOMREADY]);
    b("ExecutionEnvironment").canUseDOM && s();
    s = {
        onLoad: c,
        onAfterLoad: d,
        onLeave: n,
        onBeforeUnload: f,
        onUnload: l,
        onAfterUnload: m,
        onCleanupOrLeave: o,
        __domContentCallback: v,
        __onloadCallback: u,
        __removeHook: q
    };
    e.exports = s
}), null);
__d("BitMap", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    a = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = []
        }
        var b = a.prototype;
        b.set = function(a) {
            this.$1[a] = 1;
            return this
        };
        b.toString = function() {
            var a = [];
            for (var b = 0; b < this.$1.length; b++) a.push(this.$1[b] ? 1 : 0);
            return a.length ? i(a.join("")) : ""
        };
        b.toCompressedString = function() {
            if (this.$1.length === 0) return "";
            var a = [],
                b = 1,
                c = this.$1[0] || 0,
                d = c.toString(2);
            for (var e = 1; e < this.$1.length; e++) {
                var f = this.$1[e] || 0;
                f === c ? b++ : (a.push(h(b)), c = f, b = 1)
            }
            b && a.push(h(b));
            return i(d + a.join(""))
        };
        return a
    }();

    function h(a) {
        a = a.toString(2);
        var b = "0".repeat(a.length - 1);
        return b + a
    }

    function i(a) {
        a = (a + "00000").match(/[01]{6}/g);
        var b = "";
        for (var c = 0; a != null && c < a.length; c++) b += g[parseInt(a[c], 2)];
        return b
    }
    e.exports = a
}), null);
__d("BanzaiLazyQueue", [], (function(a, b, c, d, e, f) {
    var g = [];
    a = {
        queuePost: function(a, b, c) {
            g.push([a, b, c])
        },
        flushQueue: function() {
            var a = g;
            g = [];
            return a
        }
    };
    e.exports = a
}), null);
__d("ge", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, b, c) {
        if (typeof a !== "string") return a;
        else if (!b) return document.getElementById(a);
        else return g(a, b, c)
    }

    function g(a, b, c) {
        __p && __p();
        var d;
        if (h(b) == a) return b;
        else if (b.getElementsByTagName) {
            c = b.getElementsByTagName(c || "*");
            for (d = 0; d < c.length; d++)
                if (h(c[d]) == a) return c[d]
        } else {
            c = b.childNodes;
            for (d = 0; d < c.length; d++) {
                b = g(a, c[d]);
                if (b) return b
            }
        }
        return null
    }

    function h(a) {
        return a.getAttribute ? a.getAttribute("id") : null
    }
    e.exports = a
}), null);
__d("replaceTransportMarkers", ["BanzaiLazyQueue", "ErrorUtils", "ge", "memoize"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a, c, e) {
        __p && __p();
        var f = e !== void 0 ? c[e] : c,
            h;
        if (Array.isArray(f))
            for (h = 0; h < f.length; h++) g(a, f, h);
        else if (f && typeof f === "object")
            if (f.__m) f.__lazy ? c[e] = b("memoize")(b.bind(null, f.__m)) : c[e] = b.call(null, f.__m);
            else if (f.__jsr) c[e] = new(b.call(null, "JSResourceReference"))(f.__jsr);
        else if (f.__dr) c[e] = new(b.call(null, "RequireDeferredReference"))(f.__dr);
        else if (f.__rc) f.__rc[0] === null ? c[e] = null : c[e] = b.call(null, f.__rc[0]), f.__rc[1] && b("BanzaiLazyQueue").queuePost("require_cond_exposure_logging", {
            identifier: f.__rc[1]
        });
        else if (f.__deferredElement) {
            var i = [],
                j;
            d.call(null, [f.__deferredElement], function(a) {
                j = a, i.length && (i.forEach(b("ErrorUtils").guard(function(b) {
                    b(a)
                }, "JS::deferredElement callback: '" + f.__deferredElement + "'")), i.length = 0)
            });
            h = {
                then: function(a) {
                    j ? a(j) : i.push(a)
                }
            };
            c[e] = h
        } else if (f.__e) c[e] = b("ge")(f.__e);
        else if (f.__rel) c[e] = a.relativeTo;
        else if (f.__bigPipeContext) c[e] = a.bigPipeContext;
        else if (f.__bbox) c[e] = f.__bbox;
        else {
            for (var k in f) g(a, f, k);
            if (f.__map) c[e] = new Map(f.__map);
            else if (f.__set) c[e] = new Set(f.__set);
            else if (f.__imm) {
                h = f.__imm;
                a = h.method;
                h = h.value;
                c[e] = b.call(null, "immutable")[a](h)
            }
        }
    }
    e.exports = g
}), null);
__d("ServerJSDefine", ["BitMap", "replaceTransportMarkers"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = 2,
        h = 8,
        i = new(b("BitMap"))(),
        j = {
            getLoadedModuleHash: function() {
                return i.toCompressedString()
            },
            handleDefine: function(a, c, d, f, j) {
                f >= 0 && i.set(f), define(a, c, function(g, h, i, k, c) {
                    g = {
                        data: d
                    };
                    b("replaceTransportMarkers")({
                        relativeTo: j
                    }, g);
                    if (f === -42) {
                        h = d != null && typeof d === "object" && d.__throw8367__;
                        throw new Error(a + ": " + (typeof h === "string" ? h : ""))
                    }
                    c.exports = g.data
                }, g | h)
            },
            handleDefines: function(a, b) {
                a.forEach(function(a) {
                    var c;
                    b != null ? c = [].concat(a, [b]) : c = [].concat(a, [null]);
                    j.handleDefine.apply(null, c)
                })
            }
        };
    e.exports = j
}), null);
__d("__debug", [], (function(a, b, c, d, e, f) {
    e.exports = {}
}), null);
__d("ServerJS", ["ContextualComponent", "ErrorUtils", "ServerJSDefine", "ex", "ge", "replaceTransportMarkers", "__debug"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = 1,
        h = 2,
        i = 0;
    a = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = {}, this.$2 = null, this.$3 = {}, this.$4 = void 0
        }
        var c = a.prototype;
        c.handle = function(a, b) {
            return this.$5(a, b, k)
        };
        c.handleWithCustomApplyEach = function(a, b, c) {
            this.$5(b, c, a)
        };
        c.$5 = function(a, b, c) {
            __p && __p();
            this.$4 = b;
            if (a.__guard) throw new Error("ServerJS.handle called on data that has already been handled");
            a.__guard = !0;
            c(a.define || [], this.$6, this);
            c(a.markup || [], this.$7, this);
            c(a.elements || [], this.$8, this);
            this.$9(a.contexts || []);
            c(a.instances || [], this.$10, this);
            var d = c(a.pre_display_requires || [], this.$11, this);
            d = d.concat(c(a.require || [], this.$11, this));
            return {
                cancel: function() {
                    for (var a = 0; a < d.length; a++) d[a] && d[a].cancel()
                }
            }
        };
        c.handlePartial = function(a, b) {
            (a.instances || []).forEach(m.bind(null, this.$1, 3));
            (a.markup || []).forEach(m.bind(null, this.$1, 2));
            (a.elements || []).forEach(m.bind(null, this.$1, 2));
            return this.handle(a, b)
        };
        c.setRelativeTo = function(a) {
            this.$2 = a;
            return this
        };
        c.setServerFeatures = function() {
            return this
        };
        c.cleanup = function(a) {
            __p && __p();
            var c = Object.keys(this.$1);
            a ? d.call(null, c, a.guard(n, "SeverJS Cleanup requireLazy", {
                propagationType: a.PropagationType.ORPHAN
            })) : d.call(null, c, n);
            this.$1 = {};

            function f(c) {
                var d = this.$3[c],
                    a = d[0],
                    f = d[1];
                d = d[2];
                delete this.$3[c];
                f = f ? 'JS::call("' + a + '", "' + f + '", ...)' : 'JS::requireModule("' + a + '")';
                a = b("__debug").debugUnresolvedDependencies([a, c]);
                c = b("ex")("%s did not fire because it has missing dependencies.\n%s", f, a);
                throw j(new Error(c), d)
            }
            for (var g in this.$3) b("ErrorUtils").applyWithGuard(f, this, [g], null, "ServerJS:cleanup id: " + g)
        };
        c.$6 = function(a, c, d, e) {
            return b("ErrorUtils").applyWithGuard(b("ServerJSDefine").handleDefine, b("ServerJSDefine"), [a, c, d, e, this.$2], null, "JS::define")
        };
        c.$11 = function(a, c, d, e) {
            return b("ErrorUtils").applyWithGuard(this.$12, this, [a, c, d, e], null, c ? "JS::call" : "JS::requireModule")
        };
        c.$12 = function(a, c, d, f) {
            __p && __p();
            a = a.split("@");
            var k = a[0],
                l = a[1];
            typeof c === "object" && (d = c, c = void 0);
            a = [k].concat(d || []);
            var m;
            c ? m = "__call__" + k + "." + c : m = "__requireModule__" + k;
            m += "__" + i++;
            this.$3[m] = [k, c, l];
            var n = this.$4 && this.$4.bigPipeContext,
                o = b("ErrorUtils").guard(function(a) {
                    __p && __p();
                    var a = b.call(null, k);
                    delete this.$3[m];
                    f && b("replaceTransportMarkers")({
                        relativeTo: this.$2,
                        bigPipeContext: n
                    }, f);
                    if (c) {
                        if (!a[c]) throw j(new TypeError(b("ex")('Module %s has no method "%s"', k, c)), l);
                        a[c].apply(a, f || []);
                        o.__SMmeta = a[c].__SMmeta || {};
                        o.__SMmeta.module = o.__SMmeta.module || k;
                        o.__SMmeta.name = o.__SMmeta.name || c
                    }
                }.bind(this), c ? "JS::call('" + k + "', '" + c + "', ...)" : "JS::requireModule('" + k + "')");
            return define(m, a, o, g | h, this, 1, this.$4)
        };
        c.$10 = function(a, c, d, e) {
            return b("ErrorUtils").applyWithGuard(this.$13, this, [a, c, d, e], null, "JS::instance")
        };
        c.$13 = function(a, c, d, e) {
            __p && __p();
            var f = null;
            a = a.split("@");
            var g = a[0];
            a = a[1];
            if (c) {
                var i = this.$4 && this.$4.bigPipeContext;
                f = function() {
                    var a = b.call(null, c[0]);
                    b("replaceTransportMarkers")({
                        relativeTo: this.$2,
                        bigPipeContext: i
                    }, d);
                    var e = Object.create(a.prototype);
                    a.apply(e, d);
                    return e
                }.bind(this)
            }
            define(g, c, f, h, null, e)
        };
        c.$7 = function(a, c, d) {
            return b("ErrorUtils").applyWithGuard(this.$14, this, [a, c, d], null, "JS::markup")
        };
        c.$14 = function(a, b, c) {
            a = a.split("@");
            var d = a[0];
            a = a[1];
            define(d, ["HTML"], function(c) {
                try {
                    return c.replaceJSONWrapper(b).getRootNode()
                } catch (b) {
                    throw j(b, a)
                }
            }, 0, null, c)
        };
        c.$8 = function(a, c, d, e) {
            return b("ErrorUtils").applyWithGuard(this.$15, this, [a, c, d, e], null, "JS::element")
        };
        c.$15 = function(a, c, d, e) {
            __p && __p();
            a = a.split("@");
            var f = a[0],
                h = a[1];
            if (c === null && d) {
                define(f, null, null, 0, null, d);
                return
            }
            a = [];
            var i = 0;
            e && (a.push(e), i = g, d++);
            define(f, a, function(a) {
                a = b("ge")(c, a);
                if (!a) {
                    var d = "";
                    throw j(new Error(b("ex")('Could not find element "%s"%s', c, d)), h)
                }
                return a
            }, i, null, d)
        };
        c.$9 = function(a) {
            b("ErrorUtils").applyWithGuard(this.$16, this, [a], null, "ContextualComponents")
        };
        c.$16 = function(a) {
            __p && __p();
            var c = this,
                d = this.$4 && this.$4.bigPipeContext;
            a.map(function(a) {
                b("replaceTransportMarkers")({
                    relativeTo: c.$2,
                    bigPipeContext: d
                }, a);
                var e = a[0];
                return [a, l(e)]
            }).sort(function(a, b) {
                return a[1] - b[1]
            }).forEach(function(a) {
                a = a[0];
                var c = a[0];
                a = a[1];
                b("ContextualComponent").register({
                    element: c,
                    isRoot: a
                })
            })
        };
        return a
    }();

    function j(a, b) {
        a.serverHash = b;
        return a
    }

    function k(a, b, c) {
        return a.map(function(a) {
            return b.apply(c, a)
        })
    }

    function l(a) {
        var b = 0;
        while (a) a = a.parentElement, b++;
        return b
    }

    function m(b, c, a) {
        var d = a[0];
        d in b || (a[c] = (a[c] || 0) + 1);
        b[d] = !0
    }

    function n() {
        return {}
    }
    e.exports = a
}), null);
__d("Visibility", ["BaseEventEmitter", "TimeSlice"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g, h;
    document.hidden !== void 0 ? (g = "hidden", h = "visibilitychange") : document.mozHidden !== void 0 ? (g = "mozHidden", h = "mozvisibilitychange") : document.msHidden !== void 0 ? (g = "msHidden", h = "msvisibilitychange") : document.webkitHidden !== void 0 && (g = "webkitHidden", h = "webkitvisibilitychange");
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.HIDDEN = "hidden", c.VISIBLE = "visible", c.hiddenKey = g, c.hiddenEvent = h, b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.isHidden = function() {
            return g ? document[g] : !1
        };
        c.isSupported = function() {
            return document.addEventListener && h !== void 0
        };
        return b
    }(b("BaseEventEmitter"));
    var i = new a();
    i.isSupported() && document.addEventListener(i.hiddenEvent, b("TimeSlice").guard(function(a) {
        i.emit(i.isHidden() ? i.HIDDEN : i.VISIBLE, {
            changeTime: a.timeStamp
        })
    }, "visibility change"));
    e.exports = i
}), null);
__d("bx", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = {};

    function a(a) {
        var b = h[a];
        !b && g(0, 3199, a);
        return b
    }
    a.add = function(a) {
        var b = !1;
        for (var c in a) c in h || (h[c] = a[c])
    };
    a.getURL = function(a) {
        return a.uri
    };
    e.exports = a
}), null);
__d("cancelIdleCallback", ["requireCond", "cr:692209"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:692209")
}), null);
__d("CurrentCommunity", ["CurrentCommunityInitialData"], (function(a, b, c, d, e, f) {
    a = {
        getID: function() {
            return b("CurrentCommunityInitialData").COMMUNITY_ID || "0"
        },
        getName: function() {
            return b("CurrentCommunityInitialData").COMMUNITY_NAME || ""
        }
    };
    e.exports = a
}), null);
__d("DTSG", ["invariant", "DTSGInitialData"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("DTSGInitialData").token || null;
    a = {
        getToken: function() {
            return h
        },
        setToken: function(a) {
            h = a
        },
        refresh: function() {
            g(0, 5809)
        }
    };
    e.exports = a
}), null);
__d("isBonfireURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)(get|my)bonfire\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    e.exports = a
}), null);
__d("isCdnURI", ["CdnAkamaiDomainsConfig"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a.getProtocol() !== "http" && a.getProtocol() !== "https") return !1;
        var c = a.getPort();
        if (!!c && c !== 80 && c !== 443) return !1;
        return a.isSubdomainOfDomain("fbcdn.net") ? !0 : b("CdnAkamaiDomainsConfig")[a.getDomain()] != void 0
    }
    e.exports = a
}), null);
__d("isMessengerDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)messenger\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    e.exports = a
}), null);
__d("isOculusDotComURI", ["URI"], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)oculus\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    e.exports = a
}), null);
__d("isWorkplaceDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)workplace\\.com$", "i");

    function a(a) {
        return a.getProtocol() === "https" && g.test(a.getDomain())
    }
    e.exports = a
}), null);
__d("DTSGUtils", ["SprinkleConfig", "isBonfireURI", "isCdnURI", "isFacebookURI", "isMessengerDotComURI", "isOculusDotComURI", "isWorkplaceDotComURI"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getNumericValue: function(a) {
            var c = 0;
            for (var d = 0; d < a.length; d++) c += a.charCodeAt(d);
            c = c.toString();
            return b("SprinkleConfig").should_randomize ? c : b("SprinkleConfig").version + c
        },
        shouldAppendToken: function(a) {
            return !b("isCdnURI")(a) && !a.isSubdomainOfDomain("fbsbx.com") && (b("isFacebookURI")(a) || b("isMessengerDotComURI")(a) || b("isWorkplaceDotComURI")(a) || b("isBonfireURI")(a) || b("isOculusDotComURI")(a) || a.isSubdomainOfDomain("freebasics.com"))
        }
    };
    e.exports = a
}), null);
__d("DTSG_ASYNC", ["DTSGInitData"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("DTSGInitData").async_get_token || null;
    a = {
        getToken: function() {
            return g
        },
        setToken: function(a) {
            g = a
        }
    };
    e.exports = a
}), null);
__d("StaticSiteData", [], (function(a, b, c, d, e, f) {
    e.exports = {
        pkg_cohort_key: "__pc",
        dpr_key: "dpr",
        be_key: "__be",
        spin_rev_key: "__spin_r",
        spin_time_key: "__spin_t",
        spin_branch_key: "__spin_b",
        spin_mhenv_key: "__spin_dev_mhenv"
    }
}), null);
__d("asyncParams", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = {
        add: function(a, b) {
            g[a] = b
        },
        get: function() {
            return g
        }
    };
    e.exports = a
}), null);
__d("isSocialPlugin", ["CSSCore"], (function(a, b, c, d, e, f) {
    "use strict";

    function a() {
        return !!document.body && b("CSSCore").hasClass(document.body, "plugin")
    }
    e.exports = a
}), null);
__d("getAsyncParams", ["CurrentCommunity", "CurrentUserInitialData", "DTSG", "DTSG_ASYNC", "DTSGUtils", "ISB", "LSD", "ServerJSDefine", "SiteData", "SprinkleConfig", "StaticSiteData", "asyncParams", "isSocialPlugin"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = 1;

    function a(a) {
        __p && __p();
        var c, d = babelHelpers["extends"]({}, b("asyncParams").get(), (c = {
            __user: b("CurrentUserInitialData").USER_ID,
            __a: 1,
            __dyn: b("ServerJSDefine").getLoadedModuleHash(),
            __req: (g++).toString(36)
        }, c[b("StaticSiteData").be_key] = b("SiteData").be_mode, c[b("StaticSiteData").pkg_cohort_key] = b("SiteData").pkg_cohort, c[b("StaticSiteData").dpr_key] = b("SiteData").pr, c.__rev = b("SiteData").client_revision, c.__comet_req = b("SiteData").is_comet, c));
        window.location.search.slice(1).split("&").forEach(function(a) {
            a = a.split("=");
            var b = a[0];
            a = a[1];
            (b === "locale" || b === "cxobfus" || b === "js_debug" || b.substr(0, 4) === "tfc_" || b.substr(0, 4) === "tfi_" || b.substr(0, 3) === "mh_") && (d[b] = a)
        });
        if (a == "POST") {
            c = b("DTSG").getCachedToken ? b("DTSG").getCachedToken() : b("DTSG").getToken();
            c && (d.fb_dtsg = c, b("SprinkleConfig").param_name && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(c)));
            b("LSD").token && (d.lsd = b("LSD").token, b("SprinkleConfig").param_name && !c && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
        }
        if (a == "GET") {
            c = b("DTSG_ASYNC").getCachedToken ? b("DTSG_ASYNC").getCachedToken() : b("DTSG_ASYNC").getToken();
            c && (d.fb_dtsg_ag = c, b("SprinkleConfig").param_name && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(c)))
        }
        b("ISB").token && (d.fb_isb = b("ISB").token);
        b("CurrentCommunity").getID() !== "0" && (d.__cid = b("CurrentCommunity").getID());
        b("isSocialPlugin")() && (d.__sp = 1);
        b("SiteData").spin && (d[b("StaticSiteData").spin_rev_key] = b("SiteData")[b("StaticSiteData").spin_rev_key], d[b("StaticSiteData").spin_branch_key] = b("SiteData")[b("StaticSiteData").spin_branch_key], d[b("StaticSiteData").spin_time_key] = b("SiteData")[b("StaticSiteData").spin_time_key], b("SiteData")[b("StaticSiteData").spin_mhenv_key] && (d[b("StaticSiteData").spin_mhenv_key] = b("SiteData")[b("StaticSiteData").spin_mhenv_key]));
        return d
    }
    e.exports = a
}), null);
__d("getSameOriginTransport", ["ExecutionEnvironment", "ex"], (function(a, b, c, d, e, f) {
    function c() {
        if (!b("ExecutionEnvironment").canUseDOM) throw new Error(b("ex")("getSameOriginTransport: %s", "Same origin transport unavailable in the server environment."));
        try {
            return a.XMLHttpRequest ? new a.XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP.3.0")
        } catch (a) {
            throw new Error(b("ex")("getSameOriginTransport: %s", a.message))
        }
    }
    e.exports = c
}), null);
__d("requireWeak", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        d && d.call(null, [a], b)
    }
    e.exports = a
}), null);
__d("gkx", ["invariant", "emptyFunction", "requireWeak"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = {},
        i = {};

    function a(a) {
        var c = h[a];
        c != null || g(0, 3444, a);
        i[a] || (i[a] = !0, b("requireWeak")("Banzai", function(b) {
            return b.post("gk2_exposure", {
                identifier: a,
                hash: c.hash
            })
        }));
        return c.result
    }
    a.add = function(a) {
        for (var b in a) b in h || (h[b] = a[b])
    };
    c = b("emptyFunction");
    a.setPass = c;
    a.setFail = c;
    e.exports = a
}), null);
__d("ix", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = {};

    function a(a) {
        var b = h[a];
        !b && g(0, 582, a);
        return b
    }
    a.add = function(a) {
        var b = !1;
        for (var c in a) c in h || (h[c] = a[c])
    };
    e.exports = a
}), null);
__d("qex", ["invariant", "requireWeak"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = {},
        i = {};
    a = {
        _: function(a) {
            var c = h[a];
            c != null || g(0, 3203, a);
            var d = c.r,
                e = c.l;
            e != null && !i[a] && (i[a] = !0, b("requireWeak")("Banzai", function(a) {
                a.post("qex", {
                    l: e
                }, {
                    signal: !0
                })
            }));
            return d
        },
        add: function(a) {
            for (var b in a) b in h || (h[b] = a[b])
        }
    };
    e.exports = a
}), null);
__d("requestIdleCallback", ["requireCond", "cr:694370"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:694370")
}), null);
/**
 * License: https://www.facebook.com/legal/license/ZtTipMAcpq9/
 */
__d("ImmediateImplementation", ["ImmediateImplementationExperiments"], (function(a, b, c, d, e, f) {
    __p && __p();
    (function(c, d) {
        "use strict";
        __p && __p();
        var e = 1,
            g = {},
            h = {},
            i = h,
            j = !1,
            k = c.document,
            l, m, n, o = "setImmediate$" + Math.random() + "$";

        function p() {
            var a = c.event;
            return !a ? !1 : a.isTrusted && ["change", "click", "contextmenu", "dblclick", "mouseup", "pointerup", "reset", "submit", "touchend"].includes(a.type) || a.type === "message" && a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0
        }

        function q(a) {
            var b = a[0];
            a = Array.prototype.slice.call(a, 1);
            g[e] = function() {
                b.apply(void 0, a)
            };
            i = i.next = {
                handle: e++
            };
            return i.handle
        }

        function r() {
            __p && __p();
            var a, b;
            while (!j && (a = h.next)) {
                h = a;
                if (b = g[a.handle]) {
                    j = !0;
                    try {
                        b(), j = !1
                    } finally {
                        s(a.handle), j && (j = !1, h.next && l(r))
                    }
                }
            }
        }

        function s(a) {
            delete g[a]
        }

        function d() {
            __p && __p();
            if (c.postMessage && !c.importScripts) {
                var a = !0,
                    b = function b() {
                        a = !1, c.removeEventListener ? c.removeEventListener("message", b, !1) : c.detachEvent("onmessage", b)
                    };
                if (c.addEventListener) c.addEventListener("message", b, !1);
                else if (c.attachEvent) c.attachEvent("onmessage", b);
                else return !1;
                c.postMessage("", "*");
                return a
            }
        }

        function t() {
            var a = function(a) {
                a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0 && r()
            };
            c.addEventListener ? c.addEventListener("message", a, !1) : c.attachEvent("onmessage", a);
            l = function() {
                var a = q(arguments);
                c.originalPostMessage ? c.originalPostMessage(o + a, "*") : c.postMessage(o + a, "*");
                return a
            };
            m = l
        }

        function u() {
            var a = new MessageChannel(),
                b = !1;
            a.port1.onmessage = function(a) {
                b = !1, r()
            };
            l = function() {
                var c = q(arguments);
                b || (a.port2.postMessage(c), b = !0);
                return c
            };
            n = l
        }

        function v() {
            var a = k.documentElement;
            l = function() {
                var b = q(arguments),
                    c = k.createElement("script");
                c.onreadystatechange = function() {
                    c.onreadystatechange = null, a.removeChild(c), c = null, r()
                };
                a.appendChild(c);
                return b
            }
        }

        function w() {
            l = function() {
                setTimeout(r, 0);
                return q(arguments)
            }
        }
        d() ? c.MessageChannel && b("ImmediateImplementationExperiments").prefer_message_channel ? (t(), u(), l = function() {
            if (p()) return m.apply(null, arguments);
            else return n.apply(null, arguments)
        }) : t() : c.MessageChannel ? u() : k && k.createElement && "onreadystatechange" in k.createElement("script") ? v() : w();
        f.setImmediate = l;
        f.clearImmediate = s
    })(Function("return this")())
}), null);
__d("setImmediatePolyfill", ["invariant", "PromiseUsePolyfillSetImmediateGK", "ImmediateImplementation"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = a.setImmediate;
    if (b("PromiseUsePolyfillSetImmediateGK").www_always_use_polyfill_setimmediate || !h) {
        d = b("ImmediateImplementation");
        h = d.setImmediate
    }

    function c(a) {
        typeof a === "function" || g(0, 5912);
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        return h.apply(void 0, [a].concat(c))
    }
    e.exports = c
}), null);
__d("setImmediateAcrossTransitions", ["TimerStorage", "TimeSlice", "setImmediatePolyfill"], (function(a, b, c, d, e, f) {
    var g = b("TimerStorage").IMMEDIATE;

    function a(a) {
        var c = b("TimeSlice").guard(a, "setImmediate", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
        var h = b("setImmediatePolyfill").apply(void 0, [c].concat(e)),
            i = g + String(h);
        b("TimeSlice").registerForCancelling(i, c);
        return h
    }
    e.exports = a
}), null);
__d("setTimeoutAcrossTransitions", ["TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeSetTimeout || a.setTimeout,
        h = b("TimerStorage").TIMEOUT;

    function c(c, d) {
        var e = b("TimeSlice").guard(c, "setTimeout", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        for (var f = arguments.length, i = new Array(f > 2 ? f - 2 : 0), j = 2; j < f; j++) i[j - 2] = arguments[j];
        var k = Function.prototype.apply.call(g, a, [e, d].concat(i)),
            l = h + k;
        b("TimeSlice").registerForCancelling(l, e);
        return k
    }
    e.exports = c
}), null);
__d("Bootloader", ["invariant", "ix", "Arbiter", "BootloaderConfig", "CallbackDependencyManager", "CSRFGuard", "CSSLoader", "ErrorUtils", "FBLogger", "ResourceTimingsStore", "ServerJS", "TAAL", "TimeSlice", "Visibility", "bx", "cancelIdleCallback", "ex", "getAsyncParams", "getSameOriginTransport", "gkx", "ifRequired", "performanceAbsoluteNow", "qex", "requestIdleCallback", "requireCond", "setImmediateAcrossTransitions", "setTimeoutAcrossTransitions", "cr:696703"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    __p && __p();
    var i = function() {},
        j = [],
        k = [],
        l = {},
        m = {},
        n = {},
        o = {},
        p = null,
        q = {},
        r = {},
        s = {},
        t = {},
        u = {},
        v = [],
        w = {},
        x = {},
        y = !1,
        z = {},
        A = !1,
        B = new(b("CallbackDependencyManager"))(),
        C = new(b("Arbiter"))(),
        aa = 0,
        D = null,
        E = null,
        ba = b("BootloaderConfig").preloader_num_preloads,
        F = b("BootloaderConfig").preloader_num_loads,
        G = {},
        H = {},
        I = [],
        J = [],
        K = {},
        L = null,
        M = b("BootloaderConfig").preloader_enabled,
        N = !1;
    M && d(["Run"], function(a) {
        a.onLeave(function() {
            I.length = 0, J.length = 0, L && (b("cancelIdleCallback")(L), L = null), M = !1
        })
    });
    var O = b("BootloaderConfig").jsRetries || [],
        ca = b("BootloaderConfig").jsRetryAbortNum,
        da = b("BootloaderConfig").jsRetryAbortTime,
        P = O.length > 0,
        ea = Object.freeze({
            BOOTLOAD: "bootloader/bootload"
        });
    b("ErrorUtils").addListener(function(a) {
        a.loadingUrls = Object.keys(r)
    }, !0);

    function Q(a) {
        __p && __p();
        if (!n[a]) throw new Error(b("TAAL").blameToPreviousFile(b("ex")("Bootloader: %s is not in the component map", a)));
        var c = "resources" in n[a];
        if (c) {
            c = {
                r: n[a].resources
            };
            "rds" in n[a] && (c.rds = {
                m: n[a].rds
            });
            "needsAsync" in n[a] && (c.be = n[a].needsAsync);
            "priority" in n[a] && (c.p = n[a].priority);
            n[a] = c
        }
        return n[a]
    }

    function R() {
        p || (p = document.head || document.getElementsByTagName("head")[0] || document.body);
        return p
    }

    function S(a) {
        var c = b("BootloaderConfig").payloadEndpointURI;
        a = encodeURIComponent(a.join(","));
        return "" + c + (c.indexOf("?") === -1 ? "?" : "&") + "modules=" + a
    }

    function fa() {
        if (!P) return !1;
        var a = v.length;
        if (a < ca) return !0;
        a = v[a - 1] - v[a - ca];
        a < da && (b("FBLogger")("bootloader").warn("JS retry abort"), P = !1);
        return P
    }

    function ga(a, b, c, d, e) {
        var f = document.createElement("link");
        f.href = a;
        f.rel = "preload";
        b !== "async" || g(0, 3135);
        f.as = b === "js" ? "script" : "style";
        e && (f.onload = e);
        c != null && q[c].crossOrigin && (f.crossOrigin = "anonymous");
        m[c] = !0;
        d.appendChild(f)
    }

    function ha(a, c, d, e) {
        var f = document.createElement("script");
        f.src = a;
        f.async = !0;
        c != null && q[c].crossOrigin && (f.crossOrigin = "anonymous");
        ia(f, c, d);
        !b("Visibility").isHidden() && b("BootloaderConfig").staggerJsDownloads ? ja(f) : e.appendChild(f);
        return f
    }

    function ia(a, c, d) {
        __p && __p();
        var e = a.src,
            f = b("performanceAbsoluteNow")(),
            g = b("TimeSlice").getGuardedContinuation("Bootloader script.onresponse"),
            h = b("ResourceTimingsStore").getUID("js", e);
        b("ifRequired")("TimeSliceAutoclosedInteraction", function(a) {
            return a.getInteractionsActiveRightNow().forEach(function(a) {
                return a.forResourceRequest(h).addStringAnnotation("requested_in_continuation", "true")
            })
        });
        b("ResourceTimingsStore").annotate("js", h).addStringAnnotation("name", c != null ? c : "").addStringAnnotation("source", e);
        b("ifRequired")("TimeSliceInteraction", function(a) {
            a.informGlobally("bootloader._loadJS").addStringAnnotation("source", e).addStringAnnotation("name", c != null ? c : "")
        });
        b("ResourceTimingsStore").measureRequestSent("js", h);
        a.onload = g.bind(void 0, function() {
            u[e] && b("FBLogger")("bootloader").info("JS retry success [%s] at %s | time: %s | retries: %s", c, e, b("performanceAbsoluteNow")() - f, u[e]), b("ResourceTimingsStore").measureResponseReceived("js", h), d()
        });
        a.onreadystatechange = function() {
            ["loaded", "complete"].includes(this.readyState) && (b("ResourceTimingsStore").measureResponseReceived("js", h), g.bind(void 0, d)())
        };
        a.onerror = g.bind(void 0, function() {
            b("ResourceTimingsStore").measureResponseReceived("js", h), u[e] || (u[e] = 0), fa() && u[e] < O.length ? (v.push(b("performanceAbsoluteNow")()), setTimeout(function() {
                if (!fa()) return;
                var b = a.parentNode;
                b.removeChild(a);
                ha(e, c, d, b)
            }, O[u[e]]), u[e]++) : (t[e] = !0, b("FBLogger")("bootloader").warn("JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s", c, e, b("performanceAbsoluteNow")() - f, u[e], Object.keys(r).length), d())
        })
    }
    var T = !1,
        U = [],
        V = !1;

    function ja(a) {
        T ? (U.push(a), V || (V = !0, ka())) : (R().appendChild(a), T = !0)
    }

    function ka() {
        __p && __p();
        b("setTimeoutAcrossTransitions")(b("TimeSlice").guard(function() {
            __p && __p();
            var a = U.shift();
            R().appendChild(a);
            if (U.length === 0) T = !1, V = !1;
            else if (b("Visibility").isHidden()) {
                while (U.length) R().appendChild(U.shift());
                T = !1;
                V = !1
            } else ka()
        }, "Bootloader staggered download scheduler", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        }), 0)
    }

    function la(a, c, d) {
        return function() {
            b("FBLogger")("bootloader").warn("CSS timeout [%s] at %s | concurrency: %s", a, c, Object.keys(r).length), t[c] = !0, d()
        }
    }

    function W(a, c, d, e) {
        __p && __p();
        var f = function() {
            return $.done([d], c)
        };
        r[c] = b("performanceAbsoluteNow")();
        if (a === "js") ha(c, d, f, e);
        else if (a === "async") ma(c, f);
        else if (a === "css") {
            if (d == null) {
                b("FBLogger")("bootloader").mustfix("name must be defined when loading CSS resource");
                return
            }
            a = q[d].crossOrigin;
            b("CSSLoader").loadStyleSheet(d, c, e, !!a, f, la(d, c, f))
        }
    }

    function ma(a, c) {
        __p && __p();
        var d = b("getAsyncParams")("GET");
        for (var e in d) {
            var f = encodeURIComponent(e),
                g = encodeURIComponent(String(d[e]));
            a += "&" + f + "=" + g
        }
        var h = b("getSameOriginTransport")();
        h.open("GET", a, !0);
        var i = b("TimeSlice").getGuardedContinuation("Bootloader _requestHastePayload");
        h.onreadystatechange = function() {
            h.readyState === 4 && i(function() {
                var d = h.status === 200 ? JSON.parse(b("CSRFGuard").clean(h.responseText)) : {};
                if (d == null) b("FBLogger")("bootloader").warn("Invalid response from %s: %s", a, h.responseText.substr(0, 256));
                else {
                    var e = na();
                    e(d, c)
                }
            })
        };
        h.send()
    }

    function na() {
        __p && __p();
        return b("TimeSlice").guard(function(a, c) {
            __p && __p();
            var d = a.jsmods,
                e = a.resource_map,
                f = a.bootloadable,
                g = a.ixData,
                i = a.bxData,
                j = a.gkxData,
                k = a.qexData;
            a = a.allResources;
            e && $.setResourceMap(e);
            g && h.add(g);
            i && b("bx").add(i);
            j && b("gkx").add(j);
            k && b("qex").add(k);
            f && $.enableBootload(f);
            $.loadResources(a || [], function() {
                new(b("ServerJS"))().handle(d || {}), c()
            })
        }, "Bootloader receiveEndpointData", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION
        })
    }

    function X(c, d, e, f) {
        __p && __p();
        var h = {},
            i = {},
            j = {},
            k = window.CavalryLogger && window.CavalryLogger.getInstance();
        c.forEach(function(a) {
            var c = q[a];
            if (!c) {
                b("FBLogger")("bootloader").mustfix("Unable to resolve resource %s.", a);
                return
            }
            c.nonblocking && !b("BootloaderConfig").assumeNotNonblocking ? j[a] = !0 : i[a] = !0;
            l[a] || (l[a] = !0, h[a] = c, k && k.measureResources({
                name: a,
                type: c.type
            }, e))
        });
        c = d;
        if (f) {
            var m = b("performanceAbsoluteNow")();
            c = function() {
                var a = Math.round(b("performanceAbsoluteNow")() - m),
                    c = Object.keys(i).length,
                    e = Object.keys(h);
                c = {
                    blocking_resources_downloaded: e.filter(function(a) {
                        return a in i
                    }).length,
                    blocking_resources_count: c,
                    all_resources_downloaded: e.length,
                    all_resources_count: c + Object.keys(j).length,
                    err_count: Object.values(h).filter(function(a) {
                        a = a.src;
                        return a in t
                    }).length
                };
                var g = b("TimeSlice").getContext();
                c = babelHelpers["extends"]({}, f, c, {
                    timeslice_context: g && g.name,
                    start_time: m,
                    duration: a,
                    will_request_hashes: e
                });
                C.inform(ea.BOOTLOAD, c, "persistent");
                d && d()
            }
        }
        if (b("cr:696703") && c) {
            var n = b("cr:696703").getCallbackScheduler(),
                o = c;
            c = function() {
                n(o)
            }
        } else if (a.ScheduleJSWork && c) {
            var p = c;
            c = function() {
                a.ScheduleJSWork(p)()
            }
        }
        c && B.registerCallback(c, Object.keys(i));
        var r = document.createDocumentFragment();
        Object.entries(h).forEach(function(a) {
            __p && __p();
            var c, d = a[0];
            a = a[1];
            var e = a.type;
            a = a.src;
            if (d === ((c = E) == null ? void 0 : c.key)) {
                if (D != null) return;
                var f = b("TimeSlice").getGuardedContinuation("Schedule async batch request: Bootloader._loadResources");
                D = b("setImmediateAcrossTransitions")(function() {
                    return f(function() {
                        D = null;
                        var a = E;
                        a != null || g(0, 11539);
                        a = (a = q[d]) == null ? void 0 : a.src;
                        a != null || g(0, 12736, d);
                        E = null;
                        W(e, a, d, R())
                    })
                })
            } else W(e, a, d, r)
        });
        R().appendChild(r)
    }

    function Y(a) {
        __p && __p();
        var c, d = a.getAttribute("data-bootloader-hash");
        if (!d) return;
        if (a.id) {
            if (z[a.id]) return;
            z[a.id] = !0
        }
        var e = a.tagName == "SCRIPT",
            f = e ? {
                src: a.src,
                type: "js"
            } : {
                src: a.href,
                type: "css"
            };
        a.crossOrigin && (f.crossOrigin = 1);
        a.getAttribute("data-nonblocking") && (f.nonblocking = 1);
        q[d] && !b("BootloaderConfig").silentDups && b("FBLogger")("bootloader").warn("Duplicate resource [%s]: %s", d, f.src);
        q[d] = f;
        var g = function() {
            return $.done([d])
        };
        c = e ? !a.getAttribute("async") : ((c = a.parentNode) == null ? void 0 : c.tagName) === "HEAD";
        c || window._btldr && window._btldr[d] ? g() : (l[d] = !0, e ? ia(a, d, g) : b("CSSLoader").setupEventListeners(d, f.src, R(), g, la(d, f.src, g), a))
    }

    function oa() {
        if (y) return;
        y = !0;
        Array.from(document.getElementsByTagName("link")).forEach(function(a) {
            return Y(a)
        });
        Array.from(document.getElementsByTagName("script")).forEach(function(a) {
            return Y(a)
        })
    }
    var Z = {
            _insertSorted: function(a) {
                __p && __p();
                if (J.length === 0) {
                    J.push(a);
                    return
                }
                var b = 0,
                    c = J.length - 1,
                    d, e;
                while (b <= c) {
                    d = Math.floor((b + c) / 2);
                    e = J[d];
                    if (e.priority < a.priority) b = d + 1;
                    else if (e.priority > a.priority) c = d - 1;
                    else {
                        J.splice(d, 0, a);
                        return
                    }
                }
                J.splice(b, 0, a)
            },
            enqueuePreloadJob: function(a, b) {
                b === void 0 && (b = 1), !(a in m) && !(a in l) && !(a in K) && (K[a] = !0, Z._insertSorted({
                    hash: a,
                    priority: b
                }), Z.runPreloadQueue())
            },
            runPreloadQueue: function() {
                __p && __p();
                if (b("BootloaderConfig").preloader_preload_after_dd && !N || !M) return;
                var a = R(),
                    c = function() {
                        var b = J.pop(),
                            c = q[b.hash];
                        if (!c) return "continue";
                        !l[b.hash] && !m[b.hash] && (G[b.hash] = !0, ga(c.src, c.type, b.hash, a, function() {
                            M && (delete G[b.hash], Z.runPreloadQueue(), Z._enqueueScriptLoadingJob(b.hash, q[b.hash].type))
                        }))
                    };
                while (Z._isNetworkIdle() && J.length > 0 && Object.keys(G).length < ba) {
                    var d = c();
                    if (d === "continue") continue
                }
            },
            _enqueueScriptLoadingJob: function(a, b) {
                if (b === "css") return;
                l[a] || (I.push(a), Z._issueIdleCallback())
            },
            _runScriptLoadingQueue: function() {
                L = null;
                var a = function() {
                    var a = I.shift();
                    l[a] || (H[a] = !0, X([a], function() {
                        M && (delete H[a], Z._issueIdleCallback())
                    }))
                };
                while (I.length > 0 && Object.keys(H).length < F) a()
            },
            _issueIdleCallback: function() {
                I.length > 0 && Object.keys(H).length < F && !L && (L = b("requestIdleCallback")(Z._runScriptLoadingQueue))
            },
            _isNetworkIdle: function() {
                return Object.keys(r).length == 0
            }
        },
        $ = {
            preloadModules: function(a) {
                __p && __p();
                if (!A) {
                    var c = b("TimeSlice").getGuardedContinuation("Deferred: Bootloader.preloadModules");
                    j.push([a, c]);
                    return
                }
                c = document.createDocumentFragment();
                for (var a = a, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f, g;
                    if (d) {
                        if (e >= a.length) break;
                        g = a[e++]
                    } else {
                        e = a.next();
                        if (e.done) break;
                        g = e.value
                    }
                    g = g;
                    g = Q(g);
                    g = [g.r, ((f = g.rdfds) == null ? void 0 : f.r) || [], ((f = g.rds) == null ? void 0 : f.r) || []];
                    for (var f = 0; f < g.length; f++) {
                        var h = g[f];
                        for (var h = h, i = Array.isArray(h), k = 0, h = i ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                            var n;
                            if (i) {
                                if (k >= h.length) break;
                                n = h[k++]
                            } else {
                                k = h.next();
                                if (k.done) break;
                                n = k.value
                            }
                            n = n;
                            var o = q[n];
                            if (!o) {
                                b("FBLogger")("bootloader").mustfix("Unable to resolve resource %s.", n);
                                continue
                            }
                            if (m[n] || l[n]) continue;
                            ga(o.src, o.type, n, c)
                        }
                    }
                }
                R().appendChild(c)
            },
            loadModules: function(a, c, e) {
                __p && __p();
                c === void 0 && (c = i);
                e === void 0 && (e = "loadModules: unknown caller");
                var f = function() {
                        return c.apply(void 0, arguments)
                    },
                    g = {
                        remove: function() {
                            c = i
                        }
                    };
                if (!A) {
                    var h = "Deferred: Bootloader.loadModules";
                    h = b("TimeSlice").getGuardedContinuation(h);
                    k.push([a, f, e, h]);
                    return g
                }
                var j = [],
                    l = [],
                    m = [],
                    n = [],
                    p = [],
                    r = [];
                h = !1;
                var s = 0,
                    t = b("performanceAbsoluteNow")();
                a.forEach(function(a) {
                    var c, d = Q(a);
                    d.be && (s++, a in o ? j.push(o[a]) : b("ifRequired").call(null, a, null, function() {
                        r.push(a)
                    }));
                    a in w || (h = !0, w[a] = t);
                    j.push.apply(j, d.r);
                    l.push.apply(l, ((c = d.rdfds) == null ? void 0 : c.r) || []);
                    m.push.apply(m, ((c = d.rds) == null ? void 0 : c.r) || []);
                    n.push.apply(n, ((c = d.rdfds) == null ? void 0 : c.m) || []);
                    p.push.apply(p, ((c = d.rds) == null ? void 0 : c.m) || [])
                });
                if (r.length > 0) {
                    var u = "async:" + aa++;
                    if (b("BootloaderConfig").shouldCoalesceModuleRequestsMadeInSameTick)
                        if (E == null) E = {
                            key: u,
                            modules: r
                        }, q[u] = {
                            src: S(r),
                            type: "async"
                        };
                        else {
                            var v;
                            u = E.key;
                            (v = E.modules).push.apply(v, r);
                            q[u].src = S(E.modules)
                        }
                    else q[u] = {
                        src: S(r),
                        type: "async"
                    };
                    j.push(u);
                    r.forEach(function(a) {
                        o[a] = u
                    })
                }
                b("ifRequired")("TimeSliceInteraction", function(b) {
                    b.informGlobally("Bootloader.loadResources").addSetAnnotation("requested_hashes", j).addSetAnnotation("rdfd_requested_hashes", l).addSetAnnotation("rd_requested_hashes", m).addStringAnnotation("bootloader_reference", e).addSetAnnotation("requested_components", a)
                });
                v = JSON.stringify([e, a]);
                var y = !1;
                v in x || (y = !0, x[v] = t);
                var z = null;
                y && (z = {
                    ref: e,
                    components: a,
                    has_new_component: h,
                    first_identical_request: y,
                    async_resources_count: s,
                    async_resources_downloaded: r.length
                });
                var C = "rsrcs:" + v;
                X(j, d.bind(null, a, function() {
                    f.apply(void 0, arguments), B.satisfyPersistentDependency(C)
                }), null, z);
                var D = "rdfds:" + v;
                X(l, function() {
                    B.registerCallback(d.bind(null, n, function() {
                        B.satisfyPersistentDependency(D)
                    }), [C])
                });
                X(m, function() {
                    B.registerCallback(d.bind(null, p, i), [D])
                });
                return g
            },
            loadResources: function(a, b, c) {
                oa(), X(a, b, c)
            },
            requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function(a) {
                W("js", a, null, R())
            },
            done: function(a, c) {
                c != null && (s[c] = b("performanceAbsoluteNow")() - r[c], delete r[c], Z.runPreloadQueue()), window.CavalryLogger && window.CavalryLogger.done_js(a), a.forEach(function(a) {
                    a != null && (l[a] = !0, B.satisfyPersistentDependency(a))
                })
            },
            pickupResourcesByIDs: function(a) {
                for (var b = 0; b < a.length; b++) Y(document.getElementById(a[b]))
            },
            enableBootload: function(a) {
                __p && __p();
                for (var b in a)
                    if (!n[b]) {
                        n[b] = a[b];
                        var c = Q(b);
                        if (M && c.p && c.p > 0) {
                            var d;
                            c = [c.r, ((d = c.rdfds) == null ? void 0 : d.r) || [], ((d = c.rds) == null ? void 0 : d.r) || []];
                            for (var d = 0; d < c.length; d++) {
                                var e = c[d];
                                for (var e = e, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                    var h;
                                    if (f) {
                                        if (g >= e.length) break;
                                        h = e[g++]
                                    } else {
                                        g = e.next();
                                        if (g.done) break;
                                        h = g.value
                                    }
                                    h = h;
                                    Z.enqueuePreloadJob(h, 1)
                                }
                            }
                        }
                    } A || (oa(), A = !0, k.forEach(function(a) {
                    var b = a[0],
                        c = a[1],
                        d = a[2];
                    a = a[3];
                    a(function() {
                        $.loadModules.apply($, [b, c, d])
                    })
                }), j.forEach(function(a) {
                    var b = a[0];
                    a = a[1];
                    a(function() {
                        $.preloadModules.apply($, [b])
                    })
                }), j = [], k = [])
            },
            setResourceMap: function(a) {
                for (var b in a) q[b] || (q[b] = a[b])
            },
            getURLToHashMap: function() {
                var a = {};
                for (var b in q) a[q[b].src] = b;
                return a
            },
            getArbiter: function() {
                return C
            },
            loadPredictedResourceMap: function(a, b) {
                $.setResourceMap(a), X(Object.keys(a), b)
            },
            getLoadingUrls: function() {
                var a = {},
                    c = b("performanceAbsoluteNow")();
                for (var d in r) a[d] = c - r[d];
                return a
            },
            getBootloadedComponents: function() {
                return w
            },
            getLoadedUrlTimes: function() {
                return s
            },
            getErrorUrls: function() {
                return Object.keys(t)
            },
            notifyDisplayDone: function() {
                N || (N = !0, Z.runPreloadQueue())
            },
            __debug: {
                callbackManager: B,
                componentMap: n,
                requested: l,
                resources: q,
                retries: u,
                errors: t,
                loading: r,
                bootloaded: w,
                preloader: Z
            },
            Events: ea
        };
    e.exports = $
}), null);
__d("ReactExperimentalProdProfiling", ["requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = null,
        h = !1,
        i = 0,
        j = {};
    a = {
        startProfiling: function() {
            var a = (i++).toString();
            g !== null ? j[a] = g.addUserTimingListener() : j[a] = function() {};
            var b = function() {
                j[a](), delete j[a]
            };
            return {
                stopProfiling: b
            }
        },
        onReactDomLoad: function(a) {
            __p && __p();
            if (g !== null) return;
            g = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            if (typeof g.addUserTimingListener !== "function") {
                b("requireWeak")("warning", function(a) {
                    a(h, "ReactExperimentalProdProfiling.onReactDomLoad() cannot find the necessary React internals."), h = !0
                });
                g = null;
                return
            }
            Object.keys(j).map(function(a) {
                g && (j[a] = g.addUserTimingListener())
            })
        }
    };
    e.exports = a
}), null);
__d("ArtilleryUserTimingProfiler", ["ArtilleryExperiments", "Bootloader", "ReactExperimentalProdProfiling"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = window.PerformanceObserver,
        h = window.PerformanceObserverEntryList,
        i = null,
        j, k = [],
        l = [];

    function m() {
        return j != null ? j.isActive() : l.length > 0
    }
    n() && b("Bootloader").loadModules(["GeneratedArtilleryUserTimingSink"], function(a) {
        __p && __p();
        j = new a();
        j.setScalar("navStart", window.performance.timing.navigationStart);
        for (var a = 0; a < l.length; a++) {
            var b = l[a];
            b()
        }
        l.length = 0;
        k.forEach(function(a) {
            return o(a, null)
        });
        k.length = 0
    }, "ArtilleryUserTimingProfiler");

    function n() {
        if (navigator && navigator.userAgent.indexOf("Android") > -1 && navigator.userAgent.indexOf("Chrome") > -1) {
            var a = navigator.userAgent.match(/Chrome\/(\d*)/);
            if (a) {
                a = Number(a[1]);
                if (a < 60) return !1
            }
        }
        return b("ArtilleryExperiments").user_timing && window && window.performance && window.performance.timing && window.performance.timing.navigationStart && g && h
    }

    function o(a, b) {
        j != null ? a.getEntries().forEach(function(a) {
            j.addEntry(a)
        }) : k.push(a)
    }

    function p() {
        return {
            react: b("ReactExperimentalProdProfiling").startProfiling()
        }
    }

    function q(a) {
        a.react.stopProfiling()
    }
    var r = {
        close: function(a) {
            a === void 0;
            return null
        }
    };

    function a() {
        __p && __p();
        if (!n()) return null;
        i === null && (i = new g(o), i.observe({
            entryTypes: ["measure"]
        }));
        var a = !1,
            b;
        j == null ? (b = r, l.push(function() {
            a || (b = j.open())
        })) : b = j.open();
        var c = p();
        return {
            close: function(d) {
                d === void 0 && (d = !1);
                a = !0;
                q(c);
                d = b.close(d);
                !m() && i !== null && (i.disconnect(), i = null);
                return d
            }
        }
    }
    c = {
        startRecording: a
    };
    e.exports = c
}), null);
__d("ExecutionContextObservers", [], (function(a, b, c, d, e, f) {
    a = {
        MUTATION_COUNTING: 0,
        PROFILING_COUNTERS: 1,
        REFERENCE_COUNTING: 2,
        HEARTBEAT: 3,
        CALL_STACK: 4,
        ASYNC_PROFILER: 5,
        TIMESLICE_EXECUTION_LOGGER: 6,
        FLUX_PERF_TOOL: 7
    };
    b = {
        MUTATION_COUNTING: 0,
        REFERENCE_COUNTING: 1,
        PROFILING_COUNTERS: 2,
        HEARTBEAT: 3,
        CALL_STACK: 4,
        ASYNC_PROFILER: 5,
        TIMESLICE_EXECUTION_LOGGER: 6,
        FLUX_PERF_TOOL: 7
    };
    c = {
        beforeIDs: a,
        afterIDs: b
    };
    e.exports = c
}), null);
__d("LogBuffer", ["CircularBuffer"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = a.__fbNativeSetTimeout || a.setTimeout,
        h = 5e3,
        i = {},
        j = {};
    c = {
        write: function(a, c) {
            var d = i[a] = i[a] || new(b("CircularBuffer"))(h);
            d.write(c);
            j[a] && j[a].forEach(function(a) {
                try {
                    a(c)
                } catch (a) {}
            })
        },
        read: function(a) {
            if (!i[a]) return [];
            else return i[a].read()
        },
        tail: function(a, b) {
            __p && __p();
            if (typeof b !== "function") return;
            j[a] = j[a] || [];
            j[a].push(b);
            if (i[a]) {
                a = i[a];
                a.read().forEach(function(a) {
                    try {
                        b(a)
                    } catch (a) {}
                })
            }
        },
        expand: function(a, c) {
            var d = i[a];
            d ? d.expand(c) : i[a] = new(b("CircularBuffer"))(c)
        },
        clear: function(a) {
            i[a] && g(function() {
                i[a].clear()
            }, 0)
        }
    };
    e.exports = c
}), null);
__d("OnDemandExecutionContextObserver", ["TimeSlice"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            this.$5 = !1, this.$4 = !1, this.$1 = 0, this.$2 = {}, this.$3 = 0
        }
        var c = a.prototype;
        c.onNewContextCreatedWhileEnabled = function(a, b, c) {
            throw Error("unimplemented abstract method")
        };
        c.onNewContextCreatedWhileDisabled = function(a, b, c) {};
        c.onContextCanceled = function(a, b) {};
        c.onBeforeContextStartedWhileEnabled = function(a, b, c) {
            throw Error("unimplemented abstract method")
        };
        c.onBeforeContextStartedWhileDisabled = function(a, b, c) {};
        c.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
            throw Error("unimplemented abstract method")
        };
        c.onAfterContextStartedWhileDisabled = function(a, b, c, d) {};
        c.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
            throw Error("unimplemented abstract method")
        };
        c.onAfterContextEndedWhileDisabled = function(a, b, c, d) {};
        c.onNewContextCreated = function(a, b, c) {
            if (this.isEnabled()) return this.onNewContextCreatedWhileEnabled(a, b, c);
            else {
                this.onNewContextCreatedWhileDisabled(a, b, c);
                return null
            }
        };
        c.onBeforeContextStarted = function(a, b, c) {
            if (this.isEnabled()) return this.onBeforeContextStartedWhileEnabled(a, b, c);
            else {
                this.onBeforeContextStartedWhileDisabled(a, b, c);
                return null
            }
        };
        c.onAfterContextStarted = function(a, b, c, d) {
            c = c;
            if (this.isEnabled()) return this.onAfterContextStartedWhileEnabled(a, b, c, d);
            else {
                this.onAfterContextStartedWhileDisabled(a, b, c, d);
                return null
            }
        };
        c.onAfterContextEnded = function(a, b, c, d) {
            if (this.isEnabled()) {
                var e = c;
                this.onAfterContextEndedWhileEnabled(a, b, e, d)
            } else this.onAfterContextEndedWhileDisabled(a, b, c, d);
            this.$4 && !this.$5 && a.isRoot && (this.onDisable(), this.$4 = !1)
        };
        c.onDisable = function() {};
        c.onEnable = function() {};
        c.getBeforeID = function() {
            throw Error("unimplemented abstract method")
        };
        c.getAfterID = function() {
            throw Error("unimplemented abstract method")
        };
        c.isEnabled = function() {
            return this.$4
        };
        c.__getExpiryCallback = function() {
            var a = this,
                b = ++this.$1;
            this.$2[b] = !0;
            this.$3++;
            return function() {
                a.$2[b] && (delete a.$2[b], a.$3--, a.$3 === 0 && (a.$5 = !1))
            }
        };
        c.expressInterest = function() {
            var a = this.__getExpiryCallback();
            this.isEnabled() || (this.onEnable(), b("TimeSlice").catchUpOnDemandExecutionContextObservers(this));
            this.$4 = !0;
            this.$5 = !0;
            return a
        };
        return a
    }();
    e.exports = a
}), null);
__d("Heartbeat", ["Env", "ExecutionContextObservers", "FBLogger", "LogBuffer", "OnDemandExecutionContextObserver", "TimeSlice", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    c = function(c) {
        __p && __p();
        babelHelpers.inheritsLoose(d, c);

        function d() {
            var a, b;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (a = b = c.call.apply(c, [this].concat(e)) || this, b.$HeartbeatObserver1 = null, b.$HeartbeatObserver2 = 33, b.$HeartbeatObserver3 = 60, b.$HeartbeatObserver4 = null, b.$HeartbeatObserver5 = null, b.$HeartbeatObserver6 = {}, b.$HeartbeatObserver7 = null, b.$HeartbeatObserver8 = [], b.$HeartbeatObserver9 = 1, b.$HeartbeatObserver10 = null, a) || babelHelpers.assertThisInitialized(b)
        }
        var e = d.prototype;
        e.onNewContextCreatedWhileEnabled = function(a, b, c) {
            return null
        };
        e.onBeforeContextStartedWhileEnabled = function(a, b, c) {
            return null
        };
        e.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
            return null
        };
        e.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
            b = a.absBeginTimeMs;
            c = a.absEndTimeMs;
            d = a.name;
            a = a.isRoot;
            a && b != null && c != null && (this.$HeartbeatObserver6[d] ? (this.$HeartbeatObserver11({
                type: "ignored_exec",
                timeMs: b
            }, !0), this.$HeartbeatObserver11({
                type: "ignored_exec",
                timeMs: c
            }, !1)) : (this.$HeartbeatObserver11({
                type: "exec",
                timeMs: b
            }, !0), this.$HeartbeatObserver11({
                type: "exec",
                timeMs: c
            }, !1)))
        };
        e.__getExpiryCallback = function() {
            var a = this,
                d = c.prototype.__getExpiryCallback.call(this),
                e = b("performanceAbsoluteNow")();
            this.$HeartbeatObserver8.push([e, d]);
            return function() {
                d(), a.$HeartbeatObserver12()
            }
        };
        e.onEnable = function() {
            __p && __p();
            var c = b("Env").timeslice_heartbeat_config || {};
            this.$HeartbeatObserver2 = c.pollIntervalMs || this.$HeartbeatObserver2;
            this.$HeartbeatObserver3 = c.idleGapThresholdMs || this.$HeartbeatObserver3;
            this.$HeartbeatObserver6 = c.ignoredTimesliceNames || this.$HeartbeatObserver6;
            c = a.__fbNativeSetInterval || a.setInterval;
            this.$HeartbeatObserver5 = c(this.$HeartbeatObserver13.bind(this), this.$HeartbeatObserver2);
            c = b("performanceAbsoluteNow")();
            this.$HeartbeatObserver4 = {
                type: "beat",
                timeMs: c
            };
            this.$HeartbeatObserver7 = c + this.$HeartbeatObserver2;
            this.$HeartbeatObserver10 = c
        };
        e.onDisable = function() {
            this.$HeartbeatObserver5 && clearInterval(this.$HeartbeatObserver5), this.$HeartbeatObserver5 = null
        };
        e.getBeforeID = function() {
            return b("ExecutionContextObservers").beforeIDs.HEARTBEAT
        };
        e.getAfterID = function() {
            return b("ExecutionContextObservers").afterIDs.HEARTBEAT
        };
        e.$HeartbeatObserver14 = function(a) {
            return a.type == "beat" || a.type == "ignored_exec"
        };
        e.$HeartbeatObserver11 = function(a, c) {
            __p && __p();
            if (this.$HeartbeatObserver4 == null) {
                b("FBLogger")("FIXME").mustfix("lastEvent should never be null");
                this.$HeartbeatObserver4 = a;
                return
            }
            var d = this.$HeartbeatObserver4.timeMs,
                e = a.timeMs;
            if (c) {
                c = this.$HeartbeatObserver7 + this.$HeartbeatObserver3;
                c = e > c;
                if (this.$HeartbeatObserver4.type === "exec") a.type === "exec" ? this.$HeartbeatObserver15(d, e, c ? "likely_btwn_exec" : "btwn_exec") : this.$HeartbeatObserver14(a) && this.$HeartbeatObserver15(d, e, c ? "likely_post_exec" : "post_exec");
                else if (this.$HeartbeatObserver14(this.$HeartbeatObserver4))
                    if (a.type === "exec") this.$HeartbeatObserver15(d, e, c ? "likely_pre_exec" : "pre_exec");
                    else if (this.$HeartbeatObserver14(a) && c) {
                    c = a.type === "beat" ? "delayed_beat" : "delayed_beat_btwn_ignored";
                    this.$HeartbeatObserver15(d, e, c)
                }
            }
            this.$HeartbeatObserver4 = a
        };
        e.$HeartbeatObserver15 = function(a, c, d) {
            a < c && b("LogBuffer").write("time_slice_heartbeat", {
                begin: a,
                end: c,
                id: this.$HeartbeatObserver9++,
                parentID: null,
                guard: "browser time: " + d,
                representsExecution: !1
            })
        };
        e.$HeartbeatObserver13 = function() {
            var a = b("performanceAbsoluteNow")();
            this.$HeartbeatObserver12(a);
            this.$HeartbeatObserver11({
                type: "beat",
                timeMs: a
            }, !0);
            this.$HeartbeatObserver7 = a + this.$HeartbeatObserver2
        };
        e.$HeartbeatObserver12 = function(a) {
            __p && __p();
            a = a || b("performanceAbsoluteNow")();
            while (this.$HeartbeatObserver8.length > 0) {
                var c = this.$HeartbeatObserver8[0],
                    d = c[0];
                c = c[1];
                if (a - d > h.MAX_SINGLE_INTEREST_TIME_MS) c(), this.$HeartbeatObserver8.shift();
                else break
            }
            d = this.$HeartbeatObserver10;
            a - d > h.MAX_ENABLE_TO_DISABLE_TIME_MS && this.$HeartbeatObserver16()
        };
        e.$HeartbeatObserver16 = function() {
            __p && __p();
            for (var a = this.$HeartbeatObserver8, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                d[0];
                d = d[1];
                d()
            }
            this.$HeartbeatObserver8 = []
        };
        return d
    }(b("OnDemandExecutionContextObserver"));
    var g = new c();
    b("TimeSlice").registerExecutionContextObserver(g);
    var h = {
        MAX_SINGLE_INTEREST_TIME_MS: 6e4,
        MAX_ENABLE_TO_DISABLE_TIME_MS: 4 * 6e4,
        get: function() {
            return g
        },
        enableHeartbeat: function() {},
        disablePageHeartbeat: function() {}
    };
    e.exports = h
}), 3);
__d("IntervalTrackingBoundedBuffer", ["CircularBuffer", "ErrorUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 5e3;
    a = function() {
        __p && __p();

        function a(a) {
            __p && __p();
            var c = this;
            this.$6 = 0;
            if (a != null) {
                if (a <= 0) throw new Error("Size for a buffer must be greater than zero.")
            } else a = g;
            this.$4 = a;
            this.$1 = new(b("CircularBuffer"))(a);
            this.$1.onEvict(function() {
                c.$6++
            });
            this.$2 = [];
            this.$3 = 1;
            this.$5 = 0
        }
        var c = a.prototype;
        c.open = function() {
            __p && __p();
            var a = this,
                b = this.$3++,
                c = !1,
                d, e = this.$5,
                f = {
                    id: b,
                    startIdx: e,
                    hasOverflown: function() {
                        return f.getOverflowSize() > 0
                    },
                    getOverflowSize: function() {
                        return d != null ? d : Math.max(a.$6 - e, 0)
                    },
                    close: function() {
                        if (c) return [];
                        else {
                            c = !0;
                            d = a.$6 - e;
                            return a.$7(b)
                        }
                    }
                };
            this.$2.push(f);
            return f
        };
        c.pushElement = function(a) {
            this.$2.length > 0 && (this.$1.write(a), this.$5++);
            return this
        };
        c.isActive = function() {
            return this.$2.length > 0
        };
        c.$8 = function(a) {
            return Math.max(a - this.$6, 0)
        };
        c.$7 = function(a) {
            __p && __p();
            var c, d, e, f;
            for (var g = 0; g < this.$2.length; g++) {
                var h = this.$2[g],
                    i = h.startIdx;
                h = h.id;
                h === a ? (e = g, f = i) : (d == null || i < d) && (d = i);
                (c == null || i < c) && (c = i)
            }
            if (e == null || c == null || f == null) {
                b("ErrorUtils").reportError(new Error("messed up state inside IntervalTrackingBoundedBuffer"));
                return []
            }
            this.$2.splice(e, 1);
            h = this.$8(f);
            i = this.$1.read().slice(h);
            g = this.$8(d == null ? this.$5 : d) - this.$8(c);
            g > 0 && (this.$1.dropFirst(g), this.$6 += g);
            return i
        };
        return a
    }();
    e.exports = a
}), null);
__d("ProfilingCountersStore", ["IntervalTrackingBoundedBuffer"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = new(b("IntervalTrackingBoundedBuffer"))(),
        h = {
            getInstance: function() {
                return g
            },
            toMap: function(a) {
                var b = {};
                a.forEach(function(a) {
                    return b[a.getTimeSliceContextID()] = a
                });
                return b
            },
            getNestedTotals: function(a) {
                return h._accumulateOverNestedActiveCounters(a, function(a, b) {
                    h._addOnto(b, a.getActiveCounters().getTotals());
                    return b
                }, {})
            },
            _accumulateOverNestedActiveCounters: function(a, b, c) {
                __p && __p();
                c = c;
                a.hasActiveCounters() && (c = b(a, c));
                if (a.processedNestedContexts != null)
                    for (var a = a.processedNestedContexts, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var f;
                        if (d) {
                            if (e >= a.length) break;
                            f = a[e++]
                        } else {
                            e = a.next();
                            if (e.done) break;
                            f = e.value
                        }
                        f = f;
                        c = h._accumulateOverNestedActiveCounters(f, b, c)
                    }
                return c
            },
            _getMaximumAttribution: function(a, b) {
                __p && __p();
                if (a.length === 0) return null;
                for (var c = a, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    if (b.propagatedAttributions && b.propagatedAttributions[f] != null) return f
                }
                f = null;
                e = null;
                for (var d = a, c = Array.isArray(d), a = 0, d = c ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var g;
                    if (c) {
                        if (a >= d.length) break;
                        g = d[a++]
                    } else {
                        a = d.next();
                        if (a.done) break;
                        g = a.value
                    }
                    g = g;
                    if (b.newAttributions && b.newAttributions[g] != null) {
                        var h = b.newAttributions[g].newCounterIdx;
                        (e == null || h < e) && (f = g, e = h)
                    }
                }
                return f
            },
            getNestedTotalsByAttributions: function(a, b) {
                __p && __p();
                return h._accumulateOverNestedActiveCounters(a, function(a, c) {
                    __p && __p();
                    var d = h._getMaximumAttribution(b, a);
                    if (d) {
                        d = h._getAttributedAndUnattributedForThisContext(d, a);
                        var e = d.attributed;
                        d = d.unattributed;
                        e != null && h._addOnto(c.attributed, e);
                        d != null && h._addOnto(c.unattributed, d)
                    } else h._addOnto(c.unattributed, a.getActiveCounters().getTotals());
                    return c
                }, {
                    attributed: {},
                    unattributed: {}
                })
            },
            _getAttributedAndUnattributedForThisContext: function(a, b) {
                __p && __p();
                var c = b.getActiveCounters().getTotals();
                if (b.propagatedAttributions != null && b.propagatedAttributions[a] != null) return {
                    attributed: c,
                    unattributed: null
                };
                else if (b.newAttributions != null && b.newAttributions[a] != null) {
                    b = b.newAttributions[a].snapshotAtStart;
                    if (b != null) {
                        a = Object.entries(b);
                        for (var d = 0; d < a.length; d++) {
                            var e = a[d],
                                f = e[0];
                            e = e[1];
                            e = c[f] - e;
                            e === 0 ? delete c[f] : c[f] = e
                        }
                        return {
                            attributed: c,
                            unattributed: b
                        }
                    } else return {
                        attributed: c,
                        unattributed: null
                    }
                } else return {
                    attributed: null,
                    unattributed: c
                }
            },
            _addOnto: function(a, b) {
                b = Object.entries(b);
                for (var c = 0; c < b.length; c++) {
                    var d = b[c],
                        e = d[0];
                    d = d[1];
                    a[e] = (a[e] || 0) + d
                }
            }
        };
    e.exports = h
}), null);
__d("ProfilingCounters", ["ErrorUtils", "ExecutionContextObservers", "OnDemandExecutionContextObserver", "ProfilingCountersStore", "TimeSlice", "TimeSliceInteractionSV", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    __p && __p();
    b("performanceAbsoluteNow")();
    var g = {
            ALL: "ALL",
            ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC: "ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC"
        },
        h = 100,
        i = [],
        j = function(c) {
            "use strict";
            __p && __p();
            babelHelpers.inheritsLoose(a, c);

            function a() {
                return c.apply(this, arguments) || this
            }
            var d = a.prototype;
            d.onNewContextCreatedWhileEnabled = function(a, b, c) {
                return k.currentContext().getPropagatedContextForChild(!!(c && c.isContinuation))
            };
            d.onBeforeContextStartedWhileEnabled = function(a, b, c) {
                __p && __p();
                var d = c && c.propagateCounterAttribution,
                    e = null;
                if (a.executionNumber > 0 && b) {
                    var f = Object.entries(b);
                    for (var h = 0; h < f.length; h++) {
                        var i = f[h],
                            j = i[0];
                        i = i[1];
                        var l = i.propagationType;
                        l !== "ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC" && (e = e || {}, e[j] = i)
                    }
                } else e = b;
                l = k.currentContext().getExecutionContext(!!(c && c.isContinuation), e);
                j = new k(!1, l, a.contextID);
                d != null && j.addAttribution(d, g.ALL);
                k.nestContext(j);
                return null
            };
            d.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
                return null
            };
            d.onAfterContextEndedWhileEnabled = function(a, c, d, e) {
                c = k.unnestContext();
                a.isRoot && b("ProfilingCountersStore").getInstance().pushElement(c)
            };
            d.getBeforeID = function() {
                return b("ExecutionContextObservers").beforeIDs.PROFILING_COUNTERS
            };
            d.getAfterID = function() {
                return b("ExecutionContextObservers").afterIDs.PROFILING_COUNTERS
            };
            d.onDisable = function() {
                k.resetState()
            };
            return a
        }(b("OnDemandExecutionContextObserver")),
        k = function() {
            "use strict";
            __p && __p();
            a.getObserver = function() {
                a.$2 || (a.$2 = new j());
                return a.$2
            };
            a.wrapInSingleContext = function(b) {
                var c = new a(!1, null, 0);
                b.forEach(function(a) {
                    return c.$3(a, !1)
                });
                return c
            };
            a.startTimingInContext = function(b, c) {
                if (!a.getObserver().isEnabled()) return null;
                for (var d = 0; d < i.length; d++) {
                    var e = i[d];
                    if (e.getTimeSliceContextID() === c) return e.getActiveCounters().startTiming(b)
                }
                return null
            };
            a.stopTimingInContext = function(b, c) {
                __p && __p();
                if (!a.getObserver().isEnabled()) return;
                for (var d = 0; d < i.length; d++) {
                    var e = i[d];
                    if (e.getTimeSliceContextID() === c) {
                        e.getActiveCounters().stopTiming(b);
                        return
                    }
                }
                return
            };
            a.startTiming = function(b) {
                return a.currentContext().getActiveCounters().startTiming(b)
            };
            a.stopTiming = function(b) {
                return a.currentContext().getActiveCounters().stopTiming(b)
            };
            a.incrementCounter = function(b, c) {
                a.currentContext().getActiveCounters().incrementCounter(b, c)
            };
            a.currentContext = function() {
                return i[i.length - 1]
            };

            function a(a, b, c) {
                this.isGlobal = a, this.propagatedAttributions = b, this.newAttributions = null, this.active = null, this.processedNestedContexts = null, this.newAttributionsCount = 0, this.$1 = c
            }
            var b = a.prototype;
            b.addAttribution = function(a, b) {
                this.$4(a) || (this.newAttributions == null && (this.newAttributions = {}), this.newAttributions[a] = {
                    newCounterIdx: this.newAttributionsCount,
                    propagationType: b,
                    snapshotAtStart: this.hasActiveCounters() ? this.getActiveCounters().getTotals() : null
                }, this.newAttributionsCount++);
                return this
            };
            b.$5 = function(a, b) {
                return b != null && b[a] != null
            };
            b.$4 = function(a) {
                return this.$5(a, this.propagatedAttributions) || this.$5(a, this.newAttributions)
            };
            a.$6 = function(a, b, c) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d],
                        f = e[0];
                    e = e[1];
                    var h = e.propagationType;
                    (h === g.ALL || b) && (a[f] = e)
                }
            };
            b.getPropagatedContextForChild = function(b) {
                __p && __p();
                var c;
                if (this.newAttributions == null)
                    if (this.propagatedAttributions == null || b) return this.propagatedAttributions;
                    else {
                        c = Object.entries(this.propagatedAttributions);
                        var d = !0;
                        for (var e = 0; e < c.length; e++) {
                            var f = c[e];
                            f[0];
                            f = f[1];
                            if (f.propagationType === g.ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC) {
                                d = !1;
                                break
                            }
                        }
                        if (d) return this.propagatedAttributions
                    } f = {};
                this.propagatedAttributions != null && a.$6(f, b, c || Object.entries(this.propagatedAttributions));
                this.newAttributions != null && a.$6(f, b, Object.entries(this.newAttributions));
                return f
            };
            b.getExecutionContext = function(b, c) {
                var d = b ? this.getPropagatedContextForChild(b) || {} : {};
                c && a.$6(d, b, Object.entries(c));
                return d
            };
            b.getActiveCounters = function() {
                this.active == null && (this.active = new l());
                return this.active
            };
            b.$7 = function() {
                return this.isGlobal
            };
            b.hasActiveCounters = function() {
                return this.active != null
            };
            a.nestContext = function(a) {
                i.push(a)
            };
            a.unnestContext = function() {
                if (i.length === 1) throw new Error("popping off the global context");
                var b = i.pop();
                if (b.hasActiveCounters()) var c = b.getActiveCounters();
                (b.hasActiveCounters() || b.processedNestedContexts != null) && a.currentContext().$3(b);
                return b
            };
            b.$3 = function(a, b) {
                b === void 0 && (b = !0);
                if (this.$7()) return;
                else b && this.processedNestedContexts != null && this.processedNestedContexts.length >= h || (this.processedNestedContexts = this.processedNestedContexts || [], this.processedNestedContexts.push(a))
            };
            b.getTimeSliceContextID = function() {
                return this.$1
            };
            a.resetState = function() {
                i = [new a(!0, null, 0)]
            };
            a.getHandle = function() {
                return m
            };
            return a
        }();
    k.AttributionPropagation = g;
    var l = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = null, this.$2 = null, this.$3 = null, this.$4 = null
        }
        var c = a.prototype;
        c.startTiming = function(c) {
            __p && __p();
            var d = a.$5++;
            c = {
                value: 0,
                counter: c,
                id: d,
                lastStartTime: 0
            };
            var e = this.$1 || [];
            this.$2 = this.$2 || {};
            this.$2[d] = e.length;
            e.push(c);
            var f = b("performanceAbsoluteNow")();
            c.lastStartTime = f;
            if (e.length > 1) {
                c = e[e.length - 2];
                c.value += f - c.lastStartTime
            }
            this.$1 = e;
            return d
        };
        c.stopTiming = function(a) {
            __p && __p();
            var c = b("performanceAbsoluteNow")(),
                d = this.$2,
                e = this.$1;
            if (d == null || e == null) {
                b("ErrorUtils").reportError(new Error("token does not match the counter context"));
                return 0
            }
            var f = d[a];
            delete d[a];
            if (f == null || e[f] == null) return 0;
            a = null;
            var g = 0;
            while (e.length - 1 > f) {
                var h = e.pop();
                g += h.value;
                delete d[h.id];
                a == null && h.lastStartTime != null && (a = h.lastStartTime)
            }
            h = e.pop();
            h.value += c - (a || h.lastStartTime);
            h.value += g;
            f = this.$4 || {};
            f[h.counter] = f[h.counter] || 0;
            f[h.counter] += h.value;
            e.length > 0 && (e[e.length - 1].lastStartTime = c);
            this.$1 = e;
            this.$4 = f;
            this.$2 = d;
            return h.value
        };
        c.incrementCounter = function(a, b) {
            var c = this.$3 || {};
            c[a] = c[a] || 0;
            c[a] += b;
            this.$3 = c
        };
        c.getTotals = function() {
            return babelHelpers["extends"]({}, this.$4 || {}, this.$3 || {})
        };
        c.openCounterCount = function() {
            return this.$1 != null ? this.$1.length : 0
        };
        return a
    }();
    l.$5 = 1;
    i.push(new k(!0, null, 0));
    b("TimeSlice").registerExecutionContextObserver(k.getObserver());
    var m = k.getObserver().expressInterest();
    a.ProfilingCounters = k;
    e.exports = k
}), 3);
__d("ArtilleryRequestDataCollector", ["ArtilleryUserTimingProfiler", "Env", "FBLogger", "Heartbeat", "ProfilingCounters", "ProfilingCountersStore", "TimeSlice", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g;
    b("requireWeak")("AsyncProfiler", function(a) {
        g = a
    });
    a = function() {
        __p && __p();

        function a(a) {
            a === void 0 && (a = !1), this.$1 = null, this.$2 = !1, this.$3 = null, this.$4 = null, this.$5 = null, this.$6 = null, this.$7 = null, this.$2 = a
        }
        var c = a.prototype;
        c.start = function() {
            this.$3 = b("ProfilingCountersStore").getInstance().open();
            this.$7 = b("ArtilleryUserTimingProfiler").startRecording();
            g != null && g.isSupported() ? this.$5 = g.startRecording() : this.$5 = null;
            var a = b("Env").timeslice_heartbeat_config || {},
                c = a.isHeartbeatEnabled;
            a = a.isArtilleryOn;
            c && (!this.$2 || a) && this.enablePageHeartbeat();
            this.$2 ? this.$4 = b("ProfilingCounters").getHandle() : this.$4 = b("ProfilingCounters").getObserver().expressInterest();
            this.$6 = b("TimeSlice").getBuffer().open();
            return this
        };
        c.enablePageHeartbeat = function() {
            this.$1 == null && (this.$1 = b("Heartbeat").get().expressInterest())
        };
        c.finish = function() {
            (!this.$3 || !this.$4 || !this.$6 || !this.$1) && b("FBLogger")("artillery").warn("Missing handles. PCData: %s, PCOnDemand: %s, TS: %s, heartbeat: %s", this.$3 == null, this.$4 == null, this.$6 == null, this.$1 == null);
            return this.$8()
        };
        c.disable = function() {
            var a = this.$5;
            a != null && g != null && (g.stopRecording(a), this.$5 = null);
            this.$8()
        };
        c.$8 = function() {
            __p && __p();
            var a = this.$7 ? this.$7.close() : null;
            this.$7 = null;
            var b = this.$3 ? this.$3.close() : [];
            this.$3 = null;
            var c = this.$6 ? this.$6.close() : [];
            this.$6 = null;
            this.$4 && this.$4();
            this.$4 = null;
            this.$1 && this.$1();
            this.$1 = null;
            return {
                sampleRecorder: this.$5,
                profilingCountersData: b,
                userTimingProfilerData: a,
                timeSliceData: c
            }
        };
        return a
    }();
    e.exports = a
}), null);
__d("setInterval", ["TimerStorage", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f) {
    function a(a, c) {
        for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
        var g = b("setIntervalAcrossTransitions").apply(void 0, [a, c].concat(e));
        b("TimerStorage").set(b("TimerStorage").INTERVAL, g);
        return g
    }
    e.exports = a
}), null);
__d("ArtilleryOnUntilOffLogging", ["ArtilleryRequestDataCollector", "Env", "clearInterval", "performanceAbsoluteNow", "setInterval"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = null,
        h = null;

    function i() {
        return window.CavalryLogger && window.CavalryLogger.disableArtilleryOnUntilOffLogging || !!b("Env").disable_profiling
    }
    var j = null,
        k = {
            disable: function() {
                j == null && (j = b("performanceAbsoluteNow")()), g && (b("clearInterval")(g), g = null), h && (h.disable(), h = null)
            },
            finish: function() {
                g && (b("clearInterval")(g), g = null);
                if (h) {
                    var a = h.finish();
                    h = null;
                    return a
                }
                return {
                    sampleRecorder: null,
                    profilingCountersData: [],
                    userTimingProfilerData: null,
                    timeSliceData: []
                }
            },
            lastDisableTime: function() {
                return j
            },
            onNewPageLoad: function(a) {
                a === void 0 && (a = !1), a || (k.disable(), j = null), h = new(b("ArtilleryRequestDataCollector"))(a), h.start()
            },
            enablePageHeartbeat: function() {
                h && h.enablePageHeartbeat()
            }
        };
    !i() ? (k.onNewPageLoad(!0), g = b("setInterval")(function() {
        i() && k.disable()
    }, 250)) : j = b("performanceAbsoluteNow")();
    e.exports = k
}), 3);
__d("DataStore", ["DataStoreConfig", "isEmpty"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = b("DataStoreConfig").useExpando,
        h = {},
        i = 1;

    function j(a) {
        if (typeof a === "string") return "str_" + a;
        else return "elem_" + (a.__FB_TOKEN || (a.__FB_TOKEN = [i++]))[0]
    }

    function k(a) {
        if (g && typeof a === "object") return a.__FB_STORE || (a.__FB_STORE = {});
        a = j(a);
        return h[a] || (h[a] = {})
    }
    var l = {
        set: function(a, b, c) {
            if (!a) throw new TypeError("DataStore.set: namespace is required, got " + typeof a);
            var d = k(a);
            d[b] = c;
            return a
        },
        get: function(a, b, c) {
            __p && __p();
            if (!a) throw new TypeError("DataStore.get: namespace is required, got " + typeof a);
            var d = k(a),
                e = d[b];
            if (typeof e === "undefined" && a.getAttribute)
                if (a.hasAttribute && !a.hasAttribute("data-" + b)) e = void 0;
                else {
                    a = a.getAttribute("data-" + b);
                    e = null === a ? void 0 : a
                } c !== void 0 && e === void 0 && (e = d[b] = c);
            return e
        },
        remove: function(a, c) {
            if (!a) throw new TypeError("DataStore.remove: namespace is required, got " + typeof a);
            var d = k(a),
                e = d[c];
            delete d[c];
            b("isEmpty")(d) && l.purge(a);
            return e
        },
        purge: function(a) {
            g && typeof a === "object" ? delete a.__FB_STORE : delete h[j(a)]
        },
        _storage: h
    };
    e.exports = l
}), null);
__d("BigPipePlugins", ["DataStore"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a() {}
        a.runPluginOnPagelet = function(b) {
            a.getPluginList().forEach(function(a) {
                a(b)
            })
        };
        a.getPluginList = function() {
            return [a.$1]
        };
        a.$1 = function(b) {
            if (!b) return;
            b = b.querySelectorAll("div[data-fte]");
            for (var c = 0, d = b.length; c < d; c++) a.$2(b[c], "data-ft", "data-ft")
        };
        a.$2 = function(a, c, d) {
            var e = a.getAttribute(c);
            e && (b("DataStore").set(a, d, e), a.removeAttribute(c))
        };
        return a
    }();
    e.exports = a
}), null);
__d("JSCC", [], (function $module_JSCC(global, require, requireDynamic, requireLazy, module, exports) {
    __p && __p();
    var factories = {};

    function createFactory(constructor) {
        var instance, constructed = !1;
        return function() {
            constructed || (instance = constructor(), constructed = !0);
            return instance
        }
    }
    var JSCC = {
        get: function get(key) {
            if (!factories[key]) throw new Error("JSCC entry is missing");
            return factories[key]()
        },
        init: function init(constructors) {
            for (var key in constructors) factories[key] = createFactory(constructors[key]);
            return function clearJSCC() {
                for (var key in constructors) delete factories[key]
            }
        },
        parse: function parse(jsccMapString) {
            return eval(jsccMapString)
        }
    };
    module.exports = JSCC
}), null);
__d("PageletEventConstsJS", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        ARRIVE_START: "prearrive",
        ARRIVE_END: "arrive",
        CSS_START: "css",
        CSS_END: "css_load",
        DISPLAY_START: "display_start",
        DISPLAY_END: "display",
        JS_START: "jsstart",
        JS_END: "jsdone",
        ONLOAD_START: "preonload",
        ONLOAD_END: "onload",
        SETUP: "setup"
    })
}), null);
__d("PageletSet", ["Arbiter"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {},
        h = {
            hasPagelet: function(a) {
                return Object.prototype.hasOwnProperty.call(g, a)
            },
            getPagelet: function(a) {
                return g[a]
            },
            getOrCreatePagelet: function(a) {
                if (!h.hasPagelet(a)) {
                    var b = new j(a);
                    g[a] = b
                }
                return h.getPagelet(a)
            },
            getPageletIDs: function() {
                return Object.keys(g)
            },
            removePagelet: function(a) {
                if (h.hasPagelet(a)) {
                    var b = h.getPagelet(a);
                    delete g[a];
                    b.destroy()
                }
            }
        };

    function i(a, b) {
        return a.contains ? a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    }
    var j = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this.id = a, this.$1 = null, this.$2 = [], this.addDestructor(function() {
                b("Arbiter").inform("pagelet/destroy", {
                    id: this.id,
                    root: this.$1
                })
            }.bind(this))
        }
        var c = a.prototype;
        c.getRoot = function() {
            return this.$1
        };
        c.setRoot = function(a) {
            this.$1 = a
        };
        c.$3 = function() {
            __p && __p();
            var a = [],
                b = this.$1;
            if (!b) return a;
            var c = h.getPageletIDs();
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                if (e === this.id) continue;
                e = g[e];
                var f = e.getRoot();
                f && i(b, f) && a.push(e)
            }
            return a
        };
        c.addDestructor = function(a) {
            this.$2.push(a)
        };
        c.destroy = function() {
            var a = this.$3();
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                h.hasPagelet(c.id) && h.removePagelet(c.id)
            }
            for (var c = 0; c < this.$2.length; c++) {
                a = this.$2[c]();
                a && a()
            }
        };
        return a
    }();
    e.exports = h
}), null);
__d("UserTimingUtils", ["performance"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = typeof b("performance").mark === "function" && typeof b("performance").clearMarks === "function" && typeof b("performance").measure === "function" && typeof b("performance").clearMeasures === "function";

    function a(a) {
        g && b("performance").mark(a)
    }

    function c(a, c) {
        if (g) {
            try {
                b("performance").measure(a, c)
            } catch (a) {}
            b("performance").clearMarks(c);
            b("performance").clearMeasures(a)
        }
    }
    e.exports = {
        measureStart: a,
        measureEnd: c
    }
}), null);
__d("__getCompileTime", [], (function(a, b, c, d, e, f) {
    e.exports = {}
}), null);
__d("__getFactoryTime", [], (function(a, b, c, d, e, f) {
    e.exports = {}
}), null);
__d("__getTotalFactories", [], (function(a, b, c, d, e, f) {
    e.exports = {}
}), null);
__d("captureUsageSnapshot", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        var a = window.__bodyWrapper;
        if (!a.getCodeUsage) return {
            js_calls: {},
            document_html: "",
            stylesheets: {}
        };
        a = babelHelpers["extends"]({}, a.getCodeUsage());
        var b = String(window.document.body.outerHTML),
            c = {};
        Array.from(document.styleSheets).forEach(function(a) {
            a.href && (c[a.href] = !0)
        });
        return {
            js_calls: a,
            document_html: b,
            stylesheets: c
        }
    };
    e.exports = a
}), null);
__d("clearTimeout", ["requireCond", "cr:806696"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("cr:806696")
}), null);
__d("fastDeepCopy", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a) {
        return typeof a === "object" && a !== null ? g(a) : a
    }

    function g(a) {
        __p && __p();
        var b = typeof a.constructor === "function" ? a.constructor() : {};
        if (Array.isArray(a))
            for (var c = 0; c < a.length; ++c) {
                var d = a[c];
                b[c] = typeof d === "object" && d !== null ? g(d) : d
            } else
                for (var e in a) {
                    d = a[e];
                    b[e] = typeof d === "object" && d !== null ? g(d) : d
                }
        return b
    }
    e.exports = a
}), null);
__d("performanceNow", ["performance"], (function(a, b, c, d, e, f) {
    b("performance").now ? a = function() {
        return b("performance").now()
    } : a = function() {
        return Date.now()
    };
    e.exports = a
}), null);
__d("nativeRequestAnimationFrame", [], (function(a, b, c, d, e, f) {
    b = a.__fbNativeRequestAnimationFrame || a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame;
    e.exports = b
}), null);
__d("requestAnimationFramePolyfill", ["nativeRequestAnimationFrame"], (function(a, b, c, d, e, f) {
    var g = 0;
    c = b("nativeRequestAnimationFrame") || function(b) {
        var c = Date.now(),
            d = Math.max(0, 16 - (c - g));
        g = c + d;
        return a.setTimeout(function() {
            b(Date.now())
        }, d)
    };
    e.exports = c
}), null);
__d("requestAnimationFrameAcrossTransitions", ["Env", "ErrorUtils", "TimerStorage", "TimeSlice", "clearTimeout", "performanceNow", "requestAnimationFramePolyfill", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = b("TimerStorage").ANIMATION_FRAME,
        h = 100,
        i = null,
        j = null,
        k = b("Env").gk_require_dic ? Object.create(null) : {},
        l = b("Env").gk_require_dic ? Object.create(null) : {},
        m = {
            DEFAULT: 0,
            QUERY_THEN_MUTATE: 1,
            FORCE_CLIENT_REFLOW: 2,
            DISPLAY_DONE_LOGGING: 3,
            SIZE: 4
        };

    function n(c) {
        __p && __p();
        l = k;
        k = b("Env").gk_require_dic ? Object.create(null) : {};
        i = null;
        j && (b("clearTimeout")(j), j = null);
        for (var d = 0; d < m.SIZE; d++) {
            var e = function(e) {
                var f = l[e];
                if (d === m.FORCE_CLIENT_REFLOW) {
                    b("Env").gk_raf_force_client_reflow && window.document.body && window.document.body.getClientRects();
                    return "break"
                }
                if (f.deleted || f.priority !== d) return "continue";
                b("ErrorUtils").applyWithGuard(function() {
                    f.call(a, c)
                })
            };
            _loop: for (var f in l) {
                var g = e(f);
                switch (g) {
                    case "break":
                        break _loop;
                    case "continue":
                        continue
                }
            }
        }
        l = null
    }

    function o(a, c) {
        __p && __p();
        c = c && c.priority || m.DEFAULT;
        i || (i = b("requestAnimationFramePolyfill")(function(a) {
            i = null, n(a)
        }));
        !j && c > m.DEFAULT && (j = b("setTimeoutAcrossTransitions")(b("TimeSlice").guard(function() {
            j = null, n(b("performanceNow")())
        }, "requestAnimationFrame priorityRAFCallback setTimeout", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        }), h));
        a = b("TimeSlice").guard(a, "requestAnimationFrame", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        a.priority = c;
        a.deleted && b("ErrorUtils").applyWithGuard(function() {
            throw new Error("Scheduling a deleted callback")
        });
        c = b("requestAnimationFramePolyfill")(function() {});
        k[c] = a;
        return c
    }

    function p(a) {
        a = b("TimeSlice").guard(a, "requestAnimationFrame", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION
        });
        var c = b("requestAnimationFramePolyfill")(a);
        b("TimeSlice").registerForCancelling(g + c, a);
        return c
    }
    e.exports = function(a, c) {
        if (b("Env").gk_raf_flush) return o(a, c);
        else return p(a)
    };
    e.exports.Priorities = m;
    e.exports.cancelVirtualRAF = function(a) {
        if (b("Env").gk_raf_flush) {
            b("TimeSlice").cancel(k[a]);
            delete k[a];
            if (l) {
                a = l[a];
                a && (a.deleted = !0)
            }
        }
    }
}), null);
__d("requestAnimationFrame", ["TimerStorage", "TimeSlice", "requestAnimationFrameAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, c) {
        var d;

        function e(c) {
            b("TimerStorage").unset(b("TimerStorage").ANIMATION_FRAME, d), a(c)
        }
        b("TimeSlice").copyGuardForWrapper(a, e);
        e.__originalCallback = a;
        d = b("requestAnimationFrameAcrossTransitions")(e, c);
        b("TimerStorage").set(b("TimerStorage").ANIMATION_FRAME, d);
        return d
    }
    e.exports = a
}), null);
__d("Promise", ["TimeSlice", "ifRequired", "setImmediateAcrossTransitions", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g() {}
    var h = null,
        i = {};

    function j(a) {
        try {
            return a.then
        } catch (a) {
            h = a;
            return i
        }
    }

    function k(a, b) {
        try {
            return a(b)
        } catch (a) {
            h = a;
            return i
        }
    }

    function l(a, b, c) {
        try {
            a(b, c)
        } catch (a) {
            h = a;
            return i
        }
    }

    function m(a) {
        __p && __p();
        if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
        if (typeof a !== "function") throw new TypeError("not a function");
        this._state = 0;
        this._value = null;
        this._deferreds = [];
        if (a === g) return;
        t(a, this)
    }
    m._noop = g;
    m.prototype.then = function(a, b) {
        if (this.constructor !== m) return n(this, a, b);
        var c = new m(g);
        o(this, new s(a, b, c));
        return c
    };

    function n(a, b, c) {
        return new a.constructor(function(d, e) {
            var f = new m(g);
            f.then(d, e);
            o(a, new s(b, c, f))
        })
    }

    function o(a, c) {
        __p && __p();
        while (a._state === 3) a = a._value;
        if (a._state === 0) {
            a._deferreds.push(c);
            return
        }
        b("setImmediateAcrossTransitions")(function() {
            var b = a._state === 1 ? c.onFulfilled : c.onRejected;
            if (b === null) {
                c.continuation(function() {});
                a._state === 1 ? p(c.promise, a._value) : q(c.promise, a._value);
                return
            }
            b = k(c.continuation.bind(null, b), a._value);
            b === i ? q(c.promise, h) : p(c.promise, b)
        })
    }

    function p(a, b) {
        __p && __p();
        if (b === a) return q(a, new TypeError("A promise cannot be resolved with itself."));
        if (b && (typeof b === "object" || typeof b === "function")) {
            var c = j(b);
            if (c === i) return q(a, h);
            if (c === a.then && b instanceof m) {
                a._state = 3;
                a._value = b;
                r(a);
                return
            } else if (typeof c === "function") {
                t(c.bind(b), a);
                return
            }
        }
        a._state = 1;
        a._value = b;
        r(a)
    }

    function q(a, b) {
        a._state = 2, a._value = b, r(a)
    }

    function r(a) {
        for (var b = 0; b < a._deferreds.length; b++) o(a, a._deferreds[b]);
        a._deferreds = null
    }

    function s(a, c, d) {
        var e = this;
        this.onFulfilled = typeof a === "function" ? a : null;
        this.onRejected = typeof c === "function" ? c : null;
        this.continuation = b("TimeSlice").getGuardedContinuation("Promise Handler");
        b("ifRequired")("JSTracing", function(a) {
            e.continuation = a.wrap(e.continuation)
        });
        this.promise = d
    }

    function t(a, b) {
        __p && __p();
        var c = !1;
        a = l(a, function(a) {
            if (c) return;
            c = !0;
            p(b, a)
        }, function(a) {
            if (c) return;
            c = !0;
            q(b, a)
        });
        !c && a === i && (c = !0, q(b, h))
    }
    m.prototype.done = function(a, c) {
        var d = new Error("Promise.done"),
            e = arguments.length ? this.then.apply(this, arguments) : this;
        e.then(null, function(a) {
            b("setTimeoutAcrossTransitions")(function() {
                if (a instanceof Error) throw a;
                else {
                    d.message = "" + a;
                    throw d
                }
            }, 0)
        })
    };
    var u = A(!0),
        v = A(!1),
        w = A(null),
        x = A(void 0),
        y = A(0),
        z = A("");

    function A(a) {
        var b = new m(m._noop);
        b._state = 1;
        b._value = a;
        return b
    }
    m.resolve = function(a) {
        __p && __p();
        if (a instanceof m) return a;
        if (a === null) return w;
        if (a === void 0) return x;
        if (a === !0) return u;
        if (a === !1) return v;
        if (a === 0) return y;
        if (a === "") return z;
        if (typeof a === "object" || typeof a === "function") try {
            var b = a.then;
            if (typeof b === "function") return new m(b.bind(a))
        } catch (a) {
            return new m(function(b, c) {
                c(a)
            })
        }
        return A(a)
    };
    m.all = function(a) {
        __p && __p();
        Array.isArray(a) || (a = [new m(function() {
            throw new TypeError("Promise.all must be passed an iterable.")
        })]);
        var b = Array.prototype.slice.call(a);
        return new m(function(a, c) {
            __p && __p();
            if (b.length === 0) return a([]);
            var d = b.length;

            function e(f, g) {
                __p && __p();
                if (g && (typeof g === "object" || typeof g === "function"))
                    if (g instanceof m && g.then === m.prototype.then) {
                        while (g._state === 3) g = g._value;
                        if (g._state === 1) return e(f, g._value);
                        g._state === 2 && c(g._value);
                        g.then(function(a) {
                            e(f, a)
                        }, c);
                        return
                    } else {
                        var h = g.then;
                        if (typeof h === "function") {
                            h = new m(h.bind(g));
                            h.then(function(a) {
                                e(f, a)
                            }, c);
                            return
                        }
                    } b[f] = g;
                --d === 0 && a(b)
            }
            for (var f = 0; f < b.length; f++) e(f, b[f])
        })
    };
    m.reject = function(a) {
        return new m(function(b, c) {
            c(a)
        })
    };
    m.race = function(a) {
        return new m(function(b, c) {
            a.forEach(function(a) {
                m.resolve(a).then(b, c)
            })
        })
    };
    m.prototype["catch"] = function(a) {
        return this.then(null, a)
    };
    m.prototype["finally"] = function(a) {
        return this.then(function(b) {
            return m.resolve(a()).then(function() {
                return b
            })
        }, function(b) {
            return m.resolve(a()).then(function() {
                throw b
            })
        })
    };
    e.exports = m
}), null);
__d("promiseDone", ["TAAL", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, c, d) {
        var e = new Error("promiseDone"),
            f = arguments.length > 1 ? a.then(c, d) : a;
        f.then(null, function(a) {
            b("setTimeoutAcrossTransitions")(function() {
                if (a instanceof Error) throw a;
                else {
                    e.message = b("TAAL").blameToPreviousFile(a);
                    throw e
                }
            }, 0)
        })
    }
    e.exports = a
}), null);
__d("RequireDeferredReference", ["Promise", "Bootloader", "ifRequired", "promiseDone", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = function(a) {
        return a
    };
    a = function() {
        __p && __p();

        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.getModuleId = function() {
            var a = this.$1;
            return a
        };
        c.getModuleIdAsRef = function() {
            return this.$1
        };
        c.preload = function() {};
        c.getModuleIfRequired = function() {
            return b("ifRequired").call(null, this.$1, g)
        };
        c.load = function() {
            var a = this;
            return new(b("Promise"))(function(c) {
                b("requireWeak").call(null, a.getModuleId(), c)
            })
        };
        c.loadImmediately = function(a) {
            return b("Bootloader").loadModules.call(b("Bootloader"), [this.getModuleId()], a, "RequireDeferredReference.loadImmediately()")
        };
        c.onReady = function(a) {
            var c = !1;
            b("promiseDone")(this.load(), function() {
                c || a.apply(void 0, arguments)
            });
            return {
                remove: function() {
                    c = !0
                }
            }
        };
        return a
    }();
    e.exports = a
}), null);
__d("requireDeferred", ["RequireDeferredReference"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return new(b("RequireDeferredReference"))(a)
    }
    e.exports = a
}), null);
__d("setTimeout", ["requireCond", "cr:807042"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:807042")
}), null);
__d("BigPipe", ["ix", "Arbiter", "BigPipeExperiments", "BigPipeInstance", "BigPipePlugins", "Bootloader", "Env", "ErrorUtils", "FBLogger", "JSCC", "PageEvents", "PageletEventConstsJS", "PageletSet", "Run", "ServerJS", "TimeSlice", "UserTimingUtils", "$", "bx", "captureUsageSnapshot", "clearTimeout", "fastDeepCopy", "ge", "gkx", "performanceAbsoluteNow", "qex", "requestAnimationFrame", "requestAnimationFrameAcrossTransitions", "requireDeferred", "setTimeout", "__getTotalFactories", "__getCompileTime", "__getFactoryTime"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = document.documentMode || +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1],
        i = console.timeStamp && window.location.search.indexOf("pagelet_ts=1") > 0;

    function j(a, c) {
        b("UserTimingUtils").measureStart(a + " " + c)
    }

    function k(a, c, d) {
        b("UserTimingUtils").measureEnd("\u26cf " + a + " [" + c + "][phase " + d + "]", a + " " + c)
    }

    function l(a, c) {
        if (a)
            for (var d = 0; d < a.length; d++) b("ErrorUtils").applyWithGuard(new Function(a[d]), c)
    }
    var m = 1;
    a = function() {
        "use strict";
        __p && __p();

        function a(c) {
            __p && __p();
            var d = this;
            this._onDisplayDone = function(a) {
                d.arbiter.registerCallback(a, ["display_done"])
            };
            Object.assign(this, {
                arbiter: b("Arbiter"),
                rootNodeID: "content",
                lid: null,
                isAjax: !1,
                domContentCallback: b("Run").__domContentCallback,
                onloadCallback: b("Run").__onloadCallback,
                domContentEvt: b("PageEvents").BIGPIPE_DOMREADY,
                onloadEvt: b("PageEvents").BIGPIPE_ONLOAD,
                forceFinish: !1,
                config: {},
                _currentPhase: 0,
                _lastPhaseOfLastResponse: -1,
                _lastPhaseBeforeLastResponse: -1,
                _livePagelets: {},
                _phases: {},
                _orderedPhases: [],
                _maxPhase: 0,
                _displayDoneFired: !1,
                _displayDone: !1,
                _awaitingLIDEventQueue: []
            }, c);
            this.config || (this.config = {});
            this.automatic ? this._relevant_instance = b("BigPipeInstance").getCurrentInstance() : b("BigPipeInstance").setCurrentInstance_DO_NOT_USE(this);
            this._serverJS = new(b("ServerJS"))();
            this._informEventExternal(a.Events.init, {
                arbiter: this.arbiter
            }, b("Arbiter"));
            this._displayDoneCallback = this.arbiter.registerCallback(function() {
                var c = b("captureUsageSnapshot")();
                d._informEventExternal(a.Events.displayed, {
                    rid: d.rid,
                    ajax: d.isAjax,
                    usageSnapshot: c
                })
            }, ["display_done"]);
            this.arbiter.registerCallback(this.domContentCallback, ["pagelet_displayed_all"]);
            this._beginPhase(0);
            this.arbiter.registerCallback(this.onloadCallback, ["bigpipe_e2e_reported"]);
            this._loadedCallback = this.arbiter.registerCallback(function() {
                d._informEventExternal(a.Events.loaded, {
                    rid: d.rid,
                    ajax: d.isAjax
                }), d.arbiter.inform("bigpipe_e2e_reported", !0)
            }, ["pagelet_displayed_all"]);
            this.arbiter.registerCallback(function() {
                return d._serverJS.cleanup(b("TimeSlice"))
            }, [this.onloadEvt, "bigpipe_e2e_reported"])
        }
        var c = a.prototype;
        c._beginPhase = function(a) {
            var c = this._getOrCreatePhase(a);
            c.begun = !0;
            this._informEventExternal("phase_begin", {
                phase: a
            });
            this.arbiter.inform("phase_begin_" + a, !0, "state");
            this._displayDone && !this.isAjax && b("Bootloader").notifyDisplayDone()
        };
        c._getOrCreatePhase = function(a) {
            __p && __p();
            if (this._phases[a]) return this._phases[a];
            var b = {
                pagelets: [],
                begun: !1,
                complete: !1
            };
            this._phases[a] = b;
            var c = 0;
            while (c < this._orderedPhases.length) {
                if (a < this._orderedPhases[c]) break;
                c++
            }
            this._orderedPhases.splice(c, 0, a);
            return b
        };
        c._tryRenderingNextPhase = function() {
            __p && __p();
            var a = this._phases[this._currentPhase];
            if (a && a.begun && !a.complete) return;
            for (var a = this._orderedPhases, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                var e = this._phases[d];
                if (e.begun)
                    if (e.complete) continue;
                    else return;
                else {
                    this._currentPhase = d;
                    this._beginPhase(d);
                    return
                }
            }
        };
        c._displayPageletHandler = function(a) {
            this.displayCallback ? this.displayCallback(this._displayPagelet.bind(this, a)) : this._displayPagelet(a)
        };
        c._displayPagelet = function(a) {
            __p && __p();
            j(a.id, "display");
            a.displayStarted = !0;
            this._informPageletEvent(b("PageletEventConstsJS").DISPLAY_START, a);
            var c = this._getPagelet(a),
                d = [],
                e = {};
            for (var f in a.content) {
                var g = a.content[f];
                a.append && (f = this._getPageletRootID(a));
                var h = b("ge")(f);
                if (!h) {
                    var i = "Root element %s is missing for pagelet %s";
                    continue
                }
                f === c.id && c.setRoot(h);
                if (g) {
                    if (a.append) p(h, g, d);
                    else if (g.nodeType) h.innerHTML = "", p(h, g, d);
                    else {
                        i = n(g);
                        h.innerHTML = i;
                        e[f] = i;
                        d.push(h)
                    }
                    b("BigPipeExperiments").enable_bigpipe_plugins && b("BigPipePlugins").runPluginOnPagelet(h)
                }
                g = h.getAttribute("data-referrer");
                g || h.setAttribute("data-referrer", f)
            }
            i = null;
            if (a.static_templates) {
                g = b("ge")("static_templates");
                g && (i = n(a.static_templates), a.replace_static_templates_if_exists && (i = q(g, i, d)), p(g, i, d))
            }
            this._informPageletDisplayDetails(a.id, a.jsmods, e, i);
            a.displayed = !0;
            if (a.jsmods) {
                h = this._serverJS.handlePartial(a.jsmods, {
                    pagelet: a.id,
                    bigPipeContext: {
                        onDisplayDone: this._onDisplayDone
                    }
                });
                c.addDestructor(h.cancel.bind(h))
            }
            var l = [];
            d.forEach(function(a) {
                if (typeof a.getElementsByTagName === "function") {
                    a = a.getElementsByTagName("img");
                    for (var b = 0; b < a.length; b++) l.push(a[b].src)
                }
            });
            l.length > 0 && this._informEventExternal("images_displayed", {
                pagelet: a.id,
                timeslice: b("TimeSlice").getContext() ? b("TimeSlice").getContext().contextID : null,
                images: l
            });
            if (b("gkx")("676920")) {
                var m = b("performanceAbsoluteNow")();
                b("requireDeferred")("VisualCompletionGating").onReady(function(b) {
                    b && b.addElements(a.id, d, m)
                })
            }
            this._informPageletEvent(b("PageletEventConstsJS").DISPLAY_END, a);
            k(a.id, "display", a.phase);
            this.arbiter.inform(a.id + "_displayed", !0, "state")
        };
        c._onPhaseDisplayEnd = function(c) {
            __p && __p();
            var d = this,
                e = this._getOrCreatePhase(c);
            e.complete = !0;
            if (c === this._ttiPhase) {
                e = {};
                var f = b("captureUsageSnapshot")();
                this.isAjax || (e.cjs_factory_count_tti = b("__getTotalFactories")(), e.cjs_compile_time_tti = b("__getCompileTime")(), e.cjs_factory_time_tti = b("__getFactoryTime")());
                this._informEventExternal(a.Events.tti, {
                    phase: this._ttiPhase,
                    rid: this.rid,
                    ajax: this.isAjax,
                    metrics: e,
                    usageSnapshot: f
                });
                this.arbiter.inform("tti_pagelet_displayed", !0, "state")
            }
            e = b("gkx")("676921");
            var g = !1;
            this._isRelevant() && (c === this._lastPhaseBeforeLastResponse && (g = e, this._fireDisplayDone(function() {
                g && d._nextPhase()
            })), c === this._lastPhaseOfLastResponse && (this._displayDoneFired || (g = e, this._fireDisplayDone(function() {})), this.arbiter.inform("pagelet_displayed_all", !0, "state")));
            !g && c !== this._lastPhaseOfLastResponse && this._nextPhase()
        };
        c._nextPhase = function() {
            this.config.flush_pagelets_asap ? h <= 8 ? b("setTimeout")(this._tryRenderingNextPhase.bind(this), 20) : this._tryRenderingNextPhase() : (this._currentPhase++, h <= 8 ? b("setTimeout")(this._beginPhase.bind(this, this._currentPhase), 20) : this._beginPhase(this._currentPhase))
        };
        c._fireDisplayDone = function(a) {
            var c = this;
            this._displayDoneFired = !0;
            b("Env").gk_raf_flush ? b("requestAnimationFrame")(function() {
                c.arbiter.inform("display_done", !0), c._displayDone = !0, a()
            }, {
                priority: b("requestAnimationFrameAcrossTransitions").Priorities.DISPLAY_DONE_LOGGING
            }) : (this.arbiter.inform("display_done", !0), this._displayDone = !0, a());
            this.lid && k("display_done", this.lid, "all")
        };
        c._downloadJsForPagelet = function(a) {
            __p && __p();
            this._informPageletEvent(b("PageletEventConstsJS").JS_START, a), b("Bootloader").loadResources(a.allResources || [], function() {
                var c = this;
                this._informPageletEvent(b("PageletEventConstsJS").JS_END, a);
                a.requires = a.requires || [];
                (!this.isAjax || a.phase >= 1) && a.requires.push("uipage_onload");
                var d = function() {
                        c._informPageletEvent(b("PageletEventConstsJS").ONLOAD_START, a), c._isRelevantPagelet(a) && l(a.onload), c._informPageletEvent(b("PageletEventConstsJS").ONLOAD_END, a), c.arbiter.inform("pagelet_onload", !0), a.provides && c.arbiter.inform(a.provides, !0, "state")
                    },
                    e = function() {
                        c._isRelevantPagelet(a) && l(a.onafterload)
                    };
                this.arbiter.registerCallback(d, a.requires);
                this.arbiter.registerCallback(e, [this.onloadEvt])
            }.bind(this), a.id)
        };
        c._getPagelet = function(a) {
            a = this._getPageletRootID(a);
            return b("PageletSet").getPagelet(a)
        };
        c._getPageletRootID = function(a) {
            return a.append || Object.keys(a.content)[0] || null
        };
        c._isRelevant = function() {
            var a = b("BigPipeInstance").getCurrentInstance();
            return this == a || this.automatic && this._relevant_instance == a || this.jsNonBlock || this.forceFinish || a && a.allowIrrelevantRequests
        };
        c._isRelevantPagelet = function(a) {
            if (!this._isRelevant()) return !1;
            a = this._getPageletRootID(a);
            return !!this._livePagelets[a]
        };
        c._informEventExternal = function(a, c, d) {
            c = c || {}, d = d || this.arbiter, c.ts = b("performanceAbsoluteNow")(), i && (console.timeStamp && console.timeStamp(a + " " + (Object.prototype.hasOwnProperty.call(c, "arbiter") ? JSON.stringify(babelHelpers["extends"]({}, c, {
                arbiter: null
            })) : JSON.stringify(c)))), this.lid === null ? this._awaitingLIDEventQueue.push([d, a, c]) : (c.lid = this.lid, d.inform(a, c, "persistent"))
        };
        c._informPageletEvent = function(a, b) {
            a = {
                event: a,
                id: b.id
            };
            b.phase && (a.phase = b.phase);
            b.categories && (a.categories = b.categories);
            b.allResources && (a.allResources = b.allResources);
            b.displayResources && (a.displayResources = b.displayResources);
            this._informEventExternal("pagelet_event", a)
        };
        c._informPageletDisplayDetails = function(a, c, d, e) {
            if (this.config.dispatch_pagelet_replayable_actions) try {
                this._informEventExternal("pagelet_performing_replayable_actions", {
                    id: a,
                    jsmods: b("fastDeepCopy")(c),
                    contentMap: d,
                    staticTemplates: e
                })
            } catch (a) {
                b("FBLogger")("bigpipe_pagelet_replay").catching(a).warn("failed at _informPageletDisplayDetails"), this._informEventExternal("pagelet_performing_replayable_actions_failed", {})
            }
        };
        a.getCurrentInstance = function() {
            return b("BigPipeInstance").getCurrentInstance()
        };
        return a
    }();
    Object.assign(a.prototype, {
        beforePageletArrive: function(a) {
            var c = this;
            b("TimeSlice").guard(function() {
                return c._informPageletEvent(b("PageletEventConstsJS").ARRIVE_START, {
                    id: a
                })
            }, "beforePageletArrive " + a, {
                root: !0
            })()
        },
        setPageID: function(a) {
            this.lid = a, this._awaitingLIDEventQueue.forEach(function(b) {
                var c = b[0],
                    d = b[1];
                b = b[2];
                b.lid = a;
                c.inform(d, b, "persistent")
            }), this._awaitingLIDEventQueue = [], this.lid && j("display_done", this.lid)
        },
        onPageletArrive: b("ErrorUtils").guard(function(a) {
            __p && __p();
            var c = this;
            this._informPageletEvent(b("PageletEventConstsJS").ARRIVE_END, a);
            b("bx").add(a.bxData);
            b("gkx").add(a.gkxData);
            g.add(a.ixData);
            b("qex").add(a.qexData);
            b("Bootloader").setResourceMap(a.resource_map || {});
            a.bootloadable && b("Bootloader").enableBootload(a.bootloadable);
            a.content = a.content || {};
            var d = a.phase;
            if (a.all_phases)
                for (var e = a.all_phases, f = Array.isArray(e), h = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var i;
                    if (f) {
                        if (h >= e.length) break;
                        i = e[h++]
                    } else {
                        h = e.next();
                        if (h.done) break;
                        i = h.value
                    }
                    i = i;
                    this._getOrCreatePhase(i)
                }
            i = this._getOrCreatePhase(d);
            i.pagelets.push(a.id);
            this._maxPhase = Math.max(d, this._maxPhase);
            a.last_in_phase && this.arbiter.registerCallback(function() {
                return c._onPhaseDisplayEnd(d)
            }, i.pagelets.map(function(a) {
                return a + "_displayed"
            }).concat(["phase_begin_" + d]));
            h = this._getPageletRootID(a);
            var j = b("PageletSet").getOrCreatePagelet(h);
            a.last_pagelet && (this._lastPhaseBeforeLastResponse = this._maxPhase);
            a.the_end && (this._lastPhaseOfLastResponse = d);
            a.tti_phase !== void 0 && (this._ttiPhase = a.tti_phase);
            this._livePagelets[j.id] = !0;
            j.addDestructor(function() {
                delete c._livePagelets[j.id]
            });
            if (a.jscc_map) {
                f = b("JSCC").parse(a.jscc_map);
                e = b("JSCC").init(f);
                j.addDestructor(e)
            }
            var k, l = [];
            i = !a.the_end || this._displayDone || !b("gkx")("676922");
            if (a.jsmods && i) {
                h = a.jsmods.define;
                f = a.jsmods.instances;
                e = a.jsmods.markup;
                var n = a.jsmods.pre_display_requires;
                delete a.jsmods.define;
                delete a.jsmods.instances;
                delete a.jsmods.markup;
                delete a.jsmods.pre_display_requires;
                var o = 19e3;
                o = function() {
                    if (a.displayStarted) {
                        b("FBLogger")("BigPipe").warn("registerToBlockDisplayUntilDone_DONOTUSE called after pagelet %s was displayed. This is a no-op.", a.id);
                        return function() {}
                    }
                    var d, e, f = m + "_preDisplayEvent";
                    m++;
                    k ? c.arbiter.registerCallback(k, [f]) : l.push(f);
                    return b("TimeSlice").guard(function() {
                        e = !0, b("clearTimeout")(d), c.arbiter.inform(f, !0, "state")
                    }, "BigPipeDisplayBlockingEvent " + f, {
                        propagationType: b("TimeSlice").PropagationType.EXECUTION
                    })
                };
                this._informPageletDisplayDetails(a.id, {
                    define: h,
                    instances: f,
                    markup: e,
                    pre_display_requires: n
                }, {});
                this._serverJS.handlePartial({
                    define: h,
                    instances: f,
                    markup: e,
                    pre_display_requires: n
                }, {
                    pagelet: a.id,
                    bigPipeContext: {
                        onDisplayDone: this._onDisplayDone,
                        registerToBlockDisplayUntilDone_DONOTUSE: o
                    }
                })
            }
            this._informPageletEvent(b("PageletEventConstsJS").SETUP, a);
            if (a.display_out_of_phase === "asap") l = l.concat(["first_response_displayed", a.id + "_css_end"]);
            else if (a.display_out_of_phase === "after_tti") {
                var p = a.id + "_greedy_render";
                l = l.concat(["first_response_displayed", a.id + "_css_end", p]);
                var q = !1;
                h = function() {
                    if (q) return;
                    c.arbiter.inform(p, !0, "state")
                };
                this.arbiter.registerCallback(h, ["tti_pagelet_displayed"]);
                this.arbiter.registerCallback(h, ["phase_begin_" + d])
            } else l = l.concat(["phase_begin_" + a.phase, a.id + "_css_end"]);
            (a.display_dependency || []).forEach(function(a) {
                return l.push(a + "_displayed")
            });
            if (a.display_group) {
                f = document.body.getElementsByClassName("pagelet-group");
                for (var e = 0; e < f.length; e++) {
                    n = f[e];
                    if (n.id === a.id) break;
                    n.getAttribute("data-display-group") === a.display_group && l.push(n.id + "_displayed")
                }
            }
            k = this.arbiter.registerCallback(function() {
                a.display_delay_ms === void 0 ? c._displayPageletHandler(a) : b("setTimeout")(function() {
                    return c._displayPageletHandler(a)
                }, a.display_delay_ms)
            }, l);
            var r = !1;
            o = function() {
                if (r) return;
                r = !0;
                c._informPageletEvent(b("PageletEventConstsJS").CSS_START, a);
                var d = a.displayResources || [];
                b("Bootloader").loadResources(d, function() {
                    this._informPageletEvent(b("PageletEventConstsJS").CSS_END, a), this.arbiter.inform(a.id + "_css_end", !0, "state")
                }.bind(c), a.id)
            };
            this.config.flush_pagelets_asap && i ? o() : this.arbiter.registerCallback(o, ["phase_begin_" + d]);
            this.arbiter.registerCallback(this._loadedCallback, ["pagelet_onload"]);
            h = [a.id + "_displayed"];
            this.jsNonBlock || h.push(this.domContentEvt);
            this.arbiter.registerCallback(this._downloadJsForPagelet.bind(this, a), h)
        }, "BigPipe#onPageletArrive")
    });
    a.Events = b("BigPipeInstance").Events;

    function n(a) {
        __p && __p();
        if (!a || typeof a === "string") return a;
        if (a.container_id) {
            var c = b("$")(a.container_id);
            a = o(c) || "";
            c.parentNode.removeChild(c);
            return a
        }
        a.nodeType;
        return null
    }

    function o(a) {
        if (!a.firstChild) return null;
        if (a.firstChild.nodeType !== 8) return null;
        a = a.firstChild.nodeValue;
        a = a.substring(1, a.length - 1);
        return a.replace(/\\([\s\S]|$)/g, "$1")
    }

    function p(a, b, c) {
        b = r(b);
        for (var d = 0; d < b.childNodes.length; d++) c.push(b.childNodes[d]);
        a.appendChild(b)
    }

    function q(a, b, c) {
        b = r(b);
        var d = document.createDocumentFragment(),
            e = b.childNodes.length;
        for (var f = 0; f < e; f++) {
            var g = b.firstChild,
                h = g.id && document.getElementById(g.id),
                i = h && h.parentNode;
            i === a ? (i.replaceChild(g, h), c.push(g)) : d.appendChild(g)
        }
        return d
    }

    function r(a) {
        __p && __p();
        if (a.nodeType) return a;
        var b = document.createDocumentFragment();
        a = n(a);
        if (a) {
            var c = document.createElement("div");
            c.innerHTML = a;
            while (c.firstChild) b.appendChild(c.firstChild)
        }
        return b
    }
    e.exports = a
}), null);
__d("MutationObserver", [], (function(a, b, c, d, e, f) {
    __p && __p();
    b = function() {
        "use strict";

        function a(a) {}
        var b = a.prototype;
        b.observe = function(a, b) {};
        b.disconnect = function() {};
        b.takeRecords = function() {
            return null
        };
        return a
    }();
    c = a.MutationObserver || a.WebKitMutationObserver || b;
    e.exports = c
}), null);
__d("PageDOMMutationObserver", ["ExecutionEnvironment", "MutationObserver"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = new(b("MutationObserver"))(function() {}),
        h = !1,
        i = {
            tryStart: function() {
                __p && __p();
                var a = typeof g.takeRecords === "function";
                if (!b("ExecutionEnvironment").canUseDOM || !a) {
                    i.tryStart = function() {};
                    i.consumePendingDOMMutations = function() {
                        return 0
                    };
                    return
                }
                if (!window.Env || !document.body || window._splashBody) return;
                i.tryStart = function() {};
                if (!window.Env.dom_mutation_flag) return;
                h = !0;
                g.observe(document.body, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })
            },
            consumePendingDOMMutations: function() {
                var a = g.takeRecords();
                return a != null ? a.length : 0
            },
            isSupported: function() {
                return h
            }
        };
    e.exports = i
}), null);
__d("ArtilleryJSPointTypes", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        ASYNC_REQUEST_SENT: 1,
        ASYNC_RESPONSE_RECEIVED: 2,
        TRACE_STARTED: 3,
        TRACE_ENDED: 4
    })
}), null);
/**
 * License: https://www.facebook.com/legal/license/09P_rcHKL4D/
 */
__d("Alea", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function g() {
        __p && __p();
        var a = 4022871197,
            b = function(b) {
                __p && __p();
                b = b.toString();
                for (var c = 0; c < b.length; c++) {
                    a += b.charCodeAt(c);
                    var d = .02519603282416938 * a;
                    a = d >>> 0;
                    d -= a;
                    d *= a;
                    a = d >>> 0;
                    d -= a;
                    a += d * 4294967296
                }
                return (a >>> 0) * 23283064365386963e-26
            };
        b.version = "Mash 0.9";
        return b
    }

    function a() {
        __p && __p();
        var a = 0,
            b = 0,
            c = 0,
            d = 1;
        for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
        var i = f.length > 0 ? f : [new Date()],
            j = new g();
        a = j(" ");
        b = j(" ");
        c = j(" ");
        for (var k = 0; k < i.length; k++) a -= j(i[k]), a < 0 && (a += 1), b -= j(i[k]), b < 0 && (b += 1), c -= j(i[k]), c < 0 && (c += 1);
        j = null;
        var l = function() {
            var e = 2091639 * a + d * 23283064365386963e-26;
            a = b;
            b = c;
            c = e - (d = e | 0);
            return c
        };
        l.version = "Alea 0.9";
        l.args = i;
        return l
    }
    e.exports = a
}), null);
__d("ArtilleryTraceIDUtils", ["Alea", "FBLogger", "ServerNonce"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        h = b("Alea")(b("ServerNonce").ServerNonce),
        i = function() {
            var a = 0,
                b = 0,
                c = "";
            for (var d = 10; d >= 0; d--) a < 6 && (b = Math.floor(2147483648 * h()), a = 32), d === 0 && (b &= 7), c = g.charAt(b & 63) + c, b >>= 6, a -= 6;
            return c
        };
    a = {
        newTraceId: function() {
            var a;
            for (var c = 3; c > 0; c--) {
                a = i();
                if (a != this.getDummyId()) return a
            }
            b("FBLogger")("FIXME").mustfix("failed to generate valid Fbtrace id");
            return this.getDummyId()
        },
        newObjectId: function() {
            return this.newTraceId()
        },
        getDummyId: function() {
            return "AAAAAAAAAAA"
        },
        traceIdToBucket: function(a) {
            a = a.charAt(a.length - 1);
            return g.indexOf(a) % 32
        }
    };
    e.exports = a
}), null);
__d("ArtilleryAsyncRequestTracingAnnotator", ["FBLogger", "IntervalTrackingBoundedBuffer", "ResourceTimingsStore", "ResourceTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [1e3],
        h = new(b("IntervalTrackingBoundedBuffer"))(),
        i = "FB-ART-INFO",
        j = new Map();

    function k(a, b) {
        return b != null && b.artillery_join_data != null ? {
            uid: a,
            ids_for_timings: b.artillery_join_data
        } : null
    }
    a = {
        startTracingWindow: function(a, b, c) {
            c === void 0 && (c = null);
            var d = h.open();
            c = c || g;
            j.set(a, {
                trace_id: a,
                interaction_name: b,
                tracing_levels: c
            });
            return {
                finishTracingWindow: function() {
                    j["delete"](a);
                    return d.close()
                }
            }
        },
        registerAsyncRequest: function(a, c) {
            if (j.size === 0) return function() {};
            else {
                var d = JSON.stringify(Array.from(j.values()));
                a.setRequestHeader(i, d);
                return function(a) {
                    a = k(c, a);
                    a != null ? h.pushElement(a) : (b("FBLogger")("ArtilleryAsyncRequestTracingAnnotator").debug("expected a payload back in the response from the server containing trace information, but nothing arrived."), b("ResourceTimingsStore").annotate(b("ResourceTypes").XHR, c).addStringAnnotation("join_error", "join_data_expected_but_not_found"))
                }
            }
        },
        __active: function() {
            throw new Error("__active should only be available in __DEV__")
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionExtraSaver", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        EXAMPLE_COMPONENT_SAVER: "example_component_saver",
        ADS_WAIT_TIME_SAVER: "ads_wait_time_saver",
        ADS_FLUX_PROFILER_SAVER: "ads_flux_profiler_saver",
        TIMESLICE_EXECUTION_SAVER: "timeslice_execution_saver",
        INTERACTION_ASYNC_REQUEST_JOIN_DATA: "interaction_async_request_join_data",
        RESOURCES_SAVER: "resources_saver",
        USER_TIMING_SAVER: "user_timing_saver"
    })
}), null);
__d("InteractionAsyncRequestJoinDataSource", ["ArtilleryAsyncRequestTracingAnnotator", "FBLogger", "TimeSliceInteractionExtraSaver"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = {
        registerInteraction: function(a) {
            __p && __p();
            a.countDown();
            var c = a.traceID,
                d = a.name;
            if (c == null) {
                b("FBLogger")("InteractionAsyncRequestJoinDataSource").mustfix("got a null trace_id for interaction " + d + ". Typically this indicates that only lite tracing was on, which this hook does not support");
                return
            }
            var e = b("ArtilleryAsyncRequestTracingAnnotator").startTracingWindow(c, d);
            a.registerOnBeforeFinish(function(a) {
                var c = e.finishTracingWindow();
                a.recordWithExtraSaver(b("TimeSliceInteractionExtraSaver").INTERACTION_ASYNC_REQUEST_JOIN_DATA, "entries", c)
            });
            a.registerOnCleanup(function() {
                e.finishTracingWindow()
            })
        }
    };
    e.exports = a
}), null);
__d("Random", ["Alea", "ServerNonce"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 4294967296;
    c = b("ServerNonce").ServerNonce;
    var h = b("Alea")(c),
        i = {
            random: function() {
                __p && __p();
                var b = a;
                b = b.Uint32Array;
                var c = a.crypto || a.msCrypto;
                try {
                    if (b != null && (c == null ? void 0 : c.getRandomValues) != null) {
                        b = new b(1);
                        c.getRandomValues(b);
                        return b[0] / g
                    }
                } catch (a) {}
                return h()
            },
            uint32: function() {
                return Math.floor(this.random() * g)
            },
            coinflip: function(a) {
                if (a === 0) return !1;
                return a <= 1 ? !0 : i.random() * a <= 1
            }
        };
    e.exports = i
}), null);
__d("TSIAdsReliabilityHook", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        callbacks: [],
        register: function(a) {
            g.callbacks.push(a)
        },
        event: function(a, b, c) {
            g.callbacks.forEach(function(d) {
                return d(a, b, c)
            })
        }
    };
    e.exports = g
}), null);
__d("TimeSliceExecutionLogger", ["ExecutionContextObservers", "IntervalTrackingBoundedBuffer", "OnDemandExecutionContextObserver", "TimeSlice", "TimingAnnotations", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 1e4,
        h = {
            BEGIN: "b",
            END: "e"
        },
        i = new(b("TimingAnnotations"))(),
        j;
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
            return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$TimeSliceExecutionLogger1 = new(b("IntervalTrackingBoundedBuffer"))(g), c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.onNewContextCreatedWhileEnabled = function(a, c, d) {
            if (a) return b("performanceAbsoluteNow")();
            else return null
        };
        d.onBeforeContextStartedWhileEnabled = function(a, b, c) {
            c = {
                type: h.BEGIN,
                ts: a.absBeginTimeMs
            };
            b !== null && (c.creation = b);
            this.$TimeSliceExecutionLogger1.pushElement(c);
            a = j;
            j = null;
            return a
        };
        d.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
            return c
        };
        d.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
            b = a.absEndTimeMs;
            d = {
                type: h.END,
                ts: b,
                name: a.name,
                id: a.contextID
            };
            j && (d.annotations = j.prepareToSend());
            this.$TimeSliceExecutionLogger1.pushElement(d);
            j = c
        };
        d.annotateCurrentExecution = function() {
            if (!this.isEnabled()) return i;
            j == null && (j = new(b("TimingAnnotations"))());
            return j
        };
        d.getBeforeID = function() {
            return b("ExecutionContextObservers").beforeIDs.TIMESLICE_EXECUTION_LOGGER
        };
        d.getAfterID = function() {
            return b("ExecutionContextObservers").afterIDs.TIMESLICE_EXECUTION_LOGGER
        };
        d.getBuffer = function() {
            return this.$TimeSliceExecutionLogger1
        };
        return c
    }(b("OnDemandExecutionContextObserver"));
    c = new a();
    b("TimeSlice").registerExecutionContextObserver(c);
    e.exports = c
}), null);
__d("TimeSliceExecutionDataSource", ["TimeSliceExecutionLogger", "TimeSliceInteractionExtraSaver", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = {
        registerInteraction: function(a) {
            a.countDown();
            var c = b("performanceAbsoluteNow")(),
                d = b("TimeSliceExecutionLogger").getBuffer().open(),
                e = b("TimeSliceExecutionLogger").expressInterest();
            a.registerOnBeforeFinish(function(a) {
                e();
                var f = d.close(),
                    g = d.hasOverflown();
                a.recordWithExtraSaver(b("TimeSliceInteractionExtraSaver").TIMESLICE_EXECUTION_SAVER, "entries", {
                    startTime: c,
                    entries: f,
                    hasOverflown: g
                })
            });
            a.registerOnCleanup(function() {
                e(), d.close()
            })
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionBootloadForPost", ["Bootloader"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        b("Bootloader").loadModules(["Banzai", "BanzaiStream", "BanzaiODS", "ResourceTimingBootloaderHelper", "TimeSliceHelper", "SnappyCompressUtil", "PerfXSharedFields"], a, "TimeSliceInteractionBootloadForPost")
    }
    e.exports = a
}), null);
__d("TimeSliceInteractionReliability", ["ifRequired"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = "timeslice_interactions",
        h = !0,
        i = new Map();

    function j(a, b, c) {
        return b + ":" + c + ":" + a
    }

    function a(a, c, d) {
        a = j(a, c, d);
        var f = b("ifRequired")("BanzaiODS", function(a) {
            return a
        });
        if (!f) {
            c = i.get(a) || 0;
            i.set(a, c + 1)
        } else h && (i.forEach(function(a, b) {
            return f.bumpEntityKey(g, b, a)
        }), h = !1), f.bumpEntityKey(g, a, 1)
    }
    e.exports = {
        bumpLifecycleCounter: a
    }
}), null);
__d("compactArray", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = [];
        for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            d != null && b.push(d)
        }
        return b
    }
    e.exports = a
}), null);
__d("nullthrows", [], (function(a, b, c, d, e, f) {
    a = function(a, b) {
        b === void 0 && (b = "Got unexpected null or undefined");
        if (a != null) return a;
        a = new Error(b);
        a.framesToPop = 1;
        throw a
    };
    e.exports = a
}), null);
__d("performanceNavigationStart", ["performance"], (function(a, b, c, d, e, f) {
    __p && __p();
    if (b("performance").now)
        if (b("performance").timing && b("performance").timing.navigationStart) a = function() {
            return b("performance").timing.navigationStart
        };
        else {
            if (typeof window._cstart === "number") a = function() {
                return window._cstart
            };
            else {
                var g = Date.now();
                a = function() {
                    return g
                }
            }
            a.isPolyfilled = !0
        }
    else a = function() {
        return 0
    }, a.isPolyfilled = !0;
    e.exports = a
}), null);
__d("IdleCallbackImplementation", ["performanceNow", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = [],
        h = 0,
        i = 0,
        j = -1,
        k = !1,
        l = 1e3 / 60,
        m = 2;

    function n(a) {
        return a
    }

    function o(a) {
        return a
    }

    function c(b, c) {
        var d = i++;
        g[d] = b;
        q();
        if (c != null && c.timeout > 0) {
            var e = n(d);
            a.setTimeout(function() {
                return w(e)
            }, c.timeout)
        }
        return n(d)
    }

    function p(a) {
        a = o(a);
        g[a] = null
    }

    function q() {
        k || (k = !0, b("requestAnimationFramePolyfill")(function(a) {
            k = !1, s(b("performanceNow")() - a)
        }))
    }

    function r(a) {
        var b = l - m;
        if (a < b) return b - a;
        a = a % l;
        if (a > b || a < m) return 0;
        else return b - a
    }

    function s(a) {
        __p && __p();
        var c = b("performanceNow")();
        if (c > j) {
            a = r(a);
            if (a > 0) {
                c = c + a;
                v(c);
                j = c
            }
        }
        t() && q()
    }

    function t() {
        return h < g.length
    }

    function u() {
        while (t()) {
            var a = g[h];
            h++;
            if (a) return a
        }
        return null
    }

    function v(a) {
        var c;
        while (b("performanceNow")() < a && (c = u())) c(new x(a))
    }

    function w(a) {
        var b = o(a);
        b = g[b];
        b && (p(a), b(new x(null)))
    }
    var x = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this.didTimeout = a == null, this.$1 = a
        }
        var c = a.prototype;
        c.timeRemaining = function() {
            var a = this.$1;
            if (a != null) {
                var c = b("performanceNow")();
                if (c < a) return a - c
            }
            return 0
        };
        return a
    }();
    e.exports = {
        requestIdleCallback: c,
        cancelIdleCallback: p
    }
}), null);
__d("requestIdleCallbackAcrossTransitions", ["IdleCallbackImplementation", "TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.requestIdleCallback || b("IdleCallbackImplementation").requestIdleCallback,
        h = b("TimerStorage").IDLE_CALLBACK;
    e.exports = function(c, d) {
        c = b("TimeSlice").guard(c, "requestIdleCallback", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        d = g.call(a, c, d);
        var e = h + String(d);
        b("TimeSlice").registerForCancelling(e, c);
        return d
    }
}), null);
__d("TimeSliceInteraction", ["invariant", "Arbiter", "ArtilleryComponentSaverOptions", "ArtilleryJSPointTypes", "ArtilleryTraceIDUtils", "Bootloader", "CircularBuffer", "ErrorUtils", "FBLogger", "Heartbeat", "InteractionAsyncRequestJoinDataSource", "ProfilingCounters", "ProfilingCountersStore", "Random", "ResourceTimingsStore", "ResourceTypes", "TimeSlice", "TimeSliceExecutionDataSource", "TimeSliceInteractionBootloadForPost", "TimeSliceInteractionExtraSaver", "TimeSliceInteractionReliability", "TimeSliceInteractionSV", "TimingAnnotations", "TSIAdsReliabilityHook", "Visibility", "compactArray", "nullthrows", "performance", "performanceAbsoluteNow", "performanceNavigationStart", "requestIdleCallbackAcrossTransitions", "requireWeak"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    b("requireWeak")("AsyncProfiler", function(a) {
        h = a
    });
    var i;
    b("requireWeak")("ArtilleryUserTimingProfiler", function(a) {
        i = a
    });
    var j = {
        pointGroup: null,
        type: null,
        isPointOfInterest: null
    };
    d = 250;
    var k = new(b("CircularBuffer"))(d);
    new Map();
    f = 100;
    var l = new(b("CircularBuffer"))(f),
        m = new Map(),
        n = !1,
        o = null;
    b("Arbiter").subscribe("perf_nub_interaction_trace", function(a, b) {
        if (o) return;
        n = !0
    });
    var p = new(b("TimingAnnotations").EmptyTimingAnnotations)(),
        q = new(b("TimingAnnotations").EmptyTraceTimingAnnotations)(),
        r = "artillery_javascript_actions",
        s = "artillery_javascript_lite_actions";

    function c(a) {
        var b = "visibility_state_" + a,
            c = {
                isPointOfInterest: !0,
                pointGroup: "visibility_state_changes"
            };
        return function() {
            return z.informGlobally(b, c)
        }
    }
    b("Visibility") && b("Visibility").addListener && (b("Visibility").addListener(b("Visibility").HIDDEN, c("hidden")), b("Visibility").addListener(b("Visibility").VISIBLE, c("visible")));

    function t(a) {
        if (b("Visibility")) {
            var c = b("Visibility").isHidden() ? b("Visibility").HIDDEN : b("Visibility").VISIBLE;
            a.inform("visibility_state_" + c, {
                pointGroup: "visibility_state_changes"
            })
        }
    }

    function u(a) {
        return n && a === "Event"
    }

    function v(a) {
        __p && __p();
        var c = b("TimeSliceInteractionSV").interaction_to_coinflip,
            d = b("TimeSliceInteractionSV").interaction_to_lite_coinflip,
            e;
        u(a) ? e = 1 : e = Object.prototype.hasOwnProperty.call(c, a) ? c[a] : b("TimeSliceInteractionSV").default_rate;
        c = Object.prototype.hasOwnProperty.call(d, a) ? d[a] : b("TimeSliceInteractionSV").lite_default_rate;
        d = new Set();
        b("Random").coinflip(c) && d.add("lite");
        b("Random").coinflip(e) && d.add("full");
        a = 0;
        d.has("full") ? a = 1 / e : e === 0 ? a = 0 : a = 1 - 1 / e;
        e = 0;
        d.has("lite") && (e = 1 / c);
        return {
            modes: d,
            probability: a,
            liteProbability: e
        }
    }

    function w() {
        return m.size !== 0
    }

    function x(a) {
        return babelHelpers["extends"]({}, a, {
            annotations: a.annotations.prepareToSend()
        })
    }

    function y(a, c) {
        __p && __p();
        c = b("ProfilingCountersStore").getNestedTotalsByAttributions(c, a);
        a = c.attributed;
        c = c.unattributed;
        var d = {};
        a = Object.entries(a);
        for (var e = 0; e < a.length; e++) {
            var f = a[e],
                g = f[0];
            f = f[1];
            d["internal:" + g] = f
        }
        g = Object.entries(c);
        for (var f = 0; f < g.length; f++) {
            a = g[f];
            e = a[0];
            c = a[1];
            d["external:" + e] = c
        }
        return d
    }
    var z = function() {
        "use strict";
        __p && __p();
        c.create = function(a, b, d) {
            b === void 0 && (b = []);
            d === void 0 && (d = !1);
            a = new c(a, b, d);
            a.trace().addStringAnnotation("initiatorType", "manually_ended");
            return a
        };
        c.informGlobally = function(a, c) {
            if (!w()) return p;
            var d = b("performanceAbsoluteNow")(),
                e = new(b("TimingAnnotations"))(),
                f = babelHelpers["extends"]({
                    ts: d,
                    name: a,
                    annotations: e,
                    rawStackTrace: c && c.rawStackTrace || null,
                    guardStack: b("TimeSlice").getGuardNameStack()
                }, j, c);
            e.addStringAnnotation("global_point", "1");
            m.forEach(function(a) {
                return a.push(f)
            });
            return e
        };
        c.informOnPage = function(a, c) {
            var d = b("performanceAbsoluteNow")(),
                e = new(b("TimingAnnotations"))();
            d = babelHelpers["extends"]({
                ts: d,
                name: a,
                annotations: e,
                rawStackTrace: c && c.rawStackTrace || null,
                guardStack: []
            }, j, c);
            k.write(d);
            return e
        };

        function c(a, c, d) {
            __p && __p();
            var e = this;
            c === void 0 && (c = []);
            d === void 0 && (d = !1);
            this.$2 = null;
            this.$4 = !0;
            this.$5 = null;
            this.$6 = [];
            this.$7 = !1;
            this.$8 = null;
            this.$12 = [];
            this.$13 = [];
            this.$14 = [];
            this.$15 = [];
            this.$16 = new(b("TimingAnnotations").TraceTimingAnnotations)();
            this.$17 = new Map();
            this.$20 = null;
            this.$21 = 1;
            this.$24 = 1;
            this.$28 = !0;
            this.$29 = {};
            var f = v(a),
                g = f.modes,
                j = f.probability;
            f = f.liteProbability;
            this.$18 = g;
            this.$1 = a;
            this.$22 = j;
            this.$23 = f;
            this.$19 = d ? b("performanceNavigationStart")() : b("performanceAbsoluteNow")();
            this.$27 = new Map();
            this.$11 = new Set();
            j = this.inform("trace_started", {
                type: b("ArtilleryJSPointTypes").TRACE_STARTED,
                pointGroup: "e2e",
                isPointOfInterest: !0,
                ts: this.$19
            });
            b("performance") && b("performance").now && j.addStringAnnotation("offset_from_start_of_req_ms", b("performance").now().toString());
            t(this);
            m.set(this, []);
            if (this.isEnabledForMode("full")) {
                b("TimeSliceInteractionSV").enable_heartbeat && (this.$5 = b("Heartbeat").get().expressInterest());
                h && h.enabled() && (this.$9 = h.startRecording());
                f = b("TimeSliceInteractionSV").user_timing_coinflip || 0;
                i && f && b("Random").coinflip(f) && (this.$10 = i.startRecording());
                this.$3 = b("ArtilleryTraceIDUtils").newTraceId()
            }
            g.has("full") && l.write({
                interaction: this,
                ts: b("performanceAbsoluteNow")()
            });
            if (g.size === 0) this.disable(!0);
            else {
                if (this.isEnabledForMode("full")) {
                    b("TimeSliceInteractionSV").enable_heartbeat && (this.$5 = b("Heartbeat").get().expressInterest());
                    b("TimeSliceInteractionSV").force_async_request_tracing_on && c.push(b("InteractionAsyncRequestJoinDataSource"));
                    d = b("ProfilingCounters").getObserver().expressInterest();
                    this.$14.push(d);
                    u(a) && (o = b("nullthrows")(this.$3), n = !1);
                    this.$25 = b("ProfilingCountersStore").getInstance().open();
                    this.$26 = b("TimeSlice").getBuffer().open();
                    this.$14.push(function() {
                        e.$26 && e.$26.close(), e.$25 && e.$25.close()
                    })
                }
                var k = {
                    trace: function() {
                        return e.trace()
                    },
                    countDown: function() {
                        return e.countDown()
                    },
                    forceFinish: function() {
                        return e.finish(!0)
                    },
                    registerOnBeforeFinish: function(a) {
                        return e.registerOnBeforeFinish(a)
                    },
                    registerOnCleanup: function(a) {
                        return e.registerOnCleanUp(a)
                    },
                    traceID: this.$3,
                    name: a
                };
                b("TimeSliceInteractionSV").also_record_new_timeslice_format && c.push(b("TimeSliceExecutionDataSource"));
                var p = b("compactArray")(c.map(function(a) {
                    e.$24++;
                    return a.registerInteraction(k)
                }));
                this.$14.push(function() {
                    p.forEach(function(a) {
                        return a.remove()
                    })
                });
                this.$13.push(function() {
                    e.trace().addStringAnnotation("wait_for_count", "" + e.$24)
                })
            }
            for (var j = g, f = Array.isArray(j), d = 0, j = f ? j : j[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (f) {
                    if (d >= j.length) break;
                    c = j[d++]
                } else {
                    d = j.next();
                    if (d.done) break;
                    c = d.value
                }
                g = c;
                b("TimeSliceInteractionReliability").bumpLifecycleCounter("starting", a, g)
            }
        }
        var d = c.prototype;
        d.recordWithExtraSaver = function(a, b, c) {
            if (this.isEnabled()) {
                var d = this.$27.get(a) || {};
                b != null && c != null && (d[b] = c);
                this.$27.set(a, d)
            }
            return this
        };
        d.countDown = function() {
            this.$24--, this.$24 === 0 ? this.$20 && this.$20() : this.$24 < 0 && b("FBLogger")("TimeSliceInteraction").warn("some hook counted down twice")
        };
        d.countUp = function() {
            this.$24 > 0 ? ++this.$24 : b("FBLogger")("TimeSliceInteraction").warn("Attempting to countUp on finished interaction")
        };
        d.inform = function(a, c) {
            var d = c != null && c.isPointOfInterest;
            if (!this.isEnabledForMode("full") && !(this.isEnabledForMode("lite") && d)) return p;
            d = c && c.ts || b("performanceAbsoluteNow")();
            var e = new(b("TimingAnnotations"))(),
                f = this.isEnabledForMode("full") ? b("TimeSlice").getGuardNameStack() : [];
            this.$12.push(babelHelpers["extends"]({
                ts: d,
                name: a,
                annotations: e,
                rawStackTrace: c && c.rawStackTrace || null,
                guardStack: f
            }, j, c));
            return e
        };
        d.informPointWithOverride = function(a, c) {
            __p && __p();
            var d = b("performanceAbsoluteNow")(),
                e = c != null && c.isPointOfInterest;
            if (!this.isEnabledForMode("full") && !(this.isEnabledForMode("lite") && e) || !this.$29) return p;
            e = this.isEnabledForMode("full") ? b("TimeSlice").getGuardNameStack() : [];
            var f = this.$29[a];
            c && (c.rawStackTrace = c.rawStackTrace || null);
            if (f) f.ts = d, f.guardStack = e, Object.assign(f, c || {});
            else {
                f = new(b("TimingAnnotations"))();
                this.$29[a] = babelHelpers["extends"]({
                    ts: d,
                    name: a,
                    annotations: f,
                    rawStackTrace: c && c.rawStackTrace || null,
                    guardStack: e
                }, j, c)
            }
            return this.$29[a].annotations
        };
        d.invokeWithProfiling = function(c, d) {
            if (!this.isEnabledForMode("full")) return d();
            var e = this.inform("start_" + c);
            this.$6.push(e);
            e = b("ErrorUtils").applyWithGuard(d, a, null, null, c);
            this.inform("finished_" + c);
            this.$6.pop();
            return e
        };
        d.getCurrentInvocation = function() {
            if (!this.isEnabledForMode("full")) return p;
            else if (this.$6.length < 1) return p;
            else return this.$6[this.$6.length - 1]
        };
        d.finish = function(a) {
            __p && __p();
            var c = this;
            this.$30(a ? "client_tsi_finish_on_unload" : "client_tsi_finish");
            if (!this.$4) return;
            if (a && this.$20) {
                this.$20();
                return
            }
            if (this.$7) b("FBLogger")("TimeSliceInteraction").warn("Trace was already marked as ended");
            else {
                t(this);
                this.$15.forEach(function(a) {
                    return a(c)
                });
                for (var d = this.$18, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var i;
                    if (e) {
                        if (f >= d.length) break;
                        i = d[f++]
                    } else {
                        f = d.next();
                        if (f.done) break;
                        i = f.value
                    }
                    i = i;
                    b("TimeSliceInteractionReliability").bumpLifecycleCounter("finishing", this.$1, i)
                }
                this.inform("trace_ended", {
                    type: b("ArtilleryJSPointTypes").TRACE_ENDED,
                    pointGroup: "e2e",
                    isPointOfInterest: !0
                });
                var j = this.isEnabledForMode("lite"),
                    k = this.isEnabledForMode("full");
                k && this.trace().addStringAnnotation("weight", "" + 1 / (this.$21 * this.$22));
                j && this.trace().addStringAnnotation("lite_weight", "" + 1 / (this.$21 * this.$23));
                navigator && navigator.connection && (typeof navigator.connection.downlink === "number" && this.trace().addStringAnnotation("browser_downlink_megabits", navigator.connection.downlink.toString()), typeof navigator.connection.rtt === "number" && this.trace().addStringAnnotation("browser_rtt_ms", navigator.connection.rtt.toString()), typeof navigator.connection.effectiveType === "string" && this.trace().addStringAnnotation("browser_effective_connection_type", navigator.connection.effectiveType));
                var l = b("performanceAbsoluteNow")(),
                    n = m.get(this);
                m["delete"](this);
                this.$5 && this.$5();
                var p = this.$25 != null ? this.$25.close() : [],
                    q = this.$26 != null ? this.$26.close() : [],
                    r = this.$26 != null ? this.$26.hasOverflown() : !1,
                    s = this.$26 != null ? this.$26.getOverflowSize() : 0,
                    u = this.$10 != null ? this.$10.close() : null;
                if (j || k) {
                    var v = function(a) {
                            j && c.$31(n), k && (u != null && c.recordWithExtraSaver(b("TimeSliceInteractionExtraSaver").USER_TIMING_SAVER, "data", u), c.$32(l, n, a, p, q, r, s)), o && o === c.$3 && (b("Arbiter").inform("time_slice_trace_posted", {
                                traceId: c.$3
                            }), o = null), c.$33()
                        },
                        w = v;
                    if (this.$9 !== void 0) {
                        h || g(0, 1439);
                        var x = h.stopRecording(this.$9);
                        w = function() {
                            x["catch"](function(a) {
                                setTimeout(function() {
                                    throw a
                                }, 0)
                            }).then(v)
                        }
                    }
                    a ? w() : this.$20 = function() {
                        return b("requestIdleCallbackAcrossTransitions")(function() {
                            return w()
                        })
                    }
                }
                this.countDown();
                this.$7 = !0
            }
        };
        d.registerOnBeforeSend = function(a) {
            this.$4 && this.$13.push(a);
            return this
        };
        d.registerOnBeforeFinish = function(a) {
            this.$4 && this.$15.push(a);
            return this
        };
        d.registerOnCleanUp = function(a) {
            this.$4 && this.$14.push(a);
            return this
        };
        d.trace = function() {
            return !this.$4 ? q : this.$16
        };
        d.getTraceID = function() {
            return this.$4 ? this.$3 : null
        };
        d.setExtraSampleRate = function(a) {
            this.$21 = a;
            return this
        };
        d.isEnabled = function() {
            return this.$4
        };
        d.disable = function(a) {
            __p && __p();
            a === void 0 && (a = !1);
            m["delete"](this);
            this.$5 && this.$5();
            this.$9 !== void 0 && (h || g(0, 1439), h.stopRecording(this.$9));
            if (!a && this.$4)
                for (var a = this.$18, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var e;
                    if (c) {
                        if (d >= a.length) break;
                        e = a[d++]
                    } else {
                        d = a.next();
                        if (d.done) break;
                        e = d.value
                    }
                    e = e;
                    b("TimeSliceInteractionReliability").bumpLifecycleCounter("disabled", this.$1, e)
                }
            this.$4 = !1;
            this.$33()
        };
        d.disableBanzaiStream = function() {
            this.$28 = !1
        };
        c.getPageLoadPoints = function(a, b) {
            var c = [],
                d = k.read();
            for (var e = d.length - 1; e >= 0; e--) {
                var f = d[e];
                if (f.ts < a) return c;
                else f.ts < b && c.push(x(f))
            }
            return c
        };
        c.getInteractionIDsBetween = function(a, b) {
            __p && __p();
            var c = [],
                d = l.read();
            for (var e = d.length - 1; e >= 0; e--) {
                var f = d[e],
                    g = f.interaction;
                f = f.ts;
                g = g.getTraceID();
                if (f < a) return c;
                else f < b && g != null && c.push(g)
            }
            return c
        };
        d.receiveAsyncResponse = function(a) {
            a != null && a.artillery_info && this.isEnabledForMode("full") ? this.$34(a.artillery_info.artillery_join_points) : this.disable();
            return this
        };
        d.addArtilleryIDHeader = function(a) {
            this.$4 && a.setRequestHeader("X-ARTILLERY-REQ-METADATA", JSON.stringify({
                trace_id: this.$3
            }));
            return this
        };
        d.forResourceRequest = function(a) {
            __p && __p();
            if (!this.isEnabledForMode("full")) return p;
            else {
                var c = this.$17.get(a);
                if (c) return c;
                else {
                    c = new(b("TimingAnnotations"))();
                    this.$17.set(a, c);
                    return c
                }
            }
        };
        d.addProfilingCounterAttribution = function(a) {
            this.$11.add(a);
            return this
        };
        d.$34 = function(a) {
            if (!this.isEnabledForMode("full")) return this;
            this.$2 = a;
            return this
        };
        d.$31 = function(a) {
            __p && __p();
            var c = this;
            this.$13.forEach(function(a) {
                return a()
            });
            this.$13 = [];
            if (!this.isEnabled()) return;
            var d = [];
            a = this.$12.concat(Object.values(this.$29)).concat(a || []);
            a.forEach(function(a) {
                a.isPointOfInterest && d.push({
                    ts: a.ts,
                    name: a.name,
                    pointGroup: a.pointGroup,
                    annotations: a.annotations.prepareToSend()
                })
            });
            var e = {
                trace_id: this.$3,
                action_name: this.$1,
                trace_annotations: this.$16.prepareToSend(),
                points: d
            };
            b("Bootloader").loadModules(["Banzai", "BanzaiODS", "PerfXSharedFields"], function(a, d, f) {
                b("TimeSliceInteractionReliability").bumpLifecycleCounter("posting", c.$1, "lite"), a.post(s, f.addCommonValues(e), a.VITAL)
            }, "TimeSliceInteraction")
        };
        d.$32 = function(a, c, d, e, f, g, h) {
            __p && __p();
            var i = this;
            this.$30("client_tsi_post_start");
            this.$13.forEach(function(a) {
                return a()
            });
            this.$13 = [];
            if (!this.isEnabled()) return;
            c = c != null ? this.$12.concat(c) : this.$12;
            c.push.apply(c, Object.values(this.$29));
            var j = c.map(x),
                k = Array.from(this.$11.keys()),
                l = new Map(this.$27.entries());
            b("TimeSliceInteractionBootloadForPost")(function(c, m, n, o, p, q, s) {
                __p && __p();
                i.$30("client_tsi_post_ready");
                b("TimeSliceInteractionReliability").bumpLifecycleCounter("posting", i.$1, "full");
                n = p.getMetrics(i.$19, a, b("TimeSliceInteractionSV").maxBlockMergeDuration, b("TimeSliceInteractionSV").maxBlockMergeDistance, f, b("ProfilingCountersStore").toMap(e), {
                    includeRefTreeIDs: !0,
                    counterFunction: function(a) {
                        return y(k, a)
                    }
                });
                i.$16.addStringAnnotation("overflown_timeslice_buffer", g ? "1" : "0");
                i.$16.addStringAnnotation("overflown_timeslice_entry_count", "" + h);
                if (b("performance") && b("performance").timing && b("performance").timing.navigationStart) {
                    var t = f.length > 0 ? f[0].begin : null;
                    o = o.getMetrics(t != null && t < i.$19 ? t : i.$19, !1, null, a, !0, !0);
                    t = o.data;
                    o = o.diagnostics;
                    o && (i.$16.addStringAnnotation("number_of_valid_entries", o.numValidEntries.toString()), i.$16.addStringAnnotation("number_of_success_metrics", o.numSuccessfulMetrics.toString()));
                    Object.values(t).forEach(function(a) {
                        return a.forEach(function(a) {
                            var c = a.desc,
                                d = a.type,
                                e = i.$17.get(c);
                            e = e && e.prepareToSend();
                            if (d === b("ResourceTypes").JS || d === b("ResourceTypes").CSS || d === b("ResourceTypes").XHR) {
                                d = b("ResourceTimingsStore").getAnnotationsFor(d, c);
                                e = b("TimingAnnotations").combine(e, d)
                            }
                            a.annotations = e
                        })
                    })
                } else t = {};
                var u = {};
                l.forEach(function(a, c) {
                    __p && __p();
                    var d = b("ArtilleryComponentSaverOptions").options[c];
                    d = !!(d && d.shouldCompress);
                    if (d) {
                        d = q.compressStringToSnappy(JSON.stringify(a));
                        if (d != null) {
                            u[c] = {
                                data: d,
                                isCompressed: !0
                            };
                            return
                        }
                    }
                    u[c] = {
                        isCompressed: !1,
                        data: a
                    }
                });
                o = {
                    trace_id: i.$3,
                    join_points: i.$2,
                    action_name: i.$1,
                    points: j,
                    traceAnnotations: i.$16.prepareToSend(),
                    timeslices: p.formatMetricsForTransport(n),
                    resource_timings: t,
                    sampler_profile: d,
                    extra_savers: u
                };
                o = s.addCommonValues(o);
                b("TimeSliceInteractionSV").compression_enabled && (o = i.$35(q, o));
                p = b("TimeSliceInteractionSV").banzai_stream_coinflip || 0;
                i.$28 && b("TimeSliceInteractionSV").enable_banzai_stream && b("Random").coinflip(p) ? m.post(r, o, {
                    compress: !1
                }) : c.post(r, o, {
                    compress: !1
                })
            })
        };
        d.$35 = function(a, b) {
            var c = ["points", "timeslices", "resource_timings", "sampler_profile"],
                d = {};
            c.forEach(function(c) {
                var e = b[c];
                if (e == null) return;
                e = JSON.stringify(e);
                e = a.compressStringToSnappy(e);
                e !== null && (d[c] = e, delete b[c])
            });
            return babelHelpers["extends"]({}, b, {
                miny: d
            })
        };
        d.$33 = function() {
            delete this.$12, this.$13 = [], this.$14 && (this.$14.forEach(function(a) {
                return a()
            }), this.$14 = []), this.$15 = [], delete this.$29, delete this.$20, delete this.$27
        };
        d.isEnabledForMode = function(a) {
            return this.$4 && !this.$7 && this.$18.has(a)
        };
        d.isDone = function() {
            return this.$7
        };
        d.$30 = function(a) {
            b("TSIAdsReliabilityHook").event(this.$1, a, this.getTraceID())
        };
        c.getAllActiveInteractions = function() {
            return m.keys()
        };
        return c
    }();
    e.exports = z
}), null);
__d("TimeSliceReferenceCounting", ["ExecutionContextObservers", "OnDemandExecutionContextObserver", "ProfilingCounters", "TimeSlice", "requestIdleCallbackAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = [],
        h = [];
    a = null;
    var i = null,
        j = 1,
        k = [];

    function l(a) {
        if (a == null || a.length === 0) return;
        a = a.filter(function(a) {
            return --a.openReferenceCount == 0
        });
        a.length > 0 && (k.push.apply(k, a), b("requestIdleCallbackAcrossTransitions")(b("TimeSlice").guard(m, "invoking onAllChildrenFinished callbacks", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        })))
    }

    function m() {
        while (k.length) k.pop().finish()
    }
    var n = function() {
        "use strict";
        __p && __p();

        function a(b, c) {
            this.$2 = a.$1++, this.$3 = b, this.$4 = [], this.$5 = !1, this.$6 = c, this.openReferenceCount = 1, this.timeslices = [b]
        }
        var b = a.prototype;
        b.isProfiling = function() {
            return this.$6
        };
        b.addCallback = function(a) {
            !this.$5 ? this.$4.push(a) : a();
            return this
        };
        b.finish = function() {
            this.$5 || (this.$5 = !0, this.$4.forEach(function(a) {
                return a()
            }), delete this.$4)
        };
        b.getContinuationExecutionCounterID = function() {
            return this.$2
        };
        b.isInsideContinuationExecution = function() {
            return h.indexOf(this) !== -1
        };
        b.getTimeSliceContextsThisCounted = function() {
            return this.timeslices
        };
        b.getRootContextID = function() {
            return this.$3
        };
        return a
    }();
    n.$1 = 1;

    function o(a, b) {
        a.forEach(function(a) {
            var c = a.getContinuationExecutionCounterID(),
                d = b.find(function(a) {
                    return a.getContinuationExecutionCounterID() === c
                });
            d || b.push(a)
        })
    }
    c = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.onNewContextCreatedWhileEnabled = function(a, b, c) {
            var d;
            c.isContinuation && (d = h, d.forEach(function(a) {
                return a.openReferenceCount++
            }));
            a = {
                hasBeenInvoked: !1,
                hasExecutionBeenCounted: !1,
                parentReferenceCounters: d,
                creationID: j++
            };
            return a
        };
        d.onContextCanceled = function(a, b) {
            a = b || {};
            a.hasBeenInvoked || (l(a.parentReferenceCounters), a.hasBeenInvoked = !0)
        };
        d.onBeforeContextStartedWhileEnabled = function(a, c, d) {
            __p && __p();
            var e = {
                callerProfilingCounterID: i,
                callerReferenceCounters: g,
                callerExecutionCounters: h.slice()
            };
            c = c || {
                hasBeenInvoked: !1,
                creationID: -1
            };
            c.hasBeenInvoked = !0;
            a.executionNumber > 0 ? g = [] : g = c.parentReferenceCounters || [];
            d.extendsExecution ? o(g, h) : h = [];
            h.forEach(function(b) {
                return b.timeslices.push(a.contextID)
            });
            g.filter(function(a) {
                return a.isProfiling()
            }).length > 0 && a.executionNumber === 0 ? i = b("ProfilingCounters").startTimingInContext("REF_COUNTED_TIMESLICE_TIME", a.contextID) : i = null;
            return e
        };
        d.onDisable = function() {
            i = null, g = [], h = []
        };
        d.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
            return c
        };
        d.onAfterContextEndedWhileEnabled = function(a, c, d, e) {
            c = a.contextID;
            i != null && (b("ProfilingCounters").stopTimingInContext(i, c), i = null);
            l(g);
            g = d.callerReferenceCounters;
            h = d.callerExecutionCounters;
            i = d.callerProfilingCounterID
        };
        d.getBeforeID = function() {
            return b("ExecutionContextObservers").beforeIDs.REFERENCE_COUNTING
        };
        d.getAfterID = function() {
            return b("ExecutionContextObservers").afterIDs.REFERENCE_COUNTING
        };
        return c
    }(b("OnDemandExecutionContextObserver"));
    var p = {
            onAllChildrenFinished: function(a, b) {
                b === void 0 && (b = !1);
                var c = p.getObserver().expressInterest();
                return p.onAllChildrenFinishedWithoutAutoTurningObserverOn(a, c, b)
            },
            onAllChildrenFinishedWithoutAutoTurningObserverOn: function(c, d, e) {
                __p && __p();
                var f = b("TimeSlice").getContext();
                if (f == null) {
                    d();
                    return null
                }
                f = f.contextID;
                a = new n(f, e);
                a.addCallback(d);
                c && a.addCallback(c);
                g = g.slice();
                g.push(a);
                h = h.slice();
                h.push(a);
                i == null && a.isProfiling() && (i = b("ProfilingCounters").startTimingInContext("REF_COUNTED_TIMESLICE_TIME", f));
                return a
            },
            getObserver: function() {
                return q
            }
        },
        q = new c();
    b("TimeSlice").registerExecutionContextObserver(q);
    e.exports = p
}), null);
__d("TimeSliceAutoclosedInteraction", ["ErrorUtils", "ProfilingCounters", "TimeSlice", "TimeSliceInteraction", "TimeSliceInteractionExtraSaver", "TimeSliceInteractionSV", "TimeSliceReferenceCounting", "clearTimeout", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 70 * 1e3;
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c, d) {
            __p && __p();
            var e;
            d === void 0 && (d = []);
            e = a.call(this, c, d) || this;
            e.$TimeSliceAutoclosedInteraction1 = new Map();
            e.$TimeSliceAutoclosedInteraction2 = 0;
            e.$TimeSliceAutoclosedInteraction3 = !0;
            e.$TimeSliceAutoclosedInteraction4 = [];
            e.$TimeSliceAutoclosedInteraction5 = new Set();
            if (e.isEnabled()) {
                e.trace().addStringAnnotation("initiatorType", "autoclosed");
                var f = b("setTimeoutAcrossTransitions")(b("TimeSlice").guard(function() {
                    e.isDone() || (e.trace().addStringAnnotation("terminated_by_timeout_ms", g.toString()), e.finish())
                }, "timeout for action " + c, {
                    propagationType: b("TimeSlice").PropagationType.EXECUTION
                }), g);
                e.registerOnBeforeSend(function() {
                    e.trace().addStringAnnotation("ref_counting_trees", "" + e.$TimeSliceAutoclosedInteraction2).addStringAnnotation("ref_counters_pending_count", "" + e.$TimeSliceAutoclosedInteraction1.size), b("clearTimeout")(f)
                });
                d = b("TimeSliceReferenceCounting").onAllChildrenFinished(null, !0);
                if (d == null) e.disable(), b("ErrorUtils").reportError(new Error("starting autoclosed interaction outside of a timeslice."));
                else {
                    e.waitForReferenceCounter(d);
                    e.trace().addStringAnnotation("on_demand_reference_counting", b("TimeSliceInteractionSV").on_demand_reference_counting ? "1" : "0");
                    c = "timeslice_interaction_" + e.getTraceID();
                    e.isEnabledForMode("full") && (b("ProfilingCounters").currentContext().addAttribution(c, b("ProfilingCounters").AttributionPropagation.ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC), e.addProfilingCounterAttribution(c))
                }
            }
            return e
        }
        c.getInteractionsActiveRightNow = function() {
            return Array.from(b("TimeSliceInteraction").getAllActiveInteractions()).filter(function(a) {
                return a.$TimeSliceAutoclosedInteraction3 && a.hasActiveReferenceCountingHandle()
            })
        };
        var d = c.prototype;
        d.waitForReferenceCounter = function(a) {
            __p && __p();
            var c = this;
            if (!this.isEnabled()) return this;
            var d = a.getContinuationExecutionCounterID();
            this.$TimeSliceAutoclosedInteraction1.set(d, a);
            this.$TimeSliceAutoclosedInteraction2++;
            a.addCallback(function() {
                b("TimeSliceInteractionSV").also_record_new_timeslice_format && c.$TimeSliceAutoclosedInteraction1.has(d) && a.getTimeSliceContextsThisCounted().forEach(function(a) {
                    return c.$TimeSliceAutoclosedInteraction5.add(a)
                }), c.$TimeSliceAutoclosedInteraction1["delete"](d) && c.$TimeSliceAutoclosedInteraction1.size === 0 && (c.$TimeSliceAutoclosedInteraction4.forEach(function(a) {
                    return a()
                }), c.$TimeSliceAutoclosedInteraction4 = [], c.isEnabled() && !c.isDone() && (b("TimeSliceInteractionSV").also_record_new_timeslice_format && c.recordWithExtraSaver(b("TimeSliceInteractionExtraSaver").TIMESLICE_EXECUTION_SAVER, "reference_counted_contexts", Array.from(c.$TimeSliceAutoclosedInteraction5.values())), c.finish()))
            });
            return this
        };
        d.onReferenceCountedExecutionFinished = function(a) {
            this.$TimeSliceAutoclosedInteraction4.push(a)
        };
        d.hasActiveReferenceCountingHandle = function() {
            __p && __p();
            for (var a = this.$TimeSliceAutoclosedInteraction1.values(), b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                if (d.isInsideContinuationExecution()) return !0
            }
            return !1
        };
        return c
    }(b("TimeSliceInteraction"));
    e.exports = a
}), null);
__d("Keys", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = Object.freeze({
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE_BREAK: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        LEFT_WINDOW_KEY: 91,
        RIGHT_WINDOW_KEY: 92,
        SELECT_KEY: 93,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBTRACT: 109,
        DECIMAL_POINT: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUM_LOCK: 144,
        SCROLL_LOCK: 145,
        SEMI_COLON: 186,
        EQUAL_SIGN: 187,
        COMMA: 188,
        DASH: 189,
        PERIOD: 190,
        FORWARD_SLASH: 191,
        GRAVE_ACCENT: 192,
        OPEN_BRACKET: 219,
        BACK_SLASH: 220,
        CLOSE_BRAKET: 221,
        SINGLE_QUOTE: 222
    })
}), null);
__d("clearImmediatePolyfill", ["ImmediateImplementation"], (function(a, b, c, d, e, f) {
    e.exports = a.clearImmediate || b("ImmediateImplementation").clearImmediate
}), null);
__d("clearImmediate", ["TimerStorage", "TimeSlice", "clearImmediatePolyfill"], (function(a, b, c, d, e, f) {
    var g = b("TimerStorage").IMMEDIATE;

    function a(a) {
        if (a != null) {
            b("TimerStorage").unset(b("TimerStorage").IMMEDIATE, a);
            var c = g + String(a);
            b("TimeSlice").cancelWithToken(c)
        }
        b("clearImmediatePolyfill")(a)
    }
    e.exports = a
}), null);
__d("TimeSliceInteractionCancelHook", ["Keys", "clearImmediate", "requireWeak", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [];
    a = {
        registerInteraction: function(a) {
            var c = b("setImmediateAcrossTransitions")(function() {
                    g.push(a)
                }),
                d = !1;
            return {
                remove: function() {
                    if (d) return;
                    d = !0;
                    b("clearImmediate")(c);
                    var e = g.indexOf(a);
                    e !== -1 && g.splice(e, 1)
                }
            }
        }
    };
    b("requireWeak")("Event", function(a) {
        a.listen(document, "click", function() {
            g.forEach(function(a) {
                a.trace().addStringAnnotation("clicked_during_interaction", "1")
            })
        }), a.listen(document, "keydown", function(c) {
            a.getKeyCode(c) === b("Keys").ESC && g.forEach(function(a) {
                a.trace().addStringAnnotation("escaped_during_interaction", "1")
            })
        })
    });
    e.exports = a
}), null);
__d("CurrentEventMeta", [], (function(a, b, c, d, e, f) {
    var g = null,
        h = {};
    a = {
        __setCurrentEventID: function(a) {
            g = a
        },
        __informEventDataReady: function(a, b) {
            h[a] && (h[a].forEach(function(a) {
                return a(b)
            }), delete h[a])
        },
        hasCurrentEvent: function() {
            return !!g
        },
        registerForCurrentEventData: function(a) {
            g && (h[g] = h[g] || [], h[g].push(a))
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionEventHook", ["CurrentEventMeta"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        registerInteraction: function(a) {
            b("CurrentEventMeta").hasCurrentEvent() && (a.countUp(), b("CurrentEventMeta").registerForCurrentEventData(function(b) {
                Object.keys(b).forEach(function(c) {
                    var d = "" + b[c];
                    a.trace().addStringAnnotation(c, d)
                }), a.countDown()
            }));
            return null
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionLeaveHook", ["Run"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [];
    a = {
        registerInteraction: function(a) {
            g.push(a);
            return {
                remove: function() {
                    var b = g.indexOf(a);
                    b !== -1 && g.splice(b, 1)
                }
            }
        }
    };
    b("Run").onUnload(function() {
        g.forEach(function(a) {
            a.trace().addStringAnnotation("ended_early_because_page_is_unloading", "1"), a.finish(!0)
        })
    });
    e.exports = a
}), null);
__d("EventEmitterWithValidation", ["BaseEventEmitter"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var c;
            c = a.call(this) || this;
            c.$EventEmitterWithValidation1 = Object.keys(b);
            return c
        }
        var c = b.prototype;
        c.emit = function(b) {
            g(b, this.$EventEmitterWithValidation1);
            return a.prototype.emit.apply(this, arguments)
        };
        return b
    }(b("BaseEventEmitter"));

    function g(a, b) {
        if (b.indexOf(a) === -1) throw new TypeError(h(a, b))
    }

    function h(a, b) {
        a = 'Unknown event type "' + a + '". ';
        a += "Known event types: " + b.join(", ") + ".";
        return a
    }
    e.exports = a
}), null);
__d("mixInEventEmitter", ["invariant", "EventEmitterWithHolding", "EventEmitterWithValidation", "EventHolder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function a(a, b) {
        b || g(0, 3159);
        var c = a.prototype || a;
        c.__eventEmitter && g(0, 3160);
        a = a.constructor;
        a && (a === Object || a === Function || g(0, 3161));
        c.__types = babelHelpers["extends"]({}, c.__types, b);
        Object.assign(c, h)
    }
    var h = {
        emit: function(a, b, c, d, e, f, g) {
            return this.__getEventEmitter().emit(a, b, c, d, e, f, g)
        },
        emitAndHold: function(a, b, c, d, e, f, g) {
            return this.__getEventEmitter().emitAndHold(a, b, c, d, e, f, g)
        },
        addListener: function(a, b, c) {
            return this.__getEventEmitter().addListener(a, b, c)
        },
        once: function(a, b, c) {
            return this.__getEventEmitter().once(a, b, c)
        },
        addRetroactiveListener: function(a, b, c) {
            return this.__getEventEmitter().addRetroactiveListener(a, b, c)
        },
        listeners: function(a) {
            return this.__getEventEmitter().listeners(a)
        },
        removeAllListeners: function() {
            this.__getEventEmitter().removeAllListeners()
        },
        removeCurrentListener: function() {
            this.__getEventEmitter().removeCurrentListener()
        },
        releaseHeldEventType: function(a) {
            this.__getEventEmitter().releaseHeldEventType(a)
        },
        __getEventEmitter: function() {
            if (!this.__eventEmitter) {
                var a = new(b("EventEmitterWithValidation"))(this.__types),
                    c = new(b("EventHolder"))();
                this.__eventEmitter = new(b("EventEmitterWithHolding"))(a, c)
            }
            return this.__eventEmitter
        }
    };
    e.exports = a
}), null);
__d("pageID", [], (function(a, b, c, d, e, f) {
    e.exports = Math.floor(2147483648 * Math.random()).toString(36)
}), null);
__d("NavigationMetricsCore", ["mixInEventEmitter", "pageID"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
            NAVIGATION_DONE: "NAVIGATION_DONE",
            EVENT_OCCURRED: "EVENT_OCCURRED"
        },
        h = {
            tti: "tti",
            e2e: "e2e",
            all_pagelets_loaded: "all_pagelets_loaded",
            all_pagelets_displayed: "all_pagelets_displayed"
        },
        i = 0,
        j = {},
        k = function() {
            "use strict";
            __p && __p();

            function a() {
                this.eventTimings = {
                    tti: null,
                    e2e: null,
                    all_pagelets_loaded: null,
                    all_pagelets_displayed: null
                }, this.lid = b("pageID") + ":" + i++, this.extras = {}
            }
            var c = a.prototype;
            c.getLID = function() {
                return this.lid
            };
            c.setRequestStart = function(a) {
                this.start = a;
                return this
            };
            c.setTTI = function(a) {
                this.eventTimings.tti = a;
                this.$1(h.tti, a);
                return this
            };
            c.setE2E = function(a) {
                this.eventTimings.e2e = a;
                this.$1(h.e2e, a);
                return this
            };
            c.setExtra = function(a, b) {
                this.extras[a] = b;
                return this
            };
            c.setDisplayDone = function(a) {
                this.eventTimings.all_pagelets_displayed = a;
                this.setExtra("all_pagelets_displayed", a);
                this.$1(h.all_pagelets_displayed, a);
                return this
            };
            c.setAllPageletsLoaded = function(a) {
                this.eventTimings.all_pagelets_loaded = a;
                this.setExtra("all_pagelets_loaded", a);
                this.$1(h.all_pagelets_loaded, a);
                return this
            };
            c.setServerLID = function(a) {
                this.serverLID = a;
                return this
            };
            c.$1 = function(a, b) {
                var c = {};
                j != null && this.serverLID != null && j[this.serverLID] != null && (c = j[this.serverLID]);
                c = babelHelpers["extends"]({}, c, {
                    event: a,
                    timestamp: b
                });
                l.emitAndHold(g.EVENT_OCCURRED, this.serverLID, c);
                return this
            };
            c.doneNavigation = function() {
                var a = babelHelpers["extends"]({
                    start: this.start,
                    extras: this.extras
                }, this.eventTimings);
                if (this.serverLID && j[this.serverLID]) {
                    var b = this.serverLID;
                    Object.assign(a, j[b]);
                    delete j[b]
                }
                l.emitAndHold(g.NAVIGATION_DONE, this.lid, a)
            };
            return a
        }(),
        l = {
            Events: g,
            postPagelet: function(a, b, c) {},
            siteInit: function(a) {
                a(k)
            },
            setPage: function(a) {
                if (!a.serverLID) return;
                j[a.serverLID] = {
                    page: a.page,
                    pageType: a.page_type,
                    pageURI: a.page_uri,
                    serverLID: a.serverLID
                }
            },
            getFullPageLoadLid: function() {
                throw new Error("getFullPageLoadLid is not implemented on this site")
            }
        };
    b("mixInEventEmitter")(l, g);
    e.exports = l
}), null);
__d("NavigationMetrics", ["Arbiter", "BigPipeInstance", "NavigationMetricsCore", "PageEvents", "performance"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "0";
    b("NavigationMetricsCore").getFullPageLoadLid = function() {
        return g
    };
    b("NavigationMetricsCore").siteInit(function(a) {
        __p && __p();
        var c = new a(),
            d = !0;
        b("Arbiter").subscribe(b("BigPipeInstance").Events.init, function(e, f) {
            __p && __p();
            var h = d ? c : new a();
            d && (g = f.lid);
            d = !1;
            h.setServerLID(f.lid);
            e = f.arbiter;
            e.subscribe(b("BigPipeInstance").Events.tti, function(a, b) {
                a = b.ts;
                h.setTTI(a)
            });
            e.subscribe(b("PageEvents").AJAXPIPE_SEND, function(a, b) {
                a = b.ts;
                h.setRequestStart(a)
            });
            e.subscribe(b("PageEvents").AJAXPIPE_ONLOAD, function(a, b) {
                a = b.ts;
                h.setE2E(a).doneNavigation()
            });
            e.subscribe(b("BigPipeInstance").Events.displayed, function(a, b) {
                a = b.ts;
                h.setDisplayDone(a)
            });
            e.subscribe(b("BigPipeInstance").Events.loaded, function(a, b) {
                a = b.ts;
                h.setAllPageletsLoaded(a)
            })
        });
        b("Arbiter").subscribe(b("PageEvents").BIGPIPE_ONLOAD, function(a, e) {
            a = e.ts;
            d = !1;
            c.setRequestStart(b("performance").timing && b("performance").timing.navigationStart).setE2E(a).doneNavigation()
        })
    });
    e.exports = b("NavigationMetricsCore")
}), null);
__d("TimeSliceInteractionPageStatsHook", ["NavigationMetrics"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g, h = [];
    b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.NAVIGATION_DONE, function(a, b) {
        if (b.pageType !== "normal") return;
        g = {
            start: b.start,
            dd: b.all_pagelets_displayed,
            tti: b.tti,
            e2e: b.e2e
        };
        for (var a = 0; a < h.length; a++) {
            b = h[a];
            i(b);
            b.countDown()
        }
        h = []
    });

    function i(a) {
        g ? (a.trace().addStringAnnotation("page_start", "" + g.start), a.trace().addStringAnnotation("page_tti", "" + g.tti), a.trace().addStringAnnotation("page_dd", "" + g.dd), a.trace().addStringAnnotation("page_e2e", "" + g.e2e)) : (a.countUp(), h.push(a))
    }
    a = {
        registerInteraction: function(a) {
            i(a);
            return {
                remove: function() {
                    var b = h.indexOf(a);
                    b !== -1 && h.splice(b, 1)
                }
            }
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionResourcesDataSource", ["SiteData", "TimeSliceInteractionExtraSaver"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        registerInteraction: function(a) {
            a.countDown(), a.registerOnBeforeFinish(function(a) {
                a.recordWithExtraSaver(b("TimeSliceInteractionExtraSaver").RESOURCES_SAVER, "info", {
                    client_revision: b("SiteData").client_revision,
                    pkg_cohort: b("SiteData").pkg_cohort
                })
            })
        }
    };
    e.exports = a
}), null);
__d("BrowserEventBasedInteraction", ["Bootloader", "FBLogger", "PageDOMMutationObserver", "TimeSliceAutoclosedInteraction", "TimeSliceInteractionCancelHook", "TimeSliceInteractionEventHook", "TimeSliceInteractionLeaveHook", "TimeSliceInteractionPageStatsHook", "TimeSliceInteractionResourcesDataSource", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [b("TimeSliceInteractionCancelHook"), b("TimeSliceInteractionEventHook"), b("TimeSliceInteractionLeaveHook"), b("TimeSliceInteractionPageStatsHook")];
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c, d, e) {
            __p && __p();
            var f;
            f = a.call(this, "Event", [b("TimeSliceInteractionResourcesDataSource")]) || this;
            f.$BrowserEventBasedInteraction2 = [];
            f.$BrowserEventBasedInteraction4 = null;
            f.$BrowserEventBasedInteraction5 = null;
            f.$BrowserEventBasedInteraction6 = null;
            f.$BrowserEventBasedInteraction7 = 0;
            f.$BrowserEventBasedInteraction8 = 0;
            f.$BrowserEventBasedInteraction1 = d;
            [].push.apply(f.$BrowserEventBasedInteraction2, c);
            f.setExtraSampleRate(e);
            var h = g.map(function(a) {
                a.registerInteraction(babelHelpers.assertThisInitialized(f))
            });
            f.registerOnCleanUp(function() {
                h.forEach(function(a) {
                    return a && a.remove()
                })
            });
            f.registerOnBeforeSend(function() {
                f.trace().addVectorAnnotation("interaction_ids", f.$BrowserEventBasedInteraction2)
            });
            f.trace().addStringAnnotation("is_mutation_observer_supported", b("PageDOMMutationObserver").isSupported() ? "1" : "0");
            return f
        }
        var d = c.prototype;
        d.getEventType = function() {
            return this.$BrowserEventBasedInteraction1
        };
        d.tagAsInteractionID = function(a) {
            this.$BrowserEventBasedInteraction2.push(a)
        };
        d.hasInteractionIDs = function(a) {
            __p && __p();
            for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                if (!this.$BrowserEventBasedInteraction2.includes(d)) return !1
            }
            return !0
        };
        d.addEagerExecution = function(a, b, c) {
            this.waitForReferenceCounter(a), this.addProfilingCounterAttribution(b), [].push.apply(this.$BrowserEventBasedInteraction2, c)
        };
        d.setManualStartAndEnd = function(a, b, c, d) {
            this.$BrowserEventBasedInteraction7++, this.$BrowserEventBasedInteraction8++, this.$BrowserEventBasedInteraction3 = a, this.$BrowserEventBasedInteraction4 = b, this.$BrowserEventBasedInteraction5 = c, this.$BrowserEventBasedInteraction6 = d, this.isEnabled() ? this.addManualInstrumentationData() : d || this.logManualInstrumentationData()
        };
        d.markManualStart = function(a, c) {
            var d = this;
            this.$BrowserEventBasedInteraction7++;
            this.$BrowserEventBasedInteraction4 || (this.$BrowserEventBasedInteraction4 = c || b("performanceAbsoluteNow")(), this.$BrowserEventBasedInteraction3 = a, this.isEnabled() && (this.countUp(), this.registerOnBeforeFinish(function() {
                d.addManualInstrumentationData()
            })))
        };
        d.markManualEnd = function(a) {
            if (!this.$BrowserEventBasedInteraction4) {
                b("FBLogger")("event_profiler").warn("Attempting to mark end for interaction which never had start marked");
                return
            }
            this.$BrowserEventBasedInteraction8++;
            this.$BrowserEventBasedInteraction5 = a || b("performanceAbsoluteNow")();
            this.$BrowserEventBasedInteraction6 = this.hasActiveReferenceCountingHandle();
            !this.isEnabled() && !this.$BrowserEventBasedInteraction6 ? this.logManualInstrumentationData() : this.isEnabled() && this.$BrowserEventBasedInteraction8 === 1 && this.countDown()
        };
        d.getManualInstrumentationData = function() {
            var a = {};
            this.$BrowserEventBasedInteraction4 && this.$BrowserEventBasedInteraction3 && (a.manual_instrumentation_start = "" + this.$BrowserEventBasedInteraction4, a.manual_instrumentation_marked_start_count = "" + this.$BrowserEventBasedInteraction7, a.manual_instrumentation_start_reference_counted = "1");
            this.$BrowserEventBasedInteraction5 && (a.manual_instrumentation_end = "" + this.$BrowserEventBasedInteraction5, a.manual_instrumentation_marked_end_count = "" + this.$BrowserEventBasedInteraction8, a.manual_instrumentation_end_reference_counted = this.$BrowserEventBasedInteraction6 ? "1" : "0");
            this.$BrowserEventBasedInteraction4 && this.$BrowserEventBasedInteraction5 && (a.manual_instrumentation_duration = "" + (this.$BrowserEventBasedInteraction5 - this.$BrowserEventBasedInteraction4));
            return a
        };
        d.addManualInstrumentationData = function() {
            var a = this,
                b = this.getManualInstrumentationData();
            Object.keys(b).forEach(function(c) {
                a.trace().addStringAnnotation(c, b[c])
            });
            this.trace().addVectorAnnotation("manual_instrumentation_interaction_ids", this.$BrowserEventBasedInteraction3 || []);
            b.manual_instrumentation_start && this.inform("manual_instrumentation_start", {
                ts: parseFloat(b.manual_instrumentation_start)
            }).addStringAnnotation("visual_role", "global_signpost");
            b.manual_instrumentation_end && this.inform("manual_instrumentation_end", {
                ts: parseFloat(b.manual_instrumentation_end)
            }).addStringAnnotation("visual_role", "global_signpost")
        };
        d.logManualInstrumentationData = function() {
            var a = this,
                c = this.$BrowserEventBasedInteraction3 || [],
                d = this.getManualInstrumentationData();
            d.lite_weight = "1";
            b("Bootloader").loadModules(["TimeSliceInteractionsLiteTypedLogger", "PerfXSharedFields"], function(b, e) {
                new b().setActionName("Event").setTraceAnnotations({
                    stringProps: d,
                    setProps: {},
                    vectorProps: {
                        manual_instrumentation_interaction_ids: c,
                        interaction_ids: a.$BrowserEventBasedInteraction2
                    }
                }).updateData(e.getCommonData()).logVital()
            }, "BrowserEventBasedInteraction")
        };
        d.getActiveBrowserEventBasedInteractions = function() {
            return b("TimeSliceAutoclosedInteraction").getInteractionsActiveRightNow().filter(function(a) {
                return a instanceof c
            })
        };
        return c
    }(b("TimeSliceAutoclosedInteraction"));
    e.exports = a
}), null);
__d("EventProfilerAdsSessionProvider", ["AdsInterfacesSessionConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        sessionID: b("AdsInterfacesSessionConfig").sessionID
    }
}), null);
__d("EventProfilerEagerExecution", ["EventConfig", "FBLogger", "ProfilingCounters", "TimeSliceReferenceCounting"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 0,
        h = {},
        i = 0,
        j = {},
        k = function() {
            __p && __p();

            function a(a, c, d) {
                __p && __p();
                var e = this;
                this.interaction = null;
                this.$2 = [];
                this.$3 = [];
                this.$4 = [];
                this.$5 = [];
                this.id = i++;
                this.$6 = a;
                for (var d = 0; d < a.length; d++) j[a[d]] && b("FBLogger")("event_profiler").blameToPreviousDirectory().mustfix("Declaring multiple eager executions for the same interaction not supported: %s", a[d]), j[a[d]] = this;
                d = "eagerly_executed_tree_" + ++g;
                b("EventConfig").profile_eager_execution && (this.handle = b("TimeSliceReferenceCounting").onAllChildrenFinished(function() {
                    e.finish()
                }, c !== 0), c && b("ProfilingCounters").currentContext().addAttribution(d, b("ProfilingCounters").AttributionPropagation.ONLY_ON_CONTINUATIONS));
                this.sampleWeight = c;
                this.$1 = d;
                h[this.id] = this
            }
            var c = a.prototype;
            c.hasInteractionIDs = function(a) {
                __p && __p();
                for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var d;
                    if (b) {
                        if (c >= a.length) break;
                        d = a[c++]
                    } else {
                        c = a.next();
                        if (c.done) break;
                        d = c.value
                    }
                    d = d;
                    if (!this.$6.includes(d)) return !1
                }
                return !0
            };
            c.__registerInteractionWePotentiallyEagerlyExecutedFor = function(a) {
                this.$2.push(a)
            };
            c.attributeToCurrentlyActiveInteraction = function() {
                __p && __p();
                var a = this,
                    b = this.handle;
                if (!b) return;
                var c = function() {
                    __p && __p();
                    if (e) {
                        if (f >= d.length) return "break";
                        g = d[f++]
                    } else {
                        f = d.next();
                        if (f.done) return "break";
                        g = f.value
                    }
                    var c = g;
                    if (c.hasActiveReferenceCountingHandle()) {
                        c.addEagerExecution(b, a.$1, a.$3.slice());
                        a.interaction = c;
                        a.$4.forEach(function(a) {
                            return a(c)
                        });
                        a.$4 = [];
                        return "break"
                    }
                };
                for (var d = this.$2, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var g, h = c();
                    if (h === "break") break
                }
            };
            c.tagAsInteractionID = function(a) {
                this.$3.push(a)
            };
            c.withInteraction = function(a) {
                !this.interaction ? this.$4.push(a) : a(this.interaction)
            };
            c.isActive = function() {
                return !!(this.handle && this.handle.isInsideContinuationExecution())
            };
            c.onFinish = function(a) {
                this.$5.push(a)
            };
            c.finish = function() {
                delete h[this.id], this.$5.forEach(function(a) {
                    return a()
                }), this.$5 = []
            };
            return a
        }();
    a = {
        declareEagerExecution: function(a, b, c) {
            a = new k(a, c, b);
            var d = a.id;
            return function() {
                h[d] && h[d].attributeToCurrentlyActiveInteraction()
            }
        },
        getEagerExecution: function(a, b) {
            var c = a.map(function(a) {
                return j[a]
            }).filter(function(b) {
                return b && b.hasInteractionIDs(a)
            });
            b = c.filter(function(a, b) {
                return b === c.indexOf(a)
            });
            return b.length == 1 ? b[0] : null
        },
        getActiveExecutions: function() {
            return Object.values(h).filter(function(a) {
                return a.handle && a.handle.isInsideContinuationExecution()
            })
        }
    };
    e.exports = a
}), null);
__d("EventProfilerInteractionTracker", ["Bootloader", "BrowserEventBasedInteraction", "EventProfilerEagerExecution", "EventConfig", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [],
        h = b("EventConfig").profile_eager_execution && b("EventConfig").manual_instrumentation;
    a = {
        createNewInteraction: function(a, c, d, e) {
            __p && __p();
            if (!a.length) return null;
            var f = e && e.sampleWeight || 0,
                i;
            (h || d || f) && (i = new(b("BrowserEventBasedInteraction"))(a, c, 1 / (f || d)));
            if (i && e) {
                var j = e;
                j.__registerInteractionWePotentiallyEagerlyExecutedFor(i);
                i.registerOnBeforeSend(function() {
                    i && i !== j.interaction && (d ? i.setExtraSampleRate(1 / d) : i.disable())
                })
            }
            if (i) {
                var k = i;
                g.push(i);
                i.onReferenceCountedExecutionFinished(function() {
                    var a = g.indexOf(k);
                    a !== -1 && g.splice(a, 1)
                })
            }
            f === 0 && d === 0 && i && i.disable();
            return d === 0 ? null : i
        },
        markManualStart: function(a, c, d) {
            __p && __p();
            if (!h) return {
                markManualEnd: function() {}
            };
            var e = g.filter(function(b) {
                    return b.hasInteractionIDs(a) && b.getEventType() === c
                }),
                f = b("EventProfilerEagerExecution").getActiveExecutions();
            if (e.length === 1) return i(e[0], a, d);
            else if (f.length === 1) return l(f[0], a, d);
            else {
                e.forEach(function(a) {
                    a.trace().addStringAnnotation("has_manual_instrumentation_conflict", "1")
                });
                return j(a, e.length + f.length, d)
            }
        }
    };

    function i(a, b, c) {
        a.markManualStart(b, c);
        return {
            markManualEnd: function(b) {
                a.markManualEnd(b)
            }
        }
    }

    function j(a, c, d) {
        var e = d || b("performanceAbsoluteNow")();
        return {
            markManualEnd: function(d) {
                d = d || b("performanceAbsoluteNow")();
                k(e, d, a, c)
            }
        }
    }

    function k(a, c, d, e) {
        var f = {
            manual_instrumentation_start: "" + a,
            manual_instrumentation_end: "" + c,
            manual_instrumentation_duration: "" + (c - a),
            manual_instrumentation_start_reference_counted: "0",
            manual_instrumentation_end_reference_counted: "0",
            lite_weight: "1"
        };
        e && (f.manual_instrumentation_conflicts = "" + e);
        b("Bootloader").loadModules(["TimeSliceInteractionsLiteTypedLogger", "PerfXSharedFields"], function(a, b) {
            new a().setActionName("Event").setTraceAnnotations({
                stringProps: f,
                setProps: {},
                vectorProps: {
                    manual_instrumentation_interaction_ids: d
                }
            }).updateData(b.getCommonData()).logVital()
        }, "EventProfilerInteractionTracker")
    }

    function l(a, c, d) {
        __p && __p();
        var e = d || b("performanceAbsoluteNow")(),
            f, g, h, i = !1;

        function j() {
            f && g !== void 0 && !i && h !== void 0 && (i = !0, g ? g.setManualStartAndEnd(c, e, f, h) : k(e, f, c))
        }
        var l;
        a.withInteraction(function(a) {
            l = a, a.onReferenceCountedExecutionFinished(function() {
                a.hasInteractionIDs(c) ? g = a : g = null, j()
            })
        });
        a.onFinish(function() {
            l || (g = !1, j())
        });
        return {
            markManualEnd: function(c) {
                if (f) return;
                h = a.isActive() || l && l.hasActiveReferenceCountingHandle() || !1;
                f = c || b("performanceAbsoluteNow")();
                j()
            }
        }
    }
    e.exports = a
}), null);
__d("EventProfilerSampler", ["EventConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = b("EventConfig").interaction_boost,
        h = b("EventConfig").event_types,
        i = b("EventConfig").sampling || {},
        j = b("EventConfig").page_sampling_boost || 1,
        k = [];
    Object.keys(b("EventConfig").interaction_regexes).forEach(function(a) {
        k.push({
            id: a,
            regex: new RegExp(b("EventConfig").interaction_regexes[a])
        })
    });
    a = "click";
    c = "mouseup";
    var l = [a, c],
        m = a;
    d = {
        canSample: function(a) {
            return !!i[a]
        },
        getEventSampleWeights: function(a, b) {
            a.__samplingWeights == void 0 && (a.__samplingWeights = {
                interaction: n(this.getInteractionWeight(a, b)),
                event: n(this.getEventWeight(a))
            });
            return a.__samplingWeights
        },
        getInteractionWeight: function(a, b) {
            __p && __p();
            a = a.type in i ? i[a.type] : 1;
            if (!a || !b || !b.length) return 0;
            var c = 1;
            for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= b.length) break;
                    f = b[e++]
                } else {
                    e = b.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                if (g[f]) {
                    c = g[f];
                    break
                }
            }
            return a * i.__interactionDefault / c
        },
        getEventWeight: function(a) {
            a = a.type in i ? i[a.type] : 1;
            a /= j;
            return a * i.__eventDefault
        },
        getEventInteractionIDs: function(a, b) {
            __p && __p();
            if (l.indexOf(a) === -1) return [];
            var c = [];
            for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= b.length) break;
                    f = b[e++]
                } else {
                    e = b.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                for (var g = 0; g < k.length; g++) {
                    var i = k[g];
                    if (i.regex.test(f)) {
                        var j = h[i.id];
                        if (j) {
                            if (j.indexOf(a) === -1) continue
                        } else if (a !== m) continue;
                        c.push(i.id)
                    }
                }
            }
            return c
        }
    };

    function n(a) {
        if (a === 0) return 0;
        var b = i.__min || 1;
        a = Math.round(Math.max(b, a));
        return Math.random() * a < 1 ? a : 0
    }
    e.exports = d
}), null);
__d("SubscriptionList", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a, b) {
            this.$1 = [], this.$2 = a, this.$3 = b
        }
        var b = a.prototype;
        b.add = function(a) {
            var b = this,
                c = {
                    callback: a
                };
            this.$1.push(c);
            this.$2 && this.$1.length === 1 && this.$2();
            return {
                remove: function() {
                    var a = b.$1.indexOf(c);
                    a !== -1 || g(0, 298);
                    b.$1.splice(a, 1);
                    b.$3 && b.$1.length === 0 && b.$3()
                }
            }
        };
        b.getCallbacks = function() {
            return this.$1.map(function(a) {
                return a.callback
            })
        };
        b.fireCallbacks = function(a) {
            this.getCallbacks().forEach(function(b) {
                b(a)
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("TimeSpentPageTransitionCause", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        PAGE_LOAD: "load",
        PAGE_UNLOAD: "unload",
        TRANSITION: "transition",
        OPEN_OVERLAY_VIEW: "open_overlay_view",
        REPLACE_OVERLAY_VIEW: "replace_overlay_view",
        CLOSE_OVERLAY_VIEW: "close_overlay_view"
    })
}), null);
__d("WebStorage", ["Env", "FBLogger", "ex"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = {},
        h = {};

    function i(a, c, d) {
        if (b("Env").no_cookies === !0 || b("Env").defer_cookies === !0) return null;
        Object.prototype.hasOwnProperty.call(g, d) || (g[d] = c(d));
        return g[d]
    }

    function j(a) {
        try {
            return window[a]
        } catch (a) {
            b("FBLogger")("web_storage").warn("Failed to get storage for read %s", a.message)
        }
        return null
    }

    function k(a) {
        __p && __p();
        try {
            a = window[a];
            if (a) {
                var c = "__test__" + Date.now();
                a.setItem(c, "");
                a.removeItem(c)
            }
            return a
        } catch (a) {
            c = "";
            b("FBLogger")("web_storage").warn("Failed to get storage %s" + c, a.message)
        }
        return null
    }

    function l(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) b.push(a.key(c) || "");
        return b
    }

    function a(a, c, d) {
        __p && __p();
        if (a == null) return new Error("storage cannot be null");
        var e = null;
        try {
            a.setItem(c, d)
        } catch (g) {
            var f = l(a).map(function(b) {
                var c = (a.getItem(b) || "").length;
                return b + "(" + c + ")"
            });
            e = new Error(b("ex")("%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s", g.name ? g.name + ": " : "", c, d.length, f.join()));
            b("FBLogger")("web_storage").catching(e).mustfix("Error set item")
        }
        return e
    }
    c = {
        getLocalStorage: function() {
            return i(g, k, "localStorage")
        },
        getSessionStorage: function() {
            return i(g, k, "sessionStorage")
        },
        getLocalStorageForRead: function() {
            return i(h, j, "localStorage")
        },
        getSessionStorageForRead: function() {
            return i(h, j, "sessionStorage")
        },
        setItemGuarded: a
    };
    e.exports = c
}), null);
__d("isInIframe", [], (function(a, b, c, d, e, f) {
    var g = window != window.top;

    function a() {
        return g
    }
    e.exports = a
}), null);
__d("ScriptPath", ["ErrorUtils", "SubscriptionList", "TimeSlice", "TimeSpentPageTransitionCause", "WebStorage", "isInIframe"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = "sp_pi",
        h = 1e3 * 30,
        i = null,
        j = null,
        k = new(b("SubscriptionList"))(),
        l = null,
        m = [],
        n = b("TimeSlice").guard(function(a, c) {
            k.getCallbacks().forEach(function(d) {
                b("ErrorUtils").applyWithGuard(function() {
                    d({
                        source: i,
                        dest: j,
                        cause: a,
                        extraData: c
                    })
                })
            })
        }, "ScriptPath Notifying callbacks", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        });

    function o() {
        return j ? j.scriptPath : void 0
    }

    function p() {
        var a = b("WebStorage").getSessionStorage();
        if (!a || b("isInIframe")()) return;
        b("WebStorage").setItemGuarded(a, g, JSON.stringify({
            pageInfo: j,
            clickPoint: l,
            time: Date.now()
        }))
    }

    function a() {
        var a = b("WebStorage").getSessionStorageForRead();
        if (!a) return;
        var c = a.getItem(g);
        if (c) {
            c = JSON.parse(c);
            c && (c.time < Date.now() - h && (a = b("WebStorage").getSessionStorage(), a && a.removeItem(g)), j = c.pageInfo, l = c.clickPoint, j && (j.restored = !0))
        }
    }
    a();
    c = {
        set: function(a, b, c) {
            i = j, j = {
                scriptPath: a,
                categoryToken: b,
                extraData: c || {}
            }, m = [], window._script_path = a, n()
        },
        openOverlayView: function(a, c, d) {
            if (!a) return;
            var e = m.length;
            (e === 0 || m[e - 1] !== a) && (i = Object.assign({}, j), j && (j.topViewEndpoint = a), d && d.replaceTopOverlay && e > 0 ? (m[e - 1] = a, n(b("TimeSpentPageTransitionCause").REPLACE_OVERLAY_VIEW, c)) : (m.push(a), n(b("TimeSpentPageTransitionCause").OPEN_OVERLAY_VIEW, c)))
        },
        closeOverlayView: function(a, c) {
            a = m.lastIndexOf(a);
            if (a === -1) return;
            i = Object.assign({}, j);
            j && (a > 0 ? j.topViewEndpoint = m[a - 1] : j.topViewEndpoint = null);
            m = m.slice(0, a);
            n(b("TimeSpentPageTransitionCause").CLOSE_OVERLAY_VIEW, c)
        },
        setClickPointInfo: function(a) {
            l = a, p()
        },
        getClickPointInfo: function() {
            return l
        },
        getScriptPath: o,
        getCategoryToken: function() {
            return j ? j.categoryToken : void 0
        },
        getEarlyFlushPage: function() {
            var a;
            return (a = j) == null ? void 0 : (a = a.extraData) == null ? void 0 : a.ef_page
        },
        getTopViewEndpoint: function() {
            var a = m.length;
            return a > 0 ? m[a - 1] : o()
        },
        getPageInfo: function() {
            return j
        },
        getSourcePageInfo: function() {
            return i
        },
        subscribe: function(a) {
            return k.add(b("TimeSlice").guard(a, "ScriptPath.subscribe"))
        },
        shutdown: function() {
            p()
        }
    };
    e.exports = c
}), null);
__d("VersionRange", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = /\./,
        i = /\|\|/,
        j = /\s+\-\s+/,
        k = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
        l = /^(\d*)(.*)/;

    function m(a, b) {
        var c = a.split(i);
        if (c.length > 1) return c.some(function(a) {
            return D.contains(a, b)
        });
        else {
            a = c[0].trim();
            return n(a, b)
        }
    }

    function n(a, b) {
        a = a.split(j);
        a.length > 0 && a.length <= 2 || g(0, 3072);
        if (a.length === 1) return o(a[0], b);
        else {
            var c = a[0];
            a = a[1];
            x(c) && x(a) || g(0, 3073);
            return o(">=" + c, b) && o("<=" + a, b)
        }
    }

    function o(a, b) {
        __p && __p();
        a = a.trim();
        if (a === "") return !0;
        b = b.split(h);
        a = v(a);
        var c = a.modifier;
        a = a.rangeComponents;
        switch (c) {
            case "<":
                return p(b, a);
            case "<=":
                return q(b, a);
            case ">=":
                return s(b, a);
            case ">":
                return t(b, a);
            case "~":
            case "~>":
                return u(b, a);
            default:
                return r(b, a)
        }
    }

    function p(a, b) {
        return C(a, b) === -1
    }

    function q(a, b) {
        a = C(a, b);
        return a === -1 || a === 0
    }

    function r(a, b) {
        return C(a, b) === 0
    }

    function s(a, b) {
        a = C(a, b);
        return a === 1 || a === 0
    }

    function t(a, b) {
        return C(a, b) === 1
    }

    function u(a, b) {
        var c = b.slice();
        b = b.slice();
        b.length > 1 && b.pop();
        var d = b.length - 1,
            e = parseInt(b[d], 10);
        w(e) && (b[d] = e + 1 + "");
        return s(a, c) && p(a, b)
    }

    function v(a) {
        a = a.split(h);
        var b = a[0].match(k);
        b || g(0, 3074);
        return {
            modifier: b[1],
            rangeComponents: [b[2]].concat(a.slice(1))
        }
    }

    function w(a) {
        return !isNaN(a) && isFinite(a)
    }

    function x(a) {
        return !v(a).modifier
    }

    function y(a, b) {
        for (var c = a.length; c < b; c++) a[c] = "0"
    }

    function z(a, b) {
        __p && __p();
        a = a.slice();
        b = b.slice();
        y(a, b.length);
        for (var c = 0; c < b.length; c++) {
            var d = b[c].match(/^[x*]$/i);
            if (d) {
                b[c] = a[c] = "0";
                if (d[0] === "*" && c === b.length - 1)
                    for (var d = c; d < a.length; d++) a[d] = "0"
            }
        }
        y(b, a.length);
        return [a, b]
    }

    function A(a, b) {
        var c = a.match(l)[1],
            d = b.match(l)[1];
        c = parseInt(c, 10);
        d = parseInt(d, 10);
        if (w(c) && w(d) && c !== d) return B(c, d);
        else return B(a, b)
    }

    function B(a, b) {
        typeof a === typeof b || g(0, 3075);
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0
    }

    function C(a, b) {
        a = z(a, b);
        b = a[0];
        a = a[1];
        for (var c = 0; c < a.length; c++) {
            var d = A(b[c], a[c]);
            if (d) return d
        }
        return 0
    }
    var D = {
        contains: function(a, b) {
            return m(a.trim(), b.trim())
        }
    };
    e.exports = D
}), null);
__d("mapObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = Object.prototype.hasOwnProperty;

    function h(a, b, c) {
        if (!a) return null;
        var d = {};
        for (var e in a) {
            var f = e;
            g.call(a, f) && (d[f] = b.call(c, a[f], f, a))
        }
        return d
    }

    function a(a, b, c) {
        return h(a, b, c)
    }

    function b(a, b, c) {
        return h(a, b, c)
    }
    h.untyped = a;
    h.shape = b;
    e.exports = h
}), null);
__d("memoizeStringOnly", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = {};
        return function(c) {
            Object.prototype.hasOwnProperty.call(b, c) || (b[c] = a.call(this, c));
            return b[c]
        }
    }
    e.exports = a
}), null);
__d("UserAgent", ["UserAgentData", "VersionRange", "mapObject", "memoizeStringOnly"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g(a, c, d, e) {
        __p && __p();
        if (a === d) return !0;
        if (!d.startsWith(a)) return !1;
        d = d.slice(a.length);
        if (c) {
            d = e ? e(d) : d;
            return b("VersionRange").contains(d, c)
        }
        return !1
    }

    function h(a) {
        return b("UserAgentData").platformName === "Windows" ? a.replace(/^\s*NT/, "") : a
    }
    a = {
        isBrowser: function(a) {
            return g(b("UserAgentData").browserName, b("UserAgentData").browserFullVersion, a)
        },
        isBrowserArchitecture: function(a) {
            return g(b("UserAgentData").browserArchitecture, null, a)
        },
        isDevice: function(a) {
            return g(b("UserAgentData").deviceName, null, a)
        },
        isEngine: function(a) {
            return g(b("UserAgentData").engineName, b("UserAgentData").engineVersion, a)
        },
        isPlatform: function(a) {
            return g(b("UserAgentData").platformName, b("UserAgentData").platformFullVersion, a, h)
        },
        isPlatformArchitecture: function(a) {
            return g(b("UserAgentData").platformArchitecture, null, a)
        }
    };
    e.exports = b("mapObject")(a, b("memoizeStringOnly"))
}), null);
__d("cx", [], (function(a, b, c, d, e, f) {
    function a(a) {
        throw new Error("cx: Unexpected class transformation.")
    }
    e.exports = a
}), null);
__d("getParentClassesForEventProfiler", ["cx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function h(a) {
        __p && __p();
        if (!a || !(a instanceof HTMLElement)) return "";
        var b = a.id,
            c = a.nodeName,
            d = a.getAttribute("class");
        c = c ? c.replace(/^#/, "") : "unknown";
        b = b ? "#" + b : "";
        d = d ? " " + d.replace(/\s+/g, " ").trim() : "";
        if (a.getAttribute("rel") === "theater") {
            a = "_342u";
            d = d.length ? d + " " + a : a
        }
        return ":" + c + b + d
    }

    function a(a) {
        var b = [];
        while (a && a instanceof HTMLElement) b.push(h(a)), a = a.parentElement;
        b.reverse();
        return b
    }
    e.exports = a
}), null);
__d("uniqueID", [], (function(a, b, c, d, e, f) {
    var g = "js_",
        h = 36,
        i = 0;

    function a() {
        return g + (i++).toString(h)
    }
    e.exports = a
}), null);
__d("EventProfilerImpl", ["Arbiter", "Bootloader", "BrowserEventBasedInteraction", "CurrentEventMeta", "EventConfig", "EventProfilerAdsSessionProvider", "EventProfilerEagerExecution", "EventProfilerInteractionTracker", "EventProfilerSampler", "Parent", "ScriptPath", "TimeSlice", "TimeSliceAutoclosedInteraction", "UserAgent", "getParentClassesForEventProfiler", "gkx", "performanceAbsoluteNow", "requestAnimationFrameAcrossTransitions", "setTimeoutAcrossTransitions", "uniqueID"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {},
        h = {},
        i = {},
        j = !1,
        k = 0;
    c = b("gkx")("849406");
    var l = new Set(["click", "keydown", "mousewheel", "scroll"].concat(c ? ["mouseup", "mousedown", "blur"] : [])),
        m = null,
        n = null,
        o = null,
        p = !1;
    b("Arbiter").subscribe("perf_nub_interaction_trace", function(a, b) {
        p = !0
    });
    var q = {
        __wrapEventListenHandler: function(a) {
            __p && __p();
            return b("EventConfig").disable_event_profiler ? a : function(c, d) {
                __p && __p();
                var e = this;
                if (!b("EventProfilerSampler").canSample(c)) return a.call(this, c, d);
                var f, q = {
                        interaction: 0,
                        event: 0
                    },
                    v = b("performanceAbsoluteNow")();
                d.id = d.id || b("uniqueID")();
                var w = d.id;
                b("CurrentEventMeta").__setCurrentEventID(w);
                var x = i[w],
                    y = null;
                if (h[w] === void 0 && !x) {
                    y = b("getParentClassesForEventProfiler")(d.target);
                    var z = b("EventProfilerSampler").getEventInteractionIDs(c, y);
                    f = b("EventProfilerEagerExecution").getEagerExecution(z, c);
                    p && c === "click" ? (z.push("PerfNubTrace"), q = {
                        interaction: 1,
                        event: 1
                    }, p = !1) : q = u(d, z);
                    o != null && o.beforeHandlers(w, c);
                    m = b("EventProfilerInteractionTracker").createNewInteraction(z, c, q.interaction, f);
                    z = a.call(this, c, d);
                    i[w] = b("TimeSlice").getGuardedContinuation("Event Bubble Continuation")
                } else q = u(d, []), z = x(function() {
                    i[w] = b("TimeSlice").getGuardedContinuation("Event Bubble Continuation");
                    return a.call(e, c, d)
                });
                f = b("performanceAbsoluteNow")();
                if (h[w] === void 0) {
                    y = y;
                    x = s(d);
                    x = x || v;
                    var A = Math.max(v - x, 0),
                        B = t(d.target, "data-referrer"),
                        C = null;
                    b("UserAgent").isBrowser("Chrome") && (C = !!d.cancelable);
                    var D = C && (!!d.deliberateSync || b("UserAgent").isBrowser("Chrome < 51"));
                    h[w] = {
                        event_name: c,
                        event_start_ms: Math.round(x),
                        main_thread_wait_ms: Math.round(A),
                        event_handlers_runtime_ms: 0,
                        script_path: b("ScriptPath").getScriptPath() || "<unknown>",
                        request_animation_frame_wait_ms: 0,
                        set_timeout_wait_ms: 0
                    };
                    g[w] = {
                        event_target_raw: y,
                        weight: q.event,
                        cancelable: !!C,
                        deliberate_sync: !!D,
                        ad_account_id: n,
                        event_end_ms: 0
                    };
                    A = b("EventProfilerAdsSessionProvider").sessionID;
                    A && (g[w].ads_session_id = A);
                    var E = !1;
                    l.has(c) && (!j && k < x && (j = !0, E = !0), g[w].is_first_in_frame = E, g[w].is_first_overlapping = E, o && o.eventListener(c, d.target));
                    if (m) {
                        q = m.trace();
                        q.addVectorAnnotation("event_target_stack", y).addVectorAnnotation("pagelets", B)
                    }
                    var F = m;
                    b("requestAnimationFrameAcrossTransitions")(function() {
                        __p && __p();
                        var a;
                        m = null;
                        var d = b("performanceAbsoluteNow")();
                        h[w].request_animation_frame_wait_ms = Math.round(d - g[w].event_end_ms);
                        delete g[w].event_end_ms;
                        var e = !1;

                        function f() {
                            __p && __p();
                            if (e) return;
                            e = !0;
                            var a = b("performanceAbsoluteNow")();
                            h[w].set_timeout_wait_ms = Math.round(a - d);
                            r(w, v, a);
                            l.has(c) && E && (j = !1, k = a);
                            a = i[w];
                            a && (b("TimeSlice").cancel(a), delete i[w]);
                            F && F.inform("TTI", {
                                isPointOfInterest: !0
                            });
                            delete h[w];
                            delete g[w]
                        }((a = o) == null ? void 0 : a.doubleRAFPaintHeuristic) === !0 && b("requestAnimationFrameAcrossTransitions")(f);
                        b("setTimeoutAcrossTransitions")(f, 0)
                    })
                }
                h[w].event_handlers_runtime_ms += f - v;
                g[w].event_end_ms = f;
                o != null && o.afterEachHandler(w, h[w]);
                b("CurrentEventMeta").__setCurrentEventID(null);
                m && m.informPointWithOverride("tti_ts", {
                    isPointOfInterest: !0
                });
                return z
            }
        },
        tagCurrentActiveInteractionsAs: function(a) {
            q.getActiveInteractions().forEach(function(b) {
                b.tagAsInteractionID(a)
            }), b("EventProfilerEagerExecution").getActiveExecutions().forEach(function(b) {
                return b.tagAsInteractionID(a)
            })
        },
        informManualInteractionTimestamp: function(a, b, c) {},
        markManualStart: function(a, c, d) {
            return b("EventProfilerInteractionTracker").markManualStart(a, c, d)
        },
        getActiveInteractions: function() {
            return b("TimeSliceAutoclosedInteraction").getInteractionsActiveRightNow().filter(function(a) {
                return a instanceof b("BrowserEventBasedInteraction") && a.isEnabled()
            })
        },
        informPointOnActiveInteractions: function(a, b, c) {
            q.getActiveInteractions().map(function(d) {
                d = d.inform(a, b);
                c && d.addStringAnnotation("is_goal_point", "1")
            })
        },
        notifyRunningEagerInteraction: function(a, c) {
            var d = u({
                type: c
            }, a);
            return b("EventProfilerEagerExecution").declareEagerExecution(a, c, d.interaction)
        },
        setCurrentAdAccountId: function(a) {
            n = a
        },
        setAdsConfig: function(a) {
            o = a
        }
    };

    function r(a, c, d) {
        c = h[a];
        c.event_handlers_runtime_ms = Math.round(c.event_handlers_runtime_ms);
        var e = Object.assign({}, h[a], g[a]);
        o != null && o.beforeLog(a, e);
        e.weight && b("Bootloader").loadModules(["WebSpeedInteractionsTypedLogger", "PerfXSharedFields"], function(a, b) {
            b.addCommonValues(e), new a().updateData(e).log()
        }, "EventProfilerImpl");
        b("CurrentEventMeta").__informEventDataReady(a, h[a])
    }
    var s = function() {
        function b(a) {
            return null
        }
        if (!a.performance || !a.performance.now || !a.performance.timing || !a.performance.timing.navigationStart) return b;
        var c = a.performance.timing.navigationStart,
            d = a.CustomEvent && (typeof a.CustomEvent === "function" || a.CustomEvent.toString().indexOf("CustomEventConstructor") > -1);
        d = d ? new a.CustomEvent("test").timeStamp : a.document.createEvent("KeyboardEvent").timeStamp;
        return d && d <= a.performance.now() ? function(a) {
            return a.timeStamp + c
        } : b
    }();

    function t(a, c) {
        var d = [];
        while (a && a instanceof HTMLElement) {
            var e = a.getAttribute(c);
            e && d.push(e);
            a = b("Parent").byAttribute(a.parentNode, c)
        }
        return d.reverse()
    }

    function u(a, c) {
        return o != null ? o.getEventSampleWeights(a, c) : b("EventProfilerSampler").getEventSampleWeights(a, c)
    }
    e.exports = q
}), null);
__d("FBLogMessage", ["ErrorUtils", "FBLoggerMetadata", "TAAL", "TAALOpcodes", "erx", "ex", "sprintf"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = {
            mustfix: "error",
            warn: "warn",
            info: "log"
        },
        h = b("ex"),
        i = function a(b) {
            return function(c) {
                b > 0 && (c(), a(b - 1)(c))
            }
        };
    a = function() {
        __p && __p();

        function a(a) {
            this.project = a, this.metadata = new(b("FBLoggerMetadata"))(), this.taalOpcodes = []
        }
        var c = a.prototype;
        c.$1 = function(c, d) {
            __p && __p();
            var e = this,
                f = 2;
            if (d === void 0) {
                var j = new a("fblogger");
                i(f)(function() {
                    return j.blameToPreviousFrame()
                });
                j.mustfix("You provided an undefined format string to FBLogger, dropping log line");
                return
            }
            var k;
            for (var l = arguments.length, m = new Array(l > 2 ? l - 2 : 0), n = 2; n < l; n++) m[n - 2] = arguments[n];
            if (this.error) {
                k = this.error;
                var o = d + " from %s: %s";
                m.push(k.name);
                m.push(k.message ? b("sprintf").apply(null, b("erx")(k.message)) : "");
                k.message = h.apply(void 0, [o].concat(m))
            } else {
                i(f)(function() {
                    return e.taalOpcodes.unshift(b("TAALOpcodes").PREVIOUS_FRAME)
                });
                if (this.taalOpcodes) {
                    var p = b("TAAL").applyOpcodes(d, this.taalOpcodes);
                    k = new Error(h.apply(void 0, [p].concat(m)))
                } else k = new Error(h.apply(void 0, [d].concat(m)))
            }
            if (this.error && k.name.startsWith("<level:")) {
                var q = new a("fblogger");
                i(f)(function() {
                    return q.blameToPreviousFrame()
                });
                q.warn("Double logging detected")
            }
            var r = "FBLogger" + (this.error ? " caught " + k.name : "");
            k.name = b("sprintf")("<level:%s> <name:%s> %s", c, this.project, r);
            k = b("ErrorUtils").normalizeError(k);
            this.metadata.isEmpty() || (k.fbloggerMetadata = this.metadata.formatMetadata());
            var s = g[c];
            k.type = s;
            if (this.error && (this.taalOpcodes && this.taalOpcodes.length)) {
                var t = new a("fblogger");
                i(f)(function() {
                    return t.blameToPreviousFrame()
                });
                t.warn("Blame helpers do not work with catching")
            }
            b("ErrorUtils").reportError(k, !1, "FBLOGGER")
        };
        c.mustfix = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["mustfix", a].concat(c))
        };
        c.warn = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["warn", a].concat(c))
        };
        c.info = function(a) {};
        c.debug = function(a) {};
        c.catching = function(b) {
            !(b instanceof Error) ? new a("fblogger").blameToPreviousFrame().warn("Catching non-Error object is not supported"): this.error = b;
            return this
        };
        c.blameToPreviousFile = function() {
            this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FILE);
            return this
        };
        c.blameToPreviousFrame = function() {
            this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FRAME);
            return this
        };
        c.blameToPreviousDirectory = function() {
            this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_DIR);
            return this
        };
        c.addMetadata = function(a, b, c) {
            this.metadata.addMetadata(a, b, c);
            return this
        };
        return a
    }();
    e.exports = a
}), null);
__d("FBLoggerImpl", ["FBLoggerMetadata", "FBLogMessage"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        return new(b("FBLogMessage"))(a)
    };
    a.addGlobalMetadata = function(a, c, d) {
        b("FBLoggerMetadata").addGlobalMetadata(a, c, d)
    };
    e.exports = a
}), null);
__d("getActiveElement", [], (function(a, b, c, d, e, f) {
    function a(a) {
        a === void 0 && (a = document);
        if (typeof a === "undefined") return null;
        try {
            return a.activeElement || a.body
        } catch (b) {
            return a.body
        }
    }
    e.exports = a
}), null);
__d("FocusListener", ["Arbiter", "CSS", "Parent", "getActiveElement"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        expandInput: function(a) {
            b("CSS").addClass(a, "child_is_active"), b("CSS").addClass(a, "child_is_focused"), b("CSS").addClass(a, "child_was_focused"), b("Arbiter").inform("reflow")
        }
    };

    function h(a, c) {
        if (c.getAttribute("data-silentfocuslistener")) return;
        var d = b("Parent").byClass(c, "focus_target");
        d && ("focus" == a || "focusin" == a ? g.expandInput(d) : (c.value === "" && b("CSS").removeClass(d, "child_is_active"), b("CSS").removeClass(d, "child_is_focused")))
    }
    c = b("getActiveElement")();
    c && h("focus", c);

    function a(a) {
        a = a || window.event, h(a.type, a.target || a.srcElement)
    }
    d = document.documentElement;
    d.addEventListener ? (d.addEventListener("focus", a, !0), d.addEventListener("blur", a, !0)) : (d.attachEvent("onfocusin", a), d.attachEvent("onfocusout", a));
    e.exports = g
}), null);
__d("getMarkupWrap", ["invariant", "ExecutionEnvironment"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = b("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null,
        i = {};
    c = [1, '<select multiple="true">', "</select>"];
    d = [1, "<table>", "</table>"];
    f = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
    var j = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
        k = {
            "*": [1, "?<div>", "</div>"],
            area: [1, "<map>", "</map>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            param: [1, "<object>", "</object>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            optgroup: c,
            option: c,
            caption: d,
            colgroup: d,
            tbody: d,
            tfoot: d,
            thead: d,
            td: f,
            th: f
        };
    b = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
    b.forEach(function(a) {
        k[a] = j, i[a] = !0
    });

    function a(a) {
        a = a;
        !h && g(0, 144);
        Object.prototype.hasOwnProperty.call(k, a) || (a = "*");
        Object.prototype.hasOwnProperty.call(i, a) || (a === "*" ? h.innerHTML = "<link />" : h.innerHTML = "<" + a + "></" + a + ">", i[a] = !h.firstChild);
        return i[a] ? k[a] : null
    }
    e.exports = a
}), null);
__d("createNodesFromMarkup", ["invariant", "ExecutionEnvironment", "getMarkupWrap"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = b("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null,
        i = /^\s*<(\w+)/;

    function j(a) {
        a = a.match(i);
        return a && a[1].toLowerCase()
    }

    function a(a, c) {
        __p && __p();
        var d = h;
        !h && g(0, 5001);
        var e = j(a);
        e = e && b("getMarkupWrap")(e);
        if (e) {
            d.innerHTML = e[1] + a + e[2];
            e = e[0];
            while (e--) d = d.lastChild
        } else d.innerHTML = a;
        e = d.getElementsByTagName("script");
        e.length && (c || g(0, 5002), Array.from(e).forEach(c));
        a = Array.from(d.childNodes);
        while (d.lastChild) d.removeChild(d.lastChild);
        return a
    }
    e.exports = a
}), null);
__d("evalGlobal", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        __p && __p();
        if (typeof a !== "string") throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");
        if (!a) return;
        var b = document.createElement("script");
        try {
            b.appendChild(document.createTextNode(a))
        } catch (c) {
            b.text = a
        }
        a = document.getElementsByTagName("head")[0] || document.documentElement;
        a.appendChild(b);
        a.removeChild(b)
    }
    e.exports = a
}), null);
__d("HTML", ["invariant", "Bootloader", "createNodesFromMarkup", "emptyFunction", "evalGlobal"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = /(<(\w+)[^>]*?)\/>/g,
        i = {
            abbr: !0,
            area: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            link: !0,
            meta: !0,
            param: !0
        };
    a = function() {
        "use strict";
        __p && __p();

        function a(c) {
            __p && __p();
            c && typeof c.__html === "string" && (c = c.__html);
            if (!(this instanceof a)) return c instanceof a ? c : new a(c);
            if (c) {
                var d = typeof c;
                d === "string" || g(0, 277, d)
            }
            this._markup = c || "";
            this._defer = !1;
            this._nodes = null;
            this._inlineJS = b("emptyFunction");
            this._rootNode = null
        }
        var c = a.prototype;
        c.toString = function() {
            return this._markup
        };
        c.getContent = function() {
            return this._markup
        };
        c.getNodes = function() {
            this._fillCache();
            return this._nodes
        };
        c.getRootNode = function() {
            __p && __p();
            this._rootNode && g(0, 278);
            var a = this.getNodes();
            if (a.length === 1) this._rootNode = a[0];
            else {
                var b = document.createDocumentFragment();
                for (var c = 0; c < a.length; c++) b.appendChild(a[c]);
                this._rootNode = b
            }
            return this._rootNode
        };
        c.getAction = function() {
            var a = this;
            this._fillCache();
            var b = function() {
                a._inlineJS()
            };
            return this._defer ? function() {
                setTimeout(b, 0)
            } : b
        };
        c._fillCache = function() {
            __p && __p();
            if (this._nodes !== null) return;
            if (!this._markup) {
                this._nodes = [];
                return
            }
            var a = this._markup.replace(h, function(a, b, c) {
                    return i[c.toLowerCase()] ? a : b + "></" + c + ">"
                }),
                c = null;
            a = b("createNodesFromMarkup")(a, function(a) {
                c = c || [], c.push(a.src ? b("Bootloader").requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(b("Bootloader"), a.src) : b("evalGlobal").bind(null, a.innerHTML)), a.parentNode.removeChild(a)
            });
            c && (this._inlineJS = function() {
                for (var a = 0; a < c.length; a++) c[a]()
            });
            this._nodes = a
        };
        c.setDeferred = function(a) {
            this._defer = !!a;
            return this
        };
        a.isHTML = function(b) {
            return !!b && (b instanceof a || b.__html !== void 0)
        };
        a.replaceJSONWrapper = function(b) {
            return b && b.__html !== void 0 ? new a(b.__html) : b
        };
        return a
    }();
    e.exports = a
}), null);
__d("HardwareCSS", [], (function(a, b, c, d, e, f) {
    function g() {
        if (window != null && window.document && document.body) {
            var a = document.body,
                b = a.getAttribute("class") || "";
            window.navigator && window.navigator.hardwareConcurrency && window.navigator.hardwareConcurrency >= 4 ? a.setAttribute("class", b + " cores-gte4") : a.setAttribute("class", b + " cores-lt4")
        }
    }
    var h = {
        init: function() {
            g(), h.init = function() {}
        }
    };
    e.exports = h
}), null);
__d("InitialJSLoader", ["Arbiter", "Bootloader", "PageEvents", "Run", "ServerJS", "TimeSlice"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        INITIAL_JS_READY: "BOOTLOAD/JSREADY",
        loadOnDOMContentReady: function(a, c) {
            b("Arbiter").subscribe(b("PageEvents").BIGPIPE_DOMREADY, function() {
                function d() {
                    b("Bootloader").loadResources(a, function() {
                        b("Arbiter").inform(g.INITIAL_JS_READY, !0, "state")
                    })
                }
                c ? setTimeout(d, c) : d()
            })
        },
        handleServerJS: function(a) {
            var c = new(b("ServerJS"))();
            c.handle(a);
            b("Run").onAfterLoad(c.cleanup.bind(c, b("TimeSlice")))
        }
    };
    e.exports = g
}), null);
__d("MutationCountingExecutionObserver", ["EventConfig", "ExecutionContextObservers", "PageDOMMutationObserver", "ProfilingCounters", "TimeSlice", "ifRequired"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [],
        h = !1;

    function i() {
        __p && __p();
        var a = b("PageDOMMutationObserver").consumePendingDOMMutations();
        if (a) {
            b("ProfilingCounters").incrementCounter("DOM_MUTATION", a);
            a = b("ifRequired")("TimeSliceAutoclosedInteraction", function(a) {
                return a
            });
            if (a) {
                a = a.getInteractionsActiveRightNow();
                a.length && a.forEach(function(a) {
                    __p && __p();
                    a.informPointWithOverride("display_done_ts_executed_from_client", {
                        isPointOfInterest: !0
                    });
                    if (!a.__mceoSeenThisRootGuardFrame) {
                        a.__mceoSeenThisRootGuardFrame = !0;
                        a.countUp();
                        g.push(a);
                        h || (h = !0, l.executeOnRootGuardEnded(function() {
                            j(), h = !1
                        }));
                        var c = b("ifRequired")("Visibility", function(a) {
                            return a
                        });
                        c && (c.isHidden() ? a.trace().addStringAnnotation("hidden_during_dd", "1") : a.trace().addStringAnnotation("hidden_during_dd", "0"))
                    }
                })
            }
        }
    }

    function j() {
        __p && __p();
        if (g.length === 0) return;
        g.forEach(function(a) {
            a.informPointWithOverride("display_done", {
                isPointOfInterest: !0
            }).addStringAnnotation("visual_role", "global_signpost"), a.__mceoSeenThisRootGuardFrame = !1
        });
        if (b("EventConfig").disable_heuristic) {
            g.forEach(function(a) {
                return a.countDown()
            });
            g = [];
            return
        }
        var a = g,
            c = b("ifRequired")("requestAnimationFrameAcrossTransitions", function(a) {
                return a
            }),
            d = b("ifRequired")("setTimeoutAcrossTransitions", function(a) {
                return a
            });
        if (!c || !d) return;
        c(function() {
            a.forEach(function(a) {
                a.informPointWithOverride("display_done_ts_raf", {
                    isPointOfInterest: !0
                })
            }), d(function() {
                a.forEach(function(a) {
                    a.informPointWithOverride("display_done_ts_st", {
                        isPointOfInterest: !0
                    }), a.countDown()
                })
            })
        });
        g = []
    }
    var k = [];
    a = function() {
        __p && __p();

        function a() {}
        var c = a.prototype;
        c.executeOnRootGuardEnded = function(a) {
            k.push(a)
        };
        c.onNewContextCreated = function(a, b, c) {
            return null
        };
        c.onContextCanceled = function(a, b) {};
        c.onBeforeContextStarted = function(a, c, d) {
            b("PageDOMMutationObserver").tryStart();
            i();
            return null
        };
        c.onAfterContextStarted = function(a, b, c, d) {
            return null
        };
        c.onAfterContextEnded = function(a, b, c, d) {
            i();
            if (a && a.isRoot)
                while (k.length) k.pop()()
        };
        c.getBeforeID = function() {
            return b("ExecutionContextObservers").beforeIDs.MUTATION_COUNTING
        };
        c.getAfterID = function() {
            return b("ExecutionContextObservers").afterIDs.MUTATION_COUNTING
        };
        return a
    }();
    var l = new a();
    b("TimeSlice").registerExecutionContextObserver(l);
    e.exports = l
}), 3);
__d("DOMEvent", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this.event = a || window.event, typeof this.event.srcElement !== "unknown" || g(0, 5798), this.target = this.event.target || this.event.srcElement
        }
        var b = a.prototype;
        b.preventDefault = function() {
            var a = this.event;
            a.preventDefault ? (a.preventDefault(), "defaultPrevented" in a || (a.defaultPrevented = !0)) : a.returnValue = !1;
            return this
        };
        b.isDefaultPrevented = function() {
            var a = this.event;
            return "defaultPrevented" in a ? a.defaultPrevented : a.returnValue === !1
        };
        b.stopPropagation = function() {
            var a = this.event;
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            return this
        };
        b.kill = function() {
            this.stopPropagation().preventDefault();
            return this
        };
        a.killThenCall = function(b) {
            return function(c) {
                new a(c).kill();
                return b()
            }
        };
        return a
    }();
    e.exports = a
}), null);
__d("dedupString", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b;
        return Object.keys((b = {}, b[a] = 0, b))[0]
    }
    e.exports = a
}), null);
__d("wrapFunction", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {};
    a = function(a, b, c) {
        return function() {
            var d = b in g ? g[b](a, c) : a;
            for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
            return d.apply(this, f)
        }
    };
    a.setWrapper = function(a, b) {
        g[b] = a
    };
    e.exports = a
}), null);
__d("DOMEventListener", ["invariant", "dedupString", "emptyFunction", "wrapFunction"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = !1;
    try {
        a = Object.defineProperty({}, "passive", {
            get: function() {
                h = !0
            }
        });
        window.addEventListener("test", null, a)
    } catch (a) {}
    var i, j;
    window.addEventListener ? (i = function(a, c, d, e) {
        e === void 0 && (e = !1), d.wrapper = b("wrapFunction")(d, "entry", b("dedupString")("DOMEventListener.add " + c)), a.addEventListener(c, d.wrapper, h ? e : !1)
    }, j = function(a, b, c, d) {
        d === void 0 && (d = !1), a.removeEventListener(b, c.wrapper, h ? d : !1)
    }) : window.attachEvent ? (i = function(a, c, d, e) {
        e === void 0, d.wrapper = b("wrapFunction")(d, "entry", "DOMEventListener.add " + c), a.attachEvent || g(0, 2798), a.attachEvent("on" + c, d.wrapper)
    }, j = function(a, b, c, d) {
        d === void 0, a.detachEvent || g(0, 2799), a.detachEvent("on" + b, c.wrapper)
    }) : j = i = b("emptyFunction");
    c = {
        add: function(a, b, c, d) {
            d === void 0 && (d = !1);
            i(a, b, c, d);
            return {
                remove: function() {
                    j(a, b, c, d)
                }
            }
        },
        remove: j
    };
    e.exports = c
}), null);
__d("isNode", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b = a ? a.ownerDocument || a : document;
        b = b.defaultView || window;
        return !!(a && (typeof b.Node === "function" ? a instanceof b.Node : typeof a === "object" && typeof a.nodeType === "number" && typeof a.nodeName === "string"))
    }
    e.exports = a
}), null);
__d("isTextNode", ["isNode"], (function(a, b, c, d, e, f) {
    function a(a) {
        return b("isNode")(a) && a.nodeType == 3
    }
    e.exports = a
}), null);
__d("containsNode", ["isTextNode"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a, c) {
        __p && __p();
        if (!a || !c) return !1;
        else if (a === c) return !0;
        else if (b("isTextNode")(a)) return !1;
        else if (b("isTextNode")(c)) return g(a, c.parentNode);
        else if ("contains" in a) return a.contains(c);
        else if (a.compareDocumentPosition) return !!(a.compareDocumentPosition(c) & 16);
        else return !1
    }
    e.exports = g
}), null);
__d("createArrayFromMixed", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function h(a) {
        __p && __p();
        var b = a.length;
        !Array.isArray(a) && (typeof a === "object" || typeof a === "function") || g(0, 3914);
        typeof b === "number" || g(0, 3915);
        b === 0 || b - 1 in a || g(0, 3916);
        typeof a.callee !== "function" || g(0, 3917);
        if (a.hasOwnProperty) try {
            return Array.prototype.slice.call(a)
        } catch (a) {}
        var c = Array(b);
        for (var d = 0; d < b; d++) c[d] = a[d];
        return c
    }

    function i(a) {
        return !!a && (typeof a === "object" || typeof a === "function") && "length" in a && !("setInterval" in a) && typeof a.nodeType !== "number" && (Array.isArray(a) || "callee" in a || "item" in a)
    }

    function a(a) {
        if (!i(a)) return [a];
        else if (Array.isArray(a)) return a.slice();
        else return h(a)
    }
    e.exports = a
}), null);
__d("isElementNode", ["isNode"], (function(a, b, c, d, e, f) {
    function a(a) {
        return b("isNode")(a) && a.nodeType == 1
    }
    e.exports = a
}), null);
__d("DOMQuery", ["CSS", "FBLogger", "containsNode", "createArrayFromMixed", "createObjectFrom", "ge", "ifRequired", "isElementNode", "isNode"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = /^\.-?[_a-zA-Z]+[\w-]*$/;

    function h(a, b) {
        return a.hasAttribute ? a.hasAttribute(b) : a.getAttribute(b) !== null
    }
    var i = {
        find: function(a, b) {
            a = i.scry(a, b);
            return a[0]
        },
        findPushSafe: function(a, b, c) {
            b = i.scry(a, b);
            a = i.scry(a, c);
            b.length === 1 && a.length === 1 && b[0] === a[0] ? c = b : c = b.concat(a);
            return c[0]
        },
        scry: function(a, c) {
            __p && __p();
            if (!a || !a.getElementsByTagName) return [];
            c = c.split(" ");
            var d = [a];
            for (var e = 0; e < c.length; e++) {
                if (d.length === 0) break;
                if (c[e] === "") continue;
                var f = c[e],
                    i = c[e],
                    j = [],
                    k = !1;
                if (f.charAt(0) == "^")
                    if (e === 0) k = !0, f = f.slice(1);
                    else return [];
                f = f.replace(/\[(?:[^=\]]*=(?:\"[^\"]*\"|\'[^\']*\'))?|[.#]/g, " $&");
                f = f.split(" ");
                var l = f[0] || "*",
                    m = l == "*",
                    n = f[1] && f[1].charAt(0) == "#";
                if (n) {
                    n = b("ge")(f[1].slice(1), a, l);
                    if (n && (m || n.tagName.toLowerCase() == l))
                        for (var o = 0; o < d.length; o++)
                            if (k && b("containsNode")(n, d[o])) {
                                j = [n];
                                break
                            } else if (document == d[o] || b("containsNode")(d[o], n) && d[o] !== n) {
                        j = [n];
                        break
                    }
                } else {
                    n = [];
                    o = d.length;
                    var p, q = !k && i.indexOf("[") < 0 && document.querySelectorAll;
                    for (var r = 0; r < o; r++) {
                        if (k) {
                            p = [];
                            var s = d[r].parentNode;
                            while (b("isElementNode")(s))(m || s.tagName.toLowerCase() == l) && p.push(s), s = s.parentNode
                        } else q ? g.test(i) ? p = d[r].getElementsByClassName(i.substring(1)) : p = d[r].querySelectorAll(i) : p = d[r].getElementsByTagName(l);
                        s = p.length;
                        for (var t = 0; t < s; t++) n.push(p[t])
                    }
                    if (!q)
                        for (var p = 1; p < f.length; p++) {
                            s = f[p];
                            t = s.charAt(0) == ".";
                            m = s.substring(1);
                            for (r = 0; r < n.length; r++) {
                                o = n[r];
                                if (!o || o.nodeType !== 1) continue;
                                if (t) {
                                    b("CSS").hasClass(o, m) || delete n[r];
                                    continue
                                } else {
                                    i = s.slice(1, s.length - 1);
                                    l = i.indexOf("=");
                                    if (l < 0) {
                                        if (!h(o, i)) {
                                            delete n[r];
                                            continue
                                        }
                                    } else {
                                        q = i.substr(0, l);
                                        i = i.substr(l + 1);
                                        i = i.slice(1, i.length - 1);
                                        if (o.getAttribute(q) != i) {
                                            delete n[r];
                                            continue
                                        }
                                    }
                                }
                            }
                        }
                    for (r = 0; r < n.length; r++)
                        if (n[r]) {
                            j.push(n[r]);
                            if (k) break
                        }
                }
                d = j
            }
            return d
        },
        getSelection: function() {
            var a = window.getSelection;
            if (a) return a() + "";
            else {
                a = document.selection;
                if (a) return a.createRange().text
            }
            return null
        },
        contains: function(a, c) {
            (typeof a === "string" || typeof c === "string") && b("FBLogger")("dom_query").info("Support for node IDs is deprecated. Use containsNode(ge(<id1>), ge(<id2>)) instead");
            return b("containsNode")(b("ge")(a), b("ge")(c))
        },
        getRootElement: function() {
            var a = b("ifRequired")("Quickling", function(a) {
                return a.isActive() ? b("ge")("content") : null
            });
            return a || document.body
        },
        isNodeOfType: function(a, c) {
            c = b("createArrayFromMixed")(c).join("|").toUpperCase().split("|");
            c = b("createObjectFrom")(c);
            return b("isNode")(a) && a.nodeName in c
        },
        isInputNode: function(a) {
            return i.isNodeOfType(a, ["input", "textarea"]) || a.contentEditable === "true"
        }
    };
    e.exports = i
}), null);
__d("EventProfiler", ["requireCond", "cr:708886"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:708886")
}), null);
__d("Scroll", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a, b) {
        return !!b && (a === b.documentElement || a === b.body)
    }
    a = {
        getTop: function(a) {
            var b = a.ownerDocument;
            return g(a, b) ? b.body.scrollTop || b.documentElement.scrollTop : a.scrollTop
        },
        setTop: function(a, b) {
            var c = a.ownerDocument;
            g(a, c) ? c.body.scrollTop = c.documentElement.scrollTop = b : a.scrollTop = b
        },
        getLeft: function(a) {
            var b = a.ownerDocument;
            return g(a, b) ? b.body.scrollLeft || b.documentElement.scrollLeft : a.scrollLeft
        },
        setLeft: function(a, b) {
            var c = a.ownerDocument;
            g(a, c) ? c.body.scrollLeft = c.documentElement.scrollLeft = b : a.scrollLeft = b
        }
    };
    e.exports = a
}), null);
__d("clickRefAction", ["Arbiter"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(b, a, c, d, e) {
        var f = b + "/" + a;
        this.ue = f;
        this._ue_ts = b;
        this._ue_count = a;
        this._context = c;
        this._ns = null;
        this._node = d;
        this._type = e
    }
    g.prototype.set_namespace = function(a) {
        this._ns = a;
        return this
    };
    g.prototype.coalesce_namespace = function(a) {
        this._ns === null && (this._ns = a);
        return this
    };
    g.prototype.add_event = function() {
        return this
    };
    var h = 0,
        i = [],
        j = Date.now() + 6e4;

    function c(a, c, d, e, f) {
        __p && __p();
        var k = Date.now(),
            l = d && d.type;
        f = f || {};
        !c && d && (c = d.getTarget());
        var m = 50;
        if (c && e != "FORCE")
            for (var n = i.length - 1; n >= 0 && k - i[n]._ue_ts < m; --n)
                if (i[n]._node == c && i[n]._type == l) return i[n];
        n = new g(k, h, a, c, l);
        i.push(n);
        while (i[0]._ue_ts + m < k || i.length > 10) i.shift();
        l = k < j ? "persistent" : "event";
        a == "contextmenu" ? b("Arbiter").inform("ClickRefAction/contextmenu", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l) : a == "middleclick" ? b("Arbiter").inform("ClickRefAction/middleclick", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l) : b("Arbiter").inform("ClickRefAction/new", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l);
        h++;
        return n
    }
    e.exports = a.clickRefAction = c
}), null);
__d("getDocumentScrollElement", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = typeof navigator !== "undefined" && navigator.userAgent.indexOf("AppleWebKit") > -1;

    function a(a) {
        a = a || document;
        return a.scrollingElement ? a.scrollingElement : !g && a.compatMode === "CSS1Compat" ? a.documentElement : a.body
    }
    e.exports = a
}), null);
__d("getObjectValues", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b = [];
        for (var c in a) b.push(a[c]);
        return b
    }
    e.exports = a
}), null);
__d("Event", ["invariant", "Arbiter", "DataStore", "DOMEvent", "DOMEventListener", "DOMQuery", "ErrorUtils", "EventProfiler", "ExecutionEnvironment", "FBLogger", "Parent", "Scroll", "TAAL", "TimeSlice", "UserAgent", "$", "clickRefAction", "dedupString", "getDocumentScrollElement", "getObjectValues"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = a.Event,
        i = "Event.listeners";
    h.prototype || (h.prototype = {});

    function j(a) {
        (a.type === "click" || a.type === "mouseover" || a.type === "keydown") && b("Arbiter").inform("Event/stop", {
            event: a
        })
    }

    function k(a, b, c) {
        this.target = a, this.type = b, this.data = c
    }
    Object.assign(k.prototype, {
        getData: function() {
            this.data = this.data || {};
            return this.data
        },
        stop: function() {
            return h.stop(this)
        },
        prevent: function() {
            return h.prevent(this)
        },
        isDefaultPrevented: function() {
            return h.isDefaultPrevented(this)
        },
        kill: function() {
            return h.kill(this)
        },
        getTarget: function() {
            return new(b("DOMEvent"))(this).target || null
        }
    });

    function l(a) {
        if (a instanceof k) return a;
        a || (!window.addEventListener && document.createEventObject ? a = window.event ? document.createEventObject(window.event) : {} : a = {});
        if (!a._inherits_from_prototype)
            for (var b in h.prototype) try {
                a[b] = h.prototype[b]
            } catch (a) {}
        return a
    }
    Object.assign(h.prototype, {
        _inherits_from_prototype: !0,
        getRelatedTarget: function() {
            var a = this.relatedTarget || (this.fromElement === this.srcElement ? this.toElement : this.fromElement);
            return a && a.nodeType ? a : null
        },
        getModifiers: function() {
            var a = {
                control: !!this.ctrlKey,
                shift: !!this.shiftKey,
                alt: !!this.altKey,
                meta: !!this.metaKey
            };
            a.access = b("UserAgent").isPlatform("Mac OS X") ? a.control : a.alt;
            a.any = a.control || a.shift || a.alt || a.meta;
            return a
        },
        isRightClick: function() {
            return this.which ? this.which === 3 : this.button && this.button === 2
        },
        isMiddleClick: function() {
            return this.which ? this.which === 2 : this.button && this.button === 4
        },
        isDefaultRequested: function() {
            return this.getModifiers().any || this.isMiddleClick() || this.isRightClick()
        }
    }, k.prototype);
    Object.assign(h, {
        listen: function(a, c, d, e, f) {
            __p && __p();
            typeof d === "function" && (d = b("TimeSlice").guard(d, b("dedupString")("Event.js " + c + " handler")));
            !f || typeof f === "boolean" ? f = {
                passive: !1
            } : f = {
                passive: f.passive || !1
            };
            if (!b("ExecutionEnvironment").canUseDOM) return new t(a, d, k, c, e, l, f);
            typeof a === "string" && (a = b("$")(a));
            typeof e === "undefined" && (e = h.Priority.NORMAL);
            if (typeof c === "object") {
                var g = {};
                for (var j in c) g[j] = h.listen(a, j, c[j], e, f);
                return g
            }
            if (c.match(/^on/i)) throw new TypeError("Bad event name `" + c + "': use `click', not `onclick'.");
            if (!a) {
                g = new Error(b("TAAL").blameToPreviousFrame("Cannot listen to an undefined element."));
                b("FBLogger")("event").catching(g).mustfix("Tried to listen to element of type %s", c);
                throw g
            }
            if (a.nodeName == "LABEL" && c == "click") {
                g = a.getElementsByTagName("input");
                a = g.length == 1 ? g[0] : a
            } else if (a === window && c === "scroll") {
                g = b("getDocumentScrollElement")();
                g !== document.documentElement && g !== document.body && (a = g)
            }
            var k = b("DataStore").get(a, i, {});
            g = n[c];
            g && (c = g.base, g.wrap && (d = g.wrap(d)));
            p(a, k, c, f);
            g = k[c];
            e in g || (g[e] = []);
            var l = g[e].length;
            d = new t(a, d, k, c, e, l, f);
            g[e][l] = d;
            g.numHandlers++;
            f.passive || (g.numNonPassiveHandlers++, o(a, k[c], c));
            return d
        },
        stop: function(a) {
            var c = new(b("DOMEvent"))(a).stopPropagation();
            j(c.event);
            return a
        },
        prevent: function(a) {
            new(b("DOMEvent"))(a).preventDefault();
            return a
        },
        isDefaultPrevented: function(a) {
            return new(b("DOMEvent"))(a).isDefaultPrevented(a)
        },
        kill: function(a) {
            a = new(b("DOMEvent"))(a).kill();
            j(a.event);
            return !1
        },
        getKeyCode: function(a) {
            __p && __p();
            a = new(b("DOMEvent"))(a).event;
            if (!a) return !1;
            switch (a.keyCode) {
                case 63232:
                    return 38;
                case 63233:
                    return 40;
                case 63234:
                    return 37;
                case 63235:
                    return 39;
                case 63272:
                case 63273:
                case 63275:
                    return null;
                case 63276:
                    return 33;
                case 63277:
                    return 34
            }
            if (a.shiftKey) switch (a.keyCode) {
                case 33:
                case 34:
                case 37:
                case 38:
                case 39:
                case 40:
                    return null
            }
            return a.keyCode
        },
        getPriorities: function() {
            if (!m) {
                var a = b("getObjectValues")(h.Priority);
                a.sort(function(a, b) {
                    return a - b
                });
                m = a
            }
            return m
        },
        fire: function(a, b, c) {
            c = new k(a, b, c);
            var d;
            do {
                var e = h.__getHandler(a, b);
                e && (d = e(c));
                a = a.parentNode
            } while (a && d !== !1 && !c.cancelBubble);
            return d !== !1
        },
        __fire: function(a, b, c) {
            a = h.__getHandler(a, b);
            if (a) return a(l(c))
        },
        __getHandler: function(a, c) {
            var d = b("DataStore").get(a, i);
            return d && d[c] ? d[c].domHandler : a["on" + c]
        },
        getPosition: function(a) {
            a = new(b("DOMEvent"))(a).event;
            var c = b("getDocumentScrollElement")(),
                d = a.clientX + b("Scroll").getLeft(c);
            a = a.clientY + b("Scroll").getTop(c);
            return {
                x: d,
                y: a
            }
        }
    });
    var m = null;
    c = function(a) {
        return function(c) {
            if (!b("DOMQuery").contains(this, c.getRelatedTarget())) return a.call(this, c)
        }
    };
    var n;
    !window.navigator.msPointerEnabled ? n = {
        mouseenter: {
            base: "mouseover",
            wrap: c
        },
        mouseleave: {
            base: "mouseout",
            wrap: c
        }
    } : n = {
        mousedown: {
            base: "MSPointerDown"
        },
        mousemove: {
            base: "MSPointerMove"
        },
        mouseup: {
            base: "MSPointerUp"
        },
        mouseover: {
            base: "MSPointerOver"
        },
        mouseout: {
            base: "MSPointerOut"
        },
        mouseenter: {
            base: "MSPointerOver",
            wrap: c
        },
        mouseleave: {
            base: "MSPointerOut",
            wrap: c
        }
    };
    if (b("UserAgent").isBrowser("Firefox < 52")) {
        d = function(a, b) {
            b = l(b);
            var c = b.getTarget();
            while (c) h.__fire(c, a, b), c = c.parentNode
        };
        document.documentElement.addEventListener("focus", d.bind(null, "focusin"), !0);
        document.documentElement.addEventListener("blur", d.bind(null, "focusout"), !0)
    }
    var o = function(a, c, d) {
            var e = c.numNonPassiveHandlers == 0;
            e != c.options.passive && (c.domHandlerRemover.remove(), c.options.passive = e, c.domHandlerRemover = b("DOMEventListener").add(a, d, c.domHandler, {
                passive: e
            }))
        },
        p = function(a, c, d, e) {
            __p && __p();
            if (d in c) return;
            var f = b("TimeSlice").guard(s.bind(a, d), b("dedupString")("Event listenHandler " + d));
            c[d] = {
                numHandlers: 0,
                numNonPassiveHandlers: 0,
                domHandlerRemover: b("DOMEventListener").add(a, d, f, e),
                domHandler: f,
                options: e
            };
            c = "on" + d;
            if (a[c]) {
                f = a === document.documentElement ? h.Priority._BUBBLE : h.Priority.TRADITIONAL;
                var g = a[c];
                a[c] = null;
                h.listen(a, d, g, f, e)
            }
        };

    function q(a) {
        return !a.href.endsWith("#") ? !1 : a.href === document.location.href || a.href === document.location.href + "#"
    }

    function r(a, b) {
        return a.nodeName === "INPUT" && a.type === b
    }
    var s = b("EventProfiler").__wrapEventListenHandler(function(a, c) {
        __p && __p();
        c = l(c);
        if (!b("DataStore").get(this, i)) throw new Error("Bad listenHandler context.");
        var d = b("DataStore").get(this, i)[a];
        if (!d) throw new Error("No registered handlers for `" + a + "'.");
        if (a == "click" || a == "contextmenu" || a == "mousedown" && c.which == 2) {
            var e = c.getTarget(),
                f = b("Parent").byTag(e, "a");
            f instanceof HTMLAnchorElement && f.href && q(f) && !r(e, "file") && !r(e, "submit") && c.prevent();
            a == "click" && b("clickRefAction")("click", f, c);
            a == "contextmenu" && b("clickRefAction")("contextmenu", f, c);
            a == "mousedown" && c.which == 2 && b("clickRefAction")("middleclick", f, c)
        }
        e = h.getPriorities();
        for (var a = 0; a < e.length; a++) {
            f = e[a];
            if (f in d) {
                f = d[f];
                for (var g = 0; g < f.length; g++) {
                    if (!f[g]) continue;
                    var j = f[g].fire(this, c);
                    if (j === !1) return c.kill();
                    else c.cancelBubble && c.stop()
                }
            }
        }
        return c.returnValue
    });
    h.Priority = {
        URGENT: -20,
        TRADITIONAL: -10,
        NORMAL: 0,
        _BUBBLE: 1e3
    };

    function t(a, b, c, d, e, f, g) {
        this._element = a, this._handler = b, this._handlers = c, this._type = d, this._priority = e, this._id = f, this._options = g
    }
    Object.assign(t.prototype, {
        remove: function() {
            if (b("ExecutionEnvironment").canUseDOM) {
                if (!this._handlers) {
                    b("FBLogger")("Event").warn("Event handler has already been removed");
                    return
                }
                var a = this._handlers[this._type];
                a.numHandlers <= 1 ? (a.domHandlerRemover.remove(), delete this._handlers[this._type]) : (delete a[this._priority][this._id], a.numHandlers--, this._options.passive || (a.numNonPassiveHandlers--, o(this._element, this._handlers[this._type], this._type)));
                this._handlers = null
            }
        },
        fire: function(a, c) {
            return b("ExecutionEnvironment").canUseDOM ? b("ErrorUtils").applyWithGuard(this._handler, a, [c], function(b) {
                b.event_type = c.type, b.dom_element = a.name || a.id, b.category = "eventhandler"
            }) : !0
        }
    });
    a.$E = h.$E = l;
    e.exports = h
}), null);
__d("Base64", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    function h(a) {
        a = a.charCodeAt(0) << 16 | a.charCodeAt(1) << 8 | a.charCodeAt(2);
        return String.fromCharCode(g.charCodeAt(a >>> 18), g.charCodeAt(a >>> 12 & 63), g.charCodeAt(a >>> 6 & 63), g.charCodeAt(a & 63))
    }
    var i = ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";

    function j(a) {
        a = i.charCodeAt(a.charCodeAt(0) - 43) << 18 | i.charCodeAt(a.charCodeAt(1) - 43) << 12 | i.charCodeAt(a.charCodeAt(2) - 43) << 6 | i.charCodeAt(a.charCodeAt(3) - 43);
        return String.fromCharCode(a >>> 16, a >>> 8 & 255, a & 255)
    }
    var k = {
        encode: function(a) {
            a = unescape(encodeURI(a));
            var b = (a.length + 2) % 3;
            a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
            return a.slice(0, a.length + b - 2) + "==".slice(b)
        },
        decode: function(a) {
            a = a.replace(/[^A-Za-z0-9+\/]/g, "");
            var b = a.length + 3 & 3;
            a = (a + "AAA".slice(b)).replace(/..../g, j);
            a = a.slice(0, a.length + b - 3);
            try {
                return decodeURIComponent(escape(a))
            } catch (a) {
                throw new Error("Not valid UTF-8")
            }
        },
        encodeObject: function(a) {
            return k.encode(JSON.stringify(a))
        },
        decodeObject: function(a) {
            return JSON.parse(k.decode(a))
        },
        encodeNums: function(a) {
            return String.fromCharCode.apply(String, a.map(function(a) {
                return g.charCodeAt((a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63)
            }))
        }
    };
    e.exports = k
}), null);
__d("CookieStore", ["CookieCoreLoggingConfig", "FBLogger", "Random", "gkx", "performanceNow", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = b("requireDeferred")("BanzaiScuba");

    function h(a, b, c, d, e, f, g) {
        return b + "=" + encodeURIComponent(c) + "; " + (f !== 0 && f != void 0 ? "expires=" + new Date(a + f).toUTCString() + "; " : "") + "path=" + d + "; domain=" + e + (g ? "; secure" : "")
    }

    function i(a, b, c) {
        return a + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + b + "; domain=" + c
    }

    function j() {
        if (b("CookieCoreLoggingConfig").sampleRate > 0) {
            var a = b("performanceNow")(),
                c = document.cookie;
            a = b("performanceNow")() - a;
            var d = a > b("CookieCoreLoggingConfig").maximumIgnorableStallMs && b("Random").coinflip(1 / b("CookieCoreLoggingConfig").sampleRate);
            d && b("FBLogger")("cookie_infra").addMetadata("COOKIE_INFRA", "WALL_TIME", String(a)).warn("Cookie read exceeded %s milliseconds.", b("CookieCoreLoggingConfig").maximumIgnorableStallMs);
            return c
        } else return document.cookie
    }
    var k = function() {
        __p && __p();

        function a() {
            this.$1 = 0
        }
        var c = a.prototype;
        c.setCookie = function(a, b, c, d, e, f, g) {
            document.cookie = h(a, b, c, d, e, f, g)
        };
        c.clearCookie = function(a, b, c) {
            document.cookie = i(a, b, c)
        };
        c.getCookie = function(a) {
            this.$1++;
            var c = b("performanceNow")();
            a = j().match("(?:^|;\\s*)" + a + "=(.*?)(?:;|$)");
            c = b("performanceNow")() - c;
            var d = 1 / b("CookieCoreLoggingConfig").sampleRateClassic,
                e = b("Random").coinflip(d);
            e && l(d, "classic", c, this.$1);
            return a ? decodeURIComponent(a[1]) : null
        };
        return a
    }();

    function l(a, b, c, d, e, f) {
        g.onReady(function(g) {
            g = new g("cookie_perf", null, {
                addBrowserFields: !0
            });
            g.addInteger("sample_rate", Math.floor(a));
            g.addNormal("type", b);
            g.addInteger("duration_usec", c * 1e3);
            g.addInteger("reads", d);
            typeof e === "number" && g.addInteger("misses", e);
            typeof f === "boolean" && g.addNormal("hit", f);
            g.post()
        })
    }
    var m = 10 * 1e3,
        n = function() {
            __p && __p();

            function a() {
                this.$1 = {}, this.$2 = 0, this.$3 = 0, this.$4 = 0
            }
            var c = a.prototype;
            c.setCookie = function(a, b, c, d, e, f, g) {
                document.cookie = h(a, b, c, d, e, f, g), this.$1[b] = {
                    value: c,
                    updated: a
                }
            };
            c.clearCookie = function(a, b, c) {
                document.cookie = i(a, b, c), this.$1[a] = {
                    value: null,
                    updated: Date.now()
                }
            };
            c.getCookie = function(a) {
                __p && __p();
                var c = b("performanceNow")();
                a = this.$5(a);
                var d = a.cookie;
                a = a.hit;
                var e = 1 / b("CookieCoreLoggingConfig").sampleRateFastStale,
                    f = b("Random").coinflip(e);
                if (f) {
                    f = b("performanceNow")() - c;
                    l(e, "fast_stale", f, this.$3, this.$4, a)
                }
                return d
            };
            c.$5 = function(a) {
                __p && __p();
                var b = Date.now(),
                    c = this.$1[a];
                if (!c) {
                    if (this.$2 + m < b) {
                        this.$6();
                        return {
                            cookie: this.$5(a).cookie,
                            hit: !1
                        }
                    }
                    this.$3++;
                    return {
                        cookie: null,
                        hit: !0
                    }
                }
                if (c.updated + m < b) {
                    this.$6();
                    return {
                        cookie: this.$5(a).cookie,
                        hit: !1
                    }
                }
                this.$3++;
                return {
                    cookie: c.value,
                    hit: !0
                }
            };
            c.$6 = function() {
                __p && __p();
                this.$4++;
                var a = j().split(";");
                this.$2 = Date.now();
                this.$1 = {};
                for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var d;
                    if (b) {
                        if (c >= a.length) break;
                        d = a[c++]
                    } else {
                        c = a.next();
                        if (c.done) break;
                        d = c.value
                    }
                    d = d;
                    d = d.match("\\s*([^=]+)=(.*)");
                    if (!d) continue;
                    this.$1[d[1]] = {
                        value: decodeURIComponent(d[2]),
                        updated: this.$2
                    }
                }
            };
            return a
        }();
    e.exports = {
        newCookieStore: function() {
            return b("gkx")("676837") ? new n() : new k()
        },
        CookieCacheForTest: n,
        CookieStoreSlowForTest: k
    }
}), null);
__d("CookieCore", ["CookieCoreConfig", "CookieStore"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = /^.*(\.(facebook|messenger|oculus|instagram|facebookcorewwwi|workplace)\..*)$/i,
        h = /_js_(.*)/,
        i;

    function j() {
        i || (i = b("CookieStore").newCookieStore());
        return i
    }

    function k(a) {
        return window.self != window.top ? !1 : !0
    }
    var l = {
        set: function(a, b) {
            if (!o(a)) return;
            l.setWithoutChecks(a, b, q(a), r(a), p(a))
        },
        setWithoutChecks: function(a, b, c, d, e) {
            var f = Date.now();
            if (c != null)
                if (c > f) c -= f;
                else if (c == 1) {
                l.clear(a, d);
                return
            }
            j().setCookie(f, a, b, d, window.location.hostname.replace(g, "$1"), c, e)
        },
        setIfFirstPartyContext: function(a, b) {
            if (!k(a)) return;
            l.set(a, b)
        },
        setWithoutChecksIfFirstPartyContext: function(a, b, c, d, e) {
            if (!k(a)) return;
            l.setWithoutChecks(a, b, c, d, e)
        },
        clear: function(a, b) {
            b === void 0 && (b = "/"), b = b || "/", j().clearCookie(a, b, window.location.hostname.replace(g, "$1"))
        },
        get: function(a) {
            return !o(a) ? null : j().getCookie(a)
        }
    };

    function m(a) {
        return {
            insecure: a.i || !1,
            path: a.p || "/",
            ttlSeconds: a.t || 0
        }
    }

    function n(a) {
        if (b("CookieCoreConfig")[a] !== void 0) return m(b("CookieCoreConfig")[a]);
        a = a.match(h);
        return a && a.length > 1 ? n(a[1]) : null
    }

    function o(a) {
        return n(a) !== null
    }

    function p(a) {
        a = n(a);
        return a == null ? !0 : !a.insecure
    }

    function q(a) {
        a = n(a);
        return a == null ? null : a.ttlSeconds * 1e3
    }

    function r(a) {
        a = n(a);
        return a == null ? "/" : a.path
    }
    e.exports = l
}), null);
__d("Cookie", ["Bootloader", "CookieCore", "Env"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a) {
        if (b("Env").defer_cookies == !0) {
            b("Bootloader").loadModules(["BanzaiODS"], function(b) {
                b.bumpEntityKey("defer_cookies", "set." + a)
            }, "Cookie");
            return !1
        }
        return !0
    }

    function h() {
        return !b("Env").no_cookies
    }

    function a(a, c) {
        if (!h() || !g(a)) return;
        b("CookieCore").set(a, c)
    }

    function c(a, c) {
        if (!h()) return;
        b("CookieCore").set(a, c)
    }

    function d(a, c, d, e, f) {
        if (!h() || !g(a)) return;
        b("CookieCore").setWithoutChecks(a, c, d, e, f)
    }
    e.exports = babelHelpers["extends"]({}, b("CookieCore"), {
        set: a,
        setWithoutChecks: d,
        setWithoutCheckingUserConsent_DANGEROUS: c
    })
}), null);
__d("PageNavigationStageLoggerKeys", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        LOAD_STAGE: "a",
        REFERER_MODIFIED_CLICK: "b",
        REFERER_SCRIPT_PATH: "c",
        TARGET_URL_PATH: "d",
        NOTES: "e"
    })
}), null);
__d("PageNavigationStageLogger", ["Arbiter", "Base64", "BigPipe", "Cookie", "PageNavigationStageLoggerKeys", "Run", "ScriptPath", "URI", "emptyFunction", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = null,
        h = null,
        i = "first_byte";
    b("Run").onLoad(function() {
        i = "onload"
    });
    b("Run").onAfterLoad(function() {
        i = "onafterload", h && h.unsubscribe(), h = null
    });
    var j = !1,
        k = null,
        l = {
            init: function() {
                l.init = b("emptyFunction"), g = b("Arbiter").subscribe(b("BigPipe").Events.init, function(a, c) {
                    g && g.unsubscribe(), g = null, i = b("BigPipe").Events.init, h = c.arbiter.subscribe(Object.values(b("BigPipe").Events), function(a) {
                        i = a
                    })
                })
            },
            updateCookie: function() {
                if (k == null) return;
                var a = b("Base64").encode(JSON.stringify(k));
                b("Cookie").set("pnl_data2", a)
            },
            setNote: function(a) {
                if (k == null) return;
                k[b("PageNavigationStageLoggerKeys").NOTES].push(a)
            },
            setCookieForNavigation: function(a, c) {
                __p && __p();
                if (!j) {
                    var d;
                    try {
                        a = new(b("URI"))(a).getPath()
                    } catch (a) {
                        return
                    }
                    k = (d = {}, d[b("PageNavigationStageLoggerKeys").LOAD_STAGE] = i, d[b("PageNavigationStageLoggerKeys").REFERER_SCRIPT_PATH] = b("ScriptPath").getScriptPath(), d[b("PageNavigationStageLoggerKeys").REFERER_MODIFIED_CLICK] = c ? c.getModifiers().any || c.which && c.which !== 1 : !1, d[b("PageNavigationStageLoggerKeys").TARGET_URL_PATH] = a, d[b("PageNavigationStageLoggerKeys").NOTES] = [], d);
                    j = !0;
                    b("setImmediateAcrossTransitions")(function() {
                        k = null, j = !1
                    })
                }
                l.updateCookie()
            }
        };
    e.exports = l
}), null);
__d("snowliftLoadingSpinner", ["cx", "CSS"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        b("CSS").addClass(a, "_1m42");
        return function() {
            b("CSS").removeClass(a, "_1m42")
        }
    }
    e.exports = a
}), null);
__d("PhotoSnowliftLoader", ["Arbiter", "Bootloader", "EventProfiler", "FBLogger", "PageEvents", "ifRequired", "snowliftLoadingSpinner"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g(a, c, d) {
        if (a && a.offer_bypass_snowlift === "1") {
            b("EventProfiler").tagCurrentActiveInteractionsAs("SnowliftOffer");
            m.loadFrame(d);
            b("Bootloader").loadModules(["AsyncRequest"], function(a) {
                new a().setURI(c).send()
            }, "PhotoSnowliftLoader");
            return !0
        }
        return !1
    }

    function h(a, c, d) {
        if (a && a.offerx_bypass_snowlift === "1") {
            b("EventProfiler").tagCurrentActiveInteractionsAs("SnowliftOfferX");
            m.loadFrame(d);
            b("Bootloader").loadModules(["AsyncRequest", "XOfferController"], function(b, c) {
                c = c.getURIBuilder().setFBID("offer_id", a.offerx_id).setEnum("referrer", a.offerx_referrer).setStringVector("__xts__", a.__xts__).setString("__tn__", a.__tn__).getURI();
                new b().setURI(c).send()
            }, "PhotoSnowliftLoader");
            return !0
        }
        return !1
    }

    function i(a, c, d) {
        if (a && a.sales_promo_bypass_snowlift === "1") {
            b("EventProfiler").tagCurrentActiveInteractionsAs("SnowliftSalesPromo");
            m.loadFrame(d);
            b("Bootloader").loadModules(["AsyncRequest", "XSalesPromoWWWDetailsDialogAsyncController"], function(b, c) {
                c = c.getURIBuilder().setFBID("offer_id", a.sales_promo_id).setString("referrer", a.sales_promo_referrer).setStringVector("__xts__", a.__xts__).setString("__tn__", a.__tn__).getURI();
                new b().setURI(c).send()
            }, "PhotoSnowliftLoader");
            return !0
        }
        return !1
    }
    var j = function() {};
    b("Arbiter").subscribe("PhotoSnowlift.OPEN", function() {
        j()
    });
    b("Arbiter").subscribe("SalesPromoDetails.OPEN", function() {
        j()
    });
    b("Arbiter").subscribe("OfferDetails.OPEN", function() {
        j()
    });
    var k = !1,
        l = "",
        m = {
            STAGE_NORMAL_MAX: {
                x: 960,
                y: 960
            },
            SIDEBAR_SIZE_MAX: 360,
            STAGE_CHROME: {
                x: 82,
                y: 42
            },
            load: function(a, c, d) {
                __p && __p();
                var e = this;
                b("Bootloader").loadModules(["URI"], function(f) {
                    l = "";
                    j();
                    j = b("snowliftLoadingSpinner")(c);
                    var g = String(f.getMostRecentURI().getQueryData().viewas),
                        h = new f(a).getQueryData();
                    h = m.shouldUseSnowlift(h, a, c, g);
                    if (h) {
                        c.getAttribute("data-ploi") && (h = new Image(), h.src = new f(m.getImageURL(c)));
                        e.loadWithSnowLift(a, c, g, d)
                    }
                }, "PhotoSnowliftLoader")
            },
            loadWithSnowLift: function(a, c, d, e) {
                m.loadFrame(d), b("Bootloader").loadModules(["Live", "PhotoTagApproval", "PhotoTagger", "PhotoTags", "TagTokenizer"], function() {}, "PhotoSnowliftLoader"), b("Bootloader").loadModules(["PhotoSnowlift"], function(b) {
                    b.bootstrap(a, c)
                }, e)
            },
            loadFrame: function(a) {
                if (k) return;
                k = !0;
                var c = a ? {
                    viewas: a
                } : {};
                b("Bootloader").loadModules(["AsyncRequest"], function(a) {
                    new a("/ajax/photos/snowlift/init.php").setAllowCrossPageTransition(!0).setMethod("GET").setReadOnly(!0).setData(c).setErrorHandler(function(a) {
                        b("FBLogger")("photo_snowlift").catching(a.toError()).warn("failed to initialize snowlift")
                    }).send()
                }, "PhotoSnowliftLoader")
            },
            shouldUseSnowlift: function(a, b, c, d) {
                c = g(a, b, d);
                var e = h(a, b, d);
                a = i(a, b, d);
                return !c && !a && !e
            },
            getImageURL: function(a) {
                l === "" && b("ifRequired")("URI", function(b) {
                    var c = a.getAttribute("data-ploi"),
                        d = a.getAttribute("data-plsi");
                    b = new b(a.getAttribute("ajaxify")).getQueryData().size.split(",");
                    d && !m.shouldShowHiRes({
                        hasSmallImage: !!d,
                        dimensions: {
                            x: b[0],
                            y: b[1]
                        }
                    }) ? l = d : c ? l = c : l = ""
                });
                return l
            },
            shouldShowHiRes: function(a) {
                __p && __p();
                b("ifRequired")("Vector", function(b) {
                    __p && __p();
                    if (!a.hasSmallImage) return !1;
                    b = m.getStageSize(a.dimensions);
                    if (b) {
                        b = m.adjustStageSizeForPixelRatio(b);
                        b = m.getImageSizeInStage(a.dimensions, b);
                        if (b) return b.x > m.STAGE_NORMAL_MAX.x || b.y > m.STAGE_NORMAL_MAX.y
                    }
                    return !1
                });
                return !1
            },
            getStageSize: function(a) {
                __p && __p();
                b("ifRequired")("Vector", function(b) {
                    var c = b.getViewportDimensions(),
                        d = new b(a.x, a.y),
                        e;
                    e = Math.min(d.x, c.x - m.SIDEBAR_SIZE_MAX - m.STAGE_CHROME.x);
                    c = c.y - m.STAGE_CHROME.y;
                    c = Math.min(d.y, c);
                    if (e === 0 && c === 0) return new b(0, 0);
                    var f = e / c;
                    d = d.x / d.y;
                    return f < d ? new b(e, Math.round(e / d)) : new b(Math.round(c * d), c)
                })
            },
            adjustStageSizeForPixelRatio: function(a) {
                b("ifRequired")("Vector", function(b) {
                    window.devicePixelRatio && window.devicePixelRatio > 1 && (a = new b(a.x * window.devicePixelRatio, a.y * window.devicePixelRatio))
                });
                return a
            },
            getImageSizeInStage: function(a, c) {
                b("ifRequired")("Vector", function(b) {
                    var d = a.x,
                        e = a.y;
                    if (d >= c.x || e >= c.y) {
                        var f = c.x / c.y,
                            g = d / e;
                        f < g ? (d = c.x, e = Math.round(d / g)) : f > g ? (e = c.y, d = Math.round(e * g)) : (d = c.x, e = c.y)
                    }
                    return new b(d, e)
                })
            },
            preload: function() {
                b("Arbiter").subscribe(b("PageEvents").BIGPIPE_ONLOAD, function() {
                    (document.body && document.body.classList.contains("home") || document.body && document.body.classList.contains("timelineLayout")) && b("ifRequired")("requestIdleCallback", function(a) {
                        a(function() {
                            m.loadFrame()
                        })
                    }, function() {
                        m.loadFrame()
                    })
                })
            }
        };
    e.exports = m
}), null);
__d("PrimerInlineHandlers", ["Bootloader", "CSS", "Parent", "nullthrows", "uniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = {},
        h = new Map();

    function i(a, c) {
        var d = b("nullthrows")(a.id);
        d in g || (g[d] = 0);
        g[d] === 0 && b("CSS").addClass(a, "bootloading");
        g[d] += c
    }

    function j(a) {
        var c = b("nullthrows")(a.id);
        g[c]--;
        g[c] === 0 && b("CSS").removeClass(a, "bootloading")
    }

    function k(a, b, c, d) {
        __p && __p();
        var e = d !== void 0 ? c[d] : c,
            f;
        if (Array.isArray(e))
            for (f = 0; f < e.length; f++) k(a, b, e, f);
        else if (e && typeof e === "object")
            if (e.__elem) c[d] = a;
            else if (e.__event) c[d] = b;
        else
            for (var g in e) k(a, b, e, g)
    }

    function l(a, c, d) {
        __p && __p();
        var f = b("Parent").byClass(a, "stat_elem") || a;
        f.id || f.setAttribute("id", b("uniqueID")());
        d = JSON.parse(a.getAttribute(d));
        i(f, d.length);
        d.forEach(function(d) {
            __p && __p();
            d = Array.isArray(d) ? m(d) : n(d);
            var g = d.moduleName,
                i = d.methodName,
                l = d.logicalKey,
                o = d.args;
            k(a, c, o);
            var p = b("Bootloader").loadModules.call(b("Bootloader"), [g], function(a) {
                j(f), a[i].apply(a, o)
            }, "Primer: addEventHandler");
            if (l != null) {
                d = h.get(l);
                d !== void 0 && d();
                h.set(l, function() {
                    p.remove(), j(a)
                })
            }
        })
    }

    function m(a) {
        var b = a[0],
            c = a[1];
        a = a.slice(2);
        return {
            moduleName: b,
            methodName: c,
            args: a
        }
    }

    function n(a) {
        var b = a.k,
            c = a.mod,
            d = a.meth;
        a = a.a;
        return {
            logicalKey: b,
            moduleName: c,
            methodName: d,
            args: a
        }
    }
    a = {
        run: function(a, c, d) {
            a = b("Parent").byAttribute(a, d);
            if (!a) return null;
            do l(a, c, d); while (a = b("Parent").byAttribute(a.parentNode, d));
            return !1
        }
    };
    e.exports = a
}), null);
__d("ReactServerPrimer", ["FBLogger", "Parent", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = new Map();

    function h(a) {
        __p && __p();
        while (a && a instanceof Node) {
            if (a instanceof HTMLElement && a.getAttribute("data-sr-before")) break;
            var c = a.previousSibling;
            c ? a = c : a = a.parentNode
        }
        if (a instanceof HTMLElement) return a;
        else {
            b("FBLogger")("ServerCallables").mustfix("Failed to find wrapping data-sr-before mount");
            return null
        }
    }

    function i(a, c, d) {
        __p && __p();
        var e = h(c);
        if (!e) return null;
        var f = !1,
            i = g.get(e);
        i || (i = [], g.set(e, i), f = !0);
        i.push(function() {
            var b = new a.constructor(a.type, a),
                e = d === void 0 ? c : d;
            e.dispatchEvent(b)
        });
        f && b("requireWeak")("ReactServerRenderer", function(a) {
            a.dequeueHydrate(e)
        });
        return !1
    }

    function a(a, c, d) {
        a = b("Parent").byAttribute(d, a);
        return !a ? null : i(c, a, d)
    }

    function c(a) {
        var b = g.get(a);
        b != null && b.forEach(function(a) {
            a()
        });
        g["delete"](a)
    }
    e.exports = {
        findSRBeforeMountElem: h,
        handleEvent: a,
        queueEvent: i,
        notifyReactHydrateMount: c
    }
}), null);
__d("firstClickTimestamp", ["DataStore"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "first-click-timestamp";
    a = {
        setIfFirstClick: function(a, c) {
            var d = b("DataStore").get(a, g);
            d || b("DataStore").set(a, g, c.toString())
        },
        get: function(a) {
            a = b("DataStore").get(a, g);
            return Number(a)
        }
    };
    e.exports = a
}), null);
__d("trackReferrer", ["Cookie", "Parent"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;

    function h(a) {
        return g.exec(a)[1] || ""
    }

    function a(a, c) {
        a = b("Parent").byAttribute(a, "data-referrer");
        if (a) {
            c = h(c);
            if (!c) return;
            c = c + "|" + a.getAttribute("data-referrer");
            b("Cookie").set("x-src", c)
        }
    }
    e.exports = a
}), null);
__d("Primer", ["invariant", "Bootloader", "CSS", "Env", "Event", "PageNavigationStageLogger", "Parent", "PhotoSnowliftLoader", "PrimerInlineHandlers", "ReactServerPrimer", "TimeSlice", "clickRefAction", "firstClickTimestamp", "ifRequired", "performanceNow", "trackReferrer"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = null,
        i = /async(?:-post)?|dialog(?:-post)?|theater|toggle/;
    a = document.documentElement;
    a != null || g(0, 2301);

    function j(a, c, d) {
        __p && __p();
        b("firstClickTimestamp").setIfFirstClick(c, b("performanceNow")());
        var e = c.getAttribute("ajaxify"),
            f = c.href,
            h = e || f;
        h && b("clickRefAction")("a", c, a).coalesce_namespace("primer");
        if (e && f && !/#$/.test(f)) {
            e = a.which && a.which === 2;
            var j = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
            if (e || j) return
        }
        e = b("PrimerInlineHandlers").run(d, a, "data-onclick");
        b("trackReferrer")(c, h);
        var k = c.rel && c.rel.match(i);
        k = k && k[0];
        f && b("PageNavigationStageLogger").setCookieForNavigation(f, a);
        j = "Primer: " + k;
        switch (k) {
            case "dialog":
            case "dialog-post":
                b("Bootloader").loadModules(["AsyncDialog"], function(a) {
                    a.bootstrap(h, c, k)
                }, j);
                break;
            case "async":
            case "async-post":
                b("Bootloader").loadModules(["AsyncRequest"], function(a) {
                    a.bootstrap(h, c)
                }, j);
                break;
            case "theater":
                !b("Env").isCQuick ? b("PhotoSnowliftLoader").load(h, c, j) : b("ifRequired")("PageTransitions", function(a) {
                    a.go(h)
                });
                break;
            case "toggle":
                d = c.parentNode;
                d != null || g(0, 2302);
                b("CSS").toggleClass(d, "openToggler");
                b("Bootloader").loadModules(["Toggler"], function(a) {
                    if (c.parentNode == null) return;
                    a.bootstrap(c)
                }, j);
                break;
            default:
                b("ifRequired")("PageTransitionsRegistrar", function(b) {
                    b.__onClick(a)
                }, function() {
                    b("PageNavigationStageLogger").setNote("primer_no_pagetrans"), b("PageNavigationStageLogger").updateCookie()
                });
                return e
        }
        return !1
    }
    b("Event").listen(document, "click", function(a) {
        a = a || window.event;
        if (a.button >= 2) return;
        h = a.target || a.srcElement;
        var c = b("Parent").byTag(h, "A");
        c instanceof HTMLAnchorElement ? c = j(a, c, h) : c = b("PrimerInlineHandlers").run(h, a, "data-onclick");
        c == null && (c = b("ReactServerPrimer").handleEvent("data-sr-onclick", a, h));
        return c
    }, b("Event").Priority._BUBBLE);
    b("Event").listen(document, "submit", function(a) {
        __p && __p();
        var c = a.getTarget(),
            d = c && c.getAttribute("rel");
        if (c && c.nodeName == "FORM" && (d == "async" || d === "dialog")) {
            b("clickRefAction")("f", c, a).coalesce_namespace("primer");
            var e = h;
            switch (d) {
                case "async":
                    b("Bootloader").loadModules(["FormSubmit"], function(a) {
                        a.send(c, e)
                    }, "Primer: async");
                    break;
                case "dialog":
                    b("Bootloader").loadModules(["FormSubmit", "AsyncDialog"], function(a, b) {
                        a = a.buildRequest(c, e);
                        a && b.send(a)
                    }, "Primer: form dialog");
                    break
            }
            return !1
        } else return b("ifRequired")("PageTransitionsRegistrar", function(b) {
            return b.__onSubmit(a, h)
        })
    }, b("Event").Priority._BUBBLE);
    var k = null;
    c = function(a, c) {
        c = c || window.event;
        k = c.target || c.srcElement;
        var d = b("PrimerInlineHandlers").run(k, c, "data-on" + a);
        l();
        a === "mouseover" && (m(), d == null && k && (d = b("ReactServerPrimer").handleEvent("data-sr-onmouseover", c, k)))
    };
    d = function(a, b) {
        b = b || window.event, k = b.relatedTarget || b.toElement
    };
    var l = function() {
            var a = k,
                c = b("Parent").byAttribute(k, "data-hover");
            if (c) {
                switch (c.getAttribute("data-hover")) {
                    case "tooltip":
                        b("Bootloader").loadModules(["Tooltip"], function(b) {
                            k === a && b.process(c, k)
                        }, "Primer: tooltip");
                        break
                }
                return
            }
        },
        m = function() {
            var a = k,
                c = b("Parent").byAttribute(a, "data-hovercard");
            c && b("Bootloader").loadModules(["Hovercard"], function(b) {
                k === a && b.processNode(c)
            }, "Primer: hovercard")
        };
    a.onmouseover = b("TimeSlice").guard(c.bind(null, "mouseover"), "Primer mouseover");
    a.onmouseout = b("TimeSlice").guard(d.bind(null, "mouseout"), "Primer mouseout");
    e = b("TimeSlice").guard(c.bind(null, "focus"), "Primer focus");
    a.addEventListener ? a.addEventListener("focus", e, !0) : a.attachEvent("onfocusin", e);
    f = b("TimeSlice").guard(c.bind(null, "keypress"), "Primer keypress");
    a.addEventListener && a.addEventListener("keypress", f, !0);
    b("PageNavigationStageLogger").init();
    b("PhotoSnowliftLoader").preload()
}), null);
__d("ChatConfig", ["invariant", "ChatConfigInitialData"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = Object.assign({}, b("ChatConfigInitialData")),
        i = {
            get: function(a, b) {
                return a in h ? h[a] : b
            },
            getBool: function(a) {
                return !!i.get(a, !1)
            },
            getNumber: function(a, b) {
                b === void 0 && (b = 0);
                if (a in h) {
                    typeof h[a] === "number" || g(0, 3109);
                    return h[a]
                }
                return b
            },
            set: function(a, b) {
                h[a] = b
            },
            getDebugInfo: function() {
                return h
            }
        };
    e.exports = i
}), null);
__d("SidebarPrelude", ["Arbiter", "Bootloader", "ChatConfig", "CSS", "URI", "setTimeout"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = b("ChatConfig").get("sidebar.hide_buddylist_off_homepage"),
        h = "buddylistOff",
        i = "sidebarMode";
    a = {
        addSidebarMode: function(a) {
            var c = document.documentElement;
            c && (g && !this.isOnHomepage() ? b("CSS").addClass(c, h) : (b("CSS").removeClass(c, h), g && b("setTimeout")(function() {
                b("Bootloader").loadModules(["Dock"], function(a) {
                    a.resizeAllFlyouts()
                }, "SidebarPrelude")
            })), c.clientWidth > a && (b("CSS").addClass(c, i), b("Arbiter").inform("sidebar/visibility", !0, "state")))
        },
        addBuddylistMode: function() {
            var a = document.documentElement;
            a && (g && !this.isOnHomepage() ? b("CSS").addClass(a, h) : (b("CSS").removeClass(a, h), g && b("setTimeout")(function() {
                b("Bootloader").loadModules(["Dock"], function(a) {
                    a.resizeAllFlyouts()
                }, "SidebarPrelude")
            })))
        },
        isOnHomepage: function() {
            return new(b("URI"))(window.location.href).getPath() === "/"
        }
    };
    e.exports = a
}), null);
__d("SubmitOnEnterListener", ["Bootloader", "CSS"], (function(a, b, c, d, e, f) {
    __p && __p();
    document.documentElement.onkeydown = function(a) {
        __p && __p();
        a = a || window.event;
        var c = a.target || a.srcElement;
        a = a.keyCode == 13 && !a.altKey && !a.ctrlKey && !a.metaKey && !a.shiftKey && b("CSS").hasClass(c, "enter_submit");
        if (a) {
            b("Bootloader").loadModules(["DOM", "Input", "trackReferrer", "Form"], function(a, b, d, e) {
                if (!b.isEmpty(c)) {
                    b = c.form;
                    a = a.scry(b, ".enter_submit_target")[0] || a.scry(b, '[type="submit"]')[0];
                    if (a) {
                        e = e.getAttribute(b, "ajaxify") || e.getAttribute(b, "action");
                        e && d(b, e);
                        a.click()
                    }
                }
            }, "SubmitOnEnterListener");
            return !1
        }
    }
}), null);
__d("SyntaxErrorMonitor", ["Cookie", "ErrorUtils"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "js_ver",
        h = 864e5,
        i = 1262304e6,
        j = null;

    function k(a) {
        return a.name == "SyntaxError" || /syntaxerror/i.test(a.message)
    }

    function l(a) {
        __p && __p();
        if (k(a)) {
            a = b("Cookie").get(g);
            var c = Math.floor((Date.now() - i) / h);
            if (!a || c - a >= j.bump_freq_day) {
                b("Cookie").set(g, c);
                a || (a = c);
                var d = encodeURIComponent(j.cdn_config);
                d = "/ajax/js_bump/?cdn_config=" + d + "&days=" + c + "&last_update=" + a;
                c = new Image();
                c.src = d
            }
        }
    }
    a = {
        init: function(a) {
            j = a, b("ErrorUtils").addListener(l)
        }
    };
    e.exports = a
}), null);
__d("CallStackExecutionObserver", ["ExecutionContextObservers", "ifRequired", "uniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = null;

    function h(a, b) {
        __p && __p();
        if (b) {
            var c = b.id,
                d = b.name;
            b = b.interactions;
            var e = Error.stackTraceLimit;
            Error.stackTraceLimit = 1e3;
            var f = new Error().stack;
            Error.stackTraceLimit = e;
            b.forEach(function(b) {
                b.inform(a + ":" + d, {
                    rawStackTrace: f
                }).addStringAnnotation("id", c)
            })
        }
    }
    a = {
        onNewContextCreated: function(a, c, d) {
            __p && __p();
            a = b("ifRequired")("TimeSliceAutoclosedInteraction", function(a) {
                return a
            });
            a = a ? a.getInteractionsActiveRightNow() : [];
            a = a.filter(function(a) {
                return a.isEnabledForMode("full")
            });
            if (d && d.isContinuation && a.length) {
                var e = b("uniqueID")();
                d = Error.stackTraceLimit;
                Error.stackTraceLimit = 1e3;
                var f = new Error().stack;
                Error.stackTraceLimit = d;
                a.forEach(function(a) {
                    var b = a.inform("created_continuation:" + c, {
                        rawStackTrace: f
                    }).addStringAnnotation("id", e);
                    g && b.addStringAnnotation("parentID", g);
                    a.trace().addStringAnnotation("has_stack_trace", "1")
                });
                return {
                    id: e,
                    parentID: g,
                    name: c,
                    interactions: a
                }
            }
            return null
        },
        onContextCanceled: function(a, b) {
            h("cancelling_continuation", b)
        },
        onBeforeContextStarted: function(a, b, c) {
            a = g;
            b && b.id && (g = b.id);
            return {
                executionParentID: a
            }
        },
        onAfterContextStarted: function(a, b, c, d) {
            h("executing_continuation", b);
            return c
        },
        onAfterContextEnded: function(a, b, c, d) {
            c && (g = c.executionParentID), h("executing_continuation_end", b)
        },
        getBeforeID: function() {
            return b("ExecutionContextObservers").beforeIDs.CALL_STACK
        },
        getAfterID: function() {
            return b("ExecutionContextObservers").afterIDs.CALL_STACK
        }
    };
    e.exports = a
}), null);
__d("WorkerUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function b() {
        try {
            return "WorkerGlobalScope" in a && a instanceof a.WorkerGlobalScope
        } catch (a) {
            return !1
        }
    }
    e.exports = {
        isWorkerContext: b
    }
}), null);
__d("getReusableTimeSliceContinuation", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a, b, c) {
        __p && __p();
        var d = !1,
            e = a.getGuardedContinuation(c),
            f = function(b) {
                e(function() {
                    d || (e = a.getGuardedContinuation(c)), b()
                })
            };
        f.last = function(a) {
            var b = e;
            g();
            b(a)
        };
        f[b] = {
            cancel: function() {
                d || (a.cancel(e), g(), d = !0)
            },
            tokens: [],
            invoked: !1
        };

        function g() {
            d = !0, e = function(a) {
                a()
            }
        }
        return f
    }
    e.exports = a
}), null);
__d("TimeSliceImpl", ["invariant", "CallStackExecutionObserver", "CircularBuffer", "Env", "ErrorUtils", "FBLoggerImpl", "IntervalTrackingBoundedBuffer", "WorkerUtils", "getReusableTimeSliceContinuation", "nullthrows", "performanceAbsoluteNow", "wrapFunction"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = [],
        i = [],
        j = "key" + Math.random(),
        k = 1,
        l = !1,
        m = 0,
        n = 1,
        o = 2,
        p = {},
        q = m,
        r = new(b("CircularBuffer"))(100),
        s = 0,
        t = 0;
    c = b("Env").timesliceBufferSize;
    c == null && (c = 5e3);
    var u = new(b("IntervalTrackingBoundedBuffer"))(c),
        v = "stackTraceLimit" in Error,
        w = [],
        x = [],
        y = [];

    function z() {
        return A(w)
    }

    function A(a) {
        return a.length > 0 ? a[a.length - 1] : null
    }

    function B(a, c) {
        var d = {};
        b("ErrorUtils").applyWithGuard(F, null, [a, c, d]);
        b("ErrorUtils").applyWithGuard(G, null, [a, c, d]);
        w.push(a);
        x.push(c);
        y.push(d)
    }

    function C(a, b, c) {
        h.forEach(function(d) {
            var e = d.onNewContextCreated(z(), b, c);
            a[d.getBeforeID()] = e
        })
    }

    function D(a, b) {
        h.forEach(function(c) {
            c.onContextCanceled(a, b[c.getBeforeID()])
        })
    }

    function E(a, b, c) {
        i.forEach(function(d) {
            d.onAfterContextEnded(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta)
        })
    }

    function F(a, b, c) {
        h.forEach(function(d) {
            var e = d.onBeforeContextStarted(a, b[d.getBeforeID()], a.meta);
            c[d.getBeforeID()] = e
        })
    }

    function G(a, b, c) {
        h.forEach(function(d) {
            var e = d.onAfterContextStarted(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta);
            c[d.getBeforeID()] = e
        })
    }

    function H() {
        __p && __p();
        var a = z(),
            c = A(x),
            d = A(y);
        if (a == null || c == null || d == null) {
            b("FBLoggerImpl")("TimeSlice").mustfix("popped too many times off the timeslice stack");
            l = !1;
            return
        }
        b("ErrorUtils").applyWithGuard(E, null, [a, c, d]);
        l = !a.isRoot;
        w.pop();
        x.pop();
        y.pop()
    }
    var I = {
        PropagationType: {
            CONTINUATION: 0,
            EXECUTION: 1,
            ORPHAN: 2
        },
        guard: function(a, c, d) {
            __p && __p();
            typeof a === "function" || g(0, 3725);
            typeof c === "string" || g(0, 3726);
            var e = J(d);
            if (a[j]) return a;
            e.root || I.checkCoverage();
            var f;
            l && (f = z());
            var h = {},
                i = 0,
                m = void 0,
                n = b("Env").deferred_stack_trace_rate || 0;
            n !== 0 && Math.random() * n <= 1 && b("Env").timeslice_heartbeat_config && b("Env").timeslice_heartbeat_config.isArtilleryOn && d && d.registerCallStack && (m = b("ErrorUtils").normalizeError(new Error("deferred execution source")));
            var o = {
                cancel: function() {
                    o.invoked || b("ErrorUtils").applyWithGuard(D, null, [c, h])
                },
                tokens: [],
                invoked: !1
            };
            n = function() {
                __p && __p();
                var d = b("performanceAbsoluteNow")(),
                    g, j = k++,
                    n = {
                        contextID: j,
                        name: c,
                        isRoot: !l,
                        executionNumber: i++,
                        meta: e,
                        absBeginTimeMs: d
                    };
                o.invoked || (o.invoked = !0, o.tokens.length && (o.tokens.forEach(function(a) {
                    delete p[a]
                }), o.tokens = []));
                B(n, h);
                if (f != null) {
                    var q = !!e.isContinuation;
                    f.isRoot ? (n.indirectParentID = f.contextID, n.isEdgeContinuation = q) : (n.indirectParentID = f.indirectParentID, n.isEdgeContinuation = !!(q && f.isEdgeContinuation))
                }
                var r = b("WorkerUtils").isWorkerContext();
                l = !0;
                try {
                    if (!n.isRoot || r) return a.apply(this, arguments);
                    else {
                        var s = "TimeSlice" + (c ? ": " + c : "");
                        g = b("ErrorUtils").applyWithGuard(a, this, [].concat(Array.prototype.slice.call(arguments)), null, s, {
                            deferredSource: m
                        });
                        return g
                    }
                } finally {
                    var v = z();
                    if (v == null) b("FBLoggerImpl")("TimeSlice").mustfix("timeslice stack misaligned, not logging the block"), l = !1;
                    else {
                        var w = v.isRoot,
                            x = v.contextID,
                            y = v.indirectParentID,
                            A = v.isEdgeContinuation,
                            C = b("performanceAbsoluteNow")();
                        v.absEndTimeMs = C;
                        if (w && d != null) {
                            t += C - d;
                            var D = babelHelpers["extends"]({
                                begin: d,
                                end: C,
                                id: x,
                                indirectParentID: y,
                                representsExecution: !0,
                                isEdgeContinuation: f && A,
                                guard: c
                            }, e, a.__SMmeta);
                            u.pushElement(D)
                        }
                        H()
                    }
                }
            };
            n = n;
            n[j] = o;
            b("ErrorUtils").applyWithGuard(C, null, [h, c, e]);
            return n
        },
        copyGuardForWrapper: function(a, b) {
            a && a[j] && (b[j] = a[j]);
            return b
        },
        cancel: function(a) {
            a = a ? a[j] : null;
            a && !a.invoked && (a.cancel(), a.tokens.forEach(function(a) {
                delete p[a]
            }), a.invoked = !0)
        },
        cancelWithToken: function(a) {
            p[a] && I.cancel(p[a])
        },
        registerForCancelling: function(a, b) {
            a && (b[j] && (p[a] || (b[j].invoked || (p[a] = b, b[j].tokens.push(a)))))
        },
        inGuard: function() {
            return l
        },
        checkCoverage: function() {
            var a;
            if (q !== o && !l) {
                v && (a = Error.stackTraceLimit, Error.stackTraceLimit = 50);
                var c = new Error("Missing TimeSlice coverage");
                v && (Error.stackTraceLimit = a);
                q === n && Math.random() < s ? b("FBLoggerImpl")("TimeSlice").catching(c).debug("Missing TimeSlice coverage") : q === m && b("nullthrows")(r).write(c)
            }
        },
        setLogging: function(a, c) {
            if (q !== m) return;
            s = c;
            a ? (q = n, b("nullthrows")(r).read().forEach(function(a) {
                Math.random() < s && b("FBLoggerImpl")("TimeSlice").catching(a).warn("error from logging buffer")
            })) : q = o;
            b("nullthrows")(r).clear();
            r = void 0
        },
        getContext: function() {
            return z()
        },
        getTotalTime: function() {
            return t
        },
        getGuardedContinuation: function(a) {
            return I.guard(function(a) {
                for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                return a.apply(this, c)
            }, a, {
                propagationType: I.PropagationType.CONTINUATION
            })
        },
        getReusableContinuation: function(a) {
            return b("getReusableTimeSliceContinuation")(I, j, a)
        },
        getPlaceholderReusableContinuation: function() {
            var a = function(a) {
                return a()
            };
            a.last = a;
            return a
        },
        getGuardNameStack: function() {
            return w.map(function(a) {
                return a.name
            })
        },
        registerExecutionContextObserver: function(a) {
            __p && __p();
            var b = !1;
            for (var c = 0; c < h.length; c++)
                if (h[c].getBeforeID() > a.getBeforeID()) {
                    h.splice(c, 0, a);
                    b = !0;
                    break
                } b || h.push(a);
            for (var c = 0; c < i.length; c++)
                if (i[c].getAfterID() > a.getAfterID()) {
                    i.splice(c, 0, a);
                    return
                } i.push(a)
        },
        catchUpOnDemandExecutionContextObservers: function(a) {
            for (var b = 0; b < w.length; b++) {
                var c = w[b],
                    d = x[b],
                    e = y[b] || {};
                d = a.onBeforeContextStartedWhileEnabled(c, d[a.getBeforeID()], c.meta);
                e[a.getBeforeID()] = d;
                y[b] = e
            }
        },
        getBuffer: function() {
            return u
        }
    };

    function J(a) {
        __p && __p();
        var b = {};
        a && a.propagateCounterAttribution !== void 0 && (b.propagateCounterAttribution = a.propagateCounterAttribution);
        a && a.root !== void 0 && (b.root = a.root);
        switch (a && a.propagationType) {
            case I.PropagationType.CONTINUATION:
                b.isContinuation = !0;
                b.extendsExecution = !0;
                break;
            case I.PropagationType.ORPHAN:
                b.isContinuation = !1;
                b.extendsExecution = !1;
                break;
            case I.PropagationType.EXECUTION:
            default:
                b.isContinuation = !1, b.extendsExecution = !0
        }
        return b
    }
    b("Env").sample_continuation_stacktraces && I.registerExecutionContextObserver(b("CallStackExecutionObserver"));
    b("wrapFunction").setWrapper(I.guard, "entry");
    a.TimeSlice = I;
    e.exports = I
}), 3);
__d("URLFragmentPrelude", ["URLFragmentPreludeConfig"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
    var g = /^[^\/\\#!\.\?\*\&\^=]+$/;
    window.location.href.replace(a, function(a, c, d, e) {
        __p && __p();
        var f;
        f = a = c + (d ? "?" + d : "");
        if (e) {
            var h = e.replace(/^(!|%21)/, "");
            h = h.charAt(0);
            if (h !== "/" && h !== "\\" && b("URLFragmentPreludeConfig").hashtagRedirect) {
                h = e.match(g);
                h && !d && c == "/" && (f = "/hashtag/" + e)
            }
        }
        f != a && window.location.replace(f)
    })
}), null);
__d("VisibilityListener", ["Visibility", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = Date.now() - b("performanceNow")(),
        h = [],
        i = !1,
        j = 1e4;
    h.push({
        key: g,
        value: b("Visibility").isHidden()
    });

    function k(a, b) {
        if (i || h.length > j) {
            i = !0;
            return
        }
        h.push({
            key: a + g,
            value: b
        })
    }
    b("Visibility").addListener(b("Visibility").VISIBLE, function(a) {
        k(a.changeTime, !1)
    });
    b("Visibility").addListener(b("Visibility").HIDDEN, function(a) {
        k(a.changeTime, !0)
    });
    var l = {
        getHiddenTimings: function(a, c) {
            __p && __p();
            if (i) return null;
            var d;
            for (var a = h.length - 1; a >= 0; a--)
                if (h[a].key <= c) {
                    d = h.slice(0, a + 1);
                    break
                } if (d === void 0) return null;
            d[d.length - 1].value !== b("Visibility").isHidden() && (d[d.length] = {
                key: c,
                value: b("Visibility").isHidden()
            });
            return d
        },
        getHiddenTime: function(a, c) {
            __p && __p();
            var d = l.getHiddenTimings(a, c);
            if (!d) return null;
            if (d.length < 2) return b("Visibility").isHidden() ? c - a : 0;
            var e = d.length - 1;
            c = d[e].value ? c - d[e].key : 0;
            for (--e; e > 0; e--)
                if (d[e].key > a) d[e].value && (c += d[e + 1].key - d[e].key);
                else break;
            d[e].value && (c = d[e + 1].key - a);
            return c
        },
        supported: function() {
            return !0
        }
    };
    e.exports = l
}), 3);
__d("cancelIdleCallbackBlue", ["IdleCallbackImplementation", "TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = b("TimerStorage").IDLE_CALLBACK;

    function a(a) {
        b("TimerStorage").unset(g, a);
        var c = g + String(a);
        b("TimeSlice").cancelWithToken(c);
        b("IdleCallbackImplementation").cancelIdleCallback(a)
    }
    e.exports = a
}), null);
__d("clearTimeoutBlue", ["TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeClearTimeout || a.clearTimeout,
        h = b("TimerStorage").TIMEOUT;

    function c(a) {
        if (a != null) {
            b("TimerStorage").unset(h, a);
            var c = h + String(a);
            b("TimeSlice").cancelWithToken(c)
        }
        g(a)
    }
    e.exports = c
}), null);
__d("legacy:arbiter", ["Arbiter"], (function(a, b, c, d, e, f) {
    a.Arbiter = b("Arbiter")
}), 3);
__d("legacy:bootloader", ["Bootloader"], (function(a, b, c, d, e, f) {
    a.Bootloader = b("Bootloader")
}), 3);
__d("legacy:constructor-cache", ["JSCC"], (function(a, b, c, d, e, f) {
    a.JSCC = b("JSCC")
}), 3);
__d("legacy:css", ["CSS"], (function(a, b, c, d, e, f) {
    a.CSS = b("CSS")
}), 3);
__d("legacy:dom-core", ["$", "ge"], (function(a, b, c, d, e, f) {
    a.$ = a.$ || b("$"), a.ge = b("ge")
}), 3);
__d("legacy:emptyFunction", ["emptyFunction"], (function(a, b, c, d, e, f) {
    a.emptyFunction = b("emptyFunction")
}), 3);
__d("goURI", ["URI"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("URI").go
}), null);
__d("legacy:goURI", ["goURI"], (function(a, b, c, d, e, f) {
    a.goURI = b("goURI")
}), 3);
__d("legacy:onload", ["Run", "PageEvents"], (function(a, b, c, d, e, f) {
    a.PageEvents = b("PageEvents"), a.onloadRegister_DEPRECATED = b("Run").onLoad, a.onloadRegister = function() {
        return b("Run").onLoad.apply(this, arguments)
    }, a.onafterloadRegister_DEPRECATED = b("Run").onAfterLoad, a.onafterloadRegister = function() {
        return b("Run").onAfterLoad.apply(this, arguments)
    }, a.onleaveRegister = b("Run").onLeave, a.onbeforeunloadRegister = b("Run").onBeforeUnload, a.onunloadRegister = b("Run").onUnload
}), 3);
__d("legacy:parent", ["Parent"], (function(a, b, c, d, e, f) {
    a.Parent = b("Parent")
}), 3);
__d("lowerFacebookDomain", [], (function(a, b, c, d, e, f) {
    b = window.location.hostname.match(/\.(facebook\.sg|facebookcorewwwi\.onion|workplace\.com)$/);
    var g = b ? b[1] : "facebook.com";
    a.setDomain = function(a) {
        g = a
    };
    a.isValidDocumentDomain = function() {
        return document.domain == g ? !0 : !1
    };

    function a() {
        document.domain = g
    }
    e.exports = a
}), null);
__d("lowerDomain", ["lowerFacebookDomain"], (function(a, b, c, d, e, f) {
    ((a = document.domain) != null ? a : "").toLowerCase().match(/(^|\.)(facebook|facebookcorewwwi|workplace)\..*/) && b("lowerFacebookDomain")()
}), null);
__d("markJSEnabled", [], (function(a, b, c, d, e, f) {
    a = document.documentElement;
    a.className = a.className.replace("no_js", "")
}), null);
__d("requestIdleCallbackBlue", ["TimerStorage", "TimeSlice", "requestIdleCallbackAcrossTransitions"], (function(a, b, c, d, e, f) {
    e.exports = function(c, d) {
        var e;

        function f(a) {
            b("TimerStorage").unset(b("TimerStorage").IDLE_CALLBACK, e), c(a)
        }
        b("TimeSlice").copyGuardForWrapper(c, f);
        e = b("requestIdleCallbackAcrossTransitions").call(a, f, d);
        b("TimerStorage").set(b("TimerStorage").IDLE_CALLBACK, e);
        return e
    }
}), null);
__d("setTimeoutBlue", ["TimerStorage", "TimeSlice", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, c) {
        __p && __p();
        var d, e = function() {
            b("TimerStorage").unset(b("TimerStorage").TIMEOUT, d);
            for (var c = arguments.length, e = new Array(c), f = 0; f < c; f++) e[f] = arguments[f];
            Function.prototype.apply.call(a, this, e)
        };
        b("TimeSlice").copyGuardForWrapper(a, e);
        for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), h = 2; h < f; h++) g[h - 2] = arguments[h];
        d = b("setTimeoutAcrossTransitions").apply(void 0, [e, c].concat(g));
        b("TimerStorage").set(b("TimerStorage").TIMEOUT, d);
        return d
    }
    e.exports = a
}), null);
__d("wait_for_load", ["Run"], (function(a, b, c, d, e, f) {
    __p && __p();

    function c(a, c, d) {
        __p && __p();
        d = d.bind(a, c);
        if (window.domready) return d();
        switch ((c || event).type) {
            case "load":
            case "focus":
                b("Run").onAfterLoad(d);
                return;
            case "click":
                var e = a.style,
                    f = document.body.style;
                e.cursor = f.cursor = "progress";
                b("Run").onAfterLoad(function() {
                    e.cursor = f.cursor = "", a.tagName.toLowerCase() == "a" ? !1 !== d() && a.href && (window.location.href = a.href) : a.click && a.click()
                });
                break
        }
        return !1
    }
    a.wait_for_load = c
}), 3);