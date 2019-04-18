! function() {
    var o = {},
        n = ["Logic", "Model", "DataSource"],
        r = n.length,
        t = 0;

    function i(n, r) {
        var t = r + n;
        if (!ustream.classes[t]) throw "Undefined, or missing class definition: " + t;
        o[t] = new ustream.classes[t]
    }
    for (; t < r; t++) ustream["get" + n[t]] = function(u) {
        return function(n) {
            return o[e = (t = n) + (r = u)] || i(r, t), o[e];
            var r, t, e
        }
    }(n[t]), ustream["create" + n[t]] = function(r) {
        return function(n) {
            return i(r, n)
        }
    }(n[t]), ustream["destroy" + n[t]] = function(e) {
        return function(n) {
            return o[(t = n) + (r = e)].destroy(), void(o[t + r] = null);
            var r, t
        }
    }(n[t])
}();
define("eventEmitter", [], function() {
    function s(t, e, r, s, c) {
        var n, o = 0;
        if (r && "object" == typeof r)
            for (s && "function" != typeof s && (c = s), n = Object.keys(r); o < n.length; o++) t(e, n[o], {
                callback: r[n[o]],
                context: c
            });
        else t(e, r, {
            callback: s,
            context: c
        });
        return e
    }

    function c(t, e, r) {
        r && r.callback && (t[e] || (t[e] = []), t[e].push(r))
    }

    function n(t, e, r) {
        for (var s, c, n = e ? [e] : Object.keys(t), o = 0, i = n.length, l = 0, a = 0; o < i; o++)
            if (s = t[n[o]])
                for (l = 0, a = s.length; l < a; l++) c = s[l], r.callback && c.callback !== r.callback || r.context && c.context !== r.context || (s.splice(l, 1), l--, 0 === --a && delete t[n[o]]);
        return t
    }

    function r(t) {
        var e, r, s = this.observers && this.observers[t],
            c = Array.prototype.slice.call(arguments, 1);
        if (s && s.length)
            for (r in s) s.hasOwnProperty(r) && (e = s[r]).callback.apply(e.context || this, c)
    }
    return {
        on: function(t, e, r) {
            return this.observers || (this.observers = {}), this.observers = s(c, this.observers, t, e, r || this), this
        },
        off: function(t, e, r) {
            return this.observers || (this.observers = {}), this.observers = s(n, this.observers, t, e, r), this
        },
        emit: function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return r.apply(this, [t].concat(e)), r.apply(this, ["*"].concat(e).concat([t])), this
        }
    }
});
define("abstracts/DataSource", ["klass"], function(t) {
    return t({
        _singleton: !0,
        initialize: function() {},
        isObject: function(t) {
            return t && "[object Object]" === Object.prototype.toString.call(t)
        },
        destroy: function() {}
    })
});
define("abstracts/DataSourceAsync", ["stringUtils", "abstracts/DataSource"], function(s, e) {
    function c(e, n) {
        return (e = e || "GET").toUpperCase() + " " + n.toLowerCase()
    }
    return e.extend({
        pending: null,
        configs: null,
        setConfigsForRoute: function(e, n, s) {
            this.configs || (this.configs = {}), s || (s = n, n = e, e = null);
            var t = c(e, n);
            this.configs[t] || (this.configs[t] = []), this.configs[t].push(s)
        },
        sendRequest: function() {
            throw new Error("DataSource#sendRequest should be overwritten with the specific protocol.")
        },
        request: function(e, n) {
            if (!this.isObject(e)) throw new TypeError("Config should be an object");
            if (n && (!n.condition || !n.request)) throw new TypeError('Proxy object needs "condition" and "request" methods');
            return e.force ? this.sendRequest(e) : (e.urlParams && (e.url = s.urlSubst(e.url, e.urlParams)), this.setConfigsForRoute(e.type, e.url, e), !!this.isNewRequest(e.type, e.url) && (this.setAsPendingRequest(e.type, e.url), this.sendRequest(e, n)))
        },
        onResponse: function(e, n, s) {
            var t, i, o = e.url,
                r = c(e.type, o),
                u = Array.prototype.slice.call(arguments, 1);
            switch (s) {
                case "error":
                case "timeout":
                case "parseerror":
                case "abort":
                    t = "error";
                    break;
                case "success":
                case "nocontent":
                case "notmodified":
                    t = "success"
            }
            e.force ? this.handleConfigs(u, e, t) : (this.validateResponse(r), i = this.configs[r], this.configs[r] = null, this.pending[r] = !1, $.each(i, $.proxy(function(e, n) {
                this.handleConfigs(u, n, t)
            }, this)))
        },
        validateResponse: function(e) {
            if (!this.configs || !this.configs[e]) throw new TypeError("No configs registered for the url: " + e);
            if (!this.pending || !this.pending[e]) throw new Error("Request is not in pending state: " + e)
        },
        handleConfigs: function(e, n, s) {
            n.before && (e[0] = n.before.apply(this, e)), n[s] && n[s].apply(this, e)
        },
        setAsPendingRequest: function(e, n) {
            if ("string" != typeof n) throw new TypeError("Url should be string");
            this.pending || (this.pending = {}), n || (n = e, e = null);
            var s = c(e, n);
            this.pending[s] || (this.pending[s] = !0)
        },
        isNewRequest: function(e, n) {
            return n || (n = e, e = null), !this.pending || !this.pending[c(e, n)]
        },
        deleteConfigsForRoute: function(e, n) {
            n || (n = e, e = null), this.configs && (this.configs[c(e, n)] = [])
        },
        deleteConfigs: function() {
            this.configs = null
        },
        deletePendingRequests: function() {
            this.pending = null
        }
    })
});
define("abstracts/DataSourceSync", ["abstracts/DataSource"], function(t) {
    return t.extend({
        getSyncData: function() {},
        setSyncData: function() {},
        get: function(t) {
            return this.getSyncData(t)
        },
        set: function(t, n, a) {
            return this.setSyncData(t, n, a)
        }
    })
});
define("abstracts/DataSourceSocket", ["stringUtils", "abstracts/DataSource", "eventEmitter"], function(e, t, o) {
    return t.extend({
        __mixin: [o],
        event: {
            MESSAGE: "datasource_socket_event_message",
            ERROR: "datasource_socket_event_error",
            OPEN: "datasource_socket_event_open",
            CLOSE: "datasource_socket_event_close"
        },
        connect: function(e) {
            throw new Error("DataSourceSocket#connect should be overwritten!")
        },
        send: function(e) {
            this.sendRequest(e)
        },
        request: function(e) {
            this.sendRequest(e)
        },
        close: function(e, t) {
            throw new Error("DataSourceSocket#close should be overwritten!")
        },
        sendRequest: function(e) {
            throw new Error("DataSourceSocket#sendRequest should be overwritten!")
        }
    })
});
define("abstracts/Model", ["klass", "eventEmitter"], function(t, n) {
    return t({
        config: null,
        __mixin: [n],
        SILENT_UPDATE: !0,
        data: {},
        initialize: function(t) {
            t && (this.data = t)
        },
        isFunc: function(t) {
            return "function" == typeof t
        },
        isArr: function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        },
        get: function(t) {
            return this.getValueInPath(t, this.data)
        },
        set: function(t, n, i) {
            arguments.length < 3 && "string" != typeof t && t ? (i = n, $.each(t, $.proxy(function(t, n) {
                this.setValueInPath(t, n, this.data) && !i && this.changed(t)
            }, this))) : this.setValueInPath(t, n, this.data) && !i && this.changed(t)
        },
        changed: function(t, n) {
            for (var i, e = t.split("."); e.length;) i = e.join("."), this.emit(i, n || this.get(i), t), e.pop()
        },
        getValueInPath: function(t, n) {
            this.isArr(t) || (t = t.toString().split("."));
            for (var i = 0, e = t.length, r = n; i < e; i += 1) {
                if (!r) return !1;
                r = r[t[i]]
            }
            return r
        },
        setValueInPath: function(t, n, i, e, r) {
            this.isArr(t) || (t = t.toString().split("."));
            for (var a = 0, s = t.length - 1, u = i; a < s; a += 1) {
                if (u[t[a]]) {
                    if ("object" != typeof u[t[a]]) return !1
                } else u[t[a]] = {};
                u = u[t[a]]
            }
            return !this.areValuesEqual(u[t[s]], n) && (e ? (this.isArr(u[t[s]]) || (u[t[s]] = []), void 0 !== r ? u[t[s]][r] = n : u[t[s]].push(n)) : u[t[s]] = n, !0)
        },
        areValuesEqual: function(t, n) {
            return t === n
        }
    })
});
define("abstracts/Controller", ["klass", "events"], function(t, n) {
    return t({
        view: null,
        initialize: function() {
            this.registerEvents("view"), this.registerEvents("global"), this.registerEvents("model")
        },
        registerEvents: function(t) {
            var e, i, n = this[t + "Events"];
            if (n)
                for (i in n)(e = s(i, this)) && this.attachHandler(t, i, e);

            function s(e, i) {
                return !!i[n[e]] && function() {
                    var t = Array.prototype.slice.call(arguments);
                    i[n[e]].apply(i, t)
                }
            }
        },
        attachHandler: function(t, e, i) {
            switch (t) {
                case "view":
                    this.view && this.view.on(e, i);
                    break;
                case "global":
                    n.capture(e, i)
            }
        }
    })
});
define("abstracts/View", ["klass", "eventEmitter"], function(t, e) {
    return t({
        __mixin: [e],
        container: "",
        template: "",
        autoLoad: !0,
        observers: {},
        dataNamespace: !1,
        dataKeyAttribute: "view-data-key",
        initialize: function(t, e) {
            e && (this.dataNamespace = e), this.autoLoad && this.initContainer(t)
        },
        initContainer: function(t) {
            t ? this.container = $(t) : this.containerSelector ? this.container = $(this.containerSelector) : this.container && (this.container = $(this.container)), this.template && this.container.html(this.template), this.registerDomEvents()
        },
        registerDomEvents: function() {
            var t, e, a, i, n, r, s = this.domEvents;
            if (s)
                for (t in s) r = [], (n = o(t, this)) && (e = (a = t.split(" ")).shift(), i = a.join(" "), r.push(e), i && r.push(i), r.push(n), this.container.on.apply(this.container, r));

            function o(t, e) {
                var a = s[t];
                return "!" === a[0] ? function() {
                    var t = Array.prototype.slice.call(arguments);
                    t.unshift(a.slice(1)), e.emit.apply(e, t)
                } : !!e[s[t]] && function() {
                    var t = Array.prototype.slice.call(arguments);
                    e[a].apply(e, t)
                }
            }
        },
        render: function() {
            return this
        },
        appendTo: function(t) {
            this.container.appendTo(t)
        },
        append: function(t) {
            this.container.append(t)
        },
        find: function(t) {
            return this.container.find(t)
        },
        getDataNamespaceKey: function(t) {
            return !1 === this.dataNamespace ? t : this.dataNamespace + "." + t
        },
        removeDataNamespaceKey: function(t) {
            return t.replace(this.dataNamespace + ".", "")
        },
        getData: function(t, e) {
            var a, i, n, r = this.dataKeyAttribute,
                s = this.dataNamespace,
                o = e || this.container;
            return a = "string" == typeof t ? "[" + r + '="' + this.getDataNamespaceKey(t) + '"]' : "[" + r + "]", i = $(o).find(a).filter(function() {
                return !s || 0 === $(this).attr(r).indexOf(s + ".")
            }), n = this.getDataFromNodes(i, r), "string" == typeof t ? n[t] : n
        },
        setData: function(t, e) {
            var a = {},
                o = this,
                c = this.dataKeyAttribute;
            t && ("string" == typeof t ? a[t] = e : "object" == typeof t && (a = t), $.each(a, function(n, r) {
                var s, t = o.getDataNamespaceKey(n);
                s = o.container.find("[" + c + '^="' + t + '"]'), $.unique(s.map(function(t, e) {
                    return $(e).attr(c)
                })).each(function(t, e) {
                    var a, i = s.filter("[" + c + '="' + e + '"]');
                    a = (e = o.removeDataNamespaceKey(e)).split("."), n === e ? o.setDataOnNode(i, r) : (a.shift(), o.setDataOnNode(i, o.getValueForKeyArray(a, r)))
                })
            }))
        },
        getDataFromNodes: function(s, o) {
            var c = {},
                h = this.dataNamespace;
            return s.each($.proxy(function(t, e) {
                var a = $(e),
                    i = a.attr(o),
                    n = a.val(),
                    r = s.filter("[" + o + '="' + i + '"]');
                n = this.getDataFromNode(a, r), h && (i = i.replace(h + ".", "")), c[i] = n
            }, this)), c
        },
        getDataFromNode: function(t, e) {
            return "checkbox" === t[0].type || "radio" === t[0].type ? 1 < e.length && "radio" === t[0].type ? e.filter(":checked").val() : t.prop("checked") ? 1 : 0 : t.is("input") || t.is("select") || t.is("textarea") ? t.val() : t.is("a") ? t.attr("href") : t.is("img") ? t.attr("src") : "buttons-radio" === t.attr("data-toggle") ? t.find(".active").data("value") : t.html()
        },
        setDataOnNode: function(t, e) {
            t && "checkbox" === t[0].type || "radio" === t[0].type ? 1 < t.length && "radio" === t[0].type ? t.val([e]) : ("false" !== e && "0" !== e || (e = !1), t.prop("checked", !!e)) : t.is("input") || t.is("select") || t.is("textarea") ? t.val(e) : t.is("a") ? t.attr("href", e) : t.is("img") ? t.attr("src", e) : "buttons-radio" === t.attr("data-toggle") ? (t.find(".active").removeClass("active"), t.find('[data-value="' + e + '"]').addClass("active")) : "1" === t.attr("view-data-useraw") ? t.text(e) : t.html(e)
        },
        getValueForKeyArray: function(t, e) {
            for (var a = 0, i = t.length, n = e; a < i; a += 1) {
                if (!n) return !1;
                n = n[t[a]]
            }
            return n
        }
    })
});
define("datasources/AjaxDataSource", ["abstracts/DataSourceAsync", "datasources/CorsDataSource", "klass"], function(e, t, s) {
    var a = "_csrf_token";
    return e.extend({
        sendRequest: function(e) {
            var a = s.merge(e, {
                success: $.proxy(this.onResponse, this, e),
                error: $.proxy(this.onResponse, this, e)
            });
            return a.csrfToken && (a = this.decorateWithCSRF(a)), e.xhrFields && e.xhrFields.withCredentials && t.isEnabled() ? t.request(a) : $.ajax(a)
        },
        decorateWithCSRF: function(e) {
            return e.data || (e.data = {}), Array.isArray(e.data) ? e.data.push({
                name: a,
                value: e.csrfToken
            }) : "object" == typeof e.data && (e.data[a] = e.csrfToken), e
        },
        setCSRFTokenField: function(e) {
            a = e
        }
    })
});
define("datasources/WebStorageDataSource", ["abstracts/DataSourceSync", "storage"], function(t, n) {
    return t.extend({
        getSyncData: function(t) {
            return n.get(t)
        },
        setSyncData: function(t, e) {
            n.set(t, e)
        },
        removeSyncData: function(t) {
            return n.remove(t)
        }
    })
});
define("datasources/CookieDataSource", ["abstracts/DataSourceSync", "cookie"], function(e, a) {
    return e.extend({
        getSyncData: function(e) {
            return a(e)
        },
        setSyncData: function(e, t, n) {
            a(e, t, n)
        },
        removeSyncData: function(e) {
            return a.remove(e)
        }
    })
});
define("datasources/CorsDataSource", [], function() {
    var i = !1,
        s = !1,
        a = !1,
        c = [],
        u = !1,
        d = {};

    function t() {
        var t = navigator.userAgent.toLowerCase();
        return -1 != t.indexOf("msie") && parseInt(t.split("msie")[1])
    }

    function l(t) {
        return t.replace("http://", "https://")
    }

    function f() {
        return l(window.location.origin || window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""))
    }

    function p(t) {
        var e;
        try {
            e = JSON.parse(t.originalEvent.data)
        } catch (t) {}
        if (e && e.id) {
            var n = d[e.id];
            n && (e.success ? n.success.call(this, e.response, e.status) : n.error.call(this, e.response, e.status), delete d[e.id])
        }
    }

    function m(t) {
        var e, n = Math.random().toString(36).substr(2) + (new Date).getTime(),
            o = -1 !== (e = t.url).indexOf("http") && -1 === e.indexOf(f()) ? l(e = e.split("/").slice(0, 3).join("/")) : f();
        if (o !== a && (a = o, i && i.remove(), s = i = !1, c = []), u || ($(window).on("message", p), u = !0), !s) return c.push(t), i || ((i = $('<iframe id="CorsCommunicator" src="' + o + "/corsCommunicatorFrame?" + (new Date).getTime() + '"></iframe>')).on("load", function() {
            s = !0,
                function() {
                    for (var t = 0; t < c.length; t++) m(c[t]);
                    c = []
                }()
        }), $(document.body).append(i)), {
            abort: function() {}
        };
        d[n] = t;
        var r = $.extend(!0, {}, t);
        return delete r.success, delete r.error, i[0].contentWindow.postMessage(JSON.stringify({
            id: n,
            config: t
        }), o)
    }
    return {
        request: m,
        isEnabled: function() {
            return t() && t() <= 9
        }
    }
});