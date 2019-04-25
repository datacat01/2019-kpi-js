define("artemis/common/type-checkers", ["artemis/common/null-checkers"], function(e) {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: o
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (t.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var i in e) t.d(o, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return o
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 382)
    }({
        0: function(e, t) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        },
        1: function(e, t, n) {
            var o = n(13)("wks"),
                i = n(12),
                r = n(0).Symbol,
                a = "function" == typeof r;
            (e.exports = function(e) {
                return o[e] || (o[e] = a && r[e] || (a ? r : i)("Symbol." + e))
            }).store = o
        },
        10: function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        },
        11: function(e, t, n) {
            var o = n(32),
                i = n(15);
            e.exports = function(e) {
                return o(i(e))
            }
        },
        12: function(e, t) {
            var n = 0,
                o = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
            }
        },
        13: function(e, t, n) {
            var o = n(8),
                i = n(0),
                r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
            (e.exports = function(e, t) {
                return r[e] || (r[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: o.version,
                mode: n(18) ? "pure" : "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            })
        },
        15: function(e, t) {
            e.exports = function(e) {
                if (void 0 == e) throw TypeError("Can't call method on  " + e);
                return e
            }
        },
        16: function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        17: function(e, t, n) {
            var o = n(0),
                i = n(8),
                r = n(2),
                a = n(9),
                s = n(28),
                l = function(e, t, n) {
                    var c, u, f, d, p = e & l.F,
                        m = e & l.G,
                        h = e & l.S,
                        v = e & l.P,
                        g = e & l.B,
                        y = m ? o : h ? o[t] || (o[t] = {}) : (o[t] || {}).prototype,
                        _ = m ? i : i[t] || (i[t] = {}),
                        E = _.prototype || (_.prototype = {});
                    for (c in m && (n = t), n) f = ((u = !p && y && void 0 !== y[c]) ? y : n)[c], d = g && u ? s(f, o) : v && "function" == typeof f ? s(Function.call, f) : f, y && a(y, c, f, e & l.U), _[c] != f && r(_, c, d), v && E[c] != f && (E[c] = f)
                };
            o.core = i, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
        },
        18: function(e, t) {
            e.exports = !1
        },
        19: function(e, t, n) {
            var o = n(33),
                i = n(24);
            e.exports = Object.keys || function(e) {
                return o(e, i)
            }
        },
        2: function(e, t, n) {
            var o = n(7),
                i = n(16);
            e.exports = n(3) ? function(e, t, n) {
                return o.f(e, t, i(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        },
        20: function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1)
            }
        },
        21: function(e, t) {
            var n = Math.ceil,
                o = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
            }
        },
        22: function(e, t, n) {
            var o = n(13)("keys"),
                i = n(12);
            e.exports = function(e) {
                return o[e] || (o[e] = i(e))
            }
        },
        23: function(e, t, n) {
            var o = n(5),
                i = n(0).document,
                r = o(i) && o(i.createElement);
            e.exports = function(e) {
                return r ? i.createElement(e) : {}
            }
        },
        24: function(e, t) {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        },
        25: function(e, t, n) {
            var o = n(7).f,
                i = n(6),
                r = n(1)("toStringTag");
            e.exports = function(e, t, n) {
                e && !i(e = n ? e : e.prototype, r) && o(e, r, {
                    configurable: !0,
                    value: t
                })
            }
        },
        26: function(e, t, n) {
            var o = n(5);
            e.exports = function(e, t) {
                if (!o(e)) return e;
                var n, i;
                if (t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
                if ("function" == typeof(n = e.valueOf) && !o(i = n.call(e))) return i;
                if (!t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        27: function(e, t, n) {
            var o = n(21),
                i = Math.min;
            e.exports = function(e) {
                return e > 0 ? i(o(e), 9007199254740991) : 0
            }
        },
        28: function(e, t, n) {
            var o = n(29);
            e.exports = function(e, t, n) {
                if (o(e), void 0 === t) return e;
                switch (n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, o) {
                            return e.call(t, n, o)
                        };
                    case 3:
                        return function(n, o, i) {
                            return e.call(t, n, o, i)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
        },
        29: function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e
            }
        },
        3: function(e, t, n) {
            e.exports = !n(10)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        30: function(e, t, n) {
            e.exports = !n(3) && !n(10)(function() {
                return 7 != Object.defineProperty(n(23)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        32: function(e, t, n) {
            var o = n(20);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == o(e) ? e.split("") : Object(e)
            }
        },
        33: function(e, t, n) {
            var o = n(6),
                i = n(11),
                r = n(40)(!1),
                a = n(22)("IE_PROTO");
            e.exports = function(e, t) {
                var n, s = i(e),
                    l = 0,
                    c = [];
                for (n in s) n != a && o(s, n) && c.push(n);
                for (; t.length > l;) o(s, n = t[l++]) && (~r(c, n) || c.push(n));
                return c
            }
        },
        34: function(e, t, n) {
            e.exports = n(13)("native-function-to-string", Function.toString)
        },
        35: function(e, t, n) {
            var o = n(4),
                i = n(42),
                r = n(24),
                a = n(22)("IE_PROTO"),
                s = function() {},
                l = function() {
                    var e, t = n(23)("iframe"),
                        o = r.length;
                    for (t.style.display = "none", n(39).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; o--;) delete l.prototype[r[o]];
                    return l()
                };
            e.exports = Object.create || function(e, t) {
                var n;
                return null !== e ? (s.prototype = o(e), n = new s, s.prototype = null, n[a] = e) : n = l(), void 0 === t ? n : i(n, t)
            }
        },
        382: function(e, t, n) {
            var o, i, r = function() {
                var e = "D:\\a\\_work\\15\\s\\src\\js\\artemis\\common\\type-checkers.js",
                    t = "dfb6dc4694bd43f700a3529e31137cd10184a07d",
                    n = new(0, function() {}.constructor)("return this")(),
                    o = {
                        path: "D:\\a\\_work\\15\\s\\src\\js\\artemis\\common\\type-checkers.js",
                        statementMap: {
                            0: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 44,
                                    column: 3
                                }
                            },
                            1: {
                                start: {
                                    line: 4,
                                    column: 2
                                },
                                end: {
                                    line: 6,
                                    column: 5
                                }
                            },
                            2: {
                                start: {
                                    line: 7,
                                    column: 2
                                },
                                end: {
                                    line: 7,
                                    column: 49
                                }
                            },
                            3: {
                                start: {
                                    line: 10,
                                    column: 4
                                },
                                end: {
                                    line: 18,
                                    column: 5
                                }
                            },
                            4: {
                                start: {
                                    line: 11,
                                    column: 6
                                },
                                end: {
                                    line: 13,
                                    column: 8
                                }
                            },
                            5: {
                                start: {
                                    line: 12,
                                    column: 8
                                },
                                end: {
                                    line: 12,
                                    column: 26
                                }
                            },
                            6: {
                                start: {
                                    line: 15,
                                    column: 6
                                },
                                end: {
                                    line: 17,
                                    column: 8
                                }
                            },
                            7: {
                                start: {
                                    line: 16,
                                    column: 8
                                },
                                end: {
                                    line: 16,
                                    column: 133
                                }
                            },
                            8: {
                                start: {
                                    line: 20,
                                    column: 4
                                },
                                end: {
                                    line: 20,
                                    column: 24
                                }
                            },
                            9: {
                                start: {
                                    line: 27,
                                    column: 16
                                },
                                end: {
                                    line: 29,
                                    column: 3
                                }
                            },
                            10: {
                                start: {
                                    line: 28,
                                    column: 4
                                },
                                end: {
                                    line: 28,
                                    column: 111
                                }
                            },
                            11: {
                                start: {
                                    line: 36,
                                    column: 17
                                },
                                end: {
                                    line: 40,
                                    column: 3
                                }
                            },
                            12: {
                                start: {
                                    line: 37,
                                    column: 15
                                },
                                end: {
                                    line: 37,
                                    column: 29
                                }
                            },
                            13: {
                                start: {
                                    line: 39,
                                    column: 4
                                },
                                end: {
                                    line: 39,
                                    column: 101
                                }
                            },
                            14: {
                                start: {
                                    line: 42,
                                    column: 2
                                },
                                end: {
                                    line: 42,
                                    column: 28
                                }
                            },
                            15: {
                                start: {
                                    line: 43,
                                    column: 2
                                },
                                end: {
                                    line: 43,
                                    column: 30
                                }
                            }
                        },
                        fnMap: {
                            0: {
                                name: "(anonymous_0)",
                                decl: {
                                    start: {
                                        line: 1,
                                        column: 127
                                    },
                                    end: {
                                        line: 1,
                                        column: 128
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 161
                                    },
                                    end: {
                                        line: 44,
                                        column: 1
                                    }
                                },
                                line: 1
                            },
                            1: {
                                name: "_typeof",
                                decl: {
                                    start: {
                                        line: 9,
                                        column: 11
                                    },
                                    end: {
                                        line: 9,
                                        column: 18
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 9,
                                        column: 24
                                    },
                                    end: {
                                        line: 21,
                                        column: 3
                                    }
                                },
                                line: 9
                            },
                            2: {
                                name: "_typeof",
                                decl: {
                                    start: {
                                        line: 11,
                                        column: 25
                                    },
                                    end: {
                                        line: 11,
                                        column: 32
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 11,
                                        column: 38
                                    },
                                    end: {
                                        line: 13,
                                        column: 7
                                    }
                                },
                                line: 11
                            },
                            3: {
                                name: "_typeof",
                                decl: {
                                    start: {
                                        line: 15,
                                        column: 25
                                    },
                                    end: {
                                        line: 15,
                                        column: 32
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 15,
                                        column: 38
                                    },
                                    end: {
                                        line: 17,
                                        column: 7
                                    }
                                },
                                line: 15
                            },
                            4: {
                                name: "isArray",
                                decl: {
                                    start: {
                                        line: 27,
                                        column: 25
                                    },
                                    end: {
                                        line: 27,
                                        column: 32
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 27,
                                        column: 40
                                    },
                                    end: {
                                        line: 29,
                                        column: 3
                                    }
                                },
                                line: 27
                            },
                            5: {
                                name: "isObject",
                                decl: {
                                    start: {
                                        line: 36,
                                        column: 26
                                    },
                                    end: {
                                        line: 36,
                                        column: 34
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 36,
                                        column: 42
                                    },
                                    end: {
                                        line: 40,
                                        column: 3
                                    }
                                },
                                line: 36
                            }
                        },
                        branchMap: {
                            0: {
                                loc: {
                                    start: {
                                        line: 10,
                                        column: 4
                                    },
                                    end: {
                                        line: 18,
                                        column: 5
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 10,
                                        column: 4
                                    },
                                    end: {
                                        line: 18,
                                        column: 5
                                    }
                                }, {
                                    start: {
                                        line: 10,
                                        column: 4
                                    },
                                    end: {
                                        line: 18,
                                        column: 5
                                    }
                                }],
                                line: 10
                            },
                            1: {
                                loc: {
                                    start: {
                                        line: 10,
                                        column: 8
                                    },
                                    end: {
                                        line: 10,
                                        column: 75
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 10,
                                        column: 8
                                    },
                                    end: {
                                        line: 10,
                                        column: 36
                                    }
                                }, {
                                    start: {
                                        line: 10,
                                        column: 40
                                    },
                                    end: {
                                        line: 10,
                                        column: 75
                                    }
                                }],
                                line: 10
                            },
                            2: {
                                loc: {
                                    start: {
                                        line: 16,
                                        column: 15
                                    },
                                    end: {
                                        line: 16,
                                        column: 132
                                    }
                                },
                                type: "cond-expr",
                                locations: [{
                                    start: {
                                        line: 16,
                                        column: 111
                                    },
                                    end: {
                                        line: 16,
                                        column: 119
                                    }
                                }, {
                                    start: {
                                        line: 16,
                                        column: 122
                                    },
                                    end: {
                                        line: 16,
                                        column: 132
                                    }
                                }],
                                line: 16
                            },
                            3: {
                                loc: {
                                    start: {
                                        line: 16,
                                        column: 15
                                    },
                                    end: {
                                        line: 16,
                                        column: 108
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 16,
                                        column: 15
                                    },
                                    end: {
                                        line: 16,
                                        column: 18
                                    }
                                }, {
                                    start: {
                                        line: 16,
                                        column: 22
                                    },
                                    end: {
                                        line: 16,
                                        column: 50
                                    }
                                }, {
                                    start: {
                                        line: 16,
                                        column: 54
                                    },
                                    end: {
                                        line: 16,
                                        column: 80
                                    }
                                }, {
                                    start: {
                                        line: 16,
                                        column: 84
                                    },
                                    end: {
                                        line: 16,
                                        column: 108
                                    }
                                }],
                                line: 16
                            },
                            4: {
                                loc: {
                                    start: {
                                        line: 28,
                                        column: 11
                                    },
                                    end: {
                                        line: 28,
                                        column: 110
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 28,
                                        column: 11
                                    },
                                    end: {
                                        line: 28,
                                        column: 55
                                    }
                                }, {
                                    start: {
                                        line: 28,
                                        column: 59
                                    },
                                    end: {
                                        line: 28,
                                        column: 86
                                    }
                                }, {
                                    start: {
                                        line: 28,
                                        column: 90
                                    },
                                    end: {
                                        line: 28,
                                        column: 110
                                    }
                                }],
                                line: 28
                            },
                            5: {
                                loc: {
                                    start: {
                                        line: 39,
                                        column: 11
                                    },
                                    end: {
                                        line: 39,
                                        column: 100
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 39,
                                        column: 11
                                    },
                                    end: {
                                        line: 39,
                                        column: 25
                                    }
                                }, {
                                    start: {
                                        line: 39,
                                        column: 30
                                    },
                                    end: {
                                        line: 39,
                                        column: 47
                                    }
                                }, {
                                    start: {
                                        line: 39,
                                        column: 51
                                    },
                                    end: {
                                        line: 39,
                                        column: 70
                                    }
                                }, {
                                    start: {
                                        line: 39,
                                        column: 75
                                    },
                                    end: {
                                        line: 39,
                                        column: 100
                                    }
                                }],
                                line: 39
                            }
                        },
                        s: {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0,
                            6: 0,
                            7: 0,
                            8: 0,
                            9: 0,
                            10: 0,
                            11: 0,
                            12: 0,
                            13: 0,
                            14: 0,
                            15: 0
                        },
                        f: {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0
                        },
                        b: {
                            0: [0, 0],
                            1: [0, 0],
                            2: [0, 0],
                            3: [0, 0, 0, 0],
                            4: [0, 0, 0],
                            5: [0, 0, 0, 0]
                        },
                        inputSourceMap: null,
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
                    },
                    i = n.__coverage__ || (n.__coverage__ = {});
                return i[e] && i[e].hash === t ? i[e] : (o.hash = t, i[e] = o)
            }();
            r.s[0]++, o = [t, n(48), n(80), n(81)], void 0 === (i = function(e, t) {
                "use strict";

                function n(e) {
                    return r.f[1]++, r.s[3]++, r.b[1][0]++, "function" == typeof Symbol && (r.b[1][1]++, "symbol" == typeof Symbol.iterator) ? (r.b[0][0]++, r.s[4]++, n = function(e) {
                        return r.f[2]++, r.s[5]++, typeof e
                    }) : (r.b[0][1]++, r.s[6]++, n = function(e) {
                        return r.f[3]++, r.s[7]++, r.b[3][0]++, e && (r.b[3][1]++, "function" == typeof Symbol) && (r.b[3][2]++, e.constructor === Symbol) && (r.b[3][3]++, e !== Symbol.prototype) ? (r.b[2][0]++, "symbol") : (r.b[2][1]++, typeof e)
                    }), r.s[8]++, n(e)
                }
                r.f[0]++, r.s[1]++, Object.defineProperty(e, "__esModule", {
                    value: !0
                }), r.s[2]++, e.isObject = e.isArray = void 0, r.s[9]++, r.s[11]++, r.s[14]++, e.isArray = function(e) {
                    return r.f[4]++, r.s[10]++, r.b[4][0]++, !(0, t.isNullOrUndefined)(e) && (r.b[4][1]++, "object" === n(e)) && (r.b[4][2]++, Array.isArray(e))
                }, r.s[15]++, e.isObject = function(e) {
                    r.f[5]++;
                    var t = (r.s[12]++, n(e));
                    return r.s[13]++, r.b[5][0]++, null !== e && (r.b[5][1]++, "object" === t || (r.b[5][2]++, "function" === t)) && (r.b[5][3]++, !(e instanceof Array))
                }
            }.apply(t, o)) || (e.exports = i)
        },
        39: function(e, t, n) {
            var o = n(0).document;
            e.exports = o && o.documentElement
        },
        4: function(e, t, n) {
            var o = n(5);
            e.exports = function(e) {
                if (!o(e)) throw TypeError(e + " is not an object!");
                return e
            }
        },
        40: function(e, t, n) {
            var o = n(11),
                i = n(27),
                r = n(41);
            e.exports = function(e) {
                return function(t, n, a) {
                    var s, l = o(t),
                        c = i(l.length),
                        u = r(a, c);
                    if (e && n != n) {
                        for (; c > u;)
                            if ((s = l[u++]) != s) return !0
                    } else
                        for (; c > u; u++)
                            if ((e || u in l) && l[u] === n) return e || u || 0;
                    return !e && -1
                }
            }
        },
        41: function(e, t, n) {
            var o = n(21),
                i = Math.max,
                r = Math.min;
            e.exports = function(e, t) {
                return (e = o(e)) < 0 ? i(e + t, 0) : r(e, t)
            }
        },
        42: function(e, t, n) {
            var o = n(7),
                i = n(4),
                r = n(19);
            e.exports = n(3) ? Object.defineProperties : function(e, t) {
                i(e);
                for (var n, a = r(t), s = a.length, l = 0; s > l;) o.f(e, n = a[l++], t[n]);
                return e
            }
        },
        47: function(e, t) {
            t.f = {}.propertyIsEnumerable
        },
        48: function(t, n) {
            t.exports = e
        },
        5: function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        },
        55: function(e, t, n) {
            var o = n(20);
            e.exports = Array.isArray || function(e) {
                return "Array" == o(e)
            }
        },
        56: function(e, t) {
            t.f = Object.getOwnPropertySymbols
        },
        57: function(e, t, n) {
            var o = n(33),
                i = n(24).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return o(e, i)
            }
        },
        59: function(e, t, n) {
            var o = n(0),
                i = n(8),
                r = n(18),
                a = n(60),
                s = n(7).f;
            e.exports = function(e) {
                var t = i.Symbol || (i.Symbol = r ? {} : o.Symbol || {});
                "_" == e.charAt(0) || e in t || s(t, e, {
                    value: a.f(e)
                })
            }
        },
        6: function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        },
        60: function(e, t, n) {
            t.f = n(1)
        },
        63: function(e, t, n) {
            var o = n(47),
                i = n(16),
                r = n(11),
                a = n(26),
                s = n(6),
                l = n(30),
                c = Object.getOwnPropertyDescriptor;
            t.f = n(3) ? c : function(e, t) {
                if (e = r(e), t = a(t, !0), l) try {
                    return c(e, t)
                } catch (e) {}
                if (s(e, t)) return i(!o.f.call(e, t), e[t])
            }
        },
        7: function(e, t, n) {
            var o = n(4),
                i = n(30),
                r = n(26),
                a = Object.defineProperty;
            t.f = n(3) ? Object.defineProperty : function(e, t, n) {
                if (o(e), t = r(t, !0), o(n), i) try {
                    return a(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        },
        8: function(e, t) {
            var n = e.exports = {
                version: "2.6.4"
            };
            "number" == typeof __e && (__e = n)
        },
        80: function(e, t, n) {
            n(59)("asyncIterator")
        },
        81: function(e, t, n) {
            "use strict";
            var o = n(0),
                i = n(6),
                r = n(3),
                a = n(17),
                s = n(9),
                l = n(82).KEY,
                c = n(10),
                u = n(13),
                f = n(25),
                d = n(12),
                p = n(1),
                m = n(60),
                h = n(59),
                v = n(83),
                g = n(55),
                y = n(4),
                _ = n(5),
                E = n(11),
                S = n(26),
                T = n(16),
                b = n(35),
                I = n(84),
                O = n(63),
                w = n(7),
                A = n(19),
                R = O.f,
                N = w.f,
                C = I.f,
                x = o.Symbol,
                P = o.JSON,
                k = P && P.stringify,
                D = p("_hidden"),
                M = p("toPrimitive"),
                L = {}.propertyIsEnumerable,
                B = u("symbol-registry"),
                j = u("symbols"),
                U = u("op-symbols"),
                W = Object.prototype,
                V = "function" == typeof x,
                F = o.QObject,
                G = !F || !F.prototype || !F.prototype.findChild,
                H = r && c(function() {
                    return 7 != b(N({}, "a", {
                        get: function() {
                            return N(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                }) ? function(e, t, n) {
                    var o = R(W, t);
                    o && delete W[t], N(e, t, n), o && e !== W && N(W, t, o)
                } : N,
                Q = function(e) {
                    var t = j[e] = b(x.prototype);
                    return t._k = e, t
                },
                K = V && "symbol" == typeof x.iterator ? function(e) {
                    return "symbol" == typeof e
                } : function(e) {
                    return e instanceof x
                },
                z = function(e, t, n) {
                    return e === W && z(U, t, n), y(e), t = S(t, !0), y(n), i(j, t) ? (n.enumerable ? (i(e, D) && e[D][t] && (e[D][t] = !1), n = b(n, {
                        enumerable: T(0, !1)
                    })) : (i(e, D) || N(e, D, T(1, {})), e[D][t] = !0), H(e, t, n)) : N(e, t, n)
                },
                q = function(e, t) {
                    y(e);
                    for (var n, o = v(t = E(t)), i = 0, r = o.length; r > i;) z(e, n = o[i++], t[n]);
                    return e
                },
                Y = function(e) {
                    var t = L.call(this, e = S(e, !0));
                    return !(this === W && i(j, e) && !i(U, e)) && (!(t || !i(this, e) || !i(j, e) || i(this, D) && this[D][e]) || t)
                },
                X = function(e, t) {
                    if (e = E(e), t = S(t, !0), e !== W || !i(j, t) || i(U, t)) {
                        var n = R(e, t);
                        return !n || !i(j, t) || i(e, D) && e[D][t] || (n.enumerable = !0), n
                    }
                },
                Z = function(e) {
                    for (var t, n = C(E(e)), o = [], r = 0; n.length > r;) i(j, t = n[r++]) || t == D || t == l || o.push(t);
                    return o
                },
                J = function(e) {
                    for (var t, n = e === W, o = C(n ? U : E(e)), r = [], a = 0; o.length > a;) !i(j, t = o[a++]) || n && !i(W, t) || r.push(j[t]);
                    return r
                };
            V || (s((x = function() {
                if (this instanceof x) throw TypeError("Symbol is not a constructor!");
                var e = d(arguments.length > 0 ? arguments[0] : void 0),
                    t = function(n) {
                        this === W && t.call(U, n), i(this, D) && i(this[D], e) && (this[D][e] = !1), H(this, e, T(1, n))
                    };
                return r && G && H(W, e, {
                    configurable: !0,
                    set: t
                }), Q(e)
            }).prototype, "toString", function() {
                return this._k
            }), O.f = X, w.f = z, n(57).f = I.f = Z, n(47).f = Y, n(56).f = J, r && !n(18) && s(W, "propertyIsEnumerable", Y, !0), m.f = function(e) {
                return Q(p(e))
            }), a(a.G + a.W + a.F * !V, {
                Symbol: x
            });
            for (var $ = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; $.length > ee;) p($[ee++]);
            for (var te = A(p.store), ne = 0; te.length > ne;) h(te[ne++]);
            a(a.S + a.F * !V, "Symbol", {
                for: function(e) {
                    return i(B, e += "") ? B[e] : B[e] = x(e)
                },
                keyFor: function(e) {
                    if (!K(e)) throw TypeError(e + " is not a symbol!");
                    for (var t in B)
                        if (B[t] === e) return t
                },
                useSetter: function() {
                    G = !0
                },
                useSimple: function() {
                    G = !1
                }
            }), a(a.S + a.F * !V, "Object", {
                create: function(e, t) {
                    return void 0 === t ? b(e) : q(b(e), t)
                },
                defineProperty: z,
                defineProperties: q,
                getOwnPropertyDescriptor: X,
                getOwnPropertyNames: Z,
                getOwnPropertySymbols: J
            }), P && a(a.S + a.F * (!V || c(function() {
                var e = x();
                return "[null]" != k([e]) || "{}" != k({
                    a: e
                }) || "{}" != k(Object(e))
            })), "JSON", {
                stringify: function(e) {
                    for (var t, n, o = [e], i = 1; arguments.length > i;) o.push(arguments[i++]);
                    if (n = t = o[1], (_(t) || void 0 !== e) && !K(e)) return g(t) || (t = function(e, t) {
                        if ("function" == typeof n && (t = n.call(this, e, t)), !K(t)) return t
                    }), o[1] = t, k.apply(P, o)
                }
            }), x.prototype[M] || n(2)(x.prototype, M, x.prototype.valueOf), f(x, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0)
        },
        82: function(e, t, n) {
            var o = n(12)("meta"),
                i = n(5),
                r = n(6),
                a = n(7).f,
                s = 0,
                l = Object.isExtensible || function() {
                    return !0
                },
                c = !n(10)(function() {
                    return l(Object.preventExtensions({}))
                }),
                u = function(e) {
                    a(e, o, {
                        value: {
                            i: "O" + ++s,
                            w: {}
                        }
                    })
                },
                f = e.exports = {
                    KEY: o,
                    NEED: !1,
                    fastKey: function(e, t) {
                        if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!r(e, o)) {
                            if (!l(e)) return "F";
                            if (!t) return "E";
                            u(e)
                        }
                        return e[o].i
                    },
                    getWeak: function(e, t) {
                        if (!r(e, o)) {
                            if (!l(e)) return !0;
                            if (!t) return !1;
                            u(e)
                        }
                        return e[o].w
                    },
                    onFreeze: function(e) {
                        return c && f.NEED && l(e) && !r(e, o) && u(e), e
                    }
                }
        },
        83: function(e, t, n) {
            var o = n(19),
                i = n(56),
                r = n(47);
            e.exports = function(e) {
                var t = o(e),
                    n = i.f;
                if (n)
                    for (var a, s = n(e), l = r.f, c = 0; s.length > c;) l.call(e, a = s[c++]) && t.push(a);
                return t
            }
        },
        84: function(e, t, n) {
            var o = n(11),
                i = n(57).f,
                r = {}.toString,
                a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function(e) {
                return a && "[object Window]" == r.call(e) ? function(e) {
                    try {
                        return i(e)
                    } catch (e) {
                        return a.slice()
                    }
                }(e) : i(o(e))
            }
        },
        9: function(e, t, n) {
            var o = n(0),
                i = n(2),
                r = n(6),
                a = n(12)("src"),
                s = n(34),
                l = ("" + s).split("toString");
            n(8).inspectSource = function(e) {
                return s.call(e)
            }, (e.exports = function(e, t, n, s) {
                var c = "function" == typeof n;
                c && (r(n, "name") || i(n, "name", t)), e[t] !== n && (c && (r(n, a) || i(n, a, e[t] ? "" + e[t] : l.join(String(t)))), e === o ? e[t] = n : s ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)))
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && this[a] || s.call(this)
            })
        }
    })
}), define("artemis/core/settings/settings", ["artemis/common/null-checkers", "artemis/common/pluck", "artemis/common/type-checkers"], function(e, t, n) {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: o
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (t.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var i in e) t.d(o, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return o
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 456)
    }({
        0: function(e, t) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        },
        1: function(e, t, n) {
            var o = n(13)("wks"),
                i = n(12),
                r = n(0).Symbol,
                a = "function" == typeof r;
            (e.exports = function(e) {
                return o[e] || (o[e] = a && r[e] || (a ? r : i)("Symbol." + e))
            }).store = o
        },
        10: function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        },
        11: function(e, t, n) {
            var o = n(32),
                i = n(15);
            e.exports = function(e) {
                return o(i(e))
            }
        },
        12: function(e, t) {
            var n = 0,
                o = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
            }
        },
        13: function(e, t, n) {
            var o = n(8),
                i = n(0),
                r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
            (e.exports = function(e, t) {
                return r[e] || (r[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: o.version,
                mode: n(18) ? "pure" : "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            })
        },
        14: function(e, t) {
            e.exports = {}
        },
        15: function(e, t) {
            e.exports = function(e) {
                if (void 0 == e) throw TypeError("Can't call method on  " + e);
                return e
            }
        },
        16: function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        17: function(e, t, n) {
            var o = n(0),
                i = n(8),
                r = n(2),
                a = n(9),
                s = n(28),
                l = function(e, t, n) {
                    var c, u, f, d, p = e & l.F,
                        m = e & l.G,
                        h = e & l.S,
                        v = e & l.P,
                        g = e & l.B,
                        y = m ? o : h ? o[t] || (o[t] = {}) : (o[t] || {}).prototype,
                        _ = m ? i : i[t] || (i[t] = {}),
                        E = _.prototype || (_.prototype = {});
                    for (c in m && (n = t), n) f = ((u = !p && y && void 0 !== y[c]) ? y : n)[c], d = g && u ? s(f, o) : v && "function" == typeof f ? s(Function.call, f) : f, y && a(y, c, f, e & l.U), _[c] != f && r(_, c, d), v && E[c] != f && (E[c] = f)
                };
            o.core = i, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
        },
        18: function(e, t) {
            e.exports = !1
        },
        19: function(e, t, n) {
            var o = n(33),
                i = n(24);
            e.exports = Object.keys || function(e) {
                return o(e, i)
            }
        },
        2: function(e, t, n) {
            var o = n(7),
                i = n(16);
            e.exports = n(3) ? function(e, t, n) {
                return o.f(e, t, i(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        },
        20: function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1)
            }
        },
        21: function(e, t) {
            var n = Math.ceil,
                o = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
            }
        },
        22: function(e, t, n) {
            var o = n(13)("keys"),
                i = n(12);
            e.exports = function(e) {
                return o[e] || (o[e] = i(e))
            }
        },
        23: function(e, t, n) {
            var o = n(5),
                i = n(0).document,
                r = o(i) && o(i.createElement);
            e.exports = function(e) {
                return r ? i.createElement(e) : {}
            }
        },
        24: function(e, t) {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        },
        242: function(e, t) {
            e.exports = n
        },
        25: function(e, t, n) {
            var o = n(7).f,
                i = n(6),
                r = n(1)("toStringTag");
            e.exports = function(e, t, n) {
                e && !i(e = n ? e : e.prototype, r) && o(e, r, {
                    configurable: !0,
                    value: t
                })
            }
        },
        26: function(e, t, n) {
            var o = n(5);
            e.exports = function(e, t) {
                if (!o(e)) return e;
                var n, i;
                if (t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
                if ("function" == typeof(n = e.valueOf) && !o(i = n.call(e))) return i;
                if (!t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        27: function(e, t, n) {
            var o = n(21),
                i = Math.min;
            e.exports = function(e) {
                return e > 0 ? i(o(e), 9007199254740991) : 0
            }
        },
        28: function(e, t, n) {
            var o = n(29);
            e.exports = function(e, t, n) {
                if (o(e), void 0 === t) return e;
                switch (n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, o) {
                            return e.call(t, n, o)
                        };
                    case 3:
                        return function(n, o, i) {
                            return e.call(t, n, o, i)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
        },
        29: function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e
            }
        },
        3: function(e, t, n) {
            e.exports = !n(10)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        30: function(e, t, n) {
            e.exports = !n(3) && !n(10)(function() {
                return 7 != Object.defineProperty(n(23)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        31: function(e, t, n) {
            var o = n(15);
            e.exports = function(e) {
                return Object(o(e))
            }
        },
        32: function(e, t, n) {
            var o = n(20);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == o(e) ? e.split("") : Object(e)
            }
        },
        33: function(e, t, n) {
            var o = n(6),
                i = n(11),
                r = n(40)(!1),
                a = n(22)("IE_PROTO");
            e.exports = function(e, t) {
                var n, s = i(e),
                    l = 0,
                    c = [];
                for (n in s) n != a && o(s, n) && c.push(n);
                for (; t.length > l;) o(s, n = t[l++]) && (~r(c, n) || c.push(n));
                return c
            }
        },
        34: function(e, t, n) {
            e.exports = n(13)("native-function-to-string", Function.toString)
        },
        35: function(e, t, n) {
            var o = n(4),
                i = n(42),
                r = n(24),
                a = n(22)("IE_PROTO"),
                s = function() {},
                l = function() {
                    var e, t = n(23)("iframe"),
                        o = r.length;
                    for (t.style.display = "none", n(39).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; o--;) delete l.prototype[r[o]];
                    return l()
                };
            e.exports = Object.create || function(e, t) {
                var n;
                return null !== e ? (s.prototype = o(e), n = new s, s.prototype = null, n[a] = e) : n = l(), void 0 === t ? n : i(n, t)
            }
        },
        36: function(e, t, n) {
            "use strict";
            var o = n(37),
                i = n(44),
                r = n(14),
                a = n(11);
            e.exports = n(38)(Array, "Array", function(e, t) {
                this._t = a(e), this._i = 0, this._k = t
            }, function() {
                var e = this._t,
                    t = this._k,
                    n = this._i++;
                return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
            }, "values"), r.Arguments = r.Array, o("keys"), o("values"), o("entries")
        },
        37: function(e, t, n) {
            var o = n(1)("unscopables"),
                i = Array.prototype;
            void 0 == i[o] && n(2)(i, o, {}), e.exports = function(e) {
                i[o][e] = !0
            }
        },
        38: function(e, t, n) {
            "use strict";
            var o = n(18),
                i = n(17),
                r = n(9),
                a = n(2),
                s = n(14),
                l = n(45),
                c = n(25),
                u = n(46),
                f = n(1)("iterator"),
                d = !([].keys && "next" in [].keys()),
                p = function() {
                    return this
                };
            e.exports = function(e, t, n, m, h, v, g) {
                l(n, t, m);
                var y, _, E, S = function(e) {
                        if (!d && e in O) return O[e];
                        switch (e) {
                            case "keys":
                            case "values":
                                return function() {
                                    return new n(this, e)
                                }
                        }
                        return function() {
                            return new n(this, e)
                        }
                    },
                    T = t + " Iterator",
                    b = "values" == h,
                    I = !1,
                    O = e.prototype,
                    w = O[f] || O["@@iterator"] || h && O[h],
                    A = w || S(h),
                    R = h ? b ? S("entries") : A : void 0,
                    N = "Array" == t && O.entries || w;
                if (N && (E = u(N.call(new e))) !== Object.prototype && E.next && (c(E, T, !0), o || "function" == typeof E[f] || a(E, f, p)), b && w && "values" !== w.name && (I = !0, A = function() {
                        return w.call(this)
                    }), o && !g || !d && !I && O[f] || a(O, f, A), s[t] = A, s[T] = p, h)
                    if (y = {
                            values: b ? A : S("values"),
                            keys: v ? A : S("keys"),
                            entries: R
                        }, g)
                        for (_ in y) _ in O || r(O, _, y[_]);
                    else i(i.P + i.F * (d || I), t, y);
                return y
            }
        },
        39: function(e, t, n) {
            var o = n(0).document;
            e.exports = o && o.documentElement
        },
        4: function(e, t, n) {
            var o = n(5);
            e.exports = function(e) {
                if (!o(e)) throw TypeError(e + " is not an object!");
                return e
            }
        },
        40: function(e, t, n) {
            var o = n(11),
                i = n(27),
                r = n(41);
            e.exports = function(e) {
                return function(t, n, a) {
                    var s, l = o(t),
                        c = i(l.length),
                        u = r(a, c);
                    if (e && n != n) {
                        for (; c > u;)
                            if ((s = l[u++]) != s) return !0
                    } else
                        for (; c > u; u++)
                            if ((e || u in l) && l[u] === n) return e || u || 0;
                    return !e && -1
                }
            }
        },
        41: function(e, t, n) {
            var o = n(21),
                i = Math.max,
                r = Math.min;
            e.exports = function(e, t) {
                return (e = o(e)) < 0 ? i(e + t, 0) : r(e, t)
            }
        },
        42: function(e, t, n) {
            var o = n(7),
                i = n(4),
                r = n(19);
            e.exports = n(3) ? Object.defineProperties : function(e, t) {
                i(e);
                for (var n, a = r(t), s = a.length, l = 0; s > l;) o.f(e, n = a[l++], t[n]);
                return e
            }
        },
        43: function(e, t, n) {
            for (var o = n(36), i = n(19), r = n(9), a = n(0), s = n(2), l = n(14), c = n(1), u = c("iterator"), f = c("toStringTag"), d = l.Array, p = {
                    CSSRuleList: !0,
                    CSSStyleDeclaration: !1,
                    CSSValueList: !1,
                    ClientRectList: !1,
                    DOMRectList: !1,
                    DOMStringList: !1,
                    DOMTokenList: !0,
                    DataTransferItemList: !1,
                    FileList: !1,
                    HTMLAllCollection: !1,
                    HTMLCollection: !1,
                    HTMLFormElement: !1,
                    HTMLSelectElement: !1,
                    MediaList: !0,
                    MimeTypeArray: !1,
                    NamedNodeMap: !1,
                    NodeList: !0,
                    PaintRequestList: !1,
                    Plugin: !1,
                    PluginArray: !1,
                    SVGLengthList: !1,
                    SVGNumberList: !1,
                    SVGPathSegList: !1,
                    SVGPointList: !1,
                    SVGStringList: !1,
                    SVGTransformList: !1,
                    SourceBufferList: !1,
                    StyleSheetList: !0,
                    TextTrackCueList: !1,
                    TextTrackList: !1,
                    TouchList: !1
                }, m = i(p), h = 0; h < m.length; h++) {
                var v, g = m[h],
                    y = p[g],
                    _ = a[g],
                    E = _ && _.prototype;
                if (E && (E[u] || s(E, u, d), E[f] || s(E, f, g), l[g] = d, y))
                    for (v in o) E[v] || r(E, v, o[v], !0)
            }
        },
        44: function(e, t) {
            e.exports = function(e, t) {
                return {
                    value: t,
                    done: !!e
                }
            }
        },
        45: function(e, t, n) {
            "use strict";
            var o = n(35),
                i = n(16),
                r = n(25),
                a = {};
            n(2)(a, n(1)("iterator"), function() {
                return this
            }), e.exports = function(e, t, n) {
                e.prototype = o(a, {
                    next: i(1, n)
                }), r(e, t + " Iterator")
            }
        },
        456: function(e, t, n) {
            var o, i, r = function() {
                var e = "D:\\a\\_work\\15\\s\\src\\js\\artemis\\core\\settings\\settings.js",
                    t = "c003fcdde66f5aa374e153bd850852a275d6269d",
                    n = new(0, function() {}.constructor)("return this")(),
                    o = {
                        path: "D:\\a\\_work\\15\\s\\src\\js\\artemis\\core\\settings\\settings.js",
                        statementMap: {
                            0: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 183,
                                    column: 3
                                }
                            },
                            1: {
                                start: {
                                    line: 4,
                                    column: 2
                                },
                                end: {
                                    line: 6,
                                    column: 5
                                }
                            },
                            2: {
                                start: {
                                    line: 7,
                                    column: 2
                                },
                                end: {
                                    line: 7,
                                    column: 31
                                }
                            },
                            3: {
                                start: {
                                    line: 10,
                                    column: 4
                                },
                                end: {
                                    line: 18,
                                    column: 5
                                }
                            },
                            4: {
                                start: {
                                    line: 11,
                                    column: 6
                                },
                                end: {
                                    line: 13,
                                    column: 8
                                }
                            },
                            5: {
                                start: {
                                    line: 12,
                                    column: 8
                                },
                                end: {
                                    line: 12,
                                    column: 26
                                }
                            },
                            6: {
                                start: {
                                    line: 15,
                                    column: 6
                                },
                                end: {
                                    line: 17,
                                    column: 8
                                }
                            },
                            7: {
                                start: {
                                    line: 16,
                                    column: 8
                                },
                                end: {
                                    line: 16,
                                    column: 133
                                }
                            },
                            8: {
                                start: {
                                    line: 20,
                                    column: 4
                                },
                                end: {
                                    line: 20,
                                    column: 24
                                }
                            },
                            9: {
                                start: {
                                    line: 24,
                                    column: 4
                                },
                                end: {
                                    line: 24,
                                    column: 84
                                }
                            },
                            10: {
                                start: {
                                    line: 28,
                                    column: 4
                                },
                                end: {
                                    line: 28,
                                    column: 75
                                }
                            },
                            11: {
                                start: {
                                    line: 32,
                                    column: 4
                                },
                                end: {
                                    line: 32,
                                    column: 130
                                }
                            },
                            12: {
                                start: {
                                    line: 32,
                                    column: 106
                                },
                                end: {
                                    line: 32,
                                    column: 130
                                }
                            },
                            13: {
                                start: {
                                    line: 36,
                                    column: 4
                                },
                                end: {
                                    line: 42,
                                    column: 5
                                }
                            },
                            14: {
                                start: {
                                    line: 37,
                                    column: 6
                                },
                                end: {
                                    line: 39,
                                    column: 7
                                }
                            },
                            15: {
                                start: {
                                    line: 38,
                                    column: 8
                                },
                                end: {
                                    line: 38,
                                    column: 25
                                }
                            },
                            16: {
                                start: {
                                    line: 41,
                                    column: 6
                                },
                                end: {
                                    line: 41,
                                    column: 18
                                }
                            },
                            17: {
                                start: {
                                    line: 46,
                                    column: 4
                                },
                                end: {
                                    line: 48,
                                    column: 5
                                }
                            },
                            18: {
                                start: {
                                    line: 47,
                                    column: 6
                                },
                                end: {
                                    line: 47,
                                    column: 63
                                }
                            },
                            19: {
                                start: {
                                    line: 52,
                                    column: 4
                                },
                                end: {
                                    line: 58,
                                    column: 5
                                }
                            },
                            20: {
                                start: {
                                    line: 53,
                                    column: 23
                                },
                                end: {
                                    line: 53,
                                    column: 31
                                }
                            },
                            21: {
                                start: {
                                    line: 54,
                                    column: 6
                                },
                                end: {
                                    line: 54,
                                    column: 61
                                }
                            },
                            22: {
                                start: {
                                    line: 55,
                                    column: 6
                                },
                                end: {
                                    line: 55,
                                    column: 37
                                }
                            },
                            23: {
                                start: {
                                    line: 56,
                                    column: 6
                                },
                                end: {
                                    line: 56,
                                    column: 60
                                }
                            },
                            24: {
                                start: {
                                    line: 56,
                                    column: 33
                                },
                                end: {
                                    line: 56,
                                    column: 60
                                }
                            },
                            25: {
                                start: {
                                    line: 57,
                                    column: 6
                                },
                                end: {
                                    line: 57,
                                    column: 64
                                }
                            },
                            26: {
                                start: {
                                    line: 62,
                                    column: 4
                                },
                                end: {
                                    line: 62,
                                    column: 73
                                }
                            },
                            27: {
                                start: {
                                    line: 62,
                                    column: 20
                                },
                                end: {
                                    line: 62,
                                    column: 73
                                }
                            },
                            28: {
                                start: {
                                    line: 63,
                                    column: 4
                                },
                                end: {
                                    line: 63,
                                    column: 65
                                }
                            },
                            29: {
                                start: {
                                    line: 63,
                                    column: 21
                                },
                                end: {
                                    line: 63,
                                    column: 65
                                }
                            },
                            30: {
                                start: {
                                    line: 64,
                                    column: 4
                                },
                                end: {
                                    line: 64,
                                    column: 23
                                }
                            },
                            31: {
                                start: {
                                    line: 67,
                                    column: 17
                                },
                                end: {
                                    line: 142,
                                    column: 5
                                }
                            },
                            32: {
                                start: {
                                    line: 69,
                                    column: 6
                                },
                                end: {
                                    line: 69,
                                    column: 38
                                }
                            },
                            33: {
                                start: {
                                    line: 71,
                                    column: 6
                                },
                                end: {
                                    line: 71,
                                    column: 22
                                }
                            },
                            34: {
                                start: {
                                    line: 72,
                                    column: 6
                                },
                                end: {
                                    line: 72,
                                    column: 30
                                }
                            },
                            35: {
                                start: {
                                    line: 80,
                                    column: 4
                                },
                                end: {
                                    line: 139,
                                    column: 8
                                }
                            },
                            36: {
                                start: {
                                    line: 83,
                                    column: 8
                                },
                                end: {
                                    line: 85,
                                    column: 9
                                }
                            },
                            37: {
                                start: {
                                    line: 84,
                                    column: 10
                                },
                                end: {
                                    line: 84,
                                    column: 106
                                }
                            },
                            38: {
                                start: {
                                    line: 87,
                                    column: 8
                                },
                                end: {
                                    line: 89,
                                    column: 9
                                }
                            },
                            39: {
                                start: {
                                    line: 88,
                                    column: 10
                                },
                                end: {
                                    line: 88,
                                    column: 85
                                }
                            },
                            40: {
                                start: {
                                    line: 91,
                                    column: 8
                                },
                                end: {
                                    line: 91,
                                    column: 33
                                }
                            },
                            41: {
                                start: {
                                    line: 92,
                                    column: 8
                                },
                                end: {
                                    line: 92,
                                    column: 32
                                }
                            },
                            42: {
                                start: {
                                    line: 103,
                                    column: 8
                                },
                                end: {
                                    line: 105,
                                    column: 9
                                }
                            },
                            43: {
                                start: {
                                    line: 104,
                                    column: 10
                                },
                                end: {
                                    line: 104,
                                    column: 104
                                }
                            },
                            44: {
                                start: {
                                    line: 107,
                                    column: 8
                                },
                                end: {
                                    line: 107,
                                    column: 33
                                }
                            },
                            45: {
                                start: {
                                    line: 108,
                                    column: 23
                                },
                                end: {
                                    line: 108,
                                    column: 38
                                }
                            },
                            46: {
                                start: {
                                    line: 109,
                                    column: 8
                                },
                                end: {
                                    line: 109,
                                    column: 51
                                }
                            },
                            47: {
                                start: {
                                    line: 121,
                                    column: 23
                                },
                                end: {
                                    line: 121,
                                    column: 38
                                }
                            },
                            48: {
                                start: {
                                    line: 123,
                                    column: 20
                                },
                                end: {
                                    line: 123,
                                    column: 97
                                }
                            },
                            49: {
                                start: {
                                    line: 125,
                                    column: 8
                                },
                                end: {
                                    line: 125,
                                    column: 58
                                }
                            },
                            50: {
                                start: {
                                    line: 137,
                                    column: 8
                                },
                                end: {
                                    line: 137,
                                    column: 30
                                }
                            },
                            51: {
                                start: {
                                    line: 141,
                                    column: 4
                                },
                                end: {
                                    line: 141,
                                    column: 20
                                }
                            },
                            52: {
                                start: {
                                    line: 151,
                                    column: 4
                                },
                                end: {
                                    line: 151,
                                    column: 133
                                }
                            },
                            53: {
                                start: {
                                    line: 162,
                                    column: 20
                                },
                                end: {
                                    line: 162,
                                    column: 39
                                }
                            },
                            54: {
                                start: {
                                    line: 163,
                                    column: 4
                                },
                                end: {
                                    line: 178,
                                    column: 7
                                }
                            },
                            55: {
                                start: {
                                    line: 165,
                                    column: 6
                                },
                                end: {
                                    line: 165,
                                    column: 62
                                }
                            },
                            56: {
                                start: {
                                    line: 165,
                                    column: 47
                                },
                                end: {
                                    line: 165,
                                    column: 62
                                }
                            },
                            57: {
                                start: {
                                    line: 167,
                                    column: 6
                                },
                                end: {
                                    line: 175,
                                    column: 7
                                }
                            },
                            58: {
                                start: {
                                    line: 168,
                                    column: 8
                                },
                                end: {
                                    line: 174,
                                    column: 9
                                }
                            },
                            59: {
                                start: {
                                    line: 169,
                                    column: 10
                                },
                                end: {
                                    line: 169,
                                    column: 28
                                }
                            },
                            60: {
                                start: {
                                    line: 170,
                                    column: 15
                                },
                                end: {
                                    line: 174,
                                    column: 9
                                }
                            },
                            61: {
                                start: {
                                    line: 171,
                                    column: 10
                                },
                                end: {
                                    line: 171,
                                    column: 28
                                }
                            },
                            62: {
                                start: {
                                    line: 173,
                                    column: 10
                                },
                                end: {
                                    line: 173,
                                    column: 151
                                }
                            },
                            63: {
                                start: {
                                    line: 177,
                                    column: 6
                                },
                                end: {
                                    line: 177,
                                    column: 23
                                }
                            },
                            64: {
                                start: {
                                    line: 181,
                                    column: 22
                                },
                                end: {
                                    line: 181,
                                    column: 36
                                }
                            },
                            65: {
                                start: {
                                    line: 182,
                                    column: 2
                                },
                                end: {
                                    line: 182,
                                    column: 34
                                }
                            }
                        },
                        fnMap: {
                            0: {
                                name: "(anonymous_0)",
                                decl: {
                                    start: {
                                        line: 1,
                                        column: 406
                                    },
                                    end: {
                                        line: 1,
                                        column: 407
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 463
                                    },
                                    end: {
                                        line: 183,
                                        column: 1
                                    }
                                },
                                line: 1
                            },
                            1: {
                                name: "_typeof",
                                decl: {
                                    start: {
                                        line: 9,
                                        column: 11
                                    },
                                    end: {
                                        line: 9,
                                        column: 18
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 9,
                                        column: 24
                                    },
                                    end: {
                                        line: 21,
                                        column: 3
                                    }
                                },
                                line: 9
                            },
                            2: {
                                name: "_typeof",
                                decl: {
                                    start: {
                                        line: 11,
                                        column: 25
                                    },
                                    end: {
                                        line: 11,
                                        column: 32
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 11,
                                        column: 38
                                    },
                                    end: {
                                        line: 13,
                                        column: 7
                                    }
                                },
                                line: 11
                            },
                            3: {
                                name: "_typeof",
                                decl: {
                                    start: {
                                        line: 15,
                                        column: 25
                                    },
                                    end: {
                                        line: 15,
                                        column: 32
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 15,
                                        column: 38
                                    },
                                    end: {
                                        line: 17,
                                        column: 7
                                    }
                                },
                                line: 15
                            },
                            4: {
                                name: "_toConsumableArray",
                                decl: {
                                    start: {
                                        line: 23,
                                        column: 11
                                    },
                                    end: {
                                        line: 23,
                                        column: 29
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 23,
                                        column: 35
                                    },
                                    end: {
                                        line: 25,
                                        column: 3
                                    }
                                },
                                line: 23
                            },
                            5: {
                                name: "_nonIterableSpread",
                                decl: {
                                    start: {
                                        line: 27,
                                        column: 11
                                    },
                                    end: {
                                        line: 27,
                                        column: 29
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 27,
                                        column: 32
                                    },
                                    end: {
                                        line: 29,
                                        column: 3
                                    }
                                },
                                line: 27
                            },
                            6: {
                                name: "_iterableToArray",
                                decl: {
                                    start: {
                                        line: 31,
                                        column: 11
                                    },
                                    end: {
                                        line: 31,
                                        column: 27
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 31,
                                        column: 34
                                    },
                                    end: {
                                        line: 33,
                                        column: 3
                                    }
                                },
                                line: 31
                            },
                            7: {
                                name: "_arrayWithoutHoles",
                                decl: {
                                    start: {
                                        line: 35,
                                        column: 11
                                    },
                                    end: {
                                        line: 35,
                                        column: 29
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 35,
                                        column: 35
                                    },
                                    end: {
                                        line: 43,
                                        column: 3
                                    }
                                },
                                line: 35
                            },
                            8: {
                                name: "_classCallCheck",
                                decl: {
                                    start: {
                                        line: 45,
                                        column: 11
                                    },
                                    end: {
                                        line: 45,
                                        column: 26
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 45,
                                        column: 50
                                    },
                                    end: {
                                        line: 49,
                                        column: 3
                                    }
                                },
                                line: 45
                            },
                            9: {
                                name: "_defineProperties",
                                decl: {
                                    start: {
                                        line: 51,
                                        column: 11
                                    },
                                    end: {
                                        line: 51,
                                        column: 28
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 51,
                                        column: 44
                                    },
                                    end: {
                                        line: 59,
                                        column: 3
                                    }
                                },
                                line: 51
                            },
                            10: {
                                name: "_createClass",
                                decl: {
                                    start: {
                                        line: 61,
                                        column: 11
                                    },
                                    end: {
                                        line: 61,
                                        column: 23
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 61,
                                        column: 62
                                    },
                                    end: {
                                        line: 65,
                                        column: 3
                                    }
                                },
                                line: 61
                            },
                            11: {
                                name: "(anonymous_11)",
                                decl: {
                                    start: {
                                        line: 67,
                                        column: 36
                                    },
                                    end: {
                                        line: 67,
                                        column: 37
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 67,
                                        column: 48
                                    },
                                    end: {
                                        line: 142,
                                        column: 3
                                    }
                                },
                                line: 67
                            },
                            12: {
                                name: "Settings",
                                decl: {
                                    start: {
                                        line: 68,
                                        column: 13
                                    },
                                    end: {
                                        line: 68,
                                        column: 21
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 68,
                                        column: 24
                                    },
                                    end: {
                                        line: 73,
                                        column: 5
                                    }
                                },
                                line: 68
                            },
                            13: {
                                name: "register",
                                decl: {
                                    start: {
                                        line: 82,
                                        column: 22
                                    },
                                    end: {
                                        line: 82,
                                        column: 30
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 82,
                                        column: 43
                                    },
                                    end: {
                                        line: 93,
                                        column: 7
                                    }
                                },
                                line: 82
                            },
                            14: {
                                name: "add",
                                decl: {
                                    start: {
                                        line: 102,
                                        column: 22
                                    },
                                    end: {
                                        line: 102,
                                        column: 25
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 102,
                                        column: 39
                                    },
                                    end: {
                                        line: 110,
                                        column: 7
                                    }
                                },
                                line: 102
                            },
                            15: {
                                name: "get",
                                decl: {
                                    start: {
                                        line: 120,
                                        column: 22
                                    },
                                    end: {
                                        line: 120,
                                        column: 25
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 120,
                                        column: 46
                                    },
                                    end: {
                                        line: 126,
                                        column: 7
                                    }
                                },
                                line: 120
                            },
                            16: {
                                name: "update",
                                decl: {
                                    start: {
                                        line: 136,
                                        column: 22
                                    },
                                    end: {
                                        line: 136,
                                        column: 28
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 136,
                                        column: 42
                                    },
                                    end: {
                                        line: 138,
                                        column: 7
                                    }
                                },
                                line: 136
                            },
                            17: {
                                name: "isSimpleType",
                                decl: {
                                    start: {
                                        line: 150,
                                        column: 11
                                    },
                                    end: {
                                        line: 150,
                                        column: 23
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 150,
                                        column: 31
                                    },
                                    end: {
                                        line: 152,
                                        column: 3
                                    }
                                },
                                line: 150
                            },
                            18: {
                                name: "setNestedData",
                                decl: {
                                    start: {
                                        line: 161,
                                        column: 11
                                    },
                                    end: {
                                        line: 161,
                                        column: 24
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 161,
                                        column: 48
                                    },
                                    end: {
                                        line: 179,
                                        column: 3
                                    }
                                },
                                line: 161
                            },
                            19: {
                                name: "(anonymous_19)",
                                decl: {
                                    start: {
                                        line: 163,
                                        column: 21
                                    },
                                    end: {
                                        line: 163,
                                        column: 22
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 163,
                                        column: 43
                                    },
                                    end: {
                                        line: 178,
                                        column: 5
                                    }
                                },
                                line: 163
                            }
                        },
                        branchMap: {
                            0: {
                                loc: {
                                    start: {
                                        line: 10,
                                        column: 4
                                    },
                                    end: {
                                        line: 18,
                                        column: 5
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 10,
                                        column: 4
                                    },
                                    end: {
                                        line: 18,
                                        column: 5
                                    }
                                }, {
                                    start: {
                                        line: 10,
                                        column: 4
                                    },
                                    end: {
                                        line: 18,
                                        column: 5
                                    }
                                }],
                                line: 10
                            },
                            1: {
                                loc: {
                                    start: {
                                        line: 10,
                                        column: 8
                                    },
                                    end: {
                                        line: 10,
                                        column: 75
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 10,
                                        column: 8
                                    },
                                    end: {
                                        line: 10,
                                        column: 36
                                    }
                                }, {
                                    start: {
                                        line: 10,
                                        column: 40
                                    },
                                    end: {
                                        line: 10,
                                        column: 75
                                    }
                                }],
                                line: 10
                            },
                            2: {
                                loc: {
                                    start: {
                                        line: 16,
                                        column: 15
                                    },
                                    end: {
                                        line: 16,
                                        column: 132
                                    }
                                },
                                type: "cond-expr",
                                locations: [{
                                    start: {
                                        line: 16,
                                        column: 111
                                    },
                                    end: {
                                        line: 16,
                                        column: 119
                                    }
                                }, {
                                    start: {
                                        line: 16,
                                        column: 122
                                    },
                                    end: {
                                        line: 16,
                                        column: 132
                                    }
                                }],
                                line: 16
                            },
                            3: {
                                loc: {
                                    start: {
                                        line: 16,
                                        column: 15
                                    },
                                    end: {
                                        line: 16,
                                        column: 108
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 16,
                                        column: 15
                                    },
                                    end: {
                                        line: 16,
                                        column: 18
                                    }
                                }, {
                                    start: {
                                        line: 16,
                                        column: 22
                                    },
                                    end: {
                                        line: 16,
                                        column: 50
                                    }
                                }, {
                                    start: {
                                        line: 16,
                                        column: 54
                                    },
                                    end: {
                                        line: 16,
                                        column: 80
                                    }
                                }, {
                                    start: {
                                        line: 16,
                                        column: 84
                                    },
                                    end: {
                                        line: 16,
                                        column: 108
                                    }
                                }],
                                line: 16
                            },
                            4: {
                                loc: {
                                    start: {
                                        line: 24,
                                        column: 11
                                    },
                                    end: {
                                        line: 24,
                                        column: 83
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 24,
                                        column: 11
                                    },
                                    end: {
                                        line: 24,
                                        column: 34
                                    }
                                }, {
                                    start: {
                                        line: 24,
                                        column: 38
                                    },
                                    end: {
                                        line: 24,
                                        column: 59
                                    }
                                }, {
                                    start: {
                                        line: 24,
                                        column: 63
                                    },
                                    end: {
                                        line: 24,
                                        column: 83
                                    }
                                }],
                                line: 24
                            },
                            5: {
                                loc: {
                                    start: {
                                        line: 32,
                                        column: 4
                                    },
                                    end: {
                                        line: 32,
                                        column: 130
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 32,
                                        column: 4
                                    },
                                    end: {
                                        line: 32,
                                        column: 130
                                    }
                                }, {
                                    start: {
                                        line: 32,
                                        column: 4
                                    },
                                    end: {
                                        line: 32,
                                        column: 130
                                    }
                                }],
                                line: 32
                            },
                            6: {
                                loc: {
                                    start: {
                                        line: 32,
                                        column: 8
                                    },
                                    end: {
                                        line: 32,
                                        column: 104
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 32,
                                        column: 8
                                    },
                                    end: {
                                        line: 32,
                                        column: 39
                                    }
                                }, {
                                    start: {
                                        line: 32,
                                        column: 43
                                    },
                                    end: {
                                        line: 32,
                                        column: 104
                                    }
                                }],
                                line: 32
                            },
                            7: {
                                loc: {
                                    start: {
                                        line: 36,
                                        column: 4
                                    },
                                    end: {
                                        line: 42,
                                        column: 5
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 36,
                                        column: 4
                                    },
                                    end: {
                                        line: 42,
                                        column: 5
                                    }
                                }, {
                                    start: {
                                        line: 36,
                                        column: 4
                                    },
                                    end: {
                                        line: 42,
                                        column: 5
                                    }
                                }],
                                line: 36
                            },
                            8: {
                                loc: {
                                    start: {
                                        line: 46,
                                        column: 4
                                    },
                                    end: {
                                        line: 48,
                                        column: 5
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 46,
                                        column: 4
                                    },
                                    end: {
                                        line: 48,
                                        column: 5
                                    }
                                }, {
                                    start: {
                                        line: 46,
                                        column: 4
                                    },
                                    end: {
                                        line: 48,
                                        column: 5
                                    }
                                }],
                                line: 46
                            },
                            9: {
                                loc: {
                                    start: {
                                        line: 54,
                                        column: 30
                                    },
                                    end: {
                                        line: 54,
                                        column: 60
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 54,
                                        column: 30
                                    },
                                    end: {
                                        line: 54,
                                        column: 51
                                    }
                                }, {
                                    start: {
                                        line: 54,
                                        column: 55
                                    },
                                    end: {
                                        line: 54,
                                        column: 60
                                    }
                                }],
                                line: 54
                            },
                            10: {
                                loc: {
                                    start: {
                                        line: 56,
                                        column: 6
                                    },
                                    end: {
                                        line: 56,
                                        column: 60
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 56,
                                        column: 6
                                    },
                                    end: {
                                        line: 56,
                                        column: 60
                                    }
                                }, {
                                    start: {
                                        line: 56,
                                        column: 6
                                    },
                                    end: {
                                        line: 56,
                                        column: 60
                                    }
                                }],
                                line: 56
                            },
                            11: {
                                loc: {
                                    start: {
                                        line: 62,
                                        column: 4
                                    },
                                    end: {
                                        line: 62,
                                        column: 73
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 62,
                                        column: 4
                                    },
                                    end: {
                                        line: 62,
                                        column: 73
                                    }
                                }, {
                                    start: {
                                        line: 62,
                                        column: 4
                                    },
                                    end: {
                                        line: 62,
                                        column: 73
                                    }
                                }],
                                line: 62
                            },
                            12: {
                                loc: {
                                    start: {
                                        line: 63,
                                        column: 4
                                    },
                                    end: {
                                        line: 63,
                                        column: 65
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 63,
                                        column: 4
                                    },
                                    end: {
                                        line: 63,
                                        column: 65
                                    }
                                }, {
                                    start: {
                                        line: 63,
                                        column: 4
                                    },
                                    end: {
                                        line: 63,
                                        column: 65
                                    }
                                }],
                                line: 63
                            },
                            13: {
                                loc: {
                                    start: {
                                        line: 83,
                                        column: 8
                                    },
                                    end: {
                                        line: 85,
                                        column: 9
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 83,
                                        column: 8
                                    },
                                    end: {
                                        line: 85,
                                        column: 9
                                    }
                                }, {
                                    start: {
                                        line: 83,
                                        column: 8
                                    },
                                    end: {
                                        line: 85,
                                        column: 9
                                    }
                                }],
                                line: 83
                            },
                            14: {
                                loc: {
                                    start: {
                                        line: 87,
                                        column: 8
                                    },
                                    end: {
                                        line: 89,
                                        column: 9
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 87,
                                        column: 8
                                    },
                                    end: {
                                        line: 89,
                                        column: 9
                                    }
                                }, {
                                    start: {
                                        line: 87,
                                        column: 8
                                    },
                                    end: {
                                        line: 89,
                                        column: 9
                                    }
                                }],
                                line: 87
                            },
                            15: {
                                loc: {
                                    start: {
                                        line: 103,
                                        column: 8
                                    },
                                    end: {
                                        line: 105,
                                        column: 9
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 103,
                                        column: 8
                                    },
                                    end: {
                                        line: 105,
                                        column: 9
                                    }
                                }, {
                                    start: {
                                        line: 103,
                                        column: 8
                                    },
                                    end: {
                                        line: 105,
                                        column: 9
                                    }
                                }],
                                line: 103
                            },
                            16: {
                                loc: {
                                    start: {
                                        line: 125,
                                        column: 15
                                    },
                                    end: {
                                        line: 125,
                                        column: 57
                                    }
                                },
                                type: "cond-expr",
                                locations: [{
                                    start: {
                                        line: 125,
                                        column: 37
                                    },
                                    end: {
                                        line: 125,
                                        column: 42
                                    }
                                }, {
                                    start: {
                                        line: 125,
                                        column: 45
                                    },
                                    end: {
                                        line: 125,
                                        column: 57
                                    }
                                }],
                                line: 125
                            },
                            17: {
                                loc: {
                                    start: {
                                        line: 151,
                                        column: 11
                                    },
                                    end: {
                                        line: 151,
                                        column: 132
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 151,
                                        column: 11
                                    },
                                    end: {
                                        line: 151,
                                        column: 44
                                    }
                                }, {
                                    start: {
                                        line: 151,
                                        column: 48
                                    },
                                    end: {
                                        line: 151,
                                        column: 73
                                    }
                                }, {
                                    start: {
                                        line: 151,
                                        column: 77
                                    },
                                    end: {
                                        line: 151,
                                        column: 102
                                    }
                                }, {
                                    start: {
                                        line: 151,
                                        column: 106
                                    },
                                    end: {
                                        line: 151,
                                        column: 132
                                    }
                                }],
                                line: 151
                            },
                            18: {
                                loc: {
                                    start: {
                                        line: 165,
                                        column: 6
                                    },
                                    end: {
                                        line: 165,
                                        column: 62
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 165,
                                        column: 6
                                    },
                                    end: {
                                        line: 165,
                                        column: 62
                                    }
                                }, {
                                    start: {
                                        line: 165,
                                        column: 6
                                    },
                                    end: {
                                        line: 165,
                                        column: 62
                                    }
                                }],
                                line: 165
                            },
                            19: {
                                loc: {
                                    start: {
                                        line: 165,
                                        column: 10
                                    },
                                    end: {
                                        line: 165,
                                        column: 45
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 165,
                                        column: 10
                                    },
                                    end: {
                                        line: 165,
                                        column: 27
                                    }
                                }, {
                                    start: {
                                        line: 165,
                                        column: 31
                                    },
                                    end: {
                                        line: 165,
                                        column: 45
                                    }
                                }],
                                line: 165
                            },
                            20: {
                                loc: {
                                    start: {
                                        line: 167,
                                        column: 6
                                    },
                                    end: {
                                        line: 175,
                                        column: 7
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 167,
                                        column: 6
                                    },
                                    end: {
                                        line: 175,
                                        column: 7
                                    }
                                }, {
                                    start: {
                                        line: 167,
                                        column: 6
                                    },
                                    end: {
                                        line: 175,
                                        column: 7
                                    }
                                }],
                                line: 167
                            },
                            21: {
                                loc: {
                                    start: {
                                        line: 168,
                                        column: 8
                                    },
                                    end: {
                                        line: 174,
                                        column: 9
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 168,
                                        column: 8
                                    },
                                    end: {
                                        line: 174,
                                        column: 9
                                    }
                                }, {
                                    start: {
                                        line: 168,
                                        column: 8
                                    },
                                    end: {
                                        line: 174,
                                        column: 9
                                    }
                                }],
                                line: 168
                            },
                            22: {
                                loc: {
                                    start: {
                                        line: 170,
                                        column: 15
                                    },
                                    end: {
                                        line: 174,
                                        column: 9
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 170,
                                        column: 15
                                    },
                                    end: {
                                        line: 174,
                                        column: 9
                                    }
                                }, {
                                    start: {
                                        line: 170,
                                        column: 15
                                    },
                                    end: {
                                        line: 174,
                                        column: 9
                                    }
                                }],
                                line: 170
                            },
                            23: {
                                loc: {
                                    start: {
                                        line: 170,
                                        column: 19
                                    },
                                    end: {
                                        line: 170,
                                        column: 106
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 170,
                                        column: 19
                                    },
                                    end: {
                                        line: 170,
                                        column: 38
                                    }
                                }, {
                                    start: {
                                        line: 170,
                                        column: 42
                                    },
                                    end: {
                                        line: 170,
                                        column: 65
                                    }
                                }, {
                                    start: {
                                        line: 170,
                                        column: 69
                                    },
                                    end: {
                                        line: 170,
                                        column: 106
                                    }
                                }],
                                line: 170
                            }
                        },
                        s: {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0,
                            6: 0,
                            7: 0,
                            8: 0,
                            9: 0,
                            10: 0,
                            11: 0,
                            12: 0,
                            13: 0,
                            14: 0,
                            15: 0,
                            16: 0,
                            17: 0,
                            18: 0,
                            19: 0,
                            20: 0,
                            21: 0,
                            22: 0,
                            23: 0,
                            24: 0,
                            25: 0,
                            26: 0,
                            27: 0,
                            28: 0,
                            29: 0,
                            30: 0,
                            31: 0,
                            32: 0,
                            33: 0,
                            34: 0,
                            35: 0,
                            36: 0,
                            37: 0,
                            38: 0,
                            39: 0,
                            40: 0,
                            41: 0,
                            42: 0,
                            43: 0,
                            44: 0,
                            45: 0,
                            46: 0,
                            47: 0,
                            48: 0,
                            49: 0,
                            50: 0,
                            51: 0,
                            52: 0,
                            53: 0,
                            54: 0,
                            55: 0,
                            56: 0,
                            57: 0,
                            58: 0,
                            59: 0,
                            60: 0,
                            61: 0,
                            62: 0,
                            63: 0,
                            64: 0,
                            65: 0
                        },
                        f: {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0,
                            6: 0,
                            7: 0,
                            8: 0,
                            9: 0,
                            10: 0,
                            11: 0,
                            12: 0,
                            13: 0,
                            14: 0,
                            15: 0,
                            16: 0,
                            17: 0,
                            18: 0,
                            19: 0
                        },
                        b: {
                            0: [0, 0],
                            1: [0, 0],
                            2: [0, 0],
                            3: [0, 0, 0, 0],
                            4: [0, 0, 0],
                            5: [0, 0],
                            6: [0, 0],
                            7: [0, 0],
                            8: [0, 0],
                            9: [0, 0],
                            10: [0, 0],
                            11: [0, 0],
                            12: [0, 0],
                            13: [0, 0],
                            14: [0, 0],
                            15: [0, 0],
                            16: [0, 0],
                            17: [0, 0, 0, 0],
                            18: [0, 0],
                            19: [0, 0],
                            20: [0, 0],
                            21: [0, 0],
                            22: [0, 0],
                            23: [0, 0, 0]
                        },
                        inputSourceMap: null,
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
                    },
                    i = n.__coverage__ || (n.__coverage__ = {});
                return i[e] && i[e].hash === t ? i[e] : (o.hash = t, i[e] = o)
            }();
            r.s[0]++, o = [t, n(91), n(48), n(242), n(69), n(98), n(77), n(79), n(80), n(81), n(43), n(85)], void 0 === (i = function(e, t, n, o) {
                "use strict";

                function i(e) {
                    return r.f[1]++, r.s[3]++, r.b[1][0]++, "function" == typeof Symbol && (r.b[1][1]++, "symbol" == typeof Symbol.iterator) ? (r.b[0][0]++, r.s[4]++, i = function(e) {
                        return r.f[2]++, r.s[5]++, typeof e
                    }) : (r.b[0][1]++, r.s[6]++, i = function(e) {
                        return r.f[3]++, r.s[7]++, r.b[3][0]++, e && (r.b[3][1]++, "function" == typeof Symbol) && (r.b[3][2]++, e.constructor === Symbol) && (r.b[3][3]++, e !== Symbol.prototype) ? (r.b[2][0]++, "symbol") : (r.b[2][1]++, typeof e)
                    }), r.s[8]++, i(e)
                }

                function a(e, t) {
                    r.f[9]++, r.s[19]++;
                    for (var n = 0; n < t.length; n++) {
                        var o = (r.s[20]++, t[n]);
                        r.s[21]++, o.enumerable = (r.b[9][0]++, o.enumerable || (r.b[9][1]++, !1)), r.s[22]++, o.configurable = !0, r.s[23]++, "value" in o ? (r.b[10][0]++, r.s[24]++, o.writable = !0) : r.b[10][1]++, r.s[25]++, Object.defineProperty(e, o.key, o)
                    }
                }

                function s(e) {
                    return r.f[17]++, r.s[52]++, r.b[17][0]++, (0, o.isArray)(e) || (r.b[17][1]++, "string" == typeof e) || (r.b[17][2]++, "number" == typeof e) || (r.b[17][3]++, "boolean" == typeof e)
                }
                r.f[0]++, r.s[1]++, Object.defineProperty(e, "__esModule", {
                    value: !0
                }), r.s[2]++, e.Settings = void 0;
                var l = (r.s[31]++, e.Settings = function() {
                        function e() {
                            r.f[12]++, r.s[32]++,
                                function(e, t) {
                                    if (r.f[8]++, r.s[17]++, !(e instanceof t)) throw r.b[8][0]++, r.s[18]++, new TypeError("Cannot call a class as a function");
                                    r.b[8][1]++
                                }(this, e), r.s[33]++, this.store = {}, r.s[34]++, this.canRegister = !0
                        }
                        return r.f[11]++, r.s[35]++, l = e, c = [{
                            key: "register",
                            value: function(e) {
                                if (r.f[13]++, r.s[36]++, !this.canRegister) throw r.b[13][0]++, r.s[37]++, new Error("Settings allow only to register a collection if the settings object is empty");
                                if (r.b[13][1]++, r.s[38]++, !(0, o.isObject)(e)) throw r.b[14][0]++, r.s[39]++, new Error("Settings allow only the collection to be typeof: object");
                                r.b[14][1]++, r.s[40]++, this.canRegister = !1, r.s[41]++, this.store = e
                            }
                        }, {
                            key: "add",
                            value: function(e, t) {
                                if (r.f[14]++, r.s[42]++, (0, o.isObject)(t)) throw r.b[15][0]++, r.s[43]++, new Error("Settings allow only the value to be typeof: string, array, number, boolean");
                                r.b[15][1]++, r.s[44]++, this.canRegister = !1;
                                var a = (r.s[45]++, e.split("."));
                                r.s[46]++,
                                    function(e, t, o) {
                                        r.f[18]++;
                                        var a = (r.s[53]++, t.length - 1);
                                        r.s[54]++, t.forEach(function(t, l) {
                                            if (r.f[19]++, r.s[55]++, r.b[19][0]++, l < a && (r.b[19][1]++, !(t in e)) ? (r.b[18][0]++, r.s[56]++, e[t] = {}) : r.b[18][1]++, r.s[57]++, l == a)
                                                if (r.b[20][0]++, r.s[58]++, (0, n.isNullOrUndefined)(e[t])) r.b[21][0]++, r.s[59]++, e[t] = o;
                                                else {
                                                    if (r.b[21][1]++, r.s[60]++, r.b[23][0]++, !s(o) || (r.b[23][1]++, !s(e[t])) || (r.b[23][2]++, i(o) !== i(e[t]))) throw r.b[22][1]++, r.s[62]++, new Error("Settings does not allow change structure of already defined setting, please check the list: ".concat(JSON.stringify(e)));
                                                    r.b[22][0]++, r.s[61]++, e[t] = o
                                                }
                                            else r.b[20][1]++;
                                            r.s[63]++, e = e[t]
                                        })
                                    }(this.store, a, t)
                            }
                        }, {
                            key: "get",
                            value: function(e, n) {
                                r.f[15]++;
                                var o = (r.s[47]++, e.split(".")),
                                    i = (r.s[48]++, t.pluck.apply(void 0, [this.store].concat(function(e) {
                                        return r.f[4]++, r.s[9]++, r.b[4][0]++,
                                            function(e) {
                                                if (r.f[7]++, r.s[13]++, Array.isArray(e)) {
                                                    r.b[7][0]++, r.s[14]++;
                                                    for (var t = 0, n = new Array(e.length); t < e.length; t++) r.s[15]++, n[t] = e[t];
                                                    return r.s[16]++, n
                                                }
                                                r.b[7][1]++
                                            }(e) || (r.b[4][1]++, t = e, r.f[6]++, r.s[11]++, r.b[6][0]++, Symbol.iterator in Object(t) || (r.b[6][1]++, "[object Arguments]" === Object.prototype.toString.call(t)) ? (r.b[5][0]++, r.s[12]++, Array.from(t)) : void r.b[5][1]++) || (r.b[4][2]++, function() {
                                                throw r.f[5]++, r.s[10]++, new TypeError("Invalid attempt to spread non-iterable instance")
                                            }());
                                        var t
                                    }(o))));
                                return r.s[49]++, void 0 !== i ? (r.b[16][0]++, i) : (r.b[16][1]++, n)
                            }
                        }, {
                            key: "update",
                            value: function(e, t) {
                                r.f[16]++, r.s[50]++, this.add(e, t)
                            }
                        }], r.f[10]++, r.s[26]++, c ? (r.b[11][0]++, r.s[27]++, a(l.prototype, c)) : r.b[11][1]++, r.s[28]++, r.b[12][1]++, r.s[30]++, r.s[51]++, e;
                        var l, c
                    }()),
                    c = (r.s[64]++, new l);
                r.s[65]++, e.default = c
            }.apply(t, o)) || (e.exports = i)
        },
        46: function(e, t, n) {
            var o = n(6),
                i = n(31),
                r = n(22)("IE_PROTO"),
                a = Object.prototype;
            e.exports = Object.getPrototypeOf || function(e) {
                return e = i(e), o(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
            }
        },
        47: function(e, t) {
            t.f = {}.propertyIsEnumerable
        },
        48: function(t, n) {
            t.exports = e
        },
        5: function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        },
        50: function(e, t, n) {
            "use strict";
            var o = n(4);
            e.exports = function() {
                var e = o(this),
                    t = "";
                return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
            }
        },
        51: function(e, t, n) {
            var o = n(20),
                i = n(1)("toStringTag"),
                r = "Arguments" == o(function() {
                    return arguments
                }());
            e.exports = function(e) {
                var t, n, a;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                    try {
                        return e[t]
                    } catch (e) {}
                }(t = Object(e), i)) ? n : r ? o(t) : "Object" == (a = o(t)) && "function" == typeof t.callee ? "Arguments" : a
            }
        },
        53: function(e, t, n) {
            "use strict";
            var o = n(50),
                i = RegExp.prototype.exec,
                r = String.prototype.replace,
                a = i,
                s = function() {
                    var e = /a/,
                        t = /b*/g;
                    return i.call(e, "a"), i.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
                }(),
                l = void 0 !== /()??/.exec("")[1];
            (s || l) && (a = function(e) {
                var t, n, a, c;
                return l && (n = new RegExp("^" + this.source + "$(?!\\s)", o.call(this))), s && (t = this.lastIndex), a = i.call(this, e), s && a && (this.lastIndex = this.global ? a.index + a[0].length : t), l && a && a.length > 1 && r.call(a[0], n, function() {
                    for (c = 1; c < arguments.length - 2; c++) void 0 === arguments[c] && (a[c] = void 0)
                }), a
            }), e.exports = a
        },
        54: function(e, t, n) {
            var o = n(21),
                i = n(15);
            e.exports = function(e) {
                return function(t, n) {
                    var r, a, s = String(i(t)),
                        l = o(n),
                        c = s.length;
                    return l < 0 || l >= c ? e ? "" : void 0 : (r = s.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : r : e ? s.slice(l, l + 2) : a - 56320 + (r - 55296 << 10) + 65536
                }
            }
        },
        55: function(e, t, n) {
            var o = n(20);
            e.exports = Array.isArray || function(e) {
                return "Array" == o(e)
            }
        },
        56: function(e, t) {
            t.f = Object.getOwnPropertySymbols
        },
        57: function(e, t, n) {
            var o = n(33),
                i = n(24).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return o(e, i)
            }
        },
        58: function(e, t, n) {
            var o = n(4),
                i = n(29),
                r = n(1)("species");
            e.exports = function(e, t) {
                var n, a = o(e).constructor;
                return void 0 === a || void 0 == (n = o(a)[r]) ? t : i(n)
            }
        },
        59: function(e, t, n) {
            var o = n(0),
                i = n(8),
                r = n(18),
                a = n(60),
                s = n(7).f;
            e.exports = function(e) {
                var t = i.Symbol || (i.Symbol = r ? {} : o.Symbol || {});
                "_" == e.charAt(0) || e in t || s(t, e, {
                    value: a.f(e)
                })
            }
        },
        6: function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        },
        60: function(e, t, n) {
            t.f = n(1)
        },
        63: function(e, t, n) {
            var o = n(47),
                i = n(16),
                r = n(11),
                a = n(26),
                s = n(6),
                l = n(30),
                c = Object.getOwnPropertyDescriptor;
            t.f = n(3) ? c : function(e, t) {
                if (e = r(e), t = a(t, !0), l) try {
                    return c(e, t)
                } catch (e) {}
                if (s(e, t)) return i(!o.f.call(e, t), e[t])
            }
        },
        64: function(e, t, n) {
            "use strict";
            var o = n(54)(!0);
            e.exports = function(e, t, n) {
                return t + (n ? o(e, t).length : 1)
            }
        },
        65: function(e, t, n) {
            "use strict";
            var o = n(51),
                i = RegExp.prototype.exec;
            e.exports = function(e, t) {
                var n = e.exec;
                if ("function" == typeof n) {
                    var r = n.call(e, t);
                    if ("object" != typeof r) throw new TypeError("RegExp exec method returned something other than an Object or null");
                    return r
                }
                if ("RegExp" !== o(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
                return i.call(e, t)
            }
        },
        66: function(e, t, n) {
            "use strict";
            n(74);
            var o = n(9),
                i = n(2),
                r = n(10),
                a = n(15),
                s = n(1),
                l = n(53),
                c = s("species"),
                u = !r(function() {
                    var e = /./;
                    return e.exec = function() {
                        var e = [];
                        return e.groups = {
                            a: "7"
                        }, e
                    }, "7" !== "".replace(e, "$<a>")
                }),
                f = function() {
                    var e = /(?:)/,
                        t = e.exec;
                    e.exec = function() {
                        return t.apply(this, arguments)
                    };
                    var n = "ab".split(e);
                    return 2 === n.length && "a" === n[0] && "b" === n[1]
                }();
            e.exports = function(e, t, n) {
                var d = s(e),
                    p = !r(function() {
                        var t = {};
                        return t[d] = function() {
                            return 7
                        }, 7 != "" [e](t)
                    }),
                    m = p ? !r(function() {
                        var t = !1,
                            n = /a/;
                        return n.exec = function() {
                            return t = !0, null
                        }, "split" === e && (n.constructor = {}, n.constructor[c] = function() {
                            return n
                        }), n[d](""), !t
                    }) : void 0;
                if (!p || !m || "replace" === e && !u || "split" === e && !f) {
                    var h = /./ [d],
                        v = n(a, d, "" [e], function(e, t, n, o, i) {
                            return t.exec === l ? p && !i ? {
                                done: !0,
                                value: h.call(t, n, o)
                            } : {
                                done: !0,
                                value: e.call(n, t, o)
                            } : {
                                done: !1
                            }
                        }),
                        g = v[0],
                        y = v[1];
                    o(String.prototype, e, g), i(RegExp.prototype, d, 2 == t ? function(e, t) {
                        return y.call(e, this, t)
                    } : function(e) {
                        return y.call(e, this)
                    })
                }
            }
        },
        69: function(e, t, n) {
            "use strict";
            var o = n(54)(!0);
            n(38)(String, "String", function(e) {
                this._t = String(e), this._i = 0
            }, function() {
                var e, t = this._t,
                    n = this._i;
                return n >= t.length ? {
                    value: void 0,
                    done: !0
                } : (e = o(t, n), this._i += e.length, {
                    value: e,
                    done: !1
                })
            })
        },
        7: function(e, t, n) {
            var o = n(4),
                i = n(30),
                r = n(26),
                a = Object.defineProperty;
            t.f = n(3) ? Object.defineProperty : function(e, t, n) {
                if (o(e), t = r(t, !0), o(n), i) try {
                    return a(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        },
        70: function(e, t, n) {
            var o = n(4);
            e.exports = function(e, t, n, i) {
                try {
                    return i ? t(o(n)[0], n[1]) : t(n)
                } catch (t) {
                    var r = e.return;
                    throw void 0 !== r && o(r.call(e)), t
                }
            }
        },
        71: function(e, t, n) {
            var o = n(14),
                i = n(1)("iterator"),
                r = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (o.Array === e || r[i] === e)
            }
        },
        72: function(e, t, n) {
            var o = n(51),
                i = n(1)("iterator"),
                r = n(14);
            e.exports = n(8).getIteratorMethod = function(e) {
                if (void 0 != e) return e[i] || e["@@iterator"] || r[o(e)]
            }
        },
        73: function(e, t, n) {
            var o = n(1)("iterator"),
                i = !1;
            try {
                var r = [7][o]();
                r.return = function() {
                    i = !0
                }, Array.from(r, function() {
                    throw 2
                })
            } catch (e) {}
            e.exports = function(e, t) {
                if (!t && !i) return !1;
                var n = !1;
                try {
                    var r = [7],
                        a = r[o]();
                    a.next = function() {
                        return {
                            done: n = !0
                        }
                    }, r[o] = function() {
                        return a
                    }, e(r)
                } catch (e) {}
                return n
            }
        },
        74: function(e, t, n) {
            "use strict";
            var o = n(53);
            n(17)({
                target: "RegExp",
                proto: !0,
                forced: o !== /./.exec
            }, {
                exec: o
            })
        },
        75: function(e, t, n) {
            var o = n(5),
                i = n(20),
                r = n(1)("match");
            e.exports = function(e) {
                var t;
                return o(e) && (void 0 !== (t = e[r]) ? !!t : "RegExp" == i(e))
            }
        },
        77: function(e, t, n) {
            "use strict";
            n(78);
            var o = n(4),
                i = n(50),
                r = n(3),
                a = /./.toString,
                s = function(e) {
                    n(9)(RegExp.prototype, "toString", e, !0)
                };
            n(10)(function() {
                return "/a/b" != a.call({
                    source: "a",
                    flags: "b"
                })
            }) ? s(function() {
                var e = o(this);
                return "/".concat(e.source, "/", "flags" in e ? e.flags : !r && e instanceof RegExp ? i.call(e) : void 0)
            }) : "toString" != a.name && s(function() {
                return a.call(this)
            })
        },
        78: function(e, t, n) {
            n(3) && "g" != /./g.flags && n(7).f(RegExp.prototype, "flags", {
                configurable: !0,
                get: n(50)
            })
        },
        79: function(e, t, n) {
            var o = Date.prototype,
                i = o.toString,
                r = o.getTime;
            new Date(NaN) + "" != "Invalid Date" && n(9)(o, "toString", function() {
                var e = r.call(this);
                return e == e ? i.call(this) : "Invalid Date"
            })
        },
        8: function(e, t) {
            var n = e.exports = {
                version: "2.6.4"
            };
            "number" == typeof __e && (__e = n)
        },
        80: function(e, t, n) {
            n(59)("asyncIterator")
        },
        81: function(e, t, n) {
            "use strict";
            var o = n(0),
                i = n(6),
                r = n(3),
                a = n(17),
                s = n(9),
                l = n(82).KEY,
                c = n(10),
                u = n(13),
                f = n(25),
                d = n(12),
                p = n(1),
                m = n(60),
                h = n(59),
                v = n(83),
                g = n(55),
                y = n(4),
                _ = n(5),
                E = n(11),
                S = n(26),
                T = n(16),
                b = n(35),
                I = n(84),
                O = n(63),
                w = n(7),
                A = n(19),
                R = O.f,
                N = w.f,
                C = I.f,
                x = o.Symbol,
                P = o.JSON,
                k = P && P.stringify,
                D = p("_hidden"),
                M = p("toPrimitive"),
                L = {}.propertyIsEnumerable,
                B = u("symbol-registry"),
                j = u("symbols"),
                U = u("op-symbols"),
                W = Object.prototype,
                V = "function" == typeof x,
                F = o.QObject,
                G = !F || !F.prototype || !F.prototype.findChild,
                H = r && c(function() {
                    return 7 != b(N({}, "a", {
                        get: function() {
                            return N(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                }) ? function(e, t, n) {
                    var o = R(W, t);
                    o && delete W[t], N(e, t, n), o && e !== W && N(W, t, o)
                } : N,
                Q = function(e) {
                    var t = j[e] = b(x.prototype);
                    return t._k = e, t
                },
                K = V && "symbol" == typeof x.iterator ? function(e) {
                    return "symbol" == typeof e
                } : function(e) {
                    return e instanceof x
                },
                z = function(e, t, n) {
                    return e === W && z(U, t, n), y(e), t = S(t, !0), y(n), i(j, t) ? (n.enumerable ? (i(e, D) && e[D][t] && (e[D][t] = !1), n = b(n, {
                        enumerable: T(0, !1)
                    })) : (i(e, D) || N(e, D, T(1, {})), e[D][t] = !0), H(e, t, n)) : N(e, t, n)
                },
                q = function(e, t) {
                    y(e);
                    for (var n, o = v(t = E(t)), i = 0, r = o.length; r > i;) z(e, n = o[i++], t[n]);
                    return e
                },
                Y = function(e) {
                    var t = L.call(this, e = S(e, !0));
                    return !(this === W && i(j, e) && !i(U, e)) && (!(t || !i(this, e) || !i(j, e) || i(this, D) && this[D][e]) || t)
                },
                X = function(e, t) {
                    if (e = E(e), t = S(t, !0), e !== W || !i(j, t) || i(U, t)) {
                        var n = R(e, t);
                        return !n || !i(j, t) || i(e, D) && e[D][t] || (n.enumerable = !0), n
                    }
                },
                Z = function(e) {
                    for (var t, n = C(E(e)), o = [], r = 0; n.length > r;) i(j, t = n[r++]) || t == D || t == l || o.push(t);
                    return o
                },
                J = function(e) {
                    for (var t, n = e === W, o = C(n ? U : E(e)), r = [], a = 0; o.length > a;) !i(j, t = o[a++]) || n && !i(W, t) || r.push(j[t]);
                    return r
                };
            V || (s((x = function() {
                if (this instanceof x) throw TypeError("Symbol is not a constructor!");
                var e = d(arguments.length > 0 ? arguments[0] : void 0),
                    t = function(n) {
                        this === W && t.call(U, n), i(this, D) && i(this[D], e) && (this[D][e] = !1), H(this, e, T(1, n))
                    };
                return r && G && H(W, e, {
                    configurable: !0,
                    set: t
                }), Q(e)
            }).prototype, "toString", function() {
                return this._k
            }), O.f = X, w.f = z, n(57).f = I.f = Z, n(47).f = Y, n(56).f = J, r && !n(18) && s(W, "propertyIsEnumerable", Y, !0), m.f = function(e) {
                return Q(p(e))
            }), a(a.G + a.W + a.F * !V, {
                Symbol: x
            });
            for (var $ = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; $.length > ee;) p($[ee++]);
            for (var te = A(p.store), ne = 0; te.length > ne;) h(te[ne++]);
            a(a.S + a.F * !V, "Symbol", {
                for: function(e) {
                    return i(B, e += "") ? B[e] : B[e] = x(e)
                },
                keyFor: function(e) {
                    if (!K(e)) throw TypeError(e + " is not a symbol!");
                    for (var t in B)
                        if (B[t] === e) return t
                },
                useSetter: function() {
                    G = !0
                },
                useSimple: function() {
                    G = !1
                }
            }), a(a.S + a.F * !V, "Object", {
                create: function(e, t) {
                    return void 0 === t ? b(e) : q(b(e), t)
                },
                defineProperty: z,
                defineProperties: q,
                getOwnPropertyDescriptor: X,
                getOwnPropertyNames: Z,
                getOwnPropertySymbols: J
            }), P && a(a.S + a.F * (!V || c(function() {
                var e = x();
                return "[null]" != k([e]) || "{}" != k({
                    a: e
                }) || "{}" != k(Object(e))
            })), "JSON", {
                stringify: function(e) {
                    for (var t, n, o = [e], i = 1; arguments.length > i;) o.push(arguments[i++]);
                    if (n = t = o[1], (_(t) || void 0 !== e) && !K(e)) return g(t) || (t = function(e, t) {
                        if ("function" == typeof n && (t = n.call(this, e, t)), !K(t)) return t
                    }), o[1] = t, k.apply(P, o)
                }
            }), x.prototype[M] || n(2)(x.prototype, M, x.prototype.valueOf), f(x, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0)
        },
        82: function(e, t, n) {
            var o = n(12)("meta"),
                i = n(5),
                r = n(6),
                a = n(7).f,
                s = 0,
                l = Object.isExtensible || function() {
                    return !0
                },
                c = !n(10)(function() {
                    return l(Object.preventExtensions({}))
                }),
                u = function(e) {
                    a(e, o, {
                        value: {
                            i: "O" + ++s,
                            w: {}
                        }
                    })
                },
                f = e.exports = {
                    KEY: o,
                    NEED: !1,
                    fastKey: function(e, t) {
                        if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!r(e, o)) {
                            if (!l(e)) return "F";
                            if (!t) return "E";
                            u(e)
                        }
                        return e[o].i
                    },
                    getWeak: function(e, t) {
                        if (!r(e, o)) {
                            if (!l(e)) return !0;
                            if (!t) return !1;
                            u(e)
                        }
                        return e[o].w
                    },
                    onFreeze: function(e) {
                        return c && f.NEED && l(e) && !r(e, o) && u(e), e
                    }
                }
        },
        83: function(e, t, n) {
            var o = n(19),
                i = n(56),
                r = n(47);
            e.exports = function(e) {
                var t = o(e),
                    n = i.f;
                if (n)
                    for (var a, s = n(e), l = r.f, c = 0; s.length > c;) l.call(e, a = s[c++]) && t.push(a);
                return t
            }
        },
        84: function(e, t, n) {
            var o = n(11),
                i = n(57).f,
                r = {}.toString,
                a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function(e) {
                return a && "[object Window]" == r.call(e) ? function(e) {
                    try {
                        return i(e)
                    } catch (e) {
                        return a.slice()
                    }
                }(e) : i(o(e))
            }
        },
        85: function(e, t, n) {
            "use strict";
            var o = n(75),
                i = n(4),
                r = n(58),
                a = n(64),
                s = n(27),
                l = n(65),
                c = n(53),
                u = n(10),
                f = Math.min,
                d = [].push,
                p = !u(function() {
                    RegExp(4294967295, "y")
                });
            n(66)("split", 2, function(e, t, n, u) {
                var m;
                return m = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, t) {
                    var i = String(this);
                    if (void 0 === e && 0 === t) return [];
                    if (!o(e)) return n.call(i, e, t);
                    for (var r, a, s, l = [], u = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), f = 0, p = void 0 === t ? 4294967295 : t >>> 0, m = new RegExp(e.source, u + "g");
                        (r = c.call(m, i)) && !((a = m.lastIndex) > f && (l.push(i.slice(f, r.index)), r.length > 1 && r.index < i.length && d.apply(l, r.slice(1)), s = r[0].length, f = a, l.length >= p));) m.lastIndex === r.index && m.lastIndex++;
                    return f === i.length ? !s && m.test("") || l.push("") : l.push(i.slice(f)), l.length > p ? l.slice(0, p) : l
                } : "0".split(void 0, 0).length ? function(e, t) {
                    return void 0 === e && 0 === t ? [] : n.call(this, e, t)
                } : n, [function(n, o) {
                    var i = e(this),
                        r = void 0 == n ? void 0 : n[t];
                    return void 0 !== r ? r.call(n, i, o) : m.call(String(i), n, o)
                }, function(e, t) {
                    var o = u(m, e, this, t, m !== n);
                    if (o.done) return o.value;
                    var c = i(e),
                        d = String(this),
                        h = r(c, RegExp),
                        v = c.unicode,
                        g = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (p ? "y" : "g"),
                        y = new h(p ? c : "^(?:" + c.source + ")", g),
                        _ = void 0 === t ? 4294967295 : t >>> 0;
                    if (0 === _) return [];
                    if (0 === d.length) return null === l(y, d) ? [d] : [];
                    for (var E = 0, S = 0, T = []; S < d.length;) {
                        y.lastIndex = p ? S : 0;
                        var b, I = l(y, p ? d : d.slice(S));
                        if (null === I || (b = f(s(y.lastIndex + (p ? 0 : S)), d.length)) === E) S = a(d, S, v);
                        else {
                            if (T.push(d.slice(E, S)), T.length === _) return T;
                            for (var O = 1; O <= I.length - 1; O++)
                                if (T.push(I[O]), T.length === _) return T;
                            S = E = b
                        }
                    }
                    return T.push(d.slice(E)), T
                }]
            })
        },
        9: function(e, t, n) {
            var o = n(0),
                i = n(2),
                r = n(6),
                a = n(12)("src"),
                s = n(34),
                l = ("" + s).split("toString");
            n(8).inspectSource = function(e) {
                return s.call(e)
            }, (e.exports = function(e, t, n, s) {
                var c = "function" == typeof n;
                c && (r(n, "name") || i(n, "name", t)), e[t] !== n && (c && (r(n, a) || i(n, a, e[t] ? "" + e[t] : l.join(String(t)))), e === o ? e[t] = n : s ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)))
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && this[a] || s.call(this)
            })
        },
        91: function(e, n) {
            e.exports = t
        },
        98: function(e, t, n) {
            "use strict";
            var o = n(28),
                i = n(17),
                r = n(31),
                a = n(70),
                s = n(71),
                l = n(27),
                c = n(99),
                u = n(72);
            i(i.S + i.F * !n(73)(function(e) {
                Array.from(e)
            }), "Array", {
                from: function(e) {
                    var t, n, i, f, d = r(e),
                        p = "function" == typeof this ? this : Array,
                        m = arguments.length,
                        h = m > 1 ? arguments[1] : void 0,
                        v = void 0 !== h,
                        g = 0,
                        y = u(d);
                    if (v && (h = o(h, m > 2 ? arguments[2] : void 0, 2)), void 0 == y || p == Array && s(y))
                        for (n = new p(t = l(d.length)); t > g; g++) c(n, g, v ? h(d[g], g) : d[g]);
                    else
                        for (f = y.call(d), n = new p; !(i = f.next()).done; g++) c(n, g, v ? a(f, h, [i.value, g], !0) : i.value);
                    return n.length = g, n
                }
            })
        },
        99: function(e, t, n) {
            "use strict";
            var o = n(7),
                i = n(16);
            e.exports = function(e, t, n) {
                t in e ? o.f(e, t, i(0, n)) : e[t] = n
            }
        }
    })
}), define("artemis/components/uhf-header", [], function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: o
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (t.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var i in e) t.d(o, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return o
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 455)
    }({
        0: function(e, t) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        },
        1: function(e, t, n) {
            var o = n(13)("wks"),
                i = n(12),
                r = n(0).Symbol,
                a = "function" == typeof r;
            (e.exports = function(e) {
                return o[e] || (o[e] = a && r[e] || (a ? r : i)("Symbol." + e))
            }).store = o
        },
        10: function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        },
        100: function(e, t, n) {
            "use strict";
            var o = n(17),
                i = n(101)(5),
                r = !0;
            "find" in [] && Array(1).find(function() {
                r = !1
            }), o(o.P + o.F * r, "Array", {
                find: function(e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), n(37)("find")
        },
        101: function(e, t, n) {
            var o = n(28),
                i = n(32),
                r = n(31),
                a = n(27),
                s = n(102);
            e.exports = function(e, t) {
                var n = 1 == e,
                    l = 2 == e,
                    c = 3 == e,
                    u = 4 == e,
                    f = 6 == e,
                    d = 5 == e || f,
                    p = t || s;
                return function(t, s, m) {
                    for (var h, v, g = r(t), y = i(g), _ = o(s, m, 3), E = a(y.length), S = 0, T = n ? p(t, E) : l ? p(t, 0) : void 0; E > S; S++)
                        if ((d || S in y) && (v = _(h = y[S], S, g), e))
                            if (n) T[S] = v;
                            else if (v) switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return h;
                        case 6:
                            return S;
                        case 2:
                            T.push(h)
                    } else if (u) return !1;
                    return f ? -1 : c || u ? u : T
                }
            }
        },
        102: function(e, t, n) {
            var o = n(103);
            e.exports = function(e, t) {
                return new(o(e))(t)
            }
        },
        103: function(e, t, n) {
            var o = n(5),
                i = n(55),
                r = n(1)("species");
            e.exports = function(e) {
                var t;
                return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), o(t) && null === (t = t[r]) && (t = void 0)), void 0 === t ? Array : t
            }
        },
        12: function(e, t) {
            var n = 0,
                o = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
            }
        },
        13: function(e, t, n) {
            var o = n(8),
                i = n(0),
                r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
            (e.exports = function(e, t) {
                return r[e] || (r[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: o.version,
                mode: n(18) ? "pure" : "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            })
        },
        15: function(e, t) {
            e.exports = function(e) {
                if (void 0 == e) throw TypeError("Can't call method on  " + e);
                return e
            }
        },
        16: function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        17: function(e, t, n) {
            var o = n(0),
                i = n(8),
                r = n(2),
                a = n(9),
                s = n(28),
                l = function(e, t, n) {
                    var c, u, f, d, p = e & l.F,
                        m = e & l.G,
                        h = e & l.S,
                        v = e & l.P,
                        g = e & l.B,
                        y = m ? o : h ? o[t] || (o[t] = {}) : (o[t] || {}).prototype,
                        _ = m ? i : i[t] || (i[t] = {}),
                        E = _.prototype || (_.prototype = {});
                    for (c in m && (n = t), n) f = ((u = !p && y && void 0 !== y[c]) ? y : n)[c], d = g && u ? s(f, o) : v && "function" == typeof f ? s(Function.call, f) : f, y && a(y, c, f, e & l.U), _[c] != f && r(_, c, d), v && E[c] != f && (E[c] = f)
                };
            o.core = i, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
        },
        18: function(e, t) {
            e.exports = !1
        },
        2: function(e, t, n) {
            var o = n(7),
                i = n(16);
            e.exports = n(3) ? function(e, t, n) {
                return o.f(e, t, i(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        },
        20: function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1)
            }
        },
        21: function(e, t) {
            var n = Math.ceil,
                o = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
            }
        },
        23: function(e, t, n) {
            var o = n(5),
                i = n(0).document,
                r = o(i) && o(i.createElement);
            e.exports = function(e) {
                return r ? i.createElement(e) : {}
            }
        },
        26: function(e, t, n) {
            var o = n(5);
            e.exports = function(e, t) {
                if (!o(e)) return e;
                var n, i;
                if (t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
                if ("function" == typeof(n = e.valueOf) && !o(i = n.call(e))) return i;
                if (!t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        27: function(e, t, n) {
            var o = n(21),
                i = Math.min;
            e.exports = function(e) {
                return e > 0 ? i(o(e), 9007199254740991) : 0
            }
        },
        28: function(e, t, n) {
            var o = n(29);
            e.exports = function(e, t, n) {
                if (o(e), void 0 === t) return e;
                switch (n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, o) {
                            return e.call(t, n, o)
                        };
                    case 3:
                        return function(n, o, i) {
                            return e.call(t, n, o, i)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
        },
        29: function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e
            }
        },
        3: function(e, t, n) {
            e.exports = !n(10)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        30: function(e, t, n) {
            e.exports = !n(3) && !n(10)(function() {
                return 7 != Object.defineProperty(n(23)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        31: function(e, t, n) {
            var o = n(15);
            e.exports = function(e) {
                return Object(o(e))
            }
        },
        32: function(e, t, n) {
            var o = n(20);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == o(e) ? e.split("") : Object(e)
            }
        },
        34: function(e, t, n) {
            e.exports = n(13)("native-function-to-string", Function.toString)
        },
        37: function(e, t, n) {
            var o = n(1)("unscopables"),
                i = Array.prototype;
            void 0 == i[o] && n(2)(i, o, {}), e.exports = function(e) {
                i[o][e] = !0
            }
        },
        4: function(e, t, n) {
            var o = n(5);
            e.exports = function(e) {
                if (!o(e)) throw TypeError(e + " is not an object!");
                return e
            }
        },
        455: function(e, t, n) {
            var o, i, r = function() {
                var e = "D:\\a\\_work\\15\\s\\src\\js\\artemis\\components\\uhf-header.js",
                    t = "0b607da2d865fb007874c280588142e185b83d6a",
                    n = new(0, function() {}.constructor)("return this")(),
                    o = {
                        path: "D:\\a\\_work\\15\\s\\src\\js\\artemis\\components\\uhf-header.js",
                        statementMap: {
                            0: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 171,
                                    column: 3
                                }
                            },
                            1: {
                                start: {
                                    line: 4,
                                    column: 2
                                },
                                end: {
                                    line: 6,
                                    column: 5
                                }
                            },
                            2: {
                                start: {
                                    line: 7,
                                    column: 2
                                },
                                end: {
                                    line: 7,
                                    column: 178
                                }
                            },
                            3: {
                                start: {
                                    line: 9,
                                    column: 18
                                },
                                end: {
                                    line: 9,
                                    column: 29
                                }
                            },
                            4: {
                                start: {
                                    line: 10,
                                    column: 20
                                },
                                end: {
                                    line: 10,
                                    column: 30
                                }
                            },
                            5: {
                                start: {
                                    line: 11,
                                    column: 26
                                },
                                end: {
                                    line: 11,
                                    column: 42
                                }
                            },
                            6: {
                                start: {
                                    line: 12,
                                    column: 25
                                },
                                end: {
                                    line: 12,
                                    column: 72
                                }
                            },
                            7: {
                                start: {
                                    line: 13,
                                    column: 20
                                },
                                end: {
                                    line: 19,
                                    column: 3
                                }
                            },
                            8: {
                                start: {
                                    line: 20,
                                    column: 20
                                },
                                end: {
                                    line: 24,
                                    column: 3
                                }
                            },
                            9: {
                                start: {
                                    line: 27,
                                    column: 4
                                },
                                end: {
                                    line: 29,
                                    column: 7
                                }
                            },
                            10: {
                                start: {
                                    line: 28,
                                    column: 6
                                },
                                end: {
                                    line: 28,
                                    column: 31
                                }
                            },
                            11: {
                                start: {
                                    line: 33,
                                    column: 4
                                },
                                end: {
                                    line: 33,
                                    column: 59
                                }
                            },
                            12: {
                                start: {
                                    line: 38,
                                    column: 4
                                },
                                end: {
                                    line: 38,
                                    column: 52
                                }
                            },
                            13: {
                                start: {
                                    line: 38,
                                    column: 24
                                },
                                end: {
                                    line: 38,
                                    column: 52
                                }
                            },
                            14: {
                                start: {
                                    line: 39,
                                    column: 4
                                },
                                end: {
                                    line: 39,
                                    column: 40
                                }
                            },
                            15: {
                                start: {
                                    line: 39,
                                    column: 18
                                },
                                end: {
                                    line: 39,
                                    column: 40
                                }
                            },
                            16: {
                                start: {
                                    line: 40,
                                    column: 4
                                },
                                end: {
                                    line: 40,
                                    column: 27
                                }
                            },
                            17: {
                                start: {
                                    line: 44,
                                    column: 18
                                },
                                end: {
                                    line: 44,
                                    column: 30
                                }
                            },
                            18: {
                                start: {
                                    line: 46,
                                    column: 4
                                },
                                end: {
                                    line: 48,
                                    column: 5
                                }
                            },
                            19: {
                                start: {
                                    line: 47,
                                    column: 6
                                },
                                end: {
                                    line: 47,
                                    column: 39
                                }
                            },
                            20: {
                                start: {
                                    line: 50,
                                    column: 4
                                },
                                end: {
                                    line: 52,
                                    column: 7
                                }
                            },
                            21: {
                                start: {
                                    line: 51,
                                    column: 6
                                },
                                end: {
                                    line: 51,
                                    column: 27
                                }
                            },
                            22: {
                                start: {
                                    line: 57,
                                    column: 4
                                },
                                end: {
                                    line: 57,
                                    column: 62
                                }
                            },
                            23: {
                                start: {
                                    line: 61,
                                    column: 4
                                },
                                end: {
                                    line: 61,
                                    column: 66
                                }
                            },
                            24: {
                                start: {
                                    line: 70,
                                    column: 35
                                },
                                end: {
                                    line: 72,
                                    column: 5
                                }
                            },
                            25: {
                                start: {
                                    line: 71,
                                    column: 6
                                },
                                end: {
                                    line: 71,
                                    column: 93
                                }
                            },
                            26: {
                                start: {
                                    line: 74,
                                    column: 26
                                },
                                end: {
                                    line: 76,
                                    column: 5
                                }
                            },
                            27: {
                                start: {
                                    line: 75,
                                    column: 6
                                },
                                end: {
                                    line: 75,
                                    column: 34
                                }
                            },
                            28: {
                                start: {
                                    line: 78,
                                    column: 15
                                },
                                end: {
                                    line: 80,
                                    column: 5
                                }
                            },
                            29: {
                                start: {
                                    line: 79,
                                    column: 6
                                },
                                end: {
                                    line: 79,
                                    column: 44
                                }
                            },
                            30: {
                                start: {
                                    line: 82,
                                    column: 21
                                },
                                end: {
                                    line: 84,
                                    column: 5
                                }
                            },
                            31: {
                                start: {
                                    line: 83,
                                    column: 6
                                },
                                end: {
                                    line: 83,
                                    column: 47
                                }
                            },
                            32: {
                                start: {
                                    line: 86,
                                    column: 25
                                },
                                end: {
                                    line: 88,
                                    column: 5
                                }
                            },
                            33: {
                                start: {
                                    line: 87,
                                    column: 6
                                },
                                end: {
                                    line: 87,
                                    column: 53
                                }
                            },
                            34: {
                                start: {
                                    line: 90,
                                    column: 25
                                },
                                end: {
                                    line: 92,
                                    column: 5
                                }
                            },
                            35: {
                                start: {
                                    line: 91,
                                    column: 6
                                },
                                end: {
                                    line: 91,
                                    column: 36
                                }
                            },
                            36: {
                                start: {
                                    line: 94,
                                    column: 29
                                },
                                end: {
                                    line: 96,
                                    column: 5
                                }
                            },
                            37: {
                                start: {
                                    line: 95,
                                    column: 6
                                },
                                end: {
                                    line: 95,
                                    column: 41
                                }
                            },
                            38: {
                                start: {
                                    line: 98,
                                    column: 29
                                },
                                end: {
                                    line: 100,
                                    column: 5
                                }
                            },
                            39: {
                                start: {
                                    line: 99,
                                    column: 6
                                },
                                end: {
                                    line: 99,
                                    column: 37
                                }
                            },
                            40: {
                                start: {
                                    line: 102,
                                    column: 31
                                },
                                end: {
                                    line: 104,
                                    column: 5
                                }
                            },
                            41: {
                                start: {
                                    line: 103,
                                    column: 6
                                },
                                end: {
                                    line: 103,
                                    column: 45
                                }
                            },
                            42: {
                                start: {
                                    line: 106,
                                    column: 28
                                },
                                end: {
                                    line: 106,
                                    column: 102
                                }
                            },
                            43: {
                                start: {
                                    line: 108,
                                    column: 4
                                },
                                end: {
                                    line: 125,
                                    column: 5
                                }
                            },
                            44: {
                                start: {
                                    line: 110,
                                    column: 6
                                },
                                end: {
                                    line: 110,
                                    column: 23
                                }
                            },
                            45: {
                                start: {
                                    line: 112,
                                    column: 6
                                },
                                end: {
                                    line: 118,
                                    column: 7
                                }
                            },
                            46: {
                                start: {
                                    line: 114,
                                    column: 8
                                },
                                end: {
                                    line: 114,
                                    column: 38
                                }
                            },
                            47: {
                                start: {
                                    line: 117,
                                    column: 8
                                },
                                end: {
                                    line: 117,
                                    column: 116
                                }
                            },
                            48: {
                                start: {
                                    line: 121,
                                    column: 6
                                },
                                end: {
                                    line: 121,
                                    column: 33
                                }
                            },
                            49: {
                                start: {
                                    line: 122,
                                    column: 6
                                },
                                end: {
                                    line: 122,
                                    column: 82
                                }
                            },
                            50: {
                                start: {
                                    line: 123,
                                    column: 6
                                },
                                end: {
                                    line: 123,
                                    column: 35
                                }
                            },
                            51: {
                                start: {
                                    line: 124,
                                    column: 6
                                },
                                end: {
                                    line: 124,
                                    column: 39
                                }
                            },
                            52: {
                                start: {
                                    line: 134,
                                    column: 15
                                },
                                end: {
                                    line: 136,
                                    column: 5
                                }
                            },
                            53: {
                                start: {
                                    line: 135,
                                    column: 6
                                },
                                end: {
                                    line: 135,
                                    column: 44
                                }
                            },
                            54: {
                                start: {
                                    line: 138,
                                    column: 16
                                },
                                end: {
                                    line: 140,
                                    column: 5
                                }
                            },
                            55: {
                                start: {
                                    line: 139,
                                    column: 6
                                },
                                end: {
                                    line: 139,
                                    column: 19
                                }
                            },
                            56: {
                                start: {
                                    line: 142,
                                    column: 28
                                },
                                end: {
                                    line: 144,
                                    column: 5
                                }
                            },
                            57: {
                                start: {
                                    line: 143,
                                    column: 6
                                },
                                end: {
                                    line: 143,
                                    column: 64
                                }
                            },
                            58: {
                                start: {
                                    line: 146,
                                    column: 19
                                },
                                end: {
                                    line: 150,
                                    column: 5
                                }
                            },
                            59: {
                                start: {
                                    line: 147,
                                    column: 6
                                },
                                end: {
                                    line: 149,
                                    column: 9
                                }
                            },
                            60: {
                                start: {
                                    line: 148,
                                    column: 8
                                },
                                end: {
                                    line: 148,
                                    column: 24
                                }
                            },
                            61: {
                                start: {
                                    line: 152,
                                    column: 4
                                },
                                end: {
                                    line: 156,
                                    column: 5
                                }
                            },
                            62: {
                                start: {
                                    line: 153,
                                    column: 25
                                },
                                end: {
                                    line: 153,
                                    column: 44
                                }
                            },
                            63: {
                                start: {
                                    line: 154,
                                    column: 30
                                },
                                end: {
                                    line: 154,
                                    column: 58
                                }
                            },
                            64: {
                                start: {
                                    line: 155,
                                    column: 6
                                },
                                end: {
                                    line: 155,
                                    column: 145
                                }
                            },
                            65: {
                                start: {
                                    line: 160,
                                    column: 4
                                },
                                end: {
                                    line: 160,
                                    column: 25
                                }
                            },
                            66: {
                                start: {
                                    line: 163,
                                    column: 2
                                },
                                end: {
                                    line: 163,
                                    column: 22
                                }
                            },
                            67: {
                                start: {
                                    line: 164,
                                    column: 2
                                },
                                end: {
                                    line: 164,
                                    column: 31
                                }
                            },
                            68: {
                                start: {
                                    line: 165,
                                    column: 2
                                },
                                end: {
                                    line: 165,
                                    column: 38
                                }
                            },
                            69: {
                                start: {
                                    line: 166,
                                    column: 2
                                },
                                end: {
                                    line: 166,
                                    column: 22
                                }
                            },
                            70: {
                                start: {
                                    line: 167,
                                    column: 2
                                },
                                end: {
                                    line: 167,
                                    column: 36
                                }
                            },
                            71: {
                                start: {
                                    line: 168,
                                    column: 2
                                },
                                end: {
                                    line: 168,
                                    column: 36
                                }
                            },
                            72: {
                                start: {
                                    line: 169,
                                    column: 2
                                },
                                end: {
                                    line: 169,
                                    column: 46
                                }
                            },
                            73: {
                                start: {
                                    line: 170,
                                    column: 2
                                },
                                end: {
                                    line: 170,
                                    column: 40
                                }
                            }
                        },
                        fnMap: {
                            0: {
                                name: "(anonymous_0)",
                                decl: {
                                    start: {
                                        line: 1,
                                        column: 54
                                    },
                                    end: {
                                        line: 1,
                                        column: 55
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 73
                                    },
                                    end: {
                                        line: 171,
                                        column: 1
                                    }
                                },
                                line: 1
                            },
                            1: {
                                name: "ruleV2",
                                decl: {
                                    start: {
                                        line: 26,
                                        column: 11
                                    },
                                    end: {
                                        line: 26,
                                        column: 17
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 26,
                                        column: 20
                                    },
                                    end: {
                                        line: 30,
                                        column: 3
                                    }
                                },
                                line: 26
                            },
                            2: {
                                name: "(anonymous_2)",
                                decl: {
                                    start: {
                                        line: 27,
                                        column: 78
                                    },
                                    end: {
                                        line: 27,
                                        column: 79
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 27,
                                        column: 93
                                    },
                                    end: {
                                        line: 29,
                                        column: 5
                                    }
                                },
                                line: 27
                            },
                            3: {
                                name: "ruleV2WithMe",
                                decl: {
                                    start: {
                                        line: 32,
                                        column: 11
                                    },
                                    end: {
                                        line: 32,
                                        column: 23
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 32,
                                        column: 26
                                    },
                                    end: {
                                        line: 34,
                                        column: 3
                                    }
                                },
                                line: 32
                            },
                            4: {
                                name: "uhfVersion",
                                decl: {
                                    start: {
                                        line: 36,
                                        column: 11
                                    },
                                    end: {
                                        line: 36,
                                        column: 21
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 36,
                                        column: 24
                                    },
                                    end: {
                                        line: 41,
                                        column: 3
                                    }
                                },
                                line: 36
                            },
                            5: {
                                name: "isAnyVersion",
                                decl: {
                                    start: {
                                        line: 43,
                                        column: 11
                                    },
                                    end: {
                                        line: 43,
                                        column: 23
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 43,
                                        column: 26
                                    },
                                    end: {
                                        line: 53,
                                        column: 3
                                    }
                                },
                                line: 43
                            },
                            6: {
                                name: "(anonymous_6)",
                                decl: {
                                    start: {
                                        line: 50,
                                        column: 25
                                    },
                                    end: {
                                        line: 50,
                                        column: 26
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 50,
                                        column: 38
                                    },
                                    end: {
                                        line: 52,
                                        column: 5
                                    }
                                },
                                line: 50
                            },
                            7: {
                                name: "isV2",
                                decl: {
                                    start: {
                                        line: 56,
                                        column: 11
                                    },
                                    end: {
                                        line: 56,
                                        column: 15
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 56,
                                        column: 18
                                    },
                                    end: {
                                        line: 58,
                                        column: 3
                                    }
                                },
                                line: 56
                            },
                            8: {
                                name: "render",
                                decl: {
                                    start: {
                                        line: 60,
                                        column: 11
                                    },
                                    end: {
                                        line: 60,
                                        column: 17
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 60,
                                        column: 27
                                    },
                                    end: {
                                        line: 62,
                                        column: 3
                                    }
                                },
                                line: 60
                            },
                            9: {
                                name: "customMoreRender",
                                decl: {
                                    start: {
                                        line: 69,
                                        column: 11
                                    },
                                    end: {
                                        line: 69,
                                        column: 27
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 69,
                                        column: 30
                                    },
                                    end: {
                                        line: 126,
                                        column: 3
                                    }
                                },
                                line: 69
                            },
                            10: {
                                name: "customMoreInsideOverflow",
                                decl: {
                                    start: {
                                        line: 70,
                                        column: 44
                                    },
                                    end: {
                                        line: 70,
                                        column: 68
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 70,
                                        column: 71
                                    },
                                    end: {
                                        line: 72,
                                        column: 5
                                    }
                                },
                                line: 70
                            },
                            11: {
                                name: "alreadyRendered",
                                decl: {
                                    start: {
                                        line: 74,
                                        column: 35
                                    },
                                    end: {
                                        line: 74,
                                        column: 50
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 74,
                                        column: 62
                                    },
                                    end: {
                                        line: 76,
                                        column: 5
                                    }
                                },
                                line: 74
                            },
                            12: {
                                name: "hide",
                                decl: {
                                    start: {
                                        line: 78,
                                        column: 24
                                    },
                                    end: {
                                        line: 78,
                                        column: 28
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 78,
                                        column: 39
                                    },
                                    end: {
                                        line: 80,
                                        column: 5
                                    }
                                },
                                line: 78
                            },
                            13: {
                                name: "stopHiding",
                                decl: {
                                    start: {
                                        line: 82,
                                        column: 30
                                    },
                                    end: {
                                        line: 82,
                                        column: 40
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 82,
                                        column: 51
                                    },
                                    end: {
                                        line: 84,
                                        column: 5
                                    }
                                },
                                line: 82
                            },
                            14: {
                                name: "customMoreMenu",
                                decl: {
                                    start: {
                                        line: 86,
                                        column: 34
                                    },
                                    end: {
                                        line: 86,
                                        column: 48
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 86,
                                        column: 51
                                    },
                                    end: {
                                        line: 88,
                                        column: 5
                                    }
                                },
                                line: 86
                            },
                            15: {
                                name: "hideCustomMore",
                                decl: {
                                    start: {
                                        line: 90,
                                        column: 34
                                    },
                                    end: {
                                        line: 90,
                                        column: 48
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 90,
                                        column: 51
                                    },
                                    end: {
                                        line: 92,
                                        column: 5
                                    }
                                },
                                line: 90
                            },
                            16: {
                                name: "customMoreChildren",
                                decl: {
                                    start: {
                                        line: 94,
                                        column: 38
                                    },
                                    end: {
                                        line: 94,
                                        column: 56
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 94,
                                        column: 59
                                    },
                                    end: {
                                        line: 96,
                                        column: 5
                                    }
                                },
                                line: 94
                            },
                            17: {
                                name: "markedListElements",
                                decl: {
                                    start: {
                                        line: 98,
                                        column: 38
                                    },
                                    end: {
                                        line: 98,
                                        column: 56
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 98,
                                        column: 77
                                    },
                                    end: {
                                        line: 100,
                                        column: 5
                                    }
                                },
                                line: 98
                            },
                            18: {
                                name: "markWithCustomHandle",
                                decl: {
                                    start: {
                                        line: 102,
                                        column: 40
                                    },
                                    end: {
                                        line: 102,
                                        column: 60
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 102,
                                        column: 85
                                    },
                                    end: {
                                        line: 104,
                                        column: 5
                                    }
                                },
                                line: 102
                            },
                            19: {
                                name: "uhfMoreRender",
                                decl: {
                                    start: {
                                        line: 133,
                                        column: 11
                                    },
                                    end: {
                                        line: 133,
                                        column: 24
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 133,
                                        column: 27
                                    },
                                    end: {
                                        line: 157,
                                        column: 3
                                    }
                                },
                                line: 133
                            },
                            20: {
                                name: "hide",
                                decl: {
                                    start: {
                                        line: 134,
                                        column: 24
                                    },
                                    end: {
                                        line: 134,
                                        column: 28
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 134,
                                        column: 39
                                    },
                                    end: {
                                        line: 136,
                                        column: 5
                                    }
                                },
                                line: 134
                            },
                            21: {
                                name: "getId",
                                decl: {
                                    start: {
                                        line: 138,
                                        column: 25
                                    },
                                    end: {
                                        line: 138,
                                        column: 30
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 138,
                                        column: 38
                                    },
                                    end: {
                                        line: 140,
                                        column: 5
                                    }
                                },
                                line: 138
                            },
                            22: {
                                name: "adjustmentsNeeded",
                                decl: {
                                    start: {
                                        line: 142,
                                        column: 37
                                    },
                                    end: {
                                        line: 142,
                                        column: 54
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 142,
                                        column: 57
                                    },
                                    end: {
                                        line: 144,
                                        column: 5
                                    }
                                },
                                line: 142
                            },
                            23: {
                                name: "isHidden",
                                decl: {
                                    start: {
                                        line: 146,
                                        column: 28
                                    },
                                    end: {
                                        line: 146,
                                        column: 36
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 146,
                                        column: 41
                                    },
                                    end: {
                                        line: 150,
                                        column: 5
                                    }
                                },
                                line: 146
                            },
                            24: {
                                name: "(anonymous_24)",
                                decl: {
                                    start: {
                                        line: 147,
                                        column: 35
                                    },
                                    end: {
                                        line: 147,
                                        column: 36
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 147,
                                        column: 48
                                    },
                                    end: {
                                        line: 149,
                                        column: 7
                                    }
                                },
                                line: 147
                            },
                            25: {
                                name: "init",
                                decl: {
                                    start: {
                                        line: 159,
                                        column: 11
                                    },
                                    end: {
                                        line: 159,
                                        column: 15
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 159,
                                        column: 18
                                    },
                                    end: {
                                        line: 161,
                                        column: 3
                                    }
                                },
                                line: 159
                            }
                        },
                        branchMap: {
                            0: {
                                loc: {
                                    start: {
                                        line: 33,
                                        column: 11
                                    },
                                    end: {
                                        line: 33,
                                        column: 58
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 33,
                                        column: 11
                                    },
                                    end: {
                                        line: 33,
                                        column: 19
                                    }
                                }, {
                                    start: {
                                        line: 33,
                                        column: 23
                                    },
                                    end: {
                                        line: 33,
                                        column: 58
                                    }
                                }],
                                line: 33
                            },
                            1: {
                                loc: {
                                    start: {
                                        line: 38,
                                        column: 4
                                    },
                                    end: {
                                        line: 38,
                                        column: 52
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 38,
                                        column: 4
                                    },
                                    end: {
                                        line: 38,
                                        column: 52
                                    }
                                }, {
                                    start: {
                                        line: 38,
                                        column: 4
                                    },
                                    end: {
                                        line: 38,
                                        column: 52
                                    }
                                }],
                                line: 38
                            },
                            2: {
                                loc: {
                                    start: {
                                        line: 39,
                                        column: 4
                                    },
                                    end: {
                                        line: 39,
                                        column: 40
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 39,
                                        column: 4
                                    },
                                    end: {
                                        line: 39,
                                        column: 40
                                    }
                                }, {
                                    start: {
                                        line: 39,
                                        column: 4
                                    },
                                    end: {
                                        line: 39,
                                        column: 40
                                    }
                                }],
                                line: 39
                            },
                            3: {
                                loc: {
                                    start: {
                                        line: 108,
                                        column: 4
                                    },
                                    end: {
                                        line: 125,
                                        column: 5
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 108,
                                        column: 4
                                    },
                                    end: {
                                        line: 125,
                                        column: 5
                                    }
                                }, {
                                    start: {
                                        line: 108,
                                        column: 4
                                    },
                                    end: {
                                        line: 125,
                                        column: 5
                                    }
                                }],
                                line: 108
                            },
                            4: {
                                loc: {
                                    start: {
                                        line: 112,
                                        column: 6
                                    },
                                    end: {
                                        line: 118,
                                        column: 7
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 112,
                                        column: 6
                                    },
                                    end: {
                                        line: 118,
                                        column: 7
                                    }
                                }, {
                                    start: {
                                        line: 112,
                                        column: 6
                                    },
                                    end: {
                                        line: 118,
                                        column: 7
                                    }
                                }],
                                line: 112
                            },
                            5: {
                                loc: {
                                    start: {
                                        line: 152,
                                        column: 4
                                    },
                                    end: {
                                        line: 156,
                                        column: 5
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 152,
                                        column: 4
                                    },
                                    end: {
                                        line: 156,
                                        column: 5
                                    }
                                }, {
                                    start: {
                                        line: 152,
                                        column: 4
                                    },
                                    end: {
                                        line: 156,
                                        column: 5
                                    }
                                }],
                                line: 152
                            },
                            6: {
                                loc: {
                                    start: {
                                        line: 155,
                                        column: 6
                                    },
                                    end: {
                                        line: 155,
                                        column: 144
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 155,
                                        column: 6
                                    },
                                    end: {
                                        line: 155,
                                        column: 35
                                    }
                                }, {
                                    start: {
                                        line: 155,
                                        column: 39
                                    },
                                    end: {
                                        line: 155,
                                        column: 68
                                    }
                                }, {
                                    start: {
                                        line: 155,
                                        column: 72
                                    },
                                    end: {
                                        line: 155,
                                        column: 122
                                    }
                                }, {
                                    start: {
                                        line: 155,
                                        column: 126
                                    },
                                    end: {
                                        line: 155,
                                        column: 144
                                    }
                                }],
                                line: 155
                            }
                        },
                        s: {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0,
                            6: 0,
                            7: 0,
                            8: 0,
                            9: 0,
                            10: 0,
                            11: 0,
                            12: 0,
                            13: 0,
                            14: 0,
                            15: 0,
                            16: 0,
                            17: 0,
                            18: 0,
                            19: 0,
                            20: 0,
                            21: 0,
                            22: 0,
                            23: 0,
                            24: 0,
                            25: 0,
                            26: 0,
                            27: 0,
                            28: 0,
                            29: 0,
                            30: 0,
                            31: 0,
                            32: 0,
                            33: 0,
                            34: 0,
                            35: 0,
                            36: 0,
                            37: 0,
                            38: 0,
                            39: 0,
                            40: 0,
                            41: 0,
                            42: 0,
                            43: 0,
                            44: 0,
                            45: 0,
                            46: 0,
                            47: 0,
                            48: 0,
                            49: 0,
                            50: 0,
                            51: 0,
                            52: 0,
                            53: 0,
                            54: 0,
                            55: 0,
                            56: 0,
                            57: 0,
                            58: 0,
                            59: 0,
                            60: 0,
                            61: 0,
                            62: 0,
                            63: 0,
                            64: 0,
                            65: 0,
                            66: 0,
                            67: 0,
                            68: 0,
                            69: 0,
                            70: 0,
                            71: 0,
                            72: 0,
                            73: 0
                        },
                        f: {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0,
                            6: 0,
                            7: 0,
                            8: 0,
                            9: 0,
                            10: 0,
                            11: 0,
                            12: 0,
                            13: 0,
                            14: 0,
                            15: 0,
                            16: 0,
                            17: 0,
                            18: 0,
                            19: 0,
                            20: 0,
                            21: 0,
                            22: 0,
                            23: 0,
                            24: 0,
                            25: 0
                        },
                        b: {
                            0: [0, 0],
                            1: [0, 0],
                            2: [0, 0],
                            3: [0, 0],
                            4: [0, 0],
                            5: [0, 0],
                            6: [0, 0, 0, 0]
                        },
                        inputSourceMap: null,
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
                    },
                    i = n.__coverage__ || (n.__coverage__ = {});
                return i[e] && i[e].hash === t ? i[e] : (o.hash = t, i[e] = o)
            }();
            r.s[0]++, o = [t, n(100)], void 0 === (i = function(e) {
                "use strict";

                function t() {
                    return r.f[1]++, r.s[9]++, ['#headerArea  header[role="banner"] .c-uhfh-gcontainer-st'].every(function(e) {
                        return r.f[2]++, r.s[10]++, $(e).length > 0
                    })
                }

                function n() {
                    return r.f[4]++, r.s[12]++, r.f[3]++, r.s[11]++, r.b[0][0]++, t() && (r.b[0][1]++, $(c.meControl).length > 0) ? (r.b[1][0]++, r.s[13]++, u.v2WithMe) : (r.b[1][1]++, r.s[14]++, t() ? (r.b[2][0]++, r.s[15]++, u.v2) : (r.b[2][1]++, r.s[16]++, u.old))
                }

                function o() {
                    r.f[5]++;
                    var e = (r.s[17]++, n());
                    r.s[18]++;
                    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++) r.s[19]++, o[i] = arguments[i];
                    return r.s[20]++, o.some(function(t) {
                        return r.f[6]++, r.s[21]++, t === e
                    })
                }
                r.f[0]++, r.s[1]++, Object.defineProperty(e, "__esModule", {
                    value: !0
                }), r.s[2]++, e.uhfMoreRender = e.customMoreRender = e.uhfVersions = e.uiSelectors = e.isV2 = e.isAnyVersion = e.version = e.init = void 0;
                var i = (r.s[3]++, "uhfHeader"),
                    a = (r.s[4]++, "x-hidden"),
                    s = (r.s[5]++, "js-scom-handle"),
                    l = (r.s[6]++, ["uhfJoin", "guestHostButtonTop", "uhfAccount"]),
                    c = (r.s[7]++, {
                        allMicrosoftMenu: ".c-uhfh-actions .wf-menu",
                        meControl: ".c-uhfh-actions > #meControl",
                        more: "#overflow-menu",
                        moreList: "#overflow-menu-list",
                        customMore: "#uhfMore"
                    }),
                    u = (r.s[8]++, {
                        old: "old",
                        v2: "v2",
                        v2WithMe: "v2-me"
                    });
                r.s[66]++, e.init = function() {
                    r.f[25]++, r.s[65]++, e = n(), r.f[8]++, r.s[23]++, $("html").addClass("".concat(i, "-").concat(e));
                    var e
                }, r.s[67]++, e.version = n, r.s[68]++, e.isAnyVersion = o, r.s[69]++, e.isV2 = function() {
                    return r.f[7]++, r.s[22]++, o(u.v2, u.v2WithMe)
                }, r.s[70]++, e.uiSelectors = c, r.s[71]++, e.uhfVersions = u, r.s[72]++, e.customMoreRender = function() {
                    r.f[9]++, r.s[24]++, r.s[26]++, r.s[28]++, r.s[30]++;
                    var e = function(e) {
                        return r.f[13]++, r.s[31]++, e.removeClass(a)
                    };
                    r.s[32]++;
                    var t = function() {
                        return r.f[14]++, r.s[33]++, $(c.customMore).closest("li")
                    };
                    r.s[34]++, r.s[36]++;
                    var n = function() {
                        return r.f[16]++, r.s[37]++, t().find("li")
                    };
                    r.s[38]++;
                    var o = function(e, t) {
                        return r.f[17]++, r.s[39]++, e.find(t)
                    };
                    r.s[40]++;
                    var i = (r.s[42]++, o($(c.moreList), ".".concat(s)));
                    r.s[43]++, r.f[10]++, r.s[25]++, $(c.customMore).closest("ul".concat(c.moreList)).length > 0 ? (r.b[3][0]++, r.s[44]++, r.f[15]++, r.s[35]++, d = t(), r.f[12]++, r.s[29]++, d.addClass(a), r.s[45]++, f = i, r.f[11]++, r.s[27]++, f.length > 0 ? (r.b[4][0]++, r.s[46]++, e(i)) : (r.b[4][1]++, r.s[47]++, $(c.moreList).append((l = n().clone(), u = s, r.f[18]++, r.s[41]++, l.addClass(u)).get()))) : (r.b[3][1]++, r.s[48]++, i.remove(), r.s[49]++, o($("#uhf-g-nav"), ".".concat(s)).remove(), r.s[50]++, e(t()), r.s[51]++, e(n()));
                    var l, u, f, d
                }, r.s[73]++, e.uhfMoreRender = function() {
                    if (r.f[19]++, r.s[52]++, r.s[54]++, r.s[56]++, r.s[58]++, r.s[61]++, r.f[22]++, r.s[57]++, o(u.v2, u.v2WithMe)) {
                        r.b[5][0]++;
                        var e = (r.s[62]++, $(c.more)),
                            t = (r.s[63]++, e.find("ul li a"));
                        r.s[64]++, r.b[6][0]++, t.length >= 0 && (r.b[6][1]++, t.length <= 2) && (r.b[6][2]++, t.map(function(e, t) {
                            return r.f[21]++, r.s[55]++, t.id
                        }).get().every(function(e) {
                            return r.f[23]++, r.s[59]++, l.some(function(t) {
                                return r.f[24]++, r.s[60]++, t === e
                            })
                        })) && (r.b[6][3]++, n = e, r.f[20]++, r.s[53]++, n.addClass(a))
                    } else r.b[5][1]++;
                    var n
                }
            }.apply(t, o)) || (e.exports = i)
        },
        5: function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        },
        55: function(e, t, n) {
            var o = n(20);
            e.exports = Array.isArray || function(e) {
                return "Array" == o(e)
            }
        },
        6: function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        },
        7: function(e, t, n) {
            var o = n(4),
                i = n(30),
                r = n(26),
                a = Object.defineProperty;
            t.f = n(3) ? Object.defineProperty : function(e, t, n) {
                if (o(e), t = r(t, !0), o(n), i) try {
                    return a(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        },
        8: function(e, t) {
            var n = e.exports = {
                version: "2.6.4"
            };
            "number" == typeof __e && (__e = n)
        },
        9: function(e, t, n) {
            var o = n(0),
                i = n(2),
                r = n(6),
                a = n(12)("src"),
                s = n(34),
                l = ("" + s).split("toString");
            n(8).inspectSource = function(e) {
                return s.call(e)
            }, (e.exports = function(e, t, n, s) {
                var c = "function" == typeof n;
                c && (r(n, "name") || i(n, "name", t)), e[t] !== n && (c && (r(n, a) || i(n, a, e[t] ? "" + e[t] : l.join(String(t)))), e === o ? e[t] = n : s ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)))
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && this[a] || s.call(this)
            })
        }
    })
}), define("apollo/device", ["jquery", "document", "apollo/window", "apollo/navigation"], function(e, t, n, o) {
    "use strict";
    var i = "windows_au_undetected",
        r = "windows_au_none",
        a = n.getUserAgent(),
        s = {
            WINDOWS: "windows",
            WINDOWS_AU_UNDETECTED: i,
            WINDOWS_AU_NONE: r,
            WINDOWS_AU: "windows_au",
            WINDOWS_XP: "windows_xp",
            WINDOWS_VISTA: "windows_vista",
            WINDOWS_7: "windows_7",
            WINDOWS_8: "windows_8",
            MAC: "mac",
            MAC_OS_X_10_9_LOWER: "mac_os_x_10_9_lower",
            MAC_OS_X_10_10_HIGHER: "mac_os_x_10_10_higher",
            LINUX: "linux",
            LINUX_DEBIAN: "linux_debian",
            LINUX_RPM: "linux_rpm",
            ANDROID: "android",
            IOS: "ios",
            BLACKBERRY: "blackberry",
            MOBILE: "mobile",
            DESKTOP: "desktop",
            IPOD: "ipod",
            IPAD: "ipad",
            IPHONE: "iphone",
            getPlatform: function() {
                var e = "unknown";
                return a.match(/windows/i) ? e = "windows" : a.match(/macintosh/i) ? e = "mac" : a.match(/android/i) ? e = "android" : a.match(/linux/i) ? e = "linux" : a.match(/iphone|ipad|ipod/i) ? e = "ios" : a.match(/blackberry/i) && (e = "blackberry"), e
            },
            getIosPlatform: function() {
                var e = "unknown";
                return a.match(/iphone/i) ? e = "iphone" : a.match(/ipad/i) ? e = "ipad" : a.match(/ipod/i) && (e = "ipod"), e
            },
            getBrowser: function() {
                var e = "unknown";
                return a.match(/CriOS/i) ? e = "chrome" : a.match(/safari/i) && (e = "safari"), e
            },
            getDevice: function() {
                return this.isMobilePlatform() ? "mobile" : "desktop"
            },
            isMobilePlatform: function() {
                var t = this.getPlatform(),
                    n = !1;
                return (e.inArray(t, ["android", "ios", "blackberry"]) > -1 || "windows" === t && a.match(/phone|iemobile/i)) && (n = !0), n
            },
            isDesktopPlatform: function() {
                return e.inArray(s.getPlatform(), [s.WINDOWS, s.MAC, s.LINUX]) > -1
            },
            getWindowsSpecificPlatform: function() {
                var e, n = (e = a, e.indexOf("Windows NT 5.1") > -1 || e.indexOf("Windows NT 5.2") > -1 ? "windows_xp" : e.indexOf("Windows NT 6.0") > -1 ? "windows_vista" : e.indexOf("Windows NT 6.1") > -1 ? "windows_7" : e.indexOf("Windows NT 6.2") > -1 || e.indexOf("Windows NT 6.3") > -1 ? "windows_8" : void 0);
                if (void 0 !== n) return n;
                if (o.isChrome()) {
                    var s = t.createElement("canvas").getContext("2d");
                    s.font = "64px Segoe UI Emoji", s.measureText("🐱‍👤").width, s.measureText("👨‍⚕").width;
                    var l = s.measureText("🧛🏻").width;
                    return -1 === a.indexOf("Windows NT") ? i : l <= 90 ? "windows_au" : r
                }
                if (o.isEdge()) {
                    var c = new RegExp("edge/([0-9]+)", "gi").exec(a);
                    return null === c || 2 !== c.length ? i : parseInt(c[1], 10) >= 17.17 ? "windows_au" : r
                }
                return i
            },
            getLinuxSpecificPlatform: function() {
                if ("linux" === this.getPlatform()) return -1 != a.indexOf("Debian") || -1 != a.indexOf("Ubuntu") ? "linux_debian" : "linux_rpm"
            },
            getMacOsSpecificPlatform: function() {
                if ("mac" === this.getPlatform()) return (e = a).match(/(Mac OS X 10[_|\.][0-9]([_|\.]|\D))/) ? "mac_os_x_10_9_lower" : e.match(/(Mac OS X 10[_|\.]10)/) ? "mac_os_x_10_10_higher" : void 0;
                var e
            }
        };
    return s
}), define("artemis/common/to-boolean", [], function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: o
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (t.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var i in e) t.d(o, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return o
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 381)
    }({
        0: function(e, t) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        },
        10: function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        },
        12: function(e, t) {
            var n = 0,
                o = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
            }
        },
        13: function(e, t, n) {
            var o = n(8),
                i = n(0),
                r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
            (e.exports = function(e, t) {
                return r[e] || (r[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: o.version,
                mode: n(18) ? "pure" : "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            })
        },
        16: function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        18: function(e, t) {
            e.exports = !1
        },
        2: function(e, t, n) {
            var o = n(7),
                i = n(16);
            e.exports = n(3) ? function(e, t, n) {
                return o.f(e, t, i(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        },
        23: function(e, t, n) {
            var o = n(5),
                i = n(0).document,
                r = o(i) && o(i.createElement);
            e.exports = function(e) {
                return r ? i.createElement(e) : {}
            }
        },
        26: function(e, t, n) {
            var o = n(5);
            e.exports = function(e, t) {
                if (!o(e)) return e;
                var n, i;
                if (t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
                if ("function" == typeof(n = e.valueOf) && !o(i = n.call(e))) return i;
                if (!t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        3: function(e, t, n) {
            e.exports = !n(10)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        30: function(e, t, n) {
            e.exports = !n(3) && !n(10)(function() {
                return 7 != Object.defineProperty(n(23)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        34: function(e, t, n) {
            e.exports = n(13)("native-function-to-string", Function.toString)
        },
        381: function(e, t, n) {
            var o, i, r = function() {
                var e = "D:\\a\\_work\\15\\s\\src\\js\\artemis\\common\\to-boolean.js",
                    t = "136304e099318a0e2fb7c68aee76debb17d30afb",
                    n = new(0, function() {}.constructor)("return this")(),
                    o = {
                        path: "D:\\a\\_work\\15\\s\\src\\js\\artemis\\common\\to-boolean.js",
                        statementMap: {
                            0: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 39,
                                    column: 3
                                }
                            },
                            1: {
                                start: {
                                    line: 4,
                                    column: 2
                                },
                                end: {
                                    line: 6,
                                    column: 5
                                }
                            },
                            2: {
                                start: {
                                    line: 7,
                                    column: 2
                                },
                                end: {
                                    line: 7,
                                    column: 32
                                }
                            },
                            3: {
                                start: {
                                    line: 14,
                                    column: 19
                                },
                                end: {
                                    line: 19,
                                    column: 3
                                }
                            },
                            4: {
                                start: {
                                    line: 15,
                                    column: 17
                                },
                                end: {
                                    line: 17,
                                    column: 6
                                }
                            },
                            5: {
                                start: {
                                    line: 16,
                                    column: 6
                                },
                                end: {
                                    line: 16,
                                    column: 59
                                }
                            },
                            6: {
                                start: {
                                    line: 18,
                                    column: 4
                                },
                                end: {
                                    line: 18,
                                    column: 27
                                }
                            },
                            7: {
                                start: {
                                    line: 27,
                                    column: 18
                                },
                                end: {
                                    line: 36,
                                    column: 3
                                }
                            },
                            8: {
                                start: {
                                    line: 28,
                                    column: 4
                                },
                                end: {
                                    line: 28,
                                    column: 51
                                }
                            },
                            9: {
                                start: {
                                    line: 28,
                                    column: 37
                                },
                                end: {
                                    line: 28,
                                    column: 51
                                }
                            },
                            10: {
                                start: {
                                    line: 29,
                                    column: 20
                                },
                                end: {
                                    line: 29,
                                    column: 33
                                }
                            },
                            11: {
                                start: {
                                    line: 30,
                                    column: 21
                                },
                                end: {
                                    line: 30,
                                    column: 35
                                }
                            },
                            12: {
                                start: {
                                    line: 31,
                                    column: 4
                                },
                                end: {
                                    line: 31,
                                    column: 79
                                }
                            },
                            13: {
                                start: {
                                    line: 31,
                                    column: 66
                                },
                                end: {
                                    line: 31,
                                    column: 79
                                }
                            },
                            14: {
                                start: {
                                    line: 32,
                                    column: 4
                                },
                                end: {
                                    line: 32,
                                    column: 51
                                }
                            },
                            15: {
                                start: {
                                    line: 32,
                                    column: 39
                                },
                                end: {
                                    line: 32,
                                    column: 51
                                }
                            },
                            16: {
                                start: {
                                    line: 33,
                                    column: 4
                                },
                                end: {
                                    line: 33,
                                    column: 53
                                }
                            },
                            17: {
                                start: {
                                    line: 33,
                                    column: 40
                                },
                                end: {
                                    line: 33,
                                    column: 53
                                }
                            },
                            18: {
                                start: {
                                    line: 35,
                                    column: 4
                                },
                                end: {
                                    line: 35,
                                    column: 17
                                }
                            },
                            19: {
                                start: {
                                    line: 38,
                                    column: 2
                                },
                                end: {
                                    line: 38,
                                    column: 32
                                }
                            }
                        },
                        fnMap: {
                            0: {
                                name: "(anonymous_0)",
                                decl: {
                                    start: {
                                        line: 1,
                                        column: 98
                                    },
                                    end: {
                                        line: 1,
                                        column: 99
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 117
                                    },
                                    end: {
                                        line: 39,
                                        column: 1
                                    }
                                },
                                line: 1
                            },
                            1: {
                                name: "_boolMatch",
                                decl: {
                                    start: {
                                        line: 14,
                                        column: 28
                                    },
                                    end: {
                                        line: 14,
                                        column: 38
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 14,
                                        column: 57
                                    },
                                    end: {
                                        line: 19,
                                        column: 3
                                    }
                                },
                                line: 14
                            },
                            2: {
                                name: "(anonymous_2)",
                                decl: {
                                    start: {
                                        line: 15,
                                        column: 31
                                    },
                                    end: {
                                        line: 15,
                                        column: 32
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 15,
                                        column: 53
                                    },
                                    end: {
                                        line: 17,
                                        column: 5
                                    }
                                },
                                line: 15
                            },
                            3: {
                                name: "toBoolean",
                                decl: {
                                    start: {
                                        line: 27,
                                        column: 27
                                    },
                                    end: {
                                        line: 27,
                                        column: 36
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 27,
                                        column: 45
                                    },
                                    end: {
                                        line: 36,
                                        column: 3
                                    }
                                },
                                line: 27
                            }
                        },
                        branchMap: {
                            0: {
                                loc: {
                                    start: {
                                        line: 18,
                                        column: 11
                                    },
                                    end: {
                                        line: 18,
                                        column: 26
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 18,
                                        column: 11
                                    },
                                    end: {
                                        line: 18,
                                        column: 17
                                    }
                                }, {
                                    start: {
                                        line: 18,
                                        column: 21
                                    },
                                    end: {
                                        line: 18,
                                        column: 26
                                    }
                                }],
                                line: 18
                            },
                            1: {
                                loc: {
                                    start: {
                                        line: 28,
                                        column: 4
                                    },
                                    end: {
                                        line: 28,
                                        column: 51
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 28,
                                        column: 4
                                    },
                                    end: {
                                        line: 28,
                                        column: 51
                                    }
                                }, {
                                    start: {
                                        line: 28,
                                        column: 4
                                    },
                                    end: {
                                        line: 28,
                                        column: 51
                                    }
                                }],
                                line: 28
                            },
                            2: {
                                loc: {
                                    start: {
                                        line: 31,
                                        column: 4
                                    },
                                    end: {
                                        line: 31,
                                        column: 79
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 31,
                                        column: 4
                                    },
                                    end: {
                                        line: 31,
                                        column: 79
                                    }
                                }, {
                                    start: {
                                        line: 31,
                                        column: 4
                                    },
                                    end: {
                                        line: 31,
                                        column: 79
                                    }
                                }],
                                line: 31
                            },
                            3: {
                                loc: {
                                    start: {
                                        line: 31,
                                        column: 8
                                    },
                                    end: {
                                        line: 31,
                                        column: 64
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 31,
                                        column: 8
                                    },
                                    end: {
                                        line: 31,
                                        column: 34
                                    }
                                }, {
                                    start: {
                                        line: 31,
                                        column: 38
                                    },
                                    end: {
                                        line: 31,
                                        column: 64
                                    }
                                }],
                                line: 31
                            },
                            4: {
                                loc: {
                                    start: {
                                        line: 32,
                                        column: 4
                                    },
                                    end: {
                                        line: 32,
                                        column: 51
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 32,
                                        column: 4
                                    },
                                    end: {
                                        line: 32,
                                        column: 51
                                    }
                                }, {
                                    start: {
                                        line: 32,
                                        column: 4
                                    },
                                    end: {
                                        line: 32,
                                        column: 51
                                    }
                                }],
                                line: 32
                            },
                            5: {
                                loc: {
                                    start: {
                                        line: 33,
                                        column: 4
                                    },
                                    end: {
                                        line: 33,
                                        column: 53
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 33,
                                        column: 4
                                    },
                                    end: {
                                        line: 33,
                                        column: 53
                                    }
                                }, {
                                    start: {
                                        line: 33,
                                        column: 4
                                    },
                                    end: {
                                        line: 33,
                                        column: 53
                                    }
                                }],
                                line: 33
                            }
                        },
                        s: {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0,
                            6: 0,
                            7: 0,
                            8: 0,
                            9: 0,
                            10: 0,
                            11: 0,
                            12: 0,
                            13: 0,
                            14: 0,
                            15: 0,
                            16: 0,
                            17: 0,
                            18: 0,
                            19: 0
                        },
                        f: {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0
                        },
                        b: {
                            0: [0, 0],
                            1: [0, 0],
                            2: [0, 0],
                            3: [0, 0],
                            4: [0, 0],
                            5: [0, 0]
                        },
                        inputSourceMap: null,
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
                    },
                    i = n.__coverage__ || (n.__coverage__ = {});
                return i[e] && i[e].hash === t ? i[e] : (o.hash = t, i[e] = o)
            }();
            r.s[0]++, o = [t, n(77), n(79)], void 0 === (i = function(e) {
                "use strict";
                r.f[0]++, r.s[1]++, Object.defineProperty(e, "__esModule", {
                    value: !0
                }), r.s[2]++, e.toBoolean = void 0, r.s[3]++;
                var t = function(e, t) {
                    r.f[1]++;
                    var n = (r.s[4]++, t.some(function(t) {
                        return r.f[2]++, r.s[5]++, e.toString().toLowerCase() == t
                    }));
                    return r.s[6]++, r.b[0][0]++, n || (r.b[0][1]++, !1)
                };
                r.s[7]++, r.s[19]++, e.toBoolean = function(e) {
                    if (r.f[3]++, r.s[8]++, "boolean" == typeof e) return r.b[1][0]++, r.s[9]++, e;
                    r.b[1][1]++;
                    var n = (r.s[10]++, ["true", "1"]),
                        o = (r.s[11]++, ["false", "0"]);
                    return r.s[12]++, r.b[3][0]++, "string" != typeof e && (r.b[3][1]++, "number" != typeof e) ? (r.b[2][0]++, r.s[13]++, !1) : (r.b[2][1]++, r.s[14]++, t(e, n) ? (r.b[4][0]++, r.s[15]++, !0) : (r.b[4][1]++, r.s[16]++, t(e, o) ? (r.b[5][0]++, r.s[17]++, !1) : (r.b[5][1]++, r.s[18]++, !1)))
                }
            }.apply(t, o)) || (e.exports = i)
        },
        4: function(e, t, n) {
            var o = n(5);
            e.exports = function(e) {
                if (!o(e)) throw TypeError(e + " is not an object!");
                return e
            }
        },
        5: function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        },
        50: function(e, t, n) {
            "use strict";
            var o = n(4);
            e.exports = function() {
                var e = o(this),
                    t = "";
                return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
            }
        },
        6: function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        },
        7: function(e, t, n) {
            var o = n(4),
                i = n(30),
                r = n(26),
                a = Object.defineProperty;
            t.f = n(3) ? Object.defineProperty : function(e, t, n) {
                if (o(e), t = r(t, !0), o(n), i) try {
                    return a(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        },
        77: function(e, t, n) {
            "use strict";
            n(78);
            var o = n(4),
                i = n(50),
                r = n(3),
                a = /./.toString,
                s = function(e) {
                    n(9)(RegExp.prototype, "toString", e, !0)
                };
            n(10)(function() {
                return "/a/b" != a.call({
                    source: "a",
                    flags: "b"
                })
            }) ? s(function() {
                var e = o(this);
                return "/".concat(e.source, "/", "flags" in e ? e.flags : !r && e instanceof RegExp ? i.call(e) : void 0)
            }) : "toString" != a.name && s(function() {
                return a.call(this)
            })
        },
        78: function(e, t, n) {
            n(3) && "g" != /./g.flags && n(7).f(RegExp.prototype, "flags", {
                configurable: !0,
                get: n(50)
            })
        },
        79: function(e, t, n) {
            var o = Date.prototype,
                i = o.toString,
                r = o.getTime;
            new Date(NaN) + "" != "Invalid Date" && n(9)(o, "toString", function() {
                var e = r.call(this);
                return e == e ? i.call(this) : "Invalid Date"
            })
        },
        8: function(e, t) {
            var n = e.exports = {
                version: "2.6.4"
            };
            "number" == typeof __e && (__e = n)
        },
        9: function(e, t, n) {
            var o = n(0),
                i = n(2),
                r = n(6),
                a = n(12)("src"),
                s = n(34),
                l = ("" + s).split("toString");
            n(8).inspectSource = function(e) {
                return s.call(e)
            }, (e.exports = function(e, t, n, s) {
                var c = "function" == typeof n;
                c && (r(n, "name") || i(n, "name", t)), e[t] !== n && (c && (r(n, a) || i(n, a, e[t] ? "" + e[t] : l.join(String(t)))), e === o ? e[t] = n : s ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)))
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && this[a] || s.call(this)
            })
        }
    })
}), define("jquery", [], function() {
    "use strict";
    return window.jQuery || window.$
}), define("domReady", [], function() {
    "use strict";

    function e() {
        a || (a = !0, i && clearInterval(i), function() {
            var e = l;
            a && e.length && (l = [], function(e) {
                var t;
                for (t = 0; t < e.length; t += 1) e[t](s)
            }(e))
        }())
    }

    function t(e) {
        return a ? e(s) : l.push(e), t
    }
    var n, o, i, r = "undefined" != typeof window && window.document,
        a = !r,
        s = r ? document : null,
        l = [];
    if (r) {
        if (document.addEventListener) document.addEventListener("DOMContentLoaded", e, !1), window.addEventListener("load", e, !1);
        else if (window.attachEvent) {
            window.attachEvent("onload", e), o = document.createElement("div");
            try {
                n = null === window.frameElement
            } catch (e) {}
            o.doScroll && n && window.external && (i = setInterval(function() {
                try {
                    o.doScroll(), e()
                } catch (e) {}
            }, 30))
        }
        "complete" === document.readyState && e()
    }
    return t.version = "2.0.1", t.load = function(e, n, o, i) {
        i.isBuild ? o(null) : t(o)
    }, t
}), define("apollo/mediator", [], function() {
    "use strict";
    var e = function(e) {
            var t = this;
            this.context.jQElement.on(e, function() {
                Array.prototype.unshift.call(arguments, e), t.trigger.apply(t, arguments)
            })
        },
        t = function(e) {
            this.subscribers = {}, this.context = e
        };
    return t.prototype.on = function(t, n) {
        for (var o = t.split(" "), i = 0; i < o.length; ++i) {
            var r = o[i];
            this.context.jQElement && !this.hasEvent(r) && e.call(this, r), this.subscribers[r] = this.subscribers[r] || [], this.subscribers[r].push(n)
        }
        return this.context
    }, t.prototype.off = function(e) {
        for (var t = e.split(" "), n = 0; n < t.length; ++n) {
            var o = t[n];
            this.hasEvent(o) && delete this.subscribers[o]
        }
        return this.context.jQElement && this.context.jQElement.off.apply(this.context.jQElement, arguments), this.context
    }, t.prototype.trigger = function(e) {
        var t = e.split(" ");
        Array.prototype.shift.call(arguments);
        for (var n = 0; n < t.length; ++n) {
            var o = t[n],
                i = this.subscribers[o];
            if (i)
                for (var r = 0; r < i.length; ++r) i[r].apply(this.context, arguments)
        }
        return this.context
    }, t.prototype.hasEvent = function(e) {
        return e in this.subscribers
    }, {
        create: function(e) {
            if (null !== e && void 0 !== e || (e = {}), "object" != typeof e && "function" != typeof e) throw new Error("Wrong argument passed. Should be object or empty.");
            var n = new t(e);
            return e.on = n.on.bind(n), e.off = n.off.bind(n), e.trigger = n.trigger.bind(n), e
        },
        asReplay: function(e, n) {
            if ("object" != typeof e) throw new Error("Wrong argument passed: mediator. Should be object.");
            (null === n || void 0 === n || n < 1) && (n = 1), null !== e && void 0 !== e || (e = new t({})), e.bufferSize = n, e.events = [];
            var o = e.on,
                i = e.trigger;
            return e.on = function(e, t) {
                o(e, t), this.events[e] = this.events[e] || [], this.events[e].forEach(function(e) {
                    t(e)
                })
            }, e.trigger = function(e) {
                this.events[e] = this.events[e] || [];
                var t = Array.prototype.slice.call(arguments, 1);
                this.events[e] = [].concat(this.events[e]).concat(t), this.events[e].length > this.bufferSize && (this.events[e] = this.events[e].slice(this.events[e].length - this.bufferSize)), this.events[e].forEach(function(t) {
                    i(e, t)
                })
            }, e
        }
    }
}), define("apollo/keycodes", [], function() {
    "use strict";
    var e = {
        LEFT_ARROW: 37,
        RIGHT_ARROW: 39,
        UP_ARROW: 38,
        DOWN_ARROW: 40,
        ENTER: 13,
        SPACEBAR: 32,
        ESCAPE: 27,
        TAB: 9,
        SHIFT_TAB: -9,
        ALT: 18,
        X: 88,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        BACKSPACE: 8
    };
    return e.isUpOrDownArrow = function(t) {
        return t === e.DOWN_ARROW || t === e.UP_ARROW
    }, e.isLeftOrRightArrow = function(t) {
        return t === e.LEFT_ARROW || t === e.RIGHT_ARROW
    }, e.isArrow = function(t) {
        return e.isUpOrDownArrow(t) || e.isLeftOrRightArrow(t)
    }, e.isPageUpOrPageDown = function(t) {
        return t === e.PAGE_UP || t === e.PAGE_DOWN
    }, e
}), define("apollo/input.wheel", [], function() {
    "use strict";
    var e = {};
    return e.EVENT_NAMES = "wheel mousewheel DOMMouseScroll", e.getDelta = function(e) {
        return "DOMMouseScroll" === e.type ? -40 * e.originalEvent.detail : e.originalEvent.wheelDelta
    }, e.isDownward = function(e) {
        return this.getDelta(e) < 0
    }, e.isUpward = function(e) {
        return this.getDelta(e) > 0
    }, e
}), define("window", [], function() {
    "use strict";
    return window
}), define("document", [], function() {
    "use strict";
    return document
}), define("jqueryvisible", ["jquery"], function(e) {
    var t = window.jQuery || e;
    t.fn.visible = function(e, n, o) {
        var i = t(this).eq(0),
            r = i.get(0),
            a = t(window),
            s = a.scrollTop(),
            l = s + a.height(),
            c = a.scrollLeft(),
            u = c + a.width(),
            f = i.offset().top,
            d = f + i.height(),
            p = i.offset().left,
            m = p + i.width(),
            h = !0 === e ? d : f,
            v = !0 === e ? f : d,
            g = !0 === e ? m : p,
            y = !0 === e ? p : m,
            _ = !0 !== n || r.offsetWidth * r.offsetHeight;
        return "both" === (o = o || "both") ? !!_ && v <= l && h >= s && y <= u && g >= c : "vertical" === o ? !!_ && v <= l && h >= s : "horizontal" === o ? !!_ && y <= u && g >= c : void 0
    }
}), define("apollo/scroll", ["apollo/mediator", "apollo/keycodes", "apollo/input.wheel", "jquery", "window", "document", "domReady!", "jqueryvisible"], function(e, t, n, o, i, r) {
    "use strict";
    var a, s, l, c, u, f = n.EVENT_NAMES + " keydown",
        d = 0,
        p = 0,
        m = 0,
        h = function() {
            clearTimeout(l), clearTimeout(c), clearTimeout(u), m = 0, p = 0, d = 0, [].unshift.call(arguments, y.SCROLL), y.trigger.apply(y, arguments)
        },
        v = function() {
            var e = y.offsetY();
            e > a ? y.jQElement.trigger(y.SCROLL_DOWNWARD, [e]) : e < a && y.jQElement.trigger(y.SCROLL_UPWARD, [e]), a = e
        },
        g = function(e) {
            var t = this.offsetY();
            return e && e.offset && (t += e.offset), t
        },
        y = function(e) {
            return new _(e)
        };
    y.SCROLL_UPWARD = "upward", y.SCROLL_DOWNWARD = "downward", y.SCROLL_ANY_DIRECTION = y.SCROLL_UPWARD + " " + y.SCROLL_DOWNWARD, y.SCROLL = "scroll", y.STAGE = "stage", y.UNSTAGE = "unstage", y.config = {
        wheel: {
            timeout: 250,
            cumulativeThreshold: 240
        },
        bar: {
            timeout: 100
        },
        key: {
            timeout: 250,
            cumulativeThreshold: 2
        }
    }, y.offsetX = function() {
        return this.jQElement.scrollLeft()
    }, y.offsetY = function() {
        return this.jQElement.scrollTop()
    };
    var _ = function(t) {
        this.jQElement = o(t), this.staged = this.jQElement.visible(!0);
        var n = function() {
            var e = this.jQElement.visible(!0);
            !this.staged && e ? this.jQElement.trigger(y.STAGE) : this.staged && !e && this.jQElement.trigger(y.UNSTAGE), this.staged = e
        }.bind(this);
        y.on(y.SCROLL_ANY_DIRECTION, n), y.jQElement.on("resize", n), e.create(this)
    };
    return _.prototype.to = function(e) {
            i.scrollTo(0, g.call(this, e))
        }, _.prototype.smoothTo = function(e) {
            var t = !!e,
                n = g.call(this, e),
                o = this,
                r = Math.abs(y.offsetY() - n) / 4;
            r < 400 && (r = 400), y.scrollTopJQElement.animate({
                scrollTop: n
            }, r).promise().then(function() {
                i.scrollTo(0, n), t && e.complete && e.complete.call(o)
            })
        }, _.prototype.offsetY = function() {
            return this.jQElement.offset().top
        },
        function() {
            y.ScrollTarget = _, e.create(y), y.scrollTopJQElement = o(function() {
                var e = "body";
                if ("CSS1Compat" === r.compatMode) {
                    var t = r.documentElement,
                        n = r.body,
                        o = i.pageYOffset || n.scrollTop || t.scrollTop,
                        a = o + 1;
                    i.scrollTo(0, a), t.scrollTop === a && (e = "html"), i.scrollTo(0, o)
                }
                return e
            }()), y.jQElement = o(i), y.on(y.SCROLL, v), y.jQElement.on(y.SCROLL, v), a = y.offsetY();
            var g;
            y.jQElement.on(f, function(e) {
                "keydown" === e.type && t.isUpOrDownArrow(e.which) ? function(e) {
                    clearTimeout(u);
                    var t = 0 == m++,
                        n = e.which;
                    t ? u = setTimeout(h, y.config.key.timeout) : s !== n ? m = 0 : m >= y.config.key.cumulativeThreshold ? h() : u = setTimeout(h, y.config.key.timeout), s = n
                }(e) : n.EVENT_NAMES.indexOf(e.type) > -1 && function(e) {
                    clearTimeout(c);
                    var t = Math.abs(n.getDelta(e));
                    (p += t) >= y.config.wheel.cumulativeThreshold ? h() : c = setTimeout(h, y.config.wheel.timeout)
                }(e), g = e
            }).on("scroll", function(e) {
                g && (t = g, f.indexOf(t.type) > -1) || 0 == d++ && (l = setTimeout(h, y.config.bar.timeout)), g = e;
                var t
            })
        }(), y
}), define("Object", [], function() {
    "use strict";
    return Object
}), define("apollo/util", ["Object"], function(e) {
    "use strict";
    return e.create || (e.create = function() {
        function e() {}
        return function(t) {
            if (1 !== arguments.length) throw new Error("Object.create implementation only accepts one parameter.");
            return e.prototype = t, new e
        }
    }()), {
        convertObjectToString: function(e, t, n) {
            var o, i, r = "",
                a = [];
            for (o in e) e.hasOwnProperty(o) && a.push(o);
            for (i = 0; i < a.length; i++) "" !== r && (r += t), r += a[i] + n + escape(e[a[i]]);
            return r
        },
        convertStringToObject: function(e, t, n) {
            var o, i, r = e ? e.split(t) : [],
                a = {};
            for (o = 0; o < r.length; o++) i = r[o].split(n), a[i[0]] = unescape(i[1]);
            return a
        },
        refreshPseudoElements: function(e) {
            if (document.all && !document.addEventListener) {
                var t = $("<style>:before, :after { content:none !important }</style>");
                $("head").append(t), setTimeout(function() {
                    t.remove(), e && e()
                }, 0)
            }
        }
    }
}), define("apollo/document", ["window", "document", "jquery", "domReady!"], function(e, t, n) {
    "use strict";
    return {
        body: t.body,
        PROD_ENVIRONMENT: "prod",
        DEV_ENVIRONMMENT: "dev",
        getLocationHref: function() {
            return e.location.href
        },
        setLocationHref: function(t) {
            e.location.href = t
        },
        getReferrer: function() {
            return t.referrer
        },
        getLanguage: function() {
            return t.documentElement.lang || "en"
        },
        getRegion: function() {
            return n("html").data("region")
        },
        isSecure: function() {
            return "https:" === t.location.protocol
        },
        cookieExists: function(e) {
            return t.cookie.indexOf(e) >= 0
        },
        getCookies: function() {
            return t.cookie.split(";")
        },
        setCookie: function(e) {
            t.cookie = e
        },
        getEnvironment: function() {
            return -1 !== e.location.href.indexOf(".skype.com") ? "prod" : "dev"
        },
        getDomainName: function() {
            var t = e.location.hostname.split(".");
            return t.length >= 2 && (t = t.slice(t.length - 2, t.length)), t.join(".")
        },
        injectStyle: function(e, o) {
            var i = t.getElementsByTagName("head")[0],
                r = t.createElement("link");
            r.rel = "stylesheet", r.type = "text/css", r.href = e, r.media = "all", i.appendChild(r), o && n(t.createElement("img")).attr("src", e).on("error", function() {
                o(), n(this).remove()
            })
        },
        injectScript: function(e, n) {
            var o = t.getElementsByTagName("head")[0],
                i = t.createElement("script");
            i.type = "text/javascript", n && (i.async = !0, i.onload = n), i.src = e, o.appendChild(i)
        },
        jQElement: n(t)
    }
}), define("apollo/cookie", ["apollo/util", "apollo/document", "jquery"], function(e, t, n) {
    "use strict";
    var o = {},
        i = function(e) {
            for (var o = "", i = e + "=", r = t.getCookies(), a = 0; a < r.length; a++) {
                var s = n.trim(r[a]);
                0 === s.indexOf(i) && (o = s.substring(i.length, s.length))
            }
            return o
        },
        r = function(e, t) {
            this.name = e, o[this.name] = t
        };
    r.prototype.store = function(i) {
        (function(i) {
            var r = this.name + "=" + function(t) {
                var i = t in o ? o[t] : "";
                return "object" === n.type(i) && (i = e.convertObjectToString(i, ":", "=")), i
            }(this.name);
            i && (r += function(e) {
                var t = "";
                return e.expiry && (t += "; expires=" + new Date((new Date).getTime() + e.expiry).toGMTString()), e.path && (t += "; path=" + e.path), e.domain && (t += "; domain=" + e.domain), e.secure && (t += "; secure"), t
            }(i)), t.setCookie(r)
        }).call(this, i)
    }, r.prototype.remove = function(e) {
        var t = n.extend({}, e, {
            expiry: -1
        });
        delete o[this.name], this.store(t)
    };
    var a = function() {
        r.apply(this, arguments), o[this.name] = o[this.name] || {}
    };
    (a.prototype = Object.create(r.prototype)).set = function(e, t) {
        void 0 === t && (t = ""), o[this.name][e] = t
    }, a.prototype.get = function(e) {
        return o[this.name][e]
    }, a.prototype.isEmpty = function() {
        return n.isEmptyObject(o[this.name])
    };
    var s = function() {
        r.apply(this, arguments)
    };
    (s.prototype = Object.create(r.prototype)).isEmpty = function() {
        return 0 === o[this.name].length
    }, s.prototype.set = function(e) {
        o[this.name] = e
    }, s.prototype.get = function() {
        return o[this.name]
    };
    var l = {};
    return l.exists = function(e) {
        return t.cookieExists(e)
    }, l.get = function(t) {
        var n;
        if (this.exists(t)) {
            var o = i(t),
                r = e.convertStringToObject(o, ":", "=");
            n = l.create(t, r)
        }
        return n
    }, l.getSingleValue = function(e) {
        var t;
        if (this.exists(e)) {
            var n = i(e);
            t = this.createSingleValue(e, n)
        }
        return t
    }, l.create = function(e, t) {
        return new a(e, t)
    }, l.createSingleValue = function(e, t) {
        return new s(e, t)
    }, l
}), define("apollo/window", ["jquery", "window", "apollo/mediator"], function(e, t, n) {
    "use strict";
    var o = {};
    return o.jQElement = e(t), n.create(o), o.getQuery = function() {
        return t.location.search
    }, o.getQueryParameterValue = function(e) {
        var t = o.getQuery();
        if (t && e) {
            if ("?" === t[0] && (t = t.substr(1)), !t) return;
            for (var n = t.split("&"), i = 0; i < n.length; i++) {
                var r = n[i].split("=");
                if (r[0] === e) return r.length > 1 ? r[1] : ""
            }
        }
    }, o.hasQueryParameterWithValue = function(e, t) {
        var n = o.getQueryParameterValue(e);
        return void 0 !== n && n === t
    }, o.hasQuery = function(e) {
        return void 0 !== o.getQueryParameterValue(e)
    }, o.getHeight = function() {
        return t.innerHeight || o.jQElement.height()
    }, o.getWidth = function() {
        return t.innerWidth || o.jQElement.width()
    }, o.open = function() {
        return t.open.apply(t, arguments)
    }, o.redirect = function(e) {
        t.location.href = e
    }, o.isLongerThanViewport = function(e) {
        return e > o.jQElement.height()
    }, o.getURL = function() {
        return t.location.href
    }, o.getPath = function() {
        return t.location.pathname
    }, o.getHash = function() {
        return t.location.hash
    }, o.getProtocol = function() {
        return t.location.protocol
    }, o.setHash = function(e) {
        t.location.hash = e
    }, o.getUserAgent = function() {
        return t.navigator.userAgent
    }, o.getSession = function() {
        return t.sessionStorage
    }, o.clearHash = function() {
        this.setHash("")
    }, o.injectQueryParamsToUrl = function(t, n) {
        if (void 0 === n && (n = o.getURL()), "string" == typeof t && t && (t = [t]), !(t instanceof Array) || 0 === t.length) return n;
        var i = "",
            r = n.indexOf("#"),
            a = n.indexOf("?");
        return e.each(t, function(e, t) {
            var n = o.getQueryParameterValue(t);
            void 0 !== n && (i += (0 === e && -1 === a ? "?" : "&") + t + ("" === n ? "" : "=" + n))
        }), "" === i ? n : -1 === r ? n + i : n.substring(0, r) + i + n.substring(r)
    }, o.onEvent = function(e, n) {
        t[e] = n
    }, o.getScrollWidth = function() {
        var n;
        if (navigator.userAgent.match(/MSIE 8/)) n = 17;
        else {
            var o = e("html").css("overflow-y"),
                i = document.body.scroll,
                r = e("html");
            r.css("overflow-y", "scroll"), document.body.scroll = "yes", n = (t.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) - e(t).width(), o && r.css("overflow-y", o), i && (document.body.scroll = i)
        }
        return n
    }, o.getX = function() {
        return void 0 !== t.pageXOffset ? t.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft
    }, o.getY = function() {
        return void 0 !== t.pageYOffset ? t.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
    }, o.scrollImmediate = function(e, n) {
        return t.scrollTo(e, n)
    }, o
}), define("apollo/responsive", ["apollo/mediator", "apollo/window", "jquery"], function(e, t, n) {
    "use strict";
    var o, i, r, a, s = {
        jQElement: n("body")
    };
    e.create(s);
    var l = function(e, t) {
            var o = n.extend({
                name: e
            }, t);
            s.trigger(e, o)
        },
        c = function() {
            f(i), d(o), l("responsive.change", {
                previous: i,
                current: o,
                size: {
                    width: r.width(),
                    height: r.height()
                }
            })
        },
        u = function() {
            l("responsive.resize", {
                size: {
                    width: r.width(),
                    height: r.height()
                }
            })
        },
        f = function(e) {
            switch (e) {
                case "desktop":
                    l("desktop.off");
                    break;
                case "tablet":
                    l("tablet.off");
                    break;
                case "mobile":
                    l("mobile.off")
            }
        },
        d = function(e) {
            switch (e) {
                case "desktop":
                    l("desktop.on");
                    break;
                case "tablet":
                    l("tablet.on");
                    break;
                case "mobile":
                    l("mobile.on")
            }
        },
        p = function(t, n) {
            var o = n || {};
            o.on && e.on(t + ".on", o.on), o.off && e.on(t + ".off", o.off)
        };
    return s.isDesktop = function() {
        return "desktop" === s.getCurrentState()
    }, s.isTablet = function() {
        return "tablet" === s.getCurrentState()
    }, s.isMobile = function() {
        return "mobile" === s.getCurrentState()
    }, s.getCurrentState = function() {
        return s.calculateCurrentState()
    }, s.desktop = function(e) {
        p("desktop", e)
    }, s.tablet = function(e) {
        p("tablet", e)
    }, s.mobile = function(e) {
        p("mobile", e)
    }, s.calculateCurrentState = function() {
        var e = t.getWidth();
        return e <= 767 ? "mobile" : e < 1024 ? "tablet" : "desktop"
    }, s.isVisible = function(e) {
        var t = s.getCurrentState(),
            o = "no" + t.charAt(0).toUpperCase() + t.substring(1);
        return !n(e).hasClass(o)
    }, s.DESKTOP = "desktop", s.MOBILE = "mobile", s.TABLET = "tablet", s.DESKTOP_ON = "desktop.on", s.DESKTOP_OFF = "desktop.off", s.TABLET_ON = "tablet.on", s.TABLET_OFF = "tablet.off", s.MOBILE_ON = "mobile.on", s.MOBILE_OFF = "mobile.off", s.CHANGE = "responsive.change", s.RESIZE = "responsive.resize", r = n(window).on("resize", function() {
        a && clearTimeout(a), a = setTimeout(function() {
            u();
            var e = s.calculateCurrentState();
            void 0 !== e && o !== e && (i = o, o = e, c())
        }, 100)
    }), o = s.calculateCurrentState(), s
}), define("apollo/user", ["apollo/cookie", "apollo/responsive", "apollo/document"], function(e, t, n) {
    "use strict";
    var o, i, r = {
            path: "/",
            domain: "." + n.getDomainName(),
            expiry: 864e5
        },
        a = function() {
            s(), o.store(r)
        },
        s = function() {
            var e = (new Date).getTime();
            o.set("TM", e)
        },
        l = function(e, t) {
            i["get" + e] = c.bind(this, t), i["set" + e] = u.bind(this, t)
        },
        c = function(e) {
            return o.get(e)
        },
        u = function(e, t) {
            o.set(e, t), a()
        };
    return e.exists("SC") ? function() {
        var i = !1,
            r = t.getCurrentState().charAt(0);
        void 0 === (o = e.get("SC")).get("LC") && (o.set("LC", n.getLanguage()), i = !0), o.get("RS") !== r && (o.set("RS", r), i = !0), i && a()
    }() : function() {
        o = e.create("SC");
        var i = (new Date).getTime(),
            r = t.getCurrentState().charAt(0);
        o.set("CC"), o.set("CCY"), o.set("ENV"), o.set("TZ"), o.set("VAT"), o.set("VER"), o.set("LC", n.getLanguage()), o.set("RS", r), o.set("TS", i), a()
    }(), t.on(t.CHANGE, function(e) {
        u("RS", e.current.charAt(0))
    }), i = {}, l("CountryCode", "CC"), l("CreatedTimestamp", "TS"), l("CurrencyPreference", "CCY"), l("Environment", "ENV"), l("LanguageCode", "LC"), l("ModifiedTimestamp", "TM"), l("ResponsiveState", "RS"), l("TimeZone", "TZ"), l("Vat", "VAT"), l("Version", "VER"), i
}), define("scom/globalEvents", ["apollo/mediator"], function(e) {
    "use strict";
    var t = e.asReplay(e.create(), 1);
    return {
        on: t.on.bind(t),
        trigger: t.trigger.bind(t)
    }
}), define("apollo/settings", [], function() {
    return (window.SKYPE_SETTINGS || {}).settings
}), define("apollo/storage", ["window"], function(e) {
    "use strict";
    var t, n, o = function() {
            var e = {};
            return e.removeItem = function(t) {
                this.hasOwnProperty(t) && isNaN(parseInt(t)) && delete e[t]
            }, e
        },
        i = function(e) {
            var t;
            try {
                e && (t = JSON.parse(e))
            } catch (e) {
                return
            }
            return t
        },
        r = function(e) {
            return e ? JSON.stringify(e) : void 0
        },
        a = {
            setLocalData: function(e, n) {
                try {
                    return t[e] = r(n), t[e]
                } catch (e) {
                    return
                }
            },
            getLocalData: function(e) {
                return i(t[e])
            },
            hasLocalData: function(e) {
                return void 0 !== t[e]
            },
            removeLocalData: function(e) {
                t.removeItem(e)
            },
            setSessionData: function(e, t) {
                try {
                    return n[e] = r(t), n[e]
                } catch (e) {
                    return
                }
            },
            getSessionData: function(e) {
                return i(n[e])
            },
            hasSessionData: function(e) {
                return void 0 !== n[e]
            },
            removeSessionData: function(e) {
                n.removeItem(e)
            },
            isNativeStorageAvailable: function() {
                try {
                    return "object" == typeof e.localStorage && (e.localStorage.setItem("testStorage", 1), e.localStorage.removeItem("testStorage"), !0)
                } catch (e) {
                    return !1
                }
            }
        };
    return a.isNativeStorageAvailable() ? (t = e.localStorage, n = e.sessionStorage) : (t = o(), n = o()), a
}), define("apollo/user.preferences", ["apollo/cookie"], function(e) {
    "use strict";
    return {
        isAuthenticated: function() {
            var t = e.getSingleValue("skplet"),
                n = new Date,
                o = new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds());
            return !!t && o < new Date(1e3 * t.get())
        }
    }
}), define("scom/common/stateUtils", ["artemis/common/null-checkers"], function(e) {
    "use strict";

    function t(e) {
        this._internal = new Object(e)
    }
    return t.prototype.get = function(t) {
        return e.isNullOrUndefinedOrEmpty(t) ? this._internal : this._internal[t]
    }, t.prototype.update = function(t) {
        return this._internal = function t(n, o) {
            if (e.isNullOrUndefined(o) || "object" != typeof o) throw new Error("state update expected an object, but got " + o);
            var i = Object.keys(o);
            i = i.filter(function(e) {
                return n.hasOwnProperty(e)
            });
            var r = new Object(n);
            return i.forEach(function(e) {
                "object" != typeof o[e] || Array.isArray(o[e]) ? r[e] = o[e] : r[e] = t(r[e], o[e])
            }), r
        }(this._internal, t), this
    }, {
        create: function(e) {
            return new t(e)
        }
    }
}), define("scom/uhfSelectors", [], function() {
    "use strict";
    return {
        joinUsMenuItem: "#uhfJoin",
        dropdownLogoutMenuItem: "nav .signInDropdownWrapper [data-element-type='subMenu'] [data-link-type='logout']"
    }
}), define("apollo/user.token.consts", [], function() {
    "use strict";
    return {
        EVENTS: Object.freeze({
            READY: "ready",
            ERROR: "error",
            REMOVED: "tokenremoved"
        }),
        CONSTS: Object.freeze({
            SILENT_RESPONSE_EVENT: "message",
            USER_NOT_LOGGED_IN: "invalid_grant",
            TOKEN_SESSION_KEY: "skypeToken",
            TOKEN_SESSION_EXPIRATION_KEY: "skypeTokenTimestamp"
        })
    }
}), define("apollo/user.token", ["jquery", "apollo/window", "apollo/settings", "apollo/storage", "apollo/user.preferences", "apollo/mediator", "window", "artemis/common/null-checkers", "artemis/common/pluck", "scom/common/stateUtils", "scom/uhfSelectors", "scom/globalEvents", "apollo/user.token.consts"], function(e, t, n, o, i, r, a, s, l, c, u, f, d) {
    "use strict";

    function p(e, t, n, o) {
        switch (_.update({
            skypeToken: n,
            tokenRemoved: t
        }), e) {
            case d.EVENTS.READY:
                T.trigger(e, {
                    skypetoken: _.get().skypeToken
                });
                break;
            case d.EVENTS.ERROR:
                T.trigger(e, o);
                break;
            case d.EVENTS.REMOVED:
                T.trigger(e);
                break;
            default:
                throw new Error("Triggering event " + e + " is not implemented")
        }
    }

    function m() {
        o.removeSessionData(d.CONSTS.TOKEN_SESSION_KEY), o.removeSessionData(d.CONSTS.TOKEN_SESSION_EXPIRATION_KEY)
    }

    function h() {
        a.swc.destroy(), m(), b()
    }

    function v() {
        return "skypeToken" + n.token.clientId
    }

    function g() {
        var t = e(v());
        if (t.length <= 0) e("<iframe />", {
            id: v(),
            class: "noDesktop noMobile noTablet noLargeDesktop noSmallMobile",
            src: function() {
                var e = encodeURIComponent(n.token.clientId),
                    t = a.location.origin || a.location.protocol + "//" + a.location.host + a.location.pathname;
                return n.token.loginUri + "?client_id=" + e + "&response_type=postmessage&redirect_uri=" + t
            }(),
            "data-role": "skypeToken"
        }).appendTo("body");
        else {
            var o = t.src;
            t.src = "", t.src = o
        }
    }
    var y = {
            UHF_LOGOUTS: [u.joinUsMenuItem, u.dropdownLogoutMenuItem]
        },
        _ = c.create({
            skypeToken: void 0,
            tokenRemoved: !1
        }),
        E = l.pluck(n, "user", "msaLogin") || !1,
        S = !!l.pluck(n, "user", "msaLoginFromBackend") && E,
        T = r.create(),
        b = p.bind(this, d.EVENTS.REMOVED, !0, void 0, void 0),
        I = p.bind(this, d.EVENTS.READY, !1);
    return f.on(d.CONSTS.SILENT_RESPONSE_EVENT, function(e) {
        var t, i = (t = e, l.pluck(t, "originalEvent") || t);
        if (function(e) {
                var t = l.pluck(e, "data");
                return function(e) {
                    var t = l.pluck(e, "origin");
                    return !s.isNullOrUndefined(t) && n.token.loginUri.indexOf(t) > -1
                }(e) && !s.isNullOrUndefined(t) && "string" == typeof t
            }(i)) {
            var r, a, c, u;
            try {
                a = (r = JSON.parse(i.data)).skypetoken, u = r.expires_in, c = r.error
            } catch (e) {
                return void T.trigger(d.EVENTS.ERROR, {
                    message: "response contains invalid json string"
                })
            }
            return c === d.CONSTS.USER_NOT_LOGGED_IN ? (m(), void b()) : s.isNullOrUndefinedOrEmpty(a) ? void T.trigger(d.EVENTS.ERROR, r) : (f = a, h = u, p = Math.round((new Date).getTime() / 1e3) + h, o.setSessionData(d.CONSTS.TOKEN_SESSION_KEY, f), o.setSessionData(d.CONSTS.TOKEN_SESSION_EXPIRATION_KEY, p), void I(a));
            var f, p, h
        } else T.trigger(d.EVENTS.ERROR, {
            message: "invalid response returned from login api"
        })
    }), y.UHF_LOGOUTS.forEach(function(t) {
        e(t).click(h)
    }), S || (E ? (_.update({
        skypeToken: void 0,
        tokenRemoved: !1
    }), g()) : i.isAuthenticated() ? o.hasSessionData(d.CONSTS.TOKEN_SESSION_KEY) ? I(o.getSessionData(d.CONSTS.TOKEN_SESSION_KEY)) : g() : (m(), b())), {
        on: function(e, t) {
            e = e.split(" ");
            for (var n = 0; n < e.length; ++n) _.get().skypeToken && e[n] === d.EVENTS.READY ? t({
                skypetoken: _.get().skypeToken
            }) : _.get().tokenRemoved && e[n] === d.EVENTS.REMOVED ? t() : T.on(e[n], t)
        },
        EVENTS: d.EVENTS
    }
}), define("apollo/responsive.v2", ["apollo/mediator", "apollo/window", "jquery", "domReady!"], function(e, t, n) {
    "use strict";

    function o(e) {
        return e.some(function(e) {
            return window.matchMedia && "function" == typeof window.matchMedia && window.matchMedia(e).matches
        })
    }
    var i, r, a, s, l = ["(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"],
        c = ["(-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi)", "(-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 124.8dpi)", "(-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144dpi)"],
        u = {
            jQElement: n("body")
        };
    e.create(u);
    var f = function(e, t) {
            var o = n.extend({
                name: e
            }, t);
            u.trigger(e, o)
        },
        d = function() {
            m(r), h(i), f("responsiveV2.change", {
                previous: r,
                current: i,
                size: {
                    width: a.width(),
                    height: a.height()
                }
            })
        },
        p = function() {
            f("responsiveV2.resize", {
                size: {
                    width: a.width(),
                    height: a.height()
                }
            })
        },
        m = function(e) {
            switch (e) {
                case "XS":
                    f("XS.off");
                    break;
                case "SM":
                    f("SM.off");
                    break;
                case "UHF":
                    f("UHF.off");
                    break;
                case "MD":
                    f("MD.off");
                    break;
                case "LG":
                    f("LG.off");
                    break;
                case "XLG":
                    f("XLG.off")
            }
        },
        h = function(e) {
            switch (e) {
                case "XS":
                    f("XS.on");
                    break;
                case "SM":
                    f("SM.on");
                    break;
                case "UHF":
                    f("UHF.on");
                    break;
                case "MD":
                    f("MD.on");
                    break;
                case "LG":
                    f("LG.on");
                    break;
                case "XLG":
                    f("XLG.on")
            }
        };
    return u.isExtraSmall = function() {
        return "XS" === u.getCurrentState()
    }, u.isSmall = function() {
        return "SM" === u.getCurrentState()
    }, u.isMedium = function() {
        var e = u.getCurrentState();
        return "UHF" === e || "MD" === e
    }, u.isLarge = function() {
        return "LG" === u.getCurrentState()
    }, u.isExtraLarge = function() {
        return "XLG" === u.getCurrentState()
    }, u.isDesktop = function() {
        var e = u.getCurrentState();
        return "LG" === e || "XLG" === e
    }, u.isTablet = function() {
        return u.isMedium()
    }, u.isMobileUHF = function() {
        var e = u.getCurrentState();
        return "XS" === e || "SM" === e || "UHF" === e
    }, u.isMobile = function() {
        var e = u.getCurrentState();
        return "XS" === e || "SM" === e
    }, u.getCurrentState = function() {
        return u.calculateCurrentState()
    }, u.calculateCurrentState = function() {
        var e = t.getWidth();
        return e <= 480 ? "XS" : e <= 767 ? "SM" : e <= 859 ? "UHF" : e <= 1024 ? "MD" : e <= 1440 ? "LG" : "XLG"
    }, u.isHD = function() {
        return o(c)
    }, u.isRetina = function() {
        return o(l)
    }, u.XS = "XS", u.SM = "SM", u.UHF = "UHF", u.MD = "MD", u.LG = "LG", u.XLG = "XLG", u.XS_ON = "XS.on", u.XS_OFF = "XS.off", u.SM_ON = "SM.on", u.SM_OFF = "SM.off", u.UHF_ON = "UHF.on", u.UHF_OFF = "UHF.off", u.MD_ON = "MD.on", u.MD_OFF = "MD.off", u.LG_ON = "LG.on", u.LG_OFF = "LG.off", u.XLG_ON = "XLG.on", u.XLG_OFF = "XLG.off", u.CHANGE = "responsiveV2.change", u.RESIZE = "responsiveV2.resize", a = n(window).on("resize", function() {
        s && clearTimeout(s), s = setTimeout(function() {
            p();
            var e = u.calculateCurrentState();
            void 0 !== e && i !== e && (r = i, i = e, d())
        }, 100)
    }), i = u.calculateCurrentState(), u
}), define("sanitize-url", [], function() {
    "use strict";
    var e = /^(%20|\s)*(javascript|data)/im,
        t = /[^\x20-\x7E]/gim,
        n = /^([^:]+):/gm,
        o = [".", "/"];
    return {
        sanitizeUrl: function(i) {
            var r, a, s = i.replace(t, "");
            return l = s, o.indexOf(l[0]) > -1 ? s : (a = s.match(n)) ? (r = a[0], e.test(r) ? "about:blank" : s) : "about:blank";
            var l
        }
    }
}), define("scom/common/domUtils", ["sanitize-url"], function(e) {
    "use strict";

    function t(e, t) {
        return Object.keys(t).map(function(n) {
            e.setAttribute(n, t[n])
        }), e
    }
    var n = e.sanitizeUrl;
    return {
        loadScriptTags: function(e, o) {
            e.map(function(e) {
                var o = document.createElement("script");
                o.className = "apolloLoader", o.src = n(e.src), o.async = !0, t(o, e.data), document.head.appendChild(o)
            }), o && "function" == typeof o && o()
        },
        setAttr: t
    }
}), define("scom/newSkype/swcChat", ["scom/globalEvents", "apollo/settings", "apollo/user.token", "apollo/keycodes", "apollo/responsive.v2", "jquery", "artemis/components/uhf-header", "artemis/common/null-checkers", "artemis/common/pluck", "scom/common/stateUtils", "scom/common/domUtils"], function() {
    "use strict";
    var e = require("scom/globalEvents"),
        t = require("apollo/settings"),
        n = require("apollo/user.token"),
        o = require("apollo/keycodes"),
        i = require("apollo/responsive.v2"),
        r = require("jquery"),
        a = require("artemis/components/uhf-header"),
        s = require("artemis/common/null-checkers"),
        l = require("artemis/common/pluck"),
        c = require("scom/common/stateUtils"),
        u = require("scom/common/domUtils"),
        f = {
            SWC_CORE_READY_EVENT: "swc:core:ready"
        },
        d = "invisible",
        p = {
            SKYPE_RECENT_SELECTOR: ".skype-recents",
            SWC_SEARCH_INPUT: ".skype-recents .searchContactsInput",
            SWC_FOOTER_MESSAGE: ".skype-recents .footer .message",
            CHAT_WRAPPER_PLACEHOLDER: ".chat-wrapper",
            SKYPE_CHAT_SELECTOR: ".skypeChat",
            SKYPE_CHAT_ICON_SELECTOR: "#skypeIcon",
            SWC_RECENT_CONTACTS_ITEMS: "#swc-recents-contacts .item",
            UHF_MORE_NAV_ITEM: "#uhfMore",
            UNREAD_COUNTER: "#unreadCounter",
            UNREAD_WRAPPER: "#unreadWrapper",
            APP_BANNER: "#appBanner",
            UHF_COOKIE_ALERT: "#uhfCookieAlert",
            UHF_EDGE_NOTIFICATION: "#epb",
            UHF_EDGE_NOTIFICATION_ID: "epb",
            LOGIN_MENU_WRAPPER: "nav .signInDropdownWrapper",
            LOGIN_MENU: "nav .signInDropdownWrapper [data-element-type='subMenu']"
        },
        m = {
            ProviderId: "swc.chat",
            IsVirtual: !0,
            ParallelView: !0,
            CanCollapse: !0,
            Style: l.pluck(t, "swcChat", "style") || "outlook",
            Locale: "en-US"
        },
        h = {
            notStarted: "notStarted",
            inProgress: "inProgress",
            finished: "finished"
        },
        v = c.create({
            lazyInitStatus: h.notStarted,
            recentsInitStatus: h.notStarted
        }),
        g = function(e) {
            swc.API.triggerEvent(e)
        },
        y = function() {
            var e = r(p.SKYPE_RECENT_SELECTOR),
                t = r(p.SKYPE_CHAT_SELECTOR);
            "visible" === e.attr("data-status") && (e.attr("data-status", d), t.attr("data-bi-scn", "open"), g("recentsHidden"))
        },
        _ = function(e, t, n) {
            if (e.hasClass("hover") && (e.removeClass("hover"), t.attr("aria-expanded", "false")), "visible" === n.attr("data-status")) n.attr("data-status", d), g("recentsHidden");
            else {
                var o = r(p.UHF_EDGE_NOTIFICATION).height(),
                    i = r(p.APP_BANNER).height(),
                    a = r(p.UHF_COOKIE_ALERT).height();
                n.css("margin-top", o + i + a), n.attr("data-status", "visible"), g("recentsShown")
            }
            r(p.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open" === r(p.SKYPE_CHAT_SELECTOR).attr("data-bi-scn") ? "close" : "open")
        },
        E = function(e) {
            window.addEventListener("keydown", function(t) {
                t.stopPropagation(), t.keyCode === o.ESCAPE && "visible" === e.attr("data-status") && (e.attr("data-status", d), r(p.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open")), t.keyCode === o.TAB && r(p.SWC_RECENT_CONTACTS_ITEMS).length > 0 && "visible" === e.attr("data-status") && (r(p.SWC_RECENT_CONTACTS_ITEMS).attr("tabindex", "0").attr("aria-label", "message"), void 0 === r(p.SWC_FOOTER_MESSAGE).attr("tabindex") && (r(p.SWC_FOOTER_MESSAGE).attr("tabindex", "0").attr("aria-label", "message"), n = e, r(p.SWC_FOOTER_MESSAGE).on("keydown", function(e) {
                    e.keyCode === o.TAB && (n.attr("data-status", d), r(p.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open"), r(p.SKYPE_CHAT_SELECTOR).focus())
                }))), t.keyCode === o.TAB && r(p.SWC_RECENT_CONTACTS_ITEMS).length > 0 && e.attr("data-status") === d && ("0" === r(p.SWC_RECENT_CONTACTS_ITEMS).attr("tabindex") && r(p.SWC_RECENT_CONTACTS_ITEMS).removeAttr("tabindex").removeAttr("aria-label"), "0" === r(p.SWC_FOOTER_MESSAGE).attr("tabindex") && r(p.SWC_FOOTER_MESSAGE).removeAttr("tabindex").removeAttr("aria-label"));
                var n
            })
        },
        S = function() {
            return window.swc.API.registerEvent("unreadConversationsUpdate", function(e) {
                document.querySelector(p.UNREAD_COUNTER).innerText = e, document.querySelector(p.UNREAD_WRAPPER).style.display = e > 0 ? "block" : "none"
            }), window.swc.module.create("chat", m, document.querySelector(p.CHAT_WRAPPER_PLACEHOLDER)), Promise.resolve()
        },
        T = function(t) {
            if (t) {
                var n = r(p.SKYPE_RECENT_SELECTOR);
                g = n, i.on(i.RESIZE, function() {
                        i.isMobile() && "visible" === g.attr("data-status") && !a.isV2() ? (g.attr("data-status", d), r(p.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open")) : i.isMobileUHF() && "visible" === g.attr("data-status") && a.isV2() && (g.attr("data-status", d), r(p.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open"))
                    }), (m = n).on("keydown", function(e) {
                        e.keyCode === o.TAB && e.target === this && e.shiftKey && (e.preventDefault(), r(p.SKYPE_CHAT_SELECTOR).focus(), m.attr("data-status", d), r(p.SKYPE_CHAT_SELECTOR).attr("data-bi-scn", "open"))
                    }),
                    function(e) {
                        function t(e) {
                            var t = r(p.LOGIN_MENU_WRAPPER),
                                n = r(p.LOGIN_MENU);
                            v.get().recentsInitStatus === h.notStarted && (s.isNullOrUndefined(l.pluck(window, "swc", "module")) || (v.update({
                                recentsInitStatus: h.inProgress
                            }), window.swc.module.create("recents", {}, document.querySelector(p.SKYPE_RECENT_SELECTOR)), v.update({
                                recentsInitStatus: h.finished
                            }))), v.get().recentsInitStatus === h.finished && _(t, n, e)
                        }! function(e) {
                            var t = document.getElementById(p.UHF_EDGE_NOTIFICATION_ID);
                            t && t.addEventListener("animationend", function() {
                                var t = r(p.UHF_EDGE_NOTIFICATION).height();
                                e.css("margin-top", t)
                            })
                        }(e), r(p.SKYPE_CHAT_SELECTOR).on("click touchstart", function(n) {
                            n.stopImmediatePropagation(), t(e)
                        }), r(p.SKYPE_CHAT_SELECTOR).on("keydown", function(n) {
                            n.keyCode === o.TAB && (n.shiftKey ? r(p.UHF_MORE_NAV_ITEM).length > 0 && (n.preventDefault(), r(p.UHF_MORE_NAV_ITEM).focus()) : r(p.SWC_SEARCH_INPUT).length > 0 && "visible" === e.attr("data-status") && (n.preventDefault(), r(p.SWC_SEARCH_INPUT).focus())), n.keyCode === o.ENTER && (n.preventDefault(), t(e))
                        }), E(e)
                    }(n), r("html").on("click touchstart", function(e) {
                        var t, n, o = e.target,
                            i = document.getElementById("main-recentlist"),
                            r = document.getElementById("swc-recents-chats");
                        i && o && (t = i.contains(o)), r && o && (n = r.contains(o)), t ? n && y() : y()
                    });
                var c = function(e) {
                        return (t = function() {
                            return Promise.resolve(e)
                        }, null === window.swc || void 0 === window.swc ? Promise.reject("SWC Chat is not loaded properly") : window.swc.init(null, {
                            tokenProvider: t,
                            toLoadUnreadConversationsCount: !0
                        }).then(S)).catch(function() {
                            return Promise.reject()
                        });
                        var t
                    },
                    u = function(e) {
                        v.update({
                            lazyInitStatus: h.inProgress
                        }), c(e).then(function() {
                            v.update({
                                lazyInitStatus: h.finished
                            })
                        })
                    };
                e.on(f.SWC_CORE_READY_EVENT, function() {
                    e = t, i.isMobile() && !a.isV2() ? i.on(i.RESIZE, function() {
                        v.get().lazyInitStatus === h.inProgress || v.get().lazyInitStatus === h.finished || i.isMobile() || u(e)
                    }) : i.isMobileUHF() && a.isV2() ? i.on(i.RESIZE, function() {
                        v.get().lazyInitStatus === h.inProgress || v.get().lazyInitStatus === h.finished || i.isMobileUHF() || u(e)
                    }) : c(e);
                    var e
                })
            }
            var m, g
        };
    return t.swcChat && "true" === t.swcChat.chat && function() {
        var e = l.pluck(t, "swcChat", "sdkUrl"),
            o = l.pluck(t, "swcChat", "environment");
        n.on(n.EVENTS.READY, function(t) {
            var n = t.skypetoken;
            e && u.loadScriptTags([{
                src: e,
                data: {
                    "data-manual-boot": !0,
                    "data-environment": o
                }
            }], function() {
                T(n)
            })
        })
    }(), {
        closeRecentChats: y,
        CONSTS: f
    }
}), define("apollo/ajax", ["jquery"], function(e) {
    "use strict";
    return {
        get: function(t) {
            var n = e.extend({
                type: "GET",
                crossDomain: !0
            }, t);
            e.support.cors = !0, e.ajax(n)
        },
        post: function(t) {
            var n = e.extend({
                type: "POST",
                crossDomain: !0
            }, t);
            e.ajax(n)
        }
    }
}), define("scom/common/urlUtils", [], function() {
    "use strict";

    function e(e, t, n) {
        return e.replace(new RegExp("([?&]" + t + "(?=[=&#]|$)[^#&]*|(?=#|$))"), "&" + t + "=" + encodeURIComponent(n)).replace(/^([^?&]+)&/, "$1?")
    }
    return {
        setParam: e,
        setQueryParams: function(t, n) {
            if (null === t || void 0 === t || "" === t) return t;
            var o = t;
            return Object.keys(n).forEach(function(t) {
                o = e(o, t, n[t])
            }), o
        }
    }
}), define("apollo/hash", ["jquery", "apollo/window", "apollo/mediator"], function(e, t, n) {
    "use strict";
    var o = {};
    n.create(o);
    var i = function() {
            return function(e) {
                var t = e.indexOf("?");
                return t > 0 && (e = e.substr(0, t - 1)), e
            }(t.getHash().substr(1))
        },
        r = i();
    return t.on("hashchange", function() {
        var e = i();
        "" !== e && ("change", t = e, t.length && o.trigger("change", t));
        var t
    }), {
        on: function(e, t) {
            e = e.split(" ");
            for (var n = 0; n < e.length; ++n) "init" === e[n] && r ? t(r) : o.on(e[n], t)
        }
    }
}), define("apollo/topSection", ["domReady!", "apollo/responsive", "jquery"], function(e, t, n) {
    "use strict";
    var o = {};
    return o.getNavigationWrapper = function() {
        return o.jQElement
    }, o.isSticky = function() {
        var e = o.getNavigationWrapper();
        return t.getCurrentState() === t.MOBILE ? e.hasClass("sticky") : e.hasClass("stickyDesktop")
    }, o.responsiveMarginForFixedNav = function() {
        o.isSticky() ? o.HTMLjQElement.css("margin-top", o.getNavBarHeight()) : o.HTMLjQElement.css("margin-top", 0)
    }, o.recalculateMarginForFixedNav = function(e) {
        o.HTMLjQElement.css("margin-top", parseInt(o.HTMLjQElement.css("margin-top")) - e.outerHeight())
    }, o.initMarginForFixedNav = function(e) {
        e.data("height", e.outerHeight()), o.HTMLjQElement.css("margin-top", o.getNavBarHeight())
    }, o.initBannersHeight = function(e) {
        if (void 0 !== e) {
            var t = e.outerHeight();
            e.addClass("initialized"), setTimeout(function() {
                o.isSticky() && e.css("max-height", t), e.addClass("show")
            }, 0)
        }
    }, o.getNavBarHeight = function() {
        var e = 0,
            t = "#notificationBanner, #cookiePolicy, #appBanner";
        return n("body").hasClass("v2") && (t += ", nav"), n("#nav-wrapper").find(t).each(function() {
            var t = n(this);
            t.hasClass("closed") || (e += t.hasClass("initialized") && t.data("height") ? parseInt(t.data("height")) : t.outerHeight())
        }), e
    }, o.updateBannersMaxHeight = function(e) {
        if (void 0 !== e)
            if (o.isSticky()) {
                var t = e.find(".watchHeight").outerHeight();
                e.data("height", t), e.css("max-height", t)
            } else e.data("height", 0), e.css("max-height", "")
    }, o.openBanner = function(e) {
        e.removeClass("noexist"), o.isSticky() && o.initMarginForFixedNav(e), o.initBannersHeight(e)
    }, o.closeBanner = function(e) {
        o.isSticky() && o.recalculateMarginForFixedNav(e), e.css("max-height", 0).data("height", 0), e.removeClass("show").addClass("closed")
    }, o.watchResponsivity = function(e) {
        t.on(t.RESIZE, function() {
            e.hasClass("closed") || o.updateBannersMaxHeight(e), o.responsiveMarginForFixedNav()
        })
    }, o.jQElement = n("#nav-wrapper"), o.HTMLjQElement = n("html"), o
}), define("apollo/navigationBar", ["domReady!", "apollo/hash", "apollo/topSection", "apollo/responsive", "jquery"], function(e, t, n, o, i) {
    "use strict";
    var r = {},
        a = function(e) {
            var t = "a[href], select, button, textarea, input, [tabindex]";
            return e.filter(t).add(e.find(t)).not("[tabindex=-1], [disabled], :hidden, .hiddenFocus *")
        },
        s = function(e) {
            var t;
            if (!e.is("body")) {
                var n = e.nextAll(),
                    o = a(n);
                t = o.length > 0 ? o.first() : s(e.parent())
            }
            return t
        },
        l = function(e) {
            var t;
            if (!e.is("body")) {
                var n = e.prevAll(),
                    o = a(n);
                t = o.length > 0 ? o.last() : l(e.parent())
            }
            return t
        };
    return r.getNavigationContainer = function() {
        return i(".siteNavigation")
    }, r.removeHover = function() {
        r.getNavigationContainer().find(".hover > [role='menu']").attr("aria-expanded", !1), r.getNavigationContainer().find(".hover").removeClass("hover")
    }, r.transferFocusToContentBeforeNavigation = function() {
        r.removeHover();
        var e = r.getNavigationContainer(),
            t = l(e);
        return t && t.focus(), t
    }, r.transferFocusToContentAfterNavigation = function() {
        r.removeHover();
        var e = r.getNavigationContainer(),
            t = s(e);
        return t && t.focus(), t
    }, r.height = function() {
        return r.getNavigationContainer().height()
    }, r.isSticky = function() {
        var e = r.getNavigationContainer();
        return o.getCurrentState() === o.MOBILE ? e.hasClass("sticky") : e.hasClass("stickyDesktop")
    }, r.isMobileMenuOpen = function() {
        return r.getNavigationContainer().hasClass("open")
    }, r.isNewNavigation = function() {
        var e = r.getNavigationContainer();
        return e.length > 0 && "v3" === e.data("navigation-version")
    }, r.NAV_OPEN_CLASS = "open", r.GLOBAL_NAV_OPEN_CLASS = "navOn", r.jQElement = i(".siteNavigation .uhfNavigationBar"), n.isSticky() && (n.initMarginForFixedNav(r.jQElement), n.watchResponsivity(r.jQElement)), r
}), define("apollo/user.profile", ["apollo/settings", "apollo/ajax", "apollo/user.token", "apollo/mediator", "apollo/storage", "scom/common/urlUtils", "artemis/common/null-checkers", "apollo/navigationBar"], function(e, t, n, o, i, r, a) {
    "use strict";
    var s, l = "PROFILE_REMOVED",
        c = "PROFILE_CACHED",
        u = "profileValidUntil",
        f = {},
        d = !1,
        p = {
            isProfileCached: !1,
            isAjaxBeenCalled: !1,
            cachedProfile: null
        };
    f = o.create();
    var m = function() {
            return (new Date).getTime()
        },
        h = function(e) {
            if (!a.isNullOrUndefined(e)) {
                var t = m() + 36e5;
                s = e, i.setSessionData(u, t), i.setSessionData("profile", e), f.trigger("PROFILE_READY", e), v(), _("SIGNIN")
            }
        },
        v = function() {
            setTimeout(y, 36e5)
        },
        g = function(n, o) {
            return p.isAjaxBeenCalled ? p.isProfileCached ? (o(p.profile), !1) : void f.on(c, o) : (f.on(c, o), function(n) {
                p.isAjaxBeenCalled = !0;
                var o = e.api.skypeProfileApiUrlBase + "users/self/profile/";
                t.get({
                    url: o,
                    headers: {
                        Accept: "application/json; ver=1.0",
                        "X-Skypetoken": n
                    },
                    success: function(e) {
                        e && (e.avatarUrl ? e.avatarUrl = r.setQueryParams(e.avatarUrl, {
                            size: "l"
                        }) : e.avatarUrl = "DEFAULT_AVATAR"), p.isProfileCached = !0, p.profile = e, f.trigger(c, e), f.off(c)
                    },
                    error: function(e) {
                        f.trigger("PROFILE_ERROR", e)
                    }
                })
            }(n), !1)
        },
        y = function() {
            i.removeSessionData(u), i.removeSessionData("profile"), s = null, d = !0, f.trigger(l), _("SIGNOUT")
        },
        _ = function(e) {
            var t = window.awa;
            if (t) {
                var n = "SIGNIN" === e,
                    o = {
                        behavior: t.behavior[e],
                        content: JSON.stringify({})
                    };
                t.getConfig().isLoggedIn = n, t.ct.captureContentUpdate(o)
            }
        };
    return {
        initialize: function() {
            s = null, d = !1, e.user && !0 === e.user.loadProfile && (n.on(n.EVENTS.READY, function(e) {
                var t = e.skypetoken;
                return a.isNullOrUndefined(t) ? void y() : void g(t, h)
            }), n.on(n.EVENTS.REMOVED, y))
        },
        on: function(e, t) {
            e = e.split(" ");
            for (var n = 0; n < e.length; ++n) s && "PROFILE_READY" === e[n] ? t(s) : d && e[n] === l ? t() : f.on(e[n], t)
        },
        PROFILE_READY: "PROFILE_READY",
        PROFILE_ERROR: "PROFILE_ERROR",
        PROFILE_REMOVED: l,
        DEFAULT_AVATAR: "DEFAULT_AVATAR",
        getProfile: g,
        getCurrentProfile: function() {
            var e = i.hasSessionData("profile"),
                t = i.getSessionData(u) || -1,
                n = m();
            return e && t >= n ? i.getSessionData("profile") : null
        }
    }
}), define("apollo/localisation", ["jquery"], function(e) {
    "use strict";
    var t = function() {
        return e("html").hasClass("rtl") ? "rtl" : "ltr"
    };
    return {
        textDirection: t,
        isRtl: function() {
            return "rtl" === t()
        }
    }
}), define("wedcs", ["domReady!"], function() {
    "use strict";
    return window.MscomCustomEvent || function() {}
}), define("apollo/tracking.wedcs", ["apollo/responsive", "apollo/user", "apollo/user.preferences", "apollo/document", "wedcs"], function(e, t, n, o, i) {
    "use strict";
    var r = o.getEnvironment(),
        a = t.getLanguageCode(),
        s = n.isAuthenticated() ? "1" : "0",
        l = $("html").data("pagetype"),
        c = "static" + $("html").data("pagepath"),
        u = function(e) {
            var t = "";
            if (e)
                for (var n in e) e.hasOwnProperty(n) && void 0 !== e[n] && (t += n + "=" + e[n] + "|");
            return t
        };
    return {
        trackImpression: function(t, n, o) {
            i("ms.prod", "Skype", "wcs.cot", "5", "ms.interactiontype", "1", "ms.env", r, "ms.lang", a, "ms.pagetype", l, "ms.rwd", e.getCurrentState(), "ms.skypepn", c, "ms.skype_userhash", s, "ms.expe", "ecs", "ms.opt_pnm", "scom", "ms.opt_tid", u(o), "ms.ea_offer", n, "ms.ea_action", "impression", "ms.cmpgrp", t)
        },
        trackPageImpression: function(t, n) {
            i("ms.prod", "Skype", "wcs.cot", "0", "ms.env", r, "ms.lang", a, "ms.pagetype", l, "ms.rwd", e.getCurrentState(), "ms.skypepn", t, "ms.skype_userhash", s, "ms.expe", "ecs", "ms.opt_pnm", "scom", "ms.opt_tid", u(n))
        },
        trackDownloadClick: function(t, n, o) {
            i("ms.prod", "Skype", "wcs.cot", "5", "ms.interactiontype", "1", "ms.env", r, "ms.lang", a, "ms.pagetype", l, "ms.rwd", e.getCurrentState(), "ms.skypepn", c, "ms.skype_userhash", s, "ms.expe", "ecs", "ms.opt_pnm", "scom", "ms.opt_tid", u(o), "ms.ea_offer", "Skype:" + n, "ms.ea_action", "dwn", "ms.cmpgrp", t)
        },
        trackGenericClick: function(t, n, o) {
            i("ms.prod", "Skype", "wcs.cot", "5", "ms.interactiontype", "1", "ms.env", r, "ms.lang", a, "ms.pagetype", l, "ms.rwd", e.getCurrentState(), "ms.skypepn", c, "ms.skype_userhash", s, "ms.expe", "ecs", "ms.opt_pnm", "scom", "ms.opt_tid", u(o), "ms.ea_offer", n, "ms.ea_action", "click", "ms.cmpgrp", t)
        },
        trackVideoEvent: function(t, n, o) {
            i("ms.prod", "Skype", "wcs.cot", "5", "ms.interactiontype", "1", "ms.env", r, "ms.lang", a, "ms.pagetype", l, "ms.rwd", e.getCurrentState(), "ms.skypepn", c, "ms.skype_userhash", s, "ms.expe", "ecs", "ms.opt_pnm", "scom", "ms.opt_tid", u(o), "ms.ea_offer", l + ":youtube:" + n, "ms.ea_action", t)
        },
        VIDEO_EVENTS: {
            Start: "Start Video",
            Complete: "Complete",
            Replay: "Replay",
            Half: "50%"
        }
    }
}), define("youtube", ["jquery", "domReady!"], function(e) {
    "use strict";
    var t = !1,
        n = [],
        o = {};
    return window.onYouTubeIframeAPIReady = function() {
        t = !0,
            function() {
                var e = 0;
                for (e = 0; e < n.length; e++) n[e]();
                n = []
            }()
    }, o.init = function() {
        o.injectVideoScript()
    }, o.injectVideoScript = function() {
        if (!this.videoScriptExists()) {
            var e = document.createElement("script");
            e.id = "youTubeScript", e.src = "https://www.youtube.com/iframe_api";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }
    }, o.ready = function(e) {
        t ? e() : n.push(e)
    }, o.videoScriptExists = function() {
        return e("#youTubeScript").length
    }, o.createVideoPlayer = function(e, t, n) {
        var i = n || this.generateDefaultVideoPlayerConfig(t);
        return o.PlayerState.UNSTARTED = YT.PlayerState.UNSTARTED, o.PlayerState.ENDED = YT.PlayerState.ENDED, o.PlayerState.PLAYING = YT.PlayerState.PLAYING, o.PlayerState.PAUSED = YT.PlayerState.PAUSED, o.PlayerState.BUFFERING = YT.PlayerState.BUFFERING, o.PlayerState.CUED = YT.PlayerState.CUED, new YT.Player(e, i)
    }, o.reloadVideoPlayer = function(e) {
        var t = e.getIframe();
        t.src = t.src
    }, o.generateDefaultVideoPlayerConfig = function(e) {
        return {
            videoId: e,
            playerVars: {
                html5: 1,
                showinfo: 0,
                rel: 0,
                modestbranding: 1,
                color: "white",
                autohide: 1
            }
        }
    }, o.PlayerState = {
        UNSTARTED: "UNSTARTED",
        ENDED: "ENDED",
        PLAYING: "PLAYING",
        PAUSED: "PAUSED",
        BUFFERING: "BUFFERING",
        CUED: "CUED"
    }, o
}), define("apollo/Video", ["apollo/mediator", "youtube", "jquery", "domReady!"], function(e, t, n) {
    "use strict";
    var o = "INVALID_PARAMETER_VALUE",
        i = "EMBEDDING_NOT_ALLOWED",
        r = {},
        a = [];
    r[2] = o, r[5] = "HTML5_PLAYER_ERROR", r[100] = "VIDEO_NOT_FOUND", r[101] = i, r[150] = i;
    var s = {},
        l = function(e) {
            if (!e.isVideoReady) throw "player object has not yet been instantiated, please call load() first"
        },
        c = function(o) {
            t.init(), this.player = void 0, this.isVideoReady = !1, this.jQElement = n(o), this.id = this.jQElement.attr("id"), this.firstPlaying = !0, e.create(this);
            var i = this.trigger;
            if (this.trigger = function(e, t) {
                    i.call(this, e, function(e, t) {
                        return {
                            name: e,
                            event: t,
                            video: this
                        }
                    }.call(this, e, t))
                }, !this.id) throw "Video containing element id missing";
            s[this.id] = s[this.id] || [];
            var r = this;
            this.on("video.ready", function() {
                r.isVideoReady = !0;
                for (var e = s[this.id], t = 0; t < e.length; t++) e[t].call(r, arguments)
            })
        };
    return c.prototype.load = function(e, n, o, i) {
        var r = this;
        this.videoId = e, this.height = o, this.width = n;
        var s = r.generateVideoPlayerConfig(i);
        return t.ready(function() {
            r.player = t.createVideoPlayer(r.id, r.videoId, s), a.push(r)
        }), this
    }, c.prototype.play = function() {
        return l(this), this.player.playVideo(), this
    }, c.prototype.pause = function() {
        return l(this), this.player.pauseVideo(), this
    }, c.prototype.stop = function() {
        return l(this), this.player.stopVideo(), this
    }, c.prototype.seekTo = function(e) {
        return l(this), this.player.getCurrentTime() !== e && this.player.seekTo(e, !0), this
    }, c.prototype.reset = function() {
        return l(this), this.seekTo(0), this
    }, c.prototype.setVolume = function(e) {
        return l(this), this.player.setVolume(e), this
    }, c.prototype.mute = function() {
        return l(this), this.player.mute(), this
    }, c.prototype.unmute = function() {
        return l(this), this.player.unMute(), this
    }, c.prototype.getStatus = function() {
        return this.isVideoReady ? this.player.getPlayerState() : t.PlayerState.UNSTARTED
    }, c.prototype.generateVideoPlayerConfig = function(e) {
        var t = {
            html5: document.createElement("video").play ? 1 : 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            color: "white",
            wmode: "opaque",
            autohide: 1,
            autoplay: 0
        };
        return {
            videoId: this.videoId,
            width: this.width,
            height: this.height,
            playerVars: n.extend(t, e),
            events: {
                onReady: this.eventHandler.call(this, "video.ready"),
                onStateChange: this.eventHandler.call(this, "video.statechange"),
                onPlaybackQualityChange: this.eventHandler.call(this, "video.qualitychange"),
                onPlaybackRateChange: this.eventHandler.call(this, "video.ratechange"),
                onError: this.eventHandler.call(this, "video.error"),
                onApiChange: this.eventHandler.call(this, "video.apichange")
            }
        }
    }, c.prototype.isReady = function() {
        return -1 !== this.getStatus()
    }, c.prototype.ready = function(e) {
        this.isVideoReady ? e.call(this, arguments) : s[this.id].push(e)
    }, c.prototype.isPlaying = function() {
        return this.getStatus() === t.PlayerState.PLAYING
    }, c.prototype.isPaused = function() {
        return this.getStatus() === t.PlayerState.PAUSED
    }, c.prototype.isStopped = function() {
        return !this.isPlaying() && !this.isPaused()
    }, c.prototype.isMuted = function() {
        return this.player.isMuted()
    }, c.prototype.hasEnded = function() {
        return this.getStatus() === t.PlayerState.ENDED
    }, c.prototype.isInOverlay = function() {
        return !!this.jQElement.parents(".overlayWrapper").length
    }, c.prototype.reload = function() {
        t.reloadVideoPlayer(this.player)
    }, c.prototype.eventHandler = function(e) {
        var n = this;
        return function(o) {
            var i = e;
            "video.statechange" === i && (i = function(e) {
                var n = "";
                switch (o.data) {
                    case t.PlayerState.UNSTARTED:
                        n = "video.unstarted";
                        break;
                    case t.PlayerState.ENDED:
                        n = "video.ended";
                        break;
                    case t.PlayerState.PLAYING:
                        n = "video.playing";
                        break;
                    case t.PlayerState.PAUSED:
                        n = "video.paused";
                        break;
                    case t.PlayerState.BUFFERING:
                        n = "video.buffering";
                        break;
                    case t.PlayerState.CUED:
                        n = "video.cued";
                        break;
                    default:
                        throw "unhandled player event fired"
                }
                return n
            }()), n.trigger(i, o), "video.playing" === i && !0 === n.firstPlaying && (n.firstPlaying = !1, n.trigger("video.firstplaying", o))
        }
    }, c.READY = "video.ready", c.UNSTARTED = "video.unstarted", c.ENDED = "video.ended", c.FIRST_PLAYING = "video.firstplaying", c.PLAYING = "video.playing", c.PAUSED = "video.paused", c.BUFFERING = "video.buffering", c.CUED = "video.cued", c.QUALITY_CHANGE = "video.qualitychange", c.RATE_CHANGE = "video.ratechange", c.ERROR = "video.error", c.API_CHANGE = "video.apichange", c.ERROR_INVALID_PARAMETER_VALUE = o, c.ERROR_HTML5_PLAYER_ERROR = "HTML5_PLAYER_ERROR", c.ERROR_VIDEO_NOT_FOUND = "VIDEO_NOT_FOUND", c.ERROR_EMBEDDING_NOT_ALLOWED = i, c.ERROR_UNKNOWN = "UNKNOWN_ERROR", c.errorCodes = r, c.allVideos = a, c
}), define("apollo/tracking", ["apollo/tracking.wedcs", "apollo/Video", "apollo/scroll", "apollo/document", "apollo/storage", "jquery", "jqueryvisible"], function(e, t, n, o, i, r) {
    "use strict";
    var a = {},
        s = null,
        l = function(e) {
            return {
                siteSection: e.data("tracking-section"),
                ctaArea: e.data("cta-area"),
                productCode: e.data("product-code"),
                position: e.data("position"),
                campaignId: e.data("campaign-id"),
                videoName: e.data("video-name"),
                excludeImpression: e.data("exclude-click-impression")
            }
        },
        c = function(e, t) {
            var n = r(this).attr("href");
            n && !e.isDefaultPrevented() && (e.preventDefault(), i = e, i.preventDefaultOriginal = i.preventDefault, i.preventDefaultExecuted = !1, i.preventDefault = function() {
                this.preventDefaultOriginal(), this.preventDefaultExecuted = !0
            }, setTimeout(function() {
                e.preventDefaultExecuted || o.setLocationHref(n)
            }, 300)), t();
            var i
        },
        u = function(e, t) {
            return void 0 === e ? r(t) : r(e).find(t)
        },
        f = function(t, n) {
            t.on("click", function(t) {
                c.call(this, t, function() {
                    t.stopPropagation(), e.trackGenericClick(n.position, n.campaignId, s)
                })
            })
        },
        d = function(t, n) {
            t.on("click", function(t) {
                c.call(this, t, function() {
                    t.stopPropagation(), e.trackDownloadClick(n.position, n.campaignId, s)
                })
            })
        },
        p = function(n, o) {
            var i;
            n.on(t.FIRST_PLAYING, i = function() {
                n.off(t.FIRST_PLAYING, i), e.trackVideoEvent(e.VIDEO_EVENTS.Start, o.videoName, s), n.on(t.PLAYING, function() {
                    e.trackVideoEvent(e.VIDEO_EVENTS.Start, o.videoName, s)
                })
            }), n.on(t.ENDED, function() {
                e.trackVideoEvent(e.VIDEO_EVENTS.Complete, o.videoName, s)
            })
        },
        m = function(t, n) {
            e.trackImpression(t, n, s)
        },
        h = function(e) {
            var t, n = l(e),
                o = (t = n, t.position + "_" + t.campaignId);
            o in a || (m(n.position, n.campaignId), a[o] = !0)
        };
    return {
        setupTracking: function(e) {
            var t = u(e, "[data-tracking-type]");
            ! function(e) {
                var t = function(t) {
                        var n = {};
                        return u(e, "[data-mvt-configuration]").each(function() {
                            var e, t = r(this),
                                o = t.data("mvt-configuration"),
                                i = t.find("[data-mvt-variant]")[0];
                            i ? (e = r(i).data("mvt-variant"), n[o] = e) : n[o] = void 0
                        }), n
                    }(),
                    n = function() {
                        var e = {};
                        if (i.hasSessionData("mvt")) {
                            var t = i.getSessionData("mvt");
                            t && (e = t)
                        }
                        return e
                    }();
                for (var o in t) t.hasOwnProperty(o) && (n[o] = t[o]);
                a = n, i.setSessionData("mvt", a), s = n;
                var a
            }(e);
            for (var n = 0; n < t.length; ++n) {
                var o = r(t[n]),
                    a = l(o);
                switch (o.data("tracking-type")) {
                    case "download":
                        d(o, a);
                        break;
                    case "click":
                        f(o, a);
                        break;
                    case "video":
                        p(o, a)
                }
            }
        },
        trackPageImpression: function(t) {
            e.trackPageImpression(t, s)
        },
        trackCustomImpressionEvent: function(e, t) {
            m(e, t)
        },
        trackElementImpression: h,
        trackAllElementImpressions: function() {
            r("[data-tracking-type=impression]").each(function() {
                var e = r(this);
                e.visible(!0) && e.is(":visible") && h(e), n(this).on("stage", function() {
                    var e = this.jQElement;
                    e.is(":visible") && h(e)
                })
            })
        },
        trackCustomClickEvent: function(t, n) {
            e.trackGenericClick(t, n, s)
        },
        addDownloadClickEventTracking: d,
        addGenericClickEventTracking: f,
        addVideoEventTracking: p,
        clickDelay: 300
    }
}), define("scom/navigation/navigation", ["jquery", "scom/newSkype/swcChat", "apollo/settings", "apollo/document", "apollo/responsive.v2", "apollo/user.profile", "apollo/localisation", "apollo/tracking", "artemis/common/to-boolean", "artemis/common/pluck", "artemis/common/null-checkers", "artemis/components/uhf-header", "domReady!"], function(e, t, n, o, i, r, a, s, l, c, u, f) {
    "use strict";

    function d(e, t, n) {
        if (f.version() === f.uhfVersions.v2 && (g.css("visibility", "visible"), e || !(e.length <= 0))) {
            var o = a.isRtl();
            g.css(o ? "padding-left" : "padding-right", function() {
                var i = e.width() + t.width(),
                    r = parseInt(t.css(o ? "left" : "right")) || 0,
                    a = n.length > 0 ? parseInt(o ? n.css("padding-left") : n.css("padding-right")) : 0;
                return Math.min(Math.max(i, r) + (a < 40 ? 40 : a) + 15, 300)
            }())
        }
    }

    function p() {
        return l.toBoolean(c.pluck(n, "uhf", "clientSideRerender"))
    }

    function m(t, n, o) {
        f.isV2() && p() && f.customMoreRender();
        var i = e(f.uiSelectors.meControl),
            r = t.width() + n.width() + 20;
        i.width(r), i.css("maxWidth", r), d(t, n, o), f.isV2() && f.uhfMoreRender()
    }
    var h = {
            swcChatMenuItem: "#skypeStatus",
            logoutSelectors: ["#uhfJoin", "[data-link-type=logout]"]
        },
        v = {
            sticky: !1,
            showLinks: !0,
            showButtons: !1,
            accountLink: "/",
            logoutLink: "/"
        },
        g = e(f.uiSelectors.allMicrosoftMenu),
        y = {},
        _ = function() {
            var t = e(this).attr("href"),
                n = e(this).data("urls"),
                o = [E(t)];
            return n && e.each(n.split(","), function(t, n) {
                o.push(E(e.trim(n)))
            }), o
        },
        E = function(e) {
            if (!e) return e;
            var t = e.replace(/^(https|http):\/\//, "").replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
            return new RegExp(t, "ig")
        },
        S = function(e, t) {
            var n = a.isRtl();
            null !== e && void 0 !== e && "object" == typeof e && e.css(n ? "left" : "right", t.width() + 15)
        },
        T = function(e, t, n, o) {
            i.on(i.RESIZE, function() {
                i.isMobile() || S(e, t), m(t, n, o)
            })
        };
    ! function() {
        var t = v;
        n.navigation && n.navigation.header && (t = e.extend(v, n.navigation.header)), y.header = t
    }(), y.header.sticky && e("#nav-wrapper").addClass("stickyDesktop"), y.header.showLinks && e("nav").addClass("showLinks"), y.header.showButtons && e("nav").addClass("showButtons"), e("ul.navigationBar li.mainMenuItem a[data-urls]").each(function() {
            if (!0 === function() {
                    var t = o.getLocationHref(),
                        n = _.call(this),
                        i = !1;
                    return e.each(n, function(e, n) {
                        if (null !== t.match(n)) return i = !0, !1
                    }), i
                }.call(this)) return e(this).parent("li.mainMenuItem").addClass("active"), !1
        }),
        function() {
            var o = e("nav .signInDropdownWrapper"),
                i = e("nav #skypeStatus"),
                a = e("#nav-buttons-wrapper"),
                l = e("nav .signInDropdownWrapper [data-element-type='menuDropdownToggle']"),
                c = l.find(".avatarReal"),
                v = l.find(".avatarDummy"),
                g = e("nav .signInDropdownWrapper [data-element-type='subMenu']");
            o.length > 0 && g.length > 0 && (e("html").on("click touchstart", function(t) {
                e("nav").find(".hover").removeClass("hover"), g.attr("aria-expanded", !1)
            }), g.on("touchstart", function(e) {
                e.stopPropagation()
            }), l.click(function(e) {
                e.stopPropagation(), o.toggleClass("hover");
                var n = "false" === g.attr("aria-expanded");
                g.attr("aria-expanded", n), t.closeRecentChats()
            }), c.on("load", function() {
                c.addClass("ready")
            }), r.initialize(), r.on(r.PROFILE_READY, function(t) {
                t && (u.isNullOrUndefined(t.username) || h.logoutSelectors.map(function(t) {
                    e(t).attr("href", y.header.logoutLink)
                }), u.isNullOrUndefined(t.avatarUrl) || (t.avatarUrl == r.DEFAULT_AVATAR ? setTimeout(function() {
                    v.addClass("ready")
                }, 0) : c.attr("src", t.avatarUrl), "true" === n.swcChat.chat && function(t) {
                    var n = e(h.swcChatMenuItem);
                    S(n, t), null !== n && void 0 !== n && "object" == typeof n && (n.addClass("noMobile noSmallMobile"), n.removeClass("hidden"))
                }(o), m(o, i, a)))
            }), r.on(r.PROFILE_ERROR, function(e) {
                var t = e.status || "";
                l.addClass("noAvatar"), s.trackCustomImpressionEvent("nav", "profile_loading_failed_" + t)
            }), T(e(h.swcChatMenuItem), o, i, a), setTimeout(function() {
                f.isV2() && p() && f.customMoreRender()
            }, 1e3), d(o, i, a))
        }()
}), define("apollo/appBanner", ["apollo/mediator", "apollo/topSection", "jquery", "domReady!"], function(e, t, n) {
    "use strict";
    var o = n("html"),
        i = function(e) {
            t.closeBanner(a.jQElement), r("close", e)
        },
        r = function(e, t) {
            a.jQElement.trigger(e, t)
        },
        a = {
            OPEN: "open",
            CLOSE: "close",
            getCloseButton: function() {
                return a.appBannerCloseButtonJQElement
            },
            show: function() {
                o.addClass("app-banner"), t.openBanner(a.jQElement), r("open")
            },
            close: i
        };
    return a.jQElement = n("#appBanner"), a.appBannerCloseButtonJQElement = a.jQElement.find(".closeButton"), e.create(a), a.jQElement.length > 0 && a.appBannerCloseButtonJQElement.on("click", function(e) {
        e.preventDefault(), e.stopPropagation(), i(e)
    }), a
}), define("scom/appBanner/appBanner", ["apollo/cookie", "apollo/document", "apollo/appBanner", "apollo/tracking", "domReady!"], function(e, t, n, o) {
    "use strict";
    var i = "skype-app-banner",
        r = {
            path: "/",
            domain: "." + t.getDomainName(),
            expiry: 864e5
        };
    !e.exists(i) && n.jQElement.length > 0 && (n.on(n.OPEN, function() {
        o.trackElementImpression(n.jQElement)
    }), n.on(n.CLOSE, function(t) {
        t.stopPropagation(), e.createSingleValue(i, 1).store(r)
    }), n.show())
}), define("apollo/navigationBanner", ["apollo/mediator", "apollo/document", "apollo/cookie", "apollo/document", "apollo/window", "apollo/topSection", "domReady!"], function(e, t, n, o, i, r) {
    "use strict";
    var a = {
            path: "/",
            domain: "." + t.getDomainName(),
            expiry: 7776e6
        },
        s = {};
    return s.init = function(t) {
        s.closeButtonJqElement = t.find(".closeButton"), t.length > 0 && (e.create(s), n = t, s.closeButtonJqElement.on("click", function(e) {
            e.preventDefault(), s.close(n, e)
        }), r.watchResponsivity(n));
        var n
    }, s.open = function(e, t) {
        r.openBanner(e), e.trigger("open", t).removeClass("hiddenFocus")
    }, s.close = function(e, t) {
        r.closeBanner(e), e.trigger("close", t).addClass("hiddenFocus")
    }, s.setCookie = function(e, t) {
        var o = n.createSingleValue(e, 1),
            i = function(e) {
                var t = a;
                return t.expiry = e, t
            }(t);
        o.store(i)
    }, s.shouldBeDisplayed = function(e, o, r, a) {
        return ! function(e, t, n) {
            var o = !1;
            return i.hasQuery(e) && (s.setCookie(t, n), o = !0), o
        }(e, o, r) && !n.exists(o) && function(e) {
            var n;
            return void 0 === e || null === e || (n = t.getRegion(), void 0 === n || 0 === n.length || e.indexOf(n.toLowerCase()) > -1)
        }(a)
    }, s.INIT = "init", s.OPEN = "open", s.CLOSE = "close", s
}), define("apollo/cookiePolicy", ["apollo/navigationBanner", "jquery", "domReady!"], function(e, t) {
    "use strict";
    var n = {};
    return n.open = function(t) {
        e.open(n.jQElement, t)
    }, n.jQElement = t("#cookiePolicy"), e.init(n.jQElement), n
}), define("scom/cookiePolicy/cookiePolicy", ["apollo/cookiePolicy", "apollo/navigationBanner", "apollo/tracking", "domReady!"], function(e, t, n) {
    "use strict";
    t.shouldBeDisplayed("cookiePolicy", "skype-cookie-policy", 7776e6, "at,be,bg,hr,cy,cz,dk,ee,fi,fr,de,gr,hu,ie,it,lv,lt,lu,mt,nl,pl,pt,ro,sk,si,es,se,gb,is,li,no") && e.jQElement.length && (e.open(), n.trackElementImpression(e.jQElement), t.setCookie("skype-cookie-policy", 7776e6))
}), define("navigator", [], function() {
    "use strict";
    return navigator
}), define("apollo/navigator", ["navigator"], function(e) {
    "use strict";
    var t = {};
    return t.getUserAgent = function() {
        return e.userAgent
    }, t.getAppName = function() {
        return e.appName
    }, t
}), define("apollo/navigation", ["apollo/navigator", "apollo/document", "apollo/window"], function(e, t, n) {
    "use strict";
    var o = {};
    return o.getBackTarget = function() {
        var e = t.getReferrer(),
            n = "../";
        return /\.skype\.(net|com)/.test(e) && e !== t.getLocationHref() && (n = e), n
    }, o.goBack = function(e) {
        var t = o.getBackTarget();
        o.goTo(t, e)
    }, o.goTo = function(e, n) {
        n && n(e), t.setLocationHref(e)
    }, o.isSafari = function() {
        return -1 !== e.getUserAgent().indexOf("Safari") && -1 === e.getUserAgent().indexOf("Chrome")
    }, o.isChrome = function() {
        var t = e.getUserAgent().toLowerCase();
        return !!window.chrome && /chrom(e|ium)/.test(t) && !/opera|opr/i.test(t) && -1 === t.indexOf("edge")
    }, o.isFirefox = function() {
        return -1 !== e.getUserAgent().toLowerCase().indexOf("firefox")
    }, o.isInternetExplorer = function() {
        var t = e.getUserAgent();
        return -1 !== t.indexOf("MSIE") || -1 !== t.indexOf("Trident/")
    }, o.isEdge = function() {
        return -1 !== e.getUserAgent().indexOf("Edge")
    }, o.isEdgeDesktop = function() {
        return -1 !== e.getUserAgent().toLowerCase().indexOf("nt 10")
    }, o.getVersionOfOldInternetExplorer = function() {
        var t = e.getUserAgent();
        return -1 !== t.indexOf("MSIE") ? parseInt(t.match(/MSIE ([\d.]+)/)[1], 10) : void 0
    }, o.isMac = function() {
        return -1 !== e.getUserAgent().indexOf("Mac")
    }, o.isMacOld = function() {
        if (!o.isMac()) return !1;
        var t = e.getUserAgent().toLowerCase(),
            n = t.match(/mac os x ([._0-9]+)/);
        if (n && n[1]) {
            var i = n[1].split("_");
            1 === i.length && (i = n[1].split("."));
            for (var r = 0; r < i.length; r++) i[r] = parseInt(i[r]);
            if (1 === i.length && i[0] < 10) return !0;
            if (i[0] < 10 || 10 === i[0] && i[1] < 5) return !0;
            if (i[0] > 10 || 10 === i[0] && i[1] > 5) return !1;
            if (3 === i.length && 5 === i[1] && i[2] >= 8) return !1
        } else if (t.match(/(ipad|iphone)/)) return !1;
        return !1
    }, o.isMac10WithMiddleVersion = function(t) {
        var n = e.getUserAgent().toLowerCase(),
            o = new RegExp("mac os x 10_" + t, "g"),
            i = new RegExp("mac os x 10." + t, "g");
        return !(!o.test(n) && !i.test(n))
    }, o.isMac105 = function() {
        return o.isMac10WithMiddleVersion(5)
    }, o.isMac106 = function() {
        return o.isMac10WithMiddleVersion(6)
    }, o.isMac107 = function() {
        return o.isMac10WithMiddleVersion(7)
    }, o.isMac108 = function() {
        return o.isMac10WithMiddleVersion(8)
    }, o.isMac109 = function() {
        return o.isMac10WithMiddleVersion(9)
    }, o.isWebkit = function() {
        return -1 !== e.getUserAgent().indexOf("WebKit")
    }, o.isTouchEnabledBrowser = function() {
        var e = n.jQElement[0],
            o = t.jQElement[0],
            i = e.DocumentTouch;
        return void 0 !== e.ontouchend || i && o instanceof i
    }, o.browserType = {
        CHROME: "Chrome",
        IE: "IE",
        OPERA: "Opera",
        EDGE: "Edge"
    }, o.getBrowserInfo = function() {
        var e, t = navigator.userAgent,
            n = t.match(/(opera|chrome|safari|firefox|msie|trident|edge(?=\/))\/?\s*(\d+)(\.\d+)+/i) || [];
        return /trident/i.test(n[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [], {
            name: o.browserType.IE,
            version: e[1] || ""
        }) : "Chrome" === n[1] && (e = t.match(/\bOPR\/(\d+)/), null != e) ? {
            name: o.browserType.OPERA,
            version: e[1]
        } : null != (e = t.match(/\bEdge\/(\d+(.\d+)+)/i)) ? {
            name: o.browserType.EDGE,
            version: e[1]
        } : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && n.splice(1, 1, e[1]), {
            name: n[0],
            version: n[1]
        })
    }, o
}), define("apollo/device", ["jquery", "document", "apollo/window", "apollo/navigation"], function(e, t, n, o) {
    "use strict";
    var i = "windows_au_undetected",
        r = "windows_au_none",
        a = n.getUserAgent(),
        s = {
            WINDOWS: "windows",
            WINDOWS_AU_UNDETECTED: i,
            WINDOWS_AU_NONE: r,
            WINDOWS_AU: "windows_au",
            WINDOWS_XP: "windows_xp",
            WINDOWS_VISTA: "windows_vista",
            WINDOWS_7: "windows_7",
            WINDOWS_8: "windows_8",
            MAC: "mac",
            MAC_OS_X_10_9_LOWER: "mac_os_x_10_9_lower",
            MAC_OS_X_10_10_HIGHER: "mac_os_x_10_10_higher",
            LINUX: "linux",
            LINUX_DEBIAN: "linux_debian",
            LINUX_RPM: "linux_rpm",
            ANDROID: "android",
            IOS: "ios",
            BLACKBERRY: "blackberry",
            MOBILE: "mobile",
            DESKTOP: "desktop",
            IPOD: "ipod",
            IPAD: "ipad",
            IPHONE: "iphone",
            getPlatform: function() {
                var e = "unknown";
                return a.match(/windows/i) ? e = "windows" : a.match(/macintosh/i) ? e = "mac" : a.match(/android/i) ? e = "android" : a.match(/linux/i) ? e = "linux" : a.match(/iphone|ipad|ipod/i) ? e = "ios" : a.match(/blackberry/i) && (e = "blackberry"), e
            },
            getIosPlatform: function() {
                var e = "unknown";
                return a.match(/iphone/i) ? e = "iphone" : a.match(/ipad/i) ? e = "ipad" : a.match(/ipod/i) && (e = "ipod"), e
            },
            getBrowser: function() {
                var e = "unknown";
                return a.match(/CriOS/i) ? e = "chrome" : a.match(/safari/i) && (e = "safari"), e
            },
            getDevice: function() {
                return this.isMobilePlatform() ? "mobile" : "desktop"
            },
            isMobilePlatform: function() {
                var t = this.getPlatform(),
                    n = !1;
                return (e.inArray(t, ["android", "ios", "blackberry"]) > -1 || "windows" === t && a.match(/phone|iemobile/i)) && (n = !0), n
            },
            isDesktopPlatform: function() {
                return e.inArray(s.getPlatform(), [s.WINDOWS, s.MAC, s.LINUX]) > -1
            },
            getWindowsSpecificPlatform: function() {
                var e, n = (e = a, e.indexOf("Windows NT 5.1") > -1 || e.indexOf("Windows NT 5.2") > -1 ? "windows_xp" : e.indexOf("Windows NT 6.0") > -1 ? "windows_vista" : e.indexOf("Windows NT 6.1") > -1 ? "windows_7" : e.indexOf("Windows NT 6.2") > -1 || e.indexOf("Windows NT 6.3") > -1 ? "windows_8" : void 0);
                if (void 0 !== n) return n;
                if (o.isChrome()) {
                    var s = t.createElement("canvas").getContext("2d");
                    s.font = "64px Segoe UI Emoji", s.measureText("🐱‍👤").width, s.measureText("👨‍⚕").width;
                    var l = s.measureText("🧛🏻").width;
                    return -1 === a.indexOf("Windows NT") ? i : l <= 90 ? "windows_au" : r
                }
                if (o.isEdge()) {
                    var c = new RegExp("edge/([0-9]+)", "gi").exec(a);
                    return null === c || 2 !== c.length ? i : parseInt(c[1], 10) >= 17.17 ? "windows_au" : r
                }
                return i
            },
            getLinuxSpecificPlatform: function() {
                if ("linux" === this.getPlatform()) return -1 != a.indexOf("Debian") || -1 != a.indexOf("Ubuntu") ? "linux_debian" : "linux_rpm"
            },
            getMacOsSpecificPlatform: function() {
                if ("mac" === this.getPlatform()) return e = a, e.match(/(Mac OS X 10[_|\.][0-9]([_|\.]|\D))/) ? "mac_os_x_10_9_lower" : e.match(/(Mac OS X 10[_|\.]10)/) ? "mac_os_x_10_10_higher" : void 0;
                var e
            }
        };
    return s
}), define("apollo/clientOsDetection", ["jquery", "apollo/device"], function(e, t) {
    "use strict";
    var n = t.getPlatform(),
        o = t.getBrowser(),
        i = function() {
            var i = null,
                r = e("html");
            switch (o) {
                case "safari":
                    r.addClass("safari");
                    break;
                case "chrome":
                    r.addClass("chrome")
            }
            switch (n) {
                case t.WINDOWS:
                    i = t.getWindowsSpecificPlatform(), r.hasClass("os_Windows10") ? i === t.WINDOWS_AU || i === t.WINDOWS_10_REDSTONE_2 ? r.addClass("os_Windows10_AU") : i === t.WINDOWS_AU_NONE ? r.addClass("os_Windows10_AU_None") : r.addClass("os_Windows10_AU_Undetected") : (i === t.WINDOWS_XP ? r.addClass("os_Windows_XP") : i === t.WINDOWS_VISTA && r.addClass("os_Windows_Vista"), r.addClass("os_noWindows10"));
                    break;
                case t.MAC:
                    r.addClass("os_noWindows");
                    var a = t.getMacOsSpecificPlatform();
                    null !== a && void 0 !== a && (a === t.MAC_OS_X_10_9_LOWER ? r.addClass("os_macos_10_9_lower") : a === t.MAC_OS_X_10_10_HIGHER && r.addClass("os_macos_10_10_higher"));
                    break;
                default:
                    r.addClass("os_noWindows")
            }
        };
    return i(), {
        init: i
    }
}), define("apollo/stopWatches", ["window", "artemis/common/null-checkers", "artemis/common/pluck"], function(e, t, n) {
    "use strict";
    var o = {
            defaultKey: "initial"
        },
        i = n.pluck(e, "EXTERNAL_STORAGE", "stopWatches");
    return {
        CONSTS: o,
        create: function(e) {
            return {
                get: function(e) {
                    if (t.isNullOrUndefined(e)) throw new Error("stopWatcher requires container key");
                    return function(r) {
                        return t.isNullOrUndefined(r) ? i : r === o.defaultKey ? n.pluck(i, e, r) : n.pluck(i, e, "stops", r)
                    }
                }(e),
                set: function(e) {
                    if (t.isNullOrUndefined(e)) throw new Error("stopWatcher requires container key");
                    return function(t, n) {
                        return t !== o.defaultKey ? (i[e].stops[t] = n, i[e].stops[t] - i[e][o.defaultKey]) : void(i[e][t] = n)
                    }
                }(e)
            }
        }
    }
}), define("apollo/slowLoadDetection", ["artemis/common/null-checkers", "artemis/common/pluck", "apollo/stopWatches", "apollo/mediator"], function(e, t, n, o) {
    "use strict";
    var i, r = {
            slowLoad: "slowLoad",
            externalSlowLoad: "externalSlowLoad"
        },
        a = o.asReplay(o.create()),
        s = n.create("fromStart");
    return {
        init: function(o, l) {
            e.isNullOrUndefined(t.pluck(o, "slowLoad")) && (o.slowLoad = !1);
            var c = function(t, o, i) {
                var r = t;
                return e.isNullOrUndefined(i) || (r = t - (o - s.get(n.CONSTS.defaultKey))), r - 1
            }(l, (new Date).getTime(), o);
            return c <= 0 && !0 === o.externalHeroRender ? void a.trigger(r.externalSlowLoad, !0) : void(i = setTimeout(function() {
                a.trigger(r.slowLoad, !0)
            }, c))
        },
        EVENTS: r,
        clear: function() {
            clearTimeout(i)
        },
        on: a.on.bind(a)
    }
}), define("apollo/navigationBar.NavigationLink", ["apollo/keycodes", "apollo/responsive", "jquery", "apollo/navigationBar", "apollo/window", "apollo/hash", "window"], function(e, t, n, o, i, r, a) {
    "use strict";
    var s = function(e) {
        this.jQElement = n(e)
    };
    s.prototype.attachNavigationLinkEventHandlers = function() {
        var e = this;
        e.jQElement.off("keydown.keyboardNavigation").on("keydown.keyboardNavigation", function(t) {
            e.getKeycodeEventHandlerAndInvoke(t)
        }), e.jQElement.off("click").on("click", function(t) {
            if (t.stopImmediatePropagation(), e.click) return e.click(t)
        }), this.jQElement.hasClass("skypeLogo") && this.jQElement.find("a").off("focus").on("focus", function() {
            e.jQElement.hasClass("hover") || (o.removeHover(), e.jQElement.addClass("hover"))
        }), this.jQElement.hasClass("signInDropdownWrapper") && this.jQElement.attr("tabindex", "0")
    }, s.prototype.getKeycodeEventHandler = function(t) {
        var n, o = t.which;
        return o === e.ENTER || (t.stopImmediatePropagation(), o === e.TAB && t.shiftKey && (o = e.SHIFT_TAB), n = this[o]), n
    }, s.prototype.getKeycodeEventHandlerAndInvoke = function(e) {
        var t, n = this.getKeycodeEventHandler(e);
        return n && (t = n.call(this, e)), t
    }, s.prototype.focus = function() {
        o.removeHover();
        var e = n(".skype-recents");
        if (u(this.jQElement)) {
            var t = this.jQElement.parents(".mainMenuItem");
            t.addClass("hover"), t.find("[role='menu']").attr("aria-expanded", !0), "visible" === e.attr("data-status") && (e.attr("data-status", "invisible"), n(".skypeChat").attr("data-bi-scn", "open"))
        } else this.jQElement.find("[role='menu']").attr("aria-expanded", !0);
        this.jQElement.addClass("hover").find("a:visible").first().focus()
    }, s.prototype.hasSubMenu = function() {
        return c(this.jQElement)
    }, s.prototype.isParent = function() {
        return l(this.jQElement)
    }, s.prototype[e.TAB] = function(e) {
        if (e.preventDefault(), this.jQElement.hasClass("openMenu")) o.transferFocusToContentAfterNavigation();
        else {
            var t = this.getNextVisible();
            t ? (t.hasSubMenu() && (t = t.getNext()), t.focus()) : o.transferFocusToContentAfterNavigation()
        }
    }, s.prototype[e.SHIFT_TAB] = function(e) {
        var t = this.getPreviousVisible(),
            i = n("nav .signInDropdownWrapper")[0];
        t ? (t.jQElement.context === i ? e.stopPropagation() : e.preventDefault(), t.hasSubMenu() && (t = new s(t.jQElement.find("li:last"))), t.focus()) : void 0 !== o.transferFocusToContentBeforeNavigation() && e.preventDefault()
    }, s.prototype.getNext = function(e) {
        var t = this.jQElement;
        e = e || 1;
        for (var n = 0; n < e; ++n)
            if (c(t)) t = t.find(".subMenu li:first");
            else {
                var o = t.next("li");
                if (o.length && !this.isVisible(o) && (o = o.next("li"), n += 1), o.length) t = o;
                else {
                    if (e > 1) break;
                    if (!u(t)) {
                        t = void 0;
                        break
                    }
                    if (!(o = t.parents(".mainMenuItem").next("li")).length) {
                        t = void 0;
                        break
                    }
                    t = o
                }
            } return t ? new s(t) : void 0
    }, s.prototype.getPrevious = function(e) {
        var t = this.jQElement;
        e = e || 1;
        for (var n = 0; n < e; ++n) {
            var o = t.prev("li");
            if (o.length && !this.isVisible(o) && (o = o.prev("li"), n += 1), o.length) t = c(o) ? o.find(".subMenu li:last") : o;
            else {
                if (e > 1) break;
                if (!u(t)) {
                    t = void 0;
                    break
                }
                var i = t.parents(".mainMenuItem").prev("li");
                if (!i.length) {
                    t = void 0;
                    break
                }
                t = c(i) ? i.find(".subMenu li:last") : i
            }
        }
        return t ? new s(t) : void 0
    }, s.prototype.focusNext = function(e) {
        var t = this.getNext(e);
        t && t.focus()
    }, s.prototype.focusPrevious = function(e) {
        var t = this.getPrevious(e);
        t && t.focus()
    }, s.prototype.getNextTopLevelNavigationLink = function() {
        var e = this.jQElement;
        return u(e) && (e = e.parents(".mainMenuItem")), (e = e.next("li")).length ? new s(e) : void 0
    }, s.prototype.getNextVisibleTopLevelNavigationLink = function() {
        for (var e = this.getNextTopLevelNavigationLink(); e && !e.isVisibleInCurrentResponsiveState();) e = e.getNextTopLevelNavigationLink();
        return e
    }, s.prototype.getPreviousTopLevelNavigationLink = function() {
        var e = this.jQElement;
        return (e = u(e) ? e.parents(".mainMenuItem") : e.prev("li")).length ? new s(e) : void 0
    }, s.prototype.getPreviousVisibleTopLevelNavigationLink = function() {
        for (var e = this.getPreviousTopLevelNavigationLink(); e && !e.isVisibleInCurrentResponsiveState();) e = e.getPreviousTopLevelNavigationLink();
        return e
    }, s.prototype.getPreviousVisible = function() {
        for (var e = this.getPrevious(); e && !e.isVisibleInCurrentResponsiveState();) e = e.getPrevious();
        return e
    }, s.prototype.getNextVisible = function() {
        for (var e = this.getNext(); e && !e.isVisibleInCurrentResponsiveState();) e = e.getNext();
        return e
    }, s.prototype.isVisibleInCurrentResponsiveState = function() {
        var e = t.isVisible(this.jQElement);
        return e && f(this.jQElement) && (e = this.jQElement.is(":visible")), e
    }, s.prototype.isVisible = function(e) {
        var t = e || this.jQElement;
        return !!t.length && t.is(":visible")
    }, s.onHashChangeEventHandler = function(e) {
        if ("endNavigation" === e) {
            i.clearHash();
            var t = o.transferFocusToContentAfterNavigation();
            t && function(e) {
                var n = t.offset().top,
                    i = document.getElementById("s4lHeader");
                o.isSticky() && (n -= o.height()), a.scrollTo(0, n), null !== i && (i.style.position = "static")
            }()
        }
    };
    var l = function(e) {
            return c(e)
        },
        c = function(e) {
            return !!n(e).find(".subMenu").length
        },
        u = function(e) {
            return !!n(e).parents(".mainMenuItem").length
        },
        f = function(e) {
            var t = n(e);
            return t.hasClass("account") || t.hasClass("mainMenuButton")
        };
    return r.on("change init", s.onHashChangeEventHandler), s.OPEN_MENU_CLASS = "openMenu", s.CLOSE_MENU_CLASS = "closeMenu", s.HOVER_CLASS = "hover", s
}), define("apollo/navigationBar.ChildNavigationLink", ["apollo/navigationBar", "apollo/navigationBar.NavigationLink", "apollo/keycodes", "apollo/localisation", "apollo/responsive", "apollo/window", "jquery", "apollo/util"], function(e, t, n, o, i, r, a) {
    "use strict";
    var s = function(e) {
        t.call(this, e), this.attachNavigationLinkEventHandlers()
    };
    return s.prototype = Object.create(t.prototype), s.constructor = s, s.prototype.click = function(e) {
        e.preventDefault(), this.redirect()
    }, s.prototype.redirect = function() {
        var e = this.jQElement.find("a").attr("href");
        e && r.redirect(e)
    }, s.prototype.focus = function() {
        a(".hover").removeClass(t.HOVER_CLASS);
        var e = this.getParent();
        e.jQElement.addClass(t.HOVER_CLASS), e.jQElement.find("[role='menu']").attr("aria-expanded", !0), t.prototype.focus.call(this)
    }, s.prototype.getParent = function() {
        return this.getPreviousTopLevelNavigationLink()
    }, s.prototype[n.ESCAPE] = function() {
        this.getParent().focus()
    }, s.prototype[n.LEFT_ARROW] = function() {
        o.isRtl() ? this.rightArrowHandler() : this.leftArrowHandler()
    }, s.prototype[n.RIGHT_ARROW] = function() {
        o.isRtl() ? this.leftArrowHandler() : this.rightArrowHandler()
    }, s.prototype[n.UP_ARROW] = function(e) {
        if (e.preventDefault(), this.isFirst()) {
            var t = this.jQElement.nextAll().length;
            this.focusNext(t)
        } else this.focusPrevious()
    }, s.prototype[n.DOWN_ARROW] = function(e) {
        if (e.preventDefault(), this.isLast()) {
            var t = this.jQElement.prevAll().length;
            this.focusPrevious(t)
        } else this.focusNext()
    }, s.prototype.leftArrowHandler = function() {
        var e = this.getParent().getPreviousVisibleTopLevelNavigationLink();
        e && (e.hasSubMenu() && (e = e.getNext()), e.focus())
    }, s.prototype.rightArrowHandler = function() {
        var e = this.getNextVisibleTopLevelNavigationLink();
        e && (e.hasSubMenu() && (e = e.getNext()), e.focus())
    }, s.prototype.isLast = function() {
        var e = this.jQElement.next("li");
        return 0 === e.length || (e.is(":hidden") && (e = e.next("li")), !e.length)
    }, s.prototype.isFirst = function() {
        var e = this.jQElement.prev("li");
        return 0 === e.length || (e.is(":hidden") && (e = e.prev("li")), !e.length)
    }, s.findAll = function() {
        return e.jQElement.find(".mainMenuItem .subMenu > li").map(function(e, t) {
            return new s(t)
        })
    }, s
}), define("apollo/navigationBar.TopLevelNavigationLink", ["apollo/navigationBar", "apollo/navigationBar.NavigationLink", "apollo/navigationBar.ChildNavigationLink", "apollo/keycodes", "apollo/localisation", "jquery", "apollo/util"], function(e, t, n, o, i, r) {
    "use strict";
    var a = function(e) {
        t.call(this, e)
    };
    return a.prototype = Object.create(t.prototype), a.constructor = a, a.prototype.focus = function() {
        r(".hover").each(function() {
            var e = r(this);
            e.removeClass(t.HOVER_CLASS), e.find("[role='menu']").attr("aria-expanded", !1)
        }), t.prototype.focus.call(this)
    }, a.prototype[o.RIGHT_ARROW] = function() {
        i.isRtl() ? this.leftArrowHandler() : this.rightArrowHandler()
    }, a.prototype[o.LEFT_ARROW] = function() {
        i.isRtl() ? this.rightArrowHandler() : this.leftArrowHandler()
    }, a.prototype.rightArrowHandler = function() {
        var e = this.getNextVisibleTopLevelNavigationLink();
        e && !e.isVisible() && (e = this.getNextVisibleTopLevelNavigationLink()), e && e.focus()
    }, a.prototype.leftArrowHandler = function() {
        var e = this.getPreviousVisibleTopLevelNavigationLink();
        e && !e.isVisible() && (e = this.getPreviousVisibleTopLevelNavigationLink()), e && e.focus()
    }, a
}), define("apollo/navigationBar.SingleNavigationLink", ["apollo/navigationBar", "apollo/navigationBar.TopLevelNavigationLink", "apollo/util"], function(e, t) {
    "use strict";
    var n = function(e) {
        t.call(this, e), this.attachNavigationLinkEventHandlers()
    };
    return n.prototype = Object.create(t.prototype), n.constructor = n, n.findAll = function() {
        return e.jQElement.find(".singleItem, .home").map(function(e, t) {
            return new n(t)
        })
    }, n
}), define("apollo/navigationBar.MobileMenuNavigationLink", ["apollo/navigationBar", "apollo/navigationBar.NavigationLink", "apollo/navigationBar.TopLevelNavigationLink", "apollo/responsive", "apollo/mediator", "jquery", "domReady!", "apollo/util"], function(e, t, n, o, i, r) {
    "use strict";
    var a = r(".openMenu, .closeMenu"),
        s = function(e, t) {
            a.trigger(e, t)
        },
        l = function() {
            if (!u()) {
                var t = r(document).height(),
                    n = r(window).height(),
                    o = t > n ? t : n;
                e.jQElement.height(o)
            }
        },
        c = function(t) {
            r("body").removeClass(e.GLOBAL_NAV_OPEN_CLASS), e.getNavigationContainer().removeClass(e.NAV_OPEN_CLASS);
            var n = e.jQElement[0];
            void 0 !== n && (n.style.height = "", s("close", t))
        },
        u = function() {
            return e.jQElement.attr("data-nav-short")
        },
        f = function(e) {
            n.call(this, e), this.attachNavigationLinkEventHandlers()
        };
    return f.OPEN = "open", f.CLOSE = "close", f.prototype = Object.create(n.prototype), f.constructor = f, f.prototype.click = function(t) {
        t.preventDefault();
        var n;
        this.isOpener() ? (o = t, r("body").addClass(e.GLOBAL_NAV_OPEN_CLASS), e.getNavigationContainer().addClass(e.NAV_OPEN_CLASS), l(), s("open", o), n = this.getNextVisible()) : this.isCloser() && (c(t), n = this.getPreviousVisible()), n && n.focus();
        var o
    }, f.prototype.isOpener = function() {
        return this.jQElement.hasClass(t.OPEN_MENU_CLASS)
    }, f.prototype.isCloser = function() {
        return this.jQElement.hasClass(t.CLOSE_MENU_CLASS)
    }, f.onResponsiveChangeCallback = function(t) {
        t.current !== o.MOBILE && (e.removeHover(), c())
    }, f.onResponsiveResizeCallback = function() {
        e.isMobileMenuOpen() && l()
    }, f.findAll = function() {
        return e.jQElement.find(".openMenu, .closeMenu").map(function(e, t) {
            return new f(t)
        })
    }, o.on(o.CHANGE, f.onResponsiveChangeCallback), o.on(o.RESIZE, f.onResponsiveResizeCallback), f.jQElement = a, i.create(f), f
}), define("apollo/navigationBar.ParentNavigationLink", ["apollo/navigationBar", "apollo/navigationBar.TopLevelNavigationLink", "apollo/keycodes", "apollo/util"], function(e, t, n) {
    "use strict";
    var o = function(e) {
        t.call(this, e), this.attachNavigationLinkEventHandlers()
    };
    return o.prototype = Object.create(t.prototype), o.constructor = o, o.prototype.click = function(e) {
        return e.preventDefault(), !1
    }, o.prototype.getChildCount = function() {
        return this.jQElement.find("li").length
    }, o.prototype[n.DOWN_ARROW] = function(e) {
        e && e.preventDefault(), this.focusNext()
    }, o.findAll = function() {
        return e.jQElement.find(".mainMenuItem:not(.singleItem)").map(function(e, t) {
            return new o(t)
        })
    }, o
}), define("apollo/navigationBar.NavigationBar", ["domReady!", "apollo/navigationBar.SingleNavigationLink", "apollo/navigationBar.MobileMenuNavigationLink", "apollo/navigationBar.ParentNavigationLink", "apollo/navigationBar.ChildNavigationLink"], function(e, t, n, o, i) {
    "use strict";
    var r = function(e, t) {
        for (var n = 0; n < e.length; ++n) t.unshift(e[n])
    };
    return function() {
        this.navigationItems = [],
            function() {
                this.navigationItems = [], r(n.findAll(), this.navigationItems), r(i.findAll(), this.navigationItems), r(o.findAll(), this.navigationItems), r(t.findAll(), this.navigationItems)
            }.call(this)
    }
}), define("apollo/accessibility", ["apollo/keycodes", "jquery"], function(e, t) {
    "use strict";
    var n = function(e, n, o) {
        t(e).on("keydown click", function(e) {
            if (e.which === n || "click" === e.type) return e.preventDefault(), o(e), !1
        })
    };
    return {
        bindAccessibleClick: function(t, o) {
            n(t, e.ENTER, o)
        },
        bindAccessibleClickWithKey: n,
        setVisibility: function(e, n) {
            var o = t(e);
            n ? (o.removeClass("hidden"), o.removeAttr("aria-hidden")) : (o.addClass("hidden"), o.attr("aria-hidden", "true"))
        },
        enableOrDisableElement: function(e, n) {
            var o = t(e);
            n ? (o.removeAttr("disabled"), o.removeAttr("aria-disabled")) : (o.attr("disabled", !0), o.attr("aria-disabled", "true"))
        },
        setExpandedState: function(e, n) {
            t(e).attr("aria-expanded", n)
        },
        setLabelledBy: function(e, n) {
            t(e).attr("aria-labelledby", n)
        },
        setDescribedBy: function(e, n) {
            t(e).attr("aria-describedby", n)
        },
        setValidity: function(e, n) {
            var o = t(e);
            n ? o.removeAttr("aria-invalid") : o.attr("aria-invalid", "true")
        }
    }
}), define("apollo/autoScroll", ["apollo/accessibility", "apollo/scroll", "jquery", "domReady!"], function(e, t, n) {
    "use strict";
    return {
        setupScrollHandlers: function(o) {
            var i = n(o ? o + " [data-scroll-to]" : "[data-scroll-to]");
            n.each(i, function() {
                var o = n(this),
                    i = o.data("scroll-to"),
                    r = o.data("postscroll-focus");
                i && n(i).length > 0 && e.bindAccessibleClick(o, function() {
                    e = i, o = r, new t.ScrollTarget(e).smoothTo({
                        complete: function() {
                            o ? n(o).focus() : e.focus()
                        }
                    });
                    var e, o
                })
            })
        }
    }
}), require(["jquery", "domReady!", "apollo/scroll", "apollo/user", "scom/navigation/navigation", "scom/appBanner/appBanner", "scom/cookiePolicy/cookiePolicy"]), require(["apollo/clientOsDetection"]), require(["jquery", "apollo/navigation", "scom/globalEvents", "scom/newSkype/swcChat", "apollo/slowLoadDetection", "artemis/common/pluck", "apollo/user.token.consts"], function(e, t, n, o, i, r, a) {
    "use strict";
    ([o.CONSTS.SWC_CORE_READY_EVENT, a.CONSTS.SILENT_RESPONSE_EVENT] || []).forEach(function(e) {
        ! function(e) {
            window.addEventListener(e, function(t) {
                n.trigger(e, t)
            });
            var t = window.GLOBAL_EVENTS_STORAGE[e];
            null !== t && void 0 !== t && ((t.listeners || []).forEach(function(t) {
                window.removeEventListener(e, t)
            }), t.events && t.events.length > 0 && (t.events || []).forEach(function(e) {
                window.dispatchEvent(e)
            })), delete window.GLOBAL_EVENTS_STORAGE[e]
        }(e)
    }), i.init(r.pluck(window, "EXTERNAL_STORAGE"), r.pluck(window, "SKYPE_SETTINGS", "slowLoadTimeout") || 5e3), t.isInternetExplorer() && void 0 !== t.getVersionOfOldInternetExplorer() && e("html").addClass("ie" + t.getVersionOfOldInternetExplorer()), e(".siteNavigation").length && require(["apollo/navigationBar.NavigationBar"], function(e) {
        new e
    })
}), require(["apollo/autoScroll"], function(e) {
    "use strict";
    e.setupScrollHandlers()
}), define("scom/main", [], function() {}), define("apollo/user.LanguageSelector", ["apollo/user", "apollo/ajax", "apollo/navigation", "apollo/window", "jquery"], function(e, t, n, o, i) {
    "use strict";
    var r = function(e) {
        this.jQElement = i(e)
    };
    return r.prototype.getSelectDropDown = function() {
        return this.jQElement.find("select")
    }, r.prototype.getLabel = function() {
        return this.jQElement.find("label")
    }, r.prototype.getOptions = function() {
        return this.getSelectDropDown().find("option").map(function() {
            return new r.Option(this)
        })
    }, r.prototype.getUrl = function() {
        var e = this.jQElement.find("form");
        return e.length ? e.attr("action") : this.jQElement.find("[data-action]").data("action")
    }, (r.Option = function(e) {
        this.jQElement = i(e)
    }).prototype.getLanguageSelector = function() {
        var e = this.jQElement.parents(".languageSelector");
        return new r(e)
    }, r.Option.prototype.getText = function() {
        return this.jQElement.text()
    }, r.Option.prototype.getValue = function() {
        return this.jQElement.val()
    }, r.Option.prototype.getLanguageCode = function() {
        return this.jQElement.attr("lang")
    }, r.Option.prototype.getUrl = function() {
        var e = this.getLanguageSelector(),
            t = e.getUrl(),
            n = this.getLanguageCode(),
            i = e.getSelectDropDown().attr("name"),
            r = new RegExp("([?&])" + i + "=([^&]*)");
        return "/${LC}" === t && (t = o.getPath().replace(/^\/[a-zA-z]+(\-[a-zA-z]+)?\//, "/${LC}/")), -1 !== t.search("\\${LC}") ? t.replace("${LC}", n) : t.match(r) ? t.replace(r, "$1" + i + "=" + n) : t + (t.match(/\?/) ? "&" : "?") + i + "=" + n
    }, r.Option.prototype.setAsUserLanguage = function() {
        var t = this.getLanguageCode();
        return e.setLanguageCode(t), this
    }, r.Option.prototype.setAsUserLanguageAndRedirect = function(e) {
        var t = this.getUrl();
        return this.setAsUserLanguage(), n.goTo(t, e), this
    }, r
}), define("apollo/accessibility.Select", ["apollo/keycodes", "apollo/navigation", "apollo/document", "apollo/window", "apollo/mediator", "jquery"], function(e, t, n, o, i, r) {
    "use strict";
    var a = !1,
        s = !0,
        l = function() {
            var e = this;
            setTimeout(function() {
                var t = e.lastSelectedIndex != e.domElement.selectedIndex;
                e.lastSelectedIndex = e.domElement.selectedIndex, e.jQElement.trigger(T.SUBMISSION, [e.domElement.selectedIndex, t])
            }, 0)
        },
        c = function() {
            this.jQElement.trigger(T.UPDATE_LABEL, this.domElement.options[this.domElement.selectedIndex].innerHTML)
        },
        u = function() {
            var e = this;
            this.jQElement.on(T.POPUP_CLOSED, function() {
                c.call(e)
            })
        },
        f = function() {
            var n = this;
            this.jQElement.on("keydown", function(o) {
                c.call(n);
                var i = o.charCode || o.keyCode || o.which,
                    r = !1;
                if (o.altKey && e.isUpOrDownArrow(i)) t.isInternetExplorer() || t.isFirefox() ? g.call(n) : n.isPopUpOpen() || y.call(n);
                else if (e.isUpOrDownArrow(i)) r = !0;
                else if (i === e.ENTER)
                    if (o.stopImmediatePropagation(), n.isPopUpOpen() || a) {
                        var u = n.isPopUpOpen();
                        _.call(n), l.call(n), u || o.preventDefault()
                    } else y.call(n);
                else i === e.ESCAPE && n.isPopUpOpen() && _.call(n);
                s ? (a = r, s = !1) : a = a && r
            })
        },
        d = function() {
            var e = this;
            this.jQElement.on("keypress", function() {
                c.call(e)
            })
        },
        p = function() {
            var t = this;
            this.jQElement.on("keyup", function(n) {
                var o = !0,
                    i = n.charCode || n.keyCode || n.which;
                i === e.ENTER ? (n.stopImmediatePropagation(), t.isPopUpOpen() || a ? (_.call(t), l.call(t)) : y.call(t)) : i === e.ESCAPE && (o = !1, t.isPopUpOpen() && _.call(t)), o && c.call(t)
            })
        },
        m = function() {
            var t = this;
            n.jQElement.on("mouseup", function(e) {
                a = !1, s = !0, e.target !== t.jQElement[0] && _.call(t)
            }).on("keypress keyup keydown", function(n) {
                if (n.target !== t.jQElement[0]) {
                    var o = n.charCode || n.keyCode || n.which;
                    e.isUpOrDownArrow(o) || o === e.ALT || (a = !1, s = !0, g.call(t))
                }
            })
        },
        h = function() {
            var e = this;
            o.jQElement.on("focus blur", function() {
                _.call(e)
            })
        },
        v = function(e) {
            var t = this.isPopUpOpen();
            t && !e ? S.call(this) : !t && e && E.call(this), this._open = e
        },
        g = function() {
            v.call(this, !this._open)
        },
        y = function() {
            v.call(this, !0)
        },
        _ = function() {
            v.call(this, !1)
        },
        E = function() {
            this.jQElement.trigger(T.POPUP_OPEN)
        },
        S = function() {
            this.jQElement.trigger(T.POPUP_CLOSED)
        },
        T = function(e) {
            this.jQElement = r(e), this.domElement = this.jQElement[0], this.lastSelectedIndex = this.domElement.selectedIndex, i.create(this),
                function() {
                    this._open = !1,
                        function() {
                            var e = this;
                            this.jQElement.on("mouseup", function(n) {
                                c.call(e), (t.isSafari() || t.isMac() && t.isWebkit() || e.isPopUpOpen()) && l.call(e), g.call(e), n.stopImmediatePropagation()
                            })
                        }.call(this),
                        function() {
                            u.call(this)
                        }.call(this),
                        function() {
                            f.call(this), d.call(this), p.call(this)
                        }.call(this),
                        function() {
                            var e = this;
                            this.jQElement.on("change", function(n) {
                                t.isMac() && t.isWebkit() ? l.call(e) : (n.stopPropagation(), n.preventDefault())
                            })
                        }.call(this),
                        function() {
                            m.call(this), h.call(this)
                        }.call(this)
                }.call(this)
        };
    return T.prototype.isPopUpOpen = function() {
        return !t.isSafari() && this._open
    }, T.prototype.getOptions = function() {
        return this.jQElement.find("option").map(function() {
            return r(this)
        }).get()
    }, T.prototype.setSelectedOption = function(e) {
        var t = !1;
        this.jQElement.find("option").filter(function() {
            if (r(this).text() == e) return t = !0, !0
        }).prop("selected", !0), this.lastSelectedIndex = t ? this.domElement.selectedIndex : -1
    }, T.POPUP_OPEN = "popupopen", T.POPUP_CLOSED = "popupclosed", T.UPDATE_LABEL = "updatelabel", T.SUBMISSION = "submission", T.FOCUS = "focus", T.BLUR = "blur", T._updateLabel = c, T._submission = l, T
}), define("apollo/footer", ["apollo/user.LanguageSelector", "apollo/accessibility.Select", "jquery", "domReady!"], function(e, t, n) {
    "use strict";
    var o = function() {
        return !0
    };
    document.querySelectorAll(".languageSelector").length && function() {
        var i = new e(".languageSelector"),
            r = new t(i.getSelectDropDown()),
            a = i.getLabel(),
            s = n("#pickedLanguage");
        r.setSelectedOption(s.text()), r.on(t.SUBMISSION, function(e, t, n) {
            n && (i.getOptions()[t].setAsUserLanguageAndRedirect(), o(this))
        }).on(t.UPDATE_LABEL, function(e, t) {
            s.text(t)
        }).on(t.FOCUS, function() {
            a.addClass("open")
        }).on(t.BLUR, function() {
            a.removeClass("open")
        })
    }()
}), define("scom/uhfFooter", ["jquery", "domReady!", "apollo/footer"], function(e) {
    "use strict";
    ! function() {
        var t = e("#locale-picker-link"),
            n = e(".languageSelector");
        t && n && t.replaceWith(n)
    }()
}), define("apollo/util.string", [], function() {
    "use strict";
    return {
        escapeHtml: function(e) {
            return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\//g, "&#x2F;")
        }
    }
}), define("apollo/displayName", ["apollo/cookie", "apollo/user.token", "apollo/user.profile", "apollo/ajax", "apollo/navigationBar", "apollo/settings", "apollo/util.string", "apollo/navigation", "jquery", "domReady!"], function(e, t, n, o, i, r, a, s, l) {
    "use strict";
    var c, u = {},
        f = r.api.sessionApiUrl,
        d = i.getNavigationContainer(),
        p = function() {
            var e = s.getVersionOfOldInternetExplorer(),
                o = !!e && e < 10;
            w("tokenFail", m), i.isNewNavigation() ? o ? m() : (n.initialize(), n.on(n.PROFILE_READY, y), n.on(n.PROFILE_ERROR, _)) : t.on(t.EVENTS.READY, function(e) {
                var t = e.skypetoken;
                t && h(t)
            })
        },
        m = function() {
            if (e.exists("skype-session-token")) {
                var t = e.getSingleValue("skype-session-token").get();
                "" !== t && v(t)
            }
        },
        h = function(e) {
            o.get({
                url: f,
                headers: {
                    "X-Skypetoken": e
                },
                success: g,
                error: _
            })
        },
        v = function(e) {
            o.get({
                dataType: "jsonp",
                url: f + "?session_token=" + e,
                context: document.body,
                jsonp: "jsoncallback",
                success: g
            })
        },
        g = function(e) {
            void 0 === e.status ? (E(e), c = e, A("ready", e)) : A("error", e)
        },
        y = function(e) {
            e && null !== e.username ? (E(e), c = e, A("ready", e)) : A("error", e)
        },
        _ = function(e) {
            A("tokenFail", e)
        },
        E = function(e) {
            var t;
            if (i.isNewNavigation()) {
                var n = d.find(".signInDropdownWrapper");
                t = b(e), I(t), n.removeClass("notAuthenticated").addClass("authenticated"), O()
            } else t = S(e), I(t), O()
        },
        S = function(e) {
            var t = "",
                n = "",
                o = "";
            return e && (void 0 !== e.firstname && (n = a.escapeHtml(l.trim(e.firstname))), void 0 !== e.lastname && (o = a.escapeHtml(l.trim(e.lastname))), n && o && n.length + o.length <= 20 ? t = n + " " + o : n && n.length <= 20 && (t = n)), t
        },
        T = function(e) {
            return e.length <= 20 ? e : e.substring(0, 17) + "..."
        },
        b = function(e) {
            var t = "",
                n = "",
                o = "",
                i = "";
            return e && (void 0 !== e.firstname && (n = a.escapeHtml(l.trim(e.firstname))), void 0 !== e.lastname && (o = a.escapeHtml(l.trim(e.lastname))), n ? t = n.length + o.length <= 20 ? n + " " + o : T(n) : void 0 !== e.username && (i = a.escapeHtml(l.trim(e.username)), t = T(i))), t
        },
        I = function(e) {
            e.length > 0 && d.find("[data-content-key=skypename]").each(function(t, n) {
                var o = l(n);
                if ("logout" === o.parent().attr("data-link-type")) {
                    var i = l("#uhfJoin");
                    o.text("(" + e + ")"), i.text(o.parent().text()), i.attr("ms.title", "logout")
                } else o.html(e + '<span class="offscreen">: ' + o.text() + "</span>")
            })
        },
        O = function() {
            d.removeClass("isNotAuthenticated").addClass("isAuthenticated")
        },
        w = function(e, t) {
            u[e] = u[e] || [], u[e].push(t)
        },
        A = function(e, t) {
            var n = u[e] || [],
                o = 0;
            for (o = 0; o < n.length; ++o) n[o](t)
        };
    return p(), {
        READY: "ready",
        ERROR: "error",
        init: p,
        on: function(e, t) {
            c && "ready" === e ? t(c) : w(e, t)
        },
        updateNavigation: E
    }
}), define("apollo/msCookieCompliance", ["window", "document"], function(e, t) {
    "use strict";
    var n = function() {
        var t = e.mscc;
        t && !t.hasConsent() && t.setConsent()
    };
    ! function() {
        for (var e = t.querySelectorAll("[data-dropdown-btnwrapper], [role='tab'], .tourBtn"), o = 0; o < e.length; o++) e[o].onclick = n
    }()
});
var clienttelemetry_build;
(clienttelemetry_build || (clienttelemetry_build = {})).version = "2.9.0";
! function(e) {
    ! function(e) {
        (t = e.BondDataType || (e.BondDataType = {}))[t.BT_STOP = 0] = "BT_STOP", t[t.BT_STOP_BASE = 1] = "BT_STOP_BASE", t[t.BT_BOOL = 2] = "BT_BOOL", t[t.BT_UINT8 = 3] = "BT_UINT8", t[t.BT_UINT16 = 4] = "BT_UINT16", t[t.BT_UINT32 = 5] = "BT_UINT32", t[t.BT_UINT64 = 6] = "BT_UINT64", t[t.BT_FLOAT = 7] = "BT_FLOAT", t[t.BT_DOUBLE = 8] = "BT_DOUBLE", t[t.BT_STRING = 9] = "BT_STRING", t[t.BT_STRUCT = 10] = "BT_STRUCT", t[t.BT_LIST = 11] = "BT_LIST", t[t.BT_SET = 12] = "BT_SET", t[t.BT_MAP = 13] = "BT_MAP", t[t.BT_INT8 = 14] = "BT_INT8", t[t.BT_INT16 = 15] = "BT_INT16", t[t.BT_INT32 = 16] = "BT_INT32", t[t.BT_INT64 = 17] = "BT_INT64", t[t.BT_WSTRING = 18] = "BT_WSTRING", t[t.BT_UNAVAILABLE = 127] = "BT_UNAVAILABLE";
        var t;
        (n = e.ProtocolType || (e.ProtocolType = {}))[n.MARSHALED_PROTOCOL = 0] = "MARSHALED_PROTOCOL", n[n.MAFIA_PROTOCOL = 17997] = "MAFIA_PROTOCOL", n[n.COMPACT_PROTOCOL = 16963] = "COMPACT_PROTOCOL", n[n.JSON_PROTOCOL = 21322] = "JSON_PROTOCOL", n[n.PRETTY_JSON_PROTOCOL = 20554] = "PRETTY_JSON_PROTOCOL", n[n.SIMPLE_PROTOCOL = 20563] = "SIMPLE_PROTOCOL";
        var n
    }(e.Bond || (e.Bond = {}))
}(Microsoft || (Microsoft = {}));
! function(e) {
    (function(e) {
        var t = function() {
            function e() {
                this._buffer = []
            }
            return e.prototype.Add = function(e) {
                for (var t = 0; t < this._buffer.length && this._buffer[t] != e; ++t);
                t == this._buffer.length && this._buffer.push(e)
            }, e.prototype.Count = function() {
                return this._buffer.length
            }, e.prototype.GetBuffer = function() {
                return this._buffer
            }, e
        }();
        e.Set = t;
        var n = function() {
            function e() {
                this._buffer = []
            }
            return e.prototype.Add = function(e, t) {
                -1 == this._getIndex(e) && this._buffer.push({
                    Key: e,
                    Value: t
                })
            }, e.prototype.AddOrReplace = function(e, t) {
                var n = this._getIndex(e);
                n >= 0 ? this._buffer[n] = {
                    Key: e,
                    Value: t
                } : this._buffer.push({
                    Key: e,
                    Value: t
                })
            }, e.prototype.Remove = function(e) {
                var t = this._getIndex(e);
                t >= 0 && this._buffer.splice(t, 1)
            }, e.prototype.Count = function() {
                return this._buffer.length
            }, e.prototype.GetBuffer = function() {
                return this._buffer
            }, e.prototype.ContainsKey = function(e) {
                return this._getIndex(e) >= 0
            }, e.prototype.Get = function(e) {
                var t = this._getIndex(e);
                return t >= 0 ? this._buffer[t].Value : null
            }, e.prototype._getIndex = function(e) {
                for (var t = 0, n = -1; t < this._buffer.length; ++t)
                    if (this._buffer[t].Key == e) {
                        n = t;
                        break
                    } return n
            }, e
        }();
        e.Map = n
    })((t = e.Bond || (e.Bond = {})).Collections || (t.Collections = {}));
    var t
}(Microsoft || (Microsoft = {}));
! function(e) {
    ! function(t) {
        ! function(e) {
            var o = function() {
                function e() {}
                return e.GetBytes = function(e) {
                    for (var t = [], n = 0; n < e.length; ++n) {
                        var o = e.charCodeAt(n);
                        o < 128 ? t.push(o) : o < 2048 ? t.push(192 | o >> 6, 128 | 63 & o) : o < 55296 || o >= 57344 ? t.push(224 | o >> 12, 128 | o >> 6 & 63, 128 | 63 & o) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++n)), t.push(240 | o >> 18, 128 | o >> 12 & 63, 128 | o >> 6 & 63, 128 | 63 & o))
                    }
                    return t
                }, e
            }();
            e.Utf8 = o;
            var i = function() {
                function e() {}
                return e.GetString = function(e) {
                    var t, n, o, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        r = [],
                        a = e.length % 3;
                    for (t = 0, o = e.length - a; t < o; t += 3) n = (e[t] << 16) + (e[t + 1] << 8) + e[t + 2], r.push((s = n, [i.charAt(s >> 18 & 63), i.charAt(s >> 12 & 63), i.charAt(s >> 6 & 63), i.charAt(63 & s)].join("")));
                    var s;
                    switch (a) {
                        case 1:
                            n = e[e.length - 1], r.push(i.charAt(n >> 2)), r.push(i.charAt(n << 4 & 63)), r.push("==");
                            break;
                        case 2:
                            n = (e[e.length - 2] << 8) + e[e.length - 1], r.push(i.charAt(n >> 10)), r.push(i.charAt(n >> 4 & 63)), r.push(i.charAt(n << 2 & 63)), r.push("=")
                    }
                    return r.join("")
                }, e
            }();
            e.Base64 = i;
            var r = function() {
                function e() {}
                return e.GetBytes = function(e) {
                    for (var t = []; 4294967168 & e;) t.push(127 & e | 128), e >>>= 7;
                    return t.push(127 & e), t
                }, e
            }();
            e.Varint = r;
            var a = function() {
                function e() {}
                return e.GetBytes = function(e) {
                    for (var t = e.low, n = e.high, o = []; n || 4294967168 & t;) o.push(127 & t | 128), t = (127 & n) << 25 | t >>> 7, n >>>= 7;
                    return o.push(127 & t), o
                }, e
            }();
            e.Varint64 = a;
            var s = function() {
                function e() {}
                return e.GetBytes = function(e) {
                    if (t.BrowserChecker.IsDataViewSupport()) {
                        var o = new DataView(new ArrayBuffer(4));
                        o.setFloat32(0, e, !0);
                        for (var i = [], r = 0; r < 4; ++r) i.push(o.getUint8(r));
                        return i
                    }
                    return n.ConvertNumberToArray(e, !1)
                }, e
            }();
            e.Float = s;
            var l = function() {
                function e() {}
                return e.GetBytes = function(e) {
                    if (t.BrowserChecker.IsDataViewSupport()) {
                        var o = new DataView(new ArrayBuffer(8));
                        o.setFloat64(0, e, !0);
                        for (var i = [], r = 0; r < 8; ++r) i.push(o.getUint8(r));
                        return i
                    }
                    return n.ConvertNumberToArray(e, !0)
                }, e
            }();
            e.Double = l;
            var c = function() {
                function e() {}
                return e.EncodeZigzag16 = function(e) {
                    return (e = t.Number.ToInt16(e)) << 1 ^ e >> 15
                }, e.EncodeZigzag32 = function(e) {
                    return (e = t.Number.ToInt32(e)) << 1 ^ e >> 31
                }, e.EncodeZigzag64 = function(e) {
                    var n = e.low,
                        o = e.high,
                        i = o << 1 | n >>> 31,
                        r = n << 1;
                    2147483648 & o && (i = ~i, r = ~r);
                    var a = new t.UInt64("0");
                    return a.low = r, a.high = i, a
                }, e
            }();
            e.Zigzag = c
        }(t.Encoding || (t.Encoding = {}));
        ! function(o) {
            var i = function() {
                function e() {}
                return e.GetString = function(e) {
                    for (var t = [], n = 0; n < e.length; ++n) {
                        var o = e[n];
                        if (o <= 191) t.push(String.fromCharCode(o));
                        else if (o <= 223) {
                            var i = e[++n];
                            t.push(String.fromCharCode((31 & o) << 6 | 63 & i))
                        } else if (o <= 239) {
                            i = e[++n];
                            var r = e[++n];
                            t.push(String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | 63 & r))
                        } else {
                            o = (7 & o) << 18 | (63 & (i = e[++n])) << 12 | (63 & (r = e[++n])) << 6 | 63 & e[++n], o -= 65536, t.push(String.fromCharCode(55296 | o >> 10 & 1023)), t.push(String.fromCharCode(56320 | 1023 & o))
                        }
                    }
                    return t.join("")
                }, e
            }();
            o.Utf8 = i;
            var r = function() {
                function e() {}
                return e.GetBytes = function(e) {
                    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = [], o = 0; o < e.length; ++o) {
                        var i = t.indexOf(e.charAt(o++)),
                            r = t.indexOf(e.charAt(o++)),
                            a = t.indexOf(e.charAt(o++)),
                            s = t.indexOf(e.charAt(o));
                        n.push(i << 2 | r >> 4), a >= 0 && (n.push(r << 4 & 240 | a >> 2), s >= 0 && n.push(a << 6 & 192 | s))
                    }
                    return n
                }, e
            }();
            o.Base64 = r;
            var a = function() {
                function t() {}
                return t.GetInt64 = function(t) {
                    var n = new e.Bond.Int64("0"),
                        o = this._Read(t);
                    return n.low = o[0], o.length > 1 && (n.high = o[1]), n
                }, t.GetNumber = function(e) {
                    return this._Read(e)[0]
                }, t._Read = function(e) {
                    for (var t = [], n = 0, o = !0, i = 0; o;) {
                        if (o = 0 != (128 & (r = e.shift())), r &= 127, !(i < 28)) {
                            n |= r << i, t.push(n), n = r >> 4, i = 3;
                            break
                        }
                        n |= r << i, i += 7
                    }
                    for (; o;) {
                        var r;
                        if (o = 0 != (128 & (r = e.shift())), n |= (r &= 127) << i, (i += 7) >= 32) break
                    }
                    return t.push(n), t
                }, t
            }();
            o.Varint = a;
            var s = function() {
                function e() {}
                return e.GetNumber = function(e) {
                    if (t.BrowserChecker.IsDataViewSupport()) {
                        for (var o = new DataView(new ArrayBuffer(4)), i = 0; i < 4; ++i) o.setUint8(i, e[i]);
                        return o.getFloat32(0, !0)
                    }
                    return n.ConvertArrayToNumber(e, !1)
                }, e
            }();
            o.Float = s;
            var l = function() {
                function e() {}
                return e.GetNumber = function(e) {
                    if (t.BrowserChecker.IsDataViewSupport()) {
                        for (var o = new DataView(new ArrayBuffer(8)), i = 0; i < 8; ++i) o.setUint8(i, e[i]);
                        return o.getFloat64(0, !0)
                    }
                    return n.ConvertArrayToNumber(e, !0)
                }, e
            }();
            o.Double = l;
            var c = function() {
                function t() {}
                return t.DecodeZigzag16 = function(e) {
                    return ((65535 & e) >>> 1 ^ -(1 & e)) << 16 >> 16
                }, t.DecodeZigzag32 = function(e) {
                    return e >>> 1 ^ -(1 & e)
                }, t.DecodeZigzag64 = function(t) {
                    var n = 1 & t.high,
                        o = t.high >>> 1,
                        i = 1 & t.low,
                        r = t.low >>> 1;
                    r |= n << 31, i && (r ^= 4294967295, o ^= 4294967295);
                    var a = new e.Bond.UInt64("0");
                    return a.low = r, a.high = o, a
                }, t
            }();
            o.Zigzag = c
        }(t.Decoding || (t.Decoding = {}));
        var n = function() {
            function e() {}
            return e.ConvertNumberToArray = function(e, t) {
                if (!e) return t ? this._doubleZero : this._floatZero;
                var n = t ? 52 : 23,
                    o = (1 << (t ? 11 : 8) - 1) - 1,
                    i = 1 - o,
                    r = o,
                    a = e < 0 ? 1 : 0;
                e = Math.abs(e);
                for (var s = Math.floor(e), l = e - s, c = 2 * (o + 2) + n, u = new Array(c), f = 0; f < c;) u[f++] = 0;
                for (f = o + 2; f && s;) u[--f] = s % 2, s = Math.floor(s / 2);
                for (f = o + 1; f < c - 1 && l > 0;) l *= 2, l >= 1 ? (u[++f] = 1, --l) : u[++f] = 0;
                for (var d = 0; d < c && !u[d]; ++d);
                var p = o + 1 - d,
                    m = d + n;
                if (u[m + 1]) {
                    for (f = m; f > d && !(u[f] = 1 - u[f]); --f);
                    f == d && ++p
                }
                if (p > r || s) return a ? t ? this._doubleNegInifinity : this._floatNegInifinity : t ? this._doubleInifinity : this._floatInifinity;
                if (p < i) return t ? this._doubleZero : this._floatZero;
                if (t) {
                    var h = 0;
                    for (f = 0; f < 20; ++f) h = h << 1 | u[++d];
                    for (var v = 0; f < 52; ++f) v = v << 1 | u[++d];
                    return [255 & v, v >> 8 & 255, v >> 16 & 255, v >>> 24, 255 & (h = a << 31 | 2147483647 & (h |= p + o << 20)), h >> 8 & 255, h >> 16 & 255, h >>> 24]
                }
                var g = 0;
                for (f = 0; f < 23; ++f) g = g << 1 | u[++d];
                return [255 & (g = a << 31 | 2147483647 & (g |= p + o << 23)), g >> 8 & 255, g >> 16 & 255, g >>> 24]
            }, e.ConvertArrayToNumber = function(e, n) {
                var o = (1 << (n ? 11 : 8) - 1) - 1,
                    i = 0 != (128 & e[n ? 7 : 3]),
                    r = n ? (127 & e[7]) << 4 | (240 & e[6]) >> 4 : (127 & e[3]) << 1 | (128 & e[2]) >> 7;
                if (255 == r) throw new t.Exception("Not a valid float/double buffer.");
                var a = 1,
                    s = 1;
                if (n) {
                    var l = (15 & e[6]) << 28 | (255 & e[5]) << 20 | (255 & e[4]) << 12,
                        c = e[3] << 24 | (255 & e[2]) << 16 | (255 & e[1]) << 8 | 255 & e[0];
                    if (!r && !l && !c) return 0;
                    for (var u = 0; u < 20; ++u) s /= 2, l < 0 && (a += s), l <<= 1;
                    for (u = 0; u < 32; ++u) s /= 2, c < 0 && (a += s), c <<= 1
                } else {
                    var f = (127 & e[2]) << 25 | (255 & e[1]) << 17 | (255 & e[0]) << 9;
                    if (!r && !f) return 0;
                    for (u = 0; u < 23; ++u) s /= 2, f < 0 && (a += s), f <<= 1
                }
                return a *= Math.pow(2, r - o), i ? 0 - a : a
            }, e
        }();
        n._floatZero = [0, 0, 0, 0], n._doubleZero = [0, 0, 0, 0, 0, 0, 0, 0], n._floatInifinity = [0, 0, 128, 127], n._floatNegInifinity = [0, 0, 128, 255], n._doubleInifinity = [0, 0, 0, 0, 0, 0, 240, 127], n._doubleNegInifinity = [0, 0, 0, 0, 0, 0, 240, 255]
    }(e.Bond || (e.Bond = {}))
}(Microsoft || (Microsoft = {}));
! function(e) {
    (function(e) {
        var n = function() {
            function e() {
                this._buffer = []
            }
            return e.prototype.WriteByte = function(e) {
                this._buffer.push(t.Number.ToByte(e))
            }, e.prototype.Write = function(e, t, n) {
                for (; n--;) this.WriteByte(e[t++])
            }, e.prototype.GetBuffer = function() {
                return this._buffer
            }, e
        }();
        e.MemoryStream = n
    })((t = e.Bond || (e.Bond = {})).IO || (t.IO = {}));
    var t
}(Microsoft || (Microsoft = {}));
var Microsoft;
! function(e) {
    ! function(e) {
        var t = function() {
            return function(e, t) {
                this.Type = e, this.Id = t
            }
        }();
        e.FieldTag = t;
        var n = function() {
            return function(e, t) {
                this.ElementType = e, this.Size = t
            }
        }();
        e.ContainerTag = n;
        var o = function() {
            return function(e, t, n) {
                this.KeyType = e, this.ValueType = t, this.Size = n
            }
        }();
        e.KeyValueContainerTag = o;
        var i = function() {
            return function() {}
        }();
        e.Bonded = i;
        var r = function() {
            function e(e) {
                this.low = 0, this.high = 0, this.low = parseInt(e), this.low < 0 && (this.high = -1)
            }
            return e.prototype.Equals = function(t) {
                var n = new e(t);
                return this.low == n.low && this.high == n.high
            }, e
        }();
        e.Int64 = r;
        var a = function() {
            function e(e) {
                this.low = 0, this.high = 0, this.low = parseInt(e)
            }
            return e.prototype.Equals = function(t) {
                var n = new e(t);
                return this.low == n.low && this.high == n.high
            }, e
        }();
        e.UInt64 = a;
        var s = function() {
            function e() {}
            return e.ToByte = function(e) {
                return this.ToUInt8(e)
            }, e.ToInt8 = function(e) {
                return 127 & e | (128 & e) << 24 >> 24
            }, e.ToInt16 = function(e) {
                return 32767 & e | (32768 & e) << 16 >> 16
            }, e.ToInt32 = function(e) {
                return 2147483647 & e | 2147483648 & e
            }, e.ToUInt8 = function(e) {
                return 255 & e
            }, e.ToUInt16 = function(e) {
                return 65535 & e
            }, e.ToUInt32 = function(e) {
                return 4294967295 & e
            }, e
        }();
        e.Number = s;
        var l = function() {
            return function(e) {
                this.Message = e
            }
        }();
        e.Exception = l;
        var c = function() {
            return function() {}
        }();
        e.KeyValuePair = c;
        var u = function() {
            function e() {}
            return e.IsDataViewSupport = function() {
                return "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
            }, e
        }();
        e.BrowserChecker = u
    }(e.Bond || (e.Bond = {}))
}(Microsoft || (Microsoft = {})),
function(e) {
    ! function(e) {
        var t = function() {
            function t(e) {
                this._stream = e
            }
            return t.prototype.WriteBlob = function(e) {
                this._stream.Write(e, 0, e.length)
            }, t.prototype.WriteBool = function(e) {
                this._stream.WriteByte(e ? 1 : 0)
            }, t.prototype.WriteContainerBegin = function(e, t) {
                this.WriteUInt8(t), this.WriteUInt32(e)
            }, t.prototype.WriteMapContainerBegin = function(e, t, n) {
                this.WriteUInt8(t), this.WriteUInt8(n), this.WriteUInt32(e)
            }, t.prototype.WriteContainerEnd = function() {}, t.prototype.WriteDouble = function(t) {
                var n = e.Encoding.Double.GetBytes(t);
                this._stream.Write(n, 0, n.length)
            }, t.prototype.WriteFloat = function(t) {
                var n = e.Encoding.Float.GetBytes(t);
                this._stream.Write(n, 0, n.length)
            }, t.prototype.WriteFieldBegin = function(e, t, n) {
                t <= 5 ? this._stream.WriteByte(e | t << 5) : t <= 255 ? (this._stream.WriteByte(192 | e), this._stream.WriteByte(t)) : (this._stream.WriteByte(224 | e), this._stream.WriteByte(t), this._stream.WriteByte(t >> 8))
            }, t.prototype.WriteFieldEnd = function() {}, t.prototype.WriteFieldOmitted = function(e, t, n) {}, t.prototype.WriteInt16 = function(t) {
                t = e.Encoding.Zigzag.EncodeZigzag16(t), this.WriteUInt16(t)
            }, t.prototype.WriteInt32 = function(t) {
                t = e.Encoding.Zigzag.EncodeZigzag32(t), this.WriteUInt32(t)
            }, t.prototype.WriteInt64 = function(t) {
                this.WriteUInt64(e.Encoding.Zigzag.EncodeZigzag64(t))
            }, t.prototype.WriteInt8 = function(t) {
                this._stream.WriteByte(e.Number.ToInt8(t))
            }, t.prototype.WriteString = function(t) {
                if ("" == t) this.WriteUInt32(0);
                else {
                    var n = e.Encoding.Utf8.GetBytes(t);
                    this.WriteUInt32(n.length), this._stream.Write(n, 0, n.length)
                }
            }, t.prototype.WriteStructBegin = function(e, t) {}, t.prototype.WriteStructEnd = function(t) {
                this.WriteUInt8(t ? e.BondDataType.BT_STOP_BASE : e.BondDataType.BT_STOP)
            }, t.prototype.WriteUInt16 = function(t) {
                var n = e.Encoding.Varint.GetBytes(e.Number.ToUInt16(t));
                this._stream.Write(n, 0, n.length)
            }, t.prototype.WriteUInt32 = function(t) {
                var n = e.Encoding.Varint.GetBytes(e.Number.ToUInt32(t));
                this._stream.Write(n, 0, n.length)
            }, t.prototype.WriteUInt64 = function(t) {
                var n = e.Encoding.Varint64.GetBytes(t);
                this._stream.Write(n, 0, n.length)
            }, t.prototype.WriteUInt8 = function(t) {
                this._stream.WriteByte(e.Number.ToUInt8(t))
            }, t.prototype.WriteWString = function(e) {
                this.WriteUInt32(e.length);
                for (var t = 0; t < e.length; ++t) {
                    var n = e.charCodeAt(t);
                    this._stream.WriteByte(n), this._stream.WriteByte(n >>> 8)
                }
            }, t
        }();
        e.CompactBinaryProtocolWriter = t;
        var n = function() {
            return function() {}
        }();
        e.CompactBinaryProtocolReader = n
    }(e.Bond || (e.Bond = {}))
}(Microsoft || (Microsoft = {}));
var sct;
! function(e) {
    var t = function() {
        function t() {}
        return t.IsSafari = function() {
            if (null === t._isSafari)
                if ("undefined" != typeof navigator && navigator.userAgent) {
                    var e = navigator.userAgent.toLowerCase();
                    e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 ? t._isSafari = !0 : t._isSafari = !1
                } else t._isSafari = !1;
            return t._isSafari
        }, t.IsReactNative = function() {
            return null === t._isReactNative && ("undefined" != typeof navigator && navigator.product ? t._isReactNative = "ReactNative" === navigator.product : t._isReactNative = !1), t._isReactNative
        }, t.IsUint8ArrSupported = function() {
            return !e.Utils.IsSafari() && "undefined" != typeof Uint8Array && !e.Utils.IsReactNative()
        }, t.ajax = function(e, n) {
            var o = t._createConnection();
            if (e.headers) {
                var i = "qsp=true";
                for (var r in e.headers) i += "&", i += encodeURIComponent(r), i += "=", i += encodeURIComponent(e.headers[r]);
                e.url.indexOf("?") < 0 ? e.url += "?" : e.url += "&", e.url += i
            }
            o.open(e.type, e.url, !n), e.complete && (o.onload = function() {
                e.complete(o)
            }, o.ontimeout = function() {
                e.complete(o)
            }, o.onerror = function() {
                e.complete(o)
            }, o.onabort = function() {
                e.complete(o)
            }), o.send(e.data)
        }, t.keys = function(e) {
            if (Object.keys) return Object.keys(e);
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n);
            return t
        }, t.IsUsingXDomainRequest = function() {
            if (null == t._usingXDomainRequest) {
                void 0 === (new XMLHttpRequest).withCredentials && "undefined" != typeof XDomainRequest ? t._usingXDomainRequest = !0 : t._usingXDomainRequest = !1
            }
            return t._usingXDomainRequest
        }, t._createConnection = function() {
            var e = new XMLHttpRequest;
            return t.IsUsingXDomainRequest() ? new XDomainRequest : e
        }, t
    }();
    t._isSafari = null, t._isReactNative = null, t._usingXDomainRequest = null, e.Utils = t
}(sct || (sct = {}));
! function(e) {
    ! function(e) {
        (function(e) {
            var n = function() {
                function e() {}
                return e.GetGuid = function() {
                    var e = function() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1, 5)
                    };
                    return [e(), e(), "-", e(), "-", e(), "-", e(), "-", e(), e(), e()].join("")
                }, e.GetTimeStamp = function() {
                    var e = (new Date).getTime(),
                        t = new Microsoft.Bond.Int64("0");
                    return t.low = 4294967295 & e, t.high = Math.floor(e / 4294967296), t
                }, e.GetTimeStampWithValue = function(e) {
                    var t = new Microsoft.Bond.Int64("0");
                    return t.low = 4294967295 & e, t.high = Math.floor(e / 4294967296), t
                }, e
            }();
            e.utils = n, (o = e.RecordType || (e.RecordType = {}))[o.NotSet = 0] = "NotSet", o[o.Event = 1] = "Event", o[o.PerformanceCounter = 2] = "PerformanceCounter", o[o.Anomaly = 3] = "Anomaly", o[o.Prediction = 4] = "Prediction", o[o.TraceLog = 5] = "TraceLog", o[o.EventSourceLog = 6] = "EventSourceLog", o[o.HttpLog = 7] = "HttpLog", o[o.PerformanceCounterAzure = 8] = "PerformanceCounterAzure", o[o.PerformanceCounterGfs = 9] = "PerformanceCounterGfs";
            var o;
            (i = e.PIIScrubber || (e.PIIScrubber = {}))[i.NotSet = 0] = "NotSet", i[i.O365 = 1] = "O365", i[i.SkypeBI = 2] = "SkypeBI", i[i.SkypeData = 3] = "SkypeData";
            var i;
            (r = e.PIIKind || (e.PIIKind = {}))[r.NotSet = 0] = "NotSet", r[r.DistinguishedName = 1] = "DistinguishedName", r[r.GenericData = 2] = "GenericData", r[r.IPV4Address = 3] = "IPV4Address", r[r.IPv6Address = 4] = "IPv6Address", r[r.MailSubject = 5] = "MailSubject", r[r.PhoneNumber = 6] = "PhoneNumber", r[r.QueryString = 7] = "QueryString", r[r.SipAddress = 8] = "SipAddress", r[r.SmtpAddress = 9] = "SmtpAddress", r[r.Identity = 10] = "Identity", r[r.Uri = 11] = "Uri", r[r.Fqdn = 12] = "Fqdn", r[r.IPV4AddressLegacy = 13] = "IPV4AddressLegacy";
            var r;
            (a = e.UserIdType || (e.UserIdType = {}))[a.Unknown = 0] = "Unknown", a[a.MSACID = 1] = "MSACID", a[a.MSAPUID = 2] = "MSAPUID", a[a.ANID = 3] = "ANID", a[a.OrgIdCID = 4] = "OrgIdCID", a[a.OrgIdPUID = 5] = "OrgIdPUID", a[a.UserObjectId = 6] = "UserObjectId", a[a.Skype = 7] = "Skype", a[a.Yammer = 8] = "Yammer", a[a.EmailAddress = 9] = "EmailAddress", a[a.PhoneNumber = 10] = "PhoneNumber", a[a.SipAddress = 11] = "SipAddress", a[a.MUID = 12] = "MUID";
            var a, s = function() {
                function e() {
                    this.ScrubType = t.datamodels.PIIScrubber.NotSet, this.Kind = t.datamodels.PIIKind.NotSet, this.RawContent = ""
                }
                return e.prototype.Write = function(e) {
                    this.WriteImpl(e, !1)
                }, e.prototype.WriteImpl = function(e, n) {
                    e.WriteStructBegin(null, n), this.ScrubType != t.datamodels.PIIScrubber.NotSet ? (e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_INT32, 1, null), e.WriteInt32(this.ScrubType), e.WriteFieldEnd()) : e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_INT32, 1, null), this.Kind != t.datamodels.PIIKind.NotSet ? (e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_INT32, 2, null), e.WriteInt32(this.Kind), e.WriteFieldEnd()) : e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_INT32, 2, null), "" != this.RawContent ? (e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_STRING, 3, null), e.WriteString(this.RawContent), e.WriteFieldEnd()) : e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_STRING, 3, null), e.WriteStructEnd(n)
                }, e.prototype.Read = function(e) {
                    this.ReadImpl(e, !1)
                }, e.prototype.ReadImpl = function(e, t) {}, e
            }();
            e.PII = s;
            var l = function() {
                function e() {
                    this.Id = n.GetGuid(), this.Timestamp = n.GetTimeStamp(), this.Type = "", this.EventType = "", this.Extension = new Microsoft.Bond.Collections.Map, this.RecordType = t.datamodels.RecordType.NotSet, this.PIIExtensions = new Microsoft.Bond.Collections.Map
                }
                return e.prototype.AddOrReplacePII = function(e, n, o) {
                    var i = new t.datamodels.PII;
                    i.RawContent = n, i.Kind = o, i.ScrubType = t.datamodels.PIIScrubber.O365, this.PIIExtensions.AddOrReplace(e, i)
                }, e.prototype.Write = function(e) {
                    this.WriteImpl(e, !1)
                }, e.prototype.WriteImpl = function(e, n) {
                    if (e.WriteStructBegin(null, n), "" != this.Id ? (e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_STRING, 1, null), e.WriteString(this.Id), e.WriteFieldEnd()) : e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_STRING, 1, null), this.Timestamp.Equals("0") ? e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_INT64, 3, null) : (e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_INT64, 3, null), e.WriteInt64(this.Timestamp), e.WriteFieldEnd()), "" != this.Type ? (e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_STRING, 5, null), e.WriteString(this.Type), e.WriteFieldEnd()) : e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_STRING, 5, null), "" != this.EventType ? (e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_STRING, 6, null), e.WriteString(this.EventType), e.WriteFieldEnd()) : e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_STRING, 6, null), this.Extension.Count()) {
                        e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_MAP, 13, null), e.WriteMapContainerBegin(this.Extension.Count(), Microsoft.Bond.BondDataType.BT_STRING, Microsoft.Bond.BondDataType.BT_STRING);
                        for (var o = 0; o < this.Extension.GetBuffer().length; ++o) e.WriteString(this.Extension.GetBuffer()[o].Key), e.WriteString(this.Extension.GetBuffer()[o].Value);
                        e.WriteContainerEnd(), e.WriteFieldEnd()
                    } else e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_MAP, 13, null);
                    if (this.RecordType != t.datamodels.RecordType.NotSet ? (e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_INT32, 24, null), e.WriteInt32(this.RecordType), e.WriteFieldEnd()) : e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_INT32, 24, null), this.PIIExtensions.Count()) {
                        e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_MAP, 30, null), e.WriteMapContainerBegin(this.PIIExtensions.Count(), Microsoft.Bond.BondDataType.BT_STRING, Microsoft.Bond.BondDataType.BT_STRUCT);
                        for (var i = 0; i < this.PIIExtensions.GetBuffer().length; ++i) e.WriteString(this.PIIExtensions.GetBuffer()[i].Key), this.PIIExtensions.GetBuffer()[i].Value.WriteImpl(e, !1);
                        e.WriteContainerEnd(), e.WriteFieldEnd()
                    } else e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_MAP, 30, null);
                    e.WriteStructEnd(n)
                }, e.prototype.Read = function(e) {
                    this.ReadImpl(e, !1)
                }, e.prototype.ReadImpl = function(e, t) {}, e
            }();
            e.Record = l;
            var c = function() {
                function e() {
                    this.Source = "", this.DataPackageId = "", this.Timestamp = new Microsoft.Bond.Int64("0"), this.Records = []
                }
                return e.prototype.Write = function(e) {
                    this.WriteImpl(e, !1)
                }, e.prototype.WriteImpl = function(e, t) {
                    if (e.WriteStructBegin(null, t), "" != this.Source ? (e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_STRING, 2, null), e.WriteString(this.Source), e.WriteFieldEnd()) : e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_STRING, 2, null), "" != this.DataPackageId ? (e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_STRING, 5, null), e.WriteString(this.DataPackageId), e.WriteFieldEnd()) : e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_STRING, 5, null), this.Timestamp.Equals("0") ? e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_INT64, 6, null) : (e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_INT64, 6, null), e.WriteInt64(this.Timestamp), e.WriteFieldEnd()), this.Records.length) {
                        e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_LIST, 8, null), e.WriteContainerBegin(this.Records.length, Microsoft.Bond.BondDataType.BT_STRUCT);
                        for (var n = 0; n < this.Records.length; ++n) this.Records[n].WriteImpl(e, !1);
                        e.WriteContainerEnd(), e.WriteFieldEnd()
                    } else e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_LIST, 8, null);
                    e.WriteStructEnd(t)
                }, e.prototype.Read = function(e) {
                    this.ReadImpl(e, !1)
                }, e.prototype.ReadImpl = function(e, t) {}, e
            }();
            e.DataPackage = c;
            var u = function() {
                function e() {
                    this.DataPackages = [], this.RequestRetryCount = 0
                }
                return e.prototype.Write = function(e) {
                    this.WriteImpl(e, !1)
                }, e.prototype.WriteImpl = function(e, t) {
                    if (e.WriteStructBegin(null, t), this.DataPackages.length) {
                        e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_LIST, 1, null), e.WriteContainerBegin(this.DataPackages.length, Microsoft.Bond.BondDataType.BT_STRUCT);
                        for (var n = 0; n < this.DataPackages.length; ++n) this.DataPackages[n].WriteImpl(e, !1);
                        e.WriteContainerEnd(), e.WriteFieldEnd()
                    } else e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_LIST, 1, null);
                    0 != this.RequestRetryCount ? (e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_INT32, 2, null), e.WriteInt32(this.RequestRetryCount), e.WriteFieldEnd()) : e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_INT32, 2, null), e.WriteStructEnd(t)
                }, e.prototype.Read = function(e) {
                    this.ReadImpl(e, !1)
                }, e.prototype.ReadImpl = function(e, t) {}, e
            }();
            e.ClientToCollectorRequest = u
        })((t = e.telemetry || (e.telemetry = {})).datamodels || (t.datamodels = {}));
        var t
    }(e.applications || (e.applications = {}))
}(microsoft || (microsoft = {}));
! function(e) {
    ! function(e) {
        (function(e) {
            var n;
            (o = n = e.CallbackEventType || (e.CallbackEventType = {}))[o.SENT = 0] = "SENT", o[o.SEND_FAILED = 1] = "SEND_FAILED";
            var o, i;
            (r = i = e.DATARV_ERROR || (e.DATARV_ERROR = {}))[r.DATARV_ERROR_OK = 0] = "DATARV_ERROR_OK", r[r.DATARV_ERROR_INVALID_EVENT = 1] = "DATARV_ERROR_INVALID_EVENT", r[r.DATARV_ERROR_INVALID_CONFIG = 2] = "DATARV_ERROR_INVALID_CONFIG", r[r.DATARV_ERROR_INVALID_DEPENDENCIES = 3] = "DATARV_ERROR_INVALID_DEPENDENCIES", r[r.DATARV_ERROR_INVALID_STATUS = 4] = "DATARV_ERROR_INVALID_STATUS", r[r.DATARV_ERROR_INVALID_ARG = 5] = "DATARV_ERROR_INVALID_ARG";
            var r, a = function() {
                function e(e) {
                    this._errorCode = i.DATARV_ERROR_OK, this._errorCode = e
                }
                return e.prototype.ErrorCode = function() {
                    return this._errorCode
                }, e.prototype.toString = function() {
                    switch (this._errorCode) {
                        case i.DATARV_ERROR_OK:
                            return "DATARV_ERROR_OK";
                        case i.DATARV_ERROR_INVALID_EVENT:
                            return "Event is invalid. Either event.Id is empty, or event.Timestamp is empty, or event.EventType is empty.";
                        case i.DATARV_ERROR_INVALID_CONFIG:
                            return "Invalid configuration. CollectorUrl is missing.";
                        case i.DATARV_ERROR_INVALID_DEPENDENCIES:
                            return "DATARV_ERROR_INVALID_DEPENDENCIES";
                        case i.DATARV_ERROR_INVALID_STATUS:
                            return "Telemetry Manager is not initialized.";
                        case i.DATARV_ERROR_INVALID_ARG:
                            return "TenantToken is null or empty, or events is null.";
                        default:
                            return "Unknown error"
                    }
                }, e
            }();
            e.Exception = a;
            var s = function() {};
            e.TelemetryConfig = s;
            var l = function() {
                function e() {}
                return e.CreateTelemetryManager = function() {
                    return new d
                }, e
            }();
            e.TelemetryManagerFactory = l;
            var c, u = function() {
                function e() {}
                return e.MaxPackageSizeInBytes = function() {
                    return 3e6
                }, e.TimeIntervalForNextSendInMS = function() {
                    return 1e3
                }, e
            }();
            (f = c || (c = {}))[f.Created = 0] = "Created", f[f.Initialized = 1] = "Initialized", f[f.Started = 2] = "Started";
            var f, d = function() {
                function e() {
                    this._MaxPackageSizeInBytes = u.MaxPackageSizeInBytes(), this._listeners = [], this._status = c.Created, this._etag = null, this._testServerResponseHook = null, this._isPaused = !1
                }
                return e.prototype.Initialize = function(e) {
                    if (this._status != c.Created) throw new a(i.DATARV_ERROR_INVALID_STATUS);
                    if (!e || !e.collectorUrl) throw new a(i.DATARV_ERROR_INVALID_CONFIG);
                    this._config = e, this._Reset(), this._status = c.Initialized, this._Verbose("Initialize() done")
                }, e.prototype.AddListener = function(e) {
                    if (this._status < c.Initialized) throw new a(i.DATARV_ERROR_INVALID_STATUS);
                    this._Verbose(["AddListener(), status: ", this._status, " old length: ", this._listeners.length, " func: ", e].join(""));
                    for (var t = 0; t < this._listeners.length; ++t)
                        if (this._listeners[t] == e) return void this._Verbose("the listener has been added already, index: " + t);
                    this._listeners.push(e), this._Verbose("AddListener() done, the new length: " + this._listeners.length)
                }, e.prototype.RemoveListener = function(e) {
                    if (this._status < c.Initialized) throw new a(i.DATARV_ERROR_INVALID_STATUS);
                    this._Verbose(["RemoveListener(), status: ", this._status, " old length: ", this._listeners.length, " func: ", e].join(""));
                    for (var t = 0; t < this._listeners.length; ++t)
                        if (this._listeners[t] == e) return 1 == this._listeners.length ? this._listeners = [] : t == this._listeners.length - 1 ? this._listeners.pop() : this._listeners[t] = this._listeners.pop(), void this._Verbose(["this listener has been found, index: ", t, "new length: ", this._listeners.length].join(""));
                    this._Verbose("listener isn't been found, new length" + this._listeners.length)
                }, e.prototype.Start = function() {
                    if (this._status < c.Initialized) throw new a(i.DATARV_ERROR_INVALID_STATUS);
                    this._Verbose(["Start(), status:", this._status, "tag:", e._tag].join(" ")), this._status >= c.Started && this._Verbose("Start() already, ignore"), ++e._tag, this._status = c.Started, this._Verbose(["Start() done, status: ", this._status, "tag: ", e._tag].join(""))
                }, e.prototype.Stop = function() {
                    if (this._status < c.Initialized) throw new a(i.DATARV_ERROR_INVALID_STATUS);
                    return this._Verbose("Stop(), status: " + this._status), this._status == c.Initialized ? void this._Verbose("Stop() already, ignore") : (this._Reset(), this._status = c.Initialized, void this._Verbose("Stop() done, status: " + this._status))
                }, e.prototype.Pause = function() {
                    this._isPaused = !0, this._CleanTimer()
                }, e.prototype.Resume = function() {
                    this._isPaused = !1, this._eventsCache.IsEmpty() || this._timer || this._ScheduleTimer(!1)
                }, e.prototype.Flush = function(e) {
                    this._eventsCache.IsEmpty() || this._WorkThread(e, !0)
                }, e.prototype.SendAsync = function(t, n) {
                    if (this._status < c.Initialized) throw new a(i.DATARV_ERROR_INVALID_STATUS);
                    if (this._Verbose(["SendAsync(), status:", this._status, "tenantToken:", t, "count:", n.length].join(" ")), this._status < c.Started) return this._Info("SendAsync(), not started, ignore, return false"), !1;
                    if (!t || !n) throw this._Error("SendAsync(), tenantToken or events is null or empty"), new a(i.DATARV_ERROR_INVALID_ARG);
                    for (var o = 0; o < n.length; ++o)
                        if (!n[o].Id || !e._eventTypeRegex.test(n[o].EventType) || n[o].Timestamp.Equals("0")) throw this._Error(["eventId:", n[o].Id, "eventType:", n[o].EventType, "timestamp high:", n[o].Timestamp.high, "timestamp low:", n[o].Timestamp.low].join("")), new a(i.DATARV_ERROR_INVALID_EVENT);
                    return this._eventsCache.AddEvents(t, n), this._Verbose(["SendAsync(), currentTimer: ", this._timer, "eventsCacheIsEmpty", this._eventsCache.IsEmpty()].join(" ")), this._eventsCache.IsEmpty() || this._timer || this._ScheduleTimer(!1), this._Verbose("SendAsync() done"), !0
                }, e.prototype._WorkThread = function(t, n) {
                    var o = this;
                    try {
                        if (this._Verbose("_WorkThread, status: " + this._status), this._status < c.Started) return void this._Verbose("_WorkThread, status is not started, return");
                        var i = this._eventsCache.DequeuEvents();
                        if (null == i) return this._Verbose("_WorkThread, No events found, return"), void this._CleanTimer();
                        var r = this._PackEvents(i.tenantToken, i.events);
                        if (this._eventsCache.AddEvents(i.tenantToken, r.remainedEvents), null == r.buffer || 0 == r.buffer.length) return void(this._eventsCache.IsEmpty() ? (this._Verbose("eventsCache is empty, stop schedule"), this._CleanTimer()) : (this._Verbose("eventsCache is not empty, schedule for next run"), this._ScheduleTimer(!1)));
                        if (this._testServerResponseHook) {
                            var a = this._testServerResponseHook();
                            return void setTimeout(this._SendCallback(l, i.tenantToken, r.sendEvents, a, !1, null), 100)
                        }
                        var s = {
                            type: "POST",
                            url: this._config.collectorUrl,
                            processData: !1,
                            headers: {
                                "content-type": "application/bond-compact-binary",
                                "client-id": "NO_AUTH",
                                "sdk-version": "ACT-Web-JS-" + clienttelemetry_build.version
                            },
                            complete: function(e) {
                                return o._SendCallback(l, i.tenantToken, r.sendEvents, e, n, t)
                            }
                        };
                        sct.Utils.IsUint8ArrSupported() ? (this._Verbose("Uint8Array is defined, send with binary format directly."), s.data = new Uint8Array(r.buffer)) : (this._Verbose("Uint8Array is undefined, send with base64 encode."), s.data = Microsoft.Bond.Encoding.Base64.GetString(r.buffer), s.headers["content-encoding"] = "base64"), i.tenantToken && (s.headers["x-apikey"] = i.tenantToken);
                        var l = e._tag;
                        this._lastActiveTime = (new Date).getTime(), sct.Utils.ajax(s, n), this._Verbose("_Workthread, send via jquery, tag: " + l)
                    } catch (t) {
                        this._Error("_WorkThread, exception: " + t)
                    }
                }, e.prototype._PackEvents = function(e, n) {
                    this._Verbose("_PackageEvents, total Count: " + n.length);
                    var o = new t.datamodels.ClientToCollectorRequest,
                        i = new t.datamodels.DataPackage;
                    i.Source = "JS_default_source", i.DataPackageId = t.datamodels.utils.GetGuid(), i.Timestamp = t.datamodels.utils.GetTimeStamp();
                    var r, a = n;
                    for (n = []; i.Records = [], i.Records.push.apply(i.Records, a), o.DataPackages = [], o.DataPackages.push(i), r = this._Serialize(o), this._Verbose(["_PackageEvents, sendEvents.length:", a.length, "buffer.length:", r.length, "MaxPackageSize:", this._MaxPackageSizeInBytes].join("")), !(r.length < this._MaxPackageSizeInBytes);) {
                        if (1 == a.length) {
                            a = [], r = null;
                            break
                        }
                        var s = a.splice(0, Math.floor(a.length / 2));
                        this._Verbose("_PackageEvents, too large, package again"), n.push.apply(n, a), a = s
                    }
                    return this._Verbose(["_PakcageEvents done, sendEventsCount:", a.length, "buffer.length:", null == r ? 0 : r.length, "remained events:", n.length].join("")), {
                        buffer: r,
                        sendEvents: a,
                        remainedEvents: n
                    }
                }, e.prototype._Serialize = function(e) {
                    var t = new Microsoft.Bond.IO.MemoryStream,
                        n = new Microsoft.Bond.CompactBinaryProtocolWriter(t);
                    return e.Write(n), t.GetBuffer()
                }, e.prototype._SendCallback = function(t, o, i, r, a, s) {
                    if (this._Verbose(["_SendCallback", "tag:", t, "current tag:", e._tag, "tenantToken:", o, "events count:", i.length, "jqXHR:", r].join("")), s && s(r ? r.status : 0, o, i), !a) {
                        var l = r && void 0 !== r.status && 200 === r.status;
                        if (this._status < c.Started || t < e._tag) return void this._Verbose("_SendCallback, is not started, or tag is not the same, return");
                        if (!l && (r && void 0 !== r.status && 501 !== r.status && 505 !== r.status && (r.status < 300 || r.status >= 500 || 408 === r.status) || !r || void 0 === r.status)) return this._Verbose("retry statusCode: " + (r ? r.status : 0)), this._eventsCache.AddEvents(o, i), void this._ScheduleTimer(!0);
                        for (var u = 0; u < this._listeners.length; ++u) this._listeners[u](l ? n.SENT : n.SEND_FAILED, r ? r.status : 0, o, i);
                        this._eventsCache.IsEmpty() ? (this._Verbose("eventsCache is empty, stop schedule"), this._CleanTimer()) : (this._Verbose("eventsCache is not empty, schedule for next run"), this._ScheduleTimer(!1))
                    }
                }, e.prototype._CleanTimer = function() {
                    this._Verbose("_CleanTimer(), timer: " + this._timer), this._timer && (clearTimeout(this._timer), this._timer = null)
                }, e.prototype._ScheduleTimer = function(e) {
                    var t = this;
                    if (!this._isPaused)
                        if (this._Verbose("_ScheduleTimer: isRetry: " + e), this._CleanTimer(), e) {
                            this._Verbose("_ScheduleTimer, current factor: " + this._rescheduleFactor);
                            var n = Math.floor(5 * this._rescheduleFactor * (1 + Math.random()));
                            this._timer = setTimeout(function() {
                                return t._WorkThread(null, !1)
                            }, 1e3 * n), this._Verbose("_ScheduleTimer, next try (s): " + n), this._rescheduleFactor <<= 1, this._rescheduleFactor > 64 && (this._rescheduleFactor = 1)
                        } else {
                            n = 0;
                            var o = (new Date).getTime() - this._lastActiveTime;
                            n = o > u.TimeIntervalForNextSendInMS() ? 0 : u.TimeIntervalForNextSendInMS() - o, this._timer = setTimeout(function() {
                                return t._WorkThread(null, !1)
                            }, n), this._Verbose("_ScheduleTimer, next try: " + n), this._rescheduleFactor = 1
                        }
                }, e.prototype._Verbose = function(e) {
                    this._config.log && this._config.log.Verbose("[TelemetryManagerImpl]: " + e)
                }, e.prototype._Info = function(e) {
                    this._config.log && this._config.log.Info("[TelemetryManagerImpl]: " + e)
                }, e.prototype._Error = function(e) {
                    this._config.log && this._config.log.Error("[TelemetryManagerImpl]: " + e)
                }, e.prototype._Reset = function() {
                    this._Verbose("Reset()"), this._CleanTimer(), this._lastActiveTime = 0, this._rescheduleFactor = 1, this._sendingEvents = [], this._eventsCache = new p
                }, e.prototype.__GetListenerArray = function() {
                    return this._listeners
                }, e.prototype.__GetTotalEventsCount = function() {
                    return this._eventsCache.GetTotalEventsCount()
                }, e.prototype.__IsScheduled = function() {
                    return null != this._timer
                }, e.prototype.__ChageMaxPackageSizeInKB = function(e) {
                    this._MaxPackageSizeInBytes = 1024 * e
                }, e.prototype.__SetTestServerResponseHook = function(e) {
                    this._testServerResponseHook = e
                }, e
            }();
            d._eventTypeRegex = /^[a-zA-Z0-9]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/, d._tag = 0;
            var p = function() {
                function e() {
                    this._events = {}, this._tokens = []
                }
                return e.prototype.AddEvents = function(e, t) {
                    t.length && (this._events[e] || (this._events[e] = [], this._tokens.push(e)), this._events[e].push.apply(this._events[e], t))
                }, e.prototype.IsEmpty = function() {
                    return 0 == this._tokens.length
                }, e.prototype.DequeuEvents = function() {
                    if (0 == this._tokens.length) return null;
                    var e = this._tokens.shift(),
                        t = this._events[e];
                    return delete this._events[e], {
                        tenantToken: e,
                        events: t
                    }
                }, e.prototype.GetTotalEventsCount = function() {
                    var e = 0;
                    for (var t in this._events) e += this._events[t].length;
                    return e
                }, e
            }()
        })((t = e.telemetry || (e.telemetry = {}))._sender || (t._sender = {}));
        var t
    }(e.applications || (e.applications = {}))
}(microsoft || (microsoft = {}));
var microsoft;
! function(e) {
    (function(t) {
        var n = t._sender.TelemetryManagerFactory.CreateTelemetryManager(),
            o = function() {
                this.collectorUrl = null, this.enableAutoUserSession = !1, this.browserOverrides = null, this.disableCookies = !1
            };
        o.COLLECTOR_URL_UNITED_STATES = "https://us.pipe.aria.microsoft.com/Collector/3.0/", o.COLLECTOR_URL_GERMANY = "https://de.pipe.aria.microsoft.com/Collector/3.0/", o.COLLECTOR_URL_AUSTRALIA = "https://au.pipe.aria.microsoft.com/Collector/3.0/", o.COLLECTOR_URL_JAPAN = "https://jp.pipe.aria.microsoft.com/Collector/3.0/", o.COLLECTOR_URL_EUROPE = "https://eu.pipe.aria.microsoft.com/Collector/3.0/", t.LogConfiguration = o;
        var i = function() {
            this.onSaveData = null, this.onGetData = null
        };
        t.LogConfigurationBrowserOverrides = i;
        var r = function() {
                function e() {
                    this.value = null, this.pii = null
                }
                return e._isPii = function(e) {
                    return null !== e && void 0 !== e && e !== t.datamodels.PIIKind.NotSet && !isNaN(e) && void 0 !== t.datamodels.PIIKind[e]
                }, e
            }(),
            a = function() {
                function e() {
                    this.name = null, this.timestamp = null, this.properties = {}, this.eventType = null
                }
                return e.prototype.setProperty = function(n, o, i) {
                    if (!n || !e._propertyNameRegex.test(n)) throw new c(s.INVALID_PROPERTY_NAME);
                    this.properties[n] = i ? {
                        value: o,
                        pii: i != t.datamodels.PIIKind.NotSet ? i : null
                    } : {
                        value: o,
                        pii: null
                    }
                }, e
            }();
        a._propertyNameRegex = /^[a-zA-Z0-9](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/, t.EventProperties = a;
        var s;
        (l = s = t.TelemetryError || (t.TelemetryError = {}))[l.INVALID_TENANT_TOKEN = 1] = "INVALID_TENANT_TOKEN", l[l.MISSING_EVENT_PROPERTIES_NAME = 2] = "MISSING_EVENT_PROPERTIES_NAME", l[l.INVALID_PROPERTY_NAME = 3] = "INVALID_PROPERTY_NAME", l[l.MISSING_FAILURE_SIGNATURE = 5] = "MISSING_FAILURE_SIGNATURE", l[l.MISSING_FAILURE_DETAIL = 6] = "MISSING_FAILURE_DETAIL", l[l.MISSING_PAGEVIEW_ID = 7] = "MISSING_PAGEVIEW_ID", l[l.MISSING_PAGEVIEW_NAME = 8] = "MISSING_PAGEVIEW_NAME", l[l.INVALID_SESSION_STATE = 9] = "INVALID_SESSION_STATE", l[l.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET = 10] = "INVALID_CONFIGURATION_USE_CUSTOM_GET_SET";
        var l, c = function() {
            function e(e) {
                this.errorCode = null, this.errorCode = e
            }
            return e.prototype.ErrorCode = function() {
                return this.errorCode
            }, e.prototype.toString = function() {
                switch (this.errorCode) {
                    case s.INVALID_TENANT_TOKEN:
                        return "Invalid tenant token";
                    case s.MISSING_EVENT_PROPERTIES_NAME:
                        return "Eventproperties.name can not be null or empty";
                    case s.INVALID_PROPERTY_NAME:
                        return "Invalid Key. Key does not conform to regular expression ^[a-zA-Z0-9](([a-zA-Z0-9|_|.]){0,98}[a-zA-Z0-9])?$";
                    case s.MISSING_FAILURE_SIGNATURE:
                        return "Failure signature can't be null or empty.";
                    case s.MISSING_FAILURE_DETAIL:
                        return "Failure detail can't be null or empty.";
                    case s.MISSING_PAGEVIEW_ID:
                        return "Pageview id can't be null or empty.";
                    case s.MISSING_PAGEVIEW_NAME:
                        return "Pageview name can't be null or empty.";
                    case s.INVALID_SESSION_STATE:
                        return "Session state has to be a value from the SessionState enum.";
                    case s.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET:
                        return "Invalid configuration provided during initialization. Both onGetConfigData and onSaveConfigData must be provided together.  These are manditory when running in a non-brower enviornment";
                    default:
                        return "Unknown error"
                }
            }, e
        }();
        t.Exception = c;
        var u = function() {
            function n(e) {
                this.contextMap = {}, this.piiKind = t.datamodels.PIIKind.NotSet, this._allowDeviceInfoFields = !1, this._allowDeviceInfoFields = e
            }
            return n.prototype.setAppId = function(e) {
                e && (this.contextMap["AppInfo.Id"] = e)
            }, n.prototype.setAppVersion = function(e) {
                e && (this.contextMap["AppInfo.Version"] = e)
            }, n.prototype.setAppLanguage = function(e) {
                e && (this.contextMap["AppInfo.Language"] = e)
            }, n.prototype.setDeviceId = function(e) {
                e && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.Id"] = e, f.checkAndUpdateDeviceId(e))
            }, n.prototype.setDeviceOsName = function(e) {
                e && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.OsName"] = e)
            }, n.prototype.setDeviceOsVersion = function(e) {
                e && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.OsVersion"] = e)
            }, n.prototype.setDeviceBrowserName = function(e) {
                e && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.BrowserName"] = e)
            }, n.prototype.setDeviceBrowserVersion = function(e) {
                e && this._allowDeviceInfoFields && (this.contextMap["DeviceInfo.BrowserVersion"] = e)
            }, n.prototype.setUserId = function(t, n, o) {
                if (t && (this.contextMap["UserInfo.Id"] = t), o) this.contextMap["UserInfo.IdType"] = o;
                else {
                    var i;
                    switch (n) {
                        case e.applications.telemetry.datamodels.PIIKind.SipAddress:
                            i = e.applications.telemetry.datamodels.UserIdType.SipAddress;
                            break;
                        case e.applications.telemetry.datamodels.PIIKind.PhoneNumber:
                            i = e.applications.telemetry.datamodels.UserIdType.PhoneNumber;
                            break;
                        case e.applications.telemetry.datamodels.PIIKind.SmtpAddress:
                            i = e.applications.telemetry.datamodels.UserIdType.EmailAddress;
                            break;
                        default:
                            i = e.applications.telemetry.datamodels.UserIdType.Unknown
                    }
                    this.contextMap["UserInfo.IdType"] = i
                }
                if (n) r._isPii(n) && (this.piiKind = n);
                else {
                    var a;
                    switch (o) {
                        case e.applications.telemetry.datamodels.UserIdType.Skype:
                            a = e.applications.telemetry.datamodels.PIIKind.Identity;
                            break;
                        case e.applications.telemetry.datamodels.UserIdType.EmailAddress:
                            a = e.applications.telemetry.datamodels.PIIKind.SmtpAddress;
                            break;
                        case e.applications.telemetry.datamodels.UserIdType.PhoneNumber:
                            a = e.applications.telemetry.datamodels.PIIKind.PhoneNumber;
                            break;
                        case e.applications.telemetry.datamodels.UserIdType.SipAddress:
                            a = e.applications.telemetry.datamodels.PIIKind.SipAddress;
                            break;
                        default:
                            a = e.applications.telemetry.datamodels.PIIKind.NotSet
                    }
                    r._isPii(a) && (this.piiKind = a)
                }
            }, n.prototype.setUserMsaId = function(e) {
                e && (this.contextMap["UserInfo.MsaId"] = e)
            }, n.prototype.setUserANID = function(e) {
                e && (this.contextMap["UserInfo.ANID"] = e)
            }, n.prototype.setUserAdvertisingId = function(e) {
                e && (this.contextMap["UserInfo.AdvertisingId"] = e)
            }, n.prototype.setUserTimeZone = function(e) {
                e && (this.contextMap["UserInfo.TimeZone"] = e)
            }, n.prototype.setUserLanguage = function(e) {
                e && (this.contextMap["UserInfo.Language"] = e)
            }, n
        }();
        t.SemanticContext = u;
        var f = function() {
            function e() {}
            return e.initialize = function(n, o) {
                this._overrides = n, this._disableCookies = o;
                var i = e._getAppLanguage();
                i && e.semanticContext.setAppLanguage(i);
                var r = e._getUserLanguage();
                r && e.semanticContext.setUserLanguage(r);
                var a = (new Date).getTimezoneOffset(),
                    s = a % 60,
                    l = (a - s) / 60,
                    c = "+";
                if (l > 0 && (c = "-"), e.semanticContext.setUserTimeZone(c + (l < 10 ? "0" + l : l.toString()) + ":" + (s < 10 ? "0" + s : s.toString())), e._getUserAgent() && (e.semanticContext.setDeviceBrowserName(e._getBrowserName()), e.semanticContext.setDeviceBrowserVersion(e._getBrowserVersion()), e.semanticContext.setDeviceOsName(e._getOsName()), e.semanticContext.setDeviceOsVersion(e._getOsVersion())), this._disableCookies && !this._overrides) return e._deleteCookie(e.DEVICE_ID_COOKIE), void e._deleteCookie(e.FIRST_LAUNCH_TIME_COOKIE);
                var u = e._getData(e.DEVICE_ID_COOKIE);
                u && "" != u || (u = t.datamodels.utils.GetGuid()), e.semanticContext.setDeviceId(u)
            }, e.checkAndUpdateDeviceId = function(t) {
                var n = e._getData(e.DEVICE_ID_COOKIE),
                    o = e._getData(e.FIRST_LAUNCH_TIME_COOKIE);
                n !== t && (o = (new Date).getTime().toString()), e.firstLaunchTime = parseInt(o), e._saveData(e.DEVICE_ID_COOKIE, t), e._saveData(e.FIRST_LAUNCH_TIME_COOKIE, o)
            }, e._saveData = function(t, n) {
                if (this._overrides) this._overrides.onSaveData(t, n);
                else if ("undefined" != typeof document && void 0 !== document.cookie && !e._disableCookies) {
                    var o = new Date;
                    o.setTime(o.getTime() + 31536e6);
                    var i = "expires=" + o.toUTCString();
                    document.cookie = t + "=" + n + "; " + i
                }
            }, e._getData = function(t) {
                if (this._overrides) return this._overrides.onGetData(t) || "";
                if ("undefined" != typeof document && void 0 !== document.cookie && !e._disableCookies)
                    for (var n = t + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
                        for (var r = o[i], a = 0;
                            " " == r.charAt(a);) a++;
                        if (0 == (r = r.substring(a)).indexOf(n)) return r.substring(n.length, r.length)
                    }
                return ""
            }, e._getUserAgent = function() {
                return "undefined" != typeof navigator ? navigator.userAgent || "" : ""
            }, e._getAppLanguage = function() {
                return "undefined" != typeof document && document.documentElement ? document.documentElement.lang : null
            }, e._getUserLanguage = function() {
                return "undefined" != typeof navigator ? navigator.userLanguage || navigator.language : null
            }, e._userAgentContainsString = function(t) {
                return e._getUserAgent().indexOf(t) > -1
            }, e._isIe = function() {
                return e._userAgentContainsString("Trident")
            }, e._isEdge = function() {
                return e._userAgentContainsString(e.BROWSERS.EDGE)
            }, e._isOpera = function() {
                return e._userAgentContainsString("OPR/")
            }, e._getBrowserName = function() {
                return e._isOpera() ? e.BROWSERS.UNKNOWN : e._userAgentContainsString(e.BROWSERS.PHANTOMJS) ? e.BROWSERS.PHANTOMJS : e._isIe() ? e.BROWSERS.MSIE : e._isEdge() ? e.BROWSERS.EDGE : e._userAgentContainsString(e.BROWSERS.ELECTRON) ? e.BROWSERS.ELECTRON : e._userAgentContainsString(e.BROWSERS.CHROME) ? e.BROWSERS.CHROME : e._userAgentContainsString(e.BROWSERS.FIREFOX) ? e.BROWSERS.FIREFOX : e._userAgentContainsString(e.BROWSERS.SAFARI) ? e.BROWSERS.SAFARI : e._userAgentContainsString(e.BROWSERS.SKYPE_SHELL) ? e.BROWSERS.SKYPE_SHELL : e.BROWSERS.UNKNOWN
            }, e._getBrowserVersion = function() {
                return e._isIe() ? function() {
                    var t, n = e._getUserAgent(),
                        o = n.match(new RegExp(e.BROWSERS.MSIE + " " + e.REGEX_VERSION));
                    return o ? o[1] : (t = n.match(new RegExp("rv:" + e.REGEX_VERSION))) ? t[1] : void 0
                }() : function(t) {
                    var n;
                    return t === e.BROWSERS.SAFARI && (t = "Version"), (n = e._getUserAgent().match(new RegExp(t + "/" + e.REGEX_VERSION))) ? n[1] : e.UNKNOWN_VERSION
                }(e._getBrowserName())
            }, e._getOsName = function() {
                return e._getUserAgent().match(/windows\sphone\s\d+\.\d+/i) ? e.OPERATING_SYSTEMS.WINDOWS_PHONE : e._getUserAgent().match(/ arm;/i) ? e.OPERATING_SYSTEMS.WINDOWS_RT : e._getUserAgent().match(/(iPad|iPhone|iPod)(?=.*like Mac OS X)/i) ? e.OPERATING_SYSTEMS.IOS : e._getUserAgent().match(/android/i) ? e.OPERATING_SYSTEMS.ANDROID : e._getUserAgent().match(/(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i) ? e.OPERATING_SYSTEMS.LINUX : e._getUserAgent().match(/(macintosh|mac os x)/i) ? e.OPERATING_SYSTEMS.MACOSX : e._getUserAgent().match(/(windows|win32)/i) ? e.OPERATING_SYSTEMS.WINDOWS : e.OPERATING_SYSTEMS.UNKNOWN
            }, e._getOsVersion = function() {
                return e._getOsName() === e.OPERATING_SYSTEMS.WINDOWS ? function() {
                    var t = e._getUserAgent().match(new RegExp("Windows NT " + e.REGEX_VERSION));
                    return t && e.VERSION_MAPPINGS[t[1]] ? e.VERSION_MAPPINGS[t[1]] : e.UNKNOWN_VERSION
                }() : e._getOsName() === e.OPERATING_SYSTEMS.MACOSX ? function() {
                    var t = e._getUserAgent().match(new RegExp(e.OPERATING_SYSTEMS.MACOSX + " " + e.REGEX_VERSION_MAC));
                    if (t) {
                        var n = t[1].replace(/_/g, ".");
                        if (n) {
                            var o = (i = n, i.indexOf(".") > -1 ? "." : i.indexOf("_") > -1 ? "_" : null);
                            return o ? n.split(o)[0] : n
                        }
                    }
                    var i;
                    return e.UNKNOWN_VERSION
                }() : e.UNKNOWN_VERSION
            }, e
        }();
        f.semanticContext = new u(!0), f.firstLaunchTime = -1, f.BROWSERS = {
            MSIE: "MSIE",
            CHROME: "Chrome",
            FIREFOX: "Firefox",
            SAFARI: "Safari",
            EDGE: "Edge",
            ELECTRON: "Electron",
            SKYPE_SHELL: "SkypeShell",
            PHANTOMJS: "PhantomJS",
            UNKNOWN: "Unknown"
        }, f.OPERATING_SYSTEMS = {
            WINDOWS: "Windows",
            MACOSX: "Mac OS X",
            WINDOWS_PHONE: "Windows Phone",
            WINDOWS_RT: "Windows RT",
            IOS: "iOS",
            ANDROID: "Android",
            LINUX: "Linux",
            UNKNOWN: "Unknown"
        }, f.VERSION_MAPPINGS = {
            5.1: "XP",
            "6.0": "Vista",
            6.1: "7",
            6.2: "8",
            6.3: "8.1",
            "10.0": "10"
        }, f.REGEX_VERSION = "([\\d,.]+)", f.REGEX_VERSION_MAC = "([\\d,_,.]+)", f.UNKNOWN_VERSION = "Unknown", f.DEVICE_ID_COOKIE = "MicrosoftApplicationsTelemetryDeviceId", f.FIRST_LAUNCH_TIME_COOKIE = "MicrosoftApplicationsTelemetryFirstLaunchTime", f._deleteCookie = function(e) {
            "undefined" != typeof document && void 0 !== document.cookie && (document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;")
        }, f._disableCookies = !1;
        var d;
        (p = d = t.SessionState || (t.SessionState = {}))[p.STARTED = 0] = "STARTED", p[p.ENDED = 1] = "ENDED";
        var p, m = function() {
            function e() {}
            return e.initialize = function(t, o) {
                if (!e._initialized) {
                    if (!t) throw new c(s.INVALID_TENANT_TOKEN);
                    if (e._defaultToken = t, e._tmConfig.collectorUrl = "https://browser.pipe.aria.microsoft.com/Collector/3.0/", e._configuration = o, !("undefined" != typeof window || o && o.browserOverrides && o.browserOverrides.onGetData)) throw new c(s.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET);
                    var r = null;
                    if (o)
                        if (o.collectorUrl && (e._tmConfig.collectorUrl = o.collectorUrl), o.browserOverrides) {
                            if (r = new i, o.browserOverrides.onGetData ? !o.browserOverrides.onSaveData : o.browserOverrides.onSaveData) throw new c(s.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET);
                            r.onGetData = o.browserOverrides.onGetData, r.onSaveData = o.browserOverrides.onSaveData
                        } else o.disableCookies && (e._sessionEnabled = !1);
                    n.Initialize(e._tmConfig), n.Start(), f.initialize(r, o.disableCookies), e._initialized = !0, "undefined" != typeof window && window.addEventListener && (o && o.enableAutoUserSession && (e._logger = new h, e._logger.logSession(d.STARTED)), window.addEventListener("beforeunload", e._teardown))
                }
            }, e.pauseTransmission = function() {
                n.Pause()
            }, e.resumeTransmission = function() {
                n.Resume()
            }, e.flush = function(e) {
                n.Flush(e)
            }, e.addCallbackListener = function(t) {
                e._initialized && n.AddListener(t)
            }, e.setContext = function(t, n, o) {
                e._contextProperties.setProperty(t, n, o)
            }, e.isInitialized = function() {
                return e._initialized
            }, e.getDefaultToken = function() {
                return e._defaultToken
            }, e.getSemanticContext = function() {
                return e._semanticContext
            }, e._getInitIdForToken = function(n) {
                return e._initIdMap[n] || (e._initIdMap[n] = t.datamodels.utils.GetGuid()), e._initIdMap[n]
            }, e._getSequenceForToken = function(t) {
                return e._sequenceMap[t] || (e._sequenceMap[t] = 0), e._sequenceMap[t]++, e._sequenceMap[t]
            }, e._teardown = function() {
                e._logger && e._logger.logSession(d.ENDED), e.flush()
            }, e.__backToUninitialized = function() {
                e._tmConfig = new t._sender.TelemetryConfig, e._semanticContext = new u(!0), e._contextProperties = new a, e._configuration = null, n = t._sender.TelemetryManagerFactory.CreateTelemetryManager(), e._initialized = !1, e._initIdMap = {}, e._sequenceMap = {}
            }, e
        }();
        m._initialized = !1, m._defaultToken = null, m._tmConfig = new t._sender.TelemetryConfig, m._logger = null, m._initIdMap = {}, m._sequenceMap = {}, m._configuration = null, m._contextProperties = new a, m._semanticContext = new u(!0), m._sessionEnabled = !0, t.LogManager = m;
        var h = function() {
            function e(e) {
                this._initId = null, this._tenantToken = null, this._contextProperties = new a, this._semanticContext = new u(!1), this._sessionStartTime = 0, this._sessionId = null, this._tenantToken = e || m.getDefaultToken(), this._initId = m._getInitIdForToken(this._tenantToken)
            }
            return e.prototype.logEvent = function(e) {
                if (!e.name) throw new c(s.MISSING_EVENT_PROPERTIES_NAME);
                var t = this._createEventRecord(e.name, e.eventType);
                this._addPropertiesAndSendEvent(t, e)
            }, e.prototype.logFailure = function(e, t, n, o, i) {
                if (!e) throw new c(s.MISSING_FAILURE_SIGNATURE);
                if (!t) throw new c(s.MISSING_FAILURE_DETAIL);
                var r = this._createEventRecord("failure", "failure");
                r.Extension.Add("Failure.Signature", e), r.Extension.Add("Failure.Detail", t), n && r.Extension.Add("Failure.Category", n), o && r.Extension.Add("Failure.Id", o), this._addPropertiesAndSendEvent(r, i)
            }, e.prototype.logPageView = function(e, t, n, o, i, r) {
                if (!e) throw new c(s.MISSING_PAGEVIEW_ID);
                if (!t) throw new c(s.MISSING_PAGEVIEW_NAME);
                var a = this._createEventRecord("pageview", "pageview");
                a.Extension.Add("PageView.Id", e), a.Extension.Add("PageView.Name", t), n && a.Extension.Add("PageView.Category", n), o && a.Extension.Add("PageView.Uri", o), i && a.Extension.Add("PageView.ReferrerUri", i), this._addPropertiesAndSendEvent(a, r)
            }, e.prototype.logSession = function(e, n) {
                if (m._sessionEnabled) {
                    if (e !== d.STARTED && e !== d.ENDED) throw new c(s.INVALID_SESSION_STATE);
                    var o = this._createEventRecord("session", "session");
                    if (e === d.STARTED) {
                        if (this._sessionStartTime > 0) return;
                        this._sessionStartTime = (new Date).getTime(), this._sessionId = t.datamodels.utils.GetGuid(), o.Extension.Add("Session.Id", this._sessionId), o.Extension.Add("Session.State", "Started")
                    } else if (e === d.ENDED) {
                        if (0 == this._sessionStartTime) return;
                        var i = Math.floor(((new Date).getTime() - this._sessionStartTime) / 1e3);
                        o.Extension.Add("Session.Duration", i.toString()), o.Extension.Add("Session.DurationBucket", this._getSessionDurationFromTime(i)), o.Extension.Add("Session.Id", this._sessionId), o.Extension.Add("Session.State", "Ended"), this._sessionId = null, this._sessionStartTime = 0
                    }
                    o.Extension.Add("Session.FirstLaunchTime", this._getISOString(new Date(f.firstLaunchTime))), this._addPropertiesAndSendEvent(o, n)
                }
            }, e.prototype.getSessionId = function() {
                return this._sessionId
            }, e.prototype.setContext = function(e, t, n) {
                this._contextProperties.setProperty(e, t, n)
            }, e.prototype.getSemanticContext = function() {
                return this._semanticContext
            }, e.prototype._getSessionDurationFromTime = function(e) {
                return e < 0 ? "Undefined" : e <= 3 ? "UpTo3Sec" : e <= 10 ? "UpTo10Sec" : e <= 30 ? "UpTo30Sec" : e <= 60 ? "UpTo60Sec" : e <= 180 ? "UpTo3Min" : e <= 600 ? "UpTo10Min" : e <= 1800 ? "UpTo30Min" : "Above30Min"
            }, e.prototype._createEventRecord = function(e, n) {
                var o = new t.datamodels.Record;
                n || (n = "custom"), o.EventType = e.toLowerCase(), o.Type = n.toLowerCase(), o.Extension.Add("EventInfo.Source", "JS_default_source"), o.Extension.Add("EventInfo.InitId", this._initId), o.Extension.Add("EventInfo.Sequence", m._getSequenceForToken(this._tenantToken).toString()), o.Extension.Add("EventInfo.Name", e.toLowerCase());
                var i = new Date;
                return o.Timestamp = t.datamodels.utils.GetTimeStampWithValue(i.getTime()), o.Extension.Add("EventInfo.Time", this._getISOString(i)), o.Extension.Add("EventInfo.SdkVersion", "ACT-Web-JS-" + clienttelemetry_build.version), o
            }, e.prototype._getISOString = function(e) {
                function t(e) {
                    return e < 10 ? "0" + e : e.toString()
                }
                return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds()) + "." + (n = e.getUTCMilliseconds(), n < 10 ? "00" + n : n < 100 ? "0" + n : n.toString()) + "Z";
                var n
            }, e.prototype._addCustomPropertiesToEvent = function(e, t) {
                this._addSemanticContext(e, f.semanticContext), this._addSemanticContext(e, m._semanticContext), this._addSemanticContext(e, this._semanticContext), this._sessionId && e.Extension.Add("Session.Id", this._sessionId), this._addEventPropertiesToEvent(e, m._contextProperties), this._addEventPropertiesToEvent(e, this._contextProperties), this._addEventPropertiesToEvent(e, t)
            }, e.prototype._addSemanticContext = function(e, n) {
                if (n && n.contextMap) {
                    var o = n.contextMap;
                    for (var i in n.contextMap) "UserInfo.Id" == i && n.piiKind != t.datamodels.PIIKind.NotSet ? e.AddOrReplacePII(i, o[i], n.piiKind) : e.Extension.AddOrReplace(i, o[i])
                }
            }, e.prototype._addEventPropertiesToEvent = function(e, n) {
                if (n) {
                    n.timestamp && n.timestamp >= new Date("1/1/2000").getTime() && (e.Timestamp = t.datamodels.utils.GetTimeStampWithValue(n.timestamp), e.Extension.AddOrReplace("EventInfo.Time", this._getISOString(new Date(n.timestamp)))), n.name && (e.EventType = n.name.toLowerCase(), e.Extension.AddOrReplace("EventInfo.Name", n.name.toLowerCase()));
                    var o = n.properties;
                    if (o)
                        for (var i in o) i && (o[i].value || !1 === o[i].value || 0 == o[i].value || "" == o[i].value) && (r._isPii(o[i].pii) ? (e.AddOrReplacePII(i, o[i].value.toString(), o[i].pii), e.Extension.Remove(i)) : (e.Extension.AddOrReplace(i, o[i].value.toString()), e.PIIExtensions.Remove(i)))
                }
            }, e.prototype._addPropertiesAndSendEvent = function(e, t) {
                this._addCustomPropertiesToEvent(e, t), m.isInitialized() && (this._sanitizeName(e), n.SendAsync(this._tenantToken, [e]))
            }, e.prototype._sanitizeName = function(e) {
                var t = e.EventType.replace(/\./g, "_");
                e.EventType = t, e.Extension.AddOrReplace("EventInfo.Name", t)
            }, e
        }();
        t.Logger = h
    })((t = e.applications || (e.applications = {})).telemetry || (t.telemetry = {}));
    var t
}(microsoft || (microsoft = {})), "undefined" != typeof module && (module.exports = microsoft.applications.telemetry), define("aria", function() {}), define("apollo/TrackingAria", ["aria"], function(e) {
    "use strict";
    null !== e && void 0 !== e || (e = window.microsoft.applications.telemetry);
    var t = function(t) {
        (function(t) {
            var n = new e.LogConfiguration;
            n.disableCookies = !0, e.LogManager.initialize(t, n), this.defaultLogger = new e.Logger
        }).call(this, t)
    };
    return t.prototype.logEvent = function(t, n) {
        var o = new e.EventProperties,
            i = n || {};
        o.name = t;
        for (var r in i) n.hasOwnProperty(r) && o.setProperty(r, i[r]);
        this.defaultLogger.logEvent(o)
    }, t
}), define("apollo/tracking.aria", ["apollo/document", "apollo/user", "apollo/user.preferences", "apollo/settings", "apollo/responsive", "apollo/TrackingAria", "apollo/device"], function(e, t, n, o, i, r, a) {
    "use strict";
    var s = e.getEnvironment(),
        l = t.getLanguageCode(),
        c = n.isAuthenticated() ? "1" : "0",
        u = $("html").data("pagepath"),
        f = f || new r(o.errorsLogger.token),
        d = function(e, t) {
            return "object" == typeof e && null !== e ? JSON.stringify(e) : e || t
        };
    return {
        logConsoleError: function(e, t) {
            var n = {
                env: s,
                lang: l,
                auth: c,
                pagename: u,
                responsive: i.getCurrentState(),
                err: d(e, "error"),
                requireType: e && e.requireType ? e.requireType : "",
                modules: e && e.requireModules ? e.requireModules : "",
                method: t
            };
            f.logEvent("consoleError", n)
        },
        logEvent: function(e, t, n) {
            var o = {
                env: s,
                lang: l,
                auth: c,
                pagename: u,
                responsive: i.getCurrentState(),
                eventName: e,
                eventSource: n,
                eventProperties: d(t, "")
            };
            f.logEvent("event", o)
        },
        logPerformanceData: function(e) {
            var t = {
                env: s,
                lang: l,
                pagename: u,
                responsive: i.getCurrentState(),
                platform: a.getPlatform(),
                loadTime: e.loadTime,
                experienceServed: e.experienceServed,
                fallbackServed: e.fallbackServed,
                fallbackReason: e.fallbackReason
            };
            f.logEvent("performance_data", t)
        }
    }
}), define("artemis/pages/master", ["apollo/responsive.v2", "artemis/core/settings/settings", "apollo/tracking", "artemis/components/uhf-header", "apollo/device", "scom/main", "apollo/footer", "scom/uhfFooter", "apollo/displayName", "apollo/msCookieCompliance", "apollo/tracking.aria"], function(e, t, n, o, i, r, a, s, l, c, u) {
    return function(e) {
        function t(t) {
            for (var n, o, r = t[0], a = t[1], s = 0, c = []; s < r.length; s++) o = r[s], i[o] && c.push(i[o][0]), i[o] = 0;
            for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            for (l && l(t); c.length;) c.shift()()
        }

        function n(t) {
            if (o[t]) return o[t].exports;
            var i = o[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        var o = {},
            i = {
                45: 0
            };
        n.m = e, n.c = o, n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
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
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) n.d(o, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return o
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n.oe = function(e) {
            throw e
        };
        var r = window.webpackJsonp = window.webpackJsonp || [],
            a = r.push.bind(r);
        r.push = t, r = r.slice();
        for (var s = 0; s < r.length; s++) t(r[s]);
        var l = a;
        return n(n.s = 487)
    }({
        0: function(e, t) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        },
        1: function(e, t, n) {
            var o = n(13)("wks"),
                i = n(12),
                r = n(0).Symbol,
                a = "function" == typeof r;
            (e.exports = function(e) {
                return o[e] || (o[e] = a && r[e] || (a ? r : i)("Symbol." + e))
            }).store = o
        },
        10: function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        },
        104: function(e, t, n) {
            "use strict";
            var o = n(29);
            e.exports.f = function(e) {
                return new function(e) {
                    var t, n;
                    this.promise = new e(function(e, o) {
                        if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                        t = e, n = o
                    }), this.resolve = o(t), this.reject = o(n)
                }(e)
            }
        },
        11: function(e, t, n) {
            var o = n(32),
                i = n(15);
            e.exports = function(e) {
                return o(i(e))
            }
        },
        12: function(e, t) {
            var n = 0,
                o = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
            }
        },
        127: function(e, t, n) {
            var o, i, r, a = n(28),
                s = n(219),
                l = n(39),
                c = n(23),
                u = n(0),
                f = u.process,
                d = u.setImmediate,
                p = u.clearImmediate,
                m = u.MessageChannel,
                h = u.Dispatch,
                v = 0,
                g = {},
                y = function() {
                    var e = +this;
                    if (g.hasOwnProperty(e)) {
                        var t = g[e];
                        delete g[e], t()
                    }
                },
                _ = function(e) {
                    y.call(e.data)
                };
            d && p || (d = function(e) {
                for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
                return g[++v] = function() {
                    s("function" == typeof e ? e : Function(e), t)
                }, o(v), v
            }, p = function(e) {
                delete g[e]
            }, "process" == n(20)(f) ? o = function(e) {
                f.nextTick(a(y, e, 1))
            } : h && h.now ? o = function(e) {
                h.now(a(y, e, 1))
            } : m ? (r = (i = new m).port2, i.port1.onmessage = _, o = a(r.postMessage, r, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function(e) {
                u.postMessage(e + "", "*")
            }, u.addEventListener("message", _, !1)) : o = "onreadystatechange" in c("script") ? function(e) {
                l.appendChild(c("script")).onreadystatechange = function() {
                    l.removeChild(this), y.call(e)
                }
            } : function(e) {
                setTimeout(a(y, e, 1), 0)
            }), e.exports = {
                set: d,
                clear: p
            }
        },
        128: function(e, t) {
            e.exports = function(e) {
                try {
                    return {
                        e: !1,
                        v: e()
                    }
                } catch (e) {
                    return {
                        e: !0,
                        v: e
                    }
                }
            }
        },
        129: function(e, t, n) {
            var o = n(4),
                i = n(5),
                r = n(104);
            e.exports = function(e, t) {
                if (o(e), i(t) && t.constructor === e) return t;
                var n = r.f(e);
                return (0, n.resolve)(t), n.promise
            }
        },
        13: function(e, t, n) {
            var o = n(8),
                i = n(0),
                r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
            (e.exports = function(e, t) {
                return r[e] || (r[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: o.version,
                mode: n(18) ? "pure" : "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            })
        },
        14: function(e, t) {
            e.exports = {}
        },
        140: function(t, n) {
            t.exports = e
        },
        15: function(e, t) {
            e.exports = function(e) {
                if (void 0 == e) throw TypeError("Can't call method on  " + e);
                return e
            }
        },
        16: function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        17: function(e, t, n) {
            var o = n(0),
                i = n(8),
                r = n(2),
                a = n(9),
                s = n(28),
                l = function(e, t, n) {
                    var c, u, f, d, p = e & l.F,
                        m = e & l.G,
                        h = e & l.S,
                        v = e & l.P,
                        g = e & l.B,
                        y = m ? o : h ? o[t] || (o[t] = {}) : (o[t] || {}).prototype,
                        _ = m ? i : i[t] || (i[t] = {}),
                        E = _.prototype || (_.prototype = {});
                    for (c in m && (n = t), n) f = ((u = !p && y && void 0 !== y[c]) ? y : n)[c], d = g && u ? s(f, o) : v && "function" == typeof f ? s(Function.call, f) : f, y && a(y, c, f, e & l.U), _[c] != f && r(_, c, d), v && E[c] != f && (E[c] = f)
                };
            o.core = i, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
        },
        18: function(e, t) {
            e.exports = !1
        },
        19: function(e, t, n) {
            var o = n(33),
                i = n(24);
            e.exports = Object.keys || function(e) {
                return o(e, i)
            }
        },
        2: function(e, t, n) {
            var o = n(7),
                i = n(16);
            e.exports = n(3) ? function(e, t, n) {
                return o.f(e, t, i(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        },
        20: function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1)
            }
        },
        21: function(e, t) {
            var n = Math.ceil,
                o = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
            }
        },
        214: function(e, t, n) {
            n(215), n(69), n(43), n(216), n(224), n(225), e.exports = n(8).Promise
        },
        215: function(e, t, n) {
            "use strict";
            var o = n(51),
                i = {};
            i[n(1)("toStringTag")] = "z", i + "" != "[object z]" && n(9)(Object.prototype, "toString", function() {
                return "[object " + o(this) + "]"
            }, !0)
        },
        216: function(e, t, n) {
            "use strict";
            var o, i, r, a, s = n(18),
                l = n(0),
                c = n(28),
                u = n(51),
                f = n(17),
                d = n(5),
                p = n(29),
                m = n(217),
                h = n(218),
                v = n(58),
                g = n(127).set,
                y = n(220)(),
                _ = n(104),
                E = n(128),
                S = n(221),
                T = n(129),
                b = l.TypeError,
                I = l.process,
                O = I && I.versions,
                w = O && O.v8 || "",
                A = l.Promise,
                R = "process" == u(I),
                N = function() {},
                C = i = _.f,
                x = !! function() {
                    try {
                        var e = A.resolve(1),
                            t = (e.constructor = {})[n(1)("species")] = function(e) {
                                e(N, N)
                            };
                        return (R || "function" == typeof PromiseRejectionEvent) && e.then(N) instanceof t && 0 !== w.indexOf("6.6") && -1 === S.indexOf("Chrome/66")
                    } catch (e) {}
                }(),
                P = function(e) {
                    var t;
                    return !(!d(e) || "function" != typeof(t = e.then)) && t
                },
                k = function(e, t) {
                    if (!e._n) {
                        e._n = !0;
                        var n = e._c;
                        y(function() {
                            for (var o = e._v, i = 1 == e._s, r = 0, a = function(t) {
                                    var n, r, a, s = i ? t.ok : t.fail,
                                        l = t.resolve,
                                        c = t.reject,
                                        u = t.domain;
                                    try {
                                        s ? (i || (2 == e._h && L(e), e._h = 1), !0 === s ? n = o : (u && u.enter(), n = s(o), u && (u.exit(), a = !0)), n === t.promise ? c(b("Promise-chain cycle")) : (r = P(n)) ? r.call(n, l, c) : l(n)) : c(o)
                                    } catch (e) {
                                        u && !a && u.exit(), c(e)
                                    }
                                }; n.length > r;) a(n[r++]);
                            e._c = [], e._n = !1, t && !e._h && D(e)
                        })
                    }
                },
                D = function(e) {
                    g.call(l, function() {
                        var t, n, o, i = e._v,
                            r = M(e);
                        if (r && (t = E(function() {
                                R ? I.emit("unhandledRejection", i, e) : (n = l.onunhandledrejection) ? n({
                                    promise: e,
                                    reason: i
                                }) : (o = l.console) && o.error && o.error("Unhandled promise rejection", i)
                            }), e._h = R || M(e) ? 2 : 1), e._a = void 0, r && t.e) throw t.v
                    })
                },
                M = function(e) {
                    return 1 !== e._h && 0 === (e._a || e._c).length
                },
                L = function(e) {
                    g.call(l, function() {
                        var t;
                        R ? I.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({
                            promise: e,
                            reason: e._v
                        })
                    })
                },
                B = function(e) {
                    var t = this;
                    t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), k(t, !0))
                },
                j = function(e) {
                    var t, n = this;
                    if (!n._d) {
                        n._d = !0, n = n._w || n;
                        try {
                            if (n === e) throw b("Promise can't be resolved itself");
                            (t = P(e)) ? y(function() {
                                var o = {
                                    _w: n,
                                    _d: !1
                                };
                                try {
                                    t.call(e, c(j, o, 1), c(B, o, 1))
                                } catch (e) {
                                    B.call(o, e)
                                }
                            }): (n._v = e, n._s = 1, k(n, !1))
                        } catch (e) {
                            B.call({
                                _w: n,
                                _d: !1
                            }, e)
                        }
                    }
                };
            x || (A = function(e) {
                m(this, A, "Promise", "_h"), p(e), o.call(this);
                try {
                    e(c(j, this, 1), c(B, this, 1))
                } catch (e) {
                    B.call(this, e)
                }
            }, (o = function(e) {
                this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
            }).prototype = n(222)(A.prototype, {
                then: function(e, t) {
                    var n = C(v(this, A));
                    return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = R ? I.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && k(this, !1), n.promise
                },
                catch: function(e) {
                    return this.then(void 0, e)
                }
            }), r = function() {
                var e = new o;
                this.promise = e, this.resolve = c(j, e, 1), this.reject = c(B, e, 1)
            }, _.f = C = function(e) {
                return e === A || e === a ? new r(e) : i(e)
            }), f(f.G + f.W + f.F * !x, {
                Promise: A
            }), n(25)(A, "Promise"), n(223)("Promise"), a = n(8).Promise, f(f.S + f.F * !x, "Promise", {
                reject: function(e) {
                    var t = C(this);
                    return (0, t.reject)(e), t.promise
                }
            }), f(f.S + f.F * (s || !x), "Promise", {
                resolve: function(e) {
                    return T(s && this === a ? A : this, e)
                }
            }), f(f.S + f.F * !(x && n(73)(function(e) {
                A.all(e).catch(N)
            })), "Promise", {
                all: function(e) {
                    var t = this,
                        n = C(t),
                        o = n.resolve,
                        i = n.reject,
                        r = E(function() {
                            var n = [],
                                r = 0,
                                a = 1;
                            h(e, !1, function(e) {
                                var s = r++,
                                    l = !1;
                                n.push(void 0), a++, t.resolve(e).then(function(e) {
                                    l || (l = !0, n[s] = e, --a || o(n))
                                }, i)
                            }), --a || o(n)
                        });
                    return r.e && i(r.v), n.promise
                },
                race: function(e) {
                    var t = this,
                        n = C(t),
                        o = n.reject,
                        i = E(function() {
                            h(e, !1, function(e) {
                                t.resolve(e).then(n.resolve, o)
                            })
                        });
                    return i.e && o(i.v), n.promise
                }
            })
        },
        217: function(e, t) {
            e.exports = function(e, t, n, o) {
                if (!(e instanceof t) || void 0 !== o && o in e) throw TypeError(n + ": incorrect invocation!");
                return e
            }
        },
        218: function(e, t, n) {
            var o = n(28),
                i = n(70),
                r = n(71),
                a = n(4),
                s = n(27),
                l = n(72),
                c = {},
                u = {};
            (t = e.exports = function(e, t, n, f, d) {
                var p, m, h, v, g = d ? function() {
                        return e
                    } : l(e),
                    y = o(n, f, t ? 2 : 1),
                    _ = 0;
                if ("function" != typeof g) throw TypeError(e + " is not iterable!");
                if (r(g)) {
                    for (p = s(e.length); p > _; _++)
                        if ((v = t ? y(a(m = e[_])[0], m[1]) : y(e[_])) === c || v === u) return v
                } else
                    for (h = g.call(e); !(m = h.next()).done;)
                        if ((v = i(h, y, m.value, t)) === c || v === u) return v
            }).BREAK = c, t.RETURN = u
        },
        219: function(e, t) {
            e.exports = function(e, t, n) {
                var o = void 0 === n;
                switch (t.length) {
                    case 0:
                        return o ? e() : e.call(n);
                    case 1:
                        return o ? e(t[0]) : e.call(n, t[0]);
                    case 2:
                        return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                    case 3:
                        return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                    case 4:
                        return o ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
                }
                return e.apply(n, t)
            }
        },
        22: function(e, t, n) {
            var o = n(13)("keys"),
                i = n(12);
            e.exports = function(e) {
                return o[e] || (o[e] = i(e))
            }
        },
        220: function(e, t, n) {
            var o = n(0),
                i = n(127).set,
                r = o.MutationObserver || o.WebKitMutationObserver,
                a = o.process,
                s = o.Promise,
                l = "process" == n(20)(a);
            e.exports = function() {
                var e, t, n, c = function() {
                    var o, i;
                    for (l && (o = a.domain) && o.exit(); e;) {
                        i = e.fn, e = e.next;
                        try {
                            i()
                        } catch (o) {
                            throw e ? n() : t = void 0, o
                        }
                    }
                    t = void 0, o && o.enter()
                };
                if (l) n = function() {
                    a.nextTick(c)
                };
                else if (!r || o.navigator && o.navigator.standalone)
                    if (s && s.resolve) {
                        var u = s.resolve(void 0);
                        n = function() {
                            u.then(c)
                        }
                    } else n = function() {
                        i.call(o, c)
                    };
                else {
                    var f = !0,
                        d = document.createTextNode("");
                    new r(c).observe(d, {
                        characterData: !0
                    }), n = function() {
                        d.data = f = !f
                    }
                }
                return function(o) {
                    var i = {
                        fn: o,
                        next: void 0
                    };
                    t && (t.next = i), e || (e = i, n()), t = i
                }
            }
        },
        221: function(e, t, n) {
            var o = n(0).navigator;
            e.exports = o && o.userAgent || ""
        },
        222: function(e, t, n) {
            var o = n(9);
            e.exports = function(e, t, n) {
                for (var i in t) o(e, i, t[i], n);
                return e
            }
        },
        223: function(e, t, n) {
            "use strict";
            var o = n(0),
                i = n(7),
                r = n(3),
                a = n(1)("species");
            e.exports = function(e) {
                var t = o[e];
                r && t && !t[a] && i.f(t, a, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        },
        224: function(e, t, n) {
            "use strict";
            var o = n(17),
                i = n(8),
                r = n(0),
                a = n(58),
                s = n(129);
            o(o.P + o.R, "Promise", {
                finally: function(e) {
                    var t = a(this, i.Promise || r.Promise),
                        n = "function" == typeof e;
                    return this.then(n ? function(n) {
                        return s(t, e()).then(function() {
                            return n
                        })
                    } : e, n ? function(n) {
                        return s(t, e()).then(function() {
                            throw n
                        })
                    } : e)
                }
            })
        },
        225: function(e, t, n) {
            "use strict";
            var o = n(17),
                i = n(104),
                r = n(128);
            o(o.S, "Promise", {
                try: function(e) {
                    var t = i.f(this),
                        n = r(e);
                    return (n.e ? t.reject : t.resolve)(n.v), t.promise
                }
            })
        },
        23: function(e, t, n) {
            var o = n(5),
                i = n(0).document,
                r = o(i) && o(i.createElement);
            e.exports = function(e) {
                return r ? i.createElement(e) : {}
            }
        },
        24: function(e, t) {
            e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        },
        25: function(e, t, n) {
            var o = n(7).f,
                i = n(6),
                r = n(1)("toStringTag");
            e.exports = function(e, t, n) {
                e && !i(e = n ? e : e.prototype, r) && o(e, r, {
                    configurable: !0,
                    value: t
                })
            }
        },
        26: function(e, t, n) {
            var o = n(5);
            e.exports = function(e, t) {
                if (!o(e)) return e;
                var n, i;
                if (t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
                if ("function" == typeof(n = e.valueOf) && !o(i = n.call(e))) return i;
                if (!t && "function" == typeof(n = e.toString) && !o(i = n.call(e))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        27: function(e, t, n) {
            var o = n(21),
                i = Math.min;
            e.exports = function(e) {
                return e > 0 ? i(o(e), 9007199254740991) : 0
            }
        },
        278: function(e, n) {
            e.exports = t
        },
        28: function(e, t, n) {
            var o = n(29);
            e.exports = function(e, t, n) {
                if (o(e), void 0 === t) return e;
                switch (n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, o) {
                            return e.call(t, n, o)
                        };
                    case 3:
                        return function(n, o, i) {
                            return e.call(t, n, o, i)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
        },
        29: function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e
            }
        },
        3: function(e, t, n) {
            e.exports = !n(10)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        30: function(e, t, n) {
            e.exports = !n(3) && !n(10)(function() {
                return 7 != Object.defineProperty(n(23)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        31: function(e, t, n) {
            var o = n(15);
            e.exports = function(e) {
                return Object(o(e))
            }
        },
        32: function(e, t, n) {
            var o = n(20);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == o(e) ? e.split("") : Object(e)
            }
        },
        33: function(e, t, n) {
            var o = n(6),
                i = n(11),
                r = n(40)(!1),
                a = n(22)("IE_PROTO");
            e.exports = function(e, t) {
                var n, s = i(e),
                    l = 0,
                    c = [];
                for (n in s) n != a && o(s, n) && c.push(n);
                for (; t.length > l;) o(s, n = t[l++]) && (~r(c, n) || c.push(n));
                return c
            }
        },
        34: function(e, t, n) {
            e.exports = n(13)("native-function-to-string", Function.toString)
        },
        35: function(e, t, n) {
            var o = n(4),
                i = n(42),
                r = n(24),
                a = n(22)("IE_PROTO"),
                s = function() {},
                l = function() {
                    var e, t = n(23)("iframe"),
                        o = r.length;
                    for (t.style.display = "none", n(39).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; o--;) delete l.prototype[r[o]];
                    return l()
                };
            e.exports = Object.create || function(e, t) {
                var n;
                return null !== e ? (s.prototype = o(e), n = new s, s.prototype = null, n[a] = e) : n = l(), void 0 === t ? n : i(n, t)
            }
        },
        36: function(e, t, n) {
            "use strict";
            var o = n(37),
                i = n(44),
                r = n(14),
                a = n(11);
            e.exports = n(38)(Array, "Array", function(e, t) {
                this._t = a(e), this._i = 0, this._k = t
            }, function() {
                var e = this._t,
                    t = this._k,
                    n = this._i++;
                return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
            }, "values"), r.Arguments = r.Array, o("keys"), o("values"), o("entries")
        },
        37: function(e, t, n) {
            var o = n(1)("unscopables"),
                i = Array.prototype;
            void 0 == i[o] && n(2)(i, o, {}), e.exports = function(e) {
                i[o][e] = !0
            }
        },
        38: function(e, t, n) {
            "use strict";
            var o = n(18),
                i = n(17),
                r = n(9),
                a = n(2),
                s = n(14),
                l = n(45),
                c = n(25),
                u = n(46),
                f = n(1)("iterator"),
                d = !([].keys && "next" in [].keys()),
                p = function() {
                    return this
                };
            e.exports = function(e, t, n, m, h, v, g) {
                l(n, t, m);
                var y, _, E, S = function(e) {
                        if (!d && e in O) return O[e];
                        switch (e) {
                            case "keys":
                            case "values":
                                return function() {
                                    return new n(this, e)
                                }
                        }
                        return function() {
                            return new n(this, e)
                        }
                    },
                    T = t + " Iterator",
                    b = "values" == h,
                    I = !1,
                    O = e.prototype,
                    w = O[f] || O["@@iterator"] || h && O[h],
                    A = w || S(h),
                    R = h ? b ? S("entries") : A : void 0,
                    N = "Array" == t && O.entries || w;
                if (N && (E = u(N.call(new e))) !== Object.prototype && E.next && (c(E, T, !0), o || "function" == typeof E[f] || a(E, f, p)), b && w && "values" !== w.name && (I = !0, A = function() {
                        return w.call(this)
                    }), o && !g || !d && !I && O[f] || a(O, f, A), s[t] = A, s[T] = p, h)
                    if (y = {
                            values: b ? A : S("values"),
                            keys: v ? A : S("keys"),
                            entries: R
                        }, g)
                        for (_ in y) _ in O || r(O, _, y[_]);
                    else i(i.P + i.F * (d || I), t, y);
                return y
            }
        },
        39: function(e, t, n) {
            var o = n(0).document;
            e.exports = o && o.documentElement
        },
        4: function(e, t, n) {
            var o = n(5);
            e.exports = function(e) {
                if (!o(e)) throw TypeError(e + " is not an object!");
                return e
            }
        },
        40: function(e, t, n) {
            var o = n(11),
                i = n(27),
                r = n(41);
            e.exports = function(e) {
                return function(t, n, a) {
                    var s, l = o(t),
                        c = i(l.length),
                        u = r(a, c);
                    if (e && n != n) {
                        for (; c > u;)
                            if ((s = l[u++]) != s) return !0
                    } else
                        for (; c > u; u++)
                            if ((e || u in l) && l[u] === n) return e || u || 0;
                    return !e && -1
                }
            }
        },
        41: function(e, t, n) {
            var o = n(21),
                i = Math.max,
                r = Math.min;
            e.exports = function(e, t) {
                return (e = o(e)) < 0 ? i(e + t, 0) : r(e, t)
            }
        },
        42: function(e, t, n) {
            var o = n(7),
                i = n(4),
                r = n(19);
            e.exports = n(3) ? Object.defineProperties : function(e, t) {
                i(e);
                for (var n, a = r(t), s = a.length, l = 0; s > l;) o.f(e, n = a[l++], t[n]);
                return e
            }
        },
        43: function(e, t, n) {
            for (var o = n(36), i = n(19), r = n(9), a = n(0), s = n(2), l = n(14), c = n(1), u = c("iterator"), f = c("toStringTag"), d = l.Array, p = {
                    CSSRuleList: !0,
                    CSSStyleDeclaration: !1,
                    CSSValueList: !1,
                    ClientRectList: !1,
                    DOMRectList: !1,
                    DOMStringList: !1,
                    DOMTokenList: !0,
                    DataTransferItemList: !1,
                    FileList: !1,
                    HTMLAllCollection: !1,
                    HTMLCollection: !1,
                    HTMLFormElement: !1,
                    HTMLSelectElement: !1,
                    MediaList: !0,
                    MimeTypeArray: !1,
                    NamedNodeMap: !1,
                    NodeList: !0,
                    PaintRequestList: !1,
                    Plugin: !1,
                    PluginArray: !1,
                    SVGLengthList: !1,
                    SVGNumberList: !1,
                    SVGPathSegList: !1,
                    SVGPointList: !1,
                    SVGStringList: !1,
                    SVGTransformList: !1,
                    SourceBufferList: !1,
                    StyleSheetList: !0,
                    TextTrackCueList: !1,
                    TextTrackList: !1,
                    TouchList: !1
                }, m = i(p), h = 0; h < m.length; h++) {
                var v, g = m[h],
                    y = p[g],
                    _ = a[g],
                    E = _ && _.prototype;
                if (E && (E[u] || s(E, u, d), E[f] || s(E, f, g), l[g] = d, y))
                    for (v in o) E[v] || r(E, v, o[v], !0)
            }
        },
        44: function(e, t) {
            e.exports = function(e, t) {
                return {
                    value: t,
                    done: !!e
                }
            }
        },
        45: function(e, t, n) {
            "use strict";
            var o = n(35),
                i = n(16),
                r = n(25),
                a = {};
            n(2)(a, n(1)("iterator"), function() {
                return this
            }), e.exports = function(e, t, n) {
                e.prototype = o(a, {
                    next: i(1, n)
                }), r(e, t + " Iterator")
            }
        },
        46: function(e, t, n) {
            var o = n(6),
                i = n(31),
                r = n(22)("IE_PROTO"),
                a = Object.prototype;
            e.exports = Object.getPrototypeOf || function(e) {
                return e = i(e), o(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
            }
        },
        487: function(e, t, n) {
            var o, i, r = function() {
                var e = "D:\\a\\_work\\15\\s\\src\\js\\artemis\\pages\\master.js",
                    t = "3e503e5658cf3f131c771393564f8ef022aff2c2",
                    n = new(0, function() {}.constructor)("return this")(),
                    o = {
                        path: "D:\\a\\_work\\15\\s\\src\\js\\artemis\\pages\\master.js",
                        statementMap: {
                            0: {
                                start: {
                                    line: 1,
                                    column: 0
                                },
                                end: {
                                    line: 71,
                                    column: 3
                                }
                            },
                            1: {
                                start: {
                                    line: 4,
                                    column: 2
                                },
                                end: {
                                    line: 6,
                                    column: 5
                                }
                            },
                            2: {
                                start: {
                                    line: 7,
                                    column: 2
                                },
                                end: {
                                    line: 7,
                                    column: 126
                                }
                            },
                            3: {
                                start: {
                                    line: 9,
                                    column: 19
                                },
                                end: {
                                    line: 9,
                                    column: 52
                                }
                            },
                            4: {
                                start: {
                                    line: 11,
                                    column: 19
                                },
                                end: {
                                    line: 11,
                                    column: 52
                                }
                            },
                            5: {
                                start: {
                                    line: 13,
                                    column: 18
                                },
                                end: {
                                    line: 13,
                                    column: 53
                                }
                            },
                            6: {
                                start: {
                                    line: 15,
                                    column: 17
                                },
                                end: {
                                    line: 15,
                                    column: 48
                                }
                            },
                            7: {
                                start: {
                                    line: 17,
                                    column: 21
                                },
                                end: {
                                    line: 17,
                                    column: 56
                                }
                            },
                            8: {
                                start: {
                                    line: 20,
                                    column: 4
                                },
                                end: {
                                    line: 41,
                                    column: 5
                                }
                            },
                            9: {
                                start: {
                                    line: 21,
                                    column: 6
                                },
                                end: {
                                    line: 21,
                                    column: 17
                                }
                            },
                            10: {
                                start: {
                                    line: 23,
                                    column: 19
                                },
                                end: {
                                    line: 23,
                                    column: 21
                                }
                            },
                            11: {
                                start: {
                                    line: 25,
                                    column: 6
                                },
                                end: {
                                    line: 37,
                                    column: 7
                                }
                            },
                            12: {
                                start: {
                                    line: 26,
                                    column: 8
                                },
                                end: {
                                    line: 36,
                                    column: 9
                                }
                            },
                            13: {
                                start: {
                                    line: 27,
                                    column: 10
                                },
                                end: {
                                    line: 35,
                                    column: 11
                                }
                            },
                            14: {
                                start: {
                                    line: 28,
                                    column: 23
                                },
                                end: {
                                    line: 28,
                                    column: 128
                                }
                            },
                            15: {
                                start: {
                                    line: 30,
                                    column: 12
                                },
                                end: {
                                    line: 34,
                                    column: 13
                                }
                            },
                            16: {
                                start: {
                                    line: 31,
                                    column: 14
                                },
                                end: {
                                    line: 31,
                                    column: 55
                                }
                            },
                            17: {
                                start: {
                                    line: 33,
                                    column: 14
                                },
                                end: {
                                    line: 33,
                                    column: 37
                                }
                            },
                            18: {
                                start: {
                                    line: 39,
                                    column: 6
                                },
                                end: {
                                    line: 39,
                                    column: 27
                                }
                            },
                            19: {
                                start: {
                                    line: 40,
                                    column: 6
                                },
                                end: {
                                    line: 40,
                                    column: 20
                                }
                            },
                            20: {
                                start: {
                                    line: 45,
                                    column: 4
                                },
                                end: {
                                    line: 47,
                                    column: 6
                                }
                            },
                            21: {
                                start: {
                                    line: 52,
                                    column: 21
                                },
                                end: {
                                    line: 52,
                                    column: 59
                                }
                            },
                            22: {
                                start: {
                                    line: 54,
                                    column: 2
                                },
                                end: {
                                    line: 64,
                                    column: 3
                                }
                            },
                            23: {
                                start: {
                                    line: 55,
                                    column: 4
                                },
                                end: {
                                    line: 63,
                                    column: 7
                                }
                            },
                            24: {
                                start: {
                                    line: 56,
                                    column: 6
                                },
                                end: {
                                    line: 58,
                                    column: 8
                                }
                            },
                            25: {
                                start: {
                                    line: 57,
                                    column: 8
                                },
                                end: {
                                    line: 57,
                                    column: 64
                                }
                            },
                            26: {
                                start: {
                                    line: 60,
                                    column: 6
                                },
                                end: {
                                    line: 62,
                                    column: 8
                                }
                            },
                            27: {
                                start: {
                                    line: 61,
                                    column: 8
                                },
                                end: {
                                    line: 61,
                                    column: 63
                                }
                            },
                            28: {
                                start: {
                                    line: 66,
                                    column: 2
                                },
                                end: {
                                    line: 66,
                                    column: 46
                                }
                            },
                            29: {
                                start: {
                                    line: 67,
                                    column: 2
                                },
                                end: {
                                    line: 67,
                                    column: 42
                                }
                            },
                            30: {
                                start: {
                                    line: 68,
                                    column: 2
                                },
                                end: {
                                    line: 68,
                                    column: 50
                                }
                            },
                            31: {
                                start: {
                                    line: 69,
                                    column: 2
                                },
                                end: {
                                    line: 69,
                                    column: 40
                                }
                            },
                            32: {
                                start: {
                                    line: 70,
                                    column: 2
                                },
                                end: {
                                    line: 70,
                                    column: 32
                                }
                            }
                        },
                        fnMap: {
                            0: {
                                name: "(anonymous_0)",
                                decl: {
                                    start: {
                                        line: 1,
                                        column: 268
                                    },
                                    end: {
                                        line: 1,
                                        column: 269
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 1,
                                        column: 343
                                    },
                                    end: {
                                        line: 71,
                                        column: 1
                                    }
                                },
                                line: 1
                            },
                            1: {
                                name: "_interopRequireWildcard",
                                decl: {
                                    start: {
                                        line: 19,
                                        column: 11
                                    },
                                    end: {
                                        line: 19,
                                        column: 34
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 19,
                                        column: 40
                                    },
                                    end: {
                                        line: 42,
                                        column: 3
                                    }
                                },
                                line: 19
                            },
                            2: {
                                name: "_interopRequireDefault",
                                decl: {
                                    start: {
                                        line: 44,
                                        column: 11
                                    },
                                    end: {
                                        line: 44,
                                        column: 33
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 44,
                                        column: 39
                                    },
                                    end: {
                                        line: 48,
                                        column: 3
                                    }
                                },
                                line: 44
                            },
                            3: {
                                name: "(anonymous_3)",
                                decl: {
                                    start: {
                                        line: 55,
                                        column: 40
                                    },
                                    end: {
                                        line: 55,
                                        column: 41
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 55,
                                        column: 68
                                    },
                                    end: {
                                        line: 63,
                                        column: 5
                                    }
                                },
                                line: 55
                            },
                            4: {
                                name: "(anonymous_4)",
                                decl: {
                                    start: {
                                        line: 56,
                                        column: 26
                                    },
                                    end: {
                                        line: 56,
                                        column: 27
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 56,
                                        column: 41
                                    },
                                    end: {
                                        line: 58,
                                        column: 7
                                    }
                                },
                                line: 56
                            },
                            5: {
                                name: "(anonymous_5)",
                                decl: {
                                    start: {
                                        line: 60,
                                        column: 23
                                    },
                                    end: {
                                        line: 60,
                                        column: 24
                                    }
                                },
                                loc: {
                                    start: {
                                        line: 60,
                                        column: 38
                                    },
                                    end: {
                                        line: 62,
                                        column: 7
                                    }
                                },
                                line: 60
                            }
                        },
                        branchMap: {
                            0: {
                                loc: {
                                    start: {
                                        line: 20,
                                        column: 4
                                    },
                                    end: {
                                        line: 41,
                                        column: 5
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 20,
                                        column: 4
                                    },
                                    end: {
                                        line: 41,
                                        column: 5
                                    }
                                }, {
                                    start: {
                                        line: 20,
                                        column: 4
                                    },
                                    end: {
                                        line: 41,
                                        column: 5
                                    }
                                }],
                                line: 20
                            },
                            1: {
                                loc: {
                                    start: {
                                        line: 20,
                                        column: 8
                                    },
                                    end: {
                                        line: 20,
                                        column: 29
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 20,
                                        column: 8
                                    },
                                    end: {
                                        line: 20,
                                        column: 11
                                    }
                                }, {
                                    start: {
                                        line: 20,
                                        column: 15
                                    },
                                    end: {
                                        line: 20,
                                        column: 29
                                    }
                                }],
                                line: 20
                            },
                            2: {
                                loc: {
                                    start: {
                                        line: 25,
                                        column: 6
                                    },
                                    end: {
                                        line: 37,
                                        column: 7
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 25,
                                        column: 6
                                    },
                                    end: {
                                        line: 37,
                                        column: 7
                                    }
                                }, {
                                    start: {
                                        line: 25,
                                        column: 6
                                    },
                                    end: {
                                        line: 37,
                                        column: 7
                                    }
                                }],
                                line: 25
                            },
                            3: {
                                loc: {
                                    start: {
                                        line: 27,
                                        column: 10
                                    },
                                    end: {
                                        line: 35,
                                        column: 11
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 27,
                                        column: 10
                                    },
                                    end: {
                                        line: 35,
                                        column: 11
                                    }
                                }, {
                                    start: {
                                        line: 27,
                                        column: 10
                                    },
                                    end: {
                                        line: 35,
                                        column: 11
                                    }
                                }],
                                line: 27
                            },
                            4: {
                                loc: {
                                    start: {
                                        line: 28,
                                        column: 23
                                    },
                                    end: {
                                        line: 28,
                                        column: 128
                                    }
                                },
                                type: "cond-expr",
                                locations: [{
                                    start: {
                                        line: 28,
                                        column: 82
                                    },
                                    end: {
                                        line: 28,
                                        column: 123
                                    }
                                }, {
                                    start: {
                                        line: 28,
                                        column: 126
                                    },
                                    end: {
                                        line: 28,
                                        column: 128
                                    }
                                }],
                                line: 28
                            },
                            5: {
                                loc: {
                                    start: {
                                        line: 28,
                                        column: 23
                                    },
                                    end: {
                                        line: 28,
                                        column: 79
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 28,
                                        column: 23
                                    },
                                    end: {
                                        line: 28,
                                        column: 44
                                    }
                                }, {
                                    start: {
                                        line: 28,
                                        column: 48
                                    },
                                    end: {
                                        line: 28,
                                        column: 79
                                    }
                                }],
                                line: 28
                            },
                            6: {
                                loc: {
                                    start: {
                                        line: 30,
                                        column: 12
                                    },
                                    end: {
                                        line: 34,
                                        column: 13
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 30,
                                        column: 12
                                    },
                                    end: {
                                        line: 34,
                                        column: 13
                                    }
                                }, {
                                    start: {
                                        line: 30,
                                        column: 12
                                    },
                                    end: {
                                        line: 34,
                                        column: 13
                                    }
                                }],
                                line: 30
                            },
                            7: {
                                loc: {
                                    start: {
                                        line: 30,
                                        column: 16
                                    },
                                    end: {
                                        line: 30,
                                        column: 36
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 30,
                                        column: 16
                                    },
                                    end: {
                                        line: 30,
                                        column: 24
                                    }
                                }, {
                                    start: {
                                        line: 30,
                                        column: 28
                                    },
                                    end: {
                                        line: 30,
                                        column: 36
                                    }
                                }],
                                line: 30
                            },
                            8: {
                                loc: {
                                    start: {
                                        line: 45,
                                        column: 11
                                    },
                                    end: {
                                        line: 47,
                                        column: 5
                                    }
                                },
                                type: "cond-expr",
                                locations: [{
                                    start: {
                                        line: 45,
                                        column: 35
                                    },
                                    end: {
                                        line: 45,
                                        column: 38
                                    }
                                }, {
                                    start: {
                                        line: 45,
                                        column: 41
                                    },
                                    end: {
                                        line: 47,
                                        column: 5
                                    }
                                }],
                                line: 45
                            },
                            9: {
                                loc: {
                                    start: {
                                        line: 45,
                                        column: 11
                                    },
                                    end: {
                                        line: 45,
                                        column: 32
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 45,
                                        column: 11
                                    },
                                    end: {
                                        line: 45,
                                        column: 14
                                    }
                                }, {
                                    start: {
                                        line: 45,
                                        column: 18
                                    },
                                    end: {
                                        line: 45,
                                        column: 32
                                    }
                                }],
                                line: 45
                            },
                            10: {
                                loc: {
                                    start: {
                                        line: 54,
                                        column: 2
                                    },
                                    end: {
                                        line: 64,
                                        column: 3
                                    }
                                },
                                type: "if",
                                locations: [{
                                    start: {
                                        line: 54,
                                        column: 2
                                    },
                                    end: {
                                        line: 64,
                                        column: 3
                                    }
                                }, {
                                    start: {
                                        line: 54,
                                        column: 2
                                    },
                                    end: {
                                        line: 64,
                                        column: 3
                                    }
                                }],
                                line: 54
                            },
                            11: {
                                loc: {
                                    start: {
                                        line: 54,
                                        column: 6
                                    },
                                    end: {
                                        line: 54,
                                        column: 64
                                    }
                                },
                                type: "binary-expr",
                                locations: [{
                                    start: {
                                        line: 54,
                                        column: 6
                                    },
                                    end: {
                                        line: 54,
                                        column: 18
                                    }
                                }, {
                                    start: {
                                        line: 54,
                                        column: 22
                                    },
                                    end: {
                                        line: 54,
                                        column: 42
                                    }
                                }, {
                                    start: {
                                        line: 54,
                                        column: 46
                                    },
                                    end: {
                                        line: 54,
                                        column: 64
                                    }
                                }],
                                line: 54
                            }
                        },
                        s: {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0,
                            6: 0,
                            7: 0,
                            8: 0,
                            9: 0,
                            10: 0,
                            11: 0,
                            12: 0,
                            13: 0,
                            14: 0,
                            15: 0,
                            16: 0,
                            17: 0,
                            18: 0,
                            19: 0,
                            20: 0,
                            21: 0,
                            22: 0,
                            23: 0,
                            24: 0,
                            25: 0,
                            26: 0,
                            27: 0,
                            28: 0,
                            29: 0,
                            30: 0,
                            31: 0,
                            32: 0
                        },
                        f: {
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0
                        },
                        b: {
                            0: [0, 0],
                            1: [0, 0],
                            2: [0, 0],
                            3: [0, 0],
                            4: [0, 0],
                            5: [0, 0],
                            6: [0, 0],
                            7: [0, 0],
                            8: [0, 0],
                            9: [0, 0],
                            10: [0, 0],
                            11: [0, 0, 0]
                        },
                        inputSourceMap: null,
                        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
                    },
                    i = n.__coverage__ || (n.__coverage__ = {});
                return i[e] && i[e].hash === t ? i[e] : (o.hash = t, i[e] = o)
            }();
            r.s[0]++, o = [t, n(488), n(278), n(489), n(490), n(140), n(491), n(492), n(493), n(494), n(214), n(495)], void 0 === (i = function(e, t, o, i, a, s) {
                "use strict";

                function l(e) {
                    return r.f[2]++, r.s[20]++, r.b[9][0]++, e && (r.b[9][1]++, e.__esModule) ? (r.b[8][0]++, e) : (r.b[8][1]++, {
                        default: e
                    })
                }
                r.f[0]++, r.s[1]++, Object.defineProperty(e, "__esModule", {
                    value: !0
                }), r.s[2]++, e.uhfHeader = e.settings = e.apolloResponsive = e.apolloDevice = e.trackingModule = void 0;
                var c = (r.s[3]++, l(t)),
                    u = (r.s[4]++, l(o)),
                    f = (r.s[5]++, function(e) {
                        if (r.f[1]++, r.s[8]++, r.b[1][0]++, e && (r.b[1][1]++, e.__esModule)) return r.b[0][0]++, r.s[9]++, e;
                        r.b[0][1]++;
                        var t = (r.s[10]++, {});
                        if (r.s[11]++, null != e)
                            for (var n in r.b[2][0]++, r.s[12]++, e)
                                if (r.s[13]++, Object.prototype.hasOwnProperty.call(e, n)) {
                                    r.b[3][0]++;
                                    var o = (r.s[14]++, r.b[5][0]++, Object.defineProperty && (r.b[5][1]++, Object.getOwnPropertyDescriptor) ? (r.b[4][0]++, Object.getOwnPropertyDescriptor(e, n)) : (r.b[4][1]++, {}));
                                    r.s[15]++, r.b[7][0]++, o.get || (r.b[7][1]++, o.set) ? (r.b[6][0]++, r.s[16]++, Object.defineProperty(t, n, o)) : (r.b[6][1]++, r.s[17]++, t[n] = e[n])
                                } else r.b[3][1]++;
                        else r.b[2][1]++;
                        return r.s[18]++, t.default = e, r.s[19]++, t
                    }(i)),
                    d = (r.s[6]++, l(a)),
                    p = (r.s[7]++, l(s)),
                    m = (r.s[21]++, u.default.get("errorsLogger"));
                r.s[22]++, r.b[11][0]++, m && (r.b[11][1]++, m.enabled) && (r.b[11][2]++, m.token) ? (r.b[10][0]++, r.s[23]++, Promise.resolve().then(n.t.bind(null, 499, 7)).then(function(e) {
                    r.f[3]++, r.s[24]++, n.oe = function(t) {
                        r.f[4]++, r.s[25]++, e.logConsoleError(t, "requireOnError")
                    }, r.s[26]++, window.onerror = function(t) {
                        r.f[5]++, r.s[27]++, e.logConsoleError(t, "windowOnError")
                    }
                })) : r.b[10][1]++, r.s[28]++, e.trackingModule = c.default, r.s[29]++, e.apolloDevice = d.default, r.s[30]++, e.apolloResponsive = p.default, r.s[31]++, e.settings = u.default, r.s[32]++, e.uhfHeader = f
            }.apply(t, o)) || (e.exports = i)
        },
        488: function(e, t) {
            e.exports = n
        },
        489: function(e, t) {
            e.exports = o
        },
        490: function(e, t) {
            e.exports = i
        },
        491: function(e, t) {
            e.exports = r
        },
        492: function(e, t) {
            e.exports = a
        },
        493: function(e, t) {
            e.exports = s
        },
        494: function(e, t) {
            e.exports = l
        },
        495: function(e, t) {
            e.exports = c
        },
        499: function(e, t) {
            e.exports = u
        },
        5: function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        },
        51: function(e, t, n) {
            var o = n(20),
                i = n(1)("toStringTag"),
                r = "Arguments" == o(function() {
                    return arguments
                }());
            e.exports = function(e) {
                var t, n, a;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                    try {
                        return e[t]
                    } catch (e) {}
                }(t = Object(e), i)) ? n : r ? o(t) : "Object" == (a = o(t)) && "function" == typeof t.callee ? "Arguments" : a
            }
        },
        54: function(e, t, n) {
            var o = n(21),
                i = n(15);
            e.exports = function(e) {
                return function(t, n) {
                    var r, a, s = String(i(t)),
                        l = o(n),
                        c = s.length;
                    return l < 0 || l >= c ? e ? "" : void 0 : (r = s.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : r : e ? s.slice(l, l + 2) : a - 56320 + (r - 55296 << 10) + 65536
                }
            }
        },
        58: function(e, t, n) {
            var o = n(4),
                i = n(29),
                r = n(1)("species");
            e.exports = function(e, t) {
                var n, a = o(e).constructor;
                return void 0 === a || void 0 == (n = o(a)[r]) ? t : i(n)
            }
        },
        6: function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        },
        69: function(e, t, n) {
            "use strict";
            var o = n(54)(!0);
            n(38)(String, "String", function(e) {
                this._t = String(e), this._i = 0
            }, function() {
                var e, t = this._t,
                    n = this._i;
                return n >= t.length ? {
                    value: void 0,
                    done: !0
                } : (e = o(t, n), this._i += e.length, {
                    value: e,
                    done: !1
                })
            })
        },
        7: function(e, t, n) {
            var o = n(4),
                i = n(30),
                r = n(26),
                a = Object.defineProperty;
            t.f = n(3) ? Object.defineProperty : function(e, t, n) {
                if (o(e), t = r(t, !0), o(n), i) try {
                    return a(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        },
        70: function(e, t, n) {
            var o = n(4);
            e.exports = function(e, t, n, i) {
                try {
                    return i ? t(o(n)[0], n[1]) : t(n)
                } catch (t) {
                    var r = e.return;
                    throw void 0 !== r && o(r.call(e)), t
                }
            }
        },
        71: function(e, t, n) {
            var o = n(14),
                i = n(1)("iterator"),
                r = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (o.Array === e || r[i] === e)
            }
        },
        72: function(e, t, n) {
            var o = n(51),
                i = n(1)("iterator"),
                r = n(14);
            e.exports = n(8).getIteratorMethod = function(e) {
                if (void 0 != e) return e[i] || e["@@iterator"] || r[o(e)]
            }
        },
        73: function(e, t, n) {
            var o = n(1)("iterator"),
                i = !1;
            try {
                var r = [7][o]();
                r.return = function() {
                    i = !0
                }, Array.from(r, function() {
                    throw 2
                })
            } catch (e) {}
            e.exports = function(e, t) {
                if (!t && !i) return !1;
                var n = !1;
                try {
                    var r = [7],
                        a = r[o]();
                    a.next = function() {
                        return {
                            done: n = !0
                        }
                    }, r[o] = function() {
                        return a
                    }, e(r)
                } catch (e) {}
                return n
            }
        },
        8: function(e, t) {
            var n = e.exports = {
                version: "2.6.4"
            };
            "number" == typeof __e && (__e = n)
        },
        9: function(e, t, n) {
            var o = n(0),
                i = n(2),
                r = n(6),
                a = n(12)("src"),
                s = n(34),
                l = ("" + s).split("toString");
            n(8).inspectSource = function(e) {
                return s.call(e)
            }, (e.exports = function(e, t, n, s) {
                var c = "function" == typeof n;
                c && (r(n, "name") || i(n, "name", t)), e[t] !== n && (c && (r(n, a) || i(n, a, e[t] ? "" + e[t] : l.join(String(t)))), e === o ? e[t] = n : s ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)))
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && this[a] || s.call(this)
            })
        }
    })
}), require(["artemis/pages/master", "scom/overlay/overlay"]);