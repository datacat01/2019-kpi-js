! function(e) {
    var t = window.webpackJsonp;
    window.webpackJsonp = function(n, o, s) {
        for (var a, c, l, u = 0, h = []; u < n.length; u++) c = n[u], r[c] && h.push(r[c][0]), r[c] = 0;
        for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
        for (t && t(n, o, s); h.length;) h.shift()();
        if (s)
            for (u = 0; u < s.length; u++) l = i(i.s = s[u]);
        return l
    };
    var n = {},
        r = {
            1: 0
        };

    function i(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = e, i.c = n, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i.oe = function(e) {
        throw console.error(e), e
    }
}([, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(69),
        o = function() {
            function e(t, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.component = t, this.platform = n || "mobile"
            }
            return r(e, [{
                key: "render",
                value: function(e) {
                    var t = n(70)("./" + this.platform + "/components/" + this.component + "/view.tpl");
                    return t = t.default(), i.render(t, e)
                }
            }]), e
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = void 0;
    r = n(0).helpers.serviceStatus.virtualDom ? n(125) : n(147), e.exports = r
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return e && "Widget" === e.type
    }
}, function(e, t, n) {
    "use strict";
    e.exports = "2"
}, function(e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function(e) {
        return e && "VirtualNode" === e.type && e.version === r
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return e && "Thunk" === e.type
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return e && ("function" == typeof e.hook && !e.hasOwnProperty("hook") || "function" == typeof e.unhook && !e.hasOwnProperty("unhook"))
    }
}, function(e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function(e) {
        return e && "VirtualText" === e.type && e.version === r
    }
}, , , , function(e, t, n) {
    "use strict";
    var r = Array.isArray,
        i = Object.prototype.toString;
    e.exports = r || function(e) {
        return "[object Array]" === i.call(e)
    }
}, , , , function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, , , function(e, t, n) {
    "use strict";
    var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    r = function() {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (r = window)
    }
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = n(4);

    function i(e, t, n) {
        this.type = Number(e), this.vNode = t, this.patch = n
    }
    i.NONE = 0, i.VTEXT = 1, i.VNODE = 2, i.WIDGET = 3, i.PROPS = 4, i.ORDER = 5, i.INSERT = 6, i.REMOVE = 7, i.THUNK = 8, e.exports = i, i.prototype.version = r, i.prototype.type = "VirtualPatch"
}, function(e, t, n) {
    "use strict";
    var r = n(5),
        i = n(8),
        o = n(3),
        s = n(6);

    function a(e, t) {
        var n = e.vnode;
        if (n || (n = e.vnode = e.render(t)), !(r(n) || i(n) || o(n))) throw new Error("thunk did not return a valid node");
        return n
    }
    e.exports = function(e, t) {
        var n = e,
            r = t;
        s(t) && (r = a(t, e));
        s(e) && (n = a(e, null));
        return {
            a: n,
            b: r
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    e.exports = function(e) {
        return "object" === (void 0 === e ? "undefined" : r(e)) && null !== e
    }
}, function(e, t, n) {
    "use strict";
    (function(t) {
        var r, i = void 0 !== t ? t : "undefined" != typeof window ? window : {},
            o = n(142);
        "undefined" != typeof document ? r = document : (r = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (r = i["__GLOBAL_DOCUMENT_CACHE@4"] = o), e.exports = r
    }).call(t, n(19))
}, function(e, t, n) {
    "use strict";
    var r = n(23),
        i = n(25),
        o = n(5),
        s = n(8),
        a = n(3),
        c = n(21);
    e.exports = function e(t, n) {
        var l = n && n.document || r;
        var u = n ? n.warn : null;
        t = c(t).a;
        if (a(t)) return t.init();
        if (s(t)) return l.createTextNode(t.text);
        if (!o(t)) return u && u("Item is not a valid virtual dom node", t), null;
        var h = null === t.namespace ? l.createElement(t.tagName) : l.createElementNS(t.namespace, t.tagName);
        var f = t.properties;
        i(h, f);
        var p = t.children;
        for (var d = 0; d < p.length; d++) {
            var v = e(p[d], n);
            v && h.appendChild(v)
        }
        return h
    }
}, function(e, t, n) {
    "use strict";
    var r = n(22),
        i = n(7);

    function o(e, t, n, r) {
        if (r) {
            var o = r[t];
            if (i(o)) o.unhook && o.unhook(e, t, n);
            else if ("attributes" === t)
                for (var s in o) e.removeAttribute(s);
            else if ("style" === t)
                for (var a in o) e.style[a] = "";
            else e[t] = "string" == typeof o ? "" : null
        }
    }

    function s(e, t, n, i, o) {
        var s = n ? n[i] : void 0;
        if ("attributes" !== i)
            if (s && r(s) && a(s) !== a(o)) e[i] = o;
            else {
                r(e[i]) || (e[i] = {});
                var c = "style" === i ? "" : void 0;
                for (var l in o) {
                    var u = o[l];
                    e[i][l] = void 0 === u ? c : u
                }
            }
        else
            for (var h in o) {
                var f = o[h];
                void 0 === f ? e.removeAttribute(h) : e.setAttribute(h, f)
            }
    }

    function a(e) {
        return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__ ? e.__proto__ : e.constructor ? e.constructor.prototype : void 0
    }
    e.exports = function(e, t, n) {
        for (var a in t) {
            var c = t[a];
            void 0 === c ? o(e, a, c, n) : i(c) ? (o(e, a, c, n), c.hook && c.hook(e, a, n ? n[a] : void 0)) : r(c) ? s(e, t, n, a, c) : e[a] = c
        }
    }
}, , , function(e, t, n) {
    "use strict";
    var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function(o) {
        "object" != i(o.usocket) && (o.usocket = function(e) {
            var t = function() {},
                n = navigator.userAgent,
                r = void 0 !== e.WebSocket && 3 === e.WebSocket.CLOSED;
            !0 === /Android (4.[0123]|2.\d)/.test(n) && !1 === / Chrome\//.test(n) && (r = !1);
            var o = {},
                s = "rtw.uol.com",
                a = !1,
                c = 1e3,
                l = 1e4,
                u = 1006,
                h = {},
                f = [],
                p = null,
                d = null,
                v = +new Date,
                g = null,
                m = function(e) {
                    return Object.keys(e).map(function(t) {
                        return e[t]
                    })
                },
                y = function(t, n) {
                    return new Promise(function(r, i) {
                        var o = n.callbackName || "callback",
                            s = n.charset || "UTF-8",
                            a = n.timeout || 1e4;
                        if (t) {
                            timeout_trigger = e.setTimeout(function() {
                                i()
                            }, a);
                            var c = document.createElement("script");
                            c.type = "text/javascript", c.async = !0, c.charset = s, c.src = t, c.onerror = i;
                            var l = document.getElementsByTagName("head")[0],
                                u = l.appendChild(c);
                            e[o] = function(t) {
                                e.clearTimeout(timeout_trigger);
                                for (var n = e.UOLWebSocketCollection, i = 0; i < n.length; i++) n[i].call(null, t);
                                r(), l.removeChild(u)
                            }
                        } else i()
                    })
                },
                b = function(e, t, n) {
                    var r = [];
                    n ? h[n] && r.push(h[n]) : r = r.concat(m(h));
                    for (var i = 0, o = r.length; i < o; i++) void 0 !== r[i] && "function" == typeof r[i].pub && r[i].pub(e, t)
                },
                w = function(e) {
                    if (null !== p) {
                        var t = [];
                        if (e) {
                            if (h[e] && t.push(h[e]), !0 === p.isFake) return p.removeChannels(e), !0
                        } else t = t.concat(m(h));
                        for (var n = 0, r = t.length; n < r; n++) t[n].off(), delete h[t[n].channelName]
                    }
                },
                _ = function() {
                    w(), clearTimeout(d), p && (p.onmessage = null, p.onclose = null, p.onerror = null, p = null)
                },
                E = function(e) {
                    e = e || "", null === p || 4 === p.readyState ? ((p = !0 === r && !1 === a ? new WebSocket("wss://" + s + "/sub?id=" + e) : new function(e) {
                        console.log(":: INIT FakeWebSocket ::");
                        var t, n, r = 0,
                            i = 0,
                            s = {
                                url: e,
                                channels: [],
                                channelsUpdated: {},
                                openDelay: 100
                            },
                            a = {
                                URL: e,
                                CONNECTING: 0,
                                OPEN: 1,
                                CLOSING: 2,
                                CLOSED: 3,
                                isFake: !0,
                                removeChannels: function(e) {
                                    if (e) s.channels = s.channels.filter(function(t) {
                                        return t !== e
                                    }), delete s.channelsUpdated[e], delete h[e];
                                    else
                                        for (var t; t = s.channels.pop();) delete s.channelsUpdated[t], delete h[t]
                                },
                                channel: "",
                                setLastModified: function(e) {
                                    s.channelsUpdated[this.channel] = e
                                },
                                readyState: 0,
                                reconnect: function(e, t) {
                                    return !t || "function" == typeof t && !0 === t.call(s) ? (clearTimeout(r), r = setTimeout(c, e)) : a.close(!1), !0
                                },
                                send: function(e) {
                                    var t = e.match(/^unsubscribe:(.+)/);
                                    t ? o.onmessage('{"unsubscribed":"' + t[1] + '"}') : s.channels.push(e)
                                },
                                close: function(e) {
                                    this.readyState = 2, clearTimeout(t), clearTimeout(r), this.readyState = 3, !1 !== e ? a.onclose("error", {
                                        code: u
                                    }) : p = null
                                },
                                onopen: function() {},
                                onmessage: function() {},
                                onerror: function() {},
                                onclose: function() {}
                            };

                        function c(e) {
                            var t;
                            if (e ? t = e : (a.channel = (i >= s.channels.length && (i = 0), s.channels[i++]), t = a.channel), 0 === s.channels.length) return a.onclose("error", {
                                code: u
                            });
                            y(s.url + "?id=" + t + "&ifmod=" + (s.channelsUpdated[t] || 0) + "&ts=" + +new Date, {
                                callbackName: "UOLWebSocketCallback",
                                timeout: l,
                                charset: "UTF-8"
                            }).then(a.onopen).catch(function() {
                                a && a.onclose && a.onclose("error", {
                                    code: u
                                })
                            })
                        }
                        return n = function(e) {
                            var t = e.match(/id=([^&]+)$/);
                            return null !== t && (s.channels.push(t[1]), s.url = e.replace("wss:", "https:").replace(/\?.*/, ""), !0)
                        }(e), t = setTimeout(function() {
                            !0 === n ? (a.readyState = 1, a.onopen(), s.channels.length && c()) : a.onclose("error", {
                                code: u
                            })
                        }, s.openDelay), a
                    }("wss://" + s + "/sub?id=" + e)).reconnect || (p.reconnect = t), p.onopen = function(e) {
                        T(),
                            function e() {
                                if (+new Date - v >= 45e3 && p && !0 !== p.isFake && (o.send(""), v = +new Date), !1 === o.isConnected() && p) return p.onerror({
                                    code: "TIMEOUT"
                                }), !1;
                                d = setTimeout(e, 5e3)
                            }(), b("open", e)
                    }, p.onmessage = o.onmessage, p.onerror = function(e) {
                        b("error", e), e.invalidChannel || _()
                    }, p.onclose = function(e, t) {
                        var n = e && e.code || t && t.code || 0;
                        n === u || 1001 === n ? b("error", e) : !1 !== e.triggerClose && b("close", e), _()
                    }) : !0 === o.isConnected() ? p.send(e) : T(e)
                },
                T = function(e) {
                    if ("string" == typeof e) f.push(e);
                    else
                        for (var t; t = f.shift();) p.send(t)
                };
            return o.version = "2.8.9", o.CONFIG_CHANGES = "CONFIG_CHANGES", o.connect = function(e) {
                return h[e] = new function e(t) {
                    if (h[t]) return h[t];
                    if (this instanceof e == 0) return new e(t);
                    var n = {
                        message: [],
                        close: [],
                        error: [],
                        lost: [],
                        open: []
                    };
                    this.channelName = t;
                    var r = {};
                    return this.data = function(e) {
                        return void 0 === e ? r : r = e
                    }, this.on = function(e, t) {
                        if (n[e]) {
                            var r;
                            for (r in n[e])
                                if (!0 === n[e].hasOwnProperty(r) && n[e][r] === t) return this;
                            n[e].push(t)
                        }
                        return this
                    }, this.off = function(e, t) {
                        var r, i;
                        if (e) {
                            var o = n[e];
                            if (o)
                                for (r = 0, i = o.length; r < i; r++)(t && o[r] === t || !t) && (o[r] = null)
                        } else
                            for (r in n)
                                if (!0 === n.hasOwnProperty(r))
                                    for (; n[r].pop(););
                        return this
                    }, this.close = function() {
                        return !0 === o.isConnected() && (this.client_solicitation = !0, p.send("unsubscribe:" + t)), this
                    }, this.pub = function(e, t) {
                        for (var r = n[e], i = 0, o = r.length; i < o; i++) r[i].call(this, t)
                    }, E(t), this
                }(e), h[e]
            }, o.disconnect = function(e) {
                return p && p.close(1e3, e || "NORMAL"), o
            }, o.isConnected = function() {
                return !(!p || p.readyState !== p.OPEN)
            }, o.send = function(e) {
                return !0 === this.isConnected() && p.send(e), this
            }, o.lastMessageTime = function() {
                return new Date(v)
            }, o.onmessage = function(e) {
                if (!e) return p.reconnect(c);
                if (!1 === o.isConnected()) return !1;
                var t = p.isFake ? e : e.data;
                if (void 0 === t) return p.reconnect(c);
                try {
                    "object" != (void 0 === t ? "undefined" : i(t)) && (t = JSON.parse(t))
                } catch (e) {
                    return p.reconnect(1e4), b("error", {
                        error: "INVALID_JSON"
                    }), console.error("mensagem precisa ser um JSON válido", t)
                }
                if (t.invalidChannel) return b("error", t, t.invalidChannel), w(t.invalidChannel), p && !0 === p.isFake && p.reconnect(c, function() {
                    return this.channels.length > 0
                }), console.log("invalidChannel: ", t.invalidChannel);
                if (t.unsubscribed) return b("close", t, t.unsubscribed), w(t.unsubscribed), p.reconnect(200);
                if (!t.channelName) return p.reconnect(1e4), b("error", {
                    error: "NO_CHANNEL_NAME"
                }), console.error('json precisa do atributo "channelName"', t);
                if (!t.lastModified) return p.reconnect(1e4), b("error", {
                    error: "NO_LAST_MODIFIED"
                }), console.error('json precisa do atributo "lastModified"', t);
                if (void 0 === h[t.channelName]) return !1;
                var n = h[t.channelName].data().lastModified;
                void 0 !== n && t.prevModified !== n && b("lost", {
                    error: "LOST_DATA"
                }), h[t.channelName].data(t), v = +new Date, b("message", t, t.channelName), !0 === p.isFake && (p.setLastModified(t.lastModified), p.reconnect(200))
            }, o.config = function(e) {
                var t, n = {
                    domain: s,
                    forcePolling: a,
                    pollingDelay: c,
                    channels: h,
                    connection: p
                };
                if (void 0 === e) return n;
                if ("string" == typeof e) return n[e];
                if (!0 === e.parasite && null !== g) return !1;
                if (!0 === o.isConnected()) return console.log("usocket.confg()\tAs configurações só são aplicadas quando não há conexão estabelecida."), !1;
                for (t in g = e, e)
                    if (!0 === e.hasOwnProperty(t)) {
                        var r = e[t];
                        switch (t) {
                            case "domain":
                                s = r;
                                break;
                            case "forcePolling":
                                a = r;
                                break;
                            case "pollingDelay":
                                c = r
                        }
                    } return !0
            }, o.polling = function(e, n, r, i) {
                if (void 0 !== h[e] && void 0 === i) return console.error("Não é possível fazer polling em canal com conexão WebSocket ativa.");
                n = n || t;
                var o = function(t) {
                    if (t.channelName === e || t.invalidChannel === e) {
                        n.apply(r, [t.hasOwnProperty("invalidChannel"), t]);
                        for (var i = 0, s = UOLWebSocketCollection.length; i < s; i++) UOLWebSocketCollection[i] === o && (UOLWebSocketCollection.splice(i, 1), o = null)
                    }
                };
                UOLWebSocketCollection.push(o), y("https://" + s + "/sub?id=" + e + "&ifmod=0&ts=" + +new Date, {
                    callbackName: "UOLWebSocketCallback",
                    charset: "UTF-8"
                })
            }, (e.UOLWebSocketCollection = e.UOLWebSocketCollection || []).push(o.onmessage), o
        }(o)), n(29) && (void 0 !== (r = function() {
            return usocket
        }.apply(t, [])) && (e.exports = r)), "undefined" != typeof angular && angular.module("usocket", []).factory("usocket", [function() {
            return usocket
        }])
    }(window)
}, function(e, t) {
    (function(t) {
        e.exports = t
    }).call(t, {})
}, , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = n(0),
        i = window.widgetProfileLoad || {
            init: function() {
                var e = r.helpers.serviceStatus,
                    t = location.host.indexOf("preview.intranet") >= 0,
                    i = document.getElementsByClassName("UHeader__menu__nav__container")[0];
                if (!t && e && e.hasOwnProperty("widgetProfile") && !0 === e.widgetProfile) {
                    var o = "https://conteudo.jsuol.com.br/p/perfil/js/",
                        s = r.helpers.getParameter("widgetNotifyDev");
                    o += s ? "true" === s ? "dev/widgetNotify.v3.js" : s : "widgetNotify.v3.js";
                    var a = function(e, t) {
                        if (e) {
                            window.hevents.emit("widgetProfileNotification", e, t), window.seeLater && window.seeLater.update();
                            var n = document.getElementsByClassName("UHeader__menu__nav__item__email_container")[0];
                            e.hasOwnProperty("auth") && e.auth.hasOwnProperty("emails") && e.auth.hasOwnProperty("isLogged") && !0 === e.auth.isLogged ? (n.setAttribute("data-label", "email-checkin-logado"), n.setAttribute("data-action", "")) : (n.setAttribute("data-label", "email-checkin-deslogado"), n.setAttribute("data-action", "clique"))
                        }
                        i.style.visibility = "visible"
                    };
                    r.helpers.ajx("GET", o).then(function(e) {
                        var t = document.createElement("script");
                        document.getElementsByTagName("head")[0].appendChild(t), t.text = e, window.UOL && window.UOL.hasOwnProperty("perfil") && window.UOL.perfil.hasOwnProperty("widgets") && window.UOL.perfil.widgets.hasOwnProperty("Notify") && "function" == typeof window.UOL.perfil.widgets.Notify ? window.widgetProfile = window.UOL.perfil.widgets.Notify({
                            avatarSize: "mini",
                            target: "profile-avatar",
                            widgetStyle: {
                                counter: "height: 13px; padding: 4px; font-size: 11px; letter-spacing: normal; line-height: 5px;",
                                avatar: "opacity: 0.5;"
                            },
                            callbacks: {
                                onInit: function(e) {
                                    if (r.helpers.getParameter("seeLaterWebmaster")) {
                                        var t = new(n(160));
                                        window.widgetProfile.SeeLater = t
                                    }
                                    a(e, "init")
                                },
                                onLogin: function(e) {
                                    a(e, "login")
                                },
                                onLogout: function(e) {
                                    a(e, "logout")
                                }
                            },
                            linkCheckout: {
                                sg: "2668383698",
                                sa: "uolhome"
                            }
                        }) : a({}, "scriptError")
                    }).catch(function() {
                        a({}, "widgetNotifyError"), console.error("widgetNotify não carregado!")
                    })
                } else i.style.visibility = "visible"
            }
        };
    window.onHomeReady(i.init)
}, , function(e, t, n) {
    "use strict";
    var r, i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };

    function s() {
        return (s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : o(e)
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : o(e)
        })(e)
    }! function(o, s) {
        "object" === a(t) && void 0 !== e ? e.exports = s() : void 0 === (i = "function" == typeof(r = s) ? r.call(t, n, t, e) : r) || (e.exports = i)
    }(0, function() {
        var e = "undefined" != typeof window,
            t = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
            n = e && "IntersectionObserver" in window,
            r = e && "classList" in document.createElement("p"),
            i = {
                elements_selector: "img",
                container: t || e ? document : null,
                threshold: 300,
                thresholds: null,
                data_src: "src",
                data_srcset: "srcset",
                data_sizes: "sizes",
                data_bg: "bg",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                load_delay: 0,
                auto_unobserve: !0,
                callback_enter: null,
                callback_exit: null,
                callback_reveal: null,
                callback_loaded: null,
                callback_error: null,
                callback_finish: null
            },
            o = function(e, t) {
                return e.getAttribute("data-" + t)
            },
            a = function(e, t, n) {
                var r = "data-" + t;
                null !== n ? e.setAttribute(r, n) : e.removeAttribute(r)
            },
            c = function(e) {
                return "true" === o(e, "was-processed")
            },
            l = function(e, t) {
                return a(e, "ll-timeout", t)
            },
            u = function(e) {
                return o(e, "ll-timeout")
            },
            h = function(e, t) {
                var n, r = new e(t);
                try {
                    n = new CustomEvent("LazyLoad::Initialized", {
                        detail: {
                            instance: r
                        }
                    })
                } catch (e) {
                    (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
                        instance: r
                    })
                }
                window.dispatchEvent(n)
            },
            f = function(e, t) {
                e && e(t)
            },
            p = function(e, t) {
                e._loadingCount += t, 0 === e._elements.length && 0 === e._loadingCount && f(e._settings.callback_finish)
            },
            d = function(e) {
                for (var t, n = [], r = 0; t = e.children[r]; r += 1) "SOURCE" === t.tagName && n.push(t);
                return n
            },
            v = function(e, t, n) {
                n && e.setAttribute(t, n)
            },
            g = function(e, t) {
                v(e, "sizes", o(e, t.data_sizes)), v(e, "srcset", o(e, t.data_srcset)), v(e, "src", o(e, t.data_src))
            },
            m = {
                IMG: function(e, t) {
                    var n = e.parentNode;
                    n && "PICTURE" === n.tagName && d(n).forEach(function(e) {
                        g(e, t)
                    }), g(e, t)
                },
                IFRAME: function(e, t) {
                    v(e, "src", o(e, t.data_src))
                },
                VIDEO: function(e, t) {
                    d(e).forEach(function(e) {
                        v(e, "src", o(e, t.data_src))
                    }), v(e, "src", o(e, t.data_src)), e.load()
                }
            },
            y = function(e, t) {
                r ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
            },
            b = function(e, t, n) {
                e.addEventListener(t, n)
            },
            w = function(e, t, n) {
                e.removeEventListener(t, n)
            },
            _ = function(e, t, n) {
                w(e, "load", t), w(e, "loadeddata", t), w(e, "error", n)
            },
            E = function(e, t, n) {
                var i = n._settings,
                    o = t ? i.class_loaded : i.class_error,
                    s = t ? i.callback_loaded : i.callback_error,
                    a = e.target;
                ! function(e, t) {
                    r ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
                }(a, i.class_loading), y(a, o), f(s, a), p(n, -1)
            },
            T = ["IMG", "IFRAME", "VIDEO"],
            k = function(e, t) {
                var n = t._observer;
                O(e, t), n && t._settings.auto_unobserve && n.unobserve(e)
            },
            S = function(e) {
                var t = u(e);
                t && (clearTimeout(t), l(e, null))
            },
            O = function(e, t, n) {
                var r = t._settings;
                !n && c(e) || (T.indexOf(e.tagName) > -1 && (function(e, t) {
                    var n = function n(i) {
                            E(i, !0, t), _(e, n, r)
                        },
                        r = function r(i) {
                            E(i, !1, t), _(e, n, r)
                        };
                    ! function(e, t, n) {
                        b(e, "load", t), b(e, "loadeddata", t), b(e, "error", n)
                    }(e, n, r)
                }(e, t), y(e, r.class_loading)), function(e, t) {
                    var n, r, i = t._settings,
                        s = e.tagName,
                        a = m[s];
                    if (a) return a(e, i), p(t, 1), void(t._elements = (n = t._elements, r = e, n.filter(function(e) {
                        return e !== r
                    })));
                    ! function(e, t) {
                        var n = o(e, t.data_src),
                            r = o(e, t.data_bg);
                        n && (e.style.backgroundImage = 'url("'.concat(n, '")')), r && (e.style.backgroundImage = r)
                    }(e, i)
                }(e, t), function(e) {
                    a(e, "was-processed", "true")
                }(e), f(r.callback_reveal, e))
            },
            x = function(e) {
                return !!n && (e._observer = new IntersectionObserver(function(t) {
                    t.forEach(function(t) {
                        return function(e) {
                            return e.isIntersecting || e.intersectionRatio > 0
                        }(t) ? function(e, t) {
                            var n = t._settings;
                            f(n.callback_enter, e), n.load_delay ? function(e, t) {
                                var n = t._settings.load_delay,
                                    r = u(e);
                                r || (r = setTimeout(function() {
                                    k(e, t), S(e)
                                }, n), l(e, r))
                            }(e, t) : k(e, t)
                        }(t.target, e) : function(e, t) {
                            var n = t._settings;
                            f(n.callback_exit, e), n.load_delay && S(e)
                        }(t.target, e)
                    })
                }, {
                    root: (t = e._settings).container === document ? null : t.container,
                    rootMargin: t.thresholds || t.threshold + "px"
                }), !0);
                var t
            },
            I = function(e, t) {
                this._settings = function(e) {
                    return s({}, i, e)
                }(e), this._loadingCount = 0, x(this), this.update(t)
            };
        return I.prototype = {
            update: function(e) {
                var n = this,
                    r = this._settings,
                    i = e || r.container.querySelectorAll(r.elements_selector);
                this._elements = Array.prototype.slice.call(i).filter(function(e) {
                    return !c(e)
                }), !t && this._observer ? this._elements.forEach(function(e) {
                    n._observer.observe(e)
                }) : this.loadAll()
            },
            destroy: function() {
                var e = this;
                this._observer && (this._elements.forEach(function(t) {
                    e._observer.unobserve(t)
                }), this._observer = null), this._elements = null, this._settings = null
            },
            load: function(e, t) {
                O(e, this, t)
            },
            loadAll: function() {
                var e = this;
                this._elements.forEach(function(t) {
                    k(t, e)
                })
            }
        }, e && function(e, t) {
            if (t)
                if (t.length)
                    for (var n, r = 0; n = t[r]; r += 1) h(e, n);
                else h(e, t)
        }(I, window.lazyLoadOptions), I
    })
}, function(e, t, n) {
    "use strict";
    /*!
     * Minievents
     * https://github.com/allouis/minievents
     */
    var r = function() {
        var e = {
                js: !1,
                html: !1,
                ready: !1
            },
            t = new function() {
                var e = {};
                this.on = function(t, n, r) {
                    (e[t] = e[t] || []).push({
                        f: n,
                        c: r
                    })
                }, this.off = function(t, n) {
                    t || (e = {});
                    for (var r = e[t] || [], i = r.length = n ? r.length : 0; i-- > 0;) n == r[i].f && r.splice(i, 1)
                }, this.emit = function() {
                    for (var t = Array.apply([], arguments), n = e[t.shift()] || [], r = 0, i = void 0; i = n[r++];) "function" == typeof i.f && i.f.apply(i.c, t)
                }
            };

        function n() {
            1 == e.js && 1 == e.html && (e.ready = !0, t.emit("homeReady"))
        }
        return window.onHomeReady = function(n) {
            !0 === e.ready ? n.call() : t.on("homeReady", n)
        }, t.on("ready", function() {
            e.js = !0, n()
        }), t.on("ready", function() {
            e.html = !0, n()
        }), t
    }();
    window.hevents = r, e.exports = r
}, , , function(e, t, n) {
    "use strict";
    /*!
     * UOL - Service Worker
     * Copyright(c) 2017 Fagner Janderson <fjsilva@uolinc.com>
     */
    /*!
     * UOL - Service Worker
     * Copyright(c) 2017 Fagner Janderson <fjsilva@uolinc.com>
     */
    ! function() {
        var e = void 0,
            t = {
                firebase: {
                    apiKey: "AIzaSyC7xCg9LEYqiDKkCBsjhMFg-MKTNakYuj8",
                    authDomain: "web-alerts-1194.firebaseapp.com",
                    databaseURL: "https://web-alerts-1194.firebaseio.com/",
                    storageBucket: "gcm-demo-13f40.appspot.com",
                    messagingSenderId: "370456186282"
                },
                CHANNEL: window.location.hostname,
                STORAGE_KEY: "uolPushNotification",
                LOG_PREFIX: "[NOTIFICATIONS] ",
                tags: ["geral"],
                api: {
                    subscribe: "https://push-webalert.conteudo.uol"
                },
                dependencies: ["https://www.gstatic.com/firebasejs/3.6.10/firebase.js", "/manifest.json"],
                serviceWorker: "/service-worker.js?c=" + window.cacheId
            };

        function n() {
            this.messaging = null, this.data = null
        }
        n.prototype.loadDependencies = function(e, t) {
            var n = 0,
                r = function() {
                    n++
                },
                i = setInterval(function() {
                    n == e.length && (clearInterval(i), t())
                }, 100);
            Array.prototype.forEach.call(e, function(t, n) {
                var i = void 0;
                if (t.match(/\.css$/)) {
                    (i = document.createElement("link")).type = "text/css", i.rel = "stylesheet", i.href = t;
                    var o = document.createElement("img");
                    o.onerror = r, o.src = t
                } else if (t.match(/\.js$/))(i = document.createElement("script")).type = "text/javascript", i.src = t, i.onload = r;
                else if (t.match(/\.json$/)) {
                    (i = document.createElement("link")).rel = "manifest", i.href = t;
                    var s = document.createElement("img");
                    s.onerror = r, s.src = t
                } else e.splice(n, 1), console.warn("invalid file: " + t);
                i && document.getElementsByTagName("head")[0].appendChild(i)
            })
        }, n.prototype.request = function(e, t, n, r) {
            for (var i = [function() {
                    return new XMLHttpRequest
                }, function() {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                }, function() {
                    return new ActiveXObject("Msxml3.XMLHTTP")
                }, function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                }], o = !1, s = 0; s < i.length; s++) {
                try {
                    o = i[s]()
                } catch (e) {
                    continue
                }
                break
            }
            o.open(t || "GET", e), o.onload = function() {
                4 === o.readyState && (200 === o.status || 201 === o.status ? r instanceof Function && r.call(null, o.response, o.status) : (console.warn("Request error"), r(null, o.status)))
            }, o.onerror = function() {
                r instanceof Function && r.call(null, o.response, o.status), console.warn("Request error")
            }, o.setRequestHeader("Pragma", "no-cache"), o.setRequestHeader("Cache-Control", "no-cache"), "POST" != t && "PUT" != t && "DELETE" != t || (o.setRequestHeader("Content-type", "application/json"), n = JSON.stringify(n)), o.send(n || null)
        }, n.prototype.slug = function(e) {
            e = (e = e.replace(/^\s+|\s+$/g, "")).toLowerCase();
            for (var t = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;", n = 0, r = t.length; n < r; n++) e = e.replace(new RegExp(t.charAt(n), "g"), "aaaaaeeeeeiiiiooooouuuunc------".charAt(n));
            return e = e.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")
        }, n.prototype.getBrowserVersion = function() {
            var e = navigator.userAgent,
                t = void 0,
                n = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return /trident/i.test(n[1]) ? "IE " + ((t = /\brv[ :]+(\d+)/g.exec(e) || [])[1] || "") : "Chrome" === n[1] && null != (t = e.match(/\bOPR\/(\d+)/)) ? "Opera " + t[1] : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (t = e.match(/version\/([.\d]+)/i)) && n.splice(1, 1, t[1]), n.join(" "))
        }, n.prototype.setStorage = function(e) {
            if (!e) return !1;
            window.localStorage.setItem(t.STORAGE_KEY, JSON.stringify(e))
        }, n.prototype.getStorage = function() {
            return JSON.parse(localStorage.getItem(t.STORAGE_KEY))
        }, n.prototype.getInitialData = function(e) {
            var n = "pc";
            return this.isMobile.any() && this.isMobile.any().length > 0 && (n = this.isMobile.any()[0].toLowerCase()), e({
                channel: t.CHANNEL,
                platform: {
                    ismobile: this.isMobile.any(),
                    device: n,
                    browser: this.getBrowserVersion()
                },
                configs: {
                    tags: t.tags
                }
            })
        }, n.prototype.postData = function(n, r) {
            this.request(t.api.subscribe + "/subscribe", "POST", n, function() {
                e.setStorage(n), r instanceof Function && r.call(null, n)
            })
        }, n.prototype.putData = function(n, r) {
            e.request(t.api.subscribe + "/subscribe?id=" + n.subscriptionID, "PUT", n, function() {
                e.setStorage(n), r(n)
            })
        }, n.prototype.unsetData = function(e, n) {
            window.localStorage.removeItem(t.STORAGE_KEY), window.localStorage.removeItem(t.STORAGE_KEY + "sentToServer"), this.request(t.api.subscribe + "/subscribe?id=" + e, "DELETE", {
                id: e
            }, function(e, t) {
                n instanceof Function && n(e, t)
            })
        }, n.prototype.isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i)
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i)
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i)
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)
            },
            any: function() {
                return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows()
            }
        }, n.prototype.sendToApi = function(n, r) {
            this.getInitialData(function(i) {
                var o = document.cookie.match(new RegExp("(^| )_ga=([^;]+)"));
                i.gaID = o && o[2], i.subscriptionID = n, e.postData(i, function() {
                    console.info(t.LOG_PREFIX + "Subscription successful!"), console.info(t.LOG_PREFIX, i), r(!0)
                })
            })
        }, n.prototype.startUI = function() {
            this.messaging.getToken().then(function(n) {
                n ? (e.sendTokenToServer(n), localStorage.setItem(t.STORAGE_KEY + "FirstEnable", !0)) : (console.info(t.LOG_PREFIX + "No Instance ID token available. Request permission to generate one."), e.requestPermission(), e.setTokenSentToServer(!1))
            }).catch(function(n) {
                console.warn(t.LOG_PREFIX + "An error occurred while retrieving token. ", n), e.setTokenSentToServer(!1)
            })
        }, n.prototype.sendTokenToServer = function(n) {
            var r = t.LOG_PREFIX + "Token already sent to server so won't send it again unless it changes";
            e.isTokenSentToServer() ? (console.info(r), e.sendGaToServer(), e.checkUpdate()) : (console.info(t.LOG_PREFIX + "Sending token to server..."), e.data && e.data.subscriptionID ? e.data.subscriptionID != n ? e.unsetData(e.data.subscriptionID, function() {
                e.sendToApi(n, e.setTokenSentToServer)
            }) : (console.info(r), e.setTokenSentToServer(!0)) : e.sendToApi(n, e.setTokenSentToServer))
        }, n.prototype.checkUpdate = function(n) {
            var r = ((e.data || {}).configs || {}).tags;
            if (r) {
                var i = !0,
                    o = n || t.tags,
                    s = function() {
                        e.data.configs.tags = o, e.putData(e.data, function() {
                            console.info(t.LOG_PREFIX + "Theme preferences have been updated")
                        })
                    };
                if (o.length !== r.length) return s();
                for (var a = o.length; a--;) o[a] !== r[a] && (i = !1);
                i || s()
            }
        }, n.prototype.isTokenSentToServer = function() {
            return 1 == window.localStorage.getItem(t.STORAGE_KEY + "sentToServer")
        }, n.prototype.sendGaToServer = function() {
            var n = window.localStorage.getItem(t.STORAGE_KEY);
            if (!n || /"gaID":/.test(n)) return !1;
            n = JSON.parse(n);
            var r = document.cookie.match(new RegExp("(^| )_ga=([^;]+)"));
            return n.gaID = r && r[2], e.putData({
                subscriptionID: n.subscriptionID,
                gaID: n.gaID
            }, function() {
                window.localStorage.setItem(t.STORAGE_KEY, JSON.stringify(n)), console.info(t.LOG_PREFIX + "gaID has been sent to server.")
            }), !0
        }, n.prototype.setTokenSentToServer = function(e) {
            e ? window.localStorage.setItem(t.STORAGE_KEY + "sentToServer", 1) : window.localStorage.setItem(t.STORAGE_KEY + "sentToServer", 0)
        }, n.prototype.requestPermission = function() {
            console.info(t.LOG_PREFIX + "Requesting permission..."), e.messaging.requestPermission().then(function() {
                console.info(t.LOG_PREFIX + "Notification permission granted."), e.startUI()
            }).catch(function(e) {
                console.info(t.LOG_PREFIX + "Unable to get permission to notify.", e)
            })
        }, n.prototype.deleteToken = function() {
            e.messaging.getToken().then(function(n) {
                e.messaging.deleteToken(n).then(function() {
                    console.info(t.LOG_PREFIX + "Token deleted from FCM."), e.unsetData(n, function() {
                        console.info(t.LOG_PREFIX + "Token deleted FROM API UOL")
                    }), e.setTokenSentToServer(!1)
                }).catch(function(e) {
                    console.warn(t.LOG_PREFIX + "Unable to delete token. ", e)
                })
            }).catch(function(e) {
                console.warn(t.LOG_PREFIX + "Error retrieving Instance ID token. ", e)
            })
        }, n.prototype.binds = function() {
            e.messaging.onTokenRefresh(function() {
                e.messaging.getToken().then(function(e) {
                    console.info(t.LOG_PREFIX + "Token refreshed."), setTokenSentToServer(!1), sendTokenToServer(e), startUI()
                }).catch(function(e) {
                    console.warn(t.LOG_PREFIX + "Unable to retrieve refreshed token ", e)
                })
            }), e.messaging.onMessage(function(n) {
                console.info(t.LOG_PREFIX + "Message received. ", n), n && n.notification && e.showNotification(n.notification)
            })
        }, n.prototype.showNotification = function(e) {
            if (Notification) {
                var n = new Notification(e.title, {
                    icon: e.icon,
                    body: e.body
                });
                n.onclick = function() {
                    window.open(e.click_action), n.close()
                }
            } else console.info(t.LOG_PREFIX + "Desktop notifications not available in your browser. Try Chromium.")
        }, n.prototype.init = function() {
            (e = this).widget = document.querySelector(".uol-notifications-widget"), e.widget && (e.widget.getAttribute("channel-name") && (t.CHANNEL = e.widget.getAttribute("channel-name")), e.widget.getAttribute("themes") && (t.tags = e.widget.getAttribute("themes").split(",")), e.data = e.getStorage(), this.loadDependencies(t.dependencies, function() {
                firebase.initializeApp(t.firebase), e.messaging = firebase.messaging();
                !e.data || localStorage.getItem(t.STORAGE_KEY + "FirstEnable") ? "serviceWorker" in navigator && navigator.serviceWorker.register(t.serviceWorker).then(function(t) {
                    e.messaging.useServiceWorker(t), e.binds(), e.startUI()
                }) : navigator.serviceWorker.getRegistration().then(function(t) {
                    t && t.unregister(), e.data && e.data.subscriptionID && e.unsetData(e.data.subscriptionID)
                })
            }))
        }, window.onHomeReady(function() {
            !1 === /ipad|iphone/.test(navigator.userAgent.toLowerCase()) && (new n).init()
        })
    }()
}, , , , , function(e, t, n) {
    "use strict";
    ! function(e) {
        function t() {
            this.u = null, this.CARS = "CA6824", this.RECIPES = "CA7357", this.EDUCATION = "55", this.TECHNOLOGY = "CA7239", this.ECONOMY = "CA7248", this.SCIENCE = "13";
            try {
                this.u = JSON.parse(localStorage.getItem("uolDataLayer")), this.u = this.u.TailtargetTrack ? this.u.TailtargetTrack : null
            } catch (e) {}
            return this
        }
        t.prototype.hasInterest = function(e) {
            return null !== this.u && -1 !== function(e, t) {
                if (e)
                    for (var n = 0, r = (e = "string" == typeof e ? e.split(",") : e).length; n < r; n++)
                        if (e[n] == t) return n;
                return -1
            }(e.toString().match(/^CA/) ? this.u.tt_customaudience : this.u.tt_subjects, e)
        }, e.TTUser = new t
    }(window)
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : r(e)
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : r(e)
        };
    ! function(n, r) {
        "object" === o(t) && void 0 !== e ? e.exports = r() : n.LazyLoad = r()
    }(void 0, function() {
        var e = {
                elements_selector: "img",
                container: window,
                threshold: 300,
                throttle: 150,
                data_src: "src",
                data_srcset: "srcset",
                class_loading: "loading_img",
                class_loaded: "loaded",
                class_error: "error",
                class_initial: "initial",
                skip_invisible: !0,
                callback_load: null,
                callback_error: null,
                callback_set: null,
                callback_processed: null,
                callback_enter: null
            },
            t = !("onscroll" in window) || /glebot/.test(navigator.userAgent),
            n = function(e, t) {
                e && e(t)
            },
            r = function(e) {
                return e.getBoundingClientRect().top + window.pageYOffset - e.ownerDocument.documentElement.clientTop
            },
            o = function(e) {
                return e.getBoundingClientRect().left + window.pageXOffset - e.ownerDocument.documentElement.clientLeft
            },
            s = function(e, t, n) {
                return !(function(e, t, n) {
                    return (t === window ? window.innerHeight + window.pageYOffset : r(t) + t.offsetHeight) <= r(e) - n
                }(e, t, n) || function(e, t, n) {
                    return (t === window ? window.pageYOffset : r(t)) >= r(e) + n + e.offsetHeight
                }(e, t, n) || function(e, t, n) {
                    var r = window.innerWidth;
                    return (t === window ? r + window.pageXOffset : o(t) + r) <= o(e) - n
                }(e, t, n) || function(e, t, n) {
                    return (t === window ? window.pageXOffset : o(t)) >= o(e) + n + e.offsetWidth
                }(e, t, n))
            },
            a = function(e, t) {
                var n = void 0,
                    r = new e(t);
                try {
                    n = new CustomEvent("LazyLoad::Initialized", {
                        detail: {
                            instance: r
                        }
                    })
                } catch (e) {
                    (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
                        instance: r
                    })
                }
                window.dispatchEvent(n)
            },
            c = function(e, t) {
                return e.getAttribute("data-" + t)
            },
            l = function(e, t, n) {
                return e.setAttribute("data-" + t, n)
            },
            u = function(e, t, n) {
                var r = e.tagName,
                    i = c(e, n);
                if ("IMG" === r) {
                    ! function(e, t) {
                        var n = e.parentNode;
                        if ("PICTURE" === n.tagName)
                            for (var r = 0; r < n.children.length; r++) {
                                var i = n.children[r];
                                if ("SOURCE" === i.tagName) {
                                    var o = c(i, t);
                                    o && i.setAttribute("srcset", o)
                                }
                            }
                    }(e, t);
                    var o = c(e, t);
                    return o && e.setAttribute("srcset", o), void(i && e.setAttribute("src", i))
                }
                "IFRAME" !== r ? i && (e.style.backgroundImage = 'url("' + i + '")') : i && e.setAttribute("src", i)
            },
            h = "classList" in document.createElement("p"),
            f = function(e, t) {
                h ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
            },
            p = function(e, t) {
                h ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
            },
            d = function(t) {
                this._settings = i({}, e, t), this._queryOriginNode = this._settings.container === window ? document : this._settings.container, this._previousLoopTime = 0, this._loopTimeout = null, this._boundHandleScroll = this.handleScroll.bind(this), this._isFirstLoop = !0, window.addEventListener("resize", this._boundHandleScroll), this.update()
            };
        d.prototype = {
            _reveal: function(e) {
                var t = this._settings,
                    r = function r() {
                        t && (e.removeEventListener("load", i), e.removeEventListener("error", r), p(e, t.class_loading), f(e, t.class_error), n(t.callback_error, e))
                    },
                    i = function i() {
                        t && (p(e, t.class_loading), f(e, t.class_loaded), e.removeEventListener("load", i), e.removeEventListener("error", r), n(t.callback_load, e))
                    };
                n(t.callback_enter, e), "IMG" !== e.tagName && "IFRAME" !== e.tagName || (e.addEventListener("load", i), e.addEventListener("error", r), f(e, t.class_loading)), u(e, t.data_srcset, t.data_src), n(t.callback_set, e)
            },
            _loopThroughElements: function() {
                var e = this._settings,
                    r = this._elements,
                    i = r ? r.length : 0,
                    o = void 0,
                    a = [],
                    c = this._isFirstLoop;
                for (o = 0; o < i; o++) {
                    var u = r[o];
                    e.skip_invisible && null === u.offsetParent || (t || s(u, e.container, e.threshold)) && (c && f(u, e.class_initial), this._reveal(u), a.push(o), l(u, "was-processed", !0))
                }
                for (; a.length;) r.splice(a.pop(), 1), n(e.callback_processed, r.length);
                0 === i && this._stopScrollHandler(), c && (this._isFirstLoop = !1)
            },
            _purgeElements: function() {
                var e = this._elements,
                    t = e.length,
                    n = void 0,
                    r = [];
                for (n = 0; n < t; n++) {
                    var i = e[n];
                    c(i, "was-processed") && r.push(n)
                }
                for (; r.length > 0;) e.splice(r.pop(), 1)
            },
            _startScrollHandler: function() {
                this._isHandlingScroll || (this._isHandlingScroll = !0, this._settings.container.addEventListener("scroll", this._boundHandleScroll))
            },
            _stopScrollHandler: function() {
                this._isHandlingScroll && (this._isHandlingScroll = !1, this._settings.container.removeEventListener("scroll", this._boundHandleScroll))
            },
            handleScroll: function() {
                var e = this._settings.throttle;
                if (0 !== e) {
                    var t = Date.now(),
                        n = e - (t - this._previousLoopTime);
                    n <= 0 || n > e ? (this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._previousLoopTime = t, this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(function() {
                        this._previousLoopTime = Date.now(), this._loopTimeout = null, this._loopThroughElements()
                    }.bind(this), n))
                } else this._loopThroughElements()
            },
            update: function() {
                this._elements = Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)), this._purgeElements(), this._loopThroughElements(), this._startScrollHandler()
            },
            destroy: function() {
                window.removeEventListener("resize", this._boundHandleScroll), this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._stopScrollHandler(), this._elements = null, this._queryOriginNode = null, this._settings = null
            }
        };
        var v = window.lazyLoadOptions;
        return v && function(e, t) {
            var n = t.length;
            if (n)
                for (var r = 0; r < n; r++) a(e, t[r]);
            else a(e, t)
        }(d, v), window.LazyLoadOld = d, d
    })
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = n(0),
        o = new(n(1))("icons");
    ! function(e) {
        var t = void 0,
            n = void 0,
            s = void 0,
            a = void 0,
            c = void 0,
            l = void 0,
            u = void 0,
            h = null,
            f = 240,
            p = !1,
            d = !1,
            v = function() {
                var t = void 0,
                    n = function(e) {
                        return (1 == e.toString().length ? "0" : "") + e
                    };
                if (e.serverDate) t = e.serverDate;
                else {
                    var r = new Date;
                    t = {
                        day: n(r.getDate()),
                        month: n(r.getMonth() + 1),
                        year: r.getFullYear()
                    }
                }
                return function(e) {
                    return e.day + "/" + e.month + "/" + e.year
                }(t)
            }(),
            g = {
                facebook: {
                    name: "Facebook",
                    classe: "fb",
                    url: "https://www.facebook.com/v2.3/dialog/feed?app_id=[appId]&display=popup&redirect_uri=[redirect_uri]&link=[url]&picture=[image]&description=[title]&title=[kicker]",
                    appId: "190329594333794",
                    props: "width=626,height=316",
                    redirect_uri: "http://tm.uol.com.br/bt/facebook_auth/facebook-track-share.html?group=",
                    caption: ""
                },
                twitter: {
                    name: "Twitter",
                    url: "//twitter.com/intent/tweet?via=[via]&url=[url]&text=[title]&image=[image]&hashtags=[hashtags]",
                    props: "width=550,height=490",
                    via: location.href.match(/bol\.uol/) ? "BOL" : "UOL",
                    hashtags: location.href.match(/bol\.uol/) ? "#BOL" : "#UOL"
                },
                pinterest: {
                    name: "Pinterest",
                    url: "//br.pinterest.com/pin/create/button/?url=[url]&media=[image]&description=[title]",
                    props: "width=700,height=300",
                    image: "https://conteudo.imguol.com.br/c/home/interacao/facebook/logo-uol.png"
                },
                email: {
                    name: "E-mail",
                    url: "//www3.uol.com.br/envie/index.jhtm?origem=[station]&texto=[title]&xurl=[url]&data=[date]",
                    props: "width=780,height=490",
                    station: location.href.match(/bol\.uol/) ? "BOL" : "UOL",
                    date: v
                },
                whatsapp: {
                    name: "WhatsApp",
                    classe: "whats",
                    url: "whatsapp://send?text=[title] [url]",
                    props: "width=550,height=490"
                },
                messenger: {
                    name: "Messenger",
                    url: "fb-messenger://share?link=[url]&app_id=[appId]",
                    props: "width=550,height=490",
                    appId: "190329594333794"
                }
            },
            m = function(e, t) {
                if ("string" != typeof t) return !1;
                var n = e ? "length" in e ? e : [e] : [];
                Array.prototype.forEach.call(n, function(e) {
                    for (var n = t.split(" "), r = 0; r < n.length; r++) {
                        var i = n[r],
                            o = new RegExp(i),
                            s = e.getAttribute && e.getAttribute("class") || "";
                        e && !s.match(o) && e.setAttribute("class", s + " " + i)
                    }
                })
            },
            y = function(e, t) {
                var n = void 0,
                    r = e.className.split(" ");
                for (n = 0; n < r.length; n++)
                    if (r[n] == t) return !0;
                return !1
            },
            b = function(e, t) {
                if ("string" != typeof t) return !1;
                var n = new RegExp(" ?" + t),
                    r = e ? "length" in e ? e : [e] : [];
                Array.prototype.forEach.call(r, function(e) {
                    var t = e.getAttribute("class") || "";
                    n && t && t.match(n) && e.setAttribute("class", t.replace(n, ""))
                })
            },
            w = function() {
                if (!l.url) return "";
                var e = _(),
                    t = l.service && e,
                    n = l.url;
                T("check", l, function(e) {
                    if (s.innerHTML.length && n === l.url) {
                        var t = e.success && e.data && e.data.isSaved,
                            r = s.querySelector(".sltr__actions");
                        if (r) {
                            var i = r.querySelector(".sltr__actions__loading"),
                                a = o.render({
                                    icon: "flag"
                                }) + '<strong class="sltr-title">Ver depois</strong><span class="sltr-description">' + (t ? "Link salvo" : "Quero salvar este link") + "</span>" + (t ? '<hr class="sltr-linev"><span role="button" aria-label="salvar matéria" class="sltr-description sltr-action">Remover este link</span>' : "");
                            m(i, "sltr__actions__" + (t ? "remove" : "save")), b(i, "sltr__actions__loading"), i.innerHTML = a
                        }
                    }
                });
                var r = function() {
                        if (!l.share) return "";
                        var e = p ? ["facebook", "twitter", "whatsapp", "messenger"] : ["facebook", "twitter", "pinterest", "email"],
                            t = function(e) {
                                for (var t = "", n = 0; n < e.length; n++)
                                    if (e[n] in g) {
                                        var r = g[e[n]].classe && g[e[n]].classe.length ? g[e[n]].classe : e[n];
                                        t += '<li  class="sltr__share-button sltr__share-' + e[n] + '" data-social="' + e[n] + '" role="button" aria-label="Compartilhar matéria via ' + g[e[n]].name + '"><svg class="sltr-icon-' + r + '"><use xlink:href="#svg-' + r + '" /></svg></li>'
                                    } return t
                            }("string" == typeof l.share ? l.share.split(",") : e);
                        return t.length ? '<ul class="sltr__share"><li><svg class="sltr-icon-share"><use xlink:href="#svg-share" /></svg><span class="sltr-title">Compartilhar</span></li>' + t + "</ul>" : ""
                    }(),
                    i = r.length;
                return '<div class="sltr_container' + (t && i ? "" : i ? " onlyShare" : " onlyActions") + '"><i class="sltr-arrow-popup"><span class="sltr-arrow-popup-inner"></span></i>' + (t ? '<div class="sltr__actions"><div class="sltr__actions__loading">' + o.render({
                    icon: "flag"
                }) + '<strong class="sltr-title">Ver depois</strong><span class="sltr-description loading">Aguardando...</span></div></div>' + (i ? '<hr class="sltr-lineh">' : "") : "") + r + "</div>"
            },
            _ = function() {
                return location.href.indexOf(".preview.intranet/") >= 0 ? {
                    user: {
                        isLogged: function() {}
                    }
                } : "widgetProfile" in e && e.widgetProfile.SeeLater
            },
            E = function(e, n) {
                for (var r = {}, i = {
                        url: "a",
                        image: "img",
                        title: "",
                        caption: "",
                        kicker: ""
                    }, o = "item" === e.parentNode.getAttribute("data-uol-see-later") ? e.parentNode : e.parentNode.parentNode, s = e.attributes, a = s.length - 1; a >= 0; a--) {
                    var c = s[a].name;
                    c.match(/^data-.+/) && "" != s.value && (r[c.replace(/^data-/, "")] = "true" === s[a].value || "false" !== s[a].value && s[a].value)
                }
                var l = void 0,
                    u = function(e) {
                        if (i.hasOwnProperty(e) && !r[e]) {
                            var n = i[e],
                                s = n + "[data-" + t + "]",
                                a = o.querySelectorAll(s);
                            if (Array.prototype.forEach.call(a, function(n) {
                                    e === n.getAttribute("data-" + t) && (l = n)
                                }), l)
                                if ("a" === n) {
                                    var c = l.getAttribute("href");
                                    r[e] = c.replace(/https?:\/\/.*&u=/, "")
                                } else if ("img" === n) r[e] = l.getAttribute("data-src") || l.getAttribute("src");
                            else {
                                var u = l.textContent || "";
                                r[e] = u.replace(/^[\s|\t]*/, "").replace(/[\s|\t]*$/, "")
                            }
                        }
                    };
                for (var h in i) u(h);
                return n ? r[n] || "" : r
            },
            T = function(t, n, i) {
                var o = _(),
                    s = {};
                if (!t || -1 == ["check", "save", "remove"].indexOf(t) || "object" != (void 0 === n ? "undefined" : r(n)) || !n.url || !o) return !1;
                s.url = n.url, "save" === t && (n.title && (s.title = n.title), n.image && (s.image = n.image), s = {
                    article: s,
                    settings: {
                        animateWidgetAvatar: !1
                    }
                }), e.widgetProfile.SeeLater[t + "Url"](s, function(e) {
                    d && (console.log("ARTICLE:", s), console.log("O fluxo inteiro funcionou (não teve erros internos?)", e.success), "check" === t ? console.log("O link já estava salvo na lista do usuário?", e.data && e.data.isSaved) : "save" === t ? (console.log("O link foi salvo na lista do usuário?", e.success), console.log("É a primeira vez que o usuário utiliza o recurso de salvar itens?", e.data && e.data.isFirstSaved)) : "remove" === t && console.log("O link foi removido da lista do usuário?", e.success), console.log("Retornou algum erro?", e.status), console.log(t.toUpperCase(), "RESPONSE:", e)), i && i(e)
                })
            },
            k = function(t) {
                var n = t && t.getBoundingClientRect ? t : c,
                    r = n && n.className.match(/centered/) ? "center" : "right";
                if (n) {
                    var i = n.getBoundingClientRect(),
                        o = e.scrollX || e.pageXOffset,
                        a = e.scrollY || e.pageYOffset,
                        l = parseInt(a + i.top + i.height / 2, 10),
                        u = void 0;
                    u = "center" === r ? parseInt(o + i.left + i.width / 2 - f, 10) : parseInt(o + i.left + i.width - f - 4, 10), s.style.top = l + "px", s.style.left = u + "px", s.style.width = f + "px"
                }
            },
            S = {
                time: 1e4,
                timer: null,
                start: function() {
                    this.timer = e.setTimeout(C, this.time)
                },
                stop: function() {
                    e.clearTimeout(this.timer), this.timer = null
                }
            },
            O = function(n) {
                var r = [];
                if (c && r.push({
                        elem: c,
                        action: "close"
                    }), S.stop(), n && c !== n) {
                    D.pause(), c = n, r.push({
                        elem: c,
                        action: "open"
                    }), l = E(n), k(n);
                    var i = w();
                    if (i.length) {
                        if (p && !document.querySelector(".sltr-overlay")) {
                            var o = document.createElement("div");
                            o.className = "sltr-overlay lightbox-bg", o.tabindex = "-1", document.body.appendChild(o), o.addEventListener("click", C, !1)
                        }
                        s.innerHTML = i, e.setTimeout(function() {
                            m(s.querySelector(".sltr_container"), "sltr-show");
                            var t = s.querySelector(".sltr__actions"),
                                n = t && t.querySelector("div");
                            m(n, "sltr-effect sltr-show"), e.setTimeout(function() {
                                m(s.querySelectorAll(".sltr-lineh,.sltr__share"), "sltr-effect sltr-show")
                            }, n && n.length ? 100 : 1)
                        }, 10), A("abrir"), e.hj && e.hj("trigger", "ver_depois_abrir_drop"), S.start()
                    } else C()
                } else {
                    c = null, l = {}, s.style.cssText = "", s.innerHTML = "";
                    var a = document.querySelector(".sltr-overlay");
                    a && a.remove(), D.start()
                }
                for (var u = 0; u < r.length; u++) {
                    var h = r[u];
                    L(h.elem, t, {
                        detail: {
                            activeButton: h.elem,
                            action: h.action
                        }
                    })
                }
            },
            x = function(e, t) {
                e = "" + e, t = "string" == typeof t && t || "";
                var n = {
                        400: "Objeto enviado contém erro.",
                        401: "Sessão do usuário inválida.",
                        403: "header X-Request-With inválido.",
                        409: "O link já estava salvo anteriormente.",
                        410: "O link não estava na lista do usuário.",
                        500: "Não foi possível [action] este link. Tente novamente.",
                        default: "Houve um erro. Tente novamente mais tarde"
                    },
                    r = n[e] && -1 != [].indexOf(e) ? n[e] : n.default;
                return t.length && (r = r.replace(/\[action\]/, t)), d && console.log(e, n[e] ? n[e] : n.default), r
            },
            I = function(t, n, r, o) {
                d && console.log("MESSAGE ARGUMENTS", arguments), C();
                var s = null;
                u || ((u = document.createElement("div")).id = "sltr-msgContainer", u.classList.add("aboveOverlay"), document.body.appendChild(u), i.helpers.overlay.show()), u.innerHTML = '<div class="sltr-alert' + (r ? "" : " sltr-error") + '"><svg class="sltr-icon sltr-icon-' + (r ? "ok" : "alert") + '"><use xlink:href="#' + (r ? "ok" : "alert") + '" /></svg><span>' + t + "</span></div>", e.setTimeout(function() {
                    m(u.querySelector(".sltr-alert"), "sltr-show")
                }, 10);
                var a = function(t) {
                        t && t.preventDefault();
                        var n = function(e) {
                            e && e.preventDefault(), u.remove(), i.helpers.overlay.hide(), u = null, c()
                        };
                        o ? (m(u.querySelectorAll(".sltr-icon, span"), "sltr-effect sltr-hide"), e.setTimeout(function() {
                            var t = u.querySelector(".sltr-alert");
                            m(t, "sltr-firstView"), e.setTimeout(function() {
                                t.innerHTML = '<div class="sltr-close sltr-effect sltr-hide"><svg class="sltr-firstView-close" role="button" aria-label="fechar ver depois"><use xlink:href="#svg-close" /></svg></div><span class="sltr-effect sltr-hide">Os links salvos para ver depois estarão sempre aqui disponíveis em sua lista</span>', t.querySelector(".sltr-close").addEventListener("click", n, !1), e.setTimeout(function() {
                                    m(t, "sltr-firstViewImg"), b(t.children, "sltr-hide"), m(t.children, "sltr-show")
                                }, 100)
                            }, 600)
                        }, 250), o = !1) : u && !u.querySelector(".sltr-firstView") && n(), clearTimeout(s), s = null
                    },
                    c = function() {
                        document.removeEventListener("click", a, !1)
                    };
                s = e.setTimeout(a, 3e3), document.addEventListener("click", a, !1)
            },
            N = function() {
                if (!e.widgetProfile.View.hasOwnProperty("seeLaterAnimateWidgetAvatar")) return !1;
                document.querySelector(".UHeader").classList.add("UHeader__fixed__seelater"), e.widgetProfile.View.seeLaterAnimateWidgetAvatar(1e3), e.setTimeout(function() {
                    document.querySelector(".UHeader").classList.remove("UHeader__fixed__seelater")
                }, 4300)
            },
            A = function(e, n, r) {
                var o = o || {},
                    s = n || c && c.parentNode;
                if (s) {
                    var a = function(e) {
                        if (e) {
                            ["category", "area", "label", "position"].forEach(function(t) {
                                var n = e.getAttribute("data-" + t) || "";
                                n.length && (o[t] = n)
                            })
                        }
                    };
                    a(s);
                    var l = c.querySelector("a[data-" + t + "]") || s.querySelector("a[data-" + t + "]") || null;
                    l && a(l), o.label = "drop-chamada-" + e, o.action = r && "" != r ? r : "clique", i.helpers.metrics(o)
                } else d && console.log("Não foi possível gerar métrica", o)
            },
            L = function(t, n, r) {
                var i = void 0;
                e.CustomEvent ? i = new CustomEvent(n, r) : (i = document.createEvent("CustomEvent")).initCustomEvent(n, !0, !0, r), t.dispatchEvent(i)
            },
            C = function() {
                O(!1)
            },
            P = function t() {
                var r = document.querySelectorAll(n),
                    i = _();
                Array.prototype.forEach.call(r, function(e) {
                    var t = E(e),
                        n = t.url && t.service && i;
                    if (n && !e.hasAttribute("data-initiated")) {
                        e.addEventListener("click", function(t) {
                            t.preventDefault(), t.stopPropagation(), R(e, t)
                        }, !1);
                        var r = !1;
                        h && h.indexOf(t.url) > -1 && (r = !0), e.innerHTML = '<span class="uolSeeLater_icon"> ' + o.render({
                            icon: "flag"
                        }) + '<p class="uolSeeLater_text">' + (r ? "LINK SALVO" : "VER DEPOIS") + "</p>                 </span>", e.querySelector(".uolSeeLater_icon svg").setAttribute("class", "sltr_icon__save"), p && !r && (e.className += " show_animation"), r && -1 == e.className.indexOf("saved") && (e.className += " saved"), e.className += " init", e.setAttribute("data-initiated", !0)
                    } else if (n && i && i.user.isLogged()) {
                        if (h && h.indexOf(t.url) > -1) p && b(e, "show_animation"), -1 == e.className.indexOf("saved") && (e.className += " saved"), e.querySelector(".uolSeeLater_text").innerHTML = "LINK SALVO"
                    } else if (i && !i.user.isLogged()) {
                        if (h = null, 1 == y(e, "saved")) b(e, "saved"), p && b(e, "show_animation"), e.querySelector(".uolSeeLater_text").innerHTML = "VER DEPOIS"
                    }
                }), i && i.user.isLogged() && null == h && e.widgetProfile.SeeLater.list("", function(e) {
                    if (h = [], 1 == e.success) {
                        var n = e.data;
                        for (var r in n) h.push(n[r].url.replace(/ /g, "%20"));
                        t()
                    }
                })
            },
            R = function(t, n) {
                n.preventDefault();
                var r = E(t),
                    o = 1 == y(t, "saved") ? "remove" : "save",
                    s = _(),
                    a = (c = t && c !== t ? t.parentNode : null).parentNode;
                switch (o) {
                    case "save":
                        s && s.user.isLogged() && A("salvar-link", a, "logged-user-success"), T("save", r, function(n) {
                            (d && console.log("MESSAGE SAVE", n), 0 == n.success && 409 != n.status && I(x(n.status, "salvar"), "save", n.success), n.success || 409 == n.status) && (A("impressao-salvo", a), m(t, "saved"), t.querySelector(".uolSeeLater_text").innerHTML = "LINK SALVO", function() {
                                if (localStorage.getItem("showSeeLaterLightbox")) N();
                                else {
                                    localStorage.setItem("showSeeLaterLightbox", !0), u || ((u = document.createElement("div")).id = "sltr-msgContainer", u.classList.add("aboveOverlay", "modalFirst"), document.body.appendChild(u));
                                    var t = function(t) {
                                            t && t.preventDefault(), u.remove(), u = null, i.helpers.overlay.hide(), e.setTimeout(function() {
                                                N()
                                            }, 500)
                                        },
                                        n = "http://hp.imguol.com.br/c/geral/gif-animated/bb/2018/02/07/home-uol---ver-depois-web-1518015520337_g2_722x290.jpg",
                                        r = "http://hp.imguol.com.br/c/geral/gif-animated/bb/2018/02/07/home-uol---ver-depois-web-1518015520337_g2_722x290.mp4",
                                        o = "http://hp.imguol.com.br/c/geral/gif-animated/bb/2018/02/07/home-uol---ver-depois-web-1518015520337_g2_722x290.webm";
                                    if (p && (n = "http://hp.imguol.com.br/c/geral/gif-animated/dc/2018/02/07/home-uol---ver-depois-mobile-1518015493342_g2_320x258.jpg", r = "http://hp.imguol.com.br/c/geral/gif-animated/dc/2018/02/07/home-uol---ver-depois-mobile-1518015493342_g2_320x258.mp4", o = "http://hp.imguol.com.br/c/geral/gif-animated/dc/2018/02/07/home-uol---ver-depois-mobile-1518015493342_g2_320x258.webm"), u.innerHTML = '         <div class="lightbox-content">         <div class="sltr-lightbox">           <div class="sltr-lightbox-close">             <svg class="sltr-lightbox-close-icon" role="button" aria-label="fechar ver depois">               <use xlink:href="#close" />             </svg>           </div>           <span class="sltr-lightbox-text">Você encontra os links salvos acessando o seu perfil no topo das páginas do UOL</span>           <span class="sltr-lightbox-video">             <div class="sltr-lightbox-play"></div>             <video autoplay loop poster="' + n + '">               <source src="' + r + '" type="video/mp4">               <source src="' + o + '" type="video/webm">             </video>           </span>         </div>         </div>         <div class="lightbox-bg"></div>         ', u.querySelector(".sltr-lightbox-close").addEventListener("click", t, !1), p) {
                                        var s = u.querySelector("video"),
                                            a = u.querySelector(".sltr-lightbox-play");
                                        i.helpers.overlay.show(), document.querySelector("span.over").addEventListener("click", t, !1), s.addEventListener("playing", function() {
                                            m(a, "hide")
                                        }), s.addEventListener("pause", function() {
                                            b(a, "hide")
                                        }), a.addEventListener("click", function() {
                                            s.play()
                                        }, !1)
                                    }
                                }
                            }(), h && -1 === h.indexOf(r.url) && h.push(r.url));
                            e.hj && e.hj("tagRecording", ["ver depois link salvo"])
                        }), e.hj && e.hj("trigger", "ver_depois_clique_salvar_link"), e.hj && e.hj("tagRecording", ["ver depois salvar link"]), A("salvar-link");
                        break;
                    case "remove":
                        T("remove", r, function(e) {
                            if (0 == e.success) return I(x(e.status, "remover"), "remove", e.success), !1;
                            A("remover-link-salvo"), b(t, "saved"), p && b(t, "show_animation"), t.querySelector(".uolSeeLater_text").innerHTML = "VER DEPOIS", h && h.indexOf(r.url) > -1 && h.splice(h.indexOf(r.url), 1)
                        })
                }
            };
        "remove" in Element.prototype || (Element.prototype.remove = function() {
            this.parentNode && this.parentNode.removeChild(this)
        });
        var D = {
                start: function() {},
                pause: function() {}
            },
            M = function(i) {
                if (-1 != navigator.appVersion.indexOf("MSIE 9")) return !1;
                t = i && i.selector && i.selector.replace(/[\.|#|\s|\t]/, "") || "uol-see-later", n = "." + t, p = e.Config && "mobile" == e.Config.plataforma, d = e.location.search.match(/debug=true/) && e.console, a = i && i.container || ".sltr-context-menu", s = document.querySelector(a), f = i && i.menuWidth || (p ? 228 : f), i && i.refresh && i.refresh.start && "function" == typeof i.refresh.start && i.refresh.pause && "function" == typeof i.refresh.pause ? D = i.refresh : e.homeUOL && e.homeUOL.modules && e.homeUOL.modules.refresh && (D = e.homeUOL.modules.refresh), s || ((s = document.createElement("div")).className = "sltr-context-menu", document.body.appendChild(s)), P(), i && "socialNetwork" in i && (g = function e(t) {
                    t = t || {};
                    for (var n = 1; n < arguments.length; n++) {
                        var i = arguments[n];
                        if (i)
                            for (var o in i) i.hasOwnProperty(o) && ("object" === r(i[o]) ? t[o] = e(t[o], i[o]) : t[o] = i[o])
                    }
                    return t
                }(g, i.socialNetwork))
            };
        e.seeLater = {
            version: "1.0.0",
            init: M,
            update: P,
            clear: C,
            action: T,
            reposition: k
        }, e.onHomeReady && e.onHomeReady(M)
    }(window)
}, function(e, t, n) {
    "use strict";
    var r, i, o, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    /*!
     * mustache.js - Logic-less {{mustache}} templates with JavaScript
     * http://github.com/janl/mustache.js
     */
    ! function(n, a) {
        "object" === s(t) && t && "string" != typeof t.nodeName ? a(t) : (i = [t], void 0 === (o = "function" == typeof(r = a) ? r.apply(t, i) : r) || (e.exports = o))
    }(0, function(e) {
        var t = Object.prototype.toString,
            n = Array.isArray || function(e) {
                return "[object Array]" === t.call(e)
            };

        function r(e) {
            return "function" == typeof e
        }

        function i(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        function o(e, t) {
            return null != e && "object" === (void 0 === e ? "undefined" : s(e)) && t in e
        }
        var a = RegExp.prototype.test;
        var c = /\S/;

        function l(e) {
            return ! function(e, t) {
                return a.call(e, t)
            }(c, e)
        }
        var u = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        var h = /\s*/,
            f = /\s+/,
            p = /\s*=/,
            d = /\s*\}/,
            v = /#|\^|\/|>|\{|&|=|!/;

        function g(e) {
            this.string = e, this.tail = e, this.pos = 0
        }

        function m(e, t) {
            this.view = e, this.cache = {
                ".": this.view
            }, this.parent = t
        }

        function y() {
            this.cache = {}
        }
        g.prototype.eos = function() {
            return "" === this.tail
        }, g.prototype.scan = function(e) {
            var t = this.tail.match(e);
            if (!t || 0 !== t.index) return "";
            var n = t[0];
            return this.tail = this.tail.substring(n.length), this.pos += n.length, n
        }, g.prototype.scanUntil = function(e) {
            var t, n = this.tail.search(e);
            switch (n) {
                case -1:
                    t = this.tail, this.tail = "";
                    break;
                case 0:
                    t = "";
                    break;
                default:
                    t = this.tail.substring(0, n), this.tail = this.tail.substring(n)
            }
            return this.pos += t.length, t
        }, m.prototype.push = function(e) {
            return new m(e, this)
        }, m.prototype.lookup = function(e) {
            var t, n = this.cache;
            if (n.hasOwnProperty(e)) t = n[e];
            else {
                for (var i, s, a = this, c = !1; a;) {
                    if (e.indexOf(".") > 0)
                        for (t = a.view, i = e.split("."), s = 0; null != t && s < i.length;) s === i.length - 1 && (c = o(t, i[s])), t = t[i[s++]];
                    else t = a.view[e], c = o(a.view, e);
                    if (c) break;
                    a = a.parent
                }
                n[e] = t
            }
            return r(t) && (t = t.call(this.view)), t
        }, y.prototype.clearCache = function() {
            this.cache = {}
        }, y.prototype.parse = function(t, r) {
            var o = this.cache,
                s = o[t];
            return null == s && (s = o[t] = function(t, r) {
                if (!t) return [];
                var o, s, a, c = [],
                    u = [],
                    m = [],
                    y = !1,
                    b = !1;

                function w() {
                    if (y && !b)
                        for (; m.length;) delete u[m.pop()];
                    else m = [];
                    y = !1, b = !1
                }

                function _(e) {
                    if ("string" == typeof e && (e = e.split(f, 2)), !n(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
                    o = new RegExp(i(e[0]) + "\\s*"), s = new RegExp("\\s*" + i(e[1])), a = new RegExp("\\s*" + i("}" + e[1]))
                }
                _(r || e.tags);
                for (var E, T, k, S, O, x, I = new g(t); !I.eos();) {
                    if (E = I.pos, k = I.scanUntil(o))
                        for (var N = 0, A = k.length; N < A; ++N) l(S = k.charAt(N)) ? m.push(u.length) : b = !0, u.push(["text", S, E, E + 1]), E += 1, "\n" === S && w();
                    if (!I.scan(o)) break;
                    if (y = !0, T = I.scan(v) || "name", I.scan(h), "=" === T ? (k = I.scanUntil(p), I.scan(p), I.scanUntil(s)) : "{" === T ? (k = I.scanUntil(a), I.scan(d), I.scanUntil(s), T = "&") : k = I.scanUntil(s), !I.scan(s)) throw new Error("Unclosed tag at " + I.pos);
                    if (O = [T, k, E, I.pos], u.push(O), "#" === T || "^" === T) c.push(O);
                    else if ("/" === T) {
                        if (!(x = c.pop())) throw new Error('Unopened section "' + k + '" at ' + E);
                        if (x[1] !== k) throw new Error('Unclosed section "' + x[1] + '" at ' + E)
                    } else "name" === T || "{" === T || "&" === T ? b = !0 : "=" === T && _(k)
                }
                if (x = c.pop()) throw new Error('Unclosed section "' + x[1] + '" at ' + I.pos);
                return function(e) {
                    for (var t, n = [], r = n, i = [], o = 0, s = e.length; o < s; ++o) switch ((t = e[o])[0]) {
                        case "#":
                        case "^":
                            r.push(t), i.push(t), r = t[4] = [];
                            break;
                        case "/":
                            i.pop()[5] = t[2], r = i.length > 0 ? i[i.length - 1][4] : n;
                            break;
                        default:
                            r.push(t)
                    }
                    return n
                }(function(e) {
                    for (var t, n, r = [], i = 0, o = e.length; i < o; ++i)(t = e[i]) && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (r.push(t), n = t));
                    return r
                }(u))
            }(t, r)), s
        }, y.prototype.render = function(e, t, n) {
            var r = this.parse(e),
                i = t instanceof m ? t : new m(t);
            return this.renderTokens(r, i, n, e)
        }, y.prototype.renderTokens = function(e, t, n, r) {
            for (var i, o, s, a = "", c = 0, l = e.length; c < l; ++c) s = void 0, "#" === (o = (i = e[c])[0]) ? s = this.renderSection(i, t, n, r) : "^" === o ? s = this.renderInverted(i, t, n, r) : ">" === o ? s = this.renderPartial(i, t, n, r) : "&" === o ? s = this.unescapedValue(i, t) : "name" === o ? s = this.escapedValue(i, t) : "text" === o && (s = this.rawValue(i)), void 0 !== s && (a += s);
            return a
        }, y.prototype.renderSection = function(e, t, i, o) {
            var a = this,
                c = "",
                l = t.lookup(e[1]);
            if (l) {
                if (n(l))
                    for (var u = 0, h = l.length; u < h; ++u) c += this.renderTokens(e[4], t.push(l[u]), i, o);
                else if ("object" === (void 0 === l ? "undefined" : s(l)) || "string" == typeof l || "number" == typeof l) c += this.renderTokens(e[4], t.push(l), i, o);
                else if (r(l)) {
                    if ("string" != typeof o) throw new Error("Cannot use higher-order sections without the original template");
                    null != (l = l.call(t.view, o.slice(e[3], e[5]), function(e) {
                        return a.render(e, t, i)
                    })) && (c += l)
                } else c += this.renderTokens(e[4], t, i, o);
                return c
            }
        }, y.prototype.renderInverted = function(e, t, r, i) {
            var o = t.lookup(e[1]);
            if (!o || n(o) && 0 === o.length) return this.renderTokens(e[4], t, r, i)
        }, y.prototype.renderPartial = function(e, t, n) {
            if (n) {
                var i = r(n) ? n(e[1]) : n[e[1]];
                return null != i ? this.renderTokens(this.parse(i), t, n, i) : void 0
            }
        }, y.prototype.unescapedValue = function(e, t) {
            var n = t.lookup(e[1]);
            if (null != n) return n
        }, y.prototype.escapedValue = function(t, n) {
            var r = n.lookup(t[1]);
            if (null != r) return e.escape(r)
        }, y.prototype.rawValue = function(e) {
            return e[1]
        }, e.name = "mustache.js", e.version = "2.3.2", e.tags = ["{{", "}}"];
        var b = new y;
        return e.clearCache = function() {
            return b.clearCache()
        }, e.parse = function(e, t) {
            return b.parse(e, t)
        }, e.render = function(e, t, r) {
            if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + function(e) {
                return n(e) ? "array" : void 0 === e ? "undefined" : s(e)
            }(e) + '" was given as the first argument for mustache#render(template, view, partials)');
            return b.render(e, t, r)
        }, e.to_html = function(t, n, i, o) {
            var s = e.render(t, n, i);
            if (!r(o)) return s;
            o(s)
        }, e.escape = function(e) {
            return String(e).replace(/[&<>"'`=\/]/g, function(e) {
                return u[e]
            })
        }, e.Scanner = g, e.Context = m, e.Writer = y, e
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(126),
        o = n(137),
        s = n(140),
        a = n(146),
        c = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return r(e, [{
                key: "getVirtualDom",
                value: function(e) {
                    return this.props["data-key"] = this.props.key, i("main", {
                        key: "main",
                        id: "timeline"
                    }, i(this.el, this.props, e))
                }
            }, {
                key: "getTemplate",
                value: function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        e || n(), "" === e.el && (e.el = "div");
                        var r = "<" + e.el + ">",
                            i = "</" + e.el + ">";
                        e.tpl = r + e.tpl + i;
                        var o = (new DOMParser).parseFromString(e.tpl, "text/html");
                        t(e.getVirtualDom(o.getElementsByTagName("body")[0].firstElementChild))
                    })
                }
            }, {
                key: "diff",
                value: function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        e.getTemplate().then(function(r) {
                            r.children[0] || n();
                            for (var i = r.children[0].key, a = document.querySelector('[data-key="' + i + '"]'), c = !1, l = 0; l < e.tree.children.length; l++) e.tree.children[l].key === i ? c = !0 : c ? r.children.push(e.tree.children[l]) : r.children.splice(r.children.length - 1, 0, e.tree.children[l]);
                            var u = o(e.tree, r);
                            e.rootNode = s(e.rootNode, u), e.tree = r, e.renderSVG(a);
                            var h = {
                                el: e.rootNode,
                                key: i
                            };
                            t(h)
                        })
                    })
                }
            }, {
                key: "renderSVG",
                value: function(e) {
                    var t = e ? e.querySelectorAll(".icons") : document.getElementById("timeline").lastElementChild.querySelectorAll(".icons");
                    t.length && Array.prototype.slice.call(t).forEach(function(e) {
                        e.innerHTML = e.innerHTML
                    })
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        e.getTemplate().then(function(r) {
                            r || n(), e.tree = r;
                            var i = e.tree.children[0].key;
                            e.rootNode = a(e.tree);
                            var o = document.getElementById("app");
                            o.innerHTML = "", o.appendChild(e.rootNode), e.renderSVG();
                            var s = {
                                el: e.rootNode,
                                key: i
                            };
                            t(s)
                        })
                    })
                }
            }, {
                key: "render",
                value: function(e, t, n) {
                    return n && n.hasOwnProperty("key") && "" != e ? (this.tpl = e, this.el = t, this.props = n, this.tree ? this.diff() : this.init()) : Promise.reject("Erro: módulo sem a key ou com template vazio")
                }
            }]), e
        }();
    e.exports = new c
}, function(e, t, n) {
    "use strict";
    var r = n(127);
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = n(12),
        o = n(128),
        s = n(129),
        a = n(5),
        c = n(8),
        l = n(3),
        u = n(7),
        h = n(6),
        f = n(130),
        p = n(132),
        d = n(133),
        v = ["id", "alt", "title", "className", "attributes", "style", "key"];

    function g(e) {
        for (var t = {
                attributes: {}
            }, n = 0; n < Object.keys(e).length; n++) "classname" === Object.keys(e)[n] ? t.className = e[Object.keys(e)[n]] : -1 === v.indexOf(Object.keys(e)[n]) ? t.attributes[Object.keys(e)[n]] = e[Object.keys(e)[n]] : "attributes" !== Object.keys(e)[n] && (t[Object.keys(e)[n]] = e[Object.keys(e)[n]]);
        return t
    }

    function m(e, t, n) {
        var a, c, l, h, v = [];
        if (t && "use" !== e && (t = g(t)), !n && function(e) {
                return "string" == typeof e || i(e) || y(e)
            }(t) && (n = t, c = {}), a = f(e, c = c || t || {}), c.hasOwnProperty("key") && (l = c.key, c.key = void 0), c.hasOwnProperty("namespace") && (h = c.namespace, c.namespace = void 0), "INPUT" === a && !h && c.hasOwnProperty("value") && void 0 !== c.value && !u(c.value)) {
            if (null !== c.value && "string" != typeof c.value) throw function(e) {
                var t = new Error;
                return t.type = "virtual-hyperscript.unsupported.value-type", t.message = "Unexpected value type for input passed to h().\nExpected a " + b(e.expected) + " but got:\n" + b(e.received) + ".\nThe vnode is:\n" + b(e.Vnode), t.Vnode = e.Vnode, t
            }({
                expected: "String",
                received: r(c.value),
                Vnode: {
                    tagName: a,
                    properties: c
                }
            });
            c.value = p(c.value)
        }
        return function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) {
                    var n = e[t];
                    if (u(n)) continue;
                    "ev-" === t.substr(0, 3) && (e[t] = d(n))
                }
        }(c), void 0 !== n && null !== n && function e(t, n, a, c) {
            if ("string" == typeof t) n.push(new s(t));
            else if ("object" === (void 0 === t ? "undefined" : r(t)) && t.childNodes && t.childNodes.length) ! function(e, t) {
                for (var n = 0; n < e.childNodes.length; n++) {
                    var r = e.childNodes[n];
                    if (r.tagName) {
                        for (var i = {}, a = 0; a < r.attributes.length; a++) i[r.attributes[a].name] = r.attributes[a].value;
                        if (r.innerHTML) {
                            var c = m(r.tagName, i, r);
                            t.push(new o(c.tagName, c.properties, c.children))
                        } else "" === r.innerHTML && r.attributes.length ? (i = g(i), t.push(new o(r.tagName, i))) : t.push(new o(r.tagName))
                    } else "" != r.textContent.trim() && t.push(new s(String(r.textContent)))
                }
            }(t, n);
            else if ("number" == typeof t) n.push(new s(String(t)));
            else if (y(t)) n.push(t);
            else {
                if (!i(t)) {
                    if (null === t || void 0 === t) return;
                    throw function(e) {
                        var t = new Error;
                        return t.type = "virtual-hyperscript.unexpected.virtual-element", t.message = "Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n" + b(e.foreignObject) + ".\nThe parent vnode is:\n" + b(e.parentVnode), t.foreignObject = e.foreignObject, t.parentVnode = e.parentVnode, t
                    }({
                        foreignObject: t,
                        parentVnode: {
                            tagName: a,
                            properties: c
                        }
                    })
                }
                for (var l = 0; l < t.length; l++) e(t[l], n, a, c)
            }
        }(n, v, a, c), new o(a, c, v, l, h)
    }

    function y(e) {
        return a(e) || c(e) || l(e) || h(e)
    }

    function b(e) {
        try {
            return JSON.stringify(e, null, "    ")
        } catch (t) {
            return String(e)
        }
    }
    e.exports = m
}, function(e, t, n) {
    "use strict";
    var r = n(4),
        i = n(5),
        o = n(3),
        s = n(6),
        a = n(7);
    e.exports = u;
    var c = {},
        l = [];

    function u(e, t, n, r, u) {
        this.tagName = e, this.properties = t || c, this.children = n || l, this.key = null != r ? String(r) : void 0, this.namespace = "string" == typeof u ? u : null;
        var h, f = n && n.length || 0,
            p = 0,
            d = !1,
            v = !1,
            g = !1;
        for (var m in t)
            if (t.hasOwnProperty(m)) {
                var y = t[m];
                a(y) && y.unhook && (h || (h = {}), h[m] = y)
            } for (var b = 0; b < f; b++) {
            var w = n[b];
            i(w) ? (p += w.count || 0, !d && w.hasWidgets && (d = !0), !v && w.hasThunks && (v = !0), g || !w.hooks && !w.descendantHooks || (g = !0)) : !d && o(w) ? "function" == typeof w.destroy && (d = !0) : !v && s(w) && (v = !0)
        }
        this.count = f + p, this.hasWidgets = d, this.hasThunks = v, this.hooks = h, this.descendantHooks = g
    }
    u.prototype.version = r, u.prototype.type = "VirtualNode"
}, function(e, t, n) {
    "use strict";
    var r = n(4);

    function i(e) {
        this.text = String(e)
    }
    e.exports = i, i.prototype.version = r, i.prototype.type = "VirtualText"
}, function(e, t, n) {
    "use strict";
    var r = n(131),
        i = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,
        o = /^\.|#/;
    e.exports = function(e, t) {
        if (!e) return "DIV";
        var n, s, a, c, l = !t.hasOwnProperty("id"),
            u = r(e, i),
            h = null;
        o.test(u[1]) && (h = "DIV");
        for (c = 0; c < u.length; c++)(s = u[c]) && (a = s.charAt(0), h ? "." === a ? (n = n || []).push(s.substring(1, s.length)) : "#" === a && l && (t.id = s.substring(1, s.length)) : h = s);
        n && (t.className && n.push(t.className), t.className = n.join(" "));
        return t.namespace ? h : h.toUpperCase()
    }
}, function(e, t, n) {
    "use strict";
    /*!
     * Cross-Browser Split 1.1.1
     * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
     * Available under the MIT License
     * ECMAScript compliant, uniform cross-browser split method
     */
    e.exports = function(e) {
        var t = String.prototype.split,
            n = /()??/.exec("")[1] === e;
        return function(r, i, o) {
            if ("[object RegExp]" !== Object.prototype.toString.call(i)) return t.call(r, i, o);
            var s, a, c, l, u = [],
                h = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.extended ? "x" : "") + (i.sticky ? "y" : ""),
                f = 0;
            i = new RegExp(i.source, h + "g");
            for (r += "", n || (s = new RegExp("^" + i.source + "$(?!\\s)", h)), o = o === e ? -1 >>> 0 : o >>> 0;
                (a = i.exec(r)) && !((c = a.index + a[0].length) > f && (u.push(r.slice(f, a.index)), !n && a.length > 1 && a[0].replace(s, function() {
                    for (var t = 1; t < arguments.length - 2; t++) arguments[t] === e && (a[t] = e)
                }), a.length > 1 && a.index < r.length && Array.prototype.push.apply(u, a.slice(1)), l = a[0].length, f = c, u.length >= o));) i.lastIndex === a.index && i.lastIndex++;
            return f === r.length ? !l && i.test("") || u.push("") : u.push(r.slice(f)), u.length > o ? u.slice(0, o) : u
        }
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (!(this instanceof r)) return new r(e);
        this.value = e
    }
    e.exports = r, r.prototype.hook = function(e, t) {
        e[t] !== this.value && (e[t] = this.value)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(134);

    function i(e) {
        if (!(this instanceof i)) return new i(e);
        this.value = e
    }
    e.exports = i, i.prototype.hook = function(e, t) {
        r(e)[t.substr(3)] = this.value
    }, i.prototype.unhook = function(e, t) {
        r(e)[t.substr(3)] = void 0
    }
}, function(e, t, n) {
    "use strict";
    n(135)("ev-store", "7");
    var r = "__EV_STORE_KEY@7";
    e.exports = function(e) {
        var t = e[r];
        t || (t = e[r] = {});
        return t
    }
}, function(e, t, n) {
    "use strict";
    var r = n(136);
    e.exports = function(e, t, n) {
        var i = "__INDIVIDUAL_ONE_VERSION_" + e,
            o = r(i + "_ENFORCE_SINGLETON", t);
        if (o !== t) throw new Error("Can only have one copy of " + e + ".\nYou already have version " + o + " installed.\nThis means you cannot install version " + t);
        return r(i, n)
    }
}, function(e, t, n) {
    "use strict";
    (function(t) {
        var n = "undefined" != typeof window ? window : void 0 !== t ? t : {};
        e.exports = function(e, t) {
            if (e in n) return n[e];
            return n[e] = t, t
        }
    }).call(t, n(19))
}, function(e, t, n) {
    "use strict";
    var r = n(138);
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = n(12),
        i = n(20),
        o = n(5),
        s = n(8),
        a = n(3),
        c = n(6),
        l = n(21),
        u = n(139);

    function h(e, t) {
        var n = {
            a: e
        };
        return f(e, t, n, 0), n
    }

    function f(e, t, n, r) {
        if (e !== t) {
            var l = n[r],
                h = !1;
            if (c(e) || c(t)) d(e, t, n, r);
            else if (null == t) a(e) || (p(e, n, r), l = n[r]), l = m(l, new i(i.REMOVE, e, t));
            else if (o(t))
                if (o(e))
                    if (e.tagName === t.tagName && e.namespace === t.namespace && e.key === t.key) {
                        var y = u(e.properties, t.properties);
                        y && (l = m(l, new i(i.PROPS, e, y))), l = function(e, t, n, r, s) {
                            for (var a = e.children, c = function(e, t) {
                                    var n = g(t),
                                        r = n.keys,
                                        i = n.free;
                                    if (i.length === t.length) return {
                                        children: t,
                                        moves: null
                                    };
                                    var o = g(e),
                                        s = o.keys;
                                    if (o.free.length === e.length) return {
                                        children: t,
                                        moves: null
                                    };
                                    for (var a = [], c = 0, l = i.length, u = 0, h = 0; h < e.length; h++) {
                                        var f, p = e[h];
                                        p.key ? r.hasOwnProperty(p.key) ? (f = r[p.key], a.push(t[f])) : (f = h - u++, a.push(null)) : c < l ? (f = i[c++], a.push(t[f])) : (f = h - u++, a.push(null))
                                    }
                                    for (var d = c >= i.length ? t.length : i[c], m = 0; m < t.length; m++) {
                                        var y = t[m];
                                        y.key ? s.hasOwnProperty(y.key) || a.push(y) : m >= d && a.push(y)
                                    }
                                    for (var b, w = a.slice(), _ = 0, E = [], T = [], k = 0; k < t.length;) {
                                        var S = t[k];
                                        for (b = w[_]; null === b && w.length;) E.push(v(w, _, null)), b = w[_];
                                        b && b.key === S.key ? (_++, k++) : S.key ? (b && b.key && r[b.key] !== k + 1 ? (E.push(v(w, _, b.key)), (b = w[_]) && b.key === S.key ? _++ : T.push({
                                            key: S.key,
                                            to: k
                                        })) : T.push({
                                            key: S.key,
                                            to: k
                                        }), k++) : b && b.key && E.push(v(w, _, b.key))
                                    }
                                    for (; _ < w.length;) b = w[_], E.push(v(w, _, b && b.key));
                                    if (E.length === u && !T.length) return {
                                        children: a,
                                        moves: null
                                    };
                                    return {
                                        children: a,
                                        moves: {
                                            removes: E,
                                            inserts: T
                                        }
                                    }
                                }(a, t.children), l = c.children, u = a.length, h = l.length, p = u > h ? u : h, d = 0; d < p; d++) {
                                var y = a[d],
                                    b = l[d];
                                s += 1, y ? f(y, b, n, s) : b && (r = m(r, new i(i.INSERT, null, b))), o(y) && y.count && (s += y.count)
                            }
                            c.moves && (r = m(r, new i(i.ORDER, e, c.moves)));
                            return r
                        }(e, t, n, l, r)
                    } else l = m(l, new i(i.VNODE, e, t)), h = !0;
            else l = m(l, new i(i.VNODE, e, t)), h = !0;
            else s(t) ? s(e) ? e.text !== t.text && (l = m(l, new i(i.VTEXT, e, t))) : (l = m(l, new i(i.VTEXT, e, t)), h = !0) : a(t) && (a(e) || (h = !0), l = m(l, new i(i.WIDGET, e, t)));
            l && (n[r] = l), h && p(e, n, r)
        }
    }

    function p(e, t, n) {
        ! function e(t, n, r) {
            if (o(t)) {
                if (t.hooks && (n[r] = m(n[r], new i(i.PROPS, t, function(e) {
                        var t = {};
                        for (var n in e) t[n] = void 0;
                        return t
                    }(t.hooks)))), t.descendantHooks || t.hasThunks)
                    for (var s = t.children, a = s.length, l = 0; l < a; l++) {
                        var u = s[l];
                        e(u, n, r += 1), o(u) && u.count && (r += u.count)
                    }
            } else c(t) && d(t, null, n, r)
        }(e, t, n),
        function e(t, n, r) {
            if (a(t)) "function" == typeof t.destroy && (n[r] = m(n[r], new i(i.REMOVE, t, null)));
            else if (o(t) && (t.hasWidgets || t.hasThunks))
                for (var s = t.children, l = s.length, u = 0; u < l; u++) {
                    var h = s[u];
                    e(h, n, r += 1), o(h) && h.count && (r += h.count)
                } else c(t) && d(t, null, n, r)
        }(e, t, n)
    }

    function d(e, t, n, r) {
        var o = l(e, t),
            s = h(o.a, o.b);
        (function(e) {
            for (var t in e)
                if ("a" !== t) return !0;
            return !1
        })(s) && (n[r] = new i(i.THUNK, null, s))
    }

    function v(e, t, n) {
        return e.splice(t, 1), {
            from: t,
            key: n
        }
    }

    function g(e) {
        for (var t = {}, n = [], r = e.length, i = 0; i < r; i++) {
            var o = e[i];
            o.key ? t[o.key] = i : n.push(i)
        }
        return {
            keys: t,
            free: n
        }
    }

    function m(e, t) {
        return e ? (r(e) ? e.push(t) : e = [e, t], e) : t
    }
    e.exports = h
}, function(e, t, n) {
    "use strict";
    var r = n(22),
        i = n(7);

    function o(e) {
        return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__ ? e.__proto__ : e.constructor ? e.constructor.prototype : void 0
    }
    e.exports = function e(t, n) {
        var s;
        for (var a in t) {
            a in n || ((s = s || {})[a] = void 0);
            var c = t[a],
                l = n[a];
            if (c !== l)
                if (r(c) && r(l))
                    if (o(l) !== o(c))(s = s || {})[a] = l;
                    else if (i(l))(s = s || {})[a] = l;
            else {
                var u = e(c, l);
                u && ((s = s || {})[a] = u)
            } else(s = s || {})[a] = l
        }
        for (var h in n) h in t || ((s = s || {})[h] = n[h]);
        return s
    }
}, function(e, t, n) {
    "use strict";
    var r = n(141);
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = n(23),
        i = n(12),
        o = n(24),
        s = n(143),
        a = n(144);

    function c(e, t, n) {
        var i = function(e) {
            var t = [];
            for (var n in e) "a" !== n && t.push(Number(n));
            return t
        }(t);
        if (0 === i.length) return e;
        var o = s(e, t.a, i),
            a = e.ownerDocument;
        n.document || a === r || (n.document = a);
        for (var c = 0; c < i.length; c++) {
            var u = i[c];
            e = l(e, o[u], t[u], n)
        }
        return e
    }

    function l(e, t, n, r) {
        if (!t) return e;
        var o;
        if (i(n))
            for (var s = 0; s < n.length; s++) o = a(n[s], t, r), t === e && (e = o);
        else o = a(n, t, r), t === e && (e = o);
        return e
    }
    e.exports = function e(t, n, r) {
        r = r || {};
        r.patch = r.patch && r.patch !== e ? r.patch : c;
        r.render = r.render || o;
        return r.patch(t, n, r)
    }
}, , function(e, t, n) {
    "use strict";
    var r = {};

    function i(e, t, n) {
        if (0 === e.length) return !1;
        for (var r, i, o = 0, s = e.length - 1; o <= s;) {
            if (i = e[r = (s + o) / 2 >> 0], o === s) return i >= t && i <= n;
            if (i < t) o = r + 1;
            else {
                if (!(i > n)) return !0;
                s = r - 1
            }
        }
        return !1
    }

    function o(e, t) {
        return e > t ? 1 : -1
    }
    e.exports = function(e, t, n, s) {
        return n && 0 !== n.length ? (n.sort(o), function e(t, n, o, s, a) {
            s = s || {};
            if (t) {
                i(o, a, a) && (s[a] = t);
                var c = n.children;
                if (c)
                    for (var l = t.childNodes, u = 0; u < n.children.length; u++) {
                        a += 1;
                        var h = c[u] || r,
                            f = a + (h.count || 0);
                        i(o, a, f) && e(l[u], h, o, s, a), a = f
                    }
            }
            return s
        }(e, t, n, s, 0)) : {}
    }
}, function(e, t, n) {
    "use strict";
    var r = n(25),
        i = n(3),
        o = n(20),
        s = n(145);

    function a(e, t) {
        "function" == typeof t.destroy && i(t) && t.destroy(e)
    }
    e.exports = function(e, t, n) {
        var i = e.type,
            c = e.vNode,
            l = e.patch;
        switch (i) {
            case o.REMOVE:
                return function(e, t) {
                    var n = e.parentNode;
                    n && n.removeChild(e);
                    return a(e, t), null
                }(t, c);
            case o.INSERT:
                return function(e, t, n) {
                    var r = n.render(t, n);
                    e && e.appendChild(r);
                    return e
                }(t, l, n);
            case o.VTEXT:
                return function(e, t, n, r) {
                    var i;
                    if (3 === e.nodeType) e.replaceData(0, e.length, n.text), i = e;
                    else {
                        var o = e.parentNode;
                        i = r.render(n, r), o && i !== e && o.replaceChild(i, e)
                    }
                    return i
                }(t, 0, l, n);
            case o.WIDGET:
                return function(e, t, n, r) {
                    var i, o = s(t, n);
                    i = o ? n.update(t, e) || e : r.render(n, r);
                    var c = e.parentNode;
                    c && i !== e && c.replaceChild(i, e);
                    o || a(e, t);
                    return i
                }(t, c, l, n);
            case o.VNODE:
                return function(e, t, n, r) {
                    var i = e.parentNode,
                        o = r.render(n, r);
                    i && o !== e && i.replaceChild(o, e);
                    return o
                }(t, 0, l, n);
            case o.ORDER:
                return function(e, t) {
                    for (var n, r, i, o = e.childNodes, s = {}, a = 0; a < t.removes.length; a++) r = t.removes[a], n = o[r.from], r.key && (s[r.key] = n), e.removeChild(n);
                    for (var c = o.length, l = 0; l < t.inserts.length; l++) i = t.inserts[l], n = s[i.key], e.insertBefore(n, i.to >= c++ ? null : o[i.to])
                }(t, l), t;
            case o.PROPS:
                return r(t, l, c.properties), t;
            case o.THUNK:
                return function(e, t) {
                    e && t && e !== t && e.parentNode && e.parentNode.replaceChild(t, e);
                    return t
                }(t, n.patch(t, l, n));
            default:
                return t
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = function(e, t) {
        if (r(e) && r(t)) return "name" in e && "name" in t ? e.id === t.id : e.init === t.init;
        return !1
    }
}, function(e, t, n) {
    "use strict";
    var r = n(24);
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        return r(e, [{
            key: "render",
            value: function(e, t, n) {
                return new Promise(function(r, i) {
                    var o = document.querySelector(t + '[data-key="' + n.key + '"]');
                    if (o) {
                        for (var s in n.className && (o.classList.value = n.className), Object.keys(n)) "className" != Object.keys(n)[s] && "key" != Object.keys(n)[s] && o.setAttribute(Object.keys(n)[s], n[Object.keys(n)[s]]);
                        o.innerHTML = e, r()
                    } else if ("" != e) {
                        var a = void 0,
                            c = document.querySelector('[data-key="reportButton"]');
                        for (var l in a = "" == t ? document.createElement("div") : document.createElement(t), n.className && (a.classList.value = n.className), Object.keys(n)) "className" != Object.keys(n)[l] && "key" != Object.keys(n)[l] && a.setAttribute(Object.keys(n)[l], n[Object.keys(n)[l]]);
                        a.setAttribute("data-key", n.key), a.innerHTML = e, document.getElementById("timeline").insertBefore(a, c), r()
                    } else i()
                })
            }
        }]), e
    }();
    e.exports = new i
}, , , , , , , function(e, t, n) {
    "use strict";
    /*!
     * Suggest Lib
     * data: 07/11/2012 17h07 @ gpaes
     * http://jsuol.com.br/c/_template/v1/web/js/lib.suggest/suggest.js
     */
    ! function(e, t, n) {
        function r(e, t) {
            if (e) {
                for (var n = (t = t.split(" ")).length, r = void 0; n--;) 0 == i(e, r = t[n]) && (e.className += (e.className ? " " : "") + r);
                return !0
            }
            return !1
        }

        function i(e, t) {
            if (e) {
                for (var n = (t = t.split(" ")).length, r = void 0; n--;)
                    if (r = t[n], 0 == new RegExp("( " + r + " |^" + r + " | " + r + "$|^" + r + "$)").test(e.className)) return !1;
                return !0
            }
            return !1
        }

        function o(e, t) {
            if (e) {
                for (var n = (t = t.split(" ")).length, r = void 0; n--;) 1 == i(e, r = t[n]) && (e.className = e.className.replace(new RegExp("( " + r + " |^" + r + " | " + r + "$|^" + r + "$)"), " ").replace(/ +/g, " "));
                return !0
            }
            return !1
        }
        var s = function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            a = function(e, n, r) {
                t.attachEvent ? (n = /touch/.test(n) ? n : "on" + n, e.attachEvent(n, r)) : t.addEventListener && e.addEventListener(n, r, !0)
            },
            c = function(e, n, r) {
                t.detachEvent ? (n = /touch/.test(n) ? n : "on" + n, e.detachEvent(n, r)) : t.removeEventListener && e.removeEventListener(n, r, !0)
            };

        function l(e, t) {
            t = void 0 === t;
            var n = e.toLowerCase().toUpperCase();
            return n.indexOf("*") + 1 == n.length && (n = n.substr(0, n.length - 1)), -1 != n.search(/[ÂÁÀÃÄÊÉÈËÎÍÌÏÔÓÒÕÖÛÚÙÜÇÑ\+\-\s]/g) && (t && (n = n.replace(/[ ]/g, "-")), n = (n = (n = (n = (n = (n = (n = n.replace(/[ÂÁÀÃÄ]/g, "A")).replace(/[ÊÉÈË]/g, "E")).replace(/[ÎÍÌÏ]/g, "I")).replace(/[ÔÓÒÕÖ]/g, "O")).replace(/[ÛÚÙÜ]/g, "U")).replace(/[Ç]/g, "C")).replace(/[Ñ]/g, "N"), t && (n = n.replace(/[^a-zA-Z0-9_\+]/g, "-"))), (n = n.toLowerCase()).trim && n.trim() || n.replace(/(^[\s\xA0]+|[\s\xA0]+$)/g, "")
        }
        var u = e.Suggest = function(e, t) {
            return this.form = e, this.source = t.source, this.normalize = void 0 === t.normalize || t.normalize, this.input = t.input || e.q, r(this.input, "suggest-input"), r(this.form, "suggest-form"), this.charset = t.charset, this.class_current = t.class_current || "current", this.end_of_typing = null, this.time_to_wait = 500, this.min_length = 3, this.cache = !0, this.cache_results = {}, this.sort = t.sort || null, this.max_results = t.max_results || 5, this.text_not_found = t.not_found || "Sua busca não retornou resultado", this.errorMarkup = t.errorMarkup || function() {
                return '<li class="error">Serviço indisponível no momento. <br/>Tente novamente mais tarde</li>'
            }, this.markup = t.markup || function(e) {
                return "<li>" + e + "</li>"
            }, this.query_function = t.queryURL || function(e) {
                return encodeURIComponent(l(e, !1))
            }, this.item_function = t.item || function(e) {
                return e
            }, this.onselect_function = t.onSelect || function(e) {
                return e
            }, this.onblank_function = t.onBlank || null, this.onclose_function = t.onClose || function() {
                return !0
            }, this.match_function = t.match || function(e, t) {
                return !0 === this.normalize && (e = l(e), t = l(t)), new RegExp("^" + t).test(e)
            }, this.data = t.data || function(e) {
                return e.docs
            }, this.events = t.events || {}, this.binds = {}, this.lastKeyPressed = "", !!this.input && (this.bind(), this.createArea(), this)
        };
        u.prototype.createArea = function() {
            var e = this.area = t.createElement("div");
            e.className = "suggest-area suggest-area-disabled", this.form.appendChild(e)
        }, u.prototype.removeArea = function() {
            this.form.removeChild(this.area), this.area = null
        }, u.prototype.bind = function() {
            var e = this.input,
                c = this.binds,
                l = this.form,
                u = this;
            c.form_submit = function(e) {
                s(e), 1 == /MSIE/.test(n) && c.input_keyup.apply(null, [{
                    keyCode: 13
                }])
            }, c.input_keyup = function(e) {
                clearTimeout(u.end_of_typing);
                var t = u.lastKeyPressed = 0 != e.keyCode ? function(e) {
                    if ((e = +e) >= 48 && e <= 57) return "NUMBER";
                    if (e >= 65 && e <= 90 || 192 == e || 186 == e || 32 == e || 229 == e) return "LETTER";
                    if (27 == e) return "ESC";
                    if (e >= 37 && e <= 40) switch (e) {
                        case 37:
                            return "ARROW LEFT";
                        case 38:
                            return "ARROW UP";
                        case 39:
                            return "ARROW RIGHT";
                        case 40:
                            return "ARROW DOWN"
                    }
                    return 13 == e ? "ENTER" : 8 == e || 46 == e ? "REMOVE" : "OTHER"
                }(e.keyCode) : "LETTER";
                switch (t) {
                    case "ENTER":
                        0 == u.select() && (u.onblank_function ? u.onblank_function.apply(u) : u.prepareToSearch());
                        break;
                    case "ARROW UP":
                    case "ARROW DOWN":
                        1 == u.disabled() ? u.prepareToSearch() : function(e, t, n) {
                            var i, s = null,
                                a = e.thereIsOneSelected(!0);
                            i = a.i, o(a.v, e.class_current), "UP" == n ? s = null == i ? t.length - 1 : 0 == i ? t.length - 1 : i - 1 : "DOWN" == n && (s = null == i ? 0 : i == t.length - 1 ? 0 : i + 1), r(t[s], e.class_current)
                        }(u, u.getItemsDOM(), / (\w+)$/.exec(t)[1]);
                        break;
                    case "ESC":
                        u.disable();
                        break;
                    case "NUMBER":
                    case "LETTER":
                    case "REMOVE":
                        u.removeSelect(), r(this.input, "suggest-loading"), u.end_of_typing = setTimeout(function() {
                            u.prepareToSearch()
                        }, u.source instanceof Array ? 250 : u.time_to_wait)
                }
            }, c.body_click = function(e) {
                if (0 == u.disabled()) {
                    var t = e.srcElement || e.target;
                    do {
                        if (i(t, "suggest-form")) return !0
                    } while ((t = t.parentNode) && "BODY" != t.nodeName);
                    u.disable()
                }
            }, a(e, "keyup", this.binds.input_keyup), a(l, "submit", this.binds.form_submit), a(t.body, "click", this.binds.body_click)
        }, u.prototype.removeSelect = function() {
            for (var e = this.getItemsDOM(), t = e.length; t--;) 1 == i(e[t], this.class_current) && o(e[t], this.class_current);
            return !0
        }, u.prototype.unbind = function() {
            c(this.input, "keyup", this.binds.input_keyup), c(this.form, "click", this.binds.form_submit), c(t.body, "click", this.binds.body_click)
        }, u.prototype.thereIsOneSelected = function(e) {
            for (var t = this.getItemsDOM(), n = t.length; n--;)
                if (1 == i(t[n], this.class_current)) return e ? {
                    i: n,
                    v: t[n]
                } : t[n];
            return !1
        }, u.prototype.select = function(e, t) {
            var n = e || this.thereIsOneSelected() || !1;
            return !!n && (this.onselect_function.apply(this, [n, t]), this.disable("SELECT ITEM"), !0)
        }, u.prototype.prepareToSearch = function() {
            var e = this,
                n = this.input.value,
                r = this.lastKeyPressed,
                i = this;
            if (this.query = n, 0 == n.length) return this.disable("EMPTY ENTRY"), !1;
            if ("REMOVE" != r && n.length < this.min_length) return !1;
            var o = this.source;
            if (0 == this.hasCache())
                if (o instanceof Array) this.filter();
                else {
                    var s = o.replace("%query", this.query_function.call(this, n)).replace("%max", this.max_results).replace("%callback", "Suggest.callbacks['c" + u.total_callbacks + "']");
                    u.callbacks["c" + u.total_callbacks] = function() {
                            var e = u.total_callbacks;
                            return u.total_callbacks += 1,
                                function(t) {
                                    delete u.callbacks["c" + e], u.total_callbacks -= 1, i.prepareToShow(i.data(t))
                                }
                        }(),
                        function(e, n, r) {
                            var i = t.getElementsByTagName("head")[0],
                                o = t.createElement("script");
                            o.type = "text/javascript", o.async = !0, o.charset = n || "utf-8", o.src = e, r && r instanceof Function && (o.onerror = r), o.onload = o.onreadystatechange = function(e, t) {
                                return function() {
                                    t.readyState && "loaded" != t.readyState && "complete" != t.readyState || (i.removeChild(t), t.onload = t.onreadystatechange = null)
                                }
                            }(0, o), i.insertBefore(o, i.firstChild)
                        }(s, i.charset, function() {
                            e.error()
                        })
                }
        }, u.prototype.hasCache = function() {
            var e = this.cache,
                t = this.cache_results,
                n = this.query;
            return !(!0 !== e || !t[l(n)]) && (this.show(t[l(n)]), !0)
        }, u.prototype.filter = function() {
            var e = this.source,
                t = this.query,
                n = this.match_function,
                r = this.item_function,
                i = [];
            for (var o in e) !0 === n.call(this, r.call(this, e[o]), t) && i.push(e[o]);
            this.prepareToShow(i)
        }, u.prototype.prepareToShow = function(e) {
            var t = this.query;
            "function" == typeof this.sort && (e = this.sort(e)), !0 === this.cache && (this.cache_results[l(t)] = e), this.show(e)
        }, u.prototype.error = function() {
            this.area.innerHTML = "<ul>" + this.errorMarkup() + "</ul>", o(this.area, "suggest-area-disabled")
        }, u.prototype.show = function(e) {
            var t = this.markup,
                s = this.max_results,
                c = this.area,
                l = this.query,
                u = this.lastKeyPressed,
                h = "<ul>";
            if (0 == e.length) h += '<li class="not-found">' + this.text_not_found + "</li>";
            else {
                var f = 0;
                for (var p in e)
                    if (h += t(e[p], l), ++f == s) break
            }
            if (h += "</ul>", c.innerHTML = h, o(c, "suggest-area-disabled"), 1 == /MSIE 7/.test(n) && 0 == i(c, "suggest-area-ie7-workaround")) {
                r(c, "suggest-area-ie7-workaround");
                for (var d = c, v = c.style.zIndex || 5, g = 1; d = d.parentNode;) d.style && (d.style.zIndex = v + g++)
            }
            var m = this.events,
                y = this,
                b = c.getElementsByTagName("li"),
                w = b.length,
                _ = void 0;
            for (m.click || (m.click = function(e, t) {
                    this.select(e, t)
                }); w--;)
                for (var E in _ = b[w], m) a(_, E, function(e, t) {
                    return function(n) {
                        t.apply(y, [e, n])
                    }
                }(_, m[E]));
            "ENTER" == u && 1 == b.length && this.select(b[0])
        }, u.prototype.getItemsDOM = function() {
            return this.area.getElementsByTagName("li")
        }, u.prototype.disable = function(e) {
            return r(this.area, "suggest-area-disabled"), this.area.innerHTML = "", this.onclose_function.call(this, e), this
        }, u.prototype.disabled = function() {
            return i(this.area, "suggest-area-disabled")
        }, u.prototype.destroy = function() {
            return this.unbind(), this.removeArea(), this
        }, u.callbacks = {}, u.total_callbacks = 0, u.normalizeString = l, u.hasClass = i, u.addClass = r, u.removeClass = o
    }(window, document, navigator.userAgent), e.exports = window.Suggest
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(0),
        o = window.hevents,
        s = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.API_URL = "https://geoip.home.uol.com/index.jsonp", this.COOKIE_NAME = "geoloc", this.STATES_CODES = {
                    "01": "AC",
                    "02": "AL",
                    "03": "AP",
                    "04": "AM",
                    "05": "BA",
                    "06": "CE",
                    "07": "DF",
                    "08": "ES",
                    11: "MS",
                    13: "MA",
                    14: "MT",
                    15: "MG",
                    16: "PA",
                    17: "PB",
                    18: "PR",
                    20: "PI",
                    21: "RJ",
                    22: "RN",
                    23: "RS",
                    24: "RO",
                    25: "RR",
                    26: "SC",
                    27: "SP",
                    28: "SE",
                    29: "GO",
                    30: "PE",
                    31: "TO"
                }, this.CODES_STATES = {
                    AC: "01",
                    AL: "02",
                    AP: "03",
                    AM: "04",
                    BA: "05",
                    CE: "06",
                    DF: "07",
                    ES: "08",
                    MS: "11",
                    MA: "13",
                    MT: "14",
                    MG: "15",
                    PA: "16",
                    PB: "17",
                    PR: "18",
                    PI: "20",
                    RJ: "21",
                    RN: "22",
                    RS: "23",
                    RO: "24",
                    RR: "25",
                    SC: "26",
                    SP: "27",
                    SE: "28",
                    GO: "29",
                    PE: "30",
                    TO: "31"
                }, this.USER_DEFINITION = 1, this.API_DEFINITION = 2, this.API_FALLBACK_DEFINITION = 3, this.DEFAULT_LOCATION = ["SA", "BR", "27", "São Paulo"], this.defined = i.helpers.getCookie("geoloc"), o.on("geoloc.change", this.change)
            }
            return r(e, [{
                key: "normalize",
                value: function(e) {
                    return {
                        continent: e[0],
                        country: e[1],
                        state: e[4],
                        city: e[3]
                    }
                }
            }, {
                key: "apiCallback",
                value: function(e) {
                    this.register(e, this.API_DEFINITION)
                }
            }, {
                key: "fallback",
                value: function() {
                    this.register(this.DEFAULT_LOCATION)
                }
            }, {
                key: "register",
                value: function(e, t) {
                    var n = void 0;
                    switch (t) {
                        case this.USER_DEFINITION:
                            n = 365;
                            break;
                        case this.API_FALLBACK_DEFINITION:
                            n = 1;
                            break;
                        case this.API_DEFINITION:
                        default:
                            n = 5
                    }
                    e instanceof Array == !1 && (e = []), "BR" !== e[1] && (e = this.DEFAULT_LOCATION), "" != e[2] && "" != e[3] || (e = this.DEFAULT_LOCATION), e.push(this.STATES_CODES[e[2]]), this.defined = this.normalize(e), i.helpers.setCookie(this.COOKIE_NAME, e.join(","), n), o.emit("geoloc", this.defined)
                }
            }, {
                key: "request",
                value: function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        i.helpers.jsonp(e.API_URL, "callback").then(function(n) {
                            e.apiCallback(n), t(n)
                        }).catch(function(t) {
                            e.fallback(), n(t)
                        })
                    })
                }
            }, {
                key: "change",
                value: function(e, t) {
                    return !(!e || !t) && (e = e.toUpperCase(), this.register(["SA", "BR", this.CODES_STATES[e], t], this.USER_DEFINITION), !0)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        var r = function() {
                                e.defined || n(), o.emit("geoloc", e.defined), t(e.defined)
                            },
                            i = function(e) {
                                n(e)
                            };
                        null === e.defined ? e.request().then(r).catch(i) : ("string" == typeof e.defined && (e.defined = e.normalize(unescape(e.defined).split(","))), e.defined.city ? r() : e.request().then(r).catch(i))
                    })
                }
            }]), e
        }();
    e.exports = s
}, , function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(158),
        o = n(0),
        s = function() {
            function e(t, n, r, s, a) {
                var c = this;
                for (this.opt in function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.opts = {
                        slide: s,
                        pagination: ".slider_indicator",
                        paginationClickable: !1,
                        zoom: !1,
                        resize: !0,
                        loop: !1,
                        lazyLoading: !1,
                        section: "",
                        lazy: ".lazy",
                        transition: {
                            duration: 6e3
                        }
                    }, this.wo, this.sw, this.container = a, this.slides = this.opts.slide, this.wrapper = this.container.firstElementChild, this.currentIndex = r.currentIndex || 0, this.intervalTransition, this.opts) r[this.opt] && (this.opts[this.opt] = r[this.opt]);
                if (this.opts.loop) {
                    var l = document.createElement("div"),
                        u = this.slides[0].outerHTML,
                        h = this.slides[this.slides.length - 1].outerHTML;
                    l.innerHTML = h + u, this.wrapper.insertBefore(l.firstChild, this.slides[0]), this.wrapper.appendChild(l.lastChild), this.currentIndex = 1
                }
                if (this.refreshOrientation(), this.pagination, this.bullets, this.opts.pagination && (this.pagination = this.container.querySelector(this.opts.pagination)), this.slides = this.wrapper.querySelectorAll(".slider_content__item"), this.wrapper.style.width = this.sw * this.slides.length + "px", this.gallery = new i(this.wrapper), this.AriaShow(this.currentIndex), this.gallery.on("panmove", function(e) {
                        var t = -c.sw * c.currentIndex + e.deltaX;
                        c.wrapper.style.webkitTransform = "translate3d(" + t + "px, 0px, 0px)"
                    }), this.gallery.on("panend", function(e) {
                        var t = Math.abs(e.deltaX);
                        if (c.wrapper.style.transition = "-webkit-transform 300ms", c.wrapper.style.webkitTransform = "translate3d(-" + c.sw * c.currentIndex + "px, 0px, 0px)", c.breakTransition(), setTimeout(function() {
                                c.wrapper.style.transition = "-webkit-transform 0ms"
                            }, 300), !(t < c.sw / 5))
                            if (e.deltaX > 0) {
                                if (!c.opts.loop && 0 === c.currentIndex) return;
                                c.prevSlide()
                            } else {
                                if (!c.opts.loop && c.currentIndex === c.slides.length - 1) return;
                                c.nextSlide()
                            }
                    }), this.opts.resize && (window.addEventListener("resize", function() {
                        c.resize()
                    }), window.addEventListener("orientationchange", function() {
                        c.resize()
                    })), this.opts.transition && this.transition(), this.opts.zoom && this.gallery.on("tap", function(e) {
                        this.handleZoom(e)
                    }), this.pagination && this.opts.paginationClickable) {
                    this.bullets = this.pagination.querySelectorAll(".slider_indicator__dot");
                    var f = new i(this.pagination);
                    this.paginationtime = f, f.on("tap", function(e) {
                        var t = e.target.getAttribute("data-index");
                        o.helpers.metrics({
                            action: "clique",
                            category: r.metrics.category,
                            area: r.metrics.area,
                            label: "nav-chamadas-rotativo-m-" + (Number(t) + 1),
                            position: r.metrics.position
                        }), c.wrapper.style.transition = "-webkit-transform 0.5s", c.breakTransition(), t && (c.opts.loop ? c.currentIndex = Number(t) + 1 : c.currentIndex = Number(t), c.slideTo())
                    })
                }
                this.slideTo()
            }
            return r(e, [{
                key: "refreshOrientation",
                value: function() {
                    this.wo = window.orientation || window.screen.orientation && window.screen.orientation.angle, -90 === this.wo || 90 === this.wo ? this.sw = 450 : this.sw = document.querySelector("#timeline").offsetWidth
                }
            }, {
                key: "AriaShow",
                value: function(e) {
                    var t = this.slides[e];
                    Array.prototype.slice.call(this.slides).forEach(function(e) {
                        e.setAttribute("aria-hidden", !1)
                    }), t.setAttribute("aria-hidden", !0)
                }
            }, {
                key: "prevSlide",
                value: function() {
                    this.currentIndex -= 1, this.slideTo(), this.AriaShow(this.currentIndex), this.opts.loop && 0 === this.currentIndex && (this.currentIndex = this.slides.length - 2)
                }
            }, {
                key: "nextSlide",
                value: function() {
                    !this.opts.loop && this.currentIndex < this.slides.length - 1 ? this.currentIndex += 1 : this.currentIndex = 0, this.slideTo(), this.AriaShow(this.currentIndex), this.opts.loop && this.currentIndex === this.slides.length - 1 && (this.currentIndex = 1)
                }
            }, {
                key: "slideTo",
                value: function() {
                    if (this.bullets) {
                        var e = void 0,
                            t = "borderColor_" + (this.opts.section || "prime");
                        this.opts.loop ? ((e = this.currentIndex - 1) >= this.bullets.length && (e = 0), e < 0 && (e = this.bullets.length - 1)) : e = this.currentIndex;
                        for (var n = 0; n < this.bullets.length; n++) e == n ? (this.bullets[n].classList.add("active"), this.bullets[n].classList.add(t)) : (this.bullets[n].classList.remove("active"), this.bullets[n].classList.remove(t))
                    }
                    this.lazyLoading(), this.wrapper.style.webkitTransform = "translate3d(-" + this.sw * this.currentIndex + "px, 0px, 0px)"
                }
            }, {
                key: "transition",
                value: function() {
                    var e = this;
                    this.intervalTransition = window.setInterval(function() {
                        e.wrapper.style.transition = "-webkit-transform 0.5s", e.nextSlide()
                    }, this.opts.transition.duration)
                }
            }, {
                key: "breakTransition",
                value: function() {
                    window.clearInterval(this.intervalTransition)
                }
            }, {
                key: "handleZoom",
                value: function(e) {
                    if ("IMG" === e.target.nodeName && 2 === e.tapCount) {
                        var t = e.target,
                            n = Math.abs(e.center.x);
                        if (t.getAttribute("style")) return void t.removeAttribute("style");
                        var r = window.screen.height,
                            i = t.clientWidth,
                            o = r / t.clientHeight,
                            s = this.sw * o - this.sw,
                            a = this.sw / 3,
                            c = void 0;
                        if (0 < n && n < a) c = s / 2;
                        else {
                            if (this.sw > i || a < n && n < this.sw / 2) return void(t.style.webkitTransform = "scale(" + o + ")");
                            c = -s / 2
                        }
                        t.style.webkitTransform = "translate3d(" + c + "px, 0px, 0px) scale(" + o + ")"
                    }
                }
            }, {
                key: "lazyLoading",
                value: function() {
                    if (this.opts.lazyLoading) {
                        var e = this.container.querySelectorAll(".placeholder_image__carousel");
                        if (e.length > 0 && e[this.currentIndex] && "IMG" === e[this.currentIndex].nodeName) {
                            var t = e[this.currentIndex],
                                n = t.getAttribute("data-src");
                            n && t.setAttribute("src", n)
                        }
                    }
                }
            }, {
                key: "resize",
                value: function() {
                    this.refreshOrientation(), this.wrapper.style.width = this.sw * this.slides.length + "px", this.slideTo()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.breakTransition(), this.gallery.destroy(), this.paginationtime.destroy(), this.gallery = void 0, this.paginationtime = void 0
                }
            }]), e
        }();
    e.exports = s
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    /*! Hammer.JS - v2.0.8 - 2016-04-23
     * http://hammerjs.github.io/
     *
     * Copyright (c) 2016 Jorik Tangelder
     * Licensed under the MIT license */
    /*! Hammer.JS - v2.0.8 - 2016-04-23
     * http://hammerjs.github.io/
     *
     * Copyright (c) 2016 Jorik Tangelder
     * Licensed under the MIT license */
    ! function(t, n, i, o) {
        var s = ["", "webkit", "Moz", "MS", "ms", "o"],
            a = n.createElement("div"),
            c = "function",
            l = Math.round,
            u = Math.abs,
            h = Date.now;

        function f(e, t, n) {
            return setTimeout(w(e, n), t)
        }

        function p(e, t, n) {
            return !!Array.isArray(e) && (d(e, n[t], n), !0)
        }

        function d(e, t, n) {
            var r = void 0;
            if (e)
                if (e.forEach) e.forEach(t, n);
                else if (e.length !== o)
                for (r = 0; r < e.length;) t.call(n, e[r], r, e), r++;
            else
                for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e)
        }

        function v(e, n, r) {
            var i = "DEPRECATED METHOD: " + n + "\n" + r + " AT \n";
            return function() {
                var n = new Error("get-stack-trace"),
                    r = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    o = t.console && (t.console.warn || t.console.log);
                return o && o.call(t.console, i, r), e.apply(this, arguments)
            }
        }
        var g = void 0;
        g = "function" != typeof Object.assign ? function(e) {
            if (e === o || null === e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (r !== o && null !== r)
                    for (var i in r) r.hasOwnProperty(i) && (t[i] = r[i])
            }
            return t
        } : Object.assign;
        var m = v(function(e, t, n) {
                for (var r = Object.keys(t), i = 0; i < r.length;)(!n || n && e[r[i]] === o) && (e[r[i]] = t[r[i]]), i++;
                return e
            }, "extend", "Use `assign`."),
            y = v(function(e, t) {
                return m(e, t, !0)
            }, "merge", "Use `assign`.");

        function b(e, t, n) {
            var r = t.prototype,
                i = void 0;
            (i = e.prototype = Object.create(r)).constructor = e, i._super = r, n && g(i, n)
        }

        function w(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }

        function _(e, t) {
            return (void 0 === e ? "undefined" : r(e)) == c ? e.apply(t && t[0] || o, t) : e
        }

        function E(e, t) {
            return e === o ? t : e
        }

        function T(e, t, n) {
            d(x(t), function(t) {
                e.addEventListener(t, n, !1)
            })
        }

        function k(e, t, n) {
            d(x(t), function(t) {
                e.removeEventListener(t, n, !1)
            })
        }

        function S(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function O(e, t) {
            return e.indexOf(t) > -1
        }

        function x(e) {
            return e.trim().split(/\s+/g)
        }

        function I(e, t, n) {
            if (e.indexOf && !n) return e.indexOf(t);
            for (var r = 0; r < e.length;) {
                if (n && e[r][n] == t || !n && e[r] === t) return r;
                r++
            }
            return -1
        }

        function N(e) {
            return Array.prototype.slice.call(e, 0)
        }

        function A(e, t, n) {
            for (var r = [], i = [], o = 0; o < e.length;) {
                var s = t ? e[o][t] : e[o];
                I(i, s) < 0 && r.push(e[o]), i[o] = s, o++
            }
            return n && (r = t ? r.sort(function(e, n) {
                return e[t] > n[t]
            }) : r.sort()), r
        }

        function L(e, t) {
            for (var n = void 0, r = void 0, i = t[0].toUpperCase() + t.slice(1), a = 0; a < s.length;) {
                if ((r = (n = s[a]) ? n + i : t) in e) return r;
                a++
            }
            return o
        }
        var C = 1;

        function P(e) {
            var n = e.ownerDocument || e;
            return n.defaultView || n.parentWindow || t
        }
        var R = "ontouchstart" in t,
            D = L(t, "PointerEvent") !== o,
            M = R && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
            U = 25,
            j = 1,
            q = 2,
            F = 4,
            H = 8,
            z = 1,
            V = 2,
            G = 4,
            W = 8,
            X = 16,
            B = V | G,
            Y = W | X,
            K = B | Y,
            $ = ["x", "y"],
            J = ["clientX", "clientY"];

        function Z(e, t) {
            var n = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                _(e.options.enable, [e]) && n.handler(t)
            }, this.init()
        }

        function Q(e, t, n) {
            var r = n.pointers.length,
                i = n.changedPointers.length,
                s = t & j && r - i == 0,
                a = t & (F | H) && r - i == 0;
            n.isFirst = !!s, n.isFinal = !!a, s && (e.session = {}), n.eventType = t,
                function(e, t) {
                    var n = e.session,
                        r = t.pointers,
                        i = r.length;
                    n.firstInput || (n.firstInput = ee(t));
                    i > 1 && !n.firstMultiple ? n.firstMultiple = ee(t) : 1 === i && (n.firstMultiple = !1);
                    var s = n.firstInput,
                        a = n.firstMultiple,
                        c = a ? a.center : s.center,
                        l = t.center = te(r);
                    t.timeStamp = h(), t.deltaTime = t.timeStamp - s.timeStamp, t.angle = oe(c, l), t.distance = ie(c, l),
                        function(e, t) {
                            var n = t.center,
                                r = e.offsetDelta || {},
                                i = e.prevDelta || {},
                                o = e.prevInput || {};
                            t.eventType !== j && o.eventType !== F || (i = e.prevDelta = {
                                x: o.deltaX || 0,
                                y: o.deltaY || 0
                            }, r = e.offsetDelta = {
                                x: n.x,
                                y: n.y
                            });
                            t.deltaX = i.x + (n.x - r.x), t.deltaY = i.y + (n.y - r.y)
                        }(n, t), t.offsetDirection = re(t.deltaX, t.deltaY);
                    var f = ne(t.deltaTime, t.deltaX, t.deltaY);
                    t.overallVelocityX = f.x, t.overallVelocityY = f.y, t.overallVelocity = u(f.x) > u(f.y) ? f.x : f.y, t.scale = a ? function(e, t) {
                            return ie(t[0], t[1], J) / ie(e[0], e[1], J)
                        }(a.pointers, r) : 1, t.rotation = a ? function(e, t) {
                            return oe(t[1], t[0], J) + oe(e[1], e[0], J)
                        }(a.pointers, r) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length,
                        function(e, t) {
                            var n = e.lastInterval || t,
                                r = t.timeStamp - n.timeStamp,
                                i = void 0,
                                s = void 0,
                                a = void 0,
                                c = void 0;
                            if (t.eventType != H && (r > U || n.velocity === o)) {
                                var l = t.deltaX - n.deltaX,
                                    h = t.deltaY - n.deltaY,
                                    f = ne(r, l, h);
                                s = f.x, a = f.y, i = u(f.x) > u(f.y) ? f.x : f.y, c = re(l, h), e.lastInterval = t
                            } else i = n.velocity, s = n.velocityX, a = n.velocityY, c = n.direction;
                            t.velocity = i, t.velocityX = s, t.velocityY = a, t.direction = c
                        }(n, t);
                    var p = e.element;
                    S(t.srcEvent.target, p) && (p = t.srcEvent.target);
                    t.target = p
                }(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
        }

        function ee(e) {
            for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
                clientX: l(e.pointers[n].clientX),
                clientY: l(e.pointers[n].clientY)
            }, n++;
            return {
                timeStamp: h(),
                pointers: t,
                center: te(t),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }

        function te(e) {
            var t = e.length;
            if (1 === t) return {
                x: l(e[0].clientX),
                y: l(e[0].clientY)
            };
            for (var n = 0, r = 0, i = 0; i < t;) n += e[i].clientX, r += e[i].clientY, i++;
            return {
                x: l(n / t),
                y: l(r / t)
            }
        }

        function ne(e, t, n) {
            return {
                x: t / e || 0,
                y: n / e || 0
            }
        }

        function re(e, t) {
            return e === t ? z : u(e) >= u(t) ? e < 0 ? V : G : t < 0 ? W : X
        }

        function ie(e, t, n) {
            n || (n = $);
            var r = t[n[0]] - e[n[0]],
                i = t[n[1]] - e[n[1]];
            return Math.sqrt(r * r + i * i)
        }

        function oe(e, t, n) {
            n || (n = $);
            var r = t[n[0]] - e[n[0]],
                i = t[n[1]] - e[n[1]];
            return 180 * Math.atan2(i, r) / Math.PI
        }
        Z.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && T(this.element, this.evEl, this.domHandler), this.evTarget && T(this.target, this.evTarget, this.domHandler), this.evWin && T(P(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && k(this.element, this.evEl, this.domHandler), this.evTarget && k(this.target, this.evTarget, this.domHandler), this.evWin && k(P(this.element), this.evWin, this.domHandler)
            }
        };
        var se = {
                mousedown: j,
                mousemove: q,
                mouseup: F
            },
            ae = "mousedown",
            ce = "mousemove mouseup";

        function le() {
            this.evEl = ae, this.evWin = ce, this.pressed = !1, Z.apply(this, arguments)
        }
        b(le, Z, {
            handler: function(e) {
                var t = se[e.type];
                t & j && 0 === e.button && (this.pressed = !0), t & q && 1 !== e.which && (t = F), this.pressed && (t & F && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: "mouse",
                    srcEvent: e
                }))
            }
        });
        var ue = {
                pointerdown: j,
                pointermove: q,
                pointerup: F,
                pointercancel: H,
                pointerout: H
            },
            he = {
                2: "touch",
                3: "pen",
                4: "mouse",
                5: "kinect"
            },
            fe = "pointerdown",
            pe = "pointermove pointerup pointercancel";

        function de() {
            this.evEl = fe, this.evWin = pe, Z.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        t.MSPointerEvent && !t.PointerEvent && (fe = "MSPointerDown", pe = "MSPointerMove MSPointerUp MSPointerCancel"), b(de, Z, {
            handler: function(e) {
                var t = this.store,
                    n = !1,
                    r = e.type.toLowerCase().replace("ms", ""),
                    i = ue[r],
                    o = he[e.pointerType] || e.pointerType,
                    s = "touch" == o,
                    a = I(t, e.pointerId, "pointerId");
                i & j && (0 === e.button || s) ? a < 0 && (t.push(e), a = t.length - 1) : i & (F | H) && (n = !0), a < 0 || (t[a] = e, this.callback(this.manager, i, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: o,
                    srcEvent: e
                }), n && t.splice(a, 1))
            }
        });
        var ve = {
                touchstart: j,
                touchmove: q,
                touchend: F,
                touchcancel: H
            },
            ge = "touchstart",
            me = "touchstart touchmove touchend touchcancel";

        function ye() {
            this.evTarget = ge, this.evWin = me, this.started = !1, Z.apply(this, arguments)
        }
        b(ye, Z, {
            handler: function(e) {
                var t = ve[e.type];
                if (t === j && (this.started = !0), this.started) {
                    var n = function(e, t) {
                        var n = N(e.touches),
                            r = N(e.changedTouches);
                        t & (F | H) && (n = A(n.concat(r), "identifier", !0));
                        return [n, r]
                    }.call(this, e, t);
                    t & (F | H) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: "touch",
                        srcEvent: e
                    })
                }
            }
        });
        var be = {
                touchstart: j,
                touchmove: q,
                touchend: F,
                touchcancel: H
            },
            we = "touchstart touchmove touchend touchcancel";

        function _e() {
            this.evTarget = we, this.targetIds = {}, Z.apply(this, arguments)
        }
        b(_e, Z, {
            handler: function(e) {
                var t = be[e.type],
                    n = function(e, t) {
                        var n = N(e.touches),
                            r = this.targetIds;
                        if (t & (j | q) && 1 === n.length) return r[n[0].identifier] = !0, [n, n];
                        var i = void 0,
                            o = void 0,
                            s = N(e.changedTouches),
                            a = [],
                            c = this.target;
                        if (o = n.filter(function(e) {
                                return S(e.target, c)
                            }), t === j)
                            for (i = 0; i < o.length;) r[o[i].identifier] = !0, i++;
                        i = 0;
                        for (; i < s.length;) r[s[i].identifier] && a.push(s[i]), t & (F | H) && delete r[s[i].identifier], i++;
                        if (!a.length) return;
                        return [A(o.concat(a), "identifier", !0), a]
                    }.call(this, e, t);
                n && this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: "touch",
                    srcEvent: e
                })
            }
        });
        var Ee = 2500,
            Te = 25;

        function ke() {
            Z.apply(this, arguments);
            var e = w(this.handler, this);
            this.touch = new _e(this.manager, e), this.mouse = new le(this.manager, e), this.primaryTouch = null, this.lastTouches = []
        }

        function Se(e) {
            var t = e.changedPointers[0];
            if (t.identifier === this.primaryTouch) {
                var n = {
                    x: t.clientX,
                    y: t.clientY
                };
                this.lastTouches.push(n);
                var r = this.lastTouches;
                setTimeout(function() {
                    var e = r.indexOf(n);
                    e > -1 && r.splice(e, 1)
                }, Ee)
            }
        }
        b(ke, Z, {
            handler: function(e, t, n) {
                var r = "touch" == n.pointerType,
                    i = "mouse" == n.pointerType;
                if (!(i && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                    if (r)(function(e, t) {
                        e & j ? (this.primaryTouch = t.changedPointers[0].identifier, Se.call(this, t)) : e & (F | H) && Se.call(this, t)
                    }).call(this, t, n);
                    else if (i && function(e) {
                            for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
                                var i = this.lastTouches[r],
                                    o = Math.abs(t - i.x),
                                    s = Math.abs(n - i.y);
                                if (o <= Te && s <= Te) return !0
                            }
                            return !1
                        }.call(this, n)) return;
                    this.callback(e, t, n)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Oe = L(a.style, "touchAction"),
            xe = Oe !== o,
            Ie = "auto",
            Ne = "manipulation",
            Ae = "none",
            Le = "pan-x",
            Ce = "pan-y",
            Pe = function() {
                if (!xe) return !1;
                var e = {},
                    n = t.CSS && t.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(r) {
                    e[r] = !n || t.CSS.supports("touch-action", r)
                }), e
            }();

        function Re(e, t) {
            this.manager = e, this.set(t)
        }
        Re.prototype = {
            set: function(e) {
                "compute" == e && (e = this.compute()), xe && this.manager.element.style && Pe[e] && (this.manager.element.style[Oe] = e), this.actions = e.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var e = [];
                return d(this.manager.recognizers, function(t) {
                        _(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                    }),
                    function(e) {
                        if (O(e, Ae)) return Ae;
                        var t = O(e, Le),
                            n = O(e, Ce);
                        if (t && n) return Ae;
                        if (t || n) return t ? Le : Ce;
                        if (O(e, Ne)) return Ne;
                        return Ie
                    }(e.join(" "))
            },
            preventDefaults: function(e) {
                var t = e.srcEvent,
                    n = e.offsetDirection;
                if (this.manager.session.prevented) t.preventDefault();
                else {
                    var r = this.actions,
                        i = O(r, Ae) && !Pe[Ae],
                        o = O(r, Ce) && !Pe[Ce],
                        s = O(r, Le) && !Pe[Le];
                    if (i) {
                        var a = 1 === e.pointers.length,
                            c = e.distance < 2,
                            l = e.deltaTime < 250;
                        if (a && c && l) return
                    }
                    if (!s || !o) return i || o && n & B || s && n & Y ? this.preventSrc(t) : void 0
                }
            },
            preventSrc: function(e) {
                this.manager.session.prevented = !0, e.preventDefault()
            }
        };
        var De = 1,
            Me = 2,
            Ue = 4,
            je = 8,
            qe = je,
            Fe = 16;

        function He(e) {
            this.options = g({}, this.defaults, e || {}), this.id = C++, this.manager = null, this.options.enable = E(this.options.enable, !0), this.state = De, this.simultaneous = {}, this.requireFail = []
        }

        function ze(e) {
            return e & Fe ? "cancel" : e & je ? "end" : e & Ue ? "move" : e & Me ? "start" : ""
        }

        function Ve(e) {
            return e == X ? "down" : e == W ? "up" : e == V ? "left" : e == G ? "right" : ""
        }

        function Ge(e, t) {
            var n = t.manager;
            return n ? n.get(e) : e
        }

        function We() {
            He.apply(this, arguments)
        }

        function Xe() {
            We.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Be() {
            We.apply(this, arguments)
        }

        function Ye() {
            He.apply(this, arguments), this._timer = null, this._input = null
        }

        function Ke() {
            We.apply(this, arguments)
        }

        function $e() {
            We.apply(this, arguments)
        }

        function Je() {
            He.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Ze(e, t) {
            return (t = t || {}).recognizers = E(t.recognizers, Ze.defaults.preset), new Qe(e, t)
        }
        He.prototype = {
            defaults: {},
            set: function(e) {
                return g(this.options, e), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(e) {
                if (p(e, "recognizeWith", this)) return this;
                var t = this.simultaneous;
                return t[(e = Ge(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
            },
            dropRecognizeWith: function(e) {
                return p(e, "dropRecognizeWith", this) ? this : (e = Ge(e, this), delete this.simultaneous[e.id], this)
            },
            requireFailure: function(e) {
                if (p(e, "requireFailure", this)) return this;
                var t = this.requireFail;
                return -1 === I(t, e = Ge(e, this)) && (t.push(e), e.requireFailure(this)), this
            },
            dropRequireFailure: function(e) {
                if (p(e, "dropRequireFailure", this)) return this;
                e = Ge(e, this);
                var t = I(this.requireFail, e);
                return t > -1 && this.requireFail.splice(t, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(e) {
                return !!this.simultaneous[e.id]
            },
            emit: function(e) {
                var t = this,
                    n = this.state;

                function r(n) {
                    t.manager.emit(n, e)
                }
                n < je && r(t.options.event + ze(n)), r(t.options.event), e.additionalEvent && r(e.additionalEvent), n >= je && r(t.options.event + ze(n))
            },
            tryEmit: function(e) {
                if (this.canEmit()) return this.emit(e);
                this.state = 32
            },
            canEmit: function() {
                for (var e = 0; e < this.requireFail.length;) {
                    if (!(this.requireFail[e].state & (32 | De))) return !1;
                    e++
                }
                return !0
            },
            recognize: function(e) {
                var t = g({}, e);
                if (!_(this.options.enable, [this, t])) return this.reset(), void(this.state = 32);
                this.state & (qe | Fe | 32) && (this.state = De), this.state = this.process(t), this.state & (Me | Ue | je | Fe) && this.tryEmit(t)
            },
            process: function() {},
            getTouchAction: function() {},
            reset: function() {}
        }, b(We, He, {
            defaults: {
                pointers: 1
            },
            attrTest: function(e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t
            },
            process: function(e) {
                var t = this.state,
                    n = e.eventType,
                    r = t & (Me | Ue),
                    i = this.attrTest(e);
                return r && (n & H || !i) ? t | Fe : r || i ? n & F ? t | je : t & Me ? t | Ue : Me : 32
            }
        }), b(Xe, We, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: K
            },
            getTouchAction: function() {
                var e = this.options.direction,
                    t = [];
                return e & B && t.push(Ce), e & Y && t.push(Le), t
            },
            directionTest: function(e) {
                var t = this.options,
                    n = !0,
                    r = e.distance,
                    i = e.direction,
                    o = e.deltaX,
                    s = e.deltaY;
                return i & t.direction || (t.direction & B ? (i = 0 === o ? z : o < 0 ? V : G, n = o != this.pX, r = Math.abs(e.deltaX)) : (i = 0 === s ? z : s < 0 ? W : X, n = s != this.pY, r = Math.abs(e.deltaY))), e.direction = i, n && r > t.threshold && i & t.direction
            },
            attrTest: function(e) {
                return We.prototype.attrTest.call(this, e) && (this.state & Me || !(this.state & Me) && this.directionTest(e))
            },
            emit: function(e) {
                this.pX = e.deltaX, this.pY = e.deltaY;
                var t = Ve(e.direction);
                t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
            }
        }), b(Be, We, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [Ae]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & Me)
            },
            emit: function(e) {
                if (1 !== e.scale) {
                    var t = e.scale < 1 ? "in" : "out";
                    e.additionalEvent = this.options.event + t
                }
                this._super.emit.call(this, e)
            }
        }), b(Ye, He, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [Ie]
            },
            process: function(e) {
                var t = this.options,
                    n = e.pointers.length === t.pointers,
                    r = e.distance < t.threshold,
                    i = e.deltaTime > t.time;
                if (this._input = e, !r || !n || e.eventType & (F | H) && !i) this.reset();
                else if (e.eventType & j) this.reset(), this._timer = f(function() {
                    this.state = qe, this.tryEmit()
                }, t.time, this);
                else if (e.eventType & F) return qe;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(e) {
                this.state === qe && (e && e.eventType & F ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = h(), this.manager.emit(this.options.event, this._input)))
            }
        }), b(Ke, We, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [Ae]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & Me)
            }
        }), b($e, We, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: B | Y,
                pointers: 1
            },
            getTouchAction: function() {
                return Xe.prototype.getTouchAction.call(this)
            },
            attrTest: function(e) {
                var t = this.options.direction,
                    n = void 0;
                return t & (B | Y) ? n = e.overallVelocity : t & B ? n = e.overallVelocityX : t & Y && (n = e.overallVelocityY), this._super.attrTest.call(this, e) && t & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && u(n) > this.options.velocity && e.eventType & F
            },
            emit: function(e) {
                var t = Ve(e.offsetDirection);
                t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
            }
        }), b(Je, He, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [Ne]
            },
            process: function(e) {
                var t = this.options,
                    n = e.pointers.length === t.pointers,
                    r = e.distance < t.threshold,
                    i = e.deltaTime < t.time;
                if (this.reset(), e.eventType & j && 0 === this.count) return this.failTimeout();
                if (r && i && n) {
                    if (e.eventType != F) return this.failTimeout();
                    var o = !this.pTime || e.timeStamp - this.pTime < t.interval,
                        s = !this.pCenter || ie(this.pCenter, e.center) < t.posThreshold;
                    if (this.pTime = e.timeStamp, this.pCenter = e.center, s && o ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = f(function() {
                        this.state = qe, this.tryEmit()
                    }, t.interval, this), Me) : qe
                }
                return 32
            },
            failTimeout: function() {
                return this._timer = f(function() {
                    this.state = 32
                }, this.options.interval, this), 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == qe && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), Ze.VERSION = "2.0.8", Ze.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [Ke, {
                    enable: !1
                }],
                [Be, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [$e, {
                    direction: B
                }],
                [Xe, {
                        direction: B
                    },
                    ["swipe"]
                ],
                [Je],
                [Je, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [Ye]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };

        function Qe(e, t) {
            this.options = g({}, Ze.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = function(e) {
                var t = e.options.inputClass;
                return new(t || (D ? de : M ? _e : R ? ke : le))(e, Q)
            }(this), this.touchAction = new Re(this, this.options.touchAction), et(this, !0), d(this.options.recognizers, function(e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
            }, this)
        }

        function et(e, t) {
            var n = e.element;
            if (n.style) {
                var r = void 0;
                d(e.options.cssProps, function(i, o) {
                    r = L(n.style, o), t ? (e.oldCssProps[r] = n.style[r], n.style[r] = i) : n.style[r] = e.oldCssProps[r] || ""
                }), t || (e.oldCssProps = {})
            }
        }
        Qe.prototype = {
            set: function(e) {
                return g(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
            },
            stop: function(e) {
                this.session.stopped = e ? 2 : 1
            },
            recognize: function(e) {
                var t = this.session;
                if (!t.stopped) {
                    this.touchAction.preventDefaults(e);
                    var n = void 0,
                        r = this.recognizers,
                        i = t.curRecognizer;
                    (!i || i && i.state & qe) && (i = t.curRecognizer = null);
                    for (var o = 0; o < r.length;) n = r[o], 2 === t.stopped || i && n != i && !n.canRecognizeWith(i) ? n.reset() : n.recognize(e), !i && n.state & (Me || Ue || je) && (i = t.curRecognizer = n), o++
                }
            },
            get: function(e) {
                if (e instanceof He) return e;
                for (var t = this.recognizers, n = 0; n < t.length; n++)
                    if (t[n].options.event == e) return t[n];
                return null
            },
            add: function(e) {
                if (p(e, "add", this)) return this;
                var t = this.get(e.options.event);
                return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
            },
            remove: function(e) {
                if (p(e, "remove", this)) return this;
                if (e = this.get(e)) {
                    var t = this.recognizers,
                        n = I(t, e); - 1 !== n && (t.splice(n, 1), this.touchAction.update())
                }
                return this
            },
            on: function(e, t) {
                if (e !== o && t !== o) {
                    var n = this.handlers;
                    return d(x(e), function(e) {
                        n[e] = n[e] || [], n[e].push(t)
                    }), this
                }
            },
            off: function(e, t) {
                if (e !== o) {
                    var n = this.handlers;
                    return d(x(e), function(e) {
                        t ? n[e] && n[e].splice(I(n[e], t), 1) : delete n[e]
                    }), this
                }
            },
            emit: function(e, t) {
                this.options.domEvents && function(e, t) {
                    var r = n.createEvent("Event");
                    r.initEvent(e, !0, !0), r.gesture = t, t.target.dispatchEvent(r)
                }(e, t);
                var r = this.handlers[e] && this.handlers[e].slice();
                if (r && r.length) {
                    t.type = e, t.preventDefault = function() {
                        t.srcEvent.preventDefault()
                    };
                    for (var i = 0; i < r.length;) r[i](t), i++
                }
            },
            destroy: function() {
                this.element && et(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, g(Ze, {
            INPUT_START: j,
            INPUT_MOVE: q,
            INPUT_END: F,
            INPUT_CANCEL: H,
            STATE_POSSIBLE: De,
            STATE_BEGAN: Me,
            STATE_CHANGED: Ue,
            STATE_ENDED: je,
            STATE_RECOGNIZED: qe,
            STATE_CANCELLED: Fe,
            STATE_FAILED: 32,
            DIRECTION_NONE: z,
            DIRECTION_LEFT: V,
            DIRECTION_RIGHT: G,
            DIRECTION_UP: W,
            DIRECTION_DOWN: X,
            DIRECTION_HORIZONTAL: B,
            DIRECTION_VERTICAL: Y,
            DIRECTION_ALL: K,
            Manager: Qe,
            Input: Z,
            TouchAction: Re,
            TouchInput: _e,
            MouseInput: le,
            PointerEventInput: de,
            TouchMouseInput: ke,
            SingleTouchInput: ye,
            Recognizer: He,
            AttrRecognizer: We,
            Tap: Je,
            Pan: Xe,
            Swipe: $e,
            Pinch: Be,
            Rotate: Ke,
            Press: Ye,
            on: T,
            off: k,
            each: d,
            merge: y,
            extend: m,
            assign: g,
            inherit: b,
            bindFn: w,
            prefixed: L
        }), (void 0 !== t ? t : "undefined" != typeof self ? self : {}).Hammer = Ze, e.exports = Ze
    }(window, document)
}, , function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), console.log("MOCK SEELATER"), this.regularTS = 100, this.firstSaved = !0, this.savedUrls = ["www1.folha.uol.com.br/colunas/monicabergamo/2018/02/vou-ali-chorar-um-pouquinho-e-ja-volto-diz-huck-a-amigos.shtml"], this.problemUrls = ["www1.folha.uol.com.br/cotidiano/transito/estradas/sao_paulo.shtml", "eleicoes.uol.com.br/2018/noticias/2018/02/15/justica-suspende-interrogatorio-de-lula-em-caso-da-operacao-zelotes.htm"], this.user = {
                isLogged: this.isLogged
            }
        }
        return r(e, [{
            key: "isLogged",
            value: function() {
                return !!(window.widgetProfile && window.widgetProfile.Settings && window.widgetProfile.Settings.getAuth) && window.widgetProfile.Settings.getAuth().isLogged
            }
        }, {
            key: "getUrl",
            value: function(e) {
                return !!e && e.replace(/https?:\/\//, "")
            }
        }, {
            key: "list",
            value: function(e, t) {
                var n = {
                    success: !0,
                    data: []
                };
                for (var r in this.savedUrls) n.data.push({
                    url: "http://" + this.savedUrls[r]
                }), n.data.push({
                    url: "https://" + this.savedUrls[r]
                });
                t && window.setTimeout(function() {
                    t(n)
                }, this.regularTS)
            }
        }, {
            key: "checkUrl",
            value: function(e, t) {
                var n = this.getUrl(e.url),
                    r = {
                        success: !0,
                        data: !1
                    };
                n && -1 == this.problemUrls.indexOf(n) ? r.data = {
                    isSaved: -1 != this.savedUrls.indexOf(n)
                } : (r.success = !1, r.data = null, r.status = 501), t && window.setTimeout(function() {
                    t(r)
                }, this.regularTS)
            }
        }, {
            key: "saveUrl",
            value: function(e, t) {
                var n = this.getUrl(e.url),
                    r = {
                        success: !0,
                        data: {}
                    };
                n && -1 == this.problemUrls.indexOf(n) ? -1 == this.savedUrls.indexOf(n) && (this.savedUrls.push(n), r.data.isFirstSaved = this.firstSaved, this.firstSaved && (this.firstSaved = !1)) : (r.success = !1, r.status = 500), t && window.setTimeout(function() {
                    t(r)
                }, this.regularTS)
            }
        }, {
            key: "removeUrl",
            value: function(e, t) {
                var n = this.getUrl(e.url);
                this.problemUrls.push("noticias.uol.com.br/cotidiano/ultimas-noticias/2017/03/21/pela-1-vez-nesta-decada-brasil-deixa-de-avancar-em-ranking-de-qualidade-de-vida.htm"), this.problemUrls.push("www1.folha.uol.com.br/colunas/monicabergamo/2018/02/vou-ali-chorar-um-pouquinho-e-ja-volto-diz-huck-a-amigos.shtml");
                var r = {
                        success: !0
                    },
                    i = this.savedUrls.indexOf(n);
                !n || i < 0 || -1 != this.problemUrls.indexOf(n) ? (r.success = !1, r.status = n ? 502 : 500) : this.savedUrls.splice(i, 1), this.problemUrls.splice(this.problemUrls.length - 1, 2), t && window.setTimeout(function() {
                    t(r)
                }, this.regularTS)
            }
        }]), e
    }();
    e.exports = i
}]);