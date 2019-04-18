(function() {
    "use strict";

    function a(a) {
        var b, c, d, e, f = Array.prototype.slice.call(arguments, 1);
        for (b = 0, c = f.length; c > b; b += 1)
            if (d = f[b])
                for (e in d) h.call(d, e) && (a[e] = d[e]);
        return a
    }

    function b(a, b, c) {
        this.locales = a, this.formats = b, this.pluralFn = c
    }

    function c(a) {
        this.id = a
    }

    function d(a, b, c, d, e) {
        this.id = a, this.useOrdinal = b, this.offset = c, this.options = d, this.pluralFn = e
    }

    function e(a, b, c, d) {
        this.id = a, this.offset = b, this.numberFormat = c, this.string = d
    }

    function f(a, b) {
        this.id = a, this.options = b
    }

    function g(a, b, c) {
        var d = "string" == typeof a ? g.__parse(a) : a;
        if (!d || "messageFormatPattern" !== d.type) throw new TypeError("A message must be provided as a String or AST.");
        c = this._mergeFormats(g.formats, c), j(this, "_locale", {
            value: this._resolveLocale(b)
        });
        var e = this._findPluralRuleFunction(this._locale),
            f = this._compilePattern(d, b, c, e),
            h = this;
        this.format = function(a) {
            return h._format(f, a)
        }
    }
    var h = Object.prototype.hasOwnProperty,
        i = function() {
            try {
                return !!Object.defineProperty({}, "a", {})
            } catch (a) {
                return !1
            }
        }(),
        j = (!i && !Object.prototype.__defineGetter__, i ? Object.defineProperty : function(a, b, c) {
            "get" in c && a.__defineGetter__ ? a.__defineGetter__(b, c.get) : (!h.call(a, b) || "value" in c) && (a[b] = c.value)
        }),
        k = Object.create || function(a, b) {
            function c() {}
            var d, e;
            c.prototype = a, d = new c;
            for (e in b) h.call(b, e) && j(d, e, b[e]);
            return d
        },
        l = b;
    b.prototype.compile = function(a) {
        return this.pluralStack = [], this.currentPlural = null, this.pluralNumberFormat = null, this.compileMessage(a)
    }, b.prototype.compileMessage = function(a) {
        if (!a || "messageFormatPattern" !== a.type) throw new Error('Message AST is not of type: "messageFormatPattern"');
        var b, c, d, e = a.elements,
            f = [];
        for (b = 0, c = e.length; c > b; b += 1) switch (d = e[b], d.type) {
            case "messageTextElement":
                f.push(this.compileMessageText(d));
                break;
            case "argumentElement":
                f.push(this.compileArgument(d));
                break;
            default:
                throw new Error("Message element does not have a valid type")
        }
        return f
    }, b.prototype.compileMessageText = function(a) {
        return this.currentPlural && /(^|[^\\])#/g.test(a.value) ? (this.pluralNumberFormat || (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)), new e(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, a.value)) : a.value.replace(/\\#/g, "#")
    }, b.prototype.compileArgument = function(a) {
        var b = a.format;
        if (!b) return new c(a.id);
        var e, g = this.formats,
            h = this.locales,
            i = this.pluralFn;
        switch (b.type) {
            case "numberFormat":
                return e = g.number[b.style], {
                    id: a.id,
                    format: new Intl.NumberFormat(h, e).format
                };
            case "dateFormat":
                return e = g.date[b.style], {
                    id: a.id,
                    format: new Intl.DateTimeFormat(h, e).format
                };
            case "timeFormat":
                return e = g.time[b.style], {
                    id: a.id,
                    format: new Intl.DateTimeFormat(h, e).format
                };
            case "pluralFormat":
                return e = this.compileOptions(a), new d(a.id, b.ordinal, b.offset, e, i);
            case "selectFormat":
                return e = this.compileOptions(a), new f(a.id, e);
            default:
                throw new Error("Message element does not have a valid format type")
        }
    }, b.prototype.compileOptions = function(a) {
        var b = a.format,
            c = b.options,
            d = {};
        this.pluralStack.push(this.currentPlural), this.currentPlural = "pluralFormat" === b.type ? a : null;
        var e, f, g;
        for (e = 0, f = c.length; f > e; e += 1) g = c[e], d[g.selector] = this.compileMessage(g.value);
        return this.currentPlural = this.pluralStack.pop(), d
    }, c.prototype.format = function(a) {
        return a ? "string" == typeof a ? a : String(a) : ""
    }, d.prototype.getOption = function(a) {
        var b = this.options,
            c = b["=" + a] || b[this.pluralFn(a - this.offset, this.useOrdinal)];
        return c || b.other
    }, e.prototype.format = function(a) {
        var b = this.numberFormat.format(a - this.offset);
        return this.string.replace(/(^|[^\\])#/g, "$1" + b).replace(/\\#/g, "#")
    }, f.prototype.getOption = function(a) {
        var b = this.options;
        return b[a] || b.other
    };
    var m = function() {
            function a(a, b) {
                function c() {
                    this.constructor = a
                }
                c.prototype = b.prototype, a.prototype = new c
            }

            function b(a, b, c, d, e, f) {
                this.message = a, this.expected = b, this.found = c, this.offset = d, this.line = e, this.column = f, this.name = "SyntaxError"
            }

            function c(a) {
                function c(b) {
                    function c(b, c, d) {
                        var e, f;
                        for (e = c; d > e; e++) f = a.charAt(e), "\n" === f ? (b.seenCR || b.line++, b.column = 1, b.seenCR = !1) : "\r" === f || "\u2028" === f || "\u2029" === f ? (b.line++, b.column = 1, b.seenCR = !0) : (b.column++, b.seenCR = !1)
                    }
                    return Xa !== b && (Xa > b && (Xa = 0, Ya = {
                        line: 1,
                        column: 1,
                        seenCR: !1
                    }), c(Ya, Xa, b), Xa = b), Ya
                }

                function d(a) {
                    Za > Va || (Va > Za && (Za = Va, $a = []), $a.push(a))
                }

                function e(d, e, f) {
                    function g(a) {
                        var b = 1;
                        for (a.sort(function(a, b) {
                                return a.description < b.description ? -1 : a.description > b.description ? 1 : 0
                            }); b < a.length;) a[b - 1] === a[b] ? a.splice(b, 1) : b++
                    }

                    function h(a, b) {
                        function c(a) {
                            function b(a) {
                                return a.charCodeAt(0).toString(16).toUpperCase()
                            }
                            return a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(a) {
                                return "\\x0" + b(a)
                            }).replace(/[\x10-\x1F\x80-\xFF]/g, function(a) {
                                return "\\x" + b(a)
                            }).replace(/[\u0180-\u0FFF]/g, function(a) {
                                return "\\u0" + b(a)
                            }).replace(/[\u1080-\uFFFF]/g, function(a) {
                                return "\\u" + b(a)
                            })
                        }
                        var d, e, f, g = new Array(a.length);
                        for (f = 0; f < a.length; f++) g[f] = a[f].description;
                        return d = a.length > 1 ? g.slice(0, -1).join(", ") + " or " + g[a.length - 1] : g[0], e = b ? '"' + c(b) + '"' : "end of input", "Expected " + d + " but " + e + " found."
                    }
                    var i = c(f),
                        j = f < a.length ? a.charAt(f) : null;
                    return null !== e && g(e), new b(null !== d ? d : h(e, j), e, j, f, i.line, i.column)
                }

                function f() {
                    var a;
                    return a = g()
                }

                function g() {
                    var a, b, c;
                    for (a = Va, b = [], c = h(); c !== E;) b.push(c), c = h();
                    return b !== E && (Wa = a, b = H(b)), a = b
                }

                function h() {
                    var a;
                    return a = j(), a === E && (a = l()), a
                }

                function i() {
                    var b, c, d, e, f, g;
                    if (b = Va, c = [], d = Va, e = w(), e !== E ? (f = B(), f !== E ? (g = w(), g !== E ? (e = [e, f, g], d = e) : (Va = d, d = I)) : (Va = d, d = I)) : (Va = d, d = I), d !== E)
                        for (; d !== E;) c.push(d), d = Va, e = w(), e !== E ? (f = B(), f !== E ? (g = w(), g !== E ? (e = [e, f, g], d = e) : (Va = d, d = I)) : (Va = d, d = I)) : (Va = d, d = I);
                    else c = I;
                    return c !== E && (Wa = b, c = J(c)), b = c, b === E && (b = Va, c = v(), c !== E && (c = a.substring(b, Va)), b = c), b
                }

                function j() {
                    var a, b;
                    return a = Va, b = i(), b !== E && (Wa = a, b = K(b)), a = b
                }

                function k() {
                    var b, c, e;
                    if (b = z(), b === E) {
                        if (b = Va, c = [], L.test(a.charAt(Va)) ? (e = a.charAt(Va), Va++) : (e = E, 0 === _a && d(M)), e !== E)
                            for (; e !== E;) c.push(e), L.test(a.charAt(Va)) ? (e = a.charAt(Va), Va++) : (e = E, 0 === _a && d(M));
                        else c = I;
                        c !== E && (c = a.substring(b, Va)), b = c
                    }
                    return b
                }

                function l() {
                    var b, c, e, f, g, h, i, j, l;
                    return b = Va, 123 === a.charCodeAt(Va) ? (c = N, Va++) : (c = E, 0 === _a && d(O)), c !== E ? (e = w(), e !== E ? (f = k(), f !== E ? (g = w(), g !== E ? (h = Va, 44 === a.charCodeAt(Va) ? (i = Q, Va++) : (i = E, 0 === _a && d(R)), i !== E ? (j = w(), j !== E ? (l = m(), l !== E ? (i = [i, j, l], h = i) : (Va = h, h = I)) : (Va = h, h = I)) : (Va = h, h = I), h === E && (h = P), h !== E ? (i = w(), i !== E ? (125 === a.charCodeAt(Va) ? (j = S, Va++) : (j = E, 0 === _a && d(T)), j !== E ? (Wa = b, c = U(f, h), b = c) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I), b
                }

                function m() {
                    var a;
                    return a = n(), a === E && (a = o(), a === E && (a = p(), a === E && (a = q()))), a
                }

                function n() {
                    var b, c, e, f, g, h, i;
                    return b = Va, a.substr(Va, 6) === V ? (c = V, Va += 6) : (c = E, 0 === _a && d(W)), c === E && (a.substr(Va, 4) === X ? (c = X, Va += 4) : (c = E, 0 === _a && d(Y)), c === E && (a.substr(Va, 4) === Z ? (c = Z, Va += 4) : (c = E, 0 === _a && d($)))), c !== E ? (e = w(), e !== E ? (f = Va, 44 === a.charCodeAt(Va) ? (g = Q, Va++) : (g = E, 0 === _a && d(R)), g !== E ? (h = w(), h !== E ? (i = B(), i !== E ? (g = [g, h, i], f = g) : (Va = f, f = I)) : (Va = f, f = I)) : (Va = f, f = I), f === E && (f = P), f !== E ? (Wa = b, c = _(c, f), b = c) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I), b
                }

                function o() {
                    var b, c, e, f, g, h;
                    return b = Va, a.substr(Va, 6) === aa ? (c = aa, Va += 6) : (c = E, 0 === _a && d(ba)), c !== E ? (e = w(), e !== E ? (44 === a.charCodeAt(Va) ? (f = Q, Va++) : (f = E, 0 === _a && d(R)), f !== E ? (g = w(), g !== E ? (h = u(), h !== E ? (Wa = b, c = ca(h), b = c) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I), b
                }

                function p() {
                    var b, c, e, f, g, h;
                    return b = Va, a.substr(Va, 13) === da ? (c = da, Va += 13) : (c = E, 0 === _a && d(ea)), c !== E ? (e = w(), e !== E ? (44 === a.charCodeAt(Va) ? (f = Q, Va++) : (f = E, 0 === _a && d(R)), f !== E ? (g = w(), g !== E ? (h = u(), h !== E ? (Wa = b, c = fa(h), b = c) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I), b
                }

                function q() {
                    var b, c, e, f, g, h, i;
                    if (b = Va, a.substr(Va, 6) === ga ? (c = ga, Va += 6) : (c = E, 0 === _a && d(ha)), c !== E)
                        if (e = w(), e !== E)
                            if (44 === a.charCodeAt(Va) ? (f = Q, Va++) : (f = E, 0 === _a && d(R)), f !== E)
                                if (g = w(), g !== E) {
                                    if (h = [], i = s(), i !== E)
                                        for (; i !== E;) h.push(i), i = s();
                                    else h = I;
                                    h !== E ? (Wa = b, c = ia(h), b = c) : (Va = b, b = I)
                                } else Va = b, b = I;
                    else Va = b, b = I;
                    else Va = b, b = I;
                    else Va = b, b = I;
                    return b
                }

                function r() {
                    var b, c, e, f;
                    return b = Va, c = Va, 61 === a.charCodeAt(Va) ? (e = ja, Va++) : (e = E, 0 === _a && d(ka)), e !== E ? (f = z(), f !== E ? (e = [e, f], c = e) : (Va = c, c = I)) : (Va = c, c = I), c !== E && (c = a.substring(b, Va)), b = c, b === E && (b = B()), b
                }

                function s() {
                    var b, c, e, f, h, i, j, k, l;
                    return b = Va, c = w(), c !== E ? (e = r(), e !== E ? (f = w(), f !== E ? (123 === a.charCodeAt(Va) ? (h = N, Va++) : (h = E, 0 === _a && d(O)), h !== E ? (i = w(), i !== E ? (j = g(), j !== E ? (k = w(), k !== E ? (125 === a.charCodeAt(Va) ? (l = S, Va++) : (l = E, 0 === _a && d(T)), l !== E ? (Wa = b, c = la(e, j), b = c) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I), b
                }

                function t() {
                    var b, c, e, f;
                    return b = Va, a.substr(Va, 7) === ma ? (c = ma, Va += 7) : (c = E, 0 === _a && d(na)), c !== E ? (e = w(), e !== E ? (f = z(), f !== E ? (Wa = b, c = oa(f), b = c) : (Va = b, b = I)) : (Va = b, b = I)) : (Va = b, b = I), b
                }

                function u() {
                    var a, b, c, d, e;
                    if (a = Va, b = t(), b === E && (b = P), b !== E)
                        if (c = w(), c !== E) {
                            if (d = [], e = s(), e !== E)
                                for (; e !== E;) d.push(e), e = s();
                            else d = I;
                            d !== E ? (Wa = a, b = pa(b, d), a = b) : (Va = a, a = I)
                        } else Va = a, a = I;
                    else Va = a, a = I;
                    return a
                }

                function v() {
                    var b, c;
                    if (_a++, b = [], ra.test(a.charAt(Va)) ? (c = a.charAt(Va), Va++) : (c = E, 0 === _a && d(sa)), c !== E)
                        for (; c !== E;) b.push(c), ra.test(a.charAt(Va)) ? (c = a.charAt(Va), Va++) : (c = E, 0 === _a && d(sa));
                    else b = I;
                    return _a--, b === E && (c = E, 0 === _a && d(qa)), b
                }

                function w() {
                    var b, c, e;
                    for (_a++, b = Va, c = [], e = v(); e !== E;) c.push(e), e = v();
                    return c !== E && (c = a.substring(b, Va)), b = c, _a--, b === E && (c = E, 0 === _a && d(ta)), b
                }

                function x() {
                    var b;
                    return ua.test(a.charAt(Va)) ? (b = a.charAt(Va), Va++) : (b = E, 0 === _a && d(va)), b
                }

                function y() {
                    var b;
                    return wa.test(a.charAt(Va)) ? (b = a.charAt(Va), Va++) : (b = E, 0 === _a && d(xa)), b
                }

                function z() {
                    var b, c, e, f, g, h;
                    if (b = Va, 48 === a.charCodeAt(Va) ? (c = ya, Va++) : (c = E, 0 === _a && d(za)), c === E) {
                        if (c = Va, e = Va, Aa.test(a.charAt(Va)) ? (f = a.charAt(Va), Va++) : (f = E, 0 === _a && d(Ba)), f !== E) {
                            for (g = [], h = x(); h !== E;) g.push(h), h = x();
                            g !== E ? (f = [f, g], e = f) : (Va = e, e = I)
                        } else Va = e, e = I;
                        e !== E && (e = a.substring(c, Va)), c = e
                    }
                    return c !== E && (Wa = b, c = Ca(c)), b = c
                }

                function A() {
                    var b, c, e, f, g, h, i, j;
                    return Da.test(a.charAt(Va)) ? (b = a.charAt(Va), Va++) : (b = E, 0 === _a && d(Ea)), b === E && (b = Va, a.substr(Va, 2) === Fa ? (c = Fa, Va += 2) : (c = E, 0 === _a && d(Ga)), c !== E && (Wa = b, c = Ha()), b = c, b === E && (b = Va, a.substr(Va, 2) === Ia ? (c = Ia, Va += 2) : (c = E, 0 === _a && d(Ja)), c !== E && (Wa = b, c = Ka()), b = c, b === E && (b = Va, a.substr(Va, 2) === La ? (c = La, Va += 2) : (c = E, 0 === _a && d(Ma)), c !== E && (Wa = b, c = Na()), b = c, b === E && (b = Va, a.substr(Va, 2) === Oa ? (c = Oa, Va += 2) : (c = E, 0 === _a && d(Pa)), c !== E && (Wa = b, c = Qa()), b = c, b === E && (b = Va, a.substr(Va, 2) === Ra ? (c = Ra, Va += 2) : (c = E, 0 === _a && d(Sa)), c !== E ? (e = Va, f = Va, g = y(), g !== E ? (h = y(), h !== E ? (i = y(), i !== E ? (j = y(), j !== E ? (g = [g, h, i, j], f = g) : (Va = f, f = I)) : (Va = f, f = I)) : (Va = f, f = I)) : (Va = f, f = I), f !== E && (f = a.substring(e, Va)), e = f, e !== E ? (Wa = b, c = Ta(e), b = c) : (Va = b, b = I)) : (Va = b, b = I)))))), b
                }

                function B() {
                    var a, b, c;
                    if (a = Va, b = [], c = A(), c !== E)
                        for (; c !== E;) b.push(c), c = A();
                    else b = I;
                    return b !== E && (Wa = a, b = Ua(b)), a = b
                }
                var C, D = arguments.length > 1 ? arguments[1] : {},
                    E = {},
                    F = {
                        start: f
                    },
                    G = f,
                    H = function(a) {
                        return {
                            type: "messageFormatPattern",
                            elements: a
                        }
                    },
                    I = E,
                    J = function(a) {
                        var b, c, d, e, f, g = "";
                        for (b = 0, d = a.length; d > b; b += 1)
                            for (e = a[b], c = 0, f = e.length; f > c; c += 1) g += e[c];
                        return g
                    },
                    K = function(a) {
                        return {
                            type: "messageTextElement",
                            value: a
                        }
                    },
                    L = /^[^ \t\n\r,.+={}#]/,
                    M = {
                        type: "class",
                        value: "[^ \\t\\n\\r,.+={}#]",
                        description: "[^ \\t\\n\\r,.+={}#]"
                    },
                    N = "{",
                    O = {
                        type: "literal",
                        value: "{",
                        description: '"{"'
                    },
                    P = null,
                    Q = ",",
                    R = {
                        type: "literal",
                        value: ",",
                        description: '","'
                    },
                    S = "}",
                    T = {
                        type: "literal",
                        value: "}",
                        description: '"}"'
                    },
                    U = function(a, b) {
                        return {
                            type: "argumentElement",
                            id: a,
                            format: b && b[2]
                        }
                    },
                    V = "number",
                    W = {
                        type: "literal",
                        value: "number",
                        description: '"number"'
                    },
                    X = "date",
                    Y = {
                        type: "literal",
                        value: "date",
                        description: '"date"'
                    },
                    Z = "time",
                    $ = {
                        type: "literal",
                        value: "time",
                        description: '"time"'
                    },
                    _ = function(a, b) {
                        return {
                            type: a + "Format",
                            style: b && b[2]
                        }
                    },
                    aa = "plural",
                    ba = {
                        type: "literal",
                        value: "plural",
                        description: '"plural"'
                    },
                    ca = function(a) {
                        return {
                            type: a.type,
                            ordinal: !1,
                            offset: a.offset || 0,
                            options: a.options
                        }
                    },
                    da = "selectordinal",
                    ea = {
                        type: "literal",
                        value: "selectordinal",
                        description: '"selectordinal"'
                    },
                    fa = function(a) {
                        return {
                            type: a.type,
                            ordinal: !0,
                            offset: a.offset || 0,
                            options: a.options
                        }
                    },
                    ga = "select",
                    ha = {
                        type: "literal",
                        value: "select",
                        description: '"select"'
                    },
                    ia = function(a) {
                        return {
                            type: "selectFormat",
                            options: a
                        }
                    },
                    ja = "=",
                    ka = {
                        type: "literal",
                        value: "=",
                        description: '"="'
                    },
                    la = function(a, b) {
                        return {
                            type: "optionalFormatPattern",
                            selector: a,
                            value: b
                        }
                    },
                    ma = "offset:",
                    na = {
                        type: "literal",
                        value: "offset:",
                        description: '"offset:"'
                    },
                    oa = function(a) {
                        return a
                    },
                    pa = function(a, b) {
                        return {
                            type: "pluralFormat",
                            offset: a,
                            options: b
                        }
                    },
                    qa = {
                        type: "other",
                        description: "whitespace"
                    },
                    ra = /^[ \t\n\r]/,
                    sa = {
                        type: "class",
                        value: "[ \\t\\n\\r]",
                        description: "[ \\t\\n\\r]"
                    },
                    ta = {
                        type: "other",
                        description: "optionalWhitespace"
                    },
                    ua = /^[0-9]/,
                    va = {
                        type: "class",
                        value: "[0-9]",
                        description: "[0-9]"
                    },
                    wa = /^[0-9a-f]/i,
                    xa = {
                        type: "class",
                        value: "[0-9a-f]i",
                        description: "[0-9a-f]i"
                    },
                    ya = "0",
                    za = {
                        type: "literal",
                        value: "0",
                        description: '"0"'
                    },
                    Aa = /^[1-9]/,
                    Ba = {
                        type: "class",
                        value: "[1-9]",
                        description: "[1-9]"
                    },
                    Ca = function(a) {
                        return parseInt(a, 10)
                    },
                    Da = /^[^{}\\\0-\x1F \t\n\r]/,
                    Ea = {
                        type: "class",
                        value: "[^{}\\\\\\0-\\x1F \\t\\n\\r]",
                        description: "[^{}\\\\\\0-\\x1F \\t\\n\\r]"
                    },
                    Fa = "\\\\",
                    Ga = {
                        type: "literal",
                        value: "\\\\",
                        description: '"\\\\\\\\"'
                    },
                    Ha = function() {
                        return "\\"
                    },
                    Ia = "\\#",
                    Ja = {
                        type: "literal",
                        value: "\\#",
                        description: '"\\\\#"'
                    },
                    Ka = function() {
                        return "\\#"
                    },
                    La = "\\{",
                    Ma = {
                        type: "literal",
                        value: "\\{",
                        description: '"\\\\{"'
                    },
                    Na = function() {
                        return "{"
                    },
                    Oa = "\\}",
                    Pa = {
                        type: "literal",
                        value: "\\}",
                        description: '"\\\\}"'
                    },
                    Qa = function() {
                        return "}"
                    },
                    Ra = "\\u",
                    Sa = {
                        type: "literal",
                        value: "\\u",
                        description: '"\\\\u"'
                    },
                    Ta = function(a) {
                        return String.fromCharCode(parseInt(a, 16))
                    },
                    Ua = function(a) {
                        return a.join("")
                    },
                    Va = 0,
                    Wa = 0,
                    Xa = 0,
                    Ya = {
                        line: 1,
                        column: 1,
                        seenCR: !1
                    },
                    Za = 0,
                    $a = [],
                    _a = 0;
                if ("startRule" in D) {
                    if (!(D.startRule in F)) throw new Error("Can't start parsing from rule \"" + D.startRule + '".');
                    G = F[D.startRule]
                }
                if (C = G(), C !== E && Va === a.length) return C;
                throw C !== E && Va < a.length && d({
                    type: "end",
                    description: "end of input"
                }), e(null, $a, Za)
            }
            return a(b, Error), {
                SyntaxError: b,
                parse: c
            }
        }(),
        n = g;
    j(g, "formats", {
        enumerable: !0,
        value: {
            number: {
                currency: {
                    style: "currency"
                },
                percent: {
                    style: "percent"
                }
            },
            date: {
                "short": {
                    month: "numeric",
                    day: "numeric",
                    year: "2-digit"
                },
                medium: {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                },
                "long": {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                },
                full: {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            },
            time: {
                "short": {
                    hour: "numeric",
                    minute: "numeric"
                },
                medium: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                },
                "long": {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                },
                full: {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                }
            }
        }
    }), j(g, "__localeData__", {
        value: k(null)
    }), j(g, "__addLocaleData", {
        value: function(a) {
            if (!a || !a.locale) throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
            g.__localeData__[a.locale.toLowerCase()] = a
        }
    }), j(g, "__parse", {
        value: m.parse
    }), j(g, "defaultLocale", {
        enumerable: !0,
        writable: !0,
        value: void 0
    }), g.prototype.resolvedOptions = function() {
        return {
            locale: this._locale
        }
    }, g.prototype._compilePattern = function(a, b, c, d) {
        var e = new l(b, c, d);
        return e.compile(a)
    }, g.prototype._findPluralRuleFunction = function(a) {
        for (var b = g.__localeData__, c = b[a.toLowerCase()]; c;) {
            if (c.pluralRuleFunction) return c.pluralRuleFunction;
            c = c.parentLocale && b[c.parentLocale.toLowerCase()]
        }
        throw new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + a)
    }, g.prototype._format = function(a, b) {
        var c, d, e, f, g, i = "";
        for (c = 0, d = a.length; d > c; c += 1)
            if (e = a[c], "string" != typeof e) {
                if (f = e.id, !b || !h.call(b, f)) throw new Error("A value must be provided for: " + f);
                g = b[f], i += e.options ? this._format(e.getOption(g), b) : e.format(g)
            } else i += e;
        return i
    }, g.prototype._mergeFormats = function(b, c) {
        var d, e, f = {};
        for (d in b) h.call(b, d) && (f[d] = e = k(b[d]), c && h.call(c, d) && a(e, c[d]));
        return f
    }, g.prototype._resolveLocale = function(a) {
        "string" == typeof a && (a = [a]), a = (a || []).concat(g.defaultLocale);
        var b, c, d, e, f = g.__localeData__;
        for (b = 0, c = a.length; c > b; b += 1)
            for (d = a[b].toLowerCase().split("-"); d.length;) {
                if (e = f[d.join("-")]) return e.locale;
                d.pop()
            }
        var h = a.pop();
        throw new Error("No locale data has been added to IntlMessageFormat for: " + a.join(", ") + ", or the default locale: " + h)
    };
    var o = {
        locale: "en",
        pluralRuleFunction: function(a, b) {
            var c = String(a).split("."),
                d = !c[1],
                e = Number(c[0]) == a,
                f = e && c[0].slice(-1),
                g = e && c[0].slice(-2);
            return b ? 1 == f && 11 != g ? "one" : 2 == f && 12 != g ? "two" : 3 == f && 13 != g ? "few" : "other" : 1 == a && d ? "one" : "other"
        }
    };
    n.__addLocaleData(o), n.defaultLocale = "en";
    var p = n;
    this.IntlMessageFormat = p
}).call(this), IntlMessageFormat.__addLocaleData({
    locale: "af",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "af-NA",
    parentLocale: "af"
}), IntlMessageFormat.__addLocaleData({
    locale: "agq",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ak",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 0 == a || 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "am",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : a >= 0 && 1 >= a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ar",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = Number(c[0]) == a,
            e = d && c[0].slice(-2);
        return b ? "other" : 0 == a ? "zero" : 1 == a ? "one" : 2 == a ? "two" : e >= 3 && 10 >= e ? "few" : e >= 11 && 99 >= e ? "many" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-AE",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-BH",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-DJ",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-DZ",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-EG",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-EH",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-ER",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-IL",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-IQ",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-JO",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-KM",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-KW",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-LB",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-LY",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-MA",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-MR",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-OM",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-PS",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-QA",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-SA",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-SD",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-SO",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-SS",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-SY",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-TD",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-TN",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "ar-YE",
    parentLocale: "ar"
}), IntlMessageFormat.__addLocaleData({
    locale: "as",
    pluralRuleFunction: function(a, b) {
        return b ? 1 == a || 5 == a || 7 == a || 8 == a || 9 == a || 10 == a ? "one" : 2 == a || 3 == a ? "two" : 4 == a ? "few" : 6 == a ? "many" : "other" : a >= 0 && 1 >= a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "asa",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ast",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1];
        return b ? "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "az",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = d.slice(-1),
            f = d.slice(-2),
            g = d.slice(-3);
        return b ? 1 == e || 2 == e || 5 == e || 7 == e || 8 == e || 20 == f || 50 == f || 70 == f || 80 == f ? "one" : 3 == e || 4 == e || 100 == g || 200 == g || 300 == g || 400 == g || 500 == g || 600 == g || 700 == g || 800 == g || 900 == g ? "few" : 0 == d || 6 == e || 40 == f || 60 == f || 90 == f ? "many" : "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "az-Arab",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "az-Cyrl",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "az-Latn",
    parentLocale: "az"
}), IntlMessageFormat.__addLocaleData({
    locale: "bas",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "be",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = Number(c[0]) == a,
            e = d && c[0].slice(-1),
            f = d && c[0].slice(-2);
        return b ? 2 != e && 3 != e || 12 == f || 13 == f ? "other" : "few" : 1 == e && 11 != f ? "one" : e >= 2 && 4 >= e && (12 > f || f > 14) ? "few" : d && 0 == e || e >= 5 && 9 >= e || f >= 11 && 14 >= f ? "many" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "bem",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "bez",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "bg",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "bh",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 0 == a || 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "bm",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "bm-Nkoo",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "bn",
    pluralRuleFunction: function(a, b) {
        return b ? 1 == a || 5 == a || 7 == a || 8 == a || 9 == a || 10 == a ? "one" : 2 == a || 3 == a ? "two" : 4 == a ? "few" : 6 == a ? "many" : "other" : a >= 0 && 1 >= a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "bn-IN",
    parentLocale: "bn"
}), IntlMessageFormat.__addLocaleData({
    locale: "bo",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "bo-IN",
    parentLocale: "bo"
}), IntlMessageFormat.__addLocaleData({
    locale: "br",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = Number(c[0]) == a,
            e = d && c[0].slice(-1),
            f = d && c[0].slice(-2),
            g = d && c[0].slice(-6);
        return b ? "other" : 1 == e && 11 != f && 71 != f && 91 != f ? "one" : 2 == e && 12 != f && 72 != f && 92 != f ? "two" : (3 == e || 4 == e || 9 == e) && (10 > f || f > 19) && (70 > f || f > 79) && (90 > f || f > 99) ? "few" : 0 != a && d && 0 == g ? "many" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "brx",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "bs",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = c[1] || "",
            f = !c[1],
            g = d.slice(-1),
            h = d.slice(-2),
            i = e.slice(-1),
            j = e.slice(-2);
        return b ? "other" : f && 1 == g && 11 != h || 1 == i && 11 != j ? "one" : f && g >= 2 && 4 >= g && (12 > h || h > 14) || i >= 2 && 4 >= i && (12 > j || j > 14) ? "few" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "bs-Cyrl",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "bs-Latn",
    parentLocale: "bs"
}), IntlMessageFormat.__addLocaleData({
    locale: "ca",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1];
        return b ? 1 == a || 3 == a ? "one" : 2 == a ? "two" : 4 == a ? "few" : "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ca-AD",
    parentLocale: "ca"
}), IntlMessageFormat.__addLocaleData({
    locale: "ca-ES-VALENCIA",
    parentLocale: "ca-ES"
}), IntlMessageFormat.__addLocaleData({
    locale: "ca-ES",
    parentLocale: "ca"
}), IntlMessageFormat.__addLocaleData({
    locale: "ca-FR",
    parentLocale: "ca"
}), IntlMessageFormat.__addLocaleData({
    locale: "ca-IT",
    parentLocale: "ca"
}), IntlMessageFormat.__addLocaleData({
    locale: "ce",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "cgg",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "chr",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ckb",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ckb-IR",
    parentLocale: "ckb"
}), IntlMessageFormat.__addLocaleData({
    locale: "cs",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = !c[1];
        return b ? "other" : 1 == a && e ? "one" : d >= 2 && 4 >= d && e ? "few" : e ? "other" : "many"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "cu",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "cy",
    pluralRuleFunction: function(a, b) {
        return b ? 0 == a || 7 == a || 8 == a || 9 == a ? "zero" : 1 == a ? "one" : 2 == a ? "two" : 3 == a || 4 == a ? "few" : 5 == a || 6 == a ? "many" : "other" : 0 == a ? "zero" : 1 == a ? "one" : 2 == a ? "two" : 3 == a ? "few" : 6 == a ? "many" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "da",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = Number(c[0]) == a;
        return b ? "other" : 1 != a && (e || 0 != d && 1 != d) ? "other" : "one"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "da-GL",
    parentLocale: "da"
}), IntlMessageFormat.__addLocaleData({
    locale: "dav",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "de",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1];
        return b ? "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "de-AT",
    parentLocale: "de"
}), IntlMessageFormat.__addLocaleData({
    locale: "de-BE",
    parentLocale: "de"
}), IntlMessageFormat.__addLocaleData({
    locale: "de-CH",
    parentLocale: "de"
}), IntlMessageFormat.__addLocaleData({
    locale: "de-LI",
    parentLocale: "de"
}), IntlMessageFormat.__addLocaleData({
    locale: "de-LU",
    parentLocale: "de"
}), IntlMessageFormat.__addLocaleData({
    locale: "dje",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "dsb",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = c[1] || "",
            f = !c[1],
            g = d.slice(-2),
            h = e.slice(-2);
        return b ? "other" : f && 1 == g || 1 == h ? "one" : f && 2 == g || 2 == h ? "two" : f && (3 == g || 4 == g) || 3 == h || 4 == h ? "few" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "dua",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "dv",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "dyo",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "dz",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ebu",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ee",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ee-TG",
    parentLocale: "ee"
}), IntlMessageFormat.__addLocaleData({
    locale: "el",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "el-CY",
    parentLocale: "el"
}), IntlMessageFormat.__addLocaleData({
    locale: "en",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1],
            e = Number(c[0]) == a,
            f = e && c[0].slice(-1),
            g = e && c[0].slice(-2);
        return b ? 1 == f && 11 != g ? "one" : 2 == f && 12 != g ? "two" : 3 == f && 13 != g ? "few" : "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "en-001",
    parentLocale: "en"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-150",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-AG",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-AI",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-AS",
    parentLocale: "en"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-AT",
    parentLocale: "en-150"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-AU",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-BB",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-BE",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-BI",
    parentLocale: "en"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-BM",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-BS",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-BW",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-BZ",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-CA",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-CC",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-CH",
    parentLocale: "en-150"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-CK",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-CM",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-CX",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-CY",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-DE",
    parentLocale: "en-150"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-DG",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-DK",
    parentLocale: "en-150"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-DM",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-Dsrt",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "en-ER",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-FI",
    parentLocale: "en-150"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-FJ",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-FK",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-FM",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-GB",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-GD",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-GG",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-GH",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-GI",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-GM",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-GU",
    parentLocale: "en"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-GY",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-HK",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-IE",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-IL",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-IM",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-IN",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-IO",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-JE",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-JM",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-KE",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-KI",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-KN",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-KY",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-LC",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-LR",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-LS",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-MG",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-MH",
    parentLocale: "en"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-MO",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-MP",
    parentLocale: "en"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-MS",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-MT",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-MU",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-MW",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-MY",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-NA",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-NF",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-NG",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-NL",
    parentLocale: "en-150"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-NR",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-NU",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-NZ",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-PG",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-PH",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-PK",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-PN",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-PR",
    parentLocale: "en"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-PW",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-RW",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-SB",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-SC",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-SD",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-SE",
    parentLocale: "en-150"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-SG",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-SH",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-SI",
    parentLocale: "en-150"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-SL",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-SS",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-SX",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-SZ",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-Shaw",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "en-TC",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-TK",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-TO",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-TT",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-TV",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-TZ",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-UG",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-UM",
    parentLocale: "en"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-US",
    parentLocale: "en"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-VC",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-VG",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-VI",
    parentLocale: "en"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-VU",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-WS",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-ZA",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-ZM",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "en-ZW",
    parentLocale: "en-001"
}), IntlMessageFormat.__addLocaleData({
    locale: "eo",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "es",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "es-419",
    parentLocale: "es"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-AR",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-BO",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-CL",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-CO",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-CR",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-CU",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-DO",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-EA",
    parentLocale: "es"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-EC",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-GQ",
    parentLocale: "es"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-GT",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-HN",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-IC",
    parentLocale: "es"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-MX",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-NI",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-PA",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-PE",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-PH",
    parentLocale: "es"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-PR",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-PY",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-SV",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-US",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-UY",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "es-VE",
    parentLocale: "es-419"
}), IntlMessageFormat.__addLocaleData({
    locale: "et",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1];
        return b ? "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "eu",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ewo",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "fa",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : a >= 0 && 1 >= a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "fa-AF",
    parentLocale: "fa"
}), IntlMessageFormat.__addLocaleData({
    locale: "ff",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : a >= 0 && 2 > a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ff-CM",
    parentLocale: "ff"
}), IntlMessageFormat.__addLocaleData({
    locale: "ff-GN",
    parentLocale: "ff"
}), IntlMessageFormat.__addLocaleData({
    locale: "ff-MR",
    parentLocale: "ff"
}), IntlMessageFormat.__addLocaleData({
    locale: "fi",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1];
        return b ? "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "fil",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = c[1] || "",
            f = !c[1],
            g = d.slice(-1),
            h = e.slice(-1);
        return b ? 1 == a ? "one" : "other" : f && (1 == d || 2 == d || 3 == d) || f && 4 != g && 6 != g && 9 != g || !f && 4 != h && 6 != h && 9 != h ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "fo",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "fo-DK",
    parentLocale: "fo"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr",
    pluralRuleFunction: function(a, b) {
        return b ? 1 == a ? "one" : "other" : a >= 0 && 2 > a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-BE",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-BF",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-BI",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-BJ",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-BL",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-CA",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-CD",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-CF",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-CG",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-CH",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-CI",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-CM",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-DJ",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-DZ",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-GA",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-GF",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-GN",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-GP",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-GQ",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-HT",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-KM",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-LU",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-MA",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-MC",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-MF",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-MG",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-ML",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-MQ",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-MR",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-MU",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-NC",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-NE",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-PF",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-PM",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-RE",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-RW",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-SC",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-SN",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-SY",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-TD",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-TG",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-TN",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-VU",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-WF",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fr-YT",
    parentLocale: "fr"
}), IntlMessageFormat.__addLocaleData({
    locale: "fur",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "fy",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1];
        return b ? "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ga",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = Number(c[0]) == a;
        return b ? 1 == a ? "one" : "other" : 1 == a ? "one" : 2 == a ? "two" : d && a >= 3 && 6 >= a ? "few" : d && a >= 7 && 10 >= a ? "many" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "gd",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = Number(c[0]) == a;
        return b ? "other" : 1 == a || 11 == a ? "one" : 2 == a || 12 == a ? "two" : d && a >= 3 && 10 >= a || d && a >= 13 && 19 >= a ? "few" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "gl",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1];
        return b ? "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "gsw",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "gsw-FR",
    parentLocale: "gsw"
}), IntlMessageFormat.__addLocaleData({
    locale: "gsw-LI",
    parentLocale: "gsw"
}), IntlMessageFormat.__addLocaleData({
    locale: "gu",
    pluralRuleFunction: function(a, b) {
        return b ? 1 == a ? "one" : 2 == a || 3 == a ? "two" : 4 == a ? "few" : 6 == a ? "many" : "other" : a >= 0 && 1 >= a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "guw",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 0 == a || 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "guz",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "gv",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = !c[1],
            f = d.slice(-1),
            g = d.slice(-2);
        return b ? "other" : e && 1 == f ? "one" : e && 2 == f ? "two" : !e || 0 != g && 20 != g && 40 != g && 60 != g && 80 != g ? e ? "other" : "many" : "few"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ha",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ha-Arab",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ha-GH",
    parentLocale: "ha"
}), IntlMessageFormat.__addLocaleData({
    locale: "ha-NE",
    parentLocale: "ha"
}), IntlMessageFormat.__addLocaleData({
    locale: "haw",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "he",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = !c[1],
            f = Number(c[0]) == a,
            g = f && c[0].slice(-1);
        return b ? "other" : 1 == a && e ? "one" : 2 == d && e ? "two" : e && (0 > a || a > 10) && f && 0 == g ? "many" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "hi",
    pluralRuleFunction: function(a, b) {
        return b ? 1 == a ? "one" : 2 == a || 3 == a ? "two" : 4 == a ? "few" : 6 == a ? "many" : "other" : a >= 0 && 1 >= a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "hr",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = c[1] || "",
            f = !c[1],
            g = d.slice(-1),
            h = d.slice(-2),
            i = e.slice(-1),
            j = e.slice(-2);
        return b ? "other" : f && 1 == g && 11 != h || 1 == i && 11 != j ? "one" : f && g >= 2 && 4 >= g && (12 > h || h > 14) || i >= 2 && 4 >= i && (12 > j || j > 14) ? "few" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "hr-BA",
    parentLocale: "hr"
}), IntlMessageFormat.__addLocaleData({
    locale: "hsb",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = c[1] || "",
            f = !c[1],
            g = d.slice(-2),
            h = e.slice(-2);
        return b ? "other" : f && 1 == g || 1 == h ? "one" : f && 2 == g || 2 == h ? "two" : f && (3 == g || 4 == g) || 3 == h || 4 == h ? "few" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "hu",
    pluralRuleFunction: function(a, b) {
        return b ? 1 == a || 5 == a ? "one" : "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "hy",
    pluralRuleFunction: function(a, b) {
        return b ? 1 == a ? "one" : "other" : a >= 0 && 2 > a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "id",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ig",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ii",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "in",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "is",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = Number(c[0]) == a,
            f = d.slice(-1),
            g = d.slice(-2);
        return b ? "other" : e && 1 == f && 11 != g || !e ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "it",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1];
        return b ? 11 == a || 8 == a || 80 == a || 800 == a ? "many" : "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "it-CH",
    parentLocale: "it"
}), IntlMessageFormat.__addLocaleData({
    locale: "it-SM",
    parentLocale: "it"
}), IntlMessageFormat.__addLocaleData({
    locale: "iu",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : 2 == a ? "two" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "iu-Latn",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "iw",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = !c[1],
            f = Number(c[0]) == a,
            g = f && c[0].slice(-1);
        return b ? "other" : 1 == a && e ? "one" : 2 == d && e ? "two" : e && (0 > a || a > 10) && f && 0 == g ? "many" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ja",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "jbo",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "jgo",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ji",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1];
        return b ? "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "jmc",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "jv",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "jw",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ka",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = d.slice(-2);
        return b ? 1 == d ? "one" : 0 == d || e >= 2 && 20 >= e || 40 == e || 60 == e || 80 == e ? "many" : "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "kab",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : a >= 0 && 2 > a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "kaj",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "kam",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "kcg",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "kde",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "kea",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "khq",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ki",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "kk",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = Number(c[0]) == a,
            e = d && c[0].slice(-1);
        return b ? 6 == e || 9 == e || d && 0 == e && 0 != a ? "many" : "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "kkj",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "kl",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "kln",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "km",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "kn",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : a >= 0 && 1 >= a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ko",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ko-KP",
    parentLocale: "ko"
}), IntlMessageFormat.__addLocaleData({
    locale: "kok",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ks",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ksb",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ksf",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ksh",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 0 == a ? "zero" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ku",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "kw",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : 2 == a ? "two" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ky",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "lag",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0];
        return b ? "other" : 0 == a ? "zero" : 0 != d && 1 != d || 0 == a ? "other" : "one"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "lb",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "lg",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "lkt",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ln",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 0 == a || 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ln-AO",
    parentLocale: "ln"
}), IntlMessageFormat.__addLocaleData({
    locale: "ln-CF",
    parentLocale: "ln"
}), IntlMessageFormat.__addLocaleData({
    locale: "ln-CG",
    parentLocale: "ln"
}), IntlMessageFormat.__addLocaleData({
    locale: "lo",
    pluralRuleFunction: function(a, b) {
        return b && 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "lrc",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "lrc-IQ",
    parentLocale: "lrc"
}), IntlMessageFormat.__addLocaleData({
    locale: "lt",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[1] || "",
            e = Number(c[0]) == a,
            f = e && c[0].slice(-1),
            g = e && c[0].slice(-2);
        return b ? "other" : 1 == f && (11 > g || g > 19) ? "one" : f >= 2 && 9 >= f && (11 > g || g > 19) ? "few" : 0 != d ? "many" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "lu",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "luo",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "luy",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "lv",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[1] || "",
            e = d.length,
            f = Number(c[0]) == a,
            g = f && c[0].slice(-1),
            h = f && c[0].slice(-2),
            i = d.slice(-2),
            j = d.slice(-1);
        return b ? "other" : f && 0 == g || h >= 11 && 19 >= h || 2 == e && i >= 11 && 19 >= i ? "zero" : 1 == g && 11 != h || 2 == e && 1 == j && 11 != i || 2 != e && 1 == j ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "mas",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "mas-TZ",
    parentLocale: "mas"
}), IntlMessageFormat.__addLocaleData({
    locale: "mer",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "mfe",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "mg",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 0 == a || 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "mgh",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "mgo",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "mk",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = c[1] || "",
            f = !c[1],
            g = d.slice(-1),
            h = d.slice(-2),
            i = e.slice(-1);
        return b ? 1 == g && 11 != h ? "one" : 2 == g && 12 != h ? "two" : 7 != g && 8 != g || 17 == h || 18 == h ? "other" : "many" : f && 1 == g || 1 == i ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ml",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "mn",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "mn-Mong",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "mo",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1],
            e = Number(c[0]) == a,
            f = e && c[0].slice(-2);
        return b ? 1 == a ? "one" : "other" : 1 == a && d ? "one" : !d || 0 == a || 1 != a && f >= 1 && 19 >= f ? "few" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "mr",
    pluralRuleFunction: function(a, b) {
        return b ? 1 == a ? "one" : 2 == a || 3 == a ? "two" : 4 == a ? "few" : "other" : a >= 0 && 1 >= a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ms",
    pluralRuleFunction: function(a, b) {
        return b && 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ms-Arab",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ms-BN",
    parentLocale: "ms"
}), IntlMessageFormat.__addLocaleData({
    locale: "ms-SG",
    parentLocale: "ms"
}), IntlMessageFormat.__addLocaleData({
    locale: "mt",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = Number(c[0]) == a,
            e = d && c[0].slice(-2);
        return b ? "other" : 1 == a ? "one" : 0 == a || e >= 2 && 10 >= e ? "few" : e >= 11 && 19 >= e ? "many" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "mua",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "my",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "mzn",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "nah",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "naq",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : 2 == a ? "two" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "nb",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "nb-SJ",
    parentLocale: "nb"
}), IntlMessageFormat.__addLocaleData({
    locale: "nd",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ne",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = Number(c[0]) == a;
        return b ? d && a >= 1 && 4 >= a ? "one" : "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ne-IN",
    parentLocale: "ne"
}), IntlMessageFormat.__addLocaleData({
    locale: "nl",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1];
        return b ? "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "nl-AW",
    parentLocale: "nl"
}), IntlMessageFormat.__addLocaleData({
    locale: "nl-BE",
    parentLocale: "nl"
}), IntlMessageFormat.__addLocaleData({
    locale: "nl-BQ",
    parentLocale: "nl"
}), IntlMessageFormat.__addLocaleData({
    locale: "nl-CW",
    parentLocale: "nl"
}), IntlMessageFormat.__addLocaleData({
    locale: "nl-SR",
    parentLocale: "nl"
}), IntlMessageFormat.__addLocaleData({
    locale: "nl-SX",
    parentLocale: "nl"
}), IntlMessageFormat.__addLocaleData({
    locale: "nmg",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "nn",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "nnh",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "no",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "nqo",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "nr",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "nso",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 0 == a || 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "nus",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ny",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "nyn",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "om",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "om-KE",
    parentLocale: "om"
}), IntlMessageFormat.__addLocaleData({
    locale: "or",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "os",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "os-RU",
    parentLocale: "os"
}), IntlMessageFormat.__addLocaleData({
    locale: "pa",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 0 == a || 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "pa-Arab",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "pa-Guru",
    parentLocale: "pa"
}), IntlMessageFormat.__addLocaleData({
    locale: "pap",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "pl",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = !c[1],
            f = d.slice(-1),
            g = d.slice(-2);
        return b ? "other" : 1 == a && e ? "one" : e && f >= 2 && 4 >= f && (12 > g || g > 14) ? "few" : e && 1 != d && (0 == f || 1 == f) || e && f >= 5 && 9 >= f || e && g >= 12 && 14 >= g ? "many" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "prg",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[1] || "",
            e = d.length,
            f = Number(c[0]) == a,
            g = f && c[0].slice(-1),
            h = f && c[0].slice(-2),
            i = d.slice(-2),
            j = d.slice(-1);
        return b ? "other" : f && 0 == g || h >= 11 && 19 >= h || 2 == e && i >= 11 && 19 >= i ? "zero" : 1 == g && 11 != h || 2 == e && 1 == j && 11 != i || 2 != e && 1 == j ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ps",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "pt",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = Number(c[0]) == a;
        return b ? "other" : d && a >= 0 && 2 >= a && 2 != a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "pt-AO",
    parentLocale: "pt-PT"
}), IntlMessageFormat.__addLocaleData({
    locale: "pt-PT",
    parentLocale: "pt",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1];
        return b ? "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "pt-CV",
    parentLocale: "pt-PT"
}), IntlMessageFormat.__addLocaleData({
    locale: "pt-GW",
    parentLocale: "pt-PT"
}), IntlMessageFormat.__addLocaleData({
    locale: "pt-MO",
    parentLocale: "pt-PT"
}), IntlMessageFormat.__addLocaleData({
    locale: "pt-MZ",
    parentLocale: "pt-PT"
}), IntlMessageFormat.__addLocaleData({
    locale: "pt-ST",
    parentLocale: "pt-PT"
}), IntlMessageFormat.__addLocaleData({
    locale: "pt-TL",
    parentLocale: "pt-PT"
}), IntlMessageFormat.__addLocaleData({
    locale: "qu",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "qu-BO",
    parentLocale: "qu"
}), IntlMessageFormat.__addLocaleData({
    locale: "qu-EC",
    parentLocale: "qu"
}), IntlMessageFormat.__addLocaleData({
    locale: "rm",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "rn",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ro",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1],
            e = Number(c[0]) == a,
            f = e && c[0].slice(-2);
        return b ? 1 == a ? "one" : "other" : 1 == a && d ? "one" : !d || 0 == a || 1 != a && f >= 1 && 19 >= f ? "few" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ro-MD",
    parentLocale: "ro"
}), IntlMessageFormat.__addLocaleData({
    locale: "rof",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ru",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = !c[1],
            f = d.slice(-1),
            g = d.slice(-2);
        return b ? "other" : e && 1 == f && 11 != g ? "one" : e && f >= 2 && 4 >= f && (12 > g || g > 14) ? "few" : e && 0 == f || e && f >= 5 && 9 >= f || e && g >= 11 && 14 >= g ? "many" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ru-BY",
    parentLocale: "ru"
}), IntlMessageFormat.__addLocaleData({
    locale: "ru-KG",
    parentLocale: "ru"
}), IntlMessageFormat.__addLocaleData({
    locale: "ru-KZ",
    parentLocale: "ru"
}), IntlMessageFormat.__addLocaleData({
    locale: "ru-MD",
    parentLocale: "ru"
}), IntlMessageFormat.__addLocaleData({
    locale: "ru-UA",
    parentLocale: "ru"
}), IntlMessageFormat.__addLocaleData({
    locale: "rw",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "rwk",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sah",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "saq",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sbp",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sdh",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "se",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : 2 == a ? "two" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "se-FI",
    parentLocale: "se"
}), IntlMessageFormat.__addLocaleData({
    locale: "se-SE",
    parentLocale: "se"
}), IntlMessageFormat.__addLocaleData({
    locale: "seh",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ses",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sg",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sh",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = c[1] || "",
            f = !c[1],
            g = d.slice(-1),
            h = d.slice(-2),
            i = e.slice(-1),
            j = e.slice(-2);
        return b ? "other" : f && 1 == g && 11 != h || 1 == i && 11 != j ? "one" : f && g >= 2 && 4 >= g && (12 > h || h > 14) || i >= 2 && 4 >= i && (12 > j || j > 14) ? "few" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "shi",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = Number(c[0]) == a;
        return b ? "other" : a >= 0 && 1 >= a ? "one" : d && a >= 2 && 10 >= a ? "few" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "shi-Latn",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "shi-Tfng",
    parentLocale: "shi"
}), IntlMessageFormat.__addLocaleData({
    locale: "si",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = c[1] || "";
        return b ? "other" : 0 == a || 1 == a || 0 == d && 1 == e ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sk",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = !c[1];
        return b ? "other" : 1 == a && e ? "one" : d >= 2 && 4 >= d && e ? "few" : e ? "other" : "many"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sl",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = !c[1],
            f = d.slice(-2);
        return b ? "other" : e && 1 == f ? "one" : e && 2 == f ? "two" : e && (3 == f || 4 == f) || !e ? "few" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sma",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : 2 == a ? "two" : "other";

    }
}), IntlMessageFormat.__addLocaleData({
    locale: "smi",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : 2 == a ? "two" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "smj",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : 2 == a ? "two" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "smn",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : 2 == a ? "two" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sms",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : 2 == a ? "two" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sn",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "so",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "so-DJ",
    parentLocale: "so"
}), IntlMessageFormat.__addLocaleData({
    locale: "so-ET",
    parentLocale: "so"
}), IntlMessageFormat.__addLocaleData({
    locale: "so-KE",
    parentLocale: "so"
}), IntlMessageFormat.__addLocaleData({
    locale: "sq",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = Number(c[0]) == a,
            e = d && c[0].slice(-1),
            f = d && c[0].slice(-2);
        return b ? 1 == a ? "one" : 4 == e && 14 != f ? "many" : "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sq-MK",
    parentLocale: "sq"
}), IntlMessageFormat.__addLocaleData({
    locale: "sq-XK",
    parentLocale: "sq"
}), IntlMessageFormat.__addLocaleData({
    locale: "sr",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = c[1] || "",
            f = !c[1],
            g = d.slice(-1),
            h = d.slice(-2),
            i = e.slice(-1),
            j = e.slice(-2);
        return b ? "other" : f && 1 == g && 11 != h || 1 == i && 11 != j ? "one" : f && g >= 2 && 4 >= g && (12 > h || h > 14) || i >= 2 && 4 >= i && (12 > j || j > 14) ? "few" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sr-Cyrl",
    parentLocale: "sr"
}), IntlMessageFormat.__addLocaleData({
    locale: "sr-Cyrl-BA",
    parentLocale: "sr-Cyrl"
}), IntlMessageFormat.__addLocaleData({
    locale: "sr-Cyrl-ME",
    parentLocale: "sr-Cyrl"
}), IntlMessageFormat.__addLocaleData({
    locale: "sr-Cyrl-XK",
    parentLocale: "sr-Cyrl"
}), IntlMessageFormat.__addLocaleData({
    locale: "sr-Latn",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sr-Latn-BA",
    parentLocale: "sr-Latn"
}), IntlMessageFormat.__addLocaleData({
    locale: "sr-Latn-ME",
    parentLocale: "sr-Latn"
}), IntlMessageFormat.__addLocaleData({
    locale: "sr-Latn-XK",
    parentLocale: "sr-Latn"
}), IntlMessageFormat.__addLocaleData({
    locale: "ss",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ssy",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "st",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sv",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1],
            e = Number(c[0]) == a,
            f = e && c[0].slice(-1),
            g = e && c[0].slice(-2);
        return b ? 1 != f && 2 != f || 11 == g || 12 == g ? "other" : "one" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sv-AX",
    parentLocale: "sv"
}), IntlMessageFormat.__addLocaleData({
    locale: "sv-FI",
    parentLocale: "sv"
}), IntlMessageFormat.__addLocaleData({
    locale: "sw",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1];
        return b ? "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "sw-CD",
    parentLocale: "sw"
}), IntlMessageFormat.__addLocaleData({
    locale: "sw-KE",
    parentLocale: "sw"
}), IntlMessageFormat.__addLocaleData({
    locale: "sw-UG",
    parentLocale: "sw"
}), IntlMessageFormat.__addLocaleData({
    locale: "syr",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ta",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ta-LK",
    parentLocale: "ta"
}), IntlMessageFormat.__addLocaleData({
    locale: "ta-MY",
    parentLocale: "ta"
}), IntlMessageFormat.__addLocaleData({
    locale: "ta-SG",
    parentLocale: "ta"
}), IntlMessageFormat.__addLocaleData({
    locale: "te",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "teo",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "teo-KE",
    parentLocale: "teo"
}), IntlMessageFormat.__addLocaleData({
    locale: "th",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ti",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 0 == a || 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ti-ER",
    parentLocale: "ti"
}), IntlMessageFormat.__addLocaleData({
    locale: "tig",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "tk",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "tl",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = c[1] || "",
            f = !c[1],
            g = d.slice(-1),
            h = e.slice(-1);
        return b ? 1 == a ? "one" : "other" : f && (1 == d || 2 == d || 3 == d) || f && 4 != g && 6 != g && 9 != g || !f && 4 != h && 6 != h && 9 != h ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "tn",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "to",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "tr",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "tr-CY",
    parentLocale: "tr"
}), IntlMessageFormat.__addLocaleData({
    locale: "ts",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "twq",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "tzm",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = Number(c[0]) == a;
        return b ? "other" : 0 == a || 1 == a || d && a >= 11 && 99 >= a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ug",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "uk",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = c[0],
            e = !c[1],
            f = Number(c[0]) == a,
            g = f && c[0].slice(-1),
            h = f && c[0].slice(-2),
            i = d.slice(-1),
            j = d.slice(-2);
        return b ? 3 == g && 13 != h ? "few" : "other" : e && 1 == i && 11 != j ? "one" : e && i >= 2 && 4 >= i && (12 > j || j > 14) ? "few" : e && 0 == i || e && i >= 5 && 9 >= i || e && j >= 11 && 14 >= j ? "many" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ur",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1];
        return b ? "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "ur-IN",
    parentLocale: "ur"
}), IntlMessageFormat.__addLocaleData({
    locale: "uz",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "uz-Arab",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "uz-Cyrl",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "uz-Latn",
    parentLocale: "uz"
}), IntlMessageFormat.__addLocaleData({
    locale: "vai",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "vai-Latn",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "vai-Vaii",
    parentLocale: "vai"
}), IntlMessageFormat.__addLocaleData({
    locale: "ve",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "vi",
    pluralRuleFunction: function(a, b) {
        return b && 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "vo",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "vun",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "wa",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 0 == a || 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "wae",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "wo",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "xh",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "xog",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : 1 == a ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "yav",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "yi",
    pluralRuleFunction: function(a, b) {
        var c = String(a).split("."),
            d = !c[1];
        return b ? "other" : 1 == a && d ? "one" : "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "yo",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "yo-BJ",
    parentLocale: "yo"
}), IntlMessageFormat.__addLocaleData({
    locale: "zgh",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "zh",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "zh-Hans",
    parentLocale: "zh"
}), IntlMessageFormat.__addLocaleData({
    locale: "zh-Hans-HK",
    parentLocale: "zh-Hans"
}), IntlMessageFormat.__addLocaleData({
    locale: "zh-Hans-MO",
    parentLocale: "zh-Hans"
}), IntlMessageFormat.__addLocaleData({
    locale: "zh-Hans-SG",
    parentLocale: "zh-Hans"
}), IntlMessageFormat.__addLocaleData({
    locale: "zh-Hant",
    pluralRuleFunction: function(a, b) {
        return "other"
    }
}), IntlMessageFormat.__addLocaleData({
    locale: "zh-Hant-HK",
    parentLocale: "zh-Hant"
}), IntlMessageFormat.__addLocaleData({
    locale: "zh-Hant-MO",
    parentLocale: "zh-Hant-HK"
}), IntlMessageFormat.__addLocaleData({
    locale: "zu",
    pluralRuleFunction: function(a, b) {
        return b ? "other" : a >= 0 && 1 >= a ? "one" : "other"
    }
});
//# sourceMappingURL=intl-messageformat-with-locales.min.js.map