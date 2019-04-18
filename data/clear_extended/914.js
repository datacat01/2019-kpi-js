! function(s) {
    var i, l, c, a = {},
        u = !0,
        m = 0,
        d = 5;

    function f(t, r) {
        try {
            if ("function" != typeof t) return t;
            if (!t.bugsnag) {
                var o = p();
                t.bugsnag = function(e) {
                    if (r && r.eventHandler && (i = e), l = o, !u) {
                        var n = t.apply(this, arguments);
                        return l = null, n
                    }
                    try {
                        return t.apply(this, arguments)
                    } catch (e) {
                        throw a.notifyException(e), m += 1, s.setTimeout(function() {
                            m -= 1
                        }), e
                    } finally {
                        l = null
                    }
                }, t.bugsnag.bugsnag = t.bugsnag
            }
            return t.bugsnag
        } catch (e) {
            return t
        }
    }
    a.notifyException = function(e, n) {
        e && (g(n = n || {}), E({
            name: e.name,
            message: e.message || e.description,
            stacktrace: N(e) || w(),
            file: e.fileName || e.sourceURL,
            lineNumber: e.lineNumber || e.line,
            columnNumber: e.columnNumber ? e.columnNumber + 1 : void 0
        }, n))
    }, a.notify = function(e, n, t) {
        e || (e = "RGNotify", y(n = "Bugsnag.notify() was called with no arguments")), E({
            name: e,
            message: n,
            stacktrace: w(),
            file: s.location.toString(),
            lineNumber: 1
        }, t)
    };
    var t = "complete" !== document.readyState;

    function e() {
        t = !1
    }

    function p() {
        var e = document.currentScript || l;
        if (!e && t) {
            var n = document.scripts || document.getElementsByTagName("script");
            e = n[n.length - 1]
        }
        return e
    }

    function g(e) {
        var n = p();
        n && (e.script = {
            src: n.src,
            content: n.innerHTML ? n.innerHTML.substr(0, 50) : void 0
        })
    }
    document.addEventListener ? (document.addEventListener("DOMContentLoaded", e, !0), s.addEventListener("load", e, !0)) : s.attachEvent("onload", e);
    var v = {},
        h = /function\s*([\w\-$]+)?\s*\(/i;

    function y(e) {
        var n = s.console;
        void 0 !== n && void 0 !== n.log && n.log("[Bugsnag] " + e)
    }

    function b(e, n, t) {
        var r = function() {
                delete v[t]
            },
            o = new XMLHttpRequest;
        o.open("POST", e), o.onload = r, o.onerror = r, o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var a = function e(n, t, r) {
            if (d <= r) return encodeURIComponent(t) + "=[RECURSIVE]";
            r = r + 1 || 1;
            try {
                if (s.Node && n instanceof s.Node) return encodeURIComponent(t) + "=" + encodeURIComponent(L(n));
                var o = [];
                for (var a in n)
                    if ((!n.hasOwnProperty || n.hasOwnProperty(a)) && null != a && null != n[a]) {
                        var i = t ? t + "[" + a + "]" : a,
                            c = n[a];
                        o.push("object" == typeof c ? e(c, i, r) : encodeURIComponent(i) + "=" + encodeURIComponent(c))
                    } return o.sort().join("&")
            } catch (e) {
                return encodeURIComponent(t) + "=" + encodeURIComponent("" + e)
            }
        }(n);
        o.send(a)
    }

    function C(e, n) {
        var t = null,
            r = "requestConfig" === (n = n || "pageConfig");
        return void 0 !== s.rgConfig && void 0 !== s.rgConfig[e] ? t = s.rgConfig[e] : r && void 0 !== s.requestCachedConfig && void 0 !== s.requestCachedConfig[e] ? t = s.requestCachedConfig[e] : void 0 !== s[n] && void 0 !== s[n][e] && (t = s[n][e]), "false" === t && (t = !1), t
    }

    function E(e, n) {
        if (s.atob && !s.frameElement && ("undefined" != typeof RGCommons && RGCommons.debug && RGCommons.debug.logException({
                Type: "JavascriptException",
                PreviousType: e.name,
                message: e.message,
                File: e.file,
                Line: e.lineNumber + ":" + e.columnNumber
            }), !e.file || !e.file.match(/\/pdf\.viewer\.js$/))) {
            var t = [e.name, e.message, e.stacktrace].join("|");
            if (t !== c) {
                var r;
                c = t, "object" != typeof(n = n || {}) && (n = {
                    metaData: n
                }), i && (n.lastEvent = (r = i, {
                    millisecondsAgo: new Date - r.timeStamp,
                    type: r.type,
                    which: r.which,
                    target: L(r.target)
                })), "pageLoadedTimestamp" in s && (n.pageLoadedTimestamp = s.pageLoadedTimestamp);
                var o = {
                    Module: C("module"),
                    Action: C("action"),
                    PageId: null,
                    CorrelationId: C("correlationId", "requestConfig"),
                    jsMetaData: n,
                    Request: s.location.href,
                    UserAgent: navigator.userAgent,
                    Type: "JavascriptException",
                    PreviousType: e.name,
                    message: e.message,
                    Stacktrace: e.stacktrace,
                    File: e.file,
                    Line: e.lineNumber,
                    Column: e.columnNumber
                };
                if (0 === o.Line && /Script error\.?/.test(o.message)) return y("Ignoring cross-domain script error.");
                var a = JSON.stringify(o);
                a.length && v.hasOwnProperty(a) || (v[a] = null, b("go.Error.html", o, a))
            }
        }
    }

    function w() {
        var n, e = "[anonymous]";
        try {
            throw new Error("")
        } catch (e) {
            n = N(e)
        }
        if (!n) {
            var t = [];
            try {
                for (var r = arguments.callee.caller.caller; r && t.length < 10;) {
                    var o = h.test(r.toString()) && RegExp.$1 || e;
                    t.push(o), r = r.caller
                }
            } catch (e) {
                y(e)
            }
            n = t.join("\n")
        }
        return n
    }

    function N(e) {
        return e.stack || e.backtrace || e.stacktrace
    }

    function L(e) {
        if (e) {
            var n = e.attributes;
            if (n) {
                for (var t = "<" + e.nodeName.toLowerCase(), r = 0; r < n.length; r++) n[r].value && "null" !== n[r].value.toString() && (t += " " + n[r].name + '="' + n[r].value + '"');
                return t + ">"
            }
            return e.nodeName
        }
    }
    if (s.atob) {
        if (s.ErrorEvent) try {
            0 === new s.ErrorEvent("test").colno && (u = !1)
        } catch (e) {}
    } else u = !1;

    function r(e, n, t) {
        var r = e[n];
        e[n] = t(r)
    }
    r(s, "onerror", function(u) {
        return function(e, n, t, r, o) {
            var a, i, c = {};
            (!r && s.event && (r = s.event.errorCharacter), g(c), l = null, m) || (i = 1 === arguments.length ? (a = e && e.type ? "Event: " + e.type : "window.onerror", e && e.detail ? e.detail : void 0) : (a = o && o.name || "window.onerror", e), E({
                name: a,
                message: i,
                file: n,
                lineNumber: t,
                columnNumber: r,
                stacktrace: o && N(o) || w()
            }, c));
            u && u(e, n, t, r, o)
        }
    });
    var n = function(r) {
        return function(e, n) {
            if ("function" != typeof e) return r(e, n);
            e = f(e);
            var t = Array.prototype.slice.call(arguments, 2);
            return r(function() {
                e.apply(this, t)
            }, n)
        }
    };
    r(s, "setTimeout", n), r(s, "setInterval", n), s.requestAnimationFrame && r(s, "requestAnimationFrame", function(n) {
        return function(e) {
            return n(f(e))
        }
    }), s.setImmediate && r(s, "setImmediate", function(n) {
        return function() {
            var e = Array.prototype.slice.call(arguments);
            return e[0] = f(e[0]), n.apply(this, e)
        }
    }), "onunhandledrejection" in s && s.addEventListener("unhandledrejection", function(e) {
        var n = e.reason;
        n || (n = {});
        var t = {};
        g(t), n.message || (t.promiseRejectionValue = n), E({
            name: n.name ? n.name : "UnhandledRejection",
            message: n.message ? n.message : "",
            stacktrace: N(n) || w(),
            file: n.fileName || n.sourceURL,
            lineNumber: n.lineNumber || n.line,
            columnNumber: n.columnNumber ? n.columnNumber + 1 : void 0
        }, t)
    }), "EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g, function(e) {
        var n = s[e] && s[e].prototype;
        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (r(n, "addEventListener", function(o) {
            return function(e, n, t, r) {
                try {
                    n && n.handleEvent && (n.handleEvent = f(n.handleEvent, {
                        eventHandler: !0
                    }))
                } catch (e) {
                    y(e)
                }
                return o.call(this, e, f(n, {
                    eventHandler: !0
                }), t, r)
            }
        }), r(n, "removeEventListener", function(o) {
            return function(e, n, t, r) {
                return o.call(this, e, n, t, r), o.call(this, e, f(n), t, r)
            }
        }))
    }), s.Bugsnag = a
}(window);