// All code and conventions are protected by copyright
! function(e, t, n) {
    function i() {
        L.addEventHandler(e, "orientationchange", i.orientationChange)
    }

    function a(t) {
        t = t || L.rules, this.rules = L.filter(t, function(e) {
            return "inview" === e.event
        }), this.elements = [], this.eventHandler = L.bind(this.track, this), L.addEventHandler(e, "scroll", this.eventHandler), L.addEventHandler(e, "load", this.eventHandler)
    }

    function r() {
        this.rules = L.filter(L.rules, function(e) {
            return "videoplayed" === e.event.substring(0, 11)
        }), this.eventHandler = L.bind(this.onUpdateTime, this)
    }

    function s() {
        L.getToolsByType("nielsen").length > 0 && L.domReady(L.bind(this.initialize, this))
    }

    function o(e) {
        this.delay = 250, this.FB = e, L.domReady(L.bind(function() {
            L.poll(L.bind(this.initialize, this), this.delay, 8)
        }, this))
    }

    function c() {
        this.defineEvents(), this.visibilityApiHasPriority = !0, t.addEventListener ? this.setVisibilityApiPriority(!1) : this.attachDetachOlderEventListeners(!0, t, "focusout");
        L.bindEvent("aftertoolinit", function() {
            L.fireEvent(L.visibility.isHidden() ? "tabblur" : "tabfocus")
        })
    }

    function l() {
        this.lastURL = L.URL(), this._fireIfURIChanged = L.bind(this.fireIfURIChanged, this), this._onPopState = L.bind(this.onPopState, this), this._onHashChange = L.bind(this.onHashChange, this), this._pushState = L.bind(this.pushState, this), this._replaceState = L.bind(this.replaceState, this), this.initialize()
    }

    function u() {
        var e = L.filter(L.rules, function(e) {
            return 0 === e.event.indexOf("dataelementchange")
        });
        this.dataElementsNames = L.map(e, function(e) {
            return e.event.match(/dataelementchange\((.*)\)/i)[1]
        }, this), this.initPolling()
    }

    function d() {
        this.rules = L.filter(L.rules, function(e) {
            return "elementexists" === e.event
        })
    }

    function h() {
        var e = this.eventRegex = /^hover\(([0-9]+)\)$/,
            t = this.rules = [];
        L.each(L.rules, function(n) {
            n.event.match(e) && t.push([Number(n.event.match(e)[1]), n.selector])
        })
    }

    function f(t) {
        L.domReady(L.bind(function() {
            this.twttr = t || e.twttr, this.initialize()
        }, this))
    }

    function g(e) {
        L.BaseTool.call(this, e), this.styleElements = {}, this.targetPageParamsStore = {}
    }

    function p(e) {
        L.BaseTool.call(this, e), this.defineListeners(), this.beaconMethod = "plainBeacon", this.adapt = new p.DataAdapters, this.dataProvider = new p.DataProvider.Aggregate
    }

    function v(e) {
        L.BaseTool.call(this, e), this.varBindings = {}, this.events = [], this.products = [], this.customSetupFuns = []
    }

    function m() {
        L.BaseTool.call(this), this.asyncScriptCallbackQueue = [], this.argsForBlockingScripts = []
    }

    function y(e) {
        L.BaseTool.call(this, e), this.name = e.name || "Basic"
    }

    function b(e) {
        L.BaseTool.call(this, e), this.name = e.name || "VisitorID", this.initialize()
    }

    function k(e) {
        L.BaseTool.call(this, e)
    }

    function S(e) {
        L.BaseTool.call(this, e)
    }
    var w, E, V, P = Object.prototype.toString,
        T = e._satellite && e._satellite.override,
        L = {
            initialized: !1,
            $data: function(e, t, i) {
                if (e) {
                    var a = "__satellite__",
                        r = L.dataCache,
                        s = e[a];
                    s || (s = e[a] = L.uuid++);
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
                return null != e && !L.isArray(e) && "object" == typeof e
            },
            isString: function(e) {
                return "string" == typeof e
            },
            isNumber: function(e) {
                return "[object Number]" === P.apply(e) && !L.isNaN(e)
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
                return -1 !== L.indexOf(e, t)
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
                if (t = t || [], L.isObject(e)) {
                    if (L.contains(t, e)) return "<Cycle>";
                    t.push(e)
                }
                if (L.isArray(e)) return "[" + L.map(e, function(e) {
                    return L.stringify(e, t)
                }).join(",") + "]";
                if (L.isString(e)) return '"' + String(e) + '"';
                if (L.isObject(e)) {
                    var n = [];
                    for (var i in e) e.hasOwnProperty(i) && n.push(i + ": " + L.stringify(e[i], t));
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
                    for (h = 1; e = a.shift();) e()
                }
                var i, a = [],
                    r = !1,
                    s = t,
                    o = s.documentElement,
                    c = o.doScroll,
                    l = "DOMContentLoaded",
                    u = "addEventListener",
                    d = "onreadystatechange",
                    h = /^loade|^c/.test(s.readyState);
                return s[u] && s[u](l, i = function() {
                    s.removeEventListener(l, i, r), n()
                }, r), c && s.attachEvent(d, i = function() {
                    /^c/.test(s.readyState) && (s.detachEvent(d, i), n())
                }), e = c ? function(t) {
                    self != top ? h ? t() : a.push(t) : function() {
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
                    h ? e() : a.push(e)
                }
            }(),
            loadScript: function(e, n) {
                var i = t.createElement("script");
                L.scriptOnLoad(e, i, n), i.src = e, t.getElementsByTagName("head")[0].appendChild(i)
            },
            scriptOnLoad: function(e, t, n) {
                function i(e) {
                    e && L.logError(e), n && n(e)
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
                L.loadedScriptRegistry[e] || L.loadScript(e, function(n) {
                    n || (L.loadedScriptRegistry[e] = !0), t && t(n)
                })
            },
            loadedScriptRegistry: {},
            loadScriptSync: function(e) {
                t.write ? L.domReadyFired ? L.notify('Cannot load sync the "' + e + '" script after DOM Ready.', 1) : (e.indexOf('"') > -1 && (e = encodeURI(e)), t.write('<script src="' + e + '"></script>')) : L.notify('Cannot load sync the "' + e + '" script because "document.write" is not available', 1)
            },
            pushAsyncScript: function(e) {
                L.tools["default"].pushAsyncScript(e)
            },
            pushBlockingScript: function(e) {
                L.tools["default"].pushBlockingScript(e)
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
                        return L.Sizzle.matches(e, [t]).length > 0
                    } catch (n) {
                        return !1
                    }
                }
            }(t.documentElement),
            cssQuery: (w = t, w.querySelectorAll ? function(e, t) {
                var n;
                try {
                    n = w.querySelectorAll(e)
                } catch (i) {
                    n = []
                }
                t(n)
            } : function(e, t) {
                if (L.Sizzle) {
                    var n;
                    try {
                        n = L.Sizzle(e)
                    } catch (i) {
                        n = []
                    }
                    t(n)
                } else L.sizzleQueue.push([e, t])
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
                    L.isNumber(n) && a++ >= n || e() || setTimeout(i, t)
                }
                var a = 0;
                t = t || 1e3, i()
            },
            escapeForHtml: function(e) {
                return e ? String(e).replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&#x27;").replace(/\//g, "&#x2F;") : e
            }
        };
    L.availableTools = {}, L.availableEventEmitters = [], L.fireOnceEvents = ["condition", "elementexists"], L.initEventEmitters = function() {
        L.eventEmitters = L.map(L.availableEventEmitters, function(e) {
            return new e
        })
    }, L.eventEmitterBackgroundTasks = function() {
        L.each(L.eventEmitters, function(e) {
            "backgroundTasks" in e && e.backgroundTasks()
        })
    }, L.initTools = function(e) {
        var t = {
                "default": new m
            },
            n = L.settings.euCookieName || "sat_track";
        for (var i in e)
            if (e.hasOwnProperty(i)) {
                var a, r, s;
                if ((a = e[i]).euCookie)
                    if ("true" !== L.readCookie(n)) continue;
                if (!(r = L.availableTools[a.engine])) {
                    var o = [];
                    for (var c in L.availableTools) L.availableTools.hasOwnProperty(c) && o.push(c);
                    throw new Error("No tool engine named " + a.engine + ", available: " + o.join(",") + ".")
                }(s = new r(a)).id = i, t[i] = s
            } return t
    }, L.preprocessArguments = function(e, t, n, i, a) {
        function r(e) {
            return i && L.isString(e) ? e.toLowerCase() : e
        }

        function s(e) {
            var c = {};
            for (var l in e)
                if (e.hasOwnProperty(l)) {
                    var u = e[l];
                    L.isObject(u) ? c[l] = s(u) : L.isArray(u) ? c[l] = o(u, i) : c[l] = r(L.replace(u, t, n, a))
                } return c
        }

        function o(e) {
            for (var i = [], a = 0, o = e.length; a < o; a++) {
                var c = e[a];
                L.isString(c) ? c = r(L.replace(c, t, n)) : c && c.constructor === Object && (c = s(c)), i.push(c)
            }
            return i
        }
        return e ? o(e, i) : e
    }, L.execute = function(e, t, n, i) {
        function a(a) {
            var r = i[a || "default"];
            if (r) try {
                r.triggerCommand(e, t, n)
            } catch (s) {
                L.logError(s)
            }
        }
        if (!_satellite.settings.hideActivity)
            if (i = i || L.tools, e.engine) {
                var r = e.engine;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var o = i[s];
                        o.settings && o.settings.engine === r && a(s)
                    }
            } else e.tool instanceof Array ? L.each(e.tool, function(e) {
                a(e)
            }) : a(e.tool)
    }, L.Logger = {
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
            this.flushed || (L.each(this.messages, function(e) {
                !0 !== e[2] && (this.echo(e[0], e[1]), e[2] = !0)
            }, this), this.flushed = !0)
        }
    }, L.notify = L.bind(L.Logger.message, L.Logger), L.cleanText = function(e) {
        return null == e ? null : L.trim(e).replace(/\s+/g, " ")
    }, L.cleanText.legacy = function(e) {
        return null == e ? null : L.trim(e).replace(/\s{2,}/g, " ").replace(/[^\000-\177]*/g, "")
    }, L.text = function(e) {
        return e.textContent || e.innerText
    }, L.specialProperties = {
        text: L.text,
        cleanText: function(e) {
            return L.cleanText(L.text(e))
        }
    }, L.getObjectProperty = function(e, t, i) {
        for (var a, r = t.split("."), s = e, o = L.specialProperties, c = 0, l = r.length; c < l; c++) {
            if (null == s) return n;
            var u = r[c];
            if (i && "@" === u.charAt(0)) s = o[u.slice(1)](s);
            else if (s.getAttribute && (a = u.match(/^getAttribute\((.+)\)$/))) {
                var d = a[1];
                s = s.getAttribute(d)
            } else s = s[u]
        }
        return s
    }, L.getToolsByType = function(e) {
        if (!e) throw new Error("Tool type is missing");
        var t = [];
        for (var n in L.tools)
            if (L.tools.hasOwnProperty(n)) {
                var i = L.tools[n];
                i.settings && i.settings.engine === e && t.push(i)
            } return t
    }, L.setVar = function() {
        var e = L.data.customVars;
        if (null == e && (L.data.customVars = {}, e = L.data.customVars), "string" == typeof arguments[0]) e[arguments[0]] = arguments[1];
        else if (arguments[0]) {
            var t = arguments[0];
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }
    }, L.dataElementSafe = function(e, t) {
        if (arguments.length > 2) {
            var n = arguments[2];
            "pageview" === t ? L.dataElementSafe.pageviewCache[e] = n : "session" === t ? L.setCookie("_sdsat_" + e, n) : "visitor" === t && L.setCookie("_sdsat_" + e, n, 730)
        } else {
            if ("pageview" === t) return L.dataElementSafe.pageviewCache[e];
            if ("session" === t || "visitor" === t) return L.readCookie("_sdsat_" + e)
        }
    }, L.dataElementSafe.pageviewCache = {}, L.realGetDataElement = function(t) {
        var n;
        return t.selector ? L.hasSelector && L.cssQuery(t.selector, function(e) {
            if (e.length > 0) {
                var i = e[0];
                "text" === t.property ? n = i.innerText || i.textContent : t.property in i ? n = i[t.property] : L.hasAttr(i, t.property) && (n = i.getAttribute(t.property))
            }
        }) : t.queryParam ? n = t.ignoreCase ? L.getQueryParamCaseInsensitive(t.queryParam) : L.getQueryParam(t.queryParam) : t.cookie ? n = L.readCookie(t.cookie) : t.jsVariable ? n = L.getObjectProperty(e, t.jsVariable) : t.customJS ? n = t.customJS() : t.contextHub && (n = t.contextHub()), L.isString(n) && t.cleanText && (n = L.cleanText(n)), n
    }, L.getDataElement = function(e, t, i) {
        if (null == (i = i || L.dataElements[e])) return L.settings.undefinedVarsReturnEmpty ? "" : null;
        var a = L.realGetDataElement(i);
        return a === n && i.storeLength ? a = L.dataElementSafe(e, i.storeLength) : a !== n && i.storeLength && L.dataElementSafe(e, i.storeLength, a), a || t || (a = i["default"] || ""), L.isString(a) && i.forceLowerCase && (a = a.toLowerCase()), a
    }, L.getVar = function(i, a, r) {
        var s, o, c = L.data.customVars,
            l = r ? r.target || r.srcElement : null,
            u = {
                uri: L.URI(),
                protocol: t.location.protocol,
                hostname: t.location.hostname
            };
        if (L.dataElements && i in L.dataElements) return L.getDataElement(i);
        if ((o = u[i.toLowerCase()]) === n)
            if ("this." === i.substring(0, 5)) i = i.slice(5), o = L.getObjectProperty(a, i, !0);
            else if ("event." === i.substring(0, 6)) i = i.slice(6), o = L.getObjectProperty(r, i);
        else if ("target." === i.substring(0, 7)) i = i.slice(7), o = L.getObjectProperty(l, i);
        else if ("window." === i.substring(0, 7)) i = i.slice(7), o = L.getObjectProperty(e, i);
        else if ("param." === i.substring(0, 6)) i = i.slice(6), o = L.getQueryParam(i);
        else if (s = i.match(/^rand([0-9]+)$/)) {
            var d = Number(s[1]),
                h = (Math.random() * (Math.pow(10, d) - 1)).toFixed(0);
            o = Array(d - h.length + 1).join("0") + h
        } else o = L.getObjectProperty(c, i);
        return o
    }, L.getVars = function(e, t, n) {
        var i = {};
        return L.each(e, function(e) {
            i[e] = L.getVar(e, t, n)
        }), i
    }, L.replace = function(e, t, n, i) {
        return "string" != typeof e ? e : e.replace(/%(.*?)%/g, function(e, a) {
            var r = L.getVar(a, t, n);
            return null == r ? L.settings.undefinedVarsReturnEmpty ? "" : e : i ? L.escapeForHtml(r) : r
        })
    }, L.escapeHtmlParams = function(e) {
        return e.escapeHtml = !0, e
    }, L.searchVariables = function(e, t, n) {
        if (!e || 0 === e.length) return "";
        for (var i = [], a = 0, r = e.length; a < r; a++) {
            var s = e[a],
                o = L.getVar(s, t, n);
            i.push(s + "=" + escape(o))
        }
        return "?" + i.join("&")
    }, L.fireRule = function(e, t, n) {
        var i = e.trigger;
        if (i) {
            for (var a = 0, r = i.length; a < r; a++) {
                var s = i[a];
                L.execute(s, t, n)
            }
            L.contains(L.fireOnceEvents, e.event) && (e.expired = !0)
        }
    }, L.isLinked = function(e) {
        for (var t = e; t; t = t.parentNode)
            if (L.isLinkTag(t)) return !0;
        return !1
    }, L.firePageLoadEvent = function(e) {
        for (var n = t.location, i = {
                type: e,
                target: n
            }, a = L.pageLoadRules, r = L.evtHandlers[i.type], s = a.length; s--;) {
            var o = a[s];
            L.ruleMatches(o, i, n) && (L.notify('Rule "' + o.name + '" fired.', 1), L.fireRule(o, n, i))
        }
        for (var c in L.tools)
            if (L.tools.hasOwnProperty(c)) {
                var l = L.tools[c];
                l.endPLPhase && l.endPLPhase(e)
            } r && L.each(r, function(e) {
            e(i)
        })
    }, L.track = function(e) {
        e = e.replace(/^\s*/, "").replace(/\s*$/, "");
        for (var t = 0; t < L.directCallRules.length; t++) {
            var n = L.directCallRules[t];
            if (n.name === e) return L.notify('Direct call Rule "' + e + '" fired.', 1), void L.fireRule(n, location, {
                type: e
            })
        }
        L.notify('Direct call Rule "' + e + '" not found.', 1)
    }, L.basePath = function() {
        return L.data.host ? ("https:" === t.location.protocol ? "https://" + L.data.host.https : "http://" + L.data.host.http) + "/" : this.settings.basePath
    }, L.setLocation = function(t) {
        e.location = t
    }, L.parseQueryParams = function(e) {
        var t = function(e) {
            var t = e;
            try {
                t = decodeURIComponent(e)
            } catch (n) {}
            return t
        };
        if ("" === e || !1 === L.isString(e)) return {};
        0 === e.indexOf("?") && (e = e.substring(1));
        var n = {},
            i = e.split("&");
        return L.each(i, function(e) {
            (e = e.split("="))[1] && (n[t(e[0])] = t(e[1]))
        }), n
    }, L.getCaseSensitivityQueryParamsMap = function(e) {
        var t = L.parseQueryParams(e),
            n = {};
        for (var i in t) t.hasOwnProperty(i) && (n[i.toLowerCase()] = t[i]);
        return {
            normal: t,
            caseInsensitive: n
        }
    }, L.updateQueryParams = function() {
        L.QueryParams = L.getCaseSensitivityQueryParamsMap(e.location.search)
    }, L.updateQueryParams(), L.getQueryParam = function(e) {
        return L.QueryParams.normal[e]
    }, L.getQueryParamCaseInsensitive = function(e) {
        return L.QueryParams.caseInsensitive[e.toLowerCase()]
    }, L.encodeObjectToURI = function(e) {
        if (!1 === L.isObject(e)) return "";
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }, L.readCookie = function(e) {
        for (var i = e + "=", a = t.cookie.split(";"), r = 0; r < a.length; r++) {
            for (var s = a[r];
                " " == s.charAt(0);) s = s.substring(1, s.length);
            if (0 === s.indexOf(i)) return s.substring(i.length, s.length)
        }
        return n
    }, L.setCookie = function(e, n, i) {
        var a;
        if (i) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * i * 60 * 60 * 1e3), a = "; expires=" + r.toGMTString()
        } else a = "";
        t.cookie = e + "=" + n + a + "; path=/"
    }, L.removeCookie = function(e) {
        L.setCookie(e, "", -1)
    }, L.getElementProperty = function(e, t) {
        if ("@" === t.charAt(0)) {
            var i = L.specialProperties[t.substring(1)];
            if (i) return i(e)
        }
        return "innerText" === t ? L.text(e) : t in e ? e[t] : e.getAttribute ? e.getAttribute(t) : n
    }, L.propertiesMatch = function(e, t) {
        if (e)
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var i = e[n],
                        a = L.getElementProperty(t, n);
                    if ("string" == typeof i && i !== a) return !1;
                    if (i instanceof RegExp && !i.test(a)) return !1
                } return !0
    }, L.isRightClick = function(e) {
        var t;
        return e.which ? t = 3 == e.which : e.button && (t = 2 == e.button), t
    }, L.ruleMatches = function(e, t, n, i) {
        var a = e.condition,
            r = e.conditions,
            s = e.property,
            o = t.type,
            c = e.value,
            l = t.target || t.srcElement,
            u = n === l;
        if (e.event !== o && ("custom" !== e.event || e.customEvent !== o)) return !1;
        if (!L.ruleInScope(e)) return !1;
        if ("click" === e.event && L.isRightClick(t)) return !1;
        if (e.isDefault && i > 0) return !1;
        if (e.expired) return !1;
        if ("inview" === o && t.inviewDelay !== e.inviewDelay) return !1;
        if (!u && (!1 === e.bubbleFireIfParent || 0 !== i && !1 === e.bubbleFireIfChildFired)) return !1;
        if (e.selector && !L.matchesCss(e.selector, n)) return !1;
        if (!L.propertiesMatch(s, n)) return !1;
        if (null != c)
            if ("string" == typeof c) {
                if (c !== n.value) return !1
            } else if (!c.test(n.value)) return !1;
        if (a) try {
            if (!a.call(n, t, l)) return L.notify('Condition for rule "' + e.name + '" not met.', 1), !1
        } catch (h) {
            return L.notify('Condition for rule "' + e.name + '" not met. Error: ' + h.message, 1), !1
        }
        if (r) {
            var d = L.find(r, function(i) {
                try {
                    return !i.call(n, t, l)
                } catch (h) {
                    return L.notify('Condition for rule "' + e.name + '" not met. Error: ' + h.message, 1), !0
                }
            });
            if (d) return L.notify("Condition " + d.toString() + ' for rule "' + e.name + '" not met.', 1), !1
        }
        return !0
    }, L.evtHandlers = {}, L.bindEvent = function(e, t) {
        var n = L.evtHandlers;
        n[e] || (n[e] = []), n[e].push(t)
    }, L.whenEvent = L.bindEvent, L.unbindEvent = function(e, t) {
        var n = L.evtHandlers;
        if (n[e]) {
            var i = L.indexOf(n[e], t);
            n[e].splice(i, 1)
        }
    }, L.bindEventOnce = function(e, t) {
        var n = function() {
            L.unbindEvent(e, n), t.apply(null, arguments)
        };
        L.bindEvent(e, n)
    }, L.isVMLPoisoned = function(e) {
        if (!e) return !1;
        try {
            e.nodeName
        } catch (t) {
            if ("Attribute only valid on v:image" === t.message) return !0
        }
        return !1
    }, L.handleEvent = function(e) {
        if (!L.$data(e, "eventProcessed")) {
            var t = e.type.toLowerCase(),
                n = e.target || e.srcElement,
                i = 0,
                a = L.rules,
                r = (L.tools, L.evtHandlers[e.type]);
            if (L.isVMLPoisoned(n)) L.notify("detected " + t + " on poisoned VML element, skipping.", 1);
            else {
                r && L.each(r, function(t) {
                    t(e)
                }), n && n.nodeName ? L.notify("detected " + t + " on " + n.nodeName, 1) : L.notify("detected " + t, 1);
                for (var s = n; s; s = s.parentNode) {
                    var o = !1;
                    if (L.each(a, function(t) {
                            L.ruleMatches(t, e, s, i) && (L.notify('Rule "' + t.name + '" fired.', 1), L.fireRule(t, s, e), i++, t.bubbleStop && (o = !0))
                        }), o) break
                }
                L.$data(e, "eventProcessed", !0)
            }
        }
    }, L.onEvent = t.querySelectorAll ? function(e) {
        L.handleEvent(e)
    } : (E = [], (V = function(e) {
        e.selector ? E.push(e) : L.handleEvent(e)
    }).pendingEvents = E, V), L.fireEvent = function(e, t) {
        L.onEvent({
            type: e,
            target: t
        })
    }, L.registerEvents = function(e, t) {
        for (var n = t.length - 1; n >= 0; n--) {
            var i = t[n];
            L.$data(e, i + ".tracked") || (L.addEventHandler(e, i, L.onEvent), L.$data(e, i + ".tracked", !0))
        }
    }, L.registerEventsForTags = function(e, n) {
        for (var i = e.length - 1; i >= 0; i--)
            for (var a = e[i], r = t.getElementsByTagName(a), s = r.length - 1; s >= 0; s--) L.registerEvents(r[s], n)
    }, L.setListeners = function() {
        var e = ["click", "submit"];
        L.each(L.rules, function(t) {
            "custom" === t.event && t.hasOwnProperty("customEvent") && !L.contains(e, t.customEvent) && e.push(t.customEvent)
        }), L.registerEvents(t, e)
    }, L.getUniqueRuleEvents = function() {
        return L._uniqueRuleEvents || (L._uniqueRuleEvents = [], L.each(L.rules, function(e) {
            -1 === L.indexOf(L._uniqueRuleEvents, e.event) && L._uniqueRuleEvents.push(e.event)
        })), L._uniqueRuleEvents
    }, L.setFormListeners = function() {
        if (!L._relevantFormEvents) {
            var e = ["change", "focus", "blur", "keypress"];
            L._relevantFormEvents = L.filter(L.getUniqueRuleEvents(), function(t) {
                return -1 !== L.indexOf(e, t)
            })
        }
        L._relevantFormEvents.length && L.registerEventsForTags(["input", "select", "textarea", "button"], L._relevantFormEvents)
    }, L.setVideoListeners = function() {
        if (!L._relevantVideoEvents) {
            var e = ["play", "pause", "ended", "volumechange", "stalled", "loadeddata"];
            L._relevantVideoEvents = L.filter(L.getUniqueRuleEvents(), function(t) {
                return -1 !== L.indexOf(e, t)
            })
        }
        L._relevantVideoEvents.length && L.registerEventsForTags(["video"], L._relevantVideoEvents)
    }, L.readStoredSetting = function(t) {
        try {
            return t = "sdsat_" + t, e.localStorage.getItem(t)
        } catch (n) {
            return L.notify("Cannot read stored setting from localStorage: " + n.message, 2), null
        }
    }, L.loadStoredSettings = function() {
        var e = L.readStoredSetting("debug"),
            t = L.readStoredSetting("hide_activity");
        e && (L.settings.notifications = "true" === e), t && (L.settings.hideActivity = "true" === t)
    }, L.isRuleActive = function(e, t) {
        function n(e, t) {
            return t = a(t, {
                hour: e[f](),
                minute: e[g]()
            }), Math.floor(Math.abs((e.getTime() - t.getTime()) / 864e5))
        }

        function i(e, t) {
            function n(e) {
                return 12 * e[d]() + e[h]()
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
            return 60 * e[f]() + e[g]() > 60 * t[f]() + t[g]()
        }

        function s(e, t) {
            return 60 * e[f]() + e[g]() < 60 * t[f]() + t[g]()
        }
        var o = e.schedule;
        if (!o) return !0;
        var c = o.utc,
            l = c ? "getUTCDate" : "getDate",
            u = c ? "getUTCDay" : "getDay",
            d = c ? "getUTCFullYear" : "getFullYear",
            h = c ? "getUTCMonth" : "getMonth",
            f = c ? "getUTCHours" : "getHours",
            g = c ? "getUTCMinutes" : "getMinutes",
            p = c ? "setUTCHours" : "setHours",
            v = c ? "setUTCMinutes" : "setMinutes",
            m = c ? "setUTCDate" : "setDate";
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
                    if (!L.contains(o.days, t[u]())) return !1
                } else if (o.start[u]() !== t[u]()) return !1;
                if (o.repeatEvery)
                    if (n(o.start, t) % (7 * o.repeatEvery) != 0) return !1
            } else if ("monthly" === o.repeat) {
                if (o.repeatEvery)
                    if (i(o.start, t) % o.repeatEvery != 0) return !1;
                if (o.nthWeek && o.mthDay) {
                    if (o.mthDay !== t[u]()) return !1;
                    var y = Math.floor((t[l]() - t[u]() + 1) / 7);
                    if (o.nthWeek !== y) return !1
                } else if (o.start[l]() !== t[l]()) return !1
            } else if ("yearly" === o.repeat) {
                if (o.start[h]() !== t[h]()) return !1;
                if (o.start[l]() !== t[l]()) return !1;
                if (o.repeatEvery)
                    if (Math.abs(o.start[d]() - t[d]()) % o.repeatEvery != 0) return !1
            }
        } else {
            if (o.start > t) return !1;
            if (o.end < t) return !1
        }
        return !0
    }, L.isOutboundLink = function(e) {
        if (!e.getAttribute("href")) return !1;
        var t = e.hostname,
            n = (e.href, e.protocol);
        return ("http:" === n || "https:" === n) && (!L.any(L.settings.domainList, function(e) {
            return L.isSubdomainOf(t, e)
        }) && t !== location.hostname)
    }, L.isLinkerLink = function(e) {
        return !(!e.getAttribute || !e.getAttribute("href")) && (L.hasMultipleDomains() && e.hostname != location.hostname && !e.href.match(/^javascript/i) && !L.isOutboundLink(e))
    }, L.isSubdomainOf = function(e, t) {
        if (e === t) return !0;
        var n = e.length - t.length;
        return n > 0 && L.equalsIgnoreCase(e.substring(n), t)
    }, L.getVisitorId = function() {
        var e = L.getToolsByType("visitor_id");
        return 0 === e.length ? null : e[0].getInstance()
    }, L.URI = function() {
        var e = t.location.pathname + t.location.search;
        return L.settings.forceLowerCase && (e = e.toLowerCase()), e
    }, L.URL = function() {
        var e = t.location.href;
        return L.settings.forceLowerCase && (e = e.toLowerCase()), e
    }, L.filterRules = function() {
        function e(e) {
            return !!L.isRuleActive(e)
        }
        L.rules = L.filter(L.rules, e), L.pageLoadRules = L.filter(L.pageLoadRules, e)
    }, L.ruleInScope = function(e, n) {
        function i(e, t) {
            function n(e) {
                return t.match(e)
            }
            var i = e.include,
                r = e.exclude;
            if (i && a(i, t)) return !0;
            if (r) {
                if (L.isString(r) && r === t) return !0;
                if (L.isArray(r) && L.any(r, n)) return !0;
                if (L.isRegex(r) && n(r)) return !0
            }
            return !1
        }

        function a(e, t) {
            function n(e) {
                return t.match(e)
            }
            return !(!L.isString(e) || e === t) || (!(!L.isArray(e) || L.any(e, n)) || !(!L.isRegex(e) || n(e)))
        }
        n = n || t.location;
        var r = e.scope;
        if (!r) return !0;
        var s = r.URI,
            o = r.subdomains,
            c = r.domains,
            l = r.protocols,
            u = r.hashes;
        return (!s || !i(s, n.pathname + n.search)) && ((!o || !i(o, n.hostname)) && ((!c || !a(c, n.hostname)) && ((!l || !a(l, n.protocol)) && (!u || !i(u, n.hash)))))
    }, L.backgroundTasks = function() {
        new Date;
        L.setFormListeners(), L.setVideoListeners(), L.loadStoredSettings(), L.registerNewElementsForDynamicRules(), L.eventEmitterBackgroundTasks();
        new Date
    }, L.registerNewElementsForDynamicRules = function() {
        function e(t, n) {
            var i = e.cache[t];
            if (i) return n(i);
            L.cssQuery(t, function(i) {
                e.cache[t] = i, n(i)
            })
        }
        e.cache = {}, L.each(L.dynamicRules, function(t) {
            e(t.selector, function(e) {
                L.each(e, function(e) {
                    var n = "custom" === t.event ? t.customEvent : t.event;
                    L.$data(e, "dynamicRules.seen." + n) || (L.$data(e, "dynamicRules.seen." + n, !0), L.propertiesMatch(t.property, e) && L.registerEvents(e, [n]))
                })
            })
        })
    }, L.ensureCSSSelector = function() {
        t.querySelectorAll ? L.hasSelector = !0 : (L.loadingSizzle = !0, L.sizzleQueue = [], L.loadScript(L.basePath() + "selector.js", function() {
            if (L.Sizzle) {
                var e = L.onEvent.pendingEvents;
                L.each(e, function(e) {
                    L.handleEvent(e)
                }, this), L.onEvent = L.handleEvent, L.hasSelector = !0, delete L.loadingSizzle, L.each(L.sizzleQueue, function(e) {
                    L.cssQuery(e[0], e[1])
                }), delete L.sizzleQueue
            } else L.logError(new Error("Failed to load selector.js"))
        }))
    }, L.errors = [], L.logError = function(e) {
        L.errors.push(e), L.notify(e.name + " - " + e.message, 5)
    }, L.pageBottom = function() {
        L.initialized && (L.pageBottomFired = !0, L.firePageLoadEvent("pagebottom"))
    }, L.stagingLibraryOverride = function() {
        if ("true" === L.readStoredSetting("stagingLibrary")) {
            for (var e, n, i, a = t.getElementsByTagName("script"), r = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/, s = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/, o = 0, c = a.length; o < c && (!(i = a[o].getAttribute("src")) || (e || (e = i.match(r)), n || (n = i.match(s)), !n)); o++);
            if (e && !n) {
                var l = e[1] + "satelliteLib-" + e[2] + "-staging.js";
                if (t.write) t.write('<script src="' + l + '"></script>');
                else {
                    var u = t.createElement("script");
                    u.src = l, t.head.appendChild(u)
                }
                return !0
            }
        }
        return !1
    }, L.checkAsyncInclude = function() {
        e.satellite_asyncLoad && L.notify('You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.', 5)
    }, L.hasMultipleDomains = function() {
        return !!L.settings.domainList && L.settings.domainList.length > 1
    }, L.handleOverrides = function() {
        if (T)
            for (var e in T) T.hasOwnProperty(e) && (L.data[e] = T[e])
    }, L.privacyManagerParams = function() {
        var e = {};
        L.extend(e, L.settings.privacyManagement);
        var t = [];
        for (var n in L.tools)
            if (L.tools.hasOwnProperty(n)) {
                var i = L.tools[n],
                    a = i.settings;
                if (!a) continue;
                "sc" === a.engine && t.push(i)
            } var r = L.filter(L.map(t, function(e) {
            return e.getTrackingServer()
        }), function(e) {
            return null != e
        });
        e.adobeAnalyticsTrackingServers = r;
        for (var s = ["bannerText", "headline", "introductoryText", "customCSS"], o = 0; o < s.length; o++) {
            var c = s[o],
                l = e[c];
            if (l)
                if ("text" === l.type) e[c] = l.value;
                else {
                    if ("data" !== l.type) throw new Error("Invalid type: " + l.type);
                    e[c] = L.getVar(l.value)
                }
        }
        return e
    }, L.prepareLoadPrivacyManager = function() {
        function t(e) {
            function t() {
                ++r === a.length && (n(), clearTimeout(s), e())
            }

            function n() {
                L.each(a, function(e) {
                    L.unbindEvent(e.id + ".load", t)
                })
            }

            function i() {
                n(), e()
            }
            var a = L.filter(L.values(L.tools), function(e) {
                return e.settings && "sc" === e.settings.engine
            });
            if (0 === a.length) return e();
            var r = 0;
            L.each(a, function(e) {
                L.bindEvent(e.id + ".load", t)
            });
            var s = setTimeout(i, 5e3)
        }
        L.addEventHandler(e, "load", function() {
            t(L.loadPrivacyManager)
        })
    }, L.loadPrivacyManager = function() {
        var e = L.basePath() + "privacy_manager.js";
        L.loadScript(e, function() {
            var e = L.privacyManager;
            e.configure(L.privacyManagerParams()), e.openIfRequired()
        })
    }, L.init = function(t) {
        if (!L.stagingLibraryOverride()) {
            L.configurationSettings = t;
            var i = t.tools;
            for (var a in delete t.tools, t) t.hasOwnProperty(a) && (L[a] = t[a]);
            L.data.customVars === n && (L.data.customVars = {}), L.data.queryParams = L.QueryParams.normal, L.handleOverrides(), L.detectBrowserInfo(), L.trackVisitorInfo && L.trackVisitorInfo(), L.loadStoredSettings(), L.Logger.setOutputState(L.settings.notifications), L.checkAsyncInclude(), L.ensureCSSSelector(), L.filterRules(), L.dynamicRules = L.filter(L.rules, function(e) {
                return e.eventHandlerOnElement
            }), L.tools = L.initTools(i), L.initEventEmitters(), L.firePageLoadEvent("aftertoolinit"), L.settings.privacyManagement && L.prepareLoadPrivacyManager(), L.hasSelector && L.domReady(L.eventEmitterBackgroundTasks), L.setListeners(), L.domReady(function() {
                L.poll(function() {
                    L.backgroundTasks()
                }, L.settings.recheckEvery || 3e3)
            }), L.domReady(function() {
                L.domReadyFired = !0, L.pageBottomFired || L.pageBottom(), L.firePageLoadEvent("domready")
            }), L.addEventHandler(e, "load", function() {
                L.firePageLoadEvent("windowload")
            }), L.firePageLoadEvent("pagetop"), L.initialized = !0
        }
    }, L.pageLoadPhases = ["aftertoolinit", "pagetop", "pagebottom", "domready", "windowload"], L.loadEventBefore = function(e, t) {
        return L.indexOf(L.pageLoadPhases, e) <= L.indexOf(L.pageLoadPhases, t)
    }, L.flushPendingCalls = function(e) {
        e.pending && (L.each(e.pending, function(t) {
            var n = t[0],
                i = t[1],
                a = t[2],
                r = t[3];
            n in e ? e[n].apply(e, [i, a].concat(r)) : e.emit ? e.emit(n, i, a, r) : L.notify("Failed to trigger " + n + " for tool " + e.id, 1)
        }), delete e.pending)
    }, L.setDebug = function(t) {
        try {
            e.localStorage.setItem("sdsat_debug", t)
        } catch (n) {
            L.notify("Cannot set debug mode: " + n.message, 2)
        }
    }, L.getUserAgent = function() {
        return navigator.userAgent
    }, L.detectBrowserInfo = function() {
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
            a = L.getUserAgent();
        L.browserInfo = {
            browser: t(a),
            os: n(a),
            deviceType: i(a)
        }
    }, L.isHttps = function() {
        return "https:" == t.location.protocol
    }, L.BaseTool = function(e) {
        this.settings = e || {}, this.forceLowerCase = L.settings.forceLowerCase, "forceLowerCase" in this.settings && (this.forceLowerCase = this.settings.forceLowerCase)
    }, L.BaseTool.prototype = {
        triggerCommand: function(e, t, n) {
            var i = this.settings || {};
            if (this.initialize && this.isQueueAvailable() && this.isQueueable(e) && n && L.loadEventBefore(n.type, i.loadOn)) this.queueCommand(e, t, n);
            else {
                var a = e.command,
                    r = this["$" + a],
                    s = !!r && r.escapeHtml,
                    o = L.preprocessArguments(e.arguments, t, n, this.forceLowerCase, s);
                r ? r.apply(this, [t, n].concat(o)) : this.$missing$ ? this.$missing$(a, t, n, o) : L.notify("Failed to trigger " + a + " for tool " + this.id, 1)
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
            this.pending && (L.each(this.pending, function(e) {
                this.triggerCommand.apply(this, e)
            }, this), this.pending = [])
        },
        queueCommand: function(e, t, n) {
            this.pending || (this.pending = []), this.pending.push([e, t, n])
        },
        $cancelToolInit: function() {
            this._cancelToolInit = !0
        }
    }, e._satellite = L, L.visibility = {
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
    }, L.ecommerce = {
        addItem: function() {
            var e = [].slice.call(arguments);
            L.onEvent({
                type: "ecommerce.additem",
                target: e
            })
        },
        addTrans: function() {
            var e = [].slice.call(arguments);
            L.data.saleData.sale = {
                orderId: e[0],
                revenue: e[2]
            }, L.onEvent({
                type: "ecommerce.addtrans",
                target: e
            })
        },
        trackTrans: function() {
            L.onEvent({
                type: "ecommerce.tracktrans",
                target: []
            })
        }
    }, i.orientationChange = function(t) {
        var n = 0 === e.orientation ? "portrait" : "landscape";
        t.orientation = n, L.onEvent(t)
    }, L.availableEventEmitters.push(i), a.offset = function(n) {
        var i = null,
            a = null;
        try {
            var r = n.getBoundingClientRect(),
                s = t,
                o = s.documentElement,
                c = s.body,
                l = e,
                u = o.clientTop || c.clientTop || 0,
                d = o.clientLeft || c.clientLeft || 0,
                h = l.pageYOffset || o.scrollTop || c.scrollTop,
                f = l.pageXOffset || o.scrollLeft || c.scrollLeft;
            i = r.top + h - u, a = r.left + f - d
        } catch (g) {}
        return {
            top: i,
            left: a
        }
    }, a.getViewportHeight = function() {
        var n = e.innerHeight,
            i = t.compatMode;
        return i && (n = "CSS1Compat" == i ? t.documentElement.clientHeight : t.body.clientHeight), n
    }, a.getScrollTop = function() {
        return t.documentElement.scrollTop ? t.documentElement.scrollTop : t.body.scrollTop
    }, a.isElementInDocument = function(e) {
        return t.body.contains(e)
    }, a.isElementInView = function(e) {
        if (!a.isElementInDocument(e)) return !1;
        var t = a.getViewportHeight(),
            n = a.getScrollTop(),
            i = a.offset(e).top,
            r = e.offsetHeight;
        return null !== i && !(n > i + r || n + t < i)
    }, a.prototype = {
        backgroundTasks: function() {
            var e = this.elements;
            L.each(this.rules, function(t) {
                L.cssQuery(t.selector, function(n) {
                    var i = 0;
                    L.each(n, function(t) {
                        L.contains(e, t) || (e.push(t), i++)
                    }), i && L.notify(t.selector + " added " + i + " elements.", 1)
                })
            }), this.track()
        },
        checkInView: function(e, t, n) {
            var i = L.$data(e, "inview");
            if (a.isElementInView(e)) {
                i || L.$data(e, "inview", !0);
                var r = this;
                this.processRules(e, function(n, i, a) {
                    if (t || !n.inviewDelay) L.$data(e, i, !0), L.onEvent({
                        type: "inview",
                        target: e,
                        inviewDelay: n.inviewDelay
                    });
                    else if (n.inviewDelay) {
                        var s = L.$data(e, a);
                        s || (s = setTimeout(function() {
                            r.checkInView(e, !0, n.inviewDelay)
                        }, n.inviewDelay), L.$data(e, a, s))
                    }
                }, n)
            } else {
                if (!a.isElementInDocument(e)) {
                    var s = L.indexOf(this.elements, e);
                    this.elements.splice(s, 1)
                }
                i && L.$data(e, "inview", !1), this.processRules(e, function(t, n, i) {
                    var a = L.$data(e, i);
                    a && clearTimeout(a)
                }, n)
            }
        },
        track: function() {
            for (var e = this.elements.length - 1; e >= 0; e--) this.checkInView(this.elements[e])
        },
        processRules: function(e, t, n) {
            var i = this.rules;
            n && (i = L.filter(this.rules, function(e) {
                return e.inviewDelay == n
            })), L.each(i, function(n, i) {
                var a = n.inviewDelay ? "viewed_" + n.inviewDelay : "viewed",
                    r = "inview_timeout_id_" + i;
                L.$data(e, a) || L.matchesCss(n.selector, e) && t(n, a, r)
            })
        }
    }, L.availableEventEmitters.push(a), r.prototype = {
        backgroundTasks: function() {
            var e = this.eventHandler;
            L.each(this.rules, function(t) {
                L.cssQuery(t.selector || "video", function(t) {
                    L.each(t, function(t) {
                        L.$data(t, "videoplayed.tracked") || (L.addEventHandler(t, "timeupdate", L.throttle(e, 100)), L.$data(t, "videoplayed.tracked", !0))
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
                var c = o[2],
                    l = Number(o[1]),
                    u = "%" === c ? function() {
                        return l <= 100 * (s - a) / (r - a)
                    } : function() {
                        return l <= s - a
                    };
                !L.$data(e, n) && u() && (L.$data(e, n, !0), L.onEvent({
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
    }, L.availableEventEmitters.push(r), s.prototype = {
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
            this.prevUnload = e.onunload, this.prevBeforeUnload = e.onbeforeunload, e.onunload = L.bind(function(t) {
                this.prevUnload && setTimeout(L.bind(function() {
                    this.prevUnload.call(e, t)
                }, this), 1), this.newObueListener()
            }, this), e.onbeforeunload = L.bind(function(t) {
                this.prevBeforeUnload && setTimeout(L.bind(function() {
                    this.prevBeforeUnload.call(e, t)
                }, this), 1), this.newObueListener()
            }, this)
        },
        triggerBeacons: function() {
            L.fireEvent("leave", t)
        }
    }, L.availableEventEmitters.push(s), o.prototype = {
        initialize: function() {
            if (this.FB = this.FB || e.FB, this.FB && this.FB.Event && this.FB.Event.subscribe) return this.bind(), !0
        },
        bind: function() {
            this.FB.Event.subscribe("edge.create", function() {
                L.notify("tracking a facebook like", 1), L.onEvent({
                    type: "facebook.like",
                    target: t
                })
            }), this.FB.Event.subscribe("edge.remove", function() {
                L.notify("tracking a facebook unlike", 1), L.onEvent({
                    type: "facebook.unlike",
                    target: t
                })
            }), this.FB.Event.subscribe("message.send", function() {
                L.notify("tracking a facebook share", 1), L.onEvent({
                    type: "facebook.send",
                    target: t
                })
            })
        }
    }, L.availableEventEmitters.push(o), c.prototype = {
        defineEvents: function() {
            this.oldBlurClosure = function() {
                L.fireEvent("tabblur", t)
            }, this.oldFocusClosure = L.bind(function() {
                this.visibilityApiHasPriority ? L.fireEvent("tabfocus", t) : null != L.visibility.getHiddenProperty() && L.visibility.isHidden() || L.fireEvent("tabfocus", t)
            }, this)
        },
        attachDetachModernEventListeners: function(e) {
            L[0 == e ? "removeEventHandler" : "addEventHandler"](t, L.visibility.getVisibilityEvent(), this.handleVisibilityChange)
        },
        attachDetachOlderEventListeners: function(t, n, i) {
            var a = 0 == t ? "removeEventHandler" : "addEventHandler";
            L[a](n, i, this.oldBlurClosure), L[a](e, "focus", this.oldFocusClosure)
        },
        handleVisibilityChange: function() {
            L.visibility.isHidden() ? L.fireEvent("tabblur", t) : L.fireEvent("tabfocus", t)
        },
        setVisibilityApiPriority: function(t) {
            this.visibilityApiHasPriority = t, this.attachDetachOlderEventListeners(!1, e, "blur"), this.attachDetachModernEventListeners(!1), t ? null != L.visibility.getHiddenProperty() ? this.attachDetachModernEventListeners(!0) : this.attachDetachOlderEventListeners(!0, e, "blur") : (this.attachDetachOlderEventListeners(!0, e, "blur"), null != L.visibility.getHiddenProperty() && this.attachDetachModernEventListeners(!0))
        },
        oldBlurClosure: null,
        oldFocusClosure: null,
        visibilityApiHasPriority: !0
    }, L.availableEventEmitters.push(c), l.prototype = {
        initialize: function() {
            this.setupHistoryAPI(), this.setupHashChange()
        },
        fireIfURIChanged: function() {
            var e = L.URL();
            this.lastURL !== e && (this.fireEvent(), this.lastURL = e)
        },
        fireEvent: function() {
            L.updateQueryParams(), L.onEvent({
                type: "locationchange",
                target: t
            })
        },
        setupSPASupport: function() {
            this.setupHistoryAPI(), this.setupHashChange()
        },
        setupHistoryAPI: function() {
            var t = e.history;
            t && (t.pushState && (this.originalPushState = t.pushState, t.pushState = this._pushState), t.replaceState && (this.originalReplaceState = t.replaceState, t.replaceState = this._replaceState)), L.addEventHandler(e, "popstate", this._onPopState)
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
            L.addEventHandler(e, "hashchange", this._onHashChange)
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
            history.pushState === this._pushState && (history.pushState = this.originalPushState), history.replaceState === this._replaceState && (history.replaceState = this.originalReplaceState), L.removeEventHandler(e, "popstate", this._onPopState)
        },
        cleanUpHashChange: function() {
            L.removeEventHandler(e, "hashchange", this._onHashChange)
        }
    }, L.availableEventEmitters.push(l), u.prototype.getStringifiedValue = e.JSON && e.JSON.stringify || L.stringify, u.prototype.initPolling = function() {
        0 !== this.dataElementsNames.length && (this.dataElementsStore = this.getDataElementsValues(), L.poll(L.bind(this.checkDataElementValues, this), 1e3))
    }, u.prototype.getDataElementsValues = function() {
        var e = {};
        return L.each(this.dataElementsNames, function(t) {
            var n = L.getVar(t);
            e[t] = this.getStringifiedValue(n)
        }, this), e
    }, u.prototype.checkDataElementValues = function() {
        L.each(this.dataElementsNames, L.bind(function(e) {
            var n = this.getStringifiedValue(L.getVar(e));
            n !== this.dataElementsStore[e] && (this.dataElementsStore[e] = n, L.onEvent({
                type: "dataelementchange(" + e + ")",
                target: t
            }))
        }, this))
    }, L.availableEventEmitters.push(u), d.prototype.backgroundTasks = function() {
        L.each(this.rules, function(e) {
            L.cssQuery(e.selector, function(e) {
                if (e.length > 0) {
                    var t = e[0];
                    if (L.$data(t, "elementexists.seen")) return;
                    L.$data(t, "elementexists.seen", !0), L.onEvent({
                        type: "elementexists",
                        target: t
                    })
                }
            })
        })
    }, L.availableEventEmitters.push(d), h.prototype = {
        backgroundTasks: function() {
            var e = this;
            L.each(this.rules, function(t) {
                var n = t[1],
                    i = t[0];
                L.cssQuery(n, function(t) {
                    L.each(t, function(t) {
                        e.trackElement(t, i)
                    })
                })
            }, this)
        },
        trackElement: function(e, t) {
            var n = this,
                i = L.$data(e, "hover.delays");
            i ? L.contains(i, t) || i.push(t) : (L.addEventHandler(e, "mouseover", function(t) {
                n.onMouseOver(t, e)
            }), L.addEventHandler(e, "mouseout", function(t) {
                n.onMouseOut(t, e)
            }), L.$data(e, "hover.delays", [t]))
        },
        onMouseOver: function(e, t) {
            var n = e.target || e.srcElement,
                i = e.relatedTarget || e.fromElement;
            (t === n || L.containsElement(t, n)) && !L.containsElement(t, i) && this.onMouseEnter(t)
        },
        onMouseEnter: function(e) {
            var t = L.$data(e, "hover.delays"),
                n = L.map(t, function(t) {
                    return setTimeout(function() {
                        L.onEvent({
                            type: "hover(" + t + ")",
                            target: e
                        })
                    }, t)
                });
            L.$data(e, "hover.delayTimers", n)
        },
        onMouseOut: function(e, t) {
            var n = e.target || e.srcElement,
                i = e.relatedTarget || e.toElement;
            (t === n || L.containsElement(t, n)) && !L.containsElement(t, i) && this.onMouseLeave(t)
        },
        onMouseLeave: function(e) {
            var t = L.$data(e, "hover.delayTimers");
            t && L.each(t, function(e) {
                clearTimeout(e)
            })
        }
    }, L.availableEventEmitters.push(h), f.prototype = {
        initialize: function() {
            var e = this.twttr;
            e && "function" == typeof e.ready && e.ready(L.bind(this.bind, this))
        },
        bind: function() {
            this.twttr.events.bind("tweet", function(e) {
                e && (L.notify("tracking a tweet button", 1), L.onEvent({
                    type: "twitter.tweet",
                    target: t
                }))
            })
        }
    }, L.availableEventEmitters.push(f), L.inherit(g, L.BaseTool), L.extend(g.prototype, {
        name: "tnt",
        endPLPhase: function(e) {
            "aftertoolinit" === e && this.initialize()
        },
        initialize: function() {
            L.notify("Test & Target: Initializing", 1), this.initializeTargetPageParams(), this.load()
        },
        initializeTargetPageParams: function() {
            e.targetPageParams && this.updateTargetPageParams(this.parseTargetPageParamsResult(e.targetPageParams())), this.updateTargetPageParams(this.settings.pageParams), this.setTargetPageParamsFunction()
        },
        load: function() {
            var e = this.getMboxURL(this.settings.mboxURL);
            !1 !== this.settings.initTool ? this.settings.loadSync ? (L.loadScriptSync(e), this.onScriptLoaded()) : (L.loadScript(e, L.bind(this.onScriptLoaded, this)), this.initializing = !0) : this.initialized = !0
        },
        getMboxURL: function(t) {
            var n = t;
            return L.isObject(t) && (n = "https:" === e.location.protocol ? t.https : t.http), n.match(/^https?:/) ? n : L.basePath() + n
        },
        onScriptLoaded: function() {
            L.notify("Test & Target: loaded.", 1), this.flushQueue(), this.initialized = !0, this.initializing = !1
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
            L.addEventHandler(e, "load", L.bind(function() {
                L.cssQuery(a.mboxGoesAround, function(n) {
                    var i = n[0];
                    if (i) {
                        var o = t.createElement("div");
                        o.id = r, i.parentNode.replaceChild(o, i), o.appendChild(i), e.mboxDefine(r, a.mboxName);
                        var c = [a.mboxName];
                        a.arguments && (c = c.concat(a.arguments)), e.mboxUpdate.apply(null, c), s.reappearWhenCallComesBack(i, r, a.timeout, a)
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
            L.cssQuery('script[src*="omtrdc.net"]', function(e) {
                var t = e[0];
                if (t) {
                    L.scriptOnLoad(t.src, t, function() {
                        L.notify("Test & Target: request complete", 1), a(), clearTimeout(i)
                    });
                    var i = setTimeout(function() {
                        L.notify("Test & Target: bailing after " + n + "ms", 1), a()
                    }, n)
                } else L.notify("Test & Target: failed to find T&T ajax call, bailing", 1), a()
            })
        },
        updateTargetPageParams: function(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[L.replace(n)] = L.replace(e[n]));
            L.extend(this.targetPageParamsStore, t)
        },
        getTargetPageParams: function() {
            return this.targetPageParamsStore
        },
        setTargetPageParamsFunction: function() {
            e.targetPageParams = L.bind(this.getTargetPageParams, this)
        },
        parseTargetPageParamsResult: function(e) {
            var t = e;
            return L.isArray(e) && (e = e.join("&")), L.isString(e) && (t = L.parseQueryParams(e)), t
        }
    }), L.availableTools.tnt = g, L.inherit(p, L.BaseTool), L.extend(p.prototype, {
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
            this.onTabFocus = L.bind(function() {
                this.notify("Tab visible, sending view beacon when ready", 1), this.tabEverVisible = !0, this.flushQueueWhenReady()
            }, this), this.onPageLeave = L.bind(function() {
                this.notify("isHuman? : " + this.isHuman(), 1), this.isHuman() && this.sendDurationBeacon()
            }, this), this.onHumanDetectionChange = L.bind(function(e) {
                this == e.target.target && (this.human = e.target.isHuman)
            }, this)
        },
        initialize: function() {
            this.initializeTracking(), this.initializeDataProviders(), this.initializeNonHumanDetection(), this.tabEverVisible = L.visibility.isVisible(), this.tabEverVisible ? this.notify("Tab visible, sending view beacon when ready", 1) : L.bindEventOnce("tabfocus", this.onTabFocus), this.initialized = !0
        },
        initializeTracking: function() {
            this.initialized || (this.notify("Initializing tracking", 1), this.addRemovePageLeaveEvent(this.enableTracking), this.addRemoveHumanDetectionChangeEvent(this.enableTracking), this.initialized = !0)
        },
        initializeDataProviders: function() {
            var e, t = this.getAnalyticsTool();
            this.dataProvider.register(new p.DataProvider.VisitorID(L.getVisitorId())), t ? (e = new p.DataProvider.Generic("rsid", function() {
                return t.settings.account
            }), this.dataProvider.register(e)) : this.notify("Missing integration with Analytics: rsid will not be sent.")
        },
        initializeNonHumanDetection: function() {
            L.nonhumandetection ? (L.nonhumandetection.init(), this.setEnableNonHumanDetection(0 != this.settings.enableNonHumanDetection), this.settings.nonHumanDetectionDelay > 0 && this.setNonHumanDetectionDelay(1e3 * parseInt(this.settings.nonHumanDetectionDelay))) : this.notify("NHDM is not available.")
        },
        getAnalyticsTool: function() {
            if (this.settings.integratesWith) return L.tools[this.settings.integratesWith]
        },
        flushQueueWhenReady: function() {
            this.enableTracking && this.tabEverVisible && L.poll(L.bind(function() {
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
            e ? L.nonhumandetection.register(this) : L.nonhumandetection.unregister(this)
        },
        setNonHumanDetectionDelay: function(e) {
            L.nonhumandetection.register(this, e)
        },
        addRemovePageLeaveEvent: function(e) {
            this.notify((e ? "Attach onto" : "Detach from") + " page leave event", 1), L[0 == e ? "unbindEvent" : "bindEvent"]("leave", this.onPageLeave)
        },
        addRemoveHumanDetectionChangeEvent: function(e) {
            this.notify((e ? "Attach onto" : "Detach from") + " human detection change event", 1), L[0 == e ? "unbindEvent" : "bindEvent"]("humandetection.change", this.onHumanDetectionChange)
        },
        sendViewBeacon: function() {
            this.notify("Tracked page view.", 1), this.sendBeaconWith()
        },
        sendDurationBeacon: function() {
            if (L.timetracking && "function" == typeof L.timetracking.timeOnPage && null != L.timetracking.timeOnPage()) {
                this.notify("Tracked close", 1), this.sendBeaconWith({
                    timeOnPage: Math.round(L.timetracking.timeOnPage() / 1e3),
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
            return L.extend(t, this.dataProvider.provide()), L.extend(t, e), this.preparePrefix(this.settings.collectionServer) + this.adapt.convertToURI(this.adapt.toNielsen(this.substituteVariables(t)))
        },
        preparePrefix: function(e) {
            return "//" + encodeURIComponent(e) + ".imrworldwide.com/cgi-bin/gn?"
        },
        substituteVariables: function(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = L.replace(e[n]));
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
            L.notify(this.logPrefix + e, t)
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
    }, L.extend(p.DataProvider.Generic.prototype, {
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
    }, L.inherit(p.DataProvider.VisitorID, p.DataProvider.Generic), L.extend(p.DataProvider.VisitorID.prototype, {
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
    }, L.extend(p.DataProvider.Aggregate.prototype, {
        register: function(e) {
            this.providers.push(e)
        },
        isReady: function() {
            return L.every(this.providers, function(e) {
                return e.isReady()
            })
        },
        provide: function() {
            var e = {};
            return L.each(this.providers, function(t) {
                L.extend(e, t.provide())
            }), e
        }
    }), p.UUID = function() {}, L.extend(p.UUID.prototype, {
        generate: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            })
        },
        get: function() {
            var e = L.readCookie(this.key("uuid"));
            return e || (e = this.generate(), L.setCookie(this.key("uuid"), e), e)
        },
        key: function(e) {
            return "_dtm_nielsen_" + e
        }
    }), p.DataAdapters = function() {}, L.extend(p.DataAdapters.prototype, {
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
            if (!1 === L.isObject(e)) return "";
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(n + "=" + e[n]);
            return t.join("&")
        },
        filterObject: function(e) {
            for (var t in e) !e.hasOwnProperty(t) || null != e[t] && e[t] !== n || delete e[t];
            return e
        }
    }), L.availableTools.nielsen = p, L.inherit(v, L.BaseTool), L.extend(v.prototype, {
        name: "SC",
        endPLPhase: function(e) {
            e === this.settings.loadOn && this.initialize(e)
        },
        initialize: function(t) {
            if (!this._cancelToolInit)
                if (this.settings.initVars = this.substituteVariables(this.settings.initVars, {
                        type: t
                    }), !1 !== this.settings.initTool) {
                    var n = this.settings.sCodeURL || L.basePath() + "s_code.js";
                    "object" == typeof n && (n = "https:" === e.location.protocol ? n.https : n.http), n.match(/^https?:/) || (n = L.basePath() + n), this.settings.initVars && this.$setVars(null, null, this.settings.initVars), L.loadScript(n, L.bind(this.onSCodeLoaded, this)), this.initializing = !0
                } else this.initializing = !0, this.pollForSC()
        },
        getS: function(t, n) {
            var i = n && n.hostname || e.location.hostname,
                a = this.concatWithToolVarBindings(n && n.setVars || this.varBindings),
                r = n && n.addEvent || this.events,
                s = this.getAccount(i),
                o = e.s_gi;
            if (!o) return null;
            if (this.isValidSCInstance(t) || (t = null), !s && !t) return L.notify("Adobe Analytics: tracker not initialized because account was not found", 1), null;
            t = t || o(s);
            var c = "D" + L.appVersion;
            return "undefined" != typeof t.tagContainerMarker ? t.tagContainerMarker = c : "string" == typeof t.version && t.version.substring(t.version.length - 5) !== "-" + c && (t.version += "-" + c), t.sa && !0 !== this.settings.skipSetAccount && !1 !== this.settings.initTool && t.sa(this.settings.account), this.applyVarBindingsOnTracker(t, a), r.length > 0 && (t.events = r.join(",")), L.getVisitorId() && (t.visitor = L.getVisitorId()), t
        },
        onSCodeLoaded: function(e) {
            this.initialized = !0, this.initializing = !1;
            var t = ["Adobe Analytics: loaded", e ? " (manual)" : "", "."];
            L.notify(t.join(""), 1), L.fireEvent(this.id + ".load", this.getS()), e || (this.flushQueueExceptTrackLink(), this.sendBeacon()), this.flushQueue()
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
                c = n && n.dc;
            return (r = (i = a).indexOf(",")) >= 0 && (i = i.gb(0, r)), i = i.replace(/[^A-Za-z0-9]/g, ""), o || (o = "2o7.net"), c = c ? ("" + c).toLowerCase() : "d1", "2o7.net" == o && ("d1" == c ? c = "112" : "d2" == c && (c = "122"), s = ""), r = i + "." + c + "." + s + o
        },
        sendBeacon: function() {
            var t = this.getS(e[this.settings.renameS || "s"]);
            t ? this.settings.customInit && !1 === this.settings.customInit(t) ? L.notify("Adobe Analytics: custom init suppressed beacon", 1) : (this.settings.executeCustomPageCodeFirst && this.applyVarBindingsOnTracker(t, this.varBindings), this.executeCustomSetupFuns(t), t.t(), this.clearVarBindings(), this.clearCustomSetup(), L.notify("Adobe Analytics: tracked page view", 1)) : L.notify("Adobe Analytics: page code not loaded", 1)
        },
        pollForSC: function() {
            L.poll(L.bind(function() {
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
                    n[i] = L.replace(a, location, t)
                } return n
        },
        $setVars: function(e, t, n) {
            for (var i in n)
                if (n.hasOwnProperty(i)) {
                    var a = n[i];
                    "function" == typeof a && (a = a()), this.varBindings[i] = a
                } L.notify("Adobe Analytics: set variables.", 2)
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
            return L.map(["trackingServer", "trackingServerSecure"], function(n) {
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
            L.each(this.customSetupFuns, function(n) {
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
                var c = o.linkTrackVars,
                    l = o.linkTrackEvents,
                    u = this.definedVarNames(r);
                n && n.customSetup && n.customSetup.call(e, t, o), s.length > 0 && u.push("events"), o.products && u.push("products"), u = this.mergeTrackLinkVars(o.linkTrackVars, u), s = this.mergeTrackLinkVars(o.linkTrackEvents, s), o.linkTrackVars = this.getCustomLinkVarsList(u);
                var d = L.map(s, function(e) {
                    return e.split(":")[0]
                });
                o.linkTrackEvents = this.getCustomLinkVarsList(d), o.tl(!0, i || "o", a), L.notify(["Adobe Analytics: tracked link ", "using: linkTrackVars=", L.stringify(o.linkTrackVars), "; linkTrackEvents=", L.stringify(o.linkTrackEvents)].join(""), 1), o.linkTrackVars = c, o.linkTrackEvents = l
            } else L.notify("Adobe Analytics: page code not loaded", 1)
        },
        mergeTrackLinkVars: function(e, t) {
            return e && (t = e.split(",").concat(t)), t
        },
        getCustomLinkVarsList: function(e) {
            var t = L.indexOf(e, "None");
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
            r ? (r.linkTrackVars = "", r.linkTrackEvents = "", this.executeCustomSetupFuns(r), n && n.customSetup && n.customSetup.call(e, t, r), r.t(), this.clearVarBindings(), this.clearCustomSetup(), L.notify("Adobe Analytics: tracked page view", 1)) : L.notify("Adobe Analytics: page code not loaded", 1)
        },
        $postTransaction: function(t, n, i) {
            var a = L.data.transaction = e[i],
                r = this.varBindings,
                s = this.settings.fieldVarMapping;
            if (L.each(a.items, function(e) {
                    this.products.push(e)
                }, this), r.products = L.map(this.products, function(e) {
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
                for (var c in s.transaction)
                    if (s.transaction.hasOwnProperty(c)) {
                        i = s.transaction[c];
                        o.push(i + "=" + a[c]), "event" === i.substring(0, 5) && this.events.push(i)
                    } r.products.length > 0 && (r.products += ","), r.products += ";;;;" + o.join("|")
            }
        },
        $addEvent: function() {
            for (var e = 2, t = arguments.length; e < t; e++) this.events.push(arguments[e])
        },
        $addProduct: function() {
            for (var e = 2, t = arguments.length; e < t; e++) this.products.push(arguments[e])
        }
    }), L.availableTools.sc = v, L.inherit(m, L.BaseTool), L.extend(m.prototype, {
        name: "Default",
        $loadIframe: function(t, n, i) {
            var a = i.pages,
                r = i.loadOn,
                s = L.bind(function() {
                    L.each(a, function(e) {
                        this.loadIframe(t, n, e)
                    }, this)
                }, this);
            r || s(), "domready" === r && L.domReady(s), "load" === r && L.addEventHandler(e, "load", s)
        },
        loadIframe: function(e, n, i) {
            var a = t.createElement("iframe");
            a.style.display = "none";
            var r = L.data.host,
                s = i.data,
                o = this.scriptURL(i.src),
                c = L.searchVariables(s, e, n);
            r && (o = L.basePath() + o), o += c, a.src = o;
            var l = t.getElementsByTagName("body")[0];
            l ? l.appendChild(a) : L.domReady(function() {
                t.getElementsByTagName("body")[0].appendChild(a)
            })
        },
        scriptURL: function(e) {
            return (L.settings.scriptDir || "") + e
        },
        $loadScript: function(t, n, i) {
            var a = i.scripts,
                r = i.sequential,
                s = i.loadOn,
                o = L.bind(function() {
                    r ? this.loadScripts(t, n, a) : L.each(a, function(e) {
                        this.loadScripts(t, n, [e])
                    }, this)
                }, this);
            s ? "domready" === s ? L.domReady(o) : "load" === s && L.addEventHandler(e, "load", o) : o()
        },
        loadScripts: function(e, t, n) {
            function i() {
                r.length > 0 && a && r.shift().call(e, t, s);
                var c = n.shift();
                if (c) {
                    var l = L.data.host,
                        u = o.scriptURL(c.src);
                    l && (u = L.basePath() + u), a = c, L.loadScript(u, i)
                }
            }
            try {
                n = n.slice(0);
                var a, r = this.asyncScriptCallbackQueue,
                    s = t.target || t.srcElement,
                    o = this
            } catch (c) {
                console.error("scripts is", L.stringify(n))
            }
            i()
        },
        $loadBlockingScript: function(e, t, n) {
            var i = n.scripts;
            n.loadOn;
            L.bind(function() {
                L.each(i, function(n) {
                    this.loadBlockingScript(e, t, n)
                }, this)
            }, this)()
        },
        loadBlockingScript: function(e, t, n) {
            var i = this.scriptURL(n.src),
                a = L.data.host,
                r = t.target || t.srcElement;
            a && (i = L.basePath() + i), this.argsForBlockingScripts.push([e, t, r]), L.loadScriptSync(i)
        },
        pushAsyncScript: function(e) {
            this.asyncScriptCallbackQueue.push(e)
        },
        pushBlockingScript: function(e) {
            var t = this.argsForBlockingScripts.shift(),
                n = t[0];
            e.apply(n, t.slice(1))
        },
        $writeHTML: L.escapeHtmlParams(function(e, n) {
            if (!L.domReadyFired && t.write)
                if ("pagebottom" === n.type || "pagetop" === n.type)
                    for (var i = 2, a = arguments.length; i < a; i++) {
                        var r = arguments[i].html;
                        r = L.replace(r, e, n), t.write(r)
                    } else L.notify("You can only use writeHTML on the `pagetop` and `pagebottom` events.", 1);
                else L.notify("Command writeHTML failed. You should try appending HTML using the async option.", 1)
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
                L.preventDefault(t);
                var n = L.settings.linkDelay || 100;
                setTimeout(function() {
                    L.setLocation(e.href)
                }, n)
            }
        },
        isQueueable: function(e) {
            return "writeHTML" !== e.command
        }
    }), L.availableTools["default"] = m, L.inherit(y, L.BaseTool), L.extend(y.prototype, {
        initialize: function() {
            var e = this.settings;
            if (!1 !== this.settings.initTool) {
                var t = e.url;
                t = "string" == typeof t ? L.basePath() + t : L.isHttps() ? t.https : t.http, L.loadScript(t, L.bind(this.onLoad, this)), this.initializing = !0
            } else this.initialized = !0
        },
        isQueueAvailable: function() {
            return !this.initialized
        },
        onLoad: function() {
            this.initialized = !0, this.initializing = !1, this.settings.initialBeacon && this.settings.initialBeacon(), this.flushQueue()
        },
        endPLPhase: function(e) {
            e === this.settings.loadOn && (L.notify(this.name + ": Initializing at " + e, 1), this.initialize())
        },
        $fire: function(e, t, n) {
            this.initializing ? this.queueCommand({
                command: "fire",
                arguments: [n]
            }, e, t) : n.call(this.settings, e, t)
        }
    }), L.availableTools.am = y, L.availableTools.adlens = y, L.availableTools.aem = y, L.availableTools.__basic = y, L.extend(b.prototype, {
        getInstance: function() {
            return this.instance
        },
        initialize: function() {
            var e, t = this.settings;
            L.notify("Visitor ID: Initializing tool", 1), null !== (e = this.createInstance(t.mcOrgId, t.initVars)) && (t.customerIDs && this.applyCustomerIDs(e, t.customerIDs), t.autoRequest && e.getMarketingCloudVisitorID(), this.instance = e)
        },
        createInstance: function(e, t) {
            if (!L.isString(e)) return L.notify('Visitor ID: Cannot create instance using mcOrgId: "' + e + '"', 4), null;
            e = L.replace(e), L.notify('Visitor ID: Create instance using mcOrgId: "' + e + '"', 1), t = this.parseValues(t);
            var n = Visitor.getInstance(e, t);
            return L.notify("Visitor ID: Set variables: " + L.stringify(t), 1), n
        },
        applyCustomerIDs: function(e, t) {
            var n = this.parseIds(t);
            e.setCustomerIDs(n), L.notify("Visitor ID: Set Customer IDs: " + L.stringify(n), 1)
        },
        parseValues: function(e) {
            if (!1 === L.isObject(e)) return {};
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = L.replace(e[n]));
            return t
        },
        parseIds: function(e) {
            var t = {};
            if (!1 === L.isObject(e)) return {};
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var i = L.replace(e[n].id);
                    i !== e[n].id && i && (t[n] = {}, t[n].id = i, t[n].authState = Visitor.AuthState[e[n].authState])
                } return t
        }
    }), L.availableTools.visitor_id = b;
    var D = {
        allowLinker: function() {
            return L.hasMultipleDomains()
        },
        cookieDomain: function() {
            var t = L.settings.domainList,
                n = L.find(t, function(t) {
                    var n = e.location.hostname;
                    return L.equalsIgnoreCase(n.slice(n.length - t.length), t)
                });
            return n ? "." + n : "auto"
        }
    };
    L.inherit(k, L.BaseTool), L.extend(k.prototype, {
        name: "GAUniversal",
        endPLPhase: function(e) {
            e === this.settings.loadOn && (L.notify("GAU: Initializing at " + e, 1), this.initialize(), this.flushQueue(), this.trackInitialPageView())
        },
        getTrackerName: function() {
            return this.settings.trackerSettings.name || ""
        },
        isPageCodeLoadSuppressed: function() {
            return !1 === this.settings.initTool || !0 === this._cancelToolInit
        },
        initialize: function() {
            if (this.isPageCodeLoadSuppressed()) return this.initialized = !0, void L.notify("GAU: Page code not loaded (suppressed).", 1);
            var t = "ga";
            e[t] = e[t] || this.createGAObject(), e.GoogleAnalyticsObject = t, L.notify("GAU: Page code loaded.", 1), L.loadScriptOnce(this.getToolUrl());
            var n = this.settings;
            (D.allowLinker() && !1 !== n.allowLinker ? this.createAccountForLinker() : this.createAccount(), this.executeInitCommands(), n.customInit) && (!1 === (0, n.customInit)(e[t], this.getTrackerName()) && (this.suppressInitialPageView = !0));
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
            D.allowLinker() && (e.allowLinker = !0), this.create(e), this.call("require", "linker"), this.call("linker:autoLink", this.autoLinkDomains(), !1, !0)
        },
        create: function(e) {
            var t = this.settings.trackerSettings;
            (t = L.preprocessArguments([t], location, null, this.forceLowerCase)[0]).trackingId = L.replace(this.settings.trackerSettings.trackingId, location), t.cookieDomain || (t.cookieDomain = D.cookieDomain()), L.extend(t, e || {}), this.call("create", t)
        },
        autoLinkDomains: function() {
            var e = location.hostname;
            return L.filter(L.settings.domainList, function(t) {
                return t !== e
            })
        },
        executeInitCommands: function() {
            var e = this.settings;
            e.initCommands && L.each(e.initCommands, function(e) {
                var t = e.splice(2, e.length - 2);
                e = e.concat(L.preprocessArguments(t, location, null, this.forceLowerCase)), this.call.apply(this, e)
            }, this)
        },
        trackInitialPageView: function() {
            this.suppressInitialPageView || this.isPageCodeLoadSuppressed() || this.call("send", "pageview")
        },
        call: function() {
            "function" == typeof ga ? this.isCallSuppressed() || (arguments[0] = this.cmd(arguments[0]), this.log(L.toArray(arguments)), ga.apply(e, arguments)) : L.notify("GA Universal function not found!", 4)
        },
        isCallSuppressed: function() {
            return !0 === this._cancelToolInit
        },
        $missing$: function(e, t, n, i) {
            i = i || [], i = [e].concat(i), this.call.apply(this, i)
        },
        getToolUrl: function() {
            var e = this.settings,
                t = L.isHttps();
            return e.url ? t ? e.url.https : e.url.http : (t ? "https://ssl" : "http://www") + ".google-analytics.com/analytics.js"
        },
        cmd: function(e) {
            var t = ["send", "set", "get"],
                n = this.getTrackerName();
            return n && -1 !== L.indexOf(t, e) ? n + "." + e : e
        },
        log: function(e) {
            var t = "GA Universal: sent command " + e[0] + " to tracker " + (this.getTrackerName() || "default");
            if (e.length > 1) {
                L.stringify(e.slice(1));
                t += " with parameters " + L.stringify(e.slice(1))
            }
            t += ".", L.notify(t, 1)
        }
    }), L.availableTools.ga_universal = k, L.inherit(S, L.BaseTool), L.extend(S.prototype, {
        name: "GA",
        initialize: function() {
            var t = this.settings,
                n = e._gaq,
                i = t.initCommands || [],
                a = t.customInit;
            if (n || (_gaq = []), this.isSuppressed()) L.notify("GA: page code not loaded(suppressed).", 1);
            else {
                if (!n && !S.scriptLoaded) {
                    var r = L.isHttps(),
                        s = (r ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                    t.url && (s = r ? t.url.https : t.url.http), L.loadScript(s), S.scriptLoaded = !0, L.notify("GA: page code loaded.", 1)
                }
                t.domain;
                var o = t.trackerName,
                    c = D.allowLinker(),
                    l = L.replace(t.account, location);
                L.settings.domainList;
                _gaq.push([this.cmd("setAccount"), l]), c && _gaq.push([this.cmd("setAllowLinker"), c]), _gaq.push([this.cmd("setDomainName"), D.cookieDomain()]), L.each(i, function(e) {
                    var t = [this.cmd(e[0])].concat(L.preprocessArguments(e.slice(1), location, null, this.forceLowerCase));
                    _gaq.push(t)
                }, this), a && (this.suppressInitialPageView = !1 === a(_gaq, o)), t.pageName && this.$overrideInitialPageView(null, null, t.pageName)
            }
            this.initialized = !0, L.fireEvent(this.id + ".configure", _gaq, o)
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
                    var e = L.preprocessArguments([this.urlOverride], location, null, this.forceLowerCase);
                    this.$missing$("trackPageview", null, null, e)
                } else this.$missing$("trackPageview")
        },
        endPLPhase: function(e) {
            e === this.settings.loadOn && (L.notify("GA: Initializing at " + e, 1), this.initialize(), this.flushQueue(), this.trackInitialPageView())
        },
        call: function(e, t, n, i) {
            if (!this._cancelToolInit) {
                this.settings;
                var a = this.tracker(),
                    r = this.cmd(e);
                i = i ? [r].concat(i) : [r];
                _gaq.push(i), a ? L.notify("GA: sent command " + e + " to tracker " + a + (i.length > 1 ? " with parameters [" + i.slice(1).join(", ") + "]" : "") + ".", 1) : L.notify("GA: sent command " + e + (i.length > 1 ? " with parameters [" + i.slice(1).join(", ") + "]" : "") + ".", 1)
            }
        },
        $missing$: function(e, t, n, i) {
            this.call(e, t, n, i)
        },
        $postTransaction: function(t, n, i) {
            var a = L.data.customVars.transaction = e[i];
            this.call("addTrans", t, n, [a.orderID, a.affiliation, a.total, a.tax, a.shipping, a.city, a.state, a.country]), L.each(a.items, function(e) {
                this.call("addItem", t, n, [e.orderID, e.sku, e.product, e.category, e.unitPrice, e.quantity])
            }, this), this.call("trackTrans", t, n)
        },
        delayLink: function(e, t) {
            var n = this;
            if (D.allowLinker() && e.hostname.match(this.settings.linkerDomains) && !L.isSubdomainOf(e.hostname, location.hostname)) {
                L.preventDefault(t);
                var i = L.settings.linkDelay || 100;
                setTimeout(function() {
                    n.call("link", e, t, [e.href])
                }, i)
            }
        },
        popupLink: function(t, n) {
            if (e._gat) {
                L.preventDefault(n);
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
                L.isNaN(i) && (i = 1), n[3] = i
            }
            this.call("trackEvent", e, t, n)
        }
    }), L.availableTools.ga = S, _satellite.init({
        tools: {
            dc18c7e34c41ba71a42bcb198857b150: {
                engine: "sc",
                loadOn: "pagebottom",
                account: "conde-newyorker",
                euCookie: !1,
                sCodeURL: "6372cf21ef88ee60bc2977a4898dcb5c7945a212/s-code-contents-ccf9641ce97e125b8240868abea8d17068909488.js",
                renameS: "s",
                initVars: {
                    charSet: "UTF-8",
                    currencyCode: "USD",
                    trackingServer: "stats2.newyorker.com",
                    trackingServerSecure: "sstats.newyorker.com",
                    campaign: L.getQueryParam("mbid"),
                    pageName: "%Page Name%",
                    channel: "%Site Section%",
                    trackInlineStats: !0,
                    trackDownloadLinks: !1,
                    trackExternalLinks: !0,
                    linkInternalFilters: ".newyorker.com,javascript:,mailto:,tel:",
                    linkLeaveQueryString: !1,
                    dynamicVariablePrefix: "D=",
                    eVar2: "%Page Name%",
                    eVar3: "%Content Title%",
                    eVar4: "%Content ID%",
                    eVar5: "%Content Type%",
                    eVar6: "%Site Section%",
                    eVar7: "%Sub Section%",
                    eVar8: "%Last Modified Date%",
                    eVar32: "%Pagination/Slide #%",
                    eVar44: "%Article Number/Volume%",
                    eVar55: "%Contributor%",
                    eVar60: "%Content Length%",
                    eVar61: "%Time Since Published%",
                    eVar62: "%Publish Date%",
                    eVar65: "%Brand%",
                    eVar74: "%Content Source%",
                    prop3: "D=v3",
                    prop4: "D=v4",
                    prop5: "D=v5",
                    prop6: "D=v6",
                    prop7: "D=v7",
                    prop8: "D=v8",
                    prop32: "D=v32",
                    prop44: "D=v44",
                    prop55: "D=v55",
                    prop60: "D=v60",
                    prop61: "D=v61",
                    prop65: "D=v65",
                    prop74: "D=v74",
                    prop70: "%App Version%"
                },
                customInit: function(i) {
                    function a(i) {
                        function a() {
                            return l.amg_user_partner ? "logged in" : "not logged in"
                        }

                        function s() {
                            return l.amg_user_partner || ""
                        }

                        function o() {
                            return l.CN_xid || ""
                        }

                        function c() {
                            return l.aam_uuid || ""
                        }
                        var l = {};
                        e.document.cookie.split("; ").forEach(function(e) {
                            e.length > 0 && (e = e.split("="), l[e[0]] = decodeURIComponent(e[1]))
                        }), i.eVar16 = i.prop16 = a(), i.eVar52 = i.prop52 = s(), i.eVar24 = o(), i.eVar108 = c(), i.campaign && (i.eVar15 = i.eVar20 = "D=v0"), i.eVar85 = i.Util.getQueryParam("source"), i.eVar86 = i.Util.getQueryParam("pos_name"), i.eVar87 = i.Util.getQueryParam("segment"), i.events = i.apl(i.events, "event2", ",", 2), i.eVar10 || (i.eVar10 = i.Util.getQueryParam("intcid"), i.eVar10 = i.getValOnce(i.eVar10, "s_eVar10", 0)), i.ActionDepthTest && (i.pdvalue = i.getActionDepth("s_depth"), 5 == i.pdvalue && (i.events = i.apl(i.events, "event26", ",", 2)), 1 == i.pdvalue && (i.events = i.apl(i.events, "event28", ",", 2)), i.ActionDepthTest = !1), i.d_url = i.downloadLinkHandler(i.linkDownloadFileTypes), i.d_url && (i.events = i.apl(i.events, "event18", ",", 2), i.linkTrackVars = "events", i.linkTrackEvents = "event18,");
                        var u = i.getTimeSpent("event82");
                        u && (i.events = i.apl(i.events, u, ",", 2)), i.socialPlatforms("eVar71"), i.prop17 = i.eVar17 = i.getVisitNumCustom("m"), i.prop68 = i.eVar68 = i.getPreviousValue(i.pageName, "s_ppn"), i.prop35 = i.eVar35 = i.getPreviousValue(i.eVar5, "s_pct"), 1 == i.pdvalue && localStorage.cId && localStorage.removeItem("cId");
                        var d = _satellite.getVar("Content ID"),
                            h = _satellite.getVar("Content Type"),
                            f = [],
                            g = "";
                        "homepage" !== h && "index" !== h && "subindex" !== h && "search" !== h && "null" !== d && d !== n ? (localStorage.getItem("cId") ? ((f = localStorage.cId.split("|")).push(d), d = f.join("|")) : ((f = []).push(d), d = f.join("|")), localStorage.setItem("cId", d)) : localStorage.cId && (f = (f = localStorage.getItem("cId")).split("|"));
                        for (var p = f.filter(function(e, t, n) {
                                return n.indexOf(e) == t
                            }), v = {}, m = 0; m < p.length; m++) v[p[m]] = 1 + (v[p[m]] || 0);
                        if (g = m, i.prop58 = i.eVar58 = g, i.eVar56 = r(), i.prop56 = "D=v56", i.eVar51 = i.getRwd(!0, 750, 980), i.prop51 = "D=v51", i.eVar23 = i.getNewRepeat(), i.prop23 = "D=v23", i.eVar11 = i.getTimeParting("n", "-5"), i.prop11 = "D=v11", i.referrer = i.dedupeReferrers(), i.isReferrer = i.referrer ? i.referrer : t.referrer, i.isReferrer) {
                            for (i.noQReferrer = i.isReferrer.indexOf("?") > -1 ? i.isReferrer.substring(0, i.isReferrer.indexOf("?")) : i.isReferrer, i.refArr = i.split(i.noQReferrer, "/"), i.refSub = i.refArr.length > 1 ? i.refArr[2].toLowerCase() : i.noQReferrer.toLowerCase(), i.lnkIntFltArray = i.split(i.linkInternalFilters, ","), i.lnkIntFltArrLen = i.lnkIntFltArray.length - 1, i.qI = 0; i.qI <= i.lnkIntFltArrLen && (!i.lnkIntFltArray[i.qI] || (i.inFilts = -1 != i.refSub.indexOf(i.lnkIntFltArray[i.qI]), !i.inFilts)); i.qI++);
                            "undefined" != typeof i.inFilts && 0 == i.inFilts && (i.refSubArr = i.refSub.split("."), i.refSubArr.length > 2 ? "com" == i.refSubArr[i.refSubArr.length - 2] || "co" == i.refSubArr[i.refSubArr.length - 2] ? i.eVar39 = i.refSubArr[i.refSubArr.length - 3] + "." + i.refSubArr[i.refSubArr.length - 2] + "." + i.refSubArr[i.refSubArr.length - 1] : i.eVar39 = i.refSubArr[i.refSubArr.length - 2] + "." + i.refSubArr[i.refSubArr.length - 1] : i.eVar39 = i.refSub, i.eVar30 = "www." == i.refSub.substring(0, 4) ? i.refSub.substring(4) : i.refSub)
                        }
                        i.eVar30 = i.getAndPersistValue(i.eVar30, "v30", 0), i.eVar39 = i.getAndPersistValue(i.eVar39, "v39", 0), i.prop39 = i.eVar39 ? "D=v39" : "", i.prop30 = i.eVar30 ? "D=v30" : ""
                    }

                    function r() {
                        if (!e.s_loadT) {
                            var t = (new Date).getTime(),
                                n = e.performance ? performance.timing : 0,
                                i = n ? n.requestStart : e.inHeadTS || 0;
                            s_loadT = i ? ((t - i) / 1e3).toFixed(1) : ""
                        }
                        return s_loadT < 0 ? "" : s_loadT
                    }! function(n) {
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
                    }(4419), "Error" == _satellite.getVar("Content Type") && (i.events = "event9", i.pageName = i.eVar2 = t.URL), "Search" == _satellite.getVar("Content Type") && (i.events = "event1", i.prop2 = _satellite.getVar("Num of Search Results"), i.prop1 = i.eVar1 = _satellite.getVar("Search Terms")), i.prop50 = i.list2 = _satellite.getVar("Onsite Keywords"), i.ActionDepthTest = !0, i.socAuthVar = "eVar72", i.linkInternalFilters = _satellite.getVar("Internal Filters"), i.linkTrackVars = "evar21,evar39,evar40,prop34,events", i.linkTrackEvents = "event3,event4,event10,event11,event12,event13,event20,event21,event22,event23,event24,event25,event29,event30,event31,event32,event37,event38", i._tpDST = {
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
                        if (typeof t.linkType === n || "" != t.linkType || "" == t.linkType && "" == t.eo) {
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
                    }, i.getNewRepeat = new Function("d", "cn", "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}"), i.getTimeParting = new Function("h", "z", "var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMonth()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYear());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de){z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d.getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' PM';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}"), i.dedupeReferrers = new Function("c", "b", "var s=this,a,g,i,j,k,l,m,n,o;g=s.referrer?s.referrer:document.referrer;g=g.toLowerCase();if(g){i=g.indexOf('?')>-1?g.indexOf('?'):g.length;j=g.substring(0,i);k=s.linkInternalFilters.toLowerCase();k=s.split(k,',');l=k.length;for(m=0;m<l;m++){n=j.indexOf(k[m])>-1?g:'';if(n)o=n}if(!o){c=c?c:'_dr';b=b?b-1:'1';a=g;a=s.getValOnce(a,c,0);if(a){return a}else{return k[b]}}}"), i.loadModule("Integrate"), i.Integrate.onLoad = function() {}
                }
            }
        },
        pageLoadRules: [{
            name: "Criteo Detag",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-59efa1aa64746d28600018fd.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: [/^\/?(\?.*)?$/i]
                }
            },
            conditions: [function() {
                function t() {
                    return !!(n.amg_user_partner && n.amg_user)
                }
                var n = {};
                return e.document.cookie.split("; ").forEach(function(e) {
                    e.length > 0 && (e = e.split("="), n[e[0]] = decodeURIComponent(e[1]))
                }), t()
            }],
            event: "pagebottom"
        }, {
            name: "Facebook NL Sign Up Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5a2ff7f664746d1dae0095f7.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["https://www.newyorker.com/newsletters/"]
                }
            },
            event: "pagebottom"
        }, {
            name: "Set EVOLOK abGroup/abValue",
            trigger: [{
                engine: "sc",
                command: "setVars",
                arguments: [{
                    eVar103: "%EvolokABGroup%",
                    eVar104: "%EvolokABValue%"
                }]
            }],
            event: "pagebottom"
        }, {
            name: "Singapore Airlines - Innovation",
            trigger: [{
                command: "loadScript",
                arguments: [{
                    sequential: !1,
                    scripts: [{
                        src: "satellite-5a3049c164746d351100e2bd.js"
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["https://paidpost.newyorker.com/article/singapore-airlines/innovation-in-the-air"]
                }
            },
            event: "pagetop"
        }, {
            name: "eBay Homepage Pixel",
            trigger: [{
                command: "loadIframe",
                arguments: [{
                    pages: [{
                        src: "satellite-5a26d1f464746d3f4e007a0b.html",
                        data: []
                    }]
                }]
            }],
            scope: {
                URI: {
                    include: ["https://www.newyorker.com"]
                }
            },
            event: "pagebottom"
        }],
        rules: [],
        directCallRules: [{
            name: "subscriptionLinkSuccess",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Account Link Succes",
                    addEvent: ["event7"]
                }]
            }]
        }, {
            name: "advanced-search-submit",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "Advanced Search",
                    setVars: {
                        eVar1: "%Search Terms%",
                        eVar106: "%Filter/Facets%",
                        eVar39: "%Referring Domain%",
                        prop2: "%Num of Search Results%"
                    }
                }]
            }]
        }, {
            name: "festivalSignUp",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    setVars: {
                        eVar10: "festival-email-submit",
                        eVar39: "%Referring Domain%"
                    },
                    addEvent: ["event27"]
                }]
            }]
        }, {
            name: "infinite-scroll",
            trigger: [{
                engine: "sc",
                command: "trackPageView",
                arguments: [{
                    setVars: {
                        eVar10: "infinite-scroll",
                        eVar103: "%EvolokABGroup%",
                        eVar104: "%EvolokABValue%",
                        eVar2: "%Page Name%",
                        eVar3: "%Content Title%",
                        eVar32: "%Pagination/Slide #%",
                        eVar4: "%Content ID%",
                        eVar44: "%Article Number/Volume%",
                        eVar5: "Current Topic",
                        eVar55: "%Contributor%",
                        eVar6: "%Site Section%",
                        eVar60: "%Content Length%",
                        eVar61: "%Time Since Published%",
                        eVar62: "%Publish Date%",
                        eVar65: "%Brand%",
                        eVar7: "%Sub Section%",
                        eVar74: "%Content Source%",
                        eVar8: "%Last Modified Date%",
                        prop3: "D=v3",
                        prop32: "D=v32",
                        prop4: "D=v4",
                        prop44: "D=v44",
                        prop5: "D=v5",
                        prop55: "D=v55",
                        prop6: "D=v6",
                        prop60: "D=v60",
                        prop61: "D=v61",
                        prop62: "D=v62",
                        prop65: "D=v65",
                        prop7: "D=v7",
                        prop70: "%App Version%",
                        prop74: "D=v74",
                        prop8: "D=v8",
                        pageName: "%Page Name%",
                        channel: "%Site Section%",
                        campaign: L.getQueryParam("mbid")
                    },
                    addEvent: ["event2"]
                }]
            }]
        }, {
            name: "login",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "login",
                    addEvent: ["event21"]
                }]
            }]
        }, {
            name: "montlyCounts",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    setVars: {
                        eVar17: "%Monthly Visits%",
                        eVar44: "%Article Number/Volume%",
                        prop17: "D=v17",
                        prop44: "D=v44",
                        channel: "%Page Name%",
                        pageURL: "%Site Section%"
                    }
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
                        eVar39: "%Referring Domain%",
                        channel: "%Site Section%",
                        pageURL: "%Page Name%"
                    },
                    addEvent: ["event27"]
                }]
            }]
        }, {
            name: "nlSignup",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    type: "o",
                    linkName: "NL Signup Interstitial",
                    setVars: {
                        eVar10: "NL Signup",
                        eVar39: "%Referring Domain%",
                        channel: "%Site Section%",
                        pageURL: "%Page Name%"
                    },
                    customSetup: function(t, n) {
                        e.parent.top._satellite.getVar("Onsite Keywords") && (n.list2 = e.parent.top._satellite.getVar("Onsite Keywords"))
                    },
                    addEvent: ["event11"]
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
            name: "pageView",
            trigger: [{
                engine: "sc",
                command: "trackPageView",
                arguments: [{
                    setVars: {
                        eVar103: "%EvolokABGroup%",
                        eVar104: "%EvolokABValue%",
                        eVar2: "%Page Name%",
                        eVar3: "%Content Title%",
                        eVar32: "%Pagination/Slide #%",
                        eVar4: "%Content ID%",
                        eVar44: "%Article Number/Volume%",
                        eVar5: "%Content Type%",
                        eVar55: "%Contributor%",
                        eVar6: "%Site Section%",
                        eVar60: "%Content Length%",
                        eVar61: "%Time Since Published%",
                        eVar62: "%Publish Date%",
                        eVar65: "%Brand%",
                        eVar7: "%Sub Section%",
                        eVar74: "%Content Source%",
                        eVar8: "%Last Modified Date%",
                        prop3: "D=v3",
                        prop32: "D=v32",
                        prop4: "D=v4",
                        prop44: "D=v44",
                        prop5: "D=v5",
                        prop55: "D=v55",
                        prop6: "D=v6",
                        prop60: "D=v60",
                        prop61: "D=v61",
                        prop62: "D=v62",
                        prop65: "D=v65",
                        prop7: "D=v7",
                        prop70: "%App Version%",
                        prop74: "D=v74",
                        prop8: "D=v8",
                        pageName: "%Page Name%",
                        channel: "%Site Section%",
                        campaign: L.getQueryParam("mbid")
                    },
                    addEvent: ["event2"]
                }]
            }]
        }, {
            name: "barrierfull",
            trigger: [{
                engine: "sc",
                command: "trackLink",
                arguments: [{
                    setVars: {
                        eVar10: "barrierfull",
                        eVar39: "%Referring Domain%"
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
                    setVars: {
                        eVar10: "barrierhalf",
                        eVar39: "%Referring Domain%"
                    },
                    addEvent: ["event41"]
                }]
            }]
        }],
        settings: {
            trackInternalLinks: !0,
            libraryName: "satelliteLib-fd2e38c2a1cccb723029dc3b607e196906c8bf93",
            isStaging: !1,
            allowGATTcalls: !1,
            downloadExtensions: /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
            notifications: !1,
            utilVisible: !1,
            domainList: ["newyorker.com"],
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
            "Article Number/Volume": {
                jsVariable: "digitalData.articleNumber",
                storeLength: "pageview"
            },
            Brand: {
                jsVariable: "digitalData.brand",
                "default": "null",
                storeLength: "pageview"
            },
            "Content ID": {
                jsVariable: "digitalData.contentID",
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
                jsVariable: "document.title",
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
            EvolokABGroup: {
                customJS: function() {
                    try {
                        return "undefined" != typeof e.EVOLOK.activeMeter.abGroup && "" != e.EVOLOK.activeMeter.abGroup ? e.EVOLOK.activeMeter.abGroup : ""
                    } catch (t) {
                        return ""
                    }
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            EvolokABValue: {
                customJS: function() {
                    try {
                        return "undefined" != typeof e.EVOLOK.activeMeter.abValue && "" != e.EVOLOK.activeMeter.abValue ? e.EVOLOK.activeMeter.abValue : ""
                    } catch (t) {
                        return ""
                    }
                },
                storeLength: "pageview",
                forceLowerCase: !0
            },
            "Filter/Facets": {
                jsVariable: "digitalData.facets",
                "default": "null",
                storeLength: "pageview"
            },
            "Infinity ID": {
                cookie: "CN_xid",
                storeLength: "pageview"
            },
            "Internal Filters": {
                customJS: function() {
                    return "newyorker.com,advancemags.com,traffic.outbrain.com,javascript:"
                },
                storeLength: "pageview"
            },
            "Last Modified Date": {
                jsVariable: "digitalData.modifiedDate",
                "default": "null",
                storeLength: "pageview"
            },
            "Login Status": {
                customJS: function() {
                    function t() {
                        return n.amg_user_partner && n.amg_user ? "logged in" : "not logged in"
                    }
                    var n = {};
                    return e.document.cookie.split("; ").forEach(function(e) {
                        e.length > 0 && (e = e.split("="), n[e[0]] = decodeURIComponent(e[1]))
                    }), t()
                },
                "default": "null",
                storeLength: "pageview"
            },
            "Monthly Visits": {
                jsVariable: "digitalData.monthlyVisits",
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
                jsVariable: "digitalData.canonical",
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
            paywallHalfBarrierCloseButton: {
                selector: "#close-b-modal",
                property: "id",
                storeLength: "pageview"
            },
            "PP-Author": {
                jsVariable: "TNY.Stats.omniture._conditions.hero",
                "default": "null",
                storeLength: "pageview"
            },
            "PP-URL": {
                jsVariable: "document.URL",
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
            "Syndicator URL": {
                jsVariable: "digitalData.syndicatorUrl",
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
            }
        },
        appVersion: "7QN",
        buildDate: "2019-03-18 14:46:23 UTC",
        publishDate: "2019-03-18 14:46:22 UTC"
    })
}(window, document);