// All code and conventions are protected by copyright
! function(e, t, n) {
    function i() {
        var e = D.filter(D.rules, function(e) {
            return 0 === e.event.indexOf("dataelementchange")
        });
        this.dataElementsNames = D.map(e, function(e) {
            return e.event.match(/dataelementchange\((.*)\)/i)[1]
        }, this), this.initPolling()
    }

    function a() {
        D.addEventHandler(e, "orientationchange", a.orientationChange)
    }

    function r() {
        this.defineEvents(), this.visibilityApiHasPriority = !0, t.addEventListener ? this.setVisibilityApiPriority(!1) : this.attachDetachOlderEventListeners(!0, t, "focusout");
        D.bindEvent("aftertoolinit", function() {
            D.fireEvent(D.visibility.isHidden() ? "tabblur" : "tabfocus")
        })
    }

    function s() {
        this.rules = D.filter(D.rules, function(e) {
            return "elementexists" === e.event
        })
    }

    function o() {
        this.rules = D.filter(D.rules, function(e) {
            return "videoplayed" === e.event.substring(0, 11)
        }), this.eventHandler = D.bind(this.onUpdateTime, this)
    }

    function l(t) {
        t = t || D.rules, this.rules = D.filter(t, function(e) {
            return "inview" === e.event
        }), this.elements = [], this.eventHandler = D.bind(this.track, this), D.addEventHandler(e, "scroll", this.eventHandler), D.addEventHandler(e, "load", this.eventHandler)
    }

    function c() {
        D.getToolsByType("nielsen").length > 0 && D.domReady(D.bind(this.initialize, this))
    }

    function u() {
        var e = this.eventRegex = /^hover\(([0-9]+)\)$/,
            t = this.rules = [];
        D.each(D.rules, function(n) {
            n.event.match(e) && t.push([Number(n.event.match(e)[1]), n.selector])
        })
    }

    function f(e) {
        this.delay = 250, this.FB = e, D.domReady(D.bind(function() {
            D.poll(D.bind(this.initialize, this), this.delay, 8)
        }, this))
    }

    function h(t) {
        D.domReady(D.bind(function() {
            this.twttr = t || e.twttr, this.initialize()
        }, this))
    }

    function g() {
        this.lastURL = D.URL(), this._fireIfURIChanged = D.bind(this.fireIfURIChanged, this), this._onPopState = D.bind(this.onPopState, this), this._onHashChange = D.bind(this.onHashChange, this), this._pushState = D.bind(this.pushState, this), this._replaceState = D.bind(this.replaceState, this), this.initialize()
    }

    function p(e) {
        D.BaseTool.call(this, e), this.defineListeners(), this.beaconMethod = "plainBeacon", this.adapt = new p.DataAdapters, this.dataProvider = new p.DataProvider.Aggregate
    }

    function v(e) {
        D.BaseTool.call(this, e), this.name = e.name || "VisitorID", this.initialize()
    }

    function m(e) {
        D.BaseTool.call(this, e), this.varBindings = {}, this.events = [], this.products = [], this.customSetupFuns = []
    }

    function y() {
        D.BaseTool.call(this), this.asyncScriptCallbackQueue = [], this.argsForBlockingScripts = []
    }

    function b(e) {
        D.BaseTool.call(this, e), this.styleElements = {}, this.targetPageParamsStore = {}
    }

    function k(e) {
        D.BaseTool.call(this, e), this.name = e.name || "Basic"
    }

    function V(e) {
        D.BaseTool.call(this, e)
    }

    function w(e) {
        D.BaseTool.call(this, e)
    }
    var T, S, E, P = Object.prototype.toString,
        C = e._satellite && e._satellite.override,
        D = {
            initialized: !1,
            $data: function(e, t, i) {
                if (e) {
                    var a = "__satellite__",
                        r = D.dataCache,
                        s = e[a];
                    s || (s = e[a] = D.uuid++);
                    var o = r[s];
                    if (o || (o = r[s] = {}), i === n) return o[t];
                    o[t] = i
                }
            },
            uuid: 1,
            dataCache: {},
            keys: function(e) {
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push(n);
                return t
            },
            values: function(e) {
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
                return t
            },
            isArray: Array.isArray || function(e) {
                return "[object Array]" === P.apply(e)
            },
            isObject: function(e) {
                return null != e && !D.isArray(e) && "object" == typeof e
            },
            isString: function(e) {
                return "string" == typeof e
            },
            isNumber: function(e) {
                return "[object Number]" === P.apply(e) && !D.isNaN(e)
            },
            isNaN: function(e) {
                return e != e
            },
            isRegex: function(e) {
                return e instanceof RegExp
            },
            isLinkTag: function(e) {
                return !(!e || !e.nodeName || "a" !== e.nodeName.toLowerCase())
            },
            each: function(e, t, n) {
                for (var i = 0, a = e.length; i < a; i++) t.call(n, e[i], i, e)
            },
            map: function(e, t, n) {
                for (var i = [], a = 0, r = e.length; a < r; a++) i.push(t.call(n, e[a], a, e));
                return i
            },
            filter: function(e, t, n) {
                for (var i = [], a = 0, r = e.length; a < r; a++) {
                    var s = e[a];
                    t.call(n, s, a, e) && i.push(s)
                }
                return i
            },
            any: function(e, t, n) {
                for (var i = 0, a = e.length; i < a; i++) {
                    var r = e[i];
                    if (t.call(n, r, i, e)) return !0
                }
                return !1
            },
            every: function(e, t, n) {
                for (var i = !0, a = 0, r = e.length; a < r; a++) {
                    var s = e[a];
                    i = i && t.call(n, s, a, e)
                }
                return i
            },
            contains: function(e, t) {
                return -1 !== D.indexOf(e, t)
            },
            indexOf: function(e, t) {
                if (e.indexOf) return e.indexOf(t);
                for (var n = e.length; n--;)
                    if (t === e[n]) return n;
                return -1
            },
            find: function(e, t, n) {
                if (!e) return null;
                for (var i = 0, a = e.length; i < a; i++) {
                    var r = e[i];
                    if (t.call(n, r, i, e)) return r
                }
                return null
            },
            textMatch: function(e, t) {
                if (null == t) throw new Error("Illegal Argument: Pattern is not present");
                return null != e && ("string" == typeof t ? e === t : t instanceof RegExp && t.test(e))
            },
            stringify: function(e, t) {
                if (t = t || [], D.isObject(e)) {
                    if (D.contains(t, e)) return "<Cycle>";
                    t.push(e)
                }
                if (D.isArray(e)) return "[" + D.map(e, function(e) {
                    return D.stringify(e, t)
                }).join(",") + "]";
                if (D.isString(e)) return '"' + String(e) + '"';
                if (D.isObject(e)) {
                    var n = [];
                    for (var i in e) e.hasOwnProperty(i) && n.push(i + ": " + D.stringify(e[i], t));
                    return "{" + n.join(", ") + "}"
                }
                return String(e)
            },
            trim: function(e) {
                return null == e ? null : e.trim ? e.trim() : e.replace(/^ */, "").replace(/ *$/, "")
            },
            bind: function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            throttle: function(e, t) {
                var n = null;
                return function() {
                    var i = this,
                        a = arguments;
                    clearTimeout(n), n = setTimeout(function() {
                        e.apply(i, a)
                    }, t)
                }
            },
            domReady: function(e) {
                function n(e) {
                    for (f = 1; e = a.shift();) e()
                }
                var i, a = [],
                    r = !1,
                    s = t,
                    o = s.documentElement,
                    l = o.doScroll,
                    c = "DOMContentLoaded",
                    u = "addEventListener",
                    d = "onreadystatechange",
                    f = /^loade|^c/.test(s.readyState);
                return s[u] && s[u](c, i = function() {
                    s.removeEventListener(c, i, r), n()
                }, r), l && s.attachEvent(d, i = function() {
                    /^c/.test(s.readyState) && (s.detachEvent(d, i), n())
                }), e = l ? function(t) {
                    self != top ? f ? t() : a.push(t) : function() {
                        try {
                            o.doScroll("left")
                        } catch (n) {
                            return setTimeout(function() {
                                e(t)
                            }, 50)
                        }
                        t()
                    }()
                } : function(e) {
                    f ? e() : a.push(e)
                }
            }(),
            loadScript: function(e, n) {
                var i = t.createElement("script");
                D.scriptOnLoad(e, i, n), i.src = e, t.getElementsByTagName("head")[0].appendChild(i)
            },
            scriptOnLoad: function(e, t, n) {
                function i(e) {
                    e && D.logError(e), n && n(e)
                }
                "onload" in t ? (t.onload = function() {
                    i()
                }, t.onerror = function() {
                    i(new Error("Failed to load script " + e))
                }) : "readyState" in t && (t.onreadystatechange = function() {
                    var e = t.readyState;
                    "loaded" !== e && "complete" !== e || (t.onreadystatechange = null, i())
                })
            },
            loadScriptOnce: function(e, t) {
                D.loadedScriptRegistry[e] || D.loadScript(e, function(n) {
                    n || (D.loadedScriptRegistry[e] = !0), t && t(n)
                })
            },
            loadedScriptRegistry: {},
            loadScriptSync: function(e) {
                t.write ? D.domReadyFired ? D.notify('Cannot load sync the "' + e + '" script after DOM Ready.', 1) : (e.indexOf('"') > -1 && (e = encodeURI(e)), t.write('<script src="' + e + '"></script>')) : D.notify('Cannot load sync the "' + e + '" script because "document.write" is not available', 1)
            },
            pushAsyncScript: function(e) {
                D.tools["default"].pushAsyncScript(e)
            },
            pushBlockingScript: function(e) {
                D.tools["default"].pushBlockingScript(e)
            },
            addEventHandler: e.addEventListener ? function(e, t, n) {
                e.addEventListener(t, n, !1)
            } : function(e, t, n) {
                e.attachEvent("on" + t, n)
            },
            removeEventHandler: e.removeEventListener ? function(e, t, n) {
                e.removeEventListener(t, n, !1)
            } : function(e, t, n) {
                e.detachEvent("on" + t, n)
            },
            preventDefault: e.addEventListener ? function(e) {
                e.preventDefault()
            } : function(e) {
                e.returnValue = !1
            },
            stopPropagation: function(e) {
                e.cancelBubble = !0, e.stopPropagation && e.stopPropagation()
            },
            containsElement: function(e, t) {
                return e.contains ? e.contains(t) : !!(16 & e.compareDocumentPosition(t))
            },
            matchesCss: function(n) {
                function i(e, t) {
                    var n = t.tagName;
                    return !!n && e.toLowerCase() === n.toLowerCase()
                }
                var a = n.matchesSelector || n.mozMatchesSelector || n.webkitMatchesSelector || n.oMatchesSelector || n.msMatchesSelector;
                return a ? function(n, i) {
                    if (i === t || i === e) return !1;
                    try {
                        return a.call(i, n)
                    } catch (r) {
                        return !1
                    }
                } : n.querySelectorAll ? function(e, t) {
                    if (!t.parentNode) return !1;
                    if (e.match(/^[a-z]+$/i)) return i(e, t);
                    try {
                        for (var n = t.parentNode.querySelectorAll(e), a = n.length; a--;)
                            if (n[a] === t) return !0
                    } catch (r) {}
                    return !1
                } : function(e, t) {
                    if (e.match(/^[a-z]+$/i)) return i(e, t);
                    try {
                        return D.Sizzle.matches(e, [t]).length > 0
                    } catch (n) {
                        return !1
                    }
                }
            }(t.documentElement),
            cssQuery: (T = t, T.querySelectorAll ? function(e, t) {
                var n;
                try {
                    n = T.querySelectorAll(e)
                } catch (i) {
                    n = []
                }
                t(n)
            } : function(e, t) {
                if (D.Sizzle) {
                    var n;
                    try {
                        n = D.Sizzle(e)
                    } catch (i) {
                        n = []
                    }
                    t(n)
                } else D.sizzleQueue.push([e, t])
            }),
            hasAttr: function(e, t) {
                return e.hasAttribute ? e.hasAttribute(t) : e[t] !== n
            },
            inherit: function(e, t) {
                var n = function() {};
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            },
            extend: function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            },
            toArray: function() {
                try {
                    var e = Array.prototype.slice;
                    return e.call(t.documentElement.childNodes, 0)[0].nodeType,
                        function(t) {
                            return e.call(t, 0)
                        }
                } catch (n) {
                    return function(e) {
                        for (var t = [], n = 0, i = e.length; n < i; n++) t.push(e[n]);
                        return t
                    }
                }
            }(),
            equalsIgnoreCase: function(e, t) {
                return null == e ? null == t : null != t && String(e).toLowerCase() === String(t).toLowerCase()
            },
            poll: function(e, t, n) {
                function i() {
                    D.isNumber(n) && a++ >= n || e() || setTimeout(i, t)
                }
                var a = 0;
                t = t || 1e3, i()
            },
            escapeForHtml: function(e) {
                return e ? String(e).replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#x27;").replace(/\//g, "&#x2F;") : e
            }
        };
    D.availableTools = {}, D.availableEventEmitters = [], D.fireOnceEvents = ["condition", "elementexists"], D.initEventEmitters = function() {
        D.eventEmitters = D.map(D.availableEventEmitters, function(e) {
            return new e
        })
    }, D.eventEmitterBackgroundTasks = function() {
        D.each(D.eventEmitters, function(e) {
            "backgroundTasks" in e && e.backgroundTasks()
        })
    }, D.initTools = function(e) {
        var t = {
                "default": new y
            },
            n = D.settings.euCookieName || "sat_track";
        for (var i in e)
            if (e.hasOwnProperty(i)) {
                var a, r, s;
                if ((a = e[i]).euCookie)
                    if ("true" !== D.readCookie(n)) continue;
                if (!(r = D.availableTools[a.engine])) {
                    var o = [];
                    for (var l in D.availableTools) D.availableTools.hasOwnProperty(l) && o.push(l);
                    throw new Error("No tool engine named " + a.engine + ", available: " + o.join(",") + ".")
                }(s = new r(a)).id = i, t[i] = s
            } return t
    }, D.preprocessArguments = function(e, t, n, i, a) {
        function r(e) {
            return i && D.isString(e) ? e.toLowerCase() : e
        }

        function s(e) {
            var l = {};
            for (var c in e)
                if (e.hasOwnProperty(c)) {
                    var u = e[c];
                    D.isObject(u) ? l[c] = s(u) : D.isArray(u) ? l[c] = o(u, i) : l[c] = r(D.replace(u, t, n, a))
                } return l
        }

        function o(e) {
            for (var i = [], a = 0, o = e.length; a < o; a++) {
                var l = e[a];
                D.isString(l) ? l = r(D.replace(l, t, n)) : l && l.constructor === Object && (l = s(l)), i.push(l)
            }
            return i
        }
        return e ? o(e, i) : e
    }, D.execute = function(e, t, n, i) {
        function a(a) {
            var r = i[a || "default"];
            if (r) try {
                r.triggerCommand(e, t, n)
            } catch (s) {
                D.logError(s)
            }
        }
        if (!_satellite.settings.hideActivity)
            if (i = i || D.tools, e.engine) {
                var r = e.engine;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var o = i[s];
                        o.settings && o.settings.engine === r && a(s)
                    }
            } else e.tool instanceof Array ? D.each(e.tool, function(e) {
                a(e)
            }) : a(e.tool)
    }, D.Logger = {
        outputEnabled: !1,
        messages: [],
        keepLimit: 100,
        flushed: !1,
        LEVELS: [null, null, "log", "info", "warn", "error"],
        message: function(e, t) {
            var n = this.LEVELS[t] || "log";
            this.messages.push([n, e]), this.messages.length > this.keepLimit && this.messages.shift(), this.outputEnabled && this.echo(n, e)
        },
        getHistory: function() {
            return this.messages
        },
        clearHistory: function() {
            this.messages = []
        },
        setOutputState: function(e) {
            this.outputEnabled != e && (this.outputEnabled = e, e ? this.flush() : this.flushed = !1)
        },
        echo: function(t, n) {
            e.console && e.console[t]("SATELLITE: " + n)
        },
        flush: function() {
            this.flushed || (D.each(this.messages, function(e) {
                !0 !== e[2] && (this.echo(e[0], e[1]), e[2] = !0)
            }, this), this.flushed = !0)
        }
    }, D.notify = D.bind(D.Logger.message, D.Logger), D.cleanText = function(e) {
        return null == e ? null : D.trim(e).replace(/\s+/g, " ")
    }, D.cleanText.legacy = function(e) {
        return null == e ? null : D.trim(e).replace(/\s{2,}/g, " ").replace(/[^\000-\177]*/g, "")
    }, D.text = function(e) {
        return e.textContent || e.innerText
    }, D.specialProperties = {
        text: D.text,
        cleanText: function(e) {
            return D.cleanText(D.text(e))
        }
    }, D.getObjectProperty = function(e, t, i) {
        for (var a, r = t.split("."), s = e, o = D.specialProperties, l = 0, c = r.length; l < c; l++) {
            if (null == s) return n;
            var u = r[l];
            if (i && "@" === u.charAt(0)) s = o[u.slice(1)](s);
            else if (s.getAttribute && (a = u.match(/^getAttribute\((.+)\)$/))) {
                var d = a[1];
                s = s.getAttribute(d)
            } else s = s[u]
        }
        return s
    }, D.getToolsByType = function(e) {
        if (!e) throw new Error("Tool type is missing");
        var t = [];
        for (var n in D.tools)
            if (D.tools.hasOwnProperty(n)) {
                var i = D.tools[n];
                i.settings && i.settings.engine === e && t.push(i)
            } return t
    }, D.setVar = function() {
        var e = D.data.customVars;
        if (null == e && (D.data.customVars = {}, e = D.data.customVars), "string" == typeof arguments[0]) e[arguments[0]] = arguments[1];
        else if (arguments[0]) {
            var t = arguments[0];
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }
    }, D.dataElementSafe = function(e, t) {
        if (arguments.length > 2) {
            var n = arguments[2];
            "pageview" === t ? D.dataElementSafe.pageviewCache[e] = n : "session" === t ? D.setCookie("_sdsat_" + e, n) : "visitor" === t && D.setCookie("_sdsat_" + e, n, 730)
        } else {
            if ("pageview" === t) return D.dataElementSafe.pageviewCache[e];
            if ("session" === t || "visitor" === t) return D.readCookie("_sdsat_" + e)
        }
    }, D.dataElementSafe.pageviewCache = {}, D.realGetDataElement = function(t) {
        var n;
        return t.selector ? D.hasSelector && D.cssQuery(t.selector, function(e) {
            if (e.length > 0) {
                var i = e[0];
                "text" === t.property ? n = i.innerText || i.textContent : t.property in i ? n = i[t.property] : D.hasAttr(i, t.property) && (n = i.getAttribute(t.property))
            }
        }) : t.queryParam ? n = t.ignoreCase ? D.getQueryParamCaseInsensitive(t.queryParam) : D.getQueryParam(t.queryParam) : t.cookie ? n = D.readCookie(t.cookie) : t.jsVariable ? n = D.getObjectProperty(e, t.jsVariable) : t.customJS ? n = t.customJS() : t.contextHub && (n = t.contextHub()), D.isString(n) && t.cleanText && (n = D.cleanText(n)), n
    }, D.getDataElement = function(e, t, i) {
        if (null == (i = i || D.dataElements[e])) return D.settings.undefinedVarsReturnEmpty ? "" : null;
        var a = D.realGetDataElement(i);
        return a === n && i.storeLength ? a = D.dataElementSafe(e, i.storeLength) : a !== n && i.storeLength && D.dataElementSafe(e, i.storeLength, a), a || t || (a = i["default"] || ""), D.isString(a) && i.forceLowerCase && (a = a.toLowerCase()), a
    }, D.getVar = function(i, a, r) {
        var s, o, l = D.data.customVars,
            c = r ? r.target || r.srcElement : null,
            u = {
                uri: D.URI(),
                protocol: t.location.protocol,
                hostname: t.location.hostname
            };
        if (D.dataElements && i in D.dataElements) return D.getDataElement(i);
        if ((o = u[i.toLowerCase()]) === n)
            if ("this." === i.substring(0, 5)) i = i.slice(5), o = D.getObjectProperty(a, i, !0);
            else if ("event." === i.substring(0, 6)) i = i.slice(6), o = D.getObjectProperty(r, i);
        else if ("target." === i.substring(0, 7)) i = i.slice(7), o = D.getObjectProperty(c, i);
        else if ("window." === i.substring(0, 7)) i = i.slice(7), o = D.getObjectProperty(e, i);
        else if ("param." === i.substring(0, 6)) i = i.slice(6), o = D.getQueryParam(i);
        else if (s = i.match(/^rand([0-9]+)$/)) {
            var d = Number(s[1]),
                f = (Math.random() * (Math.pow(10, d) - 1)).toFixed(0);
            o = Array(d - f.length + 1).join("0") + f
        } else o = D.getObjectProperty(l, i);
        return o
    }, D.getVars = function(e, t, n) {
        var i = {};
        return D.each(e, function(e) {
            i[e] = D.getVar(e, t, n)
        }), i
    }, D.replace = function(e, t, n, i) {
        return "string" != typeof e ? e : e.replace(/%(.*?)%/g, function(e, a) {
            var r = D.getVar(a, t, n);
            return null == r ? D.settings.undefinedVarsReturnEmpty ? "" : e : i ? D.escapeForHtml(r) : r
        })
    }, D.escapeHtmlParams = function(e) {
        return e.escapeHtml = !0, e
    }, D.searchVariables = function(e, t, n) {
        if (!e || 0 === e.length) return "";
        for (var i = [], a = 0, r = e.length; a < r; a++) {
            var s = e[a],
                o = D.getVar(s, t, n);
            i.push(s + "=" + escape(o))
        }
        return "?" + i.join("&")
    }, D.fireRule = function(e, t, n) {
        var i = e.trigger;
        if (i) {
            for (var a = 0, r = i.length; a < r; a++) {
                var s = i[a];
                D.execute(s, t, n)
            }
            D.contains(D.fireOnceEvents, e.event) && (e.expired = !0)
        }
    }, D.isLinked = function(e) {
        for (var t = e; t; t = t.parentNode)
            if (D.isLinkTag(t)) return !0;
        return !1
    }, D.firePageLoadEvent = function(e) {
        for (var n = t.location, i = {
                type: e,
                target: n
            }, a = D.pageLoadRules, r = D.evtHandlers[i.type], s = a.length; s--;) {
            var o = a[s];
            D.ruleMatches(o, i, n) && (D.notify('Rule "' + o.name + '" fired.', 1), D.fireRule(o, n, i))
        }
        for (var l in D.tools)
            if (D.tools.hasOwnProperty(l)) {
                var c = D.tools[l];
                c.endPLPhase && c.endPLPhase(e)
            } r && D.each(r, function(e) {
            e(i)
        })
    }, D.track = function(e) {
        e = e.replace(/^\s*/, "").replace(/\s*$/, "");
        for (var t = 0; t < D.directCallRules.length; t++) {
            var n = D.directCallRules[t];
            if (n.name === e) return D.notify('Direct call Rule "' + e + '" fired.', 1), void D.fireRule(n, location, {
                type: e
            })
        }
        D.notify('Direct call Rule "' + e + '" not found.', 1)
    }, D.basePath = function() {
        return D.data.host ? ("https:" === t.location.protocol ? "https://" + D.data.host.https : "http://" + D.data.host.http) + "/" : this.settings.basePath
    }, D.setLocation = function(t) {
        e.location = t
    }, D.parseQueryParams = function(e) {
        var t = function(e) {
            var t = e;
            try {
                t = decodeURIComponent(e)
            } catch (n) {}
            return t
        };
        if ("" === e || !1 === D.isString(e)) return {};
        0 === e.indexOf("?") && (e = e.substring(1));
        var n = {},
            i = e.split("&");
        return D.each(i, function(e) {
            (e = e.split("="))[1] && (n[t(e[0])] = t(e[1]))
        }), n
    }, D.getCaseSensitivityQueryParamsMap = function(e) {
        var t = D.parseQueryParams(e),
            n = {};
        for (var i in t) t.hasOwnProperty(i) && (n[i.toLowerCase()] = t[i]);
        return {
            normal: t,
            caseInsensitive: n
        }
    }, D.updateQueryParams = function() {
        D.QueryParams = D.getCaseSensitivityQueryParamsMap(e.location.search)
    }, D.updateQueryParams(), D.getQueryParam = function(e) {
        return D.QueryParams.normal[e]
    }, D.getQueryParamCaseInsensitive = function(e) {
        return D.QueryParams.caseInsensitive[e.toLowerCase()]
    }, D.encodeObjectToURI = function(e) {
        if (!1 === D.isObject(e)) return "";
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }, D.readCookie = function(e) {
        for (var i = e + "=", a = t.cookie.split(";"), r = 0; r < a.length; r++) {
            for (var s = a[r];
                " " == s.charAt(0);) s = s.substring(1, s.length);
            if (0 === s.indexOf(i)) return s.substring(i.length, s.length)
        }
        return n
    }, D.setCookie = function(e, n, i) {
        var a;
        if (i) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * i * 60 * 60 * 1e3), a = "; expires=" + r.toGMTString()
        } else a = "";
        t.cookie = e + "=" + n + a + "; path=/"
    }, D.removeCookie = function(e) {
        D.setCookie(e, "", -1)
    }, D.getElementProperty = function(e, t) {
        if ("@" === t.charAt(0)) {
            var i = D.specialProperties[t.substring(1)];
            if (i) return i(e)
        }
        return "innerText" === t ? D.text(e) : t in e ? e[t] : e.getAttribute ? e.getAttribute(t) : n
    }, D.propertiesMatch = function(e, t) {
        if (e)
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var i = e[n],
                        a = D.getElementProperty(t, n);
                    if ("string" == typeof i && i !== a) return !1;
                    if (i instanceof RegExp && !i.test(a)) return !1
                } return !0
    }, D.isRightClick = function(e) {
        var t;
        return e.which ? t = 3 == e.which : e.button && (t = 2 == e.button), t
    }, D.ruleMatches = function(e, t, n, i) {
        var a = e.condition,
            r = e.conditions,
            s = e.property,
            o = t.type,
            l = e.value,
            c = t.target || t.srcElement,
            u = n === c;
        if (e.event !== o && ("custom" !== e.event || e.customEvent !== o)) return !1;
        if (!D.ruleInScope(e)) return !1;
        if ("click" === e.event && D.isRightClick(t)) return !1;
        if (e.isDefault && i > 0) return !1;
        if (e.expired) return !1;
        if ("inview" === o && t.inviewDelay !== e.inviewDelay) return !1;
        if (!u && (!1 === e.bubbleFireIfParent || 0 !== i && !1 === e.bubbleFireIfChildFired)) return !1;
        if (e.selector && !D.matchesCss(e.selector, n)) return !1;
        if (!D.propertiesMatch(s, n)) return !1;
        if (null != l)
            if ("string" == typeof l) {
                if (l !== n.value) return !1
            } else if (!l.test(n.value)) return !1;
        if (a) try {
            if (!a.call(n, t, c)) return D.notify('Condition for rule "' + e.name + '" not met.', 1), !1
        } catch (f) {
            return D.notify('Condition for rule "' + e.name + '" not met. Error: ' + f.message, 1), !1
        }
        if (r) {
            var d = D.find(r, function(i) {
                try {
                    return !i.call(n, t, c)
                } catch (f) {
                    return D.notify('Condition for rule "' + e.name + '" not met. Error: ' + f.message, 1), !0
                }
            });
            if (d) return D.notify("Condition " + d.toString() + ' for rule "' + e.name + '" not met.', 1), !1
        }
        return !0
    }, D.evtHandlers = {}, D.bindEvent = function(e, t) {
        var n = D.evtHandlers;
        n[e] || (n[e] = []), n[e].push(t)
    }, D.whenEvent = D.bindEvent, D.unbindEvent = function(e, t) {
        var n = D.evtHandlers;
        if (n[e]) {
            var i = D.indexOf(n[e], t);
            n[e].splice(i, 1)
        }
    }, D.bindEventOnce = function(e, t) {
        var n = function() {
            D.unbindEvent(e, n), t.apply(null, arguments)
        };
        D.bindEvent(e, n)
    }, D.isVMLPoisoned = function(e) {
        if (!e) return !1;
        try {
            e.nodeName
        } catch (t) {
            if ("Attribute only valid on v:image" === t.message) return !0
        }
        return !1
    }, D.handleEvent = function(e) {
        if (!D.$data(e, "eventProcessed")) {
            var t = e.type.toLowerCase(),
                n = e.target || e.srcElement,
                i = 0,
                a = D.rules,
                r = (D.tools, D.evtHandlers[e.type]);
            if (D.isVMLPoisoned(n)) D.notify("detected " + t + " on poisoned VML element, skipping.", 1);
            else {
                r && D.each(r, function(t) {
                    t(e)
                }), n && n.nodeName ? D.notify("detected " + t + " on " + n.nodeName, 1) : D.notify("detected " + t, 1);
                for (var s = n; s; s = s.parentNode) {
                    var o = !1;
                    if (D.each(a, function(t) {
                            D.ruleMatches(t, e, s, i) && (D.notify('Rule "' + t.name + '" fired.', 1), D.fireRule(t, s, e), i++, t.bubbleStop && (o = !0))
                        }), o) break
                }
                D.$data(e, "eventProcessed", !0)
            }
        }
    }, D.onEvent = t.querySelectorAll ? function(e) {
        D.handleEvent(e)
    } : (S = [], (E = function(e) {
        e.selector ? S.push(e) : D.handleEvent(e)
    }).pendingEvents = S, E), D.fireEvent = function(e, t) {
        D.onEvent({
            type: e,
            target: t
        })
    }, D.registerEvents = function(e, t) {
        for (var n = t.length - 1; n >= 0; n--) {
            var i = t[n];
            D.$data(e, i + ".tracked") || (D.addEventHandler(e, i, D.onEvent), D.$data(e, i + ".tracked", !0))
        }
    }, D.registerEventsForTags = function(e, n) {
        for (var i = e.length - 1; i >= 0; i--)
            for (var a = e[i], r = t.getElementsByTagName(a), s = r.length - 1; s >= 0; s--) D.registerEvents(r[s], n)
    }, D.setListeners = function() {
        var e = ["click", "submit"];
        D.each(D.rules, function(t) {
            "custom" === t.event && t.hasOwnProperty("customEvent") && !D.contains(e, t.customEvent) && e.push(t.customEvent)
        }), D.registerEvents(t, e)
    }, D.getUniqueRuleEvents = function() {
        return D._uniqueRuleEvents || (D._uniqueRuleEvents = [], D.each(D.rules, function(e) {
            -1 === D.indexOf(D._uniqueRuleEvents, e.event) && D._uniqueRuleEvents.push(e.event)
        })), D._uniqueRuleEvents
    }, D.setFormListeners = function() {
        if (!D._relevantFormEvents) {
            var e = ["change", "focus", "blur", "keypress"];
            D._relevantFormEvents = D.filter(D.getUniqueRuleEvents(), function(t) {
                return -1 !== D.indexOf(e, t)
            })
        }
        D._relevantFormEvents.length && D.registerEventsForTags(["input", "select", "textarea", "button"], D._relevantFormEvents)
    }, D.setVideoListeners = function() {
        if (!D._relevantVideoEvents) {
            var e = ["play", "pause", "ended", "volumechange", "stalled", "loadeddata"];
            D._relevantVideoEvents = D.filter(D.getUniqueRuleEvents(), function(t) {
                return -1 !== D.indexOf(e, t)
            })
        }
        D._relevantVideoEvents.length && D.registerEventsForTags(["video"], D._relevantVideoEvents)
    }, D.readStoredSetting = function(t) {
        try {
            return t = "sdsat_" + t, e.localStorage.getItem(t)
        } catch (n) {
            return D.notify("Cannot read stored setting from localStorage: " + n.message, 2), null
        }
    }, D.loadStoredSettings = function() {
        var e = D.readStoredSetting("debug"),
            t = D.readStoredSetting("hide_activity");
        e && (D.settings.notifications = "true" === e), t && (D.settings.hideActivity = "true" === t)
    }, D.isRuleActive = function(e, t) {
        function n(e, t) {
            return t = a(t, {
                hour: e[h](),
                minute: e[g]()
            }), Math.floor(Math.abs((e.getTime() - t.getTime()) / 864e5))
        }

        function i(e, t) {
            function n(e) {
                return 12 * e[d]() + e[f]()
            }
            return Math.abs(n(e) - n(t))
        }

        function a(e, t) {
            var n = new Date(e.getTime());
            for (var i in t)
                if (t.hasOwnProperty(i)) {
                    var a = t[i];
                    switch (i) {
                        case "hour":
                            n[p](a);
                            break;
                        case "minute":
                            n[v](a);
                            break;
                        case "date":
                            n[m](a)
                    }
                } return n
        }

        function r(e, t) {
            return 60 * e[h]() + e[g]() > 60 * t[h]() + t[g]()
        }

        function s(e, t) {
            return 60 * e[h]() + e[g]() < 60 * t[h]() + t[g]()
        }
        var o = e.schedule;
        if (!o) return !0;
        var l = o.utc,
            c = l ? "getUTCDate" : "getDate",
            u = l ? "getUTCDay" : "getDay",
            d = l ? "getUTCFullYear" : "getFullYear",
            f = l ? "getUTCMonth" : "getMonth",
            h = l ? "getUTCHours" : "getHours",
            g = l ? "getUTCMinutes" : "getMinutes",
            p = l ? "setUTCHours" : "setHours",
            v = l ? "setUTCMinutes" : "setMinutes",
            m = l ? "setUTCDate" : "setDate";
        if (t = t || new Date, o.repeat) {
            if (r(o.start, t)) return !1;
            if (s(o.end, t)) return !1;
            if (t < o.start) return !1;
            if (o.endRepeat && t >= o.endRepeat) return !1;
            if ("daily" === o.repeat) {
                if (o.repeatEvery)
                    if (n(o.start, t) % o.repeatEvery != 0) return !1
            } else if ("weekly" === o.repeat) {
                if (o.days) {
                    if (!D.contains(o.days, t[u]())) return !1
                } else if (o.start[u]() !== t[u]()) return !1;
                if (o.repeatEvery)
                    if (n(o.start, t) % (7 * o.repeatEvery) != 0) return !1
            } else if ("monthly" === o.repeat) {
                if (o.repeatEvery)
                    if (i(o.start, t) % o.repeatEvery != 0) return !1;
                if (o.nthWeek && o.mthDay) {
                    if (o.mthDay !== t[u]()) return !1;
                    var y = Math.floor((t[c]() - t[u]() + 1) / 7);
                    if (o.nthWeek !== y) return !1
                } else if (o.start[c]() !== t[c]()) return !1
            } else if ("yearly" === o.repeat) {
                if (o.start[f]() !== t[f]()) return !1;
                if (o.start[c]() !== t[c]()) return !1;
                if (o.repeatEvery)
                    if (Math.abs(o.start[d]() - t[d]()) % o.repeatEvery != 0) return !1
            }
        } else {
            if (o.start > t) return !1;
            if (o.end < t) return !1
        }
        return !0
    }, D.isOutboundLink = function(e) {
        if (!e.getAttribute("href")) return !1;
        var t = e.hostname,
            n = (e.href, e.protocol);
        return ("http:" === n || "https:" === n) && (!D.any(D.settings.domainList, function(e) {
            return D.isSubdomainOf(t, e)
        }) && t !== location.hostname)
    }, D.isLinkerLink = function(e) {
        return !(!e.getAttribute || !e.getAttribute("href")) && (D.hasMultipleDomains() && e.hostname != location.hostname && !e.href.match(/^javascript/i) && !D.isOutboundLink(e))
    }, D.isSubdomainOf = function(e, t) {
        if (e === t) return !0;
        var n = e.length - t.length;
        return n > 0 && D.equalsIgnoreCase(e.substring(n), t)
    }, D.getVisitorId = function() {
        var e = D.getToolsByType("visitor_id");
        return 0 === e.length ? null : e[0].getInstance()
    }, D.URI = function() {
        var e = t.location.pathname + t.location.search;
        return D.settings.forceLowerCase && (e = e.toLowerCase()), e
    }, D.URL = function() {
        var e = t.location.href;
        return D.settings.forceLowerCase && (e = e.toLowerCase()), e
    }, D.filterRules = function() {
        function e(e) {
            return !!D.isRuleActive(e)
        }
        D.rules = D.filter(D.rules, e), D.pageLoadRules = D.filter(D.pageLoadRules, e)
    }, D.ruleInScope = function(e, n) {
        function i(e, t) {
            function n(e) {
                return t.match(e)
            }
            var i = e.include,
                r = e.exclude;
            if (i && a(i, t)) return !0;
            if (r) {
                if (D.isString(r) && r === t) return !0;
                if (D.isArray(r) && D.any(r, n)) return !0;
                if (D.isRegex(r) && n(r)) return !0
            }
            return !1
        }

        function a(e, t) {
            function n(e) {
                return t.match(e)
            }
            return !(!D.isString(e) || e === t) || (!(!D.isArray(e) || D.any(e, n)) || !(!D.isRegex(e) || n(e)))
        }
        n = n || t.location;
        var r = e.scope;
        if (!r) return !0;
        var s = r.URI,
            o = r.subdomains,
            l = r.domains,
            c = r.protocols,
            u = r.hashes;
        return (!s || !i(s, n.pathname + n.search)) && ((!o || !i(o, n.hostname)) && ((!l || !a(l, n.hostname)) && ((!c || !a(c, n.protocol)) && (!u || !i(u, n.hash)))))
    }, D.backgroundTasks = function() {
        new Date;
        D.setFormListeners(), D.setVideoListeners(), D.loadStoredSettings(), D.registerNewElementsForDynamicRules(), D.eventEmitterBackgroundTasks();
        new Date
    }, D.registerNewElementsForDynamicRules = function() {
        function e(t, n) {
            var i = e.cache[t];
            if (i) return n(i);
            D.cssQuery(t, function(i) {
                e.cache[t] = i, n(i)
            })
        }
        e.cache = {}, D.each(D.dynamicRules, function(t) {
            e(t.selector, function(e) {
                D.each(e, function(e) {
                    var n = "custom" === t.event ? t.customEvent : t.event;
                    D.$data(e, "dynamicRules.seen." + n) || (D.$data(e, "dynamicRules.seen." + n, !0), D.propertiesMatch(t.property, e) && D.registerEvents(e, [n]))
                })
            })
        })
    }, D.ensureCSSSelector = function() {
        t.querySelectorAll ? D.hasSelector = !0 : (D.loadingSizzle = !0, D.sizzleQueue = [], D.loadScript(D.basePath() + "selector.js", function() {
            if (D.Sizzle) {
                var e = D.onEvent.pendingEvents;
                D.each(e, function(e) {
                    D.handleEvent(e)
                }, this), D.onEvent = D.handleEvent, D.hasSelector = !0, delete D.loadingSizzle, D.each(D.sizzleQueue, function(e) {
                    D.cssQuery(e[0], e[1])
                }), delete D.sizzleQueue
            } else D.logError(new Error("Failed to load selector.js"))
        }))
    }, D.errors = [], D.logError = function(e) {
        D.errors.push(e), D.notify(e.name + " - " + e.message, 5)
    }, D.pageBottom = function() {
        D.initialized && (D.pageBottomFired = !0, D.firePageLoadEvent("pagebottom"))
    }, D.stagingLibraryOverride = function() {
        if ("true" === D.readStoredSetting("stagingLibrary")) {
            for (var e, n, i, a = t.getElementsByTagName("script"), r = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/, s = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/, o = 0, l = a.length; o < l && (!(i = a[o].getAttribute("src")) || (e || (e = i.match(r)), n || (n = i.match(s)), !n)); o++);
            if (e && !n) {
                var c = e[1] + "satelliteLib-" + e[2] + "-staging.js";
                if (t.write) t.write('<script src="' + c + '"></script>');
                else {
                    var u = t.createElement("script");
                    u.src = c, t.head.appendChild(u)
                }
                return !0
            }
        }
        return !1
    }, D.checkAsyncInclude = function() {
        e.satellite_asyncLoad && D.notify('You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.', 5)
    }, D.hasMultipleDomains = function() {
        return !!D.settings.domainList && D.settings.domainList.length > 1
    }, D.handleOverrides = function() {
        if (C)
            for (var e in C) C.hasOwnProperty(e) && (D.data[e] = C[e])
    }, D.privacyManagerParams = function() {
        var e = {};
        D.extend(e, D.settings.privacyManagement);
        var t = [];
        for (var n in D.tools)
            if (D.tools.hasOwnProperty(n)) {
                var i = D.tools[n],
                    a = i.settings;
                if (!a) continue;
                "sc" === a.engine && t.push(i)
            } var r = D.filter(D.map(t, function(e) {
            return e.getTrackingServer()
        }), function(e) {
            return null != e
        });
        e.adobeAnalyticsTrackingServers = r;
        for (var s = ["bannerText", "headline", "introductoryText", "customCSS"], o = 0; o < s.length; o++) {
            var l = s[o],
                c = e[l];
            if (c)
                if ("text" === c.type) e[l] = c.value;
                else {
                    if ("data" !== c.type) throw new Error("Invalid type: " + c.type);
                    e[l] = D.getVar(c.value)
                }
        }
        return e
    }, D.prepareLoadPrivacyManager = function() {
        function t(e) {
            function t() {
                ++r === a.length && (n(), clearTimeout(s), e())
            }

            function n() {
                D.each(a, function(e) {
                    D.unbindEvent(e.id + ".load", t)
                })
            }

            function i() {
                n(), e()
            }
            var a = D.filter(D.values(D.tools), function(e) {
                return e.settings && "sc" === e.settings.engine
            });
            if (0 === a.length) return e();
            var r = 0;
            D.each(a, function(e) {
                D.bindEvent(e.id + ".load", t)
            });
            var s = setTimeout(i, 5e3)
        }
        D.addEventHandler(e, "load", function() {
            t(D.loadPrivacyManager)
        })
    }, D.loadPrivacyManager = function() {
        var e = D.basePath() + "privacy_manager.js";
        D.loadScript(e, function() {
            var e = D.privacyManager;
            e.configure(D.privacyManagerParams()), e.openIfRequired()
        })
    }, D.init = function(t) {
        if (!D.stagingLibraryOverride()) {
            D.configurationSettings = t;
            var i = t.tools;
            for (var a in delete t.tools, t) t.hasOwnProperty(a) && (D[a] = t[a]);
            D.data.customVars === n && (D.data.customVars = {}), D.data.queryParams = D.QueryParams.normal, D.handleOverrides(), D.detectBrowserInfo(), D.trackVisitorInfo && D.trackVisitorInfo(), D.loadStoredSettings(), D.Logger.setOutputState(D.settings.notifications), D.checkAsyncInclude(), D.ensureCSSSelector(), D.filterRules(), D.dynamicRules = D.filter(D.rules, function(e) {
                return e.eventHandlerOnElement
            }), D.tools = D.initTools(i), D.initEventEmitters(), D.firePageLoadEvent("aftertoolinit"), D.settings.privacyManagement && D.prepareLoadPrivacyManager(), D.hasSelector && D.domReady(D.eventEmitterBackgroundTasks), D.setListeners(), D.domReady(function() {
                D.poll(function() {
                    D.backgroundTasks()
                }, D.settings.recheckEvery || 3e3)
            }), D.domReady(function() {
                D.domReadyFired = !0, D.pageBottomFired || D.pageBottom(), D.firePageLoadEvent("domready")
            }), D.addEventHandler(e, "load", function() {
                D.firePageLoadEvent("windowload")
            }), D.firePageLoadEvent("pagetop"), D.initialized = !0
        }
    }, D.pageLoadPhases = ["aftertoolinit", "pagetop", "pagebottom", "domready", "windowload"], D.loadEventBefore = function(e, t) {
        return D.indexOf(D.pageLoadPhases, e) <= D.indexOf(D.pageLoadPhases, t)
    }, D.flushPendingCalls = function(e) {
        e.pending && (D.each(e.pending, function(t) {
            var n = t[0],
                i = t[1],
                a = t[2],
                r = t[3];
            n in e ? e[n].apply(e, [i, a].concat(r)) : e.emit ? e.emit(n, i, a, r) : D.notify("Failed to trigger " + n + " for tool " + e.id, 1)
        }), delete e.pending)
    }, D.setDebug = function(t) {
        try {
            e.localStorage.setItem("sdsat_debug", t)
        } catch (n) {
            D.notify("Cannot set debug mode: " + n.message, 2)
        }
    }, D.getUserAgent = function() {
        return navigator.userAgent
    }, D.detectBrowserInfo = function() {
        function e(e) {
            return function(t) {
                for (var n in e) {
                    if (e.hasOwnProperty(n))
                        if (e[n].test(t)) return n
                }
                return "Unknown"
            }
        }
        var t = e({
                "IE Edge Mobile": /Windows Phone.*Edge/,
                "IE Edge": /Edge/,
                OmniWeb: /OmniWeb/,
                "Opera Mini": /Opera Mini/,
                "Opera Mobile": /Opera Mobi/,
                Opera: /Opera/,
                Chrome: /Chrome|CriOS|CrMo/,
                Firefox: /Firefox|FxiOS/,
                "IE Mobile": /IEMobile/,
                IE: /MSIE|Trident/,
                "Mobile Safari": /Mobile(\/[0-9A-z]+)? Safari/,
                Safari: /Safari/
            }),
            n = e({
                Blackberry: /BlackBerry|BB10/,
                "Symbian OS": /Symbian|SymbOS/,
                Maemo: /Maemo/,
                Android: /Android/,
                Linux: / Linux /,
                Unix: /FreeBSD|OpenBSD|CrOS/,
                Windows: /[\( ]Windows /,
                iOS: /iPhone|iPad|iPod/,
                MacOS: /Macintosh;/
            }),
            i = e({
                Nokia: /Symbian|SymbOS|Maemo/,
                "Windows Phone": /Windows Phone/,
                Blackberry: /BlackBerry|BB10/,
                Android: /Android/,
                iPad: /iPad/,
                iPod: /iPod/,
                iPhone: /iPhone/,
                Desktop: /.*/
            }),
            a = D.getUserAgent();
        D.browserInfo = {
            browser: t(a),
            os: n(a),
            deviceType: i(a)
        }
    }, D.isHttps = function() {
        return "https:" == t.location.protocol
    }, D.BaseTool = function(e) {
        this.settings = e || {}, this.forceLowerCase = D.settings.forceLowerCase, "forceLowerCase" in this.settings && (this.forceLowerCase = this.settings.forceLowerCase)
    }, D.BaseTool.prototype = {
        triggerCommand: function(e, t, n) {
            var i = this.settings || {};
            if (this.initialize && this.isQueueAvailable() && this.isQueueable(e) && n && D.loadEventBefore(n.type, i.loadOn)) this.queueCommand(e, t, n);
            else {
                var a = e.command,
                    r = this["$" + a],
                    s = !!r && r.escapeHtml,
                    o = D.preprocessArguments(e.arguments, t, n, this.forceLowerCase, s);
                r ? r.apply(this, [t, n].concat(o)) : this.$missing$ ? this.$missing$(a, t, n, o) : D.notify("Failed to trigger " + a + " for tool " + this.id, 1)
            }
        },
        endPLPhase: function() {},
        isQueueable: function(e) {
            return "cancelToolInit" !== e.command
        },
        isQueueAvailable: function() {
            return !this.initialized && !this.initializing
        },
        flushQueue: function() {
            this.pending && (D.each(this.pending, function(e) {
                this.triggerCommand.apply(this, e)
            }, this), this.pending = [])
        },
        queueCommand: function(e, t, n) {
            this.pending || (this.pending = []), this.pending.push([e, t, n])
        },
        $cancelToolInit: function() {
            this._cancelToolInit = !0
        }
    }, e._satellite = D, i.prototype.getStringifiedValue = e.JSON && e.JSON.stringify || D.stringify, i.prototype.initPolling = function() {
        0 !== this.dataElementsNames.length && (this.dataElementsStore = this.getDataElementsValues(), D.poll(D.bind(this.checkDataElementValues, this), 1e3))
    }, i.prototype.getDataElementsValues = function() {
        var e = {};
        return D.each(this.dataElementsNames, function(t) {
            var n = D.getVar(t);
            e[t] = this.getStringifiedValue(n)
        }, this), e
    }, i.prototype.checkDataElementValues = function() {
        D.each(this.dataElementsNames, D.bind(function(e) {
            var n = this.getStringifiedValue(D.getVar(e));
            n !== this.dataElementsStore[e] && (this.dataElementsStore[e] = n, D.onEvent({
                type: "dataelementchange(" + e + ")",
                target: t
            }))
        }, this))
    }, D.availableEventEmitters.push(i), a.orientationChange = function(t) {
        var n = 0 === e.orientation ? "portrait" : "landscape";
        t.orientation = n, D.onEvent(t)
    }, D.availableEventEmitters.push(a), r.prototype = {
        defineEvents: function() {
            this.oldBlurClosure = function() {
                D.fireEvent("tabblur", t)
            }, this.oldFocusClosure = D.bind(function() {
                this.visibilityApiHasPriority ? D.fireEvent("tabfocus", t) : null != D.visibility.getHiddenProperty() && D.visibility.isHidden() || D.fireEvent("tabfocus", t)
            }, this)
        },
        attachDetachModernEventListeners: function(e) {
            D[0 == e ? "removeEventHandler" : "addEventHandler"](t, D.visibility.getVisibilityEvent(), this.handleVisibilityChange)
        },
        attachDetachOlderEventListeners: function(t, n, i) {
            var a = 0 == t ? "removeEventHandler" : "addEventHandler";
            D[a](n, i, this.oldBlurClosure), D[a](e, "focus", this.oldFocusClosure)
        },
        handleVisibilityChange: function() {
            D.visibility.isHidden() ? D.fireEvent("tabblur", t) : D.fireEvent("tabfocus", t)
        },
        setVisibilityApiPriority: function(t) {
            this.visibilityApiHasPriority = t, this.attachDetachOlderEventListeners(!1, e, "blur"), this.attachDetachModernEventListeners(!1), t ? null != D.visibility.getHiddenProperty() ? this.attachDetachModernEventListeners(!0) : this.attachDetachOlderEventListeners(!0, e, "blur") : (this.attachDetachOlderEventListeners(!0, e, "blur"), null != D.visibility.getHiddenProperty() && this.attachDetachModernEventListeners(!0))
        },
        oldBlurClosure: null,
        oldFocusClosure: null,
        visibilityApiHasPriority: !0
    }, D.availableEventEmitters.push(r), s.prototype.backgroundTasks = function() {
        D.each(this.rules, function(e) {
            D.cssQuery(e.selector, function(e) {
                if (e.length > 0) {
                    var t = e[0];
                    if (D.$data(t, "elementexists.seen")) return;
                    D.$data(t, "elementexists.seen", !0), D.onEvent({
                        type: "elementexists",
                        target: t
                    })
                }
            })
        })
    }, D.availableEventEmitters.push(s), o.prototype = {
        backgroundTasks: function() {
            var e = this.eventHandler;
            D.each(this.rules, function(t) {
                D.cssQuery(t.selector || "video", function(t) {
                    D.each(t, function(t) {
                        D.$data(t, "videoplayed.tracked") || (D.addEventHandler(t, "timeupdate", D.throttle(e, 100)), D.$data(t, "videoplayed.tracked", !0))
                    })
                })
            })
        },
        evalRule: function(e, t) {
            var n = t.event,
                i = e.seekable,
                a = i.start(0),
                r = i.end(0),
                s = e.currentTime,
                o = t.event.match(/^videoplayed\(([0-9]+)([s%])\)$/);
            if (o) {
                var l = o[2],
                    c = Number(o[1]),
                    u = "%" === l ? function() {
                        return c <= 100 * (s - a) / (r - a)
                    } : function() {
                        return c <= s - a
                    };
                !D.$data(e, n) && u() && (D.$data(e, n, !0), D.onEvent({
                    type: n,
                    target: e
                }))
            }
        },
        onUpdateTime: function(e) {
            var t = this.rules,
                n = e.target;
            if (n.seekable && 0 !== n.seekable.length)
                for (var i = 0, a = t.length; i < a; i++) this.evalRule(n, t[i])
        }
    }, D.availableEventEmitters.push(o), l.offset = function(n) {
        var i = null,
            a = null;
        try {
            var r = n.getBoundingClientRect(),
                s = t,
                o = s.documentElement,
                l = s.body,
                c = e,
                u = o.clientTop || l.clientTop || 0,
                d = o.clientLeft || l.clientLeft || 0,
                f = c.pageYOffset || o.scrollTop || l.scrollTop,
                h = c.pageXOffset || o.scrollLeft || l.scrollLeft;
            i = r.top + f - u, a = r.left + h - d
        } catch (g) {}
        return {
            top: i,
            left: a
        }
    }, l.getViewportHeight = function() {
        var n = e.innerHeight,
            i = t.compatMode;
        return i && (n = "CSS1Compat" == i ? t.documentElement.clientHeight : t.body.clientHeight), n
    }, l.getScrollTop = function() {
        return t.documentElement.scrollTop ? t.documentElement.scrollTop : t.body.scrollTop
    }, l.isElementInDocument = function(e) {
        return t.body.contains(e)
    }, l.isElementInView = function(e) {
        if (!l.isElementInDocument(e)) return !1;
        var t = l.getViewportHeight(),
            n = l.getScrollTop(),
            i = l.offset(e).top,
            a = e.offsetHeight;
        return null !== i && !(n > i + a || n + t < i)
    }, l.prototype = {
        backgroundTasks: function() {
            var e = this.elements;
            D.each(this.rules, function(t) {
                D.cssQuery(t.selector, function(n) {
                    var i = 0;
                    D.each(n, function(t) {
                        D.contains(e, t) || (e.push(t), i++)
                    }), i && D.notify(t.selector + " added " + i + " elements.", 1)
                })
            }), this.track()
        },
        checkInView: function(e, t, n) {
            var i = D.$data(e, "inview");
            if (l.isElementInView(e)) {
                i || D.$data(e, "inview", !0);
                var a = this;
                this.processRules(e, function(n, i, r) {
                    if (t || !n.inviewDelay) D.$data(e, i, !0), D.onEvent({
                        type: "inview",
                        target: e,
                        inviewDelay: n.inviewDelay
                    });
                    else if (n.inviewDelay) {
                        var s = D.$data(e, r);
                        s || (s = setTimeout(function() {
                            a.checkInView(e, !0, n.inviewDelay)
                        }, n.inviewDelay), D.$data(e, r, s))
                    }
                }, n)
            } else {
                if (!l.isElementInDocument(e)) {
                    var r = D.indexOf(this.elements, e);
                    this.elements.splice(r, 1)
                }
                i && D.$data(e, "inview", !1), this.processRules(e, function(t, n, i) {
                    var a = D.$data(e, i);
                    a && clearTimeout(a)
                }, n)
            }
        },
        track: function() {
            for (var e = this.elements.length - 1; e >= 0; e--) this.checkInView(this.elements[e])
        },
        processRules: function(e, t, n) {
            var i = this.rules;
            n && (i = D.filter(this.rules, function(e) {
                return e.inviewDelay == n
            })), D.each(i, function(n, i) {
                var a = n.inviewDelay ? "viewed_" + n.inviewDelay : "viewed",
                    r = "inview_timeout_id_" + i;
                D.$data(e, a) || D.matchesCss(n.selector, e) && t(n, a, r)
            })
        }
    }, D.availableEventEmitters.push(l), c.prototype = {
        obue: !1,
        initialize: function() {
            this.attachCloseListeners()
        },
        obuePrevUnload: function() {},
        obuePrevBeforeUnload: function() {},
        newObueListener: function() {
            this.obue || (this.obue = !0, this.triggerBeacons())
        },
        attachCloseListeners: function() {
            this.prevUnload = e.onunload, this.prevBeforeUnload = e.onbeforeunload, e.onunload = D.bind(function(t) {
                this.prevUnload && setTimeout(D.bind(function() {
                    this.prevUnload.call(e, t)
                }, this), 1), this.newObueListener()
            }, this), e.onbeforeunload = D.bind(function(t) {
                this.prevBeforeUnload && setTimeout(D.bind(function() {
                    this.prevBeforeUnload.call(e, t)
                }, this), 1), this.newObueListener()
            }, this)
        },
        triggerBeacons: function() {
            D.fireEvent("leave", t)
        }
    }, D.availableEventEmitters.push(c), u.prototype = {
        backgroundTasks: function() {
            var e = this;
            D.each(this.rules, function(t) {
                var n = t[1],
                    i = t[0];
                D.cssQuery(n, function(t) {
                    D.each(t, function(t) {
                        e.trackElement(t, i)
                    })
                })
            }, this)
        },
        trackElement: function(e, t) {
            var n = this,
                i = D.$data(e, "hover.delays");
            i ? D.contains(i, t) || i.push(t) : (D.addEventHandler(e, "mouseover", function(t) {
                n.onMouseOver(t, e)
            }), D.addEventHandler(e, "mouseout", function(t) {
                n.onMouseOut(t, e)
            }), D.$data(e, "hover.delays", [t]))
        },
        onMouseOver: function(e, t) {
            var n = e.target || e.srcElement,
                i = e.relatedTarget || e.fromElement;
            (t === n || D.containsElement(t, n)) && !D.containsElement(t, i) && this.onMouseEnter(t)
        },
        onMouseEnter: function(e) {
            var t = D.$data(e, "hover.delays"),
                n = D.map(t, function(t) {
                    return setTimeout(function() {
                        D.onEvent({
                            type: "hover(" + t + ")",
                            target: e
                        })
                    }, t)
                });
            D.$data(e, "hover.delayTimers", n)
        },
        onMouseOut: function(e, t) {
            var n = e.target || e.srcElement,
                i = e.relatedTarget || e.toElement;
            (t === n || D.containsElement(t, n)) && !D.containsElement(t, i) && this.onMouseLeave(t)
        },
        onMouseLeave: function(e) {
            var t = D.$data(e, "hover.delayTimers");
            t && D.each(t, function(e) {
                clearTimeout(e)
            })
        }
    }, D.availableEventEmitters.push(u), f.prototype = {
        initialize: function() {
            if (this.FB = this.FB || e.FB, this.FB && this.FB.Event && this.FB.Event.subscribe) return this.bind(), !0
        },
        bind: function() {
            this.FB.Event.subscribe("edge.create", function() {
                D.notify("tracking a facebook like", 1), D.onEvent({
                    type: "facebook.like",
                    target: t
                })
            }), this.FB.Event.subscribe("edge.remove", function() {
                D.notify("tracking a facebook unlike", 1), D.onEvent({
                    type: "facebook.unlike",
                    target: t
                })
            }), this.FB.Event.subscribe("message.send", function() {
                D.notify("tracking a facebook share", 1), D.onEvent({
                    type: "facebook.send",
                    target: t
                })
            })
        }
    }, D.availableEventEmitters.push(f), h.prototype = {
        initialize: function() {
            var e = this.twttr;
            e && "function" == typeof e.ready && e.ready(D.bind(this.bind, this))
        },
        bind: function() {
            this.twttr.events.bind("tweet", function(e) {
                e && (D.notify("tracking a tweet button", 1), D.onEvent({
                    type: "twitter.tweet",
                    target: t
                }))
            })
        }
    }, D.availableEventEmitters.push(h), g.prototype = {
        initialize: function() {
            this.setupHistoryAPI(), this.setupHashChange()
        },
        fireIfURIChanged: function() {
            var e = D.URL();
            this.lastURL !== e && (this.fireEvent(), this.lastURL = e)
        },
        fireEvent: function() {
            D.updateQueryParams(), D.onEvent({
                type: "locationchange",
                target: t
            })
        },
        setupSPASupport: function() {
            this.setupHistoryAPI(), this.setupHashChange()
        },
        setupHistoryAPI: function() {
            var t = e.history;
            t && (t.pushState && (this.originalPushState = t.pushState, t.pushState = this._pushState), t.replaceState && (this.originalReplaceState = t.replaceState, t.replaceState = this._replaceState)), D.addEventHandler(e, "popstate", this._onPopState)
        },
        pushState: function() {
            var e = this.originalPushState.apply(history, arguments);
            return this.onPushState(), e
        },
        replaceState: function() {
            var e = this.originalReplaceState.apply(history, arguments);
            return this.onReplaceState(), e
        },
        setupHashChange: function() {
            D.addEventHandler(e, "hashchange", this._onHashChange)
        },
        onReplaceState: function() {
            setTimeout(this._fireIfURIChanged, 0)
        },
        onPushState: function() {
            setTimeout(this._fireIfURIChanged, 0)
        },
        onPopState: function() {
            setTimeout(this._fireIfURIChanged, 0)
        },
        onHashChange: function() {
            setTimeout(this._fireIfURIChanged, 0)
        },
        uninitialize: function() {
            this.cleanUpHistoryAPI(), this.cleanUpHashChange()
        },
        cleanUpHistoryAPI: function() {
            history.pushState === this._pushState && (history.pushState = this.originalPushState), history.replaceState === this._replaceState && (history.replaceState = this.originalReplaceState), D.removeEventHandler(e, "popstate", this._onPopState)
        },
        cleanUpHashChange: function() {
            D.removeEventHandler(e, "hashchange", this._onHashChange)
        }
    }, D.availableEventEmitters.push(g), D.ecommerce = {
        addItem: function() {
            var e = [].slice.call(arguments);
            D.onEvent({
                type: "ecommerce.additem",
                target: e
            })
        },
        addTrans: function() {
            var e = [].slice.call(arguments);
            D.data.saleData.sale = {
                orderId: e[0],
                revenue: e[2]
            }, D.onEvent({
                type: "ecommerce.addtrans",
                target: e
            })
        },
        trackTrans: function() {
            D.onEvent({
                type: "ecommerce.tracktrans",
                target: []
            })
        }
    }, D.visibility = {
        isHidden: function() {
            var e = this.getHiddenProperty();
            return !!e && t[e]
        },
        isVisible: function() {
            return !this.isHidden()
        },
        getHiddenProperty: function() {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden" in t) return "hidden";
            for (var n = 0; n < e.length; n++)
                if (e[n] + "Hidden" in t) return e[n] + "Hidden";
            return null
        },
        getVisibilityEvent: function() {
            var e = this.getHiddenProperty();
            return e ? e.replace(/[H|h]idden/, "") + "visibilitychange" : null
        }
    }, D.inherit(p, D.BaseTool), D.extend(p.prototype, {
        name: "Nielsen",
        endPLPhase: function(e) {
            switch (e) {
                case "pagetop":
                    this.initialize();
                    break;
                case "pagebottom":
                    this.enableTracking && (this.queueCommand({
                        command: "sendFirstBeacon",
                        arguments: []
                    }), this.flushQueueWhenReady())
            }
        },
        defineListeners: function() {
            this.onTabFocus = D.bind(function() {
                this.notify("Tab visible, sending view beacon when ready", 1), this.tabEverVisible = !0, this.flushQueueWhenReady()
            }, this), this.onPageLeave = D.bind(function() {
                this.notify("isHuman? : " + this.isHuman(), 1), this.isHuman() && this.sendDurationBeacon()
            }, this), this.onHumanDetectionChange = D.bind(function(e) {
                this == e.target.target && (this.human = e.target.isHuman)
            }, this)
        },
        initialize: function() {
            this.initializeTracking(), this.initializeDataProviders(), this.initializeNonHumanDetection(), this.tabEverVisible = D.visibility.isVisible(), this.tabEverVisible ? this.notify("Tab visible, sending view beacon when ready", 1) : D.bindEventOnce("tabfocus", this.onTabFocus), this.initialized = !0
        },
        initializeTracking: function() {
            this.initialized || (this.notify("Initializing tracking", 1), this.addRemovePageLeaveEvent(this.enableTracking), this.addRemoveHumanDetectionChangeEvent(this.enableTracking), this.initialized = !0)
        },
        initializeDataProviders: function() {
            var e, t = this.getAnalyticsTool();
            this.dataProvider.register(new p.DataProvider.VisitorID(D.getVisitorId())), t ? (e = new p.DataProvider.Generic("rsid", function() {
                return t.settings.account
            }), this.dataProvider.register(e)) : this.notify("Missing integration with Analytics: rsid will not be sent.")
        },
        initializeNonHumanDetection: function() {
            D.nonhumandetection ? (D.nonhumandetection.init(), this.setEnableNonHumanDetection(0 != this.settings.enableNonHumanDetection), this.settings.nonHumanDetectionDelay > 0 && this.setNonHumanDetectionDelay(1e3 * parseInt(this.settings.nonHumanDetectionDelay))) : this.notify("NHDM is not available.")
        },
        getAnalyticsTool: function() {
            if (this.settings.integratesWith) return D.tools[this.settings.integratesWith]
        },
        flushQueueWhenReady: function() {
            this.enableTracking && this.tabEverVisible && D.poll(D.bind(function() {
                if (this.isReadyToTrack()) return this.flushQueue(), !0
            }, this), 100, 20)
        },
        isReadyToTrack: function() {
            return this.tabEverVisible && this.dataProvider.isReady()
        },
        $setVars: function(e, t, n) {
            for (var i in n) {
                var a = n[i];
                "function" == typeof a && (a = a()), this.settings[i] = a
            }
            this.notify("Set variables done", 2), this.prepareContextData()
        },
        $setEnableTracking: function(e, t, n) {
            this.notify("Will" + (n ? "" : " not") + " track time on page", 1), this.enableTracking != n && (this.addRemovePageLeaveEvent(n), this.addRemoveHumanDetectionChangeEvent(n), this.enableTracking = n)
        },
        $sendFirstBeacon: function() {
            this.sendViewBeacon()
        },
        setEnableNonHumanDetection: function(e) {
            e ? D.nonhumandetection.register(this) : D.nonhumandetection.unregister(this)
        },
        setNonHumanDetectionDelay: function(e) {
            D.nonhumandetection.register(this, e)
        },
        addRemovePageLeaveEvent: function(e) {
            this.notify((e ? "Attach onto" : "Detach from") + " page leave event", 1), D[0 == e ? "unbindEvent" : "bindEvent"]("leave", this.onPageLeave)
        },
        addRemoveHumanDetectionChangeEvent: function(e) {
            this.notify((e ? "Attach onto" : "Detach from") + " human detection change event", 1), D[0 == e ? "unbindEvent" : "bindEvent"]("humandetection.change", this.onHumanDetectionChange)
        },
        sendViewBeacon: function() {
            this.notify("Tracked page view.", 1), this.sendBeaconWith()
        },
        sendDurationBeacon: function() {
            if (D.timetracking && "function" == typeof D.timetracking.timeOnPage && null != D.timetracking.timeOnPage()) {
                this.notify("Tracked close", 1), this.sendBeaconWith({
                    timeOnPage: Math.round(D.timetracking.timeOnPage() / 1e3),
                    duration: "D",
                    timer: "timer"
                });
                var e;
                for (e = 0; e < this.magicConst; e++) "0"
            } else this.notify("Could not track close due missing time on page", 5)
        },
        sendBeaconWith: function(e) {
            this.enableTracking && this[this.beaconMethod].call(this, this.prepareUrl(e))
        },
        plainBeacon: function(e) {
            var t = new Image;
            t.src = e, t.width = 1, t.height = 1, t.alt = ""
        },
        navigatorSendBeacon: function(e) {
            navigator.sendBeacon(e)
        },
        prepareUrl: function(e) {
            var t = this.settings;
            return D.extend(t, this.dataProvider.provide()), D.extend(t, e), this.preparePrefix(this.settings.collectionServer) + this.adapt.convertToURI(this.adapt.toNielsen(this.substituteVariables(t)))
        },
        preparePrefix: function(e) {
            return "//" + encodeURIComponent(e) + ".imrworldwide.com/cgi-bin/gn?"
        },
        substituteVariables: function(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = D.replace(e[n]));
            return t
        },
        prepareContextData: function() {
            if (this.getAnalyticsTool()) {
                var e = this.settings;
                e.sdkVersion = _satellite.publishDate, this.getAnalyticsTool().$setVars(null, null, {
                    contextData: this.adapt.toAnalytics(this.substituteVariables(e))
                })
            } else this.notify("Adobe Analytics missing.")
        },
        isHuman: function() {
            return this.human
        },
        onTabFocus: function() {},
        onPageLeave: function() {},
        onHumanDetectionChange: function() {},
        notify: function(e, t) {
            D.notify(this.logPrefix + e, t)
        },
        beaconMethod: "plainBeacon",
        adapt: null,
        enableTracking: !1,
        logPrefix: "Nielsen: ",
        tabEverVisible: !1,
        human: !0,
        magicConst: 2e6
    }), p.DataProvider = {}, p.DataProvider.Generic = function(e, t) {
        this.key = e, this.valueFn = t
    }, D.extend(p.DataProvider.Generic.prototype, {
        isReady: function() {
            return !0
        },
        getValue: function() {
            return this.valueFn()
        },
        provide: function() {
            this.isReady() || p.prototype.notify("Not yet ready to provide value for: " + this.key, 5);
            var e = {};
            return e[this.key] = this.getValue(), e
        }
    }), p.DataProvider.VisitorID = function(e, t, n) {
        this.key = t || "uuid", this.visitorInstance = e, this.visitorInstance && (this.visitorId = e.getMarketingCloudVisitorID([this, this._visitorIdCallback])), this.fallbackProvider = n || new p.UUID
    }, D.inherit(p.DataProvider.VisitorID, p.DataProvider.Generic), D.extend(p.DataProvider.VisitorID.prototype, {
        isReady: function() {
            return null === this.visitorInstance || !!this.visitorId
        },
        getValue: function() {
            return this.visitorId || this.fallbackProvider.get()
        },
        _visitorIdCallback: function(e) {
            this.visitorId = e
        }
    }), p.DataProvider.Aggregate = function() {
        this.providers = [];
        for (var e = 0; e < arguments.length; e++) this.register(arguments[e])
    }, D.extend(p.DataProvider.Aggregate.prototype, {
        register: function(e) {
            this.providers.push(e)
        },
        isReady: function() {
            return D.every(this.providers, function(e) {
                return e.isReady()
            })
        },
        provide: function() {
            var e = {};
            return D.each(this.providers, function(t) {
                D.extend(e, t.provide())
            }), e
        }
    }), p.UUID = function() {}, D.extend(p.UUID.prototype, {
        generate: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            })
        },
        get: function() {
            var e = D.readCookie(this.key("uuid"));
            return e || (e = this.generate(), D.setCookie(this.key("uuid"), e), e)
        },
        key: function(e) {
            return "_dtm_nielsen_" + e
        }
    }), p.DataAdapters = function() {}, D.extend(p.DataAdapters.prototype, {
        toNielsen: function(e) {
            var t = (new Date).getTime(),
                i = {
                    c6: "vc,",
                    c13: "asid,",
                    c15: "apn,",
                    c27: "cln,",
                    c32: "segA,",
                    c33: "segB,",
                    c34: "segC,",
                    c35: "adrsid,",
                    c29: "plid,",
                    c30: "bldv,",
                    c40: "adbid,"
                },
                a = {
                    ci: e.clientId,
                    c6: e.vcid,
                    c13: e.appId,
                    c15: e.appName,
                    prv: 1,
                    forward: 0,
                    ad: 0,
                    cr: e.duration || "V",
                    rt: "text",
                    st: "dcr",
                    prd: "dcr",
                    r: t,
                    at: e.timer || "view",
                    c16: e.sdkVersion,
                    c27: e.timeOnPage || 0,
                    c40: e.uuid,
                    c35: e.rsid,
                    ti: t,
                    sup: 0,
                    c32: e.segmentA,
                    c33: e.segmentB,
                    c34: e.segmentC,
                    asn: e.assetName,
                    c29: e.playerID,
                    c30: e.buildVersion
                };
            for (key in a)
                if (a[key] !== n && null != a[key] && a[key] !== n && null != a && "" != a) {
                    var r = encodeURIComponent(a[key]);
                    i.hasOwnProperty(key) && r && (r = i[key] + r), a[key] = r
                } return this.filterObject(a)
        },
        toAnalytics: function(e) {
            return this.filterObject({
                "a.nielsen.clientid": e.clientId,
                "a.nielsen.vcid": e.vcid,
                "a.nielsen.appid": e.appId,
                "a.nielsen.appname": e.appName,
                "a.nielsen.accmethod": "0",
                "a.nielsen.ctype": "text",
                "a.nielsen.sega": e.segmentA,
                "a.nielsen.segb": e.segmentB,
                "a.nielsen.segc": e.segmentC,
                "a.nielsen.asset": e.assetName
            })
        },
        convertToURI: function(e) {
            if (!1 === D.isObject(e)) return "";
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n + "=" + e[n]);
            return t.join("&")
        },
        filterObject: function(e) {
            for (var t in e) !e.hasOwnProperty(t) || null != e[t] && e[t] !== n || delete e[t];
            return e
        }
    }), D.availableTools.nielsen = p, D.extend(v.prototype, {
        getInstance: function() {
            return this.instance
        },
        initialize: function() {
            var e, t = this.settings;
            D.notify("Visitor ID: Initializing tool", 1), null !== (e = this.createInstance(t.mcOrgId, t.initVars)) && (t.customerIDs && this.applyCustomerIDs(e, t.customerIDs), t.autoRequest && e.getMarketingCloudVisitorID(), this.instance = e)
        },
        createInstance: function(e, t) {
            if (!D.isString(e)) return D.notify('Visitor ID: Cannot create instance using mcOrgId: "' + e + '"', 4), null;
            e = D.replace(e), D.notify('Visitor ID: Create instance using mcOrgId: "' + e + '"', 1), t = this.parseValues(t);
            var n = Visitor.getInstance(e, t);
            return D.notify("Visitor ID: Set variables: " + D.stringify(t), 1), n
        },
        applyCustomerIDs: function(e, t) {
            var n = this.parseIds(t);
            e.setCustomerIDs(n), D.notify("Visitor ID: Set Customer IDs: " + D.stringify(n), 1)
        },
        parseValues: function(e) {
            if (!1 === D.isObject(e)) return {};
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = D.replace(e[n]));
            return t
        },
        parseIds: function(e) {
            var t = {};
            if (!1 === D.isObject(e)) return {};
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var i = D.replace(e[n].id);
                    i !== e[n].id && i && (t[n] = {}, t[n].id = i, t[n].authState = Visitor.AuthState[e[n].authState])
                } return t
        }
    }), D.availableTools.visitor_id = v, D.inherit(m, D.BaseTool), D.extend(m.prototype, {
        name: "SC",
        endPLPhase: function(e) {
            e === this.settings.loadOn && this.initialize(e)
        },
        initialize: function(t) {
            if (!this._cancelToolInit)
                if (this.settings.initVars = this.substituteVariables(this.settings.initVars, {
                        type: t
                    }), !1 !== this.settings.initTool) {
                    var n = this.settings.sCodeURL || D.basePath() + "s_code.js";
                    "object" == typeof n && (n = "https:" === e.location.protocol ? n.https : n.http), n.match(/^https?:/) || (n = D.basePath() + n), this.settings.initVars && this.$setVars(null, null, this.settings.initVars), D.loadScript(n, D.bind(this.onSCodeLoaded, this)), this.initializing = !0
                } else this.initializing = !0, this.pollForSC()
        },
        getS: function(t, n) {
            var i = n && n.hostname || e.location.hostname,
                a = this.concatWithToolVarBindings(n && n.setVars || this.varBindings),
                r = n && n.addEvent || this.events,
                s = this.getAccount(i),
                o = e.s_gi;
            if (!o) return null;
            if (this.isValidSCInstance(t) || (t = null), !s && !t) return D.notify("Adobe Analytics: tracker not initialized because account was not found", 1), null;
            t = t || o(s);
            var l = "D" + D.appVersion;
            return "undefined" != typeof t.tagContainerMarker ? t.tagContainerMarker = l : "string" == typeof t.version && t.version.substring(t.version.length - 5) !== "-" + l && (t.version += "-" + l), t.sa && !0 !== this.settings.skipSetAccount && !1 !== this.settings.initTool && t.sa(this.settings.account), this.applyVarBindingsOnTracker(t, a), r.length > 0 && (t.events = r.join(",")), D.getVisitorId() && (t.visitor = D.getVisitorId()), t
        },
        onSCodeLoaded: function(e) {
            this.initialized = !0, this.initializing = !1;
            var t = ["Adobe Analytics: loaded", e ? " (manual)" : "", "."];
            D.notify(t.join(""), 1), D.fireEvent(this.id + ".load", this.getS()), e || (this.flushQueueExceptTrackLink(), this.sendBeacon()), this.flushQueue()
        },
        getAccount: function(t) {
            return e.s_account ? e.s_account : t && this.settings.accountByHost && this.settings.accountByHost[t] || this.settings.account
        },
        getTrackingServer: function() {
            var t = this,
                n = t.getS();
            if (n) {
                if (n.ssl && n.trackingServerSecure) return n.trackingServerSecure;
                if (n.trackingServer) return n.trackingServer
            }
            var i, a = t.getAccount(e.location.hostname);
            if (!a) return null;
            var r, s, o = "",
                l = n && n.dc;
            return (r = (i = a).indexOf(",")) >= 0 && (i = i.gb(0, r)), i = i.replace(/[^A-Za-z0-9]/g, ""), o || (o = "2o7.net"), l = l ? ("" + l).toLowerCase() : "d1", "2o7.net" == o && ("d1" == l ? l = "112" : "d2" == l && (l = "122"), s = ""), r = i + "." + l + "." + s + o
        },
        sendBeacon: function() {
            var t = this.getS(e[this.settings.renameS || "s"]);
            t ? this.settings.customInit && !1 === this.settings.customInit(t) ? D.notify("Adobe Analytics: custom init suppressed beacon", 1) : (this.settings.executeCustomPageCodeFirst && this.applyVarBindingsOnTracker(t, this.varBindings), this.executeCustomSetupFuns(t), t.t(), this.clearVarBindings(), this.clearCustomSetup(), D.notify("Adobe Analytics: tracked page view", 1)) : D.notify("Adobe Analytics: page code not loaded", 1)
        },
        pollForSC: function() {
            D.poll(D.bind(function() {
                if ("function" == typeof e.s_gi) return this.onSCodeLoaded(!0), !0
            }, this))
        },
        flushQueueExceptTrackLink: function() {
            if (this.pending) {
                for (var e = [], t = 0; t < this.pending.length; t++) {
                    var n = this.pending[t];
                    "trackLink" === n[0].command ? e.push(n) : this.triggerCommand.apply(this, n)
                }
                this.pending = e
            }
        },
        isQueueAvailable: function() {
            return !this.initialized
        },
        substituteVariables: function(e, t) {
            var n = {};
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    var a = e[i];
                    n[i] = D.replace(a, location, t)
                } return n
        },
        $setVars: function(e, t, n) {
            for (var i in n)
                if (n.hasOwnProperty(i)) {
                    var a = n[i];
                    "function" == typeof a && (a = a()), this.varBindings[i] = a
                } D.notify("Adobe Analytics: set variables.", 2)
        },
        $customSetup: function(e, t, n) {
            this.customSetupFuns.push(function(i) {
                n.call(e, t, i)
            })
        },
        isValidSCInstance: function(e) {
            return !!e && "function" == typeof e.t && "function" == typeof e.tl
        },
        concatWithToolVarBindings: function(e) {
            var t = this.settings.initVars || {};
            return D.map(["trackingServer", "trackingServerSecure"], function(n) {
                t[n] && !e[n] && (e[n] = t[n])
            }), e
        },
        applyVarBindingsOnTracker: function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        },
        clearVarBindings: function() {
            this.varBindings = {}
        },
        clearCustomSetup: function() {
            this.customSetupFuns = []
        },
        executeCustomSetupFuns: function(t) {
            D.each(this.customSetupFuns, function(n) {
                n.call(e, t)
            })
        },
        $trackLink: function(e, t, n) {
            var i = (n = n || {}).type,
                a = n.linkName;
            !a && e && e.nodeName && "a" === e.nodeName.toLowerCase() && (a = e.innerHTML), a || (a = "link clicked");
            var r = n && n.setVars,
                s = n && n.addEvent || [],
                o = this.getS(null, {
                    setVars: r,
                    addEvent: s
                });
            if (o) {
                var l = o.linkTrackVars,
                    c = o.linkTrackEvents,
                    u = this.definedVarNames(r);
                n && n.customSetup && n.customSetup.call(e, t, o), s.length > 0 && u.push("events"), o.products && u.push("products"), u = this.mergeTrackLinkVars(o.linkTrackVars, u), s = this.mergeTrackLinkVars(o.linkTrackEvents, s), o.linkTrackVars = this.getCustomLinkVarsList(u);
                var d = D.map(s, function(e) {
                    return e.split(":")[0]
                });
                o.linkTrackEvents = this.getCustomLinkVarsList(d), o.tl(!0, i || "o", a), D.notify(["Adobe Analytics: tracked link ", "using: linkTrackVars=", D.stringify(o.linkTrackVars), "; linkTrackEvents=", D.stringify(o.linkTrackEvents)].join(""), 1), o.linkTrackVars = l, o.linkTrackEvents = c
            } else D.notify("Adobe Analytics: page code not loaded", 1)
        },
        mergeTrackLinkVars: function(e, t) {
            return e && (t = e.split(",").concat(t)), t
        },
        getCustomLinkVarsList: function(e) {
            var t = D.indexOf(e, "None");
            return t > -1 && e.length > 1 && e.splice(t, 1), e.join(",")
        },
        definedVarNames: function(e) {
            e = e || this.varBindings;
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && /^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test(n) && t.push(n);
            return t
        },
        $trackPageView: function(e, t, n) {
            var i = n && n.setVars,
                a = n && n.addEvent || [],
                r = this.getS(null, {
                    setVars: i,
                    addEvent: a
                });
            r ? (r.linkTrackVars = "", r.linkTrackEvents = "", this.executeCustomSetupFuns(r), n && n.customSetup && n.customSetup.call(e, t, r), r.t(), this.clearVarBindings(), this.clearCustomSetup(), D.notify("Adobe Analytics: tracked page view", 1)) : D.notify("Adobe Analytics: page code not loaded", 1)
        },
        $postTransaction: function(t, n, i) {
            var a = D.data.transaction = e[i],
                r = this.varBindings,
                s = this.settings.fieldVarMapping;
            if (D.each(a.items, function(e) {
                    this.products.push(e)
                }, this), r.products = D.map(this.products, function(e) {
                    var t = [];
                    if (s && s.item)
                        for (var n in s.item)
                            if (s.item.hasOwnProperty(n)) {
                                var i = s.item[n];
                                t.push(i + "=" + e[n]), "event" === i.substring(0, 5) && this.events.push(i)
                            } var a = ["", e.product, e.quantity, e.unitPrice * e.quantity];
                    return t.length > 0 && a.push(t.join("|")), a.join(";")
                }, this).join(","), s && s.transaction) {
                var o = [];
                for (var l in s.transaction)
                    if (s.transaction.hasOwnProperty(l)) {
                        i = s.transaction[l];
                        o.push(i + "=" + a[l]), "event" === i.substring(0, 5) && this.events.push(i)
                    } r.products.length > 0 && (r.products += ","), r.products += ";;;;" + o.join("|")
            }
        },
        $addEvent: function() {
            for (var e = 2, t = arguments.length; e < t; e++) this.events.push(arguments[e])
        },
        $addProduct: function() {
            for (var e = 2, t = arguments.length; e < t; e++) this.products.push(arguments[e])
        }
    }), D.availableTools.sc = m, D.inherit(y, D.BaseTool), D.extend(y.prototype, {
        name: "Default",
        $loadIframe: function(t, n, i) {
            var a = i.pages,
                r = i.loadOn,
                s = D.bind(function() {
                    D.each(a, function(e) {
                        this.loadIframe(t, n, e)
                    }, this)
                }, this);
            r || s(), "domready" === r && D.domReady(s), "load" === r && D.addEventHandler(e, "load", s)
        },
        loadIframe: function(e, n, i) {
            var a = t.createElement("iframe");
            a.style.display = "none";
            var r = D.data.host,
                s = i.data,
                o = this.scriptURL(i.src),
                l = D.searchVariables(s, e, n);
            r && (o = D.basePath() + o), o += l, a.src = o;
            var c = t.getElementsByTagName("body")[0];
            c ? c.appendChild(a) : D.domReady(function() {
                t.getElementsByTagName("body")[0].appendChild(a)
            })
        },
        scriptURL: function(e) {
            return (D.settings.scriptDir || "") + e
        },
        $loadScript: function(t, n, i) {
            var a = i.scripts,
                r = i.sequential,
                s = i.loadOn,
                o = D.bind(function() {
                    r ? this.loadScripts(t, n, a) : D.each(a, function(e) {
                        this.loadScripts(t, n, [e])
                    }, this)
                }, this);
            s ? "domready" === s ? D.domReady(o) : "load" === s && D.addEventHandler(e, "load", o) : o()
        },
        loadScripts: function(e, t, n) {
            function i() {
                r.length > 0 && a && r.shift().call(e, t, s);
                var l = n.shift();
                if (l) {
                    var c = D.data.host,
                        u = o.scriptURL(l.src);
                    c && (u = D.basePath() + u), a = l, D.loadScript(u, i)
                }
            }
            try {
                n = n.slice(0);
                var a, r = this.asyncScriptCallbackQueue,
                    s = t.target || t.srcElement,
                    o = this
            } catch (l) {
                console.error("scripts is", D.stringify(n))
            }
            i()
        },
        $loadBlockingScript: function(e, t, n) {
            var i = n.scripts;
            n.loadOn;
            D.bind(function() {
                D.each(i, function(n) {
                    this.loadBlockingScript(e, t, n)
                }, this)
            }, this)()
        },
        loadBlockingScript: function(e, t, n) {
            var i = this.scriptURL(n.src),
                a = D.data.host,
                r = t.target || t.srcElement;
            a && (i = D.basePath() + i), this.argsForBlockingScripts.push([e, t, r]), D.loadScriptSync(i)
        },
        pushAsyncScript: function(e) {
            this.asyncScriptCallbackQueue.push(e)
        },
        pushBlockingScript: function(e) {
            var t = this.argsForBlockingScripts.shift(),
                n = t[0];
            e.apply(n, t.slice(1))
        },
        $writeHTML: D.escapeHtmlParams(function(e, n) {
            if (!D.domReadyFired && t.write)
                if ("pagebottom" === n.type || "pagetop" === n.type)
                    for (var i = 2, a = arguments.length; i < a; i++) {
                        var r = arguments[i].html;
                        r = D.replace(r, e, n), t.write(r)
                    } else D.notify("You can only use writeHTML on the `pagetop` and `pagebottom` events.", 1);
                else D.notify("Command writeHTML failed. You should try appending HTML using the async option.", 1)
        }),
        linkNeedsDelayActivate: function(t, n) {
            n = n || e;
            var i = t.tagName,
                a = t.getAttribute("target"),
                r = t.getAttribute("href");
            return (!i || "a" === i.toLowerCase()) && (!!r && (!a || "_blank" !== a && ("_top" === a ? n.top === n : "_parent" !== a && ("_self" === a || (!n.name || a === n.name)))))
        },
        $delayActivateLink: function(e, t) {
            if (this.linkNeedsDelayActivate(e)) {
                D.preventDefault(t);
                var n = D.settings.linkDelay || 100;
                setTimeout(function() {
                    D.setLocation(e.href)
                }, n)
            }
        },
        isQueueable: function(e) {
            return "writeHTML" !== e.command
        }
    }), D.availableTools["default"] = y, D.inherit(b, D.BaseTool), D.extend(b.prototype, {
        name: "tnt",
        endPLPhase: function(e) {
            "aftertoolinit" === e && this.initialize()
        },
        initialize: function() {
            D.notify("Test & Target: Initializing", 1), this.initializeTargetPageParams(), this.load()
        },
        initializeTargetPageParams: function() {
            e.targetPageParams && this.updateTargetPageParams(this.parseTargetPageParamsResult(e.targetPageParams())), this.updateTargetPageParams(this.settings.pageParams), this.setTargetPageParamsFunction()
        },
        load: function() {
            var e = this.getMboxURL(this.settings.mboxURL);
            !1 !== this.settings.initTool ? this.settings.loadSync ? (D.loadScriptSync(e), this.onScriptLoaded()) : (D.loadScript(e, D.bind(this.onScriptLoaded, this)), this.initializing = !0) : this.initialized = !0
        },
        getMboxURL: function(t) {
            var n = t;
            return D.isObject(t) && (n = "https:" === e.location.protocol ? t.https : t.http), n.match(/^https?:/) ? n : D.basePath() + n
        },
        onScriptLoaded: function() {
            D.notify("Test & Target: loaded.", 1), this.flushQueue(), this.initialized = !0, this.initializing = !1
        },
        $addMbox: function(e, t, n) {
            var i = n.mboxGoesAround,
                a = i + "{visibility: hidden;}",
                r = this.appendStyle(a);
            i in this.styleElements || (this.styleElements[i] = r), this.initialized ? this.$addMBoxStep2(null, null, n) : this.initializing && this.queueCommand({
                command: "addMBoxStep2",
                arguments: [n]
            }, e, t)
        },
        $addMBoxStep2: function(n, i, a) {
            var r = this.generateID(),
                s = this;
            D.addEventHandler(e, "load", D.bind(function() {
                D.cssQuery(a.mboxGoesAround, function(n) {
                    var i = n[0];
                    if (i) {
                        var o = t.createElement("div");
                        o.id = r, i.parentNode.replaceChild(o, i), o.appendChild(i), e.mboxDefine(r, a.mboxName);
                        var l = [a.mboxName];
                        a.arguments && (l = l.concat(a.arguments)), e.mboxUpdate.apply(null, l), s.reappearWhenCallComesBack(i, r, a.timeout, a)
                    }
                })
            }, this)), this.lastMboxID = r
        },
        $addTargetPageParams: function(e, t, n) {
            this.updateTargetPageParams(n)
        },
        generateID: function() {
            return "_sdsat_mbox_" + String(Math.random()).substring(2) + "_"
        },
        appendStyle: function(e) {
            var n = t.getElementsByTagName("head")[0],
                i = t.createElement("style");
            return i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), n.appendChild(i), i
        },
        reappearWhenCallComesBack: function(e, t, n, i) {
            function a() {
                var e = r.styleElements[i.mboxGoesAround];
                e && (e.parentNode.removeChild(e), delete r.styleElements[i.mboxGoesAround])
            }
            var r = this;
            D.cssQuery('script[src*="omtrdc.net"]', function(e) {
                var t = e[0];
                if (t) {
                    D.scriptOnLoad(t.src, t, function() {
                        D.notify("Test & Target: request complete", 1), a(), clearTimeout(i)
                    });
                    var i = setTimeout(function() {
                        D.notify("Test & Target: bailing after " + n + "ms", 1), a()
                    }, n)
                } else D.notify("Test & Target: failed to find T&T ajax call, bailing", 1), a()
            })
        },
        updateTargetPageParams: function(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[D.replace(n)] = D.replace(e[n]));
            D.extend(this.targetPageParamsStore, t)
        },
        getTargetPageParams: function() {
            return this.targetPageParamsStore
        },
        setTargetPageParamsFunction: function() {
            e.targetPageParams = D.bind(this.getTargetPageParams, this)
        },
        parseTargetPageParamsResult: function(e) {
            var t = e;
            return D.isArray(e) && (e = e.join("&")), D.isString(e) && (t = D.parseQueryParams(e)), t
        }
    }), D.availableTools.tnt = b, D.inherit(k, D.BaseTool), D.extend(k.prototype, {
        initialize: function() {
            var e = this.settings;
            if (!1 !== this.settings.initTool) {
                var t = e.url;
                t = "string" == typeof t ? D.basePath() + t : D.isHttps() ? t.https : t.http, D.loadScript(t, D.bind(this.onLoad, this)), this.initializing = !0
            } else this.initialized = !0
        },
        isQueueAvailable: function() {
            return !this.initialized
        },
        onLoad: function() {
            this.initialized = !0, this.initializing = !1, this.settings.initialBeacon && this.settings.initialBeacon(), this.flushQueue()
        },
        endPLPhase: function(e) {
            e === this.settings.loadOn && (D.notify(this.name + ": Initializing at " + e, 1), this.initialize())
        },
        $fire: function(e, t, n) {
            this.initializing ? this.queueCommand({
                command: "fire",
                arguments: [n]
            }, e, t) : n.call(this.settings, e, t)
        }
    }), D.availableTools.am = k, D.availableTools.adlens = k, D.availableTools.aem = k, D.availableTools.__basic = k;
    var L = {
        allowLinker: function() {
            return D.hasMultipleDomains()
        },
        cookieDomain: function() {
            var t = D.settings.domainList,
                n = D.find(t, function(t) {
                    var n = e.location.hostname;
                    return D.equalsIgnoreCase(n.slice(n.length - t.length), t)
                });
            return n ? "." + n : "auto"
        }
    };
    D.inherit(V, D.BaseTool), D.extend(V.prototype, {
        name: "GAUniversal",
        endPLPhase: function(e) {
            e === this.settings.loadOn && (D.notify("GAU: Initializing at " + e, 1), this.initialize(), this.flushQueue(), this.trackInitialPageView())
        },
        getTrackerName: function() {
            return this.settings.trackerSettings.name || ""
        },
        isPageCodeLoadSuppressed: function() {
            return !1 === this.settings.initTool || !0 === this._cancelToolInit
        },
        initialize: function() {
            if (this.isPageCodeLoadSuppressed()) return this.initialized = !0, void D.notify("GAU: Page code not loaded (suppressed).", 1);
            var t = "ga";
            e[t] = e[t] || this.createGAObject(), e.GoogleAnalyticsObject = t, D.notify("GAU: Page code loaded.", 1), D.loadScriptOnce(this.getToolUrl());
            var n = this.settings;
            (L.allowLinker() && !1 !== n.allowLinker ? this.createAccountForLinker() : this.createAccount(), this.executeInitCommands(), n.customInit) && (!1 === (0, n.customInit)(e[t], this.getTrackerName()) && (this.suppressInitialPageView = !0));
            this.initialized = !0
        },
        createGAObject: function() {
            var e = function() {
                e.q.push(arguments)
            };
            return e.q = [], e.l = 1 * new Date, e
        },
        createAccount: function() {
            this.create()
        },
        createAccountForLinker: function() {
            var e = {};
            L.allowLinker() && (e.allowLinker = !0), this.create(e), this.call("require", "linker"), this.call("linker:autoLink", this.autoLinkDomains(), !1, !0)
        },
        create: function(e) {
            var t = this.settings.trackerSettings;
            (t = D.preprocessArguments([t], location, null, this.forceLowerCase)[0]).trackingId = D.replace(this.settings.trackerSettings.trackingId, location), t.cookieDomain || (t.cookieDomain = L.cookieDomain()), D.extend(t, e || {}), this.call("create", t)
        },
        autoLinkDomains: function() {
            var e = location.hostname;
            return D.filter(D.settings.domainList, function(t) {
                return t !== e
            })
        },
        executeInitCommands: function() {
            var e = this.settings;
            e.initCommands && D.each(e.initCommands, function(e) {
                var t = e.splice(2, e.length - 2);
                e = e.concat(D.preprocessArguments(t, location, null, this.forceLowerCase)), this.call.apply(this, e)
            }, this)
        },
        trackInitialPageView: function() {
            this.suppressInitialPageView || this.isPageCodeLoadSuppressed() || this.call("send", "pageview")
        },
        call: function() {
            "function" == typeof ga ? this.isCallSuppressed() || (arguments[0] = this.cmd(arguments[0]), this.log(D.toArray(arguments)), ga.apply(e, arguments)) : D.notify("GA Universal function not found!", 4)
        },
        isCallSuppressed: function() {
            return !0 === this._cancelToolInit
        },
        $missing$: function(e, t, n, i) {
            i = i || [], i = [e].concat(i), this.call.apply(this, i)
        },
        getToolUrl: function() {
            var e = this.settings,
                t = D.isHttps();
            return e.url ? t ? e.url.https : e.url.http : (t ? "https://ssl" : "http://www") + ".google-analytics.com/analytics.js"
        },
        cmd: function(e) {
            var t = ["send", "set", "get"],
                n = this.getTrackerName();
            return n && -1 !== D.indexOf(t, e) ? n + "." + e : e
        },
        log: function(e) {
            var t = "GA Universal: sent command " + e[0] + " to tracker " + (this.getTrackerName() || "default");
            if (e.length > 1) {
                D.stringify(e.slice(1));
                t += " with parameters " + D.stringify(e.slice(1))
            }
            t += ".", D.notify(t, 1)
        }
    }), D.availableTools.ga_universal = V, D.inherit(w, D.BaseTool), D.extend(w.prototype, {
        name: "GA",
        initialize: function() {
            var t = this.settings,
                n = e._gaq,
                i = t.initCommands || [],
                a = t.customInit;
            if (n || (_gaq = []), this.isSuppressed()) D.notify("GA: page code not loaded(suppressed).", 1);
            else {
                if (!n && !w.scriptLoaded) {
                    var r = D.isHttps(),
                        s = (r ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                    t.url && (s = r ? t.url.https : t.url.http), D.loadScript(s), w.scriptLoaded = !0, D.notify("GA: page code loaded.", 1)
                }
                t.domain;
                var o = t.trackerName,
                    l = L.allowLinker(),
                    c = D.replace(t.account, location);
                D.settings.domainList;
                _gaq.push([this.cmd("setAccount"), c]), l && _gaq.push([this.cmd("setAllowLinker"), l]), _gaq.push([this.cmd("setDomainName"), L.cookieDomain()]), D.each(i, function(e) {
                    var t = [this.cmd(e[0])].concat(D.preprocessArguments(e.slice(1), location, null, this.forceLowerCase));
                    _gaq.push(t)
                }, this), a && (this.suppressInitialPageView = !1 === a(_gaq, o)), t.pageName && this.$overrideInitialPageView(null, null, t.pageName)
            }
            this.initialized = !0, D.fireEvent(this.id + ".configure", _gaq, o)
        },
        isSuppressed: function() {
            return this._cancelToolInit || !1 === this.settings.initTool
        },
        tracker: function() {
            return this.settings.trackerName
        },
        cmd: function(e) {
            var t = this.tracker();
            return t ? t + "._" + e : "_" + e
        },
        $overrideInitialPageView: function(e, t, n) {
            this.urlOverride = n
        },
        trackInitialPageView: function() {
            if (!this.isSuppressed() && !this.suppressInitialPageView)
                if (this.urlOverride) {
                    var e = D.preprocessArguments([this.urlOverride], location, null, this.forceLowerCase);
                    this.$missing$("trackPageview", null, null, e)
                } else this.$missing$("trackPageview")
        },
        endPLPhase: function(e) {
            e === this.settings.loadOn && (D.notify("GA: Initializing at " + e, 1), this.initialize(), this.flushQueue(), this.trackInitialPageView())
        },
        call: function(e, t, n, i) {
            if (!this._cancelToolInit) {
                this.settings;
                var a = this.tracker(),
                    r = this.cmd(e);
                i = i ? [r].concat(i) : [r];
                _gaq.push(i), a ? D.notify("GA: sent command " + e + " to tracker " + a + (i.length > 1 ? " with parameters [" + i.slice(1).join(", ") + "]" : "") + ".", 1) : D.notify("GA: sent command " + e + (i.length > 1 ? " with parameters [" + i.slice(1).join(", ") + "]" : "") + ".", 1)
            }
        },
        $missing$: function(e, t, n, i) {
            this.call(e, t, n, i)
        },
        $postTransaction: function(t, n, i) {
            var a = D.data.customVars.transaction = e[i];
            this.call("addTrans", t, n, [a.orderID, a.affiliation, a.total, a.tax, a.shipping, a.city, a.state, a.country]), D.each(a.items, function(e) {
                this.call("addItem", t, n, [e.orderID, e.sku, e.product, e.category, e.unitPrice, e.quantity])
            }, this), this.call("trackTrans", t, n)
        },
        delayLink: function(e, t) {
            var n = this;
            if (L.allowLinker() && e.hostname.match(this.settings.linkerDomains) && !D.isSubdomainOf(e.hostname, location.hostname)) {
                D.preventDefault(t);
                var i = D.settings.linkDelay || 100;
                setTimeout(function() {
                    n.call("link", e, t, [e.href])
                }, i)
            }
        },
        popupLink: function(t, n) {
            if (e._gat) {
                D.preventDefault(n);
                var i = this.settings.account,
                    a = e._gat._createTracker(i)._getLinkerUrl(t.href);
                e.open(a)
            }
        },
        $link: function(e, t) {
            "_blank" === e.getAttribute("target") ? this.popupLink(e, t) : this.delayLink(e, t)
        },
        $trackEvent: function(e, t) {
            var n = Array.prototype.slice.call(arguments, 2);
            if (n.length >= 4 && null != n[3]) {
                var i = parseInt(n[3], 10);
                D.isNaN(i) && (i = 1), n[3] = i
            }
            this.call("trackEvent", e, t, n)
        }
    }), D.availableTools.ga = w, _satellite.init({
        tools: {
            fe57fa64dc097a680df7cc2b862c77ff: {
                engine: "sc",
                loadOn: "pagebottom",
                account: "conde-wired",
                euCookie: !1,
                sCodeURL: "6372cf21ef88ee60bc2977a4898dcb5c7945a212/s-code-contents-4db97ef176d632a0c5cd3a7d6c33be3c1957ff0c.js",
                renameS: "s",
                initVars: {
                    charSet: "UTF-8",
                    currencyCode: "USD",
                    trackingServer: "stats.wired.com",
                    trackingServerSecure: "sstats.wired.com",
                    referrer: "%Custom Referrer%",
                    campaign: D.getQueryParam("mbid"),
                    pageName: "%Page Name%",
                    channel: "%Site Section%",
                    trackInlineStats: !0,
                    trackDownloadLinks: !0,
                    linkDownloadFileTypes: "avi,css,csv,doc,docx,eps,exe,jpg,js,m4v,mov,mp3,pdf,png,ppt,pptx,rar,svg,tab,txt,vsd,vxd,wav,wma,wmv,xls,xlsx,xml,zip",
                    trackExternalLinks: !0,
                    linkInternalFilters: ".wired.com,javascript:",
                    linkLeaveQueryString: !1,
                    dynamicVariablePrefix: "D=",
                    eVar2: "%Page Name%",
                    eVar3: "%Content Title%",
                    eVar4: "%Content ID%",
                    eVar5: "%Content Type%",
                    eVar6: "%Site Section%",
                    eVar7: "%Sub Section%",
                    eVar32: "%Pagination/Slide #%",
                    eVar35: "%Previous Content Type%",
                    eVar55: "%Contributor%",
                    eVar60: "%Content Length%",
                    eVar61: "%Time Since Published%",
                    eVar62: "%Publish Date%",
                    eVar65: "%Brand%",
                    eVar74: "%Content Source%",
                    eVar8: "%Last Modified Date%",
                    eVar58: "%articleCount%",
                    prop3: "D=v3",
                    prop4: "D=v4",
                    prop5: "D=v5",
                    prop6: "D=v6",
                    prop7: "D=v7",
                    prop32: "D=v32",
                    prop35: "D=v35",
                    prop55: "D=v55",
                    prop60: "D=v60",
                    prop61: "D=v61",
                    prop62: "D=v62",
                    prop65: "D=v65",
                    prop70: "%App Version%",
                    prop74: "D=v74",
                    prop8: "D=v8"
                },
                customInit: function(i) {
                    function a(n) {
                        function i() {
                            return l.amg_user_partner || ""
                        }

                        function a() {
                            return l.CN_xid || ""
                        }

                        function s() {
                            return l._wired_logged_in ? "logged in" : "not logged in"
                        }

                        function o() {
                            return l.aam_uuid || ""
                        }
                        location.search && (n.eVar1 = n.prop1 = location.search.split("?s=")[1], n.events = n.apl(n.events, "event1", ",", 2));
                        var l = {};
                        e.document.cookie.split("; ").forEach(function(e) {
                            e.length > 0 && (e = e.split("="), l[e[0]] = decodeURIComponent(e[1]))
                        }), n.eVar16 = n.prop16 = s(), n.eVar52 = n.prop52 = i(), n.eVar24 = a(), n.eVar108 = o(), n.campaign && (n.eVar15 = n.eVar20 = "D=v0"), n.events = n.apl(n.events, "event2", ",", 2), n.eVar10 || (n.eVar10 = n.Util.getQueryParam("intcid"), n.eVar10 = n.getValOnce(n.eVar10, "s_eVar10", 0)), n.ActionDepthTest && (n.pdvalue = n.getActionDepth("s_depth"), 5 == n.pdvalue && (n.events = n.apl(n.events, "event26", ",", 2)), 1 == n.pdvalue && (n.events = n.apl(n.events, "event28", ",", 2)), n.ActionDepthTest = !1), n.d_url = n.downloadLinkHandler(n.linkDownloadFileTypes), n.d_url && (n.events = n.apl(n.events, "event18", ",", 2), n.linkTrackVars = "events", n.linkTrackEvents = "event18,");
                        var c = n.getTimeSpent("event82");
                        if (c && (n.events = n.apl(n.events, c, ",", 2)), n.socialPlatforms("eVar71"), n.prop68 = n.eVar68 = n.getPreviousValue(n.pageName, "s_ppn"), n.prop35 = n.eVar35 = n.getPreviousValue(n.eVar5, "s_pct"), 1 == n.pdvalue && localStorage.cId && localStorage.removeItem("cId"), n.eVar56 = r(), n.prop56 = "D=v56", n.eVar51 = n.getRwd(!0, 750, 980), n.prop51 = "D=v51", n.eVar23 = n.getNewRepeat(), n.prop23 = "D=v23", n.eVar11 = n.getTimeParting("n", "-5"), n.prop11 = "D=v11", n.referrer = _satellite.getVar("Custom Referrer"), n.isReferrer = n.referrer ? n.referrer : t.referrer, n.isReferrer) {
                            for (n.noQReferrer = n.isReferrer.indexOf("?") > -1 ? n.isReferrer.substring(0, n.isReferrer.indexOf("?")) : n.isReferrer, n.refArr = n.split(n.noQReferrer, "/"), n.refSub = n.refArr.length > 1 ? n.refArr[2].toLowerCase() : n.noQReferrer.toLowerCase(), n.lnkIntFltArray = n.split(n.linkInternalFilters, ","), n.lnkIntFltArrLen = n.lnkIntFltArray.length - 1, n.qI = 0; n.qI <= n.lnkIntFltArrLen && (!n.lnkIntFltArray[n.qI] || (n.inFilts = -1 != n.refSub.indexOf(n.lnkIntFltArray[n.qI]), !n.inFilts)); n.qI++);
                            "undefined" != typeof n.inFilts && 0 == n.inFilts && (n.refSubArr = n.refSub.split("."), n.refSubArr.length > 2 ? "com" == n.refSubArr[n.refSubArr.length - 2] || "co" == n.refSubArr[n.refSubArr.length - 2] ? n.eVar39 = n.refSubArr[n.refSubArr.length - 3] + "." + n.refSubArr[n.refSubArr.length - 2] + "." + n.refSubArr[n.refSubArr.length - 1] : n.eVar39 = n.refSubArr[n.refSubArr.length - 2] + "." + n.refSubArr[n.refSubArr.length - 1] : n.eVar39 = n.refSub, n.eVar30 = "www." == n.refSub.substring(0, 4) ? n.refSub.substring(4) : n.refSub)
                        }
                        n.eVar30 = n.getAndPersistValue(n.eVar30, "v30", 0), n.eVar39 = n.getAndPersistValue(n.eVar39, "v39", 0), n.prop39 = n.eVar39 ? "D=v39" : "", n.prop30 = n.eVar30 ? "D=v30" : ""
                    }

                    function r() {
                        if (!e.s_loadT) {
                            var t = (new Date).getTime(),
                                n = e.performance ? performance.timing : 0,
                                i = n ? n.requestStart : e.inHeadTS || 0;
                            s_loadT = i ? ((t - i) / 1e3).toFixed(1) : ""
                        }
                        return s_loadT < 0 ? "" : s_loadT
                    }
                    if (function(n) {
                            function i(e, n) {
                                var i = t,
                                    a = "script",
                                    r = i.getElementsByTagName(a)[0];
                                r || (r = i.head);
                                var s = i.createElement(a);
                                s.async = !0, s.id = e, s.src = n, r.parentNode.insertBefore(s, r)
                            }

                            function a() {
                                var t = e.location.hostname.split(".");
                                if (2 === t.length) s = t[0];
                                else if (t.length > 2) {
                                    var n = t[t.length - 2];
                                    s = "com" === n || "co" === n ? t[t.length - 3] : n
                                }
                                return s
                            }
                            e.evidon = {}, e.evidon.id = n;
                            var r = "//c.evidon.com/",
                                s = a(),
                                o = r + "sitenotice/";
                            i("evidon-notice", o + "evidon-sitenotice-tag.js", !1), i("evidon-location", r + "geo/country.js", !0), i("evidon-themes", o + n + "/snthemes.js", !0), s && i("evidon-settings", o + n + "/" + s + "/settings.js", !0), e.evidon.priorConsentCallback = function() {}, e.evidon.closeCallback = function() {}, e.evidon.consentWithdrawnCallback = function() {}, e.evidon.consentDeclinedCallback = function() {}
                        }(4419), "https://www.wired.com/tag/next-mobile-economy/" === e.location.href) {
                        var s = t.createElement("IMG");
                        s.src = "https://condenast.demdex.net/event?d_sid=10071664", s.height = 0, s.width = 0, t.body.appendChild(s)
                    }
                    var o;
                    if (typeof jQuery !== n && "undefined" != typeof jQuery && jQuery || ((o = t.createElement("script")).type = "text/javascript", o.async = !0, o.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js", (t.getElementsByTagName("head")[0] || t.getElementsByTagName("body")[0]).appendChild(o)), setTimeout(function() {
                            (typeof jQuery !== n || "undefined" != typeof jQuery || jQuery) && (jQuery("#related").is(":visible") && (jQuery(".story-list.border-t.no-underline.list-none.no-marg").one("mouseenter", function() {
                                jQuery(".clearfix.pad.no-hover").one("click", function() {
                                    e.s.linkTrackVars = "events,eVar5,eVar6,eVar7,eVar10,eVar39,eVar83", e.s.linkTrackEvents = "event7", e.s.events = "event7", e.s.eVar5 = digitalData.pageType, e.s.eVar6 = digitalData.section, e.s.eVar7 = digitalData.subsection, e.s.eVar10 = "recirc_relatedStories", e.s.eVar83 = jQuery(this).find(".title.exchange-sm").text(), e.s.eVar39 = t.referrer, console.log(jQuery(this).find(".title.exchange-sm").text()), e.s.tl(this, "o", "wired - related rirc click")
                                }), console.log("relatedItems")
                            }), console.log("related stories module")), console.log("jQuery loaded"))
                        }, 2e3), "Error" == _satellite.getVar("Content Type") && (i.events = "event9", i.pageName = i.eVar2 = t.URL), "Search" == _satellite.getVar("Content Type") && (i.events = "event1", i.prop2 = _satellite.getVar("Num of Search Results"), i.prop1 = i.eVar1 = _satellite.getVar("Search Terms")), i.prop50 = i.list2 = _satellite.getVar("Onsite Keywords"), i.ActionDepthTest = !0, i.socAuthVar = "eVar72", i.linkInternalFilters = _satellite.getVar("Internal Filters"), i.linkTrackVars = "evar21,evar39,evar40,prop34,events", i.linkTrackEvents = "event3,event4,event10,event11,event12,event13,event20,event21,event22,event23,event24,event25,event29,event30,event31,event32,event37,event38", i._tpDST = {
                            2012: "3/11,11/4",
                            2013: "3/10,11/3",
                            2014: "3/9,11/2",
                            2015: "3/8,11/1",
                            2016: "3/13,11/6",
                            2017: "3/12,11/5",
                            2018: "3/11,11/4",
                            2019: "3/10,11/3"
                        }, r(), i.usePlugins = !0, i.doPlugins = a, i.socialPlatforms = new Function("a", "var s=this,g,K,D,E,F,i;g=s.referrer?s.referrer:document.referrer;g=g.toLowerCase();K=s.split(s.socPlatList,'|');for(i=0;i<K.length;i++){D=s.split(K[i],'>');if(g.indexOf(D[0])!=-1){if(a){s[a]=D[1];}}}"), i.socPlatList = "facebook.com>Facebook|twitter.com>Twitter|t.co/>Twitter|youtube.com>Youtube|clipmarks.com>Clipmarks|dailymotion.com>Dailymotion|delicious.com>Delicious|digg.com>Digg|diigo.com>Diigo|flickr.com>Flickr|flixster.com>Flixster|fotolog.com>Fotolog|friendfeed.com>FriendFeed|google.com/buzz>Google Buzz|buzz.googleapis.com>Google Buzz|plus.google.com>Google+|hulu.com>Hulu|identi.ca>identi.ca|ilike.com>iLike|intensedebate.com>IntenseDebate|myspace.com>MySpace|newsgator.com>Newsgator|photobucket.com>Photobucket|plurk.com>Plurk|slideshare.net>SlideShare|smugmug.com>SmugMug|stumbleupon.com>StumbleUpon|tumblr.com>Tumblr|vimeo.com>Vimeo|wordpress.com>WordPress|xanga.com>Xanga|metacafe.com>Metacafe|pinterest.com>Pinterest", i.getTimeSpent = function(e) {
                            var t = this;
                            if (console.log(t), typeof t.linkType === n || "" != t.linkType || ("" == t.linkType || 0 == t.linkType) && ("" == t.eo || typeof t.eo === n || t.eo == n)) {
                                if (t.linkTrackVars = t.apl(t.linkTrackVars, "events", ",", 2), t.linkTrackEvents = t.apl(t.linkTrackEvents, e, ",", 2), previousTime = t.c_r("timeSpent"), currentTime = (new Date).getTime(), t.events && t.events.indexOf(e + "=") > -1) {
                                    var i = t.split(t.events, ",");
                                    if (i.length > 0) {
                                        t.events = "";
                                        for (var a = 0; a < i.length; a++) - 1 == i[a].indexOf(e + "=") && (t.events = t.events + i[a] + ",");
                                        t.events = t.events.substring(0, t.events.length - 1)
                                    }
                                }
                                if ("" == previousTime) return t.c_w("timeSpent", currentTime), e + "=0";
                                var r = Math.round((currentTime - previousTime) / 1e3);
                                return r > 1800 || r < 0 ? (t.c_w("timeSpent", currentTime), e + "=0") : (t.c_w("timeSpent", currentTime), e + "=" + r)
                            }
                        }, i.apl = new Function("l", "v", "d", "u", "var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l"), i.getAndPersistValue = new Function("v", "c", "e", "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(v)s.c_w(c,v,e?a:0);return s.c_r(c);"), i.getActionDepth = new Function("c", "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(!s.c_r(c)){v=1}if(s.c_r(c)){v=s.c_r(c);v++}if(!s.c_w(c,v,t)){s.c_w(c,v,0)}return v;"), i.downloadLinkHandler = new Function("p", "e", "var s=this,o=s.p_gh(),h=o.href,n='linkDownloadFileTypes',i,t;if(!h||(s.linkType&&(h||s.linkName)))return'';i=h.indexOf('?');t=s[n];s[n]=p?p:t;if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return e?o:h;"), i.p_gh = new Function("", "var s=this;if(!s.eo&&!s.lnk)return'';var o=s.eo?s.eo:s.lnk,y=s.ot(o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s.ot(o);n=s.oid(o);x=o.s_oidt;}}return o?o:'';"), i.exitLinkHandler = new Function("p", "e", "var s=this,o=s.p_gh(),h=o.href,n='linkInternalFilters',i,t;if(!h||(s.linkType&&(h||s.linkName)))return'';i=h.indexOf('?');t=s[n];s[n]=p?p:t;h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s.lt(h)=='e')s.linkType='e';else h='';s[n]=t;return e?o:h;"), i.p_gh = new Function("", "var s=this;if(!s.eo&&!s.lnk)return'';var o=s.eo?s.eo:s.lnk,y=s.ot(o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s.ot(o);n=s.oid(o);x=o.s_oidt;}}return o?o:'';"), i.linkHandler = new Function("p", "t", "e", "var s=this,o=s.p_gh(),h=o.href,i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkName)))return'';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkName=l=='[['?'':l;s.linkType=t;return e?o:h;}return'';"), i.p_gh = new Function("", "var s=this;if(!s.eo&&!s.lnk)return'';var o=s.eo?s.eo:s.lnk,y=s.ot(o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return'';y=s.ot(o);n=s.oid(o);x=o.s_oidt;}}return o?o:'';"), i.p_gn = new Function("t", "h", "var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x=t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}return 0;"), i.pt = new Function("x", "d", "f", "a", "var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return'';"), i.getPreviousValue = new Function("v", "c", "el", "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"), i.dedupeReferrer = new Function("c", "b", "var s=this,a,g,i,j,k,l,m,n,o;g=s.referrer?s.referrer:document.referrer;g=g.toLowerCase();if(g){i=g.indexOf('?')>-1?g.indexOf('?'):g.length;j=g.substring(0,i);k=s.linkInternalFilters.toLowerCase();k=s.split(k,',');l=k.length;for(m=0;m<l;m++){n=j.indexOf(k[m])>-1?g:'';if(n)o=n}if(!o){c=c?c:'_dr';b=b?b-1:'1';a=g;a=s.getValOnce(a,c,0);if(a){return a}else{return k[b]}}}"), i.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a"), i.getValOnce = new Function("v", "c", "e", "t", "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?60000:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e==0?0:a);}return v==k?'':v"), i.dimo = new Function("m", "y", "var d=new Date(y,m+1,0); return d.getDate();"), i.endof = new Function("x", "var t = new Date(); t.setHours(0); t.setMinutes(0);t.setSeconds(0); if(x=='m') d=s.dimo(t.getMonth(),t.getFullYear()) - t.getDate() + 1;else if(x=='w') d=7-t.getDay(); else d=1; t.setDate(t.getDate()+d); return t;"), i.getVisitNumCustom = new Function("tp", "var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum_'+tp,c2='sinvisit_'+tp,eo=s.endof(tp),y=eo.getTime();e.setTime(y);cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else return 'unknown visit number';}else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w(c,y+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return 1;}}"), i.getPercentPageViewed = new Function("n", "var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load','unload','scroll','resize','zoom','keyup','mouseup','touchend','orientationchange','pan'],K='s_ppv',P=K+'l',I=n||s.pageName||document.location.href;W.s_Obj=s;if(!W.s_PPVevent){s.s_PPVg=function(n,o){var c=s.c_r(o?P:K)||'',a=c.indexOf(',')>-1?c.split(',',10):[''],i;a[0]=o?unescape(a[0]||''):I;for(i=1;i<9&&(i<a.length||!o);i++)a[i]=a[i]?parseInt(a[i])||0:0;if(a.length>9||!o)a[9]=a[9]&&a[9]!='L'&&a[9]!='LP'&&a[9]!='PL'?'P':a[9];return a};s.c_w(P,s.c_r(K)||'');s.c_w(K,escape(I)+',0,0,0,0,0,0,0,0');W.s_PPVevent=function(e){var W=window,D=document||{},B=D.body,E=D.documentElement||{},S=window.screen||{},Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWidth',Hc='clientHeight',M=Math,C=100,J='object',N='number',Z=',',s=W.s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.substring(2);if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0}if(s&&typeof s==J&&B&&typeof B==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho],B[Hc]||E[Hc]||1),X=W.innerWidth||E[Wc]||B[Wc]||1,Y=W.innerHeight||E[Hc]||B[Hc]||1,x=S.width||1,y=S.height||1,r=M.round(C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.round(C*b/h):1,O=W.orientation,o=!isNaN(O)?M.abs(O)%180:Y>X?0:90,a=s.s_PPVg(n),L=(e=='load')||(a[1]<1),t,V=function(u,v,f,n){v=typeof v!=N?u:v;v=f||(u>v)?u:v;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|iPad|iPhone)').exec((window.navigator&&navigator.userAgent)||'')&&o){t=x;x=y;y=t}o=o?'L':'P';a[9]=L||!a[9]?o:a[9].substring(0,1);if(a[9]!='L'&&a[9]!='P')a[9]=o;s.c_w(K,escape(a[0])+Z+V(a[1],p,!L)+Z+V(a[2],p,L)+Z+V(a[3],b,L,1)+Z+X+Z+Y+Z+x+Z+y+Z+r+Z+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg(n,1);return!arguments.length||n=='-'?a[1]:a"), i.getRwd = function(n, i, a) {
                            var r, s = e.innerWidth || t.documentElement.clientWidth || t.body.clientWidth,
                                o = e.innerHeight || t.documentElement.clientHeight || t.body.clientHeight;
                            return n ? (s < i ? r = "phone layout" : s >= a ? r = "desktop layout" : s >= i && s < a && (r = "tablet layout"), r = r + ":" + s + "x" + o) : r = "not rwd page:" + s + "x" + o, r
                        }, i.getNewRepeat = new Function("d", "cn", "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}"), i.getTimeParting = new Function("h", "z", "var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMonth()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYear());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de){z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d.getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' PM';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}"), i.dedupeReferrers = new Function("c", "b", "var s=this,a,g,i,j,k,l,m,n,o;g=s.referrer?s.referrer:document.referrer;g=g.toLowerCase();if(g){i=g.indexOf('?')>-1?g.indexOf('?'):g.length;j=g.substring(0,i);k=s.linkInternalFilters.toLowerCase();k=s.split(k,',');l=k.length;for(m=0;m<l;m++){n=j.indexOf(k[m])>-1?g:'';if(n)o=n}if(!o){c=c?c:'_dr';b=b?b-1:'1';a=g;a=s.getValOnce(a,c,0);if(a){return a}else{return k[b]}}}"), i.loadModule("Integrate"), i.Integrate.onLoad = function() {}, "undefined" != typeof e.digitalData && "undefined" != typeof e.digitalData.pageType && "app-shell" == e.digitalData.pageType.toLowerCase()) return _satellite.notify("Aborting default page view tracking due to app shell", 1), !1
                }
            }
        },
        pageLoadRules: [{
            name: "Branded Content - Knotch",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5b47773d64746d1444000003.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/brandlab/i]
                }
            },
            event: "pagetop"
        }, {
            name: "Get monthly visit number",
            trigger: [{
                engine: "sc",
                command: "customSetup",
                arguments: [function(e, n) {
                    function i(e) {
                        function n(e, t) {
                            return new Date(t, e + 1, 0).getDate()
                        }

                        function i(e) {
                            var t = new Date;
                            return t.setHours(0), t.setMinutes(0), t.setSeconds(0), d = "m" == e ? n(t.getMonth(), t.getFullYear()) - t.getDate() + 1 : "w" == e ? 7 - t.getDay() : 1, t.setDate(t.getDate() + d), t
                        }

                        function a(e, n) {
                            var i = (n = t.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)")) ? n.pop() : "";
                            return decodeURIComponent(i)
                        }

                        function r(e, n, i) {
                            if (i) var a = "; expires=" + i.toGMTString();
                            else a = "";
                            t.cookie = e + "=" + encodeURIComponent(n) + a + "; path=/"
                        }
                        var s, o = new Date,
                            l = o.getTime(),
                            c = "s_vnum_" + e,
                            u = "sinvisit_" + e,
                            f = i(e).getTime();
                        if (o.setTime(f), s = a(c)) var h, g = s.indexOf("&vn="),
                            p = s.substring(g + 4, s.length);
                        return a(u) ? p ? (o.setTime(l + 18e5), r(u, "true", o), p) : "unknown visit number" : p ? (p++, h = s.substring(0, g), o.setTime(h), r(c, h + "&vn=" + p, o), o.setTime(l + 18e5), r(u, "true", o), p) : (r(c, f + "&vn=1", o), o.setTime(l + 18e5), r(u, "true", o), 1)
                    }
                    n.prop17 = n.eVar17 = i("m")
                }]
            }],
            event: "pagebottom"
        }, {
            name: "Track paywall variables",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar28: "%Paywall Status%",
                    eVar44: "%Paywall Monthly Content Count%"
                }]
            }],
            event: "pagebottom"
        }],
        rules: [{
            name: "Paywall: Forgot Password Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "paywall: forgot password click",
                    setVars: {
                        eVar10: "paywall|forgot password click",
                        eVar17: "%Monthly Visit Number%",
                        eVar2: "%Page Name%",
                        eVar3: "%Content Title%",
                        eVar39: "%Referring Domain%",
                        eVar4: "%Content ID%",
                        eVar44: "%Paywall Monthly Content Count%",
                        eVar5: "%Content Type%",
                        eVar55: "%Contributor%",
                        eVar58: "%articleCount%",
                        eVar6: "%Site Section%",
                        eVar61: "%Time Since Published%",
                        eVar62: "%Publish Date%",
                        eVar7: "%Sub Section%"
                    },
                    customSetup: function(e, t) {
                        t.list2 = _satellite.getVar("Onsite Keywords"), t.linkTrackVars = t.linkTrackVars || "", "" != t.linkTrackVars && (t.linkTrackVars += ","), t.linkTrackVars += _satellite.getVar("linkTrackVars Common"), _satellite.notify("*** list2 = " + t.list2 + ", linkTrackVars = " + t.linkTrackVars, 1)
                    },
                    addEvent: ["event7"]
                }]
            }, {
                command: "delayActivateLink"
            }],
            selector: "div.sign-in-form-component__password-link a, div.sign-in-form-component__error-link a",
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Paywall: Link Subscription Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "paywall: link subscription click",
                    setVars: {
                        eVar10: "paywall|link subscription click",
                        eVar17: "%Monthly Visit Number%",
                        eVar2: "%Page Name%",
                        eVar3: "%Content Title%",
                        eVar39: "%Referring Domain%",
                        eVar4: "%Content ID%",
                        eVar44: "%Paywall Monthly Content Count%",
                        eVar5: "%Content Type%",
                        eVar55: "%Contributor%",
                        eVar58: "%articleCount%",
                        eVar6: "%Site Section%",
                        eVar61: "%Time Since Published%",
                        eVar62: "%Publish Date%",
                        eVar7: "%Sub Section%"
                    },
                    customSetup: function(e, t) {
                        t.list2 = _satellite.getVar("Onsite Keywords"), t.linkTrackVars = t.linkTrackVars || "", "" != t.linkTrackVars && (t.linkTrackVars += ","), t.linkTrackVars += _satellite.getVar("linkTrackVars Common"), _satellite.notify("*** list2 = " + t.list2 + ", linkTrackVars = " + t.linkTrackVars, 1)
                    },
                    addEvent: ["event7"]
                }]
            }, {
                command: "delayActivateLink"
            }],
            selector: "input.link-form-component__link-button",
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }, {
            name: "Paywall: Nav Login Click",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "paywall: nav login click",
                    setVars: {
                        eVar10: "paywall|nav login click",
                        eVar17: "%Monthly Visit Number%",
                        eVar2: "%Page Name%",
                        eVar3: "%Content Title%",
                        eVar39: "%Referring Domain%",
                        eVar4: "%Content ID%",
                        eVar44: "%Paywall Monthly Content Count%",
                        eVar5: "%Content Type%",
                        eVar55: "%Contributor%",
                        eVar58: "%articleCount%",
                        eVar6: "%Site Section%",
                        eVar61: "%Time Since Published%",
                        eVar62: "%Publish Date%",
                        eVar7: "%Sub Section%"
                    },
                    customSetup: function(e, t) {
                        t.list2 = _satellite.getVar("Onsite Keywords"), t.linkTrackVars = t.linkTrackVars || "", "" != t.linkTrackVars && (t.linkTrackVars += ","), t.linkTrackVars += _satellite.getVar("linkTrackVars Common"), _satellite.notify("*** list2 = " + t.list2 + ", linkTrackVars = " + t.linkTrackVars, 1)
                    },
                    addEvent: ["event7"]
                }]
            }, {
                command: "delayActivateLink"
            }],
            selector: "a.sign-in-link-component__link",
            eventHandlerOnElement: !0,
            event: "click",
            bubbleFireIfParent: !0,
            bubbleFireIfChildFired: !0,
            bubbleStop: !1
        }],
        directCallRules: [{
            name: "adBlock",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "adBlock",
                    setVars: {
                        eVar10: "adBlock",
                        eVar39: "%Referring Domain%"
                    },
                    addEvent: ["event48"]
                }]
            }]
        }, {
            name: "HeliosExposed",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    setVars: {
                        eVar10: "HeliosExposed",
                        eVar2: "%Page Name%",
                        eVar39: "%Referring Domain%",
                        eVar5: "%Content Type%",
                        channel: "%Site Section%",
                        pageURL: "%Page Name%"
                    },
                    addEvent: ["event27"]
                }]
            }]
        }, {
            name: "NLInterstitialImpression",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "NLInterstitialImpression",
                    setVars: {
                        eVar10: "NLInterstitialImpression",
                        eVar39: "%Referring Domain%"
                    },
                    addEvent: ["event27"]
                }]
            }]
        }, {
            name: "nlinterstitial",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "NL Signup Interstitial",
                    setVars: {
                        eVar10: "NL Interstitial",
                        eVar39: "%Referring Domain%"
                    },
                    addEvent: ["event11"]
                }]
            }]
        }, {
            name: "barrierfull",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "paywall: full barrier",
                    setVars: {
                        eVar17: "%Monthly Visit Number%",
                        eVar2: "%Page Name%",
                        eVar3: "%Content Title%",
                        eVar39: "%Referring Domain%",
                        eVar4: "%Content ID%",
                        eVar44: "%Paywall Monthly Content Count%",
                        eVar5: "%Content Type%",
                        eVar55: "%Contributor%",
                        eVar58: "%articleCount%",
                        eVar6: "%Site Section%",
                        eVar61: "%Time Since Published%",
                        eVar62: "%Publish Date%",
                        eVar7: "%Sub Section%"
                    },
                    customSetup: function(e, t) {
                        t.list2 = _satellite.getVar("Onsite Keywords"), t.linkTrackVars = t.linkTrackVars || "", "" != t.linkTrackVars && (t.linkTrackVars += ","), t.linkTrackVars += _satellite.getVar("linkTrackVars Common"), _satellite.notify("*** list2 = " + t.list2 + ", linkTrackVars = " + t.linkTrackVars, 1)
                    },
                    addEvent: ["event42"]
                }]
            }]
        }, {
            name: "barrierhalf",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "paywall: half barrier",
                    setVars: {
                        eVar17: "%Monthly Visit Number%",
                        eVar2: "%Page Name%",
                        eVar3: "%Content Title%",
                        eVar39: "%Referring Domain%",
                        eVar4: "%Content ID%",
                        eVar44: "%Paywall Monthly Content Count%",
                        eVar5: "%Content Type%",
                        eVar55: "%Contributor%",
                        eVar58: "%articleCount%",
                        eVar6: "%Site Section%",
                        eVar61: "%Time Since Published%",
                        eVar62: "%Publish Date%",
                        eVar7: "%Sub Section%"
                    },
                    customSetup: function(e, t) {
                        t.list2 = _satellite.getVar("Onsite Keywords"), t.linkTrackVars = t.linkTrackVars || "", "" != t.linkTrackVars && (t.linkTrackVars += ","), t.linkTrackVars += _satellite.getVar("linkTrackVars Common"), _satellite.notify("*** list2 = " + t.list2 + ", linkTrackVars = " + t.linkTrackVars, 1)
                    },
                    addEvent: ["event41"]
                }]
            }]
        }, {
            name: "login",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "paywall: login",
                    setVars: {
                        eVar17: "%Monthly Visit Number%",
                        eVar2: "%Page Name%",
                        eVar3: "%Content Title%",
                        eVar39: "%Referring Domain%",
                        eVar4: "%Content ID%",
                        eVar44: "%Paywall Monthly Content Count%",
                        eVar5: "%Content Type%",
                        eVar55: "%Contributor%",
                        eVar58: "%articleCount%",
                        eVar6: "%Site Section%",
                        eVar61: "%Time Since Published%",
                        eVar62: "%Publish Date%",
                        eVar7: "%Sub Section%"
                    },
                    customSetup: function(e, t) {
                        t.list2 = _satellite.getVar("Onsite Keywords"), t.linkTrackVars = t.linkTrackVars || "", "" != t.linkTrackVars && (t.linkTrackVars += ","), t.linkTrackVars += _satellite.getVar("linkTrackVars Common"), _satellite.notify("*** list2 = " + t.list2 + ", linkTrackVars = " + t.linkTrackVars, 1)
                    },
                    addEvent: ["event21"]
                }]
            }]
        }, {
            name: "registration",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "paywall: site registration",
                    setVars: {
                        eVar17: "%Monthly Visit Number%",
                        eVar2: "%Page Name%",
                        eVar3: "%Content Title%",
                        eVar39: "%Referring Domain%",
                        eVar4: "%Content ID%",
                        eVar44: "%Paywall Monthly Content Count%",
                        eVar5: "%Content Type%",
                        eVar55: "%Contributor%",
                        eVar58: "%articleCount%",
                        eVar6: "%Site Section%",
                        eVar61: "%Time Since Published%",
                        eVar62: "%Publish Date%",
                        eVar7: "%Sub Section%"
                    },
                    customSetup: function(e, t) {
                        t.list2 = _satellite.getVar("Onsite Keywords"), t.linkTrackVars = t.linkTrackVars || "", "" != t.linkTrackVars && (t.linkTrackVars += ","), t.linkTrackVars += _satellite.getVar("linkTrackVars Common"), _satellite.notify("*** list2 = " + t.list2 + ", linkTrackVars = " + t.linkTrackVars, 1)
                    },
                    addEvent: ["event3"]
                }]
            }]
        }, {
            name: "link-sub",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "paywall: subscription link success",
                    setVars: {
                        eVar17: "%Monthly Visit Number%",
                        eVar2: "%Page Name%",
                        eVar3: "%Content Title%",
                        eVar39: "%Referring Domain%",
                        eVar4: "%Content ID%",
                        eVar44: "%Paywall Monthly Content Count%",
                        eVar5: "%Content Type%",
                        eVar55: "%Contributor%",
                        eVar58: "%articleCount%",
                        eVar6: "%Site Section%",
                        eVar61: "%Time Since Published%",
                        eVar62: "%Publish Date%",
                        eVar7: "%Sub Section%"
                    },
                    customSetup: function(e, t) {
                        t.list2 = _satellite.getVar("Onsite Keywords"), t.linkTrackVars = t.linkTrackVars || "", "" != t.linkTrackVars && (t.linkTrackVars += ","), t.linkTrackVars += _satellite.getVar("linkTrackVars Common"), _satellite.notify("*** list2 = " + t.list2 + ", linkTrackVars = " + t.linkTrackVars, 1)
                    },
                    addEvent: ["event20"]
                }]
            }]
        }, {
            name: "adTS",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    setVars: {
                        eVar10: "timeSpent|%Time Spent%"
                    },
                    addEvent: ["event27"]
                }]
            }]
        }, {
            name: "adBlockReversion",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "adBlockReversion",
                    setVars: {
                        eVar10: "adBlockReversion",
                        eVar39: "%Referring Domain%"
                    },
                    addEvent: ["event41"]
                }]
            }]
        }, {
            name: "adBlockWhitelist",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "adBlockWhitelist",
                    setVars: {
                        eVar10: "adBlockWhitelist",
                        eVar39: "%Referring Domain%"
                    },
                    addEvent: ["event41"]
                }]
            }]
        }],
        settings: {
            trackInternalLinks: !0,
            libraryName: "satelliteLib-5e0259aff0b35c55ae1387e43a61e5902ea0cdb6",
            isStaging: !1,
            allowGATTcalls: !1,
            downloadExtensions: /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
            notifications: !1,
            utilVisible: !1,
            domainList: ["wired.com"],
            scriptDir: "6372cf21ef88ee60bc2977a4898dcb5c7945a212/scripts/",
            tagTimeout: 3e3
        },
        data: {
            URI: t.location.pathname + t.location.search,
            browser: {},
            cartItems: [],
            revenue: "",
            host: {
                http: "assets.adobedtm.com",
                https: "assets.adobedtm.com"
            }
        },
        dataElements: {
            AAM_UUID: {
                cookie: "aam_uuid",
                storeLength: "visitor"
            },
            "App Version": {
                jsVariable: "digitalData.appVersion",
                storeLength: "pageview"
            },
            articleCount: {
                customJS: function() {
                    var e = digitalData.contentID || "null",
                        t = digitalData.pageType || "null",
                        i = [];
                    "Homepage" !== t && "Index" !== t && "Subindex" !== t && "Search" !== t && "null" !== e && e !== n ? (localStorage.getItem("cId") ? ((i = localStorage.cId.split("|")).push(e), e = i.join("|")) : ((i = []).push(e), e = i.join("|")), localStorage.setItem("cId", e)) : localStorage.cId && (i = (i = localStorage.getItem("cId")).split("|"));
                    for (var a = (i = i.filter(String)).filter(function(e, t, n) {
                            return n.indexOf(e) == t
                        }), r = {}, s = 0; s < a.length; s++) r[a[s]] = 1 + (r[a[s]] || 0);
                    return s
                },
                storeLength: "pageview"
            },
            Brand: {
                jsVariable: "digitalData.brand",
                "default": "null",
                storeLength: "pageview"
            },
            "Content ID": {
                customJS: function() {
                    try {
                        return digitalData.contentID
                    } catch (e) {
                        return "null"
                    }
                },
                "default": "null",
                storeLength: "pageview"
            },
            "Content Length": {
                jsVariable: "digitalData.contentLength",
                "default": "null",
                storeLength: "pageview"
            },
            "Content Source": {
                jsVariable: "digitalData.contentSource",
                "default": "null",
                storeLength: "pageview"
            },
            "Content Title": {
                jsVariable: "digitalData.display",
                "default": "null",
                storeLength: "pageview"
            },
            "Content Type": {
                jsVariable: "digitalData.pageType",
                "default": "null",
                storeLength: "pageview"
            },
            Contributor: {
                jsVariable: "digitalData.contributor",
                "default": "null",
                storeLength: "pageview"
            },
            "Custom Referrer": {
                customJS: function() {
                    try {
                        return e.digitalData.pwaReferer ? e.digitalData.pwaReferer : e.document.referrer
                    } catch (t) {
                        return e.document.referrer
                    }
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            Errors: {
                jsVariable: "digitalData.errors",
                "default": "null",
                storeLength: "pageview"
            },
            "Infinity ID": {
                cookie: "CN_xid",
                storeLength: "pageview"
            },
            "Internal Filters": {
                customJS: function() {
                    return "wired.com,pwa.wired.com,traffic.outbrain.com,advancemags.com,javascript:"
                },
                storeLength: "pageview"
            },
            "Last Modified Date": {
                jsVariable: "digitalData.modifiedDate",
                "default": "null",
                storeLength: "pageview"
            },
            "linkTrackVars Common": {
                customJS: function() {
                    var e = [];
                    return e.push("eVar2"), e.push("eVar3"), e.push("eVar4"), e.push("eVar5"), e.push("eVar6"), e.push("eVar7"), e.push("eVar10"), e.push("eVar17"), e.push("eVar39"), e.push("eVar44"), e.push("eVar50"), e.push("eVar55"), e.push("eVar57"), e.push("eVar58"), e.push("eVar61"), e.push("eVar62"), e.push("list2"), e.push("campaign"), e.join()
                },
                storeLength: "pageview"
            },
            "Login Status": {
                customJS: function() {
                    function t() {
                        return n._wired_logged_in ? "logged in" : "not logged in"
                    }
                    var n = {};
                    return e.document.cookie.split("; ").forEach(function(e) {
                        e.length > 0 && (e = e.split("="), n[e[0]] = decodeURIComponent(e[1]))
                    }), t()
                },
                "default": "not logged in",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Monthly Visit Number": {
                jsVariable: "window.s.eVar17",
                storeLength: "session"
            },
            newVsRepeat: {
                jsVariable: "window.s.eVar23",
                storeLength: "pageview"
            },
            "Num of Search Results": {
                jsVariable: "digitalData.numOfSearchResults",
                "default": "null",
                storeLength: "pageview"
            },
            "Onsite Keywords": {
                jsVariable: "digitalData.keywords.display",
                "default": "null",
                storeLength: "pageview"
            },
            "Page Name": {
                customJS: function() {
                    try {
                        return "undefined" != typeof e.digitalData.canonical ? e.digitalData.canonical : e.document.location.href
                    } catch (t) {
                        return e.document.location.href
                    }
                },
                storeLength: "pageview"
            },
            "Pagination/Slide #": {
                jsVariable: "digitalData.pageValue",
                "default": "null",
                storeLength: "pageview"
            },
            ParentURLEncoded: {
                customJS: function() {
                    var e = parent.document.location.href;
                    return encodeURIComponent(e)
                },
                storeLength: "pageview"
            },
            "Paywall Login Status": {
                customJS: function() {
                    try {
                        return "undefined" != typeof digitalData.loginStatus && "logged in" == digitalData.loginStatus.toLowerCase() ? "logged in" : "not logged in"
                    } catch (e) {
                        return "not logged in"
                    }
                },
                "default": "not logged in",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Paywall Monthly Content Count": {
                jsVariable: "digitalData.articleNumber",
                storeLength: "pageview"
            },
            "Paywall Status": {
                customJS: function() {
                    try {
                        if ("undefined" != typeof digitalData.accessPaywall) return digitalData.accessPaywall
                    } catch (e) {}
                },
                "default": "n/a",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Polar Page URL": {
                customJS: function() {
                    t.querySelector('[property~="og:url"]').getAttribute("content")
                },
                storeLength: "pageview"
            },
            "Polar Sponsored Page": {
                queryParam: "mvi",
                storeLength: "pageview",
                ignoreCase: 1
            },
            "Previous Content Type": {
                jsVariable: "s.eVar35",
                "default": "null",
                storeLength: "pageview"
            },
            "Publish Date": {
                jsVariable: "digitalData.publishDate",
                "default": "null",
                storeLength: "pageview"
            },
            "Referring Domain": {
                jsVariable: "s.eVar39",
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Referring Domain - September 13, 2016 02:47:54 PM": {
                jsVariable: "s.eVar39",
                storeLength: "pageview"
            },
            "Search Terms": {
                jsVariable: "digitalData.searchTerms",
                "default": "null",
                storeLength: "pageview"
            },
            "Site Section": {
                jsVariable: "digitalData.section",
                "default": "null",
                storeLength: "pageview"
            },
            "Sub Section": {
                jsVariable: "digitalData.subsection",
                "default": "null",
                storeLength: "pageview"
            },
            "Time Since Published": {
                customJS: function() {
                    if ("undefined" != typeof digitalData) {
                        var e, t, i = 0,
                            a = 0,
                            r = new Date;
                        if (digitalData.publishDate != n) return (e = digitalData.publishDate) && (t = Math.abs(new Date(r.toISOString()) - new Date(e)), i = Math.floor(t / 36e5), a = Math.floor(i / 24)), i + "h|" + a + "d"
                    }
                },
                "default": "null",
                storeLength: "pageview"
            },
            "Time Spent": {
                jsVariable: "digitalData.ts",
                "default": "null",
                storeLength: "pageview"
            },
            "Unique Content Count": {
                storeLength: "pageview"
            }
        },
        appVersion: "7QN",
        buildDate: "2018-12-04 14:30:40 UTC",
        publishDate: "2018-12-04 14:30:39 UTC"
    })
}(window, document);