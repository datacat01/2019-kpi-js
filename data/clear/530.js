/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.5 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */
var requirejs, require, define;
! function(global, setTimeout) {
    function commentReplace(e, t) {
        return t || ""
    }

    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }

    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }

    function each(e, t) {
        var n;
        if (e)
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
    }

    function eachReverse(e, t) {
        var n;
        if (e)
            for (n = e.length - 1; n > -1 && (!e[n] || !t(e[n], n, e)); n -= 1);
    }

    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }

    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }

    function eachProp(e, t) {
        var n;
        for (n in e)
            if (hasProp(e, n) && t(e[n], n)) break
    }

    function mixin(e, t, n, i) {
        return t && eachProp(t, function(t, r) {
            !n && hasProp(e, r) || (!i || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[r] = t : (e[r] || (e[r] = {}), mixin(e[r], t, n, i)))
        }), e
    }

    function bind(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(e) {
        throw e
    }

    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."), function(e) {
            t = t[e]
        }), t
    }

    function makeError(e, t, n, i) {
        var r = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return r.requireType = e, r.requireModules = i, n && (r.originalError = n), r
    }

    function newContext(e) {
        function t(e, t, n) {
            var i, r, o, a, s, l, u, c, d, f, p = t && t.split("/"),
                h = x.map,
                g = h && h["*"];
            if (e && (l = (e = e.split("/")).length - 1, x.nodeIdCompat && jsSuffixRegExp.test(e[l]) && (e[l] = e[l].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && p && (e = p.slice(0, p.length - 1).concat(e)), function(e) {
                    var t, n;
                    for (t = 0; t < e.length; t++)
                        if ("." === (n = e[t])) e.splice(t, 1), t -= 1;
                        else if (".." === n) {
                        if (0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1]) continue;
                        t > 0 && (e.splice(t - 1, 2), t -= 2)
                    }
                }(e), e = e.join("/")), n && h && (p || g)) {
                e: for (o = (r = e.split("/")).length; o > 0; o -= 1) {
                    if (s = r.slice(0, o).join("/"), p)
                        for (a = p.length; a > 0; a -= 1)
                            if ((i = getOwn(h, p.slice(0, a).join("/"))) && (i = getOwn(i, s))) {
                                u = i, c = o;
                                break e
                            }! d && g && getOwn(g, s) && (d = getOwn(g, s), f = o)
                }!u && d && (u = d, c = f),
                u && (r.splice(0, c, u), e = r.join("/"))
            }
            return getOwn(x.pkgs, e) || e
        }

        function n(e) {
            isBrowser && each(scripts(), function(t) {
                if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === y.contextName) return t.parentNode.removeChild(t), !0
            })
        }

        function i(e) {
            var t = getOwn(x.paths, e);
            if (t && isArray(t) && t.length > 1) return t.shift(), y.require.undef(e), y.makeRequire(null, {
                skipMap: !0
            })([e]), !0
        }

        function r(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function o(e, n, i, o) {
            var a, s, l, u, c = null,
                d = n ? n.name : null,
                f = e,
                p = !0,
                h = "";
            return e || (p = !1, e = "_@r" + (N += 1)), c = (u = r(e))[0], e = u[1], c && (c = t(c, d, o), s = getOwn(T, c)), e && (c ? h = i ? e : s && s.normalize ? s.normalize(e, function(e) {
                return t(e, d, o)
            }) : -1 === e.indexOf("!") ? t(e, d, o) : e : (c = (u = r(h = t(e, d, o)))[0], h = u[1], i = !0, a = y.nameToUrl(h))), {
                prefix: c,
                name: h,
                parentMap: n,
                unnormalized: !!(l = !c || s || i ? "" : "_unnormalized" + (L += 1)),
                url: a,
                originalName: f,
                isDefine: p,
                id: (c ? c + "!" + h : h) + l
            }
        }

        function a(e) {
            var t = e.id,
                n = getOwn(C, t);
            return n || (n = C[t] = new y.Module(e)), n
        }

        function s(e, t, n) {
            var i = e.id,
                r = getOwn(C, i);
            !hasProp(T, i) || r && !r.defineEmitComplete ? (r = a(e)).error && "error" === t ? n(r.error) : r.on(t, n) : "defined" === t && n(T[i])
        }

        function l(e, t) {
            var n = e.requireModules,
                i = !1;
            t ? t(e) : (each(n, function(t) {
                var n = getOwn(C, t);
                n && (n.error = e, n.events.error && (i = !0, n.emit("error", e)))
            }), i || req.onError(e))
        }

        function u() {
            globalDefQueue.length && (each(globalDefQueue, function(e) {
                var t = e[0];
                "string" == typeof t && (y.defQueueMap[t] = !0), k.push(e)
            }), globalDefQueue = [])
        }

        function c(e) {
            delete C[e], delete E[e]
        }

        function d() {
            var e, t, r = 1e3 * x.waitSeconds,
                o = r && y.startTime + r < (new Date).getTime(),
                a = [],
                s = [],
                u = !1,
                c = !0;
            if (!m) {
                if (m = !0, eachProp(E, function(e) {
                        var r = e.map,
                            l = r.id;
                        if (e.enabled && (r.isDefine || s.push(e), !e.error))
                            if (!e.inited && o) i(l) ? (t = !0, u = !0) : (a.push(l), n(l));
                            else if (!e.inited && e.fetched && r.isDefine && (u = !0, !r.prefix)) return c = !1
                    }), o && a.length) return (e = makeError("timeout", "Load timeout for modules: " + a, null, a)).contextName = y.contextName, l(e);
                c && each(s, function(e) {
                    ! function e(t, n, i) {
                        var r = t.map.id;
                        t.error ? t.emit("error", t.error) : (n[r] = !0, each(t.depMaps, function(r, o) {
                            var a = r.id,
                                s = getOwn(C, a);
                            !s || t.depMatched[o] || i[a] || (getOwn(n, a) ? (t.defineDep(o, T[a]), t.check()) : e(s, n, i))
                        }), i[r] = !0)
                    }(e, {}, {})
                }), o && !t || !u || !isBrowser && !isWebWorker || w || (w = setTimeout(function() {
                    w = 0, d()
                }, 50)), m = !1
            }
        }

        function f(e) {
            hasProp(T, e[0]) || a(o(e[0], null, !0)).init(e[1], e[2])
        }

        function p(e, t, n, i) {
            e.detachEvent && !isOpera ? i && e.detachEvent(i, t) : e.removeEventListener(n, t, !1)
        }

        function h(e) {
            var t = e.currentTarget || e.srcElement;
            return p(t, y.onScriptLoad, "load", "onreadystatechange"), p(t, y.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function g() {
            var e;
            for (u(); k.length;) {
                if (null === (e = k.shift())[0]) return l(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                f(e)
            }
            y.defQueueMap = {}
        }
        var m, v, y, b, w, x = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            C = {},
            E = {},
            S = {},
            k = [],
            T = {},
            A = {},
            _ = {},
            N = 1,
            L = 1;
        return b = {
            require: function(e) {
                return e.require ? e.require : e.require = y.makeRequire(e.map)
            },
            exports: function(e) {
                if (e.usingExports = !0, e.map.isDefine) return e.exports ? T[e.map.id] = e.exports : e.exports = T[e.map.id] = {}
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        return getOwn(x.config, e.map.id) || {}
                    },
                    exports: e.exports || (e.exports = {})
                }
            }
        }, (v = function(e) {
            this.events = getOwn(S, e.id) || {}, this.map = e, this.shim = getOwn(x.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }).prototype = {
            init: function(e, t, n, i) {
                i = i || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = i.ignore, i.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, y.startTime = (new Date).getTime();
                    var e = this.map;
                    if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                    y.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    }))
                }
            },
            load: function() {
                var e = this.map.url;
                A[e] || (A[e] = !0, y.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, n = this.map.id,
                        i = this.depExports,
                        r = this.exports,
                        o = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(o)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                        r = y.execCb(n, o, i, r)
                                    } catch (t) {
                                        e = t
                                    } else r = y.execCb(n, o, i, r);
                                    if (this.map.isDefine && void 0 === r && ((t = this.module) ? r = t.exports : this.usingExports && (r = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", l(this.error = e)
                                } else r = o;
                                if (this.exports = r, this.map.isDefine && !this.ignore && (T[n] = r, req.onResourceLoad)) {
                                    var a = [];
                                    each(this.depMaps, function(e) {
                                        a.push(e.normalizedMap || e)
                                    }), req.onResourceLoad(y, this.map, a)
                                }
                                c(n), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else hasProp(y.defQueueMap, n) || this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map,
                    n = e.id,
                    i = o(e.prefix);
                this.depMaps.push(i), s(i, "defined", bind(this, function(i) {
                    var r, u, d, f = getOwn(_, this.map.id),
                        p = this.map.name,
                        h = this.map.parentMap ? this.map.parentMap.name : null,
                        g = y.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                    return this.map.unnormalized ? (i.normalize && (p = i.normalize(p, function(e) {
                        return t(e, h, !0)
                    }) || ""), s(u = o(e.prefix + "!" + p, this.map.parentMap, !0), "defined", bind(this, function(e) {
                        this.map.normalizedMap = u, this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), void((d = getOwn(C, u.id)) && (this.depMaps.push(u), this.events.error && d.on("error", bind(this, function(e) {
                        this.emit("error", e)
                    })), d.enable()))) : f ? (this.map.url = y.nameToUrl(f), void this.load()) : ((r = bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    })).error = bind(this, function(e) {
                        this.inited = !0, this.error = e, e.requireModules = [n], eachProp(C, function(e) {
                            0 === e.map.id.indexOf(n + "_unnormalized") && c(e.map.id)
                        }), l(e)
                    }), r.fromText = bind(this, function(t, i) {
                        var s = e.name,
                            u = o(s),
                            c = useInteractive;
                        i && (t = i), c && (useInteractive = !1), a(u), hasProp(x.config, n) && (x.config[s] = x.config[n]);
                        try {
                            req.exec(t)
                        } catch (e) {
                            return l(makeError("fromtexteval", "fromText eval for " + n + " failed: " + e, e, [n]))
                        }
                        c && (useInteractive = !0), this.depMaps.push(u), y.completeLoad(s), g([s], r)
                    }), void i.load(e.name, g, r, x))
                })), y.enable(i, this), this.pluginMaps[i.id] = i
            },
            enable: function() {
                E[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
                    var n, i, r;
                    if ("string" == typeof e) {
                        if (e = o(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, r = getOwn(b, e.id)) return void(this.depExports[t] = r(this));
                        this.depCount += 1, s(e, "defined", bind(this, function(e) {
                            this.undefed || (this.defineDep(t, e), this.check())
                        })), this.errback ? s(e, "error", bind(this, this.errback)) : this.events.error && s(e, "error", bind(this, function(e) {
                            this.emit("error", e)
                        }))
                    }
                    n = e.id, i = C[n], hasProp(b, n) || !i || i.enabled || y.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function(e) {
                    var t = getOwn(C, e.id);
                    t && !t.enabled && y.enable(e, this)
                })), this.enabling = !1, this.check()
            },
            on: function(e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t)
            },
            emit: function(e, t) {
                each(this.events[e], function(e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, (y = {
            config: x,
            contextName: e,
            registry: C,
            defined: T,
            urlFetched: A,
            defQueue: k,
            defQueueMap: {},
            Module: v,
            makeModuleMap: o,
            nextTick: req.nextTick,
            onError: l,
            configure: function(e) {
                if (e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/"), "string" == typeof e.urlArgs) {
                    var t = e.urlArgs;
                    e.urlArgs = function(e, n) {
                        return (-1 === n.indexOf("?") ? "?" : "&") + t
                    }
                }
                var n = x.shim,
                    i = {
                        paths: !0,
                        bundles: !0,
                        config: !0,
                        map: !0
                    };
                eachProp(e, function(e, t) {
                    i[t] ? (x[t] || (x[t] = {}), mixin(x[t], e, !0, !0)) : x[t] = e
                }), e.bundles && eachProp(e.bundles, function(e, t) {
                    each(e, function(e) {
                        e !== t && (_[e] = t)
                    })
                }), e.shim && (eachProp(e.shim, function(e, t) {
                    isArray(e) && (e = {
                        deps: e
                    }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = y.makeShimExports(e)), n[t] = e
                }), x.shim = n), e.packages && each(e.packages, function(e) {
                    var t;
                    t = (e = "string" == typeof e ? {
                        name: e
                    } : e).name, e.location && (x.paths[t] = e.location), x.pkgs[t] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }), eachProp(C, function(e, t) {
                    e.inited || e.map.unnormalized || (e.map = o(t, null, !0))
                }), (e.deps || e.callback) && y.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                return function() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                }
            },
            makeRequire: function(i, r) {
                function s(t, n, u) {
                    var c, f;
                    return r.enableBuildCallback && n && isFunction(n) && (n.__requireJsBuild = !0), "string" == typeof t ? isFunction(n) ? l(makeError("requireargs", "Invalid require call"), u) : i && hasProp(b, t) ? b[t](C[i.id]) : req.get ? req.get(y, t, i, s) : (c = o(t, i, !1, !0).id, hasProp(T, c) ? T[c] : l(makeError("notloaded", 'Module name "' + c + '" has not been loaded yet for context: ' + e + (i ? "" : ". Use require([])")))) : (g(), y.nextTick(function() {
                        g(), (f = a(o(null, i))).skipMap = r.skipMap, f.init(t, n, u, {
                            enabled: !0
                        }), d()
                    }), s)
                }
                return r = r || {}, mixin(s, {
                    isBrowser: isBrowser,
                    toUrl: function(e) {
                        var n, r = e.lastIndexOf("."),
                            o = e.split("/")[0];
                        return -1 !== r && (!("." === o || ".." === o) || r > 1) && (n = e.substring(r, e.length), e = e.substring(0, r)), y.nameToUrl(t(e, i && i.id, !0), n, !0)
                    },
                    defined: function(e) {
                        return hasProp(T, o(e, i, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = o(e, i, !1, !0).id, hasProp(T, e) || hasProp(C, e)
                    }
                }), i || (s.undef = function(e) {
                    u();
                    var t = o(e, i, !0),
                        r = getOwn(C, e);
                    r.undefed = !0, n(e), delete T[e], delete A[t.url], delete S[e], eachReverse(k, function(t, n) {
                        t[0] === e && k.splice(n, 1)
                    }), delete y.defQueueMap[e], r && (r.events.defined && (S[e] = r.events), c(e))
                }), s
            },
            enable: function(e) {
                getOwn(C, e.id) && a(e).enable()
            },
            completeLoad: function(e) {
                var t, n, r, o = getOwn(x.shim, e) || {},
                    a = o.exports;
                for (u(); k.length;) {
                    if (null === (n = k.shift())[0]) {
                        if (n[0] = e, t) break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    f(n)
                }
                if (y.defQueueMap = {}, r = getOwn(C, e), !t && !hasProp(T, e) && r && !r.inited) {
                    if (!(!x.enforceDefine || a && getGlobal(a))) return i(e) ? void 0 : l(makeError("nodefine", "No define call for " + e, null, [e]));
                    f([e, o.deps || [], o.exportsFn])
                }
                d()
            },
            nameToUrl: function(e, t, n) {
                var i, r, o, a, s, l, u = getOwn(x.pkgs, e);
                if (u && (e = u), l = getOwn(_, e)) return y.nameToUrl(l, t, n);
                if (req.jsExtRegExp.test(e)) a = e + (t || "");
                else {
                    for (i = x.paths, o = (r = e.split("/")).length; o > 0; o -= 1)
                        if (s = getOwn(i, r.slice(0, o).join("/"))) {
                            isArray(s) && (s = s[0]), r.splice(0, o, s);
                            break
                        } a = r.join("/"), a = ("/" === (a += t || (/^data\:|^blob\:|\?/.test(a) || n ? "" : ".js")).charAt(0) || a.match(/^[\w\+\.\-]+:/) ? "" : x.baseUrl) + a
                }
                return x.urlArgs && !/^blob\:/.test(a) ? a + x.urlArgs(e, a) : a
            },
            load: function(e, t) {
                req.load(y, e, t)
            },
            execCb: function(e, t, n, i) {
                return t.apply(i, n)
            },
            onScriptLoad: function(e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = h(e);
                    y.completeLoad(t.id)
                }
            },
            onScriptError: function(e) {
                var t = h(e);
                if (!i(t.id)) {
                    var n = [];
                    return eachProp(C, function(e, i) {
                        0 !== i.indexOf("_@r") && each(e.depMaps, function(e) {
                            if (e.id === t.id) return n.push(i), !0
                        })
                    }), l(makeError("scripterror", 'Script error for "' + t.id + (n.length ? '", needed by: ' + n.join(", ") : '"'), e, [t.id]))
                }
            }
        }).require = y.makeRequire(), y
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
            if ("interactive" === e.readyState) return interactiveScript = e
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.3.5",
        commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = !1;
    if (void 0 === define) {
        if (void 0 !== requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0
        }
        void 0 === require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, n, i) {
            var r, o, a = defContextName;
            return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = n, n = i) : e = []), o && o.context && (a = o.context), (r = getOwn(contexts, a)) || (r = contexts[a] = req.s.newContext(a)), o && r.configure(o), r.require(e, t, n)
        }, req.config = function(e) {
            return req(e)
        }, req.nextTick = void 0 !== setTimeout ? function(e) {
            setTimeout(e, 4)
        } : function(e) {
            e()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
            req[e] = function() {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], (baseElement = document.getElementsByTagName("base")[0]) && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e, t, n) {
            var i = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return i.type = e.scriptType || "text/javascript", i.charset = "utf-8", i.async = !0, i
        }, req.load = function(e, t, n) {
            var i, r = e && e.config || {};
            if (isBrowser) return (i = req.createNode(r, t, n)).setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), !i.attachEvent || i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)), i.src = n, r.onNodeCreated && r.onNodeCreated(i, r, t, n), currentlyAddingScript = i, baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i), currentlyAddingScript = null, i;
            if (isWebWorker) try {
                setTimeout(function() {}, 0), importScripts(n), e.completeLoad(t)
            } catch (i) {
                e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, i, [t]))
            }
        }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
            if (head || (head = e.parentNode), dataMain = e.getAttribute("data-main")) return mainScript = dataMain, cfg.baseUrl || -1 !== mainScript.indexOf("!") || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
        }), define = function(e, t, n) {
            var i, r;
            "string" != typeof e && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, commentReplace).replace(cjsRequireRegExp, function(e, n) {
                t.push(n)
            }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (i = currentlyAddingScript || getInteractiveScript()) && (e || (e = i.getAttribute("data-requiremodule")), r = contexts[i.getAttribute("data-requirecontext")]), r ? (r.defQueue.push([e, t, n]), r.defQueueMap[e] = !0) : globalDefQueue.push([e, t, n])
        }, define.amd = {
            jQuery: !0
        }, req.exec = function(text) {
            return eval(text)
        }, req(cfg)
    }
}(this, "undefined" == typeof setTimeout ? void 0 : setTimeout), define("libs/require-2.3.5", function() {}),
    function() {
        "use strict";
        var e = null;
        define("version", {
            version: "1.0",
            load: function(t, n, i, r) {
                var o = r.config.version;
                if (!o) throw new Error("A version config has not been setup");
                if (!o[t]) throw new Error("A version was not specified for module: " + t);
                e && o[t], n([t + "-" + r.config.version[t]], function(e) {
                    i(e)
                })
            },
            normalize: function(t) {
                var n = /\(([^)]*)\)/.exec(t);
                return e = null, n && (e = n[1], t = t.substring(0, n.index)), t
            }
        })
    }(), requirejs.config({
        config: {
            version: {
                "fly/libs/base64": "0.3.0",
                "fly/libs/easy-xdm-cbsi": "2.4.19.3",
                "fly/libs/jquery.widget": "1.9.2",
                "fly/libs/jquery.cookie": "1.2",
                "fly/libs/jquery.mobile": "1.3.2",
                "fly/libs/jquery.throttle-debounce": "1.1",
                "fly/libs/lazysizes": "1.4.0",
                "fly/libs/omniture.s-code": "1.0",
                "fly/libs/urs": "1.0",
                "fly/utils/data-prefix": "1.0",
                "fly/utils/data-selector": "1.0",
                "fly/utils/function-natives": "1.0",
                "fly/utils/guid": "1.0",
                "fly/utils/log": "1.0",
                "fly/utils/object-helper": "1.0",
                "fly/utils/string-helper": "1.0",
                "fly/utils/string-vars": "1.0",
                "fly/utils/url-helper": "1.0",
                "fly/managers/components": "1.0",
                "fly/managers/cookie": "1.0",
                "fly/managers/debug": "1.0",
                "fly/managers/ad": "2.0",
                "fly/managers/gpt": "4.3",
                "fly/managers/geo": "1.0",
                "fly/managers/image-resolution": "1.0",
                "fly/managers/recurly": "1.0",
                "fly/managers/recurly-billing": "1.0",
                "fly/managers/social-authentication": "1.0",
                "fly/managers/tracking": "1.0",
                "fly/managers/user": "1.0",
                "fly/components/accordion": "1.0",
                "fly/components/alert": "1.0",
                "fly/components/base": "1.0",
                "fly/components/carousel": "1.0",
                "fly/components/credspark": "1.0",
                "fly/components/dependent-field": "1.0",
                "fly/components/dropdown": "1.0",
                "fly/components/form-validate": "1.0",
                "fly/components/iframe-messenger": "1.1",
                "fly/components/image-gallery": "1.0",
                "fly/components/disqus-count": "1.0",
                "fly/managers/disqus": "1.0",
                "fly/components/disqus": "1.0",
                "fly/components/loading": "1.0",
                "fly/components/load-more": "1.0",
                "fly/components/nrelate": "1.0",
                "fly/components/modal": "1.0",
                "fly/components/modal-async": "1.0",
                "fly/components/modal-iframe": "1.0",
                "fly/components/scrollbar": "1.0",
                "fly/components/social-button": "1.0",
                "fly/components/social-counts": "1.1",
                "fly/components/social-links": "1.0",
                "fly/components/tabs": "1.0",
                "fly/managers/clicktale": "1.0",
                "fly/components/poll": "1.0",
                "fly/managers/cookie": "1.0",
                "fly/managers/history": "1.0",
                "libs/fontfaceobserver": "2.0.7",
                "libs/hls": "0.12.2.light.min",
                "libs/require": "2.3.5",
                "libs/riot": "2.6.2"
            }
        },
        shim: {
            tealium: ["jquery"]
        },
        map: {
            "*": {
                urs: "//urs.cbsnews.com/sdk/urs.js",
                tealium: "//tealium.cbsnews.com/prod/utag.js"
            }
        },
        waitSeconds: 5
    }), CBSNEWS && CBSNEWS.tealiumPath && (requirejs.s.contexts._.config.map["*"].tealium = CBSNEWS.tealiumPath), define("require.config", function() {}), require(["version!libs/require", "require.config"], function() {
        CBSNEWS.tealiumPath && (requirejs.s.contexts._.config.map["*"].tealium = CBSNEWS.tealiumPath)
    }), define("requireLib", function() {}), define("common/feature-detection", [], function() {
        window.linkSupportsPreload = function(e, t) {
            if (e && e.supports) try {
                return e.supports(t)
            } catch (e) {
                return e instanceof TypeError ? console.log("The DOMTokenList doesn't have a supported tokens list") : console.error("That shouldn't have happened"), !1
            }
        }(document.createElement("link").relList, "preload")
    }), define("libs/hls-video", [], function() {
        return function(e) {
            var t = null,
                n = function(e, n, i) {
                    return window.log("hls-wrapper", "togglePlayback", n ? "pause" : "play", i), n && e.paused ? void window.log("hls-wrapper", "Video is already paused", i) : n ? (window.log("hls-wrapper", "PAUSE video", i), e.pause(), t && t.stopLoad(), !0) : e.paused ? (window.log("hls-wrapper", "PLAY video", i), e.play(), t && t.startLoad(-1), !0) : void window.log("hls-wrapper", "Video IS not paused", i)
                },
                i = function(e, i, r, o) {
                    if (void 0 !== document.hidden || void 0 !== document.webkitHidden) {
                        document.addEventListener(r, function() {
                            window.log("hls-wrapper", "onPageVisibilityChange", "Page is", document[o] ? "hidden" : "visible"), n(e, document[o], i, t)
                        }, !1)
                    }
                },
                r = function() {
                    var e = window.MediaSource = window.MediaSource || window.WebKitMediaSource,
                        t = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer,
                        n = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                        i = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
                    return n && i
                };
            window.log = function() {
                log.history = log.history || [], log.history.push(arguments), this.console && console.log(Array.prototype.slice.call(arguments))
            };
            var o, a = function(e) {
                    return e.defaultPrevented || "VIDEO" != e.nodeName || !e.hasAttribute("data-hls-wrapper")
                }(e) ? null : function(e) {
                    var t = e;
                    return t.muted = t.hasAttribute("muted"), t.autoplay = t.hasAttribute("autoplay"), t
                }(e),
                s = a ? function(e) {
                    var t = e.getAttribute("src"),
                        n = e.getAttribute("data-src"),
                        i = e.querySelector("source"),
                        r = i && i.getAttribute("data-src");
                    return t = t || n || (i && i.src ? i.src : r || null), window.log("hls-wrapper", "Found video source", t), t
                }(a) : null;
            return function(e) {
                if (!e) return window.log("hls-wrapper", "No video source available"), !0
            }(s) ? null : (o = function() {
                var e = function() {
                        var e, t;
                        return void 0 !== document.hidden ? (e = "hidden", t = "visibilitychange") : void 0 !== document.webkitHidden && (e = "webkitHidden", t = "webkitvisibilitychange", pageVisibilitySupported = !0), [e, t]
                    }(),
                    o = e[0],
                    l = e[1];
                i(a, s, l, o), a.hasAttribute("data-hls-wrapper-no-observer") ? window.log("hls-wrapper", "IntersectionObserver is disabled on this video") : function(e, t) {
                        try {
                            new IntersectionObserver(function(i) {
                                window.log("hls-wrapper", "intersectionObserver", i[0].intersectionRatio, e), n(e, 0 == i[0].intersectionRatio, t)
                            }).observe(e)
                        } catch (e) {
                            window.log("hls-wrapper", e)
                        }
                    }(a, s),
                    function(e) {
                        var t = e.querySelector("source");
                        return !(t && e.canPlayType(t.type) || e.canPlayType("application/vnd.apple.mpegURL") || !r()) || (window.log("hls-wrapper", "native playback is supported or HLS.js is not supported"), !1)
                    }(a) && (t = function(e, i) {
                        return (t = new Hls({
                            capLevelToPlayerSize: !0,
                            enableWebVTT: !1,
                            enableCEA708Captions: !1,
                            autoLevelCapping: 2
                        })).attachMedia(e), t.on(Hls.Events.MEDIA_ATTACHED, function() {
                            t.loadSource(i), t.on(Hls.Events.MANIFEST_PARSED, function() {
                                n(e, !e.hasAttribute("autoplay"), i)
                            })
                        }), t.on(Hls.Events.ERROR, function(e, n) {
                            if (n.fatal) switch (n.type) {
                                case Hls.ErrorTypes.NETWORK_ERROR:
                                    window.log("hls-wrapper", "fatal network error encountered, try to recover", n), t.startLoad();
                                    break;
                                case Hls.ErrorTypes.MEDIA_ERROR:
                                    window.log("hls-wrapper", "fatal media error encountered, try to recover", n), t.recoverMediaError();
                                    break;
                                default:
                                    window.log("hls-wrapper", "cannot recover, destroy", n), t.destroy()
                            }
                        }), t
                    }(a, s))
            }, void(window.Hls ? (window.log("hls-wrapper", "Hls.js is available"), setTimeout(o, 0)) : (window.log("hls-wrapper", "Hls.js is not available"), require(["version!libs/hls"], function(e) {
                window.Hls = window.Hls || e, o()
            }))))
        }
    }), window.lazySizesConfig = window.lazySizesConfig || {}, window.lazySizesConfig.init = !1;
var userAgent = navigator.userAgent.toLowerCase(),
    isSafari = /^((?!chrome).)*safari/.test(userAgent);
define("libs/lazysizes.plugins", ["libs/hls-video"], function(e) {
        "use strict";
        addEventListener("lazybeforeunveil", function(t) {
            var n;
            if (!t.defaultPrevented) {
                if (t.target.getAttribute("data-component")) {
                    var i = t.target.getAttribute("data-component");
                    "string" == typeof i && (i = [i]), i.forEach(function(e) {
                        var n = JSON.parse(t.target.getAttribute("data-" + e + "-options") || {});
                        require(["components/" + e], function(e) {
                            e(t.target, n)
                        })
                    })
                }
                if (n = t.target.getAttribute("data-preview-url"), "VIDEO" == t.target.nodeName && n) {
                    var r = ["video-preview", "video-preview-" + CBSNEWS.device, "video-preview-" + CBSNEWS.device + "-" + CBSNEWS.tracking.pageType];
                    n.indexOf("vilynx.com") >= 0 && (r = r.concat(["vilynx", "vilynx-" + CBSNEWS.device, "vilynx-" + CBSNEWS.device + "-" + CBSNEWS.tracking.pageType])), CBSNEWS.features.executeWithConsent(r, function(n) {
                        t.target.setAttribute("src", n), e(t.target)
                    }, window, [n])
                }
                if (n = t.target.getAttribute("data-poster"), "VIDEO" == t.target.nodeName && n && t.target.setAttribute("poster", n), "IFRAME" == t.target.nodeName) {
                    var o = t.target,
                        a = o.parentElement.querySelector(".embed__resizer"),
                        s = (o.getAttribute("data-width") || "").replace("px", ""),
                        l = (o.getAttribute("data-height") || "").replace("px", "");
                    if (a && l > 0 && s > 0 ? (a.setAttribute("style", "padding-top:" + l / s * 100 + "%"), o.className += " embed__content--responsive") : (s && o.setAttribute("width", s), l && o.setAttribute("height", l)), /^\/embed\/video\//.test(o.getAttribute("src") || o.getAttribute("data-src")) && !document.body.classList.contains("has__video-player") && document.body.classList.add("has__video-player"), t.target.getAttribute("data-src")) {
                        var u = function(e) {
                            var t = e.getAttribute("data-src");
                            if (t) {
                                var n = e.cloneNode();
                                n.setAttribute("src", t), n.removeAttribute("data-src"), e.parentElement.replaceChild(n, e)
                            }
                        };
                        /^(?:https?:)?\/\/.+?cbsnews.com/i.test(n) || /^\/[^\/]/.test(n) ? u(t.target) : CBSNEWS.features.executeWithConsent([], u, this, [t.target])
                    }
                }
                if (n = t.target.getAttribute("href"), "LINK" == t.target.nodeName && n) {
                    var c = new XMLHttpRequest;
                    c.open("GET", n, !0), c.send(), c.onload = function() {
                        c.responseXML && "image/svg+xml" === c.responseXML.contentType ? document.head.insertAdjacentHTML("beforeend", c.responseText) : t.target.insertAdjacentHTML("afterend", c.responseText)
                    }
                }
                if ((n = t.target.getAttribute("data-require")) && window.require) {
                    var d = t.target.getAttribute("data-require-callback"),
                        f = JSON.parse(t.target.getAttribute("data-require-arguments"));
                    require([n], function(e, t) {
                        return function() {
                            e && "function" == typeof window[e] && window[e].apply(window, t || arguments)
                        }
                    }(d, f))
                }(n = t.target.getAttribute("data-lazy-taboola")) && t.target.setAttribute("data-taboola", n), (n = t.target.getAttribute("data-taboola")) && window.CBSNEWS.taboola && window.CBSNEWS.taboola.push(t.target, !0), (n = t.target.getAttribute("data-ad")) && !CBSNEWS.ad.initialized && (window.console && console.log && console.log("ADS: queuing", t.target.getAttribute("id"), "for display (before loadAds)"), CBSNEWS.ad.gpt.adDivIds.push(t.target.getAttribute("id")), window.cbsiGptDivIds = window.cbsiGptDivIds || [], cbsiGptDivIds.push(t.target.getAttribute("id")))
            }
        }, !1)
    }),
    function(e, t) {
        var n = function(e, t) {
            "use strict";
            if (t.getElementsByClassName) {
                var n, i, r = t.documentElement,
                    o = e.Date,
                    a = e.HTMLPictureElement,
                    s = "addEventListener",
                    l = "getAttribute",
                    u = e[s],
                    c = e.setTimeout,
                    d = e.requestAnimationFrame || c,
                    f = e.requestIdleCallback,
                    p = /^picture$/i,
                    h = ["load", "error", "lazyincluded", "_lazyloaded"],
                    g = {},
                    m = Array.prototype.forEach,
                    v = function(e, t) {
                        return g[t] || (g[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), g[t].test(e[l]("class") || "") && g[t]
                    },
                    y = function(e, t) {
                        v(e, t) || e.setAttribute("class", (e[l]("class") || "").trim() + " " + t)
                    },
                    b = function(e, t) {
                        var n;
                        (n = v(e, t)) && e.setAttribute("class", (e[l]("class") || "").replace(n, " "))
                    },
                    w = function(e, t, n) {
                        var i = n ? s : "removeEventListener";
                        n && w(e, t), h.forEach(function(n) {
                            e[i](n, t)
                        })
                    },
                    x = function(e, i, r, o, a) {
                        var s = t.createEvent("Event");
                        return r || (r = {}), r.instance = n, s.initEvent(i, !o, !a), s.detail = r, e.dispatchEvent(s), s
                    },
                    C = function(t, n) {
                        var r;
                        !a && (r = e.picturefill || i.pf) ? (n && n.src && !t[l]("srcset") && t.setAttribute("srcset", n.src), r({
                            reevaluate: !0,
                            elements: [t]
                        })) : n && n.src && (t.src = n.src)
                    },
                    E = function(e, t) {
                        return (getComputedStyle(e, null) || {})[t]
                    },
                    S = function(e, t, n) {
                        for (n = n || e.offsetWidth; n < i.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                        return n
                    },
                    k = function() {
                        var e, n, i = [],
                            r = [],
                            o = i,
                            a = function() {
                                var t = o;
                                for (o = i.length ? r : i, e = !0, n = !1; t.length;) t.shift()();
                                e = !1
                            },
                            s = function(i, r) {
                                e && !r ? i.apply(this, arguments) : (o.push(i), n || (n = !0, (t.hidden ? c : d)(a)))
                            };
                        return s._lsFlush = a, s
                    }(),
                    T = function(e, t) {
                        return t ? function() {
                            k(e)
                        } : function() {
                            var t = this,
                                n = arguments;
                            k(function() {
                                e.apply(t, n)
                            })
                        }
                    },
                    A = function(e) {
                        var t, n = 0,
                            r = i.throttleDelay,
                            a = i.ricTimeout,
                            s = function() {
                                t = !1, n = o.now(), e()
                            },
                            l = f && a > 49 ? function() {
                                f(s, {
                                    timeout: a
                                }), a !== i.ricTimeout && (a = i.ricTimeout)
                            } : T(function() {
                                c(s)
                            }, !0);
                        return function(e) {
                            var i;
                            (e = !0 === e) && (a = 33), t || (t = !0, (i = r - (o.now() - n)) < 0 && (i = 0), e || i < 9 ? l() : c(l, i))
                        }
                    },
                    _ = function(e) {
                        var t, n, i = function() {
                                t = null, e()
                            },
                            r = function() {
                                var e = o.now() - n;
                                e < 99 ? c(r, 99 - e) : (f || i)(i)
                            };
                        return function() {
                            n = o.now(), t || (t = c(r, 99))
                        }
                    };
                ! function() {
                    var t, n = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 0,
                        throttleDelay: 125
                    };
                    for (t in i = e.lazySizesConfig || e.lazysizesConfig || {}, n) t in i || (i[t] = n[t]);
                    e.lazySizesConfig = i, c(function() {
                        i.init && D()
                    })
                }();
                var N = function() {
                        var a, d, f, h, g, S, N, D, j, q, O, I, M = /^img$/i,
                            P = /^iframe$/i,
                            R = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
                            B = 0,
                            H = 0,
                            W = -1,
                            z = function(e) {
                                H--, e && e.target && w(e.target, z), (!e || H < 0 || !e.target) && (H = 0)
                            },
                            F = function(e) {
                                return null == I && (I = "hidden" == E(t.body, "visibility")), I || "hidden" != E(e.parentNode, "visibility") && "hidden" != E(e, "visibility")
                            },
                            V = function(e, n) {
                                var i, o = e,
                                    a = F(e);
                                for (D -= n, O += n, j -= n, q += n; a && (o = o.offsetParent) && o != t.body && o != r;)(a = (E(o, "opacity") || 1) > 0) && "visible" != E(o, "overflow") && (i = o.getBoundingClientRect(), a = q > i.left && j < i.right && O > i.top - 1 && D < i.bottom + 1);
                                return a
                            },
                            U = function() {
                                var e, o, s, u, c, f, p, g, m, v, y, b, w = n.elements;
                                if ((h = i.loadMode) && H < 8 && (e = w.length)) {
                                    for (o = 0, W++, v = !i.expand || i.expand < 1 ? r.clientHeight > 500 && r.clientWidth > 500 ? 500 : 370 : i.expand, y = v * i.expFactor, b = i.hFac, I = null, B < y && H < 1 && W > 2 && h > 2 && !t.hidden ? (B = y, W = 0) : B = h > 1 && W > 1 && H < 6 ? v : 0; o < e; o++)
                                        if (w[o] && !w[o]._lazyRace)
                                            if (R)
                                                if ((g = w[o][l]("data-expand")) && (f = 1 * g) || (f = B), m !== f && (S = innerWidth + f * b, N = innerHeight + f, p = -1 * f, m = f), s = w[o].getBoundingClientRect(), (O = s.bottom) >= p && (D = s.top) <= N && (q = s.right) >= p * b && (j = s.left) <= S && (O || q || j || D) && (i.loadHidden || F(w[o])) && (d && H < 3 && !g && (h < 3 || W < 4) || V(w[o], f))) {
                                                    if (K(w[o]), c = !0, H > 9) break
                                                } else !c && d && !u && H < 4 && W < 4 && h > 2 && (a[0] || i.preloadAfterLoad) && (a[0] || !g && (O || q || j || D || "auto" != w[o][l](i.sizesAttr))) && (u = a[0] || w[o]);
                                    else K(w[o]);
                                    u && !c && K(u)
                                }
                            },
                            $ = A(U),
                            G = function(e) {
                                y(e.target, i.loadedClass), b(e.target, i.loadingClass), w(e.target, X), x(e.target, "lazyloaded")
                            },
                            Q = T(G),
                            X = function(e) {
                                Q({
                                    target: e.target
                                })
                            },
                            J = function(e) {
                                var t, n = e[l](i.srcsetAttr);
                                (t = i.customMedia[e[l]("data-media") || e[l]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
                            },
                            Y = T(function(e, t, n, r, o) {
                                var a, s, u, d, h, g;
                                (h = x(e, "lazybeforeunveil", t)).defaultPrevented || (r && (n ? y(e, i.autosizesClass) : e.setAttribute("sizes", r)), s = e[l](i.srcsetAttr), a = e[l](i.srcAttr), o && (u = e.parentNode, d = u && p.test(u.nodeName || "")), g = t.firesLoad || "src" in e && (s || a || d), h = {
                                    target: e
                                }, g && (w(e, z, !0), clearTimeout(f), f = c(z, 2500), y(e, i.loadingClass), w(e, X, !0)), d && m.call(u.getElementsByTagName("source"), J), s ? e.setAttribute("srcset", s) : a && !d && (P.test(e.nodeName) ? function(e, t) {
                                    try {
                                        e.contentWindow.location.replace(t)
                                    } catch (n) {
                                        e.src = t
                                    }
                                }(e, a) : e.src = a), o && (s || d) && C(e, {
                                    src: a
                                })), e._lazyRace && delete e._lazyRace, b(e, i.lazyClass), k(function() {
                                    (!g || e.complete && e.naturalWidth > 1) && (g ? z(h) : H--, G(h))
                                }, !0)
                            }),
                            K = function(e) {
                                var t, n = M.test(e.nodeName),
                                    r = n && (e[l](i.sizesAttr) || e[l]("sizes")),
                                    o = "auto" == r;
                                (!o && d || !n || !e[l]("src") && !e.srcset || e.complete || v(e, i.errorClass) || !v(e, i.lazyClass)) && (t = x(e, "lazyunveilread").detail, o && L.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, H++, Y(e, t, o, r, n))
                            },
                            Z = function() {
                                if (!d) {
                                    if (o.now() - g < 999) return void c(Z, 999);
                                    var e = _(function() {
                                        i.loadMode = 3, $()
                                    });
                                    d = !0, i.loadMode = 3, $(), u("scroll", function() {
                                        3 == i.loadMode && (i.loadMode = 2), e()
                                    }, !0)
                                }
                            };
                        return {
                            _: function() {
                                g = o.now(), n.elements = t.getElementsByClassName(i.lazyClass), a = t.getElementsByClassName(i.lazyClass + " " + i.preloadClass), u("scroll", $, !0), u("resize", $, !0), e.MutationObserver ? new MutationObserver($).observe(r, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0
                                }) : (r[s]("DOMNodeInserted", $, !0), r[s]("DOMAttrModified", $, !0), setInterval($, 999)), u("hashchange", $, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(e) {
                                    t[s](e, $, !0)
                                }), /d$|^c/.test(t.readyState) ? Z() : (u("load", Z), t[s]("DOMContentLoaded", $), c(Z, 2e4)), n.elements.length ? (U(), k._lsFlush()) : $()
                            },
                            checkElems: $,
                            unveil: K
                        }
                    }(),
                    L = function() {
                        var e, n = T(function(e, t, n, i) {
                                var r, o, a;
                                if (e._lazysizesWidth = i, i += "px", e.setAttribute("sizes", i), p.test(t.nodeName || ""))
                                    for (r = t.getElementsByTagName("source"), o = 0, a = r.length; o < a; o++) r[o].setAttribute("sizes", i);
                                n.detail.dataAttr || C(e, n.detail)
                            }),
                            r = function(e, t, i) {
                                var r, o = e.parentNode;
                                o && (i = S(e, o, i), (r = x(e, "lazybeforesizes", {
                                    width: i,
                                    dataAttr: !!t
                                })).defaultPrevented || (i = r.detail.width) && i !== e._lazysizesWidth && n(e, o, r, i))
                            },
                            o = _(function() {
                                var t, n = e.length;
                                if (n)
                                    for (t = 0; t < n; t++) r(e[t])
                            });
                        return {
                            _: function() {
                                e = t.getElementsByClassName(i.autosizesClass), u("resize", o)
                            },
                            checkElems: o,
                            updateElem: r
                        }
                    }(),
                    D = function() {
                        D.i || (D.i = !0, L._(), N._())
                    };
                return n = {
                    cfg: i,
                    autoSizer: L,
                    loader: N,
                    init: D,
                    uP: C,
                    aC: y,
                    rC: b,
                    hC: v,
                    fire: x,
                    gW: S,
                    rAF: k
                }
            }
        }(e, e.document);
        "object" == typeof module && module.exports ? module.exports = n : "function" == typeof define && define.amd ? define("libs/lazysizes.min", n) : e.lazySizes = n
    }(window), require(["libs/lazysizes.plugins", "libs/lazysizes.min"], function(e, t) {
        t.init()
    }), define("common/lazysizes", function() {}), define("utils/load-script", [], function() {
        "use strict";
        return function(e, t, n) {
            var i = document.createElement("script");
            i.setAttribute("async", !0), i.setAttribute("src", e), t && i.setAttribute("id", t), document.head.appendChild(i), i.onerror = function(e) {
                n && n()
            }
        }
    });
var CBSNEWS = CBSNEWS || {};
CBSNEWS.gdprConsent = window.gdprConsent = !1, window.console && console.log("gdprConsent.initial", CBSNEWS.gdprConsent, window.location.href), define("common/gdpr", ["utils/load-script"], function(e) {
        var t, n = "https://c.evidon.com/sitenotice/";
        try {
            t = window.frameElement
        } catch (e) {
            t = null
        }
        var i = function(e) {
            window.console && console.log("gdprConsent.set", e, window.location.href), CBSNEWS.gdprConsent = window.gdprConsent = e;
            var t = document.createEvent("Event");
            t.initEvent("cbsnews.gdprConsent.set", !0, !0), window.dispatchEvent(t)
        };
        window.evidon = {
            id: 425,
            priorConsentCallback: function() {
                window.console && console.log("gdprConsent.priorConsentCallback", window.location.href), i(!0)
            },
            closeCallback: function() {},
            consentWithdrawnCallback: function() {
                window.console && console.log("gdprConsent.consentWithdrawnCallback"), i(!1)
            }
        };
        var r, o, a = {
                default: {
                    id: 1,
                    defaultLangauge: "en-us"
                },
                at: {
                    id: 19,
                    defaultLangauge: "de-at"
                },
                be: {
                    id: 20,
                    defaultLangauge: "nl-be"
                },
                bg: {
                    id: 30,
                    defaultLangauge: "bg"
                },
                cy: {
                    id: 37,
                    defaultLangauge: "el"
                },
                cz: {
                    id: 27,
                    defaultLangauge: "cs"
                },
                de: {
                    id: 3,
                    defaultLangauge: "de"
                },
                dk: {
                    id: 15,
                    defaultLangauge: "da"
                },
                ee: {
                    id: 32,
                    defaultLangauge: "et"
                },
                es: {
                    id: 4,
                    defaultLangauge: "es"
                },
                fi: {
                    id: 25,
                    defaultLangauge: "fi"
                },
                fr: {
                    id: 5,
                    defaultLangauge: "fr"
                },
                gb: {
                    id: 6,
                    defaultLangauge: "en-gb"
                },
                gr: {
                    id: 29,
                    defaultLangauge: "el"
                },
                hr: {
                    id: 61,
                    defaultLangauge: "hr"
                },
                hu: {
                    id: 24,
                    defaultLangauge: "hu"
                },
                ie: {
                    id: 16,
                    defaultLangauge: "en-gb"
                },
                is: {
                    id: 38,
                    defaultLangauge: "is"
                },
                it: {
                    id: 7,
                    defaultLangauge: "it"
                },
                li: {
                    id: 3,
                    defaultLangauge: "de"
                },
                lt: {
                    id: 34,
                    defaultLangauge: "lt"
                },
                lu: {
                    id: 28,
                    defaultLangauge: "de"
                },
                lv: {
                    id: 33,
                    defaultLangauge: "lv"
                },
                mt: {
                    id: 36,
                    defaultLangauge: "en-us"
                },
                nl: {
                    id: 8,
                    defaultLangauge: "nl"
                },
                no: {
                    id: 17,
                    defaultLangauge: "no"
                },
                pl: {
                    id: 18,
                    defaultLangauge: "pl"
                },
                pt: {
                    id: 26,
                    defaultLangauge: "pt"
                },
                ro: {
                    id: 31,
                    defaultLangauge: "ro"
                },
                se: {
                    id: 22,
                    defaultLangauge: "sv"
                },
                si: {
                    id: 35,
                    defaultLangauge: "sl"
                },
                sk: {
                    id: 23,
                    defaultLangauge: "sk"
                }
            },
            s = null,
            l = (r = "fly_geo", (o = document.cookie.match(new RegExp("(?:^|; )" + r.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"))) ? decodeURIComponent(o[1]) : void 0);
        l && (s = JSON.parse(l).countryCode), t ? (window.parent.addEventListener("cbsnews.gdprConsent.set", function() {
            i(window.parent.gdprConsent)
        }, !1), i(window.parent.gdprConsent)) : !1 !== CBSNEWS.features.gdpr && window === window.top && void 0 !== a[s] ? (e(n + "evidon-sitenotice-tag.js", "evidon-notice"), function() {
            var e = a[s] || a.default,
                t = {
                    code: s,
                    id: e.id,
                    defaultLangauge: e.defaultLangauge
                };
            window.console && console.log("gdprConsent.getCountry", t), window.evidon || (window.evidon = {});
            window.evidon.notice ? window.evidon.notice.setLocation(t) : window.evidon.location = t
        }(), e(n + 425 + "/snthemes.js", "evidon-themes"), e(n + 425 + "/cbsnews/settings.js", "evidon-settings")) : window.evidon.priorConsentCallback()
    }),
    function(e) {
        "use strict";
        var t = /[^a-z0-9-_]/gi;
        t.test(e.location.hash) && (e.location.hash = e.location.hash.replace(t, ""))
    }(window), require(["requireLib"]), require(["common/feature-detection"]), require(["common/lazysizes"]), require(["common/gdpr"]), define("main", function() {}), define("polyfill/lineclamp", [], function() {
        /*!
         * Clamp.js 0.5.1
         *
         * Copyright 2011-2013, Joseph Schmitt http://joe.sh
         * Released under the WTFPL license
         * http://sam.zoy.org/wtfpl/
         */
        function e(e, t) {
            function n(e, t) {
                return l.getComputedStyle || (l.getComputedStyle = function(e, t) {
                    return this.el = e, this.getPropertyValue = function(t) {
                        var n = /(\-([a-z]){1})/g;
                        return "float" == t && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function(e, t, n) {
                            return n.toUpperCase()
                        })), e.currentStyle && e.currentStyle[t] ? e.currentStyle[t] : null
                    }, this
                }), l.getComputedStyle(e, null).getPropertyValue(t)
            }

            function i(t) {
                t = t || e.clientHeight;
                var n = r(e);
                return Math.max(Math.floor(t / n), 0)
            }

            function r(e) {
                var t = n(e, "line-height");
                return "normal" == t && (t = 1.2 * parseInt(n(e, "font-size"))), parseInt(t)
            }

            function o(t) {
                return t.lastChild.children && 0 < t.lastChild.children.length ? o(Array.prototype.slice.call(t.children).pop()) : t.lastChild && t.lastChild.nodeValue && "" != t.lastChild.nodeValue && t.lastChild.nodeValue != u.truncationChar ? t.lastChild : (t.lastChild.parentNode.removeChild(t.lastChild), o(e))
            }

            function a(e, t) {
                e.nodeValue = t + u.truncationChar
            }
            t = t || {};
            var s, l = window,
                u = {
                    clamp: t.clamp || 2,
                    useNativeClamp: void 0 === t.useNativeClamp || t.useNativeClamp,
                    splitOnChars: t.splitOnChars || [".", "-", "–", "—", " "],
                    animate: t.animate || !1,
                    truncationChar: t.truncationChar || "…",
                    truncationHTML: t.truncationHTML
                },
                c = e.style,
                d = e.innerHTML,
                f = void 0 !== e.style.webkitLineClamp,
                p = u.clamp,
                h = p.indexOf && (-1 < p.indexOf("px") || -1 < p.indexOf("em"));
            u.truncationHTML && ((s = document.createElement("span")).innerHTML = u.truncationHTML);
            var g, m, v, y, b = u.splitOnChars.slice(0),
                w = b[0];
            return "auto" == p ? p = i() : h && (p = i(parseInt(p))), f && u.useNativeClamp ? (c.overflow = "hidden", c.textOverflow = "ellipsis", c.webkitBoxOrient = "vertical", c.display = "-webkit-box", c.webkitLineClamp = p, h && (c.height = u.clamp + "px")) : (y = p, (c = r(e) * y) <= e.clientHeight && (v = function t(n, i) {
                if (i) {
                    var r = n.nodeValue.replace(u.truncationChar, "");
                    if (g || (w = 0 < b.length ? b.shift() : "", g = r.split(w)), 1 < g.length ? (m = g.pop(), a(n, g.join(w))) : g = null, s && (n.nodeValue = n.nodeValue.replace(u.truncationChar, ""), e.innerHTML = n.nodeValue + " " + s.innerHTML + u.truncationChar), g) {
                        if (e.clientHeight <= i) {
                            if (!(0 <= b.length && "" != w)) return e.innerHTML;
                            a(n, g.join(w) + w + m), g = null
                        }
                    } else "" == w && (a(n, ""), n = o(e), b = u.splitOnChars.slice(0), w = b[0], m = g = null);
                    if (!u.animate) return t(n, i);
                    setTimeout(function() {
                        t(n, i)
                    }, !0 === u.animate ? 10 : u.animate)
                }
            }(o(e), c))), {
                original: d,
                clamped: v
            }
        }
        for (var t = document.querySelectorAll('.component[class*="view-list"] .item:nth-of-type(1) .item__dek, .component[class*="video-shelf"] .item:nth-of-type(1) .item__dek'), n = 0; n < t.length; n++) e(t[n], {
            clamp: 9
        });
        t = document.querySelectorAll('.component[class*="view-list"]:not([class*="list-stack"]) .item:not(.item--type-ad):nth-of-type(1) .item__hed, .component[class*="video-shelf"] .item:not(.item--type-ad):nth-of-type(1) .item__hed');
        for (n = 0; n < t.length; n++) e(t[n], {
            clamp: 6
        });
        t = document.querySelectorAll('.component[class*="view-list"]:not([class*="list-stack"]) .item:not(.item--type-ad):not(:nth-of-type(1)) .item__hed, .component[class*="video-shelf"] .item:not(.item--type-ad):not(:nth-of-type(1)) .item__hed, .component[class*="video-shelf-with-hero"] .item:nth-of-type(1) .item__hed');
        for (n = 0; n < t.length; n++) e(t[n], {
            clamp: 4
        });
        t = document.querySelectorAll('.component[class*="list-stack"] .item .item__hed');
        for (n = 0; n < t.length; n++) e(t[n], {
            clamp: 2
        })
    }), define("polyfill/objectfit", [], function() {
        if (void 0 !== document.body.style.msTouchAction)
            for (var e, t, n = document.querySelectorAll(".item__thumb img"), i = 0; i < n.length; i++) {
                e = n[i];
                var r = getComputedStyle(e).fontFamily;
                if (null !== (t = /(object-fit)\s*:\s*([-.\w\s%]+)/g.exec(r)) && "cover" === t[2]) {
                    var o = e.getAttribute("src");
                    e.parentNode.style.backgroundImage = "url(" + o + ")", e.parentNode.classList.add("compat-object-fit")
                }
            }
    }),
    /**
     * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS-IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    define("common/amp-linker-parser", [], function() {
        "use strict";

        function e(e) {
            if ("undefined" != typeof TextDecoder) return new TextDecoder("utf-8").decode(e);
            var t = function(e) {
                for (var t = new Array(e.length), n = 0; n < e.length; n++) t[n] = String.fromCharCode(e[n]);
                return t.join("")
            }(new Uint8Array(e.buffer || e));
            return decodeURIComponent(escape(t))
        }

        function t(e) {
            for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) {
                var i = e.charCodeAt(n);
                i <= 255 && console.warn("Characters must be in range [0,255]"), t[n] = i
            }
            return t
        }
        var n = {
            "-": "+",
            _: "/",
            ".": "="
        };

        function i(i) {
            return e(function(e) {
                return t(atob(e.replace(/[-_.]/g, function(e) {
                    return n[e]
                })))
            }(i))
        }
        var r = 3988292384,
            o = null;

        function a(e) {
            o || (o = function() {
                for (var e = new Array(256), t = 0; t < 256; t++) {
                    for (var n = t, i = 0; i < 8; i++) 1 & n ? n = n >>> 1 ^ r : n >>>= 1;
                    e[t] = n
                }
                return e
            }());
            for (var n, i = (n = e, "undefined" != typeof TextEncoder ? new TextEncoder("utf-8").encode(n) : t(unescape(encodeURIComponent(n)))), a = -1 >>> 0, s = 0; s < i.length; s++) {
                var l = 255 & (a ^ i[s]);
                a = a >>> 8 ^ o[l]
            }
            return (-1 ^ a) >>> 0
        }
        var s = "*",
            l = /^[a-zA-Z0-9\-_.]+$/,
            u = 1,
            c = 1,
            d = "amp-analytics/linker";

        function f(e, t) {
            var n, i, r = t || 0;
            return a([(n = (new Date).getTimezoneOffset(), i = window.navigator.userLanguage || window.navigator.language, [window.navigator.userAgent, n, i].join(s)), Math.floor(Date.now() / 6e4) - r, e].join(s)).toString(36)
        }

        function p(e) {
            return i(String(e))
        }
        return function(e) {
            var t = function(e) {
                var t = e.split(s),
                    n = t.length % 2 == 0;
                if (t.length < 4 || !n) return console.error(d, "Invalid linker_param value " + e), null;
                var i = parseInt(t.shift());
                if (i !== c) return console.error(d, "Invalid version number " + i), null;
                var r = t.shift(),
                    o = t.join(s);
                return {
                    checksum: r,
                    serializedIds: o
                }
            }(e);
            if (!t) return null;
            var n = t.checksum,
                i = t.serializedIds;
            return function(e, t) {
                for (var n = 0; n <= u; n++) {
                    var i = f(e, n);
                    if (i == t) return !0
                }
                return !1
            }(i, n) ? function(e) {
                for (var t = {}, n = e.split(s), i = 0; i < n.length; i += 2) {
                    var r = n[i],
                        o = l.test(r);
                    if (o) {
                        var a = p(n[i + 1]);
                        t[r] = a
                    } else console.error(d, "Invalid linker key " + r + ", value ignored")
                }
                return t
            }(i) : (console.error(d, "LINKER_PARAM value checksum not valid"), null)
        }
    }), define("common/s-vid-override", ["common/amp-linker-parser"], function(e) {
        var t = window.location.search.match(/[?&]_amp=([^&]+)/);
        if (t) {
            var n = e(t[1]);
            n && n.s_vid && (window.s_vid = CBSNEWS.tracking.visitorID = n.s_vid)
        }
    }), window.uuid || (window.uuid = {}), void 0 === window.uuid.v4 && (window.uuid.v4 = function() {
        var e, t, n = "";
        for (e = 0; e < 32; e++) t = 16 * Math.random() | 0, 8 != e && 12 != e && 16 != e && 20 != e || (n += "-"), n += (12 == e ? 4 : 16 == e ? 3 & t | 8 : t).toString(16);
        return n
    }), define("fly/libs/uuid.v4", function() {}), define("third-party/gpt", [], function() {
        CBSNEWS.features.executeWithConsent(["ads", "adsGPT"], function() {
            require(["//www.googletagservices.com/tag/js/gpt.js"])
        }, this)
    }), define("third-party/index-exchange", [], function() {
        CBSNEWS.features.executeWithConsent(["ads", "adsIndexExchange"], function() {
            require(["//js-sec.indexww.com/ht/ls-cbsnews.js"])
        }, this)
    }), define("third-party/sonobi", [], function() {
        CBSNEWS.features.executeWithConsent(["ads", "adsSonobi"], function() {
            require(["//mtrx.go.sonobi.com/morpheus.cbsnews.9251.js"])
        }, this)
    }),
    /**
     * @license RequireJS domReady 2.0.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
     * Available via the MIT or new BSD license.
     * see: http://github.com/requirejs/domReady for details
     */
    define("domReady", [], function() {
        "use strict";
        var e, t, n, i = "undefined" != typeof window && window.document,
            r = !i,
            o = i ? document : null,
            a = [];

        function s() {
            var e = a;
            r && e.length && (a = [], function(e) {
                var t;
                for (t = 0; t < e.length; t += 1) e[t](o)
            }(e))
        }

        function l() {
            r || (r = !0, n && clearInterval(n), s())
        }
        if (i) {
            if (document.addEventListener) document.addEventListener("DOMContentLoaded", l, !1), window.addEventListener("load", l, !1);
            else if (window.attachEvent) {
                window.attachEvent("onload", l), t = document.createElement("div");
                try {
                    e = null === window.frameElement
                } catch (e) {}
                t.doScroll && e && window.external && (n = setInterval(function() {
                    try {
                        t.doScroll(), l()
                    } catch (e) {}
                }, 30))
            }
            "complete" === document.readyState && l()
        }

        function u(e) {
            return r ? e(o) : a.push(e), u
        }
        return u.version = "2.0.1", u.load = function(e, t, n, i) {
            i.isBuild ? n(null) : u(n)
        }, u
    }),
    /*!
     * jQuery JavaScript Library v1.11.3
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2015-04-28T16:19Z
     */
    function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        var n = [],
            i = n.slice,
            r = n.concat,
            o = n.push,
            a = n.indexOf,
            s = {},
            l = s.toString,
            u = s.hasOwnProperty,
            c = {},
            d = function(e, t) {
                return new d.fn.init(e, t)
            },
            f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            p = /^-ms-/,
            h = /-([\da-z])/gi,
            g = function(e, t) {
                return t.toUpperCase()
            };

        function m(e) {
            var t = "length" in e && e.length,
                n = d.type(e);
            return "function" !== n && !d.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }
        d.fn = d.prototype = {
            jquery: "1.11.3",
            constructor: d,
            selector: "",
            length: 0,
            toArray: function() {
                return i.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : i.call(this)
            },
            pushStack: function(e) {
                var t = d.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return d.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(d.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(i.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: o,
            sort: n.sort,
            splice: n.splice
        }, d.extend = d.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || d.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                if (null != (r = arguments[s]))
                    for (i in r) e = a[i], a !== (n = r[i]) && (u && n && (d.isPlainObject(n) || (t = d.isArray(n))) ? (t ? (t = !1, o = e && d.isArray(e) ? e : []) : o = e && d.isPlainObject(e) ? e : {}, a[i] = d.extend(u, o, n)) : void 0 !== n && (a[i] = n));
            return a
        }, d.extend({
            expando: "jQuery" + ("1.11.3" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === d.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === d.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !d.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== d.type(e) || e.nodeType || d.isWindow(e)) return !1;
                try {
                    if (e.constructor && !u.call(e, "constructor") && !u.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (c.ownLast)
                    for (t in e) return u.call(e, t);
                for (t in e);
                return void 0 === t || u.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? s[l.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && d.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(p, "ms-").replace(h, g)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, n) {
                var i = 0,
                    r = e.length,
                    o = m(e);
                if (n) {
                    if (o)
                        for (; i < r && !1 !== t.apply(e[i], n); i++);
                    else
                        for (i in e)
                            if (!1 === t.apply(e[i], n)) break
                } else if (o)
                    for (; i < r && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(f, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (m(Object(e)) ? d.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)), n
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (a) return a.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
                if (n != n)
                    for (; void 0 !== t[i];) e[r++] = t[i++];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
                return i
            },
            map: function(e, t, n) {
                var i, o = 0,
                    a = e.length,
                    s = [];
                if (m(e))
                    for (; o < a; o++) null != (i = t(e[o], o, n)) && s.push(i);
                else
                    for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return r.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, o;
                if ("string" == typeof t && (o = e[t], t = e, e = o), d.isFunction(e)) return n = i.call(arguments, 2), (r = function() {
                    return e.apply(t || this, n.concat(i.call(arguments)))
                }).guid = e.guid = e.guid || d.guid++, r
            },
            now: function() {
                return +new Date
            },
            support: c
        }), d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            s["[object " + t + "]"] = t.toLowerCase()
        });
        var v =
            /*!
             * Sizzle CSS Selector Engine v2.2.0-pre
             * http://sizzlejs.com/
             *
             * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2014-12-16
             */
            function(e) {
                var t, n, i, r, o, a, s, l, u, c, d, f, p, h, g, m, v, y, b, w = "sizzle" + 1 * new Date,
                    x = e.document,
                    C = 0,
                    E = 0,
                    S = ae(),
                    k = ae(),
                    T = ae(),
                    A = function(e, t) {
                        return e === t && (d = !0), 0
                    },
                    _ = 1 << 31,
                    N = {}.hasOwnProperty,
                    L = [],
                    D = L.pop,
                    j = L.push,
                    q = L.push,
                    O = L.slice,
                    I = function(e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    P = "[\\x20\\t\\r\\n\\f]",
                    R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    B = R.replace("w", "w#"),
                    H = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + P + "*\\]",
                    W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                    z = new RegExp(P + "+", "g"),
                    F = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                    V = new RegExp("^" + P + "*," + P + "*"),
                    U = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                    $ = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
                    G = new RegExp(W),
                    Q = new RegExp("^" + B + "$"),
                    X = {
                        ID: new RegExp("^#(" + R + ")"),
                        CLASS: new RegExp("^\\.(" + R + ")"),
                        TAG: new RegExp("^(" + R.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + H),
                        PSEUDO: new RegExp("^" + W),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + M + ")$", "i"),
                        needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                    },
                    J = /^(?:input|select|textarea|button)$/i,
                    Y = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = /'|\\/g,
                    ne = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                    ie = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    re = function() {
                        f()
                    };
                try {
                    q.apply(L = O.call(x.childNodes), x.childNodes), L[x.childNodes.length].nodeType
                } catch (e) {
                    q = {
                        apply: L.length ? function(e, t) {
                            j.apply(e, O.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }

                function oe(e, t, i, r) {
                    var o, s, u, c, d, h, v, y, C, E;
                    if ((t ? t.ownerDocument || t : x) !== p && f(t), i = i || [], c = (t = t || p).nodeType, "string" != typeof e || !e || 1 !== c && 9 !== c && 11 !== c) return i;
                    if (!r && g) {
                        if (11 !== c && (o = Z.exec(e)))
                            if (u = o[1]) {
                                if (9 === c) {
                                    if (!(s = t.getElementById(u)) || !s.parentNode) return i;
                                    if (s.id === u) return i.push(s), i
                                } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(u)) && b(t, s) && s.id === u) return i.push(s), i
                            } else {
                                if (o[2]) return q.apply(i, t.getElementsByTagName(e)), i;
                                if ((u = o[3]) && n.getElementsByClassName) return q.apply(i, t.getElementsByClassName(u)), i
                            } if (n.qsa && (!m || !m.test(e))) {
                            if (y = v = w, C = t, E = 1 !== c && e, 1 === c && "object" !== t.nodeName.toLowerCase()) {
                                for (h = a(e), (v = t.getAttribute("id")) ? y = v.replace(te, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", d = h.length; d--;) h[d] = y + me(h[d]);
                                C = ee.test(e) && he(t.parentNode) || t, E = h.join(",")
                            }
                            if (E) try {
                                return q.apply(i, C.querySelectorAll(E)), i
                            } catch (e) {} finally {
                                v || t.removeAttribute("id")
                            }
                        }
                    }
                    return l(e.replace(F, "$1"), t, i, r)
                }

                function ae() {
                    var e = [];
                    return function t(n, r) {
                        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
                    }
                }

                function se(e) {
                    return e[w] = !0, e
                }

                function le(e) {
                    var t = p.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function ue(e, t) {
                    for (var n = e.split("|"), r = e.length; r--;) i.attrHandle[n[r]] = t
                }

                function ce(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || _) - (~e.sourceIndex || _);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function de(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function fe(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function pe(e) {
                    return se(function(t) {
                        return t = +t, se(function(n, i) {
                            for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function he(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = oe.support = {}, o = oe.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, f = oe.setDocument = function(e) {
                        var t, r, a = e ? e.ownerDocument || e : x;
                        return a !== p && 9 === a.nodeType && a.documentElement ? (p = a, h = a.documentElement, (r = a.defaultView) && r !== r.top && (r.addEventListener ? r.addEventListener("unload", re, !1) : r.attachEvent && r.attachEvent("onunload", re)), g = !o(a), n.attributes = le(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), n.getElementsByTagName = le(function(e) {
                            return e.appendChild(a.createComment("")), !e.getElementsByTagName("*").length
                        }), n.getElementsByClassName = K.test(a.getElementsByClassName), n.getById = le(function(e) {
                            return h.appendChild(e).id = w, !a.getElementsByName || !a.getElementsByName(w).length
                        }), n.getById ? (i.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : []
                            }
                        }, i.filter.ID = function(e) {
                            var t = e.replace(ne, ie);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }) : (delete i.find.ID, i.filter.ID = function(e) {
                            var t = e.replace(ne, ie);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, i = [],
                                r = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                return i
                            }
                            return o
                        }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (g) return t.getElementsByClassName(e)
                        }, v = [], m = [], (n.qsa = K.test(a.querySelectorAll)) && (le(function(e) {
                            h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                        }), le(function(e) {
                            var t = a.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                        })), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function(e) {
                            n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", W)
                        }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, A = t ? function(e, t) {
                            if (e === t) return d = !0, 0;
                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === a || e.ownerDocument === x && b(x, e) ? -1 : t === a || t.ownerDocument === x && b(x, t) ? 1 : c ? I(c, e) - I(c, t) : 0 : 4 & i ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return d = !0, 0;
                            var n, i = 0,
                                r = e.parentNode,
                                o = t.parentNode,
                                s = [e],
                                l = [t];
                            if (!r || !o) return e === a ? -1 : t === a ? 1 : r ? -1 : o ? 1 : c ? I(c, e) - I(c, t) : 0;
                            if (r === o) return ce(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) l.unshift(n);
                            for (; s[i] === l[i];) i++;
                            return i ? ce(s[i], l[i]) : s[i] === x ? -1 : l[i] === x ? 1 : 0
                        }, a) : p
                    }, oe.matches = function(e, t) {
                        return oe(e, null, null, t)
                    }, oe.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== p && f(e), t = t.replace($, "='$1']"), n.matchesSelector && g && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                            var i = y.call(e, t);
                            if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                        } catch (e) {}
                        return oe(t, p, null, [e]).length > 0
                    }, oe.contains = function(e, t) {
                        return (e.ownerDocument || e) !== p && f(e), b(e, t)
                    }, oe.attr = function(e, t) {
                        (e.ownerDocument || e) !== p && f(e);
                        var r = i.attrHandle[t.toLowerCase()],
                            o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                        return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }, oe.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, oe.uniqueSort = function(e) {
                        var t, i = [],
                            r = 0,
                            o = 0;
                        if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), d) {
                            for (; t = e[o++];) t === e[o] && (r = i.push(o));
                            for (; r--;) e.splice(i[r], 1)
                        }
                        return c = null, e
                    }, r = oe.getText = function(e) {
                        var t, n = "",
                            i = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else
                            for (; t = e[i++];) n += r(t);
                        return n
                    }, (i = oe.selectors = {
                        cacheLength: 50,
                        createPseudo: se,
                        match: X,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(ne, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(ne, ie).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = S[e + " "];
                                return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && S(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(e, t, n) {
                                return function(i) {
                                    var r = oe.attr(i, e);
                                    return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(z, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, i, r) {
                                var o = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === i && 0 === r ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, l) {
                                    var u, c, d, f, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                                        m = t.parentNode,
                                        v = s && t.nodeName.toLowerCase(),
                                        y = !l && !s;
                                    if (m) {
                                        if (o) {
                                            for (; g;) {
                                                for (d = t; d = d[g];)
                                                    if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                h = g = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                            for (p = (u = (c = m[w] || (m[w] = {}))[e] || [])[0] === C && u[1], f = u[0] === C && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || h.pop();)
                                                if (1 === d.nodeType && ++f && d === t) {
                                                    c[e] = [C, p, f];
                                                    break
                                                }
                                        } else if (y && (u = (t[w] || (t[w] = {}))[e]) && u[0] === C) f = u[1];
                                        else
                                            for (;
                                                (d = ++p && d && d[g] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[w] || (d[w] = {}))[e] = [C, f]), d !== t)););
                                        return (f -= r) === i || f % i == 0 && f / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                                return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                                    for (var i, o = r(e, t), a = o.length; a--;) e[i = I(e, o[a])] = !(n[i] = o[a])
                                }) : function(e) {
                                    return r(e, 0, n)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: se(function(e) {
                                var t = [],
                                    n = [],
                                    i = s(e.replace(F, "$1"));
                                return i[w] ? se(function(e, t, n, r) {
                                    for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                }) : function(e, r, o) {
                                    return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: se(function(e) {
                                return function(t) {
                                    return oe(e, t).length > 0
                                }
                            }),
                            contains: se(function(e) {
                                return e = e.replace(ne, ie),
                                    function(t) {
                                        return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                                    }
                            }),
                            lang: se(function(e) {
                                return Q.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(ne, ie).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: function(e) {
                                return !1 === e.disabled
                            },
                            disabled: function(e) {
                                return !0 === e.disabled
                            },
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !i.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Y.test(e.nodeName)
                            },
                            input: function(e) {
                                return J.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: pe(function() {
                                return [0]
                            }),
                            last: pe(function(e, t) {
                                return [t - 1]
                            }),
                            eq: pe(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: pe(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: pe(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: pe(function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                                return e
                            }),
                            gt: pe(function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                return e
                            })
                        }
                    }).pseudos.nth = i.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) i.pseudos[t] = de(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) i.pseudos[t] = fe(t);

                function ge() {}

                function me(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }

                function ve(e, t, n) {
                    var i = t.dir,
                        r = n && "parentNode" === i,
                        o = E++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) return e(t, n, o)
                    } : function(t, n, a) {
                        var s, l, u = [C, o];
                        if (a) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || r) {
                                    if ((s = (l = t[w] || (t[w] = {}))[i]) && s[0] === C && s[1] === o) return u[2] = s[2];
                                    if (l[i] = u, u[2] = e(t, n, a)) return !0
                                }
                    }
                }

                function ye(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function be(e, t, n, i, r) {
                    for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s)));
                    return a
                }

                function we(e, t, n, i, r, o) {
                    return i && !i[w] && (i = we(i)), r && !r[w] && (r = we(r, o)), se(function(o, a, s, l) {
                        var u, c, d, f = [],
                            p = [],
                            h = a.length,
                            g = o || function(e, t, n) {
                                for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            m = !e || !o && t ? g : be(g, f, e, s, l),
                            v = n ? r || (o ? e : h || i) ? [] : a : m;
                        if (n && n(m, v, s, l), i)
                            for (u = be(v, p), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (v[p[c]] = !(m[p[c]] = d));
                        if (o) {
                            if (r || e) {
                                if (r) {
                                    for (u = [], c = v.length; c--;)(d = v[c]) && u.push(m[c] = d);
                                    r(null, v = [], u, l)
                                }
                                for (c = v.length; c--;)(d = v[c]) && (u = r ? I(o, d) : f[c]) > -1 && (o[u] = !(a[u] = d))
                            }
                        } else v = be(v === a ? v.splice(h, v.length) : v), r ? r(null, a, v, l) : q.apply(a, v)
                    })
                }

                function xe(e) {
                    for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = ve(function(e) {
                            return e === t
                        }, s, !0), d = ve(function(e) {
                            return I(t, e) > -1
                        }, s, !0), f = [function(e, n, i) {
                            var r = !a && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
                            return t = null, r
                        }]; l < o; l++)
                        if (n = i.relative[e[l].type]) f = [ve(ye(f), n)];
                        else {
                            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                                for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                                return we(l > 1 && ye(f), l > 1 && me(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type ? "*" : ""
                                })).replace(F, "$1"), n, l < r && xe(e.slice(l, r)), r < o && xe(e = e.slice(r)), r < o && me(e))
                            }
                            f.push(n)
                        } return ye(f)
                }
                return ge.prototype = i.filters = i.pseudos, i.setFilters = new ge, a = oe.tokenize = function(e, t) {
                    var n, r, o, a, s, l, u, c = k[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, l = [], u = i.preFilter; s;) {
                        for (a in n && !(r = V.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), o.push({
                                value: n,
                                type: r[0].replace(F, " ")
                            }), s = s.slice(n.length)), i.filter) !(r = X[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), o.push({
                            value: n,
                            type: a,
                            matches: r
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? oe.error(e) : k(e, l).slice(0)
                }, s = oe.compile = function(e, t) {
                    var n, r = [],
                        o = [],
                        s = T[e + " "];
                    if (!s) {
                        for (t || (t = a(e)), n = t.length; n--;)(s = xe(t[n]))[w] ? r.push(s) : o.push(s);
                        (s = T(e, function(e, t) {
                            var n = t.length > 0,
                                r = e.length > 0,
                                o = function(o, a, s, l, c) {
                                    var d, f, h, g = 0,
                                        m = "0",
                                        v = o && [],
                                        y = [],
                                        b = u,
                                        w = o || r && i.find.TAG("*", c),
                                        x = C += null == b ? 1 : Math.random() || .1,
                                        E = w.length;
                                    for (c && (u = a !== p && a); m !== E && null != (d = w[m]); m++) {
                                        if (r && d) {
                                            for (f = 0; h = e[f++];)
                                                if (h(d, a, s)) {
                                                    l.push(d);
                                                    break
                                                } c && (C = x)
                                        }
                                        n && ((d = !h && d) && g--, o && v.push(d))
                                    }
                                    if (g += m, n && m !== g) {
                                        for (f = 0; h = t[f++];) h(v, y, a, s);
                                        if (o) {
                                            if (g > 0)
                                                for (; m--;) v[m] || y[m] || (y[m] = D.call(l));
                                            y = be(y)
                                        }
                                        q.apply(l, y), c && !o && y.length > 0 && g + t.length > 1 && oe.uniqueSort(l)
                                    }
                                    return c && (C = x, u = b), v
                                };
                            return n ? se(o) : o
                        }(o, r))).selector = e
                    }
                    return s
                }, l = oe.select = function(e, t, r, o) {
                    var l, u, c, d, f, p = "function" == typeof e && e,
                        h = !o && a(e = p.selector || e);
                    if (r = r || [], 1 === h.length) {
                        if ((u = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && n.getById && 9 === t.nodeType && g && i.relative[u[1].type]) {
                            if (!(t = (i.find.ID(c.matches[0].replace(ne, ie), t) || [])[0])) return r;
                            p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                        }
                        for (l = X.needsContext.test(e) ? 0 : u.length; l-- && (c = u[l], !i.relative[d = c.type]);)
                            if ((f = i.find[d]) && (o = f(c.matches[0].replace(ne, ie), ee.test(u[0].type) && he(t.parentNode) || t))) {
                                if (u.splice(l, 1), !(e = o.length && me(u))) return q.apply(r, o), r;
                                break
                            }
                    }
                    return (p || s(e, h))(o, t, !g, r, ee.test(e) && he(t.parentNode) || t), r
                }, n.sortStable = w.split("").sort(A).join("") === w, n.detectDuplicates = !!d, f(), n.sortDetached = le(function(e) {
                    return 1 & e.compareDocumentPosition(p.createElement("div"))
                }), le(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || ue("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && le(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || ue("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), le(function(e) {
                    return null == e.getAttribute("disabled")
                }) || ue(M, function(e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), oe
            }(e);
        d.find = v, d.expr = v.selectors, d.expr[":"] = d.expr.pseudos, d.unique = v.uniqueSort, d.text = v.getText, d.isXMLDoc = v.isXML, d.contains = v.contains;
        var y = d.expr.match.needsContext,
            b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            w = /^.[^:#\[\.,]*$/;

        function x(e, t, n) {
            if (d.isFunction(t)) return d.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return d.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (w.test(t)) return d.filter(t, e, n);
                t = d.filter(t, e)
            }
            return d.grep(e, function(e) {
                return d.inArray(e, t) >= 0 !== n
            })
        }
        d.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? d.find.matchesSelector(i, e) ? [i] : [] : d.find.matches(e, d.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, d.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(d(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (d.contains(i[t], this)) return !0
                }));
                for (t = 0; t < r; t++) d.find(e, i[t], n);
                return (n = this.pushStack(r > 1 ? d.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(x(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(x(this, e || [], !0))
            },
            is: function(e) {
                return !!x(this, "string" == typeof e && y.test(e) ? d(e) : e || [], !1).length
            }
        });
        var C, E = e.document,
            S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (d.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : S.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || C).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof d ? t[0] : t, d.merge(this, d.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), b.test(n[1]) && d.isPlainObject(t))
                        for (n in t) d.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if ((i = E.getElementById(n[2])) && i.parentNode) {
                    if (i.id !== n[2]) return C.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = E, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : d.isFunction(e) ? void 0 !== C.ready ? C.ready(e) : e(d) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), d.makeArray(e, this))
        }).prototype = d.fn, C = d(E);
        var k = /^(?:parents|prev(?:Until|All))/,
            T = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function A(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }
        d.extend({
            dir: function(e, t, n) {
                for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !d(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), d.fn.extend({
            has: function(e) {
                var t, n = d(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; t < i; t++)
                        if (d.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], a = y.test(e) || "string" != typeof e ? d(e, t || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && d.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? d.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? d.inArray(this[0], d(e)) : d.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(d.unique(d.merge(this.get(), d(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), d.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return d.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return d.dir(e, "parentNode", n)
            },
            next: function(e) {
                return A(e, "nextSibling")
            },
            prev: function(e) {
                return A(e, "previousSibling")
            },
            nextAll: function(e) {
                return d.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return d.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return d.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return d.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return d.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return d.sibling(e.firstChild)
            },
            contents: function(e) {
                return d.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : d.merge([], e.childNodes)
            }
        }, function(e, t) {
            d.fn[e] = function(n, i) {
                var r = d.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = d.filter(i, r)), this.length > 1 && (T[e] || (r = d.unique(r)), k.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var _, N = /\S+/g,
            L = {};

        function D() {
            E.addEventListener ? (E.removeEventListener("DOMContentLoaded", j, !1), e.removeEventListener("load", j, !1)) : (E.detachEvent("onreadystatechange", j), e.detachEvent("onload", j))
        }

        function j() {
            (E.addEventListener || "load" === event.type || "complete" === E.readyState) && (D(), d.ready())
        }
        d.Callbacks = function(e) {
            e = "string" == typeof e ? L[e] || function(e) {
                var t = L[e] = {};
                return d.each(e.match(N) || [], function(e, n) {
                    t[n] = !0
                }), t
            }(e) : d.extend({}, e);
            var t, n, i, r, o, a, s = [],
                l = !e.once && [],
                u = function(d) {
                    for (n = e.memory && d, i = !0, o = a || 0, a = 0, r = s.length, t = !0; s && o < r; o++)
                        if (!1 === s[o].apply(d[0], d[1]) && e.stopOnFalse) {
                            n = !1;
                            break
                        } t = !1, s && (l ? l.length && u(l.shift()) : n ? s = [] : c.disable())
                },
                c = {
                    add: function() {
                        if (s) {
                            var i = s.length;
                            ! function t(n) {
                                d.each(n, function(n, i) {
                                    var r = d.type(i);
                                    "function" === r ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== r && t(i)
                                })
                            }(arguments), t ? r = s.length : n && (a = i, u(n))
                        }
                        return this
                    },
                    remove: function() {
                        return s && d.each(arguments, function(e, n) {
                            for (var i;
                                (i = d.inArray(n, s, i)) > -1;) s.splice(i, 1), t && (i <= r && r--, i <= o && o--)
                        }), this
                    },
                    has: function(e) {
                        return e ? d.inArray(e, s) > -1 : !(!s || !s.length)
                    },
                    empty: function() {
                        return s = [], r = 0, this
                    },
                    disable: function() {
                        return s = l = n = void 0, this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return l = void 0, n || c.disable(), this
                    },
                    locked: function() {
                        return !l
                    },
                    fireWith: function(e, n) {
                        return !s || i && !l || (n = [e, (n = n || []).slice ? n.slice() : n], t ? l.push(n) : u(n)), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, d.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", d.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", d.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", d.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return d.Deferred(function(n) {
                                d.each(t, function(t, o) {
                                    var a = d.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && d.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? d.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, d.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, r, o = 0,
                    a = i.call(arguments),
                    s = a.length,
                    l = 1 !== s || e && d.isFunction(e.promise) ? s : 0,
                    u = 1 === l ? e : d.Deferred(),
                    c = function(e, n, r) {
                        return function(o) {
                            n[e] = this, r[e] = arguments.length > 1 ? i.call(arguments) : o, r === t ? u.notifyWith(n, r) : --l || u.resolveWith(n, r)
                        }
                    };
                if (s > 1)
                    for (t = new Array(s), n = new Array(s), r = new Array(s); o < s; o++) a[o] && d.isFunction(a[o].promise) ? a[o].promise().done(c(o, r, a)).fail(u.reject).progress(c(o, n, t)) : --l;
                return l || u.resolveWith(r, a), u.promise()
            }
        }), d.fn.ready = function(e) {
            return d.ready.promise().done(e), this
        }, d.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? d.readyWait++ : d.ready(!0)
            },
            ready: function(e) {
                if (!0 === e ? !--d.readyWait : !d.isReady) {
                    if (!E.body) return setTimeout(d.ready);
                    d.isReady = !0, !0 !== e && --d.readyWait > 0 || (_.resolveWith(E, [d]), d.fn.triggerHandler && (d(E).triggerHandler("ready"), d(E).off("ready")))
                }
            }
        }), d.ready.promise = function(t) {
            if (!_)
                if (_ = d.Deferred(), "complete" === E.readyState) setTimeout(d.ready);
                else if (E.addEventListener) E.addEventListener("DOMContentLoaded", j, !1), e.addEventListener("load", j, !1);
            else {
                E.attachEvent("onreadystatechange", j), e.attachEvent("onload", j);
                var n = !1;
                try {
                    n = null == e.frameElement && E.documentElement
                } catch (e) {}
                n && n.doScroll && function e() {
                    if (!d.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(e, 50)
                        }
                        D(), d.ready()
                    }
                }()
            }
            return _.promise(t)
        };
        var q, O = "undefined";
        for (q in d(c)) break;
        c.ownLast = "0" !== q, c.inlineBlockNeedsLayout = !1, d(function() {
                var e, t, n, i;
                (n = E.getElementsByTagName("body")[0]) && n.style && (t = E.createElement("div"), (i = E.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== O && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", c.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = E.createElement("div");
                if (null == c.deleteExpando) {
                    c.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (e) {
                        c.deleteExpando = !1
                    }
                }
                e = null
            }(), d.acceptData = function(e) {
                var t = d.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
            };
        var I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            M = /([A-Z])/g;

        function P(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(M, "-$1").toLowerCase();
                if ("string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : I.test(n) ? d.parseJSON(n) : n)
                    } catch (e) {}
                    d.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function R(e) {
            var t;
            for (t in e)
                if (("data" !== t || !d.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function B(e, t, i, r) {
            if (d.acceptData(e)) {
                var o, a, s = d.expando,
                    l = e.nodeType,
                    u = l ? d.cache : e,
                    c = l ? e[s] : e[s] && s;
                if (c && u[c] && (r || u[c].data) || void 0 !== i || "string" != typeof t) return c || (c = l ? e[s] = n.pop() || d.guid++ : s), u[c] || (u[c] = l ? {} : {
                    toJSON: d.noop
                }), "object" != typeof t && "function" != typeof t || (r ? u[c] = d.extend(u[c], t) : u[c].data = d.extend(u[c].data, t)), a = u[c], r || (a.data || (a.data = {}), a = a.data), void 0 !== i && (a[d.camelCase(t)] = i), "string" == typeof t ? null == (o = a[t]) && (o = a[d.camelCase(t)]) : o = a, o
            }
        }

        function H(e, t, n) {
            if (d.acceptData(e)) {
                var i, r, o = e.nodeType,
                    a = o ? d.cache : e,
                    s = o ? e[d.expando] : d.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        r = (t = d.isArray(t) ? t.concat(d.map(t, d.camelCase)) : t in i ? [t] : (t = d.camelCase(t)) in i ? [t] : t.split(" ")).length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !R(i) : !d.isEmptyObject(i)) return
                    }(n || (delete a[s].data, R(a[s]))) && (o ? d.cleanData([e], !0) : c.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }
        d.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? d.cache[e[d.expando]] : e[d.expando]) && !R(e)
            },
            data: function(e, t, n) {
                return B(e, t, n)
            },
            removeData: function(e, t) {
                return H(e, t)
            },
            _data: function(e, t, n) {
                return B(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return H(e, t, !0)
            }
        }), d.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = d.data(o), 1 === o.nodeType && !d._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && P(o, i = d.camelCase(i.slice(5)), r[i]);
                        d._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    d.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    d.data(this, e, t)
                }) : o ? P(o, e, d.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    d.removeData(this, e)
                })
            }
        }), d.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = d._data(e, t), n && (!i || d.isArray(n) ? i = d._data(e, t, d.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = d.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = d._queueHooks(e, t);
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                    d.dequeue(e, t)
                }, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return d._data(e, n) || d._data(e, n, {
                    empty: d.Callbacks("once memory").add(function() {
                        d._removeData(e, t + "queue"), d._removeData(e, n)
                    })
                })
            }
        }), d.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? d.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = d.queue(this, e, t);
                    d._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && d.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    d.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = d.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = d._data(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            z = ["Top", "Right", "Bottom", "Left"],
            F = function(e, t) {
                return e = t || e, "none" === d.css(e, "display") || !d.contains(e.ownerDocument, e)
            },
            V = d.access = function(e, t, n, i, r, o, a) {
                var s = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === d.type(n))
                    for (s in r = !0, n) d.access(e, t, s, n[s], !0, o, a);
                else if (void 0 !== i && (r = !0, d.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                        return u.call(d(e), n)
                    })), t))
                    for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
            },
            U = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = E.createElement("input"),
                t = E.createElement("div"),
                n = E.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c.leadingWhitespace = 3 === t.firstChild.nodeType, c.tbody = !t.getElementsByTagName("tbody").length, c.htmlSerialize = !!t.getElementsByTagName("link").length, c.html5Clone = "<:nav></:nav>" !== E.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), c.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", c.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                    c.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == c.deleteExpando) {
                c.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    c.deleteExpando = !1
                }
            }
        }(),
        function() {
            var t, n, i = E.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (c[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), c[t + "Bubbles"] = !1 === i.attributes[n].expando);
            i = null
        }();
        var $ = /^(?:input|select|textarea)$/i,
            G = /^key/,
            Q = /^(?:mouse|pointer|contextmenu)|click/,
            X = /^(?:focusinfocus|focusoutblur)$/,
            J = /^([^.]*)(?:\.(.+)|)$/;

        function Y() {
            return !0
        }

        function K() {
            return !1
        }

        function Z() {
            try {
                return E.activeElement
            } catch (e) {}
        }

        function ee(e) {
            var t = te.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }
        d.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, a, s, l, u, c, f, p, h, g, m, v = d._data(e);
                if (v) {
                    for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = d.guid++), (a = v.events) || (a = v.events = {}), (c = v.handle) || ((c = v.handle = function(e) {
                            return typeof d === O || e && d.event.triggered === e.type ? void 0 : d.event.dispatch.apply(c.elem, arguments)
                        }).elem = e), s = (t = (t || "").match(N) || [""]).length; s--;) h = m = (o = J.exec(t[s]) || [])[1], g = (o[2] || "").split(".").sort(), h && (u = d.event.special[h] || {}, h = (r ? u.delegateType : u.bindType) || h, u = d.event.special[h] || {}, f = d.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && d.expr.match.needsContext.test(r),
                        namespace: g.join(".")
                    }, l), (p = a[h]) || ((p = a[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, g, c) || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, f) : p.push(f), d.event.global[h] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, l, u, c, f, p, h, g, m, v = d.hasData(e) && d._data(e);
                if (v && (c = v.events)) {
                    for (u = (t = (t || "").match(N) || [""]).length; u--;)
                        if (h = m = (s = J.exec(t[u]) || [])[1], g = (s[2] || "").split(".").sort(), h) {
                            for (f = d.event.special[h] || {}, p = c[h = (i ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) a = p[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                            l && !p.length && (f.teardown && !1 !== f.teardown.call(e, g, v.handle) || d.removeEvent(e, h, v.handle), delete c[h])
                        } else
                            for (h in c) d.event.remove(e, h + t[u], n, i, !0);
                    d.isEmptyObject(c) && (delete v.handle, d._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, r) {
                var o, a, s, l, c, f, p, h = [i || E],
                    g = u.call(t, "type") ? t.type : t,
                    m = u.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = f = i = i || E, 3 !== i.nodeType && 8 !== i.nodeType && !X.test(g + d.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), a = g.indexOf(":") < 0 && "on" + g, (t = t[d.expando] ? t : new d.Event(g, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : d.makeArray(n, [t]), c = d.event.special[g] || {}, r || !c.trigger || !1 !== c.trigger.apply(i, n))) {
                    if (!r && !c.noBubble && !d.isWindow(i)) {
                        for (l = c.delegateType || g, X.test(l + g) || (s = s.parentNode); s; s = s.parentNode) h.push(s), f = s;
                        f === (i.ownerDocument || E) && h.push(f.defaultView || f.parentWindow || e)
                    }
                    for (p = 0;
                        (s = h[p++]) && !t.isPropagationStopped();) t.type = p > 1 ? l : c.bindType || g, (o = (d._data(s, "events") || {})[t.type] && d._data(s, "handle")) && o.apply(s, n), (o = a && s[a]) && o.apply && d.acceptData(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
                    if (t.type = g, !r && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(h.pop(), n)) && d.acceptData(i) && a && i[g] && !d.isWindow(i)) {
                        (f = i[a]) && (i[a] = null), d.event.triggered = g;
                        try {
                            i[g]()
                        } catch (e) {}
                        d.event.triggered = void 0, f && (i[a] = f)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = d.event.fix(e);
                var t, n, r, o, a, s, l = i.call(arguments),
                    u = (d._data(this, "events") || {})[e.type] || [],
                    c = d.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                    for (s = d.event.handlers.call(this, e, u), t = 0;
                        (o = s[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, a = 0;
                            (r = o.handlers[a++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (n = ((d.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (r = [], o = 0; o < s; o++) void 0 === r[n = (i = t[o]).selector + " "] && (r[n] = i.needsContext ? d(n, this).index(l) >= 0 : d.find(n, this, null, [l]).length), r[n] && r.push(i);
                            r.length && a.push({
                                elem: l,
                                handlers: r
                            })
                        } return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            fix: function(e) {
                if (e[d.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = Q.test(r) ? this.mouseHooks : G.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new d.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
                return e.target || (e.target = o.srcElement || E), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || E).documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== Z() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === Z() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (d.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    },
                    _default: function(e) {
                        return d.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = d.extend(new d.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? d.event.trigger(r, null, t) : d.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, d.removeEvent = E.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === O && (e[i] = null), e.detachEvent(i, n))
        }, d.Event = function(e, t) {
            if (!(this instanceof d.Event)) return new d.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Y : K) : this.type = e, t && d.extend(this, t), this.timeStamp = e && e.timeStamp || d.now(), this[d.expando] = !0
        }, d.Event.prototype = {
            isDefaultPrevented: K,
            isPropagationStopped: K,
            isImmediatePropagationStopped: K,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Y, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, d.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            d.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = e.relatedTarget,
                        r = e.handleObj;
                    return i && (i === this || d.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), c.submitBubbles || (d.event.special.submit = {
            setup: function() {
                if (d.nodeName(this, "form")) return !1;
                d.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = d.nodeName(t, "input") || d.nodeName(t, "button") ? t.form : void 0;
                    n && !d._data(n, "submitBubbles") && (d.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), d._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && d.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                if (d.nodeName(this, "form")) return !1;
                d.event.remove(this, "._submit")
            }
        }), c.changeBubbles || (d.event.special.change = {
            setup: function() {
                if ($.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (d.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), d.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), d.event.simulate("change", this, e, !0)
                })), !1;
                d.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    $.test(t.nodeName) && !d._data(t, "changeBubbles") && (d.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || d.event.simulate("change", this.parentNode, e, !0)
                    }), d._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return d.event.remove(this, "._change"), !$.test(this.nodeName)
            }
        }), c.focusinBubbles || d.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                d.event.simulate(t, e.target, d.event.fix(e), !0)
            };
            d.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = d._data(i, t);
                    r || i.addEventListener(e, n, !0), d._data(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = d._data(i, t) - 1;
                    r ? d._data(i, t, r) : (i.removeEventListener(e, n, !0), d._removeData(i, t))
                }
            }
        }), d.fn.extend({
            on: function(e, t, n, i, r) {
                var o, a;
                if ("object" == typeof e) {
                    for (o in "string" != typeof t && (n = n || t, t = void 0), e) this.on(o, t, n, e[o], r);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = K;
                else if (!i) return this;
                return 1 === r && (a = i, (i = function(e) {
                    return d().off(e), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = d.guid++)), this.each(function() {
                    d.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, d(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = K), this.each(function() {
                    d.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    d.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return d.event.trigger(e, t, n, !0)
            }
        });
        var te = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            ne = / jQuery\d+="(?:null|\d+)"/g,
            ie = new RegExp("<(?:" + te + ")[\\s/>]", "i"),
            re = /^\s+/,
            oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            ae = /<([\w:]+)/,
            se = /<tbody/i,
            le = /<|&#?\w+;/,
            ue = /<(?:script|style|link)/i,
            ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
            de = /^$|\/(?:java|ecma)script/i,
            fe = /^true\/(.*)/,
            pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            he = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            ge = ee(E).appendChild(E.createElement("div"));

        function me(e, t) {
            var n, i, r = 0,
                o = typeof e.getElementsByTagName !== O ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== O ? e.querySelectorAll(t || "*") : void 0;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || d.nodeName(i, t) ? o.push(i) : d.merge(o, me(i, t));
            return void 0 === t || t && d.nodeName(e, t) ? d.merge([e], o) : o
        }

        function ve(e) {
            U.test(e.type) && (e.defaultChecked = e.checked)
        }

        function ye(e, t) {
            return d.nodeName(e, "table") && d.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function be(e) {
            return e.type = (null !== d.find.attr(e, "type")) + "/" + e.type, e
        }

        function we(e) {
            var t = fe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function xe(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) d._data(n, "globalEval", !t || d._data(t[i], "globalEval"))
        }

        function Ce(e, t) {
            if (1 === t.nodeType && d.hasData(e)) {
                var n, i, r, o = d._data(e),
                    a = d._data(t, o),
                    s = o.events;
                if (s)
                    for (n in delete a.handle, a.events = {}, s)
                        for (i = 0, r = s[n].length; i < r; i++) d.event.add(t, n, s[n][i]);
                a.data && (a.data = d.extend({}, a.data))
            }
        }

        function Ee(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !c.noCloneEvent && t[d.expando]) {
                    for (i in (r = d._data(t)).events) d.removeEvent(t, i, r.handle);
                    t.removeAttribute(d.expando)
                }
                "script" === n && t.text !== e.text ? (be(t).text = e.text, we(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !d.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && U.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }
        he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td, d.extend({
            clone: function(e, t, n) {
                var i, r, o, a, s, l = d.contains(e.ownerDocument, e);
                if (c.html5Clone || d.isXMLDoc(e) || !ie.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ge.innerHTML = e.outerHTML, ge.removeChild(o = ge.firstChild)), !(c.noCloneEvent && c.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || d.isXMLDoc(e)))
                    for (i = me(o), s = me(e), a = 0; null != (r = s[a]); ++a) i[a] && Ee(r, i[a]);
                if (t)
                    if (n)
                        for (s = s || me(e), i = i || me(o), a = 0; null != (r = s[a]); a++) Ce(r, i[a]);
                    else Ce(e, o);
                return (i = me(o, "script")).length > 0 && xe(i, !l && me(e, "script")), i = s = r = null, o
            },
            buildFragment: function(e, t, n, i) {
                for (var r, o, a, s, l, u, f, p = e.length, h = ee(t), g = [], m = 0; m < p; m++)
                    if ((o = e[m]) || 0 === o)
                        if ("object" === d.type(o)) d.merge(g, o.nodeType ? [o] : o);
                        else if (le.test(o)) {
                    for (s = s || h.appendChild(t.createElement("div")), l = (ae.exec(o) || ["", ""])[1].toLowerCase(), f = he[l] || he._default, s.innerHTML = f[1] + o.replace(oe, "<$1></$2>") + f[2], r = f[0]; r--;) s = s.lastChild;
                    if (!c.leadingWhitespace && re.test(o) && g.push(t.createTextNode(re.exec(o)[0])), !c.tbody)
                        for (r = (o = "table" !== l || se.test(o) ? "<table>" !== f[1] || se.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; r--;) d.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                    for (d.merge(g, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = h.lastChild
                } else g.push(t.createTextNode(o));
                for (s && h.removeChild(s), c.appendChecked || d.grep(me(g, "input"), ve), m = 0; o = g[m++];)
                    if ((!i || -1 === d.inArray(o, i)) && (a = d.contains(o.ownerDocument, o), s = me(h.appendChild(o), "script"), a && xe(s), n))
                        for (r = 0; o = s[r++];) de.test(o.type || "") && n.push(o);
                return s = null, h
            },
            cleanData: function(e, t) {
                for (var i, r, o, a, s = 0, l = d.expando, u = d.cache, f = c.deleteExpando, p = d.event.special; null != (i = e[s]); s++)
                    if ((t || d.acceptData(i)) && (a = (o = i[l]) && u[o])) {
                        if (a.events)
                            for (r in a.events) p[r] ? d.event.remove(i, r) : d.removeEvent(i, r, a.handle);
                        u[o] && (delete u[o], f ? delete i[l] : typeof i.removeAttribute !== O ? i.removeAttribute(l) : i[l] = null, n.push(o))
                    }
            }
        }), d.fn.extend({
            text: function(e) {
                return V(this, function(e) {
                    return void 0 === e ? d.text(this) : this.empty().append((this[0] && this[0].ownerDocument || E).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ye(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = ye(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? d.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || d.cleanData(me(n)), n.parentNode && (t && d.contains(n.ownerDocument, n) && xe(me(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && d.cleanData(me(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && d.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return d.clone(this, e, t)
                })
            },
            html: function(e) {
                return V(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ne, "") : void 0;
                    if ("string" == typeof e && !ue.test(e) && (c.htmlSerialize || !ie.test(e)) && (c.leadingWhitespace || !re.test(e)) && !he[(ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(oe, "<$1></$2>");
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (d.cleanData(me(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, d.cleanData(me(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = r.apply([], e);
                var n, i, o, a, s, l, u = 0,
                    f = this.length,
                    p = this,
                    h = f - 1,
                    g = e[0],
                    m = d.isFunction(g);
                if (m || f > 1 && "string" == typeof g && !c.checkClone && ce.test(g)) return this.each(function(n) {
                    var i = p.eq(n);
                    m && (e[0] = g.call(this, n, i.html())), i.domManip(e, t)
                });
                if (f && (n = (l = d.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === l.childNodes.length && (l = n), n)) {
                    for (o = (a = d.map(me(l, "script"), be)).length; u < f; u++) i = l, u !== h && (i = d.clone(i, !0, !0), o && d.merge(a, me(i, "script"))), t.call(this[u], i, u);
                    if (o)
                        for (s = a[a.length - 1].ownerDocument, d.map(a, we), u = 0; u < o; u++) i = a[u], de.test(i.type || "") && !d._data(i, "globalEval") && d.contains(s, i) && (i.src ? d._evalUrl && d._evalUrl(i.src) : d.globalEval((i.text || i.textContent || i.innerHTML || "").replace(pe, "")));
                    l = n = null
                }
                return this
            }
        }), d.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            d.fn[e] = function(e) {
                for (var n, i = 0, r = [], a = d(e), s = a.length - 1; i <= s; i++) n = i === s ? this : this.clone(!0), d(a[i])[t](n), o.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Se, ke, Te = {};

        function Ae(t, n) {
            var i, r = d(n.createElement(t)).appendTo(n.body),
                o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : d.css(r[0], "display");
            return r.detach(), o
        }

        function _e(e) {
            var t = E,
                n = Te[e];
            return n || ("none" !== (n = Ae(e, t)) && n || ((t = ((Se = (Se || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Se[0].contentDocument).document).write(), t.close(), n = Ae(e, t), Se.detach()), Te[e] = n), n
        }
        c.shrinkWrapBlocks = function() {
            return null != ke ? ke : (ke = !1, (t = E.getElementsByTagName("body")[0]) && t.style ? (e = E.createElement("div"), (n = E.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), typeof e.style.zoom !== O && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(E.createElement("div")).style.width = "5px", ke = 3 !== e.offsetWidth), t.removeChild(n), ke) : void 0);
            var e, t, n
        };
        var Ne, Le, De = /^margin/,
            je = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
            qe = /^(top|right|bottom|left)$/;

        function Oe(e, t) {
            return {
                get: function() {
                    var n = e();
                    if (null != n) {
                        if (!n) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
        }
        e.getComputedStyle ? (Ne = function(t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
            }, Le = function(e, t, n) {
                var i, r, o, a, s = e.style;
                return a = (n = n || Ne(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || d.contains(e.ownerDocument, e) || (a = d.style(e, t)), je.test(a) && De.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
            }) : E.documentElement.currentStyle && (Ne = function(e) {
                return e.currentStyle
            }, Le = function(e, t, n) {
                var i, r, o, a, s = e.style;
                return null == (a = (n = n || Ne(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), je.test(a) && !qe.test(t) && (i = s.left, (o = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
            }),
            function() {
                var t, n, i, r, o, a, s;

                function l() {
                    var t, n, i, l;
                    (n = E.getElementsByTagName("body")[0]) && n.style && (t = E.createElement("div"), (i = E.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = o = !1, s = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null) || {}).top, o = "4px" === (e.getComputedStyle(t, null) || {
                        width: "4px"
                    }).width, (l = t.appendChild(E.createElement("div"))).style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", t.style.width = "1px", s = !parseFloat((e.getComputedStyle(l, null) || {}).marginRight), t.removeChild(l)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (l = t.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === l[0].offsetHeight) && (l[0].style.display = "", l[1].style.display = "none", a = 0 === l[0].offsetHeight), n.removeChild(i))
                }(t = E.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (n = (i = t.getElementsByTagName("a")[0]) && i.style) && (n.cssText = "float:left;opacity:.5", c.opacity = "0.5" === n.opacity, c.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === t.style.backgroundClip, c.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, d.extend(c, {
                    reliableHiddenOffsets: function() {
                        return null == a && l(), a
                    },
                    boxSizingReliable: function() {
                        return null == o && l(), o
                    },
                    pixelPosition: function() {
                        return null == r && l(), r
                    },
                    reliableMarginRight: function() {
                        return null == s && l(), s
                    }
                }))
            }(), d.swap = function(e, t, n, i) {
                var r, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
                return r
            };
        var Ie = /alpha\([^)]*\)/i,
            Me = /opacity\s*=\s*([^)]*)/,
            Pe = /^(none|table(?!-c[ea]).+)/,
            Re = new RegExp("^(" + W + ")(.*)$", "i"),
            Be = new RegExp("^([+-])=(" + W + ")", "i"),
            He = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            We = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ze = ["Webkit", "O", "Moz", "ms"];

        function Fe(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = ze.length; r--;)
                if ((t = ze[r] + n) in e) return t;
            return i
        }

        function Ve(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (o[a] = d._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && F(i) && (o[a] = d._data(i, "olddisplay", _e(i.nodeName)))) : (r = F(i), (n && "none" !== n || !r) && d._data(i, "olddisplay", r ? n : d.css(i, "display"))));
            for (a = 0; a < s; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function Ue(e, t, n) {
            var i = Re.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function $e(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += d.css(e, n + z[o], !0, r)), i ? ("content" === n && (a -= d.css(e, "padding" + z[o], !0, r)), "margin" !== n && (a -= d.css(e, "border" + z[o] + "Width", !0, r))) : (a += d.css(e, "padding" + z[o], !0, r), "padding" !== n && (a += d.css(e, "border" + z[o] + "Width", !0, r)));
            return a
        }

        function Ge(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = Ne(e),
                a = c.boxSizing && "border-box" === d.css(e, "boxSizing", !1, o);
            if (r <= 0 || null == r) {
                if (((r = Le(e, t, o)) < 0 || null == r) && (r = e.style[t]), je.test(r)) return r;
                i = a && (c.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + $e(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function Qe(e, t, n, i, r) {
            return new Qe.prototype.init(e, t, n, i, r)
        }
        d.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Le(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: c.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = d.camelCase(t),
                        l = e.style;
                    if (t = d.cssProps[s] || (d.cssProps[s] = Fe(l, s)), a = d.cssHooks[t] || d.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                    if ("string" === (o = typeof n) && (r = Be.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(d.css(e, t)), o = "number"), null != n && n == n && ("number" !== o || d.cssNumber[s] || (n += "px"), c.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                        l[t] = n
                    } catch (e) {}
                }
            },
            css: function(e, t, n, i) {
                var r, o, a, s = d.camelCase(t);
                return t = d.cssProps[s] || (d.cssProps[s] = Fe(e.style, s)), (a = d.cssHooks[t] || d.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Le(e, t, i)), "normal" === o && t in We && (o = We[t]), "" === n || n ? (r = parseFloat(o), !0 === n || d.isNumeric(r) ? r || 0 : o) : o
            }
        }), d.each(["height", "width"], function(e, t) {
            d.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return Pe.test(d.css(e, "display")) && 0 === e.offsetWidth ? d.swap(e, He, function() {
                        return Ge(e, t, i)
                    }) : Ge(e, t, i)
                },
                set: function(e, n, i) {
                    var r = i && Ne(e);
                    return Ue(0, n, i ? $e(e, t, i, c.boxSizing && "border-box" === d.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), c.opacity || (d.cssHooks.opacity = {
            get: function(e, t) {
                return Me.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = d.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === d.trim(o.replace(Ie, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = Ie.test(o) ? o.replace(Ie, r) : o + " " + r)
            }
        }), d.cssHooks.marginRight = Oe(c.reliableMarginRight, function(e, t) {
            if (t) return d.swap(e, {
                display: "inline-block"
            }, Le, [e, "marginRight"])
        }), d.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            d.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + z[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, De.test(e) || (d.cssHooks[e + t].set = Ue)
        }), d.fn.extend({
            css: function(e, t) {
                return V(this, function(e, t, n) {
                    var i, r, o = {},
                        a = 0;
                    if (d.isArray(t)) {
                        for (i = Ne(e), r = t.length; a < r; a++) o[t[a]] = d.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? d.style(e, t, n) : d.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return Ve(this, !0)
            },
            hide: function() {
                return Ve(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    F(this) ? d(this).show() : d(this).hide()
                })
            }
        }), d.Tween = Qe, Qe.prototype = {
            constructor: Qe,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (d.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Qe.propHooks[this.prop];
                return e && e.get ? e.get(this) : Qe.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Qe.propHooks[this.prop];
                return this.options.duration ? this.pos = t = d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Qe.propHooks._default.set(this), this
            }
        }, Qe.prototype.init.prototype = Qe.prototype, Qe.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = d.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
                },
                set: function(e) {
                    d.fx.step[e.prop] ? d.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[d.cssProps[e.prop]] || d.cssHooks[e.prop]) ? d.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, Qe.propHooks.scrollTop = Qe.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, d.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, d.fx = Qe.prototype.init, d.fx.step = {};
        var Xe, Je, Ye, Ke, Ze, et, tt, nt = /^(?:toggle|show|hide)$/,
            it = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
            rt = /queueHooks$/,
            ot = [function(e, t, n) {
                var i, r, o, a, s, l, u, f = this,
                    p = {},
                    h = e.style,
                    g = e.nodeType && F(e),
                    m = d._data(e, "fxshow");
                n.queue || (null == (s = d._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || l()
                }), s.unqueued++, f.always(function() {
                    f.always(function() {
                        s.unqueued--, d.queue(e, "fx").length || s.empty.fire()
                    })
                }));
                1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = d.css(e, "display"), "inline" === ("none" === u ? d._data(e, "olddisplay") || _e(e.nodeName) : u) && "none" === d.css(e, "float") && (c.inlineBlockNeedsLayout && "inline" !== _e(e.nodeName) ? h.zoom = 1 : h.display = "inline-block"));
                n.overflow && (h.overflow = "hidden", c.shrinkWrapBlocks() || f.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                }));
                for (i in t)
                    if (r = t[i], nt.exec(r)) {
                        if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[i]) continue;
                            g = !0
                        }
                        p[i] = m && m[i] || d.style(e, i)
                    } else u = void 0;
                if (d.isEmptyObject(p)) "inline" === ("none" === u ? _e(e.nodeName) : u) && (h.display = u);
                else
                    for (i in m ? "hidden" in m && (g = m.hidden) : m = d._data(e, "fxshow", {}), o && (m.hidden = !g), g ? d(e).show() : f.done(function() {
                            d(e).hide()
                        }), f.done(function() {
                            var t;
                            for (t in d._removeData(e, "fxshow"), p) d.style(e, t, p[t])
                        }), p) a = ut(g ? m[i] : 0, i, f), i in m || (m[i] = a.start, g && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }],
            at = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = it.exec(t),
                        o = r && r[3] || (d.cssNumber[e] ? "" : "px"),
                        a = (d.cssNumber[e] || "px" !== o && +i) && it.exec(d.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do {
                            a /= s = s || ".5", d.style(n.elem, e, a + o)
                        } while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };

        function st() {
            return setTimeout(function() {
                Xe = void 0
            }), Xe = d.now()
        }

        function lt(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = z[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function ut(e, t, n) {
            for (var i, r = (at[t] || []).concat(at["*"]), o = 0, a = r.length; o < a; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function ct(e, t, n) {
            var i, r, o = 0,
                a = ot.length,
                s = d.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = Xe || st(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(i);
                    return s.notifyWith(e, [u, i, n]), i < 1 && a ? n : (s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: d.extend({}, t),
                    opts: d.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Xe || st(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = d.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) u.tweens[n].run(1);
                        return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (! function(e, t) {
                    var n, i, r, o, a;
                    for (n in e)
                        if (r = t[i = d.camelCase(n)], o = e[n], d.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = d.cssHooks[i]) && "expand" in a)
                            for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                        else t[i] = r
                }(c, u.opts.specialEasing); o < a; o++)
                if (i = ot[o].call(u, e, c, u.opts)) return i;
            return d.map(c, ut, u), d.isFunction(u.opts.start) && u.opts.start.call(e, u), d.fx.timer(d.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }
        d.Animation = d.extend(ct, {
            tweener: function(e, t) {
                d.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], at[n] = at[n] || [], at[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? ot.unshift(e) : ot.push(e)
            }
        }), d.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? d.extend({}, e) : {
                complete: n || !n && t || d.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !d.isFunction(t) && t
            };
            return i.duration = d.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in d.fx.speeds ? d.fx.speeds[i.duration] : d.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                d.isFunction(i.old) && i.old.call(this), i.queue && d.dequeue(this, i.queue)
            }, i
        }, d.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(F).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = d.isEmptyObject(e),
                    o = d.speed(t, n, i),
                    a = function() {
                        var t = ct(this, d.extend({}, e), o);
                        (r || d._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = d.timers,
                        a = d._data(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && rt.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || d.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = d._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = d.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, d.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), d.each(["toggle", "show", "hide"], function(e, t) {
            var n = d.fn[t];
            d.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, i, r)
            }
        }), d.each({
            slideDown: lt("show"),
            slideUp: lt("hide"),
            slideToggle: lt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            d.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), d.timers = [], d.fx.tick = function() {
            var e, t = d.timers,
                n = 0;
            for (Xe = d.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || d.fx.stop(), Xe = void 0
        }, d.fx.timer = function(e) {
            d.timers.push(e), e() ? d.fx.start() : d.timers.pop()
        }, d.fx.interval = 13, d.fx.start = function() {
            Je || (Je = setInterval(d.fx.tick, d.fx.interval))
        }, d.fx.stop = function() {
            clearInterval(Je), Je = null
        }, d.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, d.fn.delay = function(e, t) {
            return e = d.fx && d.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        }, (Ke = E.createElement("div")).setAttribute("className", "t"), Ke.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", et = Ke.getElementsByTagName("a")[0], tt = (Ze = E.createElement("select")).appendChild(E.createElement("option")), Ye = Ke.getElementsByTagName("input")[0], et.style.cssText = "top:1px", c.getSetAttribute = "t" !== Ke.className, c.style = /top/.test(et.getAttribute("style")), c.hrefNormalized = "/a" === et.getAttribute("href"), c.checkOn = !!Ye.value, c.optSelected = tt.selected, c.enctype = !!E.createElement("form").enctype, Ze.disabled = !0, c.optDisabled = !tt.disabled, (Ye = E.createElement("input")).setAttribute("value", ""), c.input = "" === Ye.getAttribute("value"), Ye.value = "t", Ye.setAttribute("type", "radio"), c.radioValue = "t" === Ye.value;
        var dt = /\r/g;
        d.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0];
                return arguments.length ? (i = d.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (null == (r = i ? e.call(this, n, d(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : d.isArray(r) && (r = d.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                })) : r ? (t = d.valHooks[r.type] || d.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(dt, "") : null == n ? "" : n : void 0
            }
        }), d.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = d.find.attr(e, "value");
                        return null != t ? t : d.trim(d.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                            if (((n = i[l]).selected || l === r) && (c.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
                                if (t = d(n).val(), o) return t;
                                a.push(t)
                            } return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = d.makeArray(t), a = r.length; a--;)
                            if (i = r[a], d.inArray(d.valHooks.option.get(i), o) >= 0) try {
                                i.selected = n = !0
                            } catch (e) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), d.each(["radio", "checkbox"], function() {
            d.valHooks[this] = {
                set: function(e, t) {
                    if (d.isArray(t)) return e.checked = d.inArray(d(e).val(), t) >= 0
                }
            }, c.checkOn || (d.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var ft, pt, ht = d.expr.attrHandle,
            gt = /^(?:checked|selected)$/i,
            mt = c.getSetAttribute,
            vt = c.input;
        d.fn.extend({
            attr: function(e, t) {
                return V(this, d.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    d.removeAttr(this, e)
                })
            }
        }), d.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === O ? d.prop(e, t, n) : (1 === o && d.isXMLDoc(e) || (t = t.toLowerCase(), i = d.attrHooks[t] || (d.expr.match.bool.test(t) ? pt : ft)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = d.find.attr(e, t)) ? void 0 : r : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void d.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(N);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = d.propFix[n] || n, d.expr.match.bool.test(n) ? vt && mt || !gt.test(n) ? e[i] = !1 : e[d.camelCase("default-" + n)] = e[i] = !1 : d.attr(e, n, ""), e.removeAttribute(mt ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!c.radioValue && "radio" === t && d.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), pt = {
            set: function(e, t, n) {
                return !1 === t ? d.removeAttr(e, n) : vt && mt || !gt.test(n) ? e.setAttribute(!mt && d.propFix[n] || n, n) : e[d.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, d.each(d.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = ht[t] || d.find.attr;
            ht[t] = vt && mt || !gt.test(t) ? function(e, t, i) {
                var r, o;
                return i || (o = ht[t], ht[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, ht[t] = o), r
            } : function(e, t, n) {
                if (!n) return e[d.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), vt && mt || (d.attrHooks.value = {
            set: function(e, t, n) {
                if (!d.nodeName(e, "input")) return ft && ft.set(e, t, n);
                e.defaultValue = t
            }
        }), mt || (ft = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
            }
        }, ht.id = ht.name = ht.coords = function(e, t, n) {
            var i;
            if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, d.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified) return n.value
            },
            set: ft.set
        }, d.attrHooks.contenteditable = {
            set: function(e, t, n) {
                ft.set(e, "" !== t && t, n)
            }
        }, d.each(["width", "height"], function(e, t) {
            d.attrHooks[t] = {
                set: function(e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n
                }
            }
        })), c.style || (d.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var yt = /^(?:input|select|textarea|button|object)$/i,
            bt = /^(?:a|area)$/i;
        d.fn.extend({
            prop: function(e, t) {
                return V(this, d.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = d.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (e) {}
                })
            }
        }), d.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !d.isXMLDoc(e)) && (t = d.propFix[t] || t, r = d.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = d.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), c.hrefNormalized || d.each(["href", "src"], function(e, t) {
            d.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), c.optSelected || (d.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            d.propFix[this.toLowerCase()] = this
        }), c.enctype || (d.propFix.enctype = "encoding");
        var wt = /[\t\r\n\f]/g;
        d.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, a, s = 0,
                    l = this.length,
                    u = "string" == typeof e && e;
                if (d.isFunction(e)) return this.each(function(t) {
                    d(this).addClass(e.call(this, t, this.className))
                });
                if (u)
                    for (t = (e || "").match(N) || []; s < l; s++)
                        if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : " ")) {
                            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = d.trim(i), n.className !== a && (n.className = a)
                        } return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, a, s = 0,
                    l = this.length,
                    u = 0 === arguments.length || "string" == typeof e && e;
                if (d.isFunction(e)) return this.each(function(t) {
                    d(this).removeClass(e.call(this, t, this.className))
                });
                if (u)
                    for (t = (e || "").match(N) || []; s < l; s++)
                        if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : "")) {
                            for (o = 0; r = t[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            a = e ? d.trim(i) : "", n.className !== a && (n.className = a)
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : d.isFunction(e) ? this.each(function(n) {
                    d(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, r = d(this), o = e.match(N) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else n !== O && "boolean" !== n || (this.className && d._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : d._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(wt, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            d.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), d.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var xt = d.now(),
            Ct = /\?/,
            Et = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        d.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                r = d.trim(t + "");
            return r && !d.trim(r.replace(Et, function(e, t, r, o) {
                return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
            })) ? Function("return " + r)() : d.error("Invalid JSON: " + t)
        }, d.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? n = (new DOMParser).parseFromString(t, "text/xml") : ((n = new ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(t))
            } catch (e) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + t), n
        };
        var St, kt, Tt = /#.*$/,
            At = /([?&])_=[^&]*/,
            _t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Nt = /^(?:GET|HEAD)$/,
            Lt = /^\/\//,
            Dt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            jt = {},
            qt = {},
            Ot = "*/".concat("*");
        try {
            kt = location.href
        } catch (e) {
            (kt = E.createElement("a")).href = "", kt = kt.href
        }

        function It(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(N) || [];
                if (d.isFunction(n))
                    for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function Mt(e, t, n, i) {
            var r = {},
                o = e === qt;

            function a(s) {
                var l;
                return r[s] = !0, d.each(e[s] || [], function(e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
                }), l
            }
            return a(t.dataTypes[0]) || !r["*"] && a("*")
        }

        function Pt(e, t) {
            var n, i, r = d.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && d.extend(!0, e, n), e
        }
        St = Dt.exec(kt.toLowerCase()) || [], d.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: kt,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ot,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": d.parseJSON,
                    "text xml": d.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Pt(Pt(e, d.ajaxSettings), t) : Pt(d.ajaxSettings, e)
            },
            ajaxPrefilter: It(jt),
            ajaxTransport: It(qt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var n, i, r, o, a, s, l, u, c = d.ajaxSetup({}, t),
                    f = c.context || c,
                    p = c.context && (f.nodeType || f.jquery) ? d(f) : d.event,
                    h = d.Deferred(),
                    g = d.Callbacks("once memory"),
                    m = c.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!u)
                                    for (u = {}; t = _t.exec(o);) u[t[1].toLowerCase()] = t[2];
                                t = u[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (c.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (b < 2)
                                    for (t in e) m[t] = [m[t], e[t]];
                                else x.always(e[x.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return l && l.abort(t), C(0, t), this
                        }
                    };
                if (h.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || kt) + "").replace(Tt, "").replace(Lt, St[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = d.trim(c.dataType || "*").toLowerCase().match(N) || [""], null == c.crossDomain && (n = Dt.exec(c.url.toLowerCase()), c.crossDomain = !(!n || n[1] === St[1] && n[2] === St[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (St[3] || ("http:" === St[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = d.param(c.data, c.traditional)), Mt(jt, c, t, x), 2 === b) return x;
                for (i in (s = d.event && c.global) && 0 == d.active++ && d.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Nt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Ct.test(r) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = At.test(r) ? r.replace(At, "$1_=" + xt++) : r + (Ct.test(r) ? "&" : "?") + "_=" + xt++)), c.ifModified && (d.lastModified[r] && x.setRequestHeader("If-Modified-Since", d.lastModified[r]), d.etag[r] && x.setRequestHeader("If-None-Match", d.etag[r])), (c.data && c.hasContent && !1 !== c.contentType || t.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : c.accepts["*"]), c.headers) x.setRequestHeader(i, c.headers[i]);
                if (c.beforeSend && (!1 === c.beforeSend.call(f, x, c) || 2 === b)) return x.abort();
                for (i in w = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[i](c[i]);
                if (l = Mt(qt, c, t, x)) {
                    x.readyState = 1, s && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (a = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        b = 1, l.send(v, C)
                    } catch (e) {
                        if (!(b < 2)) throw e;
                        C(-1, e)
                    }
                } else C(-1, "No Transport");

                function C(e, t, n, i) {
                    var u, v, y, w, C, E = t;
                    2 !== b && (b = 2, a && clearTimeout(a), l = void 0, o = i || "", x.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, n && (w = function(e, t, n) {
                        for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (a in s)
                                if (s[a] && s[a].test(r)) {
                                    l.unshift(a);
                                    break
                                } if (l[0] in n) o = l[0];
                        else {
                            for (a in n) {
                                if (!l[0] || e.converters[a + " " + l[0]]) {
                                    o = a;
                                    break
                                }
                                i || (i = a)
                            }
                            o = o || i
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o]
                    }(c, x, n)), w = function(e, t, n, i) {
                        var r, o, a, s, l, u = {},
                            c = e.dataTypes.slice();
                        if (c[1])
                            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                        for (o = c.shift(); o;)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                                if ("*" === o) o = l;
                                else if ("*" !== l && l !== o) {
                            if (!(a = u[l + " " + o] || u["* " + o]))
                                for (r in u)
                                    if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                        !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + l + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(c, w, x, u), u ? (c.ifModified && ((C = x.getResponseHeader("Last-Modified")) && (d.lastModified[r] = C), (C = x.getResponseHeader("etag")) && (d.etag[r] = C)), 204 === e || "HEAD" === c.type ? E = "nocontent" : 304 === e ? E = "notmodified" : (E = w.state, v = w.data, u = !(y = w.error))) : (y = E, !e && E || (E = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || E) + "", u ? h.resolveWith(f, [v, E, x]) : h.rejectWith(f, [x, E, y]), x.statusCode(m), m = void 0, s && p.trigger(u ? "ajaxSuccess" : "ajaxError", [x, c, u ? v : y]), g.fireWith(f, [x, E]), s && (p.trigger("ajaxComplete", [x, c]), --d.active || d.event.trigger("ajaxStop")))
                }
                return x
            },
            getJSON: function(e, t, n) {
                return d.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return d.get(e, void 0, t, "script")
            }
        }), d.each(["get", "post"], function(e, t) {
            d[t] = function(e, n, i, r) {
                return d.isFunction(n) && (r = r || i, i = n, n = void 0), d.ajax({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), d._evalUrl = function(e) {
            return d.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, d.fn.extend({
            wrapAll: function(e) {
                if (d.isFunction(e)) return this.each(function(t) {
                    d(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = d(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return d.isFunction(e) ? this.each(function(t) {
                    d(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = d(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = d.isFunction(e);
                return this.each(function(n) {
                    d(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
                }).end()
            }
        }), d.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !c.reliableHiddenOffsets() && "none" === (e.style && e.style.display || d.css(e, "display"))
        }, d.expr.filters.visible = function(e) {
            return !d.expr.filters.hidden(e)
        };
        var Rt = /%20/g,
            Bt = /\[\]$/,
            Ht = /\r?\n/g,
            Wt = /^(?:submit|button|image|reset|file)$/i,
            zt = /^(?:input|select|textarea|keygen)/i;

        function Ft(e, t, n, i) {
            var r;
            if (d.isArray(t)) d.each(t, function(t, r) {
                n || Bt.test(e) ? i(e, r) : Ft(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== d.type(t)) i(e, t);
            else
                for (r in t) Ft(e + "[" + r + "]", t[r], n, i)
        }
        d.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = d.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(e) || e.jquery && !d.isPlainObject(e)) d.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) Ft(n, e[n], t, r);
            return i.join("&").replace(Rt, "+")
        }, d.fn.extend({
            serialize: function() {
                return d.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = d.prop(this, "elements");
                    return e ? d.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !d(this).is(":disabled") && zt.test(this.nodeName) && !Wt.test(e) && (this.checked || !U.test(e))
                }).map(function(e, t) {
                    var n = d(this).val();
                    return null == n ? null : d.isArray(n) ? d.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ht, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ht, "\r\n")
                    }
                }).get()
            }
        }), d.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Gt() || function() {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }()
        } : Gt;
        var Vt = 0,
            Ut = {},
            $t = d.ajaxSettings.xhr();

        function Gt() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        }
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in Ut) Ut[e](void 0, !0)
        }), c.cors = !!$t && "withCredentials" in $t, ($t = c.ajax = !!$t) && d.ajaxTransport(function(e) {
            var t;
            if (!e.crossDomain || c.cors) return {
                send: function(n, i) {
                    var r, o = e.xhr(),
                        a = ++Vt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) o[r] = e.xhrFields[r];
                    for (r in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, r) {
                        var s, l, u;
                        if (t && (r || 4 === o.readyState))
                            if (delete Ut[a], t = void 0, o.onreadystatechange = d.noop, r) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, s = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (e) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            } u && i(s, l, u, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Ut[a] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }), d.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return d.globalEval(e), e
                }
            }
        }), d.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), d.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = E.head || d("head")[0] || E.documentElement;
                return {
                    send: function(i, r) {
                        (t = E.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var Qt = [],
            Xt = /(=)\?(?=&|$)|\?\?/;
        d.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Qt.pop() || d.expando + "_" + xt++;
                return this[e] = !0, e
            }
        }), d.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, o, a, s = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = d.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Xt, "$1" + r) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return a || d.error(r + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                a = arguments
            }, i.always(function() {
                e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Qt.push(r)), a && d.isFunction(o) && o(a[0]), a = o = void 0
            }), "script"
        }), d.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || E;
            var i = b.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = d.buildFragment([e], t, r), r && r.length && d(r).remove(), d.merge([], i.childNodes))
        };
        var Jt = d.fn.load;
        d.fn.load = function(e, t, n) {
            if ("string" != typeof e && Jt) return Jt.apply(this, arguments);
            var i, r, o, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (i = d.trim(e.slice(s, e.length)), e = e.slice(0, s)), d.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && d.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, a.html(i ? d("<div>").append(d.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                a.each(n, r || [e.responseText, t, e])
            }), this
        }, d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            d.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), d.expr.filters.animated = function(e) {
            return d.grep(d.timers, function(t) {
                return e === t.elem
            }).length
        };
        var Yt = e.document.documentElement;

        function Kt(e) {
            return d.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        d.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s, l, u = d.css(e, "position"),
                    c = d(e),
                    f = {};
                "static" === u && (e.style.position = "relative"), s = c.offset(), o = d.css(e, "top"), l = d.css(e, "left"), ("absolute" === u || "fixed" === u) && d.inArray("auto", [o, l]) > -1 ? (a = (i = c.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), d.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
            }
        }, d.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    d.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    o = r && r.ownerDocument;
                return o ? (t = o.documentElement, d.contains(t, r) ? (typeof r.getBoundingClientRect !== O && (i = r.getBoundingClientRect()), n = Kt(o), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === d.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), d.nodeName(e[0], "html") || (n = e.offset()), n.top += d.css(e[0], "borderTopWidth", !0), n.left += d.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - d.css(i, "marginTop", !0),
                        left: t.left - n.left - d.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || Yt; e && !d.nodeName(e, "html") && "static" === d.css(e, "position");) e = e.offsetParent;
                    return e || Yt
                })
            }
        }), d.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            d.fn[e] = function(i) {
                return V(this, function(e, i, r) {
                    var o = Kt(e);
                    if (void 0 === r) return o ? t in o ? o[t] : o.document.documentElement[i] : e[i];
                    o ? o.scrollTo(n ? d(o).scrollLeft() : r, n ? r : d(o).scrollTop()) : e[i] = r
                }, e, i, arguments.length, null)
            }
        }), d.each(["top", "left"], function(e, t) {
            d.cssHooks[t] = Oe(c.pixelPosition, function(e, n) {
                if (n) return n = Le(e, t), je.test(n) ? d(e).position()[t] + "px" : n
            })
        }), d.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            d.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                d.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        a = n || (!0 === i || !0 === r ? "margin" : "border");
                    return V(this, function(t, n, i) {
                        var r;
                        return d.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? d.css(t, n, a) : d.style(t, n, i, a)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), d.fn.size = function() {
            return this.length
        }, d.fn.andSelf = d.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return d
        });
        var Zt = e.jQuery,
            en = e.$;
        return d.noConflict = function(t) {
            return e.$ === d && (e.$ = en), t && e.jQuery === d && (e.jQuery = Zt), d
        }, typeof t === O && (e.jQuery = e.$ = d), d
    }),
    /*!
     * jQuery Migrate - v1.2.1 - 2013-05-08
     * https://github.com/jquery/jquery-migrate
     * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
     */
    function(e, t, n) {
        var i = {};

        function r(n) {
            var r = t.console;
            i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
        }

        function o(t, n, i, o) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(t, n, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return r(o), i
                    },
                    set: function(e) {
                        r(o), i = e
                    }
                })
            } catch (e) {}
            e._definePropertyBroken = !0, t[n] = i
        }
        e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), void 0 === e.migrateTrace && (e.migrateTrace = !0), e.migrateReset = function() {
            i = {}, e.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var a = e("<input/>", {
                size: 1
            }).attr("size") && e.attrFn,
            s = e.attr,
            l = e.attrHooks.value && e.attrHooks.value.get || function() {
                return null
            },
            u = e.attrHooks.value && e.attrHooks.value.set || function() {},
            c = /^(?:input|button)$/i,
            d = /^[238]$/,
            f = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            p = /^(?:checked|selected)$/i;
        o(e, "attrFn", a || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, n, i, o) {
            var l = n.toLowerCase(),
                u = t && t.nodeType;
            return o && (s.length < 4 && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(u) && (a ? n in a : e.isFunction(e.fn[n]))) ? e(t)[n](i) : ("type" === n && void 0 !== i && c.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[l] && f.test(l) && (e.attrHooks[l] = {
                get: function(t, n) {
                    var i, r = e.prop(t, n);
                    return !0 === r || "boolean" != typeof r && (i = t.getAttributeNode(n)) && !1 !== i.nodeValue ? n.toLowerCase() : void 0
                },
                set: function(t, n, i) {
                    var r;
                    return !1 === n ? e.removeAttr(t, i) : ((r = e.propFix[i] || i) in t && (t[r] = !0), t.setAttribute(i, i.toLowerCase())), i
                }
            }, p.test(l) && r("jQuery.fn.attr('" + l + "') may use property instead of attribute")), s.call(e, t, n, i))
        }, e.attrHooks.value = {
            get: function(e, t) {
                var n = (e.nodeName || "").toLowerCase();
                return "button" === n ? l.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
            },
            set: function(e, t) {
                var n = (e.nodeName || "").toLowerCase();
                if ("button" === n) return u.apply(this, arguments);
                "input" !== n && "option" !== n && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t
            }
        };
        var h, g, m = e.fn.init,
            v = e.parseJSON,
            y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        e.fn.init = function(t, n, i) {
            var o;
            return t && "string" == typeof t && !e.isPlainObject(n) && (o = y.exec(e.trim(t))) && o[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), o[3] && r("$(html) HTML text after last tag is ignored"), "#" === o[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? m.call(this, e.parseHTML(o[2], n, !0), n, i) : m.apply(this, arguments)
        }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
            return e || null === e ? v.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
        }, e.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e.browser || (g = {}, (h = e.uaMatch(navigator.userAgent)).browser && (g[h.browser] = !0, g.version = h.version), g.chrome ? g.webkit = !0 : g.webkit && (g.safari = !0), e.browser = g), o(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
            function t(e, n) {
                return new t.fn.init(e, n)
            }
            e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(i, r) {
                return r && r instanceof e && !(r instanceof t) && (r = t(r)), e.fn.init.call(this, i, r, n)
            }, t.fn.init.prototype = t.fn;
            var n = t(document);
            return r("jQuery.sub() is deprecated"), t
        }, e.ajaxSetup({
            converters: {
                "text json": e.parseJSON
            }
        });
        var b = e.fn.data;
        e.fn.data = function(t) {
            var n, i, o = this[0];
            return !o || "events" !== t || 1 !== arguments.length || (n = e.data(o, t), i = e._data(o, t), void 0 !== n && n !== i || void 0 === i) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
        };
        var w = /\/(java|ecma)script/i,
            x = e.fn.andSelf || e.fn.addBack;
        e.fn.andSelf = function() {
            return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), x.apply(this, arguments)
        }, e.clean || (e.clean = function(t, n, i, o) {
            n = (n = !(n = n || document).nodeType && n[0] || n).ownerDocument || n, r("jQuery.clean() is deprecated");
            var a, s, l, u, c = [];
            if (e.merge(c, e.buildFragment(t, n).childNodes), i)
                for (l = function(e) {
                        if (!e.type || w.test(e.type)) return o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e)
                    }, a = 0; null != (s = c[a]); a++) e.nodeName(s, "script") && l(s) || (i.appendChild(s), void 0 !== s.getElementsByTagName && (u = e.grep(e.merge([], s.getElementsByTagName("script")), l), c.splice.apply(c, [a + 1, 0].concat(u)), a += u.length));
            return c
        });
        var C = e.event.add,
            E = e.event.remove,
            S = e.event.trigger,
            k = e.fn.toggle,
            T = e.fn.live,
            A = e.fn.die,
            _ = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            N = new RegExp("\\b(?:" + _ + ")\\b"),
            L = /(?:^|\s)hover(\.\S+|)\b/,
            D = function(t) {
                return "string" != typeof t || e.event.special.hover ? t : (L.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(L, "mouseenter$1 mouseleave$1"))
            };
        e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && o(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, i, o) {
            e !== document && N.test(t) && r("AJAX events should be attached to document: " + t), C.call(this, e, D(t || ""), n, i, o)
        }, e.event.remove = function(e, t, n, i, r) {
            E.call(this, e, D(t) || "", n, i, r)
        }, e.fn.error = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
        }, e.fn.toggle = function(t, n) {
            if (!e.isFunction(t) || !e.isFunction(n)) return k.apply(this, arguments);
            r("jQuery.fn.toggle(handler, handler...) is deprecated");
            var i = arguments,
                o = t.guid || e.guid++,
                a = 0,
                s = function(n) {
                    var r = (e._data(this, "lastToggle" + t.guid) || 0) % a;
                    return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), i[r].apply(this, arguments) || !1
                };
            for (s.guid = o; a < i.length;) i[a++].guid = o;
            return this.click(s)
        }, e.fn.live = function(t, n, i) {
            return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, i), this)
        }, e.fn.die = function(t, n) {
            return r("jQuery.fn.die() is deprecated"), A ? A.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
        }, e.event.trigger = function(e, t, n, i) {
            return n || N.test(e) || r("Global events are undocumented and deprecated"), S.call(this, e, t, n || document, i)
        }, e.each(_.split("|"), function(t, n) {
            e.event.special[n] = {
                setup: function() {
                    var t = this;
                    return t !== document && (e.event.add(document, n + "." + e.guid, function() {
                        e.event.trigger(n, null, t, !0)
                    }), e._data(this, n, e.guid++)), !1
                },
                teardown: function() {
                    return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
                }
            }
        })
    }(jQuery, window), define("libs/jquery-with-jquery-migrate", function() {}), define("jquery", ["libs/jquery-with-jquery-migrate"], function() {
        return jQuery
    }), define("fly/utils/string-helper-1.0", ["jquery"], function(e) {
        return {
            capitalize: function(e) {
                return e.replace(/\b[a-z]/g, function(e) {
                    return e.toUpperCase()
                })
            },
            lowerFirst: function(e) {
                return e.charAt(0).toLowerCase() + e.slice(1)
            },
            toBool: function(e) {
                return !0 === e || "true" === e || "1" === e
            },
            toCleanArray: function(t, n) {
                return n = n || ",", t = "string" == typeof t ? e.map(t.split(n), e.trim) : e.makeArray(t), t = e.grep(t, function(e) {
                    return e
                })
            },
            toCamelCase: function(e, t) {
                return t = t || "-", e.replace(new RegExp("(\\" + t + "[a-z])", "g"), function(e) {
                    return e.toUpperCase().replace(t, "")
                })
            },
            fromCamelCase: function(e, t) {
                return t = t || "-", e.replace(/[A-Z]/g, function(e) {
                    return t + e.toLowerCase()
                })
            },
            toEventName: function(e) {
                return e.replace(/^on([A-Z])/, function(e) {
                    return e.charAt(2).toLowerCase()
                })
            },
            isEventOption: function(e) {
                return /^on([A-Z])/.test(e)
            }
        }
    }), define("fly/utils/url-helper-1.0", ["jquery"], function(e) {
        return {
            getParam: function(e) {
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.href);
                return t ? t[1] : null
            },
            getParamAsArray: function(e) {
                var t = this.getParam(e);
                return t ? t.split(",") : null
            },
            getAllParams: function() {
                var e = window.location.search.substring(1),
                    t = e.split("&"),
                    n = {};
                if ("" === e) return {};
                for (var i = 0; i < t.length; i++) {
                    var r = t[i].split("=");
                    n[unescape(r[0])] = unescape(r[1])
                }
                return n
            },
            getHashParam: function(e) {
                var t = window.location.hash.substring(1),
                    n = "",
                    i = "";
                if (-1 != t.indexOf(e)) {
                    if (-1 != (n = t.substring(t.indexOf(e))).indexOf("&")) i = n.split("&")[0].split("=");
                    else i = n.split("=");
                    return i[1]
                }
                return !1
            },
            paramExists: function(e) {
                return !!window.location.href.match("[\\?&]" + e + "([=&#]|$)")
            }
        }
    }),
    /*!
     * jQuery Cookie Plugin v1.2
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2011, Klaus Hartl
     * Dual licensed under the MIT or GPL Version 2 licenses.
     * http://www.opensource.org/licenses/mit-license.php
     * http://www.opensource.org/licenses/GPL-2.0
     */
    define("fly/libs/jquery.cookie-1.2", ["jquery"], function(e) {
        var t = /\+/g;

        function n(e) {
            return e
        }

        function i(e) {
            return decodeURIComponent(e.replace(t, " "))
        }
        e.cookie = function(t, r, o) {
            if (void 0 !== r && !/Object/.test(Object.prototype.toString.call(r))) {
                if (o = e.extend({}, e.cookie.defaults, o), null === r && (o.expires = -1), "number" == typeof o.expires) {
                    var a = o.expires,
                        s = o.expires = new Date;
                    s.setDate(s.getDate() + a)
                }
                return r = String(r), document.cookie = [encodeURIComponent(t), "=", o.raw ? r : encodeURIComponent(r), o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
            }
            for (var l, u = (o = r || e.cookie.defaults || {}).raw ? n : i, c = document.cookie.split("; "), d = 0; l = c[d] && c[d].split("="); d++)
                if (u(l.shift()) === t) return u(l.join("="));
            return null
        }, e.cookie.defaults = {}, e.removeCookie = function(t, n) {
            return null !== e.cookie(t, n) && (e.cookie(t, null, n), !0)
        }
    }), define("fly/managers/cookie-1.0", ["jquery", "fly/libs/jquery.cookie-1.2"], function(e) {
        var t = {
            domains: {
                default: null
            }
        };
        return {
            init: function(e) {
                this.setConfig(e)
            },
            setConfig: function(n) {
                e.isPlainObject(n) && e.extend(t, n)
            },
            set: function(n, i, r) {
                r = r || {}, (e.isPlainObject(i) || e.isArray(i)) && (i = JSON.stringify(i)), r.domain ? r.domain in t.domains && (r.domain = t.domains[r.domain]) : r.domain = t.domains.default, r.domain || delete r.domain, e.cookie(n, i, r)
            },
            get: function(t) {
                var n, i = e.cookie(t);
                try {
                    n = e.parseJSON(i)
                } catch (e) {
                    n = i
                }
                return n
            },
            remove: function(t, n) {
                e.removeCookie(t, n)
            }
        }
    }), define("fly/managers/debug-1.0", ["jquery", "module", "version!fly/utils/string-helper", "version!fly/utils/url-helper", "version!fly/managers/cookie"], function(e, t, n, i, r) {
        var o, a, s, l = {},
            u = {
                queryParam: "jsDebug",
                cookie: {
                    name: "fly_js_debug",
                    domain: "default"
                }
            },
            c = !1,
            d = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            };
        return e.extend(u, t.config()), (a = i.getParamAsArray(u.queryParam)) ? r.set(u.cookie.name, a, {
            path: "/",
            domain: u.cookie.domain
        }) : s = r.get(u.cookie.name) || [], (e.inArray("true", a) > -1 || e.inArray("all", a) > -1) && (r.set(u.cookie.name, !0, {
            path: "/",
            domain: u.cookie.domain
        }), c = !0), (o = function(t) {
            this.name = t, this.color = "hsl(" + d(0, 360) + "," + d(35, 80) + "%," + d(20, 45) + "%)", (!0 === s || e.inArray(this.name, a) > -1 || e.inArray(this.name, s) > -1) && this.enable()
        }).prototype = {
            constructor: o,
            enabled: !1,
            _call: function(e, t) {
                if (window.console && (this.enabled || c)) {
                    t.callee = t.callee.caller;
                    var n = [].slice.call(t); - 1 < ["error", "info", "log", "trace", "warn"].indexOf(e) && n.unshift("%c " + this.name + " ", "color:#fff;border-radius:3px;background-color:" + this.color + ";"), "object" == typeof window.console && "function" == typeof window.console[e] && window.console[e].apply(window.console, n)
                }
                return this
            },
            disable: function() {
                return this.enabled = !1, this
            },
            enable: function() {
                return this.enabled = !0, this
            },
            error: function() {
                return this._call("error", arguments)
            },
            info: function() {
                return this._call("info", arguments)
            },
            log: function() {
                return this._call("log", arguments)
            },
            profile: function() {
                return this._call("profile", arguments)
            },
            profileEnd: function() {
                return this._call("profileEnd", arguments)
            },
            timeStamp: function() {
                return this._call("timeStamp", arguments)
            },
            trace: function() {
                return this._call("trace", arguments)
            },
            warn: function() {
                return this._call("warn", arguments)
            }
        }, {
            init: function(e) {
                var t = new o(e);
                return l[e] = t, t
            },
            get: function(e) {
                return l[e] || this.init(e)
            }
        }
    }), define("fly/managers/gpt-4.3", ["jquery", "version!fly/utils/string-helper", "version!fly/utils/url-helper", "version!fly/managers/debug"], function(e, t, n, i) {
        var r = {},
            o = i.get("ads"),
            a = {},
            s = {},
            l = [],
            u = [],
            c = 0,
            d = [],
            f = [],
            p = "1",
            h = !1,
            g = [],
            m = {
                callbackMethods: {},
                adDivEventCallbacks: {},
                setCallback: function(e, t) {
                    this.callbackMethods[e] = t
                },
                setAdDivEventCallback: function(e, t, n) {
                    var i = this.callbackMethods[n];
                    "function" == typeof i && (o.log("gpt::setAdDivEventCallback:", e, {
                        eventName: t,
                        callbackName: n,
                        callbackMethod: i
                    }), this.adDivEventCallbacks[e] || (this.adDivEventCallbacks[e] = {}), this.adDivEventCallbacks[e][t] || (this.adDivEventCallbacks[e][t] = []), this.adDivEventCallbacks[e][t].push(i))
                },
                slotRenderEndedCallBack: function(t) {
                    var n = "NOT FOUND";
                    e.each(s, function(e, i) {
                        i !== t.slot || (n = e)
                    }), o.log("gpt::slotRenderEndedCallback", {
                        divId: n,
                        event: t
                    });
                    var i = m.adDivEventCallbacks[n] && m.adDivEventCallbacks[n].slotRenderEnded;
                    if (i) {
                        o.log("gpt::slotRenderEndedCallback: calling event callbacks");
                        for (var r = 0; r < i.length; r++) i[r](n, t)
                    }
                }
            },
            v = function(e, t, n) {
                if (e && (t || n) && (n && (o.log("gpt::setAdSlotTargeting:", "clearing targeting on slot:", e), e.clearTargeting()), t))
                    for (var i in o.log("gpt::setAdSlotTargeting:", "setting targeting:", t, "on slot:", e), t) e.setTargeting(i, t[i])
            };
        return {
            companionAds: !1,
            delayIndvAds: !1,
            init: function(t) {
                if (r = {
                        slot: {},
                        adConfig: {},
                        targeting: {}
                    }, e.extend(r, t), !this._isClearTargetingOnInitDisabled()) {
                    for (var n = 0; n < g.length; n++) {
                        var i = g[n];
                        googletag.pubads().clearTargeting(i), o.log("gpt::init: clearTargeting:", i)
                    }
                    g = []
                }
                this._initWrappers();
                var a = r.region;
                r.device = r.slotVars.platform;
                var s = window.navigator.userAgent;
                s && s.indexOf && (-1 != s.indexOf("iOS App") || -1 != s.indexOf("Android App")) ? a = "app" + r.region : "mobile" == r.device && (a = "m" + r.region), r.slot = "/" + r.slotVars.network + "/" + a + "-" + r.slotVars.siteName + (r.slotVars.topics ? "/" + r.slotVars.topics : ""), o.log("gpt::init:", "Slot:", r.slot)
            },
            setSlot: function(e) {
                r.slot = e
            },
            clearAdSlots: function(e, t, n) {
                if ((e = this._cleanContainerId(e)) || null != t || null != n) {
                    t = this._formatAdUnitNames(t);
                    var i = this._getAdSlots(e, t, n, "gpt::clearAdSlots:");
                    window.googletag.pubads().clear(i), o.log("gpt::clearAdSlots", i)
                } else window.googletag.pubads().clear(), o.log("gpt::clearAdSlots:", "clear all ad slots")
            },
            createAdSlot: function(n) {
                o.log("gpt::createAdSlot", "creating adSlot for", n);
                var i = n.substring(0, n.indexOf("-" + r.containerId));
                if (r.suppressAds && (e.inArray(i, r.suppressAds) > -1 || e.inArray(i.replace(/-/g, "_"), r.suppressAds) > -1)) o.log("   in list of suppressed ads, skipping");
                else {
                    var u, c = r.adConfig.adUnits[t.toCamelCase(i, "-")];
                    if (o.log("   adUnit config:", c), !c) return o.log("gpt::createAdSlot:", n, "Error: no adUnit config for this divId"), void(window.console && window.console.error && console.error("gpt::createAdSlot:", n, "Error: no adUnit config for this divId"));
                    if (1 == c.outOfPage ? (u = googletag.defineOutOfPageSlot(r.slot, n), o.log("   create out of page slot")) : (u = googletag.defineSlot(r.slot, c.sizes, n), o.log("   create regular slot")), !u) return o.log("gpt::createAdSlot:", n, "Error: failed to create adSlot"), void(window.console && window.console.error && console.error("gpt::createAdSlot:", n, "Error: failed to create adSlot"));
                    1 == c.isVideo && (this.companionAds = !0, u.addService(googletag.companionAds()), o.log("   add companionAds service")), u.addService(googletag.pubads()), o.log("   add pubad service"), c.position && (1 == r.adConfig.disableAdIncrement && "increment" == c.position ? (u.setTargeting("pos", 1), o.log("   setTargeting:", "pos=1")) : "increment" == c.position ? (u.setTargeting("pos", p), o.log("   setTargeting:", "pos=" + p), p++) : (u.setTargeting("pos", c.position), o.log("   setTargeting:", "pos=" + c.position))), c.customTargeting && e.each(c.customTargeting, function(e, t) {
                        o.log("    setTargeting:", e + "=" + t), u.setTargeting(e, t)
                    }), c.disableInitialLoad || c.delayLoad || !0 === e("#" + n).data("disableInitialLoad") ? (this.delayIndvAds = !0, o.log("   delayLoad")) : l.push(u);
                    var d = c.collapseEmptyDiv,
                        f = c.collapseEmptyDivOnPageload;
                    !0 !== d && !1 !== d || (!0 === f || !1 === f ? (u.setCollapseEmptyDiv(d, f), o.log("   setCollapseEmptyDiv(", d, ",", f, ")")) : (u.setCollapseEmptyDiv(d), o.log("   setCollapseEmptyDiv(", d, ")"))), c.eventCallbacks && e.each(c.eventCallbacks, function(e, t) {
                        for (var i = t.split(","), r = 0; r < i.length; r++) m.setAdDivEventCallback(n, e, i[r])
                    }), c.forceSafeFrame && u.setForceSafeFrame(!0), s[n] = u, a[r.containerId] || (a[r.containerId] = {}), a[r.containerId][i] || (a[r.containerId][i] = []), a[r.containerId][i].push(u)
                }
            },
            destroyAdSlots: function(e, t, n) {
                if ((e = this._cleanContainerId(e)) || null != t || null != n) {
                    t = this._formatAdUnitNames(t);
                    var i = this._getAdSlots(e, t, n, "gpt::destroyAdSlots:");
                    window.googletag.destroySlots(i), o.log("gpt::destroyAdSlots", i)
                } else window.googletag.destroySlots(), o.log("gpt::destroyAdSlots:", "destroy all ad slots")
            },
            setTargeting: function(e, t) {
                googletag.pubads().setTargeting(e, t), o.log("gpt::setTargeting:", e + "=" + t), g.push(e)
            },
            displayAds: function(t) {
                var n = this;
                e.each(t, function(e, t) {
                    o.log("gpt::displayAds:", t), n.wrappers.display(t)
                })
            },
            isAsyncInline: function() {
                var t = r.adDivIds;
                return "async-inline" == r.adConfig.method && t && e.isArray(t) && (1 != t.length || "ad-div-id-list" != t[0])
            },
            getAdDivIds: function() {
                var n, i = [],
                    a = {};
                if (this.isAsyncInline()) {
                    var s = new RegExp("^([\\w\\-]+)\\-" + r.containerId + "(\\-\\d+)?$");
                    e.each(r.adDivIds, function(e, t) {
                        if (n = t.match(s)) {
                            var l = n[1];
                            !1 === r.adConfig.enableRepeatedAds && "mobile" != r.targeting.device && a[l] ? o.log("gpt::getAdDivIds:", "skipping divId:", t, "because repeated adUnits are not supported on ", r.targeting.device) : (i.push(t), a[l] = 1)
                        } else o.log("gpt::getAdDivIds:", "skipping divId:", t, "because it does not match:", s, "(async-inline adConfig.adDivIds list was probably not re-initialized with the current divIds)")
                    })
                } else e("div[data-ad]").each(function(n, s) {
                    var l = e(s).attr("data-ad"),
                        u = e(s).attr("id");
                    if (r.adConfig.adUnits[t.toCamelCase(l, "-")]) {
                        var c = new RegExp(l + "-" + r.containerId + "(\\-\\d+)?$");
                        u.match(c) ? !1 === r.adConfig.enableRepeatedAds && "mobile" != r.targeting.device && a[l] ? o.log("gpt::getAdDivIds:", "skipping divId:", u, "because repeated adUnits are not supported on ", r.targeting.device) : (i.push(u), a[l] = 1) : o.log("gpt::getAdDivIds:", "skipping divId:", u, "because it does not match:", c, '(was probably already loaded under a different "containerId", or possibly another type of div with "data-ad" attr)')
                    } else o.log("gpt::getAdDivIds:", "skipping divId:", u, 'because there is no config (probably another type of div with "data-ad" attr)')
                });
                return this.adOrder(i)
            },
            adOrder: function(n) {
                if (void 0 !== r.adConfig.adOrder && e.isArray(r.adConfig.adOrder) && n.length > 0) {
                    var i = r.containerId && n && -1 != n[0].indexOf("-" + r.containerId),
                        a = [];
                    e.each(r.adConfig.adOrder, function(e, n) {
                        n = t.fromCamelCase(t.toCamelCase(n, "_"), "-"), i && (n += "-" + r.containerId), a.push(n)
                    }), e.each(a.reverse(), function(t, i) {
                        var r = e.inArray(i, n);
                        r > -1 && (n.splice(r, 1), n.unshift(i))
                    }), o.log("gpt::adOrder:", "ordered divIds", n)
                }
                return n
            },
            displayInlineAd: function(t) {
                var n = e.inArray(t, d);
                if (n > -1) {
                    if (o.log("gpt::displayInlineAd:", t), this.wrappers.display(t), d.splice(n, 1), 0 == d.length)
                        for (o.log("gpt::displayInlineAd:", "running any postDisplayCmds:", f); f.length;) f.shift()()
                } else o.log("gpt::displayInlineAd:", t, "ERROR: ad was already displayed or should not be displayed at all")
            },
            adDisplayTrigger: function() {
                if (o.log("gpt::adDisplayTrigger:", "ready to display any inline ads"), e.isArray(window.cbsiGptDivIds))
                    for (o.log("gpt::adDisplayTrigger:", "displaying ads for any existing cbsiGptDivIds:", window.cbsiGptDivIds); window.cbsiGptDivIds.length;) this.displayInlineAd(window.cbsiGptDivIds.shift());
                o.log("gpt::adDisplayTrigger:", "setting future cbsiGptDivId ads to display immediately"), window.cbsiGptDivIds = {
                    push: e.proxy(this.displayInlineAd, this)
                }
            },
            loadAds: function() {
                var t = this;
                o.log("gpt::loadAds:", r), r.suppressAds && e.inArray("all", r.suppressAds) > -1 ? o.log('gpt::loadAds: not loading any ads because "suppressAds" contains "all"') : "async" == r.adConfig.method || t.isAsyncInline() ? (t.isAsyncInline() && (d = r.adDivIds.slice()), c++, u.push(r.containerId), l = [], !0 === r.adConfig.disableInitialLoadCompanions && e.each(r.adConfig.adUnits, function(e, t) {
                    t.isVideo && (t.disableInitialLoad = !0)
                }), googletag = window.googletag || {}, googletag.cmd = googletag.cmd || [], googletag.cmd.push(function() {
                    var n = t.getAdDivIds();
                    if (o.log("gpt::loadAds", "adDivIds:", n), e.each(n, function(e, n) {
                            t.createAdSlot(n)
                        }), e.each(r.targeting, function(e, n) {
                            t.setTargeting(e, n)
                        }), 1 == t.companionAds && (null == r.adConfig.setRefreshUnfilledSlots || !0 === r.adConfig.setRefreshUnfilledSlots ? (googletag.companionAds().setRefreshUnfilledSlots(!0), o.log("gpt::loadAds", "CompanionAds setRefreshUnfilledSlots = true")) : (googletag.companionAds().setRefreshUnfilledSlots(!1), o.log("gpt::loadAds", "CompanionAds setRefreshUnfilledSlots = false")), !0 === r.adConfig.setClearUnfilledSlots && (googletag.companionAds().setClearUnfilledSlots(!0), o.log("gpt::loadAds", "CompanionAds setClearUnfilledSlots = true"))), null != r.adConfig.enableAsyncRendering && !0 !== r.adConfig.enableAsyncRendering || (googletag.pubads().enableAsyncRendering(), o.log("gpt::loadAds", "enableAsyncRendering")), null != r.adConfig.enableSingleRequest && !0 !== r.adConfig.enableSingleRequest || (googletag.pubads().enableSingleRequest(), o.log("gpt::loadAds", "enableSingleRequest")), 1 == c && (!0 === r.adConfig.collapseEmptyDiv ? (googletag.pubads().collapseEmptyDivs(!0), o.log("gpt::loadAds", "collapseEmptyDivs before ad fetch")) : (googletag.pubads().collapseEmptyDivs(), o.log("gpt::loadAds", "collapseEmptyDivs after ad fetch")), !0 !== r.adConfig.disableInitialLoad && 1 != t.delayIndvAds && !0 !== r.adConfig.disableInitialLoadRefresh || (googletag.pubads().disableInitialLoad(), h = !0, o.log("gpt::loadAds", "disableInitialLoad")), googletag.enableServices(), o.log("gpt::loadAds", "enableServices"), googletag.pubads().addEventListener("slotRenderEnded", m.slotRenderEndedCallBack)), t.isAsyncInline() ? t.adDisplayTrigger() : t.displayAds(n), h && !0 !== r.adConfig.disableInitialLoad) {
                        var i = function() {
                            t.wrappers.refresh(l), o.log("gpt::loadAds", "refreshing initialLoad ads", l)
                        };
                        t.isAsyncInline() && d.length > 0 ? f.push(i) : i()
                    }
                })) : o.log("gpt::Unable to load ads as method is not async or async-inline")
            },
            registerCallback: function(e, t) {
                m.setCallback(e, t)
            },
            refresh: function(e, t, n, i, r, a) {
                var l = this;
                e = this._cleanContainerId(e), googletag.cmd.push(function() {
                    if (e || null != t || null != r) {
                        t = l._formatAdUnitNames(t);
                        var u = l._getAdSlots(e, t, r, "gpt::refresh:");
                        l._updateSlotTargeting(u, n, i), l.wrappers.refresh(u, a), o.log("gpt::refresh", u)
                    } else l._updateSlotTargeting(s, n, i), l.wrappers.refresh(null, a), o.log("gpt::refresh:", "refresh all ads")
                })
            },
            refreshLastLoad: function(e, t, n) {
                u.length > 0 && this.refresh(u[u.length - 1], e, t, n)
            },
            _cleanContainerId: function(e) {
                return e && e.length > 25 ? void 0 : e
            },
            _formatAdUnitNames: function(n) {
                var i = [];
                return e.each(n || [], function(e, n) {
                    i.push(t.fromCamelCase(t.toCamelCase(n, "_"), "-"))
                }), i
            },
            _getAdSlots: function(t, n, i, r) {
                var s = [];
                if (t) {
                    if (a[t]) {
                        var l = null != n && n.length > 0 ? n : Object.keys(a[t]);
                        l = this.adOrder(l), e.each(l, function(e, n) {
                            a[t][n] && (s = s.concat(a[t][n]), o.log(r, n + "-" + t))
                        })
                    }
                } else if ("array" == typeof n && 0 < n.length) {
                    n = this.adOrder(n);
                    for (var c = {}, d = u.length - 1; d > -1; d--) a[u[d]] && e.each(n, function(e, t) {
                        !c.hasOwnProperty(t) && a[u[d]][t] && (c[t] = 1, s = s.concat(a[u[d]][t]), o.log(r, t + "-" + u[d]))
                    })
                } else
                    for (d = u.length - 1; d > -1; d--) a[u[d]] && e.each(a[u[d]], function(e, t) {
                        s = s.concat(t), o.log(r, e + "-" + u[d])
                    });
                return i && (s = e.grep(s, function(t) {
                    var n = t.getSlotElementId();
                    return -1 !== e.inArray(n, i) ? (o.log(r, "Including ad div id " + n), !0) : (o.log(r, "Excluding ad div id " + n), !1)
                })), s
            },
            _isClearTargetingOnInitDisabled: function() {
                return !0 === r.adConfig.disableClearTargetingOnInit
            },
            _initWrappers: function() {
                this.headerBidding.isEnabled() && (o.log("gpt::_initWrappers", "Replacing wrappers"), this.wrappers = this.headerBidding)
            },
            _updateSlotTargeting: function(e, t, n) {
                if (t || n)
                    for (var i = 0; i < e.length; i++) v(e[i], t, n)
            },
            wrappers: {
                display: function(e) {
                    o.log("gpt::wrappers.display", "Executing the standard ad logic"), googletag.display(e)
                },
                refresh: function(e, t) {
                    o.log("gpt::wrappers.refresh", "Executing the standard ad logic"), googletag.pubads().refresh(e, t || {})
                }
            },
            headerBidding: {
                isEnabled: function() {
                    return !0 === r.adConfig.enableHeaderBidding && "object" == typeof window.index_headertag_lightspeed && "function" == typeof window.index_headertag_lightspeed.set_slot_targeting && "function" == typeof window.index_headertag_lightspeed.add_session_end_hook && "function" == typeof window.index_headertag_lightspeed.refresh
                },
                display: function(t) {
                    o.log("gpt::headerBidding.display", "Header bidding display() started"), e(window).trigger("gptMgr.headerBiddingDisplayStart", {
                        adDivId: t
                    });
                    var n = function(t) {
                        return function() {
                            var n = window.googletag.pubads().getSlots();
                            window.index_headertag_lightspeed.set_slot_targeting(n), e(window).trigger("gptMgr.headerBiddingDisplayEnd", {
                                adDivId: t
                            }), window.googletag.display(t), o.log("gpt::headerBidding.display", "Header bidding display() completed for adDivId " + t)
                        }
                    }(t);
                    window.index_headertag_lightspeed.add_session_end_hook(n, !0), window.index_headertag_lightspeed.refresh()
                },
                refresh: function(t, n) {
                    o.log("gpt::headerBidding.refresh", "Header bidding refresh() started"), e(window).trigger("gptMgr.headerBiddingRefreshStart"), null == t && (t = window.googletag.pubads().getSlots());
                    var i = function(t) {
                        return function() {
                            window.index_headertag_lightspeed.set_slot_targeting(t), e(window).trigger("gptMgr.headerBiddingRefreshEnd"), window.googletag.pubads().refresh(t, n || {}), o.log("gpt::headerBidding.refresh", "Header bidding refresh() completed")
                        }
                    }(t);
                    window.index_headertag_lightspeed.add_session_end_hook(i, !0), window.index_headertag_lightspeed.refresh()
                }
            },
            resetPosition: function(e) {
                "number" != typeof e && (e = 1), p = e
            },
            setLocation: function(e) {
                window.googletag.pubads().setLocation(e)
            }
        }
    }), define("fly/managers/geo-1.0", ["jquery", "version!fly/managers/cookie"], function(e, t) {
        var n = t.get("fly_geo") || {};
        return {
            get: function(e) {
                return n[e] ? n[e] : null
            }
        }
    }), define("fly/managers/ad-2.0", ["jquery", "version!fly/managers/gpt", "version!fly/managers/debug", "version!fly/managers/geo", "version!fly/utils/url-helper", "version!fly/libs/jquery.cookie"], function(e, t, n, i, r) {
        var o = {
                data: {},
                init: function(e) {
                    this.data = e, s.log("blueKai::init::data", e)
                },
                fire: function() {
                    var t = this;
                    t.data.bkSiteId && require(["//tags.bkrtx.com/js/bk-coretag.js"], function() {
                        bk_addPageCtx("anon_id", e.cookie("XCLGFbrowser")), e.each(t.data, function(e, t) {
                            "bkSiteId" != e && "limit" != e && bk_addPageCtx(e, t)
                        }), s.log("bluekai fire", t.data), bk_doJSTag(t.data.bkSiteId, t.data.limit), bk_ignore_meta = !0, e("#__bkframe").hide()
                    })
                }
            },
            a = null,
            s = n.get("ads"),
            l = {
                debug: n.get("paramMgr"),
                get: function(t) {
                    if (this.debug.log("getting params for", t), t) {
                        var n = r.getParamAsArray(t);
                        this.debug.log("url params:", n);
                        var i = "fly_params_" + t;
                        return n ? (e.cookie(i, JSON.stringify(n), {
                            path: "/"
                        }), this.debug.log("set cookie:", i, n)) : r.paramExists(t) ? (e.removeCookie(i, {
                            path: "/"
                        }), this.debug.log("deleted cookie:", i)) : (n = JSON.parse(e.cookie(i)), this.debug.log("cookie params:", n)), n
                    }
                }
            },
            u = {
                adData: {},
                adType: null,
                isCookieLoaded: !1,
                cookieValues: {},
                targeting: {},
                ftagCookieValue: null,
                getAdType: function() {
                    return !!this.cookieValues && this.cookieValues.type
                },
                getAdRegion: function() {
                    return !!this.cookieValues && this.cookieValues.region
                },
                getSessionTargeting: function() {
                    return !(!this.cookieValues || !this.cookieValues.session) && this.cookieValues.session
                },
                getSubSessionTargeting: function() {
                    return !(!this.cookieValues || !this.cookieValues.subSession) && this.cookieValues.subSession
                },
                getFtagTargeting: function() {
                    return this.ftagCookieValue
                },
                isCrossDomain: function(e) {
                    e = e.toLowerCase();
                    var t = window.location;
                    return 0 == e.search(/https?:\/\//) && 0 != e.search(t.protocol + "//" + t.host + "/")
                },
                getCookieDefaults: function(e) {
                    var t = e.ad,
                        n = {
                            type: t.defaultAdType,
                            region: t[t.defaultAdType].adConfig.defaultRegion
                        };
                    return t.session && (n.session = this.getSession(t.session)), t.subSession && (n.subSession = this.getSession(t.subSession, "1234567890")), n
                },
                getSession: function(e, t) {
                    if (e) return e > (t = t || "abcdefghijklmnopqrstuvwxyz").length && (s.log("ad::getSession:", e, "exceeds the max number of sessions", t.length), e = t.length), t.charAt(Math.floor(Math.random() * e))
                },
                getRegion: function(t, n) {
                    var r = t.adConfig.regions || [],
                        o = t.targeting.device || "desktop",
                        a = t.adConfig.deviceRegions && t.adConfig.deviceRegions[o];
                    if (a && a.length > 0 && (r = a), (n = n || i.get("countryCode")) || !(r.length > 0)) {
                        for (var l, u = 0; u < r.length; u++)
                            if (e.inArray(n, r[u].countries) > -1 || e.inArray("all", r[u].countries) > -1) {
                                l = r[u].region;
                                break
                            } return l || t.adConfig.defaultRegion
                    }
                    s.log("ad::getRegion: failed to get countryCode from fly geo cookie")
                },
                buildCookie: function(e, t) {
                    var n = e.ad;
                    t = t || {};
                    var i = {};
                    if (i.type = t.adType || "gpt", i.region = t.adRegion || this.getRegion(n[i.type], t.adCountry), i.region) return (t.adSession || n.session) && (i.session = t.adSession || this.getSession(n.session)), (t.adSubSession || n.subSession) && (i.subSession = t.adSubSession || this.getSession(n.subSession, "1234567890")), i;
                    s.log("ad::buildCookie: failed to determine ad region")
                },
                postCookieInit: function(n) {
                    var i = n.ad;
                    a = this.getAdType();
                    var r = void 0 !== n.ad.cookieSecure && n.ad.cookieSecure;
                    if (!a) return s.log("unable to get adtype cookie"), !1;
                    if (s.log("ads::init:", "adType", a), !(i = i[a])) return s.log("Can't access adType data for " + a), !1;
                    if (n.ad.useFirstPageTargeting) {
                        var u = "first_page_today";
                        if (window.firstpgvar = 1 == window.firstpgvar || null == e.cookie(u) ? "1" : "0", i.targeting.firstpg = window.firstpgvar, s.log('setting "first page" targeting to:', i.targeting.firstpg), null == e.cookie(u)) {
                            var c = new Date,
                                d = Date.UTC(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate(), this.isEDT(c) ? 4 : 5);
                            d += d > c.getTime() ? 0 : 864e5;
                            var f = document.domain.split(".").reverse(),
                                p = f[1] + "." + f[0];
                            e.cookie(u, !1, {
                                path: "/",
                                expires: new Date(d),
                                domain: p,
                                secure: r
                            }), s.log("set " + u + " cookie to expire at ", new Date(d).toUTCString())
                        }
                    }
                    i.suppressAds = l.get("adSuppress"), s.log("ads::init suppressAds = ", i.suppressAds), i.targeting.vguid = n.viewGuid, s.log("ads::init", "vguid", i.targeting.vguid);
                    var h = this.getSessionTargeting(),
                        g = this.getSubSessionTargeting();
                    h && (i.targeting.session = h), g && (i.targeting.subses = g);
                    var m = this.getFtagTargeting();
                    if (m && (i.targeting.ftag = m), e.extend(i.targeting, this.targeting), i.region = this.getAdRegion(), n.ad.blueKai) {
                        var v = n.ad.blueKai,
                            y = i.slotVars,
                            b = "";
                        i.targeting.device && "mobile" == i.targeting.device && (b = "m"), v.path = b + i.region + "-" + y.siteName + "/" + y.topics, o.init(v)
                    }
                    "madison" === a ? (madisonMgr.init(i), s.log("ads::init:", "Initialize Madison", i)) : "gpt" === a && (t.init(i), s.log("ads::init:", "Initialize Gpt", i))
                },
                loadAds: function(e) {
                    (1 == e || u.isCookieLoaded) && (s.log("ads::loadAds:", "Loading Gpt"), t.loadAds(), s.log("ads::loadAds:", "Finished Loading Gpt"), o.fire())
                },
                init: function(t) {
                    var n = this,
                        i = t.ad.cookieName,
                        o = void 0 !== t.ad.cookieDomain ? t.ad.cookieDomain : null,
                        a = void 0 !== t.ad.cookieSecure && t.ad.cookieSecure;
                    r.getParam("ftag") && (e.cookie(i + "_ftag", r.getParam("ftag")), n.ftagCookieValue = r.getParam("ftag")), r.getHashParam("ftag") && (e.cookie(i + "_ftag", r.getHashParam("ftag")), n.ftagCookieValue = r.getHashParam("ftag")), e.cookie(i + "_ftag") && (n.ftagCookieValue = e.cookie(i + "_ftag"));
                    var l = {},
                        u = !1;
                    if (r.getParam("adRegion") && (l.adRegion = r.getParam("adRegion"), u = !0), r.getParam("adType") && (l.adType = r.getParam("adType"), u = !0), r.getParam("adCountry") && (l.adCountry = r.getParam("adCountry"), u = !0), r.getParam("adSession") && (l.adSession = r.getParam("adSession"), u = !0), r.getParam("adSubses") && (l.adSubSession = r.getParam("adSubses"), u = !0), r.getParam("adNetwork") && ("7336" == r.getParam("adNetwork") || "8264" == r.getParam("adNetwork")) && t.ad.gpt && (t.ad.gpt.slotVars.network = r.getParam("adNetwork")), e.each(r.getAllParams(), function(e, t) {
                            var i = e.match(/adTargeting_(.+)/);
                            i && i[1] && (n.targeting[i[1]] = t)
                        }), e.cookie(i) && 1 != u) n.cookieValues = JSON.parse(e.cookie(i)), n.postCookieInit(t), n.isCookieLoaded = !0;
                    else {
                        var c = n.buildCookie(t, l);
                        c ? (e.cookie(i, JSON.stringify(c), {
                            domain: o,
                            secure: a,
                            path: "/"
                        }), n.cookieValues = c, n.postCookieInit(t), n.isCookieLoaded = !0) : s.log("ad::init: failed to build cookie")
                    }
                    if (!n.isCookieLoaded) {
                        var d = {
                                type: "get",
                                data: l,
                                cache: !1
                            },
                            f = t.ad.cookieServicePath || "/ad/ad-cookie/";
                        n.isCrossDomain(f) && e.extend(d, {
                            jsonp: !1,
                            jsonpCallback: "handleCookie",
                            dataType: "jsonp",
                            timeout: 3e3,
                            data: {
                                p: ""
                            }
                        }), d.url = f + t.viewGuid, e.ajax(d).done(function(r) {
                            s.log("trackingCookie::init", "loading json response"), e.cookie(i) || e.cookie(i, JSON.stringify(r), {
                                path: "/"
                            }), n.cookieValues = r, n.postCookieInit(t), n.loadAds(!0)
                        }).fail(function(e, i) {
                            s.log("trackingCookie::init", "unable to load url", f + t.viewGuid, i), window.console && window.console.error && console.error("ads::trackingCookie::init", "unable to load url", f + t.viewGuid, i), t.ad.useDefaultsOnCookieError ? (s.log("trackingCookie::init", "using default cookie values instead"), n.cookieValues = n.getCookieDefaults(t), n.postCookieInit(t), n.loadAds(!0)) : s.log("trackingCookie::init", "not loading ads")
                        })
                    }
                },
                isEDT: function(e) {
                    var t = new Date(e.getFullYear(), 2, 1);
                    t = Date.UTC(t.getUTCFullYear(), 2, 14 - (t.getUTCDay() + 13) % 7, 5);
                    var n = new Date(e.getFullYear(), 10, 1);
                    return n = Date.UTC(n.getUTCFullYear(), 10, 7 - (n.getUTCDay() + 6) % 7, 4), e.getTime() >= t && e.getTime() < n
                }
            };
        return {
            init: function(e) {
                u.init(e)
            },
            loadAds: function() {
                u.loadAds()
            },
            getAdObj: function() {
                if (u.isCookieLoaded) return t
            },
            getGptObj: function() {
                return t
            },
            getBlueKaiPath: function() {
                return t.getBlueKaiPath
            }
        }
    }), define("managers/ad", ["jquery", "version!fly/managers/ad", "version!fly/managers/debug"], function(e, t, n) {
        var i = n.init("ads"),
            r = !1,
            o = t.getGptObj();
        window.addEventListener("cbsnews.tealium.resetViewGuid", function() {
            o.setTargeting("vguid", CBSNEWS.tracking.pageViewGuid), o.setTargeting("firstpg", "0")
        }, !1), e(document).ready(function() {
            e(".inverse-header, .content-primary-inverse, .elp-header, .hero-48-hours").length > 0 && e(".ad-leader-top, .ad-leader-plus-top").addClass("dark-theme"), r || e(".ad-leader-top, .ad-leader-plus-top").addClass("no-mantle-skin"), o && e('[data-component="imageGallery"], [data-component="mediaPost"]').on("imagegalleryshown mediapostshown", function() {
                o.setTargeting("vguid", CBSNEWS.tracking.pageViewGuid), o.setTargeting("firstpg", "0"), o.refreshLastLoad()
            })
        }), !window.addEventListener || window.addEventListener("message", function(e) {
            if (e.origin === window.location.protocol + "//" + window.location.host && "string" == typeof e.data && 0 === e.data.indexOf("nativeAdBlankServed_"))
                for (var t = window.frames, n = 0; n < t.length; n++) {
                    var i = t[n];
                    i == e.source.parent && (i.frameElement.parentNode.style.display = "none")
                }
        }, !1);
        return o.registerCallback("leaderboardTop", function(t, n) {
            i.log("leaderboardTopCallback called with adId:", t);
            var r = e("#" + t);
            n.isEmpty ? (i.log("empty leader"), r.removeClass("contains-ad"), r.css("display", "none")) : (i.log("found leader"), r.addClass("contains-ad"), e(".ad-leader-top, .ad-leader-plus-top").css("min-height", "0"))
        }), o.registerCallback("skin", function(t) {
            i.log("skinCallback called with adId:", t), "none" != e("#" + t).css("display") ? (i.log("found skin"), r = !0, e(".ad-leader-top, .ad-leader-plus-top").removeClass("no-mantle-skin"), e(".ad-leader-top, .ad-leader-plus-top, .deep-story-header, .deep-story-body .container, .elp-header").addClass("has-mantle-skin")) : i.log("empty skin")
        }), o.registerCallback("stickyLeaderboard", function(e) {
            i.log("stickyLeaderboardCallback called with adId:", e);
            var t = document.querySelector(".content--type-article body:not(.skybox-loaded) .top-ad-container");
            "desktop" == CBSNEWS.device && t && setTimeout(function() {
                i.log("unticky adId", e), t.style.position = "relative"
            }, 5e3)
        }), t
    }), require(["third-party/gpt"]), require(["third-party/index-exchange"]), require(["third-party/sonobi"]), require(["domReady", "managers/ad"], function(e, t) {
        document.body.getAttribute("suppress-ads") || !1 === CBSNEWS.features.ads || e(function() {
            require(["third-party/sharethrough"]), setTimeout(function() {
                t.init({
                    ad: CBSNEWS.ad,
                    viewGuid: CBSNEWS.tracking.pageViewGuid
                }), t.loadAds(), CBSNEWS.ad.initialized = !0
            }, 300), addEventListener("lazybeforeunveil", function(e) {
                var n = e.target.getAttribute("data-ad");
                n && setTimeout(function() {
                    e.target.setAttribute("id", n + "-" + e.target.getAttribute("data-ad-container-id")), console.log("ADS: queuing", e.target.getAttribute("id"), "for display (after loadAds)");
                    var i = e.target.getAttribute("data-category-slug");
                    i && (CBSNEWS.ad.gpt.targeting.category = i), CBSNEWS.ad.gpt.adConfig.method = "async", CBSNEWS.ad.gpt.containerId = e.target.getAttribute("data-ad-container-id"), t.init({
                        ad: CBSNEWS.ad,
                        viewGuid: CBSNEWS.tracking.pageViewGuid
                    }), t.loadAds()
                }, 300)
            }, !1)
        })
    }), define("common/site-ads", function() {}), define("third-party/tealium", ["tealium"], function() {
        CBSNEWS.features.executeWithConsent([], function() {
            "object" == typeof om && void 0 !== om.fireGdprTags && om.fireGdprTags()
        }, window)
    }), define("managers/tealium", ["version!fly/managers/debug", "fly/libs/uuid.v4", "third-party/tealium"], function(e) {
        var t = e.get("tealium");
        return {
            trackingData: {},
            viewGuid: null,
            resetGuidEnabled: !0,
            init: function(e) {
                this.trackingData = e, t.log("tealium::init:", "loading tracking data", this.trackingData)
            },
            explicitTrackView: function(e) {
                e = void 0 === e ? {} : e;
                utag.view(e)
            },
            explicitTrackLink: function(e) {
                e = void 0 === e ? {} : e;
                utag.link(e)
            },
            setViewGuid: function(e) {
                this.viewGuid = e, CBSNEWS.tracking.pageViewGuid = this.viewGuid, t.log("tealium::setViewGuid", this.viewGuid)
            },
            resetViewGuid: function() {
                if (this.resetGuidEnabled) {
                    this.viewGuid = uuid.v4(), CBSNEWS.tracking.pageViewGuid = this.viewGuid;
                    var e = document.createEvent("Event");
                    e.initEvent("cbsnews.tealium.resetViewGuid", !0, !0), window.dispatchEvent(e)
                }
                return t.log("tealium::resetViewGuid", this.viewGuid), this.viewGuid
            },
            getViewGuid: function() {
                return this.viewGuid
            },
            syncResetViewGuid: function() {
                var e;
                return e = this.resetViewGuid(), this.resetGuidEnabled = !this.resetGuidEnabled, e
            },
            getTrackingData: function() {
                return this.trackingData
            }
        }
    }), "function" != typeof Object.assign && (Object.assign = function(e) {
        "use strict";
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
        e = Object(e);
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            if (null != n)
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }), define("polyfill/object.assign", function() {}), define("managers/taboola-rem", ["domReady", "utils/load-script", "polyfill/object.assign"], function(e, t) {
        "use strict";
        var n = {
                topic_door: "category",
                show_door: "category",
                deep_story: "-1",
                error_page: "-2",
                front_door: "home",
                image_gallery: "photo",
                image_gallery_list: "other",
                live_video: "-1",
                moneywatch: "article",
                media_post: "other",
                news_item: "article",
                search: "-2",
                topic_list: "other",
                video: "video",
                video_door: "category"
            } [utag_data.pageType] || "other",
            i = window._taboola = window._taboola || [],
            r = !1,
            o = {
                init: function(e) {
                    var t = {};
                    t[n] = "auto", t.referrer = document.referrer, t.url = window.location.href, e = Object.assign({}, t, e), i.push(e), CBSNEWS.features.executeWithConsent(["taboola"], o.load, o)
                },
                load: function() {
                    var e;
                    r || (e = "ios" === CBSNEWS.tracking.deviceOs ? "//cdn.taboola.com/libtrc/cbsinteractive-cbsnewsmobileappios/loader.js" : "android" === CBSNEWS.tracking.deviceOs ? "//cdn.taboola.com/libtrc/cbsinteractive-cbsnewsmobileappandroid/loader.js" : "//cdn.taboola.com/libtrc/cbsinteractive-cbsnews/loader.js", setTimeout(t, 300, e), r = !0)
                },
                display: function() {
                    var e = document.querySelectorAll("[data-taboola]");
                    if (e.length) {
                        o.init();
                        for (var t = 0; t < e.length; t++) o.push(e[t]);
                        o.flush()
                    }
                },
                refresh: function() {
                    i.push({
                        notify: "newPageLoad"
                    }), o.display()
                },
                push: function(e, t) {
                    o.init();
                    var n = JSON.parse(e.getAttribute("data-taboola"));
                    n = Object.assign({
                        container: e,
                        target_type: "mix"
                    }, n), i.push(n), t && o.flush()
                },
                flush: function() {
                    i.push({
                        flush: !0
                    })
                },
                taboola: null
            };
        window.CBSNEWS = window.CBSNEWS || {}, window.CBSNEWS.taboola = o, e(o.display)
    }), require(["common/s-vid-override"]), require(["fly/libs/uuid.v4"], function() {
        CBSNEWS.tracking.pageViewGuid = uuid.v4()
    });
var els = document.querySelectorAll(".site-nav__search-icon--type-close, .site-nav__item--search-link, .site-header__container > a:nth-of-type(1), .site-header__nav-toggle-container");
for (i = 0; i < els.length; i++) els[i].addEventListener("click", function() {
    document.body.classList.contains("skybox--is-hidden") ? document.body.classList.remove("skybox--is-hidden") : document.body.classList.add("skybox--is-hidden")
});
require(["common/site-ads"]), require(["managers/tealium"], function(e) {
        window.$tealium = e, 1 == CBSNEWS.tracking.isEnabled && (e.setViewGuid(CBSNEWS.tracking.pageViewGuid), e.init(CBSNEWS.tracking))
    }), require(["managers/taboola-rem"]), define("common", function() {}), "front_door" === CBSNEWS.tracking.pageType && window.addEventListener("video-embed-event", function(e) {
        var t = e.detail,
            n = t.videoShelfType && /^video_shelf_with_hero/.test(t.videoShelfType);
        switch (t.type) {
            case "OPEN":
                n && document.body.classList.add("player--is-playing");
                break;
            case "CLOSE":
                n && document.body.classList.remove("player--is-playing")
        }
    }), define("common/embed-events", function() {}),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("libs/displace.min", [], t) : "object" == typeof exports ? exports.displace = t() : e.displace = t()
    }(this, function() {
        return function(e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
        }([function(e, t, n) {
            "use strict";
            var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(1));
            e.exports = i.default
        }, function(e, t, n) {
            "use strict";

            function i() {
                var e = this.el,
                    t = this.opts || a,
                    n = {};
                if (e.style.position = "absolute", this.handle = t.handle || e, t.constrain) {
                    for (var i = t.relativeTo || e.parentNode, s = e, l = 0, u = 0; s !== i;) s = s.parentNode, (0, r.isRelative)(s) && (l -= s.offsetLeft, u -= s.offsetTop), s === i && (l += s.offsetLeft, u += s.offsetTop);
                    var c = l + i.offsetWidth - e.offsetWidth,
                        d = u + i.offsetHeight - e.offsetHeight;
                    n.xClamp = (0, r.generateClamp)(l, c), n.yClamp = (0, r.generateClamp)(u, d)
                }
                this.opts = t, this.data = n, this.events = {
                    mousedown: o.mousedown.bind(this),
                    mouseup: o.mouseup.bind(this),
                    touchstart: o.touchstart.bind(this),
                    touchstop: o.touchstop.bind(this)
                }, this.handle.addEventListener("mousedown", this.events.mousedown, !1), this.handle.addEventListener("touchstart", this.events.touchstart, !1)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(2),
                o = n(3),
                a = {
                    constrain: !1,
                    relativeTo: null,
                    handle: null,
                    highlightInputs: !1,
                    onMouseDown: null,
                    onMouseMove: null,
                    onMouseUp: null,
                    onTouchStart: null,
                    onTouchMove: null,
                    onTouchStop: null
                },
                s = function() {
                    function e(t, n) {
                        if (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), !t) throw Error("Must include moveable element");
                        this.el = t, this.opts = n, i.call(this)
                    }
                    return e.prototype.reinit = function() {
                        i.call(this)
                    }, e.prototype.destroy = function() {
                        var e = this.events;
                        this.handle.removeEventListener("mousedown", e.mousedown, !1), document.removeEventListener("mousemove", e.mousemove, !1), document.removeEventListener("mouseup", e.mouseup, !1), this.handle.removeEventListener("touchstart", e.touchstart, !1), document.removeEventListener("touchmove", e.touchmove, !1), document.removeEventListener("touchstop", e.touchstop, !1), this.data = null, this.events = null, this.el = null, this.handle = null, this.opts = null
                    }, e
                }();
            t.default = function(e, t) {
                return new s(e, t)
            }
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateClamp = function(e, t) {
                return function(n) {
                    return Math.min(Math.max(n, e), t)
                }
            }, t.generateMoveFn = function() {
                return window.requestAnimationFrame ? function(e, t, n) {
                    window.requestAnimationFrame(function() {
                        e.style.left = t + "px", e.style.top = n + "px"
                    })
                } : function(e, t, n) {
                    e.style.left = t + "px", e.style.top = n + "px"
                }
            }, t.isRelative = function(e) {
                return "relative" === window.getComputedStyle(e).position
            }
        }, function(e, t, n) {
            "use strict";

            function i(e, t, n) {
                var i = this.el,
                    r = this.opts,
                    a = this.data;
                "function" == typeof r.onMouseMove && r.onMouseMove(i, n);
                var s = n.clientX - e,
                    l = n.clientY - t;
                return r.constrain && (s = a.xClamp(s), l = a.yClamp(l)), o(i, s, l), n.preventDefault(), !1
            }

            function r(e, t, n) {
                var i = this.el,
                    r = this.opts,
                    a = this.data;
                "function" == typeof r.onTouchMove && r.onTouchMove(i, n);
                var s = n.targetTouches[0],
                    l = s.clientX - e,
                    u = s.clientY - t;
                return r.constrain && (l = a.xClamp(l), u = a.yClamp(u)), o(i, l, u), n.preventDefault(), !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mousedown = function(e) {
                var t = this.opts;
                if (t.highlightInputs) {
                    var n = e.target.tagName.toLowerCase();
                    if ("input" === n || "textarea" === n) return
                }
                var r = this.el,
                    o = this.events;
                "function" == typeof t.onMouseDown && t.onMouseDown(r, e);
                var a = e.clientX - r.offsetLeft,
                    s = e.clientY - r.offsetTop;
                o.mousemove = i.bind(this, a, s), document.addEventListener("mousemove", o.mousemove, !1), document.addEventListener("mouseup", o.mouseup, !1)
            }, t.mousemove = i, t.mouseup = function(e) {
                var t = this.el,
                    n = this.opts,
                    i = this.events;
                "function" == typeof n.onMouseUp && n.onMouseUp(t, e), document.removeEventListener("mouseup", i.mouseup, !1), document.removeEventListener("mousemove", i.mousemove, !1)
            }, t.touchstart = function(e) {
                var t = this.opts;
                if (t.highlightInputs) {
                    var n = e.target.tagName.toLowerCase();
                    if ("input" === n || "textarea" === n) return
                }
                var i = this.el,
                    o = this.events;
                "function" == typeof t.onTouchStart && t.onTouchStart(i, e);
                var a = e.targetTouches[0],
                    s = a.clientX - i.offsetLeft,
                    l = a.clientY - i.offsetTop;
                o.touchmove = r.bind(this, s, l), document.addEventListener("touchmove", o.touchmove, !1), document.addEventListener("touchend", o.touchstop, !1), document.addEventListener("touchcancel", o.touchstop, !1)
            }, t.touchmove = r, t.touchstop = function(e) {
                var t = this.el,
                    n = this.opts,
                    i = this.events;
                "function" == typeof n.onTouchStop && n.onTouchStop(t, e), document.removeEventListener("touchmove", i.touchmove, !1), document.removeEventListener("touchend", i.touchstop, !1), document.removeEventListener("touchcancel", i.touchstop, !1)
            };
            var o = (0, n(2).generateMoveFn)()
        }])
    }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
        var t = this;
        if (!document.documentElement.contains(t)) return null;
        do {
            if (t.matches(e)) return t;
            t = t.parentElement || t.parentNode
        } while (null !== t);
        return null
    }), define("polyfill/element.closest", function() {}),
    /**
     * Copyright 2016 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function(e, t) {
        "use strict";
        if (!("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype)) {
            var n = [];
            r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.observe = function(e) {
                if (!this._observationTargets.some(function(t) {
                        return t.element == e
                    })) {
                    if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                    this._registerInstance(), this._observationTargets.push({
                        element: e,
                        entry: null
                    }), this._monitorIntersections()
                }
            }, r.prototype.unobserve = function(e) {
                this._observationTargets = this._observationTargets.filter(function(t) {
                    return t.element != e
                }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
            }, r.prototype.disconnect = function() {
                this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
            }, r.prototype.takeRecords = function() {
                var e = this._queuedEntries.slice();
                return this._queuedEntries = [], e
            }, r.prototype._initThresholds = function(e) {
                var t = e || [0];
                return Array.isArray(t) || (t = [t]), t.sort().filter(function(e, t, n) {
                    if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                    return e !== n[t - 1]
                })
            }, r.prototype._parseRootMargin = function(e) {
                var t = (e || "0px").split(/\s+/).map(function(e) {
                    var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                    if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                    return {
                        value: parseFloat(t[1]),
                        unit: t[2]
                    }
                });
                return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
            }, r.prototype._monitorIntersections = function() {
                this._monitoringIntersections || (this._monitoringIntersections = !0, this._checkForIntersections(), this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }))))
            }, r.prototype._unmonitorIntersections = function() {
                this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(e, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
            }, r.prototype._checkForIntersections = function() {
                var t = this._rootIsInDom(),
                    n = t ? this._getRootRect() : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    };
                this._observationTargets.forEach(function(r) {
                    var o = r.element,
                        a = s(o),
                        l = this._rootContainsTarget(o),
                        u = r.entry,
                        c = t && l && this._computeTargetAndRootIntersection(o, n),
                        d = r.entry = new i({
                            time: e.performance && performance.now && performance.now(),
                            target: o,
                            boundingClientRect: a,
                            rootBounds: n,
                            intersectionRect: c
                        });
                    u ? t && l ? this._hasCrossedThreshold(u, d) && this._queuedEntries.push(d) : u && u.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
                }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
            }, r.prototype._computeTargetAndRootIntersection = function(n, i) {
                if ("none" != e.getComputedStyle(n).display) {
                    for (var r, o, a, l, u, c, d, f, p = s(n), h = n.parentNode, g = !1; !g;) {
                        var m = null;
                        if (h == this.root || h == t.body || h == t.documentElement || 1 != h.nodeType ? (g = !0, m = i) : "visible" != e.getComputedStyle(h).overflow && (m = s(h)), m && (r = m, o = p, a = void 0, l = void 0, u = void 0, c = void 0, d = void 0, f = void 0, a = Math.max(r.top, o.top), l = Math.min(r.bottom, o.bottom), u = Math.max(r.left, o.left), c = Math.min(r.right, o.right), f = l - a, !(p = (d = c - u) >= 0 && f >= 0 && {
                                top: a,
                                bottom: l,
                                left: u,
                                right: c,
                                width: d,
                                height: f
                            }))) break;
                        h = h.parentNode
                    }
                    return p
                }
            }, r.prototype._getRootRect = function() {
                var e;
                if (this.root) e = s(this.root);
                else {
                    var n = t.documentElement,
                        i = t.body;
                    e = {
                        top: 0,
                        left: 0,
                        right: n.clientWidth || i.clientWidth,
                        width: n.clientWidth || i.clientWidth,
                        bottom: n.clientHeight || i.clientHeight,
                        height: n.clientHeight || i.clientHeight
                    }
                }
                return this._expandRectByRootMargin(e)
            }, r.prototype._expandRectByRootMargin = function(e) {
                var t = this._rootMarginValues.map(function(t, n) {
                        return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
                    }),
                    n = {
                        top: e.top - t[0],
                        right: e.right + t[1],
                        bottom: e.bottom + t[2],
                        left: e.left - t[3]
                    };
                return n.width = n.right - n.left, n.height = n.bottom - n.top, n
            }, r.prototype._hasCrossedThreshold = function(e, t) {
                var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                    i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                if (n !== i)
                    for (var r = 0; r < this.thresholds.length; r++) {
                        var o = this.thresholds[r];
                        if (o == n || o == i || o < n != o < i) return !0
                    }
            }, r.prototype._rootIsInDom = function() {
                return !this.root || l(t, this.root)
            }, r.prototype._rootContainsTarget = function(e) {
                return l(this.root || t, e)
            }, r.prototype._registerInstance = function() {
                n.indexOf(this) < 0 && n.push(this)
            }, r.prototype._unregisterInstance = function() {
                var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
            }, e.IntersectionObserver = r, e.IntersectionObserverEntry = i
        }

        function i(e) {
            this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }, this.isIntersecting = !!e.intersectionRect;
            var t = this.boundingClientRect,
                n = t.width * t.height,
                i = this.intersectionRect,
                r = i.width * i.height;
            this.intersectionRatio = n ? r / n : this.isIntersecting ? 1 : 0
        }

        function r(e, t) {
            var n, i, r, o = t || {};
            if ("function" != typeof e) throw new Error("callback must be a function");
            if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
            this._checkForIntersections = (n = this._checkForIntersections.bind(this), i = this.THROTTLE_TIMEOUT, r = null, function() {
                r || (r = setTimeout(function() {
                    n(), r = null
                }, i))
            }), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map(function(e) {
                return e.value + e.unit
            }).join(" ")
        }

        function o(e, t, n, i) {
            "function" == typeof e.addEventListener ? e.addEventListener(t, n, i || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
        }

        function a(e, t, n, i) {
            "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, i || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
        }

        function s(e) {
            var t;
            try {
                t = e.getBoundingClientRect()
            } catch (e) {}
            return t ? (t.width && t.height || (t = {
                top: t.top,
                right: t.right,
                bottom: t.bottom,
                left: t.left,
                width: t.right - t.left,
                height: t.bottom - t.top
            }), t) : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }
        }

        function l(e, t) {
            for (var n = t; n;) {
                if (11 == n.nodeType && n.host && (n = n.host), n == e) return !0;
                n = n.parentNode
            }
            return !1
        }
    }(window, document), define("polyfill/intersection-observer", function() {});
/*! intercom.js | https://github.com/diy/intercom.js | Apache License (v2) */
var Intercom = function() {
    var e = function() {};
    e.createInterface = function(e) {
        return {
            on: function(t, n) {
                void 0 === this[e] && (this[e] = {}), this[e].hasOwnProperty(t) || (this[e][t] = []), this[e][t].push(n)
            },
            off: function(t, n) {
                void 0 !== this[e] && this[e].hasOwnProperty(t) && r.removeItem(n, this[e][t])
            },
            trigger: function(t) {
                if (void 0 !== this[e] && this[e].hasOwnProperty(t))
                    for (var n = Array.prototype.slice.call(arguments, 1), i = 0; i < this[e][t].length; i++) this[e][t][i].apply(this[e][t][i], n)
            }
        }
    };
    var t = e.createInterface("_handlers");
    e.prototype._on = t.on, e.prototype._off = t.off, e.prototype._trigger = t.trigger;
    var n = e.createInterface("handlers");
    e.prototype.on = function() {
        n.on.apply(this, arguments), Array.prototype.unshift.call(arguments, "on"), this._trigger.apply(this, arguments)
    }, e.prototype.off = n.off, e.prototype.trigger = n.trigger;
    var i = window.localStorage;
    void 0 === i && (i = {
        getItem: function() {},
        setItem: function() {},
        removeItem: function() {}
    });
    var r = {},
        o = function() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        };
    r.guid = function() {
        return o() + o() + "-" + o() + "-" + o() + "-" + o() + "-" + o() + o() + o()
    }, r.throttle = function(e, t) {
        var n = 0;
        return function() {
            var i = (new Date).getTime();
            i - n > e && (n = i, t.apply(this, arguments))
        }
    }, r.extend = function(e, t) {
        if (void 0 !== e && e || (e = {}), "object" == typeof t)
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }, r.removeItem = function(e, t) {
        for (var n = t.length - 1; 0 <= n; n--) t[n] === e && t.splice(n, 1);
        return t
    };
    var a = function() {
        var e = this,
            t = (new Date).getTime();
        this.origin = r.guid(), this.lastMessage = t, this.bindings = [], this.receivedIDs = {}, this.previousValues = {}, t = function() {
            e._onStorageEvent.apply(e, arguments)
        }, window.attachEvent ? document.attachEvent("onstorage", t) : window.addEventListener("storage", t, !1)
    };
    a.prototype._transaction = function(e) {
        var t = this,
            n = !1,
            r = !1,
            o = null,
            a = function() {
                if (!n) {
                    var s = (new Date).getTime(),
                        l = parseInt(i.getItem(u) || 0);
                    l && 1e3 > s - l ? (r || (t._on("storage", a), r = !0), o = window.setTimeout(a, 20)) : (n = !0, i.setItem(u, s), e(), r && t._off("storage", a), o && window.clearTimeout(o), i.removeItem(u))
                }
            };
        a()
    }, a.prototype._cleanup_emit = r.throttle(100, function() {
        this._transaction(function() {
            for (var e = (new Date).getTime() - c, t = 0, n = JSON.parse(i.getItem(s) || "[]"), r = n.length - 1; 0 <= r; r--) n[r].timestamp < e && (n.splice(r, 1), t++);
            0 < t && i.setItem(s, JSON.stringify(n))
        })
    }), a.prototype._cleanup_once = r.throttle(100, function() {
        var e = this;
        this._transaction(function() {
            var t, n = JSON.parse(i.getItem(l) || "{}");
            (new Date).getTime();
            var r = 0;
            for (t in n) e._once_expired(t, n) && (delete n[t], r++);
            0 < r && i.setItem(l, JSON.stringify(n))
        })
    }), a.prototype._once_expired = function(e, t) {
        if (!t || !t.hasOwnProperty(e) || "object" != typeof t[e]) return !0;
        var n = t[e].ttl || d,
            i = (new Date).getTime();
        return t[e].timestamp < i - n
    }, a.prototype._localStorageChanged = function(e, t) {
        if (e && e.key) return e.key === t;
        var n = i.getItem(t);
        return n !== this.previousValues[t] && (this.previousValues[t] = n, !0)
    }, a.prototype._onStorageEvent = function(e) {
        e = e || window.event;
        var t = this;
        this._localStorageChanged(e, s) && this._transaction(function() {
            for (var e = (new Date).getTime(), n = i.getItem(s), r = (n = JSON.parse(n || "[]"), 0); r < n.length; r++)
                if (n[r].origin !== t.origin && !(n[r].timestamp < t.lastMessage)) {
                    if (n[r].id) {
                        if (t.receivedIDs.hasOwnProperty(n[r].id)) continue;
                        t.receivedIDs[n[r].id] = !0
                    }
                    t.trigger(n[r].name, n[r].payload)
                } t.lastMessage = e
        }), this._trigger("storage", e)
    }, a.prototype._emit = function(e, t, n) {
        if ((n = "string" == typeof n || "number" == typeof n ? String(n) : null) && n.length) {
            if (this.receivedIDs.hasOwnProperty(n)) return;
            this.receivedIDs[n] = !0
        }
        var r = {
                id: n,
                name: e,
                origin: this.origin,
                timestamp: (new Date).getTime(),
                payload: t
            },
            o = this;
        this._transaction(function() {
            var n = [(n = i.getItem(s) || "[]").substring(0, n.length - 1), "[]" === n ? "" : ",", JSON.stringify(r), "]"].join("");
            i.setItem(s, n), o.trigger(e, t), window.setTimeout(function() {
                o._cleanup_emit()
            }, 50)
        })
    }, a.prototype.bind = function(e, t) {
        for (var n = 0; n < a.bindings.length; n++) {
            var i = a.bindings[n].factory(e, t || null, this);
            i && this.bindings.push(i)
        }
    }, a.prototype.emit = function(e, t) {
        this._emit.apply(this, arguments), this._trigger("emit", e, t)
    }, a.prototype.once = function(e, t, n) {
        if (a.supported) {
            var r = this;
            this._transaction(function() {
                var o = JSON.parse(i.getItem(l) || "{}");
                r._once_expired(e, o) && (o[e] = {}, o[e].timestamp = (new Date).getTime(), "number" == typeof n && (o[e].ttl = 1e3 * n), i.setItem(l, JSON.stringify(o)), t(), window.setTimeout(function() {
                    r._cleanup_once()
                }, 50))
            })
        }
    }, r.extend(a.prototype, e.prototype), a.bindings = [], a.supported = void 0 !== i;
    var s = "intercom",
        l = "intercom_once",
        u = "intercom_lock",
        c = 5e4,
        d = 36e5;
    a.destroy = function() {
        i.removeItem(u), i.removeItem(s), i.removeItem(l)
    };
    var f = null;
    a.getInstance = function() {
        return f || (f = new a), f
    };
    var p = function(e, t, n) {
        if ((t = r.extend({
                id: null,
                send: !0,
                receive: !0
            }, t)).receive) {
            var i, o = [],
                a = function(i) {
                    -1 === o.indexOf(i) && (o.push(i), e.on(i, function(e) {
                        var r = "function" == typeof t.id ? t.id(i, e) : null,
                            o = "function" != typeof t.receive || t.receive(i, e);
                        (o || "boolean" != typeof o) && n._emit(i, e, r)
                    }))
                };
            for (i in n.handlers)
                for (var s = 0; s < n.handlers[i].length; s++) a(i, n.handlers[i][s]);
            n._on("on", a)
        }
        t.send && n._on("emit", function(n, i) {
            var r = "function" != typeof t.send || t.send(n, i);
            (r || "boolean" != typeof r) && e.emit(n, i)
        })
    };
    return p.factory = function(e, t, n) {
        return void 0 !== e.socket && new p(e, t, n)
    }, a.bindings.push(p), a
}();

function popupHandler(e) {
    var t = screen.width / 2 - 480,
        n = screen.height / 2 - 275.5,
        i = window.open(e, "securePopup", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width=960, height=551, top=" + n + ", left=" + t);
    if (-1 != navigator.userAgent.indexOf("Edge") || -1 != navigator.userAgent.indexOf("MSIE") || -1 != navigator.userAgent.indexOf("Trident")) {
        window.setTimeout(function e() {
            i.closed ? location.reload() : window.setTimeout(e, 1e3)
        }, 1e3)
    } else {
        var r = window.addEventListener ? "addEventListener" : "attachEvent";
        (0, window[r])("attachEvent" == r ? "onmessage" : "message", function(e) {
            e.origin.indexOf("cbsnews") < -1 || "loginWindow" !== e.data || (location.href = addParameterToURL(location.href, "login=1"))
        }, !1)
    }
}
define("libs/intercom.min", function() {}), define("fly/utils/data-prefix-1.0", ["jquery", "version!fly/utils/string-helper"], function(e, t) {
        var n = function(n, i) {
            var r = e(this).data(i),
                o = {};
            if (n) return e.each(r, function(e, i) {
                0 === e.indexOf(n) && (e = e.substr(n.length), o[t.lowerFirst(e)] = i)
            }), o
        };
        return e.fn.dataPrefix = n, n
    }),
    /*! jQuery UI - v1.9.2 - 2012-12-11
     * http://jqueryui.com
     * Includes: jquery.ui.widget.js
     * Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */
    define("fly/libs/jquery.widget-1.9.2", ["jquery"], function(e) {
        var t = 0,
            n = Array.prototype.slice,
            i = e.cleanData;
        e.cleanData = function(t) {
            for (var n, r = 0; null != (n = t[r]); r++) try {
                e(n).triggerHandler("remove")
            } catch (e) {}
            i(t)
        }, e.widget = function(t, n, i) {
            var r, o, a, s, l = t.split(".")[0];
            t = t.split(".")[1], r = l + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][r.toLowerCase()] = function(t) {
                return !!e.data(t, r)
            }, e[l] = e[l] || {}, o = e[l][t], a = e[l][t] = function(e, t) {
                if (!this._createWidget) return new a(e, t);
                arguments.length && this._createWidget(e, t)
            }, e.extend(a, o, {
                version: i.version,
                _proto: e.extend({}, i),
                _childConstructors: []
            }), (s = new n).options = e.widget.extend({}, s.options), e.each(i, function(t, r) {
                var o, a;
                e.isFunction(r) && (i[t] = (o = function() {
                    return n.prototype[t].apply(this, arguments)
                }, a = function(e) {
                    return n.prototype[t].apply(this, e)
                }, function() {
                    var e, t = this._super,
                        n = this._superApply;
                    return this._super = o, this._superApply = a, e = r.apply(this, arguments), this._super = t, this._superApply = n, e
                }))
            }), a.prototype = e.widget.extend(s, {
                widgetEventPrefix: o ? s.widgetEventPrefix : t
            }, i, {
                constructor: a,
                namespace: l,
                widgetName: t,
                widgetBaseClass: r,
                widgetFullName: r
            }), o ? (e.each(o._childConstructors, function(t, n) {
                var i = n.prototype;
                e.widget(i.namespace + "." + i.widgetName, a, n._proto)
            }), delete o._childConstructors) : n._childConstructors.push(a), e.widget.bridge(t, a)
        }, e.widget.extend = function(t) {
            for (var i, r, o = n.call(arguments, 1), a = 0, s = o.length; a < s; a++)
                for (i in o[a]) void 0 !== (r = o[a][i]) && (e.isPlainObject(r) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], r) : e.widget.extend({}, r) : t[i] = r);
            return t
        }, e.widget.bridge = function(t, i) {
            var r = i.prototype.widgetFullName || t;
            e.fn[t] = function(o) {
                var a = "string" == typeof o,
                    s = n.call(arguments, 1),
                    l = this;
                return o = !a && s.length ? e.widget.extend.apply(null, [o].concat(s)) : o, a ? this.each(function() {
                    var n, i = e.data(this, r);
                    return i ? e.isFunction(i[o]) && "_" !== o.charAt(0) ? (n = i[o].apply(i, s)) !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0 : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'")
                }) : this.each(function() {
                    var t = e.data(this, r);
                    t ? t.option(o || {})._init() : e.data(this, r, new i(o, this))
                }), l
            }
        }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(n, i) {
                i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), n), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetName, this), e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === i && this.destroy()
                    }
                }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: e.noop,
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: e.noop,
            widget: function() {
                return this.element
            },
            option: function(t, n) {
                var i, r, o, a = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (a = {}, i = t.split("."), t = i.shift(), i.length) {
                        for (r = a[t] = e.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) r[i[o]] = r[i[o]] || {}, r = r[i[o]];
                        if (t = i.pop(), void 0 === n) return void 0 === r[t] ? null : r[t];
                        r[t] = n
                    } else {
                        if (void 0 === n) return void 0 === this.options[t] ? null : this.options[t];
                        a[t] = n
                    } return this._setOptions(a), this
            },
            _setOptions: function(e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function(e, t) {
                return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _on: function(t, n, i) {
                var r, o = this;
                "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = r = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), e.each(i, function(i, a) {
                    function s() {
                        if (t || !0 !== o.options.disabled && !e(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? o[a] : a).apply(o, arguments)
                    }
                    "string" != typeof a && (s.guid = a.guid = a.guid || s.guid || e.guid++);
                    var l = i.match(/^(\w+)\s*(.*)$/),
                        u = l[1] + o.eventNamespace,
                        c = l[2];
                    c ? r.delegate(c, u, s) : n.bind(u, s)
                })
            },
            _off: function(e, t) {
                t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
            },
            _delay: function(e, t) {
                var n = this;
                return setTimeout(function() {
                    return ("string" == typeof e ? n[e] : e).apply(n, arguments)
                }, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        e(t.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(t) {
                        e(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        e(t.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(t) {
                        e(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(t, n, i) {
                var r, o, a = this.options[t];
                if (i = i || {}, (n = e.Event(n)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent)
                    for (r in o) r in n || (n[r] = o[r]);
                return this.element.trigger(n, i), !(e.isFunction(a) && !1 === a.apply(this.element[0], [n].concat(i)) || n.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, n) {
            e.Widget.prototype["_" + t] = function(i, r, o) {
                "string" == typeof r && (r = {
                    effect: r
                });
                var a, s = r ? !0 === r || "number" == typeof r ? n : r.effect || n : t;
                "number" == typeof(r = r || {}) && (r = {
                    duration: r
                }), a = !e.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), a && e.effects && (e.effects.effect[s] || !1 !== e.uiBackCompat && e.effects[s]) ? i[t](r) : s !== t && i[s] ? i[s](r.duration, r.easing, o) : i.queue(function(n) {
                    e(this)[t](), o && o.call(i[0]), n()
                })
            }
        }), !1 !== e.uiBackCompat && (e.Widget.prototype._getCreateOptions = function() {
            return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
        })
    }), define("fly/components/base-1.0", ["jquery", "version!fly/utils/data-prefix", "version!fly/libs/jquery.widget"], function(e) {
        var t = {},
            n = {},
            i = {
                setDefaultOptions: function(n, i) {
                    "string" == typeof n ? (t[n] = t[n] || {}, e.extend(!0, t[n], i)) : e.extend(!0, t, n)
                },
                addDefaultEvents: function(n, r) {
                    var o;
                    "string" == typeof n ? (t[n] = t[n] || {}, i.addDefaultEvent(n, r)) : (o = n, e.each(o, function(e, t) {
                        i.addDefaultEvent(e, t)
                    }))
                },
                addDefaultEvent: function(e, t) {
                    n[e] = n[e] || [], n[e].push(t)
                }
            };
        return e.widget("fly.base", {
            options: {
                defaultsDisabled: !1,
                defaultOptionsDisabled: !1,
                defaultEventsDisabled: !1
            },
            _setup: function() {
                var t = this,
                    i = n[this.widgetName] || [];
                this.$element = this.element, this.$document = this.document, this.$window = this.window, i.length && e.each(i, function(n, i) {
                    var r = {};
                    e.each(i, function(e, n) {
                        r[(t.widgetEventPrefix + e).toLowerCase()] = n
                    }), t.$element.on(r)
                })
            },
            _getCreateOptions: function() {
                var t = this.getDefaultOptions(),
                    n = this.getDataOptions(this.element);
                return e.extend(!0, {}, t, n)
            },
            getDefaultOptions: function() {
                var e = this.options,
                    n = {};
                return e.defaultsDisabled || e.defaultOptionsDisabled || (n = t[this.widgetName] || {}), n
            },
            getDataOptions: function(e, t) {
                return t = t || this.widgetName, e.data(t + "Options") || e.dataPrefix(t)
            },
            _triggerGlobal: function(e, t) {
                this.$document.trigger(e, t)
            },
            _create: function() {
                this.$element = this.element
            },
            setOptionsFromData: function() {}
        }), i
    }), define("components/draggable-frame", ["libs/displace.min", "version!fly/managers/debug", "polyfill/element.closest", "polyfill/intersection-observer", "libs/intercom.min", "version!fly/components/base"], function(e, t) {
        t.init("draggable").log("starting widget");
        for (var n = document.querySelectorAll("[data-component='draggableFrame']"), i = 0; i < n.length; i++) {
            var r = n[i],
                o = r.getAttribute("data-draggable-frame-options");
            new a({
                element: r,
                wrapper: document.querySelector(".embed__content-wrapper") || r.closest(".component"),
                handle: r.querySelector(".player-overlay--draggable-handle"),
                close_button: r.querySelector(".player-overlay__button--close"),
                behavior: JSON.parse(o)
            }).create()
        }

        function a(t) {
            this.isInitialized = !1, this.stickyClass = "floating", this.dragClass = "is-dragging", this.element = t.element, this.wrapper = t.wrapper, this.handle = t.handle, this.close_button = t.close_button, this.behavior = Object.assign({}, t.behavior), this.intercom = Intercom.getInstance(), this.create = function() {
                var e = this;
                this.intercom.on("uvpjs-newvideoplayback", function(t) {
                    e.isInitialized || e.element.querySelector("iframe").contentWindow.CBSNEWS.uvpConfig.containerId != t.containerId || (e.enableViewabilityPlayer(), e.initDraggablePlayer(), e.isInitialized = !0)
                }), this.intercom.on("uvpjs-overlay-change", function(t) {
                    t.isVisible ? e.element.classList.add("draggableframe--hide-overlay") : e.element.classList.remove("draggableframe--hide-overlay")
                }), window.addEventListener("video-embed-event", function(t) {
                    var n = t.detail;
                    "front_door" === CBSNEWS.tracking.pageType && n.videoShelfType && /^video_shelf_with_hero/.test(n.videoShelfType) && "CLOSE" === n.type && e.disableViewabilityPlayer()
                })
            }, this.enableViewabilityPlayer = function() {
                var e = this.element,
                    t = this.stickyClass,
                    n = this;
                this.intersectionObserver = new IntersectionObserver(function(i) {
                    if (i[0].intersectionRatio <= .2) {
                        e.classList.add(t), n.frame = n.element.querySelector("iframe").contentWindow.document.body, n.frame.classList.add(t);
                        var r = e.getAttribute("data-left");
                        r && (e.style.left = r);
                        var o = e.getAttribute("data-top");
                        o && (e.style.top = o), n.containDraggablePlayer(e)
                    } else e.classList.remove(t), n.frame && n.frame.classList.remove(t), e.setAttribute("data-left", e.style.left), e.setAttribute("data-top", e.style.top), e.style.left = null, e.style.top = null
                }, {
                    threshold: .2
                }), this.intersectionObserver.observe(this.wrapper), this.close_button.addEventListener("click", this.disableViewabilityPlayer.bind(this), !1)
            }, this.disableViewabilityPlayer = function(e) {
                this.element.classList.remove("floating"), this.frame && this.frame.classList.remove("floating"), this.behavior.pauseOnClose && this.intercom.emit("uvpjs-viewabilityclosed", {
                    containerId: this.element.querySelector("iframe").contentWindow.CBSNEWS.uvpConfig.containerId
                }), this.intersectionObserver && this.intersectionObserver.unobserve(this.wrapper), this.behavior.appearAfterClose && (this.isInitialized = !1), e && e.preventDefault()
            }, this.initDraggablePlayer = function() {
                var t = this.element;
                t.style.touchAction = "none", t.style.msTouchAction = "none";
                var n = {};
                n.handle = this.handle, n.onMouseDown = this.activateDraggablePlayer.bind(this), n.onTouchStart = this.activateDraggablePlayer.bind(this), n.onMouseUp = this.deactivateDraggablePlayer.bind(this), n.onTouchStop = this.deactivateDraggablePlayer.bind(this), this.draggable = e(t, n), window.addEventListener("orientationchange", function() {
                    setTimeout(function() {
                        this.containDraggablePlayer(t)
                    }, 500)
                }, !1)
            }, this.activateDraggablePlayer = function(e) {
                e.classList.add(this.dragClass)
            }, this.deactivateDraggablePlayer = function(e) {
                e.classList.remove(this.dragClass);
                var t = this;
                setTimeout(function() {
                    t.containDraggablePlayer(e)
                }, 100), e.addEventListener("click", function(e) {
                    e.preventDefault()
                })
            }, this.containDraggablePlayer = function(e) {
                var t = e.getBoundingClientRect();
                t.left < 20 ? e.style.left = "20px" : t.left > window.innerWidth - t.width - 20 && (e.style.left = window.innerWidth - t.width - 20 + "px"), t.top < 20 ? e.style.top = "20px" : t.top > window.innerHeight - t.height - 20 && (e.style.top = window.innerHeight - t.height - 20 + "px")
            }
        }
    }), define("components/live-headline", [], function() {
        var e = {};

        function t(t) {
            var i = new XMLHttpRequest;
            i.open("GET", t, !0), i.send(), i.onreadystatechange = function() {
                if (4 == this.readyState && 200 === this.status) {
                    var i = JSON.parse(this.responseText);
                    if (i.navigation && i.navigation.data && i.navigation.data[0]) {
                        for (var r, o = 0; o < i.navigation.data.length; o++) {
                            var a = i.navigation.data[o];
                            "liveStreaming" !== a.type && "custom" !== a.type && "live" !== a.type || (r = a)
                        }
                        e[t].status = i.navigation.ready, void 0 !== r && (e[t].rundown = r, e[t].elements.forEach(function(i) {
                            n(i, e[t])
                        }))
                    }
                }
            }
        }

        function n(e, t) {
            var n = e.options.fieldMap || {
                "": "headlineshort"
            };
            for (var i in n) {
                var r = i,
                    o = t.rundown[n[i]],
                    a = r.split("::");
                r = a[0];
                var s = a[1],
                    l = [e.node];
                r && (l = Array.prototype.slice.call(e.node.querySelectorAll(r))), l.length && void 0 !== o && (s ? l.forEach(function(e) {
                    e.setAttribute(s, o)
                }) : l.forEach(function(e) {
                    e.textContent = o
                }))
            }
            if (e.options.documentClassName) {
                var u = document.documentElement.classList;
                1 == t.status ? u.add(e.options.documentClassName) : u.remove(e.options.documentClassName)
            }
        }
        return function(i, r) {
            var o = r.rundownUrl,
                a = {
                    node: i,
                    options: r
                };
            o ? (e[o] || (e[o] = {
                status: null,
                rundown: void 0,
                elements: []
            }, t(o), setInterval(function() {
                t(o)
            }, 15e3)), e[o].elements.push(a), e[o].rundown && n(a, e[o])) : console.error("Rundown URL is not provided:", a, r)
        }
    }), define("managers/scrolling-image-gallery", ["managers/tealium", "version!fly/managers/debug", "polyfill/intersection-observer"], function(e, t) {
        var n = t.init("scrolling-image-gallery");
        n.log("Start");
        var i = document.querySelector('[data-component*="scrollingImageGallery"]');
        if (i) {
            var r = {
                    root: null,
                    rootMargin: "0px",
                    threshold: .55
                },
                o = new IntersectionObserver(function(t) {
                    n.log("Begin loop", t.length), t.forEach(function(t) {
                        var i = t.intersectionRatio >= r.threshold;
                        n.log("Entry", t.target.getAttribute("id"), t.intersectionRatio, i);
                        var o = t.target;
                        if (i) {
                            if ("true" == o.getAttribute("data-active")) return;
                            o.setAttribute("data-active", "true"), setTimeout(function() {
                                var t = o.getAttribute("data-active"),
                                    i = o.getAttribute("id");
                                if (n.log("page " + i, t), "true" == t) {
                                    var r = o.getAttribute("data-vars-path");
                                    history.pushState({}, "", r), document.title = o.getAttribute("data-vars-title"), e.explicitTrackView({
                                        pageViewGuid: e.resetViewGuid()
                                    }), n.log("Url updated to ", r)
                                }
                            }, 300)
                        } else o.setAttribute("data-active", "false")
                    })
                }, r),
                a = i.querySelectorAll(".embed--type-image img");
            a.forEach(function(e) {
                o.observe(e)
            }), n.log("Slides", a)
        } else n.log("No gallery found")
    }), define("managers/font-loader", [], function() {
        if ("fonts" in document) {
            var e = new FontFace("Publico Headline", "local('PublicoHeadline-Bold'), url(https://cbsnews4.cbsistatic.com/fly/bundles/cbsnewscontent/fonts/PublicoHeadline-Bold/PublicoHeadline-Bold.woff2)", {
                    style: "normal",
                    weight: "700"
                }),
                t = (new FontFace("Publico Headline", "local('PublicoHeadline-Black'), url(https://cbsnews4.cbsistatic.com/fly/bundles/cbsnewscontent/fonts/PublicoHeadline-Black/PublicoHeadline-Black.woff2)", {
                    style: "normal",
                    weight: "900"
                }), new FontFace("Proxima Nova", "local('ProximaNova-Regular'), url(https://cbsnews4.cbsistatic.com/fly/bundles/cbsnewscontent/fonts/ProximaNova-Regular/ProximaNova-Regular.woff2)", {
                    style: "normal",
                    weight: "400"
                })),
                n = new FontFace("Proxima Nova", "local('ProximaNova-Bold'), url(https://cbsnews4.cbsistatic.com/fly/bundles/cbsnewscontent/fonts/ProximaNova-Bold/ProximaNova-Bold.woff2)", {
                    style: "normal",
                    weight: "700"
                });
            new FontFace("Publico Text", "local('PublicoText-Roman'), url(https://cbsnews4.cbsistatic.com/fly/bundles/cbsnewscontent/fonts/PublicoText/PublicoText.woff2)", {
                style: "normal",
                weight: "400"
            });
            (!navigator.connection || "slow-2g" !== navigator.connection.effectiveType && "2g" !== navigator.connection.effectiveType) && Promise.all([t.load(), n.load(), e.load()]).then(function(e) {
                e.forEach(function(e) {
                    document.fonts.add(e)
                })
            })
        }
    });
var popup = document.querySelector(".popup-link");
popup && (popup.onclick = function(e) {
    e.preventDefault(), popupHandler(popup.href)
}), addParameterToURL = function(e, t) {
    return e += (e.split("?")[1] ? "&" : "?") + t
}, define("utils/popup-handler", function() {}), require(["main"]), void 0 === document.body.style.webkitLineClamp && require(["polyfill/lineclamp"]), require(["polyfill/objectfit"]), require(["common"]), require(["common/embed-events"]), require(["components/draggable-frame"]), require(["components/live-headline"]), require(["managers/scrolling-image-gallery"]), require(["managers/taboola-rem"]), require(["managers/font-loader"]), require(["utils/popup-handler"]), define("main.responsive", function() {});