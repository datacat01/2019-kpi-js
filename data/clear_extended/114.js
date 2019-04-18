/* common */
(function(a) {
    if (a[a.length - 1] === ".") return;
    var b = a.split("."),
        c = b.length;
    if (c >= 2) try {
        document.domain = b[c - 2] + "." + b[c - 1]
    } catch (d) {}
})(document.domain);
var swfobject = function() {
    function A() {
        if (t) return;
        try {
            var a = i.getElementsByTagName("body")[0].appendChild(Q("span"));
            a.parentNode.removeChild(a)
        } catch (b) {
            return
        }
        t = !0;
        var c = l.length;
        for (var d = 0; d < c; d++) l[d]()
    }

    function B(a) {
        t ? a() : l[l.length] = a
    }

    function C(b) {
        if (typeof h.addEventListener != a) h.addEventListener("load", b, !1);
        else if (typeof i.addEventListener != a) i.addEventListener("load", b, !1);
        else if (typeof h.attachEvent != a) R(h, "onload", b);
        else if (typeof h.onload == "function") {
            var c = h.onload;
            h.onload = function() {
                c(), b()
            }
        } else h.onload = b
    }

    function D() {
        k ? E() : F()
    }

    function E() {
        var c = i.getElementsByTagName("body")[0],
            d = Q(b);
        d.setAttribute("type", e);
        var f = c.appendChild(d);
        if (f) {
            var g = 0;
            (function() {
                if (typeof f.GetVariable != a) {
                    var b = f.GetVariable("$version");
                    b && (b = b.split(" ")[1].split(","), y.pv = [parseInt(b[0], 10), parseInt(b[1], 10), parseInt(b[2], 10)])
                } else if (g < 10) {
                    g++, setTimeout(arguments.callee, 10);
                    return
                }
                c.removeChild(d), f = null, F()
            })()
        } else F()
    }

    function F() {
        var b = m.length;
        if (b > 0)
            for (var c = 0; c < b; c++) {
                var d = m[c].id,
                    e = m[c].callbackFn,
                    f = {
                        success: !1,
                        id: d
                    };
                if (y.pv[0] > 0) {
                    var g = P(d);
                    if (g)
                        if (S(m[c].swfVersion) && !(y.wk && y.wk < 312)) U(d, !0), e && (f.success = !0, f.ref = G(d), e(f));
                        else if (m[c].expressInstall && H()) {
                        var h = {};
                        h.data = m[c].expressInstall, h.width = g.getAttribute("width") || "0", h.height = g.getAttribute("height") || "0", g.getAttribute("class") && (h.styleclass = g.getAttribute("class")), g.getAttribute("align") && (h.align = g.getAttribute("align"));
                        var i = {},
                            j = g.getElementsByTagName("param"),
                            k = j.length;
                        for (var l = 0; l < k; l++) j[l].getAttribute("name").toLowerCase() != "movie" && (i[j[l].getAttribute("name")] = j[l].getAttribute("value"));
                        I(h, i, d, e)
                    } else J(g), e && e(f)
                } else {
                    U(d, !0);
                    if (e) {
                        var n = G(d);
                        n && typeof n.SetVariable != a && (f.success = !0, f.ref = n), e(f)
                    }
                }
            }
    }

    function G(c) {
        var d = null,
            e = P(c);
        if (e && e.nodeName == "OBJECT")
            if (typeof e.SetVariable != a) d = e;
            else {
                var f = e.getElementsByTagName(b)[0];
                f && (d = f)
            } return d
    }

    function H() {
        return !u && S("6.0.65") && (y.win || y.mac) && !(y.wk && y.wk < 312)
    }

    function I(b, c, d, e) {
        u = !0, r = e || null, s = {
            success: !1,
            id: d
        };
        var g = P(d);
        if (g) {
            g.nodeName == "OBJECT" ? (p = K(g), q = null) : (p = g, q = d), b.id = f;
            if (typeof b.width == a || !/%$/.test(b.width) && parseInt(b.width, 10) < 310) b.width = "310";
            if (typeof b.height == a || !/%$/.test(b.height) && parseInt(b.height, 10) < 137) b.height = "137";
            i.title = i.title.slice(0, 47) + " - Flash Player Installation";
            var j = y.ie && y.win ? "ActiveX" : "PlugIn",
                k = "MMredirectURL=" + h.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + j + "&MMdoctitle=" + i.title;
            typeof c.flashvars != a ? c.flashvars += "&" + k : c.flashvars = k;
            if (y.ie && y.win && g.readyState != 4) {
                var l = Q("div");
                d += "SWFObjectNew", l.setAttribute("id", d), g.parentNode.insertBefore(l, g), g.style.display = "none",
                    function() {
                        g.readyState == 4 ? g.parentNode.removeChild(g) : setTimeout(arguments.callee, 10)
                    }()
            }
            L(b, c, d)
        }
    }

    function J(a) {
        if (y.ie && y.win && a.readyState != 4) {
            var b = Q("div");
            a.parentNode.insertBefore(b, a), b.parentNode.replaceChild(K(a), b), a.style.display = "none",
                function() {
                    a.readyState == 4 ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
                }()
        } else a.parentNode.replaceChild(K(a), a)
    }

    function K(a) {
        var c = Q("div");
        if (y.win && y.ie) c.innerHTML = a.innerHTML;
        else {
            var d = a.getElementsByTagName(b)[0];
            if (d) {
                var e = d.childNodes;
                if (e) {
                    var f = e.length;
                    for (var g = 0; g < f; g++)(e[g].nodeType != 1 || e[g].nodeName != "PARAM") && e[g].nodeType != 8 && c.appendChild(e[g].cloneNode(!0))
                }
            }
        }
        return c
    }

    function L(c, d, f) {
        var g, h = P(f);
        if (y.wk && y.wk < 312) return g;
        if (h) {
            typeof c.id == a && (c.id = f);
            if (y.ie && y.win) {
                var i = "";
                for (var j in c) c[j] != Object.prototype[j] && (j.toLowerCase() == "data" ? d.movie = c[j] : j.toLowerCase() == "styleclass" ? i += ' class="' + c[j] + '"' : j.toLowerCase() != "classid" && (i += " " + j + '="' + c[j] + '"'));
                var k = "";
                for (var l in d) d[l] != Object.prototype[l] && (k += '<param name="' + l + '" value="' + d[l] + '" />');
                h.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + i + ">" + k + "</object>", n[n.length] = c.id, g = P(c.id)
            } else {
                var m = Q(b);
                m.setAttribute("type", e);
                for (var o in c) c[o] != Object.prototype[o] && (o.toLowerCase() == "styleclass" ? m.setAttribute("class", c[o]) : o.toLowerCase() != "classid" && m.setAttribute(o, c[o]));
                for (var p in d) d[p] != Object.prototype[p] && p.toLowerCase() != "movie" && M(m, p, d[p]);
                h.parentNode.replaceChild(m, h), g = m
            }
        }
        return g
    }

    function M(a, b, c) {
        var d = Q("param");
        d.setAttribute("name", b), d.setAttribute("value", c), a.appendChild(d)
    }

    function N(a) {
        var b = P(a);
        b && b.nodeName == "OBJECT" && (y.ie && y.win ? (b.style.display = "none", function() {
            b.readyState == 4 ? O(a) : setTimeout(arguments.callee, 10)
        }()) : b.parentNode.removeChild(b))
    }

    function O(a) {
        var b = P(a);
        if (b) {
            for (var c in b) typeof b[c] == "function" && (b[c] = null);
            b.parentNode.removeChild(b)
        }
    }

    function P(a) {
        var b = null;
        try {
            b = i.getElementById(a)
        } catch (c) {}
        return b
    }

    function Q(a) {
        return i.createElement(a)
    }

    function R(a, b, c) {
        a.attachEvent(b, c), o[o.length] = [a, b, c]
    }

    function S(a) {
        var b = y.pv,
            c = a.split(".");
        return c[0] = parseInt(c[0], 10), c[1] = parseInt(c[1], 10) || 0, c[2] = parseInt(c[2], 10) || 0, b[0] > c[0] || b[0] == c[0] && b[1] > c[1] || b[0] == c[0] && b[1] == c[1] && b[2] >= c[2] ? !0 : !1
    }

    function T(c, d, e, f) {
        if (y.ie && y.mac) return;
        var g = i.getElementsByTagName("head")[0];
        if (!g) return;
        var h = e && typeof e == "string" ? e : "screen";
        f && (v = null, w = null);
        if (!v || w != h) {
            var j = Q("style");
            j.setAttribute("type", "text/css"), j.setAttribute("media", h), v = g.appendChild(j), y.ie && y.win && typeof i.styleSheets != a && i.styleSheets.length > 0 && (v = i.styleSheets[i.styleSheets.length - 1]), w = h
        }
        y.ie && y.win ? v && typeof v.addRule == b && v.addRule(c, d) : v && typeof i.createTextNode != a && v.appendChild(i.createTextNode(c + " {" + d + "}"))
    }

    function U(a, b) {
        if (!x) return;
        var c = b ? "visible" : "hidden";
        t && P(a) ? P(a).style.visibility = c : T("#" + a, "visibility:" + c)
    }

    function V(b) {
        var c = /[\\\"<>\.;]/,
            d = c.exec(b) != null;
        return d && typeof encodeURIComponent != a ? encodeURIComponent(b) : b
    }
    var a = "undefined",
        b = "object",
        c = "Shockwave Flash",
        d = "ShockwaveFlash.ShockwaveFlash",
        e = "application/x-shockwave-flash",
        f = "SWFObjectExprInst",
        g = "onreadystatechange",
        h = window,
        i = document,
        j = navigator,
        k = !1,
        l = [D],
        m = [],
        n = [],
        o = [],
        p, q, r, s, t = !1,
        u = !1,
        v, w, x = !0,
        y = function() {
            var f = typeof i.getElementById != a && typeof i.getElementsByTagName != a && typeof i.createElement != a,
                g = j.userAgent.toLowerCase(),
                l = j.platform.toLowerCase(),
                m = l ? /win/.test(l) : /win/.test(g),
                n = l ? /mac/.test(l) : /mac/.test(g),
                o = /webkit/.test(g) ? parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                p = !1,
                q = [0, 0, 0],
                r = null;
            if (typeof j.plugins != a && typeof j.plugins[c] == b) r = j.plugins[c].description, r && (typeof j.mimeTypes == a || !j.mimeTypes[e] || !!j.mimeTypes[e].enabledPlugin) && (k = !0, p = !1, r = r.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), q[0] = parseInt(r.replace(/^(.*)\..*$/, "$1"), 10), q[1] = parseInt(r.replace(/^.*\.(.*)\s.*$/, "$1"), 10), q[2] = /[a-zA-Z]/.test(r) ? parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof h.ActiveXObject != a) try {
                var s = new ActiveXObject(d);
                s && (r = s.GetVariable("$version"), r && (p = !0, r = r.split(" ")[1].split(","), q = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)]))
            } catch (t) {}
            return {
                w3: f,
                pv: q,
                wk: o,
                ie: p,
                win: m,
                mac: n
            }
        }(),
        z = function() {
            if (!y.w3) return;
            (typeof i.readyState != a && i.readyState == "complete" || typeof i.readyState == a && (i.getElementsByTagName("body")[0] || i.body)) && A(), t || (typeof i.addEventListener != a && i.addEventListener("DOMContentLoaded", A, !1), y.ie && y.win && (i.attachEvent(g, function() {
                i.readyState == "complete" && (i.detachEvent(g, arguments.callee), A())
            }), h == top && function() {
                if (t) return;
                try {
                    i.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(arguments.callee, 0);
                    return
                }
                A()
            }()), y.wk && function() {
                if (t) return;
                if (!/loaded|complete/.test(i.readyState)) {
                    setTimeout(arguments.callee, 0);
                    return
                }
                A()
            }(), C(A))
        }(),
        W = function() {
            y.ie && y.win && window.attachEvent("onunload", function() {
                var a = o.length;
                for (var b = 0; b < a; b++) o[b][0].detachEvent(o[b][1], o[b][2]);
                var c = n.length;
                for (var d = 0; d < c; d++) N(n[d]);
                for (var e in y) y[e] = null;
                y = null;
                for (var f in swfobject) swfobject[f] = null;
                swfobject = null
            })
        }();
    return {
        registerObject: function(a, b, c, d) {
            if (y.w3 && a && b) {
                var e = {};
                e.id = a, e.swfVersion = b, e.expressInstall = c, e.callbackFn = d, m[m.length] = e, U(a, !1)
            } else d && d({
                success: !1,
                id: a
            })
        },
        getObjectById: function(a) {
            if (y.w3) return G(a)
        },
        embedSWF: function(c, d, e, f, g, h, i, j, k, l) {
            var m = {
                success: !1,
                id: d
            };
            y.w3 && !(y.wk && y.wk < 312) && c && d && e && f && g ? (U(d, !1), B(function() {
                e += "", f += "";
                var n = {};
                if (k && typeof k === b)
                    for (var o in k) n[o] = k[o];
                n.data = c, n.width = e, n.height = f;
                var p = {};
                if (j && typeof j === b)
                    for (var q in j) p[q] = j[q];
                if (i && typeof i === b)
                    for (var r in i) typeof p.flashvars != a ? p.flashvars += "&" + r + "=" + i[r] : p.flashvars = r + "=" + i[r];
                if (S(g)) {
                    var s = L(n, p, d);
                    n.id == d && U(d, !0), m.success = !0, m.ref = s
                } else {
                    if (h && H()) {
                        n.data = h, I(n, p, d, l);
                        return
                    }
                    U(d, !0)
                }
                l && l(m)
            })) : l && l(m)
        },
        switchOffAutoHideShow: function() {
            x = !1
        },
        ua: y,
        getFlashPlayerVersion: function() {
            return {
                major: y.pv[0],
                minor: y.pv[1],
                release: y.pv[2]
            }
        },
        hasFlashPlayerVersion: S,
        createSWF: function(a, b, c) {
            return y.w3 ? L(a, b, c) : undefined
        },
        showExpressInstall: function(a, b, c, d) {
            y.w3 && H() && I(a, b, c, d)
        },
        removeSWF: function(a) {
            y.w3 && N(a)
        },
        createCSS: function(a, b, c, d) {
            y.w3 && T(a, b, c, d)
        },
        addDomLoadEvent: B,
        addLoadEvent: C,
        getQueryParamValue: function(a) {
            var b = i.location.search || i.location.hash;
            if (b) {
                /\?/.test(b) && (b = b.split("?")[1]);
                if (a == null) return V(b);
                var c = b.split("&");
                for (var d = 0; d < c.length; d++)
                    if (c[d].substring(0, c[d].indexOf("=")) == a) return V(c[d].substring(c[d].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function() {
            if (u) {
                var a = P(f);
                a && p && (a.parentNode.replaceChild(p, a), q && (U(q, !0), y.ie && y.win && (p.style.display = "block")), r && r(s)), u = !1
            }
        }
    }
}();

function objectify(a) {
    var b = a[0].attributes,
        c, d = {};
    for (var e = 0, f = b.length; e < f; e++) c = b[e].name, c.indexOf("data-") === 0 && (c = c.substring(5), d[$.camelCase(c)] = a.data(c));
    return d
}

function attributify(a, b) {
    var c = "";
    for (var d in a) {
        if (!a.hasOwnProperty(d)) continue;
        if (!(typeof a[d] != "object" || a[d] instanceof Array)) {
            c += arguments.callee(a[d], d);
            continue
        }
        if (a[d] === undefined) continue;

        function e(a) {
            return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
        }

        function f(a) {
            return a.replace(/\W+/g, "-").replace(/([a-z\d])([A-Z])/g, "$1-$2")
        }
        c += (c || b ? " " : "") + "data-" + f((b ? b + "-" : "") + d) + '="' + (a[d] instanceof Array ? a[d].join(",") : e(a[d])) + '"'
    }
    return c
}

function seofy(a) {
    return a.replace(/[^a-zA-Z0-9_.]/gi, " ").replace(/\s+/g, "-").toLowerCase()
}

function htmlEncode(a) {
    return a === null || a === undefined ? "" : String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function htmlDecode(a) {
    return a === null || a === undefined ? "" : String(a).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
}
var handlerPath = /ajax\//i;
jQuery.ajaxSettings.beforeSend = function(a, b) {
    if (!handlerPath.test(b.url) && b.type !== "POST") return;
    context.hashMashter && a.setRequestHeader("Hash", context.hashMashter), context.profilerLevel && a.setRequestHeader("X-Profiler-Level", context.profilerLevel);
    var c = context.lastInfluencer != null ? context.lastInfluencer : sessionStorage.influencer;
    c && a.setRequestHeader("X-Influencer", c), context.lastInfluencer = null;
    if (window.spaceway && spaceway.referrer) {
        var d = $("<a/>").attr("href", spaceway.referrer);
        a.setRequestHeader("PreviousReferrer", d[0].href)
    }
    a.setRequestHeader("Client", $.param({
        persistentId: context.beaconDataV3 && context.beaconDataV3.persistentId,
        screenWidth: screen.width,
        screenHeight: screen.height,
        timeZoneOffsetHours: (new Date).getTimezoneOffset() / 60,
        visitId: context.beaconDataV3 && context.beaconDataV3.visitId,
        windowWidth: $(window).width(),
        windowHeight: $(window).height()
    }))
}, Date.prototype.addDays = function(a) {
    return this.setDate(this.getDate() + a), this
}, jQuery.extend(String.prototype, {
    trimEnd: function() {
        return this.replace(/\s+$/, "")
    },
    trimStart: function() {
        return this.replace(/^\s+/, "")
    },
    endsWith: function(a) {
        return this.substr(this.length - a.length) === a
    },
    startsWith: function(a) {
        return this.substr(0, a.length) === a
    },
    parseNameValuePair: function(a, b) {
        a || (a = "=");
        if (this[0] === a) return null;
        var c, d = this.search(a);
        return d > 0 ? c = {
            name: this.substring(0, d),
            value: this.substring(d + 1)
        } : c = {
            name: this,
            value: ""
        }, b && (c = b(c)), c
    },
    parseNameValuePairs: function(a, b, c) {
        var d = {},
            e = null,
            f = this.split(a || "&");
        for (var g = 0; g < f.length; g++) {
            e = f[g].parseNameValuePair(b, c);
            if (!e) continue;
            d[e.name] = e.value
        }
        return d
    },
    format: function() {
        var a = arguments;
        return this.replace(/\{(\d+)\}/g, function(b, c) {
            return a[c]
        })
    }
}), String.prototype.trim || (String.prototype.trim = function() {
    return jQuery.trim(this)
}), Object.fromQueryString = function(a) {
    return a.replace(/\+/g, " ").parseNameValuePairs("&", "=", function(a) {
        return a.value = decodeURIComponent(a.value), a
    })
}, typeof Object.assign != "function" && (Object.assign = function(a, b) {
    "use strict";
    if (a == null) throw new TypeError("Cannot convert undefined or null to object");
    var c = Object(a);
    for (var d = 1; d < arguments.length; d++) {
        var e = arguments[d];
        if (e != null)
            for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (c[f] = e[f])
    }
    return c
}), String.prototype.parse = function() {
    var a = String(this);
    switch (a) {
        case "true":
            return !0;
        case "false":
            return !1;
        case "null":
            return null;
        case "undefined":
            return undefined;
        case "":
            return "";
        default:
            return isNaN(a) ? a : Number(a)
    }
}, String.prototype.toProperCase = function() {
    return this.replace(/\w\S*/g, function(a) {
        return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()
    })
}, Array.find = function(b, c, d) {
    for (var e = 0, f = b.length; e < f; e++)
        if (c.call(d, b[e])) return b[e]
}, Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
    for (var c = b || 0, d = this.length; c < d; c++)
        if (this[c] === a) return c;
    return -1
}), Array.forEach || (Array.forEach = function(a, b, c) {
    for (var d = 0, e = a.length; d < e; d++) {
        var f = a[d];
        typeof f != "undefined" && b.call(c, f, d, a)
    }
}), Array.prototype.find || (Array.prototype.find = function(a) {
    "use strict";
    if (this == null) throw new TypeError("Array.prototype.find called on null or undefined");
    if (typeof a != "function") throw new TypeError("predicate must be a function");
    var b = Object(this),
        c = b.length >>> 0,
        d = arguments[1],
        e;
    for (var f = 0; f < c; f++) {
        e = b[f];
        if (a.call(d, e, f, b)) return e
    }
    return undefined
}), Array.prototype.filter || (Array.prototype.filter = function(a) {
    "use strict";
    if (this === void 0 || this === null) throw new TypeError;
    var b = Object(this),
        c = b.length >>> 0;
    if (typeof a != "function") throw new TypeError;
    var d = [],
        e = arguments.length >= 2 ? arguments[1] : void 0;
    for (var f = 0; f < c; f++)
        if (f in b) {
            var g = b[f];
            a.call(e, g, f, b) && d.push(g)
        } return d
}), Array.prototype.reduce || Object.defineProperty(Array.prototype, "reduce", {
    value: function(a) {
        if (this === null) throw new TypeError("Array.prototype.reduce called on null or undefined");
        if (typeof a != "function") throw new TypeError(a + " is not a function");
        var b = Object(this),
            c = b.length >>> 0,
            d = 0,
            e;
        if (arguments.length == 2) e = arguments[1];
        else {
            while (d < c && !(d in b)) d++;
            if (d >= c) throw new TypeError("Reduce of empty array with no initial value");
            e = b[d++]
        }
        while (d < c) d in b && (e = a(e, b[d], d, b)), d++;
        return e
    }
}), Array.prototype.equals || Object.defineProperty(Array.prototype, "equals", {
    value: function(a) {
        if (!a) return !1;
        if (this.length !== a.length) return !1;
        for (var b = 0, c = this.length; b < c; b++)
            if (this[b] instanceof Array && a[b] instanceof Array) {
                if (!this[b].equals(a[b])) return !1
            } else if (this[b] !== a[b]) return !1;
        return !0
    },
    enumerable: !1
}), Element.prototype.isInViewport || (Element.prototype.isInViewport = function(a) {
    var b = this.getBoundingClientRect();
    return b.top < window.innerHeight && b.bottom >= 0 && b.left < window.innerWidth && b.right >= 0 && (!a || b.height > 0 || b.width > 0)
}), head = document.getElementsByTagName("head")[0], queryString = window.location.search.substring(1).parseNameValuePairs(), embedSWF = function(a, b, c, d, e, f, g) {
    var h = {
            width: "1",
            height: "1",
            border: "0"
        },
        i = {
            quality: "high",
            bgcolor: "#000000",
            allowscriptaccess: "always",
            allowfullscreen: "true",
            wmode: "opaque"
        },
        j = {},
        k = document.createElement("div"),
        l, m = "",
        n = "",
        o = "",
        p = "";
    a.indexOf("?") > -1 && (qi = a.indexOf("?"), p = a.substr(qi + 1), a = a.substring(0, qi)), c == undefined && (c = document.body), c.appendChild(k);
    if (e)
        for (l in e) h[l] = e[l];
    if (f)
        for (l in f) i[l] = f[l];
    if (d)
        for (l in d) j[l] = d[l];
    for (l in i) m += '<param name="' + l + '" value="' + i[l] + '"/>';
    var q = [];
    for (l in j) q.push(l + "=" + j[l]);
    p != "" && q.push(p), n = q.join("&"), n != "" && (m += '<param name="flashvars" value="' + n + '"/>'), q = [];
    for (l in h) q.push(l + '="' + h[l] + '"');
    return o = q.join(" "), k.outerHTML = "<object" + (b ? ' id="' + b + '"' : "") + " " + o + " " + (context.isIE ? ' classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000><param name="movie" value="' + a + '">' : ' type="application/x-shockwave-flash" data="' + a + '"' + (g ? 'class="' + g + '"' : "") + ">") + m + "</object>", document.getElementById(b)
}, $.cors = function(a, b) {
    function g(c, e) {
        clearTimeout(f), d[c](b.context || b, [a, e])
    }
    b = b || {};
    var c = b.xhr = new $.cors.xhr,
        d = $.Deferred(),
        e = b.timeout || 3e4,
        f;
    return c.open(b.data ? "post" : "get", a, !0), c.onprogress = b.onprogess || function() {}, window.XDomainRequest ? c.timeout = e : f = setTimeout(function() {
        c.abort(), g("rejectWith", "timeout")
    }, e), c.onload = function(a) {
        a = a || event;
        var b = a.target && a.target.status;
        b && b !== 304 && (b < 200 || b > 300) ? g("rejectWith", "error") : g("resolveWith", c.responseText)
    }, c.onerror = c.ontimeout = function(a) {
        g("rejectWith", a.type)
    }, b.data ? (b.contentType && c.setRequestHeader && c.setRequestHeader("Content-Type", b.contentType), c.send(b.data)) : c.send(), d.promise()
}, $.cors.xhr = window.XDomainRequest ? XDomainRequest : "withCredentials" in new XMLHttpRequest ? XMLHttpRequest : function() {
    throw "NA"
}, formatter = {
    attributify: attributify
}, $.save = function(a) {
    return typeof a != "object" && (a = {
        url: a
    }), a.type = a.type || "post", a.error = a.error || function(b, c, d) {
        b.status == 401 ? comm.send("login.prompt", a.loginPromptSettings) : setTimeout(function() {
            Myspace.Error(a.errorSettings || {
                yes: {
                    onClick: function() {
                        return $.save(a)
                    }
                }
            })
        }, 550), $.isFunction(a.errorCallback) && a.errorCallback()
    }, $.ajax(a)
}, $.fn.isOnScreen = function() {
    var a = this.get(0);
    if (!a) return !1;
    var b = a.getBoundingClientRect();
    return b.top < window.innerHeight && b.bottom > 0
};
var partial = function(a, b) {
    return require("ejs").render(templates[a], b)
};
(function(a, b) {
    $(window).bind("mousemove keyup load", function() {
        b = 0, clearInterval(a), a = setInterval(function() {
            comm.send("page.idle", ++b)
        }, 6e4)
    })
})(), "undefined" == typeof Element.prototype.insertAdjacentElement && Object.defineProperty(Element.prototype, "insertAdjacentElement", {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: function(a, b) {
        switch (a.toString().toUpperCase()) {
            case "BEFOREBEGIN":
                return this.parentNode.insertBefore(b, this);
            case "AFTERBEGIN":
                return this.insertBefore(b, this.firstChild);
            case "BEFOREEND":
                return this.appendChild(b);
            case "AFTEREND":
                return this.parentNode.insertBefore(b, this.nextSibling);
            default:
                throw new Error('Invalid element position "' + a + '"')
        }
    }
});
(function() {
    function a(a) {
        return a.value ? (a.value = unescape(a.value), a) : null
    }

    function b(a, b, c) {
        var e = a.toString(),
            f = [a.name + "=" + e];
        b && b.indexOf("localhost") < 0 && (b.charAt(0) !== "." && (b = "." + b), f.push("domain=" + b)), c && f.push("expires=" + c.toGMTString()), f.push("path=/"), document.cookie = f.join("; "), d()
    }

    function c(a, b) {
        b && b.charAt(0) != "." && (b = "." + b), b = b ? "; domain=" + b : "", document.cookie = a + "=" + b + "; expires=Sat, 01 Jan 2000 08:00:00 GMT; path=/", d()
    }

    function d() {
        Cookies = {};
        var a = e();
        for (var f in a) Cookies[f] = new Cookie(f, a[f]);
        Cookies.save = b, Cookies.remove = c, Cookies.refresh = d
    }

    function e() {
        return document.cookie.parseNameValuePairs(/\s?;\s?/)
    }
    window.Cookie = function(b, c) {
        var d = this;
        d.name = b, d.raw = c, d.value = unescape(c), d.value.indexOf("=") > -1 && (d.values = d.value.parseNameValuePairs("&", null, a));
        if (d.values) {
            d.parsedValues = {};
            for (var f in d.values) d.parsedValues[f] = d.values[f].parse()
        }
        this.refresh = function() {
            var a = e();
            Cookies[d.name] = new Cookie(d.name, a[d.name])
        }
    }, Cookie.prototype = {
        toString: function() {
            var a = this.values;
            if (!a) return this.value;
            var b = [];
            for (var c in a) b[b.length] = c + "=" + escape(a[c]);
            return b.join("&")
        }
    }, d()
})();
var CookieHelper = function(a) {
    return function(b) {
        if (!Cookies[a]) return undefined;
        Cookies[a].refresh();
        if (typeof b == "string") {
            var c = Cookies[a].values[b];
            return typeof c == "string" ? c.parse() : c
        }
        typeof b == "object" && ($.extend(Cookies[a].values, b), Cookies.save(Cookies[a], "." + document.domain, (new Date).addDays(30)))
    }
};
comm = function(a) {
    function j(a, b, d) {
        if (!g(b)) return;
        var h = a.split(",");
        for (var i = 0; i < h.length; i++) a = h[i], c("listener added for: " + a), (e[a] || (e[a] = [])).push(b), d && (f[a] || (f[a] = [])).push(b)
    }

    function k(a, b, c) {
        if (!b) return;
        for (var d = 0; d < b.length; d++) try {
            b[d](c, a) === !0 && i.stopListening(a, b[d--])
        } catch (e) {
            i.onerror("comm handler error", e)
        }
    }
    var b = function() {},
        c = a && a.log ? function(b) {
            i.debug && (g(i.debug) ? i.debug(b) : a.log(b))
        } : b,
        d = {},
        e = {},
        f = {},
        g = function(a) {
            return Object.prototype.toString.call(a) === "[object Function]"
        },
        h = function(a, b) {
            if (b.indexOf) return b.indexOf(a);
            for (var c = 0, d = b.length; c < d; c++)
                if (b[c] === a) return c;
            return -1
        },
        i = {
            onerror: b,
            own: function(a, b, f) {
                if (d[a]) throw new Error(a + " already registered");
                if (!b) throw new Error("invalid switchboard");
                d[a] = {
                    switchboard: b,
                    before: f
                };
                var g = function(a, b) {
                    k(a, e[a], b)
                };
                return {
                    broadcast: function(b, d) {
                        if (!g) throw new Error("This controller has been abandoned");
                        b = a + "." + b, c("broadcasting: " + b), g(b, d)
                    },
                    abandon: function() {
                        if (!g) throw new Error("This controller has already been abandoned");
                        c("abandoned control of: " + a), delete d[a], g = null
                    }
                }
            },
            listen: function(a, b, c) {
                if (typeof a == "object")
                    for (var d in a) {
                        var e = a[d];
                        if (typeof e != "object") continue;
                        for (var f in e) {
                            var c = f.charAt(0) == "+",
                                g = e[f];
                            j(d + "." + (c ? f.substr(1) : f), g, c)
                        }
                    } else j(a, b, c)
            },
            stopListening: function(a, b) {
                var d = e[a];
                if (!d) return;
                var g = h(b, d);
                if (g == -1) return;
                d.splice(g, 1), d = f[a], d && (g = h(b, d), g > -1 && d.splice(g, 1)), c("listener removed for: " + a)
            },
            send: function(a, b) {
                c("sending: " + a);
                var f = a.match(/([^.]+)(?:\.(.+))?/).slice(1);
                if (f.length != 2) throw new Error("invalid command");
                var g = d[f[0]];
                if (g) {
                    a = f[1];
                    if (g.switchboard[a]) {
                        if (g.before && g.before(a, b)) return;
                        g.switchboard[a](b)
                    } else g.switchboard["*"] && g.switchboard["*"](a, b)
                } else k(a, e[a], b)
            },
            _clearListeners: function() {
                e = {};
                for (var a in f) e[a] = f[a].slice(0)
            }
        };
    return i
}(window.console);
window.scomm || function(a) {
    function m(a) {
        return a && Object.prototype.toString.call(a) == "[object Function]"
    }

    function n(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
    }

    function o(a) {
        if (a.length != 18 && !b.test(a)) return;
        j = 1, scomm = {
            hash: h,
            debug: scomm.debug,
            add: scomm.add,
            remove: scomm.remove,
            send: function(a, b, d, e, g) {
                if (d == h) throw new Error("You cannot talk to yourself");
                d = d || "scomm*";
                var j = {
                    cmd: a,
                    data: b,
                    sender: h,
                    ts: +(new Date),
                    to: d
                };
                d != "scomm*" && (j.token = setTimeout(function() {
                    i("failed to send", j), e && e(a, b, d)
                }, 2e3), g && (f[j.token] = g)), j = d + JSON.stringify(j), i("postMessage to iframe", j), k.contentWindow.postMessage(j, c)
            },
            ready: function(a) {
                a()
            }
        }, i("iframe ready");
        var d;
        while (d = g.shift()) d();
        g = undefined
    }

    function p(a) {
        if (typeof a != "string") return;
        var d;
        a = a.replace(b, function(a) {
            return d = a, ""
        });
        if (!d || d != h && d != "scomm*" && d != "scomm_") return;
        var g = JSON.parse(a);
        if (d == "scomm_") {
            g.cmd == "clear" ? q(g.cmd, null, null) : e[g.callback].apply(this, g.args);
            return
        }
        if (g.sender == h) {
            i("ignoring ourself");
            return
        }
        i("processing message", a);
        if (g.token) {
            if (!g.cmd) {
                clearTimeout(g.token | 0), i("message confirmed");
                var l = f[g.token];
                l && delete f[g.token] && l();
                return
            }
            var j = g.sender + JSON.stringify({
                sender: h,
                ts: +(new Date),
                to: g.sender,
                token: g.token
            });
            i("posting acknowledgement to iframe", j), k.contentWindow.postMessage(j, c)
        }
        q(g.cmd, g.data, g.sender)
    }

    function q(a, b, c) {
        i("triggering handlers");
        for (var e = 0, f = d.length; e < f; e++) d[e](a, b, c) === !0 && scomm.remove(d[e])
    }
    var b = /^scomm\d{13}|scomm\*|scomm_/,
        c = config.urls.cdn ? "https://x.myspacecdn.com" : a.protocol + "//" + a.host,
        d = [],
        e = {},
        f = {},
        g = [],
        h, i = window.console && console.log ? function(a, b) {
            scomm.debug && (m(scomm.debug) ? scomm.debug(a, b) : console.log(a, b))
        } : function() {},
        j, k = document.createElement("iframe");
    try {
        h = sessionStorage.scomm = "scomm" + +(new Date)
    } catch (l) {}
    k.id = "scomm", k.src = config.urls.scomm + "#" + h, k.width = 0, k.height = 0, k.style.border = 0, scomm = {
        hash: h,
        debug: window.location.search.indexOf("scomm=") > -1,
        add: function(a) {
            if (!m(a)) return;
            d.push(a), i("listener added")
        },
        remove: function(a) {
            if (!m(a)) return;
            for (var b = 0, c = d.length; b < c; b++) d[b] === a && d.splice(b, 1);
            i("listener removed")
        },
        ready: function(a) {
            if (!m(a)) return;
            g.push(a)
        },
        send: function(a, b, c, d, e) {
            scomm.ready(function() {
                scomm.send(a, b, c, d, e)
            })
        }
    }, i("adding iframe"), n(window, "message", function(a) {
        i("message received from iframe", a.data);
        if (!j) {
            o(a.data);
            return
        }
        if (a.origin != c) return;
        p(a.data)
    }), h && document.body.appendChild(k)
}(window.location);

function require(a) {
    if ("fs" == a) return {};
    var b = require.resolve(a),
        c = require.modules[b];
    if (!c) throw new Error('failed to require "' + a + '"');
    return c.exports || (c.exports = {}, c.call(c.exports, c, c.exports, require.relative(b))), c.exports
}
require.modules = {}, require.resolve = function(a) {
    var b = a,
        c = a + ".js",
        d = a + "/index.js";
    return require.modules[c] && c || require.modules[d] && d || b
}, require.register = function(a, b) {
    require.modules[a] = b
}, require.relative = function(a) {
    return function(b) {
        if ("." != b.substr(0, 1)) return require(b);
        var c = a.split("/"),
            d = b.split("/");
        c.pop();
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            ".." == f ? c.pop() : "." != f && c.push(f)
        }
        return require(c.join("/"))
    }
}, require.register("ejs.js", function(a, b, c) {
    function h(a) {
        return a.substr(1).split("|").reduce(function(a, b) {
            var c = b.split(":"),
                d = c.shift(),
                e = c.shift() || "";
            return e && (e = ", " + e), "filters." + d + "(" + a + e + ")"
        })
    }

    function i(a, b, c, d) {
        var e = b.split("\n"),
            f = Math.max(d - 3, 0),
            g = Math.min(e.length, d + 3),
            h = e.slice(f, g).map(function(a, b) {
                var c = b + f + 1;
                return (c == d ? " >> " : "    ") + c + "| " + a
            }).join("\n");
        throw a.path = c, a.message = (c || "ejs") + ":" + d + "\n" + h + "\n\n" + a.message, a
    }
    var d = c("./utils"),
        e = c("fs");
    b.version = "0.6.1";
    var f = b.filters = c("./filters"),
        g = {};
    b.clearCache = function() {
        g = {}
    };
    var j = b.parse = function(a, c) {
            var c = c || {},
                d = c.open || b.open || "<%",e=c.close||b.close||"%>",
                f = ["var buf = [];", "\nwith (locals) {", "\n  buf.push('"],
                g = 1;
            for (var i = 0, j = a.length; i < j; ++i)
                if (a.slice(i, d.length + i) == d) {
                    i += d.length;
                    var k, l, m = "__stack.lineno=" + g;
                    switch (a.substr(i, 1)) {
                        case "=":
                            k = "', escape((" + m + ", ", l = ")), '", ++i;
                            break;
                        case "-":
                            k = "', (" + m + ", ", l = "), '", ++i;
                            break;
                        default:
                            k = "');" + m + ";", l = "; buf.push('"
                    }
                    var n = a.indexOf(e, i),
                        o = a.substring(i, n),
                        p = i,
                        q = 0;
                    while (~(q = o.indexOf("\n", q))) q++, g++;
                    o.substr(0, 1) == ":" && (o = h(o)), f.push(k, o, l), i += n - p + e.length - 1
                } else a.substr(i, 1) == "\\" ? f.push("\\\\") : a.substr(i, 1) == "'" ? f.push("\\'") : a.substr(i, 1) == "\r" ? f.push(" ") : a.substr(i, 1) == "\n" ? (f.push("\\n"), g++) : f.push(a.substr(i, 1));
            return f.push("');\n}\nreturn buf.join('');"), f.join("")
        },
        k = b.compile = function(a, c) {
            c = c || {};
            var e = JSON.stringify(a),
                g = c.filename ? JSON.stringify(c.filename) : "undefined";
            a = ["var __stack = { lineno: 1, input: " + e + ", filename: " + g + " };", i.toString(), "try {", b.parse(a, c), "} catch (err) {", "  rethrow(err, __stack.input, __stack.filename, __stack.lineno);", "}"].join("\n"), c.debug && console.log(a);
            var h = new Function("locals, filters, escape", a);
            return function(a) {
                return h.call(this, a, f, d.escape)
            }
        };
    b.render = function(a, b) {
        var c, b = b || {};
        if (b.cache) {
            if (!b.filename) throw new Error('"cache" option requires "filename".');
            c = g[b.filename] || (g[b.filename] = k(a, b))
        } else c = k(a, b);
        return b.__proto__ = b.locals, c.call(b.scope, b)
    }, b.renderFile = function(a, c, d) {
        var f = a + ":string";
        "function" == typeof c && (d = c, c = {}), c.filename = a;
        try {
            var g = c.cache ? b.cache[f] || (b.cache[f] = e.readFileSync(a, "utf8")) : e.readFileSync(a, "utf8");
            d(null, b.render(g, c))
        } catch (h) {
            d(h)
        }
    }, b.__express = b.renderFile, c.extensions ? c.extensions[".ejs"] = function(a, b) {
        source = c("fs").readFileSync(b, "utf-8"), a._compile(k(source, {}), b)
    } : c.registerExtension && c.registerExtension(".ejs", function(a) {
        return k(a, {})
    })
}), require.register("filters.js", function(a, b, c) {
    b.first = function(a) {
        return a[0]
    }, b.last = function(a) {
        return a[a.length - 1]
    }, b.capitalize = function(a) {
        return a = String(a), a[0].toUpperCase() + a.substr(1, a.length)
    }, b.downcase = function(a) {
        return String(a).toLowerCase()
    }, b.upcase = function(a) {
        return String(a).toUpperCase()
    }, b.sort = function(a) {
        return Object.create(a).sort()
    }, b.sort_by = function(a, b) {
        return Object.create(a).sort(function(a, c) {
            return a = a[b], c = c[b], a > c ? 1 : a < c ? -1 : 0
        })
    }, b.size = b.length = function(a) {
        return a.length
    }, b.plus = function(a, b) {
        return Number(a) + Number(b)
    }, b.minus = function(a, b) {
        return Number(a) - Number(b)
    }, b.times = function(a, b) {
        return Number(a) * Number(b)
    }, b.divided_by = function(a, b) {
        return Number(a) / Number(b)
    }, b.join = function(a, b) {
        return a.join(b || ", ")
    }, b.truncate = function(a, b) {
        return a = String(a), a.substr(0, b)
    }, b.truncate_words = function(a, b) {
        var a = String(a),
            c = a.split(/ +/);
        return c.slice(0, b).join(" ")
    }, b.replace = function(a, b, c) {
        return String(a).replace(b, c || "")
    }, b.prepend = function(a, b) {
        return Array.isArray(a) ? [b].concat(a) : b + a
    }, b.append = function(a, b) {
        return Array.isArray(a) ? a.concat(b) : a + b
    }, b.map = function(a, b) {
        return a.map(function(a) {
            return a[b]
        })
    }, b.reverse = function(a) {
        return Array.isArray(a) ? a.reverse() : String(a).split("").reverse().join("")
    }, b.get = function(a, b) {
        return a[b]
    }, b.json = function(a) {
        return JSON.stringify(a)
    };
    var d = /\[([^\s|]+)\|(lnk.ms\/\w+)\]/g;
    b.linkify = function(a) {
        return a ? a.replace(d, function(a, b, c) {
            return '<a href="http://' + c + '" target="_blank">' + b + "</a>"
        }) : a
    }
}), require.register("utils.js", function(a, b, c) {
    b.escape = function(a) {
        return String(a).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }
});
(function() {
    function a() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = Math.random() * 16 | 0,
                c = a == "x" ? b : b & 3 | 8;
            return c.toString(16)
        })
    }
    Myspace = Myspace || {}, Myspace.Utils = Myspace.Utils || {}, Myspace.Utils.guid = a
})();
var dateFormat = function() {
    var a = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        b = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        c = /[^-+\dA-Z]/g,
        d = function(a, b) {
            a = String(a), b = b || 2;
            while (a.length < b) a = "0" + a;
            return a
        };
    return function(e, f, g) {
        var h = dateFormat;
        arguments.length == 1 && Object.prototype.toString.call(e) == "[object String]" && !/\d/.test(e) && (f = e, e = undefined), e = e ? new Date(e) : new Date;
        if (isNaN(e)) throw SyntaxError("invalid date");
        f = String(h.masks[f] || f || h.masks["default"]), f.slice(0, 4) == "UTC:" && (f = f.slice(4), g = !0);
        var i = g ? "getUTC" : "get",
            j = e[i + "Date"](),
            k = e[i + "Day"](),
            l = e[i + "Month"](),
            m = e[i + "FullYear"](),
            n = e[i + "Hours"](),
            o = e[i + "Minutes"](),
            p = e[i + "Seconds"](),
            q = e[i + "Milliseconds"](),
            r = g ? 0 : e.getTimezoneOffset(),
            s = {
                d: j,
                dd: d(j),
                ddd: h.i18n.dayNames[k],
                dddd: h.i18n.dayNames[k + 7],
                m: l + 1,
                mm: d(l + 1),
                mmm: h.i18n.monthNames[l],
                mmmm: h.i18n.monthNames[l + 12],
                yy: String(m).slice(2),
                yyyy: m,
                h: n % 12 || 12,
                hh: d(n % 12 || 12),
                H: n,
                HH: d(n),
                M: o,
                MM: d(o),
                s: p,
                ss: d(p),
                l: d(q, 3),
                L: d(q > 99 ? Math.round(q / 10) : q),
                t: n < 12 ? "a" : "p",
                tt: n < 12 ? "am" : "pm",
                T: n < 12 ? "A" : "P",
                TT: n < 12 ? "AM" : "PM",
                Z: g ? "UTC" : (String(e).match(b) || [""]).pop().replace(c, ""),
                o: (r > 0 ? "-" : "+") + d(Math.floor(Math.abs(r) / 60) * 100 + Math.abs(r) % 60, 4),
                S: ["th", "st", "nd", "rd"][j % 10 > 3 ? 0 : (j % 100 - j % 10 != 10) * j % 10]
            };
        return f.replace(a, function(a) {
            return a in s ? s[a] : a.slice(1, a.length - 1)
        })
    }
}();
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
}, dateFormat.i18n = {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Date.prototype.format = function(a, b) {
    return dateFormat(this, a, b)
};
(function() {
    Myspace = Myspace || {};
    var a = {};
    Object.defineProperty(a, "isLoggedIn", {
        get: function() {
            return context.profileId > 0
        }
    }), Object.defineProperty(a, "authContext", {
        get: function() {
            return Cookies.auth_context && Cookies.auth_context.values || {}
        },
        set: function(a) {
            Cookies.auth_context || (Cookies.auth_context = new Cookie("auth_context")), Cookies.auth_context.values = a, Cookies.save(Cookies.auth_context, document.domain)
        }
    }), a.clearAuthContext = function() {
        a.authContext = {}, Cookies.remove("auth_context", document.domain)
    }, Myspace.User = a
})();
(function(a) {
    function d(b) {
        var c = b || window.event,
            d = [].slice.call(arguments, 1),
            e = 0,
            f = !0,
            g = 0,
            h = 0;
        return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120), c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d)
    }
    var b = ["DOMMouseScroll", "mousewheel"];
    if (a.event.fixHooks)
        for (var c = b.length; c;) a.event.fixHooks[b[--c]] = a.event.mouseHooks;
    a.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var a = b.length; a;) this.addEventListener(b[--a], d, !1);
            else this.onmousewheel = d
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var a = b.length; a;) this.removeEventListener(b[--a], d, !1);
            else this.onmousewheel = null
        }
    }, a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    }), a("body").delegate("div.horizontalContent:not(.nowheeljack) > div, div.horizontal:not(.nowheeljack) > ul, #drawer div.horizontal", "mousewheel", function(a, b, c, d) {
        Math.abs(d) >= Math.abs(c) && (this.scrollLeft -= d * 30, a.preventDefault())
    })
})(jQuery);
var Myspace = Myspace || {};
Myspace.DragDropManager = function(a) {
    function i(e) {
        var f;
        j(e), k(), window.context.features.isPlayerQueueSortable ? f = '[draggable="true"]:not(#mixes [draggable="true"]):not(#friendsGrid [draggable="true"]):not(.manage [draggable="true"]):not(.queue [draggable="true"]):not(#profilePortfolio.editing [draggable=true])' : f = '[draggable="true"]:not(#mixes [draggable="true"]):not(#friendsGrid [draggable="true"]):not(.manage [draggable="true"]):not(#profilePortfolio.editing [draggable=true])', a("body").delegate(f, "dragstart", function(e) {
            var f;
            c = a(e.target).closest('[draggable="true"]'), d.dragStart(e, c);
            if (!b || b.length == 0) b = a('<div id="ghost"></div>'), a("#container").append(b);
            b.html(d.dragContent()), a(this).bind("dragend", function(a) {
                m(a)
            }), f = e.originalEvent.dataTransfer, f.setData("Text", d.dragText()), f.effectAllowed = "copy", f.dropEffect = "copy", f.setDragImage && f.setDragImage(b[0], 20, 20), g = !0
        })
    }

    function j(a) {
        d = {
            droppables: a.droppables || [],
            ignoreSelectors: a.ignoreSelectors,
            dragText: a.dragText || h,
            dragContent: a.dragContent || h,
            dragStart: a.dragStart || h,
            dragEnd: a.dragEnd || h,
            dragEnter: a.dragEnter || h,
            dragLeave: a.dragLeave || h,
            drop: a.drop || h,
            dragOverLogic: a.dragOverLogic
        }
    }

    function k() {
        for (var b = 0, c = d.droppables.length; b < c; b++) d.droppables[b].not('[data-droptarget="true"]').each(function() {
            l(a(this))
        })
    }

    function l(a) {
        a.bind("dragenter", function(a) {
            c && (e = !0, n(a))
        }), a.bind("dragover", function(a) {
            c && (e = !0, o(a))
        }), a.bind("dragleave", function(a) {
            c && (e = !1, p(a))
        }), a.bind("drop", function(a) {
            c && (e = !1, q(a))
        }), a.attr("data-droptarget", "true")
    }

    function m(b) {
        return b.preventDefault(), c = null, u.reset(b, function(a, b) {
            d.dragEnd(a, b)
        }), a(b.target).unbind("dragend"), g = !1, !1
    }

    function n(a) {
        return a.preventDefault(), u.enter(a, function(a, b, c) {
            f = d.dragOverLogic(a, b), d.dragEnter(a, b, c)
        }), !1
    }

    function o(a) {
        a.preventDefault();
        var b = a.originalEvent.dataTransfer;
        return b.dropEffect = f ? "copy" : "none", !1
    }

    function p(a) {
        return a.preventDefault(), u.leave(a, function(a, b) {
            d.dragLeave(a, b)
        }), !1
    }

    function q(a) {
        return a.preventDefault(), u.reset(a, function(a, b) {
            d.drop(a, b)
        }), !1
    }

    function r(a) {
        d.droppables.push(a), k()
    }

    function s() {
        return e
    }

    function t() {
        return g
    }
    var b, c, d, e = !1,
        f = !0,
        g = !1,
        h = function() {
            return ""
        },
        u = {
            count: 0,
            $droppable: null,
            enter: function(b, d) {
                var e = a(b.delegateTarget),
                    f = "up";
                if (c[0] == e[0]) return d(b, e);
                this.count++;
                if (!this.$droppable || this.$droppable[0] != e[0]) c.index() < e.index() && (f = "down"), this.$droppable = e, d(b, e, f)
            },
            leave: function(b, d) {
                var e = a(b.delegateTarget);
                if (c[0] == e[0]) return d(b, e);
                this.count--;
                if (this.$droppable && this.$droppable[0] != e[0] || this.count === 0) d(b, e), this.count === 0 && (this.$droppable = null)
            },
            reset: function(a, b) {
                this.$droppable ? b(a, this.$droppable) : b(a), this.$droppable = null, this.count = 0
            }
        };
    return {
        init: i,
        addDroppables: r,
        isOverDroppable: s,
        isBeingDragged: t
    }
}(jQuery);
var Myspace = Myspace || {};
Myspace.DragDrop = function(a) {
    function t() {
        return b.title + " by " + b.author
    }

    function u() {
        return "<strong>" + b.title + "</strong><span>" + b.author + "</span>"
    }

    function v() {
        p && clearInterval(p)
    }

    function w(b, c) {
        a("#mixData").length && (c = a("#mixData")), m ? (v(), p = setInterval(function() {
            var a = d - e,
                b = c[0].scrollTop;
            if (a >= 0 && a < 100 && b !== 0) c[0].scrollTop = b - 10;
            else {
                var g = e + f - d;
                g < 100 && (c[0].scrollTop = b + 10)
            }
        }, 50)) : v()
    }

    function x(a) {
        return a.height() < a.prop("scrollHeight")
    }

    function y(k, l) {
        c = l, b = objectify(l.find(".playBtn")), H(), r = h.attr("data-panel"), j = !1, N() ? (g.removeClass("queueOpen"), j = !0, a("#mixData").length ? q = a("#mixData") : q = c.parent().parent(), m = x(q), m && (e = q.position().top, f = q.height(), q.bind("dragover", function(a) {
            d = a.originalEvent.pageY
        }))) : (n = setTimeout(function() {
            g.addClass("dropZone"), comm.send("drawer.open", "mixes")
        }, 200), b.type === "mix" ? i.find("li.mix,li.connectedMix,li.newMix,li.radio").addClass("hide") : b.radioStationEntityKey || i.find("li.radio").addClass("hide")), setTimeout(function() {
            comm.send("hcard.hide")
        }, 100)
    }

    function A(a, b) {
        clearTimeout(n), clearTimeout(o), comm.send("drawer.panel", r), h.hasClass("pinned") || comm.send("drawer." + (z ? "closeOnLeave" : "close")), j && b && b.removeClass("up down"), i.find("li").removeClass("hide"), l || (g.removeClass("dropZone"), b && b.removeClass("hovered")), l = !1, q && (q.unbind("dragover"), v())
    }

    function B(a, b, c) {
        k = O(b), j ? M(b) ? (b.addClass(c), g.removeClass("queueOpen dropZone")) : (g.addClass("dropZone"), comm.send("drawer.open", "mixes"), b.addClass("hovered")) : O(b) && b.addClass("hovered")
    }

    function C(a, b) {
        j && (M(b) && (clearTimeout(o), o = setTimeout(function() {
            Myspace.DragDropManager.isOverDroppable() || (g.addClass("dropZone"), comm.send("drawer.open", "mixes"))
        }, 500)), b.removeClass("up down")), b.removeClass("hovered")
    }

    function D(a, d) {
        var e = d.parent(),
            f = c.parent();
        return e.hasClass("table") && e.hasClass("own") && f[0] != e[0] ? !1 : b.type === "mix" && d.attr("id") === "createMix" ? !1 : (e.hasClass("table") && e.hasClass("own") && w(a, e.parent()), !0)
    }

    function E(a, d) {
        var e = {},
            f = c.parent();
        if (j && !k) l = !0, d.hasClass("up") ? (d.removeClass("up"), d.before(c)) : d.hasClass("down") && (d.removeClass("down"), d.after(c)), f.scroll(), e.mediaType = b.mediaType, e.sequenceId = b.sequenceId, e.beforeSequenceId = c.next().find(".playBtn").data("sequence-id") || null, e.objectVersion = f.data("objectversion"), e.playlistId = f.data("playlistid"), comm.send("mix.moveItem", e), g.removeClass("dropZone"), clearTimeout(o);
        else if (k) {
            l = !0;
            switch (d.data("dest")) {
                case "playNext":
                    J("insert");
                    break;
                case "playLast":
                    J("append");
                    break;
                case "radio":
                    K();
                    break;
                case "createMix":
                    Myspace.User.isLoggedIn ? I(d, "create") : comm.send("login.prompt");
                    break;
                case "message":
                    Myspace.User.isLoggedIn ? F() : comm.send("login.prompt");
                    break;
                case "sendinstantmessage":
                    G(d.data("entityKey"));
                    break;
                default:
                    I(d, "addItem")
            }
            d.removeClass("hovered").addClass("active"), setTimeout(function() {
                d.removeClass("active"), g.removeClass("dropZone")
            }, 500)
        }
    }

    function F() {
        r = "messaging", comm.send("messaging.popout", b)
    }

    function G(a) {
        var c = b.entityKey;
        Myspace.MessagingManager.getMediaHtml(c).done(function(b) {
            var d = {
                toEntity: a,
                mediaEntityKey: c,
                mediaHtml: b
            };
            Myspace.Messages.messagesProvider.sendMessage(d)
        })
    }

    function H() {
        var a, c, d, e = b.type ? b.type : b.mediaType;
        e === "mixtape" ? e = "mix" : b.type === "song" && (e = "audio"), b.mediaId ? d = b.mediaId : d = e === "audio" ? b.songId : b.videoId;
        switch (e) {
            case "video":
                a = b.title, c = b.artistName;
                break;
            case "mix":
                a = b.title, c = b.owner;
                break;
            case "radio":
                a = b.name, c = "";
                break;
            case "album":
            case "audio":
                a = b.title, c = b.artistName;
                break;
            default:
                a = "", c = ""
        }
        b.title = a, b.author = c, b.mediaId = d, b.type = e
    }

    function I(c, d) {
        var e = {},
            f;
        e.onSuccess = function(d) {
            var e, f = c.find(".playBtn");
            f.length ? e = f.data("title") : typeof d == "string" && (e = d), typeof d == "object" && a(".table.own").length && comm.send("table.newItem", d), comm.send("toasts.new", {
                html: "<li>" + htmlEncode(b.title) + "<br />was added to<br />" + htmlEncode(e) + "</li>",
                timeout: 3e3
            })
        }, b.type === "audio" ? (e.mediaId = b.songId, e.mediaType = "audio", b.mediaReleaseId && (e.releaseId = b.mediaReleaseId)) : b.type === "album" ? (e.mediaId = b.albumId, e.mediaType = "album") : b.type === "video" && (e.mediaId = b.mediaId, e.mediaType = "video", b.mediaReleaseId && (e.releaseId = b.mediaReleaseId)), d == "addItem" ? (f = c.find(".playBtn"), e.playlistId = f.data("playlist-id"), e.objectVersion = f.data("object-version"), comm.send("mix." + d, e)) : (e.title = b.title, comm.send("mix." + d, e))
    }

    function J(a) {
        var c = b.type;
        c === "mix" ? comm.send("queue." + a + ".mixtape", b) : c === "album" ? comm.send("queue." + a + ".album", b) : c === "audio" ? comm.send("queue." + a + ".song", b) : c === "video" && comm.send("queue." + a + ".video", b), r = "queue"
    }

    function K() {
        comm.send("radio.start", {
            radioStationEntityKey: b.radioStationEntityKey,
            name: b.title,
            imageUrl: b.imageUrl
        })
    }

    function L() {
        comm.send("connect", {
            entityKey: b.entityKey,
            onSuccess: function(a) {
                b.type === "mix" && (comm.send("connect.status", {
                    entityKey: b.entityKey
                }), comm.send("mix.addConnected", {
                    playlistId: b.playlistId,
                    profileId: b.profileId
                }))
            }
        })
    }

    function M(a) {
        return a.parent().hasClass("table")
    }

    function N() {
        return (b.type === "audio" || b.type === "video") && c.parent().hasClass("own")
    }

    function O(a) {
        return a.parent().parent().parent().attr("id") === "mixes" || a.hasClass("chat")
    }

    function P() {
        Myspace.DragDropManager.init(s)
    }

    function Q(a) {
        Myspace.DragDropManager.addDroppables(a)
    }
    var b, c, d = 0,
        e = 0,
        f = 0,
        g = a("body"),
        h = a("#drawer"),
        i = a("#mixes"),
        j = !1,
        k = !1,
        l = !1,
        m = !1,
        n, o, p, q, r = h.attr("data-panel"),
        s = {
            droppables: [a("#mixes").find("li.mix,li.util")],
            dragText: t,
            dragContent: u,
            dragStart: y,
            dragEnd: A,
            dragEnter: B,
            dragLeave: C,
            drop: E,
            dragOverLogic: D
        },
        z;
    return g.on("dragenter", function(c) {
        z = !!a(c.target).closest("#footer").length
    }), P(), {
        addDroppables: Q
    }
}(jQuery);
var Myspace = Myspace || {};
(function(a) {
    function f(a) {
        var c = b,
            d = a.$root[0],
            e = 0,
            f = c.length,
            g;
        b = [];
        for (; e < f; e++) g = c[e], g.$root[0] != d && b.push(g)
    }

    function g() {
        var a, c = b.length,
            f;
        if (c) {
            a = b[c - 1], f = a.$root;
            if (f.hasClass("lightbox") && d.hasClass("donotescape")) return;
            a.hide(), a.options.closeAll && h()
        }
        e = !1
    }

    function h(a) {
        var c = a && a.jquery ? a[0] : a,
            d = 0,
            e = b.length,
            f;
        for (; d < e; d++) f = b[d], f.$root[0] != c && (f.hide(), e--, d--)
    }
    var b = [],
        c = a("#dialogCover"),
        d = a("#lightboxCover"),
        e;
    comm.listen("page.esc", function() {
        e ? e = !1 : g()
    }, !0), comm.listen("upload.browseOpen", function() {
        e = !0
    }, !0), comm.listen("upload.browseClose", function() {
        e = !1
    }, !0), d.children(".close, .info").click(g), comm.listen("spaceway.page.loading", h, !0), Myspace.Dialog = function(e, g) {
        function o(a) {
            if (m) return;
            g.closeAll && h(j), i("showing", j), k || l.click(p), g.noClose && l.addClass("donotescape"), g.onShow(), g.noCover || l.removeClass("hide"), g.centerDialog && r(), j.addClass("open").removeClass("close"), a || j.find("input[type=text], input[type=email], input[type=password], textarea").first().focus(), m = !0, b.push(t)
        }

        function p() {
            if (m == 0) return;
            g.onHide(), k ? (!g.closeAll && b.length > 1 || l.addClass("hide"), l.removeClass("donotescape")) : l.addClass("hide"), j.addClass("close"), g.className && j.removeClass(g.className), setTimeout(function() {
                m || j.removeClass("open").removeClass("close")
            }, 500), m = !1, k || l.off("click", p), f(t), i("hiding", j), g.onAfterHide()
        }

        function q() {
            m ? p() : o()
        }

        function r() {
            var b = j.outerWidth() / 2,
                c = j.outerHeight() / 2,
                d;
            d || (d = a("#global-nav").outerHeight() || 60), c += d / 2, j.css({
                "margin-left": "-" + b + "px",
                "margin-top": "-" + c + "px"
            })
        }

        function s() {
            return !m
        }
        var j = a(e),
            k = j.hasClass("lightbox"),
            l = k ? d : c,
            m = j.hasClass("open"),
            n = {
                centerDialog: !0,
                closeAll: !0,
                onLoad: a.noop,
                onShow: a.noop,
                onHide: a.noop,
                onAfterHide: a.noop,
                noClose: !1,
                noCover: !1
            };
        g = a.extend({}, n, g), j.find(".close").click(p);
        var t = {
            show: o,
            hide: p,
            toggle: q,
            center: r,
            isClosed: s,
            $root: j,
            options: g
        };
        return m && b.push(t), t
    };
    var i = comm.own("dialog", {
            closeAll: h,
            isOpen: function(a) {
                typeof a == "function" && a(b.length)
            }
        }).broadcast,
        j = {
            html: "",
            close: !0,
            buttons: [{
                text: "OK",
                classes: "primary",
                click: function() {},
                setFocus: !0
            }]
        };
    Myspace.genericDialog = function(b) {
        var c = b.id || "genericDialog",
            d = a('<article id="' + c + '" class="dialog"></article>').appendTo("body"),
            e;
        b = a.extend({}, j, b), d.addClass(b.classes), b.close && a('<i class="close x_14">Close</i>').appendTo(d), b.html && a(b.html).appendTo(d);
        if (b.buttons && b.buttons.length) {
            var f = a("<footer>").appendTo(d),
                g = 0,
                h = b.buttons.length,
                i;
            for (; g < h; g++) {
                i = b.buttons[g];
                var k = a("<button>").appendTo(f).addClass(i.classes).text(i.text);
                k.click(function(b) {
                    return function(c) {
                        if (a.isFunction(b.click) && b.click(c) === !1) return;
                        return l.hide(), !1
                    }
                }(i)), i.setFocus && (e = k)
            }
        }
        var l = Myspace.Dialog(d, b);
        return comm.listen("dialog.hiding", function(a) {
            a.attr("id") == c && setTimeout(function() {
                l.$root.remove()
            }, 500)
        }), l.show(), e && e.focus(), delete l.show, l
    }, Myspace.noticeBoard = function(a) {
        a.id = "noticeBoard";
        var b = Myspace.genericDialog(a);
        return b
    }, Myspace.successDialog = function(a, b) {
        b && (b = "<h4>" + b + "</h4>");
        var c = Myspace.genericDialog({
            html: "<section>" + (b || "") + "<span>&nbsp;</span><span>" + a + "</span></section>",
            close: !1,
            buttons: null,
            id: "successDialog"
        });
        setTimeout(function() {
            c.hide()
        }, 4e3)
    }, Myspace.errorDialog = function(a) {
        var b = Myspace.genericDialog({
            html: "<section><span>" + a + "</span></section>",
            close: !1,
            closeAll: !1,
            buttons: null,
            id: "errorDialog"
        });
        setTimeout(function() {
            b.hide()
        }, 4e3)
    }
})(jQuery),
function(a) {
    function i(h) {
        b = a('<article id="confirmDialog" class="dialog"></dialog><p></p><div class="actions"><button class="no"></button><button class="yes primary"></button></div></article>'), c = b.children("p"), d = b.children(".actions"), e = d.children(".no"), f = d.children(".yes"), a("body").append(b), g = new Myspace.Dialog(b, h)
    }
    var b, c, d, e, f, g = null,
        h = {
            text: "Are you sure?",
            no: {
                text: "No thanks.",
                onClick: function() {}
            },
            yes: {
                text: "Yes please.",
                onClick: function() {}
            }
        };
    Myspace.Error = function(b) {
        var c = {
                text: "Oops, something went wrong and we were unable to complete your request.  Do you want to try again?",
                no: {
                    text: "No"
                },
                yes: {
                    text: "Retry"
                },
                closeAll: !1
            },
            d = a.extend(!0, {}, c, b);
        Myspace.Confirm(d)
    }, Myspace.Confirm = function(b) {
        function d() {
            k(), b.onLoad && b.onLoad(), g.show(), f.focus()
        }

        function j() {
            g.hide()
        }

        function k() {
            c.html(b.text), e.toggleClass("hide", b.no === !1).text(b.no.text || "").unbind("click").click(function() {
                return b.no.onClick(), j(), !1
            }), f.toggleClass("hide", b.yes === !1).text(b.yes.text || "").unbind("click").click(function() {
                return b.yes.onClick(), j(), !1
            })
        }
        g || i(b), b = a.extend(!0, {}, h, b), b.beforeShow && b.beforeShow(g), d()
    }
}(jQuery);
(function() {
    function d() {
        if (context.pfc) {
            var a = e(context.pfc);
            f(a)
        }
    }

    function e(a) {
        for (var b in c)
            if (~c[b].indexOf(a.toLowerCase())) return b
    }

    function f(c) {
        var d = a.find("." + c);
        b.removeClass("selected"), d.length && (b = d.addClass("selected"))
    }
    var a = $("#unifiedSidebar"),
        b = $(".selected", a),
        c = {
            search: ["search", "searchsongs", "searchartists", "searchalbums", "searchpeople", "searchmixes", "searchvideos"],
            featured: ["splash", "discoverfeatured"],
            music: ["discovermusicsongs", "discovermusicalbums", "discovermusicartists", "discovermixes"],
            videos: ["discovervideoshighrotation", "discovervideosrecommended", "discovervideosnewreleases"],
            people: ["discoverpeople"],
            radio: ["discoverradio"],
            stream: ["home"],
            mixes: ["librarymixes"],
            connections: ["homeconnectionsrecent", "homeconnectionsboth", "homeconnectionsout", "homeconnectionsin", "library", "libraryalbums", "libraryphotos", "libraryvideos", "libraryarticles"],
            uploads: ["managephotos", "managemusic", "managevideos"],
            insights: ["insightshighlights", "insightsmusic", "insightsprofile", "insightsphotos", "insightsmixes", "insightsaudience", "insightsvideos"]
        };
    a.on("click", "li", function() {
        var a = $(this);
        b.removeClass("selected"), a.addClass("selected"), b = a
    }).on("click", "[data-action]", function() {
        var a = $(this),
            b = a.data("action")
    }), $("#searchQuery").on("click", function(a) {
        var b = $(this),
            c = b.data("action");
        return comm.send("search.overlay"), !1
    }), $("#sign-up").click(function(a) {
        comm.send("signup.show", {
            reset: !0,
            context: {
                action: "signUpFooter"
            }
        })
    }), $("#sign-in").click(function(a) {
        comm.send("login.show", {
            context: {
                action: "signInFooter"
            }
        })
    }), comm.listen("spaceway.page.complete", function() {
        d()
    }, !0), d()
})();
(function() {
    var a = $("#global-nav nav");
    a.find(".signUp").click(function(a) {
        a.preventDefault(), comm.send("signup.show", {
            reset: !0,
            context: {
                action: "signUpFooter"
            }
        })
    }), a.find(".signIn").click(function(a) {
        a.preventDefault(), comm.send("login.show", {
            context: {
                action: "signInFooter"
            }
        })
    }), comm.listen("username.changed", function(b) {
        a.find("li[data-name=profile] > a").attr("href", "/" + b)
    }, !0), comm.listen("fullName.changed", function(b) {
        a.find("li[data-name=profile] > a > span").text(b)
    }, !0)
})();
Myspace.Slider = function(a, b) {
    function l() {
        var b = e[h](!0),
            c = a[h](),
            d = a.offset()[i] + b / 2,
            f = d + c - b;
        return {
            min: d,
            max: f,
            distance: f - d,
            outer: c
        }
    }

    function m(f) {
        if (a.attr("disabled")) return;
        k = !0, a.addClass("dragging");
        var h = l(),
            m = e.position()[i],
            n = f[g];
        return n = (n < h.min ? h.min : n > h.max ? h.max : n) - h.min, j[i] = b.units == "px" ? n + "px" : n / h.distance * 100 + "%", b.start.call(e[0], n, h.distance), d.mousemove(function(a) {
            n = a[g], n = (n < h.min ? h.min : n > h.max ? h.max : n) - h.min, n != m && (j[i] = b.units == "px" ? (m = n) + "px" : (m = n) / h.outer * 100 + "%", b.drag.call(e[0], n, h.distance))
        }), c.one("mouseup", function() {
            k = !1, a.removeClass("dragging"), d.unbind("mousemove"), b.stop.call(e[0], n, h.distance)
        }), !1
    }
    b = {
        axis: b.axis || "y",
        units: b.units || "px",
        start: b.start || $.noop,
        drag: b.drag || $.noop,
        stop: b.stop || $.noop,
        jump: b.jump || $.noop
    };
    var c = $(window),
        d = $("body"),
        e = a.find(".handle").length > 0 ? a.find(".handle") : $('<div class="handle">').appendTo(a),
        f = b.axis == "x",
        g = f ? "pageX" : "pageY",
        h = f ? "outerWidth" : "outerHeight",
        i = f ? "left" : "top",
        j = e[0] && e[0].style,
        k;
    a.click(function(c) {
        if (a.attr("disabled")) return;
        var d = c[g],
            f = l();
        d = (d < f.min ? f.min : d > f.max ? f.max : d) - f.min, j[i] = b.units == "px" ? d + "px" : d / f.distance * 100 + "%", b.jump.call(e[0], d, f.distance)
    }), a.mousedown(m), e.mousedown(m).click(function(a) {
        return !1
    }), this.percent = function(a) {
        if (k) return this;
        a = a > 1 ? 1 : a < 0 ? 0 : a;
        var b = l(),
            c = a * b.distance;
        return j[i] = c / b.distance * 100 + "%", this
    }
};
(function() {
    function a(a, b) {
        function d() {
            c && clearTimeout(c), c = null
        }

        function e() {
            return d(), c = setTimeout(a, b), this
        }

        function f() {
            return d(), this
        }
        var c = null;
        return {
            reset: e,
            stop: f,
            start: e
        }
    }
    window.Myspace = window.Myspace || {}, Myspace.ResetTimer = a
})();
(function() {
    function b(a) {
        var b = new Date(a),
            e = new Date,
            f = {
                updatedTimeStamp: "",
                ignore: !0
            },
            g = e - b;
        if (g < 0) f.ignore = !1, f.updatedTimeStamp = "just now";
        else {
            var h = new Date(g),
                i = h.getUTCFullYear() - 1970,
                j = h.getUTCMonth();
            if (i > 0 || j > 0) f.updatedTimeStamp = c(b);
            else {
                var k = h.getUTCDate();
                if (k > 1) k--, k == 1 ? (f.ignore = !1, f.updatedTimeStamp = "Yesterday at " + d(b)) : f.updatedTimeStamp = c(b);
                else {
                    f.ignore = !1;
                    var l = h.getUTCHours();
                    if (l > 0) f.updatedTimeStamp = l == 1 ? "1 hour ago" : l + " hours ago";
                    else {
                        var m = h.getUTCMinutes();
                        m == 0 ? f.updatedTimeStamp = "just now" : m == 1 ? f.updatedTimeStamp = "1 min ago" : f.updatedTimeStamp = m + " mins ago"
                    }
                }
            }
        }
        return f
    }

    function c(b) {
        var c = b.getDate(),
            e = b.getMonth(),
            f = b.getFullYear();
        return c = c < 10 ? "0" + c : c, a[e] + " " + c + ", " + f + " at " + d(b)
    }

    function d(a) {
        var b = a.getHours(),
            c = a.getMinutes(),
            d = b >= 12 ? "PM" : "AM";
        return b %= 12, b = b ? b < 10 ? "0" + b : b : 12, c = c < 10 ? "0" + c : c, b + ":" + c + " " + d
    }

    function e(b) {
        var c = new Date(b),
            d = c.getDate();
        return {
            year: c.getFullYear(),
            day: d < 10 ? "0" + d : d,
            month: a[c.getMonth()],
            ignore: !0
        }
    }

    function f() {
        $("time[datetime][updated!='true'][pubdate!='true']").each(function() {
            var a = $(this),
                c;
            a.data("convertTo") === "local" ? (c = e(a.attr("datetime")), a.find(".month").text(c.month), a.find(".date").text(c.day)) : (c = b(a.attr("datetime")), a.html("<b>" + c.updatedTimeStamp + "</b>")), c.ignore && $(this).attr("updated", "true")
        })
    }
    var a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    setInterval(function() {
        f()
    }, 6e4), comm.listen("spaceway.page.complete,page.changed", function() {
        f()
    }, !0), f()
})();
(function() {
    function e(e) {
        d || (a = document.title, document.title = b = e, d = !0, c = setInterval(function() {
            var c = document.title === b;
            c || (a = document.title), document.title = c ? a : b
        }, 2e3))
    }

    function f() {
        d = !1, clearInterval(c), document.title === b && (document.title = a)
    }
    var a = "",
        b = "",
        c, d = !1;
    comm.listen("title.startflashing", e, !0), comm.listen("title.stopflashing", f, !0), scomm.add(function(a) {
        if (a !== "title.stopflashing") return;
        f()
    })
})();
(function(a) {
    function b(b, c) {
        c = c || !1, b.on("click", ".delete", function(b) {
            var c = a(b.currentTarget).closest(".notification"),
                f = c.data("isRequest"),
                g = c.data("renderTime"),
                h = c.data("notificationId");
            return f ? d("ignore", c.data("entityKey"), h) : e(h, g), j(i(c), "Invoke", "DeleteNotification"), !1
        }), b.on("click", "button", function(b) {
            var c = a(b.currentTarget),
                e = c.closest(".notification"),
                f = c.data("action"),
                g = e.data("notificationId");
            return d(f, e.data("entityKey"), g), !1
        }), b.on("click", ".notification", function(b) {
            var c = a(b.currentTarget);
            h(c, b)
        }), comm.listen("notifications.remove", function(a) {
            f(b, a)
        }, c)
    }

    function c(b) {
        var c = [],
            d = [],
            e = 0;
        b.each(function() {
            var b = a(this);
            if (!b.data("alreadyViewed")) {
                var f = b.data("notificationId"),
                    g = b.data("renderTime");
                g ? (d.push(f), e = Math.max(e, g)) : c.push(f), b.data("alreadyViewed", !0)
            }
        }), (d.length || c.length) && a.ajax({
            url: "/ajax/notifications/markviewed",
            type: "POST",
            data: {
                aggregateNotificationIds: d,
                singleNotificationIds: c,
                renderTime: e
            }
        }).done(function() {
            var a = {
                unseen: 0
            };
            comm.send("notifications.count", a), scomm.send("notifications.count", a)
        })
    }

    function d(b, c, d) {
        return a.ajax({
            url: "/ajax/connections/" + b,
            data: {
                entityKey: c
            },
            type: "POST"
        }).done(function() {
            comm.send("notifications.remove", d), scomm.send("notifications.remove", d)
        })
    }

    function e(b, c) {
        return a.ajax({
            url: "/ajax/notifications/delete",
            data: {
                notificationId: b,
                renderTime: c
            },
            type: "POST"
        }).done(function() {
            comm.send("notifications.remove", b), scomm.send("notifications.remove", b)
        })
    }

    function f(b, c) {
        b.find('.notification[data-notification-id="' + c + '"]').fadeOut(function() {
            a(this).remove(), comm.send("notifications.removed", c)
        })
    }

    function g(a) {
        var b = a.find("a.primaryLink");
        return b.length || (b = a.find(".notificationInfo .body > a").last()), b.length || (b = a.find(".notificationInfo .subject a").first()), b.length ? b : null
    }

    function h(b, c) {
        j(i(b), "Invoke", "ClickNotification");
        var d;
        c.target.nodeName === "A" ? d = a(c.target) : d = g(b);
        if (d) {
            var e = n(d);
            e && e(d), c.preventDefault(), c.stopPropagation()
        }
    }

    function i(a) {
        return a.closest("#notificationsPopout").length ? "notificationspopup" : a.closest("#toasts").length ? "notificationstoasts" : context.pfc
    }

    function j(a, b, c) {}

    function l(a) {
        var b = a.attr("href");
        b && b !== "#" && comm.send("location.href", b)
    }

    function m(a) {
        var b = Myspace.PhotoCarouselLightbox,
            c = a.data("playlistId"),
            d = a.data("photoId"),
            e = a.data("ownerUsername");
        b.startCarousel({
            playlistId: c,
            mediaId: d,
            fetchMoreItemsUrl: "/ajax/" + e + "/photos/carousel/fetch"
        })
    }

    function n(a) {
        var b = a.data("object-type");
        return k[b] || l
    }
    scomm.add(function(a, b) {
        a === "notifications.remove" && comm.send(a, b)
    }), scomm.add(function(a, b) {
        a === "notifications.count" && comm.send(a, b)
    });
    var k = {
        image: m
    };
    Myspace.Notifications = Myspace.Notifications || {}, Myspace.Notifications.wireList = b, Myspace.Notifications.markAsViewed = c, Myspace.Notifications.onClick = h
})(jQuery);
(function() {
    function d(a) {
        var b = a.find(".commentBody"),
            c = b.find(".textWrapper"),
            d = Number(b.css("max-height").slice(0, -2)),
            e = c.height();
        a.toggleClass("expandable", e > d)
    }

    function e(a, b, c) {
        function y(a, b, c) {
            return $.ajax({
                url: "/ajax/comments/get/" + m,
                type: "POST",
                data: {
                    start: a,
                    max: b,
                    direction: c
                }
            })
        }

        function z() {
            var a = 150;
            return h.innerHeight() + h.scrollTop() + a >= h.prop("scrollHeight")
        }

        function A(a) {
            var b = 50,
                c = "TopDown";
            y(r, b).done(function(b) {
                var c = b.nextStart,
                    e = $(b.html).filter(function() {
                        var a = $(this);
                        return a.hasClass("comment") && x.indexOf(a.data("entityKey")) === -1
                    }),
                    f = z();
                if (e.length) {
                    i.append(e), e.each(function() {
                        var a = $(this);
                        d(a)
                    });
                    var g = f ? h.prop("scrollHeight") : h.scrollTop();
                    H(g, e), q = b.total, o += e.length, t = o < q && c !== 0, t || v.hide(), b.firstStart !== 0 && (r = b.firstStart), comm.send("page.changed", i), a && a({
                        numShown: o,
                        total: q
                    })
                }
            })
        }

        function B(a, b) {
            y(p, a).done(function(a) {
                var c = a.nextStart,
                    e = $(a.html).filter(".comment"),
                    f;
                i.data("latest") == "top" ? (e = $(e.toArray().reverse()), f = "append") : f = "prepend", i[f](e), e.each(function() {
                    d($(this))
                }), H(0, e), o += e.length, t = o < q && c !== 0, p = c, t || v.hide(), comm.send("page.changed", i), b && b({
                    numShown: o,
                    hasMore: t
                })
            })
        }

        function C() {
            var a = $.trim(l ? k.val() : k.text());
            if (j) {
                var b = n && n.mentionProfileList();
                Object.keys(b).forEach(function(c) {
                    var d = b[c];
                    a = a.replace(d.text, "[[" + d.text + "]]")
                })
            }
            return a
        }

        function D() {
            var a = C().trim(),
                b = n && n.mentionProfileList();
            return b && Object.keys(b).forEach(function(c) {
                var d = b[c];
                a = a.replace("[[" + d.text + "]]", "[@" + d.userName + "|" + d.key + "]")
            }), a
        }

        function E() {
            l ? k.val("") : k.text(""), n && n.reset()
        }

        function F() {
            s = !0, a.data("liveComments") || (Q(), k.addClass("loading white"))
        }

        function G() {
            s = !1, O(), k.removeClass("loading white").get(0).focus()
        }

        function H(a, b) {
            h.animate({
                scrollTop: a
            }, {
                duration: 500,
                done: function() {
                    b.addClass("newComment"), setTimeout(function() {
                        b.removeClass("newComment")
                    }, 4e3)
                }
            })
        }

        function I() {
            var a = D();
            a.length > 0 && !s && (F(), $.ajax({
                url: g.attr("action"),
                type: "POST",
                data: {
                    text: a
                }
            }).done(function(a) {
                var b = $(a),
                    c = b.attr("data-entity-key");
                x.indexOf(c) == -1 && (x.push(c), S(b)), E()
            }).always(G).fail(function(a) {
                var b = JSON.parse(a.responseText).errorMessage || "There was a problem posting your comment, please try again later.";
                g.tip({
                    trigger: "manual",
                    classes: "error",
                    title: b
                }).tip("show"), setTimeout(function() {
                    g.tip("destroy")
                }, 4e3)
            }))
        }

        function J() {
            k.focus()
        }

        function K() {
            h.scrollTop(h.prop("scrollHeight"))
        }

        function L(a) {
            return $.ajax({
                url: "/ajax/comments/delete/" + m + "/" + a,
                type: "POST"
            })
        }

        function M(a) {
            return $.ajax({
                url: "/ajax/comments/spam/" + a,
                type: "POST"
            })
        }

        function N() {
            O(), k.attr("placeholder", k.data("enabledPlaceholder"))
        }

        function O() {
            l ? k.prop("disabled", !1) : k.prop("contentEditable", !0)
        }

        function P() {
            Q(), k.attr("placeholder", k.data("disabledPlaceholder"))
        }

        function Q() {
            l ? k.prop("disabled", !0) : k.prop("contentEditable", !1)
        }

        function R() {
            g.find(".signIn").click(function() {
                if (typeof spaceway == "object") return comm.send("login.prompt", {
                    action: "comment",
                    object: m
                }), !1
            }), j && k.length && (n = Myspace.mention(k, k[0])), i.children(".comment").each(function() {
                d($(this))
            }), a.find("header, footer").on("click", "a", function(a) {
                var b = $(this);
                b.hasClass("showMore") && ($(window).resize(), e.getMoreComments(50))
            }), h.on("click", ".comment .expand", function(a) {
                var b = $(a.currentTarget);
                return b.siblings(".commentBody").addClass("expanded"), b.remove(), !1
            }), h.on("click", ".comment .deleteComment", function(a) {
                function e() {
                    return window.setTimeout(function() {
                        comm.send("reportAbuse", {
                            type: "comment",
                            entityKey: c,
                            userEntityKey: $(a.currentTarget).data("authorEntityKey")
                        })
                    }, 700), !1
                }

                function f() {
                    L(c).done(function() {
                        comm.send("comment.removed", {
                            entityKey: m
                        })
                    }).always(function() {
                        b.remove()
                    })
                }
                var b = $(a.currentTarget).closest(".comment"),
                    c = b.data("entity-key"),
                    d = $(a.currentTarget),
                    g = d.data("canDelete"),
                    h = d.data("canReport");
                g && h ? Myspace.Confirm({
                    text: "What would you like to do with this comment?",
                    yes: {
                        text: "Delete",
                        onClick: f
                    },
                    no: {
                        text: "Report",
                        onClick: e
                    }
                }) : g ? Myspace.Confirm({
                    text: "Delete this comment?",
                    yes: {
                        onClick: f
                    }
                }) : h && e()
            }), h.on("click", ".comment .markAsSpam", function(a) {
                function d() {
                    M(c).always(function() {
                        b.remove()
                    })
                }
                var b = $(a.currentTarget).closest(".comment"),
                    c = b.data("entity-key");
                return Myspace.Confirm({
                    text: "Mark this comment as spam?",
                    yes: {
                        onClick: d
                    }
                }), !1
            }), k.keydown(function(a) {
                switch (a.which) {
                    case 13:
                        if (!a.shiftKey) {
                            a.preventDefault();
                            if (!n || !n.isProfileSelectByEnterKey()) I(), k.get(0).focus()
                        }
                        break;
                    case 27:
                        E()
                }
            }), g.data("canComment") ? N() : P(), comm.listen("connect.complete", function(a) {
                a.entityKey === m && (a.action === "add" ? N() : a.action === "remove" && P())
            }), a.data("commentsControl", e)
        }

        function S(a) {
            var b = i.data("latest") == "top" ? "prepend" : "append";
            i[b](a), d(a), o++, q++, H(h.prop("scrollHeight"), a), u({
                numShown: o,
                total: q
            }), comm.send("comment.added", {
                entityKey: a.attr("data-entity-key")
            }), comm.send("page.changed", a)
        }
        if (a.data("commentsControl")) return a.data("commentsControl");
        c = c || {};
        var e = this,
            g = a.children("form.addComment"),
            h = a.find(".comments"),
            i = h.children("ol"),
            j = context.features.isMentionProfileEnabled,
            k = j ? g.find("div[contenteditable]") : g.find("textarea"),
            l = k[0] && k[0].tagName === "TEXTAREA",
            m = h.data("direct-object"),
            n, o = i.children().length,
            p = i.data("nextStart"),
            q = i.data("total"),
            r = i.data("firstStart"),
            s = !1,
            t = o < q,
            u = c.onCommentPosted || $.noop,
            v = a.find(".showMore"),
            w = a.find("header > .addAComment"),
            x = [];
        comm.listen("comments.addcomment", function(a) {
            var b, c;
            if (a && a.comments && Object.keys(a.comments)[0] == m) {
                b = f(a)[m].comments[0], c = $(require("ejs").render(templates["areas/comments/views/_clientComment"], {
                    comment: b
                }));
                if (b.author.profileId == context.profileId) {
                    if (x.indexOf(b.entityKey) > -1) return;
                    x.push(b.entityKey)
                }
                S(c)
            }
        }), R(), this.getMoreComments = B, this.getLatestComments = A, this.focus = J, this.scrollToBottom = K, this.submitComment = I
    }

    function f(a) {
        var b = {};
        return Object.keys(a.comments).forEach(function(c) {
            var d = a.comments[c],
                e = [];
            d.comments.forEach(function(b) {
                var c = g(b, a.profiles);
                e.push(c)
            }), b[c] = {
                comments: e,
                directObject: d.directObject,
                canComment: d.canComment,
                total: d.totalCount,
                nextStart: d.firstCommentId,
                firstStart: d.lastCommentId
            }
        }), b
    }

    function g(a, b) {
        var c = a.body || "",
            d = {
                commentId: a.commentId,
                entityKey: a.entityKey,
                publishedDate: new Date(a.postDate),
                comment: c,
                commentWithLinks: c,
                author: b[a.subject]
            },
            e;
        return c && (e = h(c, !1, b, !0), d.comment = e.content, d.commentWithLinks = e.contentWithLinks), d.canDelete = a.canDelete && d.author.profileId == context.profileId, d.canReport = d.author.profileId !== context.profileId, d.author.name = d.author.fullName || d.author.username, d
    }

    function h(d, e, f, g) {
        var h, j, k = d,
            l, m;
        return d && (d = htmlEncode(d), k = d.replace(a, function(a, b, c) {
            return h = !0, b
        }), l = h && d.replace(a, function(a, b, c, d, e) {
            return e ? '<a data-id="' + e.slice(1) + '" class="systemLink">' + b + "</a>" : (d && d == "mysp.ac" ? c = "https://" + c : c = "http://" + c, '<a href="' + c + '" target="_blank">' + b + "</a>")
        }), l = l || k, k = k.replace(b, function(a, b, c) {
            return j = !0, i(a, b, c, f, !1)
        }), m = j && l.replace(b, function(a, b, c) {
            return i(a, b, c, f, g)
        }), l = m || l, e && (c.lastIndex = 0, l = l.replace(c, "<br/>"))), {
            content: k,
            contentWithLinks: l
        }
    }

    function i(a, b, c, d, e) {
        var f = c && d && d[c];
        if (f) return e ? '<a href="/' + f.username + '" class="tooltips" data-id="' + f.entityKey + '" data-entity-key="' + f.entityKey + '" data-profileid="' + f.profileId + '" data-area="profiles" data-type="profile">' + (f.fullName || f.username) + "</a>" : f.fullName || f.username;
        if (b) return e ? (b = b.slice(1), '<a href="/' + b + '">' + b + "</a>") : b
    }
    var a = /\[([^\[]*?(?!\s)[^\[]*?)\|((lnk.ms|mysp.ac|myspac.ee)\/\w+)(\|*[a-zA-Z]*)\]/g,
        b = /\[(@[\w\d\.\-]+)[\|]((profile_)[0-9]{1,})\]/gim,
        c = /\n+/g;
    Myspace.CommentsControl = e
})();
(function(a) {
    Myspace.DropDown = function(b, c) {
        function e(b) {
            function e() {
                b.addClass("open");
                var d = Math.max(a(window).height() + a(window).scrollTop() - b.offset().top - 120, 50);
                c.maxHeight && (d = Math.min(d, c.maxHeight)), b.children("ul").css("max-height", d), setTimeout(function() {
                    a(document).on("click", f)
                }, 0)
            }

            function f() {
                b.children("ul").scrollTop(0), b.removeClass("open"), a(document).off("click", f)
            }

            function g() {
                h() ? f() : e()
            }

            function h() {
                return b.hasClass("open")
            }
            var d = b.data("event");
            b.children("strong").click(function() {
                g()
            }), b.on("click", "li", function() {
                var e = a(this),
                    g = b.find("strong .title"),
                    h = b.find("strong > span > i"),
                    i = e.text().trim(),
                    j = e.data("value"),
                    k = e.find("i").attr("class");
                if (c.eventTracking) var l = c.eventTracking.action ? typeof c.eventTracking.action == "function" ? c.eventTracking.action(e) : c.eventTracking.action : "Select: " + i,
                    m = c.eventTracking.label ? typeof c.eventTracking.label == "function" ? c.eventTracking.label(e) : c.eventTracking.label : undefined,
                    n = new Tracking(c.eventTracking.category || context.pfc, l, m);
                b.find("li.selected").removeClass("selected"), g.text(i), h.attr("class", k), e.addClass("selected"), comm.send(d, {
                    value: j,
                    dropDownElement: b
                }), f()
            }), b.children("ul").on("mousewheel", function(a) {
                a.stopPropagation()
            }), comm.listen("spaceway.page.complete,dropdown.close", f)
        }

        function f() {
            d.each(function() {
                var b = a(this),
                    c = b.find("li:first-child"),
                    d = b.find("strong .title"),
                    e = b.find("strong > span > i"),
                    f = c.text().trim(),
                    g = c.data("value"),
                    h = c.find("i").attr("class");
                b.find("li.selected").removeClass("selected"), d.text(f), e.attr("class", h), c.addClass("selected")
            })
        }

        function g(b, c) {
            d.each(function() {
                var d = a("<li></li>").text(b).data("value", c);
                a(this).children("ul").append(d)
            })
        }

        function h(b) {
            d.each(function() {
                a(this).children("ul").children().each(function() {
                    var c = a(this);
                    c.data("value") == b && c.remove()
                })
            })
        }

        function i(b, c) {
            d.each(function() {
                a(this).children("ul").children().each(function() {
                    var d = a(this);
                    d.data("value") == b && d.data("value", c.value).text(c.name)
                })
            })
        }

        function j(b) {
            d.each(function() {
                var c = a(this),
                    d = c.find("strong .title"),
                    e = c.find("strong > span > i");
                c.children("ul").children().each(function() {
                    var f = a(this);
                    if (f.data("value") == b) {
                        var g = f.find("i").attr("class"),
                            h = c.data("event");
                        return c.find("li.selected").removeClass("selected"), f.addClass("selected"), d.text(f.text()), e.attr("class", g), !1
                    }
                })
            })
        }

        function k() {
            var b = [];
            return d.each(function() {
                var c = a(this);
                c.children("ul").children().each(function() {
                    b.push(a(this).data("value"))
                })
            }), b
        }
        c = c || {};
        var d = a(b);
        return d.each(function() {
            e(a(this))
        }), {
            addItem: g,
            removeItem: h,
            modifyItem: i,
            selectItem: j,
            getValues: k,
            reset: f
        }
    }
})(jQuery);
(function(a) {
    Myspace.Influencer = new function() {
        function c(a) {
            var b = "",
                c = a.closest("[data-influencer]");
            return c.length && (b = c.data("influencer")), b == context.profileId && (b = ""), b
        }
        try {
            sessionStorage.influencer = ""
        } catch (b) {}
        return a("body").delegate("a", "click", function(b) {
            var c = a(this);
            if (c.attr("href")) {
                var d = c.closest("[data-influencer]");
                try {
                    d.length && d.data("influencer") != context.profileId ? sessionStorage.influencer = d.data("influencer") : sessionStorage.influencer = ""
                } catch (b) {}
            }
        }), a(window).bind("popstate", function(a) {
            try {
                sessionStorage.influencer = ""
            } catch (a) {}
        }), comm.listen("influencer.click", function(b) {
            var d;
            typeof b == "number" ? d = b : d = c(a(b)), context.lastInfluencer = d, setTimeout(function() {
                context.lastInfluencer = null
            }, 100)
        }, !0), {
            getClickInfluencer: c
        }
    }
})(jQuery);
(function(a) {
    function b(b, d, e) {
        comm.send("beacon.v3", {
            actionText: "Click",
            objectName: d,
            xPixelPosition: b.clientX,
            yPixelPosition: b.clientY
        });
        var f, g, h, i = ["GlobalNav", "DiscoverContextualNav", "DiscoverMusic", "DiscoverSongs", "DiscoverArtists", "DiscoverAlbums", "DiscoverRadio", "DiscoverVideo", "ProfileContextualNav", "HomeContextualNav", "SearchResultsContextualNav", "Mobile Menu", "Mobile Homepage", "Mobile Header", "Discover People", "Video Page", "Videos Mobile", "Songs", "Albums", "Artists", "Mixes"],
            j = i.length;
        for (var k = 0; k < j; k++) {
            h = d.indexOf(i[k]);
            if (h > -1) {
                g = d.split(i[k])[1], g = a.trim(g), f = i[k] === "GlobalNav" ? "Global Nav" : i[k], c(f, g, e);
                break
            }
        }
    }

    function c(b, c, d) {
        _gaq.push(["_set", "hitCallback", function() {
            a.isFunction(d) && d()
        }]), _gaq.push(["_trackEvent", b, "click", c])
    }
    a("body").delegate("[data-click-object-type]", "click", function(c) {
        typeof spaceway != "object" && c.preventDefault();
        var d = this,
            e = a(d).data("clickObjectType");
        b(c, e, function() {
            typeof d.href == "string" && typeof spaceway != "object" && (window.location = d.href)
        })
    }), comm.listen("click.tracker", function(a) {
        b(a.e, a.objectName)
    }, !0)
})(jQuery);
(function(a, b) {
    function c(c, d) {
        var e = d && d.get(0),
            f = [],
            g, h = 0,
            i, j = 500,
            k = j / 2;
        return c.find(".playBtn.song, .playBtn.video").each(function(c, d) {
            var i = a(d),
                j = objectify(i);
            j.influencerId = b.Influencer.getClickInfluencer(i), e && e == d && (g = j, h = c), f.push(j)
        }), h < k ? i = f.slice(0, j) : h >= f.length - k ? i = f.slice(f.length - j) : i = f.slice(h - Math.floor(k), h + Math.ceil(k)), {
            media: i,
            selected: g
        }
    }

    function j(b, c) {
        a(".playBtn").removeClass("playing paused");
        if (b && b.mediaItem) {
            var d = a("#queue .list." + b.mode + " .selected .playBtn");
            if (d.length) {
                var e = a('.playBtn[data-media-id="' + b.mediaItem.mediaId + '"]:not(#drawer .playBtn)'),
                    f = a("#videoPlayer .playBtn"),
                    g = b.paused ? "paused" : "playing";
                e.add(d).add(f).addClass(g)
            }
        }
    }

    function k(a, b) {}

    function l() {
        g || (g = new b.Dialog(a("#videoNotSupported"))), g.show()
    }

    function m(c, d) {
        h || (h = new b.Dialog(f));
        var e = [],
            g = a('<button class="radio">Start Radio</button>'),
            j = a("<h1></h1>").text(c.title),
            l = c.artistName ? a("<h2></h2>").text(c.artistName) : "";
        f.find(".media").html('<a><img src="' + c.imageUrl + '"/></a><div>' + j + l + "</div>"), g.click(function() {
            i.radio(c), k("play", "radio"), h.hide()
        }), e.push(g), f.find(".media").find("div").append(e), h.show()
    }
    var d = a("#wrap"),
        e = a("html").hasClass("mobile"),
        f = e ? a("#radioForMedia") : null,
        g, h, i = {
            song: function(a, b) {
                comm.send("queue.list", function(e) {
                    var f = "queue",
                        g = b.closest("ol.table"),
                        h = g.attr("data-objectversion") || g.attr("data-uid") || d.attr("data-uid");
                    if (e.listId == h || !e.$lis.length)
                        if (g.length) {
                            var i = c(g, b);
                            return i.listId = h, comm.send(f + ".set", i)
                        } return comm.send(f + ".play.song", a)
                })
            },
            album: function(a) {
                comm.send("queue.set.album", a)
            },
            mixtape: function(a) {
                context.lastInfluencer = a.influencerId, a.influencerId = a.profileId, comm.send("queue.set.mixtape", a)
            },
            radio: function(a) {
                comm.send("radio.start", a)
            },
            video: function(a) {
                comm.send("influencer.click", a.influencerId), comm.send("videoLightbox.instance", function(b) {
                    b && b.show(a)
                })
            },
            all: function(b, e) {
                var f = e.data("list-selector"),
                    g = f ? a(f) : d,
                    h = c(g);
                h && h.media && h.media.length && comm.send("queue.set", {
                    media: h.media,
                    selected: h.selected,
                    listId: d.attr("data-uid")
                })
            }
        };
    a("body").delegate(".playBtn, #playAll, .play-all, .play-radio", "click", function(c) {
        var d = this,
            f = a(this),
            g = objectify(f);
        c.preventDefault(), c.stopPropagation();
        if (f.hasClass("playing")) return comm.send("player.pause"), k("pause", g.type), !1;
        if (f.hasClass("paused")) return comm.send("player.resume"), k("resume", g.type), !1;
        g.influencerId = b.Influencer.getClickInfluencer(f);
        if (e) {
            if (g.type === "video") return l();
            if (g.type === "song" && g.isPremium === !0 || g.type === "album" || g.type === "mixtape") return m(g, f)
        }
        i[g.type](g, f), k("play", g.type)
    }), comm.listen({
        player: {
            "+preloading": j,
            "+loading": j,
            "+loaded": j,
            "+started": j,
            "+paused": j,
            "+resumed": j,
            "+state": j,
            "+ended": function() {
                j()
            },
            "+stopped": function() {
                j()
            }
        }
    })
})(jQuery, window.Myspace = window.Myspace || {});
var play = function(a, b, c) {
    b.type || (b.type = a), c = c || "play_25";
    var d = '<button class="playBtn ' + c + " " + a + '" ' + attributify(b) + "></button>";
    return d
};
var Myspace = Myspace || {};
Myspace.ExQ = function(a) {
    function d(a, c) {
        a.command = c;
        var d = a.playlistId;
        !b[d] || !b[d].data || !b[d].data.length ? (b[d] || (b[d] = {}, b[d].objectVersion = a.objectVersion), b[d].data = [], b[d].data.push(a), e(b[d].objectVersion, b[d].data[0])) : b[d].data.push(a)
    }

    function e(a, b) {
        var d, e;
        b.command == "mix.changeImage" ? b.changeImage(a) : (d = c[b.command], b.objectVersion = a, typeof b.onSuccess == "function" && (e = b.onSuccess, delete b.onSuccess), typeof b.source != "undefined" && delete b.source, typeof b.item != "undefined" && delete b.item, h(d, "POST", b, function(a) {
            e && e(a), f(a)
        }))
    }

    function f(a) {
        if (a.playlist) {
            var c = a.playlist.playlistId;
            b[c] && (b[c].data.length && b[c].data.shift(), a.playlist.objectVersion && (b[c].objectVersion = a.playlist.objectVersion), b[c].data.length && e(b[c].objectVersion, b[c].data[0]))
        }
    }

    function g(a) {
        b[a.playlistId] || (b[a.playlistId] = {}), b[a.playlistId].objectVersion = a.objectVersion
    }

    function h(b, c, d, e) {
        var f = {
            url: b,
            data: d,
            type: c,
            success: function(a) {
                e && e(a)
            },
            error: function(b, c, d) {
                var e;
                if (b.status == 429) {
                    var g = JSON.parse(b.responseText);
                    e = {
                        text: g.message,
                        yes: {
                            text: "Ok"
                        },
                        no: !1
                    }
                } else e = {
                    yes: {
                        onClick: function() {
                            a.save(f)
                        }
                    },
                    no: {
                        text: "Reload",
                        onClick: function() {
                            comm.send("location.href", window.location.href)
                        }
                    }
                };
                Myspace.Error(e)
            }
        };
        return a.save(f)
    }
    var b = {},
        c = {
            "mix.addItem": "/ajax/mixes/additem",
            "mix.removeItem": "/ajax/mixes/removeitem",
            "mix.moveItem": "/ajax/mixes/moveitem",
            "mix.edit": "/ajax/mixes/edit",
            "mix.delete": "/ajax/mixes/delete",
            "mix.removeCover": "/ajax/mixes/removecover"
        };
    return {
        process: d,
        executeAsync: e,
        executeSerial: f,
        updateObjectVersion: g,
        sendAjax: h
    }
}(jQuery);
(function(a) {
    function h(b, c) {
        function f() {
            b.onCancel && !e && b.onCancel(), comm.stopListening("dialog.hiding", f)
        }
        var e;
        Myspace.Confirm({
            text: "Are you sure you want to delete '" + a("<div />").text(b.title).html() + "'?<br />Any photos added to this mix will be deleted.",
            yes: {
                onClick: function() {
                    b.onCancel && delete b.onCancel, e = !0, c = "mix.delete", b.playlistId = b.playlistId || b.id.split(",")[1], b.objectVersion = 1, b.onSuccess = b.onSuccess || function(a) {
                        a.entityKey = b.entityKey, comm.send("mix.deleted", a)
                    }, d(b, c)
                }
            }
        }), comm.listen("dialog.hiding", f)
    }

    function i(a) {
        g("/ajax/mixes/move", "POST", a, function(a) {})
    }

    function j(b) {
        comm.send("toasts.new", {
            html: '<li><a href="/' + b.playlist.profile.username + "/mixes/" + seofy(b.playlist.title) + "-" + b.playlist.playlistId + '">Your mix ' + a("<div />").text(b.playlist.title).html() + " has been created.</a></li>",
            timeout: 1e4
        })
    }

    function k(b, c, d) {
        var e, f;
        b = b || {}, b.emptyPlaylistImage = config.urls.emptyPlaylistImage, b.mediaType || (b.type === "song" ? b.mediaType = "Audio" : b.type === "video" ? b.mediaType = "Video" : b.mediaType = b.type), a("#mixForm").remove(), f = a(require("ejs").render(templates["areas/mixes/views/dialogs/mixForms"], {
            mixtape: b,
            command: c
        })), f.appendTo("#container"), e = new Myspace.Dialog(f), e.show(), c === "mix.selectAndAddItem" ? (d && d(), m(b, e)) : l(b, e)
    }

    function l(b, c) {
        var f, g, h, i, j, k, l, o = context.features.isMixTagginEnable,
            p = a("#mixForm"),
            q = a("#createForm"),
            r, s, t;
        q.show();
        if (!q.data("wired")) {
            g = a("#mixtapeImageContainer"), h = g.find(".mixtapeImage"), i = a("#mixCoverFile"), j = a("#mixTitle"), k = a("#mixDescription"), t = k[0] && k[0].tagName === "TEXTAREA", o && !r && (r = Myspace.tagging(k)), l = k.siblings(".charCount");
            var u = {
                autoUpload: !1,
                filesInput: i,
                uploadError: function(a, b) {
                    Myspace.Error({
                        text: a,
                        yes: {
                            text: "OK"
                        },
                        no: !1
                    }), b && comm.send("mix.imageFailed", {
                        playlistId: b
                    })
                },
                uploadBegin: function() {
                    g.tip("hide")
                },
                uploadComplete: function() {},
                showPreview: function(a) {
                    f = h.attr("src"), h.attr("src", a), i.data("hasImage", !0)
                },
                fileAttached: function() {
                    g.tip({
                        title: "The image was attached.",
                        trigger: "manual",
                        placement: "inside right"
                    }).tip("addOKCustomClass").tip("show")
                },
                fileProcessFailed: function(a) {
                    this.handleUploadError(a)
                },
                showLoading: function() {
                    g.addClass("loading white")
                },
                hideLoading: function() {
                    g.removeClass("loading white")
                },
                handleUploadError: function(a) {
                    this.hideLoading(), g.tip({
                        title: a,
                        trigger: "manual",
                        placement: "inside right"
                    }).tip("addErrorCustomClass").tip("show"), i.data("hasImage", !1)
                },
                executeSerial: e
            };
            Myspace.MixCoverUploader.init(u), k.keyup(function(a) {
                var b = 600,
                    c = w().length;
                if (c > b) return k.val(w().substring(0, b)), c = b, !1;
                l.html(c + "/" + b).attr("data-len", c)
            }), p.find(".create").click(function(e) {
                e.preventDefault(), s = !0, b.onCancel && delete b.onCancel;
                var f, g = a(e.target),
                    h = i.data("hasImage") == 1;
                g.attr("disabled", "disabled");
                if (a.trim(j.val()) === "") return j.siblings(".tipHolder").tip({
                    title: "The mix title is required",
                    trigger: "manual",
                    placement: "inside top"
                }).tip("addErrorCustomClass").tip("show"), j.keyup(function() {
                    g.removeAttr("disabled"), j.siblings(".tipHolder").unbind("keyup").tip("hide")
                }), !1;
                b.onSuccess && (f = b.onSuccess, delete b.onSuccess), b.onSuccess = function(a) {
                    a.hasImage = h, comm.send("mix.created", a), f && f(j.val(), a), h && (a.playlist.changeImage = function(b) {
                        Myspace.MixCoverUploader.startUpload(a.playlist.playlistId, b)
                    }, d(a.playlist, "mix.changeImage"))
                }, o ? r.getTaggingInfo(function(a) {
                    n(p, b, a)
                }) : n(p, b), c.hide()
            }), p.find(".cancel").click(function(a) {
                c.hide()
            }), p.find(".myMixes").click(function(a) {
                a.preventDefault(), q.hide(), m(b, c)
            });

            function v() {
                b.onCancel && !s && b.onCancel(), comm.stopListening("dialog.hiding", v)
            }
            comm.listen("dialog.hiding", v);

            function w() {
                return t ? k.val() : k.text()
            }
        } else q.data("wired", !0)
    }

    function m(b, c) {
        var e = a("#addToSection"),
            f = a("#myMixtapes"),
            g = f.find("option:selected"),
            h = a("#selectedMixImage").children("img");
        e.show(), e.data("wired") ? e.data("wired", !0) : (f.change(function(a) {
            g = f.find("option:selected"), h.attr("src", g.data("image"))
        }), e.find(".cancel").click(function() {
            return c.hide(), !1
        }), e.find(".save").click(function(e) {
            e.preventDefault(), g = f.find("option:selected");
            var h = g.text();
            h = h.length > 30 ? h.substr(0, 30) + "..." : h, b.playlistId = g.val(), b.objectVersion = g.data("objectversion"), b.onSuccess = function(c) {
                typeof c == "object" && (comm.send("table.newItem", c), comm.send("toasts.new", {
                    html: "<li>" + a("<div />").text(b.title).html() + "<br />was added to<br />" + a("<div />").text(h).html() + "</li>",
                    timeout: 3e3
                }))
            }, d(b, "mix.addItem"), c.hide()
        }), e.find(".createMixAndAdd").click(function() {
            return e.hide(), l(b, c), !1
        }))
    }

    function n(a, b, c) {
        var d = a.serialize();
        c && (d += "&description=" + c.text, d += "&descriptionTags=" + JSON.stringify(c.tags)), g("/ajax/mixes/create", "POST", d, function(a) {
            typeof b.onSuccess == "function" && typeof a.playlist == "object" && b.onSuccess(a)
        })
    }

    function o(a, b) {
        g("/ajax/" + a.profileId + "/mixes/getmarkup", "POST", {
            playlistId: a.playlistId,
            profileId: a.profileId
        }, function(a) {
            var b = {};
            b.markup = a, comm.send("mix.created", b)
        })
    }

    function p(b) {
        function e() {
            d.data("confirmed") || comm.stopListening("dialog.hiding", e)
        }
        var d = a("#addItemsToMix");
        d.length || (d = a(require("ejs").render(templates["areas/mixes/views/dialogs/addItemsToMix"])), d.submit(function(a) {
            d.data("confirmed", !0), comm.stopListening("dialog.hiding", e), a.preventDefault(), r(d, b)
        }), d.on("click", "ul", function(c) {
            c.preventDefault(), a(c.target).closest("li").length && d.data("confirmed", !0), q(c, b, e)
        }), d.appendTo("body"), c = new Myspace.Dialog(d)), d.data("confirmed", !1), g("/ajax/mixes/get", "POST", null, function(b) {
            var e = "";
            if (b.length == 0) {
                d.addClass("noMixes");
                return
            }
            for (var f = 0; f < b.length; f++) {
                var g = b[f].songCount == 1 ? " song" : " songs";
                e += '<li data-playlist-id="' + b[f].playlistId + '" data-object-version="' + b[f].objectVersion + '"><img src="' + b[f].image + '" /><div><span class="title">' + a("<div />").text(b[f].title).html() + "</span><span>" + b[f].songCount + g + "</span></div></li>"
            }
            a(".addToExisting > ul", d).html(e).css("overflow-y", b.length > 12 ? "scroll" : "auto"), d.removeClass("noMixes"), c.center()
        }), c.show(), d.find("input").val("").focus(), comm.listen("dialog.hiding", e)
    }

    function q(b, e) {
        var f, g = a(b.target).closest("li");
        if (g.length) {
            var h = objectify(g);
            f = {
                playlistId: h.playlistId,
                objectVersion: h.objectVersion,
                mediaItems: e
            }, f.onSuccess = function(a) {
                if (typeof a == "object") {
                    var b = 0,
                        c;
                    a.playlist && a.playlist.itemsAffected && (b = a.playlist.itemsAffected.length), b == 1 ? c = " item was added to " : c = " items were added to ", comm.send("table.newItem", a), comm.send("toasts.new", {
                        html: "<li>" + b + c + "  <br />" + g.find(".title").text() + "</li>",
                        timeout: 3e3
                    })
                }
            }, d(f, "mix.addItem"), c.hide()
        }
        return !1
    }

    function r(a, b) {
        var d = a.find("input").val();
        return d.length && (g("/ajax/mixes/create", "POST", {
            title: d,
            mediaItems: b
        }, function(a) {
            a.playlist && comm.send("mix.created", a)
        }), c.hide()), !1
    }

    function s(a, b) {
        var c = "/ajax/connections/" + a,
            d = {
                entityKey: b.entityKey,
                type: b.type,
                id: b.id,
                optionalData: b.optionalData
            };
        g(c, "POST", d, b.onSuccess, b.onError).done(function() {
            var b = {
                action: a,
                entityKey: d.entityKey
            };
            comm.send("connect.complete", b), scomm.send("connect.complete", b)
        })
    }

    function u(a, b) {
        var c = Myspace.PhotoCropper,
            d = Myspace.Upload.MEDIA_TYPES.PROFILE,
            e = a.item;
        c.setOptions({
            photoUrl: a.fullImageUrl,
            photoType: d,
            photoDimensions: {
                width: a.fullImageWidth,
                height: a.fullImageHeight
            },
            successCallback: function(a) {
                e.hide(), b(a)
            },
            failedCallback: function(a) {
                var b = Myspace.Upload.MapServerError(a.errorCode);
                w(b, d)
            }
        }, function() {
            c.show()
        })
    }

    function v(a, b) {
        var c = a.item,
            d = {
                utoken: context.hashMashter,
                url: a.fullImageUrl,
                photoType: Myspace.Upload.MEDIA_TYPES.COVER
            };
        Myspace.Upload.PosterUpload(d, d.photoType, function(a) {
            c.slideUp(), b(a)
        })
    }

    function w(b, c) {
        t = !1, a("#sidebar .mediaSquare").removeClass("photoObject loading"), Myspace.Confirm({
            closeAll: !1,
            text: Myspace.Upload.GetErrorMessage(null, b, c),
            yes: {
                text: "OK"
            },
            no: !1
        })
    }

    function x(a, b, c) {
        var d = {
            imageType: b,
            imageId: a.id,
            albumId: a.albumId
        };
        g("/ajax/editprofile/updateimage", "POST", d, function(a) {
            c(a)
        })
    }

    function z(a, b, c) {
        var d = "/ajax/likes/" + a;
        g(d, "POST", c, b.onSuccess, b.onError).done(function() {
            var b = {
                action: a,
                entityKey: c.entityKey
            };
            comm.send("like.complete", b), scomm.send("like.complete", b)
        })
    }
    var b = Myspace.ExQ,
        c, d = b.process,
        e = b.executeSerial,
        f = b.updateObjectVersion,
        g = b.sendAjax;
    comm.listen("mix.imageChanged", f, !0), comm.listen("mix.coverUploadInit", function(a) {
        a.executeSerial = e, Myspace.MixCoverUploader.init(a)
    }, !0), comm.listen("mix.edit,mix.changeImage,mix.addItem,mix.removeItem,mix.moveItem,mix.removeCover", d, !0), comm.listen("mixtape.delete,mix.delete", h, !0), comm.listen("mix.move", i, !0), comm.listen("mix.created", j, !0), comm.listen("mix.create", k, !0), comm.listen("mix.addConnected", function(a, b) {
        setTimeout(function() {
            o(a, b)
        }, 1e3)
    }, !0), comm.listen("mix.addItems", p, !0), comm.listen("mix.selectAndAddItem", function(b, c) {
        var d, e = a("#mixes").find(".mix").length === 0;
        b.mediaId || (b.mediaId = b.id), b.releaseId || (b.releaseId = b.mediaReleaseId), e || (d = function() {
            g("/ajax/mixes/get", "POST", null, function(b) {
                var c = "",
                    d, e = b.length,
                    f = a("#myMixtapes");
                e > 0 && b[0].image && a("#selectedMixImage").children("img").attr("src", b[0].image).removeClass("hide");
                for (d = 0; d < e; d++) c += '<option value="' + b[d].playlistId + '" data-objectversion="' + b[d].objectVersion + '" data-image="' + b[d].image + '">' + a("<div />").text(b[d].title).html() + "</option>";
                e && f.html(c)
            })
        }), comm.send("hide.hcard"), c == "mix.selectAndAddItem" && (e && (c = "mix.create"), k(b, c, d))
    }, !0), comm.listen("connect", function(b) {
        if (b.type == "song") {
            var c = a(b.item),
                d = c.data("uid"),
                e;
            d ? e = a('.playBtn[data-uid="' + d + '"]') : e = c.parents(".mediaSquare").find(".playBtn");
            if (e.length) {
                var f = objectify(e);
                f.songReleaseEntityKey ? b.optionalData = {
                    songReleaseEntityKey: f.songReleaseEntityKey
                } : b.optionalData = {
                    songReleaseId: f.mediaReleaseId
                }
            }
        } else if (b.type == "photo") {
            var c = a(b.item),
                g = c.data("mixEntityKey");
            g && (b.optionalData = {
                mixEntityKey: g
            })
        } else b.connectActionOrigin && (b.type == "profile" || b.type == "artist" || b.type == "mixtape") && (b.optionalData = {
            connectActionOrigin: b.connectActionOrigin
        });
        s("add", b)
    }, !0), comm.listen("connect.add", function(a) {
        s("add", a)
    }, !0), comm.listen("disconnect", function(a) {
        a.connectActionOrigin && (a.type == "profile" || a.type == "artist" || a.type == "mixtape") && (a.optionalData = {
            connectActionOrigin: a.connectActionOrigin
        }), s("remove", a)
    }, !0), comm.listen("approveRequest", function(b) {
        s("approve", b), b.item.closest(".mediaSquare").parent().fadeOut(500, function() {
            a(this).remove()
        })
    }, !0), comm.listen("ignoreRequest", function(b) {
        s("ignore", b), b.item.closest(".mediaSquare").parent().fadeOut(500, function() {
            a(this).remove()
        })
    }, !0), comm.listen("block", function(a) {
        s("block", a)
    }, !0), comm.listen("unblock", function(a) {
        s("unblock", a)
    }, !0), scomm.add(function(a, b) {
        a == "connect.complete" && comm.send(a, b)
    }), comm.listen("connect>queue", function(b) {
        var c = {},
            d;
        b.uid && (d = a('.playBtn[data-uid="' + b.uid + '"]:eq(0)'));
        if (!d || !d.length) d = b.source.parents(".media, .mediaSquare, .streamItem").find(".playBtn:eq(0)");
        if (d && d.length) {
            c = objectify(d);
            var e = Myspace.Influencer.getClickInfluencer(b.source);
            c.type == "mixtape" ? (context.lastInfluencer = e, c.influencerId = c.profileId) : c.influencerId = e, comm.send("queue.append." + b.type, c)
        }
    }, !0), comm.listen("playRadio", function(b) {
        var c = a('.playBtn[data-uid="' + b.uid + '"]'),
            d;
        if (c.length) {
            var e = objectify(c);
            d = {
                radioStationEntityKey: e.radioStationEntityKey,
                name: e.name || e.title,
                imageUrl: e.imageUrl
            }
        } else b.radioStationEntityKey && (d = {
            radioStationEntityKey: b.radioStationEntityKey,
            name: b.title,
            imageUrl: b.imageUrl
        });
        comm.send("radio.start", d)
    }, !0), comm.listen("updateProfileSong", function(b) {
        var c = objectify(a('.playBtn[data-uid="' + b.uid + '"]')),
            d = a("#profileWidget"),
            e = context.displayProfileId == context.profileId && d.length,
            f = {
                songId: c.mediaId,
                songReleaseId: c.mediaReleaseId,
                includeTemplate: e
            };
        g("/ajax/editprofile/updatesong", "POST", f, function(b) {
            if (b.success) {
                comm.send("profile.objectversion", b.objectVersion);
                if (e && b.songTemplate) {
                    var d = require("ejs").compile(b.songTemplate),
                        f = a(d({
                            song: c
                        })),
                        g = a("#profileSong");
                    g.length ? g.html(f.children()) : a("#profileDetails").append(f)
                }
            }
        })
    }, !0), comm.listen("photo.delete", function(a) {
        function d() {
            g("/ajax/photos/photo/delete", "POST", b, function(b) {
                b.success && (a.source.closest("li").remove(), comm.send("photo.deleted", {
                    item: a,
                    albumObjectVersion: b.albumObjectVersion
                }))
            })
        }
        var b = {
                entityKey: a.entityKey
            },
            c = "";
        return a.id == context.profileImageId && a.id == context.coverImageId ? c = "Delete this photo?  The photo you are trying to delete is also your profile and cover photo.  If you proceed, your profile and cover photos will also be deleted." : a.id == context.profileImageId ? c = "Delete this photo?  The photo you are trying to delete is also your profile photo.  If you proceed, your profile photo will also be deleted." : a.id == context.coverImageId ? c = "Delete this photo?  The photo you are trying to delete is also your cover photo.  If you proceed, your cover photo will also be deleted." : c = "Delete this photo?", Myspace.Confirm({
            text: c,
            yes: {
                onClick: d
            },
            closeAll: !1
        }), !1
    }, !0);
    var t;
    comm.listen("connect>makeProfilePicture", function(b) {
        if (t) return;
        t = !0;
        var c = function(b) {
            comm.send("profile.objectversion", b.objectVersion), t = !1, context.profileImageId = b.imageId, new Myspace.genericDialog({
                buttons: !1,
                close: !1,
                classes: "success",
                html: '<section><p><i class="check_12_green"></i> Image successfully updated</p></section>'
            }), a("#sidebar .mediaSquare").removeClass("photoObject loading"), b.urls && b.urls.length && (context.displayProfileId ? context.displayProfileId == context.profileId && a("#sidebar > header > .item > .mediaSquare > a > img").attr("src", b.urls[2].url) : a("#sidebar > header > h1 > a > img").attr("src", b.urls[4].url))
        };
        a("#sidebar .mediaSquare").addClass("photoObject loading"), b.fromProfileMix ? x(b, "profile", c) : b.profileEligible && b.fullImageUrl ? u(b, c) : w(Myspace.Upload.ERROR_CODES.MINIMUM_IMAGE_SIZE, Myspace.Upload.MEDIA_TYPES.PROFILE)
    }, !0), comm.listen("connect>makeProfileCover", function(b) {
        if (t) return;
        t = !0;
        var c = function(b) {
            comm.send("profile.objectversion", b.objectVersion), t = !1, context.coverImageId = b.imageId, new Myspace.genericDialog({
                buttons: !1,
                close: !1,
                classes: "success",
                html: '<section><p><i class="check_12_green"></i> Image successfully updated</p></section>'
            }), b.urls && b.urls.length && context.pfc == "Profile" && context.displayProfileId == context.profileId && a("#background").css("background-image", "url('" + b.urls[0].url + "')")
        };
        b.fromCoverMix ? x(b, "cover", c) : b.coverEligible && b.fullImageUrl ? v(b, c) : w(Myspace.Upload.ERROR_CODES.MINIMUM_IMAGE_SIZE, Myspace.Upload.MEDIA_TYPES.COVER)
    }, !0), comm.listen("photoCropper.canceled", function() {
        t = !1, a("#sidebar .mediaSquare").removeClass("photoObject loading")
    }), comm.listen("username.changed", function(b) {
        a("#sidebar > header > h1 > a").attr("href", "/" + b)
    }, !0);
    var y = !1;
    comm.listen("videos.listeners.toasts.activate", function() {
        y || (comm.listen("videoUpload.transcoding.progress", function(b) {
            var c = a("#toasts").find('li[data-video-release-id="' + b.videoReleaseId + '"]');
            c.length && (b.progress < 100 ? (c.find("progress").val(b.progress), c.find(".progress").text(b.progress + "% complete.")) : (c.find("progress").replaceWith('<i class="endless"></i>'), c.find(".progress").text("Finalizing...")))
        }, !0), comm.listen("videoUpload.transcoding.complete", function(b) {
            var c = a("#toasts").find('li[data-video-release-id="' + b.videoReleaseId + '"]');
            c.length && setTimeout(function() {
                comm.send("toasts.remove", c)
            }, 1e3)
        }, !0), y = !0)
    }, !0), comm.listen("like", function(a) {
        var b = {
            entitiesKey: a.entityKey,
            secLikeEntityKey: a.secLikeEntityKey
        };
        z("like", a, b)
    }, !0), comm.listen("unlike", function(a) {
        var b = {
            entitiesKey: a.entityKey
        };
        z("unlike", a, b)
    }, !0), comm.listen("showSiteAlert", function(b) {
        b.class && a("#siteAlert").addClass(b.class), a("#container").addClass("alert"), a("#siteAlertContent").html(b.text), a("#siteAlert .close").click(function() {
            a("#container").removeClass("alert")
        })
    }, !0)
})(jQuery);
(function() {
    function g(d) {
        return c = 0, b = !1, a.removeClass("dragging files"), comm.send("files.dropped", d), !1
    }

    function h() {
        if (f) return;
        f = !0;
        var a = e.shift();
        i(a)
    }

    function i(a) {}
    var a = $(document.body),
        b, c = 0,
        d, e = [],
        f;
    $.event.add(document.body, "drop", g), $.event.add(document.body, "dragenter dragleave", function(d) {
        return d.type == "dragenter" ? c++ : d.type == "dragleave" && c--, !b && c > 0 ? (b = !0, a.addClass("dragging files"), comm.send("files.enterDocument", d.originalEvent.dataTransfer.items)) : c == 0 && (b = !1, a.removeClass("dragging files"), comm.send("files.leaveDocument", d.originalEvent.dataTransfer.items)), !1
    }), comm.listen("files.select,files.selectone", function(a, b) {
        d || (d = $("<input id=fileInput type=file style='left:-1000px;position:absolute;'>").hide().appendTo(document.body).bind("change", function(b) {
            d.hide(), a && a(b.target.files), d.val("")
        }));
        var c = b == "file.selectone";
        d.attr("multiple", c ? null : "multiple").show().click()
    }, !0), comm.listen("files.queue", function(a) {
        e.concat(a), $("#test1").html(JSON.stringify(e, "	")), h()
    }, !0)
})();
var Myspace = Myspace || {};
(function(a) {
    Myspace.SortManager = function(b) {
        function i() {
            h.$elem.bind("dragstart", function(a) {
                k(a)
            }), h.$elem.bind("dragend", function(a) {
                l(a)
            })
        }

        function j() {
            if (window.context.features.isPlayerQueueSortable) {
                var b = 'li:not("' + h.ignoreSelectors + '")';
                h.$elem.children(b).each(function() {
                    var b = a(this);
                    b.data("sortable") || (h.drag && b.bind("drag", function(a) {
                        c && h.drag(a, c)
                    }), b.bind("dragenter", function(a) {
                        c && m(a)
                    }), b.bind("dragover", function(a) {
                        c && n(a)
                    }), b.bind("dragleave", function(a) {
                        c && o(a)
                    }), b.bind("drop", function(a) {
                        c && p(a)
                    }), b.data("sortable", !0))
                })
            } else h.$elem.children('li:not([data-sortable="true"]):not("' + h.ignoreSelectors + '")').each(function() {
                var b = a(this);
                h.drag && b.bind("drag", function(a) {
                    c && h.drag(a, c)
                }), b.bind("dragenter", function(a) {
                    c && m(a)
                }), b.bind("dragover", function(a) {
                    c && n(a)
                }), b.bind("dragleave", function(a) {
                    c && o(a)
                }), b.bind("drop", function(a) {
                    c && p(a)
                }), b.attr("data-sortable", "true")
            })
        }

        function k(b) {
            if (Myspace.DragDropManager && Myspace.DragDropManager.isBeingDragged()) return !1;
            var i;
            f = !1, c = a(b.target).closest("li");
            if (c.is(h.ignoreSelectors)) return !1;
            j(), c.removeClass("transp").addClass(h.draggingClass), d = e = c.index(), i = b.originalEvent.dataTransfer, h.dragText !== g && i.setData("Text", h.dragText(b, c)), i.effectAllowed = "copy", i.dropEffect = "copy";
            var k = h.ghostDragee ? h.ghostDragee(c) : c;
            return i.setDragImage && i.setDragImage(k[0], 20, 20), h.dragStart(b, c), !1
        }

        function l(a) {
            return a.preventDefault(), !f && d !== e && r(e), h.dragEnd(a, c), c.removeClass(h.activeClass).removeClass(h.draggingClass), c = null, s.reset(), !1
        }

        function m(b) {
            b.preventDefault();
            var d = a(b.target).closest("li");
            if (d[0] == c[0]) return !1;
            s.enter(function() {
                q(d)
            })
        }

        function n(a) {
            a.preventDefault();
            var b = a.originalEvent.dataTransfer;
            return b.dropEffect = "copy", !1
        }

        function o(b) {
            b.preventDefault();
            var d = a(b.target).closest("li");
            if (d[0] == c[0]) return !1;
            s.leave(function() {})
        }

        function p(a) {
            return a.preventDefault(), d === e ? !1 : (f = !0, h.drop && h.drop(a, c), !1)
        }

        function q(a) {
            var b = a.index();
            b === 0 ? a.before(c) : b < d ? a.before(c) : b > d && a.after(c), a.addClass(h.hoverSupressorClass), c.addClass(h.activeClass), d = b
        }

        function r(a) {
            q(h.$elem.children("li:eq(" + a + ")"))
        }

        function t() {
            h.$elem.unbind("dragend").unbind("dragstart")
        }
        var c, d, e, f = !1,
            g = function() {},
            h = {
                $elem: b.$elem,
                ignoreSelectors: b.ignoreSelectors,
                activeClass: b.activeClass || "",
                draggingClass: b.draggingClass || "",
                hoverSupressorClass: b.hoverSupressorClass || "",
                helperClass: b.helperClass || "",
                dragText: b.dragText || g,
                dragStart: b.dragStart || g,
                dragEnd: b.dragEnd || g,
                dragEnter: b.dragEnter || g,
                dragLeave: b.dragLeave || g,
                drag: b.drag,
                drop: b.drop,
                ghostDragee: b.ghostDragee
            },
            s = {
                count: 0,
                enter: function(a) {
                    !this.count && a && a(), this.count++
                },
                leave: function(a) {
                    this.count--, !this.count && a && a()
                },
                reset: function() {
                    this.count = 0
                }
            };
        return i(), {
            rebind: i,
            unbind: t
        }
    }
})(jQuery);
! function(a) {
    "use strict",
    a(function() {
        a.support.transition = function() {
            var a = function() {
                var a = document.createElement("bootstrap"),
                    b = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    },
                    c;
                for (c in b)
                    if (a.style[c] !== undefined) return b[c]
            }();
            return a && {
                end: a
            }
        }()
    })
}(window.jQuery), ! function(a) {
    "use strict";
    var b = function(a, b) {
            this.init("tip", a, b)
        },
        c = /in/;
    b.prototype = {
        constructor: b,
        init: function(b, c, d) {
            var e, f;
            this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, this.hideTimeout = undefined, this.options.trigger != "manual" && (e = this.options.trigger == "hover" ? "mouseenter" : "focus", f = this.options.trigger == "hover" ? "mouseleave" : "blur", this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this))), this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function(b) {
            return b = a.extend({}, a.fn[this.type].defaults, b, this.$element.data()), b.delay && typeof b.delay == "number" && (b.delay = {
                show: b.delay,
                hide: b.delay
            }), b
        },
        enter: function(b) {
            var c = a(b.currentTarget)[this.type](this._options).data(this.type);
            if (!c.options.delay || !c.options.delay.show) return c.show();
            clearTimeout(this.timeout), c.hoverState = "in", this.timeout = setTimeout(function() {
                c.hoverState == "in" && c.show()
            }, c.options.delay.show)
        },
        leave: function(b) {
            var c = a(b.currentTarget)[this.type](this._options).data(this.type);
            if (!c.options.delay || !c.options.delay.hide) return c.hide();
            clearTimeout(this.timeout), c.hoverState = "out", this.timeout = setTimeout(function() {
                c.hoverState == "out" && c.hide()
            }, c.options.delay.hide)
        },
        show: function() {
            var b, d, e, f, g, h, i, j;
            if (this.hasContent() && this.enabled) {
                clearTimeout(this.hideTimeout), b = this.tip(), this.setContent(), b.attr("data-name", this.getTipName()), j = this.$element.attr("data-tip-class"), j = j || this.options.classes, this.options.animation && b.addClass("fade"), h = typeof this.options.placement == "function" ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement;
                if (h === !1) return;
                d = c.test(h), b.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).appendTo(d ? this.$element : document.body), e = this.getPosition(d), f = b[0].offsetWidth, g = b[0].offsetHeight;
                switch (d ? h.split(" ")[1] : h) {
                    case "bottom":
                        i = {
                            top: e.top + e.height,
                            left: e.left + e.width / 2 - f / 2
                        };
                        break;
                    case "top":
                        i = {
                            top: e.top - g,
                            left: e.left + e.width / 2 - f / 2
                        };
                        break;
                    case "left":
                        i = {
                            top: e.top + e.height / 2 - g / 2,
                            left: e.left - f
                        };
                        break;
                    case "right":
                        i = {
                            top: e.top + e.height / 2 - g / 2,
                            left: e.left + e.width
                        }
                }!d && (i.left + f > a(window).width() || i.top < 10) && (i = {
                    top: e.top + e.height / 2 - g / 2,
                    left: e.left - f
                }, h = "left"), b.css(i).addClass(h).addClass("in").addClass(j)
            }
        },
        isHTML: function(a) {
            return typeof a != "string" || a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 || /^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(a)
        },
        setContent: function() {
            var a = this.tip(),
                b = this.options.allowHtml ? this.getTitle() : htmlEncode(this.getTitle());
            a.find(".tip-inner")[this.options.allowHtml ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
        },
        hide: function() {
            function d() {
                b.hideTimeout = setTimeout(function() {
                    c.off(a.support.transition.end).remove()
                }, 500), c.one(a.support.transition.end, function() {
                    clearTimeout(b.hideTimeout), c.remove()
                })
            }
            var b = this,
                c = this.tip();
            return c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d() : c.remove(), this
        },
        fixTitle: function() {
            var a = this.$element;
            (a.attr("title") || typeof a.attr("data-original-title") != "string") && a.attr("data-original-title", a.attr("title") || "").removeAttr("title")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getPosition: function(b) {
            return a.extend({}, b ? {
                top: 0,
                left: 0
            } : this.$element.offset(), {
                width: this.$element[0].offsetWidth,
                height: this.$element[0].offsetHeight
            })
        },
        getTitle: function() {
            var a, b = this.$element,
                c = this.options;
            return a = b.attr("data-original-title") || (typeof c.title == "function" ? c.title.call(b[0]) : c.title), a
        },
        getTipName: function() {
            return this.$element.attr("data-tip-name") || this.options.name
        },
        tip: function() {
            return this.$tip = this.$tip || a(this.options.template)
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        },
        toggle: function() {
            this[this.tip().hasClass("in") ? "hide" : "show"]()
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        },
        addOKCustomClass: function() {
            this.tip().removeClass("warning error info").addClass("ok")
        },
        addWarningInfoClass: function() {
            this.tip().removeClass("ok error info").addClass("warning")
        },
        addErrorCustomClass: function() {
            this.tip().removeClass("ok warning info").addClass("error")
        },
        addInfoCustomClass: function() {
            this.tip().removeClass("ok warning error").addClass("info")
        }
    }, a.fn.tip = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("tip"),
                f = typeof c == "object" && c;
            e || d.data("tip", e = new b(this, f)), typeof c == "string" && e[c]()
        })
    }, a.fn.tip.Constructor = b, a.fn.tip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tip"><div class="tip-arrow"></div><div class="tip-inner"></div></div>',
        trigger: "hover",
        title: "",
        delay: 0,
        classes: ""
    }
}(window.jQuery);
(function(a) {
    Myspace.Parallax = function(b, c) {
        function i() {
            d = !1, c.css("transform", "translate3d(" + -(f / 2) + "px,0,0)"), e && (c.show(), e = !1)
        }

        function j() {
            d || h(i), d = !0
        }

        function k() {
            g = b.width() * 2
        }
        var d = !1,
            e = !1,
            f = 0,
            g, h = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                    window.setTimeout(a, 1e3 / 60)
                }
            }();
        b.length && c.length && b.on("scroll", function() {
            f = b[0].scrollLeft, f < g ? j() : e || (c.hide(), e = !0)
        }), a(window).resize(k), k()
    }
})(jQuery);
var Myspace = Myspace || {};
(function(a) {
    function b(a, b, c) {
        var d = "center";
        return c && c == 1 && window.innerHeight - (b.bottom + b.top) / 2 >= a / 2 && (b.bottom + b.top) / 2 >= a / 2 ? d = "center" : window.innerHeight - 60 - b.bottom >= a ? d = "bottom" : b.top >= a && (d = "top"), c && c == 2 && (b.top >= a ? d = "top" : window.innerHeight - 60 - b.bottom >= a && (b.bottom > a / 2 ? d = "center" : d = "bottom")), d
    }

    function c(a, b, c) {
        if (c) {
            if (window.innerWidth - b.right >= a) return "right";
            if (b.left >= a) return "left"
        }
        if (window.innerWidth - b.left >= a) return "right";
        if (b.right >= a) return "left"
    }

    function d(a, b, c, d) {
        var e = a === "bottom" ? c.bottom + 6 : c.top - b - 6;
        return d && (e = a == "center" ? (c.bottom + c.top - b) / 2 - 6 : a == "bottom" ? c.top : c.bottom - b), e
    }

    function e(a, b, c, d) {
        return d ? a === "right" ? c.right + 6 : c.left - b - 6 : a === "right" ? c.left : c.right - b
    }

    function f(a, b) {
        return b.clientX >= a.left && b.clientX <= a.right && b.clientY >= a.top && b.clientY <= a.bottom
    }
    Myspace.Popover = function(b, c) {
        this.$popover = b, this.options = a.extend({
            autoHide: !0,
            preRender: function(a, b, c) {
                c()
            },
            toggleClass: "popoverActive"
        }, c)
    }, Myspace.Popover.prototype.hide = function() {
        this.$popover.removeClass("open"), clearTimeout(this.mouseTimer), a(window).unbind("mousemove.popover resize.popover"), this.options.onHide && this.options.onHide(this.$popover, this.$activeTarget), this.$activeTarget && this.$activeTarget.removeClass(this.options.toggleClass), delete this.$activeTarget
    }, Myspace.Popover.prototype.show = function(g, h, i) {
        var j;
        if (this.$activeTarget) {
            if (this.$activeTarget[0] === g[0]) {
                if (this.options.toggleView) {
                    this.options.toggleView(this.$popover, this.$activeTarget, h);
                    return
                }
                return
            }
            this.hide()
        }
        this.$activeTarget = g.addClass(this.options.toggleClass);
        var k = this;
        h && (this.options = a.extend(this.options, h)), j = !i && k.options.autoHide, this.options.preRender(this.$popover, g, function() {
            var h = g[0],
                l = k.options.side,
                m = h.getBoundingClientRect(),
                n = k.options.y || b(k.$popover.height(), m, l);
            n == "center" && (l = 1);
            var o = k.options.x || c(k.$popover.width(), m, l),
                p = d(n, k.$popover.height(), m, l),
                q = e(o, k.$popover.width(), m, l),
                r;
            p < 0 && n == "center" && (n = "bottom", p = d(n, k.$popover.height(), m, l)), r = {
                position: "fixed",
                top: p,
                left: q
            }, l && l == 2 && (r = a.extend({}, r, {
                display: "none"
            })), k.$popover.css(r).removeClass("top right bottom left side center").addClass("open " + n + " " + o + (l ? " side" : "")), l && l == 2 && k.$popover.fadeIn(1e3), j ? (a(h).bind("mousewheel", function() {
                a(this).unbind("mousewheel"), k.hide()
            }), a(window).bind("mousemove.popover", function(a) {
                k.mouseTimer && clearTimeout(k.mouseTimer), k.mouseTimer = setTimeout(function() {
                    !f(k.$popover[0].getBoundingClientRect(), a) && !f(m, a) && k.hide()
                }, 100)
            }).unbind("blur.popover").bind("blur.popover", function() {
                k.hide()
            })) : i || a(window).bind("resize.popover", function() {
                k.hide()
            })
        })
    };
    var g = {},
        h = '<aside class="popover generic"><header></header><section></section></aside>';
    a.fn.popover = function(b) {
        b = a.extend({
            intentDelay: 400
        }, b);
        var c, d, e;
        return b.id ? (g[b.id] || (g[b.id] = a(h).attr("id", b.id).appendTo("body")), d = g[b.id]) : d = a(h).appendTo("body"), e = new Myspace.Popover(d, b), this.each(function() {
            var f = a(this);
            if (f.data("popover-initialized")) return;
            f.data("popover-initialized", !0), f.bind("mouseenter.popover", function() {
                if (e.activeTarget === this) return;
                c = setTimeout(function() {
                    b.title && d.find("header").html(b.title), b.content && d.find("section").html(b.content), e.show(f)
                }, b.intentDelay)
            }).bind("mouseleave.popover", function() {
                c && clearTimeout(c)
            })
        })
    }
})(jQuery);
var Myspace = Myspace || {};
(function(a) {
    function h(a) {
        Myspace.Confirm({
            closeAll: !1,
            text: a,
            yes: {
                text: "OK"
            },
            no: !1
        })
    }

    function i(a) {
        var b = a.title ? a.title : "this user";
        Myspace.Confirm({
            closeAll: !1,
            text: "Are you sure you want to block " + b + "? They will not be able to connect with you, your content, or send you messages.",
            yes: {
                text: "Confirm",
                onClick: function() {
                    comm.send("block", a)
                }
            },
            no: {
                text: "Cancel"
            }
        })
    }

    function j(a) {
        Myspace.Confirm({
            closeAll: !1,
            text: "You are connecting to a user that you have blocked. If you would like for them to be able to connect to you or see your content, you need to unblock them.  Unblock?",
            yes: {
                text: "Yes",
                onClick: function() {
                    comm.send("unblock", a)
                }
            },
            no: {
                text: "No"
            }
        })
    }

    function k(b) {
        var c = a('.playBtn[data-uid="' + b.uid + '"]'),
            d = objectify(c);
        new Myspace.LinkEmbedDialog(d)
    }

    function l(a, b, c) {
        var d = "connect.status",
            e = {
                entityKey: a,
                isConnected: b,
                isPending: c
            };
        comm.send(d, e), scomm.send(d, e)
    }

    function m(a, b) {
        var c = b.entityKey,
            d = a === "connect";
        b.source && b.source.data("isConnected", d), b.isPending || l(c, d), b.onSuccess = function(e) {
            var f = e.outboundState === "Pending";
            if (!e.success) a == "connect" && f ? h("This connection requires approval. A connection request has been sent.") : a === "connect" && e.outboundState === "Blocked" ? h("Unfortunately, you cannot connect with this at this time.") : e.statusCode == 429 ? h("You have exceeded the permitted connect frequency.  Please try again later.") : setTimeout(function() {
                Myspace.Error({
                    yes: {
                        onClick: function() {
                            l(c, d), comm.send(a, b)
                        }
                    }
                })
            }, 550), l(c, !d, f);
            else {
                if (b.type === "mixtape")
                    if (a === "disconnect") comm.send("mix.deleted", {
                        entityKey: c
                    });
                    else {
                        var g = b.id.split(",");
                        comm.send("mix.addConnected", {
                            playlistId: g[1],
                            profileId: g[0]
                        })
                    } b.isPending && !f && l(c, d)
            }
        }
    }

    function n(a, b) {
        var c = a.data("action"),
            e = a.data("requireLogin"),
            f = a.data("loginAction"),
            g = objectify(b);
        if (c === "connect" && b.data("isBlocked")) {
            j(g), comm.send("connect", g);
            return
        }
        if (e && !Myspace.User.isLoggedIn) {
            comm.send("login.prompt", {
                action: f,
                object: g.entityKey
            });
            return
        }
        g.item = a, g.source = b;
        var h;
        a.is("li") ? h = new Tracking("HCard Menu", a.text(), g.type) : h = new Tracking("Connect Button", c, g.type), comm.send("influencer.click", g.source), g.type === "profile" && (g.id = g.profileId || g.artistId), c === "connect" || c === "disconnect" ? m(c, g) : (c === "like" || c === "unlike") && A(c, g);
        if (c === "block") {
            i(g);
            return
        }
        if (c == "link/embed") {
            k(g), d.hide();
            return
        }
        if (["mix.selectAndAddItem", "song.delete", "video.delete"].indexOf(c) > -1) {
            var l, n;
            l = b.closest(".right").siblings(".left").find(".playBtn"), l.length || (l = b.closest(".mediaSquare,.media").find(".playBtn")), l.length && (n = objectify(l), g.mediaId = g.id, g.title = n.title, delete g.item, n.mediaReleaseId && (g.releaseId = n.mediaReleaseId));
            if (c === "song.delete" || c === "video.delete") g.profileId = context.playlistOwnerProfileId, g.playlistId = context.playlistId, g.objectVersion = context.objectVersion, g.sequenceId = n.sequenceId, g.mediaType = n.mediaType
        } else if (c == "inline.comment") {
            var o = g.source.closest("li.streamItem");
            if (!o.length || !o.attr("data-activity-type")) c = "connect>photoComment"
        } else if (c == "download") {
            var p = document.createElement("a");
            p.href = b.data("downloadUrl"), g.type == "video" && (p.download = "download"), document.body.appendChild(p), p.click()
        }
        c !== "connect" && c !== "disconnect" && c !== "connect>makeProfilePicture" && c !== "connect>makeProfileCover" && d.hide(), g.type === "video" && g.mediaReleaseId && (g.releaseEntityKey = "videorelease_" + g.mediaReleaseId), comm.send(c, g)
    }

    function o(b, c) {
        function j(a) {
            return ["Queue", "Link/Embed"].indexOf(a) > -1
        }

        function k(b) {
            return !!a('.playBtn[data-uid="' + b + '"]').length
        }
        var d = "",
            e = b.find("ul"),
            h = c.data("type") || c.data("area").replace(/s+$/, ""),
            i = f[h];
        if (!i) return;
        i.menu.forEach(function(b) {
            if (c.attr("data-comment") === "false" && b === "Comment") return;
            var e = g[b](c);
            if (e) {
                if (j(e.title) && !k(c.attr("data-uid"))) return;
                var f = a("<li></li>").text(e.title).attr("data-action", e.action);
                e.requireLogin && f.attr("data-require-login", !0).attr("data-login-action", e.loginAction), d += f[0].outerHTML
            }
        }), e.html(d).unbind("click.hCard").bind("click.hCard", function(b) {
            var d = a(b.target);
            if (d.is("li")) return n(d, c), !1
        })
    }

    function p(a) {
        return a.data("entityKey") || a.data("area") + "_" + a.data("id")
    }

    function q(c, d, e) {
        var f = {
                id: c.data("id")
            },
            g = c.data("area"),
            h = p(c);
        if (b[h]) return e(b[h]);
        f.entityKey = c.data("entityKey"), f.influencer = c.closest("[data-influencer]").data("influencer"), d || (f.getConnection = !0), g === "profiles" ? f.profileid = "profile_" + (c.data("profileId") !== "undefined") ? c.data("profileId") : c.data("artistId") : g === "music" ? f.type = c.data("type") : g === "mixes" ? (f.profileid = c.data("profileId"), f.id = c.data("id").split(",")[1]) : g === "stream" && (f.actiontype = c.data("actiontype"), f.type = c.data("type"), f.itemaction = c.data("item-action")), a.ajax({
            type: "post",
            url: "/ajax/" + g + "/tooltip",
            data: f,
            success: function(a) {
                return d && (a.isConnected = c.data("isConnected"), a.isReverseConnected = c.data("isReverseConnected"), a.isPending = c.data("isPending")), g === "profiles" && (a.title = a.title, a.imageUrl = a.imageUrl, c.attr("data-title", a.title), c.attr("data-image-url", a.imageUrl)), b[h] = a, e(b[h])
            }
        })
    }

    function r(b, c, d) {
        comm.send("socialhcard.hide");
        var e = !c.hasClass("moreActivity"),
            g = typeof c.data("isConnected") == "undefined" ? !1 : !0,
            h = c.data("type") || c.data("area").replace(/s+$/, "");
        if (h === "none") return;
        if (e) {
            if (h === "profile" && c.data("profileid") === context.profileId) return;
            b.html('<div id="hCard"><ul></ul><section class="loading white"></section></div>').height(f[h].height), g && o(b, c), c.data("area") ? q(c, g, function(d) {
                c.data("isReverseConnected", d.isReverseConnected), c.data("isConnected", d.isConnected), c.data("isPending", d.isPending), c.data("isBlocked", d.isBlocked), c.data("isPrivate", d.isPrivate), c.data("isOnline", d.isOnline), o(b, c), b.find("section").removeClass("loading").html(d.content).find('a[rel="tooltip"]').tip(), b.find("a").click(function() {}), b.find(".summaryDetails").length && b.find(".affinitySummary.hasDetails > div").on("mouseenter mouseleave", function() {
                    a(this).find(".summaryDetails").show(), b.css("height", "auto")
                })
            }) : b.find("#hCard").addClass("noContent"), s(c), d()
        } else q(c, !0, function(a) {
            b.html(a), s(c), d()
        })
    }

    function s(b) {
        b.bind("mousewheel", function() {
            a(this).unbind("mousewheel"), d.hide()
        })
    }

    function t(a, c) {
        c && c.hasClass("moreActivity") && (b[p(c)] = a.html()), a.height("auto").html()
    }

    function u(b) {
        b.find(".tooltips[data-popover-initialized!='true']").each(function() {
            var b = a(this);
            if (b.attr("data-popover-initialized")) return;
            b.attr("data-popover-initialized", !0), b.bind("mouseenter.popover", function() {
                if (d.$activeTarget && d.$activeTarget[0] === this) return;
                c = setTimeout(function() {
                    e.hasClass("dragging") || d.show(b)
                }, 400)
            }).bind("mouseleave.popover", function() {
                c && clearTimeout(c)
            }), b.hasClass("connectButton") && b.bind("touchstart.popover", function(a) {
                a.preventDefault(), d.$activeTarget ? d.hide() : d.show(b)
            })
        })
    }

    function v(b) {
        b.find("[rel='tooltip']").each(function() {
            var b = a(this).data("position") || "top";
            a(this).tip({
                placement: b,
                delay: 250
            })
        })
    }

    function w(a, b) {
        var c = a.data("action"),
            d = a.data("requireLogin"),
            e = a.data("loginAction"),
            f = objectify(b);
        if (d && !Myspace.User.isLoggedIn) {
            comm.send("login.prompt", {
                action: e,
                object: f.entityKey
            });
            return
        }
        f.item = a, f.source = b;
        var g;
        g = new Tracking("Like Button", c, f.type), comm.send("influencer.click", f.source);
        if (f.type === "profile") return !1;
        (c === "like" || c === "unlike") && A(c, f), comm.send(c, f)
    }

    function x(b) {
        a(".stats > a.nLikes[data-entity-key='" + b.entityKey + "']").each(function() {
            var c = a(this),
                d = c.find("span").text().trim(),
                e = d && parseInt(d, 10) || 0;
            b.isLiked ? e += 1 : e -= 1, e < 1 && (e = "0"), (c.hasClass("hideSocial") || c.hasClass("hide")) && c.removeClass("hideSocial hide"), c.find("span").text(e)
        })
    }

    function y(a, b) {
        b.isLiked ? a.addClass("active") : a.removeClass("active")
    }

    function z(a, b, c) {
        var d = "like.status",
            e = {
                entityKey: a,
                isLiked: b,
                secEntityKey: c
            };
        comm.send(d, e), scomm.send(d, e)
    }

    function A(a, b) {
        var c = b.entityKey,
            d = b.secLikeEntityKey,
            e = a === "like";
        b.source && b.source.data("isLike", e), z(c, e, d), b.onSuccess = function(a) {
            a.success || z(c, !e, d)
        }
    }
    var b = {},
        c, d, e = a("body"),
        f = {
            album: {
                height: 280,
                menu: ["Connect", "Like", "Queue", "Share", "Add to Mix", "Link/Embed", "Report"]
            },
            mixtape: {
                height: 330,
                menu: ["Connect", "Like", "Queue", "Delete", "Share", "Link/Embed", "Report"]
            },
            photo: {
                menu: ["Connect", "Like", "Delete", "Share", "Comment", "Profile Photo", "Profile Cover", "Report"]
            },
            profile: {
                height: 320,
                menu: ["Connect", "Share", "Message", "Block", "Report"]
            },
            song: {
                height: 280,
                menu: ["Connect", "Like", "Queue", "Delete", "Share", "Add to Mix", "Profile Song", "Link/Embed", "Download", "Report"]
            },
            video: {
                height: 250,
                menu: ["Connect", "Like", "Queue", "Delete", "Share", "Add to Mix", "Link/Embed", "Download", "Report"]
            },
            article: {
                menu: ["Connect", "Like", "Share", "Comment"]
            }
        },
        g = {
            "Add to Mix": function(a) {
                return {
                    action: "mix.selectAndAddItem",
                    title: "Add to Mix",
                    requireLogin: !0,
                    loginAction: "addToMix"
                }
            },
            Comment: function(a) {
                var b;
                return a.data("type") === "photo" || a.data("type") === "article" ? b = "inline.comment" : b = "rightRail.comments", {
                    action: b,
                    title: "Comment",
                    requireLogin: !0,
                    loginAction: "comment"
                }
            },
            Like: function(a) {
                var b, c;
                return context.features.isLikeEnable ? (b = a.data("isLiked") ? "unlike" : "like", c = a.data("isLiked") ? "Unlike" : "Like", {
                    action: b,
                    title: c,
                    requireLogin: !0,
                    loginAction: "like"
                }) : !1
            },
            Connect: function(a) {
                var b, c;
                return a.data("isOwner") ? !1 : (a.data("isPending") ? (b = "connect", c = "Pending") : (b = a.data("isConnected") ? "disconnect" : "connect", c = a.data("isConnected") ? "Disconnect" : "Connect"), {
                    action: b,
                    title: c,
                    requireLogin: !0,
                    loginAction: "connect"
                })
            },
            Block: function(a) {
                return Myspace.User.isLoggedIn && !a.data("isOwner") ? {
                    action: a.data("isBlocked") ? "unblock" : "block",
                    title: a.data("isBlocked") ? "Unblock" : "Block"
                } : !1
            },
            "Link/Embed": function(a) {
                return {
                    action: "link/embed",
                    title: "Link/Embed",
                    requireLogin: !1
                }
            },
            Delete: function(a) {
                var b = a.data("type");
                return Myspace.User.isLoggedIn && (b !== "mixtape" && b !== "song" && a.data("isOwner") || a.data("isRemovable")) ? {
                    action: b + ".delete",
                    title: "Delete"
                } : !1
            },
            "Profile Cover": function(a) {
                return Myspace.User.isLoggedIn && a.data("isOwner") ? {
                    action: "connect>makeProfileCover",
                    title: "Cover Photo"
                } : !1
            },
            "Profile Photo": function(a) {
                return Myspace.User.isLoggedIn && a.data("isOwner") ? {
                    action: "connect>makeProfilePicture",
                    title: "Profile Photo"
                } : !1
            },
            "Profile Song": function() {
                return {
                    action: "updateProfileSong",
                    title: "Profile Song",
                    requireLogin: !0,
                    loginAction: "makeProfileSong"
                }
            },
            "Report Song": function() {
                return Myspace.User.isLoggedIn && context.reportSongEnabled ? {
                    action: "report>song",
                    title: "Report Song"
                } : !1
            },
            "Send as Message": function(a) {
                return context.features.isMessagingEnabled && !context.features.isOfflineMessagingEnabled ? {
                    action: "messaging.popout",
                    title: "Send as Message",
                    requireLogin: !0,
                    loginAction: "sendAsMessage"
                } : !1
            },
            Message: function(a) {
                var b = a.data("isConnected"),
                    c = a.data("isReverseConnected"),
                    d = a.data("isOnline"),
                    e = b && c,
                    f = context.features.isMessagingEnabled && (d || context.features.isOfflineMessagingEnabled || !Myspace.User.isLoggedIn);
                return !context.features.isMessagingToStrangerEnabled && Myspace.User.isLoggedIn && (f = f && e), f ? {
                    action: "chat.open",
                    title: "Send Message",
                    requireLogin: !0,
                    loginAction: "message"
                } : !1
            },
            Share: function(a) {
                return context.features.isShareIsEnable && !a.data("isPrivate") ? {
                    action: "share",
                    title: "Share",
                    requireLogin: !0,
                    loginAction: "share"
                } : !1
            },
            "Start Radio": function(a) {
                return context.features.isRadioEnabled && a.data("radioStationEntityKey") ? {
                    action: "playRadio",
                    title: "Start Radio",
                    requireLogin: !0,
                    loginAction: "playRadio"
                } : !1
            },
            Queue: function(a) {
                return a.data("type") === "mixtape" && a.closest(".mediaSquare,.media").hasClass("noMedia") ? !1 : {
                    action: "connect>queue",
                    title: "Queue",
                    requireLogin: !1
                }
            },
            Report: function(a) {
                return Myspace.User.isLoggedIn && (!a.data("isOwner") || a.data("type") == "song" || a.data("type") == "album") ? {
                    action: "reportAbuse",
                    title: "Report"
                } : !1
            },
            Download: function(a) {
                return a.data("downloadUrl") ? {
                    action: "download",
                    title: "Download"
                } : !1
            }
        };
    scomm.add(function(a, b) {
        a == "connect.status" && comm.send(a, b)
    }), comm.listen("connect.status", function(c) {
        var d = b[c.entityKey];
        d && (d.isConnected = c.isConnected, d.isPending = !!c.isPending), b[c.entityKey] = d, a('.tooltips[data-entity-key="' + c.entityKey + '"]').toggleClass("connected", c.isConnected), a("#hCard > ul > li:first-child").text(c.isConnected ? "Disconnect" : c.isPending ? "Pending" : "Connect").data("action", c.isConnected ? "disconnect" : "connect")
    }, !0), comm.listen("connect.complete", function(b) {
        b.action == "block" ? (a('.tooltips[data-entity-key="' + b.entityKey + '"]').data("isBlocked", !0), a("#hCard > ul > li[data-action='block']").attr("data-action", "unblock").html("Unblock"), b.isConnected = !1, comm.send("connect.status", b)) : b.action == "unblock" && (a('.tooltips[data-entity-key="' + b.entityKey + '"]').data("isBlocked", !1), a("#hCard > ul > li[data-action='unblock']").attr("data-action", "block").html("Block"))
    }, !0), d = new Myspace.Popover(a("#popover"), {
        preRender: r,
        onHide: t
    }), e.delegate(".connectButton", "click", function() {
        var b = a(this);
        if (!b.data("isOwner")) {
            var c = b.hasClass("connected") ? "disconnect" : "connect";
            b.data("action", c).data("requireLogin", !0).data("loginAction", c), n(b, b)
        }
        return !1
    }), u(e), v(e), comm.listen("hcard.init", u, !0), comm.listen("hcard.hide,search.overlay", function() {
        d.hide()
    }, !0), comm.listen("page.changed", function(b) {
        u(b), u(a("#sidebar")), v(b)
    }, !0), comm.listen("spaceway.page.complete", function() {
        b = {}, d.hide()
    }, !0), e.delegate(".likeBtn", "click", function() {
        var b = a(this),
            c = b.hasClass("active") ? "unlike" : "like";
        return b.data("action", c).data("requireLogin", !0).data("loginAction", c), w(b, b), !1
    }), comm.listen("like.status", function(b) {
        var c = a('.likeBtn[data-entity-key="' + b.entityKey + '"]'),
            d = a('.likeBtn[data-sec-like-entity-key="' + b.entityKey + '"]'),
            e = b.isLiked ? "like" : "unlike";
        d.length && comm.send("like.status", {
            entityKey: d.data("entityKey"),
            isLiked: b.isLiked
        }), y(c, b), a('.tooltips[data-entity-key="' + b.entityKey + '"]').data("isLiked", b.isLiked), a("#hCard > ul > li.attr[data-action='" + e + "']").text(b.isLiked ? "Unlike" : "Like").data("action", b.isLiked ? "unlike" : "like");
        if (b.secEntityKey) {
            var f = a('.likeBtn[data-entity-key="' + b.secEntityKey + '"]');
            y(f, b), a('.tooltips[data-entity-key="' + b.secEntityKey + '"]').data("isLiked", b.isLiked)
        }
        x(b)
    }, !0)
})(jQuery);
(function(a) {
    function k(b, d, g) {
        var h = d.data("name");
        if (h == "home" || h == "discover" || h == "profile") {
            var i = {};
            i.pagename = h, f = h, h == "profile" && (i.profileValue = context.homeTraySetting && context.homeTraySetting.profileTipValue || ""), a.ajax({
                type: "post",
                url: "/ajax/homeToolTip",
                data: i,
                success: function(b) {
                    b.success && (c.find("section").html(b.html), h == "profile" && c.find("ol > li > a").each(function() {
                        var b = a(this),
                            c = b.attr("data-href");
                        c && b.click(function() {
                            e.hide(), comm.send("location.href", c)
                        })
                    }), g())
                },
                onError: function(a) {
                    console.log("Err : " + a)
                }
            })
        } else {
            f = "", c.find("section").html("").append(a("<h6>")).append(a("<p>"));
            var k = j[h],
                l = c.find("section > h6"),
                m = c.find("section > p");
            l.text(k.title), m.text(k.content);
            if (h == "incognito") try {
                localStorage.incognitoTipDisplayed = 1
            } catch (n) {}
            g()
        }
    }

    function l(c) {
        c.find(".myspaceTip").each(function() {
            var c = a(this);
            if (c.data("popoverInitialized") || c.data("helpTipDisabled")) return;
            c.data("popoverInitialized", !0), c.bind("mouseenter.popover", function() {
                i && clearInterval(i);
                if (e.$activeTarget && e.$activeTarget[0] === this) return;
                if (c.data("name") == "incognito" && localStorage.incognitoTipDisplayed) return;
                h = setTimeout(function() {
                    var a = {};
                    c.data("tipVerticalPlacement") && (a.y = c.data("tipVerticalPlacement")), b.hasClass("dragging") || e.show(c, a)
                }, 700)
            }).bind("mouseleave.popover", function() {
                h && clearTimeout(h)
            })
        })
    }
    var b = a("body"),
        c = a("#myspaceTip"),
        d = c.find("header > .close"),
        e, f = "",
        g = {
            home: !1,
            discover: !1
        },
        h, i, j = {
            incognito: {
                title: "Private/Public Plays",
                content: "Make your song and video plays private and choose whether to publish plays on Facebook."
            },
            library: {
                title: "Library",
                content: "Your library consists of the songs, albums, videos and photos that you've uploaded, added to a mix or connected to."
            },
            manage: {
                title: "Manage",
                content: "Manage your audio and video catalog. Upload an original song, album or video here."
            },
            mixes: {
                title: "Mixes",
                content: "We’re taking photo albums and playlists to the next level. Mixes are collections of songs that you can combine with photos and videos."
            },
            people: {
                title: "People",
                content: "Check out the people you have connected to and those that have connected to you."
            },
            pin: {
                title: "Pin the Player Open",
                content: "Click the Pin button to keep your music player open as you discover the rest of the site."
            }
        };
    d.click(function() {
        e.$activeTarget && e.$activeTarget.unbind("mouseenter.popover"), e && (e.hide(), i && clearInterval(i), f && (g[f] = !0, f = ""))
    }), e = new Myspace.Popover(c, {
        preRender: k
    }), l(b), comm.listen("show.tooltip", function(b) {
        var d = a("#unifiedSidebar .stream");
        if (g[b.name]) return;
        d && d.length && (e.show(d, {}, !0), i && clearInterval(i), a(window).bind("resize.animation", function() {
            i && clearInterval(i), e.hide(), a(window).unbind("resize.animation"), comm.send("show.tooltip", b)
        }), i = setInterval(function() {
            var a = parseInt(c.css("top"), 10);
            c.animate({
                top: a - 10
            }, 300).animate({
                top: a
            }, 300)
        }, 3e3))
    }, !0), comm.listen("search.overlay,spaceway.page.complete", function() {
        e.hide()
    }, !0)
})(jQuery);
var Myspace = Myspace || {};
(function(a) {
    var b, c, d;
    comm.listen("reportAbuse", function(c) {
        c.userEntityKey = c.userEntityKey || c.ownerEntityKey, !c.userEntityKey && c.entityKey.startsWith("profile") && (c.userEntityKey = c.entityKey), a.ajax({
            url: "/ajax/reportAbuseForm/" + c.type,
            type: "POST",
            dataType: "json",
            data: {
                userEntityKey: c.userEntityKey
            }
        }).done(function(e) {
            e.html && (d && d.remove(), a("body").append(e.html), d = a("#reportAbuseDialog"), b = new Myspace.Dialog(d, {
                closeAll: !0
            }), a('input[name="reportReason"]', d).click(function() {
                a(".reportNotes", d).hide(), a(".reportNotes:required").attr("required", !1);
                var b = a("input:radio:checked", d).parent().next(".reportNotes");
                b[0].required = !0, b.slideDown("200", function() {
                    b.focus()
                })
            }), a(".cancel", d).click(function() {
                return b.hide(), !1
            }), a("button.primary", d).click(function() {
                if (a(".reportNotes:required").val() === "") return a(".reportNotes:required").css("background-color", "#FAA"), !1;
                var b = a('input[name="reportReason"]:checked', d).val();
                if (!b) return Myspace.Error({
                    text: "Select why you are reporting this content.",
                    no: !1,
                    yes: {
                        text: "OK"
                    },
                    closeAll: !1
                }), !0;
                var e = a('input[name="block"]', d).is(":checked"),
                    f = a("input:radio:checked", d).parent().next(".reportNotes").val();
                return b == "Impersonation" && a('input[name="reportReasonDetails"]:checked', d).val() == "LoginIssue" ? (comm.send("location.href", "https://help.myspace.com/hc/en-us/sections/200421370-Log-in"), !1) : (a.ajax({
                    url: "/ajax/reportAbuse",
                    type: "POST",
                    dataType: "json",
                    data: {
                        entityKey: c.releaseEntityKey || c.entityKey,
                        reason: b,
                        note: f
                    }
                }).done(function(a) {
                    a.success && (a.duplicate ? Myspace.successDialog("You have already reported this content.") : Myspace.successDialog("Your report will be reviewed and an action will be taken based on our terms of use.", "Content successfully reported")), e && window.setTimeout(function() {
                        comm.send("block", {
                            entityKey: c.userEntityKey,
                            type: c.userEntityKey.substring(0, c.userEntityKey.indexOf("_")),
                            id: c.userEntityKey.substring(c.userEntityKey.indexOf("_") + 1)
                        })
                    }, 4e3)
                }), !1)
            }), b.show(!1))
        })
    }, !0)
})(jQuery);
var Faye = typeof Faye == "object" ? Faye : {};
typeof window != "undefined" && (window.Faye = Faye), Faye.extend = function(a, b, c) {
        if (!b) return a;
        for (var d in b) {
            if (!b.hasOwnProperty(d)) continue;
            if (a.hasOwnProperty(d) && c === !1) continue;
            a[d] !== b[d] && (a[d] = b[d])
        }
        return a
    }, Faye.extend(Faye, {
        VERSION: "0.8.8",
        BAYEUX_VERSION: "1.0",
        ID_LENGTH: 160,
        JSONP_CALLBACK: "jsonpcallback",
        CONNECTION_TYPES: ["long-polling", "cross-origin-long-polling", "callback-polling", "websocket", "eventsource", "in-process"],
        MANDATORY_CONNECTION_TYPES: ["long-polling", "callback-polling", "in-process"],
        ENV: function() {
            return this
        }(),
        random: function(a) {
            a = a || this.ID_LENGTH;
            if (a > 32) {
                var b = Math.ceil(a / 32),
                    c = "";
                while (b--) c += this.random(32);
                var d = c.split(""),
                    e = "";
                while (d.length > 0) e += d.pop();
                return e
            }
            var f = Math.pow(2, a) - 1,
                g = f.toString(36).length,
                c = Math.floor(Math.random() * f).toString(36);
            while (c.length < g) c = "0" + c;
            return c
        },
        clientIdFromMessages: function(a) {
            var b = [].concat(a)[0];
            return b && b.clientId
        },
        copyObject: function(a) {
            var b, c, d;
            if (a instanceof Array) {
                b = [], c = a.length;
                while (c--) b[c] = Faye.copyObject(a[c]);
                return b
            }
            if (typeof a == "object") {
                b = a === null ? null : {};
                for (d in a) b[d] = Faye.copyObject(a[d]);
                return b
            }
            return a
        },
        commonElement: function(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (this.indexOf(b, a[c]) !== -1) return a[c];
            return null
        },
        indexOf: function(a, b) {
            if (a.indexOf) return a.indexOf(b);
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] === b) return c;
            return -1
        },
        map: function(a, b, c) {
            if (a.map) return a.map(b, c);
            var d = [];
            if (a instanceof Array)
                for (var e = 0, f = a.length; e < f; e++) d.push(b.call(c || null, a[e], e));
            else
                for (var g in a) {
                    if (!a.hasOwnProperty(g)) continue;
                    d.push(b.call(c || null, g, a[g]))
                }
            return d
        },
        filter: function(a, b, c) {
            var d = [];
            for (var e = 0, f = a.length; e < f; e++) b.call(c || null, a[e], e) && d.push(a[e]);
            return d
        },
        asyncEach: function(a, b, c, d) {
            var e = a.length,
                f = -1,
                g = 0,
                h = !1,
                i = function() {
                    g -= 1, f += 1;
                    if (f === e) return c && c.call(d);
                    b(a[f], k)
                },
                j = function() {
                    if (h) return;
                    h = !0;
                    while (g > 0) i();
                    h = !1
                },
                k = function() {
                    g += 1, j()
                };
            k()
        },
        toJSON: function(a) {
            return this.stringify ? this.stringify(a, function(a, b) {
                return this[a] instanceof Array ? this[a] : b
            }) : JSON.stringify(a)
        },
        logger: function(a) {
            typeof console != "undefined" && console.log(a)
        },
        timestamp: function() {
            var a = new Date,
                b = a.getFullYear(),
                c = a.getMonth() + 1,
                d = a.getDate(),
                e = a.getHours(),
                f = a.getMinutes(),
                g = a.getSeconds(),
                h = function(a) {
                    return a < 10 ? "0" + a : String(a)
                };
            return h(b) + "-" + h(c) + "-" + h(d) + " " + h(e) + ":" + h(f) + ":" + h(g)
        }
    }), Faye.Class = function(a, b) {
        typeof a != "function" && (b = a, a = Object);
        var c = function() {
                return this.initialize ? this.initialize.apply(this, arguments) || this : this
            },
            d = function() {};
        return d.prototype = a.prototype, c.prototype = new d, Faye.extend(c.prototype, b), c
    }, Faye.Namespace = Faye.Class({
        initialize: function() {
            this._used = {}
        },
        exists: function(a) {
            return this._used.hasOwnProperty(a)
        },
        generate: function() {
            var a = Faye.random();
            while (this._used.hasOwnProperty(a)) a = Faye.random();
            return this._used[a] = a
        },
        release: function(a) {
            delete this._used[a]
        }
    }), Faye.Error = Faye.Class({
        initialize: function(a, b, c) {
            this.code = a, this.params = Array.prototype.slice.call(b), this.message = c
        },
        toString: function() {
            return this.code + ":" + this.params.join(",") + ":" + this.message
        }
    }), Faye.Error.parse = function(a) {
        a = a || "";
        if (!Faye.Grammar.ERROR.test(a)) return new this(null, [], a);
        var b = a.split(":"),
            c = parseInt(b[0]),
            d = b[1].split(","),
            a = b[2];
        return new this(c, d, a)
    }, Faye.Error.versionMismatch = function() {
        return (new this(300, arguments, "Version mismatch")).toString()
    }, Faye.Error.conntypeMismatch = function() {
        return (new this(301, arguments, "Connection types not supported")).toString()
    }, Faye.Error.extMismatch = function() {
        return (new this(302, arguments, "Extension mismatch")).toString()
    }, Faye.Error.badRequest = function() {
        return (new this(400, arguments, "Bad request")).toString()
    }, Faye.Error.clientUnknown = function() {
        return (new this(401, arguments, "Unknown client")).toString()
    }, Faye.Error.parameterMissing = function() {
        return (new this(402, arguments, "Missing required parameter")).toString()
    }, Faye.Error.channelForbidden = function() {
        return (new this(403, arguments, "Forbidden channel")).toString()
    }, Faye.Error.channelUnknown = function() {
        return (new this(404, arguments, "Unknown channel")).toString()
    }, Faye.Error.channelInvalid = function() {
        return (new this(405, arguments, "Invalid channel")).toString()
    }, Faye.Error.extUnknown = function() {
        return (new this(406, arguments, "Unknown extension")).toString()
    }, Faye.Error.publishFailed = function() {
        return (new this(407, arguments, "Failed to publish")).toString()
    }, Faye.Error.serverError = function() {
        return (new this(500, arguments, "Internal server error")).toString()
    }, Faye.Deferrable = {
        callback: function(a, b) {
            if (!a) return;
            if (this._deferredStatus === "succeeded") return a.apply(b, this._deferredArgs);
            this._callbacks = this._callbacks || [], this._callbacks.push([a, b])
        },
        timeout: function(a, b) {
            var c = this,
                d = Faye.ENV.setTimeout(function() {
                    c.setDeferredStatus("failed", b)
                }, a * 1e3);
            this._timer = d
        },
        errback: function(a, b) {
            if (!a) return;
            if (this._deferredStatus === "failed") return a.apply(b, this._deferredArgs);
            this._errbacks = this._errbacks || [], this._errbacks.push([a, b])
        },
        setDeferredStatus: function() {
            this._timer && Faye.ENV.clearTimeout(this._timer);
            var a = Array.prototype.slice.call(arguments),
                b = a.shift(),
                c;
            this._deferredStatus = b, this._deferredArgs = a, b === "succeeded" ? c = this._callbacks : b === "failed" && (c = this._errbacks);
            if (!c) return;
            var d;
            while (d = c.shift()) d[0].apply(d[1], this._deferredArgs)
        }
    }, Faye.Publisher = {
        countListeners: function(a) {
            return !this._subscribers || !this._subscribers[a] ? 0 : this._subscribers[a].length
        },
        bind: function(a, b, c) {
            this._subscribers = this._subscribers || {};
            var d = this._subscribers[a] = this._subscribers[a] || [];
            d.push([b, c])
        },
        unbind: function(a, b, c) {
            if (!this._subscribers || !this._subscribers[a]) return;
            if (!b) {
                delete this._subscribers[a];
                return
            }
            var d = this._subscribers[a],
                e = d.length;
            while (e--) {
                if (b !== d[e][0]) continue;
                if (c && d[e][1] !== c) continue;
                d.splice(e, 1)
            }
        },
        trigger: function() {
            var a = Array.prototype.slice.call(arguments),
                b = a.shift();
            if (!this._subscribers || !this._subscribers[b]) return;
            var c = this._subscribers[b].slice(),
                d;
            for (var e = 0, f = c.length; e < f; e++) d = c[e], d[0].apply(d[1], a)
        }
    }, Faye.Timeouts = {
        addTimeout: function(a, b, c, d) {
            this._timeouts = this._timeouts || {};
            if (this._timeouts.hasOwnProperty(a)) return;
            var e = this;
            this._timeouts[a] = Faye.ENV.setTimeout(function() {
                delete e._timeouts[a], c.call(d)
            }, 1e3 * b)
        },
        removeTimeout: function(a) {
            this._timeouts = this._timeouts || {};
            var b = this._timeouts[a];
            if (!b) return;
            clearTimeout(b), delete this._timeouts[a]
        }
    }, Faye.Logging = {
        LOG_LEVELS: {
            error: 3,
            warn: 2,
            info: 1,
            debug: 0
        },
        logLevel: "error",
        log: function(a, b) {
            if (!Faye.logger) return;
            var c = Faye.Logging.LOG_LEVELS;
            if (c[Faye.Logging.logLevel] > c[b]) return;
            var a = Array.prototype.slice.apply(a),
                d = " [" + b.toUpperCase() + "] [Faye",
                e = this.className,
                f = a.shift().replace(/\?/g, function() {
                    try {
                        return Faye.toJSON(a.shift())
                    } catch (b) {
                        return "[Object]"
                    }
                });
            for (var g in Faye) {
                if (e) continue;
                if (typeof Faye[g] != "function") continue;
                this instanceof Faye[g] && (e = g)
            }
            e && (d += "." + e), d += "] ", Faye.logger(Faye.timestamp() + d + f)
        }
    },
    function() {
        for (var a in Faye.Logging.LOG_LEVELS)(function(a, b) {
            Faye.Logging[a] = function() {
                this.log(arguments, a)
            }
        })(a, Faye.Logging.LOG_LEVELS[a])
    }(), Faye.Grammar = {
        LOWALPHA: /^[a-z]$/,
        UPALPHA: /^[A-Z]$/,
        ALPHA: /^([a-z]|[A-Z])$/,
        DIGIT: /^[0-9]$/,
        ALPHANUM: /^(([a-z]|[A-Z])|[0-9])$/,
        MARK: /^(\-|\_|\!|\~|\(|\)|\$|\@)$/,
        STRING: /^(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)| |\/|\*|\.))*$/,
        TOKEN: /^(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)))+$/,
        INTEGER: /^([0-9])+$/,
        CHANNEL_SEGMENT: /^(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)))+$/,
        CHANNEL_SEGMENTS: /^(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)))+(\/(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)))+)*$/,
        CHANNEL_NAME: /^\/(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)))+(\/(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)))+)*$/,
        WILD_CARD: /^\*{1,2}$/,
        CHANNEL_PATTERN: /^(\/(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)))+)*\/\*{1,2}$/,
        VERSION_ELEMENT: /^(([a-z]|[A-Z])|[0-9])(((([a-z]|[A-Z])|[0-9])|\-|\_))*$/,
        VERSION: /^([0-9])+(\.(([a-z]|[A-Z])|[0-9])(((([a-z]|[A-Z])|[0-9])|\-|\_))*)*$/,
        CLIENT_ID: /^((([a-z]|[A-Z])|[0-9]))+$/,
        ID: /^((([a-z]|[A-Z])|[0-9]))+$/,
        ERROR_MESSAGE: /^(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)| |\/|\*|\.))*$/,
        ERROR_ARGS: /^(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)| |\/|\*|\.))*(,(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)| |\/|\*|\.))*)*$/,
        ERROR_CODE: /^[0-9][0-9][0-9]$/,
        ERROR: /^([0-9][0-9][0-9]:(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)| |\/|\*|\.))*(,(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)| |\/|\*|\.))*)*:(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)| |\/|\*|\.))*|[0-9][0-9][0-9]::(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)| |\/|\*|\.))*)$/
    }, Faye.Extensible = {
        addExtension: function(a) {
            this._extensions = this._extensions || [], this._extensions.push(a), a.added && a.added(this)
        },
        removeExtension: function(a) {
            if (!this._extensions) return;
            var b = this._extensions.length;
            while (b--) {
                if (this._extensions[b] !== a) continue;
                this._extensions.splice(b, 1), a.removed && a.removed(this)
            }
        },
        pipeThroughExtensions: function(a, b, c, d) {
            this.debug("Passing through ? extensions: ?", a, b);
            if (!this._extensions) return c.call(d, b);
            var e = this._extensions.slice(),
                f = function(b) {
                    if (!b) return c.call(d, b);
                    var g = e.shift();
                    if (!g) return c.call(d, b);
                    g[a] ? g[a](b, f) : f(b)
                };
            f(b)
        }
    }, Faye.extend(Faye.Extensible, Faye.Logging), Faye.Channel = Faye.Class({
        initialize: function(a) {
            this.id = this.name = a
        },
        push: function(a) {
            this.trigger("message", a)
        },
        isUnused: function() {
            return this.countListeners("message") === 0
        }
    }), Faye.extend(Faye.Channel.prototype, Faye.Publisher), Faye.extend(Faye.Channel, {
        HANDSHAKE: "/meta/handshake",
        CONNECT: "/meta/connect",
        SUBSCRIBE: "/meta/subscribe",
        UNSUBSCRIBE: "/meta/unsubscribe",
        DISCONNECT: "/meta/disconnect",
        META: "meta",
        SERVICE: "service",
        expand: function(a) {
            var b = this.parse(a),
                c = ["/**", a],
                d = b.slice();
            d[d.length - 1] = "*", c.push(this.unparse(d));
            for (var e = 1, f = b.length; e < f; e++) d = b.slice(0, e), d.push("**"), c.push(this.unparse(d));
            return c
        },
        isValid: function(a) {
            return Faye.Grammar.CHANNEL_NAME.test(a) || Faye.Grammar.CHANNEL_PATTERN.test(a)
        },
        parse: function(a) {
            return this.isValid(a) ? a.split("/").slice(1) : null
        },
        unparse: function(a) {
            return "/" + a.join("/")
        },
        isMeta: function(a) {
            var b = this.parse(a);
            return b ? b[0] === this.META : null
        },
        isService: function(a) {
            var b = this.parse(a);
            return b ? b[0] === this.SERVICE : null
        },
        isSubscribable: function(a) {
            return this.isValid(a) ? !this.isMeta(a) && !this.isService(a) : null
        },
        Set: Faye.Class({
            initialize: function() {
                this._channels = {}
            },
            getKeys: function() {
                var a = [];
                for (var b in this._channels) a.push(b);
                return a
            },
            remove: function(a) {
                delete this._channels[a]
            },
            hasSubscription: function(a) {
                return this._channels.hasOwnProperty(a)
            },
            subscribe: function(a, b, c) {
                if (!b) return;
                var d;
                for (var e = 0, f = a.length; e < f; e++) {
                    d = a[e];
                    var g = this._channels[d] = this._channels[d] || new Faye.Channel(d);
                    g.bind("message", b, c)
                }
            },
            unsubscribe: function(a, b, c) {
                var d = this._channels[a];
                return d ? (d.unbind("message", b, c), d.isUnused() ? (this.remove(a), !0) : !1) : !1
            },
            distributeMessage: function(a) {
                var b = Faye.Channel.expand(a.channel);
                for (var c = 0, d = b.length; c < d; c++) {
                    var e = this._channels[b[c]];
                    e && e.trigger("message", a.data)
                }
            }
        })
    }), Faye.Publication = Faye.Class(Faye.Deferrable), Faye.Subscription = Faye.Class({
        initialize: function(a, b, c, d) {
            this._client = a, this._channels = b, this._callback = c, this._context = d, this._cancelled = !1
        },
        cancel: function() {
            if (this._cancelled) return;
            this._client.unsubscribe(this._channels, this._callback, this._context), this._cancelled = !0
        },
        unsubscribe: function() {
            this.cancel()
        }
    }), Faye.extend(Faye.Subscription.prototype, Faye.Deferrable), Faye.Client = Faye.Class({
        UNCONNECTED: 1,
        CONNECTING: 2,
        CONNECTED: 3,
        DISCONNECTED: 4,
        HANDSHAKE: "handshake",
        RETRY: "retry",
        NONE: "none",
        CONNECTION_TIMEOUT: 60,
        DEFAULT_RETRY: 5,
        DEFAULT_ENDPOINT: "/bayeux",
        INTERVAL: 0,
        initialize: function(a, b) {
            this.info("New client created for ?", a), this._options = b || {}, this.endpoint = a || this.DEFAULT_ENDPOINT, this.endpoints = this._options.endpoints || {}, this.transports = {}, this._cookies = Faye.CookieJar && new Faye.CookieJar, this._headers = {}, this._disabled = [], this.retry = this._options.retry || this.DEFAULT_RETRY, this._selectTransport(Faye.MANDATORY_CONNECTION_TYPES), this._state = this.UNCONNECTED, this._channels = new Faye.Channel.Set, this._messageId = 0, this._responseCallbacks = {}, this._advice = {
                reconnect: this.RETRY,
                interval: 1e3 * (this._options.interval || this.INTERVAL),
                timeout: 1e3 * (this._options.timeout || this.CONNECTION_TIMEOUT)
            }, Faye.Event && Faye.Event.on(Faye.ENV, "beforeunload", function() {
                Faye.indexOf(this._disabled, "autodisconnect") < 0 && this.disconnect()
            }, this)
        },
        disable: function(a) {
            this._disabled.push(a)
        },
        setHeader: function(a, b) {
            this._headers[a] = b
        },
        getClientId: function() {
            return this._clientId
        },
        getState: function() {
            switch (this._state) {
                case this.UNCONNECTED:
                    return "UNCONNECTED";
                case this.CONNECTING:
                    return "CONNECTING";
                case this.CONNECTED:
                    return "CONNECTED";
                case this.DISCONNECTED:
                    return "DISCONNECTED"
            }
        },
        handshake: function(a, b) {
            if (this._advice.reconnect === this.NONE) return;
            if (this._state !== this.UNCONNECTED) return;
            this._state = this.CONNECTING;
            var c = this;
            this.info("Initiating handshake with ?", this.endpoint), this._send({
                channel: Faye.Channel.HANDSHAKE,
                version: Faye.BAYEUX_VERSION,
                supportedConnectionTypes: [this._transport.connectionType]
            }, function(d) {
                if (d.successful) {
                    this._state = this.CONNECTED, this._clientId = d.clientId;
                    var e = Faye.filter(d.supportedConnectionTypes, function(a) {
                        return Faye.indexOf(this._disabled, a) < 0
                    }, this);
                    this._selectTransport(e), this.info("Handshake successful: ?", this._clientId), this.subscribe(this._channels.getKeys(), !0), a && a.call(b)
                } else this.info("Handshake unsuccessful"), Faye.ENV.setTimeout(function() {
                    c.handshake(a, b)
                }, this._advice.interval), this._state = this.UNCONNECTED
            }, this)
        },
        connect: function(a, b) {
            if (this._advice.reconnect === this.NONE) return;
            if (this._state === this.DISCONNECTED) return;
            if (this._state === this.UNCONNECTED) return this.handshake(function() {
                this.connect(a, b)
            }, this);
            this.callback(a, b);
            if (this._state !== this.CONNECTED) return;
            this.info("Calling deferred actions for ?", this._clientId), this.setDeferredStatus("succeeded"), this.setDeferredStatus("deferred");
            if (this._connectRequest) return;
            this._connectRequest = !0, this.info("Initiating connection for ?", this._clientId), this._send({
                channel: Faye.Channel.CONNECT,
                clientId: this._clientId,
                connectionType: this._transport.connectionType
            }, this._cycleConnection, this)
        },
        disconnect: function() {
            if (this._state !== this.CONNECTED) return;
            this._state = this.DISCONNECTED, this.info("Disconnecting ?", this._clientId), this._send({
                channel: Faye.Channel.DISCONNECT,
                clientId: this._clientId
            }, function(a) {
                a.successful && this._transport.close()
            }, this), this.info("Clearing channel listeners for ?", this._clientId), this._channels = new Faye.Channel.Set
        },
        subscribe: function(a, b, c) {
            if (a instanceof Array) return Faye.map(a, function(a) {
                return this.subscribe(a, b, c)
            }, this);
            var d = new Faye.Subscription(this, a, b, c),
                e = b === !0,
                f = this._channels.hasSubscription(a);
            return f && !e ? (this._channels.subscribe([a], b, c), d.setDeferredStatus("succeeded"), d) : (this.connect(function() {
                this.info("Client ? attempting to subscribe to ?", this._clientId, a), e || this._channels.subscribe([a], b, c), this._send({
                    channel: Faye.Channel.SUBSCRIBE,
                    clientId: this._clientId,
                    subscription: a
                }, function(e) {
                    if (!e.successful) return d.setDeferredStatus("failed", Faye.Error.parse(e.error)), this._channels.unsubscribe(a, b, c);
                    var f = [].concat(e.subscription);
                    this.info("Subscription acknowledged for ? to ?", this._clientId, f), d.setDeferredStatus("succeeded")
                }, this)
            }, this), d)
        },
        unsubscribe: function(a, b, c) {
            if (a instanceof Array) return Faye.map(a, function(a) {
                return this.unsubscribe(a, b, c)
            }, this);
            var d = this._channels.unsubscribe(a, b, c);
            if (!d) return;
            this.connect(function() {
                this.info("Client ? attempting to unsubscribe from ?", this._clientId, a), this._send({
                    channel: Faye.Channel.UNSUBSCRIBE,
                    clientId: this._clientId,
                    subscription: a
                }, function(a) {
                    if (!a.successful) return;
                    var b = [].concat(a.subscription);
                    this.info("Unsubscription acknowledged for ? from ?", this._clientId, b)
                }, this)
            }, this)
        },
        publish: function(a, b) {
            var c = new Faye.Publication;
            return this.connect(function() {
                this.info("Client ? queueing published message to ?: ?", this._clientId, a, b), this._send({
                    channel: a,
                    data: b,
                    clientId: this._clientId
                }, function(a) {
                    a.successful ? c.setDeferredStatus("succeeded") : c.setDeferredStatus("failed", Faye.Error.parse(a.error))
                }, this)
            }, this), c
        },
        receiveMessage: function(a) {
            this.pipeThroughExtensions("incoming", a, function(a) {
                if (!a) return;
                a.advice && this._handleAdvice(a.advice), this._deliverMessage(a);
                if (a.successful === undefined) return;
                var b = this._responseCallbacks[a.id];
                if (!b) return;
                delete this._responseCallbacks[a.id], b[0].call(b[1], a)
            }, this)
        },
        _selectTransport: function(a) {
            Faye.Transport.get(this, a, function(a) {
                this.debug("Selected ? transport for ?", a.connectionType, a.endpoint), this._transport = a, this._transport.cookies = this._cookies, this._transport.headers = this._headers, a.bind("down", function() {
                    if (this._transportUp !== undefined && !this._transportUp) return;
                    this._transportUp = !1, this.trigger("transport:down")
                }, this), a.bind("up", function() {
                    if (this._transportUp !== undefined && this._transportUp) return;
                    this._transportUp = !0, this.trigger("transport:up")
                }, this)
            }, this)
        },
        _send: function(a, b, c) {
            a.id = this._generateMessageId(), b && (this._responseCallbacks[a.id] = [b, c]), this.pipeThroughExtensions("outgoing", a, function(a) {
                if (!a) return;
                this._transport.send(a, this._advice.timeout / 1e3)
            }, this)
        },
        _generateMessageId: function() {
            return this._messageId += 1, this._messageId >= Math.pow(2, 32) && (this._messageId = 0), this._messageId.toString(36)
        },
        _handleAdvice: function(a) {
            Faye.extend(this._advice, a), this._advice.reconnect === this.HANDSHAKE && this._state !== this.DISCONNECTED && (this._state = this.UNCONNECTED, this._clientId = null, this._cycleConnection())
        },
        _deliverMessage: function(a) {
            if (!a.channel || a.data === undefined) return;
            this.info("Client ? calling listeners for ? with ?", this._clientId, a.channel, a.data), this._channels.distributeMessage(a)
        },
        _teardownConnection: function() {
            if (!this._connectRequest) return;
            this._connectRequest = null, this.info("Closed connection for ?", this._clientId)
        },
        _cycleConnection: function() {
            this._teardownConnection();
            var a = this;
            Faye.ENV.setTimeout(function() {
                a.connect()
            }, this._advice.interval)
        }
    }), Faye.extend(Faye.Client.prototype, Faye.Deferrable), Faye.extend(Faye.Client.prototype, Faye.Publisher), Faye.extend(Faye.Client.prototype, Faye.Logging), Faye.extend(Faye.Client.prototype, Faye.Extensible), Faye.Transport = Faye.extend(Faye.Class({
        MAX_DELAY: 0,
        batching: !0,
        initialize: function(a, b) {
            this._client = a, this.endpoint = b, this._outbox = []
        },
        close: function() {},
        send: function(a, b) {
            this.debug("Client ? sending message to ?: ?", this._client._clientId, this.endpoint, a);
            if (!this.batching) return this.request([a], b);
            this._outbox.push(a), this._timeout = b;
            if (a.channel === Faye.Channel.HANDSHAKE) return this.addTimeout("publish", .01, this.flush, this);
            a.channel === Faye.Channel.CONNECT && (this._connectMessage = a);
            if (this.shouldFlush && this.shouldFlush(this._outbox)) return this.flush();
            this.addTimeout("publish", this.MAX_DELAY, this.flush, this)
        },
        flush: function() {
            this.removeTimeout("publish"), this._outbox.length > 1 && this._connectMessage && (this._connectMessage.advice = {
                timeout: 0
            }), this.request(this._outbox, this._timeout), this._connectMessage = null, this._outbox = []
        },
        receive: function(a) {
            this.debug("Client ? received from ?: ?", this._client._clientId, this.endpoint, a);
            for (var b = 0, c = a.length; b < c; b++) this._client.receiveMessage(a[b])
        },
        retry: function(a, b) {
            var c = !1,
                d = this._client.retry * 1e3,
                e = this;
            return function() {
                if (c) return;
                c = !0, Faye.ENV.setTimeout(function() {
                    e.request(a, b)
                }, d)
            }
        }
    }), {
        MAX_URL_LENGTH: 2048,
        get: function(a, b, c, d) {
            var e = a.endpoint;
            b === undefined && (b = this.supportedConnectionTypes()), Faye.asyncEach(this._transports, function(f, g) {
                var h = f[0],
                    i = f[1],
                    j = a.endpoints[h] || e;
                if (Faye.indexOf(b, h) < 0) return i.isUsable(a, j, function() {}), g();
                i.isUsable(a, j, function(b) {
                    if (!b) return g();
                    var e = i.hasOwnProperty("create") ? i.create(a, j) : new i(a, j);
                    c.call(d, e)
                })
            }, function() {
                throw new Error("Could not find a usable connection type for " + e)
            })
        },
        register: function(a, b) {
            this._transports.push([a, b]), b.prototype.connectionType = a
        },
        _transports: [],
        supportedConnectionTypes: function() {
            return Faye.map(this._transports, function(a) {
                return a[0]
            })
        }
    }), Faye.extend(Faye.Transport.prototype, Faye.Logging), Faye.extend(Faye.Transport.prototype, Faye.Publisher), Faye.extend(Faye.Transport.prototype, Faye.Timeouts), Faye.Event = {
        _registry: [],
        on: function(a, b, c, d) {
            var e = function() {
                c.call(d)
            };
            a.addEventListener ? a.addEventListener(b, e, !1) : a.attachEvent("on" + b, e), this._registry.push({
                _element: a,
                _type: b,
                _callback: c,
                _context: d,
                _handler: e
            })
        },
        detach: function(a, b, c, d) {
            var e = this._registry.length,
                f;
            while (e--) {
                f = this._registry[e];
                if (a && a !== f._element || b && b !== f._type || c && c !== f._callback || d && d !== f._context) continue;
                f._element.removeEventListener ? f._element.removeEventListener(f._type, f._handler, !1) : f._element.detachEvent("on" + f._type, f._handler), this._registry.splice(e, 1), f = null
            }
        }
    }, Faye.Event.on(Faye.ENV, "unload", Faye.Event.detach, Faye.Event), Faye.URI = Faye.extend(Faye.Class({
        queryString: function() {
            var a = [];
            for (var b in this.params) {
                if (!this.params.hasOwnProperty(b)) continue;
                a.push(encodeURIComponent(b) + "=" + encodeURIComponent(this.params[b]))
            }
            return a.join("&")
        },
        isSameOrigin: function() {
            var a = Faye.URI.parse(Faye.ENV.location.href),
                b = a.hostname !== this.hostname || a.port !== this.port || a.protocol !== this.protocol;
            return !b
        },
        toURL: function() {
            var a = this.queryString();
            return this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "") + this.pathname + (a ? "?" + a : "") + this.hash
        }
    }), {
        parse: function(a, b) {
            if (typeof a != "string") return a;
            var c = new this,
                d, e = function(b, d, e) {
                    a = a.replace(d, function(a) {
                        return c[b] = a, ""
                    }), c[b] === undefined && (c[b] = e ? Faye.ENV.location[b] : "")
                };
            e("protocol", /^https?\:/, !0), e("host", /^\/\/[^\/]+/, !0), /^\//.test(a) || (a = Faye.ENV.location.pathname.replace(/[^\/]*$/, "") + a), e("pathname", /^\/[^\?#]*/), e("search", /^\?[^#]*/), e("hash", /^#.*/), /^\/\//.test(c.host) ? (c.host = c.host.substr(2), d = c.host.split(":"), c.hostname = d[0], c.port = d[1] || "") : (c.hostname = Faye.ENV.location.hostname, c.port = Faye.ENV.location.port);
            var f = c.search.replace(/^\?/, ""),
                g = f ? f.split("&") : [],
                h = g.length,
                i = {};
            while (h--) d = g[h].split("="), i[decodeURIComponent(d[0] || "")] = decodeURIComponent(d[1] || "");
            return typeof b == "object" && Faye.extend(i, b), c.params = i, c
        }
    }), this.JSON || (JSON = {}),
    function() {
        function f(a) {
            return a < 10 ? "0" + a : a
        }

        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return typeof b == "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function str(a, b) {
            var c, d, e, f, g = gap,
                h, i = b[a];
            i && typeof i == "object" && typeof i.toJSON == "function" && (i = i.toJSON(a)), typeof rep == "function" && (i = rep.call(b, a, i));
            switch (typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    gap += indent, h = [];
                    if (Object.prototype.toString.apply(i) === "[object Array]") {
                        f = i.length;
                        for (c = 0; c < f; c += 1) h[c] = str(c, i) || "null";
                        return e = h.length === 0 ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e
                    }
                    if (rep && typeof rep == "object") {
                        f = rep.length;
                        for (c = 0; c < f; c += 1) d = rep[c], typeof d == "string" && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e))
                    } else
                        for (d in i) Object.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
                    return e = h.length === 0 ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e
            }
        }
        typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(a) {
            return this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z"
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        Faye.stringify = function(a, b, c) {
            var d;
            gap = "", indent = "";
            if (typeof c == "number")
                for (d = 0; d < c; d += 1) indent += " ";
            else typeof c == "string" && (indent = c);
            rep = b;
            if (!b || typeof b == "function" || typeof b == "object" && typeof b.length == "number") return str("", {
                "": a
            });
            throw new Error("JSON.stringify")
        }, typeof JSON.stringify != "function" && (JSON.stringify = Faye.stringify), typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && typeof e == "object")
                    for (c in e) Object.hasOwnProperty.call(e, c) && (d = walk(e, c), d !== undefined ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e)
            }
            var j;
            cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), Faye.Transport.WebSocket = Faye.extend(Faye.Class(Faye.Transport, {
        UNCONNECTED: 1,
        CONNECTING: 2,
        CONNECTED: 3,
        batching: !1,
        isUsable: function(a, b) {
            this.callback(function() {
                a.call(b, !0)
            }), this.errback(function() {
                a.call(b, !1)
            }), this.connect()
        },
        request: function(a, b) {
            if (a.length === 0) return;
            this._messages = this._messages || {};
            for (var c = 0, d = a.length; c < d; c++) this._messages[a[c].id] = a[c];
            this.callback(function(b) {
                b.send(Faye.toJSON(a))
            }), this.connect()
        },
        close: function() {
            if (this._closed) return;
            this._closed = !0, this._socket && this._socket.close()
        },
        connect: function() {
            if (Faye.Transport.WebSocket._unloaded) return;
            if (this._closed) return;
            this._state = this._state || this.UNCONNECTED;
            if (this._state !== this.UNCONNECTED) return;
            this._state = this.CONNECTING;
            var a = Faye.Transport.WebSocket.getClass();
            if (!a) return this.setDeferredStatus("failed");
            this._socket = new a(Faye.Transport.WebSocket.getSocketUrl(this.endpoint));
            var b = this;
            this._socket.onopen = function() {
                b._state = b.CONNECTED, b._everConnected = !0, b.setDeferredStatus("succeeded", b._socket), b.trigger("up")
            }, this._socket.onmessage = function(a) {
                var c = [].concat(JSON.parse(a.data));
                for (var d = 0, e = c.length; d < e; d++) delete b._messages[c[d].id];
                b.receive(c)
            }, this._socket.onclose = function() {
                var a = b._state === b.CONNECTED;
                b.setDeferredStatus("deferred"), b._state = b.UNCONNECTED, delete b._socket;
                if (a) return b.resend();
                if (!b._everConnected) return b.setDeferredStatus("failed");
                var c = b._client.retry * 1e3;
                Faye.ENV.setTimeout(function() {
                    b.connect()
                }, c), b.trigger("down")
            }
        },
        resend: function() {
            if (!this._messages) return;
            var a = Faye.map(this._messages, function(a, b) {
                return b
            });
            this.request(a)
        }
    }), {
        getSocketUrl: function(a) {
            return Faye.URI && (a = Faye.URI.parse(a).toURL()), a.replace(/^http(s?):/ig, "ws$1:")
        },
        getClass: function() {
            return Faye.WebSocket && Faye.WebSocket.Client || Faye.ENV.WebSocket || Faye.ENV.MozWebSocket
        },
        isUsable: function(a, b, c, d) {
            this.create(a, b).isUsable(c, d)
        },
        create: function(a, b) {
            var c = a.transports.websocket = a.transports.websocket || {};
            return c[b] = c[b] || new this(a, b), c[b]
        }
    }), Faye.extend(Faye.Transport.WebSocket.prototype, Faye.Deferrable), Faye.Transport.register("websocket", Faye.Transport.WebSocket), Faye.Event && Faye.Event.on(Faye.ENV, "beforeunload", function() {
        Faye.Transport.WebSocket._unloaded = !0
    }), Faye.Transport.EventSource = Faye.extend(Faye.Class(Faye.Transport, {
        initialize: function(a, b) {
            Faye.Transport.prototype.initialize.call(this, a, b);
            if (!Faye.ENV.EventSource) return this.setDeferredStatus("failed");
            this._xhr = new Faye.Transport.XHR(a, b);
            var c = new EventSource(b + "/" + a.getClientId()),
                d = this;
            c.onopen = function() {
                d._everConnected = !0, d.setDeferredStatus("succeeded"), d.trigger("up")
            }, c.onerror = function() {
                d._everConnected ? d.trigger("down") : (d.setDeferredStatus("failed"), c.close())
            }, c.onmessage = function(a) {
                d.receive(JSON.parse(a.data)), d.trigger("up")
            }, this._socket = c
        },
        isUsable: function(a, b) {
            this.callback(function() {
                a.call(b, !0)
            }), this.errback(function() {
                a.call(b, !1)
            })
        },
        request: function(a, b) {
            this._xhr.request(a, b)
        },
        close: function() {
            this._socket.close()
        }
    }), {
        isUsable: function(a, b, c, d) {
            var e = a.getClientId();
            if (!e) return c.call(d, !1);
            Faye.Transport.XHR.isUsable(a, b, function(e) {
                if (!e) return c.call(d, !1);
                this.create(a, b).isUsable(c, d)
            }, this)
        },
        create: function(a, b) {
            var c = a.transports.eventsource = a.transports.eventsource || {};
            return c[b] = c[b] || new this(a, b), c[b]
        }
    }), Faye.extend(Faye.Transport.EventSource.prototype, Faye.Deferrable), Faye.Transport.register("eventsource", Faye.Transport.EventSource), Faye.Transport.XHR = Faye.extend(Faye.Class(Faye.Transport, {
        request: function(a, b) {
            var c = this.retry(a, b),
                d = Faye.URI.parse(this.endpoint).pathname,
                e = this,
                f = Faye.ENV.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest;
            f.open("POST", d, !0), f.setRequestHeader("Content-Type", "application/json"), f.setRequestHeader("Pragma", "no-cache"), f.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            var g = this.headers;
            for (var h in g) {
                if (!g.hasOwnProperty(h)) continue;
                f.setRequestHeader(h, g[h])
            }
            var i = function() {
                f.abort()
            };
            Faye.Event.on(Faye.ENV, "beforeunload", i);
            var j = function() {
                Faye.Event.detach(Faye.ENV, "beforeunload", i), f.onreadystatechange = function() {}, f = null
            };
            f.onreadystatechange = function() {
                if (f.readyState !== 4) return;
                var a = null,
                    b = f.status,
                    d = b >= 200 && b < 300 || b === 304 || b === 1223;
                if (!d) return j(), c(), e.trigger("down");
                try {
                    a = JSON.parse(f.responseText)
                } catch (g) {}
                j(), a ? (e.receive(a), e.trigger("up")) : (c(), e.trigger("down"))
            }, f.send(Faye.toJSON(a))
        }
    }), {
        isUsable: function(a, b, c, d) {
            c.call(d, Faye.URI.parse(b).isSameOrigin())
        }
    }), Faye.Transport.register("long-polling", Faye.Transport.XHR), Faye.Transport.CORS = Faye.extend(Faye.Class(Faye.Transport, {
        request: function(a, b) {
            var c = Faye.ENV.XDomainRequest ? XDomainRequest : XMLHttpRequest,
                d = new c,
                e = this.retry(a, b),
                f = this;
            d.open("POST", this.endpoint, !0), d.setRequestHeader && d.setRequestHeader("Pragma", "no-cache");
            var g = function() {
                return d ? (d.onload = d.onerror = d.ontimeout = d.onprogress = null, d = null, Faye.ENV.clearTimeout(i), !0) : !1
            };
            d.onload = function() {
                var a = null;
                try {
                    a = JSON.parse(d.responseText)
                } catch (b) {}
                g(), a ? (f.receive(a), f.trigger("up")) : (e(), f.trigger("down"))
            };
            var h = function() {
                    g(), e(), f.trigger("down")
                },
                i = Faye.ENV.setTimeout(h, 1500 * b);
            d.onerror = h, d.ontimeout = h, d.onprogress = function() {}, d.send("message=" + encodeURIComponent(Faye.toJSON(a)))
        }
    }), {
        isUsable: function(a, b, c, d) {
            if (Faye.URI.parse(b).isSameOrigin()) return c.call(d, !1);
            if (Faye.ENV.XDomainRequest) return c.call(d, Faye.URI.parse(b).protocol === Faye.URI.parse(Faye.ENV.location).protocol);
            if (Faye.ENV.XMLHttpRequest) {
                var e = new Faye.ENV.XMLHttpRequest;
                return c.call(d, e.withCredentials !== undefined)
            }
            return c.call(d, !1)
        }
    }), Faye.Transport.register("cross-origin-long-polling", Faye.Transport.CORS), Faye.Transport.JSONP = Faye.extend(Faye.Class(Faye.Transport, {
        shouldFlush: function(a) {
            var b = {
                    message: Faye.toJSON(a),
                    jsonp: "__jsonp" + Faye.Transport.JSONP._cbCount + "__"
                },
                c = Faye.URI.parse(this.endpoint, b).toURL();
            return c.length >= Faye.Transport.MAX_URL_LENGTH
        },
        request: function(a, b) {
            var c = {
                    message: Faye.toJSON(a)
                },
                d = document.getElementsByTagName("head")[0],
                e = document.createElement("script"),
                f = Faye.Transport.JSONP.getCallbackName(),
                g = Faye.URI.parse(this.endpoint, c),
                h = this.retry(a, b),
                i = this;
            Faye.ENV[f] = function(a) {
                k(), i.receive(a), i.trigger("up")
            };
            var j = Faye.ENV.setTimeout(function() {
                    k(), h(), i.trigger("down")
                }, 1500 * b),
                k = function() {
                    if (!Faye.ENV[f]) return !1;
                    Faye.ENV[f] = undefined;
                    try {
                        delete Faye.ENV[f]
                    } catch (a) {}
                    return Faye.ENV.clearTimeout(j), e.parentNode.removeChild(e), !0
                };
            g.params.jsonp = f, e.type = "text/javascript", e.src = g.toURL(), d.appendChild(e)
        }
    }), {
        _cbCount: 0,
        getCallbackName: function() {
            return this._cbCount += 1, "__jsonp" + this._cbCount + "__"
        },
        isUsable: function(a, b, c, d) {
            c.call(d, !0)
        }
    }), Faye.Transport.register("callback-polling", Faye.Transport.JSONP);
(function() {
    function d() {
        function e() {
            a.publish("/service/ping")
        }
        if (!context.features.isRealtimeEnabled) return;
        Faye.ENV = window, Faye.MANDATORY_CONNECTION_TYPES.splice(1, 0, "cross-origin-long-polling"), a = new Faye.Client(context.realtime.serverUrl, {
            timeout: 90,
            retry: 15
        }), context.realtime.enableWebSockets || a.disable("websocket"), a.disable("eventsource");
        var d = {
            outgoing: function(a, c) {
                if (a.channel !== "/meta/subscribe") return c(a);
                a.ext || (a.ext = {}), a.ext.subscriptionToken = b[a.subscription].subscriptionData.token, c(a)
            }
        };
        setInterval(e, 6e4), a.addExtension(d), c = !0
    }

    function e(e) {
        if (!context.features.isRealtimeEnabled) return;
        e = e || {};
        for (var f in e) c || d(), b[f] || function(c) {
            var d = {
                subscriptionData: e[c],
                subscription: null
            };
            b[c] = d, d.subscription = a.subscribe(c, function(a) {
                comm.send(a.eventType, a.eventData)
            })
        }(f)
    }

    function f(a) {
        var c = b[a];
        c && (c.subscription && c.subscription.cancel(), delete b[a])
    }

    function g() {
        for (var a in b) {
            var c = b[a].subscriptionData;
            c.persist || f(a)
        }
    }
    var a, b = {},
        c = !1;
    comm.listen("spaceway.page.complete", function() {
        g(), e(context.realtime.subscriptions)
    }, !0), $(document).ready(function() {
        e(context.realtime.subscriptions)
    })
})();
(function(a) {
    function d(b) {
        b.animate({
            opacity: 0
        }, {
            duration: 1e3,
            complete: function() {
                a(this).remove()
            }
        })
    }

    function e(a, e) {
        function i() {
            d(a), clearTimeout(h)
        }

        function j() {
            a.stop().animate({
                opacity: 1
            }), clearTimeout(h)
        }

        function k() {
            var a = +(new Date) - g;
            f = Math.max(f - a, 2e3), h = setTimeout(i, f)
        }
        a.hide(), b.append(a), a.fadeIn().on("mouseenter", j).on("mouseleave", k);
        var f = e || c,
            g = +(new Date),
            h = setTimeout(i, f)
    }
    var b = a("#toasts"),
        c = 15e3;
    comm.listen("toasts.new", function(b) {
        var c = a(b.html),
            f = a('<i class="close_14 close"></i>');
        f.click(function() {
            return d(c), !1
        }), c.prepend(f), e(c, b.timeout), b.onAdd && b.onAdd(c)
    }, !0), comm.listen("toasts.remove", function(a) {
        a && a.length && d(a)
    }, !0)
})(jQuery);
(function(a) {
    function b(a) {
        var b = !1;
        a.click(function(c) {
            b || (Myspace.Notifications.markAsViewed(a), b = !0), Myspace.Notifications.onClick(a, c)
        }), Myspace.ToolTip(a)
    }
    comm.listen("notificationsv3.new", function(b) {
        setTimeout(function() {
            a.ajax({
                url: "/ajax/notifications/realtime",
                type: "POST",
                data: b
            }).done(function(a) {
                comm.send("notifications.new.render", a)
            })
        }, 1e3)
    }, !0), comm.listen("notifications.new.render", function(a) {
        a.popupHtml && comm.send("toasts.new", {
            html: a.popupHtml,
            onAdd: b
        })
    }, !0)
})(jQuery);
(function(a) {
    function d(a, b) {
        typeof window.scomm != "undefined" && window.scomm[a].apply(this, b)
    }

    function h() {
        f = !1, e !== b.Hidden && i(b.Online), a(window).off(g, h)
    }

    function i(a) {
        e = a, c.ready(function() {
            c.send("presence.state", {
                presence: e
            })
        })
    }

    function j() {
        a.ajax({
            url: "/ajax/presence/set",
            type: "POST",
            data: {
                presence: e,
                client: "web"
            }
        })
    }

    function k() {
        return e
    }

    function l() {
        Myspace.User.isLoggedIn && n(), Myspace.User.isLoggedIn && context.features.isRenderPresenceEnabled && q()
    }

    function n() {
        var d = Myspace.Utils.guid();
        i(context.messaging.settings.IsIMEnabled ? b.Online : b.Hidden), c.add(function(a, d) {
            a === "presence.state" && e !== d.presence && (d.presence === b.Idle && !f ? c.send("presence.state", {
                presence: e
            }) : e = d.presence)
        }), comm.listen("page.idle", function(c) {
            if (c < 3) return;
            f = !0, e !== b.Hidden && i(b.Idle), a(window).off(g, h).on(g, h)
        }, !0), comm.listen("presence.sethidden", function(a) {
            var c = a ? b.Hidden : b.Online;
            i(c), j()
        }, !0), a(window).on("beforeunload", function() {
            Object.keys(m).length === 0 && e !== b.Hidden && (i(b.Offline), j()), c.send("presence.tab", {
                tabId: d,
                event: "close"
            })
        }), c.add(function(a, b) {
            a === "presence.tab" && (b.event === "open" ? m[b.tabId] || (m[b.tabId] = !0, c.send("presence.tab", {
                tabId: d,
                event: "open"
            })) : b.event === "close" && delete m[b.tabId])
        }), c.ready(function() {
            c.send("presence.tab", {
                tabId: d,
                event: "open"
            })
        })
    }

    function p(a, b) {
        o[a] = {
            timeLoaded: Date.now(),
            presence: b
        }
    }

    function q() {
        function c(a) {
            var b = 12e4;
            if (a == context.profileId) return {
                status: k()
            };
            var c = o[a];
            return c && Date.now() - c.timeLoaded < b ? c.presence : null
        }

        function d(a, c) {
            a.removeClass("presence online idle");
            switch (c && c.status) {
                case b.Online:
                    a.addClass("presence online");
                    break;
                case b.Idle:
                    a.addClass("presence idle")
            }
        }

        function e(b) {
            var e = {};
            b.find("[data-show-presence=true]").each(function() {
                var b = a(this),
                    c = b.data("profileid") || b.data("profileId") || b.find(".connectButton").data("id");
                c = Number(c), c && (e[c] = (e[c] || a()).add(b))
            });
            var f = [];
            Object.keys(e).forEach(function(a) {
                var b = c(a);
                b ? d(e[a], b) : f.push(a)
            }), f.length && a.ajax({
                url: "/ajax/presence/get",
                type: "POST",
                data: {
                    profileIds: f
                }
            }).done(function(a) {
                f.forEach(function(b) {
                    var c = e[b],
                        f = a[b];
                    p(b, f), d(c, f)
                })
            })
        }
        comm.listen("page.changed", e, !0), setTimeout(function() {
            e(a("#wrap"))
        }, 1e3)
    }
    var b = {
            Online: "Online",
            Idle: "Idle",
            Offline: "Offline",
            Hidden: "Hidden"
        },
        c = {
            ready: function() {
                d("ready", arguments)
            },
            add: function() {
                d("add", arguments)
            },
            send: function() {
                d("send", arguments)
            }
        },
        e, f = !1,
        g = "mousemove keyup focus",
        m = {},
        o = {};
    l(), Myspace.Presence = {
        getCurrentPresence: k,
        setCachedPresence: p
    }
})(jQuery);
(function(a) {
    comm.listen("highlights.new", function(b) {
        a.ajax({
            url: "/ajax/highlights/render",
            type: "POST",
            data: {
                type: b.type,
                data: b.data
            }
        }).done(function(b) {
            function c(b) {
                var c = b.data("highlight-type");
                b.click(function(b) {
                    if (b.target.nodeName === "A") return !0;
                    var c = a(this).find("a").first();
                    return comm.send("location.href", c.attr("href")), !1
                })
            }
            comm.send("toasts.new", {
                html: b,
                onAdd: c
            })
        })
    }, !0)
})(jQuery);
(function(a) {
    a("body").delegate(".mediaItems.table > li", "click", function(b) {
        var c = a(this),
            d = a(b.target);
        if (d.hasClass("delete")) {
            var e = c.closest(".table"),
                f = {},
                g = objectify(d),
                h = e.data("totalrecords");
            f.playlistId = e.data("playlistid"), f.objectVersion = e.data("objectversion"), f.mediaId = g.songId, f.mediaId || (f.mediaId = g.mediaId), f.mediaType = g.mediaType, f.sequenceId = g.sequenceId, f.totalRecords = h - 1, c.remove(), e.data("totalrecords", h - 1), comm.send("mix.removeItem", f)
        }
    }), a("#container > #wrap").on("click", "a[data-type=video]", function(b) {
        var c = a(b.target),
            d = c.closest("a").attr("href"),
            e = d.slice(d.lastIndexOf("/") + 1);
        if (c.is(".connectButton") || c.parent().is(".connectButton")) return;
        return comm.send("influencer.click", c), comm.send("videoLightbox.instance", function(b) {
            if (b) {
                var c = a("#container > #wrap").find(".playBtn.video[data-media-id=" + e + "]").first(),
                    f = c.length ? objectify(c) : null;
                b.show(f, {
                    detailUrl: d
                })
            } else context.pfc !== "videodetail" && (Myspace.videoReferrer = window.location.pathname), comm.send("location.href", d);
            comm.send("player.resume")
        }), !1
    })
})(jQuery);
(function(a) {
    function b(a, b) {
        var c = {
                entityKey: a
            },
            d = b.find('[itemprop="name"]'),
            e = b.find('[itemprop="byArtist"]'),
            f = b.find('[itemprop="image"]');
        return d.length && (c.title = d.text()), e.length && (c.owner = e.text()), f.length && (c.imageUrl = f.attr("content") || f.attr("src")), c
    }
    comm.listen("share", function(c) {
        var d = a(c.source),
            e = c.type,
            f = d.closest(".connectButton"),
            g, h, i, j;
        if (!Myspace.User.isLoggedIn) return comm.send("login.prompt", {
            action: "share",
            object: c.entityKey
        });
        if (e !== "photo" && c.entityKey && c.imageUrl && c.title) return comm.send("superpost", {
            element: d,
            object: c,
            type: e
        });
        f.length && (g = f.siblings(".playBtn").first());
        if (!g || !g.length) g = c.source.parents(".media,.mediaSquare,.streamItem").find(".playBtn");
        if (!g.length) {
            switch (e) {
                case "song":
                    h = '[itemtype="http://schema.org/MusicRecording"]';
                    break;
                case "album":
                    h = '[itemtype="http://schema.org/MusicAlbum"]';
                    break;
                case "mixtape":
                    h = '[itemtype="http://schema.org/MusicPlaylist"]';
                    break;
                case "video":
                    h = '[itemtype="http://schema.org/MusicVideoObject"]';
                    break;
                case "radio":
                    h = '[itemtype="http://schema.org/MusicGroup"]';
                    break;
                case "profile":
                    h = '[itemtype="http://schema.org/Person"]'
            }
            h && (i = d.closest(h), g = i.find(".playBtn").first())
        }
        g.length ? j = objectify(g) : i && i.length ? (j = b(c.entityKey, i), e = "share") : f.length ? (g = f.parent().children(".mediaSquare").first().find(".playBtn"), j = g.length ? objectify(g) : objectify(f), e = "share") : j = objectify(d), comm.send("superpost", {
            element: d,
            object: j,
            type: e
        })
    }, !0)
})(jQuery);
(function() {
    function d(a) {
        var b = {},
            c = [];
        for (var d in a) a.hasOwnProperty(d) && c.push(d);
        c.sort();
        for (var e = 0; e < c.length; e++) b[c[e]] = a[c[e]];
        return b
    }

    function e(e) {
        if (context.pfc === "videoMixEmbed" && context.entityKey === "playlist_profile_73159206_709312" && !c) return;
        var f = {
                assignedExperiments: context.assignedExperiments,
                authenticatedLoginId: context.beaconDataV3.authenticatedLoginId,
                authenticatedProfileId: context.beaconDataV3.authenticatedProfileId,
                beaconVersionValue: 3,
                lastLoginDateTimeOffset: context.beaconDataV3.lastLoginDateTimeOffset,
                lastLoginId: context.beaconDataV3.lastLoginId,
                lastProfileId: context.beaconDataV3.lastProfileId,
                pageId: context.beaconDataV3.pageId,
                persistentId: context.beaconDataV3.persistentId,
                previousReferrerPageFunctionalContextText: context.beaconDataV3.previousReferrerPageFunctionalContextText,
                previousReferrerUrl: context.beaconDataV3.previousReferrerUrl,
                referrerPageFunctionalContextText: context.beaconDataV3.referrerPageFunctionalContextText,
                referrerUrl: context.beaconDataV3.referrerUrl,
                requestFunctionalContextText: context.beaconDataV3.requestFunctionalContextText,
                requestUrl: context.beaconDataV3.requestUrl
            },
            g = a,
            h = d($.extend(f, e));
        b && (g = a + "?" + btoa(JSON.stringify(h)), h = undefined), $.ajax({
            url: g,
            type: "POST",
            data: h
        })
    }

    function f(a) {
        var b = {};
        b.actionText = "View", b.directObjectEntityKeyText = a.entityKey, e(b)
    }
    var a = "/beacon/v3",
        b = (window.ActiveXObject || "ActiveXObject" in window) && history.pushState,
        c = Cookies.beacons_enabled && Cookies.beacons_enabled.value === "true";
    comm.listen("beacon.v3", e, !0), context.features.isPageviewBeaconV3Enabled && (comm.listen("spaceway.page.complete", function() {
        e(context.beaconDataV3)
    }, !0), e(context.beaconDataV3)), context.features.isPhotoViewBeaconV3Enabled && comm.listen("photo.view", function(a) {
        f(a)
    }, !0)
})();
(function() {
    function c(b) {
        window.COMSCORE && COMSCORE.beacon && (b.c2 = a, COMSCORE.beacon(b))
    }
    var a = "4000002",
        b = context.features.isComScoreEnabled;
    b && comm.listen("overlay.trackers,screen.trackers,spaceway.page.trackers", function(a, b) {
        var d = context.beaconDataV3.requestFunctionalContextText;
        $.ajax({
            url: "/pageview_candidate.xml",
            dataType: "xml",
            type: "GET",
            success: function() {
                b !== "page.trackers" && c({
                    c1: "2"
                }), b === "screen.trackers" && (comm.send("beacon.v3", {
                    actionText: "Scroll",
                    scrollType: a.scrollType,
                    objectName: "Page",
                    pageNum: a.pageNum
                }), _gaq.push(["_trackEvent", "Scroll tracking", "scroll", d]))
            }
        })
    }, !0)
})();
(function(a) {
    var b = {};
    comm.listen("scraper.invoke", function(c) {
        function g(a) {
            a.loadFailed ? (comm.send("link.scrape.end", !1), e(null, a)) : (a && a.title && (b[d.toLowerCase()] = a), comm.send("link.scrape.end", !0), e(null, a))
        }

        function h(a) {
            e(null, null)
        }
        var d = c.url,
            e = c.callback,
            f;
        d ? (f = b[d.toLowerCase()], f ? e(null, f.loadFailed ? null : f) : (comm.send("link.scrape.begin"), a.ajax({
            url: "/ajax/stream/scrape",
            data: {
                url: d
            },
            type: "POST",
            timeout: 3e4
        }).done(g).fail(h))) : e(null, null)
    }, !0)
})(jQuery);
(function(a) {
    function d() {
        var a = "(http://|https://|www.){1}",
            b = "(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])",
            c = "(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+",
            d = "(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)",
            e = "(?:" + c + d + "|" + b + ")",
            f = "(?:[;/][^#?<>\\s]*)?",
            g = "(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?",
            h = a,
            i = e + f + g + "(?!\\w)";
        return new RegExp(h + i, "ig")
    }

    function e(a, c, d, e, g) {
        var h, i, j, k = !1;
        a = a.trim(), e = e || -1;
        if (a) {
            b.lastIndex = d || 0, h = b.exec(a);
            if (h) {
                i = h[0], g ? k = e >= h.index + i.length : k = e > h.index + i.length;
                if (e < h.index || k) j = !0, i.indexOf("http://") !== 0 && i.indexOf("https://") !== 0 && (i = "http://" + i), f(i, c, a, b.lastIndex, e)
            }
        }!j && setTimeout(function() {
            c(null, null)
        }, 0)
    }

    function f(a, b, c, d, f) {
        comm.send("scraper.invoke", {
            url: a,
            callback: function(a, g) {
                g ? b(null, g) : e(c, b, d, f)
            }
        })
    }

    function g(b, d) {
        function s(a) {
            t(a, 0, p), k && (r = setTimeout(function() {
                w()
            }, 25e3))
        }

        function t(a, b, c) {
            if (k > 0) {
                var d = a.slice(b, c);
                o = 0, d.forEach(function(b) {
                    u(b, m++, function(d, e, f) {
                        var g = j[f];
                        v(d, e, b, g), o == p && k ? t(a, c, c + p) : k == 0 && w()
                    })
                })
            }
        }

        function u(a, b, c) {
            var d = new Image;
            d.onload = function() {
                c(this.width, this.height, b)
            }, d.src = a
        }

        function v(a, b, c, d) {
            var e;
            e = a >= q || b >= q, e && h.length < 10 && d != "https://x.myspacecdn.com/new/common/images/album.jpg" && (h.push(c), i.push(d)), o++, k--, h.length == 10 && (k = 0)
        }

        function w() {
            h = h.slice(0, 10);
            var b = h.length;
            if (l) return;
            r && clearTimeout(r), k = 0, l = !0, b ? (b > 1 ? (f.find(".arrow_left_16_dark").click(function() {
                x(a(this))
            }), f.find(".arrow_right_16_dark").click(function() {
                x(a(this), !0)
            })) : f.addClass("singleImage"), x()) : (f.addClass("noImage"), f.removeClass("processing").children("div").removeClass("loading"))
        }

        function x(b, c) {
            var d = h.length - 1,
                e, g;
            b && (f.addClass("processing").children("div.linkImage").addClass("loading"), c ? n < d && (n++, n == d && b.addClass("disabled"), n == 1 && b.prev().removeClass("disabled")) : n > 0 && (n--, n == 0 ? b.addClass("disabled") : n == d - 1 && b.next().removeClass("disabled"))), f.children("div.linkDetails").removeClass("moreImages"), d > 0 && (f.find(".preview_count").text(n + 1 + " of " + (d + 1)), f.children("div.linkDetails").addClass("moreImages")), f.children("div.linkImage").html("").append(a("<img src='" + h[n] + "' data-url='" + i[n] + "' >").bind("load", function() {
                f.removeClass("processing").children("div.linkImage").removeClass("loading")
            }))
        }
        var e, f, g = ",0,",
            h = [],
            i = [],
            j = [],
            k, l, m = 0,
            n = 0,
            o = 0,
            p = 5,
            q = 120,
            r;
        c || templates && (e = templates["common/views/generic/superpost/_linkpreview"]) && (c = require("ejs").compile(e)), c && d.url && (f = a(c(d)), d.images && (k = d.images.length) && (j = d.originalImages, k == 1 && (q = 50), s(d.images)), f.find("input").click(function() {
            f.toggleClass("hideImage")
        }), b.html(f))
    }
    var b, c;
    b = d(), comm.listen("scraper.bind", function(b) {
        function l() {
            if (k) return;
            var a = d ? c.val() : c.text(),
                b = d ? null : window.getSelection();
            h && clearTimeout(h), c.bind("paste", function() {
                i = !0
            }).keypress(function() {
                i = !1
            }), e(a, function(a, b) {
                var d;
                b ? (k = !0, !b.loadFailed && j.previewContainer && g(j.previewContainer, b), b.loadFailed && Myspace.errorDialog("Sorry, unable to source preview."), j.onScrape(b)) : document.activeElement == c[0] && (h = setTimeout(l, 500))
            }, 0, document.activeElement == c[0] && (d ? c[0].selectionStart : b.anchorNode && b.anchorNode.nodeType == 3 ? b.anchorOffset : -1), i)
        }
        var c = a(b.el),
            d = c[0].tagName === "TEXTAREA",
            f = b.callback,
            h, i = !1,
            j, k;
        c.focus(l), j = {
            start: function() {
                k = !1, l()
            },
            stop: function() {
                h && clearTimeout(h)
            },
            onScrape: function() {},
            previewContainer: null
        }, f && f(j)
    }, !0), comm.listen("scraper.haslink", function(a) {
        var c = a.input,
            d = a.callback;
        b.lastIndex = 0, d && d(b.test(c))
    }, !0)
})(jQuery);
(function(a) {
    function d(d, e) {
        function q(a) {
            k = null, l = null;
            var b = window.getSelection();
            r(e.firstChild, b.anchorNode, b.anchorOffset, a), k && b.collapse(k, l), s()
        }

        function r(a, b, c, d) {
            if (!a) return;
            var e = a.nextSibling,
                f = a.previousSibling,
                g = a.nodeType,
                h, i, j, m;
            if (g == 1 && !x(a, b, d)) {
                h = a.parentNode, i = a.firstChild;
                if (!i) a.tagName != "BR" && (a.tagName == "DIV" ? (m = document.createElement("br"), h.replaceChild(m, a)) : h.removeChild(a), b == a && f && (k = m || f, l = k.nodeType === 3 ? k.nodeValue.length : 1)), r(e, b, c, d);
                else {
                    a.tagName == "DIV" && (i.nodeType != 1 || i.nodeType == 1 && i.tagName != "BR") && h.insertBefore(document.createElement("br"), a);
                    while (a.childNodes.length) h.insertBefore(a.childNodes[0], a);
                    r(i, b, c, d)
                }
                return
            }
            g != 3 && g != 1 ? a.parentNode.removeChild(a) : g == 3 && f && f.nodeType == 3 && (b == a && (j = f.nodeValue.length), f.nodeValue += a.nodeValue, a.parentNode.removeChild(a), j && (k = f, l = j + c)), e && r(e, b, c, d)
        }

        function s() {
            var c = window.getSelection(),
                d, j, k, l, m, n, o;
            c && c.isCollapsed && (c.anchorNode == e && (m = e.childNodes[c.anchorOffset - 1], m && m.nodeType == 3 && c.collapse(m, m.nodeValue.length)), d = c.anchorNode, j = c.anchorOffset, d && d.nodeType === 3 && (k = d.nodeValue.substring(0, j), l = k && k.lastIndexOf("@"), n = l >= 0 && k.substring(l + 1, j))), n && n.length > 1 && n.length == a.trim(n).length ? (f = n, g = d, h = l, i = j, o = b[n], o ? t(o.slice(0, o.length), n) : a.ajax({
                url: "/ajax/stream/mentionq",
                data: {
                    q: n
                },
                type: "POST"
            }).done(function(a) {
                a && a.length ? (b[n] = a, t(a.slice(0, a.length), n)) : y()
            }).fail(function() {
                y()
            })) : y()
        }

        function t(b, k) {
            var l = window.getSelection(),
                o, q, r, s, t, v, x, C, D = {},
                E, F;
            if (b && (x = b.length) && l && l.isCollapsed && f == k && l.anchorNode == g && l.anchorOffset == i) {
                r = g.nodeValue, v = k.length, g.nodeValue = r.substring(0, h + 1), o = document.createElement("span"), o.className = "mentionq", j = document.createTextNode(k), o.appendChild(j), q = g.nextSibling, q ? e.insertBefore(o, q) : e.appendChild(o), s = r.substring(h + 1 + v), s && (t = document.createTextNode(s), q ? e.insertBefore(t, q) : e.appendChild(t)), l.collapse(j, v), n || z(), d.find("span[data-ms-allowed]").each(function() {
                    var b = a(this).attr("data-id");
                    m[b] && (D[b] = m[b])
                }), m = D;
                for (var G = 0; G < x; G++) C = b[G], m[C.profileId] && (b.splice(G, 1), G--, x--);
                E = c(b), F = a(E).mouseover(function() {
                    var b = a(this),
                        c = b.index();
                    c != p && (b.addClass("selected"), p > -1 && a(n.children()[p]).removeClass("selected"), p = c)
                }).click(function(a) {
                    return w(this, a), !1
                }), p = 0, n.empty().append(F).addClass("show").scrollTop(0), n.find("li.publicProfile").index() == 0 && (p = 1), u(o), a(document).click(A), a("div.horizontalContent").bind("mousewheel", B);
                return
            }
            y()
        }

        function u(b) {
            var c = n.outerWidth(!0),
                e = n.outerHeight(!0),
                f = a(b).offset(),
                g = (parseInt(d.css("lineHeight")) || 0) + 10,
                h = f.top + g,
                i = f.left - g / 2,
                j = a(window),
                k = {
                    top: "",
                    bottom: "",
                    left: "",
                    right: ""
                };
            i + c >= j.width() ? k.right = 10 : k.left = i, h + e >= j.height() ? k.bottom = j.height() - f.top + 5 : k.top = h, n.css(k)
        }

        function v(b) {
            var c, d, e, f, g, h;
            n && n.hasClass("show") && (c = n.children(), d = c.length, d && (b ? e = p > 0 : p < d - 1 && (e = !0), e && (a(c[p]).removeClass("selected"), b ? --p : ++p, f = c[p], a(f).hasClass("publicProfile") && (b ? --p : ++p, p > 0 && p < d - 1 ? f = c[p] : f = c[p]), g = n.scrollTop(), h = b ? g - f.offsetTop : f.offsetTop + f.offsetHeight - n.innerHeight() - g, a(f).addClass("selected"), h > 0 && n.scrollTop(b ? g - h : g + h))))
        }

        function w(b, c) {
            var d = a(b),
                f = d.attr("data-id"),
                g = j.parentNode,
                h = g.previousSibling,
                i = g.nextSibling,
                k = h.nodeValue,
                l, n, o, p = window.getSelection();
            if (!f) return;
            n = d.find("strong").text(), o = d.find("p.username").text(), j.nodeValue = n, h.nodeValue = k.substring(0, k.length - 1), i && i.nodeType == 3 ? (i.nodeValue = " " + i.nodeValue, l = i) : (l = document.createTextNode(" "), i ? e.insertBefore(l, i) : e.appendChild(l)), g.setAttribute("data-ms-allowed", "1"), g.setAttribute("data-id", f), g.setAttribute("data-selected", !0), y(), e.focus(), setTimeout(function() {
                p.collapse(l, 1)
            }, 0), m[f] = {
                id: f,
                key: d.attr("data-entity-key"),
                text: n,
                userName: o
            }
        }

        function x(a, b, c) {
            var d;
            return a.getAttribute("data-ms-allowed") ? !c || a != b && b.parentNode != a ? !0 : (d = a.getAttribute("data-id"), a.removeAttribute("data-ms-allowed"), m[d] && delete m[d], !1) : !1
        }

        function y() {
            n && n.removeClass("show").empty(), a(document).unbind("click", A), a("div.horizontalContent").unbind("mousewheel", B)
        }

        function z() {
            var b = a(document.body).find("ul.mentionDropDown.slats.small");
            b.length && a(b).remove(), n = a("<ul/>").addClass("mentionDropDown slats small").appendTo(document.body).scroll(function() {
                document.activeElement != e && window.getSelection().collapse(j, j.nodeValue.length)
            }), c || (c = require("ejs").compile(templates["common/views/generic/superpost/_mention"]))
        }

        function A(b) {
            n && n.hasClass("show") && document.activeElement !== e && b.target != n[0] && !a.contains(n[0], b.target) && y()
        }

        function B(b) {
            n && n.hasClass("show") && document.activeElement == e && b.target != n[0] && !a.contains(n[0], b.target) && y()
        }

        function C() {
            m = {}, y(), n = null
        }

        function D() {
            return m
        }

        function o() {
            return o
        }
        var e = e ? e : d[0],
            f, g, h, i, j, k, l, m = {},
            n, o, p = -1;
        return d.blur(function(a) {
            var b;
            b = e.firstChild, b && b.tagName == "BR" && e.removeChild(b), f = ""
        }).keydown(function(a) {
            var b = a.which,
                c, d, f;
            o = !1;
            if (b == 38 || b == 40) {
                c = window.getSelection(), d = c.anchorNode, f = c.anchorOffset, d == e && f > 0 && (d = e.childNodes[f - 1]);
                if (d == j || d == j.parentNode) return v(b == 38), !1
            } else {
                if (b == 13 && n && n.hasClass("show")) return p > -1 && (o = !0, w(n.children()[p], a)), !1;
                b == 27 ? (!n || !n.hasClass("show")) && comm.send("page.esc") : setTimeout(function() {
                    q(!0)
                }, 0)
            }
        }).keyup("keyup", function(a) {
            a.stopPropagation();
            var b = a.which;
            (b == 37 || b == 39) && q(!1)
        }).click(function() {
            setTimeout(function() {
                q(!1)
            }, 0)
        }), d.parent().addClass("mentions"), a(window).resize(function() {
            y()
        }), {
            reset: C,
            mentionProfileList: D,
            isProfileSelectByEnterKey: o
        }
    }
    var b = {},
        c;
    Myspace = window.Myspace || {}, Myspace.mention = d
})(jQuery);
(function(a) {
    function f(f, g) {
        function v(a, b) {
            m = null, n = null;
            var c = window.getSelection();
            w(g.firstChild, c.anchorNode, c.anchorOffset, a, b), m && c.collapse(m, n), x(), [50, 191].indexOf(b) > -1 && (s = K(g))
        }

        function w(a, b, c, d, e) {
            if (!a) return;
            var f = a.nextSibling,
                g = a.previousSibling,
                h = a.nodeType,
                i, j, k, l;
            if (h == 1 && !C(a, b, d, c, e)) {
                i = a.parentNode, j = a.firstChild;
                if (!j) a.tagName != "BR" && (a.tagName == "DIV" ? (l = document.createElement("br"), i.replaceChild(l, a)) : i.removeChild(a), b == a && g && (m = l || g, n = m.nodeType === 3 ? m.nodeValue.length : 1)), w(f, b, c, d, e);
                else {
                    a.tagName == "DIV" && (j.nodeType != 1 || j.nodeType == 1 && j.tagName != "BR") && i.insertBefore(document.createElement("br"), a);
                    while (a.childNodes.length) i.insertBefore(a.childNodes[0], a);
                    w(j, b, c, d, e)
                }
                return
            }
            h != 3 && h != 1 ? a.parentNode.removeChild(a) : h == 3 && g && g.nodeType == 3 && (b == a && (k = g.nodeValue.length), g.nodeValue += a.nodeValue, a.parentNode.removeChild(a), k && (m = g, n = k + c)), f && w(f, b, c, d, e)
        }

        function x() {
            var c = window.getSelection(),
                d, e, f, l, m, n, p;
            c && c.isCollapsed && (c.anchorNode == g && (m = g.childNodes[c.anchorOffset - 1], m && m.nodeType == 3 && c.collapse(m, m.nodeValue.length)), d = c.anchorNode, e = c.anchorOffset, d && d.nodeType === 3 && (f = d.nodeValue.substring(0, e), l = f && f.lastIndexOf("@"), l < 0 && (l = f && f.lastIndexOf("/"), l > 0 && f.charAt(l - 1) != " " && (l = -1)), n = l >= 0 && f.substring(l + 1, e)));
            if (n && n.length > 1 && n.length == a.trim(n).length) {
                h = n, i = d, j = l, k = e, p = b[n];
                if (p) y(p.slice(0, p.length), n);
                else {
                    var q = o && Object.keys(o).join(",") || "";
                    a.ajax({
                        url: "/ajax/stream/mentionq",
                        data: {
                            q: n,
                            selectedIds: q
                        },
                        type: "POST"
                    }).done(function(a) {
                        a && a.length ? (b[n] = a, y(a.slice(0, a.length), n)) : D()
                    }).fail(function() {
                        D()
                    })
                }
            } else D()
        }

        function y(d, e) {
            var m = window.getSelection(),
                n, p, r, s, t, v, w, x, y = {},
                A, C;
            if (d && (w = d.length) && m && m.isCollapsed && h == e && m.anchorNode == i && m.anchorOffset == k) {
                r = i.nodeValue, v = e.length, i.nodeValue = r.substring(0, j + 1), n = document.createElement("span"), n.className = "mentionq", l = document.createTextNode(e), n.appendChild(l), p = i.nextSibling, p ? g.insertBefore(n, p) : g.appendChild(n), s = r.substring(j + 1 + v), s && (t = document.createTextNode(s), p ? g.insertBefore(t, p) : g.appendChild(t)), m.collapse(l, v), q || E(), f.find("span[data-ms-allowed]").each(function() {
                    var b = a(this).attr("data-id"),
                        c = a(this).text();
                    c && c.length > 0 && o[b] ? y[b] = o[b] : a(this).remove()
                }), o = y;
                for (var H = 0; H < w; H++) x = d[H], o[x.profileId] && (d.splice(H, 1), H--, w--);
                A = c(d), C = a(A).mouseover(function() {
                    var b = a(this),
                        c = b.index();
                    c != u && (b.addClass("selected"), u > -1 && a(q.children()[u]).removeClass("selected"), u = c)
                }).click(function(a) {
                    return B(this, a), !1
                }), u = 0, q.empty().append(C).addClass("show").scrollTop(0), q.find("li.publicProfile").index() == 0 && (u = 1), z(n), a(document).click(F), a("div.horizontalContent").bind("mousewheel", G);
                if (w < 4)
                    for (var I = 1; I <= e.length; I++) {
                        var J = e.substr(0, I);
                        J && (b[J] = null)
                    }
                return
            }
            D()
        }

        function z(b) {
            var c = q.outerWidth(!0),
                d = q.outerHeight(!0),
                e = a(b).offset(),
                g = (parseInt(f.css("lineHeight")) || 0) + 10,
                h = e.top + g,
                i = e.left - g / 2,
                j = a(window),
                k = {
                    top: "",
                    bottom: "",
                    left: "",
                    right: ""
                };
            i + c >= j.width() ? k.right = 10 : k.left = i, h + d >= j.height() ? k.bottom = j.height() - e.top + 5 : k.top = h, q.css(k)
        }

        function A(b) {
            var c, d, e, f, g, h;
            q && q.hasClass("show") && (c = q.children(), d = c.length, d && (b ? e = u > 0 : u < d - 1 && (e = !0), e && (a(c[u]).removeClass("selected"), b ? --u : ++u, f = c[u], a(f).hasClass("publicProfile") && (b ? --u : ++u, u > 0 && u < d - 1 ? f = c[u] : f = c[u]), g = q.scrollTop(), h = b ? g - f.offsetTop : f.offsetTop + f.offsetHeight - q.innerHeight() - g, a(f).addClass("selected"), h > 0 && q.scrollTop(b ? g - h : g + h))))
        }

        function B(b, c) {
            var d = a(b),
                e = d.attr("data-id"),
                f = l.parentNode,
                h = f.previousSibling,
                i = f.nextSibling,
                j = h.nodeValue,
                k, m, n, p, q = window.getSelection();
            if (!e) return;
            m = d.find("strong").text(), n = d.find("p.username").text(), l.nodeValue = m, h.nodeValue = j.substring(0, j.length - 1), i && i.nodeType == 3 ? (i.nodeValue = " " + i.nodeValue, k = i) : (k = document.createTextNode("​"), i ? g.insertBefore(k, i) : g.appendChild(k)), f.setAttribute("data-ms-allowed", "1"), f.setAttribute("data-id", e), f.setAttribute("data-selected", !0), f.setAttribute("data-text", m), D(), g.focus(), setTimeout(function() {
                q.collapse(k, 1)
            }, 0), o[e] = {
                id: e,
                key: d.attr("data-entity-key"),
                text: m,
                userName: n,
                customeText: m,
                actualIndex: s - 1
            }
        }

        function C(a, b, c, d, e) {
            var f, h = !1,
                i;
            if (a.getAttribute("data-ms-allowed")) {
                f = a.getAttribute("data-id"), i = a.textContent;
                if (c && b && (a == b || b.parentNode == a))
                    if (d == (i && i.length)) {
                        var j = i.substr(0, i.length - 1),
                            k = document.createTextNode(i.substr(i.length - 1, 1)),
                            l = window.getSelection();
                        a.nextSibling ? g.insertBefore(k, a.nextSibling) : g.appendChild(k), setTimeout(function() {
                            a.textContent = j, l.collapse(k, 1)
                        }, 0), h = !0
                    } else a.removeAttribute("data-ms-allowed"), o[f] && delete o[f], h = !1;
                else {
                    h = !0;
                    if ([8, 46].indexOf(e) > -1 && b && (a == b || b.parentNode == a)) {
                        var l = window.getSelection(),
                            m = a.getAttribute("data-text"),
                            n = i.slice(0, d),
                            p = i.slice(d),
                            q, r, s = !1,
                            t = n + " " + p;
                        m == t && (s = !0);
                        if (e == 8) {
                            q = n.trim().lastIndexOf(" "), n = q > 0 ? n.substr(0, q) : "", r = p.indexOf(" ");
                            if (!s) switch (r) {
                                case -1:
                                    p = "";
                                    break;
                                case 0:
                                    p = p;
                                    break;
                                default:
                                    p = p.substr(r)
                            }
                        } else {
                            r = p.trim().indexOf(" "), p = r > 0 ? p.substr(r) : "", q = n.lastIndexOf(" ");
                            if (!s) switch (q) {
                                case -1:
                                    n = "";
                                    break;
                                case n.length:
                                    n = n;
                                    break;
                                default:
                                    n = n.substr(0, q)
                            }
                        }
                        n && p ? (a.textContent = n.trim() + " " + p.trim(), i = n.trim() + " " + p.trim()) : n ? (a.textContent = n.trim(), i = n.trim()) : p ? (a.textContent = p.trim(), i = p.trim()) : (a.removeAttribute("data-ms-allowed"), o[f] && delete o[f], a.textContent = "", h = !1), a.nextSibling && h ? setTimeout(function() {
                            l.collapse(a.nextSibling, 0)
                        }, 0) : h && setTimeout(function() {
                            l.collapse(a, 1)
                        }, 0)
                    }
                    o[f] && (o[f].customeText = i, a.setAttribute("data-text", i))
                }
            }
            return h
        }

        function D() {
            q && q.removeClass("show").empty(), a(document).unbind("click", F), a("div.horizontalContent").unbind("mousewheel", G)
        }

        function E() {
            var b = a(document.body).find("ul.mentionDropDown.slats.small");
            b.length && a(b).remove(), q = a("<ul/>").addClass("mentionDropDown slats small").appendTo(document.body).scroll(function() {
                document.activeElement != g && window.getSelection().collapse(l, l.nodeValue.length)
            }), c || (c = require("ejs").compile(templates["common/views/generic/superpost/_mention"]))
        }

        function F(b) {
            q && q.hasClass("show") && document.activeElement !== g && b.target != q[0] && !a.contains(q[0], b.target) && D()
        }

        function G(b) {
            q && q.hasClass("show") && document.activeElement == g && b.target != q[0] && !a.contains(q[0], b.target) && D()
        }

        function H() {
            o = {}, D(), q = null, p = []
        }

        function I() {
            return o
        }

        function J(a) {
            o = a
        }

        function r() {
            return r
        }

        function K(a) {
            var b = 0,
                c = a.ownerDocument || a.document,
                d = c.defaultView || c.parentWindow,
                e;
            if (typeof d.getSelection != "undefined") {
                var f = d.getSelection().getRangeAt(0),
                    g = f.cloneRange();
                g.selectNodeContents(a), g.setEnd(f.endContainer, f.endOffset), b = g.toString().length
            } else if ((e = c.selection) && e.type != "Control") {
                var h = e.createRange(),
                    i = c.body.createTextRange();
                i.moveToElementText(a), i.setEndPoint("EndToEnd", h), b = i.text.length
            }
            return b
        }

        function L(a) {
            var b = [];
            return Object.keys(a).forEach(function(c) {
                var d = a[c];
                d.customeText.length > 0 ? b.push(d) : delete a[c]
            }), b.sort(function(a, b) {
                return a.actualIndex > b.actualIndex ? 1 : a.actualIndex < b.actualIndex ? -1 : 0
            }), b
        }

        function M(a, b, c) {
            if (a && b) {
                var d = a.nextSibling,
                    e;
                if (a.nodeType == 3) e = a.nodeValue, c == 0 && (e = N(e));
                else if (a.nodeType == 1) {
                    var f = a.getAttribute("data-id");
                    f && b[f] && (b[f].actualIndex = t), e = a.textContent
                }
                e = e.replace(/[\u200B]/gi, ""), t += e.length, d && M(d, b, ++c)
            }
            return
        }

        function N(a) {
            return a.replace(/^\s+/, "")
        }

        function O(b) {
            function k() {
                p.sort(function(a, b) {
                    return a.startPosition > b.startPosition ? 1 : a.startPosition < b.startPosition ? -1 : 0
                }), b({
                    tags: p,
                    text: P()
                })
            }
            p = [], t = 0, f.html(f.html().replace(/(<br>)+/g, "\n"));
            var c = P(),
                h = I(),
                i;
            M(g.firstChild, h, 0), i = L(h), i.forEach(function(a, b) {
                var c = a,
                    d = c.actualIndex,
                    e = c.customeText.length;
                f.find("span[data-id='" + a.id + "']").length && d > -1 && c.customeText.length > 0 ? p.push({
                    startPosition: d,
                    characterQty: e,
                    entityKey: c.key,
                    text: c.customeText,
                    entityType: "Profile"
                }) : delete a
            }), c.replace(d, function(a, b) {
                var d = a.length - 1,
                    e = c.charCodeAt(b - 1);
                (b == 0 || b > 0 && (e == 10 || e == 32 || e == 160)) && p.push({
                    startPosition: b,
                    characterQty: d,
                    entityKey: null,
                    tagtext: a.substr(1, d),
                    entityType: "StringTag"
                })
            });
            var j = c;
            a.ajax({
                url: "/ajax/stream/mslink",
                type: "POST",
                data: {
                    data: j,
                    showEntityKey: 1
                },
                success: function(a) {
                    a.out && (j = a.out)
                },
                complete: function() {
                    var a = {};
                    j.replace(e, function(b, d, e) {
                        var f = new RegExp(d, "g"),
                            g = d.length;
                        a[d] || c.replace(f, function(b, c) {
                            p.push({
                                startPosition: c,
                                characterQty: g,
                                entityKey: e,
                                text: d,
                                entityType: "Link"
                            }), a[b] = 1
                        })
                    }), k()
                },
                error: function() {
                    k()
                }
            })
        }

        function P() {
            var b = a.trim(f.text().replace(/[\u200B]/gi, ""));
            return b
        }
        var g = g ? g : f[0],
            h, i, j, k, l, m, n, o = {},
            p = [],
            q, r, s = 0,
            t = 0,
            u = -1;
        return f.blur(function(a) {
            var b;
            b = g.firstChild, b && b.tagName == "BR" && g.removeChild(b), h = ""
        }).keydown(function(a) {
            var b = a.which,
                c, d, e;
            r = !1;
            if (b == 38 || b == 40) {
                c = window.getSelection(), d = c.anchorNode, e = c.anchorOffset, d == g && e > 0 && (d = g.childNodes[e - 1]);
                if (d == l || d == l.parentNode) return A(b == 38), !1
            } else {
                if (b == 13 && q && q.hasClass("show")) return u > -1 && (r = !0, B(q.children()[u], a)), !1;
                b == 27 ? (!q || !q.hasClass("show")) && comm.send("page.esc") : [8, 16, 17, 18, 20, 35, 36, 37, 39, 46, 91, 224].indexOf(b) < 0 && setTimeout(function() {
                    v(!0, b)
                }, 0)
            }
        }).keyup("keyup", function(a) {
            a.stopPropagation();
            var b = a.which;
            [8, 46].indexOf(b) > -1 && v(!1, b)
        }).click(function() {
            setTimeout(function() {
                v(!1)
            }, 0)
        }), f.parent().addClass("mentions"), a(window).resize(function() {
            D()
        }), {
            reset: H,
            mentionProfileList: I,
            isProfileSelectByEnterKey: r,
            getTaggingInfo: O,
            setMentionProfileList: J
        }
    }
    var b = {},
        c, d = /\#[a-zA-Z0-9_-]{1,50}/g,
        e = /\[([^\[]*?(?!\s)[^\[]*?)\|((link_baselink_)[0-9]+\_[0-9]+)\]/g;
    Myspace = window.Myspace || {}, Myspace.tagging = f
})(jQuery);
(function(a) {
    function f(d, e) {
        function w(a, b) {
            var c = a.which,
                d, e, f = !0,
                g;
            if (c !== 8) return d = b ? i.val(undefined, !0) : A().trimStart(), e = d.length, b || ++e, e > k && (g = d.substring(0, k), i.val(g), x(d, g), e = k, f = !1), l && z(e), f
        }

        function x(a, d) {
            var f, g, h;
            if (!e.showUrlCutOffWarning) return;
            f = a.substring(k), c.lastIndex = 0, b.lastIndex = 0, g = c.exec(d), g && (h = b.exec(f), h && comm.send("scraper.haslink", {
                input: g[0] + h[0],
                callback: y
            }))
        }

        function y(b) {
            var c;
            b && (p || (p = a('<span class="urlcutoff">Warning! Some portion of url at the end of the post are removed because of limit restrictions. Please verify your post.</span>'), c = a('<i class="x_14"></i>').click(function() {
                d.removeClass("urlcutoffwarning")
            }).appendTo(p), p.insertAfter(d).show()), d.addClass("urlcutoffwarning"))
        }

        function z(a) {
            n.html(a + "/" + k)
        }

        function A() {
            return q ? d.val() : d.text()
        }

        function B(b) {
            b = a.trim(b) === "" ? f : b, q ? d.val(b) : d.html(b), l && z(b.trim().length)
        }

        function C() {
            B(""), d.removeClass("urlcutoffwarning"), o && o.start(), r && (u || v) && r.reset()
        }
        var f, g, h, i, j, k, l, m, n, o, p, q, r, s = function(a) {
                var b = h.scrollHeight,
                    c = h.clientHeight;
                g && clearTimeout(g), b < j && b > c ? d.css("height", b + "px") : b > j && c < j && d.css("height", j + "px"), a || (g = setTimeout(function() {
                    s()
                }, 200))
            },
            t, u, v;
        d = a(d);
        if (!d.length) return;
        h = d[0], q = h.tagName === "TEXTAREA";
        if (!q && d.attr("contenteditable") != "true") return;
        return i = d.data("instance"), i ? i : (e = e || {}, e.defaultValue && d.attr("placeholder", e.defaultValue), f = "", j = e.maxHeight || 100, k = e.maxLength ? parseInt(e.maxLength) : 0, l = e.showCount, m = e.countPos || "topLeft", t = !q || e.showMentions, u = !q && e.showTagging, v = !1, d.focus(function() {
            typeof e.focus == "function" && e.focus()
        }).blur(function(a) {
            var b;
            g && clearTimeout(g), typeof e.blur == "function" && e.blur(a), k && w(a, !0)
        }).bind("mousewheel", function(a) {
            a.stopPropagation()
        }).keypress(function(a) {
            var b = !0,
                c = !0;
            if (a.which !== 13 || typeof e.enter != "function") {
                if (k) var b = w(a);
                return typeof e.keypress == "function" && (c = e.keypress(a)), b && c
            }
            e.enter(), d.blur()
        }).keyup(function(a) {
            if (a.which === 8) {
                if (k && l) {
                    var b = i.val(undefined, !0).length;
                    z(b)
                }
                typeof e.backspace == "function" && e.backspace(a)
            }
        }).bind("paste", function(a) {
            k && setTimeout(function() {
                w(a, !0)
            }, 0), typeof e.paste == "function" && setTimeout(function() {
                e.paste(a)
            }, 0)
        }), e.enableScrapeLink && comm.send("scraper.bind", {
            el: d,
            callback: function(a) {
                o = a, e.previewContainer && (o.previewContainer = e.previewContainer), typeof e.onScrape == "function" && (o.onScrape = e.onScrape)
            }
        }), v && (r = new Myspace.Linkifier(d), u = !1), u && (r || (r = Myspace.tagging(d)), t = !1), t && (r || (r = Myspace.mention(d))), !t && !u && d.parent() && d.parent().removeClass("mentions"), i = {
            val: function(a, b) {
                var c, d;
                if (typeof a == "undefined") return (t || u) && !b ? (c = A().trimStart(), r && (v ? d = r.getMentions() : d = r.mentionProfileList()), Object.keys(d).forEach(function(a) {
                    var b = d[a];
                    c = c.replace(b.text, "[[" + b.text + "]]")
                }), c) : A().trimStart();
                B(a)
            },
            focus: function() {
                d.focus()
            },
            blur: function() {
                d.blur()
            },
            resize: function() {
                s(!0)
            },
            placeholder: function(a) {
                typeof a != "undefined" && d.attr("placeholder", a)
            },
            reset: C,
            getMentions: function() {
                return v && r ? r.getMentions() : r && r.mentionProfileList()
            },
            scraperInstance: o,
            getAll: function(a) {
                v ? r.onComplete(a) : u && r ? r.getTaggingInfo(a) : a({
                    tags: {},
                    text: A()
                })
            }
        }, l && (n = a("<span class='" + m + "'>" + i.val(undefined, !0).length + "/" + k + "</span>").appendTo(d.parent())), d.data("instance", i), i)
    }
    var b = /^[^\n\s]+/,
        c = /[^\n\s]+$/,
        d = /\n/g,
        e = /\n$/;
    Myspace = window.Myspace || {}, Myspace.postControl = f
})(jQuery);
(function(a) {
    var b = function(b, c) {
        function M(b) {
            var c = b.which;
            H = !0, c != 38 && c != 40 && c != 27 && (c == 13 || c == 9 ? (G && F > -1 && _(E.children()[F], b), b.preventDefault()) : j && (f || e) && (I || (I = !0, n && n()), P(), O())), x && x(b), z && a.trim(d.val()) === "" && Q()
        }

        function N(a) {
            var b = a.which;
            (b == 38 || b == 40) && U(b == 38)
        }

        function O() {
            C = setTimeout(R, i)
        }

        function P() {
            C && clearTimeout(C)
        }

        function Q() {
            L = undefined
        }

        function R(b) {
            var c = j ? a.trim(d.val() || d.text()).toLowerCase() : "";
            z && c.substr(0, 2) !== J.substr(0, 2) && Q();
            if ((c != J || !G) && (f && f.length || c && c.length >= h)) {
                J = c;
                if (D[c]) T(D[c], c);
                else if (f && f.length)
                    if (!c) b && T(f, c);
                    else {
                        var g, i = [];
                        for (var k in f) {
                            g = f[k].text;
                            if (!g) continue;
                            g = g.toLowerCase(), g.indexOf(c) == 0 && i.push(f[k])
                        }
                        T(i, c)
                    }
                else if (e) {
                    function l(a, b, d) {
                        if (z) {
                            var e = d.getResponseHeader("X-SearchSessionId");
                            e && (L = e)
                        }
                        if (c !== J) return;
                        if (!H) {
                            bb();
                            return
                        }
                        var f = a.data || [];
                        s ? s(f, function(a) {
                            f = a, T(f, c)
                        }) : T(f, c)
                    }

                    function m() {
                        bb()
                    }
                    ab();
                    if (typeof e == "function") e(c, l, m);
                    else {
                        z && (r.ssid = L);
                        var n = a.extend({
                            query: c
                        }, r);
                        a.ajax({
                            type: "POST",
                            url: e,
                            success: l,
                            error: m,
                            data: n
                        })
                    }
                }
            } else c === "" && (J = "", t && t(function(a) {
                a && T(a, c)
            }), z && Q())
        }

        function S() {
            var b = o[0],
                c = b.offsetLeft - 1,
                e = o.offsetParent(),
                f = e.css("position");
            E = a("<ul/>").addClass("autoCompleteList").insertAfter(d).css(k ? "width" : "min-width", o.innerWidth() + "px").scroll(function() {
                document.activeElement != d[0] && d[0].focus()
            }), f !== "absolute" && f !== "relative" && f !== "fixed" && e.css("position", "relative"), E.css("left", c), q && E.addClass(q), E.bind("mousewheel", function(a) {
                a.stopPropagation()
            })
        }

        function T(b, c) {
            bb(), E || (p ? E = p : S());
            if (b.length) {
                D[c] = b, F = 0;
                var d = E.innerHeight() || 100;
                E.empty(), V();
                if (!B) {
                    if (!require) return;
                    B = require("ejs").compile(g)
                }
                var e = a(B(b)).appendTo(E).mouseover(function() {
                    var b = a(this),
                        c = b.index();
                    c != F && (b.addClass("selected"), F > -1 && a(E.children()[F]).removeClass("selected"), F = c)
                }).click(function(a) {
                    return _(this, a), y
                });
                E.find("li").first().addClass("selected"), E.css("height", e.length ? "auto" : d).scrollTop(0)
            } else F = -1, E.html('<li style="white-space: normal;">' + K + "</li>"), V()
        }

        function U(b) {
            if (!E || j) {
                P(), R(!0);
                if (!E) return
            }
            V();
            var c = E.children(),
                d = c.length,
                e;
            if (d) {
                b ? F > 0 && (e = !0) : F < d && (F == d - 1 && --F, e = !0);
                if (e) {
                    a(c[F]).removeClass("selected"), b ? --F : ++F;
                    var f = c[F],
                        g = E.scrollTop(),
                        h = b ? g - f.offsetTop : f.offsetTop + f.offsetHeight - E.innerHeight() - g;
                    a(f).addClass("selected"), h > 0 && E.scrollTop(b ? g - h : g + h)
                }
            }
        }

        function V() {
            G || (E.show(), G = !0)
        }

        function W() {
            G && (E.hide(), G = !1, a(document).unbind("mousedown", X))
        }

        function X(b) {
            if (E) {
                var c = b.target;
                if (c == d[0] || c == E[0] || a.contains(E[0], c)) return;
                if (p && p.length && c == p.parent()[0]) return
            }
            Z()
        }

        function Y() {
            A || a(document).mousedown(X), H = !0, l || R()
        }

        function Z() {
            W(), H = !1, bb(), w && w()
        }

        function _(b, c) {
            I = !1;
            var e = !1;
            m ? e = m(b, c) : d.val(a(b).text()), e || W()
        }

        function ab() {
            u ? u() : d.addClass("loadingAutoComplete")
        }

        function bb() {
            v ? v() : d.removeClass("loadingAutoComplete")
        }

        function cb() {
            D = {}
        }
        var d = a(b),
            e = c.dataHandler || c.handlerUrl;
        if (!d.length || d[0].type !== "text" && d[0].type !== "textarea" && !d.hasClass("contentEditable") || !c || !c.data && !e) return null;
        var f = c.data,
            g = c.template || "<% locals.forEach(function(item) { %><li> <% = item.text  %> </li><% }) %>",
            h = c.minLength || 2,
            i = c.interval || 300,
            j = c.autocomplete === undefined ? !0 : c.autocomplete,
            k = c.fitToElement,
            l = c.noListOnFocus,
            m = c.onSelectItem,
            n = c.onSelectionModified,
            o = c.positionEl || d,
            p = c.customListRoot,
            q = c.customClass,
            r = c.requestData || {},
            s = c.onGetDataSuccessfully,
            t = c.onSelectionCleared,
            u = c.onLoading,
            v = c.onBeforeRendering,
            w = c.onBlur,
            x = c.onType,
            y = c.allowClickDefault,
            z = c.sessionRequired,
            A = c.disableHideListOnBlur,
            B, C, D = {},
            E, F = -1,
            G, H, I, J = "",
            K = c.noResultsMessage || "No results found.",
            L;
        return d.keydown(M).keydown(N).keyup(function(a) {
            a.which === 27 && G && (a.stopPropagation(), W())
        }).focus(Y).bind("paste", O).attr("autocomplete", "off"), {
            showList: function() {
                H = !0, E || R(!0), V()
            },
            clearCache: cb,
            setNoListOnFocus: function(a) {
                l = a
            },
            blur: Z,
            isVisible: G,
            hideList: W,
            setPositionEl: function(a) {
                o = a
            }
        }
    };
    Myspace.AutoComplete = b
})(jQuery);
var Myspace = Myspace || {};
(function(a) {
    function l() {
        c && c.endTour(), h && (comm.send("location.href", {
            url: h
        }), h = ""), s()
    }

    function m() {
        function b() {
            n(), comm.send("location.href", {
                url: "/tour",
                loadState: function(a, b, c) {
                    return !1
                }
            })
        }
        k ? (g = null, f && (f.show(), b())) : (g = a.ajax({
            url: "/ajax/touroptions",
            type: "POST"
        }), g.done(function(c) {
            k = c && a(c), k && (a("body").append(k), r(), f = new Myspace.Dialog(k), f.show(), b())
        }))
    }

    function n() {
        h = location.pathname;
        var a = {
            pfc: "touroverlay",
            overlayId: "siteTourTemplate"
        };
        comm.send("beacon.v3.overlay", a), _gaq.push(["_trackPageview", "/tour"])
    }

    function o() {
        var b = window.location.search,
            c = 0;
        b && b.indexOf("classic") > -1 && (c = 1), g = a.ajax({
            url: "/ajax/resethomeoptions",
            data: {
                classicReset: c
            },
            type: "POST"
        }), g.done(function(a) {
            a.success ? alert("Successfully Reset Home Setting") : alert("Error occurred. Please try later.")
        })
    }

    function p() {
        g = a.ajax({
            url: "/ajax/resetstreamoptions",
            type: "POST"
        }), g.done(function(a) {
            a.success ? alert("Successfully Reset Stream Setting") : alert("Error occurred. Please try later.")
        })
    }

    function q() {
        d.hasClass("dropZone") && (d.removeClass("dropZone"), comm.send("drawer.panel", "queue"))
    }

    function r() {
        a("#siteTourTemplate a, #siteTourTemplate img").click(function() {
            var b = a(this).data("tour-page-url"),
                c = a(this).data("tour-type");
            b && c && (comm.send("location.href", b), comm.listen("spaceway.page.complete", function() {
                return comm.send("tour.start", c), !0
            }, !0))
        })
    }

    function s() {}
    var b = [],
        c, d = a("body"),
        e = a(window),
        f, g, h = "",
        i = "#notificationbar",
        j = ["AT", "CH", "DE", "IE", "ES", "FI", "FR", "IT", "NO", "NL", "PT", "RU", "SE", "GB"],
        k;
    c = Myspace.siteTour = function() {
        function n(e) {
            p();
            if (e > -1) {
                l = e;
                var h = m.tourItems,
                    i = m.tourLength,
                    j = e + 1,
                    k = h[e],
                    n, q = k.tourItemId;
                if (q && q.length > 0) {
                    n = a("[data-tour-id='" + k.tourItemId + "']");
                    if (!n) return;
                    k.showConnectBtn && d.addClass("connectSiteTour")
                }
                c.append(o(k.content, j, i)), c.hide(), m.containerClass && b.addClass(m.containerClass), k.bracket && (b.append(f), c.append(g)), b.append(c), d.append(b), k.overlayCss && b.css(k.overlayCss), r(k, n)
            }
        }

        function o(a, b, c) {
            var d, e, f;
            return f = a.callback ? "data-callback='" + a.callback + "'" : "", d = a.callbackText ? a.callbackText : a.lastItem ? "Close" : "Next", e = "<div class='tour_header'><button class='x_14 noStyle'></button>", c > 1 && (e += "<div class='info'>" + b + " OF " + c + "</div>"), a.header.length > 0 && (e += "<div class='title'>" + a.header + "</div>"), e += "<div class='content'>" + a.body + "</div>" + "</div>" + "<div class='tour_footer'><button class='tourhomeicon tourhome noStyle'></button>", e += "<button data-index='" + a.nextId + "' class='tour-next-button'  " + f + ">" + d + "</button>", a.prevId > -1 && (e += "<button data-index='" + a.prevId + "' class='primary'>Back</button>"), e += "</div>", e
        }

        function p() {
            var f = a(i);
            if (f) {
                var g = a(j),
                    l = a(h);
                g.removeClass("tour-bracket-bottom tour-bracket-left tour-bracket-right tour-bracket-top").attr("style", ""), l.removeClass(" tour-arrow-top tour-arrow-bottom tour-arrow-right tour-arrow-left").attr("style", ""), c.html(""), b.attr("style", ""), g.remove(), f.remove(), a(k).remove()
            }
            e.unbind("resize.sitetour"), d.removeClass("connectSiteTour")
        }

        function r(b, d) {
            var f = 0,
                h = 0,
                k, m, o, p, q, r, u, v = a(i),
                w = a(j),
                x = a.extend({}, b.content),
                y = x.scrollTo,
                z = b.bracket && a.extend({}, b.bracket),
                A = 0,
                B = 0;
            y && s(y), k = d && d.outerHeight(), m = d && d.outerWidth(), r = v.height(), u = v.width();
            if (k && m) {
                var C = d.offset();
                A = f = C.left, B = h = C.top, b.overrideCss && (x.css = null);
                if (!b.arrow) {
                    var D = u - m,
                        E = r - k;
                    D > 0 && (A = f - D / 2), E > 0 && (B = h - E / 2)
                }
            } else b.bracket && !b.bracket.css && (z = null);
            c.css({
                left: A,
                top: B
            });
            switch (x.direction) {
                case "top":
                    o = {
                        left: A,
                        top: h - r - 20
                    };
                    break;
                case "bottom":
                    o = {
                        left: A,
                        top: h + k + 25
                    };
                    break;
                case "left":
                    o = {
                        left: f - u - 30,
                        top: B
                    };
                    break;
                case "right":
                    o = {
                        left: f + m + 30,
                        top: B
                    }
            }
            x.css ? o = a.extend({
                opacity: 1
            }, o, x.css) : o = a.extend({
                opacity: 1
            }, {}, o);
            if (o.left + u > a(window).width()) {
                var D = o.left + u - a(window).width();
                o.left = o.left - D - 10
            }
            if (o.top + r > a(window).height()) {
                var E = o.top + r - a(window).height();
                o.top = o.top - E - 10
            }
            c.css(o);
            if (z) {
                var F, G, H, I = "tour-arrow-" + x.direction;
                q = "tour-bracket-" + z.direction;
                switch (z.direction) {
                    case "top":
                        G = h + k + 10, p = {
                            left: f - 10,
                            top: G,
                            width: m + 10,
                            height: 10
                        }, F = {
                            top: "-=10"
                        };
                        break;
                    case "bottom":
                        G = h - 20, p = {
                            left: f - 10,
                            top: G,
                            width: m + 10,
                            height: 10
                        }, F = {
                            top: "+=10"
                        };
                        break;
                    case "left":
                        H = f + m + 10, p = {
                            left: H,
                            top: h - 10,
                            height: k + 10,
                            width: 10
                        }, F = {
                            left: "-=10"
                        };
                        break;
                    case "right":
                        H = f - 20, p = {
                            left: H,
                            top: h - 10,
                            height: k + 10,
                            width: 10
                        }, F = {
                            left: "+=10"
                        }
                }
                z.css && (p = a.extend({}, p, z.css)), w.removeClass("tour-bracket-up tour-bracket-down tour-bracket-left tour-bracket-right").addClass(q).css(p), z.anitmation && w.animate(F, 500), g.addClass(I);
                if (b.arrow) {
                    var J = p = a.extend({}, {}, b.arrow);
                    g.css(J)
                }
            }
            t(), c.fadeIn("slow"), e.unbind("resize.sitetour").bind("resize.sitetour", function() {
                n(l)
            })
        }

        function s(c) {
            var d = c.direction || "down";
            if (d && d == "left") {
                var e = a("#" + c.id);
                e && e.scrollLeft(c.move)
            } else d && d == "down" && (window.scroll(0, c.move), b.height(a(window).scrollTop() + a(window).height() - 76))
        }

        function t() {
            a("button.x_14", a(i)).click(function(a) {
                p(), d.hasClass("queueOpen") && comm.send("drawer.forceOpen", !1)
            }), a("div.tour_footer > button", a(i)).click(function(b) {
                var c = a(this),
                    e = c.hasClass("tourhomeicon"),
                    f = c.data("callback") || "",
                    g = c.data("index");
                e ? (p(), q(), d.hasClass("queueOpen") && comm.send("drawer.forceOpen", !1), comm.send("tour.dialogbox")) : f.length > 0 ? (p(), comm.send("tour.button", {
                    element: f,
                    nextItemIndex: g
                })) : (q(), n(g))
            })
        }
        var b = a("<div class='tour_container'>"),
            c = a("<div id='tour_dialog'>"),
            f = a("<div class='tour_bracket'>"),
            g = a("<div class='tourArrow'>"),
            h = "div.tourArrow",
            i = "#tour_dialog",
            j = "div.tour_bracket",
            k = "div.tour_container",
            l = 0,
            m, u = function() {
                m && n(0)
            },
            v = function(b) {
                m = a.extend({}, {}, b), u(0)
            };
        return {
            init: v,
            startTour: u,
            showNextItem: n,
            endTour: p
        }
    }(), comm.listen("tour.button", function(a) {
        var b = context.toursetting && context.toursetting.tourSettingVersion,
            e;
        a.element == "searchtour" ? (comm.send("search.overlay", {
            searchtour: 1
        }), comm.send("tour.start", "search")) : a.element == "editprofile" ? (comm.send("location.href", "/editprofile"), comm.listen("spaceway.page.complete", function() {
            return comm.send("tour.start", "profileedit"), !0
        }, !0)) : a.element == "openqueue" ? (comm.send("drawer.forceOpen", !0), setTimeout(function() {
            c.showNextItem(a.nextItemIndex)
        }, 500), e = !0) : a.element == "opendragmode" ? (comm.send("drawer.panel", "mixes"), d.addClass("dropZone"), setTimeout(function() {
            c.showNextItem(a.nextItemIndex)
        }, 500), e = !0) : a.element == "closedragmode" && (q(), d.hasClass("queueOpen") && comm.send("drawer.forceOpen", !1)), e == 1 && comm.listen("drawer.closed", function() {
            return q(), l(), !0
        }, !0)
    }, !0), comm.listen("tour.start", function(d) {
        var e = c,
            f = b[d];
        if (!f) {
            var g = a.ajax({
                url: "/ajax/getpagetourcontent/" + d,
                type: "POST"
            });
            g.done(function(a) {
                a && a.success && (f = a.content, b[d] = f, e && f && e.init(f))
            })
        } else e && f && e.init(f)
    }, !0), comm.listen("end.search.tour", function() {
        return l(), !0
    }, !0), comm.listen("dialog.hiding", l, !0), comm.listen("dialog.showing", l, !0), comm.listen("spaceway.page.loading", l, !0), comm.listen("tour.dialogbox", m, !0), comm.listen("home.setting.reset", o, !0), comm.listen("stream.setting.reset", p, !0), comm.listen("load.tour.page", r, !0), r()
})(jQuery);
var Myspace = Myspace || {};
(function(a) {
    Myspace.AutocompleteSearchV1 = function(b, c) {
        function s() {
            r = undefined
        }

        function t(a) {
            a.which === 13 && (e && d.abort(), f.reset())
        }

        function u(b) {
            var c = b.which,
                g = 27,
                h = v();
            if ([13, 37, 38, 39, 40].indexOf(c) !== -1) return !1;
            c === g ? (f.stop(), d = null, a.isFunction(j) && j()) : h.length === 0 ? (s(), e && d.abort(), f.stop(), q = "", k()) : (o(), f.reset())
        }

        function v() {
            return a.trim(b.val())
        }

        function w(b) {
            try {
                var c = new Date;
                c.getMonth() === 3 && c.getDate() === 1 && b && b.toLowerCase() === "april fools" && a("html").toggleClass("aprilFools")
            } catch (d) {}
        }

        function x() {
            var a = v();
            a.length >= g && (a.substr(0, g) !== q.substr(0, g) && s(), a !== q && (w(a), q = a, y(encodeURIComponent(a))))
        }

        function y(c) {
            e && d.abort(), e = !0, l(d), d = a.ajax({
                type: "POST",
                url: h + c + "&limit=" + i,
                data: {
                    searchType: b.data("search-type") || "all",
                    ssid: r,
                    page: p
                },
                success: function(a, b, c) {
                    e = !1;
                    var d = c.getResponseHeader("X-SearchSessionId");
                    d && (r = d), m(a)
                },
                error: function(a) {
                    e = !1, n(a)
                }
            })
        }

        function z() {
            return r
        }
        var d, e = !1,
            f = new Myspace.ResetTimer(x, context.searchOverlay.delay),
            g = context.searchOverlay.minimumQueryLength,
            h = c.url || "/ajax/search/autocomplete/?q=",
            i = c.limit || 2,
            j = c.onHide,
            k = c.onClear || a.noop,
            l = c.onLoading || a.noop,
            m = c.onSuccess || a.noop,
            n = c.onError || a.noop,
            o = c.onReset || a.noop,
            p = c.page,
            q = "",
            r;
        return context.searchOverlay.enterKeySubmits ? b.keydown(t) : b.keyup(u), b.data("ssid") && (r = b.data("ssid")), {
            doSearch: x,
            getSearchSessionId: z
        }
    }
})(jQuery);
(function(a) {
    function r(a) {
        if (a.which === 13) return !1
    }

    function s(c) {
        b || (b = new Myspace.Dialog(a("#searchDialog"), {
            centerDialog: !1
        })), b.toggle();
        if (!b.isClosed()) {
            d.select(), i = window.location.href;
            var e = {
                pfc: "searchoverlay",
                overlayId: "searchDialog"
            };
            comm.send("beacon.v3.overlay", e), document.body.style.overflow = "hidden", B(), _gaq.push(["_trackPageview", "/search/overlay"])
        }
        return c && (g = !!c.searchtour, c.query && (d.val(c.query), E.doSearch())), !1
    }

    function t() {
        var a = d.val();
        if (a !== "") var b = new Tracking("searchoverlay", "Query", a.toLowerCase());
        document.body.style.overflow = "auto", C(), o = null, l = 0, _gaq.push(["_trackPageview"])
    }

    function u() {
        C(), e.removeClass("loading white")
    }

    function v() {
        u(), e.html(""), f.hide()
    }

    function w(a) {
        C(), g && (comm.send("end.search.tour"), g = !1), e.addClass("loading white"), e.html(""), f.hide()
    }

    function x() {}

    function y(a) {
        e.removeClass("loading white"), a.hasRecords ? (e.html(a.markup), f.hide(), A(), comm.send("page.changed", e), comm.send("screen.trackers", {
            scrollType: "horizontal",
            pageNum: 1
        })) : (e.html(""), f.show())
    }

    function z(a) {
        e.removeClass("loading white")
    }

    function A() {
        p = e.find(".shortResults"), n = p.first().children("li"), p.click(function(b) {
            var c = a(b.target),
                d = c.closest(".verticalContent"),
                e;
            d && d.length && (d.hasClass("topHit") ? e = "TopResultColumn" : e = "StandardResultColumn", comm.send("beacon.v3", {
                actionText: "Click",
                objectName: e
            }));
            if (!c.closest(".countsOnly").length) {
                if (b.target.nodeName != "A" && b.target.nodeName != "BUTTON" && !c.hasClass("connectButton") && !c.parent().hasClass("connectButton")) {
                    var f = c.closest("li").find(".mainLink").attr("href");
                    return comm.send("location.href", f), !1
                }
            } else b.stopPropagation()
        }), l = 0, B()
    }

    function B() {
        d.unbind("keydown", r), k.keydown(D)
    }

    function C() {
        d.keydown(r), k.unbind("keydown", D)
    }

    function D(a) {
        var b = a.which,
            c, e, f;
        if (b === 40) a.preventDefault(), o ? (o.removeClass("selected"), c = o.next(), c.length > 0 ? o = c.addClass("selected") : o = n.eq(0).addClass("selected")) : (n = p.first().children("li"), o = n.eq(0).addClass("selected"), l = 0, d.blur());
        else if (b === 38) {
            if (!o) return;
            a.preventDefault(), o.removeClass("selected"), c = o.prev(), c.length > 0 ? o = c.addClass("selected") : (o = null, l = 0, d.focus())
        } else if (b === 37 && o) a.preventDefault(), e = n.index(o), m = l, l--, l < 0 && (l = p.length - 1), f = p.eq(l), f.length ? (n = f.children("li"), c = f.children("li").eq(e), o.removeClass("selected"), c.length || (c = f.children("li").last()), o = c.addClass("selected")) : l = m;
        else if (b === 39 && o) a.preventDefault(), e = n.index(o), m = l, l++, l > p.length - 1 && (l = 0), f = p.eq(l), f.length ? (n = f.children("li"), c = f.children("li").eq(e), o.removeClass("selected"), c.length || (c = f.children("li").last()), o = c.addClass("selected")) : l = m;
        else if (b === 13) return !o && a.target.id == "q" ? !1 : (d.blur(), comm.send("location.href", o.find(".mainLink").attr("href")), !1)
    }
    var b, c = a("#searchDialog"),
        d = a("#q"),
        e = a("#searchResults"),
        f = a("#noResults"),
        g, h = {},
        i, j, k = a(window),
        l = 0,
        m, n, o, p, q = !1;
    comm.listen("search.overlay", function(a) {
        s(a)
    }, !0), comm.listen("dialog.showing", function(a) {
        a.attr("id") === "superpostDialog" && b && b.hide()
    }, !0), comm.listen("dialog.hiding", function(a) {
        a.attr("id") === "searchDialog" && t()
    }, !0), context.features.isSearchEnabled && a("#search").click(function(a) {
        a.preventDefault();
        if (!b || b.isClosed()) q = !0, s();
        q ? b && d.select() : s()
    }), c.click(function(b) {
        var c = a(b.target);
        b.target.tagName != "INPUT" && c.closest(".shortResults").length == 0 && s()
    }), d.click(function(a) {
        o && (o.removeClass("selected"), o = null, l = 0)
    }), d.keydown(r), h.onHide = u, h.onLoading = w, h.onReset = x, h.onSuccess = y, h.onError = z, h.onClear = v, h.limit = 10;
    var E = new Myspace.AutocompleteSearchV1(d, h)
})(jQuery);
(function(a) {
    function g(b) {
        var c = a("#wrap").find("> .horizontalContent > div"),
            d = c.scrollLeft();
        c.stop(!0, !0), c.animate({
            scrollLeft: d + b
        }, 300)
    }

    function h(a) {
        return a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122
    }
    var b = !1,
        c = /chrome/.test(navigator.userAgent.toLowerCase()),
        d = a("body"),
        e = a("#photoCarouselLightbox"),
        f = a(window);
    d.bind("keydown", function(d) {
        var e = d.which;
        if (e === 27) a("#q").blur(), d.preventDefault();
        else {
            if ([17, 224, 91, 93].indexOf(e) > -1) return b = !0, !0;
            c && h(e) && (b = !1)
        }
    }), d.bind("keyup", function(a) {
        var c = a.target,
            d = a.which,
            h = c.tagName;
        b && [17, 224, 91, 93].indexOf(a.which) > -1 && (b = !1);
        if (d === 27) comm.send("dialog.isOpen", function(a) {
            comm.send("page.esc", {
                isDialogOpen: a
            })
        });
        else if (h !== "INPUT" && h !== "TEXTAREA" && c.contentEditable !== "true" && !b && !a.ctrlKey && !a.altKey && !e.hasClass("open")) {
            if ([33, 37].indexOf(d) != -1) return g(-f.width() * .7), !1;
            if ([34, 39].indexOf(d) != -1) return g(f.width() * .7), !1
        }
    }), context.features.isSearchEnabled && d.bind("keypress", function(d) {
        var e = d.target,
            f = d.which,
            g = e.tagName;
        return g === "INPUT" || g === "TEXTAREA" || e.contentEditable === "true" || g === "SELECT" || g === "OPTION" || b || d.ctrlKey || d.altKey ? (c || (b = !1), !0) : h(f) ? (comm.send("search.overlay"), a("#q").val(String.fromCharCode(f)).focus(), !1) : !0
    })
})(jQuery);
(function(a) {
    Myspace.HtmlUploader = function(b, c, d) {
        function o() {
            g.click(function() {
                comm.send("upload.browseOpen")
            }), g.change(function(a) {
                comm.send("upload.browseClose"), p(a)
            }), f.upload && (h.bind("dragstart", d.html.dragStartHandler), h.bind("dragover", function(b) {
                return b.preventDefault && b.preventDefault(), !1
            }), h.bind("dragover", d.html.dragOverHandler), h.bind("dragenter", d.html.dragEnterHandler), h.bind("dragleave", d.html.dragLeaveHandler), h.bind("dragend", d.html.dragEndHandler), h.bind("drop", function(a) {
                d.html.dropHandler && d.html.dropHandler(), p(a)
            }), d.html.drag_n_drop_Supported_handler && d.html.drag_n_drop_Supported_handler()), d.html.html_uploader_loaded && d.html.html_uploader_loaded()
        }

        function p(a) {
            d.html.dragLeaveHandler && d.html.dragLeaveHandler(a);
            var b = a.target.files || a.originalEvent.dataTransfer.files,
                c, f, h = i.length;
            if (!b || b.length === 0) return;
            if (d.CLEAR_QUEUE_ON_FILE_SELECT) {
                for (f = 0; f <= h - 1; f++) i.splice(f, 1);
                h = 0, A()
            }
            for (f = 0; c = b[f]; f++) v(c, h, f), h++;
            d.FILES_SELECTED_HANDLER && d.FILES_SELECTED_HANDLER(b.length, e.files_queued, e.queue_errors, e.files_queued), d.isMobile || g.val("")
        }

        function q(a, b, c) {
            d.UPLOAD_BEGIN_HANDLER && d.UPLOAD_BEGIN_HANDLER(b, c)
        }

        function r(a, b, c) {
            d.UPLOAD_PROGRESS_HANDLER && d.UPLOAD_PROGRESS_HANDLER(b, c, a.loaded)
        }

        function s(b, c, f) {
            var g = a.parseJSON(b.target.responseText)[0];
            g.success ? (e.successful_uploads++, e.files_queued--, i[f] = null, d.UPLOAD_COMPLETE_HANDLER && d.UPLOAD_COMPLETE_HANDLER(c, f, g), d.UPLOAD_PROGRESS_HANDLER && d.UPLOAD_PROGRESS_HANDLER(c, f, g.size)) : t(b, c, f, g.error), x()
        }

        function t(a, b, c, f) {
            e.upload_errors++, e.files_queued--, i[c] = null, d.UPLOAD_ERROR_HANDLER && d.UPLOAD_ERROR_HANDLER(b, c, {
                errorCode: f,
                errorMessage: m.GetErrorMessage(b, m.MapServerError(f), n)
            }), x()
        }

        function u(a, b, c) {
            e.upload_canceled++, e.files_queued--, i[c] = null;
            if (l) {
                l = !1;
                return
            }
            k && (k = !1, x()), d.UPLOAD_CANCEL_HANDLER && d.UPLOAD_CANCEL_HANDLER(b, c, {
                errorCode: m.ERROR_CODES.FILE_CANCELLED,
                errorMessage: m.GetErrorMessage(b, m.ERROR_CODES.FILE_CANCELLED, n)
            })
        }

        function v(a, b, c) {
            var f = m.GetMaxFileSize(n);
            d.MAX_FILE_COUNT > -1 && c > d.MAX_FILE_COUNT - 1 ? (e.queue_errors++, i.push(null), d.FILE_PROCESSED_ERROR_HANDLER && d.FILE_PROCESSED_ERROR_HANDLER(a, b, {
                errorCode: m.ERROR_CODES.MAX_FILE_COUNT_EXCEEDED,
                errorMessage: m.GetErrorMessage(a, m.ERROR_CODES.MAX_FILE_COUNT_EXCEEDED, n)
            })) : a.size > f ? (e.queue_errors++, i.push(null), d.FILE_PROCESSED_ERROR_HANDLER && d.FILE_PROCESSED_ERROR_HANDLER(a, b, {
                errorCode: m.ERROR_CODES.MAX_FILE_SIZE_EXCEEDED,
                errorMessage: m.GetErrorMessage(a, m.ERROR_CODES.MAX_FILE_SIZE_EXCEEDED, n)
            })) : m.IsAcceptedFileType(n, a) ? y(a, b) : (e.queue_errors++, i.push(null), d.FILE_PROCESSED_ERROR_HANDLER && d.FILE_PROCESSED_ERROR_HANDLER(a, b, {
                errorCode: m.ERROR_CODES.INVALID_FILE_TYPE,
                errorMessage: m.GetErrorMessage(a, m.ERROR_CODES.INVALID_FILE_TYPE, n)
            }))
        }

        function w() {
            var a, b = null;
            for (a = 0; a < i.length; a++)
                if (i[a] != null) {
                    b = i[a], j = a;
                    break
                } d.UPLOAD_BEGIN_HANDLER && d.UPLOAD_BEGIN_HANDLER(b, j), f = new XMLHttpRequest;
            var c = new FormData;
            for (var e in d.POST_PARAMS) c.append(e, d.POST_PARAMS[e]);
            m.PreProcess(n, b, function(a) {
                c.append("file", a), c.append("ui", z()), f.upload && f.upload.addEventListener("progress", function(a) {
                    r(a, b, j)
                }, !1), f.addEventListener("error", function(a) {
                    t(a, b, j)
                }, !1), f.addEventListener("abort", function(a) {
                    u(a, b, j)
                }, !1), f.addEventListener("load", function(a) {
                    s(a, b, j)
                }, !1), f.open("POST", m.GetUploadEndpoint(d.MEDIA_TYPE)), f.send(c)
            })
        }

        function x() {
            e.files_queued > 0 ? (w(), e.in_progress = !0) : e.in_progress = !1
        }

        function y(a, b) {
            e.files_queued++, i.push(a), d.FILE_PROCESSED_SUCCESS_HANDLER && d.FILE_PROCESSED_SUCCESS_HANDLER(a, b)
        }

        function z() {
            var a = "";
            for (var b = 0; b < 32; b++) a += Math.floor(Math.random() * 16).toString(16);
            return a
        }

        function A() {
            e.files_queued = 0, e.successful_uploads = 0, e.upload_errors = 0, e.upload_canceled = 0, e.queue_errors = 0
        }
        var e = {
                in_progress: !1,
                files_queued: 0,
                successful_uploads: 0,
                upload_errors: 0,
                upload_canceled: 0,
                queue_errors: 0
            },
            f = new XMLHttpRequest,
            g = b,
            h = c,
            i = [],
            j = 0,
            k = !1,
            l = !1,
            m = Myspace.Upload,
            n = d.MEDIA_TYPE == m.MEDIA_TYPES.TEMP ? d.POST_PARAMS.type : d.MEDIA_TYPE;
        this.CancelUpload = function(a) {
            i[a] = null;
            if (a < j) return;
            a == j && f && (k = !0, f.abort()), a > j && (e.upload_canceled++, e.files_queued--, d.UPLOAD_CANCEL_HANDLER && d.UPLOAD_CANCEL_HANDLER(i[a], a, m.ERROR_CODES.FILE_CANCELLED))
        }, this.StopUpload = function() {
            l = !0, f.abort()
        }, this.StartUpload = function() {
            x()
        }, this.GetStats = function() {
            return e
        }, o()
    }
})(jQuery);
(function(a) {
    Myspace.LiteUploader = function(b) {
        function f() {
            a.extend(!0, d, b);
            var f = a(d.html.filesInput),
                g = a(d.html.dragDropArea);
            if (context.iOSUploadSupported === !1) {
                var h = a("<input type='button' style='opacity:0'/>");
                h.attr("id", f.attr("id")).attr("class", f.attr("class")).width(f.width()).click(function(b) {
                    b.preventDefault(), e || (e = new Myspace.Dialog(a("#iOSUploadSupport"))), e.show()
                }), f.after(h).remove()
            }
            c = new Myspace.HtmlUploader(f, g, d)
        }
        var c = null,
            d = {
                MAX_FILE_COUNT: 1,
                MEDIA_TYPE: null,
                CLEAR_QUEUE_ON_FILE_SELECT: !0,
                POST_PARAMS: {
                    utoken: context.hashMashter
                },
                FILES_SELECTED_HANDLER: null,
                FILE_PROCESSED_SUCCESS_HANDLER: null,
                FILE_PROCESSED_ERROR_HANDLER: null,
                UPLOAD_BEGIN_HANDLER: null,
                UPLOAD_PROGRESS_HANDLER: null,
                UPLOAD_ERROR_HANDLER: null,
                UPLOAD_CANCEL_HANDLER: null,
                UPLOAD_COMPLETE_HANDLER: null,
                html: {
                    filesInput: "",
                    dragDropArea: "",
                    dragStartHandler: null,
                    dragOverHandler: null,
                    dragEnterHandler: null,
                    dragLeaveHandler: null,
                    dragEndHandler: null,
                    dropHandler: null,
                    drag_n_drop_NotSupported_handler: null
                }
            },
            e;
        this.CancelUpload = function(a) {
            c.CancelUpload(a)
        }, this.StopUpload = function() {
            c.StopUpload()
        }, this.StartUpload = function() {
            c.StartUpload()
        }, this.GetStats = function() {
            return c.GetStats()
        }, this.SetPostParams = function(b) {
            a.extend(!0, d.POST_PARAMS, b)
        }, f()
    }
})(jQuery);
(function(a) {
    Myspace.Uploader = function(b) {
        function f() {
            a.extend(!0, d, b);
            var f = a(d.html.filesInput),
                g = a(d.html.dragDropArea);
            if (context.iOSUploadSupported === !1) {
                var h = a("<input type='button' style='opacity:0'/>");
                h.attr("id", f.attr("id")).attr("class", f.attr("class")).width(f.width()).click(function(b) {
                    b.preventDefault(), e || (e = new Myspace.Dialog(a("#iOSUploadSupport"))), e.show()
                }), f.after(h).remove()
            }
            c = new Myspace.HtmlUploader(f, g, d)
        }
        var c = null,
            d = {
                MAX_FILE_COUNT: -1,
                MEDIA_TYPE: null,
                POST_PARAMS: {
                    utoken: context.hashMashter
                },
                FILES_SELECTED_HANDLER: null,
                FILE_PROCESSED_SUCCESS_HANDLER: null,
                FILE_PROCESSED_ERROR_HANDLER: null,
                UPLOAD_BEGIN_HANDLER: null,
                UPLOAD_PROGRESS_HANDLER: null,
                UPLOAD_ERROR_HANDLER: null,
                UPLOAD_CANCEL_HANDLER: null,
                UPLOAD_COMPLETE_HANDLER: null,
                html: {
                    filesInput: "",
                    dragDropArea: "",
                    dragStartHandler: null,
                    dragOverHandler: null,
                    dragEnterHandler: null,
                    dragLeaveHandler: null,
                    dropHandler: null,
                    dragEndHandler: null,
                    drag_n_drop_Supported_handler: null,
                    html_uploader_loaded: null
                }
            },
            e;
        this.CancelUpload = function(a) {
            c.CancelUpload(a)
        }, this.StopUpload = function() {
            c.StopUpload()
        }, this.StartUpload = function() {
            c.StartUpload()
        }, this.GetStats = function() {
            return c.GetStats()
        }, this.SetPostParams = function(b) {
            a.extend(!0, d.POST_PARAMS, b)
        }, this.SetOptions = function(b) {
            a.extend(!0, d, b)
        }, f()
    }
})(jQuery);
(function(a) {
    var b = {
            ArrayBuffer: typeof ArrayBuffer != "undefined",
            DataView: typeof DataView != "undefined" && ("getFloat64" in DataView.prototype || "getFloat64" in new DataView(new ArrayBuffer(1))),
            NodeBuffer: typeof Buffer != "undefined" && "readInt16LE" in Buffer.prototype
        },
        c = {
            Int8: 1,
            Int16: 2,
            Int32: 4,
            Uint8: 1,
            Uint16: 2,
            Uint32: 4,
            Float32: 4,
            Float64: 8
        },
        d = {
            Int8: "Int8",
            Int16: "Int16",
            Int32: "Int32",
            Uint8: "UInt8",
            Uint16: "UInt16",
            Uint32: "UInt32",
            Float32: "Float",
            Float64: "Double"
        },
        e = function(f, g, h, i) {
            if (!(this instanceof e)) throw new Error("jDataView constructor may not be called as a function");
            this.buffer = f;
            if (!(b.NodeBuffer && f instanceof Buffer) && !(b.ArrayBuffer && f instanceof ArrayBuffer) && typeof f != "string") throw new TypeError("jDataView buffer has an incompatible type");
            this._isArrayBuffer = b.ArrayBuffer && f instanceof ArrayBuffer, this._isDataView = b.DataView && this._isArrayBuffer, this._isNodeBuffer = b.NodeBuffer && f instanceof Buffer, this._littleEndian = i === undefined ? !1 : i;
            var j = this._isArrayBuffer ? f.byteLength : f.length;
            g === undefined && (g = 0), this.byteOffset = g, h === undefined && (h = j - g), this.byteLength = h;
            if (!this._isDataView) {
                if (typeof g != "number") throw new TypeError("jDataView byteOffset is not a number");
                if (typeof h != "number") throw new TypeError("jDataView byteLength is not a number");
                if (g < 0) throw new Error("jDataView byteOffset is negative");
                if (h < 0) throw new Error("jDataView byteLength is negative")
            }
            this._isDataView && (this._view = new DataView(f, g, h), this._start = 0), this._start = g;
            if (g + h > j) throw new Error("jDataView (byteOffset + byteLength) value is out of bounds");
            this._offset = 0;
            if (this._isDataView)
                for (var k in c) {
                    if (!c.hasOwnProperty(k)) continue;
                    (function(a, b) {
                        var d = c[a];
                        b["get" + a] = function(c, e) {
                            return e === undefined && (e = b._littleEndian), c === undefined && (c = b._offset), b._offset = c + d, b._view["get" + a](c, e)
                        }
                    })(k, this)
                } else if (this._isNodeBuffer && b.NodeBuffer)
                    for (var k in c) {
                        if (!c.hasOwnProperty(k)) continue;
                        var l;
                        k === "Int8" || k === "Uint8" ? l = "read" + d[k] : i ? l = "read" + d[k] + "LE" : l = "read" + d[k] + "BE",
                            function(a, b, d) {
                                var e = c[a];
                                b["get" + a] = function(a, c) {
                                    return c === undefined && (c = b._littleEndian), a === undefined && (a = b._offset), b._offset = a + e, b.buffer[d](b._start + a)
                                }
                            }(k, this, l)
                    } else
                        for (var k in c) {
                            if (!c.hasOwnProperty(k)) continue;
                            (function(b, d) {
                                var e = c[b];
                                d["get" + b] = function(c, f) {
                                    f === undefined && (f = d._littleEndian), c === undefined && (c = d._offset), d._offset = c + e;
                                    if (d._isArrayBuffer && (d._start + c) % e === 0 && (e === 1 || f)) return (new a[b + "Array"](d.buffer, d._start + c, 1))[0];
                                    if (typeof c != "number") throw new TypeError("jDataView byteOffset is not a number");
                                    if (c + e > d.byteLength) throw new Error("jDataView (byteOffset + size) value is out of bounds");
                                    return d["_get" + b](d._start + c, f)
                                }
                            })(k, this)
                        }
        };
    b.NodeBuffer ? e.createBuffer = function() {
        var a = new Buffer(arguments.length);
        for (var b = 0; b < arguments.length; ++b) a[b] = arguments[b];
        return a
    } : b.ArrayBuffer ? e.createBuffer = function() {
        var a = new ArrayBuffer(arguments.length),
            b = new Int8Array(a);
        for (var c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        return a
    } : e.createBuffer = function() {
        return String.fromCharCode.apply(null, arguments)
    }, e.prototype = {
        compatibility: b,
        getString: function(a, b) {
            var c;
            b === undefined && (b = this._offset);
            if (typeof b != "number") throw new TypeError("jDataView byteOffset is not a number");
            if (a < 0 || b + a > this.byteLength) throw new Error("jDataView length or (byteOffset+length) value is out of bounds");
            if (this._isNodeBuffer) c = this.buffer.toString("ascii", this._start + b, this._start + b + a);
            else {
                c = "";
                for (var d = 0; d < a; ++d) {
                    var e = this.getUint8(b + d);
                    c += String.fromCharCode(e > 127 ? 65533 : e)
                }
            }
            return this._offset = b + a, c
        },
        getChar: function(a) {
            return this.getString(1, a)
        },
        tell: function() {
            return this._offset
        },
        seek: function(a) {
            if (typeof a != "number") throw new TypeError("jDataView byteOffset is not a number");
            if (a < 0 || a > this.byteLength) throw new Error("jDataView byteOffset value is out of bounds");
            return this._offset = a
        },
        _endianness: function(a, b, c, d) {
            return a + (d ? c - b - 1 : b)
        },
        _getFloat64: function(a, b) {
            var c = this._getUint8(this._endianness(a, 0, 8, b)),
                d = this._getUint8(this._endianness(a, 1, 8, b)),
                e = this._getUint8(this._endianness(a, 2, 8, b)),
                f = this._getUint8(this._endianness(a, 3, 8, b)),
                g = this._getUint8(this._endianness(a, 4, 8, b)),
                h = this._getUint8(this._endianness(a, 5, 8, b)),
                i = this._getUint8(this._endianness(a, 6, 8, b)),
                j = this._getUint8(this._endianness(a, 7, 8, b)),
                k = 1 - 2 * (c >> 7),
                l = ((c << 1 & 255) << 3 | d >> 4) - (Math.pow(2, 10) - 1),
                m = (d & 15) * Math.pow(2, 48) + e * Math.pow(2, 40) + f * Math.pow(2, 32) + g * Math.pow(2, 24) + h * Math.pow(2, 16) + i * Math.pow(2, 8) + j;
            return l === 1024 ? m !== 0 ? NaN : k * Infinity : l === -1023 ? k * m * Math.pow(2, -1074) : k * (1 + m * Math.pow(2, -52)) * Math.pow(2, l)
        },
        _getFloat32: function(a, b) {
            var c = this._getUint8(this._endianness(a, 0, 4, b)),
                d = this._getUint8(this._endianness(a, 1, 4, b)),
                e = this._getUint8(this._endianness(a, 2, 4, b)),
                f = this._getUint8(this._endianness(a, 3, 4, b)),
                g = 1 - 2 * (c >> 7),
                h = (c << 1 & 255 | d >> 7) - 127,
                i = (d & 127) << 16 | e << 8 | f;
            return h === 128 ? i !== 0 ? NaN : g * Infinity : h === -127 ? g * i * Math.pow(2, -149) : g * (1 + i * Math.pow(2, -23)) * Math.pow(2, h)
        },
        _getInt32: function(a, b) {
            var c = this._getUint32(a, b);
            return c > Math.pow(2, 31) - 1 ? c - Math.pow(2, 32) : c
        },
        _getUint32: function(a, b) {
            var c = this._getUint8(this._endianness(a, 0, 4, b)),
                d = this._getUint8(this._endianness(a, 1, 4, b)),
                e = this._getUint8(this._endianness(a, 2, 4, b)),
                f = this._getUint8(this._endianness(a, 3, 4, b));
            return c * Math.pow(2, 24) + (d << 16) + (e << 8) + f
        },
        _getInt16: function(a, b) {
            var c = this._getUint16(a, b);
            return c > Math.pow(2, 15) - 1 ? c - Math.pow(2, 16) : c
        },
        _getUint16: function(a, b) {
            var c = this._getUint8(this._endianness(a, 0, 2, b)),
                d = this._getUint8(this._endianness(a, 1, 2, b));
            return (c << 8) + d
        },
        _getInt8: function(a) {
            var b = this._getUint8(a);
            return b > Math.pow(2, 7) - 1 ? b - Math.pow(2, 8) : b
        },
        _getUint8: function(a) {
            return this._isArrayBuffer ? (new Uint8Array(this.buffer, a, 1))[0] : this._isNodeBuffer ? this.buffer[a] : this.buffer.charCodeAt(a) & 255
        }
    };
    if (typeof jQuery != "undefined" && jQuery.fn.jquery >= "1.6.2") {
        var f = function(a) {
            var b;
            try {
                b = IEBinaryToArray_ByteStr(a)
            } catch (c) {
                var d = "Function IEBinaryToArray_ByteStr(Binary)\r\n	IEBinaryToArray_ByteStr = CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n	Dim lastIndex\r\n	lastIndex = LenB(Binary)\r\n	if lastIndex mod 2 Then\r\n		IEBinaryToArray_ByteStr_Last = AscB( MidB( Binary, lastIndex, 1 ) )\r\n	Else\r\n		IEBinaryToArray_ByteStr_Last = -1\r\n	End If\r\nEnd Function\r\n";
                window.execScript(d, "vbscript"), b = IEBinaryToArray_ByteStr(a)
            }
            var e = IEBinaryToArray_ByteStr_Last(a),
                f = "",
                g = 0,
                h = b.length % 8,
                i;
            while (g < h) i = b.charCodeAt(g++), f += String.fromCharCode(i & 255, i >> 8);
            h = b.length;
            while (g < h) f += String.fromCharCode((i = b.charCodeAt(g++), i & 255), i >> 8, (i = b.charCodeAt(g++), i & 255), i >> 8, (i = b.charCodeAt(g++), i & 255), i >> 8, (i = b.charCodeAt(g++), i & 255), i >> 8, (i = b.charCodeAt(g++), i & 255), i >> 8, (i = b.charCodeAt(g++), i & 255), i >> 8, (i = b.charCodeAt(g++), i & 255), i >> 8, (i = b.charCodeAt(g++), i & 255), i >> 8);
            return e > -1 && (f += String.fromCharCode(e)), f
        };
        jQuery.ajaxSetup({
            converters: {
                "* dataview": function(a) {
                    return new e(a)
                }
            },
            accepts: {
                dataview: "text/plain; charset=x-user-defined"
            },
            responseHandler: {
                dataview: function(a, b, c) {
                    "mozResponseArrayBuffer" in c ? a.text = c.mozResponseArrayBuffer : "responseType" in c && c.responseType === "arraybuffer" && c.response ? a.text = c.response : "responseBody" in c ? a.text = f(c.responseBody) : a.text = c.responseText
                }
            }
        }), jQuery.ajaxPrefilter("dataview", function(a, b, c) {
            jQuery.support.ajaxResponseType && (a.hasOwnProperty("xhrFields") || (a.xhrFields = {}), a.xhrFields.responseType = "arraybuffer"), a.mimeType = "text/plain; charset=x-user-defined"
        })
    }
    a.jDataView = (a.module || {}).exports = e, typeof module != "undefined" && (module.exports = e)
})(this);
var JpegAPPMarkers = function() {
    function c(a, b) {
        try {
            if (!a || !b) return null;
            var c = a.split(" ");
            if (c.length != 3) return null;
            var f = d(c[0]),
                g = d(c[1]),
                h = d(c[2]),
                i = e(f + g / 60 + h / 3600) * b;
            return isNaN(i) ? null : i
        } catch (j) {
            return null
        }
    }

    function d(a) {
        var b = a.split("/");
        if (b.length == 2) {
            var c = parseFloat(b[0]),
                d = parseFloat(b[1]);
            return c / d
        }
    }

    function e(a) {
        var b = Math.pow(10, 6),
            c = Math.round(a * b) / b;
        return c
    }

    function f(a) {
        if (!a) return null;
        switch (a.toUpperCase()) {
            case "N":
            case "E":
                return 1;
            case "S":
            case "W":
                return -1
        }
    }

    function g(a, b) {
        if (b.type === 65505) {
            var c = new jDataView(j(a, b.position + 4, b.position + 4 + b.size));
            if (c.getString(4) === "Exif") return c
        }
        return
    }

    function h(a, b, c, d, e) {
        var f = d.getUint16(c, e),
            g = [];
        for (var h = 0; h < f; h++) {
            var j = d.getUint16(c + 2, e),
                k = a[j];
            if (k) {
                var l = d.getUint16(c + 4, e),
                    m = d.getUint32(c + 6, e),
                    n = d.getUint32(c + 10, e);
                g[k] = i(d, l, m, c, n + b, e)
            }
            c += 12
        }
        return g
    }

    function i(a, b, c, d, e, f) {
        var g = c > 4 ? e : d + 10;
        switch (b) {
            case 2:
                return a.getString(c - 1, g);
            case 3:
                return a.getUint16(g, f);
            case 4:
                return a.getUint32(g, f);
            case 5:
                var h, i;
                if (c === 3) {
                    var j = [];
                    for (var k = 0; k < c; k++) h = a.getUint32(e + k * 8, f), i = a.getUint32(e + 4 + k * 8, f), j.push(h + "/" + i);
                    return j.join(" ")
                }
        }
    }

    function j(a, b, c) {
        if (a.slice) try {
            return a.slice(b, c)
        } catch (d) {}
        var e = c - b,
            f = new Uint8Array(a),
            g = new ArrayBuffer(e),
            h = new Uint8Array(g);
        for (var i = 0; i < e; i++) h[i] = f[i + b];
        return h
    }

    function k(a) {
        return a >= 65505 && a <= 65519 || a === 65534
    }

    function l(a) {
        if (window.Blob) try {
            return new Blob(a, {
                type: "image/jpeg"
            })
        } catch (b) {}
        var c = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
            d = new c;
        for (var e = 0; e < a.length; e++) d.append(a[e]);
        return d.getBlob("image/jpeg")
    }

    function m(a) {
        var b = {
                valid: !1,
                sosPosition: 0,
                appMarkers: [],
                markers: []
            },
            c, d, e, f = new jDataView(a);
        if (f.getUint16() !== 65496) return b;
        var g = Math.min(a.byteLength, 2097152);
        while (f.tell() < g) {
            c = f.getUint16();
            switch (c) {
                case 65504:
                case 65505:
                case 65506:
                case 65507:
                case 65508:
                case 65509:
                case 65510:
                case 65511:
                case 65512:
                case 65513:
                case 65514:
                case 65515:
                case 65516:
                case 65517:
                case 65518:
                case 65519:
                case 65472:
                case 65473:
                case 65474:
                case 65475:
                case 65499:
                case 65500:
                case 65501:
                case 65502:
                case 65503:
                case 65476:
                case 65477:
                case 65478:
                case 65479:
                case 65480:
                case 65481:
                case 65482:
                case 65483:
                case 65484:
                case 65485:
                case 65486:
                case 65487:
                case 65534:
                case 65488:
                case 65489:
                case 65490:
                case 65491:
                case 65492:
                case 65493:
                case 65494:
                case 65495:
                case 65520:
                case 65521:
                case 65522:
                case 65523:
                case 65524:
                case 65525:
                case 65526:
                case 65527:
                case 65528:
                case 65529:
                case 65530:
                case 65531:
                case 65532:
                case 65533:
                case 65281:
                    d = f.getUint16(), e = f.tell() - 4;
                    var h = {
                        type: c,
                        position: e,
                        size: d
                    };
                    k(c) ? b.appMarkers.push(h) : b.markers.push(h), f.seek(f.tell() + d - 2)
            }
            if (c === 65498) {
                b.valid = !0, b.sosPosition = f.tell() - 2;
                break
            }
        }
        return b
    }

    function n(a, b, c) {
        var d = [],
            e;
        c || (c = m(a));
        var f = m(b);
        if (!c.valid || c.appMarkers.length === 0 || !f.valid) return l([b]);
        var g;
        for (var h = 0; h < f.markers.length; h++)
            if (f.markers[h].type === 65504) {
                g = f.markers[h], f.markers.splice(h, 1);
                break
            } d.push(j(b, 0, 2)), g && d.push(j(b, g.position, g.position + (g.size + 2)));
        for (var h = 0; h < c.appMarkers.length; h++) e = c.appMarkers[h], d.push(j(a, e.position, e.position + (e.size + 2)));
        for (var h = 0; h < f.markers.length; h++) e = f.markers[h], d.push(j(b, e.position, e.position + (e.size + 2)));
        return d.push(j(b, f.sosPosition, b.byteLength)), l(d)
    }

    function o(d, e) {
        var i = {
            hasExif: !1,
            copyright: null,
            artist: null,
            make: null,
            model: null,
            orientation: 0,
            hasGPSLocation: !1,
            longitude: 0,
            latitude: 0
        };
        e || (e = m(d));
        if (!e.valid || e.appMarkers.length === 0) return i;
        var j;
        for (var k = 0; k < e.appMarkers.length; k++) {
            j = g(d, e.appMarkers[k]);
            if (j) break
        }
        if (!j) return i;
        var l = j.tell() + 2,
            n = j.getUint16(j.tell() + 2) === 18761;
        if (j.getUint16(j.tell(), n) != 42 || j.getUint32(j.tell(), n) != 8) return i;
        var o = h(a, l, j.tell(), j, n);
        if (o) {
            i.hasExif = !0, i.copyright = o.Copyright ? o.Copyright : null, i.make = o.Make ? o.Make : null, i.model = o.Model ? o.Model : null, i.artist = o.Artist ? o.Artist : null, i.orientation = o.Orientation ? o.Orientation : 0;
            if (o.GPSInfoIFDPointer) {
                var p = h(b, l, o.GPSInfoIFDPointer + 6, j, n),
                    q = f(p.GPSLatitudeRef),
                    r = f(p.GPSLongitudeRef);
                if (q !== null && r !== null) {
                    var s = c(p.GPSLatitude, q),
                        t = c(p.GPSLongitude, r);
                    s !== null && t !== null && (i.hasGPSLocation = !0, i.latitude = s, i.longitude = t)
                }
            }
        }
        return i
    }
    "use strict";
    var a = {
            34853: "GPSInfoIFDPointer",
            274: "Orientation",
            271: "Make",
            272: "Model",
            315: "Artist",
            33432: "Copyright"
        },
        b = {
            1: "GPSLatitudeRef",
            2: "GPSLatitude",
            3: "GPSLongitudeRef",
            4: "GPSLongitude"
        };
    return {
        getMarkers: function(a) {
            return m(a)
        },
        copyMarkers: function(a, b, c) {
            return n(a, b, c)
        },
        getExif: function(a, b) {
            return o(a, b)
        }
    }
}();
(function(a) {
    function b(a) {
        return a.name.substr(a.name.lastIndexOf(".")).toLowerCase()
    }

    function c(a, b, c) {
        var d = 1;
        a.width > b ? d = b / a.width : a.height > c && (d = c / a.height);
        var e = {};
        return e.height = Math.round(a.height * d), e.width = Math.round(a.width * d), e
    }

    function d(a) {
        var b;
        a.split(",")[0].indexOf("base64") >= 0 ? b = atob(a.split(",")[1]) : b = unescape(a.split(",")[1]);
        var c = a.split(",")[0].split(":")[1].split(";")[0],
            d = new ArrayBuffer(b.length),
            e = new Uint8Array(d);
        for (var f = 0; f < b.length; f++) e[f] = b.charCodeAt(f);
        return d
    }
    Myspace.Upload = {}, Myspace.Upload.ERROR_CODES = {
        MAX_FILE_COUNT_EXCEEDED: -100,
        MAX_FILE_SIZE_EXCEEDED: -110,
        INVALID_FILE_TYPE: -130,
        HTTP_ERROR: -200,
        MISSING_UPLOAD_URL: -210,
        IO_ERROR: -220,
        SECURITY_ERROR: -230,
        UPLOAD_LIMIT_EXCEEDED: -240,
        UPLOAD_FAILED: -250,
        SPECIFIED_FILE_ID_NOT_FOUND: -260,
        FILE_VALIDATION_FAILED: -270,
        FILE_CANCELLED: -280,
        UPLOAD_STOPPED: -290,
        NOT_LOGGED_IN: -300,
        INVALID_IMAGE: -310,
        NO_FILES: -320,
        MINIMUM_IMAGE_SIZE: -330,
        INVALID_CROP: -340,
        TIMEOUT: -350,
        MINIMUM_VIDEO_SIZE: -360,
        FILE_TOO_LARGE: -370,
        ALBUM_LIMIT: -380
    }, Myspace.Upload.MEDIA_TYPES = {
        PHOTO: "photo",
        STREAM: "stream",
        COVER: "cover",
        PROFILE: "profile",
        PLAYLIST: "playlist",
        SONG: "song",
        VIDEO: "video",
        ALBUMART: "albumart",
        SONGART: "songart",
        VIDEOTHUMBNAIL: "videothumbnail",
        TEMP: "temp"
    }, Myspace.Upload.MIN_IMAGE_DIMENSIONS = {
        PHOTO: undefined,
        STREAM: undefined,
        COVER: [800, 600],
        PROFILE: [140, 140],
        PLAYLIST: [1024, 768],
        ALBUMART: [600, 600],
        SONGART: [600, 600],
        VIDEOTHUMBNAIL: [640, 360]
    }, Myspace.Upload.MAX_FILE_SIZES = {
        PHOTO: 20971520,
        STREAM: 20971520,
        COVER: 20971520,
        PROFILE: 20971520,
        PLAYLIST: 20971520,
        SONG: 1073741824,
        VIDEO: 4294967296,
        ALBUMART: 20971520,
        SONGART: 20971520,
        VIDEOTHUMBNAIL: 20971520,
        TEMP: 20971520
    }, Myspace.Upload.FILE_TYPES = {
        ALL: "*.*",
        PHOTO: "*.jpg;*.jpeg;*.jpe;*.png;*.gif;*.bmp;*.tif;*.tiff",
        AUDIO: "*.mp3;*.wma;*.asf;*.ogg;*.mpc;*.ape;*.wav;*.mp4;*.m4a;*.mp4a;*.au;*.snd;*.aif;*.aiff;*.ram;*.ra;*.rmvb;*.aac;*.tta;*.ac3;*.gsm;*.flac;*.flc;*.wvc;*.wv;*.amr;*.flv",
        VIDEO: "*.avi;*.asf;*.dv;*.wmv;*.mov;*.qt;*.3g2;*.3gp;*.3gp2;*.3gpp;*.gsm;*.mpg;*.mpeg;*.mp1;*.mp2;*.mp4;*.m4v;*.mp4v;*.cmp;*.divx;*.xvid;*.264;*.rm;*.rmvb;*.flv;*.mkv;*.ogm;*.h264;*.m2p"
    }, Myspace.Upload.GetErrorMessage = function(a, c, d) {
        var e = this.ERROR_CODES,
            f = "",
            g = "",
            h = "",
            i = [];
        if (a) {
            f = b(a);
            var j = a.name.substring(0, a.name.lastIndexOf("."));
            g = j > 15 ? j + "..." + f : j + f, h = "File: " + g + " - "
        }
        switch (c) {
            case e.MAX_FILE_COUNT_EXCEEDED:
                h += "You have selected too many files.";
                break;
            case e.FILE_TOO_LARGE:
            case e.MAX_FILE_SIZE_EXCEEDED:
                h += "The file exceeds our maximum allowed file size limit.";
                break;
            case e.INVALID_FILE_TYPE:
                h += "The file selected is not an allowed file type.";
                break;
            case e.SPECIFIED_FILE_ID_NOT_FOUND:
                h += "The file wasn't found on your computer.";
                break;
            case e.FILE_VALIDATION_FAILED:
                h += "The file selected is either too large or is not a supported file type.";
                break;
            case e.FILE_CANCELLED:
                h += "The file upload was canceled.";
                break;
            case e.UPLOAD_STOPPED:
                h += "Upload has been stopped.";
                break;
            case e.NOT_LOGGED_IN:
                h += "In order to upload, you need to be signed in.  Please sign in and try again.";
                break;
            case e.INVALID_IMAGE:
                h += "The file selected is not a valid image.";
                break;
            case e.NO_FILES:
                h += "There are no files to upload.";
                break;
            case e.MINIMUM_IMAGE_SIZE:
                h += "The image does not meet the minimum dimension requirements.";
                break;
            case e.MINIMUM_VIDEO_SIZE:
                h += "The video does not meet the minimum dimension requirements.";
                break;
            case e.INVALID_CROP:
                h += "Saving crop of image failed.";
                break;
            case e.TIMEOUT:
                h += "The file upload timed out.  Please try again...";
                break;
            case e.ALBUM_LIMIT:
                h += "The maximum limit of images in a mix has been reached. ";
            default:
                h += "There was an error uploading.  Please try again..."
        }
        return (c == e.MAX_FILE_SIZE_EXCEEDED || c == e.FILE_TOO_LARGE) && this.IsMediaTypeAnImage(d) && (f == ".gif" ? h = h + "  Animated Gifs can not be larger than 4MB.  Non-animated Gifs can not be larger than " + this.BytesToBiggerBytes(this.GetMaxFileSize(d) + ".") : h = h + "  Files can not be larger than " + this.BytesToBiggerBytes(this.GetMaxFileSize(d)) + "."), c == e.INVALID_FILE_TYPE && (h = h + "  Files can only be of the types: " + this.GetAcceptableFileTypes(d).replace(/;/g, ", ")), c == e.MAX_FILE_COUNT_EXCEEDED && (d === this.MEDIA_TYPES.SONG ? h = "You have reached the maximum of {0} uploads. You may delete a song and try again. " : d === this.MEDIA_TYPES.VIDEO && (h = "You have reached the maximum of {0} uploads. You may delete a video and try again. ")), c == e.FILE_VALIDATION_FAILED && (h = h + "  Files can not be larger than " + this.BytesToBiggerBytes(this.GetMaxFileSize(d)) + " and can only be of the types: " + this.GetAcceptableFileTypes(d).replace(/;/g, ", ")), c == e.MINIMUM_IMAGE_SIZE && (i = this.GetMinimumDimensions(d), h = h + "  Image dimensions must be at least " + i[0] + "x" + i[1] + " pixels."), c == e.MINIMUM_VIDEO_SIZE && (i = this.GetMinimumDimensions(d), h = h + "  Video dimensions must be at least " + i[0] + "x" + i[1] + " pixels."), c == e.INVALID_CROP && (i = this.GetMinimumDimensions(d), h = h + "  Cropped size must be at least " + i[0] + "x" + i[1] + " pixels."), h
    }, Myspace.Upload.MapServerError = function(a) {
        var b = this.ERROR_CODES;
        switch (a) {
            case "TIMEOUT":
                return b.TIMEOUT;
            case "UNEXPECTED_ERROR":
                return b.UPLOAD_FAILED;
            case "NOT_LOGGED_IN":
                return b.NOT_LOGGED_IN;
            case "INVALID_IMAGE":
                return b.INVALID_IMAGE;
            case "INVALID_FILE_SIZE":
                return b.MAX_FILE_SIZE_EXCEEDED;
            case "NO_FILES":
                return b.NO_FILES;
            case "UNSUPPORTED_FILE_TYPE":
                return b.INVALID_FILE_TYPE;
            case "MINIMUM_IMAGE_SIZE":
                return b.MINIMUM_IMAGE_SIZE;
            case "MINIMUM_VIDEO_SIZE":
                return b.MINIMUM_VIDEO_SIZE;
            case "INVALID_CROP":
                return b.INVALID_CROP;
            case "FILE_TOO_LARGE":
                return b.FILE_TOO_LARGE;
            case "ALBUM_LIMIT":
                return b.FILE_TOO_LARGE;
            default:
                return b.UPLOAD_FAILED
        }
    }, Myspace.Upload.GetMaxFileSize = function(a) {
        var b = this.MEDIA_TYPES,
            c = this.MAX_FILE_SIZES;
        switch (a) {
            case b.PHOTO:
                return c.PHOTO;
            case b.STREAM:
                return c.STREAM;
            case b.COVER:
                return c.COVER;
            case b.PROFILE:
                return c.PROFILE;
            case b.PLAYLIST:
                return c.PLAYLIST;
            case b.SONG:
                return c.SONG;
            case b.VIDEO:
                return c.VIDEO;
            case b.ALBUMART:
                return c.ALBUMART;
            case b.SONGART:
                return c.SONGART;
            case b.VIDEOTHUMBNAIL:
                return c.VIDEOTHUMBNAIL;
            case b.TEMP:
                return c.TEMP
        }
    }, Myspace.Upload.GetAcceptableFileTypes = function(a) {
        var b = this.MEDIA_TYPES,
            c = this.FILE_TYPES;
        switch (a) {
            case b.PHOTO:
            case b.STREAM:
            case b.COVER:
            case b.PROFILE:
            case b.PLAYLIST:
            case b.ALBUMART:
            case b.SONGART:
            case b.VIDEOTHUMBNAIL:
                return c.PHOTO;
            case b.VIDEO:
                return c.VIDEO;
            case b.SONG:
                return c.AUDIO;
            case b.TEMP:
                return c.ALL;
            default:
                return c.ALL
        }
    }, Myspace.Upload.GetUploadEndpoint = function(a) {
        var b = config.urls.upload;
        switch (a) {
            case this.MEDIA_TYPES.VIDEOTHUMBNAIL:
                b += "video/thumbnail";
                break;
            case this.MEDIA_TYPES.SONG:
                b += "music/song";
                break;
            case this.MEDIA_TYPES.SONGART:
                b += "music/song/art";
                break;
            case this.MEDIA_TYPES.ALBUMART:
                b += "music/album/art";
                break;
            default:
                b += a
        }
        return b
    }, Myspace.Upload.GetMinimumDimensions = function(a) {
        switch (a) {
            case this.MEDIA_TYPES.PHOTO:
                return this.MIN_IMAGE_DIMENSIONS.PHOTO;
            case this.MEDIA_TYPES.STREAM:
                return this.MIN_IMAGE_DIMENSIONS.STREAM;
            case this.MEDIA_TYPES.COVER:
                return this.MIN_IMAGE_DIMENSIONS.COVER;
            case this.MEDIA_TYPES.PROFILE:
                return this.MIN_IMAGE_DIMENSIONS.PROFILE;
            case this.MEDIA_TYPES.PLAYLIST:
                return this.MIN_IMAGE_DIMENSIONS.PLAYLIST;
            case this.MEDIA_TYPES.ALBUMART:
                return this.MIN_IMAGE_DIMENSIONS.ALBUMART;
            case this.MEDIA_TYPES.SONGART:
                return this.MIN_IMAGE_DIMENSIONS.SONGART;
            case this.MEDIA_TYPES.VIDEO:
            case this.MEDIA_TYPES.VIDEOTHUMBNAIL:
                return this.MIN_IMAGE_DIMENSIONS.VIDEOTHUMBNAIL;
            default:
                return [0, 0]
        }
    }, Myspace.Upload.BytesToBiggerBytes = function(a) {
        return a > 1073741824 ? (Math.floor(a * 100 / 1073741824) / 100).toString() + "GB" : a > 1048576 ? (Math.floor(a * 100 / 1048576) / 100).toString() + "MB" : (Math.floor(a * 100 / 1024) / 100).toString() + "KB"
    }, Myspace.Upload.ValidateMinimumImageDimensions = function(a, b, c) {
        var d = this.GetMinimumDimensions(a);
        if (!d) {
            c(!0);
            return
        }
        if (window.FileReader) {
            var e = new FileReader;
            e.onload = function(a) {
                var b = new Image;
                b.src = a.target.result, b.onload = function() {
                    c(b.width >= d[0] && b.height >= d[1])
                }
            }, e.readAsDataURL(b)
        } else c(!0)
    }, Myspace.Upload.IsMediaTypeAnImage = function(a) {
        var b = this.MEDIA_TYPES;
        return a != b.VIDEO && a != b.SONG
    }, Myspace.Upload.IsAcceptedFileType = function(a, c) {
        var d = this.GetAcceptableFileTypes(a);
        if (d == "*.*") return !0;
        var e = d.split(";"),
            f = b(c);
        for (var g = 0; g < e.length; g++)
            if ("*" + f == e[g]) return !0;
        return !1
    }, Myspace.Upload.PreProcess = function(a, e, f) {
        if (context.roles === undefined || context.roles.indexOf("Photographer") === -1) {
            var g = 2048,
                h = 2097152,
                i = window.FileReader ? new FileReader : null,
                j = b(e);
            !i || j !== ".jpg" && j !== ".jpeg" ? f(e) : (i.onload = function(a) {
                try {
                    var b = new Blob([a.target.result]),
                        j = window.URL || window.webkitURL,
                        k = new Image;
                    k.src = j.createObjectURL(b), k.onload = function() {
                        try {
                            if (e.size > h || k.width >= g || k.height >= g) {
                                var a = document.createElement("canvas").getContext("2d"),
                                    l = c(k, g, g);
                                a.canvas.height = l.height, a.canvas.width = l.width, a.drawImage(k, 0, 0, k.width, k.height, 0, 0, l.width, l.height);
                                var m = a.canvas.toDataURL("image/jpeg", .98),
                                    n = JpegAPPMarkers.copyMarkers(i.result, d(m));
                                j.revokeObjectURL(b), f(n)
                            } else f(e)
                        } catch (o) {
                            f(e)
                        }
                    }
                } catch (l) {
                    f(e)
                }
            }, i.readAsArrayBuffer(e))
        } else f(e)
    }, Myspace.Upload.PosterUpload = function(b, c, d, e) {
        var f = new XMLHttpRequest,
            g = new FormData,
            h = this;
        for (var i in b) g.append(i, b[i]);
        f.open("POST", h.GetUploadEndpoint(c), !0), f.onreadystatechange = function(g) {
            if (f.readyState == 4) {
                var i = a.parseJSON(f.responseText)[0];
                if (f.status == 200) {
                    if (i.success) d && d(i);
                    else if (e) {
                        var j = h.MapServerError(i.error);
                        e({
                            errorCode: j,
                            errorMessage: h.GetErrorMessage(null, j, c)
                        })
                    }
                } else e && e({
                    errorCode: h.ERROR_CODES.UPLOAD_FAILED,
                    errorMessage: h.GetErrorMessage(null, h.ERROR_CODES.UPLOAD_FAILED, c)
                })
            }
        }, f.send(g)
    }
})(jQuery);
(function(a) {
    var b = function() {
        function p() {
            h = a(m), a("#wrap").append(h), i = new Myspace.Dialog(h, {
                closeAll: !1
            }), w()
        }

        function q() {
            if (b == "" || c == "") return;
            l = !1, h.find(".primary.save").removeAttr("disabled");
            var a = h.find(".cropContainer > .jcrop-holder").css("width");
            h.css("width", a), i.show()
        }

        function r() {
            i.hide()
        }

        function s(a) {
            var d = a || {};
            b = d.imageUrl || b, c = d.imageType || c, j = d.croppedValues || j, f = d.successCallback || f, g = d.failedCallback || g, l = !0;
            var e = {
                utoken: context.hashMashter,
                url: b,
                photoType: c,
                selected: d.selected,
                width: j.width,
                height: j.height,
                x: j.x,
                y: j.y
            };
            switch (d.type) {
                case "song":
                    e.songReleaseId = d.mediaReleaseId;
                    break;
                case "album":
                    e.albumReleaseId = d.mediaReleaseId;
                    break;
                case "video":
                    e.videoReleaseId = d.mediaReleaseId
            }
            o.PosterUpload(e, c, function(a) {
                l = !1, f(a)
            }, function(b) {
                l = !1, g(b), Myspace.Error({
                    yes: {
                        onClick: function() {
                            setTimeout(function() {
                                return s(a)
                            }, 550)
                        }
                    }
                })
            }), r()
        }

        function t(a) {
            j = {}, j.width = Math.floor(a.w), j.height = Math.floor(a.h);
            var b = 1;
            j.width > d.width ? b = d.width / j.width : j.height > d.height && (b = d.height / j.height), j.width = Math.floor(j.width * b), j.height = Math.floor(j.height * b), j.x = Math.floor(a.x * b), j.y = Math.floor(a.y * b), j.width + j.x > d.width && (j.x -= j.width + j.x - d.width), j.height + j.y > d.height && (j.y -= j.height + j.y - d.height)
        }

        function u(i, l) {
            a("#photoCropper").length || p(), i.photoType && (c = i.photoType), i.successCallback && (f = i.successCallback), i.failedCallback && (g = i.failedCallback), i.photoDimensions && (d = i.photoDimensions), i.aspectRatio && (e = i.aspectRatio);
            if (i.photoUrl) {
                var m = h.find(".cropContainer"),
                    q = m.children("img"),
                    r = o.GetMinimumDimensions(c),
                    s = v(r);
                q.length && k.destroy(), j = {
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0
                }, m.html('<img src="' + i.photoUrl + '" alt=""/>'), b = i.photoUrl, m.children("img").Jcrop({
                    onRelease: function() {
                        j = {
                            width: 0,
                            height: 0,
                            x: 0,
                            y: 0
                        }
                    },
                    onSelect: t,
                    minSize: r == "none" ? 0 : r,
                    boxWidth: 400,
                    boxHeight: 400,
                    setSelect: s,
                    aspectRatio: e
                }, function() {
                    k = this, s && this.setSelect(s), l && l()
                })
            }
            n = typeof i.onSave == "function" ? i.onSave : undefined
        }

        function v(a) {
            var b = undefined;
            if (d) {
                var c = d.width / d.height;
                if (!a || c === e) b = [0, 0, d.width, d.height];
                else {
                    var f = Math.floor(d.width / e),
                        g = d.height * e,
                        h = Math.floor((d.width - g) / 2),
                        i = Math.floor((d.height - f) / 2);
                    c >= 1 ? e > 1 ? f <= d.height ? b = [0, i, d.width, f] : b = [h, 0, g, d.height] : (g = Math.floor(d.height / e), h = Math.floor((d.width - g) / 2), b = [h, 0, g, d.height]) : b = [0, i, d.width, f]
                }
            }
            return b
        }

        function w() {
            h.on("click", "i, button", function(b) {
                var c = b.target.className;
                c == "x_18_border" || c == "cancel" ? r() : c == "primary save" && (a(this).attr("disabled", "disabled"), n && n(j) === !1 ? (l = !0, r()) : s())
            })
        }
        var b = "",
            c = "",
            d = undefined,
            e = 1,
            f = null,
            g = null,
            h, i, j = {
                width: 0,
                height: 0,
                x: 0,
                y: 0
            },
            k, l = !1,
            m = templates["common/views/generic/photos/_photoCropper"],
            n, o = Myspace.Upload;
        return comm.listen("dialog.hiding", function(a) {
            a.attr("id") == "photoCropper" && (comm.send("photoCropper.hiding"), !l && comm.send("photoCropper.canceled"))
        }, !0), {
            show: q,
            hide: r,
            setOptions: u,
            save: s
        }
    };
    Myspace.PhotoCropper = b()
})(jQuery);
(function(a) {
    a.Jcrop = function(b, c) {
        function i(a) {
            return Math.round(a) + "px"
        }

        function j(a) {
            return d.baseClass + "-" + a
        }

        function k() {
            return a.fx.step.hasOwnProperty("backgroundColor")
        }

        function l(b) {
            var c = a(b).offset();
            return [c.left, c.top]
        }

        function m(a) {
            return [a.pageX - e[0], a.pageY - e[1]]
        }

        function n(b) {
            typeof b != "object" && (b = {}), d = a.extend(d, b), a.each(["onChange", "onSelect", "onRelease", "onDblClick"], function(a, b) {
                typeof d[b] != "function" && (d[b] = function() {})
            })
        }

        function o(a, b, c) {
            e = l(D), cb.setCursor(a === "move" ? a : a + "-resize");
            if (a === "move") return cb.activateHandlers(q(b), v, c);
            var d = _.getFixed(),
                f = r(a),
                g = _.getCorner(r(f));
            _.setPressed(_.getCorner(f)), _.setCurrent(g), cb.activateHandlers(p(a, d), v, c)
        }

        function p(a, b) {
            return function(c) {
                if (!d.aspectRatio) switch (a) {
                    case "e":
                        c[1] = b.y2;
                        break;
                    case "w":
                        c[1] = b.y2;
                        break;
                    case "n":
                        c[0] = b.x2;
                        break;
                    case "s":
                        c[0] = b.x2
                } else switch (a) {
                    case "e":
                        c[1] = b.y + 1;
                        break;
                    case "w":
                        c[1] = b.y + 1;
                        break;
                    case "n":
                        c[0] = b.x + 1;
                        break;
                    case "s":
                        c[0] = b.x + 1
                }
                _.setCurrent(c), bb.update()
            }
        }

        function q(a) {
            var b = a;
            return db.watchKeys(),
                function(a) {
                    _.moveOffset([a[0] - b[0], a[1] - b[1]]), b = a, bb.update()
                }
        }

        function r(a) {
            switch (a) {
                case "n":
                    return "sw";
                case "s":
                    return "nw";
                case "e":
                    return "nw";
                case "w":
                    return "ne";
                case "ne":
                    return "sw";
                case "nw":
                    return "se";
                case "se":
                    return "nw";
                case "sw":
                    return "ne"
            }
        }

        function s(a) {
            return function(b) {
                return d.disabled ? !1 : a === "move" && !d.allowMove ? !1 : (e = l(D), W = !0, o(a, m(b)), b.stopPropagation(), b.preventDefault(), !1)
            }
        }

        function t(a, b, c) {
            var d = a.width(),
                e = a.height();
            d > b && b > 0 && (d = b, e = b / a.width() * a.height()), e > c && c > 0 && (e = c, d = c / a.height() * a.width()), T = a.width() / d, U = a.height() / e, a.width(d).height(e)
        }

        function u(a) {
            return {
                x: a.x * T,
                y: a.y * U,
                x2: a.x2 * T,
                y2: a.y2 * U,
                w: a.w * T,
                h: a.h * U
            }
        }

        function v(a) {
            var b = _.getFixed();
            b.w > d.minSelect[0] && b.h > d.minSelect[1] ? (bb.enableHandles(), bb.done()) : bb.release(), cb.setCursor(d.allowSelect ? "crosshair" : "default")
        }

        function w(a) {
            if (d.disabled) return !1;
            if (!d.allowSelect) return !1;
            W = !0, e = l(D), bb.disableHandles(), cb.setCursor("crosshair");
            var b = m(a);
            return _.setPressed(b), bb.update(), cb.activateHandlers(x, v, a.type.substring(0, 5) === "touch"), db.watchKeys(), a.stopPropagation(), a.preventDefault(), !1
        }

        function x(a) {
            _.setCurrent(a), bb.update()
        }

        function y() {
            var b = a("<div></div>").addClass(j("tracker"));
            return g && b.css({
                opacity: 0,
                backgroundColor: "white"
            }), b
        }

        function eb(a) {
            G.removeClass().addClass(j("holder")).addClass(a)
        }

        function fb(a, b) {
            function t() {
                window.setTimeout(u, l)
            }
            var c = a[0] / T,
                e = a[1] / U,
                f = a[2] / T,
                g = a[3] / U;
            if (X) return;
            var h = _.flipCoords(c, e, f, g),
                i = _.getFixed(),
                j = [i.x, i.y, i.x2, i.y2],
                k = j,
                l = d.animationDelay,
                m = h[0] - j[0],
                n = h[1] - j[1],
                o = h[2] - j[2],
                p = h[3] - j[3],
                q = 0,
                r = d.swingSpeed;
            c = k[0], e = k[1], f = k[2], g = k[3], bb.animMode(!0);
            var s, u = function() {
                return function() {
                    q += (100 - q) / r, k[0] = Math.round(c + q / 100 * m), k[1] = Math.round(e + q / 100 * n), k[2] = Math.round(f + q / 100 * o), k[3] = Math.round(g + q / 100 * p), q >= 99.8 && (q = 100), q < 100 ? (hb(k), t()) : (bb.done(), bb.animMode(!1), typeof b == "function" && b.call(sb))
                }
            }();
            t()
        }

        function gb(a) {
            hb([a[0] / T, a[1] / U, a[2] / T, a[3] / U]), d.onSelect.call(sb, u(_.getFixed())), bb.enableHandles()
        }

        function hb(a) {
            _.setPressed([a[0], a[1]]), _.setCurrent([a[2], a[3]]), bb.update()
        }

        function ib() {
            return u(_.getFixed())
        }

        function jb() {
            return _.getFixed()
        }

        function kb(a) {
            n(a), rb()
        }

        function lb() {
            d.disabled = !0, bb.disableHandles(), bb.setCursor("default"), cb.setCursor("default")
        }

        function mb() {
            d.disabled = !1, rb()
        }

        function nb() {
            bb.done(), cb.activateHandlers(null, null)
        }

        function ob() {
            G.remove(), A.show(), A.css("visibility", "visible"), a(b).removeData("Jcrop")
        }

        function pb(a, b) {
            bb.release(), lb();
            var c = new Image;
            c.onload = function() {
                var e = c.width,
                    f = c.height,
                    g = d.boxWidth,
                    h = d.boxHeight;
                D.width(e).height(f), D.attr("src", a), H.attr("src", a), t(D, g, h), E = D.width(), F = D.height(), H.width(E).height(F), M.width(E + L * 2).height(F + L * 2), G.width(E).height(F), ab.resize(E, F), mb(), typeof b == "function" && b.call(sb)
            }, c.src = a
        }

        function qb(a, b, c) {
            var e = b || d.bgColor;
            d.bgFade && k() && d.fadeTime && !c ? a.animate({
                backgroundColor: e
            }, {
                queue: !1,
                duration: d.fadeTime
            }) : a.css("backgroundColor", e)
        }

        function rb(a) {
            d.allowResize ? a ? bb.enableOnly() : bb.enableHandles() : bb.disableHandles(), cb.setCursor(d.allowSelect ? "crosshair" : "default"), bb.setCursor(d.allowMove ? "move" : "default"), d.hasOwnProperty("trueSize") && (T = d.trueSize[0] / E, U = d.trueSize[1] / F), d.hasOwnProperty("setSelect") && (gb(d.setSelect), bb.done(), delete d.setSelect), ab.refresh(), d.bgColor != N && (qb(d.shade ? ab.getShades() : G, d.shade ? d.shadeColor || d.bgColor : d.bgColor), N = d.bgColor), O != d.bgOpacity && (O = d.bgOpacity, d.shade ? ab.refresh() : bb.setBgOpacity(O)), P = d.maxSize[0] || 0, Q = d.maxSize[1] || 0, R = d.minSize[0] || 0, S = d.minSize[1] || 0, d.hasOwnProperty("outerImage") && (D.attr("src", d.outerImage), delete d.outerImage), bb.refresh()
        }
        var d = a.extend({}, a.Jcrop.defaults),
            e, f = navigator.userAgent.toLowerCase(),
            g = /msie/.test(f),
            h = /msie [1-6]\./.test(f);
        typeof b != "object" && (b = a(b)[0]), typeof c != "object" && (c = {}), n(c);
        var z = {
                border: "none",
                visibility: "visible",
                margin: 0,
                padding: 0,
                position: "absolute",
                top: 0,
                left: 0
            },
            A = a(b),
            B = !0;
        if (b.tagName == "IMG") {
            if (A[0].width != 0 && A[0].height != 0) A.width(A[0].width), A.height(A[0].height);
            else {
                var C = new Image;
                C.src = A[0].src, A.width(C.width), A.height(C.height)
            }
            var D = A.clone().removeAttr("id").css(z).show();
            D.width(A.width()), D.height(A.height()), A.after(D).hide()
        } else D = A.css(z).show(), B = !1, d.shade === null && (d.shade = !0);
        t(D, d.boxWidth, d.boxHeight);
        var E = D.width(),
            F = D.height(),
            G = a("<div />").width(E).height(F).addClass(j("holder")).css({
                position: "relative",
                backgroundColor: d.bgColor
            }).insertAfter(A).append(D);
        d.addClass && G.addClass(d.addClass);
        var H = a("<div />"),
            I = a("<div />").width("100%").height("100%").css({
                zIndex: 310,
                position: "absolute",
                overflow: "hidden"
            }),
            J = a("<div />").width("100%").height("100%").css("zIndex", 320),
            K = a("<div />").css({
                position: "absolute",
                zIndex: 600
            }).dblclick(function() {
                var a = _.getFixed();
                d.onDblClick.call(sb, a)
            }).insertBefore(D).append(I, J);
        B && (H = a("<img />").attr("src", D.attr("src")).css(z).width(E).height(F), I.append(H)), h && K.css({
            overflowY: "hidden"
        });
        var L = d.boundary,
            M = y().width(E + L * 2).height(F + L * 2).css({
                position: "absolute",
                top: i(-L),
                left: i(-L),
                zIndex: 290
            }).mousedown(w),
            N = d.bgColor,
            O = d.bgOpacity,
            P, Q, R, S, T, U, V = !0,
            W, X, Y;
        e = l(D);
        var Z = function() {
                function a() {
                    var a = {},
                        b = ["touchstart", "touchmove", "touchend"],
                        c = document.createElement("div"),
                        d;
                    try {
                        for (d = 0; d < b.length; d++) {
                            var e = b[d];
                            e = "on" + e;
                            var f = e in c;
                            f || (c.setAttribute(e, "return;"), f = typeof c[e] == "function"), a[b[d]] = f
                        }
                        return a.touchstart && a.touchend && a.touchmove
                    } catch (g) {
                        return !1
                    }
                }

                function b() {
                    return d.touchSupport === !0 || d.touchSupport === !1 ? d.touchSupport : a()
                }
                return {
                    createDragger: function(a) {
                        return function(b) {
                            return d.disabled ? !1 : a === "move" && !d.allowMove ? !1 : (e = l(D), W = !0, o(a, m(Z.cfilter(b)), !0), b.stopPropagation(), b.preventDefault(), !1)
                        }
                    },
                    newSelection: function(a) {
                        return w(Z.cfilter(a))
                    },
                    cfilter: function(a) {
                        return a.pageX = a.originalEvent.changedTouches[0].pageX, a.pageY = a.originalEvent.changedTouches[0].pageY, a
                    },
                    isSupported: a,
                    support: b()
                }
            }(),
            _ = function() {
                function h(d) {
                    d = n(d), c = a = d[0], e = b = d[1]
                }

                function i(a) {
                    a = n(a), f = a[0] - c, g = a[1] - e, c = a[0], e = a[1]
                }

                function j() {
                    return [f, g]
                }

                function k(d) {
                    var f = d[0],
                        g = d[1];
                    0 > a + f && (f -= f + a), 0 > b + g && (g -= g + b), F < e + g && (g += F - (e + g)), E < c + f && (f += E - (c + f)), a += f, c += f, b += g, e += g
                }

                function l(a) {
                    var b = m();
                    switch (a) {
                        case "ne":
                            return [b.x2, b.y];
                        case "nw":
                            return [b.x, b.y];
                        case "se":
                            return [b.x2, b.y2];
                        case "sw":
                            return [b.x, b.y2]
                    }
                }

                function m() {
                    if (!d.aspectRatio) return p();
                    var f = d.aspectRatio,
                        g = d.minSize[0] / T,
                        h = d.maxSize[0] / T,
                        i = d.maxSize[1] / U,
                        j = c - a,
                        k = e - b,
                        l = Math.abs(j),
                        m = Math.abs(k),
                        n = l / m,
                        r, s, t, u;
                    return h === 0 && (h = E * 10), i === 0 && (i = F * 10), n < f ? (s = e, t = m * f, r = j < 0 ? a - t : t + a, r < 0 ? (r = 0, u = Math.abs((r - a) / f), s = k < 0 ? b - u : u + b) : r > E && (r = E, u = Math.abs((r - a) / f), s = k < 0 ? b - u : u + b)) : (r = c, u = l / f, s = k < 0 ? b - u : b + u, s < 0 ? (s = 0, t = Math.abs((s - b) * f), r = j < 0 ? a - t : t + a) : s > F && (s = F, t = Math.abs(s - b) * f, r = j < 0 ? a - t : t + a)), r > a ? (r - a < g ? r = a + g : r - a > h && (r = a + h), s > b ? s = b + (r - a) / f : s = b - (r - a) / f) : r < a && (a - r < g ? r = a - g : a - r > h && (r = a - h), s > b ? s = b + (a - r) / f : s = b - (a - r) / f), r < 0 ? (a -= r, r = 0) : r > E && (a -= r - E, r = E), s < 0 ? (b -= s, s = 0) : s > F && (b -= s - F, s = F), q(o(a, b, r, s))
                }

                function n(a) {
                    return a[0] < 0 && (a[0] = 0), a[1] < 0 && (a[1] = 0), a[0] > E && (a[0] = E), a[1] > F && (a[1] = F), [Math.round(a[0]), Math.round(a[1])]
                }

                function o(a, b, c, d) {
                    var e = a,
                        f = c,
                        g = b,
                        h = d;
                    return c < a && (e = c, f = a), d < b && (g = d, h = b), [e, g, f, h]
                }

                function p() {
                    var d = c - a,
                        f = e - b,
                        g;
                    return P && Math.abs(d) > P && (c = d > 0 ? a + P : a - P), Q && Math.abs(f) > Q && (e = f > 0 ? b + Q : b - Q), S / U && Math.abs(f) < S / U && (e = f > 0 ? b + S / U : b - S / U), R / T && Math.abs(d) < R / T && (c = d > 0 ? a + R / T : a - R / T), a < 0 && (c -= a, a -= a), b < 0 && (e -= b, b -= b), c < 0 && (a -= c, c -= c), e < 0 && (b -= e, e -= e), c > E && (g = c - E, a -= g, c -= g), e > F && (g = e - F, b -= g, e -= g), a > E && (g = a - F, e -= g, b -= g), b > F && (g = b - F, e -= g, b -= g), q(o(a, b, c, e))
                }

                function q(a) {
                    return {
                        x: a[0],
                        y: a[1],
                        x2: a[2],
                        y2: a[3],
                        w: a[2] - a[0],
                        h: a[3] - a[1]
                    }
                }
                var a = 0,
                    b = 0,
                    c = 0,
                    e = 0,
                    f, g;
                return {
                    flipCoords: o,
                    setPressed: h,
                    setCurrent: i,
                    getOffset: j,
                    moveOffset: k,
                    getCorner: l,
                    getFixed: m
                }
            }(),
            ab = function() {
                function f(a, b) {
                    e.left.css({
                        height: i(b)
                    }), e.right.css({
                        height: i(b)
                    })
                }

                function g() {
                    return h(_.getFixed())
                }

                function h(a) {
                    e.top.css({
                        left: i(a.x),
                        width: i(a.w),
                        height: i(a.y)
                    }), e.bottom.css({
                        top: i(a.y2),
                        left: i(a.x),
                        width: i(a.w),
                        height: i(F - a.y2)
                    }), e.right.css({
                        left: i(a.x2),
                        width: i(E - a.x2)
                    }), e.left.css({
                        width: i(a.x)
                    })
                }

                function j() {
                    return a("<div />").css({
                        position: "absolute",
                        backgroundColor: d.shadeColor || d.bgColor
                    }).appendTo(c)
                }

                function k() {
                    b || (b = !0, c.insertBefore(D), g(), bb.setBgOpacity(1, 0, 1), H.hide(), l(d.shadeColor || d.bgColor, 1), bb.isAwake() ? n(d.bgOpacity, 1) : n(1, 1))
                }

                function l(a, b) {
                    qb(p(), a, b)
                }

                function m() {
                    b && (c.remove(), H.show(), b = !1, bb.isAwake() ? bb.setBgOpacity(d.bgOpacity, 1, 1) : (bb.setBgOpacity(1, 1, 1), bb.disableHandles()), qb(G, 0, 1))
                }

                function n(a, e) {
                    b && (d.bgFade && !e ? c.animate({
                        opacity: 1 - a
                    }, {
                        queue: !1,
                        duration: d.fadeTime
                    }) : c.css({
                        opacity: 1 - a
                    }))
                }

                function o() {
                    d.shade ? k() : m(), bb.isAwake() && n(d.bgOpacity)
                }

                function p() {
                    return c.children()
                }
                var b = !1,
                    c = a("<div />").css({
                        position: "absolute",
                        zIndex: 240,
                        opacity: 0
                    }),
                    e = {
                        top: j(),
                        left: j().height(F),
                        right: j().height(F),
                        bottom: j()
                    };
                return {
                    update: g,
                    updateRaw: h,
                    getShades: p,
                    setBgColor: l,
                    enable: k,
                    disable: m,
                    resize: f,
                    refresh: o,
                    opacity: n
                }
            }(),
            bb = function() {
                function k(b) {
                    var c = a("<div />").css({
                        position: "absolute",
                        opacity: d.borderOpacity
                    }).addClass(j(b));
                    return I.append(c), c
                }

                function l(b, c) {
                    var d = a("<div />").mousedown(s(b)).css({
                        cursor: b + "-resize",
                        position: "absolute",
                        zIndex: c
                    }).addClass("ord-" + b);
                    return Z.support && d.bind("touchstart.jcrop", Z.createDragger(b)), J.append(d), d
                }

                function m(a) {
                    var b = d.handleSize,
                        e = l(a, c++).css({
                            opacity: d.handleOpacity
                        }).addClass(j("handle"));
                    return b && e.width(b).height(b), e
                }

                function n(a) {
                    return l(a, c++).addClass("jcrop-dragbar")
                }

                function o(a) {
                    var b;
                    for (b = 0; b < a.length; b++) g[a[b]] = n(a[b])
                }

                function p(a) {
                    var b, c;
                    for (c = 0; c < a.length; c++) {
                        switch (a[c]) {
                            case "n":
                                b = "hline";
                                break;
                            case "s":
                                b = "hline bottom";
                                break;
                            case "e":
                                b = "vline right";
                                break;
                            case "w":
                                b = "vline"
                        }
                        e[a[c]] = k(b)
                    }
                }

                function q(a) {
                    var b;
                    for (b = 0; b < a.length; b++) f[a[b]] = m(a[b])
                }

                function r(a, b) {
                    d.shade || H.css({
                        top: i(-b),
                        left: i(-a)
                    }), K.css({
                        top: i(b),
                        left: i(a)
                    })
                }

                function t(a, b) {
                    K.width(Math.round(a)).height(Math.round(b))
                }

                function v() {
                    var a = _.getFixed();
                    _.setPressed([a.x, a.y]), _.setCurrent([a.x2, a.y2]), w()
                }

                function w(a) {
                    if (b) return x(a)
                }

                function x(a) {
                    var c = _.getFixed();
                    t(c.w, c.h), r(c.x, c.y), d.shade && ab.updateRaw(c), b || A(), a ? d.onSelect.call(sb, u(c)) : d.onChange.call(sb, u(c))
                }

                function z(a, c, e) {
                    if (!b && !c) return;
                    d.bgFade && !e ? D.animate({
                        opacity: a
                    }, {
                        queue: !1,
                        duration: d.fadeTime
                    }) : D.css("opacity", a)
                }

                function A() {
                    K.show(), d.shade ? ab.opacity(O) : z(O, !0), b = !0
                }

                function B() {
                    F(), K.hide(), d.shade ? ab.opacity(1) : z(1), b = !1, d.onRelease.call(sb)
                }

                function C() {
                    h && J.show()
                }

                function E() {
                    h = !0;
                    if (d.allowResize) return J.show(), !0
                }

                function F() {
                    h = !1, J.hide()
                }

                function G(a) {
                    a ? (X = !0, F()) : (X = !1, E())
                }

                function L() {
                    G(!1), v()
                }
                var b, c = 370,
                    e = {},
                    f = {},
                    g = {},
                    h = !1;
                d.dragEdges && a.isArray(d.createDragbars) && o(d.createDragbars), a.isArray(d.createHandles) && q(d.createHandles), d.drawBorders && a.isArray(d.createBorders) && p(d.createBorders), a(document).bind("touchstart.jcrop-ios", function(b) {
                    a(b.currentTarget).hasClass("jcrop-tracker") && b.stopPropagation()
                });
                var M = y().mousedown(s("move")).css({
                    cursor: "move",
                    position: "absolute",
                    zIndex: 360
                });
                return Z.support && M.bind("touchstart.jcrop", Z.createDragger("move")), I.append(M), F(), {
                    updateVisible: w,
                    update: x,
                    release: B,
                    refresh: v,
                    isAwake: function() {
                        return b
                    },
                    setCursor: function(a) {
                        M.css("cursor", a)
                    },
                    enableHandles: E,
                    enableOnly: function() {
                        h = !0
                    },
                    showHandles: C,
                    disableHandles: F,
                    animMode: G,
                    setBgOpacity: z,
                    done: L
                }
            }(),
            cb = function() {
                function f(b) {
                    M.css({
                        zIndex: 450
                    }), b ? a(document).bind("touchmove.jcrop", k).bind("touchend.jcrop", l) : e && a(document).bind("mousemove.jcrop", h).bind("mouseup.jcrop", i)
                }

                function g() {
                    M.css({
                        zIndex: 290
                    }), a(document).unbind(".jcrop")
                }

                function h(a) {
                    return b(m(a)), !1
                }

                function i(a) {
                    return a.preventDefault(), a.stopPropagation(), W && (W = !1, c(m(a)), bb.isAwake() && d.onSelect.call(sb, u(_.getFixed())), g(), b = function() {}, c = function() {}), !1
                }

                function j(a, d, e) {
                    return W = !0, b = a, c = d, f(e), !1
                }

                function k(a) {
                    return b(m(Z.cfilter(a))), !1
                }

                function l(a) {
                    return i(Z.cfilter(a))
                }

                function n(a) {
                    M.css("cursor", a)
                }
                var b = function() {},
                    c = function() {},
                    e = d.trackDocument;
                return e || M.mousemove(h).mouseup(i).mouseout(i), D.before(M), {
                    activateHandlers: j,
                    setCursor: n
                }
            }(),
            db = function() {
                function e() {
                    d.keySupport && (b.show(), b.focus())
                }

                function f(a) {
                    b.hide()
                }

                function g(a, b, c) {
                    d.allowMove && (_.moveOffset([b, c]), bb.updateVisible(!0)), a.preventDefault(), a.stopPropagation()
                }

                function i(a) {
                    if (a.ctrlKey || a.metaKey) return !0;
                    Y = a.shiftKey ? !0 : !1;
                    var b = Y ? 10 : 1;
                    switch (a.keyCode) {
                        case 37:
                            g(a, -b, 0);
                            break;
                        case 39:
                            g(a, b, 0);
                            break;
                        case 38:
                            g(a, 0, -b);
                            break;
                        case 40:
                            g(a, 0, b);
                            break;
                        case 27:
                            d.allowSelect && bb.release();
                            break;
                        case 9:
                            return !0
                    }
                    return !1
                }
                var b = a('<input type="radio" />').css({
                        position: "fixed",
                        left: "-120px",
                        width: "12px"
                    }).addClass("jcrop-keymgr"),
                    c = a("<div />").css({
                        position: "absolute",
                        overflow: "hidden"
                    }).append(b);
                return d.keySupport && (b.keydown(i).blur(f), h || !d.fixedSupport ? (b.css({
                    position: "absolute",
                    left: "-20px"
                }), c.append(b).insertBefore(D)) : b.insertBefore(D)), {
                    watchKeys: e
                }
            }();
        Z.support && M.bind("touchstart.jcrop", Z.newSelection), J.hide(), rb(!0);
        var sb = {
            setImage: pb,
            animateTo: fb,
            setSelect: gb,
            setOptions: kb,
            tellSelect: ib,
            tellScaled: jb,
            setClass: eb,
            disable: lb,
            enable: mb,
            cancel: nb,
            release: bb.release,
            destroy: ob,
            focus: db.watchKeys,
            getBounds: function() {
                return [E * T, F * U]
            },
            getWidgetSize: function() {
                return [E, F]
            },
            getScaleFactor: function() {
                return [T, U]
            },
            getOptions: function() {
                return d
            },
            ui: {
                holder: G,
                selection: K
            }
        };
        return g && G.bind("selectstart", function() {
            return !1
        }), A.data("Jcrop", sb), sb
    }, a.fn.Jcrop = function(b, c) {
        var d;
        return this.each(function() {
            if (a(this).data("Jcrop")) {
                if (b === "api") return a(this).data("Jcrop");
                a(this).data("Jcrop").setOptions(b)
            } else this.tagName == "IMG" ? a.Jcrop.Loader(this, function() {
                a(this).css({
                    display: "block",
                    visibility: "hidden"
                }), d = a.Jcrop(this, b), a.isFunction(c) && c.call(d)
            }) : (a(this).css({
                display: "block",
                visibility: "hidden"
            }), d = a.Jcrop(this, b), a.isFunction(c) && c.call(d))
        }), this
    }, a.Jcrop.Loader = function(b, c, d) {
        function g() {
            f.complete ? (e.unbind(".jcloader"), a.isFunction(c) && c.call(f)) : window.setTimeout(g, 50)
        }
        var e = a(b),
            f = e[0];
        e.bind("load.jcloader", g).bind("error.jcloader", function(b) {
            e.unbind(".jcloader"), a.isFunction(d) && d.call(f)
        }), f.complete && a.isFunction(c) && (e.unbind(".jcloader"), c.call(f))
    }, a.Jcrop.defaults = {
        allowSelect: !0,
        allowMove: !0,
        allowResize: !0,
        trackDocument: !0,
        baseClass: "jcrop",
        addClass: null,
        bgColor: "black",
        bgOpacity: .6,
        bgFade: !1,
        borderOpacity: .4,
        handleOpacity: .5,
        handleSize: null,
        aspectRatio: 0,
        keySupport: !0,
        createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"],
        createDragbars: ["n", "s", "e", "w"],
        createBorders: ["n", "s", "e", "w"],
        drawBorders: !0,
        dragEdges: !0,
        fixedSupport: !0,
        touchSupport: null,
        shade: null,
        boxWidth: 0,
        boxHeight: 0,
        boundary: 2,
        fadeTime: 400,
        animationDelay: 20,
        swingSpeed: 3,
        minSelect: [0, 0],
        maxSize: [0, 0],
        minSize: [0, 0],
        onChange: function() {},
        onSelect: function() {},
        onDblClick: function() {},
        onRelease: function() {}
    }
})(jQuery);
(function(a) {
    Myspace.PhotoCarousel = function(b, c) {
        function A() {
            J();
            var b = a(".left_half .left_arrow"),
                c = a(".right_half .right_arrow");
            d.on("mousemove", function(a) {
                a.clientX < d.width() * .5 ? (b.addClass("hover"), c.removeClass("hover")) : (c.addClass("hover"), b.removeClass("hover"))
            }), d.on("mouseout", function(a) {
                c.removeClass("hover"), b.removeClass("hover")
            }), d.on("click", function(a) {
                a.clientX < d.width() * .5 ? C() : B();
                if (!z.lightboxMode || x == 0) return !1
            }), i.on("click", function(b) {
                var c = a(b.target),
                    d = c.data("action");
                if (b.target.tagName === "A") {
                    switch (d) {
                        case "reportAbuse":
                            comm.send("reportAbuse", {
                                type: "photo",
                                entityKey: c.data("entityKey"),
                                userEntityKey: c.data("userEntityKey")
                            })
                    }
                    return !1
                }
            }), m.find("i").on("mouseenter", function() {
                n.show()
            }).on("mouseleave", function() {
                n.hide()
            }), z.items.length > 0 && (u = z.items[z.currentIndex]), K(z.speed), o.bind("resize", J), z.lightboxMode || (a("body").bind("keydown", N), P())
        }

        function B() {
            v || D(z.currentIndex + 1)
        }

        function C() {
            v || D(z.currentIndex - 1)
        }

        function D(a, b, c) {
            if (Q()) {
                if (z.items.length === 1) {
                    z.carouselSuccessCB();
                    return
                }
                z.items.length > 1 && (E(a, b == 1, c), z.carouselSuccessCB())
            } else {
                if (z.items.length > 0 && u.albumIdTotalCount === 1) {
                    z.carouselSuccessCB();
                    return
                }
                z.items[a] != null ? (E(a, b == 1, c), z.carouselSuccessCB()) : F(function(d) {
                    if (d.items.length > 0) {
                        var e = -1;
                        a === z.currentIndex ? e = d.currentIndex : a >= z.currentIndex ? e = d.currentIndex + 1 : e = d.currentIndex - 1, z.items = d.items, E(e, b == 1, c), P()
                    }
                    z.carouselSuccessCB()
                }, function() {
                    Myspace.Confirm({
                        text: "There was a problem retrieving the photo!  Please try again.",
                        no: {
                            text: "Ok",
                            onClick: function() {}
                        },
                        yes: !1
                    }), z.carouselFailCB()
                })
            }
        }

        function E(b, c, g) {
            f.addClass("loading"), s && s.reset(), b > z.items.length - 1 ? z.currentIndex = 0 : b < 0 ? z.currentIndex = z.items.length - 1 : z.currentIndex = b, u = z.items[z.currentIndex];
            var h = new Image;
            h.onload = function() {
                f.removeClass("loading")
            }, h.src = u.urls[0].url;
            if (z.animation === "default") {
                var i = f.find("img");
                i.length > 0 ? i.attr("src", u.urls[0].url) : f.append('<img src="' + u.urls[0].url + '"/>')
            } else if (z.animation === "fade") {
                var m = a('<img src="' + u.urls[0].url + '" />'),
                    n = a('<div class="cell"></div>').append(m),
                    o = a('<div class="tbl"></div>').append(n),
                    p = a('<div class="container"></div>').css({
                        display: "none"
                    }).append(o);
                e.append(p), f = p.find(".cell"), setTimeout(function() {
                    p.fadeIn(3e3), p.prev().fadeOut(3e3, function() {
                        p.prev().remove()
                    })
                }, 1)
            }
            Q() || (j.data("entityKey", u.entityKey).data("userEntityKey", u.relatedEntityKey), k.html('Photo from <a href="' + u.mixDetailUrl + '">' + u.mixTitle + "</a>"), l.html("(" + (u.albumIdIndex + 1) + " of " + u.albumIdTotalCount + ")")), !c && !Q() && (L(u), M(u.photoDetailUrl), w.push(u.photoDetailUrl), x++, comm.send("location.href", {
                url: u.photoDetailUrl,
                currentIndex: z.currentIndex,
                loadState: function(a, b, c) {
                    var e = w[x + 1],
                        f = w[x - 1];
                    if (e === null || f === a) x--, comm.send("backButton.pressed");
                    else if (f === null || e === a) x++, comm.send("forwardButton.pressed");
                    return z.lightboxMode && d.parent().hasClass("open") || context.pfc === "PhotoDetail" ? (D(b.currentIndex, !0), !0) : !1
                }
            })), context.profileId === u.profileId ? j.hide() : j.show(), R(u), J(), S(), g && g()
        }

        function F(b, c) {
            var d = {
                playlistId: z.playlistId,
                sortOrder: z.sortOrder
            };
            return v = !0, f.addClass("loading"), u ? (d.startingValue = u.imageId, d.startingImageKey = u.entityKey) : (d.startingValue = z.mediaId, d.startingImageKey = z.mediaEntityKey), a.ajax({
                type: "POST",
                data: d,
                url: z.fetchMoreItemsUrl
            }).done(function(a) {
                b && b(a)
            }).error(function() {
                c && c()
            }).always(function() {
                v = !1
            })
        }

        function G(b) {
            z = a.extend({}, y, b), u = null, x = -1, w = [], K(z.speed), z.lightboxMode && a("body").bind("keydown", N), Q() && P()
        }

        function H() {
            f.find("img").css({
                "max-width": d.width(),
                "max-height": d.height()
            })
        }

        function I() {
            r.height(o.height() - t), z.isSlideShow ? (d.width(o.width()), q.hide()) : (d.width(o.width() - q.outerWidth()), q.show())
        }

        function J() {
            I(), H()
        }

        function K(a) {
            a > 0 ? (z.speed = a, s = new Myspace.ResetTimer(function() {
                B()
            }, z.speed), s.reset()) : s && (z.speed = a, s.stop(), s = null)
        }

        function L(a) {
            comm.send("photo.view", {
                lid: context.loginId,
                iid: a.imageId,
                ek: a.entityKey,
                pid: context.beaconData.pid,
                entityKey: a.entityKey
            })
        }

        function M(a) {
            comm.send("overlay.trackers"), _gaq.push(["_trackPageview", a])
        }

        function N(a) {
            var b = a.target,
                c = a.which,
                d = b.tagName;
            if (d === "INPUT" || d === "TEXTAREA" || b.contentEditable === "true") return;
            return c == 37 ? (C(), !1) : c == 39 ? (B(), !1) : !1
        }

        function O() {
            a("body").unbind("keydown", N)
        }

        function P() {
            var a = !1;
            Q() ? a = z.items.length === 1 : a = z.items.length > 0 && z.items[0].albumIdTotalCount === 1, a && (g.hide(), h.hide())
        }

        function Q() {
            return z.playlistId === 0 && z.mediaEntityKey === "" && z.mediaId === 0
        }

        function R(b) {
            if (!z.isSlideShow && !Q()) {
                var c = {
                    entityKey: b.entityKey,
                    mixDetailUrl: b.mixDetailUrl,
                    mixTitle: b.mixTitle,
                    ownerUserName: b.ownerUserName,
                    ownerFullName: b.ownerFullName,
                    captionWithLinks: b.captionWithLinks,
                    caption: b.caption
                };
                a.ajax({
                    url: "/ajax/photos/rightRail/render",
                    type: "POST",
                    data: c
                }).done(function(a) {
                    q.replaceWith(a.html), q = d.next(), q.append(a.pixelHTML), new Myspace.RR(q.find(".rr")[0]), comm.send("page.changed", q);
                    if (typeof a.ads.adCalls != "undefined")
                        for (var b = 0; b < a.ads.adCalls.length; b++) comm.send("ads.loadAd", a.ads.adCalls[b])
                })
            }
            z.onScroll()
        }

        function S() {
            var a = z.items[z.currentIndex + 1] || z.items[0],
                b = z.items[z.currentIndex - 1] || z.items[z.items.length - 1];
            (new Image).src = a.urls[0].url, (new Image).src = b.urls[0].url
        }
        var d = a(b),
            e = d.find(".photoItems"),
            f = e.find(".cell"),
            g = d.children("i.prevItem"),
            h = d.children("i.nextItem"),
            i = d.find(".details"),
            j = i.find(".left > a"),
            k = i.find(".photoFrom"),
            l = i.find(".position"),
            m = d.find(".exit"),
            n = m.find(".tip"),
            o = a(window),
            p = a("#footer"),
            q = d.next(),
            r = d.parent(),
            s = null,
            t = a("#global-nav", p).outerHeight(),
            u = null,
            v = !1,
            w = [],
            x = -1,
            y = {
                speed: 0,
                onScroll: function(a) {},
                items: [],
                currentIndex: 0,
                mediaId: 0,
                mediaEntityKey: "",
                playlistId: 0,
                fetchMoreItemsUrl: null,
                animation: "default",
                lightboxMode: !1,
                isSlideShow: !1,
                focusCommentTab: !1,
                carouselSuccessCB: function() {},
                carouselFailCB: function() {},
                sortOrder: "NewestFirst"
            },
            z = a.extend({}, y, c);
        return A(), comm.listen("spaceway.page.complete", function() {
            o.unbind("resize", J).bind("resize", J)
        }, !0), {
            moveTo: D,
            setOptions: G,
            setSpeed: K,
            unbindKeyHandler: O
        }
    }
})(jQuery);
(function(a) {
    var b = function() {
        function p(f) {
            m = 1, o = location.pathname, d.find(".photoItems img").remove(), comm.send("location.href", {
                replaceState: !0,
                loadState: function() {
                    return h.hide(), !0
                },
                url: o
            }), i.moveTo(f, null, function() {
                j && (b.hide(), e.fadeIn(1e3), setTimeout(u, 3e3)), Myspace.VideoPlayer.alwaysHidden = !0, Myspace.VideoPlayer.hide(), g.addClass("media"), h.show(), a("body").bind("keydown", s)
            }), comm.send("dialog.showing", c)
        }

        function q() {
            a("body").unbind("keydown", s), i.unbindKeyHandler(), g.removeClass("media"), h.hide(), Myspace.VideoPlayer.alwaysHidden = !1, Myspace.VideoPlayer.handleShow(), comm.send("location.href", {
                go: -m,
                replaceState: !0,
                url: o
            }), j && (r(0), comm.send("queue.clear"), n || comm.send("player.shuffle", !1), b.show(), j = !1)
        }

        function r(a) {
            k = a == 0, i.setSpeed(a)
        }

        function s(a) {
            var b = a.target,
                c = a.which,
                d = b.tagName;
            if (d === "INPUT" || d === "TEXTAREA" || b.contentEditable === "true") return;
            (c == 37 || c == 39) && m++, j && !k && (c == 37 || c == 39) ? v() : c == 32 && j && k && w()
        }

        function t() {
            j && k && e.fadeIn(1e3, function() {})
        }

        function u() {
            e.fadeOut(1e3, function() {})
        }

        function v() {
            r(0)
        }

        function w() {
            r(l), u()
        }

        function x(a) {
            a.lightboxMode = !0, a.animation = "fade", a.speed = l, a.isSlideShow = !0, i.setOptions(a), k = !1, j = !0, n = a.wasPlayerShuffleOnBeforeSlideshow, p(a.startIndex || 0)
        }

        function y(a) {
            a.lightboxMode = !0, a.animation = "default", a.speed = 0, i.setOptions(a), j = !1, p(a.startIndex || 0)
        }

        function z() {
            c.on("click", ".cell,i,img", function(a) {
                return m++, j && !k && v(), !1
            }), f.on("click", function(a) {
                return h.hide(), !1
            }), c.on("mouseenter", t).on("mouseleave", u)
        }
        var b = a("#lightboxCover").children(),
            c = a("#photoCarouselLightbox"),
            d = c.find(".photoCarousel"),
            e = d.find(".slideShowLegend"),
            f = d.find(".exit"),
            g = a("#lightboxCover"),
            h = new Myspace.Dialog(c, {
                centerDialog: !1
            }),
            i = new Myspace.PhotoCarousel(d, {
                lightboxMode: !0
            }),
            j = !1,
            k = !1,
            l = 5e3,
            m = 0,
            n = !1,
            o = "";
        return comm.listen("dialog.hiding", function(a) {
            c[0] === a[0] && q()
        }, !0), comm.listen("photoCarousel.hide", function() {
            g.hasClass("media") && h.hide()
        }), comm.listen("backButton.pressed", function() {
            m--
        }, !0), comm.listen("forwardButton.pressed", function() {
            m++
        }, !0), z(), {
            startSlideShow: x,
            startCarousel: y
        }
    };
    Myspace.PhotoCarouselLightbox = b()
})(jQuery);
(function(a) {
    a("body").delegate("i.gifPlayBtn", "click", function(b) {
        b.preventDefault(), b.stopPropagation();
        var c = a(this),
            d = c.data("loadingParent"),
            e = c.closest("li"),
            f = c.closest("a"),
            g = a(".mediaBackground", f),
            h = g.length ? g : f,
            i = h.css("background-image"),
            j = "photoObject loading",
            k = f && a("img", f);
        if (!k) return !1;
        e.hasClass("streamItem") ? (e = f, j = " loading") : d && (e = c.closest("." + d));
        var l = k.attr("src"),
            m = l.lastIndexOf("/"),
            n, o, p = l.substr(0, m),
            q = k.attr("data-actual-size");
        return q || (q = l.substr(m + 1), k.attr("data-actual-size", q)), n = p + "/full.gif", o = p + "/" + q, c.hasClass("playing") ? (k.attr("src", o), i.indexOf("url") > -1 && (h.css("background-image", "url(" + o + ")"), k.css("opacity", "0")), c.removeClass("playing"), c.hasClass(".bindPause") || c.addClass(".bindPause")) : (e.addClass(j), k.attr("src", n).load(function() {
            e.removeClass(j), c.hasClass(".bindPlay") || c.addClass(".bindPlay")
        }), i.indexOf("url") > -1 && (h.css("background-image", "url(" + n + ")"), k.css("opacity", "1")), c.addClass("playing")), !1
    })
})(jQuery);
(function(a) {
    var b = {
        connectClassicMyspace: function(b, c) {
            b ? a.ajax({
                url: "/ajax/thirdpartyauth/myspaceoriginal/connect",
                type: "POST",
                success: function(a) {
                    a.connectionCreated ? c(!0, {
                        connected: !0,
                        isAuthenticated: !0
                    }) : Myspace.ThirdPartyHelper.connectClassicMyspace(!1, c)
                },
                error: function(a) {
                    c(!1, {
                        error: !0,
                        connected: !1,
                        additionalData: {
                            msg: "Access to classic Myspace rejected."
                        }
                    })
                }
            }) : Myspace.ThirdPartyHelper.showClassicMyspaceLogin(!0, c)
        },
        classicMyspaceDialog: null,
        $container: null,
        callbackSent: !1,
        self: this,
        callback: null,
        provider: null,
        showClassicMyspaceLogin: function(b, c) {
            var d, e, f = this;
            f.callbackSent = !1, this.classicMyspaceDialog ? (Myspace.ThirdPartyHelper.$container.find("input").val(""), Myspace.ThirdPartyHelper.$container.children(".tipHolder").tip("hide")) : (this.$container = a("<div class='lightbox' id='myspaceoriginal'><p class='tipHolder'></p></div>"), d = a("<form action='#' method='POST' name='myspaceoriginal_login' id='myspaceoriginal_login'>").append(a("<p><label for='myspaceoriginal_email'>Email</label><input type='email' id='myspaceoriginal_email' name='email' required='required' /></p>")).append(a("<p><label for='myspaceoriginal_password'>Password</label><input type='password' id='myspaceoriginal_password' name='password' required='required' /></p>")).append(a('<p><a href="https://myspace.zendesk.com/hc/en-us/requests/new?ticket_form_id=27660" target="_blank">Forgot password?</a></p>')).appendTo(this.$container), e = a("<footer><span class='postingIcon'></span><button type='button' class='noStyle cancel'>Back</button><button type='submit' form='myspaceoriginal_login' class='primary button'>Sign In with Classic Myspace</button></footer>"), this.$container.append(e), e.on("click", "button.cancel", function() {
                return f.callbackSent = !0, f.classicMyspaceDialog.hide(), c(!1, {
                    cancel: !0,
                    connected: !1,
                    additionalData: {
                        msg: "Access to classic Myspace rejected."
                    }
                })
            }), d.submit(function() {
                return a.ajax({
                    url: "/ajax/thirdpartyauth/connecttoken",
                    type: "POST",
                    success: function(e) {
                        a.ajax({
                            url: "/ajax/thirdpartyauth/myspaceoriginal/login" + (b ? "?createConnection=true&mstoken=" + e.token : ""),
                            type: "POST",
                            data: d.serialize(),
                            success: function(a) {
                                a.isAuthenticated && a.connectionCreated ? (f.callbackSent = !0, f.classicMyspaceDialog.hide(), c(!0, {
                                    connected: !0,
                                    isAuthenticated: !0
                                })) : Myspace.Error({
                                    text: a.msg || "Oops, something went wrong and we were unable to get your connections. Please try again later.",
                                    yes: {
                                        text: "OK",
                                        onClick: function() {
                                            f.callbackSent = !0, c(!1, {
                                                additionalData: {
                                                    msg: a.msg
                                                }
                                            })
                                        }
                                    },
                                    no: !1,
                                    closeAll: !1
                                })
                            },
                            error: function(a) {
                                var b;
                                try {
                                    b = JSON.parse(a.responseText), Myspace.ThirdPartyHelper.$container.children(".tipHolder").tip({
                                        title: b.message,
                                        classes: "error myspaceoriginal_tip",
                                        placement: "inside top"
                                    }).tip("show")
                                } catch (c) {}
                            },
                            complete: function() {
                                Myspace.ThirdPartyHelper.$container.removeClass("processing").find("button").removeAttr("disabled")
                            }
                        })
                    }
                }), Myspace.ThirdPartyHelper.$container.addClass("processing").find("button").attr("disabled", "disabled"), !1
            }), a(document.body).append(Myspace.ThirdPartyHelper.$container), this.classicMyspaceDialog = new Myspace.Dialog(Myspace.ThirdPartyHelper.$container, {
                onHide: function() {
                    f.callbackSent || c(!1, {
                        additionalData: {}
                    })
                }
            })), this.classicMyspaceDialog.show()
        },
        connectThirdParty: function(b, c, d) {
            if (b == "myspaceoriginal") return Myspace.ThirdPartyHelper.connectClassicMyspace(c, d), !1;
            var e = this;
            e.callbackSent = !1, e.callback = d, e.provider = b, a.ajax({
                url: "/ajax/thirdpartyauth/connecttoken",
                type: "POST",
                success: function(a) {
                    if (a.token) {
                        var c = "/thirdpartyauth/" + b + "/generic?mstoken=" + a.token,
                            f = e.popupCenter(c, 800, 800, "Third Party Authentication");
                        if (!f) {
                            d(!1, {
                                canceled: !0,
                                additionalData: {
                                    msg: '<h4 class="confirmDisconnect">Your browser blocked the authorization popup!</h4><p class="confirmDisconnect">Please make sure that your browser allows popups and try again.</p>'
                                }
                            }), e.callbackSent = !0;
                            return
                        }
                        var g = setInterval(function() {
                            if (!f || f.closed) clearInterval(g), window.setTimeout(function() {
                                e.callbackSent || (d(!1, {
                                    canceled: !0,
                                    additionalData: {
                                        msg: "Access to the 3rd party rejected! Please try again."
                                    }
                                }), e.callbackSent = !0)
                            }, 400)
                        }, 1e3)
                    }
                }
            })
        },
        connectThirdPartyPage: function(a, b, c) {
            var d = this,
                e = "/thirdpartyauth/connecttoken/" + a,
                f = d.popupCenter(e, 800, 800, "Third Party Authentication");
            d.callbackSent = !1, d.callback = c;
            if (!f) {
                c(!1, {
                    canceled: !0,
                    additionalData: {
                        msg: '<h4 class="confirmDisconnect">Your browser blocked the authorization popup!</h4><p class="confirmDisconnect">Please make sure that your browser allows popups and try again.</p>'
                    }
                }), d.callbackSent = !0;
                return
            }
            var g = setInterval(function() {
                if (!f || f.closed) clearInterval(g), d.callbackSent || (c(!1, {
                    canceled: !0,
                    additionalData: {}
                }), d.callbackSent = !0)
            }, 1e3)
        },
        popupCenter: function(a, b, c, d) {
            var e = screen.width / 2 - b / 2,
                f = screen.height / 2 - c / 2;
            return window.open(a, d, "menubar=no,toolbar=no,status=no,width=" + b + ",height=" + c + ",toolbar=no,left=" + e + ",top=" + f)
        },
        init: function() {
            var a = this;
            comm.listen("thirdParty.generic", function(b) {
                a.callbackSent = !0, a.callback(!0, b), comm.send("thirdparty.connected", b)
            }, !0), comm.listen("thirdParty.genericRejected", function(b) {
                a.callbackSent = !0, a.callback(!1, b)
            }, !0)
        }
    };
    Myspace.ThirdPartyHelper = b, Myspace.ThirdPartyHelper.init()
})(jQuery);
(function(a) {
    function k(b) {
        function K() {
            d.addClass("webcamSupported"), a(".photoUploadDropdown").on("click", "button", function() {
                var b = a(this);
                "webcam" === b.data("action") && Myspace.Webcam.takePhoto(function(a, b) {
                    a ? Myspace.errorDialog("Sorry, we were unable to connect to your webcam") : (J = !0, Y(b, 0))
                })
            })
        }

        function M(b) {
            b && !b.loadFailed && b.url && (N(), d.addClass("attaching link"), e.append(a("<i></i>").addClass("x_14").click(function() {
                e.html(""), d.removeClass("link"), x = null
            })), x = b)
        }

        function N() {
            d.hasClass("share") && (d.find(".superpost_shareContainer").html(""), d.removeClass("share"), u.val(""), G.removeClass("post_photo user_16 trending_16").addClass("post_song"), H = null), d.hasClass("photo") && (t.remove(), d.removeClass("photo")), d.hasClass("video") && (d.removeClass("video").find(".attachments > .video").css("visibility", "visible"), v.remove())
        }

        function O(a) {
            !d.hasClass("link") && o && q.scraperInstance && q.scraperInstance.start()
        }

        function P(a) {
            !d.hasClass("link") && o && q.val().length < 4 && q.scraperInstance && q.scraperInstance.start()
        }

        function Q() {
            function b(b, c) {
                var f = {
                        fileName: b.name,
                        fileSizeInBytes: b.size,
                        userFriendlyFileSize: Myspace.Upload.BytesToBiggerBytes(b.size),
                        index: c
                    },
                    i = "superpost_selectedImage" + (h ? " dotted top" : ""),
                    j = "<div class='" + i + "'>" + "<img src='" + config.urls.emptyVideoImage + "'/>" + "<progress value='0' max='" + f.fileSizeInBytes + "'>0</progress>" + "<div class='legend'><span class='completed'>0</span> of " + f.userFriendlyFileSize + "</div>" + "<i class='close x_14'></i>" + "</div>",
                    k = function(a) {
                        y.SetPostParams({
                            uploadId: a.videoReleaseUploadId
                        }), g.attr("disabled", "disabled"), setTimeout(function() {
                            y.StartUpload()
                        }, 100)
                    },
                    l = function() {
                        o(f.index), n(), g.removeAttr("disabled")
                    };
                d.addClass("video").removeClass("error link"), d.find(".attachments > .video").css("visibility", "hidden"), e.html(""), x = null, v && v.remove(), v = a(j), d.find("aside").prepend(v), v.find(".close").on("click", l), q.focus(), B = !0, a.ajax({
                    type: "POST",
                    dataType: "json",
                    data: {
                        index: c
                    },
                    url: "/ajax/manage/video/startUpload",
                    success: k
                })
            }

            function c(a, b, c) {
                v.find(".completed").text(Myspace.Upload.BytesToBiggerBytes(c)), v.find("progress").attr("value", c)
            }

            function f(a, b, c) {
                n(c.errorMessage), g.removeAttr("disabled")
            }

            function i(a, b, c) {}

            function m(a, b, c) {
                g.removeAttr("disabled"), v.find(".legend").hide().html("Upload complete.").fadeIn(), d.data({
                    "video-upload-response": c
                })
            }

            function n(a) {
                v ? v.fadeOut(function() {
                    d.removeClass("video").find(".attachments > .video").css("visibility", "visible"), a && d.addClass("error").find(".error").text(a), v.remove()
                }) : a && d.addClass("error").find(".error").text(a)
            }

            function o(b) {
                y.GetStats().in_progress ? y.CancelUpload(b) : a.save({
                    url: "/ajax/manage/video/delete",
                    method: "POST",
                    type: "POST",
                    data: {
                        videoReleaseId: d.data("video-upload-response").videoReleaseId
                    }
                })
            }
            if (v) return;
            y = new Myspace.Uploader({
                MAX_FILE_COUNT: 1,
                MEDIA_TYPE: Myspace.Upload.MEDIA_TYPES.VIDEO,
                POST_PARAMS: {
                    uploadId: 0
                },
                FILE_PROCESSED_SUCCESS_HANDLER: b,
                FILE_PROCESSED_ERROR_HANDLER: f,
                UPLOAD_PROGRESS_HANDLER: c,
                UPLOAD_ERROR_HANDLER: f,
                UPLOAD_CANCEL_HANDLER: i,
                UPLOAD_COMPLETE_HANDLER: m,
                html: {
                    filesInput: d.find("#superpostVideoFile")
                }
            }), z = function(b, c, e) {
                if (d.data("video-upload-response")) {
                    var f = new Date,
                        g = d.data("video-upload-response").file,
                        h = {
                            origin: "quickPost",
                            description: b,
                            title: g.substr(0, g.lastIndexOf(".")) || g,
                            releaseYear: f.getFullYear(),
                            releaseMonth: f.getMonth() + 1,
                            releaseDay: f.getDate(),
                            visibilityCode: 1,
                            videoReleaseId: d.data("video-upload-response").videoReleaseId,
                            videoCategoryId: 108,
                            thirdPartySyndication: [],
                            descriptionTags: c && JSON.stringify(c) || [],
                            resultType: "video"
                        };
                    j && !l && (h.postTargetEntityKey = k), context.features.isVideosExternalPostEnabled && d.find(".thirdParties .selected").each(function() {
                        h.thirdPartySyndication.push(a(this).data("provider"))
                    });
                    var i = function() {
                        a.save({
                            url: "/ajax/manage/video/setMetadata",
                            method: "POST",
                            type: "POST",
                            data: h,
                            success: function(a) {
                                e && e(a)
                            },
                            error: function() {
                                Myspace.Error({
                                    yes: {
                                        onClick: function() {
                                            i()
                                        }
                                    }
                                })
                            }
                        })
                    };
                    i()
                }
            }, A = function(a, b) {
                var c = '<li class="video" data-video-release-id="{0}">Your video <a href="/manage/videos?vri={0}">{1}</a> is processing.<progress value="0" max="100"></progress><div class="progress">0% complete.</div></li>';
                comm.send("toasts.new", {
                    html: c.replace(/\{0\}/g, a).replace(/\{1}/g, b),
                    timeout: 864e5
                })
            }, comm.listen("videoUpload.transcoding.complete", function(a) {
                var b = d.data("video-upload-response");
                if (b && b.videoReleaseId == a.videoReleaseId) {
                    if (a.thumbnails && a.thumbnails.length) {
                        var c = a.thumbnails[0].thumbnailUrls.Thumbnail300w;
                        v.find("img").attr("src", c)
                    }
                    B = !1
                }
            }), comm.listen("videoUpload.transcoding.failed", function(a) {
                var b = d.data("video-upload-response");
                if (b && b.videoReleaseId == a.videoReleaseId) {
                    var c = "";
                    switch (a.uploadStatus) {
                        default:
                        case "ProcessingFailed":
                            c = "Video processing failed. Try another file.";
                            break;
                        case "CopyrightInfringement":
                            c = "File has been identified as copyright infringing content.";
                            break;
                        case "ProcessingFailedQA":
                            c = "Video doesn't meet minimum size criteria of 640x360. Try another file."
                    }
                    n(c)
                }
            }), comm.send("videos.listeners.toasts.activate")
        }

        function R(b) {
            var e = b.object,
                f = b.type;
            b.element && (c = a(b.element)), b && (k = b.profileKey, j = !!k, l = "profile_" + context.profileId == k, q.placeholder(b.placeholder ? b.placeholder : !l && j ? "Write to " + (b.profileName || "") + "..." : "What's the latest?"), b.text && q.val(b.text)), e ? (H = e.type || f, f === "song" || f === "audio" ? cb({
                entityKey: e.entityKey,
                title: e.title,
                owner: e.artistName,
                imageUrl: e.imageUrl
            }) : f === "mixtape" ? cb({
                entityKey: e.entityKey,
                title: e.title,
                owner: e.owner,
                imageUrl: e.imageUrl
            }) : f === "album" ? cb({
                entityKey: e.entityKey,
                title: e.title,
                owner: e.artistName,
                imageUrl: e.imageUrl
            }) : f === "video" ? cb({
                entityKey: e.entityKey,
                title: e.title,
                owner: e.artistName,
                imageUrl: e.imageUrl
            }) : f === "radio" ? cb({
                entityKey: e.radioStationEntityKey,
                title: e.title,
                imageUrl: e.imageUrl
            }) : f === "profile" ? cb({
                entityKey: e.entityKey,
                title: e.title,
                imageUrl: e.imageUrl
            }) : f === "article" ? cb({
                entityKey: e.entityKey,
                title: e.title,
                imageUrl: e.imageUrl
            }) : f === "share" && (e.linkEntityKey && (e.entityKey = e.linkEntityKey, e.imageUrl = e.thumbnails && e.thumbnails.length ? e.thumbnails[0].url : undefined), cb(e))) : "page" === f && d.addClass("hideUploads")
        }

        function S() {
            F ? T() : a.ajax({
                url: "/ajax/thirdparty/connections",
                type: "POST",
                success: function(a) {
                    F = a, T()
                }
            })
        }

        function T() {
            F.twitter && a(".superpostTwitter", d).addClass("connected"), facebookBridge.FBAssociatedUserId && a(".superpostFacebook", d).addClass("connected"), a(".thirdParties li", d).click(function() {
                var b = a(this);
                if (b.hasClass("connected")) {
                    b.toggleClass("selected");
                    return
                }
                if (I) return;
                I = b;
                var c = b.data("provider");
                return Myspace.ThirdPartyHelper.connectThirdParty(c, !1, function(a, b) {
                    a ? (F[I.data("provider")] = !0, I.addClass("connected selected"), I = null) : (I = null, Myspace.Error({
                        text: b.additionalData.msg || "Oops, something went wrong and we were unable to get your connections. Please try again later.",
                        yes: {
                            text: "OK"
                        },
                        no: !1,
                        closeAll: !1
                    }))
                }), !1
            })
        }

        function U() {
            E ? ab(E, !0) : a.ajax({
                url: "/ajax/geoiplookup",
                type: "POST",
                success: function(a) {
                    E = a, ab(a, !0)
                }
            })
        }

        function V(a) {
            d.removeClass("attaching location photo video share posting error message songtrigger link hideUploads"), d.removeData(), g.removeAttr("disabled"), q.reset(), r.text(""), t && t.remove(), s && (s.val(""), U()), u && (u.val(""), G.removeClass("post_photo user_16").addClass("post_song"), H = null), a && R(a), i && d.addClass("isMinimized"), v && (v.remove(), d.find(".attachments > .video").css("visibility", "visible")), e.html(""), x = null
        }

        function W() {
            g.removeAttr("disabled")
        }

        function X(a, b) {
            J = !1, Y(a, b)
        }

        function Y(b, c) {
            C || (C = window.FileReader ? new FileReader : null), d.addClass("attaching photo").removeClass("share songtrigger link error"), e.html(""), x = null, t && t.remove();
            var f = "superpost_selectedImage";
            h && (f += " dotted top"), t = a("<div class='" + f + "'></div>"), d.find("aside").prepend(t), J ? t.append(a("<img src='" + b + "'/>")) : C ? (t.addClass("loading"), C.onload = function(b) {
                t.append(a("<img src='" + b.target.result + "'/>")).removeClass("loading")
            }, C.readAsDataURL(b)) : t.addClass("noImage").append("<p><strong>Attached:</strong> " + b.name + "</p>"), t.append(a("<i></i>").addClass("x_14").click(function() {
                J ? J = !1 : w.CancelUpload(c), t.remove(), d.removeClass("photo")
            })), q.focus()
        }

        function Z(a, b, c) {
            d.removeClass("posting"), g.removeAttr("disabled"), c.errorCode === -130 ? lb(c.errorMessage) : lb("Error occurred. Please try again : " + c.errorMessage)
        }

        function _(a, b, c) {
            fb(c)
        }

        function ab(b, c, e) {
            var f;
            s || (s = d.find(".superpost_location"), f = templates["common/views/generic/superpost/_location"], Myspace.AutoComplete(s, {
                handlerUrl: "/ajax/geosearch",
                template: f,
                interval: 500,
                minlen: 5,
                onSelectItem: function(b) {
                    var c = a(b),
                        d = c.text().trim();
                    s.attr("data-entity-key", c.attr("data-entity-key")).attr("data-val", d).val(d)
                },
                sessionRequired: !0
            }), s.blur(function() {
                var a = s.val().trim();
                a != s.attr("data-val") && s.attr("data-entity-key", ""), a == "" && d.removeClass("location")
            }).siblings("i").click(function() {
                return s.val("").attr("data-entity-key", ""), d.removeClass("location"), !1
            })), b && s.attr("data-entity-key", b.entityKey).attr("data-val", b.locationNameWithHierarchy).val(b.locationNameWithHierarchy);
            if (h && e && e.target.className === "post_location" && d.hasClass("location")) {
                d.removeClass("location");
                return
            }
            d.addClass("attaching location"), c || s.focus()
        }

        function bb(b) {
            var c = templates["common/views/generic/superpost/_song"];
            u || (u = d.find(".superpost_song"), Myspace.AutoComplete(u, {
                handlerUrl: "/ajax/autocomplete/songs?max=10",
                template: c,
                interval: 500,
                minlen: 2,
                fitToElement: !0,
                onGetDataSuccessfully: function(a, b) {
                    comm.send("player.nowPlaying", function(c) {
                        c && c.mediaItem && c.mediaItem.songId && (c.mediaItem.nowPlaying = !0, a.unshift(c.mediaItem)), b(a)
                    })
                },
                onSelectItem: function(b) {
                    b = a(b), cb({
                        entityKey: b.attr("data-entity-key"),
                        title: b.find("h6").text(),
                        owner: b.find("p").text(),
                        imageUrl: b.find("img").attr("src").replace("70x70", "300x300")
                    })
                },
                customClass: "slats small",
                sessionRequired: !0
            }), d.find(".superpost_shareContainer").click(function(a) {
                a.stopPropagation()
            }), h && (u.siblings("i").click(function() {
                return u.val(""), d.removeClass("songtrigger"), !1
            }), u.blur(function() {
                u.val().trim() == "" && setTimeout(function() {
                    d.removeClass("songtrigger")
                }, 100)
            })));
            if (h) {
                if (b && b.target.className == "post_song" && (d.hasClass("songtrigger") || d.hasClass("share"))) {
                    u.val(""), d.removeClass("songtrigger share");
                    return
                }
                d.hasClass("share") || d.addClass("songtrigger").removeClass("photo")
            }
            u.focus()
        }

        function cb(a) {
            if (!a.entityKey) return;
            u || bb(), D || (D = require("ejs").compile(templates["common/views/generic/superpost/_share"]), G = d.find("i.post_song")), h || (a.inline = !0), d.find(".superpost_shareContainer").html(D(a)).attr("data-entity-key", a.entityKey).find("i").click(function() {
                d.find(".superpost_shareContainer").html(""), d.removeClass("share"), u.val("").focus(), G.removeClass("post_photo user_16 trending_16").addClass("post_song"), H = null
            }), d.removeClass("songtrigger link").addClass("attaching share"), e.html(""), x = null, q.focus(), H === "profile" ? G.removeClass("post_song").addClass("user_16") : H === "photo" ? G.removeClass("post_song").addClass("post_photo") : H === "article" ? G.removeClass("post_song").addClass("trending_16") : H === "mixtape" ? G.removeClass("post_song").addClass("mixes_16") : (H === "profilestatus" || H === "share") && G.removeClass("post_song")
        }

        function db() {
            var b = "";
            if (d.hasClass("photo")) {
                n ? hb(!0, function(a) {
                    eb(a.text, a.tags)
                }) : (b = hb(!1), a.ajax({
                    url: "/ajax/stream/mslink",
                    type: "POST",
                    data: {
                        data: b
                    },
                    success: function(a) {
                        a.out && (b = a.out)
                    },
                    complete: function() {
                        eb(b)
                    }
                })), d.addClass("posting"), g.attr("disabled", "disabled");
                return
            }
            if (d.hasClass("video")) {
                n ? hb(!0, function(a) {
                    z(a.text, a.tags, ib)
                }) : (b = hb(!1), a.ajax({
                    url: "/ajax/stream/mslink",
                    type: "POST",
                    data: {
                        data: b
                    },
                    success: function(a) {
                        a.out && (b = a.out)
                    },
                    complete: function() {
                        z(b, [], ib)
                    }
                })), d.addClass("posting"), g.attr("disabled", "disabled");
                return
            }
            fb()
        }

        function eb(b, c) {
            var e, f, g = {};
            d.hasClass("location") && (e = s.attr("data-entity-key")), j && (f = k);
            if (J) {
                var h = Myspace.Upload,
                    i = new XMLHttpRequest,
                    l = new FormData,
                    m = t.find("img").prop("src"),
                    n = ob(m);
                j && l.append("target", f), e && l.append("location", e), l.append("caption", b), c && l.append("captionTags", JSON.stringify(c)), l.append("utoken", window.context.hashMashter), l.append("file", n, "webcam.jpeg"), i.addEventListener("load", function(b) {
                    var c = a.parseJSON(b.target.responseText)[0];
                    _(n, null, c)
                }, !1), i.open("POST", h.GetUploadEndpoint(h.MEDIA_TYPES.STREAM)), i.send(l)
            } else {
                if (b || j || e) b && b.charAt(0) === '"' && b.charAt(b.length - 1) === '"' && (b += " "), w.SetPostParams({
                    location: e,
                    target: f,
                    caption: b
                });
                g = {
                    location: e,
                    target: f,
                    caption: b
                }, c && (g.captionTags = JSON.stringify(c)), w.SetPostParams(g), w.StartUpload()
            }
        }

        function fb(a) {
            var b = "",
                c = {};
            comm.send("photo.uploaded", a), n ? hb(!0, function(d) {
                b = d.text, c = d.tags, gb(a, b, c)
            }) : (b = hb(!1), gb(a, b))
        }

        function gb(b, f, h) {
            var i = !0,
                l = d.hasClass("share"),
                m = {},
                n, o;
            b && (n = b.imageEntityKey, o = b.activityEntityKey), f && (m.caption = f, h && (m.tags = JSON.stringify(h)), i = !1), d.hasClass("location") && (m.locationentitykey = s.attr("data-entity-key"));
            if (l) {
                var p = d.find(".superpost_shareContainer").attr("data-entity-key");
                p ? (m.shareentitykey = p, i = !1) : l = !1
            }
            n && (m.imageentitykey = n, o && (m.imageUploadActivityKey = o), i = !1);
            if (d.hasClass("link") && x) {
                var q = x.title,
                    r, t, u = e.find("div.linkImage > img");
                u && u.attr("data-url") && (r = u.attr("data-url")), e && e.find("p[contenteditable].linkTitle") && (q = e.find("p[contenteditable].linkTitle").text()), e && e.find("div.linkPreviewer").hasClass("hideImage") && (t = !0, r = ""), m.postlink = !0, m.linkurl = x.url, m.linkdescription = x.description, m.linktitle = q, m.linkthumbnail = r, m.linkcontenttype = x.contentType, m.linkmediatype = x.mediaType, i = !1
            }
            if (i) {
                lb("Can not post empty status");
                return
            }
            j && (m.targetKey = k), d.find(".thirdParties .selected").each(function() {
                m[a(this).data("provider")] = 1
            }), comm.send("influencer.click", c), a.ajax({
                url: "/ajax/stream/superpost",
                type: "POST",
                data: m,
                success: jb,
                error: kb
            }), d.addClass("posting"), g.attr("disabled", "disabled");
            var v = new Tracking("POST", J ? "WebcamPhoto" : l ? "Share" : n ? "Photo" : "Update")
        }

        function hb(a, b) {
            if (!a) {
                var c = q.val().trim(),
                    d = q.getMentions();
                return d && Object.keys(d).forEach(function(a) {
                    var b = d[a];
                    c = c.replace("[[" + b.text + "]]", "[@" + b.userName + "|" + b.key + "]")
                }), c
            }
            q.getAll(b)
        }

        function ib(a) {
            jb();
            if (B) {
                var b = a && a.video && a.video.videoReleaseId;
                Myspace.Confirm({
                    yes: {
                        text: "Continue",
                        onClick: function() {
                            context.pfc !== "manageVideos" ? b && A(b, a.video.title) : comm.send("location.href", "/manage/videos?vri=" + b)
                        }
                    },
                    no: {
                        text: "Edit Video Info",
                        onClick: function() {
                            comm.send("location.href", "/manage/videos?vri=" + b)
                        }
                    },
                    text: '<span style="white-space: nowrap;">Your video is processing. We will send<br/>you a notification when it\'s ready to view.</span>',
                    beforeShow: function(a) {
                        a.$root.css({
                            width: "auto",
                            "max-width": "960px"
                        })
                    }
                })
            }
        }

        function jb(a) {
            comm.send("superpost.onPost", {
                err: null,
                el: c,
                data: a,
                isProfilePost: j
            }), a && !a.success && a.isShareActivity && (a.statusCode == 429 ? nb("You have exceeded the permitted share frequency.  Please try again later.") : a.statusCode == 403 && nb("Unfortunately, you cannot share this at this time.")), d.removeClass("posting"), g.removeAttr("disabled"), mb("Succesfully posted the status."), i && V()
        }

        function kb(a, b, e) {
            lb(e || b), d.removeClass("posting"), g.removeAttr("disabled"), comm.send("superpost.onPost", {
                err: {
                    status: a.status,
                    message: e || b
                },
                el: c
            })
        }

        function lb(a) {
            r.text(a), d.addClass("error")
        }

        function mb(a) {
            r.text(a), d.addClass("message")
        }

        function nb(a) {
            Myspace.Confirm({
                text: a,
                no: !1,
                yes: {
                    text: "OK"
                }
            })
        }

        function ob(a) {
            var b = atob(a.split(",")[1]),
                c = [];
            for (var d = 0; d < b.length; d++) c.push(b.charCodeAt(d));
            return new Blob([new Uint8Array(c)], {
                type: "image/jpeg"
            })
        }
        var c, d = a(b.container),
            e = a(d.find(".superpost_selectedLink")),
            f = a(d.find(".superpost_statusShare")),
            g = d.find("button.primary"),
            h = d.hasClass("inline"),
            i = d.hasClass("isMinimized"),
            j, k, l, m = context.features.isMentionProfileEnabled,
            n = context.features.isPostTaggingEnabled,
            o = context.features.isLinkScrapeEnabled,
            p, q, r = d.find(".error"),
            s, t, u, v, w, x, y, z, A, B = !0,
            C, D, E, F, G, H, I = null,
            J = !1;
        p = {
            maxLength: 1024,
            showCount: !0,
            showUrlCutOffWarning: !0,
            previewContainer: e,
            enableScrapeLink: o,
            onScrape: M,
            paste: O,
            keypress: P,
            showTagging: n
        }, window.context.features && window.context.features.isWebcamEnabled && Myspace.Webcam.isSupported && K(), q = Myspace.postControl(n || m ? d.find(".postControl > div[contenteditable]") : d.find(".postControl textarea"), p);
        if (!q) {
            var L = require("ejs").compile(templates["common/views/generic/postcontrol"]);
            d.find(".postControl").html(a(L(b)).html()), q = Myspace.postControl(n || m ? d.find(".postControl > div[contenteditable]") : d.find(".postControl textarea"), p)
        }
        return o && (comm.listen("link.scrape.begin", function() {
            d.addClass("linkprocessing"), e.children("div.loading.white").length == 0 && e.append(a("<div class='loading white'>"))
        }), comm.listen("link.scrape.end", function() {
            d.removeClass("linkprocessing")
        })), R(b), S(), U(), w = new Myspace.LiteUploader({
            MEDIA_TYPE: Myspace.Upload.MEDIA_TYPES.STREAM,
            FILE_PROCESSED_SUCCESS_HANDLER: X,
            FILE_PROCESSED_ERROR_HANDLER: Z,
            FILES_SELECTED_HANDLER: W,
            UPLOAD_ERROR_HANDLER: Z,
            UPLOAD_COMPLETE_HANDLER: _,
            html: {
                filesInput: d.find("input[name=superpostPhotoFile]")
            }
        }), g.click(db), d.find(".attachments li").click(function(b) {
            var c = a(this);
            c.hasClass("song") ? bb(b) : c.hasClass("location") ? ab(null, !0, b) : c.hasClass("video") && Q()
        }), d.attr("data-wired", !0), {
            getElement: function() {
                return c
            },
            setElement: function(b) {
                c = a(b)
            },
            reset: function(a) {
                V(a)
            },
            focus: function() {
                q.focus()
            }
        }
    }
    var b, c, d, e, f, g, h, i, j = !1;
    comm.listen("superpost", function(l) {
        var m = a("#lightboxCover");
        if (!context.features.isPostInEnable || !context.features.isShareIsEnable) return c || (c = Myspace.Confirm({
            text: "Functionality is unavailable due to maintenance.",
            no: !1,
            yes: {
                text: "OK"
            }
        })), c.show(!0), !1;
        if (!Myspace.User.isLoggedIn) return comm.send("login.prompt", {
            action: "share",
            object: l && l.object && l.object.entityKey
        });
        var n = a(l.element),
            o = a(l.container),
            p = context.features.isMentionProfileEnabled,
            q = context.features.isLinkScrapeEnabled,
            r;
        if (o.length && o.hasClass("superpost")) {
            o.attr("data-wired") || k(l);
            return
        }
        b && (f != p || g != q) && (b = null), b ? d.reset(l) : (f = p, g = q, r = a("#superpostDialog"), b = new Myspace.Dialog(r, {
            closeAll: !1
        }), l.container = r, d = k(l), h || (h = !0, comm.listen("superpost.onPost", function(a) {
            !a.err && a.el[0] === d.getElement()[0] && setTimeout(function() {
                b.hide()
            }, 0)
        }, !0), comm.listen("dialog.hiding", function(b) {
            b.attr("id") === "superpostDialog" && (d.reset(), a("#lightboxCover").css("z-index", e).toggleClass("media", j), i && (comm.send("location.href", {
                url: i,
                loadState: function() {
                    return !0
                }
            }), i = null))
        }, !0)), e = m.css("z-index")), j = m.hasClass("media"), m.removeClass("media"), l.photoUpload ? (b.$root.addClass("photo").find("button.primary").attr("disabled", ""), a("#superpostPhotoFile").click()) : b.$root.removeClass("photo"), b.show(!0), d.focus(), a("#lightboxCover").css("z-index", 5), i = location.href.replace(location.origin, ""), comm.send("location.href", {
            url: "/post",
            loadState: function(a, b, c) {
                return !0
            }
        });
        var s = {
            pfc: "postoverlay",
            overlayId: "superpostDialog"
        };
        comm.send("beacon.v3.overlay", s)
    }, !0)
})(jQuery);
(function(a) {
    Myspace.Flippers = function(b, c) {
        function l() {
            d[0].clientWidth < d[0].scrollWidth ? (d[0].scrollLeft === 0 ? c.hide(e) : c.show(e), d[0].scrollLeft === d[0].scrollWidth - d[0].clientWidth ? c.hide(f) : c.show(f)) : (c.hide(e), c.hide(f))
        }

        function m(a) {
            i && clearInterval(i), i = setInterval(function() {
                d[0].scrollLeft = d[0].scrollLeft + (a === "right" ? g : -1 * g)
            }, h)
        }

        function n() {
            clearInterval(i)
        }

        function o(a) {
            d.off("scroll", p), d = a, d.on("scroll", p)
        }

        function p(a) {
            j && clearTimeout(j), j = setTimeout(function() {
                n(), l()
            }, 200)
        }
        c = a.extend({
            hide: function(a) {
                a.fadeOut()
            },
            show: function(a) {
                a.fadeIn()
            }
        }, c);
        var d = a(b),
            e = c.leftFlipper ? a(c.leftFlipper) : d.parent().find(".leftFlipper"),
            f = c.rightFlipper ? a(c.rightFlipper) : d.parent().find(".rightFlipper"),
            g = c.scrollToNextLi == 1 ? d.children().first().outerWidth(!0) : 20,
            h = c.scrollIntervalDelay || 40,
            i = null,
            j = null,
            k = null;
        return d.on("scroll", p), a(window).resize(function(a) {
            k && clearTimeout(k), k = setTimeout(function() {
                l()
            }, 200)
        }), f.mousedown(function() {
            m("right")
        }).mouseup(n), f.on("mousedown touchstart", function() {
            m("right")
        }).on("mouseup touchend", function() {
            n()
        }), e.on("mousedown touchstart", function() {
            m("left")
        }).on("mouseup touchend", function() {
            n()
        }), l(), {
            moveScroll: m,
            stopScroll: n,
            toggleFlippers: l,
            setElm: o
        }
    }
})(jQuery);
var Myspace = Myspace || {};
(function(a) {
    function b(b, e, f, g) {
        function o() {
            r(), setTimeout(p, m)
        }

        function p() {
            var a = h.getScrollDirection();
            n && f && (a === "next" || a === "unchanged") && h.isAtEnd(e.offset) ? f() : n && g && (a === "prev" || a === "unchanged") && h.isAtStart(e.offsetPrev) && g(), A(), q()
        }

        function q() {
            j.bind("scroll", o), i.bind("resize", o)
        }

        function r() {
            j.unbind("scroll", o), i.unbind("resize", o)
        }

        function s(a) {
            a.hasClass("hiddenOffScreen") || z.push(a)
        }

        function t(a) {
            a.hasClass("hiddenOffScreen") && y.push(a)
        }

        function u(a) {
            a.css({
                "box-sizing": "border-box",
                height: a.attr("data-height"),
                width: a.attr("data-width")
            }).addClass("hiddenOffScreen")
        }

        function v(a) {
            var b = a[0];
            a.removeClass("hiddenOffScreen"), b.style.height = null, b.style.width = null, b.style["box-sizing"] = null
        }

        function x(a) {
            var b = a.getBoundingClientRect(),
                c = b.left,
                d = b.right,
                e = b.top,
                f = b.bottom;
            return a.setAttribute("data-height", b.height), a.setAttribute("data-width", b.width), d < -w || c > window.innerWidth + w || f < -w || e > window.innerHeight + w
        }

        function A() {
            var b = l.children();
            y = [], z = [], b.each(function() {
                var b = a(this);
                x(this) ? s(b) : t(b)
            }), y.forEach(v), z.forEach(u)
        }

        function C() {
            h.isAtEnd(e.offset) && (B = setInterval(function() {
                f && h.isAtEnd(e.offset) ? n && (G(), f()) : e.autoFillPrevious && g && h.isAtStart(e.offsetPrev) ? n && (G(), g()) : clearInterval(B)
            }, 1e3), comm.listen("spaceway.page.beforeCleanup", function() {
                clearInterval(B)
            }))
        }

        function D() {
            C(), q()
        }

        function E() {
            h.moveToStart()
        }

        function G() {
            F && F.remove()
        }

        function H(a) {
            F = a, e.type === "horizontal" ? a.attr("id", "horizontalScrollerInfo") : a.attr("id", "verticalScrollerInfo"), l.is("ul, ol") ? l.append(a) : l.after(a)
        }

        function I() {
            K();
            var b = a('<li class="error"><div class="actions"><p>Something went wrong and we couldn\'t load any more.</p><a class="tryAgain" href="#">Try again</a></div></li>');
            G(), H(b), b.on("click", ".tryAgain", function(a) {
                return G(), J(), a.preventDefault(), !1
            })
        }

        function J() {
            n = !0
        }

        function K() {
            n = !1, clearInterval(B)
        }

        function L() {
            clearInterval(B), G(), C(), J()
        }

        function M() {
            var b = a('<li class="loading ' + (e.loadingIndicatorClass || "") + '"></li>');
            K(), G(), H(b)
        }

        function N() {
            G(), J()
        }
        var h = e.type === "horizontal" ? new d(b, e) : new c(b),
            i = a(window),
            j = h.getScrollArea(),
            k = a(b),
            l = k.is(e.content) ? k : k.find(e.content).eq(0),
            m = 100,
            n = !0,
            w = 300,
            y = [],
            z = [],
            B, F = null;
        return D(), {
            start: J,
            stop: K,
            reset: L,
            beginLoading: M,
            endLoading: N,
            moveToStart: E,
            error: I
        }
    }
    Myspace.Scroller = function(c, d, e, f) {
        var g = {
            offset: 1600,
            offsetPrev: 0,
            type: "horizontal",
            content: ".infinite"
        };
        return typeof d == "function" && (f = e, e = d, d = {}), d = a.extend({}, g, d), new b(c, d, e, f)
    };
    var c = function(b) {
            var c = b === "body" ? a(window) : a(b),
                d = c.scrollTop();
            this.getScrollArea = function() {
                return c
            }, this.isAtEnd = function(d) {
                var e = c.prop("scrollHeight");
                if (b === "body") {
                    var f = a(window);
                    return a(document).height() - f.height() <= f.scrollTop() + d
                }
                return e === 0 ? !1 : e - c.height() <= c.scrollTop() + d
            }, this.isAtStart = function(d) {
                if (b === "body") {
                    var e = a(window);
                    return e.scrollTop() <= d
                }
                return c.scrollTop() <= d
            }, this.getScrollDirection = function() {
                var a = c.scrollTop(),
                    b;
                return a < d ? b = "prev" : a > d ? b = "next" : b = "unchanged", d = a, b
            }, this.moveToStart = function() {
                c.scrollTop(0)
            }
        },
        d = function(b, c) {
            var d = a(b),
                e = c.isMobile ? d : d.children("div"),
                f = e[0],
                g = f.scrollLeft;
            this.getScrollArea = function() {
                return e
            }, this.isAtEnd = function(a) {
                return f.scrollWidth === 0 ? !1 : f.scrollLeft + f.clientWidth >= f.scrollWidth - a
            }, this.isAtStart = function(a) {
                return f.scrollLeft <= a
            }, this.getScrollDirection = function() {
                var a = f.scrollLeft,
                    b;
                return a < g ? b = "prev" : a > g ? b = "next" : b = "unchanged", g = a, b
            }, this.moveToStart = function() {
                f.scrollLeft = 0
            }
        }
})(jQuery);
var Myspace = Myspace || {};
(function(a) {
    function g(b, d) {
        var f = a(b);
        if (f.length <= 0) return;
        var g = {
            sitekey: c
        };
        d.size && d.size === "compact" && (g.size = "compact"), d.callback && (g.callback = d.callback), e = grecaptcha.render(f[0], g)
    }
    var b, c = "6Lc9eRcTAAAAAFZjuFQqnbls3Kw0W0HToDbFFial",
        d = document.createElement("script"),
        e;
    d.src = "https://www.google.com/recaptcha/api.js?onload=recaptchaloaded&render=explicit", window.recaptchaloaded = function(a) {
        b = !0, f.forEach(function(a) {
            a()
        })
    }, document.body.appendChild(d);
    var f = [];
    Myspace.Captcha = function(a, c) {
        b ? g(a, c) : f.push(function() {
            g(a, c)
        })
    }, Myspace.Captcha.prototype.reset = function() {
        e !== undefined && grecaptcha.reset(e)
    }, Myspace.Captcha.prototype.setResult = function(a) {
        e !== undefined && (a["g-recaptcha-response"] = grecaptcha.getResponse(e))
    }
})(jQuery);
(function(a) {
    function b(b, c) {
        return a('<li class="choice"></li>').text(b).attr("data-event-name", c)
    }
    Myspace = Myspace || {}, Myspace.ThreeDotsMenu = function(c) {
        function k() {
            if (!d) {
                var f = 0,
                    j = c.choices.length,
                    k = a("<ul></ul>");
                for (; f < j; f++) {
                    var l = b(c.choices[f].text, c.choices[f].eventName);
                    k.append(l)
                }
                d = a('<div class="threeDotActions hide"></div>').addClass(h).addClass(g).append(k), i && i.length ? i.append(d) : e.append(d)
            }
        }

        function l(b, c) {
            if (b.hasClass("open")) {
                m();
                return
            }
            f && f.hasClass("open") && f.removeClass("open");
            var g = b.offset();
            f = b, f.addClass("open"), c = c || a.noop, g.top = g.top, g.left = g.left + b.width() / 2, i || d.css(g), j(d, b), d.removeClass("hide"), d.off("click", "li"), d.on("click", "li", function() {
                c(a(this).data("eventName"))
            }), e.bind("mousewheel click", function() {
                e.unbind("mousewheel click"), m()
            })
        }

        function m() {
            f.removeClass("open"), d.addClass("hide")
        }

        function n(c, e) {
            d.find(".choice").each(function() {
                var d = a(this);
                if (d.data("eventName") === c.eventName) {
                    var f = b(e.text, e.eventName);
                    d.replaceWith(f)
                }
            })
        }
        var d, e = a("body"),
            f, g = c.customClass || "",
            h = c.direction || "bottom",
            i = c.$target,
            j = c.filter || a.noop;
        return k(), {
            show: l,
            hide: m,
            replaceChoice: n
        }
    }
})(jQuery);
(function(a) {
    function c(a, b) {
        typeof window.scomm != "undefined" && window.scomm[a].apply(this, b)
    }

    function d() {
        function c(a) {
            var c = "messages.sent";
            comm.send(c, a), b.send(c, a)
        }

        function d(a) {
            a.author.profileId === context.profileId ? !a.conversationItemId && !a.itemId ? (a.participants = [a.tempOtherParticipantProfileId], c(a)) : k(a.conversationId).done(function(b) {
                a.from = {
                    headline: b.conversation.metadata.participants[0].fullName,
                    images: [b.conversation.metadata.participants[0].profileImage]
                }, a.headline = b.conversation.metadata.participants[0].fullName, a.images = [b.conversation.metadata.participants[0].profileImage], a.participants = [b.conversation.metadata.participants[0].profileId], c(a)
            }) : comm.send("messages.new", a)
        }

        function e(b, d, e) {
            var f = Myspace.Utils.guid(),
                h = {
                    participants: b,
                    bodyText: d,
                    messageId: f,
                    headlineText: e
                };
            return a.ajax({
                type: "POST",
                url: "/ajax/messages/createconversation",
                data: h
            }).done(function(a) {
                var d = a.items[0].content[0];
                d.messageId = f, d.folderCode = a.metadata.folderName, d.participants = b, c(d)
            }).error(function(a) {
                g(a)
            }), f
        }

        function f(b) {
            if (!b.conversationId) return e(b.participants, b.bodyText);
            var d = Myspace.Utils.guid(),
                f = {
                    conversationId: b.conversationId,
                    bodyText: b.bodyText,
                    toEntity: b.toEntity,
                    messageId: d
                };
            return a.ajax({
                type: "POST",
                url: "/ajax/messages/send",
                data: f
            }).done(function(a) {
                var e = a.items[0].content[0];
                e.messageId = d, e.folderCode = a.metadata.folderName, e.participants = b.participants, c(e)
            }).error(function(a) {
                g(a)
            }), d
        }

        function g(a) {
            a && a.status == 403 ? Myspace.Confirm({
                text: "You don’t have permission to message this user.",
                no: !1,
                yes: {
                    text: "OK",
                    onClick: function() {
                        return a.responseJSON && comm.send("chat.close", {
                            entityKey: a.responseJSON.entityKey
                        }), comm.send("location.href", "/messages"), !1
                    }
                }
            }) : Myspace.Confirm({
                text: "An error has occured. Please try again.",
                no: !1,
                yes: {
                    text: "OK"
                }
            })
        }

        function h(b, c, d) {
            var e = {
                conversationId: b,
                lastItemId: c,
                count: d
            };
            return a.ajax({
                type: "POST",
                url: "/ajax/messages/get",
                data: e
            })
        }

        function i(b) {
            return a.ajax({
                url: "/ajax/messages/typing",
                type: "POST",
                data: {
                    toEntity: b
                }
            })
        }

        function j(b, c) {
            return a.ajax({
                url: "/ajax/messages/getconversationitem",
                type: "POST",
                data: {
                    conversationId: b,
                    conversationItemId: c
                }
            })
        }

        function k(b) {
            return a.ajax({
                url: "/ajax/messages/getconversation",
                type: "POST",
                data: {
                    conversationId: b
                }
            })
        }

        function l(b, c) {
            return a.ajax({
                url: "/ajax/messages/markread",
                type: "POST",
                data: {
                    conversationId: b,
                    lastItemId: c
                }
            })
        }

        function m(b, c) {
            return a.ajax({
                url: "/ajax/messages/markunread",
                type: "POST",
                data: {
                    conversationId: b,
                    lastItemId: c
                }
            })
        }

        function n(b, c) {
            return a.ajax({
                url: "/ajax/messages/move",
                type: "POST",
                data: {
                    conversationId: b,
                    folderCode: c
                }
            })
        }
        comm.listen("messages.markAsRead", function(a) {
            l(a.conversationId, a.lastItemId)
        }, !0), comm.listen("messages.markAsUnread", function(a) {
            m(a.conversationId, a.lastItemId)
        }, !0), comm.listen("messages.move.archive,messages.move.connections,messages.move.other", function(a, b) {
            var c = b.split(".")[2];
            n(a.conversationId, c)
        }, !0), comm.listen("conversations.additem", function(a) {
            var b = a.author.profileImageUri || a.author.profile140x140ImageUri || window.context.emptyProfileImage,
                c = {
                    fullName: a.author.fullName,
                    imgUrl: b,
                    profileImage: b,
                    profileEntityKeyText: "profile_" + a.author.profileId,
                    profileId: a.author.profileId,
                    username: a.author.username
                },
                e = {
                    author: c,
                    bodyText: a.bodyText.toString().replace(/\\"/g, '"'),
                    conversationId: a.conversationId,
                    itemId: a.conversationItemId,
                    folderCode: a.folderName.toLowerCase(),
                    mutedIndicator: a.mutedIndicator,
                    participantStatusCodeText: a.participantStatusCodeText,
                    participants: [c],
                    from: {
                        headline: c.fullName,
                        images: [c.imgUrl]
                    },
                    itemTypeText: "Message",
                    messageId: a.referenceId,
                    lastUpdate: a.lastActivityDateTimeOffset,
                    tempOtherParticipantProfileId: a.tempOtherParticipantProfileId
                };
            Myspace.Presence.setCachedPresence(c.profileId, {
                status: "Online"
            }), d(e)
        }, !0), comm.listen("conversations.folderaggregatesupdate", function(a) {
            comm.send("messages.folderupdate", a)
        }, !0), comm.listen("conversations.update", function(a) {
            var c;
            a.lastItemId === a.lastSeenItemId ? c = "messages.showAsRead" : c = "messages.showAsUnread", comm.send(c, a), b.send(c, a), c = "messages.folderCheck", a.folderName = a.folderName.toLowerCase(), comm.send(c, a), b.send(c, a)
        }, !0), this.createConversation = e, this.sendTypingIndicator = i, this.sendMessage = f, this.getMessages = h, this.getConversationItem = j, this.moveConversation = n, this.markAsRead = l, this.markAsUnread = m
    }

    function e() {
        function c(a) {
            var c = "instantmessage.sent";
            comm.send(c, a), b.send(c, a)
        }

        function d(b) {
            function g() {
                var c = {
                    toEntity: b.toEntity,
                    message: e,
                    messageId: d,
                    mediaEntityKey: b.mediaEntityKey
                };
                return a.ajax({
                    type: "POST",
                    url: "/ajax/instantmessage/send",
                    data: c
                })
            }
            var d = Myspace.Utils.guid(),
                e = a.trim(b.bodyText),
                f = {
                    fromEntity: "profile_" + context.profileId,
                    toEntity: b.toEntity,
                    message: e,
                    messageId: d,
                    mediaEntityKey: b.mediaEntityKey,
                    mediaHtml: b.mediaHtml
                };
            c(f);
            if (Myspace.MessagingManager.getSettings().IsIMEnabled) return g(), d;
            Myspace.Confirm({
                text: "You are offline. Would you like to go online to send a message?",
                yes: {
                    onClick: function() {
                        return comm.send("messaging.togglesetting", {
                            settingName: "IsIMEnabled",
                            $toggle: a("#isIMEnabled")
                        }), g(), !1
                    }
                }
            })
        }

        function e(b) {
            return a.ajax({
                url: "/ajax/instantmessage/typing",
                type: "POST",
                data: {
                    toEntity: b
                }
            })
        }
        this.sendTypingIndicator = e, this.sendMessage = d
    }
    Myspace.Messages = Myspace.Messages || {};
    var b = {
        ready: function() {
            c("ready", arguments)
        },
        add: function() {
            c("add", arguments)
        },
        send: function() {
            c("send", arguments)
        }
    };
    Myspace.Messages.messagesProvider = context.features.isOfflineMessagingEnabled ? new d : new e
})(jQuery);
(function(a) {
    Myspace = Myspace || {};
    var b = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    Myspace = Myspace || {}, Myspace.MessageTimestamp = {
        get: function(a) {
            var c = new Date(a),
                d = b[c.getMonth()],
                e = c.getDate(),
                f = c.getHours(),
                g = c.getMinutes(),
                h = f >= 12,
                i = h ? "pm" : "am";
            return f = h ? f - 12 : f, f === 0 && (f = 12), g = g < 10 ? "0" + g : g, d + " " + e + ", " + f + ":" + g + i
        },
        set: function(b) {
            b.find("time").each(function() {
                var b = a(this),
                    c = Myspace.MessageTimestamp.get(b.attr("data-datetime"));
                b.text(c)
            })
        }
    }, Myspace.MessageFolders = function(b, c) {
        function p() {
            j.click(function(b) {
                b.preventDefault(), b.stopPropagation();
                var c, d = a(b.target),
                    e = d.closest("li"),
                    f = e.children("a"),
                    g = e.attr("data-folder");
                j.attr("data-active-folder") !== g && (k.parent().removeClass("noConversations"), k.html("").addClass("loading white"), c = f.attr("href"), j.attr("data-active-folder", g), y({
                    url: l,
                    folder: g,
                    includeConversation: m
                }, t, v, w), n(c))
            }), q()
        }

        function q() {
            g = new Myspace.Scroller(k, {
                content: k,
                offset: 400,
                type: "vertical",
                loadingIndicatorClass: "white"
            }, r)
        }

        function r() {
            if (h) return;
            if (i) return;
            var a = 20;
            g.stop(), h = !0, g.beginLoading(), s()
        }

        function s() {
            var b = k.find("li[data-conversation-id]").last().data("conversationId"),
                c = k.attr("data-folder");
            y({
                url: l,
                folder: c,
                start: b,
                includeConversation: !1
            }, function(b) {
                g.endLoading(), c = k.attr("data-folder");
                if (b.threadsSuccess && b.folder === c && b.threadsMarkup !== "") {
                    var d = a(b.threadsMarkup),
                        e = d.siblings("[data-conversation-id=" + window.context.privateMessagingConversationId + "]");
                    e.length && e.addClass("selected"), Myspace.MessageTimestamp.set(d), k.append(d), comm.send("page.changed", k)
                } else g.stop(), i = !0
            }, function() {
                g.error()
            }, function() {
                h = !1
            })
        }

        function t(c) {
            if (c) {
                j.attr("data-active-folder", c.folder), k.attr("data-folder", c.folder), b.attr("data-active-folder", c.folder);
                if (c.threadsSuccess) {
                    u(c.folderCounts);
                    if (c.threadsMarkup !== "") {
                        var d = a(c.threadsMarkup);
                        Myspace.MessageTimestamp.set(d), k.html(d), o(c), i = !1, m || k.children("li").removeClass("selected"), comm.send("page.changed", k)
                    } else k.parent().addClass("noConversations"), i = !0;
                    g && g.stop(), q()
                }
            }
        }

        function u(a) {
            a[e[0]] !== undefined && j.find('[data-folder="connections"] span').attr("data-value", a[e[0]] >= 0 ? a[e[0]] : 0), a[e[1]] !== undefined && j.find('[data-folder="other"] span').attr("data-value", a[e[1]] >= 0 ? a[e[1]] : 0), a[e[2]] !== undefined && j.find('[data-folder="archive"] span').attr("data-value", a[e[2]] >= 0 ? a[e[2]] : 0)
        }

        function v(a) {}

        function w(a) {
            k.removeClass("loading white")
        }

        function x() {
            y({
                url: l,
                includeConversation: m
            }, t, v, w)
        }

        function y(b, c, d, e) {
            var f = b.url,
                g = b.folder,
                h = b.start,
                i = b.includeConversation;
            a.ajax({
                url: f + (g ? "/" + g : ""),
                type: "POST",
                data: {
                    start: h,
                    includeConversation: i
                }
            }).done(function(a) {
                c(a)
            }).fail(function(a) {
                d(a)
            }).always(function(a) {
                e(a)
            })
        }

        function z(a) {
            var b = k.find("li[data-conversation-id=" + a.conversationId + "]");
            b.hasClass("unread") && (A(a, -1), a.folderCode = a.folderDestination, A(a, 1)), b.length && b.remove()
        }

        function A(a, b) {
            var c = j.find('[data-folder="' + a.folderCode + '"] span'),
                d = parseInt(c.attr("data-value"), 10);
            d += b, d < 0 && (d = 0), c.attr("data-value", d)
        }

        function B(b) {
            if (k.attr("data-folder") == b.folderCode.toLowerCase()) {
                b.lastMessage = b.bodyText, b.lastUpdated = b.lastUpdated || b.createdDateTimeOffset || (new Date).toISOString();
                var c = k.find("li[data-conversation-id=" + b.conversationId + "]");
                if (c.length && !b.to) c.find(".nameplate > p").text(b.lastMessage), c.find(".nameplate > time").attr("data-datetime", b.lastUpdated), !c.hasClass("selected") && !b.read && c.addClass("unread"), Myspace.MessageTimestamp.set(c), k.prepend(c), comm.send("page.changed", c);
                else {
                    var e = a(f.render(d, {
                        thread: b
                    }));
                    e.attr("data-last-item-id", b.itemId), Myspace.MessageTimestamp.set(e), c.hasClass("idle") ? e.addClass("idle") : c.hasClass("online") && e.addClass("online"), c.length ? (c.hasClass("selected") ? e.addClass("selected") : b.read || e.addClass("unread"), c.remove(), k.prepend(e)) : (k.parent().removeClass("noConversations"), k.prepend(e)), comm.send("page.changed", e)
                }
            }
        }
        var d = templates["common/views/footer/messages/_thread"],
            e = ["connectionsUnseenConversationsQuantity", "otherUnseenConversationsQuantity", "archiveUnseenConversationsQuantity"],
            f = require("ejs"),
            g, h = !1,
            i = !1,
            j = b.find(".folders"),
            k = b.find(".threads > ul"),
            l = "/ajax/messages/folders",
            c = c || {},
            m = !!c.includeConversationOnLoad,
            n = c.onHeaderClick || a.noop,
            o = c.onFolderSuccess || a.noop;
        return p(), comm.listen("messages.folderupdate", function(a) {
            u(a)
        }), comm.listen("messages.sent", function(a) {
            a.to && (a.images = a.to.images, a.headline = a.to.headline), a.participants && a.participants.length && Number(a.participants[0]) && (a.otherParticipantProfileId = a.participants[0]), a.read = !0, B(a)
        }, !0), comm.listen("messages.new", function(a) {
            a.images = a.from.images, a.headline = a.from.headline, a.participants = [a.author], B(a)
        }, !0), comm.listen("messages.markAsUnread", function(a) {
            A(a, 1)
        }, !0), comm.listen("messages.markAsRead", function(a) {
            A(a, -1)
        }, !0), comm.listen("messages.move.archive,messages.move.connections,messages.move.other", function(a, b) {
            z(a)
        }, !0), {
            load: x
        }
    }
})(jQuery);
(function(a) {
    Myspace = Myspace || {}, Myspace.MessageThreads = function(b, c) {
        function j() {
            var b, c = {},
                j;
            f && (b = [{
                eventName: "messages.markAsRead",
                text: "Mark as read"
            }, {
                eventName: "messages.markAsUnread",
                text: "Mark as unread"
            }, {
                eventName: "chat.open",
                text: "Open in chat"
            }, {
                eventName: "messages.move.connections",
                text: "Move to Inbox"
            }, {
                eventName: "messages.move.other",
                text: "Move to Other"
            }, {
                eventName: "messages.move.archive",
                text: "Archive"
            }], c = {
                choices: b,
                customClass: "threadDots",
                filter: function(a, b) {
                    var c = d.attr("data-folder"),
                        e = b.closest("li").hasClass("unread") ? "unread" : "read";
                    a.find("li").removeClass("hide");
                    switch (c.toLowerCase()) {
                        case "connections":
                            a.find("li:eq(3)").addClass("hide");
                            break;
                        case "other":
                            a.find("li:eq(4)").addClass("hide");
                            break;
                        case "archive":
                            a.find("li:eq(5)").addClass("hide")
                    }
                    e === "read" ? (a.find("li:eq(0)").addClass("hide"), a.find("li:eq(1)").addClass("first")) : (a.find("li:eq(1)").addClass("hide"), a.find("li:eq(0)").addClass("first"))
                }
            }, d.on("click", ".threeDots", function(b) {
                b.preventDefault(), b.stopPropagation();
                var f = a(this);
                e || (e = new Myspace.ThreeDotsMenu(c)), e.show(f, function(a) {
                    var b = f.closest("li"),
                        c = a.split(".")[2];
                    comm.send(a, {
                        conversationId: b.data("conversationId"),
                        entityKey: "profile_" + b.data("profileId"),
                        lastItemId: b.data("lastItemId"),
                        folderCode: d.attr("data-folder"),
                        folderDestination: c
                    })
                })
            }), Myspace.MessageTimestamp.set(d)), d.on("click", "> li", function(b) {
                var c = a(this),
                    d = a(b.target);
                d.hasClass("openInConversation") ? comm.send("location.href", "/messages/" + c.data("conversationId")) : d.closest(".profileLink").length || (b.preventDefault(), b.stopPropagation(), e && e.hide(), i(c.data("conversationId"), c.data("url"), c.data("profileId")), g && n(c))
            }), d.on("mouseenter", ".openInConversation", function() {
                a(this).tip({
                    placement: "top",
                    trigger: "manual"
                }).attr("data-original-title", h).tip("fixTitle").tip("show")
            }), d.on("mouseleave", ".openInConversation", function() {
                a(this).tip().tip("hide")
            }), j = d.find("li.selected.unread"), j.length && j.removeClass("unread")
        }

        function k(a) {
            var b = d.find("li[data-conversation-id=" + a + "]");
            n(b)
        }

        function l(a) {
            var b = d.find("li[data-conversation-id=" + a + "]");
            b.addClass("unread")
        }

        function m(a) {
            var b = d.find("li[data-conversation-id=" + a + "]");
            b.hasClass("unread") && b.removeClass("unread")
        }

        function n(a) {
            d.children("li").removeClass("selected"), a.removeClass("unread").addClass("selected")
        }

        function o() {
            e && e.hide()
        }
        var d = b,
            e, f = !!c.hasMenu,
            g = !!c.selectable,
            h = "Open full page",
            i = c.onThreadClick || a.noop;
        return j(), comm.listen("messages.markAsUnread,messages.showAsUnread", function(a) {
            l(a.conversationId)
        }, !0), comm.listen("messages.markAsRead,messages.showAsRead", function(a) {
            m(a.conversationId)
        }, !0), comm.listen("messages.folderCheck", function(a) {
            var b = d.find("li[data-conversation-id=" + a.conversationId + "]"),
                c = d.attr("data-folder");
            b.length && c !== a.folderName && b.remove()
        }, !0), comm.listen("dialog.showing", function() {
            o()
        }), {
            markSelected: k,
            folderHasChanged: o
        }
    }
})(jQuery);
(function() {
    Myspace.FooterPopout = function(a, b) {
        function e() {
            if (c) return;
            c = !0, a.addClass("open"), a.show(), clearTimeout(d), comm.listen("page.esc", g), setTimeout(function() {
                $(document).on("click", f)
            }, 0)
        }

        function f(b) {
            var c = $(b.target);
            a.find(c).length === 0 && c.closest("#hCard").length === 0 && g()
        }

        function g() {
            if (!c) return;
            c = !1, a.removeClass("open"), d = setTimeout(function() {
                a.hide()
            }, 200), comm.stopListening("page.esc", g), $(document).off("click", f), b.onClose && b.onClose()
        }

        function h() {
            var a = c;
            return a ? g() : e(), !a
        }
        var c = !1,
            d;
        return b = b || {}, a.hide(), a.find(".actionBar > .close").click(function() {
            g()
        }), comm.listen("spaceway.page.complete", g, !0), comm.listen("player.onClick", g, !0), {
            open: e,
            close: g,
            toggle: h
        }
    }
})();
(function(a) {
    function i() {
        d.find(".notification.unviewed").removeClass("unviewed")
    }

    function k() {
        if (!j) return j = !0, d.empty(), c.addClass("loading white"), h = !0, l().done(function(a) {
            a.totalRecords > 0 && a.html ? (m(a.html), o()) : b.addClass("noResults")
        }).fail(function() {
            b.addClass("noResults")
        }).always(function() {
            j = !1, c.removeClass("loading white")
        })
    }

    function l() {
        return a.ajax({
            url: "/ajax/notifications",
            type: "POST",
            data: {
                start: 0,
                max: 10
            }
        })
    }

    function m(c) {
        var e = a(c);
        d.prepend(e), b.removeClass("noResults"), comm.send("page.changed", d)
    }

    function n(a) {
        a.html && m(a.html), p(a.counts)
    }

    function o() {
        Myspace.Notifications.markAsViewed(d.find(".notification.unviewed"))
    }

    function p(a) {
        a && f.text(a.unseen).toggleClass("empty", a.unseen === 0)
    }
    var b = a("#notificationsPopout"),
        c = b.children("section"),
        d = b.find(".notifications"),
        e = a("#showNotificationsNavLink"),
        f = e.find(".count"),
        g = new Myspace.FooterPopout(b, {
            onClose: i
        }),
        h = !0;
    Myspace.Notifications.wireList(d, !0), e.click(function(b) {
        var c = a('.tip[data-name="notifications"]'),
            d = g.toggle();
        d ? (c.hide(), f.addClass("empty").text(""), h ? o() : k()) : c.show(), b.preventDefault()
    });
    var j = !1;
    comm.listen("notifications.removed", function() {
        d.find(".notification").length || k()
    }, !0), comm.listen("notifications.count", p, !0), comm.listen("notifications.new.render", n, !0)
})(jQuery);
(function(a) {
    function b() {
        function m(a) {
            n(), e.addClass("loading"), j.val(a.entityKey), Myspace.MessagingManager.getMediaHtml(a.entityKey).done(function(a) {
                e.html(a)
            }).always(function() {
                e.removeClass("loading")
            }), comm.send("drawer.panel", "messaging"), comm.send("drawer.open"), b.addClass("open"), h.focus()
        }

        function n() {
            l.clearCache(), l.hideList(), i.val(""), h.val(""), k.val(""), e.html(""), g.prop("disabled", !0)
        }

        function o() {
            b.removeClass("open")
        }

        function p(a, b, c) {
            Myspace.MessagingManager.getOnlineUsers(function(d, e) {
                if (d) return c(d);
                var f = [],
                    g = new RegExp(a, "i");
                e.forEach(function(a) {
                    (g.test(a.name) || g.test(a.username)) && f.push(a)
                }), b({
                    data: f
                })
            })
        }
        var b = a("#messagePopout"),
            d = b.find("form"),
            e = d.find(".messageMedia"),
            f = d.find(".message"),
            g = d.find("button[type=submit]"),
            h = d.find("input[name=search]"),
            i = d.find("textarea[name=message]"),
            j = d.find("input[name=media]"),
            k = d.find("input[name=recipient]"),
            l;
        return d.submit(function() {
            o();
            var a = k.val(),
                b = j.val(),
                c = i.val(),
                d = e.html(),
                f = {
                    toEntity: a,
                    messageText: c,
                    mediaEntityKey: b,
                    mediaHtml: d
                };
            return Myspace.Messages.messagesProvider.sendMessage(f), comm.send("chat.open", {
                entityKey: a
            }), !1
        }), l = Myspace.AutoComplete(b.find("input[name=search]"), {
            dataHandler: p,
            template: c,
            interval: 500,
            minlen: 2,
            onSelectItem: function(b) {
                var c = a(b).data();
                h.val(c.name), k.val(c.entityKey), g.prop("disabled", !1)
            },
            onSelectionModified: function() {
                k.val(""), g.prop("disabled", !0)
            },
            noResultsMessage: "No online friends found."
        }), b.find(".close").click(o), i.focus(function() {
            f.addClass("focused")
        }).blur(function() {
            f.removeClass("focused")
        }), {
            open: m,
            close: o
        }
    }
    var c = '<% locals.forEach(function(user) { %><li data-name="<%= user.name %>" data-entity-key="<%- user.entityKey %>"><%= user.name %></li><% }); %>',
        d;
    comm.listen("messaging.popout", function(a) {
        context.features.isOfflineMessagingEnabled ? comm.send("chat.initialize") : (d = d || new b, d.open(a))
    }, !0)
})(jQuery);
(function(a) {
    function d() {
        function l(a, b, c) {
            comm.send("chat.open", {
                entityKey: "profile_" + c
            }), i.close()
        }

        function m() {
            k || (k = !0, f.empty().addClass("loading white"), j = !0, g.load())
        }
        var d = a("#conversationsPopout"),
            e = d.find(".folders"),
            f = d.find(".threads > ul"),
            g = new Myspace.MessageFolders(d),
            h = new Myspace.MessageThreads(f, {
                onThreadClick: l
            }),
            i = new Myspace.FooterPopout(d),
            j = !1,
            k = !1;
        c.find(".list.options > li").on("click", function(b) {
            var c = a(this).data("action");
            switch (c) {
                case "new":
                    return comm.send("chat.initialize"), !1
            }
        }), d.find("footer > ul").on("click", "> li", function(b) {
            var c = a(this).data("action");
            switch (c) {
                case "open":
                    return comm.send("drawer.open", "messaging"), i.close(), !1;
                case "new":
                    return comm.send("chat.initialize"), i.close(), !1
            }
        }), b.click(function(c) {
            var f = a('.tip[data-name="messaging"]'),
                g = i.toggle();
            b.find(".count").parent().removeClass("bouncing"), g ? (f.hide(), j ? e.attr("data-active-folder") === "connections" ? d.find(".threads > ul").scrollTop(0) : e.find('li[data-folder="connections"] > a').click() : m()) : f.show(), c.preventDefault()
        })
    }

    function e() {
        b.click(function(a) {
            comm.send("drawer.togglePanel", "messaging"), b.find(".count").parent().removeClass("bouncing"), a.preventDefault()
        })
    }

    function f() {
        function e(b) {
            var c = Myspace.MessagingManager.getSettings(),
                e = !c[b],
                f = c.objectVersion,
                g = d[b];
            return g.toggleClass("on", e), a.save({
                url: "/ajax/instantmessage/settings/" + b,
                data: {
                    value: e,
                    objectVersion: f
                }
            }).done(function(a) {
                b === "IsIMEnabled" && comm.send("presence.sethidden", !e), Myspace.MessagingManager.setSettings(a), scomm.send("messaging.setting", {
                    name: b,
                    setting: a
                })
            }).fail(function() {
                g.toggleClass("on", c[b])
            })
        }
        var b = a("#isIMEnabled"),
            c = a("#isIMSoundEnabled"),
            d = {
                IsIMEnabled: b,
                IsIMSoundEnabled: c
            };
        comm.listen("messaging.togglesetting", function(a) {
            e(a.settingName, a.$toggle)
        }, !0), scomm.add(function(a, b) {
            if (a === "messaging.setting") {
                var c = b.name,
                    e = b.setting,
                    f = d[c];
                f.toggleClass("on", e[c]), Myspace.MessagingManager.setSettings(e)
            }
        })
    }

    function g() {
        function a(a) {
            var c = b.find(".count");
            a = Math.max(a, 0);
            var d = a === 0;
            c.toggleClass("empty", d).text(a).data("count", a), d && c.parent().removeClass("bouncing")
        }
        context.features.isOfflineMessagingEnabled ? d() : e(), f(), comm.listen("drawer.panel", function(a) {
            var b = c.children(".horizontal");
            a === "messaging" && b.scrollLeft(0)
        }, !0), comm.listen("messaging.unreadcount", function(a) {
            var c = b.find(".count"),
                d;
            a.clearCount ? d = 0 : d = Math.max(c.data("count") + a.inc, 0);
            var e = d === 0;
            c.toggleClass("empty", e).text(d).data("count", d), e ? c.parent().removeClass("bouncing") : a.animate && c.parent().addClass("bouncing")
        }, !0), comm.listen("messages.folderupdate", function(b) {
            var c = b.connectionsUnseenConversationsQuantity || 0,
                d = b.otherUnseenConversationsQuantity || 0;
            a(c + d)
        }), a(window.context.messaging.unseenConversationsTotal)
    }
    var b = a("#messagingLink"),
        c = a("#messaging");
    g()
})(jQuery);
(function(a) {
    function l() {
        function j() {
            f && l(), comm.send("chat.close", {}), f = a(b.render(e, {})), c.prepend(f), g = f.find("input[name=nameSearch]"), h = f.find(".peopleList"), m(), f.addClass("open"), g.focus(), f.find(".close").click(function() {
                return l(), !1
            })
        }

        function l() {
            f.removeClass("open").detach()
        }

        function m() {
            i = new Myspace.AutoComplete(g, {
                handlerUrl: "/ajax/conversation/personlookup",
                template: k,
                interval: 500,
                minlen: 2,
                fitToElement: !0,
                customListRoot: h.find("ul"),
                onType: function(a) {
                    var b = a.which,
                        c = d.ENTER;
                    b == c && a.preventDefault(), b === d.ESC && i.hideList(), g.val().length <= 2 && i.hideList()
                },
                onLoading: function() {
                    h.addClass("loading white")
                },
                onBeforeRendering: function() {
                    h.removeClass("loading white")
                },
                onGetDataSuccessfully: function(a, b) {
                    b(a)
                },
                onSelectItem: function(b) {
                    var c = a(b),
                        d = objectify(c);
                    if (c.hasClass("ignore")) return;
                    h.addClass("loading white"), comm.send("chat.open", {
                        entityKey: d.entityKey,
                        isNewChat: !0,
                        callback: function() {
                            l()
                        }
                    })
                },
                sessionRequired: !0
            })
        }
        var f, g, h, i;
        return comm.listen("chat.open", function(a) {
            a && !a.isNewChat && l()
        }, !0), {
            initialize: j
        }
    }

    function m(e, i) {
        function C(c) {
            var g = a(b.render(f, c));
            g.find(".close").click(function() {
                return B && B.hide(), comm.send("chat.close", {
                    entityKey: e
                }), s("closeChat"), !1
            }), g.find(".options").click(function(b) {
                b.preventDefault(), b.stopPropagation();
                if (!B) {
                    var d = {
                            eventName: "block",
                            text: "Block user"
                        },
                        f = {
                            eventName: "openConversation",
                            text: "Open full page"
                        },
                        g = {
                            eventName: "unblock",
                            text: "Unblock user"
                        },
                        h = {
                            choices: [],
                            customClass: "chatPopup",
                            $target: a(b.target),
                            direction: "top"
                        };
                    context.features.isOfflineMessagingEnabled && h.choices.push(f), h.choices.push(d), B = new Myspace.ThreeDotsMenu(h), comm.listen("connect.complete", function(a) {
                        a.entityKey === e && (a.action === "block" ? B.replaceChoice(d, g) : a.action === "unblock" && B.replaceChoice(g, d))
                    }, !0)
                }
                B.show(a(this), function(a) {
                    if (a === "openConversation") {
                        var b = "/new";
                        m && (b = "/" + m), comm.send("location.href", "/messages" + b)
                    } else {
                        if (a === "block") return Myspace.Confirm({
                            closeAll: !1,
                            text: "Are you sure you want to block " + c.name + "? They will not be able to connect with you, your content, or send you messages.",
                            yes: {
                                text: "Confirm",
                                onClick: function() {
                                    comm.send("block", {
                                        entityKey: e,
                                        type: "profile",
                                        id: c.profileId
                                    })
                                }
                            },
                            no: {
                                text: "Cancel"
                            }
                        }), s("chatBlock"), !1;
                        if (a === "unblock") return comm.send("unblock", {
                            entityKey: e,
                            type: "profile",
                            id: c.profileId
                        }), !1
                    }
                })
            });
            var h = null;
            return g.find("input[name=message]").keypress(function(a) {
                if (a.which !== d.ENTER) {
                    var b = new Date;
                    b - h > 1e4 && (h = b, Myspace.Messages.messagesProvider.sendTypingIndicator(e))
                }
            }).focus(), g.find("form").submit(function(b) {
                function f() {
                    h = null;
                    var a = {
                        conversationId: m,
                        bodyText: e,
                        participants: [c.profileId],
                        author: {
                            profileEntityKey: "profile_" + context.profileId
                        },
                        fromEntity: "profile_" + context.profileId,
                        toEntity: c.entityKey,
                        message: e
                    };
                    d.val(""), s("sendMessage");
                    var b = Myspace.Messages.messagesProvider.sendMessage(a);
                    b && (a.messageId = b, O(a))
                }
                b.preventDefault(), b.stopPropagation();
                var d = a(this).find("input[name=message]"),
                    e = a.trim(d.val());
                if (!e) return;
                f()
            }), context.features.isOfflineMessagingEnabled || Myspace.DragDrop.addDroppables(g), g
        }

        function D() {
            y || (o = C(i).addClass(x), v = o.find(".newMessageIndicator").click(K), p = o.find(".messages"), p.click(function() {
                E()
            }), q = o.find("input[name=message]"), r = a(b.render(h, {
                imgUrl: i.imgUrl
            })), u = a('<div class="typing loading white"></div>'), H(), m && J(), y = !0)
        }

        function E() {
            D(), o.find('input[name="message"]').focus()
        }

        function F() {
            A++;
            var a = A === 1 ? "new message" : "new messages";
            v.text(A + " " + a), v.hasClass("shown") || (p.on("scroll", function b() {
                L() && (G(), p.off("scroll", b))
            }), v.addClass("shown").fadeIn())
        }

        function G() {
            A = 0, v.removeClass("shown").fadeOut()
        }

        function H() {
            z = new Myspace.Scroller(p, {
                content: p,
                offsetPrev: 400,
                type: "vertical",
                loadingIndicatorClass: "white"
            }, null, J)
        }

        function J() {
            if (!context.features.isOfflineMessagingEnabled) return;
            if (I) return;
            var a = 20;
            z.stop(), I = !0, Myspace.Messages.messagesProvider.getMessages(m, n, a).done(function(a) {
                var b = 0,
                    c = a.items;
                if (!c.length) return;
                c.reverse().forEach(function(a) {
                    a.content.reverse().forEach(function(a) {
                        var c = {
                                itemId: a.itemId,
                                author: a.author,
                                bodyText: a.bodyText,
                                createdDateTimeOffset: a.createdDateTimeOffset
                            },
                            d = N(c);
                        d && (b += d.outerHeight(!0))
                    })
                }), p.scrollTop(p.scrollTop() + b), comm.send("page.changed", p), z.start()
            }).always(function() {
                I = !1
            })
        }

        function K() {
            p.scrollTop(p.prop("scrollHeight"))
        }

        function L() {
            var a = 50;
            return p.innerHeight() + p.scrollTop() + a >= p.prop("scrollHeight")
        }

        function N(c) {
            D();
            if (M[c.itemId]) return;
            var d = c.author.profileEntityKeyText,
                e = d === "profile_" + context.profileId,
                f = new Date(c.createdDateTimeOffset),
                h = a.extend({
                    timestamp: f.toISOString(),
                    isSelf: e
                }, c);
            e ? (h.imgUrl = context.profileImage, h.profileId = context.profileId, h.username = context.username) : (h.imgUrl = i.imgUrl, h.profileId = i.profileId, h.username = i.username);
            var j = a(b.render(g, h));
            return Myspace.MessageTimestamp.set(j), l === d ? (j = j.find(".message").children(), p.find("> .messageGroup:not(.typingIndicator)").first().find("> .message").prepend(j)) : p.prepend(j), l = d, n = c.itemId, k || (k = d), j
        }

        function O(c) {
            D();
            var d = c.author.profileEntityKeyText || c.author.profileEntityKey;
            n || (n = c.itemId), l || (l = d), context.features.isOfflineMessagingEnabled && (m || (m = c.conversationId, m && n && J()));
            if (M[c.messageId] || M[c.itemId]) return;
            c.messageId && (M[c.messageId] = !0), M[c.itemId] = !0;
            var e = d,
                f = e === "profile_" + context.profileId,
                h = L(),
                j = h && w,
                o = new Date,
                q = a.extend({
                    timestamp: o.toISOString(),
                    isSelf: f
                }, c);
            !f && w && comm.send("messages.markAsRead", {
                conversationId: c.conversationId,
                lastItemId: c.itemId
            });
            var r = q.mediaHtml;
            !r && q.mediaEntityKey && (r = t.getMediaHtml(q.mediaEntityKey)), a.when(r).done(function(c) {
                q.mediaHtml = c, f ? (q.imgUrl = context.profileImage, q.profileId = context.profileId, q.username = context.username) : (q.imgUrl = i.imgUrl, q.profileId = i.profileId, q.username = i.username);
                var d = a(b.render(g, q));
                Myspace.MessageTimestamp.set(d), k === e ? (d = d.find(".message").children(), p.find("> .messageGroup:not(.typingIndicator)").last().find("> .message").append(d)) : p.append(d), j ? K() : !f && !h && F(), comm.send("page.changed", p), k = e
            })
        }

        function P() {
            D(), w = !0, c.prepend(o), o.addClass("open").find("input").focus(), K(), m && comm.send("messages.markAsRead", {
                conversationId: m,
                lastItemId: n
            })
        }

        function Q() {
            w = !1, o.removeClass("open"), o.detach()
        }

        function R() {
            y && o.addClass("online").removeClass("offline idle"), x = "online"
        }

        function S() {
            y && o.addClass("offline").removeClass("online idle"), x = "offline"
        }

        function T() {
            y && o.addClass("idle").removeClass("online offline"), x = "idle"
        }

        function W() {
            D();
            if (!V) {
                var a = L(),
                    b = i.entityKey;
                k === b ? p.find("> .messageGroup:last-child > .message").append(u) : p.append(r), a && K()
            }
            U.reset(), V = !0
        }

        function X() {
            D(), U.stop(), r.detach(), u.detach(), V = !1
        }
        var j = i.conversation || {},
            k = null,
            l = null,
            m = j.conversationId || null,
            n = null,
            o, p, q, r, u, v, w = !1,
            x = "online",
            y = !1,
            z, A = 0,
            B, I = !1,
            M = {},
            U = new Myspace.ResetTimer(X, 15e3),
            V = !1;
        this.addMessage = O, this.open = P, this.close = Q, this.goOnline = R, this.goOffline = S, this.goIdle = T, this.showTypingIndicator = W, this.hideTypingIndicator = X
    }

    function p(c, d) {
        function i() {
            h !== "active" && t("online"), e.removeClass("offline idle").addClass("online"), g = "online"
        }

        function k() {
            h !== "active" && t("offline"), e.removeClass("online idle").addClass("offline"), g = "offline"
        }

        function l() {
            h !== "active" && t("idle"), e.removeClass("online offline").addClass("idle"), g = "idle"
        }

        function m() {
            e.addClass("open"), t("active"), q(0), f = !0
        }

        function n() {
            e.removeClass("open"), t(g), f = !1
        }

        function p() {
            e.removeClass("open"), f = !1
        }

        function q(a) {
            e.find(".count").text(a).toggleClass("empty", a <= 0)
        }

        function r(a) {
            t("active"), q(a)
        }

        function t(a) {
            if (a !== h) {
                var b = o[a];
                if (h) {
                    var c = o[h];
                    e.detach(), c.children().length || c.removeClass("hasChildren")
                }!h || a === "active" || h === "idle" && a === "online" ? b.append(e) : b.prepend(e), b.addClass("hasChildren"), h = a
            }
        }

        function u() {
            return h
        }
        var e = a(b.render(j, d)),
            f = !1,
            g = null,
            h = null;
        e.click(function() {
            var a = e.parent("ul");
            return s("openChat", a.hasClass("active") ? "active" : a.hasClass("online") ? "online" : "offline"), comm.send("chat.open", {
                entityKey: c,
                userData: d
            }), !1
        }), this.goOnline = i, this.goOffline = k, this.goIdle = l, this.open = m, this.close = n, this.minimize = p, this.receiveMessage = r, this.getStatus = u, this.setUnreadCount = q
    }

    function q(c, d) {
        function q(c, d, e, f) {
            var g = d || "";
            g = g.length > 65 ? g.substring(0, 65) + "..." : g;
            var h = a.extend({
                bodyText: g,
                mediaHtml: f
            }, e);
            comm.send("toasts.new", {
                html: b.render(i, h),
                onAdd: function(a) {
                    a.on("click", function() {
                        return comm.send("drawer.open", "messaging"), comm.send("chat.open", {
                            entityKey: c
                        }), !1
                    })
                }
            })
        }

        function r() {
            return window.context.privateMessagingConversationId !== undefined
        }

        function s(a) {
            return window.context.privateMessagingConversationId && window.context.privateMessagingConversationId == a
        }

        function u(a) {
            return !t.hasOpenChat() && a.folderCode === "connections" && Myspace.Presence.getCurrentPresence() === "Online" && !n && !r()
        }

        function v(a) {
            return !s(a.conversationId)
        }

        function w(a) {
            return a.folderCode === "connections" && !r()
        }

        function x(a) {
            return a.folderCode === "connections" && !s(a.conversationId)
        }
        var e = new m(c, d),
            f = new p(c, d),
            g = d.conversation || {},
            h = g.unseenItemsQuantity || 0,
            j = 0,
            k = !1,
            l = !1,
            n = !1,
            o = this;
        f.setUnreadCount(h), this.goOnline = function() {
            l = !0, e.goOnline(), f.goOnline()
        }, this.goOffline = function() {
            l = !1, e.goOffline(), f.goOffline()
        }, this.goIdle = function() {
            l = !0, e.goIdle(), f.goIdle()
        }, this.setPresence = function(a) {
            switch (a) {
                case "Online":
                    this.goOnline();
                    break;
                case "Idle":
                    Date.now() - j >= 12e4 && this.goIdle();
                    break;
                default:
                    this.goOffline()
            }
        }, this.open = function() {
            k = !0, n = !1, e.open(), f.open(), h !== 0 && comm.send("messaging.unreadcount", {
                inc: -1
            }), h = 0
        }, this.close = function() {
            k = !1, n = !0, e.close(), f.close()
        }, this.minimize = function() {
            k = !1, n = !1, e.close(), f.minimize()
        }, this.receiveMessage = function(b) {
            j = Date.now();
            var g = "";
            b.mediaEntityKey && (g = t.getMediaHtml(b.mediaEntityKey)), a.when(g).done(function(a) {
                var g = f.getStatus() !== "active";
                k || (u(b) ? comm.send("chat.open", {
                    entityKey: c
                }) : (h === 0 && x(b) && comm.send("messaging.unreadcount", {
                    inc: 1,
                    animate: b.folderCode === "connections"
                }), v(b) && (h++, f.receiveMessage(h)), w(b) && q(b.author.profileEntityKeyText, b.bodyText, d, a))), o.goOnline(), b.mediaHtml = a, e.addMessage(b), e.hideTypingIndicator(), comm.send("messaging.messagereceived", {
                    user: d,
                    isNewConversation: g
                })
            })
        }, this.isOpen = function() {
            return k
        }, this.isOnline = function() {
            return l
        }, this.showTypingIndicator = function() {
            j = Date.now(), o.goOnline(), e.showTypingIndicator()
        }, this.addMessage = function(a) {
            e.addMessage(a)
        }, this.entityKey = c, this.user = d, this.setUnreadCount = function(a) {
            h = a, f.setUnreadCount(a)
        }
    }

    function r() {
        function f(c, d, f) {
            var g = b[c];
            g ? d(g) : (f || (e[c] ? f = e[c] : e[c] = f = a.ajax({
                url: "/ajax/instantmessage/initiate",
                type: "POST",
                data: {
                    entityKey: c
                }
            })), a.when(f).then(function(a) {
                delete e[c], g = b[c], g || (b[c] = g = new q(c, a), g.setPresence(a.presence)), d(g)
            }))
        }

        function g(a) {
            var d = b[a];
            d.isOpen() || (c && c.minimize(), d.open(), c = d)
        }

        function h(a) {
            var d = b[a];
            d.minimize(), c = null
        }

        function i(a) {
            if (a) {
                var d = b[a];
                d.close(), c = null
            } else c && (c.close(), c = null)
        }

        function j() {
            comm.listen("chat.open", function(a) {
                var b = a.entityKey,
                    c = a.userData;
                f(b, function(b) {
                    a.callback && a.callback(), g(b.entityKey)
                }, c)
            }, !0), comm.listen("chat.close", function(a) {
                var b = a.entityKey;
                i(b)
            }, !0), comm.listen("chat.minimize", function(a) {
                var b = a.entityKey;
                h(b)
            }, !0), comm.listen("chat.initialize", function() {
                d = d || new l, d.initialize()
            }, !0)
        }

        function k() {
            function a(a) {
                var b = a.participants[0];
                if (b) {
                    var c = "profile_" + b;
                    f(c, function(b) {
                        b.addMessage(a)
                    })
                }
            }

            function b(a) {
                var b = a.author.profileEntityKeyText;
                f(b, function(b) {
                    b.receiveMessage(a)
                })
            }

            function c(a) {
                var b = a.author.profileEntityKeyText;
                f(b, function(a) {
                    a.showTypingIndicator()
                })
            }
            if (context.features.isOfflineMessagingEnabled) comm.listen("messages.new", b, !0), comm.listen("messages.sent", a, !0), scomm.add(function(b, c) {
                if (b !== "messages.sent") return;
                a(c)
            }), comm.listen("messages.typing", c, !0), comm.listen("messages.unreadcount", function(a) {
                var b = a.entityKey;
                f(b, function(b) {
                    b.setUnreadCount(a.count)
                })
            }, !0);
            else {
                function d(a) {
                    return {
                        conversationId: a.conversationId,
                        itemId: a.messageId,
                        messageId: a.messageId,
                        itemTypeText: "Message",
                        folderCode: "connections",
                        createdDateTimeOffset: new Date,
                        author: {
                            profileEntityKey: a.fromEntity,
                            profileEntityKeyText: a.fromEntity
                        },
                        bodyText: a.message,
                        participants: [Number(a.toEntity.split("_")[1])]
                    }
                }
                comm.listen("instantmessage.new", function(a) {
                    var c = d(a);
                    b(c)
                }, !0), comm.listen("instantmessage.sent", function(b) {
                    var c = d(b);
                    a(c)
                }, !0), scomm.add(function(b, c) {
                    if (b !== "instantmessage.sent") return;
                    var e = d(c);
                    a(e)
                }), comm.listen("instantmessage.typing", function(a) {
                    var b = d(a);
                    c(b)
                }, !0)
            }
        }

        function o() {
            m || (m = !0, comm.stopListening("drawer.panel", p));
            var c = Object.keys(b).map(function(a) {
                    var c = b[a];
                    return c.user.profileId
                }),
                d = {
                    loaded: c,
                    presence: Myspace.Presence.getCurrentPresence(),
                    client: "web"
                };
            return a.ajax({
                url: "/ajax/instantmessage/onlinenow",
                type: "POST",
                data: d
            }).done(function(a) {
                for (var c in b) {
                    var d = !1;
                    a.users.forEach(function(a) {
                        a.entityKey === c && (d = !0)
                    });
                    if (!d) {
                        var e = b[c];
                        e.goOffline()
                    }
                }
                a.users.forEach(function(a) {
                    var b = Number(a.entityKey.split("_")[1]);
                    f(a.entityKey, function(b) {
                        b.setPresence(a.presence)
                    }, a), Myspace.Presence.setCachedPresence(b, {
                        status: a.presence
                    })
                })
            })
        }

        function p(a) {
            a === "messaging" && o()
        }

        function u() {
            a(window).focus(function() {
                t = !0, comm.send("title.stopflashing"), scomm.send("title.stopflashing")
            }).blur(function() {
                t = !1
            })
        }

        function v(a) {
            function c() {
                var a = [];
                return Object.keys(b).forEach(function(c) {
                    var d = b[c];
                    d.isOnline() && a.push(d.user)
                }), a
            }
            if (m) {
                var d = c();
                a(null, d)
            } else o().done(function() {
                var b = c();
                a(null, b)
            }).fail(a)
        }

        function x() {
            return w
        }

        function y(b) {
            a.extend(w, b)
        }

        function z(b) {
            return a.ajax({
                url: "/ajax/instantmessage/mediadetails",
                type: "POST",
                data: {
                    mediaEntityKey: b
                }
            })
        }

        function A() {
            return !!c
        }
        var b = {},
            c, d, e = {};
        j(), k();
        var m = !1,
            n = 3e4;
        setTimeout(o, 2e3), setInterval(o, n), comm.listen("drawer.panel", p, !0);
        var r = document.getElementById("newIMAudio"),
            s = document.getElementById("newIMConversationAudio");
        comm.listen("messaging.messagereceived", function(a) {
            if (!t) {
                var b = a.user.name + " sent you a message...";
                comm.send("title.startflashing", b)
            }
            x().IsIMSoundEnabled && (a.isNewConversation ? (s.currentTime = 0, s.volume = .2, s.play()) : (r.currentTime = 0, r.play()))
        }, !0);
        var t = !1;
        u(), comm.listen("spaceway.page.complete", u, !0);
        var w = context.messaging.settings;
        return {
            getOnlineUsers: v,
            getSettings: x,
            setSettings: y,
            getMediaHtml: z,
            hasOpenChat: A
        }
    }

    function s(a, b) {}

    function u() {
        t = Myspace.MessagingManager = new r
    }
    var b = require("ejs"),
        c = a("#messageBar"),
        d = {
            ESC: 27,
            ENTER: 13
        },
        e = '<div class="chat popout new"><header><a>New Message</a><div class="actionBar"><i class="close close_chat_14"></i></div></header><section><div class="messages"><form class="dotted bottom"><i class="addParticipant search_14"></i><input type="text" name="nameSearch" placeholder="Type a name" /></form><div class="peopleList"><ul></ul></div></div><form><input disabled type="text" autocomplete="off" name="message"/></form></section></div>',
        f = '<div class="chat popout" data-dest="sendinstantmessage" data-entity-key="<%- locals.entityKey %>" data-username="<%- locals.username %>"><header><a href="/<%- locals.username.toLowerCase() %>"><%= locals.name %></a><div class="actionBar"><i class="options_22 options"></i><i class="close close_chat_14"></i></div></header><section><div class="messages"></div>' + (context.features.isOfflineMessagingEnabled ? "" : '<p class="offlineMessage"><%= locals.name %> is offline and can\'t receive messages.</p>') + '<div class="newMessageIndicator hide">new message</div>' + "<form>" + '<input type="text" autocomplete="off" placeholder="" name="message" maxlength="' + context.messageMaxLength + '"/>' + "</form>" + "</section>" + "</div>",
        g = templates["common/views/footer/messages/_message"],
        h = templates["common/views/footer/messages/_typing"],
        i = '<li class="instantMessage" data-influencer="<%- locals.profileId %>"><div class="slat small"><img src="<%= locals.imgUrl %>"/><div><h5><a href="/<%- locals.username.toLowerCase() %>"><%= locals.name %><a/></h5><p><%= (locals.bodyText || "") %></p><% if(locals.mediaHtml) { %><div><%- locals.mediaHtml %></div><% } %></div></div></li>',
        j = '<li data-profile-id="<%- locals.profileId %>" data-entity-key="<%- locals.entityKey %>" data-img-url="<%- locals.imgUrl %>" data-username="<%= locals.username %>" data-name="<%= locals.name %>"><img src="<%- locals.imgUrl %>" /><div class="info"><h6><a title="<%= locals.name %>" href="/<%- locals.username.toLowerCase() %>"><%= locals.name %></a></h6></div><div class="controls"><span class="count empty">0</span></div></li>',
        k = templates["common/views/generic/superpost/_mention"],
        n = a("#messaging"),
        o = {
            active: n.find(".list.active"),
            online: n.find(".list.online"),
            idle: n.find(".list.idle"),
            offline: n.find(".list.offline")
        },
        t;
    Myspace.User.isLoggedIn && u()
})(jQuery);
(function() {
    function p() {
        comm.send("messaging.togglesetting", {
            settingName: "IsIMEnabled"
        }), I("playerMessaging", "presence", k.hasClass("on") ? "on" : "off")
    }

    function q() {
        comm.send("messaging.togglesetting", {
            settingName: "IsIMSoundEnabled"
        }), I("playerMessaging", "sound", l.hasClass("on") ? "on" : "off")
    }

    function u(a) {
        var b = d.find("section#" + a + " .horizontal");
        b.length && (t.setElm(b), t.toggleFlippers())
    }

    function y(a, b) {
        a ? (g.find("span").text(a), d.addClass("message" + (b ? " open" : "")), b && x.broadcast("opened"), g.addClass("fadeIn")) : (g.removeClass("fadeIn").addClass("fadeOut"), setTimeout(function() {
            d.removeClass("message open"), x.broadcast("closed"), g.removeClass("fadeOut")
        }, 1e3))
    }

    function D() {
        a.hasClass("queueOpen") && (z = setTimeout(function() {
            B && !d.hasClass("pinned") && (comm.send("drawer.close"), B = !1)
        }, 450))
    }

    function E(a) {
        v.indexOf(a) > -1 && (d.attr("data-panel") != a && (d.attr("data-panel", a), u(a)), x.broadcast("panel", a))
    }

    function F(b) {
        if (w) {
            C = !0, G();
            return
        }
        b === undefined && (b = !a.hasClass("queueOpen")), b && clearTimeout(z), b != a.hasClass("queueOpen") && (C = b, G(), x.broadcast(b ? "opened" : "closed", d.attr("data-panel")))
    }

    function G() {
        a.toggleClass("queueOpen", C)
    }

    function H(a, b) {
        $.extend(Cookies[a].values, b), Cookies.save(Cookies[a], "." + document.domain, (new Date).addDays(30))
    }

    function I(a, b, c) {}
    var a = $("body"),
        b = $("#footer"),
        c = $("#player"),
        d = $("#drawer"),
        e = d.children("header"),
        f = $("#switcher"),
        g = $("#message"),
        h = $("#queue"),
        i = $("#mixes"),
        j = $("#popover"),
        k = $("#isIMEnabled"),
        l = $("#isIMSoundEnabled"),
        m = new CookieHelper("player"),
        n = !$("#incognito").hasClass("on"),
        o = new Myspace.Popover($("#incognitoTooltip"), {
            preRender: function(a, b, c) {
                a.height(n ? 125 : 78), c()
            }
        });
    n || $("#playerFacebookPrivacy").parent().hide(), $("#playerFacebookPrivacy").click(function() {
        facebookBridge.ChangePostToFacebookSetting($("#playerFacebookPrivacy").is(":checked"))
    }), $("#publicPlays,#privatePlays").click(function() {
        var a = $("#publicPlays").is(":checked");
        if (n == a) return !0;
        n = a, I("player", "incognito", a ? "on" : "off"), comm.send("player.incognito", !a), a || $("#playerFacebookPrivacy").parent().hide(), $("#incognitoTooltip").animate({
            top: a ? "-=47" : "+=47",
            height: a ? "125" : "78"
        }, 100, function() {
            a && $("#playerFacebookPrivacy").parent().show()
        })
    }), comm.listen("drawer.closed", function() {
        o.hide()
    }), d.find('a[data-action="signin"]').click(function() {
        return comm.send("login.show", {
            context: {
                action: $(this).data("promptAction")
            }
        }), !1
    }), e.click(function(b) {
        var c = $(b.target),
            e = c.closest("[data-action]").data("action");
        switch (e) {
            case "incognito":
                $("#myspaceTip").hide();
                var f = c.hasClass("on");
                return f ? $("#privatePlays").prop("checked", !0) : $("#publicPlays").prop("checked", !0), facebookBridge.IsPostToFacebookSettingEnabled ? $("#playerFacebookPrivacy").prop("checked", !0) : $("#playerFacebookPrivacy").prop("checked", !1), setTimeout(function() {
                    a.hasClass("dragging") || o.show(c, {
                        y: "top",
                        autoHide: !0
                    })
                }, 200), !1;
            case "presence":
                p();
                break;
            case "imsound":
                q();
                break;
            case "pin":
                d.toggleClass("pinned");
                var g = d.hasClass("pinned");
                I("player", "pin", g ? "on" : "off"), H("player", {
                    pinned: g
                })
        }
        return !e
    }), $("#globalSuperPost").click(function() {
        comm.send("photoCarousel.hide"), comm.send("rightRail.hide"), comm.send("superpost", {
            element: this
        })
    }), f.on("click", function(a) {
        var b = $(a.target).closest("[data-action]").data("action");
        return comm.send("drawer.panel", b), I("player", "panel", b), !b
    });
    var r = d.find(".leftFlipper"),
        s = d.find(".rightFlipper"),
        t = new Myspace.Flippers(h.find(".horizontal"), {
            leftFlipper: r,
            rightFlipper: s
        });
    r.bind({
        dragenter: function() {
            t.moveScroll("left")
        },
        dragleave: function() {
            t.stopScroll()
        }
    }), s.bind({
        dragenter: function() {
            t.moveScroll("right")
        },
        dragleave: function() {
            t.stopScroll()
        }
    });
    var v = ["queue", "mixes", "messaging", "radio"],
        w, x = comm.own("drawer", {
            toggle: F,
            togglePanel: function(b) {
                var c = d.attr("data-panel"),
                    e = a.hasClass("queueOpen");
                F(!e || c !== b), E(b)
            },
            open: function(a) {
                a && E(a), F(!0)
            },
            close: function(a) {
                a && E(a), F(!1)
            },
            closeOnLeave: function() {
                B = !0
            },
            panel: function(a) {
                E(a)
            },
            flippers: function() {
                t.toggleFlippers()
            },
            message: function(a) {
                y(a, !0)
            },
            cover: function(a) {
                y(a)
            },
            forceOpen: function(a) {
                w = a, a && F()
            }
        });
    a.on("click", function(a) {
        var b = $(a.target);
        !b.closest("#global-nav, #drawer, #videoPlayer, .tour_footer, #messageBar").length && !d.hasClass("pinned") && F(!1)
    });
    var z, A, B = !1,
        C = a.hasClass("queueOpen");
    c.on("mouseleave", function() {
        A && clearTimeout(A)
    }).on("mousemove", function() {
        a.hasClass("queueOpen") || (A && clearTimeout(A), A = setTimeout(function() {
            comm.send("drawer.open"), B = !0
        }, 100))
    }), b.on("mouseleave", function() {
        D()
    }).on("mouseenter", function() {
        clearTimeout(z), B = !0
    }), j.on("mouseenter", function() {
        clearTimeout(z), B = !0
    }).on("mouseleave", function() {
        D()
    }), comm.listen({
        spaceway: {
            "+body.class": G
        }
    })
})();
(function(a) {
    function c() {
        b || (b = new Myspace.termsOfService), b.getTermsOfServiceData()
    }

    function d() {
        return context.features.isGDPRDialogEnabled
    }

    function e() {
        d() ? (!Cookies.eucookie || !Cookies.eucookie.values.v) && ["pagesvideoprivacypolicy", "pagestermsofservice", "pageseeaprivacypolicy"].indexOf(context.pfc) === -1 && (comm.send("showSiteAlert", {
            text: 'As a result of a server migration project, any photos, videos, and audio files you uploaded more than three years ago may no longer be available on or from Myspace. We apologize for the inconvenience. If you would like more information, please contact our Data Protection Officer at <a href="mailto:DPO@myspace.com" target="_blank">DPO@myspace.com</a>.',
            action: "cookieNotice",
            label: "eucookie",
            "class": "eucookie"
        }), c()) : context.termsOfService && context.termsOfService.showTOSBOX && c()
    }
    var b;
    Myspace.termsOfService = function() {
        function h() {
            var b = d() ? "/ajax/euTermsOfService" : "/ajax/termsOfService";
            g ? i(g) : a.ajax({
                url: b,
                type: "POST",
                dataType: "json"
            }).done(function(b) {
                b.html ? (a(e).remove(), g = b.html, i(g)) : comm.stopListening("spaceway.page.complete", c)
            }).fail(function() {
                console.log("Error occurred, while getting privacy policy."), comm.stopListening("spaceway.page.complete", c)
            })
        }

        function i(b, c) {
            a(e) && a(e).remove(), a(b).appendTo("body"), f.addClass("scrollLocked"), a("#noConfirm", a(e)).click(function() {
                a("#noticeBoard", a(e)).addClass("confirmNotAcceptTOS");
                var b = d() ? "/pages/eeaprivacy" : "/pages/privacy";
                Myspace.Confirm({
                    text: '<h4 class="confirmNotAcceptTOS">Are you sure?</h4><p class="confirmNotAcceptTOS">You must agree to the new <a href="/pages/terms" target="_blank">Terms of Use Agreement</a>, <a href="' + b + '" target="_blank">Privacy Policy</a> and <a href="/pages/videoprivacy" target="_blank">Video Privacy Policy</a> to use the Myspace Services.</p>',
                    no: {
                        text: "Go Back",
                        onClick: function() {
                            a("#noticeBoard", a(e)).removeClass("confirmNotAcceptTOS")
                        }
                    },
                    yes: {
                        text: "Sign Out",
                        onClick: function() {
                            window.location.href = "/signout"
                        }
                    }
                })
            }), a('input[type="checkbox"] + span, input[type="checkbox"]', a(e)).click(function() {
                setTimeout(function() {
                    k() ? a("#confirm", a(e)).removeClass("disabled") : a("#confirm", a(e)).addClass("disabled")
                })
            }), a("#confirm", a(e)).click(function() {
                k() ? (d() && (Cookies.eucookie = new Cookie("eucookie"), Cookies.eucookie.values = {
                    shown: "true",
                    v: 1
                }, Cookies.save(Cookies.eucookie, document.domain, (new Date).addDays(180)), a(e).hide()), (c || context.loginId > -1) && l("yes", c)) : j()
            })
        }

        function j() {
            Myspace.Confirm({
                text: "You must agree to the terms by clicking the checkboxes.",
                yes: {
                    text: "OK"
                },
                no: !1
            })
        }

        function k() {
            var b = a('input[type="checkbox"]', a(e)).map(function(b, c) {
                return a(c).prop("checked")
            });
            return a.makeArray(b).every(function(a) {
                return a
            })
        }

        function l(b, d) {
            a.ajax({
                url: "/ajax/acceptTermsOfService",
                type: "POST",
                data: {
                    confirm: b
                },
                dataType: "json"
            }).done(function(b) {
                f.removeClass("scrollLocked"), b.success ? (a(e).remove(), d ? comm.send("signin") : comm.stopListening("spaceway.page.complete", c)) : d ? comm.send("signin") : (a(e).hide(), comm.stopListening("spaceway.page.complete", c))
            }).fail(function() {
                f.removeClass("scrollLocked"), d ? comm.send("signin") : (a(e).hide(), comm.stopListening("spaceway.page.complete", c))
            })
        }
        var e = "#termsOfService",
            f = a("body"),
            g;
        return {
            showTermsOfService: i,
            getTermsOfServiceData: h
        }
    }, comm.listen("spaceway.page.complete", function() {
        e()
    }, !0), e()
})(jQuery);
(function(a) {
    function c() {
        b || (b = new Myspace.verifyEmail), b.showVerifyEmailBox()
    }
    var b;
    Myspace.verifyEmail = function() {
        function d() {
            c ? e() : a.ajax({
                url: "/ajax/verifyEmail",
                type: "POST",
                dataType: "json"
            }).done(function(a) {
                a.html && (c = a.html), e()
            }).fail(function() {
                e()
            })
        }

        function e() {
            c && (a("#verifyEmail").remove(), a(c).appendTo("body"), a("body").addClass("scrollLocked"), a("#resend_verification_email").click(function() {
                a.ajax({
                    url: "/ajax/account/verifyemail",
                    type: "POST",
                    data: {},
                    success: function(a) {
                        Myspace.genericDialog({
                            html: "<section><h1>Email Sent</h1><p>An email has been sent to " + a.email + "</p></section>"
                        })
                    },
                    error: function(a) {
                        var b = JSON.parse(a.responseText);
                        Myspace.genericDialog({
                            html: "<section><h1>Error</h1><p>" + b.message + "</p></section>"
                        })
                    }
                })
            }))
        }
        var c;
        return {
            showVerifyEmailBox: d
        }
    }, context.showVerifyEmailBox && c(), comm.listen("spaceway.page.complete", function() {
        context.showVerifyEmailBox && c()
    }, !0)
})(jQuery);
(function(a, b) {
    "use strict";
    var c, d = {
            closeOnEscape: !0,
            closeOnClick: !0,
            hideTabs: !1,
            hideConnectButton: !1,
            focusOnCommentBox: !0
        },
        e = function() {
            if (c) return c;
            if (!(this instanceof e)) return new e;
            this.$container = a("#rightRail"), this.$rail = this.$container.find(".rail"), this.$nav = this.$container.find("nav"), this.activeSection = null, this.serviceUrl = "/ajax/rail", this.setOptions(), this.wire(), c = this
        };
    e.prototype.setOptions = function(b) {
        a.extend(this, d, b || {})
    }, e.prototype.escapeHandler = function() {
        this.closeOnEscape && !a("#lightboxCover").is(":visible") && this.$container.hasClass("open") && this.close()
    }, e.prototype.getEntity = function() {
        return this.entity
    }, e.prototype.setEntity = function(a) {
        this.entity = a
    }, e.prototype.open = function() {
        a("body").addClass("railOpen"), this.$container.addClass("open"), this.resize(), comm.send("rightRail.opening")
    }, e.prototype.close = function() {
        a("body").removeClass("railOpen"), this.$container.removeClass("open"), comm.send("rightRail.closing")
    }, e.prototype.resize = function() {
        var b = this.$container.find(".railHeader").height() + a("#global-nav").height() + 70,
            c = a(window).height() - b;
        this.$rail.height(c), this.resizeComments()
    }, e.prototype.resizeComments = function() {
        var a = this.activeSection;
        if (a) {
            var b = this.$container.find("section." + a + " .commentsControl").data("commentsControl");
            b && b.resize(this.$container)
        }
    }, e.prototype.renderHeader = function() {
        var a = this.getEntity(),
            b = a.activityHtml,
            c = this.$container,
            d = c.find(".railHeader"),
            e = "",
            f = a.type.toLowerCase(),
            g = this;
        b && delete a.activityHtml;
        switch (f) {
            case "song":
                e = require("ejs").render(templates["areas/music/views/media/_songSquare"], {
                    songSquare: {
                        song: a,
                        size: "medium",
                        songUrl: a.url
                    }
                });
                break;
            case "album":
                e = require("ejs").render(templates["areas/music/views/media/_albumSquare"], {
                    albumSquare: {
                        album: a,
                        size: "medium",
                        albumUrl: a.albumUrl,
                        artistLink: a.artistUrl,
                        showMetaInfo: "yes",
                        notUseCommonHelper: !0
                    }
                });
                break;
            case "video":
                e = require("ejs").render(templates["areas/videos/views/shared/_videoHead"], {
                    video: a
                });
                break;
            case "mixtape":
                e = require("ejs").render(templates["areas/mixes/views/shared/_mixHead"], {
                    mix: a
                });
                break;
            case "photo":
                e = require("ejs").render(templates["areas/photos/views/_photoRightRailHead"], {
                    photo: a
                });
                break;
            case "article":
                e = require("ejs").render(templates["areas/discover/views/shared/_articleHead"], {
                    article: a
                });
                break;
            case "link":
                e = require("ejs").render(templates["areas/misc/views/shared/_linksRightRailHead"], {
                    link: a
                })
        }
        a.influencerId && d.attr("data-influencer", a.influencerId), d.html(e), b && d.append(b), f == "photo" && comm.send("text.limit", {
            container: d,
            parent: c,
            lineHeight: 16,
            enableScroll: !0,
            expandAtStart: a.isRailPostExpanded,
            clickCallBack: function() {
                g.resize()
            }
        })
    }, e.prototype.createCommentsControl = function(a, c) {
        var d = this.$container.find("section." + a),
            e = d.find(".commentsControl"),
            f = this;
        if (e.length) {
            var g = new b.CommentsControl(e, this.$container);
            this.resizeComments(), g.scrollToBottom(), c && setTimeout(function() {
                g.focus()
            }, 500);
            var h = e.find(".showMore");
            h.click(function() {
                g.getMoreComments(50, function(a) {
                    h.find(".shown").text(a.numShown), a.hasMore || (h.remove(), f.resizeComments())
                })
            })
        }
    }, e.prototype.renderInfoSection = function(a) {
        function e() {
            d.createCommentsControl(c)
        }
        var b = this.getEntity(),
            c = "info",
            d = this,
            f = b.type ? b.type : b.entityKey.split("_")[0];
        switch (f) {
            case "song":
                this.renderSection({
                    section: c,
                    entityKey: b.entityKey,
                    entityId: b.mediaId,
                    entityType: "song",
                    commentEntitykey: b.commentEntitykey,
                    getConnectBtn: a
                }, e);
                break;
            case "album":
                this.renderSection({
                    section: c,
                    entityKey: b.entityKey,
                    entityId: b.albumId,
                    entityType: "album",
                    commentEntitykey: b.commentEntitykey,
                    getConnectBtn: a
                }, e);
                break;
            case "video":
                this.renderSection({
                    section: c,
                    entityKey: b.entityKey,
                    entityId: b.mediaId,
                    entityType: "video",
                    commentEntitykey: b.commentEntitykey,
                    getConnectBtn: a
                }, e);
                break;
            case "mixtape":
                this.renderSection({
                    section: c,
                    entityKey: b.entityKey,
                    entityId: b.playlistId,
                    entityType: "mixtape",
                    profileId: b.profileId,
                    commentEntitykey: b.commentEntitykey,
                    getConnectBtn: a
                }, e);
                break;
            case "photo":
                this.renderSection({
                    section: c,
                    entityKey: b.entityKey,
                    entityId: b.imageId,
                    entityType: "photo",
                    profileId: b.profileId,
                    playlistId: b.playlistId,
                    commentEntitykey: b.commentEntitykey,
                    getConnectBtn: a
                }, e);
                break;
            case "article":
                this.renderSection({
                    section: c,
                    entityKey: b.entityKey,
                    entityId: b.id,
                    entityType: "article",
                    profileId: b.profileId,
                    playlistId: b.playlistId,
                    commentEntitykey: b.commentEntitykey,
                    getConnectBtn: a
                }, e);
                break;
            default:
        }
    }, e.prototype.renderCommentsSection = function(a) {
        function e() {
            d.createCommentsControl(c, d.focusOnCommentBox), comm.send("page.changed", d.$container.find(".railHeader .description"))
        }
        var b = this.getEntity(),
            c = "comments",
            d = this;
        this.renderSection({
            section: c,
            commentEntityKey: b.commentEntitykey,
            entityKey: b.entityKey,
            type: b.type,
            focusOnInput: d.focusOnCommentBox,
            start: 0,
            max: 10,
            getConnectBtn: a
        }, e)
    }, e.prototype.renderConnectionsSection = function(a) {
        var b = this.getEntity(),
            c = this,
            d = function() {
                var a = c.$container.find("section.connections"),
                    d = a.find(".grid"),
                    e = c.$rail.height() - a.find("h3").outerHeight(!0) - d.outerHeight(),
                    f = d.find("li").outerHeight(!0);
                if (f < e && f > 0) {
                    var g = parseInt(e / f, 10),
                        h = a.find(".pager").data("next-start");
                    typeof h != "undefined" && c.renderSection({
                        section: "connections",
                        entityKey: b.entityKey,
                        start: h,
                        max: g,
                        paging: !0
                    })
                }
            };
        this.renderSection({
            section: "connections",
            entityKey: b.entityKey,
            getConnectBtn: a
        }, d)
    }, e.prototype.renderSection = function(b, c, d) {
        var e = b.paging || !1,
            f = this.$container.find("section." + b.section),
            g = this;
        e ? f.find("h3").after('<div class="loading white"></div>') : (this.showSection(b.section), f.addClass("loading white").html(""));
        var h = a.ajax({
            type: "POST",
            url: this.serviceUrl,
            data: b
        });
        h.done(function(d) {
            if (e) f.find("h3, .loading").remove(), f.prepend(d.markup), f.find(".content").first().hide().slideDown();
            else {
                f.html(d.markup);
                var h = g.getEntity();
                !g.hideConnectButton && d.connectButton && g.$container.find(".railHeader").append(d.connectButton);
                if (d.entity) {
                    var i;
                    d.entity.decoratedDescription && (i = d.entity.decoratedDescription), d.entity.decoratedCaption && (i = d.entity.decoratedCaption), i && (g.$container.find(".railHeader .description").html(i), comm.send("page.changed", g.$container.find(".railHeader")))
                }!h.stats && d.entity && d.entity.stats && (g.$container.find(".railHeader .stats").hide().text(d.entity.stats.AllTime || "1").fadeIn(), g.setEntity(d.entity))
            }
            if (b.entityType === "mixtape") {
                var j = a("#mixMetaData", g.$container),
                    k = g.$container.find("div.mixtape > div:last-child");
                k.find("span").length === 0 && k.append(j.html())
            }
            c && c(), comm.send("page.changed", f)
        }), h.fail(function(a) {
            d && d(a)
        }), h.always(function() {
            f.removeClass("loading white")
        })
    }, e.prototype.switchSection = function(a) {
        if (a !== this.activeSection) switch (a) {
            case "info":
                this.renderInfoSection();
                break;
            case "comments":
                this.renderCommentsSection();
                break;
            case "connections":
                this.renderConnectionsSection()
        }
    }, e.prototype.showSection = function(a) {
        var b = this.$rail.find("section." + a);
        this.$nav.find("a.active").removeClass("active"), this.$rail.find("section.active").removeClass("active"), this.$nav.find("a." + a).addClass("active"), b.addClass("active"), this.activeSection = a
    }, e.prototype.render = function(a, b) {
        a && (this.setEntity(a), this.setOptions(a.options), this.hideTabs ? this.$nav.hide() : this.$nav.show()), this.renderHeader();
        switch (b) {
            case "info":
                this.renderInfoSection(!0);
                break;
            case "comments":
                this.renderCommentsSection(!this.hideConnectButton);
                break;
            case "connections":
                this.renderConnectionsSection(!0)
        }
        this.open()
    }, e.prototype.wire = function() {
        var b = this;
        this.$nav.on("click", "a", function(c) {
            var d = a(c.target).closest("a").attr("class");
            c.preventDefault(), b.switchSection(d)
        }), this.$container.on("click", ".connections .pager", function(c) {
            var d = a(c.target).closest(".pager"),
                e = d.data("next-start"),
                f = 50,
                g = b.getEntity();
            e > -1 && b.renderSection({
                section: "connections",
                entityKey: g.entityKey,
                start: e,
                max: f,
                paging: !0
            })
        }), a("body").on("click", function(b) {
            !a(b.target).closest("#rightRail, #footer").length && e().closeOnClick && e().$container.hasClass("open") && e().close()
        }), setTimeout(function() {
            b.$container.css("visibility", "visible")
        }, 500), a(window).resize(function() {
            b.$container.hasClass("open") && b.resize()
        })
    }, e.prototype.info = function(a) {
        this.render(a, "info")
    }, e.prototype.comments = function(a) {
        this.render(a, "comments")
    }, e.prototype.connections = function(a) {
        this.render(a, "connections")
    }, e.prototype.canShow = function() {
        var a = window.location.search.substring(1);
        return a.indexOf(config.urls.noRail) === -1
    }, comm.listen("rightRail.instance", function(a) {
        a(e())
    }, !0), comm.listen("rightRail.info", function(a) {
        e().info(a)
    }, !0), comm.listen("rightRail.comments", function(a) {
        e().comments(a)
    }, !0), comm.listen("rightRail.connections", function(a) {
        e().connections(a)
    }, !0), comm.listen("rightRail.hide", function() {
        e().close()
    }, !0), comm.listen("rightRail.show", function() {
        e().open()
    }, !0), comm.listen("spaceway.page.loading", function() {
        e().close()
    }, !0), comm.listen("page.esc", function() {
        e().escapeHandler()
    }, !0)
})(jQuery, window.Myspace = window.Myspace || {});
var Myspace = Myspace || {};
(function(a) {
    function b(a) {
        function g() {
            b.addClass("active")
        }

        function h() {
            b.removeClass("active")
        }

        function i(a) {
            c.addClass("loading white");
            var g = {
                entityKey: d
            };
            e(b, g, f, function(b) {
                c.removeClass("loading white"), a && a()
            })
        }
        var b = a.find(".likes"),
            c = b.find("> div"),
            d = a.data("likesEntityKey"),
            f = "/ajax/rightRail/likes";
        return {
            show: g,
            hide: h,
            fetch: i
        }
    }

    function c(a) {
        function h() {
            b.addClass("active")
        }

        function i() {
            b.removeClass("active")
        }

        function j(a) {
            c.addClass("loading");
            var h = {
                entityKey: d,
                start: g
            };
            e(b, h, f, function(b) {
                g += 20, c.removeClass("loading"), a && a()
            })
        }
        var b = a.find(".connects"),
            c = b.find("> div"),
            d = a.data("connectsEntityKey"),
            f = "/ajax/rightRail/connects",
            g = 0;
        return {
            show: h,
            hide: i,
            fetch: j
        }
    }

    function d(b, c) {
        function j() {
            e.addClass("active")
        }

        function k() {
            e.removeClass("active")
        }

        function l() {
            i = new Myspace.CommentsControl(e.find(".commentsControl"), e.find("> div")), $addComment = e.find(".addComment .textarea"), h || (n(), p()), e.find("header").on("click", "a.addAComment", function() {
                var c = a(this);
                $addComment.focus(), b.scrollTop(b.prop("scrollHeight"))
            })
        }

        function m(b) {
            a.ajax({
                url: "/ajax/rightRail/commentsControl",
                type: "POST",
                data: {
                    entityKey: f
                }
            }).done(function(a) {
                e.find("div").html(a.html), b && b()
            })
        }

        function n() {
            g || (g = b.closest(".photoRailContainer,.videoRailContainer")), g.length && b.toggleClass("positioned", o(g))
        }

        function o(a) {
            return a.length ? a[0].scrollHeight > a.height() : !1
        }

        function p() {
            a(window).resize(function(a) {
                d && clearTimeout(d), d = setTimeout(function() {
                    q(), n()
                }, 100)
            })
        }

        function q() {
            if (!g || !g.length) g = b.closest(".photoRailContainer,.videoRailContainer").first();
            if (o(g)) {
                var a = g.prop("scrollHeight");
                g.scrollTop(a)
            }
        }

        function r(a, c) {
            if (a === b.attr("data-comments-entity-key")) {
                var d = b.find('a[data-view="comments"] > span'),
                    e = parseInt(d.text(), 10) || 0;
                d.text(Math.max(e + c, 0))
            }
        }

        function s() {
            i.submitComment()
        }
        var d, e = b.children(".comments"),
            f = b.data("commentsEntityKey"),
            g, h = c.isStream,
            i;
        return comm.listen("comment.added", function(a) {
            h || q(), r(a.entityKey, 1)
        }, !0), comm.listen("comment.removed", function(a) {
            r(a.entityKey, -1)
        }, !0), {
            show: j,
            hide: k,
            fetch: m,
            wire: l,
            submit: s
        }
    }

    function e(b, c, d, e) {
        var f = b.find("ol");
        a.ajax({
            url: d,
            type: "POST",
            data: c
        }).done(function(a) {
            f.append(a.html), e && e(a)
        })
    }
    Myspace.RR = function(e, f) {
        function m(a, b) {
            if (j.active !== a) {
                var c = j[a];
                j.active && j[j.active].hide(), j.active = a, c ? (c.show(), b && b()) : (n(), c = j[a], c.fetch(function() {
                    c.wire && c.wire(), b && b()
                }), c.show())
            }
        }

        function n() {
            switch (j.active) {
                case "comments":
                    j.comments = new d(g, {
                        isStream: i
                    }), j.comments.wire();
                    break;
                case "connects":
                    j.connects = new c(g);
                    break;
                case "likes":
                    j.likes = new b(g)
            }
        }
        var g = a(e),
            h = g.find("> header"),
            f = f || {},
            i = f.isStream || !1,
            j = {},
            k, l = !1;
        g.scroll(function(b) {
            if (a("a[data-view=connects]").attr("class") === "active") {
                var c = g.scrollTop(),
                    d = g[0].scrollHeight - g.height();
                c / d > .7 && l === !1 && (l = !0, view = j[j.active], view.fetch(function() {
                    l = !1
                }))
            }
        }), a.each(g.children("section"), function(b, c) {
            var d = a(c),
                e = d.attr("class"),
                f = e.match(/(likes|connects|comments)/)[0];
            !j.active && e.indexOf("active") !== -1 && (j.active = f)
        }), h.on("click", "a", function() {
            var b = a(this);
            h.find("a").removeClass("active"), b.addClass("active"), b.data("view") && m(b.data("view"))
        }), n(), this.show = m, this.submitComment = function() {
            j && j.comments && a.isFunction(j.comments.submit) && j.comments.submit()
        }
    }, comm.listen("rr.render", function(b) {
        a.ajax({
            url: "/ajax/rightRail",
            type: "POST",
            data: b
        }).done(function(a) {
            b.cb && b.cb(a)
        })
    }, !0)
})(jQuery);

function Tracking(a, b, c, d) {
    return !a && !b ? null : {
        category: a,
        action: b,
        label: c,
        value: d
    }
}(function(a) {
    comm.listen("track", function(a) {
        if (a && a.category && a.action) {
            var b = ["_trackEvent", a.category, a.action, a.label, a.value];
            typeof a.noninteraction != "undefined" && (b[b.length] = !0), _gaq.push(b)
        }
    }, !0)
})(jQuery);
comm.listen("report>song", function(a) {
    var b = objectify($('.playBtn[data-uid="' + a.uid + '"]')),
        c = [];
    for (var d in b) c.push(d + ":" + b[d]);
    var e = Myspace.Confirm({
        text: "What's wrong with " + b.title + " by " + b.artistName + '? <textarea id="reportSongMessage"></textarea><pre>' + c.join("<br>") + "</pre>",
        no: {
            text: "Cancel"
        },
        yes: {
            text: "Send Report",
            onClick: function() {
                b.message = $("#reportSongMessage")[0].value, b.profileId = context.profileId, b.username = context.username, b.pfc = context.pfc, b.url = location.href, b.trackingId = context.uuid, console.log(b), $.save({
                    url: "/ajax/report/song",
                    data: b
                })
            }
        },
        beforeShow: function(a) {
            a.$root.width(660)
        }
    });
    $("#confirmDialog pre").css({
        textAlign: "left",
        fontSize: 9
    })
}, !0);
(function(a) {
    function c(c) {
        var d = c.id,
            e = document.getElementById(d),
            f, g, h, i;
        if (!c.locationId) {
            var j = (context.ads.adCalls || []).filter(function(a) {
                return a.id == d
            });
            c = j.length && j[0];
            if (!c) return
        }
        if (c.format != "img" && c.format != "js" && !e) return;
        f = b[d], f && (g = c.refreshDelay ? c.refreshDelay * 1e3 : 2e3, !(+(new Date) - f < g)), h = document.location.protocol + "//" + c.subdomain + ".vindicosuite.com/", h += c.subdomain == "x2" ? "imp/" : "";
        if (!c.locationId) return;
        h += "?l=" + c.locationId + "&sz=" + c.size;
        var k = c.querystring || context.ads.querystring;
        k && (h += "&" + k), h += "&rnd=" + Math.floor(Math.random() * 1e8);
        if (c.format == "img")(new Image).src = h + "&t=i";
        else if (c.format == "js") {
            var l = encodeURIComponent(document.location),
                m = encodeURIComponent(document.referrer),
                n = document.createElement("script");
            n.src = h + "&wr=j&t=j&u=" + l + "&r=" + m, a("#wrap")[0].appendChild(n)
        } else {
            i = c.size.split("x");
            var o = c.dynamicSize ? "" : ' style="width:' + i[0] + "px;height:" + i[1] + 'px;"';
            e.innerHTML = "<iframe" + o + ' frameborder="0" scrolling="no" allowTransparency="true" src="' + h + '&t=h"></iframe>'
        }
        b[d] = +(new Date)
    }

    function d(a) {
        var b = document.location.protocol + "//" + a.subdomain + ".vindicosuite.com/mpp/?y=2&t=i&tpr=0&spd=1";
        a.pixelId && (b += "&pixid=" + a.pixelId);
        if (!a.targetingDisabled) {
            var c = a.querystring || context.ads.querystring;
            c && (b += "&" + c)
        }
        b += "&rnd=" + Math.floor(Math.random() * 1e8), (new Image).src = b
    }

    function e(a, b, c) {
        var d = a - b;
        return d < 0 ? 0 : d > c ? c : d
    }

    function f(a, b, c, d) {
        var e = a + b - c;
        return e > d ? d : e
    }

    function g() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            x: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            y: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        }
    }

    function h(a) {
        if (a.length === 0) return 0;
        var b = g(),
            c = a.offset(),
            d, h, i, j;
        return c.height = a.height(), c.width = a.width(), c.height === 0 || c.width === 0 ? 0 : (d = e(b.y, c.top, c.height), h = f(b.y, b.height, c.top, c.height), i = e(b.x, c.left, c.width), j = f(b.x, b.width, c.left, c.width), (h - d) / c.height * ((j - i) / c.width))
    }

    function i() {
        function e(a) {
            setTimeout(function() {
                b && (c(a), e(a))
            }, a.refreshInterval * 1e3)
        }
        var b = !1,
            d = [];
        this.startAutoRefresh = function(a) {
            b = !0, c(a), e(a)
        }, this.addActionRefresh = function(a) {
            d.push(a)
        }, this.actionRefresh = function() {
            a.each(d, function(a, b) {
                c(b)
            })
        }, this.clear = function() {
            b = !1, d = []
        }
    }

    function j() {
        if (!context.ads) return;
        var b = context.ads.adCalls || [],
            e = context.ads.pixels || [];
        a.each(b, function(a, b) {
            b.actionRefresh && adRefresher.addActionRefresh(b), b.refreshInterval > 0 ? adRefresher.startAutoRefresh(b) : b.defer || c(b)
        }), a.each(e, function(a, b) {
            d(b)
        })
    }

    function k() {
        b = {}, adRefresher.clear(), context.ads = {}
    }
    var b = {};
    window.adRefresher = new i, comm.listen("spaceway.page.beforeCleanup", k, !0), comm.listen("spaceway.page.complete", j, !0), comm.listen("ads.loadPixel", d, !0), comm.listen("ads.loadAd", c, !0), a(window).ready(function() {
        j()
    }), comm.listen("ads.contenttracker", function(b) {
        b.entityKey && a.ajax({
            url: "/ajax/adcontenttracker",
            data: {
                entityKey: b.entityKey
            },
            type: "POST",
            success: function(b) {
                b.pixel && a("#wrap").append(b.pixel)
            }
        })
    }, !0)
})(window.jQuery);
var spaceway = spaceway || {};
spaceway.logger = function() {
    function f(a, b) {
        return $("<style type='text/css'>" + a + "</style>")[b ? "prependTo" : "appendTo"]("head")[0]
    }

    function g() {
        if (queryString.dockedLogger) f('.logger { z-index: 1000000000; overflow:scroll; color:#fff; white-space:nowrap; position:fixed; top:0; left:0; background-color:#000; width:30%; height:100%; font-size:14px; font-family:"Courier New"; } .logger a:link { color:inherit; text-decoration:none; } .logger .success { color:lime; } .logger .info { color:cyan; } .logger .warn { color:magenta; } .logger .error { color:red; }').className = "spaceway", b = document.createElement("div"), document.body.appendChild(b);
        else if (!$("html.windows").length) {
            var a = window.open("", "logger", "width=300,height=" + (window.screen.availHeight || 1e3) + ",scrollbars=yes");
            if (a == null || a == undefined) return;
            a.moveTo(0, 0), a.document.write('<!doctype html><html><head><script type="text/javascript">var comm = window.opener.jQuery.comm;</script><style>body, .logger { color:#fff; background-color:#000; white-space:nowrap; width:100%; font-size:14px; font-family:"Courier New"; } a:link { color:inherit; text-decoration:none; } .success { color:lime; } .info { color:cyan; } .warn { color:magenta; } .error { color:red; }</style></head><body><div><input type="text" id="url"><button onclick="comm.send(\'location.href\', document.getElementById(\'url\').value);">Navigate</button></div><div id="log"></div></body></html>'), a.document.close(), b = a.document.getElementById("log")
        } else spaceway.logger.log = function(a, b) {
            console.log(a)
        };
        b && (b.className = "logger")
    }

    function h(a, f) {
        if (!b) return;
        var g = "";
        if (c !== a) {
            var h = document.createElement("p");
            try {
                h.innerHTML = g + a
            } catch (i) {}
            h.setAttribute("class", f), c = a, d = h, e = 1;
            if ($("html.windows").length) try {
                jQuery(b).prepend(h.outerHTML)
            } catch (i) {
                b.innerHTML = h.innerHTML + b.innerHTML.substring(0)
            } else b.insertBefore(h, b.firstChild)
        } else d.innerHTML = g + c + " - x " + ++e;
        return h
    }
    var a = window,
        b, c, d, e = 0;
    return {
        log: h,
        create: g
    }
};
var spaceway = spaceway || {};
spaceway.transacter = function(a, b) {
    function d(a, b) {
        c.push({
            work: a,
            name: b
        })
    }

    function e() {
        if (!c || !c.length) return;
        var a = c[0];
        c.splice(0, 1), a.done = function(b) {
            a.success = b, g(a)
        }, a.work(a)
    }

    function f() {
        a()
    }

    function g(a) {
        a.success || (b("work item failed: " + a.name), f()), window.setTimeout(function() {
            e()
        }, 0)
    }

    function h() {
        e()
    }
    var c = [];
    return {
        add: d,
        execute: h
    }
};
var config = config || {
        staticContentBase: "/"
    },
    beacon = {
        qs: ""
    };
spaceway.enabled = !0, comm.listen("location.href", function(a) {
        var b = spaceway.sendRequest,
            c = spaceway.pushState;
        typeof a == "string" ? b && a.indexOf("http") == -1 ? b(a) : top.location.href = a : c && typeof a == "object" && a.hasOwnProperty("url") && c(a.url, a)
    }, !0),
    function(a, b) {
        function W(a, b) {
            var c = z[b];
            ob(a + b), X(b || u, null, !0);
            if (c && c.hasOwnProperty("loadState") && c.loadState(b, c, v)) {
                sb("calling overridden loadState function");
                return
            }
            Y(b || u, !0)
        }

        function X(a, b, c, d) {
            a = a.replace(t, ""), b && (b.url = b.url.replace(t, ""));
            if (!c && b && (p.length > 0 || b.go)) {
                b.go && window.history.go(b.go), delete b.go;
                if (v == b.url) return X(a, b);
                p.push(b), qb("adding pending state change for: " + a);
                return
            }
            w = v, v = a, window.queryString = a.indexOf("?") >= 0 ? a.split("?")[1].parseNameValuePairs() : {}, H++, x = "beam" + v.split("?")[0].replace(/(\/|\.)/igm, "-");
            if (c && p.length == 0) return;
            b && (z[a] = b), qb((b && b.replaceState ? "replace" : "push") + " state " + a), (d || b && b.replaceState) && window.history.replaceState ? window.history.replaceState(a, document.title, a) : window.history.pushState ? window.history.pushState(a, document.title, a) : window.location.hash = "!" + a
        }

        function Y(b, c, d) {
            D && F && (F.aborted = !0, F.abort(), rb("aborted " + v), mb(!1)), _start = new Date, b = b.replace(t, ""), ub(), ob("beaming up " + b), mb(!0), D = !0, P.broadcast("page.loading", b), I = spaceway.transacter(function() {
                nb()
            }, {
                log: ob
            }), I.context = {
                url: b,
                fromPopState: c,
                isRedirect: d
            };
            var e = null;
            L[b] && (e = JSON.parse(L[b])) && e.cache && e.cache.expiration > +(new Date) ? (J || I.add(function(a) {
                bb(), a.done(!0)
            }), sb("cached response for " + b), $(b, e, !1, !0)) : (U.xhrs[b] ? (sb("waiting for pending request for: " + b), F = U.xhrs[b]) : F = Z(b), J || I.add(function(a) {
                bb(), a.done(!0)
            })), I.execute(), a("> a", S).removeClass("selected").filter('a[href="' + b.replace("'", "%27") + '"]').addClass("selected")
        }

        function Z(b, c) {
            return a.ajax({
                url: b,
                type: "POST",
                headers: {
                    Spaceway: "0111001001101111011000100110001001111001"
                },
                success: function(a, d, e) {
                    F === e && (c = !1), c || (D = !1);
                    if (e.aborted) return;
                    B && console.log(a), $(b, a, c)
                },
                error: function(a, b, d) {
                    F === a && (c = !1), c || (D = !1);
                    if (a.aborted) return;
                    rb(d), B && (e.innerHTML = a.responseText, console.log(a), console.log(b), console.log(d)), P.broadcast("trace", {
                        message: "beam error",
                        error: d,
                        desc: b,
                        status: a.status,
                        statusText: a.statusText
                    });
                    if (c) return;
                    nb()
                },
                dataType: "json"
            })
        }

        function $(a, b, c, d) {
            if (b && b.redirect) {
                qb("redirect! " + a + " to " + b.redirect), Y(b.redirect, null, !0);
                return
            }
            if (!b || b.status && b.status === "Error" || !b.html && !b.subnav) {
                nb();
                return
            }!d && b.cache && b.cache.expirationSeconds > 0 && (b.cache.expiration = +(new Date(+(new Date) + b.cache.expirationSeconds * 1e3)), zb(a, b) ? (qb("caching " + a + " for " + b.cache.expirationSeconds + " seconds"), U.add(a, b.cache.expirationSeconds, b.cache.canKeepFresh)) : rb("unable to cache " + a + ". cache is full"));
            if (c) return;
            sb("processing page..."), P.broadcast("page.processing", b);
            var e = _start;
            _start = new Date, _start.servertime = _start - e, _start.onload = _start - 1, _(b), F = null
        }

        function _(d) {
            s = d, lb(), I.add(function(a) {
                v = I.context.url, x = "beam" + I.context.url.split("?")[0].replace(/(\/|\.)/igm, "-"), a.done(!0)
            }), I.add(function(a) {
                _start.BeforeCSS = +(new Date), a.done(!0)
            }), hb(), I.add(function(a) {
                _start.AfterCSS = +(new Date), a.done(!0)
            }), I.add(function(a) {
                window.setTimeout(function() {
                    a.done(!0)
                }, 25)
            }), I.add(function(d) {
                ob("before content innerHTML"), Array.forEach(k, function(a) {
                    a.disabled = !0
                }), b.setAttribute("class", h + " " + x), g.attr("class", s.bodyClass.trim()), a(c).attr("data-uid", s.context.uuid), P.broadcast("body.class"), e.innerHTML = s.html, f.add(g).scrollTop(0), X(I.context.url, {
                    url: I.context.url
                }, I.context.fromPopState, I.context.isRedirect), a.merge(l, document.querySelectorAll("#wrap > style")), a("#header, #sidebar").remove(), s.sidebar && a(s.sidebar).insertBefore(e), s.subnav && a(s.subnav).insertBefore(e);
                if (s.templates)
                    for (var i in s.templates) templates[i] = s.templates[i];
                y && (window.location.hash = y, y = null), document.title = s.title || "Myspace", document.write = a.noop, comm.send("page.changed", a(e)), mb(!1), d.done(!0)
            }, "innerHTML"), J && I.add(function(a) {
                bb(), a.done(!0)
            }), I.add(function(a) {
                k = k.concat(l), l = [], _start.BeforeJS = +(new Date), window.context = s.context, P.broadcast("page.trackers"), _gaq.push(["_trackPageview", v]), window.COMSCORE && COMSCORE.beacon && s.context.features.isComScoreEnabled && COMSCORE.beacon({
                    c1: "2",
                    c2: "4000002"
                }), a.done(!0)
            }, "contexts, json resources, gaq"), C && jb(), I.add(function(a) {
                _start.Ready = +(new Date), yb(), P.broadcast("page.complete"), _start.AfterReady = +(new Date), sb("page load complete."), ub(), T.send(), a.done(!0)
            }, "calling page ready events"), I.execute()
        }

        function ab(a, b) {
            var c = jQuery._data(a),
                d, e, f, g;
            if (c) {
                d = c.events;
                for (e in d) {
                    f = d[e], skip = 0;
                    while (g = f[f.length - skip - 1]) {
                        if (b && /beforeunload|hashchange|popstate|storage/.test(g.type)) {
                            skip++;
                            continue
                        }
                        jQuery(a).unbind(g.type, g.handler)
                    }
                }
            }
            a._events && delete a._events.load
        }

        function bb() {
            qb("cleaning up"), P.broadcast("page.beforeCleanup"), comm._clearListeners(), ab(window, 1), ab(document), a.isReady = !1, J || (a(e).empty(), a("#header, #sidebar").remove()), g.add(c).add(d).attr("style", ""), a("> :not(div#player):not(object):not(div#container):not(div#dialogCover):not(#lightboxCover):not(.dialog):not(.lightbox):not(footer):not(script):not(iframe):not(article#loginDialog):not(article#signupDialog):not(div.logger):not(#LocalConnection):not(#popover):not(#myspaceTip):not(#fb-root):not(#webcam)", document.body).remove(), Array.forEach(j, V), Array.forEach(k, V), j.length = k.length = 0, a('link[type="text/css"], style:not(.spaceway)').each(function(a, b) {
                var c = !!b.href;
                if (l.indexOf(b) >= 0) return;
                if (!c || !n[(b.href.indexOf("://") > -1 ? "" : t) + b.href]) ob("removing " + (c ? "linked style" : "style node") + " that was not tracked" + (c ? ": " + b.href : "")), V(b);
                B && !c && console.log(b)
            });
            if (!spaceway.washer) return;
            var b = jQuery.grep(window.delta(), function(a, b) {
                return !cb[a]
            });
            queryString.deltas && console.log(b), jQuery.each(b, function(a, b) {
                try {
                    if (delete window[b]) return;
                    queryString.deltas && console.log("window['" + b + "'] is marked DontDelete. Assigning undefined instead."), window[b] = undefined
                } catch (c) {
                    return
                }
            })
        }

        function db(b) {
            return a.cors(b, {
                timeout: +(queryString.corsTimeout || 3e3)
            })
        }

        function eb(b, c) {
            return a("<style type='text/css'>" + b + "</style>")[c ? "prependTo" : "appendTo"]("head")[0]
        }

        function fb(a, b) {
            var c = eb(b);
            c.disabled = !0, a && (c.setAttribute("data-spaceway-src", a), c.src = a);
            if (J && c.sheet.deleteRule) {
                var d = c.sheet.cssRules;
                for (var e = 0; e < d.length; e++) try {
                    if (d[e].media) {
                        var f = "@media ",
                            g = "";
                        if (d[e].media.mediaText) f += d[e].media.mediaText;
                        else
                            for (var h = 0; h < d[e].media.length; h++) f += d[e].media[h] + " ";
                        var i = "." + x;
                        for (var j = 0; j < d[e].cssRules.length; j++) {
                            var k = d[e].cssRules[j],
                                m = i + " " + k.selectorText.replace(/,/igm, ", " + i).replace(new RegExp(i + " html", "g"), i);
                            g += k.cssText.replace(k.selectorText, m)
                        }
                        c.sheet.deleteRule(e), c.sheet.insertRule(f + "{" + g + "}", e);
                        continue
                    }
                    if (!d[e].style) continue;
                    var n = d[e].selectorText,
                        o = d[e].style.cssText;
                    if (!n || !o) continue;
                    var p = "." + x + (n.startsWith("html.") ? n.substr(4) : " " + n).replace(/,/igm, ", ." + x) + "{" + o + "}";
                    c.sheet.deleteRule(e), c.sheet.insertRule(p, e)
                } catch (q) {
                    console.log(c.sheet), console.log(q.message), rb(a + " - " + e + " - " + n + " - " + o + " - " + q)
                }
            }
            c.disabled = !1, l.push(c)
        }

        function gb(a, b) {
            pb("css: " + a + " - linked.");
            var c = document.createElement("link");
            c.type = "text/css", c.rel = "stylesheet", c.href = a, q.appendChild(c), l.push(c), b.done(!0)
        }

        function hb() {
            Array.forEach(s.styles, function(a) {
                if (a.href) {
                    var b = a.href.indexOf("://") > -1,
                        c = a.href.indexOf("://") + 3,
                        d;
                    if (n[(b ? "" : t) + a.href]) return;
                    d = b ? a.href.substr(c, a.href.indexOf("/", c) - c) : window.location.host, !queryString.cors && Array.find(K, function(a) {
                        return d.endsWith(a)
                    }) ? I.add(function(b) {
                        var c = pb("css with cors: " + a.href) || {};
                        L[a.href] ? (c.innerHTML += " - cached.", fb(a.href, L[a.href]), b.done(!0)) : db(a.href).done(function(a, d) {
                            c.innerHTML += " - done.", window.console && console.log("done"), config.staticContentBase !== "http://x.myspacecdn.com" && (d = d.replace(/http:\/\/x.myspacecdn.com\/modules\//igm, "/modules/")), d = d.replace(/\/modules\//igm, config.staticContentBase + "/modules/"), fb(a, d), zb(a, d), b.done(!0)
                        }).fail(function() {
                            B && (c.innerHTML += ' - <span class="error">failed!' + a.href + "</span>"), window.console && console.log("css cors request failed! - " + a.href), gb(a.href, b)
                        })
                    }, "css cors get: " + a.href) : I.add(function(b) {
                        gb(a.href, b)
                    })
                } else a.text && I.add(function(b) {
                    pb("adding style literal"), fb(null, a.text), b.done(!0)
                })
            })
        }

        function ib(a, b) {
            try {
                var c = document.createElement("script");
                a && !b ? c.src = a : b && (a && c.setAttribute("data-spaceway-src", a), b = (a ? "/* " + a + " */" : "") + "try{ " + b + " } catch(e){ console.log(e.stack || e); }", c.appendChild(document.createTextNode(b))), q.appendChild(c), j.push(c)
            } catch (d) {
                rb("error executing script" + (a ? ": " + a : " literal <code>" + b + "</code>") + " - " + d)
            }
        }

        function jb() {
            Array.forEach(s.scripts, function(a) {
                var b;
                if (a.src) {
                    var c = a.src.indexOf("://") > -1,
                        d = a.src.indexOf("://") + 3,
                        e;
                    if (m[(c ? "" : t) + a.src]) return;
                    e = c ? a.src.substr(d, a.src.indexOf("/", d) - d) : window.location.host, !queryString.cors && Array.find(K, function(a) {
                        return e.endsWith(a)
                    }) ? I.add(function(b) {
                        var c = pb("js with cors: " + a.src) || {};
                        L[a.src] ? (c.innerHTML += " - cached.", ib(a.src, L[a.src]), b.done(!0)) : db(a.src).done(function(a, d) {
                            c.innerHTML += " - done.", ib(a, d), zb(a, d), b.done(!0)
                        }).fail(function() {
                            c.innerHTML += ' - <span class="error">failed!</span>', ib(a.src), window.console && console.log(' - <span class="error">failed!' + a.src + "</span>"), c.innerHTML += " - linked.", b.done(!0)
                        })
                    }, "js cors get: " + a.src) : I.add(function(b) {
                        var c = pb("js external: " + a.src) || {};
                        ib(a.src), c.innerHTML += " - linked.", b.done(!0)
                    })
                } else a.text && I.add(function(b) {
                    pb("inserting js literal"), ib(null, a.text), b.done(!0)
                }, "js literal")
            })
        }

        function kb(a) {
            if (!a._events || !a._events.load) return;
            for (var b = 0; b < a._events.load.length; b++) a._events.load[b].handler(new Sys.UI.DomEvent({}))
        }

        function lb() {
            window.clearTimeout(M), M = window.setTimeout(function() {
                nb()
            }, O)
        }

        function mb(c) {
            E && E.remove();
            if (!c || N) {
                g.removeClass("beaming"), b.style.cursor = "", window.clearInterval(N), N = 0, window.clearTimeout(M), M = 0, G = null, D = !1;
                return
            }
            D = !0, E = a('<iframe src="/loading" height="0" width="0"></iframe>').appendTo(g), g.addClass("beaming"), tb(), b.style.cursor = "progress", N = window.setInterval(function() {
                tb()
            }, 500), M = window.setTimeout(function() {
                nb()
            }, O)
        }

        function nb() {
            mb(!1);
            if (B) {
                rb("cancelling reboot while debugger is open");
                return
            }
            rb("rebooting spaceway..."), window.location.href = v ? v : window.location.href
        }

        function ob(a, b) {
            return i.log(a, b)
        }

        function pb(a) {
            return ob(a, "info")
        }

        function qb(a) {
            return ob(a, "warn")
        }

        function rb(a) {
            return ob(a, "error")
        }

        function sb(a) {
            return ob(a, "success")
        }

        function tb() {
            G ? G.innerHTML += "." : G = qb("waiting...")
        }

        function ub() {
            ob("<hr>")
        }

        function vb() {
            ub(), a("link[rel=stylesheet]").each(function() {
                var a = this.href.replace("://", "").substr(this.href.replace("://", "").indexOf("/"));
                this.href.toLowerCase().indexOf("/common/css/") != -1 ? (n[this.href] = !0, ob("common styles: " + a)) : k.push(this)
            })
        }

        function wb() {
            ub(), a("script[src]").each(function() {
                var a = this.src.replace("://", "").substr(this.src.replace("://", "").indexOf("/"));
                R.test(this.src) ? (m[(this.src.startsWith("http") ? "" : config.staticContentBase) + this.src] = !0, ob("common script: " + a)) : (j.push(this), sb("script: " + a))
            })
        }

        function xb(b) {
            B = b, B && (i.create(), a("#globalNav, #globalHeader").css({
                "background-color": "#39f"
            }))
        }

        function yb() {
            window.Sys && Sys.Application.initialize(), kb(window), kb(document);
            try {
                a.ready(), comm.send("page.changed", a(e))
            } catch (b) {
                rb(b)
            }
        }

        function zb(a, b) {
            try {
                return L[a] = typeof b == "object" ? JSON.stringify(b) : b, !0
            } catch (c) {
                try {
                    L.clear()
                } catch (d) {}
            }
            return !1
        }
        sessionStorage && queryString.spaceway && (sessionStorage.spaceway = queryString.spaceway);
        if (!spaceway || !spaceway.enabled || sessionStorage && sessionStorage.spaceway === "off" || !window.history.pushState) return;
        var c = a("#wrap")[0],
            d = c,
            e = c,
            f = a(b),
            g = a(document.body),
            h, i = new spaceway.logger,
            j = [],
            k = [],
            l = [],
            m = {},
            n = {},
            o = [],
            p = [],
            q = a("head")[0],
            r = a("title"),
            s, t = window.location.origin,
            u = window.location.href.replace(t, ""),
            v, w, x, y, z = {},
            A = typeof XDomainRequest != "undefined" || typeof XMLHttpRequest != "undefined",
            B = queryString["debugger"],
            C = !queryString.js,
            D, E, F, G, H = 0,
            I, J = !0,
            K = ["www.myspace.com", ".myspacecdn.com", window.location.host],
            L = window.sessionStorage,
            M = 0,
            N = 0,
            O = spaceway.timeout || 5e4,
            P = comm.own("spaceway", {}),
            Q = /^([\w:\/.]+(myspace|las1-app001.poc.myspacecdn)\.(com|dev|local)(?::?\d*))(\/?[^#]*)#?(.*)/i,
            R = /\/(ad_wrapper|msglobal|wim)/i,
            S = a("#nav").append('<span class="spacewayLoader">Loading</span>'),
            T = {
                send: function() {
                    return;
                    var a, b
                }
            },
            U = {
                items: {},
                xhrs: {},
                running: !1,
                debug: !!queryString.primerDebug,
                start: function() {
                    if (!spaceway.primer) return;
                    U.running = !0;
                    for (var a = 0; a < spaceway.prime.length; a++) U.add(spaceway.prime[a], -1, !0);
                    window.setTimeout(function() {
                        if (!U.running) return;
                        for (var a in U.items) {
                            var b = U.items[a];
                            if (b.expiration < new Date) {
                                var c;
                                U.debug && (c = qb("expired content " + b.url)), delete U.items[b.url], L.removeItem(b.url), b.keepFresh && (U.debug && c && (c.innerHTML += " - refetching"), U.xhrs[b.url] = Z(b.url, !0))
                            }
                        }
                        U.debug && qb("checking primer"), window.setTimeout(arguments.callee, 1e3)
                    }, 1e3)
                },
                stop: function() {
                    U.running = !1
                },
                add: function(a, b, c) {
                    var d = {
                        url: a,
                        keepFresh: c,
                        expiration: new Date(+(new Date) + b * 1e3),
                        lastUpdated: new Date
                    };
                    U.items[a] = d, delete U.xhrs[a], U.debug && sb("adding to primer: " + JSON.stringify(d))
                }
            },
            V = function(a) {
                a.parentNode && a.parentNode.removeChild(a)
            };
        a(window).bind("hashchange", function() {
            var a = window.location.hash,
                b = a.substr(2);
            if (a.substr(0, 3) !== "#!/" || b === v) {
                qb("ignored hash changed:" + a);
                return
            }
            W("hash changed: ", b)
        }).bind("popstate", function(a) {
            var b = a.originalEvent.state;
            if (p.length > 0) {
                ob("received popstate with " + p.length + " pendingStateChanges");
                for (var c = 0; c < p.length; c++) {
                    var b = p[c];
                    X(b.url, b, !0)
                }
                p = [];
                return
            }
            if (b === v || !b) return;
            W("state popped: ", b)
        }), g.delegate('[href]:not([href^="#"]):not([href*="/signout"]):not([target]):not([href*="javascript:"])', "click", function(a) {
            if (context.disableSpaceway || a.altKey || a.ctrlKey || a.shiftKey || H >= (spaceway.rebootCount || 5e3)) {
                qb("ignoring click");
                return
            }
            var b = Q.exec(this.href);
            if (!b) {
                qb("last chance click, ignoring a[href=" + this.href + "]");
                return
            }
            var c = b[4],
                d = b[5];
            return sb('caught "a" click:' + c), d && (y = d), Y(c), !1
        });
        var cb = spaceway.whitelist = {
            _firebug: 1,
            _FirebugCommandLine: 1,
            loadFirebugConsole: 1,
            console: 1,
            _FirebugConsole: 1,
            get_overlay: 1,
            $q: 1,
            $get: 1,
            $find: 1,
            _events: 1,
            $removeHandler: 1,
            $clearHandlers: 1,
            $addHandlers: 1,
            $addHandler: 1,
            $create: 1,
            Sys: 1,
            Type: 1,
            queryString: 1,
            jQuery: 1,
            swfobject: 1,
            MySpaceClientContext: 1,
            MySpace: 1,
            MySpaceRes: 1,
            namespace: 1,
            SWFObject: 1,
            scomm: 1,
            Advertiser: 1,
            sm_wrapper: 1,
            adRefresher: 1,
            punymce: 1
        };
        cb[jQuery.expando] = 1, a.extend(spaceway, {
            ready: yb,
            debug: xb,
            sendRequest: Y,
            pushState: X,
            scripts: m,
            css: n,
            styles: k,
            response: function() {
                return s
            },
            logger: i,
            cache: L
        }), Object.defineProperty(spaceway, "href", {
            enumerable: !0,
            get: function() {
                return v || u
            },
            set: function(a) {
                Y(a)
            }
        }), Object.defineProperty(spaceway, "referrer", {
            enumerable: !0,
            get: function() {
                return H ? w || u : document.referrer
            }
        }), B && xb(!0), ob("spaceway initializing"), h = f.addClass("spaceway").attr("class"), U.start(), a(function() {
            return vb(), wb(), ob("spaceway ready"), P.broadcast("ready"), window.history.replaceState(u, document.title, u), !0
        }), comm.listen("page.idle", function(a) {
            if (a < 5) return;
            return U.stop(), !0
        })
    }(jQuery, document.documentElement);
(function(a, b, c, d) {
    var e = a(b);
    a.fn.lazyload = function(c) {
        function i() {
            var b = 0;
            f.each(function() {
                var c = a(this);
                if (h.skip_invisible && !c.is(":visible")) return;
                if (!a.abovethetop(this, h) && !a.leftofbegin(this, h))
                    if (!a.belowthefold(this, h) && !a.rightoffold(this, h)) c.trigger("appear"), b = 0;
                    else if (++b > h.failure_limit) return !1
            })
        }
        var f = this,
            g, h = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: b,
                data_attribute: "original",
                skip_invisible: !0,
                appear: null,
                load: null
            };
        return c && (d !== c.failurelimit && (c.failure_limit = c.failurelimit, delete c.failurelimit), d !== c.effectspeed && (c.effect_speed = c.effectspeed, delete c.effectspeed), a.extend(h, c)), g = h.container === d || h.container === b ? e : a(h.container), 0 === h.event.indexOf("scroll") && g.bind(h.event, function(a) {
            return i()
        }), this.each(function() {
            var b = this,
                c = a(b);
            b.loaded = !1, c.one("appear", function() {
                if (!this.loaded) {
                    if (h.appear) {
                        var d = f.length;
                        h.appear.call(b, d, h)
                    }
                    a("<img />").bind("load", function() {
                        c.hide().attr("src", c.data(h.data_attribute))[h.effect](h.effect_speed), b.loaded = !0;
                        var d = a.grep(f, function(a) {
                            return !a.loaded
                        });
                        f = a(d);
                        if (h.load) {
                            var e = f.length;
                            h.load.call(b, e, h)
                        }
                    }).attr("src", c.data(h.data_attribute))
                }
            }), 0 !== h.event.indexOf("scroll") && c.bind(h.event, function(a) {
                b.loaded || c.trigger("appear")
            })
        }), comm.listen("spaceway.page.complete", function() {
            i()
        }), e.unbind("resize").bind("resize", function(a) {
            i()
        }), /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(b) {
            b.originalEvent.persisted && f.each(function() {
                a(this).trigger("appear")
            })
        }), a(b).load(function() {
            i()
        }), this
    }, a.belowthefold = function(c, f) {
        var g;
        return f.container === d || f.container === b ? g = e.height() + e.scrollTop() : g = a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold
    }, a.rightoffold = function(c, f) {
        var g;
        return f.container === d || f.container === b ? g = e.width() + e.scrollLeft() : g = a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold
    }, a.abovethetop = function(c, f) {
        var g;
        return f.container === d || f.container === b ? g = e.scrollTop() : g = a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height()
    }, a.leftofbegin = function(c, f) {
        var g;
        return f.container === d || f.container === b ? g = e.scrollLeft() : g = a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width()
    }, a.inviewport = function(b, c) {
        return !a.rightoffold(b, c) && !a.leftofbegin(b, c) && !a.belowthefold(b, c) && !a.abovethetop(b, c)
    }, a.extend(a.expr[":"], {
        "below-the-fold": function(b) {
            return a.belowthefold(b, {
                threshold: 0
            })
        },
        "above-the-top": function(b) {
            return !a.belowthefold(b, {
                threshold: 0
            })
        },
        "right-of-screen": function(b) {
            return a.rightoffold(b, {
                threshold: 0
            })
        },
        "left-of-screen": function(b) {
            return !a.rightoffold(b, {
                threshold: 0
            })
        },
        "in-viewport": function(b) {
            return a.inviewport(b, {
                threshold: 0
            })
        },
        "above-the-fold": function(b) {
            return !a.belowthefold(b, {
                threshold: 0
            })
        },
        "right-of-fold": function(b) {
            return a.rightoffold(b, {
                threshold: 0
            })
        },
        "left-of-fold": function(b) {
            return !a.rightoffold(b, {
                threshold: 0
            })
        }
    })
})(jQuery, window, document);
(function(a) {
    comm.listen("text.limit", function(b) {
        var c = b.container,
            d = b.parent,
            e = b.lineHeight || 20,
            f = b.showLessLines || 1,
            g = b.enableScroll,
            h = b.clickCallBack,
            i = b.noBind,
            j = b.expandAtStart,
            k = e * f;
        c.find(".postText").each(function() {
            var b, c, f, l = a(this),
                m, n = d || l.parent(),
                o;
            n.removeClass("expanded showMore keep enablescroll"), b = this.scrollHeight, c = this.offsetHeight, f = b - c, o = g && b >= n[0].offsetHeight * .6, f > e ? (m = l.next(), n.addClass("showMore"), i || (f > k ? m.children("a").click(function() {
                var b = a(this),
                    c = d || b.parent().parent();
                c.hasClass("expanded") ? (c.hasClass("enablescroll") && c.scrollTop(0), c.removeClass("expanded"), b.text("Show more"), h && h(!1)) : (c.addClass("expanded keep"), b.text("Show less"), h && h(!0))
            }) : m.children("a").click(function() {
                var b = d || a(this).parent().parent();
                b.addClass("expanded"), h && h(!0)
            }), j && (n.addClass("expanded keep"), m.children("a").text("Show less")))) : f && f <= e && n.addClass("expanded"), o && n.addClass("enablescroll")
        })
    }, !0)
})(jQuery);
var Myspace = Myspace || {};
Myspace.MixCoverUploader = function(a) {
    function f(a) {
        c = a, c.playlist && (d = c.playlist.playlistId), b = new Myspace.LiteUploader({
            MEDIA_TYPE: e.MEDIA_TYPES.PLAYLIST,
            UPLOAD_BEGIN_HANDLER: c.uploadBegin,
            UPLOAD_ERROR_HANDLER: j,
            UPLOAD_COMPLETE_HANDLER: i,
            FILE_PROCESSED_SUCCESS_HANDLER: k,
            FILE_PROCESSED_ERROR_HANDLER: h,
            html: {
                filesInput: c.filesInput
            }
        })
    }

    function g(a, e) {
        a && (d = a), b.SetPostParams({
            playlistId: d,
            objectVersion: e ? e : c.playlist.objectVersion
        }), b.StartUpload()
    }

    function h(a, b, e) {
        var f = {};
        f.playlist = {
            playlistId: d
        }, c.executeSerial(f), c.fileProcessFailed(e.errorMessage)
    }

    function i(a, b, e) {
        var f = {};
        f.playlist = {
            playlistId: d,
            objectVersion: e.objectVersion
        }, c.executeSerial(f), c.uploadComplete(e), comm.send("mix.imageChanged", {
            playlistId: d,
            imgs: e.urls,
            objectVersion: e.objectVersion
        })
    }

    function j(a, b, e) {
        var f = {};
        f.playlist = {
            playlistId: d
        }, c.executeSerial(f), c.uploadError && c.uploadError(e.errorMessage, d)
    }

    function k(a, b) {
        if (!window.FileReader) c.autoUpload ? (c.showLoading(), l()) : c.fileAttached(a, b);
        else {
            var d = new FileReader;
            d.onload = function(a) {
                var b = new Image;
                b.src = a.target.result, b.onload = function() {
                    c.autoUpload ? (c.showPreview(a.target.result), l()) : (c.hideLoading(), c.showPreview(a.target.result))
                }
            }, d.readAsDataURL(a), c.showLoading()
        }
    }

    function l() {
        var a = {};
        a.playlistId = c.playlist.playlistId, a.objectVersion = c.playlist.objectVersion, a.changeImage = function(a) {
            g(null, a)
        }, comm.send("mix.changeImage", a)
    }
    var b, c, d, e = Myspace.Upload;
    return {
        init: f,
        startUpload: g
    }
}(jQuery);
(function() {
    $("body").on("click", function(a) {
        $(a.target).closest('a[href="/signout"]').length > 0 && comm.send("signout")
    })
})();
(function() {
    function d(a) {
        var b = {},
            c = "type,title,url,artistName,imageUrl,embedUrl".split(",");
        c.forEach(function(c) {
            a[c] && (b[c] = a[c])
        });
        switch (a.type) {
            case "song":
                b.queryString = "?play=1", b.size = "300x90", b.artistUrl = "/" + a.artistUsername;
                break;
            case "video":
                b.link = b.url = a.detailUrl, b.size = "480x270", b.resizable = !0, b.artistUrl = "/" + a.artistUsername, b.miniplayerUrl = a.embedUrl + "/js";
                break;
            case "album":
                b.link = b.url = a.albumUrl, b.size = "300x90", b.sizeOptions = {
                    "300x90": !0,
                    "300x423": !0,
                    "300x600": !0,
                    "600x300": !0
                }, b.artistUrl = "/" + a.artistUsername;
                break;
            case "mixtape":
                b.link = a.url, b.size = "300x600", b.artistName = a.owner, b.artistUrl = "/" + a.username, b.miniplayerUrl = b.embedUrl + "/videos/js"
        }
        return b.link = e(b), b.iframe = f(b), b.miniplayer = g(b), b
    }

    function e(b) {
        return (b.shortUrl || a + b.url) + (b.queryString || "")
    }

    function f(c) {
        var d = c.size.split("x");
        return context.features.isOffSiteEmbedsEnabled && b.replace("{width}", d[0]).replace("{height}", d[1]).replace("{embedUrl}", "//" + config.urls.embeddedPlayerDomain + c.embedUrl).replace("{title}", c.title).replace("{url}", a + c.url).replace("{artistName}", c.artistName).replace("{artistUrl}", a + c.artistUrl).replace("{host}", a)
    }

    function g(a) {
        return a.miniplayerUrl && c.replace("{miniplayerUrl}", "//" + config.urls.embeddedPlayerDomain + a.miniplayerUrl)
    }

    function h(b, c) {
        $.post("/ajax/shorten", {
            url: a + b.url
        }, function(a) {
            b.shortUrl = a, c()
        })
    }

    function i(a) {
        if (a.keyCode == 46 || a.keyCode == 8 || a.keyCode == 9 || a.keyCode == 27 || a.keyCode == 13 || a.keyCode == 65 && a.ctrlKey === !0 || a.keyCode >= 35 && a.keyCode <= 39) return;
        (a.shiftKey || (a.keyCode < 48 || a.keyCode > 57) && (a.keyCode < 96 || a.keyCode > 105)) && a.preventDefault()
    }
    var a = location.protocol + "//" + location.hostname,
        b = '<iframe width="{width}" height="{height}" src="{embedUrl}" frameborder="0" allowtransparency="true" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><p><a href="{url}">{title}</a> from <a href="{artistUrl}">{artistName}</a> on <a href="{host}">Myspace</a>.</p>',
        c = '<script src="{miniplayerUrl}"></script>';
    Myspace.LinkEmbedDialog = function(a) {
        function u(a, b, c) {
            var d = parseInt(a);
            return d > c ? c : d < b || !d ? b : d
        }

        function v(a, c) {
            r.val(a), s.val(c), b.size = a + "x" + c, x()
        }

        function w() {
            var a = e(b);
            m.val(a)
        }

        function x() {
            var a = f(b);
            n.val(a)
        }

        function y() {
            var a = g(b);
            o.val(a)
        }

        function z() {
            A(t), t.addClass("copied").tip("show")
        }

        function A(a) {
            l.not(a).removeClass("copied").tip("hide")
        }

        function B(a) {
            k.css("z-index", a)
        }
        var b = d(a),
            c = require("ejs").render(templates["common/views/_linkEmbedDialog"], {
                options: b
            }),
            j = new Myspace.genericDialog({
                id: "linkEmbedDialog",
                classes: b.type,
                html: c,
                buttons: null,
                onHide: function() {
                    B(""), A()
                }
            }),
            k = $("#dialogCover"),
            l = j.$root.find(".field"),
            m = j.$root.find(".link .field input"),
            n = j.$root.find(".embed .field input"),
            o = j.$root.find(".miniplayer .field input"),
            p = j.$root.find(".size label"),
            q = j.$root.find(".size input"),
            r = j.$root.find(".resizer .width input"),
            s = j.$root.find(".resizer .height input"),
            t;
        return B(5), h(b, w), j.$root.on("click", A), j.$root.find("input").blur(), p.each(function(a, b) {
            var c = $(b),
                d = c.siblings("input");
            c.tip({
                title: '<i class="preview-' + d.val() + '"><>',
                trigger: "hover",
                placement: "top",
                animation: !0,
                name: "layout-preview",
                allowHtml: !0
            })
        }), q.change(function() {
            b.size = q.filter(":checked").val(), b.iframe = f(b), n.val(b.iframe)
        }), r.on("keydown", i).on("change", function(a) {
            var b = u(r.val(), 480, 960),
                c = Math.round(b * 9 / 16);
            v(b, c)
        }), s.on("keydown", i).on("change", function(a) {
            var b = u(s.val(), 270, 540),
                c = Math.round(b * 16 / 9);
            v(c, b)
        }), comm.listen("dialog.showing", function() {
            j.hide()
        }), j
    }
})();
(function(a) {
    function e(b) {
        return a.ajax({
            url: "/ajax/media/details",
            type: "POST",
            data: {
                mediaEntityKey: b
            }
        })
    }
    if (Myspace.User.isLoggedIn) {
        var b = Myspace.User.authContext,
            c = b.action,
            d = b.object;
        if (c && d) switch (c.toLowerCase()) {
            case "connect":
                comm.send("connect.add", {
                    entityKey: d
                });
                break;
            case "play":
                e(d).done(function(a) {
                    comm.send("queue.play." + a.mediaType, a)
                })
        }
        Myspace.User.clearAuthContext()
    }
})(jQuery);
(function(a) {
    function b(a, b) {
        function d() {
            c = new Myspace.Dialog(a), a.find(".msSignIn").click(function() {
                return comm.send("login.show", {
                    context: {
                        action: "sharePrompt"
                    }
                }), c.hide(), !1
            }), a.find(".facebook").click(function() {
                var a = "https://www.facebook.com/sharer/sharer.php?u=";
                return window.open(a + location.protocol + "//" + location.hostname + b.shareUrl, "3rdPartySharer", "width=626,height=436"), !1
            }), a.find(".twitter").click(function() {
                return window.open("https://twitter.com/share?url=" + location.protocol + "//" + location.hostname + b.shareUrl, "3rdPartySharer", "width=626,height=436"), !1
            })
        }
        var c;
        return d(), {
            show: c.show,
            hide: c.hide
        }
    }
    var c = null,
        d = null;
    comm.listen("share.prompt", function(e) {
        if (!d) {
            var f = a("body");
            f.append(require("ejs").render(templates["areas/misc/views/shared/sharePrompt"], {})), d = f.find("#sharePrompt")
        }
        c = c || new b(d, e), c.show(e)
    }, !0)
})(jQuery);
(function(a) {
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    var b, c = function() {
        function A(a) {
            v.show(), navigator.getMedia({
                video: !0,
                audio: !1
            }, function(d) {
                q = d, navigator.mozGetUserMedia ? l.mozSrcObject = d : window.URL && window.URL.createObjectURL ? l.src = window.URL.createObjectURL(d) : l.src = d, k.bind("canplay", function() {
                    if (!l.videoWidth) {
                        if (++p === 10) return q.stop(), a(new Error("error getting camera feed"));
                        setTimeout(function() {
                            k.trigger("canplay")
                        }, 500);
                        return
                    }
                    v.hide(), r = l.videoWidth, s = l.videoHeight, m.width = r, m.height = s, n.translate(r, 0), n.scale(-1, 1), c.css({
                        width: r,
                        height: s
                    }), b.css({
                        "margin-left": -(r / 2),
                        "margin-top": -((b.height() + 78) / 2)
                    }).addClass("show"), k.unbind("canplay"), a(null)
                }), l.play()
            }, function(b) {
                var c;
                navigator.mozGetUserMedia ? b === "PERMISSION_DENIED" ? c = z.PERMISSION_DENIED : b === "NO_DEVICES_FOUND" && (c = z.DEVICE_NOT_FOUND) : navigator.webkitGetUserMedia ? b.name === "PERMISSION_DENIED" && (c = z.PERMISSION_DENIED) : b.PERMISSION_DENIED && (c = z.PERMISSION_DENIED), c && z.PERMISSION_DENIED !== c && z.DEVICE_NOT_FOUND !== c, a(b)
            })
        }

        function B() {
            E("capturing"), t && (o = {}, t = !1, H(), J()), G(m), d.prop("disabled", !0)
        }

        function C() {
            B(), b.removeClass("show"), q.stop()
        }

        function D(a) {
            A(function(b) {
                b && (v.hide(), a(b, null)), d.click(function() {
                    d.unbind("click"), C(), a(null, j.prop("src"))
                })
            })
        }

        function E(a) {
            b.removeClass(u).addClass(a), u = a
        }

        function F(a, b, c) {
            function f() {
                --e || setTimeout(function() {
                    c()
                }, 10)
            }
            var d = y[b],
                e = d.totalProcesses,
                g = Caman(a, function() {
                    this.revert(), this[d.name](), this.render()
                });
            Caman.Event.listen(g, "processComplete", function() {
                f()
            })
        }

        function G(b) {
            var c = a(b),
                d = c[0],
                e = d.width,
                f = d.height;
            c.removeAttr("data-caman-id"), d.getContext("2d").clearRect(0, 0, e, f)
        }

        function H() {
            var b = i.find("canvas");
            a.each(b, function(a, b) {
                G(b)
            })
        }

        function I() {
            if (!window.Caman) {
                a.ajax({
                    url: window.context.camanjsPath,
                    dataType: "script",
                    cache: !0
                }).done(function() {
                    function b() {
                        if (window.Caman) return I();
                        if (!--a) return Myspace.errorDialog("Sorry, filters are currently unavailable");
                        setTimeout(function() {
                            b()
                        }, 500)
                    }
                    var a = 5;
                    b()
                }).fail(function() {
                    Myspace.errorDialog("Sorry, filters are currently unavailable")
                });
                return
            }
            t || K(), i.addClass("show")
        }

        function J() {
            i.removeClass("show")
        }

        function K() {
            function m() {
                --k || (t = !0, i.removeClass("loading"))
            }
            var b = Array.prototype.slice.call(i[0].children),
                c = a(b.shift()).find("canvas"),
                d = c[0],
                e = d.getContext("2d"),
                f = c.width(),
                g = r / s,
                h = f * g,
                j = -((h - f) / 2),
                k = b.length;
            i.addClass("loading"), d.width = f, d.height = f, e.translate(f, 0), e.scale(-1, 1), e.drawImage(l, j, 0, f * g, f), a.each(b, function(b, c) {
                var e = a(c),
                    g = e.find("canvas")[0];
                g.width = f, g.height = f, g.getContext("2d").drawImage(d, 0, 0, 60, 60), F(g, e.data("filter"), function() {
                    m()
                })
            })
        }
        var b = a("#webcam"),
            c = b.find("section"),
            d = b.find("button.primary"),
            e = b.find("button.close"),
            f = c.find("button.filters"),
            g = c.find("button.back"),
            h = c.find("button.shutterRelease"),
            i = c.find("#filterTray"),
            j = c.find("img.preview"),
            k = c.find("video"),
            l = k[0],
            m = c.find("canvas.main")[0],
            n = m.getContext("2d"),
            o = {},
            p = 0,
            q, r, s, t, u, v = new Myspace.Dialog("#webcamLoading", {
                closeAll: !1
            }),
            w = new Tracking("Webcam", "Invoke", "ShutterRelease"),
            x = new Tracking("Webcam", "Invoke", "Open"),
            y = [{
                name: "revert",
                totalProcesses: 0
            }, {
                name: "greyscale",
                totalProcesses: 1
            }, {
                name: "sepia",
                totalProcesses: 1
            }, {
                name: "nostalgia",
                totalProcesses: 10
            }, {
                name: "hazyDays",
                totalProcesses: 14
            }, {
                name: "orangePeel",
                totalProcesses: 6
            }, {
                name: "love",
                totalProcesses: 6
            }, {
                name: "lomo",
                totalProcesses: 7
            }],
            z = {
                PERMISSION_DENIED: 1,
                DEVICE_NOT_FOUND: 2
            };
        return f.click(function() {
            i.hasClass("show") ? J() : I()
        }), i.on("click", "li", function() {
            var b = y[a(this).data("filter")];
            o[b.name] ? j.prop("src", o[b.name]) : (c.addClass("loading"), F(m, a(this).data("filter"), function() {
                var a = m.toDataURL("image/jpeg");
                o[b.name] = a, j.prop("src", a), c.removeClass("loading")
            }))
        }), h.click(function() {
            var a;
            l.pause(), E("reviewing"), n.drawImage(l, 0, 0), a = m.toDataURL("image/jpeg"), o.revert = a, j.prop("src", a), d.prop("disabled", !1)
        }), g.click(function() {
            B(), l.play()
        }), e.click(C), {
            takePhoto: D
        }
    };
    Myspace.Webcam = {
        isSupported: navigator.getMedia ? !0 : !1,
        takePhoto: function(a) {
            b || (b = new c), b.takePhoto(a)
        }
    }
})(jQuery);
(function() {
    function a() {
        b()
    }

    function b() {
        _gaq.push(["_deleteCustomVar", 2]), Myspace && Myspace.User && Myspace.User.isLoggedIn ? _gaq.push(["_setCustomVar", 2, "User Logged In", "Yes", 3]) : _gaq.push(["_setCustomVar", 2, "User Logged In", "No", 3])
    }
    comm.listen("spaceway.page.trackers,overlay.trackers", a, !0)
})();
(function() {
    comm.listen("beacon.v3.overlay", function(a) {
        var b = {
            actionText: "view",
            directObjectEntityKeyText: ("page_" + (a.pfc || null)).toLowerCase()
        };
        context.beaconDataV3.previousReferrerPageFunctionalContextText = context.beaconDataV3.referrerPageFunctionalContextText, context.beaconDataV3.referrerPageFunctionalContextText = context.beaconDataV3.requestFunctionalContextText, context.beaconDataV3.requestFunctionalContextText = a.pfc, comm.send("beacon.v3", b), comm.send("overlay.trackers"), comm.listen("dialog.hiding", function(b) {
            if (a.overlayId === b.attr("id")) {
                var c = context.beaconDataV3.referrerPageFunctionalContextText;
                context.beaconDataV3.previousReferrerPageFunctionalContextText = context.beaconDataV3.referrerPageFunctionalContextText, context.beaconDataV3.referrerPageFunctionalContextText = context.beaconDataV3.requestFunctionalContextText, context.beaconDataV3.requestFunctionalContextText = c
            }
        })
    }, !0)
})();
(function(a) {
    function m() {
        n(), o()
    }

    function n() {
        b = !1, c = 0, k = 1, d = a("#wrap .horizontalContent > div"), e = (window.screen.width || 0) / 2, d.length && d.bind("scroll", function() {
            b = !0
        }), e && window.setInterval(function() {
            if (b) {
                var a = d.scrollLeft();
                b = !1;
                if (a && a > c + e) {
                    var f = parseInt((a - c) / e, 10);
                    for (var g = 0; g < f; g++) comm.send("screen.trackers", {
                        scrollType: "horizontal",
                        pageNum: ++k
                    });
                    c = a
                }
            }
        }, 200)
    }

    function o(b) {
        f = !1, g = 0, j = 1, i = a(window).height() / 2, l = b && b.length, h = l ? b : a(window), h.bind("scroll", function() {
            f = !0
        }), i && window.setInterval(function() {
            if (f) {
                f = !1;
                var b = l ? h.scrollTop() : a(window).scrollTop();
                if (b && b > g + i) {
                    var c = parseInt((b - g) / i, 10);
                    for (var d = 0; d < c; d++) comm.send("screen.trackers", {
                        scrollType: "vertical",
                        pageNum: ++j
                    });
                    g = b
                }
            }
        }, 300)
    }
    if (!context.features.isComScoreEnabled) return;
    var b, c, d, e, f, g, h, i, j, k, l = !1;
    m(), comm.listen("spaceway.page.trackers", function() {
        m()
    }, !0), comm.listen("page.trackers.setup", function(a) {
        o(a.$scrollableElement)
    }, !0)
})(jQuery);
(function(a, b, c) {
    "use strict";
    var d = a.document,
        e = a.Modernizr,
        f = function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        },
        g = "Moz Webkit O Ms".split(" "),
        h = function(a) {
            var b = d.documentElement.style,
                c;
            if (typeof b[a] == "string") return a;
            a = f(a);
            for (var e = 0, h = g.length; e < h; e++) {
                c = g[e] + a;
                if (typeof b[c] == "string") return c
            }
        },
        i = h("transform"),
        j = h("transitionProperty"),
        k = {
            csstransforms: function() {
                return !!i
            },
            csstransforms3d: function() {
                var a = !!h("perspective");
                if (a) {
                    var c = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                        d = "@media (" + c.join("transform-3d),(") + "modernizr)",
                        e = b("<style>" + d + "{#modernizr{height:3px}}" + "</style>").appendTo("head"),
                        f = b('<div id="modernizr" />').appendTo("html");
                    a = f.height() === 3, f.remove(), e.remove()
                }
                return a
            },
            csstransitions: function() {
                return !!j
            }
        },
        l;
    if (e)
        for (l in k) e.hasOwnProperty(l) || e.addTest(l, k[l]);
    else {
        e = a.Modernizr = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var m = " ",
            n;
        for (l in k) n = k[l](), e[l] = n, m += " " + (n ? "" : "no-") + l;
        b("html").addClass(m)
    }
    if (e.csstransforms) {
        var o = e.csstransforms3d ? {
                translate: function(a) {
                    return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) "
                },
                scale: function(a) {
                    return "scale3d(" + a + ", " + a + ", 1) "
                }
            } : {
                translate: function(a) {
                    return "translate(" + a[0] + "px, " + a[1] + "px) "
                },
                scale: function(a) {
                    return "scale(" + a + ") "
                }
            },
            p = function(a, c, d) {
                var e = b.data(a, "isoTransform") || {},
                    f = {},
                    g, h = {},
                    j;
                f[c] = d, b.extend(e, f);
                for (g in e) j = e[g], h[g] = o[g](j);
                var k = h.translate || "",
                    l = h.scale || "",
                    m = k + l;
                b.data(a, "isoTransform", e), a.style[i] = m
            };
        b.cssNumber.scale = !0, b.cssHooks.scale = {
            set: function(a, b) {
                p(a, "scale", b)
            },
            get: function(a, c) {
                var d = b.data(a, "isoTransform");
                return d && d.scale ? d.scale : 1
            }
        }, b.fx.step.scale = function(a) {
            b.cssHooks.scale.set(a.elem, a.now + a.unit)
        }, b.cssNumber.translate = !0, b.cssHooks.translate = {
            set: function(a, b) {
                p(a, "translate", b)
            },
            get: function(a, c) {
                var d = b.data(a, "isoTransform");
                return d && d.translate ? d.translate : [0, 0]
            }
        }
    }
    var q, r;
    e.csstransitions && (q = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    } [j], r = h("transitionDuration"));
    var s = b.event,
        t = b.event.handle ? "handle" : "dispatch",
        u;
    s.special.smartresize = {
        setup: function() {
            b(this).bind("resize", s.special.smartresize.handler)
        },
        teardown: function() {
            b(this).unbind("resize", s.special.smartresize.handler)
        },
        handler: function(a, b) {
            var c = this,
                d = arguments;
            a.type = "smartresize", u && clearTimeout(u), u = setTimeout(function() {
                s[t].apply(c, d)
            }, b === "execAsap" ? 0 : 100)
        }
    }, b.fn.smartresize = function(a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
    }, b.Isotope = function(a, c, d) {
        this.element = b(c), this._create(a), this._init(d)
    };
    var v = ["width", "height"],
        w = b(a);
    b.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    }, b.Isotope.prototype = {
        _create: function(a) {
            this.options = b.extend({}, b.Isotope.settings, a), this.styleQueue = [], this.elemCount = 0;
            var c = this.element[0].style;
            this.originalStyle = {};
            var d = v.slice(0);
            for (var e in this.options.containerStyle) d.push(e);
            for (var f = 0, g = d.length; f < g; f++) e = d[f], this.originalStyle[e] = c[e] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var h = {
                "original-order": function(a, b) {
                    return b.elemCount++, b.elemCount
                },
                random: function() {
                    return Math.random()
                }
            };
            this.options.getSortData = b.extend(this.options.getSortData, h), this.reloadItems(), this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var i = this;
            setTimeout(function() {
                i.element.addClass(i.options.containerClass)
            }, 0), this.options.resizable && w.bind("smartresize.isotope", function() {
                i.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                return !1
            })
        },
        _getAtoms: function(a) {
            var b = this.options.itemSelector,
                c = b ? a.filter(b).add(a.find(b)) : a,
                d = {
                    position: "absolute"
                };
            return c = c.filter(function(a, b) {
                return b.nodeType === 1
            }), this.usingTransforms && (d.left = 0, d.top = 0), c.css(d).addClass(this.options.itemClass), this.updateSortData(c, !0), c
        },
        _init: function(a) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(a)
        },
        option: function(a) {
            if (b.isPlainObject(a)) {
                this.options = b.extend(!0, this.options, a);
                var c;
                for (var d in a) c = "_update" + f(d), this[c] && this[c]()
            }
        },
        _updateAnimationEngine: function() {
            var a = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
                b;
            switch (a) {
                case "css":
                case "none":
                    b = !1;
                    break;
                case "jquery":
                    b = !0;
                    break;
                default:
                    b = !e.csstransitions
            }
            this.isUsingJQueryAnimation = b, this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function() {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function() {
            var a = this.usingTransforms = this.options.transformsEnabled && e.csstransforms && e.csstransitions && !this.isUsingJQueryAnimation;
            a || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = a ? this._translate : this._positionAbs
        },
        _filter: function(a) {
            var b = this.options.filter === "" ? "*" : this.options.filter;
            if (!b) return a;
            var c = this.options.hiddenClass,
                d = "." + c,
                e = a.filter(d),
                f = e;
            if (b !== "*") {
                f = e.filter(b);
                var g = a.not(d).not(b).addClass(c);
                this.styleQueue.push({
                    $el: g,
                    style: this.options.hiddenStyle
                })
            }
            return this.styleQueue.push({
                $el: f,
                style: this.options.visibleStyle
            }), f.removeClass(c), a.filter(b)
        },
        updateSortData: function(a, c) {
            var d = this,
                e = this.options.getSortData,
                f, g;
            a.each(function() {
                f = b(this), g = {};
                for (var a in e) !c && a === "original-order" ? g[a] = b.data(this, "isotope-sort-data")[a] : g[a] = e[a](f, d);
                b.data(this, "isotope-sort-data", g)
            })
        },
        _sort: function() {
            var a = this.options.sortBy,
                b = this._getSorter,
                c = this.options.sortAscending ? 1 : -1,
                d = function(d, e) {
                    var f = b(d, a),
                        g = b(e, a);
                    return f === g && a !== "original-order" && (f = b(d, "original-order"), g = b(e, "original-order")), (f > g ? 1 : f < g ? -1 : 0) * c
                };
            this.$filteredAtoms.sort(d)
        },
        _getSorter: function(a, c) {
            return b.data(a, "isotope-sort-data")[c]
        },
        _translate: function(a, b) {
            return {
                translate: [a, b]
            }
        },
        _positionAbs: function(a, b) {
            return {
                left: a,
                top: b
            }
        },
        _pushPosition: function(a, b, c) {
            b = Math.round(b + this.offset.left), c = Math.round(c + this.offset.top);
            var d = this.getPositionStyles(b, c);
            this.styleQueue.push({
                $el: a,
                style: d
            }), this.options.itemPositionDataEnabled && a.data("isotope-item-position", {
                x: b,
                y: c
            })
        },
        layout: function(a, b) {
            var c = this.options.layoutMode;
            this["_" + c + "Layout"](a);
            if (this.options.resizesContainer) {
                var d = this["_" + c + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: d
                })
            }
            this._processStyleQueue(a, b), this.isLaidOut = !0
        },
        _processStyleQueue: function(a, c) {
            var d = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
                f = this.options.animationOptions,
                g = this.options.onLayout,
                h, i, j, k;
            i = function(a, b) {
                b.$el[d](b.style, f)
            };
            if (this._isInserting && this.isUsingJQueryAnimation) i = function(a, b) {
                h = b.$el.hasClass("no-transition") ? "css" : d, b.$el[h](b.style, f)
            };
            else if (c || g || f.complete) {
                var l = !1,
                    m = [c, g, f.complete],
                    n = this;
                j = !0, k = function() {
                    if (l) return;
                    var b;
                    for (var c = 0, d = m.length; c < d; c++) b = m[c], typeof b == "function" && b.call(n.element, a, n);
                    l = !0
                };
                if (this.isUsingJQueryAnimation && d === "animate") f.complete = k, j = !1;
                else if (e.csstransitions) {
                    var o = 0,
                        p = this.styleQueue[0],
                        s = p && p.$el,
                        t;
                    while (!s || !s.length) {
                        t = this.styleQueue[o++];
                        if (!t) return;
                        s = t.$el
                    }
                    var u = parseFloat(getComputedStyle(s[0])[r]);
                    u > 0 && (i = function(a, b) {
                        b.$el[d](b.style, f).one(q, k)
                    }, j = !1)
                }
            }
            b.each(this.styleQueue, i), j && k(), this.styleQueue = []
        },
        resize: function() {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function(a) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, a)
        },
        addItems: function(a, b) {
            var c = this._getAtoms(a);
            this.$allAtoms = this.$allAtoms.add(c), b && b(c)
        },
        insert: function(a, b) {
            this.element.append(a);
            var c = this;
            this.addItems(a, function(a) {
                var d = c._filter(a);
                c._addHideAppended(d), c._sort(), c.reLayout(), c._revealAppended(d, b)
            })
        },
        appended: function(a, b) {
            var c = this;
            this.addItems(a, function(a) {
                c._addHideAppended(a), c.layout(a), c._revealAppended(a, b)
            })
        },
        _addHideAppended: function(a) {
            this.$filteredAtoms = this.$filteredAtoms.add(a), a.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function(a, b) {
            var c = this;
            setTimeout(function() {
                a.removeClass("no-transition"), c.styleQueue.push({
                    $el: a,
                    style: c.options.visibleStyle
                }), c._isInserting = !1, c._processStyleQueue(a, b)
            }, 10)
        },
        reloadItems: function() {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function(a, b) {
            this.$allAtoms = this.$allAtoms.not(a), this.$filteredAtoms = this.$filteredAtoms.not(a);
            var c = this,
                d = function() {
                    a.remove(), b && b.call(c.element)
                };
            a.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(d)) : d()
        },
        shuffle: function(a) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(a)
        },
        destroy: function() {
            var a = this.usingTransforms,
                b = this.options;
            this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function() {
                var b = this.style;
                b.position = "", b.top = "", b.left = "", b.opacity = "", a && (b[i] = "")
            });
            var c = this.element[0].style;
            for (var d in this.originalStyle) c[d] = this.originalStyle[d];
            this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope"), w.unbind(".isotope")
        },
        _getSegments: function(a) {
            var b = this.options.layoutMode,
                c = a ? "rowHeight" : "columnWidth",
                d = a ? "height" : "width",
                e = a ? "rows" : "cols",
                g = this.element[d](),
                h, i = this.options[b] && this.options[b][c] || this.$filteredAtoms["outer" + f(d)](!0) || g;
            h = Math.floor(g / i), h = Math.max(h, 1), this[b][e] = h, this[b][c] = i
        },
        _checkIfSegmentsChanged: function(a) {
            var b = this.options.layoutMode,
                c = a ? "rows" : "cols",
                d = this[b][c];
            return this._getSegments(a), this[b][c] !== d
        },
        _masonryReset: function() {
            this.masonry = {}, this._getSegments();
            var a = this.masonry.cols;
            this.masonry.colYs = [];
            while (a--) this.masonry.colYs.push(0)
        },
        _masonryLayout: function(a) {
            var c = this,
                d = c.masonry;
            a.each(function() {
                var a = b(this),
                    e = Math.ceil(a.outerWidth(!0) / d.columnWidth);
                e = Math.min(e, d.cols);
                if (e === 1) c._masonryPlaceBrick(a, d.colYs);
                else {
                    var f = d.cols + 1 - e,
                        g = [],
                        h, i;
                    for (i = 0; i < f; i++) h = d.colYs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
                    c._masonryPlaceBrick(a, g)
                }
            })
        },
        _masonryPlaceBrick: function(a, b) {
            var c = Math.min.apply(Math, b),
                d = 0;
            for (var e = 0, f = b.length; e < f; e++)
                if (b[e] === c) {
                    d = e;
                    break
                } var g = this.masonry.columnWidth * d,
                h = c;
            this._pushPosition(a, g, h);
            var i = c + a.outerHeight(!0),
                j = this.masonry.cols + 1 - f;
            for (e = 0; e < j; e++) this.masonry.colYs[d + e] = i
        },
        _masonryGetContainerSize: function() {
            var a = Math.max.apply(Math, this.masonry.colYs);
            return {
                height: a
            }
        },
        _masonryResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function() {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function(a) {
            var c = this,
                d = this.element.width(),
                e = this.fitRows;
            a.each(function() {
                var a = b(this),
                    f = a.outerWidth(!0),
                    g = a.outerHeight(!0);
                e.x !== 0 && f + e.x > d && (e.x = 0, e.y = e.height), c._pushPosition(a, e.x, e.y), e.height = Math.max(e.y + g, e.height), e.x += f
            })
        },
        _fitRowsGetContainerSize: function() {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function() {
            return !0
        },
        _cellsByRowReset: function() {
            this.cellsByRow = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByRowLayout: function(a) {
            var c = this,
                d = this.cellsByRow;
            a.each(function() {
                var a = b(this),
                    e = d.index % d.cols,
                    f = Math.floor(d.index / d.cols),
                    g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                    h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                c._pushPosition(a, g, h), d.index++
            })
        },
        _cellsByRowGetContainerSize: function() {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function() {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function(a) {
            var c = this;
            a.each(function(a) {
                var d = b(this);
                c._pushPosition(d, 0, c.straightDown.y), c.straightDown.y += d.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function() {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function() {
            return !0
        },
        _masonryHorizontalReset: function() {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var a = this.masonryHorizontal.rows;
            this.masonryHorizontal.rowXs = [];
            while (a--) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function(a) {
            var c = this,
                d = c.masonryHorizontal;
            a.each(function() {
                var a = b(this),
                    e = Math.ceil(a.outerHeight(!0) / d.rowHeight);
                e = Math.min(e, d.rows);
                if (e === 1) c._masonryHorizontalPlaceBrick(a, d.rowXs);
                else {
                    var f = d.rows + 1 - e,
                        g = [],
                        h, i;
                    for (i = 0; i < f; i++) h = d.rowXs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
                    c._masonryHorizontalPlaceBrick(a, g)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function(a, b) {
            var c = Math.min.apply(Math, b),
                d = 0;
            for (var e = 0, f = b.length; e < f; e++)
                if (b[e] === c) {
                    d = e;
                    break
                } var g = c,
                h = this.masonryHorizontal.rowHeight * d;
            this._pushPosition(a, g, h);
            var i = c + a.outerWidth(!0),
                j = this.masonryHorizontal.rows + 1 - f;
            for (e = 0; e < j; e++) this.masonryHorizontal.rowXs[d + e] = i
        },
        _masonryHorizontalGetContainerSize: function() {
            var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {
                width: a
            }
        },
        _masonryHorizontalResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function() {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function(a) {
            var c = this,
                d = this.element.height(),
                e = this.fitColumns;
            a.each(function() {
                var a = b(this),
                    f = a.outerWidth(!0),
                    g = a.outerHeight(!0);
                e.y !== 0 && g + e.y > d && (e.x = e.width, e.y = 0), c._pushPosition(a, e.x, e.y), e.width = Math.max(e.x + f, e.width), e.y += g
            })
        },
        _fitColumnsGetContainerSize: function() {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function() {
            return !0
        },
        _cellsByColumnReset: function() {
            this.cellsByColumn = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByColumnLayout: function(a) {
            var c = this,
                d = this.cellsByColumn;
            a.each(function() {
                var a = b(this),
                    e = Math.floor(d.index / d.rows),
                    f = d.index % d.rows,
                    g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                    h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                c._pushPosition(a, g, h), d.index++
            })
        },
        _cellsByColumnGetContainerSize: function() {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function() {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function(a) {
            var c = this;
            a.each(function(a) {
                var d = b(this);
                c._pushPosition(d, c.straightAcross.x, 0), c.straightAcross.x += d.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function() {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function() {
            return !0
        }
    }, b.fn.imagesLoaded = function(a) {
        function c() {
            a.call(e, f)
        }

        function d(a) {
            var e = a.target;
            e.src !== h && b.inArray(e, i) === -1 && (i.push(e), --g <= 0 && (setTimeout(c), f.unbind(".imagesLoaded", d)))
        }
        var e = this,
            f = e.find("img").add(e.filter("img")),
            g = f.length,
            h = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            i = [];
        return g || c(), f.bind("load.imagesLoaded error.imagesLoaded", d).each(function() {
            var a = this.src;
            this.src = h, this.src = a
        }), e
    };
    var x = function(b) {
        a.console && a.console.error(b)
    };
    b.fn.isotope = function(a, c) {
        if (typeof a == "string") {
            var d = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var c = b.data(this, "isotope");
                if (!c) {
                    x("cannot call methods on isotope prior to initialization; attempted to call method '" + a + "'");
                    return
                }
                if (!b.isFunction(c[a]) || a.charAt(0) === "_") {
                    x("no such method '" + a + "' for isotope instance");
                    return
                }
                c[a].apply(c, d)
            })
        } else this.each(function() {
            var d = b.data(this, "isotope");
            d ? (d.option(a), d._init(c)) : b.data(this, "isotope", new b.Isotope(a, this, c))
        });
        return this
    }
})(window, jQuery);
(function() {
    var a = $("#settings-link"),
        b = $("#settings-popout"),
        c = new Myspace.FooterPopout(b, {
            onClose: $.noop
        });
    a.on("click", function() {
        var a = $('.tip[data-name="settings"]');
        c.toggle() ? a.hide() : a.show()
    })
})();
(function() {
    var a = $("#site-info"),
        b = $("#site-info-popup"),
        c = new Myspace.FooterPopout(b, {
            onClose: $.noop
        });
    a.on("click", function() {
        c.toggle()
    })
})();

function appendPixel(a, b) {
    var c = document.createElement("img");
    c.src = "//mpp.vindicosuite.com/conv/v=5;m=1;t=" + a + ";ts=" + (new Date).getTime() + ";he=" + b, c.width = 0, c.height = 1, c.border = 0, document.body.appendChild(c)
}
comm.listen("signin", function(a) {
    appendPixel(21118, a.he)
}, !0), comm.listen("signup", function(a) {
    appendPixel(21119, a.he)
}, !0);
var _viantTMInit = {
    tokenServer: "//ucid.vindicosuite.com",
    expiryInDays: 730,
    tokenName: "uci",
    tokenSyncName: "uct",
    document: document,
    syncIntervalInSec: 604800,
    syncMethod: "e",
    linkFragmenBlackList: [],
    linkFragmentWhiteList: []
};
(function() {
    var a = document.createElement("script");
    a.async = !0, a.type = "text/javascript";
    var b = "",
        c = "";
    try {
        b = encodeURIComponent(document.location.href), c = encodeURIComponent(document.referrer)
    } catch (d) {}
    a.src = _viantTMInit.tokenServer + "/js/tm.js?r=" + c + "&u=" + b;
    var e = document.querySelector("script");
    e.parentNode.insertBefore(a, e)
})();
! function(a, b) {
    "function" == typeof define && define.amd ? define([], function() {
        return a.ns_ = b(a.ns_)
    }) : "object" == typeof module && module.exports ? module.exports = b() : a.ns_ = b(a.ns_)
}(this, function(a) {
    a = a || {}, a.ns_ = a;
    var b = {
        uid: function() {
            var a = 1;
            return function() {
                return +(new Date) + "_" + a++
            }
        }(),
        filter: function(a, b) {
            var c = {};
            for (var d in b) b.hasOwnProperty(d) && a(b[d]) && (c[d] = b[d]);
            return c
        },
        extend: function(a) {
            var b, c = arguments.length;
            a = a || {};
            for (var d = 1; c > d; d++)
                if (b = arguments[d])
                    for (var e in b) b.hasOwnProperty(e) && (a[e] = b[e]);
            return a
        },
        getString: function(a, b) {
            var c = String(a);
            return null == a ? b || "na" : c
        },
        getLong: function(a, b) {
            var c = Number(a);
            return null == a || isNaN(c) ? b || 0 : c
        },
        getInteger: function(a, b) {
            var c = Number(parseInt(a));
            return null == a || isNaN(c) ? b || 0 : c
        },
        getBoolean: function(a, b) {
            var c = "true" == String(a).toLowerCase();
            return null == a ? b || !1 : c
        },
        parseBoolean: function(a, b) {
            return b = b || !1, a ? "0" == a ? !1 : void 0 : b
        },
        isNotEmpty: function(a) {
            return !this.isEmpty(a)
        },
        isEmpty: function(a) {
            return void 0 === a || null === a || "" === a || a instanceof Array && 0 === a.length
        },
        indexOf: function(a, b) {
            var c = -1;
            return this.forEach(b, function(b, d) {
                b == a && (c = d)
            }), c
        },
        forEach: function(a, b, c) {
            try {
                if ("function" == typeof b)
                    if (c = "undefined" != typeof c ? c : null, "number" != typeof a.length || "undefined" == typeof a[0]) {
                        var d = "undefined" != typeof a.__proto__;
                        for (var e in a) a.hasOwnProperty(e) && (!d || d && "undefined" == typeof a.__proto__[e]) && "function" != typeof a[e] && b.call(c, a[e], e)
                    } else
                        for (var f = 0, g = a.length; g > f; f++) b.call(c, a[f], f)
            } catch (h) {}
        },
        regionMatches: function(a, b, c, d, e) {
            if (0 > b || 0 > d || b + e > a.length || d + e > c.length) return !1;
            for (; --e >= 0;) {
                var f = a.charAt(b++),
                    g = c.charAt(d++);
                if (f != g) return !1
            }
            return !0
        },
        size: function(a) {
            var b = 0;
            for (var c in a) a.hasOwnProperty(c) && b++;
            return b
        },
        log: function(a, b) {
            if ("undefined" != typeof b && b && "undefined" != typeof console && console) {
                var c = new Date,
                    d = c.getHours() + ":" + c.getMinutes() + ":" + c.getSeconds();
                console.log(d, a)
            }
        },
        isTrue: function(a) {
            return "undefined" == typeof a ? !1 : "string" == typeof a ? (a = a.toLowerCase(), "true" === a || "1" === a || "on" === a) : !!a
        },
        toString: function(a) {
            if ("undefined" == typeof a) return "undefined";
            if ("string" == typeof a) return a;
            if ("[object Array]" === Object.prototype.toString.call(a)) return a.join(",");
            if (this.size(a) > 0) {
                var b = "";
                for (var c in a) a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
                return b
            }
            return a.toString()
        },
        exists: function(a) {
            return "undefined" != typeof a && null != a
        },
        firstGreaterThan0: function() {
            for (var a = 0, b = arguments.length; b > a; a++) {
                var c = arguments[a];
                if (c > 0) return c
            }
            return 0
        },
        cloneObject: function(a) {
            if (null == a || "object" != typeof a) return a;
            var b = function() {
                function a() {}

                function b(b) {
                    return "object" == typeof b ? (a.prototype = b, new a) : b
                }

                function c(a) {
                    for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b])
                }

                function d() {
                    this.copiedObjects = [];
                    var a = this;
                    this.recursiveDeepCopy = function(b) {
                        return a.deepCopy(b)
                    }, this.depth = 0
                }

                function e(a, b) {
                    var c = new d;
                    return b && (c.maxDepth = b), c.deepCopy(a)
                }

                function f(a) {
                    return "undefined" != typeof window && window && window.Node ? a instanceof Node : "undefined" != typeof document && a === document ? !0 : "number" == typeof a.nodeType && a.attributes && a.childNodes && a.cloneNode
                }
                var g = [];
                return c.prototype = {
                    constructor: c,
                    canCopy: function() {
                        return !1
                    },
                    create: function(a) {},
                    populate: function(a, b, c) {}
                }, d.prototype = {
                    constructor: d,
                    maxDepth: 256,
                    cacheResult: function(a, b) {
                        this.copiedObjects.push([a, b])
                    },
                    getCachedResult: function(a) {
                        for (var b = this.copiedObjects, c = b.length, d = 0; c > d; d++)
                            if (b[d][0] === a) return b[d][1]
                    },
                    deepCopy: function(a) {
                        if (null === a) return null;
                        if ("object" != typeof a) return a;
                        var b = this.getCachedResult(a);
                        if (b) return b;
                        for (var c = 0; c < g.length; c++) {
                            var d = g[c];
                            if (d.canCopy(a)) return this.applyDeepCopier(d, a)
                        }
                        throw new Error("Unable to clone the following object " + a)
                    },
                    applyDeepCopier: function(a, b) {
                        var c = a.create(b);
                        if (this.cacheResult(b, c), this.depth++, this.depth > this.maxDepth) throw new Error("Maximum recursion depth exceeded.");
                        return a.populate(this.recursiveDeepCopy, b, c), this.depth--, c
                    }
                }, e.DeepCopier = c, e.deepCopiers = g, e.register = function(a) {
                    a instanceof c || (a = new c(a)), g.unshift(a)
                }, e.register({
                    canCopy: function() {
                        return !0
                    },
                    create: function(a) {
                        return a instanceof a.constructor ? b(a.constructor.prototype) : {}
                    },
                    populate: function(a, b, c) {
                        for (var d in b) b.hasOwnProperty(d) && (c[d] = a(b[d]));
                        return c
                    }
                }), e.register({
                    canCopy: function(a) {
                        return a instanceof Array
                    },
                    create: function(a) {
                        return new a.constructor
                    },
                    populate: function(a, b, c) {
                        for (var d = 0; d < b.length; d++) c.push(a(b[d]));
                        return c
                    }
                }), e.register({
                    canCopy: function(a) {
                        return a instanceof Date
                    },
                    create: function(a) {
                        return new Date(a)
                    }
                }), e.register({
                    canCopy: function(a) {
                        return f(a)
                    },
                    create: function(a) {
                        return "undefined" != typeof document && a === document ? document : a.cloneNode(!1)
                    },
                    populate: function(a, b, c) {
                        if ("undefined" != typeof document && b === document) return document;
                        if (b.childNodes && b.childNodes.length)
                            for (var d = 0; d < b.childNodes.length; d++) {
                                var e = a(b.childNodes[d]);
                                c.appendChild(e)
                            }
                    }
                }), {
                    deepCopy: e
                }
            }();
            return b.deepCopy(a)
        },
        safeGet: function(a, b) {
            return b = this.exists(b) ? b : "", this.exists(a) ? a : b
        },
        getBrowserName: function() {
            if (!navigator) return "";
            var a, b, c = navigator.userAgent || "",
                d = navigator.appName || "";
            return -1 != (b = c.indexOf("Opera")) || -1 != (b = c.indexOf("OPR/")) ? d = "Opera" : -1 != (b = c.indexOf("Android")) ? d = "Android" : -1 != (b = c.indexOf("Chrome")) ? d = "Chrome" : -1 != (b = c.indexOf("Safari")) ? d = "Safari" : -1 != (b = c.indexOf("Firefox")) ? d = "Firefox" : -1 != (b = c.indexOf("IEMobile")) ? d = "Internet Explorer Mobile" : "Microsoft Internet Explorer" == d || "Netscape" == d ? d = "Internet Explorer" : (a = c.lastIndexOf(" ") + 1) < (b = c.lastIndexOf("/")) ? (d = c.substring(a, b), d.toLowerCase() == d.toUpperCase() && (d = navigator.appName)) : d = "unknown", d
        },
        getBrowserFullVersion: function() {
            if (!navigator) return "";
            var a, b, c, d, e = navigator.userAgent || "",
                f = navigator.appName || "",
                g = navigator.appVersion ? "" + parseFloat(navigator.appVersion) : "";
            return -1 != (b = e.indexOf("Opera")) ? (g = e.substring(b + 6), -1 != (b = e.indexOf("Version")) && (g = e.substring(b + 8))) : -1 != (b = e.indexOf("OPR/")) ? g = e.substring(b + 4) : -1 != (b = e.indexOf("Android")) ? g = e.substring(b + 11) : -1 != (b = e.indexOf("Chrome")) ? g = e.substring(b + 7) : -1 != (b = e.indexOf("Safari")) ? (g = e.substring(b + 7), -1 != (b = e.indexOf("Version")) && (g = e.substring(b + 8))) : -1 != (b = e.indexOf("Firefox")) ? g = e.substring(b + 8) : "Microsoft Internet Explorer" == f ? (d = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"), null != d.exec(e) && (g = parseFloat(RegExp.$1))) : "Netscape" == f ? (d = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), null != d.exec(e) && (g = parseFloat(RegExp.$1))) : g = e.lastIndexOf(" ") + 1 < (b = e.lastIndexOf("/")) ? e.substring(b + 1) : "unknown", g = g.toString(), -1 != (c = g.indexOf(";")) && (g = g.substring(0, c)), -1 != (c = g.indexOf(" ")) && (g = g.substring(0, c)), -1 != (c = g.indexOf(")")) && (g = g.substring(0, c)), a = parseInt("" + g, 10), isNaN(a) && (g = "" + parseFloat(navigator.appVersion)), g
        },
        browserAcceptsLargeURLs: function() {
            return "undefined" != typeof window ? (null !== window.ActiveXObject, !0) : !0
        },
        getNamespace: function() {
            return a.ns_ || a
        }
    };
    return a.StreamSense = a.StreamSense || function() {
        var c = function() {
                var a = "cs_";
                return function() {
                    var c = "undefined" != typeof localStorage ? localStorage : null;
                    b.extend(this, {
                        get: function(b) {
                            return c && c.getItem(a + b)
                        },
                        set: function(b, d) {
                            c && c.setItem(a + b, d)
                        },
                        has: function(b) {
                            return c && c.getItem(a + b)
                        },
                        remove: function(b) {
                            c && c.removeItem(a + b)
                        },
                        clear: function() {
                            for (var b = 0; c && b < c.length; ++b) {
                                var d = c.key(b);
                                d.substr(0, a.length) === a && c.removeItem(d)
                            }
                        }
                    })
                }
            }(),
            d = function(a, b) {
                if ("undefined" != typeof Image) {
                    var c = new Image;
                    c.onload = function() {
                        b && b(200), c = null
                    }, c.onerror = function() {
                        b && b(), c = null
                    }, c.src = a
                }
            },
            e = function(a, b, c) {
                c && "undefined" != typeof setTimeout && setTimeout(c, 0)
            },
            f = function() {
                return {
                    dir: function() {
                        return null
                    },
                    append: function(a, b, c) {},
                    write: function(a, b, c) {},
                    deleteFile: function() {
                        return !1
                    },
                    read: function() {
                        return null
                    }
                }
            }(),
            g = function() {
                return {
                    PLATFORM: "generic",
                    httpGet: d,
                    httpPost: e,
                    Storage: c,
                    IO: f,
                    getCrossPublisherId: function() {
                        return null
                    },
                    getAppName: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getAppVersion: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getVisitorId: function() {
                        return this.getDeviceName() + +(new Date) + ~~(1e3 * Math.random())
                    },
                    getVisitorIdSuffix: function() {
                        return "72"
                    },
                    getDeviceName: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getPlatformVersion: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getPlatformName: function() {
                        return "js"
                    },
                    getRuntimeName: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getRuntimeVersion: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getResolution: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getLanguage: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getPackageName: function() {
                        return null
                    },
                    isConnectionAvailable: function() {
                        return !0
                    },
                    isCompatible: function() {
                        return !0
                    },
                    autoSelect: function() {},
                    setPlatformAPI: function() {},
                    isCrossPublisherIdChanged: function() {
                        return !1
                    },
                    setTimeout: function(a, b) {
                        return setTimeout(a, b)
                    },
                    clearTimeout: function(a) {
                        return clearTimeout(a)
                    },
                    getDeviceArchitecture: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getConnectionType: function() {
                        return h.UNKNOWN_VALUE
                    },
                    getDeviceJailBrokenFlag: function() {
                        return h.UNKNOWN_VALUE
                    },
                    isConnSecure: function() {
                        return "s" === document.location.href.charAt(4)
                    },
                    processMeasurementLabels: function() {}
                }
            }(),
            h = {
                UNKNOWN_VALUE: "unknown",
                UNKNOWN_RESOLUTION: "0x0"
            };
        b.jsonObjectToStringDictionary = function(a) {
            var b = {};
            for (var c in a) {
                var d = a[c];
                null === d || void 0 === d ? b[c] = d : b[c] = a[c] + ""
            }
            return b
        }, b.getKeys = function(a, b) {
            var c, d = [];
            for (c in a) b && !b.test(c) || !a.hasOwnProperty(c) || (d[d.length] = c);
            return d
        }, b.fixEventTime = function(a) {
            if (a.ns_ts) return parseInt(a.ns_ts);
            var b = +(new Date);
            return a.ns_ts = String(b), b
        }, b.isBrowser = function() {
            return "undefined" != typeof window && "undefined" != typeof document
        }, b.addNewPlaybackInterval = function(a, c, d, e) {
            var f = {};
            if (d >= c) {
                if (f.start = c, f.end = d, 0 == a.length) return a.push(f), b.cloneObject(a);
                var g;
                for (g = 0; g < a.length; g++)
                    if (f.start >= a[g].start && f.end <= a[g].end) return b.cloneObject(a);
                var h, i = !1;
                for (h = 0; h < a.length; h++)
                    if (h + 1 === a.length && f.start >= a[h].start || f.start >= a[h].start && f.start < a[h + 1].start) {
                        a.splice(h + 1, 0, f), i = !0;
                        break
                    } i || a.splice(0, 0, f);
                var j = [a[0]];
                for (g = 1; g < a.length; g++) j[j.length - 1].end + e < a[g].start ? j.push(a[g]) : j[j.length - 1].end < a[g].end && (j[j.length - 1].end = a[g].end);
                return b.cloneObject(j)
            }
            return b.cloneObject(a)
        };
        var i = function() {
                var a = ["play", "pause", "pause-on-buffering", "end", "buffer", "buffer-stop", "keep-alive", "hb", "custom", "load", "start", "skstart", "adskip", "cta", "error", "trans", "drmfa", "drmap", "drmde", "bitrt", "playrt", "volume", "window", "audio", "video", "subs", "cdn"];
                return {
                    PLAY: 0,
                    PAUSE: 1,
                    PAUSE_ON_BUFFERING: 2,
                    END: 3,
                    BUFFER: 4,
                    BUFFER_STOP: 5,
                    KEEPALIVE: 6,
                    HEARTBEAT: 7,
                    CUSTOM: 8,
                    LOAD: 9,
                    START: 10,
                    SEEK_START: 11,
                    AD_SKIP: 12,
                    CTA: 13,
                    ERROR: 14,
                    TRANSFER: 15,
                    DRM_FAILED: 16,
                    DRM_APPROVED: 17,
                    DRM_DENIED: 18,
                    BIT_RATE: 19,
                    PLAYBACK_RATE: 20,
                    VOLUME: 21,
                    WINDOW_STATE: 22,
                    AUDIO: 23,
                    VIDEO: 24,
                    SUBS: 25,
                    CDN: 26,
                    toString: function(b) {
                        return a[b]
                    }
                }
            }(),
            j = function() {
                return {
                    IDLE: 0,
                    PLAYBACK_NOT_STARTED: 1,
                    PLAYING: 2,
                    PAUSED: 3,
                    BUFFERING_BEFORE_PLAYBACK: 4,
                    BUFFERING_DURING_PLAYBACK: 5,
                    BUFFERING_DURING_SEEKING: 6,
                    BUFFERING_DURING_PAUSE: 7,
                    SEEKING_BEFORE_PLAYBACK: 8,
                    SEEKING_DURING_PLAYBACK: 9,
                    SEEKING_DURING_BUFFERING: 10,
                    SEEKING_DURING_PAUSE: 11,
                    PAUSED_DURING_BUFFERING: 12
                }
            }(),
            k = function() {
                var a = ["c", "s", "r"];
                return {
                    SINGLE_CLIP: 0,
                    SEGMENTED: 1,
                    REDUCED: 2,
                    toString: function(b) {
                        return a[b]
                    }
                }
            }(),
            l = {
                STREAMSENSE_VERSION: "5.1.1.160316",
                MODEL_VERSION: "5.1",
                DEFAULT_PLAYERNAME: "js_api",
                DEFAULT_HEARTBEAT_INTERVAL: [{
                    playingtime: 6e4,
                    interval: 1e4
                }, {
                    playingtime: null,
                    interval: 6e4
                }],
                DEFAULT_KEEP_ALIVE_INTERVAL: 12e5,
                DEFAULT_PAUSED_ON_BUFFERING_INTERVAL: 500,
                C1_VALUE: "19",
                C10_VALUE: "js",
                NS_AP_C12M_VALUE: "1",
                NS_NC_VALUE: "1",
                PAGE_NAME_LABEL: "name",
                RESTRICTED_URL_LENGTH_LIMIT: 2048,
                URL_LENGTH_LIMIT: 4096,
                THROTTLING_DELAY: 500,
                INTERVAL_MERGE_TOLERANCE: 500,
                STANDARD_METADATA_LABELS: ["ns_st_ci", "ns_st_pr", "ns_st_sn", "ns_st_en", "ns_st_ep", "ns_st_ty", "ns_st_ct", "ns_st_li", "ns_st_ad", "ns_st_bn", "ns_st_tb", "ns_st_an", "ns_st_ta", "ns_st_pu", "c3", "c4", "c6"],
                LABELS_ORDER: ["c1", "c2", "ca2", "cb2", "cc2", "cd2", "ns_site", "ca_ns_site", "cb_ns_site", "cc_ns_site", "cd_ns_site", "ns_vsite", "ca_ns_vsite", "cb_ns_vsite", "cc_ns_vsite", "cd_ns_vsite", "ns_alias", "ca_ns_alias", "cb_ns_alias", "cc_ns_alias", "cd_ns_alias", "ns_ap_an", "ca_ns_ap_an", "cb_ns_ap_an", "cc_ns_ap_an", "cd_ns_ap_an", "ns_ap_pn", "ns_ap_pv", "c12", "ca12", "cb12", "cc12", "cd12", "ns_ak", "ns_ap_hw", "name", "ns_ap_ni", "ns_ap_ec", "ns_ap_ev", "ns_ap_device", "ns_ap_id", "ns_ap_csf", "ns_ap_bi", "ns_ap_pfm", "ns_ap_pfv", "ns_ap_ver", "ca_ns_ap_ver", "cb_ns_ap_ver", "cc_ns_ap_ver", "cd_ns_ap_ver", "ns_ap_sv", "ns_ap_cv", "ns_type", "ca_ns_type", "cb_ns_type", "cc_ns_type", "cd_ns_type", "ns_radio", "ns_nc", "cs_partner", "cs_xcid", "ns_ap_ui", "ca_ns_ap_ui", "cb_ns_ap_ui", "cc_ns_ap_ui", "cd_ns_ap_ui", "ns_ap_gs", "ns_st_sv", "ns_st_pv", "ns_st_smv", "ns_st_it", "ns_st_id", "ns_st_ec", "ns_st_sp", "ns_st_sc", "ns_st_sq", "ns_st_ppc", "ns_st_apc", "ns_st_spc", "ns_st_cn", "ns_st_ev", "ns_st_po", "ns_st_cl", "ns_st_el", "ns_st_sl", "ns_st_pb", "ns_st_hc", "ns_st_mp", "ca_ns_st_mp", "cb_ns_st_mp", "cc_ns_st_mp", "cd_ns_st_mp", "ns_st_mv", "ca_ns_st_mv", "cb_ns_st_mv", "cc_ns_st_mv", "cd_ns_st_mv", "ns_st_pn", "ns_st_tp", "ns_st_ad", "ns_st_li", "ns_st_ci", "ns_st_si", "ns_st_pt", "ns_st_dpt", "ns_st_ipt", "ns_st_et", "ns_st_det", "ns_st_upc", "ns_st_dupc", "ns_st_iupc", "ns_st_upa", "ns_st_dupa", "ns_st_iupa", "ns_st_lpc", "ns_st_dlpc", "ns_st_lpa", "ns_st_dlpa", "ns_st_pa", "ns_ap_jb", "ns_ap_et", "ns_ap_res", "ns_ap_sd", "ns_ap_po", "ns_ap_ot", "ns_ap_c12m", "cs_c12u", "ca_cs_c12u", "cb_cs_c12u", "cc_cs_c12u", "cd_cs_c12u", "ns_ap_install", "ns_ap_updated", "ns_ap_lastrun", "ns_ap_cs", "ns_ap_runs", "ns_ap_usage", "ns_ap_fg", "ns_ap_ft", "ns_ap_dft", "ns_ap_bt", "ns_ap_dbt", "ns_ap_dit", "ns_ap_as", "ns_ap_das", "ns_ap_it", "ns_ap_uc", "ns_ap_aus", "ns_ap_daus", "ns_ap_us", "ns_ap_dus", "ns_ap_ut", "ns_ap_oc", "ns_ap_uxc", "ns_ap_uxs", "ns_ap_lang", "ns_ap_ar", "ns_ap_miss", "ns_ts", "ns_st_ca", "ns_st_cp", "ns_st_er", "ca_ns_st_er", "cb_ns_st_er", "cc_ns_st_er", "cd_ns_st_er", "ns_st_pe", "ns_st_ui", "ca_ns_st_ui", "cb_ns_st_ui", "cc_ns_st_ui", "cd_ns_st_ui", "ns_st_bc", "ns_st_dbc", "ns_st_bt", "ns_st_dbt", "ns_st_bp", "ns_st_lt", "ns_st_skc", "ns_st_dskc", "ns_st_ska", "ns_st_dska", "ns_st_skd", "ns_st_skt", "ns_st_dskt", "ns_st_pc", "ns_st_dpc", "ns_st_pp", "ns_st_br", "ns_st_pbr", "ns_st_rt", "ns_st_prt", "ns_st_ub", "ns_st_vo", "ns_st_pvo", "ns_st_ws", "ns_st_pws", "ns_st_ki", "ns_st_rp", "ns_st_bn", "ns_st_tb", "ns_st_an", "ns_st_ta", "ns_st_pl", "ns_st_pr", "ns_st_sn", "ns_st_en", "ns_st_ep", "ns_st_sr", "ns_st_ty", "ns_st_ct", "ns_st_cs", "ns_st_ge", "ns_st_st", "ns_st_ce", "ns_st_ia", "ns_st_dt", "ns_st_ddt", "ns_st_tdt", "ns_st_tm", "ns_st_dtm", "ns_st_ttm", "ns_st_de", "ns_st_pu", "ns_st_ti", "ns_st_cu", "ns_st_fee", "ns_st_at", "ns_st_pat", "ns_st_vt", "ns_st_pvt", "ns_st_tt", "ns_st_ptt", "ns_st_cdn", "ns_st_pcdn", "ns_ap_i1", "ns_ap_i2", "ns_ap_i3", "ns_ap_i4", "ns_ap_i5", "ns_ap_i6", "ns_ap_referrer", "ns_clid", "ns_campaign", "ns_source", "ns_mchannel", "ns_linkname", "ns_fee", "gclid", "utm_campaign", "utm_source", "utm_medium", "utm_term", "utm_content", "ns_ecommerce", "ns_ec_sv", "ns_client_id", "ns_order_id", "ns_ec_cur", "ns_orderline_id", "ns_orderlines", "ns_prod_id", "ns_qty", "ns_prod_price", "ns_prod_grp", "ns_brand", "ns_shop", "ns_category", "category", "ns_c", "ns_search_term", "ns_search_result", "ns_m_exp", "ns_m_chs", "c3", "ca3", "cb3", "cc3", "cd3", "c4", "ca4", "cb4", "cc4", "cd4", "c5", "ca5", "cb5", "cc5", "cd5", "c6", "ca6", "cb6", "cc6", "cd6", "c10", "c11", "c13", "c14", "c15", "c16", "c7", "c8", "c9", "ns_ap_er"]
            },
            m = function() {
                function a() {
                    function a() {
                        I = {}, I.ns_st_pt = "0", I.ns_st_bt = "0", I.ns_st_bc = "0", I.ns_st_pc = "0", I.ns_st_sq = "0", I.ns_st_cl = "0", I.ns_st_pn = "1", I.ns_st_tp = "1", I.ns_st_skc = "0", I.ns_st_et = "0", I.ns_st_cn = "1", I.ns_st_sc = "0", I.ns_st_ska = "0", I.ns_st_skd = "0", I.ns_st_skt = "0", I.ns_st_upc = "0", I.ns_st_lpc = "0", I.ns_st_upa = "0", I.ns_st_lpa = "0", I.ns_st_ub = "0", I.ns_st_br = "0", f = !1, e = !1, d = h.UNKNOWN_VALUE, g = NaN, m = 0, j = 0, i = NaN, n = NaN, p = 0, o = 0, k = 0, s = NaN, q = [], r = [], t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = NaN, A = 0, B = !1, C = NaN, F = !1, E = 0, H = 0, D = 0, G = 0, J = 0, K = 0, L = 0, M = 0, N = 0
                    }

                    function c() {
                        var a, b, c = 0;
                        for (a = 0; a < q.length; a++) c += Math.abs(q[a].end - q[a].start);
                        O.setUniquePlaybackInterval(c);
                        var d = 0;
                        for (a = 0; a < q.length; a++) b = Math.abs(q[a].end - q[a].start), b > d && (d = b);
                        O.setLongestPlaybackInterval(d);
                        var e = 0;
                        for (a = 0; a < r.length; a++) e += Math.abs(r[a].end - r[a].start);
                        O.setAssetUniquePlaybackInterval(e);
                        var f = 0;
                        for (a = 0; a < r.length; a++) b = Math.abs(r[a].end - r[a].start), b > f && (f = b);
                        O.setAssetLongestPlaybackInterval(f)
                    }
                    var d, e, f, g, i, j, k, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = this,
                        P = l.INTERVAL_MERGE_TOLERANCE;
                    b.extend(this, {
                        getHash: function() {
                            return d
                        },
                        setHash: function(a) {
                            d = a
                        },
                        setPlaybackIntervalMergeTolerance: function(a) {
                            P = a
                        },
                        getPlaybackIntervalMergeTolerance: function() {
                            return P
                        },
                        setLabels: function(a) {
                            null != a && b.extend(I, a)
                        },
                        getLabels: function() {
                            return I
                        },
                        setLabel: function(a, b) {
                            var c = {};
                            c[a] = b, O.setLabels(c)
                        },
                        getLabel: function(a) {
                            return I[a]
                        },
                        getClipNumber: function() {
                            return parseInt(O.getLabel("ns_st_cn"))
                        },
                        setClipNumber: function(a) {
                            O.setLabel("ns_st_cn", String(a))
                        },
                        getPartNumber: function() {
                            return parseInt(O.getLabel("ns_st_pn"))
                        },
                        createLabels: function(a) {
                            var c = a || {};
                            c.ns_st_dbt = String(O.getBufferingTime() - A), A = O.getBufferingTime(), c.ns_st_det = String(O.getElapsedTime() - o), o = O.getElapsedTime(), c.ns_st_dupc = String(O.getUniquePlaybackInterval() - t), t = O.getUniquePlaybackInterval(), parseInt(c.ns_st_dupc) < 0 && (c.ns_st_dupc = "0");
                            var d;
                            d = b.exists(c.ns_st_upc) ? parseInt(c.ns_st_upc) : O.getUniquePlaybackInterval(), c.ns_st_iupc = String(d - u), u = d, parseInt(c.ns_st_iupc) < 0 && (c.ns_st_iupc = "0"), c.ns_st_dupa = String(O.getAssetUniquePlaybackInterval() - v), v = O.getAssetUniquePlaybackInterval(), parseInt(c.ns_st_dupa) < 0 && (c.ns_st_dupa = "0");
                            var e;
                            e = b.exists(c.ns_st_upa) ? parseInt(c.ns_st_upa) : O.getAssetUniquePlaybackInterval(), c.ns_st_iupa = String(e - w), w = e, parseInt(c.ns_st_iupa) < 0 && (c.ns_st_iupa = "0"), c.ns_st_dlpc = String(O.getLongestPlaybackInterval() - x), x = O.getLongestPlaybackInterval(), parseInt(c.ns_st_dlpc) < 0 && (c.ns_st_dlpc = "0"), c.ns_st_dlpa = String(O.getAssetLongestPlaybackInterval() - y), y = O.getAssetLongestPlaybackInterval(), parseInt(c.ns_st_dlpa) < 0 && (c.ns_st_dlpa = "0");
                            var g;
                            return g = b.exists(c.ns_st_pt) ? parseInt(c.ns_st_pt) : O.getPlaybackTime(), c.ns_st_ipt = String(g - k), k = g, c.ns_st_dpt = String(O.getPlaybackTime() - j), j = O.getPlaybackTime(), c.ns_st_dpc = String(O.getPauses() - J), J = O.getPauses(), c.ns_st_dskc = String(O.getSeeks() - K), K = O.getSeeks(), c.ns_st_dbc = String(O.getBuffers() - L), L = O.getBuffers(), c.ns_st_dskt = String(O.getSeekingTime() - D), D = O.getSeekingTime(), c.ns_st_dska = String(O.getSeekingAmount() - G), G = O.getSeekingAmount(), b.extend(c, O.getLabels()), O.setSeekingDirection(0), f && (c.ns_st_spc = String(M), c.ns_st_apc = String(N)), f || b.parseBoolean(c.ns_st_sc) || (c.ns_st_sc = "1"), c
                        },
                        getVideoTrack: function() {
                            return O.getLabel("ns_st_vt")
                        },
                        setVideoTrack: function(a) {
                            O.setLabel("ns_st_vt", String(a))
                        },
                        getAudioTrack: function() {
                            return O.getLabel("ns_st_at")
                        },
                        setAudioTrack: function(a) {
                            O.setLabel("ns_st_at", String(a))
                        },
                        getSubtitleTrack: function() {
                            return O.getLabel("ns_st_tt")
                        },
                        setSubtitleTrack: function(a) {
                            O.setLabel("ns_st_tt", String(a))
                        },
                        getCDN: function() {
                            return O.getLabel("ns_st_cdn")
                        },
                        setCDN: function(a) {
                            O.setLabel("ns_st_cdn", String(a))
                        },
                        getClipPlaybackIntervals: function() {
                            return q
                        },
                        setClipPlaybackIntervals: function(a) {
                            q = a
                        },
                        getAssetPlaybackIntervals: function() {
                            return r
                        },
                        getUniquePlaybackInterval: function() {
                            return parseInt(O.getLabel("ns_st_upc"))
                        },
                        getAssetUniquePlaybackInterval: function() {
                            return parseInt(O.getLabel("ns_st_upa"))
                        },
                        setAssetUniquePlaybackInterval: function(a) {
                            O.setLabel("ns_st_upa", String(a))
                        },
                        setUniquePlaybackInterval: function(a) {
                            O.setLabel("ns_st_upc", String(a))
                        },
                        getLongestPlaybackInterval: function() {
                            return parseInt(O.getLabel("ns_st_lpc"))
                        },
                        setLongestPlaybackInterval: function(a) {
                            O.setLabel("ns_st_lpc", String(a))
                        },
                        getAssetLongestPlaybackInterval: function() {
                            return parseInt(O.getLabel("ns_st_lpa"))
                        },
                        setAssetLongestPlaybackInterval: function(a) {
                            O.setLabel("ns_st_lpa", String(a))
                        },
                        incrementPauses: function() {
                            O.setLabel("ns_st_pc", String(O.getPauses() + 1))
                        },
                        incrementSeeks: function() {
                            O.setLabel("ns_st_skc", String(O.getSeeks() + 1))
                        },
                        incrementPlayCounter: function() {
                            O.setLabel("ns_st_sq", String(O.getPlayCounter() + 1))
                        },
                        getPlayCounter: function() {
                            return parseInt(O.getLabel("ns_st_sq"))
                        },
                        getBufferingTime: function() {
                            return parseInt(O.getLabel("ns_st_bt"))
                        },
                        setBufferingTime: function(a) {
                            O.setLabel("ns_st_bt", String(a))
                        },
                        addBufferingTime: function(a) {
                            if (!isNaN(z)) {
                                var b = O.getBufferingTime();
                                b += a - z, O.setBufferingTime(b), z = NaN
                            }
                        },
                        setPlaybackStartPosition: function(a) {
                            s = parseInt(a)
                        },
                        getPlaybackStartPosition: function() {
                            return s
                        },
                        addInterval: function(a) {
                            isNaN(s) || isNaN(a) || (q = b.addNewPlaybackInterval(q, s, a, P), r = b.addNewPlaybackInterval(r, s, a, P), c(), s = NaN)
                        },
                        getElapsedTime: function() {
                            return parseInt(O.getLabel("ns_st_et"))
                        },
                        setElapsedTime: function(a) {
                            O.setLabel("ns_st_et", String(a))
                        },
                        addElapsedTime: function(a) {
                            if (!isNaN(n)) {
                                var b = O.getElapsedTime();
                                b += a - n, O.setElapsedTime(b), n = NaN
                            }
                        },
                        getElapsedTimestamp: function() {
                            return n
                        },
                        setElapsedTimestamp: function(a) {
                            n = a
                        },
                        addPlaybackTime: function(a) {
                            if (!isNaN(g)) {
                                var b = O.getPlaybackTime();
                                b += a - g, O.setPlaybackTime(b), g = NaN
                            }
                        },
                        getPlaybackTime: function() {
                            return parseInt(O.getLabel("ns_st_pt"))
                        },
                        getExpectedPlaybackPosition: function(a) {
                            return isNaN(g) || (m += a - g), m
                        },
                        setPlaybackTimeOffset: function(a) {
                            m = a
                        },
                        getPlaybackTimeOffset: function() {
                            return m
                        },
                        setPlaybackTime: function(a) {
                            O.setLabel("ns_st_pt", String(a))
                        },
                        getPlaybackTimestamp: function() {
                            return g
                        },
                        setPlaybackTimestamp: function(a) {
                            g = a
                        },
                        setPreviousPlaybackTime: function(a) {
                            j = a
                        },
                        setPreviousPlaybackTimestamp: function(a) {
                            i = a
                        },
                        getBufferingTimestamp: function() {
                            return z
                        },
                        setBufferingTimestamp: function(a) {
                            z = a
                        },
                        getPauses: function() {
                            return parseInt(O.getLabel("ns_st_pc"))
                        },
                        setPauses: function(a) {
                            O.setLabel("ns_st_pc", String(a))
                        },
                        getSeeks: function() {
                            return parseInt(O.getLabel("ns_st_skc"))
                        },
                        setSeeks: function(a) {
                            O.setLabel("ns_st_skc", String(a))
                        },
                        setSeeking: function(a) {
                            B = a
                        },
                        isSeeking: function() {
                            return B
                        },
                        setCollectingSeekingTime: function(a) {
                            F = a
                        },
                        isCollectingSeekingTime: function() {
                            return F
                        },
                        setClipStarted: function(a) {
                            e = a
                        },
                        isClipStarted: function() {
                            return e
                        },
                        setPlaybackStarted: function(a) {
                            f = a
                        },
                        isPlaybackStarted: function() {
                            return f
                        },
                        setSeekingTimestamp: function(a) {
                            C = a
                        },
                        getSeekingTimestamp: function() {
                            return C
                        },
                        addSeekingTime: function(a) {
                            if (!isNaN(C)) {
                                var b = O.getSeekingTime();
                                b += a - C, O.setSeekingTime(b), C = NaN
                            }
                        },
                        getSeekingTime: function() {
                            return parseInt(O.getLabel("ns_st_skt"))
                        },
                        setSeekingTime: function(a) {
                            O.setLabel("ns_st_skt", String(a))
                        },
                        setSeekingTimeBeforeEnd: function(a) {
                            H = a
                        },
                        getSeekingTimeBeforeEnd: function() {
                            return H
                        },
                        setSeekStartPosition: function(a) {
                            E = a
                        },
                        getSeekStartPosition: function() {
                            return E
                        },
                        setSeekingAmount: function(a) {
                            O.setLabel("ns_st_ska", String(a))
                        },
                        getSeekingAmount: function() {
                            return parseInt(O.getLabel("ns_st_ska"))
                        },
                        addSeekingAmount: function(a) {
                            var b = O.getSeekingAmount();
                            b += Math.abs(a - E), O.setSeekingAmount(b);
                            var c;
                            E == a ? c = 0 : E > a ? c = -1 : a > E && (c = 1), O.setSeekingDirection(c), E = 0
                        },
                        getSeekingDirection: function() {
                            return parseInt(O.getLabel("ns_st_skd"))
                        },
                        setSeekingDirection: function(a) {
                            O.setLabel("ns_st_skd", String(a))
                        },
                        resetClipLifecycleLabels: function() {
                            I.ns_st_pt = "0", j = 0, k = 0, I.ns_st_bt = "0", A = 0, I.ns_st_bc = "0", L = 0, I.ns_st_pc = "0", J = 0, I.ns_st_sq = "0", I.ns_st_upa = "0", v = 0, w = 0, I.ns_st_et = "0", o = 0, I.ns_st_lpa = "0", y = 0, I.ns_st_skt = "0", D = 0, I.ns_st_ska = "0", G = 0, I.ns_st_skc = "0", K = 0
                        },
                        incrementSegmentPlaybackCounter: function() {
                            M++
                        },
                        incrementClipLoadCounter: function() {
                            O.setLabel("ns_st_sc", String(O.getClipLoadCounter() + 1))
                        },
                        incrementAssetPlaybackCounter: function() {
                            N++
                        },
                        setPreviousUniquePlaybackInterval: function(a) {
                            t = a
                        },
                        setPreviousEventIndependentUniquePlaybackInterval: function(a) {
                            u = a
                        },
                        setPreviousLongestPlaybackInterval: function(a) {
                            x = a
                        },
                        resetAssetPlaybackCounters: function() {
                            r = [], O.setAssetUniquePlaybackInterval(0), v = 0, w = 0, O.setAssetLongestPlaybackInterval(0), y = 0
                        },
                        setSegmentPlaybackCounter: function(a) {
                            M = a
                        },
                        setClipLoadCounter: function(a) {
                            O.setLabel("ns_st_sc", String(a))
                        },
                        setAssetPlaybackCounter: function(a) {
                            N = a
                        },
                        setLowestPartNumberPlayed: function(a) {
                            p = a
                        },
                        getSegmentPlaybackCounter: function() {
                            return M
                        },
                        getClipLoadCounter: function() {
                            return parseInt(O.getLabel("ns_st_sc"))
                        },
                        getAssetPlaybackCounter: function() {
                            return N
                        },
                        getLowestPartNumberPlayed: function() {
                            return p
                        },
                        getBuffers: function() {
                            return parseInt(O.getLabel("ns_st_bc"))
                        },
                        incrementBufferCount: function() {
                            O.setLabel("ns_st_bc", String(O.getBuffers() + 1))
                        },
                        getPreviousBufferingTime: function() {
                            return A
                        }
                    }), a()
                }
                return a.resetClip = function(a, b, c) {
                    for (var d = a.getLabels(), e = {}, f = 0; c && f < c.length; ++f) d.hasOwnProperty(c[f]) && (e[c[f]] = d[c[f]]);
                    b.setLabels(e), b.setPlaybackIntervalMergeTolerance(a.getPlaybackIntervalMergeTolerance())
                }, a
            }(),
            n = function() {
                function a() {
                    function a() {
                        c = new m, f = {}, f.ns_st_bp = "0", f.ns_st_pa = "0", f.ns_st_pp = "0", f.ns_st_sp = "1", f.ns_st_id = String(+(new Date)), d = NaN, e = NaN, h = {}, i = 0, g = !1, j = !1, k = 0
                    }
                    var c, d, e, f, g, h, i, j, k, l = this;
                    b.extend(this, {
                        resetClip: function() {
                            var a = c;
                            c = new m, m.resetClip(a, c)
                        },
                        hashExists: function(a) {
                            return null != h[a]
                        },
                        storeHash: function(a) {
                            h[a] = {}
                        },
                        removeHash: function(a) {
                            delete h[a]
                        },
                        storeClipPlaybackCounters: function() {
                            for (var a in h)
                                if (h.hasOwnProperty(a) && h[a].clipNumber === c.getClipNumber()) {
                                    b.extend(h[a], {
                                        segmentPlaybackCounter: c.getSegmentPlaybackCounter(),
                                        clipLoadCounter: c.getClipLoadCounter(),
                                        assetPlaybackCounter: c.getAssetPlaybackCounter(),
                                        lowestPartNumberPlayed: c.getLowestPartNumberPlayed(),
                                        seeking: c.isSeeking(),
                                        seekingTimeBeforeEnd: c.getSeekingTimeBeforeEnd(),
                                        seekingStartPosition: c.getSeekStartPosition(),
                                        clipPlaybackIntervals: c.getClipPlaybackIntervals(),
                                        uniquePlaybackInterval: c.getUniquePlaybackInterval(),
                                        longestPlaybackInterval: c.getLongestPlaybackInterval(),
                                        videoTrack: c.getVideoTrack(),
                                        audioTrack: c.getAudioTrack(),
                                        subtitleTrack: c.getSubtitleTrack(),
                                        cdn: c.getCDN()
                                    });
                                    break
                                }
                        },
                        getStoredClipRegisters: function(a) {
                            return h[a]
                        },
                        getClipNumber: function(a) {
                            return h[a].clipNumber
                        },
                        getMaxClipNumber: function() {
                            return i
                        },
                        storeClipNumber: function(a, b) {
                            h[a].clipNumber = b, b > i && (i = b)
                        },
                        setLabels: function(a) {
                            null != a && b.extend(f, a)
                        },
                        getLabels: function() {
                            return f
                        },
                        setLabel: function(a, b) {
                            var c = {};
                            c[a] = b, l.setLabels(c)
                        },
                        getLabel: function(a) {
                            return f[a]
                        },
                        getClip: function() {
                            return c
                        },
                        createLabels: function(a) {
                            var d = a || {};
                            return j || (d.ns_st_pb = null != d.ns_st_pb ? d.ns_st_pb : "1"), b.extend(d, l.getLabels()), c.isPlaybackStarted() && (d.ns_st_ppc = String(k)), d
                        },
                        incrementPlayCounter: function() {
                            l.setLabel("ns_st_sp", String(parseInt(l.getLabel("ns_st_sp")) + 1))
                        },
                        incrementPauses: function() {
                            l.setLabel("ns_st_pp", String(l.getPauses() + 1))
                        },
                        addPlaybackTime: function(a) {
                            if (!isNaN(e)) {
                                var b = l.getPlaybackTime();
                                b += a - e, l.setPlaybackTime(b), e = NaN
                            }
                        },
                        addBufferingTime: function(a) {
                            if (!isNaN(d)) {
                                var b = l.getBufferingTime();
                                b += a - d, l.setBufferingTime(b), d = NaN
                            }
                        },
                        getBufferingTime: function() {
                            return parseInt(l.getLabel("ns_st_bp"))
                        },
                        setBufferingTime: function(a) {
                            l.setLabel("ns_st_bp", String(a))
                        },
                        getPlaybackTime: function() {
                            return parseInt(l.getLabel("ns_st_pa"))
                        },
                        setBufferingTimestamp: function(a) {
                            d = a
                        },
                        getBufferingTimestamp: function() {
                            return d
                        },
                        setPlaybackTime: function(a) {
                            l.setLabel("ns_st_pa", String(a))
                        },
                        setPlaybackTimestamp: function(a) {
                            e = a
                        },
                        getPlaybackTimestamp: function() {
                            return e
                        },
                        getPauses: function() {
                            return parseInt(l.getLabel("ns_st_pp"))
                        },
                        setPauses: function(a) {
                            l.setLabel("ns_st_pp", String(a))
                        },
                        isPlaylistStarted: function() {
                            return g
                        },
                        setPlaylistStarted: function(a) {
                            g = a
                        },
                        getPlaybackCounter: function() {
                            return k
                        },
                        incrementPlaybackCounter: function() {
                            k++
                        },
                        setFirstEventSent: function(a) {
                            j = a
                        }
                    }), a()
                }
                return a.resetPlaylist = function(b, c, d) {
                    for (var e = b.getClip(), f = b.getLabels(), g = {}, h = 0; d && h < d.length; h++) f.hasOwnProperty(d[h]) && (g[d[h]] = f[d[h]]);
                    c = new a, c.setLabels(g), m.resetClip(e, c.getClip(), d)
                }, a
            }(),
            o = function() {
                return function(a) {
                    function c() {
                        e = 1
                    }

                    function d(c) {
                        f = b.extend({}, c);
                        var d = a.getSSECore().getPixelURL();
                        if (a.getAppCore()) {
                            if (a.getSSECore().isProperlyInitialized()) {
                                var e = a.getSSECore().getExports().am,
                                    g = a.getSSECore().getExports().et,
                                    h = e.newApplicationMeasurement(a.getAppCore(), g.HIDDEN, c, d);
                                a.getAppCore().getQueue().offer(h)
                            }
                        } else d && a.getSSECore().getPlatformAPI().httpGet(a.getSSECore().prepareUrl(d, c))
                    }
                    var e, f, g = this;
                    b.extend(this, {
                        newEvent: function(a) {
                            d(a.eventLabels), a.eventType != i.HEARTBEAT && g.incrementEventCounter()
                        },
                        getEventCounter: function() {
                            return e
                        },
                        incrementEventCounter: function() {
                            e++
                        },
                        setEventCounter: function(a) {
                            e = a
                        },
                        getMeasurementSnapshot: function() {
                            return f
                        }
                    }), c()
                }
            }(),
            p = function() {
                return function(a) {
                    function c() {
                        g = 0, h = 0
                    }

                    function d() {
                        h++;
                        var c = {},
                            d = b.fixEventTime(c);
                        c.ns_st_po = String(a.getPlaylist().getClip().getPlaybackTimeOffset() + (d - a.getPlaylist().getClip().getPlaybackTimestamp())), c.ns_st_pa = String(a.getPlaylist().getPlaybackTime() + (d - a.getPlaylist().getPlaybackTimestamp())), c.ns_st_pt = String(a.getPlaylist().getClip().getPlaybackTime() + (d - a.getPlaylist().getClip().getPlaybackTimestamp())), c.ns_st_dpt = String(d - a.getPlaylist().getClip().getPlaybackTimestamp()), a.getStateMachine().getCurrentState() == j.BUFFERING_DURING_PLAYBACK ? (c.ns_st_bp = String(a.getPlaylist().getBufferingTime() + (d - a.getPlaylist().getBufferingTimestamp())), c.ns_st_bt = String(a.getPlaylist().getClip().getBufferingTime() + (d - a.getPlaylist().getClip().getBufferingTimestamp())), c.ns_st_dbt = String(d - a.getPlaylist().getClip().getBufferingTimestamp())) : c.ns_st_dbt = String(a.getPlaylist().getClip().getBufferingTime() - a.getPlaylist().getClip().getPreviousBufferingTime()), c.ns_st_et = String(a.getPlaylist().getClip().getElapsedTime() + (d - a.getPlaylist().getClip().getElapsedTimestamp())), c.ns_st_det = String(d - a.getPlaylist().getClip().getElapsedTimestamp());
                        var e = b.cloneObject(a.getPlaylist().getClip().getClipPlaybackIntervals()),
                            f = b.cloneObject(a.getPlaylist().getClip().getAssetPlaybackIntervals());
                        e = b.addNewPlaybackInterval(e, a.getPlaylist().getClip().getPlaybackStartPosition(), parseInt(c.ns_st_po), a.getPlaylist().getClip().getPlaybackIntervalMergeTolerance()), f = b.addNewPlaybackInterval(f, a.getPlaylist().getClip().getPlaybackStartPosition(), parseInt(c.ns_st_po), a.getPlaylist().getClip().getPlaybackIntervalMergeTolerance());
                        var l, m, n = 0;
                        for (l = 0; l < e.length; l++) n += Math.abs(e[l].end - e[l].start);
                        c.ns_st_upc = String(n), c.ns_st_dupc = String(n - a.getPlaylist().getClip().getUniquePlaybackInterval());
                        var o = 0;
                        for (l = 0; l < e.length; l++) m = Math.abs(e[l].end - e[l].start), m > o && (o = m);
                        c.ns_st_lpc = String(o), c.ns_st_dlpc = String(o - a.getPlaylist().getClip().getLongestPlaybackInterval());
                        var p = 0;
                        for (l = 0; l < f.length; l++) p += Math.abs(f[l].end - f[l].start);
                        c.ns_st_upa = String(p), c.ns_st_dupa = String(p - a.getPlaylist().getClip().getAssetUniquePlaybackInterval());
                        var q = 0;
                        for (l = 0; l < f.length; l++) m = Math.abs(f[l].end - f[l].start), m > q && (q = m);
                        c.ns_st_lpa = String(q), c.ns_st_dlpa = String(q - a.getPlaylist().getClip().getAssetLongestPlaybackInterval()), c.ns_st_hc = String(a.getHeartbeat().getCount());
                        var r = a.getSSECore().createLabels(i.HEARTBEAT, c, d);
                        a.getEventManager().newEvent(r), g = 0, k.resume()
                    }

                    function e() {
                        null != f && (a.getSSECore().getPlatformAPI().clearTimeout(f), f = null)
                    }
                    var f, g, h, k = this,
                        m = l.DEFAULT_HEARTBEAT_INTERVAL;
                    b.extend(this, {
                        getCount: function() {
                            return h
                        },
                        setIntervals: function(a) {
                            m = a
                        },
                        getInterval: function(a) {
                            var b = 0;
                            if (null != m)
                                for (var c = 0; c < m.length; c++) {
                                    var d = m[c],
                                        e = d.playingtime;
                                    if (!e || e > a) {
                                        b = d.interval;
                                        break
                                    }
                                }
                            return b
                        },
                        resume: function() {
                            e();
                            var b = k.getInterval(a.getPlaylist().getClip().getPlaybackTime() + (+(new Date) - a.getPlaylist().getClip().getPlaybackTimestamp()));
                            if (b > 0) {
                                var c = g > 0 ? g : b;
                                f = a.getSSECore().getPlatformAPI().setTimeout(d, c)
                            }
                            g = 0
                        },
                        pause: function() {
                            e();
                            var b = k.getInterval(a.getPlaylist().getClip().getPlaybackTime() + (+(new Date) - a.getPlaylist().getClip().getPlaybackTimestamp()));
                            g = b - (a.getPlaylist().getClip().getPlaybackTime() + (+(new Date) - a.getPlaylist().getClip().getPlaybackTimestamp())) % b
                        }
                    }), c()
                }
            }(),
            q = function() {
                return function(a) {
                    function c() {}

                    function d() {
                        var c = {},
                            d = b.fixEventTime(c);
                        c.ns_st_po = String(a.getPlaylist().getClip().getExpectedPlaybackPosition(d)), a.getPlaylist().addPlaybackTime(d), a.getPlaylist().setPlaybackTimestamp(d), a.getPlaylist().getClip().addPlaybackTime(d), a.getPlaylist().getClip().setPlaybackTimestamp(d), a.getStateMachine().getCurrentState() == j.BUFFERING_DURING_PLAYBACK && (a.getPlaylist().addBufferingTime(d), a.getPlaylist().setBufferingTimestamp(d), a.getPlaylist().getClip().addBufferingTime(d), a.getPlaylist().getClip().setBufferingTimestamp(d)), a.getPlaylist().getClip().addElapsedTime(d), a.getPlaylist().getClip().setElapsedTimestamp(d), a.getPlaylist().getClip().addInterval(parseInt(c.ns_st_po)), a.getPlaylist().getClip().setPlaybackStartPosition(parseInt(c.ns_st_po));
                        var e = a.getSSECore().createLabels(i.KEEPALIVE, c, d);
                        a.getEventManager().newEvent(e), g.resume()
                    }

                    function e() {
                        null != f && (a.getSSECore().getPlatformAPI().clearTimeout(f), f = null)
                    }
                    var f, g = this,
                        h = l.DEFAULT_KEEP_ALIVE_INTERVAL;
                    b.extend(g, {
                        resume: function() {
                            e(), f = a.getSSECore().getPlatformAPI().setTimeout(d, h)
                        },
                        pause: function() {
                            e()
                        },
                        setInterval: function(a) {
                            h = a
                        },
                        getInterval: function() {
                            return h
                        }
                    }), c()
                }
            }(),
            r = function() {
                return function(a) {
                    function c() {
                        f = j.IDLE, e = null, d = NaN
                    }
                    var d, e, f, g = this;
                    b.extend(g, {
                        eventTypeToState: function(a) {
                            if (f == j.IDLE) {
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.SEEK_START) return j.SEEKING_BEFORE_PLAYBACK;
                                if (a == i.BUFFER) return j.BUFFERING_BEFORE_PLAYBACK
                            } else if (f == j.PLAYBACK_NOT_STARTED) {
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.SEEK_START) return j.SEEKING_BEFORE_PLAYBACK;
                                if (a == i.BUFFER) return j.BUFFERING_BEFORE_PLAYBACK;
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE
                            } else if (f == j.PLAYING) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.BUFFER) return j.BUFFERING_DURING_PLAYBACK;
                                if (a == i.PAUSE) return j.PAUSED;
                                if (a == i.SEEK_START) return j.SEEKING_DURING_PLAYBACK
                            } else if (f == j.PAUSED) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.BUFFER) return j.BUFFERING_DURING_PAUSE;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.SEEK_START) return j.SEEKING_DURING_PAUSE
                            } else if (f == j.BUFFERING_BEFORE_PLAYBACK) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PAUSE || a == i.BUFFER_STOP) return j.PLAYBACK_NOT_STARTED;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.SEEK_START) return j.SEEKING_BEFORE_PLAYBACK
                            } else if (f == j.BUFFERING_DURING_PLAYBACK) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PLAY || a == i.BUFFER_STOP) return j.PLAYING;
                                if (a == i.PAUSE_ON_BUFFERING) return j.PAUSED_DURING_BUFFERING;
                                if (a == i.SEEK_START) return j.SEEKING_DURING_BUFFERING;
                                if (a == i.PAUSE) return j.PAUSED
                            } else if (f == j.BUFFERING_DURING_SEEKING) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.BUFFER_STOP) return j.SEEKING_DURING_PLAYBACK;
                                if (a == i.PAUSE) return j.PAUSED
                            } else if (f == j.BUFFERING_DURING_PAUSE) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.SEEK_START) return j.SEEKING_DURING_PAUSE;
                                if (a == i.BUFFER_STOP || a == i.PAUSE) return j.PAUSED
                            } else if (f == j.SEEKING_BEFORE_PLAYBACK) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PAUSE) return j.PLAYBACK_NOT_STARTED;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.BUFFER) return j.BUFFERING_BEFORE_PLAYBACK
                            } else if (f == j.SEEKING_DURING_PLAYBACK) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.PAUSE) return j.PAUSED;
                                if (a == i.BUFFER) return j.BUFFERING_DURING_SEEKING
                            } else if (f == j.SEEKING_DURING_BUFFERING) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.PAUSE || a == i.BUFFER_STOP) return j.PAUSED
                            } else if (f == j.SEEKING_DURING_PAUSE) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.PLAY) return j.PLAYING;
                                if (a == i.PAUSE || a == i.BUFFER_STOP) return j.PAUSED;
                                if (a == i.BUFFER) return j.BUFFERING_DURING_PAUSE
                            } else if (f == j.PAUSED_DURING_BUFFERING) {
                                if (a == i.END || a == i.AD_SKIP) return j.IDLE;
                                if (a == i.SEEK_START) return j.SEEKING_DURING_BUFFERING;
                                if (a == i.PAUSE) return j.PAUSED;
                                if (a == i.PLAY || a == i.BUFFER_STOP) return j.PLAYING
                            }
                            return null
                        },
                        getCurrentState: function() {
                            return f
                        },
                        newEvent: function(a, b) {
                            var c = g.eventTypeToState(a);
                            f != c && (e = f, f = c, d = b)
                        },
                        getPreviousState: function() {
                            return e
                        },
                        getLastStateChangeTimestamp: function() {
                            return d
                        }
                    }), c()
                }
            }(),
            s = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onSeekStartWhenPausedOrBufferingDuringPause: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().getClip().isSeeking() ? a.getPlaylist().getClip().isCollectingSeekingTime() || (a.getPlaylist().getClip().setSeekingTimestamp(b), a.getPlaylist().getClip().setCollectingSeekingTime(!0)) : a.getPlaylist().getClip().incrementSeeks(), a.getPlaylist().getClip().isSeeking() || (a.getPlaylist().getClip().setSeeking(!0), a.getPlaylist().getClip().setCollectingSeekingTime(!0), a.getPlaylist().getClip().setSeekStartPosition(d), a.getPlaylist().getClip().setSeekingTimestamp(b))
                        },
                        onBufferWhenSeekingOrPlayBackNotStartedOrPaused: function(b, c) {
                            a.getPlaylist().setBufferingTimestamp(b), a.getPlaylist().getClip().setBufferingTimestamp(b)
                        },
                        onPlayWhenSeekingDuringBufferingOrSeekingDuringPause: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().getClip().isSeeking() && (a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().addSeekingTime(b), a.getPlaylist().getClip().setCollectingSeekingTime(!1)), a.getPlaylist().getClip().addSeekingAmount(d), a.getPlaylist().getClip().setSeeking(!1)), a.getPlaylist().getClip().incrementPlayCounter(), a.getPlaylist().setPlaybackTimestamp(b), a.getPlaylist().getClip().setPlaybackTimestamp(b), a.getPlaylist().getClip().addElapsedTime(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().resume();
                            var e = a.getSSECore().createLabels(i.PLAY, c, b);
                            a.getEventManager().newEvent(e)
                        },
                        onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause: function(b, c) {
                            a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b)
                        },
                        onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause: function(b, c) {
                            a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().addSeekingTime(b), a.getPlaylist().getClip().setCollectingSeekingTime(!1))
                        },
                        onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause: function(c, d) {
                            a.getSSECore().resetHeartbeat(), a.getSSECore().resetKeepAlive(), a.getPlaylist().getClip().addElapsedTime(c);
                            var e = a.getSSECore().createLabels(i.END, d, c);
                            a.getEventManager().newEvent(e), a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c - a.getPlaylist().getClip().getSeekingTimestamp()), a.getPlaylist().getClip().setCollectingSeekingTime(!1)), a.getPlaylist().storeClipPlaybackCounters(), a.getPlaylist().getClip().resetClipLifecycleLabels(), a.getPlaylist().getClip().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getSSECore().resetPlaylist()
                        },
                        onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause: function(b, c) {
                            a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().addSeekingTime(b), a.getPlaylist().getClip().setCollectingSeekingTime(!1))
                        }
                    })
                }
            }(),
            t = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            a.getPlaylist().addBufferingTime(c), a.getPlaylist().getClip().addBufferingTime(c), a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c - a.getPlaylist().getClip().getSeekingTimestamp()), a.getPlaylist().getClip().resetClipLifecycleLabels(), a.getPlaylist().getClip().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getSSECore().resetPlaylist()
                        },
                        onBufferStop: function(b, c) {
                            a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b), a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().addSeekingTime(b), a.getPlaylist().getClip().setCollectingSeekingTime(!1))
                        },
                        onSeekStart: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b), a.getPlaylist().getClip().isSeeking() ? a.getPlaylist().getClip().isCollectingSeekingTime() || (a.getPlaylist().getClip().setSeekingTimestamp(b), a.getPlaylist().getClip().setCollectingSeekingTime(!0)) : a.getPlaylist().getClip().incrementSeeks(), a.getPlaylist().getClip().isSeeking() || (a.getPlaylist().getClip().setSeeking(!0), a.getPlaylist().getClip().setCollectingSeekingTime(!0), a.getPlaylist().getClip().setSeekStartPosition(d), a.getPlaylist().getClip().setSeekingTimestamp(b))
                        },
                        onPause: function(b, c) {
                            a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b), a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().addSeekingTime(b), a.getPlaylist().getClip().setCollectingSeekingTime(!1))
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b), a.getPlaylist().getClip().isSeeking() && (a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().addSeekingTime(b), a.getPlaylist().getClip().setCollectingSeekingTime(!1)), a.getPlaylist().getClip().addSeekingAmount(d), a.getPlaylist().getClip().setSeeking(!1)), a.getPlaylist().isPlaylistStarted() || (a.getPlaylist().setPlaylistStarted(!0), a.getPlaylist().incrementPlaybackCounter()), a.getPlaylist().getClip().setClipStarted(!0), a.getPlaylist().getClip().setPlaybackStarted(!0), a.getPlaylist().getClip().incrementSegmentPlaybackCounter(), (0 == a.getPlaylist().getClip().getLowestPartNumberPlayed() || parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn) <= a.getPlaylist().getClip().getLowestPartNumberPlayed()) && (a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)), a.getPlaylist().getClip().incrementAssetPlaybackCounter(), a.getPlaylist().getClip().resetAssetPlaybackCounters()), a.getPlaylist().getClip().incrementPlayCounter(), a.getPlaylist().setPlaybackTimestamp(b), a.getPlaylist().getClip().setPlaybackTimestamp(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().setPlaybackStartPosition(d), a.getSSECore().isLoadingTimeSent() || (c.ns_st_lt = String(a.getSSECore().getLoadTimeOffset() + b - a.getSSECore().getInitTimestamp()), a.getSSECore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().resume();
                            var e = a.getSSECore().createLabels(i.PLAY, c, b);
                            a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            u = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndAndSkip: function(c, d) {
                            a.getSSECore().resetHeartbeat(), a.getSSECore().resetKeepAlive(), a.getPlaylist().addBufferingTime(c), a.getPlaylist().getClip().addBufferingTime(c), a.getPlaylist().getClip().addElapsedTime(c);
                            var e = a.getSSECore().createLabels(i.END, d, c);
                            a.getEventManager().newEvent(e), a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c - a.getPlaylist().getClip().getSeekingTimestamp()), a.getPlaylist().getClip().setCollectingSeekingTime(!1)), a.getPlaylist().storeClipPlaybackCounters(), a.getPlaylist().getClip().resetClipLifecycleLabels(), a.getPlaylist().getClip().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getSSECore().resetPlaylist()
                        },
                        onPause: function(b, c) {
                            a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b)
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b), a.getPlaylist().getClip().isSeeking() && (a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().addSeekingTime(b), a.getPlaylist().getClip().setCollectingSeekingTime(!1)), a.getPlaylist().getClip().addSeekingAmount(d), a.getPlaylist().getClip().setSeeking(!1)), a.getPlaylist().getClip().incrementPlayCounter(), a.getPlaylist().setPlaybackTimestamp(b), a.getPlaylist().getClip().setPlaybackTimestamp(b), a.getPlaylist().getClip().addElapsedTime(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().resume();
                            var e = a.getSSECore().createLabels(i.PLAY, c, b);
                            a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            v = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onPauseOnBuffering: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getSSECore().stopPausedOnBufferingTimer(), a.getHeartbeat().pause(), a.getSSECore().resetKeepAlive(), a.getPlaylist().addPlaybackTime(b), a.getPlaylist().getClip().addPlaybackTime(b), a.getPlaylist().getClip().addElapsedTime(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().addInterval(d), a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b), a.getPlaylist().incrementPauses(), a.getPlaylist().getClip().incrementPauses();
                            var e = a.getSSECore().createLabels(i.PAUSE, c, b);
                            a.getEventManager().newEvent(e), a.getPlaylist().setBufferingTimestamp(b), a.getPlaylist().getClip().setBufferingTimestamp(b), a.getPlaylist().getClip().setPlaybackTimeOffset(d)
                        },
                        onBufferStop: function(b, c) {
                            a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b)
                        },
                        onEndOrAdSkip: function(c, d) {
                            var e = parseInt(d.ns_st_po);
                            a.getSSECore().resetHeartbeat(), a.getSSECore().resetKeepAlive(), a.getSSECore().stopPausedOnBufferingTimer(), a.getPlaylist().addBufferingTime(c), a.getPlaylist().getClip().addBufferingTime(c), a.getPlaylist().getClip().addPlaybackTime(c), a.getPlaylist().getClip().addElapsedTime(c), a.getPlaylist().getClip().addInterval(e);
                            var f = a.getSSECore().createLabels(i.END, d, c);
                            a.getEventManager().newEvent(f), a.getPlaylist().getClip().resetClipLifecycleLabels(), a.getPlaylist().getClip().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getSSECore().resetPlaylist()
                        },
                        onSeekStart: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getSSECore().stopPausedOnBufferingTimer(), a.getPlaylist().addPlaybackTime(b), a.getPlaylist().getClip().addPlaybackTime(b), a.getPlaylist().getClip().addElapsedTime(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().addInterval(d), a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b), a.getPlaylist().getClip().incrementSeeks(), a.getPlaylist().getClip().setSeeking(!0), a.getPlaylist().getClip().setCollectingSeekingTime(!0), a.getPlaylist().getClip().setSeekStartPosition(d), a.getPlaylist().getClip().setSeekingTimestamp(b), a.getPlaylist().incrementPauses(), a.getPlaylist().getClip().incrementPauses();
                            var e = a.getSSECore().createLabels(i.PAUSE, c, b);
                            a.getEventManager().newEvent(e)
                        },
                        onPause: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getSSECore().stopPausedOnBufferingTimer(), a.getPlaylist().addPlaybackTime(b), a.getPlaylist().getClip().addPlaybackTime(b), a.getPlaylist().getClip().addElapsedTime(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().addInterval(d), a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b), a.getPlaylist().incrementPauses(), a.getPlaylist().getClip().incrementPauses();
                            var e = a.getSSECore().createLabels(i.PAUSE, c, b);
                            a.getEventManager().newEvent(e)
                        },
                        onPlay: function(b, c) {
                            a.getSSECore().stopPausedOnBufferingTimer(), a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b)
                        }
                    })
                }
            }(),
            w = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            a.getSSECore().resetHeartbeat(), a.getSSECore().resetKeepAlive(), a.getSSECore().stopPausedOnBufferingTimer(), a.getPlaylist().addBufferingTime(c), a.getPlaylist().getClip().addBufferingTime(c), a.getPlaylist().getClip().addElapsedTime(c);
                            var e = a.getSSECore().createLabels(i.END, d, c);
                            a.getEventManager().newEvent(e), a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c - a.getPlaylist().getClip().getSeekingTimestamp()), a.getPlaylist().getClip().setCollectingSeekingTime(!1)), a.getPlaylist().storeClipPlaybackCounters(), a.getPlaylist().getClip().resetClipLifecycleLabels(), a.getPlaylist().getClip().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getSSECore().resetPlaylist()
                        },
                        onPause: function(b, c) {
                            a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b), a.getPlaylist().incrementPauses(), a.getPlaylist().getClip().incrementPauses(), a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().addSeekingTime(b), a.getPlaylist().getClip().setCollectingSeekingTime(!1))
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b), a.getPlaylist().getClip().isSeeking() && (a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().addSeekingTime(b), a.getPlaylist().getClip().setCollectingSeekingTime(!1)), a.getPlaylist().getClip().addSeekingAmount(d), a.getPlaylist().getClip().setSeeking(!1)), a.getPlaylist().getClip().incrementPlayCounter(), a.getPlaylist().setPlaybackTimestamp(b), a.getPlaylist().getClip().setPlaybackTimestamp(b), a.getPlaylist().getClip().addElapsedTime(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().resume();
                            var e = a.getSSECore().createLabels(i.PLAY, c, b);
                            a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            x = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onBuffer: function(b, c) {
                            a.getPlaylist().getClip().setSeekingTime(a.getPlaylist().getClip().getSeekingTimeBeforeEnd()), a.getPlaylist().setBufferingTimestamp(b), a.getPlaylist().getClip().setBufferingTimestamp(b)
                        },
                        onSeekStart: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().getClip().setSeekingTime(a.getPlaylist().getClip().getSeekingTimeBeforeEnd()), a.getPlaylist().getClip().incrementSeeks(), a.getPlaylist().getClip().setSeeking(!0), a.getPlaylist().getClip().setCollectingSeekingTime(!0), a.getPlaylist().getClip().setSeekStartPosition(d), a.getPlaylist().getClip().setSeekingTimestamp(b)
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().getClip().setSeekingTime(a.getPlaylist().getClip().getSeekingTimeBeforeEnd()), a.getPlaylist().getClip().isSeeking() && (a.getPlaylist().getClip().addSeekingAmount(d), a.getPlaylist().getClip().setSeeking(!1)), a.getPlaylist().isPlaylistStarted() || (a.getPlaylist().setPlaylistStarted(!0), a.getPlaylist().incrementPlaybackCounter()), a.getPlaylist().getClip().setClipStarted(!0), a.getPlaylist().getClip().setPlaybackStarted(!0), a.getPlaylist().getClip().incrementSegmentPlaybackCounter(), (0 == a.getPlaylist().getClip().getLowestPartNumberPlayed() || parseInt(a.getPlaylist().getClip().getLabel("ns_st_pn")) <= a.getPlaylist().getClip().getLowestPartNumberPlayed()) && (a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabel("ns_st_pn"))), a.getPlaylist().getClip().incrementAssetPlaybackCounter(), a.getPlaylist().getClip().resetAssetPlaybackCounters()), a.getPlaylist().getClip().incrementPlayCounter(), a.getPlaylist().setPlaybackTimestamp(b), a.getPlaylist().getClip().setPlaybackTimestamp(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().setPlaybackStartPosition(d), a.getSSECore().isLoadingTimeSent() || (c.ns_st_lt = String(a.getSSECore().getLoadTimeOffset() + b - a.getSSECore().getInitTimestamp()), a.getSSECore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().resume();
                            var e = a.getSSECore().createLabels(i.PLAY, c, b);
                            a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            y = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            a.getSSECore().resetHeartbeat(), a.getSSECore().resetKeepAlive(), a.getPlaylist().getClip().addElapsedTime(c);
                            var e = a.getSSECore().createLabels(i.END, d, c);
                            a.getEventManager().newEvent(e), a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c - a.getPlaylist().getClip().getSeekingTimestamp()), a.getPlaylist().getClip().setSeeking(!1)), a.getPlaylist().storeClipPlaybackCounters(), a.getPlaylist().getClip().resetClipLifecycleLabels(), a.getPlaylist().getClip().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getSSECore().resetPlaylist()
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().getClip().isSeeking() && (a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().addSeekingTime(b), a.getPlaylist().getClip().setCollectingSeekingTime(!1)), a.getPlaylist().getClip().addSeekingAmount(d), a.getPlaylist().getClip().setSeeking(!1)), a.getPlaylist().getClip().incrementPlayCounter(), a.getPlaylist().setPlaybackTimestamp(b), a.getPlaylist().getClip().setPlaybackTimestamp(b), a.getPlaylist().getClip().addElapsedTime(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().resume();
                            var e = a.getSSECore().createLabels(i.PLAY, c, b);
                            a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            z = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            a.getSSECore().resetHeartbeat(), a.getSSECore().resetKeepAlive(), a.getPlaylist().addBufferingTime(c), a.getPlaylist().getClip().addBufferingTime(c), a.getPlaylist().getClip().addElapsedTime(c);
                            var e = a.getSSECore().createLabels(i.END, d, c);
                            a.getEventManager().newEvent(e), a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c - a.getPlaylist().getClip().getSeekingTimestamp()), a.getPlaylist().getClip().setCollectingSeekingTime(!1)), a.getPlaylist().storeClipPlaybackCounters(), a.getPlaylist().getClip().resetClipLifecycleLabels(), a.getPlaylist().getClip().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getSSECore().resetPlaylist()
                        },
                        onBufferStop: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b), a.getPlaylist().setPlaybackTimestamp(b), a.getPlaylist().getClip().setPlaybackTimestamp(b), a.getPlaylist().getClip().addElapsedTime(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().resume();
                            var e = a.getSSECore().createLabels(i.PLAY, c, b);
                            a.getEventManager().newEvent(e)
                        },
                        onSeekStart: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b), a.getPlaylist().getClip().isSeeking() ? a.getPlaylist().getClip().isCollectingSeekingTime() || (a.getPlaylist().getClip().setSeekingTimestamp(b), a.getPlaylist().getClip().setCollectingSeekingTime(!0)) : a.getPlaylist().getClip().incrementSeeks(), a.getPlaylist().getClip().isSeeking() || (a.getPlaylist().getClip().setSeeking(!0), a.getPlaylist().getClip().setCollectingSeekingTime(!0), a.getPlaylist().getClip().setSeekStartPosition(d), a.getPlaylist().getClip().setSeekingTimestamp(b))
                        },
                        onPause: function(b, c) {
                            a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b), a.getPlaylist().incrementPauses(), a.getPlaylist().getClip().incrementPauses()
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().addBufferingTime(b), a.getPlaylist().getClip().addBufferingTime(b), a.getPlaylist().getClip().incrementPlayCounter(), a.getPlaylist().setPlaybackTimestamp(b), a.getPlaylist().getClip().setPlaybackTimestamp(b), a.getPlaylist().getClip().addElapsedTime(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().setPlaybackStartPosition(d), a.getHeartbeat().resume(), a.getKeepAlive().resume();
                            var e = a.getSSECore().createLabels(i.PLAY, c, b);
                            a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            A = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c - a.getPlaylist().getClip().getSeekingTimestamp()), a.getPlaylist().getClip().setCollectingSeekingTime(!1)), a.getPlaylist().storeClipPlaybackCounters(), a.getPlaylist().getClip().resetClipLifecycleLabels(), a.getPlaylist().getClip().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getSSECore().resetPlaylist()
                        },
                        onSeekStart: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().getClip().isSeeking() ? a.getPlaylist().getClip().setSeekingTimestamp(b) : a.getPlaylist().getClip().incrementSeeks(), a.getPlaylist().getClip().isSeeking() || (a.getPlaylist().getClip().setSeeking(!0), a.getPlaylist().getClip().setCollectingSeekingTime(!0), a.getPlaylist().getClip().setSeekStartPosition(d), a.getPlaylist().getClip().setSeekingTimestamp(b))
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().getClip().isSeeking() && (a.getPlaylist().getClip().addSeekingAmount(d), a.getPlaylist().getClip().setSeeking(!1)), a.getPlaylist().isPlaylistStarted() || (a.getPlaylist().setPlaylistStarted(!0), a.getPlaylist().incrementPlaybackCounter()), a.getPlaylist().getClip().setClipStarted(!0), a.getPlaylist().getClip().setPlaybackStarted(!0), a.getPlaylist().getClip().incrementSegmentPlaybackCounter(), (0 == a.getPlaylist().getClip().getLowestPartNumberPlayed() || parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn) <= a.getPlaylist().getClip().getLowestPartNumberPlayed()) && (a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)), a.getPlaylist().getClip().incrementAssetPlaybackCounter(), a.getPlaylist().getClip().resetAssetPlaybackCounters()), a.getPlaylist().getClip().incrementPlayCounter(), a.getPlaylist().setPlaybackTimestamp(b), a.getPlaylist().getClip().setPlaybackTimestamp(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().setPlaybackStartPosition(d), a.getSSECore().isLoadingTimeSent() || (c.ns_st_lt = String(a.getSSECore().getLoadTimeOffset() + b - a.getSSECore().getInitTimestamp()), a.getSSECore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().resume();
                            var e = a.getSSECore().createLabels(i.PLAY, c, b);
                            a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            B = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            var e = parseInt(d.ns_st_po);
                            a.getSSECore().resetHeartbeat(), a.getSSECore().resetKeepAlive(), a.getPlaylist().addPlaybackTime(c), a.getPlaylist().getClip().addPlaybackTime(c), a.getPlaylist().getClip().addElapsedTime(c), a.getPlaylist().getClip().addInterval(e);
                            var f = a.getSSECore().createLabels(i.END, d, c);
                            a.getEventManager().newEvent(f), a.getPlaylist().getClip().resetClipLifecycleLabels(), a.getPlaylist().getClip().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getSSECore().resetPlaylist()
                        },
                        onBuffer: function(b, c) {
                            a.getSSECore().isPauseOnBufferingEnabled() && a.getSSECore().startPausedOnBufferingTimer(b, c), a.getPlaylist().getClip().incrementBufferCount(), a.getPlaylist().setBufferingTimestamp(b), a.getPlaylist().getClip().setBufferingTimestamp(b)
                        },
                        onSeekStart: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getHeartbeat().pause(), a.getSSECore().resetKeepAlive(), a.getPlaylist().addPlaybackTime(b), a.getPlaylist().getClip().addPlaybackTime(b), a.getPlaylist().getClip().addElapsedTime(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().addInterval(d), a.getPlaylist().getClip().incrementSeeks(), a.getPlaylist().getClip().setSeeking(!0), a.getPlaylist().getClip().setCollectingSeekingTime(!0), a.getPlaylist().getClip().setSeekStartPosition(d), a.getPlaylist().getClip().setSeekingTimestamp(b), a.getPlaylist().incrementPauses(), a.getPlaylist().getClip().incrementPauses();
                            var e = a.getSSECore().createLabels(i.PAUSE, c, b);
                            a.getEventManager().newEvent(e)
                        },
                        onPause: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getHeartbeat().pause(), a.getSSECore().resetKeepAlive(), a.getPlaylist().addPlaybackTime(b), a.getPlaylist().getClip().addPlaybackTime(b), a.getPlaylist().getClip().addElapsedTime(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().addInterval(d), a.getPlaylist().incrementPauses(), a.getPlaylist().getClip().incrementPauses();
                            var e = a.getSSECore().createLabels(i.PAUSE, c, b);
                            a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            C = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c - a.getPlaylist().getClip().getSeekingTimestamp()), a.getPlaylist().getClip().setCollectingSeekingTime(!1)), a.getPlaylist().storeClipPlaybackCounters(), a.getPlaylist().getClip().resetClipLifecycleLabels(), a.getPlaylist().getClip().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getSSECore().resetPlaylist()
                        },
                        onPause: function(b, c) {
                            a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().addSeekingTime(b), a.getPlaylist().getClip().setCollectingSeekingTime(!1))
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().getClip().isSeeking() && (a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().addSeekingTime(b), a.getPlaylist().getClip().setCollectingSeekingTime(!1)), a.getPlaylist().getClip().addSeekingAmount(d), a.getPlaylist().getClip().setSeeking(!1)), a.getPlaylist().isPlaylistStarted() || (a.getPlaylist().setPlaylistStarted(!0), a.getPlaylist().incrementPlaybackCounter()), a.getPlaylist().getClip().setClipStarted(!0), a.getPlaylist().getClip().setPlaybackStarted(!0), a.getPlaylist().getClip().incrementSegmentPlaybackCounter(), (0 == a.getPlaylist().getClip().getLowestPartNumberPlayed() || parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn) <= a.getPlaylist().getClip().getLowestPartNumberPlayed()) && (a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)), a.getPlaylist().getClip().incrementAssetPlaybackCounter(), a.getPlaylist().getClip().resetAssetPlaybackCounters()), a.getPlaylist().getClip().incrementPlayCounter(), a.getPlaylist().setPlaybackTimestamp(b), a.getPlaylist().getClip().setPlaybackTimestamp(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().setPlaybackStartPosition(d), a.getSSECore().isLoadingTimeSent() || (c.ns_st_lt = String(a.getSSECore().getLoadTimeOffset() + b - a.getSSECore().getInitTimestamp()), a.getSSECore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().resume();
                            var e = a.getSSECore().createLabels(i.PLAY, c, b);
                            a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            D = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onPause: function(b, c) {
                            a.getPlaylist().incrementPauses(), a.getPlaylist().getClip().incrementPauses(), a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().addSeekingTime(b), a.getPlaylist().getClip().setCollectingSeekingTime(!1))
                        }
                    })
                }
            }(),
            E = function() {
                return function(a) {
                    var c = this;
                    b.extend(c, {
                        onEndOrAdSkip: function(c, d) {
                            parseInt(d.ns_st_po), a.getSSECore().resetHeartbeat(), a.getSSECore().resetKeepAlive(), a.getPlaylist().getClip().addElapsedTime(c);
                            var e = a.getSSECore().createLabels(i.END, d, c);
                            a.getEventManager().newEvent(e), a.getPlaylist().getClip().isSeeking() && a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c - a.getPlaylist().getClip().getSeekingTimestamp()), a.getPlaylist().getClip().setCollectingSeekingTime(!1)), a.getPlaylist().storeClipPlaybackCounters(), a.getPlaylist().getClip().resetClipLifecycleLabels(), a.getPlaylist().getClip().setPlaybackStarted(!1), d.hasOwnProperty("ns_st_pe") && b.parseBoolean(d.ns_st_pe, !1) && a.getSSECore().resetPlaylist()
                        },
                        onPlay: function(b, c) {
                            var d = parseInt(c.ns_st_po);
                            a.getPlaylist().getClip().isSeeking() && (a.getPlaylist().getClip().isCollectingSeekingTime() && (a.getPlaylist().getClip().addSeekingTime(b), a.getPlaylist().getClip().setCollectingSeekingTime(!1)), a.getPlaylist().getClip().addSeekingAmount(d), a.getPlaylist().getClip().setSeeking(!1)), a.getPlaylist().getClip().incrementPlayCounter(), a.getPlaylist().setPlaybackTimestamp(b), a.getPlaylist().getClip().setPlaybackTimestamp(b), a.getPlaylist().getClip().addElapsedTime(b), a.getPlaylist().getClip().setElapsedTimestamp(b), a.getPlaylist().getClip().setPlaybackStartPosition(d), a.getSSECore().isLoadingTimeSent() || (c.ns_st_lt = String(a.getSSECore().getLoadTimeOffset() + b - a.getSSECore().getInitTimestamp()), a.getSSECore().setLoadingTimeSent(!0)), a.getHeartbeat().resume(), a.getKeepAlive().resume();
                            var e = a.getSSECore().createLabels(i.PLAY, c, b);
                            a.getEventManager().newEvent(e)
                        }
                    })
                }
            }(),
            F = function() {
                return function() {
                    function a() {
                        f = new G(ab), b.getNamespace().comScore ? (bb = b.getNamespace().comScore.exports, f.setAppCore(bb.c())) : f.setAppCore(null), f.setKeepAlive(new q(f)), f.setHeartbeat(new p(f)), f.setEventManager(new o(f)), f.setStateMachine(new r), f.setPlaylist(new n), $ = {}, m = new x(f), F = new y(f), H = new A(f), I = new B(f), J = new t(f), K = new v(f), L = new w(f), M = new u(f), N = new z(f), O = new C(f), P = new D(f), Q = new E(f), R = new s(f), S = !1, T = 0, U = +(new Date), V = !0, X = !1, Z = []
                    }

                    function c(a) {
                        var b = f.getStateMachine().getCurrentState();
                        if (b == j.IDLE || b == j.PLAYBACK_NOT_STARTED || b == j.BUFFERING_BEFORE_PLAYBACK || b == j.SEEKING_BEFORE_PLAYBACK) {
                            if (a == i.PLAY) return !0
                        } else if (b == j.PLAYING) {
                            if (a == i.END || a == i.AD_SKIP || a == i.SEEK_START || a == i.PAUSE) return !0
                        } else if (b == j.PAUSED || b == j.BUFFERING_DURING_PAUSE || b == j.SEEKING_DURING_PLAYBACK || b == j.SEEKING_DURING_BUFFERING || b == j.SEEKING_DURING_PAUSE) {
                            if (a == i.END || a == i.AD_SKIP || a == i.PLAY) return !0
                        } else if (b == j.BUFFERING_DURING_PLAYBACK) {
                            if (a == i.PAUSE_ON_BUFFERING || a == i.END || a == i.AD_SKIP || a == i.SEEK_START || a == i.PAUSE || a == i.PLAY) return !0
                        } else if (b == j.BUFFERING_DURING_SEEKING) {
                            if (a == i.END || a == i.AD_SKIP || a == i.PAUSE || a == i.PLAY) return !0
                        } else if (b == j.PAUSED_DURING_BUFFERING && (a == i.END || a == i.AD_SKIP || a == i.BUFFER_STOP || a == i.PLAY)) return !0;
                        return !1
                    }

                    function d(a, b, d) {
                        var e = f.getStateMachine().getCurrentState();
                        a == i.AD_SKIP && !d.hasOwnProperty("ns_st_ui") && c(a) ? d.ns_st_ui = "skip" : a == i.SEEK_START && !d.hasOwnProperty("ns_st_ui") && c(a) && (d.ns_st_ui = "seek"), e == j.IDLE ? a == i.BUFFER ? m.onBuffer(b, d) : a == i.SEEK_START ? m.onSeekStart(b, d) : a == i.PLAY && m.onPlay(b, d) : e == j.PLAYBACK_NOT_STARTED ? a == i.END || a == i.AD_SKIP ? H.onEndOrAdSkip(b, d) : a == i.SEEK_START ? H.onSeekStart(b, d) : a == i.PLAY ? H.onPlay(b, d) : a == i.BUFFER && R.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b, d) : e == j.PLAYING ? a == i.END || a == i.AD_SKIP ? I.onEndOrAdSkip(b, d) : a == i.BUFFER ? I.onBuffer(b, d) : a == i.SEEK_START ? I.onSeekStart(b, d) : a == i.PAUSE && I.onPause(b, d) : e == j.PAUSED ? a == i.END || a == i.AD_SKIP ? F.onEndOrAdSkip(b, d) : a == i.PLAY ? F.onPlay(b, d) : a == i.BUFFER ? R.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b, d) : a == i.SEEK_START && R.onSeekStartWhenPausedOrBufferingDuringPause(b, d) : e == j.BUFFERING_BEFORE_PLAYBACK ? a == i.END || a == i.AD_SKIP ? J.onEndOrAdSkip(b, d) : a == i.BUFFER_STOP ? J.onBufferStop(b, d) : a == i.SEEK_START ? J.onSeekStart(b, d) : a == i.PAUSE ? J.onPause(b, d) : a == i.PLAY && J.onPlay(b, d) : e == j.BUFFERING_DURING_PLAYBACK ? a == i.PAUSE_ON_BUFFERING ? K.onPauseOnBuffering(b, d) : a == i.BUFFER_STOP ? K.onBufferStop(b, d) : a == i.END || a == i.AD_SKIP ? K.onEndOrAdSkip(b, d) : a == i.SEEK_START ? K.onSeekStart(b, d) : a == i.PAUSE ? K.onPause(b, d) : a == i.PLAY && K.onPlay(b, d) : e == j.BUFFERING_DURING_SEEKING ? a == i.END || a == i.AD_SKIP ? L.onEndOrAdSkip(b, d) : a == i.PAUSE ? L.onPause(b, d) : a == i.PLAY ? L.onPlay(b, d) : a == i.BUFFER_STOP && R.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b, d) : e == j.BUFFERING_DURING_PAUSE ? a == i.END || a == i.AD_SKIP ? M.onEndAndSkip(b, d) : a == i.PAUSE ? M.onPause(b, d) : a == i.PLAY ? M.onPlay(b, d) : a == i.SEEK_START ? R.onSeekStartWhenPausedOrBufferingDuringPause(b, d) : a == i.BUFFER_STOP && R.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b, d) : e == j.SEEKING_BEFORE_PLAYBACK ? a == i.END || a == i.AD_SKIP ? O.onEndOrAdSkip(b, d) : a == i.PAUSE ? O.onPause(b, d) : a == i.PLAY ? O.onPlay(b, d) : a == i.BUFFER && R.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b, d) : e == j.SEEKING_DURING_PLAYBACK ? a == i.END || a == i.AD_SKIP ? Q.onEndOrAdSkip(b, d) : a == i.PLAY ? Q.onPlay(b, d) : a == i.BUFFER ? R.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b, d) : a == i.PAUSE && R.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b, d) : e == j.SEEKING_DURING_BUFFERING ? a == i.PAUSE ? P.onPause(b, d) : a == i.BUFFER ? R.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b, d) : a == i.PLAY ? R.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b, d) : a == i.END || a == i.AD_SKIP ? R.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(b, d) : a == i.BUFFER_STOP && R.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b, d) : e == j.PAUSED_DURING_BUFFERING ? a == i.END || a == i.AD_SKIP ? N.onEndOrAdSkip(b, d) : a == i.BUFFER_STOP ? N.onBufferStop(b, d) : a == i.SEEK_START ? N.onSeekStart(b, d) : a == i.PAUSE ? N.onPause(b, d) : a == i.PLAY && N.onPlay(b, d) : e == j.SEEKING_DURING_PAUSE && (a == i.BUFFER ? R.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b, d) : a == i.PLAY ? R.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b, d) : a == i.PAUSE ? R.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b, d) : a == i.END || a == i.AD_SKIP ? R.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(b, d) : a == i.BUFFER_STOP && R.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b, d)), c(a) && f.getPlaylist().setFirstEventSent(!0)
                    }

                    function e(a, c) {
                        for (var d, e = eb.encodeURIComponent || escape, f = [], g = l.LABELS_ORDER, h = a.split("?"), i = h[0], j = h[1], k = j.split("&"), m = 0, n = k.length; n > m; m++) {
                            var o = k[m].split("="),
                                p = unescape(o[0]),
                                q = unescape(o[1]);
                            p && (c[p] = q)
                        }
                        for (var r = {}, s = 0, t = g.length; t > s; s++) {
                            var u = g[s];
                            if (c.hasOwnProperty(u)) {
                                var v = c[u];
                                "undefined" != typeof v && null != v && (r[u] = !0, f.push(e(u) + "=" + e(c[u])))
                            }
                        }
                        for (var w in c)
                            if (c.hasOwnProperty(w)) {
                                if (r[w]) continue;
                                var x = c[w];
                                "undefined" != typeof x && null != x && f.push(e(w) + "=" + e(c[w]))
                            } d = i + "?" + f.join("&"), d = d + (d.indexOf("&c8=") < 0 ? "&c8=" + e(fb.title) : "") + (d.indexOf("&c7=") < 0 ? "&c7=" + e(fb.URL) : "") + (d.indexOf("&c9=") < 0 ? "&c9=" + e(fb.referrer) : "");
                        var y = b.browserAcceptsLargeURLs() ? l.URL_LENGTH_LIMIT : l.RESTRICTED_URL_LENGTH_LIMIT;
                        if (d.length > y && d.indexOf("&") > 0) {
                            var z = d.substr(0, y - 8).lastIndexOf("&");
                            d = (d.substring(0, z) + "&ns_cut=" + e(d.substring(z + 1))).substr(0, y)
                        }
                        return d
                    }
                    var f, m, F, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab = this,
                        bb = {},
                        cb = l.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL,
                        db = l.THROTTLING_DELAY;
                    b.extend(ab, {
                        createLabels: function(a, c, d) {
                            var e = {};
                            if ("undefined" != typeof document) {
                                var g = document;
                                e.c7 = g.URL, e.c8 = g.title, e.c9 = g.referrer
                            }
                            return null != c && b.extend(e, c), e.ns_ts = null != e.ns_ts ? e.ns_ts : String(+(new Date)), e.ns_st_ev = null != e.ns_st_ev ? e.ns_st_ev : i.toString(a), e.ns_st_mp = null != e.ns_st_mp ? e.ns_st_mp : l.DEFAULT_PLAYERNAME, e.ns_st_mv = null != e.ns_st_mv ? e.ns_st_mv : l.STREAMSENSE_VERSION, e.ns_st_ub = null != e.ns_st_ub ? e.ns_st_ub : "0", e.ns_st_br = null != e.ns_st_br ? e.ns_st_br : "0", e.ns_st_pn = null != e.ns_st_pn ? e.ns_st_pn : "1", e.ns_st_tp = null != e.ns_st_tp ? e.ns_st_tp : "1", e.ns_st_it = null != e.ns_st_it ? e.ns_st_it : k.toString(k.SINGLE_CLIP), e.ns_st_sv = null != e.ns_st_sv ? e.ns_st_sv : l.STREAMSENSE_VERSION, e.ns_st_smv = null != e.ns_st_smv ? e.ns_st_smv : l.MODEL_VERSION, e.ns_type = null != e.ns_type ? e.ns_type : "hidden", e.ns_st_ec = null != e.ns_st_ec ? e.ns_st_ec : String(f.getEventManager().getEventCounter()), e.ns_st_po = null != e.ns_st_po ? e.ns_st_po : String(f.getPlaylist().getPlaylist().getClip().getExpectedPlaybackPosition(d)), e.ns_st_ki = null != e.ns_st_ki ? e.ns_st_ki : String(f.getKeepAlive().getInterval()), f.getPlaylist().createLabels(e), f.getPlaylist().getClip().createLabels(e), b.extend(e, ab.getLabels()), b.extend(e, c), {
                                eventType: a,
                                eventLabels: e
                            }
                        },
                        newEvent: function(a, b, c, e) {
                            ab.stopDelayedTransitionTimer();
                            var g = f.getStateMachine().getCurrentState(),
                                h = f.getStateMachine().eventTypeToState(a);
                            if (null != h && h != g)
                                if (!ab.isThrottlingEnabled() || g != j.PLAYING && g != j.PAUSED || h != j.PLAYING && h != j.PAUSED || e) {
                                    c.ns_st_po || (f.getStateMachine().getCurrentState() == j.PLAYING && a == i.BUFFER || f.getStateMachine().getCurrentState() == j.BUFFERING_DURING_PLAYBACK && a == i.BUFFER_STOP ? c.ns_st_po = String(f.getPlaylist().getClip().getPlaybackTimeOffset() + (b - f.getPlaylist().getClip().getPlaybackTimestamp())) : c.ns_st_po = String(f.getPlaylist().getClip().getExpectedPlaybackPosition(b))), d(a, b, c);
                                    var k = 0;
                                    isNaN(f.getStateMachine().getLastStateChangeTimestamp()) || (k = b - f.getStateMachine().getLastStateChangeTimestamp()), f.getStateMachine().newEvent(a, b);
                                    for (var l = 0, m = Z.length; m > l; l++) Z[l](g, h, c, k)
                                } else Y = f.getPlatformAPI().setTimeout(function(a, c, d) {
                                    return function() {
                                        ab.newEvent(a, b, d, !0)
                                    }
                                }(a, h, c), db)
                        },
                        newPseudoEvent: function(a, b, c) {
                            if (a != i.LOAD && a != i.START || f.getStateMachine().getCurrentState() == j.IDLE) {
                                a != i.ERROR || c.ns_st_er || (c.ns_st_er = h.UNKNOWN_VALUE), f.getStateMachine().getCurrentState() != j.IDLE && f.getStateMachine().getCurrentState() != j.PLAYBACK_NOT_STARTED && f.getStateMachine().getCurrentState() != j.SEEKING_BEFORE_PLAYBACK && f.getStateMachine().getCurrentState() != j.BUFFERING_BEFORE_PLAYBACK && (f.getPlaylist().getClip().addElapsedTime(b), f.getPlaylist().getClip().setElapsedTimestamp(b));
                                var d, e, g, k = !0,
                                    l = !1;
                                switch (a) {
                                    case i.BIT_RATE:
                                        d = "ns_st_br", e = "ns_st_pbr", l = !0;
                                        break;
                                    case i.PLAYBACK_RATE:
                                        d = "ns_st_rt", e = "ns_st_prt", l = !0;
                                        break;
                                    case i.VOLUME:
                                        d = "ns_st_vo", e = "ns_st_pvo", l = !0;
                                        break;
                                    case i.WINDOW_STATE:
                                        d = "ns_st_ws", e = "ns_st_pws", l = !0;
                                        break;
                                    case i.AUDIO:
                                        d = "ns_st_at", e = "ns_st_pat", l = !1;
                                        break;
                                    case i.VIDEO:
                                        d = "ns_st_vt", e = "ns_st_pvt", l = !1;
                                        break;
                                    case i.SUBS:
                                        d = "ns_st_tt", e = "ns_st_ptt", l = !1;
                                        break;
                                    case i.CDN:
                                        d = "ns_st_cdn", e = "ns_st_pcdn", l = !1;
                                        break;
                                    default:
                                        k = !1
                                }
                                if (k && c.hasOwnProperty(d) && (l ? (ab.getLabels().hasOwnProperty(d) && (g = ab.getLabels()[d], c[e] = g), ab.setLabel(d, c[d])) : (f.getPlaylist().getClip().getLabels().hasOwnProperty(d) && (g = f.getPlaylist().getClip().getLabels()[d], c[e] = g), f.getPlaylist().getClip().setLabel(d, c[d]))), !k || f.getStateMachine().getCurrentState() == j.PLAYING || f.getStateMachine().getCurrentState() == j.BUFFERING_DURING_PLAYBACK) {
                                    c.ns_st_po || (c.ns_st_po = String(f.getPlaylist().getClip().getExpectedPlaybackPosition(b))), f.getStateMachine().getCurrentState() != j.PLAYING && f.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PLAYBACK || (f.getPlaylist().addPlaybackTime(b), f.getPlaylist().setPlaybackTimestamp(b), f.getPlaylist().getClip().addPlaybackTime(b), f.getPlaylist().getClip().setPlaybackTimestamp(b), f.getPlaylist().getClip().addInterval(parseInt(c.ns_st_po)), f.getPlaylist().getClip().setPlaybackStartPosition(parseInt(c.ns_st_po))), f.getStateMachine().getCurrentState() != j.BUFFERING_BEFORE_PLAYBACK && f.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PAUSE && f.getStateMachine().getCurrentState() != j.BUFFERING_DURING_PLAYBACK && f.getStateMachine().getCurrentState() != j.BUFFERING_DURING_SEEKING || (f.getPlaylist().addBufferingTime(b), f.getPlaylist().setBufferingTimestamp(b), f.getPlaylist().getClip().addBufferingTime(b), f.getPlaylist().getClip().setBufferingTimestamp(b));
                                    var m = ab.createLabels(a, c, b);
                                    f.getEventManager().newEvent(m)
                                }
                            }
                        },
                        getState: function() {
                            return f.getStateMachine().getCurrentState()
                        },
                        addListener: function(a) {
                            Z.push(a)
                        },
                        removeListener: function(a) {
                            Z.splice(b.indexOf(a, Z), 1)
                        },
                        getLabel: function(a) {
                            return $[a]
                        },
                        getLabels: function() {
                            return $
                        },
                        setLabel: function(a, b) {
                            null == b ? delete $[a] : $[a] = b
                        },
                        setLabels: function(a) {
                            for (var b in a) a.hasOwnProperty(b) && ab.setLabel(b, a[b])
                        },
                        getPlatformAPI: function() {
                            return f.getAppCore() ? f.getAppCore().getPlatformAPI() : g
                        },
                        getExports: function() {
                            return bb
                        },
                        isProperlyInitialized: function() {
                            var a = f.getAppCore().getAppContext(),
                                b = f.getAppCore().getSalt(),
                                c = f.getAppCore().getPixelURL();
                            return a && c && b
                        },
                        setImplementationType: function(a) {
                            f.getStateMachine().getCurrentState() != j.IDLE || a != k.SINGLE_CLIP && a != k.SEGMENTED && a != k.REDUCED || f.getPlaylist().setLabel("ns_st_it", k.toString(a))
                        },
                        setThrottlingDelay: function(a) {
                            db = a
                        },
                        getThrottlingDelay: function() {
                            return db
                        },
                        isThrottlingEnabled: function() {
                            return X
                        },
                        setThrottlingEnabled: function(a) {
                            X = a
                        },
                        isLoadingTimeSent: function() {
                            return S
                        },
                        setLoadingTimeSent: function(a) {
                            S = a
                        },
                        getLoadTimeOffset: function() {
                            return T
                        },
                        setLoadTimeOffset: function(a) {
                            T = a
                        },
                        getInitTimestamp: function() {
                            return U
                        },
                        setPauseOnBufferingInterval: function(a) {
                            cb = a
                        },
                        getPauseOnBufferingInterval: function() {
                            return cb
                        },
                        isPauseOnBufferingEnabled: function() {
                            return V
                        },
                        setPauseOnBufferingEnabled: function(a) {
                            V = a
                        },
                        startPausedOnBufferingTimer: function(a, c) {
                            ab.stopPausedOnBufferingTimer(), W = ab.getPlatformAPI().setTimeout(function() {
                                var d = {},
                                    e = b.fixEventTime(d),
                                    f = parseInt(c.ns_st_po);
                                d.ns_st_po = String(f + e - a), ab.newEvent(i.PAUSE_ON_BUFFERING, e, d)
                            }, cb)
                        },
                        stopPausedOnBufferingTimer: function() {
                            null != W && (ab.getPlatformAPI().clearTimeout(W), W = null)
                        },
                        stopDelayedTransitionTimer: function() {
                            Y && (ab.getPlatformAPI().clearTimeout(Y), Y = null)
                        },
                        setPixelURL: function(a) {
                            if (null == a || 0 == a.length) return null;
                            var b = decodeURIComponent || unescape,
                                c = a.indexOf("?");
                            if (c >= 0) {
                                if (c < a.length - 1) {
                                    for (var d = a.substring(c + 1).split("&"), e = 0, f = d.length; f > e; e++) {
                                        var g = d[e],
                                            h = g.split("=");
                                        2 == h.length ? ab.setLabel(h[0], b(h[1])) : 1 == h.length && ab.setLabel(l.PAGE_NAME_LABEL, b(h[0]))
                                    }
                                    a = a.substring(0, c + 1)
                                }
                            } else a += "?";
                            return _ = a
                        },
                        getPixelURL: function() {
                            return _ ? _ : "undefined" != typeof ns_p && "string" == typeof ns_p.src ? _ = ns_p.src.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : "string" == typeof ns_pixelUrl ? _ = ns_pixelUrl.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : null
                        },
                        getSseSM: function() {
                            return f
                        },
                        resetPlaylist: function(a) {
                            var b = f.getPlaylist();
                            f.setPlaylist(new n), n.resetPlaylist(b, f.getPlaylist(), a)
                        },
                        resetHeartbeat: function() {
                            f.getHeartbeat().pause(), f.setHeartbeat(new p(f))
                        },
                        resetKeepAlive: function() {
                            f.getKeepAlive().pause(), f.setKeepAlive(new q(f))
                        }
                    });
                    var eb, fb;
                    b.isBrowser() ? (eb = window, fb = document) : (eb = {}, fb = {
                        location: {
                            href: ""
                        },
                        title: "",
                        URL: "",
                        referrer: "",
                        cookie: ""
                    }), b.extend(this, {
                        prepareUrl: e
                    }), a()
                }
            }(),
            G = function() {
                return function(a) {
                    var c, d, e, f, g, h, i = this;
                    b.extend(i, {
                        getAppCore: function() {
                            return c
                        },
                        getSSECore: function() {
                            return a
                        },
                        getEventManager: function() {
                            return d
                        },
                        getStateMachine: function() {
                            return e
                        },
                        getHeartbeat: function() {
                            return f
                        },
                        getKeepAlive: function() {
                            return g
                        },
                        getPlaylist: function() {
                            return h
                        },
                        setAppCore: function(a) {
                            c = a
                        },
                        setKeepAlive: function(a) {
                            g = a
                        },
                        setHeartbeat: function(a) {
                            f = a
                        },
                        setEventManager: function(a) {
                            d = a
                        },
                        setStateMachine: function(a) {
                            e = a
                        },
                        setPlaylist: function(a) {
                            h = a
                        }
                    })
                }
            }(),
            H = function() {
                return function(a, c) {
                    function d() {
                        h = new F, g = !0, a && k.setLabels(a), c && k.setPixelURL(c)
                    }

                    function e(a, b) {
                        k.notify(i.CUSTOM, a, b)
                    }

                    function f() {
                        g && h.getSseSM().getStateMachine().getCurrentState() != j.IDLE && k.end()
                    }
                    var g, h, k = this,
                        m = l.STANDARD_METADATA_LABELS;
                    b.extend(this, {
                        isProperlyInitialized: function() {
                            return h.isProperlyInitialized()
                        },
                        reset: function(a) {
                            var b = h;
                            b.getSseSM().getKeepAlive().pause(), b.getSseSM().getHeartbeat().pause(), h = new F, n.resetPlaylist(b.getSseSM().getPlaylist(), h.getSseSM().getPlaylist(), a)
                        },
                        setPauseOnBufferingInterval: function(a) {
                            h.setPauseOnBufferingInterval(a)
                        },
                        getPauseOnBufferingInterval: function() {
                            return h.getPauseOnBufferingInterval()
                        },
                        setKeepAliveInterval: function(a) {
                            h.getSseSM().getKeepAlive().setInterval(a)
                        },
                        getKeepAliveInterval: function() {
                            return h.getSseSM().getKeepAlive().getInterval()
                        },
                        setHeartbeatIntervals: function(a) {
                            h.getSseSM().getHeartbeat().setIntervals(a)
                        },
                        play: function(a, b) {
                            k.notify(i.PLAY, a, b)
                        },
                        pause: function(a, b) {
                            k.notify(i.PAUSE, a, b)
                        },
                        end: function(a, b) {
                            k.notify(i.END, a, b)
                        },
                        bufferStart: function(a, b) {
                            k.notify(i.BUFFER, a, b)
                        },
                        bufferStop: function(a, b) {
                            k.notify(i.BUFFER_STOP, a, b)
                        },
                        load: function(a, b) {
                            k.notify(i.LOAD, a, b)
                        },
                        start: function(a, b) {
                            k.notify(i.START, a, b)
                        },
                        seekStart: function(a, b) {
                            k.notify(i.SEEK_START, a, b)
                        },
                        skipAd: function(a, b) {
                            k.notify(i.AD_SKIP, a, b)
                        },
                        callToAction: function(a, b) {
                            k.notify(i.CTA, a, b)
                        },
                        error: function(a, b) {
                            k.notify(i.ERROR, a, b)
                        },
                        transferPlayback: function(a, b) {
                            k.notify(i.TRANSFER, a, b)
                        },
                        drmFail: function(a, b) {
                            k.notify(i.DRM_FAILED, a, b)
                        },
                        drmApprove: function(a, b) {
                            k.notify(i.DRM_APPROVED, a, b)
                        },
                        drmDeny: function(a, b) {
                            k.notify(i.DRM_DENIED, a, b)
                        },
                        changeBitrate: function(a, b, c) {
                            if (null != a) {
                                var d = c || {};
                                d.ns_st_br = String(a), k.notify(i.BIT_RATE, d, b)
                            }
                        },
                        changePlaybackRate: function(a, b, c) {
                            if (null != a) {
                                var d = c || {};
                                d.ns_st_rt = String(a), k.notify(i.PLAYBACK_RATE, d, b)
                            }
                        },
                        changeVolume: function(a, b, c) {
                            if (null != a) {
                                var d = c || {};
                                d.ns_st_vo = String(a), k.notify(i.VOLUME, d, b)
                            }
                        },
                        changeWindowState: function(a, b, c) {
                            if (null != a) {
                                var d = c || {};
                                d.ns_st_ws = String(a), k.notify(i.WINDOW_STATE, d, b)
                            }
                        },
                        changeAudio: function(a, b, c) {
                            if (null != a) {
                                var d = c || {};
                                d.ns_st_at = String(a), k.notify(i.AUDIO, d, b)
                            }
                        },
                        changeVideo: function(a, b, c) {
                            if (null != a) {
                                var d = c || {};
                                d.ns_st_vt = String(a), k.notify(i.VIDEO, d, b)
                            }
                        },
                        changeSubtitle: function(a, b, c) {
                            if (null != a) {
                                var d = c || {};
                                d.ns_st_tt = String(a), k.notify(i.SUBS, d, b)
                            }
                        },
                        changeCDN: function(a, b, c) {
                            if (null != a) {
                                var d = c || {};
                                d.ns_st_cdn = String(a), k.notify(i.CDN, d, b)
                            }
                        },
                        notify: function(a) {
                            var c, d;
                            if (c = "object" == typeof arguments[1] ? arguments[1] : "object" == typeof arguments[2] ? arguments[2] : {}, d = "number" == typeof arguments[1] ? arguments[1] : "number" == typeof arguments[2] ? arguments[2] : NaN, i.toString(a)) {
                                c = b.jsonObjectToStringDictionary(c);
                                var e = b.fixEventTime(c);
                                c.ns_st_po || isNaN(d) || (c.ns_st_po = b.getInteger(d, 0).toString()), c.ns_st_po && h.getSseSM().getPlaylist().getClip().setPlaybackTimeOffset(parseInt(c.ns_st_po)), a == i.PLAY || a == i.PAUSE || a == i.BUFFER || a == i.END || a == i.SEEK_START || a == i.AD_SKIP || a == i.BUFFER_STOP ? h.newEvent(a, e, c) : h.newPseudoEvent(a, e, c)
                            }
                        },
                        getLabels: function() {
                            return h.getLabels()
                        },
                        getState: function() {
                            return h.getSseSM().getStateMachine().getCurrentState()
                        },
                        setLabels: function(a) {
                            h.setLabels(a)
                        },
                        getLabel: function(a) {
                            return h.getLabel(a)
                        },
                        setLabel: function(a, b) {
                            h.setLabel(a, b)
                        },
                        getLoadTimeOffset: function() {
                            return h.getLoadTimeOffset()
                        },
                        setLoadTimeOffset: function(a) {
                            h.setLoadTimeOffset(a)
                        },
                        setPixelURL: function(a) {
                            return h.setPixelURL(a)
                        },
                        getPixelURL: function() {
                            return h.getSseSM().getSSECore().getPixelURL()
                        },
                        setImplementationType: function(a) {
                            h.setImplementationType(a)
                        },
                        isPauseOnBufferingEnabled: function() {
                            return h.isPauseOnBufferingEnabled()
                        },
                        setPauseOnBufferingEnabled: function(a) {
                            h.setPauseOnBufferingEnabled(a)
                        },
                        isThrottlingEnabled: function() {
                            return h.isThrottlingEnabled()
                        },
                        setThrottlingEnabled: function(a) {
                            h.setThrottlingEnabled(a)
                        },
                        setThrottlingDelay: function(a) {
                            h.setThrottlingDelay(a)
                        },
                        getThrottlingDelay: function() {
                            return h.getThrottlingDelay()
                        },
                        setPlaybackIntervalMergeTolerance: function(a) {
                            h.getSseSM().getPlaylist().getClip().setPlaybackIntervalMergeTolerance(a)
                        },
                        getPlaybackIntervalMergeTolerance: function() {
                            return h.getSseSM().getPlaylist().getClip().getPlaybackIntervalMergeTolerance()
                        },
                        setClip: function(a, c, d) {
                            if (void 0 === d && (d = !0), a = b.jsonObjectToStringDictionary(a), d && h.getSseSM().getStateMachine().getCurrentState() !== j.IDLE && k.end(), h.getSseSM().getStateMachine().getCurrentState() == j.IDLE) {
                                var e = "",
                                    f = 0;
                                if (null != a.ns_st_cn) e = String(a.ns_st_cn);
                                else
                                    for (var g = 0; g < m.length; g++) a[m[g]] && (e += m[g] + ":" + a[m[g]] + ";");
                                var i = h.getSseSM().getPlaylist(),
                                    l = i.getClip();
                                l.isClipStarted() ? (i.hashExists(l.getHash()) || (i.storeHash(l.getHash()), i.storeClipNumber(l.getHash(), l.getClipNumber())), i.storeClipPlaybackCounters(), f = i.hashExists(e) ? i.getClipNumber(e) : b.exists(a.ns_st_cn) ? parseInt(a.ns_st_cn) : i.getMaxClipNumber() + 1) : f = i.hashExists(e) ? i.getClipNumber(e) : l.getClipNumber(), i.resetClip(), l = i.getClip(), l.setHash(e), l.setClipNumber(f), l.setLabels(a);
                                var n = i.getStoredClipRegisters(e);
                                return n && (l.setClipStarted(!0), l.setSegmentPlaybackCounter(n.segmentPlaybackCounter), l.setClipLoadCounter(n.clipLoadCounter), l.setAssetPlaybackCounter(n.assetPlaybackCounter), l.setLowestPartNumberPlayed(n.lowestPartNumberPlayed), l.setSeeking(n.seeking), l.setSeekingTimeBeforeEnd(n.seekingTimeBeforeEnd), l.setSeekStartPosition(n.seekingStartPosition), l.setClipPlaybackIntervals(n.clipPlaybackIntervals), l.setUniquePlaybackInterval(n.uniquePlaybackInterval), l.setLongestPlaybackInterval(n.longestPlaybackInterval), l.setVideoTrack(n.videoTrack), l.setAudioTrack(n.audioTrack), l.setSubtitleTrack(n.subtitleTrack), l.setCDN(n.cdn), l.setPreviousUniquePlaybackInterval(n.uniquePlaybackInterval), l.setPreviousEventIndependentUniquePlaybackInterval(n.uniquePlaybackInterval), l.setPreviousLongestPlaybackInterval(n.longestPlaybackInterval)), l.incrementClipLoadCounter(), l.isClipStarted() && c && (i.incrementPlayCounter(), i.incrementPlaybackCounter()), !0
                            }
                            return !1
                        },
                        setPlaylist: function(a, c) {
                            return void 0 === c && (c = !0), a = b.jsonObjectToStringDictionary(a), c && h.getSseSM().getStateMachine().getCurrentState() !== j.IDLE && k.end(), h.getSseSM().getStateMachine().getCurrentState() == j.IDLE ? (h.getSseSM().getPlaylist().isPlaylistStarted() && h.resetPlaylist(), h.getSseSM().getPlaylist().setLabels(a), !0) : !1
                        },
                        importState: function() {},
                        exportState: function() {
                            return {}
                        },
                        getVersion: function() {
                            return l.STREAMSENSE_VERSION
                        },
                        addListener: function(a) {
                            h.addListener(a)
                        },
                        removeListener: function(a) {
                            h.removeListener(a)
                        },
                        getClip: function() {
                            return console && console.warn && console.warn("getClip() is deprecated. Use getPlaylist().getClip() instead."), h.getSseSM().getPlaylist().getClip()
                        },
                        getPlaylist: function() {
                            return h.getSseSM().getPlaylist()
                        },
                        setHttpGet: function(a) {
                            "function" == typeof a && (h.getPlatformAPI().httpGet = a)
                        },
                        setHttpPost: function(a) {
                            "function" == typeof a && (h.getPlatformAPI().httpPost = a)
                        },
                        setExitEndEventEnabled: function(a) {
                            g = a
                        },
                        isExitEndEventEnabled: function() {
                            return g
                        },
                        getPlatformAPI: function() {
                            return h.getPlatformAPI()
                        }
                    }), b.extend(this, {
                        customNotify: e,
                        viewNotify: function(a, b) {
                            a = a || k.getPixelURL(), a && viewNotify(a, b)
                        }
                    }), b.isBrowser() && (window.addEventListener ? (window.addEventListener("beforeunload", f), window.addEventListener("unload", f)) : window.attachEvent && (window.attachEvent("onbeforeunload", f), window.attachEvent("onunload", f))), d()
                }
            }();
        return function(c) {
            function d(a, b) {
                return x[z] || f(a, b)
            }

            function e() {
                z = -1;
                for (var b = 0; y >= b; b++)
                    if (x.hasOwnProperty(String(b))) {
                        z = b;
                        break
                    } return a.StreamSense.activeIndex = z, z
            }

            function f(b, c) {
                return b = b || null, c = c || null, b && "object" == typeof b && (c = b, b = null), x[++y] = new a.StreamSense(c, b), e(), x[y]
            }

            function g() {
                var b = !1,
                    c = z;
                if ("number" == typeof arguments[0] && isFinite(arguments[0])) c = arguments[0];
                else if (arguments[0] instanceof a.StreamSense)
                    for (var d in x)
                        if (x.hasOwnProperty(d) && x[d] === arguments[0]) {
                            c = d;
                            break
                        } return x.hasOwnProperty(String(c)) && (b = x[c], delete x[c], b.reset(), e()), b
            }

            function h(a) {
                return a = a || {}, d().setPlaylist(a), d().getPlaylist()
            }

            function i(a, b, c) {
                return a = a || {}, "number" == typeof b && (a.ns_st_cn = String(b)), d().setClip(a, c), d().getClip()
            }

            function j(a, b, c) {
                return "undefined" == typeof a ? !1 : (c = c || null, b = b || {}, d().notify(a, b, c))
            }

            function k(a) {
                "undefined" != typeof a && d().setLabels(a)
            }

            function l() {
                return d().getLabels()
            }

            function m(a) {
                "undefined" != typeof a && d().getPlaylist().setLabels(a)
            }

            function n() {
                return d().getPlaylist().getLabels()
            }

            function o(a) {
                "undefined" != typeof a && d().getClip().setLabels(a)
            }

            function p() {
                return d().getClip().getLabels()
            }

            function q(a) {
                return d().reset(a || {})
            }

            function r(a) {
                return d().getPlaylist().reset(a || {})
            }

            function s(a) {
                return d().getClip().reset(a || {})
            }

            function t(a) {
                return a = a || {}, d().viewNotify(null, a)
            }

            function u(a, b) {
                return arguments.length > 2 && (a = arguments[1], b = arguments[2]), a = a || {}, "number" == typeof b && (a.ns_st_po = String(b)), d().customNotify(a, b)
            }

            function v() {
                return d().exportState()
            }

            function w(a) {
                d().importState(a)
            }
            var x = {},
                y = -1,
                z = -1;
            b.extend(c, {
                activeIndex: z,
                newInstance: f,
                "new": f,
                destroyInstance: g,
                destroy: g,
                newPlaylist: h,
                newClip: i,
                notify: j,
                setLabels: k,
                getLabels: l,
                setPlaylistLabels: m,
                getPlaylistLabels: n,
                setClipLabels: o,
                getClipLabels: p,
                resetInstance: q,
                resetPlaylist: r,
                resetClip: s,
                viewEvent: t,
                customEvent: u,
                exportState: v,
                importState: w
            })
        }(H), H.PlayerEvents = i, H.InternalStates = j, H.ImplementationType = k, H
    }(), a.StreamingTag = a.StreamingTag || function() {
        var c = a.StreamSense,
            d = (a.StreamSense.PlayerEvents, a.StreamSense.InternalStates || null),
            e = a.StreamSense.ImplementationType || null,
            f = null != a.StreamSense.InternalStates && null != a.StreamSense.ImplementationType;
        return function() {
            var a = {
                    LongFormOnDemand: "12",
                    ShortFormOnDemand: "11",
                    Live: "13",
                    UserGeneratedLongFormOnDemand: "22",
                    UserGeneratedShortFormOnDemand: "21",
                    UserGeneratedLive: "23",
                    Bumper: "99",
                    Other: "00"
                },
                g = {
                    LinearOnDemandPreRoll: "11",
                    LinearOnDemandMidRoll: "12",
                    LinearOnDemandPostRoll: "13",
                    LinearLive: "21",
                    Other: "00"
                },
                h = function(a) {
                    function g() {
                        if (f)
                            if (b.getNamespace().comScore) q = new c, q.setImplementationType(e.REDUCED);
                            else if (b.exists(a))
                            if (r = b.isTrue(a.debug), b.exists(a.customerC2) && a.customerC2.length > 0) {
                                var d = a.secure ? "https://sb" : "http" + ("s" == document.location.href.charAt(4) ? "s://sb" : "://b");
                                q = new c, q.setPixelURL(d + ".scorecardresearch.com/p?c1=2"), q.setLabel("c2", a.customerC2), q.setImplementationType(e.REDUCED)
                            } else r && console && console.log("Warning: customerC2 is not provided (or incorrect) in the StreamingTag configuration.")
                    }

                    function h(a) {
                        b.exists(a) || (a = {});
                        for (var c in t) t.hasOwnProperty(c) && !b.exists(a[t[c]]) && ("ns_st_ci" == t[c] ? a.ns_st_ci = "0" : a[t[c]] = "*null");
                        return a
                    }

                    function i(a) {
                        for (var b in t)
                            if (t.hasOwnProperty(b) && !j(t[b], o, a)) return !1;
                        return !0
                    }

                    function j(a, c, d) {
                        if (b.exists(a) && b.exists(c) && b.exists(d)) {
                            var e = c[a],
                                f = d[a];
                            return b.exists(e) && b.exists(f) && e === f
                        }
                        return !1
                    }

                    function k(a) {
                        n++;
                        var c = {
                            ns_st_cn: String(n),
                            ns_st_pn: "1",
                            ns_st_tp: "0"
                        };
                        b.extend(c, a), q.setClip(c), o = a, q.play()
                    }

                    function l(a) {
                        n++, a = h(a);
                        var c = {
                            ns_st_cn: String(n),
                            ns_st_pn: "1",
                            ns_st_tp: "1",
                            ns_st_ad: "1"
                        };
                        b.extend(c, a), q.setClip(c), q.play(), p = !1
                    }

                    function m(a, b) {
                        a = h(a), u == s.None && (u = b), p && u == b && i(a) ? (q.getClip().setLabels(a), q.getState() != d.PLAYING && q.play()) : k(a), p = !0, u = b
                    }
                    var n = 0,
                        o = null,
                        p = !1,
                        q = null,
                        r = !1,
                        s = {
                            None: 0,
                            AudioContent: 1,
                            VideoContent: 2
                        },
                        t = ["ns_st_ci", "c3", "c4", "c6", "ns_st_st", "ns_st_pu", "ns_st_pr", "ns_st_ep", "ns_st_sn", "ns_st_en", "ns_st_ct"],
                        u = s.None;
                    b.extend(this, {
                        playAdvertisement: function() {
                            if (q) {
                                r && console && console.warn("Calling deprecated function 'playAdvertisement'. Please call 'playVideoAdvertisement' or 'playAudioAdvertisement' functions instead.");
                                var a = {
                                    ns_st_ct: "va"
                                };
                                l(a)
                            }
                        },
                        playVideoAdvertisement: function(a, c) {
                            if (q) {
                                var d = {
                                    ns_st_ct: "va"
                                };
                                c ? d.ns_st_ct = "va" + c : r && console && console.warn("Calling 'playVideoAdvertisement' without specifying the media type as a second parameter."), a && b.extend(d, a), l(d)
                            }
                        },
                        playAudioAdvertisement: function(a, c) {
                            if (q) {
                                var d = {
                                    ns_st_ct: "aa"
                                };
                                c ? d.ns_st_ct = "aa" + c : r && console && console.warn("Calling 'playAudioAdvertisement' without specifying the media type as a second parameter."), a && b.extend(d, a), l(d)
                            }
                        },
                        playContentPart: function(a) {
                            if (q) {
                                r && console && console.warn("Calling deprecated function 'playContentPart'. Please call 'playVideoContentPart' or 'playAudioContentPart' functions instead.");
                                var c = {
                                    ns_st_ct: "vc"
                                };
                                a && b.extend(c, a), m(c, s.VideoContent)
                            }
                        },
                        playVideoContentPart: function(a, c) {
                            if (q) {
                                var d = {
                                    ns_st_ct: "vc"
                                };
                                c ? d.ns_st_ct = "vc" + c : r && console && console.warn("Calling 'playVideoContentPart' without specifying the media type as a second parameter."), a && b.extend(d, a), m(d, s.VideoContent)
                            }
                        },
                        playAudioContentPart: function(a, c) {
                            if (q) {
                                var d = {
                                    ns_st_ct: "ac"
                                };
                                c ? d.ns_st_ct = "ac" + c : r && console && console.warn("Calling 'playAudioContentPart' without specifying the media type as a second parameter."), a && b.extend(d, a), m(d, s.AudioContent)
                            }
                        },
                        stop: function() {
                            q && q.pause()
                        }
                    }), g()
                };
            return function(a) {}(h), h.ContentType = a, h.AdType = g, h
        }()
    }(), a
});
(function() {
    window.Adomik = window.Adomik || {}, Adomik.randomAdGroup = function() {
        var a = Math.random();
        switch (!1) {
            case !(a < .09):
                return "ad_ex" + Math.floor(100 * a);
            case !(a < .1):
                return "ad_bc";
            default:
                return "ad_opt"
        }
    }
})();
(function() {
    Myspace = window.Myspace || {}, Myspace.Ads = Myspace.Ads || {}, Myspace.Ads.HeaderBidding = new function() {
        function j(a) {
            var b = Date.now(),
                c = [];
            return a.forEach(function(a, d) {
                a.id = "div-gpt-ad-" + b + "-" + d, c.push(a.id)
            }), c
        }

        function k(a) {
            var b = a.map(function(a) {
                var b = new n(a.id, a.dataset.path);
                if (a.dataset.bids) try {
                    var c = JSON.parse(a.dataset.bids);
                    if (Array.isArray(c)) {
                        var d = c.map(function(a) {
                            return a.bidder
                        });
                        b.bids = b.bids.filter(function(a) {
                            return d.indexOf(a.bidder) === -1
                        }), b.bids = b.bids.concat(c)
                    }
                } catch (e) {}
                return b
            });
            c.que.push(function() {
                c.addAdUnits(b)
            })
        }

        function l(a) {
            var b = [];
            return e.cmd.push(function() {
                a.forEach(function(a) {
                    var c = i[a.dataset.path];
                    a.style.width = c.size[0] + "px", a.style.height = c.size[1] + "px";
                    var d = "/" + f + "/" + a.dataset.path,
                        g = c.size,
                        h = a.id,
                        j = e.defineSlot(d, g, h).setTargeting("ad_group", Adomik.randomAdGroup()).setTargeting("ad_h", (new Date).getUTCHours().toString()).addService(e.pubads());
                    b.push(j), e.pubads().enableSingleRequest(), e.enableServices()
                })
            }), b
        }

        function m(a, b) {
            var d = [],
                f = {};
            a.forEach(function(a) {
                d.push(a.id), f[a.id] = a
            }), c.que.push(function() {
                c.requestBids({
                    adUnitCodes: d,
                    bidsBackHandler: function(a) {
                        e.cmd.push(function() {
                            c.que.push(function() {
                                c.setTargetingForGPTAsync(), e.pubads().refresh(b)
                            })
                        }), Object.keys(a).forEach(function(b) {
                            var c = f[b],
                                d = a[b].bids;
                            c.bids = d, c.bidsCallback && c.bidsCallback(d)
                        })
                    }
                })
            }), e.cmd.push(function() {
                d.forEach(function(a) {
                    e.display(a)
                })
            })
        }

        function n(a, b) {
            var c = i[b];
            this.code = a, this.mediaTypes = {
                banner: {
                    sizes: c.size
                }
            }, this.bids = h.reduce(function(a, b) {
                return b.type === c.type && b.size.equals(c.size) && a.push({
                    bidder: b.bidder,
                    params: b.params
                }), a
            }, [])
        }

        function o(a, b) {
            var c = document.createElement("script");
            c.src = a, c.onload = b, document.head.appendChild(c)
        }

        function p(a) {
            console.warn("[myspace][header-bidding] " + a)
        }
        var a = "//mtrx.go.sonobi.com/morpheus.myspace.1592.js";
        o(a);
        var b = "/scripts/prebid_20190404.js";
        o(b);
        var c = window.pbjs = window.pbjs || {
            que: []
        };
        Object.defineProperty(this, "logging", {
            set: function() {
                c.setConfig({
                    debug: !0
                })
            },
            get: function() {
                return c.getConfig("debug")
            }
        }), c.que.push(function() {
            c.setConfig({
                priceGranularity: {
                    buckets: [{
                        min: 0,
                        max: 4,
                        increment: .01
                    }, {
                        min: 4,
                        max: 20,
                        increment: .25
                    }]
                }
            })
        });
        var d = "//www.googletagservices.com/tag/js/gpt.js";
        o(d);
        var e = window.googletag = window.googletag || {
            cmd: []
        };
        e.cmd.push(function() {
            e.pubads().disableInitialLoad(), e.pubads().addEventListener("slotOnload", function(a) {
                var b = a.slot.getSlotElementId();
                g[b] && (g[b](), delete g[b])
            })
        });
        var f = "229683089",
            g = {},
            h = [];
        this.addBidder = function(a, b, d) {
            b.forEach(function(b) {
                var c = {
                    bidder: a,
                    type: b.type,
                    size: b.size,
                    params: b.params
                };
                h.push(c)
            }), d && c.que.push(function() {
                c.aliasBidder(d, a)
            })
        };
        var i = {};
        this.addSlotDefinition = function(a, b, c) {
            function e() {
                return !a || typeof a != "string" ? (p("invalid or missing path"), !1) : !b || typeof b != "string" ? (p("invalid or missing type"), !1) : !c || !Array.isArray(c) ? (p("invalid or missing size"), !1) : !0
            }
            if (!e()) return;
            var d = {
                type: b,
                size: c
            };
            i[a] = d
        }, this.renderAdInContainer = function(a, b, c, d) {
            var e = document.createElement("div");
            e.className = "ms-ad", e.dataset.path = a, c && (b.innerHTML = ""), b.appendChild(e), this.renderAds([e]), d && (g[e.id] = d)
        }, this.renderAds = function(a) {
            a = a.filter(function(a) {
                return i[a.dataset.path] ? !a.id : (p("slot definition not found for path: " + a.dataset.path), !1)
            });
            if (!a.length) return;
            j(a), k(a);
            var b = l(a);
            m(a, b)
        }, this.refreshAd = function(a) {
            if (!a.classList.contains("ms-ad") || !a.dataset.path) return;
            var b = document.createElement("div");
            b.className = "ms-ad", b.dataset.path = a.dataset.path, a.parentElement.replaceChild(b, a), this.renderAds([b])
        }, this.getBids = function(a, b) {
            a.bids ? b(a.bids) : a.bidsCallback = b
        }
    }
})();
(function() {
    Myspace.Ads.HeaderBidding.addBidder("defymedia", [{
        type: "atf",
        size: [300, 250],
        params: {
            placementId: 9963435
        }
    }, {
        type: "btf",
        size: [300, 250],
        params: {
            placementId: 9963436
        }
    }, {
        type: "atf",
        size: [728, 90],
        params: {
            placementId: 9963443
        }
    }, {
        type: "btf",
        size: [728, 90],
        params: {
            placementId: 9963444
        }
    }, {
        type: "all",
        size: [320, 50],
        params: {
            placementId: 9963450
        }
    }])
})();
(function() {
    Myspace.Ads.HeaderBidding.addBidder("districtm", [{
        type: "atf",
        size: [300, 250],
        params: {
            placementId: 9966275
        }
    }, {
        type: "btf",
        size: [300, 250],
        params: {
            placementId: 9966276
        }
    }, {
        type: "atf",
        size: [728, 90],
        params: {
            placementId: 9966285
        }
    }, {
        type: "btf",
        size: [728, 90],
        params: {
            placementId: 9966288
        }
    }, {
        type: "all",
        size: [320, 50],
        params: {
            placementId: 9966302
        }
    }], "appnexus")
})();
(function() {
    Myspace.Ads.HeaderBidding.addBidder("ix", [{
        type: "atf",
        size: [300, 250],
        params: {
            siteId: 185466,
            size: [300, 250]
        }
    }, {
        type: "btf",
        size: [300, 250],
        params: {
            siteId: 187784,
            size: [300, 250]
        }
    }, {
        type: "atf",
        size: [728, 90],
        params: {
            siteId: 185465,
            size: [728, 90]
        }
    }, {
        type: "btf",
        size: [728, 90],
        params: {
            siteId: 187785,
            size: [728, 90]
        }
    }, {
        type: "all",
        size: [320, 50],
        params: {
            siteId: 187786,
            size: [320, 50]
        }
    }])
})();
(function() {
    Myspace.Ads.HeaderBidding.addBidder("pulsepoint", [{
        type: "atf",
        size: [300, 250],
        params: {
            cf: "300X250",
            cp: 560417,
            ct: 529685
        }
    }, {
        type: "btf",
        size: [300, 250],
        params: {
            cf: "300X250",
            cp: 560417,
            ct: 529686
        }
    }, {
        type: "atf",
        size: [728, 90],
        params: {
            cf: "728x90",
            cp: 560417,
            ct: 529682
        }
    }, {
        type: "btf",
        size: [728, 90],
        params: {
            cf: "728x90",
            cp: 560417,
            ct: 529684
        }
    }, {
        type: "all",
        size: [320, 50],
        params: {
            cf: "320X50",
            cp: 560417,
            ct: 529994
        }
    }])
})();
(function() {
    Myspace.Ads.HeaderBidding.addBidder("rubicon", [{
        type: "atf",
        size: [300, 250],
        params: {
            accountId: "15964",
            siteId: "109826",
            zoneId: "556204"
        }
    }, {
        type: "btf",
        size: [300, 250],
        params: {
            accountId: "15964",
            siteId: "109826",
            zoneId: "556206"
        }
    }, {
        type: "atf",
        size: [728, 90],
        params: {
            accountId: "15964",
            siteId: "109826",
            zoneId: "556208"
        }
    }, {
        type: "btf",
        size: [728, 90],
        params: {
            accountId: "15964",
            siteId: "109826",
            zoneId: "556210"
        }
    }, {
        type: "all",
        size: [320, 50],
        params: {
            accountId: "15964",
            siteId: "109828",
            zoneId: "556228"
        }
    }])
})();
(function() {
    Myspace.Ads.HeaderBidding.addBidder("sekindo", [{
        type: "atf",
        size: [300, 250],
        params: {
            placementId: 9967071
        }
    }, {
        type: "btf",
        size: [300, 250],
        params: {
            placementId: 9967073
        }
    }, {
        type: "atf",
        size: [728, 90],
        params: {
            placementId: 9967083
        }
    }, {
        type: "btf",
        size: [728, 90],
        params: {
            placementId: 9967084
        }
    }, {
        type: "all",
        size: [320, 50],
        params: {
            placementId: 9967090
        }
    }], "appnexus")
})();
(function() {
    Myspace.Ads.HeaderBidding.addSlotDefinition("404_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("300x250_ATF", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("300x250_BTF", "btf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("728x90_ATF", "atf", [728, 90]), Myspace.Ads.HeaderBidding.addSlotDefinition("728x90_BTF", "btf", [728, 90]), Myspace.Ads.HeaderBidding.addSlotDefinition("ProfileConnections_Albums_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("ProfileConnections_People_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("ProfileConnections_Photos_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("ProfileConnections_Songs_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("ProfileConnections_Videos_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("DiscoverMusic_Desktop1_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("DiscoverVideos_Desktop_300x250_1", "btf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("DiscoverPeople_Desktop1_300x250", "btf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("ProfileEvents_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Featured_Desktop_300x250_BTF_1", "btf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Featured_Desktop_300x250_BTF_2", "btf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Featured_Desktop_300x250_BTF_3", "btf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Featured_Desktop_300x250_BTF_4", "btf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Messages_Desktop_728x90", "atf", [728, 90]), Myspace.Ads.HeaderBidding.addSlotDefinition("320x50_Mobile_LowTraffic", "all", [320, 50]), Myspace.Ads.HeaderBidding.addSlotDefinition("ROS_Mobile_320x50_ALL", "all", [320, 50]), Myspace.Ads.HeaderBidding.addSlotDefinition("PhotoDetail_Mobile_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("ProfileMixes_Mobile_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("ProfilePhotos_Mobile_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Mobile_SignIn_320x100", "atf", [320, 100]), Myspace.Ads.HeaderBidding.addSlotDefinition("Stream_Mobile_320x50", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("ProfilePhotos_Desktop_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Profile_Desktop_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Profile_Videos_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Search_Albums_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Search_Artists_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Search_Desktop_Articles_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Search_Desktop_Mixes_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Search_People_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Search_Videos_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("Search_Desktop_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("SignIn_Desktop_728x90", "atf", [728, 90]), Myspace.Ads.HeaderBidding.addSlotDefinition("Stream_Desktop_300x250_1", "btf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("TrendingVideos_Desktop_300x250", "atf", [300, 250]), Myspace.Ads.HeaderBidding.addSlotDefinition("TrendingVideos_Desktop_728x90", "atf", [728, 90]), Myspace.Ads.HeaderBidding.addSlotDefinition("Video_Desktop_Detail_300x250", "atf", [300, 250])
})();
(function() {
    function b(a) {
        var b = a.find(".ms-ad").get();
        Myspace.Ads.HeaderBidding.renderAds(b)
    }
    var a = $("body");
    b(a), comm.listen("page.changed", b, !0)
})();
(function() {
    Myspace.Ads = Myspace.Ads || {}, Myspace.Ads.Revcontent = new function() {
        function a() {
            return Math.floor(Math.random() * 16777215).toString(16)
        }

        function b(a) {
            var b = "";
            try {
                if (b = document.referrer, "undefined" == typeof b) throw "undefined"
            } catch (c) {
                b = document.location.href, ("" == b || "undefined" == typeof b) && (b = document.URL)
            }
            b = b.substr(0, 700);
            var d = document.createElement("script");
            d.id = "rc_" + Math.floor(Math.random() * 1e3), d.src = "https://trends.revcontent.com/serve.js.php?w=" + a.dataset.widgetId + "&t=" + d.id + "&c=" + (new Date).getTime() + "&width=" + (window.outerWidth || document.documentElement.clientWidth) + "&referer=" + b, d.async = !0, a.appendChild(d)
        }
        this.renderAds = function(c) {
            c = c.filter(function(a) {
                return !a.id && !!a.dataset.widgetId
            });
            if (!c.length) return;
            c.forEach(function(c) {
                c.id = "rcjsload_" + a(), b(c)
            })
        }
    }
})();
(function() {
    function b() {
        if (!a.length) return;
        var b = a.length,
            c = [];
        while (b--) {
            var d = a[b];
            d.isInViewport(!0) && (c.push(d), a.splice(b, 1))
        }
        c.length && Myspace.Ads.Revcontent.renderAds(c)
    }

    function c(a) {
        if (a.querySelectorAll) {
            var b = a.querySelectorAll(".horizontalContent > div");
            b.forEach(d)
        }
    }

    function d(a) {
        a.hasRevcontentEventListeners || (a.addEventListener("scroll", b), a.addEventListener("resize", b), a.hasRevcontentEventListeners = !0)
    }

    function e() {
        var a = document.querySelectorAll(".rc-ad:not([id])");
        return Array.apply(null, a)
    }
    var a = e();
    b(), d(window), c(window), comm.listen("page.changed", function(d) {
        var f = d.get(0);
        c(f), a = e(), b()
    }, !0)
})();
(function() {
    Myspace.Ads = Myspace.Ads || {}, Myspace.Ads.UnderdogMedia = new function() {
        function a(a) {
            var b = document.createElement("script");
            return b.async = !0, b.dataset.cfasync = !1, b.src = a, document.head.appendChild(b)
        }

        function b() {
            window.delete_udm_edge && window.delete_udm_edge()
        }
        this.renderEdgeUnit = function(c, d) {
            var e, f = "//udmserve.net/udm/img.fetch?sid=" + c + ";tid=1;dt=6;";
            d && (f += "subid=" + d + ";"), e = a(f), comm.listen("spaceway.page.beforeCleanup", function() {
                b(), e.remove()
            })
        }
    }
})();