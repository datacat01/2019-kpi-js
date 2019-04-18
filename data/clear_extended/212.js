(function(h) {
    if (typeof define === "function" && define.amd) define(h);
    else if (typeof exports === "object") module.exports = h();
    else {
        var j = window.Cookies,
            b = window.Cookies = h();
        b.noConflict = function() {
            window.Cookies = j;
            return b
        }
    }
})(function() {
    function h() {
        for (var b = 0, c = {}; b < arguments.length; b++) {
            var a = arguments[b],
                f;
            for (f in a) c[f] = a[f]
        }
        return c
    }

    function j(b) {
        function c(a, f, e) {
            var g;
            if (arguments.length > 1) {
                e = h({
                    path: "/"
                }, c.defaults, e);
                if (typeof e.expires === "number") {
                    var i = new Date;
                    i.setMilliseconds(i.getMilliseconds() +
                        e.expires * 864E5);
                    e.expires = i
                }
                try {
                    g = JSON.stringify(f), /^[\{\[]/.test(g) && (f = g)
                } catch (j) {}
                f = b.write ? b.write(f, a) : encodeURIComponent(String(f)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                a = encodeURIComponent(String(a));
                a = a.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                a = a.replace(/[\(\)]/g, escape);
                return document.cookie = [a, "=", f, e.expires && "; expires=" + e.expires.toUTCString(), e.path && "; path=" + e.path, e.domain && "; domain=" + e.domain, e.secure ? "; secure" :
                    ""
                ].join("")
            }
            a || (g = {});
            for (var i = document.cookie ? document.cookie.split("; ") : [], m = /(%[0-9A-Z]{2})+/g, l = 0; l < i.length; l++) {
                var d = i[l].split("="),
                    k = d[0].replace(m, decodeURIComponent),
                    d = d.slice(1).join("=");
                d.charAt(0) === '"' && (d = d.slice(1, -1));
                try {
                    d = b.read ? b.read(d, k) : b(d, k) || d.replace(m, decodeURIComponent);
                    if (this.json) try {
                        d = JSON.parse(d)
                    } catch (n) {}
                    if (a === k) {
                        g = d;
                        break
                    }
                    a || (g[k] = d)
                } catch (o) {}
            }
            return g
        }
        c.get = c.set = c;
        c.getJSON = function() {
            return c.apply({
                json: true
            }, [].slice.call(arguments))
        };
        c.defaults = {};
        c.remove = function(a, b) {
            c(a, "", h(b, {
                expires: -1
            }))
        };
        c.withConverter = j;
        return c
    }
    return j(function() {})
});