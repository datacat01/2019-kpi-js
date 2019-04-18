! function(e) {
    "use strict";
    e.console || (e.console = {});
    for (var r, n, t = e.console, o = function() {}, a = ["memory"], i = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); r = a.pop();) t[r] || (t[r] = {});
    for (; n = i.pop();) t[n] || (t[n] = o)
}("undefined" == typeof window ? this : window);
var BJ_REPORT = function(i) {
    if (i.BJ_REPORT) return i.BJ_REPORT;
    var u = [],
        n = {},
        l = {
            namespace: "",
            appname: "",
            url: "",
            hb_url: "",
            ext: null,
            level: 4,
            ignore: [],
            random: 1,
            delay: 2e3,
            submit: null,
            repeat: 5,
            uid: function r() {
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var r = 16 * Math.random() | 0,
                        n = "x" == e ? r : 3 & r | 8;
                    return n.toString(16)
                })
            }(),
            bid: "",
            router: "",
            perf_url: "",
            perf_filter_list: [],
            perf_timeout: 0,
            pref_count: 0
        },
        t = function O(e) {
            try {
                for (var r, n = window.location.href, t = n.substring(n.indexOf("?") + 1, n.length).split("&"), o = {}, a = 0; r = t[a]; a++) o[r.substring(0, r.indexOf("=")).toLowerCase()] = r.substring(r.indexOf("=") + 1, r.length);
                var i = o[e.toLowerCase()];
                return void 0 === i ? "" : i
            } catch (c) {
                console && console.error(c)
            }
        }("debugid"),
        o = e("sid"),
        a = e("userid"),
        c = "undefined" != typeof __domAliveNum ? __domAliveNum : 200;

    function e(e) {
        try {
            var r = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
            return null != r ? unescape(r[2]) : null
        } catch (n) {
            console && console.error(n)
        }
    }

    function s(e) {
        (new Image).src = e, (new Image).src = e.replace("https://err.", "https://collect.")
    }

    function d() {
        try {
            var o = {};
            if (document.body) {
                ! function a(e) {
                    if (1 === e.nodeType) {
                        var r = e.nodeName;
                        o[r] = o[r] ? o[r] + 1 : 1, o.ALL = o.ALL ? o.ALL + 1 : 1
                    }
                    for (var n = e.childNodes, t = 0; t < n.length; t++) a(n[t])
                }(document);
                try {
                    o.rootNum = document.getElementById("root").getElementsByTagName("*").length
                } catch (e) {
                    o.rootNum = 0, console && console.error(e)
                }
                return o
            }
            return {
                description: "document.body is not ok"
            }
        } catch (e) {
            console && console.error(e)
        }
    }

    function p() {
        return document.addEventListener ? function(e, r, n, t) {
            e.addEventListener(r, n, t || !1)
        } : function(r, e, n) {
            r.attachEvent("on" + e, function(e) {
                n.call(r, e)
            })
        }
    }

    function f(e) {
        try {
            if (!e) return !1;
            if (-1 < e.indexOf("err.ifengcloud.ifeng.com")) return !1;
            for (var r = 0; r < l.perf_filter_list.length; r++)
                if (-1 < e.indexOf(l.perf_filter_list[r])) return !0;
            return !1
        } catch (n) {
            return console && console.error(n), !1
        }
    }

    function m() {
        try {
            var e = window.performance;
            if (!e) return;
            var r = [],
                n = e.timing;
            if (n) {
                var t = {};
                t.loadPage = n.domComplete - n.fetchStart, t.domReady = n.domContentLoadedEventEnd - n.fetchStart, t.redirect = n.redirectEnd - n.redirectStart, t.appcache = n.domainLookupStart - n.fetchStart, t.dns = n.domainLookupEnd - n.domainLookupStart, t.tcp = n.connectEnd - n.connectStart, t.ttfb = n.responseStart - (n.navigationStart || n.fetchStart), t.request = n.responseEnd - n.requestStart, t.response = n.responseEnd - n.responseStart, t.loadEvent = n.loadEventEnd - n.loadEventStart, t.unloadEvent = n.unloadEventEnd - n.unloadEventStart, t.name = window.location.href.replace(/\?.*/, ""), r.push(t)
            }
            if (e.getEntries)
                for (var o = e.getEntries("*"), a = 0, i = o.length; a < i; a++) {
                    var c = o[a];
                    if (0 == a && 0 < r.length) r[0].duration = parseInt(c.duration), 0 < parseInt(c.domComplete) && (r[0].loadPage = parseInt(c.domComplete)), 0 < parseInt(c.domContentLoadedEventEnd) && (r[0].domReady = parseInt(c.domContentLoadedEventEnd));
                    else if (c.name && (-1 != c.name.indexOf(".css") || -1 != c.name.indexOf(".js"))) {
                        var s = {
                            name: c.name,
                            duration: parseInt(c.duration),
                            _duration: parseInt(c.responseEnd - c.startTime),
                            redirect: parseInt(c.redirectEnd - c.redirectStart),
                            appcache: parseInt(c.domainLookupStart - c.fetchStart),
                            dns: parseInt(c.domainLookupEnd - c.domainLookupStart),
                            tcp: parseInt(c.connectEnd - c.connectStart),
                            request: parseInt(c.responseStart - c.requestStart),
                            response: parseInt(c.responseEnd - c.responseStart)
                        };
                        f(c.name) && r.push(s)
                    }
                }
            return r.slice(0, l.pref_count)
        } catch (u) {
            return console && console.error(u), []
        }
    }
    var v = {
            isOBJByType: function(e, r) {
                return Object.prototype.toString.call(e) === "[object " + (r || "Object") + "]"
            },
            isOBJ: function(e) {
                return "object" === typeof e && !!e
            },
            isEmpty: function(e) {
                return null === e || !v.isOBJByType(e, "Number") && !e
            },
            extend: function(e, r) {
                for (var n in r) e[n] = r[n];
                return e
            },
            processError: function(e) {
                try {
                    if (e.stack) {
                        var r = e.stack.match('https?://[^\n"]+'),
                            n = (r = r ? r[0] : "").match(/:(\d+):(\d+)\)?/);
                        n || (n = [0, 0, 0]);
                        var t = v.processStackMsg(e),
                            o = e.type ? e.type : 0;
                        return {
                            msg: e.toString(),
                            type: o,
                            rowNum: n[1],
                            colNum: n[2],
                            target: r.replace(n[0], ""),
                            _orgMsg: t
                        }
                    }
                    o = e.type ? e.type : 0;
                    return e.name && e.message && e.description ? {
                        msg: JSON.stringify(e),
                        type: o,
                        rowNum: 0,
                        colNum: 0,
                        target: "null"
                    } : e
                } catch (err) {
                    return e
                }
            },
            processStackMsg: function(e) {
                var r = e.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 9).join("@").replace(/\?[^:]+/gi, ""),
                    n = e.toString();
                return r.indexOf(n) < 0 && (r = n + "@" + r), r
            },
            isRepeat: function(e) {
                if (!v.isOBJ(e)) return !0;
                var r = e.msg;
                return (n[r] = (parseInt(n[r], 10) || 0) + 1) > l.repeat
            }
        },
        h = i.onerror;
    i.onerror = function(e, r, n, t, o) {
        try {
            var a = e;
            o && o.stack && (a = v.processStackMsg(o)), v.isOBJByType(a, "Event") && (a += a.type ? "--" + a.type + "--" + (a.target ? a.target.tagName + "::" + a.target.src : "") : ""), a += ", alive：" + JSON.stringify(d()), b.push({
                msg: a,
                target: r,
                rowNum: n,
                colNum: t,
                _orgMsg: a,
                type: 0
            }), R(), h && h.apply(i, arguments)
        } catch (o) {
            console && console.error(o)
        }
    };
    var y = function(e, r) {
            try {
                var n = [],
                    t = {},
                    o = [];
                if (v.isOBJ(e))
                    for (var a in e.level = e.level || l.level, e) {
                        var i = e[a];
                        if (v.isOBJ(i)) try {
                            i = JSON.stringify(i)
                        } catch (err) {
                            i = "[BJ_REPORT detect value stringify error] " + err.toString()
                        }
                        "rowNum" !== a && "colNum" !== a || (i = isNaN(i) ? 0 : i, i = Number(i)), o.push(a + ":" + i), n.push(a + "=" + encodeURIComponent(i)), t[a] = i
                    }
                return [t, o.join(","), n.join("&")]
            } catch (e) {
                console && console.error(e)
            }
        },
        g = [],
        w = 0,
        E = function() {
            try {
                if (clearTimeout(w), w = 0, !g.length) return;
                var e = {
                    namespace: l.namespace,
                    appname: l.appname,
                    count: g.length,
                    _t: new Date - 0,
                    bid: l.bid,
                    url: l.router,
                    data: g,
                    uid: l.uid
                };
                t && (e.debugid = t), o && (e.sid = o), a && (e.userid = a);
                var r = l._reportUrl + "?e=" + encodeURIComponent(JSON.stringify(e));
                l.submit ? l.submit(r, g) : s(r), g = []
            } catch (n) {
                console && console.error(n)
            }
        },
        R = function(e) {
            try {
                if (!l._reportUrl) return;
                for (var r = Math.random() >= l.random; u.length;) {
                    var n = !1,
                        t = u.shift();
                    if (t.msg = (t.msg + "" || "").substr(0, 5e3), !v.isRepeat(t)) {
                        var o = y(t, g.length);
                        if (v.isOBJByType(l.ignore, "Array"))
                            for (var a = 0, i = l.ignore.length; a < i; a++) {
                                var c = l.ignore[a];
                                if (v.isOBJByType(c, "RegExp") && c.test(o[1]) || v.isOBJByType(c, "Function") && c(t, o[1])) {
                                    n = !0;
                                    break
                                }
                            }
                        n || r || 20 == t.level || (g.push(o[0]), l.onReport && l.onReport(l.namespace, t))
                    }
                }
                e ? E() : w || (w = setTimeout(E, l.delay))
            } catch (s) {
                console && console.error(s)
            }
        },
        b = i.BJ_REPORT = {
            push: function(e) {
                try {
                    var r = v.isOBJ(e) ? v.processError(e) : {
                        msg: e
                    };
                    if (l.ext && !r.ext && (r.ext = l.ext), r.from || (r.from = location.href), r._orgMsg) {
                        var n = r._orgMsg;
                        delete r._orgMsg, r.level = 2;
                        var t = v.extend({}, r);
                        t.level = 4, t.msg = n, u.push(t)
                    } else u.push(r);
                    return R(), b
                } catch (o) {
                    console && console.error(o)
                }
            },
            report: function(e, r, n) {
                try {
                    return "object" == typeof e && (e.message += ", alive：" + JSON.stringify(d())), e && (e.type = function t(e) {
                        var r = 0;
                        switch (e) {
                            case "ui":
                                r = 1;
                                break;
                            case "ad":
                                r = 2;
                                break;
                            case "data":
                                r = 3;
                                break;
                            case "api":
                                r = 4;
                                break;
                            case "alive":
                                r = 5;
                                break;
                            case "document.body":
                                r = 6;
                                break;
                            case "match":
                                r = 7;
                                break;
                            case "prevent":
                                r = 8;
                                break;
                            case "performance":
                                r = 9;
                                break;
                            case "inject":
                                r = 10;
                                break;
                            case "whitescreen":
                                r = 11;
                                break;
                            case "routematchgood":
                                r = 12;
                                break;
                            case "slowApi":
                                r = 13;
                                break;
                            case "noWhitescreen":
                                r = 14;
                                break;
                            default:
                                r = 0
                        }
                        return r
                    }(n), b.push(e)), r && R(!0), b
                } catch (o) {
                    console && console.error(o)
                }
            },
            heartbeat: function() {
                try {
                    var e = {
                        namespace: l.namespace,
                        appname: l.appname,
                        route: l.router,
                        url: window.location.href
                    };
                    s(l.hb_url + "?d=" + encodeURIComponent(JSON.stringify(e)))
                } catch (r) {
                    console && console.error(r)
                }
            },
            domreadyheartbeat: function() {
                try {
                    var e = {
                        namespace: l.namespace,
                        appname: l.appname,
                        route: "/domready/" + l.router,
                        url: window.location.href
                    };
                    s(l.hb_url + "?d=" + encodeURIComponent(JSON.stringify(e)))
                } catch (r) {
                    console && console.error(r)
                }
            },
            performace: function() {
                var t = !1;

                function r(e) {
                    if (!t) {
                        t = !0;
                        var r = {
                            namespace: l.namespace,
                            appname: l.appname,
                            route: l.router,
                            _t: new Date - 0,
                            uid: l.uid,
                            bid: l.bid,
                            sid: o,
                            userid: a,
                            event: e,
                            url: i.location.href.replace(/\?.*/, ""),
                            requests: m()
                        };
                        s(l.perf_url + "?d=" + encodeURIComponent(JSON.stringify(r)));
                        for (var n = +new Date; new Date - n <= 20;);
                    }
                }
                p()(document, "DOMContentLoaded", function(e) {
                    if (performance.getEntries)
                        for (var r = performance.getEntries(), n = 0, t = r.length; n < t; n++) {
                            var o = r[n];
                            o.name && (-1 < o.name.indexOf(".css") || -1 < o.name.indexOf(".js")) && l.perf_filter_list.push(o.name)
                        }
                }), p()(window, "load", function(e) {
                    setTimeout(function() {
                        r("load")
                    }, 300)
                }), p()(window, "beforeunload", function(e) {
                    r("beforeunload")
                }), p()(window, "unload", function(e) {
                    r("unload")
                })
            },
            firstScreen: function() {
                var t = (new Date).valueOf();
                setTimeout(function() {
                    try {
                        var e = performance.timing;
                        if (e) {
                            var r = {
                                namespace: l.namespace,
                                appname: l.appname,
                                route: "/firstScreen/" + l.router,
                                _t: new Date - 0,
                                uid: l.uid,
                                bid: l.bid,
                                sid: o,
                                userid: a,
                                url: i.location.href.replace(/\?.*/, ""),
                                requests: [{
                                    loadPage: t - e.fetchStart,
                                    domReady: (new Date).valueOf() - e.fetchStart,
                                    name: window.location.href.replace(/\?.*/, "")
                                }]
                            };
                            s(l.perf_url + "?d=" + encodeURIComponent(JSON.stringify(r)))
                        }
                    } catch (n) {
                        console && console.error(err)
                    }
                }, 1)
            },
            injection: function() {
                p()(window, "load", function(e) {
                    try {
                        !0,
                        function n(e) {
                            var r = document.createElement("iframe");
                            r.src = e, r.width = 0, r.height = 0, r.style && (r.style.display = "none"), document.body.appendChild(r)
                        }("//p1.ifengimg.com/a/2018/0920/injection.html?namespace=" + l.namespace + "&appname=" + l.appname + "&uid=" + l.uid + "&router=" + l.router)
                    } catch (r) {
                        console && console.error(err)
                    }
                })
            },
            alive: function() {
                setTimeout(function() {
                    try {
                        if (document.body) {
                            if (d().rootNum < c) {
                                var e = new Error("alive error");
                                window && window.BJ_REPORT && window.BJ_REPORT.report(e, !1, "alive"),
                                    function r() {
                                        var n = setInterval(function() {
                                            var e = d();
                                            if (e.rootNum > c && window && window.BJ_REPORT) {
                                                clearInterval(n);
                                                var r = new Error("5s验活失败后恢复正常");
                                                window.BJ_REPORT.report(r, !1, "noWhitescreen")
                                            }
                                        }, 2e3)
                                    }()
                            } else ! function t() {
                                var n = setInterval(function() {
                                    var e = d();
                                    if (e.rootNum < c && window && window.BJ_REPORT) {
                                        clearInterval(n);
                                        var r = new Error("页面从正常变白");
                                        window.BJ_REPORT.report(r, !1, "whitescreen")
                                    }
                                }, 2e3)
                            }()
                        } else {
                            m(), e = new Error("document.body is null");
                            window && window.BJ_REPORT && window.BJ_REPORT.report(e, !1, "document.body")
                        }
                    } catch (n) {
                        console && console.error(n)
                    }
                }, 5e3)
            },
            matchAutoRepair: function() {
                var r = setInterval(function() {
                    if (d().rootNum > c && window && window.BJ_REPORT) {
                        clearInterval(r);
                        var e = new Error("路由错配，页面正常显示");
                        window.BJ_REPORT.report(e, !1, "routematchgood")
                    }
                }, 2e3)
            },
            info: function(e) {
                return e && (v.isOBJ(e) ? e.level = 2 : e = {
                    msg: e,
                    level: 2
                }, b.push(e)), b
            },
            debug: function(e) {
                return e && (v.isOBJ(e) ? e.level = 1 : e = {
                    msg: e,
                    level: 1
                }, b.push(e)), b
            },
            init: function(e) {
                try {
                    if (v.isOBJ(e))
                        for (var r in e) l[r] = e[r];
                    return l.namespace && l.appname && (l._reportUrl = l.url), l.router || (l.router = i.location.href.replace(/\?.*/, "")), l.bid || (l.bid = "null"), u.length && R(), b
                } catch (n) {
                    console && console.error(n)
                }
            },
            __onerror__: i.onerror
        };
    return "undefined" != typeof console && console.error && setTimeout(function() {
        var e = ((location.hash || "").match(/([#&])BJ_ERROR=([^&$]+)/) || [])[2];
        e && console.error("BJ_ERROR", decodeURIComponent(e).replace(/(:\d+:\d+)\s*/g, "$1\n"))
    }, 0), b
}(window);
"undefined" != typeof module && (module.exports = BJ_REPORT),
    function(a) {
        if (a.BJ_REPORT) {
            var o = function(e) {
                    a.BJ_REPORT.push(e)
                },
                r = {};
            a.BJ_REPORT.tryJs = function(e) {
                return e && (o = e), r
            };
            var i, n = function(e, r) {
                    for (var n in r) e[n] = r[n]
                },
                c = function(e) {
                    return "function" == typeof e
                },
                s = function(n, t) {
                    return function() {
                        try {
                            return n.apply(this, t || arguments)
                        } catch (r) {
                            if (o(r), r.stack && console && console.error && console.error("[BJ-REPORT]", r.stack), !i) {
                                var e = a.onerror;
                                a.onerror = function() {}, i = setTimeout(function() {
                                    a.onerror = e, i = null
                                }, 50)
                            }
                            throw r
                        }
                    }
                },
                t = function(o) {
                    return function() {
                        for (var e, r = [], n = 0, t = arguments.length; n < t; n++) e = arguments[n], c(e) && (e = s(e)), r.push(e);
                        return o.apply(this, r)
                    }
                },
                e = function(t) {
                    return function(e, r) {
                        if ("string" == typeof e) try {
                            e = new Function(e)
                        } catch (err) {
                            throw err
                        }
                        var n = [].slice.call(arguments, 2);
                        return e = s(e, n.length && n), t(e, r)
                    }
                },
                u = function(a, i) {
                    return function() {
                        for (var e, r, n = [], t = 0, o = arguments.length; t < o; t++) e = arguments[t], c(e) && (e.tryWrap ? e = e.tryWrap : (r = s(e), e.tryWrap = r, e = r)), n.push(e);
                        return a.apply(i || this, n)
                    }
                },
                l = function(e) {
                    var r, n;
                    for (r in e) n = e[r], c(n) && (e[r] = s(n));
                    return e
                };
            r.spyJquery = function() {
                var e, o, n = a.$;
                if (!n || !n.event) return r;
                n.zepto ? (e = n.fn.on, o = n.fn.off, n.fn.on = u(e), n.fn.off = function() {
                    for (var e, r = [], n = 0, t = arguments.length; n < t; n++) e = arguments[n], c(e) && e.tryWrap && (e = e.tryWrap), r.push(e);
                    return o.apply(this, r)
                }) : window.jQuery && (e = n.event.add, o = n.event.remove, n.event.add = u(e), n.event.remove = function() {
                    for (var e, r = [], n = 0, t = arguments.length; n < t; n++) e = arguments[n], c(e) && e.tryWrap && (e = e.tryWrap), r.push(e);
                    return o.apply(this, r)
                });
                var t = n.ajax;
                return t && (n.ajax = function(e, r) {
                    return r || (r = e, e = undefined), l(r), e ? t.call(n, e, r) : t.call(n, r)
                }), r
            }, r.spyModules = function() {
                var e = a.require,
                    o = a.define;
                return o && o.amd && e && (a.require = t(e), n(a.require, e), a.define = t(o), n(a.define, o)), a.seajs && o && (a.define = function() {
                    for (var e, r = [], n = 0, t = arguments.length; n < t; n++) e = arguments[n], c(e) && ((e = s(e)).toString = function(e) {
                        return function() {
                            return e.toString()
                        }
                    }(arguments[n])), r.push(e);
                    return o.apply(this, r)
                }, a.seajs.use = t(a.seajs.use), n(a.define, o)), r
            }, r.spySystem = function() {
                return a.setTimeout = e(a.setTimeout), a.setInterval = e(a.setInterval), r
            }, r.spyCustom = function(e) {
                return c(e) ? s(e) : l(e)
            }, r.spyAll = function() {
                return r.spyJquery().spyModules().spySystem(), r
            }
        } else console.error("please load bg-report first")
    }(window);
//# sourceMappingURL=errorupload-67eab8e627.min.js.map