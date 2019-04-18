function FindApi() {
    this._applicationUrl = "/", this._serviceApiBaseUrl = "", this._trackId = "", this._trackParam = "_t_", this._dontTrackQueryParam = "_t_dtq", this._allowTrackingCookieName = null, this._bufferTrackRequest = !0, this.setApplicationUrl = function(t) {
        this._applicationUrl = t
    }, this.setServiceApiBaseUrl = function(t) {
        this._serviceApiBaseUrl = t
    }, this.setAllowTrackingCookieName = function(t) {
        this._allowTrackingCookieName = t
    }, this.setTrackParam = function(t) {
        this._trackParam = t
    }, this.setDontTrackQueryParam = function(t) {
        this._dontTrackQueryParam = t
    }, this.bindWindowEvents = function() {
        var t = this;
        window.history && (window.onbeforeunload = function() {
            var e = document.location.href;
            e.indexOf("q=") > 0 && -1 == e.indexOf(t._dontTrackQueryParam + "=") && window.history.replaceState(window.history.state, window.document.title, e + (e.indexOf("?") > 0 ? "&" : "?") + t._dontTrackQueryParam + "=true")
        }), window.onload = function() {
            var e = t._toArray(document.getElementsByTagName("A")),
                r = document.createElement("A");
            r.href = document.location.href;
            for (var n = 0; e.length > n; n++) {
                var a = function() {
                    var a = e[n].href,
                        i = t._getTrackQueryParamsFromUrl(a);
                    if (i.trackQueryParams.length > 0) {
                        var o = document.createElement("A");
                        o.href = a, ("/" != t._applicationUrl && r.hostname + t._applicationUrl != o.hostname + "/" + o.pathname.split("/")[1] + "/" || "/" === t._applicationUrl && r.hostname != o.hostname) && (e[n].href = t._serviceApiBaseUrl + "_click?" + t._trackParam + i.trackQueryParams.join("&" + t._trackParam) + "&" + t._trackParam + "redirect=" + encodeURIComponent(t._getUriWithoutTrackParams(a, i)))
                    }
                };
                a()
            }
        }
    }, this.bindAClickEvent = function() {
        for (var t = this, e = t._toArray(document.getElementsByTagName("A")), r = 0; e.length > r; r++) {
            var n = function() {
                var n = e[r].href;
                if (-1 == n.indexOf(t._serviceApiBaseUrl + "_click?")) {
                    var a = t._getTrackQueryParamsFromUrl(n);
                    a.trackQueryParams.length > 0 && (e[r].onclick = function(e) {
                        a.trackQueryParams.length > 0 && t._bufferEvent(t._constructTrackUrl(a.trackQueryParams)), e = e || window.event;
                        var r = e.currentTarget || e.srcElement;
                        r && (r.href = t._getUriWithoutTrackParams(n, a))
                    })
                }
            };
            n()
        }
    }, this._getUriWithoutTrackParams = function(t, e) {
        return e.trackQueryParams.length > 0 && e.nonTrackQueryParams.length > 0 ? t.split("?")[0] + "?" + e.nonTrackQueryParams.join("&") : e.trackQueryParams.length > 0 ? t.split("?")[0] : void 0
    }, this._getTrackQueryParamsFromUrl = function(t) {
        var e = t.split("?")[1] || "",
            r = e.split("&"),
            n = [],
            a = [];
        this._bufferTrackRequest = !0;
        for (var i = 0; r.length > i; i++) {
            var o = r[i].split("=");
            if (decodeURIComponent(o[0]) == this._dontTrackQueryParam && "true" == o[1] && (this._bufferTrackRequest = !1), decodeURIComponent(o[0]).slice(0, this._trackParam.length) == this._trackParam) {
                var s = decodeURIComponent(o[0]).slice(this._trackParam.length);
                n.push(encodeURIComponent(s) + "=" + o[1])
            } else a.push(r[i])
        }
        return {
            trackQueryParams: n,
            nonTrackQueryParams: a
        }
    }, this._constructTrackUrl = function(t) {
        return this._serviceApiBaseUrl + "_track?" + t.join("&")
    }, this.processEventFromCurrentUri = function() {
        var t = document.location.href,
            e = this._getTrackQueryParamsFromUrl(t);
        e.trackQueryParams.length > 0 && (this._bufferTrackRequest && this._bufferEvent(this._constructTrackUrl(e.trackQueryParams)), window.history && window.history.replaceState(window.history.state, window.document.title, this._getUriWithoutTrackParams(t, e)))
    }, this._toArray = function(t) {
        var e = [];
        if (!t || !t.length) return e;
        for (var r = 0; t.length > r; r++) r in t && e.push(t[r]);
        return e
    }, this._getCookies = function(t, e) {
        var r, n, a, i = [],
            o = document.cookie.split(";");
        for (r = 0; o.length > r && (n = o[r].substr(0, o[r].indexOf("=")), n = n.replace(/^\s+|\s+$/g, ""), t && !t(n) || (a = o[r].substr(o[r].indexOf("=") + 1), i.push({
                name: n,
                value: decodeURIComponent(a)
            }), !e || 0 !== --e)); r++);
        return i
    }, this._getCookie = function(t) {
        var e = this._getCookies(function(e) {
            return t === e
        }, 1);
        return e.length ? e[0].value : void 0
    }, this._setCookie = function(t, e, r) {
        var n = new Date;
        n.setDate(n.getDate() + r), e = encodeURIComponent(e) + "; Path=/" + (null === r ? "" : "; expires=" + n.toUTCString()), document.cookie = t + "=" + e
    }, this._deleteCookie = function(t) {
        document.cookie = t + "=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    }, this._debug = function(t) {
        window.console && console.log(t)
    }, this._getBufferedEvents = function() {
        return this._getCookies(function(t) {
            return 0 === t.indexOf("_findEvent")
        })
    }, this._bufferEvent = function(t) {
        this._setCookie("_findEvent" + this._createUUID(), t, 3650)
    }, this._deleteBufferedEvent = function(t) {
        this._deleteCookie(t)
    }, this.sendBufferedEvents = function() {
        for (var t = this._getBufferedEvents(), e = 0; t.length > e; e++) this._sendEvent(t[e].value), this._deleteBufferedEvent(t[e].name)
    }, this._sendEvent = function(t) {
        if (window.XMLHttpRequest) {
            var e = new XMLHttpRequest;
            if ("withCredentials" in e) return e.open("GET", t, !0), e.send(), void 0
        }
        if (window.XDomainRequest) {
            var r = new XDomainRequest;
            return r.open("GET", t), r.send(), void 0
        }
        var n = new Image(1, 1);
        n.src = t
    }, this._createUUID = function() {
        for (var t = "", e = this._PRNG(); 32 > t.length; t += Math.floor(4294967295 * e()).toString(16));
        return [t.substr(0, 8), t.substr(8, 4), "4" + t.substr(12, 3), "89AB" [Math.floor(4 * Math.random())] + t.substr(16, 3), t.substr(20, 12)].join("-")
    }, this._PRNG = function() {
        return function(t) {
            var e = 0,
                r = 0,
                n = 0,
                a = 1,
                i = [],
                o = 0,
                s = 4022871197,
                c = function(t) {
                    t = "" + t;
                    for (var e = 0; t.length > e; e++) {
                        s += t.charCodeAt(e);
                        var r = .02519603282416938 * s;
                        s = r >>> 0, r -= s, r *= s, s = r >>> 0, r -= s, s += 4294967296 * r
                    }
                    return 2.3283064365386963e-10 * (s >>> 0)
                };
            e = c(" "), r = c(" "), n = c(" ");
            for (var u = 0; 8 > u; u++) i[u] = c(" ");
            0 === t.length && (t = [+new Date]);
            for (var h = 0; t.length > h; h++)
                for (e -= c(t[h]), 0 > e && (e += 1), r -= c(t[h]), 0 > r && (r += 1), n -= c(t[h]), 0 > n && (n += 1), u = 0; 8 > u; u++) i[u] -= c(t[h]), 0 > i[u] && (i[u] += 1);
            var f = function() {
                var t = 2091639;
                o = 0 | 8 * i[o];
                var s = i[o],
                    c = t * e + 2.3283064365386963e-10 * a;
                return e = r, r = n, n = c - (a = 0 | c), i[o] -= n, 0 > i[o] && (i[o] += 1), s
            };
            return f.uint32 = function() {
                return 4294967296 * f()
            }, f.fract53 = function() {
                return f() + 1.1102230246251565e-16 * (0 | 2097152 * f())
            }, f.addNoise = function() {
                for (var t = arguments.length - 1; t >= 0; t--)
                    for (u = 0; 8 > u; u++) i[u] -= c(arguments[t]), 0 > i[u] && (i[u] += 1)
            }, f.version = "Kybos 0.9", f.args = t, f
        }(Array.prototype.slice.call(arguments))
    }
}