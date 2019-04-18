! function(e, a) {
    "object" == typeof exports && "object" == typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? exports.Handlebars = a() : e.Handlebars = a()
}(this, function() {
    return function(e) {
        function a(n) {
            if (l[n]) return l[n].exports;
            var s = l[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(s.exports, s, s.exports, a), s.loaded = !0, s.exports
        }
        var l = {};
        return a.m = e, a.c = l, a.p = "", a(0)
    }([function(e, a, l) {
        "use strict";

        function n() {
            var e = new r.HandlebarsEnvironment;
            return h.extend(e, r), e.SafeString = u["default"], e.Exception = p["default"], e.Utils = h, e.escapeExpression = h.escapeExpression, e.VM = f, e.template = function(a) {
                return f.template(a, e)
            }, e
        }
        var s = l(1)["default"],
            t = l(2)["default"];
        a.__esModule = !0;
        var i = l(3),
            r = s(i),
            o = l(17),
            u = t(o),
            c = l(5),
            p = t(c),
            d = l(4),
            h = s(d),
            m = l(18),
            f = s(m),
            v = l(19),
            g = t(v),
            b = n();
        b.create = n, g["default"](b), b["default"] = b, a["default"] = b, e.exports = a["default"]
    }, function(e, a) {
        "use strict";
        a["default"] = function(e) {
            if (e && e.__esModule) return e;
            var a = {};
            if (null != e)
                for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && (a[l] = e[l]);
            return a["default"] = e, a
        }, a.__esModule = !0
    }, function(e, a) {
        "use strict";
        a["default"] = function(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }, a.__esModule = !0
    }, function(e, a, l) {
        "use strict";

        function n(e, a, l) {
            this.helpers = e || {}, this.partials = a || {}, this.decorators = l || {}, o.registerDefaultHelpers(this), u.registerDefaultDecorators(this)
        }
        var s = l(2)["default"];
        a.__esModule = !0, a.HandlebarsEnvironment = n;
        var t = l(4),
            i = l(5),
            r = s(i),
            o = l(6),
            u = l(14),
            c = l(16),
            p = s(c),
            d = "4.0.5";
        a.VERSION = d;
        var h = 7;
        a.COMPILER_REVISION = h;
        var m = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1",
            7: ">= 4.0.0"
        };
        a.REVISION_CHANGES = m;
        var f = "[object Object]";
        n.prototype = {
            constructor: n,
            logger: p["default"],
            log: p["default"].log,
            registerHelper: function(e, a) {
                if (t.toString.call(e) === f) {
                    if (a) throw new r["default"]("Arg not supported with multiple helpers");
                    t.extend(this.helpers, e)
                } else this.helpers[e] = a
            },
            unregisterHelper: function(e) {
                delete this.helpers[e]
            },
            registerPartial: function(e, a) {
                if (t.toString.call(e) === f) t.extend(this.partials, e);
                else {
                    if ("undefined" == typeof a) throw new r["default"]('Attempting to register a partial called "' + e + '" as undefined');
                    this.partials[e] = a
                }
            },
            unregisterPartial: function(e) {
                delete this.partials[e]
            },
            registerDecorator: function(e, a) {
                if (t.toString.call(e) === f) {
                    if (a) throw new r["default"]("Arg not supported with multiple decorators");
                    t.extend(this.decorators, e)
                } else this.decorators[e] = a
            },
            unregisterDecorator: function(e) {
                delete this.decorators[e]
            }
        };
        var v = p["default"].log;
        a.log = v, a.createFrame = t.createFrame, a.logger = p["default"]
    }, function(e, a) {
        "use strict";

        function l(e) {
            return c[e]
        }

        function n(e) {
            for (var a = 1; a < arguments.length; a++)
                for (var l in arguments[a]) Object.prototype.hasOwnProperty.call(arguments[a], l) && (e[l] = arguments[a][l]);
            return e
        }

        function s(e, a) {
            for (var l = 0, n = e.length; l < n; l++)
                if (e[l] === a) return l;
            return -1
        }

        function t(e) {
            if ("string" != typeof e) {
                if (e && e.toHTML) return e.toHTML();
                if (null == e) return "";
                if (!e) return e + "";
                e = "" + e
            }
            return d.test(e) ? e.replace(p, l) : e
        }

        function i(e) {
            return !e && 0 !== e || !(!f(e) || 0 !== e.length)
        }

        function r(e) {
            var a = n({}, e);
            return a._parent = e, a
        }

        function o(e, a) {
            return e.path = a, e
        }

        function u(e, a) {
            return (e ? e + "." : "") + a
        }
        a.__esModule = !0, a.extend = n, a.indexOf = s, a.escapeExpression = t, a.isEmpty = i, a.createFrame = r, a.blockParams = o, a.appendContextPath = u;
        var c = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
                "=": "&#x3D;"
            },
            p = /[&<>"'`=]/g,
            d = /[&<>"'`=]/,
            h = Object.prototype.toString;
        a.toString = h;
        var m = function(e) {
            return "function" == typeof e
        };
        m(/x/) && (a.isFunction = m = function(e) {
            return "function" == typeof e && "[object Function]" === h.call(e)
        }), a.isFunction = m;
        var f = Array.isArray || function(e) {
            return !(!e || "object" != typeof e) && "[object Array]" === h.call(e)
        };
        a.isArray = f
    }, function(e, a) {
        "use strict";

        function l(e, a) {
            var s = a && a.loc,
                t = void 0,
                i = void 0;
            s && (t = s.start.line, i = s.start.column, e += " - " + t + ":" + i);
            for (var r = Error.prototype.constructor.call(this, e), o = 0; o < n.length; o++) this[n[o]] = r[n[o]];
            Error.captureStackTrace && Error.captureStackTrace(this, l), s && (this.lineNumber = t, this.column = i)
        }
        a.__esModule = !0;
        var n = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        l.prototype = new Error, a["default"] = l, e.exports = a["default"]
    }, function(e, a, l) {
        "use strict";

        function n(e) {
            i["default"](e), o["default"](e), c["default"](e), d["default"](e), m["default"](e), v["default"](e), b["default"](e)
        }
        var s = l(2)["default"];
        a.__esModule = !0, a.registerDefaultHelpers = n;
        var t = l(7),
            i = s(t),
            r = l(8),
            o = s(r),
            u = l(9),
            c = s(u),
            p = l(10),
            d = s(p),
            h = l(11),
            m = s(h),
            f = l(12),
            v = s(f),
            g = l(13),
            b = s(g)
    }, function(e, a, l) {
        "use strict";
        a.__esModule = !0;
        var n = l(4);
        a["default"] = function(e) {
            e.registerHelper("blockHelperMissing", function(a, l) {
                var s = l.inverse,
                    t = l.fn;
                if (a === !0) return t(this);
                if (a === !1 || null == a) return s(this);
                if (n.isArray(a)) return a.length > 0 ? (l.ids && (l.ids = [l.name]), e.helpers.each(a, l)) : s(this);
                if (l.data && l.ids) {
                    var i = n.createFrame(l.data);
                    i.contextPath = n.appendContextPath(l.data.contextPath, l.name), l = {
                        data: i
                    }
                }
                return t(a, l)
            })
        }, e.exports = a["default"]
    }, function(e, a, l) {
        "use strict";
        var n = l(2)["default"];
        a.__esModule = !0;
        var s = l(4),
            t = l(5),
            i = n(t);
        a["default"] = function(e) {
            e.registerHelper("each", function(e, a) {
                function l(a, l, t) {
                    u && (u.key = a, u.index = l, u.first = 0 === l, u.last = !!t, c && (u.contextPath = c + a)), o += n(e[a], {
                        data: u,
                        blockParams: s.blockParams([e[a], a], [c + a, null])
                    })
                }
                if (!a) throw new i["default"]("Must pass iterator to #each");
                var n = a.fn,
                    t = a.inverse,
                    r = 0,
                    o = "",
                    u = void 0,
                    c = void 0;
                if (a.data && a.ids && (c = s.appendContextPath(a.data.contextPath, a.ids[0]) + "."), s.isFunction(e) && (e = e.call(this)), a.data && (u = s.createFrame(a.data)), e && "object" == typeof e)
                    if (s.isArray(e))
                        for (var p = e.length; r < p; r++) r in e && l(r, r, r === e.length - 1);
                    else {
                        var d = void 0;
                        for (var h in e) e.hasOwnProperty(h) && (void 0 !== d && l(d, r - 1), d = h, r++);
                        void 0 !== d && l(d, r - 1, !0)
                    } return 0 === r && (o = t(this)), o
            })
        }, e.exports = a["default"]
    }, function(e, a, l) {
        "use strict";
        var n = l(2)["default"];
        a.__esModule = !0;
        var s = l(5),
            t = n(s);
        a["default"] = function(e) {
            e.registerHelper("helperMissing", function() {
                if (1 !== arguments.length) throw new t["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
            })
        }, e.exports = a["default"]
    }, function(e, a, l) {
        "use strict";
        a.__esModule = !0;
        var n = l(4);
        a["default"] = function(e) {
            e.registerHelper("if", function(e, a) {
                return n.isFunction(e) && (e = e.call(this)), !a.hash.includeZero && !e || n.isEmpty(e) ? a.inverse(this) : a.fn(this)
            }), e.registerHelper("unless", function(a, l) {
                return e.helpers["if"].call(this, a, {
                    fn: l.inverse,
                    inverse: l.fn,
                    hash: l.hash
                })
            })
        }, e.exports = a["default"]
    }, function(e, a) {
        "use strict";
        a.__esModule = !0, a["default"] = function(e) {
            e.registerHelper("log", function() {
                for (var a = [void 0], l = arguments[arguments.length - 1], n = 0; n < arguments.length - 1; n++) a.push(arguments[n]);
                var s = 1;
                null != l.hash.level ? s = l.hash.level : l.data && null != l.data.level && (s = l.data.level), a[0] = s, e.log.apply(e, a)
            })
        }, e.exports = a["default"]
    }, function(e, a) {
        "use strict";
        a.__esModule = !0, a["default"] = function(e) {
            e.registerHelper("lookup", function(e, a) {
                return e && e[a]
            })
        }, e.exports = a["default"]
    }, function(e, a, l) {
        "use strict";
        a.__esModule = !0;
        var n = l(4);
        a["default"] = function(e) {
            e.registerHelper("with", function(e, a) {
                n.isFunction(e) && (e = e.call(this));
                var l = a.fn;
                if (n.isEmpty(e)) return a.inverse(this);
                var s = a.data;
                return a.data && a.ids && (s = n.createFrame(a.data), s.contextPath = n.appendContextPath(a.data.contextPath, a.ids[0])), l(e, {
                    data: s,
                    blockParams: n.blockParams([e], [s && s.contextPath])
                })
            })
        }, e.exports = a["default"]
    }, function(e, a, l) {
        "use strict";

        function n(e) {
            i["default"](e)
        }
        var s = l(2)["default"];
        a.__esModule = !0, a.registerDefaultDecorators = n;
        var t = l(15),
            i = s(t)
    }, function(e, a, l) {
        "use strict";
        a.__esModule = !0;
        var n = l(4);
        a["default"] = function(e) {
            e.registerDecorator("inline", function(e, a, l, s) {
                var t = e;
                return a.partials || (a.partials = {}, t = function(s, t) {
                    var i = l.partials;
                    l.partials = n.extend({}, i, a.partials);
                    var r = e(s, t);
                    return l.partials = i, r
                }), a.partials[s.args[0]] = s.fn, t
            })
        }, e.exports = a["default"]
    }, function(e, a, l) {
        "use strict";
        a.__esModule = !0;
        var n = l(4),
            s = {
                methodMap: ["debug", "info", "warn", "error"],
                level: "info",
                lookupLevel: function(e) {
                    if ("string" == typeof e) {
                        var a = n.indexOf(s.methodMap, e.toLowerCase());
                        e = a >= 0 ? a : parseInt(e, 10)
                    }
                    return e
                },
                log: function(e) {
                    if (e = s.lookupLevel(e), "undefined" != typeof console && s.lookupLevel(s.level) <= e) {
                        var a = s.methodMap[e];
                        console[a] || (a = "log");
                        for (var l = arguments.length, n = Array(l > 1 ? l - 1 : 0), t = 1; t < l; t++) n[t - 1] = arguments[t];
                        console[a].apply(console, n)
                    }
                }
            };
        a["default"] = s, e.exports = a["default"]
    }, function(e, a) {
        "use strict";

        function l(e) {
            this.string = e
        }
        a.__esModule = !0, l.prototype.toString = l.prototype.toHTML = function() {
            return "" + this.string
        }, a["default"] = l, e.exports = a["default"]
    }, function(e, a, l) {
        "use strict";

        function n(e) {
            var a = e && e[0] || 1,
                l = g.COMPILER_REVISION;
            if (a !== l) {
                if (a < l) {
                    var n = g.REVISION_CHANGES[l],
                        s = g.REVISION_CHANGES[a];
                    throw new v["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + s + ").")
                }
                throw new v["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
            }
        }

        function s(e, a) {
            function l(l, n, s) {
                s.hash && (n = m.extend({}, n, s.hash), s.ids && (s.ids[0] = !0)), l = a.VM.resolvePartial.call(this, l, n, s);
                var t = a.VM.invokePartial.call(this, l, n, s);
                if (null == t && a.compile && (s.partials[s.name] = a.compile(l, e.compilerOptions, a), t = s.partials[s.name](n, s)), null != t) {
                    if (s.indent) {
                        for (var i = t.split("\n"), r = 0, o = i.length; r < o && (i[r] || r + 1 !== o); r++) i[r] = s.indent + i[r];
                        t = i.join("\n")
                    }
                    return t
                }
                throw new v["default"]("The partial " + s.name + " could not be compiled when running in runtime-only mode")
            }

            function n(a) {
                function l(a) {
                    return "" + e.main(s, a, s.helpers, s.partials, i, o, r)
                }
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    i = t.data;
                n._setup(t), !t.partial && e.useData && (i = u(a, i));
                var r = void 0,
                    o = e.useBlockParams ? [] : void 0;
                return e.useDepths && (r = t.depths ? a !== t.depths[0] ? [a].concat(t.depths) : t.depths : [a]), (l = c(e.main, l, s, t.depths || [], i, o))(a, t)
            }
            if (!a) throw new v["default"]("No environment passed to template");
            if (!e || !e.main) throw new v["default"]("Unknown template object: " + typeof e);
            e.main.decorator = e.main_d, a.VM.checkRevision(e.compiler);
            var s = {
                strict: function(e, a) {
                    if (!(a in e)) throw new v["default"]('"' + a + '" not defined in ' + e);
                    return e[a]
                },
                lookup: function(e, a) {
                    for (var l = e.length, n = 0; n < l; n++)
                        if (e[n] && null != e[n][a]) return e[n][a]
                },
                lambda: function(e, a) {
                    return "function" == typeof e ? e.call(a) : e
                },
                escapeExpression: m.escapeExpression,
                invokePartial: l,
                fn: function(a) {
                    var l = e[a];
                    return l.decorator = e[a + "_d"], l
                },
                programs: [],
                program: function(e, a, l, n, s) {
                    var i = this.programs[e],
                        r = this.fn(e);
                    return a || s || n || l ? i = t(this, e, r, a, l, n, s) : i || (i = this.programs[e] = t(this, e, r)), i
                },
                data: function(e, a) {
                    for (; e && a--;) e = e._parent;
                    return e
                },
                merge: function(e, a) {
                    var l = e || a;
                    return e && a && e !== a && (l = m.extend({}, a, e)), l
                },
                noop: a.VM.noop,
                compilerInfo: e.compiler
            };
            return n.isTop = !0, n._setup = function(l) {
                l.partial ? (s.helpers = l.helpers, s.partials = l.partials, s.decorators = l.decorators) : (s.helpers = s.merge(l.helpers, a.helpers), e.usePartial && (s.partials = s.merge(l.partials, a.partials)), (e.usePartial || e.useDecorators) && (s.decorators = s.merge(l.decorators, a.decorators)))
            }, n._child = function(a, l, n, i) {
                if (e.useBlockParams && !n) throw new v["default"]("must pass block params");
                if (e.useDepths && !i) throw new v["default"]("must pass parent depths");
                return t(s, a, e[a], l, 0, n, i)
            }, n
        }

        function t(e, a, l, n, s, t, i) {
            function r(a) {
                var s = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    r = i;
                return i && a !== i[0] && (r = [a].concat(i)), l(e, a, e.helpers, e.partials, s.data || n, t && [s.blockParams].concat(t), r)
            }
            return r = c(l, r, e, i, n, t), r.program = a, r.depth = i ? i.length : 0, r.blockParams = s || 0, r
        }

        function i(e, a, l) {
            return e ? e.call || l.name || (l.name = e, e = l.partials[e]) : e = "@partial-block" === l.name ? l.data["partial-block"] : l.partials[l.name], e
        }

        function r(e, a, l) {
            l.partial = !0, l.ids && (l.data.contextPath = l.ids[0] || l.data.contextPath);
            var n = void 0;
            if (l.fn && l.fn !== o && (l.data = g.createFrame(l.data), n = l.data["partial-block"] = l.fn, n.partials && (l.partials = m.extend({}, l.partials, n.partials))), void 0 === e && n && (e = n), void 0 === e) throw new v["default"]("The partial " + l.name + " could not be found");
            if (e instanceof Function) return e(a, l)
        }

        function o() {
            return ""
        }

        function u(e, a) {
            return a && "root" in a || (a = a ? g.createFrame(a) : {}, a.root = e), a
        }

        function c(e, a, l, n, s, t) {
            if (e.decorator) {
                var i = {};
                a = e.decorator(a, i, l, n && n[0], s, t, n), m.extend(a, i)
            }
            return a
        }
        var p = l(1)["default"],
            d = l(2)["default"];
        a.__esModule = !0, a.checkRevision = n, a.template = s, a.wrapProgram = t, a.resolvePartial = i, a.invokePartial = r, a.noop = o;
        var h = l(4),
            m = p(h),
            f = l(5),
            v = d(f),
            g = l(3)
    }, function(e, a) {
        (function(l) {
            "use strict";
            a.__esModule = !0, a["default"] = function(e) {
                var a = "undefined" != typeof l ? l : window,
                    n = a.Handlebars;
                e.noConflict = function() {
                    return a.Handlebars === e && (a.Handlebars = n), e
                }
            }, e.exports = a["default"]
        }).call(a, function() {
            return this
        }())
    }])
}), Handlebars.registerHelper("share_count", function(e) {
    return e > 1e4 ? Math.round(e / 1e3) + "k" : e > 1e3 ? Math.round(e / 100) / 10 + "k" : e
}), Handlebars.registerHelper("classIfExists", function(e, a) {
    return a ? e : ""
}), Handlebars.registerHelper("debug", function(e) {
    console.log("Current Context"), console.log("===================="), console.log(this), e && (console.log("Value"), console.log("===================="), console.log(e))
}), Handlebars.registerHelper("isBlank", function(e) {
    return e === !1 ? "_blank" : ""
}), Handlebars.registerHelper("select", function(e, a) {
    return $el = $("<select />").html(a.fn(this)), $el.find("[value=" + e + "]").attr("selected", "selected"), $el.html()
}), Handlebars.registerHelper("ifEqual", function(e, a, l) {
    return e === a ? l.fn(this) : l.inverse(this)
}), Handlebars.registerHelper("render", function(e) {
    var a;
    return a = arguments[2] ? Object.assign({}, arguments[1], arguments[2].hash) : arguments[1].hash, new Handlebars.SafeString(Handlebars.compile(Handlebars.partials[e])(a))
});
var INPUT_LABEL_DICT = {
    soundcloud: "SoundCloud Embed",
    brightcove: "Video URL or Brightcove ID",
    ustream: "Ustream Embed",
    youtube: "YouTube Video",
    image: "Instagram Image",
    video: "Instagram Video",
    vine: "Vine Embed"
};
Handlebars.registerHelper("quadDataInputLabel", function(e) {
    return INPUT_LABEL_DICT[e]
});
var SOURCE_LABEL_DICT = {
    soundcloud: "SoundCloud Url",
    brightcove: "Video URL or Brightcove ID",
    ustream: "Ustream Url",
    youtube: "YouTube Url",
    image: "Instagram Url",
    video: "Instagram Url",
    vine: "Vine Url"
};
Handlebars.registerHelper("quadMediaSourceLabel", function(e) {
        return SOURCE_LABEL_DICT[e]
    }),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["campaigns/mithc"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "\t<div class='story'>\n\t\t<a class='thumb' href='" + e.escapeExpression((t = null != (t = l.url || (null != a ? a.url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : t)) + "'><img alt='" + e.escapeExpression((t = null != (t = l.img || (null != a ? a.img : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "img",
                    hash: {},
                    data: s
                }) : t)) + "' src='" + e.escapeExpression((t = null != (t = l.img || (null != a ? a.img : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "img",
                    hash: {},
                    data: s
                }) : t)) + "' /></a>\n    <a class='title-link' href='" + e.escapeExpression((t = null != (t = l.url || (null != a ? a.url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "</a>\n\t</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='featured-videos'>\n  <div class='mithc-header'>\n    <h2>Optimistic stories presented by</h2>\n    <img class='mithc-logo' src='" + e.escapeExpression((i = null != (i = l.logo || (null != a ? a.logo : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "logo",
                    hash: {},
                    data: s
                }) : i)) + "' />\n  </div>\n" + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.stories : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "</div>"
            },
            useData: !0
        }), this.Handlebars.templates["campaigns/mithc"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates.feature = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "  <div class='secondary-story'>\n    <div class='eb'>\n      <a href='" + e.escapeExpression((t = null != (t = l.customChannelUrl || (null != a ? a.customChannelUrl : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "customChannelUrl",
                    hash: {},
                    data: s
                }) : t)) + "'>\n        " + e.escapeExpression((t = null != (t = l.customChannel || (null != a ? a.customChannel : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "customChannel",
                    hash: {},
                    data: s
                }) : t)) + "\n      </a>\n    </div>\n    <div class='headline'>\n      <div class='desktop'>\n        <a class='" + e.escapeExpression((l.classIfExists || a && a.classIfExists || l.helperMissing).call(null != a ? a : {}, "video", null != a ? a.video : a, {
                    name: "classIfExists",
                    hash: {},
                    data: s
                })) + "' href='" + e.escapeExpression((t = null != (t = l.link || (null != a ? a.link : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : t)) + "?utm_campaign=hp-hh-sec&utm_source=internal&utm_medium=onsite'>\n          " + e.escapeExpression((t = null != (t = l.desktopTitle || (null != a ? a.desktopTitle : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "desktopTitle",
                    hash: {},
                    data: s
                }) : t)) + "\n        </a>\n      </div>\n      <div class='tablet'>\n        <a class='" + e.escapeExpression((l.classIfExists || a && a.classIfExists || l.helperMissing).call(null != a ? a : {}, "video", null != a ? a.video : a, {
                    name: "classIfExists",
                    hash: {},
                    data: s
                })) + "' href='" + e.escapeExpression((t = null != (t = l.link || (null != a ? a.link : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : t)) + "?utm_campaign=hp-hh-sec&utm_source=internal&utm_medium=onsite'>\n          " + e.escapeExpression((t = null != (t = l.tabletTitle || (null != a ? a.tabletTitle : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "tabletTitle",
                    hash: {},
                    data: s
                }) : t)) + "\n        </a>\n      </div>\n      <div class='mobile'>\n        <a class='" + e.escapeExpression((l.classIfExists || a && a.classIfExists || l.helperMissing).call(null != a ? a : {}, "video", null != a ? a.video : a, {
                    name: "classIfExists",
                    hash: {},
                    data: s
                })) + "' href='" + e.escapeExpression((t = null != (t = l.link || (null != a ? a.link : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : t)) + "?utm_campaign=hp-hh-sec&utm_source=internal&utm_medium=onsite'>\n          " + e.escapeExpression((t = null != (t = l.mobileTitle || (null != a ? a.mobileTitle : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "mobileTitle",
                    hash: {},
                    data: s
                }) : t)) + "\n        </a>\n      </div>\n    </div>\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='tint-" + e.escapeExpression((i = null != (i = l.template || (null != a ? a.template : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "template",
                    hash: {},
                    data: s
                }) : i)) + "' id='highlights-tint'></div>\n<div id='highlights-image'></div>\n<div class='" + e.escapeExpression((i = null != (i = l.template || (null != a ? a.template : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "template",
                    hash: {},
                    data: s
                }) : i)) + "' id='highlights-primary'>\n  <div class='section-eb'>\n    <a href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.leadStory : a) ? t.customChannelUrl : t, a)) + "'>\n      " + e.escapeExpression(e.lambda(null != (t = null != a ? a.leadStory : a) ? t.customChannel : t, a)) + "\n    </a>\n  </div>\n  <div class='headline'>\n    <div class='desktop'>\n      <a href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.leadStory : a) ? t.link : t, a)) + "?utm_campaign=hp-hh-pri&utm_source=internal&utm_medium=onsite'>\n        " + e.escapeExpression(e.lambda(null != (t = null != a ? a.leadStory : a) ? t.desktopTitle : t, a)) + "\n      </a>\n    </div>\n    <div class='tablet'>\n      <a href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.leadStory : a) ? t.link : t, a)) + "?utm_campaign=hp-hh-pri&utm_source=internal&utm_medium=onsite'>\n        " + e.escapeExpression(e.lambda(null != (t = null != a ? a.leadStory : a) ? t.tabletTitle : t, a)) + "\n      </a>\n    </div>\n    <div class='mobile'>\n      <a href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.leadStory : a) ? t.link : t, a)) + "?utm_campaign=hp-hh-pri&utm_source=internal&utm_medium=onsite'>\n        " + e.escapeExpression(e.lambda(null != (t = null != a ? a.leadStory : a) ? t.mobileTitle : t, a)) + "\n      </a>\n    </div>\n  </div>\n</div>\n<div class='" + e.escapeExpression((i = null != (i = l.template || (null != a ? a.template : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "template",
                    hash: {},
                    data: s
                }) : i)) + "' id='highlights-secondary'>\n  <div class='primary-overlay'></div>\n" + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.secondaryStories : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "</div>"
            },
            useData: !0
        }), this.Handlebars.templates.feature
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["gallery/gallery"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<a class='thumb' href='#'><img src='" + e.escapeExpression((t = null != (t = l.thumb || (null != a ? a.thumb : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "thumb",
                    hash: {},
                    data: s
                }) : t)) + "'></a>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i, r, o = "<div class='popout'>\n  <section class='gallery interactive width-exempt no-close show-info' data-id='" + e.escapeExpression((i = null != (i = l.slug || (null != a ? a.slug : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "slug",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <header class='gallery-header'>\n      <h1 class='title'>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "</h1>\n      <div class='actions'>\n        <a class='close' href='#'>\n          Close\n        </a>\n        <a class='all' href='#'>\n          <i class='icon-th icon-white'></i>\n          See All\n        </a>\n        <a class='slideshow' href='#'>\n          <i class='icon-play icon-white'></i>\n          Slideshow\n        </a>\n        <div class='progress progress-info slideshow-timer'>\n          <div class='bar'></div>\n        </div>\n      </div>\n    </header>\n    <div class='content'>\n      <div class='gallery-content'>\n        <div class='slide-container'>\n          <div class='slides transitional'></div>\n          <div class='thumbs transparent'>\n            <div class='thumbs-inner'>\n              ";
                return i = null != (i = l.slides || (null != a ? a.slides : a)) ? i : l.helperMissing, r = {
                    name: "slides",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                }, t = "function" == typeof i ? i.call(null != a ? a : {}, r) : i, l.slides || (t = l.blockHelperMissing.call(a, t, r)), null != t && (o += t), o + "\n            </div>\n          </div>\n        </div>\n        <div class='meta'>\n          <div class='buttons'>\n            <a class='btn btn-large btn-primary open-gallery' href='#'>\n              Open Gallery\n            </a>\n            <a class='btn btn-large btn-primary prev' href='#'>\n              Prev\n            </a>\n            <span class='slides'>\n              <span class='current'></span>\n              <span class='total'></span>\n            </span>\n            <a class='btn btn-large btn-primary next' href='#'>\n              Next\n            </a>\n          </div>\n          <h2 class='title'></h2>\n          <div class='caption'></div>\n          <div class='credit'></div>\n        </div>\n      </div>\n      <div class='sidebar'>\n        <div class='ad'></div>\n      </div>\n    </div>\n    <a class='as-list' href='#'>Show As List</a>\n  </section>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["gallery/gallery"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["gallery/list"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "  <header>\n    <h1 class='title'>" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "</h1>\n  </header>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<section class='gallery list'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.show_list_title : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "  \n  <div class='content'>\n    <ul class='slides'></ul>\n  </div>\n  <a class='as-gallery' href='#'>Show As Gallery</a>\n</section>"
            },
            useData: !0
        }), this.Handlebars.templates["gallery/list"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["gallery/list_slide"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<figure>" + (null != (i = null != (i = l.content || (null != a ? a.content : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "content",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</figure>\n<div class='meta'>\n  <h2 class='title'>" + (null != (i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</h2>\n  <div class='caption'>" + (null != (i = null != (i = l.description || (null != a ? a.description : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "description",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</div>\n  <div class='credit'>" + (null != (i = null != (i = l.credit || (null != a ? a.credit : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "credit",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["gallery/list_slide"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["gallery/slide"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='slide-wrapper'>" + (null != (i = null != (i = l.content || (null != a ? a.content : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "content",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</div>"
            },
            useData: !0
        }), this.Handlebars.templates["gallery/slide"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["header/flash"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<div class='flash-message flash-" + e.escapeExpression((t = null != (t = l.k || (null != a ? a.k : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "k",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.v || (null != a ? a.v : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "v",
                    hash: {},
                    data: s
                }) : t)) + "</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<a class='close btn btn-light' href='#'></a>\n" + (null != (t = l.each.call(null != a ? a : {}, a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "")
            },
            useData: !0
        }), this.Handlebars.templates["header/flash"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["header/no_user_menu"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function() {
                return "<li class='submenu collapsable pull-right' id='sign-in'><a href='/login/'><span>Sign in</span></a></li>"
            },
            useData: !0
        }), this.Handlebars.templates["header/no_user_menu"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["header/search_results"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t, i;
                return "      \n      <li class='s-p' data-score='" + e.escapeExpression((i = null != (i = l.score || (null != a ? a.score : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "score",
                    hash: {},
                    data: s
                }) : i)) + "' data-url='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "'>\n        <a href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "'>\n" + (null != (t = e.invokePartial(n["shared/_responsive_images"], a, {
                    name: "shared/_responsive_images",
                    data: s,
                    indent: "          ",
                    helpers: l,
                    partials: n,
                    decorators: e.decorators
                })) ? t : "") + "        </a>\n        <a href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "'>" + (null != (i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</a>\n        <time datetime='" + e.escapeExpression((i = null != (i = l.post_date_rfc || (null != a ? a.post_date_rfc : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "post_date_rfc",
                    hash: {},
                    data: s
                }) : i)) + "'>" + e.escapeExpression((i = null != (i = l.post_date_rfc || (null != a ? a.post_date_rfc : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "post_date_rfc",
                    hash: {},
                    data: s
                }) : i)) + "</time>\n      </li>\n"
            },
            3: function(e, a, l, n, s) {
                var t;
                return "      \n      <li class='s-t' data-url='" + e.escapeExpression((t = null != (t = l.url || (null != a ? a.url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : t)) + "'>\n        <a href='" + e.escapeExpression((t = null != (t = l.url || (null != a ? a.url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.name || (null != a ? a.name : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : t)) + "</a>\n      </li>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='col1'>\n  <div class='search-results story-results'>\n    <h1>Stories</h1>\n    <ul>\n" + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.posts : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "      \n      <li class='more'><a href=\"/search/?t=stories&amp;q=" + e.escapeExpression((i = null != (i = l.query || (null != a ? a.query : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "query",
                    hash: {},
                    data: s
                }) : i)) + '">More stories about &quot;' + e.escapeExpression((i = null != (i = l.query || (null != a ? a.query : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "query",
                    hash: {},
                    data: s
                }) : i)) + "&quot;</a></li>\n    </ul>\n  </div>\n</div>\n<div class='col2'>\n  <div class='search-results topic-results'>\n    <h1>Topics</h1>\n    <ul>\n" + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.topics : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "      \n      <li class='more'><a href=\"/search/?t=topics&amp;q=" + e.escapeExpression((i = null != (i = l.query || (null != a ? a.query : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "query",
                    hash: {},
                    data: s
                }) : i)) + '">More topics for &quot;' + e.escapeExpression((i = null != (i = l.query || (null != a ? a.query : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "query",
                    hash: {},
                    data: s
                }) : i)) + "&quot;</a></li>\n    </ul>\n  </div>\n</div>"
            },
            usePartial: !0,
            useData: !0
        }), this.Handlebars.templates["header/search_results"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["header/user_menu"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<li class='user-submenu submenu pull-right'><a class='profile dropdown-toggle' href='#'><img src='" + e.escapeExpression((t = null != (t = l.picture || (null != a ? a.picture : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "picture",
                    hash: {},
                    data: s
                }) : t)) + "'></a>\n  <div class='dropdown-menu pull-right'>\n    <div class='extra-content'>\n      <a href='/me/'>\n        <img class='profile-image' src='" + e.escapeExpression((t = null != (t = l.picture || (null != a ? a.picture : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "picture",
                    hash: {},
                    data: s
                }) : t)) + "'>\n        " + e.escapeExpression((t = null != (t = l.display_name || (null != a ? a.display_name : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "display_name",
                    hash: {},
                    data: s
                }) : t)) + "\n    </a>\n    </div>\n    <ul class='user-menu'>\n      <li class='for-flyout-bottom separator'>\n        <a href='/me/edit/'>Settings</a>\n      </li>\n      <li class='for-flyout-bottom'>\n        <a href=\"/logout/\">Sign Out</a>    </li>\n    </ul>\n  </div>\n</li>"
            },
            useData: !0
        }), this.Handlebars.templates["header/user_menu"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates.lightbox = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function() {
                return "<div class='mash-lightbox'>\n  <div class='mash-lightbox-content-wrap'>\n    <a class='mash-lightbox-close' href='#'></a>\n    <div class='mash-lightbox-content'></div>\n  </div>\n</div>";
            },
            useData: !0
        }), this.Handlebars.templates.lightbox
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/blocks/AdBlock/v0"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='parsec-block sponsor-ad-wrap ad-block " + e.escapeExpression((t = null != (t = l.sponsor || (null != a ? a.sponsor : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sponsor",
                    hash: {},
                    data: s
                }) : t)) + "-" + e.escapeExpression((t = null != (t = l.pos || (null != a ? a.pos : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "pos",
                    hash: {},
                    data: s
                }) : t)) + " " + e.escapeExpression((t = null != (t = l.klass || (null != a ? a.klass : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : t)) + "' data-adnum='" + e.escapeExpression((t = null != (t = l.adnum || (null != a ? a.adnum : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "adnum",
                    hash: {},
                    data: s
                }) : t)) + "' data-pos='" + e.escapeExpression((t = null != (t = l.pos || (null != a ? a.pos : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "pos",
                    hash: {},
                    data: s
                }) : t)) + "' data-posts='" + e.escapeExpression((t = null != (t = l.posts || (null != a ? a.posts : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "posts",
                    hash: {},
                    data: s
                }) : t)) + "' data-sponsor='" + e.escapeExpression((t = null != (t = l.sponsor || (null != a ? a.sponsor : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sponsor",
                    hash: {},
                    data: s
                }) : t)) + "' data-type='" + e.escapeExpression((t = null != (t = l.type || (null != a ? a.type : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : t)) + "'></div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/blocks/AdBlock/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/blocks/FloodlightBlock/v0"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='parsec-block parsec-floodlight-block " + e.escapeExpression((t = null != (t = l.klass || (null != a ? a.klass : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : t)) + "' data-type='" + e.escapeExpression((t = null != (t = l.type || (null != a ? a.type : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : t)) + "' data-url='" + e.escapeExpression((t = null != (t = l.url || (null != a ? a.url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : t)) + "'></div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/blocks/FloodlightBlock/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/blocks/IframeBlock/v0"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='parsec-block parsec-iframe-block " + e.escapeExpression((t = null != (t = l.klass || (null != a ? a.klass : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : t)) + "' data-mobile-url='" + e.escapeExpression((t = null != (t = l.mobile_url || (null != a ? a.mobile_url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "mobile_url",
                    hash: {},
                    data: s
                }) : t)) + "' data-native-height-mobile='" + e.escapeExpression((t = null != (t = l.native_height_mobile || (null != a ? a.native_height_mobile : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "native_height_mobile",
                    hash: {},
                    data: s
                }) : t)) + "' data-native-height='" + e.escapeExpression((t = null != (t = l.native_height || (null != a ? a.native_height : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "native_height",
                    hash: {},
                    data: s
                }) : t)) + "' data-native-width-mobile='" + e.escapeExpression((t = null != (t = l.native_width_mobile || (null != a ? a.native_width_mobile : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "native_width_mobile",
                    hash: {},
                    data: s
                }) : t)) + "' data-native-width='" + e.escapeExpression((t = null != (t = l.native_width || (null != a ? a.native_width : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "native_width",
                    hash: {},
                    data: s
                }) : t)) + "' data-sandboxed='" + e.escapeExpression((t = null != (t = l.sandboxed || (null != a ? a.sandboxed : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sandboxed",
                    hash: {},
                    data: s
                }) : t)) + "' data-scrolling='" + e.escapeExpression((t = null != (t = l.scrolling || (null != a ? a.scrolling : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "scrolling",
                    hash: {},
                    data: s
                }) : t)) + "' data-type='" + e.escapeExpression((t = null != (t = l.type || (null != a ? a.type : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : t)) + "' data-url='" + e.escapeExpression((t = null != (t = l.url || (null != a ? a.url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : t)) + "'></div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/blocks/IframeBlock/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/blocks/ImageBlock/v0"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return '<a class="image-click-through-link" href="' + e.escapeExpression((t = null != (t = l.click_through_url || (null != a ? a.click_through_url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "click_through_url",
                    hash: {},
                    data: s
                }) : t)) + "\" target=\"_blank\"><img onLoad='if(App.Parsec.container){App.Parsec.container.resize();}' src='" + e.escapeExpression((t = null != (t = l.url || (null != a ? a.url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  </a>\n"
            },
            3: function(e, a, l, n, s) {
                var t;
                return "  <img onLoad='if(App.Parsec.container){App.Parsec.container.resize();}' src='" + e.escapeExpression((t = null != (t = l.url || (null != a ? a.url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : t)) + "'>"
            },
            5: function(e, a, l, n, s) {
                var t, i;
                return "  <div class='text-wrap'>" + (null != (i = null != (i = l.text || (null != a ? a.text : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "text",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='parsec-block parsec-block-image " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-click-through-url='" + e.escapeExpression((i = null != (i = l.click_through_url || (null != a ? a.click_through_url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "click_through_url",
                    hash: {},
                    data: s
                }) : i)) + "' data-native-height='" + e.escapeExpression((i = null != (i = l.native_height || (null != a ? a.native_height : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "native_height",
                    hash: {},
                    data: s
                }) : i)) + "' data-native-width='" + e.escapeExpression((i = null != (i = l.native_width || (null != a ? a.native_width : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "native_width",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "' data-url='" + e.escapeExpression((i = null != (i = l.url || (null != a ? a.url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.click_through_url : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? t : "") + "\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.text : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/blocks/ImageBlock/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/blocks/JWBlock/v0"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='parsec-block parsec-block-jw v0 " + e.escapeExpression((t = null != (t = l.klass || (null != a ? a.klass : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : t)) + "' data-autoplay='" + e.escapeExpression((t = null != (t = l.autoplay || (null != a ? a.autoplay : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "autoplay",
                    hash: {},
                    data: s
                }) : t)) + "' data-disable-ads='" + e.escapeExpression((t = null != (t = l.disable_ads || (null != a ? a.disable_ads : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "disable_ads",
                    hash: {},
                    data: s
                }) : t)) + "' data-labels='" + e.escapeExpression((t = null != (t = l.labels || (null != a ? a.labels : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "labels",
                    hash: {},
                    data: s
                }) : t)) + "' data-sound='" + e.escapeExpression((t = null != (t = l.sound || (null != a ? a.sound : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sound",
                    hash: {},
                    data: s
                }) : t)) + "' data-type='" + e.escapeExpression((t = null != (t = l.type || (null != a ? a.type : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : t)) + "' data-video-constrain='" + e.escapeExpression((t = null != (t = l.video_constrain || (null != a ? a.video_constrain : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "video_constrain",
                    hash: {},
                    data: s
                }) : t)) + "' data-video-id='" + e.escapeExpression((t = null != (t = l.video_id || (null != a ? a.video_id : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "video_id",
                    hash: {},
                    data: s
                }) : t)) + "' data-video-type='" + e.escapeExpression((t = null != (t = l.video_type || (null != a ? a.video_type : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "video_type",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  <div class='content-jw' id='jw-content-" + e.escapeExpression((t = null != (t = l.video_id || (null != a ? a.video_id : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "video_id",
                    hash: {},
                    data: s
                }) : t)) + "'></div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/blocks/JWBlock/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/blocks/OoyalaBlock/v0"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='parsec-block parsec-block-ooyala v0 " + e.escapeExpression((t = null != (t = l.klass || (null != a ? a.klass : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : t)) + "' data-type='" + e.escapeExpression((t = null != (t = l.type || (null != a ? a.type : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : t)) + "' data-video-constrain='" + e.escapeExpression((t = null != (t = l.video_constrain || (null != a ? a.video_constrain : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "video_constrain",
                    hash: {},
                    data: s
                }) : t)) + "' data-videoId='" + e.escapeExpression((t = null != (t = l.videoId || (null != a ? a.videoId : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "videoId",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  <div class='content-ooyala' data-labels='" + e.escapeExpression((t = null != (t = l.labels || (null != a ? a.labels : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "labels",
                    hash: {},
                    data: s
                }) : t)) + "' data-video='" + e.escapeExpression((t = null != (t = l.videoId || (null != a ? a.videoId : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "videoId",
                    hash: {},
                    data: s
                }) : t)) + "' id='oo-player-" + e.escapeExpression((t = null != (t = l.videoId || (null != a ? a.videoId : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "videoId",
                    hash: {},
                    data: s
                }) : t)) + "'></div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/blocks/OoyalaBlock/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/blocks/SpeakerBlock/v0"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t, i;
                return "  <div class='speaker-bio speaker-info'>" + (null != (i = null != (i = l.bio || (null != a ? a.bio : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "bio",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='parsec-block speaker-block " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-bio='" + e.escapeExpression((i = null != (i = l.company || (null != a ? a.company : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "company",
                    hash: {},
                    data: s
                }) : i)) + "' data-company='" + e.escapeExpression((i = null != (i = l.company || (null != a ? a.company : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "company",
                    hash: {},
                    data: s
                }) : i)) + "' data-image-url='" + e.escapeExpression((i = null != (i = l.image_url || (null != a ? a.image_url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "image_url",
                    hash: {},
                    data: s
                }) : i)) + "' data-index='" + e.escapeExpression((i = null != (i = l.index || (null != a ? a.index : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : i)) + "' data-name='" + e.escapeExpression((i = null != (i = l.name || (null != a ? a.name : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : i)) + "' data-style='" + e.escapeExpression((i = null != (i = l.style_json || (null != a ? a.style_json : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "style_json",
                    hash: {},
                    data: s
                }) : i)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "' style='" + e.escapeExpression((i = null != (i = l.style_css || (null != a ? a.style_css : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "style_css",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  <img class='speaker-image' src='" + e.escapeExpression((i = null != (i = l.image_url || (null != a ? a.image_url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "image_url",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  <h2 class='speaker-name speaker-info' style='" + e.escapeExpression((i = null != (i = l.name_style_css || (null != a ? a.name_style_css : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "name_style_css",
                    hash: {},
                    data: s
                }) : i)) + "'>" + e.escapeExpression((i = null != (i = l.name || (null != a ? a.name : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : i)) + "</h2>\n  <h3 class='speaker-title-company' style='" + e.escapeExpression((i = null != (i = l.org_style_css || (null != a ? a.org_style_css : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "org_style_css",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <span class='speaker-title speaker-info'>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "</span>\n    <span class='speaker-company speaker-info'>" + e.escapeExpression((i = null != (i = l.company || (null != a ? a.company : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "company",
                    hash: {},
                    data: s
                }) : i)) + "</span>\n  </h3>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.bio : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/blocks/SpeakerBlock/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/blocks/TOCBlock/v0"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "    <div class='selection-row'>\n      " + (null != (t = l.each.call(null != a ? a : {}, a, {
                    name: "each",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n    </div>\n"
            },
            2: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.link : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.program(8, s, 0),
                    data: s
                })) ? t : ""
            },
            3: function(e, a, l, n, s) {
                var t, i;
                return '<a class="post-wrap" href="' + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + '">' + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.longform_toc_image : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.program(6, s, 0),
                    data: s
                })) ? t : "") + "\n      \n        <div class='post-title-wrap'>\n          <div class='post-title-text'>\n            <p class='name'>" + e.escapeExpression((i = null != (i = l.short_title || (null != a ? a.short_title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "short_title",
                    hash: {},
                    data: s
                }) : i)) + "</p>\n          </div>\n          <div class='fill'></div>\n        </div>\n      </a>\n"
            },
            4: function(e, a, l, n, s) {
                var t;
                return "<img src='" + e.escapeExpression((t = null != (t = l.longform_toc_image || (null != a ? a.longform_toc_image : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "longform_toc_image",
                    hash: {},
                    data: s
                }) : t)) + "'>\n"
            },
            6: function(e, a, l, n, s) {
                var t;
                return "      <img src='" + e.escapeExpression((t = null != (t = l.image || (null != a ? a.image : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "image",
                    hash: {},
                    data: s
                }) : t)) + "'>"
            },
            8: function(e, a, l, n, s) {
                var t, i;
                return '      <a class="post-wrap" href="#' + e.escapeExpression((i = null != (i = l.fragment || (null != a ? a.fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "fragment",
                    hash: {},
                    data: s
                }) : i)) + '">' + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.longform_toc_image : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.program(6, s, 0),
                    data: s
                })) ? t : "") + "\n      \n        <div class='post-title-wrap'>\n          <div class='post-title-text'>\n            <p class='name'>" + e.escapeExpression((i = null != (i = l.short_title || (null != a ? a.short_title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "short_title",
                    hash: {},
                    data: s
                }) : i)) + "</p>\n          </div>\n          <div class='fill'></div>\n        </div>\n      </a>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='parsec-block toc-block v0' data-exclude-current='" + e.escapeExpression((i = null != (i = l.exclude_current || (null != a ? a.exclude_current : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "exclude_current",
                    hash: {},
                    data: s
                }) : i)) + "' data-only-parsec='" + e.escapeExpression((i = null != (i = l.only_parsec || (null != a ? a.only_parsec : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "only_parsec",
                    hash: {},
                    data: s
                }) : i)) + "' data-per-row='" + e.escapeExpression((i = null != (i = l.per_row || (null != a ? a.per_row : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "per_row",
                    hash: {},
                    data: s
                }) : i)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-toc-type='" + e.escapeExpression((i = null != (i = l.toc_type || (null != a ? a.toc_type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "toc_type",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  <h2>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "</h2>\n  <div class='selection-rows'>\n" + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.posts_by_row : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/blocks/TOCBlock/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/blocks/TOCBlock/v1"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "    <div class='selection-row'>\n      " + (null != (t = l.each.call(null != a ? a : {}, a, {
                    name: "each",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n    </div>\n"
            },
            2: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.link : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.program(8, s, 0),
                    data: s
                })) ? t : ""
            },
            3: function(e, a, l, n, s) {
                var t, i;
                return '<a class="post-wrap" href="' + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + '">' + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.longform_toc_image : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.program(6, s, 0),
                    data: s
                })) ? t : "") + "\n      \n        <div class='post-title-wrap'>\n          <div class='post-title-text'>\n            <p class='name'>" + e.escapeExpression((i = null != (i = l.short_title || (null != a ? a.short_title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "short_title",
                    hash: {},
                    data: s
                }) : i)) + "</p>\n          </div>\n          <div class='fill'></div>\n        </div>\n      </a>\n"
            },
            4: function(e, a, l, n, s) {
                var t;
                return "<img src='" + e.escapeExpression((t = null != (t = l.longform_toc_image || (null != a ? a.longform_toc_image : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "longform_toc_image",
                    hash: {},
                    data: s
                }) : t)) + "'>\n"
            },
            6: function(e, a, l, n, s) {
                var t;
                return "      <img src='" + e.escapeExpression((t = null != (t = l.image || (null != a ? a.image : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "image",
                    hash: {},
                    data: s
                }) : t)) + "'>"
            },
            8: function(e, a, l, n, s) {
                var t, i;
                return '      <a class="post-wrap" href="#' + e.escapeExpression((i = null != (i = l.fragment || (null != a ? a.fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "fragment",
                    hash: {},
                    data: s
                }) : i)) + '">' + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.longform_toc_image : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.program(6, s, 0),
                    data: s
                })) ? t : "") + "\n      \n        <div class='post-title-wrap'>\n          <div class='post-title-text'>\n            <p class='name'>" + e.escapeExpression((i = null != (i = l.short_title || (null != a ? a.short_title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "short_title",
                    hash: {},
                    data: s
                }) : i)) + "</p>\n          </div>\n          <div class='fill'></div>\n        </div>\n      </a>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='parsec-block toc-block v1 " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapters='" + e.escapeExpression((i = null != (i = l.chapters || (null != a ? a.chapters : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapters",
                    hash: {},
                    data: s
                }) : i)) + "' data-exclude-current='" + e.escapeExpression((i = null != (i = l.exclude_current || (null != a ? a.exclude_current : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "exclude_current",
                    hash: {},
                    data: s
                }) : i)) + "' data-only-parsec='" + e.escapeExpression((i = null != (i = l.only_parsec || (null != a ? a.only_parsec : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "only_parsec",
                    hash: {},
                    data: s
                }) : i)) + "' data-per-row='" + e.escapeExpression((i = null != (i = l.per_row || (null != a ? a.per_row : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "per_row",
                    hash: {},
                    data: s
                }) : i)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-toc-type='" + e.escapeExpression((i = null != (i = l.toc_type || (null != a ? a.toc_type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "toc_type",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "' data-version='1'>\n  <h2>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "</h2>\n  <div class='selection-rows'>\n" + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.posts_by_row : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/blocks/TOCBlock/v1"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/blocks/TOCBlock/v2"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return null != (t = l.each.call(null != a ? a : {}, null != a ? a.posts : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            2: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.link : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.program(8, s, 0),
                    data: s
                })) ? t : ""
            },
            3: function(e, a, l, n, s) {
                var t, i;
                return '<a class="post-wrap" href="' + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + '?utm_campaign=lf-toc&utm_source=internal&utm_medium=onsite">' + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.longform_toc_image : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.program(6, s, 0),
                    data: s
                })) ? t : "") + "\n    \n      <div class='post-title-wrap'>\n        <div class='post-title-text'>\n          <p class='name'>" + e.escapeExpression((i = null != (i = l.short_title || (null != a ? a.short_title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "short_title",
                    hash: {},
                    data: s
                }) : i)) + "</p>\n        </div>\n        <div class='fill'></div>\n      </div>\n    </a>\n"
            },
            4: function(e, a, l, n, s) {
                var t;
                return "<img src='" + e.escapeExpression((t = null != (t = l.longform_toc_image || (null != a ? a.longform_toc_image : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "longform_toc_image",
                    hash: {},
                    data: s
                }) : t)) + "'>\n"
            },
            6: function(e, a, l, n, s) {
                var t;
                return "    <img src='" + e.escapeExpression((t = null != (t = l.image || (null != a ? a.image : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "image",
                    hash: {},
                    data: s
                }) : t)) + "'>"
            },
            8: function(e, a, l, n, s) {
                var t, i;
                return '    <a class="post-wrap" href="#' + e.escapeExpression((i = null != (i = l.fragment || (null != a ? a.fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "fragment",
                    hash: {},
                    data: s
                }) : i)) + '">' + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.longform_toc_image : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.program(6, s, 0),
                    data: s
                })) ? t : "") + "\n    \n      <div class='post-title-wrap'>\n        <div class='post-title-text'>\n          <p class='name'>" + e.escapeExpression((i = null != (i = l.short_title || (null != a ? a.short_title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "short_title",
                    hash: {},
                    data: s
                }) : i)) + "</p>\n        </div>\n        <div class='fill'></div>\n      </div>\n    </a>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='parsec-block toc-block v2 " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapters='" + e.escapeExpression((i = null != (i = l.chapters || (null != a ? a.chapters : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapters",
                    hash: {},
                    data: s
                }) : i)) + "' data-exclude-current='" + e.escapeExpression((i = null != (i = l.exclude_current || (null != a ? a.exclude_current : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "exclude_current",
                    hash: {},
                    data: s
                }) : i)) + "' data-only-parsec='" + e.escapeExpression((i = null != (i = l.only_parsec || (null != a ? a.only_parsec : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "only_parsec",
                    hash: {},
                    data: s
                }) : i)) + "' data-per-row='" + e.escapeExpression((i = null != (i = l.per_row || (null != a ? a.per_row : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "per_row",
                    hash: {},
                    data: s
                }) : i)) + "' data-posts='" + e.escapeExpression((i = null != (i = l.posts_json || (null != a ? a.posts_json : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "posts_json",
                    hash: {},
                    data: s
                }) : i)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-toc-type='" + e.escapeExpression((i = null != (i = l.toc_type || (null != a ? a.toc_type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "toc_type",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "' data-version='2'>\n  <h2>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "</h2>\n  <div class='content-wrap'>\n    " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.posts : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/blocks/TOCBlock/v2"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/blocks/TextBlock/v0"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='parsec-block parsec-block-text " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-extended-options='" + e.escapeExpression((i = null != (i = l.extended_options_str || (null != a ? a.extended_options_str : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "extended_options_str",
                    hash: {},
                    data: s
                }) : i)) + "' data-style='" + e.escapeExpression((i = null != (i = l.style_json || (null != a ? a.style_json : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "style_json",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "' style='" + e.escapeExpression((i = null != (i = l.style_css || (null != a ? a.style_css : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "style_css",
                    hash: {},
                    data: s
                }) : i)) + "'>" + (null != (i = null != (i = l.content || (null != a ? a.content : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "content",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/blocks/TextBlock/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/blocks/VideoBlock/v0"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='parsec-block v0 video-block " + e.escapeExpression((t = null != (t = l.klass || (null != a ? a.klass : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : t)) + "' data-gif='" + e.escapeExpression((t = null != (t = l.gif || (null != a ? a.gif : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "gif",
                    hash: {},
                    data: s
                }) : t)) + "' data-h264='" + e.escapeExpression((t = null != (t = l.h264 || (null != a ? a.h264 : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "h264",
                    hash: {},
                    data: s
                }) : t)) + "' data-type='" + e.escapeExpression((t = null != (t = l.type || (null != a ? a.type : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : t)) + "' data-webm='" + e.escapeExpression((t = null != (t = l.webm || (null != a ? a.webm : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "webm",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  <video autoplay loop muted>\n    <source src='" + e.escapeExpression((t = null != (t = l.h264 || (null != a ? a.h264 : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "h264",
                    hash: {},
                    data: s
                }) : t)) + "' type='video/mp4'>\n    <source src='" + e.escapeExpression((t = null != (t = l.webm || (null != a ? a.webm : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "webm",
                    hash: {},
                    data: s
                }) : t)) + "' type='video/webm'>\n    <img onLoad='App.Parsec.container.resize();' src='" + e.escapeExpression((t = null != (t = l.gif || (null != a ? a.gif : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "gif",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  </video>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/blocks/VideoBlock/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/blocks/YoutubeBlock/v0"] = Handlebars.template({
            1: function() {
                return "  <div class='play-button'></div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='parsec-block parsec-block-youtube v0 " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-autoplay='" + e.escapeExpression((i = null != (i = l.autoplay || (null != a ? a.autoplay : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "autoplay",
                    hash: {},
                    data: s
                }) : i)) + "' data-controls='" + e.escapeExpression((i = null != (i = l.controls || (null != a ? a.controls : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "controls",
                    hash: {},
                    data: s
                }) : i)) + "' data-load-on-click='" + e.escapeExpression((i = null != (i = l.load_on_click || (null != a ? a.load_on_click : a)) ? i : l.helperMissing,
                    "function" == typeof i ? i.call(null != a ? a : {}, {
                        name: "load_on_click",
                        hash: {},
                        data: s
                    }) : i)) + "' data-loop='" + e.escapeExpression((i = null != (i = l.loop_bool || (null != a ? a.loop_bool : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "loop_bool",
                    hash: {},
                    data: s
                }) : i)) + "' data-playlistId='" + e.escapeExpression((i = null != (i = l.playlistId || (null != a ? a.playlistId : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "playlistId",
                    hash: {},
                    data: s
                }) : i)) + "' data-preload-image='" + e.escapeExpression((i = null != (i = l.preload_image || (null != a ? a.preload_image : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "preload_image",
                    hash: {},
                    data: s
                }) : i)) + "' data-sound='" + e.escapeExpression((i = null != (i = l.sound || (null != a ? a.sound : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "sound",
                    hash: {},
                    data: s
                }) : i)) + "' data-trigger-point='" + e.escapeExpression((i = null != (i = l.trigger_point || (null != a ? a.trigger_point : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "trigger_point",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "' data-video-constrain='" + e.escapeExpression((i = null != (i = l.video_constrain || (null != a ? a.video_constrain : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "video_constrain",
                    hash: {},
                    data: s
                }) : i)) + "' data-videoId='" + e.escapeExpression((i = null != (i = l.videoId || (null != a ? a.videoId : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "videoId",
                    hash: {},
                    data: s
                }) : i)) + "'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.load_on_click : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "  <img src='" + e.escapeExpression((i = null != (i = l.image_url || (null != a ? a.image_url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "image_url",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  <div class='youtube-player' id='player-" + e.escapeExpression((i = null != (i = l.videoId || (null != a ? a.videoId : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "videoId",
                    hash: {},
                    data: s
                }) : i)) + "'></div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/blocks/YoutubeBlock/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/blocks/YoutubeBlock/v1"] = Handlebars.template({
            1: function() {
                return "  <div class='play-button'></div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='parsec-block parsec-block-youtube v1 " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-autoplay='" + e.escapeExpression((i = null != (i = l.autoplay || (null != a ? a.autoplay : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "autoplay",
                    hash: {},
                    data: s
                }) : i)) + "' data-controls='" + e.escapeExpression((i = null != (i = l.controls || (null != a ? a.controls : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "controls",
                    hash: {},
                    data: s
                }) : i)) + "' data-load-on-click='" + e.escapeExpression((i = null != (i = l.load_on_click || (null != a ? a.load_on_click : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "load_on_click",
                    hash: {},
                    data: s
                }) : i)) + "' data-loop='" + e.escapeExpression((i = null != (i = l.loop_bool || (null != a ? a.loop_bool : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "loop_bool",
                    hash: {},
                    data: s
                }) : i)) + "' data-playlistId='" + e.escapeExpression((i = null != (i = l.playlistId || (null != a ? a.playlistId : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "playlistId",
                    hash: {},
                    data: s
                }) : i)) + "' data-preload-image='" + e.escapeExpression((i = null != (i = l.preload_image || (null != a ? a.preload_image : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "preload_image",
                    hash: {},
                    data: s
                }) : i)) + "' data-self-wrap-klass='" + e.escapeExpression((i = null != (i = l.self_wrap_klass || (null != a ? a.self_wrap_klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "self_wrap_klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-sound='" + e.escapeExpression((i = null != (i = l.sound || (null != a ? a.sound : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "sound",
                    hash: {},
                    data: s
                }) : i)) + "' data-trigger-point='" + e.escapeExpression((i = null != (i = l.trigger_point || (null != a ? a.trigger_point : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "trigger_point",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "' data-version='1' data-video-constrain='" + e.escapeExpression((i = null != (i = l.video_constrain || (null != a ? a.video_constrain : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "video_constrain",
                    hash: {},
                    data: s
                }) : i)) + "' data-videoId='" + e.escapeExpression((i = null != (i = l.videoId || (null != a ? a.videoId : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "videoId",
                    hash: {},
                    data: s
                }) : i)) + "'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.load_on_click : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "  <img src='" + e.escapeExpression((i = null != (i = l.image_url || (null != a ? a.image_url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "image_url",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  <div class='youtube-player' id='player-" + e.escapeExpression((i = null != (i = l.videoId || (null != a ? a.videoId : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "videoId",
                    hash: {},
                    data: s
                }) : i)) + "'></div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/blocks/YoutubeBlock/v1"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/cards/BackgroundCard/v0"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t, i;
                return null != (i = null != (i = l.blocks_markup || (null != a ? a.blocks_markup : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "blocks_markup",
                    hash: {},
                    data: s
                }) : i) ? t : ""
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='background-card parsec-card " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-background='" + e.escapeExpression((i = null != (i = l.background || (null != a ? a.background : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "background",
                    hash: {},
                    data: s
                }) : i)) + "' data-breakpoint='" + e.escapeExpression((i = null != (i = l.breakpoint || (null != a ? a.breakpoint : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "breakpoint",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-fragment='" + e.escapeExpression((i = null != (i = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-image='" + e.escapeExpression((i = null != (i = l.chapter_image || (null != a ? a.chapter_image : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_image",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter='" + e.escapeExpression((i = null != (i = l.chapter || (null != a ? a.chapter : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter",
                    hash: {},
                    data: s
                }) : i)) + "' data-extended-options='" + e.escapeExpression((i = null != (i = l.extended_options_str || (null != a ? a.extended_options_str : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "extended_options_str",
                    hash: {},
                    data: s
                }) : i)) + "' data-height-style='" + e.escapeExpression((i = null != (i = l.height_style || (null != a ? a.height_style : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "height_style",
                    hash: {},
                    data: s
                }) : i)) + "' data-static-fallback='" + e.escapeExpression((i = null != (i = l.static_fallback || (null != a ? a.static_fallback : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "static_fallback",
                    hash: {},
                    data: s
                }) : i)) + "' data-text-over='" + e.escapeExpression((i = null != (i = l.text_over || (null != a ? a.text_over : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "text_over",
                    hash: {},
                    data: s
                }) : i)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "' id='" + e.escapeExpression((i = null != (i = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : i)) + "' style='background-image: url(" + e.escapeExpression((i = null != (i = l.background || (null != a ? a.background : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "background",
                    hash: {},
                    data: s
                }) : i)) + ");'>\n  " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.blocks_markup : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/cards/BackgroundCard/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/cards/Card/v0"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t, i;
                return null != (i = null != (i = l.blocks_markup || (null != a ? a.blocks_markup : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "blocks_markup",
                    hash: {},
                    data: s
                }) : i) ? t : ""
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='parsec-card " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-breakpoint='" + e.escapeExpression((i = null != (i = l.breakpoint || (null != a ? a.breakpoint : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "breakpoint",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-fragment='" + e.escapeExpression((i = null != (i = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-image='" + e.escapeExpression((i = null != (i = l.chapter_image || (null != a ? a.chapter_image : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_image",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter='" + e.escapeExpression((i = null != (i = l.chapter || (null != a ? a.chapter : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter",
                    hash: {},
                    data: s
                }) : i)) + "' data-extended-options='" + e.escapeExpression((i = null != (i = l.extended_options_str || (null != a ? a.extended_options_str : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "extended_options_str",
                    hash: {},
                    data: s
                }) : i)) + "' data-height-style='" + e.escapeExpression((i = null != (i = l.height_style || (null != a ? a.height_style : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "height_style",
                    hash: {},
                    data: s
                }) : i)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "' id='" + e.escapeExpression((i = null != (i = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.blocks_markup : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/cards/Card/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/cards/CenterCard/v0"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t, i;
                return null != (i = null != (i = l.blocks_markup || (null != a ? a.blocks_markup : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "blocks_markup",
                    hash: {},
                    data: s
                }) : i) ? t : ""
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='center-card parsec-card " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-breakpoint='" + e.escapeExpression((i = null != (i = l.breakpoint || (null != a ? a.breakpoint : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "breakpoint",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-fragment='" + e.escapeExpression((i = null != (i = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-image='" + e.escapeExpression((i = null != (i = l.chapter_image || (null != a ? a.chapter_image : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_image",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter='" + e.escapeExpression((i = null != (i = l.chapter || (null != a ? a.chapter : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter",
                    hash: {},
                    data: s
                }) : i)) + "' data-extended-options='" + e.escapeExpression((i = null != (i = l.extended_options_str || (null != a ? a.extended_options_str : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "extended_options_str",
                    hash: {},
                    data: s
                }) : i)) + "' data-height-style='" + e.escapeExpression((i = null != (i = l.height_style || (null != a ? a.height_style : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "height_style",
                    hash: {},
                    data: s
                }) : i)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "' id='" + e.escapeExpression((i = null != (i = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.blocks_markup : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/cards/CenterCard/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/cards/ColumnCard/v0"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='column-card parsec-card " + e.escapeExpression((t = null != (t = l.klass || (null != a ? a.klass : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : t)) + "' data-breakpoint='" + e.escapeExpression((t = null != (t = l.breakpoint || (null != a ? a.breakpoint : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "breakpoint",
                    hash: {},
                    data: s
                }) : t)) + "' data-chapter-fragment='" + e.escapeExpression((t = null != (t = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : t)) + "' data-chapter-image='" + e.escapeExpression((t = null != (t = l.chapter_image || (null != a ? a.chapter_image : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "chapter_image",
                    hash: {},
                    data: s
                }) : t)) + "' data-chapter='" + e.escapeExpression((t = null != (t = l.chapter || (null != a ? a.chapter : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "chapter",
                    hash: {},
                    data: s
                }) : t)) + "' data-columns='" + e.escapeExpression((t = null != (t = l.columns || (null != a ? a.columns : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "columns",
                    hash: {},
                    data: s
                }) : t)) + "' data-extended-options='" + e.escapeExpression((t = null != (t = l.extended_options_str || (null != a ? a.extended_options_str : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "extended_options_str",
                    hash: {},
                    data: s
                }) : t)) + "' data-gutter='" + e.escapeExpression((t = null != (t = l.gutter || (null != a ? a.gutter : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "gutter",
                    hash: {},
                    data: s
                }) : t)) + "' data-height-style='" + e.escapeExpression((t = null != (t = l.height_style || (null != a ? a.height_style : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "height_style",
                    hash: {},
                    data: s
                }) : t)) + "' data-margin='" + e.escapeExpression((t = null != (t = l.margin || (null != a ? a.margin : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "margin",
                    hash: {},
                    data: s
                }) : t)) + "' data-title='" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "' data-type='" + e.escapeExpression((t = null != (t = l.type || (null != a ? a.type : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : t)) + "' id='" + e.escapeExpression((t = null != (t = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  <div class='column-wrapper'></div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/cards/ColumnCard/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/cards/GroupCard/v0"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t, i;
                return null != (i = null != (i = l.blocks_markup || (null != a ? a.blocks_markup : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "blocks_markup",
                    hash: {},
                    data: s
                }) : i) ? t : ""
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='group-card parsec-card " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-breakpoint='" + e.escapeExpression((i = null != (i = l.breakpoint || (null != a ? a.breakpoint : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "breakpoint",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-fragment='" + e.escapeExpression((i = null != (i = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-image='" + e.escapeExpression((i = null != (i = l.chapter_image || (null != a ? a.chapter_image : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_image",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter='" + e.escapeExpression((i = null != (i = l.chapter || (null != a ? a.chapter : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter",
                    hash: {},
                    data: s
                }) : i)) + "' data-extended-options='" + e.escapeExpression((i = null != (i = l.extended_options_str || (null != a ? a.extended_options_str : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "extended_options_str",
                    hash: {},
                    data: s
                }) : i)) + "' data-height-style='" + e.escapeExpression((i = null != (i = l.height_style || (null != a ? a.height_style : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "height_style",
                    hash: {},
                    data: s
                }) : i)) + "' data-style='" + e.escapeExpression((i = null != (i = l.style_json || (null != a ? a.style_json : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "style_json",
                    hash: {},
                    data: s
                }) : i)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "' id='" + e.escapeExpression((i = null != (i = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : i)) + "' style='" + e.escapeExpression((i = null != (i = l.style_css || (null != a ? a.style_css : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "style_css",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.blocks_markup : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/cards/GroupCard/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/cards/LongCard/v0"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t, i;
                return null != (i = null != (i = l.blocks_markup || (null != a ? a.blocks_markup : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "blocks_markup",
                    hash: {},
                    data: s
                }) : i) ? t : ""
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='long-card parsec-card " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-breakpoint='" + e.escapeExpression((i = null != (i = l.breakpoint || (null != a ? a.breakpoint : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "breakpoint",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-fragment='" + e.escapeExpression((i = null != (i = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-image='" + e.escapeExpression((i = null != (i = l.chapter_image || (null != a ? a.chapter_image : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_image",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter='" + e.escapeExpression((i = null != (i = l.chapter || (null != a ? a.chapter : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter",
                    hash: {},
                    data: s
                }) : i)) + "' data-extended-options='" + e.escapeExpression((i = null != (i = l.extended_options_str || (null != a ? a.extended_options_str : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "extended_options_str",
                    hash: {},
                    data: s
                }) : i)) + "' data-height-style='" + e.escapeExpression((i = null != (i = l.height_style || (null != a ? a.height_style : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "height_style",
                    hash: {},
                    data: s
                }) : i)) + "' data-style='" + e.escapeExpression((i = null != (i = l.style_json || (null != a ? a.style_json : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "style_json",
                    hash: {},
                    data: s
                }) : i)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "' id='" + e.escapeExpression((i = null != (i = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : i)) + "' style='" + e.escapeExpression((i = null != (i = l.style_css || (null != a ? a.style_css : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "style_css",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.blocks_markup : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/cards/LongCard/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/cards/StretchCard/v0"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t, i;
                return "  <div class='parsec-subcard-container' data-bottom-bottom='background-position-y:100%;' data-top-top='background-position-y:0%;' style='background-image: url(" + e.escapeExpression((i = null != (i = l.background || (null != a ? a.background : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "background",
                    hash: {},
                    data: s
                }) : i)) + ");'>\n    " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.cards_markup : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n  </div>\n"
            },
            2: function() {
                return "hb! 'cards_markup'"
            },
            4: function(e, a, l, n, s) {
                var t, i;
                return null != (i = null != (i = l.blocks_markup || (null != a ? a.blocks_markup : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "blocks_markup",
                    hash: {},
                    data: s
                }) : i) ? t : ""
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='parsec-card stretch-card " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-background='" + e.escapeExpression((i = null != (i = l.background || (null != a ? a.background : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "background",
                    hash: {},
                    data: s
                }) : i)) + "' data-breakpoint='" + e.escapeExpression((i = null != (i = l.breakpoint || (null != a ? a.breakpoint : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "breakpoint",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-fragment='" + e.escapeExpression((i = null != (i = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-image='" + e.escapeExpression((i = null != (i = l.chapter_image || (null != a ? a.chapter_image : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_image",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter='" + e.escapeExpression((i = null != (i = l.chapter || (null != a ? a.chapter : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter",
                    hash: {},
                    data: s
                }) : i)) + "' data-extended-options='" + e.escapeExpression((i = null != (i = l.extended_options_str || (null != a ? a.extended_options_str : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "extended_options_str",
                    hash: {},
                    data: s
                }) : i)) + "' data-height-style='" + e.escapeExpression((i = null != (i = l.height_style || (null != a ? a.height_style : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "height_style",
                    hash: {},
                    data: s
                }) : i)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-transitions='" + e.escapeExpression((i = null != (i = l.transitions || (null != a ? a.transitions : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "transitions",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "' id='" + e.escapeExpression((i = null != (i = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : i)) + "' style='padding-top: 0;'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.cards : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "  " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.blocks_markup : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/cards/StretchCard/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/cards/WrapCard/v0"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t, i;
                return null != (i = null != (i = l.blocks_markup || (null != a ? a.blocks_markup : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "blocks_markup",
                    hash: {},
                    data: s
                }) : i) ? t : ""
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='parsec-card wrap-card " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-background='" + e.escapeExpression((i = null != (i = l.background || (null != a ? a.background : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "background",
                    hash: {},
                    data: s
                }) : i)) + "' data-breakpoint='" + e.escapeExpression((i = null != (i = l.breakpoint || (null != a ? a.breakpoint : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "breakpoint",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-fragment='" + e.escapeExpression((i = null != (i = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-image='" + e.escapeExpression((i = null != (i = l.chapter_image || (null != a ? a.chapter_image : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_image",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter='" + e.escapeExpression((i = null != (i = l.chapter || (null != a ? a.chapter : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter",
                    hash: {},
                    data: s
                }) : i)) + "' data-extended-options='" + e.escapeExpression((i = null != (i = l.extended_options_str || (null != a ? a.extended_options_str : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "extended_options_str",
                    hash: {},
                    data: s
                }) : i)) + "' data-height-style='" + e.escapeExpression((i = null != (i = l.height_style || (null != a ? a.height_style : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "height_style",
                    hash: {},
                    data: s
                }) : i)) + "' data-style='" + e.escapeExpression((i = null != (i = l.style_json || (null != a ? a.style_json : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "style_json",
                    hash: {},
                    data: s
                }) : i)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-transitions='" + e.escapeExpression((i = null != (i = l.transitions || (null != a ? a.transitions : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "transitions",
                    hash: {},
                    data: s
                }) : i)) + "' data-type='" + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "' id='" + e.escapeExpression((i = null != (i = l.chapter_fragment || (null != a ? a.chapter_fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_fragment",
                    hash: {},
                    data: s
                }) : i)) + "' style='" + e.escapeExpression((i = null != (i = l.style_css || (null != a ? a.style_css : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "style_css",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  <div class='wrap'>\n    " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.blocks_markup : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/cards/WrapCard/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/container/v0"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t, i;
                return null != (i = null != (i = l.cards_markup || (null != a ? a.cards_markup : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "cards_markup",
                    hash: {},
                    data: s
                }) : i) ? t : ""
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='parsec-container " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-ad-values='" + e.escapeExpression((i = null != (i = l.ad_values || (null != a ? a.ad_values : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "ad_values",
                    hash: {},
                    data: s
                }) : i)) + "' data-author='" + e.escapeExpression((i = null != (i = l.author || (null != a ? a.author : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "author",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapter-type='" + e.escapeExpression((i = null != (i = l.chapter_type || (null != a ? a.chapter_type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapter_type",
                    hash: {},
                    data: s
                }) : i)) + "' data-chapters='" + e.escapeExpression((i = null != (i = l.chapters || (null != a ? a.chapters : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapters",
                    hash: {},
                    data: s
                }) : i)) + "' data-code-version='" + e.escapeExpression((i = null != (i = l.code_version || (null != a ? a.code_version : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "code_version",
                    hash: {},
                    data: s
                }) : i)) + "' data-custom-colors='" + e.escapeExpression((i = null != (i = l.custom_colors || (null != a ? a.custom_colors : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "custom_colors",
                    hash: {},
                    data: s
                }) : i)) + "' data-custom-links='" + e.escapeExpression((i = null != (i = l.custom_links || (null != a ? a.custom_links : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "custom_links",
                    hash: {},
                    data: s
                }) : i)) + "' data-head-scripts='" + e.escapeExpression((i = null != (i = l.head_scripts || (null != a ? a.head_scripts : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "head_scripts",
                    hash: {},
                    data: s
                }) : i)) + "' data-id='" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "id",
                    hash: {},
                    data: s
                }) : i)) + "' data-klass='" + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-navigator-options='" + e.escapeExpression((i = null != (i = l.navigator_options || (null != a ? a.navigator_options : a)) ? i : l.helperMissing,
                    "function" == typeof i ? i.call(null != a ? a : {}, {
                        name: "navigator_options",
                        hash: {},
                        data: s
                    }) : i)) + "' data-navigator-order='" + e.escapeExpression((i = null != (i = l.navigator_order || (null != a ? a.navigator_order : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "navigator_order",
                    hash: {},
                    data: s
                }) : i)) + "' data-navigator-type='" + e.escapeExpression((i = null != (i = l.navigator_type || (null != a ? a.navigator_type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "navigator_type",
                    hash: {},
                    data: s
                }) : i)) + "' data-review-options='" + e.escapeExpression((i = null != (i = l.review_options || (null != a ? a.review_options : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "review_options",
                    hash: {},
                    data: s
                }) : i)) + "' data-series-id='" + e.escapeExpression((i = null != (i = l.series_id || (null != a ? a.series_id : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "series_id",
                    hash: {},
                    data: s
                }) : i)) + "' data-series='" + e.escapeExpression((i = null != (i = l.series || (null != a ? a.series : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "series",
                    hash: {},
                    data: s
                }) : i)) + "' data-show-chapters='" + e.escapeExpression((i = null != (i = l.show_chapters || (null != a ? a.show_chapters : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "show_chapters",
                    hash: {},
                    data: s
                }) : i)) + "' data-templates='" + e.escapeExpression((i = null != (i = l.templates || (null != a ? a.templates : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "templates",
                    hash: {},
                    data: s
                }) : i)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-version='" + e.escapeExpression((i = null != (i = l.version || (null != a ? a.version : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "version",
                    hash: {},
                    data: s
                }) : i)) + "' data-wp-author-id='" + e.escapeExpression((i = null != (i = l.wp_author_id || (null != a ? a.wp_author_id : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "wp_author_id",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.cards_markup : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/container/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/editor_body"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function() {
                return "<div id='longform-editor-body'>\n  <div class='arrange-view'>\n    <div class='template-list'></div>\n    <a class='add-card-button' href='javascript:void(0);'>+ Add A Card</a>\n  </div>\n  <div class='editor-type-selector-view'>\n    <a class='richtext-editor-type'>VISUAL</a>\n    <a class='html-editor-type'>HTML</a>\n  </div>\n  <div class='richtext-editor-view'>\n    <div class='richtext-editor-placeholder'></div>\n  </div>\n  <div class='html-editor-view'>\n    <div class='html-editor' contenteditable='true'></div>\n  </div>\n  <div class='infinite-content-editor-view'>\n    <div class='infinite-content-list content-live-view parsec-card'></div>\n  </div>\n  <div class='drag-and-drop-image-view'></div>\n  <div class='drag-and-drop-image-loader'></div>\n  <div class='drag-and-drop-image-option-view'>\n    <div class='parsec-image-label'>\n      <i class='fa fa-file-image-o'></i>\n      Image Size Options\n    </div>\n    <div class='parsec-image-label small'>Small URL</div>\n    <input class='parsec-image-url small'>\n    <div class='parsec-image-label medium'>Medium URL</div>\n    <input class='parsec-image-url medium'>\n    <div class='parsec-image-label large'>Large URL</div>\n    <input class='parsec-image-url large'>\n  </div>\n  <div class='card-view parsec-container'></div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/editor_body"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/editor_context_nav"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function() {
                return "<header id='longform-editor-nav'>\n  <div class='arrange-nav'>\n    <div class='parsec-post-title' contenteditable='true'></div>\n  </div>\n  <div class='card-edit-nav'>\n    <div class='card-title'></div>\n    <div class='card-attrs'></div>\n    <div class='actions'>\n      <a class='arrange-button' href='javascript:void(0);'>Zoom Out</a>\n      <a class='template-options-button' href='javascript:void(0);'>Card Options</a>\n    </div>\n  </div>\n</header>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/editor_context_nav"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/editor_nav"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function() {
                return "<header id='longform-nav'>\n  <div class='longform-nav-inner'>\n    <div class='logo'>\n      <a class='brand' href='/builder/'>\n        <span class='large'><img alt=\"Header share logo.v2 1ae91cfc1bc21a46cc127bcd2ae645cad4657464505668abca4bea13889ae851\" src=\"https://a.amz.mshcdn.com/assets/header_share_logo.v2-1ae91cfc1bc21a46cc127bcd2ae645cad4657464505668abca4bea13889ae851.png\" /></span>\n        <span class='small'><img alt=\"Mobile logo v2 white on black a5ec554f1d34076e67549724cc55d9a700c120290b71cf414946448391057c25\" src=\"https://a.amz.mshcdn.com/assets/mobile_logo_v2_white_on_black-a5ec554f1d34076e67549724cc55d9a700c120290b71cf414946448391057c25.png\" /></span>\n      </a>\n    </div>\n    <a class='editor-title' href='/builder/'>Longform Editor</a>\n    <a class='editor-card-group-title' href='/builder/card_groups/'>Card Groups</a>\n    <div class='edit'>\n      <div class='message'>\n        Saving...\n      </div>\n      <a class='preview-link'>Preview</a>\n      <a class='publish-link'>Publish</a>\n      <a class='settings-link'>Settings</a>\n    </div>\n    <div class='manage'>\n      <a class='new-post-link'>+ Create New</a>\n      <a class='new-card-group-link'>+ Create New Card Group</a>\n    </div>\n  </div>\n</header>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/editor_nav"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/editor_right_menu"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "        <li>\n          " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.pre : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.pre : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(19, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "        </li>\n"
            },
            2: function(e, a, l, n, s) {
                var t, i;
                return "<label>" + e.escapeExpression((i = null != (i = l.label || (null != a ? a.label : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "label",
                    hash: {},
                    data: s
                }) : i)) + "</label>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.select : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.bullet_list : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.bullet_list : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(13, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "")
            },
            3: function(e, a, l, n, s) {
                var t, i;
                return "              <select data-drill_down='" + e.escapeExpression((i = null != (i = l.drill_down || (null != a ? a.drill_down : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "drill_down",
                    hash: {},
                    data: s
                }) : i)) + "' data-force-refresh='" + e.escapeExpression((i = null != (i = l.force_refresh || (null != a ? a.force_refresh : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "force_refresh",
                    hash: {},
                    data: s
                }) : i)) + "' name='" + e.escapeExpression((i = null != (i = l.name || (null != a ? a.name : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : i)) + "'>\n" + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.values_checked : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "              </select>\n"
            },
            4: function(e, a, l, n, s) {
                var t;
                return (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.checked : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "                " + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.checked : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "")
            },
            5: function(e, a, l, n, s) {
                var t;
                return "                  <option selected value='" + e.escapeExpression((t = null != (t = l.value || (null != a ? a.value : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "value",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.content || (null != a ? a.content : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "content",
                    hash: {},
                    data: s
                }) : t)) + "</option>\n"
            },
            7: function(e, a, l, n, s) {
                var t;
                return "<option value='" + e.escapeExpression((t = null != (t = l.value || (null != a ? a.value : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "value",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.content || (null != a ? a.content : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "content",
                    hash: {},
                    data: s
                }) : t)) + "</option>\n"
            },
            9: function(e, a, l, n, s) {
                var t, i;
                return '              <input data-items_editor data-drill_down="' + e.escapeExpression((i = null != (i = l.drill_down || (null != a ? a.drill_down : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "drill_down",
                    hash: {},
                    data: s
                }) : i)) + '" type="text" placeholder="Type an item and press enter" />\n              <ul class="pro-con-list-items">\n' + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.value_items : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "              </ul>\n"
            },
            10: function(e, a, l, n, s) {
                var t;
                return null != (t = l.each.call(null != a ? a : {}, null != a ? a.value_items : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(11, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            11: function(e, a, l, n, s) {
                var t;
                return '                <li data-text="' + e.escapeExpression((t = null != (t = l.text || (null != a ? a.text : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "text",
                    hash: {},
                    data: s
                }) : t)) + '" data-index="' + e.escapeExpression((t = null != (t = l.index || (null != a ? a.index : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + '" draggable="true"><span class="move-pro-con">' + e.escapeExpression((t = null != (t = l.text || (null != a ? a.text : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "text",
                    hash: {},
                    data: s
                }) : t)) + '</span><a class="remove-pro-con"><i class="fa fa-times" data-id_value="' + e.escapeExpression((t = null != (t = l.index || (null != a ? a.index : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + '"></i></a></li>\n'
            },
            13: function(e, a, l, n, s) {
                var t;
                return null != (t = l.unless.call(null != a ? a : {}, null != a ? a.select : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(14, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            14: function(e, a, l, n, s) {
                var t;
                return "                " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.checked : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n" + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.checked : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(17, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "")
            },
            15: function(e, a, l, n, s) {
                var t;
                return "<" + e.escapeExpression((t = null != (t = l.tag || (null != a ? a.tag : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "tag",
                    hash: {},
                    data: s
                }) : t)) + ' checked="checked" data-drill_down="' + e.escapeExpression((t = null != (t = l.drill_down || (null != a ? a.drill_down : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "drill_down",
                    hash: {},
                    data: s
                }) : t)) + '" type="' + e.escapeExpression((t = null != (t = l.type || (null != a ? a.type : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : t)) + '" value="' + e.escapeExpression((t = null != (t = l.value || (null != a ? a.value : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "value",
                    hash: {},
                    data: s
                }) : t)) + '" />'
            },
            17: function(e, a, l, n, s) {
                var t;
                return "                  <" + e.escapeExpression((t = null != (t = l.tag || (null != a ? a.tag : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "tag",
                    hash: {},
                    data: s
                }) : t)) + ' data-drill_down="' + e.escapeExpression((t = null != (t = l.drill_down || (null != a ? a.drill_down : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "drill_down",
                    hash: {},
                    data: s
                }) : t)) + '" type="' + e.escapeExpression((t = null != (t = l.type || (null != a ? a.type : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : t)) + '" value="' + e.escapeExpression((t = null != (t = l.value || (null != a ? a.value : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "value",
                    hash: {},
                    data: s
                }) : t)) + '" />\n'
            },
            19: function(e, a, l, n, s) {
                var t;
                return (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.values_checked : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(20, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.values_checked : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(26, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "")
            },
            20: function(e, a, l, n, s) {
                var t, i;
                return "                <fieldset class='radio-group " + e.escapeExpression((i = null != (i = l.klass || (null != a ? a.klass : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : i)) + "' data-drill_down='" + e.escapeExpression((i = null != (i = l.drill_down || (null != a ? a.drill_down : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "drill_down",
                    hash: {},
                    data: s
                }) : i)) + "'>\n                <label class='radio-group-label'>" + e.escapeExpression((i = null != (i = l.label || (null != a ? a.label : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "label",
                    hash: {},
                    data: s
                }) : i)) + "</label>\n" + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.values_checked : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(21, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "                </fieldset>\n"
            },
            21: function(e, a, l, n, s) {
                var t;
                return (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.checked : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(22, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.checked : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(24, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "")
            },
            22: function(e, a, l, n, s) {
                var t;
                return "                    <input checked='true' class='option-input' name='" + e.escapeExpression((t = null != (t = l.name || (null != a ? a.name : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='" + e.escapeExpression((t = null != (t = l.value || (null != a ? a.value : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "value",
                    hash: {},
                    data: s
                }) : t)) + "'>\n                    <label class='option-label'>" + e.escapeExpression((t = null != (t = l.value || (null != a ? a.value : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "value",
                    hash: {},
                    data: s
                }) : t)) + "</label>\n"
            },
            24: function(e, a, l, n, s) {
                var t;
                return "                    <input class='option-input' name='" + e.escapeExpression((t = null != (t = l.name || (null != a ? a.name : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='" + e.escapeExpression((t = null != (t = l.value || (null != a ? a.value : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "value",
                    hash: {},
                    data: s
                }) : t)) + "'>\n                    <label class='option-label'>" + e.escapeExpression((t = null != (t = l.value || (null != a ? a.value : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "value",
                    hash: {},
                    data: s
                }) : t)) + "</label>\n"
            },
            26: function(e, a, l, n, s) {
                var t, i;
                return "              <label>" + e.escapeExpression((i = null != (i = l.label || (null != a ? a.label : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "label",
                    hash: {},
                    data: s
                }) : i)) + "</label>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.content_tag : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(27, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "              " + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.content_tag : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(29, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "")
            },
            27: function(e, a, l, n, s) {
                var t;
                return "                <" + e.escapeExpression((t = null != (t = l.tag || (null != a ? a.tag : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "tag",
                    hash: {},
                    data: s
                }) : t)) + ' class="' + e.escapeExpression((t = null != (t = l.klass || (null != a ? a.klass : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "klass",
                    hash: {},
                    data: s
                }) : t)) + '" data-drill_down="' + e.escapeExpression((t = null != (t = l.drill_down || (null != a ? a.drill_down : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "drill_down",
                    hash: {},
                    data: s
                }) : t)) + '" type="' + e.escapeExpression((t = null != (t = l.type || (null != a ? a.type : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : t)) + '">' + e.escapeExpression((t = null != (t = l.content || (null != a ? a.content : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "content",
                    hash: {},
                    data: s
                }) : t)) + "</" + e.escapeExpression((t = null != (t = l.tag || (null != a ? a.tag : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "tag",
                    hash: {},
                    data: s
                }) : t)) + ">\n"
            },
            29: function(e, a, l, n, s) {
                var t;
                return "<" + e.escapeExpression((t = null != (t = l.tag || (null != a ? a.tag : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "tag",
                    hash: {},
                    data: s
                }) : t)) + ' data-drill_down="' + e.escapeExpression((t = null != (t = l.drill_down || (null != a ? a.drill_down : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "drill_down",
                    hash: {},
                    data: s
                }) : t)) + '" type="' + e.escapeExpression((t = null != (t = l.type || (null != a ? a.type : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : t)) + '" value="' + e.escapeExpression((t = null != (t = l.value || (null != a ? a.value : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "value",
                    hash: {},
                    data: s
                }) : t)) + '" />\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div id='parsec-right-menu'>\n  <ul class='right-menu-accordion'>\n    <li class='active'>\n      Template Options\n      \n      <ul class='right-menu-options'>\n" + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.template_options : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "      </ul>\n          </li>\n        </ul>\n      </div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/editor_right_menu"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/editor_sortable_template"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "    <div class='editor-template-thumbnail text-thumbnail'>" + e.escapeExpression((t = null != (t = l.content || (null != a ? a.content : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "content",
                    hash: {},
                    data: s
                }) : t)) + "</div>\n"
            },
            3: function(e, a, l, n, s) {
                var t;
                return "    <div class='image-wrap'>\n      <img class='editor-template-thumbnail' src='" + e.escapeExpression((t = null != (t = l.content || (null != a ? a.content : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "content",
                    hash: {},
                    data: s
                }) : t)) + "'>\n    </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='editor-template-item'>\n  <div class='editor-template-thumbnail-wrap'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.textThumbnail : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.imageThumbnail : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "  </div>\n  <h3 class='editor-template-title'>" + e.escapeExpression((i = null != (i = l.cardTitle || (null != a ? a.cardTitle : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "cardTitle",
                    hash: {},
                    data: s
                }) : i)) + "</h3>\n  <a class='insert-card-button'>+</a>\n  <div class='actions'>\n    <a class='delete'></a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/editor_sortable_template"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/infinite_content_list/agenda/v0"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='infinite-content-list-item agenda agenda-item' data-index='" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  <div class='content-wrap'>\n    <div class='text-wrap'>\n      <label class='content-value-label'>" + e.escapeExpression((t = null != (t = l.startTime || (null != a ? a.startTime : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "startTime",
                    hash: {},
                    data: s
                }) : t)) + "</label>\n      <input class='content-value agenda-start-time' disabled placeholder='0:00' value='" + e.escapeExpression((t = null != (t = l.startTime || (null != a ? a.startTime : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "startTime",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value agenda-duration' data-force-refresh='true' placeholder='enter agenda duration here (in minutes)' value='" + e.escapeExpression((t = null != (t = l.duration || (null != a ? a.duration : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "duration",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value agenda-title' placeholder='enter agenda title here' value='" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value agenda-description' placeholder='enter agenda description here' value='" + e.escapeExpression((t = null != (t = l.description || (null != a ? a.description : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "description",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value agenda-participants' placeholder='enter agenda participants here' value='" + e.escapeExpression((t = null != (t = l.participants || (null != a ? a.participants : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "participants",
                    hash: {},
                    data: s
                }) : t)) + "'>\n    </div>\n  </div>\n  <a class='insert-item-button'>+</a>\n  <div class='actions'>\n    <a class='delete-item-button'></a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/infinite_content_list/agenda/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/infinite_content_list/agenda_custom_text/v0"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='infinite-content-list-item agenda-custom-text agenda-item' data-index='" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  <div class='content-wrap'>\n    <div class='text-wrap'>\n      <input class='content-value agenda-label' placeholder='enter agenda label here' value='" + e.escapeExpression((t = null != (t = l.label || (null != a ? a.label : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "label",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value agenda-sublabel' placeholder='enter agenda sublabel here' value='" + e.escapeExpression((t = null != (t = l.sublabel || (null != a ? a.sublabel : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sublabel",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value agenda-title' placeholder='enter agenda title here' value='" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value agenda-description' placeholder='enter agenda description here' value='" + e.escapeExpression((t = null != (t = l.description || (null != a ? a.description : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "description",
                    hash: {},
                    data: s
                }) : t)) + "'>\n    </div>\n  </div>\n  <a class='insert-item-button'>+</a>\n  <div class='actions'>\n    <a class='delete-item-button'></a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/infinite_content_list/agenda_custom_text/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/infinite_content_list/bio_quote/v0"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='infinite-content-list-item bio-quote bio-quote-item v0' data-index='" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  <div class='content-wrap'>\n    <div class='text-wrap'>\n      <input class='content-value bio-image' placeholder='enter bio image url here' value='" + e.escapeExpression((t = null != (t = l.bioImage || (null != a ? a.bioImage : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "bioImage",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value bio-name' placeholder='enter bio name here' value='" + e.escapeExpression((t = null != (t = l.bioName || (null != a ? a.bioName : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "bioName",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value bio-quote' placeholder='enter quote here' value='" + e.escapeExpression((t = null != (t = l.bioQuote || (null != a ? a.bioQuote : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "bioQuote",
                    hash: {},
                    data: s
                }) : t)) + "'>\n    </div>\n  </div>\n  <a class='insert-item-button'>+</a>\n  <div class='actions'>\n    <a class='delete-item-button'></a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/infinite_content_list/bio_quote/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/infinite_content_list/bio_quote/v1"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<input checked class='option-input small' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='small'>\n"
            },
            3: function(e, a, l, n, s) {
                var t;
                return "        <input class='option-input small' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='small'>"
            },
            5: function(e, a, l, n, s) {
                var t;
                return "<input checked class='option-input medium' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='medium'>\n"
            },
            7: function(e, a, l, n, s) {
                var t;
                return "        <input class='option-input medium' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='medium'>"
            },
            9: function(e, a, l, n, s) {
                var t;
                return "<input checked class='option-input large' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='large'>\n"
            },
            11: function(e, a, l, n, s) {
                var t;
                return "        <input class='option-input large' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='large'>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='infinite-content-list-item bio-quote bio-quote-item v1' data-index='" + e.escapeExpression((i = null != (i = l.dataIndex || (null != a ? a.dataIndex : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  <div class='content-wrap'>\n    <div class='text-wrap'>\n      <input class='content-value bio-image' placeholder='enter bio image url here' value='" + e.escapeExpression((i = null != (i = l.bioImage || (null != a ? a.bioImage : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "bioImage",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <fieldset class='parsec-image-size-options' data-index='" + e.escapeExpression((i = null != (i = l.dataIndex || (null != a ? a.dataIndex : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : i)) + "'>\n        " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.smallCheck : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? t : "") + "\n        <label class='option-label'>small</label>\n        <input class='content-value option-value-small hidden' data-index='1' placeholder='small image url' value='" + e.escapeExpression((i = null != (i = l.bioImageSmall || (null != a ? a.bioImageSmall : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "bioImageSmall",
                    hash: {},
                    data: s
                }) : i)) + "'>\n        " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.mediumCheck : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.program(7, s, 0),
                    data: s
                })) ? t : "") + "\n        <label class='option-label'>medium</label>\n        <input class='content-value option-value-medium hidden' data-index='2' placeholder='medium image url' value='" + e.escapeExpression((i = null != (i = l.bioImageMedium || (null != a ? a.bioImageMedium : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "bioImageMedium",
                    hash: {},
                    data: s
                }) : i)) + "'>\n        " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.largeCheck : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.program(11, s, 0),
                    data: s
                })) ? t : "") + "\n        <label class='option-label'>large</label>\n        <input class='content-value option-value-large hidden' data-index='3' placeholder='large image url' value='" + e.escapeExpression((i = null != (i = l.bioImageLarge || (null != a ? a.bioImageLarge : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "bioImageLarge",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      </fieldset>\n      <input class='content-value bio-name' placeholder='enter bio name here' value='" + e.escapeExpression((i = null != (i = l.bioName || (null != a ? a.bioName : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "bioName",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <input class='content-value bio-quote' placeholder='enter quote here' value='" + e.escapeExpression((i = null != (i = l.bioQuote || (null != a ? a.bioQuote : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "bioQuote",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    </div>\n  </div>\n  <a class='insert-item-button'>+</a>\n  <div class='actions'>\n    <a class='delete-item-button'></a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/infinite_content_list/bio_quote/v1"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/infinite_content_list/curated_story/v0"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='infinite-content-list-item curated-story story-item v0' data-index='" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  <div class='content-wrap'>\n    <div class='text-wrap'>\n      <input class='content-value post-url ajax-input' data-force-refresh='true' placeholder='https://post.url.here' value='" + e.escapeExpression((t = null != (t = l.postUrl || (null != a ? a.postUrl : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "postUrl",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value post-image-url' data-force-refresh='true' disabled placeholder='https://image.url.here' value='" + e.escapeExpression((t = null != (t = l.postImageUrl || (null != a ? a.postImageUrl : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "postImageUrl",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value post-title' disabled placeholder='Post Title Here' value='" + e.escapeExpression((t = null != (t = l.postTitle || (null != a ? a.postTitle : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "postTitle",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value post-date' disabled placeholder='date/goes/here' value='" + e.escapeExpression((t = null != (t = l.postDate || (null != a ? a.postDate : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "postDate",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value custom-pre-text' placeholder='Custom pre text' value='" + e.escapeExpression((t = null != (t = l.preText || (null != a ? a.preText : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "preText",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value custom-image' placeholder='Custom image url' value='" + e.escapeExpression((t = null != (t = l.customImage || (null != a ? a.customImage : a)) ? t : l.helperMissing,
                    "function" == typeof t ? t.call(null != a ? a : {}, {
                        name: "customImage",
                        hash: {},
                        data: s
                    }) : t)) + "'>\n    </div>\n  </div>\n  <a class='insert-item-button'>+</a>\n  <div class='actions'>\n    <a class='delete-item-button'></a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/infinite_content_list/curated_story/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/infinite_content_list/curated_story/v1"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<input checked class='option-input small' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.imageDataIndex || (null != a ? a.imageDataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageDataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='small'>\n"
            },
            3: function(e, a, l, n, s) {
                var t;
                return "        <input class='option-input small' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.imageDataIndex || (null != a ? a.imageDataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageDataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='small'>"
            },
            5: function(e, a, l, n, s) {
                var t;
                return "<input checked class='option-input medium' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.imageDataIndex || (null != a ? a.imageDataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageDataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='medium'>\n"
            },
            7: function(e, a, l, n, s) {
                var t;
                return "        <input class='option-input medium' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.imageDataIndex || (null != a ? a.imageDataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageDataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='medium'>"
            },
            9: function(e, a, l, n, s) {
                var t;
                return "<input checked class='option-input large' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.imageDataIndex || (null != a ? a.imageDataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageDataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='large'>\n"
            },
            11: function(e, a, l, n, s) {
                var t;
                return "        <input class='option-input large' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.imageDataIndex || (null != a ? a.imageDataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageDataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='large'>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='infinite-content-list-item curated-story story-item v1' data-index='" + e.escapeExpression((i = null != (i = l.dataIndex || (null != a ? a.dataIndex : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  <div class='content-wrap'>\n    <div class='text-wrap'>\n      <input class='content-value post-url ajax-input' data-force-refresh='true' placeholder='https://post.url.here' value='" + e.escapeExpression((i = null != (i = l.postUrl || (null != a ? a.postUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "postUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <input class='content-value post-image-url' data-force-refresh='true' disabled placeholder='https://image.url.here' value='" + e.escapeExpression((i = null != (i = l.postImageUrl || (null != a ? a.postImageUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "postImageUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <input class='content-value post-title' disabled placeholder='Post Title Here' value='" + e.escapeExpression((i = null != (i = l.postTitle || (null != a ? a.postTitle : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "postTitle",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <input class='content-value post-date' disabled placeholder='date/goes/here' value='" + e.escapeExpression((i = null != (i = l.postDate || (null != a ? a.postDate : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "postDate",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <input class='content-value custom-pre-text' placeholder='Custom pre text' value='" + e.escapeExpression((i = null != (i = l.preText || (null != a ? a.preText : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "preText",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <input class='content-value custom-image' data-force-refresh='true' placeholder='Custom image url' value='" + e.escapeExpression((i = null != (i = l.customImage || (null != a ? a.customImage : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "customImage",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <fieldset class='parsec-image-size-options' data-index='" + e.escapeExpression((i = null != (i = l.imageDataIndex || (null != a ? a.imageDataIndex : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "imageDataIndex",
                    hash: {},
                    data: s
                }) : i)) + "'>\n        " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.smallCheck : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? t : "") + "\n        <label class='option-label small'>small</label>\n        <input class='content-value option-value-small hidden' data-index='1' placeholder='small image url' value='" + e.escapeExpression((i = null != (i = l.customImageSmall || (null != a ? a.customImageSmall : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "customImageSmall",
                    hash: {},
                    data: s
                }) : i)) + "'>\n        " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.mediumCheck : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.program(7, s, 0),
                    data: s
                })) ? t : "") + "\n        <label class='option-label medium'>medium</label>\n        <input class='content-value option-value-medium hidden' data-index='2' placeholder='medium image url' value='" + e.escapeExpression((i = null != (i = l.customImageMedium || (null != a ? a.customImageMedium : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "customImageMedium",
                    hash: {},
                    data: s
                }) : i)) + "'>\n        " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.largeCheck : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.program(11, s, 0),
                    data: s
                })) ? t : "") + "\n        <label class='option-label large'>large</label>\n        <input class='content-value option-value-large hidden' data-index='3' placeholder='large image url' value='" + e.escapeExpression((i = null != (i = l.customImageLarge || (null != a ? a.customImageLarge : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "customImageLarge",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      </fieldset>\n    </div>\n  </div>\n  <a class='insert-item-button'>+</a>\n  <div class='actions'>\n    <a class='delete-item-button'></a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/infinite_content_list/curated_story/v1"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/infinite_content_list/list_item"] = Handlebars.template({
            1: function(e, a) {
                return "<input class='content-value' value='" + e.escapeExpression(e.lambda(a, a)) + "'>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='infinite-content-list-item'>\n  <div class='content-wrap'>\n    " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.data : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n  </div>\n  <a class='insert-item-button'>+</a>\n  <div class='actions'>\n    <a class='delete-item-button'></a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/infinite_content_list/list_item"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/infinite_content_list/review_detail/v0"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<option value='" + e.escapeExpression((t = null != (t = l.v || (null != a ? a.v : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "v",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.k || (null != a ? a.k : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "k",
                    hash: {},
                    data: s
                }) : t)) + "</option>"
            },
            3: function(e, a, l, n, s) {
                var t;
                return "      <textarea class='content-value review-item-text' placeholder='Review item text here (support richtext)' value='" + e.escapeExpression((t = null != (t = l.itemText || (null != a ? a.itemText : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "itemText",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.itemText || (null != a ? a.itemText : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "itemText",
                    hash: {},
                    data: s
                }) : t)) + "</textarea>\n"
            },
            5: function(e, a, l, n, s) {
                var t;
                return "      <textarea class='content-value review-item-text' placeholder='Review item text here (support richtext)' value='" + e.escapeExpression((t = null != (t = l.itemText || (null != a ? a.itemText : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "itemText",
                    hash: {},
                    data: s
                }) : t)) + "'></textarea>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='infinite-content-list-item review-list v0 review-item' data-index='" + e.escapeExpression((i = null != (i = l.dataIndex || (null != a ? a.dataIndex : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  <div class='content-wrap'>\n    <div class='text-wrap'>\n      <input class='content-value review-item-title' placeholder='Review item title here' value='" + e.escapeExpression((i = null != (i = l.itemTitle || (null != a ? a.itemTitle : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "itemTitle",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <div class='select-wrap'>\n        <select class='content-value-select review-item-points' placeholder='Review item point here'>\n          " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.pointArraySelect : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n        </select>\n        <input class='content-value hidden' hidden value='" + e.escapeExpression((i = null != (i = l.itemPoints || (null != a ? a.itemPoints : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "itemPoints",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      </div>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.itemText : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.itemText : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "      <input class='content-value review-item-overwrite-highlight-hex' placeholder='Review item hex overrite here (optional, ex. #00aeef)' value='" + e.escapeExpression((i = null != (i = l.itemOverwriteHighlightHex || (null != a ? a.itemOverwriteHighlightHex : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "itemOverwriteHighlightHex",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    </div>\n  </div>\n  <a class='insert-item-button'>+</a>\n  <div class='actions'>\n    <a class='delete-item-button'></a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/infinite_content_list/review_detail/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/infinite_content_list/side_by_side_iframe/v0"] = Handlebars.template({
            1: function() {
                return "<option selected value='youtube'>youtube</option>"
            },
            3: function() {
                return "<option value='youtube'>youtube</option>"
            },
            5: function() {
                return "<option selected value='ooyala'>ooyala</option>"
            },
            7: function() {
                return "<option value='ooyala'>ooyala</option>"
            },
            9: function() {
                return "<option selected value='other'>other</option>"
            },
            11: function() {
                return "<option value='other'>other</option>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='infinite-content-list-item side-by-side-iframe v0 iframe-item' data-index='" + e.escapeExpression((i = null != (i = l.dataIndex || (null != a ? a.dataIndex : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  <div class='content-wrap'>\n    <div class='text-wrap'>\n      <input class='content-value richtext' placeholder='Iframe code / Youtube url / Ooyala id (required)' value='" + e.escapeExpression((i = null != (i = l.richtext || (null != a ? a.richtext : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "richtext",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <div class='select-wrap'>\n        <select class='content-value-select content-type' placeholder='Iframe type here (required, ex. youtube, ooyala...)'>\n          " + (null != (t = l["if"].call(null != a ? a : {}, null != (t = null != a ? a.select : a) ? t.yt : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n          " + (null != (t = l.unless.call(null != a ? a : {}, null != (t = null != a ? a.select : a) ? t.yt : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n          " + (null != (t = l["if"].call(null != a ? a : {}, null != (t = null != a ? a.select : a) ? t.ooyala : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n          " + (null != (t = l.unless.call(null != a ? a : {}, null != (t = null != a ? a.select : a) ? t.ooyala : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n          " + (null != (t = l["if"].call(null != a ? a : {}, null != (t = null != a ? a.select : a) ? t.other : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n          " + (null != (t = l.unless.call(null != a ? a : {}, null != (t = null != a ? a.select : a) ? t.other : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(11, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n        </select>\n        <input class='content-value hidden' hidden value='" + e.escapeExpression((i = null != (i = l.contentType || (null != a ? a.contentType : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "contentType",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      </div>\n      <input class='content-value width' placeholder='Iframe width here (in px, default 300)' value='" + e.escapeExpression((i = null != (i = l.width || (null != a ? a.width : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "width",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <input class='content-value height' placeholder='Iframe height here (in px, optional)' value='" + e.escapeExpression((i = null != (i = l.height || (null != a ? a.height : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "height",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <input class='content-value title' placeholder='Iframe title here (optional)' value='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <input class='content-value caption' placeholder='Iframe caption here (optional)' value='" + e.escapeExpression((i = null != (i = l.caption || (null != a ? a.caption : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "caption",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <input class='content-value credit' placeholder='Iframe credit here (optional)' value='" + e.escapeExpression((i = null != (i = l.credit || (null != a ? a.credit : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "credit",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    </div>\n  </div>\n  <a class='insert-item-button'>+</a>\n  <div class='actions'>\n    <a class='delete-item-button'></a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/infinite_content_list/side_by_side_iframe/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/infinite_content_list/side_by_side_image/v0"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='infinite-content-list-item side-by-side-image image-item' data-index='" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  <div class='content-wrap'>\n    <div class='image-wrap'>\n      <img src='" + e.escapeExpression((t = null != (t = l.imageUrl || (null != a ? a.imageUrl : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageUrl",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value url' data-force-refresh='true' placeholder='https://image.url.here' value='" + e.escapeExpression((t = null != (t = l.imageUrl || (null != a ? a.imageUrl : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageUrl",
                    hash: {},
                    data: s
                }) : t)) + "'>\n    </div>\n    <div class='text-wrap'>\n      <input class='content-value title' placeholder='image title here' value='" + e.escapeExpression((t = null != (t = l.imageTitle || (null != a ? a.imageTitle : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageTitle",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value caption' placeholder='image caption here' value='" + e.escapeExpression((t = null != (t = l.imageCaption || (null != a ? a.imageCaption : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageCaption",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value credit' placeholder='image credit here' value='" + e.escapeExpression((t = null != (t = l.imageCredit || (null != a ? a.imageCredit : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageCredit",
                    hash: {},
                    data: s
                }) : t)) + "'>\n    </div>\n  </div>\n  <a class='insert-item-button'>+</a>\n  <div class='actions'>\n    <a class='delete-item-button'></a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/infinite_content_list/side_by_side_image/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/infinite_content_list/side_by_side_image/v1"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='infinite-content-list-item side-by-side-image v1 image-item' data-index='" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  <div class='content-wrap'>\n    <div class='image-wrap'>\n      <img src='" + e.escapeExpression((t = null != (t = l.imageUrl || (null != a ? a.imageUrl : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageUrl",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value url' data-force-refresh='true' placeholder='https://image.url.here' value='" + e.escapeExpression((t = null != (t = l.imageUrl || (null != a ? a.imageUrl : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageUrl",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value click-through-url' placeholder='https://click.through.url.here' value='" + e.escapeExpression((t = null != (t = l.clickThroughUrl || (null != a ? a.clickThroughUrl : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "clickThroughUrl",
                    hash: {},
                    data: s
                }) : t)) + "'>\n    </div>\n    <div class='text-wrap'>\n      <input class='content-value title' placeholder='image title here' value='" + e.escapeExpression((t = null != (t = l.imageTitle || (null != a ? a.imageTitle : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageTitle",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value caption' placeholder='image caption here' value='" + e.escapeExpression((t = null != (t = l.imageCaption || (null != a ? a.imageCaption : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageCaption",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value credit' placeholder='image credit here' value='" + e.escapeExpression((t = null != (t = l.imageCredit || (null != a ? a.imageCredit : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageCredit",
                    hash: {},
                    data: s
                }) : t)) + "'>\n    </div>\n  </div>\n  <a class='insert-item-button'>+</a>\n  <div class='actions'>\n    <a class='delete-item-button'></a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/infinite_content_list/side_by_side_image/v1"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/infinite_content_list/side_by_side_image/v2"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<input checked class='option-input small' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='small'>\n"
            },
            3: function(e, a, l, n, s) {
                var t;
                return "      <input class='option-input small' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='small'>"
            },
            5: function(e, a, l, n, s) {
                var t;
                return "<input checked class='option-input medium' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='medium'>\n"
            },
            7: function(e, a, l, n, s) {
                var t;
                return "      <input class='option-input medium' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='medium'>"
            },
            9: function(e, a, l, n, s) {
                var t;
                return "<input checked class='option-input large' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='large'>\n"
            },
            11: function(e, a, l, n, s) {
                var t;
                return "      <input class='option-input large' name='parsec_image_size_option_" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "' type='radio' value='large'>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='infinite-content-list-item side-by-side-image v2 image-item' data-index='" + e.escapeExpression((i = null != (i = l.dataIndex || (null != a ? a.dataIndex : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  <div class='content-wrap'>\n    <img class='image-preview' src='" + e.escapeExpression((i = null != (i = l.imageUrl || (null != a ? a.imageUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "imageUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <input class='content-value url' data-force-refresh='true' placeholder='https://image.url.here' value='" + e.escapeExpression((i = null != (i = l.imageUrl || (null != a ? a.imageUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "imageUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <fieldset class='parsec-image-size-options' data-index='" + e.escapeExpression((i = null != (i = l.dataIndex || (null != a ? a.dataIndex : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.smallCheck : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? t : "") + "\n      <label class='option-label small'>small</label>\n      <input class='content-value option-value-small hidden' data-index='1' placeholder='small image url' value='" + e.escapeExpression((i = null != (i = l.imageSmallUrl || (null != a ? a.imageSmallUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "imageSmallUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.mediumCheck : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.program(7, s, 0),
                    data: s
                })) ? t : "") + "\n      <label class='option-label medium'>medium</label>\n      <input class='content-value option-value-medium hidden' data-index='2' placeholder='medium image url' value='" + e.escapeExpression((i = null != (i = l.imageMediumUrl || (null != a ? a.imageMediumUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "imageMediumUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.largeCheck : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.program(11, s, 0),
                    data: s
                })) ? t : "") + "\n      <label class='option-label large'>large</label>\n      <input class='content-value option-value-large hidden' data-index='3' placeholder='large image url' value='" + e.escapeExpression((i = null != (i = l.imageLargeUrl || (null != a ? a.imageLargeUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "imageLargeUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    </fieldset>\n    <input class='content-value click-through-url' placeholder='https://click.through.url.here' value='" + e.escapeExpression((i = null != (i = l.clickThroughUrl || (null != a ? a.clickThroughUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "clickThroughUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <input class='content-value title' placeholder='image title here' value='" + e.escapeExpression((i = null != (i = l.imageTitle || (null != a ? a.imageTitle : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "imageTitle",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <input class='content-value caption' placeholder='image caption here' value='" + e.escapeExpression((i = null != (i = l.imageCaption || (null != a ? a.imageCaption : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "imageCaption",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <input class='content-value credit' placeholder='image credit here' value='" + e.escapeExpression((i = null != (i = l.imageCredit || (null != a ? a.imageCredit : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "imageCredit",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  </div>\n  <a class='insert-item-button'>+</a>\n  <div class='actions'>\n    <a class='delete-item-button'></a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/infinite_content_list/side_by_side_image/v2"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/infinite_content_list/stats/v0"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='infinite-content-list-item stats stat-item' data-index='" + e.escapeExpression((t = null != (t = l.dataIndex || (null != a ? a.dataIndex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "dataIndex",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  <div class='content-wrap'>\n    <div class='text-wrap'>\n      <input class='content-value text-0' placeholder='text 0 here' value='" + e.escapeExpression((t = null != (t = l.text0 || (null != a ? a.text0 : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "text0",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value text-1' placeholder='text 1 here' value='" + e.escapeExpression((t = null != (t = l.text1 || (null != a ? a.text1 : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "text1",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <input class='content-value credit' placeholder='credit here' value='" + e.escapeExpression((t = null != (t = l.credit || (null != a ? a.credit : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "credit",
                    hash: {},
                    data: s
                }) : t)) + "'>\n    </div>\n  </div>\n  <a class='insert-item-button'>+</a>\n  <div class='actions'>\n    <a class='delete-item-button'></a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/infinite_content_list/stats/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/modals/modal_add_card"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.visible_in_editor : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            2: function(e, a, l, n, s) {
                var t;
                return "\n    <li class='" + e.escapeExpression((t = null != (t = l["class"] || (null != a ? a["class"] : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "class",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <a data-toggle='tab' href='#" + e.escapeExpression((t = null != (t = l.fragment || (null != a ? a.fragment : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "fragment",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "</a>\n    </li>\n    "
            },
            4: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.visible_in_editor : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            5: function(e, a, l, n, s) {
                var t, i;
                return "\n    <div class='tab-pane " + e.escapeExpression((i = null != (i = l["class"] || (null != a ? a["class"] : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "class",
                    hash: {},
                    data: s
                }) : i)) + "' id='" + e.escapeExpression((i = null != (i = l.fragment || (null != a ? a.fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "fragment",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.templates : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(6, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n    </div>\n    "
            },
            6: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.visible_in_editor : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            7: function(e, a, l, n, s) {
                var t;
                return (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.visible_in_card_group_editor : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.visible_in_card_group_editor : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(10, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "")
            },
            8: function(e, a, l, n, s) {
                var t;
                return "\n      <div class='template' data-index='" + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "'>\n        <img class='template-thumbnail' src='" + e.escapeExpression((t = null != (t = l.thumbnail || (null != a ? a.thumbnail : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "thumbnail",
                    hash: {},
                    data: s
                }) : t)) + "'>\n        <h2 class='template-name'>\n          " + e.escapeExpression((t = null != (t = l.template_name || (null != a ? a.template_name : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "template_name",
                    hash: {},
                    data: s
                }) : t)) + "\n        </h2>\n        <p class='template-description'>\n          " + e.escapeExpression((t = null != (t = l.description || (null != a ? a.description : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "description",
                    hash: {},
                    data: s
                }) : t)) + "\n        </p>\n      </div>\n"
            },
            10: function(e, a, l, n, s) {
                var t;
                return "      <div class='template hide-in-card-group-editor' data-index='" + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "'>\n        <img class='template-thumbnail' src='" + e.escapeExpression((t = null != (t = l.thumbnail || (null != a ? a.thumbnail : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "thumbnail",
                    hash: {},
                    data: s
                }) : t)) + "'>\n        <h2 class='template-name'>\n          " + e.escapeExpression((t = null != (t = l.template_name || (null != a ? a.template_name : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "template_name",
                    hash: {},
                    data: s
                }) : t)) + "\n        </h2>\n        <p class='template-description'>\n          " + e.escapeExpression((t = null != (t = l.description || (null != a ? a.description : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "description",
                    hash: {},
                    data: s
                }) : t)) + "\n        </p>\n      </div>\n      "
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='tabbable tabs-left' id='parsec-template-tabs'>\n  <ul class='nav nav-tabs'>\n    " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.categories : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n  </ul>\n  <div class='tab-content'>\n    " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.categories : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/modals/modal_add_card"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/modals/modal_copy_card_group"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "  <h2>Are you sure you want to copy this card group: " + e.escapeExpression((t = null != (t = l.message || (null != a ? a.message : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "message",
                    hash: {},
                    data: s
                }) : t)) + "?</h2>\n"
            },
            3: function() {
                return "  \n  <h2>Are you sure you want to copy this card group?</h2>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='parsec-modal-action' id='parsec-modal-copy-card-group'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.message : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? t : "") + "  \n  <div class='modal-actions'>\n    <a class='confirm'>ok</a>\n    <a class='cancel'>cancel</a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/modals/modal_copy_card_group"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}),
            this.Handlebars.templates["parsec/editor/modals/modal_delete_card"] = Handlebars.template({
                compiler: [7, ">= 4.0.0"],
                main: function() {
                    return "<div class='parsec-modal-action' id='parsec-modal-delete-card'>\n  <h2>Are you sure you want to delete this card?</h2>\n  <div class='modal-actions'>\n    <a class='confirm'>ok</a>\n    <a class='cancel'>cancel</a>\n  </div>\n</div>"
                },
                useData: !0
            }), this.Handlebars.templates["parsec/editor/modals/modal_delete_card"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/modals/modal_delete_card_group"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "  <h2>Are you sure you want to delete this card group: " + e.escapeExpression((t = null != (t = l.message || (null != a ? a.message : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "message",
                    hash: {},
                    data: s
                }) : t)) + "?</h2>\n"
            },
            3: function() {
                return "  \n  <h2>Are you sure you want to delete this card group?</h2>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='parsec-modal-action' id='parsec-modal-delete-card-group'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.message : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? t : "") + "  \n  <div class='modal-actions'>\n    <a class='confirm'>ok</a>\n    <a class='cancel'>cancel</a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/modals/modal_delete_card_group"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/modals/modal_delete_post"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "  <h2>Are you sure you want to delete this post: " + e.escapeExpression((t = null != (t = l.message || (null != a ? a.message : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "message",
                    hash: {},
                    data: s
                }) : t)) + "?</h2>\n"
            },
            3: function() {
                return "  \n  <h2>Are you sure you want to delete this post?</h2>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='parsec-modal-action' id='parsec-modal-delete-post'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.message : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? t : "") + "  \n  <div class='modal-actions'>\n    <a class='confirm'>ok</a>\n    <a class='cancel'>cancel</a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/modals/modal_delete_post"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/modals/modal_loader"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function() {
                return "<div class='parsec-modal-action' id='parsec-modal-loader'>\n  <h2>loading</h2>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/modals/modal_loader"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/modals/modal_new_card_group"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function() {
                return "<div class='parsec-modal-action' id='parsec-modal-new-card-group'>\n  <h2>Title your New Card Group</h2>\n  <input class='parsec-card-group-title-entry' placeholder='enter title here' type='text'>\n  <div class='modal-actions'>\n    <a class='confirm'>ok</a>\n    <a class='cancel'>cancel</a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/modals/modal_new_card_group"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/modals/modal_new_post"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<option value='" + e.escapeExpression((t = null != (t = l.id || (null != a ? a.id : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "id",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "</option>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='parsec-modal-action' id='parsec-modal-new-post'>\n  <h2>Title your New Longform</h2>\n  <input class='parsec-post-title-entry' placeholder='enter title here' type='text'>\n  <select class='parsec-post-clone'>\n    <option value=''>Select a starter template (optional)</option>\n    " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.templateIds : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n  </select>\n  <div class='modal-actions'>\n    <a class='confirm'>ok</a>\n    <a class='cancel'>cancel</a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/modals/modal_new_post"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/modals/modal_post_options"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<option value='" + e.escapeExpression((t = null != (t = l.wp_author_id || (null != a ? a.wp_author_id : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "wp_author_id",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.display_name || (null != a ? a.display_name : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "display_name",
                    hash: {},
                    data: s
                }) : t)) + "</option>"
            },
            3: function(e, a, l, n, s) {
                var t;
                return "<option value='" + e.escapeExpression((t = null != (t = l.id || (null != a ? a.id : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "id",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.name || (null != a ? a.name : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : t)) + "</option>"
            },
            5: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.visible_in_editor : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            6: function(e, a, l, n, s) {
                var t;
                return "\n          <li>\n            <a data-toggle='tab' href='#" + e.escapeExpression((t = null != (t = l.fragment || (null != a ? a.fragment : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "fragment",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "</a>\n          </li>\n          "
            },
            8: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.visible_in_editor : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            9: function(e, a, l, n, s) {
                var t, i;
                return "\n          <div class='tab-pane " + e.escapeExpression((i = null != (i = l["class"] || (null != a ? a["class"] : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "class",
                    hash: {},
                    data: s
                }) : i)) + "' id='" + e.escapeExpression((i = null != (i = l.fragment || (null != a ? a.fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "fragment",
                    hash: {},
                    data: s
                }) : i)) + "'>\n            " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.themes : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(10, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n          </div>\n          "
            },
            10: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.visible_in_editor : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            11: function(e, a, l, n, s) {
                var t;
                return "\n            <div class='theme' data-index='" + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "'>\n              <img class='theme-thumbnail' src='" + e.escapeExpression((t = null != (t = l.thumbnail || (null != a ? a.thumbnail : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "thumbnail",
                    hash: {},
                    data: s
                }) : t)) + "'>\n              <h2 class='theme-name'>" + e.escapeExpression((t = null != (t = l.theme_name || (null != a ? a.theme_name : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "theme_name",
                    hash: {},
                    data: s
                }) : t)) + "</h2>\n              <a class='activate-theme' href='#'>Activate</a>\n              <a class='preview-theme' href='#'>Live Preview</a>\n            </div>\n            "
            },
            13: function(e, a) {
                return "<input class='custom-color' name='custom_color' value='" + e.escapeExpression(e.lambda(a, a)) + "'>\n        <br>\n"
            },
            15: function(e, a, l, n, s) {
                var t;
                return "            <tr>\n              <td>\n                <input class='custom-link-text' name='custom_link_text' value='" + e.escapeExpression((t = null != (t = l.text || (null != a ? a.text : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "text",
                    hash: {},
                    data: s
                }) : t)) + "'>\n              </td>\n              <td>\n                <input class='custom-link-url' name='custom_link_url' value='" + e.escapeExpression((t = null != (t = l.url || (null != a ? a.url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : t)) + "'>\n              </td>\n            </tr>\n"
            },
            17: function() {
                return "<input checked class='hamburger-left' name='hamburger_left' type='checkbox'>"
            },
            19: function() {
                return "<input class='hamburger-left' name='hamburger_left' type='checkbox'>"
            },
            21: function() {
                return "<input checked class='hide-shares-mobile' name='hide_shares_mobile' type='checkbox'>"
            },
            23: function() {
                return "<input class='hide-shares-mobile' name='hide_shares_mobile' type='checkbox'>"
            },
            25: function() {
                return "<input checked class='hide-title' name='hide_title' type='checkbox'>"
            },
            27: function() {
                return "<input class='hide-title' name='hide_title' type='checkbox'>"
            },
            29: function(e, a, l, n, s) {
                var t;
                return "<option value='" + e.escapeExpression((t = null != (t = l.v || (null != a ? a.v : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "v",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.k || (null != a ? a.k : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "k",
                    hash: {},
                    data: s
                }) : t)) + "</option>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div id='post-options'>\n  <ul class='nav nav-tabs' id='post-options-tabs'>\n    <li>\n      <a data-toggle='tab' href='#general'>General</a>\n    </li>\n    <li>\n      <a data-toggle='tab' href='#themes'>Themes</a>\n    </li>\n    <li>\n      <a data-toggle='tab' href='#style'>Style</a>\n    </li>\n    <li>\n      <a data-toggle='tab' href='#navigator'>Navigator</a>\n    </li>\n    <li>\n      <a data-toggle='tab' href='#advertisement'>Advertisement</a>\n    </li>\n    <li>\n      <a data-toggle='tab' href='#review-settings'>Review Settings</a>\n    </li>\n  </ul>\n  <button class='btn btn-primary' id='settings-save-button'>Save</button>\n  <button class='btn' id='settings-cancel-button'>Cancel</button>\n  <form class='tab-content'>\n    <div class='tab-pane active flex-box' id='general'>\n      <div class='box-cell'>\n        <label>Story Name</label>\n        <input class='title' name='container_title' value='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "'>\n        <label>Author</label>\n        <select class='author' name='container[campaign]'>\n          " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.allAuthors : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n        </select>\n      </div>\n      <div class='box-cell'>\n        <label>Advertising Posts Value</label>\n        <input class='posts' disabled name='container_posts' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.ad_values : a) ? t.posts : t, a)) + "'>\n        <label>Campaign</label>\n        <select class='campaign' name='container[campaign]'>\n          <option value=''>-No Campaign-</option>\n          " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.allSeries : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n        </select>\n      </div>\n    </div>\n    <div class='tab-pane parsec-templates' id='themes'>\n      <div class='tabbable tabs-left' id='parsec-theme-tabs'>\n        <ul class='nav nav-tabs'>\n          " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.themes : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n        </ul>\n        <div class='tab-content'>\n          " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.themes : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(8, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n        </div>\n      </div>\n    </div>\n    <div class='tab-pane flex-box' id='style'>\n      <div class='box-cell'>\n        <label>Colors</label>\n        " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.customColors : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(13, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "      </div>\n    </div>\n    <div class='tab-pane flex-box' id='navigator'>\n      <div class='navigation-general'>\n        <div class='box-cell'>\n          <label>Navigation Type</label>\n          <select class='navigator-type' name='container[navigator_type]'>\n            <option value=\"numeric internal chapters\">Numeric Internal Chapters</option>\n            <option value=\"external series\">External Series</option>\n            <option value=\"custom\">Custom text and links</option>\n          </select>\n        </div>\n        <div class='box-cell'>\n          <label>Display Order</label>\n          <select class='navigator-order' name='container[navigator_order]'>\n            <option value=\"newest first\">Newest First</option>\n            <option value=\"oldest first\">Oldest First</option>\n          </select>\n        </div>\n        <div class='box-cell'>\n          <label>Theme</label>\n          <select class='navigator-order' name='container[navigator_theme]'>\n            <option value=\"default\">Default</option>\n            <option value=\"dark\">Dark</option>\n          </select>\n        </div>\n      </div>\n      <div class='custom-links'>\n        <div class='box-cell'>\n          <table>\n            <tr></tr>\n            <th>\n              <label>Text</label>\n            </th>\n            <th>\n              <label>Link</label>\n            </th>\n" + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.customLinks : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(15, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "          </table>\n        </div>\n      </div>\n      <div class='custom-appearance'>\n        <div class='box-cell'>\n          <label>Logo replacement image</label>\n          <input class='logo-alternative' name='logo_alternative' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.navigatorOptions : a) ? t.logoAlternative : t, a)) + "'>\n          <label>Chapters to the left</label>\n          " + (null != (t = l["if"].call(null != a ? a : {}, null != (t = null != a ? a.navigatorOptions : a) ? t.hamburgerLeft : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(17, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n          " + (null != (t = l.unless.call(null != a ? a : {}, null != (t = null != a ? a.navigatorOptions : a) ? t.hamburgerLeft : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(19, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n          <label>Hide shares on mobile</label>\n          " + (null != (t = l["if"].call(null != a ? a : {}, null != (t = null != a ? a.navigatorOptions : a) ? t.hideSharesMobile : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(21, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n          " + (null != (t = l.unless.call(null != a ? a : {}, null != (t = null != a ? a.navigatorOptions : a) ? t.hideSharesMobile : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(23, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n        </div>\n        <div class='box-cell'>\n          <label>Logo replacement image for mobile</label>\n          <input class='logo-alternative-mobile' name='logo_alternative_mobile' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.navigatorOptions : a) ? t.logoAlternativeMobile : t, a)) + "'>\n          <label name='hide_title'>Hide title</label>\n          " + (null != (t = l["if"].call(null != a ? a : {}, null != (t = null != a ? a.navigatorOptions : a) ? t.hideTitle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(25, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n          " + (null != (t = l.unless.call(null != a ? a : {}, null != (t = null != a ? a.navigatorOptions : a) ? t.hideTitle : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(27, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n        </div>\n      </div>\n    </div>\n    <div class='tab-pane' id='advertisement'>\n      <div class='box-cell'>\n        <label>Tracking Pixel</label>\n        <input class='tracking-pixel' name='container_tracking_pixel' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.ad_values : a) ? t.tracking_pixel : t, a)) + "'>\n      </div>\n      <div class='box-cell'>\n        <label>Scripts</label>\n        <textarea class='scripts' name='scripts' value='" + e.escapeExpression((i = null != (i = l.headScripts || (null != a ? a.headScripts : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "headScripts",
                    hash: {},
                    data: s
                }) : i)) + "'></textarea>\n      </div>\n    </div>\n    <div class='tab-pane' id='review-settings'>\n      <div class='box-cell'>\n        <label>Rating System Type</label>\n        <select class='rating-system-type' name='review[rating_system_type]'>\n          " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.ratingSystemTypes : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(29, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n        </select>\n        <label>Max Rating Points</label>\n        <select class='max-rating-points' name='review[max_rating_points]'>\n          <option value=\"5\">5</option>\n          <option value=\"10\">10</option>\n        </select>\n      </div>\n      <div class='box-cell'>\n        <label>Highlight Hex Color (default: #00aeef)</label>\n        <input class='highlight-hex' name='review[highlight_hex]' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.reviewOptions : a) ? t.highlightHex : t, a)) + "'>\n      </div>\n      <div class='box-cell'>\n        <label>Image Based: Full Point Image URL</label>\n        <input class='full-point-image-url' name='review[full_point_image_url]' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.reviewOptions : a) ? t.fullPointImageUrl : t, a)) + "'>\n        <label>Image Based: Half Point Image URL</label>\n        <input class='half-point-image-url' name='review[half_point_image_url]' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.reviewOptions : a) ? t.halfPointImageUrl : t, a)) + "'>\n        <label>Image Based: Empty Point Image URL</label>\n        <input class='empty-point-image-url' name='review[empty_point_image_url]' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.reviewOptions : a) ? t.emptyPointImageUrl : t, a)) + "'>\n      </div>\n    </div>\n  </form>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/modals/modal_post_options"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/editor/modals/modal_publish_card_group"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "  <h2>Are you sure you want to publish this card group: " + e.escapeExpression((t = null != (t = l.message || (null != a ? a.message : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "message",
                    hash: {},
                    data: s
                }) : t)) + "?</h2>\n"
            },
            3: function() {
                return "  \n  <h2>Are you sure you want to publish this card group?</h2>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='parsec-modal-action' id='parsec-modal-publish-card-group'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.message : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? t : "") + "  \n  <div class='modal-actions'>\n    <a class='confirm'>ok</a>\n    <a class='cancel'>cancel</a>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/editor/modals/modal_publish_card_group"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/navigator/v0"] = Handlebars.template({
            1: function() {
                return "  <div class='hamburger'></div>\n"
            },
            3: function(e, a, l, n, s) {
                var t;
                return "<span class='large no-right'>\n        <img src='" + e.escapeExpression((t = null != (t = l.logoAlternative || (null != a ? a.logoAlternative : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "logoAlternative",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      </span>"
            },
            5: function() {
                return '<span class=\'large gray\'><img alt="Header share logo.v2 1ae91cfc1bc21a46cc127bcd2ae645cad4657464505668abca4bea13889ae851" src="https://a.amz.mshcdn.com/assets/header_share_logo.v2-1ae91cfc1bc21a46cc127bcd2ae645cad4657464505668abca4bea13889ae851.png" /></span>\n      <span class=\'large white\'><img alt="Header logo.v2.us 6653972cc831bd09732d26dc9da67bd6be0c4d2b28757f116791336ccf2146ec" src="https://a.amz.mshcdn.com/assets/header_logo.v2.us-6653972cc831bd09732d26dc9da67bd6be0c4d2b28757f116791336ccf2146ec.png" /></span>'
            },
            7: function(e, a, l, n, s) {
                var t;
                return "<span class='small alternative'>\n        <img src='" + e.escapeExpression((t = null != (t = l.logoAlternativeMobile || (null != a ? a.logoAlternativeMobile : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "logoAlternativeMobile",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      </span>"
            },
            9: function() {
                return '<span class=\'small white-on-black\'><img alt="Mobile logo v2 white on black a5ec554f1d34076e67549724cc55d9a700c120290b71cf414946448391057c25" src="https://a.amz.mshcdn.com/assets/mobile_logo_v2_white_on_black-a5ec554f1d34076e67549724cc55d9a700c120290b71cf414946448391057c25.png" /></span>\n      <span class=\'small black-on-white\'><img alt="Mobile logo v2 black on white 8f76411223031892c6071aca4138dbeb702745ba5d76a035d41c4fc9eb9588f2" src="https://a.amz.mshcdn.com/assets/mobile_logo_v2_black_on_white-8f76411223031892c6071aca4138dbeb702745ba5d76a035d41c4fc9eb9588f2.png" /></span>'
            },
            11: function(e, a, l, n, s) {
                var t;
                return "      <div class='toc-title'>" + e.escapeExpression((t = null != (t = l.tocTitle || (null != a ? a.tocTitle : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "tocTitle",
                    hash: {},
                    data: s
                }) : t)) + "</div>\n"
            },
            13: function(e, a, l, n, s) {
                var t;
                return null != (t = l.each.call(null != a ? a : {}, null != (t = null != a ? a.series : a) ? t.posts : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(14, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            14: function(e, a, l, n, s) {
                var t;
                return "\n      <div class='chapter custom' data-id='" + e.escapeExpression((t = null != (t = l._id || (null != a ? a._id : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "_id",
                    hash: {},
                    data: s
                }) : t)) + "' data-url='" + e.escapeExpression((t = null != (t = l.link || (null != a ? a.link : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : t)) + "'>\n        <div class='name'>" + e.escapeExpression((t = null != (t = l.short_title || (null != a ? a.short_title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "short_title",
                    hash: {},
                    data: s
                }) : t)) + "</div>\n      </div>\n"
            },
            16: function(e, a, l, n, s) {
                var t;
                return null != (t = l.each.call(null != a ? a : {}, null != a ? a.chapters : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(17, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            17: function(e, a) {
                return "      <div class='chapter'>\n        <div class='name'>" + e.escapeExpression(e.lambda(a, a)) + "</div>\n      </div>\n      "
            },
            19: function(e, a, l, n, s) {
                var t;
                return "  <div class='shares'>\n    " + e.escapeExpression((t = null != (t = l.end || (null != a ? a.end : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "end",
                    hash: {},
                    data: s
                }) : t)) + "\n\n    <div class='primary-shares'>\n      <a class='social-share facebook'>\n        <div class='caption'>Share</div>\n      </a>\n      <a class='social-share twitter'>\n        <div class='caption'>Tweet</div>\n      </a>\n    </div>\n    <div class='secondary-shares'>\n      <a class='social-share google_plus'></a>\n      <a class='social-share linked_in'></a>\n      <a class='social-share flipboard'></a>\n      <a class='social-share pinterest'></a>\n    </div>\n    <div class='share-toggle'></div>\n  </div>\n"
            },
            21: function(e, a, l, n, s) {
                var t, i;
                return "  <div class='shares hide-mobile'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.shareCount : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(22, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "    " + e.escapeExpression((i = null != (i = l.end || (null != a ? a.end : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "end",
                    hash: {},
                    data: s
                }) : i)) + "\n\n    <div class='primary-shares'>\n      <a class='social-share facebook'>\n        <div class='caption'>Share</div>\n      </a>\n      <a class='social-share twitter'>\n        <div class='caption'>Tweet</div>\n      </a>\n    </div>\n    <div class='secondary-shares'>\n      <a class='social-share google_plus'></a>\n      <a class='social-share linked_in'></a>\n      <a class='social-share flipboard'></a>\n      <a class='social-share pinterest'></a>\n    </div>\n    <div class='share-toggle'></div>\n  </div>\n"
            },
            22: function(e, a, l, n, s) {
                var t;
                return "    <div class='share-count'>" + e.escapeExpression((t = null != (t = l.shareCount || (null != a ? a.shareCount : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "shareCount",
                    hash: {},
                    data: s
                }) : t)) + "</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='longform-nav-inner v0'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.hamburgerLeft : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n  <div class='logo'>\n    <a class='brand' href='" + e.escapeExpression((i = null != (i = l.logoLink || (null != a ? a.logoLink : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "logoLink",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.logoAlternative : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n      " + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.logoAlternative : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n      " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.logoAlternativeMobile : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n      " + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.logoAlternativeMobile : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n    </a>\n  </div>\n  <div class='chapters' data-name='" + e.escapeExpression((i = null != (i = l.chapterType || (null != a ? a.chapterType : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapterType",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <div class='title'>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n    <div class='toc'>\n" + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.hideTitle : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(11, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "      " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.tocExtChaptersPresent : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, s, 0),
                    inverse: e.program(16, s, 0),
                    data: s
                })) ? t : "") + "\n    </div>\n  </div>\n  <div class='sponsorship-logo'></div>\n" + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.hideSharesMobile : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(19, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.hideSharesMobile : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(21, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/navigator/v0"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/navigator/v1"] = Handlebars.template({
            1: function() {
                return "  <div class='hamburger'></div>\n"
            },
            3: function(e, a, l, n, s) {
                var t;
                return "<span class='large no-right'>\n        <img src='" + e.escapeExpression((t = null != (t = l.logoAlternative || (null != a ? a.logoAlternative : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "logoAlternative",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      </span>"
            },
            5: function() {
                return '<span class=\'large\'><img alt="Header share logo.v2 1ae91cfc1bc21a46cc127bcd2ae645cad4657464505668abca4bea13889ae851" src="https://a.amz.mshcdn.com/assets/header_share_logo.v2-1ae91cfc1bc21a46cc127bcd2ae645cad4657464505668abca4bea13889ae851.png" /></span>'
            },
            7: function(e, a, l, n, s) {
                var t;
                return "<span class='small alternative'>\n        <img src='" + e.escapeExpression((t = null != (t = l.logoAlternativeMobile || (null != a ? a.logoAlternativeMobile : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "logoAlternativeMobile",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      </span>"
            },
            9: function() {
                return '<span class=\'small white-on-black\'><img alt="Mobile logo v2 wob" src="https://a.amz.mshcdn.com/images/mobile_logo_v2_wob.png" /></span>\n      <span class=\'small black-on-white\'><img alt="Mobile logo v2 bow" src="https://a.amz.mshcdn.com/images/mobile_logo_v2_bow.png" /></span>'
            },
            11: function(e, a, l, n, s) {
                var t;
                return "      <div class='toc-title'>" + e.escapeExpression((t = null != (t = l.tocTitle || (null != a ? a.tocTitle : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "tocTitle",
                    hash: {},
                    data: s
                }) : t)) + "</div>\n"
            },
            13: function(e, a, l, n, s) {
                var t, i, r, o = (null != (t = l.each.call(null != a ? a : {}, null != a ? a.customLinks : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(14, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n      ";
                return i = null != (i = l["else"] || (null != a ? a["else"] : a)) ? i : l.helperMissing, r = {
                    name: "else",
                    hash: {},
                    fn: e.program(18, s, 0),
                    inverse: e.noop,
                    data: s
                }, t = "function" == typeof i ? i.call(null != a ? a : {}, r) : i, l["else"] || (t = l.blockHelperMissing.call(a, t, r)), null != t && (o += t), o
            },
            14: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.text : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            15: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.url : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(16, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            16: function(e, a, l, n, s) {
                var t;
                return "\n      <div class='chapter custom' data-url='" + e.escapeExpression((t = null != (t = l.url || (null != a ? a.url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : t)) + "'>\n        <div class='name'>" + e.escapeExpression((t = null != (t = l.text || (null != a ? a.text : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "text",
                    hash: {},
                    data: s
                }) : t)) + "</div>\n      </div>\n      "
            },
            18: function(e, a, l, n, s) {
                var t;
                return null != (t = l.each.call(null != a ? a : {}, null != a ? a.posts : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(19, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            19: function(e, a, l, n, s) {
                var t;
                return "\n      <div class='chapter' data-id='" + e.escapeExpression((t = null != (t = l._id || (null != a ? a._id : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "_id",
                    hash: {},
                    data: s
                }) : t)) + "' data-url='" + e.escapeExpression((t = null != (t = l.link || (null != a ? a.link : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : t)) + "'>\n        <div class='name'>" + e.escapeExpression((t = null != (t = l.short_title || (null != a ? a.short_title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "short_title",
                    hash: {},
                    data: s
                }) : t)) + "</div>\n      </div>\n      "
            },
            21: function(e, a, l, n, s) {
                var t;
                return "  <div class='shares'>\n    " + e.escapeExpression((t = null != (t = l.end || (null != a ? a.end : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "end",
                    hash: {},
                    data: s
                }) : t)) + "\n\n    <div class='primary-shares'>\n      <a class='social-share facebook'>\n        <div class='caption'>Share</div>\n      </a>\n      <a class='social-share twitter'>\n        <div class='caption'>Tweet</div>\n      </a>\n    </div>\n    <div class='secondary-shares'>\n      <a class='social-share google_plus'></a>\n      <a class='social-share linked_in'></a>\n      <a class='social-share stumble_upon'></a>\n      <a class='social-share pinterest'></a>\n    </div>\n    <div class='share-toggle'></div>\n  </div>\n"
            },
            23: function(e, a, l, n, s) {
                var t, i;
                return "  <div class='shares hide-mobile'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.shareCount : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(24, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "    " + e.escapeExpression((i = null != (i = l.end || (null != a ? a.end : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "end",
                    hash: {},
                    data: s
                }) : i)) + "\n\n    <div class='primary-shares'>\n      <a class='social-share facebook'>\n        <div class='caption'>Share</div>\n      </a>\n      <a class='social-share twitter'>\n        <div class='caption'>Tweet</div>\n      </a>\n    </div>\n    <div class='secondary-shares'>\n      <a class='social-share google_plus'></a>\n      <a class='social-share linked_in'></a>\n      <a class='social-share stumble_upon'></a>\n      <a class='social-share pinterest'></a>\n    </div>\n    <div class='share-toggle'></div>\n  </div>\n"
            },
            24: function(e, a, l, n, s) {
                var t;
                return "    <div class='share-count'>" + e.escapeExpression((t = null != (t = l.shareCount || (null != a ? a.shareCount : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "shareCount",
                    hash: {},
                    data: s
                }) : t)) + "</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='longform-nav-inner v1'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.hamburgerLeft : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n  <div class='logo'>\n    <a class='brand' href='" + e.escapeExpression((i = null != (i = l.logoLink || (null != a ? a.logoLink : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "logoLink",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.logoAlternative : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n      " + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.logoAlternative : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n      " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.logoAlternativeMobile : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n      " + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.logoAlternativeMobile : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n    </a>\n  </div>\n  <div class='chapters' data-name='" + e.escapeExpression((i = null != (i = l.chapterType || (null != a ? a.chapterType : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "chapterType",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <div class='title'>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n    <div class='toc'>\n" + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.hideTitle : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(11, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "      " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.customLinks : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n    </div>\n  </div>\n  <div class='sponsorship-logo'></div>\n" + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.hideSharesMobile : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(21, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.hideSharesMobile : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(23, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/navigator/v1"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["parsec/template"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='template'>\n  <img class='template-thumbnail' src='" + e.escapeExpression((t = null != (t = l.thumbnail || (null != a ? a.thumbnail : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "thumbnail",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  <h2 class='template-name'>\n    " + e.escapeExpression((t = null != (t = l.name || (null != a ? a.name : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : t)) + "\n  </h2>\n  <p class='template-description'>\n    " + e.escapeExpression((t = null != (t = l.description || (null != a ? a.description : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "description",
                    hash: {},
                    data: s
                }) : t)) + "\n  </p>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["parsec/template"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/CTA_popup"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a) {
                var l;
                return "<div id='CTAPopupContainer' class='cta-popup-container' style='display: none; position: fixed; left: " + e.escapeExpression(e.lambda(null != (l = null != a ? a.positionInfo : a) ? l.left : l, a)) + "px; top: " + e.escapeExpression(e.lambda(null != (l = null != a ? a.positionInfo : a) ? l.top : l, a)) + "px; width: " + e.escapeExpression(e.lambda(null != (l = null != a ? a.positionInfo : a) ? l.width : l, a)) + "px;'>\n  <span class='cta-product-title'>" + e.escapeExpression(e.lambda(null != (l = null != a ? a.options : a) ? l.productTitle : l, a)) + '</span>\n  <a class="cta-button-container" href=\'' + e.escapeExpression(e.lambda(null != (l = null != a ? a.options : a) ? l.href : l, a)) + '\' target="_blank">\n    <span>See Details</span>\n  </a>\n</div>'
            },
            useData: !0
        }), this.Handlebars.templates["posts/CTA_popup"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/CTA_popup_mobile"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a) {
                var l;
                return "<div id='CTAPopupContainer' class='cta-popup-container-mobile' style='display: none; position: fixed; left: " + e.escapeExpression(e.lambda(null != (l = null != a ? a.positionInfo : a) ? l.left : l, a)) + "px; right: " + e.escapeExpression(e.lambda(null != (l = null != a ? a.positionInfo : a) ? l.right : l, a)) + "px; bottom: " + e.escapeExpression(e.lambda(null != (l = null != a ? a.positionInfo : a) ? l.bottom : l, a)) + "px;'>\n  <a class=\"cta-button-container\" href='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.options : a) ? l.href : l, a)) + "' target=\"_blank\">\n    <span>See Details</span>\n  </a>\n  <div class='cta-product-title'>" + e.escapeExpression(e.lambda(null != (l = null != a ? a.options : a) ? l.productTitle : l, a)) + "</div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["posts/CTA_popup_mobile"]
    }.call(this),
    function() {
        Handlebars.registerPartial("posts/_single_post", Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "      <div class='spotlight-overlay-container'>\n        <a href='" + e.escapeExpression((t = null != (t = l.link || (null != a ? a.link : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : t)) + "'>\n          <div class='spotlight-overlay'></div>\n        </a>\n      </div>\n"
            },
            3: function(e, a, l, n, s) {
                var t;
                return "        <div class='choice-overlay-container'>\n          <a href='" + e.escapeExpression((t = null != (t = l.link || (null != a ? a.link : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : t)) + "'>\n            <div class='choice-overlay'></div>\n          </a>\n        </div>\n"
            },
            5: function(e, a, l, n, s) {
                var t;
                return "        <div class='debut-overlay-container'>\n          <a href='" + e.escapeExpression((t = null != (t = l.link || (null != a ? a.link : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : t)) + "'>\n            <div class='debut-overlay'></div>\n          </a>\n        </div>\n"
            },
            7: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.show_sponsorship : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, s, 0),
                    inverse: e.program(14, s, 0),
                    data: s
                })) ? t : ""
            },
            8: function(e, a, l, n, s) {
                var t;
                return (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.sponsored_by : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.program(14, s, 0),
                    data: s
                })) ? t : "") + "\n"
            },
            9: function(e, a, l, n, s) {
                var t;
                return (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.sponsored_by_url : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, s, 0),
                    inverse: e.program(12, s, 0),
                    data: s
                })) ? t : "") + "\n"
            },
            10: function(e, a, l, n, s) {
                var t;
                return "<a class='sponsor-link' href='" + e.escapeExpression((t = null != (t = l.sponsored_by_url || (null != a ? a.sponsored_by_url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sponsored_by_url",
                    hash: {},
                    data: s
                }) : t)) + e.escapeExpression((t = null != (t = l.sponsor_utm || (null != a ? a.sponsor_utm : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sponsor_utm",
                    hash: {},
                    data: s
                }) : t)) + "'>\n          <span class='article-category brandspeak'>" + e.escapeExpression((t = null != (t = l.sponsored_by || (null != a ? a.sponsored_by : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sponsored_by",
                    hash: {},
                    data: s
                }) : t)) + "</span>\n        </a>\n"
            },
            12: function(e, a, l, n, s) {
                var t;
                return "        <a class='sponsor-link' href='" + e.escapeExpression((t = null != (t = l.link || (null != a ? a.link : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : t)) + "'>\n          <span class='article-category brandspeak'>" + e.escapeExpression((t = null != (t = l.sponsored_by || (null != a ? a.sponsored_by : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sponsored_by",
                    hash: {},
                    data: s
                }) : t)) + "</span>\n        </a>"
            },
            14: function(e, a, l, n, s) {
                var t;
                return "        <a class='article-category' href='" + e.escapeExpression((t = null != (t = l.channel_link || (null != a ? a.channel_link : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "channel_link",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.channel_label || (null != a ? a.channel_label : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "channel_label",
                    hash: {},
                    data: s
                }) : t)) + "</a>"
            },
            16: function(e, a, l, n, s) {
                var t;
                return (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.show_sponsorship_in_new_col : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(17, s, 0),
                    inverse: e.program(22, s, 0),
                    data: s
                })) ? t : "") + "\n"
            },
            17: function(e, a, l, n, s) {
                var t;
                return (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.sponsored_by_url : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(18, s, 0),
                    inverse: e.program(20, s, 0),
                    data: s
                })) ? t : "") + "\n"
            },
            18: function(e, a, l, n, s) {
                var t;
                return "<a class='sponsor-link' href='" + e.escapeExpression((t = null != (t = l.sponsored_by_url || (null != a ? a.sponsored_by_url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sponsored_by_url",
                    hash: {},
                    data: s
                }) : t)) + e.escapeExpression((t = null != (t = l.sponsor_utm || (null != a ? a.sponsor_utm : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sponsor_utm",
                    hash: {},
                    data: s
                }) : t)) + "'>\n            <span class='article-sponsor'>" + e.escapeExpression((t = null != (t = l.sponsored_by || (null != a ? a.sponsored_by : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sponsored_by",
                    hash: {},
                    data: s
                }) : t)) + "</span>\n          </a>\n"
            },
            20: function(e, a, l, n, s) {
                var t;
                return "          <a class='sponsor-link' href='" + e.escapeExpression((t = null != (t = l.link || (null != a ? a.link : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : t)) + "'>\n            <span class='article-sponsor'>" + e.escapeExpression((t = null != (t = l.sponsored_by || (null != a ? a.sponsored_by : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sponsored_by",
                    hash: {},
                    data: s
                }) : t)) + "</span>\n          </a>"
            },
            22: function(e, a, l, n, s) {
                var t;
                return "          <a class='num' href='" + e.escapeExpression((t = null != (t = l.link || (null != a ? a.link : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : t)) + "'></a>\n          <time class='article-date' datetime='" + e.escapeExpression((t = null != (t = l.post_date_rfc || (null != a ? a.post_date_rfc : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "post_date_rfc",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.post_date_rfc || (null != a ? a.post_date_rfc : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "post_date_rfc",
                    hash: {},
                    data: s
                }) : t)) + "</time>"
            },
            24: function(e, a, l, n, s) {
                var t;
                return "          <a class='num' href='" + e.escapeExpression((t = null != (t = l.link || (null != a ? a.link : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : t)) + "'>\n          </a>\n          <time class='article-date' datetime='" + e.escapeExpression((t = null != (t = l.post_date_rfc || (null != a ? a.post_date_rfc : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "post_date_rfc",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.post_date_rfc || (null != a ? a.post_date_rfc : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "post_date_rfc",
                    hash: {},
                    data: s
                }) : t)) + "</time>"
            },
            26: function() {
                return "        <canvas class='velocity' data-height='25' data-width='60'></canvas>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='article-container sharable'>\n  <article class='post short' id='post-" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "id",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <div class='article-img-container'>\n      <a href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + e.escapeExpression((i = null != (i = l.utm_query || (null != a ? a.utm_query : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "utm_query",
                    hash: {},
                    data: s
                }) : i)) + "'>\n" + (null != (t = e.invokePartial(n["shared/_responsive_images"], a, {
                    name: "shared/_responsive_images",
                    data: s,
                    indent: "        ",
                    helpers: l,
                    partials: n,
                    decorators: e.decorators
                })) ? t : "") + "      </a>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.spotlight : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "    </div>\n    <div class='article-content-wrapper'>\n      <div class='article-content'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.choice : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.mash_debut : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "        " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.channel : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n\n        <h2 class='article-title'>\n          <a href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + e.escapeExpression((i = null != (i = l.utm_query || (null != a ? a.utm_query : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "utm_query",
                    hash: {},
                    data: s
                }) : i)) + "'>" + (null != (i = null != (i = l.display_title || (null != a ? a.display_title : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "display_title",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</a>\n        </h2>\n        <div class='article-byline'>" + e.escapeExpression((i = null != (i = l.author || (null != a ? a.author : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "author",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n        <p class='article-excerpt'>" + e.escapeExpression((i = null != (i = l.excerpt || (null != a ? a.excerpt : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "excerpt",
                    hash: {},
                    data: s
                }) : i)) + "</p>\n      </div>\n      <footer>\n        <div class='article-shares-stub'>\n          " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.sponsorship_footer : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(16, s, 0),
                    inverse: e.program(24, s, 0),
                    data: s
                })) ? t : "") + "\n        </div>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.velocity : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(26, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n        <div class='article-shares-links'>\n          <a class='social-stub social-share facebook' data-href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "' data-shares='" + e.escapeExpression((l.share_count || a && a.share_count || l.helperMissing).call(null != a ? a : {}, null != (t = null != a ? a.shares : a) ? t.facebook : t, {
                    name: "share_count",
                    hash: {},
                    data: s
                })) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' href='javascript:void(0);'>\n            Share\n          </a>\n          <a class='social-stub social-share twitter' data-href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "' data-shares='" + e.escapeExpression((l.share_count || a && a.share_count || l.helperMissing).call(null != a ? a : {}, null != (t = null != a ? a.shares : a) ? t.twitter : t, {
                    name: "share_count",
                    hash: {},
                    data: s
                })) + "' data-shorturl='" + e.escapeExpression((i = null != (i = l.short_url || (null != a ? a.short_url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "short_url",
                    hash: {},
                    data: s
                }) : i)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-tweet-link='" + e.escapeExpression((i = null != (i = l.tweet_link || (null != a ? a.tweet_link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "tweet_link",
                    hash: {},
                    data: s
                }) : i)) + "' data-tweet-text='" + e.escapeExpression((i = null != (i = l.tweet_text || (null != a ? a.tweet_text : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "tweet_text",
                    hash: {},
                    data: s
                }) : i)) + "' data-tweet-via='" + e.escapeExpression((i = null != (i = l.tweet_via || (null != a ? a.tweet_via : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "tweet_via",
                    hash: {},
                    data: s
                }) : i)) + "' href='javascript:void(0);'>\n            Tweet\n          </a>\n          <a class='social-stub social-share google_plus' data-href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "' data-shares='" + e.escapeExpression((l.share_count || a && a.share_count || l.helperMissing).call(null != a ? a : {}, null != (t = null != a ? a.shares : a) ? t.google_plus : t, {
                    name: "share_count",
                    hash: {},
                    data: s
                })) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' href='javascript:void(0);'>\n            Share\n          </a>\n          <a class='social-stub social-share linked_in' data-href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "' data-shares='" + e.escapeExpression((l.share_count || a && a.share_count || l.helperMissing).call(null != a ? a : {}, null != (t = null != a ? a.shares : a) ? t.linked_in : t, {
                    name: "share_count",
                    hash: {},
                    data: s
                })) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' href='javascript:void(0);'>\n            Share\n          </a>\n        </div>\n      </footer>\n    </div>\n  </article>\n</div>"
            },
            usePartial: !0,
            useData: !0
        }))
    }.call(this),
    function() {
        Handlebars.registerPartial("posts/_subnav_post", Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<li class='subnav-post'>\n  <a href='" + e.escapeExpression((i = null != (i = l.url || (null != a ? a.url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : i)) + "?utm_campaign=mash-prod-nav-sub-st&utm_source=internal&utm_medium=onsite'>\n    <img src='" + e.escapeExpression((i = null != (i = l.image || (null != a ? a.image : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "image",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  </a>\n  <a href='" + e.escapeExpression((i = null != (i = l.url || (null != a ? a.url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : i)) + "?utm_campaign=mash-prod-nav-sub-st&utm_source=internal&utm_medium=onsite'>" + (null != (i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</a>\n</li>"
            },
            useData: !0
        }))
    }.call(this),
    function() {
        Handlebars.registerPartial("posts/_subnav_posts", Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return null != (t = e.invokePartial(n["posts/_subnav_post"], a, {
                    name: "posts/_subnav_post",
                    data: s,
                    helpers: l,
                    partials: n,
                    decorators: e.decorators
                })) ? t : ""
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return null != (t = l.each.call(null != a ? a : {}, null != a ? a.posts : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            usePartial: !0,
            useData: !0
        }))
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/mash_video"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='jw-wrapper'>\n  <div class='mash-video-player' id='jw-" + e.escapeExpression((t = null != (t = l.video || (null != a ? a.video : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "video",
                    hash: {},
                    data: s
                }) : t)) + "'></div>\n</div>\n<noscript>\n  <div>You must enable Javascript to watch this video!</div>\n</noscript>"
            },
            useData: !0
        }), this.Handlebars.templates["posts/mash_video"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/microcontent"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='personalizedShare'>\n  <a href='" + e.escapeExpression((t = null != (t = l.url || (null != a ? a.url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : t)) + "' target='" + e.escapeExpression((t = null != (t = l.target || (null != a ? a.target : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "target",
                    hash: {},
                    data: s
                }) : t)) + "'>\n    <img src='" + e.escapeExpression((t = null != (t = l.picture || (null != a ? a.picture : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "picture",
                    hash: {},
                    data: s
                }) : t)) + "'>\n  </a>\n  <a href='" + e.escapeExpression((t = null != (t = l.url || (null != a ? a.url : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : t)) + "' target='" + e.escapeExpression((t = null != (t = l.target || (null != a ? a.target : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "target",
                    hash: {},
                    data: s
                }) : t)) + "'>\n    " + e.escapeExpression((t = null != (t = l.display_name || (null != a ? a.display_name : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "display_name",
                    hash: {},
                    data: s
                }) : t)) + "\n  </a>\n  shared this with you\n  <span class='via'>" + e.escapeExpression((t = null != (t = l.network || (null != a ? a.network : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "network",
                    hash: {},
                    data: s
                }) : t)) + "</span>\n  <a class='discussThis' href='#'>Discuss with " + e.escapeExpression((t = null != (t = l.display_name || (null != a ? a.display_name : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "display_name",
                    hash: {},
                    data: s
                }) : t)) + "</a>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["posts/microcontent"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/microcontent_image"] = Handlebars.template({
            1: function(e, a) {
                return "<a class='social-share microcontent-share-badge network-badge network-badge-" + e.escapeExpression(e.lambda(a, a)) + " " + e.escapeExpression(e.lambda(a, a)) + "' href='#'></a>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<a name='" + e.escapeExpression((i = null != (i = l.fragment || (null != a ? a.fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "fragment",
                    hash: {},
                    data: s
                }) : i)) + "'></a>\n<div class='microcontent-wrapper'>\n  <div class='microcontent-shares' data-description='" + e.escapeExpression((i = null != (i = l.description || (null != a ? a.description : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "description",
                    hash: {},
                    data: s
                }) : i)) + "' data-fragment='" + e.escapeExpression((i = null != (i = l.fragment || (null != a ? a.fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "fragment",
                    hash: {},
                    data: s
                }) : i)) + "' data-image='" + e.escapeExpression((i = null != (i = l.image || (null != a ? a.image : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "image",
                    hash: {},
                    data: s
                }) : i)) + "' data-url='" + e.escapeExpression((i = null != (i = l.url || (null != a ? a.url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.networks : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["posts/microcontent_image"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/microcontent_quote"] = Handlebars.template({
            1: function(e, a) {
                return "<a class='social-share microcontent-share-badge network-badge network-badge-" + e.escapeExpression(e.lambda(a, a)) + " " + e.escapeExpression(e.lambda(a, a)) + "' href='#'></a>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<a name='" + e.escapeExpression((i = null != (i = l.fragment || (null != a ? a.fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "fragment",
                    hash: {},
                    data: s
                }) : i)) + "'></a>\n<blockquote class='microcontent-wrapper pullquote'>\n  <div class='microcontent-shares' data-description='" + e.escapeExpression((i = null != (i = l.description || (null != a ? a.description : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "description",
                    hash: {},
                    data: s
                }) : i)) + "' data-fragment='" + e.escapeExpression((i = null != (i = l.fragment || (null != a ? a.fragment : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "fragment",
                    hash: {},
                    data: s
                }) : i)) + "' data-url='" + e.escapeExpression((i = null != (i = l.url || (null != a ? a.url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.networks : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n  </div>\n  <span class='microcontent'>\n    " + e.escapeExpression((i = null != (i = l.description || (null != a ? a.description : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "description",
                    hash: {},
                    data: s
                }) : i)) + "\n  </span>\n</blockquote>"
            },
            useData: !0
        }), this.Handlebars.templates["posts/microcontent_quote"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/newsletter_signup"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function() {
                return "<div id='newsletter-signup-wrapper'>\n  <div class='signup-box'>\n    <h1>Get our hottest stories delivered to your inbox.</h1>\n    <h3>Sign up for Mashable Newsletters to get personalized updates on top stories and viral hits.</h3>\n    <form accept-charset='UTF-8' action='https://link.mashable.com/s/Top+Stories' method='post'>\n      <div style='margin:0;padding:0;display:inline'>\n        <input name='utf8' type='hidden' value='\u2713'>\n        <input name='sailthru_event' type='hidden' value='daily_newsletter_signup'>\n        <input name='sailthru_source' type='hidden' value='daily_bottom_of_article'>\n        <input name='new_lists[]' type='hidden' value='Top Stories'>\n        <input name='new_lists[]' type='hidden' value='Alert List'>\n        <input name='new_lists[]' type='hidden' value='Viral News Alerts'>\n      </div>\n      <label class='email'>\n        <input class='email' id='email' name='email' placeholder='email' required='required' type='email'>\n      </label>\n      <label class='submit'>\n        <input class='submit' name='commit' type='submit' value='Sign Up'>\n      </label>\n    </form>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["posts/newsletter_signup"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/newsletter_signup_editorial"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<div id='newsletter-signup-image-top'>\n  <img src='" + e.escapeExpression((t = null != (t = l.img || (null != a ? a.img : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "img",
                    hash: {},
                    data: s
                }) : t)) + "' width='100%'>\n</div>\n"
            },
            3: function(e, a, l, n, s) {
                var t;
                return "  <div id='newsletter-signup-image-left'>\n    <img src='" + e.escapeExpression((t = null != (t = l.img || (null != a ? a.img : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "img",
                    hash: {},
                    data: s
                }) : t)) + "' width='100%'>\n  </div>\n"
            },
            5: function(e, a, l, n, s) {
                var t;
                return "    <h1>" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "</h1>\n"
            },
            7: function(e, a, l, n, s) {
                var t;
                return "    <h2>" + e.escapeExpression((t = null != (t = l.desc || (null != a ? a.desc : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "desc",
                    hash: {},
                    data: s
                }) : t)) + "</h2>\n"
            },
            9: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.btnHex : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, s, 0),
                    inverse: e.program(12, s, 0),
                    data: s
                })) ? t : ""
            },
            10: function(e, a, l, n, s) {
                var t;
                return "\n    <h3 style='color:" + e.escapeExpression((t = null != (t = l.btnHex || (null != a ? a.btnHex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "btnHex",
                    hash: {},
                    data: s
                }) : t)) + ";'>" + e.escapeExpression((t = null != (t = l.signupText || (null != a ? a.signupText : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "signupText",
                    hash: {},
                    data: s
                }) : t)) + "</h3>\n"
            },
            12: function(e, a, l, n, s) {
                var t;
                return "    \n    <h3>" + e.escapeExpression((t = null != (t = l.signupText || (null != a ? a.signupText : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "signupText",
                    hash: {},
                    data: s
                }) : t)) + "</h3>\n"
            },
            14: function() {
                return "    \n    <h3 style='display:none'>Default Signup Text Here</h3>\n"
            },
            16: function(e, a, l, n, s) {
                var t;
                return "<input name='new_lists[]' type='hidden' value='" + e.escapeExpression((t = null != (t = l.sailthruList || (null != a ? a.sailthruList : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sailthruList",
                    hash: {},
                    data: s
                }) : t)) + "'>"
            },
            18: function(e, a, l, n, s) {
                var t;
                return "<input name='sailthru_event' type='hidden' value='" + e.escapeExpression((t = null != (t = l.sailthruEvent || (null != a ? a.sailthruEvent : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sailthruEvent",
                    hash: {},
                    data: s
                }) : t)) + "'>"
            },
            20: function(e, a, l, n, s) {
                var t;
                return "<input name='sailthru_var' type='hidden' value='" + e.escapeExpression((t = null != (t = l.sailthruVar || (null != a ? a.sailthruVar : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sailthruVar",
                    hash: {},
                    data: s
                }) : t)) + "'>"
            },
            22: function(e, a, l, n, s) {
                var t;
                return "<input name='sailthru_source' type='hidden' value='" + e.escapeExpression((t = null != (t = l.sailthruSource || (null != a ? a.sailthruSource : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sailthruSource",
                    hash: {},
                    data: s
                }) : t)) + "'>"
            },
            24: function(e, a, l, n, s) {
                var t;
                return "<input class='submit' name='commit' style='background:" + e.escapeExpression((t = null != (t = l.btnHex || (null != a ? a.btnHex : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "btnHex",
                    hash: {},
                    data: s
                }) : t)) + ";' type='submit' value='Sign Up'>\n"
            },
            26: function() {
                return "        <input class='submit' name='commit' type='submit' value='Sign Up'>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.imageTop : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "<div class='editorial " + e.escapeExpression((i = null != (i = l.signupDesign || (null != a ? a.signupDesign : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "signupDesign",
                    hash: {},
                    data: s
                }) : i)) + "' id='newsletter-signup-wrapper'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.imageLeft : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "  \n  <div class='signup-box'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.title : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.desc : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "    " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.signupText : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.program(14, s, 0),
                    data: s
                })) ? t : "") + "    \n    <form accept-charset='UTF-8' action='https://link.mashable.com/s/Top+Stories' method='post'>\n      <div style='margin:0;padding:0;display:inline'>\n        <input name='utf8' type='hidden' value='\u2713'>\n        " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.sailthruList : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(16, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n        " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.sailthruEvent : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(18, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n        " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.sailthruVar : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(20, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n        " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.sailthruSource : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(22, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n      </div>\n      <label class='email'>\n        <input class='email' id='email' name='email' placeholder='email' required='required' type='email'>\n      </label>\n      <label class='submit'>\n        " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.btnHex : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(24, s, 0),
                    inverse: e.program(26, s, 0),
                    data: s
                })) ? t : "") + "\n      </label>\n    </form>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["posts/newsletter_signup_editorial"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/newsletter_signup_success"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div id='newsletter-success-wrapper'>\n  <div class='signup-box'>\n    <h2>Congratulations! You're now signed up for Mashable Newsletters.</h2>\n    <div class='description'>\n      <p>\n        <span class='email-type'>Top Stories:</span>\n        A round-up of Mashable's most popular stories.\n      </p>\n    </div>\n    <hr>\n    <h4>I want to receive top stories:</h4>\n    <form accept-charset='UTF-8' action='https://link.mashable.com/s/Top+Stories' id='update-frequency' method='post'>\n      <div class='frequency'>\n        <div id='frequency-select'>\n          <select name='vars[top_stories_frequency]'>\n            <option value='daily'>Every day</option>\n            <option value='semiweekly'>Every few days</option>\n            <option value='weekly'>Once a week</option>\n          </select>\n        </div>\n        <div id='frequency-radio'>\n          <div class='field'>\n            <input checked='1' name='vars[top_stories_frequency]' type='radio' value='daily'>\n            <label class='inline'>Every day</label>\n          </div>\n          <div class='field'>\n            <input name='vars[top_stories_frequency]' type='radio' value='semiweekly'>\n            <label class='inline'>Every few days</label>\n          </div>\n          <div class='field'>\n            <input name='vars[top_stories_frequency]' type='radio' value='weekly'>\n            <label class='inline'>Once a week</label>\n          </div>\n        </div>\n        <input name='email' type='hidden' value='" + e.escapeExpression((t = null != (t = l.email || (null != a ? a.email : a)) ? t : l.helperMissing,
                    "function" == typeof t ? t.call(null != a ? a : {}, {
                        name: "email",
                        hash: {},
                        data: s
                    }) : t)) + "'>\n        <input class='submit' name='commit' type='submit' value='Update'>\n      </div>\n    </form>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["posts/newsletter_signup_success"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/post"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return null != (t = e.invokePartial(n["posts/_single_post"], a, {
                    name: "posts/_single_post",
                    data: s,
                    helpers: l,
                    partials: n,
                    decorators: e.decorators
                })) ? t : ""
            },
            usePartial: !0,
            useData: !0
        }), this.Handlebars.templates["posts/post"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/search_post"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='article-container sharable'>\n  <article class='post clearfix short' id='post-" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "id",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <div class='article-img-container'>\n      <a href='" + e.escapeExpression((i = null != (i = l.permalink || (null != a ? a.permalink : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "permalink",
                    hash: {},
                    data: s
                }) : i)) + "'>\n" + (null != (t = e.invokePartial(n["shared/_responsive_images"], a, {
                    name: "shared/_responsive_images",
                    data: s,
                    indent: "        ",
                    helpers: l,
                    partials: n,
                    decorators: e.decorators
                })) ? t : "") + "    </a>\n    </div>\n    <div class='article-content'>\n      <h2 class='article-title'>\n        <a href='" + e.escapeExpression((i = null != (i = l.permalink || (null != a ? a.permalink : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "permalink",
                    hash: {},
                    data: s
                }) : i)) + "'>\n          " + (null != (i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "      </a>\n      </h2>\n      <footer>\n        <div class='article-byline'>" + (null != (i = null != (i = l.byline || (null != a ? a.byline : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "byline",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</div>\n        <div class='article-date'>\n          <time datetime='" + e.escapeExpression((i = null != (i = l.post_date_rfc || (null != a ? a.post_date_rfc : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "post_date_rfc",
                    hash: {},
                    data: s
                }) : i)) + "'>" + e.escapeExpression((i = null != (i = l.time_ago || (null != a ? a.time_ago : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "time_ago",
                    hash: {},
                    data: s
                }) : i)) + "</time>\n        </div>\n      </footer>\n      <p class='article-excerpt'>" + e.escapeExpression((i = null != (i = l.excerpt || (null != a ? a.excerpt : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "excerpt",
                    hash: {},
                    data: s
                }) : i)) + "</p>\n    </div>\n  </article>\n</div>"
            },
            usePartial: !0,
            useData: !0
        }), this.Handlebars.templates["posts/search_post"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/series"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return null != (t = e.invokePartial(n["posts/_single_post"], a, {
                    name: "posts/_single_post",
                    data: s,
                    helpers: l,
                    partials: n,
                    decorators: e.decorators
                })) ? t : ""
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<section id='series-pane'>\n  <div class='sponsorship'></div>\n  <h4>" + e.escapeExpression((i = null != (i = l.name || (null != a ? a.name : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : i)) + "</h4>\n  <div class='series-strip'>\n    <div class='series'>\n      " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.posts : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n    </div>\n  </div>\n  <div class='indexArrow'></div>\n</section>\n<div id='series-nav'>\n  <div class='navblock'>\n    <a href='#' id='series-prev'>Prev</a><span id='current_page'>1</span><span id='total_pages'>" + e.escapeExpression((i = null != (i = l.posts_count || (null != a ? a.posts_count : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "posts_count",
                    hash: {},
                    data: s
                }) : i)) + "</span><a href='#' id='series-next'>Next</a>\n  </div>\n</div>"
            },
            usePartial: !0,
            useData: !0
        }), this.Handlebars.templates["posts/series"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/share_nav"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='share-nav-inner'>\n  <div class='menu'>\n    <a></a>\n  </div>\n  <div class='logo'>\n    <a class='brand' href='/'>\n      <span class='large'><img alt=\"Header share logo.v2 1ae91cfc1bc21a46cc127bcd2ae645cad4657464505668abca4bea13889ae851\" src=\"https://a.amz.mshcdn.com/assets/header_share_logo.v2-1ae91cfc1bc21a46cc127bcd2ae645cad4657464505668abca4bea13889ae851.png\" /></span>\n      <span class='small'><img alt=\"Mobile logo 2d675f03bcc8a93a7d09335159bda85a2cfee1e67a8649cd4a0bc639803afedc\" src=\"https://a.amz.mshcdn.com/assets/mobile_logo-2d675f03bcc8a93a7d09335159bda85a2cfee1e67a8649cd4a0bc639803afedc.png\" /></span>\n    </a>\n  </div>\n  <div class='share-buttons v2'>\n    <div class='primary-shares nowhatsapp'>\n      <a class='social-share facebook' data-image='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.ogData : a) ? t.image : t, a)) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.ogData : a) ? t.title : t, a)) + "'>\n        Share\n        <span class='expanded-text'>on Facebook</span>\n      </a>\n      <a class='social-share twitter' data-tweet-link='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.twitterData : a) ? t.tweetLink : t, a)) + "' data-tweet-text='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.twitterData : a) ? t.tweetText : t, a)) + "' data-tweet-via='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.twitterData : a) ? t.tweetVia : t, a)) + "'>\n        <span class='primary-text'>Share</span>\n        <span class='alt-text'>Tweet</span>\n        <span class='expanded-text'>on Twitter</span>\n      </a>\n      <a class='social-share whatsapp' href='" + e.escapeExpression((i = null != (i = l.whatsappURL || (null != a ? a.whatsappURL : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "whatsappURL",
                    hash: {},
                    data: s
                }) : i)) + "'>\n        <span class='primary-text'>Share</span>\n        <span class='alt-text'>Share</span>\n      </a>\n    </div>\n    <div class='secondary-shares'>\n      <a class='social-share flipboard'></a>\n      <a class='social-share linked_in'></a>\n      <a class='social-share pinterest'></a>\n    </div>\n    <div class='share-toggle'></div>\n  </div>\n  <div class='sparkline'></div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["posts/share_nav"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/shares"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='share-container'>\n  <div class='primary-shares nowhatsapp'>\n    <a class='social-share facebook' data-image='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.ogData : a) ? t.image : t, a)) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.ogData : a) ? t.title : t, a)) + "'>\n      Share\n      <span class='expanded-text'>on Facebook</span>\n    </a>\n    <a class='social-share twitter' data-tweet-link='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.twitterData : a) ? t.tweetLink : t, a)) + "' data-tweet-text='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.twitterData : a) ? t.tweetText : t, a)) + "' data-tweet-via='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.twitterData : a) ? t.tweetVia : t, a)) + "'>\n      <span class='primary-text'>Share</span>\n      <span class='alt-text'>Tweet</span>\n      <span class='expanded-text'>on Twitter</span>\n    </a>\n    <a class='social-share whatsapp' href='" + e.escapeExpression((i = null != (i = l.whatsappURL || (null != a ? a.whatsappURL : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "whatsappURL",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <span class='primary-text'>Share</span>\n      <span class='alt-text'>Share</span>\n    </a>\n    <div class='share-toggle'></div>\n  </div>\n  <div class='secondary-shares'>\n    <a class='social-share flipboard'></a>\n    <a class='social-share linked_in'></a>\n    <a class='social-share pinterest'></a>\n    <div class='secondary-share-toggle'></div>\n  </div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["posts/shares"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/social_interrupt"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function() {
                return "<div id='fb-social-interrupt'>\n  <div class='text-container'>\n    <h1>Don't miss the next big thing.</h1>\n    <h2>We know what's about to go viral. Like us on Facebook to get it all in your News Feed.</h2>\n  </div>\n  <div class='fb-like-container faces'>\n    <div class='fb-like' data-action='like' data-href='https://www.facebook.com/mashable?interrupt=1' data-layout='standard' data-send='false' data-share='false' data-shares='2.4m' data-show-faces='true' data-width='258px'></div>\n  </div>\n  <a class='opt-out'>I've already Liked Mashable on Facebook.</a>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["posts/social_interrupt"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/subnav"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t, i;
                return "    <li>\n      <a class='subnav-channel' data-cid='nav-sub' data-tag='" + e.escapeExpression((i = null != (i = l.slug || (null != a ? a.slug : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "slug",
                    hash: {},
                    data: s
                }) : i)) + "' href='" + e.escapeExpression((i = null != (i = l.url || (null != a ? a.url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : i)) + (null != (t = l["if"].call(null != a ? a : {}, s && s.index, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "'>" + (null != (i = null != (i = l.name || (null != a ? a.name : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</a>\n    </li>\n"
            },
            2: function() {
                return "?utm_campaign=mash-prod-nav-sub&utm_source=internal&utm_medium=onsite"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='page-container'>\n  <ul class='channels'>\n" + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.channels : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "  </ul>\n  <ul class='subnav-posts'>\n" + (null != (t = e.invokePartial(n["posts/_subnav_posts"], a, {
                    name: "posts/_subnav_posts",
                    data: s,
                    indent: "    ",
                    helpers: l,
                    partials: n,
                    decorators: e.decorators
                })) ? t : "") + "  </ul>\n</div>"
            },
            usePartial: !0,
            useData: !0
        }), this.Handlebars.templates["posts/subnav"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["posts/topic_post"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<span>" + e.escapeExpression((t = null != (t = l.sponsored_by || (null != a ? a.sponsored_by : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "sponsored_by",
                    hash: {},
                    data: s
                }) : t)) + "</span>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='article-container sharable'>\n  <article class='post short' id='post-" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "id",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <div class='article-img-container'>\n      <a data-turbo-target='post_slider' href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "'>\n" + (null != (t = e.invokePartial(n["shared/_responsive_images"], a, {
                    name: "shared/_responsive_images",
                    data: s,
                    indent: "        ",
                    helpers: l,
                    partials: n,
                    decorators: e.decorators
                })) ? t : "") + "      </a>\n    </div>\n    <div class='article-content-wrapper'>\n      <div class='article-content'>\n        <a class='article-category' href='javascript: void(0);'>" + e.escapeExpression((i = null != (i = l.channel || (null != a ? a.channel : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "channel",
                    hash: {},
                    data: s
                }) : i)) + "</a>\n        <h2 class='article-title'>\n          <a data-turbo-target='post_slider' href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "'>" + (null != (i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</a>\n        </h2>\n        <div class='article-byline'>" + e.escapeExpression((i = null != (i = l.author || (null != a ? a.author : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "author",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n        <time class='article-date' datetime='" + e.escapeExpression((i = null != (i = l.post_date_rfc || (null != a ? a.post_date_rfc : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "post_date_rfc",
                    hash: {},
                    data: s
                }) : i)) + "'>" + e.escapeExpression((i = null != (i = l.post_date_rfc || (null != a ? a.post_date_rfc : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "post_date_rfc",
                    hash: {},
                    data: s
                }) : i)) + "</time>\n        <p class='article-excerpt'>" + e.escapeExpression((i = null != (i = l.excerpt || (null != a ? a.excerpt : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "excerpt",
                    hash: {},
                    data: s
                }) : i)) + "</p>\n      </div>\n      <footer>\n        <div class='article-shares-stub'>\n          <a class='num' href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "'>\n            " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.sponsored_by : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n          </a>\n        </div>\n        <div class='article-shares-links'>\n          <a class='social-stub social-share facebook' data-href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "' data-shares='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.shares : a) ? t.facebook : t, a)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' href='javascript:void(0);'>\n            Share\n          </a>\n          <a class='social-stub social-share twitter' data-href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "' data-shares='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.shares : a) ? t.twitter : t, a)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-tweet-link='" + e.escapeExpression((i = null != (i = l.tweet_link || (null != a ? a.tweet_link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "tweet_link",
                    hash: {},
                    data: s
                }) : i)) + "' data-tweet-text='" + e.escapeExpression((i = null != (i = l.tweet_text || (null != a ? a.tweet_text : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "tweet_text",
                    hash: {},
                    data: s
                }) : i)) + "' data-tweet-via='" + e.escapeExpression((i = null != (i = l.tweet_via || (null != a ? a.tweet_via : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "tweet_via",
                    hash: {},
                    data: s
                }) : i)) + "' href='javascript:void(0);'>\n            Tweet\n          </a>\n          <a class='social-stub social-share linked_in' data-href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "' data-shares='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.shares : a) ? t.linked_in : t, a)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' href='javascript:void(0);'>\n            Share\n          </a>\n          <a class='social-stub social-share google_plus' data-href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "' data-shares='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.shares : a) ? t.google_plus : t, a)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' href='javascript:void(0);'>\n            +1\n          </a>\n        </div>\n      </footer>\n    </div>\n  </article>\n</div>"
            },
            usePartial: !0,
            useData: !0
        }), this.Handlebars.templates["posts/topic_post"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/code_display"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='mash-lightbox-close'></div>\n<div class='prompt'>\n  Traffic the following code:\n</div>\n<textarea id='quadExportCode' onclick='this.focus();this.select()' readonly='readonly'>" + (null != (i = null != (i = l.json || (null != a ? a.json : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "json",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</textarea>\n<div class='buttons'>\n  <div class='copy' data-clipboard-target='quadExportCode'>Copy to Clipboard</div>\n  <div class='cancel'>Cancel</div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/code_display"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/create_prompt"] = Handlebars.template({
            1: function(e, a) {
                return "<div class='prompt'>" + e.escapeExpression(e.lambda(a, a)) + "</div>\n<input>"
            },
            3: function() {
                return "<div class='prompt'>Media Type</div>\n<div class='select'>\n  <select>\n    <option value='image'>Instagram</option>\n    <option value='vine'>Vine</option>\n    <option value='youtube'>YouTube</option>\n    <option value='ustream'>Ustream</option>\n    <option value='soundcloud'>SoundCloud</option>\n  </select>\n</div>\n<div class='prompt'>Instagram Url</div>\n<input>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<div class='mash-lightbox-close'></div>\n<div class='prompt'>\n  Title your ad unit:\n</div>\n<input name='name'>\n" + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.prompt : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.multimedia : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n<div class='buttons'>\n  <div class='create'>Create</div>\n  <div class='skip'>Skip</div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/create_prompt"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/delete_prompt"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function() {
                return "<div class='mash-lightbox-close'></div>\n<div class='prompt'>\n  Are you sure you want to delete this ad unit?\n</div>\n<div class='buttons'>\n  <div class='delete'>Yes</div>\n  <div class='cancel'>Cancel</div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/delete_prompt"]
    }.call(this),
    function() {
        Handlebars.registerPartial("quadratus/forms/_media", Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<label>Media Type</label>\n    <div class='select'>\n      <select>\n        " + (null != (t = (l.select || a && a.select || l.helperMissing).call(null != a ? a : {}, null != a ? a.type : a, {
                    name: "select",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n      </select>\n    </div>\n"
            },
            2: function() {
                return "<option value='image'>Instagram</option>\n        <option value='vine'>Vine</option>\n        <option value='youtube'>YouTube</option>\n        <option value='ustream'>Ustream</option>\n        <option value='soundcloud'>SoundCloud</option>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<section class='media' data-index='" + e.escapeExpression((i = null != (i = l.index || (null != a ? a.index : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  <div class='grabbable'>\n    <div class='media-icon " + e.escapeExpression((i = null != (i = l.type || (null != a ? a.type : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "type",
                    hash: {},
                    data: s
                }) : i)) + "'></div>\n    <div class='controls'>\n      <div class='toggle'></div>\n      <div class='delete'></div>\n    </div>\n  </div>\n  <div class='inputs'>\n    " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.mixedMedia : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "    <label class='mediaPop'>" + e.escapeExpression((l.quadMediaSourceLabel || a && a.quadMediaSourceLabel || l.helperMissing).call(null != a ? a : {}, null != a ? a.type : a, {
                    name: "quadMediaSourceLabel",
                    hash: {},
                    data: s
                })) + "</label>\n    <div class='autopop'>\n      <input name='mediaAutopop'>\n      <div class='pop'></div>\n    </div>\n    <label class='mediaData'>" + e.escapeExpression((l.quadDataInputLabel || a && a.quadDataInputLabel || l.helperMissing).call(null != a ? a : {}, null != a ? a.type : a, {
                    name: "quadDataInputLabel",
                    hash: {},
                    data: s
                })) + "</label>\n    <input name='media." + e.escapeExpression((i = null != (i = l.index || (null != a ? a.index : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : i)) + ".data' value='" + e.escapeExpression((i = null != (i = l.data || (null != a ? a.data : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "data",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <label>Thumbnail</label>\n    <input name='media." + e.escapeExpression((i = null != (i = l.index || (null != a ? a.index : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : i)) + ".thumb' value='" + e.escapeExpression((i = null != (i = l.thumb || (null != a ? a.thumb : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "thumb",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  </div>\n</section>"
            },
            useData: !0
        }))
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/forms/brand"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<div class='impression-tracker'>\n  <label>Impression Tracker</label>\n  <input class='impression' data-index='" + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "' name='trackers.impression." + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "' value='" + e.escapeExpression(e.lambda(a, a)) + "'>\n  <div class='remove' data-index='" + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "'></div>\n</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<input name='name' value='" + e.escapeExpression((i = null != (i = l.name || (null != a ? a.name : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : i)) + "'>\n<hr>\n<h2>Basic Information</h2>\n<label>\"Sponsored By\" Title</label>\n<input name='title' value='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "'>\n<label>\"Sponsored By\" Logo</label>\n<input name='imageSrc' value='" + e.escapeExpression((i = null != (i = l.imageSrc || (null != a ? a.imageSrc : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "imageSrc",
                    hash: {},
                    data: s
                }) : i)) + "'>\n<label>\"Sponsored By\" Description</label>\n<input name='description' value='" + e.escapeExpression((i = null != (i = l.description || (null != a ? a.description : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "description",
                    hash: {},
                    data: s
                }) : i)) + "'>\n<label>Follow Button URL</label>\n<input name='followUrl' value='" + e.escapeExpression((i = null != (i = l.followUrl || (null != a ? a.followUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "followUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>\n<label>Facebook Username</label>\n<input name='facebookHandle' value='" + e.escapeExpression((i = null != (i = l.facebookHandle || (null != a ? a.facebookHandle : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "facebookHandle",
                    hash: {},
                    data: s
                }) : i)) + "'>\n<label>Twitter Widget ID</label>\n<input name='twitterWidgetId' value='" + e.escapeExpression((i = null != (i = l.twitterWidgetId || (null != a ? a.twitterWidgetId : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterWidgetId",
                    hash: {},
                    data: s
                }) : i)) + "'>\n<label>Twitter Username</label>\n<input name='twitterName' value='" + e.escapeExpression((i = null != (i = l.twitterName || (null != a ? a.twitterName : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterName",
                    hash: {},
                    data: s
                }) : i)) + "'>\n<label>Preview Post Slug</label>\n<input name='postSlug' value='" + e.escapeExpression((i = null != (i = l.postSlug || (null != a ? a.postSlug : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "postSlug",
                    hash: {},
                    data: s
                }) : i)) + "'>\n<hr>\n<h2>Tracking Information</h2>\n" + (null != (t = l.each.call(null != a ? a : {}, null != (t = null != a ? a.trackers : a) ? t.impression : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "<a class='add-impression'>Add Impression Tracker</a>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/forms/brand"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/forms/content"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return (null != (t = l.each.call(null != a ? a : {}, null != a ? a.media : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n"
            },
            2: function(e, a, l, n, s) {
                return e.escapeExpression((l.render || a && a.render || l.helperMissing).call(null != a ? a : {}, "quadratus/forms/_media", a, {
                    name: "render",
                    hash: {
                        mixedMedia: !0,
                        index: s && s.index
                    },
                    data: s
                }))
            },
            4: function(e, a) {
                var l;
                return "<section class='media'>\n  <div class='media-icon plain-image'></div>\n  <div class='controls'>\n    <div class='toggle'></div>\n    <div class='delete'></div>\n  </div>\n  <div class='inputs'>\n    <label>Image Url</label>\n    <input name='media.0.data' value='" + e.escapeExpression(e.lambda(null != (l = null != (l = null != a ? a.media : a) ? l[0] : l) ? l.data : l, a)) + "'>\n  </div>\n</section>\n"
            },
            6: function() {
                return "<label>Mashable Url</label>\n"
            },
            8: function() {
                return "    <label>Advertiser Offsite Content Url</label>"
            },
            10: function(e, a) {
                var l;
                return "<label>Advertiser Site Name</label>\n    <input name='contentHost.title' value='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.contentHost : a) ? l.title : l, a)) + "'>\n    <label>Advertiser Site Clickthrough Url</label>\n    <input name='contentHost.url' value='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.contentHost : a) ? l.url : l, a)) + "'>"
            },
            12: function(e, a) {
                var l;
                return "<section class='collapsed'>\n  <header>Share Info</header>\n  <div class='inputs'>\n    <label>Share Text</label>\n    <input name='share.text' value='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.share : a) ? l.text : l, a)) + "'>\n    <label>Share Url</label>\n    <input name='share.url' value='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.share : a) ? l.url : l, a)) + "'>\n  </div>\n</section>\n"
            },
            14: function(e, a, l, n, s) {
                var t;
                return "    <div class='tracker-delete impression' data-index='" + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "'></div>\n    <label>3rd Party/Survey Tracker (1x1)</label>\n    <input class='impression-tracker' name='trackers.impression." + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "' value='" + e.escapeExpression(e.lambda(a, a)) + "'>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return (null != (t = (l.ifEqual || a && a.ifEqual || l.helperMissing).call(null != a ? a : {}, null != a ? a.complexType : a, "mashable-content-social", {
                    name: "ifEqual",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(4, s, 0),
                    data: s
                })) ? t : "") + "<section>\n  <header>Basic Information</header>\n  <div class='inputs'>\n    " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.mashableContent : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, s, 0),
                    inverse: e.program(8, s, 0),
                    data: s
                })) ? t : "") + "\n    \n    <div class='autopop'>\n      <input name='sourceUrl' value='" + e.escapeExpression((i = null != (i = l.sourceUrl || (null != a ? a.sourceUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "sourceUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>\n      <div class='pop'></div>\n    </div>\n    " + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.mashableContent : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(10, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n    <label>Title</label>\n    <input name='title' value='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <label>Title Clickthrough Url</label>\n    <input name='share.title.url' value='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.share : a) ? t.title : t) ? t.url : t, a)) + "'>\n    <label>Thumbnail Clickthrough Url</label>\n    <input name='share.lead.url' value='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.share : a) ? t.lead : t) ? t.url : t, a)) + "'>\n    <label>Organic Unit?</label>\n    <input class='organic-unit' name='organicUnit' type='checkbox' value='" + e.escapeExpression((i = null != (i = l.organicUnit || (null != a ? a.organicUnit : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "organicUnit",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  </div>\n</section>\n<section class='collapsed'>\n  <header>Promoted By Info</header>\n  <div class='inputs'>\n    <label>Promoted By Text</label>\n    <input name='sponsorship.text' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.sponsorship : a) ? t.text : t, a)) + "'>\n    <label>Promoted By Clickthrough Url</label>\n    <input name='sponsorship.url' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.sponsorship : a) ? t.url : t, a)) + "'>\n  </div>\n</section>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.mashableContent : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "<section class='collapsed'>\n  <header>Tracking Info</header>\n  <div class='inputs'>\n" + (null != (t = l.each.call(null != a ? a : {}, null != (t = null != a ? a.trackers : a) ? t.impression : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(14, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n    \n    <div class='add-impression-tracker'></div>\n  </div>\n</section>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/forms/content"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/forms/gallery"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                return e.escapeExpression((l.render || a && a.render || l.helperMissing).call(null != a ? a : {}, "quadratus/forms/_media", a, {
                    name: "render",
                    hash: {
                        index: s && s.index
                    },
                    data: s
                }))
            },
            3: function(e, a, l, n, s) {
                var t;
                return "    <div class='tracker-delete click' data-index='" + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "'></div>\n    <label>Preview Clickthrough Tracker (1x1)</label>\n    <input class='click-tracker' name='trackers.click." + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "' value='" + e.escapeExpression(e.lambda(a, a)) + "'>"
            },
            5: function(e, a, l, n, s) {
                var t;
                return "    <div class='tracker-delete impression' data-index='" + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "'></div>\n    <label>3rd Party/Survey Tracker (1x1)</label>\n    <input class='impression-tracker' name='trackers.impression." + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "' value='" + e.escapeExpression(e.lambda(a, a)) + "'>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return (null != (t = l.each.call(null != a ? a : {}, null != a ? a.media : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n<div class='add-media'></div>\n<section>\n  <header>Basic Information</header>\n  <div class='inputs'>\n    <label>Title</label>\n    <input name='title' value='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing,
                    "function" == typeof i ? i.call(null != a ? a : {}, {
                        name: "title",
                        hash: {},
                        data: s
                    }) : i)) + "'>\n    <label>Description</label>\n    <input name='leadText' value='" + e.escapeExpression((i = null != (i = l.leadText || (null != a ? a.leadText : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "leadText",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <label>CTA Text</label>\n    <input name='credit.text' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.credit : a) ? t.text : t, a)) + "'>\n    <label>CTA Url (DFP Click Command)</label>\n    <input name='credit.url' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.credit : a) ? t.url : t, a)) + "'>\n  </div>\n</section>\n<section class='collapsed'>\n  <header>Promoted By Info</header>\n  <div class='inputs'>\n    <label>Promoted By Text</label>\n    <input name='sponsorship.text' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.sponsorship : a) ? t.text : t, a)) + "'>\n    <label>Promoted By Clickthrough Url</label>\n    <input name='sponsorship.url' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.sponsorship : a) ? t.url : t, a)) + "'>\n  </div>\n</section>\n<section class='collapsed'>\n  <header>Sharing Info</header>\n  <div class='inputs'>\n    <label>Twitter Share Text</label>\n    <input name='share.text' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "'>\n    <label>Twitter Handle</label>\n    <input name='twitterHandle' value='" + e.escapeExpression((i = null != (i = l.twitterHandle || (null != a ? a.twitterHandle : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterHandle",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <label>Twitter Share Url</label>\n    <input name='share.url' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "'>\n  </div>\n</section>\n<section class='collapsed'>\n  <header>Tracking Info</header>\n  <div class='inputs'>\n    <label>Tracking Prefix</label>\n    <div class='autopop'>\n      <input name='trackingPrefix' value=''>\n      <div class='pop'></div>\n    </div>\n    <label>Facebook Tracker (1x1)</label>\n    <input name='trackers.share.facebook' value='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.trackers : a) ? t.share : t) ? t.facebook : t, a)) + "'>\n    <label>Twitter Tracker (1x1)</label>\n    <input name='trackers.share.twitter' value='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.trackers : a) ? t.share : t) ? t.twitter : t, a)) + "'>\n    <label>Pinterest Tracker (1x1)</label>\n    <input name='trackers.share.pinterest' value='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.trackers : a) ? t.share : t) ? t.pinterest : t, a)) + "'>\n    <label>LinkedIn Tracker (1x1)</label>\n    <input name='trackers.share.linkedIn' value='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.trackers : a) ? t.share : t) ? t.linkedIn : t, a)) + "'>\n    <label>Google Plus Tracker (1x1)</label>\n    <input name='trackers.share.googlePlus' value='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.trackers : a) ? t.share : t) ? t.googlePlus : t, a)) + "'>\n    <label>Previous Tracker (1x1)</label>\n    <input name='trackers.prev' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.trackers : a) ? t.prev : t, a)) + "'>\n    <label>Next Tracker (1x1)</label>\n    <input name='trackers.next' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.trackers : a) ? t.next : t, a)) + "'>\n" + (null != (t = l.each.call(null != a ? a : {}, null != (t = null != a ? a.trackers : a) ? t.click : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n" + (null != (t = l.each.call(null != a ? a : {}, null != (t = null != a ? a.trackers : a) ? t.impression : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n    \n    <div class='add-click-tracker'></div>\n    <div class='add-impression-tracker'></div>\n  </div>\n</section>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/forms/gallery"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/forms/sponsored"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<div class='impression-tracker'>\n  <label>Impression Tracker</label>\n  <input class='impression' data-index='" + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "' name='trackers.impression." + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "' value='" + e.escapeExpression(e.lambda(a, a)) + "'>\n  <div class='remove' data-index='" + e.escapeExpression((t = null != (t = l.index || s && s.index) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "index",
                    hash: {},
                    data: s
                }) : t)) + "'></div>\n</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<input name='name' value='" + e.escapeExpression((i = null != (i = l.name || (null != a ? a.name : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : i)) + "'>\n<hr>\n<h2>Basic Information</h2>\n<label>Title</label>\n<input name='title' value='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "'>\n<label>Description</label>\n<input name='leadText' value='" + e.escapeExpression((i = null != (i = l.leadText || (null != a ? a.leadText : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "leadText",
                    hash: {},
                    data: s
                }) : i)) + "'>\n<label>Logo Src</label>\n<input name='logo.src' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.logo : a) ? t.src : t, a)) + "'>\n<label>Logo Href</label>\n<input name='logo.href' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.logo : a) ? t.href : t, a)) + "'>\n<hr>\n<h2>Tracking Information</h2>\n" + (null != (t = l.each.call(null != a ? a : {}, null != (t = null != a ? a.trackers : a) ? t.impression : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "<a class='add-impression'>Add Impression Tracker</a>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/forms/sponsored"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/forms/twitter"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<section>\n  <header>Basic Information</header>\n  <div class='inputs'>\n    <label>Tweet Url</label>\n    <div class='autopop'>\n      <input name='tweetUrl'>\n      <div class='pop'></div>\n    </div>\n    <label>Tweet ID</label>\n    <input name='tweetId' value='" + e.escapeExpression((i = null != (i = l.tweetId || (null != a ? a.tweetId : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "tweetId",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <label>Tweet Text</label>\n    <input name='leadText' value='" + e.escapeExpression((i = null != (i = l.leadText || (null != a ? a.leadText : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "leadText",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <label>Image in Tweet</label>\n    <input name='leadImageSrc' value='" + e.escapeExpression((i = null != (i = l.leadImageSrc || (null != a ? a.leadImageSrc : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "leadImageSrc",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  </div>\n</section>\n<section class='collapsed'>\n  <header>Account Info</header>\n  <div class='inputs'>\n    <label>Twitter Handle</label>\n    <input name='twitterHandle' value='" + e.escapeExpression((i = null != (i = l.twitterHandle || (null != a ? a.twitterHandle : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterHandle",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <label>Account Name</label>\n    <input name='twitterName' value='" + e.escapeExpression((i = null != (i = l.twitterName || (null != a ? a.twitterName : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterName",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <label>Twitter Avatar Thumbnail</label>\n    <input name='twitterAvatarSrc' value='" + e.escapeExpression((i = null != (i = l.twitterAvatarSrc || (null != a ? a.twitterAvatarSrc : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterAvatarSrc",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  </div>\n</section>\n<section class='collapsed'>\n  <header>Design Info</header>\n  <div class='inputs'>\n    <label>Tweet Font Color</label>\n    <input name='textColor' value='" + e.escapeExpression((i = null != (i = l.textColor || (null != a ? a.textColor : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "textColor",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <label>Hashtag Color</label>\n    <input name='hashtagColor' value='" + e.escapeExpression((i = null != (i = l.hashtagColor || (null != a ? a.hashtagColor : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "hashtagColor",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <label>Handle/Name Color</label>\n    <input name='usernameColor' value='" + e.escapeExpression((i = null != (i = l.usernameColor || (null != a ? a.usernameColor : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "usernameColor",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  </div>\n</section>\n<section class='collapsed'>\n  <header>Promoted By Info</header>\n  <div class='inputs'>\n    <label>Promoted By Text</label>\n    <input name='sponsorship.text' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.sponsorship : a) ? t.text : t, a)) + "'>\n    <label>Promoted By Clickthrough Url</label>\n    <input name='sponsorship.url' value='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.sponsorship : a) ? t.url : t, a)) + "'>\n  </div>\n</section>\n<section class='collapsed'>\n  <header>Tracking Info</header>\n  <div class='inputs'>\n    <label>Follow Tracker (1x1)</label>\n    <input name='twitterFollowTracker' value='" + e.escapeExpression((i = null != (i = l.twitterFollowTracker || (null != a ? a.twitterFollowTracker : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterFollowTracker",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <label>Twitter Account Clickthrough Url</label>\n    <input name='twitterAccountUrl' value='" + e.escapeExpression((i = null != (i = l.twitterAccountUrl || (null != a ? a.twitterAccountUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterAccountUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <label>Reply Intent Clickthrough Url</label>\n    <input name='replyTweetUrl' value='" + e.escapeExpression((i = null != (i = l.replyTweetUrl || (null != a ? a.replyTweetUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "replyTweetUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <label>Retweet Intent Clickthrough Url</label>\n    <input name='retweetTweetUrl' value='" + e.escapeExpression((i = null != (i = l.retweetTweetUrl || (null != a ? a.retweetTweetUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "retweetTweetUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <label>Favorite Intent Clickthrough Url</label>\n    <input name='favoriteTweetUrl' value='" + e.escapeExpression((i = null != (i = l.favoriteTweetUrl || (null != a ? a.favoriteTweetUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "favoriteTweetUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  </div>\n</section>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/forms/twitter"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/lightboxes/gallery"] = Handlebars.template({
            1: function(e, a) {
                var l;
                return "<a class='view-on solitary' href='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.credit : a) ? l.url : l, a)) + "' target='_blank'>" + e.escapeExpression(e.lambda(null != (l = null != a ? a.credit : a) ? l.text : l, a)) + "</a>"
            },
            3: function(e, a, l, n, s) {
                var t, i;
                return "<a class='social-stub social-share no-count facebook no-track' data-href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' href='javascript:void(0);'>\n    Share\n  </a>\n  <a class='social-stub social-share no-count twitter no-track' data-href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-shorturl='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' data-twitter-handle='" + e.escapeExpression((i = null != (i = l.twitterHandle || (null != a ? a.twitterHandle : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterHandle",
                    hash: {},
                    data: s
                }) : i)) + "' href='javascript:void(0);'>\n    Tweet\n  </a>\n  <a class='social-stub social-share no-count google_plus no-track' data-href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-shares='" + e.escapeExpression((l.share_count || a && a.share_count || l.helperMissing).call(null != a ? a : {}, null != (t = null != a ? a.shares : a) ? t.google_plus : t, {
                    name: "share_count",
                    hash: {},
                    data: s
                })) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' href='javascript:void(0);'>\n    Share\n  </a>\n  <a class='social-stub social-share no-count pinterest no-track' data-description='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' data-href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-image='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.media : a) ? t[0] : t) ? t.image : t, a)) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' href='javascript:void(0);'></a>\n  <a class='social-stub social-share no-count linked_in no-track' data-href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' href='javascript:void(0);'>\n    Share\n  </a>\n  <a class='view-on' href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.credit : a) ? t.url : t, a)) + "' target='_blank'>" + e.escapeExpression(e.lambda(null != (t = null != a ? a.credit : a) ? t.text : t, a)) + "</a>"
            },
            5: function(e, a) {
                var l;
                return "<a class='sponsorship' href='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.url : l, a)) + "' target='_blank'>" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.text : l, a)) + "</a>\n"
            },
            7: function(e, a) {
                var l;
                return "  \n  <div class='sponsorship'>" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.text : l, a)) + "</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='mash-lightbox-close'></div>\n<div class='mash-lightbox-next'></div>\n<div class='mash-lightbox-prev'></div>\n<div class='lightbox-lead'></div>\n<div class='article-shares-links persistent'>\n  " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.hideShareButtons : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n  " + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.hideShareButtons : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n</div>\n<footer>\n  <div class='title'>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n  <div class='description'>" + (null != (i = null != (i = l.leadText || (null != a ? a.leadText : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "leadText",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</div>\n  " + (null != (t = l["if"].call(null != a ? a : {}, null != (t = null != a ? a.sponsorship : a) ? t.url : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.program(7, s, 0),
                    data: s
                })) ? t : "") + "</footer>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/lightboxes/gallery"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/preview/content"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='quad-box'>\n  <div class='quad-actions'>\n    <a class='preview' href='" + e.escapeExpression((i = null != (i = l.previewUrl || (null != a ? a.previewUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "previewUrl",
                    hash: {},
                    data: s
                }) : i)) + "' target='_blank'></a>\n    <a class='edit' href='/ads/" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "id",
                    hash: {},
                    data: s
                }) : i)) + "/edit'></a>\n    <div class='copy'></div>\n    <div class='code'></div>\n    <div class='delete'></div>\n  </div>\n  <div class='quad-image' style='background:url(" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.media : a) ? t[0] : t) ? t.image : t, a)) + ")'></div>\n</div>\n<div class='quad-meta'>\n  <div class='name'>" + e.escapeExpression((i = null != (i = l.name || (null != a ? a.name : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n  <div class='type'>" + e.escapeExpression((i = null != (i = l.complexTypeName || (null != a ? a.complexTypeName : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "complexTypeName",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n  <div class='sponsorship'>" + e.escapeExpression(e.lambda(null != (t = null != a ? a.sponsorship : a) ? t.text : t, a)) + "</div>\n  <div class='timestamp'>" + e.escapeExpression((i = null != (i = l.timestamp || (null != a ? a.timestamp : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "timestamp",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/preview/content"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/preview/gallery"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='quad-box'>\n  <div class='quad-actions'>\n    <a class='preview' href='" + e.escapeExpression((i = null != (i = l.previewUrl || (null != a ? a.previewUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "previewUrl",
                    hash: {},
                    data: s
                }) : i)) + "' target='_blank'></a>\n    <a class='edit' href='/ads/" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "id",
                    hash: {},
                    data: s
                }) : i)) + "/edit'></a>\n    <div class='copy'></div>\n    <div class='code'></div>\n    <div class='delete'></div>\n  </div>\n  <div class='quad-image' style='background:url(" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.media : a) ? t[0] : t) ? t.image : t, a)) + ")'></div>\n</div>\n<div class='quad-meta'>\n  <div class='name'>" + e.escapeExpression((i = null != (i = l.name || (null != a ? a.name : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n  <div class='type'>" + e.escapeExpression((i = null != (i = l.complexTypeName || (null != a ? a.complexTypeName : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "complexTypeName",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n  <div class='sponsorship'>" + e.escapeExpression(e.lambda(null != (t = null != a ? a.sponsorship : a) ? t.text : t, a)) + "</div>\n  <div class='timestamp'>" + e.escapeExpression((i = null != (i = l.timestamp || (null != a ? a.timestamp : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "timestamp",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/preview/gallery"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/preview/sponsored"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='quad-box'>\n  <div class='quad-actions'>\n    <a class='preview' href='" + e.escapeExpression((i = null != (i = l.previewUrl || (null != a ? a.previewUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "previewUrl",
                    hash: {},
                    data: s
                }) : i)) + "' target='_blank'></a>\n    <a class='edit' href='/ads/" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "id",
                    hash: {},
                    data: s
                }) : i)) + "/edit'></a>\n    <div class='copy'></div>\n    <div class='code'></div>\n    <div class='delete'></div>\n  </div>\n  <div class='quad-image' style='background:url(" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.media : a) ? t[0] : t) ? t.image : t, a)) + ")'></div>\n</div>\n<div class='quad-meta'>\n  <div class='name'>" + e.escapeExpression((i = null != (i = l.name || (null != a ? a.name : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n  <div class='type'>" + e.escapeExpression((i = null != (i = l.complexTypeName || (null != a ? a.complexTypeName : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "complexTypeName",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n  <div class='sponsorship'>" + e.escapeExpression(e.lambda(null != (t = null != a ? a.sponsorship : a) ? t.text : t, a)) + "</div>\n  <div class='timestamp'>" + e.escapeExpression((i = null != (i = l.timestamp || (null != a ? a.timestamp : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "timestamp",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/preview/sponsored"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/preview/twitter"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='quad-box'>\n  <div class='quad-actions'>\n    <a class='preview' href='" + e.escapeExpression((i = null != (i = l.previewUrl || (null != a ? a.previewUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "previewUrl",
                    hash: {},
                    data: s
                }) : i)) + "' target='_blank'></a>\n    <a class='edit' href='/ads/" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "id",
                    hash: {},
                    data: s
                }) : i)) + "/edit'></a>\n    <div class='copy'></div>\n    <div class='code'></div>\n    <div class='delete'></div>\n  </div>\n  <div class='quad-tweet'>\n    <div class='openQuote'>&ldquo;</div>\n    <div class='tweet-text'>" + (null != (i = null != (i = l.formattedTweet || (null != a ? a.formattedTweet : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "formattedTweet",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</div>\n    <div class='closeQuote'>&rdquo;</div>\n    <div class='account'>\n      <div class='avatar' style='background:url(" + e.escapeExpression((i = null != (i = l.twitterAvatarSrc || (null != a ? a.twitterAvatarSrc : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterAvatarSrc",
                    hash: {},
                    data: s
                }) : i)) + ")'></div>\n      <div class='user'>" + e.escapeExpression((i = null != (i = l.twitterName || (null != a ? a.twitterName : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterName",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n      <div class='handle'>" + e.escapeExpression((i = null != (i = l.twitterHandle || (null != a ? a.twitterHandle : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterHandle",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n    </div>\n  </div>\n</div>\n<div class='quad-meta'>\n  <div class='name'>" + e.escapeExpression((i = null != (i = l.name || (null != a ? a.name : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n  <div class='type'>" + e.escapeExpression((i = null != (i = l.complexTypeName || (null != a ? a.complexTypeName : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "complexTypeName",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n  <div class='sponsorship'>" + e.escapeExpression(e.lambda(null != (t = null != a ? a.sponsorship : a) ? t.text : t, a)) + "</div>\n  <div class='timestamp'>" + e.escapeExpression((i = null != (i = l.timestamp || (null != a ? a.timestamp : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "timestamp",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/preview/twitter"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/units/brand"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<a href='" + e.escapeExpression((t = null != (t = l.imageUrl || (null != a ? a.imageUrl : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageUrl",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      <img class='logo' src='" + e.escapeExpression((t = null != (t = l.imageSrc || (null != a ? a.imageSrc : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "imageSrc",
                    hash: {},
                    data: s
                }) : t)) + "'>\n    </a>"
            },
            3: function(e, a, l, n, s) {
                var t;
                return "    <div class='description'>" + e.escapeExpression((t = null != (t = l.description || (null != a ? a.description : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "description",
                    hash: {},
                    data: s
                }) : t)) + "</div>\n"
            },
            5: function(e, a, l, n, s) {
                var t;
                return "<a class='btn btn-success follow' href='" + e.escapeExpression((t = null != (t = l.followUrl || (null != a ? a.followUrl : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "followUrl",
                    hash: {},
                    data: s
                }) : t)) + "'>Follow</a>"
            },
            7: function() {
                return "    <div class='divider'></div>\n"
            },
            9: function(e, a, l, n, s) {
                var t;
                return "    <div class='social-streams'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.facebookHandle : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.twitterWidgetId : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "    </div>\n"
            },
            10: function(e, a, l, n, s) {
                var t;
                return "      <div class='facebook'>\n        <iframe src='https://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2F" + e.escapeExpression((t = null != (t = l.facebookHandle || (null != a ? a.facebookHandle : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "facebookHandle",
                    hash: {},
                    data: s
                }) : t)) + "&amp;width=270&amp;height=258&amp;colorscheme=light&amp;show_faces=true&amp;border_color=%23dbdbdb&amp;stream=false&amp;header=false' scrolling='no' frameborder='0' style='border:none; overflow:hidden; width:270px; height:258px;' allowTransparency='true'></iframe>\n      </div>\n"
            },
            12: function(e, a, l, n, s) {
                var t;
                return "      <div class='twitter'>\n        <a class='twitter-timeline' data-widget-id='" + e.escapeExpression((t = null != (t = l.twitterWidgetId || (null != a ? a.twitterWidgetId : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "twitterWidgetId",
                    hash: {},
                    data: s
                }) : t)) + "' href='https://twitter.com/" + e.escapeExpression((t = null != (t = l.twitterName || (null != a ? a.twitterName : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "twitterName",
                    hash: {},
                    data: s
                }) : t)) + "'>Tweets by @" + e.escapeExpression((t = null != (t = l.twitterName || (null != a ? a.twitterName : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "twitterName",
                    hash: {},
                    data: s
                }) : t)) + "</a>\n      </div>\n"
            },
            14: function() {
                return "    <div class='gpt-addendum'></div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<article class='quadratus mash-brand-unit'>\n  <div class='ad-content'>\n    <div class='sponsorship'>\n      " + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "\n    </div>\n    " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.imageSrc : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.description : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "    " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.followUrl : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.description : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = (l.ifOr || a && a.ifOr || l.helperMissing).call(null != a ? a : {}, null != a ? a.facebookHandle : a, null != a ? a.twitterWidgetId : a, {
                    name: "ifOr",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.addendum : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "  </div>\n</article>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/units/brand"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/units/content"] = Handlebars.template({
            1: function() {
                return "      <div class='video-overlay'></div>\n"
            },
            3: function(e, a, l, n, s) {
                var t;
                return (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.mashableContent : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.program(6, s, 0),
                    data: s
                })) ? t : "") + "\n"
            },
            4: function(e, a) {
                var l;
                return "<a class='sponsorship' href='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.url : l, a)) + "' target='_blank'>" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.text : l, a)) + "</a>\n"
            },
            6: function(e, a) {
                var l;
                return "    <a class='sponsorship offsite' href='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.url : l, a)) + "' target='_blank'>" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.text : l, a)) + "</a>"
            },
            8: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.mashableContent : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.program(11, s, 0),
                    data: s
                })) ? t : ""
            },
            9: function(e, a) {
                var l;
                return "    <div class='sponsorship'>" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.text : l, a)) + "</div>\n"
            },
            11: function(e, a) {
                var l;
                return "\n    <div class='sponsorship offsite'>" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.text : l, a)) + "</div>\n    "
            },
            13: function(e, a) {
                var l;
                return "<a class='company' href='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.contentHost : a) ? l.url : l, a)) + "' target='_blank'>" + e.escapeExpression(e.lambda(null != (l = null != a ? a.contentHost : a) ? l.title : l, a)) + "</a>"
            },
            15: function(e, a, l, n, s) {
                var t, i;
                return "      <div class='article-shares-stub'>\n        <a class='num' href='" + e.escapeExpression((i = null != (i = l.titleUrl || (null != a ? a.titleUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "titleUrl",
                    hash: {},
                    data: s
                }) : i)) + "'>&nbsp;</a>\n      </div>\n      <div class='article-shares-links'>\n        <a class='social-stub social-share facebook no-track' data-href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-shares='" + e.escapeExpression((l.share_count || a && a.share_count || l.helperMissing).call(null != a ? a : {}, null != (t = null != a ? a.shares : a) ? t.facebook : t, {
                    name: "share_count",
                    hash: {},
                    data: s
                })) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' href='javascript:void(0);'>\n          Share\n        </a>\n        <a class='social-stub social-share twitter no-track' data-href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-shares='" + e.escapeExpression((l.share_count || a && a.share_count || l.helperMissing).call(null != a ? a : {}, null != (t = null != a ? a.shares : a) ? t.twitter : t, {
                    name: "share_count",
                    hash: {},
                    data: s
                })) + "' data-shorturl='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' data-twitter-handle='" + e.escapeExpression((i = null != (i = l.twitterHandle || (null != a ? a.twitterHandle : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterHandle",
                    hash: {},
                    data: s
                }) : i)) + "' href='javascript:void(0);'>\n          Tweet\n        </a>\n        <a class='social-stub social-share google_plus no-track' data-href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-shares='" + e.escapeExpression((l.share_count || a && a.share_count || l.helperMissing).call(null != a ? a : {}, null != (t = null != a ? a.shares : a) ? t.google_plus : t, {
                    name: "share_count",
                    hash: {},
                    data: s
                })) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' href='javascript:void(0);'>\n          Share\n        </a>\n        <a class='social-stub social-share linked_in no-track' data-href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-shares='" + e.escapeExpression((l.share_count || a && a.share_count || l.helperMissing).call(null != a ? a : {}, null != (t = null != a ? a.shares : a) ? t.linked_in : t, {
                    name: "share_count",
                    hash: {},
                    data: s
                })) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' href='javascript:void(0);'>\n          Share\n        </a>\n      </div>\n"
            },
            17: function(e, a) {
                return "<img src='" + e.escapeExpression(e.lambda(a, a)) + "' style='width:0px;height:0px;float:left;opacity:0;'>"
            },
            19: function() {
                return "    <div class='gpt-addendum'></div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<article class='quadratus content-lift sharable'>\n  <div class='ad-content'>\n    <div class='lead-image'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.playOverlay : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "      <a href='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.share : a) ? t.lead : t) ? t.url : t, a)) + "' target='" + e.escapeExpression((l.isBlank || a && a.isBlank || l.helperMissing).call(null != a ? a : {}, null != a ? a.mashableContent : a, {
                    name: "isBlank",
                    hash: {},
                    data: s
                })) + "'>\n        <img class='bigThumb' src='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.media : a) ? t[0] : t) ? t.image : t, a)) + "'>\n      </a>\n    </div>\n    " + (null != (t = l["if"].call(null != a ? a : {}, null != (t = null != a ? a.sponsorship : a) ? t.url : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.program(8, s, 0),
                    data: s
                })) ? t : "") + "\n\n    <div class='title'>\n      <a href='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.share : a) ? t.title : t) ? t.url : t, a)) + "' target='" + e.escapeExpression((l.isBlank || a && a.isBlank || l.helperMissing).call(null != a ? a : {}, null != a ? a.mashableContent : a, {
                    name: "isBlank",
                    hash: {},
                    data: s
                })) + "'>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "</a>\n      " + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.mashableContent : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(13, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n    </div>\n    <div class='lead-text'>" + (null != (i = null != (i = l.leadText || (null != a ? a.leadText : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "leadText",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</div>\n    <footer>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.shares : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "    </footer>\n    " + (null != (t = l.each.call(null != a ? a : {}, null != (t = null != a ? a.trackers : a) ? t.impression : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(17, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n\n    <div class='addl-tracking'></div>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.addendum : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(19, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "  </div>\n</article>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/units/content"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/units/gallery"] = Handlebars.template({
            1: function(e, a) {
                var l;
                return "      <div class='video-overlay' data-index='" + e.escapeExpression(e.lambda(null != (l = null != (l = null != a ? a.randomMedia : a) ? l[0] : l) ? l.index : l, a)) + "'></div>\n"
            },
            3: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.bloomOverride : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.program(6, s, 0),
                    data: s
                })) ? t : ""
            },
            4: function(e, a) {
                var l;
                return "      <div class='overlay bloom' data-index='" + e.escapeExpression(e.lambda(null != (l = null != (l = null != a ? a.randomMedia : a) ? l[0] : l) ? l.index : l, a)) + "'></div>\n"
            },
            6: function(e, a) {
                var l;
                return "      \n      <div class='overlay' data-index='" + e.escapeExpression(e.lambda(null != (l = null != (l = null != a ? a.randomMedia : a) ? l[0] : l) ? l.index : l, a)) + "'></div>\n      "
            },
            8: function(e, a) {
                var l;
                return "<img class='bigThumb' data-index='" + e.escapeExpression(e.lambda(null != (l = null != (l = null != a ? a.randomMedia : a) ? l[0] : l) ? l.index : l, a)) + "' src='" + e.escapeExpression(e.lambda(null != (l = null != (l = null != a ? a.randomMedia : a) ? l[0] : l) ? l.image : l, a)) + "'>\n"
            },
            10: function(e, a) {
                var l;
                return "      <img class='bigThumb' src='" + e.escapeExpression(e.lambda(null != (l = null != (l = null != a ? a.media : a) ? l[0] : l) ? l.image : l, a)) + "'>"
            },
            12: function(e, a, l, n, s) {
                var t;
                return "    <div class='thumbs'>\n      " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.randomizeUnit : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, s, 0),
                    inverse: e.program(15, s, 0),
                    data: s
                })) ? t : "") + "\n    </div>\n"
            },
            13: function(e, a) {
                var l;
                return "<img class='thumb' data-index='" + e.escapeExpression(e.lambda(null != (l = null != (l = null != a ? a.randomMedia : a) ? l[1] : l) ? l.index : l, a)) + "' src='" + e.escapeExpression(e.lambda(null != (l = null != (l = null != a ? a.randomMedia : a) ? l[1] : l) ? l.image : l, a)) + "'>\n      <img class='thumb' data-index='" + e.escapeExpression(e.lambda(null != (l = null != (l = null != a ? a.randomMedia : a) ? l[2] : l) ? l.index : l, a)) + "' src='" + e.escapeExpression(e.lambda(null != (l = null != (l = null != a ? a.randomMedia : a) ? l[2] : l) ? l.image : l, a)) + "'>\n      <img class='thumb' data-index='" + e.escapeExpression(e.lambda(null != (l = null != (l = null != a ? a.randomMedia : a) ? l[3] : l) ? l.index : l, a)) + "' src='" + e.escapeExpression(e.lambda(null != (l = null != (l = null != a ? a.randomMedia : a) ? l[3] : l) ? l.image : l, a)) + "'>\n"
            },
            15: function(e, a, l, n, s) {
                var t;
                return "      " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.isParsec : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(16, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n      <img class='thumb' data-index='1' src='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.media : a) ? t[1] : t) ? t.image : t, a)) + "'>\n      <img class='thumb' data-index='2' src='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.media : a) ? t[2] : t) ? t.image : t, a)) + "'>\n      <img class='thumb' data-index='3' src='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.media : a) ? t[3] : t) ? t.image : t, a)) + "'>"
            },
            16: function(e, a) {
                var l;
                return "<img class='thumb' data-index='0' src='" + e.escapeExpression(e.lambda(null != (l = null != (l = null != a ? a.media : a) ? l[0] : l) ? l.image : l, a)) + "'>"
            },
            18: function(e, a, l, n, s) {
                var t, i;
                return "    <div class='article-shares-links persistent'>\n      <a class='social-stub social-share no-count facebook no-track' data-href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' href='javascript:void(0);'>\n        Share\n      </a>\n      <a class='social-stub social-share no-count twitter no-track' data-href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-no-via='true' data-shorturl='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' data-twitter-handle='" + e.escapeExpression((i = null != (i = l.twitterHandle || (null != a ? a.twitterHandle : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterHandle",
                    hash: {},
                    data: s
                }) : i)) + "' href='javascript:void(0);'>\n        Tweet\n      </a>\n      <a class='social-stub social-share no-count google_plus no-track' data-href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-shares='" + e.escapeExpression((l.share_count || a && a.share_count || l.helperMissing).call(null != a ? a : {}, null != (t = null != a ? a.shares : a) ? t.google_plus : t, {
                    name: "share_count",
                    hash: {},
                    data: s
                })) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' href='javascript:void(0);'>\n        Share\n      </a>\n      <a class='social-stub social-share no-count pinterest no-track' data-description='" + (null != (t = e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) ? t : "") + "' data-href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-image='" + e.escapeExpression(e.lambda(null != (t = null != (t = null != a ? a.media : a) ? t[0] : t) ? t.image : t, a)) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' href='javascript:void(0);'></a>\n      <a class='social-stub social-share no-count linked_in no-track' data-href='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.url : t, a)) + "' data-title='" + e.escapeExpression(e.lambda(null != (t = null != a ? a.share : a) ? t.text : t, a)) + "' href='javascript:void(0);'>\n        Share\n      </a>\n    </div>\n"
            },
            20: function(e, a) {
                var l;
                return "<a class='sponsorship' href='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.url : l, a)) + "' target='_blank'>" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.text : l, a)) + "</a>\n"
            },
            22: function(e, a) {
                var l;
                return "      \n      <div class='sponsorship'>" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.text : l, a)) + "</div>\n"
            },
            24: function(e, a, l, n, s) {
                var t;
                return null != (t = l["if"].call(null != a ? a : {}, null != a ? a.credit : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(25, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : ""
            },
            25: function(e, a) {
                var l;
                return "<a class='view-on' href='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.credit : a) ? l.url : l, a)) + "' target='_blank'>SEE MORE</a>"
            },
            27: function(e, a) {
                return "<img src='" + e.escapeExpression(e.lambda(a, a)) + "' style='width:0px;height:0px;float:left'>"
            },
            29: function() {
                return "    <div class='gpt-addendum'></div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<article class='quadratus gallery-lift'>\n  <div class='ad-content'>\n    <div class='lead-image'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.playOverlay : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? t : "") + "\n      " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.randomizeUnit : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, s, 0),
                    inverse: e.program(10, s, 0),
                    data: s
                })) ? t : "") + "\n    </div>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.showThumbs : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + (null != (t = l.unless.call(null != a ? a : {}, null != a ? a.hideShareButtons : a, {
                    name: "unless",
                    hash: {},
                    fn: e.program(18, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "    \n    <footer>\n      <div class='title'>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n      <div class='lead-text'>" + (null != (i = null != (i = l.leadText || (null != a ? a.leadText : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "leadText",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</div>\n      " + (null != (t = l["if"].call(null != a ? a : {}, null != (t = null != a ? a.sponsorship : a) ? t.url : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(20, s, 0),
                    inverse: e.program(22, s, 0),
                    data: s
                })) ? t : "") + "      " + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.isParsec : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(24, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n    </footer>\n    " + (null != (t = l.each.call(null != a ? a : {}, null != (t = null != a ? a.trackers : a) ? t.impression : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(27, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n    \n    <div class='addl-tracking'></div>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.addendum : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(29, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "  </div>\n</article>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/units/gallery"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/units/sales_campaign"] = Handlebars.template({
            1: function(e, a) {
                return "<img src='" + e.escapeExpression(e.lambda(a, a)) + "' style='width:0px;height:0px;float:left'>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return '<article class=\'quadratus mash-sales-campaign-unit\'>\n  <div class=\'ad-content\'>\n    <div id="container" class="front-img">\n      <img src="' + e.escapeExpression((i = null != (i = l.imageSrc || (null != a ? a.imageSrc : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "imageSrc",
                    hash: {},
                    data: s
                }) : i)) + '">\n    </div>\n    <div id="container2" class="back-img">\n      <a href="' + e.escapeExpression((i = null != (i = l.adClickthrough || (null != a ? a.adClickthrough : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "adClickthrough",
                    hash: {},
                    data: s
                }) : i)) + '" target="_blank">\n        <img src="' + e.escapeExpression((i = null != (i = l.bgImageSrc || (null != a ? a.bgImageSrc : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "bgImageSrc",
                    hash: {},
                    data: s
                }) : i)) + '">\n      </a>\n    </div>\n  </div>\n  ' + (null != (t = l.each.call(null != a ? a : {}, null != (t = null != a ? a.trackers : a) ? t.impression : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n</article>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/units/sales_campaign"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/units/sponsored"] = Handlebars.template({
            1: function(e, a) {
                var l;
                return "<a class='image' href='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.logo : a) ? l.href : l, a)) + "' target='_blank'>\n    <img class='logo' src='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.logo : a) ? l.src : l, a)) + "'>\n  </a>"
            },
            3: function(e, a, l, n, s) {
                var t, i;
                return "    <div class='description'>" + (null != (i = null != (i = l.leadText || (null != a ? a.leadText : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "leadText",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</div>\n"
            },
            5: function(e, a) {
                return "<img src='" + e.escapeExpression(e.lambda(a, a)) + "' style='width:0px;height:0px'>"
            },
            7: function() {
                return "  <div class='gpt-addendum'></div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='quadratus sponsored-unit'>\n  " + (null != (t = l["if"].call(null != a ? a : {}, null != (t = null != a ? a.logo : a) ? t.href : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n  \n  <div class='textblock'>\n    <h1 class='sponsored'>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "</h1>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.leadText : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "  </div>\n  " + (null != (t = l.each.call(null != a ? a : {}, null != (t = null != a ? a.trackers : a) ? t.impression : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n  \n  <div class='clearfix'></div>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.addendum : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "</div>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/units/sponsored"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["quadratus/units/twitter"] = Handlebars.template({
            1: function(e, a) {
                return "<img src='" + e.escapeExpression(e.lambda(a, a)) + "' style='width:0px;height:0px'>"
            },
            3: function(e, a) {
                var l;
                return "<a class='sponsorship' href='" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.url : l, a)) + "' target='_blank'>" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.text : l, a)) + "</a>\n"
            },
            5: function(e, a) {
                var l;
                return "    \n    <div class='sponsorship'>" + e.escapeExpression(e.lambda(null != (l = null != a ? a.sponsorship : a) ? l.text : l, a)) + "</div>\n"
            },
            7: function(e, a, l, n, s) {
                var t;
                return "    <div class='tweetPic'>\n      <img src='" + e.escapeExpression((t = null != (t = l.leadImageSrc || (null != a ? a.leadImageSrc : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "leadImageSrc",
                    hash: {},
                    data: s
                }) : t)) + "'>\n    </div>\n"
            },
            9: function() {
                return "  <div class='gpt-addendum'></div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<article class='quadratus twitter-lift' id='tweet" + e.escapeExpression((i = null != (i = l.tweetId || (null != a ? a.tweetId : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "tweetId",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  <style>\n    #tweet" + e.escapeExpression((i = null != (i = l.tweetId || (null != a ? a.tweetId : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "tweetId",
                    hash: {},
                    data: s
                }) : i)) + " a.hashtag {\n          color: " + e.escapeExpression((i = null != (i = l.hashtagColor || (null != a ? a.hashtagColor : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "hashtagColor",
                    hash: {},
                    data: s
                }) : i)) + " !important;\n        }\n        #tweet" + e.escapeExpression((i = null != (i = l.tweetId || (null != a ? a.tweetId : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "tweetId",
                    hash: {},
                    data: s
                }) : i)) + " a.username {\n          color: " + e.escapeExpression((i = null != (i = l.usernameColor || (null != a ? a.usernameColor : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "usernameColor",
                    hash: {},
                    data: s
                }) : i)) + " !important;\n        }\n        #tweet" + e.escapeExpression((i = null != (i = l.tweetId || (null != a ? a.tweetId : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "tweetId",
                    hash: {},
                    data: s
                }) : i)) + " .lead-text {\n          color: " + e.escapeExpression((i = null != (i = l.textColor || (null != a ? a.textColor : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "textColor",
                    hash: {},
                    data: s
                }) : i)) + " !important;\n        }\n  </style>\n  <div class='ad-content'>\n    " + (null != (t = l.each.call(null != a ? a : {}, null != (t = null != a ? a.trackers : a) ? t.impression : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n    " + (null != (t = l["if"].call(null != a ? a : {}, null != (t = null != a ? a.sponsorship : a) ? t.url : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.program(5, s, 0),
                    data: s
                })) ? t : "") + "    \n    <h1 class='lead-text'>\n      <div class='openQuote'>&ldquo;</div>\n      " + (null != (i = null != (i = l.leadText || (null != a ? a.leadText : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "leadText",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "\n      \n      <div class='closeQuoteWrapper'>\n        <div class='closeQuote'>&rdquo;</div>\n      </div>\n    </h1>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.leadImageSrc : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "    \n    <div class='account-details'>\n      <a class='avatar' href='" + e.escapeExpression((i = null != (i = l.twitterAccountUrl || (null != a ? a.twitterAccountUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterAccountUrl",
                    hash: {},
                    data: s
                }) : i)) + "' style='background: url(\"" + e.escapeExpression((i = null != (i = l.twitterAvatarSrc || (null != a ? a.twitterAvatarSrc : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterAvatarSrc",
                    hash: {},
                    data: s
                }) : i)) + "\")' target='_blank'></a>\n      <a class='username' href='" + e.escapeExpression((i = null != (i = l.twitterAccountUrl || (null != a ? a.twitterAccountUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterAccountUrl",
                    hash: {},
                    data: s
                }) : i)) + "' target='_blank'>" + e.escapeExpression((i = null != (i = l.twitterName || (null != a ? a.twitterName : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterName",
                    hash: {},
                    data: s
                }) : i)) + "</a>\n      <a class='handle' href='" + e.escapeExpression((i = null != (i = l.twitterAccountUrl || (null != a ? a.twitterAccountUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterAccountUrl",
                    hash: {},
                    data: s
                }) : i)) + "' target='_blank'>@" + e.escapeExpression((i = null != (i = l.twitterHandle || (null != a ? a.twitterHandle : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterHandle",
                    hash: {},
                    data: s
                }) : i)) + "</a>\n    </div>\n    <footer>\n      <div class='twitter-follow'>\n        <a class='twitter-follow-button' data-show-count='false' href='https://twitter.com/" + e.escapeExpression((i = null != (i = l.twitterHandle || (null != a ? a.twitterHandle : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterHandle",
                    hash: {},
                    data: s
                }) : i)) + "'>\n          Follow @" + e.escapeExpression((i = null != (i = l.twitterName || (null != a ? a.twitterName : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "twitterName",
                    hash: {},
                    data: s
                }) : i)) + "\n        </a>\n      </div>\n      <div class='twitter-intents'>\n        <a class='twitter-reply' href='" + e.escapeExpression((i = null != (i = l.replyTweetUrl || (null != a ? a.replyTweetUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "replyTweetUrl",
                    hash: {},
                    data: s
                }) : i)) + "' target='_blank'></a>\n        <a class='twitter-retweet' href='" + e.escapeExpression((i = null != (i = l.retweetTweetUrl || (null != a ? a.retweetTweetUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "retweetTweetUrl",
                    hash: {},
                    data: s
                }) : i)) + "' target='_blank'></a>\n        <a class='twitter-favorite' href='" + e.escapeExpression((i = null != (i = l.favoriteTweetUrl || (null != a ? a.favoriteTweetUrl : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "favoriteTweetUrl",
                    hash: {},
                    data: s
                }) : i)) + "' target='_blank'></a>\n      </div>\n    </footer>\n  </div>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.addendum : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "</article>"
            },
            useData: !0
        }), this.Handlebars.templates["quadratus/units/twitter"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["search/search_header"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<ul>\n  <li>\n    <a href='#'>" + e.escapeExpression((t = null != (t = l.stories || (null != a ? a.stories : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "stories",
                    hash: {},
                    data: s
                }) : t)) + " Stories</a>\n  </li>\n  <li>\n    <a href='#'>" + e.escapeExpression((t = null != (t = l.topics || (null != a ? a.topics : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "topics",
                    hash: {},
                    data: s
                }) : t)) + " Topics</a>\n  </li>\n  <li>\n    <a href='#'>" + e.escapeExpression((t = null != (t = l.people || (null != a ? a.people : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "people",
                    hash: {},
                    data: s
                }) : t)) + " People</a>\n  </li>\n</ul>"
            },
            useData: !0
        }), this.Handlebars.templates["search/search_header"]
    }.call(this),
    function() {
        Handlebars.registerPartial("shared/_responsive_images", Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "<span data-q='" + e.escapeExpression((t = null != (t = l.query || (null != a ? a.query : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "query",
                    hash: {},
                    data: s
                }) : t)) + "' data-s='" + e.escapeExpression((t = null != (t = l.image || (null != a ? a.image : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "image",
                    hash: {},
                    data: s
                }) : t)) + "' data-z='" + e.escapeExpression((t = null != (t = l.size || (null != a ? a.size : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "size",
                    hash: {},
                    data: s
                }) : t)) + "'></span>"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<span class='_pf'>\n  " + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.responsive_images : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n</span>"
            },
            useData: !0
        }))
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["shared/loading"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function() {
                return "<div class='loading-dots'>\n  <span class='dot'></span>\n  <span class='dot'></span>\n  <span class='dot'></span>\n</div>"
            },
            useData: !0
        }), this.Handlebars.templates["shared/loading"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["topics/search_topic"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='topic-container'>\n  <article class='topic clearfix short' id='topic=" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "id",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <div class='topic-img-container'>\n      <a href='" + e.escapeExpression((i = null != (i = l.url || (null != a ? a.url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : i)) + "'>\n" + (null != (t = e.invokePartial(n["shared/_responsive_images"], a, {
                    name: "shared/_responsive_images",
                    data: s,
                    indent: "        ",
                    helpers: l,
                    partials: n,
                    decorators: e.decorators
                })) ? t : "") + "    </a>\n    </div>\n    <div class='topic-content-wrapper'>\n      <div class='topic-content'>\n        <div class='topic-name'>\n          <h2 class='title'><a href=\"" + e.escapeExpression((i = null != (i = l.url || (null != a ? a.url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : i)) + '">' + e.escapeExpression((i = null != (i = l.name || (null != a ? a.name : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "name",
                    hash: {},
                    data: s
                }) : i)) + "</a></h2>\n        </div>\n        <div class='topic-meta'>\n          <span class='topic-stories'>\n            " + e.escapeExpression((i = null != (i = l.posts_count || (null != a ? a.posts_count : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "posts_count",
                    hash: {},
                    data: s
                }) : i)) + '          Stories\n        </span>\n        </div>\n      </div>\n      <a class="btn btn-success" href="' + e.escapeExpression((i = null != (i = l.url || (null != a ? a.url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : i)) + '">Follow</a>  </div>\n  </article>\n</div>'
            },
            usePartial: !0,
            useData: !0
        }), this.Handlebars.templates["topics/search_topic"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["users/feed/post"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<article class='feed-tile feed-post'>\n  <a class='feed-post-image' href='" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <img src='" + e.escapeExpression((i = null != (i = l.image || (null != a ? a.image : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "image",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  </a>\n  <div class='feed-tile-inner'>\n    <a class=\"feed-source\" href=\"" + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + '">' + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "</a>\n    <section class='content'>\n      <div class='feed-post-body'>" + (null != (i = null != (i = l.excerpt || (null != a ? a.excerpt : a)) ? i : l.helperMissing, t = "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "excerpt",
                    hash: {},
                    data: s
                }) : i) ? t : "") + "</div>\n    </section>\n    <aside class='metadata'>\n      <time datetime='" + e.escapeExpression((i = null != (i = l.created_at || (null != a ? a.created_at : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "created_at",
                    hash: {},
                    data: s
                }) : i)) + "'>" + e.escapeExpression((i = null != (i = l.created_at || (null != a ? a.created_at : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "created_at",
                    hash: {},
                    data: s
                }) : i)) + "</time>\n    </aside>\n  </div>\n</article>"
            },
            useData: !0
        }), this.Handlebars.templates["users/feed/post"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["users/search_user"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<div class='user-container'>\n  <article class='user clearfix short' id='user-" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "id",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <div class='user-img-container'>\n      <a href='" + e.escapeExpression((i = null != (i = l.url || (null != a ? a.url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : i)) + "'>\n" + (null != (t = e.invokePartial(n["shared/_responsive_images"], a, {
                    name: "shared/_responsive_images",
                    data: s,
                    indent: "        ",
                    helpers: l,
                    partials: n,
                    decorators: e.decorators
                })) ? t : "") + "    </a>\n    </div>\n    <div class='user-content-wrapper'>\n      <div class='user-content'>\n        <div class='user-username'>\n          <h2 class='title'><a href=\"" + e.escapeExpression((i = null != (i = l.url || (null != a ? a.url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : i)) + '">' + e.escapeExpression((i = null != (i = l.display_name || (null != a ? a.display_name : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "display_name",
                    hash: {},
                    data: s
                }) : i)) + "</a></h2>\n        </div>\n        <div class='user-meta'>\n          <span class='user-shares'>\n            <i class='icon-share'></i>\n            " + e.escapeExpression((i = null != (i = l.shares_count || (null != a ? a.shares_count : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "shares_count",
                    hash: {},
                    data: s
                }) : i)) + '        </span>\n        </div>\n      </div>\n      <a class="btn btn-success" href="' + e.escapeExpression((i = null != (i = l.url || (null != a ? a.url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "url",
                    hash: {},
                    data: s
                }) : i)) + '">Follow</a>  </div>\n  </article>\n</div>'
            },
            usePartial: !0,
            useData: !0
        }), this.Handlebars.templates["users/search_user"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["users/unsubscribe_prompt"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function() {
                return "<div class='prompt'>\n  Are you sure you want to unsubscribe?\n</div>\n<form action=\"/subscriptions/optout/\" method=\"POST\">\n  <div class='buttons'>\n    <div class='unsubscribe'>Unsubscribe</div>\n    <div class='cancel'>Cancel</div>\n  </div>\n</form>"
            },
            useData: !0
        }), this.Handlebars.templates["users/unsubscribe_prompt"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["videos/current_video_shares"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<aside class='shares social'>\n  <div class='total-shares' data-index='0'>\n    <span>" + e.escapeExpression((t = null != (t = l.shares_count || (null != a ? a.shares_count : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "shares_count",
                    hash: {},
                    data: s
                }) : t)) + "</span>\n    <div class='caption'>Shares</div>\n  </div>\n  <div class='video-share-buttons'>\n    <div class='share-button-video'>\n      <a class='social-stub social-share facebook no-interrupt' data-href=\"#{default_protocol}://mashable.com/" + e.escapeExpression((t = null != (t = l.url_slug || (null != a ? a.url_slug : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url_slug",
                    hash: {},
                    data: s
                }) : t)) + "\" data-title='" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "' href='#'>Share on Facebook</a>\n    </div>\n    <div class='share-button-video'>\n      <a class='social-stub social-share twitter' data-href=\"#{default_protocol}://mashable.com/" + e.escapeExpression((t = null != (t = l.url_slug || (null != a ? a.url_slug : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url_slug",
                    hash: {},
                    data: s
                }) : t)) + "\" data-title='" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "' href='#'>Share on Twitter</a>\n    </div>\n    <div class='share-button-video'>\n      <a class='social-stub social-share google_plus' data-href=\"#{default_protocol}://mashable.com/" + e.escapeExpression((t = null != (t = l.url_slug || (null != a ? a.url_slug : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url_slug",
                    hash: {},
                    data: s
                }) : t)) + "\" data-title='" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "' href='#'></a>\n    </div>\n    <div class='share-button-video'>\n      <a class='social-stub social-share linked_in' data-href=\"#{default_protocol}://mashable.com/" + e.escapeExpression((t = null != (t = l.url_slug || (null != a ? a.url_slug : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url_slug",
                    hash: {},
                    data: s
                }) : t)) + "\" data-title='" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "' href='#'></a>\n    </div>\n    <div class='share-button-video'>\n      <a class='social-stub social-share stumble_upon' data-description='" + e.escapeExpression((t = null != (t = l.description || (null != a ? a.description : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "description",
                    hash: {},
                    data: s
                }) : t)) + "' data-href=\"#{default_protocol}://mashable.com/" + e.escapeExpression((t = null != (t = l.url_slug || (null != a ? a.url_slug : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url_slug",
                    hash: {},
                    data: s
                }) : t)) + "\" data-title='" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "' href='#'></a>\n    </div>\n    <div class='share-button-video'>\n      <a class='social-stub social-share pinterest no-interrupt' data-description='" + e.escapeExpression((t = null != (t = l.description || (null != a ? a.description : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "description",
                    hash: {},
                    data: s
                }) : t)) + "' data-href=\"#{default_protocol}://mashable.com/" + e.escapeExpression((t = null != (t = l.url_slug || (null != a ? a.url_slug : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "url_slug",
                    hash: {},
                    data: s
                }) : t)) + "\" data-image='" + e.escapeExpression((t = null != (t = l.thumbnail || (null != a ? a.thumbnail : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "thumbnail",
                    hash: {},
                    data: s
                }) : t)) + "' data-title='" + e.escapeExpression((t = null != (t = l.title || (null != a ? a.title : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : t)) + "' href='#'></a>\n    </div>\n  </div>\n</aside>"
            },
            useData: !0
        }), this.Handlebars.templates["videos/current_video_shares"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["videos/playlist"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t, i;
                return '  <li class="playlist-item' + (null != (t = l["if"].call(null != a ? a : {}, s && s.first, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + '" data-mediaid="' + e.escapeExpression((i = null != (i = l.mediaid || (null != a ? a.mediaid : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "mediaid",
                    hash: {},
                    data: s
                }) : i)) + '">\n    <a\n      class="playlist-item-link"\n      href="' + e.escapeExpression((i = null != (i = l.link || (null != a ? a.link : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "link",
                    hash: {},
                    data: s
                }) : i)) + '"\n      data-mediaid="' + e.escapeExpression((i = null != (i = l.mediaid || (null != a ? a.mediaid : a)) ? i : l.helperMissing,
                    "function" == typeof i ? i.call(null != a ? a : {}, {
                        name: "mediaid",
                        hash: {},
                        data: s
                    }) : i)) + '"\n    >\n      <img src="' + e.escapeExpression((i = null != (i = l.image || (null != a ? a.image : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "image",
                    hash: {},
                    data: s
                }) : i)) + '" />\n      <div class="playlist-item-title">' + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "</div>\n    </a>\n  </li>\n"
            },
            2: function() {
                return " active"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return '<ul class="playlist">\n' + (null != (t = l.each.call(null != a ? a : {}, null != a ? a.playlist : a, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "</ul>"
            },
            useData: !0
        }), this.Handlebars.templates["videos/playlist"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["videos/standalone_post"] = Handlebars.template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t;
                return "<span class='byline basic'>" + e.escapeExpression((t = null != (t = l.author || (null != a ? a.author : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "author",
                    hash: {},
                    data: s
                }) : t)) + "</span>\n<time class='article-date' datetime='" + e.escapeExpression((t = null != (t = l.post_date_rfc || (null != a ? a.post_date_rfc : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "post_date_rfc",
                    hash: {},
                    data: s
                }) : t)) + "'>" + e.escapeExpression((t = null != (t = l.post_date_rfc || (null != a ? a.post_date_rfc : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "post_date_rfc",
                    hash: {},
                    data: s
                }) : t)) + "</time>"
            },
            useData: !0
        }), this.Handlebars.templates["videos/standalone_post"]
    }.call(this),
    function() {
        return this.Handlebars.templates || (this.Handlebars.templates = {}), this.Handlebars.templates["videos/video"] = Handlebars.template({
            1: function(e, a, l, n, s) {
                var t;
                return "      <div class='video-logo-overlay'>\n        <img src='" + e.escapeExpression((t = null != (t = l.logo_overlay || (null != a ? a.logo_overlay : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "logo_overlay",
                    hash: {},
                    data: s
                }) : t)) + "'>\n      </div>\n"
            },
            3: function(e, a, l, n, s) {
                var t;
                return "      <div class='video-eyebrow'>" + e.escapeExpression((t = null != (t = l.video_channel || (null != a ? a.video_channel : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "video_channel",
                    hash: {},
                    data: s
                }) : t)) + "</div>\n"
            },
            5: function(e, a, l, n, s) {
                var t;
                return "      <div class='video-shares-date'>" + e.escapeExpression((t = null != (t = l.post_date_rfc || (null != a ? a.post_date_rfc : a)) ? t : l.helperMissing, "function" == typeof t ? t.call(null != a ? a : {}, {
                    name: "post_date_rfc",
                    hash: {},
                    data: s
                }) : t)) + "</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, a, l, n, s) {
                var t, i;
                return "<li class='video' data-author='" + e.escapeExpression((i = null != (i = l.author || (null != a ? a.author : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "author",
                    hash: {},
                    data: s
                }) : i)) + "' data-campaign='" + e.escapeExpression((i = null != (i = l.campaign || (null != a ? a.campaign : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "campaign",
                    hash: {},
                    data: s
                }) : i)) + "' data-description='" + e.escapeExpression((i = null != (i = l.description || (null != a ? a.description : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "description",
                    hash: {},
                    data: s
                }) : i)) + "' data-embed-url='" + e.escapeExpression((i = null != (i = l.embed_url || (null != a ? a.embed_url : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "embed_url",
                    hash: {},
                    data: s
                }) : i)) + "' data-guid='" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "id",
                    hash: {},
                    data: s
                }) : i)) + "' data-href='" + e.escapeExpression((i = null != (i = l.href || (null != a ? a.href : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "href",
                    hash: {},
                    data: s
                }) : i)) + "' data-id='" + e.escapeExpression((i = null != (i = l.id || (null != a ? a.id : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "id",
                    hash: {},
                    data: s
                }) : i)) + "' data-post-date-rfc='" + e.escapeExpression((i = null != (i = l.post_date_rfc || (null != a ? a.post_date_rfc : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "post_date_rfc",
                    hash: {},
                    data: s
                }) : i)) + "' data-shares-count='" + e.escapeExpression((i = null != (i = l.shares_count || (null != a ? a.shares_count : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "shares_count",
                    hash: {},
                    data: s
                }) : i)) + "' data-thumbnail='" + e.escapeExpression((i = null != (i = l.thumbnail || (null != a ? a.thumbnail : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "thumbnail",
                    hash: {},
                    data: s
                }) : i)) + "' data-title='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' data-url-slug='" + e.escapeExpression((i = null != (i = l.url_slug || (null != a ? a.url_slug : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "url_slug",
                    hash: {},
                    data: s
                }) : i)) + "'>\n  <a href='" + e.escapeExpression((i = null != (i = l.href || (null != a ? a.href : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "href",
                    hash: {},
                    data: s
                }) : i)) + "'>\n    <div class='video-thumb-wrap'>\n      <img alt='" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "' src='" + e.escapeExpression((i = null != (i = l.thumbnail || (null != a ? a.thumbnail : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "thumbnail",
                    hash: {},
                    data: s
                }) : i)) + "'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.logo_overlay : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "    </div>\n    <div class='play-button'></div>\n    <div class='video-meta'>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.video_channel : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "\n      <p>" + e.escapeExpression((i = null != (i = l.title || (null != a ? a.title : a)) ? i : l.helperMissing, "function" == typeof i ? i.call(null != a ? a : {}, {
                    name: "title",
                    hash: {},
                    data: s
                }) : i)) + "</p>\n" + (null != (t = l["if"].call(null != a ? a : {}, null != a ? a.shares_count : a, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? t : "") + "    </div>\n  </a>\n</li>"
            },
            useData: !0
        }), this.Handlebars.templates["videos/video"]
    }.call(this);