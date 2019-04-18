/*! airbrake-js v1.0.7 */ ! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Client = e() : (t.airbrakeJs = t.airbrakeJs || {}, t.airbrakeJs.Client = e())
}("undefined" != typeof self ? self : this, function() {
    return function(t) {
        function e(o) {
            if (r[o]) return r[o].exports;
            var n = r[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(n.exports, n, n.exports, e), n.l = !0, n.exports
        }
        var r = {};
        return e.m = t, e.c = r, e.d = function(t, r, o) {
            e.o(t, r) || Object.defineProperty(t, r, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, e.n = function(t) {
            var r = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(r, "a", r), r
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 3)
    }([function(t, e, r) {
        "use strict";

        function o(t) {
            return "function" == typeof fetch ? "fetch" : "function" == typeof XMLHttpRequest ? "xhr" : "object" == typeof window ? "jsonp" : "node"
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.detectReporter = o, e.errors = {
            unauthorized: new Error("airbrake: unauthorized: project id or key are wrong"),
            ipRateLimited: new Error("airbrake: IP is rate limited")
        }
    }, function(t, e, r) {
        "use strict";

        function o(t, e) {
            void 0 === e && (e = 64e3);
            var r = "";
            try {
                r = JSON.stringify(t)
            } catch (t) {}
            if ("" !== r && r.length < e) return r;
            if (t.errors)
                for (var o in t.errors) {
                    var i = new f;
                    t.errors[o] = i.truncate(t.errors[o])
                }
            for (var s = ["context", "params", "environment", "session"], a = 0; a < 8; a++) {
                for (var c = 0, u = s; c < u.length; c++) {
                    var p = u[c],
                        h = t[p];
                    h && (t[p] = n(h, a))
                }
                if (r = JSON.stringify(t), r.length < e) return r
            }
            var l = {
                json: r.slice(0, Math.floor(e / 2)) + "..."
            };
            s.push("errors");
            for (var d = 0, v = s; d < v.length; d++) {
                var p = v[d],
                    h = t[p];
                h && (r = JSON.stringify(h), l[p] = r.length)
            }
            var y = new Error("airbrake-js: notice exceeds max length and can't be truncated");
            throw y.params = l, y
        }

        function n(t, e) {
            var r = i(u, e),
                o = {},
                n = 0;
            for (var a in t)
                if (o[a] = s(t[a], e), ++n >= r) break;
            return o
        }

        function i(t, e) {
            return t >> e || 1
        }

        function s(t, e) {
            return new f(e).truncate(t)
        }

        function a(t, e) {
            try {
                return t[e]
            } catch (t) {
                return
            }
        }

        function c(t) {
            return Object.prototype.toString.apply(t).slice("[object ".length, -1)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var u = 128;
        e.default = o, e.truncate = s;
        var f = function() {
            function t(t) {
                void 0 === t && (t = 0), this.maxStringLength = 1024, this.maxObjectLength = u, this.maxArrayLength = u, this.maxDepth = 8, this.keys = [], this.seen = [], this.maxStringLength = i(this.maxStringLength, t), this.maxObjectLength = i(this.maxObjectLength, t), this.maxArrayLength = i(this.maxArrayLength, t), this.maxDepth = i(this.maxDepth, t)
            }
            return t.prototype.truncate = function(t, e, r) {
                if (void 0 === e && (e = ""), void 0 === r && (r = 0), null === t || void 0 === t) return t;
                switch (typeof t) {
                    case "boolean":
                    case "number":
                    case "function":
                        return t;
                    case "string":
                        return this.truncateString(t);
                    case "object":
                        break;
                    default:
                        return String(t)
                }
                if (t instanceof String) return this.truncateString(t.toString());
                if (t instanceof Boolean || t instanceof Number || t instanceof Date || t instanceof RegExp) return t;
                if (t instanceof Error) return t.toString();
                if (this.seen.indexOf(t) >= 0) return "[Circular " + this.getPath(t) + "]";
                var o = c(t);
                if (++r > this.maxDepth) return "[Truncated " + o + "]";
                switch (this.keys.push(e), this.seen.push(t), o) {
                    case "Array":
                        return this.truncateArray(t, r);
                    case "Object":
                        return this.truncateObject(t, r);
                    default:
                        var n = this.maxDepth;
                        this.maxDepth = 0;
                        var i = this.truncateObject(t, r);
                        return i.__type = o, this.maxDepth = n, i
                }
            }, t.prototype.getPath = function(t) {
                for (var e = this.seen.indexOf(t), r = [this.keys[e]], o = e; o >= 0; o--) {
                    var n = this.seen[o];
                    n && a(n, r[0]) === t && (t = n, r.unshift(this.keys[o]))
                }
                return "~" + r.join(".")
            }, t.prototype.truncateString = function(t) {
                return t.length > this.maxStringLength ? t.slice(0, this.maxStringLength) + "..." : t
            }, t.prototype.truncateArray = function(t, e) {
                void 0 === e && (e = 0);
                var r = 0,
                    o = [];
                for (var n in t) {
                    var i = t[n];
                    if (o.push(this.truncate(i, n, e)), ++r >= this.maxArrayLength) break
                }
                return o
            }, t.prototype.truncateObject = function(t, e) {
                void 0 === e && (e = 0);
                var r = 0,
                    o = {};
                for (var n in t) {
                    var i = a(t, n);
                    if (void 0 !== i && "function" != typeof i && (o[n] = this.truncate(i, n, e), ++r >= this.maxObjectLength)) break
                }
                return o
            }, t
        }()
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function() {
            function t(t) {
                this.onResolved = [], this.onRejected = [], this.onFinally = [], t && t(this.resolve.bind(this), this.reject.bind(this))
            }
            return t.all = function(e) {
                for (var r = new t, o = [], n = function(t) {
                        o.push(t), o.length === e.length && r.resolve(o)
                    }, i = !1, s = function(t) {
                        i || (i = !0, r.reject(t))
                    }, a = 0, c = e; a < c.length; a++) {
                    c[a].then(n, s)
                }
                return r
            }, t.prototype.then = function(t, e) {
                return t && (void 0 !== this.resolvedWith ? t(this.resolvedWith) : this.onResolved.push(t)), e && (void 0 !== this.rejectedWith ? e(this.rejectedWith) : this.onRejected.push(e)), this
            }, t.prototype.catch = function(t) {
                return void 0 !== this.rejectedWith ? t(this.rejectedWith) : this.onRejected.push(t), this
            }, t.prototype.finally = function(t) {
                return void 0 !== this.resolvedWith || void 0 !== this.rejectedWith ? t() : this.onFinally.push(t), this
            }, t.prototype.resolve = function(t) {
                if (void 0 !== this.resolvedWith || void 0 !== this.rejectedWith) throw new Error("Promise is already resolved or rejected");
                this.resolvedWith = t;
                for (var e = 0, r = this.onResolved; e < r.length; e++) {
                    (0, r[e])(t)
                }
                return this.callOnFinally(), this
            }, t.prototype.reject = function(t) {
                if (void 0 !== this.resolvedWith || void 0 !== this.rejectedWith) throw new Error("Promise is already resolved or rejected");
                this.rejectedWith = t;
                for (var e = 0, r = this.onRejected; e < r.length; e++) {
                    (0, r[e])(t)
                }
                return this.callOnFinally(), this
            }, t.prototype.callOnFinally = function() {
                for (var t = 0, e = this.onFinally; t < e.length; t++) {
                    (0, e[t])()
                }
            }, t
        }();
        e.Promise = o, e.default = o
    }, function(t, e, r) {
        r(4), t.exports = r(5)
    }, function(t, e) {
        Object.assign || (Object.assign = function(t) {
            for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            for (var o = 0, n = e; o < n.length; o++) {
                var i = n[o];
                ! function(e) {
                    e && Object.keys(e).forEach(function(r) {
                        return t[r] = e[r]
                    })
                }(i)
            }
            return t
        })
    }, function(t, e, r) {
        "use strict";
        var o = r(2),
            n = r(6),
            i = r(9),
            s = r(10),
            a = r(11),
            c = r(12),
            u = r(13),
            f = r(14),
            p = r(0),
            h = r(15),
            l = r(16),
            d = r(17),
            v = r(18),
            y = r(19),
            m = function() {
                function t(t) {
                    void 0 === t && (t = {});
                    var e = this;
                    this.opts = {}, this.reporters = [], this.filters = [], this.offline = !1, this.errors = [], this.opts = t, this.opts.host = this.opts.host || "https://api.airbrake.io", this.opts.timeout = this.opts.timeout || 1e4, this.processor = t.processor || n.default, this.addReporter(t.reporter || p.detectReporter(t)), this.addFilter(i.default), this.addFilter(s.default()), this.addFilter(a.default), this.addFilter(c.default), "object" == typeof window ? (this.addFilter(u.default), window.addEventListener && (window.addEventListener("online", this.onOnline.bind(this)), window.addEventListener("offline", function() {
                        return e.offline = !0
                    }))) : this.addFilter(f.default), y.historian.registerNotifier(this)
                }
                return t.prototype.setProject = function(t, e) {
                    this.opts.projectId = t, this.opts.projectKey = e
                }, t.prototype.setHost = function(t) {
                    this.opts.host = t
                }, t.prototype.addReporter = function(t) {
                    var e;
                    switch (t) {
                        case "fetch":
                            e = h.default;
                            break;
                        case "node":
                            e = l.default;
                            break;
                        case "xhr":
                            e = d.default;
                            break;
                        case "jsonp":
                            e = v.default;
                            break;
                        default:
                            e = t
                    }
                    this.reporters.push(e)
                }, t.prototype.addFilter = function(t) {
                    this.filters.push(t)
                }, t.prototype.notify = function(t) {
                    var e = this;
                    "object" == typeof t && void 0 !== t.error || (t = {
                        error: t
                    });
                    var r = t.promise || new o.default;
                    if (!t.error) {
                        var n = new Error("airbrake-js: got err=" + JSON.stringify(t.error) + ", wanted an Error");
                        return r.reject(n), r
                    }
                    if (this.opts.ignoreWindowError && t.context && t.context.windowError) {
                        var n = new Error("airbrake-js: window error is ignored");
                        return r.reject(n), r
                    }
                    if (this.offline) return t.promise = r, this.errors.push(t), this.errors.length > 100 && this.errors.slice(-100), r;
                    var i = {
                            id: "",
                            errors: [],
                            context: Object.assign({
                                language: "JavaScript",
                                severity: "error",
                                notifier: {
                                    name: "airbrake-js",
                                    version: "1.0.7",
                                    url: "https://github.com/airbrake/airbrake-js"
                                }
                            }, t.context),
                            params: t.params || {},
                            environment: t.environment || {},
                            session: t.session || {}
                        },
                        s = y.getHistory();
                    return s.length > 0 && (i.context.history = s), this.processor(t.error, function(t, o) {
                        i.errors.push(o);
                        for (var n = 0, s = e.filters; n < s.length; n++) {
                            var a = s[n],
                                c = a(i);
                            if (null === c) return void r.reject(new Error("airbrake-js: error is filtered"));
                            i = c
                        }
                        for (var u = 0, f = e.reporters; u < f.length; u++) {
                            (0, f[u])(i, e.opts, r)
                        }
                    }), r
                }, t.prototype.wrap = function(t) {
                    if (t._airbrake) return t;
                    var e = this,
                        r = function() {
                            var r = Array.prototype.slice.call(arguments),
                                o = e.wrapArguments(r);
                            try {
                                return t.apply(this, o)
                            } catch (t) {
                                throw e.notify({
                                    error: t,
                                    params: {
                                        arguments: r
                                    }
                                }), y.historian.ignoreNextWindowError(), t
                            }
                        };
                    for (var o in t) t.hasOwnProperty(o) && (r[o] = t[o]);
                    return r._airbrake = !0, r.inner = t, r
                }, t.prototype.wrapArguments = function(t) {
                    for (var e in t) {
                        var r = t[e];
                        "function" == typeof r && (t[e] = this.wrap(r))
                    }
                    return t
                }, t.prototype.call = function(t) {
                    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                    return this.wrap(t).apply(this, Array.prototype.slice.call(arguments, 1))
                }, t.prototype.onerror = function() {
                    y.historian.onerror.apply(y.historian, arguments)
                }, t.prototype.onOnline = function() {
                    this.offline = !1;
                    for (var t = 0, e = this.errors; t < e.length; t++) {
                        var r = e[t];
                        this.notify(r)
                    }
                    this.errors = []
                }, t
            }();
        t.exports = m
    }, function(t, e, r) {
        "use strict";

        function o(t) {
            try {
                return i.parse(t)
            } catch (e) {
                s && t.stack && console.warn("ErrorStackParser:", e.toString(), t.stack)
            }
            return t.fileName ? [t] : []
        }

        function n(t, e) {
            var r = [];
            if (!t.noStack) {
                var n = o(t);
                if (0 === n.length) try {
                    throw new Error("fake")
                } catch (t) {
                    n = o(t), n.shift(), n.shift()
                }
                for (var i = 0, s = n; i < s.length; i++) {
                    var a = s[i];
                    r.push({
                        function: a.functionName || "",
                        file: a.fileName || "",
                        line: a.lineNumber || 0,
                        column: a.columnNumber || 0
                    })
                }
            }
            var c;
            c = t.name ? t.name : "";
            var u;
            u = t.message ? String(t.message) : String(t), e("stacktracejs", {
                type: c,
                message: u,
                backtrace: r
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = r(7),
            s = "object" == typeof console && console.warn;
        e.default = n
    }, function(t, e, r) {
        var o = !1;
        ! function(e, n) {
            "use strict";
            "function" == typeof o && o.amd ? o("error-stack-parser", ["stackframe"], n) : t.exports = n(r(8))
        }(0, function(t) {
            "use strict";
            var e = /(^|@)\S+\:\d+/,
                r = /^\s*at .*(\S+\:\d+|\(native\))/m,
                o = /^(eval@)?(\[native code\])?$/;
            return {
                parse: function(t) {
                    if (void 0 !== t.stacktrace || void 0 !== t["opera#sourceloc"]) return this.parseOpera(t);
                    if (t.stack && t.stack.match(r)) return this.parseV8OrIE(t);
                    if (t.stack) return this.parseFFOrSafari(t);
                    throw new Error("Cannot parse given Error object")
                },
                extractLocation: function(t) {
                    if (-1 === t.indexOf(":")) return [t];
                    var e = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/,
                        r = e.exec(t.replace(/[\(\)]/g, ""));
                    return [r[1], r[2] || void 0, r[3] || void 0]
                },
                parseV8OrIE: function(e) {
                    return e.stack.split("\n").filter(function(t) {
                        return !!t.match(r)
                    }, this).map(function(e) {
                        e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                        var r = e.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1),
                            o = this.extractLocation(r.pop()),
                            n = r.join(" ") || void 0,
                            i = ["eval", "<anonymous>"].indexOf(o[0]) > -1 ? void 0 : o[0];
                        return new t({
                            functionName: n,
                            fileName: i,
                            lineNumber: o[1],
                            columnNumber: o[2],
                            source: e
                        })
                    }, this)
                },
                parseFFOrSafari: function(e) {
                    return e.stack.split("\n").filter(function(t) {
                        return !t.match(o)
                    }, this).map(function(e) {
                        if (e.indexOf(" > eval") > -1 && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), -1 === e.indexOf("@") && -1 === e.indexOf(":")) return new t({
                            functionName: e
                        });
                        var r = e.split("@"),
                            o = this.extractLocation(r.pop()),
                            n = r.join("@") || void 0;
                        return new t({
                            functionName: n,
                            fileName: o[0],
                            lineNumber: o[1],
                            columnNumber: o[2],
                            source: e
                        })
                    }, this)
                },
                parseOpera: function(t) {
                    return !t.stacktrace || t.message.indexOf("\n") > -1 && t.message.split("\n").length > t.stacktrace.split("\n").length ? this.parseOpera9(t) : t.stack ? this.parseOpera11(t) : this.parseOpera10(t)
                },
                parseOpera9: function(e) {
                    for (var r = /Line (\d+).*script (?:in )?(\S+)/i, o = e.message.split("\n"), n = [], i = 2, s = o.length; i < s; i += 2) {
                        var a = r.exec(o[i]);
                        a && n.push(new t({
                            fileName: a[2],
                            lineNumber: a[1],
                            source: o[i]
                        }))
                    }
                    return n
                },
                parseOpera10: function(e) {
                    for (var r = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, o = e.stacktrace.split("\n"), n = [], i = 0, s = o.length; i < s; i += 2) {
                        var a = r.exec(o[i]);
                        a && n.push(new t({
                            functionName: a[3] || void 0,
                            fileName: a[2],
                            lineNumber: a[1],
                            source: o[i]
                        }))
                    }
                    return n
                },
                parseOpera11: function(r) {
                    return r.stack.split("\n").filter(function(t) {
                        return !!t.match(e) && !t.match(/^Error created at/)
                    }, this).map(function(e) {
                        var r, o = e.split("@"),
                            n = this.extractLocation(o.pop()),
                            i = o.shift() || "",
                            s = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                        i.match(/\(([^\)]*)\)/) && (r = i.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                        var a = void 0 === r || "[arguments not available]" === r ? void 0 : r.split(",");
                        return new t({
                            functionName: s,
                            args: a,
                            fileName: n[0],
                            lineNumber: n[1],
                            columnNumber: n[2],
                            source: e
                        })
                    }, this)
                }
            }
        })
    }, function(t, e, r) {
        var o = !1;
        ! function(e, r) {
            "use strict";
            "function" == typeof o && o.amd ? o("stackframe", [], r) : t.exports = r()
        }(0, function() {
            "use strict";

            function t(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }

            function e(t) {
                return t.charAt(0).toUpperCase() + t.substring(1)
            }

            function r(t) {
                return function() {
                    return this[t]
                }
            }

            function o(t) {
                if (t instanceof Object)
                    for (var r = 0; r < c.length; r++) t.hasOwnProperty(c[r]) && void 0 !== t[c[r]] && this["set" + e(c[r])](t[c[r]])
            }
            var n = ["isConstructor", "isEval", "isNative", "isToplevel"],
                i = ["columnNumber", "lineNumber"],
                s = ["fileName", "functionName", "source"],
                a = ["args"],
                c = n.concat(i, s, a);
            o.prototype = {
                getArgs: function() {
                    return this.args
                },
                setArgs: function(t) {
                    if ("[object Array]" !== Object.prototype.toString.call(t)) throw new TypeError("Args must be an Array");
                    this.args = t
                },
                getEvalOrigin: function() {
                    return this.evalOrigin
                },
                setEvalOrigin: function(t) {
                    if (t instanceof o) this.evalOrigin = t;
                    else {
                        if (!(t instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                        this.evalOrigin = new o(t)
                    }
                },
                toString: function() {
                    return (this.getFunctionName() || "{anonymous}") + "(" + (this.getArgs() || []).join(",") + ")" + (this.getFileName() ? "@" + this.getFileName() : "") + (t(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (t(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "")
                }
            };
            for (var u = 0; u < n.length; u++) o.prototype["get" + e(n[u])] = r(n[u]), o.prototype["set" + e(n[u])] = function(t) {
                return function(e) {
                    this[t] = Boolean(e)
                }
            }(n[u]);
            for (var f = 0; f < i.length; f++) o.prototype["get" + e(i[f])] = r(i[f]), o.prototype["set" + e(i[f])] = function(e) {
                return function(r) {
                    if (!t(r)) throw new TypeError(e + " must be a Number");
                    this[e] = Number(r)
                }
            }(i[f]);
            for (var p = 0; p < s.length; p++) o.prototype["get" + e(s[p])] = r(s[p]), o.prototype["set" + e(s[p])] = function(t) {
                return function(e) {
                    this[t] = String(e)
                }
            }(s[p]);
            return o
        })
    }, function(t, e, r) {
        "use strict";

        function o(t) {
            var e = t.errors[0];
            if ("" === e.type && -1 !== n.indexOf(e.message)) return null;
            if (e.backtrace && e.backtrace.length > 0) {
                if ("<anonymous>" === e.backtrace[0].file) return null
            }
            return t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = ["Script error", "Script error.", "InvalidAccessError"];
        e.default = o
    }, function(t, e, r) {
        "use strict";

        function o() {
            var t, e;
            return function(r) {
                var o = JSON.stringify(r.errors);
                return o === t ? null : (e && clearTimeout(e), t = o, e = setTimeout(function() {
                    t = ""
                }, 1e3), r)
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = o
    }, function(t, e, r) {
        "use strict";

        function o(t) {
            var e = t.errors[0];
            if ("" !== e.type && "Error" !== e.type) return t;
            var r = e.message.match(n);
            return null !== r && (e.type = r[1], e.message = r[2]), t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = new RegExp(["^", "Uncaught\\s", "(.+?)", ":\\s", "(.+)", "$"].join(""));
        e.default = o
    }, function(t, e, r) {
        "use strict";

        function o(t) {
            var e = t.errors[0];
            if ("" !== e.type && "Error" !== e.type) return t;
            var r = e.message.match(n);
            return null !== r && (e.type = r[1], e.message = r[2]), t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = new RegExp(["^", "\\[(\\$.+)\\]", "\\s", "([\\s\\S]+)", "$"].join(""));
        e.default = o
    }, function(t, e, r) {
        "use strict";

        function o(t) {
            return window.navigator && window.navigator.userAgent && (t.context.userAgent = window.navigator.userAgent), window.location && (t.context.url = String(window.location), t.context.rootDirectory = window.location.protocol + "//" + window.location.host), t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = o
    }, function(module, exports, __webpack_require__) {
        "use strict";

        function filter(t) {
            if (os && (t.context.os = os.type() + "/" + os.release(), t.context.architecture = os.arch(), t.context.hostname = os.hostname()), myProcess) {
                t.context.platform = myProcess.platform, t.context.rootDirectory || (t.context.rootDirectory = myProcess.cwd()), myProcess.env.NODE_ENV && (t.context.environment = myProcess.env.NODE_ENV), t.params.process = {
                    pid: myProcess.pid,
                    cwd: myProcess.cwd(),
                    execPath: myProcess.execPath,
                    argv: myProcess.argv
                };
                for (var e in ["uptime", "cpuUsage", "memoryUsage"]) myProcess[e] && (t.params.process[e] = myProcess[e]())
            }
            return os && (t.params.os = {
                homedir: os.homedir(),
                uptime: os.uptime(),
                freemem: os.freemem(),
                totalmem: os.totalmem(),
                loadavg: os.loadavg()
            }), t
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var myProcess, os;
        try {
            myProcess = eval("process"), os = eval("require")("os")
        } catch (t) {}
        exports.default = filter
    }, function(t, e, r) {
        "use strict";

        function o(t, e, r) {
            if (Date.now() / 1e3 < s) return void r.reject(i.errors.ipRateLimited);
            var o = e.host + "/api/v3/projects/" + e.projectId + "/notices?key=" + e.projectKey,
                a = n.default(t),
                c = {
                    method: "POST",
                    body: a
                };
            fetch(o, c).then(function(e) {
                if (401 === e.status) return void r.reject(i.errors.unauthorized);
                if (429 === e.status) {
                    r.reject(i.errors.ipRateLimited);
                    var o = e.headers.get("X-RateLimit-Delay");
                    if (!o) return;
                    var n = parseInt(o, 10);
                    return void(n > 0 && (s = Date.now() / 1e3 + n))
                }
                if (e.status >= 200 && e.status < 500) return void e.json().then(function(e) {
                    if (e.id) return t.id = e.id, void r.resolve(t);
                    if (e.message) {
                        var o = new Error(e.message);
                        return void r.reject(o)
                    }
                });
                e.text().then(function(t) {
                    var o = new Error("airbrake: fetch: unexpected response: code=" + e.status + " body='" + t + "'");
                    r.reject(o)
                })
            }).catch(function(t) {
                r.reject(t)
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            i = r(0),
            s = 0;
        e.default = o
    }, function(module, exports, __webpack_require__) {
        "use strict";

        function report(t, e, r) {
            if (Date.now() / 1e3 < rateLimitReset) return void r.reject(reporter_1.errors.ipRateLimited);
            var o = e.host + "/api/v3/projects/" + e.projectId + "/notices?key=" + e.projectKey,
                n = jsonify_notice_1.default(t);
            request({
                url: o,
                method: "POST",
                body: n,
                headers: {
                    "content-type": "application/json"
                },
                timeout: e.timeout
            }, function(e, o, n) {
                if (e) return void r.reject(e);
                if (!o.statusCode) return void r.reject(new Error("airbrake: node: statusCode is undefined"));
                if (401 === o.statusCode) return void r.reject(reporter_1.errors.unauthorized);
                if (429 === o.statusCode) {
                    r.reject(reporter_1.errors.ipRateLimited);
                    var i = o.headers["x-ratelimit-delay"];
                    if (!i) return;
                    var s = void 0;
                    if ("string" == typeof i) s = i;
                    else {
                        if (!(i instanceof Array)) return;
                        s = i[0]
                    }
                    var a = parseInt(s, 10);
                    return void(a > 0 && (rateLimitReset = Date.now() / 1e3 + a))
                }
                if (o.statusCode >= 200 && o.statusCode < 500) {
                    var c = JSON.parse(n);
                    if (c.id) return t.id = c.id, void r.resolve(t);
                    if (c.message) {
                        var u = new Error(c.message);
                        return void r.reject(u)
                    }
                }
                n = n.trim();
                var f = new Error("airbrake: node: unexpected response: code=" + o.statusCode + " body='" + n + "'");
                r.reject(f)
            })
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var jsonify_notice_1 = __webpack_require__(1),
            reporter_1 = __webpack_require__(0),
            request;
        try {
            request = eval("require")("request")
        } catch (t) {}
        var rateLimitReset = 0;
        exports.default = report
    }, function(t, e, r) {
        "use strict";

        function o(t, e, r) {
            if (Date.now() / 1e3 < s) return void r.reject(i.errors.ipRateLimited);
            var o = e.host + "/api/v3/projects/" + e.projectId + "/notices?key=" + e.projectKey,
                a = n.default(t),
                c = new XMLHttpRequest;
            c.open("POST", o, !0), c.timeout = e.timeout, c.onreadystatechange = function() {
                if (4 === c.readyState) {
                    if (401 === c.status) return void r.reject(i.errors.unauthorized);
                    if (429 === c.status) {
                        r.reject(i.errors.ipRateLimited);
                        var e = c.getResponseHeader("X-RateLimit-Delay");
                        if (!e) return;
                        var o = parseInt(e, 10);
                        return void(o > 0 && (s = Date.now() / 1e3 + o))
                    }
                    if (c.status >= 200 && c.status < 500) {
                        var n = JSON.parse(c.responseText);
                        if (n.id) return t.id = n.id, void r.resolve(t);
                        if (n.message) {
                            var a = new Error(n.message);
                            return void r.reject(a)
                        }
                    }
                    var u = c.responseText.trim(),
                        f = new Error("airbrake: xhr: unexpected response: code=" + c.status + " body='" + u + "'");
                    r.reject(f)
                }
            }, c.send(a)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            i = r(0),
            s = 0;
        e.default = o
    }, function(t, e, r) {
        "use strict";

        function o(t, e, r) {
            i++;
            var o = "airbrakeCb" + String(i);
            window[o] = function(e) {
                try {
                    delete window[o]
                } catch (t) {
                    window[o] = void 0
                }
                if (e.id) return t.id = e.id, void r.resolve(t);
                if (e.message) {
                    var n = new Error(e.message);
                    return void r.reject(n)
                }
                var i = new Error(e);
                r.reject(i)
            };
            var s = encodeURIComponent(n.default(t)),
                a = e.host + "/api/v3/projects/" + e.projectId + "/create-notice?key=" + e.projectKey + "&callback=" + o + "&body=" + s,
                c = window.document,
                u = c.getElementsByTagName("head")[0],
                f = c.createElement("script");
            f.src = a, f.onload = function() {
                return u.removeChild(f)
            }, f.onerror = function() {
                u.removeChild(f);
                var t = new Error("airbrake: JSONP script error");
                r.reject(t)
            }, u.appendChild(f)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(1),
            i = 0;
        e.default = o
    }, function(module, exports, __webpack_require__) {
        "use strict";

        function getHistory() {
            return exports.historian.getHistory()
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var promise_1 = __webpack_require__(2),
            dom_1 = __webpack_require__(20),
            Historian = function() {
                function Historian() {
                    var _this = this;
                    if (this.historyMaxLen = 20, this.notifiers = [], this.errors = [], this.ignoreWindowError = 0, this.history = [], this.ignoreNextXHR = 0, "object" == typeof console && console.error && (this.consoleError = console.error), "object" == typeof window) {
                        var self_1 = this,
                            oldHandler_1 = window.onerror;
                        window.onerror = function() {
                            oldHandler_1 && oldHandler_1.apply(this, arguments), self_1.onerror.apply(self_1, arguments)
                        }, this.domEvents(), "function" == typeof fetch && this.fetch(), "object" == typeof history && this.location()
                    }
                    var p;
                    try {
                        p = eval("process")
                    } catch (t) {}
                    "object" == typeof p && "function" == typeof p.on && (p.on("uncaughtException", function(t) {
                        _this.notify(t).finally(function() {
                            1 === p.listeners("uncaughtException").length && (_this.consoleError && _this.consoleError("uncaught exception", t), p.exit(1))
                        })
                    }), p.on("unhandledRejection", function(t, e) {
                        _this.notify(t)
                    })), "object" == typeof console && this.console(), "undefined" != typeof XMLHttpRequest && this.xhr()
                }
                return Historian.prototype.registerNotifier = function(t) {
                    this.notifiers.push(t);
                    for (var e = 0, r = this.errors; e < r.length; e++) {
                        var o = r[e];
                        this.notifyNotifiers(o)
                    }
                    this.errors = []
                }, Historian.prototype.notify = function(t) {
                    return this.notifiers.length > 0 ? this.notifyNotifiers(t) : (this.errors.push(t), this.errors.length > this.historyMaxLen && (this.errors = this.errors.slice(-this.historyMaxLen)), (new promise_1.Promise).resolve(null))
                }, Historian.prototype.notifyNotifiers = function(t) {
                    for (var e = [], r = 0, o = this.notifiers; r < o.length; r++) {
                        var n = o[r];
                        e.push(n.notify(t))
                    }
                    return promise_1.Promise.all(e)
                }, Historian.prototype.onerror = function(t, e, r, o, n) {
                    if (!(this.ignoreWindowError > 0)) return n ? void this.notify({
                        error: n,
                        context: {
                            windowError: !0
                        }
                    }) : void(e && r && this.notify({
                        error: {
                            message: t,
                            fileName: e,
                            lineNumber: r,
                            columnNumber: o,
                            noStack: !0
                        },
                        context: {
                            windowError: !0
                        }
                    }))
                }, Historian.prototype.ignoreNextWindowError = function() {
                    var t = this;
                    this.ignoreWindowError++, setTimeout(function() {
                        return t.ignoreWindowError--
                    })
                }, Historian.prototype.getHistory = function() {
                    return this.history
                }, Historian.prototype.pushHistory = function(t) {
                    if (this.isDupState(t)) return void(this.lastState.num ? this.lastState.num++ : this.lastState.num = 2);
                    t.date || (t.date = new Date), this.history.push(t), this.lastState = t, this.history.length > this.historyMaxLen && (this.history = this.history.slice(-this.historyMaxLen))
                }, Historian.prototype.isDupState = function(t) {
                    if (!this.lastState) return !1;
                    for (var e in t)
                        if ("date" !== e && t[e] !== this.lastState[e]) return !1;
                    return !0
                }, Historian.prototype.domEvents = function() {
                    var t = dom_1.makeEventHandler(this);
                    window.addEventListener && (window.addEventListener("load", t), window.addEventListener("error", function(e) {
                        "error" in e || t(e)
                    }, !0)), "object" == typeof document && document.addEventListener && (document.addEventListener("DOMContentLoaded", t), document.addEventListener("click", t), document.addEventListener("keypress", t))
                }, Historian.prototype.console = function() {
                    for (var t = this, e = ["debug", "log", "info", "warn", "error"], r = 0, o = e; r < o.length; r++) {
                        var n = o[r];
                        ! function(e) {
                            if (!(e in console)) return "continue";
                            var r = console[e],
                                o = function() {
                                    r.apply(console, arguments), t.pushHistory({
                                        type: "log",
                                        severity: e,
                                        arguments: Array.prototype.slice.call(arguments)
                                    })
                                };
                            o.inner = r, console[e] = o
                        }(n)
                    }
                }, Historian.prototype.fetch = function() {
                    var t = this,
                        e = fetch;
                    window.fetch = function(r, o) {
                        var n = {
                            type: "xhr",
                            date: new Date
                        };
                        n.url = "string" == typeof r ? r : r.url, o && o.method ? n.method = o.method : n.method = "GET", t.ignoreNextXHR++, setTimeout(function() {
                            return t.ignoreNextXHR--
                        });
                        var i = e.apply(this, arguments);
                        return i.then(function(e) {
                            n.statusCode = e.status, n.duration = (new Date).getTime() - n.date.getTime(), t.pushHistory(n)
                        }), i
                    }
                }, Historian.prototype.xhr = function() {
                    var t = this,
                        e = XMLHttpRequest.prototype.open;
                    XMLHttpRequest.prototype.open = function(r, o, n, i, s) {
                        0 === t.ignoreNextXHR && (this.__state = {
                            type: "xhr",
                            method: r,
                            url: o
                        }), e.apply(this, arguments)
                    };
                    var r = XMLHttpRequest.prototype.send;
                    XMLHttpRequest.prototype.send = function(e) {
                        var o = this.onreadystatechange;
                        return this.onreadystatechange = function(e) {
                            if (4 === this.readyState && this.__state && t.recordReq(this), o) return o.apply(this, arguments)
                        }, this.__state && (this.__state.date = new Date), r.apply(this, arguments)
                    }
                }, Historian.prototype.recordReq = function(t) {
                    var e = t.__state;
                    e.statusCode = t.status, e.duration = (new Date).getTime() - e.date.getTime(), this.pushHistory(e)
                }, Historian.prototype.location = function() {
                    this.lastLocation = document.location.pathname;
                    var t = this,
                        e = window.onpopstate;
                    window.onpopstate = function(r) {
                        if (t.recordLocation(document.location.pathname), e) return e.apply(this, arguments)
                    };
                    var r = history.pushState;
                    history.pushState = function(e, o, n) {
                        n && t.recordLocation(n.toString()), r.apply(this, arguments)
                    }
                }, Historian.prototype.recordLocation = function(t) {
                    var e = t.indexOf("://");
                    e >= 0 ? (t = t.slice(e + 3), e = t.indexOf("/"), t = e >= 0 ? t.slice(e) : "/") : "/" !== t.charAt(0) && (t = "/" + t), this.pushHistory({
                        type: "location",
                        from: this.lastLocation,
                        to: t
                    }), this.lastLocation = t
                }, Historian
            }();
        exports.default = Historian, exports.historian = new Historian, exports.getHistory = getHistory
    }, function(t, e, r) {
        "use strict";

        function o(t) {
            if (!t) return "";
            var e = [];
            if (t.tagName && e.push(t.tagName.toLowerCase()), t.id && (e.push("#"), e.push(t.id)), t.className && (e.push("."), e.push(t.className.split(" ").join("."))), t.getAttribute)
                for (var r = 0, o = s; r < o.length; r++) {
                    var n = o[r],
                        i = t.getAttribute(n);
                    i && e.push("[" + n + '="' + i + '"]')
                }
            return e.join("")
        }

        function n(t) {
            for (var e = [], r = t; r;) {
                var n = o(r);
                if ("" !== n && (e.push(n), e.length > 10)) break;
                r = r.parentNode
            }
            return 0 === e.length ? String(t) : e.reverse().join(" > ")
        }

        function i(t) {
            return function(e) {
                var r;
                try {
                    r = e.target
                } catch (t) {
                    return
                }
                if (r) {
                    var o = {
                        type: e.type
                    };
                    try {
                        o.target = n(r)
                    } catch (t) {
                        o.target = "<" + t.toString() + ">"
                    }
                    t.pushHistory(o)
                }
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = ["type", "name", "src"];
        e.makeEventHandler = i
    }])
});
//# sourceMappingURL=client.min.js.map