// enquire.js v1.5.6 - Awesome Media Queries in JavaScript
// Copyright (c) 2013 Nick Williams - http://wicky.nillia.ms/enquire.js
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

window.enquire = function(e) {
    "use strict";

    function t(e, t) {
        var n = 0,
            r = e.length,
            i;
        for (n; n < r; n++) {
            i = t(e[n], n);
            if (i === !1) break
        }
    }

    function n(e) {
        return Object.prototype.toString.apply(e) === "[object Array]"
    }

    function r(e) {
        return typeof e == "function"
    }

    function i(e) {
        this.initialised = !1, this.options = e, e.deferSetup || this.setup()
    }

    function s(e, t) {
        this.query = e, this.isUnconditional = t, this.handlers = [], this.matched = !1
    }

    function o() {
        if (!e) throw new Error("matchMedia is required");
        var t = new s("only all");
        this.queries = {}, this.listening = !1, this.browserIsIncapable = !t.matchMedia()
    }
    return i.prototype = {
        setup: function(e) {
            this.options.setup && this.options.setup(e), this.initialised = !0
        },
        on: function(e) {
            this.initialised || this.setup(e), this.options.match(e)
        },
        off: function(e) {
            this.options.unmatch && this.options.unmatch(e)
        },
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off()
        },
        equals: function(e) {
            return this.options === e || this.options.match === e
        }
    }, s.prototype = {
        matchMedia: function() {
            return e(this.query).matches
        },
        addHandler: function(e, t) {
            var n = new i(e);
            this.handlers.push(n), t && this.matched && n.on()
        },
        removeHandler: function(e) {
            var n = this.handlers;
            t(n, function(t, r) {
                if (t.equals(e)) return t.destroy(), !n.splice(r, 1)
            })
        },
        assess: function(e) {
            this.matchMedia() || this.isUnconditional ? this.match(e) : this.unmatch(e)
        },
        match: function(e) {
            if (this.matched) return;
            t(this.handlers, function(t) {
                t.on(e)
            }), this.matched = !0
        },
        unmatch: function(e) {
            if (!this.matched) return;
            t(this.handlers, function(t) {
                t.off(e)
            }), this.matched = !1
        }
    }, o.prototype = {
        register: function(e, i, o) {
            var u = this.queries,
                a = o && this.browserIsIncapable,
                f = this.listening;
            return u.hasOwnProperty(e) || (u[e] = new s(e, a), this.listening && u[e].assess()), r(i) && (i = {
                match: i
            }), n(i) || (i = [i]), t(i, function(t) {
                u[e].addHandler(t, f)
            }), this
        },
        unregister: function(e, n) {
            var r = this.queries;
            return r.hasOwnProperty(e) ? (n ? r[e].removeHandler(n) : (t(this.queries[e].handlers, function(e) {
                e.destroy()
            }), delete r[e]), this) : this
        },
        fire: function(e) {
            var t = this.queries,
                n;
            for (n in t) t.hasOwnProperty(n) && t[n].assess(e);
            return this
        },
        listen: function(e) {
            function n(n) {
                var r;
                window.addEventListener(n, function(n) {
                    r && clearTimeout(r), r = setTimeout(function() {
                        t.fire(n)
                    }, e)
                }, !1)
            }
            var t = this;
            return e = e || 500, this.listening ? this : (window.addEventListener && (n("resize"), n("orientationChange")), t.fire(), this.listening = !0, this)
        }
    }, new o
}(window.matchMedia);