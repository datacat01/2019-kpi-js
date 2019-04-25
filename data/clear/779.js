/*

//     Underscore.js 1.2.2
//     (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore is freely distributable under the MIT license.
//     Portions of Underscore are inspired or borrowed from Prototype,
//     Oliver Steele's Functional, and John Resig's Micro-Templating.
//     For all details and documentation:
//     http://documentcloud.github.com/underscore
*/
fourSq.api = {};
fourSq.api.models = {};
fourSq.api.models.companion = {};
fourSq.api.models.companion.entity = {};
fourSq.api.models.companion.log = {};
fourSq.api.models.companion.typedmodel = {};
fourSq.api.net = {};
fourSq.api.services = {};
fourSq.api.services.paths = {};
fourSq.collection = {};
fourSq.corpinfo = {};
fourSq.corpinfo.pages = {};
fourSq.corpinfo.views = {};
fourSq.corps = {};
fourSq.debug = {};
fourSq.i18n = {};
fourSq.net = {};
fourSq.retina = {};
fourSq.soyhelpers = {};
fourSq.stats = {};
fourSq.stats.action = {};
fourSq.ui = {};
fourSq.ui.dialog = {};
fourSq.util = {};
fourSq.views = {};
(function() {
    function a(c, b, e) {
        if (c === b) return 0 !== c || 1 / c == 1 / b;
        if (null == c || null == b) return c === b;
        c._chain && (c = c._wrapped);
        b._chain && (b = b._wrapped);
        if (m.isFunction(c.isEqual)) return c.isEqual(b);
        if (m.isFunction(b.isEqual)) return b.isEqual(c);
        var d = g.call(c);
        if (d != g.call(b)) return !1;
        switch (d) {
            case "[object String]":
                return String(c) == String(b);
            case "[object Number]":
                return c = +c, b = +b, c != c ? b != b : 0 == c ? 1 / c == 1 / b : c == b;
            case "[object Date]":
            case "[object Boolean]":
                return +c == +b;
            case "[object RegExp]":
                return c.source ==
                    b.source && c.global == b.global && c.multiline == b.multiline && c.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof c || "object" != typeof b) return !1;
        for (var h = e.length; h--;)
            if (e[h] == c) return !0;
        e.push(c);
        var h = 0,
            p = !0;
        if ("[object Array]" == d) {
            if (h = c.length, p = h == b.length)
                for (; h-- && (p = h in c == h in b && a(c[h], b[h], e)););
        } else {
            if ("constructor" in c != "constructor" in b || c.constructor != b.constructor) return !1;
            for (var k in c)
                if (f.call(c, k) && (h++, !(p = f.call(b, k) && a(c[k], b[k], e)))) break;
            if (p) {
                for (k in b)
                    if (f.call(b, k) && !h--) break;
                p = !h
            }
        }
        e.pop();
        return p
    }
    var c = this,
        b = c._,
        d = {},
        k = Array.prototype,
        l = Object.prototype,
        h = k.slice,
        e = k.unshift,
        g = l.toString,
        f = l.hasOwnProperty,
        p = k.forEach,
        t = k.map,
        v = k.reduce,
        r = k.reduceRight,
        u = k.filter,
        q = k.every,
        x = k.some,
        z = k.indexOf,
        A = k.lastIndexOf,
        l = Array.isArray,
        y = Object.keys,
        C = Function.prototype.bind,
        m = function(a) {
            return new s(a)
        };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = m), exports._ = m) : "function" === typeof define && define.amd ? define("underscore",
        function() {
            return m
        }) : c._ = m;
    m.VERSION = "1.2.2";
    var w = m.each = m.forEach = function(a, c, b) {
        if (null != a)
            if (p && a.forEach === p) a.forEach(c, b);
            else if (a.length === +a.length)
            for (var g = 0, e = a.length; g < e && !(g in a && c.call(b, a[g], g, a) === d); g++);
        else
            for (g in a)
                if (f.call(a, g) && c.call(b, a[g], g, a) === d) break
    };
    m.map = function(a, c, b) {
        var f = [];
        if (null == a) return f;
        if (t && a.map === t) return a.map(c, b);
        w(a, function(a, g, e) {
            f[f.length] = c.call(b, a, g, e)
        });
        return f
    };
    m.reduce = m.foldl = m.inject = function(a, c, b, f) {
        var g = void 0 !== b;
        null ==
            a && (a = []);
        if (v && a.reduce === v) return f && (c = fourSq.bind(c, f)), g ? a.reduce(c, b) : a.reduce(c);
        w(a, function(a, e, d) {
            g ? b = c.call(f, b, a, e, d) : (b = a, g = !0)
        });
        if (!g) throw new TypeError("Reduce of empty array with no initial value");
        return b
    };
    m.reduceRight = m.foldr = function(a, c, b, f) {
        null == a && (a = []);
        if (r && a.reduceRight === r) return f && (c = fourSq.bind(c, f)), void 0 !== b ? a.reduceRight(c, b) : a.reduceRight(c);
        a = (m.isArray(a) ? a.slice() : m.toArray(a)).reverse();
        return m.reduce(a, c, b, f)
    };
    m.find = m.detect = function(a, c, b) {
        var f;
        B(a,
            function(a, g, e) {
                if (c.call(b, a, g, e)) return f = a, !0
            });
        return f
    };
    m.filter = m.select = function(a, c, b) {
        var f = [];
        if (null == a) return f;
        if (u && a.filter === u) return a.filter(c, b);
        w(a, function(a, g, e) {
            c.call(b, a, g, e) && (f[f.length] = a)
        });
        return f
    };
    m.reject = function(a, c, b) {
        var f = [];
        if (null == a) return f;
        w(a, function(a, g, e) {
            c.call(b, a, g, e) || (f[f.length] = a)
        });
        return f
    };
    m.every = m.all = function(a, c, b) {
        var f = !0;
        if (null == a) return f;
        if (q && a.every === q) return a.every(c, b);
        w(a, function(a, g, e) {
            if (!(f = f && c.call(b, a, g, e))) return d
        });
        return f
    };
    var B = m.some = m.any = function(a, c, b) {
        c = c || m.identity;
        var f = !1;
        if (null == a) return f;
        if (x && a.some === x) return a.some(c, b);
        w(a, function(a, g, e) {
            if (f || (f = c.call(b, a, g, e))) return d
        });
        return !!f
    };
    m.include = m.contains = function(a, c) {
        var b = !1;
        return null == a ? b : z && a.indexOf === z ? -1 != a.indexOf(c) : b = B(a, function(a) {
            return a === c
        })
    };
    m.invoke = function(a, c) {
        var b = h.call(arguments, 2);
        return m.map(a, function(a) {
            return (c.call ? c || a : a[c]).apply(a, b)
        })
    };
    m.pluck = function(a, c) {
        return m.map(a, function(a) {
            return a[c]
        })
    };
    m.max = function(a, c, b) {
        if (!c && m.isArray(a)) return Math.max.apply(Math, a);
        if (!c && m.isEmpty(a)) return -Infinity;
        var f = {
            computed: -Infinity
        };
        w(a, function(a, g, e) {
            g = c ? c.call(b, a, g, e) : a;
            g >= f.computed && (f = {
                value: a,
                computed: g
            })
        });
        return f.value
    };
    m.min = function(a, c, b) {
        if (!c && m.isArray(a)) return Math.min.apply(Math, a);
        if (!c && m.isEmpty(a)) return Infinity;
        var f = {
            computed: Infinity
        };
        w(a, function(a, g, e) {
            g = c ? c.call(b, a, g, e) : a;
            g < f.computed && (f = {
                value: a,
                computed: g
            })
        });
        return f.value
    };
    m.shuffle = function(a) {
        var c = [],
            b;
        w(a, function(a, f, g) {
            0 == f ? c[0] = a : (b = Math.floor(Math.random() * (f + 1)), c[f] = c[b], c[b] = a)
        });
        return c
    };
    m.sortBy = function(a, c, b) {
        return m.pluck(m.map(a, function(a, f, g) {
            return {
                value: a,
                criteria: c.call(b, a, f, g)
            }
        }).sort(function(a, c) {
            var b = a.criteria,
                f = c.criteria;
            return b < f ? -1 : b > f ? 1 : 0
        }), "value")
    };
    m.groupBy = function(a, c) {
        var b = {},
            f = m.isFunction(c) ? c : function(a) {
                return a[c]
            };
        w(a, function(a, c) {
            var g = f(a, c);
            (b[g] || (b[g] = [])).push(a)
        });
        return b
    };
    m.sortedIndex = function(a, c, b) {
        b || (b = m.identity);
        for (var f = 0, g = a.length; f <
            g;) {
            var e = f + g >> 1;
            b(a[e]) < b(c) ? f = e + 1 : g = e
        }
        return f
    };
    m.toArray = function(a) {
        return a ? a.toArray ? a.toArray() : m.isArray(a) || m.isArguments(a) ? h.call(a) : m.values(a) : []
    };
    m.size = function(a) {
        return m.toArray(a).length
    };
    m.first = m.head = function(a, c, b) {
        return null == c || b ? a[0] : h.call(a, 0, c)
    };
    m.initial = function(a, c, b) {
        return h.call(a, 0, a.length - (null == c || b ? 1 : c))
    };
    m.last = function(a, c, b) {
        return null == c || b ? a[a.length - 1] : h.call(a, Math.max(a.length - c, 0))
    };
    m.rest = m.tail = function(a, c, b) {
        return h.call(a, null == c || b ? 1 : c)
    };
    m.compact =
        function(a) {
            return m.filter(a, function(a) {
                return !!a
            })
        };
    m.flatten = function(a, c) {
        return m.reduce(a, function(a, b) {
            if (m.isArray(b)) return a.concat(c ? b : m.flatten(b));
            a[a.length] = b;
            return a
        }, [])
    };
    m.without = function(a) {
        return m.difference(a, h.call(arguments, 1))
    };
    m.uniq = m.unique = function(a, c, b) {
        b = b ? m.map(a, b) : a;
        var f = [];
        m.reduce(b, function(b, g, e) {
            0 != e && (!0 === c ? m.last(b) == g : m.include(b, g)) || (b[b.length] = g, f[f.length] = a[e]);
            return b
        }, []);
        return f
    };
    m.union = function() {
        return m.uniq(m.flatten(arguments, !0))
    };
    m.intersection = m.intersect = function(a) {
        var c = h.call(arguments, 1);
        return m.filter(m.uniq(a), function(a) {
            return m.every(c, function(c) {
                return 0 <= m.indexOf(c, a)
            })
        })
    };
    m.difference = function(a, c) {
        return m.filter(a, function(a) {
            return !m.include(c, a)
        })
    };
    m.zip = function() {
        for (var a = h.call(arguments), c = m.max(m.pluck(a, "length")), b = Array(c), f = 0; f < c; f++) b[f] = m.pluck(a, "" + f);
        return b
    };
    m.indexOf = function(a, c, b) {
        if (null == a) return -1;
        var f;
        if (b) return b = m.sortedIndex(a, c), a[b] === c ? b : -1;
        if (z && a.indexOf === z) return a.indexOf(c);
        b = 0;
        for (f = a.length; b < f; b++)
            if (a[b] === c) return b;
        return -1
    };
    m.lastIndexOf = function(a, c) {
        if (null == a) return -1;
        if (A && a.lastIndexOf === A) return a.lastIndexOf(c);
        for (var b = a.length; b--;)
            if (a[b] === c) return b;
        return -1
    };
    m.range = function(a, c, b) {
        1 >= arguments.length && (c = a || 0, a = 0);
        b = arguments[2] || 1;
        for (var f = Math.max(Math.ceil((c - a) / b), 0), g = 0, e = Array(f); g < f;) e[g++] = a, a += b;
        return e
    };
    var E = function() {};
    m.bind = function(a, c) {
        var b, f;
        if (a.bind === C && C) return C.apply(a, h.call(arguments, 1));
        if (!m.isFunction(a)) throw new TypeError;
        f = h.call(arguments, 2);
        return b = function() {
            if (!(this instanceof b)) return a.apply(c, f.concat(h.call(arguments)));
            E.prototype = a.prototype;
            var g = new E,
                e = a.apply(g, f.concat(h.call(arguments)));
            return Object(e) === e ? e : g
        }
    };
    m.bindAll = function(a) {
        var c = h.call(arguments, 1);
        0 == c.length && (c = m.functions(a));
        w(c, function(c) {
            a[c] = fourSq.bind(a[c], a)
        });
        return a
    };
    m.memoize = function(a, c) {
        var b = {};
        c || (c = m.identity);
        return function() {
            var g = c.apply(this, arguments);
            return f.call(b, g) ? b[g] : b[g] = a.apply(this, arguments)
        }
    };
    m.delay = function(a, c) {
        var b = h.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(a, b)
        }, c)
    };
    m.defer = function(a) {
        return m.delay.apply(m, [a, 1].concat(h.call(arguments, 1)))
    };
    m.throttle = function(a, c) {
        var b, f, g, e, d, h = m.debounce(function() {
            d = e = !1
        }, c);
        return function() {
            b = this;
            f = arguments;
            g || (g = setTimeout(function() {
                g = null;
                d && a.apply(b, f);
                h()
            }, c));
            e ? d = !0 : a.apply(b, f);
            h();
            e = !0
        }
    };
    m.debounce = function(a, c) {
        var b;
        return function() {
            var f = this,
                g = arguments;
            clearTimeout(b);
            b = setTimeout(function() {
                b = null;
                a.apply(f, g)
            }, c)
        }
    };
    m.once = function(a) {
        var c = !1,
            b;
        return function() {
            if (c) return b;
            c = !0;
            return b = a.apply(this, arguments)
        }
    };
    m.wrap = function(a, c) {
        return function() {
            var b = [a].concat(h.call(arguments));
            return c.apply(this, b)
        }
    };
    m.compose = function() {
        var a = h.call(arguments);
        return function() {
            for (var c = h.call(arguments), b = a.length - 1; 0 <= b; b--) c = [a[b].apply(this, c)];
            return c[0]
        }
    };
    m.after = function(a, c) {
        return 0 >= a ? c() : function() {
            if (1 > --a) return c.apply(this, arguments)
        }
    };
    m.keys = y || function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var c = [],
            b;
        for (b in a) f.call(a, b) && (c[c.length] = b);
        return c
    };
    m.values = function(a) {
        return m.map(a, m.identity)
    };
    m.functions = m.methods = function(a) {
        var c = [],
            b;
        for (b in a) m.isFunction(a[b]) && c.push(b);
        return c.sort()
    };
    m.extend = function(a) {
        w(h.call(arguments, 1), function(c) {
            for (var b in c) void 0 !== c[b] && (a[b] = c[b])
        });
        return a
    };
    m.defaults = function(a) {
        w(h.call(arguments, 1), function(c) {
            for (var b in c) null == a[b] && (a[b] = c[b])
        });
        return a
    };
    m.clone = function(a) {
        return m.isObject(a) ? m.isArray(a) ? a.slice() : m.extend({},
            a) : a
    };
    m.tap = function(a, c) {
        c(a);
        return a
    };
    m.isEqual = function(c, b) {
        return a(c, b, [])
    };
    m.isEmpty = function(a) {
        if (m.isArray(a) || m.isString(a)) return 0 === a.length;
        for (var c in a)
            if (f.call(a, c)) return !1;
        return !0
    };
    m.isElement = function(a) {
        return !(!a || 1 != a.nodeType)
    };
    m.isArray = l || function(a) {
        return "[object Array]" == g.call(a)
    };
    m.isObject = function(a) {
        return a === Object(a)
    };
    "[object Arguments]" == g.call(arguments) ? m.isArguments = function(a) {
        return "[object Arguments]" == g.call(a)
    } : m.isArguments = function(a) {
        return !(!a ||
            !f.call(a, "callee"))
    };
    m.isFunction = function(a) {
        return "[object Function]" == g.call(a)
    };
    m.isString = function(a) {
        return "[object String]" == g.call(a)
    };
    m.isNumber = function(a) {
        return "[object Number]" == g.call(a)
    };
    m.isNaN = function(a) {
        return a !== a
    };
    m.isBoolean = function(a) {
        return !0 === a || !1 === a || "[object Boolean]" == g.call(a)
    };
    m.isDate = function(a) {
        return "[object Date]" == g.call(a)
    };
    m.isRegExp = function(a) {
        return "[object RegExp]" == g.call(a)
    };
    m.isNull = function(a) {
        return null === a
    };
    m.isUndefined = function(a) {
        return void 0 ===
            a
    };
    m.noConflict = function() {
        c._ = b;
        return this
    };
    m.identity = function(a) {
        return a
    };
    m.times = function(a, c, b) {
        for (var f = 0; f < a; f++) c.call(b, f)
    };
    m.escape = function(a) {
        return ("" + a).replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;").replace(/"/g, "\x26quot;").replace(/'/g, "\x26#x27;").replace(/\//g, "\x26#x2F;")
    };
    m.mixin = function(a) {
        w(m.functions(a), function(c) {
            I(c, m[c] = a[c])
        })
    };
    var F = 0;
    m.uniqueId = function(a) {
        var c = F++;
        return a ? a + c : c
    };
    m.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    m.template = function(a, c) {
        var b = m.templateSettings,
            b = "var __p\x3d[],print\x3dfunction(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(b.escape, function(a, c) {
                return "',_.escape(" + c.replace(/\\'/g, "'") + "),'"
            }).replace(b.interpolate, function(a, c) {
                return "'," + c.replace(/\\'/g, "'") + ",'"
            }).replace(b.evaluate || null, function(a, c) {
                return "');" + c.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + ";__p.push('"
            }).replace(/\r/g,
                "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
            f = new Function("obj", "_", b);
        return c ? f(c, m) : function(a) {
            return f(a, m)
        }
    };
    var s = function(a) {
        this._wrapped = a
    };
    m.prototype = s.prototype;
    var D = function(a, c) {
            return c ? m(a).chain() : a
        },
        I = function(a, c) {
            s.prototype[a] = function() {
                var a = h.call(arguments);
                e.call(a, this._wrapped);
                return D(c.apply(m, a), this._chain)
            }
        };
    m.mixin(m);
    w("pop push reverse shift sort splice unshift".split(" "), function(a) {
        var c = k[a];
        s.prototype[a] = function() {
            c.apply(this._wrapped,
                arguments);
            return D(this._wrapped, this._chain)
        }
    });
    w(["concat", "join", "slice"], function(a) {
        var c = k[a];
        s.prototype[a] = function() {
            return D(c.apply(this._wrapped, arguments), this._chain)
        }
    });
    s.prototype.chain = function() {
        this._chain = !0;
        return this
    };
    s.prototype.value = function() {
        return this._wrapped
    }
}).call(this);
(function(a) {
    a.fn.placeholder = function(c) {
        return this.each(function() {
            var b = a(this),
                d = b.attr("placeholder"),
                k = c && c.clearOnFocus || !1;
            if (d) {
                b.removeAttr("placeholder");
                var l = b.wrap(a(document.createElement("span")).addClass("input-holder")).parent(),
                    h = a(document.createElement("span")).text(d).addClass("input-default");
                l.append(h);
                h.click(function() {
                    b.focus()
                });
                var e = function() {
                    0 === b.val().length ? h.show() : h.hide()
                };
                e();
                k ? (b.focus(function(a) {
                    h.hide()
                }), b.blur(e)) : (b.keydown(function(a) {
                    "8" !== a.keyCode &&
                        "9" !== a.keyCode && "16" !== a.keyCode && e()
                }), b.keyup(e));
                b.change(e)
            }
        })
    }
})(jQuery);
(function(a) {
    var c = function(c, b) {
        this.target = a(c);
        this.touch = b;
        this.startX = this.currentX = b.screenX;
        this.startY = this.currentY = b.screenY;
        this.eventType = null
    };
    c.latestTap = null;
    c.prototype.move = function(a) {
        this.currentX = a.screenX;
        this.currentY = a.screenY
    };
    c.prototype.process = function(a) {
        var c = this.offsetX = this.currentX - this.startX,
            b = this.offsetY = this.currentY - this.startY;
        void 0 === a ? (0 == c && 0 == b ? this.checkForDoubleTap() : (Math.abs(b) > Math.abs(c) ? this.eventType = 0 < b ? "swipedown" : "swipeup" : this.eventType = 0 < c ?
            "swiperight" : "swipeleft", this.target.trigger("swipe", [this])), this.target.trigger(this.eventType, [this]), this.target.trigger("touch", [this])) : this.target.trigger("move", [this])
    };
    c.prototype.checkForDoubleTap = function() {
        c.latestTap && 400 > new Date - c.latestTap && (this.eventType = "doubletap");
        this.eventType || (this.eventType = "tap");
        c.latestTap = new Date
    };
    var b = function(a) {
        a.bind("touchstart", this.touchStart);
        a.bind("touchmove", this.touchMove);
        a.bind("touchcancel", this.touchCancel);
        a.bind("touchend", this.touchEnd)
    };
    b.prototype.touchStart = function(a) {
        var k = this;
        b.eachTouch(a, function(a) {
            b.touches[a.identifier] = new c(k, a)
        })
    };
    b.prototype.touchMove = function(a) {
        b.eachTouch(a, function(a) {
            var c = b.touches[a.identifier];
            c && (c.move(a), c.process(!1))
        })
    };
    b.prototype.touchCancel = function(a) {
        b.eachTouch(a, function(a) {
            b.purge(a, !0)
        })
    };
    b.prototype.touchEnd = function(a) {
        b.eachTouch(a, function(a) {
            b.purge(a)
        })
    };
    b.touches = {};
    b.purge = function(a, c) {
        if (!c) {
            var l = b.touches[a.identifier];
            l && l.process()
        }
        delete b.touches[a.identifier]
    };
    b.eachTouch = function(a, c) {
        a = a.originalEvent;
        for (var b = a.changedTouches.length, h = 0; h < b; h++) c(a.changedTouches[h])
    };
    a.fn.addSwipeEvents = function(a) {
        new b(this);
        a && this.bind("touch", a);
        return this
    }
})(jQuery);
var goog = goog || {};
goog.DEBUG = !1;
goog.inherits = function(a, c) {
    function b() {}
    b.prototype = c.prototype;
    a.superClass_ = c.prototype;
    a.prototype = new b;
    a.prototype.constructor = a
};
goog.userAgent || (goog.userAgent = function() {
    var a = "";
    "undefined" !== typeof navigator && navigator && "string" == typeof navigator.userAgent && (a = navigator.userAgent);
    var c = 0 == a.indexOf("Opera");
    return {
        jscript: {
            HAS_JSCRIPT: "ScriptEngine" in this
        },
        OPERA: c,
        IE: !c && -1 != a.indexOf("MSIE"),
        WEBKIT: !c && -1 != a.indexOf("WebKit")
    }
}());
goog.asserts || (goog.asserts = {
    assert: function(a) {
        if (!a) throw Error("Assertion error");
    },
    fail: function(a) {}
});
goog.dom || (goog.dom = {}, goog.dom.DomHelper = function(a) {
    this.document_ = a || document
}, goog.dom.DomHelper.prototype.getDocument = function() {
    return this.document_
}, goog.dom.DomHelper.prototype.createElement = function(a) {
    return this.document_.createElement(a)
}, goog.dom.DomHelper.prototype.createDocumentFragment = function() {
    return this.document_.createDocumentFragment()
});
goog.format || (goog.format = {
    insertWordBreaks: function(a, c) {
        a = String(a);
        for (var b = [], d = 0, k = !1, l = !1, h = 0, e = 0, g = 0, f = a.length; g < f; ++g) {
            var p = a.charCodeAt(g);
            h >= c && 32 != p && (b[d++] = a.substring(e, g), e = g, b[d++] = goog.format.WORD_BREAK, h = 0);
            if (k) 62 == p && (k = !1);
            else if (l) switch (p) {
                case 59:
                    l = !1;
                    ++h;
                    break;
                case 60:
                    l = !1;
                    k = !0;
                    break;
                case 32:
                    l = !1, h = 0
            } else switch (p) {
                case 60:
                    k = !0;
                    break;
                case 38:
                    l = !0;
                    break;
                case 32:
                    h = 0;
                    break;
                default:
                    ++h
            }
        }
        b[d++] = a.substring(e);
        return b.join("")
    },
    WORD_BREAK: goog.userAgent.WEBKIT ? "\x3cwbr\x3e\x3c/wbr\x3e" : goog.userAgent.OPERA ? "\x26shy;" : "\x3cwbr\x3e"
});
goog.i18n || (goog.i18n = {
    bidi: {
        detectRtlDirectionality: function(a, c) {
            a = soyshim.$$bidiStripHtmlIfNecessary_(a, c);
            return soyshim.$$bidiRtlWordRatio_(a) > soyshim.$$bidiRtlDetectionThreshold_
        }
    }
});
goog.i18n.bidi.Dir = {
    RTL: -1,
    UNKNOWN: 0,
    LTR: 1
};
goog.i18n.bidi.toDir = function(a) {
    return "number" == typeof a ? 0 < a ? goog.i18n.bidi.Dir.LTR : 0 > a ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.UNKNOWN : a ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR
};
goog.i18n.BidiFormatter = function(a) {
    this.dir_ = goog.i18n.bidi.toDir(a)
};
goog.i18n.BidiFormatter.prototype.dirAttr = function(a, c) {
    var b = soy.$$bidiTextDir(a, c);
    return b && b != this.dir_ ? 0 > b ? 'dir\x3d"rtl"' : 'dir\x3d"ltr"' : ""
};
goog.i18n.BidiFormatter.prototype.endEdge = function() {
    return 0 > this.dir_ ? "left" : "right"
};
goog.i18n.BidiFormatter.prototype.mark = function() {
    return 0 < this.dir_ ? "\u200e" : 0 > this.dir_ ? "\u200f" : ""
};
goog.i18n.BidiFormatter.prototype.markAfter = function(a, c) {
    var b = soy.$$bidiTextDir(a, c);
    return soyshim.$$bidiMarkAfterKnownDir_(this.dir_, b, a, c)
};
goog.i18n.BidiFormatter.prototype.spanWrap = function(a, c) {
    a = String(a);
    var b = soy.$$bidiTextDir(a, !0),
        d = soyshim.$$bidiMarkAfterKnownDir_(this.dir_, b, a, !0);
    0 < b && 0 >= this.dir_ ? a = '\x3cspan dir\x3d"ltr"\x3e' + a + "\x3c/span\x3e" : 0 > b && 0 <= this.dir_ && (a = '\x3cspan dir\x3d"rtl"\x3e' + a + "\x3c/span\x3e");
    return a + d
};
goog.i18n.BidiFormatter.prototype.startEdge = function() {
    return 0 > this.dir_ ? "right" : "left"
};
goog.i18n.BidiFormatter.prototype.unicodeWrap = function(a, c) {
    a = String(a);
    var b = soy.$$bidiTextDir(a, !0),
        d = soyshim.$$bidiMarkAfterKnownDir_(this.dir_, b, a, !0);
    0 < b && 0 >= this.dir_ ? a = "\u202a" + a + "\u202c" : 0 > b && 0 <= this.dir_ && (a = "\u202b" + a + "\u202c");
    return a + d
};
goog.string = {
    newLineToBr: function(a, c) {
        a = String(a);
        return goog.string.NEWLINE_TO_BR_RE_.test(a) ? a.replace(/(\r\n|\r|\n)/g, c ? "\x3cbr /\x3e" : "\x3cbr\x3e") : a
    },
    urlEncode: encodeURIComponent,
    NEWLINE_TO_BR_RE_: /[\r\n]/
};
goog.string.StringBuffer = function(a, c) {
    this.buffer_ = goog.userAgent.jscript.HAS_JSCRIPT ? [] : "";
    null != a && this.append.apply(this, arguments)
};
goog.string.StringBuffer.prototype.bufferLength_ = 0;
goog.string.StringBuffer.prototype.append = function(a, c, b) {
    if (goog.userAgent.jscript.HAS_JSCRIPT)
        if (null == c) this.buffer_[this.bufferLength_++] = a;
        else {
            var d = this.buffer_;
            d.push.apply(d, arguments);
            this.bufferLength_ = this.buffer_.length
        }
    else if (this.buffer_ += a, null != c)
        for (d = 1; d < arguments.length; d++) this.buffer_ += arguments[d];
    return this
};
goog.string.StringBuffer.prototype.clear = function() {
    goog.userAgent.jscript.HAS_JSCRIPT ? this.bufferLength_ = this.buffer_.length = 0 : this.buffer_ = ""
};
goog.string.StringBuffer.prototype.toString = function() {
    if (goog.userAgent.jscript.HAS_JSCRIPT) {
        var a = this.buffer_.join("");
        this.clear();
        a && this.append(a);
        return a
    }
    return this.buffer_
};
goog.soy || (goog.soy = {
    renderAsElement: function(a, c, b, d) {
        return soyshim.$$renderWithWrapper_(a, c, d, !0, b)
    },
    renderAsFragment: function(a, c, b, d) {
        return soyshim.$$renderWithWrapper_(a, c, d, !1, b)
    },
    renderElement: function(a, c, b, d) {
        a.innerHTML = c(b, null, d)
    },
    data: {}
});
goog.soy.data.SanitizedContentKind = {
    HTML: {},
    JS: goog.DEBUG ? {
        sanitizedContentJsStrChars: !0
    } : {},
    JS_STR_CHARS: {},
    URI: {},
    ATTRIBUTES: goog.DEBUG ? {
        sanitizedContentHtmlAttribute: !0
    } : {},
    CSS: {},
    TEXT: {}
};
goog.soy.data.SanitizedContent = function() {
    throw Error("Do not instantiate directly");
};
goog.soy.data.SanitizedContent.prototype.toString = function() {
    return this.content
};
var soy = {
        esc: {}
    },
    soydata = {
        VERY_UNSAFE: {}
    },
    soyshim = {
        $$DEFAULT_TEMPLATE_DATA_: {},
        $$renderWithWrapper_: function(a, c, b, d, k) {
            var l = b || document;
            b = l.createElement("div");
            b.innerHTML = a(c || soyshim.$$DEFAULT_TEMPLATE_DATA_, void 0, k);
            if (1 == b.childNodes.length && (a = b.firstChild, !d || 1 == a.nodeType)) return a;
            if (d) return b;
            for (d = l.createDocumentFragment(); b.firstChild;) d.appendChild(b.firstChild);
            return d
        },
        $$bidiMarkAfterKnownDir_: function(a, c, b, d) {
            return 0 < a && (0 > c || soyshim.$$bidiIsRtlExitText_(b, d)) ? "\u200e" : 0 > a &&
                (0 < c || soyshim.$$bidiIsLtrExitText_(b, d)) ? "\u200f" : ""
        },
        $$bidiStripHtmlIfNecessary_: function(a, c) {
            return c ? a.replace(soyshim.$$BIDI_HTML_SKIP_RE_, " ") : a
        },
        $$BIDI_HTML_SKIP_RE_: /<[^>]*>|&[^;]+;/g,
        $$bidiLtrChars_: "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff",
        $$bidiNeutralChars_: "\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff",
        $$bidiRtlChars_: "\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc"
    };
soyshim.$$bidiRtlDirCheckRe_ = new RegExp("^[^" + soyshim.$$bidiLtrChars_ + "]*[" + soyshim.$$bidiRtlChars_ + "]");
soyshim.$$bidiNeutralDirCheckRe_ = new RegExp("^[" + soyshim.$$bidiNeutralChars_ + "]*$|^http://");
soyshim.$$bidiIsRtlText_ = function(a) {
    return soyshim.$$bidiRtlDirCheckRe_.test(a)
};
soyshim.$$bidiIsNeutralText_ = function(a) {
    return soyshim.$$bidiNeutralDirCheckRe_.test(a)
};
soyshim.$$bidiRtlDetectionThreshold_ = .4;
soyshim.$$bidiRtlWordRatio_ = function(a) {
    var c = 0,
        b = 0;
    a = a.split(" ");
    for (var d = 0; d < a.length; d++) soyshim.$$bidiIsRtlText_(a[d]) ? (c++, b++) : soyshim.$$bidiIsNeutralText_(a[d]) || b++;
    return 0 == b ? 0 : c / b
};
soyshim.$$bidiLtrExitDirCheckRe_ = new RegExp("[" + soyshim.$$bidiLtrChars_ + "][^" + soyshim.$$bidiRtlChars_ + "]*$");
soyshim.$$bidiRtlExitDirCheckRe_ = new RegExp("[" + soyshim.$$bidiRtlChars_ + "][^" + soyshim.$$bidiLtrChars_ + "]*$");
soyshim.$$bidiIsLtrExitText_ = function(a, c) {
    a = soyshim.$$bidiStripHtmlIfNecessary_(a, c);
    return soyshim.$$bidiLtrExitDirCheckRe_.test(a)
};
soyshim.$$bidiIsRtlExitText_ = function(a, c) {
    a = soyshim.$$bidiStripHtmlIfNecessary_(a, c);
    return soyshim.$$bidiRtlExitDirCheckRe_.test(a)
};
soy.StringBuilder = goog.string.StringBuffer;
soydata.SanitizedContentKind = goog.soy.data.SanitizedContentKind;
soydata.SanitizedHtml = function() {
    goog.soy.data.SanitizedContent.call(this)
};
goog.inherits(soydata.SanitizedHtml, goog.soy.data.SanitizedContent);
soydata.SanitizedHtml.prototype.contentKind = soydata.SanitizedContentKind.HTML;
soydata.SanitizedJs = function() {
    goog.soy.data.SanitizedContent.call(this)
};
goog.inherits(soydata.SanitizedJs, goog.soy.data.SanitizedContent);
soydata.SanitizedJs.prototype.contentKind = soydata.SanitizedContentKind.JS;
soydata.SanitizedJsStrChars = function() {
    goog.soy.data.SanitizedContent.call(this)
};
goog.inherits(soydata.SanitizedJsStrChars, goog.soy.data.SanitizedContent);
soydata.SanitizedJsStrChars.prototype.contentKind = soydata.SanitizedContentKind.JS_STR_CHARS;
soydata.SanitizedUri = function() {
    goog.soy.data.SanitizedContent.call(this)
};
goog.inherits(soydata.SanitizedUri, goog.soy.data.SanitizedContent);
soydata.SanitizedUri.prototype.contentKind = soydata.SanitizedContentKind.URI;
soydata.SanitizedHtmlAttribute = function() {
    goog.soy.data.SanitizedContent.call(this)
};
goog.inherits(soydata.SanitizedHtmlAttribute, goog.soy.data.SanitizedContent);
soydata.SanitizedHtmlAttribute.prototype.contentKind = soydata.SanitizedContentKind.ATTRIBUTES;
soydata.SanitizedCss = function() {
    goog.soy.data.SanitizedContent.call(this)
};
goog.inherits(soydata.SanitizedCss, goog.soy.data.SanitizedContent);
soydata.SanitizedCss.prototype.contentKind = soydata.SanitizedContentKind.CSS;
soydata.UnsanitizedText = function(a) {
    this.content = String(a)
};
goog.inherits(soydata.UnsanitizedText, goog.soy.data.SanitizedContent);
soydata.UnsanitizedText.prototype.contentKind = soydata.SanitizedContentKind.TEXT;
soydata.$$makeSanitizedContentFactory_ = function(a) {
    function c() {}
    c.prototype = a.prototype;
    return function(a) {
        var d = new c;
        d.content = String(a);
        return d
    }
};
soydata.markUnsanitizedText = function(a) {
    return new soydata.UnsanitizedText(a)
};
soydata.VERY_UNSAFE.ordainSanitizedHtml = soydata.$$makeSanitizedContentFactory_(soydata.SanitizedHtml);
soydata.VERY_UNSAFE.ordainSanitizedJs = soydata.$$makeSanitizedContentFactory_(soydata.SanitizedJs);
soydata.VERY_UNSAFE.ordainSanitizedJsStrChars = soydata.$$makeSanitizedContentFactory_(soydata.SanitizedJsStrChars);
soydata.VERY_UNSAFE.ordainSanitizedUri = soydata.$$makeSanitizedContentFactory_(soydata.SanitizedUri);
soydata.VERY_UNSAFE.ordainSanitizedHtmlAttribute = soydata.$$makeSanitizedContentFactory_(soydata.SanitizedHtmlAttribute);
soydata.VERY_UNSAFE.ordainSanitizedCss = soydata.$$makeSanitizedContentFactory_(soydata.SanitizedCss);
soy.renderElement = goog.soy.renderElement;
soy.renderAsFragment = function(a, c, b, d) {
    return goog.soy.renderAsFragment(a, c, d, new goog.dom.DomHelper(b))
};
soy.renderAsElement = function(a, c, b, d) {
    return goog.soy.renderAsElement(a, c, d, new goog.dom.DomHelper(b))
};
soy.$$augmentMap = function(a, c) {
    function b() {}
    b.prototype = a;
    var d = new b,
        k;
    for (k in c) d[k] = c[k];
    return d
};
soy.$$checkMapKey = function(a) {
    if ("string" != typeof a) throw Error("Map literal's key expression must evaluate to string (encountered type \"" + typeof a + '").');
    return a
};
soy.$$getMapKeys = function(a) {
    var c = [],
        b;
    for (b in a) c.push(b);
    return c
};
soy.$$getDelTemplateId = function(a) {
    return a
};
soy.$$DELEGATE_REGISTRY_PRIORITIES_ = {};
soy.$$DELEGATE_REGISTRY_FUNCTIONS_ = {};
soy.$$registerDelegateFn = function(a, c, b, d) {
    var k = "key_" + a + ":" + c,
        l = soy.$$DELEGATE_REGISTRY_PRIORITIES_[k];
    if (void 0 === l || b > l) soy.$$DELEGATE_REGISTRY_PRIORITIES_[k] = b, soy.$$DELEGATE_REGISTRY_FUNCTIONS_[k] = d;
    else if (b == l) throw Error('Encountered two active delegates with the same priority ("' + a + ":" + c + '").');
};
soy.$$getDelegateFn = function(a, c, b) {
    var d = soy.$$DELEGATE_REGISTRY_FUNCTIONS_["key_" + a + ":" + c];
    d || "" == c || (d = soy.$$DELEGATE_REGISTRY_FUNCTIONS_["key_" + a + ":"]);
    if (d) return d;
    if (b) return soy.$$EMPTY_TEMPLATE_FN_;
    throw Error('Found no active impl for delegate call to "' + a + ":" + c + '" (and not allowemptydefault\x3d"true").');
};
soy.$$EMPTY_TEMPLATE_FN_ = function(a, c, b) {
    return ""
};
soy.$$escapeHtml = function(a) {
    return a && a.contentKind && a.contentKind === goog.soy.data.SanitizedContentKind.HTML ? (goog.asserts.assert(a.constructor === soydata.SanitizedHtml), a.content) : soy.esc.$$escapeHtmlHelper(a)
};
soy.$$cleanHtml = function(a) {
    return a && a.contentKind && a.contentKind === goog.soy.data.SanitizedContentKind.HTML ? (goog.asserts.assert(a.constructor === soydata.SanitizedHtml), a.content) : soy.$$stripHtmlTags(a, soy.esc.$$SAFE_TAG_WHITELIST_)
};
soy.$$escapeHtmlRcdata = function(a) {
    return a && a.contentKind && a.contentKind === goog.soy.data.SanitizedContentKind.HTML ? (goog.asserts.assert(a.constructor === soydata.SanitizedHtml), soy.esc.$$normalizeHtmlHelper(a.content)) : soy.esc.$$escapeHtmlHelper(a)
};
soy.$$HTML5_VOID_ELEMENTS_ = /^<(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\b/;
soy.$$stripHtmlTags = function(a, c) {
    if (!c) return String(a).replace(soy.esc.$$HTML_TAG_REGEX_, "").replace(soy.esc.$$LT_REGEX_, "\x26lt;");
    var b = String(a).replace(/\[/g, "\x26#91;"),
        d = [],
        b = b.replace(soy.esc.$$HTML_TAG_REGEX_, function(a, b) {
            if (b && (b = b.toLowerCase(), c.hasOwnProperty(b) && c[b])) {
                var e = "/" === a.charAt(1) ? "\x3c/" : "\x3c",
                    g = d.length;
                d[g] = e + b + "\x3e";
                return "[" + g + "]"
            }
            return ""
        }),
        b = soy.esc.$$normalizeHtmlHelper(b),
        k = soy.$$balanceTags_(d),
        b = b.replace(/\[(\d+)\]/g, function(a, c) {
            return d[c]
        });
    return b + k
};
soy.$$balanceTags_ = function(a) {
    for (var c = [], b = 0, d = a.length; b < d; ++b) {
        var k = a[b];
        if ("/" === k.charAt(1)) {
            for (var l = c.length - 1; 0 <= l && c[l] != k;) l--;
            0 > l ? a[b] = "" : (a[b] = c.slice(l).reverse().join(""), c.length = l)
        } else soy.$$HTML5_VOID_ELEMENTS_.test(k) || c.push("\x3c/" + k.substring(1))
    }
    return c.reverse().join("")
};
soy.$$escapeHtmlAttribute = function(a) {
    return a && a.contentKind && a.contentKind === goog.soy.data.SanitizedContentKind.HTML ? (goog.asserts.assert(a.constructor === soydata.SanitizedHtml), soy.esc.$$normalizeHtmlHelper(soy.$$stripHtmlTags(a.content))) : soy.esc.$$escapeHtmlHelper(a)
};
soy.$$escapeHtmlAttributeNospace = function(a) {
    return a && a.contentKind && a.contentKind === goog.soy.data.SanitizedContentKind.HTML ? (goog.asserts.assert(a.constructor === soydata.SanitizedHtml), soy.esc.$$normalizeHtmlNospaceHelper(soy.$$stripHtmlTags(a.content))) : soy.esc.$$escapeHtmlNospaceHelper(a)
};
soy.$$filterHtmlAttributes = function(a) {
    return a && a.contentKind === goog.soy.data.SanitizedContentKind.ATTRIBUTES ? (goog.asserts.assert(a.constructor === soydata.SanitizedHtmlAttribute), a.content.replace(/([^"'\s])$/, "$1 ")) : soy.esc.$$filterHtmlAttributesHelper(a)
};
soy.$$filterHtmlElementName = function(a) {
    return soy.esc.$$filterHtmlElementNameHelper(a)
};
soy.$$escapeJs = function(a) {
    return soy.$$escapeJsString(a)
};
soy.$$escapeJsString = function(a) {
    return a && a.contentKind === goog.soy.data.SanitizedContentKind.JS_STR_CHARS ? (goog.asserts.assert(a.constructor === soydata.SanitizedJsStrChars), a.content) : soy.esc.$$escapeJsStringHelper(a)
};
soy.$$escapeJsValue = function(a) {
    if (null == a) return " null ";
    if (a.contentKind == goog.soy.data.SanitizedContentKind.JS) return goog.asserts.assert(a.constructor === soydata.SanitizedJs), a.content;
    switch (typeof a) {
        case "boolean":
        case "number":
            return " " + a + " ";
        default:
            return "'" + soy.esc.$$escapeJsStringHelper(String(a)) + "'"
    }
};
soy.$$escapeJsRegex = function(a) {
    return soy.esc.$$escapeJsRegexHelper(a)
};
soy.$$problematicUriMarks_ = /['()]/g;
soy.$$pctEncode_ = function(a) {
    return "%" + a.charCodeAt(0).toString(16)
};
soy.$$escapeUri = function(a) {
    if (a && a.contentKind === goog.soy.data.SanitizedContentKind.URI) return goog.asserts.assert(a.constructor === soydata.SanitizedUri), soy.$$normalizeUri(a);
    a = soy.esc.$$escapeUriHelper(a);
    soy.$$problematicUriMarks_.lastIndex = 0;
    return soy.$$problematicUriMarks_.test(a) ? a.replace(soy.$$problematicUriMarks_, soy.$$pctEncode_) : a
};
soy.$$normalizeUri = function(a) {
    return soy.esc.$$normalizeUriHelper(a)
};
soy.$$filterNormalizeUri = function(a) {
    return a && a.contentKind == goog.soy.data.SanitizedContentKind.URI ? (goog.asserts.assert(a.constructor === soydata.SanitizedUri), soy.$$normalizeUri(a)) : soy.esc.$$filterNormalizeUriHelper(a)
};
soy.$$escapeCssString = function(a) {
    return soy.esc.$$escapeCssStringHelper(a)
};
soy.$$filterCssValue = function(a) {
    return a && a.contentKind === goog.soy.data.SanitizedContentKind.CSS ? (goog.asserts.assert(a.constructor === soydata.SanitizedCss), a.content) : null == a ? "" : soy.esc.$$filterCssValueHelper(a)
};
soy.$$filterNoAutoescape = function(a) {
    return a && a.contentKind === goog.soy.data.SanitizedContentKind.TEXT ? (goog.asserts.fail("Tainted SanitizedContentKind.TEXT for |noAutoescape: `%s`", [a.content]), "zSoyz") : String(a)
};
soy.$$changeNewlineToBr = function(a) {
    return goog.string.newLineToBr(String(a), !1)
};
soy.$$insertWordBreaks = function(a, c) {
    return goog.format.insertWordBreaks(String(a), c)
};
soy.$$truncate = function(a, c, b) {
    a = String(a);
    if (a.length <= c) return a;
    b && (3 < c ? c -= 3 : b = !1);
    soy.$$isHighSurrogate_(a.charAt(c - 1)) && soy.$$isLowSurrogate_(a.charAt(c)) && (c -= 1);
    a = a.substring(0, c);
    b && (a += "...");
    return a
};
soy.$$isHighSurrogate_ = function(a) {
    return 55296 <= a && 56319 >= a
};
soy.$$isLowSurrogate_ = function(a) {
    return 56320 <= a && 57343 >= a
};
soy.$$bidiFormatterCache_ = {};
soy.$$getBidiFormatterInstance_ = function(a) {
    return soy.$$bidiFormatterCache_[a] || (soy.$$bidiFormatterCache_[a] = new goog.i18n.BidiFormatter(a))
};
soy.$$bidiTextDir = function(a, c) {
    return a ? goog.i18n.bidi.detectRtlDirectionality(a, c) ? -1 : 1 : 0
};
soy.$$bidiDirAttr = function(a, c, b) {
    return soydata.VERY_UNSAFE.ordainSanitizedHtmlAttribute(soy.$$getBidiFormatterInstance_(a).dirAttr(c, b))
};
soy.$$bidiMarkAfter = function(a, c, b) {
    return soy.$$getBidiFormatterInstance_(a).markAfter(c, b)
};
soy.$$bidiSpanWrap = function(a, c) {
    return soy.$$getBidiFormatterInstance_(a).spanWrap(c + "", !0)
};
soy.$$bidiUnicodeWrap = function(a, c) {
    return soy.$$getBidiFormatterInstance_(a).unicodeWrap(c + "", !0)
};
soy.esc.$$escapeUriHelper = function(a) {
    return goog.string.urlEncode(String(a))
};
soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_ = {
    "\x00": "\x26#0;",
    '"': "\x26quot;",
    "\x26": "\x26amp;",
    "'": "\x26#39;",
    "\x3c": "\x26lt;",
    "\x3e": "\x26gt;",
    "\t": "\x26#9;",
    "\n": "\x26#10;",
    "\x0B": "\x26#11;",
    "\f": "\x26#12;",
    "\r": "\x26#13;",
    " ": "\x26#32;",
    "-": "\x26#45;",
    "/": "\x26#47;",
    "\x3d": "\x26#61;",
    "`": "\x26#96;",
    "\u0085": "\x26#133;",
    "\u00a0": "\x26#160;",
    "\u2028": "\x26#8232;",
    "\u2029": "\x26#8233;"
};
soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_ = function(a) {
    return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_[a]
};
soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_ = {
    "\x00": "\\x00",
    "\b": "\\x08",
    "\t": "\\t",
    "\n": "\\n",
    "\x0B": "\\x0b",
    "\f": "\\f",
    "\r": "\\r",
    '"': "\\x22",
    "\x26": "\\x26",
    "'": "\\x27",
    "/": "\\/",
    "\x3c": "\\x3c",
    "\x3d": "\\x3d",
    "\x3e": "\\x3e",
    "\\": "\\\\",
    "\u0085": "\\x85",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
    $: "\\x24",
    "(": "\\x28",
    ")": "\\x29",
    "*": "\\x2a",
    "+": "\\x2b",
    ",": "\\x2c",
    "-": "\\x2d",
    ".": "\\x2e",
    ":": "\\x3a",
    "?": "\\x3f",
    "[": "\\x5b",
    "]": "\\x5d",
    "^": "\\x5e",
    "{": "\\x7b",
    "|": "\\x7c",
    "}": "\\x7d"
};
soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_ = function(a) {
    return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_[a]
};
soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_ = {
    "\x00": "\\0 ",
    "\b": "\\8 ",
    "\t": "\\9 ",
    "\n": "\\a ",
    "\x0B": "\\b ",
    "\f": "\\c ",
    "\r": "\\d ",
    '"': "\\22 ",
    "\x26": "\\26 ",
    "'": "\\27 ",
    "(": "\\28 ",
    ")": "\\29 ",
    "*": "\\2a ",
    "/": "\\2f ",
    ":": "\\3a ",
    ";": "\\3b ",
    "\x3c": "\\3c ",
    "\x3d": "\\3d ",
    "\x3e": "\\3e ",
    "@": "\\40 ",
    "\\": "\\5c ",
    "{": "\\7b ",
    "}": "\\7d ",
    "\u0085": "\\85 ",
    "\u00a0": "\\a0 ",
    "\u2028": "\\2028 ",
    "\u2029": "\\2029 "
};
soy.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_ = function(a) {
    return soy.esc.$$ESCAPE_MAP_FOR_ESCAPE_CSS_STRING_[a]
};
soy.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = {
    "\x00": "%00",
    "\u0001": "%01",
    "\u0002": "%02",
    "\u0003": "%03",
    "\u0004": "%04",
    "\u0005": "%05",
    "\u0006": "%06",
    "\u0007": "%07",
    "\b": "%08",
    "\t": "%09",
    "\n": "%0A",
    "\x0B": "%0B",
    "\f": "%0C",
    "\r": "%0D",
    "\u000e": "%0E",
    "\u000f": "%0F",
    "\u0010": "%10",
    "\u0011": "%11",
    "\u0012": "%12",
    "\u0013": "%13",
    "\u0014": "%14",
    "\u0015": "%15",
    "\u0016": "%16",
    "\u0017": "%17",
    "\u0018": "%18",
    "\u0019": "%19",
    "\u001a": "%1A",
    "\u001b": "%1B",
    "\u001c": "%1C",
    "\u001d": "%1D",
    "\u001e": "%1E",
    "\u001f": "%1F",
    " ": "%20",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "\x3c": "%3C",
    "\x3e": "%3E",
    "\\": "%5C",
    "{": "%7B",
    "}": "%7D",
    "\u007f": "%7F",
    "\u0085": "%C2%85",
    "\u00a0": "%C2%A0",
    "\u2028": "%E2%80%A8",
    "\u2029": "%E2%80%A9",
    "\uff01": "%EF%BC%81",
    "\uff03": "%EF%BC%83",
    "\uff04": "%EF%BC%84",
    "\uff06": "%EF%BC%86",
    "\uff07": "%EF%BC%87",
    "\uff08": "%EF%BC%88",
    "\uff09": "%EF%BC%89",
    "\uff0a": "%EF%BC%8A",
    "\uff0b": "%EF%BC%8B",
    "\uff0c": "%EF%BC%8C",
    "\uff0f": "%EF%BC%8F",
    "\uff1a": "%EF%BC%9A",
    "\uff1b": "%EF%BC%9B",
    "\uff1d": "%EF%BC%9D",
    "\uff1f": "%EF%BC%9F",
    "\uff20": "%EF%BC%A0",
    "\uff3b": "%EF%BC%BB",
    "\uff3d": "%EF%BC%BD"
};
soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = function(a) {
    return soy.esc.$$ESCAPE_MAP_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_[a]
};
soy.esc.$$MATCHER_FOR_ESCAPE_HTML_ = /[\x00\x22\x26\x27\x3c\x3e]/g;
soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_ = /[\x00\x22\x27\x3c\x3e]/g;
soy.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_ = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;
soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_ = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g;
soy.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_ = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g;
soy.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_ = /[\x00\x08-\x0d\x22\x24\x26-\/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\x85\u2028\u2029]/g;
soy.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_ = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;
soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_ = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
soy.esc.$$FILTER_FOR_FILTER_CSS_VALUE_ = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
soy.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_ = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;
soy.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTES_ = /^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i;
soy.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_ = /^(?!script|style|title|textarea|xmp|no)[a-z0-9_$:-]*$/i;
soy.esc.$$escapeHtmlHelper = function(a) {
    return String(a).replace(soy.esc.$$MATCHER_FOR_ESCAPE_HTML_, soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
};
soy.esc.$$normalizeHtmlHelper = function(a) {
    return String(a).replace(soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_, soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
};
soy.esc.$$escapeHtmlNospaceHelper = function(a) {
    return String(a).replace(soy.esc.$$MATCHER_FOR_ESCAPE_HTML_NOSPACE_, soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
};
soy.esc.$$normalizeHtmlNospaceHelper = function(a) {
    return String(a).replace(soy.esc.$$MATCHER_FOR_NORMALIZE_HTML_NOSPACE_, soy.esc.$$REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_)
};
soy.esc.$$escapeJsStringHelper = function(a) {
    return String(a).replace(soy.esc.$$MATCHER_FOR_ESCAPE_JS_STRING_, soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)
};
soy.esc.$$escapeJsRegexHelper = function(a) {
    return String(a).replace(soy.esc.$$MATCHER_FOR_ESCAPE_JS_REGEX_, soy.esc.$$REPLACER_FOR_ESCAPE_JS_STRING__AND__ESCAPE_JS_REGEX_)
};
soy.esc.$$escapeCssStringHelper = function(a) {
    return String(a).replace(soy.esc.$$MATCHER_FOR_ESCAPE_CSS_STRING_, soy.esc.$$REPLACER_FOR_ESCAPE_CSS_STRING_)
};
soy.esc.$$filterCssValueHelper = function(a) {
    a = String(a);
    return soy.esc.$$FILTER_FOR_FILTER_CSS_VALUE_.test(a) ? a : (goog.asserts.fail("Bad value `%s` for |filterCssValue", [a]), "zSoyz")
};
soy.esc.$$normalizeUriHelper = function(a) {
    return String(a).replace(soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_, soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_)
};
soy.esc.$$filterNormalizeUriHelper = function(a) {
    a = String(a);
    return soy.esc.$$FILTER_FOR_FILTER_NORMALIZE_URI_.test(a) ? a.replace(soy.esc.$$MATCHER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_, soy.esc.$$REPLACER_FOR_NORMALIZE_URI__AND__FILTER_NORMALIZE_URI_) : (goog.asserts.fail("Bad value `%s` for |filterNormalizeUri", [a]), "#zSoyz")
};
soy.esc.$$filterHtmlAttributesHelper = function(a) {
    a = String(a);
    return soy.esc.$$FILTER_FOR_FILTER_HTML_ATTRIBUTES_.test(a) ? a : (goog.asserts.fail("Bad value `%s` for |filterHtmlAttributes", [a]), "zSoyz")
};
soy.esc.$$filterHtmlElementNameHelper = function(a) {
    a = String(a);
    return soy.esc.$$FILTER_FOR_FILTER_HTML_ELEMENT_NAME_.test(a) ? a : (goog.asserts.fail("Bad value `%s` for |filterHtmlElementName", [a]), "zSoyz")
};
soy.esc.$$HTML_TAG_REGEX_ = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
soy.esc.$$LT_REGEX_ = /</g;
soy.esc.$$SAFE_TAG_WHITELIST_ = {
    b: 1,
    br: 1,
    em: 1,
    i: 1,
    s: 1,
    sub: 1,
    sup: 1,
    u: 1
};
(function() {
    function a(a, c, b) {
        this.w = c || s.j;
        this.P = b || I;
        this.C = 40;
        this.p = 1;
        this.F = 0;
        this.s = 3;
        this.D = this.q = 0;
        this.M = !1;
        this.B = this.t = "";
        this.r = "-";
        this.u = "";
        this.A = 1;
        this.I = 3;
        this.G = this.J = !1;
        this.v = H;
        if ("number" == typeof a) switch (a) {
            case 1:
                d(this, s.c);
                break;
            case 2:
                d(this, s.o);
                break;
            case 3:
                d(this, s.m);
                break;
            case 4:
                a = s.i;
                c = ["0"];
                b = D[this.w][0] & 7;
                if (0 < b) {
                    c.push(".");
                    for (var f = 0; f < b; f++) c.push("0")
                }
                a = a.replace(/0.00/g, c.join(""));
                d(this, a);
                break;
            case 5:
                k(this, 1);
                break;
            case 6:
                k(this, 2);
                break;
            default:
                throw Error("Unsupported pattern type.");
        } else d(this, a)
    }

    function c(a, c) {
        if (c > a.s) throw Error("Min value must be less than max value");
        if (0 < a.F && 0 < c) throw Error("Can't combine significant digits and minimum fraction digits");
        a.q = c
    }

    function b(a, c) {
        if (a.q > c) throw Error("Min value must be less than max value");
        a.s = c
    }

    function d(a, c) {
        a.R = c.replace(/ /g, "\u00a0");
        var b = [0];
        a.t = f(a, c, b);
        for (var g = b[0], e = -1, h = 0, d = 0, p = 0, k = -1, t = c.length, l = !0; b[0] < t && l; b[0]++) switch (c.charAt(b[0])) {
            case "#":
                0 < d ? p++ : h++;
                0 <= k && 0 > e && k++;
                break;
            case "0":
                if (0 < p) throw Error('Unexpected "0" in pattern "' +
                    c + '"');
                d++;
                0 <= k && 0 > e && k++;
                break;
            case ",":
                k = 0;
                break;
            case ".":
                if (0 <= e) throw Error('Multiple decimal separators in pattern "' + c + '"');
                e = h + d + p;
                break;
            case "E":
                if (a.G) throw Error('Multiple exponential symbols in pattern "' + c + '"');
                a.G = !0;
                a.D = 0;
                for (b[0] + 1 < t && "+" == c.charAt(b[0] + 1) && (b[0]++, a.M = !0); b[0] + 1 < t && "0" == c.charAt(b[0] + 1);) b[0]++, a.D++;
                if (1 > h + d || 1 > a.D) throw Error('Malformed exponential pattern "' + c + '"');
                l = !1;
                break;
            default:
                b[0]--, l = !1
        }
        0 == d && 0 < h && 0 <= e && (d = e, 0 == d && d++, p = h - d, h = d - 1, d = 1);
        if (0 > e && 0 < p || 0 <= e &&
            (e < h || e > h + d) || 0 == k) throw Error('Malformed pattern "' + c + '"');
        p = h + d + p;
        a.s = 0 <= e ? p - e : 0;
        0 <= e && (a.q = h + d - e, 0 > a.q && (a.q = 0));
        a.p = (0 <= e ? e : p) - h;
        a.G && (a.C = h + a.p, 0 == a.s && 0 == a.p && (a.p = 1));
        a.I = Math.max(0, k);
        a.J = 0 == e || e == p;
        g = b[0] - g;
        a.B = f(a, c, b);
        b[0] < c.length && c.charAt(b[0]) == M ? (b[0]++, a.r = f(a, c, b), b[0] += g, a.u = f(a, c, b)) : (a.r = a.t + a.r, a.u += a.B)
    }

    function k(a, f) {
        a.v = f;
        d(a, s.c);
        c(a, 0);
        b(a, 2);
        if (0 < a.q) throw Error("Can't combine significant digits and minimum fraction digits");
        a.F = 2
    }

    function l(a, c) {
        var b = Math.pow(10, a.s),
            f;
        if (0 >= a.F) f = Math.round(c * b);
        else {
            f = c * b;
            var g = a.s;
            if (f) {
                var e = a.F - t(f) - 1;
                e < -g ? (g = Math.pow(10, g), f = Math.round(f / g) * g) : (g = Math.pow(10, e), f = Math.round(f * g) / g)
            }
            f = Math.floor(f)
        }
        g = f;
        isFinite(g) ? (f = Math.floor(g / b), b = Math.floor(g - f * b)) : (f = c, b = 0);
        return {
            K: f,
            Q: b
        }
    }

    function h(a, c, b, f) {
        var g = l(a, c);
        c = Math.pow(10, a.s);
        for (var e = g.K, h = g.Q, d = 0 < a.q || 0 < h, p = "", g = e; 1E20 < g;) p = "0" + p, g = Math.round(g / 10);
        var p = g + p,
            k = s.d,
            t = s.f,
            g = s.b.charCodeAt(0),
            m = p.length;
        if (0 < e || 0 < b) {
            for (e = m; e < b; e++) f.push(String.fromCharCode(g));
            for (e =
                0; e < m; e++) f.push(String.fromCharCode(g + 1 * p.charAt(e))), 1 < m - e && 0 < a.I && 1 == (m - e) % a.I && f.push(t)
        } else d || f.push(String.fromCharCode(g));
        (a.J || d) && f.push(k);
        b = "" + (h + c);
        for (c = b.length;
            "0" == b.charAt(c - 1) && c > a.q + 1;) c--;
        for (e = 1; e < c; e++) f.push(String.fromCharCode(g + 1 * b.charAt(e)))
    }

    function e(a, c, b) {
        b.push(s.e);
        0 > c ? (c = -c, b.push(s.k)) : a.M && b.push(s.n);
        c = "" + c;
        for (var f = s.b, g = c.length; g < a.D; g++) b.push(f);
        b.push(c)
    }

    function g(a) {
        a = a.charCodeAt(0);
        if (48 <= a && 58 > a) return a - 48;
        var c = s.b.charCodeAt(0);
        return c <= a && a <
            c + 10 ? a - c : -1
    }

    function f(a, c, b) {
        for (var f = "", g = !1, e = c.length; b[0] < e; b[0]++) {
            var h = c.charAt(b[0]);
            if ("'" == h) b[0] + 1 < e && "'" == c.charAt(b[0] + 1) ? (b[0]++, f += "'") : g = !g;
            else if (g) f += h;
            else switch (h) {
                case "#":
                case "0":
                case ",":
                case ".":
                case M:
                    return f;
                case "\u00a4":
                    if (b[0] + 1 < e && "\u00a4" == c.charAt(b[0] + 1)) b[0]++, f += a.w;
                    else switch (a.P) {
                        case I:
                            f += D[a.w][1];
                            break;
                        case 2:
                            var h = a.w,
                                d = D[h],
                                f = f + (h == d[1] ? h : h + " " + d[1]);
                            break;
                        case 1:
                            f += D[a.w][2]
                    }
                    break;
                case "%":
                    if (1 != a.A) throw Error("Too many percent/permill");
                    a.A = 100;
                    f += s.g;
                    break;
                case "\u2030":
                    if (1 != a.A) throw Error("Too many percent/permill");
                    a.A = 1E3;
                    f += s.h;
                    break;
                default:
                    f += h
            }
        }
        return f
    }

    function p(a, c) {
        var b = 1 == a.v ? r.O : r.N;
        if (3 > c) return G;
        c = Math.min(14, c);
        b = b[Math.pow(10, c)];
        return b ? (b = b.other) && "0" != b ? (b = /([^0]*)(0+)(.*)/.exec(b)) ? {
            prefix: b[1],
            L: b[3],
            H: c - (b[2].length - 1)
        } : G : G : G
    }

    function t(a) {
        for (var c = 0; 1 <= (a /= 10);) c++;
        return c
    }
    var v = {
            O: {
                1E3: {
                    other: "0K"
                },
                1E4: {
                    other: "00K"
                },
                1E5: {
                    other: "000K"
                },
                1E6: {
                    other: "0M"
                },
                1E7: {
                    other: "00M"
                },
                1E8: {
                    other: "000M"
                },
                1E9: {
                    other: "0B"
                },
                1E10: {
                    other: "00B"
                },
                1E11: {
                    other: "000B"
                },
                1E12: {
                    other: "0T"
                },
                1E13: {
                    other: "00T"
                },
                1E14: {
                    other: "000T"
                }
            },
            N: {
                1E3: {
                    other: "0 thousand"
                },
                1E4: {
                    other: "00 thousand"
                },
                1E5: {
                    other: "000 thousand"
                },
                1E6: {
                    other: "0 million"
                },
                1E7: {
                    other: "00 million"
                },
                1E8: {
                    other: "000 million"
                },
                1E9: {
                    other: "0 billion"
                },
                1E10: {
                    other: "00 billion"
                },
                1E11: {
                    other: "000 billion"
                },
                1E12: {
                    other: "0 trillion"
                },
                1E13: {
                    other: "00 trillion"
                },
                1E14: {
                    other: "000 trillion"
                }
            }
        },
        r = v,
        r = v,
        u = {
            d: ",",
            f: ".",
            g: "%",
            b: "0",
            n: "+",
            k: "-",
            e: "E",
            h: "\u2030",
            a: "\u221e",
            l: "NaN",
            c: "#,##0.###",
            o: "#E0",
            m: "#,##0\u00a0%",
            i: "#,##0.00\u00a0\u00a4",
            j: "EUR"
        },
        q = {
            d: ".",
            f: ",",
            g: "%",
            b: "0",
            n: "+",
            k: "-",
            e: "E",
            h: "\u2030",
            a: "\u221e",
            l: "NaN",
            c: "#,##0.###",
            o: "#E0",
            m: "#,##0%",
            i: "\u00a4#,##0.00;(\u00a4#,##0.00)",
            j: "USD"
        },
        x = {
            d: ",",
            f: ".",
            g: "%",
            b: "0",
            n: "+",
            k: "-",
            e: "E",
            h: "\u2030",
            a: "\u221e",
            l: "NaN",
            c: "#,##0.###",
            o: "#E0",
            m: "#,##0%",
            i: "#,##0.00\u00a0\u00a4",
            j: "EUR"
        },
        z = {
            d: ",",
            f: "\u00a0",
            g: "%",
            b: "0",
            n: "+",
            k: "-",
            e: "E",
            h: "\u2030",
            a: "\u221e",
            l: "NaN",
            c: "#,##0.###",
            o: "#E0",
            m: "#,##0\u00a0%",
            i: "#,##0.00\u00a0\u00a4;(#,##0.00\u00a0\u00a4)",
            j: "EUR"
        },
        A = {
            d: ",",
            f: ".",
            g: "%",
            b: "0",
            n: "+",
            k: "-",
            e: "E",
            h: "\u2030",
            a: "\u221e",
            l: "NaN",
            c: "#,##0.###",
            o: "#E0",
            m: "#,##0%",
            i: "\u00a4#,##0.00",
            j: "IDR"
        },
        y = {
            d: ",",
            f: ".",
            g: "%",
            b: "0",
            n: "+",
            k: "-",
            e: "E",
            h: "\u2030",
            a: "\u221e",
            l: "NaN",
            c: "#,##0.###",
            o: "#E0",
            m: "#,##0%",
            i: "\u00a4\u00a0#,##0.00",
            j: "EUR"
        },
        C = {
            d: ".",
            f: ",",
            g: "%",
            b: "0",
            n: "+",
            k: "-",
            e: "E",
            h: "\u2030",
            a: "\u221e",
            l: "NaN",
            c: "#,##0.###",
            o: "#E0",
            m: "#,##0%",
            i: "\u00a4#,##0.00",
            j: "JPY"
        },
        m = {
            d: ".",
            f: ",",
            g: "%",
            b: "0",
            n: "+",
            k: "-",
            e: "E",
            h: "\u2030",
            a: "\u221e",
            l: "NaN",
            c: "#,##0.###",
            o: "#E0",
            m: "#,##0%",
            i: "\u00a4#,##0.00;(\u00a4#,##0.00)",
            j: "KRW"
        },
        w = {
            d: ",",
            f: ".",
            g: "%",
            b: "0",
            n: "+",
            k: "-",
            e: "E",
            h: "\u2030",
            a: "\u221e",
            l: "NaN",
            c: "#,##0.###",
            o: "#E0",
            m: "#,##0%",
            i: "\u00a4#,##0.00;(\u00a4#,##0.00)",
            j: "BRL"
        },
        B = {
            d: ",",
            f: "\u00a0",
            g: "%",
            b: "0",
            n: "+",
            k: "-",
            e: "E",
            h: "\u2030",
            a: "\u221e",
            l: "\u043d\u0435\u00a0\u0447\u0438\u0441\u043b\u043e",
            c: "#,##0.###",
            o: "#E0",
            m: "#,##0\u00a0%",
            i: "#,##0.00\u00a0\u00a4",
            j: "RUB"
        },
        E = {
            d: ".",
            f: ",",
            g: "%",
            b: "0",
            n: "+",
            k: "-",
            e: "E",
            h: "\u2030",
            a: "\u221e",
            l: "NaN",
            c: "#,##0.###",
            o: "#E0",
            m: "#,##0%",
            i: "\u00a4#,##0.00;(\u00a4#,##0.00)",
            j: "THB"
        },
        F = {
            d: ",",
            f: ".",
            g: "%",
            b: "0",
            n: "+",
            k: "-",
            e: "E",
            h: "\u2030",
            a: "\u221e",
            l: "NaN",
            c: "#,##0.###",
            o: "#E0",
            m: "%#,##0",
            i: "#,##0.00\u00a0\u00a4;(#,##0.00\u00a0\u00a4)",
            j: "TRY"
        },
        s = q,
        s = q,
        D = {
            AED: [2, "dh", "\u062f.\u0625.", "DH"],
            AUD: [2, "$", "AU$"],
            BDT: [2, "\u09f3", "Tk"],
            BRL: [2, "R$", "R$"],
            CAD: [2, "$", "C$"],
            CHF: [2, "CHF", "CHF"],
            CLP: [0, "$", "CL$"],
            CNY: [2, "\u00a5", "RMB\u00a5"],
            COP: [0, "$", "COL$"],
            CRC: [0, "\u20a1", "CR\u20a1"],
            CZK: [2, "K\u010d", "K\u010d"],
            DKK: [18, "kr",
                "kr"
            ],
            DOP: [2, "$", "RD$"],
            EGP: [2, "\u00a3", "LE"],
            EUR: [18, "\u20ac", "\u20ac"],
            GBP: [2, "\u00a3", "GB\u00a3"],
            HKD: [2, "$", "HK$"],
            ILS: [2, "\u20aa", "IL\u20aa"],
            INR: [2, "\u20b9", "Rs"],
            ISK: [0, "kr", "kr"],
            JMD: [2, "$", "JA$"],
            JPY: [0, "\u00a5", "JP\u00a5"],
            KRW: [0, "\u20a9", "KR\u20a9"],
            LKR: [2, "Rs", "SLRs"],
            MNT: [0, "\u20ae", "MN\u20ae"],
            MXN: [2, "$", "Mex$"],
            MYR: [2, "RM", "RM"],
            NOK: [18, "kr", "NOkr"],
            PAB: [2, "B/.", "B/."],
            PEN: [2, "S/.", "S/."],
            PHP: [2, "\u20b1", "Php"],
            PKR: [0, "Rs", "PKRs."],
            RUB: [42, "\u0440\u0443\u0431.", "\u0440\u0443\u0431."],
            SAR: [2, "Rial", "Rial"],
            SEK: [2, "kr", "kr"],
            SGD: [2, "$", "S$"],
            THB: [2, "\u0e3f", "THB"],
            TRY: [2, "TL", "YTL"],
            TWD: [2, "NT$", "NT$"],
            USD: [2, "$", "US$"],
            UYU: [2, "$", "UY$"],
            VND: [0, "\u20ab", "VN\u20ab"],
            YER: [0, "Rial", "Rial"],
            ZAR: [2, "R", "ZAR"]
        },
        I = 0,
        H = 0;
    a.prototype.parse = function(a, c) {
        var b = c || [0];
        if (this.v != H) throw Error("Parsing of compact numbers is unimplemented");
        var f = NaN;
        a = a.replace(/ /g, "\u00a0");
        var e = a.indexOf(this.t, b[0]) == b[0],
            h = a.indexOf(this.r, b[0]) == b[0];
        e && h && (this.t.length > this.r.length ? h = !1 : this.t.length <
            this.r.length && (e = !1));
        e ? b[0] += this.t.length : h && (b[0] += this.r.length);
        if (a.indexOf(s.a, b[0]) == b[0]) b[0] += s.a.length, f = Infinity;
        else {
            var f = a,
                d = !1,
                p = !1,
                k = !1,
                t = 1,
                l = s.d,
                m = s.f,
                v = s.e;
            if (this.v != H) throw Error("Parsing of compact style numbers is not implemented");
            for (var r = ""; b[0] < f.length; b[0]++) {
                var u = f.charAt(b[0]),
                    D = g(u);
                if (0 <= D && 9 >= D) r += D, k = !0;
                else if (u == l.charAt(0)) {
                    if (d || p) break;
                    r += ".";
                    d = !0
                } else if (u == m.charAt(0) && ("\u00a0" != m.charAt(0) || b[0] + 1 < f.length && 0 <= g(f.charAt(b[0] + 1)))) {
                    if (d || p) break
                } else if (u ==
                    v.charAt(0)) {
                    if (p) break;
                    r += "E";
                    p = !0
                } else if ("+" == u || "-" == u) r += u;
                else if (u == s.g.charAt(0)) {
                    if (1 != t) break;
                    t = 100;
                    if (k) {
                        b[0]++;
                        break
                    }
                } else if (u == s.h.charAt(0)) {
                    if (1 != t) break;
                    t = 1E3;
                    if (k) {
                        b[0]++;
                        break
                    }
                } else break
            }
            f = parseFloat(r) / t
        }
        if (e) {
            if (a.indexOf(this.B, b[0]) != b[0]) return NaN;
            b[0] += this.B.length
        } else if (h) {
            if (a.indexOf(this.u, b[0]) != b[0]) return NaN;
            b[0] += this.u.length
        }
        return h ? -f : f
    };
    a.prototype.format = function(a) {
        if (isNaN(a)) return s.l;
        var c = [],
            b;
        b = a;
        if (this.v == H) b = G;
        else {
            b = Math.abs(b);
            var f = p(this,
                1 >= b ? 0 : t(b)).H;
            b = p(this, f + t(l(this, b / Math.pow(10, f)).K))
        }
        a /= Math.pow(10, b.H);
        c.push(b.prefix);
        f = 0 > a || 0 == a && 0 > 1 / a;
        c.push(f ? this.r : this.t);
        if (isFinite(a))
            if (a = a * (f ? -1 : 1) * this.A, this.G)
                if (0 == a) h(this, a, this.p, c), e(this, 0, c);
                else {
                    var g = Math.floor(Math.log(a) / Math.log(10));
                    a /= Math.pow(10, g);
                    var d = this.p;
                    if (1 < this.C && this.C > this.p) {
                        for (; 0 != g % this.C;) a *= 10, g--;
                        d = 1
                    } else 1 > this.p ? (g++, a /= 10) : (g -= this.p - 1, a *= Math.pow(10, this.p - 1));
                    h(this, a, d, c);
                    e(this, g, c)
                }
        else h(this, a, this.p, c);
        else c.push(s.a);
        c.push(f ?
            this.u : this.B);
        c.push(b.L);
        return c.join("")
    };
    var M = ";",
        G = {
            prefix: "",
            L: "",
            H: 0
        };
    window.fourSq.i18n.goog = {};
    (function(f) {
        function g(a) {
            switch (a) {
                case "it":
                    s = y;
                    break;
                case "de":
                    s = u;
                    break;
                case "es":
                    s = x;
                    break;
                case "fr":
                    s = z;
                    break;
                case "ja":
                    s = C;
                    break;
                case "th":
                    s = E;
                    break;
                case "ko":
                    s = m;
                    break;
                case "ru":
                    s = B;
                    break;
                case "pt":
                    s = w;
                    break;
                case "id":
                    s = A;
                    break;
                case "tr":
                    s = F;
                    break;
                default:
                    s = q
            }
        }
        f.formatCurrency = function(f, e, h) {
            g(e);
            e = new a(4, "USD");
            "undefined" != typeof h && null !== h && (c(e, 0), b(e, h), c(e, h));
            return e.format(f)
        };
        f.formatNumber = function(f, e, h) {
            g(e);
            e = new a(1);
            "undefined" != typeof h && null !== h && (c(e, 0), b(e, h), c(e, h));
            return e.format(f)
        };
        f.parseNumber = function(c, b) {
            g(b);
            return (new a(1)).parse(c)
        };
        f.formatPercent = function(f, e, h) {
            g(e);
            e = new a(3);
            "undefined" != typeof h && null !== h && (c(e, 0), b(e, h), c(e, h));
            return e.format(f)
        }
    })(window.fourSq.i18n.goog)
})();
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = function(c, b) {
        return void 0 === b && (b = "undefined" != typeof window ? require("jquery") : require("jquery")(c)), a(b), b
    } : a(jQuery)
}(function(a) {
    var c = function() {
            if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var c = a.fn.select2.amd;
            return function() {
                    if (!c || !c.requirejs) {
                        c ? b = c : c = {};
                        var a, b, h;
                        ! function(c) {
                            function g(a, c) {
                                var b, f, g, e, h, p, d, k, t, l = c && c.split("/"),
                                    v = m.map,
                                    r = v && v["*"] || {};
                                if (a) {
                                    a =
                                        a.split("/");
                                    h = a.length - 1;
                                    m.nodeIdCompat && F.test(a[h]) && (a[h] = a[h].replace(F, ""));
                                    "." === a[0].charAt(0) && l && (b = l.slice(0, l.length - 1), a = b.concat(a));
                                    for (h = 0; h < a.length; h++) "." === (b = a[h]) ? (a.splice(h, 1), h -= 1) : ".." !== b || 0 === h || 1 === h && ".." === a[2] || ".." === a[h - 1] || 0 < h && (a.splice(h - 1, 2), h -= 2);
                                    a = a.join("/")
                                }
                                if ((l || r) && v) {
                                    b = a.split("/");
                                    for (h = b.length; 0 < h; h -= 1) {
                                        if (f = b.slice(0, h).join("/"), l)
                                            for (t = l.length; 0 < t; t -= 1)
                                                if ((g = v[l.slice(0, t).join("/")]) && (g = g[f])) {
                                                    e = g;
                                                    p = h;
                                                    break
                                                } if (e) break;
                                        !d && r && r[f] && (d = r[f], k = h)
                                    }!e &&
                                        d && (e = d, p = k);
                                    e && (b.splice(0, p, e), a = b.join("/"))
                                }
                                return a
                            }

                            function f(a, b) {
                                return function() {
                                    var f = E.call(arguments, 0);
                                    return "string" != typeof f[0] && 1 === f.length && f.push(null), x.apply(c, f.concat([a, b]))
                                }
                            }

                            function p(a) {
                                return function(c) {
                                    return g(c, a)
                                }
                            }

                            function d(a) {
                                return function(c) {
                                    y[a] = c
                                }
                            }

                            function v(a) {
                                if (B.call(C, a)) {
                                    var b = C[a];
                                    delete C[a];
                                    w[a] = !0;
                                    q.apply(c, b)
                                }
                                if (!B.call(y, a) && !B.call(w, a)) throw Error("No " + a);
                                return y[a]
                            }

                            function r(a) {
                                var c, b = a ? a.indexOf("!") : -1;
                                return -1 < b && (c = a.substring(0, b),
                                    a = a.substring(b + 1, a.length)), [c, a]
                            }

                            function u(a) {
                                return function() {
                                    return m && m.config && m.config[a] || {}
                                }
                            }
                            var q, x, z, A, y = {},
                                C = {},
                                m = {},
                                w = {},
                                B = Object.prototype.hasOwnProperty,
                                E = [].slice,
                                F = /\.js$/;
                            z = function(a, c) {
                                var b, f = r(a),
                                    e = f[0],
                                    h = c[1];
                                return a = f[1], e && (e = g(e, h), b = v(e)), e ? a = b && b.normalize ? b.normalize(a, p(h)) : g(a, h) : (a = g(a, h), f = r(a), e = f[0], a = f[1], e && (b = v(e))), {
                                    f: e ? e + "!" + a : a,
                                    n: a,
                                    pr: e,
                                    p: b
                                }
                            };
                            A = {
                                require: function(a) {
                                    return f(a)
                                },
                                exports: function(a) {
                                    var c = y[a];
                                    return void 0 !== c ? c : y[a] = {}
                                },
                                module: function(a) {
                                    return {
                                        id: a,
                                        uri: "",
                                        exports: y[a],
                                        config: u(a)
                                    }
                                }
                            };
                            q = function(a, b, g, h) {
                                var p, k, l, m, n, u, q = [];
                                k = typeof g;
                                if (h = h || a, n = h ? r(h) : [], "undefined" === k || "function" === k) {
                                    b = !b.length && g.length ? ["require", "exports", "module"] : b;
                                    for (m = 0; m < b.length; m += 1)
                                        if (l = z(b[m], n), "require" === (k = l.f)) q[m] = A.require(a);
                                        else if ("exports" === k) q[m] = A.exports(a), u = !0;
                                    else if ("module" === k) p = q[m] = A.module(a);
                                    else if (B.call(y, k) || B.call(C, k) || B.call(w, k)) q[m] = v(k);
                                    else {
                                        if (!l.p) throw Error(a + " missing " + k);
                                        l.p.load(l.n, f(h, !0), d(k), {});
                                        q[m] = y[k]
                                    }
                                    b = g ?
                                        g.apply(y[a], q) : void 0;
                                    a && (p && p.exports !== c && p.exports !== y[a] ? y[a] = p.exports : b === c && u || (y[a] = b))
                                } else a && (y[a] = g)
                            };
                            a = b = x = function(a, b, f, g, h) {
                                if ("string" == typeof a) return A[a] ? A[a](b) : v(z(a, b ? r(b) : []).f);
                                if (!a.splice) {
                                    if (m = a, m.deps && x(m.deps, m.callback), !b) return;
                                    b.splice ? (a = b, b = f, f = null) : a = c
                                }
                                return b = b || function() {}, "function" == typeof f && (f = g, g = h), g ? q(c, a, b, f) : setTimeout(function() {
                                    q(c, a, b, f)
                                }, 4), x
                            };
                            x.config = function(a) {
                                return x(a)
                            };
                            a._defined = y;
                            h = function(a, c, b) {
                                if ("string" != typeof a) throw Error("See almond README: incorrect module build, no module name");
                                c.splice || (b = c, c = []);
                                B.call(y, a) || B.call(C, a) || (C[a] = [a, c, b])
                            };
                            h.amd = {
                                jQuery: !0
                            }
                        }();
                        c.requirejs = a;
                        c.require = b;
                        c.define = h
                    }
                }(), c.define("almond", function() {}), c.define("jquery", [], function() {
                    var c = a || $;
                    return null == c && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), c
                }), c.define("select2/utils", ["jquery"], function(a) {
                    function c(a) {
                        a = a.prototype;
                        var b = [],
                            g;
                        for (g in a) "function" ==
                            typeof a[g] && "constructor" !== g && b.push(g);
                        return b
                    }
                    var b = {
                            Extend: function(a, c) {
                                function b() {
                                    this.constructor = a
                                }
                                var g = {}.hasOwnProperty,
                                    e;
                                for (e in c) g.call(c, e) && (a[e] = c[e]);
                                return b.prototype = c.prototype, a.prototype = new b, a.__super__ = c.prototype, a
                            },
                            Decorate: function(a, b) {
                                function g() {
                                    var c = Array.prototype.unshift,
                                        e = a.prototype.constructor;
                                    0 < b.prototype.constructor.length && (c.call(arguments, a.prototype.constructor), e = b.prototype.constructor);
                                    e.apply(this, arguments)
                                }
                                var e = c(b),
                                    h = c(a);
                                b.displayName =
                                    a.displayName;
                                g.prototype = new function() {
                                    this.constructor = g
                                };
                                for (var d = 0; d < h.length; d++) {
                                    var k = h[d];
                                    g.prototype[k] = a.prototype[k]
                                }
                                h = function(a) {
                                    var c = function() {};
                                    a in g.prototype && (c = g.prototype[a]);
                                    var f = b.prototype[a];
                                    return function() {
                                        return Array.prototype.unshift.call(arguments, c), f.apply(this, arguments)
                                    }
                                };
                                for (d = 0; d < e.length; d++) k = e[d], g.prototype[k] = h(k);
                                return g
                            }
                        },
                        e = function() {
                            this.listeners = {}
                        };
                    e.prototype.on = function(a, c) {
                        this.listeners = this.listeners || {};
                        a in this.listeners ? this.listeners[a].push(c) :
                            this.listeners[a] = [c]
                    };
                    e.prototype.trigger = function(a) {
                        var c = Array.prototype.slice,
                            b = c.call(arguments, 1);
                        this.listeners = this.listeners || {};
                        null == b && (b = []);
                        0 === b.length && b.push({});
                        b[0]._type = a;
                        a in this.listeners && this.invoke(this.listeners[a], c.call(arguments, 1));
                        "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    };
                    e.prototype.invoke = function(a, c) {
                        for (var b = 0, g = a.length; b < g; b++) a[b].apply(this, c)
                    };
                    b.Observable = e;
                    b.generateChars = function(a) {
                        for (var c = "", b = 0; b < a; b++) c += Math.floor(36 * Math.random()).toString(36);
                        return c
                    };
                    b.bind = function(a, c) {
                        return function() {
                            a.apply(c, arguments)
                        }
                    };
                    b._convertData = function(a) {
                        for (var c in a) {
                            var b = c.split("-"),
                                g = a;
                            if (1 !== b.length) {
                                for (var e = 0; e < b.length; e++) {
                                    var h = b[e],
                                        h = h.substring(0, 1).toLowerCase() + h.substring(1);
                                    h in g || (g[h] = {});
                                    e == b.length - 1 && (g[h] = a[c]);
                                    g = g[h]
                                }
                                delete a[c]
                            }
                        }
                        return a
                    };
                    b.hasScroll = function(c, b) {
                        var g = a(b),
                            e = b.style.overflowX,
                            h = b.style.overflowY;
                        return (e !== h || "hidden" !== h && "visible" !== h) && ("scroll" === e || "scroll" === h || g.innerHeight() < b.scrollHeight || g.innerWidth() <
                            b.scrollWidth)
                    };
                    b.escapeMarkup = function(a) {
                        var c = {
                            "\\": "\x26#92;",
                            "\x26": "\x26amp;",
                            "\x3c": "\x26lt;",
                            "\x3e": "\x26gt;",
                            '"': "\x26quot;",
                            "'": "\x26#39;",
                            "/": "\x26#47;"
                        };
                        return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) {
                            return c[a]
                        })
                    };
                    b.appendMany = function(c, b) {
                        if ("1.7" === a.fn.jquery.substr(0, 3)) {
                            var g = a();
                            a.map(b, function(a) {
                                g = g.add(a)
                            });
                            b = g
                        }
                        c.append(b)
                    };
                    b.__cache = {};
                    var g = 0;
                    return b.GetUniqueElementId = function(a) {
                        var c = a.getAttribute("data-select2-id");
                        return null == c && (a.id ? (c =
                            a.id, a.setAttribute("data-select2-id", c)) : (a.setAttribute("data-select2-id", ++g), c = g.toString())), c
                    }, b.StoreData = function(a, c, g) {
                        a = b.GetUniqueElementId(a);
                        b.__cache[a] || (b.__cache[a] = {});
                        b.__cache[a][c] = g
                    }, b.GetData = function(c, g) {
                        var e = b.GetUniqueElementId(c);
                        return g ? b.__cache[e] && null != b.__cache[e][g] ? b.__cache[e][g] : a(c).data(g) : b.__cache[e]
                    }, b.RemoveData = function(a) {
                        a = b.GetUniqueElementId(a);
                        null != b.__cache[a] && delete b.__cache[a]
                    }, b
                }), c.define("select2/results", ["jquery", "./utils"], function(a,
                    c) {
                    function b(a, c, f) {
                        this.$element = a;
                        this.data = f;
                        this.options = c;
                        b.__super__.constructor.call(this)
                    }
                    return c.Extend(b, c.Observable), b.prototype.render = function() {
                            var c = a('\x3cul class\x3d"select2-results__options" role\x3d"tree"\x3e\x3c/ul\x3e');
                            return this.options.get("multiple") && c.attr("aria-multiselectable", "true"), this.$results = c, c
                        }, b.prototype.clear = function() {
                            this.$results.empty()
                        }, b.prototype.displayMessage = function(c) {
                            var b = this.options.get("escapeMarkup");
                            this.clear();
                            this.hideLoading();
                            var f = a('\x3cli role\x3d"treeitem" aria-live\x3d"assertive" class\x3d"select2-results__option"\x3e\x3c/li\x3e'),
                                h = this.options.get("translations").get(c.message);
                            f.append(b(h(c.args)));
                            f[0].className += " select2-results__message";
                            this.$results.append(f)
                        }, b.prototype.hideMessages = function() {
                            this.$results.find(".select2-results__message").remove()
                        }, b.prototype.append = function(a) {
                            this.hideLoading();
                            var c = [];
                            if (null == a.results || 0 === a.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                                message: "noResults"
                            }));
                            a.results = this.sort(a.results);
                            for (var b = 0; b < a.results.length; b++) {
                                var h = this.option(a.results[b]);
                                c.push(h)
                            }
                            this.$results.append(c)
                        }, b.prototype.position = function(a, c) {
                            c.find(".select2-results").append(a)
                        }, b.prototype.sort = function(a) {
                            return this.options.get("sorter")(a)
                        }, b.prototype.highlightFirstItem = function() {
                            var a = this.$results.find(".select2-results__option[aria-selected]"),
                                c = a.filter("[aria-selected\x3dtrue]");
                            0 < c.length ? c.first().trigger("mouseenter") : a.first().trigger("mouseenter");
                            this.ensureHighlightVisible()
                        }, b.prototype.setClasses = function() {
                            var b = this;
                            this.data.current(function(g) {
                                var f = a.map(g, function(a) {
                                    return a.id.toString()
                                });
                                b.$results.find(".select2-results__option[aria-selected]").each(function() {
                                    var b = a(this),
                                        g = c.GetData(this, "data"),
                                        e = "" + g.id;
                                    null != g.element && g.element.selected || null == g.element && -1 < a.inArray(e, f) ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                                })
                            })
                        }, b.prototype.showLoading = function(a) {
                            this.hideLoading();
                            a = {
                                disabled: !0,
                                loading: !0,
                                text: this.options.get("translations").get("searching")(a)
                            };
                            a = this.option(a);
                            a.className += " loading-results";
                            this.$results.prepend(a)
                        }, b.prototype.hideLoading = function() {
                            this.$results.find(".loading-results").remove()
                        }, b.prototype.option = function(b) {
                            var g = document.createElement("li");
                            g.className = "select2-results__option";
                            var f = {
                                role: "treeitem",
                                "aria-selected": "false"
                            };
                            b.disabled && (delete f["aria-selected"], f["aria-disabled"] = "true");
                            null == b.id && delete f["aria-selected"];
                            null != b._resultId && (g.id = b._resultId);
                            b.title && (g.title = b.title);
                            b.children && (f.role = "group", f["aria-label"] = b.text, delete f["aria-selected"]);
                            for (var h in f) g.setAttribute(h, f[h]);
                            if (b.children) {
                                f = a(g);
                                h = document.createElement("strong");
                                h.className = "select2-results__group";
                                a(h);
                                this.template(b, h);
                                for (var d = [], v = 0; v < b.children.length; v++) {
                                    var r = this.option(b.children[v]);
                                    d.push(r)
                                }
                                v = a("\x3cul\x3e\x3c/ul\x3e", {
                                    "class": "select2-results__options select2-results__options--nested"
                                });
                                v.append(d);
                                f.append(h);
                                f.append(v)
                            } else this.template(b,
                                g);
                            return c.StoreData(g, "data", b), g
                        }, b.prototype.bind = function(b, g) {
                            var f = this;
                            this.$results.attr("id", b.id + "-results");
                            b.on("results:all", function(a) {
                                f.clear();
                                f.append(a.data);
                                b.isOpen() && (f.setClasses(), f.highlightFirstItem())
                            });
                            b.on("results:append", function(a) {
                                f.append(a.data);
                                b.isOpen() && f.setClasses()
                            });
                            b.on("query", function(a) {
                                f.hideMessages();
                                f.showLoading(a)
                            });
                            b.on("select", function() {
                                b.isOpen() && (f.setClasses(), f.highlightFirstItem())
                            });
                            b.on("unselect", function() {
                                b.isOpen() && (f.setClasses(),
                                    f.highlightFirstItem())
                            });
                            b.on("open", function() {
                                f.$results.attr("aria-expanded", "true");
                                f.$results.attr("aria-hidden", "false");
                                f.setClasses();
                                f.ensureHighlightVisible()
                            });
                            b.on("close", function() {
                                f.$results.attr("aria-expanded", "false");
                                f.$results.attr("aria-hidden", "true");
                                f.$results.removeAttr("aria-activedescendant")
                            });
                            b.on("results:toggle", function() {
                                var a = f.getHighlightedResults();
                                0 !== a.length && a.trigger("mouseup")
                            });
                            b.on("results:select", function() {
                                var a = f.getHighlightedResults();
                                if (0 !== a.length) {
                                    var b =
                                        c.GetData(a[0], "data");
                                    "true" == a.attr("aria-selected") ? f.trigger("close", {}) : f.trigger("select", {
                                        data: b
                                    })
                                }
                            });
                            b.on("results:previous", function() {
                                var a = f.getHighlightedResults(),
                                    c = f.$results.find("[aria-selected]"),
                                    b = c.index(a);
                                if (0 !== b) {
                                    b -= 1;
                                    0 === a.length && (b = 0);
                                    c = c.eq(b);
                                    c.trigger("mouseenter");
                                    var a = f.$results.offset().top,
                                        c = c.offset().top,
                                        g = f.$results.scrollTop() + (c - a);
                                    0 === b ? f.$results.scrollTop(0) : 0 > c - a && f.$results.scrollTop(g)
                                }
                            });
                            b.on("results:next", function() {
                                var a = f.getHighlightedResults(),
                                    c =
                                    f.$results.find("[aria-selected]"),
                                    a = c.index(a) + 1;
                                if (!(a >= c.length)) {
                                    var b = c.eq(a);
                                    b.trigger("mouseenter");
                                    var c = f.$results.offset().top + f.$results.outerHeight(!1),
                                        b = b.offset().top + b.outerHeight(!1),
                                        g = f.$results.scrollTop() + b - c;
                                    0 === a ? f.$results.scrollTop(0) : b > c && f.$results.scrollTop(g)
                                }
                            });
                            b.on("results:focus", function(a) {
                                a.element.addClass("select2-results__option--highlighted")
                            });
                            b.on("results:message", function(a) {
                                f.displayMessage(a)
                            });
                            a.fn.mousewheel && this.$results.on("mousewheel", function(a) {
                                var c =
                                    f.$results.scrollTop(),
                                    b = f.$results.get(0).scrollHeight - c + a.deltaY,
                                    c = 0 < a.deltaY && 0 >= c - a.deltaY,
                                    b = 0 > a.deltaY && b <= f.$results.height();
                                c ? (f.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : b && (f.$results.scrollTop(f.$results.get(0).scrollHeight - f.$results.height()), a.preventDefault(), a.stopPropagation())
                            });
                            this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) {
                                var g = a(this),
                                    e = c.GetData(this, "data");
                                if ("true" === g.attr("aria-selected")) return void(f.options.get("multiple") ?
                                    f.trigger("unselect", {
                                        originalEvent: b,
                                        data: e
                                    }) : f.trigger("close", {}));
                                f.trigger("select", {
                                    originalEvent: b,
                                    data: e
                                })
                            });
                            this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(b) {
                                b = c.GetData(this, "data");
                                f.getHighlightedResults().removeClass("select2-results__option--highlighted");
                                f.trigger("results:focus", {
                                    data: b,
                                    element: a(this)
                                })
                            })
                        }, b.prototype.getHighlightedResults = function() {
                            return this.$results.find(".select2-results__option--highlighted")
                        }, b.prototype.destroy = function() {
                            this.$results.remove()
                        },
                        b.prototype.ensureHighlightVisible = function() {
                            var a = this.getHighlightedResults();
                            if (0 !== a.length) {
                                var c = this.$results.find("[aria-selected]").index(a),
                                    b = this.$results.offset().top,
                                    h = a.offset().top,
                                    d = this.$results.scrollTop() + (h - b),
                                    b = h - b,
                                    d = d - 2 * a.outerHeight(!1);
                                2 >= c ? this.$results.scrollTop(0) : (b > this.$results.outerHeight() || 0 > b) && this.$results.scrollTop(d)
                            }
                        }, b.prototype.template = function(c, b) {
                            var f = this.options.get("templateResult"),
                                h = this.options.get("escapeMarkup"),
                                f = f(c, b);
                            null == f ? b.style.display =
                                "none" : "string" == typeof f ? b.innerHTML = h(f) : a(b).append(f)
                        }, b
                }), c.define("select2/keys", [], function() {
                    return {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
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
                        DELETE: 46
                    }
                }), c.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(a, c, b) {
                    function e(a, c) {
                        this.$element = a;
                        this.options = c;
                        e.__super__.constructor.call(this)
                    }
                    return c.Extend(e, c.Observable), e.prototype.render = function() {
                        var b = a('\x3cspan class\x3d"select2-selection" role\x3d"combobox"  aria-haspopup\x3d"true" aria-expanded\x3d"false"\x3e\x3c/span\x3e');
                        return this._tabindex = 0, null != c.GetData(this.$element[0], "old-tabindex") ? this._tabindex = c.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b
                    }, e.prototype.bind = function(a, c) {
                        var e = this,
                            d = (a.id, a.id + "-results");
                        this.container = a;
                        this.$selection.on("focus", function(a) {
                            e.trigger("focus", a)
                        });
                        this.$selection.on("blur", function(a) {
                            e._handleBlur(a)
                        });
                        this.$selection.on("keydown", function(a) {
                            e.trigger("keypress", a);
                            a.which === b.SPACE && a.preventDefault()
                        });
                        a.on("results:focus", function(a) {
                            e.$selection.attr("aria-activedescendant", a.data._resultId)
                        });
                        a.on("selection:update", function(a) {
                            e.update(a.data)
                        });
                        a.on("open", function() {
                            e.$selection.attr("aria-expanded", "true");
                            e.$selection.attr("aria-owns", d);
                            e._attachCloseHandler(a)
                        });
                        a.on("close", function() {
                            e.$selection.attr("aria-expanded", "false");
                            e.$selection.removeAttr("aria-activedescendant");
                            e.$selection.removeAttr("aria-owns");
                            e.$selection.focus();
                            e._detachCloseHandler(a)
                        });
                        a.on("enable", function() {
                            e.$selection.attr("tabindex", e._tabindex)
                        });
                        a.on("disable", function() {
                            e.$selection.attr("tabindex", "-1")
                        })
                    }, e.prototype._handleBlur = function(c) {
                        var b = this;
                        window.setTimeout(function() {
                            document.activeElement == b.$selection[0] || a.contains(b.$selection[0], document.activeElement) || b.trigger("blur", c)
                        }, 1)
                    }, e.prototype._attachCloseHandler = function(b) {
                        a(document.body).on("mousedown.select2." + b.id, function(b) {
                            var g = a(b.target).closest(".select2");
                            a(".select2.select2-container--open").each(function() {
                                a(this);
                                this != g[0] && c.GetData(this, "element").select2("close")
                            })
                        })
                    }, e.prototype._detachCloseHandler = function(b) {
                        a(document.body).off("mousedown.select2." + b.id)
                    }, e.prototype.position = function(a, b) {
                        b.find(".selection").append(a)
                    }, e.prototype.destroy = function() {
                        this._detachCloseHandler(this.container)
                    }, e.prototype.update = function(a) {
                        throw Error("The `update` method must be defined in child classes.");
                    }, e
                }), c.define("select2/selection/single", ["jquery",
                    "./base", "../utils", "../keys"
                ], function(a, b, c, e) {
                    function g() {
                        g.__super__.constructor.apply(this, arguments)
                    }
                    return c.Extend(g, b), g.prototype.render = function() {
                        var a = g.__super__.render.call(this);
                        return a.addClass("select2-selection--single"), a.html('\x3cspan class\x3d"select2-selection__rendered"\x3e\x3c/span\x3e\x3cspan class\x3d"select2-selection__arrow" role\x3d"presentation"\x3e\x3cb role\x3d"presentation"\x3e\x3c/b\x3e\x3c/span\x3e'), a
                    }, g.prototype.bind = function(a, b) {
                        var c = this;
                        g.__super__.bind.apply(this,
                            arguments);
                        var e = a.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", e).attr("role", "textbox").attr("aria-readonly", "true");
                        this.$selection.attr("aria-labelledby", e);
                        this.$selection.on("mousedown", function(a) {
                            1 === a.which && c.trigger("toggle", {
                                originalEvent: a
                            })
                        });
                        this.$selection.on("focus", function(a) {});
                        this.$selection.on("blur", function(a) {});
                        a.on("focus", function(b) {
                            a.isOpen() || c.$selection.focus()
                        })
                    }, g.prototype.clear = function() {
                        var a = this.$selection.find(".select2-selection__rendered");
                        a.empty();
                        a.removeAttr("title")
                    }, g.prototype.display = function(a, b) {
                        var c = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(c(a, b))
                    }, g.prototype.selectionContainer = function() {
                        return a("\x3cspan\x3e\x3c/span\x3e")
                    }, g.prototype.update = function(a) {
                        if (0 === a.length) return void this.clear();
                        a = a[0];
                        var b = this.$selection.find(".select2-selection__rendered"),
                            c = this.display(a, b);
                        b.empty().append(c);
                        b.attr("title", a.title || a.text)
                    }, g
                }), c.define("select2/selection/multiple", ["jquery",
                    "./base", "../utils"
                ], function(a, b, c) {
                    function e(a, b) {
                        e.__super__.constructor.apply(this, arguments)
                    }
                    return c.Extend(e, b), e.prototype.render = function() {
                            var a = e.__super__.render.call(this);
                            return a.addClass("select2-selection--multiple"), a.html('\x3cul class\x3d"select2-selection__rendered"\x3e\x3c/ul\x3e'), a
                        }, e.prototype.bind = function(b, f) {
                            var d = this;
                            e.__super__.bind.apply(this, arguments);
                            this.$selection.on("click", function(a) {
                                d.trigger("toggle", {
                                    originalEvent: a
                                })
                            });
                            this.$selection.on("click", ".select2-selection__choice__remove",
                                function(b) {
                                    if (!d.options.get("disabled")) {
                                        var f = a(this).parent(),
                                            f = c.GetData(f[0], "data");
                                        d.trigger("unselect", {
                                            originalEvent: b,
                                            data: f
                                        })
                                    }
                                })
                        }, e.prototype.clear = function() {
                            var a = this.$selection.find(".select2-selection__rendered");
                            a.empty();
                            a.removeAttr("title")
                        }, e.prototype.display = function(a, b) {
                            var c = this.options.get("templateSelection");
                            return this.options.get("escapeMarkup")(c(a, b))
                        }, e.prototype.selectionContainer = function() {
                            return a('\x3cli class\x3d"select2-selection__choice"\x3e\x3cspan class\x3d"select2-selection__choice__remove" role\x3d"presentation"\x3e\x26times;\x3c/span\x3e\x3c/li\x3e')
                        },
                        e.prototype.update = function(a) {
                            if (this.clear(), 0 !== a.length) {
                                for (var b = [], e = 0; e < a.length; e++) {
                                    var d = a[e],
                                        k = this.selectionContainer(),
                                        l = this.display(d, k);
                                    k.append(l);
                                    k.attr("title", d.title || d.text);
                                    c.StoreData(k[0], "data", d);
                                    b.push(k)
                                }
                                a = this.$selection.find(".select2-selection__rendered");
                                c.appendMany(a, b)
                            }
                        }, e
                }), c.define("select2/selection/placeholder", ["../utils"], function(a) {
                    function b(a, c, g) {
                        this.placeholder = this.normalizePlaceholder(g.get("placeholder"));
                        a.call(this, c, g)
                    }
                    return b.prototype.normalizePlaceholder =
                        function(a, b) {
                            return "string" == typeof b && (b = {
                                id: "",
                                text: b
                            }), b
                        }, b.prototype.createPlaceholder = function(a, b) {
                            var c = this.selectionContainer();
                            return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c
                        }, b.prototype.update = function(a, b) {
                            var c = 1 == b.length && b[0].id != this.placeholder.id;
                            if (1 < b.length || c) return a.call(this, b);
                            this.clear();
                            c = this.createPlaceholder(this.placeholder);
                            this.$selection.find(".select2-selection__rendered").append(c)
                        }, b
                }),
                c.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function(a, b, c) {
                    function e() {}
                    return e.prototype.bind = function(a, b, c) {
                        var e = this;
                        a.call(this, b, c);
                        null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option.");
                        this.$selection.on("mousedown", ".select2-selection__clear", function(a) {
                            e._handleClear(a)
                        });
                        b.on("keypress", function(a) {
                            e._handleKeyboardClear(a,
                                b)
                        })
                    }, e.prototype._handleClear = function(a, b) {
                        if (!this.options.get("disabled")) {
                            var e = this.$selection.find(".select2-selection__clear");
                            if (0 !== e.length) {
                                b.stopPropagation();
                                var e = c.GetData(e[0], "data"),
                                    d = this.$element.val();
                                this.$element.val(this.placeholder.id);
                                var k = {
                                    data: e
                                };
                                if (this.trigger("clear", k), k.prevented) return void this.$element.val(d);
                                for (var l = 0; l < e.length; l++)
                                    if (k = {
                                            data: e[l]
                                        }, this.trigger("unselect", k), k.prevented) return void this.$element.val(d);
                                this.$element.trigger("change");
                                this.trigger("toggle", {})
                            }
                        }
                    }, e.prototype._handleKeyboardClear = function(a, c, e) {
                        e.isOpen() || c.which != b.DELETE && c.which != b.BACKSPACE || this._handleClear(c)
                    }, e.prototype.update = function(b, f) {
                        if (b.call(this, f), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === f.length)) {
                            var e = a('\x3cspan class\x3d"select2-selection__clear"\x3e\x26times;\x3c/span\x3e');
                            c.StoreData(e[0], "data", f);
                            this.$selection.find(".select2-selection__rendered").prepend(e)
                        }
                    }, e
                }), c.define("select2/selection/search", ["jquery", "../utils",
                    "../keys"
                ], function(a, b, c) {
                    function e(a, b, c) {
                        a.call(this, b, c)
                    }
                    return e.prototype.render = function(b) {
                            var c = a('\x3cli class\x3d"select2-search select2-search--inline"\x3e\x3cinput class\x3d"select2-search__field" type\x3d"search" tabindex\x3d"-1" autocomplete\x3d"off" autocorrect\x3d"off" autocapitalize\x3d"none" spellcheck\x3d"false" role\x3d"textbox" aria-autocomplete\x3d"list" /\x3e\x3c/li\x3e');
                            this.$searchContainer = c;
                            this.$search = c.find("input");
                            b = b.call(this);
                            return this._transferTabIndex(), b
                        },
                        e.prototype.bind = function(a, f, e) {
                            var d = this;
                            a.call(this, f, e);
                            f.on("open", function() {
                                d.$search.trigger("focus")
                            });
                            f.on("close", function() {
                                d.$search.val("");
                                d.$search.removeAttr("aria-activedescendant");
                                d.$search.trigger("focus")
                            });
                            f.on("enable", function() {
                                d.$search.prop("disabled", !1);
                                d._transferTabIndex()
                            });
                            f.on("disable", function() {
                                d.$search.prop("disabled", !0)
                            });
                            f.on("focus", function(a) {
                                d.$search.trigger("focus")
                            });
                            f.on("results:focus", function(a) {
                                d.$search.attr("aria-activedescendant", a.id)
                            });
                            this.$selection.on("focusin", ".select2-search--inline", function(a) {
                                d.trigger("focus", a)
                            });
                            this.$selection.on("focusout", ".select2-search--inline", function(a) {
                                d._handleBlur(a)
                            });
                            this.$selection.on("keydown", ".select2-search--inline", function(a) {
                                if (a.stopPropagation(), d.trigger("keypress", a), d._keyUpPrevented = a.isDefaultPrevented(), a.which === c.BACKSPACE && "" === d.$search.val()) {
                                    var f = d.$searchContainer.prev(".select2-selection__choice");
                                    0 < f.length && (f = b.GetData(f[0], "data"), d.searchRemoveChoice(f), a.preventDefault())
                                }
                            });
                            var k = (a = document.documentMode) && 11 >= a;
                            this.$selection.on("input.searchcheck", ".select2-search--inline", function(a) {
                                if (k) return void d.$selection.off("input.search input.searchcheck");
                                d.$selection.off("keyup.search")
                            });
                            this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) {
                                if (k && "input" === a.type) return void d.$selection.off("input.search input.searchcheck");
                                var b = a.which;
                                b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && d.handleSearch(a)
                            })
                        }, e.prototype._transferTabIndex = function(a) {
                            this.$search.attr("tabindex",
                                this.$selection.attr("tabindex"));
                            this.$selection.attr("tabindex", "-1")
                        }, e.prototype.createPlaceholder = function(a, b) {
                            this.$search.attr("placeholder", b.text)
                        }, e.prototype.update = function(a, b) {
                            var c = this.$search[0] == document.activeElement;
                            this.$search.attr("placeholder", "");
                            a.call(this, b);
                            this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);
                            this.resizeSearch();
                            c && this.$search.focus()
                        }, e.prototype.handleSearch = function() {
                            if (this.resizeSearch(), !this._keyUpPrevented) {
                                var a =
                                    this.$search.val();
                                this.trigger("query", {
                                    term: a
                                })
                            }
                            this._keyUpPrevented = !1
                        }, e.prototype.searchRemoveChoice = function(a, b) {
                            this.trigger("unselect", {
                                data: b
                            });
                            this.$search.val(b.text);
                            this.handleSearch()
                        }, e.prototype.resizeSearch = function() {
                            this.$search.css("width", "25px");
                            var a = "",
                                a = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em";
                            this.$search.css("width", a)
                        }, e
                }), c.define("select2/selection/eventRelay", ["jquery"],
                    function(a) {
                        function b() {}
                        return b.prototype.bind = function(b, c, g) {
                            var f = this,
                                d = "open opening close closing select selecting unselect unselecting clear clearing".split(" "),
                                l = ["opening", "closing", "selecting", "unselecting", "clearing"];
                            b.call(this, c, g);
                            c.on("*", function(b, c) {
                                if (-1 !== a.inArray(b, d)) {
                                    c = c || {};
                                    var e = a.Event("select2:" + b, {
                                        params: c
                                    });
                                    f.$element.trigger(e); - 1 !== a.inArray(b, l) && (c.prevented = e.isDefaultPrevented())
                                }
                            })
                        }, b
                    }), c.define("select2/translation", ["jquery", "require"], function(a, b) {
                    function c(a) {
                        this.dict =
                            a || {}
                    }
                    return c.prototype.all = function() {
                        return this.dict
                    }, c.prototype.get = function(a) {
                        return this.dict[a]
                    }, c.prototype.extend = function(b) {
                        this.dict = a.extend({}, b.all(), this.dict)
                    }, c._cache = {}, c.loadPath = function(a) {
                        if (!(a in c._cache)) {
                            var g = b(a);
                            c._cache[a] = g
                        }
                        return new c(c._cache[a])
                    }, c
                }), c.define("select2/diacritics", [], function() {
                    return {
                        "\u00e2\u2019\u00b6": "A",
                        "\u00ef\u00bc\u00a1": "A",
                        "\u00c3\u20ac": "A",
                        "\u00c3\u0081": "A",
                        "\u00c3\u201a": "A",
                        "\u00e1\u00ba\u00a6": "A",
                        "\u00e1\u00ba\u00a4": "A",
                        "\u00e1\u00ba\u00aa": "A",
                        "\u00e1\u00ba\u00a8": "A",
                        "\u00c3\u0192": "A",
                        "\u00c4\u20ac": "A",
                        "\u00c4\u201a": "A",
                        "\u00e1\u00ba\u00b0": "A",
                        "\u00e1\u00ba\u00ae": "A",
                        "\u00e1\u00ba\u00b4": "A",
                        "\u00e1\u00ba\u00b2": "A",
                        "\u00c8\u00a6": "A",
                        "\u00c7 ": "A",
                        "\u00c3\u201e": "A",
                        "\u00c7\u017e": "A",
                        "\u00e1\u00ba\u00a2": "A",
                        "\u00c3\u2026": "A",
                        "\u00c7\u00ba": "A",
                        "\u00c7\u008d": "A",
                        "\u00c8\u20ac": "A",
                        "\u00c8\u201a": "A",
                        "\u00e1\u00ba ": "A",
                        "\u00e1\u00ba\u00ac": "A",
                        "\u00e1\u00ba\u00b6": "A",
                        "\u00e1\u00b8\u20ac": "A",
                        "\u00c4\u201e": "A",
                        "\u00c8\u00ba": "A",
                        "\u00e2\u00b1\u00af": "A",
                        "\u00ea\u0153\u00b2": "AA",
                        "\u00c3\u2020": "AE",
                        "\u00c7\u00bc": "AE",
                        "\u00c7\u00a2": "AE",
                        "\u00ea\u0153\u00b4": "AO",
                        "\u00ea\u0153\u00b6": "AU",
                        "\u00ea\u0153\u00b8": "AV",
                        "\u00ea\u0153\u00ba": "AV",
                        "\u00ea\u0153\u00bc": "AY",
                        "\u00e2\u2019\u00b7": "B",
                        "\u00ef\u00bc\u00a2": "B",
                        "\u00e1\u00b8\u201a": "B",
                        "\u00e1\u00b8\u201e": "B",
                        "\u00e1\u00b8\u2020": "B",
                        "\u00c9\u0192": "B",
                        "\u00c6\u201a": "B",
                        "\u00c6\u0081": "B",
                        "\u00e2\u2019\u00b8": "C",
                        "\u00ef\u00bc\u00a3": "C",
                        "\u00c4\u2020": "C",
                        "\u00c4\u02c6": "C",
                        "\u00c4\u0160": "C",
                        "\u00c4\u0152": "C",
                        "\u00c3\u2021": "C",
                        "\u00e1\u00b8\u02c6": "C",
                        "\u00c6\u2021": "C",
                        "\u00c8\u00bb": "C",
                        "\u00ea\u0153\u00be": "C",
                        "\u00e2\u2019\u00b9": "D",
                        "\u00ef\u00bc\u00a4": "D",
                        "\u00e1\u00b8\u0160": "D",
                        "\u00c4\u017d": "D",
                        "\u00e1\u00b8\u0152": "D",
                        "\u00e1\u00b8\u0090": "D",
                        "\u00e1\u00b8\u2019": "D",
                        "\u00e1\u00b8\u017d": "D",
                        "\u00c4\u0090": "D",
                        "\u00c6\u2039": "D",
                        "\u00c6\u0160": "D",
                        "\u00c6\u2030": "D",
                        "\u00ea\u009d\u00b9": "D",
                        "\u00c7\u00b1": "DZ",
                        "\u00c7\u201e": "DZ",
                        "\u00c7\u00b2": "Dz",
                        "\u00c7\u2026": "Dz",
                        "\u00e2\u2019\u00ba": "E",
                        "\u00ef\u00bc\u00a5": "E",
                        "\u00c3\u02c6": "E",
                        "\u00c3\u2030": "E",
                        "\u00c3\u0160": "E",
                        "\u00e1\u00bb\u20ac": "E",
                        "\u00e1\u00ba\u00be": "E",
                        "\u00e1\u00bb\u201e": "E",
                        "\u00e1\u00bb\u201a": "E",
                        "\u00e1\u00ba\u00bc": "E",
                        "\u00c4\u2019": "E",
                        "\u00e1\u00b8\u201d": "E",
                        "\u00e1\u00b8\u2013": "E",
                        "\u00c4\u201d": "E",
                        "\u00c4\u2013": "E",
                        "\u00c3\u2039": "E",
                        "\u00e1\u00ba\u00ba": "E",
                        "\u00c4\u0161": "E",
                        "\u00c8\u201e": "E",
                        "\u00c8\u2020": "E",
                        "\u00e1\u00ba\u00b8": "E",
                        "\u00e1\u00bb\u2020": "E",
                        "\u00c8\u00a8": "E",
                        "\u00e1\u00b8\u0153": "E",
                        "\u00c4\u02dc": "E",
                        "\u00e1\u00b8\u02dc": "E",
                        "\u00e1\u00b8\u0161": "E",
                        "\u00c6\u0090": "E",
                        "\u00c6\u017d": "E",
                        "\u00e2\u2019\u00bb": "F",
                        "\u00ef\u00bc\u00a6": "F",
                        "\u00e1\u00b8\u017e": "F",
                        "\u00c6\u2018": "F",
                        "\u00ea\u009d\u00bb": "F",
                        "\u00e2\u2019\u00bc": "G",
                        "\u00ef\u00bc\u00a7": "G",
                        "\u00c7\u00b4": "G",
                        "\u00c4\u0153": "G",
                        "\u00e1\u00b8 ": "G",
                        "\u00c4\u017e": "G",
                        "\u00c4 ": "G",
                        "\u00c7\u00a6": "G",
                        "\u00c4\u00a2": "G",
                        "\u00c7\u00a4": "G",
                        "\u00c6\u201c": "G",
                        "\u00ea\u017e ": "G",
                        "\u00ea\u009d\u00bd": "G",
                        "\u00ea\u009d\u00be": "G",
                        "\u00e2\u2019\u00bd": "H",
                        "\u00ef\u00bc\u00a8": "H",
                        "\u00c4\u00a4": "H",
                        "\u00e1\u00b8\u00a2": "H",
                        "\u00e1\u00b8\u00a6": "H",
                        "\u00c8\u017e": "H",
                        "\u00e1\u00b8\u00a4": "H",
                        "\u00e1\u00b8\u00a8": "H",
                        "\u00e1\u00b8\u00aa": "H",
                        "\u00c4\u00a6": "H",
                        "\u00e2\u00b1\u00a7": "H",
                        "\u00e2\u00b1\u00b5": "H",
                        "\u00ea\u017e\u008d": "H",
                        "\u00e2\u2019\u00be": "I",
                        "\u00ef\u00bc\u00a9": "I",
                        "\u00c3\u0152": "I",
                        "\u00c3\u008d": "I",
                        "\u00c3\u017d": "I",
                        "\u00c4\u00a8": "I",
                        "\u00c4\u00aa": "I",
                        "\u00c4\u00ac": "I",
                        "\u00c4\u00b0": "I",
                        "\u00c3\u008f": "I",
                        "\u00e1\u00b8\u00ae": "I",
                        "\u00e1\u00bb\u02c6": "I",
                        "\u00c7\u008f": "I",
                        "\u00c8\u02c6": "I",
                        "\u00c8\u0160": "I",
                        "\u00e1\u00bb\u0160": "I",
                        "\u00c4\u00ae": "I",
                        "\u00e1\u00b8\u00ac": "I",
                        "\u00c6\u2014": "I",
                        "\u00e2\u2019\u00bf": "J",
                        "\u00ef\u00bc\u00aa": "J",
                        "\u00c4\u00b4": "J",
                        "\u00c9\u02c6": "J",
                        "\u00e2\u201c\u20ac": "K",
                        "\u00ef\u00bc\u00ab": "K",
                        "\u00e1\u00b8\u00b0": "K",
                        "\u00c7\u00a8": "K",
                        "\u00e1\u00b8\u00b2": "K",
                        "\u00c4\u00b6": "K",
                        "\u00e1\u00b8\u00b4": "K",
                        "\u00c6\u02dc": "K",
                        "\u00e2\u00b1\u00a9": "K",
                        "\u00ea\u009d\u20ac": "K",
                        "\u00ea\u009d\u201a": "K",
                        "\u00ea\u009d\u201e": "K",
                        "\u00ea\u017e\u00a2": "K",
                        "\u00e2\u201c\u0081": "L",
                        "\u00ef\u00bc\u00ac": "L",
                        "\u00c4\u00bf": "L",
                        "\u00c4\u00b9": "L",
                        "\u00c4\u00bd": "L",
                        "\u00e1\u00b8\u00b6": "L",
                        "\u00e1\u00b8\u00b8": "L",
                        "\u00c4\u00bb": "L",
                        "\u00e1\u00b8\u00bc": "L",
                        "\u00e1\u00b8\u00ba": "L",
                        "\u00c5\u0081": "L",
                        "\u00c8\u00bd": "L",
                        "\u00e2\u00b1\u00a2": "L",
                        "\u00e2\u00b1 ": "L",
                        "\u00ea\u009d\u02c6": "L",
                        "\u00ea\u009d\u2020": "L",
                        "\u00ea\u017e\u20ac": "L",
                        "\u00c7\u2021": "LJ",
                        "\u00c7\u02c6": "Lj",
                        "\u00e2\u201c\u201a": "M",
                        "\u00ef\u00bc\u00ad": "M",
                        "\u00e1\u00b8\u00be": "M",
                        "\u00e1\u00b9\u20ac": "M",
                        "\u00e1\u00b9\u201a": "M",
                        "\u00e2\u00b1\u00ae": "M",
                        "\u00c6\u0153": "M",
                        "\u00e2\u201c\u0192": "N",
                        "\u00ef\u00bc\u00ae": "N",
                        "\u00c7\u00b8": "N",
                        "\u00c5\u0192": "N",
                        "\u00c3\u2018": "N",
                        "\u00e1\u00b9\u201e": "N",
                        "\u00c5\u2021": "N",
                        "\u00e1\u00b9\u2020": "N",
                        "\u00c5\u2026": "N",
                        "\u00e1\u00b9\u0160": "N",
                        "\u00e1\u00b9\u02c6": "N",
                        "\u00c8 ": "N",
                        "\u00c6\u009d": "N",
                        "\u00ea\u017e\u0090": "N",
                        "\u00ea\u017e\u00a4": "N",
                        "\u00c7\u0160": "NJ",
                        "\u00c7\u2039": "Nj",
                        "\u00e2\u201c\u201e": "O",
                        "\u00ef\u00bc\u00af": "O",
                        "\u00c3\u2019": "O",
                        "\u00c3\u201c": "O",
                        "\u00c3\u201d": "O",
                        "\u00e1\u00bb\u2019": "O",
                        "\u00e1\u00bb\u0090": "O",
                        "\u00e1\u00bb\u2013": "O",
                        "\u00e1\u00bb\u201d": "O",
                        "\u00c3\u2022": "O",
                        "\u00e1\u00b9\u0152": "O",
                        "\u00c8\u00ac": "O",
                        "\u00e1\u00b9\u017d": "O",
                        "\u00c5\u0152": "O",
                        "\u00e1\u00b9\u0090": "O",
                        "\u00e1\u00b9\u2019": "O",
                        "\u00c5\u017d": "O",
                        "\u00c8\u00ae": "O",
                        "\u00c8\u00b0": "O",
                        "\u00c3\u2013": "O",
                        "\u00c8\u00aa": "O",
                        "\u00e1\u00bb\u017d": "O",
                        "\u00c5\u0090": "O",
                        "\u00c7\u2018": "O",
                        "\u00c8\u0152": "O",
                        "\u00c8\u017d": "O",
                        "\u00c6 ": "O",
                        "\u00e1\u00bb\u0153": "O",
                        "\u00e1\u00bb\u0161": "O",
                        "\u00e1\u00bb ": "O",
                        "\u00e1\u00bb\u017e": "O",
                        "\u00e1\u00bb\u00a2": "O",
                        "\u00e1\u00bb\u0152": "O",
                        "\u00e1\u00bb\u02dc": "O",
                        "\u00c7\u00aa": "O",
                        "\u00c7\u00ac": "O",
                        "\u00c3\u02dc": "O",
                        "\u00c7\u00be": "O",
                        "\u00c6\u2020": "O",
                        "\u00c6\u0178": "O",
                        "\u00ea\u009d\u0160": "O",
                        "\u00ea\u009d\u0152": "O",
                        "\u00c6\u00a2": "OI",
                        "\u00ea\u009d\u017d": "OO",
                        "\u00c8\u00a2": "OU",
                        "\u00e2\u201c\u2026": "P",
                        "\u00ef\u00bc\u00b0": "P",
                        "\u00e1\u00b9\u201d": "P",
                        "\u00e1\u00b9\u2013": "P",
                        "\u00c6\u00a4": "P",
                        "\u00e2\u00b1\u00a3": "P",
                        "\u00ea\u009d\u0090": "P",
                        "\u00ea\u009d\u2019": "P",
                        "\u00ea\u009d\u201d": "P",
                        "\u00e2\u201c\u2020": "Q",
                        "\u00ef\u00bc\u00b1": "Q",
                        "\u00ea\u009d\u2013": "Q",
                        "\u00ea\u009d\u02dc": "Q",
                        "\u00c9\u0160": "Q",
                        "\u00e2\u201c\u2021": "R",
                        "\u00ef\u00bc\u00b2": "R",
                        "\u00c5\u201d": "R",
                        "\u00e1\u00b9\u02dc": "R",
                        "\u00c5\u02dc": "R",
                        "\u00c8\u0090": "R",
                        "\u00c8\u2019": "R",
                        "\u00e1\u00b9\u0161": "R",
                        "\u00e1\u00b9\u0153": "R",
                        "\u00c5\u2013": "R",
                        "\u00e1\u00b9\u017e": "R",
                        "\u00c9\u0152": "R",
                        "\u00e2\u00b1\u00a4": "R",
                        "\u00ea\u009d\u0161": "R",
                        "\u00ea\u017e\u00a6": "R",
                        "\u00ea\u017e\u201a": "R",
                        "\u00e2\u201c\u02c6": "S",
                        "\u00ef\u00bc\u00b3": "S",
                        "\u00e1\u00ba\u017e": "S",
                        "\u00c5\u0161": "S",
                        "\u00e1\u00b9\u00a4": "S",
                        "\u00c5\u0153": "S",
                        "\u00e1\u00b9 ": "S",
                        "\u00c5 ": "S",
                        "\u00e1\u00b9\u00a6": "S",
                        "\u00e1\u00b9\u00a2": "S",
                        "\u00e1\u00b9\u00a8": "S",
                        "\u00c8\u02dc": "S",
                        "\u00c5\u017e": "S",
                        "\u00e2\u00b1\u00be": "S",
                        "\u00ea\u017e\u00a8": "S",
                        "\u00ea\u017e\u201e": "S",
                        "\u00e2\u201c\u2030": "T",
                        "\u00ef\u00bc\u00b4": "T",
                        "\u00e1\u00b9\u00aa": "T",
                        "\u00c5\u00a4": "T",
                        "\u00e1\u00b9\u00ac": "T",
                        "\u00c8\u0161": "T",
                        "\u00c5\u00a2": "T",
                        "\u00e1\u00b9\u00b0": "T",
                        "\u00e1\u00b9\u00ae": "T",
                        "\u00c5\u00a6": "T",
                        "\u00c6\u00ac": "T",
                        "\u00c6\u00ae": "T",
                        "\u00c8\u00be": "T",
                        "\u00ea\u017e\u2020": "T",
                        "\u00ea\u0153\u00a8": "TZ",
                        "\u00e2\u201c\u0160": "U",
                        "\u00ef\u00bc\u00b5": "U",
                        "\u00c3\u2122": "U",
                        "\u00c3\u0161": "U",
                        "\u00c3\u203a": "U",
                        "\u00c5\u00a8": "U",
                        "\u00e1\u00b9\u00b8": "U",
                        "\u00c5\u00aa": "U",
                        "\u00e1\u00b9\u00ba": "U",
                        "\u00c5\u00ac": "U",
                        "\u00c3\u0153": "U",
                        "\u00c7\u203a": "U",
                        "\u00c7\u2014": "U",
                        "\u00c7\u2022": "U",
                        "\u00c7\u2122": "U",
                        "\u00e1\u00bb\u00a6": "U",
                        "\u00c5\u00ae": "U",
                        "\u00c5\u00b0": "U",
                        "\u00c7\u201c": "U",
                        "\u00c8\u201d": "U",
                        "\u00c8\u2013": "U",
                        "\u00c6\u00af": "U",
                        "\u00e1\u00bb\u00aa": "U",
                        "\u00e1\u00bb\u00a8": "U",
                        "\u00e1\u00bb\u00ae": "U",
                        "\u00e1\u00bb\u00ac": "U",
                        "\u00e1\u00bb\u00b0": "U",
                        "\u00e1\u00bb\u00a4": "U",
                        "\u00e1\u00b9\u00b2": "U",
                        "\u00c5\u00b2": "U",
                        "\u00e1\u00b9\u00b6": "U",
                        "\u00e1\u00b9\u00b4": "U",
                        "\u00c9\u201e": "U",
                        "\u00e2\u201c\u2039": "V",
                        "\u00ef\u00bc\u00b6": "V",
                        "\u00e1\u00b9\u00bc": "V",
                        "\u00e1\u00b9\u00be": "V",
                        "\u00c6\u00b2": "V",
                        "\u00ea\u009d\u017e": "V",
                        "\u00c9\u2026": "V",
                        "\u00ea\u009d ": "VY",
                        "\u00e2\u201c\u0152": "W",
                        "\u00ef\u00bc\u00b7": "W",
                        "\u00e1\u00ba\u20ac": "W",
                        "\u00e1\u00ba\u201a": "W",
                        "\u00c5\u00b4": "W",
                        "\u00e1\u00ba\u2020": "W",
                        "\u00e1\u00ba\u201e": "W",
                        "\u00e1\u00ba\u02c6": "W",
                        "\u00e2\u00b1\u00b2": "W",
                        "\u00e2\u201c\u008d": "X",
                        "\u00ef\u00bc\u00b8": "X",
                        "\u00e1\u00ba\u0160": "X",
                        "\u00e1\u00ba\u0152": "X",
                        "\u00e2\u201c\u017d": "Y",
                        "\u00ef\u00bc\u00b9": "Y",
                        "\u00e1\u00bb\u00b2": "Y",
                        "\u00c3\u009d": "Y",
                        "\u00c5\u00b6": "Y",
                        "\u00e1\u00bb\u00b8": "Y",
                        "\u00c8\u00b2": "Y",
                        "\u00e1\u00ba\u017d": "Y",
                        "\u00c5\u00b8": "Y",
                        "\u00e1\u00bb\u00b6": "Y",
                        "\u00e1\u00bb\u00b4": "Y",
                        "\u00c6\u00b3": "Y",
                        "\u00c9\u017d": "Y",
                        "\u00e1\u00bb\u00be": "Y",
                        "\u00e2\u201c\u008f": "Z",
                        "\u00ef\u00bc\u00ba": "Z",
                        "\u00c5\u00b9": "Z",
                        "\u00e1\u00ba\u0090": "Z",
                        "\u00c5\u00bb": "Z",
                        "\u00c5\u00bd": "Z",
                        "\u00e1\u00ba\u2019": "Z",
                        "\u00e1\u00ba\u201d": "Z",
                        "\u00c6\u00b5": "Z",
                        "\u00c8\u00a4": "Z",
                        "\u00e2\u00b1\u00bf": "Z",
                        "\u00e2\u00b1\u00ab": "Z",
                        "\u00ea\u009d\u00a2": "Z",
                        "\u00e2\u201c\u0090": "a",
                        "\u00ef\u00bd\u0081": "a",
                        "\u00e1\u00ba\u0161": "a",
                        "\u00c3 ": "a",
                        "\u00c3\u00a1": "a",
                        "\u00c3\u00a2": "a",
                        "\u00e1\u00ba\u00a7": "a",
                        "\u00e1\u00ba\u00a5": "a",
                        "\u00e1\u00ba\u00ab": "a",
                        "\u00e1\u00ba\u00a9": "a",
                        "\u00c3\u00a3": "a",
                        "\u00c4\u0081": "a",
                        "\u00c4\u0192": "a",
                        "\u00e1\u00ba\u00b1": "a",
                        "\u00e1\u00ba\u00af": "a",
                        "\u00e1\u00ba\u00b5": "a",
                        "\u00e1\u00ba\u00b3": "a",
                        "\u00c8\u00a7": "a",
                        "\u00c7\u00a1": "a",
                        "\u00c3\u00a4": "a",
                        "\u00c7\u0178": "a",
                        "\u00e1\u00ba\u00a3": "a",
                        "\u00c3\u00a5": "a",
                        "\u00c7\u00bb": "a",
                        "\u00c7\u017d": "a",
                        "\u00c8\u0081": "a",
                        "\u00c8\u0192": "a",
                        "\u00e1\u00ba\u00a1": "a",
                        "\u00e1\u00ba\u00ad": "a",
                        "\u00e1\u00ba\u00b7": "a",
                        "\u00e1\u00b8\u0081": "a",
                        "\u00c4\u2026": "a",
                        "\u00e2\u00b1\u00a5": "a",
                        "\u00c9\u0090": "a",
                        "\u00ea\u0153\u00b3": "aa",
                        "\u00c3\u00a6": "ae",
                        "\u00c7\u00bd": "ae",
                        "\u00c7\u00a3": "ae",
                        "\u00ea\u0153\u00b5": "ao",
                        "\u00ea\u0153\u00b7": "au",
                        "\u00ea\u0153\u00b9": "av",
                        "\u00ea\u0153\u00bb": "av",
                        "\u00ea\u0153\u00bd": "ay",
                        "\u00e2\u201c\u2018": "b",
                        "\u00ef\u00bd\u201a": "b",
                        "\u00e1\u00b8\u0192": "b",
                        "\u00e1\u00b8\u2026": "b",
                        "\u00e1\u00b8\u2021": "b",
                        "\u00c6\u20ac": "b",
                        "\u00c6\u0192": "b",
                        "\u00c9\u201c": "b",
                        "\u00e2\u201c\u2019": "c",
                        "\u00ef\u00bd\u0192": "c",
                        "\u00c4\u2021": "c",
                        "\u00c4\u2030": "c",
                        "\u00c4\u2039": "c",
                        "\u00c4\u008d": "c",
                        "\u00c3\u00a7": "c",
                        "\u00e1\u00b8\u2030": "c",
                        "\u00c6\u02c6": "c",
                        "\u00c8\u00bc": "c",
                        "\u00ea\u0153\u00bf": "c",
                        "\u00e2\u2020\u201e": "c",
                        "\u00e2\u201c\u201c": "d",
                        "\u00ef\u00bd\u201e": "d",
                        "\u00e1\u00b8\u2039": "d",
                        "\u00c4\u008f": "d",
                        "\u00e1\u00b8\u008d": "d",
                        "\u00e1\u00b8\u2018": "d",
                        "\u00e1\u00b8\u201c": "d",
                        "\u00e1\u00b8\u008f": "d",
                        "\u00c4\u2018": "d",
                        "\u00c6\u0152": "d",
                        "\u00c9\u2013": "d",
                        "\u00c9\u2014": "d",
                        "\u00ea\u009d\u00ba": "d",
                        "\u00c7\u00b3": "dz",
                        "\u00c7\u2020": "dz",
                        "\u00e2\u201c\u201d": "e",
                        "\u00ef\u00bd\u2026": "e",
                        "\u00c3\u00a8": "e",
                        "\u00c3\u00a9": "e",
                        "\u00c3\u00aa": "e",
                        "\u00e1\u00bb\u0081": "e",
                        "\u00e1\u00ba\u00bf": "e",
                        "\u00e1\u00bb\u2026": "e",
                        "\u00e1\u00bb\u0192": "e",
                        "\u00e1\u00ba\u00bd": "e",
                        "\u00c4\u201c": "e",
                        "\u00e1\u00b8\u2022": "e",
                        "\u00e1\u00b8\u2014": "e",
                        "\u00c4\u2022": "e",
                        "\u00c4\u2014": "e",
                        "\u00c3\u00ab": "e",
                        "\u00e1\u00ba\u00bb": "e",
                        "\u00c4\u203a": "e",
                        "\u00c8\u2026": "e",
                        "\u00c8\u2021": "e",
                        "\u00e1\u00ba\u00b9": "e",
                        "\u00e1\u00bb\u2021": "e",
                        "\u00c8\u00a9": "e",
                        "\u00e1\u00b8\u009d": "e",
                        "\u00c4\u2122": "e",
                        "\u00e1\u00b8\u2122": "e",
                        "\u00e1\u00b8\u203a": "e",
                        "\u00c9\u2021": "e",
                        "\u00c9\u203a": "e",
                        "\u00c7\u009d": "e",
                        "\u00e2\u201c\u2022": "f",
                        "\u00ef\u00bd\u2020": "f",
                        "\u00e1\u00b8\u0178": "f",
                        "\u00c6\u2019": "f",
                        "\u00ea\u009d\u00bc": "f",
                        "\u00e2\u201c\u2013": "g",
                        "\u00ef\u00bd\u2021": "g",
                        "\u00c7\u00b5": "g",
                        "\u00c4\u009d": "g",
                        "\u00e1\u00b8\u00a1": "g",
                        "\u00c4\u0178": "g",
                        "\u00c4\u00a1": "g",
                        "\u00c7\u00a7": "g",
                        "\u00c4\u00a3": "g",
                        "\u00c7\u00a5": "g",
                        "\u00c9 ": "g",
                        "\u00ea\u017e\u00a1": "g",
                        "\u00e1\u00b5\u00b9": "g",
                        "\u00ea\u009d\u00bf": "g",
                        "\u00e2\u201c\u2014": "h",
                        "\u00ef\u00bd\u02c6": "h",
                        "\u00c4\u00a5": "h",
                        "\u00e1\u00b8\u00a3": "h",
                        "\u00e1\u00b8\u00a7": "h",
                        "\u00c8\u0178": "h",
                        "\u00e1\u00b8\u00a5": "h",
                        "\u00e1\u00b8\u00a9": "h",
                        "\u00e1\u00b8\u00ab": "h",
                        "\u00e1\u00ba\u2013": "h",
                        "\u00c4\u00a7": "h",
                        "\u00e2\u00b1\u00a8": "h",
                        "\u00e2\u00b1\u00b6": "h",
                        "\u00c9\u00a5": "h",
                        "\u00c6\u2022": "hv",
                        "\u00e2\u201c\u02dc": "i",
                        "\u00ef\u00bd\u2030": "i",
                        "\u00c3\u00ac": "i",
                        "\u00c3\u00ad": "i",
                        "\u00c3\u00ae": "i",
                        "\u00c4\u00a9": "i",
                        "\u00c4\u00ab": "i",
                        "\u00c4\u00ad": "i",
                        "\u00c3\u00af": "i",
                        "\u00e1\u00b8\u00af": "i",
                        "\u00e1\u00bb\u2030": "i",
                        "\u00c7\u0090": "i",
                        "\u00c8\u2030": "i",
                        "\u00c8\u2039": "i",
                        "\u00e1\u00bb\u2039": "i",
                        "\u00c4\u00af": "i",
                        "\u00e1\u00b8\u00ad": "i",
                        "\u00c9\u00a8": "i",
                        "\u00c4\u00b1": "i",
                        "\u00e2\u201c\u2122": "j",
                        "\u00ef\u00bd\u0160": "j",
                        "\u00c4\u00b5": "j",
                        "\u00c7\u00b0": "j",
                        "\u00c9\u2030": "j",
                        "\u00e2\u201c\u0161": "k",
                        "\u00ef\u00bd\u2039": "k",
                        "\u00e1\u00b8\u00b1": "k",
                        "\u00c7\u00a9": "k",
                        "\u00e1\u00b8\u00b3": "k",
                        "\u00c4\u00b7": "k",
                        "\u00e1\u00b8\u00b5": "k",
                        "\u00c6\u2122": "k",
                        "\u00e2\u00b1\u00aa": "k",
                        "\u00ea\u009d\u0081": "k",
                        "\u00ea\u009d\u0192": "k",
                        "\u00ea\u009d\u2026": "k",
                        "\u00ea\u017e\u00a3": "k",
                        "\u00e2\u201c\u203a": "l",
                        "\u00ef\u00bd\u0152": "l",
                        "\u00c5\u20ac": "l",
                        "\u00c4\u00ba": "l",
                        "\u00c4\u00be": "l",
                        "\u00e1\u00b8\u00b7": "l",
                        "\u00e1\u00b8\u00b9": "l",
                        "\u00c4\u00bc": "l",
                        "\u00e1\u00b8\u00bd": "l",
                        "\u00e1\u00b8\u00bb": "l",
                        "\u00c5\u00bf": "l",
                        "\u00c5\u201a": "l",
                        "\u00c6\u0161": "l",
                        "\u00c9\u00ab": "l",
                        "\u00e2\u00b1\u00a1": "l",
                        "\u00ea\u009d\u2030": "l",
                        "\u00ea\u017e\u0081": "l",
                        "\u00ea\u009d\u2021": "l",
                        "\u00c7\u2030": "lj",
                        "\u00e2\u201c\u0153": "m",
                        "\u00ef\u00bd\u008d": "m",
                        "\u00e1\u00b8\u00bf": "m",
                        "\u00e1\u00b9\u0081": "m",
                        "\u00e1\u00b9\u0192": "m",
                        "\u00c9\u00b1": "m",
                        "\u00c9\u00af": "m",
                        "\u00e2\u201c\u009d": "n",
                        "\u00ef\u00bd\u017d": "n",
                        "\u00c7\u00b9": "n",
                        "\u00c5\u201e": "n",
                        "\u00c3\u00b1": "n",
                        "\u00e1\u00b9\u2026": "n",
                        "\u00c5\u02c6": "n",
                        "\u00e1\u00b9\u2021": "n",
                        "\u00c5\u2020": "n",
                        "\u00e1\u00b9\u2039": "n",
                        "\u00e1\u00b9\u2030": "n",
                        "\u00c6\u017e": "n",
                        "\u00c9\u00b2": "n",
                        "\u00c5\u2030": "n",
                        "\u00ea\u017e\u2018": "n",
                        "\u00ea\u017e\u00a5": "n",
                        "\u00c7\u0152": "nj",
                        "\u00e2\u201c\u017e": "o",
                        "\u00ef\u00bd\u008f": "o",
                        "\u00c3\u00b2": "o",
                        "\u00c3\u00b3": "o",
                        "\u00c3\u00b4": "o",
                        "\u00e1\u00bb\u201c": "o",
                        "\u00e1\u00bb\u2018": "o",
                        "\u00e1\u00bb\u2014": "o",
                        "\u00e1\u00bb\u2022": "o",
                        "\u00c3\u00b5": "o",
                        "\u00e1\u00b9\u008d": "o",
                        "\u00c8\u00ad": "o",
                        "\u00e1\u00b9\u008f": "o",
                        "\u00c5\u008d": "o",
                        "\u00e1\u00b9\u2018": "o",
                        "\u00e1\u00b9\u201c": "o",
                        "\u00c5\u008f": "o",
                        "\u00c8\u00af": "o",
                        "\u00c8\u00b1": "o",
                        "\u00c3\u00b6": "o",
                        "\u00c8\u00ab": "o",
                        "\u00e1\u00bb\u008f": "o",
                        "\u00c5\u2018": "o",
                        "\u00c7\u2019": "o",
                        "\u00c8\u008d": "o",
                        "\u00c8\u008f": "o",
                        "\u00c6\u00a1": "o",
                        "\u00e1\u00bb\u009d": "o",
                        "\u00e1\u00bb\u203a": "o",
                        "\u00e1\u00bb\u00a1": "o",
                        "\u00e1\u00bb\u0178": "o",
                        "\u00e1\u00bb\u00a3": "o",
                        "\u00e1\u00bb\u008d": "o",
                        "\u00e1\u00bb\u2122": "o",
                        "\u00c7\u00ab": "o",
                        "\u00c7\u00ad": "o",
                        "\u00c3\u00b8": "o",
                        "\u00c7\u00bf": "o",
                        "\u00c9\u201d": "o",
                        "\u00ea\u009d\u2039": "o",
                        "\u00ea\u009d\u008d": "o",
                        "\u00c9\u00b5": "o",
                        "\u00c6\u00a3": "oi",
                        "\u00c8\u00a3": "ou",
                        "\u00ea\u009d\u008f": "oo",
                        "\u00e2\u201c\u0178": "p",
                        "\u00ef\u00bd\u0090": "p",
                        "\u00e1\u00b9\u2022": "p",
                        "\u00e1\u00b9\u2014": "p",
                        "\u00c6\u00a5": "p",
                        "\u00e1\u00b5\u00bd": "p",
                        "\u00ea\u009d\u2018": "p",
                        "\u00ea\u009d\u201c": "p",
                        "\u00ea\u009d\u2022": "p",
                        "\u00e2\u201c ": "q",
                        "\u00ef\u00bd\u2018": "q",
                        "\u00c9\u2039": "q",
                        "\u00ea\u009d\u2014": "q",
                        "\u00ea\u009d\u2122": "q",
                        "\u00e2\u201c\u00a1": "r",
                        "\u00ef\u00bd\u2019": "r",
                        "\u00c5\u2022": "r",
                        "\u00e1\u00b9\u2122": "r",
                        "\u00c5\u2122": "r",
                        "\u00c8\u2018": "r",
                        "\u00c8\u201c": "r",
                        "\u00e1\u00b9\u203a": "r",
                        "\u00e1\u00b9\u009d": "r",
                        "\u00c5\u2014": "r",
                        "\u00e1\u00b9\u0178": "r",
                        "\u00c9\u008d": "r",
                        "\u00c9\u00bd": "r",
                        "\u00ea\u009d\u203a": "r",
                        "\u00ea\u017e\u00a7": "r",
                        "\u00ea\u017e\u0192": "r",
                        "\u00e2\u201c\u00a2": "s",
                        "\u00ef\u00bd\u201c": "s",
                        "\u00c3\u0178": "s",
                        "\u00c5\u203a": "s",
                        "\u00e1\u00b9\u00a5": "s",
                        "\u00c5\u009d": "s",
                        "\u00e1\u00b9\u00a1": "s",
                        "\u00c5\u00a1": "s",
                        "\u00e1\u00b9\u00a7": "s",
                        "\u00e1\u00b9\u00a3": "s",
                        "\u00e1\u00b9\u00a9": "s",
                        "\u00c8\u2122": "s",
                        "\u00c5\u0178": "s",
                        "\u00c8\u00bf": "s",
                        "\u00ea\u017e\u00a9": "s",
                        "\u00ea\u017e\u2026": "s",
                        "\u00e1\u00ba\u203a": "s",
                        "\u00e2\u201c\u00a3": "t",
                        "\u00ef\u00bd\u201d": "t",
                        "\u00e1\u00b9\u00ab": "t",
                        "\u00e1\u00ba\u2014": "t",
                        "\u00c5\u00a5": "t",
                        "\u00e1\u00b9\u00ad": "t",
                        "\u00c8\u203a": "t",
                        "\u00c5\u00a3": "t",
                        "\u00e1\u00b9\u00b1": "t",
                        "\u00e1\u00b9\u00af": "t",
                        "\u00c5\u00a7": "t",
                        "\u00c6\u00ad": "t",
                        "\u00ca\u02c6": "t",
                        "\u00e2\u00b1\u00a6": "t",
                        "\u00ea\u017e\u2021": "t",
                        "\u00ea\u0153\u00a9": "tz",
                        "\u00e2\u201c\u00a4": "u",
                        "\u00ef\u00bd\u2022": "u",
                        "\u00c3\u00b9": "u",
                        "\u00c3\u00ba": "u",
                        "\u00c3\u00bb": "u",
                        "\u00c5\u00a9": "u",
                        "\u00e1\u00b9\u00b9": "u",
                        "\u00c5\u00ab": "u",
                        "\u00e1\u00b9\u00bb": "u",
                        "\u00c5\u00ad": "u",
                        "\u00c3\u00bc": "u",
                        "\u00c7\u0153": "u",
                        "\u00c7\u02dc": "u",
                        "\u00c7\u2013": "u",
                        "\u00c7\u0161": "u",
                        "\u00e1\u00bb\u00a7": "u",
                        "\u00c5\u00af": "u",
                        "\u00c5\u00b1": "u",
                        "\u00c7\u201d": "u",
                        "\u00c8\u2022": "u",
                        "\u00c8\u2014": "u",
                        "\u00c6\u00b0": "u",
                        "\u00e1\u00bb\u00ab": "u",
                        "\u00e1\u00bb\u00a9": "u",
                        "\u00e1\u00bb\u00af": "u",
                        "\u00e1\u00bb\u00ad": "u",
                        "\u00e1\u00bb\u00b1": "u",
                        "\u00e1\u00bb\u00a5": "u",
                        "\u00e1\u00b9\u00b3": "u",
                        "\u00c5\u00b3": "u",
                        "\u00e1\u00b9\u00b7": "u",
                        "\u00e1\u00b9\u00b5": "u",
                        "\u00ca\u2030": "u",
                        "\u00e2\u201c\u00a5": "v",
                        "\u00ef\u00bd\u2013": "v",
                        "\u00e1\u00b9\u00bd": "v",
                        "\u00e1\u00b9\u00bf": "v",
                        "\u00ca\u2039": "v",
                        "\u00ea\u009d\u0178": "v",
                        "\u00ca\u0152": "v",
                        "\u00ea\u009d\u00a1": "vy",
                        "\u00e2\u201c\u00a6": "w",
                        "\u00ef\u00bd\u2014": "w",
                        "\u00e1\u00ba\u0081": "w",
                        "\u00e1\u00ba\u0192": "w",
                        "\u00c5\u00b5": "w",
                        "\u00e1\u00ba\u2021": "w",
                        "\u00e1\u00ba\u2026": "w",
                        "\u00e1\u00ba\u02dc": "w",
                        "\u00e1\u00ba\u2030": "w",
                        "\u00e2\u00b1\u00b3": "w",
                        "\u00e2\u201c\u00a7": "x",
                        "\u00ef\u00bd\u02dc": "x",
                        "\u00e1\u00ba\u2039": "x",
                        "\u00e1\u00ba\u008d": "x",
                        "\u00e2\u201c\u00a8": "y",
                        "\u00ef\u00bd\u2122": "y",
                        "\u00e1\u00bb\u00b3": "y",
                        "\u00c3\u00bd": "y",
                        "\u00c5\u00b7": "y",
                        "\u00e1\u00bb\u00b9": "y",
                        "\u00c8\u00b3": "y",
                        "\u00e1\u00ba\u008f": "y",
                        "\u00c3\u00bf": "y",
                        "\u00e1\u00bb\u00b7": "y",
                        "\u00e1\u00ba\u2122": "y",
                        "\u00e1\u00bb\u00b5": "y",
                        "\u00c6\u00b4": "y",
                        "\u00c9\u008f": "y",
                        "\u00e1\u00bb\u00bf": "y",
                        "\u00e2\u201c\u00a9": "z",
                        "\u00ef\u00bd\u0161": "z",
                        "\u00c5\u00ba": "z",
                        "\u00e1\u00ba\u2018": "z",
                        "\u00c5\u00bc": "z",
                        "\u00c5\u00be": "z",
                        "\u00e1\u00ba\u201c": "z",
                        "\u00e1\u00ba\u2022": "z",
                        "\u00c6\u00b6": "z",
                        "\u00c8\u00a5": "z",
                        "\u00c9\u20ac": "z",
                        "\u00e2\u00b1\u00ac": "z",
                        "\u00ea\u009d\u00a3": "z",
                        "\u00ce\u2020": "\u00ce\u2018",
                        "\u00ce\u02c6": "\u00ce\u2022",
                        "\u00ce\u2030": "\u00ce\u2014",
                        "\u00ce\u0160": "\u00ce\u2122",
                        "\u00ce\u00aa": "\u00ce\u2122",
                        "\u00ce\u0152": "\u00ce\u0178",
                        "\u00ce\u017d": "\u00ce\u00a5",
                        "\u00ce\u00ab": "\u00ce\u00a5",
                        "\u00ce\u008f": "\u00ce\u00a9",
                        "\u00ce\u00ac": "\u00ce\u00b1",
                        "\u00ce\u00ad": "\u00ce\u00b5",
                        "\u00ce\u00ae": "\u00ce\u00b7",
                        "\u00ce\u00af": "\u00ce\u00b9",
                        "\u00cf\u0160": "\u00ce\u00b9",
                        "\u00ce\u0090": "\u00ce\u00b9",
                        "\u00cf\u0152": "\u00ce\u00bf",
                        "\u00cf\u008d": "\u00cf\u2026",
                        "\u00cf\u2039": "\u00cf\u2026",
                        "\u00ce\u00b0": "\u00cf\u2026",
                        "\u00cf\u2030": "\u00cf\u2030",
                        "\u00cf\u201a": "\u00cf\u0192"
                    }
                }), c.define("select2/data/base", ["../utils"], function(a) {
                    function b(a, c) {
                        b.__super__.constructor.call(this)
                    }
                    return a.Extend(b, a.Observable), b.prototype.current = function(a) {
                        throw Error("The `current` method must be defined in child classes.");
                    }, b.prototype.query = function(a, b) {
                        throw Error("The `query` method must be defined in child classes.");
                    }, b.prototype.bind = function(a, b) {}, b.prototype.destroy = function() {}, b.prototype.generateResultId = function(b, c) {
                        var g = b.id + "-result-";
                        return g += a.generateChars(4), null != c.id ? g += "-" + c.id.toString() : g += "-" + a.generateChars(4), g
                    }, b
                }), c.define("select2/data/select", ["./base", "../utils", "jquery"], function(a, b, c) {
                    function e(a, b) {
                        this.$element = a;
                        this.options = b;
                        e.__super__.constructor.call(this)
                    }
                    return b.Extend(e, a), e.prototype.current = function(a) {
                            var b = [],
                                e = this;
                            this.$element.find(":selected").each(function() {
                                var a =
                                    c(this),
                                    a = e.item(a);
                                b.push(a)
                            });
                            a(b)
                        }, e.prototype.select = function(a) {
                            var b = this;
                            if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
                            this.$element.prop("multiple") ? this.current(function(e) {
                                var d = [];
                                a = [a];
                                a.push.apply(a, e);
                                for (e = 0; e < a.length; e++) {
                                    var k = a[e].id; - 1 === c.inArray(k, d) && d.push(k)
                                }
                                b.$element.val(d);
                                b.$element.trigger("change")
                            }) : (this.$element.val(a.id), this.$element.trigger("change"))
                        }, e.prototype.unselect = function(a) {
                            var b = this;
                            if (this.$element.prop("multiple")) {
                                if (a.selected = !1, c(a.element).is("option")) return a.element.selected = !1, void this.$element.trigger("change");
                                this.current(function(e) {
                                    for (var d = [], k = 0; k < e.length; k++) {
                                        var l = e[k].id;
                                        l !== a.id && -1 === c.inArray(l, d) && d.push(l)
                                    }
                                    b.$element.val(d);
                                    b.$element.trigger("change")
                                })
                            }
                        }, e.prototype.bind = function(a, b) {
                            var c = this;
                            this.container = a;
                            a.on("select", function(a) {
                                c.select(a.data)
                            });
                            a.on("unselect", function(a) {
                                c.unselect(a.data)
                            })
                        }, e.prototype.destroy = function() {
                            this.$element.find("*").each(function() {
                                b.RemoveData(this)
                            })
                        },
                        e.prototype.query = function(a, b) {
                            var e = [],
                                d = this;
                            this.$element.children().each(function() {
                                var b = c(this);
                                if (b.is("option") || b.is("optgroup")) b = d.item(b), b = d.matches(a, b), null !== b && e.push(b)
                            });
                            b({
                                results: e
                            })
                        }, e.prototype.addOptions = function(a) {
                            b.appendMany(this.$element, a)
                        }, e.prototype.option = function(a) {
                            var f;
                            a.children ? (f = document.createElement("optgroup"), f.label = a.text) : (f = document.createElement("option"), void 0 !== f.textContent ? f.textContent = a.text : f.innerText = a.text);
                            void 0 !== a.id && (f.value = a.id);
                            a.disabled && (f.disabled = !0);
                            a.selected && (f.selected = !0);
                            a.title && (f.title = a.title);
                            var e = c(f);
                            a = this._normalizeItem(a);
                            return a.element = f, b.StoreData(f, "data", a), e
                        }, e.prototype.item = function(a) {
                            var f = {};
                            if (null != (f = b.GetData(a[0], "data"))) return f;
                            if (a.is("option")) f = {
                                id: a.val(),
                                text: a.text(),
                                disabled: a.prop("disabled"),
                                selected: a.prop("selected"),
                                title: a.prop("title")
                            };
                            else if (a.is("optgroup")) {
                                for (var f = {
                                        text: a.prop("label"),
                                        children: [],
                                        title: a.prop("title")
                                    }, e = a.children("option"), d = [], k = 0; k < e.length; k++) {
                                    var r =
                                        c(e[k]),
                                        r = this.item(r);
                                    d.push(r)
                                }
                                f.children = d
                            }
                            return f = this._normalizeItem(f), f.element = a[0], b.StoreData(a[0], "data", f), f
                        }, e.prototype._normalizeItem = function(a) {
                            a !== Object(a) && (a = {
                                id: a,
                                text: a
                            });
                            a = c.extend({}, {
                                text: ""
                            }, a);
                            return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, {
                                selected: !1,
                                disabled: !1
                            }, a)
                        }, e.prototype.matches = function(a, b) {
                            return this.options.get("matcher")(a,
                                b)
                        }, e
                }), c.define("select2/data/array", ["./select", "../utils", "jquery"], function(a, b, c) {
                    function e(a, b) {
                        var c = b.get("data") || [];
                        e.__super__.constructor.call(this, a, b);
                        this.addOptions(this.convertToOptions(c))
                    }
                    return b.Extend(e, a), e.prototype.select = function(a) {
                        var b = this.$element.find("option").filter(function(b, c) {
                            return c.value == a.id.toString()
                        });
                        0 === b.length && (b = this.option(a), this.addOptions(b));
                        e.__super__.select.call(this, a)
                    }, e.prototype.convertToOptions = function(a) {
                        function f(a) {
                            return function() {
                                return c(this).val() ==
                                    a.id
                            }
                        }
                        for (var e = this, d = this.$element.find("option"), k = d.map(function() {
                                return e.item(c(this)).id
                            }).get(), r = [], u = 0; u < a.length; u++) {
                            var q = this._normalizeItem(a[u]);
                            if (0 <= c.inArray(q.id, k)) {
                                var x = d.filter(f(q)),
                                    z = this.item(x),
                                    q = c.extend(!0, {}, q, z),
                                    q = this.option(q);
                                x.replaceWith(q)
                            } else x = this.option(q), q.children && (q = this.convertToOptions(q.children), b.appendMany(x, q)), r.push(x)
                        }
                        return r
                    }, e
                }), c.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(a, b, c) {
                    function e(a, b) {
                        this.ajaxOptions =
                            this._applyDefaults(b.get("ajax"));
                        null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults);
                        e.__super__.constructor.call(this, a, b)
                    }
                    return b.Extend(e, a), e.prototype._applyDefaults = function(a) {
                        return c.extend({}, {
                            data: function(a) {
                                return c.extend({}, a, {
                                    q: a.term
                                })
                            },
                            transport: function(a, b, e) {
                                a = c.ajax(a);
                                return a.then(b), a.fail(e), a
                            }
                        }, a, !0)
                    }, e.prototype.processResults = function(a) {
                        return a
                    }, e.prototype.query = function(a, b) {
                        function e() {
                            var l = k.transport(k, function(e) {
                                e =
                                    d.processResults(e, a);
                                d.options.get("debug") && window.console && console.error && (e && e.results && c.isArray(e.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response."));
                                b(e)
                            }, function() {
                                "status" in l && (0 === l.status || "0" === l.status) || d.trigger("results:message", {
                                    message: "errorLoading"
                                })
                            });
                            d._request = l
                        }
                        var d = this;
                        null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var k = c.extend({
                            type: "GET"
                        }, this.ajaxOptions);
                        "function" == typeof k.url && (k.url = k.url.call(this.$element, a));
                        "function" == typeof k.data && (k.data = k.data.call(this.$element, a));
                        this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e()
                    }, e
                }), c.define("select2/data/tags", ["jquery"], function(a) {
                    function b(c, e, d) {
                        var f = d.get("tags"),
                            l = d.get("createTag");
                        void 0 !== l && (this.createTag = l);
                        l = d.get("insertTag");
                        if (void 0 !== l && (this.insertTag = l), c.call(this,
                                e, d), a.isArray(f))
                            for (c = 0; c < f.length; c++) e = this._normalizeItem(f[c]), e = this.option(e), this.$element.append(e)
                    }
                    return b.prototype.query = function(a, b, c) {
                        function f(a, h) {
                            for (var k = a.results, l = 0; l < k.length; l++) {
                                var q = k[l],
                                    x = null != q.children && !f({
                                        results: q.children
                                    }, !0);
                                if ((q.text || "").toUpperCase() === (b.term || "").toUpperCase() || x) return !h && (a.data = k, void c(a))
                            }
                            if (h) return !0;
                            l = d.createTag(b);
                            null != l && (q = d.option(l), q.attr("data-select2-tag", !0), d.addOptions([q]), d.insertTag(k, l));
                            a.results = k;
                            c(a)
                        }
                        var d =
                            this;
                        if (this._removeOldTags(), null == b.term || null != b.page) return void a.call(this, b, c);
                        a.call(this, b, f)
                    }, b.prototype.createTag = function(b, c) {
                        var d = a.trim(c.term);
                        return "" === d ? null : {
                            id: d,
                            text: d
                        }
                    }, b.prototype.insertTag = function(a, b, c) {
                        b.unshift(c)
                    }, b.prototype._removeOldTags = function(b) {
                        this._lastTag;
                        this.$element.find("option[data-select2-tag]").each(function() {
                            this.selected || a(this).remove()
                        })
                    }, b
                }), c.define("select2/data/tokenizer", ["jquery"], function(a) {
                    function b(a, c, d) {
                        var f = d.get("tokenizer");
                        void 0 !== f && (this.tokenizer = f);
                        a.call(this, c, d)
                    }
                    return b.prototype.bind = function(a, b, c) {
                        a.call(this, b, c);
                        this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field")
                    }, b.prototype.query = function(b, c, d) {
                        var f = this;
                        c.term = c.term || "";
                        var l = this.tokenizer(c, this.options, function(b) {
                            var c = f._normalizeItem(b);
                            f.$element.find("option").filter(function() {
                                return a(this).val() === c.id
                            }).length || (b = f.option(c), b.attr("data-select2-tag", !0), f._removeOldTags(), f.addOptions([b]));
                            f.trigger("select", {
                                data: c
                            })
                        });
                        l.term !== c.term && (this.$search.length && (this.$search.val(l.term), this.$search.focus()), c.term = l.term);
                        b.call(this, c, d)
                    }, b.prototype.tokenizer = function(b, c, d, f) {
                        b = d.get("tokenSeparators") || [];
                        d = c.term;
                        for (var l = 0, t = this.createTag || function(a) {
                                return {
                                    id: a.term,
                                    text: a.term
                                }
                            }; l < d.length;)
                            if (-1 !== a.inArray(d[l], b)) {
                                var v = d.substr(0, l),
                                    v = a.extend({}, c, {
                                        term: v
                                    }),
                                    v = t(v);
                                null != v ? (f(v), d = d.substr(l + 1) || "", l = 0) : l++
                            } else l++;
                        return {
                            term: d
                        }
                    }, b
                }), c.define("select2/data/minimumInputLength", [], function() {
                    function a(b,
                        c, e) {
                        this.minimumInputLength = e.get("minimumInputLength");
                        b.call(this, c, e)
                    }
                    return a.prototype.query = function(a, b, c) {
                        if (b.term = b.term || "", b.term.length < this.minimumInputLength) return void this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: b.term,
                                params: b
                            }
                        });
                        a.call(this, b, c)
                    }, a
                }), c.define("select2/data/maximumInputLength", [], function() {
                    function a(b, c, e) {
                        this.maximumInputLength = e.get("maximumInputLength");
                        b.call(this, c, e)
                    }
                    return a.prototype.query = function(a,
                        b, c) {
                        if (b.term = b.term || "", 0 < this.maximumInputLength && b.term.length > this.maximumInputLength) return void this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: b.term,
                                params: b
                            }
                        });
                        a.call(this, b, c)
                    }, a
                }), c.define("select2/data/maximumSelectionLength", [], function() {
                    function a(b, c, e) {
                        this.maximumSelectionLength = e.get("maximumSelectionLength");
                        b.call(this, c, e)
                    }
                    return a.prototype.query = function(a, b, c) {
                        var d = this;
                        this.current(function(f) {
                            f = null != f ? f.length : 0;
                            if (0 <
                                d.maximumSelectionLength && f >= d.maximumSelectionLength) return void d.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: d.maximumSelectionLength
                                }
                            });
                            a.call(d, b, c)
                        })
                    }, a
                }), c.define("select2/dropdown", ["jquery", "./utils"], function(a, b) {
                    function c(a, b) {
                        this.$element = a;
                        this.options = b;
                        c.__super__.constructor.call(this)
                    }
                    return b.Extend(c, b.Observable), c.prototype.render = function() {
                        var b = a('\x3cspan class\x3d"select2-dropdown"\x3e\x3cspan class\x3d"select2-results"\x3e\x3c/span\x3e\x3c/span\x3e');
                        return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b
                    }, c.prototype.bind = function() {}, c.prototype.position = function(a, b) {}, c.prototype.destroy = function() {
                        this.$dropdown.remove()
                    }, c
                }), c.define("select2/dropdown/search", ["jquery", "../utils"], function(a, b) {
                    function c() {}
                    return c.prototype.render = function(b) {
                        b = b.call(this);
                        var c = a('\x3cspan class\x3d"select2-search select2-search--dropdown"\x3e\x3cinput class\x3d"select2-search__field" type\x3d"search" tabindex\x3d"-1" autocomplete\x3d"off" autocorrect\x3d"off" autocapitalize\x3d"none" spellcheck\x3d"false" role\x3d"textbox" /\x3e\x3c/span\x3e');
                        return this.$searchContainer = c, this.$search = c.find("input"), b.prepend(c), b
                    }, c.prototype.bind = function(b, c, f) {
                        var d = this;
                        b.call(this, c, f);
                        this.$search.on("keydown", function(a) {
                            d.trigger("keypress", a);
                            d._keyUpPrevented = a.isDefaultPrevented()
                        });
                        this.$search.on("input", function(b) {
                            a(this).off("keyup")
                        });
                        this.$search.on("keyup input", function(a) {
                            d.handleSearch(a)
                        });
                        c.on("open", function() {
                            d.$search.attr("tabindex", 0);
                            d.$search.focus();
                            window.setTimeout(function() {
                                d.$search.focus()
                            }, 0)
                        });
                        c.on("close", function() {
                            d.$search.attr("tabindex",
                                -1);
                            d.$search.val("");
                            d.$search.blur()
                        });
                        c.on("focus", function() {
                            c.isOpen() || d.$search.focus()
                        });
                        c.on("results:all", function(a) {
                            if (null == a.query.term || "" === a.query.term) d.showSearch(a) ? d.$searchContainer.removeClass("select2-search--hide") : d.$searchContainer.addClass("select2-search--hide")
                        })
                    }, c.prototype.handleSearch = function(a) {
                        this._keyUpPrevented || (a = this.$search.val(), this.trigger("query", {
                            term: a
                        }));
                        this._keyUpPrevented = !1
                    }, c.prototype.showSearch = function(a, b) {
                        return !0
                    }, c
                }), c.define("select2/dropdown/hidePlaceholder",
                    [],
                    function() {
                        function a(b, c, e, d) {
                            this.placeholder = this.normalizePlaceholder(e.get("placeholder"));
                            b.call(this, c, e, d)
                        }
                        return a.prototype.append = function(a, b) {
                            b.results = this.removePlaceholder(b.results);
                            a.call(this, b)
                        }, a.prototype.normalizePlaceholder = function(a, b) {
                            return "string" == typeof b && (b = {
                                id: "",
                                text: b
                            }), b
                        }, a.prototype.removePlaceholder = function(a, b) {
                            for (var c = b.slice(0), d = b.length - 1; 0 <= d; d--) this.placeholder.id === b[d].id && c.splice(d, 1);
                            return c
                        }, a
                    }), c.define("select2/dropdown/infiniteScroll",
                    ["jquery"],
                    function(a) {
                        function b(a, c, d, f) {
                            this.lastParams = {};
                            a.call(this, c, d, f);
                            this.$loadingMore = this.createLoadingMore();
                            this.loading = !1
                        }
                        return b.prototype.append = function(a, b) {
                            this.$loadingMore.remove();
                            this.loading = !1;
                            a.call(this, b);
                            this.showLoadingMore(b) && this.$results.append(this.$loadingMore)
                        }, b.prototype.bind = function(b, c, d) {
                            var f = this;
                            b.call(this, c, d);
                            c.on("query", function(a) {
                                f.lastParams = a;
                                f.loading = !0
                            });
                            c.on("query:append", function(a) {
                                f.lastParams = a;
                                f.loading = !0
                            });
                            this.$results.on("scroll",
                                function() {
                                    var b = a.contains(document.documentElement, f.$loadingMore[0]);
                                    !f.loading && b && f.$results.offset().top + f.$results.outerHeight(!1) + 50 >= f.$loadingMore.offset().top + f.$loadingMore.outerHeight(!1) && f.loadMore()
                                })
                        }, b.prototype.loadMore = function() {
                            this.loading = !0;
                            var b = a.extend({}, {
                                page: 1
                            }, this.lastParams);
                            b.page++;
                            this.trigger("query:append", b)
                        }, b.prototype.showLoadingMore = function(a, b) {
                            return b.pagination && b.pagination.more
                        }, b.prototype.createLoadingMore = function() {
                            var b = a('\x3cli class\x3d"select2-results__option select2-results__option--load-more"role\x3d"treeitem" aria-disabled\x3d"true"\x3e\x3c/li\x3e'),
                                c = this.options.get("translations").get("loadingMore");
                            return b.html(c(this.lastParams)), b
                        }, b
                    }), c.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(a, b) {
                    function c(b, d, f) {
                        this.$dropdownParent = f.get("dropdownParent") || a(document.body);
                        b.call(this, d, f)
                    }
                    return c.prototype.bind = function(a, b, c) {
                        var d = this,
                            k = !1;
                        a.call(this, b, c);
                        b.on("open", function() {
                            d._showDropdown();
                            d._attachPositioningHandler(b);
                            k || (k = !0, b.on("results:all", function() {
                                d._positionDropdown();
                                d._resizeDropdown()
                            }), b.on("results:append",
                                function() {
                                    d._positionDropdown();
                                    d._resizeDropdown()
                                }))
                        });
                        b.on("close", function() {
                            d._hideDropdown();
                            d._detachPositioningHandler(b)
                        });
                        this.$dropdownContainer.on("mousedown", function(a) {
                            a.stopPropagation()
                        })
                    }, c.prototype.destroy = function(a) {
                        a.call(this);
                        this.$dropdownContainer.remove()
                    }, c.prototype.position = function(a, b, c) {
                        b.attr("class", c.attr("class"));
                        b.removeClass("select2");
                        b.addClass("select2-container--open");
                        b.css({
                            position: "absolute",
                            top: -999999
                        });
                        this.$container = c
                    }, c.prototype.render = function(b) {
                        var c =
                            a("\x3cspan\x3e\x3c/span\x3e");
                        b = b.call(this);
                        return c.append(b), this.$dropdownContainer = c, c
                    }, c.prototype._hideDropdown = function(a) {
                        this.$dropdownContainer.detach()
                    }, c.prototype._attachPositioningHandler = function(c, d) {
                        var f = this,
                            h = "scroll.select2." + d.id,
                            t = "resize.select2." + d.id,
                            v = "orientationchange.select2." + d.id,
                            r = this.$container.parents().filter(b.hasScroll);
                        r.each(function() {
                            b.StoreData(this, "select2-scroll-position", {
                                x: a(this).scrollLeft(),
                                y: a(this).scrollTop()
                            })
                        });
                        r.on(h, function(c) {
                            c = b.GetData(this,
                                "select2-scroll-position");
                            a(this).scrollTop(c.y)
                        });
                        a(window).on(h + " " + t + " " + v, function(a) {
                            f._positionDropdown();
                            f._resizeDropdown()
                        })
                    }, c.prototype._detachPositioningHandler = function(c, d) {
                        var f = "scroll.select2." + d.id,
                            h = "resize.select2." + d.id,
                            t = "orientationchange.select2." + d.id;
                        this.$container.parents().filter(b.hasScroll).off(f);
                        a(window).off(f + " " + h + " " + t)
                    }, c.prototype._positionDropdown = function() {
                        var b = a(window),
                            c = this.$dropdown.hasClass("select2-dropdown--above"),
                            f = this.$dropdown.hasClass("select2-dropdown--below"),
                            d = null,
                            h = this.$container.offset();
                        h.bottom = h.top + this.$container.outerHeight(!1);
                        var l = this.$container.outerHeight(!1),
                            r, u;
                        r = h.top;
                        u = h.top + l;
                        var l = this.$dropdown.outerHeight(!1),
                            q = b.scrollTop(),
                            x = b.scrollTop() + b.height(),
                            b = q < h.top - l,
                            q = x > h.bottom + l,
                            h = {
                                left: h.left,
                                top: u
                            };
                        u = this.$dropdownParent;
                        "static" === u.css("position") && (u = u.offsetParent());
                        u = u.offset();
                        h.top -= u.top;
                        h.left -= u.left;
                        c || f || (d = "below");
                        q || !b || c ? !b && q && c && (d = "below") : d = "above";
                        ("above" == d || c && "below" !== d) && (h.top = r - u.top - l);
                        null != d &&
                            (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + d), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + d));
                        this.$dropdownContainer.css(h)
                    }, c.prototype._resizeDropdown = function() {
                        var a = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto");
                        this.$dropdown.css(a)
                    }, c.prototype._showDropdown = function(a) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent);
                        this._positionDropdown();
                        this._resizeDropdown()
                    }, c
                }), c.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function a(b) {
                        for (var c = 0, d = 0; d < b.length; d++) {
                            var f = b[d];
                            f.children ? c += a(f.children) : c++
                        }
                        return c
                    }

                    function b(a, c, d, f) {
                        this.minimumResultsForSearch = d.get("minimumResultsForSearch");
                        0 > this.minimumResultsForSearch && (this.minimumResultsForSearch = 1 / 0);
                        a.call(this, c, d, f)
                    }
                    return b.prototype.showSearch = function(b, c) {
                            return !(a(c.data.results) < this.minimumResultsForSearch) && b.call(this, c)
                        },
                        b
                }), c.define("select2/dropdown/selectOnClose", ["../utils"], function(a) {
                    function b() {}
                    return b.prototype.bind = function(a, b, c) {
                        var f = this;
                        a.call(this, b, c);
                        b.on("close", function(a) {
                            f._handleSelectOnClose(a)
                        })
                    }, b.prototype._handleSelectOnClose = function(b, c) {
                        if (c && null != c.originalSelect2Event) {
                            var d = c.originalSelect2Event;
                            if ("select" === d._type || "unselect" === d._type) return
                        }
                        d = this.getHighlightedResults();
                        1 > d.length || (d = a.GetData(d[0], "data"), null != d.element && d.element.selected || null == d.element && d.selected ||
                            this.trigger("select", {
                                data: d
                            }))
                    }, b
                }), c.define("select2/dropdown/closeOnSelect", [], function() {
                    function a() {}
                    return a.prototype.bind = function(a, b, c) {
                        var d = this;
                        a.call(this, b, c);
                        b.on("select", function(a) {
                            d._selectTriggered(a)
                        });
                        b.on("unselect", function(a) {
                            d._selectTriggered(a)
                        })
                    }, a.prototype._selectTriggered = function(a, b) {
                        var c = b.originalEvent;
                        c && c.ctrlKey || this.trigger("close", {
                            originalEvent: c,
                            originalSelect2Event: b
                        })
                    }, a
                }), c.define("select2/i18n/en", [], function() {
                    return {
                        errorLoading: function() {
                            return "The results could not be loaded."
                        },
                        inputTooLong: function(a) {
                            a = a.input.length - a.maximum;
                            var b = "Please delete " + a + " character";
                            return 1 != a && (b += "s"), b
                        },
                        inputTooShort: function(a) {
                            return "Please enter " + (a.minimum - a.input.length) + " or more characters"
                        },
                        loadingMore: function() {
                            return "Loading more results\u00e2\u20ac\u00a6"
                        },
                        maximumSelected: function(a) {
                            var b = "You can only select " + a.maximum + " item";
                            return 1 != a.maximum && (b += "s"), b
                        },
                        noResults: function() {
                            return "No results found"
                        },
                        searching: function() {
                            return "Searching\u00e2\u20ac\u00a6"
                        }
                    }
                }), c.define("select2/defaults",
                    "jquery require ./results ./selection/single ./selection/multiple ./selection/placeholder ./selection/allowClear ./selection/search ./selection/eventRelay ./utils ./translation ./diacritics ./data/select ./data/array ./data/ajax ./data/tags ./data/tokenizer ./data/minimumInputLength ./data/maximumInputLength ./data/maximumSelectionLength ./dropdown ./dropdown/search ./dropdown/hidePlaceholder ./dropdown/infiniteScroll ./dropdown/attachBody ./dropdown/minimumResultsForSearch ./dropdown/selectOnClose ./dropdown/closeOnSelect ./i18n/en".split(" "),
                    function(a, b, c, d, g, f, p, t, v, r, u, q, x, z, A, y, C, m, w, B, E, F, s, D, I, H, M, G, P) {
                        function J() {
                            this.reset()
                        }
                        return J.prototype.apply = function(n) {
                            if (n = a.extend(!0, {}, this.defaults, n), null == n.dataAdapter) {
                                if (null != n.ajax ? n.dataAdapter = A : null != n.data ? n.dataAdapter = z : n.dataAdapter = x, 0 < n.minimumInputLength && (n.dataAdapter = r.Decorate(n.dataAdapter, m)), 0 < n.maximumInputLength && (n.dataAdapter = r.Decorate(n.dataAdapter, w)), 0 < n.maximumSelectionLength && (n.dataAdapter = r.Decorate(n.dataAdapter, B)), n.tags && (n.dataAdapter = r.Decorate(n.dataAdapter,
                                        y)), null == n.tokenSeparators && null == n.tokenizer || (n.dataAdapter = r.Decorate(n.dataAdapter, C)), null != n.query) {
                                    var q = b(n.amdBase + "compat/query");
                                    n.dataAdapter = r.Decorate(n.dataAdapter, q)
                                }
                                null != n.initSelection && (q = b(n.amdBase + "compat/initSelection"), n.dataAdapter = r.Decorate(n.dataAdapter, q))
                            }
                            if (null == n.resultsAdapter && (n.resultsAdapter = c, null != n.ajax && (n.resultsAdapter = r.Decorate(n.resultsAdapter, D)), null != n.placeholder && (n.resultsAdapter = r.Decorate(n.resultsAdapter, s)), n.selectOnClose && (n.resultsAdapter =
                                    r.Decorate(n.resultsAdapter, M))), null == n.dropdownAdapter) {
                                n.multiple ? n.dropdownAdapter = E : (q = r.Decorate(E, F), n.dropdownAdapter = q);
                                if (0 !== n.minimumResultsForSearch && (n.dropdownAdapter = r.Decorate(n.dropdownAdapter, H)), n.closeOnSelect && (n.dropdownAdapter = r.Decorate(n.dropdownAdapter, G)), null != n.dropdownCssClass || null != n.dropdownCss || null != n.adaptDropdownCssClass) q = b(n.amdBase + "compat/dropdownCss"), n.dropdownAdapter = r.Decorate(n.dropdownAdapter, q);
                                n.dropdownAdapter = r.Decorate(n.dropdownAdapter, I)
                            }
                            if (null ==
                                n.selectionAdapter) {
                                if (n.multiple ? n.selectionAdapter = g : n.selectionAdapter = d, null != n.placeholder && (n.selectionAdapter = r.Decorate(n.selectionAdapter, f)), n.allowClear && (n.selectionAdapter = r.Decorate(n.selectionAdapter, p)), n.multiple && (n.selectionAdapter = r.Decorate(n.selectionAdapter, t)), null != n.containerCssClass || null != n.containerCss || null != n.adaptContainerCssClass) q = b(n.amdBase + "compat/containerCss"), n.selectionAdapter = r.Decorate(n.selectionAdapter, q);
                                n.selectionAdapter = r.Decorate(n.selectionAdapter,
                                    v)
                            }
                            "string" == typeof n.language && (0 < n.language.indexOf("-") ? (q = n.language.split("-")[0], n.language = [n.language, q]) : n.language = [n.language]);
                            if (a.isArray(n.language)) {
                                q = new u;
                                n.language.push("en");
                                for (var K = n.language, N = 0; N < K.length; N++) {
                                    var L = K[N],
                                        O = {};
                                    try {
                                        O = u.loadPath(L)
                                    } catch (J) {
                                        try {
                                            L = this.defaults.amdLanguageBase + L, O = u.loadPath(L)
                                        } catch (P) {
                                            n.debug && window.console && console.warn && console.warn('Select2: The language file for "' + L + '" could not be automatically loaded. A fallback will be used instead.');
                                            continue
                                        }
                                    }
                                    q.extend(O)
                                }
                                n.translations = q
                            } else q = u.loadPath(this.defaults.amdLanguageBase + "en"), K = new u(n.language), K.extend(q), n.translations = K;
                            return n
                        }, J.prototype.reset = function() {
                            function b(a) {
                                return a.replace(/[^\u0000-\u007E]/g, function(a) {
                                    return q[a] || a
                                })
                            }

                            function c(f, d) {
                                if ("" === a.trim(f.term)) return d;
                                if (d.children && 0 < d.children.length) {
                                    for (var e = a.extend(!0, {}, d), g = d.children.length - 1; 0 <= g; g--) null == c(f, d.children[g]) && e.children.splice(g, 1);
                                    return 0 < e.children.length ? e : c(f, e)
                                }
                                e = b(d.text).toUpperCase();
                                g = b(f.term).toUpperCase();
                                return -1 < e.indexOf(g) ? d : null
                            }
                            this.defaults = {
                                amdBase: "./",
                                amdLanguageBase: "./i18n/",
                                closeOnSelect: !0,
                                debug: !1,
                                dropdownAutoWidth: !1,
                                escapeMarkup: r.escapeMarkup,
                                language: P,
                                matcher: c,
                                minimumInputLength: 0,
                                maximumInputLength: 0,
                                maximumSelectionLength: 0,
                                minimumResultsForSearch: 0,
                                selectOnClose: !1,
                                sorter: function(a) {
                                    return a
                                },
                                templateResult: function(a) {
                                    return a.text
                                },
                                templateSelection: function(a) {
                                    return a.text
                                },
                                theme: "default",
                                width: "resolve"
                            }
                        }, J.prototype.set = function(b, c) {
                            var d =
                                a.camelCase(b),
                                f = {};
                            f[d] = c;
                            d = r._convertData(f);
                            a.extend(!0, this.defaults, d)
                        }, new J
                    }), c.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(a, b, c, d) {
                    function g(b, g) {
                        if (this.options = b, null != g && this.fromElement(g), this.options = c.apply(this.options), g && g.is("input")) {
                            var l = a(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = d.Decorate(this.options.dataAdapter, l)
                        }
                    }
                    return g.prototype.fromElement = function(a) {
                        var c = ["select2"];
                        null == this.options.multiple && (this.options.multiple =
                            a.prop("multiple"));
                        null == this.options.disabled && (this.options.disabled = a.prop("disabled"));
                        null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang")));
                        null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr");
                        a.prop("disabled", this.options.disabled);
                        a.prop("multiple",
                            this.options.multiple);
                        d.GetData(a[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags\x3d"true"` attributes and will be removed in future versions of Select2.'), d.StoreData(a[0], "data", d.GetData(a[0], "select2Tags")), d.StoreData(a[0], "tags", !0));
                        d.GetData(a[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                            a.attr("ajax--url", d.GetData(a[0], "ajaxUrl")), d.StoreData(a[0], "ajax-Url", d.GetData(a[0], "ajaxUrl")));
                        var g = {},
                            g = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, d.GetData(a[0])) : d.GetData(a[0]);
                        a = b.extend(!0, {}, g);
                        a = d._convertData(a);
                        for (var h in a) - 1 < b.inArray(h, c) || (b.isPlainObject(this.options[h]) ? b.extend(this.options[h], a[h]) : this.options[h] = a[h]);
                        return this
                    }, g.prototype.get = function(a) {
                        return this.options[a]
                    }, g.prototype.set = function(a, b) {
                        this.options[a] =
                            b
                    }, g
                }), c.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(a, b, c, d) {
                    var g = function(a, d) {
                        null != c.GetData(a[0], "select2") && c.GetData(a[0], "select2").destroy();
                        this.$element = a;
                        this.id = this._generateId(a);
                        d = d || {};
                        this.options = new b(d, a);
                        g.__super__.constructor.call(this);
                        var e = a.attr("tabindex") || 0;
                        c.StoreData(a[0], "old-tabindex", e);
                        a.attr("tabindex", "-1");
                        this.dataAdapter = new(this.options.get("dataAdapter"))(a, this.options);
                        e = this.render();
                        this._placeContainer(e);
                        this.selection =
                            new(this.options.get("selectionAdapter"))(a, this.options);
                        this.$selection = this.selection.render();
                        this.selection.position(this.$selection, e);
                        this.dropdown = new(this.options.get("dropdownAdapter"))(a, this.options);
                        this.$dropdown = this.dropdown.render();
                        this.dropdown.position(this.$dropdown, e);
                        this.results = new(this.options.get("resultsAdapter"))(a, this.options, this.dataAdapter);
                        this.$results = this.results.render();
                        this.results.position(this.$results, this.$dropdown);
                        var k = this;
                        this._bindAdapters();
                        this._registerDomEvents();
                        this._registerDataEvents();
                        this._registerSelectionEvents();
                        this._registerDropdownEvents();
                        this._registerResultsEvents();
                        this._registerEvents();
                        this.dataAdapter.current(function(a) {
                            k.trigger("selection:update", {
                                data: a
                            })
                        });
                        a.addClass("select2-hidden-accessible");
                        a.attr("aria-hidden", "true");
                        this._syncAttributes();
                        c.StoreData(a[0], "select2", this)
                    };
                    return c.Extend(g, c.Observable), g.prototype._generateId = function(a) {
                        var b = "";
                        return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") +
                            "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), "select2-" + b
                    }, g.prototype._placeContainer = function(a) {
                        a.insertAfter(this.$element);
                        var b = this._resolveWidth(this.$element, this.options.get("width"));
                        null != b && a.css("width", b)
                    }, g.prototype._resolveWidth = function(a, b) {
                        var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == b) return c = this._resolveWidth(a, "style"), null != c ? c : this._resolveWidth(a, "element");
                        if ("element" == b) return c = a.outerWidth(!1),
                            0 >= c ? "auto" : c + "px";
                        if ("style" == b) {
                            var d = a.attr("style");
                            if ("string" != typeof d) return null;
                            for (var d = d.split(";"), e = 0, g = d.length; e < g; e += 1) {
                                var h = d[e].replace(/\s/g, "").match(c);
                                if (null !== h && 1 <= h.length) return h[1]
                            }
                            return null
                        }
                        return b
                    }, g.prototype._bindAdapters = function() {
                        this.dataAdapter.bind(this, this.$container);
                        this.selection.bind(this, this.$container);
                        this.dropdown.bind(this, this.$container);
                        this.results.bind(this, this.$container)
                    }, g.prototype._registerDomEvents = function() {
                        var b = this;
                        this.$element.on("change.select2",
                            function() {
                                b.dataAdapter.current(function(a) {
                                    b.trigger("selection:update", {
                                        data: a
                                    })
                                })
                            });
                        this.$element.on("focus.select2", function(a) {
                            b.trigger("focus", a)
                        });
                        this._syncA = c.bind(this._syncAttributes, this);
                        this._syncS = c.bind(this._syncSubtree, this);
                        this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != d ? (this._observer = new d(function(c) {
                                a.each(c, b._syncA);
                                a.each(c, b._syncS)
                            }),
                            this._observer.observe(this.$element[0], {
                                attributes: !0,
                                childList: !0,
                                subtree: !1
                            })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1))
                    }, g.prototype._registerDataEvents = function() {
                        var a = this;
                        this.dataAdapter.on("*", function(b, c) {
                            a.trigger(b, c)
                        })
                    }, g.prototype._registerSelectionEvents = function() {
                        var b = this,
                            c = ["toggle", "focus"];
                        this.selection.on("toggle", function() {
                            b.toggleDropdown()
                        });
                        this.selection.on("focus", function(a) {
                            b.focus(a)
                        });
                        this.selection.on("*", function(d, e) {
                            -1 === a.inArray(d, c) && b.trigger(d, e)
                        })
                    }, g.prototype._registerDropdownEvents = function() {
                        var a = this;
                        this.dropdown.on("*", function(b, c) {
                            a.trigger(b, c)
                        })
                    }, g.prototype._registerResultsEvents = function() {
                        var a = this;
                        this.results.on("*", function(b, c) {
                            a.trigger(b, c)
                        })
                    }, g.prototype._registerEvents = function() {
                        var a = this;
                        this.on("open", function() {
                            a.$container.addClass("select2-container--open")
                        });
                        this.on("close", function() {
                            a.$container.removeClass("select2-container--open")
                        });
                        this.on("enable", function() {
                            a.$container.removeClass("select2-container--disabled")
                        });
                        this.on("disable", function() {
                            a.$container.addClass("select2-container--disabled")
                        });
                        this.on("blur", function() {
                            a.$container.removeClass("select2-container--focus")
                        });
                        this.on("query", function(b) {
                            a.isOpen() || a.trigger("open", {});
                            this.dataAdapter.query(b, function(c) {
                                a.trigger("results:all", {
                                    data: c,
                                    query: b
                                })
                            })
                        });
                        this.on("query:append", function(b) {
                            this.dataAdapter.query(b,
                                function(c) {
                                    a.trigger("results:append", {
                                        data: c,
                                        query: b
                                    })
                                })
                        });
                        this.on("keypress", function(b) {
                            var c = b.which;
                            a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) &&
                                (a.open(), b.preventDefault())
                        })
                    }, g.prototype._syncAttributes = function() {
                        this.options.set("disabled", this.$element.prop("disabled"));
                        this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, g.prototype._syncSubtree = function(a, b) {
                        var c = !1,
                            d = this;
                        if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
                            if (b)
                                if (b.addedNodes && 0 < b.addedNodes.length)
                                    for (var e = 0; e < b.addedNodes.length; e++) b.addedNodes[e].selected && (c = !0);
                                else b.removedNodes &&
                                    0 < b.removedNodes.length && (c = !0);
                            else c = !0;
                            c && this.dataAdapter.current(function(a) {
                                d.trigger("selection:update", {
                                    data: a
                                })
                            })
                        }
                    }, g.prototype.trigger = function(a, b) {
                        var c = g.__super__.trigger,
                            d = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting",
                                clear: "clearing"
                            };
                        if (void 0 === b && (b = {}), a in d) {
                            var e = {
                                prevented: !1,
                                name: a,
                                args: b
                            };
                            if (c.call(this, d[a], e), e.prevented) return void(b.prevented = !0)
                        }
                        c.call(this, a, b)
                    }, g.prototype.toggleDropdown = function() {
                        this.options.get("disabled") || (this.isOpen() ?
                            this.close() : this.open())
                    }, g.prototype.open = function() {
                        this.isOpen() || this.trigger("query", {})
                    }, g.prototype.close = function() {
                        this.isOpen() && this.trigger("close", {})
                    }, g.prototype.isOpen = function() {
                        return this.$container.hasClass("select2-container--open")
                    }, g.prototype.hasFocus = function() {
                        return this.$container.hasClass("select2-container--focus")
                    }, g.prototype.focus = function(a) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, g.prototype.enable = function(a) {
                        this.options.get("debug") &&
                            window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
                        null != a && 0 !== a.length || (a = [!0]);
                        this.$element.prop("disabled", !a[0])
                    }, g.prototype.data = function() {
                        this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var a = [];
                        return this.dataAdapter.current(function(b) {
                            a = b
                        }), a
                    }, g.prototype.val = function(b) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();
                        b = b[0];
                        a.isArray(b) && (b = a.map(b, function(a) {
                            return a.toString()
                        }));
                        this.$element.val(b).trigger("change")
                    }, g.prototype.destroy = function() {
                        this.$container.remove();
                        this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA);
                        null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1));
                        this._syncS = this._syncA = null;
                        this.$element.off(".select2");
                        this.$element.attr("tabindex",
                            c.GetData(this.$element[0], "old-tabindex"));
                        this.$element.removeClass("select2-hidden-accessible");
                        this.$element.attr("aria-hidden", "false");
                        c.RemoveData(this.$element[0]);
                        this.dataAdapter.destroy();
                        this.selection.destroy();
                        this.dropdown.destroy();
                        this.results.destroy();
                        this.results = this.dropdown = this.selection = this.dataAdapter = null
                    }, g.prototype.render = function() {
                        var b = a('\x3cspan class\x3d"select2 select2-container"\x3e\x3cspan class\x3d"selection"\x3e\x3c/span\x3e\x3cspan class\x3d"dropdown-wrapper" aria-hidden\x3d"true"\x3e\x3c/span\x3e\x3c/span\x3e');
                        return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), c.StoreData(b[0], "element", this.$element), b
                    }, g
                }), c.define("jquery-mousewheel", ["jquery"], function(a) {
                    return a
                }), c.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function(a, b, c, d, g) {
                    if (null == a.fn.select2) {
                        var f = ["open", "close", "destroy"];
                        a.fn.select2 = function(b) {
                            if ("object" == typeof(b = b || {})) return this.each(function() {
                                var d =
                                    a.extend(!0, {}, b);
                                new c(a(this), d)
                            }), this;
                            if ("string" == typeof b) {
                                var d, e = Array.prototype.slice.call(arguments, 1);
                                return this.each(function() {
                                    var a = g.GetData(this, "select2");
                                    null == a && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2.");
                                    d = a[b].apply(a, e)
                                }), -1 < a.inArray(b, f) ? this : d
                            }
                            throw Error("Invalid arguments for Select2: " + b);
                        }
                    }
                    return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
                }), {
                    define: c.define,
                    require: c.require
                }
        }(),
        b = c.require("jquery.select2");
    return a.fn.select2.amd = c, b
});
$.fn.tooltip = function(a) {
    function c(b) {
        if ("undefined" != typeof a) return a[b]
    }
    var b = "focus" == c("event") ? "focus" : "hover";
    if ("focus" == b || !fourSq.util.devices.isTouchIncludingIPad() || c("allowTouch")) {
        2 > $(".hoverTip").length && $("body").append('\x3cdiv class\x3d"hoverTip hoverTipBottom"\x3e\x3cdiv class\x3d"hoverTipInner"\x3e\x3c/div\x3e\x3c/div\x3e');
        var d = $(".hoverTip:last");
        this.each(function() {
            var a = $(this),
                l = "title";
            1 == c("useAlt") && (l = "alt");
            var h = "none";
            void 0 != c("tipWidth") && (h = c("tipWidth"));
            if (!a.data("tooltipped")) {
                a.data("tooltipped",
                    !0);
                a.data(l, a.attr(l)).attr(l, "");
                var e = function() {
                        if (fourSq.isDefinedAndNotNull(a.data(l)) && "" != a.data(l)) {
                            c("html") ? $(".hoverTipInner", d).html(a.data(l)) : $(".hoverTipInner", d).text(a.data(l));
                            var b = c("position") || "top";
                            d.css("backgroundPosition", "");
                            switch (b) {
                                case "top":
                                    d.removeClass().addClass("hoverTip hoverTipBottom");
                                    var b = Math.ceil($(this).offset().left),
                                        e = $(this).width(),
                                        b = b + Math.ceil(e / 2) - 31 + "px",
                                        e = Math.ceil($(this).offset().top),
                                        g = d.height() + 15;
                                    d.css({
                                        top: e - g + "px",
                                        left: b,
                                        "max-width": h
                                    });
                                    break;
                                case "bottom":
                                    d.removeClass().addClass("hoverTip hoverTipTop");
                                    b = Math.ceil($(this).offset().left);
                                    e = $(this).width();
                                    b = b + Math.ceil(e / 2) - 31 + "px";
                                    e = Math.ceil($(this).offset().top);
                                    g = $(this).height();
                                    d.css({
                                        top: e + g + 15 + "px",
                                        left: b,
                                        "max-width": h
                                    });
                                    break;
                                case "topLeft":
                                    d.removeClass().addClass("hoverTip hoverTipBottom");
                                    b = Math.ceil($(this).offset().left);
                                    $(this).width();
                                    b += 10;
                                    e = Math.ceil($(this).offset().top);
                                    g = d.height() + 15;
                                    d.css({
                                        top: e - g + "px",
                                        left: b,
                                        "max-width": h
                                    });
                                    break;
                                case "right":
                                    d.removeClass().addClass("hoverTip hoverTipRight");
                                    b = Math.ceil($(this).offset().left);
                                    b = b - d.width() - 15 + "px";
                                    e = Math.ceil($(this).offset().top);
                                    g = $(this).height() / 2;
                                    d.css({
                                        top: e - g + "px",
                                        left: b,
                                        "max-width": h
                                    });
                                    break;
                                case "left":
                                    d.removeClass().addClass("hoverTip hoverTipLeft"), b = Math.ceil($(this).offset().left), b = b + a.width() + 5 + "px", e = Math.ceil($(this).offset().top), g = d.height() / 2 - $(this).height() / 2, d.css({
                                        top: e - g - 4 + "px",
                                        left: b,
                                        "max-width": h
                                    })
                            }
                            c("extraClass") && d.addClass(c("extraClass"));
                            $(d).show()
                        }
                    },
                    g = function() {
                        $(d).hide()
                    };
                "hover" == b ? a.hover(e, g) :
                    "focus" == b && (a.focus(e), a.blur(g), $(window).resize(function() {
                        a.is(":focus") && (g(), e())
                    }))
            }
        })
    }
};
fourSq.i18n._cookieName = "lang-pref";
fourSq.i18n.langInfo_ = function(a) {
    if (fourSq.isDefinedAndNotNull(fourSq.config.i18n)) return _.find(fourSq.config.i18n.langs, function(c) {
        return c.lang == a
    })
};
fourSq.i18n.browserPref = function() {
    return window.navigator.language ? window.navigator.language : window.navigator.userLanguage
};
fourSq.i18n.cookiePref = function() {
    if ("undefined" != typeof $.cookie) return $.cookie(fourSq.i18n._cookieName)
};
fourSq.i18n.userLocale = function() {
    if (fourSq.config && fourSq.config.user) return fourSq.config.user.LOCALE
};
fourSq.i18n.userLocaleCountry = function() {
    return (fourSq.i18n.userLocale() || "").split("_")[1]
};
fourSq.i18n.userLocaleLang = function() {
    return fourSq.i18n.userLocale() ? fourSq.i18n.userLocale().split("_")[0] : void 0
};
fourSq.i18n.setLang = function(a) {
    "undefined" != typeof $.cookie && ($.cookie(fourSq.i18n._cookieName, a, {
        expires: 365,
        path: "/",
        domain: "." + fourSq.i18n.baseDomain()
    }), fourSq.i18n.redirect())
};
fourSq.i18n.currentLang = function() {
    var a = fourSq.i18n.langInfo_(fourSq.i18n.languagePref());
    return a ? a.name : "English"
};
fourSq.i18n.languagePref = function() {
    var a = fourSq.i18n.browserPref();
    fourSq.i18n.cookiePref() ? a = fourSq.i18n.cookiePref() : fourSq.i18n.userLocaleLang() && (a = fourSq.i18n.userLocaleLang());
    void 0 == a && (a = "en");
    a = a.split("-")[0].toLowerCase();
    return fourSq.isDefinedAndNotNull(fourSq.i18n.langInfo_(a)) ? a : "en"
};
fourSq.i18n.baseDomain = function() {
    var a = "www" == fourSq.location.hostname.split(".")[0];
    return "en" != fourSq.i18n.currentDomain() || a ? fourSq.location.hostname.split(".").slice(1).join(".") : fourSq.location.hostname
};
fourSq.i18n.currentDomain = function() {
    var a = "en";
    _.each(fourSq.config.i18n.langs, function(c) {
        try {
            c.host && c.host == fourSq.location.hostname.split(".")[0] && (a = c.host)
        } catch (b) {}
    });
    return a
};
fourSq.i18n.preferredDomain = function() {
    var a = fourSq.i18n.langInfo_(fourSq.i18n.languagePref());
    return a && a.host || "en"
};
fourSq.i18n.redirect = function() {
    var a = fourSq.i18n.preferredDomain();
    a != fourSq.i18n.currentDomain() && (a = "en" == a ? fourSq.i18n.baseDomain() : a + "." + fourSq.i18n.baseDomain(), fourSq.util.redirect(window.location.protocol + "//" + a + (window.location.port ? ":" + window.location.port : "") + window.location.pathname + window.location.search))
};
fourSq.i18n.formatNumber = function(a, c, b, d) {
    return fourSq.isUndefinedOrNull(a) || !isFinite(a) || isNaN(a) ? d : "decimal" !== c && c ? "percent" === c ? fourSq.i18n.goog.formatPercent(parseFloat(a), fourSq.i18n.languagePref(), b) : "currency" === c ? fourSq.i18n.goog.formatCurrency(parseFloat(a), fourSq.i18n.languagePref(), b) : a.toString() : fourSq.i18n.goog.formatNumber(parseFloat(a), fourSq.i18n.languagePref(), b)
};
fourSq.i18n.parseNumber = function(a) {
    return fourSq.i18n.goog.parseNumber(a, fourSq.i18n.languagePref())
};
fourSq.isDefined = function(a) {
    return "undefined" != typeof a
};
fourSq.isNull = function(a) {
    return null === a
};
fourSq.isDefinedAndNotNull = function(a) {
    return fourSq.isDefined(a) && !fourSq.isNull(a)
};
fourSq.isUndefinedOrNull = function(a) {
    return void 0 == a
};
fourSq.emptyFunction = function() {};
fourSq.onPageReady = function(a) {
    var c = !1,
        b, d = [],
        k = function() {
            c = !0;
            b = a();
            _.each(d, function(a) {
                a(b)
            })
        };
    fourSq.util.devices.isMsie8() ? $(k) : k();
    return {
        onReady: function(a) {
            c ? a(b) : d.push(a)
        }
    }
};
fourSq.forEachKey = function(a, c, b) {
    var d = _.keys(a);
    _.each(d, function(d) {
        c.call(b, a[d], d, a)
    })
};
fourSq.bind = function(a, c) {
    return _.bind.apply(this, arguments)
};
fourSq.curry = function(a, c, b, d) {
    return _.bind.apply(this, arguments)
};
fourSq.abstractMethod = function() {
    throw Error("Unimplemented abstract method!");
};
fourSq.withoutPropagation = function(a, c) {
    return function(b) {
        b.stopPropagation();
        a.call(c, b)
    }
};
fourSq.withoutDefault = function(a, c) {
    return function(b) {
        b.preventDefault();
        a.call(c, b)
    }
};
fourSq.withoutPropagationAndDefault = function(a, c) {
    return function(b) {
        fourSq.stopPropagationAndDefault(b);
        a.call(c, b)
    }
};
fourSq.stopPropagationAndDefault = function(a) {
    a.stopPropagation();
    a.preventDefault()
};
fourSq.location = window.location;
fourSq.util.redirect = function(a) {
    var c = a,
        b = a,
        d = window.top.location.pathname,
        k = /(^[^\.\:]+)(\:\/\/)(.*)$/.exec(c);
    fourSq.isUndefinedOrNull(k) ? ("?" === b.charAt(0) || "#" === b.charAt(0) ? b = d + b : "/" != b.charAt(0) && (c = d.split("/").slice(1), c[c.length - 1] = a, b = "/" + c.join("/")), c = window.top.location.protocol + "//" + window.top.location.host + b, window.top.location.href = c) : "http" == k[1] || "https" == k[1] ? window.top.location.href = c : window.location = c
};
fourSq.util.isFoursquareUrl = function(a) {
    return /http[s]?:\/\/([^\/]+\.)?foursquare.com/.test(a)
};
fourSq.util.isRelativeUrl = function(a) {
    return !/^(?:[a-z]+:)?\/\//i.test(a)
};
fourSq.util.isInternalReferrer = function() {
    return fourSq.util.isFoursquareUrl(window.document.referrer)
};
fourSq.util.isExternalReferrer = function() {
    return !fourSq.util.isInternalReferrer()
};
fourSq.util.escapeHtml = function(a) {
    return soy.$$escapeHtml(a)
};
fourSq.util.stripHtml = function(a) {
    return $("\x3cdiv\x3e" + a + "\x3c/div\x3e").text()
};
fourSq.util.safeSubstring = function(a, c, b) {
    return fourSq.isUndefinedOrNull(a) ? "" : fourSq.isUndefinedOrNull(b) ? a.substring(c) : c <= b && 0 <= c && b <= a.length ? a.substring(c, b) : ""
};
fourSq.util.size = function(a) {
    return fourSq.isDefinedAndNotNull(a.length) ? a.length : _.size(a)
};
fourSq.util.trim = function(a) {
    var c = String.prototype.trim;
    return fourSq.isUndefinedOrNull(a) ? "" : fourSq.isDefinedAndNotNull(c) ? c.call(new String(a)) : String(a).replace(RegExp("^\\s+|\\s+$", "g"), "")
};
fourSq.util.capitalize = function(a) {
    return a.charAt(0).toUpperCase() + a.substring(1)
};
fourSq.util.capitalizeWords = function(a) {
    return _.map(a.split(" "), function(a) {
        return fourSq.util.capitalize(a)
    }).join(" ")
};
fourSq.util.padString = function(a, c, b, d) {
    a += "";
    c = c || 0;
    b = b || " ";
    if (c > a.length) switch (c -= a.length, d || "left") {
        case "right":
            return a + Array(c + 1).join(b);
        case "both":
            return d = Math.floor(c / 2), Array(c - d + 1).join(b) + a + Array(d + 1).join(b);
        default:
            return Array(c + 1).join(b) + a
    }
    return a
};
fourSq.util.appendParams = function(a, c) {
    var b = a,
        d = "\x26",
        k = _.isArray(c);
    switch (b.indexOf("?")) {
        case -1:
            d = "?";
            break;
        case b.length - 1:
            d = "?", b = b.substring(0, b.length - 1)
    }
    _(c).each(function(a, h) {
        k ? 2 === a.length && fourSq.isDefinedAndNotNull(c[0]) && fourSq.isDefinedAndNotNull(a[1]) && (b += d + encodeURIComponent(a[0]) + "\x3d" + encodeURIComponent(a[1])) : fourSq.isDefinedAndNotNull(a) && (b += d + encodeURIComponent(h) + "\x3d" + encodeURIComponent(a));
        "\x26" !== d && (d = "\x26")
    }, this);
    return b
};
fourSq.util.parseParams = function(a) {
    a = a || fourSq.location.href;
    var c = {};
    a.replace(/[?&]+([^=&#]+)=([^&#]*)/gi, function(a, d, k) {
        c[d] = decodeURIComponent(k.replace(/\+/g, "%20"))
    });
    return c
};
fourSq.util.setHash = function(a, c) {
    var b = "#" + fourSq.util.appendParams("", a).substring(1);
    c ? window.location.replace("#" + fourSq.util.appendParams("", a).substring(1)) : window.location.hash = b
};
fourSq.util.parseHashParams = function() {
    return fourSq.util.parseParams("?" + window.location.hash.substring(1))
};
fourSq.util.dateParts = function(a, c) {
    if (c && !_.isNumber(c)) throw Error("Invalid non-number input for timezone offset");
    var b = a ? 1E3 * a : +new Date,
        d = c ? 6E4 * c + 6E4 * (new Date(b)).getTimezoneOffset() : 0,
        b = new Date(b + d);
    return {
        minute: b.getMinutes(),
        hour: b.getHours(),
        day: b.getDay(),
        month: b.getMonth(),
        date: b.getDate(),
        year: b.getFullYear()
    }
};
fourSq.util.clickOpensInNewTab = function(a, c) {
    var b = 2 === a.which,
        d = a.ctrlKey || a.metaKey,
        k = "a" === c.get(0).tagName.toLowerCase() && c.attr("target");
    return b || d || k
};
fourSq.util.timeDiff = function(a, c) {
    var b = c || new Date;
    "number" == typeof b && (b = new Date(1E3 * b));
    "number" == typeof a && (a = new Date(1E3 * a));
    var d = function(c) {
        c = (b - a) / c;
        return 0 < c ? Math.floor(c) : Math.ceil(c)
    };
    return {
        seconds: d(1E3),
        minutes: d(6E4),
        hours: d(36E5),
        days: d(864E5),
        weeks: d(6048E5)
    }
};
fourSq.util.fullDate = function(a, c) {
    var b = fourSq.util.dateParts(a, c);
    return "January February March April May June July August September October November December".split(" ")[b.month] + " " + b.day + ", " + b.year
};
fourSq.util.smartDate = function(a, c) {
    "number" == typeof a && (a = new Date(1E3 * a));
    var b = c || new Date;
    "number" == typeof b && (b = new Date(1E3 * b));
    var d = fourSq.util.timeDiff(a, b),
        k = "January February March April May June July August September October November December".split(" ");
    return 10 > d.seconds ? "just now" : 4 > d.weeks ? (b = 0, k = "", 1 > d.minutes ? (b = d.seconds, k = "second") : 1 > d.hours ? (b = d.minutes, k = "minute") : 1 > d.days ? (b = d.hours, k = "hour") : 1 > d.weeks ? (b = d.days, k = "day") : (b = d.weeks, k = "week"), 1 == b ? b + " " + k + " ago" : b + " " + k + "s ago") :
        b.getFullYear() == a.getFullYear() ? k[a.getMonth()] + " " + a.getDate() : k[a.getMonth()] + " " + a.getDate() + ", " + a.getFullYear()
};
fourSq.util.detectCreditCardType = function(a) {
    var c = a.replace(/[^\d]/g, "");
    return _([{
        cardType: "visa",
        typeString: "Visa",
        regex: /^4/
    }, {
        cardType: "mastercard",
        typeString: "MasterCard",
        regex: /^5[1-5]/
    }, {
        cardType: "amex",
        typeString: "American Express",
        regex: /^3[47]/
    }, {
        cardType: "dinersclub",
        typeString: "Diners Club",
        regex: /^3(?:0[0-5]|[68])/
    }, {
        cardType: "discover",
        typeString: "Discover",
        regex: /^6(?:011|5)/
    }, {
        cardType: "jcb",
        typeString: "JCB",
        regex: /^(?:2131|1800|35)/
    }, {
        cardType: "default",
        typeString: "",
        regex: /^/
    }]).find(function(a) {
        return a.regex.test(c)
    })
};
fourSq.util.caretTo = function(a, c) {
    if (a.createTextRange) {
        var b = a.createTextRange();
        b.move("character", c);
        b.select()
    } else null != a.selectionStart && (a.focus(), a.setSelectionRange(c, c))
};
fourSq.util.getCaretPos = function(a) {
    if ("selectionStart" in a) return a.selectionStart;
    a.focus();
    var c = document.selection.createRange();
    if (fourSq.isDefinedAndNotNull(c.text)) {
        var c = c.text,
            b = c.length;
        c.moveStart("character", -a.value.length);
        return c.text.length - b
    }
    return -1
};
fourSq.util.soyFlattenHelper = function(a, c) {
    return _.filter(a, function(a) {
        c && (a = a[c]);
        return !fourSq.isUndefinedOrNull(a)
    })
};
fourSq.util.toSlug = function(a) {
    a = a.toLowerCase().split(/\s+/).join("-");
    return encodeURIComponent(a)
};
fourSq.util.approximatelyEqual = function(a, c, b) {
    var d = a > c;
    return (d ? a : c) - (d ? c : a) <= b
};
fourSq.util.KeyConstants = {
    ENTER: 13,
    ESCAPE: 27,
    BACKSPACE: 8,
    DELETE: 46,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
fourSq.util.KeyConstants.isVisible = function(a) {
    return a === fourSq.util.KeyConstants.BACKSPACE || a === fourSq.util.KeyConstants.DELETE || 47 < a && 91 > a || 95 < a && 112 > a || 185 < a
};
fourSq.util.constructAppsflyerIdForInviteLanding = function(a) {
    return "inviteVia-" + a
};
fourSq.util.devices = {
    IPHONE: "iphone",
    IPAD: "ipad",
    ANDROID: "android",
    WINDOWS_PHONE: "windowsphone",
    TIZEN: "tizen",
    BLACKBERRY: "blackberry",
    BLACKBERRY10: "bb10",
    FIREFOX: "firefox",
    MSIE: "msie",
    SAFARI: "safari",
    OPERA: "opera",
    CHROME: "chrome",
    OTHER: "other"
};
fourSq.util.devices.detect = function() {
    var a = fourSq.util.devices.getUserAgent().toLowerCase();
    return -1 !== a.indexOf("iemobile") || -1 !== a.indexOf("windows phone") ? fourSq.util.devices.WINDOWS_PHONE : -1 !== a.indexOf("iphone") || -1 !== a.indexOf("ipod") ? fourSq.util.devices.IPHONE : -1 !== a.indexOf("ipad") ? fourSq.util.devices.IPAD : -1 !== a.indexOf("android") ? fourSq.util.devices.ANDROID : -1 !== a.indexOf("blackberry") ? fourSq.util.devices.BLACKBERRY : -1 !== a.indexOf("bb10") ? fourSq.util.devices.BLACKBERRY10 : -1 !== a.indexOf("opera") ?
        fourSq.util.devices.OPERA : -1 !== a.indexOf("msie") ? fourSq.util.devices.MSIE : -1 !== a.indexOf("firefox") ? fourSq.util.devices.FIREFOX : -1 !== a.indexOf("chrome") ? fourSq.util.devices.CHROME : -1 !== a.indexOf("tizen") ? fourSq.util.devices.TIZEN : -1 !== a.indexOf("safari") ? fourSq.util.devices.SAFARI : fourSq.util.devices.OTHER
};
fourSq.util.devices.getUserAgent = function() {
    return navigator.userAgent
};
fourSq.util.devices.getVersion = function(a) {
    if (a || fourSq.isUndefinedOrNull(fourSq.util.devices.calculatedVersion_)) a = fourSq.util.devices.getUserAgent().toLowerCase().match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0], fourSq.util.devices.calculatedVersion_ = parseFloat("opera" == a[1] && a[4] ? a[4] : a[2]);
    return fourSq.util.devices.calculatedVersion_
};
fourSq.util.devices.isTouchscreen = "ontouchstart" in window;
fourSq.util.devices.isIPhone = function() {
    return fourSq.util.devices.detect() == fourSq.util.devices.IPHONE
};
fourSq.util.devices.isIPod = function() {
    return -1 !== fourSq.util.devices.getUserAgent().toLowerCase().indexOf("ipod")
};
fourSq.util.devices.isIPhoneEmbedded = function() {
    return fourSq.util.devices.detect() == fourSq.util.devices.IPHONE && -1 == fourSq.util.devices.getUserAgent().toLowerCase().indexOf("safari")
};
fourSq.util.devices.isIPad = function() {
    return fourSq.util.devices.detect() == fourSq.util.devices.IPAD
};
fourSq.util.devices.isAndroid = function() {
    return fourSq.util.devices.detect() == fourSq.util.devices.ANDROID
};
fourSq.util.devices.isBlackberry = function() {
    return fourSq.util.devices.detect() == fourSq.util.devices.BLACKBERRY || fourSq.util.devices.detect() == fourSq.util.devices.BLACKBERRY10
};
fourSq.util.devices.isFirefox = function() {
    return fourSq.util.devices.detect() == fourSq.util.devices.FIREFOX
};
fourSq.util.devices.isMsie = function() {
    return fourSq.util.devices.detect() == fourSq.util.devices.MSIE
};
fourSq.util.devices.isMsie8 = function() {
    return fourSq.util.devices.detect() === fourSq.util.devices.MSIE && 0 === $.browser.version.indexOf("8.")
};
fourSq.util.devices.isWindowsPhone = function() {
    return fourSq.util.devices.detect() == fourSq.util.devices.WINDOWS_PHONE
};
fourSq.util.devices.isTizen = function() {
    return fourSq.util.devices.detect() == fourSq.util.devices.TIZEN
};
fourSq.util.devices.isSafari = function() {
    return fourSq.util.devices.detect() == fourSq.util.devices.SAFARI
};
fourSq.util.devices.isOpera = function() {
    return fourSq.util.devices.detect() == fourSq.util.devices.OPERA
};
fourSq.util.devices.isChrome = function() {
    return fourSq.util.devices.detect() == fourSq.util.devices.CHROME
};
fourSq.util.devices.isChromeIos = function() {
    return 0 <= fourSq.util.devices.getUserAgent().toLowerCase().indexOf("crios")
};
fourSq.util.devices.isIos9 = function() {
    return fourSq.util.devices.isIPhone() && 0 <= fourSq.util.devices.getUserAgent().toLowerCase().indexOf("iphone os 9_")
};
fourSq.util.devices.isChromeAndroidGte25 = function() {
    var a = fourSq.util.devices.getUserAgent().toLowerCase().match(/android.+chrome\/(\d+)/);
    return !!a && 25 <= a[1]
};
fourSq.util.devices.isAndroidLte2p3pX = function() {
    var a = fourSq.util.devices.getUserAgent().toLowerCase().match(/android (\d+)\.(\d+)\./);
    return !!a && 2 >= a[1] && 3 >= a[2]
};
fourSq.util.devices.isTwitterEmbed = function() {
    return -1 !== fourSq.util.devices.getUserAgent().toLowerCase().indexOf("twitter")
};
fourSq.util.devices.isTouch = function() {
    return fourSq.util.devices.isIPhone() || fourSq.util.devices.isAndroid()
};
fourSq.util.devices.isTouchIncludingIPad = function() {
    return fourSq.util.devices.isTouch() || fourSq.util.devices.isIPad()
};
fourSq.exportSymbol = function(a, c) {
    var b = a.split("."),
        d = b.splice(b.length - 1),
        k = window;
    _.each(b, function(a) {
        k = k[a] = k[a] || {}
    });
    k[d] = c
};
fourSq.util.randomInt = function(a, c) {
    return Math.floor(Math.random() * (c - a + 1)) + a
};
fourSq.util.randomBoolean = function() {
    return !!fourSq.util.randomInt(0, 1)
};
fourSq.isString = function(a) {
    return "[object String]" === window.toString.call(a)
};
fourSq.collection.CollectionHelper = {
    mergeQueues: function(a, c, b, d) {
        a = _.reject(a, function(a) {
            return 0 == a.length
        });
        if (0 == a.length) return [];
        if (1 == a.length) {
            c = 0 < b ? Math.min(b, a[0].length) : a[0].length;
            c = a[0].length - c;
            var k = a[0].slice(c);
            d && (a[0].length = c);
            return k
        }
        for (var k = [], l = 0, h = 0; h < a.length; h++) k.push(a[h].length - 1), l += a[h].length;
        b = 0 < b ? Math.min(b, l) : l;
        b = l - b;
        h = [];
        for (l -= 1; l >= b; l--) {
            for (var e = -1, g = null, f = 0; f < a.length; f++)
                if (0 <= k[f]) {
                    var p = c(a[f][k[f]]);
                    0 > e ? (e = f, g = p) : p > g && (e = f, g = p)
                } h[l - b] = a[e][k[e]];
            d && a[e].pop();
            k[e]--
        }
        return h
    },
    toMap: function(a, c) {
        return _.foldl(a, function(a, d) {
            a[c(d)] = d;
            return a
        }, {})
    },
    toSet: function(a) {
        return _.foldl(a, function(a, b) {
            a[b] = !0;
            return a
        }, {})
    },
    keys: function(a) {
        var c = [],
            b;
        for (b in a) a.hasOwnProperty(b) && c.push(b);
        return c
    },
    partition: function(a, c) {
        var b = [],
            d = [];
        _(a).each(function(a) {
            c(a) ? b.push(a) : d.push(a)
        });
        return [b, d]
    }
};
fourSq.inherits = function(a, c) {
    function b() {}
    b.prototype = c.prototype;
    a.__super__ = c.prototype;
    a.prototype = new b;
    a.prototype.constructor = a
};
fourSq.classExtend = function(a, c, b) {
    var d = function() {
        a.apply(this, arguments)
    };
    _.extend(d, a);
    fourSq.inherits(d, a);
    fourSq.isDefinedAndNotNull(c) && _.extend(d.prototype, c);
    fourSq.isDefinedAndNotNull(b) && _.extend(d, b);
    return d
};
fourSq.classInit = function() {
    function a() {
        return c.apply(this, b)
    }
    var c = this,
        b = arguments;
    a.prototype = c.prototype;
    return new a
};
fourSq.Class = function() {
    this.initialize.apply(this, arguments)
};
fourSq.Class.prototype.initialize = function() {};
fourSq.Class.extend = function(a, c) {
    var b = fourSq.classExtend(this, a, c);
    b.extend = fourSq.Class.extend;
    return b
};
fourSq.EventTarget = function(a, c) {};
fourSq.EventTarget = fourSq.Class.extend({
    on: function(a, c, b) {
        return this.on_(a, c, b)
    },
    bind: function() {
        return this.on.apply(this, arguments)
    },
    onOnce: function(a, c, b) {
        return this.on_(a, c, b, !0)
    },
    on_: function(a, c, b, d) {
        if (fourSq.isUndefinedOrNull(c)) throw Error("Event callback not specified.");
        c = {
            callback: c,
            context: b,
            once: d
        };
        this.listeners_ = this.listeners_ || {};
        (this.listeners_[a] = this.listeners_[a] || []).push(c);
        return this
    },
    off: function(a, c, b) {
        if (fourSq.isUndefinedOrNull(a)) return delete this.listeners_, this;
        if (!this.listeners_) return this;
        this.listeners_[a] = _.filter(this.listeners_[a], function(a) {
            return !!(c && a.callback !== c || b && a.context !== b)
        });
        return this
    },
    trigger: function(a, c) {
        var b;
        if (fourSq.isUndefinedOrNull(this.listeners_) || fourSq.isUndefinedOrNull(b = this.listeners_[a])) return this;
        var d = Array.prototype.slice.call(arguments, 1),
            k = this,
            l;
        _.each(b, function(a) {
            a.callback.apply(a.context || k, d);
            a.once && (l = l || [], l.push(a))
        });
        l && _.each(l, function(b) {
            k.off(a, b.callback, b.context)
        });
        return this
    }
});
fourSq.retina.COOKIE_NAME = "PixelDensity";
fourSq.retina.init = function() {
    if (fourSq.isDefinedAndNotNull(window.matchMedia)) {
        var a = window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 1.5dppx)");
        a && a.addListener(fourSq.retina.updateCookie)
    }
    fourSq.isUndefinedOrNull($.cookie(fourSq.retina.COOKIE_NAME)) ? fourSq.retina.setCookie() : fourSq.retina.updateCookie()
};
fourSq.retina.setCookie = function() {
    $.cookie(fourSq.retina.COOKIE_NAME, (window.devicePixelRatio || 1).toString(), {
        expires: 365,
        path: "/"
    })
};
fourSq.retina.updateCookie = function() {
    var a = $.cookie(fourSq.retina.COOKIE_NAME);
    parseInt(a, 10) !== (window.devicePixelRatio || 1) && fourSq.retina.setCookie()
};
fourSq.retina.isRetina = function() {
    return 1 < window.devicePixelRatio
};
fourSq.util.History = function(a, c) {};
fourSq.util.History = fourSq.EventTarget.extend({
    initialize: function() {
        this.isSupported_ = fourSq.util.History.isSupported();
        this.statePushed_ = !1;
        if (this.isSupported_) $(window).on("popstate", fourSq.bind(this.onPopState_, this))
    },
    onPopState_: function(a) {
        this.statePushed_ && this.trigger(fourSq.util.History.Events.CHANGE, a.originalEvent.state)
    },
    onChange: function(a) {
        this.on(fourSq.util.History.Events.CHANGE, a)
    },
    back: function() {
        this.isSupported_ && window.history.back()
    },
    replace: function(a, c) {
        if (this.isSupported_) {
            this.statePushed_ = !0;
            var b = c || {};
            fourSq.isDefinedAndNotNull(a) && "" !== a ? window.history.replaceState(b, "state", a) : window.history.replaceState(b, "state")
        }
    },
    push: function(a, c) {
        if (this.isSupported_) {
            this.statePushed_ = !0;
            var b;
            window.history.pushState(c || b, "state", a)
        }
    }
}, {
    isSupported: function() {
        return !(!window.history || !window.history.pushState)
    },
    Events: {
        CHANGE: "change"
    }
});
fourSq.util.Storage = function(a) {};
fourSq.util.Storage = fourSq.Class.extend({
    initialize: function(a) {
        fourSq.util.Storage.__super__.initialize.apply(this, arguments);
        this.storage_ = a
    },
    enabled: function() {
        if (fourSq.isUndefinedOrNull(this.isEnabled_))
            if (fourSq.isDefinedAndNotNull(this.storage_)) {
                try {
                    this.storage_.setItem("test", "t")
                } catch (a) {
                    this.isEnabled_ = !1
                }
                this.storage_.removeItem("test");
                this.isEnabled_ = !0
            } else this.isEnabled_ = !1;
        return this.isEnabled_
    },
    exists: function(a) {
        return fourSq.isDefinedAndNotNull(this.get(a))
    },
    maybeExpire_: function(a) {
        var c =
            a + fourSq.util.Storage.EXPIRY_SUFFIX;
        if (this.enabled()) {
            var b = this.storage_.getItem(c),
                d = parseInt(b, 10);
            fourSq.isDefinedAndNotNull(b) && _.isNumber(d) && d < +new Date && (this.remove(a), this.remove(c))
        }
    },
    compact: function() {
        if (this.enabled())
            for (var a in this.storage_) this.maybeExpire_(a)
    },
    get: function(a) {
        return this.enabled() ? (this.maybeExpire_(a), this.storage_.getItem(a)) : null
    },
    getWithDefault: function(a, c) {
        var b = this.get(a);
        return fourSq.isDefinedAndNotNull(b) ? b : c
    },
    set: function(a, c, b) {
        return c && this.enabled() ?
            (this.storage_.setItem(a, c), _.isNumber(b) && this.storage_.setItem(a + fourSq.util.Storage.EXPIRY_SUFFIX, "" + (+new Date + 1E3 * b)), !0) : !1
    },
    remove: function(a) {
        this.enabled() && this.storage_.removeItem(a)
    },
    setBoolean: function(a, c, b) {
        return this.set(a, c ? fourSq.util.Storage.TRUE : fourSq.util.Storage.FALSE, b)
    },
    getBoolean: function(a) {
        switch (this.get(a)) {
            case fourSq.util.Storage.TRUE:
                return !0;
            case fourSq.util.Storage.FALSE:
                return !1;
            default:
                return null
        }
    },
    getBooleanWithDefault: function(a, c) {
        var b = this.getBoolean(a);
        return fourSq.isDefinedAndNotNull(b) ? b : c
    },
    setNumber: function(a, c, b) {
        return this.set(a, "" + c, b)
    },
    getNumber: function(a) {
        var c = this.get(a);
        a = parseInt(this.get(a), 10);
        return fourSq.isUndefinedOrNull(c) || isNaN(a) ? null : a
    },
    getNumberWithDefault: function(a, c) {
        var b = this.getNumber(a);
        return fourSq.isDefinedAndNotNull(b) ? b : c
    },
    setArray: function(a, c, b) {
        try {
            var d = JSON.stringify(c);
            return this.set(a, d, b)
        } catch (k) {
            return !1
        }
    },
    getArray: function(a) {
        try {
            var c = this.get(a);
            if (fourSq.isDefinedAndNotNull(c)) {
                var b = JSON.parse(c);
                if (!(b instanceof Array)) throw Error();
                return b
            }
            return null
        } catch (d) {
            return null
        }
    },
    getArrayWithDefault: function(a, c) {
        var b = this.getArray(a);
        return fourSq.isDefinedAndNotNull(b) ? b : c
    },
    setObject: function(a, c, b) {
        try {
            var d = JSON.stringify(c);
            return this.set(a, d, b)
        } catch (k) {
            return !1
        }
    },
    getObject: function(a) {
        try {
            var c = this.get(a);
            if (fourSq.isDefinedAndNotNull(c)) {
                var b = JSON.parse(c);
                if (!(b instanceof Object)) throw Error();
                return b
            }
            return null
        } catch (d) {
            return null
        }
    },
    getObjectWithDefault: function(a, c) {
        var b =
            this.getObject(a);
        return fourSq.isDefinedAndNotNull(b) ? b : c
    }
}, {
    TRUE: "t",
    FALSE: "f",
    EXPIRY_SUFFIX: "_EXPIRY"
});
var tempLocalStorage = null,
    tempSessionStorage = null;
try {
    tempLocalStorage = window.localStorage, tempSessionStorage = window.sessionStorage
} catch (e$$98) {}
fourSq.util.localStorage = new fourSq.util.Storage(tempLocalStorage);
fourSq.util.sessionStorage = new fourSq.util.Storage(tempSessionStorage);
fourSq.ui.View = function(a) {
    this.options = a || {};
    fourSq.isDefinedAndNotNull(this.options.model) && (this.model = this.options.model);
    fourSq.isDefinedAndNotNull(this.options.collection) && (this.collection = this.options.collection);
    this.$el = this.el = null;
    fourSq.isDefinedAndNotNull(this.options.el) ? this.setEl_($(this.options.el)) : (this.tagName = fourSq.isDefinedAndNotNull(this.options.tagName) ? this.options.tagName : "div", this.setEl_(document.createElement(this.tagName)));
    fourSq.isDefinedAndNotNull(this.options.id) &&
        (this.id = this.options.id, this.$el.attr("id", this.id));
    fourSq.isDefinedAndNotNull(this.options.className) && (this.className = this.options.className, this.$el.addClass(this.className));
    this.initialize.apply(this, arguments)
};
fourSq.inherits(fourSq.ui.View, fourSq.EventTarget);
fourSq.ui.View.prototype.setEl_ = function(a) {
    fourSq.isDefinedAndNotNull(a) && (this.$el = $(a).first(), this.el = this.$el.get(0))
};
fourSq.ui.View.prototype.canDecorate = function() {
    throw Error("Unimplemented");
};
fourSq.ui.View.prototype.decorate = function() {
    return this
};
fourSq.ui.View.prototype.render = function() {
    return this
};
fourSq.ui.View.extend = fourSq.Class.extend;
fourSq.ui.dialog.Dialog = function(a) {};
fourSq.ui.dialog.Dialog = fourSq.ui.View.extend({
    className_: "",
    overlayClass_: "",
    contentClassName: "",
    title_: "",
    hasCloseButton_: !0,
    isModal_: !0,
    opacity_: .2,
    isRendered_: !1,
    positionTop_: !0,
    closeOnEscape_: !0,
    initialize: function(a) {
        a.contentText && (this.contentText_ = a.contentText);
        0 == a.isModal && (this.isModal_ = !1);
        0 == a.hasCloseButton && (this.hasCloseButton_ = !1);
        a.opacity && (this.opacity_ = a.opacity);
        a.title && (this.title_ = a.title);
        a.contentElement && (this.contentElement_ = a.contentElement);
        0 == a.positionTop && (this.positionTop_ = !1);
        0 == a.closeOnEscape && (this.closeOnEscape_ = !1);
        this.className_ = a.className || "";
        this.overlayClass_ = a.overlayClass || "";
        this.contentClassName_ = a.contentClassName || "";
        if (this.contentText_ && this.contentElement_) throw Error("Specify either 'contentElement' or 'contentText', not both");
        return this
    },
    close: function() {
        this.overlayDiv_.remove();
        this.$el.detach();
        $(document.body).removeClass("withVisibleModal");
        var a = $("#wrapper");
        if (a.length) {
            var c = parseInt($("body").css("margin-top"), 10),
                a = -parseInt(a.css("top"),
                    10) + c;
            $(window).scrollTop(a)
        }
        fourSq.ui.dialog.Dialog.NUMBER_OF_DIALOGS--;
        this.trigger(fourSq.ui.dialog.Dialog.Events.DIALOG_CLOSE);
        this.isRendered_ = !1
    },
    decorate: function() {
        this.overlayDiv_.css("opacity", this.opacity_);
        this.isModal_ && this.overlayDiv_.click(fourSq.bind(this.close, this));
        this.$el.show();
        this.setPosition_();
        $(window).resize(fourSq.bind(this.setPosition_, this));
        this.closeOnEscape_ && $(window).keydown(fourSq.bind(function(a) {
            27 == a.keyCode && this.close()
        }, this));
        $(".close", this.el).click(fourSq.bind(this.close,
            this))
    },
    getContentContainer: function() {
        return this.container_
    },
    getPageScroll_: function() {
        var a, c;
        window.pageYOffset ? (c = window.pageYOffset, a = window.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (c = document.documentElement.scrollTop, a = document.documentElement.scrollLeft) : document.body && (c = document.body.scrollTop, a = document.body.scrollLeft);
        return {
            xScrollOffset: a,
            yScrollOffset: c
        }
    },
    getPageHeight_: function() {
        var a;
        window.innerHeight ? a = window.innerHeight : document.documentElement &&
            document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && (a = document.body.clientHeight);
        return a
    },
    hide: function() {
        this.overlayDiv_.hide();
        this.$el.hide();
        return this
    },
    isShown: function() {
        return this.$el.is(":visible")
    },
    render_: function() {
        this.setEl_($(templates.fourSq.ui.dialog.modalDialog({
            hasCloseButton: this.hasCloseButton_,
            title: this.title_,
            className: this.className_,
            overlayClass: this.overlayClass_,
            contentClassName: this.contentClassName_
        })));
        this.overlayDiv_ = $(templates.fourSq.ui.dialog.modalOverlay({
            overlayClass: this.overlayClass_
        }));
        $("body").prepend(this.$el);
        $("body").prepend(this.overlayDiv_);
        this.container_ = this.$el.find(".contents");
        this.loadingImageContainer_ = this.$el.find(".modalLoadingContainer");
        this.renderContent();
        this.popupContainer_ = this.$el.find(".popup");
        this.isRendered_ = !0;
        this.decorate();
        return this
    },
    renderContent: function() {
        this.contentElement_ ? this.container_.empty().append(this.contentElement_) : this.contentText_ ? this.container_.text(this.contentText_) : this.setLoading(!0)
    },
    setLoading: function(a) {
        !0 === a ? (this.loadingImageContainer_.addClass("loading"),
            this.container_.hide()) : (this.loadingImageContainer_.removeClass("loading"), this.container_.show())
    },
    show: function() {
        var a = $(window).scrollTop(),
            c = parseInt($("body").css("margin-top"), 10),
            a = a - c;
        $("#wrapper").css("top", -a);
        $(document.body).addClass("withVisibleModal");
        this.getPageScroll_();
        this.isRendered_ ? (this.overlayDiv_.show(), this.$el.show()) : this.render_();
        fourSq.ui.dialog.Dialog.NUMBER_OF_DIALOGS++;
        this.trigger(fourSq.ui.dialog.Dialog.Events.DIALOG_OPEN);
        return this
    },
    setPosition_: function() {
        this.positionTop_ &&
            this.$el.css("top", this.getPageHeight_() / 10 + this.getPageScroll_().yScrollOffset);
        this.$el.css("left", $(window).width() / 2 - this.popupContainer_.outerWidth() / 2 + this.getPageScroll_().xScrollOffset)
    }
}, {
    Events: {
        DIALOG_OPEN: "dopen",
        DIALOG_CLOSE: "dclose"
    },
    NUMBER_OF_DIALOGS: 0
});
fourSq.views.TraceView = function(a, c) {};
fourSq.views.TraceView = fourSq.ui.View.extend({
    initialize: function() {
        var a = $(templates.fourSq.debug.traceNode({
            env: fourSq.config.env
        }));
        $(document.body).append(a);
        this.countNode_ = a.find(".count");
        this.traceHolder_ = a.find("#trace");
        a.find("#traceTrigger").click(function() {
            a.hasClass("off") ? a.addClass("on").removeClass("off") : a.addClass("off").removeClass("on")
        });
        fourSq.debug.Tracer.getInstance().on("add", fourSq.bind(this.onNewTraceItems_, this))
    },
    onNewTraceItems_: function(a) {
        if ("noop" !== a.name) {
            var c =
                fourSq.views.TraceView.createTracewebLink(a);
            this.traceHolder_.append(c);
            c = parseInt(this.countNode_.text(), 10);
            this.countNode_.text(c + a.traces.length)
        }
    }
});
fourSq.views.TraceView.leastCommonStackElement = function(a, c) {
    for (var b = a.length - 1, d = c.length - 1; 0 < b && 0 < d && a[b] === c[d];) b -= 1, d -= 1;
    return b < a.length - 1 && d < c.length - 1 && a[b] != c[d] ? [a[b], c[d]] : null
};
fourSq.views.TraceView.createTracewebLink = function(a) {
    return $(templates.fourSq.debug.traceLink({
        traceId: a
    }))
};
fourSq.views.TraceView.createContentsNode = function(a) {
    for (var c = {}, b = {}, d = 0; d < a.traces.length; d++) {
        var k = a.traces[d];
        k.prevOffset = k.startTime - (b[k.threadId] || k.startTime);
        if (fourSq.isDefinedAndNotNull(k.endTime) && (b[k.threadId] = k.endTime, k.backtrace)) {
            var l = c[k.threadId];
            l && (k.stackGap = fourSq.views.TraceView.leastCommonStackElement(l, k.backtrace));
            c[k.threadId] = k.backtrace
        }
    }
    var h = $(templates.fourSq.debug.traceItems({
        trace: a
    }));
    h.find(".traceViewToggle").click(function(a) {
        a.preventDefault();
        a = h.find(".traceList");
        var b = h.find(".traceTimeline");
        a.is(":visible") ? (a.hide(), b.show()) : (a.show(), b.hide())
    });
    var e = h.find(".notRpc").hide();
    h.find(".toggleNonRpc").click(function(a) {
        a.preventDefault();
        e.toggle()
    });
    h.find(".traceTimeline tr.traceRow").click(function() {
        $(this).next().toggle()
    });
    h.find(".expandTraceAnchor").click(function(a) {
        a.preventDefault();
        $(this).next().toggle();
        return !0
    });
    h.find(".traceweb-link").each(function() {
        var a = $(this).attr("href"),
            b = $(this).data("id").replace(/ObjectId\("|"\)/g, "");
        $(this).attr("href",
            a + b);
        $(this).show()
    });
    a = h.find(".trace-item");
    _.each(a.get(), function(a) {
        var b = $(a);
        b.find(".toggler").click(function() {
            b.hasClass("open") ? b.removeClass("open").addClass("closed") : b.removeClass("closed").addClass("open")
        })
    });
    return h
};
fourSq.net.Util = {
    stripParamsFromQuery: function(a) {
        var c = new fourSq.net.QueryString({
            query: window.location.search
        });
        a = c.strip(a);
        c = c.toDisplayString();
        c = window.location.href.replace(/\?[^\#]*/, c ? "?" + c : "");
        (new fourSq.util.History).replace(c);
        return a
    },
    stripParamsFromHash: function(a) {
        var c = new fourSq.net.QueryString({
            query: window.location.hash.substring(1)
        });
        a = c.strip(a);
        c = c.toDisplayString();
        c = window.location.href.replace(/(\#.*)?$/, c ? "#" + c : "");
        (new fourSq.util.History).replace(c);
        return a
    }
};
fourSq.stats.Action = {
    build: function(a, c) {
        var b = c || {},
            d = b.view || fourSq.stats.Util.getViewName(),
            k = c && c.timestamp ? c.timestamp : +new Date,
            l = fourSq.stats.SessionId.get(),
            h = b.isAppInitiated ? fourSq.stats.action.Initiator.CLIENT_APP : fourSq.stats.action.Initiator.CLIENT_USER,
            d = fourSq.api.models.companion.log.ActionName.build(a, d, b.section, b.component, b.componentIndex, b.element),
            e = _.extend({}, fourSq.stats.Util.getDefaultLoggingIds(), b.ids);
        return fourSq.api.models.companion.log.Action.build(d, h, b.details, l,
            e, k)
    },
    buildWithDefaults: function(a, c, b) {
        c = _.extend({}, c, b);
        return fourSq.stats.Action.build(a, c)
    },
    builder: function(a, c) {
        return function() {
            return fourSq.stats.Action.build(a, c)
        }
    },
    buildData: function(a) {
        return a
    }
};
fourSq.stats.SessionId = {
    get: function() {
        var a = +new Date + "-" + Math.floor(1E3 * Math.random());
        return function() {
            return a
        }
    }()
};
fourSq.stats.Detail = function(a) {
    this.details_ = {};
    this.incrs_ = [];
    this.metrics_ = [];
    this.experimentActions_ = [];
    this.actions_ = [];
    this.onFinish_ = a || function() {}
};
fourSq.stats.Detail.prototype = {
    setEvent: function(a) {
        this.add("event", a);
        return this
    },
    getEvent: function() {
        return this.details_.get("event")
    },
    hasEvent: function() {
        return fourSq.isDefinedAndNotNull(this.getEvent())
    },
    add: function(a, c) {
        if (_.isFunction(c)) return fourSq.debug.info("fourSq.stats.Detail.prototype.add called with function for key: " + a), this;
        this.details_[a] = c;
        return this
    },
    addAll: function(a) {
        _.isFunction(a.toJSON) && (a = a.toJSON());
        _(a).each(fourSq.bind(function(a, b) {
            this.add(b, a)
        }, this));
        return this
    },
    getDetails: function() {
        return this.details_
    },
    hasDetails: function() {
        return !_.isEmpty(this.details_)
    },
    addActions: function(a) {
        var c = _.toArray(arguments);
        this.actions_ = this.actions_.concat(c);
        return this
    },
    getActions: function() {
        return this.actions_
    },
    hasActions: function() {
        return !!this.actions_.length
    },
    incr: function(a, c) {
        this.incrs_[this.incrs_.length] = {
            path: a,
            count: c || 1
        };
        return this
    },
    getIncrements: function() {
        return this.incrs_
    },
    hasIncrements: function() {
        return !!this.incrs_.length
    },
    logMetric: function(a, c) {
        this.metrics_[this.metrics_.length] = {
            path: a,
            count: c || 1
        };
        return this
    },
    getMetrics: function() {
        return this.metrics_
    },
    hasMetrics: function() {
        return !!this.metrics_.length
    },
    logExperimentAction: function(a, c, b) {
        this.experimentActions_.push({
            loggedName: a,
            action: c,
            count: b || 1
        });
        return this
    },
    getExperimentActions: function() {
        return this.experimentActions_
    },
    hasExperimentActions: function() {
        return !!this.experimentActions_.length
    },
    toJSON: function() {
        var a = _.extend({}, this.details_);
        (this.incrs_.length || this.metrics_.length) && _.extend(a, {
            statmon: {
                incrs: this.incrs_,
                metrics: this.metrics_
            }
        });
        this.experimentActions_.length && _.extend(a, {
            expact: this.experimentActions_
        });
        return a
    },
    finish: function(a) {
        this.onFinish_(this, a)
    }
};
fourSq.stats.Transport = function() {};
fourSq.stats.Transport.prototype.send = function(a, c, b) {};
fourSq.stats.WebloggerTransport = function(a, c) {};
fourSq.stats.WebloggerTransport = fourSq.Class.extend({
    doTransmit: function(a, c) {},
    getLoggerPath: function(a) {
        return fourSq.isDefinedAndNotNull(a) ? "/private/logger?" + this.serializeLogJson(a) : "/private/logger"
    },
    serializeLogJson: function(a) {
        return _(a).map(function(a, b) {
            var d = encodeURIComponent(_.isObject(a) ? JSON.stringify(a) : a);
            return encodeURIComponent(b).replace(/(%..)+/g, "-") + "\x3d" + d
        }).join("\x26")
    },
    send: function(a, c, b) {
        b = fourSq.isDefinedAndNotNull(b) ? b : function() {};
        this.hasPayload_(a) ? (a = this.detailToJson_(a),
            a = _.extend(a, c || {}), this.doTransmit(a, b)) : b()
    },
    detailToJson_: function(a) {
        var c = _.extend({}, a.getDetails());
        (a.hasIncrements() || a.hasMetrics()) && _.extend(c, {
            statmon: {
                incrs: a.getIncrements(),
                metrics: a.getMetrics()
            }
        });
        a.hasExperimentActions() && _.extend(c, {
            expact: a.getExperimentActions()
        });
        return c
    },
    hasPayload_: function(a) {
        return a.hasDetails() || a.hasMetrics() || a.hasIncrements() || a.hasExperimentActions()
    }
});
fourSq.stats.GifTransport = function(a, c) {};
fourSq.stats.GifTransport = fourSq.stats.WebloggerTransport.extend({
    doTransmit: function(a, c) {
        var b = this.getLoggerPath(a),
            d = new Image(1, 1);
        d.onload = fourSq.bind(function() {
            try {
                d.onload = null, c()
            } catch (a) {}
        }, this);
        d.onerror = fourSq.bind(c, this);
        fourSq.debug.debug("GifTransport: " + b);
        d.src = b
    }
});
fourSq.stats.PostTransport = function(a, c) {};
fourSq.stats.PostTransport = fourSq.stats.WebloggerTransport.extend({
    doTransmit: function(a, c) {
        var b = {
            cache: !1,
            data: this.serializeLogJson(a),
            success: c,
            type: "POST",
            url: this.getLoggerPath()
        };
        $.ajax(b);
        fourSq.debug.debug("PostTransport data: " + JSON.stringify(a))
    }
});
fourSq.stats.LogActionsTransport = function(a, c) {};
fourSq.stats.LogActionsTransport = fourSq.Class.extend({
    send: function(a, c, b) {
        a.hasActions() ? fourSq.api.services.Private.logActions({
            actions: a.getActions(),
            isMobile: fourSq.stats.Util.isMobile()
        }, b, b) : fourSq.isDefinedAndNotNull(b) && b()
    }
});
fourSq.stats.Oids = {
    build: function(a) {
        return fourSq.api.models.companion.log.Oids.build(a)
    }
};
fourSq.stats.Timer = function() {
    this.stop_ = this.start_ = null
};
fourSq.stats.Timer.prototype = {
    start: function() {
        this.start_ = +new Date
    },
    stop: function() {
        if (fourSq.isUndefinedOrNull(this.start_)) throw "Can't call stop before calling start.";
        this.stop_ = +new Date
    },
    elapsed: function() {
        if (fourSq.isUndefinedOrNull(this.stop_)) throw "Can\t call elapsed before stopping timer.";
        return this.stop_ - this.start_
    }
};
fourSq.stats.Util = {
    logNotificationClick: function(a) {
        0 < a.length && (a = fourSq.stats.Action.build(fourSq.stats.action.Action.CLICK, {
            element: fourSq.stats.action.Element.TRAY_NOTIFICATION,
            isAppInitiated: !1,
            ids: fourSq.api.models.companion.log.Oids.build({
                notificationId: a[0]
            })
        }), fourSq.stats.logActions(a))
    },
    logLinkClick: function(a, c, b) {
        var d = a.attr("href");
        a.on(b.isTouch ? "mouseup" : "click", function(a) {
            a.preventDefault();
            a = fourSq.isDefinedAndNotNull(b.collector) ? b.collector.log(c) : fourSq.stats.log(c);
            b.beforeFinish &&
                b.beforeFinish(a);
            a.finish();
            _.delay(function() {
                fourSq.util.redirect(d)
            }, fourSq.stats.REDIRECT_DELAY)
        })
    },
    logClickAction: function(a, c) {
        a.click(function() {
            var a = fourSq.stats.Action.build(fourSq.stats.action.Action.CLICK, c);
            fourSq.stats.logActions(a)
        })
    },
    logActionOnLinkClick: function(a, c, b) {
        b = b || {
            isTouch: void 0,
            actionGeneratorOptions: void 0
        };
        var d = a.attr("href");
        if (0 < a.length && fourSq.isUndefinedOrNull(d)) throw Error("logActionOnLinkClick: href is undefined or null");
        var k = b.actionGeneratorOptions || {};
        a.on(b.isTouch ? "mouseup" : "click", function(b) {
            var h = c(k);
            if (fourSq.util.clickOpensInNewTab(b, a)) return fourSq.stats.logActions(h), !0;
            fourSq.stats.logActionWithDelay(h, function() {
                fourSq.util.redirect(d)
            });
            return !1
        })
    },
    getViewName: function() {
        return fourSq.pageViewName ? fourSq.pageViewName() : fourSq.stats.action.View.UNKNOWN
    },
    getDefaultLoggingIds: function() {
        return fourSq.defaultLoggingIds || {}
    },
    isMobile: function() {
        return !!fourSq.logAsMobile
    },
    logPageLoad: function(a) {
        a = _.extend({}, {
                ids: void 0,
                additionalLoggingDetails: {}
            },
            a);
        var c = $(window),
            c = _.extend({}, a.additionalLoggingDetails, {
                referrer: document.referrer || void 0,
                path: window.location.pathname || void 0,
                hash: window.location.hash || void 0,
                query: window.location.search || void 0,
                vp: c.height() + "," + c.width()
            });
        a = fourSq.stats.Action.build(fourSq.stats.action.Action.PAGE_LOAD, {
            details: c,
            isAppInitiated: !0,
            ids: a.ids
        });
        fourSq.stats.logActions(a)
    }
};
fourSq.stats.Collector = function(a) {
    this.config_ = a || {};
    this.id = this.config_.id || fourSq.stats.Collector.instanceId();
    this.transports_ = [];
    this.transportsProtected_ = !1;
    this.initializeTransports_()
};
fourSq.stats.Collector.instanceId = function() {
    var a = 0;
    return function() {
        return fourSq.stats.SessionId.get() + "-" + a++
    }
}();
fourSq.stats.Collector.prototype = {
    initializeTransports_: function() {
        var a = new fourSq.stats.LogActionsTransport;
        this.transports_.push(a)
    },
    protectTransports: function() {
        this.transportsProtected_ = !0;
        return this
    },
    replaceTransports: function(a) {
        this.transportsProtected_ ? fourSq.debug.error("Transports on collector " + this.id + " are protected and cannot be replaced.") : this.transports_ = _.clone(a) || []
    },
    coreLogData_: function() {
        var a = {};
        a._ts = +new Date;
        a._cid = this.id;
        a._sid = fourSq.stats.SessionId.get();
        a._p = window.location.href;
        _.extend(a, this.config_.defaults);
        return a
    },
    onDetailFinish_: function(a, c) {
        this.send(a, c)
    },
    log: function(a) {
        var c = new fourSq.stats.Detail(fourSq.bind(this.onDetailFinish_, this));
        fourSq.isDefinedAndNotNull(a) && c.setEvent(a);
        return c
    },
    send: function(a, c) {
        var b = this.coreLogData_(),
            d = this.transports_.length,
            k = function() {
                d--;
                0 == d && c && c(this)
            };
        _.each(this.transports_, function(c) {
            c.send(a, b, k)
        })
    }
};
fourSq.stats.TimingStats = function(a, c) {};
fourSq.stats.TimingStats = fourSq.Class.extend({
    initialize: function() {
        this.customCollector_ = new fourSq.stats.Collector;
        this.customCollector_.replaceTransports([new fourSq.stats.PostTransport])
    },
    collectAndSend: function() {
        if (fourSq.isDefinedAndNotNull(window.timingData)) {
            var a = window.timingData.results || void 0,
                c = fourSq.isDefinedAndNotNull(window.performance) ? window.performance.timing : void 0,
                b = fourSq.util.devices.detect(),
                d = fourSq.currentPage,
                k = ["newfe", "timing", fourSq.isDefinedAndNotNull(d) && _.isFunction(d.pageViewName) ?
                    d.pageViewName() : "misc", b
                ],
                l = this.customCollector_.log("page-timing-complete"),
                h = void 0,
                b = _.filter(c, function(a) {
                    return _.isNumber(a) && 0 < a
                });
            fourSq.isDefinedAndNotNull(b) && 0 < b.length && (h = _.min(b));
            _.isNumber(h) && _.each(c, fourSq.bind(function(a, b) {
                var c = _.isNumber(a) ? a - h : -1;
                0 <= c && l.logMetric(k.concat(["perf", b]), c)
            }, this));
            _.each(a, fourSq.bind(function(a, b) {
                _.isNumber(a) && l.logMetric(k.concat(["results", b]), a)
            }, this));
            this.customCollector_.send(l)
        }
    }
});
fourSq.stats.TimeOnPageLogger = function(a, c) {};
fourSq.stats.TimeOnPageLogger = fourSq.Class.extend({
    initialize: function() {
        this.startedAt_ = +new Date;
        _.defer(fourSq.bind(this.queue_, this))
    },
    backOff_: function(a) {
        return 2E4 > a ? fourSq.util.randomInt(1E3, 5E3) : 6E4 > a ? fourSq.util.randomInt(3E3, 7E3) : 9E4 > a ? fourSq.util.randomInt(7E3, 1E4) : -1
    },
    delta_: function() {
        return +new Date - this.startedAt_
    },
    queue_: function() {
        var a = this.delta_(),
            a = this.backOff_(a);
        0 < a && _.delay(fourSq.bind(function() {
            var a = this.delta_();
            this.logAction_(a);
            this.queue_()
        }, this), a)
    },
    logAction_: function(a) {
        a =
            fourSq.stats.Action.build(fourSq.stats.action.Action.ON_PAGE, {
                details: {
                    deltaTs: a
                }
            });
        fourSq.stats.logActions(a)
    }
});
fourSq.stats.pageCollector_ = (new fourSq.stats.Collector).protectTransports();
fourSq.stats.log = fourSq.bind(fourSq.stats.pageCollector_.log, fourSq.stats.pageCollector_);
fourSq.stats.incr = function(a, c) {
    fourSq.stats.log("statmon").incr(a, c).finish()
};
fourSq.stats.logMetric = function(a, c) {
    fourSq.stats.log("statmon").logMetric(a, c).finish()
};
fourSq.stats.logExperimentAction = function(a, c, b) {
    fourSq.stats.log("expact").logExperimentAction(a, c, b).finish()
};
fourSq.stats.logActions = function(a) {
    var c = fourSq.stats.pageCollector_.log();
    c.addActions.apply(c, arguments);
    c.finish()
};
fourSq.stats.logActionWithDelay = function(a, c) {
    fourSq.stats.logActions(a);
    _.delay(c, fourSq.stats.REDIRECT_DELAY)
};
fourSq.stats.logActionWithConfirmation = function(a, c) {
    var b = fourSq.stats.pageCollector_.log();
    b.addActions(a);
    b.finish(c)
};
fourSq.stats.REDIRECT_DELAY = 50;
fourSq.stats.action.Action = {
    PAGE_LOAD: "page-load",
    ON_PAGE: "on-page",
    CLICK: "click",
    ENTER: "enter",
    SHOW: "show",
    CLOSE: "close",
    IMPRESSION: "impression",
    API_CALL: "api-c",
    API_RESPONSE_SUCCESS: "api-resp-s",
    API_RESPONSE_FAILURE: "api-resp-f",
    RUN: "run",
    QUEUE: "queue",
    SUCCESS: "success",
    FAILURE: "failure",
    VALID: "valid",
    INVALID: "invalid",
    ENABLED: "enabled",
    DISABLED: "disabled",
    SELECT: "select",
    SUBMIT: "submit",
    FOCUS: "focus",
    AUTOLOGIN: "autologin",
    ATTEMPT_REDIRECT: "attempt-redirect",
    REDIRECT: "redirect",
    ADD: "add",
    REMOVE: "remove",
    ONBOARDING_END: "onboarding-end",
    ONBOARDING_START: "onboarding-start",
    HOVER: "hover",
    SCROLL: "scroll",
    RENDER: "render"
};
fourSq.stats.action.Component = {
    MAP: "map",
    SAVE_FLYOUT: "save-flyout",
    SHARE_FLYOUT: "share-flyout",
    VENUE_CARD: "venue-card",
    SIGNUP_MENU: "signup-menu",
    SIGNUP_BANNER: "signup-banner",
    COMMENT_CARD: "comment-card",
    BADGE_CARD: "badge-card",
    TIP: "tip",
    MAP_CONTROL: "map-control",
    RESULT: "result",
    SWIPE_SECTION: "swipe-section",
    TAP_SECTION: "tap-section",
    ACTION_COMPLETER: "action-completer",
    ME_BLOCK: "me-block",
    QUERY_REFINEMENT: "query-refinement",
    FILTERS_PROMO: "filters-promo",
    SIMILAR_VENUES: "similar-venues",
    SIMILAR_TASTE_VENUES: "similar-taste-venues",
    SAME_GEO_CATEGORY_VENUES: "same-geo-category-venues",
    SAME_GEO_RESTAURANTS: "same-geo-restaurants",
    SUBSEQUENT_VENUES: "subsequent-venues",
    CHILD_VENUES: "child-venues",
    SIBLING_VENUES: "sibling-venues",
    CHAIN_VENUES: "chain-venues",
    POPULAR_QUERIES: "popular-queries",
    VENUE: "venue",
    EXPLORE_LINKS: "explore-links",
    LISTS: "list",
    STAFF: "staff",
    TASTE: "taste",
    PROGRESS_BAR: "progress-bar",
    INFO_WINDOW: "info-window",
    FRIEND_LIST: "friend-list",
    BUDGET_SELECTOR: "budget-selector",
    CREATE: "create",
    MESSAGE: "message",
    PHOTO_FLYOUT: "photo-flyout",
    BILLING_CARDS: "billing-cards",
    MANAGE_CREDITS: "manage-credits",
    FAQ: "faq",
    FRIENDSHIP_AUTO_ACCEPT_TOGGLE: "friendship-auto-accept-toggle",
    OPEN_IN_APP: "open-in-app",
    UPSELL_TO_SU: "upsell-to-su",
    UPSELL_TO_QUEUES: "upsell-to-queues",
    STOP_MODAL: "stop-modal",
    ESCAPE_HATCH: "escape-hatch",
    VENUE_SUGGESTION: "venue-suggestion",
    VENUE_NOTE: "venue-note",
    ANON_UPSELL: "anon-upsell",
    DELETE_CONFIRMATION_DIALOG: "delete-confirmation-dialog",
    FILTERS: "filters",
    NAVIGATION: "navigation",
    HEADER: "header",
    LOCAL_QUERY_DETAIL_LINK: "local-query-detail-link",
    GET_THE_APP: "get-the-app",
    NEW_COPY_LARGE_FONT: "new-copy-large-font",
    NEW_COPY_SMALL_FONT: "new-copy-small-font",
    OLD_COPY_LARGE_FONT: "old-copy-large-font",
    OLD_COPY_SMALL_FONT: "old-copy-small-font",
    RATING_TOAST: "rating-toast",
    RATING_PROMPT: "rating-prompt",
    USER_DROPDOWN: "user-dropdown",
    QUERY_DRAWER: "query-drawer",
    LOCATION_DRAWER: "location-drawer",
    LOGGED_OUT_MENU: "logged-out-menu",
    PLANNING_A_TRIP_BANNER: "planning-a-trip-banner",
    YELP_UPSELL_BANNER: "yelp-upsell-banner",
    SOCIAL_TRAVEL_BANNER: "social-travel-banner",
    DEAR_FOURSQUARE_2015: "dearfoursquare2015",
    VENUE_SECTION_TABS: "section-tabs",
    CATEGORY: "category"
};
fourSq.stats.action.Element = {
    FACE: "face",
    DATE: "date",
    AVATAR: "avatar",
    USER_NAME: "user-name",
    FACEBOOK_SIGNUP: "facebook-signup",
    FACEBOOK_LOGIN: "facebook-login",
    GOOGLE_PLUS_SIGNUP: "google-plus-signup",
    EMAIL_SIGNUP: "email-signup",
    SIGNUP: "signup",
    IOS_DOWNLOAD: "ios-download",
    ANDROID_DOWNLOAD: "android-download",
    WINPHONE_DOWNLOAD: "winphone-download",
    DOWNLOAD: "download",
    TURN_ON_BROWSER_NOTIFICATION: "turn-on-browser-notification",
    LOGIN: "login",
    FOURSQUARE_LOGO: "foursquare-logo",
    SUBMIT_BUTTON: "submit-button",
    QUERY_INPUT: "query-input",
    LOCATION_INPUT: "location-input",
    SEARCH_FORM: "search-form",
    DELETE: "delete",
    LIKE: "like",
    LIKED: "liked",
    DISLIKE: "dislike",
    DISLIKED: "disliked",
    SAVE: "save",
    SAVE_EDIT: "save-edit",
    CANCEL_EDIT: "cancel-edit",
    NEXT: "next",
    PREVIOUS: "previous",
    PAUSE: "pause",
    UNPAUSE: "unpause",
    ADD_TO_LIST: "add-to-list",
    REMOVE_FROM_LIST: "remove-from-list",
    SHARE: "share",
    SHARE_INPUT: "share-input",
    SHARE_TWITTER: "share-tw",
    SHARE_FACEBOOK: "share-fb",
    FIND_FRIENDS_FACEBOOK: "find-friends-facebook",
    FIND_FRIENDS_TWITTER: "find-friends-twitter",
    FIND_FRIENDS_GMAIL: "find-friends-gmail",
    FIND_FRIENDS_YAHOO: "find-friends-yahoo",
    FIND_FRIENDS: "find-friends",
    BEEN_HERE: "been-here",
    CREATE_LIST: "create-list",
    MENU: "menu",
    EDITOR: "editor",
    EDIT: "edit",
    VENUE_NAME: "venue-name",
    SPECIAL: "special",
    BACK: "back",
    BROADCAST: "broadcast",
    ARROW: "arrow",
    PHOTO: "photo",
    PHOTO_VISIBILITY_PUBLIC: "photo-visibility-public",
    PHOTO_VISIBILITY_FRIENDS: "photo-visibility-friends",
    CATEGORY_NAME: "category-name",
    CLAIM: "claim",
    PRIVACY: "privacy",
    TERMS_OF_SERVICE: "terms-of-service",
    FILTER_HAVE_NOT_BEEN: "filter-have-not-been",
    FILTER_HAVE_BEEN: "filter-have-been",
    FILTER_FRIENDS_HAVE_BEEN: "filter-friends-have-been",
    FILTER_WITH_SPECIALS: "filter-with-specials",
    LOCATION_SUGGESTION: "location-suggestion",
    SEARCH_SUGGESTION: "search-suggestion",
    SPELLING_SUGGESTION: "spelling-suggestion",
    SPELLING_CORRECTION: "spelling-correction",
    SPELLING_ESCAPE_HATCH: "spelling-escape-hatch",
    REQUERY: "requery",
    ZOOM_IN: "zoom-in",
    ZOOM_OUT: "zoom-out",
    CURRENT_LOCATION: "current-location",
    HIDE_BUTTON: "hide-button",
    VENUE_FACEBOOK_PAGE: "venue-fb",
    VENUE_TWITTER_PAGE: "venue-twitter",
    VENUE_WEBSITE: "venue-website",
    VENUE_DIRECTIONS: "venue-directions",
    VENUE_RESERVATION: "venue-reservation",
    VENUE_DELIVERY: "venue-delivery",
    VENUE_ADDRESS: "venue-address",
    VENUE_PHONE: "venue-phone",
    VENUE_MENU: "venue-menu",
    ADD_VENUE: "add-venue",
    REMOVE_VENUE: "remove-venue",
    FULL_HOURS: "venue-hours",
    ADD_TIP: "add-tip",
    ADD_ANOTHER_TIP: "add-another-tip",
    MAP: "map",
    MAP_PIN: "map-pin",
    CENTER_MAP: "venue-map-center",
    POP_OUT_MAP: "venue-map-out",
    POP_IN_MAP: "venue-map-in",
    SIP: "sip",
    MORE: "more",
    TIP_FILTER_CANCEL: "tip-filter-cancel",
    TIP_FILTER: "tip-filter",
    TIP_FILTER_INPUT: "tip-filter-input",
    TIP_PAGINATION_LINK: "tip-pagination-link",
    TIP_SORT_LINK: "tip-sort-link",
    TIP_LINK: "tip-link",
    TIP_DELETE: "tip-delete",
    TIPS_TAB: "tips-tab",
    PHOTOS_TAB: "photos-tab",
    MENU_TAB: "menu-tab",
    ALL_PHOTOS_LINK: "all-photos-link",
    ALL_PHOTOS_TEXT_LINK: "all-photos-text-link",
    VENUE_EDIT_LINK: "venue-edit-link",
    VENUE_EDIT_HISTORY_LINK: "venue-edit-history-link",
    VENUE_FLAG_LINK: "venue-flag-link",
    VENUE_VIEW_FLAGS_LINK: "venue-view-flags-link",
    LOCATION_BREADCRUMB: "location-breadcrumb",
    GET_APP_LINK: "get-app-link",
    CHICLET: "chiclet",
    EXPLORE_LINK: "explore-link",
    LIST_NAME: "list-name",
    SEE_ALL_LISTS: "see-all-lists",
    SEE_LIKES: "see-likes",
    SEE_COMMENTS: "see-comments",
    SEE_PHOTOS: "see-photos",
    UPSELL_ACCEPT_LINK: "upsell-accept-link",
    VENUE_CREATE: "venue-create",
    ROLLBACK_EDIT: "rollback-edit",
    ROLLBACK_CHAIN_EDIT: "rollback-chain-edit",
    MARK_AS_SUSPICIOUS: "mark-as-suspicious",
    ADD_FRIEND: "add-friend",
    DISLIKE_VENUE: "dislike-venue",
    LIKE_PAGE: "like-page",
    LIKE_TIP: "like-tip",
    UPVOTE_TIP: "upvote-tip",
    DOWNVOTE_TIP: "downvote-tip",
    LIKE_VENUE: "like-venue",
    SAVE_LIST: "save-list",
    UNSUBSCRIBE_ALL: "unsubscribe-all",
    UNSUBSCRIBE_ONE: "unsubscribe-one",
    EMAIL: "email",
    PASSWORD: "password",
    FIRST_NAME: "first-name",
    BIRTHDAY: "birthday",
    PRIVACY_POLICY: "privacy-policy",
    IPHONE: "iphone",
    BLACKBERRY: "blackberry",
    ANDROID: "android",
    WINDOWS_PHONE: "windows-phone",
    OTHER_PHONES: "other-phones",
    ADD_ALL: "add-all",
    NEXT_SECTION: "next-section",
    ACCOUNT_PICKER_PAGE: "account-picker-page",
    BID_FIELD: "bid-field",
    CONTINUE: "continue",
    CREATE_AD: "create-ad",
    CREATE_UPDATE: "create-update",
    UPLOAD_PHOTO: "upload-photo",
    SELECT_PHOTO: "select-photo",
    SELECT_TIP: "select-tip",
    SELECT_UPDATE: "select-update",
    ADD: "add",
    REMOVE: "remove",
    BIO: "bio",
    PHONE: "phone",
    NATIVE_URL: "native-url",
    NATIVE_FALLBACK_CALLBACK: "native-fallback-callback",
    NATIVE_FALLBACK_URL: "native-fallback-url",
    COPPA_TOO_YOUNG: "coppa-too-young",
    SEND: "send",
    SHOW_PANE: "show-pane",
    SHOW_FORM: "show-form",
    SUPERUSER_QUEUE_LINK: "superuser-queue-link",
    OPEN_FLYOUT: "open-flyout",
    CLOSE_FLYOUT: "close-flyout",
    NO_THANKS: "no-thanks",
    TASTE: "taste",
    ADDED_TASTE: "added-taste",
    YOUR_TASTES: "your-tastes",
    YOUR_TASTE_SUGGESTIONS: "your-taste-suggestions",
    TASTES_LINK: "tastes-link",
    SIGN_UP: "sign-up",
    LINK: "link",
    LOCAL_QUERY_DETAIL_LINK: "local-query-detail-link",
    FOLLOW: "follow",
    RATE: "rate",
    CANCEL: "cancel",
    OK: "ok",
    OKAYED: "okayed",
    IGNORE: "ignore",
    SKIP: "skip",
    TIP_ADD: "tip-add",
    PHOTO_ADD: "photo-add",
    POST: "post",
    FRIEND_ACTIVITY: "friend-activity-link",
    USER_PROFILE: "user-profile-link",
    ADD_TASTES_LINK: "add-tastes-link",
    BADGES_LINK: "badges-link",
    USER_HISTORY_LINK: "user-history-link",
    USER_LIST_LINK: "user-list-link",
    USER_TODOS_LINK: "user-todo-link",
    ACCOUNT_SETTINGS_LINK: "account-settings-link",
    LOGOUT_LINK: "logout-link",
    SUPERUSER_ACTION_LINK: "superuser-action-link",
    USER_PATH_LINK: "user-path-link",
    INSPIRATIONAL_LOCATION_LINK: "inspirational-location-link",
    NEARBY_LOCATION_LINK: "nearby-location-link",
    ABOUT_LINK: "about-link",
    FOURSQUARE_FOR_ENTERPRISE_LINK: "foursquare-for-enterprise-link",
    CONNECT_BUTTON: "connect-button",
    TRAY_NOTIFICATION: "tray-notification",
    SMALL_BUSINESS_LINK: "small-business-link",
    DEVELOPER_LINK: "developer-link",
    SWARM_LINK: "swarm-link",
    FOURSQUARE_LINK: "foursquare-link",
    UBER_BUTTON: "uber-button",
    DELIVERY_BUTTON: "delivery-button",
    TIMBERLAND_CLICKTHROUGH: "timberland-clickthrough",
    TIMBERLAND_CLICKOUT: "timberland-clickout",
    LLBEAN_BUTTON: "llbean-button",
    LLBEAN_EXT_LINK: "llbean-ext-link",
    CREATE_APP: "create-app-button",
    CONTINUE_PERSONAL: "continue-personal-button",
    CONTINUE_STARTUP: "continue-startup-button",
    LETS_TALK: "lets-talk-button",
    SANDBOX: "sandbox",
    DEV_VERIFY: "verify-button",
    SUBSCRIBE: "subscribe-button",
    UNSUBSCRIBE: "unsubscribe-button",
    SG_2017_LANDING_LINK: "summer-guide-2017-landing-link",
    SG_2017_NYC_LINK: "summer-guide-2017-nyc-link",
    SG_2017_LA_LINK: "summer-guide-2017-la-link",
    SG_2017_CHICAGO_LINK: "summer-guide-2017-chicago-link",
    IOS: "ios",
    FACEBOOK: "facebook",
    TWITTER: "twitter",
    GOOGLE_SIGNUP: "google-signup"
};
fourSq.stats.action.Initiator = {
    CLIENT_USER: 0,
    CLIENT_APP: 1
};
fourSq.stats.action.Section = {
    HEADER_BAR: "header-bar",
    MOBILE_HEADER_BAR: "mobile-header-bar",
    PRODUCT_BAR: "product-bar",
    SIGNUP_PROMPT: "signup-prompt",
    SWARM_APP_PROMPT: "swarm-app-prompt",
    SWARM_APP_PROMPT_EXPERIMENTAL: "swarm-app-prompt-experiment",
    GET_THE_APP_PROMPT: "get-the-app-prompt",
    BROWSER_NOTIFICATION_PROMPT: "browser-notification-prompt",
    MOBILE_CHROME_ANDROID_APP_BANNER: "mobile-chrome-android-app-banner",
    INVITE_SIGNUP_PROMPT: "invite-signup-prompt",
    INVITE_BAR: "invite-bar",
    DIALOG: "dialog",
    SIGNUP_DIALOG: "signup-dialog",
    DOWNLOAD_DIALOG: "download-dialog",
    NOTIFICATION: "notification",
    IMAGE_VIEWER: "image-viewer",
    SIDEBAR: "sidebar",
    FLOATING_SIDE_WIDGET: "floating-side-widget",
    MAP: "map",
    RESULTS: "results",
    FILTERS: "filters",
    ACTIVITY_STREAM: "activity-stream",
    COMMENT_STREAM: "comment-stream",
    VENUE_DETAIL: "venue-detail",
    SIGNUP_DOWNLOAD: "signup-teaser",
    TIPS_SECTION: "tips-section",
    JUSTIFICATIONS: "justifications",
    TIPPETS: "tippets",
    TASTES: "tastes",
    EMAIL_PROMO: "email-promo",
    ATTRIBUTE_PROMPT: "attribute-prompt",
    BADGES: "badges",
    VENUES: "venues",
    TRAVEL: "travel",
    MAYORSHIPS: "mayorships",
    CATEGORY_LEADERBOARD: "category-leaderboard",
    PRIMARY_ACTION: "primary-action",
    LOCATION_SETTINGS: "settings",
    VENUE_DETAIL_INFO: "venue-detail-info",
    VENUE_DETAIL_PHOTOS: "venue-detail-photos",
    VENUE_DETAIL_OVERLAY_MAP: "venue-detail-overlay-map",
    VENUE_DETAIL_EDITING_MODAL: "venue-detail-editing-modal",
    VENUE_DETAIL_BASIC_DOWNLOAD_MODAL: "venue-detail-basic-download-modal",
    VENUE_DETAIL_TIPS_DOWNLOAD_MODAL: "venue-detail-tips-download-modal",
    VENUE_DETAIL_PHOTOS_DOWNLOAD_MODAL: "venue-detail-photos-download-modal",
    VENUE_DETAIL_TASTES_DOWNLOAD_MODAL: "venue-detail-tastes-download-modal",
    VENUE_DETAIL_INLINE_DOWNLOAD_PROMPT: "venue-detail-inline-download-prompt",
    VENUE_ATTRIBUTES: "venue-attributes",
    IPAD_DOWNLOAD_MODAL: "ipad-download-modal",
    FRIEND_VISITS_FACEPILE: "friend-visits-facepile",
    SIGNUP_FORM: "signup-form",
    MORE_TIPS: "more-tips-button",
    ADDRESS_SOLICITATION: "address-solicitation",
    TIP_MODAL: "tip-modal",
    TOP_VENUE_INFO: "top-venue-info",
    BEST_NEARBY: "best-nearby",
    TRENDING: "trending",
    SPECIALS: "specials",
    NEW_VENUES: "new-venues",
    FRIEND_REQUESTS: "friend-requests",
    SOCIAL_CONNECT: "social-connect",
    DOWNLOAD: "download",
    DOWNLOAD_BADGES: "download-badges",
    OTHER_DEVICES: "other-devices",
    SPLASH: "splash",
    RESULTS_FACEBOOK: "results-facebook",
    RESULTS_TWITTER: "results-twitter",
    RESULTS_GMAIL: "results-gmail",
    POLISH_PROFILE_FORM: "polish-profile-form",
    CONTENT: "content",
    BUDGET: "budget",
    PAYMENT: "payment",
    AD_PAUSE: "adpause",
    SPECIAL_TYPE_PICKER: "special-type-picker",
    SPECIAL_FORM: "special-form",
    TIP_CREATOR: "tip-creator",
    NEW_TIP_LIST: "new-tip-list",
    FILTERED_TIP_LIST: "filtered-tip-list",
    PITCH_CAROUSEL: "pitch-carousel",
    CREATED_TIP: "created-tip",
    COMPOSING_TIP: "composing-tip",
    PROCESSING_TIP: "processing-tip",
    HOME: "home",
    NEARBY: "nearby",
    EXPLORE: "explore",
    OVERVIEW: "overview",
    AUDIENCE: "audience",
    TIPS: "tips",
    LISTS: "lists",
    UPDATES: "updates",
    GENERIC_STEP: "generic_step",
    DOWNLOAD_STEP: "download-step",
    FIND_FRIENDS_STEP: "find-friends-step",
    POLISH_PROFILE_STEP: "polish-profile-step",
    TASTE_GAME_STEP: "taste-game-step",
    LOG_IN: "log-in",
    SIGNUP_MODAL_SUCCESS: "signup-modal-success",
    EMAIL_PROMPT: "email-prompt",
    TERMS_OF_USE_STEP: "terms-of-use-step",
    PHONE_STEP: "get-phone-step",
    FINAL_VERIFICATION_STEP: "final-verification-step",
    MAIL_SENT_STEP: "mail-sent-step",
    FINAL_STEP_APPROVED: "final-step-approved",
    FINAL_STEP_PENDING: "final-step-pending",
    FINAL_STEP_REJECTED: "final-step-rejected",
    FINAL_STEP_REVOKED: "final-step-revoked",
    HEADER: "header",
    FOOTER: "footer",
    SEARCH: "search",
    LIST: "list",
    LOCAL_QUERY_DETAIL_PIVOTS: "local-query-detail-pivots",
    LISTING_INLINE_CTA: "listing_inline_cta",
    MAIN: "main",
    TOP: "top",
    NEW_PLACES: "new-places",
    TOP_CATEGORIES: "top-categories",
    TOP_PLACES: "top-places",
    SHARE: "share"
};
fourSq.stats.action.View = {
    ABOUT: "about",
    ABOUT_CONTACT: "about-contact",
    ABOUT_TEAM: "about-team",
    ABOUT_LOGOS: "about-logos",
    ABOUT_PHOTOS: "about-photos",
    ABOUT_COMMUNITY: "about-community",
    ABOUT_SAVE_TO_4SQ: "about-saveto4sq",
    ABOUT_TIP_BOOKMARKLET: "about-tipbookmarklet",
    ABOUT_SECURITY: "about-security",
    ADD_FRIENDS: "add-friends",
    ADD_FRIENDS_NEW: "add-friends-v2",
    APPLE_WATCH_PAGE: "apple-watch-page",
    AUTH: "oauth-page",
    BADGE: "badge",
    BADGE_UNLOCK: "badge-unlock",
    BADGES: "badges",
    BATMAN_ONBOARDING: "batman-onboarding",
    BRAND_PAGE_DASHBOARD: "brand-page-dashboard",
    BRAND_MANAGER_HOME: "brand-manager-home",
    CHAIN_LOCATIONS: "chain-locations",
    CHECKIN: "checkin-detail",
    CHECKIN_FRIEND_REQUEST_ACTION: "request-friend-for-checkin-action",
    CITY_DIRECTORY: "city-directory",
    CREATE_TIP_INTENT: "create-tip-intent",
    BEST_OF: "best-of",
    BEST_OF_DIRECTORY: "best-of-directory",
    DEVICE_PROFILE: "device-user-profile",
    DOWNLOAD: "download",
    DOTCOM: "dotcom",
    EMBEDDABLE_LIST: "embeddable-list",
    PINTEREST_DOWNLOAD: "pinterest-download",
    EXPLORE: "explore",
    FACEBOOK_PAGES: "facebook-pages",
    FALL_OFF_THE_WAGON_THURSDAY_INFOGRAPHIC: "fall-off-the-wagon-thursday-infographic",
    FRIEND_REQUEST_ACTION: "request-friend-action",
    FRIEND_ACCEPT_ACTION: "accept-friend-action",
    HEINEKEN_BREW_LOCK: "heineken-brew-lock",
    HISTORY: "history",
    HOMEPAGE: "homepage",
    JOBS: "jobs",
    NEW_ACTIVITY_STREAM: "new-activity-stream",
    NEW_LOGGED_OUT_HOMEPAGE: "new-logged-out-homepage",
    NEW_LOGGED_IN_HOMEPAGE: "new-logged-in-homepage",
    NEW_CITY_PAGE: "new-city-page",
    KIK: "kik",
    LEGAL: "legal",
    LEGAL_PHOTOS: "legal-photos",
    LIST: "list",
    LIST_EDIT: "list-edit",
    LISTS: "lists",
    LOCAL_QUERY_DETAIL: "local-query-detail",
    LOCAL_QUERY_INDEX: "local-query-index",
    LOGIN: "login",
    MANAGE_FOLLOWERS: "manage-followers",
    MANAGE_FOLLOWING: "manage-following",
    MANAGE_FRIENDS: "manage-friends",
    MANAGE_FRIEND_REQUESTS: "manage-friend-requests",
    MANAGER_HOME: "manager-home",
    MERCHANT_DASHBOARD: "merchant-dashboard",
    MERCHANT_SPECIALS: "merchant-specials",
    MERCHANT_TOOLS: "merchant-tools",
    MERCHANT_UPDATE: "merchant-update",
    NATIONAL_WINTER_GUIDE_INFOGRAPHIC_2016: "national-winter-guide-infographic-2016",
    NORTHEAST_WINTER_GUIDE_INFOGRAPHIC_2016: "northeast-winter-guide-infographic-2016",
    NOTIFICATIONS: "notifications",
    ONBOARDING: "onboarding",
    OSM: "osm",
    PAGE: "page",
    PAGE_TOOLS: "page-tools",
    PLAN_MESSAGE: "plan-message",
    PROMOTE: "promote",
    PROMOTIONS_DASHBOARD: "promotions-dashboard",
    SAVE_VENUE_ACTION: "save-venue-action",
    SETTINGS: "settings",
    SETTINGS_CONNECTIONS: "settings-connections",
    SETTINGS_PROFILE: "settings-profile",
    SETTINGS_SHARING: "settings-sharing",
    SETTINGS_CHECKIN: "friendcheckinsettings",
    SETTINGS_PRIVACY: "settings-privacy",
    SETTINGS_PAGES: "settings-pages",
    SETTINGS_BLOCKED_USERS: "settings-blocked-users",
    SEARCH: "search",
    SIGNUP: "signup",
    INVITE_LANDING: "invite-landing",
    SIGNUP_DOWNLOAD: "signup-download",
    SIGNUP_DOWNLOAD_NEW: "signup-download-v2",
    SIGNUP_EMAIL: "signup-email",
    SIGNUP_FACEBOOK_FRIENDS: "signup-facebook-friends",
    SIGNUP_TWITTER_FRIENDS: "signup-twitter-friends",
    SIGNUP_YAHOO_FRIENDS: "signup-yahoo-friends",
    SIGNUP_GMAIL_FRIENDS: "signup-gmail-friends",
    SIGNUP_SUGGESTED_PAGES: "signup-suggested-pages",
    SPECIAL_DETAIL: "special-detail",
    CREATE_SPECIAL_PAGE: "create-special-page",
    SLACK_APP_INSTALL_PAGE: "slack-app-install-page",
    SU_ADDRESS: "superuser-address",
    SU_GLOBAL_TRANSLATED_NAME: "superuser-global-translated-name",
    SU_ATTRIBUTES: "superuser-attributes",
    SU_CATEGORY: "superuser-category",
    SU_CHAIN: "superuser-category",
    SU_DASHBOARD: "superuser-dashboard",
    SU_EXPLORESPAM: "superuser-explorespam",
    SU_HOURS: "superuser-hours",
    SU_MERGE: "superuser-merge",
    SU_REMOVE: "superuser-remove",
    SU_PRIVATE: "superuser-private",
    SU_TIP: "superuser-tip",
    SU_UNCATEGORIZED: "superuser-uncategorized",
    SU_PHOTO: "superuser-photo",
    SU_UNKNOWN: "superuser-unknown",
    SU_USERSPAM: "superuser-userspam",
    SU_MISLOCATED: "superuser-mislocated",
    SU_LOCATIONREVIEW: "superuser-locationreview",
    SUPERUSER_MARKETING_LANDING: "superuser-marketing-landing",
    TASTE_GAME: "taste-game",
    TESTER_REGISTRATION: "tester-registration",
    TIP: "tip-detail",
    TODOS: "todos",
    TOP_50: "top-50",
    TOUCH_DOWNLOAD: "touch-download",
    TRAVEL_PLANNER: "travel-planner",
    USER: "user",
    USER_LISTS: "user-lists",
    USER_PHOTOS: "user-photos",
    USER_TIPS: "user-tips",
    USER_VOLUNTEERED_LOCATION: "user-volunteered-location",
    USER_PROFILE_2: "user-profile-2",
    USER_UNLOCK: "user-unlock",
    USER_WOE: "user-woe",
    VENUE_DETAIL: "venue-detail",
    VENUE_DETAIL2: "venue-detail2",
    CHAIN_HISTORY: "chain-history",
    VENUE_HISTORY: "venue-history",
    VENUE_WOE: "venue-woe",
    VENUE: "venue-detail",
    VENUE_MENU: "venue-menu",
    VENUECLAIM_LOGIN: "venueclaim-login",
    VENUECLAIM_SEARCH: "venueclaim-search",
    VENUECLAIM_SIGNUP: "venueclaim-signup",
    VENUECLAIM_VENUESELECTED: "venueclaim-venueselected",
    VENUE_LISTING: "venue-listing",
    VENUE_LISTING_CHUNKS: "venue-listing-chunks",
    VENUE_LISTS: "venue-lists",
    VENUE_PHOTOS: "venue-photos",
    EMAIL_UNSUBSCRIBE: "email-unsubscribe",
    APP_REDIRECT: "app-redirect",
    ADD_VENUE: "add-venue",
    EDIT_PLACE: "edit-place",
    TRAVEL: "travel",
    TRIP_TIPS_HOME: "trip-tips-home",
    TRIP_TIPS_LIST_SELF: "trip-tips-list-self",
    TRIP_TIPS_LIST: "trip-tips-list",
    TIP_MODAL: "tip-modal",
    YEAR_IN_REVIEW_2015_INFOGRAPHIC: "year-in-review-2015-infographic",
    YEAR_IN_REVIEW_2016_INFOGRAPHIC: "year-in-review-2016-infographic",
    ATTRIBUTION_MICROSITE_WHITEPAPER: "attribution-microsite-whitepaper",
    ATTRIBUTION_MICROSITE_INDEX: "attribution-microsite-index",
    ENTERPRISE: "enterprise-microsite-index",
    MARSBOT_APP_MICROSITE_INDEX: "marsbot-app-microsite-index",
    CANADA_DAY_INFOGRAPHIC_2016: "canada-day-infographic-2016",
    DEV_VERIFY: "developers-verify",
    DEV_UPGRADE: "developers-upgrade",
    DEV_SUBSCRIBE: "developers-subscribe",
    DEV_REGISTER_APP: "developers-register-app",
    DEV_SURVEY: "developers-survey",
    DEV_LOGIN: "developers-login",
    DEV_PILGRIM: "developers-pilgrim",
    SUMMER_GUIDE_2017_INFOGRAPHIC: "summer-guide-2017-infographic",
    SUMMER_GUIDE_2017_NYC_INFOGRAPHIC: "summer-guide-2017-nyc-infographic",
    SUMMER_GUIDE_2017_LA_INFOGRAPHIC: "summer-guide-2017-la-infographic",
    SUMMER_GUIDE_2017_CHICAGO_INFOGRAPHIC: "summer-guide-2017-chicago-infographic",
    SWARM_HOME: "swarm-home",
    STICKER_VOTE: "sticker-vote",
    YEAR_IN_REVIEW: "year-in-review",
    BILLING_SUMMARY: "billing-summary",
    NEXT_BIG_THING: "nextbigthing",
    UCL2014: "ucl2014",
    BUSINESS_APP_ACTIVITY: "business-app-activity",
    BUSINESS_APP_USER_DETAILS: "business-app-user-details",
    BUSINESS_APP_SPECIALS: "business-app-specials",
    BUSINESS_APP_STATS: "business-app-stats",
    BUSINESS_APP_VENUE_PROFILE: "business-app-venue-profile",
    FOR_GOOD: "for-good",
    FOR_GOOD_PROPOSAL: "for-good-proposal",
    FOR_GOOD_NET_NEUTRALITY: "for-good-net-neutrality",
    FOR_GOOD_BLINDSQUARE: "for-good-blindsquare",
    FOR_GOOD_LINKNYC: "for-good-linknyc",
    UNKNOWN: "unknown",
    MONTHLY_SUMMARIES_WEB: "monthly-summaries-web"
};
jQuery.fn.clicktrack = function(a, c, b) {
    var d = c || {};
    c = b || {};
    b = $(this);
    var k = c.onFinish || function() {},
        l = c.preventDefault,
        h = !!c.useOnClick,
        e = c.defaultMetrics,
        g = !!e,
        f = c.includeElementIndex,
        p = c.includeElementId,
        t = c.collector || fourSq.stats.pageCollector_,
        v = c.beforeLog || function(a) {};
    return b.each(function(b) {
        var c = $(this),
            q = c.attr("href"),
            x = function() {
                var a = _.isArray(e) ? e : [e],
                    a = [_.extend({}, {
                        ir: b,
                        sid: fourSq.stats.SessionId.get()
                    }, a[0])].concat(a.slice(1));
                return _(a).map(function(a) {
                    return _(a).map(function(a,
                        b) {
                        return b + "," + a
                    }).join(";")
                }).join("|")
            },
            z = function(e) {
                var h = _.extend({}, d);
                f && (h._ctei = b);
                g && fourSq.isUndefinedOrNull(h.metrics) && (h.metrics = x());
                var w = k;
                l || e || (w = function() {
                    k();
                    fourSq.util.redirect(q)
                });
                p && c.attr("id") && (h._cteid = c.attr("id"));
                fourSq.isDefined(q) && (h.href = q);
                e = t.log(a).addAll(h);
                v(e, c, b);
                e.finish(w)
            },
            A = function(a) {
                var b = !0,
                    d = fourSq.util.clickOpensInNewTab(a, c);
                if (l || !d) a.preventDefault(), b = !1;
                z(d);
                return b
            };
        if (h) {
            var y = "onclick-" + +new Date + "-" + Math.floor(100 * Math.random());
            jQuery.fn.clicktrack.callbacks[y] =
                function(a, b) {
                    var c = $.event.fix(b);
                    return A(c)
                };
            c.attr("onClick", "return jQuery.fn.clicktrack.callbacks['" + y + "']($(this), event);")
        } else c.click(A)
    })
};
jQuery.fn.clicktrack.callbacks = {};
fourSq.api.models.companion.log.Action = {
    build: function(a, c, b, d, k, l) {
        return {
            name: a,
            details: b,
            sessionId: d,
            ids: k,
            timestamp: String(l),
            initiator: c
        }
    }
};
fourSq.api.models.companion.log.ActionName = {
    build: function(a, c, b, d, k, l) {
        return {
            action: a,
            view: c,
            section: b,
            component: d,
            componentIndex: k,
            element: l
        }
    }
};
fourSq.api.models.companion.log.Oids = {
    build: function(a) {
        return {
            venueId: a.venueId,
            checkinId: a.checkinId,
            tipId: a.tipId,
            photoId: a.photoId,
            targetUserId: a.targetUserId,
            viewId: a.viewId,
            requestId: a.requestId,
            referralId: a.referralId,
            tipListId: a.tipListId,
            eventId: a.eventId,
            updateId: a.updateId,
            specialId: a.specialId,
            promotionId: a.promotionId,
            woeId: a.woeId,
            tasteId: a.tasteId,
            notificationId: a.notificationId,
            suggestionId: a.suggestionId,
            perkId: a.perkId
        }
    },
    merge: function(a, c) {
        return fourSq.api.models.companion.log.Oids.build(_.extend({},
            a, c))
    },
    copy: function(a, c) {
        var b = fourSq.api.models.companion.log.Oids.build(c);
        return fourSq.api.models.companion.log.Oids.merge(a, b)
    }
};
fourSq.api.models.companion.entity.RichUserEntity = function(a, c, b) {};
fourSq.api.models.companion.entity.RichUserEntity = fourSq.Class.extend({
    initialize: function(a, c, b) {
        this.start = a;
        this.end = c;
        this.user = b
    },
    toEntity: function() {
        return {
            indices: [this.start, this.end],
            type: "user",
            id: this.user.id
        }
    },
    getUser: function() {
        return this.user
    },
    getStart: function() {
        return this.start
    },
    getEnd: function() {
        return this.end
    },
    getEncodedString: function() {
        return this.start + "," + this.end + "," + this.user.id + ";"
    },
    shift: function(a) {
        this.start += a;
        this.end += a;
        return this
    },
    intersects: function(a) {
        return a >=
            this.start && a < this.end
    },
    intersectsRange: function(a, c) {
        return a < this.start && c >= this.end || this.intersects(a) || this.intersects(c - 1)
    }
}, {
    getEntityStart: function(a) {
        return a.getStart()
    }
});
fourSq.api.models.companion.entity.TextWithMentions = function(a) {};
fourSq.api.models.companion.entity.TextWithMentions = fourSq.EventTarget.extend({
    initialize: function(a) {
        this.text = fourSq.isDefinedAndNotNull(a) ? a : "";
        this.entities = []
    },
    getText: function() {
        return this.text
    },
    updateText: function(a) {
        for (var c = this.text, b = this.entities, d = Math.min(a.length, c.length), k = 0; k < d; k++)
            if (a[k] != c[k]) {
                for (var l = 1; l <= d + 1; l++)
                    if (l > d || a[a.length - l] != c[c.length - l]) {
                        var h = a.length - c.length,
                            e;
                        e = l > d ? Math.max(-h, 0) : Math.max(k, c.length - l + 1);
                        b = _(b).chain().filter(function(a) {
                            return e == a.getStart() ||
                                !a.intersectsRange(k, e)
                        }).map(function(a) {
                            return a.getStart() >= e ? a.shift(h) : a
                        }).value();
                        break
                    } break
            } a.length < c.length && (b = _(b).filter(function(b) {
            return b.getEnd() <= a.length
        }));
        this.text = a;
        this.entities = b;
        this.trigger(fourSq.api.models.companion.entity.TextWithMentions.Events.updated)
    },
    addEntity: function(a, c, b) {
        this.addEntityObject(new fourSq.api.models.companion.entity.RichUserEntity(a, c, b))
    },
    addEntityObject: function(a) {
        var c = _(this.entities),
            b = c.sortedIndex(a, fourSq.api.models.companion.entity.RichUserEntity.getEntityStart);
        this.entities = c.first(b).concat([a]).concat(c.rest(b));
        this.trigger(fourSq.api.models.companion.entity.TextWithMentions.Events.updated)
    },
    toTextWithEntities: function() {
        var a = _(this.entities).map(function(a) {
            return a.toEntity()
        });
        return {
            text: this.text,
            entities: a
        }
    },
    toApiString: function() {
        return _(this.entities).map(function(a) {
            return a.getEncodedString()
        }).join("")
    },
    toHtml: function() {
        var a;
        0 < this.entities.length ? (a = fourSq.util.escapeHtml(this.text.substring(0, this.entities[0].getStart())), _(this.entities).each(function(c,
            b, d) {
            a += '\x3cspan class\x3d"mention"\x3e' + fourSq.util.escapeHtml(this.text.substring(c.getStart(), c.getEnd())) + "\x3c/span\x3e";
            a = b == d.length - 1 ? a + fourSq.util.escapeHtml(this.text.substring(c.getEnd())) : a + fourSq.util.escapeHtml(this.text.substring(c.getEnd(), d[b + 1].getStart()))
        }, this)) : a = fourSq.util.escapeHtml(this.text);
        return a
    },
    rangeIsSafe: function(a, c) {
        return !_(this.entities).any(function(b) {
            return b.intersectsRange(a, c)
        }, this)
    }
}, {
    Events: {
        updated: "updated"
    }
});
fourSq.api.models.companion.typedmodel.TypedModelUtil = {
    isFollowable: function(a) {
        return fourSq.isDefinedAndNotNull(a) && "page" == a.type && fourSq.isDefinedAndNotNull(a.object) && "followingThem" != a.object.relationship
    },
    isSaveable: function(a) {
        return fourSq.isDefinedAndNotNull(a) && ("tip" == a.type || "venue" == a.type || "list" == a.type || "activity" == a.type && fourSq.api.models.companion.typedmodel.TypedModelUtil.isSaveable(a.object.content))
    }
};
fourSq.api.models.companion.typedmodel.TypedModelStore = function(a, c) {};
fourSq.api.models.companion.typedmodel.TypedModelStore = fourSq.Class.extend({
    storage_: {},
    store: function(a) {
        var c = a.type + a.object.id;
        a = new fourSq.api.models.companion.typedmodel.TypedModelWrapper(a);
        fourSq.isDefinedAndNotNull(this.storage_[c]) ? this.storage_[c].push(a) : this.storage_[c] = [a];
        return a
    },
    fetch: function(a, c) {
        var b = this.storage_[a + c];
        return fourSq.isDefinedAndNotNull(b) ? b : []
    },
    remove: function(a, c) {
        this.storage_[a + c] = []
    },
    update: function(a) {
        var c = a.type,
            b = _.extend({}, a);
        b.type = void 0;
        _.each(this.fetch(c,
            b.id), function(a) {
            a.applyUpdate(b)
        }, this)
    }
});
fourSq.api.models.companion.typedmodel.TypedModelWrapper = function(a) {};
fourSq.api.models.companion.typedmodel.TypedModelWrapper = fourSq.EventTarget.extend({
    initialize: function(a) {
        this.model = a;
        fourSq.isDefinedAndNotNull(a) && (this.id = this.model.object.id, this.type = this.model.type)
    },
    applyUpdate: function(a, c) {
        _.extend(this.model.object, a);
        !0 !== c && this.trigger(fourSq.api.models.companion.typedmodel.TypedModelWrapper.Events.updated)
    },
    isCheckin: function() {
        return "checkin" == this.type
    },
    checkin: function() {
        if (this.isCheckin()) return this.model.object
    },
    isVenue: function() {
        return "venue" ==
            this.type
    },
    venue: function() {
        if (this.isVenue()) return this.model.object
    },
    isTip: function() {
        return "tip" == this.type
    },
    tip: function() {
        if (this.isTip()) return this.model.object
    },
    isUser: function() {
        return "user" == this.type || "page" == this.type
    },
    user: function() {
        if (this.isUser()) return this.model.object
    },
    isPageUpdate: function() {
        return "pageUpdate" == this.type
    },
    pageUpdate: function() {
        if (this.isPageUpdate()) return this.model.object
    },
    isList: function() {
        return "list" == this.type
    },
    list: function() {
        if (this.isList()) return this.model.object
    },
    isActivity: function() {
        return "activity" == this.type
    },
    activity: function() {
        if (this.isActivity()) return this.model.object
    },
    isAggregation: function() {
        return "aggregation" == this.type
    },
    aggregation: function() {
        if (this.isAggregation()) return this.model.object
    }
}, {
    Events: {
        updated: "updated"
    }
});
fourSq.views.DomFairy = function(a, c) {};
fourSq.views.DomFairy = fourSq.ui.View.extend({
    name: "",
    selector: "",
    handleElement: fourSq.abstractMethod,
    resprinkle: function() {
        _($(this.selector, this.el)).each(this.magic_, this);
        return this
    },
    magic_: function(a) {
        var c = $(a).data("fairies");
        if (fourSq.isUndefinedOrNull(c) || -1 == c.indexOf(" " + this.name)) this.handleElement(a), $(a).data("fairies", (fourSq.isDefinedAndNotNull(c) ? c : "") + " " + this.name)
    }
});
fourSq.ui.RetinaFairy = function(a, c) {};
fourSq.ui.RetinaFairy = fourSq.views.DomFairy.extend({
    name: "retina",
    selector: "img[data-retina-url]",
    handleElement: function(a) {
        var c = $(a);
        a = 2 * c.width();
        var b = 2 * c.height(),
            d = new Image(a, b);
        d.onload = function() {
            c.prop("src", d.src)
        };
        d.src = c.data("retina-url")
    }
});
fourSq.views.Footer = function(a, c) {};
fourSq.views.Footer = fourSq.ui.View.extend({
    initialize: function(a) {
        fourSq.views.Footer.__super__.initialize.call(this);
        new fourSq.views.ContactFormModal({
            ctaButton: $("footer .footer__contactFormBtn")
        })
    }
});
fourSq.views.ContactFormModal = function(a, c) {};
fourSq.views.ContactFormModal = fourSq.ui.View.extend({
    initialize: function(a) {
        fourSq.views.ContactFormModal.__super__.initialize.call(this);
        this.modalFormPrefix = "letsTalkForm";
        this.$ctaButton = a.ctaButton;
        this.setupModal()
    },
    setupModal: function() {
        var a = $("." + this.modalFormPrefix + "__modal"),
            c = a.find("." + this.modalFormPrefix + "__close"),
            b = $("body");
        this.$ctaButton.click(fourSq.bind(function() {
            b.addClass("contact-modal-opened");
            this.showElement(a)
        }, this));
        c.click(function() {
            a.addClass("slide-up-fade-out")
        });
        a.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
            function() {
                $(this).hasClass("slide-up-fade-out") && (b.removeClass("contact-modal-opened"), $(this).removeClass("slide-up-fade-out showForm").addClass("hideForm"))
            });
        $(document).on("keyup", function(b) {
            27 === b.keyCode && a.hasClass("showForm") && a.addClass("slide-up-fade-out")
        })
    },
    showElement: function(a) {
        a.removeClass("hideForm").addClass("showForm")
    },
    hideElement: function(a) {
        a.removeClass("showForm").addClass("hideForm")
    }
});
fourSq.corps.Page = function(a) {};
fourSq.corps.Page = fourSq.ui.View.extend({
    initialize: function(a) {
        a = _.extend({}, {
            idsForLogging: void 0,
            additionalLoggingDetails: {},
            el: void 0
        }, a);
        this.setEl_(a.el || $("body").first());
        fourSq.config.debugLevel() != fourSq.debug.Level.OFF && (fourSq.debug.FloatingDivLogHandler.initDebugNode(), fourSq.debug.addHandler(new fourSq.debug.ConsoleLogHandler(fourSq.config.debugLevel())), fourSq.debug.addHandler(new fourSq.debug.FloatingDivLogHandler(fourSq.config.debugLevel())), fourSq.api.getLogger().addHandler(new fourSq.debug.ConsoleLogHandler(fourSq.config.debugLevel())), fourSq.api.getLogger().addHandler(new fourSq.debug.FloatingDivLogHandler(fourSq.config.debugLevel())));
        var c = new fourSq.net.QueryString({
            query: window.location.search
        });
        if (c.containsKey("referralId")) {
            var b = c.get("referralId");
            if (window.history && window.history.replaceState) {
                c.remove("referralId");
                var d = window.location.href.split("?");
                2 == d.length && (c = c.toDisplayString(), window.history.replaceState({}, document.title, d[0] + (c.length ? "?" + c : c)))
            }
            fourSq.config.api.REFERRAL_ID = b
        }
        this.setupRetinaFairy_();
        fourSq.retina.init();
        fourSq.pageViewName = this.pageViewName ? fourSq.bind(this.pageViewName, this) : function() {
            return fourSq.stats.action.View.UNKNOWN
        };
        fourSq.defaultLoggingIds = a.idsForLogging;
        fourSq.stats.Util.logPageLoad({
            ids: a.idsForLogging,
            additionalLoggingDetails: a.additionalLoggingDetails
        });
        this.timeOnPageLogger_ = null;
        this.maybeLogTimeOnPage_()
    },
    maybeLogTimeOnPage_: function() {
        fourSq.config.log.timeOnPage.enabled && _.contains(fourSq.config.log.timeOnPage.pages, fourSq.pageViewName()) && (this.timeOnPageLogger_ = new fourSq.stats.TimeOnPageLogger)
    },
    setupRetinaFairy_: function() {
        fourSq.retina.isRetina() && (this.fairy_ = new fourSq.ui.RetinaFairy({
                el: $("body").get(0)
            }),
            this.fairy_.resprinkle())
    }
}, {
    classInit: fourSq.classInit,
    init: function() {
        var a = arguments;
        return fourSq.onPageReady(fourSq.bind(function() {
            fourSq.currentPage = this.classInit.apply(this, a);
            return fourSq.currentPage
        }, this))
    }
});
fourSq.corps.Page.prototype.getScrollTarget = function() {
    return null
};
fourSq.corps.Page.prototype.onScroll = function(a) {};
fourSq.api.ajax = function(a) {
    fourSq.abstractMethod()
};
fourSq.api.setAjaxHandler = function(a) {
    fourSq.api.ajax = a
};
fourSq.api.logger_ = null;
fourSq.api.getLogger = function() {
    fourSq.isUndefinedOrNull(fourSq.api.logger_) && (fourSq.api.logger_ = fourSq.debug.getLogger("api"));
    return fourSq.api.logger_
};
fourSq.api.getSessionIdToken = function() {
    if (!fourSq.api.getSessionIdToken.initialized_) {
        fourSq.api.getSessionIdToken.initialized_ = !0;
        var a = $.cookie("bbhive");
        fourSq.isDefinedAndNotNull(a) && (a = a.replace(/((^\")|(\"$))/g, "").split("::")[0]);
        fourSq.api.getSessionIdToken.token_ = a
    }
    return fourSq.api.getSessionIdToken.token_
};
fourSq.api.url = function(a, c) {
    return (c || fourSq.config.api.API_BASE) + a
};
fourSq.api.requestId = function(a) {
    return a.data.meta.requestId
};
fourSq.api.services.rawBundleSuccess_ = function(a, c, b) {
    return {
        data: a,
        textStatus: c,
        jqXHR: b
    }
};
fourSq.api.services.rawBundleError_ = function(a, c, b) {
    return {
        jqXHR: a,
        textStatus: c,
        errorThrown: b
    }
};
fourSq.api.services.debugTraceHandlers_ = [];
fourSq.api.services.addDebugTraceHandler = function(a) {
    fourSq.api.services.debugTraceHandlers_.push(a)
};
fourSq.api.services.handleDebugTrace_ = function(a) {
    _(fourSq.api.services.debugTraceHandlers_).each(function(c) {
        c(a)
    })
};
fourSq.api.services.wrapOnSuccess_ = function(a, c, b) {
    if (c) return b = b || function() {},
        function(d, k, l) {
            fourSq.isDefinedAndNotNull(d.debugtrace) && fourSq.api.services.handleDebugTrace_(d.debugtrace);
            200 == d.meta.code ? (fourSq.api.getLogger().debug("success"), c(a(d.response), fourSq.api.services.rawBundleSuccess_(d, k, l))) : (fourSq.api.getLogger().error("non 200 meta code on api response", d), b(d.meta, fourSq.api.services.rawBundleSuccess_(d, k, l)))
        }
};
fourSq.api.services.wrapOnError_ = function(a) {
    if (a) return function(c, b, d) {
        var k = null;
        try {
            fourSq.api.getLogger().error("error on xhr", [c.responseText]), k = JSON.parse(c.responseText)
        } catch (l) {}
        if (k && k.meta) {
            var h = k.meta,
                e = h.validationUrl;
            if (423 === h.code && e) {
                window.location.href = fourSq.util.appendParams(e, {
                    "continue": window.location.href
                });
                return
            }
        }
        a({
            code: b,
            response: k
        }, fourSq.api.services.rawBundleError_(c, b, d))
    }
};
fourSq.api.services.foursquareService_ = function(a, c, b) {
    c = _.extend({
        m: "foursquare"
    }, c);
    return fourSq.api.services.service_(a, c, b)
};
fourSq.api.services.foursquareUploadFile_ = function(a, c, b) {
    return fourSq.api.services.uploadFile_(a, c, b, {
        m: "foursquare"
    })
};
fourSq.api.services.service_ = function(a, c, b) {
    b = {
        error: b.error || function() {},
        success: b.success || function() {},
        type: b.type || "GET"
    };
    c = fourSq.api.services.getCommonParams_(c);
    b.url = a;
    b.data = c;
    return fourSq.api.ajax(b)
};
fourSq.api.services.uploadFile_ = function(a, c, b, d) {
    b = {
        error: b.error || function() {},
        success: b.success || function() {},
        type: "POST"
    };
    var k = fourSq.api.services.getCommonParams_(d);
    if (void 0 === window.FormData) fourSq.debug.error("Tried to upload a photo on an unsupported browser");
    else {
        var l = new FormData;
        _.each(_.keys(k), function(a) {
            l.append(a, k[a])
        });
        l.append("file", c);
        b.url = a;
        b.data = l;
        b.processData = !1;
        b.contentType = !1;
        return fourSq.api.ajax(b)
    }
};
fourSq.api.services.getCommonParams_ = function(a) {
    a = a || {};
    a = _.extend({
        locale: fourSq.i18n.languagePref(),
        "explicit-lang": fourSq.config.api.EXPLICIT_LANG,
        v: fourSq.config.api.CLIENT_VERSION
    }, a);
    var c = fourSq.config.api.REFERRAL_ID;
    fourSq.isDefinedAndNotNull(c) && (a = _.extend(a, {
        referralId: c
    }));
    fourSq.config.debugLevel() == fourSq.debug.Level.DEBUG && (a.debug = "backtrace");
    fourSq.api.getSessionIdToken() && (a.wsid = fourSq.api.getSessionIdToken());
    a.oauth_token = a.oauth_token || fourSq.config.api.API_TOKEN;
    return a
};
fourSq.api.net.IFrameBasedAjax = function() {
    var a = {
        xhrCallback: null,
        iframeLoading: !1,
        loadQueue: [],
        addLoadCallback: function(c) {
            a.isLoaded() ? c() : a.loadQueue.push(c)
        },
        runLoadCallbacks: function() {
            _.each(a.loadQueue, function(a) {
                a()
            })
        },
        isLoaded: function() {
            return null != a.xhrCallback
        },
        buildIframe: function() {
            if (!a.iframeLoading) {
                a.iframeLoading = !0;
                var c = document.createElement("DIV"),
                    b = fourSq.config.api.API_IFRAME + "?parent\x3d" + encodeURIComponent(window.location.href);
                c.innerHTML = '\x3ciframe onload\x3d"fourSq._tempIframeCallback()" id\x3d"xd_iframe" tabindex\x3d"-1" role\x3d"presentation" style\x3d"position:absolute;top:-9999px;" src\x3d"' +
                    b + '"\x3e\x3c/iframe\x3e';
                var d = c.firstChild;
                fourSq._tempIframeCallback = function() {
                    delete fourSq._tempIframeCallback;
                    a.xhrCallback = !window.XMLHttpRequest || "file:" === window.location.protocol && window.ActiveXObject ? function() {
                        try {
                            return new d.contentWindow.ActiveXObject("Microsoft.XMLHTTP")
                        } catch (a) {}
                    } : function() {
                        return new d.contentWindow.XMLHttpRequest
                    };
                    a.runLoadCallbacks()
                };
                document.body.appendChild(d)
            }
        }
    };
    return function(c) {
        a.isLoaded() ? (c.xhr = a.xhrCallback, c.crossDomain = !1, c.dataType = "json", fourSq.api.getLogger().debug((c.type ||
            "GET") + " request to " + c.url, c), $.ajax(c)) : (a.addLoadCallback(function() {
            fourSq.api.ajax(c)
        }), fourSq.onPageReady(function() {
            a.buildIframe()
        }))
    }
}();
fourSq.api.setAjaxHandler(fourSq.api.net.IFrameBasedAjax);
fourSq.api.services.addDebugTraceHandler(function(a) {
    fourSq.debug.Tracer.getInstance().mergeTrace(a)
});
fourSq.api.services.Private = {
    logActions: function(a, c, b) {
        a = {
            loglines: JSON.stringify(a.actions),
            isMobile: a.isMobile,
            logType: "j"
        };
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.logActions(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                return a
            }, c, b),
            error: fourSq.api.services.wrapOnError_(b),
            type: "POST"
        })
    },
    friendSuggestions: function(a, c) {
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.friendsuggestions(), {}, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                    return a
                },
                a, c),
            error: fourSq.api.services.wrapOnError_(c),
            type: "GET"
        })
    },
    ignoreFriendSuggestion: function(a, c, b) {
        a = {
            userId: a
        };
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.ignorefriendsuggestion(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                return null
            }, c, b),
            error: fourSq.api.services.wrapOnError_(b),
            type: "POST"
        })
    },
    googleContacts: function(a, c, b) {
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.googleContacts(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                    return a
                },
                c, b),
            error: fourSq.api.services.wrapOnError_(b),
            type: "GET"
        })
    },
    linkFacebook: function(a, c, b) {
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.linkfacebook(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                return null
            }, c, b),
            error: fourSq.api.services.wrapOnError_(b),
            type: "POST"
        })
    },
    photoRanker: function(a, c, b) {
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.photoRanker(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                return a
            }, c, b),
            error: fourSq.api.services.wrapOnError_(b),
            type: "POST"
        })
    },
    photoRankerMarkSkip: function(a, c, b) {
        a = {
            workId: a
        };
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.photoRankerMarkSkip(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                return a
            }, c, b),
            error: fourSq.api.services.wrapOnError_(b),
            type: "POST"
        })
    },
    photoRankerNextVenues: function(a, c, b) {
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.photoRankerNextVenues(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                return a
            }, c, b),
            error: fourSq.api.services.wrapOnError_(b),
            type: "POST"
        })
    },
    logViews: function(a) {
        var c = function() {};
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.logViews(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                return a
            }, function() {}, c),
            error: fourSq.api.services.wrapOnError_(c),
            type: "POST"
        })
    },
    shareMessages: function(a, c, b) {
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.shareMessages(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                return a
            }, c, b),
            error: fourSq.api.services.wrapOnError_(b),
            type: "GET"
        })
    },
    webbounds: function(a, c, b, d) {
        a = {
            near: a,
            ll: c
        };
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.webbounds(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                return {
                    count: 1,
                    items: [{
                        geometry: {
                            bounds: a.suggestedBoundingBox
                        }
                    }]
                }
            }, b, d),
            error: fourSq.api.services.wrapOnError_(d)
        })
    },
    toggleVisibility: function(a, c, b, d) {
        a = {
            visibility: c,
            photoId: a
        };
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.togglePhotoVisibility(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                    return a
                },
                b, d),
            error: fourSq.api.services.wrapOnError_(d),
            type: "POST"
        })
    },
    twitterUser: function(a, c, b) {
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.twitterUser(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                return a
            }, c, b),
            error: fourSq.api.services.wrapOnError_(b),
            type: "GET"
        })
    },
    facebookFriends: function(a, c, b) {
        fourSq.api.services.foursquareService_(fourSq.api.services.paths.privateservice.facebookFriends(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                    return a
                },
                c, b),
            error: fourSq.api.services.wrapOnError_(b),
            type: "GET"
        })
    },
    createVenueGroupFromTSV: function(a, c, b, d) {
        a = {
            url: a
        };
        c && (a.userId = c);
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.createVenueGroupFromTSV(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                return a
            }, b, d),
            error: fourSq.api.services.wrapOnError_(d),
            type: "POST"
        })
    },
    uploadToS3: function(a, c, b) {
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.uploadToS3(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                    return a
                },
                c, b),
            error: fourSq.api.services.wrapOnError_(b),
            type: "POST"
        })
    },
    initiatePortabilityRequest: function(a, c) {
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.initiatePortabilityRequest(), {}, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                return a
            }, a, c),
            error: fourSq.api.services.wrapOnError_(c),
            type: "POST"
        })
    },
    logPermissionsChange: function(a, c, b) {
        fourSq.api.services.service_(fourSq.api.services.paths.privateservice.logPermissionsChange(), a, {
            success: fourSq.api.services.wrapOnSuccess_(function(a) {
                    return a
                },
                c, b),
            error: fourSq.api.services.wrapOnError_(b),
            type: "POST"
        })
    }
};
fourSq.api.services.Private.FacebookFriendsIntent = {
    ALL: "all",
    ALL_NO_INVITE: "allnoinvite",
    NO_FOURSQUARE_FRIENDS: "no4sqfriends",
    NO_FOURSQUARE_ACCOUNT: "no4sqaccount",
    NO_FOURSQUARE_FRIENDS_NO_INVITE: "no4sqfriendsnoinvite"
};
fourSq.api.services.paths.privateservice = {
    facebookFriends: function() {
        return "v2/private/facebookfriends"
    },
    logActions: function() {
        return "v2/private/logactions"
    },
    friendsuggestions: function() {
        return "v2/private/friendsuggestions"
    },
    ignorefriendsuggestion: function() {
        return "v2/private/ignorefriendsuggestion"
    },
    googleContacts: function() {
        return "v2/private/googlecontacts"
    },
    linkfacebook: function() {
        return "v2/private/linkfacebook"
    },
    logViews: function() {
        return "v2/private/logviews"
    },
    photoRanker: function() {
        return "v2/private/photoranker/rank"
    },
    photoRankerMarkSkip: function() {
        return "v2/private/photoranker/markskip"
    },
    photoRankerNextVenues: function() {
        return "v2/private/photoranker/nextvenues"
    },
    shareMessages: function() {
        return "v2/private/sharemessage"
    },
    webbounds: function() {
        return "v2/private/webbounds"
    },
    togglePhotoVisibility: function() {
        return "v2/private/photo/togglevisibility"
    },
    twitterUser: function() {
        return "v2/private/twitteruser"
    },
    createVenueGroupFromTSV: function() {
        return "v2/private/createvenuegroupfromtsv"
    },
    uploadToS3: function() {
        return "v2/private/uploadtos3"
    },
    initiatePortabilityRequest: function() {
        return "v2/private/portability/initiaterequest"
    },
    logPermissionsChange: function() {
        return "v2/private/permissionslogging"
    }
};
fourSq.debug.Level = {
    DEBUG: 500,
    INFO: 300,
    ERROR: 100,
    OFF: 0
};
fourSq.debug.LogHandler = function() {};
fourSq.debug.LogHandler.prototype.log = function(a) {};
fourSq.debug.Logger = function(a, c) {};
fourSq.debug.Logger.prototype.addHandler = function(a) {};
fourSq.debug.Logger.prototype.clearHandlers = function() {};
fourSq.debug.Logger.prototype.removeHandlers = function(a) {};
fourSq.debug.Logger.prototype.handlers = function() {};
fourSq.debug.Logger.prototype.debug = function(a, c, b) {};
fourSq.debug.Logger.prototype.error = function(a, c, b) {};
fourSq.debug.Logger.prototype.softException = function(a, c, b, d, k) {};
fourSq.debug.Logger.prototype.info = function(a, c, b) {};
fourSq.debug.NoOpLogger = function(a, c) {};
fourSq.debug.NoOpLogger.prototype.addHandler = function(a) {};
fourSq.debug.NoOpLogger.prototype.clearHandlers = function() {};
fourSq.debug.NoOpLogger.prototype.removeHandlers = function(a) {};
fourSq.debug.NoOpLogger.prototype.handlers = function() {};
fourSq.debug.NoOpLogger.prototype.debug = function(a, c, b) {};
fourSq.debug.NoOpLogger.prototype.error = function(a, c, b) {};
fourSq.debug.NoOpLogger.prototype.softException = function(a, c, b, d, k) {};
fourSq.debug.NoOpLogger.prototype.info = function(a, c, b) {};
fourSq.debug.getLogger = function(a) {
    return fourSq.debug.getLoggerImpl_ ? fourSq.debug.getLoggerImpl_(a) : new fourSq.debug.NoOpLogger("", [])
};
fourSq.debug.addHandler = function(a) {
    fourSq.debug.getLogger().addHandler(a)
};
fourSq.debug.debug = function(a, c, b) {
    fourSq.debug.getLogger().debug(a, c, b)
};
fourSq.debug.error = function(a, c, b) {
    fourSq.debug.getLogger().error(a, c, b)
};
fourSq.debug.info = function(a, c, b) {
    fourSq.debug.getLogger().info(a, c, b)
};
fourSq.debug.softException = function(a, c, b, d, k) {
    fourSq.debug.getLogger().softException(a, c, b, d, k)
};
fourSq.debug.BaseLogger = function(a, c) {
    this.name_ = a;
    this.handlers_ = c
};
fourSq.debug.BaseLogger.prototype = {
    addHandler: function(a) {
        this.handlers_.push(a)
    },
    clearHandlers: function() {
        this.handlers_ = []
    },
    removeHandlers: function(a) {
        for (var c = [], b = 0, d; d = this.handlers_[b]; b++) a(d) || c.push(d);
        this.handlers_ = c
    },
    handlers: function() {
        return this.handlers_
    },
    debug: function(a, c, b) {
        this.log_(fourSq.debug.Level.DEBUG, a, c, b)
    },
    error: function(a, c, b) {
        this.log_(fourSq.debug.Level.ERROR, a, c, b)
    },
    softException: function(a, c, b, d, k) {
        this.log_(fourSq.debug.Level.ERROR, a, c, b);
        if (fourSq.isDefinedAndNotNull(fourSq.errorreporter) &&
            fourSq.isDefinedAndNotNull(fourSq.errorreporter.JsErrorReporter)) fourSq.errorreporter.JsErrorReporter.onError(a, d, k)
    },
    info: function(a, c, b) {
        this.log_(fourSq.debug.Level.INFO, a, c, b)
    },
    log_: function(a, c, b, d) {
        for (var k = 0, l; l = this.handlers_[k]; k++) l.log({
            level: a,
            loggerName: this.name_,
            msg: c,
            args: b,
            argFormatter: d
        })
    }
};
fourSq.debug.loggers_ = {};
fourSq.debug.getLoggerImpl_ = function(a) {
    a = a || "root";
    var c = fourSq.debug.loggers_[a];
    if (c) return c;
    c = new fourSq.debug.BaseLogger(a, []);
    return fourSq.debug.loggers_[a] = c
};
fourSq.debug.reset = function() {
    fourSq.debug.loggers_ = {}
};
fourSq.debug.ConsoleLogHandler = function(a) {
    this.level_ = a
};
fourSq.debug.ConsoleLogHandler.prototype = {
    log: function(a) {
        if (!(a.level > this.level_) && window.console) {
            var c = null,
                c = a.level == fourSq.debug.Level.INFO && window.console.info ? function(a) {
                    window.console.info(a)
                } : a.level == fourSq.debug.Level.ERROR && window.console.error ? function(a) {
                    window.console.error(a)
                } : a.level == fourSq.debug.Level.DEBUG && window.console.debug ? function(a) {
                    window.console.debug(a)
                } : function(a) {
                    window.console.log(a)
                },
                b = new Date,
                b = b.toISOString ? b.toISOString() : b.getTime();
            c("[" + a.loggerName + " " +
                b + "] " + a.msg);
            a.args && (a.argFormatter ? c(a.argFormatter(a.args)) : c(a.args))
        }
    }
};
fourSq.debug.FloatingDivLogHandler = function(a) {
    this.level_ = a
};
fourSq.debug.FloatingDivLogHandler.domReadyCacher = {
    domReady: !1,
    onDomReadyQueue: [],
    onDomReady: function() {
        fourSq.debug.FloatingDivLogHandler.domReadyCacher.domReady = !0;
        _(fourSq.debug.FloatingDivLogHandler.domReadyCacher.onDomReadyQueue).each(function(a) {
            a()
        });
        delete fourSq.debug.FloatingDivLogHandler.domReadyCacher.onDomReadyQueue
    }
};
fourSq.debug.FloatingDivLogHandler.prototype = {
    settingsForRecord_: function(a) {
        this.headerDebugCount_ = this.headerDebugCount_ || $(".debug-count", this.header_);
        this.headerErrorCount_ = this.headerErrorCount_ || $(".error-count", this.header_);
        this.headerInfoCount_ = this.headerInfoCount_ || $(".info-count", this.header_);
        return a.level == fourSq.debug.Level.DEBUG ? {
            countNode: this.headerDebugCount_,
            className: "debug"
        } : a.level == fourSq.debug.Level.ERROR ? {
            countNode: this.headerErrorCount_,
            className: "error"
        } : {
            countNode: this.headerInfoCount_,
            className: "info"
        }
    },
    init_: function() {
        this.header_ = $("#debug-node-header");
        this.body_ = $("#debug-node-msg-container");
        this.header_.length && this.body_.length || (this.level_ = fourSq.debug.Level.OFF);
        this.level_ > fourSq.debug.Level.OFF && this.header_.removeClass("hidden");
        this.inited_ = !0
    },
    log: function(a) {
        fourSq.debug.FloatingDivLogHandler.domReadyCacher.domReady ? this.doLog_(a) : this.doQueue_(a)
    },
    doQueue_: function(a) {
        fourSq.debug.FloatingDivLogHandler.domReadyCacher.onDomReadyQueue.push(fourSq.curry(this.doLog_,
            this, a))
    },
    doLog_: function(a) {
        this.inited_ || this.init_();
        if (!(a.level > this.level_)) {
            var c = this.settingsForRecord_(a);
            c.countNode.text(parseInt(c.countNode.text(), 10) + 1);
            var b = null;
            a.args && (a.argFormatter ? b = a.argFormatter(a.args) : (b = [], _.isArray(a.args) ? (b = _.map(a.args, function(a) {
                return window.JSON && window.JSON.stringify ? JSON.stringify(a) : a
            }), b = b.join("\x3cbr /\x3e")) : b = window.JSON && window.JSON.stringify ? [JSON.stringify(a.args)] : [a.args]));
            a = $(templates.fourSq.debug.logMessage({
                className: c.className,
                loggerName: a.loggerName,
                time: new Date,
                msg: a.msg,
                args: b
            }));
            this.body_.append(a)
        }
    }
};
fourSq.debug.FloatingDivLogHandler.initDebugNode = function() {
    $(function() {
        $(document.body).append(templates.fourSq.debug.debugNode());
        fourSq.debug.FloatingDivLogHandler.domReadyCacher.onDomReady()
    })
};
fourSq.debug.Tracer = function(a, c) {};
fourSq.debug.Tracer = fourSq.EventTarget.extend({
    paths: function() {
        return _.map(this.traceNodes_, function(a) {
            return a.name
        })
    },
    initialize: function() {
        this.traceNodes_ = []
    },
    mergeTrace: function(a) {
        this.traceNodes_.push(a);
        window.setTimeout(fourSq.bind(function() {
            this.trigger("add", a)
        }, this), 700)
    }
}, {
    getInstance: function() {
        fourSq.debug.Tracer.instance_ || (fourSq.debug.Tracer.instance_ = new fourSq.debug.Tracer);
        return fourSq.debug.Tracer.instance_
    }
});
fourSq.net.QueryString = function(a) {};
fourSq.net.QueryString = fourSq.EventTarget.extend({
    initialize: function(a) {
        this.encodedQuery_ = fourSq.isDefinedAndNotNull(a) ? a.query : null;
        fourSq.isDefinedAndNotNull(this.encodedQuery_) && 0 < this.encodedQuery_.length && "?" == this.encodedQuery_[0] && (this.encodedQuery_ = this.encodedQuery_.substring(1));
        this.values_ = {};
        this.valuesModified_ = !1;
        this.initValues_()
    },
    setAndPop: function(a, c) {
        var b = this.get(a);
        this.values_[a] = c;
        this.valuesModified_ = !0;
        return b
    },
    set: function(a, c) {
        this.setAndPop(a, c);
        return this
    },
    maybeSet: function(a,
        c) {
        fourSq.isDefinedAndNotNull(c) && this.set(a, c);
        return this
    },
    setAll: function(a) {
        _.extend(this.values_, a);
        this.valuesModified_ = !0;
        return this
    },
    containsKey: function(a) {
        return fourSq.isDefinedAndNotNull(this.get(a))
    },
    get: function(a) {
        return this.values_[a]
    },
    remove: function(a) {
        return this.containsKey(a) ? (delete this.values_[a], this.valuesModified_ = !0) : !1
    },
    strip: function(a) {
        var c = {};
        _.each(a, fourSq.bind(function(a) {
            this.containsKey(a) && (c[a] = this.get(a), this.remove(a))
        }, this));
        return c
    },
    toDisplayString: function() {
        this.valuesModified_ &&
            this.reencodeString_();
        return this.encodedQuery_ || ""
    },
    reencodeString_: function() {
        for (var a = _.keys(this.values_).sort(), c = "", b = 0, d; d = a[b]; b++) {
            var k = this.values_[d];
            d = encodeURIComponent(d) + "\x3d" + (fourSq.isDefinedAndNotNull(k) && 0 < k.length ? encodeURIComponent(k) : "");
            0 < c.length && (c += "\x26");
            c += d
        }
        this.encodedQuery_ = c;
        this.valuesModified_ = !1
    },
    initValues_: function() {
        if (fourSq.isDefinedAndNotNull(this.encodedQuery_))
            for (var a = this.encodedQuery_.split("\x26"), c = 0, b; b = a[c]; c++) {
                var d = b.indexOf("\x3d"),
                    k = "",
                    l = "";
                0 <= d ? (k = b.substring(0, d), l = b.substring(d + 1)) : k = b;
                fourSq.isDefinedAndNotNull(l);
                this.values_[decodeURIComponent(k)] = decodeURIComponent(l)
            }
    }
});
fourSq.net.Updater = function(a) {};
fourSq.net.Updater = fourSq.EventTarget.extend({
    initialize: function(a) {
        if (fourSq.isUndefinedOrNull(a.endpoint)) throw Error("A endpoint is required for the fourSq.net.Updater!");
        this.endpoint = a.endpoint;
        this.counter = function(a) {
            return a.length
        };
        fourSq.isDefinedAndNotNull(a.countFunction) && (this.counter = a.countFunction);
        this.params = _.extend({}, a.params);
        this.updateTitle = !0 === a.updateTitle;
        this.baseFrequency_ = fourSq.isDefinedAndNotNull(a.baseFrequency) ? a.baseFrequency : 30;
        this.attempts = this.unreadCount =
            0;
        this.pageTitle = document.title;
        this.continueUpdating = !1
    },
    startUpdating: function() {
        this.continueUpdating || (this.continueUpdating = !0, setTimeout(fourSq.bind(this.checkForUpdates_, this), this.getTimeout_()))
    },
    stopUpdating: function() {
        this.continueUpdating = !1
    },
    reset: function() {
        this.unreadCount = this.attempts = 0;
        document.title = this.pageTitle
    },
    setParams: function(a) {
        _.extend(this.params, a)
    },
    checkForUpdates_: function() {
        this.trigger(fourSq.net.Updater.Events.CALLING, parseInt((new Date).getTime() / 1E3, 10));
        this.endpoint(fourSq.bind(function(a) {
            var c =
                this.counter(a);
            c > this.unreadCount && (this.unreadCount = c, this.updatePageTitle_());
            this.trigger(fourSq.net.Updater.Events.UPDATED, c, a)
        }, this), function() {}, this.params);
        this.attempts++;
        this.continueUpdating && setTimeout(fourSq.bind(this.checkForUpdates_, this), this.getTimeout_())
    },
    updatePageTitle_: function() {
        this.updateTitle && 0 < this.unreadCount && (document.title = "(" + this.unreadCount + ") " + this.pageTitle)
    },
    getTimeout_: function() {
        var a = 0,
            a = 5 >= this.attempts ? 0 : 8 >= this.attempts ? 1 : 11 >= this.attempts ? 2 : 3;
        return this.baseFrequency_ *
            Math.pow(2, a) * 1E3
    }
}, {
    Events: {
        CALLING: "calling",
        UPDATED: "updated"
    }
});
(function() {
    fourSq.layoutUtil = {
        flowColumns: function(a, c, b) {
            for (var d = Array(b), k = 0; k < b; k++) d[k] = [];
            for (var l = Array(b), k = 0; k < b; k++) l[k] = 0;
            var h = 0;
            c.each(function(a) {
                h = Math.max($(this).outerHeight(!0), h)
            });
            var e = Math.round(h / 3);
            c.each(function(a) {
                $(this).height(function() {
                    var a = $(this).outerHeight(!0) - $(this).height();
                    return Math.min(Math.ceil($(this).outerHeight(!0) / e), 3) * e - a
                });
                a = Math.max($.inArray(Math.min.apply(null, l), l), 0);
                d[a].push($(this));
                $(this).css({
                    "float": "none",
                    position: "absolute",
                    left: $(this).outerWidth(!0) *
                        a + "px",
                    top: l[a]
                });
                l[a] += $(this).outerHeight(!0)
            });
            a.css("height", Math.max.apply(null, l))
        }
    }
})();
var templates = {},
    helpers = {};
fourSq.soyhelpers.markEntities = function(a) {
    a = _.map(a.entities || [], function(a, b) {
        return {
            entity: a,
            index: b
        }
    });
    a = a.sort(function(a, b) {
        if (a.entity.indices[0] < b.entity.indices[0]) return -1;
        if (a.entity.indices[0] > b.entity.indices[0]) return 1;
        var c = b.entity.indices[1] - a.entity.indices[1];
        return 0 !== c ? c : a.index - b.index
    });
    for (var c = [], b = 0; b < a.length; b++) {
        var d = a[b];
        if (-1 === c.indexOf(b))
            for (var k = b + 1; k < a.length; k++) {
                var l = a[k];
                d.entity.indices[0] < l.entity.indices[0] && l.entity.indices[0] < d.entity.indices[1] &&
                    d.entity.indices[1] < l.entity.indices[1] && c.push(k)
            }
    }
    d = [];
    for (b = 0; b < a.length; b++) - 1 === c.indexOf(b) && d.push(a[b]);
    a = _.flatten(_.map(d, function(a) {
        a = a.entity;
        return [{
            index: a.indices[0],
            isOpen: !0,
            entity: a
        }, {
            index: a.indices[1],
            isOpen: !1,
            entity: a
        }]
    }));
    return _.sortBy(a, function(a) {
        return a.index
    })
};
"undefined" == typeof templates.fourSq && (templates.fourSq = {});
"undefined" == typeof templates.fourSq.debug && (templates.fourSq.debug = {});
templates.fourSq.debug.debugNode = function(a, c) {
    return '\x3cdiv\x3e\n  \x3cstyle type\x3d"text/css"\x3e\n    #debug-node {\n      position: fixed;\n      bottom: 0;\n      right: 0;\n      width: 400px;\n      font-size: 10px;\n      overflow: auto;\n      z-index: 300;\n    }\n\n    #debug-node-header {\n      overflow: auto;\n      background-color: #888;\n      font-weight: bold;\n      cursor: pointer;\n      padding: 3px 6px;\n      border: 1px solid #000;\n      border-bottom: 0;\n    }\n\n    #debug-node-header.hidden {\n      display: none;\n    }\n\n    #debug-node-header .type {\n      padding: 3px 6px;\n      margin-right: 12px;\n    }\n\n    #debug-node-msg-container .log-message.info,\n    #debug-node-header .info {\n      background-color: #b5d29c;\n    }\n\n    #debug-node-msg-container .log-message.error,\n    #debug-node-header .error {\n      background-color: #ff776b;\n    }\n\n    #debug-node-msg-container .log-message.debug,\n    #debug-node-header .debug {\n      background-color: #fffb89;\n    }\n\n    #debug-node-messages {\n      display: none;\n      background-color: #fff;\n    }\n\n    #debug-node:hover #debug-node-messages {\n      display: block;\n      border: 1px solid #888;\n    }\n\n    #debug-node-msg-container {\n      overflow: auto;\n      height: 400px;\n    }\n\n    #debug-node-msg-container .log-message {\n      border-bottom: 1px solid #888;\n      padding: 6px;\n    }\n\n    #debug-node-msg-container .log-message .logger {\n      font-weight: bold;\n    }\n\n    #debug-node-msg-container .log-message .args {\n      margin-bottom: 6px;\n      font-style: italic;\n    }\n  \x3c/style\x3e\n  \x3cdiv id\x3d"debug-node"\x3e\x3cdiv id\x3d"debug-node-header" class\x3d"hidden"\x3enerd area/logging:\x3cspan class\x3d"info type"\x3e\x3cspan class\x3d"info-count"\x3e0\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"error type"\x3e\x3cspan class\x3d"error-count"\x3e0\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"debug type"\x3e\x3cspan class\x3d"debug-count"\x3e0\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv id\x3d"debug-node-messages"\x3e\x3cdiv id\x3d"debug-node-msg-container"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'
};
templates.fourSq.debug.logMessage = function(a, c) {
    return '\x3cdiv class\x3d"log-message ' + soy.$$escapeHtml(a.className) + '"\x3e\x3cdiv class\x3d"logger"\x3e[' + soy.$$escapeHtml(a.loggerName) + "] " + soy.$$escapeHtml(a.time) + "\x3c/div\x3e" + (a.msg ? '\x3cdiv class\x3d"msg"\x3e' + soy.$$escapeHtml(a.msg) + "\x3c/div\x3e" : "") + (a.args ? '\x3cdiv class\x3d"args"\x3e' + soy.$$escapeHtml(a.args) + "\x3c/div\x3e" : "") + "\x3c/div\x3e"
};
templates.fourSq.debug.traceLink = function(a, c) {
    return '\x3cdiv style\x3d"margin-left: 1em"\x3e\x3ca target\x3d"_blank" href\x3d"http://quickmon.prod.foursquare.com/tracing/trace/' + soy.$$escapeHtml(a.traceId) + '"\x3eView on Traceweb\x3c/a\x3e\x3c/div\x3e'
};
templates.fourSq.debug.traceNode = function(a, c) {
    return '\x3cdiv id\x3d"traceContainer" class\x3d"off"\x3e\x3cdiv id\x3d"traceTrigger"\x3eTracer (\x3cspan class\x3d"count"\x3e0\x3c/span\x3e)' + (a.env ? " - \x3cspan\x3e" + soy.$$escapeHtml(a.env) + "\x3c/span\x3e" : "") + '\x3c/div\x3e\x3cdiv id\x3d"trace" style\x3d"overflow-x: scroll;"\x3e\x3c/div\x3e\x3c/div\x3e'
};
templates.fourSq.debug.traceItems = function(a, c) {
    var b;
    b = "" + ('\x3cdiv style\x3d"margin-left: 1em"\x3e\x3c!-- \x3ca class\x3d"traceViewToggle"\x3e' + soy.$$escapeHtml(a.trace.name) + '\x3c/a\x3e \x3cbr /\x3e --\x3e\x3ca class\x3d"link traceViewToggle"\x3e[Toggle Timeline]\x3c/a\x3e |\x3ca class\x3d"link togglable-link" data-toggle-type\x3d"threadName"\x3e[Toggle Thread IDs]\x3c/a\x3e |   \x3ca target\x3d"_blank" class\x3d"traceweb-link" style\x3d"display: none" data-id\x3d"' + soy.$$escapeHtml(a.trace.id) +
        '" href\x3d"http://quickmon.prod.foursquare.com/tracing/trace/' + soy.$$escapeHtml(a.trace.id) + '"\x3eView on Traceweb\x3c/a\x3e\x3cdiv class\x3d"traceList" style\x3d"padding-left:1em; width:99%;"\x3e');
    for (var d = a.trace.span.log, k = d.length, l = 0; l < k; l++) {
        var h = d[l],
            e = null != h.end ? h.end - h.start : null;
        b += '\x3cdiv class\x3d"trace-item closed " style\x3d"text-decoration: none;"\x3e' + (h.backtrace && 0 < h.backtrace.length ? '\x3cspan class\x3d"toggler closed"\x3e\x26#9654;\x3c/span\x3e\x3cspan class\x3d"toggler open"\x3e\x26#9660;\x3c/span\x3e' :
            "") + '\x3cdiv class\x3d"trace-summary" style\x3d"font-family: monospace; display: inline; white-space: pre;"\x3e' + soy.$$escapeHtml(l + 1) + " thread:" + (null != h.startThreadId ? soy.$$escapeHtml(Math.round(h.startThreadId)) : "-") + " " + (null != e ? "\x3cb\x3e" + soy.$$escapeHtml(Math.round(e)) + " ms\x3c/b\x3e" : "incomplete") + ' \x3cspan class\x3d"remote-marker"\x3e\x3c/span\x3e\x3cspan\x3e' + soy.$$escapeHtml(h.message) + ':\x3c/span\x3e \x3cspan class\x3d"traceText"\x3e' + soy.$$escapeHtml(h.message) + "\x3c/span\x3e\x3c/div\x3e";
        if (h.backtrace && 0 < h.backtrace.length) {
            b += '\x3cdiv class\x3d"backtrace"\x3e\x3cdiv\x3eThread Name : ' + soy.$$escapeHtml(h.startThreadName) + "\x3c/div\x3e\x3cdiv\x3e\x3cb\x3e" + soy.$$escapeHtml(h.mostRelevantTraceItem) + "(Most relevant stack trace item)\x3c/b\x3e\x3c/div\x3e\x3chr/\x3e";
            for (var h = h.backtrace, e = h.length, g = 0; g < e; g++) b += "\x3cdiv\x3e" + soy.$$escapeHtml(h[g]) + "\x3c/div\x3e";
            b += "\x3c/div\x3e"
        }
        b += "\x3c/div\x3e"
    }
    d = a.trace.span.runLog.end - a.trace.span.runLog.start;
    b += '\x3c/div\x3e\x3cdiv class\x3d"traceTimeline"\x3e\x3ctable class\x3d"trace"\x3e\x3cthead\x3e\x3cth\x3e\x3c/th\x3e\x3cth\x3ename\x3c/th\x3e\x3cth\x3ethread name\x3c/th\x3e\x3cth\x3ethread id\x3c/th\x3e\x3cth\x3eduration ms\x3c/th\x3e\x3cth class\x3d"traceTimeline"\x3etimeline\x3c/th\x3e\x3c/thead\x3e\x3ctbody\x3e';
    k = a.trace.span.log;
    l = k.length;
    for (h = 0; h < l; h++) {
        var e = k[h],
            g = null != e.end ? e.end - e.start : null,
            f = Math.round((e.start - a.trace.span.runLog.start) / d * 900),
            p = Math.round(g / d * 900);
        b += '\x3ctr class\x3d"traceRow" data-async-stack\x3d"' + soy.$$escapeHtml(e.asyncStack) + '"' + (e.stackTrace ? 'data-stack-trace\x3d"' + soy.$$escapeHtml(e.stackTrace) + '"' : "") + "\x3e\x3ctd\x3e" + soy.$$escapeHtml(h + 1) + "\x3c/td\x3e\x3ctd\x3e" + ("statmon" == e.name ? "Statmon \u2014 " + soy.$$escapeHtml(e.message) : soy.$$escapeHtml(e.message)) + "\x3c/td\x3e\x3ctd\x3e" +
            (null != e.startThreadName ? '\x3cspan class\x3d"togglable togglable-hidden" data-toggle-type\x3d"threadName"\x3e' + soy.$$escapeHtml(e.startThreadName) + '\x3c/span\x3e\x3cspan class\x3d"togglable" data-toggle-type\x3d"threadName"\x3e\x3ca title\x3d"' + soy.$$escapeHtml(e.startThreadName) + '" class\x3d"togglable-link" data-toggle-type\x3d"threadName"\x3ehidden\x3c/a\x3e\x3c/span\x3e' : "-") + "\x3c/td\x3e\x3ctd\x3e" + (null != e.startThreadId ? soy.$$escapeHtml(Math.round(e.startThreadId)) : "-") + "\x3c/td\x3e\x3ctd\x3e" +
            (null != g ? soy.$$escapeHtml(Math.round(g)) : "-") + '\x3c/td\x3e\x3ctd\x3e\x3cdiv class\x3d"traceTimeSegment" style\x3d"margin-left:' + soy.$$escapeHtml(f) + "px; width:" + soy.$$escapeHtml(p) + 'px;"/\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr class\x3d"traceText "\x3e\x3ctd colspan\x3d"7"\x3e\x3cdiv\x3e\x3cdiv\x3e\x3cstrong\x3eAsync Stack\x3c/strong\x3e\x3c/div\x3e\x3csmall\x3e';
        if (null != e.asyncStack && null != e.asyncStack.stackTrace) {
            g = e.asyncStack.stackTrace;
            f = g.length;
            for (p = 0; p < f; p++) b += "\x3cdiv\x3e" + soy.$$escapeHtml(g[p]) +
                "\x3c/div\x3e";
            b += "\x3c/small\x3e" + (e.stackGap ? "\x3cb\x3eStack Gap\x3cbr/\x3ePrevious: " + soy.$$escapeHtml(e.stackGap[0]) + "\x3cbr/\x3eCurrent: " + soy.$$escapeHtml(e.stackGap[1]) + "\x3c/b\x3e\x3cbr/\x3e" : "")
        }
        b += "\x3c/div\x3e\x3cdiv\x3e";
        if (e.backtrace) {
            b += '\x3ca class\x3d"link expandTraceAnchor"\x3eFull Trace\x3c/a\x3e\x3cdiv style\x3d"display:none;"\x3e';
            g = e.backtrace;
            f = g.length;
            for (p = 0; p < f; p++) {
                var t = g[p];
                b += (e.stackGap && t == e.stackGap[1] ? "\x3cb\x3e" + soy.$$escapeHtml(t) + "\x3c/b\x3e" : soy.$$escapeHtml(t)) +
                    "\x3cbr/\x3e"
            }
            b += "\x3c/div\x3e"
        }
        b += "\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e"
    }
    return b += "\x3c/tbody\x3e\x3c/table\x3e\x3c/div\x3e\x3c/div\x3e\x3chr/\x3e"
};
templates.fourSq.debug.spanChildren = function(a, c) {
    var b;
    b = "" + ('\x3cdiv style\x3d"margin-left: 1em"\x3e\x3c!-- \x3ca class\x3d"traceViewToggle"\x3e' + soy.$$escapeHtml(a.trace.name) + '\x3c/a\x3e \x3cbr /\x3e --\x3e\x3ca class\x3d"link traceViewToggle"\x3e[Toggle Timeline]\x3c/a\x3e |\x3ca class\x3d"link togglable-link" data-toggle-type\x3d"threadName"\x3e[Toggle Thread IDs]\x3c/a\x3e |   \x3ca target\x3d"_blank" class\x3d"traceweb-link" style\x3d"display: none" data-id\x3d"' + soy.$$escapeHtml(a.trace.id) +
        '" href\x3d"http://quickmon.prod.foursquare.com/tracing/trace/' + soy.$$escapeHtml(a.trace.id) + '"\x3eView on Traceweb\x3c/a\x3e\x3cdiv class\x3d"traceList" style\x3d"padding-left:1em; width:99%;"\x3e');
    for (var d = a.children, k = d.length, l = 0; l < k; l++) {
        var h = d[l],
            e = null != h.span.runLog.end ? h.span.runLog.end - h.span.runLog.start : null;
        b += '\x3cdiv class\x3d"trace-item closed " style\x3d"text-decoration: none;"\x3e' + (h.span.runLog.backtrace && 0 < h.span.runLog.backtrace.length ? '\x3cspan class\x3d"toggler closed"\x3e\x26#9654;\x3c/span\x3e\x3cspan class\x3d"toggler open"\x3e\x26#9660;\x3c/span\x3e' :
                "") + '\x3cdiv class\x3d"trace-summary" style\x3d"font-family: monospace; display: inline; white-space: pre;"\x3e' + soy.$$escapeHtml(l + 1) + " thread:" + (null != h.span.runLog.startThreadId ? soy.$$escapeHtml(Math.round(h.span.runLog.startThreadId)) : "-") + " " + (null != e ? "\x3cb\x3e" + soy.$$escapeHtml(Math.round(e)) + " ms\x3c/b\x3e" : "incomplete") + ' \x3cspan class\x3d"remote-marker"\x3e\x3c/span\x3e\x3cspan\x3e\x3ca href\x3d"/trace/' + soy.$$escapeHtml(h.span.id.asString) + '"\x3e' + soy.$$escapeHtml(h.span.app) + ":" + soy.$$escapeHtml(h.span.name) +
            '\x3c/a\x3e\x3c/span\x3e \x3cspan class\x3d"traceText"\x3e' + soy.$$escapeHtml(h.span.runLog.message) + "\x3c/span\x3e\x3c/div\x3e";
        if (h.span.runLog.backtrace && 0 < h.span.runLog.backtrace.length) {
            b += '\x3cdiv class\x3d"backtrace"\x3e\x3cdiv\x3eThread Name : ' + soy.$$escapeHtml(h.span.runLog.startThreadName) + "\x3c/div\x3e\x3cdiv\x3e\x3cb\x3e" + soy.$$escapeHtml(h.span.runLog.mostRelevantTraceItem) + "(Most relevant stack trace item)\x3c/b\x3e\x3c/div\x3e\x3chr/\x3e";
            for (var h = h.span.runLog.backtrace, e = h.length,
                    g = 0; g < e; g++) b += "\x3cdiv\x3e" + soy.$$escapeHtml(h[g]) + "\x3c/div\x3e";
            b += "\x3c/div\x3e"
        }
        b += "\x3c/div\x3e"
    }
    d = a.trace.span.runLog.end - a.trace.span.runLog.start;
    b += '\x3c/div\x3e\x3cdiv class\x3d"traceTimeline"\x3e\x3ctable class\x3d"trace"\x3e\x3cthead\x3e\x3cth\x3e\x3c/th\x3e\x3cth\x3ename\x3c/th\x3e\x3cth\x3ethread name\x3c/th\x3e\x3cth\x3ethread id\x3c/th\x3e\x3cth\x3eduration ms\x3c/th\x3e\x3cth class\x3d"traceTimeline"\x3etimeline\x3c/th\x3e\x3c/thead\x3e\x3ctbody\x3e';
    k = a.children;
    l = k.length;
    for (h =
        0; h < l; h++) {
        var e = k[h],
            g = null != e.span.runLog.end ? e.span.runLog.end - e.span.runLog.start : null,
            f = Math.round((e.span.runLog.start - a.trace.span.runLog.start) / d * 900),
            p = Math.round(g / d * 900);
        b += '\x3ctr class\x3d"traceRow" data-async-stack\x3d"' + soy.$$escapeHtml(e.span.runLog.asyncStack) + '"' + (e.span.runLog.stackTrace ? 'data-stack-trace\x3d"' + soy.$$escapeHtml(e.span.runLog.stackTrace) + '"' : "") + "\x3e\x3ctd\x3e" + soy.$$escapeHtml(h + 1) + '\x3c/td\x3e\x3ctd\x3e\x3ca href\x3d"/trace/' + soy.$$escapeHtml(e.span.id.asString) +
            '"\x3e' + soy.$$escapeHtml(e.span.app) + ":" + soy.$$escapeHtml(e.span.name) + "\x3c/a\x3e\x3c/td\x3e\x3ctd\x3e" + (null != e.span.runLog.startThreadName ? '\x3cspan class\x3d"togglable togglable-hidden" data-toggle-type\x3d"threadName"\x3e' + soy.$$escapeHtml(e.span.runLog.startThreadName) + '\x3c/span\x3e\x3cspan class\x3d"togglable" data-toggle-type\x3d"threadName"\x3e\x3ca title\x3d"' + soy.$$escapeHtml(e.span.runLog.startThreadName) + '" class\x3d"togglable-link" data-toggle-type\x3d"threadName"\x3ehidden\x3c/a\x3e\x3c/span\x3e' :
                "-") + "\x3c/td\x3e\x3ctd\x3e" + (null != e.span.runLog.startThreadId ? soy.$$escapeHtml(Math.round(e.span.runLog.startThreadId)) : "-") + "\x3c/td\x3e\x3ctd\x3e" + (null != g ? soy.$$escapeHtml(Math.round(g)) : "-") + '\x3c/td\x3e\x3ctd\x3e\x3cdiv class\x3d"traceTimeSegment" style\x3d"margin-left:' + soy.$$escapeHtml(f) + "px; width:" + soy.$$escapeHtml(p) + 'px;"/\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr class\x3d"traceText "\x3e\x3ctd colspan\x3d"7"\x3e\x3cdiv\x3e\x3cdiv\x3e\x3cstrong\x3eAsync Stack\x3c/strong\x3e\x3c/div\x3e\x3csmall\x3e';
        if (null != e.span.runLog.asyncStack && null != e.span.runLog.asyncStack.stackTrace) {
            g = e.span.runLog.asyncStack.stackTrace;
            f = g.length;
            for (p = 0; p < f; p++) b += "\x3cdiv\x3e" + soy.$$escapeHtml(g[p]) + "\x3c/div\x3e";
            b += "\x3c/small\x3e" + (e.span.runLog.stackGap ? "\x3cb\x3eStack Gap\x3cbr/\x3ePrevious: " + soy.$$escapeHtml(e.span.runLog.stackGap[0]) + "\x3cbr/\x3eCurrent: " + soy.$$escapeHtml(e.span.runLog.stackGap[1]) + "\x3c/b\x3e\x3cbr/\x3e" : "")
        }
        b += "\x3c/div\x3e\x3cdiv\x3e";
        if (e.span.runLog.backtrace) {
            b += '\x3ca class\x3d"link expandTraceAnchor"\x3eFull Trace\x3c/a\x3e\x3cdiv style\x3d"display:none;"\x3e';
            g = e.span.runLog.backtrace;
            f = g.length;
            for (p = 0; p < f; p++) {
                var t = g[p];
                b += (e.span.runLog.stackGap && t == e.span.runLog.stackGap[1] ? "\x3cb\x3e" + soy.$$escapeHtml(t) + "\x3c/b\x3e" : soy.$$escapeHtml(t)) + "\x3cbr/\x3e"
            }
            b += "\x3c/div\x3e"
        }
        b += "\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e"
    }
    return b += "\x3c/tbody\x3e\x3c/table\x3e\x3c/div\x3e\x3c/div\x3e\x3chr/\x3e"
};
"undefined" == typeof templates.fourSq && (templates.fourSq = {});
"undefined" == typeof templates.fourSq.ui && (templates.fourSq.ui = {});
"undefined" == typeof templates.fourSq.ui.dialog && (templates.fourSq.ui.dialog = {});
templates.fourSq.ui.dialog.modalDialog = function(a, c) {
    return '\x3cdiv id\x3d"modalDialogBox" class\x3d"' + soy.$$escapeHtml(a.className) + '"\x3e\x3cdiv class\x3d"popup"\x3e' + (a.hasCloseButton ? templates.fourSq.ui.dialog.xButton(null) : "") + '\x3cdiv class\x3d"content ' + soy.$$escapeHtml(a.contentClassName) + '"\x3e' + (a.title ? templates.fourSq.ui.dialog.modalTitle(a) : "") + '\x3cdiv class\x3d"modalLoadingContainer"\x3e\x3cdiv class\x3d"contents"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'
};
templates.fourSq.ui.dialog.modalTitle = function(a, c) {
    return '\x3cdiv id\x3d"modalDialogTitle"\x3e\x3ch2 class\x3d"title"\x3e' + soy.$$escapeHtml(a.title) + "\x3c/h2\x3e\x3c/div\x3e"
};
templates.fourSq.ui.dialog.xButton = function(a, c) {
    return '\x3cdiv id\x3d"xButton"\x3e\x3cspan class\x3d"close link"\x3e\x3c/span\x3e\x3c/div\x3e'
};
templates.fourSq.ui.dialog.modalOverlay = function(a, c) {
    return '\x3cdiv id\x3d"modalOverlay" class\x3d"modalHide modalOverlayBG ' + soy.$$escapeHtml(a.overlayClass) + '"\x3e\x3c/div\x3e'
};