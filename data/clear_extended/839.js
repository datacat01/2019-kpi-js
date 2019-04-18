(function(a) {
    a.libby = a.libby || {}
})(this);
(function(a) {
    a.libby.jsonp = {
        get: function(c) {
            var b = document.getElementsByTagName("head")[0],
                d = document.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = c;
            b.appendChild(d)
        }
    }
})(this);
(function(a) {
    a.libby.event = {
        _evts: {},
        on: function(c, b) {
            this._evts[c] || (this._evts[c] = []);
            this._evts[c].push(b)
        },
        fire: function(c, b) {
            var d = this._evts[c];
            if (d)
                for (var a = 0, f = d.length; a < f; a++) d[a].apply(null, b || [])
        }
    }
})(this);
(function(a) {
    var c = Array.prototype.slice;
    a.libby.dataSource = {
        _data: {},
        register: function(b, d) {
            b in this._data || (this._data[b] = {});
            this._data[b].source = d;
            return this
        },
        registerJsonp: function(b, d, c, f) {
            return this.register(b, function(b) {
                a[c] = b;
                f && (d += (d.indexOf("?") > -1 ? "&" : "?") + "_=" + (new Date).getTime());
                libby.jsonp.get(d)
            })
        },
        subscribe: function(b, d) {
            if (this._data[b].data) d.apply(this, this._data[b].data);
            else libby.event.on(b, d);
            return this
        },
        update: function(b) {
            var d = this;
            delete this._data[b].data;
            this._data[b].source.call(this,
                function() {
                    d._notifier.apply(d, [b].concat(c.call(arguments)))
                });
            return this
        },
        _notifier: function(b) {
            var d = c.call(arguments, 1);
            this._data[b].data = d;
            libby.event.fire(b, d)
        }
    }
})(this);
(function(a) {
    a.libby.defer = function(c) {
        var b = !1,
            d = [],
            a = function() {
                for (var a = c.apply(this, arguments), i = d, e = 0; e < i.length; e++) {
                    var g = i[e];
                    g.fn.apply(g.bind, g.args)
                }
                b = !0;
                return a
            };
        a.reset = function() {
            d = [];
            b = !1
        };
        a.register = function(c, a, e) {
            c = {
                fn: c,
                bind: a || void 0,
                args: e || []
            };
            if (b) c.fn.apply(c.bind, c.args);
            else {
                a: {
                    a = c.fn;
                    for (e = d.length; e--;)
                        if (d[e].fn === a) {
                            a = !0;
                            break a
                        } a = !1
                }
                a || d.push(c)
            }
        };
        return a
    }
})(this);
(function(a) {
    a.libby.cookie = {
        create: function(c, b, a, h) {
            b = encodeURIComponent(b);
            if (a) {
                var f = new Date;
                f.setTime(f.getTime() + a * 6E4);
                b += "; expires=" + f.toGMTString()
            }
            document.cookie = c + "=" + b + "; path=/" + (h ? "; domain=" + h : "");
            return this
        },
        _escapeRegExp: function(a) {
            return a.replace(/[-[\]{}()*+?.\\^$|,#\s]/g, "\\$&")
        },
        read: function(a) {
            return (a = document.cookie.match(RegExp("(?:;|^)\\s*" + this._escapeRegExp(a) + "=([^;]*)"))) ? decodeURIComponent(a[1]) : null
        },
        erase: function(a, b) {
            return this.create(a, "", -1, b)
        }
    }
})(this);
(function(a) {
    a.libby.module = a.libby.module || {
        modules: {},
        pathForId: function(c, b) {
            return a.libby.module.modules[c] || b
        },
        add: function(c) {
            for (var b in c) c.hasOwnProperty(b) && (a.libby.module.modules[b] = c[b])
        }
    }
})(typeof exports != "undefined" ? exports : this);